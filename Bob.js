class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density:0.6,
            restitution: 1,
            friction: 0
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("gray");
        strokeWeight(5);
        stroke("yellow");
        ellipse(0,0,70,70);
        pop();
    }
}