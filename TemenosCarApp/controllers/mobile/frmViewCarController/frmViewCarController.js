define({ 

  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow: function() {
    this.view.HeaderComponent.SignInBtn.onTouchStart = this.navigateToLoginForm;
  },
  
  navigateToLoginForm:function(){
    var nav = new kony.mvc.Navigation("frmLogin");
    nav.navigate();
  }

 });