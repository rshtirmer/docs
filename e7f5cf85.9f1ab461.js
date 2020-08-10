(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(180)),o={title:"Kernel Network Namespace Scripts",sidebar_label:"KNI Namespace Scripts"},c={unversionedId:"plugin_kni_namespace_scripts",id:"plugin_kni_namespace_scripts",isDocsHomePage:!1,title:"Kernel Network Namespace Scripts",description:"As part of plugin development to extend the functionality of a 128T router, a very common model is to leverage KNI (Kernel Network Interface) along with Linux network namespaces. They allow for isolation of various networking components such as interfaces, routing table, iptables, etc., while running applications that leverage these networking namespaces. This is also very common method to deploy Service Function Chaining within the product.",source:"@site/docs/plugin_kni_namespace_scripts.md",permalink:"/docs/plugin_kni_namespace_scripts",lastUpdatedAt:1594840473,sidebar_label:"KNI Namespace Scripts",sidebar:"docs",previous:{title:"SIP ALG Plugin",permalink:"/docs/plugin_sip_alg"},next:{title:"128T-4.2.0",permalink:"/docs/api_rest_4.2.0"}},s=[{value:"Scripts",id:"scripts",children:[{value:"startup",id:"startup",children:[]},{value:"init",id:"init",children:[]},{value:"reinit",id:"reinit",children:[]},{value:"shutdown",id:"shutdown",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Symlink To KNI scripts",id:"symlink-to-kni-scripts",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Variable Substitution",id:"variable-substitution",children:[]},{value:"Target Definition",id:"target-definition",children:[]},{value:"Application Definition",id:"application-definition",children:[]},{value:"Routing Definition",id:"routing-definition",children:[]}]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As part of plugin development to extend the functionality of a 128T router, a very common model is to leverage ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni"}),"KNI (Kernel Network Interface)")," along with Linux network namespaces. They allow for isolation of various networking components such as interfaces, routing table, iptables, etc., while running applications that leverage these networking namespaces. This is also very common method to deploy ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_intro#service-function-chaining"}),"Service Function Chaining")," within the product."),Object(r.b)("p",null,"The goal of this package is to provide a set of scripts which do most of the tasks when it comes to setting up the namespaces and associated environment."),Object(r.b)("h2",{id:"scripts"},"Scripts"),Object(r.b)("p",null,"The following scripts are part of the package and have a well-defined role as described ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni#script-types"}),"here"),"."),Object(r.b)("h3",{id:"startup"},"startup"),Object(r.b)("p",null,"This script is invoked at the beginning of the KNI creation and is intended to do clean-up. In the current implementation this script will stop the configured ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#application-definition"}),"application")," (if any)."),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni#init"}),"init script")," is responsible for the majority of the setup. The script performs the following high-level function:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create the configured network-namespace in Linux as per 128T requirements."),Object(r.b)("li",{parentName:"ul"},"Move and setup any configured target-interface into the namespace"),Object(r.b)("li",{parentName:"ul"},"Tune common parameters within the namespace such as ip-forwarding, arp-proxy, etc."),Object(r.b)("li",{parentName:"ul"},"Start any configured application(s) within the namespace"),Object(r.b)("li",{parentName:"ul"},"Setup routes and iptable rules")),Object(r.b)("h3",{id:"reinit"},"reinit"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni#reinit"}),"reinit")," script is called when the interface is deemed to be down for more than 10 seconds. For the sake of this implementation we simply symlink the ",Object(r.b)("inlineCode",{parentName:"p"},"reinit")," to ",Object(r.b)("inlineCode",{parentName:"p"},"init")," script"),Object(r.b)("h3",{id:"shutdown"},"shutdown"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni#shutdown"}),"shutdown")," script is called during 128T shutdown or deletion of the interface. This script will stop the configured ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#application-definition"}),"application")," (if any) and delete the network namespace"),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"t128-kni-namespace-scripts")," package contains all the scripts mentioned ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#scripts"}),"above"),". Upon installation, the scripts in this package are placed under ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/128technology/plugins/network-scripts/default/kni_namespace/")," with the right set of permissions and settings required for operation by 128T router."),Object(r.b)("h3",{id:"symlink-to-kni-scripts"},"Symlink To KNI scripts"),Object(r.b)("p",null,"The package only contains a subset of the scripts provided by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni#script-types"}),"network-script design"),". There are other scripts such as state, info, monitoring, etc., which are not covered in this package. As a result, the best practice is to symlink the host KNI scripts to the pre-packaged scripts listed ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#scripts"}),"above"),"."),Object(r.b)("p",null,"For example, for a configuration with a ",Object(r.b)("inlineCode",{parentName:"p"},"host")," kni called ",Object(r.b)("inlineCode",{parentName:"p"},"test-sfc")," the scripts above would be used as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"# ll /etc/128technology/plugins/network-scripts/host/test-sfc/\ntotal 0\nlrwxrwxrwx 1 root root 69 Jan 21 04:09 init -> /etc/128technology/plugins/network-scripts/default/kni_namespace/init\nlrwxrwxrwx 1 root root 71 Jan 21 04:09 reinit -> /etc/128technology/plugins/network-scripts/default/kni_namespace/reinit\nlrwxrwxrwx 1 root root 73 Jan 21 04:09 shutdown -> /etc/128technology/plugins/network-scripts/default/kni_namespace/shutdown\nlrwxrwxrwx 1 root root 72 Jan 21 04:09 startup -> /etc/128technology/plugins/network-scripts/default/kni_namespace/startup\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"A YAML based configuration is used to control various aspects of the KNIs and namespaces that are driven through this scripts. The configuration file is optional and the scripts will still perform the basic tasks as described ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#scripts"}),"above"),". The scripts looks for a file called ",Object(r.b)("inlineCode",{parentName:"p"},"<kni-name>.conf")," under ",Object(r.b)("inlineCode",{parentName:"p"},"/var/lib/128technology/kni/host/"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'target-interface:\n    name: "eth0"\n    ip-address: "10.10.20.10"\n    prefix-length: 24\n    gateway: "10.10.20.11"\n    default-route: True\napplication:\n    startup:\n        - "ifup test-tun0"\n    shutdown:\n        - "ifdown test-tun0"\nrouting:\n    - "default dev test-tun0"\nroute-tables:\n    default:\n        routes:\n            - "default dev test-tun0"\n    gre:\n        table-id: 1024\n        ingress-interface: t0\n        routes:\n        - "default dev kni345"\n')),Object(r.b)("p",null,"The above example shows all the possible configuration. All of these configuration are optional and reasonable defaults are assumed. Each of the sections below discuss the options in more details."),Object(r.b)("h3",{id:"variable-substitution"},"Variable Substitution"),Object(r.b)("p",null,"The configuration supports basic variable substitutions which directly map to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni#script-command-line-arguments"}),"arguments passed to the network-scripts")," by 128T router. The following keywords can be used in the config and will be substituted with the correct arguments at runtime."),Object(r.b)("p",null,"Consider the following configuration"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-config"}),"device-interface\n    name test\n    type host\n    network-namespace test-ns\n    network-interface\n        name test-intf\n        global-id  5\n        address\n            ip-address 169.254.140.1\n            prefix-length 30\n            gateway 169.254.140.2\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Variable"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Meaning"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Config Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{kni_interface}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the KNI interface"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"test"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{namespace}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the namespace the KNI belongs to (including the namespace-id)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"testns:1073741829"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{kni_ip}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configured IP address for the KNI interface (corresponds to ",Object(r.b)("inlineCode",{parentName:"td"},"address > gateway")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"169.254.140.2"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{kni_prefix_length}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configured prefix-length for the KNI interface (corresponds to ",Object(r.b)("inlineCode",{parentName:"td"},"address > prefix-length")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"30")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{kni_gateway}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configured gateway address for the KNI interface (corresponds to ",Object(r.b)("inlineCode",{parentName:"td"},"address > ip-address")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"169.254.140.1"))))),Object(r.b)("p",null,"The following YAML configurations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'routing:\n    - "default dev {kni_interface} via {kni_gateway}"\n')),Object(r.b)("p",null,"will therefore be converted to the following at runtime:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'routing:\n    - "default dev test via 169.254.140.1"\n')),Object(r.b)("h3",{id:"target-definition"},"Target Definition"),Object(r.b)("p",null,"This configuration allows for another interface to be configured as part of the namespace. This is usually an interface in Linux which is used for forwarding the traffic through to an endpoint. Only a ",Object(r.b)("inlineCode",{parentName:"p"},"single")," target interface can be configured and it's optional. The following snippet shows an example of setting parameters for the ",Object(r.b)("inlineCode",{parentName:"p"},"target-interface"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'target-interface:\n    name: "eth0"\n    ip-address: "10.10.20.10"\n    prefix-length: 24\n    gateway: "10.10.20.11"\n    default-route: True\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"default-route")," flag is used to set the target-interface as a ",Object(r.b)("inlineCode",{parentName:"p"},"default")," route with zero metric in the namespace making it the preferred choice for routing all traffic."),Object(r.b)("h3",{id:"application-definition"},"Application Definition"),Object(r.b)("p",null,"Any ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_intro#service-function-chaining"}),"SFC application")," will require some applications to run within the namespace to consume the KNI and other network resources. This configuration provides a list of commands to be run within the namespace."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The scripts will automatically append ",Object(r.b)("inlineCode",{parentName:"p"},"ip netns exec")," for every configured command."))),Object(r.b)("p",null,"This configuration is optional. Consider this example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'application:\n    startup:\n        - "ifup test-tun0"\n    shutdown:\n        - "ifdown test-tun0"\n')),Object(r.b)("p",null,"In this case, the user can configure the logic to start and stop applications as needed."),Object(r.b)("h3",{id:"routing-definition"},"Routing Definition"),Object(r.b)("p",null,"It's useful to be able to influence the basic routing rules within the namespace. The ",Object(r.b)("inlineCode",{parentName:"p"},"routing")," config in its simplest form can be used to add routes to the default routing table. For most applications this is sufficient and acts as a way to create quick configuration of routes. For example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'routing:\n    - "192.168.0.0/16 via 169.254.140.1 dev test"\n')),Object(r.b)("p",null,"The above example, will create a single route table entry for the prefix ",Object(r.b)("inlineCode",{parentName:"p"},"192.168.0.0/16"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If a target interface is configured as default-route and no routing rules are specified, a default route for the target will be added."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"routing definition")," section will override any other routes specified elsewhere in the config"))),Object(r.b)("p",null,"For a more advanced use case, such as tunneling or NAT, a single routing table is not enough. For such applications, a ",Object(r.b)("inlineCode",{parentName:"p"},"route-tables")," definition can be used. The ",Object(r.b)("inlineCode",{parentName:"p"},"route-tables")," allow the user to do the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new routing table in the namespace"),Object(r.b)("li",{parentName:"ul"},"Specify the conditions under which to use this routing table"),Object(r.b)("li",{parentName:"ul"},"Create rules to be used for this new table.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'route-tables:\n    default:\n        routes:\n            - "default dev test-tun0"\n    gre:\n        table-id: 1024\n        ingress-interface: t0\n        routes:\n        - "default dev kni345"\n\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"default")," keyword is used to create route entries for the default route table in Linux. In the above example, the second entry for ",Object(r.b)("inlineCode",{parentName:"p"},"gre")," table will create a new table with the identifier ",Object(r.b)("inlineCode",{parentName:"p"},"1024"),". For each route-table, the user can configure the conditions and parameters for which the table can be used. These parameters translate to the options for the ",Object(r.b)("inlineCode",{parentName:"p"},"ip rules add")," command. The currently supported parameters include"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ingress-interface (iif)"),Object(r.b)("li",{parentName:"ul"},"egress-interface (off)"),Object(r.b)("li",{parentName:"ul"},"from-prefix (from)"),Object(r.b)("li",{parentName:"ul"},"to-prefix (to)")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The rules defined under ",Object(r.b)("inlineCode",{parentName:"p"},"routing")," will be applied before any ",Object(r.b)("inlineCode",{parentName:"p"},"route-tables"),". Since the ",Object(r.b)("inlineCode",{parentName:"p"},"route-tables")," supersede the functionality of ",Object(r.b)("inlineCode",{parentName:"p"},"routing")," it is not recommended to use both in the same config."))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"In order to leverage these scripts, the user has to do at most two things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#symlink-to-kni-scripts"}),"Symlink to the kni scripts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#configuration"}),"Configure various aspects of the pre-packaged scripts"))))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);