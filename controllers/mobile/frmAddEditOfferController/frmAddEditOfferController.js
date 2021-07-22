define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {
    this.view.calendarYearTo.dateFormat = "yyyy";


  },

  postShow: function() {
    this.getPreviousForm();
    this.onNavigate();
    this.view.AddSaveBtn.onTouchStart = this.pullInfo;

  },

  getPreviousForm: function () {
    //Get the Previous form
    previousForm = kony.application.getPreviousForm();
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
    //alert(db);
    this.navigateBack();
  },

  onNavigate: function() {
    var offer = kony.store.getItem("OfferDetails");

    if(previousForm.id === "frmViewManageOffer"){
      this.view.AddSaveBtn.text = "Save" ;
      this.view.TextFieldOfferTitle.text = offer.title;
      this.view.TextFieldImageUrl.text = offer.imgUrl;
      this.view.TxtAreaDescription.text = offer.description;

      //       alert(this.view.DropDownCarMake.masterData[0]);

    }else{

      this.view.AddSaveBtn.text = "Add" ;

    }

  },

  navigateBack: function() {
    var move = new kony.mvc.Navigation("frmViewOffers");
    move.navigate();
  },

});