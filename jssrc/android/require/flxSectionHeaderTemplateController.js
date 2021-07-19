define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});

define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
