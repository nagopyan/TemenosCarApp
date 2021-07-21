define(function() {

  var cars = [
    {
      carMaker: "Tesla",
      carModels: [
        {
          carModel: "Model S"
        },
        {
          carModel: "Model 3"
        },
        {
          carModel: "Model X"
        },
        {
          carModel: "Model Y"
        }
      ]
    },
    {
      carMaker: "Toyota",
      carModels: [
        {
          carModel: "Avalon"
        },
        {
          carModel: "Corolla"
        },
        {
          carModel: "Prius"
        },
        {
          carModel: "Sienna"
        }
      ]
    }
  ];

  var fuelTypes=[["Electric","Electric"],["Diesel","Diesel"],["Gasoline","Gasoline"]];

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._carMake="Tesla";
      this._carModel="";
      this._fuelType="";
      this._cars = cars;
      
      this.view.calendarYearFrom.dateFormat="yyyy";
      this.view.calendarYearTo.dateFormat="yyyy";

      this.loadDataInSearchList(cars,this._carMake);
      this.view.listMake.onSelection = this.getCarMakeListValue;
},
    
    getCarMakeListValue(){
      var listKey = this.view.listMake.selectedKey;
      this._carMake = listKey;
      var carModels = this.getCarModelsByCarMaker(this._cars, this._carMake);
      var modelsInKeyValue = this.getCarModelsInKeyValueFormat(carModels);
      this.view.listModel.masterData = modelsInKeyValue;
      
      alert(listKey + " carMake" + this._carMake);
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