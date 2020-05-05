export default class SearchInput {
    constructor(element) {
        this.element = element;
        const searchform = document.forms.searchform;
        // this.api = new Api();
        // const userInfo = new UserInfo('.profile');
        // // this.userInfo = userInfo;
        // searchform.addEventListener('input', this.handleValidate.bind(this));
        searchform.addEventListener('input', this.inputEditHandler.bind(this));
        // searchform.addEventListener('submit', this.setSubmitButtonState.bind(this));
    }

    checkInputValidity(element) {
        // const errorElement = document.querySelector(`#error-${element.id}`);

        // this.resetError(errorElement);

        if (element.validity.valueMissing) {
            // const errorMessage = "Это обязательное поле";
            // errorElement.textContent = errorMessage;
            // this.activateError(errorElement);
            return false;
            // } if (element.validity.tooShort || element.validity.tooLong) {
            //     const errorMessage = "Должно быть от 2 до 30 символов";
            //     errorElement.textContent = errorMessage;
            //     this.activateError(errorElement);
            //     return false;
            // } if (element.validity.typeMismatch) {
            //     const errorMessage = "Здесь должна быть ссылка";
            //     errorElement.textContent = errorMessage;
            //     this.activateError(errorElement);
            //     return false;
        } {
            return true;
        }
    }

    // activateError(element) {
    //     element.parentNode.classList.add('input-container__invalid');
    // }

    // resetError(element) {
    //     element.parentNode.classList.remove('input-container__invalid');
    //     element.textContent = '';
    // }

    inputEditHandler(inputs) {
        const buttonSearch = document.querySelector('.button__search');

        if (Array.from(inputs).every((input) => this.checkInputValidity(input))) {
            buttonSearch.removeAttribute('disabled');
            buttonSearch.classList.remove('button__disabled');
        } else {
            buttonSearch.setAttribute('disabled', true);
            buttonSearch.classList.add('button__disabled');
        }
    }

    // setSubmitButtonState(inputs) {
    //     event.preventDefault();
    //     const submit = document.querySelector('#submit');

    //     const isValidForm = Array.from(inputs).every((input) => this.checkInputValidity(input));

    //     [inputs].forEach(element => {

    //         if (element.type != submit.type) {
    //             if (!this.checkInputValidity(element)) isValidForm = false;
    //         }
    //     });

    // if (isValidForm) {
    //     this.api.editUserInfo(username.value, aboutUser.value)
    //         .then((result) => {
    //             // обрабатываем результат
    //             this.userInfo.updateUserInfo(result);
    //             document.querySelector('.popup__edit').classList.remove('popup_is-opened')
    //         })
    //         .catch((err) => {
    //             console.log(err); // выведем ошибку в консоль
    //         });
    // document.querySelector('.popup__edit').classList.remove('popup_is-opened');
    // }
    // }

    // handleValidate(event) {
    //     this.checkInputValidity(event.target);
    // }

}
