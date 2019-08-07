const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button); 
        const vm = new Constructor({
            propsData:{
                icon:"setting"
            }
        }).$mount();
        const iconElement = vm.$el.querySelector('i');
        // 字符串中期望出现icon-setting
        expect(iconElement.getAttribute('class')).to.include('icon-setting');
        vm.$destroy();
    })

    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
        }).$mount()

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})