define("noContr/headerComp/userheaderCompController", {
    onViewCreated: function() {
        this.view.preShow = this.preShow;
        this.view.postShow = this.postShow;
    },
    preShow: function() {
        this.updateIcon();
    },
    postShow: function() {
        this.view.imgLoginLogout.onTouchStart = this.navLogin;
    },
    navLogin: function() {
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    updateIcon: function() {
        if (loggedIn) {
            this.view.imgLoginLogout.src = imgIcon2;
        } else {
            this.view.imgLoginLogout.src = imgIcon;
        }
    },
});

define("noContr/headerComp/headerCompController", ["noContr/headerComp/userheaderCompController", "noContr/headerComp/headerCompControllerActions"], function() {
    var controller = require("noContr/headerComp/userheaderCompController");
    var actions = require("noContr/headerComp/headerCompControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
