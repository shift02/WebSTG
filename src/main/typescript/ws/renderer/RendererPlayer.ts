module ws.renderer {

    export class RendererPlayer {

        public static canvas: HTMLCanvasElement;
        public static context: CanvasRenderingContext2D;
        
        private static oldX = -1;
        private static oldY = -1;
  
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
            
            var pX = player_.getPosX();
            var pY = player_.getPosY();
            
            if(player_.oldX!=this.oldX){
                pX = player_.oldX+ Math.floor((player_.getPosX()-player_.oldX)/2);
                this.oldX = player_.oldX;
            }
            
            if(player_.oldY!=this.oldY){
                pY = player_.oldY+ Math.floor((player_.getPosY()-player_.oldY)/2);
                this.oldY = player_.oldY;
            }


            
            this.context.drawImage(player_.getImage(),pX,pY,32,32);
            
            
        }

    }

}