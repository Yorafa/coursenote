"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1677],{2043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Operating Systems/Linux Programming/IO","title":"IO","description":"The \\"IO\\" standard input and output, and we can easy input/output our data in format by function followedf","source":"@site/docs/Operating Systems/Linux Programming/IO.md","sourceDirName":"Operating Systems/Linux Programming","slug":"/Operating Systems/Linux Programming/IO","permalink":"/docs/Operating Systems/Linux Programming/IO","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Bitwise Operations","permalink":"/docs/Operating Systems/Linux Programming/Bit"},"next":{"title":"Makefiles","permalink":"/docs/Operating Systems/Linux Programming/Makefiles"}}');var i=t(4848),d=t(8453);const s={},c="IO",l={},o=[{value:"Format",id:"format",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"io",children:"IO"})}),"\n",(0,i.jsxs)(n.p,{children:['The "IO" standard input and output, and we can easy input/output our data in format by function followed',(0,i.jsx)(n.code,{children:"f"})]}),"\n",(0,i.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(n.p,{children:["For convenience reason, we want to quick read/write value from ",(0,i.jsx)(n.code,{children:"stdout"})," / ",(0,i.jsx)(n.code,{children:"stdin"})," with variable. We have idea of format."]}),"\n",(0,i.jsxs)(n.p,{children:["For example ",(0,i.jsx)(n.code,{children:'printf("%d\\n", var);'})," print ",(0,i.jsx)(n.code,{children:"int"})," type ",(0,i.jsx)(n.code,{children:"var"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"%d"'}),": define the variable type, if the type of var is different will raise error, but ",(0,i.jsx)(n.code,{children:"char"})," can present ",(0,i.jsx)(n.code,{children:"int"})," by ASCII, vice versa"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"\\n"'}),": mean new line"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"var"}),": the respective variable of format"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"That's is, the format is the string, we can print variable in the given format or scan value write into variable in this way."}),"\n",(0,i.jsxs)(n.p,{children:["For example, we can have some format like ",(0,i.jsx)(n.code,{children:'"the %d person is %c\\n"'}),"  follow two variable to print the result we want, or read from ",(0,i.jsx)(n.code,{children:"stdin"})," we want. Since we define ",(0,i.jsx)(n.code,{children:'"%"'})," to read/write variable, we need know about what value followed to correctly present variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Notice for format that read, for example ",(0,i.jsx)(n.code,{children:'"the %d person is %c\\n"'})," we should input ",(0,i.jsx)(n.code,{children:"the 1 person is A "})," to correctly read ",(0,i.jsx)(n.code,{children:"1"})," and ",(0,i.jsx)(n.code,{children:"A"})," into variable."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Input"}),(0,i.jsx)(n.th,{children:"Meaning"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"c"}),(0,i.jsx)(n.td,{children:"a single character"}),(0,i.jsx)(n.td,{children:"char"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"s"}),(0,i.jsx)(n.td,{children:"a string"}),(0,i.jsx)(n.td,{children:"char *"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"d"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"int"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"f"}),(0,i.jsx)(n.td,{children:"float number"}),(0,i.jsx)(n.td,{children:"float"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"e/E"}),(0,i.jsx)(n.td,{children:"in scientist notation"}),(0,i.jsx)(n.td,{children:"double"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"l/ld/li"}),(0,i.jsx)(n.td,{children:"long integer"}),(0,i.jsx)(n.td,{children:"long"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lf"}),(0,i.jsx)(n.td,{children:"long float"}),(0,i.jsx)(n.td,{children:"double"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"p"}),(0,i.jsx)(n.td,{children:"pointer"}),(0,i.jsx)(n.td,{children:"void *"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Furthermore, we can add extra stuff to print more specific value."}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"int"}),", we can use ",(0,i.jsx)(n.code,{children:"0n"})," to extend the length of number by add 0 at head. For example ",(0,i.jsx)(n.code,{children:'printf("%04d", 1);'})," will have a output ",(0,i.jsx)(n.code,{children:"0001"}),". That's ",(0,i.jsx)(n.code,{children:"0n"})," means extend to ",(0,i.jsx)(n.code,{children:"n"})," length when ",(0,i.jsx)(n.code,{children:"n "})," larger than the length of the variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, for ",(0,i.jsx)(n.code,{children:"float/double"}),",  we can use ",(0,i.jsx)(n.code,{children:".n"})," to specific the decimal place, for example ",(0,i.jsx)(n.code,{children:'printf("%.2f", 1.3459834);'})," will have a output ",(0,i.jsx)(n.code,{children:"1.35"}),". But notice, round will apply for this."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);