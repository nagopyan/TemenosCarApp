define(function() {
    return function(controller) {
        var OfferList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "OfferList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "OfferList"), extendConfig({}, controller.args[1], "OfferList"), extendConfig({}, controller.args[2], "OfferList"));
        OfferList.setDefaultUnit(kony.flex.DP);
        kony.mvc.registry.add('RowTamplateCustom', 'RowTamplateCustom', 'RowTamplateCustomController');
        var SegmentListOffers = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "data": [{
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }, {
                "CarImage": "imagedrag.png",
                "LblFuelType": "Fuel: Fuel Type",
                "LblMakeModel": "Make, model",
                "LblOfferTitle": "Offer Title",
                "LblYear": "Year"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "SegmentListOffers",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "RowFlexContainer",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "30%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CarImage": "CarImage",
                "LblFuelType": "LblFuelType",
                "LblMakeModel": "LblMakeModel",
                "LblOfferTitle": "LblOfferTitle",
                "LblYear": "LblYear",
                "RowFlexContainer": "RowFlexContainer"
            },
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "SegmentListOffers"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "SegmentListOffers"), extendConfig({}, controller.args[2], "SegmentListOffers"));
        OfferList.add(SegmentListOffers);
        return OfferList;
    }
})