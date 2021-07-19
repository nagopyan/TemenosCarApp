define("noContr/headerComp/userheaderCompController", function() {
    return {};
});

define("noContr/headerComp/headerCompController", ["noContr/headerComp/userheaderCompController", "noContr/headerComp/headerCompControllerActions"], function() {
    var controller = require("noContr/headerComp/userheaderCompController");
    var actions = require("noContr/headerComp/headerCompControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
