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
let btnsUp = document.querySelectorAll('.counter-btn-up');
let btnsDown = document.querySelectorAll('.counter-btn-down');

btnsUp.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let int = this.closest('.form__num-box').querySelector('.num');
        int.value++;
    })

})

btnsDown.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let int = this.closest('.form__num-box').querySelector('.num');

        if (int.value > 0) {
            int.value--;
        }
    })
})


