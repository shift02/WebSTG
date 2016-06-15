namespace ws.world{
 
    export class WorldTest extends WorldBase{
        
        public initArea(){
            
            this.areas.push(new ws.world.area.AreaTest());
            
        }
        
    }
    
}
