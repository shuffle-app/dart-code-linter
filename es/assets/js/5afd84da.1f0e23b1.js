"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[294],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var i=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=i.createContext({}),d=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=d(n.components);return i.createElement(s.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),c=d(t),u=o,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return t?i.createElement(f,l(l({ref:e},p),{},{components:t})):i.createElement(f,l({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[c]="string"==typeof n?n:o,l[1]=r;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3612:(n,e,t)=>{t.d(e,{Z:()=>c});var i=t(7294),o=t(6010),a=t(5281),l=t(5999);const r={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(n){const{mdxAdmonitionTitle:e,rest:t}=function(n){const e=i.Children.toArray(n),t=e.find((n=>i.isValidElement(n)&&"mdxAdmonitionTitle"===n.props?.mdxType)),o=i.createElement(i.Fragment,null,e.filter((n=>n!==t)));return{mdxAdmonitionTitle:t,rest:o}}(n.children);return{...n,title:n.title??e,children:t}}function c(n){const{children:e,type:t,title:l,icon:c}=p(n),m=function(n){const e=d[n]??n,t=s[e];return t||(console.warn(`No admonition config found for admonition type "${e}". Using Info as fallback.`),s.info)}(t),u=l??m.label,{iconComponent:f}=m,y=c??i.createElement(f,null);return i.createElement("div",{className:(0,o.Z)(a.k.common.admonition,a.k.common.admonitionType(n.type),"alert",`alert--${m.infimaClassName}`,r.admonition)},i.createElement("div",{className:r.admonitionHeading},i.createElement("span",{className:r.admonitionIcon},y),u),i.createElement("div",{className:r.admonitionContent},e))}},4778:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=t(7462),o=(t(7294),t(3905)),a=t(3612);const l={sidebar_position:5},r="Rules",s={unversionedId:"rules/rules",id:"rules/rules",title:"Rules",description:"General rules configuration is described here.",source:"@site/docs/rules/rules.mdx",sourceDirName:"rules",slug:"/rules/",permalink:"/es/docs/rules/",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/rules.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Check Unused L10n",permalink:"/es/docs/cli/check-unused-l10n"},next:{title:"Dart",permalink:"/es/docs/rules/dart/"}},d={},p=[{value:"Dart",id:"dart",level:2},{value:"Flutter specific",id:"flutter-specific",level:2},{value:"Flame",id:"flame",level:2},{value:"Intl specific",id:"intl-specific",level:2}],c={toc:p},m="wrapper";function u(n){let{components:e,...t}=n;return(0,o.kt)(m,(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rules"},"Rules"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"General rules configuration is ",(0,o.kt)("a",{parentName:"p",href:"../configuration/configuring-rules"},"described here"),".")),(0,o.kt)("p",null,"Rules are grouped by category to help you understand their purpose. Each rule has emojis denoting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2699\ufe0f - this rule is configurable"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udee0 - some problems reported by this rule can be fixed by editor suggestions"),(0,o.kt)("li",{parentName:"ul"},"\u26a0\ufe0f - this rule is deprecated and will be removed in the next major release ")),(0,o.kt)("h2",{id:"dart"},"Dart"),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"arguments-ordering",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Enforces named argument order in function and constructor invocations to be the same as corresponding named parameter declaration order.\nstyle\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-banned-imports\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Configure some imports that you want to ban.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-cascade-after-if-null\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a cascade expression is used after if null (??) binary expression without parentheses.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-collection-methods-with-unrelated-types\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Avoid using collection methods with unrelated types, such as accessing a map of integers using a string key.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-double-slash-imports\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when an import/export directive contains a double slash.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-duplicate-exports\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a file has multiple exports declarations with the same URI.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-dynamic\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when dynamic type is used as variable type in declaration, return type of a function, etc.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-global-state\n",mdxType:"Admonition"},(0,o.kt)("p",null,"Warns about usage mutable global variables. warning")),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-ignoring-return-values\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a return value of a method or function invocation or a class instance property access is not used.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-late-keyword\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a field or variable is declared with a late keyword.\nwarning\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-missing-enum-constant-in-map\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a enum constant is missing in a map declaration.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-nested-conditional-expressions\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns about nested conditional expressions.\nstyle"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-non-ascii-symbols\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a string literal contains non ascii characters.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-non-null-assertion\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when non null assertion operator ! (or \u201cbang\u201d operator) is used for a property access or method invocation. The operator check works at runtime and it may fail and throw a runtime exception.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-passing-async-when-sync-expected\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when an asynchronous function is used as an argument where a synchronous function is expected.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-redundant-async\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Checks for redundant async in a method or function body.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-throw-in-catch-block\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when call throw in a catch block.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-top-level-members-in-tests\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a public top-level member (except the entrypoint) is declared inside a test file.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-unnecessary-conditionals\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Checks for unnessesary conditional expressions.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-unnecessary-type-assertions\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns about unnecessary usage of is and whereType operators.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-unnecessary-type-casts\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns about unnecessary usage of as operators.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-unrelated-type-assertions\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns about unrelated usages of is operators.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-unused-parameters\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Checks for unused parameters inside a function or method body.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"ban-name\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Configure some names that you want to ban.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"binary-expression-operand-order\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a literal value is on the left hand side in a binary expressions.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"double-literal-format\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Checks that double literals should begin with 0. instead of just ., and should not end with a trailing 0.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"format-comment\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Prefer format comments like sentences.\nstyle\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"list-all-equatable-fields\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a field is not added to props getter of a class that extends Equatable or EquatableMixin.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"member-ordering\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Enforces ordering for a class members.\nstyle\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"missing-test-assertion\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns that there is no assertion in the test.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"newline-before-return\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Enforces blank line between statements and return in a block.\nstyle\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"no-boolean-literal-compare\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns on comparison to a boolean literal, as in x == true.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"no-empty-block\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Disallows empty blocks except catch clause block.\nstyle"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"no-equal-arguments\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when equal arguments are passed to a function or method invocation.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"no-equal-then-else\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when if statement has equal then and else statements or conditional expression has equal then and else expressions.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"no-magic-number\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns against using number literals outside of named constants or variables.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"no-object-declaration\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a class member is declared with Object type.\nstyle"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-async-await\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Recommends to use async/await syntax to handle a Future result instead of .then() invocation.\nstyle"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-commenting-analyzer-ignores\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when // ignore: comments are left without any additional description why this ignore is applied.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-conditional-expressions\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Recommends to use a conditional expression instead of assigning to the same thing or return statement in each branch of an if statement.\nstyle\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-correct-identifier-length\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when an identifier name length is very short or long.\nstyle\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-correct-test-file-name\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns if the file within /test contains a main, but the file name doesn't end with _test.dart.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-correct-type-name\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Type name should only contain alphanumeric characters, start with an uppercase character and span between min-length and max-length characters in length.\nstyle\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-enums-by-name\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Since Dart 2.15 it's possible to use byName method on enum values prop instead of searching the value with firstWhere.\nstyle"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-first\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Use first to gets the first element.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-immediate-return\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a method or a function returns a variable declared right before the return statement.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-iterable-of\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when List.from() factory is used instead of List.of().\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-last\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Use last to gets the last element.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-match-file-name\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a file name does not match the class name.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-moving-to-variable\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a property access or a method invocation start with duplicated chains of other invocations / accesses inside a single function or method block.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-static-class\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Suggests to use static class member instead of global constants, variables and functions.\nstyle\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-trailing-comma",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Checks for a trailing comma for arguments, parameters, enum values and collections.\nstyle\n\u2699\ufe0f\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"tag-name",mdxType:"Admonition"},(0,o.kt)("p",null,"Warns when a tag name does not match the class name. warning \u2699\ufe0f\ud83d\udee0")),(0,o.kt)("h2",{id:"flutter-specific"},"Flutter specific"),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"always-remove-listener\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when an event listener is added but never removed.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-border-all\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Avoid using Border.all constructor.\nperformance\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-returning-widgets\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a method or function returns a Widget or subclass of a Widget.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-shrink-wrap-in-lists\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a ListView widget with shrinkWrap parameter is wrapped in a Column, Row or another ListView widget.\nperformance"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-unnecessary-setstate\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when setState is called inside initState, didUpdateWidget or build methods and when it is called from a sync method that is called inside those methods.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"use-setstate-synchronously",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when setState is called past an await point.\nwarning\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-expanded-as-spacer\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Avoid using Expanded widget as Spacer.\nwarning\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-wrapping-in-padding\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a widget is wrapped in a Padding widget but has a padding settings by itself.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"check-for-equals-in-render-object-setters\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a RenderObject setter doesn't have an equality check for the new value.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"consistent-update-render-object\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when an updateRenderObject method is absent or doesn't update all fields set in createRenderObject.\nwarning"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-const-border-radius\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a non-const border radius is used.\nperformance\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-correct-edge-insets-constructor\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Prefer correct EdgeInsets constructor.\nstyle\n\ud83d\udee0"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-extracting-callbacks\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns about inline callbacks in a widget tree and suggest to extract them to a widget method.\nstyle\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-single-widget-per-file\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a file contains more than a single widget.\nstyle\n\u2699\ufe0f"))),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-using-list-view\n",mdxType:"Admonition"},(0,o.kt)("p",null,(0,o.kt)("p",null,"Warns when a Column widget with only children parameter is wrapped in a SingleChildScrollView widget.\nperformance"))),(0,o.kt)("h2",{id:"flame"},"Flame"),(0,o.kt)("p",null,"Lints for the ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flame"},"Flame package"),"."),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-creating-vector-in-update\n",mdxType:"Admonition"},(0,o.kt)("p",null,"Warns when a Vector2 is created inside a Component's update method. warning")),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-initializing-in-on-mount\n",mdxType:"Admonition"},(0,o.kt)("p",null,"Warns when a late final variable is being initialized in the Component's onMount method. warning")),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"avoid-redundant-async-on-load\n",mdxType:"Admonition"},(0,o.kt)("p",null,"Warns when a Component's onLoad method can be made sync. warning \ud83d\udee0")),(0,o.kt)("h2",{id:"intl-specific"},"Intl specific"),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-intl-name\n",mdxType:"Admonition"},(0,o.kt)("p",null,"Recommends to use ClassName_ClassMemberName pattern for Intl methods name argument. style \ud83d\udee0")),(0,o.kt)(a.Z,{type:"info",icon:"-",title:"prefer-provide-intl-description\n",mdxType:"Admonition"},(0,o.kt)("p",null,"Warns when a Intl method invoked without a description. warning")))}u.isMDXComponent=!0}}]);