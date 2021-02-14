class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            density: 0.8,
            restitution: 1,
            friction: 0.0			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        
		this.body=Bodies.circle(this.x, this.y, (this.r - 20)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var bobPos=this.body.position;		

			push()
			translate(bobPos.x, bobPos.y);
			rectMode(CENTER)
			fill("pink");
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}