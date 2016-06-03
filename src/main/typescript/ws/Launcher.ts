namespace ws {

    export class Launcher {

        public static launcher: Launcher;

        public game: ws.Game;

        public imgLoader: ws.network.ImageLoader;

        public preInit() {

            console.log("[Launcher] : 初期化処理を開始");
            
            var stageManager : ws.stage.StageManager = ws.stage.StageManager.getInstance();
    
            stageManager.changeStage(stageManager.LOGO);

            ws.Keyboard.init();
            this.imgLoader = new ws.network.ImageLoader();


            console.log("[Launcher] : 初期化処理を終了");

            setTimeout(ws.Launcher.startTitleT, 3000);

        }

        public static startTitleT(): void {
            ws.Launcher.launcher.startTitle();
        }

        /** タイトル画面に切り替える */
        public startTitle(): void {

            this.game = new Game();

            this.game.preInit();

            this.game.startGame();

        }

    }

}


window.onload = preInit;


function preInit() {

    ws.Launcher.launcher = new ws.Launcher();

    ws.Launcher.launcher.preInit();

}




