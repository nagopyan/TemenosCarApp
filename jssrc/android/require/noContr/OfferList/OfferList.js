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
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "OfferList"), extendConfig({}, controller.args[1], "OfferList"), extendConfig({}, controller.args[2], "OfferList"));
        OfferList.setDefaultUnit(kony.flex.DP);
        var OfferListScrollContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "centerX": "50%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "OfferListScrollContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "OfferListScrollContainer"), extendConfig({}, controller.args[1], "OfferListScrollContainer"), extendConfig({}, controller.args[2], "OfferListScrollContainer"));
        OfferListScrollContainer.setDefaultUnit(kony.flex.DP);
        var ContentFlexContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "ContentFlexContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "ContentFlexContainer"), extendConfig({}, controller.args[1], "ContentFlexContainer"), extendConfig({}, controller.args[2], "ContentFlexContainer"));
        ContentFlexContainer.setDefaultUnit(kony.flex.DP);
        var CarImage = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "CarImage",
            "isVisible": true,
            "left": 0,
            "src": "imagedrag.png",
            "top": "5%",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "CarImage"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CarImage"), extendConfig({}, controller.args[2], "CarImage"));
        var LblOfferTitle = new kony.ui.Label(extendConfig({
            "id": "LblOfferTitle",
            "isVisible": true,
            "left": "30%",
            "text": "Offer Title",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblOfferTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblOfferTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "LblOfferTitle"));
        var LblMakeModel = new kony.ui.Label(extendConfig({
            "id": "LblMakeModel",
            "isVisible": true,
            "left": "30%",
            "text": "Make, model",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblMakeModel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblMakeModel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "LblMakeModel"));
        var LblFuelType = new kony.ui.Label(extendConfig({
            "id": "LblFuelType",
            "isVisible": true,
            "left": "30%",
            "text": "Fuel: Fuel Type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "65%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblFuelType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblFuelType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "LblFuelType"));
        var LblYear = new kony.ui.Label(extendConfig({
            "id": "LblYear",
            "isVisible": true,
            "right": "10%",
            "text": "Year",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "31dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblYear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblYear"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "LblYear"));
        ContentFlexContainer.add(CarImage, LblOfferTitle, LblMakeModel, LblFuelType, LblYear);
        OfferListScrollContainer.add(ContentFlexContainer);
        OfferList.add(OfferListScrollContainer);
        return OfferList;
    }
})