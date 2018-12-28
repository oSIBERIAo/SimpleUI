<template>
    <div class="collapse">
        <slot></solt>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: "Collapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            selected: {
                type: Array,
            },
            single: {
                type: Boolean,
                default: false,
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        methods: {
            updated(data) {
                this.eventBus.$emit('update:selected', data)
                this.$emit('update:selected', data)
            },
        },
        mounted() {
            // console.log('this', this);
            this.eventBus.$emit('update:selected', this.selected)

            let selectedClone = JSON.parse(JSON.stringify(this.selected))

            this.eventBus.$on('update:addSelected', (name)=> {       
                if (this.single) {
                    selectedClone = [name]
                } else {
                    selectedClone.push(name)
                }

                this.updated(selectedClone) 
            })
            this.eventBus.$on('update:removeSelected', (name)=> {             
                if (this.single) {
                    selectedClone = [name]
                } else {
                    let index = selectedClone.indexOf(name)
                    selectedClone.splice(index, 1) 
                }
                this.updated(selectedClone)       
            })         
        },
    }
</script>
<style lang="scss" scoped>
    $border-radius: 6px;
    .collapse{
        border: 1px solid #ddd;
        border-radius: $border-radius;
    }
</style>