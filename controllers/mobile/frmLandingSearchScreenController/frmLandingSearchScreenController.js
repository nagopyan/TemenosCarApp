define({ 
  
  OffersDb: [
    {
      title: "Selling Audi S3",
      make: "Audi",
      model: "S3",
      fuel: "Benzin",
      imgUrl:"https://w7.pngwing.com/pngs/656/420/png-transparent-audi-a3-audi-s3-audi-quattro-audi-sportback-concept-audi-compact-car-car-mode-of-transport.png",
      year:"2016",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      user: "",
    },
    {
      title: "Selling Тoyota Supra",
      make: "Toyota",
      model: "Supra",
      fuel: "Dizel",
      imgUrl:"https://e7.pngegg.com/pngimages/240/386/png-clipart-toyota-sprinter-carib-toyota-supra-toyota-land-cruiser-prado-toyota-compact-car-car.png",
      year:"2016",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      user: "",
    },{
      title: "Selling Opel kadet",
      make: "Opel",
      model: "Kadet",
      fuel: "Gaz",
      imgUrl:"https://img2.pngdownload.id/20180611/ibc/kisspng-opel-kadett-chevrolet-kadett-opel-astra-car-opel-kadett-a-5b1f0ea2ed7de2.4341901415287620189728.jpg",
      year:"2016",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      user: "",
    }
  ],
  
  onViewCreated: function() {
    this.view.preShow = this.preShow;
  },

  preShow: function(){
  	kony.store.setItem("OfferDb", this.OffersDb);
  }
 //Type your controller code here 

 });