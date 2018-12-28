<template>
    <div class="collapse-item">
        <div class="title" @click="onClick">
            {{title}}
        </div>
        <div class="content" v-show="visible">
            <slot></solt>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Collapse-Item",
        inject: ["eventBus"],
        data() {
            return {
                visible: {
                    type: Boolean,
                    default: false,
                }
            }
        },
        props: {
            title: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        },
        methods: {
            onClick() {
                if (this.visible) {
                    this.eventBus.$emit('update:removeSelected', this.name)
                } else {
                    this.eventBus.$emit('update:addSelected', this.name)
                }
            },
            show() {
                this.visible = true
            },
            close() {
                this.visible = false
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (names)=> {
                let a = names.indexOf(this.name) !== -1
                if (a) {
                    this.visible = true
                } else {
                    this.visible = false
                }
            })
        },
    }
</script>
<style lang="scss" scoped>
    $border-radius: 4px;
    .collapse-item{


        > .title{
            border: 1px solid #ddd;
            margin: 0 -1px;
            background: #eee;
            min-height: 32px;
            padding: 0 16px;
            display: flex;
            align-items: center;

        }
        > .content{
            padding: 8px 16px;

        }
        &:first-child{
            > .title{
                margin-top: -1px;
                border-radius: $border-radius  $border-radius 0 0;
            }
        }
        &:last-child{
            > .content{
                border-radius: 0 0 $border-radius $border-radius;
            }
        }
        
    }
</style>