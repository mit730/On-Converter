function swap(){
    let inBase = document.getElementById('in-base');
    let outBase = document.getElementById('out-base');

    swapStart(inBase, outBase);

    //swapping the values
    let temp = inBase.value;
    inBase.value = outBase.value;
    outBase.value = temp;
}

// making swapping possible

function swapStart(inBase, outBase) {
    inBase.style.transform = 'translatex(70%)'
    outBase.style.transform = 'translatex(-70%)'

    setTimeout(() => {
        swapEnd(inBase, outBase);
    }, 100);
}

function swapEnd(inBase, outBase) {
    inBase.style.transform = 'translatex(0%)'
    outBase.style.transform = 'translatex(0%)'
}

function convert(){
    let txtNumber = document.getElementById('txtNumber').value;
    let output = document.getElementById('output');
    let inBase = document.getElementById('in-base').value;
    let outBase = document.getElementById('out-base').value;
    const error = document.getElementById('error');
    txtNumber = txtNumber.toUpperCase();

    if(checkInput(txtNumber, inBase, error)) {
        error.style.display = 'none';
         //convert all input to decimal
        txtNumber = Number.parseInt(txtNumber, inBase)
         //then convert decimal to desired output
         let result = Number(txtNumber).toString(outBase);

         //displaying output
         if( result != 'NaN') {
            output.style.backgroundColor = 'white';
            output.textContent = result.toUpperCase();
         }else{
            output.style.background = 'white';
            output.textContent = ""
         }
    }
}

function checkInput(txtNumber, inBase, error) {
     //check if input number contains valid values

     for( let i = 0; i < txtNumber.length; i++) {
        if(txtNumber.charAt(i) == '.'){
            error.style.display = 'block';
            error.textContent = "Oops!! its an error"
            return false;
        }
     }

     switch (inBase) {
        case '2':
            for(let i = 0; i < txtNumber.length; i++) {
                if(txtNumber.charAt(i) != 0 && txtNumber.charAt(i) != 1) {
                    error.style.display = 'block';
                    error.textContent = `Error : Binary number does not include '${txtNumber.charAt(i)}'. Please enter only binary number or select different base for input number`;
                    return false;
                }
            }
            case '10':
            for(let i = 0; i < txtNumber.length; i++) {
                if(isNaN(txtNumber.charAt(i))) {
                    error.style.display = 'block';
                    error.textContent = `Error : Decimal number does not include '${txtNumber.charAt(i)}'. Please enter only decimal number or select different base for input number`;
                    return false;
                }
            }

            case '8':
                for(let i = 0; i < txtNumber.length; i++) {
                    if(txtNumber.charAt(i) == '8' || txtNumber.charAt(i) == '9' || isNaN(txtNumber.charAt(i))) {
                        error.style.display = 'block';
                        error.textContent = `Error : Octal number does not include '${txtNumber.charAt(i)}'. Please enter only octal number or select different base for input number`;
                        return false;
                    }
                }

            case '16':
                for(let i = 0; i < txtNumber.length; i++) {
                if(!((txtNumber.charCodeAt(i) >= 48 
                && txtNumber.charCodeAt(i) <= 57) || (txtNumber.charCodeAt(i) >= 65 
                && txtNumber.charCodeAt(i) <= 70))) {
                    error.style.display = 'block';
                    error.textContent = `Error : Hexadecimal number does not include '${txtNumber.charAt(i)}'. Please enter only hexadecimal number or select different base for input number`;
                    return false;
                }
            }

            default:
                return true;
        }
    }
