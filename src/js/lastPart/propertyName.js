var prefix = "user_";
var o = {
    baz: function() {

    }
};
o[prefix + 'foo'] = function() {};
o[prefix + 'bar'] = function() {};