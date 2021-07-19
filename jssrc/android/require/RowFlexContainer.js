define("RowFlexContainer", function() {
    return function(controller) {
        var RowFlexContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "RowFlexContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        RowFlexContainer.setDefaultUnit(kony.flex.DP);
        var CarImage = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "CarImage",
            "isVisible": true,
            "left": 0,
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "5%",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var LblYear = new kony.ui.Label({
            "id": "LblYear",
            "isVisible": true,
            "right": "10%",
            "skin": "SknYearLbl",
            "text": "Year",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "31dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblFuelType = new kony.ui.Label({
            "id": "LblFuelType",
            "isVisible": true,
            "left": "30%",
            "skin": "SknFuelTypeLbl",
            "text": "Fuel: Fuel Type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "65%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblMakeModel = new kony.ui.Label({
            "id": "LblMakeModel",
            "isVisible": true,
            "left": "30%",
            "skin": "SknFuelTypeLbl",
            "text": "Make, model",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblOfferTitle = new kony.ui.Label({
            "id": "LblOfferTitle",
            "isVisible": true,
            "left": "30%",
            "skin": "SknOfferTitleInCard",
            "text": "Offer Title",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        RowFlexContainer.add(CarImage, LblYear, LblFuelType, LblMakeModel, LblOfferTitle);
        return RowFlexContainer;
    }
})