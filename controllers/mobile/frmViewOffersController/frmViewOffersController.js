define({ 
  
  offersDb: kony.store.getItem("OfferDb"),
  
  formatedData:[],

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.init = this.init;
  },

  preShow:function(){
    this.view.BtnAddOffer.onTouchStart = this.navigate;
  },
  
  init:function(){
    this.formatedSegmentData.call(this,this.offersDb,this.formatedData,this.formatedDb);
    this.view.OfferList.SegmentListOffers.setData(this.formatedData);
    this.view.OfferList.SegmentListOffers.onRowClick = this.onRowClicked;
  },
  
  formatedSegmentData: function(responseData,formatedData,formatedDb) {
    var scope = this;
    responseData.forEach(function(offer) {
        formatedData.push({
          "LblOfferTitle": {"text": offer.title},
          "CarImage": {"src": offer.imgUrl},
          "LblMakeModel": {"text": offer.make + ", " + offer.model},
          "LblFuelType": {"tеxt": offer.fuel},
          "LblYear": {"text": offer.year}
        });
    });
  },
  
  onRowClicked:function(seguiWidget, sectionNumber, rowNumber, selectedState){
    kony.store.setItem("OfferDetails", this.offersDb[rowNumber]);
    var ntf = new kony.mvc.Navigation("frmViewManageOffer");
    ntf.navigate();
  },

  navigate:function(){
    var nav = new kony.mvc.Navigation("frmAddEditOffer");
    nav.navigate();
  }

});