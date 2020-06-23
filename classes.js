class Materializer {
    constructor(str){
        this.target= str;
        this.activated= false
    }

    activate(){
        this.activated = true;
    }

    materialize(){
        if (this.activated) return this.target;
        return
    }
}