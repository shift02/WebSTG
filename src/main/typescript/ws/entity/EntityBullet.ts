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
                        
            this.bullet.updateBullet(this);
        }
        
        public getSpeed(): number {
            return this.bullet.getSpeed(this);
        }
        
        
        public isDeath(): boolean {
            return this.bullet.isDeath(this);
        }
        
        public getImage(): HTMLImageElement {
          return this.bullet.getImage(this);   
        }
        
        
        
        
    }
    
}