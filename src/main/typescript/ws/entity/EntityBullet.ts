namespace ws.entity {

    export class EntityBullet extends Entity {

        protected bullet : ws.bullet.BulletBase;
        
        constructor(b_ : ws.bullet.BulletBase){
            super();
            
            this.bullet = b_;
            
        }
        
        public getSpeed(): number {
            return this.bullet.getSpeed(this);
        }
        
        
        public getImage(): HTMLImageElement {
          return this.bullet.getImage(this);   
        }
        
        
    }
    
}