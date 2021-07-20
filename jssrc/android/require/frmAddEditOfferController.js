define("userfrmAddEditOfferController", {
    onViewCreated: function() {
        this.view.preShow = this.preShow;
    },
    preShow: function() {
        this.view.AddEditScrollContainer = this.onNavigate;
    },
    onNavigate: function(obj) {
        this.view.TextFieldOfferTitle.text = obj.title;
        this.view.TextFieldImageUrl.text = obj.imgUrl;
    }
});
define("frmAddEditOfferControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmAddEditOfferController", ["userfrmAddEditOfferController", "frmAddEditOfferControllerActions"], function() {
    var controller = require("userfrmAddEditOfferController");
    var controllerActions = ["frmAddEditOfferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
