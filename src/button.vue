<template>
    <button class="eye-button" @click="$emit('click')">
        <eye-icon :name="icon" :class="['icon',`${iconPosition}`]" v-if="icon && !loading"></eye-icon>
        <eye-icon name="loading" :class="['loading',`${iconPosition}`]" v-if="loading"></eye-icon>
        <span class="conetnt">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    export default {
        name:"eyeButton",  
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator:value=>value =="left" || value == "right"
            },
            loading:{
                type:Boolean,
                default:false,    
            }
        },
    }
</script>

<style lang="less" scoped>
    @keyframes rotate {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
    .eye-button{
        vertical-align: middle;
        font-size: var(--font-size);
        color:var(--color);
        height: var(--button-height);
        border-radius: var(--border-radius);
        padding: 0 1em;
        border:1px solid var(--border-color);
        background: var(--button-bg);
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg)
        }
        .icon{
            order: 1;
            margin-right: 0.3em;
            &.right{
                order: 3;
                margin-right: 0;
                margin-left: 0.3em;
            }
        }
        .loading{
            animation: rotate 1s infinite linear;
            order: 1;
            margin-right: 0.3em;
            &.right{
                order: 3;
                margin-right: 0;
                margin-left: 0.3em;
            }
        }
        .conetnt{
            order: 2;
        }
    }
</style>


