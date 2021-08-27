(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2745:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return i}});var r=n(5792),a=n(1703),o=(0,r.createContext)({setTheme:function(e){},themes:[]}),i=function(){return(0,r.useContext)(o)},l=["light","dark"],c="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,i=e.enableSystem,s=void 0===i||i,p=e.enableColorScheme,m=void 0===p||p,v=e.storageKey,g=void 0===v?"theme":v,y=e.themes,b=void 0===y?["light","dark"]:y,w=e.defaultTheme,O=void 0===w?s?"system":"light":w,x=e.attribute,_=void 0===x?"data-theme":x,E=e.value,j=e.children,k=(0,r.useState)((function(){return f(g,O)})),Z=k[0],T=k[1],C=(0,r.useState)((function(){return f(g)})),P=C[0],N=C[1],L=E?Object.values(E):b,M=(0,r.useCallback)((function(e){var n=h(e);N(n),"system"!==Z||t||z(n,!1)}),[Z,t]),S=(0,r.useRef)(M);S.current=M;var z=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==E?void 0:E[e])||e,o=a&&n?d():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&s){var i=h();r=(null==E?void 0:E[i])||i}if(n){var l,c=document.documentElement;"class"===_?((l=c.classList).remove.apply(l,L),c.classList.add(r)):c.setAttribute(_,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return S.current.apply(S,[].slice.call(arguments))},t=window.matchMedia(c);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var B=(0,r.useCallback)((function(e){t?z(e,!0,!1):z(e),T(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&B(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[B]),(0,r.useEffect)((function(){if(m){var e=t&&l.includes(t)?t:Z&&l.includes(Z)?Z:"system"===Z&&P||null;document.documentElement.style.setProperty("color-scheme",e)}}),[m,Z,P,t]),r.default.createElement(o.Provider,{value:{theme:Z,setTheme:B,forcedTheme:t,resolvedTheme:"system"===Z?P:Z,themes:s?[].concat(b,["system"]):b,systemTheme:s?P:void 0}},r.default.createElement(u,{forcedTheme:t,storageKey:g,attribute:_,value:E,enableSystem:s,defaultTheme:O,attrs:L}),j)},u=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,o=e.attribute,i=e.enableSystem,l=e.defaultTheme,s=e.value,u="class"===o?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===o?"d.add("+n+")":"d.setAttribute('"+o+"', "+n+")"},d="system"===l;return r.default.createElement(a.default,null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+u+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+u+"var e=localStorage.getItem('"+n+"');"+(d?"":f(l)+";")+'if("system"===e||(!e&&'+d+')){var t="'+c+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+f(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+u+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+f(s?"x[e]":"e",!0)+"}else{"+f(l)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),f=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(c)),e.matches?"dark":"light"}},9166:function(e,t,n){"use strict";var r=n(2228),a=n(888),o=n(5794),i=n(3068);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.href,n=(0,o.Z)(e,["href"]),r=t&&t.startsWith("/"),l=t&&t.startsWith("#");return r?(0,a.tZ)(i.default,{href:t,children:(0,a.tZ)("a",c({},n))}):l?(0,a.tZ)("a",c({href:t},n)):(0,a.tZ)("a",c({target:"_blank",rel:"noopener noreferrer",href:t},n))}},7994:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(888);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},4202:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o,i,l,c,s,u=n(888),f=n(5792);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y={mail:function(e){return f.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=f.createElement("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"})),a||(a=f.createElement("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})))},github:function(e){return f.createElement("svg",h({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),o||(o=f.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return f.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),i||(i=f.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return f.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),l||(l=f.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return f.createElement("svg",v({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=f.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),s||(s=f.createElement("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})))}},b=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n)return null;var o=y[t];return(0,u.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,u.tZ)("span",{className:"sr-only",children:t}),(0,u.tZ)(o,{className:"fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},9170:function(e,t,n){var r=n(7671),a={title:"Later \u7684\u535a\u5ba2",author:"Later",headerTitle:"Later \u7684\u535a\u5ba2",description:"Later \u7684\u535a\u5ba2",language:"zh-cn",siteUrl:"https://tailwind-nextjs-starter-blog.vercel.app",siteRepo:"https://github.com/timlrx/tailwind-nextjs-starter-blog",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"474151949@qq.com",github:"https://github.com/laterbuy",twitter:"",facebook:"",youtube:"",linkedin:"",locale:"zh-cn",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,googleAnalyticsId:""},comment:{provider:"utterances",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:"laterbuy/blogTalk",issueTerm:"pathname",label:"",theme:"",darkTheme:""},disqus:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},948:function(e,t,n){"use strict";var r=n(8864);t.default=void 0;var a,o=(a=n(5792))&&a.__esModule?a:{default:a},i=n(8414),l=n(5601),c=n(6347);var s={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],l=n[1];return{href:o,as:e.as?i.resolveHref(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),O=r(w,2),x=O[0],_=O[1],E=o.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);o.default.useEffect((function(){var e=_&&n&&i.isLocalURL(d),t="undefined"!==typeof y?y:a&&a.locale,r=s[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,_,y,n,a]);var j={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:l}))}(e,a,d,h,m,v,g,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:a&&a.locale,Z=a&&a.isLocaleDomain&&i.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);j.href=Z||i.addBasePath(i.addLocale(h,k,a&&a.defaultLocale))}return o.default.cloneElement(t,j)};t.default=f},6347:function(e,t,n){"use strict";var r=n(8864);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),s=a.useState(!1),u=r(s,2),f=u[0],d=u[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=n(5792),o=n(2096),i="undefined"!==typeof IntersectionObserver;var l=new Map},2828:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r,a,o,i=n(888),l=n(2228),c=(n(5973),n(2745)),s=n(1703),u=n(3156),f=n(9170),d=n.n(f),h=function(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(u.default,{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(d().analytics.googleAnalyticsId)}),(0,i.tZ)(u.default,{strategy:"lazyOnload",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(d().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})},p=function(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(u.default,{strategy:"lazyOnload","data-domain":d().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,i.tZ)(u.default,{strategy:"lazyOnload",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},m=function(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(u.default,{strategy:"lazyOnload",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,i.tZ)(u.default,{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},v=function(){return(0,i.BX)(i.HY,{children:[d().analytics.plausibleDataDomain&&(0,i.tZ)(p,{}),d().analytics.simpleAnalytics&&(0,i.tZ)(m,{}),d().analytics.googleAnalyticsId&&(0,i.tZ)(h,{})]})},g=n(8113),y=[{href:"/blog",title:"\u6587\u7ae0"},{href:"/tags",title:"\u6807\u7b7e"},{href:"/projects",title:"\u9879\u76ee"},{href:"/about",title:"\u5173\u4e8e"}],b=n(5792);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=function(e){return b.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"344.564 330.278 111.737 91.218",width:53.87,height:43.61},e),r||(r=b.createElement("defs",null,b.createElement("linearGradient",{id:"logo_svg__b",gradientUnits:"userSpaceOnUse",x1:420.97,y1:331.28,x2:420.97,y2:418.5},b.createElement("stop",{offset:"0%",stopColor:"#06b6d4"}),b.createElement("stop",{offset:"100%",stopColor:"#67e8f9"})),b.createElement("linearGradient",{id:"logo_svg__d",gradientUnits:"userSpaceOnUse",x1:377.89,y1:331.28,x2:377.89,y2:418.5},b.createElement("stop",{offset:"0%",stopColor:"#06b6d4"}),b.createElement("stop",{offset:"100%",stopColor:"#67e8f9"})),b.createElement("path",{d:"M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14z",id:"logo_svg__a"}),b.createElement("path",{d:"M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14z",id:"logo_svg__c"}))),a||(a=b.createElement("use",{xlinkHref:"#logo_svg__a",fill:"url(#logo_svg__b)"})),o||(o=b.createElement("use",{xlinkHref:"#logo_svg__c",fill:"url(#logo_svg__d)"})))},x=n(9166),_=n(7994),E=n(4202);function j(){return(0,i.tZ)("footer",{children:(0,i.BX)("div",{className:"flex flex-col items-center mt-16",children:[(0,i.BX)("div",{className:"flex mb-3 space-x-4",children:[(0,i.tZ)(E.Z,{kind:"mail",href:"mailto:".concat(d().email),size:"6"}),(0,i.tZ)(E.Z,{kind:"github",href:d().github,size:"6"})]}),(0,i.BX)("div",{className:"flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,i.tZ)("div",{children:d().author}),(0,i.tZ)("div",{children:" \u2022 "}),(0,i.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,i.tZ)("div",{children:" \u2022 "}),(0,i.tZ)(x.Z,{href:"/",children:d().title})]}),(0,i.tZ)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:(0,i.tZ)(x.Z,{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"Tailwind Nextjs Theme"})})]})})}var k=function(){var e=(0,b.useState)(!1),t=e[0],n=e[1],r=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,i.BX)("div",{className:"sm:hidden",children:[(0,i.tZ)("button",{type:"button",className:"w-8 h-8 ml-1 mr-1 rounded","aria-label":"Toggle Menu",onClick:r,children:(0,i.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,i.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,i.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,i.BX)("div",{className:"fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,i.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed w-full h-full cursor-auto focus:outline-none",onClick:r}),(0,i.tZ)("nav",{className:"fixed h-full mt-8",children:y.map((function(e){return(0,i.tZ)("div",{className:"px-12 py-4",children:(0,i.tZ)(x.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title)}))})]})]})},Z=function(){var e=(0,b.useState)(!1),t=e[0],n=e[1],r=(0,c.F)(),a=r.theme,o=r.setTheme,l=r.resolvedTheme;return(0,b.useEffect)((function(){return n(!0)}),[]),(0,i.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",onClick:function(){return o("dark"===a||"dark"===l?"light":"dark")},children:(0,i.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==l?(0,i.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,i.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.children,n={bannerColor:"#151513",octoColor:"#fff"};return"dark"===(0,c.F)().resolvedTheme&&(n={bannerColor:"#fff",octoColor:"#000"}),(0,i.tZ)(_.Z,{children:(0,i.BX)("div",{className:"flex flex-col justify-between h-screen",children:[(0,i.tZ)(g.Z,C({href:"https://github.com/laterbuy"},n)),(0,i.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,i.tZ)("div",{children:(0,i.tZ)(x.Z,{href:"/","aria-label":"Tailwind CSS Blog",children:(0,i.BX)("div",{className:"flex items-center justify-between",children:[(0,i.tZ)("div",{className:"mr-3",children:(0,i.tZ)(O,{})}),"string"===typeof d().headerTitle?(0,i.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:d().headerTitle}):d().headerTitle]})})}),(0,i.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,i.tZ)("div",{className:"hidden sm:block",children:y.map((function(e){return(0,i.tZ)(x.Z,{href:e.href,className:"p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100",children:e.title},e.title)}))}),(0,i.tZ)(Z,{}),(0,i.tZ)(k,{})]})]}),(0,i.tZ)("main",{className:"mb-auto",children:t}),(0,i.tZ)(j,{})]})})};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=e.Component,n=e.pageProps;return(0,i.BX)(c.f,{attribute:"class",children:[(0,i.tZ)(s.default,{children:(0,i.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,i.tZ)(v,{}),(0,i.tZ)(P,{children:(0,i.tZ)(t,L({},n))})]})}},2707:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2828)}])},5973:function(){},1703:function(e,t,n){e.exports=n(1586)},3068:function(e,t,n){e.exports=n(948)},3156:function(e,t,n){e.exports=n(1932)},8235:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxs:function(){return o},jsxDEV:function(){return o}});var r=n(4329),a=0;function o(e,t,n,o,i){var l,c,s={};for(c in t)"ref"==c?l=t[c]:s[c]=t[c];var u={type:e,props:s,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:o,__self:i};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===s[c]&&(s[c]=l[c]);return r.YM.vnode&&r.YM.vnode(u),u}},7671:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],s=!1,u=-1;function f(){s&&l&&(s=!1,l.length?c=l.concat(c):u=-1,c.length&&d())}function d(){if(!s){var e=i(f);s=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||s||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},8113:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5792),i=c(o),l=c(n(3631));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f="____GITHUB_CORNER_SUPER_SECRET___",d=(0,l.default)(),h=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){if(!document.getElementById(f)){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.id=f,t.styleSheet?t.styleSheet.cssText=d:t.appendChild(document.createTextNode(d)),e.appendChild(t)}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.size,a=e.direction,o=e.octoColor,l=e.bannerColor,c=e.ariaLabel,s=e.className,u=e.svgStyle,f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["href","size","direction","octoColor","bannerColor","ariaLabel","className","svgStyle"]),d={position:"absolute",top:0,fill:o},h={},p="",m="",v="";"left"===a?(p="M250 0L135 115h-15l-12 27L0 250V0z",m="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16",v="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z",d.left=0,h.WebkitTransformOrigin="120px 144px",h.transformOrigin="120px 144px"):(p="M0 0l115 115h15l12 27 108 108V0z",m="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",v="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z",d.right=0,h.WebkitTransformOrigin="130px 106px",h.transformOrigin="130px 106px");var g="string"===typeof s?" "+s:"";return i.default.createElement("a",r({},f,{href:t,className:"github-corner"+g,"aria-label":c}),i.default.createElement("svg",{width:n,height:n,viewBox:"0 0 250 250",style:r({},d,u)},i.default.createElement("path",{className:"octo-banner",d:p,fill:l}),i.default.createElement("path",{className:"octo-arm",d:m,style:h}),i.default.createElement("path",{className:"octo-body",d:v})))}}]),t}(o.Component);h.defaultProps={href:"/",size:80,direction:"right",octoColor:"#fff",bannerColor:"#151513",ariaLabel:"Open GitHub project"},t.Z=h},3631:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n"}},2228:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},5794:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},888:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.Fragment},tZ:function(){return r.jsx},BX:function(){return r.jsxs}});var r=n(8235)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(2707),t(5601)}));var n=e.O();_N_E=n}]);