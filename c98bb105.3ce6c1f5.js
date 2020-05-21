(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),a=(n(0),n(240)),o={title:"128T IPSEC Client Plugin 1.0 Release Notes",sidebar_label:"1.0"},l={id:"release_notes_128t_ipsec_client_1.0",title:"128T IPSEC Client Plugin 1.0 Release Notes",description:"## Special Considerations",source:"@site/docs/release_notes_128t_ipsec_client_1.0.md",permalink:"/docs/release_notes_128t_ipsec_client_1.0",lastUpdatedAt:1589993420,sidebar_label:"1.0",sidebar:"docs",previous:{title:"128T IPSEC Client Plugin 2.0 Release Notes",permalink:"/docs/release_notes_128t_ipsec_client_2.0"},next:{title:"128T SIP ALG Plugin 2.1 Release Notes",permalink:"/docs/release_notes_128t_sip_alg_2.1"}},s=[{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Release 1.0.4",id:"release-104",children:[{value:"Issues Fixed",id:"issues-fixed",children:[]}]},{value:"Release 1.0.1",id:"release-101",children:[{value:"Issues Fixed",id:"issues-fixed-1",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(a.b)("p",null,"This version of the plugin is compatible with any 128T version less than 4.3 and greater than or equal to 3.2.8."),Object(a.b)("h2",{id:"release-104"},"Release 1.0.4"),Object(a.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PLUGIN-384")," Added an MTU configuration option to the ipsec profile."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PLUGIN-333")," The ",Object(a.b)("inlineCode",{parentName:"li"},"plugin-network")," ip prefix setting in the configuration was ignored and would instead use the default ip prefix setting."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PLUGIN-336")," Using the ",Object(a.b)("inlineCode",{parentName:"li"},"vector-name")," configuration option would generate invalid configuration."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PLUGIN-400")," Added a local subnet configuration option and enhanced the remote subnet configuration option to allow a list of values.")),Object(a.b)("h2",{id:"release-101"},"Release 1.0.1"),Object(a.b)("h3",{id:"issues-fixed-1"},"Issues Fixed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PLUGIN-47")," Created generic IPSEC client plugin to provide connectivity to remote IPSEC endpoints. This version supports a single client with up to two remote endpoints.")))}u.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(f,l({ref:t},c,{components:n})):i.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);