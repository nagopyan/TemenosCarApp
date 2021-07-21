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

  },

  navLogin : function() {
    if(isLoggedIn === true) {
      isLoggedIn = false;
      userFound = false;
      passFound = false;
      alert("Logout successfull!");
    }

    var ntf = new kony.mvc.Navigation("frmLogin");
    ntf.navigate();
  },

  updateIcon: function() {
    if(isLoggedIn === true) {
      this.view.imgLoginLogout.src = loggedInIcon;
    } else {
      this.view.imgLoginLogout.src = loggedOutIcon;
    }

  }

});