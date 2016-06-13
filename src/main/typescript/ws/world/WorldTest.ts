namespace ws.world{
 
    export class WorldTest extends WorldBase{
        
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
