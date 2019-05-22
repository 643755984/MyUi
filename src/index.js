// export {default as Button} from "./button/button.vue"
import Button from "./button/button.vue";

// const components = {
//     Button
// }

// const MyUi = {
//     Button
// }


const install = function (Vue){
    Vue.component(Button.name, Button)
}

// const install = function(Vue) {
//     if (install.installed) return;
//     components.map(component => Vue.component(component.name, component));
// };

// export default {
//     install
// };

export default {install}