define("noContr/OfferList/userOfferListController", function() {
    return {};
});

define("noContr/OfferList/OfferListController", ["noContr/OfferList/userOfferListController", "noContr/OfferList/OfferListControllerActions"], function() {
    var controller = require("noContr/OfferList/userOfferListController");
    var actions = require("noContr/OfferList/OfferListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
