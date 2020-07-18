/** 初始化 */
function initialize() {
    applyStyle(curves, {
        opacity: "0",
        transform: "scale(0.5)",
        transformOrigin: "633px 364px",
    });

    applyStyle(bottomUpperLine, {
        strokeDashoffset: "100.05px",
        strokeDasharray: "100.05px",
        transform: "translateX(50.025px)",
    });

    applyStyle(bottomLowerLine, {
        strokeDashoffset: "300.15px",
        strokeDasharray: "300.15px",
        transform: "translateX(150.075px)",
    });

    applyStyle(bottomLeftLine, {
        opacity: "0",
        transform: "translateX(-100.05px)",
    });

    applyStyle(bottomRightLine, {
        opacity: "0",
        transform: "translateX(100.05px)",
    });

    applyStyle(verticalRollingDots, {
        opacity: "0",
    });

    applyStyle(progressCircles, {
        transformOrigin: "633px 364px",
        transform: "scale(0)",
    });

    applyStyle(outerProgressCircle, innerProgressCircle, {
        transformOrigin: "633px 364px",
        strokeDashoffset: "0px",
        strokeDasharray: "500px",
    });

    applyStyle(systemAccessToImSystemTextBackground, systemAccessToImSystemText, systemVersionStraghtLinkModeText, {
        opacity: "0",
        transform: "translateY(8px)",
    });

    applyStyle(systemMiddleLine, {
        strokeDashoffset: "155px",
        strokeDasharray: "155px",
        transform: "translateX(77.5px)",
    });

    applyStyle(leftBracketText, {
        opacity: "0",
        transform: "translateX(95px)",
    });

    applyStyle(rightBracketText, {
        opacity: "0",
        transform: "translateX(-95px)",
    });

    applyStyle(initializingText, finishedText, {
        opacity: "0",
    });

    applyStyle(loginFormTopCover, loginFormLeftCover, loginFormRightCover, {
        display: "none",
    });

    applyStyle(loginFormTopLine, loginFormBottomLine, {
        transform: "translateX(658px) scaleX(0)",
    });

    applyStyle(loginFormSystemAccessToImSystemTextBackground, loginFormSystemAccessToImSystemText, loginFormSystemVersionStraghtLinkModeText, {
        opacity: "0",
        transform: "translateY(8px)",
    });

    applyStyle(loginFormSystemMiddleLine, {
        strokeDashoffset: "155px",
        strokeDasharray: "155px",
        transform: "translateX(77.5px)",
    });

    applyStyle(loginFormHorizonRollingDots, {
        visibility: "hidden",
        transform: "translateX(485px)",
    });

    applyStyle(accountFieldContainer, passwordFieldContainer, loginFormAccountFieldBackground, loginFormPasswordFieldBackground, {
        opacity: "0",
        transform: "translateX(-513px)",
        transformOrigin: "center",
    });

    applyStyle(loginButton, {
        opacity: "0",
        transform: "translateX(129px)",
        transformOrigin: "center",
    });

    accountField.addEventListener("input", () => {
        accountField.value = accountField.value.replace(/[^\u0000-\u00ff]/g, "");
        accountFieldAsterisk.value = "*".repeat(accountField.value.length);
    });

    passwordField.addEventListener("input", () => {
        passwordField.value = passwordField.value.replace(/[^\u0000-\u00ff]/g, "");
        passwordFieldAsterisk.value = "*".repeat(passwordField.value.length);
    });

    applyStyle(verifyLayout, {
        transformOrigin: "center",
        transform: "scale(4)",
        opacity: "0",
    });

    applyStyle(layoutContainer, {
        display: "",
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "1s",
    });

    const layoutContainerWidth = 1280;
    const layoutContainerHeight = 720;
    const initialWindowWidth = window.innerWidth;
    const initialWindowHeight = window.innerHeight;

    window.addEventListener("resize", () => {
        const windowWidth = Math.max(initialWindowWidth, window.innerWidth);
        const windowHeight = Math.max(initialWindowHeight, window.innerHeight);
        const widthRatio = windowWidth / layoutContainerWidth;
        const heightRatio = windowHeight / layoutContainerHeight;
        const scale = Math.min(widthRatio, heightRatio);
        // const rotatedWidthRatio = windowHeight / layoutContainerWidth;
        // const rotatedHeightRatio = windowWidth / layoutContainerHeight;
        // const rotatedScale = Math.min(rotatedWidthRatio, rotatedHeightRatio);

        // if (rotatedScale > scale) {
        //     layoutContainer.style.transform = `scale(${rotatedScale}) rotate(90deg)`;
        // }
        // else {
            layoutContainer.style.transform = `scale(${scale})`;
        // }
    });

    window.dispatchEvent(new Event("resize"));
}
