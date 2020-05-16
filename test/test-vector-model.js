
const assert = require('assert');
const Vector = require('../app/models/Vector')

describe('Vectors',()=>{
	describe('#Sum Vectors',() =>{
		it('Correct Vector Sum',()=>{
			
			let v = new Vector();

			assert.deepEqual({x:3,y:4}, v.sum({x:1,y:2},{x:2,y:2}));
		})
	})
	describe('#Sub Vectors',() =>{
		it('Correct Vector Sub',()=>{
			
			let v = new Vector();

			assert.deepEqual({x:-1,y:0}, v.sub({x:1,y:2},{x:2,y:2}));
		})
	})
	describe('#Scale Vectors',() =>{
		it('Correct Vector Scale',()=>{
			
			let v = new Vector();

			assert.deepEqual({x:2,y:4}, v.scale({x:1,y:2},2));
		})
	})
	describe('#Dot Vectors',() =>{
		it('Correct Vector Dot Product',()=>{
			
			let v = new Vector();

			assert.equal(6, v.dot({x:1,y:2},{x:2,y:2}));
		})
	})

})