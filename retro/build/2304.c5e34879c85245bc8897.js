(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2304,4925],{84925:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var o=n(88783),a=n(65690),r=n(26515),i=n(11947),l=n(50377),d=n(32421),c=n(56240),s=n(82336),p=n(56574),u=n(77031);const m=new RegExp("/(notebooks|edit)/(.*)");var g;!function(e){e.toggleTop="application:toggle-top",e.toggleZen="application:toggle-zen",e.openLab="application:open-lab",e.openTree="application:open-tree"}(g||(g={}));const h={id:"@retrolab/application-extension:logo",autoStart:!0,activate:e=>{const t=r.PageConfig.getBaseUrl(),n=document.createElement("a");n.href=`${t}retro/tree`,n.target="_blank",n.rel="noopener noreferrer";const o=new u.Widget({node:n});("true"===r.PageConfig.getOption("retroLogo")?p.retroInlineIcon:p.jupyterIcon).element({container:n,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto"}),o.id="jp-RetroLogo",e.shell.add(o,"top",{rank:0})}},b={id:"@retrolab/application-extension:opener",autoStart:!0,requires:[o.IRouter,i.IDocumentManager],activate:(e,t,n)=>{const{commands:o}=e,a="router:tree";o.addCommand(a,{execute:t=>{var o;const a=null!==(o=t.path.match(m))&&void 0!==o?o:[],[,,i]=a;if(!i)return;const l=decodeURIComponent(i),d=r.PathExt.extname(l);e.restored.then((()=>{".ipynb"===d?n.open(l,"Notebook",void 0,{ref:"_noref"}):n.open(l,"Editor",void 0,{ref:"_noref"})}))}}),t.register({command:a,pattern:m})}},x={id:"@retrolab/application-extension:no-tabs-menu",requires:[d.IMainMenu],autoStart:!0,activate:(e,t)=>{t.tabsMenu.dispose()}},v={id:"@retrolab/application-extension:pages",autoStart:!0,optional:[a.ICommandPalette,d.IMainMenu],activate:(e,t,n)=>{const o=r.PageConfig.getBaseUrl();e.commands.addCommand(g.openLab,{label:"Open JupyterLab",execute:()=>{window.open(`${o}lab`)}}),e.commands.addCommand(g.openTree,{label:"Open Files",execute:()=>{window.open(`${o}retro/tree`)}}),t&&[g.openLab,g.openTree].forEach((e=>{t.addItem({command:e,category:"View"})})),n&&n.viewMenu.addGroup([{command:g.openLab},{command:g.openTree}],0)}},f={id:"@retrolab/application-extension:paths",autoStart:!0,provides:o.JupyterFrontEnd.IPaths,activate:e=>{if(!(e instanceof s.RetroApp))throw new Error(`${f.id} must be activated in RetroLab.`);return e.paths}},I={id:"@retrolab/application-extension:router",autoStart:!0,provides:o.IRouter,requires:[o.JupyterFrontEnd.IPaths],activate:(e,t)=>{const{commands:n}=e,a=t.urls.base,r=new o.Router({base:a,commands:n});return e.started.then((()=>{r.route(),window.addEventListener("popstate",(()=>{r.route()}))})),r}},C={id:"@retrolab/application-extension:session-dialogs",provides:a.ISessionContextDialogs,autoStart:!0,activate:()=>a.sessionContextDialogs},w={id:"@retrolab/application-extension:shell",activate:e=>{if(!(e.shell instanceof s.RetroShell))throw new Error(`${w.id} did not find a RetroShell instance.`);return e.shell},autoStart:!0,provides:s.IRetroShell},S={id:"@retrolab/application-extension:spacer",autoStart:!0,activate:e=>{const t=new u.Widget;t.id=a.DOMUtils.createDomID(),t.addClass("jp-RetroSpacer"),e.shell.add(t,"top",{rank:1e4});const n=new u.Widget;n.id=a.DOMUtils.createDomID(),n.addClass("jp-RetroSpacer"),e.shell.add(n,"menu",{rank:1e4})}},R={id:"@retrolab/application-extension:tab-title",autoStart:!0,requires:[s.IRetroShell],activate:(e,t)=>{const n=()=>{const e=t.currentWidget;if(!(e instanceof l.DocumentWidget))return;const n=()=>{const t=r.PathExt.basename(e.context.path);document.title=t};e.context.pathChanged.connect(n),n()};t.currentChanged.connect(n),n()}},T={id:"@retrolab/application-extension:title",autoStart:!0,requires:[s.IRetroShell],optional:[i.IDocumentManager,o.IRouter],activate:(e,t,n,o)=>{const a=new u.Widget;a.id="jp-title",e.shell.add(a,"top",{rank:10});const d=async()=>{const e=t.currentWidget;if(!(e&&e instanceof l.DocumentWidget))return;if(a.node.children.length>0)return;const d=document.createElement("h1");d.textContent=e.title.label,a.node.appendChild(d),a.node.style.marginLeft="10px",n&&(a.node.onclick=async()=>{var t;const a=await(0,i.renameDialog)(n,e.context.path);if(e&&e.activate(),!a)return;const l=r.PathExt.basename(a.path);if(d.textContent=l,!o)return;const c=null!==(t=o.current.path.match(m))&&void 0!==t?t:[],[,s,p]=c;if(!s||!p)return;const u=encodeURIComponent(a.path);o.navigate(`/retro/${s}/${u}`,{skipRouting:!0})})};t.currentChanged.connect(d),d()}},E={id:"@retrolab/application-extension:top",requires:[s.IRetroShell],optional:[d.IMainMenu],activate:(e,t,n)=>{const o=t.top;e.commands.addCommand(g.toggleTop,{label:"Show Header",execute:()=>{o.setHidden(o.isVisible)},isToggled:()=>o.isVisible}),n&&n.viewMenu.addGroup([{command:g.toggleTop}],2);const a=()=>{"desktop"===e.format?t.expandTop():t.collapseTop()};e.formatChanged.connect(a),a()},autoStart:!0},M={id:"@retrolab/application-extension:translator",activate:e=>new c.TranslationManager,autoStart:!0,provides:c.ITranslator},P={id:"@retrolab/application-extension:zen",autoStart:!0,optional:[a.ICommandPalette,s.IRetroShell,d.IMainMenu],activate:(e,t,n,o)=>{const{commands:a}=e,r=document.documentElement,i=()=>{null==n||n.expandTop(),null==n||n.menu.setHidden(!1),l=!1};let l=!1;a.addCommand(g.toggleZen,{label:"Toggle Zen Mode",execute:()=>{l?(document.exitFullscreen(),i()):(r.requestFullscreen(),null==n||n.collapseTop(),null==n||n.menu.setHidden(!0),l=!0)}}),document.addEventListener("fullscreenchange",(()=>{document.fullscreenElement||i()})),t&&t.addItem({command:g.toggleZen,category:"Mode"}),o&&o.viewMenu.addGroup([{command:g.toggleZen}],3)}},k=[h,x,b,v,f,I,C,w,S,R,T,E,M,P]}}]);
//# sourceMappingURL=2304.c5e34879c85245bc8897.js.map