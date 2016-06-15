namespace ws.world {

    export class WorldBase {

        protected areas: Array<ws.world.area.AreaBase>;

        public init() {

            this.areas = new Array();

            this.initArea();

        }

        public initArea() {
        }

        public getAreas(): Array<ws.world.area.AreaBase> {
            return this.areas;
        }

    }

}
