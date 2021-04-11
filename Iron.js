class Iron{
    constructor(x,y,w,h){
        var options={
            'restitution':0.8,
            'friction':3,
            'density':30,
        }
        this.body=Bodies.rectangle(x,y,w,h);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
        
    }
    display(){
        push();
        var pos= this.body.position;
        rectMode(CENTER);
        rotate(this.body,Math.PI/2);
        translate(pos.x,pos.y);
        
          rect(pos.x,pos.y,this.width, this.height);
          pop();
        
}
}
