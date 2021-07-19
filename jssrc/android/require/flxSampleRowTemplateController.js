define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});

define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
