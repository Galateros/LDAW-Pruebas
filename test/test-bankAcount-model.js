
const assert = require('assert');
const BankAccount = require('../app/models/BankAccount')
describe('Bank Account',()=>{
	describe('#Current Balance',() =>{
		it('Correct Current Balance',()=>{
			
			let b = new BankAccount();
			

			assert.deepEqual(0, b.current());
		})
	})
	describe('#Append Account',() =>{
		it('Positive Account Modifier',()=>{
			
			let b = new BankAccount();


			assert.deepEqual(3600.5, b.append(3600.50));
		})
		it('Negative Account Modifier',()=>{
			
			let b = new BankAccount();
			b.append(3600.5)

			assert.deepEqual(3600.5, b.append(-10));
		})
	})
	describe('#Substract Account',() =>{
		it('Positive Substraction',()=>{
			
			let b = new BankAccount();
			

			assert.deepEqual(-500, b.substract(500));
		})
		it('Negative Substraction',()=>{
			
			let b = new BankAccount();
			

			assert.deepEqual(0, b.substract(-500));
		})
	})
	describe('#Merge Accounts',() =>{
		it('Positive Merge Balance',()=>{
			
			let b = new BankAccount();
			let c = new BankAccount();

			b.append(500);
			c.append(50);
			b.merge(c);

			assert.equal(550, b.current());
		})
		it('Positive Merge History',()=>{
			
			let b = new BankAccount();
			let c = new BankAccount();

			b.append(500);
			c.append(50);
			b.merge(c);

			assert.deepEqual([{append: 500},{merge: 50},{append: 50}], b.history());
		})
		it('Negative Merge Balance',()=>{
			
			let b = new BankAccount();
			let c = new BankAccount();

			b.append(500);
			c.substract(50);
			b.merge(c);

			assert.equal(450, b.current());
		})
		it('Negative Merge History',()=>{
			
			let b = new BankAccount();
			let c = new BankAccount();

			b.append(500);
			c.substract(50);
			b.merge(c);

			assert.deepEqual([{append: 500},{merge: -50},{substract: 50}], b.history());
		})

	})
	describe('#History Account',() =>{
		it('Bulk History',()=>{
			
			let b = new BankAccount();
			b.append(50);
			b.append(-50);
			b.substract(25);
			b.substract(-25);
			let c = new BankAccount();
			c.append(25);
			b.merge(c);
			

			assert.deepEqual([{append:50},{negativeApp: -50},{substract: 25},{negativeSub: -25},{merge: 25},{append: 25}], b.history());
		})
	})

})