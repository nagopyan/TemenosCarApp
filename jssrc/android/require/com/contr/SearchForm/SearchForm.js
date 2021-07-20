define(function() {
    return function(controller) {
        var SearchForm = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SearchForm",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "SearchForm"), extendConfig({}, controller.args[1], "SearchForm"), extendConfig({}, controller.args[2], "SearchForm"));
        SearchForm.setDefaultUnit(kony.flex.DP);
        var flxCompSearchForm = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxCompSearchForm",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "45dp",
            "maxWidth": "100%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCompSearchForm"), extendConfig({}, controller.args[1], "flxCompSearchForm"), extendConfig({}, controller.args[2], "flxCompSearchForm"));
        flxCompSearchForm.setDefaultUnit(kony.flex.DP);
        var lblSearchForm = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSearchForm",
            "isVisible": true,
            "skin": "sknLblRowHeading",
            "text": "What are you looking for today?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSearchForm"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSearchForm"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSearchForm"));
        var lblMake = new kony.ui.Label(extendConfig({
            "id": "lblMake",
            "isVisible": true,
            "left": "15.00%",
            "skin": "sknLblRowHeading",
            "text": "Car Make",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMake"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMake"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMake"));
        var listMake = new kony.ui.ListBox(extendConfig({
            "centerX": "50.00%",
            "focusSkin": "sknListBoxFocus",
            "height": "40dp",
            "id": "listMake",
            "isVisible": true,
            "masterData": [
                ["lb1", "Placeholder One"],
                ["lb2", "Placeholder Two"],
                ["lb3", "Placeholder Three"]
            ],
            "skin": "sknListBoxNormal",
            "top": "15%",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "listMake"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "listMake"), extendConfig({
            "applySkinsToPopup": true,
            "dropDownImage": "listboxarw.png",
            "placeholder": "Please Select",
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "listMake"));
        var lblModel = new kony.ui.Label(extendConfig({
            "id": "lblModel",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLblRowHeading",
            "text": "Car model",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "26%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblModel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblModel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblModel"));
        var listModel = new kony.ui.ListBox(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknListBoxFocus",
            "height": "40dp",
            "id": "listModel",
            "isVisible": true,
            "masterData": [
                ["lb1", "Placeholder One"],
                ["lb2", "Placeholder Two"],
                ["lb3", "Placeholder Three"]
            ],
            "onSelection": controller.AS_modelOnSelect_i429f5d7e49646a681aac20785951f47,
            "skin": "sknListBoxNormal",
            "top": "30%",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "listModel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "listModel"), extendConfig({
            "applySkinsToPopup": true,
            "dropDownImage": "listboxarw.png",
            "placeholder": "Please Select",
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "listModel"));
        var lblFuelType = new kony.ui.Label(extendConfig({
            "id": "lblFuelType",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLblRowHeading",
            "text": "Fuel type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "41%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFuelType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFuelType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFuelType"));
        var listFuelType = new kony.ui.ListBox(extendConfig({
            "centerX": "50.00%",
            "focusSkin": "sknListBoxFocus",
            "height": "40dp",
            "id": "listFuelType",
            "isVisible": true,
            "masterData": [
                ["lb1", "Placeholder One"],
                ["lb2", "Placeholder Two"],
                ["lb3", "Placeholder Three"]
            ],
            "onSelection": controller.AS_fuelOnSelect_eb9e5a23d9064e73aa7c28aafa1ec922,
            "skin": "sknListBoxNormal",
            "top": "45%",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "listFuelType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "listFuelType"), extendConfig({
            "applySkinsToPopup": true,
            "dropDownImage": "listboxarw.png",
            "placeholder": "Please Select",
            "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
        }, controller.args[2], "listFuelType"));
        var lblYearFrom = new kony.ui.Label(extendConfig({
            "centerX": "25%",
            "id": "lblYearFrom",
            "isVisible": true,
            "skin": "sknLblRowHeading",
            "text": "Year from:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "65%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblYearFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYearFrom"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYearFrom"));
        var calendarYearFrom = new kony.ui.Calendar(extendConfig({
            "calendarIcon": "calbtn.png",
            "centerX": "25%",
            "dateComponents": [17, 7, 2021],
            "dateFormat": "dd/MM/yyyy",
            "day": 17,
            "formattedDate": "17/07/2021",
            "height": "40dp",
            "hour": 0,
            "id": "calendarYearFrom",
            "isVisible": true,
            "minutes": 0,
            "month": 7,
            "onSelection": controller.AS_calendarFromOnSelect_e15565523cc44ae4bad7a4cbba8f3704,
            "seconds": 0,
            "top": "70%",
            "viewConfig": {
                "gridConfig": {
                    "allowWeekendSelectable": true
                }
            },
            "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
            "width": "120dp",
            "year": 2021,
            "zIndex": 1
        }, controller.args[0], "calendarYearFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "calendarYearFrom"), extendConfig({}, controller.args[2], "calendarYearFrom"));
        var lblYearTo = new kony.ui.Label(extendConfig({
            "centerX": "75%",
            "id": "lblYearTo",
            "isVisible": true,
            "skin": "sknLblRowHeading",
            "text": "Year to:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "65%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblYearTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYearTo"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYearTo"));
        var calendarYearTo = new kony.ui.Calendar(extendConfig({
            "calendarIcon": "calbtn.png",
            "centerX": "75%",
            "dateComponents": [17, 7, 2021, 0, 0, 0],
            "dateFormat": "dd/MM/yyyy",
            "day": 17,
            "formattedDate": "17/07/2021",
            "height": "40dp",
            "hour": 0,
            "id": "calendarYearTo",
            "isVisible": true,
            "minutes": 0,
            "month": 7,
            "onSelection": controller.AS_calendarToOnSelect_d5344ee52fe14875abe63a3bcd57389a,
            "seconds": 0,
            "top": "70%",
            "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
            "width": "120dp",
            "year": 2021,
            "zIndex": 1
        }, controller.args[0], "calendarYearTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "calendarYearTo"), extendConfig({}, controller.args[2], "calendarYearTo"));
        var btnFindCar = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnFindCar",
            "isVisible": true,
            "left": "52dp",
            "onClick": controller.AS_btnFindCarOnClick_def0059f8f5444319015adc3d963e770,
            "skin": "sknEditButton",
            "text": "Find your new car!",
            "top": "85%",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "btnFindCar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFindCar"), extendConfig({}, controller.args[2], "btnFindCar"));
        flxCompSearchForm.add(lblSearchForm, lblMake, listMake, lblModel, listModel, lblFuelType, listFuelType, lblYearFrom, calendarYearFrom, lblYearTo, calendarYearTo, btnFindCar);
        SearchForm.add(flxCompSearchForm);
        return SearchForm;
    }
})