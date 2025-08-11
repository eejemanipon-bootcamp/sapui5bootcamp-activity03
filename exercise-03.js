function printXPattern(height) {

/*Input validation*/
    if (typeof height !== 'number' || height < 1 || height % 2 === 0 ) {
        return console.log('Invalid input. Please enter a valid positive odd number.');
    }

/*This outer loop determines the height of the pattern*/
    for( let rows = 0; rows < height; rows++ ){
        var pattern = "";

/*This inner loop determines the spaces and star of the pattern*/
        for( let x = 0; x < height; x++ ){
            if(x === rows || x === height - 1 - rows){
                pattern += "*";
            }
            else{
                pattern += " ";
            }
        }

/*Display output*/
        console.log(pattern);
    }
  
}