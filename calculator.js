let display = document.getElementById('display');
//variable display is declared//

let buttons = Array.from(document.getElementsByClassName('button'));
//variable button is declared//
buttons.map(buttons => {
    buttons.addEventListener('click', (e) => {
        //it waits for the click to occur//
        switch (e.target.innerText) {
                //value is compared with value of ach case//
            case 'C':
                display.innerText = '';
                // we use blank beacuse we want C to clear all text in the field//
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, 1);
                    //it deleted the space one at a time when <- is used//
                }

                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    //eval function is used here to execute or evaluate the expression//
                    // also the operators used are calculate by eval//

                }catch{
                    display.innerText = 'error';
                }
                //error to be displayed in case of invalid calculation//
               
                break;   
            default:
                display.innerText += e.target.innerText;
        }


    });
});

