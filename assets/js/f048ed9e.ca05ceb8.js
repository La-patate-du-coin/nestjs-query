"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[962],{2978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Getting Started"},s=void 0,p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"Nestjs-Query is collection of packages to make crud for graphql (and potentially other transports) easier.",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/nestjs-query/docs/introduction/getting-started",draft:!1,editUrl:"https://github.com/La-patate-du-coin/nestjs-query/edit/master/documentation/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",next:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"}},u={},c=[{value:"Why?",id:"why",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Packages",id:"packages",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Nestjs-Query is collection of packages to make crud for ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," (and potentially other transports) easier."),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"While working on projects in nestjs it was very easy to get up and running with typeorm and graphql however, there were many patterns that were common between the resolvers. In particular querying, sorting and paging."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Built on top of ",(0,o.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"nestjs")),(0,o.kt)("li",{parentName:"ul"},"Out of the box ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/resolvers"},"CRUD for GraphQL")," using ",(0,o.kt)("a",{parentName:"li",href:"https://typeorm.io/"},"TypeORM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/aggregations"},"Aggregate Queries")," on objects and their relations."),(0,o.kt)("li",{parentName:"ul"},"Out of the box ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/subscriptions"},"subscriptions")," on all ",(0,o.kt)("inlineCode",{parentName:"li"},"CRUD")," operations."),(0,o.kt)("li",{parentName:"ul"},"Support for one to one, one to many, many to one and many to many ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations"},"relations"),"."),(0,o.kt)("li",{parentName:"ul"},"Built in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"dataloader")," avoiding the ",(0,o.kt)("inlineCode",{parentName:"li"},"n+1")," problem"),(0,o.kt)("li",{parentName:"ul"},"Relay ",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/relay/graphql/connections.htm"},"connections")," for paging results")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install"},"installation docs")),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"NestJS-Query is composed of multiple packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/La-patate-du-coin/nestjs-query/tree/master/packages/core"},(0,o.kt)("inlineCode",{parentName:"a"},"@la-patate-du-coin/nestjs-query-core"))," - Defines all interfaces and utility types implemented by the other packages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/La-patate-du-coin/nestjs-query/tree/master/packages/query-graphql"},(0,o.kt)("inlineCode",{parentName:"a"},"@la-patate-du-coin/nestjs-query-graphql"))," - Package that provides the graphql resolver and decorators for crud endpoints."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/La-patate-du-coin/nestjs-query/tree/master/packages/query-typeorm"},(0,o.kt)("inlineCode",{parentName:"a"},"@la-patate-du-coin/nestjs-query-typeorm"))," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"@la-patate-du-coin/nestjs-query-graphql"),".")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);