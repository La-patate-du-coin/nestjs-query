"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[69],{9322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"DTOs"},c=void 0,u={unversionedId:"concepts/dtos",id:"concepts/dtos",title:"DTOs",description:"Throughout the documentation you will read about DTOs (Data Transfer Object). If you have never heard of a DTO before you can read about them here",source:"@site/docs/concepts/dtos.md",sourceDirName:"concepts",slug:"/concepts/dtos",permalink:"/nestjs-query/docs/concepts/dtos",draft:!1,editUrl:"https://github.com/La-patate-du-coin/nestjs-query/edit/master/documentation/docs/concepts/dtos.md",tags:[],version:"current",frontMatter:{title:"DTOs"},sidebar:"docs",previous:{title:"Example",permalink:"/nestjs-query/docs/introduction/example"},next:{title:"Queries",permalink:"/nestjs-query/docs/concepts/queries"}},p={},l=[{value:"Why are DTOs separate from the database entity definition?",id:"why-are-dtos-separate-from-the-database-entity-definition",level:2}],d={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Throughout the documentation you will read about DTOs (Data Transfer Object). If you have never heard of a DTO before you can read about them ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaCatalog/dataTransferObject.html"},"here")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," packages there are two types of DTOs referenced."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read DTO - The DTO returned from queries and certain mutations, the read DTO does not typically define validation and is used as the basis for querying and filtering."),(0,o.kt)("li",{parentName:"ol"},"Input DTOs - The DTO used when creating or updating records. The input DTO typically defines user input validation, and a subset of fields from the read DTO that the end user can modify.")),(0,o.kt)("p",null,"To read more about DTOs in graphql check out the ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/dtos"},"DTO docs in the graphql section"),"."),(0,o.kt)("h2",{id:"why-are-dtos-separate-from-the-database-entity-definition"},"Why are DTOs separate from the database entity definition?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"They don't have to be!")),(0,o.kt)("p",null,"Often times the overhead of maintaining two classes that mirror each other is not worth the overhead."),(0,o.kt)("p",null,"As your application grows you may want to separate them to prevent leaking of certain fields, renaming columns or changing your DB definition while making the change in your API passive."),(0,o.kt)("p",null,"It is recommended to create an input DTO to make clear what an end user can specify for input and to make your business logic more concise based on the type you are working with."))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);