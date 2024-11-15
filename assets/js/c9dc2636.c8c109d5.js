"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9507],{1581:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Database/4 Storage Models & Compression","title":"Storage Models & DataS Compression","description":"Database Workloads","source":"@site/docs/Database/4 Storage Models & Compression.md","sourceDirName":"Database","slug":"/Database/4 Storage Models & Compression","permalink":"/docs/Database/4 Storage Models & Compression","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Database Storage","permalink":"/docs/Database/3 Database Storage"},"next":{"title":"SQL RECURSIVE","permalink":"/docs/Database/SQL RECURSIVE"}}');var o=s(4848),n=s(8453);const r={},l="Storage Models & DataS Compression",i={},d=[{value:"Database Workloads",id:"database-workloads",level:2},{value:"Storage Models",id:"storage-models",level:2},{value:"N-ary Storage Model (NSM)",id:"n-ary-storage-model-nsm",level:3}];function c(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"storage-models--datas-compression",children:"Storage Models & DataS Compression"})}),"\n",(0,o.jsx)(a.h2,{id:"database-workloads",children:"Database Workloads"}),"\n",(0,o.jsxs)(a.p,{children:["The file storage we talked about are ideal for write-heavy workloads (i.e. ",(0,o.jsx)(a.code,{children:"INSERT/UPDATE/DELETE"}),"), but how about read workload (i.e. ",(0,o.jsx)(a.code,{children:"SELECT"}),"). The relationnal model does not specify that DBMS store all attributes of a tuple in a single page, so this may not be the best layout for some workloads."]}),"\n",(0,o.jsx)(a.p,{children:"On-Line Transaction Processing (OLTP) (usually build first)"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Features of OLTP: fast operations that only read/update a small amount of data each time."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"On-Line Analytical Processing (OLAP)"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Features of OLAP: Complex queries that read a lot of data to compute an aggregate result"}),"\n",(0,o.jsx)(a.li,{children:"collect data from OLTP and aggregate them"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Hybrid Transactional and Analytical Processing (HTAP)"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Features of HTAP: a mix of OLTP and OLAP workloads"}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"storage-models",children:"Storage Models"}),"\n",(0,o.jsx)(a.p,{children:"A DBMS's storage model specifies how it physically organizes tuples on disk and in memory."}),"\n",(0,o.jsx)(a.h3,{id:"n-ary-storage-model-nsm",children:"N-ary Storage Model (NSM)"}),"\n",(0,o.jsx)(a.p,{children:"Use this model, the DBMS will stores almost all attributes of a single tuple contiguously in a single page. This model also known as row storage model."}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"ideal for OLTP workloads because it is efficient for retrieving a single tuple"}),"\n",(0,o.jsx)(a.li,{children:"typically with page size multiple of 4KB"}),"\n",(0,o.jsx)(a.li,{children:"store tuples' fixed-length and variable-length attributes in a single slotted page"}),"\n",(0,o.jsx)(a.li,{children:"tuples are identified by their record id (page#, slot#)"}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>l});var t=s(6540);const o={},n=t.createContext(o);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);