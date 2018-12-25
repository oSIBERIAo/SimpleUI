<template>
    <div class="tab-item" @click="select" :class="activeClass" :data-name="name">
        <slot></solt>
    </div>
</template>
<script>
    export default {
        name: "Tab-item",
        inject: ['eventBus'],
        data() {
            return {
                active: {
                    type: Boolean,
                    default: false,
                },
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: [String , Number],
                required: true,
            }
        },
        mounted() {
        },
        created() {      
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name)=> {
                    this.active = this.name == name
                })
            }
        },
        methods: {
            select() {
                if (this.disabled) { return }
                this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this) //测试用
            },
        },
        computed: {
            activeClass: function () {
                return {
                  active: this.active,
                  disabled: this.disabled,
                }
            }
        }
    }
</script>
<style lang="scss">
    $color: #2C95FF;
    .tab-item{
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // outline: 1px dashed red;
        &.active {
            // outline: 1px dashed red;
            color: $color;
        }
        &.disabled {
            // outline: 1px dashed red;
            cursor: not-allowed;
            color: grey;
        }
        &.active > svg{
            fill: $color;
        }
    }
</style>