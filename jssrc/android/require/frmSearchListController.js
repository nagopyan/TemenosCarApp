define("userfrmSearchListController", {
    //Type your controller code here 
});

define("frmSearchListController", ["userfrmSearchListController", "frmSearchListControllerActions"], function() {
    var controller = require("userfrmSearchListController");
    var controllerActions = ["frmSearchListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
