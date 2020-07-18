/** 延遲 */
function delay(ms) {
    return new Promise(delayed => setTimeout(delayed, ms));
}

/** 幫元素附加樣式 */
function applyStyle(...elementsWithStyle) {
    /** 樣式 */
    const style = elementsWithStyle.pop();

    /** 元素 */
    const elements = elementsWithStyle;

    for (let element of elements) {
        Object.assign(element.style, style);
    }
}

/** 當用戶填寫了表單且按下Enter或按下登入按紐 */
function whenUserFilledOutFormAndPressEnterOrClickLoginButton() {
    return new Promise(callbackWhenUserFilledOutFormAndPressEnterOrClickLoginButton => {
        /** 處理使用者按鍵 */
        const handleUserKeyPress = (event) => {
            /** 使用者是否填寫表單 */
            const isUserFilledOutForm = accountField.value && passwordField.value;

            /** 使用者是否按下Enter */
            const isUserPressEnter = event.keyCode === 13;

            if (isUserFilledOutForm && isUserPressEnter) {
                callbackWhenUserFilledOutFormAndPressEnterOrClickLoginButton();
                removeKeyPressOrClickLoginButtonListeners();
            }
        };

        /** 處理使用者按下登入按紐 */
        const handleUserClickLoginButton = () => {
            /** 使用者是否填寫表單 */
            const isUserFilledOutForm = accountField.value && passwordField.value;

            if (isUserFilledOutForm) {
                callbackWhenUserFilledOutFormAndPressEnterOrClickLoginButton();
                removeKeyPressOrClickLoginButtonListeners();
            }
        };

        /** 移除按下按鍵或點選頁面的監聽器 */
        const removeKeyPressOrClickLoginButtonListeners = () => {
            window.removeEventListener("keypress", handleUserKeyPress);
            loginButton.removeEventListener("click", handleUserClickLoginButton);
        };

        window.addEventListener("keypress", handleUserKeyPress);
        loginButton.addEventListener("click", handleUserClickLoginButton);
    });
}
