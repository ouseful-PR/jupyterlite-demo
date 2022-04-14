"use strict";(self.webpackChunkjupyterlab_filesystem_access=self.webpackChunkjupyterlab_filesystem_access||[]).push([[611],{611:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var n=a(114),i=a(146),o=a(276),r=a(881),s=a(50),l=a(785),d=a(168);async function c(t){const e=[];for await(const a of t)e.push(a);return e}class h{constructor(){this._isDisposed=!1,this._fileChanged=new d.Signal(this),this._rootHandle=null}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,d.Signal.clearData(this))}get name(){return"FileSystem"}get serverSettings(){return s.ServerConnection.makeSettings()}get fileChanged(){return this._fileChanged}get rootHandle(){return this._rootHandle}set rootHandle(t){this._rootHandle=t}async get(t,e){if(!this._rootHandle)return{name:"",path:"",created:(new Date).toISOString(),last_modified:(new Date).toISOString(),format:"json",content:null,writable:!0,type:"directory",mimetype:"application/json"};const a=await this.getParentHandle(t),n=l.PathExt.dirname(t),i=l.PathExt.basename(t);let o;if(o=i?await this.getHandle(a,i):a,"file"===o.kind){const t=await o.getFile();return{name:t.name,path:l.PathExt.join(n,i),created:new Date(t.lastModified).toISOString(),last_modified:new Date(t.lastModified).toISOString(),format:"text",content:await t.text(),writable:!0,type:"file",mimetype:"text/plain"}}{const t=[];for await(const e of o.values())if("file"===e.kind){const a=await e.getFile();t.push({name:a.name,path:l.PathExt.join(n,i,a.name),created:new Date(a.lastModified).toISOString(),last_modified:new Date(a.lastModified).toISOString(),format:"text",content:await a.text(),writable:!0,type:"file",mimetype:"text/plain"})}else t.push({name:e.name,path:l.PathExt.join(n,i,e.name),created:"",last_modified:"",format:"json",content:null,writable:!0,type:"directory",mimetype:"application/json"});return{name:i,path:l.PathExt.join(n,i),last_modified:"",created:"",format:"json",mimetype:"application/json",content:t,size:void 0,writable:!0,type:"directory"}}}getDownloadUrl(t){throw new Error("Method not implemented.")}async newUntitled(t){const e=t?.type||"directory",a=l.PathExt.join(t?.path||"","directory"===e?"Untitled Folder":"untitled"),n=t?.ext||"txt",i=await this.getParentHandle(a),o=l.PathExt.dirname(a);let r=l.PathExt.basename(a);const s=r;if("directory"===e){let t=1;for(;await this.hasHandle(i,r);)r=`${s} ${t++}`;return await i.getDirectoryHandle(r,{create:!0}),this.get(l.PathExt.join(o,r))}{let t=1;for(;await this.hasHandle(i,`${r}.${n}`);)r=`${s}${t++}`;const e=`${r}.${n}`;return await i.getFileHandle(e,{create:!0}),this.get(l.PathExt.join(o,e))}}delete(t){throw new Error("Method not implemented.")}rename(t,e){throw new Error("Method not implemented.")}async save(t,e){const a=await this.getParentHandle(t),n=await a.getFileHandle(l.PathExt.basename(t)),i=await n.createWritable({}),o=e?.format,r=e?.content;if("json"===o){const t=JSON.stringify(r,null,2);await i.write(t)}else await i.write(r);return await i.close(),this.get(t)}copy(t,e){throw new Error("Method not implemented.")}async createCheckpoint(t){return{id:"test",last_modified:(new Date).toISOString()}}async listCheckpoints(t){return[{id:"test",last_modified:(new Date).toISOString()}]}restoreCheckpoint(t,e){return Promise.resolve(void 0)}deleteCheckpoint(t,e){return Promise.resolve(void 0)}async getParentHandle(t){const e=this._rootHandle;if(!e)throw new Error("No root file handle");let a=e;for(const e of t.split("/").slice(0,-1))a=await a.getDirectoryHandle(e);return a}async getHandle(t,e){const a=(await c(t.values())).filter((t=>t.name===e));if(a.length)return a[0];throw new Error(`${e} does not exist.`)}async hasHandle(t,e){const a=(await c(t.values())).filter((t=>t.name===e));return Boolean(a.length)}}const w={id:"jupyterlab-filesystem-access:plugin",requires:[i.IFileBrowserFactory,o.ITranslator],autoStart:!0,activate:(t,e,a)=>{if(!window.showDirectoryPicker)return void console.warn("The File System Access API is not supported in this browser.");const{serviceManager:i}=t,{createFileBrowser:o}=e,s=a.load("jupyterlab-filesystem-access"),l=new h;i.contents.addDrive(l);const d=o("jp-filesystem-browser",{driveName:l.name,restore:!1});d.title.caption=s.__("Local File System"),d.title.icon=r.listIcon;const c=new n.ToolbarButton({icon:r.folderIcon,onClick:async()=>{const t=await window.showDirectoryPicker();t&&(l.rootHandle=t,d.model.cd("/"))},tooltip:s.__("Open a new folder")});d.toolbar.insertItem(0,"open-directory",c),t.shell.add(d,"left")}}}}]);