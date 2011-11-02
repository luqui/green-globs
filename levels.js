LevelsModule = function(Globs) {

$$ = {};

var level1 = function() {
    return [ 
        new Globs.GreenGlob([-3, -3]),
        new Globs.GreenGlob([-1, -1]),
        new Globs.GreenGlob([ 1,  1]),
        new Globs.GreenGlob([-3,  0]),
        new Globs.GreenGlob([-1,  2]),
        new Globs.GreenGlob([ 1,  4])
    ]
};

$$.levels = [ level1 ];

return $$;

};
