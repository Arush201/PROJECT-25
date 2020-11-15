class Paper{
    constructor(x,y){
        var options ={
            isStatic : false,
            restitution : 0.4,
            fricion : 0.5,
            density : 1.2
        }
        this.radius = 40
        this.body = Bodies.circle(x,y,this.radius,options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)

    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop()
        
    }
}