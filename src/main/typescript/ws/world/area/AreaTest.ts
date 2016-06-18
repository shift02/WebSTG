/// <reference path="./AreaBase.ts" />
namespace ws.world.area{

    export class AreaTest extends AreaBase{
        
        private spawnCount = 0;
        
        private testEntity : ws.enemy.Enemy;
        
        public initEnemy(){
            
            this.testEntity = new ws.enemy.EnemyNormal();
            this.testEntity.setImgName("e");
            this.testEntity.load();
            
            
        }
        
        public updateArea(): void {
            
            this.spawnCount++;
            
            if(this.spawnCount>40){
             this.spawnCount = 0;
                
                var e_ = new ws.entity.EntityEnemy(this.testEntity);
                e_.setPos(ws.util.Vec2.fromXY(0,100));
                e_.setVelocity(ws.util.Vec2.fromXY(1,0));
                
                this.spawnEnemy(e_);   
            }
            
        }
        
        public canPlayerMoveX(p_:ws.entity.EntityPlayer):boolean{
            var movedX = p_.getPos().x + p_.getVelocity().x;
            
            if(movedX < 0)return false;
            if(movedX + p_.getWidth() > 1024)return false;
            
            return true;
        }
        
        public canPlayerMoveY(p_:ws.entity.EntityPlayer):boolean{
            var movedY = p_.getPos().y + p_.getVelocity().y;
            
            if(movedY < 0)return false;
            if(movedY + p_.getHeight() > 640)return false;
            
            return true;
        }
        
        public isDeath(entity:ws.entity.Entity):boolean{
           return false;   
        }
        
    }
    
}
