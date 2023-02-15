"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Flows and ClusterFlows"},l=void 0,i={unversionedId:"integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",id:"integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",title:"Flows and ClusterFlows",description:"See the Banzai Cloud Logging operator documentation for the full details on how to configure  Flows and ClusterFlows.",source:"@site/docs/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",sourceDirName:"integrations-in-rancher/logging/custom-resource-configuration",slug:"/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",permalink:"/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",tags:[],version:"current",lastUpdatedAt:1676312789,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Flows and ClusterFlows"},sidebar:"tutorialSidebar",previous:{title:"Custom Resource Configuration",permalink:"/pages-for-subheaders/custom-resource-configuration"},next:{title:"Outputs and ClusterOutputs",permalink:"/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"}},s={},c=[{value:"Flows",id:"flows",level:2},{value:"Matches",id:"matches",level:3},{value:"Filters",id:"filters",level:3},{value:"Outputs",id:"outputs",level:3},{value:"ClusterFlows",id:"clusterflows",level:2},{value:"YAML Example",id:"yaml-example",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/flow/"},"Banzai Cloud Logging operator documentation")," for the full details on how to configure  ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/logging#The-Logging-Buffer-Overloads-Pods"},"Rancher Integration with Logging Services: Troubleshooting")," for how to resolve memory problems with the logging buffer."),(0,r.kt)("h2",{id:"flows"},"Flows"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," defines which logs to collect and filter and which output to send the logs to."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, which means logs will only be collected from the namespace that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is deployed in."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," can be configured by filling out forms in the Rancher UI."),(0,r.kt)("p",null,"For more details about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/flow_types/"},"FlowSpec.")),(0,r.kt)("h3",{id:"matches"},"Matches"),(0,r.kt)("p",null,"Match statements are used to select which containers to pull logs from."),(0,r.kt)("p",null,"You can specify match statements to select or exclude logs according to Kubernetes labels, container and host names. Match statements are evaluated in the order they are defined and processed only until the first matching select or exclude rule applies."),(0,r.kt)("p",null,"Matches can be configured by filling out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," forms in the Rancher UI."),(0,r.kt)("p",null,"For detailed examples on using the match statement, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/log-routing/"},"official documentation on log routing.")),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"You can define one or more filters within a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),". Filters can perform various actions on the logs, for example, add additional data, transform the logs, or parse values from the records. The filters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," are applied in the order in the definition."),(0,r.kt)("p",null,"For a list of filters supported by the Banzai Cloud Logging operator, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/filters/"},"this page.")),(0,r.kt)("p",null,"Filters need to be configured in YAML."),(0,r.kt)("h3",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," will receive logs from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),". Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," must reside in same namespace as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," can be referenced when filling out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," forms in the Rancher UI."),(0,r.kt)("h2",{id:"clusterflows"},"ClusterFlows"),(0,r.kt)("p",null,"Matches, filters and ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are configured for ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," in the same way that they are configured for ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows"),". The key difference is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," is scoped at the cluster level and can configure log collection across all namespaces."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," can be configured by filling out forms in the Rancher UI."),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," selects logs from all namespaces in the cluster, logs from the cluster will be collected and logged to the selected ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,r.kt)("h2",{id:"yaml-example"},"YAML Example"),(0,r.kt)("p",null,"The following example ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," transforms the log messages from the default namespace and sends them to an S3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: flow-sample\n  namespace: default\nspec:\n  filters:\n    - parser:\n        remove_key_name_field: true\n        parse:\n          type: nginx\n    - tag_normaliser:\n        format: ${namespace_name}.${pod_name}.${container_name}\n  localOutputRefs:\n    - s3-output\n  match:\n    - select:\n        labels:\n          app: nginx\n")))}p.isMDXComponent=!0}}]);