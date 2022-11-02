/*! For license information please see 85c43aa7.c2802391.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[658],{3612:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(7294),o=t(6010),r=t(5281),a=t(5999);const s="admonition_LlT9",c="admonitionHeading_tbUL",l="admonitionIcon_kALy",d="admonitionContent_S0QG";const m={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},h={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>{var n;return i.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),o=i.createElement(i.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:o}}(e.children);return{...e,title:e.title??n,children:t}}function u(e){const{children:n,type:t,title:a,icon:u}=p(e),f=function(e){const n=h[e]??e;return m[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),m.info)}(t),x=a??f.label,{iconComponent:j}=f,v=u??i.createElement(j,null);return i.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,s)},i.createElement("div",{className:c},i.createElement("span",{className:l},v),x),i.createElement("div",{className:d},n))}},5805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});t(7294);var i=t(5893),o=t(1151),r=t(3612);const a={sidebar_position:2,title:"\u0627\u0644\u0639\u0646\u0627\u0635\u0631"},s=void 0,c={unversionedId:"components",id:"components",title:"\u0627\u0644\u0639\u0646\u0627\u0635\u0631",description:"note",source:"@site/docs/components.mdx",sourceDirName:".",slug:"/components",permalink:"/docs/components",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u0627\u0644\u0639\u0646\u0627\u0635\u0631"},sidebar:"tutorialSidebar",previous:{title:"\u0645\u0642\u062f\u0645\u0629",permalink:"/docs/"},next:{title:"codeblocks",permalink:"/docs/category/codeblocks"}},l={},d=[];function m(e){const n=Object.assign({p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{type:"note",title:"\u0645\u0644\u0627\u062d\u0638\u0629",children:(0,i.jsx)(n.p,{children:"note"})}),"\n",(0,i.jsx)(r.Z,{type:"tip",title:"\u0646\u0635\u064a\u062d\u0629",children:(0,i.jsx)(n.p,{children:"tip"})}),"\n",(0,i.jsx)(r.Z,{type:"info",title:"\u0645\u0639\u0644\u0645\u0648\u0629",children:(0,i.jsx)(n.p,{children:"info"})}),"\n",(0,i.jsx)(r.Z,{type:"caution",title:"\u0627\u062d\u0630\u0631",children:(0,i.jsx)(n.p,{children:"warn"})}),"\n",(0,i.jsx)(r.Z,{type:"danger",title:"\u062e\u0637\u0631",children:(0,i.jsx)(n.p,{children:"danger"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Epcot Center"}),(0,i.jsx)("p",{children:(0,i.jsx)(n.p,{children:"Epcot is a theme park at Walt Disney World Resort featuring exciting\nattractions, international pavilions, award-winning fireworks and seasonal\nspecial events."})})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"#"}),(0,i.jsx)(n.th,{children:"First"}),(0,i.jsx)(n.th,{children:"Last"}),(0,i.jsx)(n.th,{children:"Handle"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Mark"}),(0,i.jsx)(n.td,{children:"Otto"}),(0,i.jsx)(n.td,{children:"@mdo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Jacob"}),(0,i.jsx)(n.td,{children:"Thornton"}),(0,i.jsx)(n.td,{children:"@fat"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Larry"}),(0,i.jsx)(n.td,{children:"the Bird"}),(0,i.jsx)(n.td,{children:"@twitter"})]})]})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(m,e)})):m(e)}},5251:(e,n,t)=>{t(7418);var i=t(7294),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),n.Fragment=r("react.fragment")}var a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,r={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:o,type:e,key:l,ref:d,props:r,_owner:a.current}}n.jsx=l,n.jsxs=l},5893:(e,n,t)=>{e.exports=t(5251)},1151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>r});var i=t(7294);const o=i.createContext({});function r(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s=r(e);return t&&(s=e||a),i.createElement(o.Provider,{value:s},n)}}}]);