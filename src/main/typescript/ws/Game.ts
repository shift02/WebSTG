namespace ws{
 
    export class Game{
        
        public player :ws.entity.EntityPlayer;
     
        public preInit(){
            
        }
        
        public startGame(){
            
            
            
            var stageManager : ws.stage.StageManager = ws.stage.StageManager.getInstance();
    
            stageManager.changeStage(stageManager.GAME);
            
            
            
        }
        
    }
    
}