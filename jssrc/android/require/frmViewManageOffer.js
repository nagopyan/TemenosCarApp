define("frmViewManageOffer", function() {
    return function(controller) {
        function addWidgetsfrmViewManageOffer() {
            this.setDefaultUnit(kony.flex.DP);
            var headerComp = new noContr.headerComp({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "headerComp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var imageContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "imageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15%",
                "width": "100%"
            }, {}, {});
            imageContainer.setDefaultUnit(kony.flex.DP);
            var carImage = new kony.ui.Image2({
                "height": "100%",
                "id": "carImage",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            imageContainer.add(carImage);
            var carOfferDetails = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "carOfferDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50%",
                "width": "100%"
            }, {}, {});
            carOfferDetails.setDefaultUnit(kony.flex.DP);
            var OfferContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": 50,
                "clipBounds": true,
                "height": "20%",
                "id": "OfferContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%"
            }, {}, {});
            OfferContainer.setDefaultUnit(kony.flex.DP);
            var lblOfferTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOfferTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "sknOfferTitle",
                "text": "Offer title",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            OfferContainer.add(lblOfferTitle);
            var makeAndModelContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": 20,
                "clipBounds": true,
                "height": "15%",
                "id": "makeAndModelContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%"
            }, {}, {});
            makeAndModelContainer.setDefaultUnit(kony.flex.DP);
            var lblMake = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMake",
                "isVisible": true,
                "left": "5%",
                "skin": "sknCarDetailLableSkin",
                "text": "Make",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblModel = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblModel",
                "isVisible": true,
                "left": "15%",
                "skin": "sknCarDetailLableSkin",
                "text": "Model",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblYear = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblYear",
                "isVisible": true,
                "right": "5%",
                "skin": "sknCarDetailLableSkin",
                "text": "Year",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            makeAndModelContainer.add(lblMake, lblModel, lblYear);
            var fuelContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "10%",
                "clipBounds": true,
                "height": "15%",
                "id": "fuelContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%"
            }, {}, {});
            fuelContainer.setDefaultUnit(kony.flex.DP);
            var lblFuel = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFuel",
                "isVisible": true,
                "left": "5%",
                "skin": "sknCarDetailLableSkin",
                "text": "Fuel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFuelType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFuelType",
                "isVisible": true,
                "left": "2%",
                "skin": "sknCarDetailLableSkin",
                "text": "Fuel type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "41.49%",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            fuelContainer.add(lblFuel, lblFuelType);
            var textAreaDescription = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "30%",
                "id": "textAreaDescription",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "1%",
                "numberOfVisibleLines": 3,
                "placeholder": "Placeholder",
                "right": "1%",
                "skin": "defTextAreaNormal",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "1%",
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [4, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            carOfferDetails.add(OfferContainer, makeAndModelContainer, fuelContainer, textAreaDescription);
            var BackArrow = new kony.ui.Label({
                "id": "BackArrow",
                "isVisible": true,
                "left": "5%",
                "skin": "SknBackArrow",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "85%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(headerComp, imageContainer, carOfferDetails, BackArrow);
        };
        return [{
            "addWidgets": addWidgetsfrmViewManageOffer,
            "enabledForIdleTimeout": false,
            "id": "frmViewManageOffer",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "info": {
                "kuid": "d2cfbd37288242da92b9d6d4b8a3bf50"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});