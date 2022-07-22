import throttle from "lodash.throttle";
const move = (el, binding) => {
    const offset = el.getBoundingClientRect();
    if (
        offset.top <= window.innerHeight &&
        offset.bottom >= 0
    ) {
        const center = offset.top + (offset.height / 2);
        const half = window.innerHeight / 2;
        const percent = (half - Math.abs(center - half)) / half;
        el.style.transform = `scale(${1 + 0.3*percent})`;
    }
}
const windowScrollFunction = (el, binding) => {
    return throttle(() => {
        move(el, binding);
    }, 50);
}
export default {
    created(el) {
        el.style.transition = 'all 0.2s';
        el.style['transform-origin'] = '0px center';
    },
    mounted(el, binding) {
        move(el, binding);
        window.addEventListener("scroll", windowScrollFunction(el, binding));
    },
    unmounted(el, binding) {
        window.removeEventListener("scroll", windowScrollFunction(el, binding));
    },
}