class Rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var ropeHolder1x=pointA.x
		var ropeHolder1y=pointA.y

		var ropeHolder2x=pointB.x+this.offsetX
		var ropeHolder2y=pointB.y+this.offsetY

		line(ropeHolder1x,ropeHolder1y,ropeHolder2x,ropeHolder2y);
	}

}