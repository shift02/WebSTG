namespace ws.world{
 
    export class WorldTest extends WorldBase{
        
        public canPlayerMoveX(p_:ws.entity.EntityPlayer):boolean{
            
            if(p_.getPosX() + p_.getMoveX() < 0)return false;
            if(p_.getPosX() + p_.getMoveX() + p_.getWidth() > 1024)return false;
            
            return true;
        }
        
        public canPlayerMoveY(p_:ws.entity.EntityPlayer):boolean{
            
            if(p_.getPosY() + p_.getMoveY() < 0)return false;
            if(p_.getPosY() + p_.getMoveY() + p_.getHeight() > 640)return false;
            
            return true;
        }
        
        public isDeath(entity:ws.entity.Entity):boolean{
           return false;   
        }
        
    }
    
}