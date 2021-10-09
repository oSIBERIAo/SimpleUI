<template>
    <div class="demo">
        <h3>动态加载</h3>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <s-cascader
                    :source.sync="source"
                    :selected.sync="selectedCascader"
                    popover-height="200px"
                    :load-data="loadData"
                ></s-cascader>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <div>
                    <s-icon
                        class="down"
                        :name="isShow[1] === false ? 'down' : 'up'"
                    ></s-icon>
                    <!--                    <span></span>-->
                    <span class="lock-code-word">{{
                        isShow[1] === false ? '显示代码' : '隐藏代码'
                    }}</span>
                </div>
            </div>
            <div class="code-content" v-highlight style="height: 0">
                <div class="code-content-height">
                    <pre><code class="html">{{ codeStr }}</code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Cascader from '../../../src/cascader'
import Icon from '../../../src/icon'

import plugin from '../../../src/plugin'
;(function () {
    Vue.component('s-cascader', Cascader)
    Vue.component('s-icon', Icon)
})()

Vue.use(plugin)
import mixin from '../mixin'

const db = [
    {
        id: 1,
        name: '北京',
        parent_id: 0,
    },
    {
        id: 2,
        name: '天津',
        parent_id: 0,
    },
    {
        id: 36,
        name: '东城等城市',
        parent_id: 1,
    },
    {
        id: 54,
        name: '和平等城市',
        parent_id: 2,
    },
]

function ajax(parentId = 0) {
    return new Promise((success, fail) => {
        setTimeout(() => {
            let result = db.filter((item) => item.parent_id === parentId)
            result.map((node) => {
                node.isLeaf =
                    db.filter((item) => item.parent_id === node.id).length <= 0
            })
            success(result)
        }, 1000)
    })
}

export default {
    name: 'Toast',
    mixins: [mixin],
    created() {
        ajax(0).then((result) => {
            this.source = result
        })
    },
    methods: {
        loadData(node, callback) {
            let id = node.id
            ajax(id).then((result) => {
                callback(result)
                // console.log('更新级联', result)
            })
        },
    },
    data() {
        return {
            selectedCascader: [],
            source: [],
            codeStr: `
        <s-cascader
            :source.sync="source"
            :selected.sync="selectedCascader"
            popover-height="200px"
            :load-data="loadData"
        ></s-cascader>

const db = [
    {
        id: 1,
        name: '北京',
        parent_id: 0,
    },
    {
        id: 2,
        name: '天津',
        parent_id: 0,
    },
    {
        id: 36,
        name: '东城等城市',
        parent_id: 1,
    },
    {
        id: 54,
        name: '和平等城市',
        parent_id: 2,
    },
]

function ajax(parentId = 0) {
    return new Promise((success, fail) => {
        setTimeout(() => {
            let result = db.filter((item) => item.parent_id === parentId)
            result.map((node) => {
                node.isLeaf =
                    db.filter((item) => item.parent_id === node.id).length <= 0
            })
            success(result)
        }, 1000)
    })
}

        methods: {
            loadData(node, callback) {
                let id = node.id
                ajax(id).then((result) => {
                    callback(result)
                    // console.log('更新级联', result)
                })
            },
        },
        data() {
            return {
            selectedCascader: [],
            source: [],
        }
        `
                .replace(/^ {8}/gm, '')
                .trim(),
        }
    },
}
</script>
<style lang="scss" scoped>
.component-wrapper {
    overflow: inherit;
}
</style>
