(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{643:function(t,o,n){},711:function(t,o,n){"use strict";n(643)},750:function(t,o,n){"use strict";n.r(o);n(564),n(52),n(77);var e=n(0),s=n(667),i=n(575),a=n(563),r=n(571),p=n(574),l=n(565);e.a.component("s-popover",s.a),e.a.component("s-button",i.a),e.a.component("s-icon",a.a),e.a.component("s-toast",r.a),e.a.use(p.a);var v={name:"Toast",mixins:[l.a],data:function(){return{content:"Never give up, Never lose hope. Always have\n                      faith, It allows you to cope. Trying times will\n                      pass, As they always do. Just have patience,\n                      Your dreams will come true. So put on a smile,\n                      You'll live through your pain. Know it will\n                      pass, And strength you will gain.",codeStr:'\n        <s-popover position="left" z-index="999" trigger="hover">\n            <template slot="content" slot-scope="{ close }">\n                <div>{{ content }}</div>\n                <br />\n                <s-button @click="close">关闭</s-button>\n            </template>\n        <s-button>点击左</s-button>\n        </s-popover>\n        <s-popover position="top" trigger="hover">\n            <template slot="content">\n                <div>{{ content }}</div>\n            </template>\n        <s-button>点击上</s-button>\n        </s-popover>\n        <s-popover position="bottom" trigger="hover">\n            <template slot="content">\n                <div>{{ content }}</div>\n            </template>\n            <s-button>点击下</s-button>\n        </s-popover>\n        <s-popover position="right" trigger="hover">\n            <template slot="content">\n                <div>{{ content }}</div>\n            </template>\n            <s-button>点击右</s-button>\n        </s-popover>\n\n        data() {\n            return {\n                content: `Never give up, Never lose hope. Always have\n                          faith, It allows you to cope. Trying times will\n                          pass, As they always do. Just have patience,\n                          Your dreams will come true. So put on a smile,\n                          You\'ll live through your pain. Know it will\n                          pass, And strength you will gain.`,\n            }\n        }\n        '.replace(/^ {8}/gm,"").trim()}}},c=(n(711),n(51)),u=Object(c.a)(v,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"demo"},[n("h3",[t._v("触发方式为 hover")]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("div",{staticClass:"popover-wrapper"},[n("s-popover",{attrs:{position:"left","z-index":"999",trigger:"hover"},scopedSlots:t._u([{key:"content",fn:function(o){var e=o.close;return[n("div",[t._v("\n                            "+t._s(t.content)+"\n                        ")]),t._v(" "),n("br"),t._v(" "),n("s-button",{on:{click:e}},[t._v("关闭")])]}}])},[t._v(" "),n("s-button",[t._v("点击左")])],1),t._v(" "),n("s-popover",{attrs:{position:"top",trigger:"hover"}},[n("template",{slot:"content"},[n("div",[t._v("\n                            "+t._s(t.content)+"\n                        ")])]),t._v(" "),n("s-button",[t._v("点击上")])],2),t._v(" "),n("s-popover",{attrs:{position:"bottom",trigger:"hover"}},[n("template",{slot:"content"},[n("div",[t._v("\n                            "+t._s(t.content)+"\n                        ")])]),t._v(" "),n("s-button",[t._v("点击下")])],2),t._v(" "),n("s-popover",{attrs:{position:"right",trigger:"hover"}},[n("template",{slot:"content"},[n("div",[t._v("\n                            "+t._s(t.content)+"\n                        ")])]),t._v(" "),n("s-button",[t._v("点击右")])],2)],1)]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(o){return t.showCode(0)}}},[n("div",[n("s-icon",{staticClass:"down",attrs:{name:!1===t.isShow[0]?"down":"up"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.codeStr))])])])])])])}),[],!1,null,"40695cfb",null);o.default=u.exports}}]);