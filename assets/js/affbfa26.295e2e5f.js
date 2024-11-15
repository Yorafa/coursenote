"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6866],{5929:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"Algorithm & Data Structure/csc263/Ordered Set","title":"Ordered Set","description":"An augmented AVL Trees, where for each node we have a new attribute node named count.","source":"@site/docs/Algorithm & Data Structure/csc263/Ordered Set.md","sourceDirName":"Algorithm & Data Structure/csc263","slug":"/Algorithm & Data Structure/csc263/Ordered Set","permalink":"/docs/Algorithm & Data Structure/csc263/Ordered Set","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Minimum Spanning Tree","permalink":"/docs/Algorithm & Data Structure/csc263/Minimum Spanning Tree"},"next":{"title":"Priority Queue","permalink":"/docs/Algorithm & Data Structure/csc263/Priority Queue"}}');var r=n(4848),a=n(8453);const c={},l="Ordered Set",i={},m=[{value:"Implement",id:"implement",level:2},{value:"Worst-Case Time complexity",id:"worst-case-time-complexity",level:2}];function d(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"ordered-set",children:"Ordered Set"})}),"\n",(0,r.jsx)(s.p,{children:"An augmented AVL Trees, where for each node we have a new attribute node named count."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"rank(k):"})," return k's position from bottom"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"select(r):"})," return the object on r from bottom"]}),"\n",(0,r.jsxs)(s.p,{children:["e.g. for ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"{"}),(0,r.jsx)(s.mn,{children:"27"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"50"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"15"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"9"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"34"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"12"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"}"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\{27,50,15,9,34,12\\}"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mopen",children:"{"}),(0,r.jsx)(s.span,{className:"mord",children:"27"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"50"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"15"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"9"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"34"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"12"}),(0,r.jsx)(s.span,{className:"mclose",children:"}"})]})})]}),"  ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"r"}),(0,r.jsx)(s.mi,{children:"a"}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mi,{children:"k"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mn,{children:"34"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"5"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mi,{children:"e"}),(0,r.jsx)(s.mi,{children:"l"}),(0,r.jsx)(s.mi,{children:"e"}),(0,r.jsx)(s.mi,{children:"c"}),(0,r.jsx)(s.mi,{children:"t"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mn,{children:"3"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"15"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"rank(34) = 5, select(3) = 15"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"ank"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord",children:"34"}),(0,r.jsx)(s.span,{className:"mclose",children:")"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord",children:"5"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"se"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"ec"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord",children:"3"}),(0,r.jsx)(s.span,{className:"mclose",children:")"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(s.span,{className:"mord",children:"15"})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"implement",children:"Implement"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Insert:"})," after insert node, update the count of nodes."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Rank:"})," Since the order always maintain, then we can just direct count the number of node to get rank. If k exists, then we start with a residue with 0. Whenever we compare with current root we update residue:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"if root equal to k, then the rank equal to its left tree's count + residue + 1."}),"\n",(0,r.jsx)(s.li,{children:"If root less than k, then residue = residue + root's left tree's count + 1, and then move forward to compare with right tree"}),"\n",(0,r.jsx)(s.li,{children:"if root greater than k, then move forward to compare with left tree"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Select:"})," similar idea with rank, but compare with nodes' count:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"if 1 + root left tree's count + residue  == r, then root is what we want"}),"\n",(0,r.jsx)(s.li,{children:"if 1 + root left tree's count + residue > r,  residue = residue + root's left tree's count + 1,  and then we move forward to compare with right tree"}),"\n",(0,r.jsx)(s.li,{children:"if 1 + root left tree's count + residue < r, then we move forward to compare with left tree"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"worst-case-time-complexity",children:"Worst-Case Time complexity"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Operation"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Time Complexity"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Rank"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"O(log n)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Select"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"O(log n)"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var t=n(6540);const r={},a=t.createContext(r);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);