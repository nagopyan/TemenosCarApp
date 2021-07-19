define({ 

 onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow: function() {
    this.view.AddEditScrollContainer = this.onNavigate;
  },
  
  onNavigate: function(obj) {
    this.view.TextFieldOfferTitle.text = obj.title;
    this.view.TextFieldImageUrl.text = obj.imgUrl;
  }
  
 });