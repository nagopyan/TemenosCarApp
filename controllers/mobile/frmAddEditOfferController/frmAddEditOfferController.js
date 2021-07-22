define({ 



  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {
    this.view.calendarYearTo.dateFormat = "yyyy";
    this.getPreviousForm();
    this.onNavigate();
    
  },

  postShow: function() {
    //     previousForm = kony.application.getPreviousForm.id;
	
    this.view.AddSaveBtn.onTouchStart = this.pullInfo;
    


  },
  getPreviousForm: function () {
    //Get the Previous form
    previousForm = kony.application.getPreviousForm();
    //Alert the Previous form
//     alert("previousForm is::" + previousForm.id);
  },

  //   previousForm: function() {
  // 	var prevForm = kony.application.getPreviousForm().id;

  //     alert(prevForm);
  //   },

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

  onNavigate: function() {
    var offer = kony.store.getItem("OfferDetails");
    
    alert(offer);
//     if(previousForm.id === "frmViewManageOffer"){
// // 		carObj = kony.store.getItem("carObj");
      
//       this.view.AddSaveBtn.text = "Save" ;

      
//       this.view.TextFieldOfferTitle.text = 
// //       this.view.TextFieldImageUrl.text = objTitle.imgUrl;

//     }else{
//       this.view.AddSaveBtn.text = "Add";
//     }
  }

});