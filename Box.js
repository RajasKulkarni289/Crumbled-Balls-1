class Box{
    constructor(x,y,width,height){
        var ops={
            isStatic:true,
            friction:4
            
        }
        this.body=Bodies.rectangle(x,y,width,height,ops);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
}
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("green");
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}