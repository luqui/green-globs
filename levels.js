LevelsModule = function(Globs) {

$$ = {};

var level1 = {
    required_score: 12,
    globs: function() {
        return [ 
            new Globs.GreenGlob([-3, -3]),
            new Globs.GreenGlob([-1, -1]),
            new Globs.GreenGlob([ 1,  1]),
            new Globs.GreenGlob([-3,  0]),
            new Globs.GreenGlob([-1,  2]),
            new Globs.GreenGlob([ 1,  4])
        ]
    }
};

var level2 = {
    required_score: 12,
    globs: function() {
        return [
            new Globs.GreenGlob([-2, -4]),
            new Globs.GreenGlob([-1, -2]),
            new Globs.GreenGlob([ 2,  4]),
            new Globs.GreenGlob([-3,  3]),
            new Globs.GreenGlob([-1,  1]),
            new Globs.GreenGlob([ 1, -1])
        ]
    }
};

var level3 = {
    required_score: 12,
    globs: function() {
        return [
            new Globs.GreenGlob([-4, -2]),
            new Globs.GreenGlob([ 0,  0]),
            new Globs.GreenGlob([ 4,  2]),
            new Globs.GreenGlob([-1, -3]),
            new Globs.GreenGlob([ 3, -1]),
            new Globs.GreenGlob([ 7,  1])
        ]
    }
};

var level4 = {
    required_score: 15,
    globs: function() {
        return [
            new Globs.GreenGlob([ 0,  0]),
            new Globs.GreenGlob([-1,  1]),
            new Globs.GreenGlob([ 1,  1]),
            new Globs.GreenGlob([-2,  4]),
            new Globs.GreenGlob([ 2,  4])
        ]
    }
};

$$.levels = [ level1, level2, level3, level4 ];

return $$;

};
