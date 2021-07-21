define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {
    this.view.calendarYearTo.dateFormat="yyyy";
    //     var previousForm = kony.application.getPreviousForm.id;
    //     if(previousForm === "frmViewOffers"){
    //       this.view.AddSaveBtn.text = "Add";
    //     }
  },

  postShow: function() {
    this.view.AddSaveBtn.onTouchStart = this.pullInfo;
  },

  pullInfo: function() {
    var carInfo = 
        {
          carTitle: this.view.TextFieldOfferTitle.text,
          carImg:   this.view.TextFieldImageUrl.text,
          carMake:  this.view.DropDownCarMake.selectedKeyValue[1],
          carModel: this.view.DropDownCarModel.selectedKeyValue[1],
          carFuel:  this.view.DropDownFuelType.selectedKeyValue[1],
          carYear:  this.view.calendarYearTo.year.toFixed(0),
          carDesc:  this.view.TxtAreaDescription.text
        };
    var db = kony.store.getItem("OfferDb");
    db.push({
      "title":  carInfo.carTitle,
      "imgUrl": carInfo.carImg,
      "make":   carInfo.carMake,
      "model":  carInfo.carModel,
      "fuel":   carInfo.carFuel,
      "year":   carInfo.carYear,
      "description": carInfo.carDesc
    });
    alert(db);
  },

  //   onNavigate: function(obj) {
  //     if(kony.application.getPreviousForm.id === "frmViewManageOffer"){

  //       this.view.AddSaveBtn.text = "Save" ;

  //       this.view.TextFieldOfferTitle.text = obj.title;
  //       this.view.TextFieldImageUrl.text = obj.imgUrl;

  //     }else{
  //       this.view.AddSaveBtn.text = "Add";
  //     }
  //   }

});