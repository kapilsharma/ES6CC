console.log("Something outside block");

{ // TDZ begin for this block.
    console.log("Variable through var = " + var_var); //undefined
    console.log("Variable through let = " + let_var); // Reference error
    var var_var = 1;
    let let_var = 2; //End of TDZ for let_var
    console.log("Variable through var = " + var_var); // 1
    console.log("Variable through let = " + let_var); // 2
}
