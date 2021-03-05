// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ApiManager extends cc.Component {

    static instance: ApiManager = null;

    GetRequest(url){

        var xhr = cc.loader.getXMLHttpRequest();
        cc.log(url);
        xhr.open("GET", url , true);
        xhr.onerror = function (){
          console.log("Connection Error");
        }

        xhr.onreadystatechange = function () {
    
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                cc.game.emit('WeatherApiResponce' , xhr.responseText);
            }
            if(xhr.readyState === 4 && xhr.status >= 400){
                console.log("Server Error");
            }
        };
        xhr.send();
    }
}
