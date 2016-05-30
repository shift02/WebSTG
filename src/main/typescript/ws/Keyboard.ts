module ws {

  var keyW = 87;
  var keyA = 65;
  var keyS = 83;
  var keyD = 68;

  var keyUp = 38;
  var keyleft = 37;
  var keyUnder = 40;
  var keyRight = 39;

  var keySpace = 32;
  
  var keyDelete = 8;

  var keyE = 69;

  var key3 = 51;

  export class Keyboard {
    
    public static oldKey : number = -1;
    
    public static keyEnter = 13;
    public static keyESC = 27;
    public static keySpace = 32;
    public static keyZ = 90;
    public static keyDelete = 8;
    
    public static keyE = 69;
    
    public static keyShift = 16;

    public static init(): void {
      document.addEventListener( "keydown", this.doKeyDown, true );
      document.addEventListener( "keyup", this.doKeyUp, true );
    }
    public static doKeyDown(e_) : void{
      
      if(e_.keyCode == keyUnder || e_.keyCode == keyUp || e_.keyCode == keyleft || e_.keyCode == keyRight ||  e_.keyCode == ws.Keyboard.keySpace ||  e_.keyCode == keyDelete){
       e_.returnValue = false
       e_.preventDefault() 
      }
      
      //長押しで連打処理にならないように
      if(ws.Keyboard.oldKey == e_.keyCode)return;
      ws.Keyboard.oldKey = e_.keyCode;
      
      ws.stage.StageManager.getInstance().doKeyDown(e_);
    }

    public static doKeyUp(e_) : void{
      
      if(ws.Keyboard.oldKey == e_.keyCode)ws.Keyboard.oldKey = -1;
      
      ws.stage.StageManager.getInstance().doKeyUp(e_);
        
    }

  }

}
