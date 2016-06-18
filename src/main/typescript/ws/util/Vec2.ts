namespace ws.util {

    export class Vec2 {

        public x: number = 0;

        public y: number = 0;

        static fromXY(x_: number, y_: number):Vec2{
            var v_ = new Vec2();
            v_.setXY(x_, y_);
            return v_;
        }

        static fromPolar(a_: number, r_: number):Vec2{
            var v_ = new Vec2();
            v_.setPolar(a_, r_);
            return v_;
        }

        public setXY(x_: number, y_: number) {
            this.x = x_;
            this.y = y_;
        }

        /** Set vector from radius and angle.*/
        public setPolar(a_: number, r_: number) {
            this.x = Math.cos(a_) * r_;
            this.y = Math.sin(a_) * r_;
        }
        
        /** 整数にしたXを返す */
        public getXd():number{
            return Math.floor(this.x);   
        }
        
        /** 整数にしたYを返す */
        public getYd():number{
            return Math.floor(this.y);   
        }

        /** Returns the angle of this vector. */
        public getAngle():number{
            return Math.atan2(this.y, this.x);
        }

        /** 長さ */
        public length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
       
        /** 単位ベクトルに変換 */
        public normalize() :Vec2{
            var l_ = this.length();
            var j = 1 / l_;
            this.x *= j;
            this.y *= j;
            return this;
        }
        
        /** コピー */
        public copy() :Vec2{
            var c = new Vec2();
            c.setXY(this.x,this.y);
            return c;
        }

        /** Return the sum of two vectors. */
        public add(v_ : Vec2):Vec2{
            var sum = new Vec2();
            sum.x = v_.x + this.x;
            sum.y = v_.y + this.y;
            return sum;
        }

        /** Return the difference of two vectors. */
        public sub(v_ : Vec2):Vec2{
            var diff = new Vec2();
            diff.x = v_.x - this.x;
            diff.y = v_.y - this.y;
            return diff;
        }

        /** Return the dot product of two vectors. */
        public dot(v_ : Vec2):number{
            return v_.x * this.x + v_.y * this.y;
        }
    }


}
