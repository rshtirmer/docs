(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(9),a=(n(0),n(256)),o={title:"SNMP: User defined metrics",sidebar_label:"SNMP: User defined metrics"},c={id:"config_snmp_metrics",title:"SNMP: User defined metrics",description:"Because of the large numbers of metrics available in the 128T platform and because only a fraction of these are useful for a functional Network Management System (NMS) the t128MetricsTable is only populated with a few metrics by default. If required, any 128T metric can be provided in this table via a user configurable JSON file.",source:"@site/docs/config_snmp_metrics.md",permalink:"/docs/config_snmp_metrics",lastUpdatedAt:1587586281,sidebar_label:"SNMP: User defined metrics",sidebar:"docs",previous:{title:"Simple Network Management Protocol (SNMP)",permalink:"/docs/config_snmp"},next:{title:"Static Hostname Mappings",permalink:"/docs/config_static_hostname_mapping"}},s=[{value:"Metrics Table Overview",id:"metrics-table-overview",children:[]},{value:"Configuration File",id:"configuration-file",children:[]},{value:"Identifying Metric ID and Contributors",id:"identifying-metric-id-and-contributors",children:[]},{value:"Example Configurations",id:"example-configurations",children:[{value:"System and process metrics",id:"system-and-process-metrics",children:[]},{value:"Aggregate bandwith and active session count",id:"aggregate-bandwith-and-active-session-count",children:[]},{value:"CPU usage filtered by core",id:"cpu-usage-filtered-by-core",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because of the large numbers of metrics available in the 128T platform and because only a fraction of these are useful for a functional Network Management System (NMS) the t128MetricsTable is only populated with a few metrics by default. If required, any 128T metric can be provided in this table via a user configurable JSON file."),Object(a.b)("h2",{id:"metrics-table-overview"},"Metrics Table Overview"),Object(a.b)("p",null,"The following are the two value columns of the t128MetricsTable:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"t128MetricAlias.t128MetricIndex.t128MetricValue\nt128MetricAlias.t128MetricIndex.t128MetricContributors\n")),Object(a.b)("p",null,'Each row of the metrics table is keyed by two objects, the t128MetricAlias and the t128MetricIndex. The t128MetricAlias is an arbitrary string of up to 64 characters long that represents a description of the metric. When read from the table this alias also includes a series instance suffix, which represents a unique instance of metrics. In this context an instance of metrics represents one set of qualified metrics. For example the default CPU utlization metric has an alias "cpuUtilization" will be returned as "cpuUtilization_0". In addition to the alias the t128MetricIndex key represents a unique time series of a metric and representing one set of metrics "contributors".'),Object(a.b)("p",null,'The values contained in each row are the t128MetricValue and t128MetricContributors objects. The t128MetricValue is simply the current value of the metric. To understand the  t128MetricContributors object requires a little more understanding of the way 128T metrics are stored and modelled. All metrics in 128T are assigned a "Metric ID" that is modeled in the YANG metrics data-model. This modelled metric ID is typically represented in a path like syntax, for example the CPU utilization metric id is "/stats/cpu/utilization". For a given metric there can be more than one series of data. For example with the "/stats/cpu/utilization" metric, on a system containing 4 CPU cores this metric will have 4 unique data series, one for each CPU core. The unique parameters that identify each data series are referred to as "contributors". There is always an implicit contributor which is the current router name and usually there is also a node contributor too as metrics are generally generated by a specific node (eg:in the case of the CPU utilization each node will have its own 4 CPU cores). For the CPU metric the contributors are router, node and core and the t128MetricContributors object will contain a string representation of these values so that each row can be correlated with the correct metric data series.'),Object(a.b)("h2",{id:"configuration-file"},"Configuration File"),Object(a.b)("p",null,"The metrics configuration file is stored in ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/128technology/snmpMetricsConfig.json"),'. There is currently only one element; "metrics" which is an array of metrics configuration elements. Each of these elements represents one metric configuration. The following elements are used to configure each metric:'),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Element"),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"alias"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"yes"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Base alias returned in t128MetricAlias")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"metric_id"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"yes"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The modelled metric ID in path form")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"contributors"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"yes"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The list of metrics contributors defined in the metrics model")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"filters"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"no"),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"An array of elements containing contributor/value pairs to filter metric with")))),Object(a.b)("h2",{id:"identifying-metric-id-and-contributors"},"Identifying Metric ID and Contributors"),Object(a.b)("p",null,"The metrics are modelled in YANG form which is then exported on the 128T device as the file ",Object(a.b)("inlineCode",{parentName:"p"},"/var/model/consolidatedStatsModel.xml"),'. This document contains a hierarchical structure that defines the metrics, for example the "/stats/cpu/utilization" is defined as shown:'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'<yin:container name="stats">\n  ...\n  <yin:container xmlns:nm="http://128technology.com/t128/stats/node-monitor" name="cpu" module-prefix="nm" module-name="node-monitor-stats">\n    ...\n    <yin:container name="utilization">\n      <stats:metric-type>meter</stats:metric-type>\n      ...\n      <yin:leaf name="node">\n        ...\n      </yin:leaf>\n      <yin:leaf name="core">\n        ...\n      </yin:leaf>\n')),Object(a.b)("p",null,'Note that some of the XML is ommitted for brevity. Within this model it is possible to see the "node" and "core" contributors represented as leafs of the "utilization" metric.'),Object(a.b)("h2",{id:"example-configurations"},"Example Configurations"),Object(a.b)("p",null,"The following configurations give some working examples of metrics configurations."),Object(a.b)("h3",{id:"system-and-process-metrics"},"System and process metrics"),Object(a.b)("p",null,"The following configuration provides metrics related to the system CPU, disk, memory and process metrics:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n    "metrics": [\n        {\n            "alias": "cpuUtilization",\n            "metric_id": "/stats/cpu/utilization",\n            "contributors": ["node", "core"]\n        },\n        {\n            "alias": "memoryCapacity",\n            "metric_id": "/stats/memory/capacity",\n            "contributors": ["node"]\n        },\n        {\n            "alias": "memoryUsed",\n            "metric_id": "/stats/memory/used",\n            "contributors": ["node"]\n        },\n        {\n            "alias": "diskCapacity",\n            "metric_id": "/stats/disk/capacity",\n            "contributors": ["node"]\n        },\n        {\n            "alias": "diskUsed",\n            "metric_id": "/stats/disk/used",\n            "contributors": ["node"]\n        },\n        {\n            "alias": "processCpuUsage",\n            "metric_id": "/stats/process/cpu/usage",\n            "contributors": ["node", "process-name"]\n        },\n        {\n            "alias": "processMemoryRss",\n            "metric_id": "/stats/process/memory/rss",\n            "contributors": ["node", "process-name"]\n        }\n    ]\n}\n')),Object(a.b)("h3",{id:"aggregate-bandwith-and-active-session-count"},"Aggregate bandwith and active session count"),Object(a.b)("p",null,"The following configuration provides metrics showing the aggregate bandwidth by each service, service-route, network-interface and tenant on the 128T platform as well as the total session count:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n    "metrics": [\n        {\n            "alias": "aggregateBandwithByService",\n            "metric_id": "/stats/aggregate-session/service/bandwidth",\n            "contributors": ["service"]\n        },\n        {\n            "alias": "aggregateBandwithByServiceRoute",\n            "metric_id": "/stats/aggregate-session/service-route/bandwidth",\n            "contributors": ["service-route"]\n        },\n        {\n            "alias": "aggregateBandwithByTenant",\n            "metric_id": "/stats/aggregate-session/tenant/bandwidth",\n            "contributors": ["tenant"]\n        },\n        {\n            "alias": "aggregateBandwithByNetworkInterface",\n            "metric_id": "/stats/aggregate-session/network-interface/bandwidth",\n            "contributors": ["network-interface"]\n        },\n        {\n            "alias": "sessionActive",\n            "metric_id": "/stats/session/active",\n            "contributors": ["node"]\n        }\n    ]\n}\n')),Object(a.b)("h3",{id:"cpu-usage-filtered-by-core"},"CPU usage filtered by core"),Object(a.b)("p",null,"Metrics can be filtered to only the series desired. This may be done to minimize the size of the data being polled or to reduce extraneous information. Below is an example of a configuration showing a very simple metrics configuration with only the CPU utilization metric, filtering for metrics from only two of the cores:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n    "metrics": [\n        {\n            "alias": "cpuUtilization",\n            "metric_id": "/stats/cpu/utilization",\n            "contributors": ["node", "core"],\n            "filters": [{"core": "0"}, {"core": "1"}]\n        }\n    ]\n}\n')),Object(a.b)("p",null,"The resulting query of the t128MetricsTable is shown below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'snmptable -Cl -Ci -mALL -v2c -c public 172.18.0.55 T128-METRICS-MIB::t128MetricsTable\nSNMP table: T128-METRICS-MIB::t128MetricsTable\n\nindex                   t128MetricContributors      t128MetricValue\n"cpuUtilization_0".0    Fabric128.test1.0           1\n"cpuUtilization_1".0    Fabric128.test1.1           100\n')),Object(a.b)("p",null,'Note that in this response the t128MetricAlias returns two metric instances "cpuUtilization_0" and "cpuUtilization_1", one for each filter. Within each of these metrics instances there is one data series one for each data series and that the series are limited to only the cores specified (in this system cores 2 and 3 are being filtered).'))}d.isMDXComponent=!0},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=i,p=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);