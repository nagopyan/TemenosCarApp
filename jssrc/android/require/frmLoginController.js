define("userfrmLoginController", {
    //Type your controller code here 
});

define("frmLoginController", ["userfrmLoginController", "frmLoginControllerActions"], function() {
    var controller = require("userfrmLoginController");
    var controllerActions = ["frmLoginControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
