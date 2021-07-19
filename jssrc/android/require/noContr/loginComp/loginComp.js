define(function() {
    return function(controller) {
        var loginComp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "loginComp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "loginComp"), extendConfig({}, controller.args[1], "loginComp"), extendConfig({}, controller.args[2], "loginComp"));
        loginComp.setDefaultUnit(kony.flex.DP);
        var flxLoginComp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxLoginComp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "top": "197dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLoginComp"), extendConfig({}, controller.args[1], "flxLoginComp"), extendConfig({}, controller.args[2], "flxLoginComp"));
        flxLoginComp.setDefaultUnit(kony.flex.DP);
        var lblUsername = new kony.ui.Label(extendConfig({
            "id": "lblUsername",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLblRowHeading",
            "text": "Username",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUsername"));
        var txtUsername = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "height": "40dp",
            "id": "txtUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "15%",
            "placeholder": "Username",
            "secureTextEntry": false,
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "17%",
            "width": "270dp",
            "zIndex": 1
        }, controller.args[0], "txtUsername"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtUsername"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtUsername"));
        var lblPassword = new kony.ui.Label(extendConfig({
            "id": "lblPassword",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLblRowHeading",
            "text": "Password",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "32%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPassword"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPassword"));
        var txtPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "height": "40dp",
            "id": "txtPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "placeholder": "Placeholder",
            "secureTextEntry": false,
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "38%",
            "width": "270dp",
            "zIndex": 1
        }, controller.args[0], "txtPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtPassword"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtPassword"));
        var btnLogin = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "btnLogin",
            "isVisible": true,
            "left": "51dp",
            "text": "Login",
            "top": "452dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        flxLoginComp.add(lblUsername, txtUsername, lblPassword, txtPassword, btnLogin);
        loginComp.add(flxLoginComp);
        return loginComp;
    }
})