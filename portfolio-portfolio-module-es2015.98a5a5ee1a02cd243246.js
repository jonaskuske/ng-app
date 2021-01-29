(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9enj":function(t,e,n){"use strict";n.r(e),n.d(e,"PortfolioModule",function(){return Ht});var i=n("SVse"),s=n("e1JD"),a=n("iInd"),r=n("mrSG"),o=n("lJxs");let c=(()=>{class t{constructor(t){this.id=t}}return t.type="[Portfolio] Get Post",t})(),l=(()=>{class t{constructor(t){this.post=t}}return t.type="[Portfolio API] Get Post Success",t})(),p=(()=>{class t{constructor(t,e){this.id=t,this.error=e}}return t.type="[Portfolio API] Get Post Error",t})(),g=(()=>{class t{constructor(t){this.page=t}}return t.type="[Portfolio] Get Post Page",t})(),d=(()=>{class t{constructor(t,e){this.page=t,this.payload=e}}return t.type="[Portfolio API] Get Post Page Success",t})(),h=(()=>{class t{constructor(t,e){this.page=t,this.error=e}}return t.type="[Portfolio API] Get Post Page Error",t})();class u{static getEntities(t){return Object(s.l)([t],t=>t.entities)}static getEntityList(t){return Object(s.l)([t],t=>Object.values(t.entities))}static getEntityIds(t){return Object(s.l)([t],t=>Object.keys(t.entities))}static getEntityListByPageFn(t){return e=>Object(s.l)([t],t=>e.map(e=>t.entities[e]))}}const b=t=>Array.isArray(t),y=t=>{var e=Object(r.b)(t,["page"]);return`?${new URLSearchParams(e)}`};var f=n("JIr8");function _(t){return function(e){let n=null;for(const i in t){const s=t[i],a=e[i],r="function"==typeof s?s(a):s;r!==a&&(n||(n=Object.assign({},e)),n[i]=r)}return n||e}}const m=(t,e=null)=>({id:t,entity:e,lastUpdatedAt:(new Date).toISOString(),isFetching:!1,isRefreshing:!1,isError:!1});function P(t){return e=>(b(t)?t.some(t=>!e.includes(t)):e.includes(t))?e:e.concat(b(t)?t.filter(t=>!e.includes(t)):t)}function O(t){return e=>{const n=e.entities[t.id];return Object.assign(Object.assign({},e),{entities:Object.assign(Object.assign({},e.entities),{[t.id]:Object.assign(Object.assign({},n),t)})})}}var j=n("8Y7J"),w=n("IheW"),v=n("AytR");const{apiUrl:S}=v.a,k=t=>{const e=t.get("x-wp-total");if(null==e)throw Error('Header "x-wp-total" missing in response');return Number(e)},I=t=>{const e=t.get("x-wp-totalpages");if(null==e)throw Error('Header "x-wp-totalpages" missing in response');return Number(e)},Q=t=>{const{body:e,headers:n}=t;return{body:e,total:k(n),totalPages:I(n)}};let C=(()=>{class t{constructor(t){this.http=t}getPost(t){return this.http.get(`${S}posts/${t}`)}getPosts({page:t,perPage:e=10}){const n=new w.c({fromObject:{page:String(t),per_page:String(e)}});return this.http.get(`${S}posts`,{params:n,observe:"response"}).pipe(Object(o.a)(Q))}}return t.\u0275fac=function(e){return new(e||t)(j.Ub(w.a))},t.\u0275prov=j.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const F={entities:{},ids:[],pagination:{}};let E=(()=>{let t=class{constructor(t,e){this.postsService=t,this.store=e}ngxsOnInit(t){t.dispatch(new g({page:1,perPage:8}))}getPost(t,{id:e}){const n=t.getState().entities[e];return n&&!n.isError?t.dispatch(new l(n.entity)):(t.setState(function(t){const e=t.id.toString();return _({ids:P(e),entities:_({[e]:t})})}(Object.assign(Object.assign({},m(e)),{isFetching:!0}))),this.postsService.getPost(e).pipe(Object(o.a)(e=>t.dispatch(new l(e))),Object(f.a)(n=>t.dispatch(new p(e,n)))))}getPostSuccess(t,{post:e}){t.setState(O(m(e.id,e)))}getPostError(t,{id:e,error:n}){t.setState(O({id:e,isError:!0,isFetching:!1,isRefreshing:!1})),console.error(n)}getPostPage(t,{page:e}){const n=t.getState(),i=y(e),s=t.getState().pagination[i];if(!s||!s.pages[e.page])return s||t.patchState({pagination:Object.assign(Object.assign({},n.pagination),{[i]:{total:0,totalPages:0,pages:{}}})}),t.setState(_({pagination:_({[i]:_({pages:_({[e.page]:Object.assign(Object.assign({},m(e.page)),{isFetching:!0})})})})})),this.postsService.getPosts(e).pipe(Object(o.a)(n=>t.dispatch(new d(e,n))),Object(f.a)(n=>t.dispatch(new h(e,n))))}getPostPageSuccess(t,{page:e,payload:n}){const i=y(e),s=n.body.map(t=>m(t.id,t)),a=n.body.map(t=>t.id.toString());t.setState(function(t){const e=t.reduce((t,e)=>(t[e.id]=e,t),{});return _({ids:P(t.map(t=>t.id.toString())),entities:_(e)})}(s)),t.setState(_({pagination:_({[i]:_({total:n.total,totalPages:n.totalPages,pages:_({[e.page]:Object.assign({},m(e.page,a))})})})}))}getPostPageError(t,{page:e,error:n}){const i=y(e);t.setState(_({pagination:_({[i]:_({pages:_({[e.page]:_({isError:!0,isRefreshing:!1,isFetching:!1})})})})})),console.error(n)}};return t.\u0275fac=function(e){return new(e||t)(j.Ub(C),j.Ub(s.i))},t.\u0275prov=j.Hb({token:t,factory:t.\u0275fac}),Object(r.a)([Object(s.a)(c)],t.prototype,"getPost",null),Object(r.a)([Object(s.a)(l)],t.prototype,"getPostSuccess",null),Object(r.a)([Object(s.a)(p)],t.prototype,"getPostError",null),Object(r.a)([Object(s.a)(g)],t.prototype,"getPostPage",null),Object(r.a)([Object(s.a)(d)],t.prototype,"getPostPageSuccess",null),Object(r.a)([Object(s.a)(h)],t.prototype,"getPostPageError",null),t=Object(r.a)([Object(s.g)({name:"portfolio",defaults:F})],t),t})(),M=(()=>{class t{static pagination(t){return t.pagination}static postEntityByIdFn(t){return e=>t[e]}static postQueryFn(t){return e=>t[y(e)]}static postQueryPageFn(t){return e=>t(e).pages[e.page]}static postEntitiesByQueryFn(t,e){return n=>Object.values(e(n).pages).filter(t=>!t.isFetching).map(t=>t.entity).flat().map(e=>t[e])}}return t.entities=u.getEntities(E),t.ids=u.getEntityIds(E),t.posts=u.getEntityList(E),Object(r.a)([Object(s.f)([E])],t,"pagination",null),Object(r.a)([Object(s.f)([t.entities])],t,"postEntityByIdFn",null),Object(r.a)([Object(s.f)([t.pagination])],t,"postQueryFn",null),Object(r.a)([Object(s.f)([t.postQueryFn])],t,"postQueryPageFn",null),Object(r.a)([Object(s.f)([t.entities,t.postQueryFn])],t,"postEntitiesByQueryFn",null),t})();var B=n("XNiG"),L=n("2Vo4"),x=n("LRne"),V=n("HDdC"),R=n("DH7j"),$=n("n6bG");function T(t,e,n){return n?T(t,e).pipe(Object(o.a)(t=>Object(R.a)(t)?n(...t):n(t))):new V.a(n=>{const i=(...t)=>n.next(1===t.length?t[0]:t);let s;try{s=t(i)}catch(a){return void n.error(a)}if(Object($.a)(e))return()=>e(i,s)})}var A=n("itXk"),z=n("mCNh"),H=n("VRyK"),Z=n("IzEk"),D=n("JX91"),G=n("vkgz"),J=n("1G5W"),N=n("oB13"),Y=n("eIep"),U=n("5+tZ"),q=n("l7GE"),X=n("ZUHj");function K(...t){return e=>{let n;return"function"==typeof t[t.length-1]&&(n=t.pop()),e.lift(new W(t,n))}}class W{constructor(t,e){this.observables=t,this.project=e}call(t,e){return e.subscribe(new tt(t,this.observables,this.project))}}class tt extends q.a{constructor(t,e,n){super(t),this.observables=e,this.project=n,this.toRespond=[];const i=e.length;this.values=new Array(i);for(let s=0;s<i;s++)this.toRespond.push(s);for(let s=0;s<i;s++){let t=e[s];this.add(Object(X.a)(this,t,void 0,s))}}notifyNext(t,e,n){this.values[n]=e;const i=this.toRespond;if(i.length>0){const t=i.indexOf(n);-1!==t&&i.splice(t,1)}}notifyComplete(){}_next(t){if(0===this.toRespond.length){const e=[t,...this.values];this.project?this._tryProject(e):this.destination.next(e)}}_tryProject(t){let e;try{e=this.project.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}var et=n("Kqap"),nt=n("/uUt"),it=n("Cfvw"),st=n("7o/Q");class at{constructor(t){this.predicate=t}call(t,e){return e.subscribe(new rt(t,this.predicate))}}class rt extends st.a{constructor(t,e){super(t),this.predicate=e,this.skipping=!0,this.index=0}_next(t){const e=this.destination;this.skipping&&this.tryCallPredicate(t),this.skipping||e.next(t)}tryCallPredicate(t){try{const e=this.predicate(t,this.index++);this.skipping=Boolean(e)}catch(e){this.destination.error(e)}}}var ot=n("pLZG");const ct=["youtubeContainer"];let lt=(()=>{class t{constructor(t,e){this._ngZone=t,this._youtubeContainer=new B.a,this._destroyed=new B.a,this._playerChanges=new L.a(void 0),this._videoId=new L.a(void 0),this._height=new L.a(390),this._width=new L.a(640),this._startSeconds=new L.a(void 0),this._endSeconds=new L.a(void 0),this._suggestedQuality=new L.a(void 0),this._playerVars=new L.a(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=Object(i.p)(e)}get videoId(){return this._videoId.value}set videoId(t){this._videoId.next(t)}get height(){return this._height.value}set height(t){this._height.next(t||390)}get width(){return this._width.value}set width(t){this._width.next(t||640)}set startSeconds(t){this._startSeconds.next(t)}set endSeconds(t){this._endSeconds.next(t)}set suggestedQuality(t){this._suggestedQuality.next(t)}get playerVars(){return this._playerVars.value}set playerVars(t){this._playerVars.next(t)}ngOnInit(){if(!this._isBrowser)return;let t=Object(x.a)(!0);if(!window.YT||!window.YT.Player){const e=new B.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>e.next(!0))},t=e.pipe(Object(Z.a)(1),Object(D.a)(!1))}const e=function(t,e,n,i,s,a,r){const c=Object(A.b)([e,a]).pipe(K(Object(A.b)([i,s])),Object(o.a)(([t,e])=>{const[n,i]=t,[s,a]=e;return n?{videoId:n,playerVars:i,width:s,height:a}:void 0}));return Object(A.b)([t,c,Object(x.a)(r)]).pipe((l=n,Object(z.a)(function(...t){let e=null;return"function"==typeof t[t.length-1]&&(e=t.pop()),1===t.length&&Object(R.a)(t[0])&&(t=t[0].slice()),n=>n.lift.call(Object(it.a)([n,...t]),new A.a(e))}(l),(p=([t,e])=>!e,t=>t.lift(new at(p))),Object(o.a)(([t])=>t))),Object(et.a)(pt,void 0),Object(nt.a)());var l,p}(this._youtubeContainer,this._videoId,t,this._width,this._height,this._playerVars,this._ngZone).pipe(Object(G.a)(t=>{this._playerChanges.next(t)}),(n=t=>{gt(t)||t.destroy()},Object(U.a)(t=>t?gt(t)?Object(x.a)(t):new V.a(e=>{let i=!1,s=!1;const a=t=>{s=!0,i||(t.target.removeEventListener("onReady",a),e.next(t.target))};return t.addEventListener("onReady",a),()=>{i=!0,s||n(t)}}).pipe(Object(Z.a)(1),Object(D.a)(void 0)):Object(x.a)(void 0))),Object(J.a)(this._destroyed),Object(N.a)(new B.a));var n;e.subscribe(t=>{this._player=t,t&&this._pendingPlayerState&&this._initializePlayer(t,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(t,e,n){Object(A.b)([t,e,n]).subscribe(([t,e,n])=>t&&t.setSize(e,n))}(e,this._width,this._height),function(t,e){Object(A.b)([t,e]).subscribe(([t,e])=>t&&e&&t.setPlaybackQuality(e))}(e,this._suggestedQuality),function(t,e,n,i,s,a){const r=Object(A.b)([n,i]).pipe(Object(o.a)(([t,e])=>({startSeconds:t,endSeconds:e}))),c=r.pipe(dt(t,t=>!!t&&!function(t){const e=t.getPlayerState();return-1!==e&&5!==e}(t))),l=e.pipe(dt(t,(t,e)=>!!t&&t.videoId!==e)),p=t.pipe(dt(Object(A.b)([e,r]),([t,e],n)=>!(!n||t==n.videoId&&!e.startSeconds&&!e.endSeconds)));Object(H.a)(p,l,c).pipe(K(Object(A.b)([t,e,r,s])),Object(o.a)(([t,e])=>e),Object(J.a)(a)).subscribe(([t,e,n,i])=>{e&&t&&(t.videoId=e,t.cueVideoById(Object.assign({videoId:e,suggestedQuality:i},n)))})}(e,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),e.connect()}createEventsBoundInZone(){return{}}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}seekTo(t,e){this._player?this._player.seekTo(t,e):this._getPendingState().seek={seconds:t,allowSeekAhead:e}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(t){this._player?this._player.setVolume(t):this._getPendingState().volume=t}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(t){if(this._player)return this._player.setPlaybackRate(t);this._getPendingState().playbackRate=t}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(t,e){const{playbackState:n,playbackRate:i,volume:s,muted:a,seek:r}=e;switch(n){case 1:t.playVideo();break;case 2:t.pauseVideo();break;case 5:t.stopVideo()}null!=i&&t.setPlaybackRate(i),null!=s&&t.setVolume(s),null!=a&&(a?t.mute():t.unMute()),null!=r&&t.seekTo(r.seconds,r.allowSeekAhead)}_getLazyEmitter(t){return this._playerChanges.pipe(Object(Y.a)(e=>e?T(n=>{e.addEventListener(t,n)},n=>{try{e.removeEventListener&&e.removeEventListener(t,n)}catch(i){}}):Object(x.a)()),t=>new V.a(e=>t.subscribe({next:t=>this._ngZone.run(()=>e.next(t)),error:t=>e.error(t),complete:()=>e.complete()})),Object(J.a)(this._destroyed))}}return t.\u0275fac=function(e){return new(e||t)(j.Lb(j.B),j.Lb(j.D))},t.\u0275cmp=j.Fb({type:t,selectors:[["youtube-player"]],viewQuery:function(t,e){if(1&t&&j.qc(ct,1),2&t){let t;j.ec(t=j.Yb())&&(e.youtubeContainer=t.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(t,e){1&t&&j.Mb(0,"div",null,0)},encapsulation:2,changeDetection:0}),t})();function pt(t,[e,n,i]){if(t&&n&&t.playerVars!==n.playerVars)t.destroy();else{if(!n)return void(t&&t.destroy());if(t)return t}const s=i.runOutsideAngular(()=>new YT.Player(e,n));return s.videoId=n.videoId,s.playerVars=n.playerVars,s}function gt(t){return"getPlayerStatus"in t}function dt(t,e){return Object(z.a)(K(t),Object(ot.a)(([t,n])=>e(n,t)),Object(o.a)(([t])=>t))}let ht=(()=>{class t{}return t.\u0275mod=j.Jb({type:t}),t.\u0275inj=j.Ib({factory:function(e){return new(e||t)}}),t})();function ut(t,e){if(1&t&&j.Mb(0,"img",3),2&t){const t=j.Zb();j.cc("src",t.image.sizes.large,j.ic)("alt",t.image.alt||t.image.title||t.image.name||"")("width",t.image.sizes["large-width"])("height",t.image.sizes["large-height"])}}function bt(t,e){if(1&t&&(j.Qb(0,"div",4),j.Mb(1,"youtube-player",5),j.Pb()),2&t){const t=j.Zb();j.Bb(1),j.cc("videoId",t.videoId)}}let yt=(()=>{class t{constructor(t){this.document=t}ngOnInit(){"video"===this.type&&(this.videoId=((t,e={fuzzy:!0})=>{if(!/youtu\.?be/.test(t))return null;let n;const i=[/youtu\.be\/([^#&?]{11})/,/\?v=([^#&?]{11})/,/&v=([^#&?]{11})/,/embed\/([^#&?]{11})/,/\/v\/([^#&?]{11})/];for(n=0;n<i.length;++n)if(i[n].test(t))return i[n].exec(t)[1];if(e.fuzzy){const e=t.split(/[/&?=#.\s]/g);for(n=0;n<e.length;++n)if(/^[^#&?]{11}$/.test(e[n]))return e[n]}})(this.video),"undefined"==typeof YT&&this.loadYouTubeAPI())}loadYouTubeAPI(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",this.document.body.appendChild(t)}}return t.\u0275fac=function(e){return new(e||t)(j.Lb(i.d))},t.\u0275cmp=j.Fb({type:t,selectors:[["app-showcase"]],inputs:{type:"type",image:"image",video:"video"},decls:3,vars:3,consts:[[3,"ngSwitch"],[3,"src","alt","width","height",4,"ngSwitchCase"],["class","showcase__iframe-container",4,"ngSwitchCase"],[3,"src","alt","width","height"],[1,"showcase__iframe-container"],["data-testid","yt-player",3,"videoId"]],template:function(t,e){1&t&&(j.Ob(0,0),j.kc(1,ut,1,4,"img",1),j.kc(2,bt,2,1,"div",2),j.Nb()),2&t&&(j.cc("ngSwitch",e.type),j.Bb(1),j.cc("ngSwitchCase","image"),j.Bb(1),j.cc("ngSwitchCase","video"))},directives:[i.k,i.l,lt],styles:[".showcase__iframe-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;height:0;background:url(video.64f64aedeaecca73c216.png) 50%/20% no-repeat,#000}.showcase__iframe-container[_ngcontent-%COMP%] iframe{position:absolute;top:0;left:0;width:100%;height:100%}"]}),t})();function ft(t,e){1&t&&j.Mb(0,"span",1),2&t&&j.cc("innerHTML",e.$implicit.name+"<br>",j.hc)}function _t(t,e){1&t&&j.Mb(0,"span",1),2&t&&j.cc("innerHTML",e.$implicit.name+"<br>",j.hc)}function mt(t,e){1&t&&j.Mb(0,"span",1),2&t&&j.cc("innerHTML",e.$implicit.name+"<br>",j.hc)}let Pt=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=j.Fb({type:t,selectors:[["app-briefing"]],inputs:{data:"data"},decls:25,vars:7,consts:[["scope","row"],[3,"innerHTML"],[3,"innerHTML",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(j.Qb(0,"table"),j.Qb(1,"tbody"),j.Qb(2,"tr"),j.Qb(3,"th",0),j.mc(4,"Kategorie:"),j.Pb(),j.Mb(5,"td",1),j.Pb(),j.Qb(6,"tr"),j.Qb(7,"th",0),j.mc(8,"Semester:"),j.Pb(),j.Qb(9,"td"),j.kc(10,ft,1,1,"span",2),j.Pb(),j.Pb(),j.Qb(11,"tr"),j.Qb(12,"th",0),j.mc(13,"Erstellunsjahr:"),j.Pb(),j.Mb(14,"td",1),j.Pb(),j.Qb(15,"tr"),j.Qb(16,"th",0),j.mc(17),j.Pb(),j.Qb(18,"td"),j.kc(19,_t,1,1,"span",2),j.Pb(),j.Pb(),j.Qb(20,"tr"),j.Qb(21,"th",0),j.mc(22),j.Pb(),j.Qb(23,"td"),j.kc(24,mt,1,1,"span",2),j.Pb(),j.Pb(),j.Pb(),j.Pb()),2&t&&(j.Bb(5),j.cc("innerHTML",e.data.modul.name,j.hc),j.Bb(5),j.cc("ngForOf",e.data.semester),j.Bb(4),j.cc("innerHTML",e.data.erstellungsjahr,j.hc),j.Bb(3),j.oc("",e.data.studierende.length>1?"Studierende":"Student*in",":"),j.Bb(2),j.cc("ngForOf",e.data.studierende),j.Bb(3),j.oc("",e.data.dozierende.length>1?"Dozierende":"Dozent*in",":"),j.Bb(2),j.cc("ngForOf",e.data.dozierende))},directives:[i.i],styles:["th[_ngcontent-%COMP%]{vertical-align:top;border:none}"]}),t})(),Ot=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=j.Fb({type:t,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[["role","img","aria-hidden","true",1,"post-detail__spinner",2,"font-style","normal"]],template:function(t,e){1&t&&(j.Qb(0,"span",0),j.mc(1,"\u23f3"),j.Pb())},styles:[".post-detail__spinner[_ngcontent-%COMP%]{display:inline-block;margin-left:.5em;-webkit-animation:rotate 2.5s ease-in-out infinite;animation:rotate 2.5s ease-in-out infinite}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}15%{transform:rotate(180deg)}50%{transform:rotate(180deg)}65%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}15%{transform:rotate(180deg)}50%{transform:rotate(180deg)}65%{transform:rotate(1turn)}to{transform:rotate(1turn)}}"]}),t})();function jt(t,e){if(1&t&&(j.Qb(0,"span"),j.mc(1),j.Pb()),2&t){const t=e.$implicit;j.Bb(1),j.nc(t.name)}}function wt(t,e){if(1&t&&(j.Qb(0,"span",12),j.mc(1," \u2013 "),j.kc(2,jt,2,1,"span",13),j.Pb()),2&t){const t=j.Zb().ngIf;j.Bb(2),j.cc("ngForOf",t.acf.schlagworte)}}function vt(t,e){1&t&&(j.Qb(0,"h3"),j.mc(1,"Galerie"),j.Pb())}function St(t,e){if(1&t&&j.Mb(0,"img",14),2&t){const t=e.$implicit;j.cc("src",t.sizes.medium,j.ic)("alt",t.alt||t.title||t.name||"")("width",t.sizes["medium-width"])("height",t.sizes["medium-height"])}}function kt(t,e){if(1&t){const t=j.Rb();j.Qb(0,"section"),j.Mb(1,"h2",3),j.Qb(2,"p",4),j.mc(3),j.kc(4,wt,3,1,"span",5),j.Pb(),j.Mb(5,"app-showcase",6),j.Mb(6,"p",3),j.Qb(7,"h3"),j.mc(8,"Steckbrief"),j.Pb(),j.Mb(9,"app-briefing",7),j.kc(10,vt,2,0,"h3",8),j.kc(11,St,1,4,"img",9),j.Qb(12,"footer",10),j.Qb(13,"button",11),j.Xb("click",function(){return j.gc(t),j.Zb(2).toTop()}),j.mc(14,"Nach oben"),j.Pb(),j.Pb(),j.Pb()}if(2&t){const t=e.ngIf;j.Bb(1),j.cc("innerHTML",t.title.rendered,j.hc),j.Bb(2),j.oc(" ",t.acf.page.post_title," "),j.Bb(1),j.cc("ngIf",t.acf.schlagworte.length),j.Bb(1),j.cc("type",t.acf.showcaseFormat)("image",t.acf.showcase)("video",t.acf.youtube),j.Bb(1),j.cc("innerHTML",t.acf.beschreibung,j.hc),j.Bb(3),j.cc("data",t.acf),j.Bb(1),j.cc("ngIf",t.acf.galerie.length),j.Bb(1),j.cc("ngForOf",t.acf.galerie)}}function It(t,e){if(1&t&&(j.Ob(0),j.kc(1,kt,15,10,"section",0),j.ac(2,"async"),j.Nb()),2&t){const t=j.Zb(),e=j.fc(3);j.Bb(1),j.cc("ngIf",j.bc(2,2,t.post$))("ngIfElse",e)}}function Qt(t,e){if(1&t&&(j.Qb(0,"p",15),j.mc(1),j.Qb(2,"span",16),j.mc(3,"\ud83d\ude3f"),j.Pb(),j.Pb()),2&t){const t=j.Zb();j.Bb(1),j.oc(" Projekt mit ID \xbb",t.rawId,"\xab nicht gefunden. ")}}function Ct(t,e){1&t&&(j.Qb(0,"p",15),j.mc(1,"Wird geladen... "),j.Mb(2,"app-loading-spinner"),j.Pb())}let Ft=(()=>{class t{constructor(t,e){this.store=e,this.rawId=t.snapshot.paramMap.get("id"),this.id=Number(this.rawId),this.postEntity$=this.postEntityByIdFn$.pipe(Object(o.a)(t=>t(this.id))),this.post$=this.postEntity$.pipe(Object(o.a)(t=>t.entity)),this.isFetching$=this.postEntity$.pipe(Object(o.a)(t=>t.isFetching))}ngOnInit(){this.store.dispatch(new c(this.id)).subscribe()}toTop(){document.body.scrollIntoView({block:"start",behavior:"smooth"})}}return t.\u0275fac=function(e){return new(e||t)(j.Lb(a.a),j.Lb(s.i))},t.\u0275cmp=j.Fb({type:t,selectors:[["app-post-detail"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["notFound",""],["loadingSpinner",""],[3,"innerHTML"],[1,"post-detail__category"],["class","post-detail__category__tags",4,"ngIf"],[3,"type","image","video"],[3,"data"],[4,"ngIf"],[3,"src","alt","width","height",4,"ngFor","ngForOf"],[1,"post-detail__footer"],["type","button",3,"click"],[1,"post-detail__category__tags"],[4,"ngFor","ngForOf"],[3,"src","alt","width","height"],[1,"post-detail__status-msg"],["role","img","aria-label","Sad cat",2,"font-style","normal"]],template:function(t,e){if(1&t&&(j.kc(0,It,3,4,"ng-container",0),j.ac(1,"async"),j.kc(2,Qt,4,1,"ng-template",null,1,j.lc),j.kc(4,Ct,3,0,"ng-template",null,2,j.lc)),2&t){const t=j.fc(5);j.cc("ngIf",!1===j.bc(1,2,e.isFetching$))("ngIfElse",t)}},directives:[i.j,yt,Pt,i.i,Ot],pipes:[i.b],styles:['.post-detail__category[_ngcontent-%COMP%]{font-weight:500;margin-top:0;margin-bottom:1.5em}.post-detail__category__tags[_ngcontent-%COMP%]{opacity:.6;font-weight:400;font-style:italic}.post-detail__category__tags[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:not(:first-child):before{content:", "}.post-detail__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-detail__footer[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}']}),Object(r.a)([Object(s.e)(M.postEntityByIdFn)],t.prototype,"postEntityByIdFn$",void 0),t})();function Et(t,e){if(1&t&&(j.Qb(0,"section"),j.Mb(1,"h3",6),j.Mb(2,"p",6),j.Qb(3,"a",7),j.mc(4,"Projekt ansehen \u2192"),j.Pb(),j.Mb(5,"hr"),j.Pb()),2&t){const t=e.$implicit,n=j.Zb(2);j.Bb(1),j.cc("innerHTML",t.title.rendered,j.hc),j.Bb(1),j.cc("innerHTML",n.getTeaser(t.acf.beschreibung),j.hc),j.Bb(1),j.dc("routerLink",t.id)}}function Mt(t,e){if(1&t){const t=j.Rb();j.Qb(0,"button",8),j.Xb("click",function(){return j.gc(t),j.Zb(2).requestNextPage()}),j.mc(1," Mehr laden... "),j.Pb()}}function Bt(t,e){if(1&t&&(j.Ob(0),j.kc(1,Et,6,3,"section",3),j.ac(2,"async"),j.Qb(3,"footer",4),j.kc(4,Mt,2,0,"button",5),j.ac(5,"async"),j.ac(6,"async"),j.Pb(),j.Nb()),2&t){const t=j.Zb();j.Bb(1),j.cc("ngForOf",j.bc(2,2,t.posts$)),j.Bb(3),j.cc("ngIf",j.bc(5,4,t.query$).totalPages>t.pagination.page&&!1===j.bc(6,6,t.isFetching$))}}function Lt(t,e){1&t&&(j.Qb(0,"p",9),j.mc(1," Keine Projekte vorhanden. "),j.Qb(2,"span",10),j.mc(3,"\ud83d\udeab"),j.Pb(),j.Pb())}function xt(t,e){if(1&t&&(j.kc(0,Lt,4,0,"p",2),j.ac(1,"async")),2&t){const t=j.Zb();j.cc("ngIf",!1===j.bc(1,1,t.isFetching$))}}function Vt(t,e){1&t&&(j.Qb(0,"p",9),j.mc(1," Projekte werden geladen... "),j.Mb(2,"app-loading-spinner"),j.Pb())}const Rt=/<br\s?\/?>(<\/br>)?/g,$t=a.k.forChild([{path:"",component:(()=>{class t{constructor(t){this.store=t,this.pagination={page:1,perPage:8},this.posts$=this.postEntitiesByQueryFn$.pipe(Object(o.a)(t=>t(this.pagination)),Object(o.a)(t=>t.map(t=>t.entity))),this.query$=this.postQueryFn$.pipe(Object(o.a)(t=>t(this.pagination))),this.isFetching$=this.query$.pipe(Object(o.a)(t=>Object.values(t.pages).some(t=>t.isFetching)))}ngOnInit(){this.loadPage()}loadPage(){this.store.dispatch(new g(this.pagination))}requestNextPage(){this.pagination.page++,this.loadPage()}getTeaser(t){return(t=t.replace(Rt,"")).length<150?t:`${t.slice(0,145)}...`}}return t.\u0275fac=function(e){return new(e||t)(j.Lb(s.i))},t.\u0275cmp=j.Fb({type:t,selectors:[["app-post-master"]],decls:8,vars:7,consts:[[4,"ngIf","ngIfElse"],["noPosts",""],["class","post-master__status-msg",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"post-master__footer"],["type","button",3,"click",4,"ngIf"],[3,"innerHTML"],[3,"routerLink"],["type","button",3,"click"],[1,"post-master__status-msg"],["aria-hidden","true",2,"font-style","normal"]],template:function(t,e){if(1&t&&(j.Qb(0,"h2"),j.mc(1,"DMP Portfolio"),j.Pb(),j.kc(2,Bt,7,8,"ng-container",0),j.ac(3,"async"),j.kc(4,xt,2,3,"ng-template",null,1,j.lc),j.kc(6,Vt,3,0,"p",2),j.ac(7,"async")),2&t){const t=j.fc(5);j.Bb(2),j.cc("ngIf",j.bc(3,3,e.posts$).length)("ngIfElse",t),j.Bb(4),j.cc("ngIf",j.bc(7,5,e.isFetching$))}},directives:[i.j,i.i,a.j,Ot],pipes:[i.b],styles:["section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline}a[_ngcontent-%COMP%]{margin-left:1em}.post-master__status-msg[_ngcontent-%COMP%]{text-align:center;font-style:italic;font-weight:bolder}.post-master__footer[_ngcontent-%COMP%]{text-align:center;margin-top:2rem}"]}),Object(r.a)([Object(s.e)(M.postQueryFn)],t.prototype,"postQueryFn$",void 0),Object(r.a)([Object(s.e)(M.postEntitiesByQueryFn)],t.prototype,"postEntitiesByQueryFn$",void 0),t})()},{path:":id",component:Ft}]);let Tt=(()=>{class t{}return t.\u0275mod=j.Jb({type:t}),t.\u0275inj=j.Ib({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),At=(()=>{class t{}return t.\u0275mod=j.Jb({type:t}),t.\u0275inj=j.Ib({factory:function(e){return new(e||t)},imports:[[i.c,ht,Tt]]}),t})(),zt=(()=>{class t{}return t.\u0275mod=j.Jb({type:t}),t.\u0275inj=j.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,a.k,Tt]]}),t})(),Ht=(()=>{class t{}return t.\u0275mod=j.Jb({type:t}),t.\u0275inj=j.Ib({factory:function(e){return new(e||t)},imports:[[i.c,$t,zt,At,s.d.forFeature([E])]]}),t})()}}]);
//# sourceMappingURL=portfolio-portfolio-module-es2015.98a5a5ee1a02cd243246.js.map