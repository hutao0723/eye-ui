<template>
    <div class="button-group">
        <slot />
    </div>
</template>

<script>
export default {
    name:'button-group',  
    mounted(){
        let nodeList = this.$el.children
        if(nodeList.length != 0){
            for(let item of nodeList){
                if(item.nodeName != "BUTTON"){
                    console.warn(`button-group组件内部应为button元素,不应该是${item.nodeName}`)
                }
            }
        }else{
            console.warn("button-group组件内部组件不能为空")
        }
    }
}
</script>

<style lang="less" >
    .button-group{
        display: inline-flex;
        vertical-align: middle;
        .eye-button{
            margin-left: -1px;
            border-radius: 0;
            &:first-child{
                margin-left: 0;
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>

