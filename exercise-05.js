function displayColor() {

/*Declaring colors and ordinal suffixes*/
    const colors = [
        "Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"
    ];

    const suffixes = [
        "th","st","nd","rd"
    ];

    for(let x = 0; x < colors.length; x++){
        var position = x + 1;
        var suffix;

/*Determine correct ordinal number suffix*/
        switch( position % 100 ){
            case 1:
                suffix = suffixes[1]; //"st"
                break;
            case 2:
                suffix = suffixes[2]; //"nd"
                break;
            case 3:
                suffix = suffixes[3]; //"rd"
                break;
            default:
                suffix = suffixes[0]; //"th"
        }

/*Display output*/      
        console.log(`${position}${suffix} choice is ${colors[x]}.`);
    }

}