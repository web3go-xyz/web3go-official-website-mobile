import throttle from "lodash.throttle";
const move = (el, binding) => {
    const offset = el.getBoundingClientRect();
    if (
        offset.top <= window.innerHeight &&
        offset.bottom >= 0
    ) {
        el.style.animation = `slideUp 1s ${binding.value?binding.value:0}s`;
        el.style['animation-fill-mode'] = 'forwards';
    }
}
const windowScrollFunction = (el, binding) => {
    return throttle(() => {
        move(el, binding);
    }, 50);
}
export default {
    created(el) {
        el.style.opacity = 0;
    },
    mounted(el, binding) {
        move(el, binding);
        window.addEventListener("scroll", windowScrollFunction(el, binding));
    },
    unmounted(el, binding) {
        window.removeEventListener("scroll", windowScrollFunction(el, binding));
    },
}