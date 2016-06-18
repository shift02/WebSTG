namespace ws.enemy {

    export class Enemy {

        protected bullets : Array<ws.bullet.BulletBase>;

        protected imgName: string = null;
        protected img: HTMLImageElement = null;

        constructor() {
            this.bullets = new Array<ws.bullet.BulletBase>();

        }

        public updateEnemy(entity: ws.entity.EntityEnemy): void {

            
            
        }

        public isDeath(entity: ws.entity.EntityEnemy): boolean {
            return entity.getHP()<=0;
        }
        
        public addBullet(b_ :ws.bullet.BulletBase){
            this.bullets.push(b_);
        }

        /** Entityの画像の名前をセットする */
        public setImgName(name_: string): ws.enemy.Enemy {

            var img_;

            if (name_.indexOf(':') == -1) {
                img_ = "./app/resources/assets/core/textures/enemys/" + name_ + ".png";
            } else {
                var i2: string[] = name_.split(":");
                img_ = "./app/resources/assets/" + i2[0] + "/textures/enemys/" + i2[1] + ".png";
            }


            this.imgName = img_;

            return this;

        }

        public getImage(entity: ws.entity.EntityEnemy): HTMLImageElement {

            if (this.img == null) {
                this.img = ws.Launcher.imgLoader.load(this.imgName, null);
            }

            return this.img;
        }

        /** 画像や音をロードする */
        public load() {
            this.loadImage(ws.Launcher.imgLoader);
            this.loadBulletImage(ws.Launcher.imgLoader);
        }

        protected loadImage(loader: ws.network.ImageLoader) {

            if (this.imgName == null) return;

            ws.Game.onLoad();
            this.img = loader.load(this.imgName, ws.Game.onLoaded);

        }
        
        protected loadBulletImage(loader: ws.network.ImageLoader) {
            
            if (this.bullets.length == 0) return;
            
            for(let b_ of this.bullets){
                
                b_.load();
                
            }
            
        }

    }

}