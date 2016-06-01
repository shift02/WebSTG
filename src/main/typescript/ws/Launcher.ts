
namespace ws {

    export class Launcher {

        public static launcher: Launcher;
        
        public game : ws.Game;

        public preInit() {

            console.log("[Launcher] : 初期化処理を開始");

            ws.Keyboard.init();

            this.game = new Game();
            
            this.game.preInit();

            this.game.startGame();

            console.log("[Launcher] : 初期化処理を終了");
            
        }

    }

}


window.onload = preInit;


function preInit() {

    ws.Launcher.launcher = new ws.Launcher();

    ws.Launcher.launcher.preInit();
    
}




