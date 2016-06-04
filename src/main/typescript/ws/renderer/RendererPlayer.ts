module ws.renderer {

    export class RendererPlayer {

        public static canvas: HTMLCanvasElement;
        public static context: CanvasRenderingContext2D;
  
        public static init() {

            this.canvas = <HTMLCanvasElement>document.getElementById('game_player');
            this.context = this.canvas.getContext('2d');

            (<any>this.context).imageSmoothingEnabled = false;
            (<any>this.context).msImageSmoothingEnabled = false;
            (<any>this.context).mozImageSmoothingEnabled = false;
            (<any>this.context).webkitImageSmoothingEnabled = false;


        }

        public static updateRenderer() {

            var player_: ws.entity.EntityPlayer = ws.Game.player;

            if (player_ == null) return;
            
            this.context.clearRect(0, 0, 1024, 640);
            this.context.drawImage(player_.getImage(),player_.getPosX(),player_.getPosY(),64,64);
            
            
        }

    }

}