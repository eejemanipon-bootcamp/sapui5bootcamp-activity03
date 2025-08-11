function convertNumber(num) {

/*Input validation*/
    if (typeof num !== 'number' || num < 1 || num > 999) {
        return 'Invalid input. Please enter a number between 1 and 999.';
    }

    const cHundred = " Hundred";

/*Declaring 1-9*/
    const cOnes = [
        "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
    ];

/*Declaring 10-19*/
    const cTeens = [
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

/*Declaring tens (multiples of 10)*/
    const cTens = [
        "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    var words = []; //variable for word conversion

    var hundreds  = Math.floor(num / 100);
    var remainder = num % 100;
    var tens      = Math.floor(remainder / 10);
    var ones      = remainder % 10;

/**Input conversion**/
/*Hundreds*/
    if (hundreds > 0){
        words.push(cOnes[hundreds - 1] + cHundred);
    }

/*Tens and Ones*/
    if (remainder >= 10 && remainder <= 19){
        words.push(cTeens[remainder - 10]);
    }
    else{
        if (tens >= 2){
            words.push(cTens[tens - 2]); //-2 so we can map it correctly e.g. Twenty
        }

        if (ones >= 1){
            words.push(cOnes[ones - 1]); //-1 so we can map it correctly, e.g. Ten
        }
    }

/*Compose Output*/
    return words.join(' ');
}