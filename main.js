let bill = document.querySelector('.input-section__bill-input');
let billNum = parseInt(bill.value);

let people = document.querySelector('.input-section__people-input');
let peopleNum = parseInt(people.value);

let tipResult = document.querySelector('.results__value');
let totalforPerson = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.btns__button');

let alert = document.querySelector('.alert');
let tipValue = 15;
buttons.forEach(e => {
    e.addEventListener('click', e=>{
        /* Cambiar estilos */
        removeActive();
        e.target.classList.add('select')

        tipValue= parseInt(e.target.innerText.slice(0,-1));

        calculateTip();
        
    });
});

function removeActive(){
    buttons.forEach(e => {
        e.classList.remove('select')
    });
}

/* Actualizando el bill */
    bill.addEventListener('input', ()=>{
    billNum = parseFloat(bill.value);
    calculateTip();
});

/* Actualizando custom */
let custom = document.querySelector('.btns__custom');
let customNum = 0;
custom.addEventListener('click', ()=>{
    removeActive();
});
custom.addEventListener('input', ()=>{
    tipValue = parseFloat(custom.value);
    calculateTip();
    
});

/* Actualizando number of people */
people.addEventListener('input', ()=>{
    peopleNum = parseFloat(people.value);
    if(peopleNum == 0 || isNaN(peopleNum)){
        people.style.borderColor = 'red';
        alert.classList.add('error');
    }else{

        people.style.borderColor = 'hsl(172, 67%, 45%)';
        alert.classList.remove('error');
    }
    calculateTip();
});

//reset
let resetBtn = document.querySelector('.result-section__reset');
resetBtn.addEventListener('click', ()=>{
    bill.value = 0;
    billNum = 0;
    custom.value = 'Custom';
    people.value = 0;
    peopleNum = 0
    tipResult.innerText = 0;
    totalforPerson.innerText = 0;
});

function calculateTip(){
    /* calculo tip amount */
    tipResult.innerText = ((billNum * tipValue / 100) / peopleNum).toFixed(2);

    /* calculo total */
    totalforPerson.innerText = (((billNum * tipValue / 100) + billNum) / peopleNum).toFixed(2);
}

