module ws.stage {
 
  export class StageLoading implements IStage{
    
    private count = 0;
    
    public loadMaxSize : number = 0;
    public loadSize : number = 0;
    private loaded;
    
    startStage() :void{
      
      var dom_ = document.getElementById("stage_loading");
      dom_.className="display";
      dom_ = null;
      
    }
    
    finishStage() : void{
      
      var dom_ = document.getElementById("stage_loading");
      dom_.className="none_display";
      dom_ = null;
      
      var p_ = <HTMLProgressElement>document.getElementById('loading_progress');
      p_.max = null;
      p_.value = null;
      this.loadMaxSize = 0;
      this.loadSize = 0;
      
    }
    
    public updateSystem() : void {
      
      this.count++;
      if(this.count<1)return;
      
      this.count = 0;
      
      if(this.loadSize<=1)return;
      
      var p_ = <HTMLProgressElement>document.getElementById('loading_progress');
      p_.max = this.loadMaxSize;
      p_.value = this.loadSize;
      
      p_ = null;
      
      if(this.loadMaxSize==this.loadSize){
        if(this.loaded)this.loaded();
        this.loaded = null;
      }
      
    }
    
    public setLoaded(f_ : Function) : void{
      this.loaded = f_;
    }
    
    public updateRenderer() : void{
      
      
      
    }
     
    public doKeyUp(key_ : any) : void{
      
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