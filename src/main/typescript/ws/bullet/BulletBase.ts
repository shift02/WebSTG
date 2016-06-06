namespace ws.bullet {

    export class BulletBase {

        protected speed = 15;

        protected imgName: string = null;
        protected img: HTMLImageElement = null;

        public setSpeed(s_: number): BulletBase {
            this.speed = s_;
            return this;
        }

        public getSpeed(entity:ws.entity.EntityBullet): number {
            return this.speed;
        }

        /** Entityの画像の名前をセットする */
        public setImgName(name_: string): ws.bullet.BulletBase {

            var img_;

            if (name_.indexOf(':') == -1) {
                img_ = "./app/resources/assets/core/textures/bullets/" + name_ + ".png";
            } else {
                var i2: string[] = name_.split(":");
                img_ = "./app/resources/assets/" + i2[0] + "/textures/bullets/" + i2[1] + ".png";
            }


            this.imgName = img_;

            return this;

        }

        public getImage(entity:ws.entity.EntityBullet): HTMLImageElement {

            if (this.img == null) {
                this.img = ws.Launcher.imgLoader.load(this.imgName, null);
            }

            return this.img;
        }

        /** 画像や音をロードする */
        public load() {
            this.loadImage(ws.Launcher.imgLoader);
        }

        protected loadImage(loader: ws.network.ImageLoader) {

            if (this.imgName == null) return;

            ws.Game.onLoad();
            this.img = loader.load(this.imgName, ws.Game.onLoaded);

        }

    }

}