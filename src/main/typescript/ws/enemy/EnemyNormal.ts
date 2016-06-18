namespace ws.enemy {

    /** プレイヤーに向かって弾を発射するEnemy */
    export class EnemyNormal extends Enemy {

        

        private normalBullet: ws.bullet.BulletBase;

        constructor() {
            super();

            this.normalBullet = new ws.bullet.BulletBase();
            this.normalBullet.setImgName("eb");
            this.addBullet(this.normalBullet);

        }

        public updateEnemy(entity: ws.entity.EntityEnemy): void {
            super.updateEnemy(entity);
            
            var d_ = entity.getData();

            if(d_['count']==null)d_['count']=0;
            
            d_['count']++;

            if (d_['count'] > 20) {
                d_['count'] = 0;

                var pos_ = entity.getPos();
                var b_ = new ws.entity.EntityBullet(this.normalBullet);
                b_.setHasEnemyBullet(true);

                b_.setPos(ws.util.Vec2.fromXY(pos_.x, pos_.y + 10));
                b_.setVelocity(pos_.sub(ws.Game.player.getPos()).normalize());
                ws.Game.area.spawnEnemyBullets(b_);

            }

        }

    }

}