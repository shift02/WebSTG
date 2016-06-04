namespace ws {

    export class Launcher {
        
        /** システムのFPS */
        public static systemFPS: ws.util.FPS;

        //public static game: ws.Game;

        public static imgLoader: ws.network.ImageLoader;

        public static preInit() {

            console.log("[Launcher] : 初期化処理を開始");
            
            var stageManager : ws.stage.StageManager = ws.stage.StageManager.getInstance();
    
            stageManager.changeStage(stageManager.LOGO);

            ws.Keyboard.init();//キー入力の初期化
            
            //画像ローダーの初期化
            this.imgLoader = new ws.network.ImageLoader();

            //FPSを表示させる機能を初期化
            ws.renderer.RendererInfo.init();
            
            this.systemFPS = new ws.util.FPS(30);//システムループ用のFPSを初期化

            loopSystem();//システムのループスタート
            loopRenderer();//描画のループスタート

            console.log("[Launcher] : 初期化処理を終了");

            setTimeout(ws.Launcher.startTitleT, 3000);

        }

        public static startTitleT(): void {
            ws.Launcher.startTitle();
        }

        /** タイトル画面に切り替える */
        public static startTitle(): void {

            Game.startGame();

        }

    }

}


window.onload = preInit;


function preInit() {

    ws.Launcher.preInit();

}

/** システム用のループ */
function loopSystem() {
  ws.stage.StageManager.getInstance().updateSystem();
  ws.Launcher.systemFPS.check();
  setTimeout(loopSystem, ws.Launcher.systemFPS.getInterval());
}

/** 描画用のループ */
function loopRenderer() {
  ws.stage.StageManager.getInstance().updateRenderer();
  window.requestAnimationFrame(loopRenderer);
}

