module ws.renderer {

    export class RendererGame {

        public static canvas: HTMLCanvasElement;
        public static context: CanvasRenderingContext2D;

        /**初期化*/
        public static init() {

            ws.renderer.RendererPlayer.init();
            
            ws.renderer.RendererPlayerBullets.init();
            
            ws.renderer.RendererEnemy.init();


        }

        /** 描画用のループ処理　常に呼ばれる */
        public static updateRenderer() {

            //if (!ws.Game.updateRenderer) return;
            //ws.Game.updateRenderer = false;

            ws.renderer.RendererPlayer.updateRenderer();
            
            ws.renderer.RendererPlayerBullets.updateRenderer();
            
            ws.renderer.RendererEnemy.updateRenderer();

        }

    }
}