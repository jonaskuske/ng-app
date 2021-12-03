"use strict";var Ye=Object.defineProperty,bt=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,vt=(v,S,r)=>S in v?Ye(v,S,{enumerable:!0,configurable:!0,writable:!0,value:r}):v[S]=r,Tt=(v,S)=>{for(var r in S||(S={}))De.call(S,r)&&vt(v,r,S[r]);if(bt)for(var r of bt(S))Re.call(S,r)&&vt(v,r,S[r]);return v};(self.webpackChunkng_app=self.webpackChunkng_app||[]).push([["src_app_portfolio_portfolio_module_ts"],{743:(v,S,r)=>{r.r(S),r.d(S,{PortfolioModule:()=>Le});var _=r(8267),l=r(964),U=r(1917),f=r(8806),g=r(2014);let H=(()=>{class n{constructor(t){this.id=t}}return n.type="[Portfolio] Get Post",n})(),L=(()=>{class n{constructor(t){this.post=t}}return n.type="[Portfolio API] Get Post Success",n})(),X=(()=>{class n{constructor(t,s){this.id=t,this.error=s}}return n.type="[Portfolio API] Get Post Error",n})(),Y=(()=>{class n{constructor(t){this.page=t}}return n.type="[Portfolio] Get Post Page",n})(),q=(()=>{class n{constructor(t,s){this.page=t,this.payload=s}}return n.type="[Portfolio API] Get Post Page Success",n})(),W=(()=>{class n{constructor(t,s){this.page=t,this.error=s}}return n.type="[Portfolio API] Get Post Page Error",n})();class D{static getEntities(i){return(0,l.P1)([i],t=>t.entities)}static getEntityList(i){return(0,l.P1)([i],t=>Object.values(t.entities))}static getEntityIds(i){return(0,l.P1)([i],t=>Object.keys(t.entities))}static getEntityListByPageFn(i){return t=>(0,l.P1)([i],s=>t.map(o=>s.entities[o]))}}const K=n=>Array.isArray(n),F=n=>{var t=(0,f._T)(n,["page"]);return`?${new URLSearchParams(t)}`};var tt=r(2489);function R(n){return"function"==typeof n}function d(n){return function(t){let s=null;for(const o in n){const a=n[o],c=t[o],u=R(a)?a(c):a;u!==c&&(s||(s=Object.assign({},t)),s[o]=u)}return s||t}}const I=(n,i=null)=>({id:n,entity:i,lastUpdatedAt:(new Date).toISOString(),isFetching:!1,isRefreshing:!1,isError:!1});function ot(n){return i=>(K(n)?n.some(s=>!i.includes(s)):i.includes(n))?i:i.concat(K(n)?n.filter(s=>!i.includes(s)):n)}function at(n){return i=>{const t=i.entities[n.id];return Object.assign(Object.assign({},i),{entities:Object.assign(Object.assign({},i.entities),{[n.id]:Object.assign(Object.assign({},t),n)})})}}var e=r(4001),rt=r(3981),It=r(2354),N=r(2407),Mt=r(8260);const{apiUrl:O}=Mt.N,Et=n=>{const i=n.get("x-wp-total");if(null==i)throw Error('Header "x-wp-total" missing in response');return Number(i)},Ut=n=>{const i=n.get("x-wp-totalpages");if(null==i)throw Error('Header "x-wp-totalpages" missing in response');return Number(i)},Ft=n=>{const{body:i,headers:t}=n;return{body:i,total:Et(t),totalPages:Ut(t)}};let Ot=(()=>{class n{constructor(t){this.http=t}getCategory(t){return this.http.get(`${O}categories/${t}`)}getPostFromBasePost(t){return this.http.get(`${O}categories/${t.categories[0]}`).pipe((0,g.U)(s=>Object.assign(Object.assign({},t),{categoryName:s.name})))}getPost(t){return this.http.get(`${O}posts/${t}`).pipe((0,N.w)(s=>this.getPostFromBasePost(s)))}getPosts({page:t,perPage:s=10}){const o=new rt.LE({fromObject:{page:String(t),per_page:String(s)}});return this.http.get(`${O}posts`,{params:o,observe:"response"}).pipe((0,N.w)(a=>(0,It.D)(a.body.map(c=>this.getPostFromBasePost(c))).pipe((0,g.U)(c=>Object.assign(Object.assign({},a),{body:c})))),(0,g.U)(Ft))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(rt.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),p=class{constructor(i,t){this.postsService=i,this.store=t}ngxsOnInit(i){i.dispatch(new Y({page:1,perPage:8}))}getPost(i,{id:t}){const s=i.getState().entities[t];return s&&!s.isError?i.dispatch(new L(s.entity)):(i.setState(function(n){const i=n.id.toString();return d({ids:ot(i),entities:d({[i]:n})})}(Object.assign(Object.assign({},I(t)),{isFetching:!0}))),this.postsService.getPost(t).pipe((0,g.U)(o=>i.dispatch(new L(o))),(0,tt.K)(o=>i.dispatch(new X(t,o)))))}getPostSuccess(i,{post:t}){i.setState(at(I(t.id,t)))}getPostError(i,{id:t,error:s}){i.setState(at({id:t,isError:!0,isFetching:!1,isRefreshing:!1})),console.error(s)}getPostPage(i,{page:t}){const s=i.getState(),o=F(t),a=i.getState().pagination[o];if(!a||!a.pages[t.page])return a||i.patchState({pagination:Object.assign(Object.assign({},s.pagination),{[o]:{total:0,totalPages:0,pages:{}}})}),i.setState(d({pagination:d({[o]:d({pages:d({[t.page]:Object.assign(Object.assign({},I(t.page)),{isFetching:!0})})})})})),this.postsService.getPosts(t).pipe((0,g.U)(c=>i.dispatch(new q(t,c))),(0,tt.K)(c=>i.dispatch(new W(t,c))))}getPostPageSuccess(i,{page:t,payload:s}){const o=F(t),a=s.body.map(u=>I(u.id,u)),c=s.body.map(u=>u.id.toString());i.setState(function(n){const i=n.reduce((t,s)=>(t[s.id]=s,t),{});return d({ids:ot(n.map(t=>t.id.toString())),entities:d(i)})}(a)),i.setState(d({pagination:d({[o]:d({total:s.total,totalPages:s.totalPages,pages:d({[t.page]:Object.assign({},I(t.page,c))})})})}))}getPostPageError(i,{page:t,error:s}){const o=F(t);i.setState(d({pagination:d({[o]:d({pages:d({[t.page]:d({isError:!0,isRefreshing:!1,isFetching:!1})})})})})),console.error(s)}};p.\u0275fac=function(i){return new(i||p)(e.LFG(Ot),e.LFG(l.yh))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac}),(0,f.gn)([(0,l.aU)(H)],p.prototype,"getPost",null),(0,f.gn)([(0,l.aU)(L)],p.prototype,"getPostSuccess",null),(0,f.gn)([(0,l.aU)(X)],p.prototype,"getPostError",null),(0,f.gn)([(0,l.aU)(Y)],p.prototype,"getPostPage",null),(0,f.gn)([(0,l.aU)(q)],p.prototype,"getPostPageSuccess",null),(0,f.gn)([(0,l.aU)(W)],p.prototype,"getPostPageError",null),p=(0,f.gn)([(0,l.ZM)({name:"portfolio",defaults:{entities:{},ids:[],pagination:{}}})],p);class y{static pagination(i){return i.pagination}static postEntityByIdFn(i){return t=>i[t]}static postQueryFn(i){return t=>i[F(t)]}static postQueryPageFn(i){return t=>i(t).pages[t.page]}static postEntitiesByQueryFn(i,t){return s=>Object.values(t(s).pages).filter(c=>!c.isFetching).map(c=>c.entity).flat().map(c=>i[c])}}y.entities=D.getEntities(p),y.ids=D.getEntityIds(p),y.posts=D.getEntityList(p),(0,f.gn)([(0,l.Qf)([p])],y,"pagination",null),(0,f.gn)([(0,l.Qf)([y.entities])],y,"postEntityByIdFn",null),(0,f.gn)([(0,l.Qf)([y.pagination])],y,"postQueryFn",null),(0,f.gn)([(0,l.Qf)([y.postQueryFn])],y,"postQueryPageFn",null),(0,f.gn)([(0,l.Qf)([y.entities,y.postQueryFn])],y,"postEntitiesByQueryFn",null);var M=r(3238),T=r(8824),E=r(8433),x=r(4932),B=r(9512),ct=r(424);function lt(n,i,t){return t?lt(n,i).pipe((0,ct.Z)(t)):new x.y(s=>{const o=(...c)=>s.next(1===c.length?c[0]:c),a=n(o);return(0,B.m)(i)?()=>i(o,a):void 0})}var b=r(3927),k=r(6339),Qt=r(3019),pt=r(7529),ut=r(2812),Lt=r(5309),V=r(6567),Yt=r(9818),Dt=r(7797),Q=r(5191);const Jt={connector:()=>new M.x};function gt(n,i=Jt){const{connector:t}=i;return(0,Q.e)((s,o)=>{const a=t();(0,Dt.D)(n(function(n){return new x.y(i=>n.subscribe(i))}(a))).subscribe(o),o.add(s.subscribe(a))})}var kt=r(4243),$=r(5308),Vt=r(3957),$t=r(713),jt=r(1074),dt=r(4976);function j(...n){const i=(0,dt.jO)(n);return(0,Q.e)((t,s)=>{const o=n.length,a=new Array(o);let c=n.map(()=>!1),u=!1;for(let m=0;m<o;m++)(0,Vt.Xf)(n[m]).subscribe(new $.Q(s,C=>{a[m]=C,!u&&!c[m]&&(c[m]=!0,(u=c.every($t.y))&&(c=null))},jt.Z));t.subscribe(new $.Q(s,m=>{if(u){const C=[m,...a];s.next(i?i(...C):C)}}))})}var zt=r(285),Gt=r(1607);const{isArray:Ht}=Array;function Xt(n){return 1===n.length&&Ht(n[0])?n[0]:n}function ht(...n){const i=(0,dt.jO)(n);return i?(0,k.z)(ht(...n),(0,ct.Z)(i)):(0,Q.e)((t,s)=>{(0,b.l)([t,...Xt(n)])(s)})}var Wt=r(1569);const Kt=["youtubeContainer"];let mt=(()=>{class n{constructor(t,s){this._ngZone=t,this._youtubeContainer=new M.x,this._destroyed=new M.x,this._playerChanges=new T.X(void 0),this._videoId=new T.X(void 0),this._height=new T.X(390),this._width=new T.X(640),this._startSeconds=new T.X(void 0),this._endSeconds=new T.X(void 0),this._suggestedQuality=new T.X(void 0),this._playerVars=new T.X(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=(0,_.NF)(s)}get videoId(){return this._videoId.value}set videoId(t){this._videoId.next(t)}get height(){return this._height.value}set height(t){this._height.next(t||390)}get width(){return this._width.value}set width(t){this._width.next(t||640)}set startSeconds(t){this._startSeconds.next(t)}set endSeconds(t){this._endSeconds.next(t)}set suggestedQuality(t){this._suggestedQuality.next(t)}get playerVars(){return this._playerVars.value}set playerVars(t){this._playerVars.next(t)}ngOnInit(){if(!this._isBrowser)return;let t=(0,E.of)(!0);if(!window.YT||!window.YT.Player){const o=new M.x;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>o.next(!0))},t=o.pipe((0,pt.q)(1),(0,ut.O)(!1))}const s=function(n,i,t,s,o,a,c){const u=(0,b.a)([i,a]).pipe(j((0,b.a)([s,o])),(0,g.U)(([m,C])=>{const[h,P]=m,[Z,G]=C;return h?{videoId:h,playerVars:P,width:Z,height:G}:void 0}));return(0,b.a)([n,u,(0,E.of)(c)]).pipe(function(n){return(0,k.z)(ht(n),(0,Q.e)((i,t)=>{let s=!1;i.subscribe(new $.Q(t,a=>(s||(s=!(([i,t])=>!t)(a)))&&t.next(a)))}),(0,g.U)(([i])=>i))}(t),(0,zt.R)(oe,void 0),(0,Gt.x)())}(this._youtubeContainer,this._videoId,t,this._width,this._height,this._playerVars,this._ngZone).pipe((0,Lt.b)(o=>{this._playerChanges.next(o)}),(0,kt.z)(i=>i?_t(i)?(0,E.of)(i):new x.y(t=>{let s=!1,o=!1;const a=c=>{o=!0,s||(c.target.removeEventListener("onReady",a),t.next(c.target))};return i.addEventListener("onReady",a),()=>{s=!0,o||(o=>{_t(o)||o.destroy()})(i)}}).pipe((0,pt.q)(1),(0,ut.O)(void 0)):(0,E.of)(void 0)),(0,V.R)(this._destroyed),function(n){return n?i=>gt(n)(i):i=>function(n,i){const t=(0,B.m)(n)?n:()=>n;return(0,B.m)(i)?gt(i,{connector:t}):s=>new Yt.c(s,t)}(new M.x)(i)}());s.subscribe(o=>{this._player=o,o&&this._pendingPlayerState&&this._initializePlayer(o,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(n,i,t){(0,b.a)([n,i,t]).subscribe(([s,o,a])=>s&&s.setSize(o,a))}(s,this._width,this._height),function(n,i){(0,b.a)([n,i]).subscribe(([t,s])=>t&&s&&t.setPlaybackQuality(s))}(s,this._suggestedQuality),function(n,i,t,s,o,a){const c=(0,b.a)([t,s]).pipe((0,g.U)(([h,P])=>({startSeconds:h,endSeconds:P}))),u=c.pipe(z(n,h=>!!h&&!function(n){const i=n.getPlayerState();return i!==YT.PlayerState.UNSTARTED&&i!==YT.PlayerState.CUED}(h))),m=i.pipe(z(n,(h,P)=>!!h&&h.videoId!==P)),C=n.pipe(z((0,b.a)([i,c]),([h,P],Z)=>!(!Z||h==Z.videoId&&!P.startSeconds&&!P.endSeconds)));(0,Qt.T)(C,m,u).pipe(j((0,b.a)([n,i,c,o])),(0,g.U)(([h,P])=>P),(0,V.R)(a)).subscribe(([h,P,Z,G])=>{!P||!h||(h.videoId=P,h.cueVideoById(Tt({videoId:P,suggestedQuality:G},Z)))})}(s,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),s.connect()}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=YT.PlayerState.PLAYING}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=YT.PlayerState.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=YT.PlayerState.CUED}seekTo(t,s){this._player?this._player.seekTo(t,s):this._getPendingState().seek={seconds:t,allowSeekAhead:s}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(t){this._player?this._player.setVolume(t):this._getPendingState().volume=t}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(t){if(this._player)return this._player.setPlaybackRate(t);this._getPendingState().playbackRate=t}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:YT.PlayerState.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(t,s){const{playbackState:o,playbackRate:a,volume:c,muted:u,seek:m}=s;switch(o){case YT.PlayerState.PLAYING:t.playVideo();break;case YT.PlayerState.PAUSED:t.pauseVideo();break;case YT.PlayerState.CUED:t.stopVideo()}null!=a&&t.setPlaybackRate(a),null!=c&&t.setVolume(c),null!=u&&(u?t.mute():t.unMute()),null!=m&&t.seekTo(m.seconds,m.allowSeekAhead)}_getLazyEmitter(t){return this._playerChanges.pipe((0,N.w)(s=>s?lt(o=>{s.addEventListener(t,o)},o=>{try{s.removeEventListener&&s.removeEventListener(t,o)}catch(a){}}):(0,E.of)()),s=>new x.y(o=>s.subscribe({next:a=>this._ngZone.run(()=>o.next(a)),error:a=>o.error(a),complete:()=>o.complete()})),(0,V.R)(this._destroyed))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.R0b),e.Y36(e.Lbi))},n.\u0275cmp=e.Xpm({type:n,selectors:[["youtube-player"]],viewQuery:function(t,s){if(1&t&&e.Gf(Kt,5),2&t){let o;e.iGM(o=e.CRH())&&(s.youtubeContainer=o.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(t,s){1&t&&e._UZ(0,"div",null,0)},encapsulation:2,changeDetection:0}),n})();function oe(n,[i,t,s]){if(n&&t&&n.playerVars!==t.playerVars)n.destroy();else{if(!t)return void(n&&n.destroy());if(n)return n}const o=s.runOutsideAngular(()=>new YT.Player(i,t));return o.videoId=t.videoId,o.playerVars=t.playerVars,o}function _t(n){return"getPlayerStatus"in n}function z(n,i){return(0,k.z)(j(n),(0,Wt.h)(([t,s])=>i(s,t)),(0,g.U)(([t])=>t))}let ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();function le(n,i){if(1&n&&e._UZ(0,"img",3),2&n){const t=e.oxw();e.Q6J("src",t.image.sizes.large,e.LSH)("alt",t.image.alt||t.image.title||t.image.name||"")("width",t.image.sizes["large-width"])("height",t.image.sizes["large-height"])}}function pe(n,i){if(1&n&&(e.TgZ(0,"div",4),e._UZ(1,"youtube-player",5),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("videoId",t.videoId)}}let ue=(()=>{class n{constructor(t){this.document=t}ngOnInit(){"video"===this.type&&(this.videoId=((n,i={fuzzy:!0})=>{if(!/youtu\.?be/.test(n))return null;let t;const s=[/youtu\.be\/([^#&?]{11})/,/\?v=([^#&?]{11})/,/&v=([^#&?]{11})/,/embed\/([^#&?]{11})/,/\/v\/([^#&?]{11})/];for(t=0;t<s.length;++t)if(s[t].test(n))return s[t].exec(n)[1];if(i.fuzzy){const o=n.split(/[/&?=#.\s]/g);for(t=0;t<o.length;++t)if(/^[^#&?]{11}$/.test(o[t]))return o[t]}})(this.video),"undefined"==typeof YT&&this.loadYouTubeAPI())}loadYouTubeAPI(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",this.document.body.appendChild(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.K0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-showcase"]],inputs:{type:"type",image:"image",video:"video"},decls:3,vars:3,consts:[[3,"ngSwitch"],[3,"src","alt","width","height",4,"ngSwitchCase"],["class","showcase__iframe-container",4,"ngSwitchCase"],[3,"src","alt","width","height"],[1,"showcase__iframe-container"],["data-testid","yt-player",3,"videoId"]],template:function(t,s){1&t&&(e.ynx(0,0),e.YNc(1,le,1,4,"img",1),e.YNc(2,pe,2,1,"div",2),e.BQk()),2&t&&(e.Q6J("ngSwitch",s.type),e.xp6(1),e.Q6J("ngSwitchCase","image"),e.xp6(1),e.Q6J("ngSwitchCase","video"))},directives:[_.RF,_.n9,mt],styles:[".showcase__iframe-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;height:0;background:url(video.ff33972232166f4b.png) center / 20% no-repeat,black}.showcase__iframe-container[_ngcontent-%COMP%]     iframe{position:absolute;top:0;left:0;width:100%;height:100%}\n/*# sourceMappingURL=showcase.component.css.map*/"]}),n})();function ge(n,i){1&n&&e._UZ(0,"span",1),2&n&&e.Q6J("innerHTML",i.$implicit.name+"<br>",e.oJD)}function de(n,i){1&n&&e._UZ(0,"span",1),2&n&&e.Q6J("innerHTML",i.$implicit.name+"<br>",e.oJD)}function he(n,i){1&n&&e._UZ(0,"span",1),2&n&&e.Q6J("innerHTML",i.$implicit.name+"<br>",e.oJD)}let fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-briefing"]],inputs:{data:"data"},decls:25,vars:7,consts:[["scope","row"],[3,"innerHTML"],[3,"innerHTML",4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(e.TgZ(0,"table"),e.TgZ(1,"tbody"),e.TgZ(2,"tr"),e.TgZ(3,"th",0),e._uU(4,"Kategorie:"),e.qZA(),e._UZ(5,"td",1),e.qZA(),e.TgZ(6,"tr"),e.TgZ(7,"th",0),e._uU(8,"Semester:"),e.qZA(),e.TgZ(9,"td"),e.YNc(10,ge,1,1,"span",2),e.qZA(),e.qZA(),e.TgZ(11,"tr"),e.TgZ(12,"th",0),e._uU(13,"Erstellunsjahr:"),e.qZA(),e._UZ(14,"td",1),e.qZA(),e.TgZ(15,"tr"),e.TgZ(16,"th",0),e._uU(17),e.qZA(),e.TgZ(18,"td"),e.YNc(19,de,1,1,"span",2),e.qZA(),e.qZA(),e.TgZ(20,"tr"),e.TgZ(21,"th",0),e._uU(22),e.qZA(),e.TgZ(23,"td"),e.YNc(24,he,1,1,"span",2),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("innerHTML",s.data.topic.name,e.oJD),e.xp6(5),e.Q6J("ngForOf",s.data.semester),e.xp6(4),e.Q6J("innerHTML",s.data.year,e.oJD),e.xp6(3),e.hij("",s.data.students.length>1?"Studierende":"Student*in",":"),e.xp6(2),e.Q6J("ngForOf",s.data.students),e.xp6(3),e.hij("",s.data.lecturers.length>1?"Dozierende":"Dozent*in",":"),e.xp6(2),e.Q6J("ngForOf",s.data.lecturers))},directives:[_.sg],styles:["th[_ngcontent-%COMP%]{vertical-align:top;border:none}\n/*# sourceMappingURL=briefing.component.css.map*/"]}),n})(),Pt=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[["role","img","aria-hidden","true",1,"post-detail__spinner",2,"font-style","normal"]],template:function(t,s){1&t&&(e.TgZ(0,"span",0),e._uU(1,"\u23f3"),e.qZA())},styles:[".post-detail__spinner[_ngcontent-%COMP%]{display:inline-block;margin-left:.5em;animation:rotate 2.5s infinite ease-in-out}@keyframes rotate{0%{transform:rotate(0)}15%{transform:rotate(180deg)}50%{transform:rotate(180deg)}65%{transform:rotate(360deg)}to{transform:rotate(360deg)}}\n/*# sourceMappingURL=loading-spinner.component.css.map*/"]}),n})();function ye(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.name)}}function me(n,i){if(1&n&&(e.TgZ(0,"span",12),e._uU(1," \u2013 "),e.YNc(2,ye,2,1,"span",13),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",t.acf.tags)}}function _e(n,i){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Galerie"),e.qZA())}function Pe(n,i){if(1&n&&e._UZ(0,"img",14),2&n){const t=i.$implicit;e.Q6J("src",t.sizes.medium,e.LSH)("alt",t.alt||t.title||t.name||"")("width",t.sizes["medium-width"])("height",t.sizes["medium-height"])}}function Se(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"section"),e._UZ(1,"h2",3),e.TgZ(2,"p",4),e._uU(3),e.YNc(4,me,3,1,"span",5),e.qZA(),e._UZ(5,"app-showcase",6),e._UZ(6,"div",3),e.TgZ(7,"h3"),e._uU(8,"Steckbrief"),e.qZA(),e._UZ(9,"app-briefing",7),e.YNc(10,_e,2,0,"h3",8),e.YNc(11,Pe,1,4,"img",9),e.TgZ(12,"footer",10),e.TgZ(13,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).toTop()}),e._uU(14,"Nach oben"),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=i.ngIf;e.xp6(1),e.Q6J("innerHTML",t.title.rendered,e.oJD),e.xp6(2),e.hij(" ",t.categoryName," "),e.xp6(1),e.Q6J("ngIf",t.acf.tags.length),e.xp6(1),e.Q6J("type",t.acf.showcaseType)("image",t.acf.showcaseImage)("video",t.acf.showcaseVideo),e.xp6(1),e.Q6J("innerHTML",t.acf.description,e.oJD),e.xp6(3),e.Q6J("data",t.acf),e.xp6(1),e.Q6J("ngIf",t.acf.gallery.length),e.xp6(1),e.Q6J("ngForOf",t.acf.gallery)}}function be(n,i){if(1&n&&(e.ynx(0),e.YNc(1,Se,15,10,"section",0),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw(),s=e.MAs(3);e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,t.post$))("ngIfElse",s)}}function ve(n,i){if(1&n&&(e.TgZ(0,"p",15),e._uU(1),e.TgZ(2,"span",16),e._uU(3,"\u{1f63f}"),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" Projekt mit ID \xbb",t.rawId,"\xab nicht gefunden. ")}}function Te(n,i){1&n&&(e.TgZ(0,"p",15),e._uU(1,"Wird geladen... "),e._UZ(2,"app-loading-spinner"),e.qZA())}class A{constructor(i,t){this.store=t,this.rawId=i.snapshot.paramMap.get("id"),this.id=Number(this.rawId)}ngOnInit(){this.postEntity$=this.postEntityByIdFn$.pipe((0,g.U)(i=>i(this.id))),this.post$=this.postEntity$.pipe((0,g.U)(i=>i.entity)),this.isFetching$=this.postEntity$.pipe((0,g.U)(i=>i.isFetching)),this.store.dispatch(new H(this.id)).subscribe()}toTop(){document.body.scrollIntoView({block:"start",behavior:"smooth"})}}function Ce(n,i){1&n&&e._UZ(0,"hr")}function we(n,i){if(1&n&&(e.TgZ(0,"section"),e.YNc(1,Ce,1,0,"hr",6),e._UZ(2,"h3",7),e.TgZ(3,"div"),e._UZ(4,"div",7),e.TgZ(5,"a",8),e._uU(6,"Projekt ansehen \u2192"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=i.$implicit,s=i.first,o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!s),e.xp6(1),e.Q6J("innerHTML",t.title.rendered,e.oJD),e.xp6(2),e.Q6J("innerHTML",o.getTeaser(t.acf.description),e.oJD),e.xp6(1),e.s9C("routerLink",t.id)}}function Ae(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).requestNextPage()}),e._uU(1," Mehr laden... "),e.qZA()}}function Ze(n,i){if(1&n&&(e.ynx(0),e.YNc(1,we,7,4,"section",3),e.ALo(2,"async"),e.TgZ(3,"footer",4),e.YNc(4,Ae,2,0,"button",5),e.ALo(5,"async"),e.ALo(6,"async"),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.posts$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(5,4,t.query$).totalPages>t.pagination.page&&!1===e.lcZ(6,6,t.isFetching$))}}function Ie(n,i){1&n&&(e.TgZ(0,"p",10),e._uU(1," Keine Projekte vorhanden. "),e.TgZ(2,"span",11),e._uU(3,"\u{1f6ab}"),e.qZA(),e.qZA())}function Me(n,i){if(1&n&&(e.YNc(0,Ie,4,0,"p",2),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("ngIf",!1===e.lcZ(1,1,t.isFetching$))}}function Ee(n,i){1&n&&(e.TgZ(0,"p",10),e._uU(1," Projekte werden geladen... "),e._UZ(2,"app-loading-spinner"),e.qZA())}A.\u0275fac=function(i){return new(i||A)(e.Y36(U.gz),e.Y36(l.yh))},A.\u0275cmp=e.Xpm({type:A,selectors:[["app-post-detail"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["notFound",""],["loadingSpinner",""],[3,"innerHTML"],[1,"post-detail__category"],["class","post-detail__category__tags",4,"ngIf"],[3,"type","image","video"],[3,"data"],[4,"ngIf"],[3,"src","alt","width","height",4,"ngFor","ngForOf"],[1,"post-detail__footer"],["type","button",3,"click"],[1,"post-detail__category__tags"],[4,"ngFor","ngForOf"],[3,"src","alt","width","height"],[1,"post-detail__status-msg"],["role","img","aria-label","Sad cat",2,"font-style","normal"]],template:function(i,t){if(1&i&&(e.YNc(0,be,3,4,"ng-container",0),e.ALo(1,"async"),e.YNc(2,ve,4,1,"ng-template",null,1,e.W1O),e.YNc(4,Te,3,0,"ng-template",null,2,e.W1O)),2&i){const s=e.MAs(5);e.Q6J("ngIf",!1===e.lcZ(1,2,t.isFetching$))("ngIfElse",s)}},directives:[_.O5,ue,fe,_.sg,Pt],pipes:[_.Ov],styles:['.post-detail__category[_ngcontent-%COMP%]{font-weight:500;margin-top:0;margin-bottom:1.5em}.post-detail__category__tags[_ngcontent-%COMP%]{opacity:.6;font-weight:400;font-style:italic}.post-detail__category__tags[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:not(:first-child):before{content:", "}.post-detail__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-detail__footer[_ngcontent-%COMP%]{border-top:none;margin-top:1rem;text-align:center}\n/*# sourceMappingURL=post-detail.component.css.map*/']}),(0,f.gn)([(0,l.Ph)(y.postEntityByIdFn)],A.prototype,"postEntityByIdFn$",void 0);const Ue=/<br\s?\/?>(<\/br>)?/g;class w{constructor(i){this.store=i,this.pagination={page:1,perPage:8}}ngOnInit(){this.posts$=this.postEntitiesByQueryFn$.pipe((0,g.U)(i=>i(this.pagination)),(0,g.U)(i=>i.map(t=>t.entity))),this.query$=this.postQueryFn$.pipe((0,g.U)(i=>i(this.pagination))),this.isFetching$=this.query$.pipe((0,g.U)(i=>Object.values(i.pages).some(t=>t.isFetching))),this.loadPage()}loadPage(){this.store.dispatch(new Y(this.pagination))}requestNextPage(){this.pagination.page++,this.loadPage()}getTeaser(i){return(i=i.replace(Ue,"")).length<160?i:`${i.slice(0,160)}...`}}w.\u0275fac=function(i){return new(i||w)(e.Y36(l.yh))},w.\u0275cmp=e.Xpm({type:w,selectors:[["app-post-master"]],decls:8,vars:7,consts:[[4,"ngIf","ngIfElse"],["noPosts",""],["class","post-master__status-msg",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"post-master__footer"],["type","button",3,"click",4,"ngIf"],[4,"ngIf"],[3,"innerHTML"],[3,"routerLink"],["type","button",3,"click"],[1,"post-master__status-msg"],["aria-hidden","true",2,"font-style","normal"]],template:function(i,t){if(1&i&&(e.TgZ(0,"h2"),e._uU(1,"DMP Portfolio"),e.qZA(),e.YNc(2,Ze,7,8,"ng-container",0),e.ALo(3,"async"),e.YNc(4,Me,2,3,"ng-template",null,1,e.W1O),e.YNc(6,Ee,3,0,"p",2),e.ALo(7,"async")),2&i){const s=e.MAs(5);e.xp6(2),e.Q6J("ngIf",e.lcZ(3,3,t.posts$).length)("ngIfElse",s),e.xp6(4),e.Q6J("ngIf",e.lcZ(7,5,t.isFetching$))}},directives:[_.O5,_.sg,U.yS,Pt],pipes:[_.Ov],styles:["section[_ngcontent-%COMP%]{margin-bottom:2em}section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]  p{display:inline}a[_ngcontent-%COMP%]{margin-left:1em}.post-master__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-master__footer[_ngcontent-%COMP%]{border-top:none;text-align:center;margin-top:2rem}\n/*# sourceMappingURL=post-master.component.css.map*/"]}),(0,f.gn)([(0,l.Ph)(y.postQueryFn)],w.prototype,"postQueryFn$",void 0),(0,f.gn)([(0,l.Ph)(y.postEntitiesByQueryFn)],w.prototype,"postEntitiesByQueryFn$",void 0);const Oe=U.Bz.forChild([{path:"",component:w},{path:":id",component:A}]);let St=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez]]}),n})(),xe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,ce,St]]}),n})(),Qe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[_.ez,U.Bz,St]]}),n})(),Le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,Oe,Qe,xe,l.$l.forFeature([p])]]}),n})()}}]);
//# sourceMappingURL=src_app_portfolio_portfolio_module_ts.31cfdcf43d32d1e0.js.map