import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
    extends: DefaultTheme,          // 继承默认主题，不改的全部保留
    enhanceApp({ app }) {
      // 将来注册全局组件写这里
    }
}