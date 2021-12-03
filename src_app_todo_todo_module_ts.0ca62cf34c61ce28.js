"use strict";var Nn=Object.defineProperty,Sn=Object.defineProperties,Gn=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,xn=Object.prototype.hasOwnProperty,Bn=Object.prototype.propertyIsEnumerable,ve=(p,d,a)=>d in p?Nn(p,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[d]=a,b=(p,d)=>{for(var a in d||(d={}))xn.call(d,a)&&ve(p,a,d[a]);if(ye)for(var a of ye(d))Bn.call(d,a)&&ve(p,a,d[a]);return p},N=(p,d)=>Sn(p,Gn(d));(self.webpackChunkng_app=self.webpackChunkng_app||[]).push([["src_app_todo_todo_module_ts"],{5622:(p,d,a)=>{a.r(d),a.d(d,{TodoModule:()=>Tn});var C=a(8267),r=a(4001),Ce=a(7797),Ve=a(2354),Ae=a(2014);let ft=(()=>{class n{constructor(t,o){this._renderer=t,this._elementRef=o,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,o){this._renderer.setProperty(this._elementRef.nativeElement,t,o)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(r.Qsj),r.Y36(r.SBq))},n.\u0275dir=r.lG2({type:n}),n})(),V=(()=>{class n extends ft{}return n.\u0275fac=function(){let e;return function(o){return(e||(e=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();const g=new r.OlP("NgValueAccessor"),be={provide:g,useExisting:(0,r.Gpc)(()=>S),multi:!0},Ee=new r.OlP("CompositionEventMode");let S=(()=>{class n extends ft{constructor(t,o,i){super(t,o),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,C.q)()?(0,C.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(Ee,8))},n.\u0275dir=r.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,o){1&t&&r.NdJ("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[r._Bn([be]),r.qOj]}),n})();const u=new r.OlP("NgValidators"),_=new r.OlP("NgAsyncValidators");function bt(n){return null!=n}function Dt(n){const e=(0,r.QGY)(n)?(0,Ce.D)(n):n;return(0,r.CqO)(e),e}function Et(n){let e={};return n.forEach(t=>{e=null!=t?b(b({},e),t):e}),0===Object.keys(e).length?null:e}function Ft(n,e){return e.map(t=>t(n))}function wt(n){return n.map(e=>function(n){return!n.validate}(e)?e:t=>e.validate(t))}function $(n){return null!=n?function(n){if(!n)return null;const e=n.filter(bt);return 0==e.length?null:function(t){return Et(Ft(t,e))}}(wt(n)):null}function W(n){return null!=n?function(n){if(!n)return null;const e=n.filter(bt);return 0==e.length?null:function(t){const o=Ft(t,e).map(Dt);return(0,Ve.D)(o).pipe((0,Ae.U)(Et))}}(wt(n)):null}function Nt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function z(n){return n?Array.isArray(n)?n:[n]:[]}function G(n,e){return Array.isArray(n)?n.includes(e):n===e}function xt(n,e){const t=z(e);return z(n).forEach(i=>{G(t,i)||t.push(i)}),t}function Bt(n,e){return z(e).filter(t=>!G(n,t))}class kt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=W(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class c extends kt{get formDirective(){return null}get path(){return null}}class y extends kt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Pt{constructor(e){this._cd=e}is(e){var t,o,i;return"submitted"===e?!!(null==(t=this._cd)?void 0:t.submitted):!!(null==(i=null==(o=this._cd)?void 0:o.control)?void 0:i[e])}}let It=(()=>{class n extends Pt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(y,2))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){2&t&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))},features:[r.qOj]}),n})(),Rt=(()=>{class n extends Pt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(c,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){2&t&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))("ng-submitted",o.is("submitted"))},features:[r.qOj]}),n})();function F(n,e){X(n,e),e.valueAccessor.writeValue(n.value),function(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ut(n,e)})}(n,e),function(n,e){const t=(o,i)=>{e.valueAccessor.writeValue(o),i&&e.viewToModelUpdate(o)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ut(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function(n,e){if(e.valueAccessor.setDisabledState){const t=o=>{e.valueAccessor.setDisabledState(o)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function P(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function X(n,e){const t=function(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Nt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const o=function(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Nt(o,e.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]);const i=()=>n.updateValueAndValidity();P(e._rawValidators,i),P(e._rawAsyncValidators,i)}function Ut(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function R(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const w="VALID",U="INVALID",D="PENDING",O="DISABLED";function et(n){return(ot(n)?n.validators:n)||null}function Lt(n){return Array.isArray(n)?$(n):n||null}function nt(n,e){return(ot(e)?e.asyncValidators:n)||null}function jt(n){return Array.isArray(n)?W(n):n||null}function ot(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class rt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=Lt(this._rawValidators),this._composedAsyncValidatorFn=jt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===U}get pending(){return this.status==D}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=Lt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=jt(e)}addValidators(e){this.setValidators(xt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(xt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Bt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Bt(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(o=>{o.disable(N(b({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(N(b({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(o=>o(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(o=>{o.enable(N(b({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(N(b({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===D)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;const t=Dt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function(n,e,t){if(null==e||(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length))return null;let o=n;return e.forEach(i=>{o=o instanceof it?o.controls.hasOwnProperty(i)?o.controls[i]:null:o instanceof Ue&&o.at(i)||null}),o}(this,e)}getError(e,t){const o=t?this.get(t):this;return o&&o.errors?o.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(U)?U:w}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ot(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class q extends rt{constructor(e=null,t,o){super(et(t),nt(o,t)),this._onChange=[],this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(o=>o(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=null,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){R(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){R(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class it extends rt{constructor(e,t,o){super(et(t),nt(o,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,o={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,o={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){this._checkAllValuesPresent(e),Object.keys(e).forEach(o=>{this._throwIfControlMissing(o),this.controls[o].setValue(e[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(o=>{this.controls[o]&&this.controls[o].patchValue(e[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((o,i)=>{o.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,o)=>(e[o]=t instanceof q?t.value:t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,o)=>!!o._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[e])throw new Error(`Cannot find form control with name: ${e}.`)}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const o=this.controls[t];o&&e(o,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const o=this.controls[t];if(this.contains(t)&&e(o))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(e,t){let o=e;return this._forEachChild((i,s)=>{o=t(o,i,s)}),o}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(e){this._forEachChild((t,o)=>{if(void 0===e[o])throw new Error(`Must supply a value for form control with name: '${o}'.`)})}}class Ue extends rt{constructor(e,t,o){super(et(t),nt(o,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,o={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,o={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){this._checkAllValuesPresent(e),e.forEach((o,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((o,i)=>{o.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e instanceof q?e.value:e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((t,o)=>!!o._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(e))throw new Error(`Cannot find form control at index ${e}`)}_forEachChild(e){this.controls.forEach((t,o)=>{e(t,o)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_checkAllValuesPresent(e){this._forEachChild((t,o)=>{if(void 0===e[o])throw new Error(`Must supply a value for form control at index: ${o}.`)})}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}const qe={provide:c,useExisting:(0,r.Gpc)(()=>H)},T=(()=>Promise.resolve(null))();let H=(()=>{class n extends c{constructor(t,o){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.vpe,this.form=new it({},$(t),W(o))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){T.then(()=>{const o=this._findContainer(t.path);t.control=o.registerControl(t.name,t.control),F(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){T.then(()=>{const o=this._findContainer(t.path);o&&o.removeControl(t.name),R(this._directives,t)})}addFormGroup(t){T.then(()=>{const o=this._findContainer(t.path),i=new it({});(function(n,e){X(n,e)})(i,t),o.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){T.then(()=>{const o=this._findContainer(t.path);o&&o.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,o){T.then(()=>{this.form.get(t.path).setValue(o)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,function(n,e){n._syncPendingControls(),e.forEach(t=>{const o=t.control;"submit"===o.updateOn&&o._pendingChange&&(t.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(u,10),r.Y36(_,10))},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){1&t&&r.NdJ("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([qe]),r.qOj]}),n})();const Le={provide:y,useExisting:(0,r.Gpc)(()=>st)},$t=(()=>Promise.resolve(null))();let st=(()=>{class n extends y{constructor(t,o,i,s){super(),this.control=new q,this._registered=!1,this.update=new r.vpe,this._parent=t,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=function(n,e){if(!e)return null;let t,o,i;return Array.isArray(e),e.forEach(s=>{s.constructor===S?t=s:function(n){return Object.getPrototypeOf(n.constructor)===V}(s)?o=s:i=s}),i||o||t||null}(0,s)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(n,e){return[...e.path,n]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){F(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){$t.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const o=t.isDisabled.currentValue,i=""===o||o&&"false"!==o;$t.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(c,9),r.Y36(u,10),r.Y36(_,10),r.Y36(g,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([Le]),r.qOj,r.TTD]}),n})(),Wt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),Jt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const ln={provide:u,useExisting:(0,r.Gpc)(()=>j),multi:!0};let j=(()=>{class n{constructor(){this._required=!1}get required(){return this._required}set required(t){this._required=null!=t&&!1!==t&&"false"!=`${t}`,this._onChange&&this._onChange()}validate(t){return this.required?function(n){return function(n){return null==n||0===n.length}(n.value)?{required:!0}:null}(t):null}registerOnValidatorChange(t){this._onChange=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,o){2&t&&r.uIk("required",o.required?"":null)},inputs:{required:"required"},features:[r._Bn([ln])]}),n})(),pn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[Jt]]}),n})(),gn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[pn]}),n})();var f=a(964),mn=a(1917),A=a(8806);let pe=(()=>{class n{constructor(t){this.todo=t}}return n.type="[Todo] Add Todo",n})(),ge=(()=>{class n{constructor(t){this.index=t}}return n.type="[Todo] Remove Todo",n})(),me=(()=>{class n{constructor(t,o){this.index=t,this.todo=o}}return n.type="[Todo] Update Todo",n})();class _e{constructor(e,t,o=!1){this.title=e,this.body=t,this.isCompleted=o}}var Z;const _n=(n,e)=>Object.assign(Object.assign({},n),{index:e}),yn=new _e("Weitere Optionen f\xfcr die Demo-App","Features und Methoden, in die man sich anhand der Testanwendung noch einarbeiten kann.<br><br>- Kontrollierte Paginierung f\xfcr Posts<br>- Reactive Forms<br>- Authentifzierung<br>- Testing<br>- PWA Implementierung");let h=Z=class{static todos(e){return e.map(_n)}static todosByCompletedState(e){return(0,f.P1)([Z],t=>Z.todos(t).filter(o=>o.isCompleted===e))}addTodo(e,t){e.setState(o=>[...o,t.todo])}removeTodo(e,t){e.setState(o=>o.filter((i,s)=>s!==t.index))}updateTodo(e,t){e.setState(o=>o.map((i,s)=>s===t.index?Object.assign(Object.assign({},i),t.todo):i))}};h.\u0275fac=function(e){return new(e||h)},h.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac}),(0,A.gn)([(0,f.aU)(pe)],h.prototype,"addTodo",null),(0,A.gn)([(0,f.aU)(ge)],h.prototype,"removeTodo",null),(0,A.gn)([(0,f.aU)(me)],h.prototype,"updateTodo",null),(0,A.gn)([(0,f.Qf)()],h,"todos",null),h=Z=(0,A.gn)([(0,f.ZM)({name:"todo",defaults:[yn]})],h);let vn=(()=>{class n{constructor(t){this.store=t,this.todoTitle="",this.todoBody=""}onSubmit(){const t=this.todoBody.replace(/\n/g,"<br>");this.store.dispatch(new pe(new _e(this.todoTitle,t)))}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(f.yh))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-form-add-todo"]],decls:13,vars:3,consts:[["action","./","method","POST","autocomplete","off",3,"ngSubmit"],["todoForm","ngForm"],["for","todoTitle"],["required","","type","text","name","todoTitle","id","todoTitle","placeholder","Einkauf bei Lidl",3,"ngModel","ngModelChange"],["for","todoBody"],["required","","rows","4","name","todoBody","id","todoBody","placeholder","\u2022 2 Packungen TK-Spinat...",3,"ngModel","ngModelChange"],["type","submit",3,"disabled"]],template:function(t,o){if(1&t){const i=r.EpF();r.TgZ(0,"form",0,1),r.NdJ("ngSubmit",function(){r.CHM(i);const l=r.MAs(1);return o.onSubmit(),l.reset()}),r.TgZ(2,"label",2),r._uU(3,"Titel:"),r.qZA(),r._UZ(4,"br"),r.TgZ(5,"input",3),r.NdJ("ngModelChange",function(l){return o.todoTitle=l}),r.qZA(),r.TgZ(6,"label",4),r._uU(7,"Inhalt:"),r.qZA(),r._UZ(8,"br"),r.TgZ(9,"textarea",5),r.NdJ("ngModelChange",function(l){return o.todoBody=l}),r.qZA(),r._UZ(10,"br"),r.TgZ(11,"button",6),r._uU(12,"Hinzuf\xfcgen"),r.qZA(),r.qZA()}if(2&t){const i=r.MAs(1);r.xp6(5),r.Q6J("ngModel",o.todoTitle),r.xp6(4),r.Q6J("ngModel",o.todoBody),r.xp6(2),r.Q6J("disabled",!i.form.valid)}},directives:[Wt,Rt,H,S,j,It,st],styles:["input[_ngcontent-%COMP%]{width:100%;max-width:400px;box-sizing:border-box}textarea[_ngcontent-%COMP%]{max-width:400px}button[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]:disabled{pointer-events:none;cursor:pointer;opacity:.7}input.ng-touched.ng-invalid[_ngcontent-%COMP%], textarea.ng-touched.ng-invalid[_ngcontent-%COMP%]{box-shadow:0 0 0 2px #850000}\n/*# sourceMappingURL=form-add-todo.component.css.map*/"]}),n})();function Cn(n,e){if(1&n&&r._UZ(0,"p",2),2&n){const t=r.oxw();r.Q6J("innerHTML",t.todo.body,r.oJD)}}let Vn=(()=>{class n{constructor(t){this.store=t}setCompleteStatus(t,o=!0){this.store.dispatch(new me(t,{isCompleted:o}))}deleteTodo(t){this.store.dispatch(new ge(t))}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(f.yh))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-todo-entry"]],inputs:{todo:"todo"},decls:8,vars:4,consts:[[3,"innerHTML",4,"ngIf"],["type","button",3,"click"],[3,"innerHTML"]],template:function(t,o){1&t&&(r.TgZ(0,"article"),r.TgZ(1,"h5"),r._uU(2),r.qZA(),r.YNc(3,Cn,1,1,"p",0),r.TgZ(4,"button",1),r.NdJ("click",function(){return o.setCompleteStatus(o.todo.index,!o.todo.isCompleted)}),r._uU(5),r.qZA(),r.TgZ(6,"button",1),r.NdJ("click",function(){return o.deleteTodo(o.todo.index)}),r._uU(7,"\u{1f5d1}\ufe0f L\xf6schen"),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.AsE("",o.todo.title," \u2013 ",o.todo.isCompleted?"\u2714":"noch nicht"," erledigt"),r.xp6(1),r.Q6J("ngIf",!o.todo.isCompleted),r.xp6(2),r.hij(" ",o.todo.isCompleted?"\u274e Ausstehend":"\u2705 Erledigt"," "))},directives:[C.O5],styles:["article[_ngcontent-%COMP%]{border-left:2px solid var(--border);padding-left:1rem}\n/*# sourceMappingURL=todo-entry.component.css.map*/"]}),n})();function An(n,e){if(1&n&&(r.TgZ(0,"li"),r._UZ(1,"app-todo-entry",4),r.qZA()),2&n){const t=e.$implicit;r.xp6(1),r.Q6J("todo",t)}}function Mn(n,e){if(1&n&&(r.TgZ(0,"ul"),r.YNc(1,An,2,1,"li",3),r.ALo(2,"async"),r.qZA()),2&n){const t=r.oxw();r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,t.uncompletedTodos$))}}function bn(n,e){1&n&&(r.TgZ(0,"p",5),r._uU(1,"Keine unerledigten Todos."),r.qZA())}function Dn(n,e){if(1&n&&(r.TgZ(0,"li"),r._UZ(1,"app-todo-entry",4),r.qZA()),2&n){const t=e.$implicit;r.xp6(1),r.Q6J("todo",t)}}function En(n,e){if(1&n&&(r.TgZ(0,"ul"),r.YNc(1,Dn,2,1,"li",3),r.ALo(2,"async"),r.qZA()),2&n){const t=r.oxw();r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,t.completedTodos$))}}function Fn(n,e){1&n&&(r.TgZ(0,"p",6),r._uU(1,"Hier erscheinen alle Todos, die du als erledigt markierst."),r.qZA())}class M{}M.\u0275fac=function(e){return new(e||M)},M.\u0275cmp=r.Xpm({type:M,selectors:[["app-todo-master"]],decls:18,vars:8,consts:[[4,"ngIf","ngIfElse"],["noUncompletedTodos",""],["noCompletedTodos",""],[4,"ngFor","ngForOf"],[3,"todo"],["data-testid","none-uncompleted"],["data-testid","none-completed"]],template:function(e,t){if(1&e&&(r.TgZ(0,"h2"),r._uU(1,"Todos"),r.qZA(),r.TgZ(2,"h3"),r._uU(3,"Deine Todos"),r.qZA(),r.YNc(4,Mn,3,3,"ul",0),r.ALo(5,"async"),r.YNc(6,bn,2,0,"ng-template",null,1,r.W1O),r.TgZ(8,"h4"),r._uU(9,"Erledigte Todos"),r.qZA(),r.YNc(10,En,3,3,"ul",0),r.ALo(11,"async"),r.YNc(12,Fn,2,0,"ng-template",null,2,r.W1O),r._UZ(14,"hr"),r.TgZ(15,"h3"),r._uU(16,"Todo hinzuf\xfcgen"),r.qZA(),r._UZ(17,"app-form-add-todo")),2&e){const o=r.MAs(7),i=r.MAs(13);r.xp6(4),r.Q6J("ngIf",r.lcZ(5,4,t.uncompletedTodos$).length)("ngIfElse",o),r.xp6(6),r.Q6J("ngIf",r.lcZ(11,6,t.completedTodos$).length)("ngIfElse",i)}},directives:[C.O5,vn,C.sg,Vn],pipes:[C.Ov],styles:["ul[_ngcontent-%COMP%]{list-style:none}hr[_ngcontent-%COMP%]{margin:2rem 0}\n/*# sourceMappingURL=todo-master.component.css.map*/"]}),(0,A.gn)([(0,f.Ph)(h.todosByCompletedState(!1))],M.prototype,"uncompletedTodos$",void 0),(0,A.gn)([(0,f.Ph)(h.todosByCompletedState(!0))],M.prototype,"completedTodos$",void 0);const On=mn.Bz.forChild([{path:"",component:M}]);let Tn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[C.ez,On,f.$l.forFeature([h]),gn]]}),n})()}}]);
//# sourceMappingURL=src_app_todo_todo_module_ts.0ca62cf34c61ce28.js.map