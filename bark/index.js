'use strict';

function dog(name) {
    this.name = name
    this.bark = () => {
        return 'woof';
    }
};



const snoopy = new dog('Snoopy');

// dog.prototype.bark = function() {
//     return 'Woof';
// };

const scooby = new dog('Scooby Doo');

document.getElementById('result').innerHTML = `<div>
    <div>${snoopy.name} ${snoopy.bark()}</div>
    <div>${scooby.name} ${scooby.bark()}</div>
</div>`;
