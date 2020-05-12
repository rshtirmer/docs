(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(11),r=(n(0),n(236)),i={title:"128T Networking Platform",sidebar_label:"128T"},s={id:"about_128t",title:"128T Networking Platform",description:"## What is the 128T Networking Platform?",source:"@site/docs/about_128t.md",permalink:"/docs/about_128t",lastUpdatedAt:1586379850,sidebar_label:"128T",sidebar:"docs",next:{title:"Security Vulnerability Policy",permalink:"/docs/about_security_policy"}},c=[{value:"What is the 128T Networking Platform?",id:"what-is-the-128t-networking-platform",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-the-128t-networking-platform"},"What is the 128T Networking Platform?"),Object(r.b)("p",null,"Networks exist to connect users to services and applications, and network design should start with those services at the core. Secure Vector Routing (SVR) is a new routing architecture that enables the network to differentiate the way it delivers applications and services with simplicity, security, and scalability in mind. It replaces tunnel-based network overlays and inefficient provisioning systems with distributed control, simple intelligent service-based routing, and in-band (data plane) session-based signaling. SVR is fully compatible and interoperable with existing network protocols and architectures, allowing it to be gradually introduced into an existing IP network without affecting the network endpoints or hosts."),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"At the core of the SVR control plane is a service-based data model, which provides the language for describing the network\u2019s services, tenancy, and associated policies. The SVR data model is global and location independent, meaning every router in an SVR fabric shares the same service-based policies and topology, at all times \u2013 no matter where it is. The service-centric data model is expressed in YANG and exposed via northbound REST/GraphQL and NETCONF APIs to deliver a full suite of application and orchestration integration services."),Object(r.b)("p",null,"To simplify routing, addressing, and access control, SVR uses the concept of \u201cRouting with Words.\u201d This is where services are described and communicated across the network in plain language, and aligned with the principles of Named Data Networking. In place of routes solely defined by IP addresses and CIDR blocks, SVR uses names that carry a hierarchical multi-tenancy context."),Object(r.b)("p",null,"SVR ensures that bi-directional sessions follow the same path. Traditional routers use a stateless per packet \u201chot potato\u201d forwarding approach with no notion of session. With SVR, all packets associated with a session are routed along the same path, no matter which way they\u2019re traveling. This symmetric flow enables packets to be intelligently routed, sessions to be controlled, and traffic to be proactively analyzed. It also prevents unauthorized flows from using a given path."),Object(r.b)("p",null,"Session directionality forms the foundation of SVR\u2019s secure routing and segmentation model. It enables a SVR fabric to behave as a zone-based firewall. As every SVR route defines the direction of session at initiation, each route becomes a secure vector that tightly controls access to the destination or service. In short, secure vector routing unifies access control and security policies during routing."),Object(r.b)("p",null,"SVR architecture defines a location independent and segmented approach to routing and addressing based on waypoints. Waypoint addresses (or simply \u201cwaypoints\u201d) are IP addresses configured on secure vector routers that are used to govern sessions across network paths."),Object(r.b)("p",null,"Waypoints are separate and distinct from the IP addresses and named services that identify end-to-end network sessions between devices and services. Secure vector routes define the path (e.g., set of routers) each session must follow within an SVR topology. Every SVR-based router can be reached by one or more waypoints, and Bi-directional Forwarding Detection (BFD) and inline flow monitorint are used to test connection and path attributes between the waypoints."),Object(r.b)("p",null,"The waypoint-based routing with SVR is inherently segment based, meaning that end-to-end route vectors can be created based on multiple router (or waypoint) hops. Since each SVR router maintains an overall view of the topology and service-based policies, dynamic multi-segment paths can be established. Ephemeral session state in each router along the path guarantees symmetric communications."),Object(r.b)("p",null,"To establish a symmetric flow, the ingress secure vector router adds metadata to the first packet of each session. This metadata is used to signal information about a session including original IP addresses, tenant, and policy information. The metadata is only included when the SVR router is aware that there is another secure vector router downstream and, from there, all packets for that session follow the same path. Reverse metadata is included in the first packet on the return path for the same session. The metadata is only included in the initial packets sent between the two SVR routers. The exchange of metadata is always digitally signed to prevent tampering and can be optionally encrypted."),Object(r.b)("p",null,"The forward metadata includes information about the original source IP address and port, original  destination address and port, the tenant associated with the origin of the request, desired class of service, and other policy and control information. The reverse metadata includes utilization metrics and possible service class modification information so as to influence future routing decisions."))}d.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,f=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return n?o.a.createElement(f,s({ref:t},l,{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);