define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow:function(){
    var offer = kony.store.getItem("OfferDetails");
    this.view.carImage.src = offer.imgUrl;
    this.view.lblOfferTitle.text = offer.title;
    this.view.lblMake.text = offer.make;
    this.view.lblModel.text = offer.model;
    this.view.lblYear.text = offer.year;
    this.view.lblFuelType.text = offer.fuel;
    this.view.textAreaDescription.text = offer.description;

    this.view.btnEdit.onClick = this.navigate;
  },

  navigate:function(){
    var nav = new kony.mvc.Navigation("frmAddEditOffer");
//     var carObj = 
//         {
//           title: this.view.lblOfferTitle.text,
//           imgUrl: this.view.carImage.src,
//           make: this.view.lblMake.text,
//           year: this.view.lblYear.text,
//           desc: this.view.textAreaDescription.text,
//           fuel: this.view.lblFuelType.text
//         };
//     kony.store.setItem("carObj", carObj);
//     alert(carObj.title);
    nav.navigate();
  }

});