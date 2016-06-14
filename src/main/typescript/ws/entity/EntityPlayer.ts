/// <reference path="./Entity.ts" />
namespace ws.entity {

    export class EntityPlayer extends Entity {

        protected keyInput : ws.util.Vec2;

        constructor() {
            super();
            this.keyInput = new ws.util.Vec2();
        }

        public updateEntity(): void {
            this.velocity.x = this.keyInput.x;
            this.velocity.y = this.keyInput.y;

            // divide by sqrt(2)
            if (this.velocity.x != 0 && this.velocity.y != 0) {
                this.velocity.x *= 0.7071;
                this.velocity.y *= 0.7071;
            }

            super.updateEntity();
        }

        /** キーから指が離れた時 */
        public doKeyUp(key_: any): void {

            var key_code: number = key_.keyCode;

            switch (key_code) {
                case ws.Option.keyUP:
                    this.keyInput.y -= -1; break;
                case ws.Option.keyLEFT:
                    this.keyInput.x -= -1; break;
                case ws.Option.keyDOWN:
                    this.keyInput.y -= 1; break;
                case ws.Option.keyRIGHT:
                    this.keyInput.x -= 1; break;
            }

        }

        /** キーが押された時 */
        public doKeyDown(key_: any): void {

            var key_code: number = key_.keyCode;

            switch (key_code) {
                case ws.Option.keyUP:
                    this.keyInput.y += -1; break;
                case ws.Option.keyLEFT:
                    this.keyInput.x += -1; break;
                case ws.Option.keyDOWN:
                    this.keyInput.y += 1; break;
                case ws.Option.keyRIGHT:
                    this.keyInput.x += 1; break;
                case ws.Option.keyA:
                    this.doMainShot(); break;
                case ws.Option.keyB:
                    this.doSub(); break;
            }

        }

        private doMainShot() {

            var b_ = new ws.entity.EntityBullet(ws.Game.bullet);
            //b_.setImgName("b");
            b_.setPos(ws.util.Vec2.fromXY(this.pos.x, this.pos.y - 16));
            b_.setVelocity(ws.util.Vec2.fromXY(0, -1));

            ws.Game.spawnplayerBullet(b_);

        }

        private doSub() {

            var b_ = new ws.entity.EntityBullet(ws.Game.bullet2);
            //b_.setImgName("b");
            b_.setPos(ws.util.Vec2.fromXY(this.pos.x, this.pos.y - 16));
            b_.setVelocity(ws.util.Vec2.fromXY(0, -1));

            ws.Game.spawnplayerBullet(b_);

        }

    }

}
