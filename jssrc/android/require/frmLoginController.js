define("userfrmLoginController", {
    //Type your controller code here 
});
define("frmLoginControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmLoginController", ["userfrmLoginController", "frmLoginControllerActions"], function() {
    var controller = require("userfrmLoginController");
    var controllerActions = ["frmLoginControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
