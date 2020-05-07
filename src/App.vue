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
    <div style="display: flex; justify-content: center; align-items: center;">
      <s-popover position="left">
        <template slot="content" slot-scope="{ close }">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
          <br />
          <s-button @click="close">关闭</s-button>
        </template>
        <s-button>点击左</s-button>
      </s-popover>
      <s-popover position="top">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
        </template>
        <s-button>点击上</s-button>
      </s-popover>
      <s-popover position="bottom">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
        </template>
        <s-button>点击下</s-button>
      </s-popover>
      <s-popover position="right">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
        </template>
        <s-button>点击右</s-button>
      </s-popover>
    </div>
    <br /><br /><br /><br />
    <div style="display: flex; justify-content: center; align-items: center;">
      <s-popover position="left" trigger="hover">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
        </template>
        <s-button>点击左</s-button>
      </s-popover>
      <s-popover position="top" trigger="hover">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
        </template>
        <s-button>点击上</s-button>
      </s-popover>
      <s-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
          </div>
        </template>
        <s-button>点击下</s-button>
      </s-popover>
      <s-popover position="right" trigger="hover">
        <template slot="content">
          <div>
            Never give up, Never lose hope. Always have faith, It allows you to
            cope. Trying times will pass, As they always do. Just have patience,
            Your dreams will come true. So put on a smile, You'll live through
            your pain. Know it will pass, And strength you will gain.
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
      :source="source"
      :selected.sync="selectedCascader"
      @update:selected="xxx"
      popover-height="200px"
    ></s-cascader>
    <!-- @update:selected="selectedCascader = $event" -->
    <s-cascader :source="source"></s-cascader>
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
import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";

import Row from "./row";
import Col from "./col";

import Layout from "./layout";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import Footer from "./footer";

import Toast from "./toast";

import Tab from "./tab";
import TabBody from "./tab-body";
import TabHead from "./tab-head";
import TabItem from "./tab-item";
import TabPane from "./tab-pane";

import Popover from "./popover";

import Collapse from "./collapse";
import CollapseItem from "./collapse-item";

import Cascader from "./cascader";

import plugin from "./plugin";
// import { install } from './plugin'

Vue.component("s-button", Button);
Vue.component("s-icon", Icon);
Vue.component("s-button-group", ButtonGroup);
Vue.component("s-input", Input);

Vue.component("s-row", Row);
Vue.component("s-col", Col);

Vue.component("s-layout", Layout);
Vue.component("s-header", Header);
Vue.component("s-sider", Sider);
Vue.component("s-content", Content);
Vue.component("s-footer", Footer);

Vue.component("s-toast", Toast);

Vue.component("s-tab", Tab);
Vue.component("s-tab-body", TabBody);
Vue.component("s-tab-head", TabHead);
Vue.component("s-tab-item", TabItem);
Vue.component("s-tab-pane", TabPane);

Vue.component("s-popover", Popover);

Vue.component("s-collapse", Collapse);
Vue.component("s-collapse-item", CollapseItem);

Vue.component("s-cascader", Cascader);

Vue.use(plugin);
import db from "./db";
function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    let result = db.filter((item) => item.parent_id == parentId);
    success(result);
  });
}
console.log(ajax());
export default {
  name: "App",
  data() {
    return {
      loading1: true,
      loading2: false,
      loading3: false,
      current_input: undefined,
      sider_style: "height: 100px; width: 150px;",
      selectedTab: "2",
      selectedCollapse: ["1"],
      selectedCollapse2: ["1"],
      selectedCascader: [],
      haha: [],
      source: [],
    };
  },
  created() {
    ajax(0).then((result) => {
      this.source = result;
    });
  },
  methods: {
    xxx() {
      console.log("selectedCascader", this.selectedCascader);
      ajax(this.selectedCascader[0].id).then((result) => {
        // console.log('xxxxx1', result);
        // console.log('xxxxx', this.source.filter(item => item.id === this.selectedCascader[0].id))
        let lastLevelSelected = this.source.filter(
          (item) => item.id === this.selectedCascader[0].id
        )[0];
        console.log(lastLevelSelected === this.source[0]);
        this.$set(lastLevelSelected, "children", result);
        console.log("lastLevelSelected", lastLevelSelected);
        console.log("lastLevelSelected2", this.source);
      });
    },
    yyy() {
      console.log("yyy");
    },
    showToastTop() {
      this.$toast("<strong>New message on your toast</strong>", {
        buttonVisible: true,
        autoClose: false,
        useHtml: true,
        position: "top",
      });
    },
    showToastCenter() {
      this.$toast("<strong>New message on your toast</strong>", {
        buttonVisible: true,
        autoClose: false,
        useHtml: true,
        position: "center",
      });
    },
    showToastDown() {
      this.$toast("<strong>New message on your toast</strong>", {
        buttonVisible: true,
        autoClose: false,
        useHtml: true,
        position: "down",
      });
    },
  },
};
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
</style>
