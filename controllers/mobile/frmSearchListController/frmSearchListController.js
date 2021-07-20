define({

  offersDb: kony.store.getItem("OfferDb"),

  formatedData: [],

  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow: function() {
    if(this.formatedData.length === 0){
      this.formatedSegmentData.call(this,this.offersDb,this.formatedData);
    }
    this.view.OfferList.SegmentListOffers.setData(this.formatedData);
    this.view.btnChange.onClick = this.navigate;
    this.view.OfferList.SegmentListOffers.onRowClick = this.onRowClicked;
    if(this.formatedData.length === 0){
      this.view.LblSearchResult.text = "No results Found.Try Again.";
    }else{
      this.view.LblSearchResult.text = `Found ${this.formatedData.length --} results!`;
    }
  },

  onRowClicked:function(seguiWidget, sectionNumber, rowNumber, selectedState){
    kony.store.setItem("OfferDetails", this.offersDb[rowNumber]);
    var ntf = new kony.mvc.Navigation("frmViewCar");
    ntf.navigate();
  },

  navigate:function(){
    var nav = new kony.mvc.Navigation("frmLandingSearchScreen");
    nav.navigate();
  },

  formatedSegmentData: function(responseData,fomratedData) {
    var scope = this;
    responseData.forEach(function(offer) {
      if(offer.make.includes('BMW')){
        fomratedData.push({
          "LblOfferTitle": {"text": offer.title},
          "CarImage": {"src": offer.imgUrl},
          "LblMakeModel": {"text": offer.make + ", " + offer.model},
          "LblFuelType":{"txt": offer.fuel},
          "LblYear": {"text": offer.year}
        });
      }
    });
  }
});