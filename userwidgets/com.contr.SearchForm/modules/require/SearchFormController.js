define(function() {

  var cars = [
    {
      carMaker: "Audi",
      carModels: [
        {
          carModel: "S3"
        },
        {
          carModel: "R8"
        },
        {
          carModel: "A6"
        },
        {
          carModel: "Q8"
        }
      ]
    },
    {
      carMaker: "BMW",
      carModels: [
        {
          carModel: "X5"
        },
        {
          carModel: "M5"
        },
        {
          carModel: "M3"
        },
        {
          carModel: "E93"
        }
      ]
    },
        {
      carMaker: "Toyota",
      carModels: [
        {
          carModel: "Supra"
        },
        {
          carModel: "Yaris"
        },
        {
          carModel: "Corolla"
        },
        {
          carModel: "Prius"
        }
      ]
    }
  ];

  var fuelTypes=[["Electric","Electric"],["Diesel","Diesel"],["Gasoline","Gasoline"]];

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._carMake="Audi";
      this._carModel="";
      this._fuelType="";
      this._cars = cars;

      this.view.calendarYearFrom.dateFormat="yyyy";

      this.loadDataInSearchList(cars,this._carMake);
      this.view.listMake.onSelection = this.getCarMakeListValue;
      this.view.listModel.onSelection = this.getCarModelListValue;
      this.view.listFuelType.onSelection = this.getCarFuelListValue;
    },

    getCarMakeListValue(){
      var listKey = this.view.listMake.selectedKey;
      this._carMake = listKey;
      var carModels = this.getCarModelsByCarMaker(this._cars, this._carMake);
      var modelsInKeyValue = this.getCarModelsInKeyValueFormat(carModels);
      this.view.listModel.masterData = modelsInKeyValue;

      //alert(listKey + " carMake" + this._carMake);
      makeSelect = this.view.listMake.selectedKey;
      alert(makeSelect);
    },

    getCarModelListValue: function() {
      modelSelect = this.view.listModel.selectedKey;
      alert(modelSelect);
    },

    getCarFuelListValue: function() {
      fuelSelect = this.view.listFuelType.selectedKey;
      alert(fuelSelect);
    },

    loadDataInSearchList(cars,carMaker){   

      this.view.listMake.masterData=this.getCarMakersInKeyValueFormat(cars);
      var carModelsByCarMaker=  this.getCarModelsByCarMaker(cars, carMaker);
      this.view.listModel.masterData=this.getCarModelsInKeyValueFormat(carModelsByCarMaker);
      this.view.listFuelType.masterData=fuelTypes;
    },


    getCarMakersInKeyValueFormat(cars) {
      var carMakersInKeyValueFormat = [];

      cars.forEach(function (value) {

        var listKeyValue = [];
        listKeyValue[0] = value.carMaker;
        listKeyValue[1] = value.carMaker;
        carMakersInKeyValueFormat.push(listKeyValue);
      });

      return carMakersInKeyValueFormat;
    },

    getCarModelsByCarMaker(cars, carMaker) {
      var carModelsByCarMaker = cars.filter(function (car) {
        return car.carMaker == carMaker;
      });

      return carModelsByCarMaker[0].carModels;
    },

    getCarModelsInKeyValueFormat(carModelsByCarMaker) {
      var carModelsInKeyValueFormat = [];

      carModelsByCarMaker.forEach(function (value) {

        var listKeyValue = [];
        listKeyValue[0] = value.carModel;
        listKeyValue[1] = value.carModel;
        carModelsInKeyValueFormat.push(listKeyValue);

      });

      return carModelsInKeyValueFormat;
    },

    initGettersSetters: function() {
      defineGetter(this, 'carMake', () => {
        return this._carMake;
      });
      defineSetter(this, 'carMake', value => {
        this._carMake= value;
      });
      defineGetter(this, 'carModel', () => {
        return this._carModel;
      });
      defineSetter(this, 'carModel', value => {
        this._carModel= value;
      });
      defineGetter(this, 'fuelType', () => {
        return this._fuelType;
      });
      defineSetter(this, 'fuelType', value => {
        this._fuelType= value;
      });
    }
  };
});