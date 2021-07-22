define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
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
  },

  postShow: function() {
    this.view.btnEdit.onClick = this.navigate;
    this.view.btnBack2.onClick = this.navigateBack;
  },

  navigate:function(){
    var offer = kony.store.getItem("OfferDetails");
    var navix = new kony.mvc.Navigation("frmAddEditOffer");
    navix.navigate();
  },

  navigateBack: function() {
    var move = new kony.mvc.Navigation("frmViewOffers");
    move.navigate();
  },

});