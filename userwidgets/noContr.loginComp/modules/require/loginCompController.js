define({

  activeUsers : [
    {
      username: "nick",
      password: "asd",
      userId: "1",
    },
    {
      username: "rayko",
      password: "qwe",
      userId: "2",
    },
    {
      username: "vasko",
      password: "123",
      userId: "3",
    },
    {
      username: "petar",
      password: "zxc",
      userId: "4",
    }
  ],

  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
  },

  preShow: function() {

  },

  postShow: function() {
    this.view.btnLogin.onClick = this.loginRequest;
    this.view.btnBack.onClick = this.navBack;
  },


  loginRequest: function() {

    var currentUser = this.view.txtUsername.text;
    var currentPass = this.view.txtPassword.text;


    //    for (let i = 0; i < this.activeUsers.length; i++) {
    this.activeUsers.forEach(user => {
      if(user.username == currentUser) {
        userFound = true;
        if(user.password == currentPass) {
          passFound = true;
        }
      }
    }
                            );
    this.canLogin();
  },

  canLogin: function() {
    if(userFound === true) {
      if(passFound === true) {
        isLoggedIn = true;
        this.navLogin();
      } else {
        alert("Incorrect Username/Password!");
      }
    } else {
      alert("Incorrect Username/Password!");
    }
  },

  navLogin : function() {
    var ntf = new kony.mvc.Navigation("frmViewOffers");
    ntf.navigate();
  },

  navBack : function() {

    var ntf = new kony.mvc.Navigation("frmLandingSearchScreen");
    ntf.navigate();
  },

});