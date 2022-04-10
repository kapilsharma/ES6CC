var x = 5;
console.log(x);

// Start a new block
{
    // Redeclare x and declare a new variable y;
    var x = 2;
    var y = 3;
    console.log(x);
    console.log(y);
}

// print it after the block
console.log(x);
console.log(y);