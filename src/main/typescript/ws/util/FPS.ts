module ws.util {
  
  /** FPSを管理するクラス */
  export class FPS{
    
    /** 目標FPS */
    target : number;
    /** インターバル */
    interval : number;
    /** クールタイム */
    coolTime : number;
    /** 過去の時間 */
    checkpoint : number;
    /** FPS */
    fps : number; 
    
    constructor(_target : number) {
      this.target = _target;
      this.interval   = 1000 / this.target; 
      this.coolTime  = 0;        // クールタイム
      this.checkpoint = Date.now();  // 過去の時間
      this.fps        = 0;
    }
    
    /** checkからcheckまでの時間を元にFPSを計算 */
    public check() : void{
      this.fps = 1000 / (Date.now() - this.checkpoint);
      this.checkpoint = Date.now();
    }
    
    /** 現在のFPSを取得 */
    public getFPS() : number{
      //return this.fps.toFixed(2); 
      return this.fps;
    }
    
    /** 次回処理までのインターバルを取得 */
    public getInterval() : number{
      var elapsed = Date.now() - this.checkpoint;
      return this.interval - elapsed > 4 ? this.interval - elapsed : 4;
    }
    
  }
  
}