document.addEventListener('DOMContentLoaded', function (e) {
    const debug = true;
    const scroller = scrollama();
    const $sections = document.querySelectorAll(".l-prose-blocks__block");
    scroller
        .setup({
            step: $sections,
            offset: 0.9,
            once: true,
            debug: debug,
        })
        .onStepEnter(res => {
            res.element.classList.add("is-visible");
        })

    window.addEventListener('resize', scroller.resize);
});