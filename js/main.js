/*CUSTOM SELECT*/
let select = function () {
    let selectHeader = document.querySelectorAll('.select-custom__header');
    let selectItem = document.querySelectorAll('.select-custom__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select-custom'),
            currentText = select.querySelector('.select-custom__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();

/*NUM SECTION*/
let btns = document.querySelectorAll('.counter-btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let direction = this.dataset.direction;
        let inp = this.closest('div').parentElement.querySelector('.num');
        let currentValue = +inp.value;
        let newValue;

        if (direction === 'btn-top') {
            newValue = currentValue + 1;
        } else {

        }

        inp.value = newValue;
    })
})



