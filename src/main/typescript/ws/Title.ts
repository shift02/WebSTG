namespace ws{
 
    export class Title{
     
        public static init(){
            
            var stageManager : ws.stage.StageManager = ws.stage.StageManager.getInstance();
    
            stageManager.changeStage(stageManager.TITLE);
            
            
        }
        
        public static doKeyDown(key_ : any) : void{
    
            if(key_.keyCode==ws.Option.keyA){
                this.startGame();
            }
            
        }
        
        public static startGame(){
            ws.Game.initGame();
        }
        
        
    }
    
}