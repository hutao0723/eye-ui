import Vue from "vue";
import Icon from "./icon.vue";
import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";

new Vue({
    el:'#app',
    components:{
        "eye-button":Button,  
        "eye-icon":Icon, 
        "eye-button-group":ButtonGroup
    },
    data(){
        return{
            loading:true
        }
    },
})

import chai from "chai";
import spies from "chai-spies";
chai.use(spies);
const expect = chai.expect;

// 断言ICON
{
    const Constructor = Vue.extend(Button); 
    const vm = new Constructor({
        propsData:{
            icon:"setting"
        }
    }).$mount();
    const iconElement = vm.$el.querySelector('i');
    // 字符串中期望出现icon-setting
    console.log(typeof iconElement);
    expect(iconElement.getAttribute('class')).to.include('icon-setting');
    vm.$el.remove();
    vm.$destroy();
}
// 断言icon位置
{
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
    vm.$el.remove();
    vm.$destroy();
}
// 断言loading
{
    const Constructor = Vue.extend(Button); 
    const vm = new Constructor({
        propsData:{
            loading:true
        }
    }).$mount();
    const iconElement = vm.$el.querySelector('i');
    expect(iconElement.getAttribute('class')).to.include('icon-loading'); 
    vm.$el.remove();
    vm.$destroy();
}
// 点击事件
{
    const Constructor = Vue.extend(Button); 
    const vm = new Constructor({
        propsData:{
            icon:"setting"
        }
    }).$mount();
    // 希望执行的是后面的函数
    const spy = chai.spy(()=>{});

    vm.$on("click",spy);
    vm.$el.click();
    expect(spy).to.have.been.called();
    vm.$el.remove();
    vm.$destroy();
}