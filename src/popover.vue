<template>
   <div class="popover" @click="trigger">
        <div ref="content_wrapper" class="content-wrapper" v-show="visible" :class="positionClass">
            <slot name="content"></slot>
        </div>
        <slot></slot>
   </div>
</template>
<script>
    export default {
        name: "Popover",
        data() {
            return {
                visible: false,
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator: function (value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
                }
            },
        },
        methods: {
            popoverPosition() {
                // let x, y, left, top, width, right, bottom, height  计算popover位置
                let contentWrapper = document.querySelector(`.position-${this.position}`)
                let p = this.$el.getBoundingClientRect()
                let popover = contentWrapper.getBoundingClientRect()
                let style = contentWrapper.style

                let border = 10 //小三角形高度

                let positions = {
                    top: {
                        top: p.top +  window.scrollY - border + 'px',
                        left: p.left +  window.scrollX  + 'px',
                    },
                    right: {
                        top: p.top +  p.height/2  + window.scrollY + 'px',
                        left: p.left + p.width +  window.scrollX + border + 'px',
                    },
                    bottom: {
                        top: p.top + p.height + window.scrollY  + border + 'px',
                        left: p.left +  window.scrollX + 'px',
                    },
                    left: {
                        top: p.top  +  p.height/2 + window.scrollY + 'px',
                        left: p.left +  window.scrollX - border + 'px',
                    },

                }
                style.top = positions[this.position].top 
                style.left = positions[this.position].left 
            },
            close(e) {
                let a = e && this.$refs.content_wrapper.contains(e.target)
                if (!a) { //判断点击区域是否为content_wrapper
                    this.visible = false
                    document.removeEventListener('click', this.close)
                }
            },
            show() {
                this.$nextTick(()=>{ 
                    this.popoverPosition()
                    document.body.appendChild(this.$refs.content_wrapper)       
                    document.addEventListener('click', this.close) 
                })
            },
            trigger(event){
                if (!this.visible) {
                    this.visible = true
                    this.show()
                } else {
                    this.close()
                }   
            }
        },
        mounted() {
            // console.log('content_wrapper', this.$refs.content_wrapper);
        },
        computed: {
            positionClass() {
                return `position-${this.position}`
            },
        }
    }
</script>
<style lang="scss">
    $color: #2C95FF;
    .popover{
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        display: inline-block;
        // margin-top: -25px;
        color: #98A1B1;
        border: 1px solid #00000003;
        padding: 20px;
        max-width: 320px;
        border-radius: var(--border-radius);
        background: #FFFFFF;
        filter: drop-shadow(0px 3px 10px rgba(10, 31, 68, 0.08));
        &.position-left{
            transform: translateX(-100%) translateY(-50%);
            &::before, &::after{
                position: absolute;
                content: '';
                border: 10px solid red;
                border-right: 0px;
                right: -10px;
                border-top-color: transparent;
                border-bottom-color: transparent;
                border-left-color:  #FFFFFF;
                border-right-color: #transparent;

                top: 50%;
                transform: translateY(-50%);
            }
            &::before{
                border-left-color: #00000003;
            }
            &::after{
                right: -9px;
                border-left-color: #FFFFFF;   
            }
        }

        &.position-top{
            transform: translateY(-100%);
            &::before, &::after{
                position: absolute;
                content: '';
                border: 10px solid red;
                border-bottom: 0px;
                bottom: -10px;
                border-top-color: #FFFFFF;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-right-color: transparent;
            }
            &::before{
                border-top-color: #00000003;
            }
            &::after{
                bottom: -9px;
                border-top-color: #FFFFFF;   
            }
        }

        &.position-bottom{
            // transform: translateY(100%);
            &::before, &::after{
                position: absolute;
                content: '';
                border: 10px solid red;
                border-top: 0px;
                top: -10px;
                border-top-color: transparent;
                border-bottom-color: #FFFFFF;
                border-left-color: transparent;
                border-right-color: transparent;
            }
            &::before{
                border-top-color: #00000003;
            }
            &::after{
                top: -9px;
                border-top-color: #FFFFFF;   
            }
        }
        &.position-right{
            transform: translateY(-50%);
            &::before, &::after{
                position: absolute;
                content: '';
                border: 10px solid red;
                border-left: 0px;
                left: -10px;
                border-top-color: transparent;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-right-color: #FFFFFF;

                top: 50%;
                transform: translateY(-50%);
            }
            &::before{
                border-right-color: #00000003;
            }
            &::after{
                left: -9px;
                border-right-color: #FFFFFF;   
            }
        }
    }
    
    
</style>