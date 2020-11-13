class Dustbin{
    constructor(x,y,width,height){

        this.body =Bodies.rectangle(x,y,width,height)
        this.width = width
        this.height = height
        this.image = loadImage("sprites/paper.png")
        World.add(world,this.body)

    }
    display(){
        push()
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
        
    }
}