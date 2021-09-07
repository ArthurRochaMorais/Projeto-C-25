class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,	
			restitution:0.3,
			friction:0,
			density:1.2
			}
		this.x=x;
		this.y=y;

		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			//rect(0,0);
			imageMode(CENTER);
			image(this.image, 0,0)
			pop()
			
	}

}