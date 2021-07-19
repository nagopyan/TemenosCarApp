define("userfrmViewOffersController", {
    //Type your controller code here 
});

define("frmViewOffersController", ["userfrmViewOffersController", "frmViewOffersControllerActions"], function() {
    var controller = require("userfrmViewOffersController");
    var controllerActions = ["frmViewOffersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
