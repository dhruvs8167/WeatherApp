// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ApiManager from "./ApiManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AppManager extends cc.Component {

    @property(cc.Label)
    Temperature: cc.Label = null;

    @property(cc.Label)
    FeelsLike: cc.Label = null;

    @property(cc.Label)
    Humidity: cc.Label = null;

    @property(cc.Label)
    Wind: cc.Label = null;

    @property(cc.Sprite)
    IconImage: cc.Sprite = null;

    @property(cc.Node)
    LoadingScreen: cc.Node = null;

    @property(cc.Node)
    FirstScreen: cc.Node = null;

    @property(cc.Node)
    SecondScreen: cc.Node = null;

    @property
    text: string = 'hello';

    public latitude: string =null;
    public longitude: string = null;

    MainUrl: string =null;

     onLoad () {
        cc.game.on("WeatherApiResponce" , (res)=> {
            var data = JSON.parse(res);
            this.ShowWeatherDetails(data);
            var iconid = data.weather[0].icon;
            var url = " http://openweathermap.org/img/wn/"+iconid+"@2x.png";
            //For Downloading and Displaying Icon
            cc.assetManager.loadRemote(url, (err, tex)=>{
                cc.log("this url loded---------> " + url);
                this.IconImage.enabled = true;
                this.IconImage.spriteFrame = new cc.SpriteFrame(tex);
           });
        });
     }

    start () {
      ApiManager.instance = new ApiManager();
    }
    //Called from GetPosition Button
    OnGetPositionClick(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
               this.latitude = JSON.stringify(position.coords.latitude);
               this.longitude = JSON.stringify(position.coords.longitude);
               var url = "https://api.openweathermap.org/data/2.5/weather?lat="+this.latitude +"&lon="+this.longitude +"&appid=219d872e09770efcceb674c5c478191f&units=metric"
               ApiManager.instance.GetRequest(url);
               this.LoadingScreen.active = true;
               this.FirstScreen.active = false;
               this.SecondScreen.active = false;
            },error => alert(error.message));
        }

    }
    // Called from Paris,NewYork,Istanbul Buttons
    OnLocationsClicked(event, constant){        
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + constant + "&appid=219d872e09770efcceb674c5c478191f&units=metric";
        ApiManager.instance.GetRequest(url);
    }
    // Display Weather Details From API responce.
    ShowWeatherDetails(data){
        this.LoadingScreen.active = false;
        this.FirstScreen.active = false;
        this.SecondScreen.active = true;
        this.Temperature.string = data.main.temp + "°C";
        this.FeelsLike.string = data.main.feels_like + "°C";
        this.Humidity.string = data.main.humidity + "%";
        this.Wind.string = data.wind.speed + "m/s";        
    }
    // Called From Back Button
    OnBackCkick(){
        this.IconImage.spriteFrame = null;
        this.LoadingScreen.active = false;
        this.FirstScreen.active = true;
        this.SecondScreen.active = false;
    }
}
