// You can typically write an anonymous function like this
var magic = function() {
    return new Date();
};

console.log(magic());


// But you can alternatively write an anonymous function with an arrow
// function '=>' like this
var magic2 = () => {
    return new Date();
};

console.log(magic2());
