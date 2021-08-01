
class Base
{
 
constructor(x,y,h,w)
{


let options={
isStatic:true

}

this.body=Bodies.rectangle(x,y,h,w,options)
this.h=h
this.w=w

World.add(world,this.body)

}


show() {

var pos = this.body.position;

push()
rectMode(CENTER)
stroke(225)
fill("yellow")
rect(pos.x,pos.y,this.h,this.w)
pop()

}
}

