class Vector{
	sum(a,b){
		let finalX = a.x + b.x;
		let finalY = a.y + b.y;
		let c = {x:finalX,y:finalY}
		return c;
	}
	sub(a,b){
		let finalX = a.x - b.x;
		let finalY = a.y - b.y;
		let c = {x:finalX,y:finalY}
		return c;
	}
	scale(a,x){
		let finalX = a.x*x;
		let finalY = a.y*x;
		let c = {x:finalX,y:finalY}
		return c;
	}
	dot(a,b){
		let c = a.x*b.x + a.y*b.y;
		return c;
	}
}
module.exports = Vector;