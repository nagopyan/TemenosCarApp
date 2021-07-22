define({ 

  OffersDb: [
    {
      title: "Selling Audi S3",
      make: "Audi",
      model: "S3",
      fuel: "Gasoline",
      imgUrl:"https://cdn.gcdata.gr/data/photos/873b2a1fcf6a43248609caa5546b4a1c.jpg",
      year:"2016",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Selling Тoyota Supra",
      make: "Toyota",
      model: "Supra",
      fuel: "Diesel",
      imgUrl:"https://www.autogreeknews.gr/wp-content/uploads/2019/07/Toyota_Supra_Anniversary_1.jpg",
      year:"2016",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Selling Opel kadet",
      make: "Opel",
      model: "Kadet",
      fuel: "Gasoline",
      imgUrl:"https://www.autogreeknews.gr/wp-content/uploads/2019/08/Opel-Kadett-1991-1.jpg",
      year:"2005",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Selling Tesla S",
      make: "Tesla",
      model: "S",
      fuel: "Electric",
      imgUrl:"https://www.autonomous.gr/wp-content/uploads/2020/09/tesla-model-s-plaid-in-red.jpg",
      year:"2021",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Selling BMW M5",
      make: "BMW",
      model: "M5",
      fuel: "Gasoline",
      imgUrl:"https://www.carscoops.com/wp-content/uploads/2020/06/BMW-M5-Facelift-1c-1024x555.jpg",
      year:"2014",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Selling BMW X5",
      make: "BMW",
      model: "X5",
      fuel: "Gasoline",
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2016_BMW_X5_xDrive40d_M_Sport_Automatic_3.0_Front.jpg/1200px-2016_BMW_X5_xDrive40d_M_Sport_Automatic_3.0_Front.jpg",
      year:"2015",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Selling Audi R8",
      make: "Audi",
      model: "R8",
      fuel: "Diesel",
      imgUrl:"https://www.newsauto.gr/wp-content/uploads/2021/04/210404002620_Audi-R8-V10-performance-quattro-1-1.jpg",
      year:"2021",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    }

  ],

  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow: function(){
    kony.store.setItem("OfferDb", this.OffersDb);
    this.view.SearchForm.findCarClick = this.navigate;
  },

  navigate: function(){

    var maker = makeSelect;
    var model = modelSelect;
    var fuel = fuelSelect;
    kony.store.setItem("filterData",[maker,model,fuel]);
    var nav = new kony.mvc.Navigation("frmSearchList");
    nav.navigate();
    kony.application.destroyForm("frmLandingSearchScreen");
  }
});