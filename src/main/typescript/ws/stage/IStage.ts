namespace ws.stage {
 
   export interface IStage{
      
     startStage() :void;
     finishStage() : void;   
     
     updateSystem() : void;
     
     updateRenderer() : void;
     
     doKeyUp(key_ : number) : void;
     
     doKeyDown(key_ : number) : void;
     
     onMouseMove(e_ : number) : void;
     
     onMouseDown(e_ : number) : void;
     
     onDoubleClick(e_ : number) : void;
     
     onMouseUp(e : any) : void;
     
   }
  
}