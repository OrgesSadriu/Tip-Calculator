    const billInput = document.querySelector('.bill__input');
    const peopleInput = document.querySelector('.people__input');
    const tipPerPerson = document.getElementById('tip__amount'); 
    const totalPerPerson = document.getElementById('total__amount');
    const tips = document.querySelectorAll('.tip__percentage');
    const tipCustom = document.querySelector('.tip-custom')
    const resetBtn = document.querySelector('.reset')

    billInput.addEventListener('click', billInputFun);
    peopleInput.addEventListener ('input', peopleInputFun);
    tips.forEach(function(val){
        val.addEventListener('click', handleClick)
    })
    tipCustom.addEventListener('input', tipInputFun);
    resetBtn.addEventListener('click', reset)

    billInput.value = '0.0';
    peopleInput.value = '1';
    tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
    totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

    let billValue = 0.0;
    let peopleValue = 1;
    let tipValue = 0.15;

    function billInputFun () {
        billValue = parseFloat(billInput.value)
        calculateTip()
    }

    function peopleInputFun () {
        peopleValue = parseFloat(peopleInput.value)
        calculateTip()
    }

    function tipInputFun() {
        tipValue = parseFloat(tipCustom.value / 100)

        tips.forEach(function (val) {
            val.classList.remove('active')
        })
        calculateTip()
    }

    function handleClick(event) {
        tips.forEach(function (val) {
            val.classList.remove('active');
            if(event.target.innerHTML == val.innerHTML) {
                val.classList.add('active');
                tipValue = parseFloat(val.innerHTML) / 100;
            }
        })
        calculateTip()
    }

    function calculateTip(){
        if(peopleValue >= 1){
            let tipAmount = (billValue * tipValue) / peopleValue;
            let total = (billValue + tipAmount) / peopleValue;
            tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
            totalPerPerson.innerHTML = '$' + total.toFixed(2); 
        }
    }

    function reset (){
        billInput.value = '0.0';
        billInputFun()
        peopleInput.value = '1';
        peopleInputFun()
        tipCustom.value = ''
}