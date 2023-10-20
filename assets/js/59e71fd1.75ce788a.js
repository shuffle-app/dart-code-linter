"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[7624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var m=2;m<l;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),i=(n(7294),n(3905));const l={},a="prefer-intl-name",o={unversionedId:"rules/intl/prefer-intl-name",id:"rules/intl/prefer-intl-name",title:"prefer-intl-name",description:"added in: 1.6.0 warning.",source:"@site/docs/rules/intl/prefer-intl-name.mdx",sourceDirName:"rules/intl",slug:"/rules/intl/prefer-intl-name",permalink:"/docs/rules/intl/prefer-intl-name",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/intl/prefer-intl-name.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intl",permalink:"/docs/rules/intl/"},next:{title:"prefer-providing-intl-description",permalink:"/docs/rules/intl/prefer-provide-intl-description"}},s={},m=[{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefer-intl-name"},"prefer-intl-name"),(0,i.kt)("p",null,"added in: 1.6.0 ",(0,i.kt)("span",{style:{color:"orange"}},"warning"),"."),(0,i.kt)("p",null,"Recommends to use ",(0,i.kt)("inlineCode",{parentName:"p"},"${ClassName}_${ClassMemberName}")," pattern for ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," argument in ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.message()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.plural()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.gender()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.select()")," methods."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"bad"},"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonI18n {\n  static final String title1 = Intl.message(\n    'One Title',\n    name: 'SomeButtonI18n_titleOne'\n  );\n\n  final String title2 = Intl.message(\n    'Two Title',\n    name: 'titleTwo'\n  );\n\n  String get title3 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonI18n_titleThree'\n  );\n\n  static String get title4 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonI18n_titleFour'\n  );\n\n  String title5() => Intl.message(\n    'Five Title',\n    name: 'SomeButtonI18n_titleFive'\n  );\n\n  static String title6() {\n    return Intl.message(\n      'Six Title',\n      name: 'SomeButtonI18n_titleSix'\n     );\n  }\n}\n\nString title7() {\n  return Intl.message(\n    'Seven Title',\n    name: 'SomeButtonI18n_titleSeven'\n  );\n}\n\nString title8() => Intl.message(\n  'Eight Title',\n  name: 'titleEight'\n);\n")),(0,i.kt)("h3",{id:"good"},"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonCorrectI18n {\n  static final int number = int.parse('1');\n\n  static final String title1 = Intl.message(\n    'One Title',\n    name: 'SomeButtonCorrectI18n_title1'\n  );\n\n  final String title2 = Intl.message(\n    'Two Title',\n    name: 'SomeButtonCorrectI18n_title2'\n  );\n\n  String get title3 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonCorrectI18n_title3'\n  );\n\n  static String get title4 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonCorrectI18n_title4'\n  );\n\n  String get title5 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonCorrectI18n_title5'\n  );\n\n  static String get title6 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonCorrectI18n_title6'\n  );\n}\n\nString title77() {\n  return Intl.message(\n    'Seven seven Title',\n    name: 'title77'\n   );\n}\n\nString title8() => Intl.message(\n  'Eight Title',\n  name: 'title8'\n);\n")))}u.isMDXComponent=!0}}]);