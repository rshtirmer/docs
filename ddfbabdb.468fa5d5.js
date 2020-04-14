(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(11),o=(n(0),n(223)),r={title:"Quick Start from Bootable ISO",sidebar_label:"QuickStart"},c={id:"intro_ztp",title:"Quick Start from Bootable ISO",description:"128 Technology has a software-driven framework for rapid and dynamic deployment of network nodes across the enterprise using Zero Touch Provisioning (ZTP). The software was architected from the ground up to enable automated deployment across a large set of scenarios, including simple, repeatable branch deployments and dynamic, scalable data center/cloud deployments. The solution may be deployed with minimal configuration using the default 128T installation process, or customized and integrated with 3rd party tools.",source:"@site/docs/intro_ztp.md",permalink:"/docs/intro_ztp",editUrl:"https://github.com/128technology/docs/tree/master/docs/intro_ztp.md",lastUpdatedAt:1586828909,sidebar_label:"QuickStart",sidebar:"docs",previous:{title:"Installing in AWS",permalink:"/docs/intro_installation_aws"},next:{title:"Creating a Bootable USB from ISO",permalink:"/docs/intro_creating_bootable_usb"}},l=[{value:"Software Delivery Options",id:"software-delivery-options",children:[]},{value:"QuickStart Provisioning",id:"quickstart-provisioning",children:[]},{value:"Before you Begin",id:"before-you-begin",children:[]},{value:"Procedure",id:"procedure",children:[{value:"128T Configuration",id:"128t-configuration",children:[]},{value:"Verifying Operation",id:"verifying-operation",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"128 Technology has a software-driven framework for rapid and dynamic deployment of network nodes across the enterprise using Zero Touch Provisioning (ZTP). The software was architected from the ground up to enable automated deployment across a large set of scenarios, including simple, repeatable branch deployments and dynamic, scalable data center/cloud deployments. The solution may be deployed with minimal configuration using the default 128T installation process, or customized and integrated with 3rd party tools."),Object(o.b)("p",null,"An important aspect of the 128 Technology ZTP solution is its flexibility. When the product is deployed using the standard 128T images, many customers appreciate the simplicity of enabling an enterprise-wide SessionSmart","\u2122"," routing fabric without investing additional time to customize the deployment. Rapid deployment of session-enabled routing, security and network visibility is the key objective."),Object(o.b)("p",null,"In this deployment model, the 128T node is deployed into the production environment with no site-specific configuration during shipment of units and initial on-line state. A site configuration file is directed via the 128T for initial provisioning."),Object(o.b)("h2",{id:"software-delivery-options"},"Software Delivery Options"),Object(o.b)("p",null,"The simplest deployment of the 128 Technology ZTP solution is highly automated and leverages just two components, the 128T Conductor and at least one 128T SessionSmart","\u2122"," Router. For many customers, the 128T platform is ordered and delivered as a pre-integrated, off-the-shelf solution through the 128T partner network. An image leveraging QuickStart provisioning can also be deployed into a VM or cloud environment, though consideration must be made to the mechanism of injecting the file. Virtual environments may be better suited for cloud automation tools to assist in automated, dynamic deployment."),Object(o.b)("h2",{id:"quickstart-provisioning"},"QuickStart Provisioning"),Object(o.b)("p",null,"Basic configuration parameters are encoded within an encrypted file. For each node, a custom file is generated and minimally contains the following configuration encoded parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"WAN IP address, subnet mask and gateway"),Object(o.b)("li",{parentName:"ul"},"Conductor IP address"),Object(o.b)("li",{parentName:"ul"},"Asset ID")),Object(o.b)("p",null,"Upon node startup, the data is passed (through a Web browser interface) directly to the 128T node LAN IP interface address and decoded within the running node software. The node is dynamically configured with the correct addressing and Conductor assignment and restarted to download the final configuration.  Upon restart, the node establishes outbound connectivity with the Conductor and dynamically joins the 128T topology as a pending or fully managed asset."),Object(o.b)("h2",{id:"before-you-begin"},"Before you Begin"),Object(o.b)("p",null,"Ensure that you have met the following prerequisites:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"128T Conductor operationally deployed and reachable by router"),Object(o.b)("li",{parentName:"ul"},"System installed with 128T software",Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If do not have 128T already installed on a platform, you can follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"intro_creating_bootable_iso.md"}),"this procedure"))))),Object(o.b)("li",{parentName:"ul"},"128T Router has one or more WAN links")),Object(o.b)("p",null,"This diagram is one possible topology for a standalone 128T deployed at the edge of the network."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_network_diagram.png",alt:"QuickStart network diagram"}))),Object(o.b)("h2",{id:"procedure"},"Procedure"),Object(o.b)("p",null,"The rest of this guide will walk you through setting up a typical standalone branch router leveraging the QuickStart capabilities of the 128T Networking Platform."),Object(o.b)("h3",{id:"128t-configuration"},"128T Configuration"),Object(o.b)("p",null,"The 128T router will need to be provisioned a priori on the conductor.  This procedure presumes you are familiar with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_glossary"}),"concepts")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_basics"}),"configuration")," of the 128T platform."),Object(o.b)("p",null,"When a router configuration has been added to the conductor, but the device has not yet connected, in place of device-specific information, QuickStart instructions will be displayed."),Object(o.b)("p",null,"After the configuration has been added to the authority on the conductor:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On the Conductor, go to the UI to start the QuickStart process for the newly created 128T Router by accessing \u201cRouters\u201d -> \u201cRouter Name\u201d -> \u201cQUICKSTART LINK\u201d")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_server_2.png",alt:"QuickStart Generate QuickStart Link"}))),Object(o.b)("p",null,'Clicking on the generate "QuickStart Link" will present you with a dialog box confirming some basic information about the target platform. Notably the ',Object(o.b)("em",{parentName:"p"},"router name"),", ",Object(o.b)("em",{parentName:"p"},"node name"),", and ",Object(o.b)("em",{parentName:"p"},"asset ID"),"."),Object(o.b)("p",null,"By default the conductor generates a UUID for the asset ID so as to unqiuely identify the endpoint. It is often desirable to set the asset ID to be that of the serial number of the device for tracking purposes."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The serial number can be obtained from the device by using ",Object(o.b)("inlineCode",{parentName:"p"},"dmidecode")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"dmidecode -t system | grep Serial\n")),Object(o.b)("p",{parentName:"div"},"If you plan on setting the asset ID to the serial number, now is the time to make that change to the configuration on the conductor."))),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"device host address")," is the IP address that is assigned to the 128T router during the staging process.  By default this is set to ",Object(o.b)("inlineCode",{parentName:"p"},"192.168.0.128"),"."),Object(o.b)("p",null,"A password is used to encrypt the contents of the QuickStart file.  This password will be required when applying the file to the target platform."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/intro_ztp_quickstart_server_3.png",alt:"QuickStart Link Generation"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy the auto generated \u201cPassword\u201d (this can be set to a different value)"),Object(o.b)("li",{parentName:"ul"},"Follow step 1 to download the QuickStart file locally by selecting the \u201cClick Here\u201d link"),Object(o.b)("li",{parentName:"ul"},"Plug in the computer that contains the QuickStart file to any ethernet port on the router. Ensure DHCP is enabled on the computer connecting to the router."),Object(o.b)("li",{parentName:"ul"},"Follow step 2 and click the link to start the QuickStart URL process"),Object(o.b)("li",{parentName:"ul"},"Login locally to the new router with the default username ",Object(o.b)("inlineCode",{parentName:"li"},"admin")," and password ",Object(o.b)("inlineCode",{parentName:"li"},"128Tadmin")),Object(o.b)("li",{parentName:"ul"},"Drag and drop the QuickStart file and click \u201cProceed\u201d")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_client_1.png",alt:"QuickStart file upload"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Paste the \u201cPassword\u201d previously copied to unencrypt the QuickStart file and click \u201cContinue\u201d")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_client_2.png",alt:"QuickStart Password Field"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click \u201cProceed\u201d to start this process"),Object(o.b)("li",{parentName:"ul"},"Optionally, select the \u201cShow Details\u201d slider to view the full config that will be configured")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_client_3.png",alt:"QuickStart File Accepted"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After a couple minutes, this process will complete and your 128T Router will be fully configured.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_client_4.png",alt:"QuickStart Working"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After a few more minutes, the router QuickStart webpage will show a message that the router was successfully configured.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_client_5.png",alt:"QuickStart Success"}))),Object(o.b)("h3",{id:"verifying-operation"},"Verifying Operation"),Object(o.b)("p",null,"The 128T router will have connected to the conductor.  The Router page that was previously empty should now be populated with information about the system.  Go to the 128T Conductor UI to verify the process completed for this newly created 128T Router by accessing \u201cRouters\u201d -> \u201cRouter Name\u201d -> \u201cNode Name\u201d"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Verify \u201c128T Processes\u201d -> \u201cAll Processes Running\u201d"),Object(o.b)("li",{parentName:"ul"},"Verify \u201cAsset Status\u201d -> \u201cRUNNING\u201d"),Object(o.b)("li",{parentName:"ul"},"Verify all 4 interfaces are \u201cUp\u201d")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_ztp_quickstart_verification.png",alt:"QuickStart Verification"}))),Object(o.b)("p",null,"Congratulations, you have setup your 128T router."))}d.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(r,".").concat(p)]||u[p]||b[p]||o;return n?i.a.createElement(m,c({ref:t},s,{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);