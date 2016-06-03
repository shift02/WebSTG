namespace ws{
 
    export class Game{
        
        public player :ws.entity.EntityPlayer;
     
        public preInit(){
            
        }
        
        public startGame(){
            
            console.log("[Game] : 初期化処理を開始");
            
            var stageManager : ws.stage.StageManager = ws.stage.StageManager.getInstance();
    
            stageManager.changeStage(stageManager.GAME);
            
            
            
        }
        
    }
    
}