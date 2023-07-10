import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(store)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app');
  //这里的app是在public/index.html里的div的id,和之前主应用了配置的无关
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


//暴露生命周期的三个函数
export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
}

export const mount = async (props) => {
  console.log('子应用加载');

  render(props);
};
