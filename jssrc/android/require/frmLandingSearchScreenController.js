define("userfrmLandingSearchScreenController", {
    //Type your controller code here 
});
define("frmLandingSearchScreenControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for SearchForm **/
    AS_UWI_hdbbdea3798a452f850714ed655ca215: function AS_UWI_hdbbdea3798a452f850714ed655ca215(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSearchList");
        ntf.navigate();
    }
});
define("frmLandingSearchScreenController", ["userfrmLandingSearchScreenController", "frmLandingSearchScreenControllerActions"], function() {
    var controller = require("userfrmLandingSearchScreenController");
    var controllerActions = ["frmLandingSearchScreenControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
