(()=>{var Zs={5629:()=>{+function(O){"use strict";var v=".dropdown-backdrop",a='[data-toggle="dropdown"]',g=function(l){O(l).on("click.bs.dropdown",this.toggle)};g.VERSION="3.4.1";function o(l){var r=l.attr("data-target");r||(r=l.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var c=r!=="#"?O(document).find(r):null;return c&&c.length?c:l.parent()}function n(l){l&&l.which===3||(O(v).remove(),O(a).each(function(){var r=O(this),c=o(r),m={relatedTarget:this};!c.hasClass("open")||l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&O.contains(c[0],l.target)||(c.trigger(l=O.Event("hide.bs.dropdown",m)),!l.isDefaultPrevented()&&(r.attr("aria-expanded","false"),c.removeClass("open").trigger(O.Event("hidden.bs.dropdown",m))))}))}g.prototype.toggle=function(l){var r=O(this);if(!r.is(".disabled, :disabled")){var c=o(r),m=c.hasClass("open");if(n(),!m){"ontouchstart"in document.documentElement&&!c.closest(".navbar-nav").length&&O(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(O(this)).on("click",n);var i={relatedTarget:this};if(c.trigger(l=O.Event("show.bs.dropdown",i)),l.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(O.Event("shown.bs.dropdown",i))}return!1}},g.prototype.keydown=function(l){if(!(!/(38|40|27|32)/.test(l.which)||/input|textarea/i.test(l.target.tagName))){var r=O(this);if(l.preventDefault(),l.stopPropagation(),!r.is(".disabled, :disabled")){var c=o(r),m=c.hasClass("open");if(!m&&l.which!=27||m&&l.which==27)return l.which==27&&c.find(a).trigger("focus"),r.trigger("click");var i=" li:not(.disabled):visible a",h=c.find(".dropdown-menu"+i);if(!!h.length){var u=h.index(l.target);l.which==38&&u>0&&u--,l.which==40&&u<h.length-1&&u++,~u||(u=0),h.eq(u).trigger("focus")}}}};function p(l){return this.each(function(){var r=O(this),c=r.data("bs.dropdown");c||r.data("bs.dropdown",c=new g(this)),typeof l=="string"&&c[l].call(r)})}var d=O.fn.dropdown;O.fn.dropdown=p,O.fn.dropdown.Constructor=g,O.fn.dropdown.noConflict=function(){return O.fn.dropdown=d,this},O(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()}).on("click.bs.dropdown.data-api",a,g.prototype.toggle).on("keydown.bs.dropdown.data-api",a,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery)},7513:()=>{+function(O){"use strict";var v=function(o,n){this.init("popover",o,n)};if(!O.fn.tooltip)throw new Error("Popover requires tooltip.js");v.VERSION="3.4.1",v.DEFAULTS=O.extend({},O.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),v.prototype=O.extend({},O.fn.tooltip.Constructor.prototype),v.prototype.constructor=v,v.prototype.getDefaults=function(){return v.DEFAULTS},v.prototype.setContent=function(){var o=this.tip(),n=this.getTitle(),p=this.getContent();if(this.options.html){var d=typeof p;this.options.sanitize&&(n=this.sanitizeHtml(n),d==="string"&&(p=this.sanitizeHtml(p))),o.find(".popover-title").html(n),o.find(".popover-content").children().detach().end()[d==="string"?"html":"append"](p)}else o.find(".popover-title").text(n),o.find(".popover-content").children().detach().end().text(p);o.removeClass("fade top bottom left right in"),o.find(".popover-title").html()||o.find(".popover-title").hide()},v.prototype.hasContent=function(){return this.getTitle()||this.getContent()},v.prototype.getContent=function(){var o=this.$element,n=this.options;return o.attr("data-content")||(typeof n.content=="function"?n.content.call(o[0]):n.content)},v.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function a(o){return this.each(function(){var n=O(this),p=n.data("bs.popover"),d=typeof o=="object"&&o;!p&&/destroy|hide/.test(o)||(p||n.data("bs.popover",p=new v(this,d)),typeof o=="string"&&p[o]())})}var g=O.fn.popover;O.fn.popover=a,O.fn.popover.Constructor=v,O.fn.popover.noConflict=function(){return O.fn.popover=g,this}}(jQuery)},2623:()=>{+function(O){"use strict";function v(o,n){this.$body=O(document.body),this.$scrollElement=O(o).is(document.body)?O(window):O(o),this.options=O.extend({},v.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",O.proxy(this.process,this)),this.refresh(),this.process()}v.VERSION="3.4.1",v.DEFAULTS={offset:10},v.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},v.prototype.refresh=function(){var o=this,n="offset",p=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),O.isWindow(this.$scrollElement[0])||(n="position",p=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var d=O(this),l=d.data("target")||d.attr("href"),r=/^#./.test(l)&&O(l);return r&&r.length&&r.is(":visible")&&[[r[n]().top+p,l]]||null}).sort(function(d,l){return d[0]-l[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},v.prototype.process=function(){var o=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),p=this.options.offset+n-this.$scrollElement.height(),d=this.offsets,l=this.targets,r=this.activeTarget,c;if(this.scrollHeight!=n&&this.refresh(),o>=p)return r!=(c=l[l.length-1])&&this.activate(c);if(r&&o<d[0])return this.activeTarget=null,this.clear();for(c=d.length;c--;)r!=l[c]&&o>=d[c]&&(d[c+1]===void 0||o<d[c+1])&&this.activate(l[c])},v.prototype.activate=function(o){this.activeTarget=o,this.clear();var n=this.selector+'[data-target="'+o+'"],'+this.selector+'[href="'+o+'"]',p=O(n).parents("li").addClass("active");p.parent(".dropdown-menu").length&&(p=p.closest("li.dropdown").addClass("active")),p.trigger("activate.bs.scrollspy")},v.prototype.clear=function(){O(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function a(o){return this.each(function(){var n=O(this),p=n.data("bs.scrollspy"),d=typeof o=="object"&&o;p||n.data("bs.scrollspy",p=new v(this,d)),typeof o=="string"&&p[o]()})}var g=O.fn.scrollspy;O.fn.scrollspy=a,O.fn.scrollspy.Constructor=v,O.fn.scrollspy.noConflict=function(){return O.fn.scrollspy=g,this},O(window).on("load.bs.scrollspy.data-api",function(){O('[data-spy="scroll"]').each(function(){var o=O(this);a.call(o,o.data())})})}(jQuery)},9365:()=>{+function(O){"use strict";var v=function(n){this.element=O(n)};v.VERSION="3.4.1",v.TRANSITION_DURATION=150,v.prototype.show=function(){var n=this.element,p=n.closest("ul:not(.dropdown-menu)"),d=n.data("target");if(d||(d=n.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var l=p.find(".active:last a"),r=O.Event("hide.bs.tab",{relatedTarget:n[0]}),c=O.Event("show.bs.tab",{relatedTarget:l[0]});if(l.trigger(r),n.trigger(c),!(c.isDefaultPrevented()||r.isDefaultPrevented())){var m=O(document).find(d);this.activate(n.closest("li"),p),this.activate(m,m.parent(),function(){l.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:l[0]})})}}},v.prototype.activate=function(n,p,d){var l=p.find("> .active"),r=d&&O.support.transition&&(l.length&&l.hasClass("fade")||!!p.find("> .fade").length);function c(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),d&&d()}l.length&&r?l.one("bsTransitionEnd",c).emulateTransitionEnd(v.TRANSITION_DURATION):c(),l.removeClass("in")};function a(n){return this.each(function(){var p=O(this),d=p.data("bs.tab");d||p.data("bs.tab",d=new v(this)),typeof n=="string"&&d[n]()})}var g=O.fn.tab;O.fn.tab=a,O.fn.tab.Constructor=v,O.fn.tab.noConflict=function(){return O.fn.tab=g,this};var o=function(n){n.preventDefault(),a.call(O(this),"show")};O(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery)},1662:()=>{+function(O){"use strict";var v=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],g=/^aria-[\w-]*$/i,o={"*":["class","dir","id","lang","role",g],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,p=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function d(i,h){var u=i.nodeName.toLowerCase();if(O.inArray(u,h)!==-1)return O.inArray(u,a)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(p)):!0;for(var f=O(h).filter(function(b,P){return P instanceof RegExp}),S=0,y=f.length;S<y;S++)if(u.match(f[S]))return!0;return!1}function l(i,h,u){if(i.length===0)return i;if(u&&typeof u=="function")return u(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=i;for(var S=O.map(h,function(x,_){return _}),y=O(f.body).find("*"),b=0,P=y.length;b<P;b++){var E=y[b],N=E.nodeName.toLowerCase();if(O.inArray(N,S)===-1){E.parentNode.removeChild(E);continue}for(var T=O.map(E.attributes,function(x){return x}),A=[].concat(h["*"]||[],h[N]||[]),R=0,M=T.length;R<M;R++)d(T[R],A)||E.removeAttribute(T[R].nodeName)}return f.body.innerHTML}var r=function(i,h){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,h)};r.VERSION="3.4.1",r.TRANSITION_DURATION=150,r.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:o},r.prototype.init=function(i,h,u){if(this.enabled=!0,this.type=i,this.$element=O(h),this.options=this.getOptions(u),this.$viewport=this.options.viewport&&O(document).find(O.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),S=f.length;S--;){var y=f[S];if(y=="click")this.$element.on("click."+this.type,this.options.selector,O.proxy(this.toggle,this));else if(y!="manual"){var b=y=="hover"?"mouseenter":"focusin",P=y=="hover"?"mouseleave":"focusout";this.$element.on(b+"."+this.type,this.options.selector,O.proxy(this.enter,this)),this.$element.on(P+"."+this.type,this.options.selector,O.proxy(this.leave,this))}}this.options.selector?this._options=O.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},r.prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.getOptions=function(i){var h=this.$element.data();for(var u in h)h.hasOwnProperty(u)&&O.inArray(u,v)!==-1&&delete h[u];return i=O.extend({},this.getDefaults(),h,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=l(i.template,i.whiteList,i.sanitizeFn)),i},r.prototype.getDelegateOptions=function(){var i={},h=this.getDefaults();return this._options&&O.each(this._options,function(u,f){h[u]!=f&&(i[u]=f)}),i},r.prototype.enter=function(i){var h=i instanceof this.constructor?i:O(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h)),i instanceof O.Event&&(h.inState[i.type=="focusin"?"focus":"hover"]=!0),h.tip().hasClass("in")||h.hoverState=="in"){h.hoverState="in";return}if(clearTimeout(h.timeout),h.hoverState="in",!h.options.delay||!h.options.delay.show)return h.show();h.timeout=setTimeout(function(){h.hoverState=="in"&&h.show()},h.options.delay.show)},r.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},r.prototype.leave=function(i){var h=i instanceof this.constructor?i:O(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h)),i instanceof O.Event&&(h.inState[i.type=="focusout"?"focus":"hover"]=!1),!h.isInStateTrue()){if(clearTimeout(h.timeout),h.hoverState="out",!h.options.delay||!h.options.delay.hide)return h.hide();h.timeout=setTimeout(function(){h.hoverState=="out"&&h.hide()},h.options.delay.hide)}},r.prototype.show=function(){var i=O.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var h=O.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!h)return;var u=this,f=this.tip(),S=this.getUID(this.type);this.setContent(),f.attr("id",S),this.$element.attr("aria-describedby",S),this.options.animation&&f.addClass("fade");var y=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,b=/\s?auto?\s?/i,P=b.test(y);P&&(y=y.replace(b,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?f.appendTo(O(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var E=this.getPosition(),N=f[0].offsetWidth,T=f[0].offsetHeight;if(P){var A=y,R=this.getPosition(this.$viewport);y=y=="bottom"&&E.bottom+T>R.bottom?"top":y=="top"&&E.top-T<R.top?"bottom":y=="right"&&E.right+N>R.width?"left":y=="left"&&E.left-N<R.left?"right":y,f.removeClass(A).addClass(y)}var M=this.getCalculatedOffset(y,E,N,T);this.applyPlacement(M,y);var x=function(){var _=u.hoverState;u.$element.trigger("shown.bs."+u.type),u.hoverState=null,_=="out"&&u.leave(u)};O.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",x).emulateTransitionEnd(r.TRANSITION_DURATION):x()}},r.prototype.applyPlacement=function(i,h){var u=this.tip(),f=u[0].offsetWidth,S=u[0].offsetHeight,y=parseInt(u.css("margin-top"),10),b=parseInt(u.css("margin-left"),10);isNaN(y)&&(y=0),isNaN(b)&&(b=0),i.top+=y,i.left+=b,O.offset.setOffset(u[0],O.extend({using:function(M){u.css({top:Math.round(M.top),left:Math.round(M.left)})}},i),0),u.addClass("in");var P=u[0].offsetWidth,E=u[0].offsetHeight;h=="top"&&E!=S&&(i.top=i.top+S-E);var N=this.getViewportAdjustedDelta(h,i,P,E);N.left?i.left+=N.left:i.top+=N.top;var T=/top|bottom/.test(h),A=T?N.left*2-f+P:N.top*2-S+E,R=T?"offsetWidth":"offsetHeight";u.offset(i),this.replaceArrow(A,u[0][R],T)},r.prototype.replaceArrow=function(i,h,u){this.arrow().css(u?"left":"top",50*(1-i/h)+"%").css(u?"top":"left","")},r.prototype.setContent=function(){var i=this.tip(),h=this.getTitle();this.options.html?(this.options.sanitize&&(h=l(h,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(h)):i.find(".tooltip-inner").text(h),i.removeClass("fade in top bottom left right")},r.prototype.hide=function(i){var h=this,u=O(this.$tip),f=O.Event("hide.bs."+this.type);function S(){h.hoverState!="in"&&u.detach(),h.$element&&h.$element.removeAttr("aria-describedby").trigger("hidden.bs."+h.type),i&&i()}if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),O.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",S).emulateTransitionEnd(r.TRANSITION_DURATION):S(),this.hoverState=null,this},r.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},r.prototype.hasContent=function(){return this.getTitle()},r.prototype.getPosition=function(i){i=i||this.$element;var h=i[0],u=h.tagName=="BODY",f=h.getBoundingClientRect();f.width==null&&(f=O.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var S=window.SVGElement&&h instanceof window.SVGElement,y=u?{top:0,left:0}:S?null:i.offset(),b={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},P=u?{width:O(window).width(),height:O(window).height()}:null;return O.extend({},f,b,P,y)},r.prototype.getCalculatedOffset=function(i,h,u,f){return i=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-u/2}:i=="top"?{top:h.top-f,left:h.left+h.width/2-u/2}:i=="left"?{top:h.top+h.height/2-f/2,left:h.left-u}:{top:h.top+h.height/2-f/2,left:h.left+h.width}},r.prototype.getViewportAdjustedDelta=function(i,h,u,f){var S={top:0,left:0};if(!this.$viewport)return S;var y=this.options.viewport&&this.options.viewport.padding||0,b=this.getPosition(this.$viewport);if(/right|left/.test(i)){var P=h.top-y-b.scroll,E=h.top+y-b.scroll+f;P<b.top?S.top=b.top-P:E>b.top+b.height&&(S.top=b.top+b.height-E)}else{var N=h.left-y,T=h.left+y+u;N<b.left?S.left=b.left-N:T>b.right&&(S.left=b.left+b.width-T)}return S},r.prototype.getTitle=function(){var i,h=this.$element,u=this.options;return i=h.attr("data-original-title")||(typeof u.title=="function"?u.title.call(h[0]):u.title),i},r.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},r.prototype.tip=function(){if(!this.$tip&&(this.$tip=O(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},r.prototype.enable=function(){this.enabled=!0},r.prototype.disable=function(){this.enabled=!1},r.prototype.toggleEnabled=function(){this.enabled=!this.enabled},r.prototype.toggle=function(i){var h=this;i&&(h=O(i.currentTarget).data("bs."+this.type),h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h))),i?(h.inState.click=!h.inState.click,h.isInStateTrue()?h.enter(h):h.leave(h)):h.tip().hasClass("in")?h.leave(h):h.enter(h)},r.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},r.prototype.sanitizeHtml=function(i){return l(i,this.options.whiteList,this.options.sanitizeFn)};function c(i){return this.each(function(){var h=O(this),u=h.data("bs.tooltip"),f=typeof i=="object"&&i;!u&&/destroy|hide/.test(i)||(u||h.data("bs.tooltip",u=new r(this,f)),typeof i=="string"&&u[i]())})}var m=O.fn.tooltip;O.fn.tooltip=c,O.fn.tooltip.Constructor=r,O.fn.tooltip.noConflict=function(){return O.fn.tooltip=m,this}}(jQuery)},6770:O=>{var v=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},a=-1,g=1,o=0;v.Diff=function(n,p){return[n,p]},v.prototype.diff_main=function(n,p,d,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var r=l;if(n==null||p==null)throw new Error("Null input. (diff_main)");if(n==p)return n?[new v.Diff(o,n)]:[];typeof d=="undefined"&&(d=!0);var c=d,m=this.diff_commonPrefix(n,p),i=n.substring(0,m);n=n.substring(m),p=p.substring(m),m=this.diff_commonSuffix(n,p);var h=n.substring(n.length-m);n=n.substring(0,n.length-m),p=p.substring(0,p.length-m);var u=this.diff_compute_(n,p,c,r);return i&&u.unshift(new v.Diff(o,i)),h&&u.push(new v.Diff(o,h)),this.diff_cleanupMerge(u),u},v.prototype.diff_compute_=function(n,p,d,l){var r;if(!n)return[new v.Diff(g,p)];if(!p)return[new v.Diff(a,n)];var c=n.length>p.length?n:p,m=n.length>p.length?p:n,i=c.indexOf(m);if(i!=-1)return r=[new v.Diff(g,c.substring(0,i)),new v.Diff(o,m),new v.Diff(g,c.substring(i+m.length))],n.length>p.length&&(r[0][0]=r[2][0]=a),r;if(m.length==1)return[new v.Diff(a,n),new v.Diff(g,p)];var h=this.diff_halfMatch_(n,p);if(h){var u=h[0],f=h[1],S=h[2],y=h[3],b=h[4],P=this.diff_main(u,S,d,l),E=this.diff_main(f,y,d,l);return P.concat([new v.Diff(o,b)],E)}return d&&n.length>100&&p.length>100?this.diff_lineMode_(n,p,l):this.diff_bisect_(n,p,l)},v.prototype.diff_lineMode_=function(n,p,d){var l=this.diff_linesToChars_(n,p);n=l.chars1,p=l.chars2;var r=l.lineArray,c=this.diff_main(n,p,!1,d);this.diff_charsToLines_(c,r),this.diff_cleanupSemantic(c),c.push(new v.Diff(o,""));for(var m=0,i=0,h=0,u="",f="";m<c.length;){switch(c[m][0]){case g:h++,f+=c[m][1];break;case a:i++,u+=c[m][1];break;case o:if(i>=1&&h>=1){c.splice(m-i-h,i+h),m=m-i-h;for(var S=this.diff_main(u,f,!1,d),y=S.length-1;y>=0;y--)c.splice(m,0,S[y]);m=m+S.length}h=0,i=0,u="",f="";break}m++}return c.pop(),c},v.prototype.diff_bisect_=function(n,p,d){for(var l=n.length,r=p.length,c=Math.ceil((l+r)/2),m=c,i=2*c,h=new Array(i),u=new Array(i),f=0;f<i;f++)h[f]=-1,u[f]=-1;h[m+1]=0,u[m+1]=0;for(var S=l-r,y=S%2!=0,b=0,P=0,E=0,N=0,T=0;T<c&&!(new Date().getTime()>d);T++){for(var A=-T+b;A<=T-P;A+=2){var R=m+A,M;A==-T||A!=T&&h[R-1]<h[R+1]?M=h[R+1]:M=h[R-1]+1;for(var x=M-A;M<l&&x<r&&n.charAt(M)==p.charAt(x);)M++,x++;if(h[R]=M,M>l)P+=2;else if(x>r)b+=2;else if(y){var _=m+S-A;if(_>=0&&_<i&&u[_]!=-1){var L=l-u[_];if(M>=L)return this.diff_bisectSplit_(n,p,M,x,d)}}}for(var U=-T+E;U<=T-N;U+=2){var _=m+U,L;U==-T||U!=T&&u[_-1]<u[_+1]?L=u[_+1]:L=u[_-1]+1;for(var j=L-U;L<l&&j<r&&n.charAt(l-L-1)==p.charAt(r-j-1);)L++,j++;if(u[_]=L,L>l)N+=2;else if(j>r)E+=2;else if(!y){var R=m+S-U;if(R>=0&&R<i&&h[R]!=-1){var M=h[R],x=m+M-R;if(L=l-L,M>=L)return this.diff_bisectSplit_(n,p,M,x,d)}}}}return[new v.Diff(a,n),new v.Diff(g,p)]},v.prototype.diff_bisectSplit_=function(n,p,d,l,r){var c=n.substring(0,d),m=p.substring(0,l),i=n.substring(d),h=p.substring(l),u=this.diff_main(c,m,!1,r),f=this.diff_main(i,h,!1,r);return u.concat(f)},v.prototype.diff_linesToChars_=function(n,p){var d=[],l={};d[0]="";function r(h){for(var u="",f=0,S=-1,y=d.length;S<h.length-1;){S=h.indexOf(`
`,f),S==-1&&(S=h.length-1);var b=h.substring(f,S+1);(l.hasOwnProperty?l.hasOwnProperty(b):l[b]!==void 0)?u+=String.fromCharCode(l[b]):(y==c&&(b=h.substring(f),S=h.length),u+=String.fromCharCode(y),l[b]=y,d[y++]=b),f=S+1}return u}var c=4e4,m=r(n);c=65535;var i=r(p);return{chars1:m,chars2:i,lineArray:d}},v.prototype.diff_charsToLines_=function(n,p){for(var d=0;d<n.length;d++){for(var l=n[d][1],r=[],c=0;c<l.length;c++)r[c]=p[l.charCodeAt(c)];n[d][1]=r.join("")}},v.prototype.diff_commonPrefix=function(n,p){if(!n||!p||n.charAt(0)!=p.charAt(0))return 0;for(var d=0,l=Math.min(n.length,p.length),r=l,c=0;d<r;)n.substring(c,r)==p.substring(c,r)?(d=r,c=d):l=r,r=Math.floor((l-d)/2+d);return r},v.prototype.diff_commonSuffix=function(n,p){if(!n||!p||n.charAt(n.length-1)!=p.charAt(p.length-1))return 0;for(var d=0,l=Math.min(n.length,p.length),r=l,c=0;d<r;)n.substring(n.length-r,n.length-c)==p.substring(p.length-r,p.length-c)?(d=r,c=d):l=r,r=Math.floor((l-d)/2+d);return r},v.prototype.diff_commonOverlap_=function(n,p){var d=n.length,l=p.length;if(d==0||l==0)return 0;d>l?n=n.substring(d-l):d<l&&(p=p.substring(0,d));var r=Math.min(d,l);if(n==p)return r;for(var c=0,m=1;;){var i=n.substring(r-m),h=p.indexOf(i);if(h==-1)return c;m+=h,(h==0||n.substring(r-m)==p.substring(0,m))&&(c=m,m++)}},v.prototype.diff_halfMatch_=function(n,p){if(this.Diff_Timeout<=0)return null;var d=n.length>p.length?n:p,l=n.length>p.length?p:n;if(d.length<4||l.length*2<d.length)return null;var r=this;function c(P,E,N){for(var T=P.substring(N,N+Math.floor(P.length/4)),A=-1,R="",M,x,_,L;(A=E.indexOf(T,A+1))!=-1;){var U=r.diff_commonPrefix(P.substring(N),E.substring(A)),j=r.diff_commonSuffix(P.substring(0,N),E.substring(0,A));R.length<j+U&&(R=E.substring(A-j,A)+E.substring(A,A+U),M=P.substring(0,N-j),x=P.substring(N+U),_=E.substring(0,A-j),L=E.substring(A+U))}return R.length*2>=P.length?[M,x,_,L,R]:null}var m=c(d,l,Math.ceil(d.length/4)),i=c(d,l,Math.ceil(d.length/2)),h;if(!m&&!i)return null;i?m?h=m[4].length>i[4].length?m:i:h=i:h=m;var u,f,S,y;n.length>p.length?(u=h[0],f=h[1],S=h[2],y=h[3]):(S=h[0],y=h[1],u=h[2],f=h[3]);var b=h[4];return[u,f,S,y,b]},v.prototype.diff_cleanupSemantic=function(n){for(var p=!1,d=[],l=0,r=null,c=0,m=0,i=0,h=0,u=0;c<n.length;)n[c][0]==o?(d[l++]=c,m=h,i=u,h=0,u=0,r=n[c][1]):(n[c][0]==g?h+=n[c][1].length:u+=n[c][1].length,r&&r.length<=Math.max(m,i)&&r.length<=Math.max(h,u)&&(n.splice(d[l-1],0,new v.Diff(a,r)),n[d[l-1]+1][0]=g,l--,l--,c=l>0?d[l-1]:-1,m=0,i=0,h=0,u=0,r=null,p=!0)),c++;for(p&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),c=1;c<n.length;){if(n[c-1][0]==a&&n[c][0]==g){var f=n[c-1][1],S=n[c][1],y=this.diff_commonOverlap_(f,S),b=this.diff_commonOverlap_(S,f);y>=b?(y>=f.length/2||y>=S.length/2)&&(n.splice(c,0,new v.Diff(o,S.substring(0,y))),n[c-1][1]=f.substring(0,f.length-y),n[c+1][1]=S.substring(y),c++):(b>=f.length/2||b>=S.length/2)&&(n.splice(c,0,new v.Diff(o,f.substring(0,b))),n[c-1][0]=g,n[c-1][1]=S.substring(0,S.length-b),n[c+1][0]=a,n[c+1][1]=f.substring(b),c++),c++}c++}},v.prototype.diff_cleanupSemanticLossless=function(n){function p(b,P){if(!b||!P)return 6;var E=b.charAt(b.length-1),N=P.charAt(0),T=E.match(v.nonAlphaNumericRegex_),A=N.match(v.nonAlphaNumericRegex_),R=T&&E.match(v.whitespaceRegex_),M=A&&N.match(v.whitespaceRegex_),x=R&&E.match(v.linebreakRegex_),_=M&&N.match(v.linebreakRegex_),L=x&&b.match(v.blanklineEndRegex_),U=_&&P.match(v.blanklineStartRegex_);return L||U?5:x||_?4:T&&!R&&M?3:R||M?2:T||A?1:0}for(var d=1;d<n.length-1;){if(n[d-1][0]==o&&n[d+1][0]==o){var l=n[d-1][1],r=n[d][1],c=n[d+1][1],m=this.diff_commonSuffix(l,r);if(m){var i=r.substring(r.length-m);l=l.substring(0,l.length-m),r=i+r.substring(0,r.length-m),c=i+c}for(var h=l,u=r,f=c,S=p(l,r)+p(r,c);r.charAt(0)===c.charAt(0);){l+=r.charAt(0),r=r.substring(1)+c.charAt(0),c=c.substring(1);var y=p(l,r)+p(r,c);y>=S&&(S=y,h=l,u=r,f=c)}n[d-1][1]!=h&&(h?n[d-1][1]=h:(n.splice(d-1,1),d--),n[d][1]=u,f?n[d+1][1]=f:(n.splice(d+1,1),d--))}d++}},v.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,v.whitespaceRegex_=/\s/,v.linebreakRegex_=/[\r\n]/,v.blanklineEndRegex_=/\n\r?\n$/,v.blanklineStartRegex_=/^\r?\n\r?\n/,v.prototype.diff_cleanupEfficiency=function(n){for(var p=!1,d=[],l=0,r=null,c=0,m=!1,i=!1,h=!1,u=!1;c<n.length;)n[c][0]==o?(n[c][1].length<this.Diff_EditCost&&(h||u)?(d[l++]=c,m=h,i=u,r=n[c][1]):(l=0,r=null),h=u=!1):(n[c][0]==a?u=!0:h=!0,r&&(m&&i&&h&&u||r.length<this.Diff_EditCost/2&&m+i+h+u==3)&&(n.splice(d[l-1],0,new v.Diff(a,r)),n[d[l-1]+1][0]=g,l--,r=null,m&&i?(h=u=!0,l=0):(l--,c=l>0?d[l-1]:-1,h=u=!1),p=!0)),c++;p&&this.diff_cleanupMerge(n)},v.prototype.diff_cleanupMerge=function(n){n.push(new v.Diff(o,""));for(var p=0,d=0,l=0,r="",c="",m;p<n.length;)switch(n[p][0]){case g:l++,c+=n[p][1],p++;break;case a:d++,r+=n[p][1],p++;break;case o:d+l>1?(d!==0&&l!==0&&(m=this.diff_commonPrefix(c,r),m!==0&&(p-d-l>0&&n[p-d-l-1][0]==o?n[p-d-l-1][1]+=c.substring(0,m):(n.splice(0,0,new v.Diff(o,c.substring(0,m))),p++),c=c.substring(m),r=r.substring(m)),m=this.diff_commonSuffix(c,r),m!==0&&(n[p][1]=c.substring(c.length-m)+n[p][1],c=c.substring(0,c.length-m),r=r.substring(0,r.length-m))),p-=d+l,n.splice(p,d+l),r.length&&(n.splice(p,0,new v.Diff(a,r)),p++),c.length&&(n.splice(p,0,new v.Diff(g,c)),p++),p++):p!==0&&n[p-1][0]==o?(n[p-1][1]+=n[p][1],n.splice(p,1)):p++,l=0,d=0,r="",c="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(p=1;p<n.length-1;)n[p-1][0]==o&&n[p+1][0]==o&&(n[p][1].substring(n[p][1].length-n[p-1][1].length)==n[p-1][1]?(n[p][1]=n[p-1][1]+n[p][1].substring(0,n[p][1].length-n[p-1][1].length),n[p+1][1]=n[p-1][1]+n[p+1][1],n.splice(p-1,1),i=!0):n[p][1].substring(0,n[p+1][1].length)==n[p+1][1]&&(n[p-1][1]+=n[p+1][1],n[p][1]=n[p][1].substring(n[p+1][1].length)+n[p+1][1],n.splice(p+1,1),i=!0)),p++;i&&this.diff_cleanupMerge(n)},v.prototype.diff_xIndex=function(n,p){var d=0,l=0,r=0,c=0,m;for(m=0;m<n.length&&(n[m][0]!==g&&(d+=n[m][1].length),n[m][0]!==a&&(l+=n[m][1].length),!(d>p));m++)r=d,c=l;return n.length!=m&&n[m][0]===a?c:c+(p-r)},v.prototype.diff_prettyHtml=function(n){for(var p=[],d=/&/g,l=/</g,r=/>/g,c=/\n/g,m=0;m<n.length;m++){var i=n[m][0],h=n[m][1],u=h.replace(d,"&amp;").replace(l,"&lt;").replace(r,"&gt;").replace(c,"&para;<br>");switch(i){case g:p[m]='<ins style="background:#e6ffe6;">'+u+"</ins>";break;case a:p[m]='<del style="background:#ffe6e6;">'+u+"</del>";break;case o:p[m]="<span>"+u+"</span>";break}}return p.join("")},v.prototype.diff_text1=function(n){for(var p=[],d=0;d<n.length;d++)n[d][0]!==g&&(p[d]=n[d][1]);return p.join("")},v.prototype.diff_text2=function(n){for(var p=[],d=0;d<n.length;d++)n[d][0]!==a&&(p[d]=n[d][1]);return p.join("")},v.prototype.diff_levenshtein=function(n){for(var p=0,d=0,l=0,r=0;r<n.length;r++){var c=n[r][0],m=n[r][1];switch(c){case g:d+=m.length;break;case a:l+=m.length;break;case o:p+=Math.max(d,l),d=0,l=0;break}}return p+=Math.max(d,l),p},v.prototype.diff_toDelta=function(n){for(var p=[],d=0;d<n.length;d++)switch(n[d][0]){case g:p[d]="+"+encodeURI(n[d][1]);break;case a:p[d]="-"+n[d][1].length;break;case o:p[d]="="+n[d][1].length;break}return p.join("	").replace(/%20/g," ")},v.prototype.diff_fromDelta=function(n,p){for(var d=[],l=0,r=0,c=p.split(/\t/g),m=0;m<c.length;m++){var i=c[m].substring(1);switch(c[m].charAt(0)){case"+":try{d[l++]=new v.Diff(g,decodeURI(i))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var h=parseInt(i,10);if(isNaN(h)||h<0)throw new Error("Invalid number in diff_fromDelta: "+i);var u=n.substring(r,r+=h);c[m].charAt(0)=="="?d[l++]=new v.Diff(o,u):d[l++]=new v.Diff(a,u);break;default:if(c[m])throw new Error("Invalid diff operation in diff_fromDelta: "+c[m])}}if(r!=n.length)throw new Error("Delta length ("+r+") does not equal source text length ("+n.length+").");return d},v.prototype.match_main=function(n,p,d){if(n==null||p==null||d==null)throw new Error("Null input. (match_main)");return d=Math.max(0,Math.min(d,n.length)),n==p?0:n.length?n.substring(d,d+p.length)==p?d:this.match_bitap_(n,p,d):-1},v.prototype.match_bitap_=function(n,p,d){if(p.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(p),r=this;function c(M,x){var _=M/p.length,L=Math.abs(d-x);return r.Match_Distance?_+L/r.Match_Distance:L?1:_}var m=this.Match_Threshold,i=n.indexOf(p,d);i!=-1&&(m=Math.min(c(0,i),m),i=n.lastIndexOf(p,d+p.length),i!=-1&&(m=Math.min(c(0,i),m)));var h=1<<p.length-1;i=-1;for(var u,f,S=p.length+n.length,y,b=0;b<p.length;b++){for(u=0,f=S;u<f;)c(b,d+f)<=m?u=f:S=f,f=Math.floor((S-u)/2+u);S=f;var P=Math.max(1,d-f+1),E=Math.min(d+f,n.length)+p.length,N=Array(E+2);N[E+1]=(1<<b)-1;for(var T=E;T>=P;T--){var A=l[n.charAt(T-1)];if(b===0?N[T]=(N[T+1]<<1|1)&A:N[T]=(N[T+1]<<1|1)&A|((y[T+1]|y[T])<<1|1)|y[T+1],N[T]&h){var R=c(b,T-1);if(R<=m)if(m=R,i=T-1,i>d)P=Math.max(1,2*d-i);else break}}if(c(b+1,d)>m)break;y=N}return i},v.prototype.match_alphabet_=function(n){for(var p={},d=0;d<n.length;d++)p[n.charAt(d)]=0;for(var d=0;d<n.length;d++)p[n.charAt(d)]|=1<<n.length-d-1;return p},v.prototype.patch_addContext_=function(n,p){if(p.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var d=p.substring(n.start2,n.start2+n.length1),l=0;p.indexOf(d)!=p.lastIndexOf(d)&&d.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,d=p.substring(n.start2-l,n.start2+n.length1+l);l+=this.Patch_Margin;var r=p.substring(n.start2-l,n.start2);r&&n.diffs.unshift(new v.Diff(o,r));var c=p.substring(n.start2+n.length1,n.start2+n.length1+l);c&&n.diffs.push(new v.Diff(o,c)),n.start1-=r.length,n.start2-=r.length,n.length1+=r.length+c.length,n.length2+=r.length+c.length}},v.prototype.patch_make=function(n,p,d){var l,r;if(typeof n=="string"&&typeof p=="string"&&typeof d=="undefined")l=n,r=this.diff_main(l,p,!0),r.length>2&&(this.diff_cleanupSemantic(r),this.diff_cleanupEfficiency(r));else if(n&&typeof n=="object"&&typeof p=="undefined"&&typeof d=="undefined")r=n,l=this.diff_text1(r);else if(typeof n=="string"&&p&&typeof p=="object"&&typeof d=="undefined")l=n,r=p;else if(typeof n=="string"&&typeof p=="string"&&d&&typeof d=="object")l=n,r=d;else throw new Error("Unknown call format to patch_make.");if(r.length===0)return[];for(var c=[],m=new v.patch_obj,i=0,h=0,u=0,f=l,S=l,y=0;y<r.length;y++){var b=r[y][0],P=r[y][1];switch(!i&&b!==o&&(m.start1=h,m.start2=u),b){case g:m.diffs[i++]=r[y],m.length2+=P.length,S=S.substring(0,u)+P+S.substring(u);break;case a:m.length1+=P.length,m.diffs[i++]=r[y],S=S.substring(0,u)+S.substring(u+P.length);break;case o:P.length<=2*this.Patch_Margin&&i&&r.length!=y+1?(m.diffs[i++]=r[y],m.length1+=P.length,m.length2+=P.length):P.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(m,f),c.push(m),m=new v.patch_obj,i=0,f=S,h=u);break}b!==g&&(h+=P.length),b!==a&&(u+=P.length)}return i&&(this.patch_addContext_(m,f),c.push(m)),c},v.prototype.patch_deepCopy=function(n){for(var p=[],d=0;d<n.length;d++){var l=n[d],r=new v.patch_obj;r.diffs=[];for(var c=0;c<l.diffs.length;c++)r.diffs[c]=new v.Diff(l.diffs[c][0],l.diffs[c][1]);r.start1=l.start1,r.start2=l.start2,r.length1=l.length1,r.length2=l.length2,p[d]=r}return p},v.prototype.patch_apply=function(n,p){if(n.length==0)return[p,[]];n=this.patch_deepCopy(n);var d=this.patch_addPadding(n);p=d+p+d,this.patch_splitMax(n);for(var l=0,r=[],c=0;c<n.length;c++){var m=n[c].start2+l,i=this.diff_text1(n[c].diffs),h,u=-1;if(i.length>this.Match_MaxBits?(h=this.match_main(p,i.substring(0,this.Match_MaxBits),m),h!=-1&&(u=this.match_main(p,i.substring(i.length-this.Match_MaxBits),m+i.length-this.Match_MaxBits),(u==-1||h>=u)&&(h=-1))):h=this.match_main(p,i,m),h==-1)r[c]=!1,l-=n[c].length2-n[c].length1;else{r[c]=!0,l=h-m;var f;if(u==-1?f=p.substring(h,h+i.length):f=p.substring(h,u+this.Match_MaxBits),i==f)p=p.substring(0,h)+this.diff_text2(n[c].diffs)+p.substring(h+i.length);else{var S=this.diff_main(i,f,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(S)/i.length>this.Patch_DeleteThreshold)r[c]=!1;else{this.diff_cleanupSemanticLossless(S);for(var y=0,b,P=0;P<n[c].diffs.length;P++){var E=n[c].diffs[P];E[0]!==o&&(b=this.diff_xIndex(S,y)),E[0]===g?p=p.substring(0,h+b)+E[1]+p.substring(h+b):E[0]===a&&(p=p.substring(0,h+b)+p.substring(h+this.diff_xIndex(S,y+E[1].length))),E[0]!==a&&(y+=E[1].length)}}}}}return p=p.substring(d.length,p.length-d.length),[p,r]},v.prototype.patch_addPadding=function(n){for(var p=this.Patch_Margin,d="",l=1;l<=p;l++)d+=String.fromCharCode(l);for(var l=0;l<n.length;l++)n[l].start1+=p,n[l].start2+=p;var r=n[0],c=r.diffs;if(c.length==0||c[0][0]!=o)c.unshift(new v.Diff(o,d)),r.start1-=p,r.start2-=p,r.length1+=p,r.length2+=p;else if(p>c[0][1].length){var m=p-c[0][1].length;c[0][1]=d.substring(c[0][1].length)+c[0][1],r.start1-=m,r.start2-=m,r.length1+=m,r.length2+=m}if(r=n[n.length-1],c=r.diffs,c.length==0||c[c.length-1][0]!=o)c.push(new v.Diff(o,d)),r.length1+=p,r.length2+=p;else if(p>c[c.length-1][1].length){var m=p-c[c.length-1][1].length;c[c.length-1][1]+=d.substring(0,m),r.length1+=m,r.length2+=m}return d},v.prototype.patch_splitMax=function(n){for(var p=this.Match_MaxBits,d=0;d<n.length;d++)if(!(n[d].length1<=p)){var l=n[d];n.splice(d--,1);for(var r=l.start1,c=l.start2,m="";l.diffs.length!==0;){var i=new v.patch_obj,h=!0;for(i.start1=r-m.length,i.start2=c-m.length,m!==""&&(i.length1=i.length2=m.length,i.diffs.push(new v.Diff(o,m)));l.diffs.length!==0&&i.length1<p-this.Patch_Margin;){var u=l.diffs[0][0],f=l.diffs[0][1];u===g?(i.length2+=f.length,c+=f.length,i.diffs.push(l.diffs.shift()),h=!1):u===a&&i.diffs.length==1&&i.diffs[0][0]==o&&f.length>2*p?(i.length1+=f.length,r+=f.length,h=!1,i.diffs.push(new v.Diff(u,f)),l.diffs.shift()):(f=f.substring(0,p-i.length1-this.Patch_Margin),i.length1+=f.length,r+=f.length,u===o?(i.length2+=f.length,c+=f.length):h=!1,i.diffs.push(new v.Diff(u,f)),f==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(f.length))}m=this.diff_text2(i.diffs),m=m.substring(m.length-this.Patch_Margin);var S=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);S!==""&&(i.length1+=S.length,i.length2+=S.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===o?i.diffs[i.diffs.length-1][1]+=S:i.diffs.push(new v.Diff(o,S))),h||n.splice(++d,0,i)}}},v.prototype.patch_toText=function(n){for(var p=[],d=0;d<n.length;d++)p[d]=n[d];return p.join("")},v.prototype.patch_fromText=function(n){var p=[];if(!n)return p;for(var d=n.split(`
`),l=0,r=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<d.length;){var c=d[l].match(r);if(!c)throw new Error("Invalid patch string: "+d[l]);var m=new v.patch_obj;for(p.push(m),m.start1=parseInt(c[1],10),c[2]===""?(m.start1--,m.length1=1):c[2]=="0"?m.length1=0:(m.start1--,m.length1=parseInt(c[2],10)),m.start2=parseInt(c[3],10),c[4]===""?(m.start2--,m.length2=1):c[4]=="0"?m.length2=0:(m.start2--,m.length2=parseInt(c[4],10)),l++;l<d.length;){var i=d[l].charAt(0);try{var h=decodeURI(d[l].substring(1))}catch(u){throw new Error("Illegal escape in patch_fromText: "+h)}if(i=="-")m.diffs.push(new v.Diff(a,h));else if(i=="+")m.diffs.push(new v.Diff(g,h));else if(i==" ")m.diffs.push(new v.Diff(o,h));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+h)}l++}}return p},v.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},v.patch_obj.prototype.toString=function(){var n,p;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?p=this.start2+",0":this.length2==1?p=this.start2+1:p=this.start2+1+","+this.length2;for(var d=["@@ -"+n+" +"+p+` @@
`],l,r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case g:l="+";break;case a:l="-";break;case o:l=" ";break}d[r+1]=l+encodeURI(this.diffs[r][1])+`
`}return d.join("").replace(/%20/g," ")},O.exports=v,O.exports.diff_match_patch=v,O.exports.DIFF_DELETE=a,O.exports.DIFF_INSERT=g,O.exports.DIFF_EQUAL=o},3509:function(O){/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/(function(v,a){O.exports=a()})(this,function(){return function(v){function a(o){if(g[o])return g[o].exports;var n=g[o]={exports:{},id:o,loaded:!1};return v[o].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var g={};return a.m=v,a.c=g,a.p="",a(0)}([function(v,a,g){"use strict";function o(){var E=b();return E.compile=function(N,T){return m.compile(N,T,E)},E.precompile=function(N,T){return m.precompile(N,T,E)},E.AST=r.default,E.Compiler=m.Compiler,E.JavaScriptCompiler=h.default,E.Parser=c.parser,E.parse=c.parse,E.parseWithoutProcessing=c.parseWithoutProcessing,E}var n=g(1).default;a.__esModule=!0;var p=g(2),d=n(p),l=g(45),r=n(l),c=g(46),m=g(51),i=g(52),h=n(i),u=g(49),f=n(u),S=g(44),y=n(S),b=d.default.create,P=o();P.create=o,y.default(P),P.Visitor=f.default,P.default=P,a.default=P,v.exports=a.default},function(v,a){"use strict";a.default=function(g){return g&&g.__esModule?g:{default:g}},a.__esModule=!0},function(v,a,g){"use strict";function o(){var E=new l.HandlebarsEnvironment;return u.extend(E,l),E.SafeString=c.default,E.Exception=i.default,E.Utils=u,E.escapeExpression=u.escapeExpression,E.VM=S,E.template=function(N){return S.template(N,E)},E}var n=g(3).default,p=g(1).default;a.__esModule=!0;var d=g(4),l=n(d),r=g(37),c=p(r),m=g(6),i=p(m),h=g(5),u=n(h),f=g(38),S=n(f),y=g(44),b=p(y),P=o();P.create=o,b.default(P),P.default=P,a.default=P,v.exports=a.default},function(v,a){"use strict";a.default=function(g){if(g&&g.__esModule)return g;var o={};if(g!=null)for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(o[n]=g[n]);return o.default=g,o},a.__esModule=!0},function(v,a,g){"use strict";function o(E,N,T){this.helpers=E||{},this.partials=N||{},this.decorators=T||{},r.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}var n=g(1).default;a.__esModule=!0,a.HandlebarsEnvironment=o;var p=g(5),d=g(6),l=n(d),r=g(10),c=g(30),m=g(32),i=n(m),h=g(33),u="4.7.7";a.VERSION=u;var f=8;a.COMPILER_REVISION=f;var S=7;a.LAST_COMPATIBLE_COMPILER_REVISION=S;var y={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};a.REVISION_CHANGES=y;var b="[object Object]";o.prototype={constructor:o,logger:i.default,log:i.default.log,registerHelper:function(E,N){if(p.toString.call(E)===b){if(N)throw new l.default("Arg not supported with multiple helpers");p.extend(this.helpers,E)}else this.helpers[E]=N},unregisterHelper:function(E){delete this.helpers[E]},registerPartial:function(E,N){if(p.toString.call(E)===b)p.extend(this.partials,E);else{if(typeof N=="undefined")throw new l.default('Attempting to register a partial called "'+E+'" as undefined');this.partials[E]=N}},unregisterPartial:function(E){delete this.partials[E]},registerDecorator:function(E,N){if(p.toString.call(E)===b){if(N)throw new l.default("Arg not supported with multiple decorators");p.extend(this.decorators,E)}else this.decorators[E]=N},unregisterDecorator:function(E){delete this.decorators[E]},resetLoggedPropertyAccesses:function(){h.resetLoggedProperties()}};var P=i.default.log;a.log=P,a.createFrame=p.createFrame,a.logger=i.default},function(v,a){"use strict";function g(y){return m[y]}function o(y){for(var b=1;b<arguments.length;b++)for(var P in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],P)&&(y[P]=arguments[b][P]);return y}function n(y,b){for(var P=0,E=y.length;P<E;P++)if(y[P]===b)return P;return-1}function p(y){if(typeof y!="string"){if(y&&y.toHTML)return y.toHTML();if(y==null)return"";if(!y)return y+"";y=""+y}return h.test(y)?y.replace(i,g):y}function d(y){return!y&&y!==0||!(!S(y)||y.length!==0)}function l(y){var b=o({},y);return b._parent=y,b}function r(y,b){return y.path=b,y}function c(y,b){return(y?y+".":"")+b}a.__esModule=!0,a.extend=o,a.indexOf=n,a.escapeExpression=p,a.isEmpty=d,a.createFrame=l,a.blockParams=r,a.appendContextPath=c;var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,h=/[&<>"'`=]/,u=Object.prototype.toString;a.toString=u;var f=function(y){return typeof y=="function"};f(/x/)&&(a.isFunction=f=function(y){return typeof y=="function"&&u.call(y)==="[object Function]"}),a.isFunction=f;var S=Array.isArray||function(y){return!(!y||typeof y!="object")&&u.call(y)==="[object Array]"};a.isArray=S},function(v,a,g){"use strict";function o(d,l){var r=l&&l.loc,c=void 0,m=void 0,i=void 0,h=void 0;r&&(c=r.start.line,m=r.end.line,i=r.start.column,h=r.end.column,d+=" - "+c+":"+i);for(var u=Error.prototype.constructor.call(this,d),f=0;f<p.length;f++)this[p[f]]=u[p[f]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=c,this.endLineNumber=m,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:h,enumerable:!0})):(this.column=i,this.endColumn=h))}catch(S){}}var n=g(7).default;a.__esModule=!0;var p=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];o.prototype=new Error,a.default=o,v.exports=a.default},function(v,a,g){v.exports={default:g(8),__esModule:!0}},function(v,a,g){var o=g(9);v.exports=function(n,p,d){return o.setDesc(n,p,d)}},function(v,a){var g=Object;v.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}},function(v,a,g){"use strict";function o(N){l.default(N),c.default(N),i.default(N),u.default(N),S.default(N),b.default(N),E.default(N)}function n(N,T,A){N.helpers[T]&&(N.hooks[T]=N.helpers[T],A||delete N.helpers[T])}var p=g(1).default;a.__esModule=!0,a.registerDefaultHelpers=o,a.moveHelperToHooks=n;var d=g(11),l=p(d),r=g(12),c=p(r),m=g(25),i=p(m),h=g(26),u=p(h),f=g(27),S=p(f),y=g(28),b=p(y),P=g(29),E=p(P)},function(v,a,g){"use strict";a.__esModule=!0;var o=g(5);a.default=function(n){n.registerHelper("blockHelperMissing",function(p,d){var l=d.inverse,r=d.fn;if(p===!0)return r(this);if(p===!1||p==null)return l(this);if(o.isArray(p))return p.length>0?(d.ids&&(d.ids=[d.name]),n.helpers.each(p,d)):l(this);if(d.data&&d.ids){var c=o.createFrame(d.data);c.contextPath=o.appendContextPath(d.data.contextPath,d.name),d={data:c}}return r(p,d)})},v.exports=a.default},function(v,a,g){(function(o){"use strict";var n=g(13).default,p=g(1).default;a.__esModule=!0;var d=g(5),l=g(6),r=p(l);a.default=function(c){c.registerHelper("each",function(m,i){function h(R,M,x){b&&(b.key=R,b.index=M,b.first=M===0,b.last=!!x,P&&(b.contextPath=P+R)),y+=u(m[R],{data:b,blockParams:d.blockParams([m[R],R],[P+R,null])})}if(!i)throw new r.default("Must pass iterator to #each");var u=i.fn,f=i.inverse,S=0,y="",b=void 0,P=void 0;if(i.data&&i.ids&&(P=d.appendContextPath(i.data.contextPath,i.ids[0])+"."),d.isFunction(m)&&(m=m.call(this)),i.data&&(b=d.createFrame(i.data)),m&&typeof m=="object")if(d.isArray(m))for(var E=m.length;S<E;S++)S in m&&h(S,S,S===m.length-1);else if(o.Symbol&&m[o.Symbol.iterator]){for(var N=[],T=m[o.Symbol.iterator](),A=T.next();!A.done;A=T.next())N.push(A.value);m=N;for(var E=m.length;S<E;S++)h(S,S,S===m.length-1)}else(function(){var R=void 0;n(m).forEach(function(M){R!==void 0&&h(R,S-1),R=M,S++}),R!==void 0&&h(R,S-1,!0)})();return S===0&&(y=f(this)),y})},v.exports=a.default}).call(a,function(){return this}())},function(v,a,g){v.exports={default:g(14),__esModule:!0}},function(v,a,g){g(15),v.exports=g(21).Object.keys},function(v,a,g){var o=g(16);g(18)("keys",function(n){return function(p){return n(o(p))}})},function(v,a,g){var o=g(17);v.exports=function(n){return Object(o(n))}},function(v,a){v.exports=function(g){if(g==null)throw TypeError("Can't call method on  "+g);return g}},function(v,a,g){var o=g(19),n=g(21),p=g(24);v.exports=function(d,l){var r=(n.Object||{})[d]||Object[d],c={};c[d]=l(r),o(o.S+o.F*p(function(){r(1)}),"Object",c)}},function(v,a,g){var o=g(20),n=g(21),p=g(22),d="prototype",l=function(r,c,m){var i,h,u,f=r&l.F,S=r&l.G,y=r&l.S,b=r&l.P,P=r&l.B,E=r&l.W,N=S?n:n[c]||(n[c]={}),T=S?o:y?o[c]:(o[c]||{})[d];S&&(m=c);for(i in m)h=!f&&T&&i in T,h&&i in N||(u=h?T[i]:m[i],N[i]=S&&typeof T[i]!="function"?m[i]:P&&h?p(u,o):E&&T[i]==u?function(A){var R=function(M){return this instanceof A?new A(M):A(M)};return R[d]=A[d],R}(u):b&&typeof u=="function"?p(Function.call,u):u,b&&((N[d]||(N[d]={}))[i]=u))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,v.exports=l},function(v,a){var g=v.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=g)},function(v,a){var g=v.exports={version:"1.2.6"};typeof __e=="number"&&(__e=g)},function(v,a,g){var o=g(23);v.exports=function(n,p,d){if(o(n),p===void 0)return n;switch(d){case 1:return function(l){return n.call(p,l)};case 2:return function(l,r){return n.call(p,l,r)};case 3:return function(l,r,c){return n.call(p,l,r,c)}}return function(){return n.apply(p,arguments)}}},function(v,a){v.exports=function(g){if(typeof g!="function")throw TypeError(g+" is not a function!");return g}},function(v,a){v.exports=function(g){try{return!!g()}catch(o){return!0}}},function(v,a,g){"use strict";var o=g(1).default;a.__esModule=!0;var n=g(6),p=o(n);a.default=function(d){d.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new p.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},v.exports=a.default},function(v,a,g){"use strict";var o=g(1).default;a.__esModule=!0;var n=g(5),p=g(6),d=o(p);a.default=function(l){l.registerHelper("if",function(r,c){if(arguments.length!=2)throw new d.default("#if requires exactly one argument");return n.isFunction(r)&&(r=r.call(this)),!c.hash.includeZero&&!r||n.isEmpty(r)?c.inverse(this):c.fn(this)}),l.registerHelper("unless",function(r,c){if(arguments.length!=2)throw new d.default("#unless requires exactly one argument");return l.helpers.if.call(this,r,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},v.exports=a.default},function(v,a){"use strict";a.__esModule=!0,a.default=function(g){g.registerHelper("log",function(){for(var o=[void 0],n=arguments[arguments.length-1],p=0;p<arguments.length-1;p++)o.push(arguments[p]);var d=1;n.hash.level!=null?d=n.hash.level:n.data&&n.data.level!=null&&(d=n.data.level),o[0]=d,g.log.apply(g,o)})},v.exports=a.default},function(v,a){"use strict";a.__esModule=!0,a.default=function(g){g.registerHelper("lookup",function(o,n,p){return o&&p.lookupProperty(o,n)})},v.exports=a.default},function(v,a,g){"use strict";var o=g(1).default;a.__esModule=!0;var n=g(5),p=g(6),d=o(p);a.default=function(l){l.registerHelper("with",function(r,c){if(arguments.length!=2)throw new d.default("#with requires exactly one argument");n.isFunction(r)&&(r=r.call(this));var m=c.fn;if(n.isEmpty(r))return c.inverse(this);var i=c.data;return c.data&&c.ids&&(i=n.createFrame(c.data),i.contextPath=n.appendContextPath(c.data.contextPath,c.ids[0])),m(r,{data:i,blockParams:n.blockParams([r],[i&&i.contextPath])})})},v.exports=a.default},function(v,a,g){"use strict";function o(l){d.default(l)}var n=g(1).default;a.__esModule=!0,a.registerDefaultDecorators=o;var p=g(31),d=n(p)},function(v,a,g){"use strict";a.__esModule=!0;var o=g(5);a.default=function(n){n.registerDecorator("inline",function(p,d,l,r){var c=p;return d.partials||(d.partials={},c=function(m,i){var h=l.partials;l.partials=o.extend({},h,d.partials);var u=p(m,i);return l.partials=h,u}),d.partials[r.args[0]]=r.fn,c})},v.exports=a.default},function(v,a,g){"use strict";a.__esModule=!0;var o=g(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(p){if(typeof p=="string"){var d=o.indexOf(n.methodMap,p.toLowerCase());p=d>=0?d:parseInt(p,10)}return p},log:function(p){if(p=n.lookupLevel(p),typeof console!="undefined"&&n.lookupLevel(n.level)<=p){var d=n.methodMap[p];console[d]||(d="log");for(var l=arguments.length,r=Array(l>1?l-1:0),c=1;c<l;c++)r[c-1]=arguments[c];console[d].apply(console,r)}}};a.default=n,v.exports=a.default},function(v,a,g){"use strict";function o(S){var y=r(null);y.constructor=!1,y.__defineGetter__=!1,y.__defineSetter__=!1,y.__lookupGetter__=!1;var b=r(null);return b.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(b,S.allowedProtoProperties),defaultValue:S.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(y,S.allowedProtoMethods),defaultValue:S.allowProtoMethodsByDefault}}}function n(S,y,b){return p(typeof S=="function"?y.methods:y.properties,b)}function p(S,y){return S.whitelist[y]!==void 0?S.whitelist[y]===!0:S.defaultValue!==void 0?S.defaultValue:(d(y),!1)}function d(S){f[S]!==!0&&(f[S]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+S+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function l(){c(f).forEach(function(S){delete f[S]})}var r=g(34).default,c=g(13).default,m=g(3).default;a.__esModule=!0,a.createProtoAccessControl=o,a.resultIsAllowed=n,a.resetLoggedProperties=l;var i=g(36),h=g(32),u=m(h),f=r(null)},function(v,a,g){v.exports={default:g(35),__esModule:!0}},function(v,a,g){var o=g(9);v.exports=function(n,p){return o.create(n,p)}},function(v,a,g){"use strict";function o(){for(var d=arguments.length,l=Array(d),r=0;r<d;r++)l[r]=arguments[r];return p.extend.apply(void 0,[n(null)].concat(l))}var n=g(34).default;a.__esModule=!0,a.createNewLookupObject=o;var p=g(5)},function(v,a){"use strict";function g(o){this.string=o}a.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string},a.default=g,v.exports=a.default},function(v,a,g){"use strict";function o(x){var _=x&&x[0]||1,L=T.COMPILER_REVISION;if(!(_>=T.LAST_COMPATIBLE_COMPILER_REVISION&&_<=T.COMPILER_REVISION)){if(_<T.LAST_COMPATIBLE_COMPILER_REVISION){var U=T.REVISION_CHANGES[L],j=T.REVISION_CHANGES[_];throw new N.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+U+") or downgrade your runtime to an older version ("+j+").")}throw new N.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+x[1]+").")}}function n(x,_){function L(B,q,w){w.hash&&(q=P.extend({},q,w.hash),w.ids&&(w.ids[0]=!0)),B=_.VM.resolvePartial.call(this,B,q,w);var H=P.extend({},w,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),V=_.VM.invokePartial.call(this,B,q,H);if(V==null&&_.compile&&(w.partials[w.name]=_.compile(B,x.compilerOptions,_),V=w.partials[w.name](q,H)),V!=null){if(w.indent){for(var ne=V.split(`
`),ae=0,de=ne.length;ae<de&&(ne[ae]||ae+1!==de);ae++)ne[ae]=w.indent+ne[ae];V=ne.join(`
`)}return V}throw new N.default("The partial "+w.name+" could not be compiled when running in runtime-only mode")}function U(B){function q(ae){return""+x.main(z,ae,z.helpers,z.partials,H,ne,V)}var w=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],H=w.data;U._setup(w),!w.partial&&x.useData&&(H=c(B,H));var V=void 0,ne=x.useBlockParams?[]:void 0;return x.useDepths&&(V=w.depths?B!=w.depths[0]?[B].concat(w.depths):w.depths:[B]),(q=m(x.main,q,z,w.depths||[],H,ne))(B,w)}if(!_)throw new N.default("No environment passed to template");if(!x||!x.main)throw new N.default("Unknown template object: "+typeof x);x.main.decorator=x.main_d,_.VM.checkRevision(x.compiler);var j=x.compiler&&x.compiler[0]===7,z={strict:function(B,q,w){if(!(B&&q in B))throw new N.default('"'+q+'" not defined in '+B,{loc:w});return z.lookupProperty(B,q)},lookupProperty:function(B,q){var w=B[q];return w==null||Object.prototype.hasOwnProperty.call(B,q)||M.resultIsAllowed(w,z.protoAccessControl,q)?w:void 0},lookup:function(B,q){for(var w=B.length,H=0;H<w;H++){var V=B[H]&&z.lookupProperty(B[H],q);if(V!=null)return B[H][q]}},lambda:function(B,q){return typeof B=="function"?B.call(q):B},escapeExpression:P.escapeExpression,invokePartial:L,fn:function(B){var q=x[B];return q.decorator=x[B+"_d"],q},programs:[],program:function(B,q,w,H,V){var ne=this.programs[B],ae=this.fn(B);return q||V||H||w?ne=p(this,B,ae,q,w,H,V):ne||(ne=this.programs[B]=p(this,B,ae)),ne},data:function(B,q){for(;B&&q--;)B=B._parent;return B},mergeIfNeeded:function(B,q){var w=B||q;return B&&q&&B!==q&&(w=P.extend({},q,B)),w},nullContext:u({}),noop:_.VM.noop,compilerInfo:x.compiler};return U.isTop=!0,U._setup=function(B){if(B.partial)z.protoAccessControl=B.protoAccessControl,z.helpers=B.helpers,z.partials=B.partials,z.decorators=B.decorators,z.hooks=B.hooks;else{var q=P.extend({},_.helpers,B.helpers);i(q,z),z.helpers=q,x.usePartial&&(z.partials=z.mergeIfNeeded(B.partials,_.partials)),(x.usePartial||x.useDecorators)&&(z.decorators=P.extend({},_.decorators,B.decorators)),z.hooks={},z.protoAccessControl=M.createProtoAccessControl(B);var w=B.allowCallsToHelperMissing||j;A.moveHelperToHooks(z,"helperMissing",w),A.moveHelperToHooks(z,"blockHelperMissing",w)}},U._child=function(B,q,w,H){if(x.useBlockParams&&!w)throw new N.default("must pass block params");if(x.useDepths&&!H)throw new N.default("must pass parent depths");return p(z,B,x[B],q,0,w,H)},U}function p(x,_,L,U,j,z,B){function q(w){var H=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],V=B;return!B||w==B[0]||w===x.nullContext&&B[0]===null||(V=[w].concat(B)),L(x,w,x.helpers,x.partials,H.data||U,z&&[H.blockParams].concat(z),V)}return q=m(L,q,x,B,U,z),q.program=_,q.depth=B?B.length:0,q.blockParams=j||0,q}function d(x,_,L){return x?x.call||L.name||(L.name=x,x=L.partials[x]):x=L.name==="@partial-block"?L.data["partial-block"]:L.partials[L.name],x}function l(x,_,L){var U=L.data&&L.data["partial-block"];L.partial=!0,L.ids&&(L.data.contextPath=L.ids[0]||L.data.contextPath);var j=void 0;if(L.fn&&L.fn!==r&&function(){L.data=T.createFrame(L.data);var z=L.fn;j=L.data["partial-block"]=function(B){var q=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return q.data=T.createFrame(q.data),q.data["partial-block"]=U,z(B,q)},z.partials&&(L.partials=P.extend({},L.partials,z.partials))}(),x===void 0&&j&&(x=j),x===void 0)throw new N.default("The partial "+L.name+" could not be found");if(x instanceof Function)return x(_,L)}function r(){return""}function c(x,_){return _&&"root"in _||(_=_?T.createFrame(_):{},_.root=x),_}function m(x,_,L,U,j,z){if(x.decorator){var B={};_=x.decorator(_,B,L,U&&U[0],j,z,U),P.extend(_,B)}return _}function i(x,_){f(x).forEach(function(L){var U=x[L];x[L]=h(U,_)})}function h(x,_){var L=_.lookupProperty;return R.wrapHelper(x,function(U){return P.extend({lookupProperty:L},U)})}var u=g(39).default,f=g(13).default,S=g(3).default,y=g(1).default;a.__esModule=!0,a.checkRevision=o,a.template=n,a.wrapProgram=p,a.resolvePartial=d,a.invokePartial=l,a.noop=r;var b=g(5),P=S(b),E=g(6),N=y(E),T=g(4),A=g(10),R=g(43),M=g(33)},function(v,a,g){v.exports={default:g(40),__esModule:!0}},function(v,a,g){g(41),v.exports=g(21).Object.seal},function(v,a,g){var o=g(42);g(18)("seal",function(n){return function(p){return n&&o(p)?n(p):p}})},function(v,a){v.exports=function(g){return typeof g=="object"?g!==null:typeof g=="function"}},function(v,a){"use strict";function g(o,n){if(typeof o!="function")return o;var p=function(){var d=arguments[arguments.length-1];return arguments[arguments.length-1]=n(d),o.apply(this,arguments)};return p}a.__esModule=!0,a.wrapHelper=g},function(v,a){(function(g){"use strict";a.__esModule=!0,a.default=function(o){var n=typeof g!="undefined"?g:window,p=n.Handlebars;o.noConflict=function(){return n.Handlebars===o&&(n.Handlebars=p),o}},v.exports=a.default}).call(a,function(){return this}())},function(v,a){"use strict";a.__esModule=!0;var g={helpers:{helperExpression:function(o){return o.type==="SubExpression"||(o.type==="MustacheStatement"||o.type==="BlockStatement")&&!!(o.params&&o.params.length||o.hash)},scopedId:function(o){return/^\.|this\b/.test(o.original)},simpleId:function(o){return o.parts.length===1&&!g.helpers.scopedId(o)&&!o.depth}}};a.default=g,v.exports=a.default},function(v,a,g){"use strict";function o(S,y){if(S.type==="Program")return S;r.default.yy=f,f.locInfo=function(P){return new f.SourceLocation(y&&y.srcName,P)};var b=r.default.parse(S);return b}function n(S,y){var b=o(S,y),P=new m.default(y);return P.accept(b)}var p=g(1).default,d=g(3).default;a.__esModule=!0,a.parseWithoutProcessing=o,a.parse=n;var l=g(47),r=p(l),c=g(48),m=p(c),i=g(50),h=d(i),u=g(5);a.parser=r.default;var f={};u.extend(f,h)},function(v,a){"use strict";a.__esModule=!0;var g=function(){function o(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(d,l,r,c,m,i,h){var u=i.length-1;switch(m){case 1:return i[u-1];case 2:this.$=c.prepareProgram(i[u]);break;case 3:this.$=i[u];break;case 4:this.$=i[u];break;case 5:this.$=i[u];break;case 6:this.$=i[u];break;case 7:this.$=i[u];break;case 8:this.$=i[u];break;case 9:this.$={type:"CommentStatement",value:c.stripComment(i[u]),strip:c.stripFlags(i[u],i[u]),loc:c.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[u],value:i[u],loc:c.locInfo(this._$)};break;case 11:this.$=c.prepareRawBlock(i[u-2],i[u-1],i[u],this._$);break;case 12:this.$={path:i[u-3],params:i[u-2],hash:i[u-1]};break;case 13:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!1,this._$);break;case 14:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!0,this._$);break;case 15:this.$={open:i[u-5],path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 16:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 17:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 18:this.$={strip:c.stripFlags(i[u-1],i[u-1]),program:i[u]};break;case 19:var f=c.prepareBlock(i[u-2],i[u-1],i[u],i[u],!1,this._$),S=c.prepareProgram([f],i[u-1].loc);S.chained=!0,this.$={strip:i[u-2].strip,program:S,chain:!0};break;case 20:this.$=i[u];break;case 21:this.$={path:i[u-1],strip:c.stripFlags(i[u-2],i[u])};break;case 22:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 23:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[u-3],params:i[u-2],hash:i[u-1],indent:"",strip:c.stripFlags(i[u-4],i[u]),loc:c.locInfo(this._$)};break;case 25:this.$=c.preparePartialBlock(i[u-2],i[u-1],i[u],this._$);break;case 26:this.$={path:i[u-3],params:i[u-2],hash:i[u-1],strip:c.stripFlags(i[u-4],i[u])};break;case 27:this.$=i[u];break;case 28:this.$=i[u];break;case 29:this.$={type:"SubExpression",path:i[u-3],params:i[u-2],hash:i[u-1],loc:c.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[u],loc:c.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:c.id(i[u-2]),value:i[u],loc:c.locInfo(this._$)};break;case 32:this.$=c.id(i[u-1]);break;case 33:this.$=i[u];break;case 34:this.$=i[u];break;case 35:this.$={type:"StringLiteral",value:i[u],original:i[u],loc:c.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[u]),original:Number(i[u]),loc:c.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[u]==="true",original:i[u]==="true",loc:c.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:c.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:c.locInfo(this._$)};break;case 40:this.$=i[u];break;case 41:this.$=i[u];break;case 42:this.$=c.preparePath(!0,i[u],this._$);break;case 43:this.$=c.preparePath(!1,i[u],this._$);break;case 44:i[u-2].push({part:c.id(i[u]),original:i[u],separator:i[u-1]}),this.$=i[u-2];break;case 45:this.$=[{part:c.id(i[u]),original:i[u]}];break;case 46:this.$=[];break;case 47:i[u-1].push(i[u]);break;case 48:this.$=[];break;case 49:i[u-1].push(i[u]);break;case 50:this.$=[];break;case 51:i[u-1].push(i[u]);break;case 58:this.$=[];break;case 59:i[u-1].push(i[u]);break;case 64:this.$=[];break;case 65:i[u-1].push(i[u]);break;case 70:this.$=[];break;case 71:i[u-1].push(i[u]);break;case 78:this.$=[];break;case 79:i[u-1].push(i[u]);break;case 82:this.$=[];break;case 83:i[u-1].push(i[u]);break;case 86:this.$=[];break;case 87:i[u-1].push(i[u]);break;case 90:this.$=[];break;case 91:i[u-1].push(i[u]);break;case 94:this.$=[];break;case 95:i[u-1].push(i[u]);break;case 98:this.$=[i[u]];break;case 99:i[u-1].push(i[u]);break;case 100:this.$=[i[u]];break;case 101:i[u-1].push(i[u])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(d,l){throw new Error(d)},parse:function(d){function l(){var z;return z=r.lexer.lex()||1,typeof z!="number"&&(z=r.symbols_[z]||z),z}var r=this,c=[0],m=[null],i=[],h=this.table,u="",f=0,S=0,y=0;this.lexer.setInput(d),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;i.push(b);var P=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var E,N,T,A,R,M,x,_,L,U={};;){if(T=c[c.length-1],this.defaultActions[T]?A=this.defaultActions[T]:(E!==null&&typeof E!="undefined"||(E=l()),A=h[T]&&h[T][E]),typeof A=="undefined"||!A.length||!A[0]){var j="";if(!y){L=[];for(M in h[T])this.terminals_[M]&&M>2&&L.push("'"+this.terminals_[M]+"'");j=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+L.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(f+1)+": Unexpected "+(E==1?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(j,{text:this.lexer.match,token:this.terminals_[E]||E,line:this.lexer.yylineno,loc:b,expected:L})}}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+T+", token: "+E);switch(A[0]){case 1:c.push(E),m.push(this.lexer.yytext),i.push(this.lexer.yylloc),c.push(A[1]),E=null,N?(E=N,N=null):(S=this.lexer.yyleng,u=this.lexer.yytext,f=this.lexer.yylineno,b=this.lexer.yylloc,y>0&&y--);break;case 2:if(x=this.productions_[A[1]][1],U.$=m[m.length-x],U._$={first_line:i[i.length-(x||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(x||1)].first_column,last_column:i[i.length-1].last_column},P&&(U._$.range=[i[i.length-(x||1)].range[0],i[i.length-1].range[1]]),R=this.performAction.call(U,u,S,f,this.yy,A[1],m,i),typeof R!="undefined")return R;x&&(c=c.slice(0,-1*x*2),m=m.slice(0,-1*x),i=i.slice(0,-1*x)),c.push(this.productions_[A[1]][0]),m.push(U.$),i.push(U._$),_=h[c[c.length-2]][c[c.length-1]],c.push(_);break;case 3:return!0}}return!0}},p=function(){var d={EOF:1,parseError:function(l,r){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,r)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var r=l.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var r=l.length,c=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),r=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,r,c,m,i;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),u=0;u<h.length&&(c=this._input.match(this.rules[h[u]]),!c||r&&!(c[0].length>r[0].length)||(r=c,m=u,this.options.flex));u++);return r?(i=r[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],l=this.performAction.call(this,this.yy,this,h[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l!="undefined"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return d.options={},d.performAction=function(l,r,c,m){function i(h,u){return r.yytext=r.yytext.substring(h,r.yyleng-u+h)}switch(c){case 0:if(r.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(r.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return r.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return r.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d}();return n.lexer=p,o.prototype=n,n.Parser=o,new o}();a.default=g,v.exports=a.default},function(v,a,g){"use strict";function o(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,h,u){h===void 0&&(h=i.length);var f=i[h-1],S=i[h-2];return f?f.type==="ContentStatement"?(S||!u?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:u}function p(i,h,u){h===void 0&&(h=-1);var f=i[h+1],S=i[h+2];return f?f.type==="ContentStatement"?(S||!u?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:u}function d(i,h,u){var f=i[h==null?0:h+1];if(f&&f.type==="ContentStatement"&&(u||!f.rightStripped)){var S=f.value;f.value=f.value.replace(u?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==S}}function l(i,h,u){var f=i[h==null?i.length-1:h-1];if(f&&f.type==="ContentStatement"&&(u||!f.leftStripped)){var S=f.value;return f.value=f.value.replace(u?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==S,f.leftStripped}}var r=g(1).default;a.__esModule=!0;var c=g(49),m=r(c);o.prototype=new m.default,o.prototype.Program=function(i){var h=!this.options.ignoreStandalone,u=!this.isRootSeen;this.isRootSeen=!0;for(var f=i.body,S=0,y=f.length;S<y;S++){var b=f[S],P=this.accept(b);if(P){var E=n(f,S,u),N=p(f,S,u),T=P.openStandalone&&E,A=P.closeStandalone&&N,R=P.inlineStandalone&&E&&N;P.close&&d(f,S,!0),P.open&&l(f,S,!0),h&&R&&(d(f,S),l(f,S)&&b.type==="PartialStatement"&&(b.indent=/([ \t]+$)/.exec(f[S-1].original)[1])),h&&T&&(d((b.program||b.inverse).body),l(f,S)),h&&A&&(d(f,S),l((b.inverse||b.program).body))}}return i},o.prototype.BlockStatement=o.prototype.DecoratorBlock=o.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var h=i.program||i.inverse,u=i.program&&i.inverse,f=u,S=u;if(u&&u.chained)for(f=u.body[0].program;S.chained;)S=S.body[S.body.length-1].program;var y={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:p(h.body),closeStandalone:n((f||h).body)};if(i.openStrip.close&&d(h.body,null,!0),u){var b=i.inverseStrip;b.open&&l(h.body,null,!0),b.close&&d(f.body,null,!0),i.closeStrip.open&&l(S.body,null,!0),!this.options.ignoreStandalone&&n(h.body)&&p(f.body)&&(l(h.body),d(f.body))}else i.closeStrip.open&&l(h.body,null,!0);return y},o.prototype.Decorator=o.prototype.MustacheStatement=function(i){return i.strip},o.prototype.PartialStatement=o.prototype.CommentStatement=function(i){var h=i.strip||{};return{inlineStandalone:!0,open:h.open,close:h.close}},a.default=o,v.exports=a.default},function(v,a,g){"use strict";function o(){this.parents=[]}function n(m){this.acceptRequired(m,"path"),this.acceptArray(m.params),this.acceptKey(m,"hash")}function p(m){n.call(this,m),this.acceptKey(m,"program"),this.acceptKey(m,"inverse")}function d(m){this.acceptRequired(m,"name"),this.acceptArray(m.params),this.acceptKey(m,"hash")}var l=g(1).default;a.__esModule=!0;var r=g(6),c=l(r);o.prototype={constructor:o,mutating:!1,acceptKey:function(m,i){var h=this.accept(m[i]);if(this.mutating){if(h&&!o.prototype[h.type])throw new c.default('Unexpected node type "'+h.type+'" found when accepting '+i+" on "+m.type);m[i]=h}},acceptRequired:function(m,i){if(this.acceptKey(m,i),!m[i])throw new c.default(m.type+" requires "+i)},acceptArray:function(m){for(var i=0,h=m.length;i<h;i++)this.acceptKey(m,i),m[i]||(m.splice(i,1),i--,h--)},accept:function(m){if(m){if(!this[m.type])throw new c.default("Unknown type: "+m.type,m);this.current&&this.parents.unshift(this.current),this.current=m;var i=this[m.type](m);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?m:void 0}},Program:function(m){this.acceptArray(m.body)},MustacheStatement:n,Decorator:n,BlockStatement:p,DecoratorBlock:p,PartialStatement:d,PartialBlockStatement:function(m){d.call(this,m),this.acceptKey(m,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(m){this.acceptArray(m.pairs)},HashPair:function(m){this.acceptRequired(m,"value")}},a.default=o,v.exports=a.default},function(v,a,g){"use strict";function o(b,P){if(P=P.path?P.path.original:P,b.path.original!==P){var E={loc:b.path.loc};throw new y.default(b.path.original+" doesn't match "+P,E)}}function n(b,P){this.source=b,this.start={line:P.first_line,column:P.first_column},this.end={line:P.last_line,column:P.last_column}}function p(b){return/^\[.*\]$/.test(b)?b.substring(1,b.length-1):b}function d(b,P){return{open:b.charAt(2)==="~",close:P.charAt(P.length-3)==="~"}}function l(b){return b.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function r(b,P,E){E=this.locInfo(E);for(var N=b?"@":"",T=[],A=0,R=0,M=P.length;R<M;R++){var x=P[R].part,_=P[R].original!==x;if(N+=(P[R].separator||"")+x,_||x!==".."&&x!=="."&&x!=="this")T.push(x);else{if(T.length>0)throw new y.default("Invalid path: "+N,{loc:E});x===".."&&A++}}return{type:"PathExpression",data:b,depth:A,parts:T,original:N,loc:E}}function c(b,P,E,N,T,A){var R=N.charAt(3)||N.charAt(2),M=R!=="{"&&R!=="&",x=/\*/.test(N);return{type:x?"Decorator":"MustacheStatement",path:b,params:P,hash:E,escaped:M,strip:T,loc:this.locInfo(A)}}function m(b,P,E,N){o(b,E),N=this.locInfo(N);var T={type:"Program",body:P,strip:{},loc:N};return{type:"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:T,openStrip:{},inverseStrip:{},closeStrip:{},loc:N}}function i(b,P,E,N,T,A){N&&N.path&&o(b,N);var R=/\*/.test(b.open);P.blockParams=b.blockParams;var M=void 0,x=void 0;if(E){if(R)throw new y.default("Unexpected inverse block on decorator",E);E.chain&&(E.program.body[0].closeStrip=N.strip),x=E.strip,M=E.program}return T&&(T=M,M=P,P=T),{type:R?"DecoratorBlock":"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:P,inverse:M,openStrip:b.strip,inverseStrip:x,closeStrip:N&&N.strip,loc:this.locInfo(A)}}function h(b,P){if(!P&&b.length){var E=b[0].loc,N=b[b.length-1].loc;E&&N&&(P={source:E.source,start:{line:E.start.line,column:E.start.column},end:{line:N.end.line,column:N.end.column}})}return{type:"Program",body:b,strip:{},loc:P}}function u(b,P,E,N){return o(b,E),{type:"PartialBlockStatement",name:b.path,params:b.params,hash:b.hash,program:P,openStrip:b.strip,closeStrip:E&&E.strip,loc:this.locInfo(N)}}var f=g(1).default;a.__esModule=!0,a.SourceLocation=n,a.id=p,a.stripFlags=d,a.stripComment=l,a.preparePath=r,a.prepareMustache=c,a.prepareRawBlock=m,a.prepareBlock=i,a.prepareProgram=h,a.preparePartialBlock=u;var S=g(6),y=f(S)},function(v,a,g){"use strict";function o(){}function n(y,b,P){if(y==null||typeof y!="string"&&y.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+y);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var E=P.parse(y,b),N=new P.Compiler().compile(E,b);return new P.JavaScriptCompiler().compile(N,b)}function p(y,b,P){function E(){var A=P.parse(y,b),R=new P.Compiler().compile(A,b),M=new P.JavaScriptCompiler().compile(R,b,void 0,!0);return P.template(M)}function N(A,R){return T||(T=E()),T.call(this,A,R)}if(b===void 0&&(b={}),y==null||typeof y!="string"&&y.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+y);b=h.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var T=void 0;return N._setup=function(A){return T||(T=E()),T._setup(A)},N._child=function(A,R,M,x){return T||(T=E()),T._child(A,R,M,x)},N}function d(y,b){if(y===b)return!0;if(h.isArray(y)&&h.isArray(b)&&y.length===b.length){for(var P=0;P<y.length;P++)if(!d(y[P],b[P]))return!1;return!0}}function l(y){if(!y.path.parts){var b=y.path;y.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var r=g(34).default,c=g(1).default;a.__esModule=!0,a.Compiler=o,a.precompile=n,a.compile=p;var m=g(6),i=c(m),h=g(5),u=g(45),f=c(u),S=[].slice;o.prototype={compiler:o,equals:function(y){var b=this.opcodes.length;if(y.opcodes.length!==b)return!1;for(var P=0;P<b;P++){var E=this.opcodes[P],N=y.opcodes[P];if(E.opcode!==N.opcode||!d(E.args,N.args))return!1}b=this.children.length;for(var P=0;P<b;P++)if(!this.children[P].equals(y.children[P]))return!1;return!0},guid:0,compile:function(y,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=h.extend(r(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},b.knownHelpers),this.accept(y)},compileProgram:function(y){var b=new this.compiler,P=b.compile(y,this.options),E=this.guid++;return this.usePartial=this.usePartial||P.usePartial,this.children[E]=P,this.useDepths=this.useDepths||P.useDepths,E},accept:function(y){if(!this[y.type])throw new i.default("Unknown type: "+y.type,y);this.sourceNode.unshift(y);var b=this[y.type](y);return this.sourceNode.shift(),b},Program:function(y){this.options.blockParams.unshift(y.blockParams);for(var b=y.body,P=b.length,E=0;E<P;E++)this.accept(b[E]);return this.options.blockParams.shift(),this.isSimple=P===1,this.blockParams=y.blockParams?y.blockParams.length:0,this},BlockStatement:function(y){l(y);var b=y.program,P=y.inverse;b=b&&this.compileProgram(b),P=P&&this.compileProgram(P);var E=this.classifySexpr(y);E==="helper"?this.helperSexpr(y,b,P):E==="simple"?(this.simpleSexpr(y),this.opcode("pushProgram",b),this.opcode("pushProgram",P),this.opcode("emptyHash"),this.opcode("blockValue",y.path.original)):(this.ambiguousSexpr(y,b,P),this.opcode("pushProgram",b),this.opcode("pushProgram",P),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(y){var b=y.program&&this.compileProgram(y.program),P=this.setupFullMustacheParams(y,b,void 0),E=y.path;this.useDecorators=!0,this.opcode("registerDecorator",P.length,E.original)},PartialStatement:function(y){this.usePartial=!0;var b=y.program;b&&(b=this.compileProgram(y.program));var P=y.params;if(P.length>1)throw new i.default("Unsupported number of partial arguments: "+P.length,y);P.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):P.push({type:"PathExpression",parts:[],depth:0}));var E=y.name.original,N=y.name.type==="SubExpression";N&&this.accept(y.name),this.setupFullMustacheParams(y,b,void 0,!0);var T=y.indent||"";this.options.preventIndent&&T&&(this.opcode("appendContent",T),T=""),this.opcode("invokePartial",N,E,T),this.opcode("append")},PartialBlockStatement:function(y){this.PartialStatement(y)},MustacheStatement:function(y){this.SubExpression(y),y.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(y){this.DecoratorBlock(y)},ContentStatement:function(y){y.value&&this.opcode("appendContent",y.value)},CommentStatement:function(){},SubExpression:function(y){l(y);var b=this.classifySexpr(y);b==="simple"?this.simpleSexpr(y):b==="helper"?this.helperSexpr(y):this.ambiguousSexpr(y)},ambiguousSexpr:function(y,b,P){var E=y.path,N=E.parts[0],T=b!=null||P!=null;this.opcode("getContext",E.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",P),E.strict=!0,this.accept(E),this.opcode("invokeAmbiguous",N,T)},simpleSexpr:function(y){var b=y.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(y,b,P){var E=this.setupFullMustacheParams(y,b,P),N=y.path,T=N.parts[0];if(this.options.knownHelpers[T])this.opcode("invokeKnownHelper",E.length,T);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+T,y);N.strict=!0,N.falsy=!0,this.accept(N),this.opcode("invokeHelper",E.length,N.original,f.default.helpers.simpleId(N))}},PathExpression:function(y){this.addDepth(y.depth),this.opcode("getContext",y.depth);var b=y.parts[0],P=f.default.helpers.scopedId(y),E=!y.depth&&!P&&this.blockParamIndex(b);E?this.opcode("lookupBlockParam",E,y.parts):b?y.data?(this.options.data=!0,this.opcode("lookupData",y.depth,y.parts,y.strict)):this.opcode("lookupOnContext",y.parts,y.falsy,y.strict,P):this.opcode("pushContext")},StringLiteral:function(y){this.opcode("pushString",y.value)},NumberLiteral:function(y){this.opcode("pushLiteral",y.value)},BooleanLiteral:function(y){this.opcode("pushLiteral",y.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(y){var b=y.pairs,P=0,E=b.length;for(this.opcode("pushHash");P<E;P++)this.pushParam(b[P].value);for(;P--;)this.opcode("assignToHash",b[P].key);this.opcode("popHash")},opcode:function(y){this.opcodes.push({opcode:y,args:S.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(y){y&&(this.useDepths=!0)},classifySexpr:function(y){var b=f.default.helpers.simpleId(y.path),P=b&&!!this.blockParamIndex(y.path.parts[0]),E=!P&&f.default.helpers.helperExpression(y),N=!P&&(E||b);if(N&&!E){var T=y.path.parts[0],A=this.options;A.knownHelpers[T]?E=!0:A.knownHelpersOnly&&(N=!1)}return E?"helper":N?"ambiguous":"simple"},pushParams:function(y){for(var b=0,P=y.length;b<P;b++)this.pushParam(y[b])},pushParam:function(y){var b=y.value!=null?y.value:y.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),y.depth&&this.addDepth(y.depth),this.opcode("getContext",y.depth||0),this.opcode("pushStringParam",b,y.type),y.type==="SubExpression"&&this.accept(y);else{if(this.trackIds){var P=void 0;if(!y.parts||f.default.helpers.scopedId(y)||y.depth||(P=this.blockParamIndex(y.parts[0])),P){var E=y.parts.slice(1).join(".");this.opcode("pushId","BlockParam",P,E)}else b=y.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",y.type,b)}this.accept(y)}},setupFullMustacheParams:function(y,b,P,E){var N=y.params;return this.pushParams(N),this.opcode("pushProgram",b),this.opcode("pushProgram",P),y.hash?this.accept(y.hash):this.opcode("emptyHash",E),N},blockParamIndex:function(y){for(var b=0,P=this.options.blockParams.length;b<P;b++){var E=this.options.blockParams[b],N=E&&h.indexOf(E,y);if(E&&N>=0)return[b,N]}}}},function(v,a,g){"use strict";function o(f){this.value=f}function n(){}function p(f,S,y,b){var P=S.popStack(),E=0,N=y.length;for(f&&N--;E<N;E++)P=S.nameLookup(P,y[E],b);return f?[S.aliasable("container.strict"),"(",P,", ",S.quotedString(y[E]),", ",JSON.stringify(S.source.currentLocation)," )"]:P}var d=g(13).default,l=g(1).default;a.__esModule=!0;var r=g(4),c=g(6),m=l(c),i=g(5),h=g(53),u=l(h);n.prototype={nameLookup:function(f,S){return this.internalNameLookup(f,S)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=r.COMPILER_REVISION,S=r.REVISION_CHANGES[f];return[f,S]},appendToBuffer:function(f,S,y){return i.isArray(f)||(f=[f]),f=this.source.wrap(f,S),this.environment.isSimple?["return ",f,";"]:y?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,S){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(S),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,S,y,b){this.environment=f,this.options=S,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!b,this.name=this.environment.name,this.isChild=!!y,this.context=y||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,S),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var P=f.opcodes,E=void 0,N=void 0,T=void 0,A=void 0;for(T=0,A=P.length;T<A;T++)E=P[T],this.source.currentLocation=E.loc,N=N||E.loc,this[E.opcode].apply(this,E.args);if(this.source.currentLocation=N,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new m.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),b?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var R=this.createFunctionContext(b);if(this.isChild)return R;var M={compiler:this.compilerInfo(),main:R};this.decorators&&(M.main_d=this.decorators,M.useDecorators=!0);var x=this.context,_=x.programs,L=x.decorators;for(T=0,A=_.length;T<A;T++)_[T]&&(M[T]=_[T],L[T]&&(M[T+"_d"]=L[T],M.useDecorators=!0));return this.environment.usePartial&&(M.usePartial=!0),this.options.data&&(M.useData=!0),this.useDepths&&(M.useDepths=!0),this.useBlockParams&&(M.useBlockParams=!0),this.options.compat&&(M.compat=!0),b?M.compilerOptions=this.options:(M.compiler=JSON.stringify(M.compiler),this.source.currentLocation={start:{line:1,column:0}},M=this.objectLiteral(M),S.srcName?(M=M.toStringWithSourceMap({file:S.destName}),M.map=M.map&&M.map.toString()):M=M.toString()),M},preamble:function(){this.lastContext=0,this.source=new u.default(this.options.srcName),this.decorators=new u.default(this.options.srcName)},createFunctionContext:function(f){var S=this,y="",b=this.stackVars.concat(this.registers.list);b.length>0&&(y+=", "+b.join(", "));var P=0;d(this.aliases).forEach(function(T){var A=S.aliases[T];A.children&&A.referenceCount>1&&(y+=", alias"+ ++P+"="+T,A.children[0]="alias"+P)}),this.lookupPropertyFunctionIsUsed&&(y+=", "+this.lookupPropertyFunctionVarDeclaration());var E=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&E.push("blockParams"),this.useDepths&&E.push("depths");var N=this.mergeSource(y);return f?(E.push(N),Function.apply(this,E)):this.source.wrap(["function(",E.join(","),`) {
  `,N,"}"])},mergeSource:function(f){var S=this.environment.isSimple,y=!this.forceBuffer,b=void 0,P=void 0,E=void 0,N=void 0;return this.source.each(function(T){T.appendToBuffer?(E?T.prepend("  + "):E=T,N=T):(E&&(P?E.prepend("buffer += "):b=!0,N.add(";"),E=N=void 0),P=!0,S||(y=!1))}),y?E?(E.prepend("return "),N.add(";")):P||this.source.push('return "";'):(f+=", buffer = "+(b?"":this.initializeBuffer()),E?(E.prepend("return buffer + "),N.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(b?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var S=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs(f,0,y);var b=this.popStack();y.splice(1,0,b),this.push(this.source.functionCall(S,"call",y))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),S=[this.contextName(0)];this.setupHelperArgs("",0,S,!0),this.flushInline();var y=this.topStack();S.splice(1,0,y),this.pushSource(["if (!",this.lastHelper,") { ",y," = ",this.source.functionCall(f,"call",S),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(S){return[" != null ? ",S,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,S,y,b){var P=0;b||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[P++])),this.resolvePath("context",f,P,S,y)},lookupBlockParam:function(f,S){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",S,1)},lookupData:function(f,S,y){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",S,0,!0,y)},resolvePath:function(f,S,y,b,P){var E=this;if(this.options.strict||this.options.assumeObjects)return void this.push(p(this.options.strict&&P,this,S,f));for(var N=S.length;y<N;y++)this.replaceStack(function(T){var A=E.nameLookup(T,S[y],f);return b?[" && ",A]:[" != null ? ",A," : ",T]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,S){this.pushContext(),this.pushString(S),S!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,S){var y=this.nameLookup("decorators",S,"decorator"),b=this.setupHelperArgs(S,f);this.decorators.push(["fn = ",this.decorators.functionCall(y,"",["fn","props","container",b])," || fn;"])},invokeHelper:function(f,S,y){var b=this.popStack(),P=this.setupHelper(f,S),E=[];y&&E.push(P.name),E.push(b),this.options.strict||E.push(this.aliasable("container.hooks.helperMissing"));var N=["(",this.itemsSeparatedBy(E,"||"),")"],T=this.source.functionCall(N,"call",P.callParams);this.push(T)},itemsSeparatedBy:function(f,S){var y=[];y.push(f[0]);for(var b=1;b<f.length;b++)y.push(S,f[b]);return y},invokeKnownHelper:function(f,S){var y=this.setupHelper(f,S);this.push(this.source.functionCall(y.name,"call",y.callParams))},invokeAmbiguous:function(f,S){this.useRegister("helper");var y=this.popStack();this.emptyHash();var b=this.setupHelper(0,f,S),P=this.lastHelper=this.nameLookup("helpers",f,"helper"),E=["(","(helper = ",P," || ",y,")"];this.options.strict||(E[0]="(helper = ",E.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",E,b.paramsInit?["),(",b.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",b.callParams)," : helper))"])},invokePartial:function(f,S,y){var b=[],P=this.setupParams(S,1,b);f&&(S=this.popStack(),delete P.name),y&&(P.indent=JSON.stringify(y)),P.helpers="helpers",P.partials="partials",P.decorators="container.decorators",f?b.unshift(S):b.unshift(this.nameLookup("partials",S,"partial")),this.options.compat&&(P.depths="depths"),P=this.objectLiteral(P),b.push(P),this.push(this.source.functionCall("container.invokePartial","",b))},assignToHash:function(f){var S=this.popStack(),y=void 0,b=void 0,P=void 0;this.trackIds&&(P=this.popStack()),this.stringParams&&(b=this.popStack(),y=this.popStack());var E=this.hash;y&&(E.contexts[f]=y),b&&(E.types[f]=b),P&&(E.ids[f]=P),E.values[f]=S},pushId:function(f,S,y){f==="BlockParam"?this.pushStackLiteral("blockParams["+S[0]+"].path["+S[1]+"]"+(y?" + "+JSON.stringify("."+y):"")):f==="PathExpression"?this.pushString(S):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(f,S){for(var y=f.children,b=void 0,P=void 0,E=0,N=y.length;E<N;E++){b=y[E],P=new this.compiler;var T=this.matchExistingProgram(b);if(T==null){this.context.programs.push("");var A=this.context.programs.length;b.index=A,b.name="program"+A,this.context.programs[A]=P.compile(b,S,this.context,!this.precompile),this.context.decorators[A]=P.decorators,this.context.environments[A]=b,this.useDepths=this.useDepths||P.useDepths,this.useBlockParams=this.useBlockParams||P.useBlockParams,b.useDepths=this.useDepths,b.useBlockParams=this.useBlockParams}else b.index=T.index,b.name="program"+T.index,this.useDepths=this.useDepths||T.useDepths,this.useBlockParams=this.useBlockParams||T.useBlockParams}},matchExistingProgram:function(f){for(var S=0,y=this.context.environments.length;S<y;S++){var b=this.context.environments[S];if(b&&b.equals(f))return b}},programExpression:function(f){var S=this.environment.children[f],y=[S.index,"data",S.blockParams];return(this.useBlockParams||this.useDepths)&&y.push("blockParams"),this.useDepths&&y.push("depths"),"container.program("+y.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof o||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new o(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var S=["("],y=void 0,b=void 0,P=void 0;if(!this.isInline())throw new m.default("replaceStack on non-inline");var E=this.popStack(!0);if(E instanceof o)y=[E.value],S=["(",y],P=!0;else{b=!0;var N=this.incrStack();S=["((",this.push(N)," = ",E,")"],y=this.topStack()}var T=f.call(this,y);P||this.popStack(),b&&this.stackSlot--,this.push(S.concat(T,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var S=0,y=f.length;S<y;S++){var b=f[S];if(b instanceof o)this.compileStack.push(b);else{var P=this.incrStack();this.pushSource([P," = ",b,";"]),this.compileStack.push(P)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var S=this.isInline(),y=(S?this.inlineStack:this.compileStack).pop();if(!f&&y instanceof o)return y.value;if(!S){if(!this.stackSlot)throw new m.default("Invalid stack pop");this.stackSlot--}return y},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,S=f[f.length-1];return S instanceof o?S.value:S},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var S=this.aliases[f];return S?(S.referenceCount++,S):(S=this.aliases[f]=this.source.wrap(f),S.aliasable=!0,S.referenceCount=1,S)},setupHelper:function(f,S,y){var b=[],P=this.setupHelperArgs(S,f,b,y),E=this.nameLookup("helpers",S,"helper"),N=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:b,paramsInit:P,name:E,callParams:[N].concat(b)}},setupParams:function(f,S,y){var b={},P=[],E=[],N=[],T=!y,A=void 0;T&&(y=[]),b.name=this.quotedString(f),b.hash=this.popStack(),this.trackIds&&(b.hashIds=this.popStack()),this.stringParams&&(b.hashTypes=this.popStack(),b.hashContexts=this.popStack());var R=this.popStack(),M=this.popStack();(M||R)&&(b.fn=M||"container.noop",b.inverse=R||"container.noop");for(var x=S;x--;)A=this.popStack(),y[x]=A,this.trackIds&&(N[x]=this.popStack()),this.stringParams&&(E[x]=this.popStack(),P[x]=this.popStack());return T&&(b.args=this.source.generateArray(y)),this.trackIds&&(b.ids=this.source.generateArray(N)),this.stringParams&&(b.types=this.source.generateArray(E),b.contexts=this.source.generateArray(P)),this.options.data&&(b.data="data"),this.useBlockParams&&(b.blockParams="blockParams"),b},setupHelperArgs:function(f,S,y,b){var P=this.setupParams(f,S,y);return P.loc=JSON.stringify(this.source.currentLocation),P=this.objectLiteral(P),b?(this.useRegister("options"),y.push("options"),["options=",P]):y?(y.push(P),""):P}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),S=n.RESERVED_WORDS={},y=0,b=f.length;y<b;y++)S[f[y]]=!0}(),n.isValidJavaScriptVariableName=function(f){return!n.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},a.default=n,v.exports=a.default},function(v,a,g){"use strict";function o(r,c,m){if(d.isArray(r)){for(var i=[],h=0,u=r.length;h<u;h++)i.push(c.wrap(r[h],m));return i}return typeof r=="boolean"||typeof r=="number"?r+"":r}function n(r){this.srcFile=r,this.source=[]}var p=g(13).default;a.__esModule=!0;var d=g(5),l=void 0;try{}catch(r){}l||(l=function(r,c,m,i){this.src="",i&&this.add(i)},l.prototype={add:function(r){d.isArray(r)&&(r=r.join("")),this.src+=r},prepend:function(r){d.isArray(r)&&(r=r.join("")),this.src=r+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(r,c){this.source.unshift(this.wrap(r,c))},push:function(r,c){this.source.push(this.wrap(r,c))},merge:function(){var r=this.empty();return this.each(function(c){r.add(["  ",c,`
`])}),r},each:function(r){for(var c=0,m=this.source.length;c<m;c++)r(this.source[c])},empty:function(){var r=this.currentLocation||{start:{}};return new l(r.start.line,r.start.column,this.srcFile)},wrap:function(r){var c=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return r instanceof l?r:(r=o(r,this,c),new l(c.start.line,c.start.column,this.srcFile,r))},functionCall:function(r,c,m){return m=this.generateList(m),this.wrap([r,c?"."+c+"(":"(",m,")"])},quotedString:function(r){return'"'+(r+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(r){var c=this,m=[];p(r).forEach(function(h){var u=o(r[h],c);u!=="undefined"&&m.push([c.quotedString(h),":",u])});var i=this.generateList(m);return i.prepend("{"),i.add("}"),i},generateList:function(r){for(var c=this.empty(),m=0,i=r.length;m<i;m++)m&&c.add(","),c.add(o(r[m],this));return c},generateArray:function(r){var c=this.generateList(r);return c.prepend("["),c.add("]"),c}},a.default=n,v.exports=a.default}])})},4779:(O,v,a)=>{var g;/*!
* Sizzle CSS Selector Engine v2.3.6
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2021-02-16
*/(function(o){var n,p,d,l,r,c,m,i,h,u,f,S,y,b,P,E,N,T,A,R="sizzle"+1*new Date,M=o.document,x=0,_=0,L=$e(),U=$e(),j=$e(),z=$e(),B=function(F,$){return F===$&&(f=!0),0},q={}.hasOwnProperty,w=[],H=w.pop,V=w.push,ne=w.push,ae=w.slice,de=function(F,$){for(var Z=0,Y=F.length;Z<Y;Z++)if(F[Z]===$)return Z;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ge="[\\x20\\t\\r\\n\\f]",Ce="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Fe="\\["+ge+"*("+Ce+")(?:"+ge+"*([*^$|!~]?=)"+ge+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ce+"))|)"+ge+"*\\]",it=":("+Ce+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Fe+")*)|.*)\\)|)",mt=new RegExp(ge+"+","g"),ut=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g"),ht=new RegExp("^"+ge+"*,"+ge+"*"),At=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),Re=new RegExp(ge+"|>"),Ct=new RegExp(it),Ue=new RegExp("^"+Ce+"$"),We={ID:new RegExp("^#("+Ce+")"),CLASS:new RegExp("^\\.("+Ce+")"),TAG:new RegExp("^("+Ce+"|[*])"),ATTR:new RegExp("^"+Fe),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},Bt=/HTML$/i,je=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,Ne=/^[^{]+\{\s*\[native \w/,De=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ie=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),he=function(F,$){var Z="0x"+F.slice(1)-65536;return $||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ze=function(F,$){return $?F==="\0"?"\uFFFD":F.slice(0,-1)+"\\"+F.charCodeAt(F.length-1).toString(16)+" ":"\\"+F},Ke=function(){S()},Je=yt(function(F){return F.disabled===!0&&F.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ne.apply(w=ae.call(M.childNodes),M.childNodes),w[M.childNodes.length].nodeType}catch(F){ne={apply:w.length?function($,Z){V.apply($,ae.call(Z))}:function($,Z){for(var Y=$.length,W=0;$[Y++]=Z[W++];);$.length=Y-1}}}function Pe(F,$,Z,Y){var W,X,ee,se,ue,me,Ee,Te=$&&$.ownerDocument,Le=$?$.nodeType:9;if(Z=Z||[],typeof F!="string"||!F||Le!==1&&Le!==9&&Le!==11)return Z;if(!Y&&(S($),$=$||y,P)){if(Le!==11&&(ue=De.exec(F)))if(W=ue[1]){if(Le===9)if(ee=$.getElementById(W)){if(ee.id===W)return Z.push(ee),Z}else return Z;else if(Te&&(ee=Te.getElementById(W))&&A($,ee)&&ee.id===W)return Z.push(ee),Z}else{if(ue[2])return ne.apply(Z,$.getElementsByTagName(F)),Z;if((W=ue[3])&&p.getElementsByClassName&&$.getElementsByClassName)return ne.apply(Z,$.getElementsByClassName(W)),Z}if(p.qsa&&!z[F+" "]&&(!E||!E.test(F))&&(Le!==1||$.nodeName.toLowerCase()!=="object")){if(Ee=F,Te=$,Le===1&&(Re.test(F)||At.test(F))){for(Te=ie.test(F)&&gn($.parentNode)||$,(Te!==$||!p.scope)&&((se=$.getAttribute("id"))?se=se.replace(be,Ze):$.setAttribute("id",se=R)),me=c(F),X=me.length;X--;)me[X]=(se?"#"+se:":scope")+" "+mn(me[X]);Ee=me.join(",")}try{return ne.apply(Z,Te.querySelectorAll(Ee)),Z}catch(Ve){z(F,!0)}finally{se===R&&$.removeAttribute("id")}}}return i(F.replace(ut,"$1"),$,Z,Y)}function $e(){var F=[];function $(Z,Y){return F.push(Z+" ")>d.cacheLength&&delete $[F.shift()],$[Z+" "]=Y}return $}function Qe(F){return F[R]=!0,F}function Xe(F){var $=y.createElement("fieldset");try{return!!F($)}catch(Z){return!1}finally{$.parentNode&&$.parentNode.removeChild($),$=null}}function zt(F,$){for(var Z=F.split("|"),Y=Z.length;Y--;)d.attrHandle[Z[Y]]=$}function It(F,$){var Z=$&&F,Y=Z&&F.nodeType===1&&$.nodeType===1&&F.sourceIndex-$.sourceIndex;if(Y)return Y;if(Z){for(;Z=Z.nextSibling;)if(Z===$)return-1}return F?1:-1}function Nt(F){return function($){var Z=$.nodeName.toLowerCase();return Z==="input"&&$.type===F}}function Tn(F){return function($){var Z=$.nodeName.toLowerCase();return(Z==="input"||Z==="button")&&$.type===F}}function rn(F){return function($){return"form"in $?$.parentNode&&$.disabled===!1?"label"in $?"label"in $.parentNode?$.parentNode.disabled===F:$.disabled===F:$.isDisabled===F||$.isDisabled!==!F&&Je($)===F:$.disabled===F:"label"in $?$.disabled===F:!1}}function Wt(F){return Qe(function($){return $=+$,Qe(function(Z,Y){for(var W,X=F([],Z.length,$),ee=X.length;ee--;)Z[W=X[ee]]&&(Z[W]=!(Y[W]=Z[W]))})})}function gn(F){return F&&typeof F.getElementsByTagName!="undefined"&&F}p=Pe.support={},r=Pe.isXML=function(F){var $=F&&F.namespaceURI,Z=F&&(F.ownerDocument||F).documentElement;return!Bt.test($||Z&&Z.nodeName||"HTML")},S=Pe.setDocument=function(F){var $,Z,Y=F?F.ownerDocument||F:M;return Y==y||Y.nodeType!==9||!Y.documentElement||(y=Y,b=y.documentElement,P=!r(y),M!=y&&(Z=y.defaultView)&&Z.top!==Z&&(Z.addEventListener?Z.addEventListener("unload",Ke,!1):Z.attachEvent&&Z.attachEvent("onunload",Ke)),p.scope=Xe(function(W){return b.appendChild(W).appendChild(y.createElement("div")),typeof W.querySelectorAll!="undefined"&&!W.querySelectorAll(":scope fieldset div").length}),p.attributes=Xe(function(W){return W.className="i",!W.getAttribute("className")}),p.getElementsByTagName=Xe(function(W){return W.appendChild(y.createComment("")),!W.getElementsByTagName("*").length}),p.getElementsByClassName=Ne.test(y.getElementsByClassName),p.getById=Xe(function(W){return b.appendChild(W).id=R,!y.getElementsByName||!y.getElementsByName(R).length}),p.getById?(d.filter.ID=function(W){var X=W.replace(ye,he);return function(ee){return ee.getAttribute("id")===X}},d.find.ID=function(W,X){if(typeof X.getElementById!="undefined"&&P){var ee=X.getElementById(W);return ee?[ee]:[]}}):(d.filter.ID=function(W){var X=W.replace(ye,he);return function(ee){var se=typeof ee.getAttributeNode!="undefined"&&ee.getAttributeNode("id");return se&&se.value===X}},d.find.ID=function(W,X){if(typeof X.getElementById!="undefined"&&P){var ee,se,ue,me=X.getElementById(W);if(me){if(ee=me.getAttributeNode("id"),ee&&ee.value===W)return[me];for(ue=X.getElementsByName(W),se=0;me=ue[se++];)if(ee=me.getAttributeNode("id"),ee&&ee.value===W)return[me]}return[]}}),d.find.TAG=p.getElementsByTagName?function(W,X){if(typeof X.getElementsByTagName!="undefined")return X.getElementsByTagName(W);if(p.qsa)return X.querySelectorAll(W)}:function(W,X){var ee,se=[],ue=0,me=X.getElementsByTagName(W);if(W==="*"){for(;ee=me[ue++];)ee.nodeType===1&&se.push(ee);return se}return me},d.find.CLASS=p.getElementsByClassName&&function(W,X){if(typeof X.getElementsByClassName!="undefined"&&P)return X.getElementsByClassName(W)},N=[],E=[],(p.qsa=Ne.test(y.querySelectorAll))&&(Xe(function(W){var X;b.appendChild(W).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",W.querySelectorAll("[msallowcapture^='']").length&&E.push("[*^$]="+ge+`*(?:''|"")`),W.querySelectorAll("[selected]").length||E.push("\\["+ge+"*(?:value|"+te+")"),W.querySelectorAll("[id~="+R+"-]").length||E.push("~="),X=y.createElement("input"),X.setAttribute("name",""),W.appendChild(X),W.querySelectorAll("[name='']").length||E.push("\\["+ge+"*name"+ge+"*="+ge+`*(?:''|"")`),W.querySelectorAll(":checked").length||E.push(":checked"),W.querySelectorAll("a#"+R+"+*").length||E.push(".#.+[+~]"),W.querySelectorAll("\\\f"),E.push("[\\r\\n\\f]")}),Xe(function(W){W.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var X=y.createElement("input");X.setAttribute("type","hidden"),W.appendChild(X).setAttribute("name","D"),W.querySelectorAll("[name=d]").length&&E.push("name"+ge+"*[*^$|!~]?="),W.querySelectorAll(":enabled").length!==2&&E.push(":enabled",":disabled"),b.appendChild(W).disabled=!0,W.querySelectorAll(":disabled").length!==2&&E.push(":enabled",":disabled"),W.querySelectorAll("*,:x"),E.push(",.*:")})),(p.matchesSelector=Ne.test(T=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector||b.msMatchesSelector))&&Xe(function(W){p.disconnectedMatch=T.call(W,"*"),T.call(W,"[s!='']:x"),N.push("!=",it)}),E=E.length&&new RegExp(E.join("|")),N=N.length&&new RegExp(N.join("|")),$=Ne.test(b.compareDocumentPosition),A=$||Ne.test(b.contains)?function(W,X){var ee=W.nodeType===9?W.documentElement:W,se=X&&X.parentNode;return W===se||!!(se&&se.nodeType===1&&(ee.contains?ee.contains(se):W.compareDocumentPosition&&W.compareDocumentPosition(se)&16))}:function(W,X){if(X){for(;X=X.parentNode;)if(X===W)return!0}return!1},B=$?function(W,X){if(W===X)return f=!0,0;var ee=!W.compareDocumentPosition-!X.compareDocumentPosition;return ee||(ee=(W.ownerDocument||W)==(X.ownerDocument||X)?W.compareDocumentPosition(X):1,ee&1||!p.sortDetached&&X.compareDocumentPosition(W)===ee?W==y||W.ownerDocument==M&&A(M,W)?-1:X==y||X.ownerDocument==M&&A(M,X)?1:u?de(u,W)-de(u,X):0:ee&4?-1:1)}:function(W,X){if(W===X)return f=!0,0;var ee,se=0,ue=W.parentNode,me=X.parentNode,Ee=[W],Te=[X];if(!ue||!me)return W==y?-1:X==y?1:ue?-1:me?1:u?de(u,W)-de(u,X):0;if(ue===me)return It(W,X);for(ee=W;ee=ee.parentNode;)Ee.unshift(ee);for(ee=X;ee=ee.parentNode;)Te.unshift(ee);for(;Ee[se]===Te[se];)se++;return se?It(Ee[se],Te[se]):Ee[se]==M?-1:Te[se]==M?1:0}),y},Pe.matches=function(F,$){return Pe(F,null,null,$)},Pe.matchesSelector=function(F,$){if(S(F),p.matchesSelector&&P&&!z[$+" "]&&(!N||!N.test($))&&(!E||!E.test($)))try{var Z=T.call(F,$);if(Z||p.disconnectedMatch||F.document&&F.document.nodeType!==11)return Z}catch(Y){z($,!0)}return Pe($,y,null,[F]).length>0},Pe.contains=function(F,$){return(F.ownerDocument||F)!=y&&S(F),A(F,$)},Pe.attr=function(F,$){(F.ownerDocument||F)!=y&&S(F);var Z=d.attrHandle[$.toLowerCase()],Y=Z&&q.call(d.attrHandle,$.toLowerCase())?Z(F,$,!P):void 0;return Y!==void 0?Y:p.attributes||!P?F.getAttribute($):(Y=F.getAttributeNode($))&&Y.specified?Y.value:null},Pe.escape=function(F){return(F+"").replace(be,Ze)},Pe.error=function(F){throw new Error("Syntax error, unrecognized expression: "+F)},Pe.uniqueSort=function(F){var $,Z=[],Y=0,W=0;if(f=!p.detectDuplicates,u=!p.sortStable&&F.slice(0),F.sort(B),f){for(;$=F[W++];)$===F[W]&&(Y=Z.push(W));for(;Y--;)F.splice(Z[Y],1)}return u=null,F},l=Pe.getText=function(F){var $,Z="",Y=0,W=F.nodeType;if(W){if(W===1||W===9||W===11){if(typeof F.textContent=="string")return F.textContent;for(F=F.firstChild;F;F=F.nextSibling)Z+=l(F)}else if(W===3||W===4)return F.nodeValue}else for(;$=F[Y++];)Z+=l($);return Z},d=Pe.selectors={cacheLength:50,createPseudo:Qe,match:We,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(F){return F[1]=F[1].replace(ye,he),F[3]=(F[3]||F[4]||F[5]||"").replace(ye,he),F[2]==="~="&&(F[3]=" "+F[3]+" "),F.slice(0,4)},CHILD:function(F){return F[1]=F[1].toLowerCase(),F[1].slice(0,3)==="nth"?(F[3]||Pe.error(F[0]),F[4]=+(F[4]?F[5]+(F[6]||1):2*(F[3]==="even"||F[3]==="odd")),F[5]=+(F[7]+F[8]||F[3]==="odd")):F[3]&&Pe.error(F[0]),F},PSEUDO:function(F){var $,Z=!F[6]&&F[2];return We.CHILD.test(F[0])?null:(F[3]?F[2]=F[4]||F[5]||"":Z&&Ct.test(Z)&&($=c(Z,!0))&&($=Z.indexOf(")",Z.length-$)-Z.length)&&(F[0]=F[0].slice(0,$),F[2]=Z.slice(0,$)),F.slice(0,3))}},filter:{TAG:function(F){var $=F.replace(ye,he).toLowerCase();return F==="*"?function(){return!0}:function(Z){return Z.nodeName&&Z.nodeName.toLowerCase()===$}},CLASS:function(F){var $=L[F+" "];return $||($=new RegExp("(^|"+ge+")"+F+"("+ge+"|$)"))&&L(F,function(Z){return $.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute!="undefined"&&Z.getAttribute("class")||"")})},ATTR:function(F,$,Z){return function(Y){var W=Pe.attr(Y,F);return W==null?$==="!=":$?(W+="",$==="="?W===Z:$==="!="?W!==Z:$==="^="?Z&&W.indexOf(Z)===0:$==="*="?Z&&W.indexOf(Z)>-1:$==="$="?Z&&W.slice(-Z.length)===Z:$==="~="?(" "+W.replace(mt," ")+" ").indexOf(Z)>-1:$==="|="?W===Z||W.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(F,$,Z,Y,W){var X=F.slice(0,3)!=="nth",ee=F.slice(-4)!=="last",se=$==="of-type";return Y===1&&W===0?function(ue){return!!ue.parentNode}:function(ue,me,Ee){var Te,Le,Ve,ve,Ie,vt,Dt=X!==ee?"nextSibling":"previousSibling",rt=ue.parentNode,Yt=se&&ue.nodeName.toLowerCase(),Un=!Ee&&!se,Et=!1;if(rt){if(X){for(;Dt;){for(ve=ue;ve=ve[Dt];)if(se?ve.nodeName.toLowerCase()===Yt:ve.nodeType===1)return!1;vt=Dt=F==="only"&&!vt&&"nextSibling"}return!0}if(vt=[ee?rt.firstChild:rt.lastChild],ee&&Un){for(ve=rt,Ve=ve[R]||(ve[R]={}),Le=Ve[ve.uniqueID]||(Ve[ve.uniqueID]={}),Te=Le[F]||[],Ie=Te[0]===x&&Te[1],Et=Ie&&Te[2],ve=Ie&&rt.childNodes[Ie];ve=++Ie&&ve&&ve[Dt]||(Et=Ie=0)||vt.pop();)if(ve.nodeType===1&&++Et&&ve===ue){Le[F]=[x,Ie,Et];break}}else if(Un&&(ve=ue,Ve=ve[R]||(ve[R]={}),Le=Ve[ve.uniqueID]||(Ve[ve.uniqueID]={}),Te=Le[F]||[],Ie=Te[0]===x&&Te[1],Et=Ie),Et===!1)for(;(ve=++Ie&&ve&&ve[Dt]||(Et=Ie=0)||vt.pop())&&!((se?ve.nodeName.toLowerCase()===Yt:ve.nodeType===1)&&++Et&&(Un&&(Ve=ve[R]||(ve[R]={}),Le=Ve[ve.uniqueID]||(Ve[ve.uniqueID]={}),Le[F]=[x,Et]),ve===ue)););return Et-=W,Et===Y||Et%Y===0&&Et/Y>=0}}},PSEUDO:function(F,$){var Z,Y=d.pseudos[F]||d.setFilters[F.toLowerCase()]||Pe.error("unsupported pseudo: "+F);return Y[R]?Y($):Y.length>1?(Z=[F,F,"",$],d.setFilters.hasOwnProperty(F.toLowerCase())?Qe(function(W,X){for(var ee,se=Y(W,$),ue=se.length;ue--;)ee=de(W,se[ue]),W[ee]=!(X[ee]=se[ue])}):function(W){return Y(W,0,Z)}):Y}},pseudos:{not:Qe(function(F){var $=[],Z=[],Y=m(F.replace(ut,"$1"));return Y[R]?Qe(function(W,X,ee,se){for(var ue,me=Y(W,null,se,[]),Ee=W.length;Ee--;)(ue=me[Ee])&&(W[Ee]=!(X[Ee]=ue))}):function(W,X,ee){return $[0]=W,Y($,null,ee,Z),$[0]=null,!Z.pop()}}),has:Qe(function(F){return function($){return Pe(F,$).length>0}}),contains:Qe(function(F){return F=F.replace(ye,he),function($){return($.textContent||l($)).indexOf(F)>-1}}),lang:Qe(function(F){return Ue.test(F||"")||Pe.error("unsupported lang: "+F),F=F.replace(ye,he).toLowerCase(),function($){var Z;do if(Z=P?$.lang:$.getAttribute("xml:lang")||$.getAttribute("lang"))return Z=Z.toLowerCase(),Z===F||Z.indexOf(F+"-")===0;while(($=$.parentNode)&&$.nodeType===1);return!1}}),target:function(F){var $=o.location&&o.location.hash;return $&&$.slice(1)===F.id},root:function(F){return F===b},focus:function(F){return F===y.activeElement&&(!y.hasFocus||y.hasFocus())&&!!(F.type||F.href||~F.tabIndex)},enabled:rn(!1),disabled:rn(!0),checked:function(F){var $=F.nodeName.toLowerCase();return $==="input"&&!!F.checked||$==="option"&&!!F.selected},selected:function(F){return F.parentNode&&F.parentNode.selectedIndex,F.selected===!0},empty:function(F){for(F=F.firstChild;F;F=F.nextSibling)if(F.nodeType<6)return!1;return!0},parent:function(F){return!d.pseudos.empty(F)},header:function(F){return pe.test(F.nodeName)},input:function(F){return je.test(F.nodeName)},button:function(F){var $=F.nodeName.toLowerCase();return $==="input"&&F.type==="button"||$==="button"},text:function(F){var $;return F.nodeName.toLowerCase()==="input"&&F.type==="text"&&(($=F.getAttribute("type"))==null||$.toLowerCase()==="text")},first:Wt(function(){return[0]}),last:Wt(function(F,$){return[$-1]}),eq:Wt(function(F,$,Z){return[Z<0?Z+$:Z]}),even:Wt(function(F,$){for(var Z=0;Z<$;Z+=2)F.push(Z);return F}),odd:Wt(function(F,$){for(var Z=1;Z<$;Z+=2)F.push(Z);return F}),lt:Wt(function(F,$,Z){for(var Y=Z<0?Z+$:Z>$?$:Z;--Y>=0;)F.push(Y);return F}),gt:Wt(function(F,$,Z){for(var Y=Z<0?Z+$:Z;++Y<$;)F.push(Y);return F})}},d.pseudos.nth=d.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[n]=Nt(n);for(n in{submit:!0,reset:!0})d.pseudos[n]=Tn(n);function Ft(){}Ft.prototype=d.filters=d.pseudos,d.setFilters=new Ft,c=Pe.tokenize=function(F,$){var Z,Y,W,X,ee,se,ue,me=U[F+" "];if(me)return $?0:me.slice(0);for(ee=F,se=[],ue=d.preFilter;ee;){(!Z||(Y=ht.exec(ee)))&&(Y&&(ee=ee.slice(Y[0].length)||ee),se.push(W=[])),Z=!1,(Y=At.exec(ee))&&(Z=Y.shift(),W.push({value:Z,type:Y[0].replace(ut," ")}),ee=ee.slice(Z.length));for(X in d.filter)(Y=We[X].exec(ee))&&(!ue[X]||(Y=ue[X](Y)))&&(Z=Y.shift(),W.push({value:Z,type:X,matches:Y}),ee=ee.slice(Z.length));if(!Z)break}return $?ee.length:ee?Pe.error(F):U(F,se).slice(0)};function mn(F){for(var $=0,Z=F.length,Y="";$<Z;$++)Y+=F[$].value;return Y}function yt(F,$,Z){var Y=$.dir,W=$.next,X=W||Y,ee=Z&&X==="parentNode",se=_++;return $.first?function(ue,me,Ee){for(;ue=ue[Y];)if(ue.nodeType===1||ee)return F(ue,me,Ee);return!1}:function(ue,me,Ee){var Te,Le,Ve,ve=[x,se];if(Ee){for(;ue=ue[Y];)if((ue.nodeType===1||ee)&&F(ue,me,Ee))return!0}else for(;ue=ue[Y];)if(ue.nodeType===1||ee)if(Ve=ue[R]||(ue[R]={}),Le=Ve[ue.uniqueID]||(Ve[ue.uniqueID]={}),W&&W===ue.nodeName.toLowerCase())ue=ue[Y]||ue;else{if((Te=Le[X])&&Te[0]===x&&Te[1]===se)return ve[2]=Te[2];if(Le[X]=ve,ve[2]=F(ue,me,Ee))return!0}return!1}}function An(F){return F.length>1?function($,Z,Y){for(var W=F.length;W--;)if(!F[W]($,Z,Y))return!1;return!0}:F[0]}function kn(F,$,Z){for(var Y=0,W=$.length;Y<W;Y++)Pe(F,$[Y],Z);return Z}function cn(F,$,Z,Y,W){for(var X,ee=[],se=0,ue=F.length,me=$!=null;se<ue;se++)(X=F[se])&&(!Z||Z(X,Y,W))&&(ee.push(X),me&&$.push(se));return ee}function wn(F,$,Z,Y,W,X){return Y&&!Y[R]&&(Y=wn(Y)),W&&!W[R]&&(W=wn(W,X)),Qe(function(ee,se,ue,me){var Ee,Te,Le,Ve=[],ve=[],Ie=se.length,vt=ee||kn($||"*",ue.nodeType?[ue]:ue,[]),Dt=F&&(ee||!$)?cn(vt,Ve,F,ue,me):vt,rt=Z?W||(ee?F:Ie||Y)?[]:se:Dt;if(Z&&Z(Dt,rt,ue,me),Y)for(Ee=cn(rt,ve),Y(Ee,[],ue,me),Te=Ee.length;Te--;)(Le=Ee[Te])&&(rt[ve[Te]]=!(Dt[ve[Te]]=Le));if(ee){if(W||F){if(W){for(Ee=[],Te=rt.length;Te--;)(Le=rt[Te])&&Ee.push(Dt[Te]=Le);W(null,rt=[],Ee,me)}for(Te=rt.length;Te--;)(Le=rt[Te])&&(Ee=W?de(ee,Le):Ve[Te])>-1&&(ee[Ee]=!(se[Ee]=Le))}}else rt=cn(rt===se?rt.splice(Ie,rt.length):rt),W?W(null,se,rt,me):ne.apply(se,rt)})}function Nn(F){for(var $,Z,Y,W=F.length,X=d.relative[F[0].type],ee=X||d.relative[" "],se=X?1:0,ue=yt(function(Te){return Te===$},ee,!0),me=yt(function(Te){return de($,Te)>-1},ee,!0),Ee=[function(Te,Le,Ve){var ve=!X&&(Ve||Le!==h)||(($=Le).nodeType?ue(Te,Le,Ve):me(Te,Le,Ve));return $=null,ve}];se<W;se++)if(Z=d.relative[F[se].type])Ee=[yt(An(Ee),Z)];else{if(Z=d.filter[F[se].type].apply(null,F[se].matches),Z[R]){for(Y=++se;Y<W&&!d.relative[F[Y].type];Y++);return wn(se>1&&An(Ee),se>1&&mn(F.slice(0,se-1).concat({value:F[se-2].type===" "?"*":""})).replace(ut,"$1"),Z,se<Y&&Nn(F.slice(se,Y)),Y<W&&Nn(F=F.slice(Y)),Y<W&&mn(F))}Ee.push(Z)}return An(Ee)}function po(F,$){var Z=$.length>0,Y=F.length>0,W=function(X,ee,se,ue,me){var Ee,Te,Le,Ve=0,ve="0",Ie=X&&[],vt=[],Dt=h,rt=X||Y&&d.find.TAG("*",me),Yt=x+=Dt==null?1:Math.random()||.1,Un=rt.length;for(me&&(h=ee==y||ee||me);ve!==Un&&(Ee=rt[ve])!=null;ve++){if(Y&&Ee){for(Te=0,!ee&&Ee.ownerDocument!=y&&(S(Ee),se=!P);Le=F[Te++];)if(Le(Ee,ee||y,se)){ue.push(Ee);break}me&&(x=Yt)}Z&&((Ee=!Le&&Ee)&&Ve--,X&&Ie.push(Ee))}if(Ve+=ve,Z&&ve!==Ve){for(Te=0;Le=$[Te++];)Le(Ie,vt,ee,se);if(X){if(Ve>0)for(;ve--;)Ie[ve]||vt[ve]||(vt[ve]=H.call(ue));vt=cn(vt)}ne.apply(ue,vt),me&&!X&&vt.length>0&&Ve+$.length>1&&Pe.uniqueSort(ue)}return me&&(x=Yt,h=Dt),Ie};return Z?Qe(W):W}m=Pe.compile=function(F,$){var Z,Y=[],W=[],X=j[F+" "];if(!X){for($||($=c(F)),Z=$.length;Z--;)X=Nn($[Z]),X[R]?Y.push(X):W.push(X);X=j(F,po(W,Y)),X.selector=F}return X},i=Pe.select=function(F,$,Z,Y){var W,X,ee,se,ue,me=typeof F=="function"&&F,Ee=!Y&&c(F=me.selector||F);if(Z=Z||[],Ee.length===1){if(X=Ee[0]=Ee[0].slice(0),X.length>2&&(ee=X[0]).type==="ID"&&$.nodeType===9&&P&&d.relative[X[1].type]){if($=(d.find.ID(ee.matches[0].replace(ye,he),$)||[])[0],$)me&&($=$.parentNode);else return Z;F=F.slice(X.shift().value.length)}for(W=We.needsContext.test(F)?0:X.length;W--&&(ee=X[W],!d.relative[se=ee.type]);)if((ue=d.find[se])&&(Y=ue(ee.matches[0].replace(ye,he),ie.test(X[0].type)&&gn($.parentNode)||$))){if(X.splice(W,1),F=Y.length&&mn(X),!F)return ne.apply(Z,Y),Z;break}}return(me||m(F,Ee))(Y,$,!P,Z,!$||ie.test(F)&&gn($.parentNode)||$),Z},p.sortStable=R.split("").sort(B).join("")===R,p.detectDuplicates=!!f,S(),p.sortDetached=Xe(function(F){return F.compareDocumentPosition(y.createElement("fieldset"))&1}),Xe(function(F){return F.innerHTML="<a href='#'></a>",F.firstChild.getAttribute("href")==="#"})||zt("type|href|height|width",function(F,$,Z){if(!Z)return F.getAttribute($,$.toLowerCase()==="type"?1:2)}),(!p.attributes||!Xe(function(F){return F.innerHTML="<input/>",F.firstChild.setAttribute("value",""),F.firstChild.getAttribute("value")===""}))&&zt("value",function(F,$,Z){if(!Z&&F.nodeName.toLowerCase()==="input")return F.defaultValue}),Xe(function(F){return F.getAttribute("disabled")==null})||zt(te,function(F,$,Z){var Y;if(!Z)return F[$]===!0?$.toLowerCase():(Y=F.getAttributeNode($))&&Y.specified?Y.value:null});var Kn=o.Sizzle;Pe.noConflict=function(){return o.Sizzle===Pe&&(o.Sizzle=Kn),Pe},g=function(){return Pe}.call(v,a,v,O),g!==void 0&&(O.exports=g)})(window)},1450:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(9003),a(1143),a(2047),a(655),a(5401),a(6365),a(6073),a(2075),a(184),a(4492)],o=function(n,p,d,l,r,c,m){"use strict";var i=/%20/g,h=/#.*$/,u=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,S=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,y=/^(?:GET|HEAD)$/,b=/^\/\//,P={},E={},N="*/".concat("*"),T=p.createElement("a");T.href=r.href;function A(L){return function(U,j){typeof U!="string"&&(j=U,U="*");var z,B=0,q=U.toLowerCase().match(l)||[];if(d(j))for(;z=q[B++];)z[0]==="+"?(z=z.slice(1)||"*",(L[z]=L[z]||[]).unshift(j)):(L[z]=L[z]||[]).push(j)}}function R(L,U,j,z){var B={},q=L===E;function w(H){var V;return B[H]=!0,n.each(L[H]||[],function(ne,ae){var de=ae(U,j,z);if(typeof de=="string"&&!q&&!B[de])return U.dataTypes.unshift(de),w(de),!1;if(q)return!(V=de)}),V}return w(U.dataTypes[0])||!B["*"]&&w("*")}function M(L,U){var j,z,B=n.ajaxSettings.flatOptions||{};for(j in U)U[j]!==void 0&&((B[j]?L:z||(z={}))[j]=U[j]);return z&&n.extend(!0,L,z),L}function x(L,U,j){for(var z,B,q,w,H=L.contents,V=L.dataTypes;V[0]==="*";)V.shift(),z===void 0&&(z=L.mimeType||U.getResponseHeader("Content-Type"));if(z){for(B in H)if(H[B]&&H[B].test(z)){V.unshift(B);break}}if(V[0]in j)q=V[0];else{for(B in j){if(!V[0]||L.converters[B+" "+V[0]]){q=B;break}w||(w=B)}q=q||w}if(q)return q!==V[0]&&V.unshift(q),j[q]}function _(L,U,j,z){var B,q,w,H,V,ne={},ae=L.dataTypes.slice();if(ae[1])for(w in L.converters)ne[w.toLowerCase()]=L.converters[w];for(q=ae.shift();q;)if(L.responseFields[q]&&(j[L.responseFields[q]]=U),!V&&z&&L.dataFilter&&(U=L.dataFilter(U,L.dataType)),V=q,q=ae.shift(),q){if(q==="*")q=V;else if(V!=="*"&&V!==q){if(w=ne[V+" "+q]||ne["* "+q],!w){for(B in ne)if(H=B.split(" "),H[1]===q&&(w=ne[V+" "+H[0]]||ne["* "+H[0]],w)){w===!0?w=ne[B]:ne[B]!==!0&&(q=H[0],ae.unshift(H[1]));break}}if(w!==!0)if(w&&L.throws)U=w(U);else try{U=w(U)}catch(de){return{state:"parsererror",error:w?de:"No conversion from "+V+" to "+q}}}}return{state:"success",data:U}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:S.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":N,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(L,U){return U?M(M(L,n.ajaxSettings),U):M(n.ajaxSettings,L)},ajaxPrefilter:A(P),ajaxTransport:A(E),ajax:function(L,U){typeof L=="object"&&(U=L,L=void 0),U=U||{};var j,z,B,q,w,H,V,ne,ae,de,te=n.ajaxSetup({},U),ge=te.context||te,Ce=te.context&&(ge.nodeType||ge.jquery)?n(ge):n.event,Fe=n.Deferred(),it=n.Callbacks("once memory"),mt=te.statusCode||{},ut={},ht={},At="canceled",Re={readyState:0,getResponseHeader:function(Ue){var We;if(V){if(!q)for(q={};We=f.exec(B);)q[We[1].toLowerCase()+" "]=(q[We[1].toLowerCase()+" "]||[]).concat(We[2]);We=q[Ue.toLowerCase()+" "]}return We==null?null:We.join(", ")},getAllResponseHeaders:function(){return V?B:null},setRequestHeader:function(Ue,We){return V==null&&(Ue=ht[Ue.toLowerCase()]=ht[Ue.toLowerCase()]||Ue,ut[Ue]=We),this},overrideMimeType:function(Ue){return V==null&&(te.mimeType=Ue),this},statusCode:function(Ue){var We;if(Ue)if(V)Re.always(Ue[Re.status]);else for(We in Ue)mt[We]=[mt[We],Ue[We]];return this},abort:function(Ue){var We=Ue||At;return j&&j.abort(We),Ct(0,We),this}};if(Fe.promise(Re),te.url=((L||te.url||r.href)+"").replace(b,r.protocol+"//"),te.type=U.method||U.type||te.method||te.type,te.dataTypes=(te.dataType||"*").toLowerCase().match(l)||[""],te.crossDomain==null){H=p.createElement("a");try{H.href=te.url,H.href=H.href,te.crossDomain=T.protocol+"//"+T.host!=H.protocol+"//"+H.host}catch(Ue){te.crossDomain=!0}}if(te.data&&te.processData&&typeof te.data!="string"&&(te.data=n.param(te.data,te.traditional)),R(P,te,U,Re),V)return Re;ne=n.event&&te.global,ne&&n.active++===0&&n.event.trigger("ajaxStart"),te.type=te.type.toUpperCase(),te.hasContent=!y.test(te.type),z=te.url.replace(h,""),te.hasContent?te.data&&te.processData&&(te.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(te.data=te.data.replace(i,"+")):(de=te.url.slice(z.length),te.data&&(te.processData||typeof te.data=="string")&&(z+=(m.test(z)?"&":"?")+te.data,delete te.data),te.cache===!1&&(z=z.replace(u,"$1"),de=(m.test(z)?"&":"?")+"_="+c.guid+++de),te.url=z+de),te.ifModified&&(n.lastModified[z]&&Re.setRequestHeader("If-Modified-Since",n.lastModified[z]),n.etag[z]&&Re.setRequestHeader("If-None-Match",n.etag[z])),(te.data&&te.hasContent&&te.contentType!==!1||U.contentType)&&Re.setRequestHeader("Content-Type",te.contentType),Re.setRequestHeader("Accept",te.dataTypes[0]&&te.accepts[te.dataTypes[0]]?te.accepts[te.dataTypes[0]]+(te.dataTypes[0]!=="*"?", "+N+"; q=0.01":""):te.accepts["*"]);for(ae in te.headers)Re.setRequestHeader(ae,te.headers[ae]);if(te.beforeSend&&(te.beforeSend.call(ge,Re,te)===!1||V))return Re.abort();if(At="abort",it.add(te.complete),Re.done(te.success),Re.fail(te.error),j=R(E,te,U,Re),!j)Ct(-1,"No Transport");else{if(Re.readyState=1,ne&&Ce.trigger("ajaxSend",[Re,te]),V)return Re;te.async&&te.timeout>0&&(w=window.setTimeout(function(){Re.abort("timeout")},te.timeout));try{V=!1,j.send(ut,Ct)}catch(Ue){if(V)throw Ue;Ct(-1,Ue)}}function Ct(Ue,We,Bt,je){var pe,Ne,De,ie,ye,he=We;V||(V=!0,w&&window.clearTimeout(w),j=void 0,B=je||"",Re.readyState=Ue>0?4:0,pe=Ue>=200&&Ue<300||Ue===304,Bt&&(ie=x(te,Re,Bt)),!pe&&n.inArray("script",te.dataTypes)>-1&&n.inArray("json",te.dataTypes)<0&&(te.converters["text script"]=function(){}),ie=_(te,ie,Re,pe),pe?(te.ifModified&&(ye=Re.getResponseHeader("Last-Modified"),ye&&(n.lastModified[z]=ye),ye=Re.getResponseHeader("etag"),ye&&(n.etag[z]=ye)),Ue===204||te.type==="HEAD"?he="nocontent":Ue===304?he="notmodified":(he=ie.state,Ne=ie.data,De=ie.error,pe=!De)):(De=he,(Ue||!he)&&(he="error",Ue<0&&(Ue=0))),Re.status=Ue,Re.statusText=(We||he)+"",pe?Fe.resolveWith(ge,[Ne,he,Re]):Fe.rejectWith(ge,[Re,he,De]),Re.statusCode(mt),mt=void 0,ne&&Ce.trigger(pe?"ajaxSuccess":"ajaxError",[Re,te,pe?Ne:De]),it.fireWith(ge,[Re,he]),ne&&(Ce.trigger("ajaxComplete",[Re,te]),--n.active||n.event.trigger("ajaxStop")))}return Re},getJSON:function(L,U,j){return n.get(L,U,j,"json")},getScript:function(L,U){return n.get(L,void 0,U,"script")}}),n.each(["get","post"],function(L,U){n[U]=function(j,z,B,q){return d(z)&&(q=q||B,B=z,z=void 0),n.ajax(n.extend({url:j,type:U,dataType:q,data:z,success:B},n.isPlainObject(j)&&j))}}),n.ajaxPrefilter(function(L){var U;for(U in L.headers)U.toLowerCase()==="content-type"&&(L.contentType=L.headers[U]||"")}),n}.apply(v,g),o!==void 0&&(O.exports=o)},3632:(O,v,a)=>{var g,o;g=[a(2884),a(9003),a(655),a(5401),a(1450)],o=function(n,p,d,l){"use strict";var r=[],c=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var m=r.pop()||n.expando+"_"+d.guid++;return this[m]=!0,m}}),n.ajaxPrefilter("json jsonp",function(m,i,h){var u,f,S,y=m.jsonp!==!1&&(c.test(m.url)?"url":typeof m.data=="string"&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&c.test(m.data)&&"data");if(y||m.dataTypes[0]==="jsonp")return u=m.jsonpCallback=p(m.jsonpCallback)?m.jsonpCallback():m.jsonpCallback,y?m[y]=m[y].replace(c,"$1"+u):m.jsonp!==!1&&(m.url+=(l.test(m.url)?"&":"?")+m.jsonp+"="+u),m.converters["script json"]=function(){return S||n.error(u+" was not called"),S[0]},m.dataTypes[0]="json",f=window[u],window[u]=function(){S=arguments},h.always(function(){f===void 0?n(window).removeProp(u):window[u]=f,m[u]&&(m.jsonpCallback=i.jsonpCallback,r.push(u)),S&&p(f)&&f(S[0]),S=f=void 0}),"script"})}.apply(v,g),o!==void 0&&(O.exports=o)},4182:(O,v,a)=>{var g,o;g=[a(2884),a(3342),a(9003),a(5461),a(1450),a(7392),a(5599),a(6)],o=function(n,p,d){"use strict";n.fn.load=function(l,r,c){var m,i,h,u=this,f=l.indexOf(" ");return f>-1&&(m=p(l.slice(f)),l=l.slice(0,f)),d(r)?(c=r,r=void 0):r&&typeof r=="object"&&(i="POST"),u.length>0&&n.ajax({url:l,type:i||"GET",dataType:"html",data:r}).done(function(S){h=arguments,u.html(m?n("<div>").append(n.parseHTML(S)).find(m):S)}).always(c&&function(S,y){u.each(function(){c.apply(this,h||[S.responseText,y,S])})}),this}}.apply(v,g),o!==void 0&&(O.exports=o)},719:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(1450)],o=function(n,p){"use strict";n.ajaxPrefilter(function(d){d.crossDomain&&(d.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(d){return n.globalEval(d),d}}}),n.ajaxPrefilter("script",function(d){d.cache===void 0&&(d.cache=!1),d.crossDomain&&(d.type="GET")}),n.ajaxTransport("script",function(d){if(d.crossDomain||d.scriptAttrs){var l,r;return{send:function(c,m){l=n("<script>").attr(d.scriptAttrs||{}).prop({charset:d.scriptCharset,src:d.url}).on("load error",r=function(i){l.remove(),r=null,i&&m(i.type==="error"?404:200,i.type)}),p.head.appendChild(l[0])},abort:function(){r&&r()}}}})}.apply(v,g),o!==void 0&&(O.exports=o)},2047:(O,v,a)=>{var g;g=function(){"use strict";return window.location}.call(v,a,v,O),g!==void 0&&(O.exports=g)},655:(O,v,a)=>{var g;g=function(){"use strict";return{guid:Date.now()}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},5401:(O,v,a)=>{var g;g=function(){"use strict";return/\?/}.call(v,a,v,O),g!==void 0&&(O.exports=g)},2371:(O,v,a)=>{var g,o;g=[a(2884),a(9343),a(1450)],o=function(n,p){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(r){}};var d={0:200,1223:204},l=n.ajaxSettings.xhr();p.cors=!!l&&"withCredentials"in l,p.ajax=l=!!l,n.ajaxTransport(function(r){var c,m;if(p.cors||l&&!r.crossDomain)return{send:function(i,h){var u,f=r.xhr();if(f.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(u in r.xhrFields)f[u]=r.xhrFields[u];r.mimeType&&f.overrideMimeType&&f.overrideMimeType(r.mimeType),!r.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(u in i)f.setRequestHeader(u,i[u]);c=function(S){return function(){c&&(c=m=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,S==="abort"?f.abort():S==="error"?typeof f.status!="number"?h(0,"error"):h(f.status,f.statusText):h(d[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=c(),m=f.onerror=f.ontimeout=c("error"),f.onabort!==void 0?f.onabort=m:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){c&&m()})},c=c("abort");try{f.send(r.hasContent&&r.data||null)}catch(S){if(c)throw S}},abort:function(){c&&c()}}})}.apply(v,g),o!==void 0&&(O.exports=o)},4437:(O,v,a)=>{var g,o;g=[a(2884),a(8066),a(6034),a(8345),a(3383)],o=function(n){"use strict";return n}.apply(v,g),o!==void 0&&(O.exports=o)},8066:(O,v,a)=>{var g,o;g=[a(2884),a(8097),a(7031),a(3556),a(1143),a(6)],o=function(n,p,d,l,r){"use strict";var c,m=n.expr.attrHandle;n.fn.extend({attr:function(i,h){return p(this,n.attr,i,h,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,h,u){var f,S,y=i.nodeType;if(!(y===3||y===8||y===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,h,u);if((y!==1||!n.isXMLDoc(i))&&(S=n.attrHooks[h.toLowerCase()]||(n.expr.match.bool.test(h)?c:void 0)),u!==void 0){if(u===null){n.removeAttr(i,h);return}return S&&"set"in S&&(f=S.set(i,u,h))!==void 0?f:(i.setAttribute(h,u+""),u)}return S&&"get"in S&&(f=S.get(i,h))!==null?f:(f=n.find.attr(i,h),f==null?void 0:f)}},attrHooks:{type:{set:function(i,h){if(!l.radioValue&&h==="radio"&&d(i,"input")){var u=i.value;return i.setAttribute("type",h),u&&(i.value=u),h}}}},removeAttr:function(i,h){var u,f=0,S=h&&h.match(r);if(S&&i.nodeType===1)for(;u=S[f++];)i.removeAttribute(u)}}),c={set:function(i,h,u){return h===!1?n.removeAttr(i,u):i.setAttribute(u,u),u}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,h){var u=m[h]||n.find.attr;m[h]=function(f,S,y){var b,P,E=S.toLowerCase();return y||(P=m[E],m[E]=b,b=u(f,S,y)!=null?E:null,m[E]=P),b}})}.apply(v,g),o!==void 0&&(O.exports=o)},8345:(O,v,a)=>{var g,o;g=[a(2884),a(3342),a(9003),a(1143),a(698),a(6365)],o=function(n,p,d,l,r){"use strict";function c(i){return i.getAttribute&&i.getAttribute("class")||""}function m(i){return Array.isArray(i)?i:typeof i=="string"?i.match(l)||[]:[]}n.fn.extend({addClass:function(i){var h,u,f,S,y,b,P,E=0;if(d(i))return this.each(function(N){n(this).addClass(i.call(this,N,c(this)))});if(h=m(i),h.length){for(;u=this[E++];)if(S=c(u),f=u.nodeType===1&&" "+p(S)+" ",f){for(b=0;y=h[b++];)f.indexOf(" "+y+" ")<0&&(f+=y+" ");P=p(f),S!==P&&u.setAttribute("class",P)}}return this},removeClass:function(i){var h,u,f,S,y,b,P,E=0;if(d(i))return this.each(function(N){n(this).removeClass(i.call(this,N,c(this)))});if(!arguments.length)return this.attr("class","");if(h=m(i),h.length){for(;u=this[E++];)if(S=c(u),f=u.nodeType===1&&" "+p(S)+" ",f){for(b=0;y=h[b++];)for(;f.indexOf(" "+y+" ")>-1;)f=f.replace(" "+y+" "," ");P=p(f),S!==P&&u.setAttribute("class",P)}}return this},toggleClass:function(i,h){var u=typeof i,f=u==="string"||Array.isArray(i);return typeof h=="boolean"&&f?h?this.addClass(i):this.removeClass(i):d(i)?this.each(function(S){n(this).toggleClass(i.call(this,S,c(this),h),h)}):this.each(function(){var S,y,b,P;if(f)for(y=0,b=n(this),P=m(i);S=P[y++];)b.hasClass(S)?b.removeClass(S):b.addClass(S);else(i===void 0||u==="boolean")&&(S=c(this),S&&r.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||i===!1?"":r.get(this,"__className__")||""))})},hasClass:function(i){var h,u,f=0;for(h=" "+i+" ";u=this[f++];)if(u.nodeType===1&&(" "+p(c(u))+" ").indexOf(h)>-1)return!0;return!1}})}.apply(v,g),o!==void 0&&(O.exports=o)},6034:(O,v,a)=>{var g,o;g=[a(2884),a(8097),a(3556),a(6)],o=function(n,p,d){"use strict";var l=/^(?:input|select|textarea|button)$/i,r=/^(?:a|area)$/i;n.fn.extend({prop:function(c,m){return p(this,n.prop,c,m,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[n.propFix[c]||c]})}}),n.extend({prop:function(c,m,i){var h,u,f=c.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!n.isXMLDoc(c))&&(m=n.propFix[m]||m,u=n.propHooks[m]),i!==void 0?u&&"set"in u&&(h=u.set(c,i,m))!==void 0?h:c[m]=i:u&&"get"in u&&(h=u.get(c,m))!==null?h:c[m]},propHooks:{tabIndex:{get:function(c){var m=n.find.attr(c,"tabindex");return m?parseInt(m,10):l.test(c.nodeName)||r.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(n.propHooks.selected={get:function(c){var m=c.parentNode;return m&&m.parentNode&&m.parentNode.selectedIndex,null},set:function(c){var m=c.parentNode;m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(v,g),o!==void 0&&(O.exports=o)},3556:(O,v,a)=>{var g,o;g=[a(7749),a(9343)],o=function(n,p){"use strict";return function(){var d=n.createElement("input"),l=n.createElement("select"),r=l.appendChild(n.createElement("option"));d.type="checkbox",p.checkOn=d.value!=="",p.optSelected=r.selected,d=n.createElement("input"),d.value="t",d.type="radio",p.radioValue=d.value==="t"}(),p}.apply(v,g),o!==void 0&&(O.exports=o)},3383:(O,v,a)=>{var g,o;g=[a(2884),a(3342),a(3556),a(7031),a(9003),a(6365)],o=function(n,p,d,l,r){"use strict";var c=/\r/g;n.fn.extend({val:function(m){var i,h,u,f=this[0];return arguments.length?(u=r(m),this.each(function(S){var y;this.nodeType===1&&(u?y=m.call(this,S,n(this).val()):y=m,y==null?y="":typeof y=="number"?y+="":Array.isArray(y)&&(y=n.map(y,function(b){return b==null?"":b+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,y,"value")===void 0)&&(this.value=y))})):f?(i=n.valHooks[f.type]||n.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(h=i.get(f,"value"))!==void 0?h:(h=f.value,typeof h=="string"?h.replace(c,""):h==null?"":h)):void 0}}),n.extend({valHooks:{option:{get:function(m){var i=n.find.attr(m,"value");return i!=null?i:p(n.text(m))}},select:{get:function(m){var i,h,u,f=m.options,S=m.selectedIndex,y=m.type==="select-one",b=y?null:[],P=y?S+1:f.length;for(S<0?u=P:u=y?S:0;u<P;u++)if(h=f[u],(h.selected||u===S)&&!h.disabled&&(!h.parentNode.disabled||!l(h.parentNode,"optgroup"))){if(i=n(h).val(),y)return i;b.push(i)}return b},set:function(m,i){for(var h,u,f=m.options,S=n.makeArray(i),y=f.length;y--;)u=f[y],(u.selected=n.inArray(n.valHooks.option.get(u),S)>-1)&&(h=!0);return h||(m.selectedIndex=-1),S}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(m,i){if(Array.isArray(i))return m.checked=n.inArray(n(m).val(),i)>-1}},d.checkOn||(n.valHooks[this].get=function(m){return m.getAttribute("value")===null?"on":m.value})})}.apply(v,g),o!==void 0&&(O.exports=o)},7617:(O,v,a)=>{var g,o;g=[a(2884),a(1401),a(9003),a(1143)],o=function(n,p,d,l){"use strict";function r(c){var m={};return n.each(c.match(l)||[],function(i,h){m[h]=!0}),m}return n.Callbacks=function(c){c=typeof c=="string"?r(c):n.extend({},c);var m,i,h,u,f=[],S=[],y=-1,b=function(){for(u=u||c.once,h=m=!0;S.length;y=-1)for(i=S.shift();++y<f.length;)f[y].apply(i[0],i[1])===!1&&c.stopOnFalse&&(y=f.length,i=!1);c.memory||(i=!1),m=!1,u&&(i?f=[]:f="")},P={add:function(){return f&&(i&&!m&&(y=f.length-1,S.push(i)),function E(N){n.each(N,function(T,A){d(A)?(!c.unique||!P.has(A))&&f.push(A):A&&A.length&&p(A)!=="string"&&E(A)})}(arguments),i&&!m&&b()),this},remove:function(){return n.each(arguments,function(E,N){for(var T;(T=n.inArray(N,f,T))>-1;)f.splice(T,1),T<=y&&y--}),this},has:function(E){return E?n.inArray(E,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=S=[],f=i="",this},disabled:function(){return!f},lock:function(){return u=S=[],!i&&!m&&(f=i=""),this},locked:function(){return!!u},fireWith:function(E,N){return u||(N=N||[],N=[E,N.slice?N.slice():N],S.push(N),m||b()),this},fire:function(){return P.fireWith(this,arguments),this},fired:function(){return!!h}};return P},n}.apply(v,g),o!==void 0&&(O.exports=o)},2884:(O,v,a)=>{var g,o;g=[a(2305),a(2690),a(7502),a(1429),a(5896),a(706),a(8978),a(9412),a(939),a(7913),a(789),a(9343),a(9003),a(9011),a(4835),a(1401)],o=function(n,p,d,l,r,c,m,i,h,u,f,S,y,b,P,E){"use strict";var N="3.6.0",T=function(R,M){return new T.fn.init(R,M)};T.fn=T.prototype={jquery:N,constructor:T,length:0,toArray:function(){return d.call(this)},get:function(R){return R==null?d.call(this):R<0?this[R+this.length]:this[R]},pushStack:function(R){var M=T.merge(this.constructor(),R);return M.prevObject=this,M},each:function(R){return T.each(this,R)},map:function(R){return this.pushStack(T.map(this,function(M,x){return R.call(M,x,M)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(R,M){return(M+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(R,M){return M%2}))},eq:function(R){var M=this.length,x=+R+(R<0?M:0);return this.pushStack(x>=0&&x<M?[this[x]]:[])},end:function(){return this.prevObject||this.constructor()},push:r,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var R,M,x,_,L,U,j=arguments[0]||{},z=1,B=arguments.length,q=!1;for(typeof j=="boolean"&&(q=j,j=arguments[z]||{},z++),typeof j!="object"&&!y(j)&&(j={}),z===B&&(j=this,z--);z<B;z++)if((R=arguments[z])!=null)for(M in R)_=R[M],!(M==="__proto__"||j===_)&&(q&&_&&(T.isPlainObject(_)||(L=Array.isArray(_)))?(x=j[M],L&&!Array.isArray(x)?U=[]:!L&&!T.isPlainObject(x)?U={}:U=x,L=!1,j[M]=T.extend(q,U,_)):_!==void 0&&(j[M]=_));return j},T.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(R){throw new Error(R)},noop:function(){},isPlainObject:function(R){var M,x;return!R||i.call(R)!=="[object Object]"?!1:(M=p(R),M?(x=h.call(M,"constructor")&&M.constructor,typeof x=="function"&&u.call(x)===f):!0)},isEmptyObject:function(R){var M;for(M in R)return!1;return!0},globalEval:function(R,M,x){P(R,{nonce:M&&M.nonce},x)},each:function(R,M){var x,_=0;if(A(R))for(x=R.length;_<x&&M.call(R[_],_,R[_])!==!1;_++);else for(_ in R)if(M.call(R[_],_,R[_])===!1)break;return R},makeArray:function(R,M){var x=M||[];return R!=null&&(A(Object(R))?T.merge(x,typeof R=="string"?[R]:R):r.call(x,R)),x},inArray:function(R,M,x){return M==null?-1:c.call(M,R,x)},merge:function(R,M){for(var x=+M.length,_=0,L=R.length;_<x;_++)R[L++]=M[_];return R.length=L,R},grep:function(R,M,x){for(var _,L=[],U=0,j=R.length,z=!x;U<j;U++)_=!M(R[U],U),_!==z&&L.push(R[U]);return L},map:function(R,M,x){var _,L,U=0,j=[];if(A(R))for(_=R.length;U<_;U++)L=M(R[U],U,x),L!=null&&j.push(L);else for(U in R)L=M(R[U],U,x),L!=null&&j.push(L);return l(j)},guid:1,support:S}),typeof Symbol=="function"&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(R,M){m["[object "+M+"]"]=M.toLowerCase()});function A(R){var M=!!R&&"length"in R&&R.length,x=E(R);return y(R)||b(R)?!1:x==="array"||M===0||typeof M=="number"&&M>0&&M-1 in R}return T}.apply(v,g),o!==void 0&&(O.exports=o)},4835:(O,v,a)=>{var g,o;g=[a(7749)],o=function(n){"use strict";var p={type:!0,src:!0,nonce:!0,noModule:!0};function d(l,r,c){c=c||n;var m,i,h=c.createElement("script");if(h.text=l,r)for(m in p)i=r[m]||r.getAttribute&&r.getAttribute(m),i&&h.setAttribute(m,i);c.head.appendChild(h).parentNode.removeChild(h)}return d}.apply(v,g),o!==void 0&&(O.exports=o)},8097:(O,v,a)=>{var g,o;g=[a(2884),a(1401),a(9003)],o=function(n,p,d){"use strict";var l=function(r,c,m,i,h,u,f){var S=0,y=r.length,b=m==null;if(p(m)==="object"){h=!0;for(S in m)l(r,c,S,m[S],!0,u,f)}else if(i!==void 0&&(h=!0,d(i)||(f=!0),b&&(f?(c.call(r,i),c=null):(b=c,c=function(P,E,N){return b.call(n(P),N)})),c))for(;S<y;S++)c(r[S],m,f?i:i.call(r[S],S,c(r[S],m)));return h?r:b?c.call(r):y?c(r[0],m):u};return l}.apply(v,g),o!==void 0&&(O.exports=o)},7232:(O,v)=>{var a,g;a=[],g=function(){"use strict";var o=/^-ms-/,n=/-([a-z])/g;function p(l,r){return r.toUpperCase()}function d(l){return l.replace(o,"ms-").replace(n,p)}return d}.apply(v,a),g!==void 0&&(O.exports=g)},6365:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(9003),a(3309),a(6036)],o=function(n,p,d,l){"use strict";var r,c=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,m=n.fn.init=function(i,h,u){var f,S;if(!i)return this;if(u=u||r,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=c.exec(i),f&&(f[1]||!h))if(f[1]){if(h=h instanceof n?h[0]:h,n.merge(this,n.parseHTML(f[1],h&&h.nodeType?h.ownerDocument||h:p,!0)),l.test(f[1])&&n.isPlainObject(h))for(f in h)d(this[f])?this[f](h[f]):this.attr(f,h[f]);return this}else return S=p.getElementById(f[2]),S&&(this[0]=S,this.length=1),this;else return!h||h.jquery?(h||u).find(i):this.constructor(h).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(d(i))return u.ready!==void 0?u.ready(i):i(n)}return n.makeArray(i,this)};return m.prototype=n.fn,r=n(p),m}.apply(v,g),o!==void 0&&(O.exports=o)},1518:(O,v,a)=>{var g,o;g=[a(2884),a(893),a(6)],o=function(n,p){"use strict";var d=function(r){return n.contains(r.ownerDocument,r)},l={composed:!0};return p.getRootNode&&(d=function(r){return n.contains(r.ownerDocument,r)||r.getRootNode(l)===r.ownerDocument}),d}.apply(v,g),o!==void 0&&(O.exports=o)},7031:(O,v,a)=>{var g;g=function(){"use strict";function o(n,p){return n.nodeName&&n.nodeName.toLowerCase()===p.toLowerCase()}return o}.call(v,a,v,O),g!==void 0&&(O.exports=g)},5461:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(3309),a(6753),a(200)],o=function(n,p,d,l,r){"use strict";return n.parseHTML=function(c,m,i){if(typeof c!="string")return[];typeof m=="boolean"&&(i=m,m=!1);var h,u,f;return m||(r.createHTMLDocument?(m=p.implementation.createHTMLDocument(""),h=m.createElement("base"),h.href=p.location.href,m.head.appendChild(h)):m=p),u=d.exec(c),f=!i&&[],u?[m.createElement(u[1])]:(u=l([c],m,f),f&&f.length&&n(f).remove(),n.merge([],u.childNodes))},n.parseHTML}.apply(v,g),o!==void 0&&(O.exports=o)},6073:(O,v,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";return n.parseXML=function(p){var d,l;if(!p||typeof p!="string")return null;try{d=new window.DOMParser().parseFromString(p,"text/xml")}catch(r){}return l=d&&d.getElementsByTagName("parsererror")[0],(!d||l)&&n.error("Invalid XML: "+(l?n.map(l.childNodes,function(r){return r.textContent}).join(`
`):p)),d},n.parseXML}.apply(v,g),o!==void 0&&(O.exports=o)},7644:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(2003),a(184)],o=function(n,p){"use strict";var d=n.Deferred();n.fn.ready=function(r){return d.then(r).catch(function(c){n.readyException(c)}),this},n.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(r!==!0&&--n.readyWait>0)&&d.resolveWith(p,[n]))}}),n.ready.then=d.then;function l(){p.removeEventListener("DOMContentLoaded",l),window.removeEventListener("load",l),n.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?window.setTimeout(n.ready):(p.addEventListener("DOMContentLoaded",l),window.addEventListener("load",l))}.apply(v,g),o!==void 0&&(O.exports=o)},2003:(O,v,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";n.readyException=function(p){window.setTimeout(function(){throw p})}}.apply(v,g),o!==void 0&&(O.exports=o)},3342:(O,v,a)=>{var g,o;g=[a(1143)],o=function(n){"use strict";function p(d){var l=d.match(n)||[];return l.join(" ")}return p}.apply(v,g),o!==void 0&&(O.exports=o)},200:(O,v,a)=>{var g,o;g=[a(7749),a(9343)],o=function(n,p){"use strict";return p.createHTMLDocument=function(){var d=n.implementation.createHTMLDocument("").body;return d.innerHTML="<form></form><form></form>",d.childNodes.length===2}(),p}.apply(v,g),o!==void 0&&(O.exports=o)},1401:(O,v,a)=>{var g,o;g=[a(8978),a(9412)],o=function(n,p){"use strict";function d(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?n[p.call(l)]||"object":typeof l}return d}.apply(v,g),o!==void 0&&(O.exports=o)},3309:(O,v,a)=>{var g;g=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(v,a,v,O),g!==void 0&&(O.exports=g)},7154:(O,v,a)=>{var g,o;g=[a(2884),a(8097),a(7232),a(7031),a(1286),a(3045),a(29),a(1089),a(6439),a(4015),a(320),a(1353),a(1567),a(2137),a(6365),a(7644),a(6)],o=function(n,p,d,l,r,c,m,i,h,u,f,S,y,b){"use strict";var P=/^(none|table(?!-c[ea]).+)/,E=/^--/,N={position:"absolute",visibility:"hidden",display:"block"},T={letterSpacing:"0",fontWeight:"400"};function A(x,_,L){var U=r.exec(_);return U?Math.max(0,U[2]-(L||0))+(U[3]||"px"):_}function R(x,_,L,U,j,z){var B=_==="width"?1:0,q=0,w=0;if(L===(U?"border":"content"))return 0;for(;B<4;B+=2)L==="margin"&&(w+=n.css(x,L+m[B],!0,j)),U?(L==="content"&&(w-=n.css(x,"padding"+m[B],!0,j)),L!=="margin"&&(w-=n.css(x,"border"+m[B]+"Width",!0,j))):(w+=n.css(x,"padding"+m[B],!0,j),L!=="padding"?w+=n.css(x,"border"+m[B]+"Width",!0,j):q+=n.css(x,"border"+m[B]+"Width",!0,j));return!U&&z>=0&&(w+=Math.max(0,Math.ceil(x["offset"+_[0].toUpperCase()+_.slice(1)]-z-w-q-.5))||0),w}function M(x,_,L){var U=i(x),j=!y.boxSizingReliable()||L,z=j&&n.css(x,"boxSizing",!1,U)==="border-box",B=z,q=u(x,_,U),w="offset"+_[0].toUpperCase()+_.slice(1);if(c.test(q)){if(!L)return q;q="auto"}return(!y.boxSizingReliable()&&z||!y.reliableTrDimensions()&&l(x,"tr")||q==="auto"||!parseFloat(q)&&n.css(x,"display",!1,U)==="inline")&&x.getClientRects().length&&(z=n.css(x,"boxSizing",!1,U)==="border-box",B=w in x,B&&(q=x[w])),q=parseFloat(q)||0,q+R(x,_,L||(z?"border":"content"),B,U,q)+"px"}return n.extend({cssHooks:{opacity:{get:function(x,_){if(_){var L=u(x,"opacity");return L===""?"1":L}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(x,_,L,U){if(!(!x||x.nodeType===3||x.nodeType===8||!x.style)){var j,z,B,q=d(_),w=E.test(_),H=x.style;if(w||(_=b(q)),B=n.cssHooks[_]||n.cssHooks[q],L!==void 0){if(z=typeof L,z==="string"&&(j=r.exec(L))&&j[1]&&(L=f(x,_,j),z="number"),L==null||L!==L)return;z==="number"&&!w&&(L+=j&&j[3]||(n.cssNumber[q]?"":"px")),!y.clearCloneStyle&&L===""&&_.indexOf("background")===0&&(H[_]="inherit"),(!B||!("set"in B)||(L=B.set(x,L,U))!==void 0)&&(w?H.setProperty(_,L):H[_]=L)}else return B&&"get"in B&&(j=B.get(x,!1,U))!==void 0?j:H[_]}},css:function(x,_,L,U){var j,z,B,q=d(_),w=E.test(_);return w||(_=b(q)),B=n.cssHooks[_]||n.cssHooks[q],B&&"get"in B&&(j=B.get(x,!0,L)),j===void 0&&(j=u(x,_,U)),j==="normal"&&_ in T&&(j=T[_]),L===""||L?(z=parseFloat(j),L===!0||isFinite(z)?z||0:j):j}}),n.each(["height","width"],function(x,_){n.cssHooks[_]={get:function(L,U,j){if(U)return P.test(n.css(L,"display"))&&(!L.getClientRects().length||!L.getBoundingClientRect().width)?h(L,N,function(){return M(L,_,j)}):M(L,_,j)},set:function(L,U,j){var z,B=i(L),q=!y.scrollboxSize()&&B.position==="absolute",w=q||j,H=w&&n.css(L,"boxSizing",!1,B)==="border-box",V=j?R(L,_,j,H,B):0;return H&&q&&(V-=Math.ceil(L["offset"+_[0].toUpperCase()+_.slice(1)]-parseFloat(B[_])-R(L,_,"border",!1,B)-.5)),V&&(z=r.exec(U))&&(z[3]||"px")!=="px"&&(L.style[_]=U,U=n.css(L,_)),A(L,U,V)}}}),n.cssHooks.marginLeft=S(y.reliableMarginLeft,function(x,_){if(_)return(parseFloat(u(x,"marginLeft"))||x.getBoundingClientRect().left-h(x,{marginLeft:0},function(){return x.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(x,_){n.cssHooks[x+_]={expand:function(L){for(var U=0,j={},z=typeof L=="string"?L.split(" "):[L];U<4;U++)j[x+m[U]+_]=z[U]||z[U-2]||z[0];return j}},x!=="margin"&&(n.cssHooks[x+_].set=A)}),n.fn.extend({css:function(x,_){return p(this,function(L,U,j){var z,B,q={},w=0;if(Array.isArray(U)){for(z=i(L),B=U.length;w<B;w++)q[U[w]]=n.css(L,U[w],!1,z);return q}return j!==void 0?n.style(L,U,j):n.css(L,U)},x,_,arguments.length>1)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},1353:(O,v,a)=>{var g;g=function(){"use strict";function o(n,p){return{get:function(){if(n()){delete this.get;return}return(this.get=p).apply(this,arguments)}}}return o}.call(v,a,v,O),g!==void 0&&(O.exports=g)},320:(O,v,a)=>{var g,o;g=[a(2884),a(1286)],o=function(n,p){"use strict";function d(l,r,c,m){var i,h,u=20,f=m?function(){return m.cur()}:function(){return n.css(l,r,"")},S=f(),y=c&&c[3]||(n.cssNumber[r]?"":"px"),b=l.nodeType&&(n.cssNumber[r]||y!=="px"&&+S)&&p.exec(n.css(l,r));if(b&&b[3]!==y){for(S=S/2,y=y||b[3],b=+S||1;u--;)n.style(l,r,b+y),(1-h)*(1-(h=f()/S||.5))<=0&&(u=0),b=b/h;b=b*2,n.style(l,r,b+y),c=c||[]}return c&&(b=+b||+S||0,i=c[1]?b+(c[1]+1)*c[2]:+c[2],m&&(m.unit=y,m.start=b,m.end=i)),i}return d}.apply(v,g),o!==void 0&&(O.exports=o)},4015:(O,v,a)=>{var g,o;g=[a(2884),a(1518),a(5511),a(3045),a(1089),a(1567)],o=function(n,p,d,l,r,c){"use strict";function m(i,h,u){var f,S,y,b,P=i.style;return u=u||r(i),u&&(b=u.getPropertyValue(h)||u[h],b===""&&!p(i)&&(b=n.style(i,h)),!c.pixelBoxStyles()&&l.test(b)&&d.test(h)&&(f=P.width,S=P.minWidth,y=P.maxWidth,P.minWidth=P.maxWidth=P.width=b,b=u.width,P.width=f,P.minWidth=S,P.maxWidth=y)),b!==void 0?b+"":b}return m}.apply(v,g),o!==void 0&&(O.exports=o)},2137:(O,v,a)=>{var g,o;g=[a(7749),a(2884)],o=function(n,p){"use strict";var d=["Webkit","Moz","ms"],l=n.createElement("div").style,r={};function c(i){for(var h=i[0].toUpperCase()+i.slice(1),u=d.length;u--;)if(i=d[u]+h,i in l)return i}function m(i){var h=p.cssProps[i]||r[i];return h||(i in l?i:r[i]=c(i)||i)}return m}.apply(v,g),o!==void 0&&(O.exports=o)},8326:(O,v,a)=>{var g,o;g=[a(2884),a(6)],o=function(n){"use strict";n.expr.pseudos.hidden=function(p){return!n.expr.pseudos.visible(p)},n.expr.pseudos.visible=function(p){return!!(p.offsetWidth||p.offsetHeight||p.getClientRects().length)}}.apply(v,g),o!==void 0&&(O.exports=o)},470:(O,v,a)=>{var g,o;g=[a(2884),a(698),a(3120)],o=function(n,p,d){"use strict";var l={};function r(m){var i,h=m.ownerDocument,u=m.nodeName,f=l[u];return f||(i=h.body.appendChild(h.createElement(u)),f=n.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),l[u]=f,f)}function c(m,i){for(var h,u,f=[],S=0,y=m.length;S<y;S++)u=m[S],u.style&&(h=u.style.display,i?(h==="none"&&(f[S]=p.get(u,"display")||null,f[S]||(u.style.display="")),u.style.display===""&&d(u)&&(f[S]=r(u))):h!=="none"&&(f[S]="none",p.set(u,"display",h)));for(S=0;S<y;S++)f[S]!=null&&(m[S].style.display=f[S]);return m}return n.fn.extend({show:function(){return c(this,!0)},hide:function(){return c(this)},toggle:function(m){return typeof m=="boolean"?m?this.show():this.hide():this.each(function(){d(this)?n(this).show():n(this).hide()})}}),c}.apply(v,g),o!==void 0&&(O.exports=o)},1567:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(893),a(9343)],o=function(n,p,d,l){"use strict";return function(){function r(){if(!!b){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",d.appendChild(y).appendChild(b);var P=window.getComputedStyle(b);m=P.top!=="1%",S=c(P.marginLeft)===12,b.style.right="60%",u=c(P.right)===36,i=c(P.width)===36,b.style.position="absolute",h=c(b.offsetWidth/3)===12,d.removeChild(y),b=null}}function c(P){return Math.round(parseFloat(P))}var m,i,h,u,f,S,y=p.createElement("div"),b=p.createElement("div");!b.style||(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle=b.style.backgroundClip==="content-box",n.extend(l,{boxSizingReliable:function(){return r(),i},pixelBoxStyles:function(){return r(),u},pixelPosition:function(){return r(),m},reliableMarginLeft:function(){return r(),S},scrollboxSize:function(){return r(),h},reliableTrDimensions:function(){var P,E,N,T;return f==null&&(P=p.createElement("table"),E=p.createElement("tr"),N=p.createElement("div"),P.style.cssText="position:absolute;left:-11111px;border-collapse:separate",E.style.cssText="border:1px solid",E.style.height="1px",N.style.height="9px",N.style.display="block",d.appendChild(P).appendChild(E).appendChild(N),T=window.getComputedStyle(E),f=parseInt(T.height,10)+parseInt(T.borderTopWidth,10)+parseInt(T.borderBottomWidth,10)===E.offsetHeight,d.removeChild(P)),f}}))}(),l}.apply(v,g),o!==void 0&&(O.exports=o)},29:(O,v,a)=>{var g;g=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(v,a,v,O),g!==void 0&&(O.exports=g)},1089:(O,v,a)=>{var g;g=function(){"use strict";return function(o){var n=o.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(o)}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},3120:(O,v,a)=>{var g,o;g=[a(2884),a(1518)],o=function(n,p){"use strict";return function(d,l){return d=l||d,d.style.display==="none"||d.style.display===""&&p(d)&&n.css(d,"display")==="none"}}.apply(v,g),o!==void 0&&(O.exports=o)},5511:(O,v,a)=>{var g,o;g=[a(29)],o=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(v,g),o!==void 0&&(O.exports=o)},3045:(O,v,a)=>{var g,o;g=[a(5399)],o=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(v,g),o!==void 0&&(O.exports=o)},6439:(O,v,a)=>{var g;g=function(){"use strict";return function(o,n,p){var d,l,r={};for(l in n)r[l]=o.style[l],o.style[l]=n[l];d=p.call(o);for(l in n)o.style[l]=r[l];return d}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},8416:(O,v,a)=>{var g,o;g=[a(2884),a(8097),a(7232),a(698),a(640)],o=function(n,p,d,l,r){"use strict";var c=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,m=/[A-Z]/g;function i(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:c.test(u)?JSON.parse(u):u}function h(u,f,S){var y;if(S===void 0&&u.nodeType===1)if(y="data-"+f.replace(m,"-$&").toLowerCase(),S=u.getAttribute(y),typeof S=="string"){try{S=i(S)}catch(b){}r.set(u,f,S)}else S=void 0;return S}return n.extend({hasData:function(u){return r.hasData(u)||l.hasData(u)},data:function(u,f,S){return r.access(u,f,S)},removeData:function(u,f){r.remove(u,f)},_data:function(u,f,S){return l.access(u,f,S)},_removeData:function(u,f){l.remove(u,f)}}),n.fn.extend({data:function(u,f){var S,y,b,P=this[0],E=P&&P.attributes;if(u===void 0){if(this.length&&(b=r.get(P),P.nodeType===1&&!l.get(P,"hasDataAttrs"))){for(S=E.length;S--;)E[S]&&(y=E[S].name,y.indexOf("data-")===0&&(y=d(y.slice(5)),h(P,y,b[y])));l.set(P,"hasDataAttrs",!0)}return b}return typeof u=="object"?this.each(function(){r.set(this,u)}):p(this,function(N){var T;if(P&&N===void 0)return T=r.get(P,u),T!==void 0||(T=h(P,u),T!==void 0)?T:void 0;this.each(function(){r.set(this,u,N)})},null,f,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){r.remove(this,u)})}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},1523:(O,v,a)=>{var g,o;g=[a(2884),a(7232),a(1143),a(7098)],o=function(n,p,d,l){"use strict";function r(){this.expando=n.expando+r.uid++}return r.uid=1,r.prototype={cache:function(c){var m=c[this.expando];return m||(m={},l(c)&&(c.nodeType?c[this.expando]=m:Object.defineProperty(c,this.expando,{value:m,configurable:!0}))),m},set:function(c,m,i){var h,u=this.cache(c);if(typeof m=="string")u[p(m)]=i;else for(h in m)u[p(h)]=m[h];return u},get:function(c,m){return m===void 0?this.cache(c):c[this.expando]&&c[this.expando][p(m)]},access:function(c,m,i){return m===void 0||m&&typeof m=="string"&&i===void 0?this.get(c,m):(this.set(c,m,i),i!==void 0?i:m)},remove:function(c,m){var i,h=c[this.expando];if(h!==void 0){if(m!==void 0)for(Array.isArray(m)?m=m.map(p):(m=p(m),m=m in h?[m]:m.match(d)||[]),i=m.length;i--;)delete h[m[i]];(m===void 0||n.isEmptyObject(h))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var m=c[this.expando];return m!==void 0&&!n.isEmptyObject(m)}},r}.apply(v,g),o!==void 0&&(O.exports=o)},7098:(O,v,a)=>{var g;g=function(){"use strict";return function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},698:(O,v,a)=>{var g,o;g=[a(1523)],o=function(n){"use strict";return new n}.apply(v,g),o!==void 0&&(O.exports=o)},640:(O,v,a)=>{var g,o;g=[a(1523)],o=function(n){"use strict";return new n}.apply(v,g),o!==void 0&&(O.exports=o)},184:(O,v,a)=>{var g,o;g=[a(2884),a(9003),a(7502),a(7617)],o=function(n,p,d){"use strict";function l(m){return m}function r(m){throw m}function c(m,i,h,u){var f;try{m&&p(f=m.promise)?f.call(m).done(i).fail(h):m&&p(f=m.then)?f.call(m,i,h):i.apply(void 0,[m].slice(u))}catch(S){h.apply(void 0,[S])}}return n.extend({Deferred:function(m){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],h="pending",u={state:function(){return h},always:function(){return f.done(arguments).fail(arguments),this},catch:function(S){return u.then(null,S)},pipe:function(){var S=arguments;return n.Deferred(function(y){n.each(i,function(b,P){var E=p(S[P[4]])&&S[P[4]];f[P[1]](function(){var N=E&&E.apply(this,arguments);N&&p(N.promise)?N.promise().progress(y.notify).done(y.resolve).fail(y.reject):y[P[0]+"With"](this,E?[N]:arguments)})}),S=null}).promise()},then:function(S,y,b){var P=0;function E(N,T,A,R){return function(){var M=this,x=arguments,_=function(){var U,j;if(!(N<P)){if(U=A.apply(M,x),U===T.promise())throw new TypeError("Thenable self-resolution");j=U&&(typeof U=="object"||typeof U=="function")&&U.then,p(j)?R?j.call(U,E(P,T,l,R),E(P,T,r,R)):(P++,j.call(U,E(P,T,l,R),E(P,T,r,R),E(P,T,l,T.notifyWith))):(A!==l&&(M=void 0,x=[U]),(R||T.resolveWith)(M,x))}},L=R?_:function(){try{_()}catch(U){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(U,L.stackTrace),N+1>=P&&(A!==r&&(M=void 0,x=[U]),T.rejectWith(M,x))}};N?L():(n.Deferred.getStackHook&&(L.stackTrace=n.Deferred.getStackHook()),window.setTimeout(L))}}return n.Deferred(function(N){i[0][3].add(E(0,N,p(b)?b:l,N.notifyWith)),i[1][3].add(E(0,N,p(S)?S:l)),i[2][3].add(E(0,N,p(y)?y:r))}).promise()},promise:function(S){return S!=null?n.extend(S,u):u}},f={};return n.each(i,function(S,y){var b=y[2],P=y[5];u[y[1]]=b.add,P&&b.add(function(){h=P},i[3-S][2].disable,i[3-S][3].disable,i[0][2].lock,i[0][3].lock),b.add(y[3].fire),f[y[0]]=function(){return f[y[0]+"With"](this===f?void 0:this,arguments),this},f[y[0]+"With"]=b.fireWith}),u.promise(f),m&&m.call(f,f),f},when:function(m){var i=arguments.length,h=i,u=Array(h),f=d.call(arguments),S=n.Deferred(),y=function(b){return function(P){u[b]=this,f[b]=arguments.length>1?d.call(arguments):P,--i||S.resolveWith(u,f)}};if(i<=1&&(c(m,S.done(y(h)).resolve,S.reject,!i),S.state()==="pending"||p(f[h]&&f[h].then)))return S.then();for(;h--;)c(f[h],y(h),S.reject);return S.promise()}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},3615:(O,v,a)=>{var g,o;g=[a(2884),a(184)],o=function(n){"use strict";var p=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(d,l){window.console&&window.console.warn&&d&&p.test(d.name)&&window.console.warn("jQuery.Deferred exception: "+d.message,d.stack,l)}}.apply(v,g),o!==void 0&&(O.exports=o)},1900:(O,v,a)=>{var g,o;g=[a(2884),a(7031),a(7232),a(1401),a(9003),a(9011),a(7502),a(336),a(4333)],o=function(n,p,d,l,r,c,m){"use strict";var i=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;n.proxy=function(h,u){var f,S,y;if(typeof u=="string"&&(f=h[u],u=h,h=f),!!r(h))return S=m.call(arguments,2),y=function(){return h.apply(u||this,S.concat(m.call(arguments)))},y.guid=h.guid=h.guid||n.guid++,y},n.holdReady=function(h){h?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=p,n.isFunction=r,n.isWindow=c,n.camelCase=d,n.type=l,n.now=Date.now,n.isNumeric=function(h){var u=n.type(h);return(u==="number"||u==="string")&&!isNaN(h-parseFloat(h))},n.trim=function(h){return h==null?"":(h+"").replace(i,"")}}.apply(v,g),o!==void 0&&(O.exports=o)},336:(O,v,a)=>{var g,o;g=[a(2884),a(1450),a(5957)],o=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(p,d){n.fn[d]=function(l){return this.on(d,l)}})}.apply(v,g),o!==void 0&&(O.exports=o)},4333:(O,v,a)=>{var g,o;g=[a(2884),a(5957),a(2075)],o=function(n){"use strict";n.fn.extend({bind:function(p,d,l){return this.on(p,null,d,l)},unbind:function(p,d){return this.off(p,null,d)},delegate:function(p,d,l,r){return this.on(d,p,l,r)},undelegate:function(p,d,l){return arguments.length===1?this.off(p,"**"):this.off(d,p||"**",l)},hover:function(p,d){return this.mouseenter(p).mouseleave(d||p)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(p,d){n.fn[d]=function(l,r){return arguments.length>0?this.on(d,null,l,r):this.trigger(d)}})}.apply(v,g),o!==void 0&&(O.exports=o)},3514:(O,v,a)=>{var g,o;g=[a(2884),a(8097),a(9011),a(7154)],o=function(n,p,d){"use strict";return n.each({Height:"height",Width:"width"},function(l,r){n.each({padding:"inner"+l,content:r,"":"outer"+l},function(c,m){n.fn[m]=function(i,h){var u=arguments.length&&(c||typeof i!="boolean"),f=c||(i===!0||h===!0?"margin":"border");return p(this,function(S,y,b){var P;return d(S)?m.indexOf("outer")===0?S["inner"+l]:S.document.documentElement["client"+l]:S.nodeType===9?(P=S.documentElement,Math.max(S.body["scroll"+l],P["scroll"+l],S.body["offset"+l],P["offset"+l],P["client"+l])):b===void 0?n.css(S,y,f):n.style(S,y,b,f)},r,u?i:void 0,u)}})}),n}.apply(v,g),o!==void 0&&(O.exports=o)},8331:(O,v,a)=>{var g,o;g=[a(2884),a(7232),a(7749),a(9003),a(1286),a(1143),a(29),a(3120),a(320),a(698),a(470),a(6365),a(8174),a(184),a(7392),a(5599),a(7154),a(4881)],o=function(n,p,d,l,r,c,m,i,h,u,f){"use strict";var S,y,b=/^(?:toggle|show|hide)$/,P=/queueHooks$/;function E(){y&&(d.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,n.fx.interval),n.fx.tick())}function N(){return window.setTimeout(function(){S=void 0}),S=Date.now()}function T(_,L){var U,j=0,z={height:_};for(L=L?1:0;j<4;j+=2-L)U=m[j],z["margin"+U]=z["padding"+U]=_;return L&&(z.opacity=z.width=_),z}function A(_,L,U){for(var j,z=(x.tweeners[L]||[]).concat(x.tweeners["*"]),B=0,q=z.length;B<q;B++)if(j=z[B].call(U,L,_))return j}function R(_,L,U){var j,z,B,q,w,H,V,ne,ae="width"in L||"height"in L,de=this,te={},ge=_.style,Ce=_.nodeType&&i(_),Fe=u.get(_,"fxshow");U.queue||(q=n._queueHooks(_,"fx"),q.unqueued==null&&(q.unqueued=0,w=q.empty.fire,q.empty.fire=function(){q.unqueued||w()}),q.unqueued++,de.always(function(){de.always(function(){q.unqueued--,n.queue(_,"fx").length||q.empty.fire()})}));for(j in L)if(z=L[j],b.test(z)){if(delete L[j],B=B||z==="toggle",z===(Ce?"hide":"show"))if(z==="show"&&Fe&&Fe[j]!==void 0)Ce=!0;else continue;te[j]=Fe&&Fe[j]||n.style(_,j)}if(H=!n.isEmptyObject(L),!(!H&&n.isEmptyObject(te))){ae&&_.nodeType===1&&(U.overflow=[ge.overflow,ge.overflowX,ge.overflowY],V=Fe&&Fe.display,V==null&&(V=u.get(_,"display")),ne=n.css(_,"display"),ne==="none"&&(V?ne=V:(f([_],!0),V=_.style.display||V,ne=n.css(_,"display"),f([_]))),(ne==="inline"||ne==="inline-block"&&V!=null)&&n.css(_,"float")==="none"&&(H||(de.done(function(){ge.display=V}),V==null&&(ne=ge.display,V=ne==="none"?"":ne)),ge.display="inline-block")),U.overflow&&(ge.overflow="hidden",de.always(function(){ge.overflow=U.overflow[0],ge.overflowX=U.overflow[1],ge.overflowY=U.overflow[2]})),H=!1;for(j in te)H||(Fe?"hidden"in Fe&&(Ce=Fe.hidden):Fe=u.access(_,"fxshow",{display:V}),B&&(Fe.hidden=!Ce),Ce&&f([_],!0),de.done(function(){Ce||f([_]),u.remove(_,"fxshow");for(j in te)n.style(_,j,te[j])})),H=A(Ce?Fe[j]:0,j,de),j in Fe||(Fe[j]=H.start,Ce&&(H.end=H.start,H.start=0))}}function M(_,L){var U,j,z,B,q;for(U in _)if(j=p(U),z=L[j],B=_[U],Array.isArray(B)&&(z=B[1],B=_[U]=B[0]),U!==j&&(_[j]=B,delete _[U]),q=n.cssHooks[j],q&&"expand"in q){B=q.expand(B),delete _[j];for(U in B)U in _||(_[U]=B[U],L[U]=z)}else L[j]=z}function x(_,L,U){var j,z,B=0,q=x.prefilters.length,w=n.Deferred().always(function(){delete H.elem}),H=function(){if(z)return!1;for(var ae=S||N(),de=Math.max(0,V.startTime+V.duration-ae),te=de/V.duration||0,ge=1-te,Ce=0,Fe=V.tweens.length;Ce<Fe;Ce++)V.tweens[Ce].run(ge);return w.notifyWith(_,[V,ge,de]),ge<1&&Fe?de:(Fe||w.notifyWith(_,[V,1,0]),w.resolveWith(_,[V]),!1)},V=w.promise({elem:_,props:n.extend({},L),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},U),originalProperties:L,originalOptions:U,startTime:S||N(),duration:U.duration,tweens:[],createTween:function(ae,de){var te=n.Tween(_,V.opts,ae,de,V.opts.specialEasing[ae]||V.opts.easing);return V.tweens.push(te),te},stop:function(ae){var de=0,te=ae?V.tweens.length:0;if(z)return this;for(z=!0;de<te;de++)V.tweens[de].run(1);return ae?(w.notifyWith(_,[V,1,0]),w.resolveWith(_,[V,ae])):w.rejectWith(_,[V,ae]),this}}),ne=V.props;for(M(ne,V.opts.specialEasing);B<q;B++)if(j=x.prefilters[B].call(V,_,ne,V.opts),j)return l(j.stop)&&(n._queueHooks(V.elem,V.opts.queue).stop=j.stop.bind(j)),j;return n.map(ne,A,V),l(V.opts.start)&&V.opts.start.call(_,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),n.fx.timer(n.extend(H,{elem:_,anim:V,queue:V.opts.queue})),V}return n.Animation=n.extend(x,{tweeners:{"*":[function(_,L){var U=this.createTween(_,L);return h(U.elem,_,r.exec(L),U),U}]},tweener:function(_,L){l(_)?(L=_,_=["*"]):_=_.match(c);for(var U,j=0,z=_.length;j<z;j++)U=_[j],x.tweeners[U]=x.tweeners[U]||[],x.tweeners[U].unshift(L)},prefilters:[R],prefilter:function(_,L){L?x.prefilters.unshift(_):x.prefilters.push(_)}}),n.speed=function(_,L,U){var j=_&&typeof _=="object"?n.extend({},_):{complete:U||!U&&L||l(_)&&_,duration:_,easing:U&&L||L&&!l(L)&&L};return n.fx.off?j.duration=0:typeof j.duration!="number"&&(j.duration in n.fx.speeds?j.duration=n.fx.speeds[j.duration]:j.duration=n.fx.speeds._default),(j.queue==null||j.queue===!0)&&(j.queue="fx"),j.old=j.complete,j.complete=function(){l(j.old)&&j.old.call(this),j.queue&&n.dequeue(this,j.queue)},j},n.fn.extend({fadeTo:function(_,L,U,j){return this.filter(i).css("opacity",0).show().end().animate({opacity:L},_,U,j)},animate:function(_,L,U,j){var z=n.isEmptyObject(_),B=n.speed(L,U,j),q=function(){var w=x(this,n.extend({},_),B);(z||u.get(this,"finish"))&&w.stop(!0)};return q.finish=q,z||B.queue===!1?this.each(q):this.queue(B.queue,q)},stop:function(_,L,U){var j=function(z){var B=z.stop;delete z.stop,B(U)};return typeof _!="string"&&(U=L,L=_,_=void 0),L&&this.queue(_||"fx",[]),this.each(function(){var z=!0,B=_!=null&&_+"queueHooks",q=n.timers,w=u.get(this);if(B)w[B]&&w[B].stop&&j(w[B]);else for(B in w)w[B]&&w[B].stop&&P.test(B)&&j(w[B]);for(B=q.length;B--;)q[B].elem===this&&(_==null||q[B].queue===_)&&(q[B].anim.stop(U),z=!1,q.splice(B,1));(z||!U)&&n.dequeue(this,_)})},finish:function(_){return _!==!1&&(_=_||"fx"),this.each(function(){var L,U=u.get(this),j=U[_+"queue"],z=U[_+"queueHooks"],B=n.timers,q=j?j.length:0;for(U.finish=!0,n.queue(this,_,[]),z&&z.stop&&z.stop.call(this,!0),L=B.length;L--;)B[L].elem===this&&B[L].queue===_&&(B[L].anim.stop(!0),B.splice(L,1));for(L=0;L<q;L++)j[L]&&j[L].finish&&j[L].finish.call(this);delete U.finish})}}),n.each(["toggle","show","hide"],function(_,L){var U=n.fn[L];n.fn[L]=function(j,z,B){return j==null||typeof j=="boolean"?U.apply(this,arguments):this.animate(T(L,!0),j,z,B)}}),n.each({slideDown:T("show"),slideUp:T("hide"),slideToggle:T("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(_,L){n.fn[_]=function(U,j,z){return this.animate(L,U,j,z)}}),n.timers=[],n.fx.tick=function(){var _,L=0,U=n.timers;for(S=Date.now();L<U.length;L++)_=U[L],!_()&&U[L]===_&&U.splice(L--,1);U.length||n.fx.stop(),S=void 0},n.fx.timer=function(_){n.timers.push(_),n.fx.start()},n.fx.interval=13,n.fx.start=function(){y||(y=!0,E())},n.fx.stop=function(){y=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(v,g),o!==void 0&&(O.exports=o)},4881:(O,v,a)=>{var g,o;g=[a(2884),a(2137),a(7154)],o=function(n,p){"use strict";function d(l,r,c,m,i){return new d.prototype.init(l,r,c,m,i)}n.Tween=d,d.prototype={constructor:d,init:function(l,r,c,m,i,h){this.elem=l,this.prop=c,this.easing=i||n.easing._default,this.options=r,this.start=this.now=this.cur(),this.end=m,this.unit=h||(n.cssNumber[c]?"":"px")},cur:function(){var l=d.propHooks[this.prop];return l&&l.get?l.get(this):d.propHooks._default.get(this)},run:function(l){var r,c=d.propHooks[this.prop];return this.options.duration?this.pos=r=n.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=r=l,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):d.propHooks._default.set(this),this}},d.prototype.init.prototype=d.prototype,d.propHooks={_default:{get:function(l){var r;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(r=n.css(l.elem,l.prop,""),!r||r==="auto"?0:r)},set:function(l){n.fx.step[l.prop]?n.fx.step[l.prop](l):l.elem.nodeType===1&&(n.cssHooks[l.prop]||l.elem.style[p(l.prop)]!=null)?n.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},d.propHooks.scrollTop=d.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},n.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},n.fx=d.prototype.init,n.fx.step={}}.apply(v,g),o!==void 0&&(O.exports=o)},7791:(O,v,a)=>{var g,o;g=[a(2884),a(6),a(8331)],o=function(n){"use strict";n.expr.pseudos.animated=function(p){return n.grep(n.timers,function(d){return p===d.elem}).length}}.apply(v,g),o!==void 0&&(O.exports=o)},5957:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(893),a(9003),a(1143),a(8451),a(7502),a(7098),a(698),a(7031),a(6365),a(6)],o=function(n,p,d,l,r,c,m,i,h,u){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function S(){return!0}function y(){return!1}function b(T,A){return T===P()==(A==="focus")}function P(){try{return p.activeElement}catch(T){}}function E(T,A,R,M,x,_){var L,U;if(typeof A=="object"){typeof R!="string"&&(M=M||R,R=void 0);for(U in A)E(T,U,R,M,A[U],_);return T}if(M==null&&x==null?(x=R,M=R=void 0):x==null&&(typeof R=="string"?(x=M,M=void 0):(x=M,M=R,R=void 0)),x===!1)x=y;else if(!x)return T;return _===1&&(L=x,x=function(j){return n().off(j),L.apply(this,arguments)},x.guid=L.guid||(L.guid=n.guid++)),T.each(function(){n.event.add(this,A,x,M,R)})}n.event={global:{},add:function(T,A,R,M,x){var _,L,U,j,z,B,q,w,H,V,ne,ae=h.get(T);if(!!i(T))for(R.handler&&(_=R,R=_.handler,x=_.selector),x&&n.find.matchesSelector(d,x),R.guid||(R.guid=n.guid++),(j=ae.events)||(j=ae.events=Object.create(null)),(L=ae.handle)||(L=ae.handle=function(de){return typeof n!="undefined"&&n.event.triggered!==de.type?n.event.dispatch.apply(T,arguments):void 0}),A=(A||"").match(r)||[""],z=A.length;z--;)U=f.exec(A[z])||[],H=ne=U[1],V=(U[2]||"").split(".").sort(),H&&(q=n.event.special[H]||{},H=(x?q.delegateType:q.bindType)||H,q=n.event.special[H]||{},B=n.extend({type:H,origType:ne,data:M,handler:R,guid:R.guid,selector:x,needsContext:x&&n.expr.match.needsContext.test(x),namespace:V.join(".")},_),(w=j[H])||(w=j[H]=[],w.delegateCount=0,(!q.setup||q.setup.call(T,M,V,L)===!1)&&T.addEventListener&&T.addEventListener(H,L)),q.add&&(q.add.call(T,B),B.handler.guid||(B.handler.guid=R.guid)),x?w.splice(w.delegateCount++,0,B):w.push(B),n.event.global[H]=!0)},remove:function(T,A,R,M,x){var _,L,U,j,z,B,q,w,H,V,ne,ae=h.hasData(T)&&h.get(T);if(!(!ae||!(j=ae.events))){for(A=(A||"").match(r)||[""],z=A.length;z--;){if(U=f.exec(A[z])||[],H=ne=U[1],V=(U[2]||"").split(".").sort(),!H){for(H in j)n.event.remove(T,H+A[z],R,M,!0);continue}for(q=n.event.special[H]||{},H=(M?q.delegateType:q.bindType)||H,w=j[H]||[],U=U[2]&&new RegExp("(^|\\.)"+V.join("\\.(?:.*\\.|)")+"(\\.|$)"),L=_=w.length;_--;)B=w[_],(x||ne===B.origType)&&(!R||R.guid===B.guid)&&(!U||U.test(B.namespace))&&(!M||M===B.selector||M==="**"&&B.selector)&&(w.splice(_,1),B.selector&&w.delegateCount--,q.remove&&q.remove.call(T,B));L&&!w.length&&((!q.teardown||q.teardown.call(T,V,ae.handle)===!1)&&n.removeEvent(T,H,ae.handle),delete j[H])}n.isEmptyObject(j)&&h.remove(T,"handle events")}},dispatch:function(T){var A,R,M,x,_,L,U=new Array(arguments.length),j=n.event.fix(T),z=(h.get(this,"events")||Object.create(null))[j.type]||[],B=n.event.special[j.type]||{};for(U[0]=j,A=1;A<arguments.length;A++)U[A]=arguments[A];if(j.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,j)===!1)){for(L=n.event.handlers.call(this,j,z),A=0;(x=L[A++])&&!j.isPropagationStopped();)for(j.currentTarget=x.elem,R=0;(_=x.handlers[R++])&&!j.isImmediatePropagationStopped();)(!j.rnamespace||_.namespace===!1||j.rnamespace.test(_.namespace))&&(j.handleObj=_,j.data=_.data,M=((n.event.special[_.origType]||{}).handle||_.handler).apply(x.elem,U),M!==void 0&&(j.result=M)===!1&&(j.preventDefault(),j.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,j),j.result}},handlers:function(T,A){var R,M,x,_,L,U=[],j=A.delegateCount,z=T.target;if(j&&z.nodeType&&!(T.type==="click"&&T.button>=1)){for(;z!==this;z=z.parentNode||this)if(z.nodeType===1&&!(T.type==="click"&&z.disabled===!0)){for(_=[],L={},R=0;R<j;R++)M=A[R],x=M.selector+" ",L[x]===void 0&&(L[x]=M.needsContext?n(x,this).index(z)>-1:n.find(x,this,null,[z]).length),L[x]&&_.push(M);_.length&&U.push({elem:z,handlers:_})}}return z=this,j<A.length&&U.push({elem:z,handlers:A.slice(j)}),U},addProp:function(T,A){Object.defineProperty(n.Event.prototype,T,{enumerable:!0,configurable:!0,get:l(A)?function(){if(this.originalEvent)return A(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[T]},set:function(R){Object.defineProperty(this,T,{enumerable:!0,configurable:!0,writable:!0,value:R})}})},fix:function(T){return T[n.expando]?T:new n.Event(T)},special:{load:{noBubble:!0},click:{setup:function(T){var A=this||T;return c.test(A.type)&&A.click&&u(A,"input")&&N(A,"click",S),!1},trigger:function(T){var A=this||T;return c.test(A.type)&&A.click&&u(A,"input")&&N(A,"click"),!0},_default:function(T){var A=T.target;return c.test(A.type)&&A.click&&u(A,"input")&&h.get(A,"click")||u(A,"a")}},beforeunload:{postDispatch:function(T){T.result!==void 0&&T.originalEvent&&(T.originalEvent.returnValue=T.result)}}}};function N(T,A,R){if(!R){h.get(T,A)===void 0&&n.event.add(T,A,S);return}h.set(T,A,!1),n.event.add(T,A,{namespace:!1,handler:function(M){var x,_,L=h.get(this,A);if(M.isTrigger&1&&this[A]){if(L.length)(n.event.special[A]||{}).delegateType&&M.stopPropagation();else if(L=m.call(arguments),h.set(this,A,L),x=R(this,A),this[A](),_=h.get(this,A),L!==_||x?h.set(this,A,!1):_={},L!==_)return M.stopImmediatePropagation(),M.preventDefault(),_&&_.value}else L.length&&(h.set(this,A,{value:n.event.trigger(n.extend(L[0],n.Event.prototype),L.slice(1),this)}),M.stopImmediatePropagation())}})}return n.removeEvent=function(T,A,R){T.removeEventListener&&T.removeEventListener(A,R)},n.Event=function(T,A){if(!(this instanceof n.Event))return new n.Event(T,A);T&&T.type?(this.originalEvent=T,this.type=T.type,this.isDefaultPrevented=T.defaultPrevented||T.defaultPrevented===void 0&&T.returnValue===!1?S:y,this.target=T.target&&T.target.nodeType===3?T.target.parentNode:T.target,this.currentTarget=T.currentTarget,this.relatedTarget=T.relatedTarget):this.type=T,A&&n.extend(this,A),this.timeStamp=T&&T.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y,isSimulated:!1,preventDefault:function(){var T=this.originalEvent;this.isDefaultPrevented=S,T&&!this.isSimulated&&T.preventDefault()},stopPropagation:function(){var T=this.originalEvent;this.isPropagationStopped=S,T&&!this.isSimulated&&T.stopPropagation()},stopImmediatePropagation:function(){var T=this.originalEvent;this.isImmediatePropagationStopped=S,T&&!this.isSimulated&&T.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(T,A){n.event.special[T]={setup:function(){return N(this,T,b),!1},trigger:function(){return N(this,T),!0},_default:function(){return!0},delegateType:A}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(T,A){n.event.special[T]={delegateType:A,bindType:A,handle:function(R){var M,x=this,_=R.relatedTarget,L=R.handleObj;return(!_||_!==x&&!n.contains(x,_))&&(R.type=L.origType,M=L.handler.apply(this,arguments),R.type=A),M}}}),n.fn.extend({on:function(T,A,R,M){return E(this,T,A,R,M)},one:function(T,A,R,M){return E(this,T,A,R,M,1)},off:function(T,A,R){var M,x;if(T&&T.preventDefault&&T.handleObj)return M=T.handleObj,n(T.delegateTarget).off(M.namespace?M.origType+"."+M.namespace:M.origType,M.selector,M.handler),this;if(typeof T=="object"){for(x in T)this.off(x,A,T[x]);return this}return(A===!1||typeof A=="function")&&(R=A,A=void 0),R===!1&&(R=y),this.each(function(){n.event.remove(this,T,R,A)})}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},3277:(O,v,a)=>{var g,o;g=[a(2884),a(698),a(9224),a(5957),a(2075)],o=function(n,p,d){"use strict";return d.focusin||n.each({focus:"focusin",blur:"focusout"},function(l,r){var c=function(m){n.event.simulate(r,m.target,n.event.fix(m))};n.event.special[r]={setup:function(){var m=this.ownerDocument||this.document||this,i=p.access(m,r);i||m.addEventListener(l,c,!0),p.access(m,r,(i||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,i=p.access(m,r)-1;i?p.access(m,r,i):(m.removeEventListener(l,c,!0),p.remove(m,r))}}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},9224:(O,v,a)=>{var g,o;g=[a(9343)],o=function(n){"use strict";return n.focusin="onfocusin"in window,n}.apply(v,g),o!==void 0&&(O.exports=o)},2075:(O,v,a)=>{var g,o;g=[a(2884),a(7749),a(698),a(7098),a(939),a(9003),a(9011),a(5957)],o=function(n,p,d,l,r,c,m){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,h=function(u){u.stopPropagation()};return n.extend(n.event,{trigger:function(u,f,S,y){var b,P,E,N,T,A,R,M,x=[S||p],_=r.call(u,"type")?u.type:u,L=r.call(u,"namespace")?u.namespace.split("."):[];if(P=M=E=S=S||p,!(S.nodeType===3||S.nodeType===8)&&!i.test(_+n.event.triggered)&&(_.indexOf(".")>-1&&(L=_.split("."),_=L.shift(),L.sort()),T=_.indexOf(":")<0&&"on"+_,u=u[n.expando]?u:new n.Event(_,typeof u=="object"&&u),u.isTrigger=y?2:3,u.namespace=L.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=S),f=f==null?[u]:n.makeArray(f,[u]),R=n.event.special[_]||{},!(!y&&R.trigger&&R.trigger.apply(S,f)===!1))){if(!y&&!R.noBubble&&!m(S)){for(N=R.delegateType||_,i.test(N+_)||(P=P.parentNode);P;P=P.parentNode)x.push(P),E=P;E===(S.ownerDocument||p)&&x.push(E.defaultView||E.parentWindow||window)}for(b=0;(P=x[b++])&&!u.isPropagationStopped();)M=P,u.type=b>1?N:R.bindType||_,A=(d.get(P,"events")||Object.create(null))[u.type]&&d.get(P,"handle"),A&&A.apply(P,f),A=T&&P[T],A&&A.apply&&l(P)&&(u.result=A.apply(P,f),u.result===!1&&u.preventDefault());return u.type=_,!y&&!u.isDefaultPrevented()&&(!R._default||R._default.apply(x.pop(),f)===!1)&&l(S)&&T&&c(S[_])&&!m(S)&&(E=S[T],E&&(S[T]=null),n.event.triggered=_,u.isPropagationStopped()&&M.addEventListener(_,h),S[_](),u.isPropagationStopped()&&M.removeEventListener(_,h),n.event.triggered=void 0,E&&(S[T]=E)),u.result}},simulate:function(u,f,S){var y=n.extend(new n.Event,S,{type:u,isSimulated:!0});n.event.trigger(y,null,f)}}),n.fn.extend({trigger:function(u,f){return this.each(function(){n.event.trigger(u,f,this)})},triggerHandler:function(u,f){var S=this[0];if(S)return n.event.trigger(u,f,S,!0)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},6909:(O,v,a)=>{var g,o,g,o;g=[a(2884)],o=function(n){"use strict";g=[],o=function(){return n}.apply(v,g),o!==void 0&&(O.exports=o)}.apply(v,g),o!==void 0&&(O.exports=o)},2851:(O,v,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";var p=window.jQuery,d=window.$;n.noConflict=function(l){return window.$===n&&(window.$=d),l&&window.jQuery===n&&(window.jQuery=p),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(v,g),o!==void 0&&(O.exports=o)},5814:(O,v,a)=>{var g,o;g=[a(2884),a(6),a(7392),a(7617),a(184),a(3615),a(7644),a(8416),a(8174),a(2706),a(4437),a(5957),a(3277),a(5599),a(6399),a(7647),a(7154),a(8326),a(4492),a(1450),a(2371),a(719),a(3632),a(4182),a(6073),a(5461),a(8331),a(7791),a(6828),a(3514),a(1900),a(6909),a(2851)],o=function(n){"use strict";return n}.apply(v,g),o!==void 0&&(O.exports=o)},5599:(O,v,a)=>{var g,o;g=[a(2884),a(1518),a(1429),a(9003),a(5896),a(8451),a(8097),a(9109),a(2619),a(6747),a(5385),a(273),a(6753),a(5464),a(698),a(640),a(7098),a(4835),a(7031),a(6365),a(7392),a(6),a(5957)],o=function(n,p,d,l,r,c,m,i,h,u,f,S,y,b,P,E,N,T,A){"use strict";var R=/<script|<style|<link/i,M=/checked\s*(?:[^=]|=\s*.checked.)/i,x=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function _(w,H){return A(w,"table")&&A(H.nodeType!==11?H:H.firstChild,"tr")&&n(w).children("tbody")[0]||w}function L(w){return w.type=(w.getAttribute("type")!==null)+"/"+w.type,w}function U(w){return(w.type||"").slice(0,5)==="true/"?w.type=w.type.slice(5):w.removeAttribute("type"),w}function j(w,H){var V,ne,ae,de,te,ge,Ce;if(H.nodeType===1){if(P.hasData(w)&&(de=P.get(w),Ce=de.events,Ce)){P.remove(H,"handle events");for(ae in Ce)for(V=0,ne=Ce[ae].length;V<ne;V++)n.event.add(H,ae,Ce[ae][V])}E.hasData(w)&&(te=E.access(w),ge=n.extend({},te),E.set(H,ge))}}function z(w,H){var V=H.nodeName.toLowerCase();V==="input"&&c.test(w.type)?H.checked=w.checked:(V==="input"||V==="textarea")&&(H.defaultValue=w.defaultValue)}function B(w,H,V,ne){H=d(H);var ae,de,te,ge,Ce,Fe,it=0,mt=w.length,ut=mt-1,ht=H[0],At=l(ht);if(At||mt>1&&typeof ht=="string"&&!b.checkClone&&M.test(ht))return w.each(function(Re){var Ct=w.eq(Re);At&&(H[0]=ht.call(this,Re,Ct.html())),B(Ct,H,V,ne)});if(mt&&(ae=y(H,w[0].ownerDocument,!1,w,ne),de=ae.firstChild,ae.childNodes.length===1&&(ae=de),de||ne)){for(te=n.map(f(ae,"script"),L),ge=te.length;it<mt;it++)Ce=ae,it!==ut&&(Ce=n.clone(Ce,!0,!0),ge&&n.merge(te,f(Ce,"script"))),V.call(w[it],Ce,it);if(ge)for(Fe=te[te.length-1].ownerDocument,n.map(te,U),it=0;it<ge;it++)Ce=te[it],h.test(Ce.type||"")&&!P.access(Ce,"globalEval")&&n.contains(Fe,Ce)&&(Ce.src&&(Ce.type||"").toLowerCase()!=="module"?n._evalUrl&&!Ce.noModule&&n._evalUrl(Ce.src,{nonce:Ce.nonce||Ce.getAttribute("nonce")},Fe):T(Ce.textContent.replace(x,""),Ce,Fe))}return w}function q(w,H,V){for(var ne,ae=H?n.filter(H,w):w,de=0;(ne=ae[de])!=null;de++)!V&&ne.nodeType===1&&n.cleanData(f(ne)),ne.parentNode&&(V&&p(ne)&&S(f(ne,"script")),ne.parentNode.removeChild(ne));return w}return n.extend({htmlPrefilter:function(w){return w},clone:function(w,H,V){var ne,ae,de,te,ge=w.cloneNode(!0),Ce=p(w);if(!b.noCloneChecked&&(w.nodeType===1||w.nodeType===11)&&!n.isXMLDoc(w))for(te=f(ge),de=f(w),ne=0,ae=de.length;ne<ae;ne++)z(de[ne],te[ne]);if(H)if(V)for(de=de||f(w),te=te||f(ge),ne=0,ae=de.length;ne<ae;ne++)j(de[ne],te[ne]);else j(w,ge);return te=f(ge,"script"),te.length>0&&S(te,!Ce&&f(w,"script")),ge},cleanData:function(w){for(var H,V,ne,ae=n.event.special,de=0;(V=w[de])!==void 0;de++)if(N(V)){if(H=V[P.expando]){if(H.events)for(ne in H.events)ae[ne]?n.event.remove(V,ne):n.removeEvent(V,ne,H.handle);V[P.expando]=void 0}V[E.expando]&&(V[E.expando]=void 0)}}}),n.fn.extend({detach:function(w){return q(this,w,!0)},remove:function(w){return q(this,w)},text:function(w){return m(this,function(H){return H===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=H)})},null,w,arguments.length)},append:function(){return B(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var H=_(this,w);H.appendChild(w)}})},prepend:function(){return B(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var H=_(this,w);H.insertBefore(w,H.firstChild)}})},before:function(){return B(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this)})},after:function(){return B(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this.nextSibling)})},empty:function(){for(var w,H=0;(w=this[H])!=null;H++)w.nodeType===1&&(n.cleanData(f(w,!1)),w.textContent="");return this},clone:function(w,H){return w=w==null?!1:w,H=H==null?w:H,this.map(function(){return n.clone(this,w,H)})},html:function(w){return m(this,function(H){var V=this[0]||{},ne=0,ae=this.length;if(H===void 0&&V.nodeType===1)return V.innerHTML;if(typeof H=="string"&&!R.test(H)&&!u[(i.exec(H)||["",""])[1].toLowerCase()]){H=n.htmlPrefilter(H);try{for(;ne<ae;ne++)V=this[ne]||{},V.nodeType===1&&(n.cleanData(f(V,!1)),V.innerHTML=H);V=0}catch(de){}}V&&this.empty().append(H)},null,w,arguments.length)},replaceWith:function(){var w=[];return B(this,arguments,function(H){var V=this.parentNode;n.inArray(this,w)<0&&(n.cleanData(f(this)),V&&V.replaceChild(H,this))},w)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(w,H){n.fn[w]=function(V){for(var ne,ae=[],de=n(V),te=de.length-1,ge=0;ge<=te;ge++)ne=ge===te?this:this.clone(!0),n(de[ge])[H](ne),r.apply(ae,ne.get());return this.pushStack(ae)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},6399:(O,v,a)=>{var g,o;g=[a(1450)],o=function(n){"use strict";return n._evalUrl=function(p,d,l){return n.ajax({url:p,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(r){n.globalEval(r,d,l)}})},n._evalUrl}.apply(v,g),o!==void 0&&(O.exports=o)},6753:(O,v,a)=>{var g,o;g=[a(2884),a(1401),a(1518),a(9109),a(2619),a(6747),a(5385),a(273)],o=function(n,p,d,l,r,c,m,i){"use strict";var h=/<|&#?\w+;/;function u(f,S,y,b,P){for(var E,N,T,A,R,M,x=S.createDocumentFragment(),_=[],L=0,U=f.length;L<U;L++)if(E=f[L],E||E===0)if(p(E)==="object")n.merge(_,E.nodeType?[E]:E);else if(!h.test(E))_.push(S.createTextNode(E));else{for(N=N||x.appendChild(S.createElement("div")),T=(l.exec(E)||["",""])[1].toLowerCase(),A=c[T]||c._default,N.innerHTML=A[1]+n.htmlPrefilter(E)+A[2],M=A[0];M--;)N=N.lastChild;n.merge(_,N.childNodes),N=x.firstChild,N.textContent=""}for(x.textContent="",L=0;E=_[L++];){if(b&&n.inArray(E,b)>-1){P&&P.push(E);continue}if(R=d(E),N=m(x.appendChild(E),"script"),R&&i(N),y)for(M=0;E=N[M++];)r.test(E.type||"")&&y.push(E)}return x}return u}.apply(v,g),o!==void 0&&(O.exports=o)},5385:(O,v,a)=>{var g,o;g=[a(2884),a(7031)],o=function(n,p){"use strict";function d(l,r){var c;return typeof l.getElementsByTagName!="undefined"?c=l.getElementsByTagName(r||"*"):typeof l.querySelectorAll!="undefined"?c=l.querySelectorAll(r||"*"):c=[],r===void 0||r&&p(l,r)?n.merge([l],c):c}return d}.apply(v,g),o!==void 0&&(O.exports=o)},273:(O,v,a)=>{var g,o;g=[a(698)],o=function(n){"use strict";function p(d,l){for(var r=0,c=d.length;r<c;r++)n.set(d[r],"globalEval",!l||n.get(l[r],"globalEval"))}return p}.apply(v,g),o!==void 0&&(O.exports=o)},5464:(O,v,a)=>{var g,o;g=[a(7749),a(9343)],o=function(n,p){"use strict";return function(){var d=n.createDocumentFragment(),l=d.appendChild(n.createElement("div")),r=n.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),l.appendChild(r),p.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",p.option=!!l.lastChild}(),p}.apply(v,g),o!==void 0&&(O.exports=o)},2619:(O,v,a)=>{var g;g=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(v,a,v,O),g!==void 0&&(O.exports=g)},9109:(O,v,a)=>{var g;g=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(v,a,v,O),g!==void 0&&(O.exports=g)},6747:(O,v,a)=>{var g,o;g=[a(5464)],o=function(n){"use strict";var p={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return p.tbody=p.tfoot=p.colgroup=p.caption=p.thead,p.th=p.td,n.option||(p.optgroup=p.option=[1,"<select multiple='multiple'>","</select>"]),p}.apply(v,g),o!==void 0&&(O.exports=o)},6828:(O,v,a)=>{var g,o;g=[a(2884),a(8097),a(893),a(9003),a(3045),a(4015),a(1353),a(1567),a(9011),a(6365),a(7154),a(6)],o=function(n,p,d,l,r,c,m,i,h){"use strict";return n.offset={setOffset:function(u,f,S){var y,b,P,E,N,T,A,R=n.css(u,"position"),M=n(u),x={};R==="static"&&(u.style.position="relative"),N=M.offset(),P=n.css(u,"top"),T=n.css(u,"left"),A=(R==="absolute"||R==="fixed")&&(P+T).indexOf("auto")>-1,A?(y=M.position(),E=y.top,b=y.left):(E=parseFloat(P)||0,b=parseFloat(T)||0),l(f)&&(f=f.call(u,S,n.extend({},N))),f.top!=null&&(x.top=f.top-N.top+E),f.left!=null&&(x.left=f.left-N.left+b),"using"in f?f.using.call(u,x):M.css(x)}},n.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(b){n.offset.setOffset(this,u,b)});var f,S,y=this[0];if(!!y)return y.getClientRects().length?(f=y.getBoundingClientRect(),S=y.ownerDocument.defaultView,{top:f.top+S.pageYOffset,left:f.left+S.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var u,f,S,y=this[0],b={top:0,left:0};if(n.css(y,"position")==="fixed")f=y.getBoundingClientRect();else{for(f=this.offset(),S=y.ownerDocument,u=y.offsetParent||S.documentElement;u&&(u===S.body||u===S.documentElement)&&n.css(u,"position")==="static";)u=u.parentNode;u&&u!==y&&u.nodeType===1&&(b=n(u).offset(),b.top+=n.css(u,"borderTopWidth",!0),b.left+=n.css(u,"borderLeftWidth",!0))}return{top:f.top-b.top-n.css(y,"marginTop",!0),left:f.left-b.left-n.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&n.css(u,"position")==="static";)u=u.offsetParent;return u||d})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,f){var S=f==="pageYOffset";n.fn[u]=function(y){return p(this,function(b,P,E){var N;if(h(b)?N=b:b.nodeType===9&&(N=b.defaultView),E===void 0)return N?N[f]:b[P];N?N.scrollTo(S?N.pageXOffset:E,S?E:N.pageYOffset):b[P]=E},u,y,arguments.length)}}),n.each(["top","left"],function(u,f){n.cssHooks[f]=m(i.pixelPosition,function(S,y){if(y)return y=c(S,f),r.test(y)?n(S).position()[f]+"px":y})}),n}.apply(v,g),o!==void 0&&(O.exports=o)},8174:(O,v,a)=>{var g,o;g=[a(2884),a(698),a(184),a(7617)],o=function(n,p){"use strict";return n.extend({queue:function(d,l,r){var c;if(d)return l=(l||"fx")+"queue",c=p.get(d,l),r&&(!c||Array.isArray(r)?c=p.access(d,l,n.makeArray(r)):c.push(r)),c||[]},dequeue:function(d,l){l=l||"fx";var r=n.queue(d,l),c=r.length,m=r.shift(),i=n._queueHooks(d,l),h=function(){n.dequeue(d,l)};m==="inprogress"&&(m=r.shift(),c--),m&&(l==="fx"&&r.unshift("inprogress"),delete i.stop,m.call(d,h,i)),!c&&i&&i.empty.fire()},_queueHooks:function(d,l){var r=l+"queueHooks";return p.get(d,r)||p.access(d,r,{empty:n.Callbacks("once memory").add(function(){p.remove(d,[l+"queue",r])})})}}),n.fn.extend({queue:function(d,l){var r=2;return typeof d!="string"&&(l=d,d="fx",r--),arguments.length<r?n.queue(this[0],d):l===void 0?this:this.each(function(){var c=n.queue(this,d,l);n._queueHooks(this,d),d==="fx"&&c[0]!=="inprogress"&&n.dequeue(this,d)})},dequeue:function(d){return this.each(function(){n.dequeue(this,d)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(d,l){var r,c=1,m=n.Deferred(),i=this,h=this.length,u=function(){--c||m.resolveWith(i,[i])};for(typeof d!="string"&&(l=d,d=void 0),d=d||"fx";h--;)r=p.get(i[h],d+"queueHooks"),r&&r.empty&&(c++,r.empty.add(u));return u(),m.promise(l)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},2706:(O,v,a)=>{var g,o;g=[a(2884),a(8174),a(8331)],o=function(n){"use strict";return n.fn.delay=function(p,d){return p=n.fx&&n.fx.speeds[p]||p,d=d||"fx",this.queue(d,function(l,r){var c=window.setTimeout(l,p);r.stop=function(){window.clearTimeout(c)}})},n.fn.delay}.apply(v,g),o!==void 0&&(O.exports=o)},1854:(O,v,a)=>{var g,o;g=[a(2884),a(4779)],o=function(n,p){"use strict";n.find=p,n.expr=p.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=p.uniqueSort,n.text=p.getText,n.isXMLDoc=p.isXML,n.contains=p.contains,n.escapeSelector=p.escape}.apply(v,g),o!==void 0&&(O.exports=o)},6:(O,v,a)=>{var g,o;g=[a(1854)],o=function(){"use strict"}.apply(v,g),o!==void 0&&(O.exports=o)},4492:(O,v,a)=>{var g,o;g=[a(2884),a(1401),a(8451),a(9003),a(6365),a(7392),a(6034)],o=function(n,p,d,l){"use strict";var r=/\[\]$/,c=/\r?\n/g,m=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function h(u,f,S,y){var b;if(Array.isArray(f))n.each(f,function(P,E){S||r.test(u)?y(u,E):h(u+"["+(typeof E=="object"&&E!=null?P:"")+"]",E,S,y)});else if(!S&&p(f)==="object")for(b in f)h(u+"["+b+"]",f[b],S,y);else y(u,f)}return n.param=function(u,f){var S,y=[],b=function(P,E){var N=l(E)?E():E;y[y.length]=encodeURIComponent(P)+"="+encodeURIComponent(N==null?"":N)};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!n.isPlainObject(u))n.each(u,function(){b(this.name,this.value)});else for(S in u)h(S,u[S],f,b);return y.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=n.prop(this,"elements");return u?n.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!m.test(u)&&(this.checked||!d.test(u))}).map(function(u,f){var S=n(this).val();return S==null?null:Array.isArray(S)?n.map(S,function(y){return{name:f.name,value:y.replace(c,`\r
`)}}):{name:f.name,value:S.replace(c,`\r
`)}}).get()}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},7392:(O,v,a)=>{var g,o;g=[a(2884),a(2690),a(706),a(8515),a(2908),a(6903),a(7031),a(6365),a(6036),a(6)],o=function(n,p,d,l,r,c,m){"use strict";var i=/^(?:parents|prev(?:Until|All))/,h={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(f){var S=n(f,this),y=S.length;return this.filter(function(){for(var b=0;b<y;b++)if(n.contains(this,S[b]))return!0})},closest:function(f,S){var y,b=0,P=this.length,E=[],N=typeof f!="string"&&n(f);if(!c.test(f)){for(;b<P;b++)for(y=this[b];y&&y!==S;y=y.parentNode)if(y.nodeType<11&&(N?N.index(y)>-1:y.nodeType===1&&n.find.matchesSelector(y,f))){E.push(y);break}}return this.pushStack(E.length>1?n.uniqueSort(E):E)},index:function(f){return f?typeof f=="string"?d.call(n(f),this[0]):d.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,S){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(f,S))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function u(f,S){for(;(f=f[S])&&f.nodeType!==1;);return f}return n.each({parent:function(f){var S=f.parentNode;return S&&S.nodeType!==11?S:null},parents:function(f){return l(f,"parentNode")},parentsUntil:function(f,S,y){return l(f,"parentNode",y)},next:function(f){return u(f,"nextSibling")},prev:function(f){return u(f,"previousSibling")},nextAll:function(f){return l(f,"nextSibling")},prevAll:function(f){return l(f,"previousSibling")},nextUntil:function(f,S,y){return l(f,"nextSibling",y)},prevUntil:function(f,S,y){return l(f,"previousSibling",y)},siblings:function(f){return r((f.parentNode||{}).firstChild,f)},children:function(f){return r(f.firstChild)},contents:function(f){return f.contentDocument!=null&&p(f.contentDocument)?f.contentDocument:(m(f,"template")&&(f=f.content||f),n.merge([],f.childNodes))}},function(f,S){n.fn[f]=function(y,b){var P=n.map(this,S,y);return f.slice(-5)!=="Until"&&(b=y),b&&typeof b=="string"&&(P=n.filter(b,P)),this.length>1&&(h[f]||n.uniqueSort(P),i.test(f)&&P.reverse()),this.pushStack(P)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},6036:(O,v,a)=>{var g,o;g=[a(2884),a(706),a(9003),a(6903),a(6)],o=function(n,p,d,l){"use strict";function r(c,m,i){return d(m)?n.grep(c,function(h,u){return!!m.call(h,u,h)!==i}):m.nodeType?n.grep(c,function(h){return h===m!==i}):typeof m!="string"?n.grep(c,function(h){return p.call(m,h)>-1!==i}):n.filter(m,c,i)}n.filter=function(c,m,i){var h=m[0];return i&&(c=":not("+c+")"),m.length===1&&h.nodeType===1?n.find.matchesSelector(h,c)?[h]:[]:n.find.matches(c,n.grep(m,function(u){return u.nodeType===1}))},n.fn.extend({find:function(c){var m,i,h=this.length,u=this;if(typeof c!="string")return this.pushStack(n(c).filter(function(){for(m=0;m<h;m++)if(n.contains(u[m],this))return!0}));for(i=this.pushStack([]),m=0;m<h;m++)n.find(c,u[m],i);return h>1?n.uniqueSort(i):i},filter:function(c){return this.pushStack(r(this,c||[],!1))},not:function(c){return this.pushStack(r(this,c||[],!0))},is:function(c){return!!r(this,typeof c=="string"&&l.test(c)?n(c):c||[],!1).length}})}.apply(v,g),o!==void 0&&(O.exports=o)},8515:(O,v,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";return function(p,d,l){for(var r=[],c=l!==void 0;(p=p[d])&&p.nodeType!==9;)if(p.nodeType===1){if(c&&n(p).is(l))break;r.push(p)}return r}}.apply(v,g),o!==void 0&&(O.exports=o)},6903:(O,v,a)=>{var g,o;g=[a(2884),a(6)],o=function(n){"use strict";return n.expr.match.needsContext}.apply(v,g),o!==void 0&&(O.exports=o)},2908:(O,v,a)=>{var g;g=function(){"use strict";return function(o,n){for(var p=[];o;o=o.nextSibling)o.nodeType===1&&o!==n&&p.push(o);return p}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},789:(O,v,a)=>{var g,o;g=[a(7913)],o=function(n){"use strict";return n.call(Object)}.apply(v,g),o!==void 0&&(O.exports=o)},2305:(O,v,a)=>{var g;g=function(){"use strict";return[]}.call(v,a,v,O),g!==void 0&&(O.exports=g)},8978:(O,v,a)=>{var g;g=function(){"use strict";return{}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},7749:(O,v,a)=>{var g;g=function(){"use strict";return window.document}.call(v,a,v,O),g!==void 0&&(O.exports=g)},893:(O,v,a)=>{var g,o;g=[a(7749)],o=function(n){"use strict";return n.documentElement}.apply(v,g),o!==void 0&&(O.exports=o)},1429:(O,v,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.flat?function(p){return n.flat.call(p)}:function(p){return n.concat.apply([],p)}}.apply(v,g),o!==void 0&&(O.exports=o)},7913:(O,v,a)=>{var g,o;g=[a(939)],o=function(n){"use strict";return n.toString}.apply(v,g),o!==void 0&&(O.exports=o)},2690:(O,v,a)=>{var g;g=function(){"use strict";return Object.getPrototypeOf}.call(v,a,v,O),g!==void 0&&(O.exports=g)},939:(O,v,a)=>{var g,o;g=[a(8978)],o=function(n){"use strict";return n.hasOwnProperty}.apply(v,g),o!==void 0&&(O.exports=o)},706:(O,v,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.indexOf}.apply(v,g),o!==void 0&&(O.exports=o)},9003:(O,v,a)=>{var g;g=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},9011:(O,v,a)=>{var g;g=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},5399:(O,v,a)=>{var g;g=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(v,a,v,O),g!==void 0&&(O.exports=g)},5896:(O,v,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.push}.apply(v,g),o!==void 0&&(O.exports=o)},8451:(O,v,a)=>{var g;g=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(v,a,v,O),g!==void 0&&(O.exports=g)},1286:(O,v,a)=>{var g,o;g=[a(5399)],o=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(v,g),o!==void 0&&(O.exports=o)},1143:(O,v,a)=>{var g;g=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(v,a,v,O),g!==void 0&&(O.exports=g)},7502:(O,v,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.slice}.apply(v,g),o!==void 0&&(O.exports=o)},9343:(O,v,a)=>{var g;g=function(){"use strict";return{}}.call(v,a,v,O),g!==void 0&&(O.exports=g)},9412:(O,v,a)=>{var g,o;g=[a(8978)],o=function(n){"use strict";return n.toString}.apply(v,g),o!==void 0&&(O.exports=o)},7647:(O,v,a)=>{var g,o;g=[a(2884),a(9003),a(6365),a(5599),a(7392)],o=function(n,p){"use strict";return n.fn.extend({wrapAll:function(d){var l;return this[0]&&(p(d)&&(d=d.call(this[0])),l=n(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var r=this;r.firstElementChild;)r=r.firstElementChild;return r}).append(this)),this},wrapInner:function(d){return p(d)?this.each(function(l){n(this).wrapInner(d.call(this,l))}):this.each(function(){var l=n(this),r=l.contents();r.length?r.wrapAll(d):l.append(d)})},wrap:function(d){var l=p(d);return this.each(function(r){n(this).wrapAll(l?d.call(this,r):d)})},unwrap:function(d){return this.parent(d).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},4619:function(O,v,a){O=a.nmd(O);var g;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var o,n="4.17.21",p=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",r="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,i="__lodash_placeholder__",h=1,u=2,f=4,S=1,y=2,b=1,P=2,E=4,N=8,T=16,A=32,R=64,M=128,x=256,_=512,L=30,U="...",j=800,z=16,B=1,q=2,w=3,H=1/0,V=9007199254740991,ne=17976931348623157e292,ae=0/0,de=4294967295,te=de-1,ge=de>>>1,Ce=[["ary",M],["bind",b],["bindKey",P],["curry",N],["curryRight",T],["flip",_],["partial",A],["partialRight",R],["rearg",x]],Fe="[object Arguments]",it="[object Array]",mt="[object AsyncFunction]",ut="[object Boolean]",ht="[object Date]",At="[object DOMException]",Re="[object Error]",Ct="[object Function]",Ue="[object GeneratorFunction]",We="[object Map]",Bt="[object Number]",je="[object Null]",pe="[object Object]",Ne="[object Promise]",De="[object Proxy]",ie="[object RegExp]",ye="[object Set]",he="[object String]",be="[object Symbol]",Ze="[object Undefined]",Ke="[object WeakMap]",Je="[object WeakSet]",Pe="[object ArrayBuffer]",$e="[object DataView]",Qe="[object Float32Array]",Xe="[object Float64Array]",zt="[object Int8Array]",It="[object Int16Array]",Nt="[object Int32Array]",Tn="[object Uint8Array]",rn="[object Uint8ClampedArray]",Wt="[object Uint16Array]",gn="[object Uint32Array]",Ft=/\b__p \+= '';/g,mn=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,An=/&(?:amp|lt|gt|quot|#39);/g,kn=/[&<>"']/g,cn=RegExp(An.source),wn=RegExp(kn.source),Nn=/<%-([\s\S]+?)%>/g,po=/<%([\s\S]+?)%>/g,Kn=/<%=([\s\S]+?)%>/g,F=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,W=RegExp(Y.source),X=/^\s+/,ee=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,me=/,? & /,Ee=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Te=/[()=,{}\[\]\/\s]/,Le=/\\(\\)?/g,Ve=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ve=/\w*$/,Ie=/^[-+]0x[0-9a-f]+$/i,vt=/^0b[01]+$/i,Dt=/^\[object .+?Constructor\]$/,rt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Un=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Et=/($^)/,Xs=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Js="\\u0300-\\u036f",Qs="\\ufe20-\\ufe2f",ep="\\u20d0-\\u20ff",Pr=Js+Qs+ep,Tr="\\u2700-\\u27bf",Ar="a-z\\xdf-\\xf6\\xf8-\\xff",tp="\\xac\\xb1\\xd7\\xf7",np="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",op="\\u2000-\\u206f",ip=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nr="A-Z\\xc0-\\xd6\\xd8-\\xde",Dr="\\ufe0e\\ufe0f",Rr=tp+np+op+ip,gi="['\u2019]",rp="["+Ao+"]",_r="["+Rr+"]",No="["+Pr+"]",Mr="\\d+",ap="["+Tr+"]",xr="["+Ar+"]",Lr="[^"+Ao+Rr+Mr+Tr+Ar+Nr+"]",mi="\\ud83c[\\udffb-\\udfff]",sp="(?:"+No+"|"+mi+")",Ir="[^"+Ao+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",yi="[\\ud800-\\udbff][\\udc00-\\udfff]",Yn="["+Nr+"]",Fr="\\u200d",jr="(?:"+xr+"|"+Lr+")",pp="(?:"+Yn+"|"+Lr+")",kr="(?:"+gi+"(?:d|ll|m|re|s|t|ve))?",wr="(?:"+gi+"(?:D|LL|M|RE|S|T|VE))?",Ur=sp+"?",Br="["+Dr+"]?",lp="(?:"+Fr+"(?:"+[Ir,hi,yi].join("|")+")"+Br+Ur+")*",cp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",zr=Br+Ur+lp,up="(?:"+[ap,hi,yi].join("|")+")"+zr,fp="(?:"+[Ir+No+"?",No,hi,yi,rp].join("|")+")",gp=RegExp(gi,"g"),mp=RegExp(No,"g"),vi=RegExp(mi+"(?="+mi+")|"+fp+zr,"g"),hp=RegExp([Yn+"?"+xr+"+"+kr+"(?="+[_r,Yn,"$"].join("|")+")",pp+"+"+wr+"(?="+[_r,Yn+jr,"$"].join("|")+")",Yn+"?"+jr+"+"+kr,Yn+"+"+wr,dp,cp,Mr,up].join("|"),"g"),yp=RegExp("["+Fr+Ao+Pr+Dr+"]"),vp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bp=-1,pt={};pt[Qe]=pt[Xe]=pt[zt]=pt[It]=pt[Nt]=pt[Tn]=pt[rn]=pt[Wt]=pt[gn]=!0,pt[Fe]=pt[it]=pt[Pe]=pt[ut]=pt[$e]=pt[ht]=pt[Re]=pt[Ct]=pt[We]=pt[Bt]=pt[pe]=pt[ie]=pt[ye]=pt[he]=pt[Ke]=!1;var st={};st[Fe]=st[it]=st[Pe]=st[$e]=st[ut]=st[ht]=st[Qe]=st[Xe]=st[zt]=st[It]=st[Nt]=st[We]=st[Bt]=st[pe]=st[ie]=st[ye]=st[he]=st[be]=st[Tn]=st[rn]=st[Wt]=st[gn]=!0,st[Re]=st[Ct]=st[Ke]=!1;var Cp={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ep={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Op={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tp=parseFloat,Ap=parseInt,Wr=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,Np=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Wr||Np||Function("return this")(),Gr=v&&!v.nodeType&&v,lo=Gr&&!0&&O&&!O.nodeType&&O,$r=lo&&lo.exports===Gr,Si=$r&&Wr.process,Zt=function(){try{var J=lo&&lo.require&&lo.require("util").types;return J||Si&&Si.binding&&Si.binding("util")}catch(re){}}(),qr=Zt&&Zt.isArrayBuffer,Vr=Zt&&Zt.isDate,Hr=Zt&&Zt.isMap,Kr=Zt&&Zt.isRegExp,Yr=Zt&&Zt.isSet,Zr=Zt&&Zt.isTypedArray;function Gt(J,re,oe){switch(oe.length){case 0:return J.call(re);case 1:return J.call(re,oe[0]);case 2:return J.call(re,oe[0],oe[1]);case 3:return J.call(re,oe[0],oe[1],oe[2])}return J.apply(re,oe)}function Dp(J,re,oe,Oe){for(var ke=-1,et=J==null?0:J.length;++ke<et;){var St=J[ke];re(Oe,St,oe(St),J)}return Oe}function Xt(J,re){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe&&re(J[oe],oe,J)!==!1;);return J}function Rp(J,re){for(var oe=J==null?0:J.length;oe--&&re(J[oe],oe,J)!==!1;);return J}function Xr(J,re){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe;)if(!re(J[oe],oe,J))return!1;return!0}function Dn(J,re){for(var oe=-1,Oe=J==null?0:J.length,ke=0,et=[];++oe<Oe;){var St=J[oe];re(St,oe,J)&&(et[ke++]=St)}return et}function Do(J,re){var oe=J==null?0:J.length;return!!oe&&Zn(J,re,0)>-1}function bi(J,re,oe){for(var Oe=-1,ke=J==null?0:J.length;++Oe<ke;)if(oe(re,J[Oe]))return!0;return!1}function lt(J,re){for(var oe=-1,Oe=J==null?0:J.length,ke=Array(Oe);++oe<Oe;)ke[oe]=re(J[oe],oe,J);return ke}function Rn(J,re){for(var oe=-1,Oe=re.length,ke=J.length;++oe<Oe;)J[ke+oe]=re[oe];return J}function Ci(J,re,oe,Oe){var ke=-1,et=J==null?0:J.length;for(Oe&&et&&(oe=J[++ke]);++ke<et;)oe=re(oe,J[ke],ke,J);return oe}function _p(J,re,oe,Oe){var ke=J==null?0:J.length;for(Oe&&ke&&(oe=J[--ke]);ke--;)oe=re(oe,J[ke],ke,J);return oe}function Ei(J,re){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe;)if(re(J[oe],oe,J))return!0;return!1}var Mp=Oi("length");function xp(J){return J.split("")}function Lp(J){return J.match(Ee)||[]}function Jr(J,re,oe){var Oe;return oe(J,function(ke,et,St){if(re(ke,et,St))return Oe=et,!1}),Oe}function Ro(J,re,oe,Oe){for(var ke=J.length,et=oe+(Oe?1:-1);Oe?et--:++et<ke;)if(re(J[et],et,J))return et;return-1}function Zn(J,re,oe){return re===re?qp(J,re,oe):Ro(J,Qr,oe)}function Ip(J,re,oe,Oe){for(var ke=oe-1,et=J.length;++ke<et;)if(Oe(J[ke],re))return ke;return-1}function Qr(J){return J!==J}function ea(J,re){var oe=J==null?0:J.length;return oe?Ti(J,re)/oe:ae}function Oi(J){return function(re){return re==null?o:re[J]}}function Pi(J){return function(re){return J==null?o:J[re]}}function ta(J,re,oe,Oe,ke){return ke(J,function(et,St,at){oe=Oe?(Oe=!1,et):re(oe,et,St,at)}),oe}function Fp(J,re){var oe=J.length;for(J.sort(re);oe--;)J[oe]=J[oe].value;return J}function Ti(J,re){for(var oe,Oe=-1,ke=J.length;++Oe<ke;){var et=re(J[Oe]);et!==o&&(oe=oe===o?et:oe+et)}return oe}function Ai(J,re){for(var oe=-1,Oe=Array(J);++oe<J;)Oe[oe]=re(oe);return Oe}function jp(J,re){return lt(re,function(oe){return[oe,J[oe]]})}function na(J){return J&&J.slice(0,aa(J)+1).replace(X,"")}function $t(J){return function(re){return J(re)}}function Ni(J,re){return lt(re,function(oe){return J[oe]})}function co(J,re){return J.has(re)}function oa(J,re){for(var oe=-1,Oe=J.length;++oe<Oe&&Zn(re,J[oe],0)>-1;);return oe}function ia(J,re){for(var oe=J.length;oe--&&Zn(re,J[oe],0)>-1;);return oe}function kp(J,re){for(var oe=J.length,Oe=0;oe--;)J[oe]===re&&++Oe;return Oe}var wp=Pi(Cp),Up=Pi(Ep);function Bp(J){return"\\"+Pp[J]}function zp(J,re){return J==null?o:J[re]}function Xn(J){return yp.test(J)}function Wp(J){return vp.test(J)}function Gp(J){for(var re,oe=[];!(re=J.next()).done;)oe.push(re.value);return oe}function Di(J){var re=-1,oe=Array(J.size);return J.forEach(function(Oe,ke){oe[++re]=[ke,Oe]}),oe}function ra(J,re){return function(oe){return J(re(oe))}}function _n(J,re){for(var oe=-1,Oe=J.length,ke=0,et=[];++oe<Oe;){var St=J[oe];(St===re||St===i)&&(J[oe]=i,et[ke++]=oe)}return et}function _o(J){var re=-1,oe=Array(J.size);return J.forEach(function(Oe){oe[++re]=Oe}),oe}function $p(J){var re=-1,oe=Array(J.size);return J.forEach(function(Oe){oe[++re]=[Oe,Oe]}),oe}function qp(J,re,oe){for(var Oe=oe-1,ke=J.length;++Oe<ke;)if(J[Oe]===re)return Oe;return-1}function Vp(J,re,oe){for(var Oe=oe+1;Oe--;)if(J[Oe]===re)return Oe;return Oe}function Jn(J){return Xn(J)?Kp(J):Mp(J)}function an(J){return Xn(J)?Yp(J):xp(J)}function aa(J){for(var re=J.length;re--&&ee.test(J.charAt(re)););return re}var Hp=Pi(Op);function Kp(J){for(var re=vi.lastIndex=0;vi.test(J);)++re;return re}function Yp(J){return J.match(vi)||[]}function Zp(J){return J.match(hp)||[]}var Xp=function J(re){re=re==null?Pt:Mo.defaults(Pt.Object(),re,Mo.pick(Pt,Sp));var oe=re.Array,Oe=re.Date,ke=re.Error,et=re.Function,St=re.Math,at=re.Object,Ri=re.RegExp,Jp=re.String,Jt=re.TypeError,xo=oe.prototype,Qp=et.prototype,Qn=at.prototype,Lo=re["__core-js_shared__"],Io=Qp.toString,nt=Qn.hasOwnProperty,el=0,sa=function(){var e=/[^.]+$/.exec(Lo&&Lo.keys&&Lo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fo=Qn.toString,tl=Io.call(at),nl=Pt._,ol=Ri("^"+Io.call(nt).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jo=$r?re.Buffer:o,Mn=re.Symbol,ko=re.Uint8Array,pa=jo?jo.allocUnsafe:o,wo=ra(at.getPrototypeOf,at),la=at.create,ca=Qn.propertyIsEnumerable,Uo=xo.splice,da=Mn?Mn.isConcatSpreadable:o,uo=Mn?Mn.iterator:o,Bn=Mn?Mn.toStringTag:o,Bo=function(){try{var e=qn(at,"defineProperty");return e({},"",{}),e}catch(t){}}(),il=re.clearTimeout!==Pt.clearTimeout&&re.clearTimeout,rl=Oe&&Oe.now!==Pt.Date.now&&Oe.now,al=re.setTimeout!==Pt.setTimeout&&re.setTimeout,zo=St.ceil,Wo=St.floor,_i=at.getOwnPropertySymbols,sl=jo?jo.isBuffer:o,ua=re.isFinite,pl=xo.join,ll=ra(at.keys,at),bt=St.max,Rt=St.min,cl=Oe.now,dl=re.parseInt,fa=St.random,ul=xo.reverse,Mi=qn(re,"DataView"),fo=qn(re,"Map"),xi=qn(re,"Promise"),eo=qn(re,"Set"),go=qn(re,"WeakMap"),mo=qn(at,"create"),Go=go&&new go,to={},fl=Vn(Mi),gl=Vn(fo),ml=Vn(xi),hl=Vn(eo),yl=Vn(go),$o=Mn?Mn.prototype:o,ho=$o?$o.valueOf:o,ga=$o?$o.toString:o;function I(e){if(dt(e)&&!we(e)&&!(e instanceof He)){if(e instanceof Qt)return e;if(nt.call(e,"__wrapped__"))return ms(e)}return new Qt(e)}var no=function(){function e(){}return function(t){if(!ct(t))return{};if(la)return la(t);e.prototype=t;var s=new e;return e.prototype=o,s}}();function qo(){}function Qt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}I.templateSettings={escape:Nn,evaluate:po,interpolate:Kn,variable:"",imports:{_:I}},I.prototype=qo.prototype,I.prototype.constructor=I,Qt.prototype=no(qo.prototype),Qt.prototype.constructor=Qt;function He(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function vl(){var e=new He(this.__wrapped__);return e.__actions__=jt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=jt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=jt(this.__views__),e}function Sl(){if(this.__filtered__){var e=new He(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function bl(){var e=this.__wrapped__.value(),t=this.__dir__,s=we(e),C=t<0,D=s?e.length:0,k=xc(0,D,this.__views__),G=k.start,K=k.end,Q=K-G,le=C?K:G-1,ce=this.__iteratees__,fe=ce.length,Se=0,Ae=Rt(Q,this.__takeCount__);if(!s||!C&&D==Q&&Ae==Q)return wa(e,this.__actions__);var Me=[];e:for(;Q--&&Se<Ae;){le+=t;for(var ze=-1,xe=e[le];++ze<fe;){var qe=ce[ze],Ye=qe.iteratee,Ht=qe.type,Lt=Ye(xe);if(Ht==q)xe=Lt;else if(!Lt){if(Ht==B)continue e;break e}}Me[Se++]=xe}return Me}He.prototype=no(qo.prototype),He.prototype.constructor=He;function zn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Cl(){this.__data__=mo?mo(null):{},this.size=0}function El(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Ol(e){var t=this.__data__;if(mo){var s=t[e];return s===c?o:s}return nt.call(t,e)?t[e]:o}function Pl(e){var t=this.__data__;return mo?t[e]!==o:nt.call(t,e)}function Tl(e,t){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=mo&&t===o?c:t,this}zn.prototype.clear=Cl,zn.prototype.delete=El,zn.prototype.get=Ol,zn.prototype.has=Pl,zn.prototype.set=Tl;function hn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Al(){this.__data__=[],this.size=0}function Nl(e){var t=this.__data__,s=Vo(t,e);if(s<0)return!1;var C=t.length-1;return s==C?t.pop():Uo.call(t,s,1),--this.size,!0}function Dl(e){var t=this.__data__,s=Vo(t,e);return s<0?o:t[s][1]}function Rl(e){return Vo(this.__data__,e)>-1}function _l(e,t){var s=this.__data__,C=Vo(s,e);return C<0?(++this.size,s.push([e,t])):s[C][1]=t,this}hn.prototype.clear=Al,hn.prototype.delete=Nl,hn.prototype.get=Dl,hn.prototype.has=Rl,hn.prototype.set=_l;function yn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Ml(){this.size=0,this.__data__={hash:new zn,map:new(fo||hn),string:new zn}}function xl(e){var t=ii(this,e).delete(e);return this.size-=t?1:0,t}function Ll(e){return ii(this,e).get(e)}function Il(e){return ii(this,e).has(e)}function Fl(e,t){var s=ii(this,e),C=s.size;return s.set(e,t),this.size+=s.size==C?0:1,this}yn.prototype.clear=Ml,yn.prototype.delete=xl,yn.prototype.get=Ll,yn.prototype.has=Il,yn.prototype.set=Fl;function Wn(e){var t=-1,s=e==null?0:e.length;for(this.__data__=new yn;++t<s;)this.add(e[t])}function jl(e){return this.__data__.set(e,c),this}function kl(e){return this.__data__.has(e)}Wn.prototype.add=Wn.prototype.push=jl,Wn.prototype.has=kl;function sn(e){var t=this.__data__=new hn(e);this.size=t.size}function wl(){this.__data__=new hn,this.size=0}function Ul(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}function Bl(e){return this.__data__.get(e)}function zl(e){return this.__data__.has(e)}function Wl(e,t){var s=this.__data__;if(s instanceof hn){var C=s.__data__;if(!fo||C.length<p-1)return C.push([e,t]),this.size=++s.size,this;s=this.__data__=new yn(C)}return s.set(e,t),this.size=s.size,this}sn.prototype.clear=wl,sn.prototype.delete=Ul,sn.prototype.get=Bl,sn.prototype.has=zl,sn.prototype.set=Wl;function ma(e,t){var s=we(e),C=!s&&Hn(e),D=!s&&!C&&jn(e),k=!s&&!C&&!D&&ao(e),G=s||C||D||k,K=G?Ai(e.length,Jp):[],Q=K.length;for(var le in e)(t||nt.call(e,le))&&!(G&&(le=="length"||D&&(le=="offset"||le=="parent")||k&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||Cn(le,Q)))&&K.push(le);return K}function ha(e){var t=e.length;return t?e[Gi(0,t-1)]:o}function Gl(e,t){return ri(jt(e),Gn(t,0,e.length))}function $l(e){return ri(jt(e))}function Li(e,t,s){(s!==o&&!pn(e[t],s)||s===o&&!(t in e))&&vn(e,t,s)}function yo(e,t,s){var C=e[t];(!(nt.call(e,t)&&pn(C,s))||s===o&&!(t in e))&&vn(e,t,s)}function Vo(e,t){for(var s=e.length;s--;)if(pn(e[s][0],t))return s;return-1}function ql(e,t,s,C){return xn(e,function(D,k,G){t(C,D,s(D),G)}),C}function ya(e,t){return e&&un(t,Ot(t),e)}function Vl(e,t){return e&&un(t,wt(t),e)}function vn(e,t,s){t=="__proto__"&&Bo?Bo(e,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[t]=s}function Ii(e,t){for(var s=-1,C=t.length,D=oe(C),k=e==null;++s<C;)D[s]=k?o:gr(e,t[s]);return D}function Gn(e,t,s){return e===e&&(s!==o&&(e=e<=s?e:s),t!==o&&(e=e>=t?e:t)),e}function en(e,t,s,C,D,k){var G,K=t&h,Q=t&u,le=t&f;if(s&&(G=D?s(e,C,D,k):s(e)),G!==o)return G;if(!ct(e))return e;var ce=we(e);if(ce){if(G=Ic(e),!K)return jt(e,G)}else{var fe=_t(e),Se=fe==Ct||fe==Ue;if(jn(e))return za(e,K);if(fe==pe||fe==Fe||Se&&!D){if(G=Q||Se?{}:as(e),!K)return Q?Oc(e,Vl(G,e)):Ec(e,ya(G,e))}else{if(!st[fe])return D?e:{};G=Fc(e,fe,K)}}k||(k=new sn);var Ae=k.get(e);if(Ae)return Ae;k.set(e,G),Fs(e)?e.forEach(function(xe){G.add(en(xe,t,s,xe,e,k))}):Ls(e)&&e.forEach(function(xe,qe){G.set(qe,en(xe,t,s,qe,e,k))});var Me=le?Q?er:Qi:Q?wt:Ot,ze=ce?o:Me(e);return Xt(ze||e,function(xe,qe){ze&&(qe=xe,xe=e[qe]),yo(G,qe,en(xe,t,s,qe,e,k))}),G}function Hl(e){var t=Ot(e);return function(s){return va(s,e,t)}}function va(e,t,s){var C=s.length;if(e==null)return!C;for(e=at(e);C--;){var D=s[C],k=t[D],G=e[D];if(G===o&&!(D in e)||!k(G))return!1}return!0}function Sa(e,t,s){if(typeof e!="function")throw new Jt(l);return Po(function(){e.apply(o,s)},t)}function vo(e,t,s,C){var D=-1,k=Do,G=!0,K=e.length,Q=[],le=t.length;if(!K)return Q;s&&(t=lt(t,$t(s))),C?(k=bi,G=!1):t.length>=p&&(k=co,G=!1,t=new Wn(t));e:for(;++D<K;){var ce=e[D],fe=s==null?ce:s(ce);if(ce=C||ce!==0?ce:0,G&&fe===fe){for(var Se=le;Se--;)if(t[Se]===fe)continue e;Q.push(ce)}else k(t,fe,C)||Q.push(ce)}return Q}var xn=Va(dn),ba=Va(ji,!0);function Kl(e,t){var s=!0;return xn(e,function(C,D,k){return s=!!t(C,D,k),s}),s}function Ho(e,t,s){for(var C=-1,D=e.length;++C<D;){var k=e[C],G=t(k);if(G!=null&&(K===o?G===G&&!Vt(G):s(G,K)))var K=G,Q=k}return Q}function Yl(e,t,s,C){var D=e.length;for(s=Be(s),s<0&&(s=-s>D?0:D+s),C=C===o||C>D?D:Be(C),C<0&&(C+=D),C=s>C?0:ks(C);s<C;)e[s++]=t;return e}function Ca(e,t){var s=[];return xn(e,function(C,D,k){t(C,D,k)&&s.push(C)}),s}function Tt(e,t,s,C,D){var k=-1,G=e.length;for(s||(s=kc),D||(D=[]);++k<G;){var K=e[k];t>0&&s(K)?t>1?Tt(K,t-1,s,C,D):Rn(D,K):C||(D[D.length]=K)}return D}var Fi=Ha(),Ea=Ha(!0);function dn(e,t){return e&&Fi(e,t,Ot)}function ji(e,t){return e&&Ea(e,t,Ot)}function Ko(e,t){return Dn(t,function(s){return En(e[s])})}function $n(e,t){t=In(t,e);for(var s=0,C=t.length;e!=null&&s<C;)e=e[fn(t[s++])];return s&&s==C?e:o}function Oa(e,t,s){var C=t(e);return we(e)?C:Rn(C,s(e))}function Mt(e){return e==null?e===o?Ze:je:Bn&&Bn in at(e)?Mc(e):$c(e)}function ki(e,t){return e>t}function Zl(e,t){return e!=null&&nt.call(e,t)}function Xl(e,t){return e!=null&&t in at(e)}function Jl(e,t,s){return e>=Rt(t,s)&&e<bt(t,s)}function wi(e,t,s){for(var C=s?bi:Do,D=e[0].length,k=e.length,G=k,K=oe(k),Q=1/0,le=[];G--;){var ce=e[G];G&&t&&(ce=lt(ce,$t(t))),Q=Rt(ce.length,Q),K[G]=!s&&(t||D>=120&&ce.length>=120)?new Wn(G&&ce):o}ce=e[0];var fe=-1,Se=K[0];e:for(;++fe<D&&le.length<Q;){var Ae=ce[fe],Me=t?t(Ae):Ae;if(Ae=s||Ae!==0?Ae:0,!(Se?co(Se,Me):C(le,Me,s))){for(G=k;--G;){var ze=K[G];if(!(ze?co(ze,Me):C(e[G],Me,s)))continue e}Se&&Se.push(Me),le.push(Ae)}}return le}function Ql(e,t,s,C){return dn(e,function(D,k,G){t(C,s(D),k,G)}),C}function So(e,t,s){t=In(t,e),e=cs(e,t);var C=e==null?e:e[fn(nn(t))];return C==null?o:Gt(C,e,s)}function Pa(e){return dt(e)&&Mt(e)==Fe}function ec(e){return dt(e)&&Mt(e)==Pe}function tc(e){return dt(e)&&Mt(e)==ht}function bo(e,t,s,C,D){return e===t?!0:e==null||t==null||!dt(e)&&!dt(t)?e!==e&&t!==t:nc(e,t,s,C,bo,D)}function nc(e,t,s,C,D,k){var G=we(e),K=we(t),Q=G?it:_t(e),le=K?it:_t(t);Q=Q==Fe?pe:Q,le=le==Fe?pe:le;var ce=Q==pe,fe=le==pe,Se=Q==le;if(Se&&jn(e)){if(!jn(t))return!1;G=!0,ce=!1}if(Se&&!ce)return k||(k=new sn),G||ao(e)?os(e,t,s,C,D,k):Rc(e,t,Q,s,C,D,k);if(!(s&S)){var Ae=ce&&nt.call(e,"__wrapped__"),Me=fe&&nt.call(t,"__wrapped__");if(Ae||Me){var ze=Ae?e.value():e,xe=Me?t.value():t;return k||(k=new sn),D(ze,xe,s,C,k)}}return Se?(k||(k=new sn),_c(e,t,s,C,D,k)):!1}function oc(e){return dt(e)&&_t(e)==We}function Ui(e,t,s,C){var D=s.length,k=D,G=!C;if(e==null)return!k;for(e=at(e);D--;){var K=s[D];if(G&&K[2]?K[1]!==e[K[0]]:!(K[0]in e))return!1}for(;++D<k;){K=s[D];var Q=K[0],le=e[Q],ce=K[1];if(G&&K[2]){if(le===o&&!(Q in e))return!1}else{var fe=new sn;if(C)var Se=C(le,ce,Q,e,t,fe);if(!(Se===o?bo(ce,le,S|y,C,fe):Se))return!1}}return!0}function Ta(e){if(!ct(e)||Uc(e))return!1;var t=En(e)?ol:Dt;return t.test(Vn(e))}function ic(e){return dt(e)&&Mt(e)==ie}function rc(e){return dt(e)&&_t(e)==ye}function ac(e){return dt(e)&&di(e.length)&&!!pt[Mt(e)]}function Aa(e){return typeof e=="function"?e:e==null?Ut:typeof e=="object"?we(e)?Ra(e[0],e[1]):Da(e):Ks(e)}function Bi(e){if(!Oo(e))return ll(e);var t=[];for(var s in at(e))nt.call(e,s)&&s!="constructor"&&t.push(s);return t}function sc(e){if(!ct(e))return Gc(e);var t=Oo(e),s=[];for(var C in e)C=="constructor"&&(t||!nt.call(e,C))||s.push(C);return s}function zi(e,t){return e<t}function Na(e,t){var s=-1,C=kt(e)?oe(e.length):[];return xn(e,function(D,k,G){C[++s]=t(D,k,G)}),C}function Da(e){var t=nr(e);return t.length==1&&t[0][2]?ps(t[0][0],t[0][1]):function(s){return s===e||Ui(s,e,t)}}function Ra(e,t){return ir(e)&&ss(t)?ps(fn(e),t):function(s){var C=gr(s,e);return C===o&&C===t?mr(s,e):bo(t,C,S|y)}}function Yo(e,t,s,C,D){e!==t&&Fi(t,function(k,G){if(D||(D=new sn),ct(k))pc(e,t,G,s,Yo,C,D);else{var K=C?C(ar(e,G),k,G+"",e,t,D):o;K===o&&(K=k),Li(e,G,K)}},wt)}function pc(e,t,s,C,D,k,G){var K=ar(e,s),Q=ar(t,s),le=G.get(Q);if(le){Li(e,s,le);return}var ce=k?k(K,Q,s+"",e,t,G):o,fe=ce===o;if(fe){var Se=we(Q),Ae=!Se&&jn(Q),Me=!Se&&!Ae&&ao(Q);ce=Q,Se||Ae||Me?we(K)?ce=K:ft(K)?ce=jt(K):Ae?(fe=!1,ce=za(Q,!0)):Me?(fe=!1,ce=Wa(Q,!0)):ce=[]:To(Q)||Hn(Q)?(ce=K,Hn(K)?ce=ws(K):(!ct(K)||En(K))&&(ce=as(Q))):fe=!1}fe&&(G.set(Q,ce),D(ce,Q,C,k,G),G.delete(Q)),Li(e,s,ce)}function _a(e,t){var s=e.length;if(!!s)return t+=t<0?s:0,Cn(t,s)?e[t]:o}function Ma(e,t,s){t.length?t=lt(t,function(k){return we(k)?function(G){return $n(G,k.length===1?k[0]:k)}:k}):t=[Ut];var C=-1;t=lt(t,$t(_e()));var D=Na(e,function(k,G,K){var Q=lt(t,function(le){return le(k)});return{criteria:Q,index:++C,value:k}});return Fp(D,function(k,G){return Cc(k,G,s)})}function lc(e,t){return xa(e,t,function(s,C){return mr(e,C)})}function xa(e,t,s){for(var C=-1,D=t.length,k={};++C<D;){var G=t[C],K=$n(e,G);s(K,G)&&Co(k,In(G,e),K)}return k}function cc(e){return function(t){return $n(t,e)}}function Wi(e,t,s,C){var D=C?Ip:Zn,k=-1,G=t.length,K=e;for(e===t&&(t=jt(t)),s&&(K=lt(e,$t(s)));++k<G;)for(var Q=0,le=t[k],ce=s?s(le):le;(Q=D(K,ce,Q,C))>-1;)K!==e&&Uo.call(K,Q,1),Uo.call(e,Q,1);return e}function La(e,t){for(var s=e?t.length:0,C=s-1;s--;){var D=t[s];if(s==C||D!==k){var k=D;Cn(D)?Uo.call(e,D,1):Vi(e,D)}}return e}function Gi(e,t){return e+Wo(fa()*(t-e+1))}function dc(e,t,s,C){for(var D=-1,k=bt(zo((t-e)/(s||1)),0),G=oe(k);k--;)G[C?k:++D]=e,e+=s;return G}function $i(e,t){var s="";if(!e||t<1||t>V)return s;do t%2&&(s+=e),t=Wo(t/2),t&&(e+=e);while(t);return s}function Ge(e,t){return sr(ls(e,t,Ut),e+"")}function uc(e){return ha(so(e))}function fc(e,t){var s=so(e);return ri(s,Gn(t,0,s.length))}function Co(e,t,s,C){if(!ct(e))return e;t=In(t,e);for(var D=-1,k=t.length,G=k-1,K=e;K!=null&&++D<k;){var Q=fn(t[D]),le=s;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return e;if(D!=G){var ce=K[Q];le=C?C(ce,Q,K):o,le===o&&(le=ct(ce)?ce:Cn(t[D+1])?[]:{})}yo(K,Q,le),K=K[Q]}return e}var Ia=Go?function(e,t){return Go.set(e,t),e}:Ut,gc=Bo?function(e,t){return Bo(e,"toString",{configurable:!0,enumerable:!1,value:yr(t),writable:!0})}:Ut;function mc(e){return ri(so(e))}function tn(e,t,s){var C=-1,D=e.length;t<0&&(t=-t>D?0:D+t),s=s>D?D:s,s<0&&(s+=D),D=t>s?0:s-t>>>0,t>>>=0;for(var k=oe(D);++C<D;)k[C]=e[C+t];return k}function hc(e,t){var s;return xn(e,function(C,D,k){return s=t(C,D,k),!s}),!!s}function Zo(e,t,s){var C=0,D=e==null?C:e.length;if(typeof t=="number"&&t===t&&D<=ge){for(;C<D;){var k=C+D>>>1,G=e[k];G!==null&&!Vt(G)&&(s?G<=t:G<t)?C=k+1:D=k}return D}return qi(e,t,Ut,s)}function qi(e,t,s,C){var D=0,k=e==null?0:e.length;if(k===0)return 0;t=s(t);for(var G=t!==t,K=t===null,Q=Vt(t),le=t===o;D<k;){var ce=Wo((D+k)/2),fe=s(e[ce]),Se=fe!==o,Ae=fe===null,Me=fe===fe,ze=Vt(fe);if(G)var xe=C||Me;else le?xe=Me&&(C||Se):K?xe=Me&&Se&&(C||!Ae):Q?xe=Me&&Se&&!Ae&&(C||!ze):Ae||ze?xe=!1:xe=C?fe<=t:fe<t;xe?D=ce+1:k=ce}return Rt(k,te)}function Fa(e,t){for(var s=-1,C=e.length,D=0,k=[];++s<C;){var G=e[s],K=t?t(G):G;if(!s||!pn(K,Q)){var Q=K;k[D++]=G===0?0:G}}return k}function ja(e){return typeof e=="number"?e:Vt(e)?ae:+e}function qt(e){if(typeof e=="string")return e;if(we(e))return lt(e,qt)+"";if(Vt(e))return ga?ga.call(e):"";var t=e+"";return t=="0"&&1/e==-H?"-0":t}function Ln(e,t,s){var C=-1,D=Do,k=e.length,G=!0,K=[],Q=K;if(s)G=!1,D=bi;else if(k>=p){var le=t?null:Nc(e);if(le)return _o(le);G=!1,D=co,Q=new Wn}else Q=t?[]:K;e:for(;++C<k;){var ce=e[C],fe=t?t(ce):ce;if(ce=s||ce!==0?ce:0,G&&fe===fe){for(var Se=Q.length;Se--;)if(Q[Se]===fe)continue e;t&&Q.push(fe),K.push(ce)}else D(Q,fe,s)||(Q!==K&&Q.push(fe),K.push(ce))}return K}function Vi(e,t){return t=In(t,e),e=cs(e,t),e==null||delete e[fn(nn(t))]}function ka(e,t,s,C){return Co(e,t,s($n(e,t)),C)}function Xo(e,t,s,C){for(var D=e.length,k=C?D:-1;(C?k--:++k<D)&&t(e[k],k,e););return s?tn(e,C?0:k,C?k+1:D):tn(e,C?k+1:0,C?D:k)}function wa(e,t){var s=e;return s instanceof He&&(s=s.value()),Ci(t,function(C,D){return D.func.apply(D.thisArg,Rn([C],D.args))},s)}function Hi(e,t,s){var C=e.length;if(C<2)return C?Ln(e[0]):[];for(var D=-1,k=oe(C);++D<C;)for(var G=e[D],K=-1;++K<C;)K!=D&&(k[D]=vo(k[D]||G,e[K],t,s));return Ln(Tt(k,1),t,s)}function Ua(e,t,s){for(var C=-1,D=e.length,k=t.length,G={};++C<D;){var K=C<k?t[C]:o;s(G,e[C],K)}return G}function Ki(e){return ft(e)?e:[]}function Yi(e){return typeof e=="function"?e:Ut}function In(e,t){return we(e)?e:ir(e,t)?[e]:gs(tt(e))}var yc=Ge;function Fn(e,t,s){var C=e.length;return s=s===o?C:s,!t&&s>=C?e:tn(e,t,s)}var Ba=il||function(e){return Pt.clearTimeout(e)};function za(e,t){if(t)return e.slice();var s=e.length,C=pa?pa(s):new e.constructor(s);return e.copy(C),C}function Zi(e){var t=new e.constructor(e.byteLength);return new ko(t).set(new ko(e)),t}function vc(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function Sc(e){var t=new e.constructor(e.source,ve.exec(e));return t.lastIndex=e.lastIndex,t}function bc(e){return ho?at(ho.call(e)):{}}function Wa(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function Ga(e,t){if(e!==t){var s=e!==o,C=e===null,D=e===e,k=Vt(e),G=t!==o,K=t===null,Q=t===t,le=Vt(t);if(!K&&!le&&!k&&e>t||k&&G&&Q&&!K&&!le||C&&G&&Q||!s&&Q||!D)return 1;if(!C&&!k&&!le&&e<t||le&&s&&D&&!C&&!k||K&&s&&D||!G&&D||!Q)return-1}return 0}function Cc(e,t,s){for(var C=-1,D=e.criteria,k=t.criteria,G=D.length,K=s.length;++C<G;){var Q=Ga(D[C],k[C]);if(Q){if(C>=K)return Q;var le=s[C];return Q*(le=="desc"?-1:1)}}return e.index-t.index}function $a(e,t,s,C){for(var D=-1,k=e.length,G=s.length,K=-1,Q=t.length,le=bt(k-G,0),ce=oe(Q+le),fe=!C;++K<Q;)ce[K]=t[K];for(;++D<G;)(fe||D<k)&&(ce[s[D]]=e[D]);for(;le--;)ce[K++]=e[D++];return ce}function qa(e,t,s,C){for(var D=-1,k=e.length,G=-1,K=s.length,Q=-1,le=t.length,ce=bt(k-K,0),fe=oe(ce+le),Se=!C;++D<ce;)fe[D]=e[D];for(var Ae=D;++Q<le;)fe[Ae+Q]=t[Q];for(;++G<K;)(Se||D<k)&&(fe[Ae+s[G]]=e[D++]);return fe}function jt(e,t){var s=-1,C=e.length;for(t||(t=oe(C));++s<C;)t[s]=e[s];return t}function un(e,t,s,C){var D=!s;s||(s={});for(var k=-1,G=t.length;++k<G;){var K=t[k],Q=C?C(s[K],e[K],K,s,e):o;Q===o&&(Q=e[K]),D?vn(s,K,Q):yo(s,K,Q)}return s}function Ec(e,t){return un(e,or(e),t)}function Oc(e,t){return un(e,is(e),t)}function Jo(e,t){return function(s,C){var D=we(s)?Dp:ql,k=t?t():{};return D(s,e,_e(C,2),k)}}function oo(e){return Ge(function(t,s){var C=-1,D=s.length,k=D>1?s[D-1]:o,G=D>2?s[2]:o;for(k=e.length>3&&typeof k=="function"?(D--,k):o,G&&xt(s[0],s[1],G)&&(k=D<3?o:k,D=1),t=at(t);++C<D;){var K=s[C];K&&e(t,K,C,k)}return t})}function Va(e,t){return function(s,C){if(s==null)return s;if(!kt(s))return e(s,C);for(var D=s.length,k=t?D:-1,G=at(s);(t?k--:++k<D)&&C(G[k],k,G)!==!1;);return s}}function Ha(e){return function(t,s,C){for(var D=-1,k=at(t),G=C(t),K=G.length;K--;){var Q=G[e?K:++D];if(s(k[Q],Q,k)===!1)break}return t}}function Pc(e,t,s){var C=t&b,D=Eo(e);function k(){var G=this&&this!==Pt&&this instanceof k?D:e;return G.apply(C?s:this,arguments)}return k}function Ka(e){return function(t){t=tt(t);var s=Xn(t)?an(t):o,C=s?s[0]:t.charAt(0),D=s?Fn(s,1).join(""):t.slice(1);return C[e]()+D}}function io(e){return function(t){return Ci(Vs(qs(t).replace(gp,"")),e,"")}}function Eo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=no(e.prototype),C=e.apply(s,t);return ct(C)?C:s}}function Tc(e,t,s){var C=Eo(e);function D(){for(var k=arguments.length,G=oe(k),K=k,Q=ro(D);K--;)G[K]=arguments[K];var le=k<3&&G[0]!==Q&&G[k-1]!==Q?[]:_n(G,Q);if(k-=le.length,k<s)return Qa(e,t,Qo,D.placeholder,o,G,le,o,o,s-k);var ce=this&&this!==Pt&&this instanceof D?C:e;return Gt(ce,this,G)}return D}function Ya(e){return function(t,s,C){var D=at(t);if(!kt(t)){var k=_e(s,3);t=Ot(t),s=function(K){return k(D[K],K,D)}}var G=e(t,s,C);return G>-1?D[k?t[G]:G]:o}}function Za(e){return bn(function(t){var s=t.length,C=s,D=Qt.prototype.thru;for(e&&t.reverse();C--;){var k=t[C];if(typeof k!="function")throw new Jt(l);if(D&&!G&&oi(k)=="wrapper")var G=new Qt([],!0)}for(C=G?C:s;++C<s;){k=t[C];var K=oi(k),Q=K=="wrapper"?tr(k):o;Q&&rr(Q[0])&&Q[1]==(M|N|A|x)&&!Q[4].length&&Q[9]==1?G=G[oi(Q[0])].apply(G,Q[3]):G=k.length==1&&rr(k)?G[K]():G.thru(k)}return function(){var le=arguments,ce=le[0];if(G&&le.length==1&&we(ce))return G.plant(ce).value();for(var fe=0,Se=s?t[fe].apply(this,le):ce;++fe<s;)Se=t[fe].call(this,Se);return Se}})}function Qo(e,t,s,C,D,k,G,K,Q,le){var ce=t&M,fe=t&b,Se=t&P,Ae=t&(N|T),Me=t&_,ze=Se?o:Eo(e);function xe(){for(var qe=arguments.length,Ye=oe(qe),Ht=qe;Ht--;)Ye[Ht]=arguments[Ht];if(Ae)var Lt=ro(xe),Kt=kp(Ye,Lt);if(C&&(Ye=$a(Ye,C,D,Ae)),k&&(Ye=qa(Ye,k,G,Ae)),qe-=Kt,Ae&&qe<le){var gt=_n(Ye,Lt);return Qa(e,t,Qo,xe.placeholder,s,Ye,gt,K,Q,le-qe)}var ln=fe?s:this,Pn=Se?ln[e]:e;return qe=Ye.length,K?Ye=qc(Ye,K):Me&&qe>1&&Ye.reverse(),ce&&Q<qe&&(Ye.length=Q),this&&this!==Pt&&this instanceof xe&&(Pn=ze||Eo(Pn)),Pn.apply(ln,Ye)}return xe}function Xa(e,t){return function(s,C){return Ql(s,e,t(C),{})}}function ei(e,t){return function(s,C){var D;if(s===o&&C===o)return t;if(s!==o&&(D=s),C!==o){if(D===o)return C;typeof s=="string"||typeof C=="string"?(s=qt(s),C=qt(C)):(s=ja(s),C=ja(C)),D=e(s,C)}return D}}function Xi(e){return bn(function(t){return t=lt(t,$t(_e())),Ge(function(s){var C=this;return e(t,function(D){return Gt(D,C,s)})})})}function ti(e,t){t=t===o?" ":qt(t);var s=t.length;if(s<2)return s?$i(t,e):t;var C=$i(t,zo(e/Jn(t)));return Xn(t)?Fn(an(C),0,e).join(""):C.slice(0,e)}function Ac(e,t,s,C){var D=t&b,k=Eo(e);function G(){for(var K=-1,Q=arguments.length,le=-1,ce=C.length,fe=oe(ce+Q),Se=this&&this!==Pt&&this instanceof G?k:e;++le<ce;)fe[le]=C[le];for(;Q--;)fe[le++]=arguments[++K];return Gt(Se,D?s:this,fe)}return G}function Ja(e){return function(t,s,C){return C&&typeof C!="number"&&xt(t,s,C)&&(s=C=o),t=On(t),s===o?(s=t,t=0):s=On(s),C=C===o?t<s?1:-1:On(C),dc(t,s,C,e)}}function ni(e){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=on(t),s=on(s)),e(t,s)}}function Qa(e,t,s,C,D,k,G,K,Q,le){var ce=t&N,fe=ce?G:o,Se=ce?o:G,Ae=ce?k:o,Me=ce?o:k;t|=ce?A:R,t&=~(ce?R:A),t&E||(t&=~(b|P));var ze=[e,t,D,Ae,fe,Me,Se,K,Q,le],xe=s.apply(o,ze);return rr(e)&&ds(xe,ze),xe.placeholder=C,us(xe,e,t)}function Ji(e){var t=St[e];return function(s,C){if(s=on(s),C=C==null?0:Rt(Be(C),292),C&&ua(s)){var D=(tt(s)+"e").split("e"),k=t(D[0]+"e"+(+D[1]+C));return D=(tt(k)+"e").split("e"),+(D[0]+"e"+(+D[1]-C))}return t(s)}}var Nc=eo&&1/_o(new eo([,-0]))[1]==H?function(e){return new eo(e)}:br;function es(e){return function(t){var s=_t(t);return s==We?Di(t):s==ye?$p(t):jp(t,e(t))}}function Sn(e,t,s,C,D,k,G,K){var Q=t&P;if(!Q&&typeof e!="function")throw new Jt(l);var le=C?C.length:0;if(le||(t&=~(A|R),C=D=o),G=G===o?G:bt(Be(G),0),K=K===o?K:Be(K),le-=D?D.length:0,t&R){var ce=C,fe=D;C=D=o}var Se=Q?o:tr(e),Ae=[e,t,s,C,D,ce,fe,k,G,K];if(Se&&Wc(Ae,Se),e=Ae[0],t=Ae[1],s=Ae[2],C=Ae[3],D=Ae[4],K=Ae[9]=Ae[9]===o?Q?0:e.length:bt(Ae[9]-le,0),!K&&t&(N|T)&&(t&=~(N|T)),!t||t==b)var Me=Pc(e,t,s);else t==N||t==T?Me=Tc(e,t,K):(t==A||t==(b|A))&&!D.length?Me=Ac(e,t,s,C):Me=Qo.apply(o,Ae);var ze=Se?Ia:ds;return us(ze(Me,Ae),e,t)}function ts(e,t,s,C){return e===o||pn(e,Qn[s])&&!nt.call(C,s)?t:e}function ns(e,t,s,C,D,k){return ct(e)&&ct(t)&&(k.set(t,e),Yo(e,t,o,ns,k),k.delete(t)),e}function Dc(e){return To(e)?o:e}function os(e,t,s,C,D,k){var G=s&S,K=e.length,Q=t.length;if(K!=Q&&!(G&&Q>K))return!1;var le=k.get(e),ce=k.get(t);if(le&&ce)return le==t&&ce==e;var fe=-1,Se=!0,Ae=s&y?new Wn:o;for(k.set(e,t),k.set(t,e);++fe<K;){var Me=e[fe],ze=t[fe];if(C)var xe=G?C(ze,Me,fe,t,e,k):C(Me,ze,fe,e,t,k);if(xe!==o){if(xe)continue;Se=!1;break}if(Ae){if(!Ei(t,function(qe,Ye){if(!co(Ae,Ye)&&(Me===qe||D(Me,qe,s,C,k)))return Ae.push(Ye)})){Se=!1;break}}else if(!(Me===ze||D(Me,ze,s,C,k))){Se=!1;break}}return k.delete(e),k.delete(t),Se}function Rc(e,t,s,C,D,k,G){switch(s){case $e:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Pe:return!(e.byteLength!=t.byteLength||!k(new ko(e),new ko(t)));case ut:case ht:case Bt:return pn(+e,+t);case Re:return e.name==t.name&&e.message==t.message;case ie:case he:return e==t+"";case We:var K=Di;case ye:var Q=C&S;if(K||(K=_o),e.size!=t.size&&!Q)return!1;var le=G.get(e);if(le)return le==t;C|=y,G.set(e,t);var ce=os(K(e),K(t),C,D,k,G);return G.delete(e),ce;case be:if(ho)return ho.call(e)==ho.call(t)}return!1}function _c(e,t,s,C,D,k){var G=s&S,K=Qi(e),Q=K.length,le=Qi(t),ce=le.length;if(Q!=ce&&!G)return!1;for(var fe=Q;fe--;){var Se=K[fe];if(!(G?Se in t:nt.call(t,Se)))return!1}var Ae=k.get(e),Me=k.get(t);if(Ae&&Me)return Ae==t&&Me==e;var ze=!0;k.set(e,t),k.set(t,e);for(var xe=G;++fe<Q;){Se=K[fe];var qe=e[Se],Ye=t[Se];if(C)var Ht=G?C(Ye,qe,Se,t,e,k):C(qe,Ye,Se,e,t,k);if(!(Ht===o?qe===Ye||D(qe,Ye,s,C,k):Ht)){ze=!1;break}xe||(xe=Se=="constructor")}if(ze&&!xe){var Lt=e.constructor,Kt=t.constructor;Lt!=Kt&&"constructor"in e&&"constructor"in t&&!(typeof Lt=="function"&&Lt instanceof Lt&&typeof Kt=="function"&&Kt instanceof Kt)&&(ze=!1)}return k.delete(e),k.delete(t),ze}function bn(e){return sr(ls(e,o,vs),e+"")}function Qi(e){return Oa(e,Ot,or)}function er(e){return Oa(e,wt,is)}var tr=Go?function(e){return Go.get(e)}:br;function oi(e){for(var t=e.name+"",s=to[t],C=nt.call(to,t)?s.length:0;C--;){var D=s[C],k=D.func;if(k==null||k==e)return D.name}return t}function ro(e){var t=nt.call(I,"placeholder")?I:e;return t.placeholder}function _e(){var e=I.iteratee||vr;return e=e===vr?Aa:e,arguments.length?e(arguments[0],arguments[1]):e}function ii(e,t){var s=e.__data__;return wc(t)?s[typeof t=="string"?"string":"hash"]:s.map}function nr(e){for(var t=Ot(e),s=t.length;s--;){var C=t[s],D=e[C];t[s]=[C,D,ss(D)]}return t}function qn(e,t){var s=zp(e,t);return Ta(s)?s:o}function Mc(e){var t=nt.call(e,Bn),s=e[Bn];try{e[Bn]=o;var C=!0}catch(k){}var D=Fo.call(e);return C&&(t?e[Bn]=s:delete e[Bn]),D}var or=_i?function(e){return e==null?[]:(e=at(e),Dn(_i(e),function(t){return ca.call(e,t)}))}:Cr,is=_i?function(e){for(var t=[];e;)Rn(t,or(e)),e=wo(e);return t}:Cr,_t=Mt;(Mi&&_t(new Mi(new ArrayBuffer(1)))!=$e||fo&&_t(new fo)!=We||xi&&_t(xi.resolve())!=Ne||eo&&_t(new eo)!=ye||go&&_t(new go)!=Ke)&&(_t=function(e){var t=Mt(e),s=t==pe?e.constructor:o,C=s?Vn(s):"";if(C)switch(C){case fl:return $e;case gl:return We;case ml:return Ne;case hl:return ye;case yl:return Ke}return t});function xc(e,t,s){for(var C=-1,D=s.length;++C<D;){var k=s[C],G=k.size;switch(k.type){case"drop":e+=G;break;case"dropRight":t-=G;break;case"take":t=Rt(t,e+G);break;case"takeRight":e=bt(e,t-G);break}}return{start:e,end:t}}function Lc(e){var t=e.match(ue);return t?t[1].split(me):[]}function rs(e,t,s){t=In(t,e);for(var C=-1,D=t.length,k=!1;++C<D;){var G=fn(t[C]);if(!(k=e!=null&&s(e,G)))break;e=e[G]}return k||++C!=D?k:(D=e==null?0:e.length,!!D&&di(D)&&Cn(G,D)&&(we(e)||Hn(e)))}function Ic(e){var t=e.length,s=new e.constructor(t);return t&&typeof e[0]=="string"&&nt.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function as(e){return typeof e.constructor=="function"&&!Oo(e)?no(wo(e)):{}}function Fc(e,t,s){var C=e.constructor;switch(t){case Pe:return Zi(e);case ut:case ht:return new C(+e);case $e:return vc(e,s);case Qe:case Xe:case zt:case It:case Nt:case Tn:case rn:case Wt:case gn:return Wa(e,s);case We:return new C;case Bt:case he:return new C(e);case ie:return Sc(e);case ye:return new C;case be:return bc(e)}}function jc(e,t){var s=t.length;if(!s)return e;var C=s-1;return t[C]=(s>1?"& ":"")+t[C],t=t.join(s>2?", ":" "),e.replace(se,`{
/* [wrapped with `+t+`] */
`)}function kc(e){return we(e)||Hn(e)||!!(da&&e&&e[da])}function Cn(e,t){var s=typeof e;return t=t==null?V:t,!!t&&(s=="number"||s!="symbol"&&Yt.test(e))&&e>-1&&e%1==0&&e<t}function xt(e,t,s){if(!ct(s))return!1;var C=typeof t;return(C=="number"?kt(s)&&Cn(t,s.length):C=="string"&&t in s)?pn(s[t],e):!1}function ir(e,t){if(we(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||Vt(e)?!0:$.test(e)||!F.test(e)||t!=null&&e in at(t)}function wc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function rr(e){var t=oi(e),s=I[t];if(typeof s!="function"||!(t in He.prototype))return!1;if(e===s)return!0;var C=tr(s);return!!C&&e===C[0]}function Uc(e){return!!sa&&sa in e}var Bc=Lo?En:Er;function Oo(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||Qn;return e===s}function ss(e){return e===e&&!ct(e)}function ps(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==o||e in at(s))}}function zc(e){var t=li(e,function(C){return s.size===m&&s.clear(),C}),s=t.cache;return t}function Wc(e,t){var s=e[1],C=t[1],D=s|C,k=D<(b|P|M),G=C==M&&s==N||C==M&&s==x&&e[7].length<=t[8]||C==(M|x)&&t[7].length<=t[8]&&s==N;if(!(k||G))return e;C&b&&(e[2]=t[2],D|=s&b?0:E);var K=t[3];if(K){var Q=e[3];e[3]=Q?$a(Q,K,t[4]):K,e[4]=Q?_n(e[3],i):t[4]}return K=t[5],K&&(Q=e[5],e[5]=Q?qa(Q,K,t[6]):K,e[6]=Q?_n(e[5],i):t[6]),K=t[7],K&&(e[7]=K),C&M&&(e[8]=e[8]==null?t[8]:Rt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=D,e}function Gc(e){var t=[];if(e!=null)for(var s in at(e))t.push(s);return t}function $c(e){return Fo.call(e)}function ls(e,t,s){return t=bt(t===o?e.length-1:t,0),function(){for(var C=arguments,D=-1,k=bt(C.length-t,0),G=oe(k);++D<k;)G[D]=C[t+D];D=-1;for(var K=oe(t+1);++D<t;)K[D]=C[D];return K[t]=s(G),Gt(e,this,K)}}function cs(e,t){return t.length<2?e:$n(e,tn(t,0,-1))}function qc(e,t){for(var s=e.length,C=Rt(t.length,s),D=jt(e);C--;){var k=t[C];e[C]=Cn(k,s)?D[k]:o}return e}function ar(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var ds=fs(Ia),Po=al||function(e,t){return Pt.setTimeout(e,t)},sr=fs(gc);function us(e,t,s){var C=t+"";return sr(e,jc(C,Vc(Lc(C),s)))}function fs(e){var t=0,s=0;return function(){var C=cl(),D=z-(C-s);if(s=C,D>0){if(++t>=j)return arguments[0]}else t=0;return e.apply(o,arguments)}}function ri(e,t){var s=-1,C=e.length,D=C-1;for(t=t===o?C:t;++s<t;){var k=Gi(s,D),G=e[k];e[k]=e[s],e[s]=G}return e.length=t,e}var gs=zc(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Z,function(s,C,D,k){t.push(D?k.replace(Le,"$1"):C||s)}),t});function fn(e){if(typeof e=="string"||Vt(e))return e;var t=e+"";return t=="0"&&1/e==-H?"-0":t}function Vn(e){if(e!=null){try{return Io.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Vc(e,t){return Xt(Ce,function(s){var C="_."+s[0];t&s[1]&&!Do(e,C)&&e.push(C)}),e.sort()}function ms(e){if(e instanceof He)return e.clone();var t=new Qt(e.__wrapped__,e.__chain__);return t.__actions__=jt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Hc(e,t,s){(s?xt(e,t,s):t===o)?t=1:t=bt(Be(t),0);var C=e==null?0:e.length;if(!C||t<1)return[];for(var D=0,k=0,G=oe(zo(C/t));D<C;)G[k++]=tn(e,D,D+=t);return G}function Kc(e){for(var t=-1,s=e==null?0:e.length,C=0,D=[];++t<s;){var k=e[t];k&&(D[C++]=k)}return D}function Yc(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),s=arguments[0],C=e;C--;)t[C-1]=arguments[C];return Rn(we(s)?jt(s):[s],Tt(t,1))}var Zc=Ge(function(e,t){return ft(e)?vo(e,Tt(t,1,ft,!0)):[]}),Xc=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?vo(e,Tt(t,1,ft,!0),_e(s,2)):[]}),Jc=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?vo(e,Tt(t,1,ft,!0),o,s):[]});function Qc(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),tn(e,t<0?0:t,C)):[]}function ed(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),t=C-t,tn(e,0,t<0?0:t)):[]}function td(e,t){return e&&e.length?Xo(e,_e(t,3),!0,!0):[]}function nd(e,t){return e&&e.length?Xo(e,_e(t,3),!0):[]}function od(e,t,s,C){var D=e==null?0:e.length;return D?(s&&typeof s!="number"&&xt(e,t,s)&&(s=0,C=D),Yl(e,t,s,C)):[]}function hs(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=s==null?0:Be(s);return D<0&&(D=bt(C+D,0)),Ro(e,_e(t,3),D)}function ys(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=C-1;return s!==o&&(D=Be(s),D=s<0?bt(C+D,0):Rt(D,C-1)),Ro(e,_e(t,3),D,!0)}function vs(e){var t=e==null?0:e.length;return t?Tt(e,1):[]}function id(e){var t=e==null?0:e.length;return t?Tt(e,H):[]}function rd(e,t){var s=e==null?0:e.length;return s?(t=t===o?1:Be(t),Tt(e,t)):[]}function ad(e){for(var t=-1,s=e==null?0:e.length,C={};++t<s;){var D=e[t];C[D[0]]=D[1]}return C}function Ss(e){return e&&e.length?e[0]:o}function sd(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=s==null?0:Be(s);return D<0&&(D=bt(C+D,0)),Zn(e,t,D)}function pd(e){var t=e==null?0:e.length;return t?tn(e,0,-1):[]}var ld=Ge(function(e){var t=lt(e,Ki);return t.length&&t[0]===e[0]?wi(t):[]}),cd=Ge(function(e){var t=nn(e),s=lt(e,Ki);return t===nn(s)?t=o:s.pop(),s.length&&s[0]===e[0]?wi(s,_e(t,2)):[]}),dd=Ge(function(e){var t=nn(e),s=lt(e,Ki);return t=typeof t=="function"?t:o,t&&s.pop(),s.length&&s[0]===e[0]?wi(s,o,t):[]});function ud(e,t){return e==null?"":pl.call(e,t)}function nn(e){var t=e==null?0:e.length;return t?e[t-1]:o}function fd(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=C;return s!==o&&(D=Be(s),D=D<0?bt(C+D,0):Rt(D,C-1)),t===t?Vp(e,t,D):Ro(e,Qr,D,!0)}function gd(e,t){return e&&e.length?_a(e,Be(t)):o}var md=Ge(bs);function bs(e,t){return e&&e.length&&t&&t.length?Wi(e,t):e}function hd(e,t,s){return e&&e.length&&t&&t.length?Wi(e,t,_e(s,2)):e}function yd(e,t,s){return e&&e.length&&t&&t.length?Wi(e,t,o,s):e}var vd=bn(function(e,t){var s=e==null?0:e.length,C=Ii(e,t);return La(e,lt(t,function(D){return Cn(D,s)?+D:D}).sort(Ga)),C});function Sd(e,t){var s=[];if(!(e&&e.length))return s;var C=-1,D=[],k=e.length;for(t=_e(t,3);++C<k;){var G=e[C];t(G,C,e)&&(s.push(G),D.push(C))}return La(e,D),s}function pr(e){return e==null?e:ul.call(e)}function bd(e,t,s){var C=e==null?0:e.length;return C?(s&&typeof s!="number"&&xt(e,t,s)?(t=0,s=C):(t=t==null?0:Be(t),s=s===o?C:Be(s)),tn(e,t,s)):[]}function Cd(e,t){return Zo(e,t)}function Ed(e,t,s){return qi(e,t,_e(s,2))}function Od(e,t){var s=e==null?0:e.length;if(s){var C=Zo(e,t);if(C<s&&pn(e[C],t))return C}return-1}function Pd(e,t){return Zo(e,t,!0)}function Td(e,t,s){return qi(e,t,_e(s,2),!0)}function Ad(e,t){var s=e==null?0:e.length;if(s){var C=Zo(e,t,!0)-1;if(pn(e[C],t))return C}return-1}function Nd(e){return e&&e.length?Fa(e):[]}function Dd(e,t){return e&&e.length?Fa(e,_e(t,2)):[]}function Rd(e){var t=e==null?0:e.length;return t?tn(e,1,t):[]}function _d(e,t,s){return e&&e.length?(t=s||t===o?1:Be(t),tn(e,0,t<0?0:t)):[]}function Md(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),t=C-t,tn(e,t<0?0:t,C)):[]}function xd(e,t){return e&&e.length?Xo(e,_e(t,3),!1,!0):[]}function Ld(e,t){return e&&e.length?Xo(e,_e(t,3)):[]}var Id=Ge(function(e){return Ln(Tt(e,1,ft,!0))}),Fd=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),Ln(Tt(e,1,ft,!0),_e(t,2))}),jd=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,Ln(Tt(e,1,ft,!0),o,t)});function kd(e){return e&&e.length?Ln(e):[]}function wd(e,t){return e&&e.length?Ln(e,_e(t,2)):[]}function Ud(e,t){return t=typeof t=="function"?t:o,e&&e.length?Ln(e,o,t):[]}function lr(e){if(!(e&&e.length))return[];var t=0;return e=Dn(e,function(s){if(ft(s))return t=bt(s.length,t),!0}),Ai(t,function(s){return lt(e,Oi(s))})}function Cs(e,t){if(!(e&&e.length))return[];var s=lr(e);return t==null?s:lt(s,function(C){return Gt(t,o,C)})}var Bd=Ge(function(e,t){return ft(e)?vo(e,t):[]}),zd=Ge(function(e){return Hi(Dn(e,ft))}),Wd=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),Hi(Dn(e,ft),_e(t,2))}),Gd=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,Hi(Dn(e,ft),o,t)}),$d=Ge(lr);function qd(e,t){return Ua(e||[],t||[],yo)}function Vd(e,t){return Ua(e||[],t||[],Co)}var Hd=Ge(function(e){var t=e.length,s=t>1?e[t-1]:o;return s=typeof s=="function"?(e.pop(),s):o,Cs(e,s)});function Es(e){var t=I(e);return t.__chain__=!0,t}function Kd(e,t){return t(e),e}function ai(e,t){return t(e)}var Yd=bn(function(e){var t=e.length,s=t?e[0]:0,C=this.__wrapped__,D=function(k){return Ii(k,e)};return t>1||this.__actions__.length||!(C instanceof He)||!Cn(s)?this.thru(D):(C=C.slice(s,+s+(t?1:0)),C.__actions__.push({func:ai,args:[D],thisArg:o}),new Qt(C,this.__chain__).thru(function(k){return t&&!k.length&&k.push(o),k}))});function Zd(){return Es(this)}function Xd(){return new Qt(this.value(),this.__chain__)}function Jd(){this.__values__===o&&(this.__values__=js(this.value()));var e=this.__index__>=this.__values__.length,t=e?o:this.__values__[this.__index__++];return{done:e,value:t}}function Qd(){return this}function eu(e){for(var t,s=this;s instanceof qo;){var C=ms(s);C.__index__=0,C.__values__=o,t?D.__wrapped__=C:t=C;var D=C;s=s.__wrapped__}return D.__wrapped__=e,t}function tu(){var e=this.__wrapped__;if(e instanceof He){var t=e;return this.__actions__.length&&(t=new He(this)),t=t.reverse(),t.__actions__.push({func:ai,args:[pr],thisArg:o}),new Qt(t,this.__chain__)}return this.thru(pr)}function nu(){return wa(this.__wrapped__,this.__actions__)}var ou=Jo(function(e,t,s){nt.call(e,s)?++e[s]:vn(e,s,1)});function iu(e,t,s){var C=we(e)?Xr:Kl;return s&&xt(e,t,s)&&(t=o),C(e,_e(t,3))}function ru(e,t){var s=we(e)?Dn:Ca;return s(e,_e(t,3))}var au=Ya(hs),su=Ya(ys);function pu(e,t){return Tt(si(e,t),1)}function lu(e,t){return Tt(si(e,t),H)}function cu(e,t,s){return s=s===o?1:Be(s),Tt(si(e,t),s)}function Os(e,t){var s=we(e)?Xt:xn;return s(e,_e(t,3))}function Ps(e,t){var s=we(e)?Rp:ba;return s(e,_e(t,3))}var du=Jo(function(e,t,s){nt.call(e,s)?e[s].push(t):vn(e,s,[t])});function uu(e,t,s,C){e=kt(e)?e:so(e),s=s&&!C?Be(s):0;var D=e.length;return s<0&&(s=bt(D+s,0)),ui(e)?s<=D&&e.indexOf(t,s)>-1:!!D&&Zn(e,t,s)>-1}var fu=Ge(function(e,t,s){var C=-1,D=typeof t=="function",k=kt(e)?oe(e.length):[];return xn(e,function(G){k[++C]=D?Gt(t,G,s):So(G,t,s)}),k}),gu=Jo(function(e,t,s){vn(e,s,t)});function si(e,t){var s=we(e)?lt:Na;return s(e,_e(t,3))}function mu(e,t,s,C){return e==null?[]:(we(t)||(t=t==null?[]:[t]),s=C?o:s,we(s)||(s=s==null?[]:[s]),Ma(e,t,s))}var hu=Jo(function(e,t,s){e[s?0:1].push(t)},function(){return[[],[]]});function yu(e,t,s){var C=we(e)?Ci:ta,D=arguments.length<3;return C(e,_e(t,4),s,D,xn)}function vu(e,t,s){var C=we(e)?_p:ta,D=arguments.length<3;return C(e,_e(t,4),s,D,ba)}function Su(e,t){var s=we(e)?Dn:Ca;return s(e,ci(_e(t,3)))}function bu(e){var t=we(e)?ha:uc;return t(e)}function Cu(e,t,s){(s?xt(e,t,s):t===o)?t=1:t=Be(t);var C=we(e)?Gl:fc;return C(e,t)}function Eu(e){var t=we(e)?$l:mc;return t(e)}function Ou(e){if(e==null)return 0;if(kt(e))return ui(e)?Jn(e):e.length;var t=_t(e);return t==We||t==ye?e.size:Bi(e).length}function Pu(e,t,s){var C=we(e)?Ei:hc;return s&&xt(e,t,s)&&(t=o),C(e,_e(t,3))}var Tu=Ge(function(e,t){if(e==null)return[];var s=t.length;return s>1&&xt(e,t[0],t[1])?t=[]:s>2&&xt(t[0],t[1],t[2])&&(t=[t[0]]),Ma(e,Tt(t,1),[])}),pi=rl||function(){return Pt.Date.now()};function Au(e,t){if(typeof t!="function")throw new Jt(l);return e=Be(e),function(){if(--e<1)return t.apply(this,arguments)}}function Ts(e,t,s){return t=s?o:t,t=e&&t==null?e.length:t,Sn(e,M,o,o,o,o,t)}function As(e,t){var s;if(typeof t!="function")throw new Jt(l);return e=Be(e),function(){return--e>0&&(s=t.apply(this,arguments)),e<=1&&(t=o),s}}var cr=Ge(function(e,t,s){var C=b;if(s.length){var D=_n(s,ro(cr));C|=A}return Sn(e,C,t,s,D)}),Ns=Ge(function(e,t,s){var C=b|P;if(s.length){var D=_n(s,ro(Ns));C|=A}return Sn(t,C,e,s,D)});function Ds(e,t,s){t=s?o:t;var C=Sn(e,N,o,o,o,o,o,t);return C.placeholder=Ds.placeholder,C}function Rs(e,t,s){t=s?o:t;var C=Sn(e,T,o,o,o,o,o,t);return C.placeholder=Rs.placeholder,C}function _s(e,t,s){var C,D,k,G,K,Q,le=0,ce=!1,fe=!1,Se=!0;if(typeof e!="function")throw new Jt(l);t=on(t)||0,ct(s)&&(ce=!!s.leading,fe="maxWait"in s,k=fe?bt(on(s.maxWait)||0,t):k,Se="trailing"in s?!!s.trailing:Se);function Ae(gt){var ln=C,Pn=D;return C=D=o,le=gt,G=e.apply(Pn,ln),G}function Me(gt){return le=gt,K=Po(qe,t),ce?Ae(gt):G}function ze(gt){var ln=gt-Q,Pn=gt-le,Ys=t-ln;return fe?Rt(Ys,k-Pn):Ys}function xe(gt){var ln=gt-Q,Pn=gt-le;return Q===o||ln>=t||ln<0||fe&&Pn>=k}function qe(){var gt=pi();if(xe(gt))return Ye(gt);K=Po(qe,ze(gt))}function Ye(gt){return K=o,Se&&C?Ae(gt):(C=D=o,G)}function Ht(){K!==o&&Ba(K),le=0,C=Q=D=K=o}function Lt(){return K===o?G:Ye(pi())}function Kt(){var gt=pi(),ln=xe(gt);if(C=arguments,D=this,Q=gt,ln){if(K===o)return Me(Q);if(fe)return Ba(K),K=Po(qe,t),Ae(Q)}return K===o&&(K=Po(qe,t)),G}return Kt.cancel=Ht,Kt.flush=Lt,Kt}var Nu=Ge(function(e,t){return Sa(e,1,t)}),Du=Ge(function(e,t,s){return Sa(e,on(t)||0,s)});function Ru(e){return Sn(e,_)}function li(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Jt(l);var s=function(){var C=arguments,D=t?t.apply(this,C):C[0],k=s.cache;if(k.has(D))return k.get(D);var G=e.apply(this,C);return s.cache=k.set(D,G)||k,G};return s.cache=new(li.Cache||yn),s}li.Cache=yn;function ci(e){if(typeof e!="function")throw new Jt(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function _u(e){return As(2,e)}var Mu=yc(function(e,t){t=t.length==1&&we(t[0])?lt(t[0],$t(_e())):lt(Tt(t,1),$t(_e()));var s=t.length;return Ge(function(C){for(var D=-1,k=Rt(C.length,s);++D<k;)C[D]=t[D].call(this,C[D]);return Gt(e,this,C)})}),dr=Ge(function(e,t){var s=_n(t,ro(dr));return Sn(e,A,o,t,s)}),Ms=Ge(function(e,t){var s=_n(t,ro(Ms));return Sn(e,R,o,t,s)}),xu=bn(function(e,t){return Sn(e,x,o,o,o,t)});function Lu(e,t){if(typeof e!="function")throw new Jt(l);return t=t===o?t:Be(t),Ge(e,t)}function Iu(e,t){if(typeof e!="function")throw new Jt(l);return t=t==null?0:bt(Be(t),0),Ge(function(s){var C=s[t],D=Fn(s,0,t);return C&&Rn(D,C),Gt(e,this,D)})}function Fu(e,t,s){var C=!0,D=!0;if(typeof e!="function")throw new Jt(l);return ct(s)&&(C="leading"in s?!!s.leading:C,D="trailing"in s?!!s.trailing:D),_s(e,t,{leading:C,maxWait:t,trailing:D})}function ju(e){return Ts(e,1)}function ku(e,t){return dr(Yi(t),e)}function wu(){if(!arguments.length)return[];var e=arguments[0];return we(e)?e:[e]}function Uu(e){return en(e,f)}function Bu(e,t){return t=typeof t=="function"?t:o,en(e,f,t)}function zu(e){return en(e,h|f)}function Wu(e,t){return t=typeof t=="function"?t:o,en(e,h|f,t)}function Gu(e,t){return t==null||va(e,t,Ot(t))}function pn(e,t){return e===t||e!==e&&t!==t}var $u=ni(ki),qu=ni(function(e,t){return e>=t}),Hn=Pa(function(){return arguments}())?Pa:function(e){return dt(e)&&nt.call(e,"callee")&&!ca.call(e,"callee")},we=oe.isArray,Vu=qr?$t(qr):ec;function kt(e){return e!=null&&di(e.length)&&!En(e)}function ft(e){return dt(e)&&kt(e)}function Hu(e){return e===!0||e===!1||dt(e)&&Mt(e)==ut}var jn=sl||Er,Ku=Vr?$t(Vr):tc;function Yu(e){return dt(e)&&e.nodeType===1&&!To(e)}function Zu(e){if(e==null)return!0;if(kt(e)&&(we(e)||typeof e=="string"||typeof e.splice=="function"||jn(e)||ao(e)||Hn(e)))return!e.length;var t=_t(e);if(t==We||t==ye)return!e.size;if(Oo(e))return!Bi(e).length;for(var s in e)if(nt.call(e,s))return!1;return!0}function Xu(e,t){return bo(e,t)}function Ju(e,t,s){s=typeof s=="function"?s:o;var C=s?s(e,t):o;return C===o?bo(e,t,o,s):!!C}function ur(e){if(!dt(e))return!1;var t=Mt(e);return t==Re||t==At||typeof e.message=="string"&&typeof e.name=="string"&&!To(e)}function Qu(e){return typeof e=="number"&&ua(e)}function En(e){if(!ct(e))return!1;var t=Mt(e);return t==Ct||t==Ue||t==mt||t==De}function xs(e){return typeof e=="number"&&e==Be(e)}function di(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=V}function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function dt(e){return e!=null&&typeof e=="object"}var Ls=Hr?$t(Hr):oc;function ef(e,t){return e===t||Ui(e,t,nr(t))}function tf(e,t,s){return s=typeof s=="function"?s:o,Ui(e,t,nr(t),s)}function nf(e){return Is(e)&&e!=+e}function of(e){if(Bc(e))throw new ke(d);return Ta(e)}function rf(e){return e===null}function af(e){return e==null}function Is(e){return typeof e=="number"||dt(e)&&Mt(e)==Bt}function To(e){if(!dt(e)||Mt(e)!=pe)return!1;var t=wo(e);if(t===null)return!0;var s=nt.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&Io.call(s)==tl}var fr=Kr?$t(Kr):ic;function sf(e){return xs(e)&&e>=-V&&e<=V}var Fs=Yr?$t(Yr):rc;function ui(e){return typeof e=="string"||!we(e)&&dt(e)&&Mt(e)==he}function Vt(e){return typeof e=="symbol"||dt(e)&&Mt(e)==be}var ao=Zr?$t(Zr):ac;function pf(e){return e===o}function lf(e){return dt(e)&&_t(e)==Ke}function cf(e){return dt(e)&&Mt(e)==Je}var df=ni(zi),uf=ni(function(e,t){return e<=t});function js(e){if(!e)return[];if(kt(e))return ui(e)?an(e):jt(e);if(uo&&e[uo])return Gp(e[uo]());var t=_t(e),s=t==We?Di:t==ye?_o:so;return s(e)}function On(e){if(!e)return e===0?e:0;if(e=on(e),e===H||e===-H){var t=e<0?-1:1;return t*ne}return e===e?e:0}function Be(e){var t=On(e),s=t%1;return t===t?s?t-s:t:0}function ks(e){return e?Gn(Be(e),0,de):0}function on(e){if(typeof e=="number")return e;if(Vt(e))return ae;if(ct(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ct(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=na(e);var s=vt.test(e);return s||rt.test(e)?Ap(e.slice(2),s?2:8):Ie.test(e)?ae:+e}function ws(e){return un(e,wt(e))}function ff(e){return e?Gn(Be(e),-V,V):e===0?e:0}function tt(e){return e==null?"":qt(e)}var gf=oo(function(e,t){if(Oo(t)||kt(t)){un(t,Ot(t),e);return}for(var s in t)nt.call(t,s)&&yo(e,s,t[s])}),Us=oo(function(e,t){un(t,wt(t),e)}),fi=oo(function(e,t,s,C){un(t,wt(t),e,C)}),mf=oo(function(e,t,s,C){un(t,Ot(t),e,C)}),hf=bn(Ii);function yf(e,t){var s=no(e);return t==null?s:ya(s,t)}var vf=Ge(function(e,t){e=at(e);var s=-1,C=t.length,D=C>2?t[2]:o;for(D&&xt(t[0],t[1],D)&&(C=1);++s<C;)for(var k=t[s],G=wt(k),K=-1,Q=G.length;++K<Q;){var le=G[K],ce=e[le];(ce===o||pn(ce,Qn[le])&&!nt.call(e,le))&&(e[le]=k[le])}return e}),Sf=Ge(function(e){return e.push(o,ns),Gt(Bs,o,e)});function bf(e,t){return Jr(e,_e(t,3),dn)}function Cf(e,t){return Jr(e,_e(t,3),ji)}function Ef(e,t){return e==null?e:Fi(e,_e(t,3),wt)}function Of(e,t){return e==null?e:Ea(e,_e(t,3),wt)}function Pf(e,t){return e&&dn(e,_e(t,3))}function Tf(e,t){return e&&ji(e,_e(t,3))}function Af(e){return e==null?[]:Ko(e,Ot(e))}function Nf(e){return e==null?[]:Ko(e,wt(e))}function gr(e,t,s){var C=e==null?o:$n(e,t);return C===o?s:C}function Df(e,t){return e!=null&&rs(e,t,Zl)}function mr(e,t){return e!=null&&rs(e,t,Xl)}var Rf=Xa(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Fo.call(t)),e[t]=s},yr(Ut)),_f=Xa(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Fo.call(t)),nt.call(e,t)?e[t].push(s):e[t]=[s]},_e),Mf=Ge(So);function Ot(e){return kt(e)?ma(e):Bi(e)}function wt(e){return kt(e)?ma(e,!0):sc(e)}function xf(e,t){var s={};return t=_e(t,3),dn(e,function(C,D,k){vn(s,t(C,D,k),C)}),s}function Lf(e,t){var s={};return t=_e(t,3),dn(e,function(C,D,k){vn(s,D,t(C,D,k))}),s}var If=oo(function(e,t,s){Yo(e,t,s)}),Bs=oo(function(e,t,s,C){Yo(e,t,s,C)}),Ff=bn(function(e,t){var s={};if(e==null)return s;var C=!1;t=lt(t,function(k){return k=In(k,e),C||(C=k.length>1),k}),un(e,er(e),s),C&&(s=en(s,h|u|f,Dc));for(var D=t.length;D--;)Vi(s,t[D]);return s});function jf(e,t){return zs(e,ci(_e(t)))}var kf=bn(function(e,t){return e==null?{}:lc(e,t)});function zs(e,t){if(e==null)return{};var s=lt(er(e),function(C){return[C]});return t=_e(t),xa(e,s,function(C,D){return t(C,D[0])})}function wf(e,t,s){t=In(t,e);var C=-1,D=t.length;for(D||(D=1,e=o);++C<D;){var k=e==null?o:e[fn(t[C])];k===o&&(C=D,k=s),e=En(k)?k.call(e):k}return e}function Uf(e,t,s){return e==null?e:Co(e,t,s)}function Bf(e,t,s,C){return C=typeof C=="function"?C:o,e==null?e:Co(e,t,s,C)}var Ws=es(Ot),Gs=es(wt);function zf(e,t,s){var C=we(e),D=C||jn(e)||ao(e);if(t=_e(t,4),s==null){var k=e&&e.constructor;D?s=C?new k:[]:ct(e)?s=En(k)?no(wo(e)):{}:s={}}return(D?Xt:dn)(e,function(G,K,Q){return t(s,G,K,Q)}),s}function Wf(e,t){return e==null?!0:Vi(e,t)}function Gf(e,t,s){return e==null?e:ka(e,t,Yi(s))}function $f(e,t,s,C){return C=typeof C=="function"?C:o,e==null?e:ka(e,t,Yi(s),C)}function so(e){return e==null?[]:Ni(e,Ot(e))}function qf(e){return e==null?[]:Ni(e,wt(e))}function Vf(e,t,s){return s===o&&(s=t,t=o),s!==o&&(s=on(s),s=s===s?s:0),t!==o&&(t=on(t),t=t===t?t:0),Gn(on(e),t,s)}function Hf(e,t,s){return t=On(t),s===o?(s=t,t=0):s=On(s),e=on(e),Jl(e,t,s)}function Kf(e,t,s){if(s&&typeof s!="boolean"&&xt(e,t,s)&&(t=s=o),s===o&&(typeof t=="boolean"?(s=t,t=o):typeof e=="boolean"&&(s=e,e=o)),e===o&&t===o?(e=0,t=1):(e=On(e),t===o?(t=e,e=0):t=On(t)),e>t){var C=e;e=t,t=C}if(s||e%1||t%1){var D=fa();return Rt(e+D*(t-e+Tp("1e-"+((D+"").length-1))),t)}return Gi(e,t)}var Yf=io(function(e,t,s){return t=t.toLowerCase(),e+(s?$s(t):t)});function $s(e){return hr(tt(e).toLowerCase())}function qs(e){return e=tt(e),e&&e.replace(Un,wp).replace(mp,"")}function Zf(e,t,s){e=tt(e),t=qt(t);var C=e.length;s=s===o?C:Gn(Be(s),0,C);var D=s;return s-=t.length,s>=0&&e.slice(s,D)==t}function Xf(e){return e=tt(e),e&&wn.test(e)?e.replace(kn,Up):e}function Jf(e){return e=tt(e),e&&W.test(e)?e.replace(Y,"\\$&"):e}var Qf=io(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()}),eg=io(function(e,t,s){return e+(s?" ":"")+t.toLowerCase()}),tg=Ka("toLowerCase");function ng(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;if(!t||C>=t)return e;var D=(t-C)/2;return ti(Wo(D),s)+e+ti(zo(D),s)}function og(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;return t&&C<t?e+ti(t-C,s):e}function ig(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;return t&&C<t?ti(t-C,s)+e:e}function rg(e,t,s){return s||t==null?t=0:t&&(t=+t),dl(tt(e).replace(X,""),t||0)}function ag(e,t,s){return(s?xt(e,t,s):t===o)?t=1:t=Be(t),$i(tt(e),t)}function sg(){var e=arguments,t=tt(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var pg=io(function(e,t,s){return e+(s?"_":"")+t.toLowerCase()});function lg(e,t,s){return s&&typeof s!="number"&&xt(e,t,s)&&(t=s=o),s=s===o?de:s>>>0,s?(e=tt(e),e&&(typeof t=="string"||t!=null&&!fr(t))&&(t=qt(t),!t&&Xn(e))?Fn(an(e),0,s):e.split(t,s)):[]}var cg=io(function(e,t,s){return e+(s?" ":"")+hr(t)});function dg(e,t,s){return e=tt(e),s=s==null?0:Gn(Be(s),0,e.length),t=qt(t),e.slice(s,s+t.length)==t}function ug(e,t,s){var C=I.templateSettings;s&&xt(e,t,s)&&(t=o),e=tt(e),t=fi({},t,C,ts);var D=fi({},t.imports,C.imports,ts),k=Ot(D),G=Ni(D,k),K,Q,le=0,ce=t.interpolate||Et,fe="__p += '",Se=Ri((t.escape||Et).source+"|"+ce.source+"|"+(ce===Kn?Ve:Et).source+"|"+(t.evaluate||Et).source+"|$","g"),Ae="//# sourceURL="+(nt.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bp+"]")+`
`;e.replace(Se,function(xe,qe,Ye,Ht,Lt,Kt){return Ye||(Ye=Ht),fe+=e.slice(le,Kt).replace(Xs,Bp),qe&&(K=!0,fe+=`' +
__e(`+qe+`) +
'`),Lt&&(Q=!0,fe+=`';
`+Lt+`;
__p += '`),Ye&&(fe+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),le=Kt+xe.length,xe}),fe+=`';
`;var Me=nt.call(t,"variable")&&t.variable;if(!Me)fe=`with (obj) {
`+fe+`
}
`;else if(Te.test(Me))throw new ke(r);fe=(Q?fe.replace(Ft,""):fe).replace(mn,"$1").replace(yt,"$1;"),fe="function("+(Me||"obj")+`) {
`+(Me?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ze=Hs(function(){return et(k,Ae+"return "+fe).apply(o,G)});if(ze.source=fe,ur(ze))throw ze;return ze}function fg(e){return tt(e).toLowerCase()}function gg(e){return tt(e).toUpperCase()}function mg(e,t,s){if(e=tt(e),e&&(s||t===o))return na(e);if(!e||!(t=qt(t)))return e;var C=an(e),D=an(t),k=oa(C,D),G=ia(C,D)+1;return Fn(C,k,G).join("")}function hg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.slice(0,aa(e)+1);if(!e||!(t=qt(t)))return e;var C=an(e),D=ia(C,an(t))+1;return Fn(C,0,D).join("")}function yg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.replace(X,"");if(!e||!(t=qt(t)))return e;var C=an(e),D=oa(C,an(t));return Fn(C,D).join("")}function vg(e,t){var s=L,C=U;if(ct(t)){var D="separator"in t?t.separator:D;s="length"in t?Be(t.length):s,C="omission"in t?qt(t.omission):C}e=tt(e);var k=e.length;if(Xn(e)){var G=an(e);k=G.length}if(s>=k)return e;var K=s-Jn(C);if(K<1)return C;var Q=G?Fn(G,0,K).join(""):e.slice(0,K);if(D===o)return Q+C;if(G&&(K+=Q.length-K),fr(D)){if(e.slice(K).search(D)){var le,ce=Q;for(D.global||(D=Ri(D.source,tt(ve.exec(D))+"g")),D.lastIndex=0;le=D.exec(ce);)var fe=le.index;Q=Q.slice(0,fe===o?K:fe)}}else if(e.indexOf(qt(D),K)!=K){var Se=Q.lastIndexOf(D);Se>-1&&(Q=Q.slice(0,Se))}return Q+C}function Sg(e){return e=tt(e),e&&cn.test(e)?e.replace(An,Hp):e}var bg=io(function(e,t,s){return e+(s?" ":"")+t.toUpperCase()}),hr=Ka("toUpperCase");function Vs(e,t,s){return e=tt(e),t=s?o:t,t===o?Wp(e)?Zp(e):Lp(e):e.match(t)||[]}var Hs=Ge(function(e,t){try{return Gt(e,o,t)}catch(s){return ur(s)?s:new ke(s)}}),Cg=bn(function(e,t){return Xt(t,function(s){s=fn(s),vn(e,s,cr(e[s],e))}),e});function Eg(e){var t=e==null?0:e.length,s=_e();return e=t?lt(e,function(C){if(typeof C[1]!="function")throw new Jt(l);return[s(C[0]),C[1]]}):[],Ge(function(C){for(var D=-1;++D<t;){var k=e[D];if(Gt(k[0],this,C))return Gt(k[1],this,C)}})}function Og(e){return Hl(en(e,h))}function yr(e){return function(){return e}}function Pg(e,t){return e==null||e!==e?t:e}var Tg=Za(),Ag=Za(!0);function Ut(e){return e}function vr(e){return Aa(typeof e=="function"?e:en(e,h))}function Ng(e){return Da(en(e,h))}function Dg(e,t){return Ra(e,en(t,h))}var Rg=Ge(function(e,t){return function(s){return So(s,e,t)}}),_g=Ge(function(e,t){return function(s){return So(e,s,t)}});function Sr(e,t,s){var C=Ot(t),D=Ko(t,C);s==null&&!(ct(t)&&(D.length||!C.length))&&(s=t,t=e,e=this,D=Ko(t,Ot(t)));var k=!(ct(s)&&"chain"in s)||!!s.chain,G=En(e);return Xt(D,function(K){var Q=t[K];e[K]=Q,G&&(e.prototype[K]=function(){var le=this.__chain__;if(k||le){var ce=e(this.__wrapped__),fe=ce.__actions__=jt(this.__actions__);return fe.push({func:Q,args:arguments,thisArg:e}),ce.__chain__=le,ce}return Q.apply(e,Rn([this.value()],arguments))})}),e}function Mg(){return Pt._===this&&(Pt._=nl),this}function br(){}function xg(e){return e=Be(e),Ge(function(t){return _a(t,e)})}var Lg=Xi(lt),Ig=Xi(Xr),Fg=Xi(Ei);function Ks(e){return ir(e)?Oi(fn(e)):cc(e)}function jg(e){return function(t){return e==null?o:$n(e,t)}}var kg=Ja(),wg=Ja(!0);function Cr(){return[]}function Er(){return!1}function Ug(){return{}}function Bg(){return""}function zg(){return!0}function Wg(e,t){if(e=Be(e),e<1||e>V)return[];var s=de,C=Rt(e,de);t=_e(t),e-=de;for(var D=Ai(C,t);++s<e;)t(s);return D}function Gg(e){return we(e)?lt(e,fn):Vt(e)?[e]:jt(gs(tt(e)))}function $g(e){var t=++el;return tt(e)+t}var qg=ei(function(e,t){return e+t},0),Vg=Ji("ceil"),Hg=ei(function(e,t){return e/t},1),Kg=Ji("floor");function Yg(e){return e&&e.length?Ho(e,Ut,ki):o}function Zg(e,t){return e&&e.length?Ho(e,_e(t,2),ki):o}function Xg(e){return ea(e,Ut)}function Jg(e,t){return ea(e,_e(t,2))}function Qg(e){return e&&e.length?Ho(e,Ut,zi):o}function e0(e,t){return e&&e.length?Ho(e,_e(t,2),zi):o}var t0=ei(function(e,t){return e*t},1),n0=Ji("round"),o0=ei(function(e,t){return e-t},0);function i0(e){return e&&e.length?Ti(e,Ut):0}function r0(e,t){return e&&e.length?Ti(e,_e(t,2)):0}return I.after=Au,I.ary=Ts,I.assign=gf,I.assignIn=Us,I.assignInWith=fi,I.assignWith=mf,I.at=hf,I.before=As,I.bind=cr,I.bindAll=Cg,I.bindKey=Ns,I.castArray=wu,I.chain=Es,I.chunk=Hc,I.compact=Kc,I.concat=Yc,I.cond=Eg,I.conforms=Og,I.constant=yr,I.countBy=ou,I.create=yf,I.curry=Ds,I.curryRight=Rs,I.debounce=_s,I.defaults=vf,I.defaultsDeep=Sf,I.defer=Nu,I.delay=Du,I.difference=Zc,I.differenceBy=Xc,I.differenceWith=Jc,I.drop=Qc,I.dropRight=ed,I.dropRightWhile=td,I.dropWhile=nd,I.fill=od,I.filter=ru,I.flatMap=pu,I.flatMapDeep=lu,I.flatMapDepth=cu,I.flatten=vs,I.flattenDeep=id,I.flattenDepth=rd,I.flip=Ru,I.flow=Tg,I.flowRight=Ag,I.fromPairs=ad,I.functions=Af,I.functionsIn=Nf,I.groupBy=du,I.initial=pd,I.intersection=ld,I.intersectionBy=cd,I.intersectionWith=dd,I.invert=Rf,I.invertBy=_f,I.invokeMap=fu,I.iteratee=vr,I.keyBy=gu,I.keys=Ot,I.keysIn=wt,I.map=si,I.mapKeys=xf,I.mapValues=Lf,I.matches=Ng,I.matchesProperty=Dg,I.memoize=li,I.merge=If,I.mergeWith=Bs,I.method=Rg,I.methodOf=_g,I.mixin=Sr,I.negate=ci,I.nthArg=xg,I.omit=Ff,I.omitBy=jf,I.once=_u,I.orderBy=mu,I.over=Lg,I.overArgs=Mu,I.overEvery=Ig,I.overSome=Fg,I.partial=dr,I.partialRight=Ms,I.partition=hu,I.pick=kf,I.pickBy=zs,I.property=Ks,I.propertyOf=jg,I.pull=md,I.pullAll=bs,I.pullAllBy=hd,I.pullAllWith=yd,I.pullAt=vd,I.range=kg,I.rangeRight=wg,I.rearg=xu,I.reject=Su,I.remove=Sd,I.rest=Lu,I.reverse=pr,I.sampleSize=Cu,I.set=Uf,I.setWith=Bf,I.shuffle=Eu,I.slice=bd,I.sortBy=Tu,I.sortedUniq=Nd,I.sortedUniqBy=Dd,I.split=lg,I.spread=Iu,I.tail=Rd,I.take=_d,I.takeRight=Md,I.takeRightWhile=xd,I.takeWhile=Ld,I.tap=Kd,I.throttle=Fu,I.thru=ai,I.toArray=js,I.toPairs=Ws,I.toPairsIn=Gs,I.toPath=Gg,I.toPlainObject=ws,I.transform=zf,I.unary=ju,I.union=Id,I.unionBy=Fd,I.unionWith=jd,I.uniq=kd,I.uniqBy=wd,I.uniqWith=Ud,I.unset=Wf,I.unzip=lr,I.unzipWith=Cs,I.update=Gf,I.updateWith=$f,I.values=so,I.valuesIn=qf,I.without=Bd,I.words=Vs,I.wrap=ku,I.xor=zd,I.xorBy=Wd,I.xorWith=Gd,I.zip=$d,I.zipObject=qd,I.zipObjectDeep=Vd,I.zipWith=Hd,I.entries=Ws,I.entriesIn=Gs,I.extend=Us,I.extendWith=fi,Sr(I,I),I.add=qg,I.attempt=Hs,I.camelCase=Yf,I.capitalize=$s,I.ceil=Vg,I.clamp=Vf,I.clone=Uu,I.cloneDeep=zu,I.cloneDeepWith=Wu,I.cloneWith=Bu,I.conformsTo=Gu,I.deburr=qs,I.defaultTo=Pg,I.divide=Hg,I.endsWith=Zf,I.eq=pn,I.escape=Xf,I.escapeRegExp=Jf,I.every=iu,I.find=au,I.findIndex=hs,I.findKey=bf,I.findLast=su,I.findLastIndex=ys,I.findLastKey=Cf,I.floor=Kg,I.forEach=Os,I.forEachRight=Ps,I.forIn=Ef,I.forInRight=Of,I.forOwn=Pf,I.forOwnRight=Tf,I.get=gr,I.gt=$u,I.gte=qu,I.has=Df,I.hasIn=mr,I.head=Ss,I.identity=Ut,I.includes=uu,I.indexOf=sd,I.inRange=Hf,I.invoke=Mf,I.isArguments=Hn,I.isArray=we,I.isArrayBuffer=Vu,I.isArrayLike=kt,I.isArrayLikeObject=ft,I.isBoolean=Hu,I.isBuffer=jn,I.isDate=Ku,I.isElement=Yu,I.isEmpty=Zu,I.isEqual=Xu,I.isEqualWith=Ju,I.isError=ur,I.isFinite=Qu,I.isFunction=En,I.isInteger=xs,I.isLength=di,I.isMap=Ls,I.isMatch=ef,I.isMatchWith=tf,I.isNaN=nf,I.isNative=of,I.isNil=af,I.isNull=rf,I.isNumber=Is,I.isObject=ct,I.isObjectLike=dt,I.isPlainObject=To,I.isRegExp=fr,I.isSafeInteger=sf,I.isSet=Fs,I.isString=ui,I.isSymbol=Vt,I.isTypedArray=ao,I.isUndefined=pf,I.isWeakMap=lf,I.isWeakSet=cf,I.join=ud,I.kebabCase=Qf,I.last=nn,I.lastIndexOf=fd,I.lowerCase=eg,I.lowerFirst=tg,I.lt=df,I.lte=uf,I.max=Yg,I.maxBy=Zg,I.mean=Xg,I.meanBy=Jg,I.min=Qg,I.minBy=e0,I.stubArray=Cr,I.stubFalse=Er,I.stubObject=Ug,I.stubString=Bg,I.stubTrue=zg,I.multiply=t0,I.nth=gd,I.noConflict=Mg,I.noop=br,I.now=pi,I.pad=ng,I.padEnd=og,I.padStart=ig,I.parseInt=rg,I.random=Kf,I.reduce=yu,I.reduceRight=vu,I.repeat=ag,I.replace=sg,I.result=wf,I.round=n0,I.runInContext=J,I.sample=bu,I.size=Ou,I.snakeCase=pg,I.some=Pu,I.sortedIndex=Cd,I.sortedIndexBy=Ed,I.sortedIndexOf=Od,I.sortedLastIndex=Pd,I.sortedLastIndexBy=Td,I.sortedLastIndexOf=Ad,I.startCase=cg,I.startsWith=dg,I.subtract=o0,I.sum=i0,I.sumBy=r0,I.template=ug,I.times=Wg,I.toFinite=On,I.toInteger=Be,I.toLength=ks,I.toLower=fg,I.toNumber=on,I.toSafeInteger=ff,I.toString=tt,I.toUpper=gg,I.trim=mg,I.trimEnd=hg,I.trimStart=yg,I.truncate=vg,I.unescape=Sg,I.uniqueId=$g,I.upperCase=bg,I.upperFirst=hr,I.each=Os,I.eachRight=Ps,I.first=Ss,Sr(I,function(){var e={};return dn(I,function(t,s){nt.call(I.prototype,s)||(e[s]=t)}),e}(),{chain:!1}),I.VERSION=n,Xt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){I[e].placeholder=I}),Xt(["drop","take"],function(e,t){He.prototype[e]=function(s){s=s===o?1:bt(Be(s),0);var C=this.__filtered__&&!t?new He(this):this.clone();return C.__filtered__?C.__takeCount__=Rt(s,C.__takeCount__):C.__views__.push({size:Rt(s,de),type:e+(C.__dir__<0?"Right":"")}),C},He.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Xt(["filter","map","takeWhile"],function(e,t){var s=t+1,C=s==B||s==w;He.prototype[e]=function(D){var k=this.clone();return k.__iteratees__.push({iteratee:_e(D,3),type:s}),k.__filtered__=k.__filtered__||C,k}}),Xt(["head","last"],function(e,t){var s="take"+(t?"Right":"");He.prototype[e]=function(){return this[s](1).value()[0]}}),Xt(["initial","tail"],function(e,t){var s="drop"+(t?"":"Right");He.prototype[e]=function(){return this.__filtered__?new He(this):this[s](1)}}),He.prototype.compact=function(){return this.filter(Ut)},He.prototype.find=function(e){return this.filter(e).head()},He.prototype.findLast=function(e){return this.reverse().find(e)},He.prototype.invokeMap=Ge(function(e,t){return typeof e=="function"?new He(this):this.map(function(s){return So(s,e,t)})}),He.prototype.reject=function(e){return this.filter(ci(_e(e)))},He.prototype.slice=function(e,t){e=Be(e);var s=this;return s.__filtered__&&(e>0||t<0)?new He(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),t!==o&&(t=Be(t),s=t<0?s.dropRight(-t):s.take(t-e)),s)},He.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},He.prototype.toArray=function(){return this.take(de)},dn(He.prototype,function(e,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),C=/^(?:head|last)$/.test(t),D=I[C?"take"+(t=="last"?"Right":""):t],k=C||/^find/.test(t);!D||(I.prototype[t]=function(){var G=this.__wrapped__,K=C?[1]:arguments,Q=G instanceof He,le=K[0],ce=Q||we(G),fe=function(qe){var Ye=D.apply(I,Rn([qe],K));return C&&Se?Ye[0]:Ye};ce&&s&&typeof le=="function"&&le.length!=1&&(Q=ce=!1);var Se=this.__chain__,Ae=!!this.__actions__.length,Me=k&&!Se,ze=Q&&!Ae;if(!k&&ce){G=ze?G:new He(this);var xe=e.apply(G,K);return xe.__actions__.push({func:ai,args:[fe],thisArg:o}),new Qt(xe,Se)}return Me&&ze?e.apply(this,K):(xe=this.thru(fe),Me?C?xe.value()[0]:xe.value():xe)})}),Xt(["pop","push","shift","sort","splice","unshift"],function(e){var t=xo[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",C=/^(?:pop|shift)$/.test(e);I.prototype[e]=function(){var D=arguments;if(C&&!this.__chain__){var k=this.value();return t.apply(we(k)?k:[],D)}return this[s](function(G){return t.apply(we(G)?G:[],D)})}}),dn(He.prototype,function(e,t){var s=I[t];if(s){var C=s.name+"";nt.call(to,C)||(to[C]=[]),to[C].push({name:t,func:s})}}),to[Qo(o,P).name]=[{name:"wrapper",func:o}],He.prototype.clone=vl,He.prototype.reverse=Sl,He.prototype.value=bl,I.prototype.at=Yd,I.prototype.chain=Zd,I.prototype.commit=Xd,I.prototype.next=Jd,I.prototype.plant=eu,I.prototype.reverse=tu,I.prototype.toJSON=I.prototype.valueOf=I.prototype.value=nu,I.prototype.first=I.prototype.head,uo&&(I.prototype[uo]=Qd),I},Mo=Xp();Pt._=Mo,g=function(){return Mo}.call(v,a,v,O),g!==o&&(O.exports=g)}).call(this)},1863:(O,v,a)=>{"use strict";const g=a(4613),o=Symbol("max"),n=Symbol("length"),p=Symbol("lengthCalculator"),d=Symbol("allowStale"),l=Symbol("maxAge"),r=Symbol("dispose"),c=Symbol("noDisposeOnSet"),m=Symbol("lruList"),i=Symbol("cache"),h=Symbol("updateAgeOnGet"),u=()=>1;class f{constructor(A){if(typeof A=="number"&&(A={max:A}),A||(A={}),A.max&&(typeof A.max!="number"||A.max<0))throw new TypeError("max must be a non-negative number");const R=this[o]=A.max||1/0,M=A.length||u;if(this[p]=typeof M!="function"?u:M,this[d]=A.stale||!1,A.maxAge&&typeof A.maxAge!="number")throw new TypeError("maxAge must be a number");this[l]=A.maxAge||0,this[r]=A.dispose,this[c]=A.noDisposeOnSet||!1,this[h]=A.updateAgeOnGet||!1,this.reset()}set max(A){if(typeof A!="number"||A<0)throw new TypeError("max must be a non-negative number");this[o]=A||1/0,b(this)}get max(){return this[o]}set allowStale(A){this[d]=!!A}get allowStale(){return this[d]}set maxAge(A){if(typeof A!="number")throw new TypeError("maxAge must be a non-negative number");this[l]=A,b(this)}get maxAge(){return this[l]}set lengthCalculator(A){typeof A!="function"&&(A=u),A!==this[p]&&(this[p]=A,this[n]=0,this[m].forEach(R=>{R.length=this[p](R.value,R.key),this[n]+=R.length})),b(this)}get lengthCalculator(){return this[p]}get length(){return this[n]}get itemCount(){return this[m].length}rforEach(A,R){R=R||this;for(let M=this[m].tail;M!==null;){const x=M.prev;N(this,A,M,R),M=x}}forEach(A,R){R=R||this;for(let M=this[m].head;M!==null;){const x=M.next;N(this,A,M,R),M=x}}keys(){return this[m].toArray().map(A=>A.key)}values(){return this[m].toArray().map(A=>A.value)}reset(){this[r]&&this[m]&&this[m].length&&this[m].forEach(A=>this[r](A.key,A.value)),this[i]=new Map,this[m]=new g,this[n]=0}dump(){return this[m].map(A=>y(this,A)?!1:{k:A.key,v:A.value,e:A.now+(A.maxAge||0)}).toArray().filter(A=>A)}dumpLru(){return this[m]}set(A,R,M){if(M=M||this[l],M&&typeof M!="number")throw new TypeError("maxAge must be a number");const x=M?Date.now():0,_=this[p](R,A);if(this[i].has(A)){if(_>this[o])return P(this,this[i].get(A)),!1;const j=this[i].get(A).value;return this[r]&&(this[c]||this[r](A,j.value)),j.now=x,j.maxAge=M,j.value=R,this[n]+=_-j.length,j.length=_,this.get(A),b(this),!0}const L=new E(A,R,_,x,M);return L.length>this[o]?(this[r]&&this[r](A,R),!1):(this[n]+=L.length,this[m].unshift(L),this[i].set(A,this[m].head),b(this),!0)}has(A){if(!this[i].has(A))return!1;const R=this[i].get(A).value;return!y(this,R)}get(A){return S(this,A,!0)}peek(A){return S(this,A,!1)}pop(){const A=this[m].tail;return A?(P(this,A),A.value):null}del(A){P(this,this[i].get(A))}load(A){this.reset();const R=Date.now();for(let M=A.length-1;M>=0;M--){const x=A[M],_=x.e||0;if(_===0)this.set(x.k,x.v);else{const L=_-R;L>0&&this.set(x.k,x.v,L)}}}prune(){this[i].forEach((A,R)=>S(this,R,!1))}}const S=(T,A,R)=>{const M=T[i].get(A);if(M){const x=M.value;if(y(T,x)){if(P(T,M),!T[d])return}else R&&(T[h]&&(M.value.now=Date.now()),T[m].unshiftNode(M));return x.value}},y=(T,A)=>{if(!A||!A.maxAge&&!T[l])return!1;const R=Date.now()-A.now;return A.maxAge?R>A.maxAge:T[l]&&R>T[l]},b=T=>{if(T[n]>T[o])for(let A=T[m].tail;T[n]>T[o]&&A!==null;){const R=A.prev;P(T,A),A=R}},P=(T,A)=>{if(A){const R=A.value;T[r]&&T[r](R.key,R.value),T[n]-=R.length,T[i].delete(R.key),T[m].removeNode(A)}};class E{constructor(A,R,M,x,_){this.key=A,this.value=R,this.length=M,this.now=x,this.maxAge=_||0}}const N=(T,A,R,M)=>{let x=R.value;y(T,x)&&(P(T,R),T[d]||(x=void 0)),x&&A.call(M,x.value,x.key,T)};O.exports=f},1155:()=>{(function(O){var v="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:a,environment:{pattern:RegExp("\\$"+v),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+v),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};O.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+v),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+v),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=O.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=g.variable[1].inside,p=0;p<o.length;p++)n[o[p]]=O.languages.bash[o[p]];O.languages.shell=O.languages.bash})(Prism)},6524:()=>{(function(O){function v(r){return RegExp("(^(?:"+r+"):[ 	]*(?![ 	]))[^]+","i")}O.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:O.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:v(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:O.languages.csp},{pattern:v(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:O.languages.hpkp},{pattern:v(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:O.languages.hsts},{pattern:v(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var a=O.languages,g={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css,"text/plain":a.plain},o={"application/json":!0,"application/xml":!0};function n(r){var c=r.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+c+"(?![+\\w.-])";return"(?:"+r+"|"+m+")"}var p;for(var d in g)if(g[d]){p=p||{};var l=o[d]?n(d):d;p[d.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:g[d]}}p&&O.languages.insertBefore("http","header",p)})(Prism)},2739:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},4495:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},501:(O,v,a)=>{var g=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var o=function(n){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,l={},r={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function E(N){return N instanceof c?new c(N.type,E(N.content),N.alias):Array.isArray(N)?N.map(E):N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(E){return Object.prototype.toString.call(E).slice(8,-1)},objId:function(E){return E.__id||Object.defineProperty(E,"__id",{value:++d}),E.__id},clone:function E(N,T){T=T||{};var A,R;switch(r.util.type(N)){case"Object":if(R=r.util.objId(N),T[R])return T[R];A={},T[R]=A;for(var M in N)N.hasOwnProperty(M)&&(A[M]=E(N[M],T));return A;case"Array":return R=r.util.objId(N),T[R]?T[R]:(A=[],T[R]=A,N.forEach(function(x,_){A[_]=E(x,T)}),A);default:return N}},getLanguage:function(E){for(;E;){var N=p.exec(E.className);if(N)return N[1].toLowerCase();E=E.parentElement}return"none"},setLanguage:function(E,N){E.className=E.className.replace(RegExp(p,"gi"),""),E.classList.add("language-"+N)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(A){var E=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack)||[])[1];if(E){var N=document.getElementsByTagName("script");for(var T in N)if(N[T].src==E)return N[T]}return null}},isActive:function(E,N,T){for(var A="no-"+N;E;){var R=E.classList;if(R.contains(N))return!0;if(R.contains(A))return!1;E=E.parentElement}return!!T}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(E,N){var T=r.util.clone(r.languages[E]);for(var A in N)T[A]=N[A];return T},insertBefore:function(E,N,T,A){A=A||r.languages;var R=A[E],M={};for(var x in R)if(R.hasOwnProperty(x)){if(x==N)for(var _ in T)T.hasOwnProperty(_)&&(M[_]=T[_]);T.hasOwnProperty(x)||(M[x]=R[x])}var L=A[E];return A[E]=M,r.languages.DFS(r.languages,function(U,j){j===L&&U!=E&&(this[U]=M)}),M},DFS:function E(N,T,A,R){R=R||{};var M=r.util.objId;for(var x in N)if(N.hasOwnProperty(x)){T.call(N,x,N[x],A||x);var _=N[x],L=r.util.type(_);L==="Object"&&!R[M(_)]?(R[M(_)]=!0,E(_,T,null,R)):L==="Array"&&!R[M(_)]&&(R[M(_)]=!0,E(_,T,x,R))}}},plugins:{},highlightAll:function(E,N){r.highlightAllUnder(document,E,N)},highlightAllUnder:function(E,N,T){var A={callback:T,container:E,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",A),A.elements=Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)),r.hooks.run("before-all-elements-highlight",A);for(var R=0,M;M=A.elements[R++];)r.highlightElement(M,N===!0,A.callback)},highlightElement:function(E,N,T){var A=r.util.getLanguage(E),R=r.languages[A];r.util.setLanguage(E,A);var M=E.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(M,A);var x=E.textContent,_={element:E,language:A,grammar:R,code:x};function L(j){_.highlightedCode=j,r.hooks.run("before-insert",_),_.element.innerHTML=_.highlightedCode,r.hooks.run("after-highlight",_),r.hooks.run("complete",_),T&&T.call(_.element)}if(r.hooks.run("before-sanity-check",_),M=_.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!_.code){r.hooks.run("complete",_),T&&T.call(_.element);return}if(r.hooks.run("before-highlight",_),!_.grammar){L(r.util.encode(_.code));return}if(N&&n.Worker){var U=new Worker(r.filename);U.onmessage=function(j){L(j.data)},U.postMessage(JSON.stringify({language:_.language,code:_.code,immediateClose:!0}))}else L(r.highlight(_.code,_.grammar,_.language))},highlight:function(E,N,T){var A={code:E,grammar:N,language:T};if(r.hooks.run("before-tokenize",A),!A.grammar)throw new Error('The language "'+A.language+'" has no grammar.');return A.tokens=r.tokenize(A.code,A.grammar),r.hooks.run("after-tokenize",A),c.stringify(r.util.encode(A.tokens),A.language)},tokenize:function(E,N){var T=N.rest;if(T){for(var A in T)N[A]=T[A];delete N.rest}var R=new h;return u(R,R.head,E),i(E,R,N,R.head,0),S(R)},hooks:{all:{},add:function(E,N){var T=r.hooks.all;T[E]=T[E]||[],T[E].push(N)},run:function(E,N){var T=r.hooks.all[E];if(!(!T||!T.length))for(var A=0,R;R=T[A++];)R(N)}},Token:c};n.Prism=r;function c(E,N,T,A){this.type=E,this.content=N,this.alias=T,this.length=(A||"").length|0}c.stringify=function E(N,T){if(typeof N=="string")return N;if(Array.isArray(N)){var A="";return N.forEach(function(L){A+=E(L,T)}),A}var R={type:N.type,content:E(N.content,T),tag:"span",classes:["token",N.type],attributes:{},language:T},M=N.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(R.classes,M):R.classes.push(M)),r.hooks.run("wrap",R);var x="";for(var _ in R.attributes)x+=" "+_+'="'+(R.attributes[_]||"").replace(/"/g,"&quot;")+'"';return"<"+R.tag+' class="'+R.classes.join(" ")+'"'+x+">"+R.content+"</"+R.tag+">"};function m(E,N,T,A){E.lastIndex=N;var R=E.exec(T);if(R&&A&&R[1]){var M=R[1].length;R.index+=M,R[0]=R[0].slice(M)}return R}function i(E,N,T,A,R,M){for(var x in T)if(!(!T.hasOwnProperty(x)||!T[x])){var _=T[x];_=Array.isArray(_)?_:[_];for(var L=0;L<_.length;++L){if(M&&M.cause==x+","+L)return;var U=_[L],j=U.inside,z=!!U.lookbehind,B=!!U.greedy,q=U.alias;if(B&&!U.pattern.global){var w=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,w+"g")}for(var H=U.pattern||U,V=A.next,ne=R;V!==N.tail&&!(M&&ne>=M.reach);ne+=V.value.length,V=V.next){var ae=V.value;if(N.length>E.length)return;if(!(ae instanceof c)){var de=1,te;if(B){if(te=m(H,ne,E,z),!te||te.index>=E.length)break;var it=te.index,ge=te.index+te[0].length,Ce=ne;for(Ce+=V.value.length;it>=Ce;)V=V.next,Ce+=V.value.length;if(Ce-=V.value.length,ne=Ce,V.value instanceof c)continue;for(var Fe=V;Fe!==N.tail&&(Ce<ge||typeof Fe.value=="string");Fe=Fe.next)de++,Ce+=Fe.value.length;de--,ae=E.slice(ne,Ce),te.index-=ne}else if(te=m(H,0,ae,z),!te)continue;var it=te.index,mt=te[0],ut=ae.slice(0,it),ht=ae.slice(it+mt.length),At=ne+ae.length;M&&At>M.reach&&(M.reach=At);var Re=V.prev;ut&&(Re=u(N,Re,ut),ne+=ut.length),f(N,Re,de);var Ct=new c(x,j?r.tokenize(mt,j):mt,q,mt);if(V=u(N,Re,Ct),ht&&u(N,V,ht),de>1){var Ue={cause:x+","+L,reach:At};i(E,N,T,V.prev,ne,Ue),M&&Ue.reach>M.reach&&(M.reach=Ue.reach)}}}}}}function h(){var E={value:null,prev:null,next:null},N={value:null,prev:E,next:null};E.next=N,this.head=E,this.tail=N,this.length=0}function u(E,N,T){var A=N.next,R={value:T,prev:N,next:A};return N.next=R,A.prev=R,E.length++,R}function f(E,N,T){for(var A=N.next,R=0;R<T&&A!==E.tail;R++)A=A.next;N.next=A,A.prev=N,E.length-=R}function S(E){for(var N=[],T=E.head.next;T!==E.tail;)N.push(T.value),T=T.next;return N}if(!n.document)return n.addEventListener&&(r.disableWorkerMessageHandler||n.addEventListener("message",function(E){var N=JSON.parse(E.data),T=N.language,A=N.code,R=N.immediateClose;n.postMessage(r.highlight(A,r.languages[T],T)),R&&n.close()},!1)),r;var y=r.util.currentScript();y&&(r.filename=y.src,y.hasAttribute("data-manual")&&(r.manual=!0));function b(){r.manual||r.highlightAll()}if(!r.manual){var P=document.readyState;P==="loading"||P==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return r}(g);O.exports&&(O.exports=o),typeof a.g!="undefined"&&(a.g.Prism=o),o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(p,d){var l={};l["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[d]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};r["language-"+d]={pattern:/[\s\S]+/,inside:o.languages[d]};var c={};c[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:r},o.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(n,p){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:o.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml,function(n){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var d=n.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(o),o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),o.languages.js=o.languages.javascript,function(){if(typeof o=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",p=function(y,b){return"\u2716 Error "+y+" while fetching file: "+b},d="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",c="loading",m="loaded",i="failed",h="pre[data-src]:not(["+r+'="'+m+'"]):not(['+r+'="'+c+'"])';function u(y,b,P){var E=new XMLHttpRequest;E.open("GET",y,!0),E.onreadystatechange=function(){E.readyState==4&&(E.status<400&&E.responseText?b(E.responseText):E.status>=400?P(p(E.status,E.statusText)):P(d))},E.send(null)}function f(y){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(b){var P=Number(b[1]),E=b[2],N=b[3];return E?N?[P,Number(N)]:[P,void 0]:[P,P]}}o.hooks.add("before-highlightall",function(y){y.selector+=", "+h}),o.hooks.add("before-sanity-check",function(y){var b=y.element;if(b.matches(h)){y.code="",b.setAttribute(r,c);var P=b.appendChild(document.createElement("CODE"));P.textContent=n;var E=b.getAttribute("data-src"),N=y.language;if(N==="none"){var T=(/\.(\w+)$/.exec(E)||[,"none"])[1];N=l[T]||T}o.util.setLanguage(P,N),o.util.setLanguage(b,N);var A=o.plugins.autoloader;A&&A.loadLanguages(N),u(E,function(R){b.setAttribute(r,m);var M=f(b.getAttribute("data-range"));if(M){var x=R.split(/\r\n?|\n/g),_=M[0],L=M[1]==null?x.length:M[1];_<0&&(_+=x.length),_=Math.max(0,Math.min(_-1,x.length)),L<0&&(L+=x.length),L=Math.max(0,Math.min(L,x.length)),R=x.slice(_,L).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(_+1))}P.textContent=R,o.highlightElement(P)},function(R){b.setAttribute(r,i),P.textContent=R})}}),o.plugins.fileHighlight={highlight:function(b){for(var P=(b||document).querySelectorAll(h),E=0,N;N=P[E++];)o.highlightElement(N)}};var S=!1;o.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),o.plugins.fileHighlight.highlight.apply(this,arguments)}}()},5011:(O,v,a)=>{const g=Symbol("SemVer ANY");class o{static get ANY(){return g}constructor(h,u){if(u=n(u),h instanceof o){if(h.loose===!!u.loose)return h;h=h.value}r("comparator",h,u),this.options=u,this.loose=!!u.loose,this.parse(h),this.semver===g?this.value="":this.value=this.operator+this.semver.version,r("comp",this)}parse(h){const u=this.options.loose?p[d.COMPARATORLOOSE]:p[d.COMPARATOR],f=h.match(u);if(!f)throw new TypeError(`Invalid comparator: ${h}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new c(f[2],this.options.loose):this.semver=g}toString(){return this.value}test(h){if(r("Comparator.test",h,this.options.loose),this.semver===g||h===g)return!0;if(typeof h=="string")try{h=new c(h,this.options)}catch(u){return!1}return l(h,this.operator,this.semver,this.options)}intersects(h,u){if(!(h instanceof o))throw new TypeError("a Comparator is required");if((!u||typeof u!="object")&&(u={loose:!!u,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new m(h.value,u).test(this.value);if(h.operator==="")return h.value===""?!0:new m(this.value,u).test(h.semver);const f=(this.operator===">="||this.operator===">")&&(h.operator===">="||h.operator===">"),S=(this.operator==="<="||this.operator==="<")&&(h.operator==="<="||h.operator==="<"),y=this.semver.version===h.semver.version,b=(this.operator===">="||this.operator==="<=")&&(h.operator===">="||h.operator==="<="),P=l(this.semver,"<",h.semver,u)&&(this.operator===">="||this.operator===">")&&(h.operator==="<="||h.operator==="<"),E=l(this.semver,">",h.semver,u)&&(this.operator==="<="||this.operator==="<")&&(h.operator===">="||h.operator===">");return f||S||y&&b||P||E}}O.exports=o;const n=a(7774),{re:p,t:d}=a(1636),l=a(2507),r=a(6208),c=a(9745),m=a(8165)},8165:(O,v,a)=>{class g{constructor(z,B){if(B=p(B),z instanceof g)return z.loose===!!B.loose&&z.includePrerelease===!!B.includePrerelease?z:new g(z.raw,B);if(z instanceof d)return this.raw=z.value,this.set=[[z]],this.format(),this;if(this.options=B,this.loose=!!B.loose,this.includePrerelease=!!B.includePrerelease,this.raw=z,this.set=z.split("||").map(q=>this.parseRange(q.trim())).filter(q=>q.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${z}`);if(this.set.length>1){const q=this.set[0];if(this.set=this.set.filter(w=>!f(w[0])),this.set.length===0)this.set=[q];else if(this.set.length>1){for(const w of this.set)if(w.length===1&&S(w[0])){this.set=[w];break}}}this.format()}format(){return this.range=this.set.map(z=>z.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(z){z=z.trim();const q=`parseRange:${Object.keys(this.options).join(",")}:${z}`,w=n.get(q);if(w)return w;const H=this.options.loose,V=H?c[m.HYPHENRANGELOOSE]:c[m.HYPHENRANGE];z=z.replace(V,L(this.options.includePrerelease)),l("hyphen replace",z),z=z.replace(c[m.COMPARATORTRIM],i),l("comparator trim",z),z=z.replace(c[m.TILDETRIM],h),z=z.replace(c[m.CARETTRIM],u),z=z.split(/\s+/).join(" ");let ne=z.split(" ").map(ge=>b(ge,this.options)).join(" ").split(/\s+/).map(ge=>_(ge,this.options));H&&(ne=ne.filter(ge=>(l("loose invalid filter",ge,this.options),!!ge.match(c[m.COMPARATORLOOSE])))),l("range list",ne);const ae=new Map,de=ne.map(ge=>new d(ge,this.options));for(const ge of de){if(f(ge))return[ge];ae.set(ge.value,ge)}ae.size>1&&ae.has("")&&ae.delete("");const te=[...ae.values()];return n.set(q,te),te}intersects(z,B){if(!(z instanceof g))throw new TypeError("a Range is required");return this.set.some(q=>y(q,B)&&z.set.some(w=>y(w,B)&&q.every(H=>w.every(V=>H.intersects(V,B)))))}test(z){if(!z)return!1;if(typeof z=="string")try{z=new r(z,this.options)}catch(B){return!1}for(let B=0;B<this.set.length;B++)if(U(this.set[B],z,this.options))return!0;return!1}}O.exports=g;const o=a(1863),n=new o({max:1e3}),p=a(7774),d=a(5011),l=a(6208),r=a(9745),{re:c,t:m,comparatorTrimReplace:i,tildeTrimReplace:h,caretTrimReplace:u}=a(1636),f=j=>j.value==="<0.0.0-0",S=j=>j.value==="",y=(j,z)=>{let B=!0;const q=j.slice();let w=q.pop();for(;B&&q.length;)B=q.every(H=>w.intersects(H,z)),w=q.pop();return B},b=(j,z)=>(l("comp",j,z),j=T(j,z),l("caret",j),j=E(j,z),l("tildes",j),j=R(j,z),l("xrange",j),j=x(j,z),l("stars",j),j),P=j=>!j||j.toLowerCase()==="x"||j==="*",E=(j,z)=>j.trim().split(/\s+/).map(B=>N(B,z)).join(" "),N=(j,z)=>{const B=z.loose?c[m.TILDELOOSE]:c[m.TILDE];return j.replace(B,(q,w,H,V,ne)=>{l("tilde",j,q,w,H,V,ne);let ae;return P(w)?ae="":P(H)?ae=`>=${w}.0.0 <${+w+1}.0.0-0`:P(V)?ae=`>=${w}.${H}.0 <${w}.${+H+1}.0-0`:ne?(l("replaceTilde pr",ne),ae=`>=${w}.${H}.${V}-${ne} <${w}.${+H+1}.0-0`):ae=`>=${w}.${H}.${V} <${w}.${+H+1}.0-0`,l("tilde return",ae),ae})},T=(j,z)=>j.trim().split(/\s+/).map(B=>A(B,z)).join(" "),A=(j,z)=>{l("caret",j,z);const B=z.loose?c[m.CARETLOOSE]:c[m.CARET],q=z.includePrerelease?"-0":"";return j.replace(B,(w,H,V,ne,ae)=>{l("caret",j,w,H,V,ne,ae);let de;return P(H)?de="":P(V)?de=`>=${H}.0.0${q} <${+H+1}.0.0-0`:P(ne)?H==="0"?de=`>=${H}.${V}.0${q} <${H}.${+V+1}.0-0`:de=`>=${H}.${V}.0${q} <${+H+1}.0.0-0`:ae?(l("replaceCaret pr",ae),H==="0"?V==="0"?de=`>=${H}.${V}.${ne}-${ae} <${H}.${V}.${+ne+1}-0`:de=`>=${H}.${V}.${ne}-${ae} <${H}.${+V+1}.0-0`:de=`>=${H}.${V}.${ne}-${ae} <${+H+1}.0.0-0`):(l("no pr"),H==="0"?V==="0"?de=`>=${H}.${V}.${ne}${q} <${H}.${V}.${+ne+1}-0`:de=`>=${H}.${V}.${ne}${q} <${H}.${+V+1}.0-0`:de=`>=${H}.${V}.${ne} <${+H+1}.0.0-0`),l("caret return",de),de})},R=(j,z)=>(l("replaceXRanges",j,z),j.split(/\s+/).map(B=>M(B,z)).join(" ")),M=(j,z)=>{j=j.trim();const B=z.loose?c[m.XRANGELOOSE]:c[m.XRANGE];return j.replace(B,(q,w,H,V,ne,ae)=>{l("xRange",j,q,w,H,V,ne,ae);const de=P(H),te=de||P(V),ge=te||P(ne),Ce=ge;return w==="="&&Ce&&(w=""),ae=z.includePrerelease?"-0":"",de?w===">"||w==="<"?q="<0.0.0-0":q="*":w&&Ce?(te&&(V=0),ne=0,w===">"?(w=">=",te?(H=+H+1,V=0,ne=0):(V=+V+1,ne=0)):w==="<="&&(w="<",te?H=+H+1:V=+V+1),w==="<"&&(ae="-0"),q=`${w+H}.${V}.${ne}${ae}`):te?q=`>=${H}.0.0${ae} <${+H+1}.0.0-0`:ge&&(q=`>=${H}.${V}.0${ae} <${H}.${+V+1}.0-0`),l("xRange return",q),q})},x=(j,z)=>(l("replaceStars",j,z),j.trim().replace(c[m.STAR],"")),_=(j,z)=>(l("replaceGTE0",j,z),j.trim().replace(c[z.includePrerelease?m.GTE0PRE:m.GTE0],"")),L=j=>(z,B,q,w,H,V,ne,ae,de,te,ge,Ce,Fe)=>(P(q)?B="":P(w)?B=`>=${q}.0.0${j?"-0":""}`:P(H)?B=`>=${q}.${w}.0${j?"-0":""}`:V?B=`>=${B}`:B=`>=${B}${j?"-0":""}`,P(de)?ae="":P(te)?ae=`<${+de+1}.0.0-0`:P(ge)?ae=`<${de}.${+te+1}.0-0`:Ce?ae=`<=${de}.${te}.${ge}-${Ce}`:j?ae=`<${de}.${te}.${+ge+1}-0`:ae=`<=${ae}`,`${B} ${ae}`.trim()),U=(j,z,B)=>{for(let q=0;q<j.length;q++)if(!j[q].test(z))return!1;if(z.prerelease.length&&!B.includePrerelease){for(let q=0;q<j.length;q++)if(l(j[q].semver),j[q].semver!==d.ANY&&j[q].semver.prerelease.length>0){const w=j[q].semver;if(w.major===z.major&&w.minor===z.minor&&w.patch===z.patch)return!0}return!1}return!0}},9745:(O,v,a)=>{const g=a(6208),{MAX_LENGTH:o,MAX_SAFE_INTEGER:n}=a(7730),{re:p,t:d}=a(1636),l=a(7774),{compareIdentifiers:r}=a(3311);class c{constructor(i,h){if(h=l(h),i instanceof c){if(i.loose===!!h.loose&&i.includePrerelease===!!h.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid Version: ${i}`);if(i.length>o)throw new TypeError(`version is longer than ${o} characters`);g("SemVer",i,h),this.options=h,this.loose=!!h.loose,this.includePrerelease=!!h.includePrerelease;const u=i.trim().match(h.loose?p[d.LOOSE]:p[d.FULL]);if(!u)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const S=+f;if(S>=0&&S<n)return S}return f}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(g("SemVer.compare",this.version,this.options,i),!(i instanceof c)){if(typeof i=="string"&&i===this.version)return 0;i=new c(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof c||(i=new c(i,this.options)),r(this.major,i.major)||r(this.minor,i.minor)||r(this.patch,i.patch)}comparePre(i){if(i instanceof c||(i=new c(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let h=0;do{const u=this.prerelease[h],f=i.prerelease[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return r(u,f)}while(++h)}compareBuild(i){i instanceof c||(i=new c(i,this.options));let h=0;do{const u=this.build[h],f=i.build[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return r(u,f)}while(++h)}inc(i,h){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",h);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",h);break;case"prepatch":this.prerelease.length=0,this.inc("patch",h),this.inc("pre",h);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",h),this.inc("pre",h);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let u=this.prerelease.length;for(;--u>=0;)typeof this.prerelease[u]=="number"&&(this.prerelease[u]++,u=-2);u===-1&&this.prerelease.push(0)}h&&(r(this.prerelease[0],h)===0?isNaN(this.prerelease[1])&&(this.prerelease=[h,0]):this.prerelease=[h,0]);break;default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}O.exports=c},915:(O,v,a)=>{const g=a(3173),o=(n,p)=>{const d=g(n.trim().replace(/^[=v]+/,""),p);return d?d.version:null};O.exports=o},2507:(O,v,a)=>{const g=a(9813),o=a(9475),n=a(3917),p=a(840),d=a(8923),l=a(1225),r=(c,m,i,h)=>{switch(m){case"===":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c===i;case"!==":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c!==i;case"":case"=":case"==":return g(c,i,h);case"!=":return o(c,i,h);case">":return n(c,i,h);case">=":return p(c,i,h);case"<":return d(c,i,h);case"<=":return l(c,i,h);default:throw new TypeError(`Invalid operator: ${m}`)}};O.exports=r},6752:(O,v,a)=>{const g=a(9745),o=a(3173),{re:n,t:p}=a(1636),d=(l,r)=>{if(l instanceof g)return l;if(typeof l=="number"&&(l=String(l)),typeof l!="string")return null;r=r||{};let c=null;if(!r.rtl)c=l.match(n[p.COERCE]);else{let m;for(;(m=n[p.COERCERTL].exec(l))&&(!c||c.index+c[0].length!==l.length);)(!c||m.index+m[0].length!==c.index+c[0].length)&&(c=m),n[p.COERCERTL].lastIndex=m.index+m[1].length+m[2].length;n[p.COERCERTL].lastIndex=-1}return c===null?null:o(`${c[2]}.${c[3]||"0"}.${c[4]||"0"}`,r)};O.exports=d},8303:(O,v,a)=>{const g=a(9745),o=(n,p,d)=>{const l=new g(n,d),r=new g(p,d);return l.compare(r)||l.compareBuild(r)};O.exports=o},1992:(O,v,a)=>{const g=a(1785),o=(n,p)=>g(n,p,!0);O.exports=o},1785:(O,v,a)=>{const g=a(9745),o=(n,p,d)=>new g(n,d).compare(new g(p,d));O.exports=o},7297:(O,v,a)=>{const g=a(3173),o=a(9813),n=(p,d)=>{if(o(p,d))return null;{const l=g(p),r=g(d),c=l.prerelease.length||r.prerelease.length,m=c?"pre":"",i=c?"prerelease":"";for(const h in l)if((h==="major"||h==="minor"||h==="patch")&&l[h]!==r[h])return m+h;return i}};O.exports=n},9813:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(n,p,d)===0;O.exports=o},3917:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(n,p,d)>0;O.exports=o},840:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(n,p,d)>=0;O.exports=o},6615:(O,v,a)=>{const g=a(9745),o=(n,p,d,l)=>{typeof d=="string"&&(l=d,d=void 0);try{return new g(n instanceof g?n.version:n,d).inc(p,l).version}catch(r){return null}};O.exports=o},8923:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(n,p,d)<0;O.exports=o},1225:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(n,p,d)<=0;O.exports=o},2671:(O,v,a)=>{const g=a(9745),o=(n,p)=>new g(n,p).major;O.exports=o},2265:(O,v,a)=>{const g=a(9745),o=(n,p)=>new g(n,p).minor;O.exports=o},9475:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(n,p,d)!==0;O.exports=o},3173:(O,v,a)=>{const{MAX_LENGTH:g}=a(7730),{re:o,t:n}=a(1636),p=a(9745),d=a(7774),l=(r,c)=>{if(c=d(c),r instanceof p)return r;if(typeof r!="string"||r.length>g||!(c.loose?o[n.LOOSE]:o[n.FULL]).test(r))return null;try{return new p(r,c)}catch(i){return null}};O.exports=l},469:(O,v,a)=>{const g=a(9745),o=(n,p)=>new g(n,p).patch;O.exports=o},5289:(O,v,a)=>{const g=a(3173),o=(n,p)=>{const d=g(n,p);return d&&d.prerelease.length?d.prerelease:null};O.exports=o},6259:(O,v,a)=>{const g=a(1785),o=(n,p,d)=>g(p,n,d);O.exports=o},9737:(O,v,a)=>{const g=a(8303),o=(n,p)=>n.sort((d,l)=>g(l,d,p));O.exports=o},1887:(O,v,a)=>{const g=a(8165),o=(n,p,d)=>{try{p=new g(p,d)}catch(l){return!1}return p.test(n)};O.exports=o},1435:(O,v,a)=>{const g=a(8303),o=(n,p)=>n.sort((d,l)=>g(d,l,p));O.exports=o},2659:(O,v,a)=>{const g=a(3173),o=(n,p)=>{const d=g(n,p);return d?d.version:null};O.exports=o},8408:(O,v,a)=>{const g=a(1636);O.exports={re:g.re,src:g.src,tokens:g.t,SEMVER_SPEC_VERSION:a(7730).SEMVER_SPEC_VERSION,SemVer:a(9745),compareIdentifiers:a(3311).compareIdentifiers,rcompareIdentifiers:a(3311).rcompareIdentifiers,parse:a(3173),valid:a(2659),clean:a(915),inc:a(6615),diff:a(7297),major:a(2671),minor:a(2265),patch:a(469),prerelease:a(5289),compare:a(1785),rcompare:a(6259),compareLoose:a(1992),compareBuild:a(8303),sort:a(1435),rsort:a(9737),gt:a(3917),lt:a(8923),eq:a(9813),neq:a(9475),gte:a(840),lte:a(1225),cmp:a(2507),coerce:a(6752),Comparator:a(5011),Range:a(8165),satisfies:a(1887),toComparators:a(4451),maxSatisfying:a(3204),minSatisfying:a(2421),minVersion:a(7562),validRange:a(4068),outside:a(2760),gtr:a(4531),ltr:a(4330),intersects:a(5714),simplifyRange:a(8275),subset:a(7109)}},7730:O=>{const v="2.0.0",g=Number.MAX_SAFE_INTEGER||9007199254740991,o=16;O.exports={SEMVER_SPEC_VERSION:v,MAX_LENGTH:256,MAX_SAFE_INTEGER:g,MAX_SAFE_COMPONENT_LENGTH:o}},6208:O=>{const v=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...a)=>console.error("SEMVER",...a):()=>{};O.exports=v},3311:O=>{const v=/^[0-9]+$/,a=(o,n)=>{const p=v.test(o),d=v.test(n);return p&&d&&(o=+o,n=+n),o===n?0:p&&!d?-1:d&&!p?1:o<n?-1:1},g=(o,n)=>a(n,o);O.exports={compareIdentifiers:a,rcompareIdentifiers:g}},7774:O=>{const v=["includePrerelease","loose","rtl"],a=g=>g?typeof g!="object"?{loose:!0}:v.filter(o=>g[o]).reduce((o,n)=>(o[n]=!0,o),{}):{};O.exports=a},1636:(O,v,a)=>{const{MAX_SAFE_COMPONENT_LENGTH:g}=a(7730),o=a(6208);v=O.exports={};const n=v.re=[],p=v.src=[],d=v.t={};let l=0;const r=(c,m,i)=>{const h=l++;o(c,h,m),d[c]=h,p[h]=m,n[h]=new RegExp(m,i?"g":void 0)};r("NUMERICIDENTIFIER","0|[1-9]\\d*"),r("NUMERICIDENTIFIERLOOSE","[0-9]+"),r("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),r("MAINVERSION",`(${p[d.NUMERICIDENTIFIER]})\\.(${p[d.NUMERICIDENTIFIER]})\\.(${p[d.NUMERICIDENTIFIER]})`),r("MAINVERSIONLOOSE",`(${p[d.NUMERICIDENTIFIERLOOSE]})\\.(${p[d.NUMERICIDENTIFIERLOOSE]})\\.(${p[d.NUMERICIDENTIFIERLOOSE]})`),r("PRERELEASEIDENTIFIER",`(?:${p[d.NUMERICIDENTIFIER]}|${p[d.NONNUMERICIDENTIFIER]})`),r("PRERELEASEIDENTIFIERLOOSE",`(?:${p[d.NUMERICIDENTIFIERLOOSE]}|${p[d.NONNUMERICIDENTIFIER]})`),r("PRERELEASE",`(?:-(${p[d.PRERELEASEIDENTIFIER]}(?:\\.${p[d.PRERELEASEIDENTIFIER]})*))`),r("PRERELEASELOOSE",`(?:-?(${p[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${p[d.PRERELEASEIDENTIFIERLOOSE]})*))`),r("BUILDIDENTIFIER","[0-9A-Za-z-]+"),r("BUILD",`(?:\\+(${p[d.BUILDIDENTIFIER]}(?:\\.${p[d.BUILDIDENTIFIER]})*))`),r("FULLPLAIN",`v?${p[d.MAINVERSION]}${p[d.PRERELEASE]}?${p[d.BUILD]}?`),r("FULL",`^${p[d.FULLPLAIN]}$`),r("LOOSEPLAIN",`[v=\\s]*${p[d.MAINVERSIONLOOSE]}${p[d.PRERELEASELOOSE]}?${p[d.BUILD]}?`),r("LOOSE",`^${p[d.LOOSEPLAIN]}$`),r("GTLT","((?:<|>)?=?)"),r("XRANGEIDENTIFIERLOOSE",`${p[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),r("XRANGEIDENTIFIER",`${p[d.NUMERICIDENTIFIER]}|x|X|\\*`),r("XRANGEPLAIN",`[v=\\s]*(${p[d.XRANGEIDENTIFIER]})(?:\\.(${p[d.XRANGEIDENTIFIER]})(?:\\.(${p[d.XRANGEIDENTIFIER]})(?:${p[d.PRERELEASE]})?${p[d.BUILD]}?)?)?`),r("XRANGEPLAINLOOSE",`[v=\\s]*(${p[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[d.XRANGEIDENTIFIERLOOSE]})(?:${p[d.PRERELEASELOOSE]})?${p[d.BUILD]}?)?)?`),r("XRANGE",`^${p[d.GTLT]}\\s*${p[d.XRANGEPLAIN]}$`),r("XRANGELOOSE",`^${p[d.GTLT]}\\s*${p[d.XRANGEPLAINLOOSE]}$`),r("COERCE",`(^|[^\\d])(\\d{1,${g}})(?:\\.(\\d{1,${g}}))?(?:\\.(\\d{1,${g}}))?(?:$|[^\\d])`),r("COERCERTL",p[d.COERCE],!0),r("LONETILDE","(?:~>?)"),r("TILDETRIM",`(\\s*)${p[d.LONETILDE]}\\s+`,!0),v.tildeTrimReplace="$1~",r("TILDE",`^${p[d.LONETILDE]}${p[d.XRANGEPLAIN]}$`),r("TILDELOOSE",`^${p[d.LONETILDE]}${p[d.XRANGEPLAINLOOSE]}$`),r("LONECARET","(?:\\^)"),r("CARETTRIM",`(\\s*)${p[d.LONECARET]}\\s+`,!0),v.caretTrimReplace="$1^",r("CARET",`^${p[d.LONECARET]}${p[d.XRANGEPLAIN]}$`),r("CARETLOOSE",`^${p[d.LONECARET]}${p[d.XRANGEPLAINLOOSE]}$`),r("COMPARATORLOOSE",`^${p[d.GTLT]}\\s*(${p[d.LOOSEPLAIN]})$|^$`),r("COMPARATOR",`^${p[d.GTLT]}\\s*(${p[d.FULLPLAIN]})$|^$`),r("COMPARATORTRIM",`(\\s*)${p[d.GTLT]}\\s*(${p[d.LOOSEPLAIN]}|${p[d.XRANGEPLAIN]})`,!0),v.comparatorTrimReplace="$1$2$3",r("HYPHENRANGE",`^\\s*(${p[d.XRANGEPLAIN]})\\s+-\\s+(${p[d.XRANGEPLAIN]})\\s*$`),r("HYPHENRANGELOOSE",`^\\s*(${p[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${p[d.XRANGEPLAINLOOSE]})\\s*$`),r("STAR","(<|>)?=?\\s*\\*"),r("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),r("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},4531:(O,v,a)=>{const g=a(2760),o=(n,p,d)=>g(n,p,">",d);O.exports=o},5714:(O,v,a)=>{const g=a(8165),o=(n,p,d)=>(n=new g(n,d),p=new g(p,d),n.intersects(p));O.exports=o},4330:(O,v,a)=>{const g=a(2760),o=(n,p,d)=>g(n,p,"<",d);O.exports=o},3204:(O,v,a)=>{const g=a(9745),o=a(8165),n=(p,d,l)=>{let r=null,c=null,m=null;try{m=new o(d,l)}catch(i){return null}return p.forEach(i=>{m.test(i)&&(!r||c.compare(i)===-1)&&(r=i,c=new g(r,l))}),r};O.exports=n},2421:(O,v,a)=>{const g=a(9745),o=a(8165),n=(p,d,l)=>{let r=null,c=null,m=null;try{m=new o(d,l)}catch(i){return null}return p.forEach(i=>{m.test(i)&&(!r||c.compare(i)===1)&&(r=i,c=new g(r,l))}),r};O.exports=n},7562:(O,v,a)=>{const g=a(9745),o=a(8165),n=a(3917),p=(d,l)=>{d=new o(d,l);let r=new g("0.0.0");if(d.test(r)||(r=new g("0.0.0-0"),d.test(r)))return r;r=null;for(let c=0;c<d.set.length;++c){const m=d.set[c];let i=null;m.forEach(h=>{const u=new g(h.semver.version);switch(h.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!i||n(u,i))&&(i=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${h.operator}`)}}),i&&(!r||n(r,i))&&(r=i)}return r&&d.test(r)?r:null};O.exports=p},2760:(O,v,a)=>{const g=a(9745),o=a(5011),{ANY:n}=o,p=a(8165),d=a(1887),l=a(3917),r=a(8923),c=a(1225),m=a(840),i=(h,u,f,S)=>{h=new g(h,S),u=new p(u,S);let y,b,P,E,N;switch(f){case">":y=l,b=c,P=r,E=">",N=">=";break;case"<":y=r,b=m,P=l,E="<",N="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(d(h,u,S))return!1;for(let T=0;T<u.set.length;++T){const A=u.set[T];let R=null,M=null;if(A.forEach(x=>{x.semver===n&&(x=new o(">=0.0.0")),R=R||x,M=M||x,y(x.semver,R.semver,S)?R=x:P(x.semver,M.semver,S)&&(M=x)}),R.operator===E||R.operator===N||(!M.operator||M.operator===E)&&b(h,M.semver))return!1;if(M.operator===N&&P(h,M.semver))return!1}return!0};O.exports=i},8275:(O,v,a)=>{const g=a(1887),o=a(1785);O.exports=(n,p,d)=>{const l=[];let r=null,c=null;const m=n.sort((f,S)=>o(f,S,d));for(const f of m)g(f,p,d)?(c=f,r||(r=f)):(c&&l.push([r,c]),c=null,r=null);r&&l.push([r,null]);const i=[];for(const[f,S]of l)f===S?i.push(f):!S&&f===m[0]?i.push("*"):S?f===m[0]?i.push(`<=${S}`):i.push(`${f} - ${S}`):i.push(`>=${f}`);const h=i.join(" || "),u=typeof p.raw=="string"?p.raw:String(p);return h.length<u.length?h:p}},7109:(O,v,a)=>{const g=a(8165),o=a(5011),{ANY:n}=o,p=a(1887),d=a(1785),l=(i,h,u={})=>{if(i===h)return!0;i=new g(i,u),h=new g(h,u);let f=!1;e:for(const S of i.set){for(const y of h.set){const b=r(S,y,u);if(f=f||b!==null,b)continue e}if(f)return!1}return!0},r=(i,h,u)=>{if(i===h)return!0;if(i.length===1&&i[0].semver===n){if(h.length===1&&h[0].semver===n)return!0;u.includePrerelease?i=[new o(">=0.0.0-0")]:i=[new o(">=0.0.0")]}if(h.length===1&&h[0].semver===n){if(u.includePrerelease)return!0;h=[new o(">=0.0.0")]}const f=new Set;let S,y;for(const M of i)M.operator===">"||M.operator===">="?S=c(S,M,u):M.operator==="<"||M.operator==="<="?y=m(y,M,u):f.add(M.semver);if(f.size>1)return null;let b;if(S&&y){if(b=d(S.semver,y.semver,u),b>0)return null;if(b===0&&(S.operator!==">="||y.operator!=="<="))return null}for(const M of f){if(S&&!p(M,String(S),u)||y&&!p(M,String(y),u))return null;for(const x of h)if(!p(M,String(x),u))return!1;return!0}let P,E,N,T,A=y&&!u.includePrerelease&&y.semver.prerelease.length?y.semver:!1,R=S&&!u.includePrerelease&&S.semver.prerelease.length?S.semver:!1;A&&A.prerelease.length===1&&y.operator==="<"&&A.prerelease[0]===0&&(A=!1);for(const M of h){if(T=T||M.operator===">"||M.operator===">=",N=N||M.operator==="<"||M.operator==="<=",S){if(R&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===R.major&&M.semver.minor===R.minor&&M.semver.patch===R.patch&&(R=!1),M.operator===">"||M.operator===">="){if(P=c(S,M,u),P===M&&P!==S)return!1}else if(S.operator===">="&&!p(S.semver,String(M),u))return!1}if(y){if(A&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===A.major&&M.semver.minor===A.minor&&M.semver.patch===A.patch&&(A=!1),M.operator==="<"||M.operator==="<="){if(E=m(y,M,u),E===M&&E!==y)return!1}else if(y.operator==="<="&&!p(y.semver,String(M),u))return!1}if(!M.operator&&(y||S)&&b!==0)return!1}return!(S&&N&&!y&&b!==0||y&&T&&!S&&b!==0||R||A)},c=(i,h,u)=>{if(!i)return h;const f=d(i.semver,h.semver,u);return f>0?i:f<0||h.operator===">"&&i.operator===">="?h:i},m=(i,h,u)=>{if(!i)return h;const f=d(i.semver,h.semver,u);return f<0?i:f>0||h.operator==="<"&&i.operator==="<="?h:i};O.exports=l},4451:(O,v,a)=>{const g=a(8165),o=(n,p)=>new g(n,p).set.map(d=>d.map(l=>l.value).join(" ").trim().split(" "));O.exports=o},4068:(O,v,a)=>{const g=a(8165),o=(n,p)=>{try{return new g(n,p).range||"*"}catch(d){return null}};O.exports=o},5338:O=>{"use strict";O.exports=function(v){v.prototype[Symbol.iterator]=function*(){for(let a=this.head;a;a=a.next)yield a.value}}},4613:(O,v,a)=>{"use strict";O.exports=g,g.Node=d,g.create=g;function g(l){var r=this;if(r instanceof g||(r=new g),r.tail=null,r.head=null,r.length=0,l&&typeof l.forEach=="function")l.forEach(function(i){r.push(i)});else if(arguments.length>0)for(var c=0,m=arguments.length;c<m;c++)r.push(arguments[c]);return r}g.prototype.removeNode=function(l){if(l.list!==this)throw new Error("removing node which does not belong to this list");var r=l.next,c=l.prev;return r&&(r.prev=c),c&&(c.next=r),l===this.head&&(this.head=r),l===this.tail&&(this.tail=c),l.list.length--,l.next=null,l.prev=null,l.list=null,r},g.prototype.unshiftNode=function(l){if(l!==this.head){l.list&&l.list.removeNode(l);var r=this.head;l.list=this,l.next=r,r&&(r.prev=l),this.head=l,this.tail||(this.tail=l),this.length++}},g.prototype.pushNode=function(l){if(l!==this.tail){l.list&&l.list.removeNode(l);var r=this.tail;l.list=this,l.prev=r,r&&(r.next=l),this.tail=l,this.head||(this.head=l),this.length++}},g.prototype.push=function(){for(var l=0,r=arguments.length;l<r;l++)n(this,arguments[l]);return this.length},g.prototype.unshift=function(){for(var l=0,r=arguments.length;l<r;l++)p(this,arguments[l]);return this.length},g.prototype.pop=function(){if(!!this.tail){var l=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,l}},g.prototype.shift=function(){if(!!this.head){var l=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,l}},g.prototype.forEach=function(l,r){r=r||this;for(var c=this.head,m=0;c!==null;m++)l.call(r,c.value,m,this),c=c.next},g.prototype.forEachReverse=function(l,r){r=r||this;for(var c=this.tail,m=this.length-1;c!==null;m--)l.call(r,c.value,m,this),c=c.prev},g.prototype.get=function(l){for(var r=0,c=this.head;c!==null&&r<l;r++)c=c.next;if(r===l&&c!==null)return c.value},g.prototype.getReverse=function(l){for(var r=0,c=this.tail;c!==null&&r<l;r++)c=c.prev;if(r===l&&c!==null)return c.value},g.prototype.map=function(l,r){r=r||this;for(var c=new g,m=this.head;m!==null;)c.push(l.call(r,m.value,this)),m=m.next;return c},g.prototype.mapReverse=function(l,r){r=r||this;for(var c=new g,m=this.tail;m!==null;)c.push(l.call(r,m.value,this)),m=m.prev;return c},g.prototype.reduce=function(l,r){var c,m=this.head;if(arguments.length>1)c=r;else if(this.head)m=this.head.next,c=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;m!==null;i++)c=l(c,m.value,i),m=m.next;return c},g.prototype.reduceReverse=function(l,r){var c,m=this.tail;if(arguments.length>1)c=r;else if(this.tail)m=this.tail.prev,c=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;m!==null;i--)c=l(c,m.value,i),m=m.prev;return c},g.prototype.toArray=function(){for(var l=new Array(this.length),r=0,c=this.head;c!==null;r++)l[r]=c.value,c=c.next;return l},g.prototype.toArrayReverse=function(){for(var l=new Array(this.length),r=0,c=this.tail;c!==null;r++)l[r]=c.value,c=c.prev;return l},g.prototype.slice=function(l,r){r=r||this.length,r<0&&(r+=this.length),l=l||0,l<0&&(l+=this.length);var c=new g;if(r<l||r<0)return c;l<0&&(l=0),r>this.length&&(r=this.length);for(var m=0,i=this.head;i!==null&&m<l;m++)i=i.next;for(;i!==null&&m<r;m++,i=i.next)c.push(i.value);return c},g.prototype.sliceReverse=function(l,r){r=r||this.length,r<0&&(r+=this.length),l=l||0,l<0&&(l+=this.length);var c=new g;if(r<l||r<0)return c;l<0&&(l=0),r>this.length&&(r=this.length);for(var m=this.length,i=this.tail;i!==null&&m>r;m--)i=i.prev;for(;i!==null&&m>l;m--,i=i.prev)c.push(i.value);return c},g.prototype.splice=function(l,r,...c){l>this.length&&(l=this.length-1),l<0&&(l=this.length+l);for(var m=0,i=this.head;i!==null&&m<l;m++)i=i.next;for(var h=[],m=0;i&&m<r;m++)h.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var m=0;m<c.length;m++)i=o(this,i,c[m]);return h},g.prototype.reverse=function(){for(var l=this.head,r=this.tail,c=l;c!==null;c=c.prev){var m=c.prev;c.prev=c.next,c.next=m}return this.head=r,this.tail=l,this};function o(l,r,c){var m=r===l.head?new d(c,null,r,l):new d(c,r,r.next,l);return m.next===null&&(l.tail=m),m.prev===null&&(l.head=m),l.length++,m}function n(l,r){l.tail=new d(r,l.tail,null,l),l.head||(l.head=l.tail),l.length++}function p(l,r){l.head=new d(r,null,l.head,l),l.tail||(l.tail=l.head),l.length++}function d(l,r,c,m){if(!(this instanceof d))return new d(l,r,c,m);this.list=m,this.value=l,r?(r.next=this,this.prev=r):this.prev=null,c?(c.prev=this,this.next=c):this.next=null}try{a(5338)(g)}catch(l){}}},Or={};function ot(O){var v=Or[O];if(v!==void 0)return v.exports;var a=Or[O]={id:O,loaded:!1,exports:{}};return Zs[O].call(a.exports,a,a.exports,ot),a.loaded=!0,a.exports}ot.n=O=>{var v=O&&O.__esModule?()=>O.default:()=>O;return ot.d(v,{a:v}),v},ot.d=(O,v)=>{for(var a in v)ot.o(v,a)&&!ot.o(O,a)&&Object.defineProperty(O,a,{enumerable:!0,get:v[a]})},ot.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(O){if(typeof window=="object")return window}}(),ot.o=(O,v)=>Object.prototype.hasOwnProperty.call(O,v),ot.nmd=O=>(O.paths=[],O.children||(O.children=[]),O);var a0={};(()=>{var Bt;"use strict";var O=ot(5814),v=ot.n(O),a=ot(4619),g=ot(8408),o=ot.n(g),n=ot(3509),p=ot.n(n),d=ot(5629),l=ot(1662),r=ot(7513),c=ot(2623),m=ot(9365),i=ot(501),h=ot.n(i),u=ot(1155),f=ot(2739),S=ot(6524),y=ot(4495);class b{hydrate(pe,Ne){const De=new URL(pe,typeof window=="undefined"?"https://dummy.base":window.location.origin),ie={};De.pathname.split("/").forEach((ye,he)=>{if(ye.charAt(0)===":"){const be=ye.slice(1);typeof Ne[be]!="undefined"&&(De.pathname=De.pathname.replace(ye,encodeURIComponent(Ne[be])),ie[be]=Ne[be])}});for(const ye in Ne)(typeof ie[ye]=="undefined"||De.searchParams.has(ye))&&De.searchParams.set(ye,Ne[ye]);return De.toString()}}function P(){v()(".sample-request-send").off("click"),v()(".sample-request-send").on("click",function(je){je.preventDefault();const pe=v()(this).parents("article"),Ne=pe.data("group"),De=pe.data("name"),ie=pe.data("version");A(Ne,De,ie,v()(this).data("type"))}),v()(".sample-request-clear").off("click"),v()(".sample-request-clear").on("click",function(je){je.preventDefault();const pe=v()(this).parents("article"),Ne=pe.data("group"),De=pe.data("name"),ie=pe.data("version");R(Ne,De,ie)})}function E(je){return je.replace(/{(.+?)}/g,":$1")}function N(je,pe){const Ne=je.find(".sample-request-url").val(),De=new b,ie=E(Ne);return De.hydrate(ie,pe)}function T(je){const pe={};["header","query","body"].forEach(De=>{const ie={};try{je.find(v()(`[data-family="${De}"]:visible`)).each((ye,he)=>{const be=he.dataset.name;let Ze=he.value;if(he.type==="checkbox")if(he.checked)Ze="on";else return!0;if(!Ze&&!he.dataset.optional&&he.type!=="checkbox")return v()(he).addClass("border-danger"),!0;ie[be]=Ze})}catch(ye){return}pe[De]=ie});const Ne=je.find(v()('[data-family="body-json"]'));return Ne.is(":visible")?(pe.body=Ne.val(),pe.header["Content-Type"]="application/json"):pe.header["Content-Type"]="multipart/form-data",pe}function A(je,pe,Ne,De){const ie=v()(`article[data-group="${je}"][data-name="${pe}"][data-version="${Ne}"]`),ye=T(ie),he={};if(he.url=N(ie,ye.query),he.headers=ye.header,he.headers["Content-Type"]==="application/json")he.data=ye.body;else if(he.headers["Content-Type"]==="multipart/form-data"){const Ke=new FormData;for(const[Je,Pe]of Object.entries(ye.body))Ke.append(Je,Pe);he.data=Ke,he.processData=!1,(De==="get"||De==="delete")&&delete he.headers["Content-Type"]}he.type=De,he.success=be,he.error=Ze,v().ajax(he),ie.find(".sample-request-response").fadeTo(200,1),ie.find(".sample-request-response-json").html("Loading...");function be(Ke,Je,Pe){let $e;try{$e=JSON.parse(Pe.responseText),$e=JSON.stringify($e,null,4)}catch(Qe){$e=Pe.responseText}ie.find(".sample-request-response-json").text($e),h().highlightAll()}function Ze(Ke,Je,Pe){let $e="Error "+Ke.status+": "+Pe,Qe;try{Qe=JSON.parse(Ke.responseText),Qe=JSON.stringify(Qe,null,4)}catch(Xe){Qe=Ke.responseText}Qe&&($e+=`
`+Qe),ie.find(".sample-request-response").is(":visible")&&ie.find(".sample-request-response").fadeTo(1,.1),ie.find(".sample-request-response").fadeTo(250,1),ie.find(".sample-request-response-json").text($e),h().highlightAll()}}function R(je,pe,Ne){const De=v()('article[data-group="'+je+'"][data-name="'+pe+'"][data-version="'+Ne+'"]');De.find(".sample-request-response-json").html(""),De.find(".sample-request-response").hide(),De.find(".sample-request-input").each((ye,he)=>{he.value=he.placeholder!==he.dataset.name?he.placeholder:""});const ie=De.find(".sample-request-url");ie.val(ie.prop("defaultValue"))}const de={ca:{"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:",Type:"Tipus",url:"url"},cs:{"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:",Type:"Typ",url:"url"},de:{"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:",Type:"Typ",url:"url"},es:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:",Type:"Tipo",url:"url"},en:{},fr:{"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :",Type:"Type",url:"url"},it:{"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:",Type:"Tipo",url:"url"},nl:{"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:",Type:"Type",url:"url"},pl:{"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:",Type:"Typ",url:"url"},pt:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:",Type:"Tipo",url:"url"},ro:{"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:",Type:"Tip",url:"url"},ru:{"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:",Type:"\u0422\u0438\u043F",url:"URL"},tr:{"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:",Type:"Tip",url:"url"},vi:{"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt"},zh:{"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",Description:"\u63CF\u8FF0",Field:"\u5B57\u6BB5",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570",Headers:"\u8BF7\u6C42\u5934","Permission:":"\u6743\u9650:",Response:"\u8FD4\u56DE",required:"\u5FC5\u9700\u7684",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:",Type:"\u7C7B\u578B",url:"\u5730\u5740"}},te=((Bt=window.navigator.language)!=null?Bt:"en-GB").toLowerCase().substr(0,2);let ge=de[te]?de[te]:de.en;function Ce(je){const pe=ge[je];return pe===void 0?je:pe}function Fe(je){ge=de[je]}const{defaultsDeep:it}=a,mt=(je,pe)=>{const Ne=(De,ie,ye,he)=>({[ie]:ye+1<he.length?De:pe});return je.reduceRight(Ne,{})},ut=je=>{let pe={};return je.forEach(Ne=>{const De=mt(Ne[0].split("."),Ne[1]);pe=it(pe,De)}),ht(pe)};function ht(je){return JSON.stringify(je,null,4)}function At(je){const pe=[];return je.forEach(Ne=>{let De;switch(Ne.type.toLowerCase()){case"string":De=Ne.defaultValue||"";break;case"boolean":De=Boolean(Ne.defaultValue)||!1;break;case"number":De=parseInt(Ne.defaultValue||0,10);break;case"date":De=Ne.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}pe.push([Ne.field,De])}),ut(pe)}var Re=ot(6770);class Ct extends Re{constructor(pe){super(),this.testMode=pe}diffMain(pe,Ne,De,ie){return super.diff_main(this._stripHtml(pe),this._stripHtml(Ne),De,ie)}diffPrettyHtml(pe){const Ne=[],De=/&/g,ie=/</g,ye=/>/g,he=/\n/g;for(let be=0;be<pe.length;be++){const Ze=pe[be][0],Je=pe[be][1].replace(De,"&amp;").replace(ie,"&lt;").replace(ye,"&gt;").replace(he,"&para;<br>");switch(Ze){case Re.DIFF_INSERT:Ne[be]="<ins>"+Je+"</ins>";break;case Re.DIFF_DELETE:Ne[be]="<del>"+Je+"</del>";break;case Re.DIFF_EQUAL:Ne[be]="<span>"+Je+"</span>";break}}return Ne.join("")}diffCleanupSemantic(pe){return this.diff_cleanupSemantic(pe)}_stripHtml(pe){if(this.testMode)return pe;const Ne=document.createElement("div");return Ne.innerHTML=pe,Ne.textContent||Ne.innerText||""}}function Ue(){p().registerHelper("markdown",function(ie){return ie&&(ie=ie.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(ye,he,be,Ze,Ke,Je,Pe){const $e=Ze||Je+"/"+Pe;return'<a href="#api-'+Je+"-"+Pe+'">'+$e+"</a>"}),ie)}),p().registerHelper("setInputType",function(ie){switch(ie){case"File":case"Email":case"Color":case"Number":case"Date":return ie[0].toLowerCase()+ie.substring(1);case"Boolean":return"checkbox";default:return"text"}});let je;p().registerHelper("startTimer",function(ie){return je=new Date,""}),p().registerHelper("stopTimer",function(ie){return console.log(new Date-je),""}),p().registerHelper("__",function(ie){return Ce(ie)}),p().registerHelper("cl",function(ie){return console.log(ie),""}),p().registerHelper("underscoreToSpace",function(ie){return ie.replace(/(_+)/g," ")}),p().registerHelper("removeDblQuotes",function(ie){return ie.replace(/"/g,"")}),p().registerHelper("assign",function(ie){if(arguments.length>0){const ye=typeof arguments[1];let he=null;(ye==="string"||ye==="number"||ye==="boolean")&&(he=arguments[1]),p().registerHelper(ie,function(){return he})}return""}),p().registerHelper("nl2br",function(ie){return Ne(ie)}),p().registerHelper("ifCond",function(ie,ye,he,be){switch(ye){case"==":return ie==he?be.fn(this):be.inverse(this);case"===":return ie===he?be.fn(this):be.inverse(this);case"!=":return ie!=he?be.fn(this):be.inverse(this);case"!==":return ie!==he?be.fn(this):be.inverse(this);case"<":return ie<he?be.fn(this):be.inverse(this);case"<=":return ie<=he?be.fn(this):be.inverse(this);case">":return ie>he?be.fn(this):be.inverse(this);case">=":return ie>=he?be.fn(this):be.inverse(this);case"&&":return ie&&he?be.fn(this):be.inverse(this);case"||":return ie||he?be.fn(this):be.inverse(this);default:return be.inverse(this)}});const pe={};p().registerHelper("subTemplate",function(ie,ye){pe[ie]||(pe[ie]=p().compile(document.getElementById("template-"+ie).innerHTML));const he=pe[ie],be=v().extend({},this,ye.hash);return new(p()).SafeString(he(be))}),p().registerHelper("toLowerCase",function(ie){return ie&&typeof ie=="string"?ie.toLowerCase():""}),p().registerHelper("splitFill",function(ie,ye,he){const be=ie.split(ye);return new Array(be.length).join(he)+be[be.length-1]});function Ne(ie){return(""+ie).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,ye=>ye.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}p().registerHelper("each_compare_list_field",function(ie,ye,he){const be=he.hash.field,Ze=[];ie&&ie.forEach(function(Je){const Pe=Je;Pe.key=Je[be],Ze.push(Pe)});const Ke=[];return ye&&ye.forEach(function(Je){const Pe=Je;Pe.key=Je[be],Ke.push(Pe)}),De("key",Ze,Ke,he)}),p().registerHelper("each_compare_keys",function(ie,ye,he){const be=[];ie&&Object.keys(ie).forEach(function(Je){const Pe={};Pe.value=ie[Je],Pe.key=Je,be.push(Pe)});const Ze=[];return ye&&Object.keys(ye).forEach(function(Je){const Pe={};Pe.value=ye[Je],Pe.key=Je,Ze.push(Pe)}),De("key",be,Ze,he)}),p().registerHelper("body2json",function(ie,ye){return At(ie)}),p().registerHelper("each_compare_field",function(ie,ye,he){return De("field",ie,ye,he)}),p().registerHelper("each_compare_title",function(ie,ye,he){return De("title",ie,ye,he)}),p().registerHelper("reformat",function(ie,ye){if(ye==="json")try{return JSON.stringify(JSON.parse(ie.trim()),null,"    ")}catch(he){}return ie}),p().registerHelper("showDiff",function(ie,ye,he){let be="";if(ie===ye)be=ie;else{if(!ie)return ye;if(!ye)return ie;const Ze=new Ct,Ke=Ze.diffMain(ye,ie);Ze.diffCleanupSemantic(Ke),be=Ze.diffPrettyHtml(Ke),be=be.replace(/&para;/gm,"")}return he==="nl2br"&&(be=Ne(be)),be});function De(ie,ye,he,be){const Ze=[];let Ke=0;ye&&ye.forEach(function($e){let Qe=!1;if(he&&he.forEach(function(Xe){if($e[ie]===Xe[ie]){const zt={typeSame:!0,source:$e,compare:Xe,index:Ke};Ze.push(zt),Qe=!0,Ke++}}),!Qe){const Xe={typeIns:!0,source:$e,index:Ke};Ze.push(Xe),Ke++}}),he&&he.forEach(function($e){let Qe=!1;if(ye&&ye.forEach(function(Xe){Xe[ie]===$e[ie]&&(Qe=!0)}),!Qe){const Xe={typeDel:!0,compare:$e,index:Ke};Ze.push(Xe),Ke++}});let Je="";const Pe=Ze.length;for(const $e in Ze)parseInt($e,10)===Pe-1&&(Ze[$e]._last=!0),Je=Je+be.fn(Ze[$e]);return Je}}document.addEventListener("DOMContentLoaded",()=>{We(),P(),h().highlightAll()});function We(){var Z;let je=[{type:"post",url:"/configurations/special/files/providers/loads",title:"Consulta configuraci\xF3n",name:"Consulta_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener la configuracion de un archivo especial por su pk y sk</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto</p>"}]},examples:[{title:"Request-Example:",content:` 
{
    "pk": "ean_provider#1234568",
    "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con la configuraci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"typeOfReport",description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,field:"generationFrequency",description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado de la configuraci\xF3n</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {
        "pk": "ean_provider#1234568",
        "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31",
        "eanProvider": "1234568",
        "country": "CO",
        "typeOfReport": "sales",
        "generationFrequency": "Mensual",
        "generationDay": "12",
        "typeOfDataGrouping": "Diario",
        "amountOfPeriodsToGenerate": 1,
        "checkTrader": 1,
        "checkPointSale": 1,
        "checkChanel": 1,
        "checkFormat": 1,
        "checkDepartamentState": 0,
        "checkCity": 0,
        "checkSalesForceHierarchy": 0,
        "checkSalesMan": 0,
        "checkCategoriesProduct": 0,
        "checkProduct": 0,
        "checkBrand": 0,
        "checkColor": 0,
        "checkSize": 0,
        "checkDispatchUnit": 0,
        "checkStandardUnit": 0,
        "checkWeight": 0,
        "checkVolume": 0,
        "state": "INACTIVO",
        "creationUser": null,
        "creationDate": null,
        "modificationDate": null,
        "modificationUser": null
    },
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/configurations/special/files",title:"Editar configuraci\xF3n",name:"Editar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite editar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido del usuario logueado que esta editando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "ean_provider#1234568",
    "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31",
    "eanProvider": "1234568",
    "country": "CO",
    "typeOfReport": "sales",
    "generationFrequency": "Mensual",
    "generationDay": "12",
    "typeOfDataGrouping": "Diario",
    "amountOfPeriodsToGenerate": 1,
    "checkTrader": 1,
    "checkPointSale": 1,
    "checkChanel": 1,
    "checkFormat": 1,
    "checkDepartamentState": 0,
    "checkCity": 0,
    "checkSalesForceHierarchy": 0,
    "checkSalesMan": 0,
    "checkCategoriesProduct": 0,
    "checkProduct": 0,
    "checkBrand": 0,
    "checkColor": 0,
    "checkSize": 0,
    "checkDispatchUnit": 0,
    "checkStandardUnit": 0,
    "checkWeight": 0,
    "checkVolume": 0,
    "state": "ACTIVO",
    "modificationUser": "francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Cambios guardados correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "A\xFAn no se ha configurado una ruta para la entrega del Archivo especial.
                    En caso de persistir este evento por favor comunicarse 
                    con Soporte https://soporte.cen.biz/",
"responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "El usuario ya cuenta con 4 archivos activos. 
                   Si requieres crear uno nuevo, inactiva alguno de los que est\xE1 en uso",
"responseCode": "1009"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario logueado que esta creando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider": "1234568",
    "country": "CO",
    "typeOfReport": "sales",
    "generationFrequency": "Mensual",
    "generationDay": "12",
    "typeOfDataGrouping": "Diario",
    "amountOfPeriodsToGenerate": 1,
    "checkTrader": 1,
    "checkPointSale": 1,
    "checkChanel": 1,
    "checkFormat": 1,
    "checkDepartamentState": 0,
    "checkCity": 0,
    "checkSalesForceHierarchy": 0,
    "checkSalesMan": 0,
    "checkCategoriesProduct": 0,
    "checkProduct": 0,
    "checkBrand": 0,
    "checkColor": 0,
    "checkSize": 0,
    "checkDispatchUnit": 0,
    "checkStandardUnit": 0,
    "checkWeight": 0,
    "checkVolume": 0,
    "state": "ACTIVO",
    "creationUser": "francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Si fue configurado con estado Activo, 
                  una vez se genere dependiendo de la frecuencia, se enviar\xE1 al canal
                  de comunicaci\xF3n contratado para que lo descargues, 
                  o puedes consultar el \xFAltimo archivo generado en la 
                  funcionalidad Administrar archivos especiales",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "A\xFAn no se ha configurado una ruta para la entrega del Archivo especial.
                    En caso de persistir este evento por favor comunicarse 
                    con Soporte https://soporte.cen.biz/",
"responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "El usuario ya cuenta con 4 archivos activos. 
                   Si requieres crear uno nuevo, inactiva alguno de los que est\xE1 en uso",
"responseCode": "1009"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"get",url:"/configurations/special/files/administrations/providers/:eanprovider",title:"Listado configuraciones por cliente",name:"Listado_configuraciones_por_cliente",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",description:"<p>Ean del fabricante a consultar listado de archivos</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!0,field:"configurationSpecialFileDTO.pk",description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!0,field:"configurationSpecialFileDTO.sk",description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.eanProvider",description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.country",description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.typeOfReport",description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.generationFrequency",description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.generationDay",description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#1234568",
            "sk": "special_file#4c78b632-0bb0-432c-99aa-3b3f25f408f8",
            "eanProvider": "1234568",
            "generationFrecuency": "Mensual",
            "generationDay": "12",
            "typeOfDataGrouping": "Diario",
            "fileName": null,
            "pathFileName": null,
            "logFileName": null,
            "pathLogFileName": null,
            "historicalExecutions": null,
            "configurationSpecialFileDTO": {
                "pk": null,
                "sk": null,
                "eanProvider": "1234568",
                "country": "CO",
                "typeOfReport": "sales",
                "generationFrequency": "Mensual",
                "generationDay": "12",
                "typeOfDataGrouping": "Diario",
                "amountOfPeriodsToGenerate": 1,
                "checkTrader": 1,
                "checkPointSale": 1,
                "checkChanel": 1,
                "checkFormat": 1,
                "checkDepartamentState": 0,
                "checkCity": 0,
                "checkSalesForceHierarchy": 0,
                "checkSalesMan": 0,
                "checkCategoriesProduct": 0,
                "checkProduct": 0,
                "checkBrand": 0,
                "checkColor": 0,
                "checkSize": 0,
                "checkDispatchUnit": 0,
                "checkStandardUnit": 0,
                "checkWeight": 0,
                "checkVolume": 0,
                "state": "ACTIVO",
                "creationUser": null,
                "creationDate": null,
                "modificationDate": null,
                "modificationUser": null
            },
            "creationUser": "francisco Diaz",
            "creationDate": "2023-03-24 10:34:55",
            "modificationDate": null,
            "modificationUser": null,
            "state": "ACTIVO",
            "procesingState": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "A\xFAn no se ha realizado la configuraci\xF3n de un archivo especial.",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files/providers",title:"Listado configuraciones por cliente filtradas",name:"Listado_configuraciones_por_cliente_filtradas",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente filtrando por el estado y fecha de creaci\xF3n del reporte</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado de los informes especiales a buscar IMPORTANTE = si no se selecciono data enviar el campo vacio</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n de los archivos especiales IMPORTATE = si no se ingreso data enviar el campo vacio y si se selecciono data enviar en formato AAAA-mm = 2023-03</p>"}]},examples:[{title:"Request-Example:",content:` 
{
    "eanProvider":"1234568",
    "creationDate" : "2023-03",
    "state": "ACTIVO"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider":"1234568",
    "creationDate" : "",
    "state": "ACTIVO"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider":"1234568",
    "creationDate" : "2023-03",
    "state": ""
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!0,field:"configurationSpecialFileDTO.pk",description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!0,field:"configurationSpecialFileDTO.sk",description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.eanProvider",description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.country",description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.typeOfReport",description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.generationFrequency",description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.generationDay",description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#1234568",
            "sk": "special_file#4c78b632-0bb0-432c-99aa-3b3f25f408f8",
            "eanProvider": "1234568",
            "generationFrecuency": "Mensual",
            "generationDay": "12",
            "typeOfDataGrouping": "Diario",
            "fileName": null,
            "pathFileName": null,
            "logFileName": null,
            "pathLogFileName": null,
            "historicalExecutions": null,
            "configurationSpecialFileDTO": {
                "pk": null,
                "sk": null,
                "eanProvider": "1234568",
                "country": "CO",
                "typeOfReport": "sales",
                "generationFrequency": "Mensual",
                "generationDay": "12",
                "typeOfDataGrouping": "Diario",
                "amountOfPeriodsToGenerate": 1,
                "checkTrader": 1,
                "checkPointSale": 1,
                "checkChanel": 1,
                "checkFormat": 1,
                "checkDepartamentState": 0,
                "checkCity": 0,
                "checkSalesForceHierarchy": 0,
                "checkSalesMan": 0,
                "checkCategoriesProduct": 0,
                "checkProduct": 0,
                "checkBrand": 0,
                "checkColor": 0,
                "checkSize": 0,
                "checkDispatchUnit": 0,
                "checkStandardUnit": 0,
                "checkWeight": 0,
                "checkVolume": 0,
                "state": "ACTIVO",
                "creationUser": null,
                "creationDate": null,
                "modificationDate": null,
                "modificationUser": null
            },
            "creationUser": "francisco Diaz",
            "creationDate": "2023-03-24 10:34:55",
            "modificationDate": null,
            "modificationUser": null,
            "state": "ACTIVO",
            "procesingState": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda. Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/companies",title:"Actualizaci\xF3n de compa\xF1ia",name:"Actualizaci\xF3n_de_compa\xF1ia",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite actualizar datos de una compa\xF1ia en el sistema despues de cumplir con las validaciones exigidas en el proceso, que no puede existir una compa\xF1ia con el mismo numero de identificacion y nombre en el mismo pais y tipo de compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia (F = fabricante C = Comerciante)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>Numero de identificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!0,field:"checkDigit",description:"<p>digito de verificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityCode",description:"<p>Codigo de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityName",description:"<p>Nombre de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"adress",description:"<p>Direccion de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"contactName",description:"<p>Nombre del contacto de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Correo electronico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado de la empresa (1 = ACTIVO 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",description:"<p>Nombre y apellido del usuario logueado que esta actualizando la empresa</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "company_type#F",
    "sk": "country#CO#ean_company#7702010000010",
    "typeCompany": "F",
    "eanCompany": "7702010000010",
    "companyIdentificationNumber": "",
    "checkDigit": 1,
    "companyName": "Colgate Palmolive",
    "country": "CO",
    "cityCode": "",
    "cityName": "",
    "adress": "",
    "contactName": "",
    "phone": "",
    "email": "",
    "state": 1,
    "userModification": "Francisco diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Cambios guardados correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": " El N\xFAmero de identificaci\xF3n ya se encuentra asociado a una empresa."
                       " Puedes consultarlo en la funcionalidad Administrar empresa",
    "responseCode": "1007"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "La Raz\xF3n social ya se encuentra asociada a una empresa."
                       "Puedes consultarla en la funcionalidad Administrar empresa",
    "responseCode": "1008"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente."
                       " Intenta nuevamente en unos segundos o comun\xEDcate con soporte "
                       "https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"post",url:"/companies/administrations",title:"Administracion de compa\xF1ias",name:"Administracion_de_compa\xF1ias",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las compa\xF1ias que tengan relaci\xF3n con los filtros de busqueda seleccionados</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>codigo del pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia a buscar IMPORTANTE si no se tiene data enviar el campo vacio ejemplo eanCompany = &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>numero de identificaci\xF3n de la compa\xF1ia IMPORTANTE si no se tiene data enviar el campo vacio ejemplo companyIdentificationNumber = &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>nombre de la compa\xF1ia a buscar IMPORTANTE si no se tiene data enviar el campo vacio ejemplo companyName = &quot;&quot;</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>estado de la compa\xF1ia IMPORTANTE si no se tiene data NO enviar el campo</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "typeCompany": "F",
    "eanCompany": "",
    "companyIdentificationNumber": "",
    "companyName": ""
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "typeCompany": "F",
    "eanCompany": "7702010000010",
    "companyIdentificationNumber": "890201",
    "companyName": "Colga",
    "state": 1
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de las empresas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>tipo de compa\xF1ia (F= Fabricante, C = Comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>Numero de identificacion de la empresa</p>"},{group:"200",type:"Number",optional:!1,field:"checkDigit",description:"<p>Digito de verificacion de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"cityCode",description:"<p>Codigo de la ciudad de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"cityName",description:"<p>Nombre de la ciudad de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"adress",description:"<p>Direccion de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"contactName",description:"<p>Nombre de contacto de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Correo electronico</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado de la compa\xF1ia (1 = ACTIVO, 0 = INACTIVO)</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>usuario de Creaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de actualizacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario que actualizo el registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "company_type#F",
            "sk": "country#CO#ean_company#7702120000016",
            "typeCompany": "F",
            "eanCompany": "7702120000016",
            "companyIdentificationNumber": null,
            "checkDigit": null,
            "companyName": "Papeles Nacionales",
            "country": "CO",
            "cityCode": null,
            "cityName": null,
            "adress": null,
            "contactName": null,
            "phone": null,
            "email": null,
            "state": 1,
            "creationDate": null,
            "createUser": null,
            "modificationDate": null,
            "userModification": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda."
                        "Realiza un nuevo filtro.",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1004",

   "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente."
                       "Intenta nuevamente en unos segundos o comun\xEDcate"
                       "con soporte https://soporte.cen.biz/."

}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/traders/countries/{country}",title:"Companias comerciantes por pais",name:"Companias_comerciantes_por_pais",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia comerciantes registrada consultando por su pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData":[ {
"pk": "company_type#C",
"sk": "country#CO#ean_company#7702010000010",
"companyName": "Colgate Palmolive",
"country": "CO",
"state": 1,
"creationDate": "2022-12-05 19:49:11.853",
"createUser": "Soporte",
"modificationDate": "",
"userModification": "",
"typeCompany": "F",
"eanCompany": "7702010000010",
"userLimit": null
}],
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No existe informaci\xF3n que coincida con
los filtros de b\xFAsqueda.",
"responseCode": "1004"
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/providers/:eancompany/countries/:country",title:"Companias fabricantes por pais",name:"Consulta_companias_fabricantes_por_pais",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia fabricante registrada consultando pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [{
"pk": "company_type#F",
"sk": "country#CO#ean_company#7702010000010",
"companyName": "Colgate Palmolive",
"country": "CO",
"state": 1,
"creationDate": "2022-12-05 19:49:11.853",
"createUser": "Soporte",
"modificationDate": "",
"userModification": "",
"typeCompany": "F",
"eanCompany": "7702010000010",
"userLimit": null
}],
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No existe informaci\xF3n que coincida con
los filtros de b\xFAsqueda.",
"responseCode": "1004"
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/providers/:eancompany/countries/:country",title:"Consulta compa\xF1ia fabricante",name:"Consulta_compa\xF1ia_fabricante",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia fabricante registrada consultando por su ean y pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",description:"<p>Ean de la compa\xF1ia que se quiere consultar</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": {
"pk": "company_type#F",
"sk": "country#CO#ean_company#7702010000010",
"companyName": "Colgate Palmolive",
"country": "CO",
"state": 1,
"creationDate": "2022-12-05 19:49:11.853",
"createUser": "Soporte",
"modificationDate": "",
"userModification": "",
"typeCompany": "F",
"eanCompany": "7702010000010",
"userLimit": null
},
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No existe informaci\xF3n que coincida con
los filtros de b\xFAsqueda.",
"responseCode": "1004"
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"post",url:"/companies",title:"Creaci\xF3n de compa\xF1ia",name:"Creaci\xF3n_de_compa\xF1ia",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite crear una nueva compa\xF1ia en el sistema despues de cumplir con las validaciones exigidas en el proceso, que no puede existir una compa\xF1ia con el mismo ean, numero de identificacion y nombre en el mismo pais y tipo de compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia (F = fabricante C = Comerciante)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>Numero de identificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!0,field:"checkDigit",description:"<p>digito de verificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityCode",description:"<p>Codigo de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityName",description:"<p>Nombre de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"adress",description:"<p>Direccion de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"contactName",description:"<p>Nombre del contacto de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Correo electronico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado de la empresa (1 = ACTIVO 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario logueado que esta creando la empresa</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "typeCompany": "F",
    "eanCompany": "123456",
    "companyIdentificationNumber": "1234",
    "checkDigit" : 1,
    "companyName": "prueba creacion2",
    "country":"CO",
    "cityCode" : "001",
    "cityName" : "san gil",
    "adress" : "direccion",
    "contactName" : "contacto",
    "phone" : "2222",
    "email" : "@correo",
    "state" : 1,
    "createUser" : "Francisco diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "La empresa se ha creado correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "El EAN ya se encuentra asociado a una empresa."
                       "Puedes consultarlo en la funcionalidad Administrar empresa",
    "responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": " El N\xFAmero de identificaci\xF3n ya se encuentra asociado a una empresa."
                       " Puedes consultarlo en la funcionalidad Administrar empresa",
    "responseCode": "1007"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "La Raz\xF3n social ya se encuentra asociada a una empresa."
                       "Puedes consultarla en la funcionalidad Administrar empresa",
    "responseCode": "1008"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente."
                       " Intenta nuevamente en unos segundos o comun\xEDcate con soporte "
                       "https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies",title:"Listado de compa\xF1ias",name:"Listado_de_compa\xF1ias",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las compa\xF1ias fabricante de la plataforma</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de compa\xF1ias</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"userLimit",description:"<p>limite de usuarios</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "company_type#F",
"sk": "country#CO#ean_company#06141304071057",
"companyName": "Valesolo S.A. De C.V.",
"country": "CO",
"state": 1,
"creationDate": "2022-12-05 19:49:11.853",
"createUser": "Soporte",
"modificationDate": "",
"userModification": "",
"typeCompany": "F",
"eanCompany": "06141304071057",
"userLimit": null
},
{
"pk": "company_type#F",
"sk": "country#CO#ean_company#06141307760018",
"companyName": "Spazio Division De Redi, S.A. De C.V.",
"country": "CO",
"state": 1,
"creationDate": "2022-12-05 19:49:11.853",
"createUser": "Soporte",
"modificationDate": "",
"userModification": "",
"typeCompany": "F",
"eanCompany": "06141307760018",
"userLimit": null
}
],
"responseMessage": "consulta company correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/cards/indicators/stock/companies/:eanProvider",title:"Indicadores BI inventarios",name:"Indicadores_BI_inventarios",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de inventarios para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#7702010000010",
            "sk": "stock#20221012112937",
            "eanProvider": "7702010000010",
            "indicatorType": "inventories",
            "name": "An\xE1lisis de inventarios",
            "nameEnglish": "Stock analysis",
            "icon": "",
            "description": "Tenga visibilidad del comportamiento de los 
            inventarios de su negocio en cada comercio aplicando diferentes filtros de consulta",
            "descriptionEnglish": "Have visibility into the performance 
            of your business's inventories in each store by applying different query filters",
            "url": "",
            "indicatorOrder": 1,
            "createUser": "Francisco Diaz",
            "createDate": "2022-10-12 11:33:45",
            "modificationUser": null,
            "modificationDate": null,
            "country": null
        },
        {
            "pk": "ean_provider#7702010000010",
            "sk": "stock#20221012112938",
            "eanProvider": "7702010000010",
            "indicatorType": "inventories",
            "name": "D\xEDas de inventario",
            "nameEnglish": "Days of Supply",
            "icon": "",
            "description": "Conozca cu\xE1ntos d\xEDas de inventario tiene disponible 
             para planificar el suministro y evitar los agotados",
            "descriptionEnglish": "Have visibility into the performance of 
            your business's inventories in each store by applying different query filters",
            "url": "",
            "indicatorOrder": 2,
            "createUser": "Francisco Diaz",
            "createDate": "2022-10-12 11:33:45",
            "modificationUser": null,
            "modificationDate": null,
            "country": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

  "responseMessage": "error en la consulta",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/sales/companies/:eanProvider",title:"Indicadores BI ventas",name:"Indicadores_BI_ventas",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de ventas para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "7702010000010",
            "sk": "ventas#20221011112932",
            "eanProvider": "7702010000010",
            "indicatorType": "Ventas",
            "name": "An\xE1lisis de ventas",
            "nameEnglish": "Sales analysis",
            "icon": "TrendingUpOutlined.svg",
            "description": "Tenga visibilidad del comportamiento de las ventas ",
            "descriptionEnglish": "Have visibility into the sales",
            "url": "https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
            "indicatorOrder": 1,
            "createUser": "Francisco Diaz",
            "createDate": "2022-10-11 11:33:45",
            "modificationUser": null,
            "modificationDate": null,
            "country": null
        },
        {
            "pk": "7702010000010",
            "sk": "ventas#20221011112933",
            "eanProvider": "7702010000010",
            "indicatorType": "Ventas",
            "name": "An\xE1lisis por geograf\xEDa",
            "nameEnglish": "Geographic analysis",
            "icon": "icono",
            "description": "Conozca cu\xE1les son las zonas geogr\xE1ficas",
            "descriptionEnglish": "Know which are the geographical",
            "url": "https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
            "indicatorOrder": 2,
            "createUser": "Francisco Diaz",
            "createDate": "2022-10-11 11:33:45",
            "modificationUser": null,
            "modificationDate": null,
            "country": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

  "responseMessage": "error en la consulta",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"put",url:"/contact",title:"Actualizaci\xF3n contactos",name:"Actualizaci\xF3n_contacto",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite Actulizaci\xF3n de un producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastname",description:"<p>apellido</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>correo electronico</p>"},{group:"Parameter",type:"String",optional:!1,field:"position",description:"<p>cargo</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>telefono</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
{
"name": "mateo",
"lastName": "romero",
"lastEmail": "mateoromeroweb2@gmail.com",
"newEmail": "mateoromeroweb2@gmail.com",
"phone": "7283893",
"position": "vendedor",
"eanCompany": "342532532"
]
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating contact"

"responseCode" : "1001"


}`,type:"json"}]},filename:"ContactsWebApi.java",groupTitle:"Contactos"},{type:"post",url:"/contact",title:"Creacion de registro contactos",name:"Creacion_de_registro_contactos",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de registro producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastname",description:"<p>apellido</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>correo electronico</p>"},{group:"Parameter",type:"String",optional:!1,field:"position",description:"<p>cargo</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>telefono</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
{
"name": "mateo",
"lastName": "romero",
"email": "mateoromeroweb2@gmail.com",
"phone": "7283893",
"position": "vendedor",
"eanCompany": "342532532"
]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de productos contatados se
cre\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "No se puede agregar el registro, "
+ " ya existe una opci\xF3n de productos contatados para el
pa\xEDs, empresa y producto seleccionado"

"responseCode" : "1001"


}`,type:"json"}]},filename:"ContactsWebApi.java",groupTitle:"Contactos"},{type:"post",url:"/contact/filter",title:"Filtro de Contactos",name:"Filtro_de_Contactos",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite filtrar los contactos por nombre y apellido</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",description:"<p>apellido</p>"}]},examples:[{title:"Request-Example:",content:`
{

"eanCompany": "12345"
}`,type:"json"},{title:"Request-Example:",content:`{
"name": "mateo",
"eanCompany": "12345",
"lastName": "romero"
}`,type:"json"},{title:"Request-Example:",content:`{

"eanCompany": "12345",
"lastName": "romero"
}`,type:"json"},{title:"Request-Example:",content:`{
,
"eanCompany": "12345",
"lastName": "romero"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>nombre</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>apellido</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>correo electronico</p>"},{group:"200",type:"String",optional:!1,field:"position",description:"<p>cargo</p>"},{group:"200",type:"String",optional:!1,field:"phone",description:"<p>telefono</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "ean_company#342532532",
"sk": "e0f8e131-07e2-466e-87dd-fc6384479b72",
"name": "mateo",
"lastName": "romero",
"email": "mateoromeroweb2@gmail.com",
"phone": "7283893",
"position": "vendedor",
"eanCompany": "342532532"
}
],
"responseMessage": "consulta contactos
correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contactos",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"ContactsWebApi.java",groupTitle:"Contactos"},{type:"post",url:"/budget/downloads",title:"Descarga Prsupuesto por vendedor",name:"Descarga_Presupuesto_por_vendedor",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de presupuesto por vendedor para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
{

"eanProvider": "7702010000010",
"userName": "Francisco diaz",
"emailUser": "correo@prueba",
"idUser": "khjgliugkfu",
"country":"CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Se ha iniciado el proceso de descarga
del archivo maestro seleccionado,"
"en un momento podr\xE1 consultar el estado del archivo en el
listado de resultados.",

"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "Actualmente no hay registros para
descarga del archivo maestro. "
Por favor dirigirse a la opci\xF3n de carga del archivo
maestro seleccionado
para el cargue de esta informaci\xF3n",

"responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`{
"responseMessage": "En este momento no se puede descargar
el archivo maestro.
El usuario correo@prueba esta descargando el archivo
maestro Presupuesto por vendedor, tan pronto finalice
este proceso se va a poder solicitar nuevamente la
descarga.",
"responseCode": "1006"
}`,type:"json"}]},filename:"BudgetWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/productsreferences/downloads",title:"Descarga Referenciales de Producto",name:"Descarga_Referenciales_de_Producto",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de referenciales de producto para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
{

"eanProvider": "7702010000010",
"userName": "Francisco diaz",
"emailUser": "correo@prueba",
"idUser": "khjgliugkfu",
"country":"CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": ""responseMessage": "Se ha iniciado el proceso de descarga del archivo 
    maestro seleccionado, en un momento podr\xE1 consultar el estado del archivo en el listado de resultados.",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente no hay registros para descarga del archivo maestro. "
    Por favor dirigirse a la opci\xF3n de carga del archivo 
    maestro seleccionado para el cargue de esta informaci\xF3n",

    "responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`{
    "responseMessage": "En este momento no se puede descargar  el archivo maestro. 
    El usuario correo@prueba esta descargando el archivo maestro Referencial de Producto, tan pronto finalice
    este proceso se va a poder solicitar nuevamente la descarga.",
    "responseCode": "1006"
}`,type:"json"}]},filename:"ProductReferencesWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/products/downloads",title:"Descarga Catalogo productos",name:"Descarga_Catalogo_productos",group:"Download_catalogo_productos",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de catalogo de productos para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo paiso de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "7702010000010",
    "userName": "Francisco diaz",
    "emailUser": "correo@prueba",
    "idUser": "fradia"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Se ha iniciado el proceso de descarga Cat\xE1logo de productos,"
    "en un momento podr\xE1 consultar el estado del archivo en el listado de resultados.",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente no hay registros en el Cat\xE1logo de productos "
    " para descargar.Por favor dirigirse a la opci\xF3n Carga de Cat\xE1logo para el cargue de esta informaci\xF3n",

    "responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`{
    "responseMessage": "En este momento no se puede descargar  su Cat\xE1logo de productos. 
    El usuario correo@prueba esta descargando el Cat\xE1logo, tan pronto finalice
     este proceso se habilitar\xE1 su descarga.",
    "responseCode": "1006"
}`,type:"json"}]},filename:"ProductWebApi.java",groupTitle:"Download_catalogo_productos"},{type:"post",url:"/salesforce",title:"Descarga fuerza venta",name:"Descarga_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de la fuerza de venta actual para el fabricante seg\xFAn los comercios que filtre</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTrader",description:"<p>Listado eans de los comercios seleccionados en la lista desplegable</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider":"7702010000010",
    "userName": "francisco",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "lstEanTrader": [
        "7702010000010",
        "7702010000009"
    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Se ha iniciado el proceso de descarga, en un"
     "momento podr\xE1 consultar el estado del archivo en el listado de resultados",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente no hay registros para descarga 
     "en Fuerza de venta, Por favor dirigirse a la opci\xF3n Carga Fuerza de venta 
      para el cargue de esta informaci\xF3n",

    "responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente ya esta en Proceso la descarga de Fuerza de venta
    por el usuario correo@prueba tan pronto finalice este proceso se habilitara la descarga",

    "responseCode": "1006"
}`,type:"json"}]},filename:"SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salesforce/traders",title:"Listado comerciantes",name:"Listado_comerciantes",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los comerciantes que tienen registrado venta o  inventarios con el fabricante logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais del fabricante que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider":"7702010000010",
    "country" : "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los comeciantes</p>"},{group:"200",type:"Object",optional:!1,field:"data",description:"<p>Objecto que contiene los datos de los comerciantes</p>"},{group:"200",type:"Number",optional:!1,field:"idCompany",description:"<p>Id del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>Nombre del Comerciante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais del Comerciante</p>"},{group:"200",type:"Boolean",optional:!1,field:"Estado",description:"<p>del Comerciante</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>usuaro que creo el registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>usuaro que actualizo el registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean del comerciante</p>"},{group:"200",type:"Number",optional:!1,field:"userLimit",description:"<p>limite de usuarios activos</p>"}]},examples:[{title:"Success-Response:",content:`
  {
    "objectData": [
        {
            "idCompany": 1,
            "nameCompany": "exito",
            "country": "CO",
            "active": false,
            "createUser": 0,
            "userModification": 2,
            "typeCompany": "C",
            "eanCompany": "7702010000010",
            "userLimit": 5
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salesforce/previews",title:"Previsualizar fuerza venta",name:"Previsualizar_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la consulta de datos para la vista previa de la fuerza de venta para un fabricante y comerciante en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se ecuentra como (eanCompany)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comercio seleccionado en la lista desplegable</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider": "7702010000010", 

    "eanTrader": "7702010000009"  

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de datos de la fuerza de venta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que esta logueada</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del Comerciante seleccionado en la lista deplegable</p>"},{group:"200",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"eanPointSale",description:"<p>Ean del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"pointSaleName",description:"<p>Nombre del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"levelZero",description:"<p>Nivel de la Jerarqu\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",description:"<p>1.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelTwo",description:"<p>2.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelThree",description:"<p>3.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",description:"<p>4.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelFive",description:"<p>5.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelSix",description:"<p>6.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelSeven",description:"<p>7.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelEight",description:"<p>8.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelNine",description:"<p>9.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelTen",description:"<p>10.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"salesMan",description:"<p>Nombre del vendedor</p>"},{group:"200",type:"String",optional:!1,field:"salesManCode",description:"<p>Codigo del vendedor</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#ean_1",
            "sk": "ean_point_sale#ean_1",
            "eanPointSale": "test",
            "eanProvider": "test",
            "eanTrader": "test",
            "trader": "test",
            "pointSaleName": "test",
            "levelZero": "test",
            "levelOne": "test",
            "levelTwo": "test",
            "levelThree": "test",
            "levelFour": "test",
            "levelFive": "test",
            "levelSix": "test",
            "levelSeven": "test",
            "levelEight": "test",
            "levelNine": "test",
            "levelTen": "test",
            "salesman": "test",
            "salesmanCode": "test"
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salepoints",title:"Descarga puntos de venta",name:"Descarga_puntos_de_venta",group:"Download_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de puntos de venta actual registrados en la plataforma</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa se que encuentra logueada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTraders",description:"<p>Listado eans de los comercios seleccionados en la lista desplegable IMPORTANTE si se seleccionaron todos los eans de la lista desplegable \xF3 la palabra todos el listado se debe enviar vac\xEDo</p>"}]},examples:[{title:"Request-Example:",content:`
{  
    "eanProvider":"7702010000010",
    "userName": "francisco diaz",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "country": "CO",
    "lstEanTraders": [
        "7702010000010",
        "7702010000009"
    ]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider":"7702010000010",
    "userName": "francisco diaz",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "country": "CO",
    "lstEanTraders": []

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "en un"
     "momento podr\xE1 consultar el estado del archivo en el listado de resultados",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente no hay registros para descarga 
     "en Puntos de venta, Por favor dirigirse a la opci\xF3n Carga Puntos de venta 
      para el cargue de esta informaci\xF3n",

    "responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "En este momento no se puede descargar Puntos de venta. El usuario
    correo@prueba est\xE1 descargando Puntos de venta, tan pronto finalice este proceso
     se va a poder solicitar nuevamente la descarga",

    "responseCode": "1006"
}`,type:"json"}]},filename:"PointSaleWebApi.java",groupTitle:"Download_puntos_de_venta"},{type:"get",url:"/salepoints/traders",title:"Listado de comerciantes",name:"Listado_de_comerciantes",group:"Download_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las compa\xF1ias comerciantes registradas en la plataforma</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de compa\xF1ias</p>"},{group:"200",type:"Object",optional:!1,field:"company",description:"<p>compa\xF1ias registradas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre de usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Nombre del usuario que modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "company_type#C",
            "sk": "country#CO#ean_company#ean_2",
            "companyName": "test",
            "country": "test",
            "state": 1,
            "creationDate": "yyyymmdd",
            "createUser": "test",
            "modificationDate": "yyyymmdd",
            "userModification": "test",
            "typeCompany": null,
            "eanCompany": "test"
        }
    ],
    "responseMessage": "consulta company correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"PointSaleWebApi.java",groupTitle:"Download_puntos_de_venta"},{type:"get",url:"/masters/budget/guides",title:"Descarga gu\xEDa presupuesto por vendedor",name:"Descarga_gu\xEDa_presupuesto_por_vendedor",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de presupuesto por vendedor</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Gu\xEDa archivo Presupuesto por vendedor V1.0.pdf",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/productsreferences/guides",title:"Descarga gu\xEDa referenciales de producto",name:"Descarga_gu\xEDa_referenciales_de_producto",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de referenciales de producto</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Gu\xEDa archivo Referenciales de producto V1.0.pdf",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/budget/templates",title:"Descarga plantilla presupuesto por vendedor",name:"Descarga_plantilla_presupuesto_por_vendedor",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de presupuesto por vendedor</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Plantilla Presupuesto por vendedor V1.0.csv",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/productsreferences/templates",title:"Descarga plantilla referenciales de producto",name:"Descarga_plantilla_referenciales_de_producto",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de referenciales de producto</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Plantilla Referenciales de producto V1.0.csv",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"post",url:"/masters/downloads",title:"Descarga archivos",name:"Descarga_archivo",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo que fue cargado por la pagina web y los archivos que son generados por medio de la pagina</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathFileName",description:"<p>Path del archivo a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo a descargar</p>"}]},examples:[{title:"Request-Example:",content:`
{

    "pathFileName":"prescriptiva-aws/athena",
    "fileName":"Nombre-del-archivo-cargado.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "fuerza_ventas_colgate_20220714113456223_1.csv",

        "fileContent": "U29jaW8gY29tZXJjaWFsO0VBTiBQVjtQVjtOaXZlbCAwO05pdmV"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"post",url:"/masters/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa el archivo cargado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path del log</p>"},{group:"Parameter",type:"String",optional:!1,field:"logFileName",description:"<p>Nombrte del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
{

 "pathLogFileName":"prescriptiva-logs-etl/products",
 "logFileName":"Catalogo_20220805112600_1111_log.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Catalogo_20220805112600_1111_log.csv",

        "fileContent": "U29jaW8gY29tZXJjaWFsO0VBTiBQVjtQVjtOaXZlbCAwO05pdmV"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"get",url:"/masters/downloads/companies/:eancompany/typefiles/:idTypeFile",title:"Listado de archivos",name:"Listado_de_archivos",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los archivos generados para descargar : si desea archivo de fuerza de venta idTypeFile = 8, si desea archivo de catalogo de productos idTypeFile = 9, si desea archivo de puntos de venta idTypeFile = 11</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",description:"<p>ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idTypeFile",description:"<p>Id del tipo de archivo a consultar</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#77",
            "sk": "file_name#Catalogo_Productos_20221121_161752_1.csv",
            "fileName": "Catalogo_Productos_20221121_161752_1.csv",
            "awsUploadLog": null,
            "emailLoad": "correo@prueba",
            "endDate": "2022-11-21 16:20:55",
            "eanProvider": "77",
            "idFileType": 9,
            "logFileName": null,
            "pathFileName": "analitica-dev-prescriptiva-masters-downloads-bucket/products",
            "pathLogFileName": null,
            "starDate": "2022-11-21 16:17:52",
            "state": "FINALIZADO",
            "type": "DOWNLOAD",
            "uploadDate": "20221121161752",
            "userLoad": "Francisco diaz",
            "timeZone": "America/Bogota"
        }
    ],
    "responseMessage": "consulta archivos  correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"get",url:"/status",title:"Listado de estados",name:"Listado_de_estados",group:"Estados",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los estados disponibles para los archivos cargados por la web</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de estados</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre del estado</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n dle registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "state#2",
            "sk": "root",
            "name": "ERROR SISTEMA",
            "creationDate": "2022-01-01 00:00:00.000"
        },
        {
            "pk": "state#5",
            "sk": "root",
            "name": "CARGA PARCIAL",
            "creationDate": "2022-01-01 00:00:00.000"
        },
        {
            "pk": "state#6",
            "sk": "root",
            "name": "CARGA TOTAL",
            "creationDate": "2022-01-01 00:00:00.000"
        },
        {
            "pk": "state#3",
            "sk": "root",
            "name": "EN PROCESO",
            "creationDate": "2022-01-01 00:00:00.000"
        },
        {
            "pk": "state#4",
            "sk": "root",
            "name": "RECHAZADO POR ESTRUCTURA",
            "creationDate": "2022-01-01 00:00:00.000"
        },
        {
            "pk": "state#1",
            "sk": "root",
            "name": "PENDIENTE",
            "creationDate": "2022-01-01 00:00:00.000"
        },
        {
            "pk": "state#7",
            "sk": "root",
            "name": "FINALIZADO",
            "creationDate": "2022-01-01 00:00:00.000"
        }
    ],
    "responseMessage": "Consulta estados correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"StateWebApi.java",groupTitle:"Estados"},{type:"post",url:"/filters/dynamicreports/channels",title:"Listado de canales",name:"Listado_de_canales",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los canales que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour":["855"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour":[],     
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de los canales</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "CANAL POR DEFECTO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/level1/categories",title:"Listado de categorias",name:"Listado_de_categorias",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las categorias de nivel 1 de productos  que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour":["855"],
 "lstChannels":[],     
 "lstEanProducts": ["7702010141188"],  
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour":[],     
 "lstChannels":[], 
 "lstEanProducts": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de las categorias de nivel 1 de productos</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "PORTAFOLIO - CONSOLIDADO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels4/geographies",title:"Listado de ciudades",name:"Listado_de_ciudades",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las ciudades que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelOne": [],
 "lstChannels":[],    
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de departamentos - estados</p>"},{group:"200",type:"String",optional:!1,field:"idLevelOne",description:"<p>C\xF3digo nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",description:"<p>Nombre nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"idLevelFour",description:"<p>C\xF3digo nivel 4 de ciudades</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",description:"<p>Nombre nivel 4 de ciudades</p>"}]},examples:[{title:"Success-Response:",content:`
{
   "objectData": [
       {
           "idLevelOne": "68",
           "levelOne": "SANTANDER",
           "idLevelFour": "855",
           "levelFour": "VALLE DE SAN JOSE"
       }
   ],
   "responseMessage": "consulta correctamente",
   "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/colors",title:"Listado de colores",name:"Listado_de_colores",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de colores de productos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour":["855"],  
 "lstChannels":[],   
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour":[],   
 "lstChannels":[],   
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de colores</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "ROSA"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/traders",title:"Listado de comerciantes",name:"Listado_de_comerciantes",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de comerciantes que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": ["7701010007890"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [],  
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels": [],    
 "lstEanProducts": [],
 "lstLevelOneCategories":[],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de comerciantes</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante</p>"}]},examples:[{title:"Success-Response:",content:`
{
  "objectData": [
     {
        "eanTrader": "7701008100015",
        "trader": "Supertiendas y Droguerias Olimpicas S.A."
     }
  ],
  "responseMessage": "consulta correctamente",
  "responseCode": "0"
}

}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels1/geographies",title:"Listado de departamentos-estado",name:"Listado_de_departamentos-estado",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los departamentos-estado que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelFour": [],
 "lstChannels":[],    
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de departamentos - estados</p>"},{group:"200",type:"String",optional:!1,field:"idLevelOne",description:"<p>C\xF3digo nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",description:"<p>Nombre nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"idLevelFour",description:"<p>C\xF3digo nivel 4 de ciudades</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",description:"<p>Nombre nivel 4 de ciudades</p>"}]},examples:[{title:"Success-Response:",content:`
{
   "objectData": [
       {
           "idLevelOne": "68",
           "levelOne": "SANTANDER",
           "idLevelFour": "855",
           "levelFour": "VALLE DE SAN JOSE"
       }
   ],
   "responseMessage": "consulta correctamente",
   "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/eans/pointsales",title:"Listado de eans punto de venta",name:"Listado_de_eans_punto_de_venta",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los eans de puntos de venta que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstPointSales": [],
 "lstFormats": [],  
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels": [],    
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de eans de punto de venta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "7701008000438"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}

}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/formats",title:"Listado de formatos",name:"Listado_de_formatos",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de formatos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018"],
 "lstEansPointSales": ["7701010007890"],
 "lstPointSales": ["7701010007890"],    
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [], 
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels":[],    
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de formatos</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "< CLASIFICACION DEFAULT >",
        "ALIADOS SURTIMAX",
        "Alkosto",
        "Bazar",
        "Bodega Mayorista",
        "CENTRO DE DISTRIBUCION",
        "Carulla"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
 }`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels1/salesforce",title:"Listado de jerarqu\xEDa nivel 1",name:"Listado_de_jerarqu\xEDa_nivel_1",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de jerarqu\xEDa nivel 1 que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": ["7701010007890"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [],  
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels": [],    
 "lstEanProducts": [],
 "lstLevelOneCategories":[],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de jerarqu\xEDa nivel 1</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "FUERZA DE VENTAS - CONSOLIDADO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/brands",title:"Listado de marcas",name:"Listado_de_marcas",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las marcas de productos que tienen registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour":["855"],  
 "lstChannels":[],   
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"], 
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour":[],   
 "lstChannels":[],   
 "lstEanProducts": [],
 "lstLevelOneCategories": [], 
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de marcas</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "AXION HD",
        "FAB",
        "FAB HDD",
        "VEL ROSITA"
   ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/products",title:"Listado de productos",name:"Listado_de_productos",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los productos  que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701008000438"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour":["855"],    
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [], 
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour":[], 
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de productos</p>"},{group:"200",type:"String",optional:!1,field:"eanProduct",description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!1,field:"productName",description:"<p>Nombre del producto</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "eanProduct": "7509546652139",
            "productName": "Art\xEDculo Nuevo - 7509546652139"
        },
        {
            "eanProduct": "7793100151224",
            "productName": "CEP KIDS VALUE 2 DR RABBIT"
        },
        {
            "eanProduct": "7509546031828",
            "productName": "CEPILLO COLGATE EXTRACLEAN FIRME 2P"
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/pointsales",title:"Listado de punto de venta",name:"Listado_de_punto_de_venta",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de puntos de venta que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": ["7701015000018","7707185370005"],
 "lstEansPointSales": ["7701010007890"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansTraders": [],
 "lstEansPointSales": [],
 "lstFormats":[],  
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels":[],    
 "lstEanProducts": [],
 "lstLevelOneCategories": [],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de puntos de venta</p>"},{group:"200",type:"String",optional:!1,field:"eanPointSale",description:"<p>Ean del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"pointSaleName",description:"<p>Nombre del punto de venta</p>"}]},examples:[{title:"Success-Response:",content:`
  {
      "objectData": [
          {
              "eanPointSale": "7701008000438",
              "pointSaleName": "Sto 043 Miramar"
          }
      ],
      "responseMessage": "consulta correctamente",
      "responseCode": "0"
  }

}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/sizes",title:"Listado de tallas",name:"Listado_de_tallas",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de tallas de productos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": ["7701010007890"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"], 
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
 "lstSalesManCode": ["0"]
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [],  
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels": [],    
 "lstEanProducts": [],
 "lstLevelOneCategories":[],
 "lstBrands": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
 "lstSalesManCode": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de tallas</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "TALLA POR DEFECTO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/salesman",title:"Listado de vendedores",name:"Listado_de_vendedores",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de vendedores que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": ["7701010007890"],
 "lstPointSales": ["7701008000438"],
 "lstFormats": ["Sao"],  
 "lstGeographiesLevelOne": ["68"],
 "lstGeographiesLevelFour": ["855"],
 "lstChannels": ["CANAL POR DEFECTO"],    
 "lstEanProducts": ["7702010141188"],
 "lstLevelOneCategories": ["PORTAFOLIO - CONSOLIDADO"],
 "lstBrands": ["VEL ROSITA"],  
 "lstColors": ["ROSA"],  
 "lstSizes": ["TALLA POR DEFECTO"],
 "lstLevelOneSalesForce": ["FUERZA DE VENTAS - CONSOLIDADO"],
}`,type:"json"},{title:"Request-Example:",content:`
{
 "eanProvider": "7702010000010",
 "country": "CO",
 "lstEansPointSales": [],
 "lstPointSales": [],
 "lstFormats": [],  
 "lstGeographiesLevelOne": [],
 "lstGeographiesLevelFour": [],
 "lstChannels": [],    
 "lstEanProducts": [],
 "lstLevelOneCategories":[],
 "lstBrands": [],  
 "lstColors": [],  
 "lstSizes": [],
 "lstLevelOneSalesForce": [],
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de vendeores</p>"},{group:"200",type:"String",optional:!1,field:"salesManCode",description:"<p>C\xF3digo del vendedor</p>"},{group:"200",type:"String",optional:!1,field:"salesMan",description:"<p>Nombre del vendedor</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "salesManCode": "0",
            "salesMan": "KCM ALKOSTO"
        },
        {
            "salesManCode": "0",
            "salesMan": "KCM ALMACENES EXITO"
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/masters/uploads/geographies",title:"Carga archivo geograf\xEDas",name:"Carga_archivo_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite la carga del archivo de geografias por medio de la p\xE1gina web</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 4 archivo de geografias</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 4,
    "eanProvider": "7702010000010",
    "fileName": "archivo de geografias.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El archivo seleccionado geograf\xEDas_colombia.csv "
    "est\xE1 en proceso de Cargue. Consulte el estado del archivo en el listado de resultados",

    "responseCode": "0"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente. 
     Intente nuevamente en unos segundos o comun\xEDquese con soporte https://soporte.cen.biz/ .",

    "responseCode": "1001"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error actualizando log de error para el archivo",

    "responseCode": "1002"
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies/downloads",title:"Descarga de geograf\xEDas",name:"Descarga_de_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite realizar la descarga de las geograf\xEDas registradas en el sistema para un pa\xEDs en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto geografia a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs de la empresa que se encuentra logueada (se utiliza para la zona horaria)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"}]},examples:[{title:"Request-Example",content:`
{
  "pk": "country#CO",
  "country": "CO",
  "idUser" : "FraDia"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre para el archivo a descargar</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {
        "fileName": "Geograf\xEDas_20220830_52.csv",
        "fileContent": "Q29kIElTTyBQYWlzO05vbWJ"
    },
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/downloads/guides",title:"Descarga gu\xEDa geograf\xEDas",name:"Descarga_gu\xEDa_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de geograf\xEDas</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Guia archivo de Geografias V.1.pdf",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/downloads/templates",title:"Descarga plantilla geograf\xEDas",name:"Descarga_plantilla_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de geograf\xEDas</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Plantilla Geografia V1.csv",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"delete",url:"/geographies/:country",title:"Eliminar geograf\xEDa",name:"Eliminar_geograf\xEDa",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite eliminar una geograf\xEDa de la plataforma Si no esta asociada a una empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs para eliminar la  geograf\xEDa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "La geograf\xEDa elimino correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/cities/countries/:country",title:"Listado de ciudades por pa\xEDs",name:"Listado_de_ciudades_por_pa\xEDs",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de ciudades que pertenecen a un pa\xEDs</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais a consultar las ciudades</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de ciudades</p>"},{group:"200",type:"String",optional:!0,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!0,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!0,field:"codIsoCountry",description:"<p>C\xF3digo ISO del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"countryName",description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"currency",description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"idLevel4",description:"<p>Codigo de la ciudad</p>"},{group:"200",type:"String",optional:!0,field:"level1",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"level4",description:"<p>Nombre  de la ciudad</p>"},{group:"200",type:"String",optional:!0,field:"totalLevels",description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": null,
            "sk": null,
            "codIsoCountry": null,
            "country": null,
            "countryName": null,
            "currency": null,
            "idLevel1": null,
            "idLevel2": null,
            "idLevel3": null,
            "idLevel4": "5002",
            "level1": null,
            "level2": null,
            "level3": null,
            "level4": "ABEJORRAL",
            "totalLevels": null,
            "idUser": null
        },
        {
            "pk": null,
            "sk": null,
            "codIsoCountry": null,
            "country": null,
            "countryName": null,
            "currency": null,
            "idLevel1": null,
            "idLevel2": null,
            "idLevel3": null,
            "idLevel4": "54003",
            "level1": null,
            "level2": null,
            "level3": null,
            "level4": "ABREGO",
            "totalLevels": null,
            "idUser": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies",title:"Listado de geograf\xEDas",name:"Listado_de_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las geograf\xEDas registradas en la plataforma</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"currency",description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel4",description:"<p>Cuarto  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level1",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level4",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"totalLevels",description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "country#CO",
            "sk": "id_nivel_4#uuid",
            "country": "CO",
            "countryName": "test",
            "currency": "COP",
            "idLevel1": null,
            "idLevel2": null,
            "idLevel3": null,
            "idLevel4": null,
            "level1": null,
            "level2": null,
            "level3": null,
            "level4": null,
            "totalLevels": 4
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies",title:"Listado de geograf\xEDas filtradas",name:"Listado_de_geograf\xEDas_filtradas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las geograf\xEDas registradas en la plataforma Que tengan coincidencia en el nombre del pa\xEDs o c\xF3digo ISO ingresado por el cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs a filtrar IMPORTANTE si el campo no contiene data enviar el campo vacio ejemplo &quot;countryName&quot;: &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs a filtrar IMPORTANTE si el campo no contiene data enviar el campo vacio ejemplo &quot;codIsoCountry&quot;: &quot;&quot;</p>"}]},examples:[{title:"Request-Example",content:`
{
      "countryName":"",
      "country": "COL"
  }`,type:"json"},{title:"Request-Example",content:`
{
      "countryName":"COLOMBIA",
      "country": ""
 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"currency",description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel4",description:"<p>Cuarto  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level1",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level4",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"totalLevels",description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "country#CO",
            "sk": "id_nivel_4#uuid",
            "country": "CO",
            "countryName": "test",
            "currency": "COP",
            "idLevel1": null,
            "idLevel2": null,
            "idLevel3": null,
            "idLevel4": null,
            "level1": null,
            "level2": null,
            "level3": null,
            "level4": null,
            "totalLevels": 4
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies/companies/validations",title:"Validaci\xF3n para eliminar geograf\xEDas",name:"Validaci\xF3n_para_eliminar_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite Validar si la geograf\xEDa que se desea eliminar esta asociada a alguna empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs para eliminar la  geograf\xEDa</p>"},{group:"Parameter",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs para eliminar la  geograf\xEDa</p>"}]},examples:[{title:"Request-Example",content:`{

   "country": "CO",
   "countryName" : "COLOMBIA"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "\xBFEst\xE1 seguro que desea eliminar la geograf\xEDa del pa\xEDs COLOMBIA ?",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "No se puede eliminar la geograf\xEDa. La geograf\xEDa del pa\xEDs COLOMBIA 
                      que desea eliminar est\xE1 asociada al menos a una Empresa",
  "responseCode": "1005"
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/dashboards/home/providers/:eanProvider/countries/:country",title:"Indicadores home graficas",name:"Indicadores_home_graficas",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener la infomacion para mostrar en la graficas de barra y tortas que se presentan en el home del fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateSales",description:"<p>Fecha de ultima actualizaci\xF3n para ventas</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateInventories",description:"<p>Fecha de ultima actualizaci\xF3n para Inventarios</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de datos para pintar en las graficas</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"chartType",description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!1,field:"chartDetail",description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Nombre del primer campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre del segundo campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Primer valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Segundo valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response: ",content:`
{

   "lastUpdateSales": "25/08/2022 8:23",

   "lastUpdateInventories": null,

   "responseMessage": "consulta correctamente",

   "responseCode": "0",

    "objectData": [

    {
        "idIndicator": 1,
        "eanProvider": "7702010000010",
        "country": "CO",
        "documentType": "Ventas",
        "chartType": "MTD (Q)",
        "chartDetail": "Barra",
        "field1": "jun-21",
        "field2": "jun-22",
        "value1": "29630381.00",
        "value2": "16831049.00",
        "lastUpdates": "22/08/2022 16:08"
    },
    {
        "idIndicator": 11,
        "eanProvider": "7702010000010",
        "country": "CO",
        "documentType": "Ventas",
        "chartType": "Pie Chart",
        "chartDetail": "Fuerza de Ventas",
        "field1": "Puntos de Venta Reportados",
        "field2": "Puntos de Venta Sin Vendedor Asignado",
        "value1": "1578.00",
        "value2": "490.00",
        "lastUpdates": "25/08/2022 8:23"
    }
 ]
    
}`,type:"json"}]},filename:"DashboardHomeWebApi.java",groupTitle:"Home"},{type:"get",url:"/dashboards/home/transmissions/providers/:eanProvider/countries/:country",title:"Listado de transmisiones",name:"Listado_de_transmisiones",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las transmisiones de los comerciantes hacia el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de transmisiones para mostrar en la tabla</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la tabla</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)}</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Comercio que Transmite la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre ultia transmision</p>"},{group:"200",type:"String",optional:!1,field:"field3",description:"<p>Nombre cantidad transmitida</p>"},{group:"200",type:"String",optional:!1,field:"field4",description:"<p>Nombre valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"field5",description:"<p>Nombre tipo valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"field6",description:"<p>Nombre puntos de ventas transmtidos</p>"},{group:"200",type:"String",optional:!1,field:"field7",description:"<p>Nombre actualizaciones</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Ean del comercio</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Fecha ultima actualizaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"value3",description:"<p>Cantidad transmitida</p>"},{group:"200",type:"String",optional:!1,field:"value4",description:"<p>Valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"value5",description:"<p>tipo del valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"value6",description:"<p>Cantidad de puntos de venta tansmitidos</p>"},{group:"200",type:"String",optional:!1,field:"value7",description:"<p>Fechas de actualizaciones</p>"},{group:"200",type:"String",optional:!1,field:"currentDatetime",description:"<p>Fecha de ultima actualizaci\xF3n</p>"}]},examples:[{title:"Success-Response:  ",content:`
{
    "objectData": [
        {
            "idIndicator": 12,
            "eanProvider": "7702010000010",
            "country": "CO",
            "documentType": "Ventas",
            "field1": "COMERCIO",
            "field2": "ULTIMA TRANSMISION",
            "field3": "CANTIDAD TRANSMITIDA",
            "field4": "VALOR TRANSMITIDO",
            "field5": "TIPO VALOR TRANSMITIDO",
            "field6": "PUNTOS DE VENTA TRANSMITIDOS",
            "field7": "ACTUALIZACIONES",
            "value1": "7701023999083",
            "value2": "20220812",
            "value3": "2471881",
            "value4": "3818407579912960",
            "value5": "Precio p\xFAblico sin IVA",
            "value6": "17",
            "value7": "['20210103','20220628','20220629','20220630']",
            "currentDatetime": "25/08/2022 8:33"
        },


        {
            "idIndicator": 12,
            "eanProvider": "7702010000010",
            "country": "CO",
            "documentType": "Ventas",
            "field1": "COMERCIO",
            "field2": "ULTIMA TRANSMISION",
            "field3": "CANTIDAD TRANSMITIDA",
            "field4": "VALOR TRANSMITIDO",
            "field5": "TIPO VALOR TRANSMITIDO",
            "field6": "PUNTOS DE VENTA TRANSMITIDOS",
            "field7": "ACTUALIZACIONES",
            "value1": "7701009000000",
            "value2": "20220812",
            "value3": "1045661",
            "value4": "12426818691",
            "value5": "Precio p\xFAblico sin IVA",
            "value6": "367",
            "value7": "['20210103','20210110','20210117','20210124','20210131']",
            "currentDatetime": "25/08/2022 8:33"
        }

    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"DashboardHomeWebApi.java",groupTitle:"Home"},{type:"post",url:"/dashboards/home/details/salesforce",title:"Listado detalle indicadores fuerza de venta",name:"Listado_detalle_indicadores_fuerza_de_venta",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado detallado de los indicadores de fuerza de venta para el fabricante logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"},{group:"Parameter",type:"String",optional:!1,field:"field2",description:"<p>Tipo de indicador para el detalle, si desea visualizar detalle de fuerza de venta enviar field2 = 'PUNTO DE VENTA'</p>"}]},examples:[{title:"Request-Example",content:`
{

  "eanProvider": "7702010000010",
  "country": "CO",
  "field2": "PUNTO DE VENTA"

 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de indicadores detallado</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!0,field:"chartType",description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!0,field:"chartDetail",description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Nombre Ean punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre Punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Ean del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Nombre del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "idIndicator": 14,
            "eanProvider": "7702010000010",
            "country": "CO",
            "documentType": "Ventas/Inventarios",
            "chartType": null,
            "chartDetail": null,
            "field1": "EAN PUNTO DE VENTA",
            "field2": "PUNTO DE VENTA",
            "value1": "7701001040288",
            "value2": "4028 - EXITO PLAZA 77 SUR",
            "lastUpdates": "25/08/2022 8:39"
        },      
      
        {
            "idIndicator": 14,
            "eanProvider": "7702010000010",
            "country": "CO",
            "documentType": "Ventas/Inventarios",
            "chartType": null,
            "chartDetail": null,
            "field1": "EAN PUNTO DE VENTA",
            "field2": "PUNTO DE VENTA",
            "value1": "7701015007413",
            "value2": "DROGUERIA MINIMARKET JAMUNDI",
            "lastUpdates": "25/08/2022 8:39"
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"DashboardHomeWebApi.java",groupTitle:"Home"},{type:"post",url:"/dashboards/home/details/products",title:"Listado detalle indicadores productos",name:"Listado_detalle_indicadores_productos",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado detallado de los productos con categorias por default</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"},{group:"Parameter",type:"String",optional:!1,field:"field2",description:"<p>Tipo de indicador para el detalle, para visualizar catalogo de productos enviar field2 = 'PRODUCTOS'</p>"}]},examples:[{title:"Request-Example",content:`
{

 "eanProvider": "7702010000010",
 "country": "CO",
 "field2": "PRODUCTO"

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de indicadores detallado</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!0,field:"chartType",description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!0,field:"chartDetail",description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Nombre Ean del producto</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre del producto</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Nombre del producto</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "idIndicator": 13,
            "eanProvider": "7702010000010",
            "country": "CO",
            "documentType": "Ventas/Inventarios",
            "chartType": null,
            "chartDetail": null,
            "field1": "EAN PRODUCTO",
            "field2": "PRODUCTO",
            "value1": "7891024149409",
            "value2": "CREME PO NATURALS P.PENT.M.PROLONG. - 020110005000005170",
            "lastUpdates": "25/08/2022 8:37"
        }
        {
            "idIndicator": 13,
            "eanProvider": "7702010000010",
            "country": "CO",
            "documentType": "Ventas/Inventarios",
            "chartType": null,
            "chartDetail": null,
            "field1": "EAN PRODUCTO",
            "field2": "PRODUCTO",
            "value1": "8718951378865",
            "value2": "ARTICULO NUEVO  -8718951378865",
            "lastUpdates": "25/08/2022 8:37"
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"DashboardHomeWebApi.java",groupTitle:"Home"},{type:"put",url:"/menus",title:"Actualizaci\xF3n de men\xFA",name:"Actualizaci\xF3n_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite actualizar opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Request-Example",content:`

{
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": 1,
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de men\xFA se modific\xF3
exitosamente",

"responseCode" : "0"

}`,type:"json"},{title:"Success-Response:",content:`
{

"responseMessage": "No se puede agregar el registro"
" ya existe una opci\xF3n de men\xFA para el pa\xEDs y producto
seleccionado, con el mismo nombre",

"responseCode" : "1002"

}`,type:"json"},{title:"Success-Response:",content:`
{

"responseMessage": "Error el menu contiene submenus
hijos",

"responseCode": "1002"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating men\xFA",

"responseCode" : "1002"


}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/:idMenu",title:"Consulta de men\xFA",name:"Consulta_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener la opcion del men\xFA por su id</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuOption",description:"<p>Id del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching men\xFA",

"responseCode" : "1004"

}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus",title:"Creacion de men\xFA",name:"Creacion_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Request-Example",content:`
{
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": 0,
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"createUser": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de men\xFA se cre\xF3
exitosamente",

"responseCode" : "0"

}`,type:"json"},{title:"Success-Response:",content:`
{

"responseMessage": "el nombre del men\xFA ya existe para este
nivel y men\xFA padre",

"responseCode" : "1001"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "el nombre del men\xFA ya existe para este
nivel y men\xFA padre",

"responseCode" : "1001"


}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/typeOption",title:"Listado Opciones Tipo Menu",name:"Listado_Opciones_Tipo_Menu",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones de tipo para asignar a la creacion de menu</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"idOptionType",description:"<p>Id de la opci\xF3n de tipo</p>"},{group:"200",type:"String",optional:!1,field:"create_user",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"option_name",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "id_option_type#1",
"sk": "root",
"idOptionType": 1,
"createUser": "admin",
"optionName": "Ventas e Inventarios"
}
],
"responseMessage": "consulta opciones de tipo de menu
correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus",title:"Listado de menus",name:"Listado_de_menus_Listado_de_menus",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/parent/:level",title:"Listado men\xFAs padre",name:"Listado_men\xFAs_padre",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los men\xFAs padre segun el nivel</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"Object",optional:!1,field:"menu",description:"<p>Menu de opciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [

{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "2",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 2,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
{
"pk":
"id_menu_option#25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"sk": "root",
"idMenuOption": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 2,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching men\xFA",

"responseCode" : "1004"

}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/previews",title:"Previsualizaci\xF3n del men\xFA",name:"Previsualizaci\xF3n_del_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) para su previsualizaci\xF3n</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/levels",title:"listado de niveles",name:"listado_de_niveles",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los niveles de men\xFA que pueden ser asignados</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de niveles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
1,
2,
3
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error listando men\xFA",

"responseCode": "1004"

}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus/order",title:"listado orden de opciones",name:"listado_orden_de_opciones",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado del orden para el men\xFA de opciones</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuParent",description:"<p>(Opcional si el nivel es 1) Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel al que pertenece la opci\xF3n</p>"}]},examples:[{title:"Request-Example",content:`
{

"parent": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",

"level": 2
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objetos</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstOrdenCreate",description:"<p>listado de niveles para Create</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstOrdenUpdate",description:"<p>listado de niveles para Update</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": {
"lstOrdenCreate": [
1,
2,
3,
4,
5,
6,
7
],
"lstOrdenUpdate": [
1,
2,
3,
4,
5,
6
]
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error listando men\xFA",

"responseCode": "1004"

}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/typeProduct",title:"menu Tipo Producto",name:"menu_Tipo_Producto",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) que son tipo producto</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType":,
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": 1,
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus/typeProduct/available",title:"menu Tipo Producto Disponible",name:"menu_Tipo_Producto_Disponible",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) que son tipo producto y no han sido contratados por la compa\xF1oa</p>",permission:[{name:`Usuario administrador
               *`}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"Number",optional:!1,field:"isOptionType",description:"<p>indica el numero de referencia de la opcion de menu si no tiene su valor es null</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType":1,
"idOptionType":1,
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": 1,
"idOptionType":2,
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 3,
"state": 1,
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/product/:idMenu",title:"Consulta menu por producto",name:"menu_por_producto",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener la opcion del men\xFA tipo producto y sus descendientes por su id</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuOption",description:"<p>Id del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
{
"pk":
"id_menu_option#a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"sk": "root",
"idMenuOption": "a2bc57a9-8e30-4bd2-8ff7-2091ef14878a",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "0",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 2,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
},
{
"pk":
"id_menu_option#25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"sk": "root",
"idMenuOption": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "0",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 2,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}
{
"pk":
"id_menu_option#25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"sk": "root",
"idMenuOption": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parent": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"parentMenuOptionName": "prueba12",
"menuOptionName": "prueba11",
"productType": "1",
"description": "prueba10",
"icon": "ubicaci\xF3n icon",
"url": "ubicaci\xF3n url",
"level": 1,
"state": "1",
"orderMenu": 1,
"creationDate": "2022-11-21 10:36:31",
"createUser": "admin",
"modificationDate": "2022-11-22 10:36:31",
"userModification": "admin",
"nameEnglish": "ingles 2",
"descriptionEnglish": "ingles 2"
}
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching men\xFA",

"responseCode" : "1004"

}`,type:"json"}]},filename:"MenuWebApi.java",groupTitle:"Menus"},{type:"put",url:"/contractedProduct",title:"Actualizaci\xF3n producto contratado",name:"Actualizaci\xF3n_producto_contratado",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite Actulizaci\xF3n de un producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idOptionType",description:"<p>id del tipo de opcion de menu, si no tiene tipo de opcion de menu el valor es null</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
{
"contractedUsers": 10,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"menuOptionName": "Fuerza de ventas",
"nameCompany": "Colgate",
"state": 0,
"idOptionType":1,
"eanTraders": [
"23980798329",
"23073298079"
]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de productos contatados se
modific\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating contracted product"

"responseCode" : "1001"


}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/active  productos",title:"contratados activos",name:"Consulta_productos_contratados_activos",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO",
"sk":
"ean_company#12345#id_menu_option#0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"activeUsers": 4,
"availableUsers": 0,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"menuOptionName": "Indicadores de ventas",
"nameCompany": "Colgate",
"state": 1
},
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"activeUsers": 3,
"availableUsers": 1,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"menuOptionName": "Descarga de fuerza de ventas",
"nameCompany": "Colgate",
"state": 1
}
],
"responseMessage": "consulta productos contratados
correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/available/ Consulta productos",title:"contratados activos y disponibles",name:"Consulta_productos_contratados_activos_y_disponibles",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos y disponibles por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO",
"sk":
"ean_company#12345#id_menu_option#0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"activeUsers": 2,
"availableUsers": 2,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"menuOptionName": "Indicadores de ventas",
"nameCompany": "Colgate",
"state": 1
},
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"activeUsers": 3,
"availableUsers": 1,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"menuOptionName": "Descarga de fuerza de ventas",
"nameCompany": "Colgate",
"state": 1
}
],
"responseMessage": "consulta productos contratados
correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct productos contratados por",title:"empresa",name:"Consulta_productos_contratados_por_empresa",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"activeUsers": 4,
"availableUsers": 0,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"menuOptionName": "Indicadores de ventas",
"nameCompany": "Colgate",
"state": 1
},
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"activeUsers": 3,
"availableUsers": 1,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"menuOptionName": "Descarga de fuerza de ventas",
"nameCompany": "Colgate",
"state": 1
}
],
"responseMessage": "consulta productos contratados
correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct",title:"Creacion de registro producto contratado",name:"Creacion_de_registro_producto_contratado",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de registro producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idOptionType",description:"<p>id del tipo de opcion de menu, si no tiene tipo de opcion de menu el valor es null</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
{
"contractedUsers": 10,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "25ef5d85-cfc7-4d79-b8c7-9df6ede6079d",
"menuOptionName": "Fuerza de ventas",
"nameCompany": "Colgate",
"state": 0,
"idOptionType":1,
"eanTraders": [
"23980798329",
"23073298079"
]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de productos contatados se
cre\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "No se puede agregar el registro, "
+ " ya existe una opci\xF3n de productos contatados para el
pa\xEDs, empresa y producto seleccionado"

"responseCode" : "1001"


}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/filter",title:"Filtro de Productos Contratados",name:"Filtro_de_Productos_Contratados",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opcion de menu</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345"
}`,type:"json"},{title:"Request-Example:",content:`{
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "20d88cac-8db0-49d7-84a0-13811e6af3a8"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"activeUsers": 4,
"availableUsers": 0,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"menuOptionName": "Indicadores de ventas",
"nameCompany": "Colgate",
"state": 1
},
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"activeUsers": 3,
"availableUsers": 1,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"menuOptionName": "Descarga de fuerza de ventas",
"nameCompany": "Colgate",
"state": 1
}
],
"responseMessage": "consulta productos contratados
correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct",title:"Productos Contratados por Compa\xF1ia",name:"Productos_Contratados_por_Compa\xF1ia",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados por Compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"activeUsers": 4,
"availableUsers": 0,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"menuOptionName": "Indicadores de ventas",
"nameCompany": "Colgate",
"state": 1
},
{
"pk": "country#CO",
"sk":"ean_company#12345#id_menu_option#85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"activeUsers": 3,
"availableUsers": 1,
"contractedUsers": 4,
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "85065912-a5eb-47c5-aaf4-e4c328d0bdb8",
"menuOptionName": "Descarga de fuerza de ventas",
"nameCompany": "Colgate",
"state": 1
}
],
"responseMessage": "consulta productos contratados
correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"put",url:"/contractedProduct",title:"Actualizaci\xF3n Regla de Negocio",name:"Actualizaci\xF3n_Regla_de_Negocio",group:"Reglas_de_Negocio",version:"0.1.0",description:"<p>Este servicio permite Actualizaci\xF3n de una Regla de Negocio</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>ean de la campo\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idBusinessRule",description:"<p>id de la regla de negocio</p>"},{group:"Parameter",type:"String",optional:!1,field:"businnessRuleName",description:"<p>nombre de la regla de negocio</p>"}]},examples:[{title:"Request-Example",content:`
{
"eanTrader":"9003690230001",
"idBusinessRule":"2",
"businnessRuleName":"recarga",
"modification_user";"admin"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La regla de negocio se
modific\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating bussines rule "

"responseCode" : "1001"


}`,type:"json"}]},filename:"BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"post",url:"/businnessRule/filter",title:"Filtro Reglas de Negocio",name:"Filtro_Reglas_de_negocio",group:"Reglas_de_Negocio",version:"0.1.0",description:"<p>Este servicio le permite realizar el filtro para listar las Reglas de negocio de un comerciante</p>",parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de los comerciantes seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"rules",description:"<p>Listado de reglas de negocio</p>"}]},examples:[{title:"Request-Example:",content:`

{
"country": "CO",
"eanTraders": [
"9003690230001",
"8909225860000"
],
"nameTraders": [
"Colgate",
"palmolive"
],
"rules": [
2,
4
]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de solicitudes</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",description:"<p>id del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"traderName",description:"<p>nombre del comerciante</p>"},{group:"200",type:"Number",optional:!1,field:"idBusinessRule",description:"<p>id regla de negocio</p>"},{group:"200",type:"String",optional:!1,field:"businnessRuleName",description:"<p>nombre de la regla de negocio</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>estado de la regla de negocio</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>fecha de modificacion</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>usuario de modificacion</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "ean_trader#9003690230001",
"sk": "root",
"country": "CO",
"eanTrader": "9003690230001",
"traderName": null,
"idBusinessRule": 3,
"businnessRuleName": null,
"state": 1,
"modificationDate": null,
"modificationUser": null
},
{
"pk": "ean_trader#8909225860000",
"sk": "root",
"country": "CO",
"eanTrader": "8909225860000",
"traderName": null,
"idBusinessRule": 3,
"businnessRuleName": null,
"state": 1,
"modificationDate": null,
"modificationUser": null
}
],
"responseMessage": "consulta correctamente",
"responseCode": "0"`,type:"json"}]},filename:"BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"get",url:"/businnessRule",title:"Listado de Reglas de negocio",name:"Listado_de_Reglas_de_negocio",group:"Reglas_de_Negocio",version:"0.1.0",description:"<p>Este servicio permite obtener las reflas de negocio registradas en el sistema</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "id_business_rule#3",
"sk": "root",
"description": "Reemplazar - Reemplazar",
"idBusinessRule": 3
},
{
"pk": "id_business_rule#2",
"sk": "root",
"description": "Reemplazar - Sumar",
"idBusinessRule": 2
},
{
"pk": "id_business_rule#4",
"sk": "root",
"description": "Sumar - Sumar",
"idBusinessRule": 4
},
{
"pk": "id_business_rule#1",
"sk": "root",
"description": "Sumar - Reemplazar",
"idBusinessRule": 1
}
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error listando bussines rule",

"responseCode" : "1001"
}`,type:"json"}]},filename:"BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"put",url:"/dynamicreports",title:"Actualizar configuraci\xF3n",name:"Actualizar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite actualizar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationDare",description:"<p>fecha de creacion</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.modificationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
             {
             "pk": "ean_provider#7702010000050",
             "sk": "pivot#780ace51-5485-4fff-bde8-641796393acd",
             "dynamicReportDTO": {
             "eanProvider": "7702010000050",
             "country": "CO",
             "typeOfReport": "ventas",
             "generationFrequency": "Mensual",
             "generationDay": "15",
             "reportStatus": "INACTIVO",
             "typeOfDataGrouping": "Diario",
             "amountOfPeriodsToGenerate": 10,
             "fileName": "PRUEBA DE REPORTE DYNAMICO nO 23",
             "emails": "correoprueba,correo2@prueba",
             "comparePreviousPeriod": 0,
             "crossSalesOrInventories": 1,
             "lstFilterTraders": [
             {
             "eanTrader": "7701015000018",
             "trader": "Comfandi"
             },
             {
             "eanTrader": "7701001000008",
             "trader": "Almacenes Exito S.A"
             }
             ],
             "lstFilterEansPointsales": [
             "7701015005143",
             "7701001007106"
             ],
             "lstFilterPointSales": [
             {
             "eanPointSale": "7701015005143",
             "pointSaleName": "SUPERMERCADO TERMINAL"
             },
             {
             "eanPointSale": "7701001004600",
             "pointSaleName": "028 - EXITO DEL ESTE"
             }
             ],
             "lstFilterFormats": [
             "Supermercado",
             "Exito"
             ],
             "lstFilterLevel1Geographies": [
             {
             "idLevelOne": "68",
             "levelOne": "SANTANDER"
             }
             ],
             "lstFilterLevel4Geographies": [
             {
             "idLevelFour": "855",
             "levelFour": "VALLE DE SAN JOSE"
             }
             ],
             "lstFilterChannels": [
             "CANAL POR DEFECTO",
             "CANAL 1"
             ],
             "lstFilterLevel1Categories": [
             "PORTAFOLIO - CONSOLIDADO",
             "ASEO"
             ],
             "lstFilterProducts": [
             {
             "eanProduct": "7509546076478",
             "productName": "LSS PERFECT TONE VIT E DERMA 2 PACK"
             },
             {
             "eanProduct": "7702010921483",
             "productName": "SOAP PROTEX LIMPIEZA PROFUNDA 3X120G"
             }
             ],
             "lstLevel1Jeraquies": [
             "FUERZA DE VENTAS - CONSOLIDADO",
             "GERENTE"
             ],
             "lstFilterSalesMan": [
             {
             "salesManCode": "0",
             "salesMan": "KCM COMFANDI"
             },
             {
             "salesManCode": "0",
             "salesMan": "VENDEDOR POR DEFECTO"
             }
             ],
             "lstFilterBrands": [
             "MARCA1",
             "MARCA2"
             ],
             "lstFilterColors": [
             "ROSA",
             "AZUL"
             ],
             "lstFilterSizes": [
             "XL",
             "M"
             ],
             "checkTrader": 1,
             "checkPointSale": 1,
             "checkChanel": 1,
             "checkFormat": 0,
             "checkDepartamentState": 1,
             "checkCity": 1,
             "checkSalesForceHierarchy": 0,
             "checkSalesMan": 1,
             "checkCategoriesProduct": 1,
             "checkProduct": 0,
             "checkBrand": 0,
             "checkColor": 0,
             "checkSize": 1,
             "checkDispatchUnit": 1,
             "checkStandardUnit": 0,
             "checkWeight": 0,
             "checkVolume": 1,
             "idUser": "1",
             "creationUser": "francisco diaz"
 "creationDate": "2023-01-20 11:21:50",
"modificationUser": "francisco diaz"
             }
             }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Si fue configurado con estado Activo y
la cantidad de registros
no excede la cantidad permitida, el d\xEDa de generaci\xF3n
puede consultarlo
via email o ingresando por el sistema a la opci\xF3n de
descargas de reportes",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "Error guardando configuraci\xF3n del
reporte",
"responseCode": "1001"
}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/downloads",title:"Descarga archivos",name:"Descarga_archivo",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo que fue cargado por la pagina web y los archivos que son generados por medio de la pagina</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathFileName",description:"<p>Path del archivo a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"generatedFileName",description:"<p>Nombre del archivo a descargar</p>"}]},examples:[{title:"Request-Example:",content:`
{

"pathFileName":"analitica-dev-prescriptiva-pivot-bucket/ean_provider=7702010000010",
"generatedFileName":"Pvt_Per_Anual_new_report_20230104_120427.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": {

"fileName":
"fuerza_ventas_colgate_20220714113456223_1.csv",

"fileContent":
"U29jaW8gY29tZXJjaWFsO0VBTiBQVjtQVjtOaXZlbCAwO05pdmV"
},

"responseMessage": "Archivo descargado correctamente",

"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

"responseMessage": "error descargando el archivo",

"responseCode": "1004"

}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/masters/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa el archivo cargado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path del log</p>"},{group:"Parameter",type:"String",optional:!1,field:"logFileName",description:"<p>Nombrte del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
{

"pathLogFileName":"prescriptiva-logs-etl/products",
"logFileName":"Catalogo_20220805112600_1111_log.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": {

"fileName": "Catalogo_20220805112600_1111_log.csv",

"fileContent":
"U29jaW8gY29tZXJjaWFsO0VBTiBQVjtQVjtOaXZlbCAwO05pdmV"
},

"responseMessage": "Archivo descargado correctamente",

"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

"responseMessage": "error descargando el archivo",

"responseCode": "1004"

}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/roles/filter",title:"Filtro de Reportes Dinamicos",name:"Filtro_de_Reportes_Dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite filtrar los Reportes Dinamicos por un estado y Fecha Vencimiento</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con las configuraciones de la pivote</p>"}],Parameter:[{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del Reporte Dinamico (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto, el pk contiene el ean_provider</p>"},{group:"Parameter",type:"String",optional:!1,field:"expirationDate",description:"<p>fecha de Vencimiento en formato 2022-12</p>"}]},examples:[{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010",
"state": "ACTIVO"
}`,type:"json"},{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010",
"dynamicReportDTO":{
"expirationDate":"2022-12"
}
}`,type:"json"},{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010",
"state": "ACTIVO",
"dynamicReportDTO":{
"expirationDate":"2022-12"
}
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
                   {
                   "objectData": [
                   {
                   "pk": "ean_provider#7702010000010",
                   "sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8",
                   "dynamicReportDTO": {
                   "eanProvider": "7702010000010",
                   "country": "CO",
                   "typeOfReport": "ventas",
                   "generationFrequency": "Semanal",
                   "generationDay": null,
                   "reportStatus": "1",
                   "typeOfDataGrouping": "Anual",
                   "amountOfPeriodsToGenerate": 10,
                   "fileName": "new_report",
                   "emails":
                   "katherine.camacho@carvajal.com,mateo.romero@carvajal.com,qrt-ivan.hernandez@carvajal.com,
francisco.diaz@carvajal.com,luis.cortesr@carvajal.com",
                   "comparePreviousPeriod": 1,
                   "crossSalesOrInventories": 0,
                   "lstFilterTraders": [
                   {
                   "eanTrader": "7701001000008",
                   "trader": "Almacenes Exito S.A"
                   }
                   ],
                   "lstFilterEansPointsales": [
                   "7701001422107"
                   ],
                   "lstFilterPointSales": [],
                   "lstFilterFormats": [],
                   "lstFilterLevel1Geographies": [],
                   "lstFilterLevel4Geographies": [],
                   "lstFilterChannels": [],
                   "lstFilterLevel1Categories": null,
                   "lstFilterProducts": [
                   {
                   "eanProduct": "7509546017143",
                   "productName": "Art\xEDculo Nuevo - 7509546017143"
                   }
                   ],
                   "lstLevel1Jeraquies": null,
                   "lstFilterSalesMan": [],
                   "lstFilterBrands": [],
                   "lstFilterColors": [],
                   "lstFilterSizes": [],
                   "checkTrader": 1,
                   "checkPointSale": 1,
                   "checkChanel": 1,
                   "checkFormat": 1,
                   "checkDepartamentState": 1,
                   "checkCity": 1,
                   "checkSalesForceHierarchy": 1,
                   "checkSalesMan": 1,
                   "checkCategoriesProduct": 1,
                   "checkProduct": 1,
                   "checkBrand": 1,
                   "checkColor": 1,
                   "checkSize": 1,
                   "checkDispatchUnit": 1,
                   "checkStandardUnit": 1,
                   "checkWeight": 1,
                   "checkVolume": 1,
                   "idUser": "fradia",
                   "creationUser": "Nestor Plata",
                   "creationDate": "2022-12-23 07:41:29",
                   "expirationDate": "2022-12-30 07:41:29",
                   "modificationDate": "2022-12-30 07:41:29",
                   "modificationUser": "Nestor Plata"
                   },
                   "generatedFileName":
                   "Pvt_Per_Anual_new_report_20230104_120427.csv",
                   "generationDay": "Diario",
                   "generationFrecuency": "Diario",
                   "historicalExecutions": [
                   "2023-01-04 11:26:59",
                   "2023-01-04 11:28:19",
                   "2023-01-04 11:38:58",
                   "2023-01-04 12:04:27"
                   ],
                   "logFileName": "Ptv_Per_diario_reportUno_2423646_log.txt",
                   "pathFileName":
                   "analitica-dev-prescriptiva-pivot-bucket/ean_provider=7702010000010",
                   "pathLogFileName":
                   "analitica-dev-prescriptiva-masters-downloads-bucket/log/pivots",
                   "retries": 11,
                   "state": "ACTIVO",
                   "urlMail":
                   "https://analitica-dev-prescriptiva-pivot-bucket.s3.amazonaws.com/YxVfWF2"
                   }
                   ],
                   "responseMessage": "consulta reporte dinamico
                   correctamente",
                   "responseCode": "0"
                   }`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"reportStatus",description:"<p>Estado del reporte (&quot;ACTIVO&quot;,&quot;INACTIVO&quot;)</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
{
"eanProvider": "7702010000010",
"country": "CO",
"typeOfReport": "ventas",
"generationFrequency": "Mensual",
"generationDay": "15",
"reportStatus": "ACTIVO",
"typeOfDataGrouping": "Diario",
"amountOfPeriodsToGenerate": 10,
"fileName": "PRUEBA DE REPORTE DYNAMICO nO 23",
"emails": "correoprueba,correo2@prueba",
"comparePreviousPeriod": 0,
"crossSalesOrInventories": 1,
"lstFilterTraders": [
{
"eanTrader": "7701015000018",
"trader": "Comfandi"
},
{
"eanTrader": "7701001000008",
"trader": "Almacenes Exito S.A"
}
],
"lstFilterEansPointsales": [
"7701015005143",
"7701001007106"
],
"lstFilterPointSales": [
{
"eanPointSale": "7701015005143",
"pointSaleName": "SUPERMERCADO TERMINAL"
},
{
"eanPointSale": "7701001004600",
"pointSaleName": "028 - EXITO DEL ESTE"
}
],
"lstFilterFormats": [
"Supermercado",
"Exito"
],
"lstFilterLevel1Geographies": [
{
"idLevelOne": "68",
"levelOne": "SANTANDER"
}
],
"lstFilterLevel4Geographies": [
{
"idLevelFour": "855",
"levelFour": "VALLE DE SAN JOSE"
}
],
"lstFilterChannels": [
"CANAL POR DEFECTO",
"CANAL 1"
],
"lstFilterLevel1Categories": [
"PORTAFOLIO - CONSOLIDADO",
"ASEO"
],
"lstFilterProducts": [
{
"eanProduct": "7509546076478",
"productName": "LSS PERFECT TONE VIT E DERMA 2 PACK"
},
{
"eanProduct": "7702010921483",
"productName": "SOAP PROTEX LIMPIEZA PROFUNDA 3X120G"
}
],
"lstLevel1Jeraquies": [
"FUERZA DE VENTAS - CONSOLIDADO",
"GERENTE"
],
"lstFilterSalesMan": [
{
"salesManCode": "0",
"salesMan": "KCM COMFANDI"
},
{
"salesManCode": "0",
"salesMan": "VENDEDOR POR DEFECTO"
}
],
"lstFilterBrands": [
"MARCA1",
"MARCA2"
],
"lstFilterColors": [
"ROSA",
"AZUL"
],
"lstFilterSizes": [
"XL",
"M"
],
"checkTrader": 1,
"checkPointSale": 1,
"checkChanel": 1,
"checkFormat": 0,
"checkDepartamentState": 1,
"checkCity": 1,
"checkSalesForceHierarchy": 0,
"checkSalesMan": 1,
"checkCategoriesProduct": 1,
"checkProduct": 0,
"checkBrand": 0,
"checkColor": 0,
"checkSize": 1,
"checkDispatchUnit": 1,
"checkStandardUnit": 0,
"checkWeight": 0,
"checkVolume": 1,
"idUser": "fradia",
"creationUser": "francisco diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Si fue configurado con estado Activo y
la cantidad de registros
no excede la cantidad permitida, el d\xEDa de generaci\xF3n
puede consultarlo
via email o ingresando por el sistema a la opci\xF3n de
descargas de reportes",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "Error guardando configuraci\xF3n del
reporte",
"responseCode": "1001"
}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/provider",title:"Listado Reportes dinamicos",name:"Listado_de_Reportes_dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los Reportes dinamicos asociados al fabricante</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
                   {
                   "objectData": [
                   {
                   "pk": "ean_provider#7702010000010",
                   "sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8",
                   "dynamicReportDTO": {
                   "eanProvider": "7702010000010",
                   "country": "CO",
                   "typeOfReport": "ventas",
                   "generationFrequency": "Semanal",
                   "generationDay": null,
                   "reportStatus": "1",
                   "typeOfDataGrouping": "Anual",
                   "amountOfPeriodsToGenerate": 10,
                   "fileName": "new_report",
                   "emails":
                   "katherine.camacho@carvajal.com,mateo.romero@carvajal.com,
qrt-ivan.hernandez@carvajal.com,francisco.diaz@carvajal.com,luis.cortesr@carvajal.com",
                   "comparePreviousPeriod": 1,
                   "crossSalesOrInventories": 0,
                   "lstFilterTraders": [
                   {
                   "eanTrader": "7701001000008",
                   "trader": "Almacenes Exito S.A"
                   }
                   ],
                   "lstFilterEansPointsales": [
                   "7701001422107"
                   ],
                   "lstFilterPointSales": [],
                   "lstFilterFormats": [],
                   "lstFilterLevel1Geographies": [],
                   "lstFilterLevel4Geographies": [],
                   "lstFilterChannels": [],
                   "lstFilterLevel1Categories": null,
                   "lstFilterProducts": [
                   {
                   "eanProduct": "7509546017143",
                   "productName": "Art\xEDculo Nuevo - 7509546017143"
                   }
                   ],
                   "lstLevel1Jeraquies": null,
                   "lstFilterSalesMan": [],
                   "lstFilterBrands": [],
                   "lstFilterColors": [],
                   "lstFilterSizes": [],
                   "checkTrader": 1,
                   "checkPointSale": 1,
                   "checkChanel": 1,
                   "checkFormat": 1,
                   "checkDepartamentState": 1,
                   "checkCity": 1,
                   "checkSalesForceHierarchy": 1,
                   "checkSalesMan": 1,
                   "checkCategoriesProduct": 1,
                   "checkProduct": 1,
                   "checkBrand": 1,
                   "checkColor": 1,
                   "checkSize": 1,
                   "checkDispatchUnit": 1,
                   "checkStandardUnit": 1,
                   "checkWeight": 1,
                   "checkVolume": 1,
                   "idUser": "fradia",
                   "creationUser": "Nestor Plata",
                   "creationDate": "2022-12-23 07:41:29",
                   "expirationDate": "2022-12-30 07:41:29",
                   "modificationDate": "2022-12-30 07:41:29",
                   "modificationUser": "Nestor Plata"
                   },
                   "generatedFileName":
                   "Pvt_Per_Anual_new_report_20230104_120427.csv",
                   "generationDay": "Diario",
                   "generationFrecuency": "Diario",
                   "historicalExecutions": [
                   "2023-01-04 11:26:59",
                   "2023-01-04 11:28:19",
                   "2023-01-04 11:38:58",
                   "2023-01-04 12:04:27"
                   ],
                   "logFileName": "Ptv_Per_diario_reportUno_2423646_log.txt",
                   "pathFileName":
                   "analitica-dev-prescriptiva-pivot-bucket/ean_provider=7702010000010",
                   "pathLogFileName":
                   "analitica-dev-prescriptiva-masters-downloads-bucket/log/pivots",
                   "retries": 11,
                   "state": "ACTIVO",
                   "urlMail":
                   "https://analitica-dev-prescriptiva-pivot-bucket.s3.amazonaws.com/
                   }
                   ],
                   "responseMessage": "consulta reporte dinamico
                   correctamente",
                   "responseCode": "0"
                   }`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"get",url:"/dynamicreports/companies/:eanprovider Validaci\xF3n reportes",title:"disponibles",name:"Validaci\xF3n_reportes_disponibles",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite verificar si la empresa cuenta con cupo disponible para la creaci\xF3n de mas reportes din\xE1micos peri\xF3dicos</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Esta validado para crear de reportes",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "El usuario ya cuenta con 50 reportes
activos. Si requiere crear
uno nuevo, desactive alguno de los que est\xE1n en uso.",
"responseCode": "1005"
}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/pivote",title:"reporte dinamico por id",name:"reporte_dinamico_por_id",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener un reporte dinamico por su id y ean provider</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010",
"sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
                   {
                   "objectData": [
                   {
                   "pk": "ean_provider#7702010000010",
                   "sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8",
                   "dynamicReportDTO": {
                   "eanProvider": "7702010000010",
                   "country": "CO",
                   "typeOfReport": "ventas",
                   "generationFrequency": "Semanal",
                   "generationDay": null,
                   "reportStatus": "1",
                   "typeOfDataGrouping": "Anual",
                   "amountOfPeriodsToGenerate": 10,
                   "fileName": "new_report",
                   "emails":
                   "katherine.camacho@carvajal.com,mateo.romero@carvajal.com,qrt-
ivan.hernandez@carvajal.com,francisco.diaz@carvajal.com,luis.cortesr@carvajal.com",
                   "comparePreviousPeriod": 1,
                   "crossSalesOrInventories": 0,
                   "lstFilterTraders": [
                   {
                   "eanTrader": "7701001000008",
                   "trader": "Almacenes Exito S.A"
                   }
                   ],
                   "lstFilterEansPointsales": [
                   "7701001422107"
                   ],
                   "lstFilterPointSales": [],
                   "lstFilterFormats": [],
                   "lstFilterLevel1Geographies": [],
                   "lstFilterLevel4Geographies": [],
                   "lstFilterChannels": [],
                   "lstFilterLevel1Categories": null,
                   "lstFilterProducts": [
                   {
                   "eanProduct": "7509546017143",
                   "productName": "Art\xEDculo Nuevo - 7509546017143"
                   }
                   ],
                   "lstLevel1Jeraquies": null,
                   "lstFilterSalesMan": [],
                   "lstFilterBrands": [],
                   "lstFilterColors": [],
                   "lstFilterSizes": [],
                   "checkTrader": 1,
                   "checkPointSale": 1,
                   "checkChanel": 1,
                   "checkFormat": 1,
                   "checkDepartamentState": 1,
                   "checkCity": 1,
                   "checkSalesForceHierarchy": 1,
                   "checkSalesMan": 1,
                   "checkCategoriesProduct": 1,
                   "checkProduct": 1,
                   "checkBrand": 1,
                   "checkColor": 1,
                   "checkSize": 1,
                   "checkDispatchUnit": 1,
                   "checkStandardUnit": 1,
                   "checkWeight": 1,
                   "checkVolume": 1,
                   "idUser": "fradia",
                   "creationUser": "Nestor Plata",
                   "creationDate": "2022-12-23 07:41:29",
                   "expirationDate": "2022-12-30 07:41:29",
                   "modificationDate": "2022-12-30 07:41:29",
                   "modificationUser": "Nestor Plata"
                   },
                   "generatedFileName":
                   "Pvt_Per_Anual_new_report_20230104_120427.csv",
                   "generationDay": "Diario",
                   "generationFrecuency": "Diario",
                   "historicalExecutions": [
                   "2023-01-04 11:26:59",
                   "2023-01-04 11:28:19",
                   "2023-01-04 11:38:58",
                   "2023-01-04 12:04:27"
                   ],
                   "logFileName": "Ptv_Per_diario_reportUno_2423646_log.txt",
                   "pathFileName":
                   "analitica-dev-prescriptiva-pivot-bucket/ean_provider=7702010000010",
                   "pathLogFileName":
                   "analitica-dev-prescriptiva-masters-downloads-bucket/log/pivots",
                   "retries": 11,
                   "state": "ACTIVO",
                   "urlMail":
                   "https://analitica-dev-prescriptiva-pivot-bucket.s3.amazonaws.com/ean_provider%3D7702010000010/"
                   }
                   ],
                   "responseMessage": "consulta reporte dinamico
                   correctamente",
                   "responseCode": "0"
                   }`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"put",url:"/roles",title:"Actualizaci\xF3n de rol",name:"Actualizaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite actualizar los datos del rol y sus permisos</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1=Activo , 0 = Inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"clientType",description:"<p>Tipo de rol(cliente o carvajal) = (SI NO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "id_role#676f4b02-3db7-4bd4-b78f-9047353aedd9",
    "sk": "root",
    "nameRole": "rol admin actualizado",
    "descriptionRole": " este rol se actualizo",
    "state": 1,
    "idMenuOption": "menu_option#uuid_2",
    "clientType": "NO"
    "menuOptionName": "admin actualizado",
    "userModification": "Francisco Diaz",
    "lstMenuOptions": [
        "menu_option#uuid_1"
    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
  "responseMessage": "Cambios guardados exitosamente",

  "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
   "responseCode" : "1005",

   "responseMessage": "El Rol existe en el sistema. Por favor ingrese un nombre diferente de Rol"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1002",

   "responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir el error "
                      "por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/products",title:"Consulta roles por producto",name:"Consulta_roles_por_producto",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos roles que pertenecen a un producto en especifico o solo roles tip\xF3 cliente y el estado del rol sea activo</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opcion del menu tipo producto seleccionada</p>"},{group:"Parameter",type:"Boolean",optional:!1,field:"isClient",description:"<p>campo que indica si el listado de roles es para un usuario administrador carvajal o un usuario cliente</p>"}]},examples:[{title:"Request-Example:",content:`
{
  "idMenuOption": "e7c2b9d8-9c8e-4db0-bbb8-874e793e5114",
  "isClient": false
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "id_role#676f4b02-3db7-4bd4-b78f-9047353aedd9",
            "sk": "root",
            "idRole": "676f4b02-3db7-4bd4-b78f-9047353aedd9",
            "nameRole": "rol admin actualizado 1256",
            "descriptionRole": " este rol se actualizo",
            "lstMenuOptions": [
                "menu_option#uuid_1"
            ],
           "state": 1,
            "idMenuOption": "uuid_3",
            "menuOptionName": "admin actualizado",
            "createUser": "Francisco diaz",
            "creationDate": "2022-11-17 16:56:48",
            "userModification": "Francisco Diaz",
            "modificationDate": "2022-11-24 09:47:40"
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles",title:"Creaci\xF3n de rol",name:"Creaci\xF3n_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite crear un nuevo rol en el sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1= activo 0 = inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"clientType",description:"<p>Tipo de rol(cliente o carvajal) = (SI NO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "nameRole": "rol de prueba",
    "descriptionRole": " esta es un rol de prueba",
    "state": 1,
    "idMenuOption": "menu_option#uuid_1",
    "menuOptionName": "admin",
    "clientType": "SI"
    "createUser": "Francisco diaz",
    "lstMenuOptions": [
        "menu_option#uuid_1",
        "menu_option#uuid_2",
        "menu_option#uuid_3",
        "menu_option#uuid_4",
        "menu_option#uuid_5"

    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
   "responseMessage": "Cambios guardados exitosamente",

   "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
   "responseCode" : "1005",

   "responseMessage": "El Rol existe en el sistema. Por favor ingrese un nombre diferente de Rol"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1001",

   "responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir el error "
                      "por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"delete",url:"/roles",title:"Eliminaci\xF3n de rol",name:"Eliminaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permire eliminar un rol del sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "menu_option#uuid_1",
    "sk": "role#uuid_1"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

   "responseMessage": "Cambios guardados exitosamente",

   "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "El Rol Administrador que desea eliminar tiene usuarios asignados. "
  "Por favor reasignar estos usuarios a un Rol diferente desde Administrar usuarios, antes de continuar "
  " con la eliminaci\xF3n.",

  "responseCode": "1003"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseCode" : "1003",

   "responseMessage": "error removing role"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/filter",title:"Filtro de roles",name:"Filtro_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1= activo, 0=inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opcion del menu que se selecciono</p>"},{group:"Parameter",type:"String",optional:!1,field:"clientType",description:"<p>Tipo de cliente del rol (SI,NO,Todos) IMPORTANTE  si se selecciona todos enviar el valor de campo vacio ejemplo ( clientType = &quot;&quot; )</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
    "sk": "root",
    "state": 1,
    "idMenuOption":"uui",
    "clientType": "SI"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "state": 1
}`,type:"json"},{title:"Request-Example:",content:`
{
        "pk": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
        "sk": "root",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#610c8a8b-940a-4b4e-b86f-e3fac6705f60",
            "idRole": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco3",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#a4a360a5-e22a-4fb9-964b-1c84e17a7285",
            "idRole": "id_role#f01b6c52-213d-4gga-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco4",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null,
            "clientType": "NO",
                 "containsUsers": false
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#uuid_1",
            "nameRole": "test",
            "descriptionRole": "test",
            "lstMenuOptions": [
                "menu_option#uuid_2",
                "menu_option#uuid_3"
            ],
            "state": 1,
            "idMenuOptionSk": "menu_option#uuid_1",
            "menuOptionName": "test",
            "createUser": "test",
            "creationDate": "yyyy-mm-dd hh:mi:ss",
            "userModification": "test",
            "modificationDate": "yyyy-mm-dd hh:mi:ss",
            "clientType": "NO",
                 "containsUsers": false
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/providers/administrations",title:"Filtro roles lado del cliente",name:"Filtro_roles_lado_del_cliente",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles que sean marcados como tipo cliente que tengan relacion con los filtros aplicados de productos contratados y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partion del objecto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto contratado selecionado</p>"}]},examples:[{title:"Request-Example:",content:`
{
"idMenuOption": "e7c2b9d8-9c8e-4db0-bbb8-874e793e5114",
"pk":"id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
"sk":"root"
}`,type:"json"},{title:"Request-Example:",content:`
{
"pk":"id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
"sk":"root"
}`,type:"json"},{title:"Request-Example:",content:`
{
"idMenuOption": "e7c2b9d8-9c8e-4db0-bbb8-874e793e5114"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#610c8a8b-940a-4b4e-b86f-e3fac6705f60",
            "idRole": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco3",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#a4a360a5-e22a-4fb9-964b-1c84e17a7285",
            "idRole": "id_role#f01b6c52-213d-4gga-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco4",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null,
            "clientType": "NO",
            "containsUsers": false
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#uuid_1",
            "nameRole": "test",
            "descriptionRole": "test",
            "lstMenuOptions": [
                "menu_option#uuid_2",
                "menu_option#uuid_3"
            ],
            "state": 1,
            "idMenuOptionSk": "menu_option#uuid_1",
            "menuOptionName": "test",
            "createUser": "test",
            "creationDate": "yyyy-mm-dd hh:mi:ss",
            "userModification": "test",
            "modificationDate": "yyyy-mm-dd hh:mi:ss",
            "clientType": "NO",
            "containsUsers": false
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda.
     Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1004",

   "responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir el error "
                      "por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"get",url:"/roles",title:"Listado de roles",name:"Listado_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#610c8a8b-940a-4b4e-b86f-e3fac6705f60",
            "idRole": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco3",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null,
            "clientType": "NO",
                 "containsUsers": false
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#a4a360a5-e22a-4fb9-964b-1c84e17a7285",
            "idRole": "id_role#f01b6c52-213d-4gga-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco4",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null,
            "clientType": "NO",
                 "containsUsers": false
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#uuid_1",
            "nameRole": "test",
            "descriptionRole": "test",
            "lstMenuOptions": [
                "menu_option#uuid_2",
                "menu_option#uuid_3"
            ],
            "state": 1,
            "idMenuOptionSk": "menu_option#uuid_1",
            "menuOptionName": "test",
            "createUser": "test",
            "creationDate": "yyyy-mm-dd hh:mi:ss",
            "userModification": "test",
            "modificationDate": "yyyy-mm-dd hh:mi:ss",
            "clientType": "NO",
                 "containsUsers": false
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/products/providers",title:"Roles tipo cliente por productos",name:"Roles_tipo_cliente_por_productos",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles que sean marcados como tipo cliente con estado activo que tengan relacion con los productos contrados de la empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia logueada</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "CASSANDRA"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#610c8a8b-940a-4b4e-b86f-e3fac6705f60",
            "idRole": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco3",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#a4a360a5-e22a-4fb9-964b-1c84e17a7285",
            "idRole": "id_role#f01b6c52-213d-4gga-ab87-4b7effe35566",
            "nameRole": "rol de prueba Francisco4",
            "descriptionRole": " esta es una prueba",
            "lstMenuOptions": [
                "menu_option#uuid_1",
                "menu_option#uuid_2",
                "menu_option#uuid_2"
            ],
            "state": 1,
            "idMenuOption": "menu_option#uuid_1",
            "menuOptionName": "admin",
            "createUser": "Francisco diaz",
            "creationDate": null,
            "userModification": null,
            "modificationDate": null,
            "clientType": "NO",
                 "containsUsers": false
        },
        {
            "pk": "menu_option#uuid_1",
            "sk": "role#uuid_1",
            "nameRole": "test",
            "descriptionRole": "test",
            "lstMenuOptions": [
                "menu_option#uuid_2",
                "menu_option#uuid_3"
            ],
            "state": 1,
            "idMenuOptionSk": "menu_option#uuid_1",
            "menuOptionName": "test",
            "createUser": "test",
            "creationDate": "yyyy-mm-dd hh:mi:ss",
            "userModification": "test",
            "modificationDate": "yyyy-mm-dd hh:mi:ss",
            "clientType": "NO",
                 "containsUsers": false
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/menus",title:"Visualizar men\xFA por rol",name:"Visualizar_men\xFA_por_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las opciones de men\xFA que fueron asignadas al rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partion del objecto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto seleccionado</p>"}]},examples:[{title:"Request-Example:",content:`
{ 
"pk":"id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
"sk":"root"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de opciones de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "id_menu_option#855cef38-6349-41ea-b372-3ef21113ee94",
            "sk": "root",
            "idMenuOption": "855cef38-6349-41ea-b372-3ef21113ee94",
            "parent": "8377877b-2a72-41bc-a257-eada6cb5cd3a",
            "parentMenuOptionName": "Menu test",
            "menuOptionName": "menu prueba dos",
            "productType": 0,
            "idOptionType": null,
            "description": "test",
            "icon": "addChart.svg",
            "url": "www.localhost.com",
            "level": 2,
            "state": 1,
            "orderMenu": 5,
            "creationDate": "2022-12-05 15:46:33",
            "createUser": "Admin",
            "modificationDate": null,
            "userModification": null,
            "nameEnglish": "prueba dos",
            "descriptionEnglish": "test"
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"put",url:"/configurations/routes/special/files",title:"Editar Configuraci\xF3n",name:"Editar_Configuraci\xF3n",group:"Rutas_archivos_especiales",version:"0.1.0",description:"<p>Este servicio permite editar la configuracion de las rutas para el envio de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais al que pertenecera la empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",description:"<p>Ruta para la entrega de los archivos especiales</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido del usuario logueado que esta editando el registro</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk":"country#CO",
    "sk":"ean_provider#12",
    "country":"CO",
    "eanProvider":"12",
    "provider": "prueba creacion56",
    "url":"RUTA DE ENVIO",
    "state": "ACTIVO",
    "modificationUser": "Francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Cambios guardados correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda. 
                        Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 
                        satisfactoriamente. Intenta nuevamente en unos segundos 
                        o comun\xEDcate con soporte https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationRouteSpecialFileWebApi.java",groupTitle:"Rutas_archivos_especiales"},{type:"post",url:"/configurations/routes/special/files",title:"Guardar Configuraci\xF3n",name:"Guardar_Configuraci\xF3n",group:"Rutas_archivos_especiales",version:"0.1.0",description:"<p>Este servicio permite Guardar la configuracion de las rutas para el envio de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais al que pertenecera la empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",description:"<p>Ruta para la entrega de los archivos especiales</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario logueado que esta creando el registro</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country":"CO",
    "eanProvider":"12",
    "provider": "prueba creacion56",
    "url":"RUTA DE ENVIO",
    "state": "ACTIVO",
    "creationUser": "Francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "La ruta se ha creado correctamente para la entrega de los archivos especiales",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "La empresa prueba creacion56 ya tiene configurada una 
                      ruta para la entrega de los archivos especiales. Modifica 
                      los datos e intenta de nuevo",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 
                        satisfactoriamente. Intenta nuevamente en unos segundos 
                        o comun\xEDcate con soporte https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationRouteSpecialFileWebApi.java",groupTitle:"Rutas_archivos_especiales"},{type:"post",url:"/configurations/routes/special/files/administrations",title:"listado rutas archivos especiales",name:"listado_rutas_archivos_especiales",group:"Rutas_archivos_especiales",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las rutas para el envio de los archivos especiales para los clientes</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstProviders",description:"<p>listado con el ean del proveedor seleccionado IMPORTANTE = si no se selecciono data o si se seleeciono todos los registros enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProviders",description:"<p>Listado de eans de proveedores seleccionados IMPORTANTE = si no se selecciono data o si se seleeciono todos los registros enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country":"CO",
    "lstProviders":[],
    "lstEanProviders":[]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country":"CO",
    "lstProviders":["12345"],
    "lstEanProviders":[]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country":"CO",
    "lstProviders":[],
    "lstEanProviders":["123456"]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country":"CO",
    "lstProviders":["123456"],
    "lstEanProviders":["123456"]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de rutas configuradas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"provider",description:"<p>Nombre del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Ruta para el envio de los reportes</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario que medifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "country#CO",
            "sk": "ean_provider#123456",
            "country": "CO",
            "eanProvider": "123456",
            "provider": "PRUEBA",
            "url": "RUTA ACTUALIZADA",
            "creationUser": "Francisco Diaz",
            "creationDate": "2023-03-29 11:33:05",
            "modificationDate": "2023-03-29 15:22:42",
            "modificationUser": "Francisco Diaz",
            "state": "ACTIVO",
            "lstProviders": null,
            "lstEanProviders": null
        },
        {
            "pk": "country#CO",
            "sk": "ean_provider#1234568",
            "country": "CO",
            "eanProvider": "123",
            "provider": "PRUEBA",
            "url": "RUTA",
            "creationUser": "USUARIO",
            "creationDate": "FECHA",
            "modificationDate": null,
            "modificationUser": null,
            "state": "ACTIVO",
            "lstProviders": null,
            "lstEanProviders": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda. Realiza un nuevo filtro",
"responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"ConfigurationRouteSpecialFileWebApi.java",groupTitle:"Rutas_archivos_especiales"},{type:"post",url:"/requests/savereload",title:"Guardar Solicitud Aplicar Recarga",name:"CGuardar_Solicitud_Aplicar_Recarga",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite Guardar Solicitud Aplicar Recarga</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object[]",optional:!1,field:"loadAuditReloadArray",description:"<p>Listado de las opciones seleccionadas por el usuario para realizar la recarga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.bgm",description:`<p>identificador asociado al</p> <pre><code>      documento de transmisi\xF3n de
      carga
</code></pre>`},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.country",description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.eanProvider",description:"<p>id del proveedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.eanTrader",description:"<p>id del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.fileName",description:"<p>nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.loadDate",description:"<p>fecha de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.loadDay",description:"<p>dia de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.loadHour",description:"<p>hora de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.loadMonth",description:"<p>mes de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.loadYear",description:"<p>a\xF1o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.pathFile",description:"<p>ubicaci\xF3n del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.provider",description:"<p>nombre del provedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.snrf",description:"<p>codigo referencia</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.state",description:"<p>estado que trae la consulta</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.trader",description:"<p>nombre del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.typeDocument",description:"<p>si en sales o stok</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>usuario que crea la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
{"loadAuditReloadArray":[
{
"pk": "country#CO#type_document#stock",
"sk": "file_name#189709898.edi",
"bgm": "xxxxx",
"country": "CO",
"eanProvider": "7702010000011",
"eanTrader": "7702010000020",
"fileName": "1.edi",
"loadDate": "20230110",
"loadDay": "10",
"loadHour": "140000",
"loadMonth": "1",
"loadYear": "2023",
"pathFile": "s3://bucket",
"provider": "colgate",
"snrf": "aaee34",
"state": "ACTIVO / INACTIVO",
"trader": "( Inactivo ) Pastor Julio Delgado Hernandez -
Calle 70",
"typeDocument": "sales"
},
{
"pk": "country#CO#type_document#sales",
"sk": "file_name#133789668768789.edi",
"bgm": "xxxxx",
"country": "CO",
"eanProvider": "7702010000011",
"eanTrader": "7702010000020",
"fileName": "133.edi",
"loadDate": "20230110",
"loadDay": "10",
"loadHour": "140000",
"loadMonth": "1",
"loadYear": "2023",
"pathFile": "s3://bucket",
"provider": "colgate",

"snrf": "aaee34",
"state": "ACTIVO / INACTIVO",
"trader": "exito",
"typeDocument": "sales"
}
],
"createUser":"mateo romero"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
                   {

                   "responseCode" : "0",

                   "responseMessage": "Los documentos seleccionados est\xE1n en proceso de recarga.
Consulta el estado de la recarga unificada en la funcionalidad Ver Solicitudes"

                   }`,type:"json"}]},filename:"RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/savedelete",title:"Guardar Solicitud Aplicar borrado",name:"CGuardar_Solicitud_Aplicar_borrado",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite Guardar Solicitud Aplicar borrado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y Apellido del usuario que crea la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>tipo de documento si es ventas o inventarios</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"provider",description:"<p>Listado de los providers seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider.eanCompany",description:"<p>id del provedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider.nameCompany",description:"<p>Nombre del Provedor</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"trader",description:"<p>Listado de los traders seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader.eanCompany",description:"<p>id del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader.nameCompany",description:"<p>Nombre del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"startDate",description:"<p>fecha inicial de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"endDate",description:"<p>fecha final de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDate",description:"<p>tipo de fecha selecionada si es de carga o reportada</p>"}]},examples:[{title:"Request-Example:",content:`
{
"createUser": "Mateo Romero",
"typeDocument": "stock",
"country": "CO",
"provider": [
{
"eanCompany": "7702010000011",
"nameCompany": "colgate"
},
{
"eanCompany": "7702010000012",
"nameCompany": "palmolive"
}
],
"trader": [
{
"eanCompany": "7702010000013",
"nameCompany": "exito"
},
{
"eanCompany": "7702010000014",
"nameCompany": "carulla"
}
],
"startDate": "2023-01-10",
"endDate": "2023-01-10",
"typeDate": "carga"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
                  {

                  "responseCode" : "0",

                  "responseMessage": "Los registros est\xE1n en proceso de borrado.
Consulta el estado de la solicitud en la funcionalidad Ver Solicitudes"

                  }`,type:"json"}]},filename:"RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/cancellations",title:"Cancelar Solicitud recargas",name:"Cancelar_Solicitud_recargas",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite cancelar la solitud de recarga que se encuentre en estado pendiente, si el estado es diferente a este el sistema no cancelara la solitud</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de particion asignada al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"idRequest",description:"<p>Id de la solicitud de borrado o recarga</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>Tipo de documento (sales,stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestType",description:"<p>Tipo de solicitud (RECARGA)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre del proveedor asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"cancelUser",description:"<p>Nombre y apellido del usuario logueado que cancela la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
{
"pk": "country#CO",
"idRequest": "uuid_1",
"country": "CO",
"typeDocument": "sales",
"requestType": "RECARGA",
"eanProvider": "7702010000010",
"provider": "colgate",
"eanTrader": "7706894372386",
"trader": "Pastor Juli",
"cancelUser": "Francisco Diaz"
}`,type:"json"},{title:"Request-Example:",content:`
{
"pk": "country#CO",
"idRequest": "uuid_2",
"country": "CO",
"typeDocument": "stock",
"requestType": "RECARGA",
"eanProvider": "7702010000010",
"provider": "colgate",
"eanTrader": "7706894372386",
"trader": "Pastor Juli",
"cancelUser": "Francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": " Se ha cancelado de forma exitosa la
solicitud uuid_1
para el comercio Pastor Juli y el proveedor colgate",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": " El sistema no responde o el proceso
no se termin\xF3 satisfactoriamente.
Por favor int\xE9ntalo m\xE1s tarde",
"responseCode": "1005"
}`,type:"json"}]},error:{examples:[{title:"Error-Response:",content:`
{
"responseMessage": " El sistema no responde o el proceso no
se termin\xF3 satisfactoriamente.
Intenta nuevamente en unos segundos o comun\xEDcate con soporte
https://soporte.cen.biz/.",
"responseCode": "1003"
}`,type:"json"}]},filename:"RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa la recarga o borrado de informacion y presenta fallas</p>",permission:[{name:"Usuario Administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del archivo log</p>"},{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",description:"<p>ruta del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
{
"logFileName": "cargaParcialFuerzaVentas_log.csv",
"pathLogFileName":
"analitica-dev-prescriptiva-logs-etl-bucket/sales_force"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": {
"fileName": "archivo_log.csv",
"fileContent":
"ZGVzY3JpcHRpb25fZXJyb3IsbGluZSxyb3dfZmlsZQpFbCBjYW1wbyBbRUFOIFB1bnRvIFZ

},
"responseMessage": "Consulta solicitudes correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No encontramos informaci\xF3n en el log",
"responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseCode" : "1004",

"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso
de persistir el error "
"por favor comunicarse con Soporte
https://soporte.cen.biz/"

}`,type:"json"}]},filename:"RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/loadaudit/filter",title:"Filtro opciones de recarga",name:"Guardar_Filtro_opciones_de_recarga",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite realizar el filtro para listar las opciones que se pueden elegir en una solicitud de recarga.</p>",parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>tipo de documento si es ventas o inventarios</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"provider",description:"<p>Listado de los providers seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>id del provedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",description:"<p>Nombre del Provedor</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"trader",description:"<p>Listado de los traders seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"startDate",description:"<p>fecha inicial de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"endDate",description:"<p>fecha final de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDate",description:"<p>tipo de fecha selecionada si es de carga o reportada</p>"}]},examples:[{title:"Request-Example:",content:`
{

"typeDocument": "stock",
"country": "CO",
"provider": [
{
"eanCompany": "7702010000011",
"nameCompany": "colgate"
},
{
"eanCompany": "7702010000012",
"nameCompany": "palmolive"
}
],
"trader": [
{
"eanCompany": "7702010000013",
"nameCompany": "exito"
},
{
"eanCompany": "7702010000014",
"nameCompany": "carulla"
}
],
"startDate": "2023-01-10",
"endDate": "2023-01-10",
"typeDate": "carga"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de solicitudes</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"bgm",description:"<p>identificador asociado al documento de transmisi\xF3n de carga</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>id del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",description:"<p>id del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"loadDate",description:"<p>fecha de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadDay",description:"<p>dia de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadHour",description:"<p>hora de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadMonth",description:"<p>mes de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadYear",description:"<p>a\xF1o de carga</p>"},{group:"200",type:"String",optional:!1,field:"pathFile",description:"<p>ubicaci\xF3n del archivo</p>"},{group:"200",type:"String",optional:!1,field:"provider",description:"<p>nombre del provedor</p>"},{group:"200",type:"String",optional:!1,field:"snrf",description:"<p>codigo referencia</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>estado que trae la consulta</p>"},{group:"200",type:"String",optional:!1,field:"trader",description:"<p>nombre del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"typeDocument",description:"<p>si en sales o stok</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO#type_document#sales",
"sk": "file_name#1.edi",
"bgm": "xxxxx",
"country": "CO",
"eanProvider": "7702010000010",
"eanTrader": "7702010000010",
"fileName": "1.edi",
"loadDate": "20230110",
"loadDay": "10",
"loadHour": "140000",
"loadMonth": "1",
"loadYear": "2023",
"pathFile": "s3://bucket",
"provider": "colgate",
"reportedEndDate": "20230123",
"reportedStartDate": "20230115",
"snrf": "aaee34",
"state": "ACTIVO / INACTIVO",
"trader": "( Inactivo ) Pastor Julio Delgado Hernandez -
Calle 70",
"typeDocument": "sales"
},
{
"pk": "country#CO#type_document#sales",
"sk": "file_name#4.edi",
"bgm": "xxxxx",
"country": "CO",
"eanProvider": "7702010000011",
"eanTrader": "7702010000020",
"fileName": "4.edi",
"loadDate": "20230110",
"loadDay": "10",
"loadHour": "140000",
"loadMonth": "1",
"loadYear": "2023",
"pathFile": "s3://bucket",
"provider": "colgate",
"reportedEndDate": "20230123",
"reportedStartDate": "20230115",
"snrf": "aaee34",
"state": "ACTIVO / INACTIVO",
"trader": "( Inactivo ) Pastor Julio Delgado Hernandez -
Calle 70",
"typeDocument": "sales"
}
],
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"LoadAuditWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests",title:"Listado solicitudes borrado y recargas",name:"Listado_solicitudes_borrado_y_recargas",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las solictudes de borrado y recarga de informaci\xF3n segun los filtros aplicados</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais a consultar</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes seleccionados IMPORTANTE si se seleccionaron todos o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansProviders",description:"<p>Listado de eans de fabricantes seleccionados IMPORTANTE si se seleccionaron todos o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>Tipo de documento a consultar (sales, stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestType",description:"<p>Tipo de solicitud a consultar (RECARGA, BORRADO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestStartDate",description:"<p>Fecha inicio de la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestEndDate",description:"<p>Fecha final de la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre del usuario que creo la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"lstEansTraders": ["7706894372386"],
"lstEansProviders": ["7702010000010"],
"typeDocument": "sales",
"requestType": "RECARGA",
"requestStartDate": "2023-01-09",
"requestEndDate": "2023-01-10",
"createUser": ""
}`,type:"json"},{title:"Request-Example:",content:`
{
"country": "CO",
"lstEansTraders": ["7706894372386"],
"lstEansProviders": ["7702010000010"],
"typeDocument": "stock",
"requestType": "BORRADO",
"requestStartDate": "2023-01-09",
"requestEndDate": "2023-01-10",
"createUser": ""
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de solicitudes</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRequest",description:"<p>id de la Solicitud</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais</p>"},{group:"200",type:"String",optional:!1,field:"typeDocument",description:"<p>Tipo de documento</p>"},{group:"200",type:"String",optional:!1,field:"requestType",description:"<p>Tipo de solicitud</p>"},{group:"200",type:"String",optional:!0,field:"fileName",description:"<p>Nombre del archivo edi a recargar</p>"},{group:"200",type:"String",optional:!0,field:"pathFile",description:"<p>Ruta del archivo edi</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"provider",description:"<p>Nombre del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante</p>"},{group:"200",type:"String",optional:!0,field:"loadDate",description:"<p>Fecha de carga del archivo edi</p>"},{group:"200",type:"String",optional:!0,field:"startDate",description:"<p>Fecha inical de carga ventas o inventarios</p>"},{group:"200",type:"String",optional:!0,field:"endDate",description:"<p>Fecha final de carga ventas o inventarios</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del archivo log</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Ruta del archivo log</p>"},{group:"200",type:"String",optional:!1,field:"requestDate",description:"<p>Fecha de la solicitud</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>usuario que creo la solicitud</p>"},{group:"200",type:"String",optional:!1,field:"cancelUser",description:"<p>usuario que cancelo la solicitud</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>fecha de Modificacion de la solicitud</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "country#CO",
"sk": null,
"idRequest": "uuid_1",
"country": null,
"typeDocument": "sales",
"requestType": "RECARGA",
"fileName": null,
"pathFile": null,
"eanProvider": "7702010000010",
"provider": "colgate",
"eanTrader": "7706894372386",
"trader": "Pastor Juli",
"loadDate": null,
"startDate": null,
"endDate": null,
"state": "PENDIENTE",
"logFileName": "error.log",
"pathLogFileName": "s3://",
"requestDate": "2023-01-10",
"createUser": "first_name + last_name",
"cancelUser": "first_name + last_name",
"modificationDate": null
}
],
"responseMessage": "Consulta solicitudes correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": " No encontramos informaci\xF3n que
coincida con la b\xFAsqueda. Realiza un nuevo filtro.",
"responseCode": "1005"
}`,type:"json"}]},filename:"RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/transmissions/types/administrations",title:"Administrar tipo transmisi\xF3n",name:"Administrar_tipo_transmisi\xF3n",group:"Tipo_de_transmisin",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de tipos de transmision segun los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstTraders",description:"<p>Listado de eans de los comerciantes seleccionados IMPORTANTE si no se selecciono nada enviar la lista vacia ejemplo lstTraders = []</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>listado de eans seleccionados IMPORTANTE si no se selecciono nada enviar la lista vacia ejemplo lstEansTraders = []</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "lstTraders": ["123458","25689","CASANDRA"],
    "lstEansTraders": ["1234569", "CASANDRA"]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "lstTraders": ["123458","25689","CASANDRA"],
    "lstEansTraders": []
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "lstTraders": [],
    "lstEansTraders": ["1234569", "CASANDRA"]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "lstTraders": [],
    "lstEansTraders": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de tipos de transmisiones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais</p>"},{group:"200",type:"String",optional:!1,field:"typeOfInformation",description:"<p>Tipo de informacion</p>"},{group:"200",type:"String",optional:!1,field:"typeOfValueTransmitted",description:"<p>Tipo de informacion transmitida</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>usuario que modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "country#CO",
            "sk": "ean_trader#1234568#type_of_information#Ventas",
            "eanTrader": "1234568",
            "trader": "prueba comercio",
            "country": "CO",
            "typeOfInformation": "Ventas",
            "typeOfValueTransmitted": "valor transmitido",
            "creationUser": "FRANCISCO DIAZ",
            "creationDate": "2023-05-26 09:48:30",
            "modificationDate": null,
            "modificationUser": null,
            "state": "ACTIVO",
            "lstTraders": null,
            "lstEansTraders": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda.
                        Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},filename:"TransmissionTypeWebApi.java",groupTitle:"Tipo_de_transmisi\xF3n"},{type:"put",url:"/transmissions/types",title:"Editar tipo transmisi\xF3n",name:"Editar_tipo_transmisi\xF3n",group:"Tipo_de_transmisin",version:"0.1.0",description:"<p>Este servicio permite editar el tipo de transmision de cada comercio previamente guardado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Cave de partic\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfInformation",description:"<p>Tipo de informacion a transmitir (Ventas \xF3 Inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfValueTransmitted",description:"<p>Tipo de valor transmitido</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro (ACTIVO \xF3 INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido de usuario logueado que esta editando el registro ejemplo( Francisco Diaz)</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "country#CO",
    "sk": "ean_trader#123456#type_of_information#Ventas",
    "eanTrader":"123456",
    "trader": "prueba comercio",
    "country":"CO",
    "typeOfInformation":"Ventas",
    "typeOfValueTransmitted":"valor transmitido actualizado",
    "state":"INACTIVO",
    "modificationUser":"FRANCISCO DIAZ"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Cambios guardados correctamente",
    "responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1002"
}`,type:"json"}]},filename:"TransmissionTypeWebApi.java",groupTitle:"Tipo_de_transmisi\xF3n"},{type:"post",url:"/transmissions/types",title:"Guardar tipo transmisi\xF3n",name:"Guardar_tipo_transmisi\xF3n",group:"Tipo_de_transmisin",version:"0.1.0",description:"<p>Este servicio permite guardar el tipo de transmision de informacion de cada comerciante</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfInformation",description:"<p>Tipo de informacion a transmitir (Ventas \xF3 Inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfValueTransmitted",description:"<p>Tipo de valor transmitido</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro (ACTIVO \xF3 INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido de usuario logueado que esta creando el registro ejemplo( Francisco Diaz)</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanTrader":"123456",
    "trader": "prueba comercio",
    "country":"CO",
    "typeOfInformation":"Ventas",
    "typeOfValueTransmitted":"valor transmitido",
    "state":"ACTIVO",
    "creationUser":"FRANCISCO DIAZ"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El registro para el comercio prueba comercio se ha creado correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "El Comercio prueba comercio ya tiene configurado
                        un registro bajo los par\xE1metros establecidos. Modifica 
                        los par\xE1metros e intenta de nuevo",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"TransmissionTypeWebApi.java",groupTitle:"Tipo_de_transmisi\xF3n"},{type:"post",url:"/masters/uploads/budgetseller",title:"Carga archivo maestro presupuesto",name:"Carga_archivo_maestro_presupuesto",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo maestro de presupuesto por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 14 archivo maestro presupuesto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 14,
    "eanProvider": "7702010000010",
    "fileName": "archivo.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El archivo seleccionado  presupuesto.csv "
"est\xE1 en proceso de Cargue. Consulte el estado del archivo en el listado de resultados",

    "responseCode": "0"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error cargando el archivo",

    "responseCode": "1001"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error actualizando log de error para el archivo",

    "responseCode": "1002"
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"get",url:"/typefiles/displayweb",title:"Listado de tipos de archivos maestros",name:"Listado_de_tipos_de_archivos_maestros",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite obtener los  tipos de archivo maestro que se  mostrarar en la lista de seleccion maestro &quot;Listado de tipos de archivos maestros&quot;</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
 "objectData": [
        {
            "pk": "id_file_type#16",
            "sk": "root",
            "idFileType": 16,
            "fileTypeName": "Descarga Presupuesto",
            "awsBucketName": "analitica-dev-prescriptiva-masters-downloads-bucket/budget",
            "state": 1,
            "display_web": 1,
            "creationDate": "20221118",
            "createUser": "admin",
            "modificationDate": "20221118",
            "userModification": "admin"
        },
        {
            "pk": "id_file_type#13",
            "sk": "root",
            "idFileType": 13,
            "fileTypeName": "Productos Referenciales",
            "awsBucketName": "analitica-dev-prescriptiva-raw-bucket/product_references",
            "state": 1,
            "display_web": 1,
            "creationDate": "20221118",
            "createUser": "admin",
            "modificationDate": "20221118",
            "userModification": "admin"
        }
],
"responseMessage": "consulta typeFile correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": ""error listando typeFile"",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"TypeFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"post",url:"/masters/uploads/productsreferences",title:"carga archivo maestro referenciales productos",name:"carga_archivo_maestro_referenciales_productos",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga del archivo referenciales de productos por medio de la p\xE1gina web</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object",optional:!1,field:"typeFile",description:"<p>Tipo de archivo que se va a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 13 archivo referencial de productos</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 13,
    "eanProvider": "7702010000010",
    "fileName": "archivo.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El archivo seleccionado referenciales_productos.csv "
    "est\xE1 en proceso de Cargue. Consulte el estado del archivo en el listado de resultados",

    "responseCode": "0"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente. 
     Intente nuevamente en unos segundos o comun\xEDquese con soporte https://soporte.cen.biz/ .",

    "responseCode": "1001"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error actualizando log de error para el archivo",

    "responseCode": "1002"
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"post",url:"/masters/uploads/catalogs",title:"Carga de archivo catalogo",name:"Carga_de_archivo_catalogo",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite la carga de catalogo de productos por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 1 archivo de catalogo</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 1,
    "eanProvider": "7702010000010",
    "fileName": "catalogo de productos2.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El archivo seleccionado  CATALOGO.csv "
    "est\xE1 en proceso de Cargue. Consulte el estado del archivo en el listado de resultados",

    "responseCode": "0"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error cargando el archivo",

    "responseCode": "1001"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error actualizando log de error para el archivo",

    "responseCode": "1002"
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/downloads/guides",title:"Descarga gu\xEDa cat\xE1logo de productos",name:"Descarga_gu\xEDa_cat\xE1logo_de_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de cat\xE1logo de productos</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Guia archivo Catalogo de productos V.2.pdf",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/downloads/templates",title:"Descarga plantilla catalogo productos",name:"Descarga_plantilla_catalogo_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla del catalogo de productos</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Plantilla Catalogo de productos V2.csv",

        "fileContent": "RXN0YWRvKjtFYW4gUHJvZHVjdG8qO0Rlc2NyaXBjafNuKjtD82RpZ28gSW50ZXJubztVbm"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/companies/:eanCompany",title:"Previsualizar productos",name:"Previsualizar_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener la vista previa del catalogo de productos para un fabricante en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia que se encuentra logueada</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de productos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!0,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!0,field:"eanProduct",description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!0,field:"description",description:"<p>Descripcion del producto</p>"},{group:"200",type:"String",optional:!0,field:"plu",description:"<p>Codigo Interno del producto</p>"},{group:"200",type:"Number",optional:!0,field:"conversionUnit",description:"<p>Unidad conversi\xF3n del producto</p>"},{group:"200",type:"double",optional:!0,field:"unitValue",description:"<p>Valor unitario del producto</p>"},{group:"200",type:"double",optional:!0,field:"tax",description:"<p>Iva del producto</p>"},{group:"200",type:"double",optional:!0,field:"weight",description:"<p>Peso del producto</p>"},{group:"200",type:"String",optional:!0,field:"size",description:"<p>Talla del producto</p>"},{group:"200",type:"double",optional:!0,field:"volume",description:"<p>Volumen del producto</p>"},{group:"200",type:"String",optional:!0,field:"color",description:"<p>Color del producto</p>"},{group:"200",type:"String",optional:!0,field:"brand",description:"<p>Marca del producto</p>"},{group:"200",type:"Number",optional:!0,field:"state",description:"<p>Estado del producto (Activo \xF3 Inactivo) =&gt; 1 \xF3 0</p>"},{group:"200",type:"String",optional:!1,field:"levelZero",description:"<p>Nivel 0 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",description:"<p>Nivel 1 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTwo",description:"<p>Nivel 2 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelThree",description:"<p>Nivel 3 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",description:"<p>Nivel 4 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelFive",description:"<p>Nivel 5 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelSix",description:"<p>Nivel 6 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelSeven",description:"<p>Nivel 7 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelEight",description:"<p>Nivel 8 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelNine",description:"<p>Nivel 9 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTen",description:"<p>Nivel 10 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelEleven",description:"<p>Nivel 11 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTwelve",description:"<p>Nivel 12 del producto</p>"},{group:"200",type:"Number",optional:!1,field:"totalProducts",description:"<p>Total de productos que pertecen a la ultima categoria</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#77",
            "sk": "ean_product#0000000000000",
            "eanProvider": "7702010000010",
            "eanProduct": "0000000000000",
            "description": "ARTICULO NUEVO - 0000000000000",
            "plu": "",
            "conversionUnit": 0.0,
            "unitValue": 0.0,
            "tax": 0.0,
            "weight": 0.0,
            "size": "",
            "volume": 0.0,
            "color": "",
            "brand": "",
            "state": 1,
            "levelZero": "PORTAFOLIO CONSOLIDADO",
            "levelOne": "PORTAFOLIO - CONSOLIDADO",
            "levelTwo": "CATEGORIA DEFAULT",
            "levelThree": "",
            "levelFour": "",
            "levelFive": "",
            "levelSix": "",
            "levelSeven": "",
            "levelEight": "",
            "levelNine": "",
            "levelTen": "",
            "levelEleven": "",
            "levelTwelve": "",
            "totalProducts": 2
        },
        {
            "pk": "ean_provider#77",
            "sk": "ean_product#000000000002",
            "eanProvider": "7702010000010",
            "eanProduct": "0000000000000",
            "description": "ARTICULO NUEVO - 0000000000000",
            "plu": "",
            "conversionUnit": 0.0,
            "unitValue": 0.0,
            "tax": 0.0,
            "weight": 0.0,
            "size": "",
            "volume": 0.0,
            "color": "",
            "brand": "",
            "state": 1,
            "levelZero": "PORTAFOLIO CONSOLIDADO",
            "levelOne": "PORTAFOLIO - CONSOLIDADO",
            "levelTwo": "CATEGORIA GALLETAS",
            "levelThree": "",
            "levelFour": "",
            "levelFive": "",
            "levelSix": "",
            "levelSeven": "",
            "levelEight": "",
            "levelNine": "",
            "levelTen": "",
            "levelEleven": "",
            "levelTwelve": "",
            "totalProducts": 0
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"post",url:"/masters/uploads",title:"Filtro de archivos",name:"Filtro_de_archivos",group:"Uploads_files",version:"0.1.0",description:"<p>Este servicio permite filtrar los archivos cargados por un estado y tipo de archivo. si se desea listar archivos de Catalogo de productos enviar idFileType = 1 , si se desea listar archivos de Fuerza de ventas enviar idFileType = 2 , si se desea listar archivos de Geografias enviar idFileType = 4 , si se desea listar archivos de puntos de venta enviar idFileType = 3<br> si se desea listar archivos de Productos Referenciales enviar idFileType = 13 si se desea listar archivos de Presupuesto por Vendedor enviar idFileType = 14</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Id del archivo a consultar</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Nombre del estado a consultar</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider": "7702010000010",
    "state": "FINALIZADO",
    "idFileType": 1
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider": "7702010000010",
    "state": "FINALIZADO",
    "idFileType": 2
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider": "7702010000010",
    "state": "FINALIZADO",
    "idFileType": 4
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider": "7702010000010",
    "state": "FINALIZADO",
    "idFileType": 3
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#7702010000010",
            "sk": "file_name#Catalogo_Productos_20221121_161148_1.csv",
            "fileName": "Catalogo_Productos_20221121_161148_1.csv",
            "awsUploadLog": null,
            "emailLoad": "correo@prueba",
            "endDate": "2022-11-21 16:12:03",
            "eanProvider": "7702010000010",
            "idFileType": 9,
            "logFileName": null,
            "pathFileName": "analitica-dev-prescriptiva-masters-downloads-bucket/products",
            "pathLogFileName": null,
            "starDate": "2022-11-21 16:11:38",
            "state": "FINALIZADO",
            "type": "DOWNLOAD",
            "uploadDate": "20221121161138",
            "userLoad": "Francisco diaz",
            "timeZone": "America/Bogota"
        },
        {
            "pk": "ean_provider#7702010000010",
            "sk": "file_name#Catalogo_Productos_20221121_144334_1.csv",
            "fileName": "Catalogo_Productos_20221121_144334_1.csv",
            "awsUploadLog": null,
            "emailLoad": "correo@prueba",
            "endDate": "2022-11-21 14:43:49",
            "eanProvider": "7702010000010",
            "idFileType": 9,
            "logFileName": null,
            "pathFileName": "analitica-dev-prescriptiva-masters-downloads-bucket/products",
            "pathLogFileName": null,
            "starDate": "2022-11-21 14:43:15",
            "state": "FINALIZADO",
            "type": "DOWNLOAD",
            "uploadDate": "20221121144315",
            "userLoad": "Francisco diaz",
            "timeZone": "America/Bogota"
        }
    ],
    "responseMessage": "consulta archivos  correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No existe informaci\xF3n que coincida con los filtros de b\xFAsqueda.",
    "responseCode": "1005"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_files"},{type:"get",url:"/masters/uploads/companies/:eancompany/typefiles/:idTypeFile",title:"Listado de carga de archivos",name:"Listado_de_carga_de_archivos",group:"Uploads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los archivos cargados por la pagina web para una compa\xF1ia y un tipo de archivo. si se desea listar archivos de Catalogo de productos enviar idTypeFile = 1 , si se desea listar archivos de Fuerza de ventas envia idTypeFile = 2 , si se desea listar archivos de Geografias enviar idTypeFile = 4 , si se desea listar archivos de Puntos de venta enviar idTypeFile = 3 si se desea listar archivos de Productos Referenciales enviar idTypeFile = 13 si se desea listar archivos de Presupuesto por Vendedor enviar idTypeFile = 14</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idTypeFile",description:"<p>Id del tipo de archivo</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#77",
            "sk": "file_name#Catalogo_Productos_20221121_161752_1.csv",
            "fileName": "Catalogo_Productos_20221121_161752_1.csv",
            "awsUploadLog": null,
            "emailLoad": "correo@prueba",
            "endDate": "2022-11-21 16:20:55",
            "eanProvider": "77",
            "idFileType": 9,
            "logFileName": null,
            "pathFileName": "analitica-dev-prescriptiva-masters-downloads-bucket/products",
            "pathLogFileName": null,
            "starDate": "2022-11-21 16:17:52",
            "state": "FINALIZADO",
            "type": "DOWNLOAD",
            "uploadDate": "20221121161752",
            "userLoad": "Francisco diaz",
            "timeZone": "America/Bogota"
        },
        {
            "pk": "ean_provider#77",
            "sk": "file_name#Catalogo_Productos_20221121_160542_1.csv",
            "fileName": "Catalogo_Productos_20221121_160542_1.csv",
            "awsUploadLog": null,
            "emailLoad": "correo@prueba",
            "endDate": "2022-11-21 16:07:19",
            "eanProvider": "77",
            "idFileType": 9,
            "logFileName": null,
            "pathFileName": "analitica-dev-prescriptiva-masters-downloads-bucket/products",
            "pathLogFileName": null,
            "starDate": "2022-11-21 16:05:42",
            "state": "FINALIZADO",
            "type": "DOWNLOAD",
            "uploadDate": "20221121160542",
            "userLoad": "Francisco diaz",
            "timeZone": "America/Bogota"
        }
    ],
    "responseMessage": "consulta archivos  correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_files"},{type:"post",url:"/masters/uploads/salesforce",title:"Carga archivo fuerza venta",name:"Carga_archivo_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo fuerza venta por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 2 archivo de fuerza de venta</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 2,
    "eanProvider": "7702010000010",
    "fileName": "Fuerza ve venta.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El archivo seleccionado  FUERZA VENTA.csv "
"est\xE1 en proceso de Cargue. Consulte el estado del archivo en el listado de resultados",

    "responseCode": "0"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error cargando el archivo",

    "responseCode": "1001"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error actualizando log de error para el archivo",

    "responseCode": "1002"
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"get",url:"/salesforce/downloads/guides",title:"Descarga gu\xEDa fuerza venta",name:"Descarga_gu\xEDa_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de fuerza de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Guia archivo de Fuerza de ventas V.1.pdf",

        "fileContent": "U29jaW8gY29tZXJjaWFsO0VBTiBQVjtQVjtOaXZlbCAwO05pdmV"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"SalesForceWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"get",url:"/salesforce/downloads/templates",title:"Descarga plantilla fuerza venta",name:"Descarga_plantilla_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla de fuerza de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "plantilla_fuerza_ventas_.csv",

        "fileContent": "U29jaW8gY29tZXJjaWFsO0VBTiBQVjtQVjtOaXZlbCAwO05pdmV"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"SalesForceWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"post",url:"/masters/uploads/salepoints",title:"Carga puntos de ventas",name:"Carga_puntos_de_ventas",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo de puntos de ventas por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 3 archivo de puntos de venta</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 3,
    "eanProvider": "7702010000010",
    "fileName": "puntos de venta.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El archivo seleccionado  Nuevos puntos de venta.csv "
"est\xE1 en proceso de Cargue. Consulte el estado del archivo en el listado de resultados",

    "responseCode": "0"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error cargando el archivo",

    "responseCode": "1001"
 }`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "error actualizando log de error para el archivo",

    "responseCode": "1002"
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"MasterFileWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"get",url:"/salepoints/downloads/guides",title:"Descarga gu\xEDa puntos de venta",name:"Descarga_gu\xEDa_puntos_de_venta",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de puntos de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Gu\xEDa archivo de Puntos de venta V1.0.pd",

        "fileContent": "zO05pdmVsIDQ7Tml2ZWwgNTtOaXZlbCA2O05pdmVsIDc7Tml2ZWwgODtOa"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"get",url:"/salepoints/downloads/templates",title:"Descarga plantilla puntos de venta",name:"Descarga_plantilla_puntos_de_venta",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla de puntos de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {

        "fileName": "Plantilla Puntos de venta V1.0.csv",

        "fileContent": "RXN0YWRvKjtFYW4gUHJvZHVjdG8qO0Rlc2NyaXBjafNuKjtD82RpZ28gSW50ZXJubztVbm"
    },

    "responseMessage": "Archivo descargado correctamente",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "error descargando el archivo",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"post",url:"/users/companies",title:"Administraci\xF3n usuario lado cliente",name:"Administraci\xF3n_usuario_lado_cliente",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite Obtener el listado de los usuarios filtrados por el productos contratod o por el rol o por estado del usuario</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del usduario (1= ACTIVO, 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n dle menu del producto contratado</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>(OBLIBATORIO) Ean de la compa\xF1ia logueada</p>"}]},examples:[{title:"Request-Example:",content:`
{
"eanCompany": "CASSANDRA",
"idMenuOption":"8377877b-2a72-41bc-a257-eada6cb5cd3a",
"idRole": "dfd07363-7349-4325-a623-aa720f956862",
"state": 1

}`,type:"json"},{title:"Request-Example:",content:`
{
"eanCompany": "CASSANDRA",
"idRole": "dfd07363-7349-4325-a623-aa720f956862",
"state": 1

}`,type:"json"},{title:"Request-Example:",content:`
{
"eanCompany": "CASSANDRA",
"idMenuOption":"8377877b-2a72-41bc-a257-eada6cb5cd3a",
"state": 1

}`,type:"json"},{title:"Request-Example:",content:`
{
"eanCompany": "CASSANDRA",
"state": 1

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de usuarios</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"pkGsi",description:"<p>Indice Global del Objecto</p>"},{group:"200",type:"String",optional:!1,field:"skLsi",description:"<p>Ondice Local del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Correo dle usuario</p>"},{group:"200",type:"String",optional:!1,field:"phone",description:"<p>telefono del usuario</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id Opcion de menu tipo producto contratado</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre Opcion de menu tipo producto contratado</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nomvbre del rol asignado</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol asignado</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>estado del usuario</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>usuario de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificai\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario que modifico el registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "ean_company#CASSANDRA",
"sk":
"id_menu_option#8377877b-2a72-41bc-a257-eada6cb5cd3a#user#Rosemberg.Diaz@carvajal.com",
"pkGsi": "Rosemberg.Diaz@carvajal.com",
"skLsi": "user#Rosemberg.Diaz@carvajal.com",
"eanCompany": "CASSANDRA",
"companyName": "CASSANDRA SOPORTE",
"firstName": "Rosemberg",
"lastName": "Diaz Mendez Carv",
"email": "Rosemberg.Diaz@carvajal.com",
"phone": null,
"idMenuOption": "8377877b-2a72-41bc-a257-eada6cb5cd3a",
"menuOptionName": "Menu test nestor prueba six",
"nameRole": "Elina crea rol",
"idRole": "dfd07363-7349-4325-a623-aa720f956862",
"state": 1,
"createUser": "Rosemberg P",
"creationDate": "20230315120751",
"modificationDate": "20230315121302",
"userModification": "Rosemberg Diaz Mendez Carv",
"previousState": null
}
],
"responseMessage": "Consulta usuario correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No encontramos informaci\xF3n que
coincida
con la b\xFAsqueda. Realiza un nuevo filtro",
"responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1004",

"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso
de persistir el error "
"por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users",title:"Creacion de usuario",name:"Creacion_de_usuario",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite crear un usuario en la plataforma</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"Parameter",type:"Number",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de opci\xF3n de men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idRole",description:"<p>Id del rol</p>"}]},examples:[{title:"Request-Example:",content:`
{ "userCreateArray": [
{
"eanCompany": 123456789,
"companyName": null,
"firstName": "Elina",
"lastName": "Prueba",
"email": "elinaUltimaPrueba@gmail.com",
"phone": 987654321,
"idMenuOption": "uuid_8",
"menuOptionName": "Elina opcion 8",
"nameRole": "rol admin actualizado 1256",
"idRole": "676f4b02-3db7-4bd4-b78f-9047353aedd9",
"state": 1
},
{
"eanCompany": 123456789,
"companyName": null,
"firstName": "Elina",
"lastName": "Prueba",
"email": "elinaUltimaPrueba@gmail.com",
"phone": 987654321,
"idMenuOption": "uuid_9",
"menuOptionName": "Elina opcion 9",
"nameRole": "rol admin actualizado 1256",
"idRole": "676f4b02-3db7-4bd4-b78f-9047353aedd9",
"state": 1
}
],
"country": "CO"}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseCode" : "0",

"responseMessage": "Cambios guardados exitosamente"

}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "Cantidad de usuarios activos
contratados excedida"
"Puedes editar el n\xFAmero de usuarios activos por empresa"
" desde la lista de empresas en la administraci\xF3n de
usuarios",

"responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1001",

"responseMessage": "error creating user"

}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"put",url:"/users",title:"Edici\xF3n de usuario",name:"Edici\xF3n_de_usuarios",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite editar el usuario</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"previousEmail",description:"<p>Email previo del usuario</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"userCreateArray",description:"<p>Array de permisos del usuario actualizados</p>"}]},examples:[{title:"Request-Example:",content:`
{
"previousEmail": "eliina.jaimes@carvajal.com",
"country": "CO",
"userCreateArray": [
{
"eanCompany": "12345",
"companyName": "12345",
"firstName": "Elina Edita nuevamente",
"lastName": "Jaimes",
"email": "eliina.jaimes@carvajal.com",
"phone": 54783467,
"idMenuOption": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"menuOptionName": "Indicadores de ventas",
"nameRole": "Prueba Isaac N H",
"idRole": "b0db106e-950a-43ca-967f-8a78b3d3d2df",
"state": 1
},
{
"eanCompany": "12345",
"companyName": "12345",
"firstName": "Elina Edita nuevamente",
"lastName": "Jaimes",
"email": "eliina.jaimes@carvajal.com",
"phone": 54783467,
"idMenuOption": "20d88cac-8db0-49d7-84a0-13811e6af3a8",
"menuOptionName": "Carga de catalogo",
"nameRole": "Prueba Isaac N H",
"idRole": "b0db106e-950a-43ca-967f-8a78b3d3d2df",
"state": 0
}
]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"respondeCode",description:"<p>C\xF3digo de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Cambios guardados exitosamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1002",

"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso
de persistir el error por favor comunicarse con Soporte
https://soporte.cen.biz/"

}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users/filter",title:"Filtro de usuarios",name:"Filtro_de_usuarios",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite filtrar los usuarios por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Boolean",optional:!1,field:"state",description:"<p>Estado</p>"},{group:"Parameter",type:"Object",optional:!1,field:"role",description:"<p>Rol a consultar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"role.idRole",description:"<p>Id del rol</p>"},{group:"Parameter",type:"Object",optional:!1,field:"company",description:"<p>Compa\xF1ia a consultar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"company.idCompany",description:"<p>Id de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{

"company": {
"idCompany": 2
},
"role": {
"idRole": 1
},

"active": true

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"Object",optional:!1,field:"User",description:"<p>Usuarios registrados</p>"},{group:"200",type:"Number",optional:!1,field:"idUser",description:"<p>Id del usuario</p>"},{group:"200",type:"Object",optional:!1,field:"company",description:"<p>Compa\xF1ia que pertenece el usuario</p>"},{group:"200",type:"Number",optional:!1,field:"company.idCompany",description:"<p>Id de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"company.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"company.country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"boolean",optional:!1,field:"company.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"company.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"company.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"company.typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"company.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"company.userLimit",description:"<p>limite de usuarios activos</p>"},{group:"200",type:"Object",optional:!1,field:"role",description:"<p>Rol asignado al usuario</p>"},{group:"200",type:"Number",optional:!1,field:"role.idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"role.nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"role.descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"boolean",optional:!1,field:"role.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"role.lstMenuRole",description:"<p>Lista de opciones del men\xFA</p>"},{group:"200",type:"Object",optional:!1,field:"role.lstMenuRole.menuRole",description:"<p>Menu de opciones para el rol</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.idMenuRole",description:"<p>Id del registro</p>"},{group:"200",type:"Object",optional:!1,field:"role.lstMenuRole.menuRole.menu",description:"<p>Opci\xF3n asignada del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.idMenu",description:"<p>Id de la opci\xF3n del menu</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.idMenuParent",description:"<p>Id padre de la opci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.name",description:"<p>Nombre de la opci\xF3n del menu</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.description",description:"<p>Descripci\xF3n de la opci\xF3n del menu</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.url",description:"<p>Url a cargar</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"},{group:"200",type:"boolean",optional:!1,field:"role.lstMenuRole.menuRole.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`

{
"objectData": {
"idUser": 3,
"company": {
"idCompany": 2,
"nameCompany": "DEMO PRUEBAS API2",
"country": "CO",
"active": false,
"createUser": 0,
"userModification": 0,
"typeCompany": "F",
"eanCompany": "789",
"userLimit": 12
},
"role": {
"idRole": 2,
"nameRole": "ROLE DEMO 2",
"descriptionRole": "ROLE DE PRUEBAS 2",
"active": false,
"createUser": 0,
"userModification": 0,
"lstMenuRole": [
{
"idMenuRole": 4,
"menu": {
"idMenu": 3,
"idMenuParent": 0,
"name": "DEMO MENU ",
"description": "MENU DEMO UPDATE",
"icon": "ICON",
"url": "URL",
"level": 0,
"active": false,
"createUser": 0,
"userModification": 0,
"orderMenu": 1,
"nameEnglish":"ingles 2",
"descriptionEnglish":"ingles 2"
},
"active": true,
"creationUser": 0,
"userModification": 0
}

]
},
"firstName": "pandi3",
"lastName": "hernandez3",
"email": "pandi3@pruebas3.com",
"active": false,
"createUser": 0,
"userModification": 0,
"phone": 3208287264
},
"responseMessage": "Consulta usuario correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/mails/:email",title:"Usuario por email",name:"Usuario_por_email",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio regresa un usuario cuando se realiza el login</p>",permission:[{name:"Todos los usuarios"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email ingresado en el login</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`

{
"objectData": {
"firstName": "Nestor",
"lastName": "Plata",
"email": "nestor.plata@carvajal.com",
"state": 1,
"createUser": "Nestor Plata",
"userModification": "Nestor Plata",
"phone": 987654321,
"company": {
"pk": "company_type#F",
"sk": "country#CO#ean_company#7702010000010",
"companyName": "Colgate Palmolive",
"country": "CO",
"state": 1,
"creationDate": "2022-12-05 19:49:11.853",
"createUser": "Soporte",
"modificationDate": "",
"userModification": "",
"typeCompany": "F",
"eanCompany": "7702010000010",
"userLimit": null
},
"lstMenu": [
{
"name": "Administracion",
"description": "Permite gestionar la informacion del
catalogo de productos y fuerza de ventas",
"icon": "personFilled.svg",
"url": " ",
"level": 1,
"state": 1,
"orderMenu": 1,
"nameEnglish": "Settings",
"descriptionEnglish": "It allows to manage the information
of the product catalog and sales force",
"idMenuParent": null,
"nameParent": null,
"levels": [
{
"name": "Catalogo de productos",
"description": "Permite gestionar la carga y descarga de
catalogo",
"icon": "addChart.svg",
"url":
"http://innovation-dev-preescriptiva-front.s3-website-us-east-1.amazonaws.com/user/catalog",
"level": 2,
"state": 1,
"orderMenu": 1,
"nameEnglish": "Product catalog",
"descriptionEnglish": "It allows to manage the load and
download the catalog",
"idMenuParent": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",
"nameParent": "Administracion",
"levels": [
{
"name": "Carga de catalogo",
"description": "Permite realizar la carga o actualizacion
de catalogo",
"icon": "addChart.svg",
"url":
"http://innovdev",
"level": 3,
"state": 0,
"orderMenu": 1,
"nameEnglish": "Load catalog",
"descriptionEnglish": "Load catalog",
"idMenuParent": "cfbc675e-8185-41e2-9abe-241f64cbb760",
"nameParent": "Catalogo de productos",
"levels": []
}
]
}"linksHome": [
{
"pk": "ean_provider#7702010000010",
"sk": "home#20230124112933",
"eanProvider": "7702010000010",
"indicatorType": "sales",
"name": "Business Questions",
"nameEnglish": "Product without Categorie",
"icon": "TrendingUpOutlined.svg",
"description": "Tenga visibilidad del comportamiento de
las ventas de su negocio en cada comercio aplicando
diferentes filtros de consulta",
"descriptionEnglish": "Have visibility into the sales
performance of your business in each retailer by applying
different query filters",
"url": "dlkshl",
"indicatorOrder": 1,
"createUser": "Admin",
"createDate": "2023-01-24 11:29:33",
"modificationUser": null,
"modificationDate": null,
"country": null
},

]
}
]
},
"responseMessage": "Consulta usuario correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{examples:[{title:"Error-Response:",content:`
{
"responseMessage": "El usuario no existe o no est\xE1 activo
en el sistema",
"responseCode": "1004"
}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/companies/:eanCompany",title:"Usuarios por compa\xF1ia",name:"Usuarios_por_compa\xF1ia",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite consultar los usuario que pertenecen a una compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id unico de la compa\xF1ia</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "ean_company#123456789",
"sk":"id_menu_option#uuid_1#user#francisco100@prueba.com",
"pkGsi": null,
"skLsi": null,
"eanCompany": null,
"companyName": null,
"firstName": "francisco",
"lastName": "Diaz",
"email": null,
"phone": null,
"idMenuOption": "uuid_3",
"menuOptionName": "admin actualizado",
"nameRole": "rol admin actualizado 1256",
"idRole": "676f4b02-3db7-4bd4-b78f-9047353aedd9",
"state": null,
"createUser": null,
"creationDate": null,
"modificationDate": null,
"userModification": null
},
{
"pk": "ean_company#123456789",
"sk":
"id_menu_option#uuid_1#user#francisco101@prueba.com",
"pkGsi": null,
"skLsi": null,
"eanCompany": null,
"companyName": null,
"firstName": "francisco",
"lastName": "Diaz",
"email": null,
"phone": null,
"idMenuOption": "uuid_3",
"menuOptionName": "admin actualizado",
"nameRole": "rol admin actualizado 1256",
"idRole": "676f4b02-3db7-4bd4-b78f-9047353aedd9",
"state": null,
"createUser": null,
"creationDate": null,
"modificationDate": null,
"userModification": null
}
],
"responseMessage": "consulta company correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/qlik",title:"Generaci\xF3n JWT qlik",name:"Generaci\xF3n_JWT_qlik",group:"qlik",version:"0.1.0",description:"<p>Este servicio permite obtener el token JWT de seguridad de qlik para el ingreso a los informes estad\xEDsticos</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>Nombre del usuario del cliente en qlik</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario del cliente en qlik</p>"}]},examples:[{title:"{",content:`
{
"name": "Ivan Hernandez",
"email": "ivan.hernandez.coral@gmail.com"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del ticket</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": "eyJraWQiOiI0YmQ2MTI1NC02N2NiLTQ1NmMtYWU2Y
S0yNTI1ZmJlNWU4OGYiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ
zdWIiOiJjMjYxNjUwNi1kMmRhLTRlNTctYjAwZC1iYTI1NzU2Yjg2MTQiLCJhd
WQiOiJxbGlrLmFwaS9sb2dpbi9qd3Qtc2Vzc2lvbiIsImVtYWlsX3Zlcml
maWVkIjp0cnVlLCJuYmYiOjE2NzUzMzU5MTAsIm5hbWUiOiJJdmFuIEhlcm5hbm
RleiIsImlzcyI6IjhtanIyOGp2aDFvbGkzbC51cy5xbGlrY2xvdWQuY2
9tIiwic3ViVHlwZSI6InVzZXIiLCJleHAiOjE2NzUzMzY0MTAsImlhdCI6MTY
3NTMzNTkxMCwiZW1haWwiOiJpdmFuLmhlcm5hbmRlei5jb3JhbEBnbWFpbC5j
b20iLCJqdGkiOiJiZjgzM2Q0ZC1iZWM2LTQzZTktYmJjOC0yZTVhYzFmZGE2Y2QifQ
.YWutxEEN3WDGwILaDAeldff3vdjNpeRKyeDrsVZ7Db_Q7g56m932usml
DAEQvTXD13e7L-7_S8fJRrFPnsivfb7iNMnxEUbzeQeHkuvMQYJuUAjc1Cwl7K
s3kFyqruNP22JRMSfDo_s1p5fiXhFtlMQ5poWcMVgtSh9XqsF78Wy1K4Lpg
YH_WUNcyP3c7zIfeRiOU8oukFFRV8dpWZKy41i9PJje92_eWBVyH_6hZAiYz47
CprwBUqLac_u7JpGndHzH3ivQvZntyxbYttjioVyH5x37ilbIxdvfoACRe7Gkb
WECbof_hjezHjDY5XIj9Cmkfk-dQcf7aYqWqp9FvY-sADRg8vGOYG5QvHqjD9l4
I46cCV04wBJPT9QA35WUK4xhpLKDIMaWRG9XptMTzm0H2kkNIazuXCQrtf6nwG8UaX
BCj5LNQLa_Gztoh8HwWjgDfTFnXbceNxNcCuO2tzSNMYJvBo86wmoaT2yuzNte-N
LhZ2GvSl3z_N5gzDX9tRn28LzQl3ErERiMO-Lfez5nB9rr7Hzomdx_pv9QB1SsUhL
0R5UMNB9_8tRoPMdGPWh60WKKO-CygAzTon7JBtChVf57gtC26NVWkKPhFCnF8nDs
ywYjUQ8gBQsj7WSWquDfZ97qGFKeM2TAQQcwsU5W7nONm1VJ7K6dGu6upxE",
"responseMessage": "Generaci\xF3n de JWT correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"QlikWebApi.java",groupTitle:"qlik"}];const pe={name:"Analitica",version:"0.1.0",description:"Documentacion para el proyecto de analitica",url:"http://prescriptiva-service/v1",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Tue May 30 2023 18:08:24 GMT-0500 (hora est\xE1ndar de Colombia)",url:"https://apidocjs.com",version:"0.51.1"}};Ue();const Ne=p().compile(v()("#template-header").html()),De=p().compile(v()("#template-footer").html()),ie=p().compile(v()("#template-article").html()),ye=p().compile(v()("#template-compare-article").html()),he=p().compile(v()("#template-generator").html()),be=p().compile(v()("#template-project").html()),Ze=p().compile(v()("#template-sections").html()),Ke=p().compile(v()("#template-sidenav").html()),Je={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};pe.template=Object.assign(Je,(Z=pe.template)!=null?Z:{}),pe.template.forceLanguage&&Fe(pe.template.forceLanguage);const Pe=(0,a.groupBy)(je,Y=>Y.group),$e={};v().each(Pe,(Y,W)=>{$e[Y]=(0,a.groupBy)(W,X=>X.name)});const Qe=[];v().each($e,(Y,W)=>{let X=[];v().each(W,(ee,se)=>{const ue=se[0].title;ue&&X.push(ue.toLowerCase()+"#~#"+ee)}),X.sort(),pe.order&&(X=F(X,pe.order,"#~#")),X.forEach(ee=>{const ue=ee.split("#~#")[1];W[ue].forEach(me=>{Qe.push(me)})})}),je=Qe;let Xe={};const zt={};let It={};It[pe.version]=1,v().each(je,(Y,W)=>{Xe[W.group]=1,zt[W.group]=W.groupTitle||W.group,It[W.version]=1}),Xe=Object.keys(Xe),Xe.sort(),pe.order&&(Xe=$(zt,pe.order)),It=Object.keys(It),It.sort(o().compare),It.reverse();const Nt=[];Xe.forEach(Y=>{Nt.push({group:Y,isHeader:!0,title:zt[Y]});let W="";je.forEach(X=>{X.group===Y&&(W!==X.name?Nt.push({title:X.title,group:Y,name:X.name,type:X.type,version:X.version,url:X.url}):Nt.push({title:X.title,group:Y,hidden:!0,name:X.name,type:X.type,version:X.version,url:X.url}),W=X.name)})});function Tn(Y,W,X){let ee=!1;if(!W)return ee;const se=W.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return se&&se.forEach(function(ue){const me=ue.substring(2,3),Ee=ue.replace(/<.+?>/g,""),Te=ue.match(/id="api-([^-]+)(?:-(.+))?"/),Le=Te?Te[1]:null,Ve=Te?Te[2]:null;me==="1"&&Ee&&Le&&(Y.splice(X,0,{group:Le,isHeader:!0,title:Ee,isFixed:!0}),X++,ee=!0),me==="2"&&Ee&&Le&&Ve&&(Y.splice(X,0,{group:Le,name:Ve,isHeader:!1,title:Ee,isFixed:!1,version:"1.0"}),X++)}),ee}let rn;if(pe.header&&(rn=Tn(Nt,pe.header.content,0),rn||Nt.unshift({group:"_header",isHeader:!0,title:pe.header.title==null?Ce("General"):pe.header.title,isFixed:!0})),pe.footer){const Y=Nt.length;rn=Tn(Nt,pe.footer.content,Nt.length),!rn&&pe.footer.title!=null&&Nt.splice(Y,0,{group:"_footer",isHeader:!0,title:pe.footer.title,isFixed:!0})}const Wt=pe.title?pe.title:"apiDoc: "+pe.name+" - "+pe.version;v()(document).attr("title",Wt),v()("#loader").remove();const gn={nav:Nt};v()("#sidenav").append(Ke(gn)),v()("#generator").append(he(pe)),(0,a.extend)(pe,{versions:It}),v()("#project").append(be(pe)),pe.header&&v()("#header").append(Ne(pe.header)),pe.footer&&(v()("#footer").append(De(pe.footer)),pe.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Ft={};let mn="";Xe.forEach(function(Y){const W=[];let X="",ee={},se=Y,ue="";Ft[Y]={},je.forEach(function(me){Y===me.group&&(X!==me.name?(je.forEach(function(Ee){Y===Ee.group&&me.name===Ee.name&&(Object.prototype.hasOwnProperty.call(Ft[me.group],me.name)||(Ft[me.group][me.name]=[]),Ft[me.group][me.name].push(Ee.version))}),ee={article:me,versions:Ft[me.group][me.name]}):ee={article:me,hidden:!0,versions:Ft[me.group][me.name]},pe.sampleUrl&&pe.sampleUrl===!0&&(pe.sampleUrl=window.location.origin),pe.url&&ee.article.url.substr(0,4).toLowerCase()!=="http"&&(ee.article.url=pe.url+ee.article.url),Nn(ee,me),me.groupTitle&&(se=me.groupTitle),me.groupDescription&&(ue=me.groupDescription),W.push({article:ie(ee),group:me.group,name:me.name,aloneDisplay:pe.template.aloneDisplay}),X=me.name)}),ee={group:Y,title:se,description:ue,articles:W,aloneDisplay:pe.template.aloneDisplay},mn+=Ze(ee)}),v()("#sections").append(mn),pe.template.aloneDisplay||(document.body.dataset.spy="scroll",v()("body").scrollspy({target:"#scrollingNav"})),v()(".form-control").on("focus change",function(){v()(this).removeClass("border-danger")}),v()(".sidenav").find("a").on("click",function(Y){Y.preventDefault();const W=this.getAttribute("href");if(pe.template.aloneDisplay){const X=document.querySelector(".sidenav > li.active");X&&X.classList.remove("active"),this.parentNode.classList.add("active")}else{const X=document.querySelector(W);X&&v()("html,body").animate({scrollTop:X.offsetTop},400)}window.location.hash=W});function yt(Y){let W=!1;return v().each(Y,X=>{W=W||(0,a.some)(Y[X],ee=>ee.type)}),W}function An(){v()('button[data-toggle="popover"]').popover().click(function(W){W.preventDefault()});const Y=v()("#version strong").html();if(v()("#sidenav li").removeClass("is-new"),pe.template.withCompare&&v()("#sidenav li[data-version='"+Y+"']").each(function(){const W=v()(this).data("group"),X=v()(this).data("name"),ee=v()("#sidenav li[data-group='"+W+"'][data-name='"+X+"']").length,se=v()("#sidenav li[data-group='"+W+"'][data-name='"+X+"']").index(v()(this));(ee===1||se===ee-1)&&v()(this).addClass("is-new")}),v()(".nav-tabs-examples a").click(function(W){W.preventDefault(),v()(this).tab("show")}),v()(".nav-tabs-examples").find("a:first").tab("show"),v()(".sample-request-content-type-switch").change(function(){v()(this).val()==="body-form-data"?(v()("#sample-request-body-json-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-form-input-"+v()(this).data("id")).show()):(v()("#sample-request-body-form-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-json-input-"+v()(this).data("id")).show())}),pe.template.aloneDisplay&&(v()(".show-group").click(function(){const W="."+v()(this).attr("data-group")+"-group",X="."+v()(this).attr("data-group")+"-article";v()(".show-api-group").addClass("hide"),v()(W).removeClass("hide"),v()(".show-api-article").addClass("hide"),v()(X).removeClass("hide")}),v()(".show-api").click(function(){const W=this.getAttribute("href").substring(1),X=document.getElementById("version").textContent.trim(),ee=`.${this.dataset.name}-article`,se=`[id="${W}-${X}"]`,ue=`.${this.dataset.group}-group`;v()(".show-api-group").addClass("hide"),v()(ue).removeClass("hide"),v()(".show-api-article").addClass("hide");let me=v()(ee);v()(se).length&&(me=v()(se).parent()),me.removeClass("hide"),W.match(/_(header|footer)/)&&document.getElementById(W).classList.remove("hide")})),pe.template.aloneDisplay||v()("body").scrollspy("refresh"),pe.template.aloneDisplay){const W=window.location.hash;if(W!=null&&W.length!==0){const X=document.getElementById("version").textContent.trim(),ee=document.querySelector(`li .${W.slice(1)}-init`),se=document.querySelector(`li[data-version="${X}"] .show-api.${W.slice(1)}-init`);let ue=ee;se&&(ue=se),ue.click()}}}function kn(Y){typeof Y=="undefined"?Y=v()("#version strong").html():v()("#version strong").html(Y),v()("article").addClass("hide"),v()("#sidenav li:not(.nav-fixed)").addClass("hide");const W={};document.querySelectorAll("article[data-version]").forEach(X=>{const ee=X.dataset.group,se=X.dataset.name,ue=X.dataset.version,me=ee+se;!W[me]&&o().lte(ue,Y)&&(W[me]=!0,document.querySelector(`article[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${ee}"]`).classList.remove("hide"))}),v()("article[data-version]").each(function(X){const ee=v()(this).data("group");v()("section#api-"+ee).removeClass("hide"),v()("section#api-"+ee+" article:visible").length===0?v()("section#api-"+ee).addClass("hide"):v()("section#api-"+ee).removeClass("hide")})}if(kn(),v()("#versions li.version a").on("click",function(Y){Y.preventDefault(),kn(v()(this).html())}),v()("#compareAllWithPredecessor").on("click",wn),v()("article .versions li.version a").on("click",cn),v().urlParam=function(Y){const W=new RegExp("[\\?&amp;]"+Y+"=([^&amp;#]*)").exec(window.location.href);return W&&W[1]?W[1]:null},v().urlParam("compare")&&v()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const Y=decodeURI(window.location.hash);v()(Y).length>0&&v()("html,body").animate({scrollTop:parseInt(v()(Y).offset().top)},0)}v()("#scrollingNav .sidenav-search input.search").focus(),v()('[data-action="filter-search"]').on("keyup",Y=>{const W=Y.currentTarget.value.toLowerCase();v()(".sidenav").find("a.nav-list-item").each((X,ee)=>{v()(ee).show(),ee.innerText.toLowerCase().includes(W)||v()(ee).hide()})}),v()("span.search-reset").on("click",function(){v()("#scrollingNav .sidenav-search input.search").val("").focus(),v()(".sidenav").find("a.nav-list-item").show()});function cn(Y){Y.preventDefault();const W=v()(this).parents("article"),X=v()(this).html(),ee=W.find(".version"),se=ee.find("strong").html();ee.find("strong").html(X);const ue=W.data("group"),me=W.data("name"),Ee=W.data("version"),Te=W.data("compare-version");if(Te!==X&&!(!Te&&Ee===X)){if(Te&&Ft[ue][me][0]===X||Ee===X)Kn(ue,me,Ee);else{let Le={},Ve={};v().each($e[ue][me],function(rt,Yt){Yt.version===Ee&&(Le=Yt),Yt.version===X&&(Ve=Yt)});const ve={article:Le,compare:Ve,versions:Ft[ue][me]};ve.article.id=ve.article.group+"-"+ve.article.name+"-"+ve.article.version,ve.article.id=ve.article.id.replace(/\./g,"_"),ve.compare.id=ve.compare.group+"-"+ve.compare.name+"-"+ve.compare.version,ve.compare.id=ve.compare.id.replace(/\./g,"_");let Ie=Le;Ie.parameter&&Ie.parameter.fields&&(ve._hasTypeInParameterFields=yt(Ie.parameter.fields)),Ie.error&&Ie.error.fields&&(ve._hasTypeInErrorFields=yt(Ie.error.fields)),Ie.success&&Ie.success.fields&&(ve._hasTypeInSuccessFields=yt(Ie.success.fields)),Ie.info&&Ie.info.fields&&(ve._hasTypeInInfoFields=yt(Ie.info.fields)),Ie=Ve,ve._hasTypeInParameterFields!==!0&&Ie.parameter&&Ie.parameter.fields&&(ve._hasTypeInParameterFields=yt(Ie.parameter.fields)),ve._hasTypeInErrorFields!==!0&&Ie.error&&Ie.error.fields&&(ve._hasTypeInErrorFields=yt(Ie.error.fields)),ve._hasTypeInSuccessFields!==!0&&Ie.success&&Ie.success.fields&&(ve._hasTypeInSuccessFields=yt(Ie.success.fields)),ve._hasTypeInInfoFields!==!0&&Ie.info&&Ie.info.fields&&(ve._hasTypeInInfoFields=yt(Ie.info.fields));const vt=ye(ve);W.after(vt),W.next().find(".versions li.version a").on("click",cn),v()("#sidenav li[data-group='"+ue+"'][data-name='"+me+"'][data-version='"+se+"']").addClass("has-modifications"),W.remove()}h().highlightAll()}}function wn(Y){Y.preventDefault(),v()("article:visible .versions").each(function(){const X=v()(this).parents("article").data("version");let ee=null;v()(this).find("li.version a").each(function(){v()(this).html()<X&&!ee&&(ee=v()(this))}),ee&&ee.trigger("click")})}function Nn(Y,W){Y.id=Y.article.group+"-"+Y.article.name+"-"+Y.article.version,Y.id=Y.id.replace(/\./g,"_"),W.header&&W.header.fields&&(Y._hasTypeInHeaderFields=yt(W.header.fields)),W.parameter&&W.parameter.fields&&(Y._hasTypeInParameterFields=yt(W.parameter.fields)),W.error&&W.error.fields&&(Y._hasTypeInErrorFields=yt(W.error.fields)),W.success&&W.success.fields&&(Y._hasTypeInSuccessFields=yt(W.success.fields)),W.info&&W.info.fields&&(Y._hasTypeInInfoFields=yt(W.info.fields)),Y.template=pe.template}function po(Y,W,X){let ee={};v().each($e[Y][W],function(ue,me){me.version===X&&(ee=me)});const se={article:ee,versions:Ft[Y][W]};return Nn(se,ee),ie(se)}function Kn(Y,W,X){const ee=v()("article[data-group='"+Y+"'][data-name='"+W+"']:visible"),se=po(Y,W,X);ee.after(se),ee.next().find(".versions li.version a").on("click",cn),v()("#sidenav li[data-group='"+Y+"'][data-name='"+W+"'][data-version='"+X+"']").removeClass("has-modifications"),ee.remove()}function F(Y,W,X){const ee=[];return W.forEach(function(se){X?Y.forEach(function(ue){const me=ue.split(X);(me[0]===se||me[1]===se)&&ee.push(ue)}):Y.forEach(function(ue){ue===se&&ee.push(se)})}),Y.forEach(function(se){ee.indexOf(se)===-1&&ee.push(se)}),ee}function $(Y,W){const X=[];return W.forEach(ee=>{Object.keys(Y).forEach(se=>{Y[se].replace(/_/g," ")===ee&&X.push(se)})}),Object.keys(Y).forEach(ee=>{X.indexOf(ee)===-1&&X.push(ee)}),X}An()}})()})();
