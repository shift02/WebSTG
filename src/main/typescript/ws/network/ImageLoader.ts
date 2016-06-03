module ws.network {

  export class ImageLoader {

    private imageCaches: any = new Object();
    
    constructor(){
      console.log('[ImageLoader] : ImageLoaderを初期化');
    }

    public load(filename: string, onLoaded: (ev: Event) => void): HTMLImageElement {

      if(this.imageCaches[filename]){
        if(onLoaded!=null)onLoaded(null);
        return this.imageCaches[filename];
      }
        
      var img = new Image();
      if(onLoaded!=null)img.onload = onLoaded;
      img.onerror = function(e){
        throw　e;
      }
      
      img.src = filename;
      
      this.imageCaches[filename]=img;
      
      console.log('[ImageLoader] : '+filename+' の読み込みを完了');

      return img;
      
    }
  }

}