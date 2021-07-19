define("frmViewOffers", function() {
    return function(controller) {
        function addWidgetsfrmViewOffers() {
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
            var OfferList = new noContr.OfferList({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "OfferList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "OfferListScrollContainer": {
                        "top": "20%",
                        "width": "90%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var LblMyOffers = new kony.ui.Label({
                "centerX": "50%",
                "id": "LblMyOffers",
                "isVisible": true,
                "left": "0dp",
                "skin": "SknMyOffersLbl",
                "text": "My Offers",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var BtnAddOffer = new kony.ui.Label({
                "id": "BtnAddOffer",
                "isVisible": true,
                "left": "75%",
                "skin": "sknAddOfferBtn",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(headerComp, OfferList, LblMyOffers, BtnAddOffer);
        };
        return [{
            "addWidgets": addWidgetsfrmViewOffers,
            "enabledForIdleTimeout": false,
            "id": "frmViewOffers",
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