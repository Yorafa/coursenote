"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6658],{6154:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"Operating Systems/01 process","title":"Process","description":"process: the running program","source":"@site/docs/Operating Systems/01 process.md","sourceDirName":"Operating Systems","slug":"/Operating Systems/01 process","permalink":"/docs/Operating Systems/01 process","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"OS - three piece","permalink":"/docs/Operating Systems/00 intro"},"next":{"title":"System Call","permalink":"/docs/Operating Systems/02 system call"}}');var r=n(4848),c=n(8453);const i={},o="Process",l={},a=[{value:"Process Control Block",id:"process-control-block",level:2},{value:"Process Lifecycle",id:"process-lifecycle",level:2}];function d(e){const s={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"process",children:"Process"})}),"\n",(0,r.jsx)(s.p,{children:"process: the running program"}),"\n",(0,r.jsx)(s.p,{children:"We know process is a executing program. But what exactly inside? A process contains all of the state for a program in exxecution, including:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"address space: store the code and data of the process"}),"\n",(0,r.jsx)(s.li,{children:"program counter: store the address of the next instruction to be executed"}),"\n",(0,r.jsx)(s.li,{children:"stack pointer: store the address of the top of the stack,  local variable, etc."}),"\n",(0,r.jsx)(s.li,{children:"registers: store the values of variables"}),"\n",(0,r.jsx)(s.li,{children:"a set of OS resources: open files, network connections, etc."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"CPU executes the process's instructions, but generally one physical cpu for each process. Why can we have multiple processes? The virtualization. Specifically:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"virtual CPU that executes only the instructions of the current process"}),"\n",(0,r.jsx)(s.li,{children:"virtual memory that holds only the process's code and data"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"OS virtualizes the CPU by time-sharing. The CPU switches between processes, giving each process a slice of time to run. Such switching is called context switch. We will talk about context switch later."}),"\n",(0,r.jsx)(s.h2,{id:"process-control-block",children:"Process Control Block"}),"\n",(0,r.jsxs)(s.p,{children:["OS maintains a data structure called ",(0,r.jsx)(s.strong,{children:"process control block"})," (PCB) for each process. PCB contains all of the information needed to restart a process. Generally, PCB contains:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"process state: running, ready, blocked, etc."}),"\n",(0,r.jsx)(s.li,{children:"program counter: address of next instruction to be executed"}),"\n",(0,r.jsx)(s.li,{children:"CPU registers: must be saved when process is interrupted"}),"\n",(0,r.jsx)(s.li,{children:"CPU scheduling information: priority, etc."}),"\n",(0,r.jsx)(s.li,{children:"memory-management information: page table, etc."}),"\n",(0,r.jsx)(s.li,{children:"accounting information: CPU used, clock time elapsed, etc."}),"\n",(0,r.jsx)(s.li,{children:"I/O status information: open files, etc."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"process-lifecycle",children:"Process Lifecycle"}),"\n",(0,r.jsx)(s.p,{children:"We run a program in three steps:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"create a process, i.e. create new PCB + user address space"}),"\n",(0,r.jsx)(s.li,{children:"load executable: initialize process state and change state to ready"}),"\n",(0,r.jsx)(s.li,{children:"dispatch process: change state to running"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"How does the OS keep track of processes? We can see that state used to describe the process's status and used to manage the process's lifecycle."}),"\n",(0,r.jsx)(s.p,{children:"When the state changes (e.g. from ready to running), we call context switch to switch the CPU to another process. Specifically, we do:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"saving the state of the old process."}),"\n",(0,r.jsx)(s.li,{children:"loading the saved state for the new process."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Generally, the state changing can happen in various ways:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"yield function"}),"\n",(0,r.jsx)(s.li,{children:"system call (e.g. fork, exec, etc.)"}),"\n",(0,r.jsx)(s.li,{children:"timer interrupt"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(6540);const r={},c=t.createContext(r);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);