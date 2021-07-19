define("frmAddEditOffer", function() {
    return function(controller) {
        function addWidgetsfrmAddEditOffer() {
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
            var AddEditScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "AddEditScrollContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            AddEditScrollContainer.setDefaultUnit(kony.flex.DP);
            var LblOfferTitle = new kony.ui.Label({
                "id": "LblOfferTitle",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblRowHeading",
                "text": "Offer title",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var TextFieldOfferTitle = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "5%",
                "id": "TextFieldOfferTitle",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": 0,
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "SknTxtField",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0.50%",
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var LblImageUrl = new kony.ui.Label({
                "id": "LblImageUrl",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblRowHeading",
                "text": "Image URL",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var TextFieldImageUrl = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "5%",
                "id": "TextFieldImageUrl",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": 0,
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "SknTxtField",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0.50%",
                "width": "95%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblCarMake = new kony.ui.Label({
                "id": "lblCarMake",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblRowHeading",
                "text": "Car make",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var DropDownCarMake = new kony.ui.ListBox({
                "centerX": "50%",
                "focusSkin": "sknListBoxFocus",
                "height": "5%",
                "id": "DropDownCarMake",
                "isVisible": true,
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "skin": "sknListBoxNormal",
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Please Select",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var LblCarModel = new kony.ui.Label({
                "id": "LblCarModel",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblRowHeading",
                "text": "Car model",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var DropDownCarModel = new kony.ui.ListBox({
                "centerX": "50%",
                "focusSkin": "sknListBoxFocus",
                "height": "5%",
                "id": "DropDownCarModel",
                "isVisible": true,
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "skin": "sknListBoxNormal",
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Please Select",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var LblFuelType = new kony.ui.Label({
                "id": "LblFuelType",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblRowHeading",
                "text": "Car model",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var DropDownFuelType = new kony.ui.ListBox({
                "focusSkin": "sknListBoxFocus",
                "height": "5%",
                "id": "DropDownFuelType",
                "isVisible": true,
                "left": "2%",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "skin": "sknListBoxNormal",
                "top": "0%",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Please Select",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var lblYearTo = new kony.ui.Label({
                "centerX": "90%",
                "id": "lblYearTo",
                "isVisible": true,
                "skin": "sknLblRowHeading",
                "text": "Year",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-7%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var calendarYearTo = new kony.ui.Calendar({
                "calendarIcon": "calbtn.png",
                "centerX": "70%",
                "dateComponents": [17, 7, 2021, 0, 0, 0],
                "dateFormat": "dd/MM/yyyy",
                "day": 17,
                "formattedDate": "17/07/2021",
                "height": "5%",
                "hour": 0,
                "id": "calendarYearTo",
                "isVisible": true,
                "minutes": 0,
                "month": 7,
                "seconds": 0,
                "top": "0%",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "40%",
                "year": 2021,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LblDescription = new kony.ui.Label({
                "id": "LblDescription",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblRowHeading",
                "text": "Description",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var TxtAreaDescription = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextAreaFocus",
                "height": "15%",
                "id": "TxtAreaDescription",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "numberOfVisibleLines": 3,
                "placeholder": "Placeholder",
                "skin": "defTextAreaNormal",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": 0,
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var AddSaveBtn = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "AddSaveBtn",
                "isVisible": true,
                "left": "52dp",
                "skin": "sknEditButton",
                "text": "Add/Save",
                "top": "3%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            AddEditScrollContainer.add(LblOfferTitle, TextFieldOfferTitle, LblImageUrl, TextFieldImageUrl, lblCarMake, DropDownCarMake, LblCarModel, DropDownCarModel, LblFuelType, DropDownFuelType, lblYearTo, calendarYearTo, LblDescription, TxtAreaDescription, AddSaveBtn);
            this.add(headerComp, AddEditScrollContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmAddEditOffer,
            "enabledForIdleTimeout": false,
            "id": "frmAddEditOffer",
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