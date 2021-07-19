define("userfrmAddEditOfferController", {
    //Type your controller code here 
});

define("frmAddEditOfferController", ["userfrmAddEditOfferController", "frmAddEditOfferControllerActions"], function() {
    var controller = require("userfrmAddEditOfferController");
    var controllerActions = ["frmAddEditOfferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
