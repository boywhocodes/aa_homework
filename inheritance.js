var Cat = require("./cat.js"),
    Dog = require("./dog.js");

    var c = new Cat("Maria");
    c.meow();

    var d = new Dog("India");
    d.woof();

    // webpack ./inheritance.js bundle.js
