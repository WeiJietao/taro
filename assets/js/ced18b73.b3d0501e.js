"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56606],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28308:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),i=["components"],p={title:"SelectorQuery",sidebar_label:"SelectorQuery"},o=void 0,c={unversionedId:"apis/wxml/SelectorQuery",id:"apis/wxml/SelectorQuery",isDocsHomePage:!1,title:"SelectorQuery",description:"\u67e5\u8be2\u8282\u70b9\u4fe1\u606f\u7684\u5bf9\u8c61",source:"@site/docs/apis/wxml/SelectorQuery.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/SelectorQuery",permalink:"/taro/docs/next/apis/wxml/SelectorQuery",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/wxml/SelectorQuery.md",tags:[],version:"current",frontMatter:{title:"SelectorQuery",sidebar_label:"SelectorQuery"},sidebar:"API",previous:{title:"NodesRef",permalink:"/taro/docs/next/apis/wxml/NodesRef"},next:{title:"getExtConfigSync",permalink:"/taro/docs/next/apis/ext/getExtConfigSync"}},s=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"exec",id:"exec",children:[],level:3},{value:"in",id:"in",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:4}],level:3},{value:"select",id:"select",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[],level:4}],level:3},{value:"selectAll",id:"selectall",children:[],level:3},{value:"selectViewport",id:"selectviewport",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",children:[],level:4}],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],m={toc:s};function d(e){var t=e.components,p=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u67e5\u8be2\u8282\u70b9\u4fe1\u606f\u7684\u5bf9\u8c61"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"exec"},"exec"),(0,l.kt)("p",null,"\u6267\u884c\u6240\u6709\u7684\u8bf7\u6c42\u3002\u8bf7\u6c42\u7ed3\u679c\u6309\u8bf7\u6c42\u6b21\u5e8f\u6784\u6210\u6570\u7ec4\uff0c\u5728callback\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u8fd4\u56de\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.exec.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: (...args: any[]) => any) => NodesRef\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(...args: any[]) => any")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"in"},"in"),(0,l.kt)("p",null,"\u5c06\u9009\u62e9\u5668\u7684\u9009\u53d6\u8303\u56f4\u66f4\u6539\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"component")," \u5185\u3002\uff08\u521d\u59cb\u65f6\uff0c\u9009\u62e9\u5668\u4ec5\u9009\u53d6\u9875\u9762\u8303\u56f4\u7684\u8282\u70b9\uff0c\u4e0d\u4f1a\u9009\u53d6\u4efb\u4f55\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u7684\u8282\u70b9\uff09\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.in.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(component: TaroGeneral.IAnyObject) => SelectorQuery\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b")))),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Component({\n  queryMultipleNodes () {\n    const query = Taro.createSelectorQuery().in(this)\n    query.select('#the-id').boundingClientRect(function(res){\n      res.top // \u8fd9\u4e2a\u7ec4\u4ef6\u5185 #the-id \u8282\u70b9\u7684\u4e0a\u8fb9\u754c\u5750\u6807\n    }).exec()\n  }\n})\n")),(0,l.kt)("h3",{id:"select"},"select"),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u7b2c\u4e00\u4e2a\u5339\u914d\u9009\u62e9\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"selector")," \u7684\u8282\u70b9\u3002\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"NodesRef")," \u5bf9\u8c61\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"selector \u8bed\u6cd5")),(0,l.kt)("p",null,"selector\u7c7b\u4f3c\u4e8e CSS \u7684\u9009\u62e9\u5668\uff0c\u4f46\u4ec5\u652f\u6301\u4e0b\u5217\u8bed\u6cd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ID\u9009\u62e9\u5668\uff1a#the-id"),(0,l.kt)("li",{parentName:"ul"},"class\u9009\u62e9\u5668\uff08\u53ef\u4ee5\u8fde\u7eed\u6307\u5b9a\u591a\u4e2a\uff09\uff1a.a-class.another-class"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff1a.the-parent > .the-child"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor >>> .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u9009\u62e9\u5668\u7684\u5e76\u96c6\uff1a#a-node, .some-other-nodes")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(selector: string) => NodesRef\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5668")))),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().select('#the-id').fields({\n  dataset: true,\n  size: true,\n  scrollOffset: true,\n  properties: ['scrollX', 'scrollY']\n}, function (res){\n  res.dataset    // \u8282\u70b9\u7684dataset\n  res.width      // \u8282\u70b9\u7684\u5bbd\u5ea6\n  res.height     // \u8282\u70b9\u7684\u9ad8\u5ea6\n  res.scrollLeft // \u8282\u70b9\u7684\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\n  res.scrollTop  // \u8282\u70b9\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n  res.scrollX    // \u8282\u70b9 scroll-x \u5c5e\u6027\u7684\u5f53\u524d\u503c\n  res.scrollY    // \u8282\u70b9 scroll-x \u5c5e\u6027\u7684\u5f53\u524d\u503c\n}).exec()\n")),(0,l.kt)("h3",{id:"selectall"},"selectAll"),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u5339\u914d\u9009\u62e9\u5668 selector \u7684\u6240\u6709\u8282\u70b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"selector \u8bed\u6cd5")),(0,l.kt)("p",null,"selector\u7c7b\u4f3c\u4e8e CSS \u7684\u9009\u62e9\u5668\uff0c\u4f46\u4ec5\u652f\u6301\u4e0b\u5217\u8bed\u6cd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ID\u9009\u62e9\u5668\uff1a#the-id"),(0,l.kt)("li",{parentName:"ul"},"class\u9009\u62e9\u5668\uff08\u53ef\u4ee5\u8fde\u7eed\u6307\u5b9a\u591a\u4e2a\uff09\uff1a.a-class.another-class"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff1a.the-parent > .the-child"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor >>> .the-descendant"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u9009\u62e9\u5668\u7684\u5e76\u96c6\uff1a#a-node, .some-other-nodes")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectAll.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(selector: string) => NodesRef\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5668")))),(0,l.kt)("h3",{id:"selectviewport"},"selectViewport"),(0,l.kt)("p",null,"\u9009\u62e9\u663e\u793a\u533a\u57df\u3002\u53ef\u7528\u4e8e\u83b7\u53d6\u663e\u793a\u533a\u57df\u7684\u5c3a\u5bf8\u3001\u6eda\u52a8\u4f4d\u7f6e\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"() => NodesRef\n")),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().selectViewport().scrollOffset(function (res) {\n  res.id      // \u8282\u70b9\u7684ID\n  res.dataset // \u8282\u70b9\u7684dataset\n  res.scrollLeft // \u8282\u70b9\u7684\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\n  res.scrollTop  // \u8282\u70b9\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n}).exec()\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.exec"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.in"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.select"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.selectAll"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SelectorQuery.selectViewport"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},16710:function(e,t){t.Z="data:image/png;base64,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"}}]);