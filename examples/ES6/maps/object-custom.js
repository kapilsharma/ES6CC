// JS custom class
function Favourite() {
    this.color = 'Green',
    this.fruit = 'Mango',
    this.vegetable = 'Brinjal';
};

// Adding function to custom class
Favourite.prototype.show = function(key) {
    return this.color;
};

// Creating object of custom class.
let myFavourite = new Favourite();

console.log(myFavourite);
console.log(myFavourite.show('color'));
