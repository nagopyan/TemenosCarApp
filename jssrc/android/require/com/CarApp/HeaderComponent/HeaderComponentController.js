define("com/CarApp/HeaderComponent/userHeaderComponentController", function() {
    return {};
});

define("com/CarApp/HeaderComponent/HeaderComponentController", ["com/CarApp/HeaderComponent/userHeaderComponentController", "com/CarApp/HeaderComponent/HeaderComponentControllerActions"], function() {
    var controller = require("com/CarApp/HeaderComponent/userHeaderComponentController");
    var actions = require("com/CarApp/HeaderComponent/HeaderComponentControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
