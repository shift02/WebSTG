namespace ws.world {

    export class WorldBase {

        protected posX: number = 0;
        protected posY: number = 0;

        protected width = 1024;
        protected height = 640;

        protected playerBullets: Array<ws.entity.EntityBullet>;

        public init() {

            this.playerBullets = new Array();

        }

        public updateWorld(): void {
            this.updatePlayerBullets();
        }

        public updatePlayerBullets(): void {

            let len = this.playerBullets.length - 1;
            for (let i = len; i >= 0; i--) {

                this.playerBullets[i].updateEntity();

                if (this.isOffScreen(this.playerBullets[i]) || this.playerBullets[i].isDeath()) {
                    this.playerBullets.splice(i, 1);
                }
            }

        }

        public isOffScreen(e_: ws.entity.Entity): boolean {

            var pos = e_.getPos();
            if (pos.x + e_.getWidth() < 0) return true;
            if (pos.y + e_.getHeight() < 0) return true;
            if (pos.x > this.getWidth()) return true;
            if (pos.y > this.getHeight()) return true;

            return false;
        }

        public getPlayerBullets(): Array<ws.entity.EntityBullet> {
            return this.playerBullets;
        }

        public getWidth(): number {
            return this.width;
        }

        public getHeight(): number {
            return this.height;
        }

        public getRendererX(): number {
            return this.posX;
        }

        public getRendererY(): number {
            return this.posY;
        }

        public canMoveX(entity: ws.entity.Entity, moveX: number): boolean {

            //プレイヤーの当たり判定
            if (entity instanceof ws.entity.EntityPlayer) {
                return this.canPlayerMoveX(entity);
            }

            return true;
        }

        public canPlayerMoveX(p_: ws.entity.EntityPlayer): boolean {
            var movedX = p_.getPos().x + p_.getVelocity().x;

            if (movedX < 0) return false;
            if (movedX + p_.getWidth() > 1024) return false;

            return true;
        }

        public canMoveY(entity: ws.entity.Entity, moveY: number): boolean {

            //プレイヤーの当たり判定
            if (entity instanceof ws.entity.EntityPlayer) {
                return this.canPlayerMoveY(entity);
            }

            return true;
        }

        public canPlayerMoveY(p_: ws.entity.EntityPlayer): boolean {
            var movedY = p_.getPos().y + p_.getVelocity().y;

            if (movedY < 0) return false;
            if (movedY + p_.getHeight() > 640) return false;

            return true;
        }

        public isDeath(entity: ws.entity.Entity): boolean {
            return false;
        }

    }

}
