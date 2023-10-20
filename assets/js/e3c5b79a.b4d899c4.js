"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[7260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,f=u["".concat(l,".").concat(g)]||u[g]||s[g]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o="avoid-wrapping-in-padding",d={unversionedId:"rules/flutter/avoid-wrapping-in-padding",id:"rules/flutter/avoid-wrapping-in-padding",title:"avoid-wrapping-in-padding",description:"added in: 1.6.0 warning",source:"@site/docs/rules/flutter/avoid-wrapping-in-padding.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/avoid-wrapping-in-padding",permalink:"/docs/rules/flutter/avoid-wrapping-in-padding",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/flutter/avoid-wrapping-in-padding.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"avoid-unnecessary-setstate",permalink:"/docs/rules/flutter/avoid-unnecessary-setstate"},next:{title:"check-for-equals-in-render-object-setters",permalink:"/docs/rules/flutter/check-for-equals-in-render-object-setters"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],c={toc:p},u="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avoid-wrapping-in-padding"},"avoid-wrapping-in-padding"),(0,a.kt)("p",null,"added in: 1.6.0 ",(0,a.kt)("span",{style:{color:"orange"}},"warning")),(0,a.kt)("p",null,"Warns when a widget is wrapped in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Padding")," widget but has a padding settings by itself."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"bad"},"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class CoolWidget {\n  ...\n\n  Widget build(...) {\n    // LINT\n    return Padding(\n      child: Container(),\n    );\n  }\n}\n")),(0,a.kt)("h3",{id:"good"},"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class CoolWidget {\n  Widget build() {\n    return Container();\n  }\n}\n\nclass AnotherWidget {\n  Widget build() {\n    return Padding(\n      child: Icon();\n    );\n  }\n}\n")))}s.isMDXComponent=!0}}]);