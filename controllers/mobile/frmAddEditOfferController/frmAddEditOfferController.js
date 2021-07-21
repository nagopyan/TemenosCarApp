define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow: function() {
    
    var previousForm = kony.application.getPreviousForm.id;
    if(previousForm === "frmViewOffers"){
      this.view.AddSaveBtn.text = "Add";
    }
  },

  onNavigate: function(obj) {
    if(kony.application.getPreviousForm.id === "frmViewManageOffer"){

      this.view.AddSaveBtn.text = "Save";

      this.view.TextFieldOfferTitle.text = obj.title;
      this.view.TextFieldImageUrl.text = obj.imgUrl;

    }else{
      this.view.AddSaveBtn.text = "Add";
    }
  }

});