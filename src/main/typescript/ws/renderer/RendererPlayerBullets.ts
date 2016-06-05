module ws.renderer {

    export class RendererPlayerBullets {

        public static canvas: HTMLCanvasElement;
        public static context: CanvasRenderingContext2D;

        private static oldX = -1;
        private static oldY = -1;

        public static init() {

            this.canvas = <HTMLCanvasElement>document.getElementById('game_player_bullets');
            this.context = this.canvas.getContext('2d');

            (<any>this.context).imageSmoothingEnabled = false;
            (<any>this.context).msImageSmoothingEnabled = false;
            (<any>this.context).mozImageSmoothingEnabled = false;
            (<any>this.context).webkitImageSmoothingEnabled = false;


        }

        public static updateRenderer() {

            this.context.clearRect(0, 0, 1024, 640);

            for (let b_ of ws.Game.world.getPlayerBullets()) {

                if (b_ == null) continue;

                var pX = b_.getPosX();
                var pY = b_.getPosY();

                if (b_.oldX != this.oldX) {
                    pX = b_.oldX + Math.floor((b_.getPosX() - b_.oldX) / 2);
                    this.oldX = b_.oldX;
                }

                if (b_.oldY != this.oldY) {
                    pY = b_.oldY + Math.floor((b_.getPosY() - b_.oldY) / 2);
                    this.oldY = b_.oldY;
                }

                this.context.drawImage(b_.getImage(), pX, pY, 32, 32);

            }



        }

    }

}