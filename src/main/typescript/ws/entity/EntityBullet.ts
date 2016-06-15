/// <reference path="./Entity.ts" />
namespace ws.entity {

    export class EntityBullet extends Entity {

        protected bullet : ws.bullet.BulletBase;
        
        constructor(b_ : ws.bullet.BulletBase){
            super();
            
            this.bullet = b_;
            
        }
        
        public updateEntity(): void {
            super.updateEntity();
            
            for(let e_ of ws.Game.area.getEnemys()){
                
                if(this.isHit(e_)){
                    e_.setHP(0);
                    this.setHP(0);   
                }
                
                
            }
                        
            this.bullet.updateBullet(this);
        }
        
        private isHit(e_ : ws.entity.EntityEnemy):boolean{
            
            var pos_ = e_.getPos();
            
            if(this.getPos().x + this.getWidth() < pos_.x)return false;
            if(pos_.x + e_.getWidth() < this.getPos().x)return false;
            
            if(this.getPos().y + this.getHeight() < pos_.y)return false;
            if(pos_.y + e_.getHeight() < this.getPos().y)return false;
         
             
            return true;
        }
        
        public getSpeed(): number {
            return this.bullet.getSpeed(this);
        }
        
        
        public isDeath(): boolean {
            return this.bullet.isDeath(this) || this.getHP()<=0;
        }
        
        public getImage(): HTMLImageElement {
          return this.bullet.getImage(this);   
        }
        
        
        
        
    }
    
}