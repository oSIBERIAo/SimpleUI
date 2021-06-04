<template>
    <div id="app">
        <button @click="showToastTop" style="height: 50px; width: 50px;">
            top
        </button>
        <button @click="showToastCenter" style="height: 50px; width: 50px;">
            center
        </button>
        <button @click="showToastDown" style="height: 50px; width: 50px;">
            down
        </button>
        <br /><br /><br />
        <diV>
            <s-button icon="loading" icon_position="left"
                >加载图标按钮</s-button
            >
            <s-button icon="left" icon_position="left">左图标按钮</s-button>
            <s-button icon="right" icon_position="right">右图标按钮</s-button>
            <s-button icon="up" icon_position="right">上图标按钮</s-button>
            <s-button icon="down" icon_position="right">下图标按钮</s-button>
        </diV>

        <div class="wapper">
            <s-slides :selected.sync="slidesSelected" :interval="3000">
                <s-slides-item name="1">
                    <div class="box">111</div>
                </s-slides-item>
                <s-slides-item name="2">
                    <div class="box">222</div>
                </s-slides-item>
                <s-slides-item name="3">
                    <div class="box">333</div>
                </s-slides-item>
                <s-slides-item name="4">
                    <div class="box">444</div>
                </s-slides-item>
                <s-slides-item name="5">
                    <div class="box">555</div>
                </s-slides-item>
            </s-slides>
        </div>

        <br /><br /><br />
        <div
            style="display: flex; justify-content: center; align-items: center;"
        >
            <s-popover position="left">
                <template slot="content" slot-scope="{ close }">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                    <br />
                    <s-button @click="close">关闭</s-button>
                </template>
                <s-button>点击左</s-button>
            </s-popover>
            <s-popover position="top">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击上</s-button>
            </s-popover>
            <s-popover position="bottom">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击下</s-button>
            </s-popover>
            <s-popover position="right">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击右</s-button>
            </s-popover>
        </div>
        <br /><br /><br /><br />
        <div
            style="display: flex; justify-content: center; align-items: center;"
        >
            <s-popover position="left" trigger="hover">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击左</s-button>
            </s-popover>
            <s-popover position="top" trigger="hover">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击上</s-button>
            </s-popover>
            <s-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击下</s-button>
            </s-popover>
            <s-popover position="right" trigger="hover">
                <template slot="content">
                    <div>
                        Never give up, Never lose hope. Always have faith, It
                        allows you to cope. Trying times will pass, As they
                        always do. Just have patience, Your dreams will come
                        true. So put on a smile, You'll live through your pain.
                        Know it will pass, And strength you will gain.
                    </div>
                </template>
                <s-button>点击右</s-button>
            </s-popover>
        </div>
        <br /><br /><br />
        <br /><br />
        <br /><br /><br />
        <!-- {{ this.selectedCascader }} -->
        <br /><br /><br />
        <s-cascader
            :source.sync="source"
            :selected.sync="selectedCascader"
            popover-height="200px"
            :load-data="loadData"
        ></s-cascader>
        <br /><br /><br />
        <s-cascader
            :source.sync="sourceCascader2"
            :selected.sync="selectedCascader2"
            popover-height="200px"
        ></s-cascader>
        <br /><br /><br />
        <h6>single:{{ selectedCollapse }}</h6>
        <s-collapse
            style="margin: 0 20px;"
            :selected.sync="selectedCollapse"
            single
        >
            <s-collapse-item title="标题1" name="1">内容</s-collapse-item>
            <s-collapse-item title="标题2" name="2">内容</s-collapse-item>
            <s-collapse-item title="标题3" name="3">内容</s-collapse-item>
        </s-collapse>
        <br /><br /><br />
        <h6>multiple:{{ selectedCollapse2 }}</h6>
        <s-collapse style="margin: 0 20px;" :selected.sync="selectedCollapse2">
            <s-collapse-item title="标题1" name="1">内容</s-collapse-item>
            <s-collapse-item title="标题2" name="2">内容</s-collapse-item>
            <s-collapse-item title="标题3" name="3">内容</s-collapse-item>
        </s-collapse>
        <!-- <s-toast></s-toast> -->
    </div>
</template>

<script>
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

import Row from './row'
import Col from './col'

import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import Toast from './toast'

import Tab from './tab'
import TabBody from './tab-body'
import TabHead from './tab-head'
import TabItem from './tab-item'
import TabPane from './tab-pane'

import Popover from './popover'

import Collapse from './collapse'
import CollapseItem from './collapse-item'

import Cascader from './cascader'

import Slides from './slides'
import SlidesItem from './slides-item'

import plugin from './plugin'
// import { install } from './plugin'
;(function () {
    Vue.component('s-button', Button)
    Vue.component('s-icon', Icon)
    Vue.component('s-button-group', ButtonGroup)
    Vue.component('s-input', Input)

    Vue.component('s-row', Row)
    Vue.component('s-col', Col)

    Vue.component('s-layout', Layout)
    Vue.component('s-header', Header)
    Vue.component('s-sider', Sider)
    Vue.component('s-content', Content)
    Vue.component('s-footer', Footer)

    Vue.component('s-toast', Toast)

    Vue.component('s-tab', Tab)
    Vue.component('s-tab-body', TabBody)
    Vue.component('s-tab-head', TabHead)
    Vue.component('s-tab-item', TabItem)
    Vue.component('s-tab-pane', TabPane)

    Vue.component('s-popover', Popover)

    Vue.component('s-collapse', Collapse)
    Vue.component('s-collapse-item', CollapseItem)

    Vue.component('s-cascader', Cascader)

    Vue.component('s-slides', Slides)
    Vue.component('s-slides-item', SlidesItem)
})()

Vue.use(plugin)

import db from './db'
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
console.log(ajax())
export default {
    name: 'App',
    data() {
        return {
            loading1: true,
            loading2: false,
            loading3: false,
            current_input: undefined,
            sider_style: 'height: 100px; width: 150px;',
            selectedTab: '2',
            selectedCollapse: ['1'],
            selectedCollapse2: ['1'],
            haha: [],
            source: [],
            selectedCascader: [],
            sourceCascader2: [],
            selectedCascader2: [],
            slidesSelected: '',
        }
    },
    created() {
        ajax(0).then((result) => {
            this.source = result
            this.sourceCascader2 = [
                {
                    name: '一一',
                    children: [
                        {
                            name: '一二',
                            children: [
                                {
                                    name: '一三',
                                },
                                {
                                    name: '一三',
                                },
                                {
                                    name: '一三',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '二一',
                    children: [
                        {
                            name: '二二',
                            children: [
                                {
                                    name: '二三',
                                },
                            ],
                        },
                        {
                            name: '二二',
                            children: [
                                {
                                    name: '二三',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '三一',
                    children: [
                        {
                            name: '三二',
                            children: [
                                {
                                    name: '三三',
                                },
                            ],
                        },
                    ],
                },
            ]
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
        showToastTop() {
            this.$toast('<strong>New message on your toast</strong>', {
                buttonVisible: true,
                autoClose: false,
                useHtml: true,
                position: 'top',
            })
        },
        showToastCenter() {
            this.$toast('<strong>New message on your toast</strong>', {
                buttonVisible: true,
                autoClose: false,
                useHtml: true,
                position: 'center',
            })
        },
        showToastDown() {
            this.$toast('<strong>New message on your toast</strong>', {
                buttonVisible: true,
                autoClose: false,
                useHtml: true,
                position: 'down',
            })
        },
    },
    mounted() {
        // setTimeout(() => {
        //     this.slidesSelected = '2'
        // }, 3000)
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

* {
    outline: 1px dashed red;
    box-sizing: border-box;
}

.wapper {
    /*width: 200px;*/
    height: 150px;
}

.box {
    /*width: 200px;*/
    height: 150px;
    background-color: #dddddd;
}
</style>
