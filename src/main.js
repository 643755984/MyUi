import Vue from 'vue'
import App from './App.vue'
import MyUi from "treeta_ui"
// import MyUi from "./index.js"

Vue.config.productionTip = false

// const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/);

// context.keys().forEach(path => {
//   // console.log(context(path))
//   let res = context(path)
//   Vue.component(res.default.name, res.default)
// })
Vue.use(MyUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
