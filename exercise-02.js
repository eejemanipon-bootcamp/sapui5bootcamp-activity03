function printRightTriangle(height) {

/*Input validation*/
    if (typeof height !== 'number' || height < 1 ) {
        return console.log('Invalid input. Please enter a valid number (non negative).');
    }

/*Variable Declaration*/
    var rows = height;

/*This outer loop determines the height of the triangle*/
    while( rows > 0 ){
        var triangle = "";
        var space = 0;
        var star = 0;

/*This inner loop determines the spaces and star of the triangle*/
        while( space++ < height - rows ){
            triangle += " ";
        }

        while( star++ < rows ){
            triangle += "*";
        }

/*Display output*/
        console.log(triangle);
        rows--;
    }
  
}