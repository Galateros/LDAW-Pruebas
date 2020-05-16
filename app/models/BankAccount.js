class BankAccount {
	constructor(){
		this.balance = 0;
		this.hist = [];
	}
	current(){
		return this.balance;
	}
	append(amount){
		if (amount < 0) {
			this.hist.push({negativeApp: amount})
			return this.balance;
		}else{
			this.hist.push({append: amount})
			this.balance = this.balance+amount;
			return this.balance;
		}
	}
	substract(amount){
		if (amount < 0) {
			this.hist.push({negativeSub: amount})
			return this.balance;
		}else{
			this.hist.push({substract: amount})
			this.balance = this.balance-amount;
			return this.balance;
		}
	}
	merge(account){
		this.hist.push({merge: account.current()})
		this.hist = this.hist.concat(account.history())
		this.balance += account.current();

		
	}
	history(){
		return this.hist;
	}

}
module.exports = BankAccount;