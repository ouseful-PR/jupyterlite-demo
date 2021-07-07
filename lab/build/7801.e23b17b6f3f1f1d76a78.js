(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7801],{30810:(e,s,t)=>{"use strict";t.d(s,{t:()=>r});var n=t(65246),a=t(66065);class r extends n.I{constructor(e){super(e),this._evalFunc=new Function("window","code","return window.eval(code);"),this._ready=new a.PromiseDelegate,this._iframe=document.createElement("iframe"),this._iframe.style.visibility="hidden",this._iframe.style.position="absolute",this._iframe.style.top="-100000px",this._iframe.onload=async()=>{await this._initIFrame(),this._ready.resolve(),window.addEventListener("message",(e=>{const s=e.data;if("stream"===s.event){const e=s;this.stream(e)}}))},document.body.appendChild(this._iframe)}dispose(){this.isDisposed||(this._iframe.remove(),super.dispose())}get ready(){return this._ready.promise}async kernelInfoRequest(){return{implementation:"JavaScript",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"javascript"},file_extension:".js",mimetype:"text/javascript",name:"javascript",nbconvert_exporter:"javascript",pygments_lexer:"javascript",version:"es2017"},protocol_version:"5.3",status:"ok",banner:"A JavaScript kernel running in the browser",help_links:[{text:"JavaScript Kernel",url:"https://github.com/jtpio/jupyterlite"}]}}async executeRequest(e){const{code:s}=e,t=this._eval(s);return{execution_count:this.executionCount,data:{"text/plain":t},metadata:{}}}async completeRequest(e){var s,t;const n=this._evalFunc(this._iframe.contentWindow,"Object.keys(window)"),{code:a,cursor_pos:r}=e,o=null!==(t=(null!==(s=a.slice(0,r).match(/(\w+)$/))&&void 0!==s?s:[])[0])&&void 0!==t?t:"";return{matches:n.filter((e=>e.startsWith(o))),cursor_start:r-o.length,cursor_end:r,metadata:{},status:"ok"}}async inspectRequest(e){throw new Error("Not implemented")}async isCompleteRequest(e){throw new Error("Not implemented")}async commInfoRequest(e){throw new Error("Not implemented")}async inputRequest(e){throw new Error("Not implemented")}async commOpen(e){throw new Error("Not implemented")}async commMsg(e){throw new Error("Not implemented")}async commClose(e){throw new Error("Not implemented")}_eval(e){return this._evalFunc(this._iframe.contentWindow,e)}async _initIFrame(){this._iframe.contentWindow&&this._evalFunc(this._iframe.contentWindow,'\n        console._log = console.log;\n        console._error = console.error;\n\n        window._bubbleUp = function(msg) {\n          window.parent.postMessage(msg);\n        }\n\n        console.log = function() {\n          const args = Array.prototype.slice.call(arguments);\n          window._bubbleUp({\n            "event": "stream",\n            "name": "stdout",\n            "text": args.join(\' \') + \'\\n\'\n          });\n        };\n        console.info = console.log;\n\n        console.error = function() {\n          const args = Array.prototype.slice.call(arguments);\n          window._bubbleUp({\n            "event": "stream",\n            "name": "stderr",\n            "text": args.join(\' \') + \'\\n\'\n          });\n        };\n        console.warn = console.error;\n\n        window.onerror = function(message, source, lineno, colno, error) {\n          console.error(message);\n        }\n      ')}}},65246:(e,s,t)=>{"use strict";t.d(s,{I:()=>r});var n=t(86703),a=t(58137);class r{constructor(e){this._history=[],this._executionCount=0,this._isDisposed=!1,this._disposed=new a.Signal(this),this._parentHeader=void 0;const{id:s,name:t,sendMessage:n}=e;this._id=s,this._name=t,this._sendMessage=n}get ready(){return Promise.resolve()}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}get id(){return this._id}get name(){return this._name}get executionCount(){return this._executionCount}get parentHeader(){return this._parentHeader}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0))}async handleMessage(e){switch(this._busy(e),e.header.msg_type){case"kernel_info_request":await this._kernelInfo(e);break;case"execute_request":await this._executeRequest(e);break;case"complete_request":await this._complete(e);break;case"history_request":await this._historyRequest(e);break;case"comm_open":await this.commOpen(e);break;case"comm_msg":await this.commMsg(e);break;case"comm_close":await this.commClose(e)}this._idle(e)}stream(e){var s,t;const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"stream",session:null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",parentHeader:this._parentHeader,content:e});this._sendMessage(a)}displayData(e){var s,t;const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"display_data",session:null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",parentHeader:this._parentHeader,content:e});this._sendMessage(a)}executeError(e){var s,t;const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"error",session:null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",parentHeader:this._parentHeader,content:e});this._sendMessage(a)}updateDisplayData(e){var s,t;const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"update_display_data",session:null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",parentHeader:this._parentHeader,content:e});this._sendMessage(a)}clearOutput(e){var s,t;const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"clear_output",session:null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",parentHeader:this._parentHeader,content:e});this._sendMessage(a)}executeResult(e){var s,t;const a=n.KernelMessage.createMessage({channel:"iopub",msgType:"execute_result",session:null!==(t=null===(s=this._parentHeader)||void 0===s?void 0:s.session)&&void 0!==t?t:"",parentHeader:this._parentHeader,content:e});this._sendMessage(a)}handleComm(e,s,t,a){var r,o;const i=n.KernelMessage.createMessage({channel:"iopub",msgType:e,session:null!==(o=null===(r=this._parentHeader)||void 0===r?void 0:r.session)&&void 0!==o?o:"",parentHeader:this._parentHeader,content:s,metadata:t,buffers:a});this._sendMessage(i)}_idle(e){const s=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"idle"}});this._sendMessage(s)}_busy(e){const s=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"busy"}});this._sendMessage(s)}async _kernelInfo(e){const s=await this.kernelInfoRequest(),t=n.KernelMessage.createMessage({msgType:"kernel_info_reply",channel:"shell",session:e.header.session,parentHeader:e.header,content:s});this._sendMessage(t)}async _executeRequest(e){const s=e.content;this._executionCount++,this._parentHeader=e.header,this._executeInput(e);try{const t=await this.executeRequest(s);s.code.startsWith("%")||this._history.push([0,0,s.code]),t.data&&Object.keys(t.data).length>0&&this._executeResult(e,t),this._executeReply(e,{execution_count:this._executionCount,status:"ok",user_expressions:{},payload:[]})}catch(s){const{name:t,stack:n,message:a}=s,r={ename:t,evalue:a,traceback:[n]};this._error(e,r),this._executeReply(e,{execution_count:this._executionCount,status:"error",...r})}}async _historyRequest(e){const s=e,t=n.KernelMessage.createMessage({msgType:"history_reply",channel:"shell",parentHeader:s.header,session:e.header.session,content:{status:"ok",history:this._history}});this._sendMessage(t)}_executeInput(e){const s=e,t=s.content.code,a=n.KernelMessage.createMessage({msgType:"execute_input",parentHeader:s.header,channel:"iopub",session:e.header.session,content:{code:t,execution_count:this._executionCount}});this._sendMessage(a)}_executeResult(e,s){const t=n.KernelMessage.createMessage({msgType:"execute_result",parentHeader:e.header,channel:"iopub",session:e.header.session,content:{...s,execution_count:this._executionCount}});this._sendMessage(t)}_executeReply(e,s){const t=e,a=n.KernelMessage.createMessage({msgType:"execute_reply",channel:"shell",parentHeader:t.header,session:e.header.session,content:s});this._sendMessage(a)}_error(e,s){const t=n.KernelMessage.createMessage({msgType:"error",parentHeader:e.header,channel:"iopub",session:e.header.session,content:s});this._sendMessage(t)}async _complete(e){const s=e,t=await this.completeRequest(s.content),a=n.KernelMessage.createMessage({msgType:"complete_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(a)}}},64831:(e,s,t)=>{"use strict";t.d(s,{L:()=>a,q:()=>r});var n=t(66065);const a=new n.Token("@jupyterlite/kernel:IKernels"),r=new n.Token("@jupyterlite/kernelspec:IKernelSpecs")},7801:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(87939),a=t(64831),r=t(30810),o=t(66065);const i="text/html-sandboxed";class c extends r.t{constructor(e){super(e),this._bootstrap="",this._inputs=[],this._p5Ready=new o.PromiseDelegate;const{p5Url:s}=e;this._bootstrap=`\n      import('${s}').then(() => {\n        // create the p5 global instance\n        window.__globalP5 = new p5();\n        return Promise.resolve();\n      })\n    `,super.ready.then((()=>{this._eval(this._bootstrap),this._p5Ready.resolve()}))}get ready(){return this._p5Ready.promise}async kernelInfoRequest(){return{implementation:"p5.js",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"javascript"},file_extension:".js",mimetype:"text/javascript",name:"p5js",nbconvert_exporter:"javascript",pygments_lexer:"javascript",version:"es2017"},protocol_version:"5.3",status:"ok",banner:"A p5.js kernel",help_links:[{text:"p5.js Kernel",url:"https://github.com/jtpio/jupyterlite"}]}}async executeRequest(e){const{code:s}=e;if(s.startsWith("%")){const e=await this._magics(s);if(e)return e}const t=super.executeRequest(e);return this._inputs.push(s),t}async _magics(e){var s,t;if(e.startsWith("%show")){const n=this._inputs.map((e=>`window.eval(\`${e}\`);`)).join("\n"),a=`\n        ${this._bootstrap}.then(() => {\n          ${n}\n          window.__globalP5._start();\n        })\n      `,r=/^%show(?: (.+)\s+(.+))?\s*$/,o=e.match(r),c=null!==(s=null==o?void 0:o[1])&&void 0!==s?s:void 0,l=null!==(t=null==o?void 0:o[2])&&void 0!==t?t:void 0;return{execution_count:this.executionCount,data:{[i]:['<body style="overflow: hidden;">',`<script>${a}<\/script>`,"</body>"].join("\n")},metadata:{[i]:{width:c,height:l}}}}}}const l=[{id:"@jupyterlite/p5-kernel-extension:kernel",autoStart:!0,requires:[a.q],activate:(e,s)=>{const t=n.PageConfig.getOption("p5Url")||"https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.js",a=n.URLExt.isLocal(t)?n.URLExt.join(window.location.origin,t):t;s.register({spec:{name:"p5js",display_name:"p5.js",language:"javascript",argv:[],spec:{argv:[],env:{},display_name:"p5.js",language:"javascript",interrupt_mode:"message",metadata:{}},resources:{"logo-32x32":"TODO","logo-64x64":"/kernelspecs/p5js.png"}},create:async e=>new c({...e,p5Url:a})})}}]}}]);
//# sourceMappingURL=7801.e23b17b6f3f1f1d76a78.js.map