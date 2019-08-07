const expect = chai.expect;
import Vue from 'vue'
import Icon from '../src/icon'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Icon', () => {
    it('存在.', () => {
        expect(Icon).to.be.ok
    })
    it('设置icon样式.', () => {
        const Constructor = Vue.extend(Icon); 
        const vm = new Constructor({
            propsData:{
                name:"setting"
            }
        }).$mount();
        const iconElement = vm.$el;
        // 字符串中期望出现icon-setting
        expect(iconElement.getAttribute('class')).to.include('icon-setting');
        vm.$destroy();
    })
})