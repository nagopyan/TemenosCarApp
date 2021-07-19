define("frmViewCar", function() {
    return function(controller) {
        function addWidgetsfrmViewCar() {
            this.setDefaultUnit(kony.flex.DP);
            var viewCarScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "viewCarScrollContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            viewCarScrollContainer.setDefaultUnit(kony.flex.DP);
            var headerComponent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "headerComponent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            headerComponent.setDefaultUnit(kony.flex.DP);
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
            headerComponent.add(headerComp);
            var imageContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "imageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
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
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
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
            var btnContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "btnContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%"
            }, {}, {});
            btnContainer.setDefaultUnit(kony.flex.DP);
            var btnEdit = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnEdit",
                "isVisible": true,
                "left": "5%",
                "skin": "sknEditButton",
                "text": "Edit",
                "top": "0",
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnRemove = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnRemove",
                "isVisible": true,
                "right": "5%",
                "skin": "sknRemoveButton",
                "text": "Remove",
                "top": "0",
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            btnContainer.add(btnEdit, btnRemove);
            viewCarScrollContainer.add(headerComponent, imageContainer, carOfferDetails, btnContainer);
            this.add(viewCarScrollContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmViewCar,
            "enabledForIdleTimeout": false,
            "id": "frmViewCar",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
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