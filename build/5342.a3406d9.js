"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5342,8370],{8370:(t,e,s)=>{s.r(e),s.d(e,{IInspector:()=>C,InspectionHandler:()=>d,InspectorPanel:()=>u,KernelConnector:()=>g});var n=s(35389),i=s(13941),o=s(74547),r=s(61313),c=s(58646);class d{constructor(t){this._cleared=new c.Signal(this),this._disposed=new c.Signal(this),this._editor=null,this._inspected=new c.Signal(this),this._isDisposed=!1,this._pending=0,this._standby=!0,this._lastInspectedReply=null,this._connector=t.connector,this._rendermime=t.rendermime,this._debouncer=new r.Debouncer(this.onEditorChange.bind(this),250)}get cleared(){return this._cleared}get disposed(){return this._disposed}get inspected(){return this._inspected}get editor(){return this._editor}set editor(t){if(t===this._editor)return;c.Signal.disconnectReceiver(this);const e=this._editor=t;e&&(this._cleared.emit(void 0),this.onEditorChange(),e.model.selections.changed.connect(this._onChange,this),e.model.value.changed.connect(this._onChange,this))}get standby(){return this._standby}set standby(t){this._standby=t}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0),c.Signal.clearData(this))}onEditorChange(t){if(this._standby)return;const e=this.editor;if(!e)return;const s=t||e.model.value.text,r=e.getCursorPosition(),c=n.Text.jsIndexToCharIndex(e.getOffsetAt(r),s),d={content:null},a=++this._pending;this._connector.fetch({offset:c,text:s}).then((t=>{if(!t||this.isDisposed||a!==this._pending)return this._lastInspectedReply=null,void this._inspected.emit(d);const{data:e}=t;if(this._lastInspectedReply&&o.JSONExt.deepEqual(this._lastInspectedReply,e))return;const s=this._rendermime.preferredMimeType(e);if(s){const t=this._rendermime.createRenderer(s),n=new i.MimeModel({data:e});t.renderModel(n),d.content=t}this._lastInspectedReply=t.data,this._inspected.emit(d)})).catch((t=>{this._lastInspectedReply=null,this._inspected.emit(d)}))}_onChange(){this._debouncer.invoke()}}var a=s(13271),h=s(78467),l=s(28877);const p="jp-Inspector-content";class u extends l.Panel{constructor(t={}){super(),this._source=null,this.translator=t.translator||h.nullTranslator,this._trans=this.translator.load("jupyterlab"),t.initialContent instanceof l.Widget?this._content=t.initialContent:"string"==typeof t.initialContent?this._content=u._generateContentWidget(`<p>${t.initialContent}</p>`):this._content=u._generateContentWidget("<p>"+this._trans.__("Click on a function to see documentation.")+"</p>"),this.addClass("jp-Inspector"),this.layout.addWidget(this._content)}[a.Printing.symbol](){return()=>a.Printing.printWidget(this)}get source(){return this._source}set source(t){this._source!==t&&(this._source&&(this._source.standby=!0,this._source.inspected.disconnect(this.onInspectorUpdate,this),this._source.disposed.disconnect(this.onSourceDisposed,this)),t&&t.isDisposed&&(t=null),this._source=t,this._source&&(this._source.standby=!1,this._source.inspected.connect(this.onInspectorUpdate,this),this._source.disposed.connect(this.onSourceDisposed,this)))}dispose(){this.isDisposed||(this.source=null,super.dispose())}onInspectorUpdate(t,e){const{content:s}=e;s&&s!==this._content&&(this._content.dispose(),this._content=s,s.addClass(p),this.layout.addWidget(s))}onSourceDisposed(t,e){this.source=null}static _generateContentWidget(t){const e=new l.Widget;return e.node.innerHTML=t,e.addClass(p),e.addClass("jp-Inspector-default-content"),e}}var _=s(22053);class g extends _.DataConnector{constructor(t){super(),this._sessionContext=t.sessionContext}fetch(t){var e;const s=null===(e=this._sessionContext.session)||void 0===e?void 0:e.kernel;if(!s)return Promise.reject(new Error("Inspection fetch requires a kernel."));const n={code:t.text,cursor_pos:t.offset,detail_level:1};return s.requestInspect(n).then((t=>{const e=t.content;if("ok"!==e.status||!e.found)throw new Error("Inspection fetch failed to return successfully.");return{data:e.data,metadata:e.metadata}}))}}const C=new o.Token("@jupyterlab/inspector:IInspector")}}]);
//# sourceMappingURL=5342.a3406d9.js.map