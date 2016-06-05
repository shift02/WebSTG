namespace ws.world{
 
    export class WorldTest{
     
        private posX : number = 0 ;
        private posY : number = 0;
        
        public getRendererX():number{
            return this.posX;   
        }
        
        public getRendererY():number{
            return this.posY;   
        }
        
        public canMoveX(entity:ws.entity.Entity,moveX:number):boolean{
            
            //プレイヤーの当たり判定
            if(entity instanceof ws.entity.EntityPlayer){
                return this.canPlayerMoveX(entity);
            }
            
            return true;
        }
        
        public canPlayerMoveX(p_:ws.entity.EntityPlayer):boolean{
            
            if(p_.getPosX() + p_.getMoveX() < 0)return false;
            if(p_.getPosX() + p_.getMoveX() + p_.getWidth() > 1024)return false;
            
            return true;
        }
        
        public canMoveY(entity:ws.entity.Entity,moveY:number):boolean{
            
            //プレイヤーの当たり判定
            if(entity instanceof ws.entity.EntityPlayer){
                return this.canPlayerMoveY(entity);
            }
            
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