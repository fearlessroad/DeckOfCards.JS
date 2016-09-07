function DeckConstructor(){
	this.deck = [];
	this.suits = ["C", "S", "H", "D"];
	this.ranks = ["2", "3", "4", "5", "6", "7","8","9","10","J","Q","K","A"];
	this.createDeck = function(){
		for (var j=0; j<this.suits.length; j++){
			for(var k=0; k<this.ranks.length; k++){
				this.deck.push(this.ranks[k]+this.suits[j]);
			}
		}
	}
	this.shuffle = function(){
		for (var i = this.deck.length-1; i>=0; i--){
			temp = this.deck[i];
			var j = Math.floor(Math.random()*i);
			this.deck[i] = this.deck[j];
			this.deck[j] = temp; 
		}
		return this.deck;
	}
	this.reset = function(){
		this.deck = [];
		this.createDeck();
	}
	// this.deal = function(){
	// 	var index = Math.floor(Math.random()*52)
	// 	var card = this.deck[index];
	// 	for (var i=index; i<this.deck.length; i++){
	// 		if (this.deck[i+1]){
	// 		this.deck[i] = this.deck[i+1];
	// 		}
	// 		else {
	// 			this.deck.pop();
	// 		}
	// 	}
	// 	return card;  
	// }
	this.deal = function(){
		if(this.deck.length > 0){
			return this.deck.shift();
		}
		else{
			return false; 
		}
	}
}

function PlayerConstructor(name){
	this.name = name; 
	this.hand = [];
	this.takeCard = function(deal){
		this.hand.push(deal);
		return this.hand;
	}
	this.discard = function(card){
		for (var i=0; i<this.hand.length; i++){
			if(this.hand[i]==card){
				this.hand.splice(i, 1);
			}
			return this.hand;
		}
	}
}

myDeck = new DeckConstructor();
myDeck.createDeck();
// console.log(myDeck.deck);
// myDeck.shuffle();
// console.log(myDeck.deal());
// console.log(myDeck.deal());
// console.log(myDeck.deck);
// myDeck.reset();
// console.log(myDeck.deck);

Bob = new PlayerConstructor();
Bob.takeCard(myDeck.deal());
Bob.takeCard(myDeck.deal());
console.log(Bob.hand);
// console.log(myDeck.deck)
Bob.discard("2C");
console.log(Bob.hand);
