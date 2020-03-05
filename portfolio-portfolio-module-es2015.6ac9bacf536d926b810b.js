(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9enj":function(t,e,n){"use strict";n.r(e);var i=n("SVse"),s=n("e1JD"),a=n("iInd"),r=n("mrSG"),o=n("lJxs");let c=(()=>{class t{constructor(t){this.id=t}}return t.type="[Portfolio] Get Post",t})(),l=(()=>{class t{constructor(t){this.post=t}}return t.type="[Portfolio API] Get Post Success",t})(),p=(()=>{class t{constructor(t,e){this.id=t,this.error=e}}return t.type="[Portfolio API] Get Post Error",t})(),d=(()=>{class t{constructor(t){this.page=t}}return t.type="[Portfolio] Get Post Page",t})(),b=(()=>{class t{constructor(t,e){this.page=t,this.payload=e}}return t.type="[Portfolio API] Get Post Page Success",t})(),g=(()=>{class t{constructor(t,e){this.page=t,this.error=e}}return t.type="[Portfolio API] Get Post Page Error",t})();class u{static getEntities(t){return Object(s.l)([t],t=>t.entities)}static getEntityList(t){return Object(s.l)([t],t=>Object.values(t.entities))}static getEntityIds(t){return Object(s.l)([t],t=>Object.keys(t.entities))}static getEntityListByPageFn(t){return e=>Object(s.l)([t],t=>e.map(e=>t.entities[e]))}}const h=t=>Array.isArray(t),y=t=>{var e=Object(r.d)(t,["page"]);return`?${new URLSearchParams(e)}`};var f=n("JIr8"),_=n("Ub/u");const m=(t,e=null)=>({id:t,entity:e,lastUpdatedAt:(new Date).toISOString(),isFetching:!1,isRefreshing:!1,isError:!1});function P(t){return e=>(h(t)?t.some(t=>!e.includes(t)):e.includes(t))?e:e.concat(h(t)?t.filter(t=>!e.includes(t)):t)}function O(t){return e=>{const n=e.entities[t.id];return Object.assign(Object.assign({},e),{entities:Object.assign(Object.assign({},e.entities),{[t.id]:Object.assign(Object.assign({},n),t)})})}}var w=n("8Y7J"),j=n("IheW"),v=n("AytR");const{apiUrl:S}=v.a,I=t=>{const e=t.get("x-wp-total");if(null==e)throw Error('Header "x-wp-total" missing in response');return Number(e)},k=t=>{const e=t.get("x-wp-totalpages");if(null==e)throw Error('Header "x-wp-totalpages" missing in response');return Number(e)},Q=t=>{const{body:e,headers:n}=t;return{body:e,total:I(n),totalPages:k(n)}};let C=(()=>{class t{constructor(t){this.http=t}getPost(t){return this.http.get(`${S}posts/${t}`)}getPosts({page:t,perPage:e=10}){const n=new j.c({fromObject:{page:String(t),per_page:String(e)}});return this.http.get(`${S}posts`,{params:n,observe:"response"}).pipe(Object(o.a)(Q))}}return t.\u0275fac=function(e){return new(e||t)(w.Ub(j.a))},t.\u0275prov=w.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const F={entities:{},ids:[],pagination:{}};let M=(()=>{let t=class{constructor(t,e){this.postsService=t,this.store=e}ngxsOnInit(t){t.dispatch(new d({page:1,perPage:8}))}getPost(t,{id:e}){const n=t.getState().entities[e];return n&&!n.isError?t.dispatch(new l(n.entity)):(t.setState(function(t){const e=t.id.toString();return Object(_.b)({ids:P(e),entities:Object(_.b)({[e]:t})})}(Object.assign(Object.assign({},m(e)),{isFetching:!0}))),this.postsService.getPost(e).pipe(Object(o.a)(e=>t.dispatch(new l(e))),Object(f.a)(n=>t.dispatch(new p(e,n)))))}getPostSuccess(t,{post:e}){t.setState(O(m(e.id,e)))}getPostError(t,{id:e,error:n}){t.setState(O({id:e,isError:!0,isFetching:!1,isRefreshing:!1})),console.error(n)}getPostPage(t,{page:e}){const n=t.getState(),i=y(e),s=t.getState().pagination[i];if(!s||!s.pages[e.page])return s||t.patchState({pagination:Object.assign(Object.assign({},n.pagination),{[i]:{total:0,totalPages:0,pages:{}}})}),t.setState(Object(_.b)({pagination:Object(_.b)({[i]:Object(_.b)({pages:Object(_.b)({[e.page]:Object.assign(Object.assign({},m(e.page)),{isFetching:!0})})})})})),this.postsService.getPosts(e).pipe(Object(o.a)(n=>t.dispatch(new b(e,n))),Object(f.a)(n=>t.dispatch(new g(e,n))))}getPostPageSuccess(t,{page:e,payload:n}){const i=y(e),s=n.body.map(t=>m(t.id,t)),a=n.body.map(t=>t.id.toString());t.setState(function(t){const e=t.reduce((t,e)=>(t[e.id]=e,t),{});return Object(_.b)({ids:P(t.map(t=>t.id.toString())),entities:Object(_.b)(e)})}(s)),t.setState(Object(_.b)({pagination:Object(_.b)({[i]:Object(_.b)({total:n.total,totalPages:n.totalPages,pages:Object(_.b)({[e.page]:Object.assign({},m(e.page,a))})})})}))}getPostPageError(t,{page:e,error:n}){const i=y(e);t.setState(Object(_.b)({pagination:Object(_.b)({[i]:Object(_.b)({pages:Object(_.b)({[e.page]:Object(_.b)({isError:!0,isRefreshing:!1,isFetching:!1})})})})})),console.error(n)}};return t.\u0275fac=function(e){return new(e||t)(w.Ub(C),w.Ub(s.i))},t.\u0275prov=w.Hb({token:t,factory:t.\u0275fac}),Object(r.b)([Object(s.a)(c)],t.prototype,"getPost",null),Object(r.b)([Object(s.a)(l)],t.prototype,"getPostSuccess",null),Object(r.b)([Object(s.a)(p)],t.prototype,"getPostError",null),Object(r.b)([Object(s.a)(d)],t.prototype,"getPostPage",null),Object(r.b)([Object(s.a)(b)],t.prototype,"getPostPageSuccess",null),Object(r.b)([Object(s.a)(g)],t.prototype,"getPostPageError",null),t=Object(r.b)([Object(s.g)({name:"portfolio",defaults:F})],t),t})(),E=(()=>{class t{static pagination(t){return t.pagination}static postEntityByIdFn(t){return e=>t[e]}static postQueryFn(t){return e=>t[y(e)]}static postQueryPageFn(t){return e=>t(e).pages[e.page]}static postEntitiesByQueryFn(t,e){return n=>Object.values(e(n).pages).filter(t=>!t.isFetching).map(t=>t.entity).flat().map(e=>t[e])}}return t.entities=u.getEntities(M),t.ids=u.getEntityIds(M),t.posts=u.getEntityList(M),Object(r.b)([Object(s.f)([M])],t,"pagination",null),Object(r.b)([Object(s.f)([t.entities])],t,"postEntityByIdFn",null),Object(r.b)([Object(s.f)([t.pagination])],t,"postQueryFn",null),Object(r.b)([Object(s.f)([t.postQueryFn])],t,"postQueryPageFn",null),Object(r.b)([Object(s.f)([t.entities,t.postQueryFn])],t,"postEntitiesByQueryFn",null),t})();var B=n("2Vo4"),R=n("XNiG"),x=n("LRne"),L=n("itXk"),$=n("HDdC"),T=n("mCNh"),A=n("VRyK"),V=n("IzEk"),H=n("JX91"),z=n("1G5W"),Y=n("oB13"),N=n("5+tZ"),D=n("l7GE"),G=n("ZUHj");function J(...t){return e=>{let n;return"function"==typeof t[t.length-1]&&(n=t.pop()),e.lift(new Z(t,n))}}class Z{constructor(t,e){this.observables=t,this.project=e}call(t,e){return e.subscribe(new U(t,this.observables,this.project))}}class U extends D.a{constructor(t,e,n){super(t),this.observables=e,this.project=n,this.toRespond=[];const i=e.length;this.values=new Array(i);for(let s=0;s<i;s++)this.toRespond.push(s);for(let s=0;s<i;s++){let t=e[s];this.add(Object(G.a)(this,t,t,s))}}notifyNext(t,e,n,i,s){this.values[n]=e;const a=this.toRespond;if(a.length>0){const t=a.indexOf(n);-1!==t&&a.splice(t,1)}}notifyComplete(){}_next(t){if(0===this.toRespond.length){const e=[t,...this.values];this.project?this._tryProject(e):this.destination.next(e)}}_tryProject(t){let e;try{e=this.project.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}var q=n("Kqap"),K=n("/uUt"),W=n("DH7j"),X=n("Cfvw"),tt=n("7o/Q");class et{constructor(t){this.predicate=t}call(t,e){return e.subscribe(new nt(t,this.predicate))}}class nt extends tt.a{constructor(t,e){super(t),this.predicate=e,this.skipping=!0,this.index=0}_next(t){const e=this.destination;this.skipping&&this.tryCallPredicate(t),this.skipping||e.next(t)}tryCallPredicate(t){try{const e=this.predicate(t,this.index++);this.skipping=Boolean(e)}catch(e){this.destination.error(e)}}}var it=n("pLZG");const st=["youtubeContainer"];let at=(()=>{class t{constructor(t,e){this._ngZone=t,this._videoId=new B.a(void 0),this._height=new B.a(390),this._width=new B.a(640),this._startSeconds=new B.a(void 0),this._endSeconds=new B.a(void 0),this._suggestedQuality=new B.a(void 0),this.ready=new w.o,this.stateChange=new w.o,this.error=new w.o,this.apiChange=new w.o,this.playbackQualityChange=new w.o,this.playbackRateChange=new w.o,this._youtubeContainer=new R.a,this._destroyed=new R.a,this._isBrowser=e?Object(i.p)(e):"object"==typeof window&&!!window}get videoId(){return this._videoId.value}set videoId(t){this._videoId.next(t)}get height(){return this._height.value}set height(t){this._height.next(t||390)}get width(){return this._width.value}set width(t){this._width.next(t||640)}set startSeconds(t){this._startSeconds.next(t)}set endSeconds(t){this._endSeconds.next(t)}set suggestedQuality(t){this._suggestedQuality.next(t)}ngOnInit(){if(!this._isBrowser)return;let t=Object(x.a)(!0);if(!window.YT){if(this.showBeforeIframeApiLoads)throw new Error("Namespace YT not found, cannot construct embedded youtube player. Please install the YouTube Player API Reference for iframe Embeds: https://developers.google.com/youtube/iframe_api_reference");const e=new R.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>e.next(!0))},t=e.pipe(Object(V.a)(1),Object(H.a)(!1))}const e=function(t,e,n,i,s,a,r){const c=e.pipe(J(Object(L.b)([i,s])),Object(o.a)(([t,[e,n]])=>t?{videoId:t,width:e,height:n,events:a}:void 0));return Object(L.b)([t,c,Object(x.a)(r)]).pipe((l=n,Object(T.a)(function(...t){let e=null;return"function"==typeof t[t.length-1]&&(e=t.pop()),1===t.length&&Object(W.a)(t[0])&&(t=t[0].slice()),n=>n.lift.call(Object(X.a)([n,...t]),new L.a(e))}(l),(p=([t,e])=>!e,t=>t.lift(new et(p))),Object(o.a)(([t])=>t))),Object(q.a)(rt,void 0),Object(K.a)());var l,p}(this._youtubeContainer,this._videoId,t,this._width,this._height,this.createEventsBoundInZone(),this._ngZone).pipe((n=t=>{ot(t)||t.destroy()},Object(N.a)(t=>t?ot(t)?Object(x.a)(t):new $.a(e=>{let i=!1,s=!1;const a=t=>{s=!0,i||(t.target.removeEventListener("onReady",a),e.next(t.target))};return t.addEventListener("onReady",a),()=>{i=!0,s||n(t)}}).pipe(Object(V.a)(1),Object(H.a)(void 0)):Object(x.a)(void 0))),Object(z.a)(this._destroyed),Object(Y.a)(new R.a));var n;e.subscribe(t=>{this._player=t,t&&this._pendingPlayerState&&this._initializePlayer(t,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(t,e,n){Object(L.b)([t,e,n]).subscribe(([t,e,n])=>t&&t.setSize(e,n))}(e,this._width,this._height),function(t,e){Object(L.b)([t,e]).subscribe(([t,e])=>t&&e&&t.setPlaybackQuality(e))}(e,this._suggestedQuality),function(t,e,n,i,s,a){const r=Object(L.b)([n,i]).pipe(Object(o.a)(([t,e])=>({startSeconds:t,endSeconds:e}))),c=r.pipe(ct(t,t=>!!t&&!function(t){const e=t.getPlayerState();return-1!==e&&5!==e}(t))),l=e.pipe(ct(t,(t,e)=>!!t&&t.videoId!==e)),p=t.pipe(ct(Object(L.b)([e,r]),([t,e],n)=>!(!n||t==n.videoId&&!e.startSeconds&&!e.endSeconds)));Object(A.a)(p,l,c).pipe(J(Object(L.b)([t,e,r,s])),Object(o.a)(([t,e])=>e),Object(z.a)(a)).subscribe(([t,e,n,i])=>{e&&t&&(t.videoId=e,t.cueVideoById(Object.assign({videoId:e,suggestedQuality:i},n)))})}(e,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),e.connect()}createEventsBoundInZone(){const t={};return new Map([["onReady",this.ready],["onStateChange",this.stateChange],["onPlaybackQualityChange",this.playbackQualityChange],["onPlaybackRateChange",this.playbackRateChange],["onError",this.error],["onApiChange",this.apiChange]]).forEach((e,n)=>{e.observers.length&&(t[n]=this._runInZone(t=>e.emit(t)))}),t}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._destroyed.next(),this._destroyed.complete()}_runInZone(t){return(...e)=>this._ngZone.run(()=>t(...e))}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}seekTo(t,e){this._player?this._player.seekTo(t,e):this._getPendingState().seek={seconds:t,allowSeekAhead:e}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(t){this._player?this._player.setVolume(t):this._getPendingState().volume=t}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(t){if(this._player)return this._player.setPlaybackRate(t);this._getPendingState().playbackRate=t}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(t,e){const{playbackState:n,playbackRate:i,volume:s,muted:a,seek:r}=e;switch(n){case 1:t.playVideo();break;case 2:t.pauseVideo();break;case 5:t.stopVideo()}null!=i&&t.setPlaybackRate(i),null!=s&&t.setVolume(s),null!=a&&(a?t.mute():t.unMute()),null!=r&&t.seekTo(r.seconds,r.allowSeekAhead)}}return t.\u0275fac=function(e){return new(e||t)(w.Lb(w.A),w.Lb(w.C,8))},t.\u0275cmp=w.Fb({type:t,selectors:[["youtube-player"]],viewQuery:function(t,e){var n;1&t&&w.rc(st,!0),2&t&&w.fc(n=w.Zb())&&(e.youtubeContainer=n.first)},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(t,e){1&t&&w.Mb(0,"div",null,0)},encapsulation:2,changeDetection:0}),t})();function rt(t,[e,n,i]){if(!n)return void(t&&t.destroy());if(t)return t;const s=i.runOutsideAngular(()=>new YT.Player(e,n));return s.videoId=n.videoId,s}function ot(t){return"getPlayerStatus"in t}function ct(t,e){return Object(T.a)(J(t),Object(it.a)(([t,n])=>e(n,t)),Object(o.a)(([t])=>t))}let lt=(()=>{class t{}return t.\u0275mod=w.Jb({type:t}),t.\u0275inj=w.Ib({factory:function(e){return new(e||t)}}),t})();function pt(t,e){if(1&t&&w.Mb(0,"img",3),2&t){const t=w.ac();w.dc("src",t.image.sizes.large,w.jc)("alt",t.image.alt||t.image.title||t.image.name||"")("width",t.image.sizes["large-width"])("height",t.image.sizes["large-height"])}}function dt(t,e){if(1&t&&(w.Qb(0,"div",4),w.Mb(1,"youtube-player",5),w.Pb()),2&t){const t=w.ac();w.Bb(1),w.dc("videoId",t.videoId)}}let bt=(()=>{class t{constructor(t){this.document=t}ngOnInit(){"video"===this.type&&(this.videoId=((t,e={fuzzy:!0})=>{if(!/youtu\.?be/.test(t))return null;let n;const i=[/youtu\.be\/([^#&?]{11})/,/\?v=([^#&?]{11})/,/&v=([^#&?]{11})/,/embed\/([^#&?]{11})/,/\/v\/([^#&?]{11})/];for(n=0;n<i.length;++n)if(i[n].test(t))return i[n].exec(t)[1];if(e.fuzzy){const e=t.split(/[/&?=#.\s]/g);for(n=0;n<e.length;++n)if(/^[^#&?]{11}$/.test(e[n]))return e[n]}})(this.video),"undefined"==typeof YT&&this.loadYouTubeAPI())}loadYouTubeAPI(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",this.document.body.appendChild(t)}}return t.\u0275fac=function(e){return new(e||t)(w.Lb(i.d))},t.\u0275cmp=w.Fb({type:t,selectors:[["app-showcase"]],inputs:{type:"type",image:"image",video:"video"},decls:3,vars:3,consts:[[3,"ngSwitch"],[3,"src","alt","width","height",4,"ngSwitchCase"],["class","showcase__iframe-container",4,"ngSwitchCase"],[3,"src","alt","width","height"],[1,"showcase__iframe-container"],["data-testid","yt-player",3,"videoId"]],template:function(t,e){1&t&&(w.Ob(0,0),w.lc(1,pt,1,4,"img",1),w.lc(2,dt,2,1,"div",2),w.Nb()),2&t&&(w.dc("ngSwitch",e.type),w.Bb(1),w.dc("ngSwitchCase","image"),w.Bb(1),w.dc("ngSwitchCase","video"))},directives:[i.k,i.l,at],styles:[".showcase__iframe-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;height:0;background:url(video.2e6558147ccb0c5752db.png) 50%/20% no-repeat,#000}.showcase__iframe-container[_ngcontent-%COMP%] iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]}),t})();function gt(t,e){1&t&&w.Mb(0,"span",1),2&t&&w.dc("innerHTML",e.$implicit.name+"<br>",w.ic)}function ut(t,e){1&t&&w.Mb(0,"span",1),2&t&&w.dc("innerHTML",e.$implicit.name+"<br>",w.ic)}function ht(t,e){1&t&&w.Mb(0,"span",1),2&t&&w.dc("innerHTML",e.$implicit.name+"<br>",w.ic)}let yt=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=w.Fb({type:t,selectors:[["app-briefing"]],inputs:{data:"data"},decls:25,vars:7,consts:[["scope","row"],[3,"innerHTML"],[3,"innerHTML",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(w.Qb(0,"table"),w.Qb(1,"tbody"),w.Qb(2,"tr"),w.Qb(3,"th",0),w.nc(4,"Kategorie:"),w.Pb(),w.Mb(5,"td",1),w.Pb(),w.Qb(6,"tr"),w.Qb(7,"th",0),w.nc(8,"Semester:"),w.Pb(),w.Qb(9,"td"),w.lc(10,gt,1,1,"span",2),w.Pb(),w.Pb(),w.Qb(11,"tr"),w.Qb(12,"th",0),w.nc(13,"Erstellunsjahr:"),w.Pb(),w.Mb(14,"td",1),w.Pb(),w.Qb(15,"tr"),w.Qb(16,"th",0),w.nc(17),w.Pb(),w.Qb(18,"td"),w.lc(19,ut,1,1,"span",2),w.Pb(),w.Pb(),w.Qb(20,"tr"),w.Qb(21,"th",0),w.nc(22),w.Pb(),w.Qb(23,"td"),w.lc(24,ht,1,1,"span",2),w.Pb(),w.Pb(),w.Pb(),w.Pb()),2&t&&(w.Bb(5),w.dc("innerHTML",e.data.modul.name,w.ic),w.Bb(5),w.dc("ngForOf",e.data.semester),w.Bb(4),w.dc("innerHTML",e.data.erstellungsjahr,w.ic),w.Bb(3),w.pc("",e.data.studierende.length>1?"Studierende":"Student*in",":"),w.Bb(2),w.dc("ngForOf",e.data.studierende),w.Bb(3),w.pc("",e.data.dozierende.length>1?"Dozierende":"Dozent*in",":"),w.Bb(2),w.dc("ngForOf",e.data.dozierende))},directives:[i.i],styles:["th[_ngcontent-%COMP%]{vertical-align:top;border:none}"]}),t})(),ft=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=w.Fb({type:t,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[["role","img","aria-hidden","true",1,"post-detail__spinner",2,"font-style","normal"]],template:function(t,e){1&t&&(w.Qb(0,"span",0),w.nc(1,"\u23f3"),w.Pb())},styles:[".post-detail__spinner[_ngcontent-%COMP%]{display:inline-block;margin-left:.5em;-webkit-animation:rotate 2.5s ease-in-out infinite;animation:rotate 2.5s ease-in-out infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}15%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}65%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}15%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}65%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"]}),t})();function _t(t,e){if(1&t&&(w.Qb(0,"span"),w.nc(1),w.Pb()),2&t){const t=e.$implicit;w.Bb(1),w.oc(t.name)}}function mt(t,e){if(1&t&&(w.Qb(0,"span",12),w.nc(1," \u2013 "),w.lc(2,_t,2,1,"span",13),w.Pb()),2&t){const t=w.ac().ngIf;w.Bb(2),w.dc("ngForOf",t.acf.schlagworte)}}function Pt(t,e){1&t&&(w.Qb(0,"h3"),w.nc(1,"Galerie"),w.Pb())}function Ot(t,e){if(1&t&&w.Mb(0,"img",14),2&t){const t=e.$implicit;w.dc("src",t.sizes.medium,w.jc)("alt",t.alt||t.title||t.name||"")("width",t.sizes["medium-width"])("height",t.sizes["medium-height"])}}function wt(t,e){if(1&t){const t=w.Rb();w.Qb(0,"section"),w.Mb(1,"h2",3),w.Qb(2,"p",4),w.nc(3),w.lc(4,mt,3,1,"span",5),w.Pb(),w.Mb(5,"app-showcase",6),w.Mb(6,"p",3),w.Qb(7,"h3"),w.nc(8,"Steckbrief"),w.Pb(),w.Mb(9,"app-briefing",7),w.lc(10,Pt,2,0,"h3",8),w.lc(11,Ot,1,4,"img",9),w.Qb(12,"footer",10),w.Qb(13,"button",11),w.Yb("click",(function(){return w.hc(t),w.ac(2).toTop()})),w.nc(14,"Nach oben"),w.Pb(),w.Pb(),w.Pb()}if(2&t){const t=e.ngIf;w.Bb(1),w.dc("innerHTML",t.title.rendered,w.ic),w.Bb(2),w.pc(" ",t.acf.page.post_title," "),w.Bb(1),w.dc("ngIf",t.acf.schlagworte.length),w.Bb(1),w.dc("type",t.acf.showcaseFormat)("image",t.acf.showcase)("video",t.acf.youtube),w.Bb(1),w.dc("innerHTML",t.acf.beschreibung,w.ic),w.Bb(3),w.dc("data",t.acf),w.Bb(1),w.dc("ngIf",t.acf.galerie.length),w.Bb(1),w.dc("ngForOf",t.acf.galerie)}}function jt(t,e){if(1&t&&(w.Ob(0),w.lc(1,wt,15,10,"section",0),w.bc(2,"async"),w.Nb()),2&t){const t=w.ac(),e=w.gc(3);w.Bb(1),w.dc("ngIf",w.cc(2,2,t.post$))("ngIfElse",e)}}function vt(t,e){if(1&t&&(w.Qb(0,"p",15),w.nc(1),w.Qb(2,"span",16),w.nc(3,"\u{1f63f}"),w.Pb(),w.Pb()),2&t){const t=w.ac();w.Bb(1),w.pc(" Projekt mit ID \xbb",t.rawId,"\xab nicht gefunden. ")}}function St(t,e){1&t&&(w.Qb(0,"p",15),w.nc(1,"Wird geladen... "),w.Mb(2,"app-loading-spinner"),w.Pb())}let It=(()=>{class t{constructor(t,e){this.store=e,this.rawId=t.snapshot.paramMap.get("id"),this.id=Number(this.rawId),this.postEntity$=this.postEntityByIdFn$.pipe(Object(o.a)(t=>t(this.id))),this.post$=this.postEntity$.pipe(Object(o.a)(t=>t.entity)),this.isFetching$=this.postEntity$.pipe(Object(o.a)(t=>t.isFetching))}ngOnInit(){this.store.dispatch(new c(this.id)).subscribe()}toTop(){document.body.scrollIntoView({block:"start",behavior:"smooth"})}}return t.\u0275fac=function(e){return new(e||t)(w.Lb(a.a),w.Lb(s.i))},t.\u0275cmp=w.Fb({type:t,selectors:[["app-post-detail"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["notFound",""],["loadingSpinner",""],[3,"innerHTML"],[1,"post-detail__category"],["class","post-detail__category__tags",4,"ngIf"],[3,"type","image","video"],[3,"data"],[4,"ngIf"],[3,"src","alt","width","height",4,"ngFor","ngForOf"],[1,"post-detail__footer"],["type","button",3,"click"],[1,"post-detail__category__tags"],[4,"ngFor","ngForOf"],[3,"src","alt","width","height"],[1,"post-detail__status-msg"],["role","img","aria-label","Sad cat",2,"font-style","normal"]],template:function(t,e){if(1&t&&(w.lc(0,jt,3,4,"ng-container",0),w.bc(1,"async"),w.lc(2,vt,4,1,"ng-template",null,1,w.mc),w.lc(4,St,3,0,"ng-template",null,2,w.mc)),2&t){const t=w.gc(5);w.dc("ngIf",!1===w.cc(1,2,e.isFetching$))("ngIfElse",t)}},directives:[i.j,bt,yt,i.i,ft],pipes:[i.b],styles:['.post-detail__category[_ngcontent-%COMP%]{font-weight:500;margin-top:0;margin-bottom:1.5em}.post-detail__category__tags[_ngcontent-%COMP%]{opacity:.6;font-weight:400;font-style:italic}.post-detail__category__tags[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:not(:first-child):before{content:", "}.post-detail__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-detail__footer[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}']}),Object(r.b)([Object(s.e)(E.postEntityByIdFn)],t.prototype,"postEntityByIdFn$",void 0),t})();function kt(t,e){if(1&t&&(w.Qb(0,"section"),w.Mb(1,"h3",6),w.Mb(2,"p",6),w.Qb(3,"a",7),w.nc(4,"Projekt ansehen \u2192"),w.Pb(),w.Mb(5,"hr"),w.Pb()),2&t){const t=e.$implicit,n=w.ac(2);w.Bb(1),w.dc("innerHTML",t.title.rendered,w.ic),w.Bb(1),w.dc("innerHTML",n.getTeaser(t.acf.beschreibung),w.ic),w.Bb(1),w.ec("routerLink",t.id)}}function Qt(t,e){if(1&t){const t=w.Rb();w.Qb(0,"button",8),w.Yb("click",(function(){return w.hc(t),w.ac(2).requestNextPage()})),w.nc(1," Mehr laden... "),w.Pb()}}function Ct(t,e){if(1&t&&(w.Ob(0),w.lc(1,kt,6,3,"section",3),w.bc(2,"async"),w.Qb(3,"footer",4),w.lc(4,Qt,2,0,"button",5),w.bc(5,"async"),w.bc(6,"async"),w.Pb(),w.Nb()),2&t){const t=w.ac();w.Bb(1),w.dc("ngForOf",w.cc(2,2,t.posts$)),w.Bb(3),w.dc("ngIf",w.cc(5,4,t.query$).totalPages>t.pagination.page&&!1===w.cc(6,6,t.isFetching$))}}function Ft(t,e){1&t&&(w.Qb(0,"p",9),w.nc(1," Keine Projekte vorhanden. "),w.Qb(2,"span",10),w.nc(3,"\u{1f6ab}"),w.Pb(),w.Pb())}function Mt(t,e){if(1&t&&(w.lc(0,Ft,4,0,"p",2),w.bc(1,"async")),2&t){const t=w.ac();w.dc("ngIf",!1===w.cc(1,1,t.isFetching$))}}function Et(t,e){1&t&&(w.Qb(0,"p",9),w.nc(1," Projekte werden geladen... "),w.Mb(2,"app-loading-spinner"),w.Pb())}const Bt=/<br\s?\/?>(<\/br>)?/g,Rt=a.l.forChild([{path:"",component:(()=>{class t{constructor(t){this.store=t,this.pagination={page:1,perPage:8},this.posts$=this.postEntitiesByQueryFn$.pipe(Object(o.a)(t=>t(this.pagination)),Object(o.a)(t=>t.map(t=>t.entity))),this.query$=this.postQueryFn$.pipe(Object(o.a)(t=>t(this.pagination))),this.isFetching$=this.query$.pipe(Object(o.a)(t=>Object.values(t.pages).some(t=>t.isFetching)))}ngOnInit(){this.loadPage()}loadPage(){this.store.dispatch(new d(this.pagination))}requestNextPage(){this.pagination.page++,this.loadPage()}getTeaser(t){return(t=t.replace(Bt,"")).length<150?t:`${t.slice(0,145)}...`}}return t.\u0275fac=function(e){return new(e||t)(w.Lb(s.i))},t.\u0275cmp=w.Fb({type:t,selectors:[["app-post-master"]],decls:8,vars:7,consts:[[4,"ngIf","ngIfElse"],["noPosts",""],["class","post-master__status-msg",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"post-master__footer"],["type","button",3,"click",4,"ngIf"],[3,"innerHTML"],[3,"routerLink"],["type","button",3,"click"],[1,"post-master__status-msg"],["aria-hidden","true",2,"font-style","normal"]],template:function(t,e){if(1&t&&(w.Qb(0,"h2"),w.nc(1,"DMP Portfolio"),w.Pb(),w.lc(2,Ct,7,8,"ng-container",0),w.bc(3,"async"),w.lc(4,Mt,2,3,"ng-template",null,1,w.mc),w.lc(6,Et,3,0,"p",2),w.bc(7,"async")),2&t){const t=w.gc(5);w.Bb(2),w.dc("ngIf",w.cc(3,3,e.posts$).length)("ngIfElse",t),w.Bb(4),w.dc("ngIf",w.cc(7,5,e.isFetching$))}},directives:[i.j,i.i,a.k,ft],pipes:[i.b],styles:["section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline}a[_ngcontent-%COMP%]{margin-left:1em}.post-master__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-master__footer[_ngcontent-%COMP%]{text-align:center;margin-top:2rem}"]}),Object(r.b)([Object(s.e)(E.postQueryFn)],t.prototype,"postQueryFn$",void 0),Object(r.b)([Object(s.e)(E.postEntitiesByQueryFn)],t.prototype,"postEntitiesByQueryFn$",void 0),t})()},{path:":id",component:It}]);let xt=(()=>{class t{}return t.\u0275mod=w.Jb({type:t}),t.\u0275inj=w.Ib({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),Lt=(()=>{class t{}return t.\u0275mod=w.Jb({type:t}),t.\u0275inj=w.Ib({factory:function(e){return new(e||t)},imports:[[i.c,lt,xt]]}),t})(),$t=(()=>{class t{}return t.\u0275mod=w.Jb({type:t}),t.\u0275inj=w.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,a.l,xt]]}),t})();n.d(e,"PortfolioModule",(function(){return Tt}));let Tt=(()=>{class t{}return t.\u0275mod=w.Jb({type:t}),t.\u0275inj=w.Ib({factory:function(e){return new(e||t)},imports:[[i.c,Rt,$t,Lt,s.d.forFeature([M])]]}),t})()}}]);
//# sourceMappingURL=portfolio-portfolio-module-es2015.6ac9bacf536d926b810b.js.map