"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5364],{4203:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Operating Systems/05 Scheduling","title":"Scheduling","description":"We talked Scheduling before, but never introduce it formally. Scheduling is the allocation of processors to processes (or threads) over time. It\'s the key of multiprogramming. Why?","source":"@site/docs/Operating Systems/05 Scheduling.md","sourceDirName":"Operating Systems","slug":"/Operating Systems/05 Scheduling","permalink":"/docs/Operating Systems/05 Scheduling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Synchronization","permalink":"/docs/Operating Systems/04 Synchronization"},"next":{"title":"Memory Management","permalink":"/docs/Operating Systems/06 Memory Management"}}');var a=i(4848),l=i(8453);const t={},r="Scheduling",c={},h=[{value:"Some non-preemptive scheduling policies",id:"some-non-preemptive-scheduling-policies",level:2},{value:"First-Come-First-Served (FCFS)",id:"first-come-first-served-fcfs",level:3},{value:"Shortest Job First (SJF)",id:"shortest-job-first-sjf",level:3},{value:"Some preemptive scheduling policies",id:"some-preemptive-scheduling-policies",level:2},{value:"Round Robin (RR)",id:"round-robin-rr",level:3},{value:"Some others (may preemptive or not)",id:"some-others-may-preemptive-or-not",level:2},{value:"Priority Scheduling",id:"priority-scheduling",level:3},{value:"Multi-level Queue Scheduling",id:"multi-level-queue-scheduling",level:4},{value:"Feedback Scheduling",id:"feedback-scheduling",level:3},{value:"Multi-level Feedback Queue Scheduling",id:"multi-level-feedback-queue-scheduling",level:4},{value:"Proportional-Share Scheduling",id:"proportional-share-scheduling",level:3},{value:"Lottery scheduling",id:"lottery-scheduling",level:4},{value:"Unix CPU scheduling",id:"unix-cpu-scheduling",level:3},{value:"More on scheduling",id:"more-on-scheduling",level:2}];function o(e){const s={annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"scheduling",children:"Scheduling"})}),"\n",(0,a.jsx)(s.p,{children:"We talked Scheduling before, but never introduce it formally. Scheduling is the allocation of processors to processes (or threads) over time. It's the key of multiprogramming. Why?"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"increase CPU utilization and system throughput by overlapping I/O and computation"}),"\n",(0,a.jsx)(s.li,{children:"make progress on multiple tasks concurrently"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Scheduling builds blocks by mechanisms of process states and process queues. And the metrics of scheduling based on performance and fairness. That is, we need to desgin policies to achieve better metrics:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Given more than one runnable process, how do we choose which to run next?"}),"\n",(0,a.jsx)(s.li,{children:"When do we make this decision?"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"We want to have a scheduling policy, for all systems, it satisfies:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Fairness: each thread or process gets a fair share of the CPU"}),"\n",(0,a.jsx)(s.li,{children:"avoid starvation"}),"\n",(0,a.jsx)(s.li,{children:"policy enforcement: usage policies should be enforced"}),"\n",(0,a.jsx)(s.li,{children:"balance: all parts of the system should be kept busy"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"for batch systems, we want to have:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"throughput: maximize jobs completed per unit time"}),"\n",(0,a.jsx)(s.li,{children:"turnaround time: minimize time between job submission and job completion"}),"\n",(0,a.jsx)(s.li,{children:"CPU utilization: keep the CPU as busy as possible"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"for interactive systems, we want to have:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"response time: minimize time between request and response"}),"\n",(0,a.jsx)(s.li,{children:"proportionality: simple taks complete quickly"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"for real-time systems, we want to have:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"meeting deadlines"}),"\n",(0,a.jsx)(s.li,{children:"predictability"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"We have following terms to show the performance of scheduling:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Arrival time: when a thread becomes ready to run"}),"\n",(0,a.jsx)(s.li,{children:"Service time: amount of time required to run a thread to completion"}),"\n",(0,a.jsx)(s.li,{children:"Wait time: time between thread arrival and being scheduled"}),"\n",(0,a.jsxs)(s.li,{children:["Turnaround time (aka time to completion): time between thread arrival and thread completion","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"i.e., wait time + service time"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"some-non-preemptive-scheduling-policies",children:"Some non-preemptive scheduling policies"}),"\n",(0,a.jsx)(s.h3,{id:"first-come-first-served-fcfs",children:"First-Come-First-Served (FCFS)"}),"\n",(0,a.jsx)(s.p,{children:"FCFS is the simplest scheduling policy. Once a process is scheduled, it will run until it blocks or terminates. The policy is easy to implement with FIFO queue of ready. But average wait time is long with Convoy effect (all other processes are blocked by one process)."}),"\n",(0,a.jsx)(s.h3,{id:"shortest-job-first-sjf",children:"Shortest Job First (SJF)"}),"\n",(0,a.jsx)(s.p,{children:"SJF chooses the read with shortest expected processing time (programmer estimate & history statistics). It's provably optimal with respect to average wait time. But long-running tasks may be continually skipped to schedule a shorter task which may lead to starvation."}),"\n",(0,a.jsx)(s.h2,{id:"some-preemptive-scheduling-policies",children:"Some preemptive scheduling policies"}),"\n",(0,a.jsx)(s.h3,{id:"round-robin-rr",children:"Round Robin (RR)"}),"\n",(0,a.jsxs)(s.p,{children:["RR designs for time-sharing systems. It has a circular ready queue so that each thread is allowed to run for time quantum ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"q"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," before being preempted and put back on queue."]}),"\n",(0,a.jsxs)(s.p,{children:["quantum ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"q"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," is critical to choose:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"q"}),(0,a.jsx)(s.mo,{children:"\u2192"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"\u221e"}),(0,a.jsx)(s.mtext,{children:"\u2005\u200a"}),(0,a.jsx)(s.mo,{children:"\u27f9"}),(0,a.jsx)(s.mtext,{children:"\u2005\u200a"}),(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mo,{children:"\u2192"}),(0,a.jsx)(s.mi,{children:"F"}),(0,a.jsx)(s.mi,{children:"C"}),(0,a.jsx)(s.mi,{children:"F"}),(0,a.jsx)(s.mi,{children:"S"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"q\\to \\infty \\implies RR\\to FCFS"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.549em",verticalAlign:"-0.024em"}}),(0,a.jsx)(s.span,{className:"mord",children:"\u221e"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u27f9"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"RR"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"FCFS"})]})]})]})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"q"}),(0,a.jsx)(s.mo,{children:"\u2192"}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mtext,{children:"\u2005\u200a"}),(0,a.jsx)(s.mo,{children:"\u27f9"}),(0,a.jsx)(s.mtext,{children:"\u2005\u200a"}),(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mo,{children:"\u2192"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"q\\to 0 \\implies RR\\to"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6684em",verticalAlign:"-0.024em"}}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u27f9"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"RR"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u2192"})]})]})]})," overhead of switching overwhelms useful time"]}),"\n",(0,a.jsxs)(s.li,{children:["want ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"q"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," be large with respect to the context switch time"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"some-others-may-preemptive-or-not",children:"Some others (may preemptive or not)"}),"\n",(0,a.jsx)(s.h3,{id:"priority-scheduling",children:"Priority Scheduling"}),"\n",(0,a.jsxs)(s.p,{children:["We define a priority ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"p"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"})]})})]})," to be associated with each thread whereas highest priority job is selected from ready queue first."]}),"\n",(0,a.jsx)(s.p,{children:"To enforce this policy, we need to focus:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"priority inversion: a low priority task may prevent a high priority task,"}),"\n",(0,a.jsx)(s.li,{children:"starvation: a thread may never be scheduled"}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"multi-level-queue-scheduling",children:"Multi-level Queue Scheduling"}),"\n",(0,a.jsx)(s.p,{children:"To make more efficient of priority scheduling, we can have multiple queues where one per priority level. In this policy, processes are permanently assigned to a queue and each queue can has its own scheduling algorithm. Top-lvl scheduler picks queues in priority order."}),"\n",(0,a.jsx)(s.p,{children:"But, the priority of a job may change over time, we cannot always assign a job to a fixed queue."}),"\n",(0,a.jsx)(s.h3,{id:"feedback-scheduling",children:"Feedback Scheduling"}),"\n",(0,a.jsx)(s.p,{children:"Feedback uses the policy that adjust criteria for choosing a particular process based on history."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"can boost priority of processes that have waited a long time"}),"\n",(0,a.jsx)(s.li,{children:"can prefer processes that do not use full quantum"}),"\n",(0,a.jsx)(s.li,{children:"can boost priority following a user-input event"}),"\n",(0,a.jsx)(s.li,{children:"can adjust expected next-CPU-burst"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Problem: Loophole(process may fake certain behavior to increase its priority)."}),"\n",(0,a.jsx)(s.h4,{id:"multi-level-feedback-queue-scheduling",children:"Multi-level Feedback Queue Scheduling"}),"\n",(0,a.jsx)(s.p,{children:"Combine multi-level queue and feedback scheduling. We have multiple queues with different priorities and feedback scheduling within each queue."}),"\n",(0,a.jsx)(s.h3,{id:"proportional-share-scheduling",children:"Proportional-Share Scheduling"}),"\n",(0,a.jsx)(s.p,{children:"This policy groups processes by user or some other means. It ensures that each group receives a proportional share of the CPU (not necessarily equal)."}),"\n",(0,a.jsx)(s.h4,{id:"lottery-scheduling",children:"Lottery scheduling"}),"\n",(0,a.jsx)(s.p,{children:"Lottery scheduling is a proportional-share scheduling policy."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Each group is assigned tickets according to its share"}),"\n",(0,a.jsx)(s.li,{children:"hold a lottery to find next process to run"}),"\n",(0,a.jsx)(s.li,{children:"each group can assign tickets to its processes as it chooses"}),"\n",(0,a.jsx)(s.li,{children:"a process can loan its tickets to another process"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"unix-cpu-scheduling",children:"Unix CPU scheduling"}),"\n",(0,a.jsx)(s.p,{children:"This policy favores interactive processes and every new processes initially has a small slices CPU. The more CPU time a process accumulated, the lower its priority. The rescheuling occurs once every 0.1 seconds and priority is recomputed at the end of every time slice."}),"\n",(0,a.jsx)(s.h2,{id:"more-on-scheduling",children:"More on scheduling"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"MLFQ with RR within each priority queue"}),"\n",(0,a.jsxs)(s.li,{children:["Linux (2.4) CPU Scheduling","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["2 separate process scheduling policies","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"real-time: FIFO, RR, and other"}),"\n",(0,a.jsx)(s.li,{children:"time-sharing: prioritized, credit-based algorithm"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["Linux 2.6 CPU Scheduling","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"140 queues, 0-99 for real-time, 100-139 for time-sharing"}),"\n",(0,a.jsx)(s.li,{children:"each priority queue has its own time slice"}),"\n",(0,a.jsx)(s.li,{children:"a thread stays active until uses up its time slice"}),"\n",(0,a.jsx)(s.li,{children:"after running, priority and time clice recalculated and moved to a set of expired priority queues"}),"\n",(0,a.jsx)(s.li,{children:"when all active queues are empty, expired queues become active"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.li,{children:"Linux Completely Fair Scheduler (CFS)"}),"\n",(0,a.jsx)(s.li,{children:"Windows NT CPU Scheduling"}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>r});var n=i(6540);const a={},l=n.createContext(a);function t(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);