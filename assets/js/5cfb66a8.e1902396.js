"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3764],{2951:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Leetcode/1063","title":"1063","description":"\u5355\u8c03\u6808 \u52a0\u503c\u592a\u96be\u60f3\u5230\u600e\u4e48\u52a0\u3002","source":"@site/docs/Leetcode/1063.md","sourceDirName":"Leetcode","slug":"/Leetcode/1063","permalink":"/docs/Leetcode/1063","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"SSH","permalink":"/docs/DevOps/SSH"},"next":{"title":"1121","permalink":"/docs/Leetcode/1121"}}');var r=n(4848),a=n(8453);const i={},c="Intuition",l={},o=[];function d(e){const s={annotation:"annotation",code:"code",h1:"h1",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u5355\u8c03\u6808 \u52a0\u503c\u592a\u96be\u60f3\u5230\u600e\u4e48\u52a0\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u8fd9\u9053\u9898\u6211\u521a\u5f00\u59cb\u60f3\u7684\u662f\u65e2\u7136\u662fsubarray\uff0c\u90a3\u4e48\u4ee5\u88abstack pop\u51fa\u6765\u7684\u503c\u4e3ahead\u6700\u5927\u4e5f\u53ea\u80fd\u5230\u5f53\u524d(\u56e0\u4e3a\u5f53\u524d < \u88abpop\u503c) \u6240\u4ee5\u7ed3\u679cpop\u503c\u548c\u5f53\u524d\u503c\u7684\u8ddd\u79bb\u3002\u7136\u540e\u6700\u540e\u6808\u4e0d\u662f\u7a7a\u7684\u8bdd\u518d\u7b97\u4e00\u904d\uff0c\u6700\u540e\u7ed3\u679c + 1 \uff08\u52a0\u81ea\u5df1)"}),"\n",(0,r.jsx)(s.p,{children:"\u8865\u5145: \u4e2d\u9014\u56e0\u4e3a\u5fd8\u4e86\u81ea\u5df1\u672c\u8eab\u5df2\u7ecf\u52a0\u8fdb\u53bb\u4e86\uff0c\u6539\u6765\u6539\u53bb\u6ca1\u6539\u5bf9\uff0c\u53bb\u770b\u4e86\u9898\u89e3\u53d1\u73b0\u76f4\u63a5\u52a0stack size\u4e5f\u662f\u5bf9\u7684\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u8bb0\u6709\u54ea\u4e9bsubarray\u800c\u975e\u6211\u539f\u6765\u8bb0\u4ece\u54ea\u91cc\u5f00\u59cb\u53ef\u4ee5\u591a\u5c11\u79cd\u3002"}),"\n",(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"intuition",children:"Intuition"})}),"\n",(0,r.jsxs)(s.p,{children:["Let ",(0,r.jsx)(s.code,{children:"nums[j]"})," be the leftmost, see how far it can be. If some idx ",(0,r.jsx)(s.code,{children:"i"})," with value ",(0,r.jsx)(s.code,{children:"nums[i]"})," smaller than ",(0,r.jsx)(s.code,{children:"nums[j]"}),", then we know there exists ",(0,r.jsx)(s.code,{children:"i - j"})," subarrays can start from ",(0,r.jsx)(s.code,{children:"j"}),"."]}),"\n",(0,r.jsx)(s.h1,{id:"approach",children:"Approach"}),"\n",(0,r.jsx)(s.p,{children:"Use monotonic stack to store value, here we take increasing."}),"\n",(0,r.jsx)(s.h1,{id:"complexity",children:"Complexity"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Time complexity:\r\n",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"O"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,r.jsxs)(s.li,{children:["Space complexity:\r\n",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"O"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,r.jsx)(s.h1,{id:"code",children:"Code"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-c++",children:"class Solution {\r\npublic:\r\n\r\n\xa0 \xa0 int validSubarrays(vector<int>& nums) {\r\n\xa0 \xa0 \xa0 \xa0 int res = 0, n = nums.size();\r\n\xa0 \xa0 \xa0 \xa0 stack<int> st;\r\n\xa0 \xa0 \xa0 \xa0 for (int i = 0; i < n; i++){\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 while(st.size() && nums[st.top()] > nums[i]){\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 // top of stack is j\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 auto curr = st.top(); st.pop();\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 res += i - curr; // not include i\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 }\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 st.push(i);\r\n\xa0 \xa0 \xa0 \xa0 }\r\n\xa0 \xa0 \xa0 \xa0 auto last = st.top(); st.pop();\r\n\xa0 \xa0 \xa0 \xa0 while(st.size() && nums[st.top()] <= nums[last]){\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 auto curr = st.top(); st.pop();\r\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 res += last - curr + 1; // include last\r\n\xa0 \xa0 \xa0 \xa0 }\r\n\xa0 \xa0 \xa0 \xa0 return res + 1; // include [last] self\r\n\xa0 \xa0 }\r\n};\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(6540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);