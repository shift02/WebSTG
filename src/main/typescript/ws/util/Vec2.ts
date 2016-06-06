namespace ws.util {

    export class Vec2 {

        public x: number = 0;

        public y: number = 0;

        public setXY(x_: number, y_: number) {
            this.x = x_;
            this.y = y_;
        }
        
        /** 整数にしたXを返す */
        public getXd():number{
           return Math.floor(this.x);   
        }
        
        /** 整数にしたYを返す */
        public getYd():number{
           return Math.floor(this.y);   
        }

        /** 長さ */
        public length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        
        /** 引数に入れたVec2までの距離のVec2を返す */
        public distance(v_ : Vec2):Vec2{
            var c = new Vec2();
            c.x = v_.x - this.x;
            c.y = v_.y - this.y;
            return c;
        }

        /** 単位ベクトルに変換 */
        public normalize(){
            var l_ = this.length();
            var j = 1 / l_;
            this.x *= j;
            this.y *= j;
        }
        
        /** コピー */
        public copy() :Vec2{
            var c = new Vec2();
            c.setXY(this.x,this.y);
            return c;
        }

    }


}