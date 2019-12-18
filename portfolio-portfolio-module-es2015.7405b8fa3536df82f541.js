(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9enj":function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),s=n("AcyG"),a=n("tyNb"),o=n("mrSG"),r=n("lJxs");let c=(()=>{class t{constructor(t){this.id=t}}return t.type="[Portfolio] Get Post",t})(),p=(()=>{class t{constructor(t){this.post=t}}return t.type="[Portfolio API] Get Post Success",t})(),b=(()=>{class t{constructor(t,e){this.id=t,this.error=e}}return t.type="[Portfolio API] Get Post Error",t})(),l=(()=>{class t{constructor(t){this.page=t}}return t.type="[Portfolio] Get Post Page",t})(),g=(()=>{class t{constructor(t,e){this.page=t,this.payload=e}}return t.type="[Portfolio API] Get Post Page Success",t})(),h=(()=>{class t{constructor(t,e){this.page=t,this.error=e}}return t.type="[Portfolio API] Get Post Page Error",t})();var d=n("JIr8"),u=n("tkUl");const y=t=>Array.isArray(t),f=t=>{var e=Object(o.d)(t,["page"]);return`?${new URLSearchParams(e)}`},m=(t,e={fuzzy:!0})=>{if(!/youtu\.?be/.test(t))return null;let n;const i=[/youtu\.be\/([^#&?]{11})/,/\?v=([^#&?]{11})/,/&v=([^#&?]{11})/,/embed\/([^#&?]{11})/,/\/v\/([^#&?]{11})/];for(n=0;n<i.length;++n)if(i[n].test(t))return i[n].exec(t)[1];if(e.fuzzy){const e=t.split(/[/&?=#.\s]/g);for(n=0;n<e.length;++n)if(/^[^#&?]{11}$/.test(e[n]))return e[n]}},O=(t,e=null)=>({id:t,entity:e,lastUpdatedAt:(new Date).toISOString(),isFetching:!1,isRefreshing:!1,isError:!1});function _(t){return e=>(y(t)?t.some(t=>!e.includes(t)):e.includes(t))?e:e.concat(y(t)?t.filter(t=>!e.includes(t)):t)}function j(t){return e=>{const n=e.entities[t.id];return Object.assign(Object.assign({},e),{entities:Object.assign(Object.assign({},e.entities),{[t.id]:Object.assign(Object.assign({},n),t)})})}}var P=n("fXoL"),w=n("AytR"),v=n("tk/3");const{apiUrl:I}=w.a,k=t=>Number(t.get("x-wp-total")),R=t=>Number(t.get("x-wp-totalpages")),S=t=>{const{body:e,headers:n}=t;return{body:e,total:k(n),totalPages:R(n)}};let F=(()=>{class t{constructor(t){this.http=t}getPost(t){return this.http.get(`${I}posts/${t}`)}getPosts({page:t,perPage:e=10}){return this.http.get(`${I}posts?per_page=${e}&page=${t}`,{observe:"response"}).pipe(Object(r.a)(S))}}return t.\u0275fac=function(e){return new(e||t)(P.Vb(v.a))},t.\u0275prov=P.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const C={entities:{},ids:[],pagination:{}};let M=(()=>{let t=class{constructor(t,e){this.postsService=t,this.store=e}ngxsOnInit(t){t.dispatch(new l({page:1,perPage:8}))}getPost(t,{id:e}){const n=t.getState().entities[e];return n&&!n.isError?t.dispatch(new p(n.entity)):(t.setState(function(t){const e=t.id.toString();return Object(u.b)({ids:_(e),entities:Object(u.b)({[e]:t})})}(Object.assign(Object.assign({},O(e)),{isFetching:!0}))),this.postsService.getPost(e).pipe(Object(r.a)(e=>t.dispatch(new p(e))),Object(d.a)(n=>t.dispatch(new b(e,n)))))}getPostSuccess(t,{post:e}){t.setState(j(O(e.id,e)))}getPostError(t,{id:e,error:n}){t.setState(j({id:e,isError:!0,isFetching:!1,isRefreshing:!1})),console.error(n)}getPostPage(t,{page:e}){const n=t.getState(),i=f(e),s=t.getState().pagination[i];if(!s||!s.pages[e.page])return s||t.patchState({pagination:Object.assign(Object.assign({},n.pagination),{[i]:{total:0,totalPages:0,pages:{}}})}),t.setState(Object(u.b)({pagination:Object(u.b)({[i]:Object(u.b)({pages:Object(u.b)({[e.page]:Object.assign(Object.assign({},O(e.page)),{isFetching:!0})})})})})),this.postsService.getPosts(e).pipe(Object(r.a)(n=>t.dispatch(new g(e,n))),Object(d.a)(n=>t.dispatch(new h(e,n))))}getPostPageSuccess(t,{page:e,payload:n}){const i=f(e),s=n.body.map(t=>O(t.id,t)),a=n.body.map(t=>t.id.toString());t.setState(function(t){const e=t.reduce((t,e)=>(t[e.id]=e,t),{});return Object(u.b)({ids:_(t.map(t=>t.id.toString())),entities:Object(u.b)(e)})}(s)),t.setState(Object(u.b)({pagination:Object(u.b)({[i]:Object(u.b)({total:n.total,totalPages:n.totalPages,pages:Object(u.b)({[e.page]:Object.assign({},O(e.page,a))})})})}))}getPostPageError(t,{page:e,error:n}){const i=f(e);t.setState(Object(u.b)({pagination:Object(u.b)({[i]:Object(u.b)({pages:Object(u.b)({[e.page]:Object(u.b)({isError:!0,isRefreshing:!1,isFetching:!1})})})})})),console.error(n)}};return t.\u0275fac=function(e){return new(e||t)(P.Vb(F),P.Vb(s.k))},t.\u0275prov=P.Hb({token:t,factory:t.\u0275fac}),Object(o.b)([Object(s.a)(c)],t.prototype,"getPost",null),Object(o.b)([Object(s.a)(p)],t.prototype,"getPostSuccess",null),Object(o.b)([Object(s.a)(b)],t.prototype,"getPostError",null),Object(o.b)([Object(s.a)(l)],t.prototype,"getPostPage",null),Object(o.b)([Object(s.a)(g)],t.prototype,"getPostPageSuccess",null),Object(o.b)([Object(s.a)(h)],t.prototype,"getPostPageError",null),t=Object(o.b)([Object(s.i)({name:"portfolio",defaults:C})],t),t})();class E{static getEntities(t){return Object(s.n)([t],t=>t.entities)}static getEntityList(t){return Object(s.n)([t],t=>Object.values(t.entities))}static getEntityIds(t){return Object(s.n)([t],t=>Object.keys(t.entities))}static getEntityListByPageFn(t){return e=>Object(s.n)([t],t=>e.map(e=>t.entities[e]))}}let z=(()=>{class t{static pagination(t){return t.pagination}static postEntityByIdFn(t){return e=>t[e]}static postQueryFn(t){return e=>t[f(e)]}static postQueryPageFn(t){return e=>t(e).pages[e.page]}static postEntitiesByQueryFn(t,e){return n=>Object.values(e(n).pages).filter(t=>!t.isFetching).map(t=>t.entity).flat().map(e=>t[e])}}return t.entities=E.getEntities(M),t.ids=E.getEntityIds(M),t.posts=E.getEntityList(M),Object(o.b)([Object(s.h)([M])],t,"pagination",null),Object(o.b)([Object(s.h)([t.entities])],t,"postEntityByIdFn",null),Object(o.b)([Object(s.h)([t.pagination])],t,"postQueryFn",null),Object(o.b)([Object(s.h)([t.postQueryFn])],t,"postQueryPageFn",null),Object(o.b)([Object(s.h)([t.entities,t.postQueryFn])],t,"postEntitiesByQueryFn",null),t})(),$=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=P.Fb({type:t,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[["role","img","aria-hidden","true",1,"post-detail__spinner",2,"font-style","normal"]],template:function(t,e){1&t&&(P.Rb(0,"span",0),P.pc(1,"\u23f3"),P.Pb())},styles:[".post-detail__spinner[_ngcontent-%COMP%]{display:inline-block;margin-left:.5em;-webkit-animation:2.5s ease-in-out infinite rotate;animation:2.5s ease-in-out infinite rotate}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}15%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,65%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}15%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,65%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),t})();function L(t,e){if(1&t&&(P.Rb(0,"section"),P.Mb(1,"h3",6),P.Mb(2,"p",6),P.Rb(3,"a",7),P.pc(4,"Projekt ansehen \u2192"),P.Pb(),P.Mb(5,"hr"),P.Pb()),2&t){const t=e.$implicit,n=P.bc(2);P.zb(1),P.ec("innerHTML",t.title.rendered,P.jc),P.zb(1),P.ec("innerHTML",n.getTeaser(t.acf.beschreibung),P.jc),P.zb(1),P.fc("routerLink",t.id)}}function Q(t,e){if(1&t){const t=P.Sb();P.Rb(0,"button",8),P.Zb("click",(function(e){return P.ic(t),P.bc(2).requestNextPage()})),P.pc(1," Mehr laden... "),P.Pb()}}function T(t,e){if(1&t&&(P.Ob(0),P.nc(1,L,6,3,"section",3),P.cc(2,"async"),P.Rb(3,"footer",4),P.nc(4,Q,2,0,"button",5),P.cc(5,"async"),P.cc(6,"async"),P.Pb(),P.Nb()),2&t){const t=P.bc();P.zb(1),P.ec("ngForOf",P.dc(2,2,t.posts$)),P.zb(3),P.ec("ngIf",P.dc(5,4,t.query$).totalPages>t.pagination.page&&!1===P.dc(6,6,t.isFetching$))}}function x(t,e){1&t&&(P.Rb(0,"p",9),P.pc(1," Keine Projekte vorhanden. "),P.Rb(2,"span",10),P.pc(3,"\u{1f6ab}"),P.Pb(),P.Pb())}function V(t,e){if(1&t&&(P.nc(0,x,4,0,"p",2),P.cc(1,"async")),2&t){const t=P.bc();P.ec("ngIf",!1===P.dc(1,1,t.isFetching$))}}function A(t,e){1&t&&(P.Rb(0,"p",9),P.pc(1," Projekte werden geladen... "),P.Mb(2,"app-loading-spinner"),P.Pb())}const B=/<br\s?\/?>(<\/br>)?/g;let H=(()=>{class t{constructor(t){this.store=t,this.pagination={page:1,perPage:8},this.posts$=this.postEntitiesByQueryFn$.pipe(Object(r.a)(t=>t(this.pagination)),Object(r.a)(t=>t.map(t=>t.entity))),this.query$=this.postQueryFn$.pipe(Object(r.a)(t=>t(this.pagination))),this.isFetching$=this.query$.pipe(Object(r.a)(t=>Object.values(t.pages).some(t=>t.isFetching)))}ngOnInit(){this.loadPage()}loadPage(){this.store.dispatch(new l(this.pagination))}requestNextPage(){this.pagination.page++,this.loadPage()}getTeaser(t){return(t=t.replace(B,"")).length<150?t:`${t.slice(0,145)}...`}}return t.\u0275fac=function(e){return new(e||t)(P.Lb(s.k))},t.\u0275cmp=P.Fb({type:t,selectors:[["app-post-master"]],decls:8,vars:7,consts:[[4,"ngIf","ngIfElse"],["noPosts",""],["class","post-master__status-msg",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"post-master__footer"],["type","button",3,"click",4,"ngIf"],[3,"innerHTML"],[3,"routerLink"],["type","button",3,"click"],[1,"post-master__status-msg"],["aria-hidden","true",2,"font-style","normal"]],template:function(t,e){if(1&t&&(P.Rb(0,"h2"),P.pc(1,"DMP Portfolio"),P.Pb(),P.nc(2,T,7,8,"ng-container",0),P.cc(3,"async"),P.nc(4,V,2,3,"ng-template",null,1,P.oc),P.nc(6,A,3,0,"p",2),P.cc(7,"async")),2&t){const t=P.hc(5);P.zb(2),P.ec("ngIf",P.dc(3,3,e.posts$).length)("ngIfElse",t),P.zb(4),P.ec("ngIf",P.dc(7,5,e.isFetching$))}},directives:[i.j,i.i,a.k,$],pipes:[i.b],styles:["section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline}a[_ngcontent-%COMP%]{margin-left:1em}.post-master__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-master__footer[_ngcontent-%COMP%]{text-align:center;margin-top:2rem}"]}),Object(o.b)([Object(s.g)(z.postQueryFn)],t.prototype,"postQueryFn$",void 0),Object(o.b)([Object(s.g)(z.postEntitiesByQueryFn)],t.prototype,"postEntitiesByQueryFn$",void 0),t})();var Z=n("LRne"),N=n("XNiG"),G=n("itXk"),D=n("HDdC"),J=n("mCNh"),U=n("VRyK"),q=n("IzEk"),Y=n("JX91"),K=n("1G5W"),X=n("oB13"),W=n("5+tZ"),tt=n("SxV6"),et=n("l7GE"),nt=n("ZUHj");function it(...t){return e=>{let n;return"function"==typeof t[t.length-1]&&(n=t.pop()),e.lift(new st(t,n))}}class st{constructor(t,e){this.observables=t,this.project=e}call(t,e){return e.subscribe(new at(t,this.observables,this.project))}}class at extends et.a{constructor(t,e,n){super(t),this.observables=e,this.project=n,this.toRespond=[];const i=e.length;this.values=new Array(i);for(let s=0;s<i;s++)this.toRespond.push(s);for(let s=0;s<i;s++){let t=e[s];this.add(Object(nt.a)(this,t,t,s))}}notifyNext(t,e,n,i,s){this.values[n]=e;const a=this.toRespond;if(a.length>0){const t=a.indexOf(n);-1!==t&&a.splice(t,1)}}notifyComplete(){}_next(t){if(0===this.toRespond.length){const e=[t,...this.values];this.project?this._tryProject(e):this.destination.next(e)}}_tryProject(t){let e;try{e=this.project.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}var ot=n("Kqap"),rt=n("/uUt"),ct=n("DH7j"),pt=n("Cfvw"),bt=n("7o/Q");class lt{constructor(t){this.predicate=t}call(t,e){return e.subscribe(new gt(t,this.predicate))}}class gt extends bt.a{constructor(t,e){super(t),this.predicate=e,this.skipping=!0,this.index=0}_next(t){const e=this.destination;this.skipping&&this.tryCallPredicate(t),this.skipping||e.next(t)}tryCallPredicate(t){try{const e=this.predicate(t,this.index++);this.skipping=Boolean(e)}catch(e){this.destination.error(e)}}}var ht=n("pLZG");const dt=["youtubeContainer"],ut=640,yt=390,ft="object"==typeof window&&!!window;let mt=(()=>{class t{constructor(t){this._ngZone=t,this._videoIdObs=new P.n,this._height=yt,this._heightObs=new P.n,this._width=ut,this._widthObs=new P.n,this._startSeconds=new P.n,this._endSeconds=new P.n,this._suggestedQuality=new P.n,this.ready=new P.n,this.stateChange=new P.n,this.error=new P.n,this.apiChange=new P.n,this.playbackQualityChange=new P.n,this.playbackRateChange=new P.n,this._youtubeContainer=new P.n,this._destroyed=new P.n}get videoId(){return this._videoId}set videoId(t){this._videoId=t,this._videoIdObs.emit(t)}get height(){return this._height}set height(t){this._height=t||yt,this._heightObs.emit(this._height)}get width(){return this._width}set width(t){this._width=t||ut,this._widthObs.emit(this._width)}set startSeconds(t){this._startSeconds.emit(t)}set endSeconds(t){this._endSeconds.emit(t)}set suggestedQuality(t){this._suggestedQuality.emit(t)}ngOnInit(){if(!ft)return;let t=Object(Z.a)(!0);if(!window.YT){if(this.showBeforeIframeApiLoads)throw new Error("Namespace YT not found, cannot construct embedded youtube player. Please install the YouTube Player API Reference for iframe Embeds: https://developers.google.com/youtube/iframe_api_reference");const e=new N.a;window.onYouTubeIframeAPIReady=()=>{this._ngZone.run(()=>e.next(!0))},t=e.pipe(Object(q.a)(1),Object(Y.a)(!1))}const e=this._videoIdObs.pipe(Object(Y.a)(this._videoId)),n=this._widthObs.pipe(Object(Y.a)(this._width)),i=this._heightObs.pipe(Object(Y.a)(this._height)),s=this._startSeconds.pipe(Object(Y.a)(void 0)),a=this._endSeconds.pipe(Object(Y.a)(void 0)),o=this._suggestedQuality.pipe(Object(Y.a)(void 0)),c=function(t,e,n,i,s,a){const o=e.pipe(it(Object(G.b)([i,s])),Object(r.a)(([t,[e,n]])=>t?{videoId:t,width:e,height:n,events:a}:void 0));return Object(G.b)([t,o]).pipe((c=n,Object(J.a)(function(...t){let e=null;return"function"==typeof t[t.length-1]&&(e=t.pop()),1===t.length&&Object(ct.a)(t[0])&&(t=t[0].slice()),n=>n.lift.call(Object(pt.a)([n,...t]),new G.a(e))}(c),(p=([t,e])=>!e,t=>t.lift(new lt(p))),Object(r.a)(([t])=>t))),Object(ot.a)(Ot,void 0),Object(rt.a)());var c,p}(this._youtubeContainer,e,t,n,i,this.createEventsBoundInZone()).pipe(Object(W.a)(t=>t?"getPlayerStatus"in t?Object(Z.a)(t):function(t){return new D.a(e=>{let n=!1;const i=t=>{n||(t.target.removeEventListener("onReady",i),e.next(t.target))};return t.addEventListener("onReady",i),()=>{n=!0}})}(t).pipe(Object(tt.a)(),Object(Y.a)(void 0)):Object(Z.a)(void 0)),Object(K.a)(this._destroyed),Object(X.a)(new N.a));c.subscribe(t=>this._player=t),function(t,e,n){Object(G.b)([t,e,n]).subscribe(([t,e,n])=>t&&t.setSize(e,n))}(c,n,i),function(t,e){Object(G.b)([t,e]).subscribe(([t,e])=>t&&e&&t.setPlaybackQuality(e))}(c,o),function(t,e,n,i,s,a){const o=Object(G.b)([n,i]).pipe(Object(r.a)(([t,e])=>({startSeconds:t,endSeconds:e}))),c=o.pipe(_t(t,t=>!!t&&!function(t){return-1===[-1,5].indexOf(t.getPlayerState())}(t))),p=e.pipe(_t(t,(t,e)=>!!t&&t.videoId!==e)),b=t.pipe(_t(Object(G.b)([e,o]),([t,e],n)=>!(!n||t==n.videoId&&!e.startSeconds&&!e.endSeconds)));Object(U.a)(b,p,c).pipe(it(Object(G.b)([t,e,o,s])),Object(r.a)(([t,e])=>e),Object(K.a)(a)).subscribe(([t,e,n,i])=>{e&&t&&(t.videoId=e,t.cueVideoById(Object.assign({videoId:e,suggestedQuality:i},n)))})}(c,e,s,a,o,this._destroyed),c.connect()}createEventsBoundInZone(){return{onReady:this._runInZone(t=>this.ready.emit(t)),onStateChange:this._runInZone(t=>this.stateChange.emit(t)),onPlaybackQualityChange:this._runInZone(t=>this.playbackQualityChange.emit(t)),onPlaybackRateChange:this._runInZone(t=>this.playbackRateChange.emit(t)),onError:this._runInZone(t=>this.error.emit(t)),onApiChange:this._runInZone(t=>this.apiChange.emit(t))}}ngAfterViewInit(){this._youtubeContainer.emit(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=void 0,this._destroyed.emit())}_runInZone(t){return(...e)=>{this._ngZone.run(()=>t(...e))}}playVideo(){this._player&&this._player.playVideo()}pauseVideo(){this._player&&this._player.pauseVideo()}stopVideo(){this._player&&this._player.stopVideo()}seekTo(t,e){this._player&&this._player.seekTo(t,e)}mute(){this._player&&this._player.mute()}unMute(){this._player&&this._player.unMute()}isMuted(){return!this._player||this._player.isMuted()}setVolume(t){this._player&&this._player.setVolume(t)}getVolume(){return this._player?this._player.getVolume():0}setPlaybackRate(t){if(this._player)return this._player.setPlaybackRate(t)}getPlaybackRate(){return this._player?this._player.getPlaybackRate():0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(ft&&window.YT)return this._player?this._player.getPlayerState():-1}getCurrentTime(){return this._player?this._player.getCurrentTime():0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}}return t.\u0275fac=function(e){return new(e||t)(P.Lb(P.z))},t.\u0275cmp=P.Fb({type:t,selectors:[["youtube-player"]],viewQuery:function(t,e){var n;1&t&&P.tc(dt,!0),2&t&&P.gc(n=P.ac())&&(e.youtubeContainer=n.first)},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(t,e){1&t&&P.Mb(0,"div",null,0)},encapsulation:2,changeDetection:0}),t})();function Ot(t,[e,n]){if(!n)return void(t&&t.destroy());if(t)return t;const i=new YT.Player(e,n);return i.videoId=n.videoId,i}function _t(t,e){return Object(J.a)(it(t),Object(ht.a)(([t,n])=>e(n,t)),Object(r.a)(([t])=>t))}let jt=(()=>{class t{}return t.\u0275mod=P.Jb({type:t}),t.\u0275inj=P.Ib({factory:function(e){return new(e||t)}}),t})();function Pt(t,e){if(1&t&&P.Mb(0,"img",3),2&t){const t=P.bc();P.ec("src",t.image.sizes.large,P.kc)("alt",t.image.alt||t.image.title||t.image.name||"")("width",t.image.sizes["large-width"])("height",t.image.sizes["large-height"])}}function wt(t,e){if(1&t&&(P.Rb(0,"div",4),P.Mb(1,"youtube-player",5),P.Pb()),2&t){const t=P.bc();P.zb(1),P.ec("videoId",t.videoId)}}let vt=(()=>{class t{constructor(){}ngOnInit(){if("video"===this.type){this.videoId=m(this.video);const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",document.body.appendChild(t)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=P.Fb({type:t,selectors:[["app-showcase"]],inputs:{type:"type",image:"image",video:"video"},decls:3,vars:3,consts:[[3,"ngSwitch"],[3,"src","alt","width","height",4,"ngSwitchCase"],["class","showcase__iframe-container",4,"ngSwitchCase"],[3,"src","alt","width","height"],[1,"showcase__iframe-container"],[3,"videoId"]],template:function(t,e){1&t&&(P.Ob(0,0),P.nc(1,Pt,1,4,"img",1),P.nc(2,wt,2,1,"div",2),P.Nb()),2&t&&(P.ec("ngSwitch",e.type),P.zb(1),P.ec("ngSwitchCase","image"),P.zb(1),P.ec("ngSwitchCase","video"))},directives:[i.k,i.l,mt],styles:[".showcase__iframe-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;height:0;background:url(video.2e6558147ccb0c5752db.png) center/20% no-repeat,#000}.showcase__iframe-container[_ngcontent-%COMP%] iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]}),t})();function It(t,e){1&t&&P.Mb(0,"span",1),2&t&&P.ec("innerHTML",e.$implicit.name+"<br>",P.jc)}function kt(t,e){1&t&&P.Mb(0,"span",1),2&t&&P.ec("innerHTML",e.$implicit.name+"<br>",P.jc)}function Rt(t,e){1&t&&P.Mb(0,"span",1),2&t&&P.ec("innerHTML",e.$implicit.name+"<br>",P.jc)}let St=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=P.Fb({type:t,selectors:[["app-briefing"]],inputs:{data:"data"},decls:25,vars:7,consts:[["scope","row"],[3,"innerHTML"],[3,"innerHTML",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(P.Rb(0,"table"),P.Rb(1,"tbody"),P.Rb(2,"tr"),P.Rb(3,"th",0),P.pc(4,"Kategorie:"),P.Pb(),P.Mb(5,"td",1),P.Pb(),P.Rb(6,"tr"),P.Rb(7,"th",0),P.pc(8,"Semester:"),P.Pb(),P.Rb(9,"td"),P.nc(10,It,1,1,"span",2),P.Pb(),P.Pb(),P.Rb(11,"tr"),P.Rb(12,"th",0),P.pc(13,"Erstellunsjahr:"),P.Pb(),P.Mb(14,"td",1),P.Pb(),P.Rb(15,"tr"),P.Rb(16,"th",0),P.pc(17),P.Pb(),P.Rb(18,"td"),P.nc(19,kt,1,1,"span",2),P.Pb(),P.Pb(),P.Rb(20,"tr"),P.Rb(21,"th",0),P.pc(22),P.Pb(),P.Rb(23,"td"),P.nc(24,Rt,1,1,"span",2),P.Pb(),P.Pb(),P.Pb(),P.Pb()),2&t&&(P.zb(5),P.ec("innerHTML",e.data.modul.name,P.jc),P.zb(5),P.ec("ngForOf",e.data.semester),P.zb(4),P.ec("innerHTML",e.data.erstellungsjahr,P.jc),P.zb(3),P.rc("",e.data.studierende.length>1?"Studierende":"Student*in",":"),P.zb(2),P.ec("ngForOf",e.data.studierende),P.zb(3),P.rc("",e.data.dozierende.length>1?"Dozierende":"Dozent*in",":"),P.zb(2),P.ec("ngForOf",e.data.dozierende))},directives:[i.i],styles:["th[_ngcontent-%COMP%]{vertical-align:top;border:none}"]}),t})();function Ft(t,e){if(1&t&&(P.Rb(0,"span"),P.pc(1),P.Pb()),2&t){const t=e.$implicit;P.zb(1),P.qc(t.name)}}function Ct(t,e){if(1&t&&(P.Rb(0,"span",12),P.pc(1," \u2013 "),P.nc(2,Ft,2,1,"span",13),P.Pb()),2&t){const t=P.bc().ngIf;P.zb(2),P.ec("ngForOf",t.acf.schlagworte)}}function Mt(t,e){1&t&&(P.Rb(0,"h3"),P.pc(1,"Galerie"),P.Pb())}function Et(t,e){if(1&t&&P.Mb(0,"img",14),2&t){const t=e.$implicit;P.ec("src",t.sizes.medium,P.kc)("alt",t.alt||t.title||t.name||"")("width",t.sizes["medium-width"])("height",t.sizes["medium-height"])}}function zt(t,e){if(1&t){const t=P.Sb();P.Rb(0,"section"),P.Mb(1,"h2",3),P.Rb(2,"p",4),P.pc(3),P.nc(4,Ct,3,1,"span",5),P.Pb(),P.Mb(5,"app-showcase",6),P.Mb(6,"p",3),P.Rb(7,"h3"),P.pc(8,"Steckbrief"),P.Pb(),P.Mb(9,"app-briefing",7),P.nc(10,Mt,2,0,"h3",8),P.nc(11,Et,1,4,"img",9),P.Rb(12,"footer",10),P.Rb(13,"button",11),P.Zb("click",(function(e){return P.ic(t),P.bc(2).toTop()})),P.pc(14,"Nach oben"),P.Pb(),P.Pb(),P.Pb()}if(2&t){const t=e.ngIf;P.zb(1),P.ec("innerHTML",t.title.rendered,P.jc),P.zb(2),P.rc(" ",t.acf.page.post_title," "),P.zb(1),P.ec("ngIf",t.acf.schlagworte.length),P.zb(1),P.ec("type",t.acf.showcaseFormat)("image",t.acf.showcase)("video",t.acf.youtube),P.zb(1),P.ec("innerHTML",t.acf.beschreibung,P.jc),P.zb(3),P.ec("data",t.acf),P.zb(1),P.ec("ngIf",t.acf.galerie.length),P.zb(1),P.ec("ngForOf",t.acf.galerie)}}function $t(t,e){if(1&t&&(P.Ob(0),P.nc(1,zt,15,10,"section",0),P.cc(2,"async"),P.Nb()),2&t){const t=P.bc(),e=P.hc(3);P.zb(1),P.ec("ngIf",P.dc(2,2,t.post$))("ngIfElse",e)}}function Lt(t,e){if(1&t&&(P.Rb(0,"p",15),P.pc(1),P.Rb(2,"span",16),P.pc(3,"\u{1f63f}"),P.Pb(),P.Pb()),2&t){const t=P.bc();P.zb(1),P.rc(" Projekt mit ID \xbb",t.rawId,"\xab nicht gefunden. ")}}function Qt(t,e){1&t&&(P.Rb(0,"p",15),P.pc(1,"Wird geladen... "),P.Mb(2,"app-loading-spinner"),P.Pb())}const Tt=a.l.forChild([{path:"",component:H},{path:":id",component:(()=>{class t{constructor(t,e){this.store=e,this.rawId=t.snapshot.paramMap.get("id"),this.id=Number(this.rawId),this.postEntity$=this.postEntityByIdFn$.pipe(Object(r.a)(t=>t(this.id))),this.post$=this.postEntity$.pipe(Object(r.a)(t=>t.entity)),this.isFetching$=this.postEntity$.pipe(Object(r.a)(t=>t.isFetching))}ngOnInit(){this.store.dispatch(new c(this.id)).subscribe()}toTop(){document.body.scrollIntoView({block:"start",behavior:"smooth"})}}return t.\u0275fac=function(e){return new(e||t)(P.Lb(a.a),P.Lb(s.k))},t.\u0275cmp=P.Fb({type:t,selectors:[["app-post-detail"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["notFound",""],["loadingSpinner",""],[3,"innerHTML"],[1,"post-detail__category"],["class","post-detail__category__tags",4,"ngIf"],[3,"type","image","video"],[3,"data"],[4,"ngIf"],[3,"src","alt","width","height",4,"ngFor","ngForOf"],[1,"post-detail__footer"],["type","button",3,"click"],[1,"post-detail__category__tags"],[4,"ngFor","ngForOf"],[3,"src","alt","width","height"],[1,"post-detail__status-msg"],["role","img","aria-label","Sad cat",2,"font-style","normal"]],template:function(t,e){if(1&t&&(P.nc(0,$t,3,4,"ng-container",0),P.cc(1,"async"),P.nc(2,Lt,4,1,"ng-template",null,1,P.oc),P.nc(4,Qt,3,0,"ng-template",null,2,P.oc)),2&t){const t=P.hc(5);P.ec("ngIf",!1===P.dc(1,2,e.isFetching$))("ngIfElse",t)}},directives:[i.j,vt,St,i.i,$],pipes:[i.b],styles:[".post-detail__category[_ngcontent-%COMP%]{font-weight:500;margin-top:0;margin-bottom:1.5em}.post-detail__category__tags[_ngcontent-%COMP%]{opacity:.6;font-weight:400;font-style:italic}.post-detail__category__tags[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:not(:first-child)::before{content:', '}.post-detail__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-detail__footer[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}"]}),Object(o.b)([Object(s.g)(z.postEntityByIdFn)],t.prototype,"postEntityByIdFn$",void 0),t})()}]);let xt=(()=>{class t{}return t.\u0275mod=P.Jb({type:t}),t.\u0275inj=P.Ib({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),Vt=(()=>{class t{}return t.\u0275mod=P.Jb({type:t}),t.\u0275inj=P.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,a.l,xt]]}),t})(),At=(()=>{class t{}return t.\u0275mod=P.Jb({type:t}),t.\u0275inj=P.Ib({factory:function(e){return new(e||t)},imports:[[i.c,jt,xt]]}),t})();n.d(e,"PortfolioModule",(function(){return Bt}));let Bt=(()=>{class t{}return t.\u0275mod=P.Jb({type:t}),t.\u0275inj=P.Ib({factory:function(e){return new(e||t)},imports:[[i.c,Tt,Vt,At,s.e.forFeature([M])]]}),t})()}}]);
//# sourceMappingURL=portfolio-portfolio-module-es2015.7405b8fa3536df82f541.js.map