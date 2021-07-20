define("noContr/OfferList/userOfferListController", function() {
    return {};
});
define("noContr/OfferList/OfferListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("noContr/OfferList/OfferListController", ["noContr/OfferList/userOfferListController", "noContr/OfferList/OfferListControllerActions"], function() {
    var controller = require("noContr/OfferList/userOfferListController");
    var actions = require("noContr/OfferList/OfferListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
