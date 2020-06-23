class TargetingSolution{
    constructor(obj){
        this.x = obj.x;
        this.y = obj.y;
        this.z = obj.z;
    }

    target(){return "(" + this.x.toString() + ", " + this.y.toString() + ", " + this.z.toString() + ")"}
}
