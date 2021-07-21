define({

  offersDb: kony.store.getItem("OfferDb"),

  formatedData: [],
 
  formatedDb:[],

  onViewCreated: function() {
    this.view.init = this.init;
  },

  init: function() {
    this.formatedSegmentData.call(this,this.offersDb,this.formatedData,this.formatedDb);
    this.view.OfferList.SegmentListOffers.setData(this.formatedData);
    this.view.btnChange.onClick = this.navigate;
    this.view.OfferList.SegmentListOffers.onRowClick = this.onRowClicked;
    if(this.formatedData.length === 0){
      this.view.LblSearchResult.text = "No results Found.Try Again.";
    }else{
      this.view.LblSearchResult.text = `Found ${this.formatedData.length --} results!`;
    }
    //Updates the Search info text with selected criteria.
    this.view.LblSearchContent.text = "Search for " + makeSelect + " " + modelSelect + " " + fuelSelect;
  },

  onRowClicked:function(seguiWidget, sectionNumber, rowNumber, selectedState){
    
    kony.store.setItem("OfferDetails", this.formatedDb[rowNumber]);
    var ntf = new kony.mvc.Navigation("frmViewCar");
    ntf.navigate();
  },



  navigate:function(){
    var nav = new kony.mvc.Navigation("frmLandingSearchScreen");
    nav.navigate();
  },

  formatedSegmentData: function(responseData,fomratedData,formatedDb) {
    var scope = this;
    responseData.forEach(function(offer) {
      if(offer.make.includes(makeSelect) && offer.model.includes(modelSelect) && offer.fuel.includes(fuelSelect)){
        formatedData.push({
          "LblOfferTitle": {"text": offer.title},
          "CarImage": {"src": offer.imgUrl},
          "LblMakeModel": {"text": offer.make + ", " + offer.model},
          "LblFuelType":{"txt": offer.fuel},
          "LblYear": {"text": offer.year}
        });
        
        formatedDb.push({
          title: offer.title,
          make: offer.make,
          model: offer.model,
          fuel: offer.fuel,
          imgUrl: offer.imgUrl,
          year: offer.year,
          description:offer.description
        });
      }
    });
  }
});