/// <reference path="./BulletBase.ts" />
namespace ws.bullet {

    export class BulletSlow extends BulletBase {
        
        
        constructor(){
         
            super();
            this.setSpeed(6);
            
        }
        
        public updateBullet(entity:ws.entity.EntityBullet): void {
            
            if(entity.getData()['energy']==null){
                entity.getData()['energy'] = 50;
            }
            
            entity.getData()['energy']--;
            
            console.log('aa');
            
        }
        
        public isDeath(entity:ws.entity.EntityBullet): boolean {
            
            if(entity.getData()['energy']==null)return false;
            
            return entity.getData()['energy']<=0;
            
        }
        
    }
    
}
     