/** 初始動畫 */
async function initializeAnimation() {
    await delay(0);

    applyStyle(outerCircleCover, innerCircleCover, {
        r: "2560",
        transitionProperty: "r",
        transitionDuration: "3s",
    });

    await delay(500);

    applyStyle(progressCircles, {
        transitionProperty: "all",
        transitionDuration: "1s",
        transform: "scale(1)",
    });

    applyStyle(curves, {
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "scale(1)",
    });

    applyStyle(bottomLeftLine, bottomRightLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "translateX(0px)",
    });

    await delay(500);

    applyStyle(leftBracketText, rightBracketText, {
        transitionProperty: "all",
        transitionDuration: "1s",
        opacity: "1",
        transform: "translateX(0px)",
    });

    applyStyle(outerProgressCircle, {
        animation: "outer-progress-circle 2s linear backwards",
    });

    applyStyle(innerProgressCircle, {
        animation: "inner-progress-circle 2s linear backwards",
    });

    applyStyle(bottomUpperLine, bottomLowerLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        strokeDashoffset: "0px",
        transform: "translateX(0px)",
    });

    applyStyle(verticalRollingDots, {
        transitionProperty: "all",
        transitionDuration: "1s",
        opacity: "1",
    });

    applyStyle(systemAccessToImSystemTextBackground, systemAccessToImSystemText, systemVersionStraghtLinkModeText, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "translateY(0px)",
    });

    applyStyle(systemMiddleLine, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        strokeDashoffset: "0px",
        transform: "translateX(0px)",
    });

    await delay(500);

    applyStyle(initializingText, {
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        opacity: "1",
    });

    await delay(1000);

    applyStyle(initializingText, {
        opacity: "0",
    });

    applyStyle(finishedText, {
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        opacity: "1",
    });

    await delay(500);

    applyStyle(progressCircles, {
        zIndex: "",
    });
}
