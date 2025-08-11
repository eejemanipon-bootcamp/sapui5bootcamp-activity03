function calculateTPerimeter(side1, side2, side3) {

/*Input validation*/
    if (typeof side1 !== 'number' || side1 < 1 ||
        typeof side2 !== 'number' || side2 < 1 ||
        typeof side3 !== 'number' || side3 < 1) {
        return console.log('Invalid input. Please enter a valid positive number.');
    }

    var perimeter = side1 + side2 + side3;

    return console.log("The perimeter of the triangle is " + perimeter);
  
}