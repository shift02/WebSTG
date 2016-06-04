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

        ws.Game.updateSystem();

    }

    public updateRenderer() : void{
        
        ws.renderer.RendererGame.updateRenderer();
        
    }

    public doKeyUp(key_ : any) : void{
        
        ws.Game.doKeyUp(key_);
        
    }

    public doKeyDown(key_ : any) : void{
    
        ws.Game.doKeyDown(key_);
        
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
