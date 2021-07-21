define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow:function(){
    this.view.BtnAddOffer.onTouchStart = this.navigate;
  },

  navigate:function(){
    var nav = new kony.mvc.Navigation("frmAddEditOffer");
    nav.navigate();
  }

});