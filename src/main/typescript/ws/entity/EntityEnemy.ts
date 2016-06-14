/// <reference path="./Entity.ts" />

namespace ws.entity {
    
    export class EntityEnemy extends Entity{
        
        protected enemy : ws.enemy.Enemy;
        
        constructor(e_ : ws.bullet.BulletBase){
            super();
            
            this.enemy = e_;
            
        }

    }

}