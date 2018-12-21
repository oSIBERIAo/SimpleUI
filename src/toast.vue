<template>
  <div class="toast" :class="toast_position">
    <div v-if="useHtml" v-html="this.$slots.default[0]"></div>
    <div v-else v-text="this.$slots.default[0]"></div>
    
    <div class="line" v-if="buttonVisible"></div>
    <span @click="clickClose" v-if="buttonVisible">{{closeButton.text}}</span>
  </div>
</template>
<script>

  export default {
    name: 'Toast',
    data(){
      return {
      }
    },
    props: {
        autoClose: {
            type: [Boolean, Number],
            default: 5,
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                let a = typeof value === "boolean" || typeof value === "number";
                return a
            }
        },
        useHtml: {
            //谨慎使用！
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'top',
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['top', 'center', 'down'].indexOf(value) !== -1 
            }
        },
        buttonVisible: {
            type: Boolean,
            default: false,
        },
        closeButton: {
            type: Object,
            default: ()=> {
                return {
                    text: "关闭",
                    callback: (e)=> {
                        e.close()
                    }

                }
            },
        },
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(()=> {
                this.close()
            }, this.autoClose * 1000)
        }
        this.$nextTick(()=> {
            //获取toast的height赋值给分割线
            if (this.buttonVisible) {
                let a = this.$el.getBoundingClientRect()
                this.$el.querySelector(".line").style.height = a.height + 'px'
                this.$el.querySelector("span").style.height = a.height + 'px'
                this.$el.querySelector("span").style.width = a.height + 'px'
            }
        })
        
        
    },
    computed: {
        toast_position() {
            return  `position-${this.position}`
        }    
    },
    methods: {
        close() {
            this.$el.remove()
            this.$emit('closeToast')
            this.$destroy()
        },
        clickClose(){
            this.closeButton.callback(this)
        },
    }
  }
</script>

<style lang="scss" scoped>
    .toast{
        position: fixed;
        display: flex;
        left: 50%;
        min-height: 48px;
        background: #2C95FF;
        padding: 5px 15px;
        align-items: center;
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.15);
        color: white;
        font-size: 16px;
        box-shadow: 0 0 1px 0 rgba(10,31,68,0.08), 0 3px 4px 0 rgba(10,31,68,0.10);
        & > span{
            display: flex;
            align-items: center;
            position: relative;
            right: 0;
            margin-right: -10px;
            padding: 0 0 0 10px;
            height: 100%;
            flex-shrink: 0;
            // outline: 1px dashed red;
            cursor: pointer;
        }
        .line{
            height: 100%;
            margin-left: 10px;
            border-left: 1px solid #ffffff;
        }

        $animation-duration: 0.35s;
        @keyframes fade-top{
            from {
                top: -10px; opacity: 0; 
                transform: translateX(-50%) translateY(-100%);
            }
            to {
                top: 10px; opacity: 100;
                transform: translateX(-50%) translateY(0%);
            }
        }
        @keyframes fade-in{
            0% {
                top: -10px; opacity: 0; 
                transform: translateX(-50%) translateY(-100%);
            }
            100% {
                top: 10px; opacity: 1; 
                transform: translateX(-50%) translateY(0%);
            }
        }
        @keyframes fade-center{
            0% {
                top: 55vh;  opacity: 0; 
                transform: translateY(-50%) translateX(-50%);
            }
            100% {
                top: 50vh;  opacity: 1; 
                transform: translateY(-50%) translateX(-50%);
            }
        }
        @keyframes fade-down{
            0% {
                bottom: -10px; opacity: 0; 
                transform: translateX(-50%) translateY(100%);
            }
            100% {
                bottom: 10px; opacity: 1;
                transform: translateX(-50%) translateY(0%);
            }
        }
        
        &.position-top{       
            top: 10px;
            animation: fade-in $animation-duration linear;
            transform: translateX(-50%);
        }
        &.position-center{
            top: 50vh;
            animation: fade-center $animation-duration linear;
            transform: translateY(-50%) translateX(-50%);
        }
        &.position-down{
            bottom: 10px; 
            animation: fade-down $animation-duration linear;
            transform: translateX(-50%) translateY(0%);
        }
    }
    
</style>