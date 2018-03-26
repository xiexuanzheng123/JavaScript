var a = {
    valueOf: function() {
        return "42";
    }
};
var b = {
    toString: function() {
        return "42";
    }
};

var c = [4, 2];
c.toString = function() {
    return this.join('');
};