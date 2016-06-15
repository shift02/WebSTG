namespace ws.entity {

    export class Entity {

        protected hp: number;

        protected pos: ws.util.Vec2;
        protected velocity: ws.util.Vec2;

        protected speed = 9;

        protected width = 32;
        protected height = 32;

        protected imgName: string = null;
        protected img: HTMLImageElement = null;

        public oldX: number;
        public oldY: number;

        //なんでも入れれる入れ物
        protected data: any = {};

        constructor() {
            this.hp = 10;
            this.pos = new ws.util.Vec2();
            this.velocity = new ws.util.Vec2();
        }

        public updateEntity(): void {
            this.doMove();

        }

        public doMove(): void {

            if (this.canMoveX() && ws.Game.area.canMoveX(this, this.velocity.x)) {
                this.doMoveX();
            }
            if (this.canMoveY() && ws.Game.area.canMoveY(this, this.velocity.y)) {
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

            this.oldX = this.pos.x;

            for (let i = 0; i < this.getSpeed(); i++) {
                if (this.canMoveX() && ws.Game.area.canMoveX(this, this.velocity.x)) {
                    this.pos.x += this.velocity.x;
                }
            }

        }

        public doMoveY(): void {

            this.oldY = this.pos.y;

            for (let i = 0; i < this.getSpeed(); i++) {
                if (this.canMoveY() && ws.Game.area.canMoveY(this, this.velocity.y)) {
                    this.pos.y += this.velocity.y;
                }
            }

        }

        
        public setHP(hp_ : number):void{
          this.hp = hp_;   
        }
        
        public getHP(): number {
            return this.hp;
        }

        public setPos(pos_: ws.util.Vec2): void {
            this.pos = pos_;
        }

        public getPos(): ws.util.Vec2 {
            return this.pos;
        }

        public setVelocity(vel_: ws.util.Vec2): void {
            this.velocity = vel_;
        }

        public getVelocity(): ws.util.Vec2 {
            return this.velocity;
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

        /** 死亡しているか */
        public isDeath(): boolean {
            return false;
        }

        public getData(): any {
            return this.data;
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
