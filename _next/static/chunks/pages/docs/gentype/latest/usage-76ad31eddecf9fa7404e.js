(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19218],{17375:function(e,n,t){"use strict";function p(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},r=Object.keys(e);for(p=0;p<r.length;p++)t=r[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)t=r[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return p}})},38161:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var p=t(17375),a=t(96156),r=(t(67294),t(3905));function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i,s=(i="Intro",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o({},e))}),m={};function u(e){var n=e.components,t=(0,p.Z)(e,["components"]);return(0,r.kt)("wrapper",o(o(o({},m),t),{},{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"usage--\u4f7f\u7528"}),"Usage | \u4f7f\u7528"),(0,r.kt)(s,{mdxType:"Intro"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"genType"),"  \u64cd\u4f5c\u4e24\u79cd\u7c7b\u578b\u7684\u5b9e\u4f53: ",(0,r.kt)("em",{parentName:"p"},"types")," \u548c ",(0,r.kt)("em",{parentName:"p"},"values"),"\u3002\n\u6bcf\u4e00\u4e2a\u90fd\u53ef\u4ee5\u4ece ReScript \u5bfc\u51fa\u5230 JS\uff0c\u6216\u8005\u4ece JS \u5bfc\u5165\u5230 ReScript\u3002\n\u4e3b\u8981\u6ce8\u89e3\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f ",(0,r.kt)("em",{parentName:"p"},"export"),"\u3002")),(0,r.kt)("h2",o({},{id:"export-and-import-types-\uff5c-\u5bfc\u51fa\u548c\u5bfc\u5165\u7c7b\u578b"}),"Export and Import Types \uff5c \u5bfc\u51fa\u548c\u5bfc\u5165\u7c7b\u578b"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c06\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," \u5bfc\u51fa\u5230JS:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"@genType\ntype callback = ReactEvent.Mouse.t => unit\n")),(0,r.kt)("p",null,"To instead import a type called ",(0,r.kt)("inlineCode",{parentName:"p"},"complexNumber")," from JS module ",(0,r.kt)("inlineCode",{parentName:"p"},"MyMath.ts")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"MyMath.js"),"), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.import")," annotation:\n\u4eceJS\u6a21\u5757 ",(0,r.kt)("inlineCode",{parentName:"p"},"MyMath.ts")," \u4e2d\u5bfc\u5165\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"complexNumber")," \u7684\u7c7b\u578b (\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"MyMath.js"),")\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.import")," \u6ce8\u89e3:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType.import("./MyMath")\ntype complexNumber\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5bfc\u5165\u7684\u7c7b\u578b\u5c06\u88abReScript.\u03a9\u89c6\u4e3a\u4e0d\u900f\u660e\u7684"),(0,r.kt)("h2",o({},{id:"export-and-import-values-\uff5c-\u5bfc\u51fa\u548c\u5bfc\u5165\u503c"}),"Export and Import Values \uff5c \u5bfc\u51fa\u548c\u5bfc\u5165\u503c"),(0,r.kt)("p",null,"\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," \u5230JS:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType\nlet callback = _ => Js.log("Clicked");\n')),(0,r.kt)("p",null,"\u8981\u5728 JS \u7aef\u91cd\u547d\u540d\u51fd\u6570\u5e76\u5c06\u5176\u5bfc\u51fa\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"CB"),"\uff0c\u8bf7\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType\n@genType.as("CB")\nlet callback = _ => Js.log("Clicked");\n')),(0,r.kt)("p",null,"\u6216\u8005\u66f4\u7d27\u51d1\u7684\u5199\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType("CB")\nlet callback = _ => Js.log("Clicked");\n')),(0,r.kt)("p",null,"\u4ece JS \u6a21\u5757 ",(0,r.kt)("inlineCode",{parentName:"p"},"MyMath.ts")," (\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"MyMath.js"),") \u4e2d\u5bfc\u5165\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"realValue"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType.import("./MyMath") /* JS module to import from. */\n/* Name and type of the JS value to import. */\nexternal realValue: complexNumber => float = "realValue";\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u5f53 genType \u7248\u672c < 2.17.0 \u6216 bucklescript \u7248\u672c < 5.0.0, \u5fc5\u987b\u52a0\u4e0a\u4e00\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"@bs.module")," \u548c\u5f53\u524d\u6587\u4ef6\u540d\u3002 \u8bf7\u770b\u65e7\u7248 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/cristianoc/genType/blob/v2.16.0/README.md"}),"README"),".")),(0,r.kt)("p",null,"\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"external")," \u5173\u952e\u5b57\uff0c\u4ece\u4e0a\u4e0b\u6587\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u51fa\u8fd9\u662f\u4e00\u4e2a\u5bfc\u5165\uff0c\u6240\u4ee5\u4f60\u4e5f\u53ef\u4ee5\u53ea\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType")," \u800c\u5ffd\u7565 ",(0,r.kt)("inlineCode",{parentName:"p"},".import"),"\u3002"),(0,r.kt)("p",null,"\u8981\u5bfc\u5165\u4e00\u4e2a\u9ed8\u8ba4\u7684 JS \u5bfc\u51fa\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.import")," \u4e2d\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyMath", "default"))')),(0,r.kt)("p",null,"\u76f8\u4f3c\u7684\uff0c\u5bfc\u5165\u5177\u6709\u4e0d\u540c JS \u540d\u79f0\u7684\u503c\uff0c\u4f7f\u7528\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyMath", "ValueStartingWithUpperCaseLetter"))')," \u7684\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5bfc\u5165\u5d4c\u5957\u503c\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Some.Nested.value"),", use e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'@genType.import(("./MyMath", "Some.Nested.value"))')),(0,r.kt)("h2",o({},{id:"interface-resi-and-implementation-res-files-\uff5c-\u63a5\u53e3-resi-\u548c\u5b9e\u73b0-res-\u6587\u4ef6"}),"Interface (.resi) and Implementation (.res) files \uff5c \u63a5\u53e3 (.resi) \u548c\u5b9e\u73b0 (.res) \u6587\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo.resi")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo.res")," \u90fd\u5b58\u5728\uff0c\u6ce8\u89e3\u4f1a\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo.resi")," \u4e2d\u53d6\u3002\u672c\u5730\u6a21\u5757\u4e5f\u662f\u5982\u6b64:\u5982\u679c\u5b58\u5728\uff0c\u5219\u6a21\u5757\u7c7b\u578b\u4f18\u5148\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo.resi")," \u9876\u90e8\u6dfb\u52a0\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.ignoreInterface")," \u6765\u8986\u76d6\u8be5\u884c\u4e3a\u3002\u7528\u4f8b:\u5411 JS \u66b4\u9732\u5b9e\u73b0\u7ec6\u8282\uff0c\u800c\u4e0d\u662f\u5411 ReScript \u66b4\u9732\u3002"),(0,r.kt)("h2",o({},{id:"type-expansion-and-gentypeopaque"}),"Type Expansion and @genType.opaque"),(0,r.kt)("p",null,"\u5982\u679c\u5bfc\u51fa\u7684\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"persons")," \u5728\u5176\u5b9a\u4e49\u4e2d\u5f15\u7528\u4e86\u5176\u4ed6\u7c7b\u578b\uff0c\u90a3\u4e48\u8fd9\u4e9b\u7c7b\u578b\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u88ab\u5bfc\u51fa\uff0c\u53ea\u8981\u5b83\u4eec\u5b9a\u4e49\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u4e2d:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"type name = string\ntype surname = string\ntype person = {name: name, surname: surname}\n\n@genType\ntype persons = array<person>;\n")),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u5728 JS \u4e2d\u9690\u85cf ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"surname")," \u662f\u5b57\u7b26\u4e32\u7684\u4e8b\u5b9e\uff0c\u4f60\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.opaque")," \u6ce8\u89e3\u6765\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"@genType.opaque\ntype name = string\n\n@genType.opaque\ntype surname = string\n\ntype person = {\n  name,\n  surname,\n};\n\n@genType\ntype persons = array<person>;\n")),(0,r.kt)("h2",o({},{id:"renaming-gentypeas-and-object-mangling-convention-\uff5c-\u91cd\u547d\u540dgentypeas\u3002\u548c\u5bf9\u8c61-mangling-\u7ea6\u5b9a\u3002"}),"Renaming, @genType.as, and object mangling convention. \uff5c \u91cd\u547d\u540d,@genType.as\u3002\u548c\u5bf9\u8c61 mangling \u7ea6\u5b9a\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5177\u6709\u7ed9\u5b9a\u540d\u79f0\u7684\u5b9e\u4f53\u5c06\u4ee5\u76f8\u540c\u7684\u540d\u79f0\u5bfc\u51fa/\u5bfc\u5165\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u66f4\u6539\u5728 JS \u7aef\u51fa\u73b0\u7684\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u4eceReScript 7.0.0 \u7248\u672c\u5f00\u59cb\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.as")," \u5728\u8bb0\u5f55\u5b57\u6bb5\u5c06\u4e0d\u9f13\u52b1\u4f7f\u7528\uff0c\n\u56e0\u4e3a\u5b83\u4f1a\u4ea7\u751f\u8fd0\u884c\u65f6\u8f6c\u6362\u6210\u672c\u3002\u53d6\u800c\u4ee3\u4e4b ",(0,r.kt)("inlineCode",{parentName:"p"},"@bs.as")," \u5c06\u88ab\u652f\u6301\uff0c\u96f6\u6210\u672c\u6d88\u8017\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u4e8e\u540d\u79f0\u4e3a\u5173\u952e\u5b57\u7684\u8bb0\u5f55\u5b57\u6bb5\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType\ntype shipment = {\n  date: float,\n  @genType.as("type")\n  type_: string,\n}\n')),(0,r.kt)("p",null,"\u5bf9\u8c61\u5b57\u6bb5\u540d\u9075\u5faa ReScript \u7684 mangling \u7ea6\u5b9a:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'\u5982\u679c\u5b58\u5728\uff0c\u5220\u9664\u540e\u9762\u7684 "__"\n\u5426\u5219\uff0c\u5f53\u524d\u9762\u8ddf\u5927\u5199\u5b57\u6bcd\u6216\u5173\u952e\u5b57\u65f6\uff0c\u5220\u9664\u524d\u5bfc "_"\u3002\n')),(0,r.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4e0e\u5bf9\u8c61\u7c7b\u4f3c\u7684\u4f8b\u5b50\u662f:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType\ntype shipment = {\n  "date": float,\n  "_type": string,\n}\n')),(0,r.kt)("p",null,"\u6216\u8005\u662f\u540c\u7b49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},' "type__": string')),(0,r.kt)("p",null,"\u51fd\u6570\u548c\u51fd\u6570\u7ec4\u4ef6\u5bf9\u4e8e\u5e26\u6807\u7b7e\u7684\u53c2\u6570\u4e5f\u9075\u5faa mangling \u7ea6\u5b9a:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType\nlet exampleFunction = (~_type) => "type: " ++ _type\n\n@genType\n@react.component\nlet exampleComponent = (~_type) => React.string("type: " ++ _type)\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u5bf9\u51fd\u6570\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.as"),"\uff0c\u5c3d\u7ba1\u8fd9\u53ea\u662f\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\u800c\u7ef4\u62a4\uff0c\u5e76\u4e14\u4e0d\u80fd\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0a\u4f7f\u7528:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'@genType\nlet functionWithGenTypeAs =\n  (~date: float) => @genType.as("type") (~type_: string) => ...\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u7531\u4e8e\u6280\u672f\u539f\u56e0\uff0c\u5728\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e0a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@genType.as")," \u662f\u4e0d\u53ef\u80fd\u7684\u3002"),(0,r.kt)("h2",o({},{id:"dependent-projects--libraries-\uff5c-\u4f9d\u8d56\u7684\u9879\u76ee\u5e93"}),"Dependent Projects / Libraries \uff5c \u4f9d\u8d56\u7684\u9879\u76ee/\u5e93"),(0,r.kt)("p",null,"ReScript \u4f9d\u8d56\u9879\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"bs-dependencies")," \u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f9d\u8d56\u9879\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},'"bs-dependencies": ["somelibrary"]'),"\uff0c\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"somelibrary")," \u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"Common.res"),"\uff0c\u5b83\u5728\u5e93\u4e2d\u67e5\u627e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u7c7b\u578b:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"@genType\nlet z = Common.foo;\n")),(0,r.kt)("p",null,"\u8868\u5355\u5f62\u5f0f\u7684\u4f5c\u7528\u57df\u5305\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"@demo/somelibrary")," \u4e5f\u662f\u88ab\u652f\u6301\u7684"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u5e93\u5fc5\u987b\u662f\u901a\u8fc7 genType \u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".gen.ts")," \u6587\u4ef6\u4e0e\u53d1\u5e03\u7684\u3002"))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/gentype/latest/usage.mdx"}},30835:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gentype/latest/usage",function(){return t(38161)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=30835,e(e.s=n);var n}));var n=e.O();_N_E=n}]);