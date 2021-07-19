define("userRowFlexContainerController", {
    //Type your controller code here 
});
define("RowFlexContainerControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("RowFlexContainerController", ["userRowFlexContainerController", "RowFlexContainerControllerActions"], function() {
    var controller = require("userRowFlexContainerController");
    var controllerActions = ["RowFlexContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
