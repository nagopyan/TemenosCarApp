define(function() {
    return function(controller) {
        var HeaderComponent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "HeaderComponent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "HeaderComponent"), extendConfig({}, controller.args[1], "HeaderComponent"), extendConfig({}, controller.args[2], "HeaderComponent"));
        HeaderComponent.setDefaultUnit(kony.flex.DP);
        var HeaderFlexContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "HeaderFlexContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "SknHeaderFlexContainer",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "HeaderFlexContainer"), extendConfig({}, controller.args[1], "HeaderFlexContainer"), extendConfig({}, controller.args[2], "HeaderFlexContainer"));
        HeaderFlexContainer.setDefaultUnit(kony.flex.DP);
        var MainTxt = new kony.ui.Label(extendConfig({
            "centerX": "43%",
            "id": "MainTxt",
            "isVisible": true,
            "left": 0,
            "skin": "SknMainTxt",
            "text": "Temenos car - best car deals",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "MainTxt"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "MainTxt"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "MainTxt"));
        var SubText = new kony.ui.Label(extendConfig({
            "centerX": "43%",
            "id": "SubText",
            "isVisible": true,
            "skin": "SknSubText",
            "text": "Find from more then 5 offers today!",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "55%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "SubText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "SubText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "SubText"));
        var SignIn = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "SignIn",
            "isVisible": true,
            "right": "5%",
            "skin": "SknLoginArrow",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "SignIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "SignIn"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "SignIn"));
        HeaderFlexContainer.add(MainTxt, SubText, SignIn);
        HeaderComponent.add(HeaderFlexContainer);
        return HeaderComponent;
    }
})