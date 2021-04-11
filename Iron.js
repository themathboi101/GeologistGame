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
        var pos= this.body.position;
        rectMode(CENTER);
        
          rect(pos.x,pos.y,this.width, this.height);
        
}
}