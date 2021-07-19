define("userfrmViewManageOfferController", {
    //Type your controller code here 
});

define("frmViewManageOfferController", ["userfrmViewManageOfferController", "frmViewManageOfferControllerActions"], function() {
    var controller = require("userfrmViewManageOfferController");
    var controllerActions = ["frmViewManageOfferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
