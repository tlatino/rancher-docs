"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73099],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},o=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=i(t),k=a,d=p["".concat(l,".").concat(k)]||p[k]||h[k]||c;return t?n.createElement(d,u(u({ref:r},o),{},{components:t})):n.createElement(d,u({ref:r},o))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,u=new Array(c);u[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<c;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},32929:function(e,r,t){t.r(r),t.d(r,{assets:function(){return o},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return h}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),u=["components"],s={title:"\u67b6\u6784\u63a8\u8350"},l=void 0,i={unversionedId:"reference-guides/rancher-manager-architecture/architecture-recommendations",id:"reference-guides/rancher-manager-architecture/architecture-recommendations",title:"\u67b6\u6784\u63a8\u8350",description:"\u5982\u679c\u4f60\u51c6\u5907\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u5206\u5f00\u90e8\u7f72 Rancher \u4e0e\u4e0b\u6e38\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rancher-manager-architecture/architecture-recommendations.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/architecture-recommendations",permalink:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-manager-architecture/architecture-recommendations.md",tags:[],version:"current",lastUpdatedAt:1669185570,formattedLastUpdatedAt:"2022/11/23",frontMatter:{title:"\u67b6\u6784\u63a8\u8350"},sidebar:"tutorialSidebar",previous:{title:"\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1",permalink:"/zh/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"},next:{title:"\u96c6\u7fa4\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/cluster-configuration"}},o={},h=[{value:"\u5206\u5f00\u90e8\u7f72 Rancher \u4e0e\u4e0b\u6e38\u96c6\u7fa4",id:"\u5206\u5f00\u90e8\u7f72-rancher-\u4e0e\u4e0b\u6e38\u96c6\u7fa4",level:2},{value:"\u4e3a\u4ec0\u4e48\u9ad8\u53ef\u7528\uff08HA\uff09\u66f4\u9002\u5408\u751f\u4ea7\u73af\u5883\u4e2d\u7684 Rancher",id:"\u4e3a\u4ec0\u4e48\u9ad8\u53ef\u7528ha\u66f4\u9002\u5408\u751f\u4ea7\u73af\u5883\u4e2d\u7684-rancher",level:2},{value:"K3s Kubernetes \u96c6\u7fa4\u5b89\u88c5",id:"k3s-kubernetes-\u96c6\u7fa4\u5b89\u88c5",level:3},{value:"RKE Kubernetes \u96c6\u7fa4\u5b89\u88c5",id:"rke-kubernetes-\u96c6\u7fa4\u5b89\u88c5",level:3},{value:"Kubernetes \u5b89\u88c5\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u63a8\u8350\u914d\u7f6e",id:"kubernetes-\u5b89\u88c5\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u63a8\u8350\u914d\u7f6e",level:2},{value:"Kubernetes \u5b89\u88c5\u73af\u5883",id:"kubernetes-\u5b89\u88c5\u73af\u5883",level:2},{value:"Kubernetes \u5b89\u88c5\u7684\u63a8\u8350\u8282\u70b9\u89d2\u8272",id:"kubernetes-\u5b89\u88c5\u7684\u63a8\u8350\u8282\u70b9\u89d2\u8272",level:2},{value:"K3s \u96c6\u7fa4\u89d2\u8272",id:"k3s-\u96c6\u7fa4\u89d2\u8272",level:3},{value:"RKE \u96c6\u7fa4\u89d2\u8272",id:"rke-\u96c6\u7fa4\u89d2\u8272",level:3},{value:"Rancher Server \u548c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 RKE \u96c6\u7fa4\u67b6\u6784\u5bf9\u6bd4",id:"rancher-server-\u548c\u4e0b\u6e38-kubernetes-\u96c6\u7fa4\u7684-rke-\u96c6\u7fa4\u67b6\u6784\u5bf9\u6bd4",level:3},{value:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u67b6\u6784",id:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u67b6\u6784",level:2}],p={toc:h};function k(e){var r=e.components,s=(0,a.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u51c6\u5907\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher\uff0c\u6211\u4eec\u63a8\u8350\u4f60",(0,c.kt)("a",{parentName:"p",href:"#%E5%88%86%E5%BC%80%E9%83%A8%E7%BD%B2-rancher-%E4%B8%8E%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4"},"\u5206\u5f00\u90e8\u7f72 Rancher \u4e0e\u4e0b\u6e38\u96c6\u7fa4"),"\u3002"),(0,c.kt)("h2",{id:"\u5206\u5f00\u90e8\u7f72-rancher-\u4e0e\u4e0b\u6e38\u96c6\u7fa4"},"\u5206\u5f00\u90e8\u7f72 Rancher \u4e0e\u4e0b\u6e38\u96c6\u7fa4"),(0,c.kt)("p",null,"\u4e0b\u6e38\u96c6\u7fa4\uff0c\u662f\u8fd0\u884c\u4f60\u81ea\u5df1\u7684\u5e94\u7528\u548c\u670d\u52a1\u7684\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u901a\u8fc7 Docker \u5b89\u88c5\u4e86 Rancher\uff0c\u8fd0\u884c Rancher Server \u7684\u8282\u70b9\u5e94\u8be5\u4e0e\u4f60\u7684\u4e0b\u6e38\u96c6\u7fa4\u5206\u5f00\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 Rancher \u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\uff0c\u90a3\u4e48\u8fd0\u884c Rancher Server \u7684 Kubernetes \u96c6\u7fa4\u4e5f\u5e94\u8be5\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u5206\u5f00\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"\u5206\u5f00\u90e8\u7f72 Rancher Server \u4e0e\u4e0b\u6e38\u96c6\u7fa4",src:t(52690).Z,width:"827",height:"595"})),(0,c.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9ad8\u53ef\u7528ha\u66f4\u9002\u5408\u751f\u4ea7\u73af\u5883\u4e2d\u7684-rancher"},"\u4e3a\u4ec0\u4e48\u9ad8\u53ef\u7528\uff08HA\uff09\u66f4\u9002\u5408\u751f\u4ea7\u73af\u5883\u4e2d\u7684 Rancher"),(0,c.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher Server\uff0c\u4ee5\u4fdd\u62a4 Rancher Server \u7684\u6570\u636e\u3002\u5728\u9ad8\u53ef\u7528\u5b89\u88c5\u4e2d\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u5145\u5f53\u5ba2\u6237\u7aef\u7684\u5355\u70b9\u5165\u53e3\uff0c\u5e76\u5728\u96c6\u7fa4\u4e2d\u7684\u591a\u53f0\u670d\u52a1\u5668\u4e4b\u95f4\u5206\u914d\u7f51\u7edc\u6d41\u91cf\uff0c\u8fd9\u6709\u52a9\u4e8e\u9632\u6b62\u4efb\u4f55\u4e00\u53f0\u670d\u52a1\u5668\u6210\u4e3a\u5355\u70b9\u6545\u969c\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u4e0d\u5efa\u8bae\u5728\u5355\u4e2a Docker \u5bb9\u5668\u4e2d\u5b89\u88c5 Rancher\uff0c\u56e0\u4e3a\u5982\u679c\u8be5\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u5219\u5176\u4ed6\u8282\u70b9\u4e0a\u5c06\u6ca1\u6709\u53ef\u7528\u7684\u96c6\u7fa4\u6570\u636e\u526f\u672c\uff0c\u5e76\u4e14\u4f60\u53ef\u80fd\u4f1a\u4e22\u5931 Rancher Server \u4e0a\u7684\u6570\u636e\u3002"),(0,c.kt)("h3",{id:"k3s-kubernetes-\u96c6\u7fa4\u5b89\u88c5"},"K3s Kubernetes \u96c6\u7fa4\u5b89\u88c5"),(0,c.kt)("p",null,"\u5e95\u5c42 Kubernetes \u96c6\u7fa4\u7684\u4e00\u79cd\u9009\u62e9\u662f\u4f7f\u7528 K3s Kubernetes\u3002K3s \u662f Rancher CNCF \u8ba4\u8bc1\u7684 Kubernetes \u53d1\u884c\u7248\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002K3s \u7684\u53e6\u4e00\u4e2a\u4f18\u70b9\u662f\u5141\u8bb8\u5916\u90e8 Datastore \u4fdd\u5b58\u96c6\u7fa4\u6570\u636e\uff0c\u56e0\u6b64\u53ef\u4ee5\u628a K3s \u670d\u52a1\u5668\u8282\u70b9\u89c6\u4e3a\u65e0\u72b6\u6001\u3002"),(0,c.kt)("figcaption",null,"\u8fd0\u884c Rancher Management Server \u7684 K3s Kubernetes \u96c6\u7fa4\u7684\u67b6\u6784"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"\u8fd0\u884c Rancher Management Server \u7684 K3s Kubernetes \u96c6\u7fa4\u7684\u67b6\u6784",src:t(74973).Z,width:"249",height:"371"})),(0,c.kt)("h3",{id:"rke-kubernetes-\u96c6\u7fa4\u5b89\u88c5"},"RKE Kubernetes \u96c6\u7fa4\u5b89\u88c5"),(0,c.kt)("p",null,"\u5728 RKE \u5b89\u88c5\u4e2d\uff0c\u96c6\u7fa4\u6570\u636e\u5728\u96c6\u7fa4\u4e2d\u7684\u4e09\u4e2a etcd \u8282\u70b9\u4e0a\u590d\u5236\uff0c\u4ee5\u5728\u67d0\u4e2a\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\u63d0\u4f9b\u5197\u4f59\u548c\u8fdb\u884c\u6570\u636e\u590d\u5236\u3002"),(0,c.kt)("figcaption",null,"\u8fd0\u884c Rancher Management Server \u7684 RKE Kubernetes \u96c6\u7fa4\u7684\u67b6\u6784"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"\u8fd0\u884c Rancher Management Server \u7684 RKE Kubernetes \u96c6\u7fa4\u7684\u67b6\u6784",src:t(17248).Z,width:"341",height:"322"})),(0,c.kt)("h2",{id:"kubernetes-\u5b89\u88c5\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u63a8\u8350\u914d\u7f6e"},"Kubernetes \u5b89\u88c5\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u63a8\u8350\u914d\u7f6e"),(0,c.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f60\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u548c Ingress Controller \u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u628a Rancher \u7684 DNS \u89e3\u6790\u5230\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\u5668\u5e94\u8be5\u628a TCP/80 \u7aef\u53e3\u548c TCP/443 \u7aef\u53e3\u7684\u6d41\u91cf\u8f6c\u53d1\u5230 Kubernetes \u96c6\u7fa4\u7684\u5168\u90e8 3 \u4e2a\u8282\u70b9\u4e0a\u3002"),(0,c.kt)("li",{parentName:"ul"},"Ingress Controller \u4f1a\u628a HTTP \u91cd\u5b9a\u5411\u5230 HTTPS\uff0c\u5728 TCP/443 \u7aef\u53e3\u7ec8\u7ed3 SSL/TLS\u3002"),(0,c.kt)("li",{parentName:"ul"},"Ingress Controller \u4f1a\u628a\u6d41\u91cf\u8f6c\u53d1\u5230 Rancher deployment \u7684 Pod \u4e0a\u7684 TCP/80 \u7aef\u53e3\u3002")),(0,c.kt)("figcaption",null,"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher\uff0c\u5e76\u4f7f\u7528\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff0cSSL \u7ec8\u6b62\u5728 Ingress Controller \u4e2d"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Rancher HA",src:t(86089).Z,width:"1236",height:"525"})),(0,c.kt)("h2",{id:"kubernetes-\u5b89\u88c5\u73af\u5883"},"Kubernetes \u5b89\u88c5\u73af\u5883"),(0,c.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u628a Rancher \u5b89\u88c5\u5230\u6258\u7ba1\u5728\u4e91\u63d0\u4f9b\u5546\uff08\u5982 AWS EC2 \u548c Google Compute Engine\uff08GCE\uff09\u7b49\uff09\u4e0a\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u3002"),(0,c.kt)("p",null,"\u4e3a\u4e86\u8fbe\u5230\u6700\u4f73\u6027\u80fd\u548c\u5b89\u5168\u6027\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u4e3a Rancher Management Server \u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u7684 Kubernetes \u96c6\u7fa4\u3002\u4e0d\u5efa\u8bae\u5728\u6b64\u96c6\u7fa4\u4e0a\u8fd0\u884c\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u3002\u90e8\u7f72 Rancher \u540e\uff0c\u4f60\u53ef\u4ee5",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u521b\u5efa\u6216\u5bfc\u5165\u96c6\u7fa4"),"\u6765\u8fd0\u884c\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,c.kt)("h2",{id:"kubernetes-\u5b89\u88c5\u7684\u63a8\u8350\u8282\u70b9\u89d2\u8272"},"Kubernetes \u5b89\u88c5\u7684\u63a8\u8350\u8282\u70b9\u89d2\u8272"),(0,c.kt)("p",null,"\u5982\u679c Rancher \u5b89\u88c5\u5728 K3s Kubernetes \u6216 RKE Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u4ee5\u4e0b\u5efa\u8bae\u9002\u7528\u3002"),(0,c.kt)("h3",{id:"k3s-\u96c6\u7fa4\u89d2\u8272"},"K3s \u96c6\u7fa4\u89d2\u8272"),(0,c.kt)("p",null,"\u5728 K3s \u96c6\u7fa4\u4e2d\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u5206\u522b\u662f Server \u8282\u70b9\u548c Agent \u8282\u70b9\u3002\u4f60\u53ef\u4ee5\u628a\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u5230 Server \u8282\u70b9\u548c Agent \u8282\u70b9\u4e0a\u3002Server \u8282\u70b9\u8fd0\u884c Kubernetes master\u3002"),(0,c.kt)("p",null,"\u5bf9\u4e8e\u8fd0\u884c Rancher Management Server \u7684\u96c6\u7fa4\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u4e24\u4e2a server \u8282\u70b9\u3002\u4e0d\u9700\u8981 Agent \u8282\u70b9\u3002"),(0,c.kt)("h3",{id:"rke-\u96c6\u7fa4\u89d2\u8272"},"RKE \u96c6\u7fa4\u89d2\u8272"),(0,c.kt)("p",null,"\u5982\u679c Rancher \u5b89\u88c5\u5728 RKE Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u8be5\u96c6\u7fa4\u5e94\u5177\u6709\u4e09\u4e2a\u8282\u70b9\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u5177\u6709\u6240\u6709\u4e09\u4e2a Kubernetes \u89d2\u8272\uff0c\u5206\u522b\u662f etcd\uff0ccontrolplane \u548c worker\u3002"),(0,c.kt)("h3",{id:"rancher-server-\u548c\u4e0b\u6e38-kubernetes-\u96c6\u7fa4\u7684-rke-\u96c6\u7fa4\u67b6\u6784\u5bf9\u6bd4"},"Rancher Server \u548c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 RKE \u96c6\u7fa4\u67b6\u6784\u5bf9\u6bd4"),(0,c.kt)("p",null,"\u6211\u4eec\u5bf9 Rancher Server \u96c6\u7fa4\u4e0a RKE \u8282\u70b9\u89d2\u8272\u5efa\u8bae\uff0c\u4e0e\u5bf9\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1\u7684\u4e0b\u6e38\u96c6\u7fa4\u7684\u5efa\u8bae\u76f8\u53cd\u3002"),(0,c.kt)("p",null,"\u5728\u914d\u7f6e\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u65f6\uff0cRancher \u4f7f\u7528 RKE \u4f5c\u4e3a\u521b\u5efa\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684\u5de5\u5177\u3002\u6ce8\u610f\uff1aRancher \u5c06\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u6dfb\u52a0\u914d\u7f6e\u4e0b\u6e38 K3s \u96c6\u7fa4\u7684\u529f\u80fd\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ea\u5206\u914d\u4e00\u4e2a\u89d2\u8272\uff0c\u4ee5\u786e\u4fdd\u7a33\u5b9a\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Rancher Server \u96c6\u7fa4\u4e2d\u548c\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684 Kubernetes \u89d2\u8272\u5bf9\u6bd4",src:t(663).Z,width:"801",height:"411"})),(0,c.kt)("p",null,"RKE \u6bcf\u4e2a\u89d2\u8272\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u8282\u70b9\uff0c\u4f46\u5e76\u4e0d\u5f3a\u5236\u6bcf\u4e2a\u8282\u70b9\u53ea\u80fd\u6709\u4e00\u4e2a\u89d2\u8272\u3002\u4f46\u662f\uff0c\u6211\u4eec\u5efa\u8bae\u4e3a\u8fd0\u884c\u5e94\u7528\u7684\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\uff0c\u4f7f\u7528\u5355\u72ec\u7684\u89d2\u8272\uff0c\u4ee5\u4fdd\u8bc1\u5728\u670d\u52a1\u62d3\u5c55\u65f6\uff0cworker \u8282\u70b9\u4e0a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e0d\u5f71\u54cd Kubernetes master \u6216\u96c6\u7fa4\u7684\u6570\u636e\u3002"),(0,c.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u4eec\u5bf9\u4e0b\u6e38\u96c6\u7fa4\u7684\u6700\u4f4e\u914d\u7f6e\u5efa\u8bae\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u4e09\u4e2a\u4ec5\u4f7f\u7528 etcd \u89d2\u8272\u7684\u8282\u70b9")," \uff0c\u4ee5\u5728\u4e09\u4e2a\u8282\u70b9\u4e2d\u5176\u4e2d\u4e00\u4e2a\u53d1\u751f\u6545\u969c\u65f6\uff0c\u4ecd\u80fd\u4fdd\u969c\u96c6\u7fa4\u7684\u9ad8\u53ef\u7528\u6027\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u4e24\u4e2a\u53ea\u6709 controlplane \u89d2\u8272\u7684\u8282\u70b9")," \uff0c\u4ee5\u4fdd\u8bc1 master \u7ec4\u4ef6\u7684\u9ad8\u53ef\u7528\u6027\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u4e00\u4e2a\u6216\u591a\u4e2a\u53ea\u6709 worker \u89d2\u8272\u7684\u8282\u70b9"),"\uff0c\u7528\u4e8e\u8fd0\u884c Kubernetes \u8282\u70b9\u7ec4\u4ef6\uff0c\u4ee5\u53ca\u4f60\u90e8\u7f72\u7684\u670d\u52a1\u6216\u5e94\u7528\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,c.kt)("p",null,"\u5728\u8bbe\u7f6e Rancher Server \u65f6\uff0c\u5728\u4e09\u4e2a\u8282\u70b9\u4e0a\u4f7f\u7528\u5168\u90e8\u8fd9\u4e09\u4e2a\u89d2\u8272\u4e5f\u662f\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5b83\u5141\u8bb8\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"li"},"etcd")," \u8282\u70b9\u6545\u969c\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5b83\u901a\u8fc7\u591a\u4e2a ",(0,c.kt)("inlineCode",{parentName:"li"},"controlplane")," \u8282\u70b9\u6765\u7ef4\u62a4 master \u7ec4\u4ef6\u7684\u591a\u4e2a\u5b9e\u4f8b\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u6b64\u96c6\u7fa4\u4e0a\u6ca1\u6709\u521b\u5efa\u9664 Rancher \u4e4b\u5916\u7684\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,c.kt)("p",null,"\u7531\u4e8e Rancher Server \u96c6\u7fa4\u4e2d\u6ca1\u6709\u90e8\u7f72\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u56e0\u6b64\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u90fd\u4e0d\u9700\u8981\u4f7f\u7528\u6211\u4eec\u51fa\u4e8e\u53ef\u6269\u5c55\u6027\u548c\u53ef\u7528\u6027\u7684\u8003\u8651\uff0c\u800c\u4e3a\u4e0b\u6e38\u96c6\u7fa4\u63a8\u8350\u7684\u67b6\u6784\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u4e0b\u6e38\u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u67e5\u770b",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/checklist-for-production-ready-clusters"},"\u751f\u4ea7\u73af\u5883\u6e05\u5355"),"\u6216",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/best-practices"},"\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,c.kt)("h2",{id:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u67b6\u6784"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u67b6\u6784"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture#4-%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\uff08ACE\uff09"),"\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u521b\u5efa\u4e00\u4e2a\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u7684 FQDN\uff0c\u8fd9\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\u628a\u6d41\u91cf\u8f6c\u5230\u6240\u6709\u89d2\u8272\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"controlplane")," \u7684\u8282\u70b9\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u5728\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u4f7f\u7528\u4e86\u79c1\u6709 CA \u7b7e\u53d1\u7684\u8bc1\u4e66\uff0c\u4f60\u9700\u8981\u63d0\u4f9b CA \u8bc1\u4e66\uff0c\u8fd9\u4e2a\u8bc1\u4e66\u4f1a\u5305\u542b\u5728\u751f\u6210\u7684 kubeconfig \u6587\u4ef6\u4e2d\uff0c\u4ee5\u6821\u9a8c\u8bc1\u4e66\u94fe\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig \u6587\u4ef6"),"\u548c ",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/api-keys#%E5%88%9B%E5%BB%BA-api-%E5%AF%86%E9%92%A5"},"API \u5bc6\u94a5"),"\u7684\u76f8\u5173\u6587\u6863\u3002"),(0,c.kt)("p",null,"\u5728 Rancher 2.6.3 \u4e2d\uff0c\u6ce8\u518c\u7684 RKE2 \u548c K3s \u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528 ACE \u652f\u6301\u3002\u70b9\u51fb",(0,c.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#%E5%AF%B9-rke2-%E5%92%8C-k3s-%E9%9B%86%E7%BE%A4%E7%9A%84%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9%E6%94%AF%E6%8C%81"},"\u8fd9\u91cc"),"\u4e86\u89e3\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u5f00\u542f ACE \u7684\u6b65\u9aa4\u3002"))}k.isMDXComponent=!0},86089:function(e,r,t){r.Z=t.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"},74973:function(e,r,t){r.Z=t.p+"assets/images/k3s-server-storage-d746fa487cbe57d9ac9c5ed69c068f74.svg"},663:function(e,r,t){r.Z=t.p+"assets/images/rancher-architecture-node-roles-d119f0d32608589178cd9bf1375745cc.svg"},52690:function(e,r,t){r.Z=t.p+"assets/images/rancher-architecture-separation-of-rancher-server-b32508a12beee49d72836caa5469e585.svg"},17248:function(e,r,t){r.Z=t.p+"assets/images/rke-server-storage-479a90c18ba2cf4b197554330d05afe8.svg"}}]);