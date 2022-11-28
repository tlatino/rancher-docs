"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49167],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,g=h["".concat(l,".").concat(d)]||h[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20347:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={title:"\u76d1\u63a7\u548c\u544a\u8b66",description:"Prometheus \u5141\u8bb8\u4f60\u67e5\u770b\u6765\u81ea\u4e0d\u540c Rancher \u548c Kubernetes \u5bf9\u8c61\u7684\u6307\u6807\u3002\u4e86\u89e3\u76d1\u63a7\u8303\u56f4\u4ee5\u53ca\u5982\u4f55\u542f\u7528\u96c6\u7fa4\u76d1\u63a7"},l=void 0,s={unversionedId:"pages-for-subheaders/monitoring-and-alerting",id:"pages-for-subheaders/monitoring-and-alerting",title:"\u76d1\u63a7\u548c\u544a\u8b66",description:"Prometheus \u5141\u8bb8\u4f60\u67e5\u770b\u6765\u81ea\u4e0d\u540c Rancher \u548c Kubernetes \u5bf9\u8c61\u7684\u6307\u6807\u3002\u4e86\u89e3\u76d1\u63a7\u8303\u56f4\u4ee5\u53ca\u5982\u4f55\u542f\u7528\u96c6\u7fa4\u76d1\u63a7",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/monitoring-and-alerting.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-and-alerting",permalink:"/zh/pages-for-subheaders/monitoring-and-alerting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/monitoring-and-alerting.md",tags:[],version:"current",lastUpdatedAt:1669185570,formattedLastUpdatedAt:"2022/11/23",frontMatter:{title:"\u76d1\u63a7\u548c\u544a\u8b66",description:"Prometheus \u5141\u8bb8\u4f60\u67e5\u770b\u6765\u81ea\u4e0d\u540c Rancher \u548c Kubernetes \u5bf9\u8c61\u7684\u6307\u6807\u3002\u4e86\u89e3\u76d1\u63a7\u8303\u56f4\u4ee5\u53ca\u5982\u4f55\u542f\u7528\u96c6\u7fa4\u76d1\u63a7"},sidebar:"tutorialSidebar",previous:{title:"Outputs \u548c ClusterOutputs",permalink:"/zh/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},next:{title:"Monitoring \u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"}},p={},m=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:3},{value:"Monitoring \u7684\u5de5\u4f5c\u539f\u7406",id:"monitoring-\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u9ed8\u8ba4\u7ec4\u4ef6\u548c\u90e8\u7f72",id:"\u9ed8\u8ba4\u7ec4\u4ef6\u548c\u90e8\u7f72",level:2},{value:"\u5185\u7f6e\u4eea\u8868\u677f",id:"\u5185\u7f6e\u4eea\u8868\u677f",level:3},{value:"\u9ed8\u8ba4\u6307\u6807 Exporter",id:"\u9ed8\u8ba4\u6307\u6807-exporter",level:3},{value:"\u9ed8\u8ba4\u544a\u8b66",id:"\u9ed8\u8ba4\u544a\u8b66",level:3},{value:"Rancher UI \u4e2d\u516c\u5f00\u7684\u7ec4\u4ef6",id:"rancher-ui-\u4e2d\u516c\u5f00\u7684\u7ec4\u4ef6",level:3},{value:"RBAC",id:"rbac",level:2},{value:"\u6307\u5357",id:"\u6307\u5357",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5728 Rancher \u4e2d\u914d\u7f6e Monitoring \u8d44\u6e90",id:"\u5728-rancher-\u4e2d\u914d\u7f6e-monitoring-\u8d44\u6e90",level:3},{value:"\u914d\u7f6e Helm Chart \u9009\u9879",id:"\u914d\u7f6e-helm-chart-\u9009\u9879",level:3},{value:"Windows \u96c6\u7fa4\u652f\u6301",id:"windows-\u96c6\u7fa4\u652f\u6301",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2}],h={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u5e94\u7528\uff0c\u5c06\u4e1a\u754c\u9886\u5148\u7684\u5f00\u6e90\u76d1\u63a7\u548c\u544a\u8b66\u89e3\u51b3\u65b9\u6848\u5feb\u901f\u90e8\u7f72\u5230\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,i.kt)("h3",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"Prometheus \u652f\u6301\u67e5\u770b Rancher \u548c Kubernetes \u5bf9\u8c61\u7684\u6307\u6807\u3002\u901a\u8fc7\u4f7f\u7528\u65f6\u95f4\u6233\uff0cPrometheus \u80fd\u8ba9\u4f60\u901a\u8fc7 Rancher UI \u6216 Grafana\uff08\u4e0e Prometheus \u4e00\u8d77\u90e8\u7f72\u7684\u5206\u6790\u67e5\u770b\u5e73\u53f0\uff09\u4ee5\u66f4\u5bb9\u6613\u9605\u8bfb\u7684\u56fe\u8868\u548c\u89c6\u89c9\u5f62\u5f0f\u6765\u67e5\u8be2\u548c\u67e5\u770b\u8fd9\u4e9b\u6307\u6807\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u67e5\u770b Prometheus \u4ece\u96c6\u7fa4\u7684 controlplane\u3001\u8282\u70b9\u548c deployment \u4e2d\u6293\u53d6\u7684\u6570\u636e\uff0c\u4f60\u53ef\u4ee5\u968f\u65f6\u4e86\u89e3\u96c6\u7fa4\u4e2d\u53d1\u751f\u7684\u6240\u6709\u4e8b\u4ef6\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5206\u6790\u6765\u66f4\u597d\u5730\u8fd0\u884c\u4f60\u7684\u73af\u5883\uff0c\u4f8b\u5982\u5728\u7cfb\u7edf\u7d27\u6025\u60c5\u51b5\u53d1\u751f\u4e4b\u524d\u963b\u6b62\u5b83\u4eec\u3001\u5236\u5b9a\u7ef4\u62a4\u7b56\u7565\uff0c\u6216\u6062\u590d\u5d29\u6e83\u7684\u670d\u52a1\u5668\u3002"),(0,i.kt)("p",null,"\u5728 Rancher v2.5 \u4e2d\u5f15\u5165\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," operator \u7531 ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/"},"Grafana"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager"),"\uff0c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter"},"Prometheus adapter")," \u63d0\u4f9b\u652f\u6301\u3002"),(0,i.kt)("p",null,"Monitoring \u5e94\u7528\u5141\u8bb8\u4f60\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u96c6\u7fa4\u8282\u70b9\u3001Kubernetes \u7ec4\u4ef6\u548c\u8f6f\u4ef6\u90e8\u7f72\u7684\u72b6\u6001\u548c\u8fdb\u7a0b"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e Prometheus \u6536\u96c6\u7684\u6307\u6807\u5b9a\u4e49\u544a\u8b66"),(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Prometheus Alertmanager \u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u3001Slack\u3001PagerDuty \u7b49\u914d\u7f6e\u544a\u8b66\u901a\u77e5"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e Prometheus \u6536\u96c6\u7684\u6307\u6807\uff0c\u5c06\u9884\u5148\u8ba1\u7b97\u7684\u3001\u7ecf\u5e38\u9700\u8981\u7684\uff0c\u6216\u8ba1\u7b97\u6210\u672c\u9ad8\u7684\u8868\u8fbe\u5f0f\u5b9a\u4e49\u4e3a\u65b0\u7684\u65f6\u95f4\u5e8f\u5217"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Prometheus Adapter\uff0c\u5c06\u4ece Prometheus \u6536\u96c6\u7684\u6307\u6807\u516c\u5f00\u7ed9 Kubernetes Custom Metrics API\uff0c\u4ee5\u4fbf\u5728 HPA \u4e2d\u4f7f\u7528")),(0,i.kt)("h2",{id:"monitoring-\u7684\u5de5\u4f5c\u539f\u7406"},"Monitoring \u7684\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"\u6709\u5173 monitoring \u7ec4\u4ef6\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h2",{id:"\u9ed8\u8ba4\u7ec4\u4ef6\u548c\u90e8\u7f72"},"\u9ed8\u8ba4\u7ec4\u4ef6\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"\u5185\u7f6e\u4eea\u8868\u677f"},"\u5185\u7f6e\u4eea\u8868\u677f"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u76d1\u63a7\u5e94\u7528\u5c06 Grafana \u4eea\u8868\u677f\uff08\u7531 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," \u9879\u76ee\u7b56\u5212\uff09\u90e8\u7f72\u5230\u96c6\u7fa4\u4e0a\u3002"),(0,i.kt)("p",null,"\u5b83\u5bb3\u90e8\u7f72\u4e00\u4e2a Alertmanager UI \u548c\u4e00\u4e2a Prometheus UI\u3002\u6709\u5173\u8fd9\u4e9b\u5de5\u5177\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"},"\u5185\u7f6e\u4eea\u8868\u677f"),"\u3002"),(0,i.kt)("h3",{id:"\u9ed8\u8ba4\u6307\u6807-exporter"},"\u9ed8\u8ba4\u6307\u6807 Exporter"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher Monitoring \u4f1a\u90e8\u7f72 Exporter\uff08\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"node-exporter")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-state-metrics"},"kube-state-metrics"),"\uff09\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u9ed8\u8ba4 Exporter \u4f1a\u81ea\u52a8\u4ece Kubernetes \u96c6\u7fa4\u7684\u6240\u6709\u7ec4\u4ef6\uff08\u5305\u62ec\u5de5\u4f5c\u8d1f\u8f7d\uff09\u4e2d\u6293\u53d6 CPU \u548c\u5185\u5b58\u7684\u6307\u6807\u3002"),(0,i.kt)("h3",{id:"\u9ed8\u8ba4\u544a\u8b66"},"\u9ed8\u8ba4\u544a\u8b66"),(0,i.kt)("p",null,"Monitoring \u5e94\u7528\u4f1a\u9ed8\u8ba4\u90e8\u7f72\u4e00\u4e9b\u544a\u8b66\u3002\u8981\u67e5\u770b\u9ed8\u8ba4\u544a\u8b66\uff0c\u8bf7\u8f6c\u5230 ",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards#alertmanager-ui"},"Alertmanager UI")," \u5e76\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5c55\u5f00\u6240\u6709\u7ec4"),"\u3002"),(0,i.kt)("h3",{id:"rancher-ui-\u4e2d\u516c\u5f00\u7684\u7ec4\u4ef6"},"Rancher UI \u4e2d\u516c\u5f00\u7684\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u6709\u5173 Rancher UI \u4e2d\u516c\u5f00\u7684\u76d1\u63a7\u7ec4\u4ef6\u5217\u8868\uff0c\u4ee5\u53ca\u7f16\u8f91\u5b83\u4eec\u7684\u5e38\u89c1\u7528\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#rancher-ui-%E4%B8%AD%E5%85%AC%E5%BC%80%E7%9A%84%E7%BB%84%E4%BB%B6"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h2",{id:"rbac"},"RBAC"),(0,i.kt)("p",null,"\u6709\u5173\u914d\u7f6e monitoring \u8bbf\u95ee\u6743\u9650\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h2",{id:"\u6307\u5357"},"\u6307\u5357"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},"\u542f\u7528 monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},"\u5378\u8f7d monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},"Monitoring \u5de5\u4f5c\u8d1f\u8f7d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},"\u8c03\u8bd5\u9ad8\u5185\u5b58\u4f7f\u7528\u7387"))),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u5728-rancher-\u4e2d\u914d\u7f6e-monitoring-\u8d44\u6e90"},"\u5728 Rancher \u4e2d\u914d\u7f6e Monitoring \u8d44\u6e90"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u7684\u914d\u7f6e\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"monitoring \u7684\u5de5\u4f5c\u539f\u7406"),"\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},"ServiceMonitor \u548c PodMonitor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/monitoring-v2-configuration/receivers"},"\u63a5\u6536\u5668")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/monitoring-v2-configuration/routes"},"\u8def\u7531")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},"PrometheusRule")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},"Prometheus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"Alertmanager"))),(0,i.kt)("h3",{id:"\u914d\u7f6e-helm-chart-\u9009\u9879"},"\u914d\u7f6e Helm Chart \u9009\u9879"),(0,i.kt)("p",null,"\u6709\u5173 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Chart \u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42\u7684\u9009\u9879\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h2",{id:"windows-\u96c6\u7fa4\u652f\u6301"},"Windows \u96c6\u7fa4\u652f\u6301"),(0,i.kt)("p",null,"\u5982\u679c Monitoring \u90e8\u7f72\u5230 RKE1 Windows \u96c6\u7fa4\uff0cMonitoring V2 \u5c06\u81ea\u52a8\u90e8\u7f72 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/windows_exporter"},"windows-exporter")," DaemonSet \u5e76\u8bbe\u7f6e ServiceMonitor\uff0c\u4ee5\u4ece\u6bcf\u4e2a\u90e8\u7f72\u7684 Pod \u4e2d\u6536\u96c6\u6307\u6807\u3002\u8fd9\u5c06\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"windows_")," \u6307\u6807\u586b\u5145 Prometheus\uff0c\u8fd9\u4e9b\u6307\u6807\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"node_exporter")," \u4e3a Linux \u4e3b\u673a\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_")," \u6307\u6807\u7c7b\u4f3c\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u4e3a Windows \u5b8c\u5168\u90e8\u7f72 Monitoring V2\uff0c\u4f60\u7684\u6240\u6709 Windows \u4e3b\u673a\u90fd\u5fc5\u987b\u81f3\u5c11\u5177\u6709 v0.1.0 \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/wins"},"wins")," \u7248\u672c\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728\u73b0\u6709 Windows \u4e3b\u673a\u4e0a\u5347\u7ea7 wins \u7248\u672c\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/windows-support"},"Windows \u96c6\u7fa4\u5bf9 Monitoring V2 \u7684\u652f\u6301"),"\u3002"),(0,i.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,i.kt)("p",null,"\u6709\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28787#issuecomment-693611821"},"\u5df2\u77e5\u95ee\u9898"),"\uff0c\u5373 K3s \u96c6\u7fa4\u9700\u8981\u66f4\u591a\u7684\u9ed8\u8ba4\u5185\u5b58\u3002\u5982\u679c\u4f60\u5728 K3s \u96c6\u7fa4\u4e0a\u542f\u7528 monitoring\uff0c\u6211\u4eec\u5efa\u8bae\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.resources.memory.limit")," \u8bbe\u7f6e\u4e3a 2500 Mi\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.resources.memory.request")," \u8bbe\u7f6e\u4e3a 1750 Mi\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf\u7684\u63d0\u793a\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},"\u6b64\u9875\u9762"),"\u3002"))}d.isMDXComponent=!0}}]);