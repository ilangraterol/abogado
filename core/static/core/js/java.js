(function(){window.up={version:"0.60.0"}}).call(this),function(){var t=[].slice,e={}.hasOwnProperty;up.util=function(){var n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P,x,O,R,M,j,D,L,U,q,N,K,_,H,B,z,V,I,Q,W,$,X,G,J,Y,Z,tt,et,nt,rt,it,ot,ut,st,at,lt,ct,pt,ht,ft,dt,mt,vt,gt,yt,bt,wt,kt,St,Et,Tt,At,Ft,Ct,Pt,xt,Ot,Rt,Mt,jt,Dt,Lt,Ut,qt,Nt,Kt,_t,Ht,Bt,zt,Vt,It,Qt,Wt,$t,Xt,Gt,Jt;return wt=function(){},s=function(){return Promise.resolve()},ft=function(e){var n,r;return r=void 0,n=!1,function(){var i;return i=1<=arguments.length?t.call(arguments,0):[],n?r:(n=!0,r=e.apply(null,i))}},rt=function(t,e){return e=e.toString(),(""===e||"80"===e)&&"http:"===t||"443"===e&&"https:"===t},St=function(t,e){var n,r,i;return r=At(t),n=r.protocol+"//"+r.hostname,rt(r.protocol,r.port)||(n+=":"+r.port),i=r.pathname,(null!=e?e.stripTrailingSlash:void 0)===!0&&(i=i.replace(/\/$/,"")),n+=i,(null!=e?e.search:void 0)!==!1&&(n+=r.search),(null!=e?e.hash:void 0)===!0&&(n+=r.hash),n},N=function(t){var e;return e=At(location.href),t=At(t),e.protocol!==t.protocol||e.hostname!==t.hostname},At=function(t){var e;return W(t)?e=up.element.get(t):t.pathname?e=t:(e=document.createElement("a"),e.href=t),e.hostname||(e.href=e.href),"/"!==e.pathname[0]&&(e=Tt(e,"protocol","hostname","port","pathname","search","hash"),e.pathname="/"+e.pathname),e},kt=function(t){return t?t.toUpperCase():"GET"},mt=function(t){return"GET"!==t&&"HEAD"!==t},u=function(){var n,r,i,o,u,s,a;for(s=arguments[0],u=2<=arguments.length?t.call(arguments,1):[],n=0,i=u.length;n<i;n++){o=u[n];for(r in o)e.call(o,r)&&(a=o[r],s[r]=a)}return s},o=Object.assign||u,Xt=function(t){var e,n,r;n=[];for(e in t)r=t[e],n.push(r);return n},Et=Object.values||Xt,lt=function(t){return it(t)?function(e){return e[t]}:t},pt=function(t,e){var n,r,i,o,u;if(0===t.length)return[];for(e=lt(e),u=[],r=n=0,o=t.length;n<o;r=++n)i=t[r],u.push(e(i,r));return u},ht=function(t,e){var n;return n=function(t,e){return t[e[0]]=e[1],t},pt(t,e).reduce(n,{})},h=pt,f=function(t,e){var n,r;for(r=[];(n=t.next())&&!n.done;)r.push(e(n.value));return r},zt=function(t,e){var n,r,i,o;for(o=[],r=n=0,i=t-1;0<=i?n<=i:n>=i;r=0<=i?++n:--n)o.push(e(r));return o},J=function(t){return null===t},ut=function(t){return void 0===t},K=function(t){return!ut(t)},X=function(t){return ut(t)||J(t)},I=function(t){return!X(t)},U=function(t){return!!X(t)||(Z(t)&&t[U.key]?t[U.key]():it(t)||$(t)?0===t.length:!!tt(t)&&0===Object.keys(t).length)},U.key="up.util.isBlank",Pt=function(t,e){return null==e&&(e=et),e(t)?t:void 0},et=function(t){return!U(t)},V=function(t){return"function"==typeof t},it=function(t){return"string"==typeof t||t instanceof String},q=function(t){return"boolean"==typeof t||t instanceof Boolean},Y=function(t){return"number"==typeof t||t instanceof Number},tt=function(t){return"object"==typeof t&&!J(t)&&(ut(t.constructor)||t.constructor===Object)},Z=function(t){var e;return e=typeof t,"object"===e&&!J(t)||"function"===e},_=function(t){return t instanceof Element},W=function(t){return up.browser.canJQuery()&&t instanceof jQuery},nt=function(t){return Z(t)&&V(t.then)},D=Array.isArray,z=function(t){return t instanceof FormData},Vt=function(t){return D(t)?t:Array.prototype.slice.call(t)},$=function(t){return D(t)||G(t)||j(t)||W(t)||Q(t)},G=function(t){return t instanceof NodeList},Q=function(t){return t instanceof HTMLCollection},j=function(t){return"[object Arguments]"===Object.prototype.toString.call(t)},Gt=function(t){return $(t)?t:X(t)?[]:[t]},c=function(t,e){var n,r,i;if(Z(t)&&t[c.key]?t=t[c.key]():$(t)?(t=Array.prototype.slice.call(t),n=!0):tt(t)&&(t=o({},t),n=!0),n&&e)for(r in t)i=t[r],t[r]=c(i,!0);return t},c.key="up.util.copy",Date.prototype[c.key]=function(){return new Date(+this)},p=function(t){return c(t,!0)},dt=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],o.apply(null,[{}].concat(t.call(e)))},yt=function(t,e){return e?dt(e,t):t?c(t):{}},F=function(t,e){var n,r,i,o;for(o=void 0,r=0,i=t.length;r<i;r++)if(n=t[r],e(n)){o=n;break}return o},_t=function(t,e){return!!C(t,e)},C=function(t,e){var n,r,i,o,u;for(e=lt(e),i=r=0,o=t.length;r<o;i=++r)if(n=t[i],u=e(n,i))return u},b=function(t,e){var n,r,i,o,u;for(e=lt(e),u=!0,i=r=0,o=t.length;r<o;i=++r)if(n=t[i],!e(n,i)){u=!1;break}return u},a=function(t){return A(t,I)},Qt=function(t){return t.length<2?t:Nt(i(t))},Wt=function(t,e){var n;return t.length<2?t:(e=lt(e),n=new Set,A(t,function(t,r){var i;return i=e(t,r),!n.has(i)&&(n.add(i),!0)}))},Nt=function(t){var e;return e=[],t.forEach(function(t){return e.push(t)}),e},i=function(t){var e;return e=new Set,t.forEach(function(t){return e.add(t)}),e},A=function(t,e){var n;return e=lt(e),n=[],h(t,function(t,r){if(e(t,r))return n.push(t)}),n},Mt=function(t,e){return e=lt(e),A(t,function(t,n){return!e(t,n)})},M=function(t,e){return A(t,function(t){return l(e,t)})},Ut=function(t,e){return setTimeout(e,t)},Rt=function(t){return setTimeout(t,0)},Ot=function(t){return Promise.resolve().then(t)},ct=function(t){return t[t.length-1]},v=function(t){var e;return e=t.key,"Escape"===e||"Esc"===e},l=function(t,e){return t.indexOf(e)>=0},Tt=function(){var e,n,r,i,o,u;for(i=arguments[0],o=2<=arguments.length?t.call(arguments,1):[],e={},n=0,r=o.length;n<r;n++)u=o[n],u in i&&(e[u]=i[u]);return e},w=function(){var e,n,r,i,o,u;for(i=arguments[0],o=2<=arguments.length?t.call(arguments,1):[],e=c(i),n=0,r=o.length;n<r;n++)u=o[n],delete e[u];return e},st=function(t){return!(t.metaKey||t.shiftKey||t.ctrlKey)},at=function(t){var e;return e=ut(t.button)||0===t.button,e&&st(t)},$t=function(){return new Promise(wt)},Dt=function(t,e){var n;if(n=t.indexOf(e),n>=0)return t.splice(n,1),e},y=function(){var e,n;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],V(n)?n.apply(null,e):n},T=function(){var e,n,r,i,o,u;throw e=1<=arguments.length?t.call(arguments,0):[],D(e[0])?(r=e[0],u=e[1]||{}):(r=e,u={}),(i=up.log).error.apply(i,r),up.event.onReady(function(){return up.toast.open(r,u)}),n=(o=up.log).sprintf.apply(o,r),new Error(n)},n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},m=function(t){return t.replace(/[&<>"]/g,function(t){return n[t]})},g=function(t){return t.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&")},Ct=function(t,e){var n;return n=t[e],delete t[e],n},Lt=function(t,e,n){return t[n]=Ct(t,e)},S=function(t,e){var n;if(n=ct(t),e(n))return t.pop()},k=function(t){return S(t,V)},E=function(t){return S(t,tt)||{}},Ft=function(){var e,n;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],function(){var r;return r=1<=arguments.length?t.call(arguments,0):[],n.apply(this,e.concat(r))}},R=function(t){return t},xt=function(e){var n,r;return n=gt(),r=function(){var r,i;return r=1<=arguments.length?t.call(arguments,0):[],i=e.apply(null,r),n.resolve(i),i},r.promise=n.promise(),r},qt=function(t){return 1===t.length?t[0]:function(){return pt(t,function(t){return t()})}},O=function(t){var e,n,r;return e=t.getBoundingClientRect(),n=e.left+.5*e.width,r=.5*up.viewport.rootWidth(),n<r?"left":"right"},x=function(t){var e,n,r,i;for(e=[],n=0,r=t.length;n<r;n++)i=t[n],$(i)?e.push.apply(e,i):e.push(i);return e},P=function(t,e){return x(pt(t,e))},ot=function(t){return!!t},r=function(t,e){return t.then(e,e)},vt=function(t){return null!=t?t["catch"](wt):void 0},gt=function(){var t,e,n;return n=void 0,e=void 0,t=new Promise(function(t,r){return n=t,e=r}),t.resolve=n,t.reject=e,t.promise=function(){return t},t},jt=function(t){var e;try{return t()}catch(t){return e=t,Promise.reject(e)}},Bt=function(t,e){var n,r,i,o,u;for(e=lt(e),u=0,i=0,o=t.length;i<o;i++)n=t[i],r=e(n),I(r)&&(u+=r);return u},L=function(t){return Object.prototype.hasOwnProperty(t)},H=function(t,e){var n,r;return(null!=t?t.valueOf:void 0)&&(t=t.valueOf()),(null!=e?e.valueOf:void 0)&&(e=e.valueOf()),typeof t==typeof e&&($(t)&&$(e)?B(t,e):Z(t)&&t[H.key]?t[H.key](e):tt(t)&&tt(e)?(n=Object.keys(t),r=Object.keys(e),!!B(n,r)&&b(n,function(n){return H(t[n],e[n])})):t===e)},H.key="up.util.isEqual",B=function(t,e){return t.length===e.length&&b(t,function(t,n){return H(t,e[n])})},Ht=function(t,e){var n;return null==e&&(e=" "),n=t.split(e),n=pt(n,function(t){return t.trim()}),n=A(n,et)},d=function(t,e){return!(e.length>t.length)&&t.substring(t.length-e.length)===e},Kt=function(t){return t<.5?2*t*t:t*(4-2*t)-1},Jt=function(t,e){return t instanceof e?t:new e(t)},bt=0,It=function(){return bt++},{parseUrl:At,normalizeUrl:St,normalizeMethod:kt,methodAllowsPayload:mt,assign:o,assignPolyfill:u,copy:c,deepCopy:p,merge:dt,options:yt,fail:T,each:h,eachIterator:f,map:pt,flatMap:P,mapObject:ht,times:zt,findResult:C,some:_t,any:function(){return up.legacy.warn("up.util.any() has been renamed to up.util.some()"),_t.apply(null,arguments)},every:b,all:function(){return up.legacy.warn("up.util.all() has been renamed to up.util.every()"),b.apply(null,arguments)},detect:function(){return up.legacy.warn("up.util.find() has been renamed to up.util.find()"),F.apply(null,arguments)},find:F,select:function(){return up.legacy.warn("up.util.select() has been renamed to up.util.filter()"),A.apply(null,arguments)},filter:A,reject:Mt,intersect:M,compact:a,uniq:Qt,uniqBy:Wt,last:ct,isNull:J,isDefined:K,isUndefined:ut,isGiven:I,isMissing:X,isPresent:et,isBlank:U,presence:Pt,isObject:Z,isFunction:V,isString:it,isBoolean:q,isNumber:Y,isElement:_,isJQuery:W,isPromise:nt,isOptions:tt,isArray:D,isFormData:z,isNodeList:G,isArguments:j,isList:$,isUnmodifiedKeyEvent:st,isUnmodifiedMouseEvent:at,timer:Ut,setTimer:function(){return up.legacy.warn("up.util.setTimer() has been renamed to up.util.timer()"),Ut.apply(null,arguments)},escapePressed:v,contains:l,toArray:Vt,only:Tt,except:w,unresolvablePromise:$t,remove:Dt,memoize:ft,error:T,pluckKey:Ct,renameKey:Lt,extractOptions:E,extractCallback:k,noop:wt,asyncNoop:s,identity:R,escapeHtml:m,escapeRegexp:g,sequence:qt,previewable:xt,evalOption:y,horizontalScreenHalf:O,flatten:x,isTruthy:ot,newDeferred:gt,always:r,muteRejection:vt,rejectOnError:jt,isBasicObjectProperty:L,isCrossDomain:N,selectorForElement:function(){return up.legacy.warn("up.util.selectorForElement() has been renamed to up.element.toSelector()"),up.element.toSelector.apply(null,arguments)},nextFrame:function(){return up.legacy.warn("up.util.nextFrame() has been renamed to up.util.task()"),Rt.apply(null,arguments)},task:Rt,microtask:Ot,isEqual:H,splitValues:Ht,endsWith:d,sum:Bt,wrapList:Gt,wrapValue:Jt,simpleEase:Kt,values:Et,partial:Ft,arrayToSet:i,setToArray:Nt,uid:It}}(),up.fail=up.util.fail}.call(this),function(){var t,e=[].slice;t=up.util,up.legacy=function(){var n,r,i,o;return n=function(e,n,r){if(n in e)return i("Property { %s } has been renamed to { %s } (found in %o)",n,r,e),t.renameKey(e,n,r)},r=function(t,e){return Object.defineProperty(up,t,{get:function(){return i("up."+t+" has been renamed to up."+e),up[e]}})},o={},i=function(){var t,n,r;if(n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],n="[DEPRECATION] "+n,n=(r=up.log).sprintf.apply(r,[n].concat(e.call(t))),!o[n])return o[n]=!0,up.warn(n)},{renamedModule:r,fixKey:n,warn:i}}()}.call(this),function(){up.browser=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w;return y=up.util,m=function(t,e){var n,r;return r=y.merge(e,{url:t}),n=new up.Request(r),n.navigate()},g=function(t){return t.submit()},b=function(){return location.href},h=y.memoize(function(){return!window.atob}),f=y.memoize(function(){return"ActiveXObject"in window}),p=function(){return y.isDefined(history.pushState)&&"get"===up.protocol.initialRequestMethod()},r=y.memoize(function(){return"transition"in document.documentElement.style}),s=y.memoize(function(){return"oninput"in document.createElement("input")}),c=y.memoize(function(){return!!window.Promise}),u=y.memoize(function(){return!!window.FormData}),a=y.memoize(function(){return u()&&!!FormData.prototype.entries}),o=y.memoize(function(){return!!window.DOMParser}),e=y.memoize(function(){return window.console&&console.debug&&console.info&&console.warn&&console.error&&console.group&&console.groupCollapsed&&console.groupEnd}),i=y.memoize(function(){return!!window.customElements}),l=y.memoize(function(){return!!window.jQuery}),t=y.memoize(function(){return"requestAnimationFrame"in window}),n=y.memoize(function(){return"scrollRestoration"in history}),v=function(t){var e,n;return n=null!=(e=document.cookie.match(new RegExp(t+"=(\\w+)")))?e[1]:void 0,y.isPresent(n)&&(document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"),n},w=function(t){return t.preload||y.isBlank(t.confirm)||window.confirm(t.confirm)?Promise.resolve():Promise.reject(new Error("User canceled action"))},d=function(){return!h()&&e()&&o()&&u()&&r()&&s()&&c()&&t()},{url:b,navigate:m,submitForm:g,canPushState:p,canFormData:u,canInspectFormData:a,canCustomElements:i,canJQuery:l,canControlScrollRestoration:n,whenConfirmed:w,isSupported:d,popCookie:v,isIE11:f}}()}.call(this),function(){var t;t=up.util,up.Selector=function(){function e(t,e){this.selector=t,this.filterFn=e}var n,r;return n=new RegExp("\\:has\\(([^\\)]+)\\)$"),r=up.browser.isIE11()?"msMatchesSelector":"matches",e.prototype.matches=function(t){var e;return e=t[r](this.selector),this.filterFn&&e&&(e=this.filterFn(t)),e},e.prototype.descendants=function(e){var n;return n=e.querySelectorAll(this.selector),this.filterFn&&(n=t.filter(n,this.filterFn)),n},e.prototype.descendant=function(e){var n;return this.filterFn?(n=e.querySelectorAll(this.selector),t.find(n,this.filterFn)):e.querySelector(this.selector)},e.prototype.subtree=function(t){var e;return e=[],this.matches(t)&&e.push(t),e.push.apply(e,this.descendants(t)),e},e.prototype.closest=function(t){return t.closest&&!this.filterFn?t.closest(this.selector):this.closestPolyfill(t)},e.prototype.closestPolyfill=function(t){return this.matches(t,this.selector)?t:this.ancestor(t)},e.prototype.ancestor=function(t){var e;if(e=t.parentElement)return this.matches(e)?e:this.ancestor(e)},e.parse=function(t){var e;return e=null,t=t.replace(n,function(t,n){return e=function(t){return t.querySelector(n)},""}),new this(t,e)},e}()}.call(this),function(){var t=[].slice;up.element=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P,x,O,R,M,j,D,L,U,q,N,K,_,H,B,z,V,I,Q,W,$,X,G,J,Y;return G=up.util,n={getAttribute:function(){}},q=function(t){return up.Selector.parse(t)},b=function(){var e,n,r,i;return e=1<=arguments.length?t.call(arguments,0):[],i=e.pop(),n=null!=(r=e[0])?r:document,q(i).descendant(n)},i=function(){var e,n,r,i;return e=1<=arguments.length?t.call(arguments,0):[],i=e.pop(),n=null!=(r=e[0])?r:document,q(i).descendants(n)},Q=function(t,e){return q(e).subtree(t)},l=function(t,e){return q(e).closest(t)},R=function(t,e){return q(e).matches(t)},o=function(t,e){return q(e).ancestor(t)},S=function(t){return G.isElement(t)?t:G.isString(t)?b(t):G.isJQuery(t)?(t.length>1&&up.fail("up.element.get(): Cannot cast multiple elements (%o) to a single element",t),t[0]):t},k=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],G.flatMap(e,Y)},Y=function(t){return G.isString(t)?i(t):G.wrapList(t)},N=function(t){var e;return t.remove?t.remove():(e=t.parentNode)?e.removeChild(t):void 0},A=function(t){return t.style.display="none"},I=function(t){return t.style.display=""},$=function(t,e){return null==e&&(e=!x(t)),e?I(t):A(t)},X=function(t,e,n){var r;return r=t.classList,null==n&&(n=!r.contains(e)),n?r.add(e):r.remove(e)},H=function(t,e){var n,r,i;r=[];for(n in e)i=e[n],r.push(t.setAttribute(n,i));return r},M=function(t){var e,n;return n="meta"+u("name",t),null!=(e=b(n))?e.getAttribute("content"):void 0},C=function(t,e){return t.insertAdjacentElement("beforebegin",e)},K=function(t,e){return t.parentElement.replaceChild(e,t)},m=function(t,e){var n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y;for(n=[],m=t.replace(/\[([\w-]+)(?:=(["'])?([^"'\]]*?)\2)?\]/g,function(t,e,r,i){return n.push(i||""),"["+e+"]"}),u=m.split(/[ >]+/),d=void 0,i=void 0,h=void 0,s=0,c=u.length;s<c;s++){if(o=u[s],g=void 0,o=o.replace(/^[\w-]+/,function(t){return g=t,""}),i=document.createElement(g||"div"),d||(d=i),o=o.replace(/\#([\w-]+)/,function(t,e){return i.id=e,""}),o=o.replace(/\.([\w-]+)/g,function(t,e){return i.classList.add(e),""}),n.length&&(o=o.replace(/\[([\w-]+)\]/g,function(t,e){return i.setAttribute(e,n.shift()),""})),""!==o)throw new Error("Cannot parse selector: "+t);null!=h&&h.appendChild(i),h=i}if(e){if(r=G.pluckKey(e,"class"))for(f=G.wrapList(r),a=0,p=f.length;a<p;a++)l=f[a],d.classList.add(l);(v=G.pluckKey(e,"style"))&&B(d,v),(y=G.pluckKey(e,"text"))&&(d.innerText=y),H(d,e)}return d},r=function(t,e,n){var r;return r=m(e,n),t.appendChild(r),r},W=function(t){var e,n,r,i,o,s,a,l,c;if(G.isString(t))return t;if(t=S(t),l=void 0,P(t))l=g(t);else if(c=t.getAttribute("up-id"))l=u("up-id",c);else if(i=t.getAttribute("id"))l=i.match(/^[a-z0-9\-_]+$/i)?"#"+i:u("id",i);else if(a=t.getAttribute("name"))l=g(t)+u("name",a);else if(n=G.presence(j(t)))for(l="",r=0,s=n.length;r<s;r++)o=n[r],l+="."+o;else l=(e=t.getAttribute("aria-label"))?u("aria-label",e):g(t);return l},P=function(t){return R(t,"html, body, head, title")},g=function(t){return t.tagName.toLowerCase()},u=function(t,e){return e=e.replace(/"/g,'\\"'),"["+t+'="'+e+'"]'},j=function(t){var e,n;return e=t.className,n=G.splitValues(e),G.reject(n,function(t){return t.match(/^up-/)})},f=function(t){var e;return e=new DOMParser,e.parseFromString(t,"text/html")},d=function(t){var e;return e=f(t),e.body.children[0]},E=function(){return document.documentElement},U=function(t){return t.offsetHeight},h=function(t){var e;return e=V(t,{transition:"none"}),U(t),e},T=function(t){var e,n,r,i;return i=G.isOptions(t)?t:c(t),r=i.transitionProperty,e=i.transitionDuration,n="none"===r||"all"===r&&0===e,!n},w=function(t){var e,n;return e=t.getBoundingClientRect(),t.style.position="absolute",n=t.offsetParent.getBoundingClientRect(),B(t,{left:e.left-p(t,"margin-left")-n.left,top:e.top-p(t,"margin-top")-n.top,right:"",bottom:""})},z=function(t,e){var n,r,i;r=[];for(n in e)i=e[n],G.isMissing(t.getAttribute(n))?r.push(t.setAttribute(n,i)):r.push(void 0);return r},J=function(t){var e,n;return e=t.parentNode,n=G.toArray(t.childNodes),G.each(n,function(n){return e.insertBefore(n,t)}),e.removeChild(t)},s=function(t,e,n){var r;switch(r=t.getAttribute(e)){case"false":return!1;case"true":case"":case e:return!0;default:if(n)return r}},a=function(t,e){return s(t,e,!0)},L=function(t,e){var n;if(n=t.getAttribute(e),null!=n?n.match(/^[\d\.]+$/):void 0)return parseFloat(n)},O=function(t,e){var n,r;if(n="function"==typeof t.getAttribute&&null!=(r=t.getAttribute(e))?r.trim():void 0)return JSON.parse(n)},V=function(t,e){var n;return n=F(t,Object.keys(e)),B(t,e),function(){return B(t,n)}},c=function(t,e){var n;return n=window.getComputedStyle(t),y(n,e)},p=function(t,e){var n;return n=c(t,e),G.isGiven(n)?parseFloat(n):void 0},F=function(t,e){var n;return n=t.style,y(n,e)},y=function(e,n){return G.isString(n)?e[n]:G.only.apply(G,[e].concat(t.call(n)))},B=function(t,e){var n,r,i,o;i=t.style,r=[];for(n in e)o=e[n],o=D(n,o),r.push(i[n]=o);return r},D=function(t,n){return G.isMissing(n)?n="":e.has(t.toLowerCase().replace(/-/,""))&&(n=v(n)),n},e=G.arrayToSet(["top","right","bottom","left","padding","paddingtop","paddingright","paddingbottom","paddingleft","margin","margintop","marginright","marginbottom","marginleft","borderwidth","bordertopwidth","borderrightwidth","borderbottomwidth","borderleftwidth","width","height","maxwidth","maxheight","minwidth","minheight"]),v=function(t){return G.isNumber(t)||G.isString(t)&&/^\d+$/.test(t)?t.toString()+"px":t},_=function(t,e){var n,r;return G.isString(t)?(r=t,G.contains(r,"&")&&(G.isPresent(e)?(n=W(e),r=r.replace(/\&/,n)):up.fail("Found origin reference (%s) in selector %s, but no origin was given","&",r))):r=W(t),r},x=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},{first:b,all:i,subtree:Q,closest:l,matches:R,ancestor:o,get:S,list:k,remove:N,toggle:$,toggleClass:X,hide:A,show:I,metaContent:M,replace:K,insertBefore:C,createFromSelector:m,setAttrs:H,affix:r,toSelector:W,isSingleton:P,attributeSelector:u,createDocumentFromHtml:f,createFromHtml:d,root:E,paint:U,concludeCssTransition:h,hasCssTransition:T,fixedToAbsolute:w,setMissingAttrs:z,unwrap:J,booleanAttr:s,numberAttr:L,jsonAttr:O,booleanOrStringAttr:a,setTemporaryStyle:V,style:c,styleNumber:p,inlineStyle:F,setStyle:B,resolveSelector:_,none:function(){return n},isVisible:x}}()}.call(this),function(){var t;t=up.element,up.BodyShifter=function(){function e(){this.unshiftFns=[]}return e.prototype.shift=function(){var e,n,r,i,o,u,s,a,l,c,p,h;if(up.viewport.rootHasVerticalScrollbar()){for(n=document.body,l=up.viewport.rootOverflowElement(),h=up.viewport.scrollbarWidth(),r=t.styleNumber(n,"paddingRight"),i=h+r,this.unshiftFns.push(t.setTemporaryStyle(n,{paddingRight:i})),this.unshiftFns.push(t.setTemporaryStyle(l,{overflowY:"hidden"})),c=up.viewport.anchoredRight(),p=[],s=0,a=c.length;s<a;s++)e=c[s],o=t.styleNumber(e,"right"),u=h+o,p.push(this.unshiftFns.push(t.setTemporaryStyle(e,{right:u})));return p}},e.prototype.unshift=function(){var t,e;for(t=[];e=this.unshiftFns.pop();)t.push(e());return t},e}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}},n=[].slice;t=up.util,up.Cache=function(){function r(t){this.config=null!=t?t:{},this.get=e(this.get,this),this.isFresh=e(this.isFresh,this),this.remove=e(this.remove,this),this.set=e(this.set,this),this.timestamp=e(this.timestamp,this),this.alias=e(this.alias,this),this.makeRoomForAnotherKey=e(this.makeRoomForAnotherKey,this),this.keys=e(this.keys,this),this.log=e(this.log,this),this.clear=e(this.clear,this),this.isCachable=e(this.isCachable,this),this.isEnabled=e(this.isEnabled,this),this.normalizeStoreKey=e(this.normalizeStoreKey,this),this.expiryMillis=e(this.expiryMillis,this),this.maxKeys=e(this.maxKeys,this),this.store=this.config.store||new up.store.Memory}return r.prototype.maxKeys=function(){return t.evalOption(this.config.size)},r.prototype.expiryMillis=function(){return t.evalOption(this.config.expiry)},r.prototype.normalizeStoreKey=function(t){return this.config.key?this.config.key(t):t.toString()},r.prototype.isEnabled=function(){return 0!==this.maxKeys()&&0!==this.expiryMillis()},r.prototype.isCachable=function(t){return!this.config.cachable||this.config.cachable(t)},r.prototype.clear=function(){return this.store.clear()},r.prototype.log=function(){var t;if(t=1<=arguments.length?n.call(arguments,0):[],this.config.logPrefix)return t[0]="["+this.config.logPrefix+"] "+t[0],up.puts.apply(up,t)},r.prototype.keys=function(){return this.store.keys()},r.prototype.makeRoomForAnotherKey=function(){var e,n,r,i;if(i=t.copy(this.keys()),e=this.maxKeys(),e&&i.length>=e&&(n=void 0,r=void 0,t.each(i,function(t){return function(e){var i,o;if(i=t.store.get(e),o=i.timestamp,!r||r>o)return n=e,r=o}}(this)),n))return this.store.remove(n)},r.prototype.alias=function(e,n){var r;if(r=this.get(e,{silent:!0}),t.isDefined(r))return this.set(n,r)},r.prototype.timestamp=function(){return(new Date).valueOf()},r.prototype.set=function(t,e){var n,r;if(this.isEnabled()&&this.isCachable(t))return this.makeRoomForAnotherKey(),n=this.normalizeStoreKey(t),this.log("Setting entry %o to %o",n,e),r={timestamp:this.timestamp(),value:e},this.store.set(n,r)},r.prototype.remove=function(t){var e;if(this.isCachable(t))return e=this.normalizeStoreKey(t),this.store.remove(e)},r.prototype.isFresh=function(t){var e,n;return e=this.expiryMillis(),!e||(n=this.timestamp()-t.timestamp,n<e)},r.prototype.get=function(t,e){var n;return null==e&&(e={}),this.isCachable(t)&&(n=this.store.get(this.normalizeStoreKey(t)))?this.isFresh(n)?(e.silent||this.log("Cache hit for '%s'",t),n.value):(e.silent||this.log("Discarding stale cache entry for '%s'",t),void this.remove(t)):void(e.silent||this.log("Cache miss for '%s'",t))},r}()}.call(this),function(){var t,e=[].slice;t=up.util,up.Record=function(){function n(e){t.assign(this,this.attributes(e))}return n.prototype.fields=function(){throw"Return an array of property names"},n.prototype.attributes=function(n){return null==n&&(n=this),t.only.apply(t,[n].concat(e.call(this.fields())))},n.prototype[""+t.copy.key]=function(){return this.variant()},n.prototype.variant=function(e){var n;return null==e&&(e={}),n=t.merge(this.attributes(),e),new this.constructor(n)},n.prototype[""+t.isEqual.key]=function(e){return e&&this.constructor===e.constructor&&t.isEqual(this.attributes(),e.attributes())},n}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.CompilePass=function(){function r(t,e,r){this.root=t,this.compilers=e,null==r&&(r={}),this.isInSkippedSubtree=n(this.isInSkippedSubtree,this),this.skipSubtrees=r.skip,this.skipSubtrees.length&&this.root.querySelector("[up-keep]")||(this.skipSubtrees=void 0)}return r.prototype.compile=function(){return up.log.group("Compiling fragment %o",this.root,function(t){return function(){var e,n,r,i,o;for(i=t.compilers,o=[],n=0,r=i.length;n<r;n++)e=i[n],o.push(t.runCompiler(e));return o}}(this))},r.prototype.runCompiler=function(t){var n;if(n=this.select(t.selector),n.length)return up.log.group(t.isDefault?void 0:"Compiling '%s' on %d element(s)",t.selector,n.length,function(r){return function(){var i,o,u,s,a,l,c,p;if(t.batch)r.compileBatch(t,n);else for(i=0,s=n.length;i<s;i++)l=n[i],r.compileOneElement(t,l);if(u=t.keep){for(p=e.isString(u)?u:"",c=[],o=0,a=n.length;o<a;o++)l=n[o],c.push(l.setAttribute("up-keep",p));return c}}}(this))},r.prototype.compileOneElement=function(t,e){var n,r,i,o,u;if(o=t.jQuery?jQuery(e):e,n=[o],1!==t.length&&(r=up.syntax.data(e),n.push(r)),u=t.apply(e,n),i=this.destructorPresence(u))return up.destructor(e,i)},r.prototype.compileBatch=function(t,n){var r,i,o,u;if(o=t.jQuery?jQuery(n):n,r=[o],1!==t.length&&(i=e.map(n,up.syntax.data),r.push(i)),u=t.apply(n,r),this.destructorPresence(u))return up.fail("Compilers with { batch: true } cannot return destructors")},r.prototype.destructorPresence=function(t){if(e.isFunction(t)||e.isArray(t)&&e.every(t,e.isFunction))return t},r.prototype.select=function(n){var r;return e.isFunction(n)&&(n=n()),r=t.subtree(this.root,n),this.skipSubtrees&&(r=e.reject(r,this.isInSkippedSubtree)),r},r.prototype.isInSkippedSubtree=function(t){var n;return!!e.contains(this.skipSubtrees,t)||!!(n=t.parentElement)&&this.isInSkippedSubtree(n)},r}()}.call(this),function(){var t;t=up.util,up.Config=function(){function e(t){this.blueprint=t,this.reset()}return e.prototype.reset=function(){return t.assign(this,t.deepCopy(this.blueprint))},e}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.CssTransition=function(){function r(t,r,i){this.element=t,this.lastFrameKebab=r,this.startMotion=n(this.startMotion,this),this.resumeOldTransition=n(this.resumeOldTransition,this),this.pauseOldTransition=n(this.pauseOldTransition,this),this.finish=n(this.finish,this),this.onTransitionEnd=n(this.onTransitionEnd,this),this.listenToTransitionEnd=n(this.listenToTransitionEnd,this),this.stopFallbackTimer=n(this.stopFallbackTimer,this),this.startFallbackTimer=n(this.startFallbackTimer,this),this.onFinishEvent=n(this.onFinishEvent,this),this.listenToFinishEvent=n(this.listenToFinishEvent,this),this.start=n(this.start,this),this.lastFrameKeysKebab=Object.keys(this.lastFrameKebab),e.some(this.lastFrameKeysKebab,function(t){return t.match(/A-Z/)})&&up.fail("Animation keys must be kebab-case"),this.finishEvent=i.finishEvent,this.duration=i.duration,this.delay=i.delay,this.totalDuration=this.delay+this.duration,this.easing=i.easing,this.finished=!1}return r.prototype.start=function(){return 0===this.lastFrameKeysKebab.length?(this.finished=!0,Promise.resolve()):(this.deferred=e.newDeferred(),this.pauseOldTransition(),this.startTime=new Date,this.startFallbackTimer(),this.listenToFinishEvent(),this.listenToTransitionEnd(),this.startMotion(),this.deferred.promise())},r.prototype.listenToFinishEvent=function(){if(this.finishEvent)return this.stopListenToFinishEvent=this.element.addEventListener(this.finishEvent,this.onFinishEvent)},r.prototype.onFinishEvent=function(t){return t.stopPropagation(),this.finish()},r.prototype.startFallbackTimer=function(){var t;return t=100,this.fallbackTimer=e.timer(this.totalDuration+t,function(t){return function(){return t.finish()}}(this))},r.prototype.stopFallbackTimer=function(){return clearTimeout(this.fallbackTimer)},r.prototype.listenToTransitionEnd=function(){return this.stopListenToTransitionEnd=up.on(this.element,"transitionend",this.onTransitionEnd)},r.prototype.onTransitionEnd=function(t){var n,r;if(t.target===this.element&&(r=new Date-this.startTime,r>.25*this.totalDuration&&(n=t.propertyName,e.contains(this.lastFrameKeysKebab,n))))return this.finish()},r.prototype.finish=function(){if(!this.finished)return this.finished=!0,this.stopFallbackTimer(),"function"==typeof this.stopListenToFinishEvent&&this.stopListenToFinishEvent(),"function"==typeof this.stopListenToTransitionEnd&&this.stopListenToTransitionEnd(),t.concludeCssTransition(this.element),this.resumeOldTransition(),this.deferred.resolve()},r.prototype.pauseOldTransition=function(){var e,n,r;if(e=t.style(this.element,["transitionProperty","transitionDuration","transitionDelay","transitionTimingFunction"]),t.hasCssTransition(e))return"all"!==e.transitionProperty&&(r=e.transitionProperty.split(/\s*,\s*/),n=t.style(this.element,r),this.setOldTransitionTargetFrame=t.setTemporaryStyle(this.element,n)),this.setOldTransition=t.concludeCssTransition(this.element)},r.prototype.resumeOldTransition=function(){return"function"==typeof this.setOldTransitionTargetFrame&&this.setOldTransitionTargetFrame(),"function"==typeof this.setOldTransition?this.setOldTransition():void 0},r.prototype.startMotion=function(){return t.setStyle(this.element,{transitionProperty:Object.keys(this.lastFrameKebab).join(", "),transitionDuration:this.duration+"ms",transitionDelay:this.delay+"ms",transitionTimingFunction:this.easing}),t.setStyle(this.element,this.lastFrameKebab)},r}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}},n=[].slice;t=up.util,up.DivertibleChain=function(){function r(){this.asap=e(this.asap,this),this.poke=e(this.poke,this),this.allTasks=e(this.allTasks,this),this.promise=e(this.promise,this),this.reset=e(this.reset,this),this.reset()}return r.prototype.reset=function(){return this.queue=[],this.currentTask=void 0},r.prototype.promise=function(){var e;return e=t.last(this.allTasks()),(null!=e?e.promise:void 0)||Promise.resolve()},r.prototype.allTasks=function(){var t;return t=[],this.currentTask&&t.push(this.currentTask),t=t.concat(this.queue)},r.prototype.poke=function(){var e;if(!this.currentTask&&(this.currentTask=this.queue.shift()))return e=this.currentTask(),t.always(e,function(t){return function(){return t.currentTask=void 0,t.poke()}}(this))},r.prototype.asap=function(){var e;return e=1<=arguments.length?n.call(arguments,0):[],this.queue=t.map(e,t.previewable),this.poke(),this.promise()},r}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.EventListener=function(){function r(t,e,r,i,o){this.element=t,this.eventName=e,this.selector=r,this.callback=i,null==o&&(o={}),this.nativeCallback=n(this.nativeCallback,this),this.unbind=n(this.unbind,this),this.jQuery=o.jQuery,this.key=this.constructor.key(this.eventName,this.selector,this.callback),this.isDefault=up.framework.isBooting()}return r.prototype.bind=function(){var t,e;return e=(t=this.element).upEventListeners||(t.upEventListeners={}),e[this.key]&&up.fail("up.on(): The %o callback %o cannot be registered more than once",this.eventName,this.callback),e[this.key]=this,this.element.addEventListener(this.eventName,this.nativeCallback)},r.prototype.unbind=function(){var t;return(t=this.element.upEventListeners)&&delete t[this.key],this.element.removeEventListener(this.eventName,this.nativeCallback)},r.prototype.nativeCallback=function(e){var n,r,i,o,u;if(i=e.target,this.selector&&(i=t.closest(i,this.selector)),i)return o=this.jQuery?jQuery(i):i,n=[e,o],u=this.callback.length,1!==u&&2!==u&&(r=up.syntax.data(i),n.push(r)),this.callback.apply(i,n)},r.parseArgs=function(t){var n,r,i,o;return t=e.copy(t),n=t.pop(),n.upUid||(n.upUid=e.uid()),r=t[0].addEventListener?[t.shift()]:e.isJQuery(t[0])||e.isList(t[0])&&t[0][0].addEventListener?t.shift():[document],i=e.splitValues(t.shift()),o=t[0],{elements:r,eventNames:i,selector:o,callback:n}},r.bind=function(t,n){var r,i,o,u,s,a,l,c,p,h,f;for(c=this.parseArgs(t),f=[],p=c.elements,o=0,s=p.length;o<s;o++)for(r=p[o],h=c.eventNames,u=0,
a=h.length;u<a;u++)i=h[u],l=new this(r,i,c.selector,c.callback,n),l.bind(),f.push(l.unbind);return e.sequence(f)},r.key=function(t,e,n){return[t,e,n.upUid].join("|")},r.unbind=function(t){var e,n,r,i,o,u,s,a,l,c;for(a=this.parseArgs(t),l=a.elements,c=[],r=0,o=l.length;r<o;r++)e=l[r],s=e.upEventListeners,c.push(function(){var t,e,r,o;for(r=a.eventNames,o=[],t=0,e=r.length;t<e;t++)n=r[t],i=this.key(n,a.selector,a.callback),s&&(u=s[i])?o.push(u.unbind()):o.push(void 0);return o}.call(this));return c},r.unbindNonDefault=function(t){var n,r,i,o,u,s;if(u=t.upEventListeners){for(o=e.values(u),s=[],n=0,r=o.length;n<r;n++)i=o[n],i.isDefault?s.push(void 0):s.push(i.unbind());return s}},r}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=up.util,up.ExtractCascade=function(){function n(n,r){this.oldPlanNotFound=e(this.oldPlanNotFound,this),this.matchingPlanNotFound=e(this.matchingPlanNotFound,this),this.bestMatchingSteps=e(this.bestMatchingSteps,this),this.bestPreflightSelector=e(this.bestPreflightSelector,this),this.detectPlan=e(this.detectPlan,this),this.matchingPlan=e(this.matchingPlan,this),this.newPlan=e(this.newPlan,this),this.oldPlan=e(this.oldPlan,this);var i,o;this.options=t.options(r,{humanizedTarget:"selector",layer:"auto"}),null==(i=this.options).transition&&(i.transition=this.options.animation),null==(o=this.options).hungry&&(o.hungry=!0),this.candidates=this.buildCandidates(n),this.plans=t.map(this.candidates,function(e){return function(n,r){var i,o;return i=t.copy(e.options),r>0&&(i.transition=null!=(o=up.fragment.config.fallbackTransition)?o:e.options.transition),new up.ExtractPlan(n,i)}}(this))}return n.prototype.buildCandidates=function(e){var n;return n=[e,this.options.fallback,up.fragment.config.fallbacks],n=t.flatten(n),n=t.filter(n,t.isTruthy),n=t.uniq(n),(this.options.fallback===!1||this.options.provideTarget)&&(n=[n[0]]),n},n.prototype.oldPlan=function(){return this.detectPlan("oldExists")},n.prototype.newPlan=function(){return this.detectPlan("newExists")},n.prototype.matchingPlan=function(){return this.detectPlan("matchExists")},n.prototype.detectPlan=function(e){return t.find(this.plans,function(t){return t[e]()})},n.prototype.bestPreflightSelector=function(){var t;return t=this.options.provideTarget?this.plans[0]:this.oldPlan(),t?(t.resolveNesting(),t.selector()):this.oldPlanNotFound()},n.prototype.bestMatchingSteps=function(){var t;return(t=this.matchingPlan())?(t.addHungrySteps(),t.resolveNesting(),t.steps):this.matchingPlanNotFound()},n.prototype.matchingPlanNotFound=function(){var t,e;return this.newPlan()?this.oldPlanNotFound():(e=this.oldPlan()?"Could not find "+this.options.humanizedTarget+" in response":"Could not match "+this.options.humanizedTarget+" in current page and response",this.options.inspectResponse&&(t={label:"Open response",callback:this.options.inspectResponse}),up.fail([e+" (tried %o)",this.candidates],{action:t}))},n.prototype.oldPlanNotFound=function(){var t;return t=this.options.layer,"auto"===t&&(t="page, modal or popup"),up.fail("Could not find "+this.options.humanizedTarget+" in current "+t+" (tried %o)",this.candidates)},n}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.ExtractPlan=function(){function r(e,r){this.addHungrySteps=n(this.addHungrySteps,this),this.parseSteps=n(this.parseSteps,this),this.selector=n(this.selector,this),this.resolveNesting=n(this.resolveNesting,this),this.addSteps=n(this.addSteps,this),this.matchExists=n(this.matchExists,this),this.newExists=n(this.newExists,this),this.oldExists=n(this.oldExists,this),this.findNew=n(this.findNew,this),this.findOld=n(this.findOld,this);var i;this.reveal=r.reveal,this.origin=r.origin,this.hungry=r.hungry,this.transition=r.transition,this.response=r.response,this.oldLayer=r.layer,i=t.resolveSelector(e,this.origin),this.parseSteps(i)}return r.prototype.findOld=function(){return e.each(this.steps,function(t){return function(e){return e.oldElement=up.fragment.first(e.selector,{layer:t.oldLayer})}}(this))},r.prototype.findNew=function(){return e.each(this.steps,function(t){return function(e){return e.newElement=t.response.first(e.selector)}}(this))},r.prototype.oldExists=function(){return this.findOld(),e.every(this.steps,function(t){return t.oldElement})},r.prototype.newExists=function(){return this.findNew(),e.every(this.steps,function(t){return t.newElement})},r.prototype.matchExists=function(){return this.oldExists()&&this.newExists()},r.prototype.addSteps=function(t){return this.steps=this.steps.concat(t)},r.prototype.resolveNesting=function(){var t;if(!(this.steps.length<2))return t=e.copy(this.steps),t=e.uniqBy(t,function(t){return t.oldElement}),t=e.filter(t,function(){return function(n,r){return e.every(t,function(t,e){var i,o;return e===r||(i=n.oldElement,o=t.oldElement,t.pseudoClass||!o.contains(i))})}}(this)),t[0].reveal=this.steps[0].reveal,this.steps=t},r.prototype.selector=function(){return e.map(this.steps,"expression").join(", ")},r.prototype.parseSteps=function(t){var n,r;return n=/\ *,\ */,this.steps=[],r=t.split(n),e.each(r,function(t){return function(e,n){var r,i,o,u;return i=e.match(/^(.+?)(?:\:(before|after))?$/),i||up.fail('Could not parse selector literal "%s"',e),u=i[1],"html"===u&&(u="body"),o=i[2],r=0===n&&t.reveal,t.steps.push({expression:e,selector:u,pseudoClass:o,transition:t.transition,origin:t.origin,reveal:r})}}(this))},r.prototype.addHungrySteps=function(){var e,n,r,i,o,u,s,a,l;if(r=[],this.hungry)for(e=t.all(up.radio.hungrySelector()),l=null!=(s=up.radio.config.hungryTransition)?s:this.transition,i=0,o=e.length;i<o;i++)n=e[i],a=t.toSelector(n),(u=this.response.first(a))&&r.push({selector:a,oldElement:n,newElement:u,transition:l,reveal:!1,origin:null});return this.addSteps(r)},r}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.FieldObserver=function(){function r(e,r,i){this.callback=i,this.check=n(this.check,this),this.readFieldValues=n(this.readFieldValues,this),this.requestCallback=n(this.requestCallback,this),this.isNewValues=n(this.isNewValues,this),this.scheduleValues=n(this.scheduleValues,this),this.scheduleTimer=n(this.scheduleTimer,this),this.cancelTimer=n(this.cancelTimer,this),this.stop=n(this.stop,this),this.start=n(this.start,this),this.fields=t.list(e),this.delay=r.delay,this.batch=r.batch}return r.prototype.start=function(){return this.scheduledValues=null,this.processedValues=this.readFieldValues(),this.currentTimer=void 0,this.callbackRunning=!1,this.unbind=up.on(this.fields,"input change",this.check)},r.prototype.stop=function(){return this.unbind(),this.cancelTimer()},r.prototype.cancelTimer=function(){return clearTimeout(this.currentTimer),this.currentTimer=void 0},r.prototype.scheduleTimer=function(){return this.cancelTimer(),this.currentTimer=e.timer(this.delay,function(t){return function(){return t.currentTimer=void 0,t.requestCallback()}}(this))},r.prototype.scheduleValues=function(t){return this.scheduledValues=t,this.scheduleTimer()},r.prototype.isNewValues=function(t){return!e.isEqual(t,this.processedValues)&&!e.isEqual(this.scheduledValues,t)},r.prototype.requestCallback=function(){var t,n,r,i,o;if(null!==this.scheduledValues&&!this.currentTimer&&!this.callbackRunning){if(r=this.changedValues(this.processedValues,this.scheduledValues),this.processedValues=this.scheduledValues,this.scheduledValues=null,this.callbackRunning=!0,t=[],this.batch)t.push(this.callback(r));else for(i in r)o=r[i],t.push(this.callback(o,i));return n=Promise.all(t),e.always(n,function(t){return function(){return t.callbackRunning=!1,t.requestCallback()}}(this))}},r.prototype.changedValues=function(t,n){var r,i,o,u,s,a,l;for(r={},u=Object.keys(t),u=u.concat(Object.keys(n)),u=e.uniq(u),i=0,s=u.length;i<s;i++)o=u[i],l=t[o],a=n[o],e.isEqual(l,a)||(r[o]=a);return r},r.prototype.readFieldValues=function(){return up.Params.fromFields(this.fields).toObject()},r.prototype.check=function(){var t;if(t=this.readFieldValues(),this.isNewValues(t))return this.scheduleValues(t)},r}()}.call(this),function(){}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}},r=[].slice;e=up.util,t=up.element,up.FollowVariant=function(){function i(t,r){this.matchesLink=n(this.matchesLink,this),this.followLink=n(this.followLink,this),this.fullSelector=n(this.fullSelector,this),this.onMousedown=n(this.onMousedown,this),this.onClick=n(this.onClick,this),this.followNow=r.follow,this.preloadLink=r.preload,this.selectors=e.splitValues(t,",")}return i.prototype.onClick=function(e,n){return up.link.shouldProcessEvent(e,n)?t.matches(n,"[up-instant]")?up.event.halt(e):(up.event.consumeAction(e),this.followLink(n)):up.link.allowDefault(e)},i.prototype.onMousedown=function(t,e){if(up.link.shouldProcessEvent(t,e))return up.event.consumeAction(t),this.followLink(e)},i.prototype.fullSelector=function(t){var e;return null==t&&(t=""),e=[],this.selectors.forEach(function(n){var r,i,o,u,s;for(o=["a","[up-href]"],u=[],r=0,i=o.length;r<i;r++)s=o[r],u.push(e.push(""+s+n+t));return u}),e.join(", ")},i.prototype.registerEvents=function(){return up.on("click",this.fullSelector(),function(t){return function(){var n;return n=1<=arguments.length?r.call(arguments,0):[],e.muteRejection(t.onClick.apply(t,n))}}(this)),up.on("mousedown",this.fullSelector("[up-instant]"),function(t){return function(){var n;return n=1<=arguments.length?r.call(arguments,0):[],e.muteRejection(t.onMousedown.apply(t,n))}}(this))},i.prototype.followLink=function(t,e){var n;return null==e&&(e={}),n=up.event.whenEmitted("up:link:follow",{log:"Following link",target:t}),n=n.then(function(n){return function(){return e.preload||up.feedback.start(t),n.followNow(t,e)}}(this)),e.preload||(n=n.then(function(){return up.feedback.stop(t)})),n},i.prototype.matchesLink=function(e){return t.matches(e,this.fullSelector())},i}()}.call(this),function(){var t,e;e=up.util,t=up.element,up.HtmlParser=function(){function n(e){this.html=e,this.wrapNoscriptInHtml(),this.parsedDoc=t.createDocumentFromHtml(this.html)}return n.prototype.title=function(){var t;return null!=(t=this.parsedDoc.querySelector("head title"))?t.textContent:void 0},n.prototype.first=function(e){return t.first(this.parsedDoc,e)},n.prototype.prepareForInsertion=function(t){return this.unwrapNoscriptInElement(t)},n.prototype.wrapNoscriptInHtml=function(){var t;return t=/<noscript[^>]*>((.|\s)*?)<\/noscript>/gi,this.html=this.html.replace(t,function(t){return function(n,r){return t.didWrapNoscript=!0,'<div class="up-noscript" data-html="'+e.escapeHtml(r)+'"></div>'}}(this))},n.prototype.unwrapNoscriptInElement=function(t){var e,n,r,i,o,u,s;if(this.didWrapNoscript){for(s=t.querySelectorAll(".up-noscript"),i=[],e=0,n=s.length;e<n;e++)u=s[e],o=u.getAttribute("data-html"),r=document.createElement("noscript"),r.textContent=o,i.push(u.parentNode.replaceChild(r,u));return i}},n}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.MotionController=function(){function r(t){this.reset=n(this.reset,this),this.whileForwardingFinishEvent=n(this.whileForwardingFinishEvent,this),this.unmarkCluster=n(this.unmarkCluster,this),this.markCluster=n(this.markCluster,this),this.whenElementFinished=n(this.whenElementFinished,this),this.emitFinishEvent=n(this.emitFinishEvent,this),this.finishOneElement=n(this.finishOneElement,this),this.isActive=n(this.isActive,this),this.expandFinishRequest=n(this.expandFinishRequest,this),this.finish=n(this.finish,this),this.startFunction=n(this.startFunction,this),this.activeClass="up-"+t,this.dataKey="up-"+t+"-finished",this.selector="."+this.activeClass,this.finishEvent="up:"+t+":finish",this.finishCount=0,this.clusterCount=0}return r.prototype.startFunction=function(n,r,i){var o,u;return null==i&&(i={}),n=t.list(n),o=function(){return e.muteRejection(r())},i.trackMotion=null!=(u=i.trackMotion)?u:up.motion.isEnabled(),i.trackMotion===!1?e.microtask(o):(i.trackMotion=!1,this.finish(n).then(function(t){return function(){var e;return e=t.whileForwardingFinishEvent(n,o),e=e.then(function(){return t.unmarkCluster(n)}),t.markCluster(n,e),e}}(this)))},r.prototype.startMotion=function(t,e,n){var r,i,o,u;return null==n&&(n={}),o=function(){return e.start()},r=function(){return e.finish()},u=up.on(t,this.finishEvent,r),i=this.startFunction(t,o,n),i=i.then(u)},r.prototype.finish=function(t){var n;return this.finishCount++,0!==this.clusterCount&&up.motion.isEnabled()?(t=this.expandFinishRequest(t),n=e.map(t,this.finishOneElement),Promise.all(n)):Promise.resolve()},r.prototype.expandFinishRequest=function(n){return n?e.flatMap(n,function(e){return function(n){return t.list(t.closest(n,e.selector),t.all(n,e.selector))}}(this)):t.all(this.selector)},r.prototype.isActive=function(t){return t.classList.contains(this.activeClass)},r.prototype.finishOneElement=function(t){return this.emitFinishEvent(t),this.whenElementFinished(t)},r.prototype.emitFinishEvent=function(t,n){return null==n&&(n={}),n=e.merge({target:t,log:!1},n),up.emit(this.finishEvent,n)},r.prototype.whenElementFinished=function(t){return t[this.dataKey]||Promise.resolve()},r.prototype.markCluster=function(t,e){var n,r,i,o;for(this.clusterCount++,o=[],r=0,i=t.length;r<i;r++)n=t[r],n.classList.add(this.activeClass),o.push(n[this.dataKey]=e);return o},r.prototype.unmarkCluster=function(t){var e,n,r,i;for(this.clusterCount--,i=[],n=0,r=t.length;n<r;n++)e=t[n],e.classList.remove(this.activeClass),i.push(delete e[this.dataKey]);return i},r.prototype.whileForwardingFinishEvent=function(t,n){var r,i;return t.length<2?n():(r=function(n){return function(r){if(!r.forwarded)return e.each(t,function(t){if(t!==r.target&&n.isActive(t))return n.emitFinishEvent(t,{forwarded:!0})})}}(this),i=up.on(t,this.finishEvent,r),n().then(i))},r.prototype.reset=function(){return this.finish().then(function(t){return function(){return t.finishCount=0,t.clusterCount=0}}(this))},r}()}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.Params=function(){function r(t){this.arrayEntryToQuery=n(this.arrayEntryToQuery,this),this.clear(),this.addAll(t)}return r.prototype.clear=function(){return this.entries=[]},r.prototype[""+e.copy.key]=function(){return new up.Params(this)},r.prototype.toObject=function(){var t,n,r,i,o,u,s;for(o={},u=this.entries,n=0,r=u.length;n<r;n++)t=u[n],i=t.name,s=t.value,e.isBasicObjectProperty(i)||(this.isArrayKey(i)?(o[i]||(o[i]=[]),o[i].push(s)):o[i]=s);return o},r.prototype.toArray=function(){return this.entries},r.prototype.toFormData=function(){var t,e,n,r,i;for(e=new FormData,i=this.entries,n=0,r=i.length;n<r;n++)t=i[n],e.append(t.name,t.value);return e},r.prototype.toQuery=function(){var t;return t=e.map(this.entries,this.arrayEntryToQuery),t=e.compact(t),t.join("&")},r.prototype.arrayEntryToQuery=function(t){var n,r;if(r=t.value,this.isPrimitiveValue(r))return n=encodeURIComponent(t.name),e.isGiven(r)&&(n+="=",n+=encodeURIComponent(r)),n},r.prototype.isPrimitiveValue=function(t){return e.isMissing(t)||e.isString(t)||e.isNumber(t)||e.isBoolean(t)},r.prototype.toURL=function(t){var n,r;return n=[t,this.toQuery()],n=e.filter(n,e.isPresent),r=e.contains(t,"?")?"&":"?",n.join(r)},r.prototype.add=function(t,e){return this.entries.push({name:t,value:e})},r.prototype.addAll=function(t){var n,r;if(!e.isMissing(t))return t instanceof this.constructor?(n=this.entries).push.apply(n,t.entries):e.isArray(t)?(r=this.entries).push.apply(r,t):e.isString(t)?this.addAllFromQuery(t):e.isFormData(t)?this.addAllFromFormData(t):e.isObject(t)?this.addAllFromObject(t):up.fail("Unsupport params type: %o",t)},r.prototype.addAllFromObject=function(t){var n,r,i,o,u;r=[];for(n in t)i=t[n],u=e.isArray(i)?i:[i],r.push(function(){var t,e,r;for(r=[],t=0,e=u.length;t<e;t++)o=u[t],r.push(this.add(n,o));return r}.call(this));return r},r.prototype.addAllFromQuery=function(t){var n,r,i,o,u,s,a,l;for(u=t.split("&"),a=[],n=0,r=u.length;n<r;n++)o=u[n],o?(s=o.split("="),i=s[0],l=s[1],i=decodeURIComponent(i),l=e.isGiven(l)?decodeURIComponent(l):null,a.push(this.add(i,l))):a.push(void 0);return a},r.prototype.addAllFromFormData=function(t){return e.eachIterator(t.entries(),function(t){return function(e){return t.add.apply(t,e)}}(this))},r.prototype.set=function(t,e){return this["delete"](t),this.add(t,e)},r.prototype["delete"]=function(t){return this.entries=e.reject(this.entries,this.matchEntryFn(t))},r.prototype.matchEntryFn=function(t){return function(e){return e.name===t}},r.prototype.get=function(t){return this.isArrayKey(t)?this.getAll(t):this.getFirst(t)},r.prototype.getFirst=function(t){var n;return n=e.find(this.entries,this.matchEntryFn(t)),null!=n?n.value:void 0},r.prototype.getAll=function(t){var n;return this.isArrayKey(t)?this.getAll(t):(n=e.map(this.entries,this.matchEntryFn(t)),e.map(n,"value"))},r.prototype.isArrayKey=function(t){return e.endsWith(t,"[]")},r.prototype[""+e.isBlank.key]=function(){return 0===this.entries.length},r.fromForm=function(e){var n;if(e=t.get(e))return n=up.form.submissionFields(e),this.fromFields(n)},r.fromFields=function(t){var n,r,i,o,u;for(o=new this,u=e.wrapList(t),r=0,i=u.length;r<i;r++)n=u[r],o.addField(n);return o},r.prototype.addField=function(e){var n,r,i,o,u,s,a,l,c,p,h,f,d,m;if(l=new this.constructor,(e=t.get(e))&&(s=e.name)&&!e.disabled){if(d=e.tagName,m=e.type,"SELECT"===d){for(c=e.querySelectorAll("option"),h=[],r=0,o=c.length;r<o;r++)a=c[r],a.selected?h.push(this.add(s,a.value)):h.push(void 0);return h}if("checkbox"!==m&&"radio"!==m){if("file"===m){for(p=e.files,f=[],i=0,u=p.length;i<u;i++)n=p[i],f.push(this.add(s,n));return f}return this.add(s,e.value)}if(e.checked)return this.add(s,e.value)}},r.prototype[""+e.isEqual.key]=function(t){return t&&this.constructor===t.constructor&&e.isEqual(this.entries,t.entries)},r.fromURL=function(t){var n,r,i;return n=new this,i=e.parseUrl(t),(r=i.search)&&(r=r.replace(/^\?/,""),n.addAll(r)),n},r.wrap=function(t){return e.wrapValue(t,this)},r}()}.call(this),function(){var t=up.util;up.Rect=function(e){t.assign(this,t.only(e,"left","top","width","height"))},up.Rect.prototype={get bottom(){return this.top+this.height},get right(){return this.left+this.width}},up.Rect.fromElement=function(t){return new up.Rect(t.getBoundingClientRect())}}(),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=up.util,t=up.element,up.Request=function(i){function o(t){this.cacheKey=n(this.cacheKey,this),this.isCachable=n(this.isCachable,this),this.buildResponse=n(this.buildResponse,this),this.isCrossDomain=n(this.isCrossDomain,this),this.csrfToken=n(this.csrfToken,this),this.navigate=n(this.navigate,this),this.send=n(this.send,this),this.isSafe=n(this.isSafe,this),this.transferSearchToParams=n(this.transferSearchToParams,this),this.transferParamsToUrl=n(this.transferParamsToUrl,this),this.extractHashFromUrl=n(this.extractHashFromUrl,this),this.normalize=n(this.normalize,this),up.legacy.fixKey(t,"data","params"),o.__super__.constructor.call(this,t),this.normalize()}return r(o,i),o.prototype.fields=function(){return["method","url","params","target","failTarget","headers","timeout","preload","cache"]},o.prototype.normalize=function(){return this.params=new up.Params(this.params),this.method=e.normalizeMethod(this.method),this.headers||(this.headers={}),this.extractHashFromUrl(),e.methodAllowsPayload(this.method)?this.transferSearchToParams():this.transferParamsToUrl()},o.prototype.extractHashFromUrl=function(){var t;return t=e.parseUrl(this.url),this.hash=e.presence(t.hash),this.url=e.normalizeUrl(t,{hash:!1})},o.prototype.transferParamsToUrl=function(){if(!e.isBlank(this.params))return this.url=this.params.toURL(this.url),this.params.clear()},o.prototype.transferSearchToParams=function(){var t;if(t=up.Params.fromURL(this.url),!e.isBlank(t))return this.params.addAll(t),this.url=e.normalizeUrl(this.url,{search:!1})},o.prototype.isSafe=function(){return up.proxy.isSafeMethod(this.method)},o.prototype.send=function(){return new Promise(function(t){return function(n,r){var i,o,u,s,a,l,c,p,h,f,d;l=new XMLHttpRequest,c=e.copy(t.headers),d=t.url,h=e.copy(t.params),p=up.proxy.wrapMethod(t.method,h),f=null,e.isBlank(h)||(delete c["Content-Type"],f=h.toFormData()),u=up.protocol.config,t.target&&(c[u.targetHeader]=t.target),t.failTarget&&(c[u.failTargetHeader]=t.failTarget),t.isCrossDomain()||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),(i=t.csrfToken())&&(c[u.csrfHeader]=i),l.open(p,d);for(o in c)a=c[o],l.setRequestHeader(o,a);return s=function(){var e;return e=t.buildResponse(l),e.isSuccess()?n(e):r(e)},l.onload=s,l.onerror=s,l.ontimeout=s,t.timeout&&(l.timeout=t.timeout),l.send(f)}}(this))},o.prototype.navigate=function(){var n,r,i,o,u;return this.transferSearchToParams(),o=t.affix(document.body,"form.up-page-loader"),n=function(e){return t.affix(o,"input[type=hidden]",e)},"GET"===this.method?u="GET":(n({name:up.protocol.config.methodParam,value:this.method}),u="POST"),t.setAttrs(o,{method:u,action:this.url}),(r=up.protocol.csrfParam())&&(i=this.csrfToken())&&n({name:r,value:i}),e.each(this.params.toArray(),n),t.hide(o),up.browser.submitForm(o)},o.prototype.csrfToken=function(){if(!this.isSafe()&&!this.isCrossDomain())return up.protocol.csrfToken()},o.prototype.isCrossDomain=function(){return e.isCrossDomain(this.url)},o.prototype.buildResponse=function(t){var e,n,r;return n={method:this.method,url:this.url,text:t.responseText,status:t.status,request:this,xhr:t},(r=up.protocol.locationFromXhr(t))&&(n.url=r,n.method=null!=(e=up.protocol.methodFromXhr(t))?e:"GET"),n.title=up.protocol.titleFromXhr(t),new up.Response(n)},o.prototype.isCachable=function(){return this.isSafe()&&!e.isFormData(this.params)},o.prototype.cacheKey=function(){return[this.url,this.method,this.params.toQuery(),this.target].join("|")},o.wrap=function(t){return e.wrapValue(t,this)},o}(up.Record)}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;t=up.util,up.Response=function(r){function i(t){this.getHeader=e(this.getHeader,this),this.isFatalError=e(this.isFatalError,this),this.isError=e(this.isError,this),this.isSuccess=e(this.isSuccess,this),i.__super__.constructor.call(this,t)}return n(i,r),i.prototype.fields=function(){return["method","url","text","status","request","xhr","title"]},i.prototype.isSuccess=function(){return this.status&&this.status>=200&&this.status<=299},i.prototype.isError=function(){return!this.isSuccess()},i.prototype.isFatalError=function(){return this.isError()&&t.isBlank(this.text)},i.prototype.getHeader=function(t){return this.xhr.getResponseHeader(t)},i}(up.Record)}.call(this),function(){var t;t=up.element,up.RevealMotion=function(){function e(t,e){var n,r,i,o,u,s,a,l,c,p,h,f;this.element=t,null==e&&(e={}),n=up.viewport.config,this.viewport=null!=(r=e.viewport)?r:up.viewport.closest(this.element),up.legacy.fixKey(n,"snap","revealSnap"),f=n.revealSnap,this.snap=null!=(i=null!=(o=e.snap)?o:e.revealSnap)?i:f,this.snap===!1?this.snap=0:this.snap===!0&&(this.snap=f),this.padding=null!=(u=null!=(s=e.padding)?s:e.revealPadding)?u:n.revealPadding,this.top=e.top,this.fixedTop=null!=(a=e.fixedTop)?a:n.fixedTop,this.fixedBottom=null!=(l=e.fixedBottom)?l:n.fixedBottom,this.speed=null!=(c=null!=(p=e.speed)?p:e.scrollSpeed)?c:n.scrollSpeed,this.behavior=null!=(h=e.behavior)?h:e.scrollBehavior}return e.prototype.start=function(){var t,e,n,r,i;return e=up.Rect.fromElement(this.element),i=this.getViewportRect(this.viewport),this.addPadding(e),this.substractObstructions(i),i.height<=0?Promise.reject(new Error("Viewport has no visible area")):(r=this.viewport.scrollTop,n=r,this.top||e.height>i.height?(t=e.top-i.top,n+=t):e.top<i.top?n-=i.top-e.top:e.bottom>i.bottom&&(n+=e.bottom-i.bottom),n<this.snap&&e.top<.5*i.height&&(n=0),n!==r?this.scrollTo(n):Promise.resolve())},e.prototype.scrollTo=function(t){var e;return e={speed:this.speed,behavior:this.behavior},this.scrollMotion=new up.ScrollMotion(this.viewport,t,e),this.scrollMotion.start()},e.prototype.getViewportRect=function(){return up.viewport.isRoot(this.viewport)?new up.Rect({left:0,top:0,width:up.viewport.rootWidth(),height:up.viewport.rootHeight()}):up.Rect.fromElement(this.viewport)},e.prototype.addPadding=function(t){return t.top-=this.padding,t.height+=2*this.padding},e.prototype.substractObstructions=function(e){var n,r,i,o,u,s,a,l,c,p;for(l=t.list.apply(t,this.fixedTop),r=0,o=l.length;r<o;r++)s=l[r],a=up.Rect.fromElement(s),n=a.bottom-e.top,n>0&&(e.top+=n,e.height-=n);for(c=t.list.apply(t,this.fixedBottom),p=[],i=0,u=c.length;i<u;i++)s=c[i],a=up.Rect.fromElement(s),n=e.bottom-a.top,n>0?p.push(e.height-=n):p.push(void 0);return p},e.prototype.finish=function(){var t;return null!=(t=this.scrollMotion)?t.finish():void 0},e}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=up.util,up.ScrollMotion=function(){function n(t,n,i){var o,u,s,a;this.scrollable=t,this.targetTop=n,null==i&&(i={}),this.finish=e(this.finish,this),this.cancel=e(this.cancel,this),this.animationFrame=e(this.animationFrame,this),this.start=e(this.start,this),this.behavior=null!=(o=null!=(u=i.behavior)?u:i.scrollBehavior)?o:"instant",this.speed=(null!=(s=null!=(a=i.speed)?a:i.scrollSpeed)?s:up.viewport.config.scrollSpeed)*r}var r;return r=.065,n.prototype.start=function(){return new Promise(function(t){return function(e,n){return t.resolve=e,t.reject=n,"smooth"===t.behavior&&up.motion.isEnabled()?t.startAnimation():t.finish()}}(this))},n.prototype.startAnimation=function(){return this.startTime=Date.now(),this.startTop=this.scrollable.scrollTop,this.topDiff=this.targetTop-this.startTop,this.duration=Math.sqrt(Math.abs(this.topDiff))/this.speed,requestAnimationFrame(this.animationFrame)},n.prototype.animationFrame=function(){var e,n,r;if(!this.settled)return this.frameTop&&Math.abs(this.frameTop-this.scrollable.scrollTop)>1.5&&this.cancel("Animation aborted due to user intervention"),e=Date.now(),n=e-this.startTime,r=Math.min(n/this.duration,1),this.frameTop=this.startTop+t.simpleEase(r)*this.topDiff,Math.abs(this.targetTop-this.frameTop)<.3?this.finish():(this.scrollable.scrollTop=this.frameTop,requestAnimationFrame(this.animationFrame))},n.prototype.cancel=function(t){return this.settled=!0,this.reject(new Error(t))},n.prototype.finish=function(){return this.settled=!0,this.scrollable.scrollTop=this.targetTop,this.resolve()},n}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};up.store||(up.store={}),t=up.util,up.store.Memory=function(){function n(){this.values=e(this.values,this),this.keys=e(this.keys,this),this.remove=e(this.remove,this),this.set=e(this.set,this),this.get=e(this.get,this),this.clear=e(this.clear,this),this.clear()}return n.prototype.clear=function(){return this.data={}},n.prototype.get=function(t){return this.data[t]},n.prototype.set=function(t,e){return this.data[t]=e},n.prototype.remove=function(t){return delete this.data[t]},n.prototype.keys=function(){return Object.keys(this.data)},n.prototype.values=function(){return t.values(this.data)},n}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;t=up.util,up.store.Session=function(t){function r(t){this.saveToSessionStorage=e(this.saveToSessionStorage,this),this.loadFromSessionStorage=e(this.loadFromSessionStorage,this),this.remove=e(this.remove,this),this.set=e(this.set,this),this.clear=e(this.clear,this),this.rootKey=t,this.loadFromSessionStorage()}return n(r,t),r.prototype.clear=function(){return r.__super__.clear.call(this),this.saveToSessionStorage()},r.prototype.set=function(t,e){return r.__super__.set.call(this,t,e),this.saveToSessionStorage()},r.prototype.remove=function(t){return r.__super__.remove.call(this,t),this.saveToSessionStorage()},r.prototype.loadFromSessionStorage=function(){var t;try{(t="undefined"!=typeof sessionStorage&&null!==sessionStorage?sessionStorage.getItem(this.rootKey):void 0)&&(this.data=JSON.parse(t))}catch(t){}return this.data||(this.data={})},r.prototype.saveToSessionStorage=function(){var t;t=JSON.stringify(this.data);try{return"undefined"!=typeof sessionStorage&&null!==sessionStorage?sessionStorage.setItem(this.rootKey,t):void 0}catch(t){}},r}(up.store.Memory)}.call(this),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};e=up.util,t=up.element,up.Tether=function(){function r(e){this.sync=n(this.sync,this),this.scheduleSync=n(this.scheduleSync,this);var r;this.anchor=e.anchor,r=e.position.split("-"),this.position=r[0],this.align=r[1],this.align?up.legacy.warn("The position value %o is deprecated. Use %o instead.",e.position,this.describeConstraints()):this.align=e.align,this.alignAxis="top"===this.position||"bottom"===this.position?"horizontal":"vertical",this.viewport=up.viewport.closest(this.anchor),this.parent=this.viewport===t.root()?document.body:this.viewport,this.syncOnScroll=!this.viewport.contains(this.anchor.offsetParent),this.root=t.affix(this.parent,".up-bounds"),this.setBoundsOffset(0,0),this.changeEventSubscription("on")}return r.prototype.destroy=function(){return t.remove(this.root),this.changeEventSubscription("off")},r.prototype.changeEventSubscription=function(t){if(up[t](window,"resize",this.scheduleSync),this.syncOnScroll)return up[t](this.viewport,"scroll",this.scheduleSync)},r.prototype.scheduleSync=function(){return clearTimeout(this.syncTimer),this.syncTimer=e.task(this.sync)},r.prototype.sync=function(){var t,n,r,i;switch(r=this.root.getBoundingClientRect(),t=this.anchor.getBoundingClientRect(),n=void 0,i=void 0,this.alignAxis){case"horizontal":i=function(){switch(this.position){case"top":return t.top-r.height;case"bottom":return t.top+t.height}}.call(this),n=function(){switch(this.align){case"left":return t.left;case"center":return t.left+.5*(t.width-r.width);case"right":return t.left+t.width-r.width}}.call(this);break;case"vertical":i=function(){switch(this.align){case"top":return t.top;case"center":return t.top+.5*(t.height-r.height);case"bottom":return t.top+t.height-r.height}}.call(this),n=function(){switch(this.position){case"left":return t.left-r.width;case"right":return t.left+t.width}}.call(this)}return e.isDefined(n)||e.isDefined(i)?this.moveTo(n,i):up.fail("Invalid tether constraints: %o",this.describeConstraints())},r.prototype.describeConstraints=function(){return{position:this.position,align:this.align}},r.prototype.moveTo=function(t,e){var n;return n=this.root.getBoundingClientRect(),this.setBoundsOffset(t-n.left+this.offsetLeft,e-n.top+this.offsetTop)},r.prototype.setBoundsOffset=function(e,n){return this.offsetLeft=e,this.offsetTop=n,t.setStyle(this.root,{left:e,top:n})},r}()}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=up.util,up.UrlSet=function(){function n(n,r){this.urls=n,null==r&&(r={}),this[""+t.isEqual.key]=e(this[""+t.isEqual.key],this),this.matchesAny=e(this.matchesAny,this),this.doesMatchPattern=e(this.doesMatchPattern,this),this.doesMatchFully=e(this.doesMatchFully,this),this.matches=e(this.matches,this),this.normalizeUrl=r.normalizeUrl||t.normalizeUrl,this.urls=t.map(this.urls,this.normalizeUrl),this.urls=t.compact(this.urls)}return n.prototype.matches=function(t){return t.indexOf("*")>=0?this.doesMatchPattern(t):this.doesMatchFully(t)},n.prototype.doesMatchFully=function(e){return t.contains(this.urls,e)},n.prototype.doesMatchPattern=function(e){var n;return n="__ASTERISK__",e=e.replace(/\*/g,n),e=t.escapeRegexp(e),e=e.replace(new RegExp(n,"g"),".*?"),e=new RegExp("^"+e+"$"),t.find(this.urls,function(t){return e.test(t)})},n.prototype.matchesAny=function(e){return t.find(e,this.matches)},n.prototype[""+t.isEqual.key]=function(e){return t.isEqual(this.urls,null!=e?e.urls:void 0)},n}()}.call(this),function(){up.framework=function(){var t,e,n,r;return r=up.util,n=!0,e=function(){return up.emit("up:framework:reset",{log:"Resetting framework"})},t=function(){return up.browser.isSupported()?(up.emit("up:framework:booted",{
log:"Framework booted"}),n=!1,up.event.onReady(function(){return r.task(function(){return up.emit("up:app:boot",{log:"Booting user application"}),up.emit("up:app:booted",{log:"User application booted"})})})):"function"==typeof console.log?console.log("Unpoly doesn't support this browser. Framework was not booted."):void 0},{reset:e,boot:t,isBooting:function(){return n}}}()}.call(this),function(){var t=[].slice;up.event=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v;return d=up.util,u=up.element,f=function(){var t,e,n,r,i;for(r=[window,document,document.documentElement,document.body],i=[],e=0,n=r.length;e<n;e++)t=r[e],i.push(up.EventListener.unbindNonDefault(t));return i},n=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],r(e)},e=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],r(e,{jQuery:!0})},r=function(t,e){return up.browser.isSupported()?up.EventListener.bind(t,e):function(){}},m=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],up.EventListener.unbind(e)},s=function(){var e,n,r,o,s,a;return e=1<=arguments.length?t.call(arguments,0):[],e[0].addEventListener?s=e.shift():d.isJQuery(e[0])&&(s=u.get(e.shift())),r=e[0],o=e[1]||{},(a=d.pluckKey(o,"target"))&&(s=a),null==s&&(s=document),l(r,o),n=i(r,o),s.dispatchEvent(n),n},i=function(t,e){var n;return n=document.createEvent("Event"),n.initEvent(t,!0,!0),d.assign(n,e),up.browser.isIE11()&&(n.preventDefault=function(){return Object.defineProperty(n,"defaultPrevented",{get:function(){return!0}})}),n},l=function(e,n){var r,i,o;if(up.log.isEnabled())return r=d.pluckKey(n,"log"),d.isArray(r)?(o=r,r=o[0],i=2<=o.length?t.call(o,1):[]):i=[],d.isString(r)?d.isPresent(n)?up.puts.apply(up,[r+" (%s (%o))"].concat(t.call(i),[e],[n])):up.puts.apply(up,[r+" (%s)"].concat(t.call(i),[e])):r===!0?d.isPresent(n)?up.puts("Event %s (%o)",e,n):up.puts("Event %s",e):void 0},c=function(){var e,n;return e=1<=arguments.length?t.call(arguments,0):[],n=s.apply(null,e),!n.defaultPrevented},v=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],new Promise(function(t,n){return c.apply(null,e)?t():n(new Error("Event "+e[0]+" was prevented"))})},p=function(t){return n("keydown","body",function(e){if(d.escapePressed(e))return t(e)})},a=function(t){return t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault()},o=function(t){if(a(t),"up:action:consumed"!==t.type)return s(t.target,"up:action:consumed",{log:!1})},h=function(t){return"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},n("up:framework:reset",f),{on:n,$on:e,off:m,emit:s,nobodyPrevents:c,whenEmitted:v,onEscape:p,halt:a,consumeAction:o,onReady:h}}(),up.on=up.event.on,up.$on=up.event.$on,up.off=up.event.off,up.$off=up.event.off,up.emit=up.event.emit,up.legacy.renamedModule("bus","event")}.call(this),function(){}.call(this),function(){up.protocol=function(){var t,e,n,r,i,o,u,s,a,l;return l=up.util,r=up.element,o=function(e){return e.getResponseHeader(t.locationHeader)||e.responseURL},a=function(e){return e.getResponseHeader(t.titleHeader)},u=function(e){var n;if(n=e.getResponseHeader(t.methodHeader))return l.normalizeMethod(n)},i=l.memoize(function(){var e;return e=up.browser.popCookie(t.methodCookie),(e||"get").toLowerCase()}),up.on("up:framework:booted",i),t=new up.Config({targetHeader:"X-Up-Target",failTargetHeader:"X-Up-Fail-Target",locationHeader:"X-Up-Location",validateHeader:"X-Up-Validate",titleHeader:"X-Up-Title",methodHeader:"X-Up-Method",methodCookie:"_up_method",methodParam:"_method",csrfParam:function(){return r.metaContent("csrf-param")},csrfToken:function(){return r.metaContent("csrf-token")},csrfHeader:"X-CSRF-Token"}),e=function(){return l.evalOption(t.csrfParam)},n=function(){return l.evalOption(t.csrfToken)},s=function(){return t.reset()},up.on("up:framework:reset",s),{config:t,reset:s,locationFromXhr:o,titleFromXhr:a,methodFromXhr:u,csrfParam:e,csrfToken:n,initialRequestMethod:i}}()}.call(this),function(){var t=[].slice;up.log=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w;return b=up.util,n=up.browser,d=new up.store.Session("up.log"),i=new up.Config({prefix:"[UP] ",enabled:d.get("enabled"),collapse:!1}),f=function(){return i.reset()},c=function(t){return""+i.prefix+t},r=function(){var e,n;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],console[n].apply(console,e)},e=/\%[odisf]/g,y=function(t){var e,n,r,i,o,u,s,a;if(o=200,n="",b.isString(t))s=t.replace(/[\n\r\t ]+/g," "),s=s.replace(/^[\n\r\t ]+/,""),s=s.replace(/[\n\r\t ]$/,""),s='"'+s+'"',n='"';else if(b.isUndefined(t))s="undefined";else if(b.isNumber(t)||b.isFunction(t))s=t.toString();else if(b.isArray(t))s="["+b.map(t,y).join(", ")+"]",n="]";else if(b.isJQuery(t))s="$("+b.map(t,y).join(", ")+")",n=")";else if(b.isElement(t)){for(s="<"+t.tagName.toLowerCase(),u=["id","name","class"],r=0,i=u.length;r<i;r++)e=u[r],(a=t.getAttribute(e))&&(s+=" "+e+'="'+a+'"');s+=">",n=">"}else s=JSON.stringify(t);return s.length>o&&(s=s.substr(0,o)+" \u2026",s+=n),s},v=function(){var e,n;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],g.apply(null,[b.identity,n].concat(t.call(e)))},g=function(){var n,r,i,o;return r=arguments[0],o=arguments[1],n=3<=arguments.length?t.call(arguments,2):[],b.isBlank(o)?"":(i=0,o.replace(e,function(){var t;return t=n[i],t=r(y(t)),i+=1,t}))},o=function(){var e,n;if(n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],i.enabled&&n)return console.debug.apply(console,[c(n)].concat(t.call(e)))},h=function(){var e,n;if(n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],i.enabled&&n)return console.log.apply(console,[c(n)].concat(t.call(e)))},w=function(){var e,n;if(n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],n)return console.warn.apply(console,[c(n)].concat(t.call(e)))},l=function(){var e,n,r,o;if(o=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],n=e.pop(),!i.enabled||!o)return n();r=i.collapse?"groupCollapsed":"group",console[r].apply(console,[c(o)].concat(t.call(e)));try{return n()}finally{o&&console.groupEnd()}},a=function(){var e,n;if(n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],n)return console.error.apply(console,[c(n)].concat(t.call(e)))},p=function(){var t;return t=" __ _____  ___  ___  / /_ __\n"+("/ // / _ \\/ _ \\/ _ \\/ / // /  "+up.version+"\n")+"\\___/_//_/ .__/\\___/_/\\_. / \n        / /            / /\n\n",t+=i.enabled?"Call `up.log.disable()` to disable logging for this session.":"Call `up.log.enable()` to enable logging for this session."},up.on("up:framework:booted",p),up.on("up:framework:reset",f),m=function(t){return d.set("enabled",t),i.enabled=t},s=function(){return m(!0)},u=function(){return m(!1)},{puts:h,sprintf:v,sprintfWithFormattedArgs:g,puts:h,debug:o,error:a,warn:w,group:l,config:i,enable:s,disable:u,isEnabled:function(){return i.enabled}}}(),up.puts=up.log.puts,up.warn=up.log.warn}.call(this),function(){var t=[].slice;up.toast=function(){var e,n,r,i,o,u,s,a,l,c;return c=up.util,i=up.element,e=function(t){return"<span class='up-toast-variable'>"+c.escapeHtml(t)+"</span>"},l=new up.Config({element:null}),a=function(){return r(),l.reset()},u=function(n){var r;return c.isArray(n)?(n[0]=c.escapeHtml(n[0]),n=(r=up.log).sprintfWithFormattedArgs.apply(r,[e].concat(t.call(n)))):n=c.escapeHtml(n),n},o=function(){return!!l.element},n=function(t,e){var n,r;return r=l.element.querySelector(".up-toast-actions"),n=i.affix(r,".up-toast-action"),n.innerText=t,n.addEventListener("click",e)},s=function(t,e){var o;return null==e&&(e={}),r(),t=u(t),l.element=i.createFromHtml('<div class="up-toast">\n  <div class="up-toast-message">'+t+'</div>\n  <div class="up-toast-actions"></div>\n</div>'),(o=e.action||e.inspect)&&n(o.label,o.callback),n("Close",r),document.body.appendChild(l.element)},r=function(){if(o())return i.remove(l.element),l.element=null},up.on("up:framework:reset",a),{open:s,close:r,reset:a,isOpen:o}}()}.call(this),function(){var t=[].slice;up.syntax=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y;return y=up.util,s=up.element,e={"[up-back]":-100,"[up-drawer]":-200,"[up-dash]":-200,"[up-expand]":-300,"[data-method]":-400,"[data-confirm]":-400},o=[],l=[],h=function(){var e,r;return e=1<=arguments.length?t.call(arguments,0):[],r=n(e),a(o,r)},d=function(){var e,n;return e=1<=arguments.length?t.call(arguments,0):[],n=h.apply(null,e),n.jQuery=!0,n},v=function(){var e,r;return e=1<=arguments.length?t.call(arguments,0):[],r=n(e),up.framework.isBooting()&&(r.priority=u(r.selector)||up.fail("Unregistered priority for system macro %o",r.selector)),a(l,r)},m=function(){var e,n;return e=1<=arguments.length?t.call(arguments,0):[],n=v.apply(null,e),n.jQuery=!0,n},u=function(t){var n,r;for(r in e)if(n=e[r],t.indexOf(r)>=0)return n},c=function(t){var e,n,r;return r=t.shift(),e=t.pop(),n=y.extractOptions(t),[r,n,e]},n=function(t){var e,n,r,i;return r=c(t),i=r[0],n=r[1],e=r[2],n=y.options(n,{selector:i,isDefault:up.framework.isBooting(),priority:0,batch:!1,keep:!1,jQuery:!1}),y.assign(e,n)},a=function(t,e){var n,r;for(r=0;(n=t[r])&&n.priority>=e.priority;)r+=1;return t.splice(r,0,e),e},i=function(t,e){var n,r;return r=l.concat(o),n=new up.CompilePass(t,r,e),n.compile()},f=function(t,e){var n;return(n=t.upDestructors)||(n=[],t.upDestructors=n,t.classList.add("up-can-clean")),y.isArray(e)?n.push.apply(n,e):n.push(e)},r=function(t){var e;return e=s.subtree(t,".up-can-clean"),y.each(e,function(t){var e,n,r,i,o;if(n=t.upDestructors){for(o=[],r=0,i=n.length;r<i;r++)e=n[r],o.push(e());return o}})},p=function(t){var e;return e=s.get(t),s.jsonAttr(e,"up-data")||{}},g=function(){return o=y.filter(o,"isDefault"),l=y.filter(l,"isDefault")},up.on("up:framework:reset",g),{compiler:h,macro:v,$compiler:d,$macro:m,destructor:f,compile:i,clean:r,data:p}}(),up.compiler=up.syntax.compiler,up.$compiler=up.syntax.$compiler,up.destructor=up.syntax.destructor,up.macro=up.syntax.macro,up.$macro=up.syntax.$macro}.call(this),function(){up.history=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h,f,d,m;return m=up.util,r=up.element,e=new up.Config({enabled:!0,popTargets:["body"],restoreScroll:!0}),c=void 0,u=void 0,f=function(){return e.reset(),c=void 0,u=void 0},s=function(t,e){return e||(e={}),e.hash=!0,m.normalizeUrl(t,e)},n=function(t){return s(up.browser.url(),t)},i=function(t){var e;return e={stripTrailingSlash:!0},s(t,e)===n(e)},a=function(t){return u&&(c=u,u=void 0),u=t},h=function(t){if(o("replaceState",t))return up.emit("up:history:replaced",{url:t})},p=function(t,e){if(e=m.options(e,{force:!1}),t=s(t),(e.force||!i(t))&&up.event.nobodyPrevents("up:history:push",{url:t,log:"Adding history entry for "+t}))return o("pushState",t)?up.emit("up:history:pushed",{url:t,log:"Advanced to location "+t}):up.emit("up:history:muted",{url:t,log:"Did not advance to "+t+" (history is unavailable)"})},o=function(r,i){var o;return!(!up.browser.canPushState()||!e.enabled)&&(o=t(),window.history[r](o,"",i),a(n()),!0)},t=function(){return{fromUp:!0}},d=function(t){var r,i,o;return(null!=t?t.fromUp:void 0)?(o=n(),up.emit("up:history:restore",{url:o,log:"Restoring location "+o}),r=e.popTargets.join(", "),i=up.replace(r,o,{history:!1,title:!0,reveal:!1,saveScroll:!1,restoreScroll:e.restoreScroll,layer:"page"}),i.then(function(){return o=n(),up.emit("up:history:restored",{url:o,log:"Restored location "+o})})):up.puts("Ignoring a state not pushed by Unpoly (%o)",t)},l=function(t){var e;return a(n()),up.viewport.saveScroll({url:c}),e=t.state,d(e)},up.on("up:app:boot",function(){var t;if(up.browser.canPushState())return t=function(){return up.browser.canControlScrollRestoration()&&(window.history.scrollRestoration="manual"),window.addEventListener("popstate",l),h(n(),{force:!0})},"undefined"!=typeof jasmine&&null!==jasmine?t():setTimeout(t,100)}),up.macro("a[up-back], [up-href][up-back]",function(t){if(m.isPresent(c))return r.setMissingAttrs(t,{"up-href":c,"up-restore-scroll":""}),t.removeAttribute("up-back"),up.link.makeFollowable(t)}),up.on("up:framework:reset",f),{config:e,push:p,replace:h,url:n,isUrl:i,previousUrl:function(){return c},normalizeUrl:s}}()}.call(this),function(){var t=[].slice;up.viewport=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P,x,O,R,M,j,D,L;return D=up.util,u=up.element,o=new up.Config({duration:0,viewports:[".up-modal-viewport","[up-viewport]","[up-fixed]"],fixedTop:["[up-fixed~=top]"],fixedBottom:["[up-fixed~=bottom]"],anchoredRight:["[up-anchored~=right]","[up-fixed~=top]","[up-fixed~=bottom]","[up-fixed~=right]"],revealSnap:50,revealPadding:0,scrollSpeed:1}),m=new up.Cache({size:30,key:up.history.normalizeUrl}),j=new up.MotionController("scrolling"),y=function(){return o.reset(),m.clear(),j.reset()},P=function(t,e,n){var r;return r=new up.ScrollMotion(t,e,n),j.startMotion(t,r,n)},s=function(t){var e;return up.motion.isEnabled()?(e=i(t),j.finish(e)):Promise.resolve()},r=function(){var t;return t=o.anchoredRight.join(","),u.all(t)},v=function(){var e,n,r,i,s,a,l;return r=function(t,e){var n;return n=D.sum(e,function(e){return u.styleNumber(t,e)})||0,n+t.offsetHeight},s=function(t){return r(t,["top","margin-top"])},i=function(t){return r(t,["bottom","margin-bottom"])},l=u.all(o.fixedTop.join(", ")),n=u.all(o.fixedBottom.join(", ")),a=D.map(l,s),e=D.map(n,i),{top:Math.max.apply(Math,[0].concat(t.call(a))),bottom:Math.max.apply(Math,[0].concat(t.call(e)))}},w=function(t,e){var n,r;return n=u.get(t),r=new up.RevealMotion(n,e),j.startMotion(n,r,e)},x=function(t,e){var n,r,i,o,s,a;return null==e&&(e={}),r=e.hash,o=e.reveal,i=e.restoreScroll,s=D.only(e,"scrollBehavior","scrollSpeed"),i?(n=D.presence(i,D.isObject),b({around:t,scrollTops:n})):r&&o===!0?k(r,s):o?(D.isElement(o)||D.isJQuery(o)?t=u.get(o):D.isString(o)&&(a=u.resolveSelector(o,e.origin),t=up.fragment.first(a)),t?w(t,s):void 0):Promise.resolve()},k=function(t){var e;return t&&(e=a(t))?w(e,{top:!0}):Promise.resolve()},n=function(){return[A()].concat(t.call(o.viewports)).join(",")},i=function(t){var e;return e=u.get(t),u.closest(e,n())},f=function(t){var e;return e=u.get(t),u.subtree(e,n())},p=function(t){var e;return e=u.get(t),u.list(i(e),f(e))},c=function(){return u.all(n())},A=function(){var t;return(t=document.scrollingElement)?t.tagName:"html"},h=function(){return document.querySelector(A())},F=function(){return u.root().clientWidth},E=function(){return u.root().clientHeight},d=function(t){return u.matches(t,A())},S=function(){return window.innerWidth>document.documentElement.offsetWidth},T=function(){var t,e,n;return t=document.body,n=document.documentElement,e=D.find([n,t],L),e||h()},L=function(t){var e;return e=u.style(t,"overflow-y"),"auto"===e||"scroll"===e},M=D.memoize(function(){var t,e,n;return e={position:"absolute",top:"0",left:"0",width:"100px",height:"100px",overflowY:"scroll"},t=up.element.affix(document.body,"[up-viewport]",{style:e}),n=t.offsetWidth-t.clientWidth,up.element.remove(t),n}),O=function(t){return u.toSelector(t)},R=function(){return D.mapObject(c(),function(t){return[O(t),t.scrollTop]})},l=function(t){var e;return null==t&&(t=document),e=["[up-fixed]"].concat(o.fixedTop).concat(o.fixedBottom),t.querySelectorAll(e.join(","))},C=function(t){var e,n,r,i;return null==t&&(t={}),i=null!=(e=t.url)?e:up.history.url(),r=null!=(n=t.tops)?n:R(),m.set(i,r)},b=function(t){var e,n,r;return null==t&&(t={}),n=up.history.url(),r=t.around?p(t.around):c(),e=t.scrollTops||m.get(n)||{},up.log.group("Restoring scroll positions for URL %s to %o",n,e,function(){var t;return t=D.map(r,function(t){var n,r;return n=O(t),r=e[n]||0,P(t,r,{duration:0})}),Promise.all(t)})},e=function(t,e){var n,r,i,o,s,a,c,p;return null==e&&(e={}),i=u.get(t),c=up.viewport.closest(i),p=c.getBoundingClientRect(),a=i.getBoundingClientRect(),r=new up.Rect({left:a.left-p.left,top:a.top-p.top,width:a.width,height:a.height}),"function"==typeof e.afterMeasure&&e.afterMeasure(),u.setStyle(i,{position:"static"===i.style.position?"static":"relative",top:"auto",right:"auto",bottom:"auto",left:"auto",width:"100%",height:"100%"}),n=u.createFromSelector(".up-bounds"),u.insertBefore(i,n),n.appendChild(i),o=function(t,e){return r.left+=t,r.top+=e,u.setStyle(n,r)},o(0,0),s=i.getBoundingClientRect(),o(a.left-s.left,a.top-s.top),D.each(l(i),u.fixedToAbsolute),{bounds:n,moveBounds:o}},a=function(t){var e;if(t=g(t))return e=[u.attributeSelector("up-id",t),u.attributeSelector("id",t),"a"+u.attributeSelector("name",t)].join(","),up.fragment.first(e)},g=function(t){return t&&"#"===t[0]&&(t=t.substr(1)),D.presence(t)},up.on("up:app:booted",function(){return k(location.hash)}),up.on("up:framework:reset",y),{reveal:w,revealHash:k,firstHashTarget:a,scroll:P,config:o,closest:i,subtree:f,around:p,all:c,rootSelector:A,root:h,rootWidth:F,rootHeight:E,rootHasVerticalScrollbar:S,rootOverflowElement:T,isRoot:d,scrollbarWidth:M,scrollTops:R,saveScroll:C,restoreScroll:b,scrollAfterInsertFragment:x,anchoredRight:r,fixedElements:l,absolutize:e}}(),up.scroll=up.viewport.scroll,up.reveal=up.viewport.reveal,up.revealHash=up.viewport.revealHash,up.legacy.renamedModule("layout","viewport")}.call(this),function(){var t=[].slice;up.fragment=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P,x,O,R;return O=up.util,u=up.element,r=new up.Config({fallbacks:["body"],fallbackTransition:null}),E=function(){return r.reset()},T=function(t,e){if(e!==!1)return O.isPresent(e)&&(e=O.normalizeUrl(e)),t.setAttribute("up-source",e)},C=function(t){var e;return e=u.get(t),(e=u.closest(e,"[up-source]"))?e.getAttribute("up-source"):up.browser.url()},S=function(t,e,r){var i,o,u,s,a,l,c,p,h,f,d;if(r=O.options(r),r.inspectResponse=u=function(){return up.browser.navigate(e,O.only(r,"method","params"))},!up.browser.canPushState()&&r.history!==!1)return r.preload||u(),O.unresolvablePromise();d=O.merge(r,{humanizedTarget:"target"}),o=O.merge(r,{humanizedTarget:"failure target",provideTarget:void 0,restoreScroll:!1}),O.renameKey(o,"failTransition","transition"),O.renameKey(o,"failLayer","layer"),O.renameKey(o,"failReveal","reveal");try{a=n(t,d),s=n(r.failTarget,o)}catch(t){return i=t,Promise.reject(i)}return f=O.only(r,"method","data","params","cache","preload","headers","timeout"),O.assign(f,{url:e,target:a,failTarget:s}),h=new up.Request(f),c=function(t){return w(!0,a,h,t,d)},l=function(t){var e,n;return n=function(){return Promise.reject(t)},t.isFatalError()?n():(e=w(!1,s,h,t,o),O.always(e,n))},p=up.request(h),r.preload||(p=p.then(c,l)),p},w=function(t,e,n,r,i){var o,u,s,a;return a=r.url,u=a,(o=n.hash)&&(i.hash=o,u+=o),s="GET"===r.method,t?s?(i.history===!1||O.isString(i.history)||(i.history=u),i.source===!1||O.isString(i.source)||(i.source=a)):(O.isString(i.history)||(i.history=!1),O.isString(i.source)||(i.source="keep")):s?(i.history!==!1&&(i.history=u),i.source!==!1&&(i.source=a)):(i.history=!1,i.source="keep"),A(i)&&r.title&&(i.title=r.title),c(e,r.text,i)},A=function(t){return!(t.title===!1||O.isString(t.title)||t.history===!1&&t.title!==!0)},c=function(t,n,r){return up.log.group("Extracting %s from %d bytes of HTML",t,null!=n?n.length:void 0,function(){return r=O.options(r,{historyMethod:"push",keep:!0,layer:"auto"}),r.saveScroll!==!1&&up.viewport.saveScroll(),O.rejectOnError(function(){var i,o,u,s,a,l,c;for("function"==typeof r.provideTarget&&r.provideTarget(),s=new up.HtmlParser(n),i=e(t,s,r),A(r)&&(a=s.title())&&(r.title=a),R(r),c=[],o=0,u=i.length;o<u;o++)l=i[o],up.log.group("Swapping fragment %s",l.selector,function(){var t,e;return t=O.merge(r,O.only(l,"origin","reveal")),s.prepareForInsertion(l.newElement),e=P(l.oldElement,l.newElement,l.pseudoClass,l.transition,t),c.push(e)});return Promise.all(c)})})},n=function(t,e){var n;return n=new up.ExtractCascade(t,e),n.bestPreflightSelector()},e=function(t,e,n){var r;return n=O.merge(n,{response:e}),r=new up.ExtractCascade(t,n),r.bestMatchingSteps()},R=function(t){if(t=O.options(t,{historyMethod:"push"}),t.history&&up.history[t.historyMethod](t.history),O.isString(t.title))return document.title=t.title},P=function(t,e,n,r,i){var o,a,c,h,f,d,v,g,b,w;if(r||(r="none"),"keep"===i.source&&(i=O.merge(i,{source:C(t)})),T(e,i.source),n){for(w=u.createFromSelector(".up-insertion");a=e.firstChild;)w.appendChild(a);for("before"===n?t.insertAdjacentElement("afterbegin",w):t.insertAdjacentElement("beforeend",w),b=w.children,c=0,f=b.length;c<f;c++)o=b[c],m(o,i);return g=up.viewport.scrollAfterInsertFragment(w,i),g=O.always(g,up.animate(w,r,i)),g=g.then(function(){return u.unwrap(w)})}return(h=p(t,e,i))?(l(h),Promise.resolve()):(i.keepPlans=x(t,e,i),v=t.parentNode,d=O.merge(i,{beforeStart:function(){return y(t)},afterInsert:function(){return up.hello(e,i)},beforeDetach:function(){return up.syntax.clean(t)},afterDetach:function(){return u.remove(t),s(t,{parent:v,log:!1})}}),up.morph(t,e,r,d))},x=function(t,e,n){var r,i,o,s,a,l,c;if(i=[],n.keep)for(c=t.querySelectorAll("[up-keep]"),r=0,a=c.length;r<a;r++)o=c[r],(l=p(o,e,O.merge(n,{descendantsOnly:!0})))&&(s=o.cloneNode(!0),u.replace(o,s),u.replace(l.newElement,o),i.push(l));return i},p=function(t,e,n){var r,i,o,s,a;if(n.keep&&(i=t,(s=u.booleanOrStringAttr(i,"up-keep"))&&(O.isString(s)||(s="&"),s=u.resolveSelector(s,i),o=n.descendantsOnly?u.first(e,s):u.subtree(e,s)[0],o&&u.matches(o,"[up-keep]")&&(a={oldElement:i,newElement:o,newData:up.syntax.data(o)},r={target:i,newFragment:o,newData:a.newData,log:["Keeping element %o",i]},up.event.nobodyPrevents("up:fragment:keep",r)))))return a},m=function(t,e){var n,r,i,o,s,c;for(n=u.get(t),e=O.options(e,{keepPlans:[]}),i=[],c=e.keepPlans,r=0,o=c.length;r<o;r++)s=c[r],l(s),i.push(s.oldElement);return up.syntax.compile(n,{skip:i}),a(n,e),n},a=function(t,e){return up.emit(t,"up:fragment:inserted",{log:["Inserted fragment %o",t],origin:e.origin})},l=function(t){var e,n;return n=t.oldElement,e={target:n,newFragment:t.newElement,newData:t.newData,log:["Kept fragment %o",n]},up.emit("up:fragment:kept",e)},s=function(t,e){var n,r;return F(t,e)&&(n=["Destroyed fragment %o",t]),r=e.parent||up.fail("Missing { parent } option"),up.emit(r,"up:fragment:destroyed",{fragment:t,parent:r,log:n})},v=function(t){return!u.closest(t,".up-destroying")},h=function(){var e,n,r,i,o,s,a;return e=1<=arguments.length?t.call(arguments,0):[],r=O.extractOptions(e),a=e.pop(),s=e[0]||document,n=null!=(o=r.layer)?o:"auto",i=r.origin,a=u.resolveSelector(a,i),"auto"===n?d(s,a,i):f(s,a,n)},d=function(t,e,n){var r,i;return r=["popup","modal","page"],n&&(i=g(n),O.remove(r,i),r.unshift(i)),O.findResult(r,function(n){return f(t,e,n)})},f=function(t,e,n){var r;return r=u.all(t,e),O.findResult(r,function(t){if(v(t)&&b(t,n))return t})},g=function(t){return up.popup.contains(t)?"popup":up.modal.contains(t)?"modal":"page"},b=function(t,e){return!e||g(t)===e},i=function(t,e){return null==e&&(e=document.body),u.affix(e,t,{"class":"up-placeholder"})},o=function(t,e){var n,r,i;return r=u.get(t),e=O.options(e,{animation:!1}),r?(y(r),R(e),n=function(){var t;return t=up.motion.animateOptions(e),up.motion.animate(r,e.animation,t)},i=function(){var t;return t=r.parentNode,up.syntax.clean(r),u.remove(r),s(r,{parent:t,log:e.log})},n().then(i)):Promise.resolve()},F=function(t,e){return e.log!==!1&&!u.matches(t,".up-placeholder, .up-tooltip, .up-modal, .up-popup")},y=function(t){return t.classList.add("up-destroying")},k=function(t,e){var n;return e=O.options(e,{cache:!1}),n=e.url||C(t),S(t,n,e)},up.on("up:app:boot",function(){var t;return t=document.body,T(t,up.browser.url()),m(t)}),up.on("up:framework:reset",E),{createPlaceholder:i,replace:S,reload:k,destroy:o,extract:c,first:h,source:C,hello:m,config:r,layerOf:g}}(),up.replace=up.fragment.replace,up.extract=up.fragment.extract,up.reload=up.fragment.reload,up.destroy=up.fragment.destroy,up.hello=up.fragment.hello,up.first=function(){var e,n;return e=1<=arguments.length?t.call(arguments,0):[],up.legacy.warn("up.first() has been renamed to up.fragment.first()"),(n=up.fragment).first.apply(n,e)},up.legacy.renamedModule("flow","fragment"),up.legacy.renamedModule("dom","fragment")}.call(this),function(){var t=[].slice;up.motion=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P;return C=up.util,l=up.element,y={},s={},b={},a={},g=new up.MotionController("motion"),u=new up.Config({duration:300,delay:0,easing:"ease",enabled:!0}),S=function(){return g.reset(),y=C.copy(s),b=C.copy(a),u.reset()},d=function(){return u.enabled},n=function(t,e,n){var r,o,u,s;return o=l.get(t),n=i(n),r=c(e),s=P(o,e,n),s?(u=function(){return r(o,n)},g.startFunction(o,u,n)):E(o,e)},P=function(t,e,n){return n=i(n),d()&&!m(e)&&n.duration>0&&!l.isSingleton(t)},E=function(t,e){return C.isOptions(e)&&l.setStyle(t,e),Promise.resolve()},e=0,r=function(t,e,n){var r;return n=C.merge(n,{finishEvent:g.finishEvent}),r=new up.CssTransition(t,e,n),r.start()},i=function(){var e,n,r,i,o,s,a,c,p,h,f,d,m,v,g;return e=1<=arguments.length?t.call(arguments,0):[],g=null!=(o=e.shift())?o:{},i=C.extractOptions(e),r=e.pop()||l.none(),n={},n.easing=null!=(s=null!=(a=null!=(c=g.easing)?c:r.getAttribute("up-easing"))?a:i.easing)?s:u.easing,n.duration=null!=(p=null!=(h=null!=(f=g.duration)?f:l.numberAttr(r,"up-duration"))?h:i.duration)?p:u.duration,n.delay=null!=(d=null!=(m=null!=(v=g.delay)?v:l.numberAttr(r,"up-delay"))?m:i.delay)?d:u.delay,n.trackMotion=g.trackMotion,n},p=function(t){return y[t]||up.fail("Unknown animation %o",t)},f=function(t){return g.finish(t)},v=function(t,e,n,r){var o,u,s,a,c,p,f,d,m,v,y,b;return r=C.options(r),C.assign(r,i(r)),t=l.get(t),e=l.get(e),v=h(n),b=P(t,v,r),a=C.pluckKey(r,"beforeStart")||C.noop,u=C.pluckKey(r,"afterInsert")||C.noop,s=C.pluckKey(r,"beforeDetach")||C.noop,o=C.pluckKey(r,"afterDetach")||C.noop,a(),f=function(){var t;return t=C.merge(r,{behavior:"instant"}),up.viewport.scrollAfterInsertFragment(e,t)},b?g.isActive(t)&&r.trackMotion===!1?v(t,e,r):(up.puts("Morphing %o to %o with transition %o",t,e,n),y=up.viewport.closest(t),d=y.scrollTop,c=up.viewport.absolutize(t,{afterMeasure:function(){return l.insertBefore(t,e),u()}}),m=function(){var n;return n=f(),n=n.then(function(){var n;return n=y.scrollTop,c.moveBounds(0,n-d),v(t,e,r)}),n=n.then(function(){return s(),l.remove(c.bounds),o()})},g.startFunction([t,e],m,r)):(s(),A(t,e),u(),o(),p=f())},h=function(t){var e;if(!m(t))return C.isFunction(t)?t:C.isArray(t)?o.apply(null,t):C.isString(t)?t.indexOf("/")>=0?o.apply(null,t.split("/")):(e=b[t])?h(e):void 0:up.fail("Unknown transition %o",t)},o=function(t,e){var n,r;return m(t)&&m(t)?void 0:(r=c(t)||C.asyncNoop,n=c(e)||C.asyncNoop,function(t,e,i){return Promise.all([r(t,i),n(e,i)])})},c=function(t){return m(t)?void 0:C.isFunction(t)?t:C.isString(t)?p(t):C.isOptions(t)?function(e,n){return r(e,t,n)}:up.fail("Unknown animation %o",t)},A=function(t,e){return l.replace(t,e)},k=function(t,e){return b[t]=h(e)},w=function(t,e){return y[t]=c(e)},T=function(){return s=C.copy(y),a=C.copy(b)},m=function(t){return!t||"none"===t||C.isBlank(t)},w("fade-in",function(t,e){return l.setStyle(t,{opacity:0}),r(t,{opacity:1},e)}),w("fade-out",function(t,e){return l.setStyle(t,{opacity:1}),r(t,{opacity:0},e)}),F=function(t,e){return{transform:"translate("+t+"px, "+e+"px)"}},w("move-to-top",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=n.top+n.height,r(t,F(0,-i),e)}),w("move-from-top",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=n.top+n.height,l.setStyle(t,F(0,-i)),r(t,F(0,0),e)}),w("move-to-bottom",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=l.root().clientHeight-n.top,r(t,F(0,i),e)}),w("move-from-bottom",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=up.viewport.rootHeight()-n.top,l.setStyle(t,F(0,i)),r(t,F(0,0),e)}),w("move-to-left",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=n.left+n.width,r(t,F(-i,0),e)}),w("move-from-left",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=n.left+n.width,l.setStyle(t,F(-i,0)),r(t,F(0,0),e)}),w("move-to-right",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=up.viewport.rootWidth()-n.left,r(t,F(i,0),e)}),w("move-from-right",function(t,e){var n,i;return l.setStyle(t,F(0,0)),n=t.getBoundingClientRect(),i=up.viewport.rootWidth()-n.left,l.setStyle(t,F(i,0)),r(t,F(0,0),e)}),w("roll-down",function(t,e){var r,i,o;return i=l.style(t,"height"),o=l.setTemporaryStyle(t,{height:"0px",overflow:"hidden"}),r=n(t,{height:i},e),r.then(o),r}),k("move-left",["move-to-left","move-from-right"]),k("move-right",["move-to-right","move-from-left"]),k("move-up",["move-to-top","move-from-bottom"]),k("move-down",["move-to-bottom","move-from-top"]),k("cross-fade",["fade-out","fade-in"]),up.on("up:framework:booted",T),up.on("up:framework:reset",S),{morph:v,animate:n,animateOptions:i,finish:f,finishCount:function(){return g.finishCount},transition:k,animation:w,config:u,isEnabled:d,isNone:m}}(),up.transition=up.motion.transition,up.animation=up.motion.animation,up.morph=up.motion.morph,up.animate=up.motion.animate}.call(this),function(){var t=[].slice;up.proxy=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P,x,O,R,M,j,D,L,U;return D=up.util,a=up.element,L=void 0,S=void 0,O=void 0,y=void 0,R=void 0,T=[],s=new up.Config({slowDelay:300,preloadDelay:75,cacheSize:70,cacheExpiry:3e5,maxRequests:4,wrapMethods:["PATCH","PUT","DELETE"],safeMethods:["GET","OPTIONS","HEAD"]}),r=new up.Cache({size:function(){return s.cacheSize},expiry:function(){return s.cacheExpiry},key:function(t){return up.Request.wrap(t).cacheKey()},cachable:function(t){return up.Request.wrap(t).isCachable()}}),l=function(t){var e,n,i,o,u,s,a;for(t=up.Request.wrap(t),n=[t],"html"!==t.target&&(s=t.variant({target:"html"}),n.push(s),"body"!==t.target&&(u=t.variant({target:"body"}),n.push(u))),i=0,o=n.length;i<o;i++)if(e=n[i],a=r.get(e))return a},i=function(){return clearTimeout(S),S=null},o=function(){return clearTimeout(O),O=null},C=function(){return L=null,i(),o(),y=0,s.reset(),r.clear(),R=!1,T=[]},C(),g=function(){var e,n,r,i,o,s;return e=1<=arguments.length?t.call(arguments,0):[],D.isString(e[0])&&(s=e.shift()),o=e.shift()||{},s&&(o.url=s),i=up.Request.wrap(o),i.isSafe()||u(),n=i.cache===!1,!n&&(r=l(i))?up.puts("Re-using cached response for %s %s",i.method,i.url):(r=m(i),x(i,r),r["catch"](function(){return F(i)})),i.preload||(v(),D.always(r,d)),r},e=function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],up.legacy.warn("up.ajax() has been deprecated. Use up.request() instead."),new Promise(function(t,n){var r;return r=function(e){return t(e.text)},g.apply(null,e).then(r,n)})},p=function(){return 0===y},c=function(){return y>0},v=function(){var t;if(y+=1,!O)return t=function(){if(c())return up.emit("up:proxy:slow",{log:"Proxy is slow to respond"}),R=!0},O=D.timer(s.slowDelay,t)},d=function(){if(y-=1,p()&&(o(),R))return up.emit("up:proxy:recover",{log:"Proxy has recovered from slow response"}),R=!1},m=function(t){return y<s.maxRequests?f(t):E(t)},E=function(t){var e;return up.puts("Queuing request for %s %s",t.method,t.url),e=function(){return f(t)},e=D.previewable(e),T.push(e),e.promise},f=function(t){var e,n;return e={request:t,log:["Loading %s %s",t.method,t.url]},up.event.nobodyPrevents("up:proxy:load",e)?(n=t.send(),D.always(n,P),D.always(n,b),n):(D.microtask(b),Promise.reject(new Error("Event up:proxy:load was prevented")))},A=function(t){var e,n;if(n=t.request,t.url&&n.url!==t.url)return e=n.variant({method:t.method,url:t.url}),up.proxy.alias(n,e)},P=function(t){return t.isFatalError()?up.emit("up:proxy:fatal",{log:"Fatal error during request",request:t.request,response:t}):(t.isError()||A(t),up.emit("up:proxy:loaded",{log:["Server responded with HTTP %d (%d bytes)",t.status,t.text.length],request:t.request,response:t}))},b=function(){var t;"function"==typeof(t=T.shift())&&t()},n=r.alias,x=r.set,F=r.remove,u=r.clear,k=function(t){var e,n;if(n=a.numberAttr(t,"up-delay")||s.preloadDelay,t!==L)return L=t,i(),e=function(){return D.muteRejection(w(t)),L=null},M(e,n)},M=function(t,e){return S=setTimeout(t,e)},j=function(t){if(t===L)return L=void 0,i()},w=function(t,e){var n,r;return n=a.get(t),up.link.isSafe(n)?(r={log:["Preloading link %o",n],target:n},up.event.whenEmitted("up:link:preload",r).then(function(){var t;return t=up.link.followVariantForLink(n),t.preloadLink(n,e)})):Promise.reject(new Error("Won't preload unsafe link"))},h=function(t){return D.contains(s.safeMethods,t)},U=function(t,e){return D.contains(s.wrapMethods,t)&&(e.add(up.protocol.config.methodParam,t),t="POST"),t},up.compiler("a[up-preload], [up-href][up-preload]",function(t){if(up.link.isSafe(t))return t.addEventListener("mouseenter",function(e){if(up.link.shouldProcessEvent(e,t))return k(t);
}),t.addEventListener("mouseleave",function(){return j(t)})}),up.on("up:framework:reset",C),{preload:w,ajax:e,request:g,get:l,alias:n,clear:u,remove:F,isIdle:p,isBusy:c,isSafeMethod:h,wrapMethod:U,config:s}}(),up.ajax=up.proxy.ajax,up.request=up.proxy.request}.call(this),function(){up.link=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h,f,d,m;return d=up.util,o=up.element,m=function(t,e){var n,r;return null==e&&(e={}),r=null!=(n=e.target)?n:"body",up.replace(r,t,e)},u=function(t,e){var n,r;return n=o.get(t),r=a(n),r.followLink(n,e)},r=function(t,e){var n,r,i,u,a,l,c;return e=d.options(e),c=null!=(n=null!=(r=e.url)?r:t.getAttribute("up-href"))?n:t.getAttribute("href"),l=null!=(i=e.target)?i:t.getAttribute("up-target"),null==e.failTarget&&(e.failTarget=t.getAttribute("up-fail-target")),null==e.fallback&&(e.fallback=t.getAttribute("up-fallback")),null==e.transition&&(e.transition=o.booleanOrStringAttr(t,"up-transition")),null==e.failTransition&&(e.failTransition=o.booleanOrStringAttr(t,"up-fail-transition")),null==e.history&&(e.history=o.booleanOrStringAttr(t,"up-history")),null==e.reveal&&(e.reveal=null==(u=o.booleanOrStringAttr(t,"up-reveal"))||u),null==e.failReveal&&(e.failReveal=null==(a=o.booleanOrStringAttr(t,"up-fail-reveal"))||a),null==e.cache&&(e.cache=o.booleanAttr(t,"up-cache")),null==e.restoreScroll&&(e.restoreScroll=o.booleanAttr(t,"up-restore-scroll")),e.method=s(t,e),null==e.origin&&(e.origin=t),null==e.layer&&(e.layer=t.getAttribute("up-layer")),null==e.failLayer&&(e.failLayer=t.getAttribute("up-fail-layer")),null==e.confirm&&(e.confirm=t.getAttribute("up-confirm")),e=d.merge(e,up.motion.animateOptions(e,t)),up.browser.whenConfirmed(e).then(function(){return up.replace(l,c,e)})},i=function(t,e){return e=d.options(e),e.preload=!0,r(t,e)},s=function(t,e){var n,r,i,o;return null==e&&(e={}),n=null!=(r=null!=(i=null!=(o=e.method)?o:t.getAttribute("up-method"))?i:t.getAttribute("data-method"))?r:"GET",n.toUpperCase()},n=function(){},l=[],e=function(t,e){var n;return n=new up.FollowVariant(t,e),l.push(n),n.registerEvents(),n},c=function(t){return t=o.get(t),!!a(t,{"default":!1})},a=function(e,n){var r;return null==n&&(n={}),r=d.find(l,function(t){return t.matchesLink(e)}),n["default"]!==!1&&(r||(r=t)),r},h=function(t){if(!c(t))return t.setAttribute("up-follow","")},f=function(t,e){var n,r,i;return i=t.target,!!d.isUnmodifiedMouseEvent(t)&&(i===e||(r="a, [up-href], "+up.form.fieldSelector(),n=o.closest(i,r),!n||n===e))},p=function(t,e){var n;return n=s(t,e),up.proxy.isSafeMethod(n)},t=e("[up-target], [up-follow]",{follow:function(t,e){return r(t,e)},preload:function(t,e){return i(t,e)}}),up.macro("[up-dash]",function(t){var e,n;return n=o.booleanOrStringAttr(t,"up-dash"),t.removeAttribute("up-dash"),e={"up-preload":"","up-instant":""},n===!0?h(t):e["up-target"]=n,o.setMissingAttrs(t,e)}),up.macro("[up-expand]",function(t){var e,n,r,i,u,s,a,l,c,p;if(c=t.getAttribute("up-expand")||"a, [up-href]",r=o.all(t,c),n=r[0]){for(p=/^up-/,a={},a["up-href"]=n.getAttribute("href"),l=n.attributes,i=0,u=l.length;i<u;i++)e=l[i],s=e.name,s.match(p)&&(a[s]=e.value);return o.setMissingAttrs(t,a),t.removeAttribute("up-expand"),h(t)}}),{visit:m,follow:u,makeFollowable:h,isSafe:p,isFollowable:c,shouldProcessEvent:f,followMethod:s,addFollowVariant:e,followVariantForLink:a,allowDefault:n}}(),up.visit=up.link.visit,up.follow=up.link.follow}.call(this),function(){var t=[].slice;up.form=function(){var e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w;return b=up.util,i=up.element,r=new up.Config({validateTargets:["fieldset:has(&)","label:has(&)","form:has(&)"],fields:["select","input:not([type=submit]):not([type=image])","button[type]:not([type=submit])","textarea"],submitButtons:["input[type=submit]","input[type=image]","button[type=submit]","button:not([type])"],observeDelay:0}),h=function(){return r.reset()},o=function(){return r.fields.join(",")},u=function(t){return i.subtree(t,o())},s=function(t){var e,n;return n=u(t),(e=m(t))&&(n=b.toArray(n),n.push(e)),n},m=function(t){var e,n;return n=d(),e=document.activeElement,e&&i.matches(e,n)&&t.contains(e)?e:i.first(t,n)},d=function(){return r.submitButtons.join(",")},f=function(t,e){var n,r,o,u,s,a,l,c,p,h,f,d,m,v;return e=b.options(e),n=i.get(t),n=i.closest(n,"form"),m=null!=(r=null!=(o=e.target)?o:n.getAttribute("up-target"))?r:"body",v=null!=(s=null!=(a=e.url)?a:n.getAttribute("action"))?s:up.browser.url(),null==e.failTarget&&(e.failTarget=null!=(l=n.getAttribute("up-fail-target"))?l:i.toSelector(n)),null==e.reveal&&(e.reveal=null==(c=i.booleanOrStringAttr(n,"up-reveal"))||c),null==e.failReveal&&(e.failReveal=null==(p=i.booleanOrStringAttr(n,"up-fail-reveal"))||p),null==e.fallback&&(e.fallback=n.getAttribute("up-fallback")),null==e.history&&(e.history=null==(h=i.booleanOrStringAttr(n,"up-history"))||h),null==e.transition&&(e.transition=i.booleanOrStringAttr(n,"up-transition")),null==e.failTransition&&(e.failTransition=i.booleanOrStringAttr(n,"up-fail-transition")),null==e.method&&(e.method=null!=(f=null!=(d=null!=(u=n.getAttribute("up-method"))?u:n.getAttribute("data-method"))?d:n.getAttribute("method"))?f:"post"),null==e.cache&&(e.cache=i.booleanAttr(n,"up-cache")),null==e.restoreScroll&&(e.restoreScroll=i.booleanAttr(n,"up-restore-scroll")),null==e.origin&&(e.origin=n),null==e.layer&&(e.layer=n.getAttribute("up-layer")),null==e.failLayer&&(e.failLayer=n.getAttribute("up-fail-layer")),e.params=up.Params.fromForm(n),e=b.merge(e,up.motion.animateOptions(e,n)),e.validate&&(e.headers||(e.headers={}),e.transition=!1,e.failTransition=!1,e.headers[up.protocol.config.validateHeader]=e.validate),up.event.whenEmitted("up:form:submit",{log:"Submitting form",target:n}).then(function(){var t;return up.feedback.start(n),up.browser.canPushState()||e.history===!1?(t=up.replace(m,v,e),b.always(t,function(){return up.feedback.stop(n)}),t):(n.submit(),b.unresolvablePromise())})},c=function(){var e,n,o,s,a,l,c,h,f,d;return o=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],o=i.list(o),s=b.flatMap(o,u),n=null!=(c=null!=(h=b.extractCallback(e))?h:p(o[0]))?c:up.fail("up.observe: No change callback given"),l=b.extractOptions(e),l.delay=null!=(f=null!=(d=l.delay)?d:i.numberAttr(o[0],"up-delay"))?f:r.observeDelay,a=new up.FieldObserver(s,l,n),a.start(),a.stop},p=function(t){var e;if(e=t.getAttribute("up-observe"))return new Function("value","name",e)},e=function(t,e){return c(t,e,function(){return f(t)})},l=function(t,e){var n,o;return n=null!=(o=e.target)?o:t.getAttribute("up-validate"),n||(n=b.findResult(r.validateTargets,function(t){var n;if(n=i.resolveSelector(t,e.origin),i.first(n))return n})),n||up.fail("Could not find validation target for %o (tried defaults %o)",t,r.validateTargets),i.resolveSelector(n,e.origin)},w=function(t,e){var n,r,o;return n=i.get(t),e=b.options(e),e.origin=n,e.target=l(n,e),e.failTarget=e.target,null==e.reveal&&(e.reveal=null!=(o=i.booleanOrStringAttr(n,"up-reveal"))&&o),e.history=!1,e.validate=n.getAttribute("name")||":none",e=b.merge(e,up.motion.animateOptions(e,n)),r=up.submit(n,e)},y=function(t){var e,r,o,u,s,a;return s=void 0,u=void 0,i.matches(t,"input[type=checkbox]")?t.checked?(s=t.value,u=":checked"):u=":unchecked":i.matches(t,"input[type=radio]")?(r=n(t),o=t.getAttribute("name"),e=r.querySelector("input[type=radio]"+i.attributeSelector("name",o)+":checked"),e?(u=":checked",s=e.value):u=":unchecked"):s=t.value,a=[],b.isPresent(s)?(a.push(s),a.push(":present")):a.push(":blank"),b.isPresent(u)&&a.push(u),a},g=function(t,e){var r,o,u,s;return null==e&&(e={}),s=null!=(u=e.target)?u:t.getAttribute("up-switch"),o=n(t),b.isPresent(s)||up.fail("No switch target given for %o",t),r=y(t),b.each(i.all(o,s),function(t){return v(t,r)})},v=function(t,e){var n,r,o;return e||(e=y(a(t))),(n=t.getAttribute("up-hide-for"))?(n=b.splitValues(n),r=0===b.intersect(e,n).length):(o=(o=t.getAttribute("up-show-for"))?b.splitValues(o):[":present",":checked"],r=b.intersect(e,o).length>0),i.toggle(t,r),t.classList.add("up-switched")},a=function(t){var e,r,o;return e=n(t),o=i.all(e,"[up-switch]"),r=b.find(o,function(e){var n;return n=e.getAttribute("up-switch"),i.matches(t,n)}),r||b.fail("Could not find [up-switch] field for %o",t)},n=function(t){return i.closest(t,"form, body")},up.on("submit","form[up-target]",function(t,e){return up.event.consumeAction(t),b.muteRejection(f(e))}),up.on("change","[up-validate]",function(t,e){return b.muteRejection(w(e))}),up.compiler("[up-switch]",function(t){return g(t)}),up.on("change","[up-switch]",function(t,e){return g(e)}),up.compiler("[up-show-for]:not(.up-switched), [up-hide-for]:not(.up-switched)",function(t){return v(t)}),up.compiler("[up-observe]",function(t){return c(t)}),up.compiler("[up-autosubmit]",function(t){return e(t)}),up.compiler("[autofocus]",{batch:!0},function(t){return b.last(t).focus()}),up.on("up:framework:reset",h),{config:r,submit:f,observe:c,validate:w,autosubmit:e,fieldSelector:o,fields:u,submissionFields:s}}(),up.submit=up.form.submit,up.observe=up.form.observe,up.autosubmit=up.form.autosubmit,up.validate=up.form.validate}.call(this),function(){up.popup=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y;return g=up.util,c=up.element,u=new up.Config({openAnimation:"fade-in",closeAnimation:"fade-out",openDuration:150,closeDuration:100,openEasing:null,closeEasing:null,position:"bottom",align:"left",history:!1}),d=new up.Config({phase:"closed",anchor:null,popup:null,content:null,tether:null,position:null,align:null,sticky:null,url:null,coveredUrl:null,coveredTitle:null}),r=new up.DivertibleChain,f=function(){var t;return null!=(t=d.tether)&&t.destroy(),d.reset(),r.reset(),u.reset()},l=function(){return d.coveredTitle=null,d.coveredUrl=null},a=function(t){return d.tether=new up.Tether(g.only(d,"anchor","position","align")),d.popup=c.affix(d.tether.root,".up-popup",{"up-position":d.position,"up-align":d.align}),d.content=c.affix(d.popup,".up-popup-content"),up.fragment.createPlaceholder(t,d.content),c.hide(d.popup)},y=function(){return c.show(d.popup)},m=function(){var t;return null!=(t=d.tether)?t.sync():void 0},p=function(){return"opened"===d.phase||"opening"===d.phase},t=function(t,n){return r.asap(o,function(){return e(t,n)})},e=function(t,e){var n,r,i,o,s,l,p,h,f,v,b,w,k,S,E,T,A,F,C;return r=c.get(t),null==e&&(e={}),C=null!=(p=null!=(h=g.pluckKey(e,"url"))?h:r.getAttribute("up-href"))?p:r.getAttribute("href"),s=g.pluckKey(e,"html"),C||s||up.fail("up.popup.attach() requires either an { url } or { html } option"),F=null!=(v=g.pluckKey(e,"target"))?v:r.getAttribute("up-popup")||up.fail("No target selector given for [up-popup]"),l=null!=(b=null!=(w=e.position)?w:r.getAttribute("up-position"))?b:u.position,n=null!=(k=null!=(S=e.align)?S:r.getAttribute("up-align"))?k:u.align,null==e.animation&&(e.animation=null!=(E=r.getAttribute("up-animation"))?E:u.openAnimation),null==e.sticky&&(e.sticky=null!=(T=c.booleanAttr(r,"up-sticky"))?T:u.sticky),e.history=!!up.browser.canPushState()&&(null!=(A=null!=(f=e.history)?f:c.booleanOrStringAttr(r,"up-history"))?A:u.history),null==e.confirm&&(e.confirm=r.getAttribute("up-confirm")),e.method=up.link.followMethod(r,e),e.layer="popup",null==e.failTarget&&(e.failTarget=r.getAttribute("up-fail-target")),null==e.failLayer&&(e.failLayer=r.getAttribute("up-fail-layer")),e.provideTarget=function(){return a(F)},i=up.motion.animateOptions(e,r,{duration:u.openDuration,easing:u.openEasing}),o=g.merge(e,{animation:!1}),e.preload&&C?up.replace(F,C,e):up.browser.whenConfirmed(e).then(function(){return up.event.whenEmitted("up:popup:open",{url:C,anchor:r,log:"Opening popup"}).then(function(){var t;return d.phase="opening",d.anchor=r,d.position=l,d.align=n,e.history&&(d.coveredUrl=up.browser.url(),d.coveredTitle=document.title),d.sticky=e.sticky,t=s?up.extract(F,s,o):up.replace(F,C,o),t=t.then(function(){return y(),m(),up.animate(d.popup,e.animation,i)}),t=t.then(function(){return d.phase="opened",up.emit(d.popup,"up:popup:opened",{anchor:d.anchor,log:"Popup opened"})})})})},i=function(t){return r.asap(function(){return o(t)})},o=function(t){var e;return p()?(t=g.options(t,{animation:u.closeAnimation,history:d.coveredUrl,title:d.coveredTitle}),e=up.motion.animateOptions(t,{duration:u.closeDuration,easing:u.closeEasing}),g.assign(t,e),up.event.whenEmitted("up:popup:close",{anchor:d.anchor,log:"Closing popup"}).then(function(){return d.phase="closing",d.url=null,d.coveredUrl=null,d.coveredTitle=null,up.destroy(d.popup,t).then(function(){return d.phase="closed",d.tether.destroy(),d.tether=null,d.popup=null,d.content=null,d.anchor=null,d.sticky=null,up.emit("up:popup:closed",{anchor:d.anchor,log:"Popup closed"})})})):Promise.resolve()},h=function(t,n){return n=g.options(n),n.preload=!0,e(t,n)},v=function(e,n){return e.classList.contains("up-current")?i():t(e,n)},n=function(){if(!d.sticky)return l(),i()},s=function(t){var e;return e=c.get(t),!!c.closest(e,".up-popup")},up.link.addFollowVariant("[up-popup]",{follow:function(t,e){return v(t,e)},preload:function(t,e){return h(t,e)}}),up.on("click up:action:consumed",function(t){var e;if(e=t.target,!c.closest(e,".up-popup, [up-popup]"))return g.muteRejection(i())}),up.on("up:fragment:inserted",function(t,e){var r;if(s(e)){if(r=e.getAttribute("up-source"))return d.url=r}else if(t.origin&&s(t.origin))return g.muteRejection(n())}),up.event.onEscape(function(){return g.muteRejection(i())}),up.on("click",".up-popup [up-close]",function(t){return g.muteRejection(i()),up.event.consumeAction(t)}),up.on("up:history:restore",function(){return g.muteRejection(i())}),up.on("up:framework:reset",f),{attach:t,close:i,url:function(){return d.url},coveredUrl:function(){return d.coveredUrl},config:u,contains:s,isOpen:p,sync:m}}()}.call(this),function(){up.modal=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b,w,k,S,E,T,A,F,C,P,x;return F=up.util,c=up.element,u=new up.Config({maxWidth:null,width:null,height:null,history:!0,openAnimation:"fade-in",closeAnimation:"fade-out",openDuration:null,closeDuration:null,openEasing:null,closeEasing:null,backdropOpenAnimation:"fade-in",backdropCloseAnimation:"fade-out",closeLabel:"\xd7",closable:!0,sticky:!1,flavor:"default",position:null,template:function(t){return'<div class="up-modal">\n  <div class="up-modal-backdrop"></div>\n  <div class="up-modal-viewport">\n    <div class="up-modal-dialog">\n      <div class="up-modal-content"></div>\n      <div class="up-modal-close" up-close>'+t.closeLabel+"</div>\n    </div>\n  </div>\n</div>"}}),m=new up.Config({"default":{}}),T=new up.Config({phase:"closed",anchorElement:null,modalElement:null,sticky:null,closable:null,flavor:null,url:null,coveredUrl:null,coveredTitle:null,position:null}),n=new up.BodyShifter,r=new up.DivertibleChain,E=function(){return T.modalElement&&c.remove(T.modalElement),n.unshift(),T.reset(),r.reset(),u.reset(),m.reset()},A=function(){var t;return t=f("template"),F.evalOption(t,{closeLabel:f("closeLabel")})},l=function(){return T.coveredTitle=null,T.coveredUrl=null},k=function(t){var e;return e=".up-modal-"+t,T.modalElement.querySelector(e)},a=function(t,e){var n,r,i,o,u;return o=A(),T.modalElement=u=c.createFromHtml(o),u.setAttribute("up-flavor",T.flavor),F.isPresent(T.position)&&u.setAttribute("up-position",T.position),i=F.only(e,"width","maxWidth","height"),c.setStyle(k("dialog"),i),T.closable||(n=k("close"),c.remove(n)),r=k("content"),up.fragment.createPlaceholder(t,r),c.hide(u),document.body.appendChild(u)},C=function(){return c.show(T.modalElement)},g=function(){return"opened"===T.phase||"opening"===T.phase},v=function(t,e){return e=F.options(e),e.link=c.get(t),b(e)},S=function(t,e){return e=F.options(e),e.link=t,e.preload=!0,w(e)},x=function(t,e){return e=F.options(e),e.url=t,b(e)},p=function(t,e,n){return n=F.options(n),n.html=e,null==n.history&&(n.history=!1),n.target=t,b(n)},b=function(t){return r.asap(o,function(){return w(t)})},w=function(e){var r,i,o,s,l,p,h,d,m,v,g,y,b,w,k,S,E,A,x;return e=F.options(e),o=F.pluckKey(e,"link")||c.none(),x=null!=(s=null!=(l=F.pluckKey(e,"url"))?l:o.getAttribute("up-href"))?s:o.getAttribute("href"),i=F.pluckKey(e,"html"),A=null!=(v=F.pluckKey(e,"target"))?v:o.getAttribute("up-modal"),P(A),null==e.flavor&&(e.flavor=null!=(g=o.getAttribute("up-flavor"))?g:u.flavor),null==e.position&&(e.position=null!=(y=o.getAttribute("up-position"))?y:f("position",e.flavor)),e.position=F.evalOption(e.position,{link:o}),null==e.width&&(e.width=null!=(b=o.getAttribute("up-width"))?b:f("width",e.flavor)),null==e.maxWidth&&(e.maxWidth=null!=(w=o.getAttribute("up-max-width"))?w:f("maxWidth",e.flavor)),null==e.height&&(e.height=null!=(k=o.getAttribute("up-height"))?k:f("height")),null==e.animation&&(e.animation=null!=(S=o.getAttribute("up-animation"))?S:f("openAnimation",e.flavor)),e.animation=F.evalOption(e.animation,{position:e.position}),null==e.backdropAnimation&&(e.backdropAnimation=null!=(E=o.getAttribute("up-backdrop-animation"))?E:f("backdropOpenAnimation",e.flavor)),e.backdropAnimation=F.evalOption(e.backdropAnimation,{position:e.position}),null==e.sticky&&(e.sticky=null!=(p=c.booleanAttr(o,"up-sticky"))?p:f("sticky",e.flavor)),null==e.closable&&(e.closable=null!=(h=c.booleanAttr(o,"up-closable"))?h:f("closable",e.flavor)),null==e.confirm&&(e.confirm=o.getAttribute("up-confirm")),e.method=up.link.followMethod(o,e),e.layer="modal",null==e.failTarget&&(e.failTarget=o.getAttribute("up-fail-target")),null==e.failLayer&&(e.failLayer=null!=(d=o.getAttribute("up-fail-layer"))?d:"auto"),r=up.motion.animateOptions(e,o,{duration:f("openDuration",e.flavor),easing:f("openEasing",e.flavor)}),null==e.history&&(e.history=null!=(m=c.booleanOrStringAttr(o,"up-history"))?m:f("history",e.flavor)),up.browser.canPushState()||(e.history=!1),e.provideTarget=function(){return a(A,e)},e.preload?up.replace(A,x,e):up.browser.whenConfirmed(e).then(function(){return up.event.whenEmitted("up:modal:open",{url:x,log:"Opening modal"}).then(function(){var o,u;return T.phase="opening",T.flavor=e.flavor,T.sticky=e.sticky,T.closable=e.closable,T.position=e.position,e.history&&(T.coveredUrl=up.browser.url(),T.coveredTitle=document.title),o=F.merge(e,{animation:!1}),u=i?up.extract(A,i,o):up.replace(A,x,o),u=u.then(function(){return n.shift(),C(),t(e.animation,e.backdropAnimation,r)}),u=u.then(function(){return T.phase="opened",up.emit("up:modal:opened",{log:"Modal opened"})})})})},P=function(t){return F.isBlank(t)?up.fail("Cannot open a modal without a target selector"):"body"===t?up.fail("Cannot open the <body> in a modal"):void 0},i=function(t){return r.asap(function(){return o(t)})},o=function(e){var r,i,o,u,s,a;return e=F.options(e),g()?(a=null!=(u=e.animation)?u:f("closeAnimation"),a=F.evalOption(a,{position:T.position}),i=null!=(s=e.backdropAnimation)?s:f("backdropCloseAnimation"),i=F.evalOption(i,{position:T.position}),r=up.motion.animateOptions(e,{duration:f("closeDuration"),easing:f("closeEasing")}),o=F.options(F.except(e,"animation","duration","easing","delay"),{history:T.coveredUrl,title:T.coveredTitle}),up.event.whenEmitted(T.modalElement,"up:modal:close",{log:"Closing modal"}).then(function(){var e;return T.phase="closing",T.url=null,T.coveredUrl=null,T.coveredTitle=null,e=t(a,i,r),e=e.then(function(){return up.destroy(T.modalElement,o)}),e=e.then(function(){return n.unshift(),T.phase="closed",T.modalElement=null,T.flavor=null,T.sticky=null,T.closable=null,T.position=null,up.emit("up:modal:closed",{log:"Modal closed"})})})):Promise.resolve()},y=function(t){return null==t&&(t=!0),c.toggleClass(T.modalElement,"up-modal-animating",t)},t=function(t,e,n){var r;return up.motion.isNone(t)?Promise.resolve():(y(),r=Promise.all([up.animate(k("viewport"),t,n),up.animate(k("backdrop"),e,n)]),r=r.then(function(){return y(!1)}))},e=function(){if(!T.sticky)return l(),i()},s=function(t){var e;return e=c.get(t),!!c.closest(e,".up-modal")},h=function(t,e){return null==e&&(e={}),up.legacy.warn("up.modal.flavor() is deprecated. Use the up.modal.flavors property instead."),F.assign(d(t),e)},d=function(t){return m[t]||(m[t]={})},f=function(t,e){var n;return null==e&&(e=T.flavor),e&&(n=d(e)[t]),F.isMissing(n)&&(n=u[t]),n},up.link.addFollowVariant("[up-modal]",{follow:function(t,e){return v(t,e)},preload:function(t,e){return S(t,e)}}),up.on("click",".up-modal",function(t){var e;if(T.closable)return e=t.target,c.closest(e,".up-modal-dialog")||c.closest(e,"[up-modal]")?void 0:(up.event.consumeAction(t),F.muteRejection(i()))}),up.on("up:fragment:inserted",function(t,n){var r;if(s(n)){if(r=n.getAttribute("up-source"))return T.url=r}else if(t.origin&&s(t.origin)&&!up.popup.contains(n))return F.muteRejection(e())}),up.event.onEscape(function(){if(T.closable)return F.muteRejection(i())}),up.on("click",".up-modal [up-close]",function(t){return F.muteRejection(i()),up.event.consumeAction(t)}),up.macro("a[up-drawer], [up-href][up-drawer]",function(t){var e;return e=t.getAttribute("up-drawer"),c.setAttrs(t,{"up-modal":e,"up-flavor":"drawer"})}),m.drawer={openAnimation:function(t){switch(t.position){case"left":return"move-from-left";case"right":return"move-from-right"}},closeAnimation:function(t){switch(t.position){case"left":return"move-to-left";case"right":return"move-to-right"}},position:function(t){return F.isPresent(t.link)?F.horizontalScreenHalf(t.link):"left"}},up.on("up:history:restore",function(){return F.muteRejection(i())}),up.on("up:framework:reset",E),{visit:x,follow:v,extract:p,close:i,url:function(){return T.url},coveredUrl:function(){return T.coveredUrl},config:u,flavors:m,contains:s,isOpen:g,flavor:h}}()}.call(this),function(){up.tooltip=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h;return h=up.util,s=up.element,o=new up.Config({position:"top",align:"center",openAnimation:"fade-in",closeAnimation:"fade-out",openDuration:100,closeDuration:50,openEasing:null,closeEasing:null}),c=new up.Config({phase:"closed",anchor:null,tooltip:null,content:null,tether:null,position:null,align:null}),n=new up.DivertibleChain,l=function(){var t;return null!=(t=c.tether)&&t.destroy(),c.reset(),n.reset(),o.reset()},u=function(t){return c.tether=new up.Tether(h.only(c,"anchor","position","align")),c.tooltip=s.affix(c.tether.root,".up-tooltip",{"up-position":c.position,"up-align":c.align}),c.content=s.affix(c.tooltip,".up-tooltip-content"),t.text?c.content.innerText=t.text:c.content.innerHTML=t.html},p=function(){var t;return null!=(t=c.tether)?t.sync():void 0},t=function(t,r){return n.asap(i,function(){return e(t,r)})},e=function(t,e){var n,r,i,a,l,h,f,d,m,v,g,y,b,w,k;return null==e&&(e={}),r=s.get(t),l=null!=(f=e.html)?f:r.getAttribute("up-tooltip-html"),k=null!=(d=e.text)?d:r.getAttribute("up-tooltip"),h=null!=(m=null!=(v=e.position)?v:r.getAttribute("up-position"))?m:o.position,n=null!=(g=null!=(y=e.align)?y:r.getAttribute("up-align"))?g:o.align,a=null!=(b=null!=(w=e.animation)?w:s.booleanOrStringAttr(r,"up-animation"))?b:o.openAnimation,i=up.motion.animateOptions(e,r,{duration:o.openDuration,easing:o.openEasing}),c.phase="opening",c.anchor=r,c.position=h,c.align=n,u({text:k,html:l}),p(),up.animate(c.tooltip,a,i).then(function(){return c.phase="opened"})},r=function(t){return n.asap(function(){return i(t)})},i=function(t){var e;return a()?(t=h.options(t,{animation:o.closeAnimation}),e=up.motion.animateOptions(t,{duration:o.closeDuration,easing:o.closeEasing}),h.assign(t,e),c.phase="closing",up.destroy(c.tooltip,t).then(function(){return c.phase="closed",c.tether.destroy(),c.tether=null,c.tooltip=null,c.content=null,c.anchor=null})):Promise.resolve()},a=function(){return"opening"===c.phase||"opened"===c.phase},up.compiler("[up-tooltip], [up-tooltip-html]",function(e){return e.addEventListener("mouseenter",function(){return t(e)}),e.addEventListener("mouseleave",function(){return r()})}),up.on("click up:action:consumed",function(){return r()}),up.on("up:framework:reset",l),up.event.onEscape(function(){return r()}),{config:o,attach:t,isOpen:a,close:r,sync:p}}()}.call(this),function(){up.feedback=function(){var t,e,n,r,i,o,u,s,a,l,c,p,h,f,d,m,v,g,y,b;return m=up.util,u=up.element,i=new up.Config({currentClasses:["up-current"],navs:["[up-nav]"]}),c=void 0,o=void 0,p=function(){return i.reset(),c=void 0,o=void 0},t="up-active",e="a, [up-href]",a=function(){return i.navs.join(",")},l=function(t){if(m.isPresent(t))return m.normalizeUrl(t,{stripTrailingSlash:!0})},h=function(t){var e;return(e=t.upNormalizedUrls)||(e=r(t),t.upNormalizedUrls=e),e},r=function(t){var e,n,r,i,o,u,s,a,c,p;if(c=[],up.link.isSafe(t))for(u=["href","up-href","up-alias"],n=0,i=u.length;n<i;n++)if(e=u[n],p=t.getAttribute(e))for(s=m.splitValues(p),r=0,o=s.length;r<o;r++)a=s[r],"#"!==a&&(a=l(a),c.push(a));return c},n=function(){var t;return t=[up.browser.url(),up.modal.url(),up.modal.coveredUrl(),up.popup.url(),up.popup.coveredUrl()],new up.UrlSet(t,{normalizeUrl:l})},g=function(){if(c=o,o=n(),!m.isEqual(o,c))return v(document.body)},v=function(t){var n,r;return n=u.subtree(t,a()),r=m.flatMap(n,function(t){return u.subtree(t,e)}),y(r)},b=function(t){var n;return u.closest(t,a())?(n=u.subtree(t,e),y(n)):v(t)},y=function(t){return o||(o=n()),m.each(t,function(t){var e,n,r,u,s,a,l,c,p,f,d;if(d=h(t),e=t.classList,o.matchesAny(d)){for(l=i.currentClasses,p=[],n=0,s=l.length;n<s;n++)u=l[n],p.push(e.add(u));return p}for(c=i.currentClasses,f=[],r=0,a=c.length;r<a;r++)u=c[r],f.push(e.remove(u));return f})},s=function(t){return t=u.get(t),u.ancestor(t,e)||t},f=function(e){return s(e).classList.add(t)},d=function(e){return s(e).classList.remove(t)},up.on("up:history:pushed up:history:replaced up:history:restored up:modal:opened up:modal:closed up:popup:opened up:popup:closed",function(){return g()}),up.on("up:fragment:inserted",function(t,e){return b(e)}),up.on("up:framework:reset",p),{config:i,start:f,stop:d}}(),up.legacy.renamedModule("navigation","feedback")}.call(this),function(){up.radio=function(){var t,e,n,r;return r=up.util,t=new up.Config({hungry:["[up-hungry]"],hungryTransition:null}),n=function(){return t.reset()},e=function(){return t.hungry.join(",")},up.on("up:framework:reset",n),{config:t,hungrySelector:e}}()}.call(this),function(){up.rails=function(){var t,e,n;return n=up.util,t=up.element,e=function(){var t;return!!(window.Rails||(null!=(t=window.jQuery)?t.rails:void 0))},n.each(["method","confirm"],function(n){var r,i;return r="data-"+n,i="up-"+n,up.macro("["+r+"]",function(n){var o;if(e()&&up.link.isFollowable(n))return o={},o[i]=n.getAttribute(r),t.setMissingAttrs(n,o),n.removeAttribute(r)})})}()}.call(this),function(){up.framework.boot()}.call(this);
var svg_load = '<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml"attributeName="transform"type="rotate"from="0 20 20"to="360 20 20"dur="0.5s"repeatCount="indefinite"/></path></svg>';

function filter(e) {
    document.getElementById("filterInsert").classList.toggle("filterInsertA"), e.classList.toggle("filtroA"), filtroA = document.querySelector(".filtroA"), null != filtroA ? document.querySelector("body").setAttribute("style", "overflow-x: hidden;overflow-y: hidden;") : document.querySelector("body").setAttribute("style", "")
}

function cfilter(e, t, i) {
    if (1 == i) var n = "genero";
    if (2 == i) n = "year";
    var o = document.getElementById("cadenota").getAttribute(n);
    if (o)
        if (-1 != o.indexOf(t));
        else {
            var r = o + t + ",";
            document.getElementById("cadenota").setAttribute(n, r)
        }
    else document.getElementById("cadenota").setAttribute(n, t + ",");
    e.setAttribute("onclick", "nofilter(this, '" + t + "', '" + i + "');"), e.classList.toggle("filterON");
    var c = document.getElementById("contadorFiltro").getAttribute("cantidad");
    filtrovar = document.getElementById("contadorFiltro"), c ? (moreselect = parseInt(c) + parseInt(1), filtrovar.setAttribute("cantidad", moreselect), filtrovar.innerHTML = `Has seleccionado ${moreselect} elemento`) : (filtrovar.setAttribute("cantidad", 1), filtrovar.innerHTML = "Has seleccionado 1 elemento")
}

function nofilter(e, t, i) {
    if (1 == i) var n = "genero";
    if (2 == i) n = "year";
    var o = document.getElementById("cadenota").getAttribute(n);
    o && -1 != o.indexOf(t) && (cadenada = o.replace(t + ",", ""), document.getElementById("cadenota").setAttribute(n, cadenada)), e.setAttribute("onclick", "cfilter(this, '" + t + "', '" + i + "');"), e.classList.toggle("filterON");
    var r = document.getElementById("contadorFiltro").getAttribute("cantidad");
    r && (moreselect = parseInt(r) - parseInt(1), filtrovar = document.getElementById("contadorFiltro"), filtrovar.setAttribute("cantidad", moreselect), filtrovar.innerHTML = `Has seleccionado ${moreselect} elemento`)
}

function doneFilter() {
    nameSection = document.getElementById("cadenota").getAttribute("section"), yearManual = document.querySelector("input[name=theyear]").value, getDiv = document.getElementById("cadenota"), getDiv.getAttribute("genero") ? genero = getDiv.getAttribute("genero") : genero = ",", getDiv.getAttribute("year") ? year = getDiv.getAttribute("year") : year = ",", yearManual ? yearMa = yearManual : yearMa = "";
    var e = URLBASE + "/" + nameSection + "/filtro/" + genero + "/" + year + yearMa;
    window.location.href = e
}
up.on("up:link:follow", function(e) {
    document.querySelector(".cargaAjax").classList.add("CA_Active")
}), up.on("up:fragment:inserted", function(e) {
    echo.init({
        callback: function(e, t) {}
    }), existFilter = document.querySelector(".filtro"), existFilter && (idtype = document.getElementById("movidyMain").getAttribute("idtype"), document.getElementById("filterInsert").innerHTML = `<div class="boxFilter">\n\t\t<div id="Acciones">\n\t\t<div id="cadenota" section="${idtype}" genero="" year=""></div> \n\t\t<ul class="Ageneros">\n\t\t    <li onclick="cfilter(this, 'Acción', 1);"><img src="${URLBASE}/static/img/genres/action.svg"><b>Acción</b></li>\n\t\t    <li onclick="cfilter(this, 'Animación', 1);"><img src="${URLBASE}/static/img/genres/animation.svg"><b>Animación</b></li>\n\t\t    <li onclick="cfilter(this, 'Misterio', 1);"><img src="${URLBASE}/static/img/genres/mystere.svg"><b>Misterio</b></li>\n\t\t    <li onclick="cfilter(this, 'Bélica', 1);"><img src="${URLBASE}/static/img/genres/guerre.svg"><b>Bélica</b></li>\n\t\t    <li onclick="cfilter(this, 'Ciencia ficción', 1);"><img src="${URLBASE}/static/img//genres/science-fiction.svg"><b>Ciencia ficción</b></li>\n\t\t    <li onclick="cfilter(this, 'Comedia', 1);"><img src="${URLBASE}/static/img/genres/comedie.svg"><b>Comedia</b></li>\n\t\t    <li onclick="cfilter(this, 'Crimen', 1);"><img src="${URLBASE}/static/img/genres/policier.svg"><b>Crimen</b></li>\n\t\t    <li onclick="cfilter(this, 'Drama', 1);"><img src="${URLBASE}/static/img/genres/drame.svg"><b>Drama</b></li>\n\t\t    <li onclick="cfilter(this, 'Suspense', 1);"><img src="${URLBASE}/static/img/genres/suspense.svg"><b>Suspense</b></li>\n\t\t    <li onclick="cfilter(this, 'Familia', 1);"><img src="${URLBASE}/static/img/genres/famille.svg"><b>Familia</b></li>\n\t\t    <li onclick="cfilter(this, 'Música', 1);"><img src="${URLBASE}/static/img/genres/musical.svg"><b>Música</b></li>\n\t\t    <li onclick="cfilter(this, 'Romance', 1);"><img src="${URLBASE}/static/img/genres/romance.svg"><b>Romance</b></li>\n\t\t    <li onclick="cfilter(this, 'Terror', 1);"><img src="${URLBASE}/static/img/genres/horreur.svg"><b>Terror</b></li>\n\t\t    <li onclick="cfilter(this, 'Wester', 1);"><img src="${URLBASE}/static/img/genres/aventure.svg"><b>Western</b></li>\n\t\t</ul>\n\n\t\t<ul class="Ayears Ageneros">\n\t\t   <li onclick="cfilter(this, 2020, 2);" class="">2020</li>\n\t\t <li onclick="cfilter(this, 2019, 2);" class="">2019</li>\n\t\t    <li onclick="cfilter(this, 2018, 2);" class="">2018</li>\n\t\t    <li onclick="cfilter(this, 2017, 2);" class="">2017</li>\n\t\t    <li onclick="cfilter(this, 2016, 2);" class="">2016</li>\n\t\t    <li onclick="cfilter(this, 2015, 2);">2015</li>\n\t\t    <li onclick="cfilter(this, 2014, 2);">2014</li>\n\t\t    <li onclick="cfilter(this, 2013, 2);">2013</li>\n\t\t    <li onclick="cfilter(this, 2012, 2);">2012</li>\n\t\t    <li onclick="cfilter(this, 2011, 2);">2011</li>\n\t\t    <li onclick="cfilter(this, 2010, 2);">2010</li>\n\t\t    <li onclick="cfilter(this, 2009, 2);">2009</li>\n\t\t    <li onclick="cfilter(this, 2008, 2);">2008</li>\n\t\t    <li onclick="cfilter(this, 2007, 2);">2007</li>\n\t\t    <li onclick="cfilter(this, 2006, 2);">2006</li>\n\t\t\t<input type="text" name="theyear" placeholder="1985" onclick="cfilter(this);">\n\t\t</ul>\n\n\t\t\t<div class="selDf">\n\t\t\t<div id="filtrar" onclick="doneFilter();">Filtrar ${idtype}</div>\n\t\t\t<div id="contadorFiltro" cantidad="">Has seleccionado 0 elemento</div>\n\t\t\t</div></div></div>`), GenSelected = document.getElementById("movidyMain").getAttribute("genr"), GenSelected && (ArrayGen = GenSelected.split(","), ArrayGen.forEach(function(e) {
        if (e) {
            if ("Acción" == e) var t = 0;
            if ("Animación" == e) t = 1;
            if ("Misterio" == e) t = 2;
            if ("Bélica" == e) t = 3;
            if ("Ciencia ficción" == e) t = 4;
            if ("Comedia" == e) t = 5;
            if ("Crimen" == e) t = 6;
            if ("Drama" == e) t = 7;
            if ("Suspense" == e) t = 8;
            if ("Familia" == e) t = 9;
            if ("Música" == e) t = 10;
            if ("Romance" == e) t = 11;
            if ("Terror" == e) t = 12;
            if ("Wester" == e) t = 13;
            GenrElemts = document.querySelector(".Ageneros").getElementsByTagName("li")[t], cfilter(GenrElemts, e, 1)
        }
    })), YerSelected = document.getElementById("movidyMain").getAttribute("yers"), YerSelected && (ArrayYer = YerSelected.split(","), ArrayYer.forEach(function(e) {
        if (e) {
        	if ("2020" == e) var t = 0;
            if ("2019" == e) var t = 1;
            if ("2018" == e) t = 2;
            if ("2017" == e) t = 3;
            if ("2016" == e) t = 4;
            if ("2015" == e) t = 5;
            if ("2014" == e) t = 6;
            if ("2013" == e) t = 7;
            if ("2012" == e) t = 8;
            if ("2011" == e) t = 9;
            if ("2010" == e) t = 10;
            if ("2009" == e) t = 11;
            if ("2008" == e) t = 12;
            if ("2007" == e) t = 13;
            if ("2006" == e) t = 14;
            e < "2006" ? (YerasElemts = document.querySelector(".Ayears input"), YerasElemts.setAttribute("value", e), cfilter(YerasElemts, e, "2")) : (YerasElemts = document.querySelector(".Ayears").getElementsByTagName("li")[t], cfilter(YerasElemts, e, 2))
        }
    }))
});
var search_timeout, search_content_timeout, search_ajax, v_search_mode = 1,
    v_search_index = 0;

function liveSearch(e, t) {
    var i = document.getElementById("autoseach"),
        n = document.getElementById("InFrag"),
        o = i.value;
    if (o.length >= 1 ? i.setAttribute("style", "background: #fff;box-shadow: 0 7px 10px -5px #00000059;") : i.setAttribute("style", ""), o.length >= 3)
        if (n.setAttribute("style", ""), document.querySelector(".listSearch").classList.add("listSearchA"), t) {
            var r = new FormData;
            r.append("buscar", o), fetch(URLBASE + "/json/liveSeach", {
                method: "POST",
                body: r
            }).then(e => e.json()).then(e => {
                var t = document.querySelector(".listSearch");
                200 == e.status && (t.innerHTML = e.result), 404 == e.status && (t.innerHTML = '<div class="noResLive">No hubo ninguna coincidencia</div>'), 500 == e.status && (t.innerHTML = '<div class="noResLive">Caracteres Invalidos</div>'), 600 == e.status && (t.innerHTML = '<div class="noResLive">Hubo un error inesperado</div>')
            }).catch(function() {
                document.querySelector(".listSearch").innerHTML = '<div class="noResLive">Hubo un error inesperado</div>';
            })
        } else document.querySelector(".listSearch").innerHTML = "<p>" + svg_load + "</p>", clearTimeout(search_timeout), search_timeout = setTimeout("liveSearch(false, 1)", 500);
    else n.setAttribute("style", ""), document.querySelector(".listSearch").classList.remove("listSearchA")
}

function activeSeason(e, t) {
    temp = document.querySelector("." + t);
    var n = document.getElementsByClassName("clickSeason"),
        o = document.getElementsByClassName("season");
    for (i = 0; i < n.length; i++) n[i].classList.remove("clickAc");
    for (i = 0; i < o.length; i++) o[i].classList.remove("seasonAct");
    e.classList.add("clickAc"), temp.classList.add("seasonAct"), echo.init({
        callback: function(e, t) {}
    })
}

function activeSeasonModal(e, t) {
    temp = document.querySelector("." + t);
    var n = document.getElementsByClassName("clickSeasonModal"),
        o = document.getElementsByClassName("seasonModal");
    for (i = 0; i < n.length; i++) n[i].classList.remove("clickAc");
    for (i = 0; i < o.length; i++) o[i].classList.remove("seasonAct");
    e.classList.add("clickAc"), temp.classList.add("seasonAct")
}

function ShowCast(e) {
    e.remove(), document.querySelector(".HideCaste").classList.remove("HideCaste")
}

function readMore(e) {
    e.remove(), document.querySelector(".descCorta").classList.remove("descCorta")
}

function readMoreModal(e) {
    e.remove(), document.querySelector(".descCortaModal").classList.remove("descCortaModal")
}

function playM(e, t, n) {
    elemento = document.querySelector(".csita" + n);
    var o = document.getElementsByClassName("playMusic");
    for (i = 0; i < o.length; i++) pause = document.querySelector(".csita" + i), i != n && null != pause && (pause.pause(), o[i].querySelector(".material-icons").innerHTML = '<i class="material-icons">play_arrow</i>', o[i].setAttribute("style", "background: #0b2f4c; border: 2px solid #0b2f4c;"));
    null != elemento ? 1 == elemento.paused ? (elemento.play(), e.querySelector(".material-icons").innerHTML = '<i class="material-icons">pause</i>', e.setAttribute("style", "background: #1d67a2;border: 2px solid #378ed4;")) : (elemento.pause(), e.querySelector(".material-icons").innerHTML = '<i class="material-icons">play_arrow</i>', e.setAttribute("style", "background: #0b2f4c; border: 2px solid #0b2f4c;")) : (e.innerHTML = `<i class="material-icons">pause</i><audio class="csita${n}" controls autoplay src="${t}" style="display:none;"></audio>`, e.setAttribute("style", "background: #1d67a2;border: 2px solid #378ed4;"))
}
var total = 22,
    perPage = 6,
    filas = Math.ceil(parseInt(total) / parseInt(perPage));

function nextSongs(e, t, n) {
    if (t > n) {
        resta = parseInt(t) - parseInt(1), suma = parseInt(n) + parseInt(1), resta == n && e.remove();
        var o = document.getElementsByClassName("partsmusic");
        for (i = 0; i < o.length; i++) o[i].classList.remove("pagemusicON");
        document.querySelector(".musicPage" + suma).classList.add("pagemusicON"), e.setAttribute("onclick", "nextSongs(this, " + t + ", " + suma + ");"), restaA = parseInt(suma) - parseInt(1);
        var r = document.querySelector(".pageMusic");
        found = document.querySelector(".songprev"), restaA > 0 ? null != found ? found.setAttribute("onclick", "prevSongs(this, " + t + ", " + restaA + ");") : r.insertAdjacentHTML("afterbegin", '<span class="songprev" onclick="prevSongs(this, ' + t + ", " + restaA + ');"><i class="material-icons">chevron_left</i></span>') : found.remove()
    } else e.remove()
}

function prevSongs(e, t, n) {
    if (t > n) {
        resta = parseInt(n) - parseInt(1), 1 == n && e.remove();
        var o = document.getElementsByClassName("partsmusic");
        for (i = 0; i < o.length; i++) o[i].classList.remove("pagemusicON");
        document.querySelector(".musicPage" + n).classList.add("pagemusicON"), e.setAttribute("onclick", "prevSongs(this, " + t + ", " + resta + ");");
        var r = document.querySelector(".pageMusic");
        found = document.querySelector(".songnext"), n < t ? null != found ? found.setAttribute("onclick", "nextSongs(this, " + t + ", " + n + ");") : r.insertAdjacentHTML("beforeend", '<span class="songnext" onclick="nextSongs(this, ' + t + ", " + n + ');"><i class="material-icons">keyboard_arrow_right</i></span>') : found.remove()
    } else e.remove()
}

function cIdioma(e, t, i) {
    classLeng2 = document.querySelector(".LangVideo");
    var n = classLeng2.getElementsByTagName("LI").length;
    classLeng2.classList.add("LV_TA" + n), document.querySelector(".Return").insertAdjacentHTML("afterend", `<span class="Altern" onclick="openAltern(${t});"><img src="https://i.imgur.com/i9KIpLs.png"></span>`), iframe(i), document.querySelector(".AltWho" + t).getElementsByTagName("LI")[0].classList.add("AlTDK_A"), classLeng2.classList.add("LV_Active" + n), e.classList.add("idioma_Active"), setTimeout(function() {
        classLeng2.classList.add("LV_Active")
    }, 400), setTimeout(function() {
        deletePub(), document.getElementById("PrintRequest").classList.add("PrActive")
    }, 550)
}

function clickAlternative(e, t) {
    deletePub(), fondoAlternativo(), document.querySelector(".AlTDK_A").classList.remove("AlTDK_A"), e.classList.add("AlTDK_A"), document.querySelector(".FondoAlternativo").classList.remove("FondoAlternativoA"), document.querySelector(".SelectorAlternativo").classList.remove("SelectorAlternativoA"), iframe(t)
}

function backIdiomas() {
    classLeng2 = document.querySelector(".LangVideo");
    var e = classLeng2.getElementsByTagName("LI").length;
    document.querySelector(".AlTDK_A").classList.remove("AlTDK_A"), document.querySelector(".IFRAME iframe").remove(), document.querySelector(".Altern").remove(), document.getElementById("PrintRequest").classList.remove("PrActive"), setTimeout(function() {
        document.querySelector(".LangVideo").classList.remove("LV_Active")
    }, 50), setTimeout(function() {
        document.querySelector(".LangVideo").classList.remove("LV_Active" + e), document.querySelector(".idioma_Active").classList.remove("idioma_Active")
    }, 300)
}

function openAltern(e) {
    document.querySelector(".FondoAlternativo").classList.add("FondoAlternativoA"), document.querySelector(".AltWho" + e).classList.add("SelectorAlternativoA")
}

function iframe(e) {
    document.querySelector(".IFRAME").innerHTML = '<iframe src="' + e + '" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>'
}

function fondoAlternativo() {
    document.querySelector(".SelectorAlternativoA").classList.remove("SelectorAlternativoA"), document.querySelector(".FondoAlternativo").classList.remove("FondoAlternativoA")
}

function deletePub() {
    document.getElementById("SYS").insertAdjacentHTML("afterbegin", '<div class="deletedPub"><i class="loadingLang"></i><span>Comprobando el estado del video + eliminando la maxima cantidad de publicidad</span></div>'), setTimeout(function() {
        document.querySelector(".deletedPub").remove()
    }, 3e3)
}

function meN_Mo() {
    document.querySelector(".NavMob").classList.add("NavMobA"), document.querySelector(".fndo_Mo").classList.add("fndo_MoA")
}

function fndo_Mo(e) {
    document.querySelector(".NavMob").classList.remove("NavMobA"), document.querySelector(".fndo_Mo").classList.remove("fndo_MoA")
}

function seac_Mo() {
    document.querySelector(".seMobF").classList.add("seMobFA")
}

function cseac_Mo() {
    document.querySelector(".seMobF").classList.remove("seMobFA"), document.querySelector(".listSearch").classList.remove("listSearchA"), document.getElementById("autoseach").value = ""
}

! function(e, t) {
    "function" == typeof define && define.amd ? define(function() {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t : e.echo = t(e)
}(this, function(e) {
    "use strict";
    var t, i, n, o, r, c = {},
        l = function() {},
        s = function(e, t) {
            if (function(e) {
                    return null === e.offsetParent
                }(e)) return !1;
            var i = e.getBoundingClientRect();
            return i.right >= t.l && i.bottom >= t.t && i.left <= t.r && i.top <= t.b
        },
        a = function() {
            !o && i || (clearTimeout(i), i = setTimeout(function() {
                c.render(), i = null
            }, n))
        };
    return c.init = function(i) {
        var s = (i = i || {}).offset || 0,
            d = i.offsetVertical || s,
            u = i.offsetHorizontal || s,
            m = function(e, t) {
                return parseInt(e || t, 10)
            };
        t = {
            t: m(i.offsetTop, d),
            b: m(i.offsetBottom, d),
            l: m(i.offsetLeft, u),
            r: m(i.offsetRight, u)
        }, n = m(i.throttle, 250), o = !1 !== i.debounce, r = !!i.unload, l = i.callback || l, c.render(), document.addEventListener ? (e.addEventListener("scroll", a, !1), e.addEventListener("load", a, !1)) : (e.attachEvent("onscroll", a), e.attachEvent("onload", a))
    }, c.render = function(i) {
        for (var n, o, a = (i || document).querySelectorAll("[data-echo], [data-echo-background]"), d = a.length, u = {
                l: 0 - t.l,
                t: 0 - t.t,
                b: (e.innerHeight || document.documentElement.clientHeight) + t.b,
                r: (e.innerWidth || document.documentElement.clientWidth) + t.r
            }, m = 0; m < d; m++) o = a[m], s(o, u) ? (r && o.setAttribute("data-echo-placeholder", o.src), null !== o.getAttribute("data-echo-background") ? o.style.backgroundImage = "url(" + o.getAttribute("data-echo-background") + ")" : o.src !== (n = o.getAttribute("data-echo")) && (o.src = n), r || (o.removeAttribute("data-echo"), o.removeAttribute("data-echo-background")), l(o, "load")) : r && (n = o.getAttribute("data-echo-placeholder")) && (null !== o.getAttribute("data-echo-background") ? o.style.backgroundImage = "url(" + n + ")" : o.src = n, o.removeAttribute("data-echo-placeholder"), l(o, "unload"));
        d || c.detach()
    }, c.detach = function() {
        document.removeEventListener ? e.removeEventListener("scroll", a) : e.detachEvent("onscroll", a), clearTimeout(i)
    }, c
});

function optionsUser(e) {
    e.classList.toggle("uPerfilA"), document.querySelector(".uOptions").classList.toggle("uOptionsA")
}

function addCont(e) {
    e.classList.toggle("marcado-A"), document.querySelector(".ma-op").classList.toggle("ma-op-A")
}

function storeContent(e) {
    idSection = document.getElementById("movidyMain").getAttribute("secid");
    var t = document.querySelector(".marcado span");
    t.innerHTML = `<div class="loadSVGC">${svg_load}</div>`;
    var n = new FormData;
    n.append("cont", idSection), n.append("opt", e), fetch(URLBASE + "/json/storeContent", {
        method: "POST",
        body: n
    }).then(e => e.json()).then(e => {
        200 == e.status && (t.classList.add("marcado-B"), 1 == e.accion && (t.innerHTML = '<i class="material-icons">keyboard_arrow_down</i> Marcar como', t.classList.remove("marcado-B"), t.classList.remove("marcado-A")), 2 == e.accion && (t.innerHTML = '<i class="material-icons qion">remove_red_eye</i>Siguiendo'), 3 == e.accion && (t.innerHTML = '<i class="material-icons qion">favorite</i>Favoritos'), 4 == e.accion && (t.innerHTML = '<i class="material-icons qion">access_time</i>Pendiente'), 5 == e.accion && (t.innerHTML = '<i class="material-icons qion">visibility_off</i>Vista'), document.querySelector(".ma-op").classList.remove("ma-op-A"))
    }).catch(function(e) {})
}

function openAjaxLists(e) {
    idSection = document.getElementById("movidyMain").getAttribute("secid");
    var t = document.querySelector("#myList");
    t.classList.add("myListA"), t.innerHTML = `<div class="boxCa">${svg_load}</div>`;
    var n = new FormData;
    n.append("id", idSection), fetch(URLBASE + "/json/showlist", {
        method: "POST",
        body: n
    }).then(e => e.json()).then(e => {
        200 == e.status ? t.innerHTML = `<div class="popupList"><b>Mis listas</b><i class="material-icons closeList" onclick="closeList();">close</i>${e.results}</div>` : t.innerHTML = '<div class="popupList"><i class="material-icons closeList" onclick="closeList();">close</i><div class="ErrorVot">Hubo un error inesperado</div></div>'
    }).catch(function(e) {
        t.innerHTML = '<div class="popupList"><i class="material-icons closeList" onclick="closeList();">close</i><div class="ErrorVot">Hubo un error inesperado</div></div>'
    })
}

function addFicha(e, t) {
    idSection = document.getElementById("movidyMain").getAttribute("secid");
    var n = new FormData;
    n.append("idl", t), n.append("idcont", idSection), fetch(URLBASE + "/json/addcontentlist", {
        method: "POST",
        body: n
    }).then(e => e.json()).then(t => {
        200 == t.status && (e.innerHTML = "Añadido", e.setAttribute("style", "background: #0b5096;")), 202 == t.status && (e.innerHTML = "Añadir", e.setAttribute("style", "background: #292938;")), 404 == t.status && (document.querySelector(".popupList").insertAdjacentHTML("afterbegin", '<div class="ErrorComent">hubo un error inesperado</div>'), setTimeout(function() {
            document.querySelector(".ErrorComent").remove()
        }, 2300))
    }).catch(function(e) {
        document.querySelector(".popupList").insertAdjacentHTML("afterbegin", '<div class="ErrorComent">hubo un error inesperado</div>'), setTimeout(function() {
            document.querySelector(".ErrorComent").remove()
        }, 2300)
    })
}

function createList() {
    var e = document.getElementById("myList");
    e.classList.toggle("myListA"), e.innerHTML = '<div class="printBoxList"><i class="material-icons closeList" onclick="closeList();">close</i>\n\t\t\t<div class="errorDispl"></div>\n\t\t\t<input id="nameList" type="text" autocomplete="off" maxlength="60" placeholder="Nombre de la lista">\n\t\t\t<textarea id="descList" rows="2" maxlength="250" placeholder="Descripción de la lista (opcional)"></textarea>\n\t\t\t<label class="privList"> Lista Privada\n\t\t\t  <input id="chekt" type="checkbox" name="private" value="1">\n\t\t\t  <span class="checkmark"></span>\n\t\t\t</label>\n\t\t\t<div class="sendList" onclick="addlist();">Crear Lista</div>\n\t\t</div>';
    ! function() {
        for (var e = document.querySelectorAll("#descList"), t = 0; t < e.length; t++) e[t].addEventListener("paste", n), e[t].addEventListener("input", n), e[t].addEventListener("keyup", n);

        function n(e, t) {
            (t = t || e.target).style.height = "inherit", t.style.height = t.scrollHeight + "px"
        }
    }()
}

function addlist() {
    var e = document.getElementById("nameList").value,
        t = document.getElementById("descList").value,
        n = 1;
    if (document.getElementById("chekt").checked) n = 2;
    popupList = document.querySelector(".printBoxList"), popupList.insertAdjacentHTML("afterbegin", `<div class="waitSVG">${svg_load}</div>`);
    var o = new FormData;
    o.append("title", e), o.append("descr", t), o.append("private", n), fetch(URLBASE + "/json/addlist", {
        method: "POST",
        body: o
    }).then(e => e.json()).then(e => {
        document.querySelector(".waitSVG").remove(), 200 == e.status && (popupList.innerHTML = `${e.results}`), 303 != e.status && 202 != e.status && 304 != e.status && 203 != e.status && 404 != e.status && 500 != e.status || (document.querySelector(".errorDispl").insertAdjacentHTML("afterbegin", `<div class="ErrorComent">${e.results}</div>`), setTimeout(function() {
            document.querySelector(".ErrorComent").remove()
        }, 2300))
    }).catch(function(e) {
        document.querySelector(".waitSVG").remove(), document.querySelector(".errorDispl").innerHTML = '<div class="ErrorComent">Hubo un error inesperado</div>', setTimeout(function() {
            document.querySelector(".ErrorComent").remove()
        }, 2300)
    })
}

function favList(e, t) {
    var n = new FormData;
    n.append("idlist", t), fetch(URLBASE + "/json/favlist", {
        method: "POST",
        body: n
    }).then(e => e.json()).then(t => {
        200 == t.status && (e.innerHTML = '<i class="material-icons">favorite</i>', e.setAttribute("style", "background: #9a190f;")), 202 == t.status && (e.innerHTML = '<i class="material-icons">favorite_border</i>', e.setAttribute("style", ""))
    }).catch(function(e) {})
}

function editList(e) {
    document.querySelector(".editListMylist").classList.toggle("myListA")
}

function popupDL(e) {
    closeList();
    var t = document.getElementById("myList");
    t.classList.toggle("myListA"), t.innerHTML = `<div class="delCom"><p>¿Estas seguro de querer borrar esta lista?</p>\n\t\t<div class="butnsD" onclick="closeList();">No, cancelar</div>\n\t\t<div class="butnsD" onclick="deleteList(${e});">Sí, eliminar</div>\n\t</div>`
}

function closeList() {
    document.querySelector(".myListA").classList.remove("myListA")
}

function deleteList(e) {
    var t = new FormData;
    t.append("idlist", e), fetch(URLBASE + "/json/deletelist", {
        method: "POST",
        body: t
    }).then(e => e.json()).then(e => {
        200 == e.status && (popupList = document.querySelector(".delCom"), popupList.innerHTML = '<div class="listaEditada">Lista Eliminada</div>', window.setTimeout(function() {
            window.location.href = URLBASE + "/listas"
        }, 100))
    }).catch(function(e) {})
}

function editlistYA(e) {
    var t = document.getElementById("nameList").value,
        n = document.getElementById("descList").value,
        o = 1;
    if (document.getElementById("chekt").checked) o = 2;
    popupList = document.querySelector(".printBoxList"), popupList.insertAdjacentHTML("afterbegin", `<div class="waitSVG">${svg_load}</div>`);
    var i = new FormData;
    i.append("title", t), i.append("descr", n), i.append("private", o), i.append("idlist", e), fetch(URLBASE + "/json/editlist", {
        method: "POST",
        body: i
    }).then(e => e.json()).then(e => {
        document.querySelector(".waitSVG").remove(), 200 == e.status && (popupList.innerHTML = '<div class="listaEditada">Lista Editada</div>', window.setTimeout(function() {
            window.location.href = URLBASE + "/listas/" + e.results
        }, 500)), 303 != e.status && 202 != e.status && 304 != e.status && 203 != e.status && 404 != e.status && 500 != e.status || (document.querySelector(".errorDispl").insertAdjacentHTML("afterbegin", `<div class="ErrorComent">${e.results}</div>`), setTimeout(function() {
            document.querySelector(".ErrorComent").remove()
        }, 2300))
    }).catch(function(e) {
        document.querySelector(".waitSVG").remove(), document.querySelector(".errorDispl").innerHTML = '<div class="ErrorComent">Hubo un error inesperado</div>', setTimeout(function() {
            document.querySelector(".ErrorComent").remove()
        }, 2300)
    })
}

function openBoxL(e) {
    document.querySelector(".contepLIK").innerHTML = `<div class="boxAddLinks">\n\t\t<i class="material-icons closeList" onclick="closeLinks();">close</i>\n\t\t<span>Añadir enlaces</span>\n\t\t<div class="avisoBoxAddLinks">\n\t\t\t<p>La información incorrecta en los enlaces puede llevar a la eliminación de los mismos y/o a la suspensión de tu cuenta.</p>\n\t\t\t<p>Puedes subir un máximo de 5 enlaces al mismo tiempo.</p>\n\t\t\t<p>Servidores permitidos: Clipwatching, Gounlimited, Upvid, Powvideo, Vidtodo, Netu (waaw), Streamplay, Mixdrop, Jetload, Vidcloud, Upstream, Vidfast, Videobin, Mystream, Cloudvideo, Vidoza, Fembed, Doodstream, Streamtape</p>\n\t\t</div>\n\t\t\n\t\t<div class="boxinf">\n\t\t\t<div class="boxI1">\n\t\t\t\t<p>Introduce los enlaces separados por líneas</p>\n\t\t\t\t<textarea id="descList" rows="5"></textarea>\n\t\t\t</div>\n\t\t\t<div class="boxI2">\n\t\t\t\t<p>Idioma</p>\n\t\t\t\t<select id="idib" name="idioma">\n\t\t\t\t\t<option value="0">Seleccionar idioma</option>\n\t\t\t    \t<option value="1">Español</option>\n\t\t\t    \t<option value="2">Latino</option>\n\t\t\t    \t<option value="3">Subtitulado</option>\n\t\t\t    \t<option value="4">Ingles</option>\n\t\t\t\t</select>\n\n\t\t\t\t<p>Calidad</p>\n\n\t\t\t\t<select id="calb" name="calidad">\n\t\t\t\t\t<option value="0">Seleccionar calidad</option>\n\t\t\t\t\t<option value="1">1080p</option>\n\t\t\t\t\t<option value="2">720p</option>\n\t\t\t\t\t<option value="3">480p</option>\n\t\t\t\t\t<option value="4">360p</option>\n\t\t\t\t</select>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="repnote"></div>\n\t\t<div class="sendLinks" onclick="addlinks('${e}');">Añadir Enlaces</div>\n\t</div>`;
    ! function() {
        for (var e = document.querySelectorAll("#descList"), t = 0; t < e.length; t++) e[t].addEventListener("paste", n), e[t].addEventListener("input", n), e[t].addEventListener("keyup", n);

        function n(e, t) {
            (t = t || e.target).style.height = "inherit", t.style.height = t.scrollHeight + "px"
        }
    }()
}

function addlinks(e) {
    var t = document.getElementById("descList").value,
        n = document.getElementById("idib").value,
        o = document.getElementById("calb").value,
        i = new FormData;
    i.append("idcont", e), i.append("links", t), i.append("idioma", n), i.append("calidad", o), fetch(URLBASE + "/json/addlinks", {
        method: "POST",
        body: i
    }).then(e => e.json()).then(e => {
        if (202 == e.status) {
            var t = window.location.href;
            document.querySelector(".boxinf").innerHTML = e.result, document.querySelector(".repnote").remove(), document.querySelector(".sendLinks").remove(), document.querySelector(".boxinf").insertAdjacentHTML("afterend", `<a href="${t}">Actualizar página</a>`)
        }
        404 == e.status && (document.querySelector(".repnote").insertAdjacentHTML("afterbegin", `<div class="ErrorLinks">${e.result}</div>`), setTimeout(function() {
            document.querySelector(".ErrorLinks").remove()
        }, 2300))
    }).catch(function(e) {
        document.querySelector(".repnote").insertAdjacentHTML("afterbegin", '<div class="ErrorLinks">Hubo un error inesperado, intentelo nuevamente en unos minutos</div>'), setTimeout(function() {
            document.querySelector(".ErrorLinks").remove()
        }, 2300)
    })
}

function closeLinks() {
    document.querySelector(".boxAddLinks").remove()
}

function clinks(e, t, n) {
    var o = new FormData;
    o.append("option", "likedislike"), o.append("id", t), o.append("type", n), fetch(URLBASE + "/json/aclinks", {
        method: "POST",
        body: o
    }).then(e => e.json()).then(n => {
        var o = document.querySelector(".boxLk_" + t).getElementsByTagName("span");
        if (404 == n.status || (o[0].innerHTML = '<i class="material-icons">thumb_up_alt</i> <b>' + n.like + "</b>", o[1].innerHTML = '<i class="material-icons">thumb_down_alt</i> <b>' + n.dislike + "</b>"), 203 == n.status)
            for (e.classList.add("likeUP"), i = 0; i < o.length; i++) o[i].classList.remove("dlikeUP");
        if (204 == n.status)
            for (e.classList.add("dlikeUP"), i = 0; i < o.length; i++) o[i].classList.remove("likeUP")
    }).catch(function(e) {})
}

function boxR(e, t) {
    var n = "";
    if (1 == t) n = `<a href="${URLBASE}/panel?sec=enlaces&option=deleted&id=${e}" target="_blank">Eliminar Enlace</a>`;
    document.querySelector(".boxLateReport").insertAdjacentHTML("afterbegin", `<div class="fondlinks">\n \t<div class="boxReportL">\n \t<span>Reportar enlace</span>\n \t<p>Motivo del reporte</p>\n\n\t<select id="idib" name="motivo">\n\t\t\t<option value="1" selected>El enlace está caído o no funciona</option>\n\t\t\t<option value="2">La información del enlace no es correcta (idioma o calidad)</option>\n\t\t\t<option value="3">El enlace no pertenece a este episodio/película</option>\n\t\t\t<option value="4">Otro motivo</option>\n\t</select>\n\t${n}\n\t<div class="reportfailed"></div>\n\t\t<div class="reportLB">\n\t\t\t<div onclick="cancelReportL();">Cancelar</div>\n\t\t\t<div onclick="reportLink('${e}');">Reportar Enlace</div>\n\t\t</div>\n\n\t</div></div>`)
}

function reportLink(e) {
    var t = document.getElementById("idib").value,
        n = new FormData;
    n.append("option", "report"), n.append("id", e), n.append("type", t), fetch(URLBASE + "/json/aclinks", {
        method: "POST",
        body: n
    }).then(e => e.json()).then(e => {
        202 == e.status && (document.querySelector(".boxReportL").innerHTML = '<p class="sukreport">Gracias por reportar, el enlace será revisado tan pronto como sea posible.</p>', setTimeout(function() {
            document.querySelector(".fondlinks").remove()
        }, 2e3)), 203 == e.status && (document.querySelector(".boxReportL").innerHTML = '<p class="sukreport" style="background: #354e17;">Ya reportaste este mismo enlace.</p>', setTimeout(function() {
            document.querySelector(".fondlinks").remove()
        }, 2e3)), 404 == e.status && (document.querySelector(".reportfailed").innerHTML = "<p>Hubo un error inesperado, intentelo nuevamente en unos minutos</p>", setTimeout(function() {
            document.querySelector(".reportfailed p").remove()
        }, 2300))
    }).catch(function(e) {
        document.querySelector(".reportfailed").innerHTML = "<p>Hubo un error inesperado, intentelo nuevamente en unos minutos</p>", setTimeout(function() {
            document.querySelector(".reportfailed p").remove()
        }, 2300)
    })
}

function cancelReportL() {
    document.querySelector(".fondlinks").remove()
}

function carruselMovidy(e, t) {
    var n = document.querySelector(".contenedorCarrusel").getElementsByTagName("article");
    itemsAnchura = parseInt(e) / parseInt(t), itemsContenedor = parseInt(itemsAnchura) * parseInt(n.length), document.querySelector(".contenedorCarrusel").setAttribute("style", "width: " + itemsContenedor + "px;");
    for (var o = 0; o < n.length; o++)
        if (2 == t)
            if (0 == o || 2 == o || 4 == o) {
                var i = parseInt(itemsAnchura) - parseInt(10);
                n[o].setAttribute("style", "width: " + i + "px;margin: 0 10px 0 0;")
            } else n[o].setAttribute("style", "width: " + itemsAnchura + "px;");
    else n[o].setAttribute("style", "width: " + itemsAnchura + "px;")
}

function corkdw() {
    var e = document.getElementById("movidyCarrusel").getAttribute("items"),
        t = document.querySelector(".contenedorCarrusel").getElementsByTagName("article").length;
    Math.ceil(parseInt(t) / parseInt(e));
    t > e && document.querySelector(".carrNext").setAttribute("onclick", "nextC(this, 2);")
}

function nextC(e, t) {
    echo.init({
        callback: function(e, t) {}
    });
    var n = document.getElementById("movidyCarrusel").getAttribute("items"),
        o = document.querySelector(".contenedorCarrusel").getElementsByTagName("article").length,
        i = Math.ceil(parseInt(o) / parseInt(n));
    if (i >= t) {
        sumaPage = parseInt(t) + parseInt(1), e.setAttribute("onclick", "nextC(this, " + sumaPage + ");"), i < sumaPage && document.querySelector(".carrNext").setAttribute("style", "cursor: no-drop;opacity: 0.6;");
        var s = document.getElementById("movidyCarrusel").offsetWidth;
        itemsAnchura = parseInt(s) / parseInt(n), 2 == n ? (2 == t && (cosa = 2), 3 == t && (cosa = 4), 4 == t && (cosa = 6)) : (2 == t && (cosa = 1), 3 == t && (cosa = 2), 4 == t && (cosa = 3), 5 == t && (cosa = 4), 6 == t && (cosa = 5)), move = parseInt(itemsAnchura) * parseInt(cosa);
        var a = document.querySelector(".contenedorCarrusel").offsetWidth;
        document.querySelector(".contenedorCarrusel").setAttribute("style", "width: " + a + "px;margin-left:-" + move + "px;"), restaPage = parseInt(t) - parseInt(1), document.querySelector(".carrPrev").setAttribute("onclick", "prevC(this, " + restaPage + ", " + move + ");"), document.querySelector(".carrPrev").setAttribute("style", "cursor: pointer;opacity: 1;")
    }
}

function prevC(e, t, n) {
    var o = document.getElementById("movidyCarrusel").getAttribute("items"),
        i = document.querySelector(".contenedorCarrusel").getElementsByTagName("article").length;
    Math.ceil(parseInt(i) / parseInt(o));
    if (t > 0) {
        var s = document.getElementById("movidyCarrusel").offsetWidth;
        itemsAnchura = parseInt(s) / parseInt(o), 2 == o ? (2 == t && (move = parseInt(n) / parseInt(2)), 1 == t && (move = 0)) : move = parseInt(n) - parseInt(itemsAnchura), restaPage = parseInt(t) - parseInt(1), document.querySelector(".carrPrev").setAttribute("onclick", "prevC(this, " + restaPage + ", " + move + ");"), 0 == restaPage && document.querySelector(".carrPrev").setAttribute("style", "cursor: no-drop;opacity: 0.6;");
        var a = document.querySelector(".contenedorCarrusel").offsetWidth;
        document.querySelector(".contenedorCarrusel").setAttribute("style", "width: " + a + "px;margin-left:-" + move + "px;"), sumaPage = parseInt(t) + parseInt(1), document.querySelector(".carrNext").setAttribute("onclick", "nextC(this, " + sumaPage + ");"), document.querySelector(".carrNext").setAttribute("style", "")
    }
}

function updateS(e, t, n) {
    var o = document.querySelector("#myList");
    o.classList.add("myListA"), o.innerHTML = `<div class="boxCa">${svg_load}<span>Puede tardar hasta un minuto...</span></div>`;
    var i = new FormData;
    i.append("id", e), i.append("temp", t), i.append("epis", n), fetch(URLBASE + "/json/updateds", {
        method: "POST",
        body: i
    }).then(e => e.json()).then(e => {
        202 == e.status && (o.innerHTML = `<div class="boxCa"><div class="doneckd">Se ha actualizado correctamente, <a href="${window.location.href}">clica aquí para cargar la página de nuevo</a></div></div>`, setTimeout(function() {
            window.location.replace(window.location.href)
        }, 2e3)), 200 == e.status && (o.innerHTML = `<div class="boxCa"><div class="doneckd" style="background-color: #354e17;">Se podrá actualizar nuevamente pasadas las 2 Horas<b> tiempo transcurrido: ${e.data}</b></div></div>`, setTimeout(function() {
            o.classList.remove("myListA")
        }, 3e3)), 404 == e.status && (o.innerHTML = '<div class="boxCa"><div class="doneckd" style="background-color: #901107;">Hubo un error inesperado, intentelo nuevamente en unos minutos</div></div>', setTimeout(function() {
            o.classList.remove("myListA")
        }, 1500))
    }).catch(function(e) {
        o.innerHTML = '<div class="boxCa"><div class="doneckd" style="background-color: #901107;">Hubo un error inesperado, intentelo nuevamente en unos minutos</div></div>', setTimeout(function() {
            o.classList.remove("myListA")
        }, 1500)
    })
}
up.on("up:fragment:inserted", function(e) {
    document.querySelector(".cargaAjax").classList.remove("CA_Active")
}), up.on("up:fragment:inserted", function(e) {
    const t = document.getElementById("conct");
    if (null != t) {
        const e = e => {
                document.getElementById("changeNowAva").innerHTML = t.files[0].name
            },
            n = () => e(t.files[0]);
        t.addEventListener("change", n, !1)
    }
    if (document.cookie.indexOf("notif=") >= 0) {
        if (o = "notif", ((i = document.cookie.match("(^|[^;]+)\\s*" + o + "\\s*=\\s*([^;]+)")) ? i.pop() : "") > 0) {
            var n = document.querySelector(".not");
            null != n && (n.innerHTML = '<span></span><i class="material-icons">notifications</i>')
        }
    } else expiry = new Date, expiry.setTime(expiry.getTime() + 12e4), fetch(URLBASE + "/json/not", {
        method: "GET"
    }).then(e => e.json()).then(e => {
        var t = 0;
        if (e.data > 0) {
            var n = document.querySelector(".not");
            null != n && (n.classList.add("notAct"), n.innerHTML = `<b>${e.data}</b><i class="material-icons">notifications</i>`);
            t = e.data
        }
        document.cookie = "notif=" + t + "; expires=" + expiry.toGMTString()
    }).catch(function(e) {
        document.cookie = "notif=00; expires=" + expiry.toGMTString()
    });
    var o, i
}), up.on("up:fragment:inserted", function(e) {
    if (loadVIDEO = document.getElementById("loadVideos"), null != loadVIDEO) {
        loadVIDEO.innerHTML = `<div class="loadingvideo">${svg_load}</div>`, idV = loadVIDEO.getAttribute("secid");
        var t = new FormData;
        t.append("id", idV), fetch(URLBASE + "/json/loadVIDEOS", {
            method: "POST",
            body: t
        }).then(e => e.json()).then(e => {
            if (200 == e.status && (loadVIDEO.innerHTML = `<div id="SYS" style="background-image: linear-gradient(rgba(16, 16, 23, 0.87), #101017), url(${loadVIDEO.getAttribute("wallp")});background-size: 100%;">${e.result}</div>`), 404 == e.status && (loadVIDEO.innerHTML = '<p class="notVideo">Por desgracia no hay ningun video disponible</p>'), 500 != e.status && 600 != e.status || (loadVIDEO.classList.add("wrongd"), loadVIDEO.innerHTML = '<p class="wrongSection">Hubo un error inesperado, intentelo nuevamente en unos minutos</p>'), classLeng = document.querySelector(".LangVideo"), null != classLeng) {
                var t = classLeng.getElementsByTagName("LI").length;
                classLeng.classList.add("LV_TA" + t)
            }
        }).catch(function() {
            loadVIDEO.classList.add("wrongd"), loadVIDEO.innerHTML = '<p class="wrongSection">Hubo un error inesperado, intentelo nuevamente en unos minutos</p>'
        })
    }
    if (null != document.getElementById("movidyCarrusel")) {
        function n(e) {
        	if (document.getElementById('movidyCarrusel') != null){
            e.matches ? (document.getElementById("movidyCarrusel").setAttribute("items", "1"), corkdw()) : (document.getElementById("movidyCarrusel").setAttribute("items", "2"), corkdw())
        	}
        }
        
	        document.getElementById("movidyCarrusel").setAttribute("style", "display: block;");
	        var o = window.matchMedia("(max-width: 700px)");
	        n(o), o.addListener(n);
	        var i = document.getElementById("movidyCarrusel").getAttribute("items"),
	            s = function() {
	            	if (document.getElementById('movidyCarrusel') != null){
	                var e = document.getElementById("movidyCarrusel").getAttribute("items");
	                carruselMovidy(document.getElementById("movidyCarrusel").offsetWidth, e)
	            	}
	            };
        

        if (window.addEventListener("resize", s), s) carruselMovidy(document.getElementById("movidyCarrusel").offsetWidth, i);
        echo.init({
            callback: function(e, t) {}
        })
    }
});



function time(sump){
  	var fecha = new Date();
  	var horas = sump;
	fecha = new Date(fecha);
		fecha.setHours(fecha.getHours()+horas);
		fecha =  fecha.toISOString();
	var fecha_date = fecha.split('T');
	var fecha_time = fecha_date[1].split('.');
	var fecha_time = fecha_date[1].split(':');
		fecha_date = fecha_date[0];
	fecha = fecha_date+' '+fecha_time[0]+':'+fecha_time[1];
	return fecha;
}


function homeN(who, id) {
	var n = document.getElementsByClassName("navri");
	for (i = 0; i < n.length; i++) n[i].classList.remove("nav-A");
	var cnt = document.querySelector(".indexContArticle");
	 cnt.innerHTML = `<div class="loadingvideo">${svg_load}</div>`;

	var data = new FormData();
	data.append('id', id);

	fetch(URLBASE+'/json/indexJson', {
	method: 'POST',
	body: data
	}) .then(res => res.json())
	.then( data => {	

		if (data.status==202) {
			who.classList.add("nav-A");
			cnt.innerHTML = data.result;
			echo.init({ callback: function(e, t) {} });
		}

		if (data.status==200) {
			cnt.innerHTML = '<div class="noResLive"><p style="background: #1b1b1b;">No hay contenido disponible para esta opción</p></div>';
		}

		if (data.status==404) {
			cnt.innerHTML = '<div class="noResLive"><p>Hubo un error inesperado, intenelo mas tarde</p></div>';
		}

	}).catch(function(error) { 

		cnt.innerHTML = '<div class="noResLive"><p>Hubo un error inesperado, intenelo mas tarde</p></div>';

	});

}

function singN(who, id) {

	var n = document.getElementsByClassName("navri");
	for (i = 0; i < n.length; i++) n[i].classList.remove("nav-A");
	who.classList.add("nav-A");

	var k = document.getElementsByClassName("inE");
	for (i = 0; i < k.length; i++) k[i].classList.remove("ActOn");
	document.querySelector(".inE"+id).classList.add("ActOn");
	echo.init({ callback: function(e, t) {} });
}

function textAreaCrit(o) {
  o.style.height = "1px";
  o.style.height = (10+o.scrollHeight)+"px";
  document.querySelector(".charac b").innerHTML = o.value.length;
}

function star(vote) {

	var star = document.querySelector(".Star");
	for (i = 0; i < 5; i++) {
		var dS = star.getElementsByTagName("i")[i];
		if (i >= vote) {
			dS.innerHTML = 'star_border';
			dS.classList.remove("stOn");
		}else{
			dS.innerHTML = 'star';
			dS.classList.add("stOn");
		}
	}

	star.setAttribute('data', vote);
}

function sendCrit() {
	var spoi = 1;
	if (document.getElementById("chekt").checked) {
	 	var spoi = 2;
	}

	console.log(spoi);

	document.querySelector(".votCri").insertAdjacentHTML('afterbegin', '<div class="loadingCrit">'+svg_load+'</div>');
	var status = 200;	var msnError = '';
	var idSection = document.getElementById("movidyMain").getAttribute("secid");
	var star = document.querySelector(".Star").getAttribute("data");
	var crit = document.getElementById("init").value;
	var msnDiv = document.querySelector(".msnError");

	if (star == '' || star == null || star > 5 || star < 1 || crit.length >= 1001){ 
		var status = 404;
		if (crit.length > 1000) {
			var msnError = 'La critica supera los limites permitidos. (1000 caracteres)';
		}if (star == '' || star == null || star == 0) {
			var msnError = 'Se te ha olvidado votar';
		}
	}


	if (status != 404) {

		var data = new FormData();
		data.append('sec', idSection);
		data.append('vote', star);
		data.append('critica', crit);
		data.append('spoiler', spoi);

		fetch(URLBASE+'/json/sendCrit', {
		method: 'POST',
		body: data
		}) .then(res => res.json())
		.then( dato => {	

			if (dato.status == 201 || dato.status == 200) {
				// msnDiv.innerHTML = '<p class="doneVCo">'+dato.data+'</p>';
				document.querySelector(".miCrit").innerHTML = dato.crit;
				setTimeout(function() {
			        if (document.querySelector(".itemCrit") != null) {
			            document.querySelector(".itemCrit").classList.remove("doneRight");
			        }
		    	}, 1500);

		    	if (document.querySelector(".noCrit") != null) {
					document.querySelector(".noCrit").remove();
				}

			}
			if (dato.status == 404) {
				msnDiv.innerHTML = '<p>'+dato.data+'</p>';
			}

			document.querySelector(".loadingCrit").remove();

		}).catch(function(error) { 

			msnDiv.innerHTML = '<p>Hubo un error inesperado, intenelo mas tarde</p>';
			document.querySelector(".loadingCrit").remove();

		});


	}else {

		document.querySelector(".loadingCrit").remove();
		msnDiv.innerHTML = '<p>'+msnError+'</p>';

	}

	setTimeout(function() {
			
		if (document.querySelector(".msnError p") != null) {
            document.querySelector(".msnError p").remove();
        }
        
    }, 2300);
	

}


//Load Crit

function loadCrit(di, who, type, pag, total) {
	var idSection = document.getElementById("movidyMain").getAttribute("secid");
	var allcrt = document.getElementById("allCrit");
	
	if (di == 1) {
		who.innerHTML = '<span>'+svg_load+'</span>';
	}else {
		who.innerHTML = '<span class="loadIcon">'+svg_load+'</span>';

		var k = document.querySelectorAll(".selectTypeC span");
		for (i = 0; i < k.length; i++) {
			k[i].classList.remove("STC_A");
			k[i].removeAttribute('onclick');
		}
		who.classList.add("STC_A");
		
	}
	who.removeAttribute('onclick');
		
	var data = new FormData();
	data.append('sec', idSection);
	data.append('type', type);
	data.append('page', pag);
	data.append('total', total);

	fetch(URLBASE+'/json/loadCrit', {
		method: 'POST',
		body: data
	}) .then(res => res.json())
	.then( dato => {	
		if (di == 2) {
			document.querySelector(".loadIcon").remove();
			if (type == 1) {
				who.innerHTML = '<i class="material-icons">trending_up</i>';
			}else {
				who.innerHTML = '<i class="material-icons">fiber_new</i>';
			}
			var p = document.querySelectorAll(".selectTypeC span");
			p[0].setAttribute('onclick', 'loadCrit(2, this, 1, 1, '+total+');');
			p[1].setAttribute('onclick', 'loadCrit(2, this, 2, 1, '+total+');');
		}

		if (dato.status = 200) {
		
			if (di == 1) {
				who.insertAdjacentHTML('beforebegin', dato.crit);			
			}else {
				document.getElementById("allCrit").innerHTML = dato.crit;
			}

		}
		
		if (dato.page_data != '') {

			if (di == 1) {
				who.setAttribute('onclick', dato.page_data);
				who.innerHTML = '<span>Ver mas criticas / Votos</span>';		
			}else {
				
				allcrt.insertAdjacentHTML('beforeend', '<div class="pagCrit" onclick="'+dato.page_data+'"><span>Ver mas criticas / Votos</span></div>');	
			
			}

		}else {	

			if (di == 1) { who.remove();}	
		}

	}).catch(function(error) {	

		if (di == 2) {
			document.querySelector(".loadIcon").remove();
			if (type == 1) {
				who.innerHTML = '<i class="material-icons">trending_up</i>';
			}else {
				who.innerHTML = '<i class="material-icons">fiber_new</i>';
			}
			var p = document.querySelectorAll(".selectTypeC span");
			p[0].setAttribute('onclick', 'loadCrit(2, this, 1, 1, '+total+');');
			p[1].setAttribute('onclick', 'loadCrit(2, this, 2, 1, '+total+');');
		}else {

			who.setAttribute('onclick', 'loadCrit(1, this, '+type+', '+pag+', '+total+');');
			who.innerHTML = '<span>Ver mas criticas / Votos</span>';		
		
		}

		errorloadcrit(di);

	});

}

function votCrit(who, id, idcrit) {

		document.querySelector(".thisIS_"+idcrit+" .puntCri").insertAdjacentHTML('afterbegin', '<span class="loadIconV">'+svg_load+'</span>');	

		var data = new FormData();
		data.append('id', id);
		data.append('idcrit', idcrit);
		fetch(URLBASE+'/json/voteCrit', {
		method: 'POST',
		body: data
		}) .then(res => res.json())
		.then( dato => {	
			if (document.querySelector(".loadIconV") != null) {
				document.querySelector(".loadIconV").remove();
			}

			if (dato.status == 200) {
				document.querySelector(".thisIS_"+idcrit+" .tolVot").innerHTML = dato.data;

				var k = document.querySelectorAll(".thisIS_"+idcrit+" .puntCri div span");
				for (i = 0; i < k.length; i++) {
					k[i].classList.remove("voteDones");
				}
				who.classList.add("voteDones");
			}

			if (dato.status == 400 || dato.status == 404) {
				document.querySelector(".thisIS_"+idcrit+"").insertAdjacentHTML('afterend', '<span class="ErrorVotCre">'+dato.data+'</span>');	
				setTimeout(function () {
		        	document.querySelector(".ErrorVotCre").remove();
          		}, 2300);
			}

		}).catch(function(error) {

			if (document.querySelector(".loadIconV") != null) {
				document.querySelector(".loadIconV").remove();
			}
			document.querySelector(".thisIS_"+idcrit+"").insertAdjacentHTML('afterend', '<span class="ErrorVotCre">Hubo un error inesperado, intenelo mas tarde</span>');	
				setTimeout(function () {
		        	document.querySelector(".ErrorVotCre").remove();
          	}, 2300);

		});

}

function errorloadcrit(id) {
	var allcrt = document.getElementById("allCrit");
		if (document.querySelector(".errorLoadCrit") == null || document.querySelector(".errorLoadCrit") == '') {
          	if (id == 2) {
          		allcrt.insertAdjacentHTML('afterbegin', '<span class="errorLoadCrit">Hubo un error inesperado, intenelo mas tarde</span>');
          	}else {
          		document.querySelector(".pagCrit").insertAdjacentHTML('beforebegin', '<span class="errorLoadCrit">Hubo un error inesperado, intenelo mas tarde</span>');
          	}
        	setTimeout(function () {

		         document.querySelector(".errorLoadCrit").remove();

          	}, 2300);

        }
}

function editCrit(who) {
	document.getElementById("CriticarBox").classList.remove("closeCrit");
	var o = document.getElementById("init");
	if (o.value.length > 60) {
		textAreaCrit(o);
	}
	who.remove();
}

function removSpl(who) {
	who.remove();
}



function openBoxSett(id) {
	var e = document.getElementById("boxSettPr");
	if (id == 1) {
    	e.classList.toggle("boxSettPrA");
	}else {
		e.classList.toggle("boxSettPrA");
	}
}




function screenTest(e) {
  if (e.matches) {

  	if (document.querySelector('.xLat') != null || document.querySelector('.xLatSer') != null){
		document.querySelector(".navri").classList.remove('nav-A');
		document.querySelector(".inE1").classList.remove('ActOn');
	}

	if (document.querySelector('.xLat') != null){
		
		document.querySelector(".xLat").classList.add('inE', 'inE3', 'ActOn');
    	document.querySelector(".puthere").innerHTML = '<li class="deletethis navri nav-A" onclick="singN(this, 3);"><i class="material-icons">remove_red_eye</i>Visualizador</li>';
		
	}if (document.querySelector('.xLatSer') != null){
		document.querySelector(".xLatSer").classList.add('inE', 'inE3', 'ActOn');
    	document.querySelector(".puthere").innerHTML = '<li class="deletethis navri nav-A" onclick="singN(this, 3);"><i class="material-icons">list</i>Episodios</li>';
	}
	
  }else {

  	if (document.querySelector('.xLat') != null || document.querySelector('.xLatSer') != null){
  		document.querySelector(".navri").classList.add('nav-A');
		document.querySelector(".inE1").classList.add('ActOn');
		if (document.querySelector('.deletethis') != null){
			document.querySelector(".deletethis").remove();
		}
	}	

	if (document.querySelector('.xLat') != null){
		document.querySelector(".xLat").classList.remove('inE', 'inE3', 'ActOn');
    		
	}if (document.querySelector('.xLatSer') != null){
		document.querySelector(".xLatSer").classList.remove('inE', 'inE3', 'ActOn');
    }


  }
}



function nep(e, t) {
    var n = document.querySelector(".contepID_" + t),
        o = document.querySelector(".hidlinkAdd_2");
    null != o && (2 == t ? o.classList.add("hla_Ac") : o.classList.remove("hla_Ac"));
    var s = document.querySelector(".navEP2").getElementsByTagName("li");
    for (i = 0; i < s.length; i++) s[i].classList.remove("act_N");
    var a = document.getElementsByClassName("contEP");
    for (i = 0; i < a.length; i++) a[i].classList.remove("contEP_A");
    e.classList.add("act_N"), n.classList.add("contEP_A")
}


up.on("up:fragment:inserted", function(e) {
	var mql = window.matchMedia("(max-width: 1350px)");
    screenTest(mql), mql.addListener(screenTest);

// if (localStorage.getItem('welcome') != null){}else{
// 	document.querySelector("body").insertAdjacentHTML('afterbegin', '');
// }

});


// function okokok() {
// 	document.querySelector("#Welcome").remove();
// 	localStorage.setItem('welcome','Visto');
// }