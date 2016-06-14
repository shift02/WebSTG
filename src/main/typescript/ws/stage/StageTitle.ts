namespace ws.stage {

  export class StageTitle implements IStage{

    private e : boolean;

    public startStage() :void{

      this.e = false;

      var dom_ = document.getElementById("stage_title");
      dom_.className="display";
      dom_ = null;

    }

    public finishStage() : void{

      var dom_ = document.getElementById("stage_title");
      dom_.className="none_display";
      dom_ = null;

    }

    public updateSystem() : void {


    }

    public updateRenderer() : void{
        
        
    }

    public doKeyUp(key_ : any) : void{
        
    }

    public doKeyDown(key_ : any) : void{
        ws.Title.doKeyDown(key_);
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
