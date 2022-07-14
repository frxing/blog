(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{613:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("日常我们开发npm包的时候，需要怎么调试呢，此时我们的主角npm link就派上了用场。帮助我们将我们的npm包软链到全局。")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你的项目使用的lerna进行的管理，则不需要使用我们的npm link，因为lerna已经帮我们创建了软链，如果想学习lerna请看我的另一篇文章"),n("a",{attrs:{href:"https://btoa.gitee.io/blog/blogs/category/20200515.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("lernaJs"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("假设我们有两个目录")]),s._v(" "),n("p",[s._v("abc 这个是我们将要发布的npm包的项目")]),s._v(" "),n("p",[s._v("test-abc 这个是我们测试我们的npm包的项目")]),s._v(" "),n("h3",{attrs:{id:"创建软链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建软链"}},[s._v("#")]),s._v(" 创建软链")]),s._v(" "),n("ol",[n("li",[s._v("首先进入我们的npm包的项目里面执行npm link， 这样就将我们的包链接到全局了")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" abc\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("进入我们的测试项目，使用npm link "),n("packName",[s._v(", 这样在本地项目使用这个包的时候就会去全局拿。")])],1),s._v(" "),n("blockquote",[n("p",[s._v("packName 就是我们npm包里面package.json里面的name值")])])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" test-abc\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("packName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这样在我们的测试项目里面就可以直接引入包，然后进行使用")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Abc "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Abc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"删除软链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除软链"}},[s._v("#")]),s._v(" 删除软链")]),s._v(" "),n("p",[s._v("首先进入我们的测试目录 执行 npm unlink "),n("packName")],1),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" test-abc\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unlink "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("packName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("然后进入我们的npm包目录 执行 npm unlink 来删除我们的全局软链")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" abc\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unlink\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);