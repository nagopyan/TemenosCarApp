define(function() {
    return function(controller) {
        var headerComp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "headerComp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "headerComp"), extendConfig({}, controller.args[1], "headerComp"), extendConfig({}, controller.args[2], "headerComp"));
        headerComp.setDefaultUnit(kony.flex.DP);
        var flxHeadComp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "80dp",
            "id": "flxHeadComp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "SknHeaderFlexContainer",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeadComp"), extendConfig({}, controller.args[1], "flxHeadComp"), extendConfig({}, controller.args[2], "flxHeadComp"));
        flxHeadComp.setDefaultUnit(kony.flex.DP);
        var lblHeadTop = new kony.ui.Label(extendConfig({
            "id": "lblHeadTop",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblRowHeading",
            "text": "Temenos car - best car deals",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeadTop"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeadTop"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeadTop"));
        var lblHeadBottom = new kony.ui.Label(extendConfig({
            "id": "lblHeadBottom",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblDescription",
            "text": "Find from more than 5 offers today!",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeadBottom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeadBottom"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeadBottom"));
        var imgLoginLogout = new kony.ui.Image2(extendConfig({
            "centerX": "85%",
            "centerY": "50%",
            "height": "70dp",
            "id": "imgLoginLogout",
            "isVisible": true,
            "left": "278dp",
            "skin": "slImage",
            "src": "loginicon.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgLoginLogout"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLoginLogout"), extendConfig({}, controller.args[2], "imgLoginLogout"));
        flxHeadComp.add(lblHeadTop, lblHeadBottom, imgLoginLogout);
        headerComp.add(flxHeadComp);
        return headerComp;
    }
})