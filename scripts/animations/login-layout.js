async function loginAnimation() {
    await delay(500);

    applyStyle(initializeLayout, {
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        opacity: "0"
    });

    applyStyle(loginForm, {
        borderRadius: "10px",
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: "2px",
    });

    applyStyle(loginForm, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        width: "640px",
        height: "244px",
        top: "calc(50% - 122px)",
        left: "calc(50% - 320px)",
    });

    applyStyle(loginButton, {
        opacity: "1",
        transform: "translateX(0px)",
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "0.5s",
    });

    applyStyle(loginFormHorizonRollingDots, {
        transitionProperty: "all",
        transitionDuration: "1s",
        visibility: "visible",
        transform: "translateX(0px)",
    });
    
    applyStyle(loginFormTopLine, loginFormBottomLine, {
        transitionProperty: "all",
        transitionDuration: "1s",
        transform: "translateX(0px) scaleX(1)",
    });

    applyStyle(loginFormSystemAccessToImSystemTextBackground, loginFormSystemAccessToImSystemText, loginFormSystemVersionStraghtLinkModeText, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "translateY(0px)",
    });

    applyStyle(loginFormSystemMiddleLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        strokeDashoffset: "0px",
        transform: "translateX(0px)",
    });

    applyStyle(accountFieldContainer, loginFormAccountFieldBackground, {
        opacity: "1",
        transform: "translateX(0px)",
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "0.5s",
    });

    accountField.focus();

    await delay(250);
    
    applyStyle(passwordFieldContainer, loginFormPasswordFieldBackground, {
        opacity: "1",
        transform: "translateX(0px)",
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "0.5s",
    });

    applyStyle(loginForm, {
        borderColor: "",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    });

    applyStyle(loginFormTopCover, loginFormLeftCover, loginFormRightCover, {
        display: "",
    });

    await delay(250);
    
    applyStyle(loginButton, {
        transform: "",
    });
}
