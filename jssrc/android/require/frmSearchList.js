define("frmSearchList", function() {
    return function(controller) {
        function addWidgetsfrmSearchList() {
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
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "OfferListScrollContainer": {
                        "bottom": "viz.val_cleared",
                        "height": "86.56%",
                        "top": "28%",
                        "width": "90%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var LblSearchContent = new kony.ui.Label({
                "id": "LblSearchContent",
                "isVisible": true,
                "left": "10%",
                "text": "Search for Tesla, between 2020-2021,Electric",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblSearchResult = new kony.ui.Label({
                "id": "LblSearchResult",
                "isVisible": true,
                "left": "10%",
                "text": "Found 32 results!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "23%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnChange = new kony.ui.Button({
                "height": "8%",
                "id": "btnChange",
                "isVisible": true,
                "left": "65%",
                "text": "Change",
                "top": "14%",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(headerComp, OfferList, LblSearchContent, LblSearchResult, btnChange);
        };
        return [{
            "addWidgets": addWidgetsfrmSearchList,
            "enabledForIdleTimeout": false,
            "id": "frmSearchList",
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