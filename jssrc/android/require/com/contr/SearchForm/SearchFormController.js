define("com/contr/SearchForm/userSearchFormController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});

define("com/contr/SearchForm/SearchFormController", ["com/contr/SearchForm/userSearchFormController", "com/contr/SearchForm/SearchFormControllerActions"], function() {
    var controller = require("com/contr/SearchForm/userSearchFormController");
    var actions = require("com/contr/SearchForm/SearchFormControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "blur1", function(val) {
            this.view.listModel.blur = val;
        });
        defineGetter(this, "blur1", function() {
            return this.view.listModel.blur;
        });
        defineSetter(this, "blur2", function(val) {
            this.view.listFuelType.blur = val;
        });
        defineGetter(this, "blur2", function() {
            return this.view.listFuelType.blur;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_modelOnSelect_i429f5d7e49646a681aac20785951f47 = function() {
        if (this.modelOnSelect) {
            this.modelOnSelect.apply(this, arguments);
        }
    }
    controller.AS_fuelOnSelect_eb9e5a23d9064e73aa7c28aafa1ec922 = function() {
        if (this.fuelOnSelect) {
            this.fuelOnSelect.apply(this, arguments);
        }
    }
    controller.AS_calendarFromOnSelect_e15565523cc44ae4bad7a4cbba8f3704 = function() {
        if (this.calendarFromOnSelect) {
            this.calendarFromOnSelect.apply(this, arguments);
        }
    }
    controller.AS_calendarToOnSelect_d5344ee52fe14875abe63a3bcd57389a = function() {
        if (this.calendarToOnSelect) {
            this.calendarToOnSelect.apply(this, arguments);
        }
    }
    controller.AS_btnFindCarOnClick_def0059f8f5444319015adc3d963e770 = function() {
        if (this.btnFindCarOnClick) {
            this.btnFindCarOnClick.apply(this, arguments);
        }
    }
    return controller;
});
