define("userfrmLandingSearchScreenController", {
    //Type your controller code here 
});

define("frmLandingSearchScreenController", ["userfrmLandingSearchScreenController", "frmLandingSearchScreenControllerActions"], function() {
    var controller = require("userfrmLandingSearchScreenController");
    var controllerActions = ["frmLandingSearchScreenControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
