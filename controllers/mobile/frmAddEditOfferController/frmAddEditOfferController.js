define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {
    
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
          title: this.view.TextFieldOfferTitle.text,
          carImg: this.view.TextFieldImageUrl.text,
          carMake: this.view.DropDownCarMake.selectedKeyValue[1],
          carModel: this.view.DropDownCarModel.selectedKeyValue[1],
          carFuel: this.view.DropDownFuelType.selectedKeyValue[1],
          
        };
  var db = kony.store.getItem("OfferDb");
    db.push({
          "LblOfferTitle": {"text": carInfo.title},
          "CarImage": {"src": carInfo.imgUrl},
          "LblMakeModel": {"text": carInfo.make + ", " + carInfo.model},
          "LblFuelType":{"txt": carInfo.fuel},
          "LblYear": {"text": carInfo.year}
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