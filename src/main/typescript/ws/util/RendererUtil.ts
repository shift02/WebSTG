namespace ws.util{
    
  export class RendererUtil{
        
      public static normalWindowBase: HTMLImageElement;

    public static init() {
      
      //ImageLoaderを使用
      this.normalWindowBase = ws.Launcher.imgLoader.load('./app/resources/assets/core/WindowBase.png',null);
      
    }
    
    /** 
    * キャンバスにWindowを描画する
    */
    public static drawNormalWindows(context: CanvasRenderingContext2D, x, y, w, h) {
      this.drawWindow(context, this.normalWindowBase, x, y, w, h);
    }
    
    /** 
    * 非推奨 <br> 
    * キャンバスにWindowを描画する
    */
    public static drawWindow(context, img, x, y, w, h) {
      
      context.drawImage(img, 0, 0, 6, 6, x, y, 30, 30); //左上
      context.drawImage(img, 12, 0, 6, 6, x + w - 30, y, 30, 30); //右上
      context.drawImage(img, 0, 12, 6, 6, x, y + h - 30, 30, 30); //左下
      context.drawImage(img, 12, 12, 6, 6, x + w - 30, y + h - 30, 30, 30); //右下

      context.drawImage(img, 6, 0, 6, 6, x + 30, y, w - 60, 30); //上辺
      context.drawImage(img, 6, 12, 6, 6, x + 30, y + h - 30, w - 60, 30); //下辺

      context.drawImage(img, 0, 6, 6, 6, x, y + 30, 30, h - 60); //左辺
      context.drawImage(img, 12, 6, 6, 6, x + w - 30, y + 30, 30, h - 60); //右辺

      context.drawImage(img, 6, 6, 6, 6, x + 30, y + 30, w - 60, h - 60); //中身
      
    }
      
  }
    
}