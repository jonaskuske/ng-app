(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(n,l,t){n.exports=t("zUnb")},AytR:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));const e={production:!0,hmr:!1,apiUrl:"https://api.dmp-bremerhaven.de/wp-json/wp/v2/"}},Ss9G:function(n,l,t){"use strict";var e=t("8Y7J");class u{}class o{ngOnInit(){"scrollBehavior"in document.documentElement.style||Promise.all([t.e(5).then(t.t.bind(null,"dwco",7)),t.e(5).then(t.bind(null,"e5dI"))]).then(([n])=>n.polyfill())}}var r=t("pMnS"),i=t("iInd");class b{constructor(n){this.activatedPath="/"+n.snapshot.url.join("/")}ngOnInit(){}}var a=e.pb({encapsulation:0,styles:[["footer[_ngcontent-%COMP%]{text-align:center;margin-top:2rem}\n/*# sourceMappingURL=page-not-found.component.css.map*/"]],data:{}});function c(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["404 \u2013 Seite nicht gefunden"])),(n()(),e.rb(2,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,[" Unter der aufgerufenen Adresse "])),(n()(),e.rb(4,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),e.Hb(5,null,["",""])),(n()(),e.Hb(-1,null,[" ist leider nichts zu finden. "])),(n()(),e.rb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,[" Bitte \xfcberpr\xfcfe deine Eingaben und versuche es erneut.\n"])),(n()(),e.rb(9,0,null,null,3,"footer",[],null,null,null,null,null)),(n()(),e.rb(10,0,null,null,2,"button",[["routerLink","/"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Cb(n,11).onClick()&&u),u}),null,null)),e.qb(11,16384,null,0,i.p,[i.o,i.a,[8,null],e.C,e.l],{routerLink:[0,"routerLink"]},null),(n()(),e.Hb(-1,null,["Zur Startseite"]))],(function(n,l){n(l,11,0,"/")}),(function(n,l){n(l,5,0,l.component.activatedPath)}))}function s(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"app-page-not-found",[],null,null,null,c,a)),e.qb(1,114688,null,0,b,[i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var d=e.nb("app-page-not-found",b,s,{},{},[]),p=t("SVse");class B{constructor(n){this.displayModeService=n}get displayMode(){return this.displayModeService.displayMode}toggleDisplayMode(){this.displayModeService.toggleDisplayMode()}}let g=(()=>{class n{constructor(){this.linkElement=document.querySelector('link[href*="water.css"]'),this.displayMode=localStorage.getItem("displayMode")||"dark",this.setDisplayMode(this.displayMode)}setDisplayMode(n){this.linkElement.href=this.linkElement.href.replace(/light|dark/,n),localStorage.setItem("displayMode",n),this.displayMode=n}toggleDisplayMode(){this.setDisplayMode("light"===this.displayMode?"dark":"light")}}return n.ngInjectableDef=e.Nb({factory:function(){return new n},token:n,providedIn:"root"}),n})();var f=e.pb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{text-transform:uppercase}header[_ngcontent-%COMP%]{text-align:center;max-width:800px;margin:0 auto}a[_ngcontent-%COMP%]{white-space:nowrap}\n/*# sourceMappingURL=top-navigation.component.css.map*/"]],data:{}});function h(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,12,"header",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Willkommen"])),(n()(),e.rb(3,0,null,null,2,"a",[["routerLink","/portfolio"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Cb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.qb(4,671744,null,0,i.q,[i.o,i.a,p.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Hb(-1,null,["DMP Portfolio"])),(n()(),e.Hb(-1,null,[" \xa0 "])),(n()(),e.rb(7,0,null,null,2,"a",[["routerLink","/todo"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Cb(n,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.qb(8,671744,null,0,i.q,[i.o,i.a,p.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Hb(-1,null,["Todos"])),(n()(),e.Hb(-1,null,[" \xa0 "])),(n()(),e.rb(11,0,null,null,1,"a",[["href","javascript:void 0"],["role","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleDisplayMode()&&e),e}),null,null)),(n()(),e.Hb(12,null,[" "," Modus "]))],(function(n,l){n(l,4,0,"/portfolio"),n(l,8,0,"/todo")}),(function(n,l){var t=l.component;n(l,3,0,e.Cb(l,4).target,e.Cb(l,4).href),n(l,7,0,e.Cb(l,8).target,e.Cb(l,8).href),n(l,12,0,"dark"===t.displayMode?"Heller":"Dunkler")}))}var m=e.pb({encapsulation:0,styles:[["app-top-navigation[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{padding:0 1rem;box-sizing:border-box;padding-left:calc(100vw - 100% + 1rem)}app-top-navigation[_ngcontent-%COMP%]{position:relative;display:block;padding-top:1rem;padding-bottom:2rem}router-outlet[_ngcontent-%COMP%] +*{display:block;max-width:800px;margin:0 auto}footer[_ngcontent-%COMP%]{margin-top:auto;text-align:center}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:800px;margin:3rem auto;border-top:2px solid;padding-top:1em}\n/*# sourceMappingURL=app.component.css.map*/"]],data:{}});function y(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"app-top-navigation",[],null,null,null,h,f)),e.qb(1,49152,null,0,B,[g],null,null),(n()(),e.rb(2,0,null,null,2,"main",[],null,null,null,null,null)),(n()(),e.rb(3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.qb(4,212992,null,0,i.s,[i.b,e.N,e.k,[8,null],e.i],null,null),(n()(),e.rb(5,0,null,null,8,"footer",[],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,[" Gebaut zu \xdcbungszwecken mit Hilfe von "])),(n()(),e.rb(8,0,null,null,1,"a",[["href","https://angular.io/"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Angular"])),(n()(),e.Hb(-1,null,[". Der Quellcode ist "])),(n()(),e.rb(11,0,null,null,1,"a",[["href","https://github.com/jonaskuske/ng-app"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["bei GitHub frei verf\xfcgbar"])),(n()(),e.Hb(-1,null,[". "]))],(function(n,l){n(l,4,0)}),null)}function k(n){return e.Jb(0,[(n()(),e.rb(0,0,null,null,1,"app-root",[],null,null,null,y,m)),e.qb(1,114688,null,0,o,[],null,null)],(function(n,l){n(l,1,0)}),null)}var v=e.nb("app-root",o,k,{},{},[]),M=t("cUpR"),C=t("AUKP"),w=t("e1JD"),O=t("Mrqg"),j=t("IheW"),q=t("r35V"),P=t("D/qn");const D=()=>t.e(4).then(t.bind(null,"j4bZ")).then(n=>n.PortfolioModuleNgFactory),H=()=>t.e(7).then(t.bind(null,"YkNJ")).then(n=>n.TodoModuleNgFactory);class x{}class S{}t.d(l,"a",(function(){return E}));var E=e.ob(u,[o],(function(n){return e.Ab([e.Bb(512,e.k,e.Z,[[8,[r.a,d,v]],[3,e.k],e.w]),e.Bb(5120,e.t,e.lb,[[3,e.t]]),e.Bb(4608,p.l,p.k,[e.t,[2,p.t]]),e.Bb(5120,e.hb,e.mb,[e.y]),e.Bb(5120,e.c,e.ib,[]),e.Bb(5120,e.r,e.jb,[]),e.Bb(5120,e.s,e.kb,[]),e.Bb(4608,M.b,M.k,[p.d]),e.Bb(6144,e.F,null,[M.b]),e.Bb(4608,M.e,M.g,[]),e.Bb(5120,M.c,(function(n,l,t,e,u,o,r,i){return[new M.i(n,l,t),new M.n(e),new M.m(u,o,r,i)]}),[p.d,e.y,e.A,p.d,p.d,M.e,e.ab,[2,M.f]]),e.Bb(4608,M.d,M.d,[M.c,e.y]),e.Bb(135680,M.l,M.l,[p.d]),e.Bb(4608,M.j,M.j,[M.d,M.l,e.c]),e.Bb(6144,e.D,null,[M.j]),e.Bb(6144,M.o,null,[M.l]),e.Bb(4608,e.L,e.L,[e.y]),e.Bb(4608,C.d,C.a,[]),e.Bb(4608,C.c,C.c,[w.j,i.o,C.d,e.y,i.w,p.h]),e.Bb(5120,i.a,i.D,[i.o]),e.Bb(4608,i.h,i.h,[]),e.Bb(6144,i.i,null,[i.h]),e.Bb(135680,i.t,i.t,[i.o,e.v,e.j,e.q,i.i]),e.Bb(4608,i.g,i.g,[]),e.Bb(5120,i.I,i.z,[i.o,p.q,i.j]),e.Bb(5120,i.k,i.G,[i.E]),e.Bb(5120,e.b,(function(n,l){return[n,w.e.appBootstrapListenerFactory(l)]}),[i.k,O.c]),e.Bb(4608,j.h,j.n,[p.d,e.A,j.l]),e.Bb(4608,j.o,j.o,[j.h,j.m]),e.Bb(5120,j.a,(function(n){return[n]}),[j.o]),e.Bb(4608,j.k,j.k,[]),e.Bb(6144,j.i,null,[j.k]),e.Bb(4608,j.g,j.g,[j.i]),e.Bb(6144,j.b,null,[j.g]),e.Bb(4608,j.f,j.j,[j.b,e.q]),e.Bb(4608,j.c,j.c,[j.f]),e.Bb(4608,w.b,w.b,[w.q,w.E]),e.Bb(1073742336,p.c,p.c,[]),e.Bb(1024,e.m,M.p,[]),e.Bb(1024,e.x,(function(){return[i.y()]}),[]),e.Bb(512,i.E,i.E,[e.q]),e.Bb(1024,e.d,(function(n,l){return[M.q(n),i.F(l)]}),[[2,e.x],i.E]),e.Bb(512,e.e,e.e,[[2,e.d]]),e.Bb(131584,e.g,e.g,[e.y,e.ab,e.q,e.m,e.k,e.e]),e.Bb(1073742336,e.f,e.f,[e.g]),e.Bb(1073742336,M.a,M.a,[[3,M.a]]),e.Bb(256,w.e.ROOT_OPTIONS,{developmentMode:!1,compatibility:{strictContentSecurityPolicy:!1},selectorOptions:{injectContainerState:!1,suppressErrors:!1}},[]),e.Bb(1024,w.v,w.e.ngxsConfigFactory,[w.e.ROOT_OPTIONS]),e.Bb(512,w.q,w.q,[]),e.Bb(512,w.z,w.z,[]),e.Bb(512,w.i,w.i,[]),e.Bb(256,q.g,{key:"todo"},[]),e.Bb(1024,q.a,q.e,[q.g]),e.Bb(1024,q.d,q.f,[q.a,e.A]),e.Bb(256,P.e,{disabled:!0},[]),e.Bb(1024,P.a,P.d,[P.e]),e.Bb(1024,w.d,(function(n,l,t,e,u){return[new q.b(n,l,t),new P.b(e,u)]}),[q.a,q.d,e.A,P.a,e.q]),e.Bb(512,w.D,w.D,[[3,w.D],[2,w.d]]),e.Bb(512,w.w,w.K,[e.y,e.A]),e.Bb(512,w.E,w.E,[w.w]),e.Bb(512,w.A,w.A,[e.m,w.q,w.z,w.D,w.i,w.E]),e.Bb(1024,w.u,w.e.isAngularInTestMode,[]),e.Bb(1024,w.t,w.e.isAngularDevMode,[]),e.Bb(512,w.G,w.G,[w.u,w.t]),e.Bb(512,w.F,w.F,[w.G,w.v]),e.Bb(512,w.C,w.C,[w.i,w.A,w.v,w.F]),e.Bb(512,w.B,w.B,[w.C]),e.Bb(1024,O.a,w.e.getInitialState,[]),e.Bb(512,w.y,w.y,[e.q,w.v,[3,w.y],w.q,w.z,w.B,[2,O.a]]),e.Bb(512,w.j,w.j,[w.i,w.C,w.v,w.E,[2,O.a]]),e.Bb(512,w.H,w.H,[w.j,w.v]),e.Bb(256,w.r,[],[]),e.Bb(512,O.c,O.c,[]),e.Bb(512,w.I,w.I,[w.C,w.B,O.c]),e.Bb(1073742336,w.x,w.x,[w.y,w.C,w.j,w.H,[2,w.r],w.v,w.I]),e.Bb(1073742336,q.c,q.c,[]),e.Bb(1024,w.s,(function(){return[[C.c]]}),[]),e.Bb(1073742336,w.J,w.J,[w.j,w.C,w.y,[2,w.s],w.I]),e.Bb(1073742336,C.b,C.b,[]),e.Bb(1073742336,w.e,w.e,[]),e.Bb(1073742336,P.c,P.c,[]),e.Bb(1024,i.x,i.B,[[3,i.o]]),e.Bb(512,i.w,i.c,[]),e.Bb(512,i.b,i.b,[]),e.Bb(256,i.j,{scrollPositionRestoration:"enabled",anchorScrolling:"enabled",preloadingStrategy:i.h},[]),e.Bb(1024,p.h,i.A,[p.p,[2,p.a],i.j]),e.Bb(512,p.g,p.g,[p.h,p.p]),e.Bb(512,e.j,e.j,[]),e.Bb(512,e.v,e.I,[e.j,[2,e.J]]),e.Bb(1024,i.l,(function(){return[[{path:"portfolio",loadChildren:D},{path:"todo",loadChildren:H},{path:"",redirectTo:"portfolio",pathMatch:"full"},{path:"**",component:b}]]}),[]),e.Bb(1024,i.o,i.C,[e.g,i.w,i.b,p.g,e.q,e.v,e.j,i.l,i.j,[2,i.v],[2,i.n]]),e.Bb(1073742336,i.r,i.r,[[2,i.x],[2,i.o]]),e.Bb(1073742336,x,x,[]),e.Bb(1073742336,j.e,j.e,[]),e.Bb(1073742336,j.d,j.d,[]),e.Bb(1073742336,S,S,[]),e.Bb(1073742336,u,u,[]),e.Bb(256,e.Y,!0,[]),e.Bb(256,j.l,"XSRF-TOKEN",[]),e.Bb(256,j.m,"X-XSRF-TOKEN",[])])}))},crnd:function(n,l){function t(n){return Promise.resolve().then((function(){var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}))}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="crnd"},zUnb:function(n,l,t){"use strict";t.r(l),(function(n){t.d(l,"\u02750",(function(){return a}));var e=t("8Y7J"),u=t("QzWY"),o=t("AytR"),r=t("Ss9G"),i=t("cUpR");o.a.production&&Object(e.R)();const b=()=>i.h().bootstrapModuleFactory(r.a),a=b;o.a.hmr?Object(u.a)(n,b).catch(n=>console.error(n)):b().catch(n=>console.error(n))}).call(this,t("3UD+")(n))}},[[0,0,8]]]);
//# sourceMappingURL=main-es2015.4b5c2c25f93259748d95.js.map