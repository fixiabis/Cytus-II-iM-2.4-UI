document.addEventListener("readystatechange", async () => {
    if (document.readyState === "complete") {
        initialize();
        await initializeAnimation();
        await loginAnimation();
        await whenUserFilledOutFormAndPressEnterOrClickLoginButton();
        await verifyAnimation();
    }
});
