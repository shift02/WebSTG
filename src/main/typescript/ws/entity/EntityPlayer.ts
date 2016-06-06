/// <reference path="./Entity.ts" />
namespace ws.entity {

    export class EntityPlayer extends Entity {

        constructor(){
            super();
            
        }

        public updateEntity(): void {
            super.updateEntity();
        }

        /** キーから指が離れた時 */
        public doKeyUp(key_: any): void {

            var key_code: number = key_.keyCode;

            switch (key_code) {
                case ws.Option.keyUP:
                    this.moveY = 0; break;
                case ws.Option.keyLEFT:
                    this.moveX = 0; break;
                case ws.Option.keyDOWN:
                    this.moveY = 0; break;
                case ws.Option.keyRIGHT:
                    this.moveX = 0; break;

            }


        }

        /** キーが押された時 */
        public doKeyDown(key_: any): void {

            var key_code: number = key_.keyCode;

            switch (key_code) {
                case ws.Option.keyUP:
                    this.moveY = -1; break;
                case ws.Option.keyLEFT:
                    this.moveX = -1; break;
                case ws.Option.keyDOWN:
                    this.moveY = 1; break;
                case ws.Option.keyRIGHT:
                    this.moveX = 1; break;
                case ws.Option.keyA:
                    this.doShot(); break;

            }


        }

        private doShot() {

            var b_ = new ws.entity.EntityBullet();
            b_.setImgName("b");
            b_.setPosX(this.pos.x);
            b_.setPosY(this.pos.y-16);
            b_.setMoveY(-1);
            
            ws.Game.spawnplayerBullet(b_);
            
        }

    }

}