define("noContr/loginComp/userloginCompController", function() {
    return {};
});

define("noContr/loginComp/loginCompController", ["noContr/loginComp/userloginCompController", "noContr/loginComp/loginCompControllerActions"], function() {
    var controller = require("noContr/loginComp/userloginCompController");
    var actions = require("noContr/loginComp/loginCompControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
