/// <reference path="./Entity.ts" />

namespace ws.entity {
    
    export class EntityEnemy extends Entity{
        
        protected enemy : ws.enemy.Enemy;
        
        constructor(e_ : ws.enemy.Enemy){
            super();
            
            this.speed = 4;
            
            this.enemy = e_;
            
        }

        public updateEntity(): void {
            super.updateEntity();
                        
            this.enemy.updateEnemy(this);
        }
        
        
        public isDeath(): boolean {
            return this.enemy.isDeath(this);
        }
        
        public getImage(): HTMLImageElement {
          return this.enemy.getImage(this);   
        }
        
    }

}