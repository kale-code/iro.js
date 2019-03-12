(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{163:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/jaames/iro-dynamic-css",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("iro-dynamic-css")]),a("OutboundLink")],1),t._v(": Allows you to dynamically update CSS rules whenever the selected color changes.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jaames/iro-transparency-plugin",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("iro-transparency-plugin")]),a("OutboundLink")],1),t._v(": Adds optional transparency slider to the color picker and support for color-with-alpha color formats.")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"available-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Available Plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"official-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#official-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Official Plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Plugins are registered with "),s("code",[this._v("iro.use")]),this._v(", although some plugins may automatically register themselves. The library will prevent the same plugin being registered more than once, so it's always wise to explicity register it yourself just in case.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All plugins must be registered before calling "),s("code",[this._v("new iro.ColorPicker")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iro "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@jaames/iro'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iroPluginExample "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'iro-plugin-example'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\niro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iroPluginExample"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorPicker "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("iro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You may also pass some global config options as the second parameter when calling "),s("code",[this._v("iro.use")]),this._v(" to register a plugin:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iro "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@jaames/iro'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iroPluginExample "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'iro-plugin-example'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\niro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iroPluginExample"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// plugin config goes here")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorPicker "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("iro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="plugins.md";s.default=e.exports}}]);