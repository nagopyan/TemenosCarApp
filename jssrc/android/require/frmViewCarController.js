define("userfrmViewCarController", {
    //Type your controller code here 
});

define("frmViewCarController", ["userfrmViewCarController", "frmViewCarControllerActions"], function() {
    var controller = require("userfrmViewCarController");
    var controllerActions = ["frmViewCarControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
