"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9091],{1414:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>t,frontMatter:()=>i,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"Operating Systems/Linux Programming/Read&Write in file","title":"Read & Write in File","description":"\u505a\u670d\u52a1\u7aef\u80af\u5b9a\u9700\u8981\u4e0e\u6587\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002\u90a3\u4e48C Language \u662f\u600e\u4e48\u901a\u8fc7\u6807\u51c6\u5e93\u8bfb\u672c\u5730\u6587\u4ef6\u7684\uff0c\u53c8\u662f\u600e\u4e48\u5199\u5165\u672c\u5730\u6587\u4ef6\u7684\u5462\uff1f\u4e00\u822c\u7684\u8ba1\u7b97\u673a\u6587\u4ef6\u5206\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\u548cASCII\u6587\u4ef6\u4e5f\u53eb\u505a\u7eaf\u6587\u672c\u6587\u4ef6\u3002","source":"@site/docs/Operating Systems/Linux Programming/Read&Write in file.md","sourceDirName":"Operating Systems/Linux Programming","slug":"/Operating Systems/Linux Programming/Read&Write in file","permalink":"/docs/Operating Systems/Linux Programming/Read&Write in file","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Process Model","permalink":"/docs/Operating Systems/Linux Programming/ProcessModel"},"next":{"title":"Select system call","permalink":"/docs/Operating Systems/Linux Programming/Select"}}');var r=d(4848),c=d(8453);const i={},l="Read & Write in File",h={},x=[{value:"\u7eaf\u6587\u672c\u6587\u4ef6",id:"\u7eaf\u6587\u672c\u6587\u4ef6",level:2},{value:"\u6253\u5f00\u6587\u4ef6",id:"\u6253\u5f00\u6587\u4ef6",level:3},{value:"\u8bfb\u6587\u4ef6",id:"\u8bfb\u6587\u4ef6",level:2},{value:"\u5199\u6587\u4ef6",id:"\u5199\u6587\u4ef6",level:3},{value:"\u5173\u6587\u4ef6",id:"\u5173\u6587\u4ef6",level:3},{value:"\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u4e8c\u8fdb\u5236\u6587\u4ef6",level:2},{value:"\u6539\u53d8\u6587\u4ef6\u5b57\u7b26\u6d41\u4f4d\u7f6e",id:"\u6539\u53d8\u6587\u4ef6\u5b57\u7b26\u6d41\u4f4d\u7f6e",level:3},{value:"<code>wav</code>\u97f3\u9891\u6587\u4ef6",id:"wav\u97f3\u9891\u6587\u4ef6",level:3},{value:"\u98ce\u9669",id:"\u98ce\u9669",level:2}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"read--write-in-file",children:"Read & Write in File"})}),"\n",(0,r.jsx)(n.p,{children:"\u505a\u670d\u52a1\u7aef\u80af\u5b9a\u9700\u8981\u4e0e\u6587\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002\u90a3\u4e48C Language \u662f\u600e\u4e48\u901a\u8fc7\u6807\u51c6\u5e93\u8bfb\u672c\u5730\u6587\u4ef6\u7684\uff0c\u53c8\u662f\u600e\u4e48\u5199\u5165\u672c\u5730\u6587\u4ef6\u7684\u5462\uff1f\u4e00\u822c\u7684\u8ba1\u7b97\u673a\u6587\u4ef6\u5206\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\u548cASCII\u6587\u4ef6\u4e5f\u53eb\u505a\u7eaf\u6587\u672c\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u5c06\u5206\u522b\u8bb2\u89e3\u7eaf\u6587\u672c\u6587\u4ef6\u4e0e\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u8bfb\u53d6\u4e0e\u5199\u5165"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u7eaf\u6587\u672c\u6587\u4ef6",children:"\u7eaf\u6587\u672c\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u7eaf\u6587\u672c\u6587\u4ef6\u4e00\u822c\u90fd\u662f human readable \u6587\u4ef6, \u54ea\u6015\u662f\u4e71\u7801\u4e5f\u662fhuman readable\u7684\u6587\u4ef6\uff0c\u53ea\u662f\u56e0\u4e3a\u7f16\u7801\u4e0d\u540c\u5bfc\u81f4\u4e71\u7801\u800c\u5f71\u54cd\u6b63\u5e38\u9605\u8bfb\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e71\u7801\uff0c\u6307\u7684\u662f\u7531\u4e8e\u672c\u5730\u8ba1\u7b97\u673a\u5728\u7528\u6587\u672c\u7f16\u8f91\u5668\u6253\u5f00\u6e90\u6587\u4ef6\u65f6\uff0c\u4f7f\u7528\u4e86\u4e0d\u76f8\u5e94\u5b57\u7b26\u96c6\u800c\u9020\u6210\u90e8\u5206\u6216\u6240\u6709\u5b57\u7b26\u65e0\u6cd5\u88ab\u9605\u8bfb\u7684\u4e00\u7cfb\u5217\u5b57\u7b26\u3002\u9020\u6210\u5176\u7ed3\u679c\u7684\u539f\u56e0\u662f\u591a\u79cd\u591a\u6837\u7684\u3002\t- ",(0,r.jsx)(n.a,{href:"https://baike.baidu.com/item/%E4%B9%B1%E7%A0%81/86091?fr=aladdin",children:"\u767e\u5ea6\u767e\u79d1"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6253\u5f00\u6587\u4ef6",children:"\u6253\u5f00\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fdb\u884c\u4e0d\u8bba\u662f \u8bfb\u53d6\u8fd8\u662f\u5199\u5165 \u7684\u64cd\u4f5c\u524d\uff0c\u6211\u4eec\u90fd\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u6587\u4ef6\u5c06\u5176\u6253\u5f00\u3002\u548c\u5176\u4ed6\u6253\u7684\u7f16\u7a0b\u8bed\u8a00\u4e00\u6837\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u6587\u4ef6\u662f\u5426\u80fd\u6253\u5f00\u8fdb\u884c\u62a5\u544a\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728c\u4e2d\uff0c\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u7c7b\u578b\u4e3a",(0,r.jsx)(n.code,{children:"FILE"})," (\u5b57\u7b26\u6d41\u5e38\u5e38\u9700\u8981\u5927\u91cf\u5730\u5740\u53bb\u50a8\u5b58), \u6211\u4eec\u901a\u8fc7",(0,r.jsx)(n.code,{children:"fopen"}),"\u51fd\u6570\u6765\u6253\u5f00\u6587\u4ef6\u5e76\u8fd4\u56de",(0,r.jsx)(n.code,{children:"FILE *"}),"\u5373\u6587\u4ef6\u6d41\u6307\u9488\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fopen"}),"\u51fd\u6570 \u9700\u8981\u4e24\u4e2a\u53c2\u6570\u3002 ",(0,r.jsx)(n.code,{children:"FILE * fopen(char * filename,  char* mode)"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filename"}),": \u76ee\u6807\u6587\u4ef6\u7684\u5730\u5740"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mode"}),": \u6253\u5f00\u6587\u4ef6\u7684\u6a21\u5f0f\uff0c \u5206\u522b\u6709",(0,r.jsx)(n.code,{children:"rwa"}),"\u4e09\u79cd\u57fa\u7840\u6253\u5f00\u65b9\u5f0f, \u52a0\u4e0a",(0,r.jsx)(n.code,{children:"b"}),"\u8868\u793a\u5bf9\u4e8c\u8fdb\u5236(binary)\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u4ee5\u53ca",(0,r.jsx)(n.code,{children:"+"}),"\u7684\u8865\u5145\u6a21\u5f0f","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),"\uff1a\u53ea\u8bfb\u6a21\u5f0f\uff0c\u76ee\u6807\u6587\u4ef6\u5fc5\u987b\u5b58\u5728\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"w"}),"\uff1a\u5199\u5165\u6a21\u5f0f\uff0c\u5982\u679c\u76ee\u6807\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff0c\u5c06\u4f1a\u6e05\u7a7a\u8be5\u6587\u4ef6\uff0c\u5e76\u6807\u4e3a\u65b0\u7684\u7a7a\u6587\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"a"}),"\uff1a\u6269\u5145\u6a21\u5f0f\uff0c\u5c06\u6587\u4ef6\u6269\u5145\u5230\u6307\u5b9a\u6587\u4ef6\u7684\u672b\u5c3e\uff0c\u5982\u679c\u6307\u5b9a\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r+"}),":  \u8bfb+\u5199\uff0c\u76ee\u6807\u6587\u4ef6\u5fc5\u987b\u5b58\u5728\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"w+"}),": \u8bfb+\u5199\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"a+"}),": \u8bfb+\u6269\u5145"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6587\u4ef6\u8bfb\u53d6\u5931\u8d25(",(0,r.jsx)(n.code,{children:"file == NULL"}),")\u9700\u8981\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"fprintf"})," \u51fd\u6570 \u5728",(0,r.jsx)(n.code,{children:"stderr"}),"\u5b57\u7b26\u6d41\u4e2d\uff0c\u4e5f\u5c31\u662fstand error\u4e2d\u8f93\u51fa",(0,r.jsx)(n.code,{children:"Error opening output file"}),"\u6216\u8005\u5176\u4ed6\u62a5\u9519\u4fe1\u606f\u3002",(0,r.jsx)(n.code,{children:"fprintf"}),"\u51fd\u6570\u4ea6\u53ef\u4ee5\u5199\u5165\u6587\u4ef6\uff0c\u6211\u4eec\u5728\u4e4b\u540e\u4f1a\u63d0\u5230\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u6837\u7684\uff0c\u6211\u4eec\u4e5f\u6709\u5176\u4ed6\u7684\u62a5\u9519\u624b\u6bb5\u4f8b\u5982",(0,r.jsx)(n.code,{children:"perror"}),"\uff0c\u6211\u4eec\u6216\u8bb8\u4e4b\u540e\u4f1a\u63d0\u5230"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bfb\u6587\u4ef6",children:"\u8bfb\u6587\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5229\u7528\u4e0a\u6587\u6240\u8bf4\u7684",(0,r.jsx)(n.code,{children:"fopen"}),"\u51fd\u6570\u7528\u53c2\u6570",(0,r.jsx)(n.code,{children:"r"}),"\u6253\u5f00\u6307\u5b9a\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:"fgets"}),"\uff0c ",(0,r.jsx)(n.code,{children:"fgetc"}),"\uff0c ",(0,r.jsx)(n.code,{children:"fscanf"}),"\u7b49\u51fd\u6570 \u53bb\u8bfb\u53d6\u6587\u4ef6\u5b57\u7b26\u6d41"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fgets"}),"\u51fd\u6570 \u9700\u8981 3 \u4e2a\u53c2\u6570\uff0c",(0,r.jsx)(n.code,{children:"char * fgets(char* str, int n, FILE * stream)"}),", \u901a\u8fc7\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488",(0,r.jsx)(n.code,{children:"stream"}),"\u8bfb\u53d6\uff0c\u5f53\u8bfb\u53d6\u5230",(0,r.jsx)(n.code,{children:"(n-1)"}),"\u4e2a\u5b57\u7b26 \u6216 \u8bfb\u53d6\u5230\u6362\u884c\u7b26 \u6216 \u8bfb\u53d6\u5230\u6587\u4ef6\u672b\u5c3e\u65f6\uff0c\u4f1a\u505c\u6b62\uff0c\u5c06\u8bfb\u53d6\u5185\u5bb9\u5b58\u50a8\u81f3 ",(0,r.jsx)(n.code,{children:"str"}),"\u4e2d\u3002\u5982\u679c\u5230\u8fbe\u6587\u4ef6\u672b\u5c3e\u6216\u6ca1\u6709\u8bfb\u5230\u4efb\u4f55\u5b57\u7b26\uff0c\u5c06\u4e0d\u4f1a\u5bf9",(0,r.jsx)(n.code,{children:"str"}),"\u8fdb\u884c\u66f4\u6539\u5e76\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6307\u9488\u3002\u53cd\u4e4b\uff0c\u5c06\u8fd4\u56de\u4e00\u4e2a\u4e0e",(0,r.jsx)(n.code,{children:"str"}),"\u76f8\u540c\u7684\u5b57\u7b26\u4e32\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"str"}),"\uff1a \u5b57\u7b26\u4e32/\u5b57\u7b26\u7684\u6570\u7ec4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"n"}),":  \u4e00\u822c\u4e3a\u6570\u7ec4\u7684\u957f\u5ea6\u3002\u5305\u62ec",(0,r.jsx)(n.code,{children:"\\0"}),"\u6700\u591a\u80fd\u9605\u8bfb",(0,r.jsx)(n.code,{children:"n"}),"\u4e2a\u5b57\u7b26"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"steam"}),": \u76ee\u6807\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fgetc"}),"\u51fd\u6570 \u9700\u8981 1 \u4e2a\u53c2\u6570\uff0c",(0,r.jsx)(n.code,{children:"int fgetc(FILE * stream)"}),", \u8bfb\u53d6\u6587\u4ef6\u5b57\u7b26\u6d41",(0,r.jsx)(n.code,{children:"stream"}),"\u6307\u9488\u6307\u5411\u7684\u4e0b\u4e00\u4e2a\u5b57\u7b26\uff0c\u5c06\u8be5\u5b57\u7b26\u5f3a\u5236\u8f6c\u5316\u4e3a",(0,r.jsx)(n.code,{children:"int"}),"\u7c7b\u578b\u5e76\u8fd4\u56de\uff0c\u628a\u5b57\u7b26\u6d41\u7684\u4f4d\u7f6e\u6807\u8bc6\u7b26\u5411\u524d\u63a8\u52a8\u4e00\u683c\u3002\u5982\u679c\u5230\u8fbe\u6587\u4ef6\u672b\u5c3e\u5219\u8fd4\u56de",(0,r.jsx)(n.code,{children:"EOF"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"steam"}),": \u76ee\u6807\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fscanf"}),"\u51fd\u6570 \u9700\u8981\u81f3\u5c11\u4e09\u4e2a\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"int fscanf(FILE * stream, const char *format, ...)"}),"\uff0c\u8be5\u51fd\u6570\u770b\u7740\u6709\u4e9b\u8bb8\u590d\u6742\uff0c\u8ba9\u6211\u4e3e\u4e2a\u4f8b\u5b50\u8fdb\u884c\u8be6\u89e3.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5047\u8bbe\u5f53\u524d",(0,r.jsx)(n.code,{children:"stream"}),"\u6307\u5411\u6587\u4ef6\u7684\u5f53\u524d\u884c\u663e\u793a\u4e3a",(0,r.jsx)(n.code,{children:"123 abc 123"}),"\uff0c\u4e14\u6211\u4eec\u6709\u4e24\u4e2a",(0,r.jsx)(n.code,{children:"int"}),"\u7c7b\u578b\u7684\u53d8\u91cf",(0,r.jsx)(n.code,{children:"a"}),",",(0,r.jsx)(n.code,{children:"b"}),", \u4ee5\u53ca\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"char *"}),"\u53d8\u91cf",(0,r.jsx)(n.code,{children:"c"}),"\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:'fscanf(stream, "%d %s %d", a,&c,b)'})," \uff0c\u6765\u5206\u522b\u4e3a ",(0,r.jsx)(n.code,{children:"a"}),"\u8bfb\u53d6\u5230",(0,r.jsx)(n.code,{children:"123"}),"\uff0c ",(0,r.jsx)(n.code,{children:"b"}),"\u8bfb\u53d6\u5230",(0,r.jsx)(n.code,{children:"123"}),"\uff0c",(0,r.jsx)(n.code,{children:"c"}),"\u8bfb\u53d6",(0,r.jsx)(n.code,{children:"abc"}),"\u3002\u6b64\u5904:"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"steam"}),": \u76ee\u6807\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n",(0,r.jsx)(n.li,{children:'"%d %s %d"\uff1a\u6309 \u8be5format\u8bfb\u53d6'}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"a"}),"\uff1a \u5bf9\u5e94\u7b2c\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"format"}),"\u7684\u7c7b\u578b\u53d8\u91cf"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"c"}),"\uff1a \u5bf9\u5e94\u7b2c\u4e8c\u4e2a",(0,r.jsx)(n.code,{children:"format"}),"\u7684\u7c7b\u578b\u53d8\u91cf\uff0c\u56e0\u4e3a\u6b64\u5904\u662f\u5b57\u7b26\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u5176\u5730\u5740\u6765\u66f4\u6539\u5176\u503c"]}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5199\u6587\u4ef6",children:"\u5199\u6587\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7eaf\u6587\u672c\u6587\u4ef6\uff0c\u6211\u4eec\u5e38\u7528",(0,r.jsx)(n.code,{children:"fprintf"}),"\u8fdb\u884c\u5b57\u7b26\u7684\u5199\u5165"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fprintf"}),"\u51fd\u6570\u4e0e",(0,r.jsx)(n.code,{children:"fscanf"}),"\u51fd\u6570\u7c7b\u4f3c\uff0c\u9700\u8981\u8c03\u7528\u81f3\u5c11 3 \u4e2a\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"int fprintf(FILE * stream, const char *format, ...)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5047\u8bbe\u6211\u4eec\u6709\u4e24\u4e2a",(0,r.jsx)(n.code,{children:"int"}),"\u7c7b\u578b\u7684\u53d8\u91cf",(0,r.jsx)(n.code,{children:"a = 123"}),",",(0,r.jsx)(n.code,{children:"b = 123"}),", \u4ee5\u53ca\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"char *"})," \u53d8\u91cf",(0,r.jsx)(n.code,{children:"c = \u201cabc\u201d"})," \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:'fprintf(stream, "%d %s %d", a, c, b)'})," \uff0c\u5c063\u4e2a\u53d8\u91cf\u4ee5",(0,r.jsx)(n.code,{children:"format"}),"\u7684\u5f62\u5f0f\u901a\u8fc7",(0,r.jsx)(n.code,{children:"stream"}),"\u6307\u5411\u7684\u4f4d\u7f6e\u5199\u8fdb\u6587\u4ef6\u5b57\u7b26\u6d41\u3002\u6b64\u5904:"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"steam"}),": \u76ee\u6807\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'"%d %s %d"'}),"\uff1a\u6309 \u8be5format\u8bfb\u53d6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"a"}),"\uff1a \u5bf9\u5e94\u7b2c\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"format"}),"\u7684\u7c7b\u578b\u53d8\u91cf"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"c"}),"\uff1a \u5bf9\u5e94\u7b2c\u4e8c\u4e2a",(0,r.jsx)(n.code,{children:"format"}),"\u7684\u7c7b\u578b\u53d8\u91cf"]}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\u6211\u4eec\u4e5f\u6709",(0,r.jsx)(n.code,{children:"fputc"}),"\u4ee5\u53ca",(0,r.jsx)(n.code,{children:"fputs"}),"\u51fd\u6570\u6765\u8fdb\u884c\u5355\u4e2a\u5b57\u7b26\uff0c\u4ee5\u53ca\u5b57\u7b26\u4e32\u7684\u8f93\u5165\u3002\u5206\u522b\u5bf9\u5e94\u7740",(0,r.jsx)(n.code,{children:"fgetc"}),"\u548c",(0,r.jsx)(n.code,{children:"fgets"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5173\u6587\u4ef6",children:"\u5173\u6587\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u6267\u884c\u597d\u6240\u9700\u8981\u7684\u64cd\u4f5c\uff0c\u4e00\u822c\u7684\u9700\u8981\u901a\u8fc7",(0,r.jsx)(n.code,{children:"fclose"}),"\u51fd\u6570\u6765\u5c06\u6587\u4ef6\u6d41\u5173\u95ed\u3002\u5177\u4f53\u7684",(0,r.jsx)(n.code,{children:"int fclose(FILE * stream)"}),"\uff0c\u82e5\u6587\u4ef6\u6d41\u6210\u529f\u5173\u95ed\uff0c\u5c06\u4f1a\u8fd4\u56de0\uff0c\u82e5\u5931\u8d25\u5c06\u4f1a\u8fd4\u56deEOF. \u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u7528\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"int error = fclose(file_stream)"})," \u8fdb\u884c\u989d\u5916\u7684\u9519\u8bef\u5224\u65ad\u3002\u5e76\u5728\u9519\u8bef\u7684\u60c5\u51b5\u4e0b\uff0c\u5411\u6807\u51c6\u8f93\u51fa\u4e2d\u7684 stand error \u8f93\u5165 \u9519\u8bef\u4fe1\u606f\u5e76 \u8f93\u51fa\u4e8e\u7528\u6237\u754c\u9762."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u4e8c\u8fdb\u5236\u6587\u4ef6",children:"\u4e8c\u8fdb\u5236\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u8bb8\u591a\u6587\u4ef6\u662f\u4eba\u7c7b\u65e0\u6cd5\u9605\u8bfb\u7684\uff0c\u6bd4\u5982\u7f16\u8bd1java\u6587\u4ef6\u540e\u7684\u5f97\u5230\u7684class\u6587\u4ef6\uff0cc\u5f97\u5230.o\u6587\u4ef6\uff0c\u5df2\u7ecf\u5404\u79cd\u97f3\u9891\uff0c\u56fe\u7247\u7b49\u6587\u4ef6\u3002\u8fd9\u4e00\u7c7b\u6587\u4ef6\u79f0\u4e4b\u4e3a2\u8fdb\u5236\u6587\u4ef6\uff0c\u56e0\u4e3a\u7535\u8111\u53ef\u8bfb\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728c\u4e2d\uff0c\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u6253\u5f00\u65b9\u5f0f\u4e0e\u7eaf\u6587\u672c\u6587\u4ef6\u51e0\u4e4e\u4e00\u81f4\uff0c\u533a\u522b\u70b9\u5c31\u5728\u4e8e\u9700\u8981\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"b"}),"\u5728",(0,r.jsx)(n.code,{children:"mode"}),"\u4e2d\u6765\u8868\u8fbe\u6211\u4eec\u63a5\u4e0b\u6765\u8981\u5bf9\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u3002\u6b64\u5916\uff0c\u4e8c\u8fdb\u5236\u5e76\u4e0d\u50cf\u7eaf\u6587\u672c\u6587\u4ef6\u4e00\u6837\u6709\u7740\u884c\u7684\u6982\u5ff5\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u6211\u4eec\u5bf9\u7eaf\u6587\u672c\u6587\u4ef6\u7684\u5904\u7406\u65b9\u5f0f\u5728\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0a\u5b8c\u5168\u8d77\u4e0d\u5230\u4f5c\u7528.  \u8bd5\u8bd5\u8fd9\u4e48\u60f3\uff0c\u5982\u679c\u7528",(0,r.jsx)(n.code,{children:"fgetc"})," \u8bfb\u4e00\u683c\u5b57\u7b26\uff0c\u90a3\u4e48\u5230\u5e95\u8bfb\u51fa\u6765\u7684\u662f\u4ec0\u4e48\uff0c\u6211\u4eec\u8bfb\u7684\u662f\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4f46\u662f\u90e8\u5206\u5b57\u7b26\u4e00\u683c\u53ef\u80fd\u5c31\u5360\u597d\u51e0\u4e2a\u5b57\u8282\uff0c\u8bfb\u51fa\u6765\u7684\u4e1c\u897f\u771f\u7684\u662f\u6211\u4eec\u60f3\u8981\u7684\u5417\uff1f"]}),"\n",(0,r.jsxs)(n.p,{children:["\u81f3\u6b64\uff0c\u6211\u4eec\u91c7\u7528",(0,r.jsx)(n.code,{children:"fread"}),"\u51fd\u6570\u6765\u8bfb\u53bb\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u5148\u770b\u6e90\u7801",(0,r.jsx)(n.code,{children:"size_t fread(void *ptr, size_t size, size_t nmemb, FILE * steam)"}),"\uff0c \u8fd9\u8981\u6bd4\u4e4b\u524d\u51e0\u4e2a\u51fd\u6570\u90fd\u8981\u590d\u6742\u4e00\u4e9b\uff0c\u8fd9\u91cc\u7684",(0,r.jsx)(n.code,{children:"size_t"})," \u662f\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"unsigned long int"}),"\u7c7b\u578b\uff0c\u4e00\u822c\u7528\u4f5c\u6570\u7ec4\u7684\u7d22\u5f15, \u5177\u4f53\u7684\u53ef\u4ee5\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/2550774/what-is-size-t-in-c",children:"StackOverflow"}),"\u7684\u56de\u7b54\u3002\u5176\u4e2d:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ptr"}),": \u4e00\u4e2a\u6307\u5411\u81f3\u5c11\u6709 (",(0,r.jsx)(n.code,{children:"nmemb"})," * ",(0,r.jsx)(n.code,{children:"size"}),") \u5185\u5b58\u7684\u6307\u9488\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"size"}),": \u603b\u5171\u5143\u7d20\u6570\u91cf"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nmemb"}),":  \u6307\u5411\u6570\u636e\u7684\u7c7b\u578b\u7684\u5355\u4e2a\u5143\u7d20\u7684\u5927\u5c0f"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stream"}),": \u76ee\u6807\u8bfb\u53d6\u7684\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd0\u884c",(0,r.jsx)(n.code,{children:"fread"}),"\u51fd\u6570\u540e\uff0c\u7a0b\u5e8f\u4f1a\u4ece",(0,r.jsx)(n.code,{children:"stream"}),"\u4e2d\uff0c\u8bfb\u53d6",(0,r.jsx)(n.code,{children:"nmemb"})," * ",(0,r.jsx)(n.code,{children:"size"}),"\u7684\u5143\u7d20\uff0c\u5e76\u5199\u51fa",(0,r.jsx)(n.code,{children:"ptr"}),"\u6240\u6307\u5411\u7684\u5185\u5b58\u4e2d\uff0c\u518d\u8fd4\u56de\u6210\u529f\u8bfb\u53d6\u5143\u7d20\u7684\u6570\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u5199\u5165\uff0c\u6211\u4eec\u91c7\u7528",(0,r.jsx)(n.code,{children:"fwrite"}),"\u51fd\u6570\uff0c\u4e0e",(0,r.jsx)(n.code,{children:"fread"}),"\u51fd\u6570\u7c7b\u4f3c\u3002",(0,r.jsx)(n.code,{children:"size_t fread(void *ptr, size_t size, size_t nmemb, FILE * steam)"})," \u5176\u4e2d:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ptr"}),": \u4e00\u4e2a\u6307\u5411\u81f3\u5c11\u6709 (",(0,r.jsx)(n.code,{children:"nmemb"})," * ",(0,r.jsx)(n.code,{children:"size"}),") \u5185\u5b58\u7684\u6307\u9488\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"size"}),": \u603b\u5171\u5143\u7d20\u6570\u91cf"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nmemb"}),":  \u6307\u5411\u6570\u636e\u7684\u7c7b\u578b\u7684\u5355\u4e2a\u5143\u7d20\u7684\u5927\u5c0f"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stream"}),": \u76ee\u6807\u8bfb\u53d6\u7684\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6267\u884c",(0,r.jsx)(n.code,{children:"fwrite"}),"\u51fd\u6570\u540e\uff0c\u7a0b\u5e8f\u4f1a\u4ece",(0,r.jsx)(n.code,{children:"ptr"}),"\u4e2d\u8bfb\u53d6",(0,r.jsx)(n.code,{children:"nmemb"})," * ",(0,r.jsx)(n.code,{children:"size"}),"\u7684\u5143\u7d20\uff0c\u5199\u5165",(0,r.jsx)(n.code,{children:"stream"}),"\u4e2d\uff0c\u518d\u8fd4\u56de\u6210\u529f\u5199\u5165\u5143\u7d20\u7684\u6570\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u4e3a\u8fd4\u56de\u7684\u662f\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"size_t"}),"\u7c7b\u578b\uff0c\u6240\u4ee5\u9700\u8981\u5408\u7406\u5224\u65ad\u5185\u5bb9\uff0c\u4f8b\u5982\u8fd4\u56de",(0,r.jsx)(n.code,{children:"0"}),"\uff0c\u90a3\u4e48\u6709\u53ef\u80fd\u51fa\u73b0\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6ca1\u6709\u6210\u529f\u8bfb/\u5199\u4efb\u4f55\u9879\u76ee"}),"\n",(0,r.jsxs)(n.li,{children:["(\u5bf9\u4e8e",(0,r.jsx)(n.code,{children:"fread"}),") \u53ef\u80fd\u662f\u8fbe\u5230\u4e86\u6587\u4ef6\u6d41\u7684\u672b\u5c3e"]}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u80fd\u51fa\u73b0\u4e86\u8bfb/\u5199\u51fa\u9519\u7684\u60c5\u51b5"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6539\u53d8\u6587\u4ef6\u5b57\u7b26\u6d41\u4f4d\u7f6e",children:"\u6539\u53d8\u6587\u4ef6\u5b57\u7b26\u6d41\u4f4d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"c\u4e0d\u50cfpython\u4e0d\u53ef\u9006\u8f6c\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u4f4d\u7f6e\uff0c\u6709\u8bb8\u591a\u6807\u51c6\u5e93\u7684\u51fd\u6570\u5c31\u53ef\u4ee5\u8f7b\u677e\u505a\u5230\u6539\u53d8\u4f4d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fseek"}),"\u51fd\u6570\uff0c\u5c06\u76ee\u6807\u6587\u4ef6\u6d41 \u7684 \u6587\u4ef6\u6307\u9488\u4ece\u5f53\u524d\u4f4d\u7f6e\u6307\u5411\u6307\u5b9a\u4f4d\u7f6e\u3002",(0,r.jsx)(n.code,{children:"int fseek(FILE * stream, long int offset, int whence)"})," \u5177\u4f53\u7684:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stream"}),": \u76ee\u6807\u8bfb\u53d6\u7684\u6587\u4ef6\u5b57\u7b26\u6d41\u7684\u6307\u9488"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offset"}),": \u6307\u5b9a\u7684\u504f\u79fb\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"whence"}),": \u6307\u5b9a\u7684\u6587\u4ef6\u4f4d\u7f6e\uff0c\u901a\u5e38\u75313\u4e2a\u5e38\u6570\u51b3\u5b9a:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SEEK_SET"}),": \u6587\u4ef6\u5f00\u5934"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SEEK_CUR"}),": \u6587\u4ef6\u6307\u9488\u7684\u5f53\u524d\u4f4d\u7f6e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SEEK_END"}),": \u6587\u4ef6\u7ed3\u675f"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rewind"})," \u51fd\u6570\uff0c\u5c06\u76ee\u6807\u6587\u4ef6\u6d41 \u7684 \u6587\u4ef6\u6307\u9488\u4ece\u5f53\u524d\u4f4d\u7f6e\u6307\u56de\u5f00\u5934\u3002",(0,r.jsx)(n.code,{children:"void rewind(FILE * stream)"}),"\u5177\u4f53\u7684:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stream"}),"\uff1a \u76ee\u6807\u6587\u4ef6\u6d41\u7684\u6307\u9488"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"wav\u97f3\u9891\u6587\u4ef6",children:[(0,r.jsx)(n.code,{children:"wav"}),"\u97f3\u9891\u6587\u4ef6"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"wav"}),"\u683c\u5f0f\u7684\u97f3\u9891\u6587\u4ef6\u6beb\u65e0\u7591\u95ee\u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u672c\u6587\u5c06\u7528",(0,r.jsx)(n.code,{children:"wav"}),"\u6587\u4ef6\u4f5c\u4e3a\u4f8b\u5b50\u4fee\u6539\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5148\u6765\u8bd5\u542c\u4e00\u4e0b\u51c6\u5907\u4fee\u6539\u7684\u6587\u4ef6"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"http://yorafa.com/wp-content/uploads/2022/02/before.wav",children:"Wav"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4fee\u6539\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u4e86\u89e3",(0,r.jsx)(n.code,{children:"wav"}),"\u6587\u4ef6\u7684\u7ec4\u6210\u3002",(0,r.jsx)(n.code,{children:"wav"}),"\u6587\u4ef6\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\u3002\u9996\u5148\u662f\u5f00\u5934\uff0c\u4e00\u822c\u6b63\u5e38\u6807\u51c6\u7684",(0,r.jsx)(n.code,{children:"wav"}),"\u7684\u5f00\u5934\u753144\u5b57\u8282\u7ec4\u6210\uff0c\u5206\u522b\u4e3a\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u4f4d\u7f6e"}),(0,r.jsx)(n.th,{children:"\u6837\u672c\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1 - 4"}),(0,r.jsx)(n.td,{children:'"RIFF"'}),(0,r.jsx)(n.td,{children:'\u5c06\u6587\u4ef6\u6807\u8bb0\u4e3a"riff"\u6587\u4ef6\uff0c\u6bcf\u4e2a\u5b57\u7b26\u957f\u5ea6\u4e3a1\u5b57\u8282'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5 - 8"}),(0,r.jsx)(n.td,{children:"\u6574\u6570"}),(0,r.jsx)(n.td,{children:"\u6587\u4ef6\u5927\u5c0f(32-bits)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9 -12"}),(0,r.jsx)(n.td,{children:'"WAVE"'}),(0,r.jsx)(n.td,{children:"\u6587\u4ef6\u7c7b\u578b\u5f00\u5934"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13 -16"}),(0,r.jsx)(n.td,{children:'"fmt"'}),(0,r.jsx)(n.td,{children:"\u683c\u5f0f\u5316\u5757"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 - 20"}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"\u4e0a\u8ff0\u683c\u5f0f\u5316\u683c\u5f0f\u7c7b\u578b\u7684\u5927\u5c0f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"21 - 22"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u683c\u5f0f\u7c7b\u578b"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"23 - 24"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"\u901a\u9053\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"25 - 28"}),(0,r.jsx)(n.td,{children:"44100"}),(0,r.jsx)(n.td,{children:"\u91c7\u6837\u7387"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"29 - 32"}),(0,r.jsx)(n.td,{children:"176400"}),(0,r.jsx)(n.td,{children:"\uff08\u91c7\u6837\u7387 * \u6bcf\u4e2a\u6837\u672c\u7684\u4f4d\u6570 * \u901a\u9053\u6570\uff09/8\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"33 - 34"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"x\u4f4d\u58f0\u9053"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"35 - 36"}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"\u6bcf\u4e2a\u6837\u672c\u7684\u4f4d\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"37 - 40"}),(0,r.jsx)(n.td,{children:'"data"'}),(0,r.jsx)(n.td,{children:"\u6570\u636e\u5757"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"41 - 44"}),(0,r.jsx)(n.td,{children:"\u6574\u6570"}),(0,r.jsx)(n.td,{children:"\u6570\u636e\u5757\u7684\u5927\u5c0f"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.del,{children:"\u6211\u4eec\u4e86\u89e3\u8fd9\u4e2a\u597d\u50cf\u6ca1\u6709\u4ec0\u4e48\u7528\uff0c\u9664\u975e\u9700\u8981\u5904\u7406\u8fd9\u79cd\u97f3\u9891\u6587\u4ef6\uff0c\u4f46\u662f\u6211\u4eec\u6709\u66f4\u65b9\u4fbf\u7684\u8f6f\u4ef6\u4e3a\u4ec0\u4e48\u8981\u8bb0\u8fd9\u4e9b\u5462"})}),"\n",(0,r.jsxs)(n.p,{children:["\u572844\u5b57\u8282\u4e4b\u540e\u7684\u5185\u5bb9\u662f\u6211\u4eec\u6240\u542c\u5230\u7684\u5185\u5bb9\uff0c\u4e5f\u662f\u6211\u4eec\u6240\u9700\u8981\u4fee\u6539\u7684\u5185\u5bb9\uff0c\u6839\u636e\u6211\u4e0a\u9762\u6240\u8bb2\u7684\u5185\u5bb9\uff0c\u6765\u8bd5\u7740\u7406\u89e3\u4e00\u4e0b\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5047\u8bbe\u6240\u9700\u8981\u4fee\u6539\u7684",(0,r.jsx)(n.code,{children:"wav"}),"\u6587\u4ef6\u5c31\u5728\u7a0b\u5e8f\u6240\u5728\u7684\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\r\n#define HEADER_SIZE 44\r\nint main(){\r\n    char before_name[] = "before.wav";\r\n    char after_name[] = "after.wav";\r\n    FILE * before_wav, * after_wav;\r\n    short sample;\r\n    short header[HEADER_SIZE];\r\n    int error;\r\n    \r\n    before_wav = fopen(before_name, "rb");\r\n    after_wav = fopen(after_name, "rb");\r\n    /* \u9690\u85cf\u7684\u62a5\u9519 code */\r\n    \r\n    fread(header, HEADER_SIZE, 1, before_wav);//\u5c06\u6307\u9488\u79fb\u5230\u5f00\u5934\u4e4b\u540e\r\n    while(fread(&sample, sizeof(short), 1, before_wav) == 1) { // \u8bfb\u53d6\u6210\u529f\u5c31\u4e00\u76f4\u8bfb\r\n        sample = sample * 100; //bit\u8c03\u6574\u4e3a\u539f\u6765\u7684100\u500d\r\n        error = fwrite(&sample, sizeof(short), 1, after_wav);\r\n        /* \u9690\u85cf\u7684\u62a5\u9519 code */\r\n    }\r\n    /* \u9690\u85cf\u7684\u5173\u95ed\u6587\u4ef6 code */\r\n    return 0;\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u7f16\u8bd1\u5e76\u6267\u884c\u6587\u4ef6\u540e\uff0c\u518d\u6765\u542c\u542c\u4fee\u6539\u8fc7\u7684"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"http://yorafa.com/wp-content/uploads/2022/02/after.wav",children:"After"})}),"\n",(0,r.jsx)(n.p,{children:"\u662f\u4e0d\u662f\u5f88\u201c\u9707\u64bc\u201d\uff1f"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u98ce\u9669",children:"\u98ce\u9669"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u6807\u51c6\u8f93\u51fa(",(0,r.jsx)(n.code,{children:"fprintf"}),",",(0,r.jsx)(n.code,{children:"printf"}),")\u5177\u6709\u4e00\u5b9a\u7684\u98ce\u9669:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u7a0b\u5e8f\u5d29\u6e83\uff0c\u8f93\u51fa\u7ed3\u679c\u4f1a\u4ea7\u751f\u672a\u77e5 \u4f8b\u5982"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u7a0b\u5e8f\u88ab\u5f02\u5e38\u4e2d\u65ad\uff0c\u5176\u6267\u884c\u53ef\u80fd\u4e0d\u4f1a\u5982\u9884\u671f\u4e00\u6837\u8f93\u51fa\u5165\u78c1\u76d8\u6216\u5c4f\u5e55"}),"\n",(0,r.jsx)(n.li,{children:"Debug \u7528\u6807\u51c6\u8f93\u51fa \u4f1a\u5f97\u5230\u4e0d\u53ef\u9760\u7684\u7ed3\u679c"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\uff0c\u7535\u8111\u56e0\u4e3a\u5916\u754c\u539f\u56e0\u5982\u51fa\u73b0\u65ad\u7535\u7b49\u60c5\u51b5\uff0c\u4f1a\u4ea7\u751f\u672a\u77e5\u540e\u679c"}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var s=d(6540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);