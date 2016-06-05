namespace ws.entity {

    export class Entity {

        protected posX: number = 0;
        protected posY: number = 0;

        protected moveX: number = 0;
        protected moveY: number = 0;

        protected speed = 9;
        
        protected width = 32;
        protected height = 32;

        protected imgName: string = null;
        protected img: HTMLImageElement = null;

        public oldX: number;
        public oldY: number;

        public updateEntity(): void {
            this.doMove();
        }

        public doMove(): void {

            if (this.canMoveX() && ws.Game.world.canMoveX(this,this.moveX)){
                 this.doMoveX();
            }
            if (this.canMoveY() && ws.Game.world.canMoveY(this,this.moveY)){
                 this.doMoveY();
            }

        }

        public canMoveX(): boolean {
            return true;
        }

        public canMoveY(): boolean {
            return true;
        }

        public doMoveX(): void {

            this.oldX = this.posX;

            for (let i = 0; i < this.speed; i++) {
                if (this.canMoveX() && ws.Game.world.canMoveX(this,this.moveX)){
                     this.posX += this.moveX;
                }
            }

        }

        public doMoveY(): void {
            
            this.oldY = this.posY;
            
            for (let i = 0; i < this.speed; i++) {
                if (this.canMoveY() && ws.Game.world.canMoveY(this,this.moveY)){
                     this.posY += this.moveY;
                }
            }

        }

        public getPosX(): number {
            return this.posX;
        }

        public getPosY(): number {
            return this.posY;
        }
        
        public getMoveX(): number {
            return this.moveX;
        }

        public getMoveY(): number {
            return this.moveY;
        }

        public getSpeed(): number {
            return this.speed;
        }
        
        public getWidth(): number {
            return this.width;
        }
        
        public getHeight(): number {
            return this.height;
        }

        /** Entityの画像の名前をセットする */
        public setImgName(name_: string): ws.entity.Entity {

            var img_;

            if (name_.indexOf(':') == -1) {
                img_ = "./app/resources/assets/core/textures/entitys/" + name_ + ".png";
            } else {
                var i2: string[] = name_.split(":");
                img_ = "./app/resources/assets/" + i2[0] + "/textures/entitys/" + i2[1] + ".png";
            }


            this.imgName = img_;

            return this;

        }

        public getImage(): HTMLImageElement {
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