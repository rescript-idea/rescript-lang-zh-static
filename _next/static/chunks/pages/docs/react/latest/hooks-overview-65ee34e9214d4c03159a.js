(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31260],{17375:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})},44688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(17375),r=n(96156),a=(n(67294),n(3905));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",i({},t))}},l=c("Intro"),s=c("CodeTab"),k={};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",i(i(i({},k),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"hooks-\u6982\u89c8"}),"Hooks \u6982\u89c8"),(0,a.kt)(l,{mdxType:"Intro"},(0,a.kt)("p",null,"Hooks \u662f\u5728 React \u7ec4\u4ef6\u4e2d\u5f15\u5165\u548c\u7ba1\u7406\u72b6\u6001\u548c\u526f\u4f5c\u7528\u7684\u57fa\u672c\u673a\u5236\u3002")),(0,a.kt)("h2",i({},{id:"\u4ec0\u4e48\u662f-hook-\uff1f"}),"\u4ec0\u4e48\u662f Hook \uff1f"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u5230\u4e86 React \u7ec4\u4ef6\u662f\u57fa\u4e8e\u7279\u5b9a props \u503c\u7684\u7b80\u5355\u51fd\u6570\uff0c\u7528\u4e8e\u8868\u793a UI\u3002\u4e3a\u4e86\u4f7f\u5e94\u7528\u66f4\u53ef\u7528\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u901a\u8fc7\u7528\u6237\u8f93\u5165\u6216\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u6765\u52a0\u8f7d\u6570\u636e\uff0c\u4ece\u800c\u4ea4\u4e92\u5f0f\u5730\u64cd\u4f5c props \u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8fd9\u5c31\u662f Hook \u7684\u7528\u6b66\u4e4b\u5730\u3002Hook \u662f\u4e00\u79cd\u51fd\u6570\uff0c\u5b83\u8ba9\u6211\u4eec\u53ef\u4ee5\u4e3a\u7ec4\u4ef6\u5f15\u5165\u72b6\u6001\uff0c\u5e76\u4e3a\u4e0d\u540c\u7684\u4efb\u52a1\u89e6\u53d1\u526f\u4f5c\u7528\uff0c\u4f8b\u5982 HTTP \u8bf7\u6c42\u3001\u76f4\u63a5\u8bbf\u95ee HTML DOM\u3001\u83b7\u53d6\u7a97\u53e3\u5927\u5c0f\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff1a",(0,a.kt)("strong",{parentName:"p"},"Hook \u53ef\u4ee5\u8ba9\u6211\u4eec\u201c\u94a9\u5165\u201d React \u7279\u6027\u3002")),(0,a.kt)("h3",i({},{id:"\u793a\u4f8b-usestate-hook"}),"\u793a\u4f8b: ",(0,a.kt)("inlineCode",{parentName:"h3"},"useState")," Hook"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," \u7ec4\u4ef6\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u70b9\u51fb\u6309\u94ae\u6765\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," \u503c\uff0c\u5e76\u4e14\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," \u503c\u4f1a\u5728\u6309\u94ae\u70b9\u51fb\u65f6\u88ab\u6e32\u67d3\uff1a"),(0,a.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res"}),'// Counter.res\n@react.component\nlet make = () => {\n  let (count, setCount) = React.useState(_ => 0);\n\n  let onClick = (_evt) => {\n    setCount(prev => prev + 1)\n  };\n\n  let msg = "You clicked" ++ Belt.Int.toString(count) ++  "times"\n\n  <div>\n    <p>{React.string(msg)}</p>\n    <button onClick> {React.string("Click me")} </button>\n  </div>\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function Counter(Props) {\n  var match = React.useState(function () {\n        return 0;\n      });\n  var setCount = match[1];\n  var onClick = function (_evt) {\n    return Curry._1(setCount, (function (prev) {\n                  return prev + 1 | 0;\n                }));\n  };\n  var msg = "You clicked" + String(match[0]) + "times";\n  return React.createElement("div", undefined, React.createElement("p", undefined, msg), React.createElement("button", {\n                  onClick: onClick\n                }, "Click me"));\n}\n'))),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.useState")," Hook\u3002\u6211\u4eec\u5728\u7ec4\u4ef6\u51fd\u6570\u4e2d\u8c03\u7528\u5b83\u6765\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5c40\u90e8\u72b6\u6001\u3002React \u4f1a\u5728\u91cd\u6e32\u67d3\u4e4b\u95f4\u4fdd\u6301\u8fd9\u4e9b\u72b6\u6001\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"React.useState")," \u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\uff0c\u5305\u62ec\u5f53\u524d\u72b6\u6001\u503c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"count"),"\uff09 \u548c\u4e00\u4e2a\u66f4\u65b0\u72b6\u6001\u503c\u7684\u51fd\u6570\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"setCount"),"\uff09\u3002\u4f60\u80fd\u5728\u5904\u7406\u4e8b\u4ef6\u65f6\u8c03\u7528\u66f4\u65b0\u51fd\u6570\uff0c\u6216\u5c06\u66f4\u65b0\u51fd\u6570\u4f20\u9012\u7ed9\u5176\u4ed6\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.useState")," \u7684\u552f\u4e00\u53c2\u6570\u662f\u4e00\u4e2a\u8fd4\u56de\u521d\u59cb\u72b6\u6001\u7684\u51fd\u6570\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"_ => 0"),"\uff09\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b83\u662f 0 \u56e0\u4e3a\u6211\u4eec\u7684\u8ba1\u6570\u5668\u4ece\u96f6\u5f00\u59cb\u3002\u8bf7\u6ce8\u610f\uff0c\u72b6\u6001\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\uff0cRescript \u4f1a\u4e3a\u4f60\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\uff08\u53ea\u9700\u8981\u786e\u4fdd\u4f60\u7684\u521d\u59cb\u72b6\u6001\u548c\u4f60\u7684\u7c7b\u578b\u5339\u914d\uff09\u3002\u521d\u59cb\u72b6\u6001\u53c2\u6570\u53ea\u4f1a\u5728\u9996\u6b21\u6e32\u67d3\u65f6\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u8fd9\u53ea\u662f Hook \u7684\u4e00\u4e2a\u5c0f\u4f8b\u5b50\u3002\u6211\u4eec\u4f1a\u5728\u72ec\u7acb\u7684 ",(0,a.kt)("a",i({parentName:"p"},{href:"./hooks-state"}),"useState")," \u7ae0\u8282\u4e2d\u4ecb\u7ecd\u66f4\u591a\u7ec6\u8282\u3002"),(0,a.kt)("h2",i({},{id:"\u53ef\u7528\u7684-hooks"}),"\u53ef\u7528\u7684 Hooks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u6240\u6709 Hooks \u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," \u6a21\u5757\u4e0b\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.useState"),"\uff09\u3002"),(0,a.kt)("h3",i({},{id:"\u57fa\u7840-hooks"}),"\u57fa\u7840 Hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"./hooks-state"}),"useState"),": \u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5c40\u90e8\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"./hooks-effect"}),"useEffect"),": \u5728\u7ec4\u4ef6\u5185\u8fd0\u884c\u6709\u526f\u4f5c\u7528\u7684\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"./hooks-context"}),"useContext"),": \u8ba9\u4f60\u7684\u7ec4\u4ef6\u80fd\u8bbf\u95ee React Context")),(0,a.kt)("h3",i({},{id:"\u989d\u5916-hooks"}),"\u989d\u5916 Hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"./hooks-reducer"}),"useReducer"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," \u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u4f7f\u7528state / action / reduce \u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"./hooks-ref"}),"useRef"),": \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 React Ref \u503c")),(0,a.kt)("h2",i({},{id:"hooks-\u89c4\u5219"}),"Hooks \u89c4\u5219"),(0,a.kt)("p",null,"Hooks \u672c\u8d28\u4e0a\u662f\u4e9b\u7b80\u5355\u51fd\u6570\uff0c\u4f46\u662f\u4f60\u9700\u8981\u5728\u4f7f\u7528\u65f6\u9075\u5faa ",(0,a.kt)("em",{parentName:"p"},"\u4e24\u6761\u89c4\u5219"),"\u3002ReScript \u4e0d\u4f1a\u5728\u7f16\u8bd1\u5668\u4e2d\u5f3a\u5236\u6267\u884c\u8fd9\u4e9b\u89c4\u5219\uff0c\u5982\u679c\u4f60\u60f3\u8981\u5f3a\u5236\u6267\u884c\u6b63\u786e\u7684 Hooks \u7ea6\u5b9a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"}),"eslint-plugin")," \u6765\u68c0\u67e5\u7f16\u8bd1\u7684 JS \u8f93\u51fa\u3002"),(0,a.kt)("h3",i({},{id:"1-\u53ea\u5728\u6700\u9876\u5c42\u8c03\u7528-hook"}),"1. \u53ea\u5728\u6700\u9876\u5c42\u8c03\u7528 Hook"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u5728\u5faa\u73af\uff0c\u6761\u4ef6\u6216\u5d4c\u5957\u51fd\u6570\u4e2d\u8c03\u7528 Hooks"),"\uff0c\u786e\u4fdd\u603b\u662f\u5728\u4f60\u7684 React \u51fd\u6570\u7684\u6700\u9876\u5c42\u8c03\u7528\u5b83\u4eec\u3002\u9075\u5b88\u8fd9\u6761\u89c4\u5219\uff0c\u4f60\u5c31\u80fd\u786e\u4fdd Hook \u5728\u6bcf\u4e00\u6b21\u6e32\u67d3\u4e2d\u90fd\u6309\u7167\u540c\u6837\u7684\u987a\u5e8f\u88ab\u8c03\u7528\u3002\u8fd9\u8ba9 React \u80fd\u591f\u5728\u591a\u6b21\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," \u8c03\u7528\u4e4b\u95f4\u6b63\u786e\u4fdd\u6301 Hooks \u72b6\u6001\u3002(\u5982\u679c\u4f60\u5bf9\u6b64\u611f\u5230\u597d\u5947\uff0c",(0,a.kt)("a",i({parentName:"p"},{href:"https://reactjs.org/docs/hooks-rules.html#explanation"}),"ReactJS Hooks \u6587\u6863")," \u6709\u66f4\u6df1\u5165\u7684\u89e3\u91ca\u3002)"),(0,a.kt)("h3",i({},{id:"2-\u53ea\u5728-react-\u51fd\u6570\u4e2d\u8c03\u7528-hook"}),"2. \u53ea\u5728 React \u51fd\u6570\u4e2d\u8c03\u7528 Hook"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u5728\u666e\u901a\u7684 JavaScript \u51fd\u6570\u4e2d\u8c03\u7528 Hook\u3002")," \u4f60\u53ef\u4ee5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 \u5728 React \u7684\u51fd\u6570\u7ec4\u4ef6\u4e2d\u8c03\u7528 Hook"),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u5728\u81ea\u5b9a\u4e49 Hook \u4e2d\u8c03\u7528\u5176\u4ed6 Hook (\u6211\u4eec\u5c06\u4f1a\u5728 ",(0,a.kt)("a",i({parentName:"li"},{href:"./hooks-custom"}),"\u81ea\u5b9a\u4e49 hooks")," \u7ae0\u8282\u4e2d\u5b66\u4e60\u3002)")),(0,a.kt)("p",null,"\u9075\u5faa\u8fd9\u4e9b\u89c4\u5219\uff0c\u786e\u4fdd\u7ec4\u4ef6\u7684\u72b6\u6001\u903b\u8f91\u5728\u4ee3\u7801\u4e2d\u6e05\u6670\u53ef\u89c1\u3002"))}u.isMDXComponent=!0,u.frontmatter={title:"Hooks & \u72b6\u6001\u7ba1\u7406\u6982\u89c8",description:"ReScript and React \u4e2d\u7684 Hooks \u548c\u72b6\u6001\u7ba1\u7406\u6982\u89c8",canonical:"/docs/react/latest/hooks-overview",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/react/latest/hooks-overview.mdx"}},29804:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react/latest/hooks-overview",function(){return n(44688)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=29804,e(e.s=t);var t}));var t=e.O();_N_E=t}]);