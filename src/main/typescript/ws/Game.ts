namespace ws {

    export class Game {

        public static player: ws.entity.EntityPlayer;

        public static world: ws.world.WorldBase;

        public static updateRenderer:boolean = false;
        
        public static initGame(){
            
            console.log("[Game] : 初期化処理を開始");
            
            //ロード画面に切り替え
            var stageManager_ = ws.stage.StageManager.getInstance();
            ws.stage.StageManager.getInstance().changeStage(stageManager_.LOADING);

            this.onLoad();

            stageManager_.LOADING.setLoaded(ws.Game.startGame);
            
            //ワールドの初期化
            this.world = new ws.world.WorldTest();
            this.world.init();

            //プレイヤーの初期化
            this.player = new ws.entity.EntityPlayer();
            this.player.setImgName("p");
            this.player.load();
            
            new ws.entity.EntityBullet().setImgName("b").load();
            
            
            //描画の初期化
            ws.renderer.RendererGame.init();
            
            //延滞
            for(let i=0;i<10;i++){
                this.onLoad();
                setTimeout(this.arrearsLoad,100+Math.floor( Math.random() * 4000 ) );
            }
            
            this.onLoaded();
            
            console.log("[Game] : 初期化処理を終了");
            
        }
        
        public static arrearsLoad(){
            ws.Game.onLoaded();
        }


        public static startGame() {

            console.log("[Game] : ゲームを開始");

            var stageManager: ws.stage.StageManager = ws.stage.StageManager.getInstance();

            stageManager.changeStage(stageManager.GAME);

            

            

        }
        
        
        //World関係
        public static spawnplayerBullet(e_ : ws.entity.EntityBullet){
            
           this.world.getPlayerBullets().push(e_);
        }

        /** システムループ　FPS30 */
        public static updateSystem(): void {

            if (this.player != null) this.player.updateEntity();
            if(this.world !=null)this.world.updateWorld();
            
            this.updateRenderer = true;

        }

        /** キーから指が離れた時 */
        public static doKeyUp(key_: any): void {
            if (this.player != null) this.player.doKeyUp(key_);
        }

        /** キーが押された時 */
        public static doKeyDown(key_: any): void {

            if (this.player != null) this.player.doKeyDown(key_);

        }

        /** 読み込みを開始した時に呼ぶ */
        public static onLoad() {

            var stageManager_ = ws.stage.StageManager.getInstance();
            stageManager_.LOADING.loadMaxSize++;

        }

        /** 読み込みが完了した時に呼ぶ */
        public static onLoaded() {

            var stageManager_ = ws.stage.StageManager.getInstance();
            stageManager_.LOADING.loadSize++;

        }

    }

}