"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[7753],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>L});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,L=c["".concat(d,".").concat(m)]||c[m]||u[m]||s;return t?r.createElement(L,o(o({ref:n},p),{},{components:t})):r.createElement(L,o({ref:n},p))}));function L(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const s={},o="always-remove-listener",a={unversionedId:"rules/flutter/always-remove-listener",id:"rules/flutter/always-remove-listener",title:"always-remove-listener",description:"added in: 1.6.0 warning",source:"@site/docs/rules/flutter/always-remove-listener.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/always-remove-listener",permalink:"/docs/rules/flutter/always-remove-listener",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/flutter/always-remove-listener.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter",permalink:"/docs/rules/flutter/"},next:{title:"avoid-border-all",permalink:"/docs/rules/flutter/avoid-border-all"}},d={},l=[{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"always-remove-listener"},"always-remove-listener"),(0,i.kt)("p",null,"added in: 1.6.0 ",(0,i.kt)("span",{style:{color:"orange"}},"warning")),(0,i.kt)("p",null,"Warns when an event listener is added but never removed."),(0,i.kt)("p",null,"StatefulWidget classes sometimes add event listeners but fail to remove them. This results in memory leaks if the valueListenable lifecycle is significantly longer than the widget."),(0,i.kt)("p",null,"Every listener added manually needs to be removed typically in the dispose method. If listeners are added in ",(0,i.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"updateDependencies")," then they also need to be removed from those methods as otherwise widgets end up with multiple listeners."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"bad"},"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class ShinyWidget {\n  final someListener = Listener();\n  final anotherListener = Listener();\n\n  const ShinyWidget();\n}\n\nclass _ShinyWidgetState extends State {\n  final _someListener = Listener();\n  final _anotherListener = Listener();\n  final _thirdListener = Listener();\n  final _disposedListener = Listener();\n\n  const _ShinyWidgetState();\n\n  @override\n  void initState() {\n    super.initState();\n\n    _someListener.addListener(listener);\n    _anotherListener.addListener(listener); // LINT\n    _thirdListener.addListener(listener); // LINT\n    _disposedListener.addListener(listener);\n\n    widget.someListener.addListener(listener); // LINT\n\n    widget.anotherListener\n      ..addListener(listener)\n      ..addListener(listener)\n      ..addListener(() {}); // LINT\n  }\n\n  @override\n  void didUpdateWidget(ShinyWidget oldWidget) {\n    widget.someListener.addListener(listener);\n    oldWidget.someListener.removeListener(listener);\n\n    widget.anotherListener.addListener(listener); // LINT\n\n    _someListener.addListener(listener); // LINT\n\n    _anotherListener.removeListener(listener);\n    _anotherListener.addListener(listener);\n  }\n\n  void dispose() {\n    _someListener.removeListener(listener);\n    _thirdListener.removeListener(wrongListener);\n\n    _disposedListener.dispose();\n\n    widget.anotherListener.removeListener(listener);\n\n    super.dispose();\n  }\n\n  void listener() {\n    // ...\n  }\n\n  void wrongListener() {\n    // ...\n  }\n}\n")),(0,i.kt)("h3",{id:"good"},"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class ShinyWidget {\n  final someListener = Listener();\n  final anotherListener = Listener();\n\n  const ShinyWidget();\n}\n\nclass _ShinyWidgetState extends State {\n  final _someListener = Listener();\n  final _disposedListener = Listener();\n\n  const _ShinyWidgetState();\n\n  @override\n  void initState() {\n    super.initState();\n\n    _someListener.addListener(listener);\n\n    _disposedListener.addListener(listener);\n\n    widget.anotherListener.addListener(listener);\n  }\n\n  @override\n  void didUpdateWidget(ShinyWidget oldWidget) {\n    widget.someListener.addListener(listener);\n    oldWidget.someListener.removeListener(listener);\n\n    widget.anotherListener.removeListener(listener);\n    widget.anotherListener.addListener(listener);\n\n    _someListener.removeListener(listener);\n    _someListener.addListener(listener);\n  }\n\n  void dispose() {\n    _someListener.removeListener(listener);\n\n    _disposedListener.dispose();\n\n    widget.anotherListener.removeListener(listener);\n\n    super.dispose();\n  }\n\n  void listener() {\n    // ...\n  }\n}\n")))}u.isMDXComponent=!0}}]);