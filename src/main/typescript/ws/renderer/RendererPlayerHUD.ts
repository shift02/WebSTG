module ws.renderer {

    export class RendererHUD {

        public static canvas: HTMLCanvasElement;
        public static context: CanvasRenderingContext2D;
        
        private static oldX = -1;
        private static oldY = -1;
  
        public static init() {

            this.canvas = <HTMLCanvasElement>document.getElementById('game_player_hud');
            this.context = this.canvas.getContext('2d');

            (<any>this.context).imageSmoothingEnabled = false;
            (<any>this.context).msImageSmoothingEnabled = false;
            (<any>this.context).mozImageSmoothingEnabled = false;
            (<any>this.context).webkitImageSmoothingEnabled = false;


        }

        public static updateRenderer() {
            
            this.context.clearRect(0, 0, 1024, 640);
            
            //ws.util.RendererUtil.drawNormalWindows(this.context,20,20,80,80);
            //ws.util.RendererUtil.drawNormalWindows(this.context,100,30,180,70);

        }

    }

}
