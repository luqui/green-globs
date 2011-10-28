var GlobsModule = function(jQuery, canvas, params) {

var with_defaults = function(h, def) {
    var r = jQuery.extend({}, h);
    for (var k in def) {
        if (def.hasOwnProperty(k)) {
            if (!(k in r)) r[k] = def[k];
        }
    }
    return r;
};

var $$ = {};
params = with_defaults(params || {}, {
    minx: -8,
    maxx: 8,
    miny: -6,
    maxy: 6,
    animation_speed: 10,
    accuracy: 5
});

var cx = canvas.getContext('2d');

var minx = $$.minx = params.minx;
var maxx = $$.maxx = params.maxx;
var miny = $$.miny = params.miny;
var maxy = $$.maxy = params.maxy;

var draw_stepx    = (maxx - minx) / canvas.width;
var animate_stepx = params.animation_speed * draw_stepx;
var check_stepx   = draw_stepx / params.accuracy;

var WT = function(w) { return w * canvas.width / (maxx - minx) };
var XT = function(x) { return WT(x - minx) };
var HT = function(h) { return -h * canvas.height / (maxy - miny) };
var YT = function(y) { return canvas.height + HT(y - miny) };

var atomic = function(f) {
    return function() {
        cx.save();
        f.apply(this, arguments);
        cx.restore();
    };
};


$$.drawAxes = function() {
    cx.strokeStyle = '#000';
    cx.beginPath();
    cx.moveTo(XT(minx), YT(0));
    cx.lineTo(XT(maxx), YT(0));
    cx.moveTo(XT(0), YT(miny));
    cx.lineTo(XT(0), YT(maxy));
    cx.stroke();

    cx.strokeStyle = '#ddd';
    cx.beginPath();
    for (var x = minx; x <= maxx; x += 1) {
        cx.moveTo(XT(x), YT(miny));
        cx.lineTo(XT(x), YT(maxy));
    }
    
    for (var y = miny; y <= maxy; y += 1) {
        cx.moveTo(XT(minx), YT(y));
        cx.lineTo(XT(maxx), YT(y));
    }
    cx.stroke();
};

$$.parse = function(str) {
    return eval('(function(x) { return (' + str + ')})');
};

$$.plot = function(f, xmin, xmax) {
    cx.strokeStyle = '#a00';
    cx.beginPath();
    cx.moveTo(XT(minx), YT(f(xmin)));
    for (var x = xmin; x <= xmax; x += draw_stepx) {
        cx.lineTo(XT(x), YT(f(x)));
    }
    cx.stroke();
};

$$.GreenGlob = function(coords) {
    return {
        type: 'green',
        coords: coords,
        radius: 0.4,
        draw: atomic(function() {
            cx.fillStyle = '#0a0';
            cx.beginPath();
            cx.arc(XT(this.coords[0]), YT(this.coords[1]), WT(this.radius), 0, 2*Math.PI);
            cx.fill();
        })
    };
};

$$.PoppedGlob = function(coords) {
    return {
        type: 'popped',
        coords: coords,
        radius: 0.4,
        draw: atomic(function() {
            cx.fillStyle = '#ddd';
            cx.beginPath();
            cx.arc(XT(this.coords[0]), YT(this.coords[1]), WT(this.radius), 0, 2*Math.PI);
            cx.fill();
        })
    }
};

$$.StopGlob = function(coords) {
    return {
        type: 'stop',
        coords: coords,
        radius: 0.4,
        draw: atomic(function() {
            cx.lineWidth = 2;
            cx.strokeStyle = '#00a';
            cx.beginPath();
            cx.arc(XT(this.coords[0]), YT(this.coords[1]), WT(this.radius), 0, 2*Math.PI);
            cx.stroke();
        })
    };
};

$$.drawGlobs = atomic(function(globs) {
    for (var i = 0; i < globs.length; i++) {
        globs[i].draw();
    }
});

var plotFull = function(globs, f, minx, maxx) {
    cx.clearRect(0,0,canvas.width,canvas.height);
    $$.drawAxes();
    $$.drawGlobs(globs);
    $$.plot(f, minx, maxx);
};

var stepFunction = function(globs, f, x) {
    plotFull(globs, f, minx, x);

    var targetx = x + animate_stepx;
    while (x < targetx) {
        var y = f(x);
        for (var i = 0; i < globs.length; i++) {
            var glob = globs[i];
            if ((x-glob.coords[0])*(x-glob.coords[0]) + (y-glob.coords[1])*(y-glob.coords[1]) <= glob.radius*glob.radius) { 
                // hit!
                if (glob.type == 'stop') { 
                    plotFull(globs, f, minx, x);
                    return null; 
                }
                if (glob.type == 'green') {
                    globs[i] = $$.PoppedGlob(glob.coords);
                }
            }
        }
        x += check_stepx;
    }
    if (targetx > maxx) { return; }
    return function() {
        return stepFunction(globs, f, targetx);
    };
};

$$.run = function(globs, f) {
    var c = function() { return stepFunction(globs, f, minx) }
    var t = function() {
        if (c) {
            c = c();
            setTimeout(t, 20);
        }
    };
    t();
};

return $$;

};
