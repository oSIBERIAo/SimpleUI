(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{626:function(n,e,t){},694:function(n,e,t){"use strict";t(626)},738:function(n,e,t){"use strict";t.r(e);t(10),t(36),t(81),t(564),t(52),t(77);var a=t(0),s=t(664),i=t(563),c=t(574),d=t(565);a.a.component("s-cascader",s.a),a.a.component("s-icon",i.a),a.a.use(c.a);var o=[{id:1,name:"北京",parent_id:0},{id:2,name:"天津",parent_id:0},{id:36,name:"东城等城市",parent_id:1},{id:54,name:"和平等城市",parent_id:2}];function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(e,t){setTimeout((function(){var t=o.filter((function(e){return e.parent_id===n}));t.map((function(n){n.isLeaf=o.filter((function(e){return e.parent_id===n.id})).length<=0})),e(t)}),1e3)}))}var l={name:"Toast",mixins:[d.a],created:function(){var n=this;r(0).then((function(e){n.source=e}))},methods:{loadData:function(n,e){r(n.id).then((function(n){e(n)}))}},data:function(){return{selectedCascader:[],source:[],codeStr:"\n        <s-cascader\n            :source.sync=\"source\"\n            :selected.sync=\"selectedCascader\"\n            popover-height=\"200px\"\n            :load-data=\"loadData\"\n        ></s-cascader>\n\nconst db = [\n    {\n        id: 1,\n        name: '北京',\n        parent_id: 0,\n    },\n    {\n        id: 2,\n        name: '天津',\n        parent_id: 0,\n    },\n    {\n        id: 36,\n        name: '东城等城市',\n        parent_id: 1,\n    },\n    {\n        id: 54,\n        name: '和平等城市',\n        parent_id: 2,\n    },\n]\n\nfunction ajax(parentId = 0) {\n    return new Promise((success, fail) => {\n        setTimeout(() => {\n            let result = db.filter((item) => item.parent_id === parentId)\n            result.map((node) => {\n                node.isLeaf =\n                    db.filter((item) => item.parent_id === node.id).length <= 0\n            })\n            success(result)\n        }, 1000)\n    })\n}\n\n        methods: {\n            loadData(node, callback) {\n                let id = node.id\n                ajax(id).then((result) => {\n                    callback(result)\n                    // console.log('更新级联', result)\n                })\n            },\n        },\n        data() {\n            return {\n            selectedCascader: [],\n            source: [],\n        }\n        ".replace(/^ {8}/gm,"").trim()}}},u=(t(694),t(51)),p=Object(u.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo"},[t("h3",[n._v("动态加载")]),n._v(" "),t("div",{staticClass:"component-wrapper"},[t("div",{staticClass:"component-wrapper-demo"},[t("s-cascader",{attrs:{source:n.source,selected:n.selectedCascader,"popover-height":"200px","load-data":n.loadData},on:{"update:source":function(e){n.source=e},"update:selected":function(e){n.selectedCascader=e}}})],1),n._v(" "),t("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return n.showCode(1)}}},[t("div",[t("s-icon",{staticClass:"down",attrs:{name:!1===n.isShow[1]?"down":"up"}}),n._v(" "),t("span",{staticClass:"lock-code-word"},[n._v(n._s(!1===n.isShow[1]?"显示代码":"隐藏代码"))])],1)]),n._v(" "),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[t("div",{staticClass:"code-content-height"},[t("pre",[t("code",{staticClass:"html"},[n._v(n._s(n.codeStr))]),n._v("\n                ")])])])])])}),[],!1,null,"c26aae3e",null);e.default=p.exports}}]);