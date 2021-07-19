define("userfrmViewCarController", {});

define("frmViewCarController", ["userfrmViewCarController", "frmViewCarControllerActions"], function() {
    var controller = require("userfrmViewCarController");
    var controllerActions = ["frmViewCarControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
