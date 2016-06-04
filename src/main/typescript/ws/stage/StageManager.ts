namespace ws.stage {

    /**
    * Stage(画面)を管理しているクラス　<br>
    * シングルトン
    */
    export class StageManager {

        private static instance: StageManager = null;

        constructor() {
        }

        /** インスタンスの取得 */
        public static getInstance(): StageManager {
            if (this.instance == null) {
                this.instance = new StageManager();
                this.instance.init();
            }
            return this.instance;
        }

        private info: boolean = false;

        //画面を切り替えると時に使う内部処理用の変数
        private stage: IStage;
        private next: IStage;

        public LOGO: IStage;
        public GAME: IStage;


        public ERROR: IStage;

        /** 初期化処理 */
        private init(): void {

            this.stage = null;
            this.LOGO = new StageLogo();
            this.GAME = new StageGame();

        }

        /** ステージを切り替える */
        public changeStage(stage_: IStage) {

            console.log('[StageManager] : ステージを切り替え, ' + stage_.toString);

            var dom_ = document.getElementById("stage_transition");
            dom_.className = "stage_transition_display";
            dom_.style.backgroundColor = "#000000";

            this.next = stage_;

            dom_ = null;
            setTimeout(ws.stage.StageManager.changeStageStart, 500);

        }

        public static changeStageStart() {

            var m_ = ws.stage.StageManager.getInstance();

            if (m_.next == null) return;

            if (m_.hasStage()) m_.stage.finishStage();

            setTimeout(ws.stage.StageManager.changeStageFinish, 30);

        }

        public static changeStageFinish() {

            var m_ = ws.stage.StageManager.getInstance();

            if (m_.next == null) return;

            m_.stage = m_.next;
            m_.stage.startStage();

            var dom_ = document.getElementById("stage_transition");
            dom_.style.backgroundColor = "transparent";

            dom_ = null;
            m_.next = null;

            setTimeout(ws.stage.StageManager.changeStageFinished, 600);

        }

        public static changeStageFinished() {

            var dom_ = document.getElementById("stage_transition");
            dom_.className = null;
            dom_ = null;

        }

        public hasStage(): boolean {
            return this.stage != null;
        }


        public updateSystem(): void {

            if (!this.hasStage()) return;
            this.stage.updateSystem();

        }

        public updateRenderer(): void {

            if (this.info) ws.renderer.RendererInfo.updateRenderer();

            if (!this.hasStage()) return;

            this.stage.updateRenderer();

        }

        public doKeyUp(key_: any): void {

            if (!this.hasStage()) return;

            return this.stage.doKeyUp(key_);

        }

        public doKeyDown(key_: any): void {
            
            //バックスラッシュ \ でfpsを表示させる
            if(220 == key_.keyCode)this.changeInfo();

            if (!this.hasStage()) return;

            return this.stage.doKeyDown(key_);

        }

        public onMouseMove(e: any): void {

            if (!this.hasStage()) return;

            return this.stage.onMouseMove(e);

        }

        public onMouseDown(e: any): void {

            if (!this.hasStage()) return;

            return this.stage.onMouseDown(e);

        }

        public onDoubleClick(e: any): void {

            if (!this.hasStage()) return;

            return this.stage.onDoubleClick(e);

        }

        public onMouseUp(e: any): void {

            if (!this.hasStage()) return;

            return this.stage.onDoubleClick(e);

        }

        public getStage() {
            return this.stage;
        }

        //FPSの表示を切り替え
        public changeInfo(): void {

            if (this.info) {
                this.info = false;
                var dom_ = document.getElementById("stage_info");
                dom_.classList.add("none_display");
                dom_.style.zIndex = '0';
                dom_ = null;
            } else {
                this.info = true;
                var dom_ = document.getElementById("stage_info");
                dom_.classList.remove("none_display");
                dom_.style.zIndex = '99';
                dom_ = null;
            }

        }

    }



}
