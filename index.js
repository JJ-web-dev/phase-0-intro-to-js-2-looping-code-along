
const names = ["Guadalupe", "Ollie", "Aki"];


function writeCards(names) {
    let card = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        card.push(message);
         
    }

    return card;
    
};

let number = 10

function countDown(number) { 
    while (number != -1) {
        console.log(number--);
        
    };

};

countDown;
debugger;