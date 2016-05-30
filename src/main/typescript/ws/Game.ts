
namespace ws {

    export class Game {

    }

}


window.onload = preInit;


function preInit() {

    console.log("Game : preInti()");
    
    ws.Keyboard.init();
    
    var stageManager : ws.stage.StageManager = ws.stage.StageManager.getInstance();
    
    stageManager.changeStage(stageManager.GAME);

}