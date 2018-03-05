function foo(a, b) {
    console.log("a: " + a + "b: " + b);
}
foo.apply(null, [2, 3]);