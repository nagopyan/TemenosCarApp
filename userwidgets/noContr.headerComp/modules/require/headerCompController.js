define({

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {
    this.updateIcon();
  },

  postShow: function() {
    this.view.imgLoginLogout.onTouchStart = this.navLogin;
    this.getCurrentForm();
  },

  navLogin : function() {
    var ntf = new kony.mvc.Navigation("frmLogin");
    ntf.navigate();
  },
  
  updateIcon: function() {
    if(isLoggedIn === true) {
      this.view.imgLoginLogout.src = loggedInIcon;
    } else {
      this.view.imgLoginLogout.src = loggedOutIcon;
    }
    
  },
  
    getCurrentForm: function () {
	var currentForm = kony.application.getCurrentForm();
	alert(currentForm.id);
}

});