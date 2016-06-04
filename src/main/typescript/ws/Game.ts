namespace ws {

    export class Game {

        public static player: ws.entity.EntityPlayer;

        public static world: ws.world.WorldTest;

        public preInit() {

        }

        public static startGame() {

            console.log("[Game] : 初期化処理を開始");

            var stageManager: ws.stage.StageManager = ws.stage.StageManager.getInstance();

            stageManager.changeStage(stageManager.GAME);

            this.world = new ws.world.WorldTest();

            this.player = new ws.entity.EntityPlayer();

        }

        /** システムループ　FPS30 */
        public static updateSystem(): void {

        }

        /** キーから指が離れた時 */
        public static doKeyUp(key_: any): void {
            if (this.player != null) this.player.doKeyUp(key_);
        }

        /** キーが押された時 */
        public static doKeyDown(key_: any): void {

            if (this.player != null) this.player.doKeyDown(key_);

        }

    }

}