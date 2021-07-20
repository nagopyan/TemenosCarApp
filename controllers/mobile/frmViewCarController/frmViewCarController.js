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
    this.view.lblFuelType = offer.fuel;
    this.view.textAreaDescription.text = offer.description;
    this.view.BackArrow.onTouchStart = this.goBack;
  },
  
  goBack:function(){
    var nav = new kony.mvc.Navigation("frmSearchList");
    nav.navigate();
  }

 });