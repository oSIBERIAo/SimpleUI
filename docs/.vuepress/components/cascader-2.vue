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
            <div class="code-content" v-highlight style="height: 0;">
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
        k1: 'b',
        k2: 'bj',
        k3: 'beijing',
        k4: '',
        k5: '市',
        k6: 110000,
        k7: '010',
    },
    {
        id: 2,
        name: '天津',
        parent_id: 0,
        k1: 't',
        k2: 'tj',
        k3: 'tianjin',
        k4: '',
        k5: '市',
        k6: 120000,
        k7: '022',
    },
    {
        id: 36,
        name: '东城',
        parent_id: 1,
        k1: 'd',
        k2: 'dc',
        k3: 'dongcheng',
        k4: '',
        k5: '区',
        k6: 110101,
        k7: '010',
    },
    {
        id: 54,
        name: '和平',
        parent_id: 2,
        k1: 'h',
        k2: 'hp',
        k3: 'heping',
        k4: '',
        k5: '区',
        k6: 120101,
        k7: '022',
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

        const db = [
    {
        id: 1,
        name: '北京',
        parent_id: 0,
        k1: 'b',
        k2: 'bj',
        k3: 'beijing',
        k4: '',
        k5: '市',
        k6: 110000,
        k7: '010',
    },
    {
        id: 2,
        name: '天津',
        parent_id: 0,
        k1: 't',
        k2: 'tj',
        k3: 'tianjin',
        k4: '',
        k5: '市',
        k6: 120000,
        k7: '022',
    },
    {
        id: 36,
        name: '东城',
        parent_id: 1,
        k1: 'd',
        k2: 'dc',
        k3: 'dongcheng',
        k4: '',
        k5: '区',
        k6: 110101,
        k7: '010',
    },
    {
        id: 54,
        name: '和平',
        parent_id: 2,
        k1: 'h',
        k2: 'hp',
        k3: 'heping',
        k4: '',
        k5: '区',
        k6: 120101,
        k7: '022',
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

.component-wrapper-demo {
    //* {
    //    color: #2c3e50;
    //    font-size: 18px;
    //    font-weight: bolder;
    //    text-align: center;
    //}
}
</style>
