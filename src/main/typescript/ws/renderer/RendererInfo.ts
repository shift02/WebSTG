namespace ws.renderer {

    export class RendererInfo {

        /** 描画のFPS */
        public static rendererFPS: ws.util.FPS;

        public static canvas: HTMLCanvasElement;
        public static context: CanvasRenderingContext2D;

        public static init() {

            this.rendererFPS = new ws.util.FPS(60);

            this.canvas = <HTMLCanvasElement>document.getElementById('info_main');
            this.context = this.canvas.getContext('2d');

            (<any>this.context).imageSmoothingEnabled = false;
            (<any>this.context).msImageSmoothingEnabled = false;
            (<any>this.context).mozImageSmoothingEnabled = false;
            (<any>this.context).webkitImageSmoothingEnabled = false;

        }

        public static updateRenderer() {

            //FPSの描画(10フレーム)
            this.rendererFPS.check();
            this.rendererFPS.coolTime++;
            this.context.fillStyle = "#555555";

            if (this.rendererFPS.coolTime < 10) {
                return;
            }


            if (this.rendererFPS.coolTime >= 10) {
                //this.context.save();
                this.context.beginPath();
                this.context.clearRect(0, 0, this.canvas.width, 65);

                this.context.beginPath();
                this.context.restore();
                this.context.font = "14px 'ＭＳ ゴシック'";
                this.context.lineWidth = 3.0;
                this.context.strokeStyle = '#555555';
                this.context.strokeText('FPS  　:  ' + Math.floor(this.rendererFPS.getFPS()) + " , " + Math.floor(ws.Launcher.systemFPS.getFPS()), 10, 20);

                this.context.fillStyle = 'white';
                this.context.fillText('FPS  　:  ' + Math.floor(this.rendererFPS.getFPS()) + " , " + Math.floor(ws.Launcher.systemFPS.getFPS()), 10, 20);

                this.rendererFPS.coolTime = 0;
            }

            this.context.clearRect(0, 65, this.canvas.width, 200);


            this.context.restore();
            this.context.font = "14px 'ＭＳ ゴシック'";
            this.context.lineWidth = 3.0;
            this.context.strokeStyle = '#555555';
            this.context.strokeText('P_Bullets  　:  ' + ws.Game.area.getPlayerBullets().length, 10, 50);

            this.context.fillStyle = 'white';
            this.context.fillText('P_Bullets  　:  ' + ws.Game.area.getPlayerBullets().length, 10, 50);


        }

    }

}