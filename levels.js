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

var level5 = {
    required_score: 15,
    globs: function() {
        return [
            new Globs.GreenGlob([ 0, -3]),
            new Globs.GreenGlob([-1, -2]),
            new Globs.GreenGlob([ 1, -2]),
            new Globs.GreenGlob([-2,  1]),
            new Globs.GreenGlob([ 2,  1])
        ]
    }
};

var level6 = {
    required_score: 15,
    globs: function() {
        return [
            new Globs.GreenGlob([2, 0]),
            new Globs.GreenGlob([1, 1]),
            new Globs.GreenGlob([3, 1]),
            new Globs.GreenGlob([0, 4]),
            new Globs.GreenGlob([4, 4])
        ]
    }
};

var level7 = {
    required_score: 15,
    globs: function() {
        return [
            new Globs.GreenGlob([ 0,  0]),
            new Globs.GreenGlob([ 1, -1]),
            new Globs.GreenGlob([-1, -1]),
            new Globs.GreenGlob([ 2, -4]),
            new Globs.GreenGlob([-2, -4])
        ]
    }
};

var level8 = {
    required_score: 15,
    globs: function() {
        return [
            new Globs.GreenGlob([ 0, 0]),
            new Globs.GreenGlob([ 1, 0.5]),
            new Globs.GreenGlob([-2, 2]),
            new Globs.GreenGlob([ 2, 2]),
            new Globs.GreenGlob([-3, 4.5]),
        ]
    }
};

var level9 = {
    required_score: 15,
    globs: function() {
        return [
            new Globs.GreenGlob([ 0, 2]),
            new Globs.GreenGlob([-2, 2/3]),
            new Globs.GreenGlob([-3, -1]),
            new Globs.GreenGlob([ 3, -1]),
            new Globs.GreenGlob([ 4, -10/3]),
        ]
    }
};

var level10 = {
    required_score: 21,
    globs: function() {
        return [
            new Globs.GreenGlob([ 1, -0.5]),
            new Globs.GreenGlob([ 3, -0.5]),
            new Globs.GreenGlob([ 0, 1]),
            new Globs.GreenGlob([ 4, 1]),
            new Globs.GreenGlob([-1, 3.5]),
            new Globs.GreenGlob([ 5, 3.5])
        ]
    }
};

$$.levels = [ 
    level1, level2, level3, level4, level5, level6, level7, level8, level9, level10
];

return $$;

};
