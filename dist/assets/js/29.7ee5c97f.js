(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{458:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub - avwo/whistle"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer"}},[s._v("关于whistle "),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("  whistle \n\nw2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"启动-关闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-关闭"}},[s._v("#")]),s._v(" 启动/关闭")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("w2 start "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8899")]),s._v("\n\n\nw2 stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://wproxy.org/whistle/options.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多命令"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"配置浏览器代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置浏览器代理"}},[s._v("#")]),s._v(" 配置浏览器代理")]),s._v(" "),t("p",[s._v("在浏览器输入http://127.0.0.1:8899/ 就可以打开whistle抓包的配置界面")]),s._v(" "),t("p",[s._v("但是如果我们需要代理浏览器的请求，需要安装浏览器插件"),t("a",{attrs:{href:"https://github.com/FelisCatus/SwitchyOmega",target:"_blank",rel:"noopener noreferrer"}},[s._v("SwitchyOmega"),t("OutboundLink")],1),s._v(",安装陈宫后，在插件上点击>选项->情景模式->新建情景模式->情景模式名称whistle->选择代理服务器选项->点击创建。")]),s._v(" "),t("p",[s._v("配置代理协议->选择HTTP->代理服务器->127.0.0.1->代理端口->8899")]),s._v(" "),t("p",[s._v("点击插件按钮，选择whistle，此时就完成了代理的设置，此时在我们的浏览器上访问http://local.whistlejs.com/就可以访问whistle的配置页面了。")]),s._v(" "),t("h3",{attrs:{id:"手机调试本地页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手机调试本地页面"}},[s._v("#")]),s._v(" 手机调试本地页面")]),s._v(" "),t("blockquote",[t("p",[s._v("手机和电脑需要在同一个局域网")])]),s._v(" "),t("p",[s._v("在手机上配置代理代理到电脑的ip,端口为whistle的端口（8899）")]),s._v(" "),t("p",[s._v("在whistle的配置页面新建规则（rules）,起一个名字")]),s._v(" "),t("p",[s._v("规则里面配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("https://test.xxx.com/XXX local.dev.com:8080/XXX \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("前面为测试环境的访问地址，后面是本地的地址、端口、路径")])]),s._v(" "),t("p",[s._v("规则配置完毕，双击此规则可以对此规则进行开启和关闭")]),s._v(" "),t("p",[s._v("测试手机访问测试环境地址，就访问了本地的页面，这样可以在手机端调试一些测试环境的bug.")]),s._v(" "),t("h3",{attrs:{id:"拦截响应、更改数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截响应、更改数据"}},[s._v("#")]),s._v(" 拦截响应、更改数据")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("新建一个values(名字随便test.json)")]),s._v(" "),t("blockquote",[t("p",[s._v("values是一段key:value格式的数据")])])]),s._v(" "),t("li",[t("p",[s._v("编辑values")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bizCode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bizMsg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"num"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"success"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"调用成功"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("新建规则（名字homePage）,编辑规则")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("https://test.test.com/api/xxx resBody://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("test.json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("resBody 响应体协议 指向的是values的test.json  "),t("a",{attrs:{href:"https://wproxy.org/whistle/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多协议"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("此时本地请求接口，数据就会本替换成我们的test.json里面的数据了")])])}),[],!1,null,null,null);t.default=r.exports}}]);