namespace ws.stage {

  export class StageGame implements IStage{

    private e : boolean;

    public startStage() :void{

      this.e = false;

      var dom_ = document.getElementById("stage_game");
      dom_.className="display";
      dom_ = null;

    }

    public finishStage() : void{

      var dom_ = document.getElementById("stage_game");
      dom_.className="none_display";
      dom_ = null;

    }

    public updateSystem() : void {


    }

    public updateRenderer() : void{
    }

    public doKeyUp(key_ : any) : void{
        
        
        console.log(key_);
        
    }

    public doKeyDown(key_ : any) : void{
    
    }
    

    public onMouseMove(e_ : any) : void{
    }

    public onMouseDown(e_ : any) : void{
    }

    public onDoubleClick(e_ : any) : void{
    }

    public onMouseUp(e_ : any) : void{

    }

  }

}
