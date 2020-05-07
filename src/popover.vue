<template>
    <div ref="popover" class="popover">
        <div
            ref="content_wrapper"
            class="content-wrapper"
            v-show="visible"
            :class="positionClass"
        >
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="trigger_wrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'Popover',
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
            },
        },
        trigger: {
            type: String,
            default: 'click',
            validator: function (value) {
                return ['click', 'hover'].indexOf(value) !== -1
            },
        },
    },
    methods: {
        popoverPosition() {
            document.body.appendChild(this.$refs.content_wrapper)
            // let x, y, left, top, width, right, bottom, height  计算popover位置
            let contentWrapper = this.$refs.content_wrapper
            let p = this.$el.getBoundingClientRect()
            let popover = contentWrapper.getBoundingClientRect()
            let style = contentWrapper.style

            let border = 10 //小三角形高度

            let positions = {
                top: {
                    top: p.top + window.scrollY - border + 'px',
                    left: p.left + window.scrollX + 'px',
                },
                right: {
                    top: p.top + p.height / 2 + window.scrollY + 'px',
                    left: p.left + p.width + window.scrollX + border + 'px',
                },
                bottom: {
                    top: p.top + p.height + window.scrollY + border + 'px',
                    left: p.left + window.scrollX + 'px',
                },
                left: {
                    top: p.top + p.height / 2 + window.scrollY + 'px',
                    left: p.left + window.scrollX - border + 'px',
                },
            }
            style.top = positions[this.position].top
            style.left = positions[this.position].left
            // console.log('top left',  contentWrapper, style.top,  style.left);
        },
        onClickDocument(e) {
            let a =
                e &&
                this.$refs.content_wrapper &&
                this.$refs.content_wrapper.contains(e.target)
            let b =
                e &&
                this.$refs.trigger_wrapper &&
                this.$refs.trigger_wrapper.contains(e.target)
            if (a || b) {
                //判断点击区域是否为content_wrapper || trigger_wrapper
                return
            }
            this.close()
        },
        close(e) {
            if (this.trigger === 'click') {
                this.visible = false
                document.removeEventListener(
                    this.closeEvent,
                    this.onClickDocument
                )
            }
            if (this.trigger === 'hover') {
                this.triggerHover()
            }
        },
        triggerHover() {
            //Hover触发函数
            //延迟关闭
            let leaveTimeout = setTimeout(() => {
                this.visible = false
                this.$refs.content_wrapper.removeEventListener('mouseenter', fn)
            }, 250)

            let fn = () => {
                // console.log('进入content_wrapper');
                clearTimeout(leaveTimeout)
                this.$refs.content_wrapper.addEventListener('mouseleave', fn2)
                this.$refs.content_wrapper.removeEventListener('mouseenter', fn)
            }
            let fn2 = () => {
                // console.log('离开content_wrapper');
                this.visible = false
                setTimeout(leaveTimeout, 250)
                this.$refs.content_wrapper.removeEventListener(
                    'mouseleave',
                    fn2
                )
            }

            this.$refs.content_wrapper.addEventListener('mouseenter', fn)
        },
        show() {
            this.visible = true
            this.$nextTick(() => {
                this.popoverPosition()
                if (this.trigger === 'click') {
                    document.addEventListener('click', this.onClickDocument)
                }
                if (this.trigger === 'hover') {
                }
            })
        },
        popoverTrigger(event) {
            if (event && this.$refs.trigger_wrapper.contains(event.target)) {
                if (!this.visible) {
                    this.show()
                } else {
                    this.close(event)
                }
            }
        },
    },
    mounted() {
        if (this.trigger === 'click') {
            this.$refs.trigger_wrapper.addEventListener(
                'click',
                this.popoverTrigger
            )
        } else {
            this.$refs.trigger_wrapper.addEventListener('mouseenter', this.show)
            this.$refs.trigger_wrapper.addEventListener(
                'mouseleave',
                this.close
            )
        }
    },
    computed: {
        positionClass() {
            return `position-${this.position}`
        },
        openEvent() {
            if (this.trigger == 'click') {
                return 'click'
            }
            if (this.trigger == 'hover') {
                return 'mouseenter'
            }
        },
        closeEvent() {
            if (this.trigger == 'click') {
                return 'click'
            }
            if (this.trigger == 'hover') {
                return 'mouseleave'
            }
        },
    },
}
</script>
<style lang="scss" scoped>
$color: #2c95ff;
.popover {
    position: relative;
}
.content-wrapper {
    position: absolute;
    display: inline-block;
    color: #98a1b1;
    border: 1px solid #00000003;
    padding: 20px;
    max-width: 320px;
    border-radius: var(--border-radius);
    background: #ffffff;
    filter: drop-shadow(0px 3px 10px rgba(10, 31, 68, 0.08));

    &.position-left {
        transform: translateX(-100%) translateY(-50%);
        &::before,
        &::after {
            position: absolute;
            content: '';
            border: 10px solid red;
            border-right: 0px;
            right: -10px;
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-left-color: #ffffff;
            border-right-color: transparent;

            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            border-left-color: #00000003;
        }
        &::after {
            right: -9px;
            border-left-color: #ffffff;
        }
    }

    &.position-top {
        transform: translateY(-100%);
        &::before,
        &::after {
            position: absolute;
            content: '';
            border: 10px solid red;
            border-bottom: 0px;
            bottom: -10px;
            border-top-color: #ffffff;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
        }
        &::before {
            border-top-color: #00000003;
        }
        &::after {
            bottom: -9px;
            border-top-color: #ffffff;
        }
    }

    &.position-bottom {
        // transform: translateY(100%);
        &::before,
        &::after {
            position: absolute;
            content: '';
            border: 10px solid red;
            border-top: 0px;
            top: -10px;
            border-top-color: transparent;
            border-bottom-color: #ffffff;
            border-left-color: transparent;
            border-right-color: transparent;
        }
        &::before {
            border-top-color: #00000003;
        }
        &::after {
            top: -9px;
            border-top-color: #ffffff;
        }
    }

    &.position-right {
        transform: translateY(-50%);
        &::before,
        &::after {
            position: absolute;
            content: '';
            border: 10px solid red;
            border-left: 0px;
            left: -10px;
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: #ffffff;

            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            border-right-color: #00000003;
        }
        &::after {
            left: -9px;
            border-right-color: #ffffff;
        }
    }
}
</style>
