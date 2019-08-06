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
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button); 
        const vm = new Constructor({
            propsData:{
                loading:true
            }
        }).$mount();
        const iconElement = vm.$el.querySelector('i');
        expect(iconElement.getAttribute('class')).to.include('icon-loading'); 
        vm.$destroy()
    })
    it('icon 默认的 order 是 1', () => {
        let div = document.createElement("div");
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button); 
        const vm = new Constructor({
            propsData:{
                icon:"setting",
                iconPosition:'right'
            }
        }).$mount(div);
        const iconElement = vm.$el.querySelector('i');
        let { order } = window.getComputedStyle(iconElement);
        expect(order).to.eq('3');
    })
    // it('设置 iconPosition 可以改变 order', () => {
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         icon: 'settings',
    //         iconPosition: 'right'
    //     }
    //     }).$mount(div)
    //     const icon = vm.$el.querySelector('svg')
    //     expect(getComputedStyle(icon).order).to.eq('2')
    //     vm.$el.remove()
    //     vm.$destroy()
    // })
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