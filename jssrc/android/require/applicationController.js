define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.CarApp.HeaderComponent", "HeaderComponent", "HeaderComponentController");
        kony.application.registerMaster({
            "namespace": "com.CarApp",
            "classname": "HeaderComponent",
            "name": "com.CarApp.HeaderComponent"
        });
        kony.mvc.registry.add("com.contr.SearchForm", "SearchForm", "SearchFormController");
        kony.application.registerMaster({
            "namespace": "com.contr",
            "classname": "SearchForm",
            "name": "com.contr.SearchForm"
        });
        kony.mvc.registry.add("noContr.headerComp", "headerComp", "headerCompController");
        kony.application.registerMaster({
            "namespace": "noContr",
            "classname": "headerComp",
            "name": "noContr.headerComp"
        });
        kony.mvc.registry.add("noContr.loginComp", "loginComp", "loginCompController");
        kony.application.registerMaster({
            "namespace": "noContr",
            "classname": "loginComp",
            "name": "noContr.loginComp"
        });
        kony.mvc.registry.add("noContr.OfferList", "OfferList", "OfferListController");
        kony.application.registerMaster({
            "namespace": "noContr",
            "classname": "OfferList",
            "name": "noContr.OfferList"
        });
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("frmAddEditOffer", "frmAddEditOffer", "frmAddEditOfferController");
        kony.mvc.registry.add("frmLandingSearchScreen", "frmLandingSearchScreen", "frmLandingSearchScreenController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmSearchList", "frmSearchList", "frmSearchListController");
        kony.mvc.registry.add("frmViewCar", "frmViewCar", "frmViewCarController");
        kony.mvc.registry.add("frmViewManageOffer", "frmViewManageOffer", "frmViewManageOfferController");
        kony.mvc.registry.add("frmViewOffers", "frmViewOffers", "frmViewOffersController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLandingSearchScreen").navigate();
    }
});