(()=>{var Zs={5629:()=>{+function(P){"use strict";var y=".dropdown-backdrop",a='[data-toggle="dropdown"]',g=function(p){P(p).on("click.bs.dropdown",this.toggle)};g.VERSION="3.4.1";function o(p){var r=p.attr("data-target");r||(r=p.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var c=r!=="#"?P(document).find(r):null;return c&&c.length?c:p.parent()}function n(p){p&&p.which===3||(P(y).remove(),P(a).each(function(){var r=P(this),c=o(r),m={relatedTarget:this};!c.hasClass("open")||p&&p.type=="click"&&/input|textarea/i.test(p.target.tagName)&&P.contains(c[0],p.target)||(c.trigger(p=P.Event("hide.bs.dropdown",m)),!p.isDefaultPrevented()&&(r.attr("aria-expanded","false"),c.removeClass("open").trigger(P.Event("hidden.bs.dropdown",m))))}))}g.prototype.toggle=function(p){var r=P(this);if(!r.is(".disabled, :disabled")){var c=o(r),m=c.hasClass("open");if(n(),!m){"ontouchstart"in document.documentElement&&!c.closest(".navbar-nav").length&&P(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(P(this)).on("click",n);var i={relatedTarget:this};if(c.trigger(p=P.Event("show.bs.dropdown",i)),p.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(P.Event("shown.bs.dropdown",i))}return!1}},g.prototype.keydown=function(p){if(!(!/(38|40|27|32)/.test(p.which)||/input|textarea/i.test(p.target.tagName))){var r=P(this);if(p.preventDefault(),p.stopPropagation(),!r.is(".disabled, :disabled")){var c=o(r),m=c.hasClass("open");if(!m&&p.which!=27||m&&p.which==27)return p.which==27&&c.find(a).trigger("focus"),r.trigger("click");var i=" li:not(.disabled):visible a",h=c.find(".dropdown-menu"+i);if(!!h.length){var u=h.index(p.target);p.which==38&&u>0&&u--,p.which==40&&u<h.length-1&&u++,~u||(u=0),h.eq(u).trigger("focus")}}}};function l(p){return this.each(function(){var r=P(this),c=r.data("bs.dropdown");c||r.data("bs.dropdown",c=new g(this)),typeof p=="string"&&c[p].call(r)})}var d=P.fn.dropdown;P.fn.dropdown=l,P.fn.dropdown.Constructor=g,P.fn.dropdown.noConflict=function(){return P.fn.dropdown=d,this},P(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(p){p.stopPropagation()}).on("click.bs.dropdown.data-api",a,g.prototype.toggle).on("keydown.bs.dropdown.data-api",a,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery)},7513:()=>{+function(P){"use strict";var y=function(o,n){this.init("popover",o,n)};if(!P.fn.tooltip)throw new Error("Popover requires tooltip.js");y.VERSION="3.4.1",y.DEFAULTS=P.extend({},P.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),y.prototype=P.extend({},P.fn.tooltip.Constructor.prototype),y.prototype.constructor=y,y.prototype.getDefaults=function(){return y.DEFAULTS},y.prototype.setContent=function(){var o=this.tip(),n=this.getTitle(),l=this.getContent();if(this.options.html){var d=typeof l;this.options.sanitize&&(n=this.sanitizeHtml(n),d==="string"&&(l=this.sanitizeHtml(l))),o.find(".popover-title").html(n),o.find(".popover-content").children().detach().end()[d==="string"?"html":"append"](l)}else o.find(".popover-title").text(n),o.find(".popover-content").children().detach().end().text(l);o.removeClass("fade top bottom left right in"),o.find(".popover-title").html()||o.find(".popover-title").hide()},y.prototype.hasContent=function(){return this.getTitle()||this.getContent()},y.prototype.getContent=function(){var o=this.$element,n=this.options;return o.attr("data-content")||(typeof n.content=="function"?n.content.call(o[0]):n.content)},y.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function a(o){return this.each(function(){var n=P(this),l=n.data("bs.popover"),d=typeof o=="object"&&o;!l&&/destroy|hide/.test(o)||(l||n.data("bs.popover",l=new y(this,d)),typeof o=="string"&&l[o]())})}var g=P.fn.popover;P.fn.popover=a,P.fn.popover.Constructor=y,P.fn.popover.noConflict=function(){return P.fn.popover=g,this}}(jQuery)},2623:()=>{+function(P){"use strict";function y(o,n){this.$body=P(document.body),this.$scrollElement=P(o).is(document.body)?P(window):P(o),this.options=P.extend({},y.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",P.proxy(this.process,this)),this.refresh(),this.process()}y.VERSION="3.4.1",y.DEFAULTS={offset:10},y.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},y.prototype.refresh=function(){var o=this,n="offset",l=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),P.isWindow(this.$scrollElement[0])||(n="position",l=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var d=P(this),p=d.data("target")||d.attr("href"),r=/^#./.test(p)&&P(p);return r&&r.length&&r.is(":visible")&&[[r[n]().top+l,p]]||null}).sort(function(d,p){return d[0]-p[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},y.prototype.process=function(){var o=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),l=this.options.offset+n-this.$scrollElement.height(),d=this.offsets,p=this.targets,r=this.activeTarget,c;if(this.scrollHeight!=n&&this.refresh(),o>=l)return r!=(c=p[p.length-1])&&this.activate(c);if(r&&o<d[0])return this.activeTarget=null,this.clear();for(c=d.length;c--;)r!=p[c]&&o>=d[c]&&(d[c+1]===void 0||o<d[c+1])&&this.activate(p[c])},y.prototype.activate=function(o){this.activeTarget=o,this.clear();var n=this.selector+'[data-target="'+o+'"],'+this.selector+'[href="'+o+'"]',l=P(n).parents("li").addClass("active");l.parent(".dropdown-menu").length&&(l=l.closest("li.dropdown").addClass("active")),l.trigger("activate.bs.scrollspy")},y.prototype.clear=function(){P(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function a(o){return this.each(function(){var n=P(this),l=n.data("bs.scrollspy"),d=typeof o=="object"&&o;l||n.data("bs.scrollspy",l=new y(this,d)),typeof o=="string"&&l[o]()})}var g=P.fn.scrollspy;P.fn.scrollspy=a,P.fn.scrollspy.Constructor=y,P.fn.scrollspy.noConflict=function(){return P.fn.scrollspy=g,this},P(window).on("load.bs.scrollspy.data-api",function(){P('[data-spy="scroll"]').each(function(){var o=P(this);a.call(o,o.data())})})}(jQuery)},9365:()=>{+function(P){"use strict";var y=function(n){this.element=P(n)};y.VERSION="3.4.1",y.TRANSITION_DURATION=150,y.prototype.show=function(){var n=this.element,l=n.closest("ul:not(.dropdown-menu)"),d=n.data("target");if(d||(d=n.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var p=l.find(".active:last a"),r=P.Event("hide.bs.tab",{relatedTarget:n[0]}),c=P.Event("show.bs.tab",{relatedTarget:p[0]});if(p.trigger(r),n.trigger(c),!(c.isDefaultPrevented()||r.isDefaultPrevented())){var m=P(document).find(d);this.activate(n.closest("li"),l),this.activate(m,m.parent(),function(){p.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:p[0]})})}}},y.prototype.activate=function(n,l,d){var p=l.find("> .active"),r=d&&P.support.transition&&(p.length&&p.hasClass("fade")||!!l.find("> .fade").length);function c(){p.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),d&&d()}p.length&&r?p.one("bsTransitionEnd",c).emulateTransitionEnd(y.TRANSITION_DURATION):c(),p.removeClass("in")};function a(n){return this.each(function(){var l=P(this),d=l.data("bs.tab");d||l.data("bs.tab",d=new y(this)),typeof n=="string"&&d[n]()})}var g=P.fn.tab;P.fn.tab=a,P.fn.tab.Constructor=y,P.fn.tab.noConflict=function(){return P.fn.tab=g,this};var o=function(n){n.preventDefault(),a.call(P(this),"show")};P(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery)},1662:()=>{+function(P){"use strict";var y=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],g=/^aria-[\w-]*$/i,o={"*":["class","dir","id","lang","role",g],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function d(i,h){var u=i.nodeName.toLowerCase();if(P.inArray(u,h)!==-1)return P.inArray(u,a)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(l)):!0;for(var f=P(h).filter(function(b,O){return O instanceof RegExp}),S=0,v=f.length;S<v;S++)if(u.match(f[S]))return!0;return!1}function p(i,h,u){if(i.length===0)return i;if(u&&typeof u=="function")return u(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=i;for(var S=P.map(h,function(x,_){return _}),v=P(f.body).find("*"),b=0,O=v.length;b<O;b++){var E=v[b],N=E.nodeName.toLowerCase();if(P.inArray(N,S)===-1){E.parentNode.removeChild(E);continue}for(var T=P.map(E.attributes,function(x){return x}),A=[].concat(h["*"]||[],h[N]||[]),R=0,M=T.length;R<M;R++)d(T[R],A)||E.removeAttribute(T[R].nodeName)}return f.body.innerHTML}var r=function(i,h){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,h)};r.VERSION="3.4.1",r.TRANSITION_DURATION=150,r.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:o},r.prototype.init=function(i,h,u){if(this.enabled=!0,this.type=i,this.$element=P(h),this.options=this.getOptions(u),this.$viewport=this.options.viewport&&P(document).find(P.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),S=f.length;S--;){var v=f[S];if(v=="click")this.$element.on("click."+this.type,this.options.selector,P.proxy(this.toggle,this));else if(v!="manual"){var b=v=="hover"?"mouseenter":"focusin",O=v=="hover"?"mouseleave":"focusout";this.$element.on(b+"."+this.type,this.options.selector,P.proxy(this.enter,this)),this.$element.on(O+"."+this.type,this.options.selector,P.proxy(this.leave,this))}}this.options.selector?this._options=P.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},r.prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.getOptions=function(i){var h=this.$element.data();for(var u in h)h.hasOwnProperty(u)&&P.inArray(u,y)!==-1&&delete h[u];return i=P.extend({},this.getDefaults(),h,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=p(i.template,i.whiteList,i.sanitizeFn)),i},r.prototype.getDelegateOptions=function(){var i={},h=this.getDefaults();return this._options&&P.each(this._options,function(u,f){h[u]!=f&&(i[u]=f)}),i},r.prototype.enter=function(i){var h=i instanceof this.constructor?i:P(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),P(i.currentTarget).data("bs."+this.type,h)),i instanceof P.Event&&(h.inState[i.type=="focusin"?"focus":"hover"]=!0),h.tip().hasClass("in")||h.hoverState=="in"){h.hoverState="in";return}if(clearTimeout(h.timeout),h.hoverState="in",!h.options.delay||!h.options.delay.show)return h.show();h.timeout=setTimeout(function(){h.hoverState=="in"&&h.show()},h.options.delay.show)},r.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},r.prototype.leave=function(i){var h=i instanceof this.constructor?i:P(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),P(i.currentTarget).data("bs."+this.type,h)),i instanceof P.Event&&(h.inState[i.type=="focusout"?"focus":"hover"]=!1),!h.isInStateTrue()){if(clearTimeout(h.timeout),h.hoverState="out",!h.options.delay||!h.options.delay.hide)return h.hide();h.timeout=setTimeout(function(){h.hoverState=="out"&&h.hide()},h.options.delay.hide)}},r.prototype.show=function(){var i=P.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var h=P.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!h)return;var u=this,f=this.tip(),S=this.getUID(this.type);this.setContent(),f.attr("id",S),this.$element.attr("aria-describedby",S),this.options.animation&&f.addClass("fade");var v=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,b=/\s?auto?\s?/i,O=b.test(v);O&&(v=v.replace(b,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(v).data("bs."+this.type,this),this.options.container?f.appendTo(P(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var E=this.getPosition(),N=f[0].offsetWidth,T=f[0].offsetHeight;if(O){var A=v,R=this.getPosition(this.$viewport);v=v=="bottom"&&E.bottom+T>R.bottom?"top":v=="top"&&E.top-T<R.top?"bottom":v=="right"&&E.right+N>R.width?"left":v=="left"&&E.left-N<R.left?"right":v,f.removeClass(A).addClass(v)}var M=this.getCalculatedOffset(v,E,N,T);this.applyPlacement(M,v);var x=function(){var _=u.hoverState;u.$element.trigger("shown.bs."+u.type),u.hoverState=null,_=="out"&&u.leave(u)};P.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",x).emulateTransitionEnd(r.TRANSITION_DURATION):x()}},r.prototype.applyPlacement=function(i,h){var u=this.tip(),f=u[0].offsetWidth,S=u[0].offsetHeight,v=parseInt(u.css("margin-top"),10),b=parseInt(u.css("margin-left"),10);isNaN(v)&&(v=0),isNaN(b)&&(b=0),i.top+=v,i.left+=b,P.offset.setOffset(u[0],P.extend({using:function(M){u.css({top:Math.round(M.top),left:Math.round(M.left)})}},i),0),u.addClass("in");var O=u[0].offsetWidth,E=u[0].offsetHeight;h=="top"&&E!=S&&(i.top=i.top+S-E);var N=this.getViewportAdjustedDelta(h,i,O,E);N.left?i.left+=N.left:i.top+=N.top;var T=/top|bottom/.test(h),A=T?N.left*2-f+O:N.top*2-S+E,R=T?"offsetWidth":"offsetHeight";u.offset(i),this.replaceArrow(A,u[0][R],T)},r.prototype.replaceArrow=function(i,h,u){this.arrow().css(u?"left":"top",50*(1-i/h)+"%").css(u?"top":"left","")},r.prototype.setContent=function(){var i=this.tip(),h=this.getTitle();this.options.html?(this.options.sanitize&&(h=p(h,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(h)):i.find(".tooltip-inner").text(h),i.removeClass("fade in top bottom left right")},r.prototype.hide=function(i){var h=this,u=P(this.$tip),f=P.Event("hide.bs."+this.type);function S(){h.hoverState!="in"&&u.detach(),h.$element&&h.$element.removeAttr("aria-describedby").trigger("hidden.bs."+h.type),i&&i()}if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),P.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",S).emulateTransitionEnd(r.TRANSITION_DURATION):S(),this.hoverState=null,this},r.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},r.prototype.hasContent=function(){return this.getTitle()},r.prototype.getPosition=function(i){i=i||this.$element;var h=i[0],u=h.tagName=="BODY",f=h.getBoundingClientRect();f.width==null&&(f=P.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var S=window.SVGElement&&h instanceof window.SVGElement,v=u?{top:0,left:0}:S?null:i.offset(),b={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},O=u?{width:P(window).width(),height:P(window).height()}:null;return P.extend({},f,b,O,v)},r.prototype.getCalculatedOffset=function(i,h,u,f){return i=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-u/2}:i=="top"?{top:h.top-f,left:h.left+h.width/2-u/2}:i=="left"?{top:h.top+h.height/2-f/2,left:h.left-u}:{top:h.top+h.height/2-f/2,left:h.left+h.width}},r.prototype.getViewportAdjustedDelta=function(i,h,u,f){var S={top:0,left:0};if(!this.$viewport)return S;var v=this.options.viewport&&this.options.viewport.padding||0,b=this.getPosition(this.$viewport);if(/right|left/.test(i)){var O=h.top-v-b.scroll,E=h.top+v-b.scroll+f;O<b.top?S.top=b.top-O:E>b.top+b.height&&(S.top=b.top+b.height-E)}else{var N=h.left-v,T=h.left+v+u;N<b.left?S.left=b.left-N:T>b.right&&(S.left=b.left+b.width-T)}return S},r.prototype.getTitle=function(){var i,h=this.$element,u=this.options;return i=h.attr("data-original-title")||(typeof u.title=="function"?u.title.call(h[0]):u.title),i},r.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},r.prototype.tip=function(){if(!this.$tip&&(this.$tip=P(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},r.prototype.enable=function(){this.enabled=!0},r.prototype.disable=function(){this.enabled=!1},r.prototype.toggleEnabled=function(){this.enabled=!this.enabled},r.prototype.toggle=function(i){var h=this;i&&(h=P(i.currentTarget).data("bs."+this.type),h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),P(i.currentTarget).data("bs."+this.type,h))),i?(h.inState.click=!h.inState.click,h.isInStateTrue()?h.enter(h):h.leave(h)):h.tip().hasClass("in")?h.leave(h):h.enter(h)},r.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},r.prototype.sanitizeHtml=function(i){return p(i,this.options.whiteList,this.options.sanitizeFn)};function c(i){return this.each(function(){var h=P(this),u=h.data("bs.tooltip"),f=typeof i=="object"&&i;!u&&/destroy|hide/.test(i)||(u||h.data("bs.tooltip",u=new r(this,f)),typeof i=="string"&&u[i]())})}var m=P.fn.tooltip;P.fn.tooltip=c,P.fn.tooltip.Constructor=r,P.fn.tooltip.noConflict=function(){return P.fn.tooltip=m,this}}(jQuery)},6770:P=>{var y=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},a=-1,g=1,o=0;y.Diff=function(n,l){return[n,l]},y.prototype.diff_main=function(n,l,d,p){typeof p=="undefined"&&(this.Diff_Timeout<=0?p=Number.MAX_VALUE:p=new Date().getTime()+this.Diff_Timeout*1e3);var r=p;if(n==null||l==null)throw new Error("Null input. (diff_main)");if(n==l)return n?[new y.Diff(o,n)]:[];typeof d=="undefined"&&(d=!0);var c=d,m=this.diff_commonPrefix(n,l),i=n.substring(0,m);n=n.substring(m),l=l.substring(m),m=this.diff_commonSuffix(n,l);var h=n.substring(n.length-m);n=n.substring(0,n.length-m),l=l.substring(0,l.length-m);var u=this.diff_compute_(n,l,c,r);return i&&u.unshift(new y.Diff(o,i)),h&&u.push(new y.Diff(o,h)),this.diff_cleanupMerge(u),u},y.prototype.diff_compute_=function(n,l,d,p){var r;if(!n)return[new y.Diff(g,l)];if(!l)return[new y.Diff(a,n)];var c=n.length>l.length?n:l,m=n.length>l.length?l:n,i=c.indexOf(m);if(i!=-1)return r=[new y.Diff(g,c.substring(0,i)),new y.Diff(o,m),new y.Diff(g,c.substring(i+m.length))],n.length>l.length&&(r[0][0]=r[2][0]=a),r;if(m.length==1)return[new y.Diff(a,n),new y.Diff(g,l)];var h=this.diff_halfMatch_(n,l);if(h){var u=h[0],f=h[1],S=h[2],v=h[3],b=h[4],O=this.diff_main(u,S,d,p),E=this.diff_main(f,v,d,p);return O.concat([new y.Diff(o,b)],E)}return d&&n.length>100&&l.length>100?this.diff_lineMode_(n,l,p):this.diff_bisect_(n,l,p)},y.prototype.diff_lineMode_=function(n,l,d){var p=this.diff_linesToChars_(n,l);n=p.chars1,l=p.chars2;var r=p.lineArray,c=this.diff_main(n,l,!1,d);this.diff_charsToLines_(c,r),this.diff_cleanupSemantic(c),c.push(new y.Diff(o,""));for(var m=0,i=0,h=0,u="",f="";m<c.length;){switch(c[m][0]){case g:h++,f+=c[m][1];break;case a:i++,u+=c[m][1];break;case o:if(i>=1&&h>=1){c.splice(m-i-h,i+h),m=m-i-h;for(var S=this.diff_main(u,f,!1,d),v=S.length-1;v>=0;v--)c.splice(m,0,S[v]);m=m+S.length}h=0,i=0,u="",f="";break}m++}return c.pop(),c},y.prototype.diff_bisect_=function(n,l,d){for(var p=n.length,r=l.length,c=Math.ceil((p+r)/2),m=c,i=2*c,h=new Array(i),u=new Array(i),f=0;f<i;f++)h[f]=-1,u[f]=-1;h[m+1]=0,u[m+1]=0;for(var S=p-r,v=S%2!=0,b=0,O=0,E=0,N=0,T=0;T<c&&!(new Date().getTime()>d);T++){for(var A=-T+b;A<=T-O;A+=2){var R=m+A,M;A==-T||A!=T&&h[R-1]<h[R+1]?M=h[R+1]:M=h[R-1]+1;for(var x=M-A;M<p&&x<r&&n.charAt(M)==l.charAt(x);)M++,x++;if(h[R]=M,M>p)O+=2;else if(x>r)b+=2;else if(v){var _=m+S-A;if(_>=0&&_<i&&u[_]!=-1){var L=p-u[_];if(M>=L)return this.diff_bisectSplit_(n,l,M,x,d)}}}for(var U=-T+E;U<=T-N;U+=2){var _=m+U,L;U==-T||U!=T&&u[_-1]<u[_+1]?L=u[_+1]:L=u[_-1]+1;for(var k=L-U;L<p&&k<r&&n.charAt(p-L-1)==l.charAt(r-k-1);)L++,k++;if(u[_]=L,L>p)N+=2;else if(k>r)E+=2;else if(!v){var R=m+S-U;if(R>=0&&R<i&&h[R]!=-1){var M=h[R],x=m+M-R;if(L=p-L,M>=L)return this.diff_bisectSplit_(n,l,M,x,d)}}}}return[new y.Diff(a,n),new y.Diff(g,l)]},y.prototype.diff_bisectSplit_=function(n,l,d,p,r){var c=n.substring(0,d),m=l.substring(0,p),i=n.substring(d),h=l.substring(p),u=this.diff_main(c,m,!1,r),f=this.diff_main(i,h,!1,r);return u.concat(f)},y.prototype.diff_linesToChars_=function(n,l){var d=[],p={};d[0]="";function r(h){for(var u="",f=0,S=-1,v=d.length;S<h.length-1;){S=h.indexOf(`
`,f),S==-1&&(S=h.length-1);var b=h.substring(f,S+1);(p.hasOwnProperty?p.hasOwnProperty(b):p[b]!==void 0)?u+=String.fromCharCode(p[b]):(v==c&&(b=h.substring(f),S=h.length),u+=String.fromCharCode(v),p[b]=v,d[v++]=b),f=S+1}return u}var c=4e4,m=r(n);c=65535;var i=r(l);return{chars1:m,chars2:i,lineArray:d}},y.prototype.diff_charsToLines_=function(n,l){for(var d=0;d<n.length;d++){for(var p=n[d][1],r=[],c=0;c<p.length;c++)r[c]=l[p.charCodeAt(c)];n[d][1]=r.join("")}},y.prototype.diff_commonPrefix=function(n,l){if(!n||!l||n.charAt(0)!=l.charAt(0))return 0;for(var d=0,p=Math.min(n.length,l.length),r=p,c=0;d<r;)n.substring(c,r)==l.substring(c,r)?(d=r,c=d):p=r,r=Math.floor((p-d)/2+d);return r},y.prototype.diff_commonSuffix=function(n,l){if(!n||!l||n.charAt(n.length-1)!=l.charAt(l.length-1))return 0;for(var d=0,p=Math.min(n.length,l.length),r=p,c=0;d<r;)n.substring(n.length-r,n.length-c)==l.substring(l.length-r,l.length-c)?(d=r,c=d):p=r,r=Math.floor((p-d)/2+d);return r},y.prototype.diff_commonOverlap_=function(n,l){var d=n.length,p=l.length;if(d==0||p==0)return 0;d>p?n=n.substring(d-p):d<p&&(l=l.substring(0,d));var r=Math.min(d,p);if(n==l)return r;for(var c=0,m=1;;){var i=n.substring(r-m),h=l.indexOf(i);if(h==-1)return c;m+=h,(h==0||n.substring(r-m)==l.substring(0,m))&&(c=m,m++)}},y.prototype.diff_halfMatch_=function(n,l){if(this.Diff_Timeout<=0)return null;var d=n.length>l.length?n:l,p=n.length>l.length?l:n;if(d.length<4||p.length*2<d.length)return null;var r=this;function c(O,E,N){for(var T=O.substring(N,N+Math.floor(O.length/4)),A=-1,R="",M,x,_,L;(A=E.indexOf(T,A+1))!=-1;){var U=r.diff_commonPrefix(O.substring(N),E.substring(A)),k=r.diff_commonSuffix(O.substring(0,N),E.substring(0,A));R.length<k+U&&(R=E.substring(A-k,A)+E.substring(A,A+U),M=O.substring(0,N-k),x=O.substring(N+U),_=E.substring(0,A-k),L=E.substring(A+U))}return R.length*2>=O.length?[M,x,_,L,R]:null}var m=c(d,p,Math.ceil(d.length/4)),i=c(d,p,Math.ceil(d.length/2)),h;if(!m&&!i)return null;i?m?h=m[4].length>i[4].length?m:i:h=i:h=m;var u,f,S,v;n.length>l.length?(u=h[0],f=h[1],S=h[2],v=h[3]):(S=h[0],v=h[1],u=h[2],f=h[3]);var b=h[4];return[u,f,S,v,b]},y.prototype.diff_cleanupSemantic=function(n){for(var l=!1,d=[],p=0,r=null,c=0,m=0,i=0,h=0,u=0;c<n.length;)n[c][0]==o?(d[p++]=c,m=h,i=u,h=0,u=0,r=n[c][1]):(n[c][0]==g?h+=n[c][1].length:u+=n[c][1].length,r&&r.length<=Math.max(m,i)&&r.length<=Math.max(h,u)&&(n.splice(d[p-1],0,new y.Diff(a,r)),n[d[p-1]+1][0]=g,p--,p--,c=p>0?d[p-1]:-1,m=0,i=0,h=0,u=0,r=null,l=!0)),c++;for(l&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),c=1;c<n.length;){if(n[c-1][0]==a&&n[c][0]==g){var f=n[c-1][1],S=n[c][1],v=this.diff_commonOverlap_(f,S),b=this.diff_commonOverlap_(S,f);v>=b?(v>=f.length/2||v>=S.length/2)&&(n.splice(c,0,new y.Diff(o,S.substring(0,v))),n[c-1][1]=f.substring(0,f.length-v),n[c+1][1]=S.substring(v),c++):(b>=f.length/2||b>=S.length/2)&&(n.splice(c,0,new y.Diff(o,f.substring(0,b))),n[c-1][0]=g,n[c-1][1]=S.substring(0,S.length-b),n[c+1][0]=a,n[c+1][1]=f.substring(b),c++),c++}c++}},y.prototype.diff_cleanupSemanticLossless=function(n){function l(b,O){if(!b||!O)return 6;var E=b.charAt(b.length-1),N=O.charAt(0),T=E.match(y.nonAlphaNumericRegex_),A=N.match(y.nonAlphaNumericRegex_),R=T&&E.match(y.whitespaceRegex_),M=A&&N.match(y.whitespaceRegex_),x=R&&E.match(y.linebreakRegex_),_=M&&N.match(y.linebreakRegex_),L=x&&b.match(y.blanklineEndRegex_),U=_&&O.match(y.blanklineStartRegex_);return L||U?5:x||_?4:T&&!R&&M?3:R||M?2:T||A?1:0}for(var d=1;d<n.length-1;){if(n[d-1][0]==o&&n[d+1][0]==o){var p=n[d-1][1],r=n[d][1],c=n[d+1][1],m=this.diff_commonSuffix(p,r);if(m){var i=r.substring(r.length-m);p=p.substring(0,p.length-m),r=i+r.substring(0,r.length-m),c=i+c}for(var h=p,u=r,f=c,S=l(p,r)+l(r,c);r.charAt(0)===c.charAt(0);){p+=r.charAt(0),r=r.substring(1)+c.charAt(0),c=c.substring(1);var v=l(p,r)+l(r,c);v>=S&&(S=v,h=p,u=r,f=c)}n[d-1][1]!=h&&(h?n[d-1][1]=h:(n.splice(d-1,1),d--),n[d][1]=u,f?n[d+1][1]=f:(n.splice(d+1,1),d--))}d++}},y.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,y.whitespaceRegex_=/\s/,y.linebreakRegex_=/[\r\n]/,y.blanklineEndRegex_=/\n\r?\n$/,y.blanklineStartRegex_=/^\r?\n\r?\n/,y.prototype.diff_cleanupEfficiency=function(n){for(var l=!1,d=[],p=0,r=null,c=0,m=!1,i=!1,h=!1,u=!1;c<n.length;)n[c][0]==o?(n[c][1].length<this.Diff_EditCost&&(h||u)?(d[p++]=c,m=h,i=u,r=n[c][1]):(p=0,r=null),h=u=!1):(n[c][0]==a?u=!0:h=!0,r&&(m&&i&&h&&u||r.length<this.Diff_EditCost/2&&m+i+h+u==3)&&(n.splice(d[p-1],0,new y.Diff(a,r)),n[d[p-1]+1][0]=g,p--,r=null,m&&i?(h=u=!0,p=0):(p--,c=p>0?d[p-1]:-1,h=u=!1),l=!0)),c++;l&&this.diff_cleanupMerge(n)},y.prototype.diff_cleanupMerge=function(n){n.push(new y.Diff(o,""));for(var l=0,d=0,p=0,r="",c="",m;l<n.length;)switch(n[l][0]){case g:p++,c+=n[l][1],l++;break;case a:d++,r+=n[l][1],l++;break;case o:d+p>1?(d!==0&&p!==0&&(m=this.diff_commonPrefix(c,r),m!==0&&(l-d-p>0&&n[l-d-p-1][0]==o?n[l-d-p-1][1]+=c.substring(0,m):(n.splice(0,0,new y.Diff(o,c.substring(0,m))),l++),c=c.substring(m),r=r.substring(m)),m=this.diff_commonSuffix(c,r),m!==0&&(n[l][1]=c.substring(c.length-m)+n[l][1],c=c.substring(0,c.length-m),r=r.substring(0,r.length-m))),l-=d+p,n.splice(l,d+p),r.length&&(n.splice(l,0,new y.Diff(a,r)),l++),c.length&&(n.splice(l,0,new y.Diff(g,c)),l++),l++):l!==0&&n[l-1][0]==o?(n[l-1][1]+=n[l][1],n.splice(l,1)):l++,p=0,d=0,r="",c="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(l=1;l<n.length-1;)n[l-1][0]==o&&n[l+1][0]==o&&(n[l][1].substring(n[l][1].length-n[l-1][1].length)==n[l-1][1]?(n[l][1]=n[l-1][1]+n[l][1].substring(0,n[l][1].length-n[l-1][1].length),n[l+1][1]=n[l-1][1]+n[l+1][1],n.splice(l-1,1),i=!0):n[l][1].substring(0,n[l+1][1].length)==n[l+1][1]&&(n[l-1][1]+=n[l+1][1],n[l][1]=n[l][1].substring(n[l+1][1].length)+n[l+1][1],n.splice(l+1,1),i=!0)),l++;i&&this.diff_cleanupMerge(n)},y.prototype.diff_xIndex=function(n,l){var d=0,p=0,r=0,c=0,m;for(m=0;m<n.length&&(n[m][0]!==g&&(d+=n[m][1].length),n[m][0]!==a&&(p+=n[m][1].length),!(d>l));m++)r=d,c=p;return n.length!=m&&n[m][0]===a?c:c+(l-r)},y.prototype.diff_prettyHtml=function(n){for(var l=[],d=/&/g,p=/</g,r=/>/g,c=/\n/g,m=0;m<n.length;m++){var i=n[m][0],h=n[m][1],u=h.replace(d,"&amp;").replace(p,"&lt;").replace(r,"&gt;").replace(c,"&para;<br>");switch(i){case g:l[m]='<ins style="background:#e6ffe6;">'+u+"</ins>";break;case a:l[m]='<del style="background:#ffe6e6;">'+u+"</del>";break;case o:l[m]="<span>"+u+"</span>";break}}return l.join("")},y.prototype.diff_text1=function(n){for(var l=[],d=0;d<n.length;d++)n[d][0]!==g&&(l[d]=n[d][1]);return l.join("")},y.prototype.diff_text2=function(n){for(var l=[],d=0;d<n.length;d++)n[d][0]!==a&&(l[d]=n[d][1]);return l.join("")},y.prototype.diff_levenshtein=function(n){for(var l=0,d=0,p=0,r=0;r<n.length;r++){var c=n[r][0],m=n[r][1];switch(c){case g:d+=m.length;break;case a:p+=m.length;break;case o:l+=Math.max(d,p),d=0,p=0;break}}return l+=Math.max(d,p),l},y.prototype.diff_toDelta=function(n){for(var l=[],d=0;d<n.length;d++)switch(n[d][0]){case g:l[d]="+"+encodeURI(n[d][1]);break;case a:l[d]="-"+n[d][1].length;break;case o:l[d]="="+n[d][1].length;break}return l.join("	").replace(/%20/g," ")},y.prototype.diff_fromDelta=function(n,l){for(var d=[],p=0,r=0,c=l.split(/\t/g),m=0;m<c.length;m++){var i=c[m].substring(1);switch(c[m].charAt(0)){case"+":try{d[p++]=new y.Diff(g,decodeURI(i))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var h=parseInt(i,10);if(isNaN(h)||h<0)throw new Error("Invalid number in diff_fromDelta: "+i);var u=n.substring(r,r+=h);c[m].charAt(0)=="="?d[p++]=new y.Diff(o,u):d[p++]=new y.Diff(a,u);break;default:if(c[m])throw new Error("Invalid diff operation in diff_fromDelta: "+c[m])}}if(r!=n.length)throw new Error("Delta length ("+r+") does not equal source text length ("+n.length+").");return d},y.prototype.match_main=function(n,l,d){if(n==null||l==null||d==null)throw new Error("Null input. (match_main)");return d=Math.max(0,Math.min(d,n.length)),n==l?0:n.length?n.substring(d,d+l.length)==l?d:this.match_bitap_(n,l,d):-1},y.prototype.match_bitap_=function(n,l,d){if(l.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var p=this.match_alphabet_(l),r=this;function c(M,x){var _=M/l.length,L=Math.abs(d-x);return r.Match_Distance?_+L/r.Match_Distance:L?1:_}var m=this.Match_Threshold,i=n.indexOf(l,d);i!=-1&&(m=Math.min(c(0,i),m),i=n.lastIndexOf(l,d+l.length),i!=-1&&(m=Math.min(c(0,i),m)));var h=1<<l.length-1;i=-1;for(var u,f,S=l.length+n.length,v,b=0;b<l.length;b++){for(u=0,f=S;u<f;)c(b,d+f)<=m?u=f:S=f,f=Math.floor((S-u)/2+u);S=f;var O=Math.max(1,d-f+1),E=Math.min(d+f,n.length)+l.length,N=Array(E+2);N[E+1]=(1<<b)-1;for(var T=E;T>=O;T--){var A=p[n.charAt(T-1)];if(b===0?N[T]=(N[T+1]<<1|1)&A:N[T]=(N[T+1]<<1|1)&A|((v[T+1]|v[T])<<1|1)|v[T+1],N[T]&h){var R=c(b,T-1);if(R<=m)if(m=R,i=T-1,i>d)O=Math.max(1,2*d-i);else break}}if(c(b+1,d)>m)break;v=N}return i},y.prototype.match_alphabet_=function(n){for(var l={},d=0;d<n.length;d++)l[n.charAt(d)]=0;for(var d=0;d<n.length;d++)l[n.charAt(d)]|=1<<n.length-d-1;return l},y.prototype.patch_addContext_=function(n,l){if(l.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var d=l.substring(n.start2,n.start2+n.length1),p=0;l.indexOf(d)!=l.lastIndexOf(d)&&d.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)p+=this.Patch_Margin,d=l.substring(n.start2-p,n.start2+n.length1+p);p+=this.Patch_Margin;var r=l.substring(n.start2-p,n.start2);r&&n.diffs.unshift(new y.Diff(o,r));var c=l.substring(n.start2+n.length1,n.start2+n.length1+p);c&&n.diffs.push(new y.Diff(o,c)),n.start1-=r.length,n.start2-=r.length,n.length1+=r.length+c.length,n.length2+=r.length+c.length}},y.prototype.patch_make=function(n,l,d){var p,r;if(typeof n=="string"&&typeof l=="string"&&typeof d=="undefined")p=n,r=this.diff_main(p,l,!0),r.length>2&&(this.diff_cleanupSemantic(r),this.diff_cleanupEfficiency(r));else if(n&&typeof n=="object"&&typeof l=="undefined"&&typeof d=="undefined")r=n,p=this.diff_text1(r);else if(typeof n=="string"&&l&&typeof l=="object"&&typeof d=="undefined")p=n,r=l;else if(typeof n=="string"&&typeof l=="string"&&d&&typeof d=="object")p=n,r=d;else throw new Error("Unknown call format to patch_make.");if(r.length===0)return[];for(var c=[],m=new y.patch_obj,i=0,h=0,u=0,f=p,S=p,v=0;v<r.length;v++){var b=r[v][0],O=r[v][1];switch(!i&&b!==o&&(m.start1=h,m.start2=u),b){case g:m.diffs[i++]=r[v],m.length2+=O.length,S=S.substring(0,u)+O+S.substring(u);break;case a:m.length1+=O.length,m.diffs[i++]=r[v],S=S.substring(0,u)+S.substring(u+O.length);break;case o:O.length<=2*this.Patch_Margin&&i&&r.length!=v+1?(m.diffs[i++]=r[v],m.length1+=O.length,m.length2+=O.length):O.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(m,f),c.push(m),m=new y.patch_obj,i=0,f=S,h=u);break}b!==g&&(h+=O.length),b!==a&&(u+=O.length)}return i&&(this.patch_addContext_(m,f),c.push(m)),c},y.prototype.patch_deepCopy=function(n){for(var l=[],d=0;d<n.length;d++){var p=n[d],r=new y.patch_obj;r.diffs=[];for(var c=0;c<p.diffs.length;c++)r.diffs[c]=new y.Diff(p.diffs[c][0],p.diffs[c][1]);r.start1=p.start1,r.start2=p.start2,r.length1=p.length1,r.length2=p.length2,l[d]=r}return l},y.prototype.patch_apply=function(n,l){if(n.length==0)return[l,[]];n=this.patch_deepCopy(n);var d=this.patch_addPadding(n);l=d+l+d,this.patch_splitMax(n);for(var p=0,r=[],c=0;c<n.length;c++){var m=n[c].start2+p,i=this.diff_text1(n[c].diffs),h,u=-1;if(i.length>this.Match_MaxBits?(h=this.match_main(l,i.substring(0,this.Match_MaxBits),m),h!=-1&&(u=this.match_main(l,i.substring(i.length-this.Match_MaxBits),m+i.length-this.Match_MaxBits),(u==-1||h>=u)&&(h=-1))):h=this.match_main(l,i,m),h==-1)r[c]=!1,p-=n[c].length2-n[c].length1;else{r[c]=!0,p=h-m;var f;if(u==-1?f=l.substring(h,h+i.length):f=l.substring(h,u+this.Match_MaxBits),i==f)l=l.substring(0,h)+this.diff_text2(n[c].diffs)+l.substring(h+i.length);else{var S=this.diff_main(i,f,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(S)/i.length>this.Patch_DeleteThreshold)r[c]=!1;else{this.diff_cleanupSemanticLossless(S);for(var v=0,b,O=0;O<n[c].diffs.length;O++){var E=n[c].diffs[O];E[0]!==o&&(b=this.diff_xIndex(S,v)),E[0]===g?l=l.substring(0,h+b)+E[1]+l.substring(h+b):E[0]===a&&(l=l.substring(0,h+b)+l.substring(h+this.diff_xIndex(S,v+E[1].length))),E[0]!==a&&(v+=E[1].length)}}}}}return l=l.substring(d.length,l.length-d.length),[l,r]},y.prototype.patch_addPadding=function(n){for(var l=this.Patch_Margin,d="",p=1;p<=l;p++)d+=String.fromCharCode(p);for(var p=0;p<n.length;p++)n[p].start1+=l,n[p].start2+=l;var r=n[0],c=r.diffs;if(c.length==0||c[0][0]!=o)c.unshift(new y.Diff(o,d)),r.start1-=l,r.start2-=l,r.length1+=l,r.length2+=l;else if(l>c[0][1].length){var m=l-c[0][1].length;c[0][1]=d.substring(c[0][1].length)+c[0][1],r.start1-=m,r.start2-=m,r.length1+=m,r.length2+=m}if(r=n[n.length-1],c=r.diffs,c.length==0||c[c.length-1][0]!=o)c.push(new y.Diff(o,d)),r.length1+=l,r.length2+=l;else if(l>c[c.length-1][1].length){var m=l-c[c.length-1][1].length;c[c.length-1][1]+=d.substring(0,m),r.length1+=m,r.length2+=m}return d},y.prototype.patch_splitMax=function(n){for(var l=this.Match_MaxBits,d=0;d<n.length;d++)if(!(n[d].length1<=l)){var p=n[d];n.splice(d--,1);for(var r=p.start1,c=p.start2,m="";p.diffs.length!==0;){var i=new y.patch_obj,h=!0;for(i.start1=r-m.length,i.start2=c-m.length,m!==""&&(i.length1=i.length2=m.length,i.diffs.push(new y.Diff(o,m)));p.diffs.length!==0&&i.length1<l-this.Patch_Margin;){var u=p.diffs[0][0],f=p.diffs[0][1];u===g?(i.length2+=f.length,c+=f.length,i.diffs.push(p.diffs.shift()),h=!1):u===a&&i.diffs.length==1&&i.diffs[0][0]==o&&f.length>2*l?(i.length1+=f.length,r+=f.length,h=!1,i.diffs.push(new y.Diff(u,f)),p.diffs.shift()):(f=f.substring(0,l-i.length1-this.Patch_Margin),i.length1+=f.length,r+=f.length,u===o?(i.length2+=f.length,c+=f.length):h=!1,i.diffs.push(new y.Diff(u,f)),f==p.diffs[0][1]?p.diffs.shift():p.diffs[0][1]=p.diffs[0][1].substring(f.length))}m=this.diff_text2(i.diffs),m=m.substring(m.length-this.Patch_Margin);var S=this.diff_text1(p.diffs).substring(0,this.Patch_Margin);S!==""&&(i.length1+=S.length,i.length2+=S.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===o?i.diffs[i.diffs.length-1][1]+=S:i.diffs.push(new y.Diff(o,S))),h||n.splice(++d,0,i)}}},y.prototype.patch_toText=function(n){for(var l=[],d=0;d<n.length;d++)l[d]=n[d];return l.join("")},y.prototype.patch_fromText=function(n){var l=[];if(!n)return l;for(var d=n.split(`
`),p=0,r=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;p<d.length;){var c=d[p].match(r);if(!c)throw new Error("Invalid patch string: "+d[p]);var m=new y.patch_obj;for(l.push(m),m.start1=parseInt(c[1],10),c[2]===""?(m.start1--,m.length1=1):c[2]=="0"?m.length1=0:(m.start1--,m.length1=parseInt(c[2],10)),m.start2=parseInt(c[3],10),c[4]===""?(m.start2--,m.length2=1):c[4]=="0"?m.length2=0:(m.start2--,m.length2=parseInt(c[4],10)),p++;p<d.length;){var i=d[p].charAt(0);try{var h=decodeURI(d[p].substring(1))}catch(u){throw new Error("Illegal escape in patch_fromText: "+h)}if(i=="-")m.diffs.push(new y.Diff(a,h));else if(i=="+")m.diffs.push(new y.Diff(g,h));else if(i==" ")m.diffs.push(new y.Diff(o,h));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+h)}p++}}return l},y.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},y.patch_obj.prototype.toString=function(){var n,l;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?l=this.start2+",0":this.length2==1?l=this.start2+1:l=this.start2+1+","+this.length2;for(var d=["@@ -"+n+" +"+l+` @@
`],p,r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case g:p="+";break;case a:p="-";break;case o:p=" ";break}d[r+1]=p+encodeURI(this.diffs[r][1])+`
`}return d.join("").replace(/%20/g," ")},P.exports=y,P.exports.diff_match_patch=y,P.exports.DIFF_DELETE=a,P.exports.DIFF_INSERT=g,P.exports.DIFF_EQUAL=o},3509:function(P){/**!

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

*/(function(y,a){P.exports=a()})(this,function(){return function(y){function a(o){if(g[o])return g[o].exports;var n=g[o]={exports:{},id:o,loaded:!1};return y[o].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var g={};return a.m=y,a.c=g,a.p="",a(0)}([function(y,a,g){"use strict";function o(){var E=b();return E.compile=function(N,T){return m.compile(N,T,E)},E.precompile=function(N,T){return m.precompile(N,T,E)},E.AST=r.default,E.Compiler=m.Compiler,E.JavaScriptCompiler=h.default,E.Parser=c.parser,E.parse=c.parse,E.parseWithoutProcessing=c.parseWithoutProcessing,E}var n=g(1).default;a.__esModule=!0;var l=g(2),d=n(l),p=g(45),r=n(p),c=g(46),m=g(51),i=g(52),h=n(i),u=g(49),f=n(u),S=g(44),v=n(S),b=d.default.create,O=o();O.create=o,v.default(O),O.Visitor=f.default,O.default=O,a.default=O,y.exports=a.default},function(y,a){"use strict";a.default=function(g){return g&&g.__esModule?g:{default:g}},a.__esModule=!0},function(y,a,g){"use strict";function o(){var E=new p.HandlebarsEnvironment;return u.extend(E,p),E.SafeString=c.default,E.Exception=i.default,E.Utils=u,E.escapeExpression=u.escapeExpression,E.VM=S,E.template=function(N){return S.template(N,E)},E}var n=g(3).default,l=g(1).default;a.__esModule=!0;var d=g(4),p=n(d),r=g(37),c=l(r),m=g(6),i=l(m),h=g(5),u=n(h),f=g(38),S=n(f),v=g(44),b=l(v),O=o();O.create=o,b.default(O),O.default=O,a.default=O,y.exports=a.default},function(y,a){"use strict";a.default=function(g){if(g&&g.__esModule)return g;var o={};if(g!=null)for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(o[n]=g[n]);return o.default=g,o},a.__esModule=!0},function(y,a,g){"use strict";function o(E,N,T){this.helpers=E||{},this.partials=N||{},this.decorators=T||{},r.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}var n=g(1).default;a.__esModule=!0,a.HandlebarsEnvironment=o;var l=g(5),d=g(6),p=n(d),r=g(10),c=g(30),m=g(32),i=n(m),h=g(33),u="4.7.7";a.VERSION=u;var f=8;a.COMPILER_REVISION=f;var S=7;a.LAST_COMPATIBLE_COMPILER_REVISION=S;var v={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};a.REVISION_CHANGES=v;var b="[object Object]";o.prototype={constructor:o,logger:i.default,log:i.default.log,registerHelper:function(E,N){if(l.toString.call(E)===b){if(N)throw new p.default("Arg not supported with multiple helpers");l.extend(this.helpers,E)}else this.helpers[E]=N},unregisterHelper:function(E){delete this.helpers[E]},registerPartial:function(E,N){if(l.toString.call(E)===b)l.extend(this.partials,E);else{if(typeof N=="undefined")throw new p.default('Attempting to register a partial called "'+E+'" as undefined');this.partials[E]=N}},unregisterPartial:function(E){delete this.partials[E]},registerDecorator:function(E,N){if(l.toString.call(E)===b){if(N)throw new p.default("Arg not supported with multiple decorators");l.extend(this.decorators,E)}else this.decorators[E]=N},unregisterDecorator:function(E){delete this.decorators[E]},resetLoggedPropertyAccesses:function(){h.resetLoggedProperties()}};var O=i.default.log;a.log=O,a.createFrame=l.createFrame,a.logger=i.default},function(y,a){"use strict";function g(v){return m[v]}function o(v){for(var b=1;b<arguments.length;b++)for(var O in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],O)&&(v[O]=arguments[b][O]);return v}function n(v,b){for(var O=0,E=v.length;O<E;O++)if(v[O]===b)return O;return-1}function l(v){if(typeof v!="string"){if(v&&v.toHTML)return v.toHTML();if(v==null)return"";if(!v)return v+"";v=""+v}return h.test(v)?v.replace(i,g):v}function d(v){return!v&&v!==0||!(!S(v)||v.length!==0)}function p(v){var b=o({},v);return b._parent=v,b}function r(v,b){return v.path=b,v}function c(v,b){return(v?v+".":"")+b}a.__esModule=!0,a.extend=o,a.indexOf=n,a.escapeExpression=l,a.isEmpty=d,a.createFrame=p,a.blockParams=r,a.appendContextPath=c;var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,h=/[&<>"'`=]/,u=Object.prototype.toString;a.toString=u;var f=function(v){return typeof v=="function"};f(/x/)&&(a.isFunction=f=function(v){return typeof v=="function"&&u.call(v)==="[object Function]"}),a.isFunction=f;var S=Array.isArray||function(v){return!(!v||typeof v!="object")&&u.call(v)==="[object Array]"};a.isArray=S},function(y,a,g){"use strict";function o(d,p){var r=p&&p.loc,c=void 0,m=void 0,i=void 0,h=void 0;r&&(c=r.start.line,m=r.end.line,i=r.start.column,h=r.end.column,d+=" - "+c+":"+i);for(var u=Error.prototype.constructor.call(this,d),f=0;f<l.length;f++)this[l[f]]=u[l[f]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=c,this.endLineNumber=m,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:h,enumerable:!0})):(this.column=i,this.endColumn=h))}catch(S){}}var n=g(7).default;a.__esModule=!0;var l=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];o.prototype=new Error,a.default=o,y.exports=a.default},function(y,a,g){y.exports={default:g(8),__esModule:!0}},function(y,a,g){var o=g(9);y.exports=function(n,l,d){return o.setDesc(n,l,d)}},function(y,a){var g=Object;y.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}},function(y,a,g){"use strict";function o(N){p.default(N),c.default(N),i.default(N),u.default(N),S.default(N),b.default(N),E.default(N)}function n(N,T,A){N.helpers[T]&&(N.hooks[T]=N.helpers[T],A||delete N.helpers[T])}var l=g(1).default;a.__esModule=!0,a.registerDefaultHelpers=o,a.moveHelperToHooks=n;var d=g(11),p=l(d),r=g(12),c=l(r),m=g(25),i=l(m),h=g(26),u=l(h),f=g(27),S=l(f),v=g(28),b=l(v),O=g(29),E=l(O)},function(y,a,g){"use strict";a.__esModule=!0;var o=g(5);a.default=function(n){n.registerHelper("blockHelperMissing",function(l,d){var p=d.inverse,r=d.fn;if(l===!0)return r(this);if(l===!1||l==null)return p(this);if(o.isArray(l))return l.length>0?(d.ids&&(d.ids=[d.name]),n.helpers.each(l,d)):p(this);if(d.data&&d.ids){var c=o.createFrame(d.data);c.contextPath=o.appendContextPath(d.data.contextPath,d.name),d={data:c}}return r(l,d)})},y.exports=a.default},function(y,a,g){(function(o){"use strict";var n=g(13).default,l=g(1).default;a.__esModule=!0;var d=g(5),p=g(6),r=l(p);a.default=function(c){c.registerHelper("each",function(m,i){function h(R,M,x){b&&(b.key=R,b.index=M,b.first=M===0,b.last=!!x,O&&(b.contextPath=O+R)),v+=u(m[R],{data:b,blockParams:d.blockParams([m[R],R],[O+R,null])})}if(!i)throw new r.default("Must pass iterator to #each");var u=i.fn,f=i.inverse,S=0,v="",b=void 0,O=void 0;if(i.data&&i.ids&&(O=d.appendContextPath(i.data.contextPath,i.ids[0])+"."),d.isFunction(m)&&(m=m.call(this)),i.data&&(b=d.createFrame(i.data)),m&&typeof m=="object")if(d.isArray(m))for(var E=m.length;S<E;S++)S in m&&h(S,S,S===m.length-1);else if(o.Symbol&&m[o.Symbol.iterator]){for(var N=[],T=m[o.Symbol.iterator](),A=T.next();!A.done;A=T.next())N.push(A.value);m=N;for(var E=m.length;S<E;S++)h(S,S,S===m.length-1)}else(function(){var R=void 0;n(m).forEach(function(M){R!==void 0&&h(R,S-1),R=M,S++}),R!==void 0&&h(R,S-1,!0)})();return S===0&&(v=f(this)),v})},y.exports=a.default}).call(a,function(){return this}())},function(y,a,g){y.exports={default:g(14),__esModule:!0}},function(y,a,g){g(15),y.exports=g(21).Object.keys},function(y,a,g){var o=g(16);g(18)("keys",function(n){return function(l){return n(o(l))}})},function(y,a,g){var o=g(17);y.exports=function(n){return Object(o(n))}},function(y,a){y.exports=function(g){if(g==null)throw TypeError("Can't call method on  "+g);return g}},function(y,a,g){var o=g(19),n=g(21),l=g(24);y.exports=function(d,p){var r=(n.Object||{})[d]||Object[d],c={};c[d]=p(r),o(o.S+o.F*l(function(){r(1)}),"Object",c)}},function(y,a,g){var o=g(20),n=g(21),l=g(22),d="prototype",p=function(r,c,m){var i,h,u,f=r&p.F,S=r&p.G,v=r&p.S,b=r&p.P,O=r&p.B,E=r&p.W,N=S?n:n[c]||(n[c]={}),T=S?o:v?o[c]:(o[c]||{})[d];S&&(m=c);for(i in m)h=!f&&T&&i in T,h&&i in N||(u=h?T[i]:m[i],N[i]=S&&typeof T[i]!="function"?m[i]:O&&h?l(u,o):E&&T[i]==u?function(A){var R=function(M){return this instanceof A?new A(M):A(M)};return R[d]=A[d],R}(u):b&&typeof u=="function"?l(Function.call,u):u,b&&((N[d]||(N[d]={}))[i]=u))};p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,y.exports=p},function(y,a){var g=y.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=g)},function(y,a){var g=y.exports={version:"1.2.6"};typeof __e=="number"&&(__e=g)},function(y,a,g){var o=g(23);y.exports=function(n,l,d){if(o(n),l===void 0)return n;switch(d){case 1:return function(p){return n.call(l,p)};case 2:return function(p,r){return n.call(l,p,r)};case 3:return function(p,r,c){return n.call(l,p,r,c)}}return function(){return n.apply(l,arguments)}}},function(y,a){y.exports=function(g){if(typeof g!="function")throw TypeError(g+" is not a function!");return g}},function(y,a){y.exports=function(g){try{return!!g()}catch(o){return!0}}},function(y,a,g){"use strict";var o=g(1).default;a.__esModule=!0;var n=g(6),l=o(n);a.default=function(d){d.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new l.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},y.exports=a.default},function(y,a,g){"use strict";var o=g(1).default;a.__esModule=!0;var n=g(5),l=g(6),d=o(l);a.default=function(p){p.registerHelper("if",function(r,c){if(arguments.length!=2)throw new d.default("#if requires exactly one argument");return n.isFunction(r)&&(r=r.call(this)),!c.hash.includeZero&&!r||n.isEmpty(r)?c.inverse(this):c.fn(this)}),p.registerHelper("unless",function(r,c){if(arguments.length!=2)throw new d.default("#unless requires exactly one argument");return p.helpers.if.call(this,r,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},y.exports=a.default},function(y,a){"use strict";a.__esModule=!0,a.default=function(g){g.registerHelper("log",function(){for(var o=[void 0],n=arguments[arguments.length-1],l=0;l<arguments.length-1;l++)o.push(arguments[l]);var d=1;n.hash.level!=null?d=n.hash.level:n.data&&n.data.level!=null&&(d=n.data.level),o[0]=d,g.log.apply(g,o)})},y.exports=a.default},function(y,a){"use strict";a.__esModule=!0,a.default=function(g){g.registerHelper("lookup",function(o,n,l){return o&&l.lookupProperty(o,n)})},y.exports=a.default},function(y,a,g){"use strict";var o=g(1).default;a.__esModule=!0;var n=g(5),l=g(6),d=o(l);a.default=function(p){p.registerHelper("with",function(r,c){if(arguments.length!=2)throw new d.default("#with requires exactly one argument");n.isFunction(r)&&(r=r.call(this));var m=c.fn;if(n.isEmpty(r))return c.inverse(this);var i=c.data;return c.data&&c.ids&&(i=n.createFrame(c.data),i.contextPath=n.appendContextPath(c.data.contextPath,c.ids[0])),m(r,{data:i,blockParams:n.blockParams([r],[i&&i.contextPath])})})},y.exports=a.default},function(y,a,g){"use strict";function o(p){d.default(p)}var n=g(1).default;a.__esModule=!0,a.registerDefaultDecorators=o;var l=g(31),d=n(l)},function(y,a,g){"use strict";a.__esModule=!0;var o=g(5);a.default=function(n){n.registerDecorator("inline",function(l,d,p,r){var c=l;return d.partials||(d.partials={},c=function(m,i){var h=p.partials;p.partials=o.extend({},h,d.partials);var u=l(m,i);return p.partials=h,u}),d.partials[r.args[0]]=r.fn,c})},y.exports=a.default},function(y,a,g){"use strict";a.__esModule=!0;var o=g(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(l){if(typeof l=="string"){var d=o.indexOf(n.methodMap,l.toLowerCase());l=d>=0?d:parseInt(l,10)}return l},log:function(l){if(l=n.lookupLevel(l),typeof console!="undefined"&&n.lookupLevel(n.level)<=l){var d=n.methodMap[l];console[d]||(d="log");for(var p=arguments.length,r=Array(p>1?p-1:0),c=1;c<p;c++)r[c-1]=arguments[c];console[d].apply(console,r)}}};a.default=n,y.exports=a.default},function(y,a,g){"use strict";function o(S){var v=r(null);v.constructor=!1,v.__defineGetter__=!1,v.__defineSetter__=!1,v.__lookupGetter__=!1;var b=r(null);return b.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(b,S.allowedProtoProperties),defaultValue:S.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(v,S.allowedProtoMethods),defaultValue:S.allowProtoMethodsByDefault}}}function n(S,v,b){return l(typeof S=="function"?v.methods:v.properties,b)}function l(S,v){return S.whitelist[v]!==void 0?S.whitelist[v]===!0:S.defaultValue!==void 0?S.defaultValue:(d(v),!1)}function d(S){f[S]!==!0&&(f[S]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+S+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function p(){c(f).forEach(function(S){delete f[S]})}var r=g(34).default,c=g(13).default,m=g(3).default;a.__esModule=!0,a.createProtoAccessControl=o,a.resultIsAllowed=n,a.resetLoggedProperties=p;var i=g(36),h=g(32),u=m(h),f=r(null)},function(y,a,g){y.exports={default:g(35),__esModule:!0}},function(y,a,g){var o=g(9);y.exports=function(n,l){return o.create(n,l)}},function(y,a,g){"use strict";function o(){for(var d=arguments.length,p=Array(d),r=0;r<d;r++)p[r]=arguments[r];return l.extend.apply(void 0,[n(null)].concat(p))}var n=g(34).default;a.__esModule=!0,a.createNewLookupObject=o;var l=g(5)},function(y,a){"use strict";function g(o){this.string=o}a.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string},a.default=g,y.exports=a.default},function(y,a,g){"use strict";function o(x){var _=x&&x[0]||1,L=T.COMPILER_REVISION;if(!(_>=T.LAST_COMPATIBLE_COMPILER_REVISION&&_<=T.COMPILER_REVISION)){if(_<T.LAST_COMPATIBLE_COMPILER_REVISION){var U=T.REVISION_CHANGES[L],k=T.REVISION_CHANGES[_];throw new N.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+U+") or downgrade your runtime to an older version ("+k+").")}throw new N.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+x[1]+").")}}function n(x,_){function L(B,H,j){j.hash&&(H=O.extend({},H,j.hash),j.ids&&(j.ids[0]=!0)),B=_.VM.resolvePartial.call(this,B,H,j);var q=O.extend({},j,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),V=_.VM.invokePartial.call(this,B,H,q);if(V==null&&_.compile&&(j.partials[j.name]=_.compile(B,x.compilerOptions,_),V=j.partials[j.name](H,q)),V!=null){if(j.indent){for(var ne=V.split(`
`),ae=0,de=ne.length;ae<de&&(ne[ae]||ae+1!==de);ae++)ne[ae]=j.indent+ne[ae];V=ne.join(`
`)}return V}throw new N.default("The partial "+j.name+" could not be compiled when running in runtime-only mode")}function U(B){function H(ae){return""+x.main(z,ae,z.helpers,z.partials,q,ne,V)}var j=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],q=j.data;U._setup(j),!j.partial&&x.useData&&(q=c(B,q));var V=void 0,ne=x.useBlockParams?[]:void 0;return x.useDepths&&(V=j.depths?B!=j.depths[0]?[B].concat(j.depths):j.depths:[B]),(H=m(x.main,H,z,j.depths||[],q,ne))(B,j)}if(!_)throw new N.default("No environment passed to template");if(!x||!x.main)throw new N.default("Unknown template object: "+typeof x);x.main.decorator=x.main_d,_.VM.checkRevision(x.compiler);var k=x.compiler&&x.compiler[0]===7,z={strict:function(B,H,j){if(!(B&&H in B))throw new N.default('"'+H+'" not defined in '+B,{loc:j});return z.lookupProperty(B,H)},lookupProperty:function(B,H){var j=B[H];return j==null||Object.prototype.hasOwnProperty.call(B,H)||M.resultIsAllowed(j,z.protoAccessControl,H)?j:void 0},lookup:function(B,H){for(var j=B.length,q=0;q<j;q++){var V=B[q]&&z.lookupProperty(B[q],H);if(V!=null)return B[q][H]}},lambda:function(B,H){return typeof B=="function"?B.call(H):B},escapeExpression:O.escapeExpression,invokePartial:L,fn:function(B){var H=x[B];return H.decorator=x[B+"_d"],H},programs:[],program:function(B,H,j,q,V){var ne=this.programs[B],ae=this.fn(B);return H||V||q||j?ne=l(this,B,ae,H,j,q,V):ne||(ne=this.programs[B]=l(this,B,ae)),ne},data:function(B,H){for(;B&&H--;)B=B._parent;return B},mergeIfNeeded:function(B,H){var j=B||H;return B&&H&&B!==H&&(j=O.extend({},H,B)),j},nullContext:u({}),noop:_.VM.noop,compilerInfo:x.compiler};return U.isTop=!0,U._setup=function(B){if(B.partial)z.protoAccessControl=B.protoAccessControl,z.helpers=B.helpers,z.partials=B.partials,z.decorators=B.decorators,z.hooks=B.hooks;else{var H=O.extend({},_.helpers,B.helpers);i(H,z),z.helpers=H,x.usePartial&&(z.partials=z.mergeIfNeeded(B.partials,_.partials)),(x.usePartial||x.useDecorators)&&(z.decorators=O.extend({},_.decorators,B.decorators)),z.hooks={},z.protoAccessControl=M.createProtoAccessControl(B);var j=B.allowCallsToHelperMissing||k;A.moveHelperToHooks(z,"helperMissing",j),A.moveHelperToHooks(z,"blockHelperMissing",j)}},U._child=function(B,H,j,q){if(x.useBlockParams&&!j)throw new N.default("must pass block params");if(x.useDepths&&!q)throw new N.default("must pass parent depths");return l(z,B,x[B],H,0,j,q)},U}function l(x,_,L,U,k,z,B){function H(j){var q=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],V=B;return!B||j==B[0]||j===x.nullContext&&B[0]===null||(V=[j].concat(B)),L(x,j,x.helpers,x.partials,q.data||U,z&&[q.blockParams].concat(z),V)}return H=m(L,H,x,B,U,z),H.program=_,H.depth=B?B.length:0,H.blockParams=k||0,H}function d(x,_,L){return x?x.call||L.name||(L.name=x,x=L.partials[x]):x=L.name==="@partial-block"?L.data["partial-block"]:L.partials[L.name],x}function p(x,_,L){var U=L.data&&L.data["partial-block"];L.partial=!0,L.ids&&(L.data.contextPath=L.ids[0]||L.data.contextPath);var k=void 0;if(L.fn&&L.fn!==r&&function(){L.data=T.createFrame(L.data);var z=L.fn;k=L.data["partial-block"]=function(B){var H=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return H.data=T.createFrame(H.data),H.data["partial-block"]=U,z(B,H)},z.partials&&(L.partials=O.extend({},L.partials,z.partials))}(),x===void 0&&k&&(x=k),x===void 0)throw new N.default("The partial "+L.name+" could not be found");if(x instanceof Function)return x(_,L)}function r(){return""}function c(x,_){return _&&"root"in _||(_=_?T.createFrame(_):{},_.root=x),_}function m(x,_,L,U,k,z){if(x.decorator){var B={};_=x.decorator(_,B,L,U&&U[0],k,z,U),O.extend(_,B)}return _}function i(x,_){f(x).forEach(function(L){var U=x[L];x[L]=h(U,_)})}function h(x,_){var L=_.lookupProperty;return R.wrapHelper(x,function(U){return O.extend({lookupProperty:L},U)})}var u=g(39).default,f=g(13).default,S=g(3).default,v=g(1).default;a.__esModule=!0,a.checkRevision=o,a.template=n,a.wrapProgram=l,a.resolvePartial=d,a.invokePartial=p,a.noop=r;var b=g(5),O=S(b),E=g(6),N=v(E),T=g(4),A=g(10),R=g(43),M=g(33)},function(y,a,g){y.exports={default:g(40),__esModule:!0}},function(y,a,g){g(41),y.exports=g(21).Object.seal},function(y,a,g){var o=g(42);g(18)("seal",function(n){return function(l){return n&&o(l)?n(l):l}})},function(y,a){y.exports=function(g){return typeof g=="object"?g!==null:typeof g=="function"}},function(y,a){"use strict";function g(o,n){if(typeof o!="function")return o;var l=function(){var d=arguments[arguments.length-1];return arguments[arguments.length-1]=n(d),o.apply(this,arguments)};return l}a.__esModule=!0,a.wrapHelper=g},function(y,a){(function(g){"use strict";a.__esModule=!0,a.default=function(o){var n=typeof g!="undefined"?g:window,l=n.Handlebars;o.noConflict=function(){return n.Handlebars===o&&(n.Handlebars=l),o}},y.exports=a.default}).call(a,function(){return this}())},function(y,a){"use strict";a.__esModule=!0;var g={helpers:{helperExpression:function(o){return o.type==="SubExpression"||(o.type==="MustacheStatement"||o.type==="BlockStatement")&&!!(o.params&&o.params.length||o.hash)},scopedId:function(o){return/^\.|this\b/.test(o.original)},simpleId:function(o){return o.parts.length===1&&!g.helpers.scopedId(o)&&!o.depth}}};a.default=g,y.exports=a.default},function(y,a,g){"use strict";function o(S,v){if(S.type==="Program")return S;r.default.yy=f,f.locInfo=function(O){return new f.SourceLocation(v&&v.srcName,O)};var b=r.default.parse(S);return b}function n(S,v){var b=o(S,v),O=new m.default(v);return O.accept(b)}var l=g(1).default,d=g(3).default;a.__esModule=!0,a.parseWithoutProcessing=o,a.parse=n;var p=g(47),r=l(p),c=g(48),m=l(c),i=g(50),h=d(i),u=g(5);a.parser=r.default;var f={};u.extend(f,h)},function(y,a){"use strict";a.__esModule=!0;var g=function(){function o(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(d,p,r,c,m,i,h){var u=i.length-1;switch(m){case 1:return i[u-1];case 2:this.$=c.prepareProgram(i[u]);break;case 3:this.$=i[u];break;case 4:this.$=i[u];break;case 5:this.$=i[u];break;case 6:this.$=i[u];break;case 7:this.$=i[u];break;case 8:this.$=i[u];break;case 9:this.$={type:"CommentStatement",value:c.stripComment(i[u]),strip:c.stripFlags(i[u],i[u]),loc:c.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[u],value:i[u],loc:c.locInfo(this._$)};break;case 11:this.$=c.prepareRawBlock(i[u-2],i[u-1],i[u],this._$);break;case 12:this.$={path:i[u-3],params:i[u-2],hash:i[u-1]};break;case 13:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!1,this._$);break;case 14:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!0,this._$);break;case 15:this.$={open:i[u-5],path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 16:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 17:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 18:this.$={strip:c.stripFlags(i[u-1],i[u-1]),program:i[u]};break;case 19:var f=c.prepareBlock(i[u-2],i[u-1],i[u],i[u],!1,this._$),S=c.prepareProgram([f],i[u-1].loc);S.chained=!0,this.$={strip:i[u-2].strip,program:S,chain:!0};break;case 20:this.$=i[u];break;case 21:this.$={path:i[u-1],strip:c.stripFlags(i[u-2],i[u])};break;case 22:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 23:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[u-3],params:i[u-2],hash:i[u-1],indent:"",strip:c.stripFlags(i[u-4],i[u]),loc:c.locInfo(this._$)};break;case 25:this.$=c.preparePartialBlock(i[u-2],i[u-1],i[u],this._$);break;case 26:this.$={path:i[u-3],params:i[u-2],hash:i[u-1],strip:c.stripFlags(i[u-4],i[u])};break;case 27:this.$=i[u];break;case 28:this.$=i[u];break;case 29:this.$={type:"SubExpression",path:i[u-3],params:i[u-2],hash:i[u-1],loc:c.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[u],loc:c.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:c.id(i[u-2]),value:i[u],loc:c.locInfo(this._$)};break;case 32:this.$=c.id(i[u-1]);break;case 33:this.$=i[u];break;case 34:this.$=i[u];break;case 35:this.$={type:"StringLiteral",value:i[u],original:i[u],loc:c.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[u]),original:Number(i[u]),loc:c.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[u]==="true",original:i[u]==="true",loc:c.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:c.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:c.locInfo(this._$)};break;case 40:this.$=i[u];break;case 41:this.$=i[u];break;case 42:this.$=c.preparePath(!0,i[u],this._$);break;case 43:this.$=c.preparePath(!1,i[u],this._$);break;case 44:i[u-2].push({part:c.id(i[u]),original:i[u],separator:i[u-1]}),this.$=i[u-2];break;case 45:this.$=[{part:c.id(i[u]),original:i[u]}];break;case 46:this.$=[];break;case 47:i[u-1].push(i[u]);break;case 48:this.$=[];break;case 49:i[u-1].push(i[u]);break;case 50:this.$=[];break;case 51:i[u-1].push(i[u]);break;case 58:this.$=[];break;case 59:i[u-1].push(i[u]);break;case 64:this.$=[];break;case 65:i[u-1].push(i[u]);break;case 70:this.$=[];break;case 71:i[u-1].push(i[u]);break;case 78:this.$=[];break;case 79:i[u-1].push(i[u]);break;case 82:this.$=[];break;case 83:i[u-1].push(i[u]);break;case 86:this.$=[];break;case 87:i[u-1].push(i[u]);break;case 90:this.$=[];break;case 91:i[u-1].push(i[u]);break;case 94:this.$=[];break;case 95:i[u-1].push(i[u]);break;case 98:this.$=[i[u]];break;case 99:i[u-1].push(i[u]);break;case 100:this.$=[i[u]];break;case 101:i[u-1].push(i[u])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(d,p){throw new Error(d)},parse:function(d){function p(){var z;return z=r.lexer.lex()||1,typeof z!="number"&&(z=r.symbols_[z]||z),z}var r=this,c=[0],m=[null],i=[],h=this.table,u="",f=0,S=0,v=0;this.lexer.setInput(d),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;i.push(b);var O=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var E,N,T,A,R,M,x,_,L,U={};;){if(T=c[c.length-1],this.defaultActions[T]?A=this.defaultActions[T]:(E!==null&&typeof E!="undefined"||(E=p()),A=h[T]&&h[T][E]),typeof A=="undefined"||!A.length||!A[0]){var k="";if(!v){L=[];for(M in h[T])this.terminals_[M]&&M>2&&L.push("'"+this.terminals_[M]+"'");k=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+L.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(f+1)+": Unexpected "+(E==1?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(k,{text:this.lexer.match,token:this.terminals_[E]||E,line:this.lexer.yylineno,loc:b,expected:L})}}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+T+", token: "+E);switch(A[0]){case 1:c.push(E),m.push(this.lexer.yytext),i.push(this.lexer.yylloc),c.push(A[1]),E=null,N?(E=N,N=null):(S=this.lexer.yyleng,u=this.lexer.yytext,f=this.lexer.yylineno,b=this.lexer.yylloc,v>0&&v--);break;case 2:if(x=this.productions_[A[1]][1],U.$=m[m.length-x],U._$={first_line:i[i.length-(x||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(x||1)].first_column,last_column:i[i.length-1].last_column},O&&(U._$.range=[i[i.length-(x||1)].range[0],i[i.length-1].range[1]]),R=this.performAction.call(U,u,S,f,this.yy,A[1],m,i),typeof R!="undefined")return R;x&&(c=c.slice(0,-1*x*2),m=m.slice(0,-1*x),i=i.slice(0,-1*x)),c.push(this.productions_[A[1]][0]),m.push(U.$),i.push(U._$),_=h[c[c.length-2]][c[c.length-1]],c.push(_);break;case 3:return!0}}return!0}},l=function(){var d={EOF:1,parseError:function(p,r){if(!this.yy.parser)throw new Error(p);this.yy.parser.parseError(p,r)},setInput:function(p){return this._input=p,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var p=this._input[0];this.yytext+=p,this.yyleng++,this.offset++,this.match+=p,this.matched+=p;var r=p.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),p},unput:function(p){var r=p.length,c=p.split(/(?:\r\n?|\n)/g);this._input=p+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(p){this.unput(this.match.slice(p))},pastInput:function(){var p=this.matched.substr(0,this.matched.length-this.match.length);return(p.length>20?"...":"")+p.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var p=this.match;return p.length<20&&(p+=this._input.substr(0,20-p.length)),(p.substr(0,20)+(p.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var p=this.pastInput(),r=new Array(p.length+1).join("-");return p+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var p,r,c,m,i;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),u=0;u<h.length&&(c=this._input.match(this.rules[h[u]]),!c||r&&!(c[0].length>r[0].length)||(r=c,m=u,this.options.flex));u++);return r?(i=r[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],p=this.performAction.call(this,this.yy,this,h[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),p||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var p=this.next();return typeof p!="undefined"?p:this.lex()},begin:function(p){this.conditionStack.push(p)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(p){this.begin(p)}};return d.options={},d.performAction=function(p,r,c,m){function i(h,u){return r.yytext=r.yytext.substring(h,r.yyleng-u+h)}switch(c){case 0:if(r.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(r.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return r.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return r.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d}();return n.lexer=l,o.prototype=n,n.Parser=o,new o}();a.default=g,y.exports=a.default},function(y,a,g){"use strict";function o(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,h,u){h===void 0&&(h=i.length);var f=i[h-1],S=i[h-2];return f?f.type==="ContentStatement"?(S||!u?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:u}function l(i,h,u){h===void 0&&(h=-1);var f=i[h+1],S=i[h+2];return f?f.type==="ContentStatement"?(S||!u?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:u}function d(i,h,u){var f=i[h==null?0:h+1];if(f&&f.type==="ContentStatement"&&(u||!f.rightStripped)){var S=f.value;f.value=f.value.replace(u?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==S}}function p(i,h,u){var f=i[h==null?i.length-1:h-1];if(f&&f.type==="ContentStatement"&&(u||!f.leftStripped)){var S=f.value;return f.value=f.value.replace(u?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==S,f.leftStripped}}var r=g(1).default;a.__esModule=!0;var c=g(49),m=r(c);o.prototype=new m.default,o.prototype.Program=function(i){var h=!this.options.ignoreStandalone,u=!this.isRootSeen;this.isRootSeen=!0;for(var f=i.body,S=0,v=f.length;S<v;S++){var b=f[S],O=this.accept(b);if(O){var E=n(f,S,u),N=l(f,S,u),T=O.openStandalone&&E,A=O.closeStandalone&&N,R=O.inlineStandalone&&E&&N;O.close&&d(f,S,!0),O.open&&p(f,S,!0),h&&R&&(d(f,S),p(f,S)&&b.type==="PartialStatement"&&(b.indent=/([ \t]+$)/.exec(f[S-1].original)[1])),h&&T&&(d((b.program||b.inverse).body),p(f,S)),h&&A&&(d(f,S),p((b.inverse||b.program).body))}}return i},o.prototype.BlockStatement=o.prototype.DecoratorBlock=o.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var h=i.program||i.inverse,u=i.program&&i.inverse,f=u,S=u;if(u&&u.chained)for(f=u.body[0].program;S.chained;)S=S.body[S.body.length-1].program;var v={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:l(h.body),closeStandalone:n((f||h).body)};if(i.openStrip.close&&d(h.body,null,!0),u){var b=i.inverseStrip;b.open&&p(h.body,null,!0),b.close&&d(f.body,null,!0),i.closeStrip.open&&p(S.body,null,!0),!this.options.ignoreStandalone&&n(h.body)&&l(f.body)&&(p(h.body),d(f.body))}else i.closeStrip.open&&p(h.body,null,!0);return v},o.prototype.Decorator=o.prototype.MustacheStatement=function(i){return i.strip},o.prototype.PartialStatement=o.prototype.CommentStatement=function(i){var h=i.strip||{};return{inlineStandalone:!0,open:h.open,close:h.close}},a.default=o,y.exports=a.default},function(y,a,g){"use strict";function o(){this.parents=[]}function n(m){this.acceptRequired(m,"path"),this.acceptArray(m.params),this.acceptKey(m,"hash")}function l(m){n.call(this,m),this.acceptKey(m,"program"),this.acceptKey(m,"inverse")}function d(m){this.acceptRequired(m,"name"),this.acceptArray(m.params),this.acceptKey(m,"hash")}var p=g(1).default;a.__esModule=!0;var r=g(6),c=p(r);o.prototype={constructor:o,mutating:!1,acceptKey:function(m,i){var h=this.accept(m[i]);if(this.mutating){if(h&&!o.prototype[h.type])throw new c.default('Unexpected node type "'+h.type+'" found when accepting '+i+" on "+m.type);m[i]=h}},acceptRequired:function(m,i){if(this.acceptKey(m,i),!m[i])throw new c.default(m.type+" requires "+i)},acceptArray:function(m){for(var i=0,h=m.length;i<h;i++)this.acceptKey(m,i),m[i]||(m.splice(i,1),i--,h--)},accept:function(m){if(m){if(!this[m.type])throw new c.default("Unknown type: "+m.type,m);this.current&&this.parents.unshift(this.current),this.current=m;var i=this[m.type](m);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?m:void 0}},Program:function(m){this.acceptArray(m.body)},MustacheStatement:n,Decorator:n,BlockStatement:l,DecoratorBlock:l,PartialStatement:d,PartialBlockStatement:function(m){d.call(this,m),this.acceptKey(m,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(m){this.acceptArray(m.pairs)},HashPair:function(m){this.acceptRequired(m,"value")}},a.default=o,y.exports=a.default},function(y,a,g){"use strict";function o(b,O){if(O=O.path?O.path.original:O,b.path.original!==O){var E={loc:b.path.loc};throw new v.default(b.path.original+" doesn't match "+O,E)}}function n(b,O){this.source=b,this.start={line:O.first_line,column:O.first_column},this.end={line:O.last_line,column:O.last_column}}function l(b){return/^\[.*\]$/.test(b)?b.substring(1,b.length-1):b}function d(b,O){return{open:b.charAt(2)==="~",close:O.charAt(O.length-3)==="~"}}function p(b){return b.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function r(b,O,E){E=this.locInfo(E);for(var N=b?"@":"",T=[],A=0,R=0,M=O.length;R<M;R++){var x=O[R].part,_=O[R].original!==x;if(N+=(O[R].separator||"")+x,_||x!==".."&&x!=="."&&x!=="this")T.push(x);else{if(T.length>0)throw new v.default("Invalid path: "+N,{loc:E});x===".."&&A++}}return{type:"PathExpression",data:b,depth:A,parts:T,original:N,loc:E}}function c(b,O,E,N,T,A){var R=N.charAt(3)||N.charAt(2),M=R!=="{"&&R!=="&",x=/\*/.test(N);return{type:x?"Decorator":"MustacheStatement",path:b,params:O,hash:E,escaped:M,strip:T,loc:this.locInfo(A)}}function m(b,O,E,N){o(b,E),N=this.locInfo(N);var T={type:"Program",body:O,strip:{},loc:N};return{type:"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:T,openStrip:{},inverseStrip:{},closeStrip:{},loc:N}}function i(b,O,E,N,T,A){N&&N.path&&o(b,N);var R=/\*/.test(b.open);O.blockParams=b.blockParams;var M=void 0,x=void 0;if(E){if(R)throw new v.default("Unexpected inverse block on decorator",E);E.chain&&(E.program.body[0].closeStrip=N.strip),x=E.strip,M=E.program}return T&&(T=M,M=O,O=T),{type:R?"DecoratorBlock":"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:O,inverse:M,openStrip:b.strip,inverseStrip:x,closeStrip:N&&N.strip,loc:this.locInfo(A)}}function h(b,O){if(!O&&b.length){var E=b[0].loc,N=b[b.length-1].loc;E&&N&&(O={source:E.source,start:{line:E.start.line,column:E.start.column},end:{line:N.end.line,column:N.end.column}})}return{type:"Program",body:b,strip:{},loc:O}}function u(b,O,E,N){return o(b,E),{type:"PartialBlockStatement",name:b.path,params:b.params,hash:b.hash,program:O,openStrip:b.strip,closeStrip:E&&E.strip,loc:this.locInfo(N)}}var f=g(1).default;a.__esModule=!0,a.SourceLocation=n,a.id=l,a.stripFlags=d,a.stripComment=p,a.preparePath=r,a.prepareMustache=c,a.prepareRawBlock=m,a.prepareBlock=i,a.prepareProgram=h,a.preparePartialBlock=u;var S=g(6),v=f(S)},function(y,a,g){"use strict";function o(){}function n(v,b,O){if(v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+v);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var E=O.parse(v,b),N=new O.Compiler().compile(E,b);return new O.JavaScriptCompiler().compile(N,b)}function l(v,b,O){function E(){var A=O.parse(v,b),R=new O.Compiler().compile(A,b),M=new O.JavaScriptCompiler().compile(R,b,void 0,!0);return O.template(M)}function N(A,R){return T||(T=E()),T.call(this,A,R)}if(b===void 0&&(b={}),v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+v);b=h.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var T=void 0;return N._setup=function(A){return T||(T=E()),T._setup(A)},N._child=function(A,R,M,x){return T||(T=E()),T._child(A,R,M,x)},N}function d(v,b){if(v===b)return!0;if(h.isArray(v)&&h.isArray(b)&&v.length===b.length){for(var O=0;O<v.length;O++)if(!d(v[O],b[O]))return!1;return!0}}function p(v){if(!v.path.parts){var b=v.path;v.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var r=g(34).default,c=g(1).default;a.__esModule=!0,a.Compiler=o,a.precompile=n,a.compile=l;var m=g(6),i=c(m),h=g(5),u=g(45),f=c(u),S=[].slice;o.prototype={compiler:o,equals:function(v){var b=this.opcodes.length;if(v.opcodes.length!==b)return!1;for(var O=0;O<b;O++){var E=this.opcodes[O],N=v.opcodes[O];if(E.opcode!==N.opcode||!d(E.args,N.args))return!1}b=this.children.length;for(var O=0;O<b;O++)if(!this.children[O].equals(v.children[O]))return!1;return!0},guid:0,compile:function(v,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=h.extend(r(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},b.knownHelpers),this.accept(v)},compileProgram:function(v){var b=new this.compiler,O=b.compile(v,this.options),E=this.guid++;return this.usePartial=this.usePartial||O.usePartial,this.children[E]=O,this.useDepths=this.useDepths||O.useDepths,E},accept:function(v){if(!this[v.type])throw new i.default("Unknown type: "+v.type,v);this.sourceNode.unshift(v);var b=this[v.type](v);return this.sourceNode.shift(),b},Program:function(v){this.options.blockParams.unshift(v.blockParams);for(var b=v.body,O=b.length,E=0;E<O;E++)this.accept(b[E]);return this.options.blockParams.shift(),this.isSimple=O===1,this.blockParams=v.blockParams?v.blockParams.length:0,this},BlockStatement:function(v){p(v);var b=v.program,O=v.inverse;b=b&&this.compileProgram(b),O=O&&this.compileProgram(O);var E=this.classifySexpr(v);E==="helper"?this.helperSexpr(v,b,O):E==="simple"?(this.simpleSexpr(v),this.opcode("pushProgram",b),this.opcode("pushProgram",O),this.opcode("emptyHash"),this.opcode("blockValue",v.path.original)):(this.ambiguousSexpr(v,b,O),this.opcode("pushProgram",b),this.opcode("pushProgram",O),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(v){var b=v.program&&this.compileProgram(v.program),O=this.setupFullMustacheParams(v,b,void 0),E=v.path;this.useDecorators=!0,this.opcode("registerDecorator",O.length,E.original)},PartialStatement:function(v){this.usePartial=!0;var b=v.program;b&&(b=this.compileProgram(v.program));var O=v.params;if(O.length>1)throw new i.default("Unsupported number of partial arguments: "+O.length,v);O.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):O.push({type:"PathExpression",parts:[],depth:0}));var E=v.name.original,N=v.name.type==="SubExpression";N&&this.accept(v.name),this.setupFullMustacheParams(v,b,void 0,!0);var T=v.indent||"";this.options.preventIndent&&T&&(this.opcode("appendContent",T),T=""),this.opcode("invokePartial",N,E,T),this.opcode("append")},PartialBlockStatement:function(v){this.PartialStatement(v)},MustacheStatement:function(v){this.SubExpression(v),v.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(v){this.DecoratorBlock(v)},ContentStatement:function(v){v.value&&this.opcode("appendContent",v.value)},CommentStatement:function(){},SubExpression:function(v){p(v);var b=this.classifySexpr(v);b==="simple"?this.simpleSexpr(v):b==="helper"?this.helperSexpr(v):this.ambiguousSexpr(v)},ambiguousSexpr:function(v,b,O){var E=v.path,N=E.parts[0],T=b!=null||O!=null;this.opcode("getContext",E.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",O),E.strict=!0,this.accept(E),this.opcode("invokeAmbiguous",N,T)},simpleSexpr:function(v){var b=v.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(v,b,O){var E=this.setupFullMustacheParams(v,b,O),N=v.path,T=N.parts[0];if(this.options.knownHelpers[T])this.opcode("invokeKnownHelper",E.length,T);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+T,v);N.strict=!0,N.falsy=!0,this.accept(N),this.opcode("invokeHelper",E.length,N.original,f.default.helpers.simpleId(N))}},PathExpression:function(v){this.addDepth(v.depth),this.opcode("getContext",v.depth);var b=v.parts[0],O=f.default.helpers.scopedId(v),E=!v.depth&&!O&&this.blockParamIndex(b);E?this.opcode("lookupBlockParam",E,v.parts):b?v.data?(this.options.data=!0,this.opcode("lookupData",v.depth,v.parts,v.strict)):this.opcode("lookupOnContext",v.parts,v.falsy,v.strict,O):this.opcode("pushContext")},StringLiteral:function(v){this.opcode("pushString",v.value)},NumberLiteral:function(v){this.opcode("pushLiteral",v.value)},BooleanLiteral:function(v){this.opcode("pushLiteral",v.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(v){var b=v.pairs,O=0,E=b.length;for(this.opcode("pushHash");O<E;O++)this.pushParam(b[O].value);for(;O--;)this.opcode("assignToHash",b[O].key);this.opcode("popHash")},opcode:function(v){this.opcodes.push({opcode:v,args:S.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(v){v&&(this.useDepths=!0)},classifySexpr:function(v){var b=f.default.helpers.simpleId(v.path),O=b&&!!this.blockParamIndex(v.path.parts[0]),E=!O&&f.default.helpers.helperExpression(v),N=!O&&(E||b);if(N&&!E){var T=v.path.parts[0],A=this.options;A.knownHelpers[T]?E=!0:A.knownHelpersOnly&&(N=!1)}return E?"helper":N?"ambiguous":"simple"},pushParams:function(v){for(var b=0,O=v.length;b<O;b++)this.pushParam(v[b])},pushParam:function(v){var b=v.value!=null?v.value:v.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),v.depth&&this.addDepth(v.depth),this.opcode("getContext",v.depth||0),this.opcode("pushStringParam",b,v.type),v.type==="SubExpression"&&this.accept(v);else{if(this.trackIds){var O=void 0;if(!v.parts||f.default.helpers.scopedId(v)||v.depth||(O=this.blockParamIndex(v.parts[0])),O){var E=v.parts.slice(1).join(".");this.opcode("pushId","BlockParam",O,E)}else b=v.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",v.type,b)}this.accept(v)}},setupFullMustacheParams:function(v,b,O,E){var N=v.params;return this.pushParams(N),this.opcode("pushProgram",b),this.opcode("pushProgram",O),v.hash?this.accept(v.hash):this.opcode("emptyHash",E),N},blockParamIndex:function(v){for(var b=0,O=this.options.blockParams.length;b<O;b++){var E=this.options.blockParams[b],N=E&&h.indexOf(E,v);if(E&&N>=0)return[b,N]}}}},function(y,a,g){"use strict";function o(f){this.value=f}function n(){}function l(f,S,v,b){var O=S.popStack(),E=0,N=v.length;for(f&&N--;E<N;E++)O=S.nameLookup(O,v[E],b);return f?[S.aliasable("container.strict"),"(",O,", ",S.quotedString(v[E]),", ",JSON.stringify(S.source.currentLocation)," )"]:O}var d=g(13).default,p=g(1).default;a.__esModule=!0;var r=g(4),c=g(6),m=p(c),i=g(5),h=g(53),u=p(h);n.prototype={nameLookup:function(f,S){return this.internalNameLookup(f,S)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=r.COMPILER_REVISION,S=r.REVISION_CHANGES[f];return[f,S]},appendToBuffer:function(f,S,v){return i.isArray(f)||(f=[f]),f=this.source.wrap(f,S),this.environment.isSimple?["return ",f,";"]:v?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,S){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(S),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,S,v,b){this.environment=f,this.options=S,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!b,this.name=this.environment.name,this.isChild=!!v,this.context=v||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,S),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var O=f.opcodes,E=void 0,N=void 0,T=void 0,A=void 0;for(T=0,A=O.length;T<A;T++)E=O[T],this.source.currentLocation=E.loc,N=N||E.loc,this[E.opcode].apply(this,E.args);if(this.source.currentLocation=N,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new m.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),b?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var R=this.createFunctionContext(b);if(this.isChild)return R;var M={compiler:this.compilerInfo(),main:R};this.decorators&&(M.main_d=this.decorators,M.useDecorators=!0);var x=this.context,_=x.programs,L=x.decorators;for(T=0,A=_.length;T<A;T++)_[T]&&(M[T]=_[T],L[T]&&(M[T+"_d"]=L[T],M.useDecorators=!0));return this.environment.usePartial&&(M.usePartial=!0),this.options.data&&(M.useData=!0),this.useDepths&&(M.useDepths=!0),this.useBlockParams&&(M.useBlockParams=!0),this.options.compat&&(M.compat=!0),b?M.compilerOptions=this.options:(M.compiler=JSON.stringify(M.compiler),this.source.currentLocation={start:{line:1,column:0}},M=this.objectLiteral(M),S.srcName?(M=M.toStringWithSourceMap({file:S.destName}),M.map=M.map&&M.map.toString()):M=M.toString()),M},preamble:function(){this.lastContext=0,this.source=new u.default(this.options.srcName),this.decorators=new u.default(this.options.srcName)},createFunctionContext:function(f){var S=this,v="",b=this.stackVars.concat(this.registers.list);b.length>0&&(v+=", "+b.join(", "));var O=0;d(this.aliases).forEach(function(T){var A=S.aliases[T];A.children&&A.referenceCount>1&&(v+=", alias"+ ++O+"="+T,A.children[0]="alias"+O)}),this.lookupPropertyFunctionIsUsed&&(v+=", "+this.lookupPropertyFunctionVarDeclaration());var E=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&E.push("blockParams"),this.useDepths&&E.push("depths");var N=this.mergeSource(v);return f?(E.push(N),Function.apply(this,E)):this.source.wrap(["function(",E.join(","),`) {
  `,N,"}"])},mergeSource:function(f){var S=this.environment.isSimple,v=!this.forceBuffer,b=void 0,O=void 0,E=void 0,N=void 0;return this.source.each(function(T){T.appendToBuffer?(E?T.prepend("  + "):E=T,N=T):(E&&(O?E.prepend("buffer += "):b=!0,N.add(";"),E=N=void 0),O=!0,S||(v=!1))}),v?E?(E.prepend("return "),N.add(";")):O||this.source.push('return "";'):(f+=", buffer = "+(b?"":this.initializeBuffer()),E?(E.prepend("return buffer + "),N.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(b?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var S=this.aliasable("container.hooks.blockHelperMissing"),v=[this.contextName(0)];this.setupHelperArgs(f,0,v);var b=this.popStack();v.splice(1,0,b),this.push(this.source.functionCall(S,"call",v))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),S=[this.contextName(0)];this.setupHelperArgs("",0,S,!0),this.flushInline();var v=this.topStack();S.splice(1,0,v),this.pushSource(["if (!",this.lastHelper,") { ",v," = ",this.source.functionCall(f,"call",S),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(S){return[" != null ? ",S,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,S,v,b){var O=0;b||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[O++])),this.resolvePath("context",f,O,S,v)},lookupBlockParam:function(f,S){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",S,1)},lookupData:function(f,S,v){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",S,0,!0,v)},resolvePath:function(f,S,v,b,O){var E=this;if(this.options.strict||this.options.assumeObjects)return void this.push(l(this.options.strict&&O,this,S,f));for(var N=S.length;v<N;v++)this.replaceStack(function(T){var A=E.nameLookup(T,S[v],f);return b?[" && ",A]:[" != null ? ",A," : ",T]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,S){this.pushContext(),this.pushString(S),S!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,S){var v=this.nameLookup("decorators",S,"decorator"),b=this.setupHelperArgs(S,f);this.decorators.push(["fn = ",this.decorators.functionCall(v,"",["fn","props","container",b])," || fn;"])},invokeHelper:function(f,S,v){var b=this.popStack(),O=this.setupHelper(f,S),E=[];v&&E.push(O.name),E.push(b),this.options.strict||E.push(this.aliasable("container.hooks.helperMissing"));var N=["(",this.itemsSeparatedBy(E,"||"),")"],T=this.source.functionCall(N,"call",O.callParams);this.push(T)},itemsSeparatedBy:function(f,S){var v=[];v.push(f[0]);for(var b=1;b<f.length;b++)v.push(S,f[b]);return v},invokeKnownHelper:function(f,S){var v=this.setupHelper(f,S);this.push(this.source.functionCall(v.name,"call",v.callParams))},invokeAmbiguous:function(f,S){this.useRegister("helper");var v=this.popStack();this.emptyHash();var b=this.setupHelper(0,f,S),O=this.lastHelper=this.nameLookup("helpers",f,"helper"),E=["(","(helper = ",O," || ",v,")"];this.options.strict||(E[0]="(helper = ",E.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",E,b.paramsInit?["),(",b.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",b.callParams)," : helper))"])},invokePartial:function(f,S,v){var b=[],O=this.setupParams(S,1,b);f&&(S=this.popStack(),delete O.name),v&&(O.indent=JSON.stringify(v)),O.helpers="helpers",O.partials="partials",O.decorators="container.decorators",f?b.unshift(S):b.unshift(this.nameLookup("partials",S,"partial")),this.options.compat&&(O.depths="depths"),O=this.objectLiteral(O),b.push(O),this.push(this.source.functionCall("container.invokePartial","",b))},assignToHash:function(f){var S=this.popStack(),v=void 0,b=void 0,O=void 0;this.trackIds&&(O=this.popStack()),this.stringParams&&(b=this.popStack(),v=this.popStack());var E=this.hash;v&&(E.contexts[f]=v),b&&(E.types[f]=b),O&&(E.ids[f]=O),E.values[f]=S},pushId:function(f,S,v){f==="BlockParam"?this.pushStackLiteral("blockParams["+S[0]+"].path["+S[1]+"]"+(v?" + "+JSON.stringify("."+v):"")):f==="PathExpression"?this.pushString(S):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(f,S){for(var v=f.children,b=void 0,O=void 0,E=0,N=v.length;E<N;E++){b=v[E],O=new this.compiler;var T=this.matchExistingProgram(b);if(T==null){this.context.programs.push("");var A=this.context.programs.length;b.index=A,b.name="program"+A,this.context.programs[A]=O.compile(b,S,this.context,!this.precompile),this.context.decorators[A]=O.decorators,this.context.environments[A]=b,this.useDepths=this.useDepths||O.useDepths,this.useBlockParams=this.useBlockParams||O.useBlockParams,b.useDepths=this.useDepths,b.useBlockParams=this.useBlockParams}else b.index=T.index,b.name="program"+T.index,this.useDepths=this.useDepths||T.useDepths,this.useBlockParams=this.useBlockParams||T.useBlockParams}},matchExistingProgram:function(f){for(var S=0,v=this.context.environments.length;S<v;S++){var b=this.context.environments[S];if(b&&b.equals(f))return b}},programExpression:function(f){var S=this.environment.children[f],v=[S.index,"data",S.blockParams];return(this.useBlockParams||this.useDepths)&&v.push("blockParams"),this.useDepths&&v.push("depths"),"container.program("+v.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof o||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new o(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var S=["("],v=void 0,b=void 0,O=void 0;if(!this.isInline())throw new m.default("replaceStack on non-inline");var E=this.popStack(!0);if(E instanceof o)v=[E.value],S=["(",v],O=!0;else{b=!0;var N=this.incrStack();S=["((",this.push(N)," = ",E,")"],v=this.topStack()}var T=f.call(this,v);O||this.popStack(),b&&this.stackSlot--,this.push(S.concat(T,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var S=0,v=f.length;S<v;S++){var b=f[S];if(b instanceof o)this.compileStack.push(b);else{var O=this.incrStack();this.pushSource([O," = ",b,";"]),this.compileStack.push(O)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var S=this.isInline(),v=(S?this.inlineStack:this.compileStack).pop();if(!f&&v instanceof o)return v.value;if(!S){if(!this.stackSlot)throw new m.default("Invalid stack pop");this.stackSlot--}return v},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,S=f[f.length-1];return S instanceof o?S.value:S},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var S=this.aliases[f];return S?(S.referenceCount++,S):(S=this.aliases[f]=this.source.wrap(f),S.aliasable=!0,S.referenceCount=1,S)},setupHelper:function(f,S,v){var b=[],O=this.setupHelperArgs(S,f,b,v),E=this.nameLookup("helpers",S,"helper"),N=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:b,paramsInit:O,name:E,callParams:[N].concat(b)}},setupParams:function(f,S,v){var b={},O=[],E=[],N=[],T=!v,A=void 0;T&&(v=[]),b.name=this.quotedString(f),b.hash=this.popStack(),this.trackIds&&(b.hashIds=this.popStack()),this.stringParams&&(b.hashTypes=this.popStack(),b.hashContexts=this.popStack());var R=this.popStack(),M=this.popStack();(M||R)&&(b.fn=M||"container.noop",b.inverse=R||"container.noop");for(var x=S;x--;)A=this.popStack(),v[x]=A,this.trackIds&&(N[x]=this.popStack()),this.stringParams&&(E[x]=this.popStack(),O[x]=this.popStack());return T&&(b.args=this.source.generateArray(v)),this.trackIds&&(b.ids=this.source.generateArray(N)),this.stringParams&&(b.types=this.source.generateArray(E),b.contexts=this.source.generateArray(O)),this.options.data&&(b.data="data"),this.useBlockParams&&(b.blockParams="blockParams"),b},setupHelperArgs:function(f,S,v,b){var O=this.setupParams(f,S,v);return O.loc=JSON.stringify(this.source.currentLocation),O=this.objectLiteral(O),b?(this.useRegister("options"),v.push("options"),["options=",O]):v?(v.push(O),""):O}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),S=n.RESERVED_WORDS={},v=0,b=f.length;v<b;v++)S[f[v]]=!0}(),n.isValidJavaScriptVariableName=function(f){return!n.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},a.default=n,y.exports=a.default},function(y,a,g){"use strict";function o(r,c,m){if(d.isArray(r)){for(var i=[],h=0,u=r.length;h<u;h++)i.push(c.wrap(r[h],m));return i}return typeof r=="boolean"||typeof r=="number"?r+"":r}function n(r){this.srcFile=r,this.source=[]}var l=g(13).default;a.__esModule=!0;var d=g(5),p=void 0;try{}catch(r){}p||(p=function(r,c,m,i){this.src="",i&&this.add(i)},p.prototype={add:function(r){d.isArray(r)&&(r=r.join("")),this.src+=r},prepend:function(r){d.isArray(r)&&(r=r.join("")),this.src=r+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(r,c){this.source.unshift(this.wrap(r,c))},push:function(r,c){this.source.push(this.wrap(r,c))},merge:function(){var r=this.empty();return this.each(function(c){r.add(["  ",c,`
`])}),r},each:function(r){for(var c=0,m=this.source.length;c<m;c++)r(this.source[c])},empty:function(){var r=this.currentLocation||{start:{}};return new p(r.start.line,r.start.column,this.srcFile)},wrap:function(r){var c=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return r instanceof p?r:(r=o(r,this,c),new p(c.start.line,c.start.column,this.srcFile,r))},functionCall:function(r,c,m){return m=this.generateList(m),this.wrap([r,c?"."+c+"(":"(",m,")"])},quotedString:function(r){return'"'+(r+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(r){var c=this,m=[];l(r).forEach(function(h){var u=o(r[h],c);u!=="undefined"&&m.push([c.quotedString(h),":",u])});var i=this.generateList(m);return i.prepend("{"),i.add("}"),i},generateList:function(r){for(var c=this.empty(),m=0,i=r.length;m<i;m++)m&&c.add(","),c.add(o(r[m],this));return c},generateArray:function(r){var c=this.generateList(r);return c.prepend("["),c.add("]"),c}},a.default=n,y.exports=a.default}])})},4779:(P,y,a)=>{var g;/*!
* Sizzle CSS Selector Engine v2.3.6
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2021-02-16
*/(function(o){var n,l,d,p,r,c,m,i,h,u,f,S,v,b,O,E,N,T,A,R="sizzle"+1*new Date,M=o.document,x=0,_=0,L=$e(),U=$e(),k=$e(),z=$e(),B=function(F,$){return F===$&&(f=!0),0},H={}.hasOwnProperty,j=[],q=j.pop,V=j.push,ne=j.push,ae=j.slice,de=function(F,$){for(var Z=0,Y=F.length;Z<Y;Z++)if(F[Z]===$)return Z;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ge="[\\x20\\t\\r\\n\\f]",Ce="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Fe="\\["+ge+"*("+Ce+")(?:"+ge+"*([*^$|!~]?=)"+ge+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ce+"))|)"+ge+"*\\]",it=":("+Ce+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Fe+")*)|.*)\\)|)",mt=new RegExp(ge+"+","g"),ut=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g"),ht=new RegExp("^"+ge+"*,"+ge+"*"),At=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),Re=new RegExp(ge+"|>"),Ct=new RegExp(it),Ue=new RegExp("^"+Ce+"$"),We={ID:new RegExp("^#("+Ce+")"),CLASS:new RegExp("^\\.("+Ce+")"),TAG:new RegExp("^("+Ce+"|[*])"),ATTR:new RegExp("^"+Fe),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},Bt=/HTML$/i,ke=/^(?:input|select|textarea|button)$/i,le=/^h\d$/i,Ne=/^[^{]+\{\s*\[native \w/,De=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ie=/[+~]/,ve=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),he=function(F,$){var Z="0x"+F.slice(1)-65536;return $||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ze=function(F,$){return $?F==="\0"?"\uFFFD":F.slice(0,-1)+"\\"+F.charCodeAt(F.length-1).toString(16)+" ":"\\"+F},Ke=function(){S()},Je=vt(function(F){return F.disabled===!0&&F.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ne.apply(j=ae.call(M.childNodes),M.childNodes),j[M.childNodes.length].nodeType}catch(F){ne={apply:j.length?function($,Z){V.apply($,ae.call(Z))}:function($,Z){for(var Y=$.length,W=0;$[Y++]=Z[W++];);$.length=Y-1}}}function Oe(F,$,Z,Y){var W,X,ee,se,ue,me,Ee,Te=$&&$.ownerDocument,Le=$?$.nodeType:9;if(Z=Z||[],typeof F!="string"||!F||Le!==1&&Le!==9&&Le!==11)return Z;if(!Y&&(S($),$=$||v,O)){if(Le!==11&&(ue=De.exec(F)))if(W=ue[1]){if(Le===9)if(ee=$.getElementById(W)){if(ee.id===W)return Z.push(ee),Z}else return Z;else if(Te&&(ee=Te.getElementById(W))&&A($,ee)&&ee.id===W)return Z.push(ee),Z}else{if(ue[2])return ne.apply(Z,$.getElementsByTagName(F)),Z;if((W=ue[3])&&l.getElementsByClassName&&$.getElementsByClassName)return ne.apply(Z,$.getElementsByClassName(W)),Z}if(l.qsa&&!z[F+" "]&&(!E||!E.test(F))&&(Le!==1||$.nodeName.toLowerCase()!=="object")){if(Ee=F,Te=$,Le===1&&(Re.test(F)||At.test(F))){for(Te=ie.test(F)&&gn($.parentNode)||$,(Te!==$||!l.scope)&&((se=$.getAttribute("id"))?se=se.replace(be,Ze):$.setAttribute("id",se=R)),me=c(F),X=me.length;X--;)me[X]=(se?"#"+se:":scope")+" "+mn(me[X]);Ee=me.join(",")}try{return ne.apply(Z,Te.querySelectorAll(Ee)),Z}catch(Ve){z(F,!0)}finally{se===R&&$.removeAttribute("id")}}}return i(F.replace(ut,"$1"),$,Z,Y)}function $e(){var F=[];function $(Z,Y){return F.push(Z+" ")>d.cacheLength&&delete $[F.shift()],$[Z+" "]=Y}return $}function Qe(F){return F[R]=!0,F}function Xe(F){var $=v.createElement("fieldset");try{return!!F($)}catch(Z){return!1}finally{$.parentNode&&$.parentNode.removeChild($),$=null}}function zt(F,$){for(var Z=F.split("|"),Y=Z.length;Y--;)d.attrHandle[Z[Y]]=$}function It(F,$){var Z=$&&F,Y=Z&&F.nodeType===1&&$.nodeType===1&&F.sourceIndex-$.sourceIndex;if(Y)return Y;if(Z){for(;Z=Z.nextSibling;)if(Z===$)return-1}return F?1:-1}function Nt(F){return function($){var Z=$.nodeName.toLowerCase();return Z==="input"&&$.type===F}}function Tn(F){return function($){var Z=$.nodeName.toLowerCase();return(Z==="input"||Z==="button")&&$.type===F}}function rn(F){return function($){return"form"in $?$.parentNode&&$.disabled===!1?"label"in $?"label"in $.parentNode?$.parentNode.disabled===F:$.disabled===F:$.isDisabled===F||$.isDisabled!==!F&&Je($)===F:$.disabled===F:"label"in $?$.disabled===F:!1}}function Wt(F){return Qe(function($){return $=+$,Qe(function(Z,Y){for(var W,X=F([],Z.length,$),ee=X.length;ee--;)Z[W=X[ee]]&&(Z[W]=!(Y[W]=Z[W]))})})}function gn(F){return F&&typeof F.getElementsByTagName!="undefined"&&F}l=Oe.support={},r=Oe.isXML=function(F){var $=F&&F.namespaceURI,Z=F&&(F.ownerDocument||F).documentElement;return!Bt.test($||Z&&Z.nodeName||"HTML")},S=Oe.setDocument=function(F){var $,Z,Y=F?F.ownerDocument||F:M;return Y==v||Y.nodeType!==9||!Y.documentElement||(v=Y,b=v.documentElement,O=!r(v),M!=v&&(Z=v.defaultView)&&Z.top!==Z&&(Z.addEventListener?Z.addEventListener("unload",Ke,!1):Z.attachEvent&&Z.attachEvent("onunload",Ke)),l.scope=Xe(function(W){return b.appendChild(W).appendChild(v.createElement("div")),typeof W.querySelectorAll!="undefined"&&!W.querySelectorAll(":scope fieldset div").length}),l.attributes=Xe(function(W){return W.className="i",!W.getAttribute("className")}),l.getElementsByTagName=Xe(function(W){return W.appendChild(v.createComment("")),!W.getElementsByTagName("*").length}),l.getElementsByClassName=Ne.test(v.getElementsByClassName),l.getById=Xe(function(W){return b.appendChild(W).id=R,!v.getElementsByName||!v.getElementsByName(R).length}),l.getById?(d.filter.ID=function(W){var X=W.replace(ve,he);return function(ee){return ee.getAttribute("id")===X}},d.find.ID=function(W,X){if(typeof X.getElementById!="undefined"&&O){var ee=X.getElementById(W);return ee?[ee]:[]}}):(d.filter.ID=function(W){var X=W.replace(ve,he);return function(ee){var se=typeof ee.getAttributeNode!="undefined"&&ee.getAttributeNode("id");return se&&se.value===X}},d.find.ID=function(W,X){if(typeof X.getElementById!="undefined"&&O){var ee,se,ue,me=X.getElementById(W);if(me){if(ee=me.getAttributeNode("id"),ee&&ee.value===W)return[me];for(ue=X.getElementsByName(W),se=0;me=ue[se++];)if(ee=me.getAttributeNode("id"),ee&&ee.value===W)return[me]}return[]}}),d.find.TAG=l.getElementsByTagName?function(W,X){if(typeof X.getElementsByTagName!="undefined")return X.getElementsByTagName(W);if(l.qsa)return X.querySelectorAll(W)}:function(W,X){var ee,se=[],ue=0,me=X.getElementsByTagName(W);if(W==="*"){for(;ee=me[ue++];)ee.nodeType===1&&se.push(ee);return se}return me},d.find.CLASS=l.getElementsByClassName&&function(W,X){if(typeof X.getElementsByClassName!="undefined"&&O)return X.getElementsByClassName(W)},N=[],E=[],(l.qsa=Ne.test(v.querySelectorAll))&&(Xe(function(W){var X;b.appendChild(W).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",W.querySelectorAll("[msallowcapture^='']").length&&E.push("[*^$]="+ge+`*(?:''|"")`),W.querySelectorAll("[selected]").length||E.push("\\["+ge+"*(?:value|"+te+")"),W.querySelectorAll("[id~="+R+"-]").length||E.push("~="),X=v.createElement("input"),X.setAttribute("name",""),W.appendChild(X),W.querySelectorAll("[name='']").length||E.push("\\["+ge+"*name"+ge+"*="+ge+`*(?:''|"")`),W.querySelectorAll(":checked").length||E.push(":checked"),W.querySelectorAll("a#"+R+"+*").length||E.push(".#.+[+~]"),W.querySelectorAll("\\\f"),E.push("[\\r\\n\\f]")}),Xe(function(W){W.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var X=v.createElement("input");X.setAttribute("type","hidden"),W.appendChild(X).setAttribute("name","D"),W.querySelectorAll("[name=d]").length&&E.push("name"+ge+"*[*^$|!~]?="),W.querySelectorAll(":enabled").length!==2&&E.push(":enabled",":disabled"),b.appendChild(W).disabled=!0,W.querySelectorAll(":disabled").length!==2&&E.push(":enabled",":disabled"),W.querySelectorAll("*,:x"),E.push(",.*:")})),(l.matchesSelector=Ne.test(T=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector||b.msMatchesSelector))&&Xe(function(W){l.disconnectedMatch=T.call(W,"*"),T.call(W,"[s!='']:x"),N.push("!=",it)}),E=E.length&&new RegExp(E.join("|")),N=N.length&&new RegExp(N.join("|")),$=Ne.test(b.compareDocumentPosition),A=$||Ne.test(b.contains)?function(W,X){var ee=W.nodeType===9?W.documentElement:W,se=X&&X.parentNode;return W===se||!!(se&&se.nodeType===1&&(ee.contains?ee.contains(se):W.compareDocumentPosition&&W.compareDocumentPosition(se)&16))}:function(W,X){if(X){for(;X=X.parentNode;)if(X===W)return!0}return!1},B=$?function(W,X){if(W===X)return f=!0,0;var ee=!W.compareDocumentPosition-!X.compareDocumentPosition;return ee||(ee=(W.ownerDocument||W)==(X.ownerDocument||X)?W.compareDocumentPosition(X):1,ee&1||!l.sortDetached&&X.compareDocumentPosition(W)===ee?W==v||W.ownerDocument==M&&A(M,W)?-1:X==v||X.ownerDocument==M&&A(M,X)?1:u?de(u,W)-de(u,X):0:ee&4?-1:1)}:function(W,X){if(W===X)return f=!0,0;var ee,se=0,ue=W.parentNode,me=X.parentNode,Ee=[W],Te=[X];if(!ue||!me)return W==v?-1:X==v?1:ue?-1:me?1:u?de(u,W)-de(u,X):0;if(ue===me)return It(W,X);for(ee=W;ee=ee.parentNode;)Ee.unshift(ee);for(ee=X;ee=ee.parentNode;)Te.unshift(ee);for(;Ee[se]===Te[se];)se++;return se?It(Ee[se],Te[se]):Ee[se]==M?-1:Te[se]==M?1:0}),v},Oe.matches=function(F,$){return Oe(F,null,null,$)},Oe.matchesSelector=function(F,$){if(S(F),l.matchesSelector&&O&&!z[$+" "]&&(!N||!N.test($))&&(!E||!E.test($)))try{var Z=T.call(F,$);if(Z||l.disconnectedMatch||F.document&&F.document.nodeType!==11)return Z}catch(Y){z($,!0)}return Oe($,v,null,[F]).length>0},Oe.contains=function(F,$){return(F.ownerDocument||F)!=v&&S(F),A(F,$)},Oe.attr=function(F,$){(F.ownerDocument||F)!=v&&S(F);var Z=d.attrHandle[$.toLowerCase()],Y=Z&&H.call(d.attrHandle,$.toLowerCase())?Z(F,$,!O):void 0;return Y!==void 0?Y:l.attributes||!O?F.getAttribute($):(Y=F.getAttributeNode($))&&Y.specified?Y.value:null},Oe.escape=function(F){return(F+"").replace(be,Ze)},Oe.error=function(F){throw new Error("Syntax error, unrecognized expression: "+F)},Oe.uniqueSort=function(F){var $,Z=[],Y=0,W=0;if(f=!l.detectDuplicates,u=!l.sortStable&&F.slice(0),F.sort(B),f){for(;$=F[W++];)$===F[W]&&(Y=Z.push(W));for(;Y--;)F.splice(Z[Y],1)}return u=null,F},p=Oe.getText=function(F){var $,Z="",Y=0,W=F.nodeType;if(W){if(W===1||W===9||W===11){if(typeof F.textContent=="string")return F.textContent;for(F=F.firstChild;F;F=F.nextSibling)Z+=p(F)}else if(W===3||W===4)return F.nodeValue}else for(;$=F[Y++];)Z+=p($);return Z},d=Oe.selectors={cacheLength:50,createPseudo:Qe,match:We,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(F){return F[1]=F[1].replace(ve,he),F[3]=(F[3]||F[4]||F[5]||"").replace(ve,he),F[2]==="~="&&(F[3]=" "+F[3]+" "),F.slice(0,4)},CHILD:function(F){return F[1]=F[1].toLowerCase(),F[1].slice(0,3)==="nth"?(F[3]||Oe.error(F[0]),F[4]=+(F[4]?F[5]+(F[6]||1):2*(F[3]==="even"||F[3]==="odd")),F[5]=+(F[7]+F[8]||F[3]==="odd")):F[3]&&Oe.error(F[0]),F},PSEUDO:function(F){var $,Z=!F[6]&&F[2];return We.CHILD.test(F[0])?null:(F[3]?F[2]=F[4]||F[5]||"":Z&&Ct.test(Z)&&($=c(Z,!0))&&($=Z.indexOf(")",Z.length-$)-Z.length)&&(F[0]=F[0].slice(0,$),F[2]=Z.slice(0,$)),F.slice(0,3))}},filter:{TAG:function(F){var $=F.replace(ve,he).toLowerCase();return F==="*"?function(){return!0}:function(Z){return Z.nodeName&&Z.nodeName.toLowerCase()===$}},CLASS:function(F){var $=L[F+" "];return $||($=new RegExp("(^|"+ge+")"+F+"("+ge+"|$)"))&&L(F,function(Z){return $.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute!="undefined"&&Z.getAttribute("class")||"")})},ATTR:function(F,$,Z){return function(Y){var W=Oe.attr(Y,F);return W==null?$==="!=":$?(W+="",$==="="?W===Z:$==="!="?W!==Z:$==="^="?Z&&W.indexOf(Z)===0:$==="*="?Z&&W.indexOf(Z)>-1:$==="$="?Z&&W.slice(-Z.length)===Z:$==="~="?(" "+W.replace(mt," ")+" ").indexOf(Z)>-1:$==="|="?W===Z||W.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(F,$,Z,Y,W){var X=F.slice(0,3)!=="nth",ee=F.slice(-4)!=="last",se=$==="of-type";return Y===1&&W===0?function(ue){return!!ue.parentNode}:function(ue,me,Ee){var Te,Le,Ve,ye,Ie,yt,Dt=X!==ee?"nextSibling":"previousSibling",rt=ue.parentNode,Yt=se&&ue.nodeName.toLowerCase(),Un=!Ee&&!se,Et=!1;if(rt){if(X){for(;Dt;){for(ye=ue;ye=ye[Dt];)if(se?ye.nodeName.toLowerCase()===Yt:ye.nodeType===1)return!1;yt=Dt=F==="only"&&!yt&&"nextSibling"}return!0}if(yt=[ee?rt.firstChild:rt.lastChild],ee&&Un){for(ye=rt,Ve=ye[R]||(ye[R]={}),Le=Ve[ye.uniqueID]||(Ve[ye.uniqueID]={}),Te=Le[F]||[],Ie=Te[0]===x&&Te[1],Et=Ie&&Te[2],ye=Ie&&rt.childNodes[Ie];ye=++Ie&&ye&&ye[Dt]||(Et=Ie=0)||yt.pop();)if(ye.nodeType===1&&++Et&&ye===ue){Le[F]=[x,Ie,Et];break}}else if(Un&&(ye=ue,Ve=ye[R]||(ye[R]={}),Le=Ve[ye.uniqueID]||(Ve[ye.uniqueID]={}),Te=Le[F]||[],Ie=Te[0]===x&&Te[1],Et=Ie),Et===!1)for(;(ye=++Ie&&ye&&ye[Dt]||(Et=Ie=0)||yt.pop())&&!((se?ye.nodeName.toLowerCase()===Yt:ye.nodeType===1)&&++Et&&(Un&&(Ve=ye[R]||(ye[R]={}),Le=Ve[ye.uniqueID]||(Ve[ye.uniqueID]={}),Le[F]=[x,Et]),ye===ue)););return Et-=W,Et===Y||Et%Y===0&&Et/Y>=0}}},PSEUDO:function(F,$){var Z,Y=d.pseudos[F]||d.setFilters[F.toLowerCase()]||Oe.error("unsupported pseudo: "+F);return Y[R]?Y($):Y.length>1?(Z=[F,F,"",$],d.setFilters.hasOwnProperty(F.toLowerCase())?Qe(function(W,X){for(var ee,se=Y(W,$),ue=se.length;ue--;)ee=de(W,se[ue]),W[ee]=!(X[ee]=se[ue])}):function(W){return Y(W,0,Z)}):Y}},pseudos:{not:Qe(function(F){var $=[],Z=[],Y=m(F.replace(ut,"$1"));return Y[R]?Qe(function(W,X,ee,se){for(var ue,me=Y(W,null,se,[]),Ee=W.length;Ee--;)(ue=me[Ee])&&(W[Ee]=!(X[Ee]=ue))}):function(W,X,ee){return $[0]=W,Y($,null,ee,Z),$[0]=null,!Z.pop()}}),has:Qe(function(F){return function($){return Oe(F,$).length>0}}),contains:Qe(function(F){return F=F.replace(ve,he),function($){return($.textContent||p($)).indexOf(F)>-1}}),lang:Qe(function(F){return Ue.test(F||"")||Oe.error("unsupported lang: "+F),F=F.replace(ve,he).toLowerCase(),function($){var Z;do if(Z=O?$.lang:$.getAttribute("xml:lang")||$.getAttribute("lang"))return Z=Z.toLowerCase(),Z===F||Z.indexOf(F+"-")===0;while(($=$.parentNode)&&$.nodeType===1);return!1}}),target:function(F){var $=o.location&&o.location.hash;return $&&$.slice(1)===F.id},root:function(F){return F===b},focus:function(F){return F===v.activeElement&&(!v.hasFocus||v.hasFocus())&&!!(F.type||F.href||~F.tabIndex)},enabled:rn(!1),disabled:rn(!0),checked:function(F){var $=F.nodeName.toLowerCase();return $==="input"&&!!F.checked||$==="option"&&!!F.selected},selected:function(F){return F.parentNode&&F.parentNode.selectedIndex,F.selected===!0},empty:function(F){for(F=F.firstChild;F;F=F.nextSibling)if(F.nodeType<6)return!1;return!0},parent:function(F){return!d.pseudos.empty(F)},header:function(F){return le.test(F.nodeName)},input:function(F){return ke.test(F.nodeName)},button:function(F){var $=F.nodeName.toLowerCase();return $==="input"&&F.type==="button"||$==="button"},text:function(F){var $;return F.nodeName.toLowerCase()==="input"&&F.type==="text"&&(($=F.getAttribute("type"))==null||$.toLowerCase()==="text")},first:Wt(function(){return[0]}),last:Wt(function(F,$){return[$-1]}),eq:Wt(function(F,$,Z){return[Z<0?Z+$:Z]}),even:Wt(function(F,$){for(var Z=0;Z<$;Z+=2)F.push(Z);return F}),odd:Wt(function(F,$){for(var Z=1;Z<$;Z+=2)F.push(Z);return F}),lt:Wt(function(F,$,Z){for(var Y=Z<0?Z+$:Z>$?$:Z;--Y>=0;)F.push(Y);return F}),gt:Wt(function(F,$,Z){for(var Y=Z<0?Z+$:Z;++Y<$;)F.push(Y);return F})}},d.pseudos.nth=d.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[n]=Nt(n);for(n in{submit:!0,reset:!0})d.pseudos[n]=Tn(n);function Ft(){}Ft.prototype=d.filters=d.pseudos,d.setFilters=new Ft,c=Oe.tokenize=function(F,$){var Z,Y,W,X,ee,se,ue,me=U[F+" "];if(me)return $?0:me.slice(0);for(ee=F,se=[],ue=d.preFilter;ee;){(!Z||(Y=ht.exec(ee)))&&(Y&&(ee=ee.slice(Y[0].length)||ee),se.push(W=[])),Z=!1,(Y=At.exec(ee))&&(Z=Y.shift(),W.push({value:Z,type:Y[0].replace(ut," ")}),ee=ee.slice(Z.length));for(X in d.filter)(Y=We[X].exec(ee))&&(!ue[X]||(Y=ue[X](Y)))&&(Z=Y.shift(),W.push({value:Z,type:X,matches:Y}),ee=ee.slice(Z.length));if(!Z)break}return $?ee.length:ee?Oe.error(F):U(F,se).slice(0)};function mn(F){for(var $=0,Z=F.length,Y="";$<Z;$++)Y+=F[$].value;return Y}function vt(F,$,Z){var Y=$.dir,W=$.next,X=W||Y,ee=Z&&X==="parentNode",se=_++;return $.first?function(ue,me,Ee){for(;ue=ue[Y];)if(ue.nodeType===1||ee)return F(ue,me,Ee);return!1}:function(ue,me,Ee){var Te,Le,Ve,ye=[x,se];if(Ee){for(;ue=ue[Y];)if((ue.nodeType===1||ee)&&F(ue,me,Ee))return!0}else for(;ue=ue[Y];)if(ue.nodeType===1||ee)if(Ve=ue[R]||(ue[R]={}),Le=Ve[ue.uniqueID]||(Ve[ue.uniqueID]={}),W&&W===ue.nodeName.toLowerCase())ue=ue[Y]||ue;else{if((Te=Le[X])&&Te[0]===x&&Te[1]===se)return ye[2]=Te[2];if(Le[X]=ye,ye[2]=F(ue,me,Ee))return!0}return!1}}function An(F){return F.length>1?function($,Z,Y){for(var W=F.length;W--;)if(!F[W]($,Z,Y))return!1;return!0}:F[0]}function wn(F,$,Z){for(var Y=0,W=$.length;Y<W;Y++)Oe(F,$[Y],Z);return Z}function cn(F,$,Z,Y,W){for(var X,ee=[],se=0,ue=F.length,me=$!=null;se<ue;se++)(X=F[se])&&(!Z||Z(X,Y,W))&&(ee.push(X),me&&$.push(se));return ee}function jn(F,$,Z,Y,W,X){return Y&&!Y[R]&&(Y=jn(Y)),W&&!W[R]&&(W=jn(W,X)),Qe(function(ee,se,ue,me){var Ee,Te,Le,Ve=[],ye=[],Ie=se.length,yt=ee||wn($||"*",ue.nodeType?[ue]:ue,[]),Dt=F&&(ee||!$)?cn(yt,Ve,F,ue,me):yt,rt=Z?W||(ee?F:Ie||Y)?[]:se:Dt;if(Z&&Z(Dt,rt,ue,me),Y)for(Ee=cn(rt,ye),Y(Ee,[],ue,me),Te=Ee.length;Te--;)(Le=Ee[Te])&&(rt[ye[Te]]=!(Dt[ye[Te]]=Le));if(ee){if(W||F){if(W){for(Ee=[],Te=rt.length;Te--;)(Le=rt[Te])&&Ee.push(Dt[Te]=Le);W(null,rt=[],Ee,me)}for(Te=rt.length;Te--;)(Le=rt[Te])&&(Ee=W?de(ee,Le):Ve[Te])>-1&&(ee[Ee]=!(se[Ee]=Le))}}else rt=cn(rt===se?rt.splice(Ie,rt.length):rt),W?W(null,se,rt,me):ne.apply(se,rt)})}function Nn(F){for(var $,Z,Y,W=F.length,X=d.relative[F[0].type],ee=X||d.relative[" "],se=X?1:0,ue=vt(function(Te){return Te===$},ee,!0),me=vt(function(Te){return de($,Te)>-1},ee,!0),Ee=[function(Te,Le,Ve){var ye=!X&&(Ve||Le!==h)||(($=Le).nodeType?ue(Te,Le,Ve):me(Te,Le,Ve));return $=null,ye}];se<W;se++)if(Z=d.relative[F[se].type])Ee=[vt(An(Ee),Z)];else{if(Z=d.filter[F[se].type].apply(null,F[se].matches),Z[R]){for(Y=++se;Y<W&&!d.relative[F[Y].type];Y++);return jn(se>1&&An(Ee),se>1&&mn(F.slice(0,se-1).concat({value:F[se-2].type===" "?"*":""})).replace(ut,"$1"),Z,se<Y&&Nn(F.slice(se,Y)),Y<W&&Nn(F=F.slice(Y)),Y<W&&mn(F))}Ee.push(Z)}return An(Ee)}function lo(F,$){var Z=$.length>0,Y=F.length>0,W=function(X,ee,se,ue,me){var Ee,Te,Le,Ve=0,ye="0",Ie=X&&[],yt=[],Dt=h,rt=X||Y&&d.find.TAG("*",me),Yt=x+=Dt==null?1:Math.random()||.1,Un=rt.length;for(me&&(h=ee==v||ee||me);ye!==Un&&(Ee=rt[ye])!=null;ye++){if(Y&&Ee){for(Te=0,!ee&&Ee.ownerDocument!=v&&(S(Ee),se=!O);Le=F[Te++];)if(Le(Ee,ee||v,se)){ue.push(Ee);break}me&&(x=Yt)}Z&&((Ee=!Le&&Ee)&&Ve--,X&&Ie.push(Ee))}if(Ve+=ye,Z&&ye!==Ve){for(Te=0;Le=$[Te++];)Le(Ie,yt,ee,se);if(X){if(Ve>0)for(;ye--;)Ie[ye]||yt[ye]||(yt[ye]=q.call(ue));yt=cn(yt)}ne.apply(ue,yt),me&&!X&&yt.length>0&&Ve+$.length>1&&Oe.uniqueSort(ue)}return me&&(x=Yt,h=Dt),Ie};return Z?Qe(W):W}m=Oe.compile=function(F,$){var Z,Y=[],W=[],X=k[F+" "];if(!X){for($||($=c(F)),Z=$.length;Z--;)X=Nn($[Z]),X[R]?Y.push(X):W.push(X);X=k(F,lo(W,Y)),X.selector=F}return X},i=Oe.select=function(F,$,Z,Y){var W,X,ee,se,ue,me=typeof F=="function"&&F,Ee=!Y&&c(F=me.selector||F);if(Z=Z||[],Ee.length===1){if(X=Ee[0]=Ee[0].slice(0),X.length>2&&(ee=X[0]).type==="ID"&&$.nodeType===9&&O&&d.relative[X[1].type]){if($=(d.find.ID(ee.matches[0].replace(ve,he),$)||[])[0],$)me&&($=$.parentNode);else return Z;F=F.slice(X.shift().value.length)}for(W=We.needsContext.test(F)?0:X.length;W--&&(ee=X[W],!d.relative[se=ee.type]);)if((ue=d.find[se])&&(Y=ue(ee.matches[0].replace(ve,he),ie.test(X[0].type)&&gn($.parentNode)||$))){if(X.splice(W,1),F=Y.length&&mn(X),!F)return ne.apply(Z,Y),Z;break}}return(me||m(F,Ee))(Y,$,!O,Z,!$||ie.test(F)&&gn($.parentNode)||$),Z},l.sortStable=R.split("").sort(B).join("")===R,l.detectDuplicates=!!f,S(),l.sortDetached=Xe(function(F){return F.compareDocumentPosition(v.createElement("fieldset"))&1}),Xe(function(F){return F.innerHTML="<a href='#'></a>",F.firstChild.getAttribute("href")==="#"})||zt("type|href|height|width",function(F,$,Z){if(!Z)return F.getAttribute($,$.toLowerCase()==="type"?1:2)}),(!l.attributes||!Xe(function(F){return F.innerHTML="<input/>",F.firstChild.setAttribute("value",""),F.firstChild.getAttribute("value")===""}))&&zt("value",function(F,$,Z){if(!Z&&F.nodeName.toLowerCase()==="input")return F.defaultValue}),Xe(function(F){return F.getAttribute("disabled")==null})||zt(te,function(F,$,Z){var Y;if(!Z)return F[$]===!0?$.toLowerCase():(Y=F.getAttributeNode($))&&Y.specified?Y.value:null});var Kn=o.Sizzle;Oe.noConflict=function(){return o.Sizzle===Oe&&(o.Sizzle=Kn),Oe},g=function(){return Oe}.call(y,a,y,P),g!==void 0&&(P.exports=g)})(window)},1450:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(9003),a(1143),a(2047),a(655),a(5401),a(6365),a(6073),a(2075),a(184),a(4492)],o=function(n,l,d,p,r,c,m){"use strict";var i=/%20/g,h=/#.*$/,u=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,S=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,v=/^(?:GET|HEAD)$/,b=/^\/\//,O={},E={},N="*/".concat("*"),T=l.createElement("a");T.href=r.href;function A(L){return function(U,k){typeof U!="string"&&(k=U,U="*");var z,B=0,H=U.toLowerCase().match(p)||[];if(d(k))for(;z=H[B++];)z[0]==="+"?(z=z.slice(1)||"*",(L[z]=L[z]||[]).unshift(k)):(L[z]=L[z]||[]).push(k)}}function R(L,U,k,z){var B={},H=L===E;function j(q){var V;return B[q]=!0,n.each(L[q]||[],function(ne,ae){var de=ae(U,k,z);if(typeof de=="string"&&!H&&!B[de])return U.dataTypes.unshift(de),j(de),!1;if(H)return!(V=de)}),V}return j(U.dataTypes[0])||!B["*"]&&j("*")}function M(L,U){var k,z,B=n.ajaxSettings.flatOptions||{};for(k in U)U[k]!==void 0&&((B[k]?L:z||(z={}))[k]=U[k]);return z&&n.extend(!0,L,z),L}function x(L,U,k){for(var z,B,H,j,q=L.contents,V=L.dataTypes;V[0]==="*";)V.shift(),z===void 0&&(z=L.mimeType||U.getResponseHeader("Content-Type"));if(z){for(B in q)if(q[B]&&q[B].test(z)){V.unshift(B);break}}if(V[0]in k)H=V[0];else{for(B in k){if(!V[0]||L.converters[B+" "+V[0]]){H=B;break}j||(j=B)}H=H||j}if(H)return H!==V[0]&&V.unshift(H),k[H]}function _(L,U,k,z){var B,H,j,q,V,ne={},ae=L.dataTypes.slice();if(ae[1])for(j in L.converters)ne[j.toLowerCase()]=L.converters[j];for(H=ae.shift();H;)if(L.responseFields[H]&&(k[L.responseFields[H]]=U),!V&&z&&L.dataFilter&&(U=L.dataFilter(U,L.dataType)),V=H,H=ae.shift(),H){if(H==="*")H=V;else if(V!=="*"&&V!==H){if(j=ne[V+" "+H]||ne["* "+H],!j){for(B in ne)if(q=B.split(" "),q[1]===H&&(j=ne[V+" "+q[0]]||ne["* "+q[0]],j)){j===!0?j=ne[B]:ne[B]!==!0&&(H=q[0],ae.unshift(q[1]));break}}if(j!==!0)if(j&&L.throws)U=j(U);else try{U=j(U)}catch(de){return{state:"parsererror",error:j?de:"No conversion from "+V+" to "+H}}}}return{state:"success",data:U}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:S.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":N,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(L,U){return U?M(M(L,n.ajaxSettings),U):M(n.ajaxSettings,L)},ajaxPrefilter:A(O),ajaxTransport:A(E),ajax:function(L,U){typeof L=="object"&&(U=L,L=void 0),U=U||{};var k,z,B,H,j,q,V,ne,ae,de,te=n.ajaxSetup({},U),ge=te.context||te,Ce=te.context&&(ge.nodeType||ge.jquery)?n(ge):n.event,Fe=n.Deferred(),it=n.Callbacks("once memory"),mt=te.statusCode||{},ut={},ht={},At="canceled",Re={readyState:0,getResponseHeader:function(Ue){var We;if(V){if(!H)for(H={};We=f.exec(B);)H[We[1].toLowerCase()+" "]=(H[We[1].toLowerCase()+" "]||[]).concat(We[2]);We=H[Ue.toLowerCase()+" "]}return We==null?null:We.join(", ")},getAllResponseHeaders:function(){return V?B:null},setRequestHeader:function(Ue,We){return V==null&&(Ue=ht[Ue.toLowerCase()]=ht[Ue.toLowerCase()]||Ue,ut[Ue]=We),this},overrideMimeType:function(Ue){return V==null&&(te.mimeType=Ue),this},statusCode:function(Ue){var We;if(Ue)if(V)Re.always(Ue[Re.status]);else for(We in Ue)mt[We]=[mt[We],Ue[We]];return this},abort:function(Ue){var We=Ue||At;return k&&k.abort(We),Ct(0,We),this}};if(Fe.promise(Re),te.url=((L||te.url||r.href)+"").replace(b,r.protocol+"//"),te.type=U.method||U.type||te.method||te.type,te.dataTypes=(te.dataType||"*").toLowerCase().match(p)||[""],te.crossDomain==null){q=l.createElement("a");try{q.href=te.url,q.href=q.href,te.crossDomain=T.protocol+"//"+T.host!=q.protocol+"//"+q.host}catch(Ue){te.crossDomain=!0}}if(te.data&&te.processData&&typeof te.data!="string"&&(te.data=n.param(te.data,te.traditional)),R(O,te,U,Re),V)return Re;ne=n.event&&te.global,ne&&n.active++===0&&n.event.trigger("ajaxStart"),te.type=te.type.toUpperCase(),te.hasContent=!v.test(te.type),z=te.url.replace(h,""),te.hasContent?te.data&&te.processData&&(te.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(te.data=te.data.replace(i,"+")):(de=te.url.slice(z.length),te.data&&(te.processData||typeof te.data=="string")&&(z+=(m.test(z)?"&":"?")+te.data,delete te.data),te.cache===!1&&(z=z.replace(u,"$1"),de=(m.test(z)?"&":"?")+"_="+c.guid+++de),te.url=z+de),te.ifModified&&(n.lastModified[z]&&Re.setRequestHeader("If-Modified-Since",n.lastModified[z]),n.etag[z]&&Re.setRequestHeader("If-None-Match",n.etag[z])),(te.data&&te.hasContent&&te.contentType!==!1||U.contentType)&&Re.setRequestHeader("Content-Type",te.contentType),Re.setRequestHeader("Accept",te.dataTypes[0]&&te.accepts[te.dataTypes[0]]?te.accepts[te.dataTypes[0]]+(te.dataTypes[0]!=="*"?", "+N+"; q=0.01":""):te.accepts["*"]);for(ae in te.headers)Re.setRequestHeader(ae,te.headers[ae]);if(te.beforeSend&&(te.beforeSend.call(ge,Re,te)===!1||V))return Re.abort();if(At="abort",it.add(te.complete),Re.done(te.success),Re.fail(te.error),k=R(E,te,U,Re),!k)Ct(-1,"No Transport");else{if(Re.readyState=1,ne&&Ce.trigger("ajaxSend",[Re,te]),V)return Re;te.async&&te.timeout>0&&(j=window.setTimeout(function(){Re.abort("timeout")},te.timeout));try{V=!1,k.send(ut,Ct)}catch(Ue){if(V)throw Ue;Ct(-1,Ue)}}function Ct(Ue,We,Bt,ke){var le,Ne,De,ie,ve,he=We;V||(V=!0,j&&window.clearTimeout(j),k=void 0,B=ke||"",Re.readyState=Ue>0?4:0,le=Ue>=200&&Ue<300||Ue===304,Bt&&(ie=x(te,Re,Bt)),!le&&n.inArray("script",te.dataTypes)>-1&&n.inArray("json",te.dataTypes)<0&&(te.converters["text script"]=function(){}),ie=_(te,ie,Re,le),le?(te.ifModified&&(ve=Re.getResponseHeader("Last-Modified"),ve&&(n.lastModified[z]=ve),ve=Re.getResponseHeader("etag"),ve&&(n.etag[z]=ve)),Ue===204||te.type==="HEAD"?he="nocontent":Ue===304?he="notmodified":(he=ie.state,Ne=ie.data,De=ie.error,le=!De)):(De=he,(Ue||!he)&&(he="error",Ue<0&&(Ue=0))),Re.status=Ue,Re.statusText=(We||he)+"",le?Fe.resolveWith(ge,[Ne,he,Re]):Fe.rejectWith(ge,[Re,he,De]),Re.statusCode(mt),mt=void 0,ne&&Ce.trigger(le?"ajaxSuccess":"ajaxError",[Re,te,le?Ne:De]),it.fireWith(ge,[Re,he]),ne&&(Ce.trigger("ajaxComplete",[Re,te]),--n.active||n.event.trigger("ajaxStop")))}return Re},getJSON:function(L,U,k){return n.get(L,U,k,"json")},getScript:function(L,U){return n.get(L,void 0,U,"script")}}),n.each(["get","post"],function(L,U){n[U]=function(k,z,B,H){return d(z)&&(H=H||B,B=z,z=void 0),n.ajax(n.extend({url:k,type:U,dataType:H,data:z,success:B},n.isPlainObject(k)&&k))}}),n.ajaxPrefilter(function(L){var U;for(U in L.headers)U.toLowerCase()==="content-type"&&(L.contentType=L.headers[U]||"")}),n}.apply(y,g),o!==void 0&&(P.exports=o)},3632:(P,y,a)=>{var g,o;g=[a(2884),a(9003),a(655),a(5401),a(1450)],o=function(n,l,d,p){"use strict";var r=[],c=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var m=r.pop()||n.expando+"_"+d.guid++;return this[m]=!0,m}}),n.ajaxPrefilter("json jsonp",function(m,i,h){var u,f,S,v=m.jsonp!==!1&&(c.test(m.url)?"url":typeof m.data=="string"&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&c.test(m.data)&&"data");if(v||m.dataTypes[0]==="jsonp")return u=m.jsonpCallback=l(m.jsonpCallback)?m.jsonpCallback():m.jsonpCallback,v?m[v]=m[v].replace(c,"$1"+u):m.jsonp!==!1&&(m.url+=(p.test(m.url)?"&":"?")+m.jsonp+"="+u),m.converters["script json"]=function(){return S||n.error(u+" was not called"),S[0]},m.dataTypes[0]="json",f=window[u],window[u]=function(){S=arguments},h.always(function(){f===void 0?n(window).removeProp(u):window[u]=f,m[u]&&(m.jsonpCallback=i.jsonpCallback,r.push(u)),S&&l(f)&&f(S[0]),S=f=void 0}),"script"})}.apply(y,g),o!==void 0&&(P.exports=o)},4182:(P,y,a)=>{var g,o;g=[a(2884),a(3342),a(9003),a(5461),a(1450),a(7392),a(5599),a(6)],o=function(n,l,d){"use strict";n.fn.load=function(p,r,c){var m,i,h,u=this,f=p.indexOf(" ");return f>-1&&(m=l(p.slice(f)),p=p.slice(0,f)),d(r)?(c=r,r=void 0):r&&typeof r=="object"&&(i="POST"),u.length>0&&n.ajax({url:p,type:i||"GET",dataType:"html",data:r}).done(function(S){h=arguments,u.html(m?n("<div>").append(n.parseHTML(S)).find(m):S)}).always(c&&function(S,v){u.each(function(){c.apply(this,h||[S.responseText,v,S])})}),this}}.apply(y,g),o!==void 0&&(P.exports=o)},719:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(1450)],o=function(n,l){"use strict";n.ajaxPrefilter(function(d){d.crossDomain&&(d.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(d){return n.globalEval(d),d}}}),n.ajaxPrefilter("script",function(d){d.cache===void 0&&(d.cache=!1),d.crossDomain&&(d.type="GET")}),n.ajaxTransport("script",function(d){if(d.crossDomain||d.scriptAttrs){var p,r;return{send:function(c,m){p=n("<script>").attr(d.scriptAttrs||{}).prop({charset:d.scriptCharset,src:d.url}).on("load error",r=function(i){p.remove(),r=null,i&&m(i.type==="error"?404:200,i.type)}),l.head.appendChild(p[0])},abort:function(){r&&r()}}}})}.apply(y,g),o!==void 0&&(P.exports=o)},2047:(P,y,a)=>{var g;g=function(){"use strict";return window.location}.call(y,a,y,P),g!==void 0&&(P.exports=g)},655:(P,y,a)=>{var g;g=function(){"use strict";return{guid:Date.now()}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},5401:(P,y,a)=>{var g;g=function(){"use strict";return/\?/}.call(y,a,y,P),g!==void 0&&(P.exports=g)},2371:(P,y,a)=>{var g,o;g=[a(2884),a(9343),a(1450)],o=function(n,l){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(r){}};var d={0:200,1223:204},p=n.ajaxSettings.xhr();l.cors=!!p&&"withCredentials"in p,l.ajax=p=!!p,n.ajaxTransport(function(r){var c,m;if(l.cors||p&&!r.crossDomain)return{send:function(i,h){var u,f=r.xhr();if(f.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(u in r.xhrFields)f[u]=r.xhrFields[u];r.mimeType&&f.overrideMimeType&&f.overrideMimeType(r.mimeType),!r.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(u in i)f.setRequestHeader(u,i[u]);c=function(S){return function(){c&&(c=m=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,S==="abort"?f.abort():S==="error"?typeof f.status!="number"?h(0,"error"):h(f.status,f.statusText):h(d[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=c(),m=f.onerror=f.ontimeout=c("error"),f.onabort!==void 0?f.onabort=m:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){c&&m()})},c=c("abort");try{f.send(r.hasContent&&r.data||null)}catch(S){if(c)throw S}},abort:function(){c&&c()}}})}.apply(y,g),o!==void 0&&(P.exports=o)},4437:(P,y,a)=>{var g,o;g=[a(2884),a(8066),a(6034),a(8345),a(3383)],o=function(n){"use strict";return n}.apply(y,g),o!==void 0&&(P.exports=o)},8066:(P,y,a)=>{var g,o;g=[a(2884),a(8097),a(7031),a(3556),a(1143),a(6)],o=function(n,l,d,p,r){"use strict";var c,m=n.expr.attrHandle;n.fn.extend({attr:function(i,h){return l(this,n.attr,i,h,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,h,u){var f,S,v=i.nodeType;if(!(v===3||v===8||v===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,h,u);if((v!==1||!n.isXMLDoc(i))&&(S=n.attrHooks[h.toLowerCase()]||(n.expr.match.bool.test(h)?c:void 0)),u!==void 0){if(u===null){n.removeAttr(i,h);return}return S&&"set"in S&&(f=S.set(i,u,h))!==void 0?f:(i.setAttribute(h,u+""),u)}return S&&"get"in S&&(f=S.get(i,h))!==null?f:(f=n.find.attr(i,h),f==null?void 0:f)}},attrHooks:{type:{set:function(i,h){if(!p.radioValue&&h==="radio"&&d(i,"input")){var u=i.value;return i.setAttribute("type",h),u&&(i.value=u),h}}}},removeAttr:function(i,h){var u,f=0,S=h&&h.match(r);if(S&&i.nodeType===1)for(;u=S[f++];)i.removeAttribute(u)}}),c={set:function(i,h,u){return h===!1?n.removeAttr(i,u):i.setAttribute(u,u),u}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,h){var u=m[h]||n.find.attr;m[h]=function(f,S,v){var b,O,E=S.toLowerCase();return v||(O=m[E],m[E]=b,b=u(f,S,v)!=null?E:null,m[E]=O),b}})}.apply(y,g),o!==void 0&&(P.exports=o)},8345:(P,y,a)=>{var g,o;g=[a(2884),a(3342),a(9003),a(1143),a(698),a(6365)],o=function(n,l,d,p,r){"use strict";function c(i){return i.getAttribute&&i.getAttribute("class")||""}function m(i){return Array.isArray(i)?i:typeof i=="string"?i.match(p)||[]:[]}n.fn.extend({addClass:function(i){var h,u,f,S,v,b,O,E=0;if(d(i))return this.each(function(N){n(this).addClass(i.call(this,N,c(this)))});if(h=m(i),h.length){for(;u=this[E++];)if(S=c(u),f=u.nodeType===1&&" "+l(S)+" ",f){for(b=0;v=h[b++];)f.indexOf(" "+v+" ")<0&&(f+=v+" ");O=l(f),S!==O&&u.setAttribute("class",O)}}return this},removeClass:function(i){var h,u,f,S,v,b,O,E=0;if(d(i))return this.each(function(N){n(this).removeClass(i.call(this,N,c(this)))});if(!arguments.length)return this.attr("class","");if(h=m(i),h.length){for(;u=this[E++];)if(S=c(u),f=u.nodeType===1&&" "+l(S)+" ",f){for(b=0;v=h[b++];)for(;f.indexOf(" "+v+" ")>-1;)f=f.replace(" "+v+" "," ");O=l(f),S!==O&&u.setAttribute("class",O)}}return this},toggleClass:function(i,h){var u=typeof i,f=u==="string"||Array.isArray(i);return typeof h=="boolean"&&f?h?this.addClass(i):this.removeClass(i):d(i)?this.each(function(S){n(this).toggleClass(i.call(this,S,c(this),h),h)}):this.each(function(){var S,v,b,O;if(f)for(v=0,b=n(this),O=m(i);S=O[v++];)b.hasClass(S)?b.removeClass(S):b.addClass(S);else(i===void 0||u==="boolean")&&(S=c(this),S&&r.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||i===!1?"":r.get(this,"__className__")||""))})},hasClass:function(i){var h,u,f=0;for(h=" "+i+" ";u=this[f++];)if(u.nodeType===1&&(" "+l(c(u))+" ").indexOf(h)>-1)return!0;return!1}})}.apply(y,g),o!==void 0&&(P.exports=o)},6034:(P,y,a)=>{var g,o;g=[a(2884),a(8097),a(3556),a(6)],o=function(n,l,d){"use strict";var p=/^(?:input|select|textarea|button)$/i,r=/^(?:a|area)$/i;n.fn.extend({prop:function(c,m){return l(this,n.prop,c,m,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[n.propFix[c]||c]})}}),n.extend({prop:function(c,m,i){var h,u,f=c.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!n.isXMLDoc(c))&&(m=n.propFix[m]||m,u=n.propHooks[m]),i!==void 0?u&&"set"in u&&(h=u.set(c,i,m))!==void 0?h:c[m]=i:u&&"get"in u&&(h=u.get(c,m))!==null?h:c[m]},propHooks:{tabIndex:{get:function(c){var m=n.find.attr(c,"tabindex");return m?parseInt(m,10):p.test(c.nodeName)||r.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(n.propHooks.selected={get:function(c){var m=c.parentNode;return m&&m.parentNode&&m.parentNode.selectedIndex,null},set:function(c){var m=c.parentNode;m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(y,g),o!==void 0&&(P.exports=o)},3556:(P,y,a)=>{var g,o;g=[a(7749),a(9343)],o=function(n,l){"use strict";return function(){var d=n.createElement("input"),p=n.createElement("select"),r=p.appendChild(n.createElement("option"));d.type="checkbox",l.checkOn=d.value!=="",l.optSelected=r.selected,d=n.createElement("input"),d.value="t",d.type="radio",l.radioValue=d.value==="t"}(),l}.apply(y,g),o!==void 0&&(P.exports=o)},3383:(P,y,a)=>{var g,o;g=[a(2884),a(3342),a(3556),a(7031),a(9003),a(6365)],o=function(n,l,d,p,r){"use strict";var c=/\r/g;n.fn.extend({val:function(m){var i,h,u,f=this[0];return arguments.length?(u=r(m),this.each(function(S){var v;this.nodeType===1&&(u?v=m.call(this,S,n(this).val()):v=m,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=n.map(v,function(b){return b==null?"":b+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,v,"value")===void 0)&&(this.value=v))})):f?(i=n.valHooks[f.type]||n.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(h=i.get(f,"value"))!==void 0?h:(h=f.value,typeof h=="string"?h.replace(c,""):h==null?"":h)):void 0}}),n.extend({valHooks:{option:{get:function(m){var i=n.find.attr(m,"value");return i!=null?i:l(n.text(m))}},select:{get:function(m){var i,h,u,f=m.options,S=m.selectedIndex,v=m.type==="select-one",b=v?null:[],O=v?S+1:f.length;for(S<0?u=O:u=v?S:0;u<O;u++)if(h=f[u],(h.selected||u===S)&&!h.disabled&&(!h.parentNode.disabled||!p(h.parentNode,"optgroup"))){if(i=n(h).val(),v)return i;b.push(i)}return b},set:function(m,i){for(var h,u,f=m.options,S=n.makeArray(i),v=f.length;v--;)u=f[v],(u.selected=n.inArray(n.valHooks.option.get(u),S)>-1)&&(h=!0);return h||(m.selectedIndex=-1),S}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(m,i){if(Array.isArray(i))return m.checked=n.inArray(n(m).val(),i)>-1}},d.checkOn||(n.valHooks[this].get=function(m){return m.getAttribute("value")===null?"on":m.value})})}.apply(y,g),o!==void 0&&(P.exports=o)},7617:(P,y,a)=>{var g,o;g=[a(2884),a(1401),a(9003),a(1143)],o=function(n,l,d,p){"use strict";function r(c){var m={};return n.each(c.match(p)||[],function(i,h){m[h]=!0}),m}return n.Callbacks=function(c){c=typeof c=="string"?r(c):n.extend({},c);var m,i,h,u,f=[],S=[],v=-1,b=function(){for(u=u||c.once,h=m=!0;S.length;v=-1)for(i=S.shift();++v<f.length;)f[v].apply(i[0],i[1])===!1&&c.stopOnFalse&&(v=f.length,i=!1);c.memory||(i=!1),m=!1,u&&(i?f=[]:f="")},O={add:function(){return f&&(i&&!m&&(v=f.length-1,S.push(i)),function E(N){n.each(N,function(T,A){d(A)?(!c.unique||!O.has(A))&&f.push(A):A&&A.length&&l(A)!=="string"&&E(A)})}(arguments),i&&!m&&b()),this},remove:function(){return n.each(arguments,function(E,N){for(var T;(T=n.inArray(N,f,T))>-1;)f.splice(T,1),T<=v&&v--}),this},has:function(E){return E?n.inArray(E,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=S=[],f=i="",this},disabled:function(){return!f},lock:function(){return u=S=[],!i&&!m&&(f=i=""),this},locked:function(){return!!u},fireWith:function(E,N){return u||(N=N||[],N=[E,N.slice?N.slice():N],S.push(N),m||b()),this},fire:function(){return O.fireWith(this,arguments),this},fired:function(){return!!h}};return O},n}.apply(y,g),o!==void 0&&(P.exports=o)},2884:(P,y,a)=>{var g,o;g=[a(2305),a(2690),a(7502),a(1429),a(5896),a(706),a(8978),a(9412),a(939),a(7913),a(789),a(9343),a(9003),a(9011),a(4835),a(1401)],o=function(n,l,d,p,r,c,m,i,h,u,f,S,v,b,O,E){"use strict";var N="3.6.0",T=function(R,M){return new T.fn.init(R,M)};T.fn=T.prototype={jquery:N,constructor:T,length:0,toArray:function(){return d.call(this)},get:function(R){return R==null?d.call(this):R<0?this[R+this.length]:this[R]},pushStack:function(R){var M=T.merge(this.constructor(),R);return M.prevObject=this,M},each:function(R){return T.each(this,R)},map:function(R){return this.pushStack(T.map(this,function(M,x){return R.call(M,x,M)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(R,M){return(M+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(R,M){return M%2}))},eq:function(R){var M=this.length,x=+R+(R<0?M:0);return this.pushStack(x>=0&&x<M?[this[x]]:[])},end:function(){return this.prevObject||this.constructor()},push:r,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var R,M,x,_,L,U,k=arguments[0]||{},z=1,B=arguments.length,H=!1;for(typeof k=="boolean"&&(H=k,k=arguments[z]||{},z++),typeof k!="object"&&!v(k)&&(k={}),z===B&&(k=this,z--);z<B;z++)if((R=arguments[z])!=null)for(M in R)_=R[M],!(M==="__proto__"||k===_)&&(H&&_&&(T.isPlainObject(_)||(L=Array.isArray(_)))?(x=k[M],L&&!Array.isArray(x)?U=[]:!L&&!T.isPlainObject(x)?U={}:U=x,L=!1,k[M]=T.extend(H,U,_)):_!==void 0&&(k[M]=_));return k},T.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(R){throw new Error(R)},noop:function(){},isPlainObject:function(R){var M,x;return!R||i.call(R)!=="[object Object]"?!1:(M=l(R),M?(x=h.call(M,"constructor")&&M.constructor,typeof x=="function"&&u.call(x)===f):!0)},isEmptyObject:function(R){var M;for(M in R)return!1;return!0},globalEval:function(R,M,x){O(R,{nonce:M&&M.nonce},x)},each:function(R,M){var x,_=0;if(A(R))for(x=R.length;_<x&&M.call(R[_],_,R[_])!==!1;_++);else for(_ in R)if(M.call(R[_],_,R[_])===!1)break;return R},makeArray:function(R,M){var x=M||[];return R!=null&&(A(Object(R))?T.merge(x,typeof R=="string"?[R]:R):r.call(x,R)),x},inArray:function(R,M,x){return M==null?-1:c.call(M,R,x)},merge:function(R,M){for(var x=+M.length,_=0,L=R.length;_<x;_++)R[L++]=M[_];return R.length=L,R},grep:function(R,M,x){for(var _,L=[],U=0,k=R.length,z=!x;U<k;U++)_=!M(R[U],U),_!==z&&L.push(R[U]);return L},map:function(R,M,x){var _,L,U=0,k=[];if(A(R))for(_=R.length;U<_;U++)L=M(R[U],U,x),L!=null&&k.push(L);else for(U in R)L=M(R[U],U,x),L!=null&&k.push(L);return p(k)},guid:1,support:S}),typeof Symbol=="function"&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(R,M){m["[object "+M+"]"]=M.toLowerCase()});function A(R){var M=!!R&&"length"in R&&R.length,x=E(R);return v(R)||b(R)?!1:x==="array"||M===0||typeof M=="number"&&M>0&&M-1 in R}return T}.apply(y,g),o!==void 0&&(P.exports=o)},4835:(P,y,a)=>{var g,o;g=[a(7749)],o=function(n){"use strict";var l={type:!0,src:!0,nonce:!0,noModule:!0};function d(p,r,c){c=c||n;var m,i,h=c.createElement("script");if(h.text=p,r)for(m in l)i=r[m]||r.getAttribute&&r.getAttribute(m),i&&h.setAttribute(m,i);c.head.appendChild(h).parentNode.removeChild(h)}return d}.apply(y,g),o!==void 0&&(P.exports=o)},8097:(P,y,a)=>{var g,o;g=[a(2884),a(1401),a(9003)],o=function(n,l,d){"use strict";var p=function(r,c,m,i,h,u,f){var S=0,v=r.length,b=m==null;if(l(m)==="object"){h=!0;for(S in m)p(r,c,S,m[S],!0,u,f)}else if(i!==void 0&&(h=!0,d(i)||(f=!0),b&&(f?(c.call(r,i),c=null):(b=c,c=function(O,E,N){return b.call(n(O),N)})),c))for(;S<v;S++)c(r[S],m,f?i:i.call(r[S],S,c(r[S],m)));return h?r:b?c.call(r):v?c(r[0],m):u};return p}.apply(y,g),o!==void 0&&(P.exports=o)},7232:(P,y)=>{var a,g;a=[],g=function(){"use strict";var o=/^-ms-/,n=/-([a-z])/g;function l(p,r){return r.toUpperCase()}function d(p){return p.replace(o,"ms-").replace(n,l)}return d}.apply(y,a),g!==void 0&&(P.exports=g)},6365:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(9003),a(3309),a(6036)],o=function(n,l,d,p){"use strict";var r,c=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,m=n.fn.init=function(i,h,u){var f,S;if(!i)return this;if(u=u||r,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=c.exec(i),f&&(f[1]||!h))if(f[1]){if(h=h instanceof n?h[0]:h,n.merge(this,n.parseHTML(f[1],h&&h.nodeType?h.ownerDocument||h:l,!0)),p.test(f[1])&&n.isPlainObject(h))for(f in h)d(this[f])?this[f](h[f]):this.attr(f,h[f]);return this}else return S=l.getElementById(f[2]),S&&(this[0]=S,this.length=1),this;else return!h||h.jquery?(h||u).find(i):this.constructor(h).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(d(i))return u.ready!==void 0?u.ready(i):i(n)}return n.makeArray(i,this)};return m.prototype=n.fn,r=n(l),m}.apply(y,g),o!==void 0&&(P.exports=o)},1518:(P,y,a)=>{var g,o;g=[a(2884),a(893),a(6)],o=function(n,l){"use strict";var d=function(r){return n.contains(r.ownerDocument,r)},p={composed:!0};return l.getRootNode&&(d=function(r){return n.contains(r.ownerDocument,r)||r.getRootNode(p)===r.ownerDocument}),d}.apply(y,g),o!==void 0&&(P.exports=o)},7031:(P,y,a)=>{var g;g=function(){"use strict";function o(n,l){return n.nodeName&&n.nodeName.toLowerCase()===l.toLowerCase()}return o}.call(y,a,y,P),g!==void 0&&(P.exports=g)},5461:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(3309),a(6753),a(200)],o=function(n,l,d,p,r){"use strict";return n.parseHTML=function(c,m,i){if(typeof c!="string")return[];typeof m=="boolean"&&(i=m,m=!1);var h,u,f;return m||(r.createHTMLDocument?(m=l.implementation.createHTMLDocument(""),h=m.createElement("base"),h.href=l.location.href,m.head.appendChild(h)):m=l),u=d.exec(c),f=!i&&[],u?[m.createElement(u[1])]:(u=p([c],m,f),f&&f.length&&n(f).remove(),n.merge([],u.childNodes))},n.parseHTML}.apply(y,g),o!==void 0&&(P.exports=o)},6073:(P,y,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";return n.parseXML=function(l){var d,p;if(!l||typeof l!="string")return null;try{d=new window.DOMParser().parseFromString(l,"text/xml")}catch(r){}return p=d&&d.getElementsByTagName("parsererror")[0],(!d||p)&&n.error("Invalid XML: "+(p?n.map(p.childNodes,function(r){return r.textContent}).join(`
`):l)),d},n.parseXML}.apply(y,g),o!==void 0&&(P.exports=o)},7644:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(2003),a(184)],o=function(n,l){"use strict";var d=n.Deferred();n.fn.ready=function(r){return d.then(r).catch(function(c){n.readyException(c)}),this},n.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(r!==!0&&--n.readyWait>0)&&d.resolveWith(l,[n]))}}),n.ready.then=d.then;function p(){l.removeEventListener("DOMContentLoaded",p),window.removeEventListener("load",p),n.ready()}l.readyState==="complete"||l.readyState!=="loading"&&!l.documentElement.doScroll?window.setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",p),window.addEventListener("load",p))}.apply(y,g),o!==void 0&&(P.exports=o)},2003:(P,y,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";n.readyException=function(l){window.setTimeout(function(){throw l})}}.apply(y,g),o!==void 0&&(P.exports=o)},3342:(P,y,a)=>{var g,o;g=[a(1143)],o=function(n){"use strict";function l(d){var p=d.match(n)||[];return p.join(" ")}return l}.apply(y,g),o!==void 0&&(P.exports=o)},200:(P,y,a)=>{var g,o;g=[a(7749),a(9343)],o=function(n,l){"use strict";return l.createHTMLDocument=function(){var d=n.implementation.createHTMLDocument("").body;return d.innerHTML="<form></form><form></form>",d.childNodes.length===2}(),l}.apply(y,g),o!==void 0&&(P.exports=o)},1401:(P,y,a)=>{var g,o;g=[a(8978),a(9412)],o=function(n,l){"use strict";function d(p){return p==null?p+"":typeof p=="object"||typeof p=="function"?n[l.call(p)]||"object":typeof p}return d}.apply(y,g),o!==void 0&&(P.exports=o)},3309:(P,y,a)=>{var g;g=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(y,a,y,P),g!==void 0&&(P.exports=g)},7154:(P,y,a)=>{var g,o;g=[a(2884),a(8097),a(7232),a(7031),a(1286),a(3045),a(29),a(1089),a(6439),a(4015),a(320),a(1353),a(1567),a(2137),a(6365),a(7644),a(6)],o=function(n,l,d,p,r,c,m,i,h,u,f,S,v,b){"use strict";var O=/^(none|table(?!-c[ea]).+)/,E=/^--/,N={position:"absolute",visibility:"hidden",display:"block"},T={letterSpacing:"0",fontWeight:"400"};function A(x,_,L){var U=r.exec(_);return U?Math.max(0,U[2]-(L||0))+(U[3]||"px"):_}function R(x,_,L,U,k,z){var B=_==="width"?1:0,H=0,j=0;if(L===(U?"border":"content"))return 0;for(;B<4;B+=2)L==="margin"&&(j+=n.css(x,L+m[B],!0,k)),U?(L==="content"&&(j-=n.css(x,"padding"+m[B],!0,k)),L!=="margin"&&(j-=n.css(x,"border"+m[B]+"Width",!0,k))):(j+=n.css(x,"padding"+m[B],!0,k),L!=="padding"?j+=n.css(x,"border"+m[B]+"Width",!0,k):H+=n.css(x,"border"+m[B]+"Width",!0,k));return!U&&z>=0&&(j+=Math.max(0,Math.ceil(x["offset"+_[0].toUpperCase()+_.slice(1)]-z-j-H-.5))||0),j}function M(x,_,L){var U=i(x),k=!v.boxSizingReliable()||L,z=k&&n.css(x,"boxSizing",!1,U)==="border-box",B=z,H=u(x,_,U),j="offset"+_[0].toUpperCase()+_.slice(1);if(c.test(H)){if(!L)return H;H="auto"}return(!v.boxSizingReliable()&&z||!v.reliableTrDimensions()&&p(x,"tr")||H==="auto"||!parseFloat(H)&&n.css(x,"display",!1,U)==="inline")&&x.getClientRects().length&&(z=n.css(x,"boxSizing",!1,U)==="border-box",B=j in x,B&&(H=x[j])),H=parseFloat(H)||0,H+R(x,_,L||(z?"border":"content"),B,U,H)+"px"}return n.extend({cssHooks:{opacity:{get:function(x,_){if(_){var L=u(x,"opacity");return L===""?"1":L}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(x,_,L,U){if(!(!x||x.nodeType===3||x.nodeType===8||!x.style)){var k,z,B,H=d(_),j=E.test(_),q=x.style;if(j||(_=b(H)),B=n.cssHooks[_]||n.cssHooks[H],L!==void 0){if(z=typeof L,z==="string"&&(k=r.exec(L))&&k[1]&&(L=f(x,_,k),z="number"),L==null||L!==L)return;z==="number"&&!j&&(L+=k&&k[3]||(n.cssNumber[H]?"":"px")),!v.clearCloneStyle&&L===""&&_.indexOf("background")===0&&(q[_]="inherit"),(!B||!("set"in B)||(L=B.set(x,L,U))!==void 0)&&(j?q.setProperty(_,L):q[_]=L)}else return B&&"get"in B&&(k=B.get(x,!1,U))!==void 0?k:q[_]}},css:function(x,_,L,U){var k,z,B,H=d(_),j=E.test(_);return j||(_=b(H)),B=n.cssHooks[_]||n.cssHooks[H],B&&"get"in B&&(k=B.get(x,!0,L)),k===void 0&&(k=u(x,_,U)),k==="normal"&&_ in T&&(k=T[_]),L===""||L?(z=parseFloat(k),L===!0||isFinite(z)?z||0:k):k}}),n.each(["height","width"],function(x,_){n.cssHooks[_]={get:function(L,U,k){if(U)return O.test(n.css(L,"display"))&&(!L.getClientRects().length||!L.getBoundingClientRect().width)?h(L,N,function(){return M(L,_,k)}):M(L,_,k)},set:function(L,U,k){var z,B=i(L),H=!v.scrollboxSize()&&B.position==="absolute",j=H||k,q=j&&n.css(L,"boxSizing",!1,B)==="border-box",V=k?R(L,_,k,q,B):0;return q&&H&&(V-=Math.ceil(L["offset"+_[0].toUpperCase()+_.slice(1)]-parseFloat(B[_])-R(L,_,"border",!1,B)-.5)),V&&(z=r.exec(U))&&(z[3]||"px")!=="px"&&(L.style[_]=U,U=n.css(L,_)),A(L,U,V)}}}),n.cssHooks.marginLeft=S(v.reliableMarginLeft,function(x,_){if(_)return(parseFloat(u(x,"marginLeft"))||x.getBoundingClientRect().left-h(x,{marginLeft:0},function(){return x.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(x,_){n.cssHooks[x+_]={expand:function(L){for(var U=0,k={},z=typeof L=="string"?L.split(" "):[L];U<4;U++)k[x+m[U]+_]=z[U]||z[U-2]||z[0];return k}},x!=="margin"&&(n.cssHooks[x+_].set=A)}),n.fn.extend({css:function(x,_){return l(this,function(L,U,k){var z,B,H={},j=0;if(Array.isArray(U)){for(z=i(L),B=U.length;j<B;j++)H[U[j]]=n.css(L,U[j],!1,z);return H}return k!==void 0?n.style(L,U,k):n.css(L,U)},x,_,arguments.length>1)}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},1353:(P,y,a)=>{var g;g=function(){"use strict";function o(n,l){return{get:function(){if(n()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}return o}.call(y,a,y,P),g!==void 0&&(P.exports=g)},320:(P,y,a)=>{var g,o;g=[a(2884),a(1286)],o=function(n,l){"use strict";function d(p,r,c,m){var i,h,u=20,f=m?function(){return m.cur()}:function(){return n.css(p,r,"")},S=f(),v=c&&c[3]||(n.cssNumber[r]?"":"px"),b=p.nodeType&&(n.cssNumber[r]||v!=="px"&&+S)&&l.exec(n.css(p,r));if(b&&b[3]!==v){for(S=S/2,v=v||b[3],b=+S||1;u--;)n.style(p,r,b+v),(1-h)*(1-(h=f()/S||.5))<=0&&(u=0),b=b/h;b=b*2,n.style(p,r,b+v),c=c||[]}return c&&(b=+b||+S||0,i=c[1]?b+(c[1]+1)*c[2]:+c[2],m&&(m.unit=v,m.start=b,m.end=i)),i}return d}.apply(y,g),o!==void 0&&(P.exports=o)},4015:(P,y,a)=>{var g,o;g=[a(2884),a(1518),a(5511),a(3045),a(1089),a(1567)],o=function(n,l,d,p,r,c){"use strict";function m(i,h,u){var f,S,v,b,O=i.style;return u=u||r(i),u&&(b=u.getPropertyValue(h)||u[h],b===""&&!l(i)&&(b=n.style(i,h)),!c.pixelBoxStyles()&&p.test(b)&&d.test(h)&&(f=O.width,S=O.minWidth,v=O.maxWidth,O.minWidth=O.maxWidth=O.width=b,b=u.width,O.width=f,O.minWidth=S,O.maxWidth=v)),b!==void 0?b+"":b}return m}.apply(y,g),o!==void 0&&(P.exports=o)},2137:(P,y,a)=>{var g,o;g=[a(7749),a(2884)],o=function(n,l){"use strict";var d=["Webkit","Moz","ms"],p=n.createElement("div").style,r={};function c(i){for(var h=i[0].toUpperCase()+i.slice(1),u=d.length;u--;)if(i=d[u]+h,i in p)return i}function m(i){var h=l.cssProps[i]||r[i];return h||(i in p?i:r[i]=c(i)||i)}return m}.apply(y,g),o!==void 0&&(P.exports=o)},8326:(P,y,a)=>{var g,o;g=[a(2884),a(6)],o=function(n){"use strict";n.expr.pseudos.hidden=function(l){return!n.expr.pseudos.visible(l)},n.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)}}.apply(y,g),o!==void 0&&(P.exports=o)},470:(P,y,a)=>{var g,o;g=[a(2884),a(698),a(3120)],o=function(n,l,d){"use strict";var p={};function r(m){var i,h=m.ownerDocument,u=m.nodeName,f=p[u];return f||(i=h.body.appendChild(h.createElement(u)),f=n.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),p[u]=f,f)}function c(m,i){for(var h,u,f=[],S=0,v=m.length;S<v;S++)u=m[S],u.style&&(h=u.style.display,i?(h==="none"&&(f[S]=l.get(u,"display")||null,f[S]||(u.style.display="")),u.style.display===""&&d(u)&&(f[S]=r(u))):h!=="none"&&(f[S]="none",l.set(u,"display",h)));for(S=0;S<v;S++)f[S]!=null&&(m[S].style.display=f[S]);return m}return n.fn.extend({show:function(){return c(this,!0)},hide:function(){return c(this)},toggle:function(m){return typeof m=="boolean"?m?this.show():this.hide():this.each(function(){d(this)?n(this).show():n(this).hide()})}}),c}.apply(y,g),o!==void 0&&(P.exports=o)},1567:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(893),a(9343)],o=function(n,l,d,p){"use strict";return function(){function r(){if(!!b){v.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",d.appendChild(v).appendChild(b);var O=window.getComputedStyle(b);m=O.top!=="1%",S=c(O.marginLeft)===12,b.style.right="60%",u=c(O.right)===36,i=c(O.width)===36,b.style.position="absolute",h=c(b.offsetWidth/3)===12,d.removeChild(v),b=null}}function c(O){return Math.round(parseFloat(O))}var m,i,h,u,f,S,v=l.createElement("div"),b=l.createElement("div");!b.style||(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle=b.style.backgroundClip==="content-box",n.extend(p,{boxSizingReliable:function(){return r(),i},pixelBoxStyles:function(){return r(),u},pixelPosition:function(){return r(),m},reliableMarginLeft:function(){return r(),S},scrollboxSize:function(){return r(),h},reliableTrDimensions:function(){var O,E,N,T;return f==null&&(O=l.createElement("table"),E=l.createElement("tr"),N=l.createElement("div"),O.style.cssText="position:absolute;left:-11111px;border-collapse:separate",E.style.cssText="border:1px solid",E.style.height="1px",N.style.height="9px",N.style.display="block",d.appendChild(O).appendChild(E).appendChild(N),T=window.getComputedStyle(E),f=parseInt(T.height,10)+parseInt(T.borderTopWidth,10)+parseInt(T.borderBottomWidth,10)===E.offsetHeight,d.removeChild(O)),f}}))}(),p}.apply(y,g),o!==void 0&&(P.exports=o)},29:(P,y,a)=>{var g;g=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(y,a,y,P),g!==void 0&&(P.exports=g)},1089:(P,y,a)=>{var g;g=function(){"use strict";return function(o){var n=o.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(o)}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},3120:(P,y,a)=>{var g,o;g=[a(2884),a(1518)],o=function(n,l){"use strict";return function(d,p){return d=p||d,d.style.display==="none"||d.style.display===""&&l(d)&&n.css(d,"display")==="none"}}.apply(y,g),o!==void 0&&(P.exports=o)},5511:(P,y,a)=>{var g,o;g=[a(29)],o=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(y,g),o!==void 0&&(P.exports=o)},3045:(P,y,a)=>{var g,o;g=[a(5399)],o=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(y,g),o!==void 0&&(P.exports=o)},6439:(P,y,a)=>{var g;g=function(){"use strict";return function(o,n,l){var d,p,r={};for(p in n)r[p]=o.style[p],o.style[p]=n[p];d=l.call(o);for(p in n)o.style[p]=r[p];return d}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},8416:(P,y,a)=>{var g,o;g=[a(2884),a(8097),a(7232),a(698),a(640)],o=function(n,l,d,p,r){"use strict";var c=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,m=/[A-Z]/g;function i(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:c.test(u)?JSON.parse(u):u}function h(u,f,S){var v;if(S===void 0&&u.nodeType===1)if(v="data-"+f.replace(m,"-$&").toLowerCase(),S=u.getAttribute(v),typeof S=="string"){try{S=i(S)}catch(b){}r.set(u,f,S)}else S=void 0;return S}return n.extend({hasData:function(u){return r.hasData(u)||p.hasData(u)},data:function(u,f,S){return r.access(u,f,S)},removeData:function(u,f){r.remove(u,f)},_data:function(u,f,S){return p.access(u,f,S)},_removeData:function(u,f){p.remove(u,f)}}),n.fn.extend({data:function(u,f){var S,v,b,O=this[0],E=O&&O.attributes;if(u===void 0){if(this.length&&(b=r.get(O),O.nodeType===1&&!p.get(O,"hasDataAttrs"))){for(S=E.length;S--;)E[S]&&(v=E[S].name,v.indexOf("data-")===0&&(v=d(v.slice(5)),h(O,v,b[v])));p.set(O,"hasDataAttrs",!0)}return b}return typeof u=="object"?this.each(function(){r.set(this,u)}):l(this,function(N){var T;if(O&&N===void 0)return T=r.get(O,u),T!==void 0||(T=h(O,u),T!==void 0)?T:void 0;this.each(function(){r.set(this,u,N)})},null,f,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){r.remove(this,u)})}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},1523:(P,y,a)=>{var g,o;g=[a(2884),a(7232),a(1143),a(7098)],o=function(n,l,d,p){"use strict";function r(){this.expando=n.expando+r.uid++}return r.uid=1,r.prototype={cache:function(c){var m=c[this.expando];return m||(m={},p(c)&&(c.nodeType?c[this.expando]=m:Object.defineProperty(c,this.expando,{value:m,configurable:!0}))),m},set:function(c,m,i){var h,u=this.cache(c);if(typeof m=="string")u[l(m)]=i;else for(h in m)u[l(h)]=m[h];return u},get:function(c,m){return m===void 0?this.cache(c):c[this.expando]&&c[this.expando][l(m)]},access:function(c,m,i){return m===void 0||m&&typeof m=="string"&&i===void 0?this.get(c,m):(this.set(c,m,i),i!==void 0?i:m)},remove:function(c,m){var i,h=c[this.expando];if(h!==void 0){if(m!==void 0)for(Array.isArray(m)?m=m.map(l):(m=l(m),m=m in h?[m]:m.match(d)||[]),i=m.length;i--;)delete h[m[i]];(m===void 0||n.isEmptyObject(h))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var m=c[this.expando];return m!==void 0&&!n.isEmptyObject(m)}},r}.apply(y,g),o!==void 0&&(P.exports=o)},7098:(P,y,a)=>{var g;g=function(){"use strict";return function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},698:(P,y,a)=>{var g,o;g=[a(1523)],o=function(n){"use strict";return new n}.apply(y,g),o!==void 0&&(P.exports=o)},640:(P,y,a)=>{var g,o;g=[a(1523)],o=function(n){"use strict";return new n}.apply(y,g),o!==void 0&&(P.exports=o)},184:(P,y,a)=>{var g,o;g=[a(2884),a(9003),a(7502),a(7617)],o=function(n,l,d){"use strict";function p(m){return m}function r(m){throw m}function c(m,i,h,u){var f;try{m&&l(f=m.promise)?f.call(m).done(i).fail(h):m&&l(f=m.then)?f.call(m,i,h):i.apply(void 0,[m].slice(u))}catch(S){h.apply(void 0,[S])}}return n.extend({Deferred:function(m){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],h="pending",u={state:function(){return h},always:function(){return f.done(arguments).fail(arguments),this},catch:function(S){return u.then(null,S)},pipe:function(){var S=arguments;return n.Deferred(function(v){n.each(i,function(b,O){var E=l(S[O[4]])&&S[O[4]];f[O[1]](function(){var N=E&&E.apply(this,arguments);N&&l(N.promise)?N.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[O[0]+"With"](this,E?[N]:arguments)})}),S=null}).promise()},then:function(S,v,b){var O=0;function E(N,T,A,R){return function(){var M=this,x=arguments,_=function(){var U,k;if(!(N<O)){if(U=A.apply(M,x),U===T.promise())throw new TypeError("Thenable self-resolution");k=U&&(typeof U=="object"||typeof U=="function")&&U.then,l(k)?R?k.call(U,E(O,T,p,R),E(O,T,r,R)):(O++,k.call(U,E(O,T,p,R),E(O,T,r,R),E(O,T,p,T.notifyWith))):(A!==p&&(M=void 0,x=[U]),(R||T.resolveWith)(M,x))}},L=R?_:function(){try{_()}catch(U){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(U,L.stackTrace),N+1>=O&&(A!==r&&(M=void 0,x=[U]),T.rejectWith(M,x))}};N?L():(n.Deferred.getStackHook&&(L.stackTrace=n.Deferred.getStackHook()),window.setTimeout(L))}}return n.Deferred(function(N){i[0][3].add(E(0,N,l(b)?b:p,N.notifyWith)),i[1][3].add(E(0,N,l(S)?S:p)),i[2][3].add(E(0,N,l(v)?v:r))}).promise()},promise:function(S){return S!=null?n.extend(S,u):u}},f={};return n.each(i,function(S,v){var b=v[2],O=v[5];u[v[1]]=b.add,O&&b.add(function(){h=O},i[3-S][2].disable,i[3-S][3].disable,i[0][2].lock,i[0][3].lock),b.add(v[3].fire),f[v[0]]=function(){return f[v[0]+"With"](this===f?void 0:this,arguments),this},f[v[0]+"With"]=b.fireWith}),u.promise(f),m&&m.call(f,f),f},when:function(m){var i=arguments.length,h=i,u=Array(h),f=d.call(arguments),S=n.Deferred(),v=function(b){return function(O){u[b]=this,f[b]=arguments.length>1?d.call(arguments):O,--i||S.resolveWith(u,f)}};if(i<=1&&(c(m,S.done(v(h)).resolve,S.reject,!i),S.state()==="pending"||l(f[h]&&f[h].then)))return S.then();for(;h--;)c(f[h],v(h),S.reject);return S.promise()}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},3615:(P,y,a)=>{var g,o;g=[a(2884),a(184)],o=function(n){"use strict";var l=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(d,p){window.console&&window.console.warn&&d&&l.test(d.name)&&window.console.warn("jQuery.Deferred exception: "+d.message,d.stack,p)}}.apply(y,g),o!==void 0&&(P.exports=o)},1900:(P,y,a)=>{var g,o;g=[a(2884),a(7031),a(7232),a(1401),a(9003),a(9011),a(7502),a(336),a(4333)],o=function(n,l,d,p,r,c,m){"use strict";var i=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;n.proxy=function(h,u){var f,S,v;if(typeof u=="string"&&(f=h[u],u=h,h=f),!!r(h))return S=m.call(arguments,2),v=function(){return h.apply(u||this,S.concat(m.call(arguments)))},v.guid=h.guid=h.guid||n.guid++,v},n.holdReady=function(h){h?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=l,n.isFunction=r,n.isWindow=c,n.camelCase=d,n.type=p,n.now=Date.now,n.isNumeric=function(h){var u=n.type(h);return(u==="number"||u==="string")&&!isNaN(h-parseFloat(h))},n.trim=function(h){return h==null?"":(h+"").replace(i,"")}}.apply(y,g),o!==void 0&&(P.exports=o)},336:(P,y,a)=>{var g,o;g=[a(2884),a(1450),a(5957)],o=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,d){n.fn[d]=function(p){return this.on(d,p)}})}.apply(y,g),o!==void 0&&(P.exports=o)},4333:(P,y,a)=>{var g,o;g=[a(2884),a(5957),a(2075)],o=function(n){"use strict";n.fn.extend({bind:function(l,d,p){return this.on(l,null,d,p)},unbind:function(l,d){return this.off(l,null,d)},delegate:function(l,d,p,r){return this.on(d,l,p,r)},undelegate:function(l,d,p){return arguments.length===1?this.off(l,"**"):this.off(d,l||"**",p)},hover:function(l,d){return this.mouseenter(l).mouseleave(d||l)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,d){n.fn[d]=function(p,r){return arguments.length>0?this.on(d,null,p,r):this.trigger(d)}})}.apply(y,g),o!==void 0&&(P.exports=o)},3514:(P,y,a)=>{var g,o;g=[a(2884),a(8097),a(9011),a(7154)],o=function(n,l,d){"use strict";return n.each({Height:"height",Width:"width"},function(p,r){n.each({padding:"inner"+p,content:r,"":"outer"+p},function(c,m){n.fn[m]=function(i,h){var u=arguments.length&&(c||typeof i!="boolean"),f=c||(i===!0||h===!0?"margin":"border");return l(this,function(S,v,b){var O;return d(S)?m.indexOf("outer")===0?S["inner"+p]:S.document.documentElement["client"+p]:S.nodeType===9?(O=S.documentElement,Math.max(S.body["scroll"+p],O["scroll"+p],S.body["offset"+p],O["offset"+p],O["client"+p])):b===void 0?n.css(S,v,f):n.style(S,v,b,f)},r,u?i:void 0,u)}})}),n}.apply(y,g),o!==void 0&&(P.exports=o)},8331:(P,y,a)=>{var g,o;g=[a(2884),a(7232),a(7749),a(9003),a(1286),a(1143),a(29),a(3120),a(320),a(698),a(470),a(6365),a(8174),a(184),a(7392),a(5599),a(7154),a(4881)],o=function(n,l,d,p,r,c,m,i,h,u,f){"use strict";var S,v,b=/^(?:toggle|show|hide)$/,O=/queueHooks$/;function E(){v&&(d.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,n.fx.interval),n.fx.tick())}function N(){return window.setTimeout(function(){S=void 0}),S=Date.now()}function T(_,L){var U,k=0,z={height:_};for(L=L?1:0;k<4;k+=2-L)U=m[k],z["margin"+U]=z["padding"+U]=_;return L&&(z.opacity=z.width=_),z}function A(_,L,U){for(var k,z=(x.tweeners[L]||[]).concat(x.tweeners["*"]),B=0,H=z.length;B<H;B++)if(k=z[B].call(U,L,_))return k}function R(_,L,U){var k,z,B,H,j,q,V,ne,ae="width"in L||"height"in L,de=this,te={},ge=_.style,Ce=_.nodeType&&i(_),Fe=u.get(_,"fxshow");U.queue||(H=n._queueHooks(_,"fx"),H.unqueued==null&&(H.unqueued=0,j=H.empty.fire,H.empty.fire=function(){H.unqueued||j()}),H.unqueued++,de.always(function(){de.always(function(){H.unqueued--,n.queue(_,"fx").length||H.empty.fire()})}));for(k in L)if(z=L[k],b.test(z)){if(delete L[k],B=B||z==="toggle",z===(Ce?"hide":"show"))if(z==="show"&&Fe&&Fe[k]!==void 0)Ce=!0;else continue;te[k]=Fe&&Fe[k]||n.style(_,k)}if(q=!n.isEmptyObject(L),!(!q&&n.isEmptyObject(te))){ae&&_.nodeType===1&&(U.overflow=[ge.overflow,ge.overflowX,ge.overflowY],V=Fe&&Fe.display,V==null&&(V=u.get(_,"display")),ne=n.css(_,"display"),ne==="none"&&(V?ne=V:(f([_],!0),V=_.style.display||V,ne=n.css(_,"display"),f([_]))),(ne==="inline"||ne==="inline-block"&&V!=null)&&n.css(_,"float")==="none"&&(q||(de.done(function(){ge.display=V}),V==null&&(ne=ge.display,V=ne==="none"?"":ne)),ge.display="inline-block")),U.overflow&&(ge.overflow="hidden",de.always(function(){ge.overflow=U.overflow[0],ge.overflowX=U.overflow[1],ge.overflowY=U.overflow[2]})),q=!1;for(k in te)q||(Fe?"hidden"in Fe&&(Ce=Fe.hidden):Fe=u.access(_,"fxshow",{display:V}),B&&(Fe.hidden=!Ce),Ce&&f([_],!0),de.done(function(){Ce||f([_]),u.remove(_,"fxshow");for(k in te)n.style(_,k,te[k])})),q=A(Ce?Fe[k]:0,k,de),k in Fe||(Fe[k]=q.start,Ce&&(q.end=q.start,q.start=0))}}function M(_,L){var U,k,z,B,H;for(U in _)if(k=l(U),z=L[k],B=_[U],Array.isArray(B)&&(z=B[1],B=_[U]=B[0]),U!==k&&(_[k]=B,delete _[U]),H=n.cssHooks[k],H&&"expand"in H){B=H.expand(B),delete _[k];for(U in B)U in _||(_[U]=B[U],L[U]=z)}else L[k]=z}function x(_,L,U){var k,z,B=0,H=x.prefilters.length,j=n.Deferred().always(function(){delete q.elem}),q=function(){if(z)return!1;for(var ae=S||N(),de=Math.max(0,V.startTime+V.duration-ae),te=de/V.duration||0,ge=1-te,Ce=0,Fe=V.tweens.length;Ce<Fe;Ce++)V.tweens[Ce].run(ge);return j.notifyWith(_,[V,ge,de]),ge<1&&Fe?de:(Fe||j.notifyWith(_,[V,1,0]),j.resolveWith(_,[V]),!1)},V=j.promise({elem:_,props:n.extend({},L),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},U),originalProperties:L,originalOptions:U,startTime:S||N(),duration:U.duration,tweens:[],createTween:function(ae,de){var te=n.Tween(_,V.opts,ae,de,V.opts.specialEasing[ae]||V.opts.easing);return V.tweens.push(te),te},stop:function(ae){var de=0,te=ae?V.tweens.length:0;if(z)return this;for(z=!0;de<te;de++)V.tweens[de].run(1);return ae?(j.notifyWith(_,[V,1,0]),j.resolveWith(_,[V,ae])):j.rejectWith(_,[V,ae]),this}}),ne=V.props;for(M(ne,V.opts.specialEasing);B<H;B++)if(k=x.prefilters[B].call(V,_,ne,V.opts),k)return p(k.stop)&&(n._queueHooks(V.elem,V.opts.queue).stop=k.stop.bind(k)),k;return n.map(ne,A,V),p(V.opts.start)&&V.opts.start.call(_,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),n.fx.timer(n.extend(q,{elem:_,anim:V,queue:V.opts.queue})),V}return n.Animation=n.extend(x,{tweeners:{"*":[function(_,L){var U=this.createTween(_,L);return h(U.elem,_,r.exec(L),U),U}]},tweener:function(_,L){p(_)?(L=_,_=["*"]):_=_.match(c);for(var U,k=0,z=_.length;k<z;k++)U=_[k],x.tweeners[U]=x.tweeners[U]||[],x.tweeners[U].unshift(L)},prefilters:[R],prefilter:function(_,L){L?x.prefilters.unshift(_):x.prefilters.push(_)}}),n.speed=function(_,L,U){var k=_&&typeof _=="object"?n.extend({},_):{complete:U||!U&&L||p(_)&&_,duration:_,easing:U&&L||L&&!p(L)&&L};return n.fx.off?k.duration=0:typeof k.duration!="number"&&(k.duration in n.fx.speeds?k.duration=n.fx.speeds[k.duration]:k.duration=n.fx.speeds._default),(k.queue==null||k.queue===!0)&&(k.queue="fx"),k.old=k.complete,k.complete=function(){p(k.old)&&k.old.call(this),k.queue&&n.dequeue(this,k.queue)},k},n.fn.extend({fadeTo:function(_,L,U,k){return this.filter(i).css("opacity",0).show().end().animate({opacity:L},_,U,k)},animate:function(_,L,U,k){var z=n.isEmptyObject(_),B=n.speed(L,U,k),H=function(){var j=x(this,n.extend({},_),B);(z||u.get(this,"finish"))&&j.stop(!0)};return H.finish=H,z||B.queue===!1?this.each(H):this.queue(B.queue,H)},stop:function(_,L,U){var k=function(z){var B=z.stop;delete z.stop,B(U)};return typeof _!="string"&&(U=L,L=_,_=void 0),L&&this.queue(_||"fx",[]),this.each(function(){var z=!0,B=_!=null&&_+"queueHooks",H=n.timers,j=u.get(this);if(B)j[B]&&j[B].stop&&k(j[B]);else for(B in j)j[B]&&j[B].stop&&O.test(B)&&k(j[B]);for(B=H.length;B--;)H[B].elem===this&&(_==null||H[B].queue===_)&&(H[B].anim.stop(U),z=!1,H.splice(B,1));(z||!U)&&n.dequeue(this,_)})},finish:function(_){return _!==!1&&(_=_||"fx"),this.each(function(){var L,U=u.get(this),k=U[_+"queue"],z=U[_+"queueHooks"],B=n.timers,H=k?k.length:0;for(U.finish=!0,n.queue(this,_,[]),z&&z.stop&&z.stop.call(this,!0),L=B.length;L--;)B[L].elem===this&&B[L].queue===_&&(B[L].anim.stop(!0),B.splice(L,1));for(L=0;L<H;L++)k[L]&&k[L].finish&&k[L].finish.call(this);delete U.finish})}}),n.each(["toggle","show","hide"],function(_,L){var U=n.fn[L];n.fn[L]=function(k,z,B){return k==null||typeof k=="boolean"?U.apply(this,arguments):this.animate(T(L,!0),k,z,B)}}),n.each({slideDown:T("show"),slideUp:T("hide"),slideToggle:T("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(_,L){n.fn[_]=function(U,k,z){return this.animate(L,U,k,z)}}),n.timers=[],n.fx.tick=function(){var _,L=0,U=n.timers;for(S=Date.now();L<U.length;L++)_=U[L],!_()&&U[L]===_&&U.splice(L--,1);U.length||n.fx.stop(),S=void 0},n.fx.timer=function(_){n.timers.push(_),n.fx.start()},n.fx.interval=13,n.fx.start=function(){v||(v=!0,E())},n.fx.stop=function(){v=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(y,g),o!==void 0&&(P.exports=o)},4881:(P,y,a)=>{var g,o;g=[a(2884),a(2137),a(7154)],o=function(n,l){"use strict";function d(p,r,c,m,i){return new d.prototype.init(p,r,c,m,i)}n.Tween=d,d.prototype={constructor:d,init:function(p,r,c,m,i,h){this.elem=p,this.prop=c,this.easing=i||n.easing._default,this.options=r,this.start=this.now=this.cur(),this.end=m,this.unit=h||(n.cssNumber[c]?"":"px")},cur:function(){var p=d.propHooks[this.prop];return p&&p.get?p.get(this):d.propHooks._default.get(this)},run:function(p){var r,c=d.propHooks[this.prop];return this.options.duration?this.pos=r=n.easing[this.easing](p,this.options.duration*p,0,1,this.options.duration):this.pos=r=p,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):d.propHooks._default.set(this),this}},d.prototype.init.prototype=d.prototype,d.propHooks={_default:{get:function(p){var r;return p.elem.nodeType!==1||p.elem[p.prop]!=null&&p.elem.style[p.prop]==null?p.elem[p.prop]:(r=n.css(p.elem,p.prop,""),!r||r==="auto"?0:r)},set:function(p){n.fx.step[p.prop]?n.fx.step[p.prop](p):p.elem.nodeType===1&&(n.cssHooks[p.prop]||p.elem.style[l(p.prop)]!=null)?n.style(p.elem,p.prop,p.now+p.unit):p.elem[p.prop]=p.now}}},d.propHooks.scrollTop=d.propHooks.scrollLeft={set:function(p){p.elem.nodeType&&p.elem.parentNode&&(p.elem[p.prop]=p.now)}},n.easing={linear:function(p){return p},swing:function(p){return .5-Math.cos(p*Math.PI)/2},_default:"swing"},n.fx=d.prototype.init,n.fx.step={}}.apply(y,g),o!==void 0&&(P.exports=o)},7791:(P,y,a)=>{var g,o;g=[a(2884),a(6),a(8331)],o=function(n){"use strict";n.expr.pseudos.animated=function(l){return n.grep(n.timers,function(d){return l===d.elem}).length}}.apply(y,g),o!==void 0&&(P.exports=o)},5957:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(893),a(9003),a(1143),a(8451),a(7502),a(7098),a(698),a(7031),a(6365),a(6)],o=function(n,l,d,p,r,c,m,i,h,u){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function S(){return!0}function v(){return!1}function b(T,A){return T===O()==(A==="focus")}function O(){try{return l.activeElement}catch(T){}}function E(T,A,R,M,x,_){var L,U;if(typeof A=="object"){typeof R!="string"&&(M=M||R,R=void 0);for(U in A)E(T,U,R,M,A[U],_);return T}if(M==null&&x==null?(x=R,M=R=void 0):x==null&&(typeof R=="string"?(x=M,M=void 0):(x=M,M=R,R=void 0)),x===!1)x=v;else if(!x)return T;return _===1&&(L=x,x=function(k){return n().off(k),L.apply(this,arguments)},x.guid=L.guid||(L.guid=n.guid++)),T.each(function(){n.event.add(this,A,x,M,R)})}n.event={global:{},add:function(T,A,R,M,x){var _,L,U,k,z,B,H,j,q,V,ne,ae=h.get(T);if(!!i(T))for(R.handler&&(_=R,R=_.handler,x=_.selector),x&&n.find.matchesSelector(d,x),R.guid||(R.guid=n.guid++),(k=ae.events)||(k=ae.events=Object.create(null)),(L=ae.handle)||(L=ae.handle=function(de){return typeof n!="undefined"&&n.event.triggered!==de.type?n.event.dispatch.apply(T,arguments):void 0}),A=(A||"").match(r)||[""],z=A.length;z--;)U=f.exec(A[z])||[],q=ne=U[1],V=(U[2]||"").split(".").sort(),q&&(H=n.event.special[q]||{},q=(x?H.delegateType:H.bindType)||q,H=n.event.special[q]||{},B=n.extend({type:q,origType:ne,data:M,handler:R,guid:R.guid,selector:x,needsContext:x&&n.expr.match.needsContext.test(x),namespace:V.join(".")},_),(j=k[q])||(j=k[q]=[],j.delegateCount=0,(!H.setup||H.setup.call(T,M,V,L)===!1)&&T.addEventListener&&T.addEventListener(q,L)),H.add&&(H.add.call(T,B),B.handler.guid||(B.handler.guid=R.guid)),x?j.splice(j.delegateCount++,0,B):j.push(B),n.event.global[q]=!0)},remove:function(T,A,R,M,x){var _,L,U,k,z,B,H,j,q,V,ne,ae=h.hasData(T)&&h.get(T);if(!(!ae||!(k=ae.events))){for(A=(A||"").match(r)||[""],z=A.length;z--;){if(U=f.exec(A[z])||[],q=ne=U[1],V=(U[2]||"").split(".").sort(),!q){for(q in k)n.event.remove(T,q+A[z],R,M,!0);continue}for(H=n.event.special[q]||{},q=(M?H.delegateType:H.bindType)||q,j=k[q]||[],U=U[2]&&new RegExp("(^|\\.)"+V.join("\\.(?:.*\\.|)")+"(\\.|$)"),L=_=j.length;_--;)B=j[_],(x||ne===B.origType)&&(!R||R.guid===B.guid)&&(!U||U.test(B.namespace))&&(!M||M===B.selector||M==="**"&&B.selector)&&(j.splice(_,1),B.selector&&j.delegateCount--,H.remove&&H.remove.call(T,B));L&&!j.length&&((!H.teardown||H.teardown.call(T,V,ae.handle)===!1)&&n.removeEvent(T,q,ae.handle),delete k[q])}n.isEmptyObject(k)&&h.remove(T,"handle events")}},dispatch:function(T){var A,R,M,x,_,L,U=new Array(arguments.length),k=n.event.fix(T),z=(h.get(this,"events")||Object.create(null))[k.type]||[],B=n.event.special[k.type]||{};for(U[0]=k,A=1;A<arguments.length;A++)U[A]=arguments[A];if(k.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,k)===!1)){for(L=n.event.handlers.call(this,k,z),A=0;(x=L[A++])&&!k.isPropagationStopped();)for(k.currentTarget=x.elem,R=0;(_=x.handlers[R++])&&!k.isImmediatePropagationStopped();)(!k.rnamespace||_.namespace===!1||k.rnamespace.test(_.namespace))&&(k.handleObj=_,k.data=_.data,M=((n.event.special[_.origType]||{}).handle||_.handler).apply(x.elem,U),M!==void 0&&(k.result=M)===!1&&(k.preventDefault(),k.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,k),k.result}},handlers:function(T,A){var R,M,x,_,L,U=[],k=A.delegateCount,z=T.target;if(k&&z.nodeType&&!(T.type==="click"&&T.button>=1)){for(;z!==this;z=z.parentNode||this)if(z.nodeType===1&&!(T.type==="click"&&z.disabled===!0)){for(_=[],L={},R=0;R<k;R++)M=A[R],x=M.selector+" ",L[x]===void 0&&(L[x]=M.needsContext?n(x,this).index(z)>-1:n.find(x,this,null,[z]).length),L[x]&&_.push(M);_.length&&U.push({elem:z,handlers:_})}}return z=this,k<A.length&&U.push({elem:z,handlers:A.slice(k)}),U},addProp:function(T,A){Object.defineProperty(n.Event.prototype,T,{enumerable:!0,configurable:!0,get:p(A)?function(){if(this.originalEvent)return A(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[T]},set:function(R){Object.defineProperty(this,T,{enumerable:!0,configurable:!0,writable:!0,value:R})}})},fix:function(T){return T[n.expando]?T:new n.Event(T)},special:{load:{noBubble:!0},click:{setup:function(T){var A=this||T;return c.test(A.type)&&A.click&&u(A,"input")&&N(A,"click",S),!1},trigger:function(T){var A=this||T;return c.test(A.type)&&A.click&&u(A,"input")&&N(A,"click"),!0},_default:function(T){var A=T.target;return c.test(A.type)&&A.click&&u(A,"input")&&h.get(A,"click")||u(A,"a")}},beforeunload:{postDispatch:function(T){T.result!==void 0&&T.originalEvent&&(T.originalEvent.returnValue=T.result)}}}};function N(T,A,R){if(!R){h.get(T,A)===void 0&&n.event.add(T,A,S);return}h.set(T,A,!1),n.event.add(T,A,{namespace:!1,handler:function(M){var x,_,L=h.get(this,A);if(M.isTrigger&1&&this[A]){if(L.length)(n.event.special[A]||{}).delegateType&&M.stopPropagation();else if(L=m.call(arguments),h.set(this,A,L),x=R(this,A),this[A](),_=h.get(this,A),L!==_||x?h.set(this,A,!1):_={},L!==_)return M.stopImmediatePropagation(),M.preventDefault(),_&&_.value}else L.length&&(h.set(this,A,{value:n.event.trigger(n.extend(L[0],n.Event.prototype),L.slice(1),this)}),M.stopImmediatePropagation())}})}return n.removeEvent=function(T,A,R){T.removeEventListener&&T.removeEventListener(A,R)},n.Event=function(T,A){if(!(this instanceof n.Event))return new n.Event(T,A);T&&T.type?(this.originalEvent=T,this.type=T.type,this.isDefaultPrevented=T.defaultPrevented||T.defaultPrevented===void 0&&T.returnValue===!1?S:v,this.target=T.target&&T.target.nodeType===3?T.target.parentNode:T.target,this.currentTarget=T.currentTarget,this.relatedTarget=T.relatedTarget):this.type=T,A&&n.extend(this,A),this.timeStamp=T&&T.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v,isSimulated:!1,preventDefault:function(){var T=this.originalEvent;this.isDefaultPrevented=S,T&&!this.isSimulated&&T.preventDefault()},stopPropagation:function(){var T=this.originalEvent;this.isPropagationStopped=S,T&&!this.isSimulated&&T.stopPropagation()},stopImmediatePropagation:function(){var T=this.originalEvent;this.isImmediatePropagationStopped=S,T&&!this.isSimulated&&T.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(T,A){n.event.special[T]={setup:function(){return N(this,T,b),!1},trigger:function(){return N(this,T),!0},_default:function(){return!0},delegateType:A}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(T,A){n.event.special[T]={delegateType:A,bindType:A,handle:function(R){var M,x=this,_=R.relatedTarget,L=R.handleObj;return(!_||_!==x&&!n.contains(x,_))&&(R.type=L.origType,M=L.handler.apply(this,arguments),R.type=A),M}}}),n.fn.extend({on:function(T,A,R,M){return E(this,T,A,R,M)},one:function(T,A,R,M){return E(this,T,A,R,M,1)},off:function(T,A,R){var M,x;if(T&&T.preventDefault&&T.handleObj)return M=T.handleObj,n(T.delegateTarget).off(M.namespace?M.origType+"."+M.namespace:M.origType,M.selector,M.handler),this;if(typeof T=="object"){for(x in T)this.off(x,A,T[x]);return this}return(A===!1||typeof A=="function")&&(R=A,A=void 0),R===!1&&(R=v),this.each(function(){n.event.remove(this,T,R,A)})}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},3277:(P,y,a)=>{var g,o;g=[a(2884),a(698),a(9224),a(5957),a(2075)],o=function(n,l,d){"use strict";return d.focusin||n.each({focus:"focusin",blur:"focusout"},function(p,r){var c=function(m){n.event.simulate(r,m.target,n.event.fix(m))};n.event.special[r]={setup:function(){var m=this.ownerDocument||this.document||this,i=l.access(m,r);i||m.addEventListener(p,c,!0),l.access(m,r,(i||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,i=l.access(m,r)-1;i?l.access(m,r,i):(m.removeEventListener(p,c,!0),l.remove(m,r))}}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},9224:(P,y,a)=>{var g,o;g=[a(9343)],o=function(n){"use strict";return n.focusin="onfocusin"in window,n}.apply(y,g),o!==void 0&&(P.exports=o)},2075:(P,y,a)=>{var g,o;g=[a(2884),a(7749),a(698),a(7098),a(939),a(9003),a(9011),a(5957)],o=function(n,l,d,p,r,c,m){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,h=function(u){u.stopPropagation()};return n.extend(n.event,{trigger:function(u,f,S,v){var b,O,E,N,T,A,R,M,x=[S||l],_=r.call(u,"type")?u.type:u,L=r.call(u,"namespace")?u.namespace.split("."):[];if(O=M=E=S=S||l,!(S.nodeType===3||S.nodeType===8)&&!i.test(_+n.event.triggered)&&(_.indexOf(".")>-1&&(L=_.split("."),_=L.shift(),L.sort()),T=_.indexOf(":")<0&&"on"+_,u=u[n.expando]?u:new n.Event(_,typeof u=="object"&&u),u.isTrigger=v?2:3,u.namespace=L.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=S),f=f==null?[u]:n.makeArray(f,[u]),R=n.event.special[_]||{},!(!v&&R.trigger&&R.trigger.apply(S,f)===!1))){if(!v&&!R.noBubble&&!m(S)){for(N=R.delegateType||_,i.test(N+_)||(O=O.parentNode);O;O=O.parentNode)x.push(O),E=O;E===(S.ownerDocument||l)&&x.push(E.defaultView||E.parentWindow||window)}for(b=0;(O=x[b++])&&!u.isPropagationStopped();)M=O,u.type=b>1?N:R.bindType||_,A=(d.get(O,"events")||Object.create(null))[u.type]&&d.get(O,"handle"),A&&A.apply(O,f),A=T&&O[T],A&&A.apply&&p(O)&&(u.result=A.apply(O,f),u.result===!1&&u.preventDefault());return u.type=_,!v&&!u.isDefaultPrevented()&&(!R._default||R._default.apply(x.pop(),f)===!1)&&p(S)&&T&&c(S[_])&&!m(S)&&(E=S[T],E&&(S[T]=null),n.event.triggered=_,u.isPropagationStopped()&&M.addEventListener(_,h),S[_](),u.isPropagationStopped()&&M.removeEventListener(_,h),n.event.triggered=void 0,E&&(S[T]=E)),u.result}},simulate:function(u,f,S){var v=n.extend(new n.Event,S,{type:u,isSimulated:!0});n.event.trigger(v,null,f)}}),n.fn.extend({trigger:function(u,f){return this.each(function(){n.event.trigger(u,f,this)})},triggerHandler:function(u,f){var S=this[0];if(S)return n.event.trigger(u,f,S,!0)}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},6909:(P,y,a)=>{var g,o,g,o;g=[a(2884)],o=function(n){"use strict";g=[],o=function(){return n}.apply(y,g),o!==void 0&&(P.exports=o)}.apply(y,g),o!==void 0&&(P.exports=o)},2851:(P,y,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";var l=window.jQuery,d=window.$;n.noConflict=function(p){return window.$===n&&(window.$=d),p&&window.jQuery===n&&(window.jQuery=l),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(y,g),o!==void 0&&(P.exports=o)},5814:(P,y,a)=>{var g,o;g=[a(2884),a(6),a(7392),a(7617),a(184),a(3615),a(7644),a(8416),a(8174),a(2706),a(4437),a(5957),a(3277),a(5599),a(6399),a(7647),a(7154),a(8326),a(4492),a(1450),a(2371),a(719),a(3632),a(4182),a(6073),a(5461),a(8331),a(7791),a(6828),a(3514),a(1900),a(6909),a(2851)],o=function(n){"use strict";return n}.apply(y,g),o!==void 0&&(P.exports=o)},5599:(P,y,a)=>{var g,o;g=[a(2884),a(1518),a(1429),a(9003),a(5896),a(8451),a(8097),a(9109),a(2619),a(6747),a(5385),a(273),a(6753),a(5464),a(698),a(640),a(7098),a(4835),a(7031),a(6365),a(7392),a(6),a(5957)],o=function(n,l,d,p,r,c,m,i,h,u,f,S,v,b,O,E,N,T,A){"use strict";var R=/<script|<style|<link/i,M=/checked\s*(?:[^=]|=\s*.checked.)/i,x=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function _(j,q){return A(j,"table")&&A(q.nodeType!==11?q:q.firstChild,"tr")&&n(j).children("tbody")[0]||j}function L(j){return j.type=(j.getAttribute("type")!==null)+"/"+j.type,j}function U(j){return(j.type||"").slice(0,5)==="true/"?j.type=j.type.slice(5):j.removeAttribute("type"),j}function k(j,q){var V,ne,ae,de,te,ge,Ce;if(q.nodeType===1){if(O.hasData(j)&&(de=O.get(j),Ce=de.events,Ce)){O.remove(q,"handle events");for(ae in Ce)for(V=0,ne=Ce[ae].length;V<ne;V++)n.event.add(q,ae,Ce[ae][V])}E.hasData(j)&&(te=E.access(j),ge=n.extend({},te),E.set(q,ge))}}function z(j,q){var V=q.nodeName.toLowerCase();V==="input"&&c.test(j.type)?q.checked=j.checked:(V==="input"||V==="textarea")&&(q.defaultValue=j.defaultValue)}function B(j,q,V,ne){q=d(q);var ae,de,te,ge,Ce,Fe,it=0,mt=j.length,ut=mt-1,ht=q[0],At=p(ht);if(At||mt>1&&typeof ht=="string"&&!b.checkClone&&M.test(ht))return j.each(function(Re){var Ct=j.eq(Re);At&&(q[0]=ht.call(this,Re,Ct.html())),B(Ct,q,V,ne)});if(mt&&(ae=v(q,j[0].ownerDocument,!1,j,ne),de=ae.firstChild,ae.childNodes.length===1&&(ae=de),de||ne)){for(te=n.map(f(ae,"script"),L),ge=te.length;it<mt;it++)Ce=ae,it!==ut&&(Ce=n.clone(Ce,!0,!0),ge&&n.merge(te,f(Ce,"script"))),V.call(j[it],Ce,it);if(ge)for(Fe=te[te.length-1].ownerDocument,n.map(te,U),it=0;it<ge;it++)Ce=te[it],h.test(Ce.type||"")&&!O.access(Ce,"globalEval")&&n.contains(Fe,Ce)&&(Ce.src&&(Ce.type||"").toLowerCase()!=="module"?n._evalUrl&&!Ce.noModule&&n._evalUrl(Ce.src,{nonce:Ce.nonce||Ce.getAttribute("nonce")},Fe):T(Ce.textContent.replace(x,""),Ce,Fe))}return j}function H(j,q,V){for(var ne,ae=q?n.filter(q,j):j,de=0;(ne=ae[de])!=null;de++)!V&&ne.nodeType===1&&n.cleanData(f(ne)),ne.parentNode&&(V&&l(ne)&&S(f(ne,"script")),ne.parentNode.removeChild(ne));return j}return n.extend({htmlPrefilter:function(j){return j},clone:function(j,q,V){var ne,ae,de,te,ge=j.cloneNode(!0),Ce=l(j);if(!b.noCloneChecked&&(j.nodeType===1||j.nodeType===11)&&!n.isXMLDoc(j))for(te=f(ge),de=f(j),ne=0,ae=de.length;ne<ae;ne++)z(de[ne],te[ne]);if(q)if(V)for(de=de||f(j),te=te||f(ge),ne=0,ae=de.length;ne<ae;ne++)k(de[ne],te[ne]);else k(j,ge);return te=f(ge,"script"),te.length>0&&S(te,!Ce&&f(j,"script")),ge},cleanData:function(j){for(var q,V,ne,ae=n.event.special,de=0;(V=j[de])!==void 0;de++)if(N(V)){if(q=V[O.expando]){if(q.events)for(ne in q.events)ae[ne]?n.event.remove(V,ne):n.removeEvent(V,ne,q.handle);V[O.expando]=void 0}V[E.expando]&&(V[E.expando]=void 0)}}}),n.fn.extend({detach:function(j){return H(this,j,!0)},remove:function(j){return H(this,j)},text:function(j){return m(this,function(q){return q===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=q)})},null,j,arguments.length)},append:function(){return B(this,arguments,function(j){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=_(this,j);q.appendChild(j)}})},prepend:function(){return B(this,arguments,function(j){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=_(this,j);q.insertBefore(j,q.firstChild)}})},before:function(){return B(this,arguments,function(j){this.parentNode&&this.parentNode.insertBefore(j,this)})},after:function(){return B(this,arguments,function(j){this.parentNode&&this.parentNode.insertBefore(j,this.nextSibling)})},empty:function(){for(var j,q=0;(j=this[q])!=null;q++)j.nodeType===1&&(n.cleanData(f(j,!1)),j.textContent="");return this},clone:function(j,q){return j=j==null?!1:j,q=q==null?j:q,this.map(function(){return n.clone(this,j,q)})},html:function(j){return m(this,function(q){var V=this[0]||{},ne=0,ae=this.length;if(q===void 0&&V.nodeType===1)return V.innerHTML;if(typeof q=="string"&&!R.test(q)&&!u[(i.exec(q)||["",""])[1].toLowerCase()]){q=n.htmlPrefilter(q);try{for(;ne<ae;ne++)V=this[ne]||{},V.nodeType===1&&(n.cleanData(f(V,!1)),V.innerHTML=q);V=0}catch(de){}}V&&this.empty().append(q)},null,j,arguments.length)},replaceWith:function(){var j=[];return B(this,arguments,function(q){var V=this.parentNode;n.inArray(this,j)<0&&(n.cleanData(f(this)),V&&V.replaceChild(q,this))},j)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(j,q){n.fn[j]=function(V){for(var ne,ae=[],de=n(V),te=de.length-1,ge=0;ge<=te;ge++)ne=ge===te?this:this.clone(!0),n(de[ge])[q](ne),r.apply(ae,ne.get());return this.pushStack(ae)}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},6399:(P,y,a)=>{var g,o;g=[a(1450)],o=function(n){"use strict";return n._evalUrl=function(l,d,p){return n.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(r){n.globalEval(r,d,p)}})},n._evalUrl}.apply(y,g),o!==void 0&&(P.exports=o)},6753:(P,y,a)=>{var g,o;g=[a(2884),a(1401),a(1518),a(9109),a(2619),a(6747),a(5385),a(273)],o=function(n,l,d,p,r,c,m,i){"use strict";var h=/<|&#?\w+;/;function u(f,S,v,b,O){for(var E,N,T,A,R,M,x=S.createDocumentFragment(),_=[],L=0,U=f.length;L<U;L++)if(E=f[L],E||E===0)if(l(E)==="object")n.merge(_,E.nodeType?[E]:E);else if(!h.test(E))_.push(S.createTextNode(E));else{for(N=N||x.appendChild(S.createElement("div")),T=(p.exec(E)||["",""])[1].toLowerCase(),A=c[T]||c._default,N.innerHTML=A[1]+n.htmlPrefilter(E)+A[2],M=A[0];M--;)N=N.lastChild;n.merge(_,N.childNodes),N=x.firstChild,N.textContent=""}for(x.textContent="",L=0;E=_[L++];){if(b&&n.inArray(E,b)>-1){O&&O.push(E);continue}if(R=d(E),N=m(x.appendChild(E),"script"),R&&i(N),v)for(M=0;E=N[M++];)r.test(E.type||"")&&v.push(E)}return x}return u}.apply(y,g),o!==void 0&&(P.exports=o)},5385:(P,y,a)=>{var g,o;g=[a(2884),a(7031)],o=function(n,l){"use strict";function d(p,r){var c;return typeof p.getElementsByTagName!="undefined"?c=p.getElementsByTagName(r||"*"):typeof p.querySelectorAll!="undefined"?c=p.querySelectorAll(r||"*"):c=[],r===void 0||r&&l(p,r)?n.merge([p],c):c}return d}.apply(y,g),o!==void 0&&(P.exports=o)},273:(P,y,a)=>{var g,o;g=[a(698)],o=function(n){"use strict";function l(d,p){for(var r=0,c=d.length;r<c;r++)n.set(d[r],"globalEval",!p||n.get(p[r],"globalEval"))}return l}.apply(y,g),o!==void 0&&(P.exports=o)},5464:(P,y,a)=>{var g,o;g=[a(7749),a(9343)],o=function(n,l){"use strict";return function(){var d=n.createDocumentFragment(),p=d.appendChild(n.createElement("div")),r=n.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),p.appendChild(r),l.checkClone=p.cloneNode(!0).cloneNode(!0).lastChild.checked,p.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!p.cloneNode(!0).lastChild.defaultValue,p.innerHTML="<option></option>",l.option=!!p.lastChild}(),l}.apply(y,g),o!==void 0&&(P.exports=o)},2619:(P,y,a)=>{var g;g=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(y,a,y,P),g!==void 0&&(P.exports=g)},9109:(P,y,a)=>{var g;g=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(y,a,y,P),g!==void 0&&(P.exports=g)},6747:(P,y,a)=>{var g,o;g=[a(5464)],o=function(n){"use strict";var l={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return l.tbody=l.tfoot=l.colgroup=l.caption=l.thead,l.th=l.td,n.option||(l.optgroup=l.option=[1,"<select multiple='multiple'>","</select>"]),l}.apply(y,g),o!==void 0&&(P.exports=o)},6828:(P,y,a)=>{var g,o;g=[a(2884),a(8097),a(893),a(9003),a(3045),a(4015),a(1353),a(1567),a(9011),a(6365),a(7154),a(6)],o=function(n,l,d,p,r,c,m,i,h){"use strict";return n.offset={setOffset:function(u,f,S){var v,b,O,E,N,T,A,R=n.css(u,"position"),M=n(u),x={};R==="static"&&(u.style.position="relative"),N=M.offset(),O=n.css(u,"top"),T=n.css(u,"left"),A=(R==="absolute"||R==="fixed")&&(O+T).indexOf("auto")>-1,A?(v=M.position(),E=v.top,b=v.left):(E=parseFloat(O)||0,b=parseFloat(T)||0),p(f)&&(f=f.call(u,S,n.extend({},N))),f.top!=null&&(x.top=f.top-N.top+E),f.left!=null&&(x.left=f.left-N.left+b),"using"in f?f.using.call(u,x):M.css(x)}},n.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(b){n.offset.setOffset(this,u,b)});var f,S,v=this[0];if(!!v)return v.getClientRects().length?(f=v.getBoundingClientRect(),S=v.ownerDocument.defaultView,{top:f.top+S.pageYOffset,left:f.left+S.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var u,f,S,v=this[0],b={top:0,left:0};if(n.css(v,"position")==="fixed")f=v.getBoundingClientRect();else{for(f=this.offset(),S=v.ownerDocument,u=v.offsetParent||S.documentElement;u&&(u===S.body||u===S.documentElement)&&n.css(u,"position")==="static";)u=u.parentNode;u&&u!==v&&u.nodeType===1&&(b=n(u).offset(),b.top+=n.css(u,"borderTopWidth",!0),b.left+=n.css(u,"borderLeftWidth",!0))}return{top:f.top-b.top-n.css(v,"marginTop",!0),left:f.left-b.left-n.css(v,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&n.css(u,"position")==="static";)u=u.offsetParent;return u||d})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,f){var S=f==="pageYOffset";n.fn[u]=function(v){return l(this,function(b,O,E){var N;if(h(b)?N=b:b.nodeType===9&&(N=b.defaultView),E===void 0)return N?N[f]:b[O];N?N.scrollTo(S?N.pageXOffset:E,S?E:N.pageYOffset):b[O]=E},u,v,arguments.length)}}),n.each(["top","left"],function(u,f){n.cssHooks[f]=m(i.pixelPosition,function(S,v){if(v)return v=c(S,f),r.test(v)?n(S).position()[f]+"px":v})}),n}.apply(y,g),o!==void 0&&(P.exports=o)},8174:(P,y,a)=>{var g,o;g=[a(2884),a(698),a(184),a(7617)],o=function(n,l){"use strict";return n.extend({queue:function(d,p,r){var c;if(d)return p=(p||"fx")+"queue",c=l.get(d,p),r&&(!c||Array.isArray(r)?c=l.access(d,p,n.makeArray(r)):c.push(r)),c||[]},dequeue:function(d,p){p=p||"fx";var r=n.queue(d,p),c=r.length,m=r.shift(),i=n._queueHooks(d,p),h=function(){n.dequeue(d,p)};m==="inprogress"&&(m=r.shift(),c--),m&&(p==="fx"&&r.unshift("inprogress"),delete i.stop,m.call(d,h,i)),!c&&i&&i.empty.fire()},_queueHooks:function(d,p){var r=p+"queueHooks";return l.get(d,r)||l.access(d,r,{empty:n.Callbacks("once memory").add(function(){l.remove(d,[p+"queue",r])})})}}),n.fn.extend({queue:function(d,p){var r=2;return typeof d!="string"&&(p=d,d="fx",r--),arguments.length<r?n.queue(this[0],d):p===void 0?this:this.each(function(){var c=n.queue(this,d,p);n._queueHooks(this,d),d==="fx"&&c[0]!=="inprogress"&&n.dequeue(this,d)})},dequeue:function(d){return this.each(function(){n.dequeue(this,d)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(d,p){var r,c=1,m=n.Deferred(),i=this,h=this.length,u=function(){--c||m.resolveWith(i,[i])};for(typeof d!="string"&&(p=d,d=void 0),d=d||"fx";h--;)r=l.get(i[h],d+"queueHooks"),r&&r.empty&&(c++,r.empty.add(u));return u(),m.promise(p)}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},2706:(P,y,a)=>{var g,o;g=[a(2884),a(8174),a(8331)],o=function(n){"use strict";return n.fn.delay=function(l,d){return l=n.fx&&n.fx.speeds[l]||l,d=d||"fx",this.queue(d,function(p,r){var c=window.setTimeout(p,l);r.stop=function(){window.clearTimeout(c)}})},n.fn.delay}.apply(y,g),o!==void 0&&(P.exports=o)},1854:(P,y,a)=>{var g,o;g=[a(2884),a(4779)],o=function(n,l){"use strict";n.find=l,n.expr=l.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=l.uniqueSort,n.text=l.getText,n.isXMLDoc=l.isXML,n.contains=l.contains,n.escapeSelector=l.escape}.apply(y,g),o!==void 0&&(P.exports=o)},6:(P,y,a)=>{var g,o;g=[a(1854)],o=function(){"use strict"}.apply(y,g),o!==void 0&&(P.exports=o)},4492:(P,y,a)=>{var g,o;g=[a(2884),a(1401),a(8451),a(9003),a(6365),a(7392),a(6034)],o=function(n,l,d,p){"use strict";var r=/\[\]$/,c=/\r?\n/g,m=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function h(u,f,S,v){var b;if(Array.isArray(f))n.each(f,function(O,E){S||r.test(u)?v(u,E):h(u+"["+(typeof E=="object"&&E!=null?O:"")+"]",E,S,v)});else if(!S&&l(f)==="object")for(b in f)h(u+"["+b+"]",f[b],S,v);else v(u,f)}return n.param=function(u,f){var S,v=[],b=function(O,E){var N=p(E)?E():E;v[v.length]=encodeURIComponent(O)+"="+encodeURIComponent(N==null?"":N)};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!n.isPlainObject(u))n.each(u,function(){b(this.name,this.value)});else for(S in u)h(S,u[S],f,b);return v.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=n.prop(this,"elements");return u?n.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!m.test(u)&&(this.checked||!d.test(u))}).map(function(u,f){var S=n(this).val();return S==null?null:Array.isArray(S)?n.map(S,function(v){return{name:f.name,value:v.replace(c,`\r
`)}}):{name:f.name,value:S.replace(c,`\r
`)}}).get()}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},7392:(P,y,a)=>{var g,o;g=[a(2884),a(2690),a(706),a(8515),a(2908),a(6903),a(7031),a(6365),a(6036),a(6)],o=function(n,l,d,p,r,c,m){"use strict";var i=/^(?:parents|prev(?:Until|All))/,h={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(f){var S=n(f,this),v=S.length;return this.filter(function(){for(var b=0;b<v;b++)if(n.contains(this,S[b]))return!0})},closest:function(f,S){var v,b=0,O=this.length,E=[],N=typeof f!="string"&&n(f);if(!c.test(f)){for(;b<O;b++)for(v=this[b];v&&v!==S;v=v.parentNode)if(v.nodeType<11&&(N?N.index(v)>-1:v.nodeType===1&&n.find.matchesSelector(v,f))){E.push(v);break}}return this.pushStack(E.length>1?n.uniqueSort(E):E)},index:function(f){return f?typeof f=="string"?d.call(n(f),this[0]):d.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,S){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(f,S))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function u(f,S){for(;(f=f[S])&&f.nodeType!==1;);return f}return n.each({parent:function(f){var S=f.parentNode;return S&&S.nodeType!==11?S:null},parents:function(f){return p(f,"parentNode")},parentsUntil:function(f,S,v){return p(f,"parentNode",v)},next:function(f){return u(f,"nextSibling")},prev:function(f){return u(f,"previousSibling")},nextAll:function(f){return p(f,"nextSibling")},prevAll:function(f){return p(f,"previousSibling")},nextUntil:function(f,S,v){return p(f,"nextSibling",v)},prevUntil:function(f,S,v){return p(f,"previousSibling",v)},siblings:function(f){return r((f.parentNode||{}).firstChild,f)},children:function(f){return r(f.firstChild)},contents:function(f){return f.contentDocument!=null&&l(f.contentDocument)?f.contentDocument:(m(f,"template")&&(f=f.content||f),n.merge([],f.childNodes))}},function(f,S){n.fn[f]=function(v,b){var O=n.map(this,S,v);return f.slice(-5)!=="Until"&&(b=v),b&&typeof b=="string"&&(O=n.filter(b,O)),this.length>1&&(h[f]||n.uniqueSort(O),i.test(f)&&O.reverse()),this.pushStack(O)}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},6036:(P,y,a)=>{var g,o;g=[a(2884),a(706),a(9003),a(6903),a(6)],o=function(n,l,d,p){"use strict";function r(c,m,i){return d(m)?n.grep(c,function(h,u){return!!m.call(h,u,h)!==i}):m.nodeType?n.grep(c,function(h){return h===m!==i}):typeof m!="string"?n.grep(c,function(h){return l.call(m,h)>-1!==i}):n.filter(m,c,i)}n.filter=function(c,m,i){var h=m[0];return i&&(c=":not("+c+")"),m.length===1&&h.nodeType===1?n.find.matchesSelector(h,c)?[h]:[]:n.find.matches(c,n.grep(m,function(u){return u.nodeType===1}))},n.fn.extend({find:function(c){var m,i,h=this.length,u=this;if(typeof c!="string")return this.pushStack(n(c).filter(function(){for(m=0;m<h;m++)if(n.contains(u[m],this))return!0}));for(i=this.pushStack([]),m=0;m<h;m++)n.find(c,u[m],i);return h>1?n.uniqueSort(i):i},filter:function(c){return this.pushStack(r(this,c||[],!1))},not:function(c){return this.pushStack(r(this,c||[],!0))},is:function(c){return!!r(this,typeof c=="string"&&p.test(c)?n(c):c||[],!1).length}})}.apply(y,g),o!==void 0&&(P.exports=o)},8515:(P,y,a)=>{var g,o;g=[a(2884)],o=function(n){"use strict";return function(l,d,p){for(var r=[],c=p!==void 0;(l=l[d])&&l.nodeType!==9;)if(l.nodeType===1){if(c&&n(l).is(p))break;r.push(l)}return r}}.apply(y,g),o!==void 0&&(P.exports=o)},6903:(P,y,a)=>{var g,o;g=[a(2884),a(6)],o=function(n){"use strict";return n.expr.match.needsContext}.apply(y,g),o!==void 0&&(P.exports=o)},2908:(P,y,a)=>{var g;g=function(){"use strict";return function(o,n){for(var l=[];o;o=o.nextSibling)o.nodeType===1&&o!==n&&l.push(o);return l}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},789:(P,y,a)=>{var g,o;g=[a(7913)],o=function(n){"use strict";return n.call(Object)}.apply(y,g),o!==void 0&&(P.exports=o)},2305:(P,y,a)=>{var g;g=function(){"use strict";return[]}.call(y,a,y,P),g!==void 0&&(P.exports=g)},8978:(P,y,a)=>{var g;g=function(){"use strict";return{}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},7749:(P,y,a)=>{var g;g=function(){"use strict";return window.document}.call(y,a,y,P),g!==void 0&&(P.exports=g)},893:(P,y,a)=>{var g,o;g=[a(7749)],o=function(n){"use strict";return n.documentElement}.apply(y,g),o!==void 0&&(P.exports=o)},1429:(P,y,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)}}.apply(y,g),o!==void 0&&(P.exports=o)},7913:(P,y,a)=>{var g,o;g=[a(939)],o=function(n){"use strict";return n.toString}.apply(y,g),o!==void 0&&(P.exports=o)},2690:(P,y,a)=>{var g;g=function(){"use strict";return Object.getPrototypeOf}.call(y,a,y,P),g!==void 0&&(P.exports=g)},939:(P,y,a)=>{var g,o;g=[a(8978)],o=function(n){"use strict";return n.hasOwnProperty}.apply(y,g),o!==void 0&&(P.exports=o)},706:(P,y,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.indexOf}.apply(y,g),o!==void 0&&(P.exports=o)},9003:(P,y,a)=>{var g;g=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},9011:(P,y,a)=>{var g;g=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},5399:(P,y,a)=>{var g;g=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(y,a,y,P),g!==void 0&&(P.exports=g)},5896:(P,y,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.push}.apply(y,g),o!==void 0&&(P.exports=o)},8451:(P,y,a)=>{var g;g=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(y,a,y,P),g!==void 0&&(P.exports=g)},1286:(P,y,a)=>{var g,o;g=[a(5399)],o=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(y,g),o!==void 0&&(P.exports=o)},1143:(P,y,a)=>{var g;g=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(y,a,y,P),g!==void 0&&(P.exports=g)},7502:(P,y,a)=>{var g,o;g=[a(2305)],o=function(n){"use strict";return n.slice}.apply(y,g),o!==void 0&&(P.exports=o)},9343:(P,y,a)=>{var g;g=function(){"use strict";return{}}.call(y,a,y,P),g!==void 0&&(P.exports=g)},9412:(P,y,a)=>{var g,o;g=[a(8978)],o=function(n){"use strict";return n.toString}.apply(y,g),o!==void 0&&(P.exports=o)},7647:(P,y,a)=>{var g,o;g=[a(2884),a(9003),a(6365),a(5599),a(7392)],o=function(n,l){"use strict";return n.fn.extend({wrapAll:function(d){var p;return this[0]&&(l(d)&&(d=d.call(this[0])),p=n(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&p.insertBefore(this[0]),p.map(function(){for(var r=this;r.firstElementChild;)r=r.firstElementChild;return r}).append(this)),this},wrapInner:function(d){return l(d)?this.each(function(p){n(this).wrapInner(d.call(this,p))}):this.each(function(){var p=n(this),r=p.contents();r.length?r.wrapAll(d):p.append(d)})},wrap:function(d){var p=l(d);return this.each(function(r){n(this).wrapAll(p?d.call(this,r):d)})},unwrap:function(d){return this.parent(d).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(y,g),o!==void 0&&(P.exports=o)},4619:function(P,y,a){P=a.nmd(P);var g;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var o,n="4.17.21",l=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",p="Expected a function",r="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,i="__lodash_placeholder__",h=1,u=2,f=4,S=1,v=2,b=1,O=2,E=4,N=8,T=16,A=32,R=64,M=128,x=256,_=512,L=30,U="...",k=800,z=16,B=1,H=2,j=3,q=1/0,V=9007199254740991,ne=17976931348623157e292,ae=0/0,de=4294967295,te=de-1,ge=de>>>1,Ce=[["ary",M],["bind",b],["bindKey",O],["curry",N],["curryRight",T],["flip",_],["partial",A],["partialRight",R],["rearg",x]],Fe="[object Arguments]",it="[object Array]",mt="[object AsyncFunction]",ut="[object Boolean]",ht="[object Date]",At="[object DOMException]",Re="[object Error]",Ct="[object Function]",Ue="[object GeneratorFunction]",We="[object Map]",Bt="[object Number]",ke="[object Null]",le="[object Object]",Ne="[object Promise]",De="[object Proxy]",ie="[object RegExp]",ve="[object Set]",he="[object String]",be="[object Symbol]",Ze="[object Undefined]",Ke="[object WeakMap]",Je="[object WeakSet]",Oe="[object ArrayBuffer]",$e="[object DataView]",Qe="[object Float32Array]",Xe="[object Float64Array]",zt="[object Int8Array]",It="[object Int16Array]",Nt="[object Int32Array]",Tn="[object Uint8Array]",rn="[object Uint8ClampedArray]",Wt="[object Uint16Array]",gn="[object Uint32Array]",Ft=/\b__p \+= '';/g,mn=/\b(__p \+=) '' \+/g,vt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,An=/&(?:amp|lt|gt|quot|#39);/g,wn=/[&<>"']/g,cn=RegExp(An.source),jn=RegExp(wn.source),Nn=/<%-([\s\S]+?)%>/g,lo=/<%([\s\S]+?)%>/g,Kn=/<%=([\s\S]+?)%>/g,F=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,W=RegExp(Y.source),X=/^\s+/,ee=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,me=/,? & /,Ee=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Te=/[()=,{}\[\]\/\s]/,Le=/\\(\\)?/g,Ve=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ye=/\w*$/,Ie=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,Dt=/^\[object .+?Constructor\]$/,rt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Un=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Et=/($^)/,Xs=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Js="\\u0300-\\u036f",Qs="\\ufe20-\\ufe2f",el="\\u20d0-\\u20ff",Or=Js+Qs+el,Tr="\\u2700-\\u27bf",Ar="a-z\\xdf-\\xf6\\xf8-\\xff",tl="\\xac\\xb1\\xd7\\xf7",nl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ol="\\u2000-\\u206f",il=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nr="A-Z\\xc0-\\xd6\\xd8-\\xde",Dr="\\ufe0e\\ufe0f",Rr=tl+nl+ol+il,gi="['\u2019]",rl="["+Ao+"]",_r="["+Rr+"]",No="["+Or+"]",Mr="\\d+",al="["+Tr+"]",xr="["+Ar+"]",Lr="[^"+Ao+Rr+Mr+Tr+Ar+Nr+"]",mi="\\ud83c[\\udffb-\\udfff]",sl="(?:"+No+"|"+mi+")",Ir="[^"+Ao+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",vi="[\\ud800-\\udbff][\\udc00-\\udfff]",Yn="["+Nr+"]",Fr="\\u200d",kr="(?:"+xr+"|"+Lr+")",ll="(?:"+Yn+"|"+Lr+")",wr="(?:"+gi+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+gi+"(?:D|LL|M|RE|S|T|VE))?",Ur=sl+"?",Br="["+Dr+"]?",pl="(?:"+Fr+"(?:"+[Ir,hi,vi].join("|")+")"+Br+Ur+")*",cl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",zr=Br+Ur+pl,ul="(?:"+[al,hi,vi].join("|")+")"+zr,fl="(?:"+[Ir+No+"?",No,hi,vi,rl].join("|")+")",gl=RegExp(gi,"g"),ml=RegExp(No,"g"),yi=RegExp(mi+"(?="+mi+")|"+fl+zr,"g"),hl=RegExp([Yn+"?"+xr+"+"+wr+"(?="+[_r,Yn,"$"].join("|")+")",ll+"+"+jr+"(?="+[_r,Yn+kr,"$"].join("|")+")",Yn+"?"+kr+"+"+wr,Yn+"+"+jr,dl,cl,Mr,ul].join("|"),"g"),vl=RegExp("["+Fr+Ao+Or+Dr+"]"),yl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bl=-1,lt={};lt[Qe]=lt[Xe]=lt[zt]=lt[It]=lt[Nt]=lt[Tn]=lt[rn]=lt[Wt]=lt[gn]=!0,lt[Fe]=lt[it]=lt[Oe]=lt[ut]=lt[$e]=lt[ht]=lt[Re]=lt[Ct]=lt[We]=lt[Bt]=lt[le]=lt[ie]=lt[ve]=lt[he]=lt[Ke]=!1;var st={};st[Fe]=st[it]=st[Oe]=st[$e]=st[ut]=st[ht]=st[Qe]=st[Xe]=st[zt]=st[It]=st[Nt]=st[We]=st[Bt]=st[le]=st[ie]=st[ve]=st[he]=st[be]=st[Tn]=st[rn]=st[Wt]=st[gn]=!0,st[Re]=st[Ct]=st[Ke]=!1;var Cl={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},El={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ol={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tl=parseFloat,Al=parseInt,Wr=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,Nl=typeof self=="object"&&self&&self.Object===Object&&self,Ot=Wr||Nl||Function("return this")(),Gr=y&&!y.nodeType&&y,po=Gr&&!0&&P&&!P.nodeType&&P,$r=po&&po.exports===Gr,Si=$r&&Wr.process,Zt=function(){try{var J=po&&po.require&&po.require("util").types;return J||Si&&Si.binding&&Si.binding("util")}catch(re){}}(),Hr=Zt&&Zt.isArrayBuffer,Vr=Zt&&Zt.isDate,qr=Zt&&Zt.isMap,Kr=Zt&&Zt.isRegExp,Yr=Zt&&Zt.isSet,Zr=Zt&&Zt.isTypedArray;function Gt(J,re,oe){switch(oe.length){case 0:return J.call(re);case 1:return J.call(re,oe[0]);case 2:return J.call(re,oe[0],oe[1]);case 3:return J.call(re,oe[0],oe[1],oe[2])}return J.apply(re,oe)}function Dl(J,re,oe,Pe){for(var we=-1,et=J==null?0:J.length;++we<et;){var St=J[we];re(Pe,St,oe(St),J)}return Pe}function Xt(J,re){for(var oe=-1,Pe=J==null?0:J.length;++oe<Pe&&re(J[oe],oe,J)!==!1;);return J}function Rl(J,re){for(var oe=J==null?0:J.length;oe--&&re(J[oe],oe,J)!==!1;);return J}function Xr(J,re){for(var oe=-1,Pe=J==null?0:J.length;++oe<Pe;)if(!re(J[oe],oe,J))return!1;return!0}function Dn(J,re){for(var oe=-1,Pe=J==null?0:J.length,we=0,et=[];++oe<Pe;){var St=J[oe];re(St,oe,J)&&(et[we++]=St)}return et}function Do(J,re){var oe=J==null?0:J.length;return!!oe&&Zn(J,re,0)>-1}function bi(J,re,oe){for(var Pe=-1,we=J==null?0:J.length;++Pe<we;)if(oe(re,J[Pe]))return!0;return!1}function pt(J,re){for(var oe=-1,Pe=J==null?0:J.length,we=Array(Pe);++oe<Pe;)we[oe]=re(J[oe],oe,J);return we}function Rn(J,re){for(var oe=-1,Pe=re.length,we=J.length;++oe<Pe;)J[we+oe]=re[oe];return J}function Ci(J,re,oe,Pe){var we=-1,et=J==null?0:J.length;for(Pe&&et&&(oe=J[++we]);++we<et;)oe=re(oe,J[we],we,J);return oe}function _l(J,re,oe,Pe){var we=J==null?0:J.length;for(Pe&&we&&(oe=J[--we]);we--;)oe=re(oe,J[we],we,J);return oe}function Ei(J,re){for(var oe=-1,Pe=J==null?0:J.length;++oe<Pe;)if(re(J[oe],oe,J))return!0;return!1}var Ml=Pi("length");function xl(J){return J.split("")}function Ll(J){return J.match(Ee)||[]}function Jr(J,re,oe){var Pe;return oe(J,function(we,et,St){if(re(we,et,St))return Pe=et,!1}),Pe}function Ro(J,re,oe,Pe){for(var we=J.length,et=oe+(Pe?1:-1);Pe?et--:++et<we;)if(re(J[et],et,J))return et;return-1}function Zn(J,re,oe){return re===re?Hl(J,re,oe):Ro(J,Qr,oe)}function Il(J,re,oe,Pe){for(var we=oe-1,et=J.length;++we<et;)if(Pe(J[we],re))return we;return-1}function Qr(J){return J!==J}function ea(J,re){var oe=J==null?0:J.length;return oe?Ti(J,re)/oe:ae}function Pi(J){return function(re){return re==null?o:re[J]}}function Oi(J){return function(re){return J==null?o:J[re]}}function ta(J,re,oe,Pe,we){return we(J,function(et,St,at){oe=Pe?(Pe=!1,et):re(oe,et,St,at)}),oe}function Fl(J,re){var oe=J.length;for(J.sort(re);oe--;)J[oe]=J[oe].value;return J}function Ti(J,re){for(var oe,Pe=-1,we=J.length;++Pe<we;){var et=re(J[Pe]);et!==o&&(oe=oe===o?et:oe+et)}return oe}function Ai(J,re){for(var oe=-1,Pe=Array(J);++oe<J;)Pe[oe]=re(oe);return Pe}function kl(J,re){return pt(re,function(oe){return[oe,J[oe]]})}function na(J){return J&&J.slice(0,aa(J)+1).replace(X,"")}function $t(J){return function(re){return J(re)}}function Ni(J,re){return pt(re,function(oe){return J[oe]})}function co(J,re){return J.has(re)}function oa(J,re){for(var oe=-1,Pe=J.length;++oe<Pe&&Zn(re,J[oe],0)>-1;);return oe}function ia(J,re){for(var oe=J.length;oe--&&Zn(re,J[oe],0)>-1;);return oe}function wl(J,re){for(var oe=J.length,Pe=0;oe--;)J[oe]===re&&++Pe;return Pe}var jl=Oi(Cl),Ul=Oi(El);function Bl(J){return"\\"+Ol[J]}function zl(J,re){return J==null?o:J[re]}function Xn(J){return vl.test(J)}function Wl(J){return yl.test(J)}function Gl(J){for(var re,oe=[];!(re=J.next()).done;)oe.push(re.value);return oe}function Di(J){var re=-1,oe=Array(J.size);return J.forEach(function(Pe,we){oe[++re]=[we,Pe]}),oe}function ra(J,re){return function(oe){return J(re(oe))}}function _n(J,re){for(var oe=-1,Pe=J.length,we=0,et=[];++oe<Pe;){var St=J[oe];(St===re||St===i)&&(J[oe]=i,et[we++]=oe)}return et}function _o(J){var re=-1,oe=Array(J.size);return J.forEach(function(Pe){oe[++re]=Pe}),oe}function $l(J){var re=-1,oe=Array(J.size);return J.forEach(function(Pe){oe[++re]=[Pe,Pe]}),oe}function Hl(J,re,oe){for(var Pe=oe-1,we=J.length;++Pe<we;)if(J[Pe]===re)return Pe;return-1}function Vl(J,re,oe){for(var Pe=oe+1;Pe--;)if(J[Pe]===re)return Pe;return Pe}function Jn(J){return Xn(J)?Kl(J):Ml(J)}function an(J){return Xn(J)?Yl(J):xl(J)}function aa(J){for(var re=J.length;re--&&ee.test(J.charAt(re)););return re}var ql=Oi(Pl);function Kl(J){for(var re=yi.lastIndex=0;yi.test(J);)++re;return re}function Yl(J){return J.match(yi)||[]}function Zl(J){return J.match(hl)||[]}var Xl=function J(re){re=re==null?Ot:Mo.defaults(Ot.Object(),re,Mo.pick(Ot,Sl));var oe=re.Array,Pe=re.Date,we=re.Error,et=re.Function,St=re.Math,at=re.Object,Ri=re.RegExp,Jl=re.String,Jt=re.TypeError,xo=oe.prototype,Ql=et.prototype,Qn=at.prototype,Lo=re["__core-js_shared__"],Io=Ql.toString,nt=Qn.hasOwnProperty,ep=0,sa=function(){var e=/[^.]+$/.exec(Lo&&Lo.keys&&Lo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fo=Qn.toString,tp=Io.call(at),np=Ot._,op=Ri("^"+Io.call(nt).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ko=$r?re.Buffer:o,Mn=re.Symbol,wo=re.Uint8Array,la=ko?ko.allocUnsafe:o,jo=ra(at.getPrototypeOf,at),pa=at.create,ca=Qn.propertyIsEnumerable,Uo=xo.splice,da=Mn?Mn.isConcatSpreadable:o,uo=Mn?Mn.iterator:o,Bn=Mn?Mn.toStringTag:o,Bo=function(){try{var e=Hn(at,"defineProperty");return e({},"",{}),e}catch(t){}}(),ip=re.clearTimeout!==Ot.clearTimeout&&re.clearTimeout,rp=Pe&&Pe.now!==Ot.Date.now&&Pe.now,ap=re.setTimeout!==Ot.setTimeout&&re.setTimeout,zo=St.ceil,Wo=St.floor,_i=at.getOwnPropertySymbols,sp=ko?ko.isBuffer:o,ua=re.isFinite,lp=xo.join,pp=ra(at.keys,at),bt=St.max,Rt=St.min,cp=Pe.now,dp=re.parseInt,fa=St.random,up=xo.reverse,Mi=Hn(re,"DataView"),fo=Hn(re,"Map"),xi=Hn(re,"Promise"),eo=Hn(re,"Set"),go=Hn(re,"WeakMap"),mo=Hn(at,"create"),Go=go&&new go,to={},fp=Vn(Mi),gp=Vn(fo),mp=Vn(xi),hp=Vn(eo),vp=Vn(go),$o=Mn?Mn.prototype:o,ho=$o?$o.valueOf:o,ga=$o?$o.toString:o;function I(e){if(dt(e)&&!je(e)&&!(e instanceof qe)){if(e instanceof Qt)return e;if(nt.call(e,"__wrapped__"))return ms(e)}return new Qt(e)}var no=function(){function e(){}return function(t){if(!ct(t))return{};if(pa)return pa(t);e.prototype=t;var s=new e;return e.prototype=o,s}}();function Ho(){}function Qt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}I.templateSettings={escape:Nn,evaluate:lo,interpolate:Kn,variable:"",imports:{_:I}},I.prototype=Ho.prototype,I.prototype.constructor=I,Qt.prototype=no(Ho.prototype),Qt.prototype.constructor=Qt;function qe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function yp(){var e=new qe(this.__wrapped__);return e.__actions__=kt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=kt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=kt(this.__views__),e}function Sp(){if(this.__filtered__){var e=new qe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function bp(){var e=this.__wrapped__.value(),t=this.__dir__,s=je(e),C=t<0,D=s?e.length:0,w=xc(0,D,this.__views__),G=w.start,K=w.end,Q=K-G,pe=C?K:G-1,ce=this.__iteratees__,fe=ce.length,Se=0,Ae=Rt(Q,this.__takeCount__);if(!s||!C&&D==Q&&Ae==Q)return ja(e,this.__actions__);var Me=[];e:for(;Q--&&Se<Ae;){pe+=t;for(var ze=-1,xe=e[pe];++ze<fe;){var He=ce[ze],Ye=He.iteratee,qt=He.type,Lt=Ye(xe);if(qt==H)xe=Lt;else if(!Lt){if(qt==B)continue e;break e}}Me[Se++]=xe}return Me}qe.prototype=no(Ho.prototype),qe.prototype.constructor=qe;function zn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Cp(){this.__data__=mo?mo(null):{},this.size=0}function Ep(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Pp(e){var t=this.__data__;if(mo){var s=t[e];return s===c?o:s}return nt.call(t,e)?t[e]:o}function Op(e){var t=this.__data__;return mo?t[e]!==o:nt.call(t,e)}function Tp(e,t){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=mo&&t===o?c:t,this}zn.prototype.clear=Cp,zn.prototype.delete=Ep,zn.prototype.get=Pp,zn.prototype.has=Op,zn.prototype.set=Tp;function hn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Ap(){this.__data__=[],this.size=0}function Np(e){var t=this.__data__,s=Vo(t,e);if(s<0)return!1;var C=t.length-1;return s==C?t.pop():Uo.call(t,s,1),--this.size,!0}function Dp(e){var t=this.__data__,s=Vo(t,e);return s<0?o:t[s][1]}function Rp(e){return Vo(this.__data__,e)>-1}function _p(e,t){var s=this.__data__,C=Vo(s,e);return C<0?(++this.size,s.push([e,t])):s[C][1]=t,this}hn.prototype.clear=Ap,hn.prototype.delete=Np,hn.prototype.get=Dp,hn.prototype.has=Rp,hn.prototype.set=_p;function vn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Mp(){this.size=0,this.__data__={hash:new zn,map:new(fo||hn),string:new zn}}function xp(e){var t=ii(this,e).delete(e);return this.size-=t?1:0,t}function Lp(e){return ii(this,e).get(e)}function Ip(e){return ii(this,e).has(e)}function Fp(e,t){var s=ii(this,e),C=s.size;return s.set(e,t),this.size+=s.size==C?0:1,this}vn.prototype.clear=Mp,vn.prototype.delete=xp,vn.prototype.get=Lp,vn.prototype.has=Ip,vn.prototype.set=Fp;function Wn(e){var t=-1,s=e==null?0:e.length;for(this.__data__=new vn;++t<s;)this.add(e[t])}function kp(e){return this.__data__.set(e,c),this}function wp(e){return this.__data__.has(e)}Wn.prototype.add=Wn.prototype.push=kp,Wn.prototype.has=wp;function sn(e){var t=this.__data__=new hn(e);this.size=t.size}function jp(){this.__data__=new hn,this.size=0}function Up(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}function Bp(e){return this.__data__.get(e)}function zp(e){return this.__data__.has(e)}function Wp(e,t){var s=this.__data__;if(s instanceof hn){var C=s.__data__;if(!fo||C.length<l-1)return C.push([e,t]),this.size=++s.size,this;s=this.__data__=new vn(C)}return s.set(e,t),this.size=s.size,this}sn.prototype.clear=jp,sn.prototype.delete=Up,sn.prototype.get=Bp,sn.prototype.has=zp,sn.prototype.set=Wp;function ma(e,t){var s=je(e),C=!s&&qn(e),D=!s&&!C&&kn(e),w=!s&&!C&&!D&&ao(e),G=s||C||D||w,K=G?Ai(e.length,Jl):[],Q=K.length;for(var pe in e)(t||nt.call(e,pe))&&!(G&&(pe=="length"||D&&(pe=="offset"||pe=="parent")||w&&(pe=="buffer"||pe=="byteLength"||pe=="byteOffset")||Cn(pe,Q)))&&K.push(pe);return K}function ha(e){var t=e.length;return t?e[Gi(0,t-1)]:o}function Gp(e,t){return ri(kt(e),Gn(t,0,e.length))}function $p(e){return ri(kt(e))}function Li(e,t,s){(s!==o&&!ln(e[t],s)||s===o&&!(t in e))&&yn(e,t,s)}function vo(e,t,s){var C=e[t];(!(nt.call(e,t)&&ln(C,s))||s===o&&!(t in e))&&yn(e,t,s)}function Vo(e,t){for(var s=e.length;s--;)if(ln(e[s][0],t))return s;return-1}function Hp(e,t,s,C){return xn(e,function(D,w,G){t(C,D,s(D),G)}),C}function va(e,t){return e&&un(t,Pt(t),e)}function Vp(e,t){return e&&un(t,jt(t),e)}function yn(e,t,s){t=="__proto__"&&Bo?Bo(e,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[t]=s}function Ii(e,t){for(var s=-1,C=t.length,D=oe(C),w=e==null;++s<C;)D[s]=w?o:gr(e,t[s]);return D}function Gn(e,t,s){return e===e&&(s!==o&&(e=e<=s?e:s),t!==o&&(e=e>=t?e:t)),e}function en(e,t,s,C,D,w){var G,K=t&h,Q=t&u,pe=t&f;if(s&&(G=D?s(e,C,D,w):s(e)),G!==o)return G;if(!ct(e))return e;var ce=je(e);if(ce){if(G=Ic(e),!K)return kt(e,G)}else{var fe=_t(e),Se=fe==Ct||fe==Ue;if(kn(e))return za(e,K);if(fe==le||fe==Fe||Se&&!D){if(G=Q||Se?{}:as(e),!K)return Q?Pc(e,Vp(G,e)):Ec(e,va(G,e))}else{if(!st[fe])return D?e:{};G=Fc(e,fe,K)}}w||(w=new sn);var Ae=w.get(e);if(Ae)return Ae;w.set(e,G),Fs(e)?e.forEach(function(xe){G.add(en(xe,t,s,xe,e,w))}):Ls(e)&&e.forEach(function(xe,He){G.set(He,en(xe,t,s,He,e,w))});var Me=pe?Q?er:Qi:Q?jt:Pt,ze=ce?o:Me(e);return Xt(ze||e,function(xe,He){ze&&(He=xe,xe=e[He]),vo(G,He,en(xe,t,s,He,e,w))}),G}function qp(e){var t=Pt(e);return function(s){return ya(s,e,t)}}function ya(e,t,s){var C=s.length;if(e==null)return!C;for(e=at(e);C--;){var D=s[C],w=t[D],G=e[D];if(G===o&&!(D in e)||!w(G))return!1}return!0}function Sa(e,t,s){if(typeof e!="function")throw new Jt(p);return Oo(function(){e.apply(o,s)},t)}function yo(e,t,s,C){var D=-1,w=Do,G=!0,K=e.length,Q=[],pe=t.length;if(!K)return Q;s&&(t=pt(t,$t(s))),C?(w=bi,G=!1):t.length>=l&&(w=co,G=!1,t=new Wn(t));e:for(;++D<K;){var ce=e[D],fe=s==null?ce:s(ce);if(ce=C||ce!==0?ce:0,G&&fe===fe){for(var Se=pe;Se--;)if(t[Se]===fe)continue e;Q.push(ce)}else w(t,fe,C)||Q.push(ce)}return Q}var xn=Va(dn),ba=Va(ki,!0);function Kp(e,t){var s=!0;return xn(e,function(C,D,w){return s=!!t(C,D,w),s}),s}function qo(e,t,s){for(var C=-1,D=e.length;++C<D;){var w=e[C],G=t(w);if(G!=null&&(K===o?G===G&&!Vt(G):s(G,K)))var K=G,Q=w}return Q}function Yp(e,t,s,C){var D=e.length;for(s=Be(s),s<0&&(s=-s>D?0:D+s),C=C===o||C>D?D:Be(C),C<0&&(C+=D),C=s>C?0:ws(C);s<C;)e[s++]=t;return e}function Ca(e,t){var s=[];return xn(e,function(C,D,w){t(C,D,w)&&s.push(C)}),s}function Tt(e,t,s,C,D){var w=-1,G=e.length;for(s||(s=wc),D||(D=[]);++w<G;){var K=e[w];t>0&&s(K)?t>1?Tt(K,t-1,s,C,D):Rn(D,K):C||(D[D.length]=K)}return D}var Fi=qa(),Ea=qa(!0);function dn(e,t){return e&&Fi(e,t,Pt)}function ki(e,t){return e&&Ea(e,t,Pt)}function Ko(e,t){return Dn(t,function(s){return En(e[s])})}function $n(e,t){t=In(t,e);for(var s=0,C=t.length;e!=null&&s<C;)e=e[fn(t[s++])];return s&&s==C?e:o}function Pa(e,t,s){var C=t(e);return je(e)?C:Rn(C,s(e))}function Mt(e){return e==null?e===o?Ze:ke:Bn&&Bn in at(e)?Mc(e):$c(e)}function wi(e,t){return e>t}function Zp(e,t){return e!=null&&nt.call(e,t)}function Xp(e,t){return e!=null&&t in at(e)}function Jp(e,t,s){return e>=Rt(t,s)&&e<bt(t,s)}function ji(e,t,s){for(var C=s?bi:Do,D=e[0].length,w=e.length,G=w,K=oe(w),Q=1/0,pe=[];G--;){var ce=e[G];G&&t&&(ce=pt(ce,$t(t))),Q=Rt(ce.length,Q),K[G]=!s&&(t||D>=120&&ce.length>=120)?new Wn(G&&ce):o}ce=e[0];var fe=-1,Se=K[0];e:for(;++fe<D&&pe.length<Q;){var Ae=ce[fe],Me=t?t(Ae):Ae;if(Ae=s||Ae!==0?Ae:0,!(Se?co(Se,Me):C(pe,Me,s))){for(G=w;--G;){var ze=K[G];if(!(ze?co(ze,Me):C(e[G],Me,s)))continue e}Se&&Se.push(Me),pe.push(Ae)}}return pe}function Qp(e,t,s,C){return dn(e,function(D,w,G){t(C,s(D),w,G)}),C}function So(e,t,s){t=In(t,e),e=cs(e,t);var C=e==null?e:e[fn(nn(t))];return C==null?o:Gt(C,e,s)}function Oa(e){return dt(e)&&Mt(e)==Fe}function ec(e){return dt(e)&&Mt(e)==Oe}function tc(e){return dt(e)&&Mt(e)==ht}function bo(e,t,s,C,D){return e===t?!0:e==null||t==null||!dt(e)&&!dt(t)?e!==e&&t!==t:nc(e,t,s,C,bo,D)}function nc(e,t,s,C,D,w){var G=je(e),K=je(t),Q=G?it:_t(e),pe=K?it:_t(t);Q=Q==Fe?le:Q,pe=pe==Fe?le:pe;var ce=Q==le,fe=pe==le,Se=Q==pe;if(Se&&kn(e)){if(!kn(t))return!1;G=!0,ce=!1}if(Se&&!ce)return w||(w=new sn),G||ao(e)?os(e,t,s,C,D,w):Rc(e,t,Q,s,C,D,w);if(!(s&S)){var Ae=ce&&nt.call(e,"__wrapped__"),Me=fe&&nt.call(t,"__wrapped__");if(Ae||Me){var ze=Ae?e.value():e,xe=Me?t.value():t;return w||(w=new sn),D(ze,xe,s,C,w)}}return Se?(w||(w=new sn),_c(e,t,s,C,D,w)):!1}function oc(e){return dt(e)&&_t(e)==We}function Ui(e,t,s,C){var D=s.length,w=D,G=!C;if(e==null)return!w;for(e=at(e);D--;){var K=s[D];if(G&&K[2]?K[1]!==e[K[0]]:!(K[0]in e))return!1}for(;++D<w;){K=s[D];var Q=K[0],pe=e[Q],ce=K[1];if(G&&K[2]){if(pe===o&&!(Q in e))return!1}else{var fe=new sn;if(C)var Se=C(pe,ce,Q,e,t,fe);if(!(Se===o?bo(ce,pe,S|v,C,fe):Se))return!1}}return!0}function Ta(e){if(!ct(e)||Uc(e))return!1;var t=En(e)?op:Dt;return t.test(Vn(e))}function ic(e){return dt(e)&&Mt(e)==ie}function rc(e){return dt(e)&&_t(e)==ve}function ac(e){return dt(e)&&di(e.length)&&!!lt[Mt(e)]}function Aa(e){return typeof e=="function"?e:e==null?Ut:typeof e=="object"?je(e)?Ra(e[0],e[1]):Da(e):Ks(e)}function Bi(e){if(!Po(e))return pp(e);var t=[];for(var s in at(e))nt.call(e,s)&&s!="constructor"&&t.push(s);return t}function sc(e){if(!ct(e))return Gc(e);var t=Po(e),s=[];for(var C in e)C=="constructor"&&(t||!nt.call(e,C))||s.push(C);return s}function zi(e,t){return e<t}function Na(e,t){var s=-1,C=wt(e)?oe(e.length):[];return xn(e,function(D,w,G){C[++s]=t(D,w,G)}),C}function Da(e){var t=nr(e);return t.length==1&&t[0][2]?ls(t[0][0],t[0][1]):function(s){return s===e||Ui(s,e,t)}}function Ra(e,t){return ir(e)&&ss(t)?ls(fn(e),t):function(s){var C=gr(s,e);return C===o&&C===t?mr(s,e):bo(t,C,S|v)}}function Yo(e,t,s,C,D){e!==t&&Fi(t,function(w,G){if(D||(D=new sn),ct(w))lc(e,t,G,s,Yo,C,D);else{var K=C?C(ar(e,G),w,G+"",e,t,D):o;K===o&&(K=w),Li(e,G,K)}},jt)}function lc(e,t,s,C,D,w,G){var K=ar(e,s),Q=ar(t,s),pe=G.get(Q);if(pe){Li(e,s,pe);return}var ce=w?w(K,Q,s+"",e,t,G):o,fe=ce===o;if(fe){var Se=je(Q),Ae=!Se&&kn(Q),Me=!Se&&!Ae&&ao(Q);ce=Q,Se||Ae||Me?je(K)?ce=K:ft(K)?ce=kt(K):Ae?(fe=!1,ce=za(Q,!0)):Me?(fe=!1,ce=Wa(Q,!0)):ce=[]:To(Q)||qn(Q)?(ce=K,qn(K)?ce=js(K):(!ct(K)||En(K))&&(ce=as(Q))):fe=!1}fe&&(G.set(Q,ce),D(ce,Q,C,w,G),G.delete(Q)),Li(e,s,ce)}function _a(e,t){var s=e.length;if(!!s)return t+=t<0?s:0,Cn(t,s)?e[t]:o}function Ma(e,t,s){t.length?t=pt(t,function(w){return je(w)?function(G){return $n(G,w.length===1?w[0]:w)}:w}):t=[Ut];var C=-1;t=pt(t,$t(_e()));var D=Na(e,function(w,G,K){var Q=pt(t,function(pe){return pe(w)});return{criteria:Q,index:++C,value:w}});return Fl(D,function(w,G){return Cc(w,G,s)})}function pc(e,t){return xa(e,t,function(s,C){return mr(e,C)})}function xa(e,t,s){for(var C=-1,D=t.length,w={};++C<D;){var G=t[C],K=$n(e,G);s(K,G)&&Co(w,In(G,e),K)}return w}function cc(e){return function(t){return $n(t,e)}}function Wi(e,t,s,C){var D=C?Il:Zn,w=-1,G=t.length,K=e;for(e===t&&(t=kt(t)),s&&(K=pt(e,$t(s)));++w<G;)for(var Q=0,pe=t[w],ce=s?s(pe):pe;(Q=D(K,ce,Q,C))>-1;)K!==e&&Uo.call(K,Q,1),Uo.call(e,Q,1);return e}function La(e,t){for(var s=e?t.length:0,C=s-1;s--;){var D=t[s];if(s==C||D!==w){var w=D;Cn(D)?Uo.call(e,D,1):Vi(e,D)}}return e}function Gi(e,t){return e+Wo(fa()*(t-e+1))}function dc(e,t,s,C){for(var D=-1,w=bt(zo((t-e)/(s||1)),0),G=oe(w);w--;)G[C?w:++D]=e,e+=s;return G}function $i(e,t){var s="";if(!e||t<1||t>V)return s;do t%2&&(s+=e),t=Wo(t/2),t&&(e+=e);while(t);return s}function Ge(e,t){return sr(ps(e,t,Ut),e+"")}function uc(e){return ha(so(e))}function fc(e,t){var s=so(e);return ri(s,Gn(t,0,s.length))}function Co(e,t,s,C){if(!ct(e))return e;t=In(t,e);for(var D=-1,w=t.length,G=w-1,K=e;K!=null&&++D<w;){var Q=fn(t[D]),pe=s;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return e;if(D!=G){var ce=K[Q];pe=C?C(ce,Q,K):o,pe===o&&(pe=ct(ce)?ce:Cn(t[D+1])?[]:{})}vo(K,Q,pe),K=K[Q]}return e}var Ia=Go?function(e,t){return Go.set(e,t),e}:Ut,gc=Bo?function(e,t){return Bo(e,"toString",{configurable:!0,enumerable:!1,value:vr(t),writable:!0})}:Ut;function mc(e){return ri(so(e))}function tn(e,t,s){var C=-1,D=e.length;t<0&&(t=-t>D?0:D+t),s=s>D?D:s,s<0&&(s+=D),D=t>s?0:s-t>>>0,t>>>=0;for(var w=oe(D);++C<D;)w[C]=e[C+t];return w}function hc(e,t){var s;return xn(e,function(C,D,w){return s=t(C,D,w),!s}),!!s}function Zo(e,t,s){var C=0,D=e==null?C:e.length;if(typeof t=="number"&&t===t&&D<=ge){for(;C<D;){var w=C+D>>>1,G=e[w];G!==null&&!Vt(G)&&(s?G<=t:G<t)?C=w+1:D=w}return D}return Hi(e,t,Ut,s)}function Hi(e,t,s,C){var D=0,w=e==null?0:e.length;if(w===0)return 0;t=s(t);for(var G=t!==t,K=t===null,Q=Vt(t),pe=t===o;D<w;){var ce=Wo((D+w)/2),fe=s(e[ce]),Se=fe!==o,Ae=fe===null,Me=fe===fe,ze=Vt(fe);if(G)var xe=C||Me;else pe?xe=Me&&(C||Se):K?xe=Me&&Se&&(C||!Ae):Q?xe=Me&&Se&&!Ae&&(C||!ze):Ae||ze?xe=!1:xe=C?fe<=t:fe<t;xe?D=ce+1:w=ce}return Rt(w,te)}function Fa(e,t){for(var s=-1,C=e.length,D=0,w=[];++s<C;){var G=e[s],K=t?t(G):G;if(!s||!ln(K,Q)){var Q=K;w[D++]=G===0?0:G}}return w}function ka(e){return typeof e=="number"?e:Vt(e)?ae:+e}function Ht(e){if(typeof e=="string")return e;if(je(e))return pt(e,Ht)+"";if(Vt(e))return ga?ga.call(e):"";var t=e+"";return t=="0"&&1/e==-q?"-0":t}function Ln(e,t,s){var C=-1,D=Do,w=e.length,G=!0,K=[],Q=K;if(s)G=!1,D=bi;else if(w>=l){var pe=t?null:Nc(e);if(pe)return _o(pe);G=!1,D=co,Q=new Wn}else Q=t?[]:K;e:for(;++C<w;){var ce=e[C],fe=t?t(ce):ce;if(ce=s||ce!==0?ce:0,G&&fe===fe){for(var Se=Q.length;Se--;)if(Q[Se]===fe)continue e;t&&Q.push(fe),K.push(ce)}else D(Q,fe,s)||(Q!==K&&Q.push(fe),K.push(ce))}return K}function Vi(e,t){return t=In(t,e),e=cs(e,t),e==null||delete e[fn(nn(t))]}function wa(e,t,s,C){return Co(e,t,s($n(e,t)),C)}function Xo(e,t,s,C){for(var D=e.length,w=C?D:-1;(C?w--:++w<D)&&t(e[w],w,e););return s?tn(e,C?0:w,C?w+1:D):tn(e,C?w+1:0,C?D:w)}function ja(e,t){var s=e;return s instanceof qe&&(s=s.value()),Ci(t,function(C,D){return D.func.apply(D.thisArg,Rn([C],D.args))},s)}function qi(e,t,s){var C=e.length;if(C<2)return C?Ln(e[0]):[];for(var D=-1,w=oe(C);++D<C;)for(var G=e[D],K=-1;++K<C;)K!=D&&(w[D]=yo(w[D]||G,e[K],t,s));return Ln(Tt(w,1),t,s)}function Ua(e,t,s){for(var C=-1,D=e.length,w=t.length,G={};++C<D;){var K=C<w?t[C]:o;s(G,e[C],K)}return G}function Ki(e){return ft(e)?e:[]}function Yi(e){return typeof e=="function"?e:Ut}function In(e,t){return je(e)?e:ir(e,t)?[e]:gs(tt(e))}var vc=Ge;function Fn(e,t,s){var C=e.length;return s=s===o?C:s,!t&&s>=C?e:tn(e,t,s)}var Ba=ip||function(e){return Ot.clearTimeout(e)};function za(e,t){if(t)return e.slice();var s=e.length,C=la?la(s):new e.constructor(s);return e.copy(C),C}function Zi(e){var t=new e.constructor(e.byteLength);return new wo(t).set(new wo(e)),t}function yc(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function Sc(e){var t=new e.constructor(e.source,ye.exec(e));return t.lastIndex=e.lastIndex,t}function bc(e){return ho?at(ho.call(e)):{}}function Wa(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function Ga(e,t){if(e!==t){var s=e!==o,C=e===null,D=e===e,w=Vt(e),G=t!==o,K=t===null,Q=t===t,pe=Vt(t);if(!K&&!pe&&!w&&e>t||w&&G&&Q&&!K&&!pe||C&&G&&Q||!s&&Q||!D)return 1;if(!C&&!w&&!pe&&e<t||pe&&s&&D&&!C&&!w||K&&s&&D||!G&&D||!Q)return-1}return 0}function Cc(e,t,s){for(var C=-1,D=e.criteria,w=t.criteria,G=D.length,K=s.length;++C<G;){var Q=Ga(D[C],w[C]);if(Q){if(C>=K)return Q;var pe=s[C];return Q*(pe=="desc"?-1:1)}}return e.index-t.index}function $a(e,t,s,C){for(var D=-1,w=e.length,G=s.length,K=-1,Q=t.length,pe=bt(w-G,0),ce=oe(Q+pe),fe=!C;++K<Q;)ce[K]=t[K];for(;++D<G;)(fe||D<w)&&(ce[s[D]]=e[D]);for(;pe--;)ce[K++]=e[D++];return ce}function Ha(e,t,s,C){for(var D=-1,w=e.length,G=-1,K=s.length,Q=-1,pe=t.length,ce=bt(w-K,0),fe=oe(ce+pe),Se=!C;++D<ce;)fe[D]=e[D];for(var Ae=D;++Q<pe;)fe[Ae+Q]=t[Q];for(;++G<K;)(Se||D<w)&&(fe[Ae+s[G]]=e[D++]);return fe}function kt(e,t){var s=-1,C=e.length;for(t||(t=oe(C));++s<C;)t[s]=e[s];return t}function un(e,t,s,C){var D=!s;s||(s={});for(var w=-1,G=t.length;++w<G;){var K=t[w],Q=C?C(s[K],e[K],K,s,e):o;Q===o&&(Q=e[K]),D?yn(s,K,Q):vo(s,K,Q)}return s}function Ec(e,t){return un(e,or(e),t)}function Pc(e,t){return un(e,is(e),t)}function Jo(e,t){return function(s,C){var D=je(s)?Dl:Hp,w=t?t():{};return D(s,e,_e(C,2),w)}}function oo(e){return Ge(function(t,s){var C=-1,D=s.length,w=D>1?s[D-1]:o,G=D>2?s[2]:o;for(w=e.length>3&&typeof w=="function"?(D--,w):o,G&&xt(s[0],s[1],G)&&(w=D<3?o:w,D=1),t=at(t);++C<D;){var K=s[C];K&&e(t,K,C,w)}return t})}function Va(e,t){return function(s,C){if(s==null)return s;if(!wt(s))return e(s,C);for(var D=s.length,w=t?D:-1,G=at(s);(t?w--:++w<D)&&C(G[w],w,G)!==!1;);return s}}function qa(e){return function(t,s,C){for(var D=-1,w=at(t),G=C(t),K=G.length;K--;){var Q=G[e?K:++D];if(s(w[Q],Q,w)===!1)break}return t}}function Oc(e,t,s){var C=t&b,D=Eo(e);function w(){var G=this&&this!==Ot&&this instanceof w?D:e;return G.apply(C?s:this,arguments)}return w}function Ka(e){return function(t){t=tt(t);var s=Xn(t)?an(t):o,C=s?s[0]:t.charAt(0),D=s?Fn(s,1).join(""):t.slice(1);return C[e]()+D}}function io(e){return function(t){return Ci(Vs(Hs(t).replace(gl,"")),e,"")}}function Eo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=no(e.prototype),C=e.apply(s,t);return ct(C)?C:s}}function Tc(e,t,s){var C=Eo(e);function D(){for(var w=arguments.length,G=oe(w),K=w,Q=ro(D);K--;)G[K]=arguments[K];var pe=w<3&&G[0]!==Q&&G[w-1]!==Q?[]:_n(G,Q);if(w-=pe.length,w<s)return Qa(e,t,Qo,D.placeholder,o,G,pe,o,o,s-w);var ce=this&&this!==Ot&&this instanceof D?C:e;return Gt(ce,this,G)}return D}function Ya(e){return function(t,s,C){var D=at(t);if(!wt(t)){var w=_e(s,3);t=Pt(t),s=function(K){return w(D[K],K,D)}}var G=e(t,s,C);return G>-1?D[w?t[G]:G]:o}}function Za(e){return bn(function(t){var s=t.length,C=s,D=Qt.prototype.thru;for(e&&t.reverse();C--;){var w=t[C];if(typeof w!="function")throw new Jt(p);if(D&&!G&&oi(w)=="wrapper")var G=new Qt([],!0)}for(C=G?C:s;++C<s;){w=t[C];var K=oi(w),Q=K=="wrapper"?tr(w):o;Q&&rr(Q[0])&&Q[1]==(M|N|A|x)&&!Q[4].length&&Q[9]==1?G=G[oi(Q[0])].apply(G,Q[3]):G=w.length==1&&rr(w)?G[K]():G.thru(w)}return function(){var pe=arguments,ce=pe[0];if(G&&pe.length==1&&je(ce))return G.plant(ce).value();for(var fe=0,Se=s?t[fe].apply(this,pe):ce;++fe<s;)Se=t[fe].call(this,Se);return Se}})}function Qo(e,t,s,C,D,w,G,K,Q,pe){var ce=t&M,fe=t&b,Se=t&O,Ae=t&(N|T),Me=t&_,ze=Se?o:Eo(e);function xe(){for(var He=arguments.length,Ye=oe(He),qt=He;qt--;)Ye[qt]=arguments[qt];if(Ae)var Lt=ro(xe),Kt=wl(Ye,Lt);if(C&&(Ye=$a(Ye,C,D,Ae)),w&&(Ye=Ha(Ye,w,G,Ae)),He-=Kt,Ae&&He<pe){var gt=_n(Ye,Lt);return Qa(e,t,Qo,xe.placeholder,s,Ye,gt,K,Q,pe-He)}var pn=fe?s:this,On=Se?pn[e]:e;return He=Ye.length,K?Ye=Hc(Ye,K):Me&&He>1&&Ye.reverse(),ce&&Q<He&&(Ye.length=Q),this&&this!==Ot&&this instanceof xe&&(On=ze||Eo(On)),On.apply(pn,Ye)}return xe}function Xa(e,t){return function(s,C){return Qp(s,e,t(C),{})}}function ei(e,t){return function(s,C){var D;if(s===o&&C===o)return t;if(s!==o&&(D=s),C!==o){if(D===o)return C;typeof s=="string"||typeof C=="string"?(s=Ht(s),C=Ht(C)):(s=ka(s),C=ka(C)),D=e(s,C)}return D}}function Xi(e){return bn(function(t){return t=pt(t,$t(_e())),Ge(function(s){var C=this;return e(t,function(D){return Gt(D,C,s)})})})}function ti(e,t){t=t===o?" ":Ht(t);var s=t.length;if(s<2)return s?$i(t,e):t;var C=$i(t,zo(e/Jn(t)));return Xn(t)?Fn(an(C),0,e).join(""):C.slice(0,e)}function Ac(e,t,s,C){var D=t&b,w=Eo(e);function G(){for(var K=-1,Q=arguments.length,pe=-1,ce=C.length,fe=oe(ce+Q),Se=this&&this!==Ot&&this instanceof G?w:e;++pe<ce;)fe[pe]=C[pe];for(;Q--;)fe[pe++]=arguments[++K];return Gt(Se,D?s:this,fe)}return G}function Ja(e){return function(t,s,C){return C&&typeof C!="number"&&xt(t,s,C)&&(s=C=o),t=Pn(t),s===o?(s=t,t=0):s=Pn(s),C=C===o?t<s?1:-1:Pn(C),dc(t,s,C,e)}}function ni(e){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=on(t),s=on(s)),e(t,s)}}function Qa(e,t,s,C,D,w,G,K,Q,pe){var ce=t&N,fe=ce?G:o,Se=ce?o:G,Ae=ce?w:o,Me=ce?o:w;t|=ce?A:R,t&=~(ce?R:A),t&E||(t&=~(b|O));var ze=[e,t,D,Ae,fe,Me,Se,K,Q,pe],xe=s.apply(o,ze);return rr(e)&&ds(xe,ze),xe.placeholder=C,us(xe,e,t)}function Ji(e){var t=St[e];return function(s,C){if(s=on(s),C=C==null?0:Rt(Be(C),292),C&&ua(s)){var D=(tt(s)+"e").split("e"),w=t(D[0]+"e"+(+D[1]+C));return D=(tt(w)+"e").split("e"),+(D[0]+"e"+(+D[1]-C))}return t(s)}}var Nc=eo&&1/_o(new eo([,-0]))[1]==q?function(e){return new eo(e)}:br;function es(e){return function(t){var s=_t(t);return s==We?Di(t):s==ve?$l(t):kl(t,e(t))}}function Sn(e,t,s,C,D,w,G,K){var Q=t&O;if(!Q&&typeof e!="function")throw new Jt(p);var pe=C?C.length:0;if(pe||(t&=~(A|R),C=D=o),G=G===o?G:bt(Be(G),0),K=K===o?K:Be(K),pe-=D?D.length:0,t&R){var ce=C,fe=D;C=D=o}var Se=Q?o:tr(e),Ae=[e,t,s,C,D,ce,fe,w,G,K];if(Se&&Wc(Ae,Se),e=Ae[0],t=Ae[1],s=Ae[2],C=Ae[3],D=Ae[4],K=Ae[9]=Ae[9]===o?Q?0:e.length:bt(Ae[9]-pe,0),!K&&t&(N|T)&&(t&=~(N|T)),!t||t==b)var Me=Oc(e,t,s);else t==N||t==T?Me=Tc(e,t,K):(t==A||t==(b|A))&&!D.length?Me=Ac(e,t,s,C):Me=Qo.apply(o,Ae);var ze=Se?Ia:ds;return us(ze(Me,Ae),e,t)}function ts(e,t,s,C){return e===o||ln(e,Qn[s])&&!nt.call(C,s)?t:e}function ns(e,t,s,C,D,w){return ct(e)&&ct(t)&&(w.set(t,e),Yo(e,t,o,ns,w),w.delete(t)),e}function Dc(e){return To(e)?o:e}function os(e,t,s,C,D,w){var G=s&S,K=e.length,Q=t.length;if(K!=Q&&!(G&&Q>K))return!1;var pe=w.get(e),ce=w.get(t);if(pe&&ce)return pe==t&&ce==e;var fe=-1,Se=!0,Ae=s&v?new Wn:o;for(w.set(e,t),w.set(t,e);++fe<K;){var Me=e[fe],ze=t[fe];if(C)var xe=G?C(ze,Me,fe,t,e,w):C(Me,ze,fe,e,t,w);if(xe!==o){if(xe)continue;Se=!1;break}if(Ae){if(!Ei(t,function(He,Ye){if(!co(Ae,Ye)&&(Me===He||D(Me,He,s,C,w)))return Ae.push(Ye)})){Se=!1;break}}else if(!(Me===ze||D(Me,ze,s,C,w))){Se=!1;break}}return w.delete(e),w.delete(t),Se}function Rc(e,t,s,C,D,w,G){switch(s){case $e:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Oe:return!(e.byteLength!=t.byteLength||!w(new wo(e),new wo(t)));case ut:case ht:case Bt:return ln(+e,+t);case Re:return e.name==t.name&&e.message==t.message;case ie:case he:return e==t+"";case We:var K=Di;case ve:var Q=C&S;if(K||(K=_o),e.size!=t.size&&!Q)return!1;var pe=G.get(e);if(pe)return pe==t;C|=v,G.set(e,t);var ce=os(K(e),K(t),C,D,w,G);return G.delete(e),ce;case be:if(ho)return ho.call(e)==ho.call(t)}return!1}function _c(e,t,s,C,D,w){var G=s&S,K=Qi(e),Q=K.length,pe=Qi(t),ce=pe.length;if(Q!=ce&&!G)return!1;for(var fe=Q;fe--;){var Se=K[fe];if(!(G?Se in t:nt.call(t,Se)))return!1}var Ae=w.get(e),Me=w.get(t);if(Ae&&Me)return Ae==t&&Me==e;var ze=!0;w.set(e,t),w.set(t,e);for(var xe=G;++fe<Q;){Se=K[fe];var He=e[Se],Ye=t[Se];if(C)var qt=G?C(Ye,He,Se,t,e,w):C(He,Ye,Se,e,t,w);if(!(qt===o?He===Ye||D(He,Ye,s,C,w):qt)){ze=!1;break}xe||(xe=Se=="constructor")}if(ze&&!xe){var Lt=e.constructor,Kt=t.constructor;Lt!=Kt&&"constructor"in e&&"constructor"in t&&!(typeof Lt=="function"&&Lt instanceof Lt&&typeof Kt=="function"&&Kt instanceof Kt)&&(ze=!1)}return w.delete(e),w.delete(t),ze}function bn(e){return sr(ps(e,o,ys),e+"")}function Qi(e){return Pa(e,Pt,or)}function er(e){return Pa(e,jt,is)}var tr=Go?function(e){return Go.get(e)}:br;function oi(e){for(var t=e.name+"",s=to[t],C=nt.call(to,t)?s.length:0;C--;){var D=s[C],w=D.func;if(w==null||w==e)return D.name}return t}function ro(e){var t=nt.call(I,"placeholder")?I:e;return t.placeholder}function _e(){var e=I.iteratee||yr;return e=e===yr?Aa:e,arguments.length?e(arguments[0],arguments[1]):e}function ii(e,t){var s=e.__data__;return jc(t)?s[typeof t=="string"?"string":"hash"]:s.map}function nr(e){for(var t=Pt(e),s=t.length;s--;){var C=t[s],D=e[C];t[s]=[C,D,ss(D)]}return t}function Hn(e,t){var s=zl(e,t);return Ta(s)?s:o}function Mc(e){var t=nt.call(e,Bn),s=e[Bn];try{e[Bn]=o;var C=!0}catch(w){}var D=Fo.call(e);return C&&(t?e[Bn]=s:delete e[Bn]),D}var or=_i?function(e){return e==null?[]:(e=at(e),Dn(_i(e),function(t){return ca.call(e,t)}))}:Cr,is=_i?function(e){for(var t=[];e;)Rn(t,or(e)),e=jo(e);return t}:Cr,_t=Mt;(Mi&&_t(new Mi(new ArrayBuffer(1)))!=$e||fo&&_t(new fo)!=We||xi&&_t(xi.resolve())!=Ne||eo&&_t(new eo)!=ve||go&&_t(new go)!=Ke)&&(_t=function(e){var t=Mt(e),s=t==le?e.constructor:o,C=s?Vn(s):"";if(C)switch(C){case fp:return $e;case gp:return We;case mp:return Ne;case hp:return ve;case vp:return Ke}return t});function xc(e,t,s){for(var C=-1,D=s.length;++C<D;){var w=s[C],G=w.size;switch(w.type){case"drop":e+=G;break;case"dropRight":t-=G;break;case"take":t=Rt(t,e+G);break;case"takeRight":e=bt(e,t-G);break}}return{start:e,end:t}}function Lc(e){var t=e.match(ue);return t?t[1].split(me):[]}function rs(e,t,s){t=In(t,e);for(var C=-1,D=t.length,w=!1;++C<D;){var G=fn(t[C]);if(!(w=e!=null&&s(e,G)))break;e=e[G]}return w||++C!=D?w:(D=e==null?0:e.length,!!D&&di(D)&&Cn(G,D)&&(je(e)||qn(e)))}function Ic(e){var t=e.length,s=new e.constructor(t);return t&&typeof e[0]=="string"&&nt.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function as(e){return typeof e.constructor=="function"&&!Po(e)?no(jo(e)):{}}function Fc(e,t,s){var C=e.constructor;switch(t){case Oe:return Zi(e);case ut:case ht:return new C(+e);case $e:return yc(e,s);case Qe:case Xe:case zt:case It:case Nt:case Tn:case rn:case Wt:case gn:return Wa(e,s);case We:return new C;case Bt:case he:return new C(e);case ie:return Sc(e);case ve:return new C;case be:return bc(e)}}function kc(e,t){var s=t.length;if(!s)return e;var C=s-1;return t[C]=(s>1?"& ":"")+t[C],t=t.join(s>2?", ":" "),e.replace(se,`{
/* [wrapped with `+t+`] */
`)}function wc(e){return je(e)||qn(e)||!!(da&&e&&e[da])}function Cn(e,t){var s=typeof e;return t=t==null?V:t,!!t&&(s=="number"||s!="symbol"&&Yt.test(e))&&e>-1&&e%1==0&&e<t}function xt(e,t,s){if(!ct(s))return!1;var C=typeof t;return(C=="number"?wt(s)&&Cn(t,s.length):C=="string"&&t in s)?ln(s[t],e):!1}function ir(e,t){if(je(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||Vt(e)?!0:$.test(e)||!F.test(e)||t!=null&&e in at(t)}function jc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function rr(e){var t=oi(e),s=I[t];if(typeof s!="function"||!(t in qe.prototype))return!1;if(e===s)return!0;var C=tr(s);return!!C&&e===C[0]}function Uc(e){return!!sa&&sa in e}var Bc=Lo?En:Er;function Po(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||Qn;return e===s}function ss(e){return e===e&&!ct(e)}function ls(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==o||e in at(s))}}function zc(e){var t=pi(e,function(C){return s.size===m&&s.clear(),C}),s=t.cache;return t}function Wc(e,t){var s=e[1],C=t[1],D=s|C,w=D<(b|O|M),G=C==M&&s==N||C==M&&s==x&&e[7].length<=t[8]||C==(M|x)&&t[7].length<=t[8]&&s==N;if(!(w||G))return e;C&b&&(e[2]=t[2],D|=s&b?0:E);var K=t[3];if(K){var Q=e[3];e[3]=Q?$a(Q,K,t[4]):K,e[4]=Q?_n(e[3],i):t[4]}return K=t[5],K&&(Q=e[5],e[5]=Q?Ha(Q,K,t[6]):K,e[6]=Q?_n(e[5],i):t[6]),K=t[7],K&&(e[7]=K),C&M&&(e[8]=e[8]==null?t[8]:Rt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=D,e}function Gc(e){var t=[];if(e!=null)for(var s in at(e))t.push(s);return t}function $c(e){return Fo.call(e)}function ps(e,t,s){return t=bt(t===o?e.length-1:t,0),function(){for(var C=arguments,D=-1,w=bt(C.length-t,0),G=oe(w);++D<w;)G[D]=C[t+D];D=-1;for(var K=oe(t+1);++D<t;)K[D]=C[D];return K[t]=s(G),Gt(e,this,K)}}function cs(e,t){return t.length<2?e:$n(e,tn(t,0,-1))}function Hc(e,t){for(var s=e.length,C=Rt(t.length,s),D=kt(e);C--;){var w=t[C];e[C]=Cn(w,s)?D[w]:o}return e}function ar(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var ds=fs(Ia),Oo=ap||function(e,t){return Ot.setTimeout(e,t)},sr=fs(gc);function us(e,t,s){var C=t+"";return sr(e,kc(C,Vc(Lc(C),s)))}function fs(e){var t=0,s=0;return function(){var C=cp(),D=z-(C-s);if(s=C,D>0){if(++t>=k)return arguments[0]}else t=0;return e.apply(o,arguments)}}function ri(e,t){var s=-1,C=e.length,D=C-1;for(t=t===o?C:t;++s<t;){var w=Gi(s,D),G=e[w];e[w]=e[s],e[s]=G}return e.length=t,e}var gs=zc(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Z,function(s,C,D,w){t.push(D?w.replace(Le,"$1"):C||s)}),t});function fn(e){if(typeof e=="string"||Vt(e))return e;var t=e+"";return t=="0"&&1/e==-q?"-0":t}function Vn(e){if(e!=null){try{return Io.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Vc(e,t){return Xt(Ce,function(s){var C="_."+s[0];t&s[1]&&!Do(e,C)&&e.push(C)}),e.sort()}function ms(e){if(e instanceof qe)return e.clone();var t=new Qt(e.__wrapped__,e.__chain__);return t.__actions__=kt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function qc(e,t,s){(s?xt(e,t,s):t===o)?t=1:t=bt(Be(t),0);var C=e==null?0:e.length;if(!C||t<1)return[];for(var D=0,w=0,G=oe(zo(C/t));D<C;)G[w++]=tn(e,D,D+=t);return G}function Kc(e){for(var t=-1,s=e==null?0:e.length,C=0,D=[];++t<s;){var w=e[t];w&&(D[C++]=w)}return D}function Yc(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),s=arguments[0],C=e;C--;)t[C-1]=arguments[C];return Rn(je(s)?kt(s):[s],Tt(t,1))}var Zc=Ge(function(e,t){return ft(e)?yo(e,Tt(t,1,ft,!0)):[]}),Xc=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?yo(e,Tt(t,1,ft,!0),_e(s,2)):[]}),Jc=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?yo(e,Tt(t,1,ft,!0),o,s):[]});function Qc(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),tn(e,t<0?0:t,C)):[]}function ed(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),t=C-t,tn(e,0,t<0?0:t)):[]}function td(e,t){return e&&e.length?Xo(e,_e(t,3),!0,!0):[]}function nd(e,t){return e&&e.length?Xo(e,_e(t,3),!0):[]}function od(e,t,s,C){var D=e==null?0:e.length;return D?(s&&typeof s!="number"&&xt(e,t,s)&&(s=0,C=D),Yp(e,t,s,C)):[]}function hs(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=s==null?0:Be(s);return D<0&&(D=bt(C+D,0)),Ro(e,_e(t,3),D)}function vs(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=C-1;return s!==o&&(D=Be(s),D=s<0?bt(C+D,0):Rt(D,C-1)),Ro(e,_e(t,3),D,!0)}function ys(e){var t=e==null?0:e.length;return t?Tt(e,1):[]}function id(e){var t=e==null?0:e.length;return t?Tt(e,q):[]}function rd(e,t){var s=e==null?0:e.length;return s?(t=t===o?1:Be(t),Tt(e,t)):[]}function ad(e){for(var t=-1,s=e==null?0:e.length,C={};++t<s;){var D=e[t];C[D[0]]=D[1]}return C}function Ss(e){return e&&e.length?e[0]:o}function sd(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=s==null?0:Be(s);return D<0&&(D=bt(C+D,0)),Zn(e,t,D)}function ld(e){var t=e==null?0:e.length;return t?tn(e,0,-1):[]}var pd=Ge(function(e){var t=pt(e,Ki);return t.length&&t[0]===e[0]?ji(t):[]}),cd=Ge(function(e){var t=nn(e),s=pt(e,Ki);return t===nn(s)?t=o:s.pop(),s.length&&s[0]===e[0]?ji(s,_e(t,2)):[]}),dd=Ge(function(e){var t=nn(e),s=pt(e,Ki);return t=typeof t=="function"?t:o,t&&s.pop(),s.length&&s[0]===e[0]?ji(s,o,t):[]});function ud(e,t){return e==null?"":lp.call(e,t)}function nn(e){var t=e==null?0:e.length;return t?e[t-1]:o}function fd(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var D=C;return s!==o&&(D=Be(s),D=D<0?bt(C+D,0):Rt(D,C-1)),t===t?Vl(e,t,D):Ro(e,Qr,D,!0)}function gd(e,t){return e&&e.length?_a(e,Be(t)):o}var md=Ge(bs);function bs(e,t){return e&&e.length&&t&&t.length?Wi(e,t):e}function hd(e,t,s){return e&&e.length&&t&&t.length?Wi(e,t,_e(s,2)):e}function vd(e,t,s){return e&&e.length&&t&&t.length?Wi(e,t,o,s):e}var yd=bn(function(e,t){var s=e==null?0:e.length,C=Ii(e,t);return La(e,pt(t,function(D){return Cn(D,s)?+D:D}).sort(Ga)),C});function Sd(e,t){var s=[];if(!(e&&e.length))return s;var C=-1,D=[],w=e.length;for(t=_e(t,3);++C<w;){var G=e[C];t(G,C,e)&&(s.push(G),D.push(C))}return La(e,D),s}function lr(e){return e==null?e:up.call(e)}function bd(e,t,s){var C=e==null?0:e.length;return C?(s&&typeof s!="number"&&xt(e,t,s)?(t=0,s=C):(t=t==null?0:Be(t),s=s===o?C:Be(s)),tn(e,t,s)):[]}function Cd(e,t){return Zo(e,t)}function Ed(e,t,s){return Hi(e,t,_e(s,2))}function Pd(e,t){var s=e==null?0:e.length;if(s){var C=Zo(e,t);if(C<s&&ln(e[C],t))return C}return-1}function Od(e,t){return Zo(e,t,!0)}function Td(e,t,s){return Hi(e,t,_e(s,2),!0)}function Ad(e,t){var s=e==null?0:e.length;if(s){var C=Zo(e,t,!0)-1;if(ln(e[C],t))return C}return-1}function Nd(e){return e&&e.length?Fa(e):[]}function Dd(e,t){return e&&e.length?Fa(e,_e(t,2)):[]}function Rd(e){var t=e==null?0:e.length;return t?tn(e,1,t):[]}function _d(e,t,s){return e&&e.length?(t=s||t===o?1:Be(t),tn(e,0,t<0?0:t)):[]}function Md(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),t=C-t,tn(e,t<0?0:t,C)):[]}function xd(e,t){return e&&e.length?Xo(e,_e(t,3),!1,!0):[]}function Ld(e,t){return e&&e.length?Xo(e,_e(t,3)):[]}var Id=Ge(function(e){return Ln(Tt(e,1,ft,!0))}),Fd=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),Ln(Tt(e,1,ft,!0),_e(t,2))}),kd=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,Ln(Tt(e,1,ft,!0),o,t)});function wd(e){return e&&e.length?Ln(e):[]}function jd(e,t){return e&&e.length?Ln(e,_e(t,2)):[]}function Ud(e,t){return t=typeof t=="function"?t:o,e&&e.length?Ln(e,o,t):[]}function pr(e){if(!(e&&e.length))return[];var t=0;return e=Dn(e,function(s){if(ft(s))return t=bt(s.length,t),!0}),Ai(t,function(s){return pt(e,Pi(s))})}function Cs(e,t){if(!(e&&e.length))return[];var s=pr(e);return t==null?s:pt(s,function(C){return Gt(t,o,C)})}var Bd=Ge(function(e,t){return ft(e)?yo(e,t):[]}),zd=Ge(function(e){return qi(Dn(e,ft))}),Wd=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),qi(Dn(e,ft),_e(t,2))}),Gd=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,qi(Dn(e,ft),o,t)}),$d=Ge(pr);function Hd(e,t){return Ua(e||[],t||[],vo)}function Vd(e,t){return Ua(e||[],t||[],Co)}var qd=Ge(function(e){var t=e.length,s=t>1?e[t-1]:o;return s=typeof s=="function"?(e.pop(),s):o,Cs(e,s)});function Es(e){var t=I(e);return t.__chain__=!0,t}function Kd(e,t){return t(e),e}function ai(e,t){return t(e)}var Yd=bn(function(e){var t=e.length,s=t?e[0]:0,C=this.__wrapped__,D=function(w){return Ii(w,e)};return t>1||this.__actions__.length||!(C instanceof qe)||!Cn(s)?this.thru(D):(C=C.slice(s,+s+(t?1:0)),C.__actions__.push({func:ai,args:[D],thisArg:o}),new Qt(C,this.__chain__).thru(function(w){return t&&!w.length&&w.push(o),w}))});function Zd(){return Es(this)}function Xd(){return new Qt(this.value(),this.__chain__)}function Jd(){this.__values__===o&&(this.__values__=ks(this.value()));var e=this.__index__>=this.__values__.length,t=e?o:this.__values__[this.__index__++];return{done:e,value:t}}function Qd(){return this}function eu(e){for(var t,s=this;s instanceof Ho;){var C=ms(s);C.__index__=0,C.__values__=o,t?D.__wrapped__=C:t=C;var D=C;s=s.__wrapped__}return D.__wrapped__=e,t}function tu(){var e=this.__wrapped__;if(e instanceof qe){var t=e;return this.__actions__.length&&(t=new qe(this)),t=t.reverse(),t.__actions__.push({func:ai,args:[lr],thisArg:o}),new Qt(t,this.__chain__)}return this.thru(lr)}function nu(){return ja(this.__wrapped__,this.__actions__)}var ou=Jo(function(e,t,s){nt.call(e,s)?++e[s]:yn(e,s,1)});function iu(e,t,s){var C=je(e)?Xr:Kp;return s&&xt(e,t,s)&&(t=o),C(e,_e(t,3))}function ru(e,t){var s=je(e)?Dn:Ca;return s(e,_e(t,3))}var au=Ya(hs),su=Ya(vs);function lu(e,t){return Tt(si(e,t),1)}function pu(e,t){return Tt(si(e,t),q)}function cu(e,t,s){return s=s===o?1:Be(s),Tt(si(e,t),s)}function Ps(e,t){var s=je(e)?Xt:xn;return s(e,_e(t,3))}function Os(e,t){var s=je(e)?Rl:ba;return s(e,_e(t,3))}var du=Jo(function(e,t,s){nt.call(e,s)?e[s].push(t):yn(e,s,[t])});function uu(e,t,s,C){e=wt(e)?e:so(e),s=s&&!C?Be(s):0;var D=e.length;return s<0&&(s=bt(D+s,0)),ui(e)?s<=D&&e.indexOf(t,s)>-1:!!D&&Zn(e,t,s)>-1}var fu=Ge(function(e,t,s){var C=-1,D=typeof t=="function",w=wt(e)?oe(e.length):[];return xn(e,function(G){w[++C]=D?Gt(t,G,s):So(G,t,s)}),w}),gu=Jo(function(e,t,s){yn(e,s,t)});function si(e,t){var s=je(e)?pt:Na;return s(e,_e(t,3))}function mu(e,t,s,C){return e==null?[]:(je(t)||(t=t==null?[]:[t]),s=C?o:s,je(s)||(s=s==null?[]:[s]),Ma(e,t,s))}var hu=Jo(function(e,t,s){e[s?0:1].push(t)},function(){return[[],[]]});function vu(e,t,s){var C=je(e)?Ci:ta,D=arguments.length<3;return C(e,_e(t,4),s,D,xn)}function yu(e,t,s){var C=je(e)?_l:ta,D=arguments.length<3;return C(e,_e(t,4),s,D,ba)}function Su(e,t){var s=je(e)?Dn:Ca;return s(e,ci(_e(t,3)))}function bu(e){var t=je(e)?ha:uc;return t(e)}function Cu(e,t,s){(s?xt(e,t,s):t===o)?t=1:t=Be(t);var C=je(e)?Gp:fc;return C(e,t)}function Eu(e){var t=je(e)?$p:mc;return t(e)}function Pu(e){if(e==null)return 0;if(wt(e))return ui(e)?Jn(e):e.length;var t=_t(e);return t==We||t==ve?e.size:Bi(e).length}function Ou(e,t,s){var C=je(e)?Ei:hc;return s&&xt(e,t,s)&&(t=o),C(e,_e(t,3))}var Tu=Ge(function(e,t){if(e==null)return[];var s=t.length;return s>1&&xt(e,t[0],t[1])?t=[]:s>2&&xt(t[0],t[1],t[2])&&(t=[t[0]]),Ma(e,Tt(t,1),[])}),li=rp||function(){return Ot.Date.now()};function Au(e,t){if(typeof t!="function")throw new Jt(p);return e=Be(e),function(){if(--e<1)return t.apply(this,arguments)}}function Ts(e,t,s){return t=s?o:t,t=e&&t==null?e.length:t,Sn(e,M,o,o,o,o,t)}function As(e,t){var s;if(typeof t!="function")throw new Jt(p);return e=Be(e),function(){return--e>0&&(s=t.apply(this,arguments)),e<=1&&(t=o),s}}var cr=Ge(function(e,t,s){var C=b;if(s.length){var D=_n(s,ro(cr));C|=A}return Sn(e,C,t,s,D)}),Ns=Ge(function(e,t,s){var C=b|O;if(s.length){var D=_n(s,ro(Ns));C|=A}return Sn(t,C,e,s,D)});function Ds(e,t,s){t=s?o:t;var C=Sn(e,N,o,o,o,o,o,t);return C.placeholder=Ds.placeholder,C}function Rs(e,t,s){t=s?o:t;var C=Sn(e,T,o,o,o,o,o,t);return C.placeholder=Rs.placeholder,C}function _s(e,t,s){var C,D,w,G,K,Q,pe=0,ce=!1,fe=!1,Se=!0;if(typeof e!="function")throw new Jt(p);t=on(t)||0,ct(s)&&(ce=!!s.leading,fe="maxWait"in s,w=fe?bt(on(s.maxWait)||0,t):w,Se="trailing"in s?!!s.trailing:Se);function Ae(gt){var pn=C,On=D;return C=D=o,pe=gt,G=e.apply(On,pn),G}function Me(gt){return pe=gt,K=Oo(He,t),ce?Ae(gt):G}function ze(gt){var pn=gt-Q,On=gt-pe,Ys=t-pn;return fe?Rt(Ys,w-On):Ys}function xe(gt){var pn=gt-Q,On=gt-pe;return Q===o||pn>=t||pn<0||fe&&On>=w}function He(){var gt=li();if(xe(gt))return Ye(gt);K=Oo(He,ze(gt))}function Ye(gt){return K=o,Se&&C?Ae(gt):(C=D=o,G)}function qt(){K!==o&&Ba(K),pe=0,C=Q=D=K=o}function Lt(){return K===o?G:Ye(li())}function Kt(){var gt=li(),pn=xe(gt);if(C=arguments,D=this,Q=gt,pn){if(K===o)return Me(Q);if(fe)return Ba(K),K=Oo(He,t),Ae(Q)}return K===o&&(K=Oo(He,t)),G}return Kt.cancel=qt,Kt.flush=Lt,Kt}var Nu=Ge(function(e,t){return Sa(e,1,t)}),Du=Ge(function(e,t,s){return Sa(e,on(t)||0,s)});function Ru(e){return Sn(e,_)}function pi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Jt(p);var s=function(){var C=arguments,D=t?t.apply(this,C):C[0],w=s.cache;if(w.has(D))return w.get(D);var G=e.apply(this,C);return s.cache=w.set(D,G)||w,G};return s.cache=new(pi.Cache||vn),s}pi.Cache=vn;function ci(e){if(typeof e!="function")throw new Jt(p);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function _u(e){return As(2,e)}var Mu=vc(function(e,t){t=t.length==1&&je(t[0])?pt(t[0],$t(_e())):pt(Tt(t,1),$t(_e()));var s=t.length;return Ge(function(C){for(var D=-1,w=Rt(C.length,s);++D<w;)C[D]=t[D].call(this,C[D]);return Gt(e,this,C)})}),dr=Ge(function(e,t){var s=_n(t,ro(dr));return Sn(e,A,o,t,s)}),Ms=Ge(function(e,t){var s=_n(t,ro(Ms));return Sn(e,R,o,t,s)}),xu=bn(function(e,t){return Sn(e,x,o,o,o,t)});function Lu(e,t){if(typeof e!="function")throw new Jt(p);return t=t===o?t:Be(t),Ge(e,t)}function Iu(e,t){if(typeof e!="function")throw new Jt(p);return t=t==null?0:bt(Be(t),0),Ge(function(s){var C=s[t],D=Fn(s,0,t);return C&&Rn(D,C),Gt(e,this,D)})}function Fu(e,t,s){var C=!0,D=!0;if(typeof e!="function")throw new Jt(p);return ct(s)&&(C="leading"in s?!!s.leading:C,D="trailing"in s?!!s.trailing:D),_s(e,t,{leading:C,maxWait:t,trailing:D})}function ku(e){return Ts(e,1)}function wu(e,t){return dr(Yi(t),e)}function ju(){if(!arguments.length)return[];var e=arguments[0];return je(e)?e:[e]}function Uu(e){return en(e,f)}function Bu(e,t){return t=typeof t=="function"?t:o,en(e,f,t)}function zu(e){return en(e,h|f)}function Wu(e,t){return t=typeof t=="function"?t:o,en(e,h|f,t)}function Gu(e,t){return t==null||ya(e,t,Pt(t))}function ln(e,t){return e===t||e!==e&&t!==t}var $u=ni(wi),Hu=ni(function(e,t){return e>=t}),qn=Oa(function(){return arguments}())?Oa:function(e){return dt(e)&&nt.call(e,"callee")&&!ca.call(e,"callee")},je=oe.isArray,Vu=Hr?$t(Hr):ec;function wt(e){return e!=null&&di(e.length)&&!En(e)}function ft(e){return dt(e)&&wt(e)}function qu(e){return e===!0||e===!1||dt(e)&&Mt(e)==ut}var kn=sp||Er,Ku=Vr?$t(Vr):tc;function Yu(e){return dt(e)&&e.nodeType===1&&!To(e)}function Zu(e){if(e==null)return!0;if(wt(e)&&(je(e)||typeof e=="string"||typeof e.splice=="function"||kn(e)||ao(e)||qn(e)))return!e.length;var t=_t(e);if(t==We||t==ve)return!e.size;if(Po(e))return!Bi(e).length;for(var s in e)if(nt.call(e,s))return!1;return!0}function Xu(e,t){return bo(e,t)}function Ju(e,t,s){s=typeof s=="function"?s:o;var C=s?s(e,t):o;return C===o?bo(e,t,o,s):!!C}function ur(e){if(!dt(e))return!1;var t=Mt(e);return t==Re||t==At||typeof e.message=="string"&&typeof e.name=="string"&&!To(e)}function Qu(e){return typeof e=="number"&&ua(e)}function En(e){if(!ct(e))return!1;var t=Mt(e);return t==Ct||t==Ue||t==mt||t==De}function xs(e){return typeof e=="number"&&e==Be(e)}function di(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=V}function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function dt(e){return e!=null&&typeof e=="object"}var Ls=qr?$t(qr):oc;function ef(e,t){return e===t||Ui(e,t,nr(t))}function tf(e,t,s){return s=typeof s=="function"?s:o,Ui(e,t,nr(t),s)}function nf(e){return Is(e)&&e!=+e}function of(e){if(Bc(e))throw new we(d);return Ta(e)}function rf(e){return e===null}function af(e){return e==null}function Is(e){return typeof e=="number"||dt(e)&&Mt(e)==Bt}function To(e){if(!dt(e)||Mt(e)!=le)return!1;var t=jo(e);if(t===null)return!0;var s=nt.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&Io.call(s)==tp}var fr=Kr?$t(Kr):ic;function sf(e){return xs(e)&&e>=-V&&e<=V}var Fs=Yr?$t(Yr):rc;function ui(e){return typeof e=="string"||!je(e)&&dt(e)&&Mt(e)==he}function Vt(e){return typeof e=="symbol"||dt(e)&&Mt(e)==be}var ao=Zr?$t(Zr):ac;function lf(e){return e===o}function pf(e){return dt(e)&&_t(e)==Ke}function cf(e){return dt(e)&&Mt(e)==Je}var df=ni(zi),uf=ni(function(e,t){return e<=t});function ks(e){if(!e)return[];if(wt(e))return ui(e)?an(e):kt(e);if(uo&&e[uo])return Gl(e[uo]());var t=_t(e),s=t==We?Di:t==ve?_o:so;return s(e)}function Pn(e){if(!e)return e===0?e:0;if(e=on(e),e===q||e===-q){var t=e<0?-1:1;return t*ne}return e===e?e:0}function Be(e){var t=Pn(e),s=t%1;return t===t?s?t-s:t:0}function ws(e){return e?Gn(Be(e),0,de):0}function on(e){if(typeof e=="number")return e;if(Vt(e))return ae;if(ct(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ct(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=na(e);var s=yt.test(e);return s||rt.test(e)?Al(e.slice(2),s?2:8):Ie.test(e)?ae:+e}function js(e){return un(e,jt(e))}function ff(e){return e?Gn(Be(e),-V,V):e===0?e:0}function tt(e){return e==null?"":Ht(e)}var gf=oo(function(e,t){if(Po(t)||wt(t)){un(t,Pt(t),e);return}for(var s in t)nt.call(t,s)&&vo(e,s,t[s])}),Us=oo(function(e,t){un(t,jt(t),e)}),fi=oo(function(e,t,s,C){un(t,jt(t),e,C)}),mf=oo(function(e,t,s,C){un(t,Pt(t),e,C)}),hf=bn(Ii);function vf(e,t){var s=no(e);return t==null?s:va(s,t)}var yf=Ge(function(e,t){e=at(e);var s=-1,C=t.length,D=C>2?t[2]:o;for(D&&xt(t[0],t[1],D)&&(C=1);++s<C;)for(var w=t[s],G=jt(w),K=-1,Q=G.length;++K<Q;){var pe=G[K],ce=e[pe];(ce===o||ln(ce,Qn[pe])&&!nt.call(e,pe))&&(e[pe]=w[pe])}return e}),Sf=Ge(function(e){return e.push(o,ns),Gt(Bs,o,e)});function bf(e,t){return Jr(e,_e(t,3),dn)}function Cf(e,t){return Jr(e,_e(t,3),ki)}function Ef(e,t){return e==null?e:Fi(e,_e(t,3),jt)}function Pf(e,t){return e==null?e:Ea(e,_e(t,3),jt)}function Of(e,t){return e&&dn(e,_e(t,3))}function Tf(e,t){return e&&ki(e,_e(t,3))}function Af(e){return e==null?[]:Ko(e,Pt(e))}function Nf(e){return e==null?[]:Ko(e,jt(e))}function gr(e,t,s){var C=e==null?o:$n(e,t);return C===o?s:C}function Df(e,t){return e!=null&&rs(e,t,Zp)}function mr(e,t){return e!=null&&rs(e,t,Xp)}var Rf=Xa(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Fo.call(t)),e[t]=s},vr(Ut)),_f=Xa(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Fo.call(t)),nt.call(e,t)?e[t].push(s):e[t]=[s]},_e),Mf=Ge(So);function Pt(e){return wt(e)?ma(e):Bi(e)}function jt(e){return wt(e)?ma(e,!0):sc(e)}function xf(e,t){var s={};return t=_e(t,3),dn(e,function(C,D,w){yn(s,t(C,D,w),C)}),s}function Lf(e,t){var s={};return t=_e(t,3),dn(e,function(C,D,w){yn(s,D,t(C,D,w))}),s}var If=oo(function(e,t,s){Yo(e,t,s)}),Bs=oo(function(e,t,s,C){Yo(e,t,s,C)}),Ff=bn(function(e,t){var s={};if(e==null)return s;var C=!1;t=pt(t,function(w){return w=In(w,e),C||(C=w.length>1),w}),un(e,er(e),s),C&&(s=en(s,h|u|f,Dc));for(var D=t.length;D--;)Vi(s,t[D]);return s});function kf(e,t){return zs(e,ci(_e(t)))}var wf=bn(function(e,t){return e==null?{}:pc(e,t)});function zs(e,t){if(e==null)return{};var s=pt(er(e),function(C){return[C]});return t=_e(t),xa(e,s,function(C,D){return t(C,D[0])})}function jf(e,t,s){t=In(t,e);var C=-1,D=t.length;for(D||(D=1,e=o);++C<D;){var w=e==null?o:e[fn(t[C])];w===o&&(C=D,w=s),e=En(w)?w.call(e):w}return e}function Uf(e,t,s){return e==null?e:Co(e,t,s)}function Bf(e,t,s,C){return C=typeof C=="function"?C:o,e==null?e:Co(e,t,s,C)}var Ws=es(Pt),Gs=es(jt);function zf(e,t,s){var C=je(e),D=C||kn(e)||ao(e);if(t=_e(t,4),s==null){var w=e&&e.constructor;D?s=C?new w:[]:ct(e)?s=En(w)?no(jo(e)):{}:s={}}return(D?Xt:dn)(e,function(G,K,Q){return t(s,G,K,Q)}),s}function Wf(e,t){return e==null?!0:Vi(e,t)}function Gf(e,t,s){return e==null?e:wa(e,t,Yi(s))}function $f(e,t,s,C){return C=typeof C=="function"?C:o,e==null?e:wa(e,t,Yi(s),C)}function so(e){return e==null?[]:Ni(e,Pt(e))}function Hf(e){return e==null?[]:Ni(e,jt(e))}function Vf(e,t,s){return s===o&&(s=t,t=o),s!==o&&(s=on(s),s=s===s?s:0),t!==o&&(t=on(t),t=t===t?t:0),Gn(on(e),t,s)}function qf(e,t,s){return t=Pn(t),s===o?(s=t,t=0):s=Pn(s),e=on(e),Jp(e,t,s)}function Kf(e,t,s){if(s&&typeof s!="boolean"&&xt(e,t,s)&&(t=s=o),s===o&&(typeof t=="boolean"?(s=t,t=o):typeof e=="boolean"&&(s=e,e=o)),e===o&&t===o?(e=0,t=1):(e=Pn(e),t===o?(t=e,e=0):t=Pn(t)),e>t){var C=e;e=t,t=C}if(s||e%1||t%1){var D=fa();return Rt(e+D*(t-e+Tl("1e-"+((D+"").length-1))),t)}return Gi(e,t)}var Yf=io(function(e,t,s){return t=t.toLowerCase(),e+(s?$s(t):t)});function $s(e){return hr(tt(e).toLowerCase())}function Hs(e){return e=tt(e),e&&e.replace(Un,jl).replace(ml,"")}function Zf(e,t,s){e=tt(e),t=Ht(t);var C=e.length;s=s===o?C:Gn(Be(s),0,C);var D=s;return s-=t.length,s>=0&&e.slice(s,D)==t}function Xf(e){return e=tt(e),e&&jn.test(e)?e.replace(wn,Ul):e}function Jf(e){return e=tt(e),e&&W.test(e)?e.replace(Y,"\\$&"):e}var Qf=io(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()}),eg=io(function(e,t,s){return e+(s?" ":"")+t.toLowerCase()}),tg=Ka("toLowerCase");function ng(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;if(!t||C>=t)return e;var D=(t-C)/2;return ti(Wo(D),s)+e+ti(zo(D),s)}function og(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;return t&&C<t?e+ti(t-C,s):e}function ig(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;return t&&C<t?ti(t-C,s)+e:e}function rg(e,t,s){return s||t==null?t=0:t&&(t=+t),dp(tt(e).replace(X,""),t||0)}function ag(e,t,s){return(s?xt(e,t,s):t===o)?t=1:t=Be(t),$i(tt(e),t)}function sg(){var e=arguments,t=tt(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var lg=io(function(e,t,s){return e+(s?"_":"")+t.toLowerCase()});function pg(e,t,s){return s&&typeof s!="number"&&xt(e,t,s)&&(t=s=o),s=s===o?de:s>>>0,s?(e=tt(e),e&&(typeof t=="string"||t!=null&&!fr(t))&&(t=Ht(t),!t&&Xn(e))?Fn(an(e),0,s):e.split(t,s)):[]}var cg=io(function(e,t,s){return e+(s?" ":"")+hr(t)});function dg(e,t,s){return e=tt(e),s=s==null?0:Gn(Be(s),0,e.length),t=Ht(t),e.slice(s,s+t.length)==t}function ug(e,t,s){var C=I.templateSettings;s&&xt(e,t,s)&&(t=o),e=tt(e),t=fi({},t,C,ts);var D=fi({},t.imports,C.imports,ts),w=Pt(D),G=Ni(D,w),K,Q,pe=0,ce=t.interpolate||Et,fe="__p += '",Se=Ri((t.escape||Et).source+"|"+ce.source+"|"+(ce===Kn?Ve:Et).source+"|"+(t.evaluate||Et).source+"|$","g"),Ae="//# sourceURL="+(nt.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bl+"]")+`
`;e.replace(Se,function(xe,He,Ye,qt,Lt,Kt){return Ye||(Ye=qt),fe+=e.slice(pe,Kt).replace(Xs,Bl),He&&(K=!0,fe+=`' +
__e(`+He+`) +
'`),Lt&&(Q=!0,fe+=`';
`+Lt+`;
__p += '`),Ye&&(fe+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),pe=Kt+xe.length,xe}),fe+=`';
`;var Me=nt.call(t,"variable")&&t.variable;if(!Me)fe=`with (obj) {
`+fe+`
}
`;else if(Te.test(Me))throw new we(r);fe=(Q?fe.replace(Ft,""):fe).replace(mn,"$1").replace(vt,"$1;"),fe="function("+(Me||"obj")+`) {
`+(Me?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ze=qs(function(){return et(w,Ae+"return "+fe).apply(o,G)});if(ze.source=fe,ur(ze))throw ze;return ze}function fg(e){return tt(e).toLowerCase()}function gg(e){return tt(e).toUpperCase()}function mg(e,t,s){if(e=tt(e),e&&(s||t===o))return na(e);if(!e||!(t=Ht(t)))return e;var C=an(e),D=an(t),w=oa(C,D),G=ia(C,D)+1;return Fn(C,w,G).join("")}function hg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.slice(0,aa(e)+1);if(!e||!(t=Ht(t)))return e;var C=an(e),D=ia(C,an(t))+1;return Fn(C,0,D).join("")}function vg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.replace(X,"");if(!e||!(t=Ht(t)))return e;var C=an(e),D=oa(C,an(t));return Fn(C,D).join("")}function yg(e,t){var s=L,C=U;if(ct(t)){var D="separator"in t?t.separator:D;s="length"in t?Be(t.length):s,C="omission"in t?Ht(t.omission):C}e=tt(e);var w=e.length;if(Xn(e)){var G=an(e);w=G.length}if(s>=w)return e;var K=s-Jn(C);if(K<1)return C;var Q=G?Fn(G,0,K).join(""):e.slice(0,K);if(D===o)return Q+C;if(G&&(K+=Q.length-K),fr(D)){if(e.slice(K).search(D)){var pe,ce=Q;for(D.global||(D=Ri(D.source,tt(ye.exec(D))+"g")),D.lastIndex=0;pe=D.exec(ce);)var fe=pe.index;Q=Q.slice(0,fe===o?K:fe)}}else if(e.indexOf(Ht(D),K)!=K){var Se=Q.lastIndexOf(D);Se>-1&&(Q=Q.slice(0,Se))}return Q+C}function Sg(e){return e=tt(e),e&&cn.test(e)?e.replace(An,ql):e}var bg=io(function(e,t,s){return e+(s?" ":"")+t.toUpperCase()}),hr=Ka("toUpperCase");function Vs(e,t,s){return e=tt(e),t=s?o:t,t===o?Wl(e)?Zl(e):Ll(e):e.match(t)||[]}var qs=Ge(function(e,t){try{return Gt(e,o,t)}catch(s){return ur(s)?s:new we(s)}}),Cg=bn(function(e,t){return Xt(t,function(s){s=fn(s),yn(e,s,cr(e[s],e))}),e});function Eg(e){var t=e==null?0:e.length,s=_e();return e=t?pt(e,function(C){if(typeof C[1]!="function")throw new Jt(p);return[s(C[0]),C[1]]}):[],Ge(function(C){for(var D=-1;++D<t;){var w=e[D];if(Gt(w[0],this,C))return Gt(w[1],this,C)}})}function Pg(e){return qp(en(e,h))}function vr(e){return function(){return e}}function Og(e,t){return e==null||e!==e?t:e}var Tg=Za(),Ag=Za(!0);function Ut(e){return e}function yr(e){return Aa(typeof e=="function"?e:en(e,h))}function Ng(e){return Da(en(e,h))}function Dg(e,t){return Ra(e,en(t,h))}var Rg=Ge(function(e,t){return function(s){return So(s,e,t)}}),_g=Ge(function(e,t){return function(s){return So(e,s,t)}});function Sr(e,t,s){var C=Pt(t),D=Ko(t,C);s==null&&!(ct(t)&&(D.length||!C.length))&&(s=t,t=e,e=this,D=Ko(t,Pt(t)));var w=!(ct(s)&&"chain"in s)||!!s.chain,G=En(e);return Xt(D,function(K){var Q=t[K];e[K]=Q,G&&(e.prototype[K]=function(){var pe=this.__chain__;if(w||pe){var ce=e(this.__wrapped__),fe=ce.__actions__=kt(this.__actions__);return fe.push({func:Q,args:arguments,thisArg:e}),ce.__chain__=pe,ce}return Q.apply(e,Rn([this.value()],arguments))})}),e}function Mg(){return Ot._===this&&(Ot._=np),this}function br(){}function xg(e){return e=Be(e),Ge(function(t){return _a(t,e)})}var Lg=Xi(pt),Ig=Xi(Xr),Fg=Xi(Ei);function Ks(e){return ir(e)?Pi(fn(e)):cc(e)}function kg(e){return function(t){return e==null?o:$n(e,t)}}var wg=Ja(),jg=Ja(!0);function Cr(){return[]}function Er(){return!1}function Ug(){return{}}function Bg(){return""}function zg(){return!0}function Wg(e,t){if(e=Be(e),e<1||e>V)return[];var s=de,C=Rt(e,de);t=_e(t),e-=de;for(var D=Ai(C,t);++s<e;)t(s);return D}function Gg(e){return je(e)?pt(e,fn):Vt(e)?[e]:kt(gs(tt(e)))}function $g(e){var t=++ep;return tt(e)+t}var Hg=ei(function(e,t){return e+t},0),Vg=Ji("ceil"),qg=ei(function(e,t){return e/t},1),Kg=Ji("floor");function Yg(e){return e&&e.length?qo(e,Ut,wi):o}function Zg(e,t){return e&&e.length?qo(e,_e(t,2),wi):o}function Xg(e){return ea(e,Ut)}function Jg(e,t){return ea(e,_e(t,2))}function Qg(e){return e&&e.length?qo(e,Ut,zi):o}function e0(e,t){return e&&e.length?qo(e,_e(t,2),zi):o}var t0=ei(function(e,t){return e*t},1),n0=Ji("round"),o0=ei(function(e,t){return e-t},0);function i0(e){return e&&e.length?Ti(e,Ut):0}function r0(e,t){return e&&e.length?Ti(e,_e(t,2)):0}return I.after=Au,I.ary=Ts,I.assign=gf,I.assignIn=Us,I.assignInWith=fi,I.assignWith=mf,I.at=hf,I.before=As,I.bind=cr,I.bindAll=Cg,I.bindKey=Ns,I.castArray=ju,I.chain=Es,I.chunk=qc,I.compact=Kc,I.concat=Yc,I.cond=Eg,I.conforms=Pg,I.constant=vr,I.countBy=ou,I.create=vf,I.curry=Ds,I.curryRight=Rs,I.debounce=_s,I.defaults=yf,I.defaultsDeep=Sf,I.defer=Nu,I.delay=Du,I.difference=Zc,I.differenceBy=Xc,I.differenceWith=Jc,I.drop=Qc,I.dropRight=ed,I.dropRightWhile=td,I.dropWhile=nd,I.fill=od,I.filter=ru,I.flatMap=lu,I.flatMapDeep=pu,I.flatMapDepth=cu,I.flatten=ys,I.flattenDeep=id,I.flattenDepth=rd,I.flip=Ru,I.flow=Tg,I.flowRight=Ag,I.fromPairs=ad,I.functions=Af,I.functionsIn=Nf,I.groupBy=du,I.initial=ld,I.intersection=pd,I.intersectionBy=cd,I.intersectionWith=dd,I.invert=Rf,I.invertBy=_f,I.invokeMap=fu,I.iteratee=yr,I.keyBy=gu,I.keys=Pt,I.keysIn=jt,I.map=si,I.mapKeys=xf,I.mapValues=Lf,I.matches=Ng,I.matchesProperty=Dg,I.memoize=pi,I.merge=If,I.mergeWith=Bs,I.method=Rg,I.methodOf=_g,I.mixin=Sr,I.negate=ci,I.nthArg=xg,I.omit=Ff,I.omitBy=kf,I.once=_u,I.orderBy=mu,I.over=Lg,I.overArgs=Mu,I.overEvery=Ig,I.overSome=Fg,I.partial=dr,I.partialRight=Ms,I.partition=hu,I.pick=wf,I.pickBy=zs,I.property=Ks,I.propertyOf=kg,I.pull=md,I.pullAll=bs,I.pullAllBy=hd,I.pullAllWith=vd,I.pullAt=yd,I.range=wg,I.rangeRight=jg,I.rearg=xu,I.reject=Su,I.remove=Sd,I.rest=Lu,I.reverse=lr,I.sampleSize=Cu,I.set=Uf,I.setWith=Bf,I.shuffle=Eu,I.slice=bd,I.sortBy=Tu,I.sortedUniq=Nd,I.sortedUniqBy=Dd,I.split=pg,I.spread=Iu,I.tail=Rd,I.take=_d,I.takeRight=Md,I.takeRightWhile=xd,I.takeWhile=Ld,I.tap=Kd,I.throttle=Fu,I.thru=ai,I.toArray=ks,I.toPairs=Ws,I.toPairsIn=Gs,I.toPath=Gg,I.toPlainObject=js,I.transform=zf,I.unary=ku,I.union=Id,I.unionBy=Fd,I.unionWith=kd,I.uniq=wd,I.uniqBy=jd,I.uniqWith=Ud,I.unset=Wf,I.unzip=pr,I.unzipWith=Cs,I.update=Gf,I.updateWith=$f,I.values=so,I.valuesIn=Hf,I.without=Bd,I.words=Vs,I.wrap=wu,I.xor=zd,I.xorBy=Wd,I.xorWith=Gd,I.zip=$d,I.zipObject=Hd,I.zipObjectDeep=Vd,I.zipWith=qd,I.entries=Ws,I.entriesIn=Gs,I.extend=Us,I.extendWith=fi,Sr(I,I),I.add=Hg,I.attempt=qs,I.camelCase=Yf,I.capitalize=$s,I.ceil=Vg,I.clamp=Vf,I.clone=Uu,I.cloneDeep=zu,I.cloneDeepWith=Wu,I.cloneWith=Bu,I.conformsTo=Gu,I.deburr=Hs,I.defaultTo=Og,I.divide=qg,I.endsWith=Zf,I.eq=ln,I.escape=Xf,I.escapeRegExp=Jf,I.every=iu,I.find=au,I.findIndex=hs,I.findKey=bf,I.findLast=su,I.findLastIndex=vs,I.findLastKey=Cf,I.floor=Kg,I.forEach=Ps,I.forEachRight=Os,I.forIn=Ef,I.forInRight=Pf,I.forOwn=Of,I.forOwnRight=Tf,I.get=gr,I.gt=$u,I.gte=Hu,I.has=Df,I.hasIn=mr,I.head=Ss,I.identity=Ut,I.includes=uu,I.indexOf=sd,I.inRange=qf,I.invoke=Mf,I.isArguments=qn,I.isArray=je,I.isArrayBuffer=Vu,I.isArrayLike=wt,I.isArrayLikeObject=ft,I.isBoolean=qu,I.isBuffer=kn,I.isDate=Ku,I.isElement=Yu,I.isEmpty=Zu,I.isEqual=Xu,I.isEqualWith=Ju,I.isError=ur,I.isFinite=Qu,I.isFunction=En,I.isInteger=xs,I.isLength=di,I.isMap=Ls,I.isMatch=ef,I.isMatchWith=tf,I.isNaN=nf,I.isNative=of,I.isNil=af,I.isNull=rf,I.isNumber=Is,I.isObject=ct,I.isObjectLike=dt,I.isPlainObject=To,I.isRegExp=fr,I.isSafeInteger=sf,I.isSet=Fs,I.isString=ui,I.isSymbol=Vt,I.isTypedArray=ao,I.isUndefined=lf,I.isWeakMap=pf,I.isWeakSet=cf,I.join=ud,I.kebabCase=Qf,I.last=nn,I.lastIndexOf=fd,I.lowerCase=eg,I.lowerFirst=tg,I.lt=df,I.lte=uf,I.max=Yg,I.maxBy=Zg,I.mean=Xg,I.meanBy=Jg,I.min=Qg,I.minBy=e0,I.stubArray=Cr,I.stubFalse=Er,I.stubObject=Ug,I.stubString=Bg,I.stubTrue=zg,I.multiply=t0,I.nth=gd,I.noConflict=Mg,I.noop=br,I.now=li,I.pad=ng,I.padEnd=og,I.padStart=ig,I.parseInt=rg,I.random=Kf,I.reduce=vu,I.reduceRight=yu,I.repeat=ag,I.replace=sg,I.result=jf,I.round=n0,I.runInContext=J,I.sample=bu,I.size=Pu,I.snakeCase=lg,I.some=Ou,I.sortedIndex=Cd,I.sortedIndexBy=Ed,I.sortedIndexOf=Pd,I.sortedLastIndex=Od,I.sortedLastIndexBy=Td,I.sortedLastIndexOf=Ad,I.startCase=cg,I.startsWith=dg,I.subtract=o0,I.sum=i0,I.sumBy=r0,I.template=ug,I.times=Wg,I.toFinite=Pn,I.toInteger=Be,I.toLength=ws,I.toLower=fg,I.toNumber=on,I.toSafeInteger=ff,I.toString=tt,I.toUpper=gg,I.trim=mg,I.trimEnd=hg,I.trimStart=vg,I.truncate=yg,I.unescape=Sg,I.uniqueId=$g,I.upperCase=bg,I.upperFirst=hr,I.each=Ps,I.eachRight=Os,I.first=Ss,Sr(I,function(){var e={};return dn(I,function(t,s){nt.call(I.prototype,s)||(e[s]=t)}),e}(),{chain:!1}),I.VERSION=n,Xt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){I[e].placeholder=I}),Xt(["drop","take"],function(e,t){qe.prototype[e]=function(s){s=s===o?1:bt(Be(s),0);var C=this.__filtered__&&!t?new qe(this):this.clone();return C.__filtered__?C.__takeCount__=Rt(s,C.__takeCount__):C.__views__.push({size:Rt(s,de),type:e+(C.__dir__<0?"Right":"")}),C},qe.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Xt(["filter","map","takeWhile"],function(e,t){var s=t+1,C=s==B||s==j;qe.prototype[e]=function(D){var w=this.clone();return w.__iteratees__.push({iteratee:_e(D,3),type:s}),w.__filtered__=w.__filtered__||C,w}}),Xt(["head","last"],function(e,t){var s="take"+(t?"Right":"");qe.prototype[e]=function(){return this[s](1).value()[0]}}),Xt(["initial","tail"],function(e,t){var s="drop"+(t?"":"Right");qe.prototype[e]=function(){return this.__filtered__?new qe(this):this[s](1)}}),qe.prototype.compact=function(){return this.filter(Ut)},qe.prototype.find=function(e){return this.filter(e).head()},qe.prototype.findLast=function(e){return this.reverse().find(e)},qe.prototype.invokeMap=Ge(function(e,t){return typeof e=="function"?new qe(this):this.map(function(s){return So(s,e,t)})}),qe.prototype.reject=function(e){return this.filter(ci(_e(e)))},qe.prototype.slice=function(e,t){e=Be(e);var s=this;return s.__filtered__&&(e>0||t<0)?new qe(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),t!==o&&(t=Be(t),s=t<0?s.dropRight(-t):s.take(t-e)),s)},qe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qe.prototype.toArray=function(){return this.take(de)},dn(qe.prototype,function(e,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),C=/^(?:head|last)$/.test(t),D=I[C?"take"+(t=="last"?"Right":""):t],w=C||/^find/.test(t);!D||(I.prototype[t]=function(){var G=this.__wrapped__,K=C?[1]:arguments,Q=G instanceof qe,pe=K[0],ce=Q||je(G),fe=function(He){var Ye=D.apply(I,Rn([He],K));return C&&Se?Ye[0]:Ye};ce&&s&&typeof pe=="function"&&pe.length!=1&&(Q=ce=!1);var Se=this.__chain__,Ae=!!this.__actions__.length,Me=w&&!Se,ze=Q&&!Ae;if(!w&&ce){G=ze?G:new qe(this);var xe=e.apply(G,K);return xe.__actions__.push({func:ai,args:[fe],thisArg:o}),new Qt(xe,Se)}return Me&&ze?e.apply(this,K):(xe=this.thru(fe),Me?C?xe.value()[0]:xe.value():xe)})}),Xt(["pop","push","shift","sort","splice","unshift"],function(e){var t=xo[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",C=/^(?:pop|shift)$/.test(e);I.prototype[e]=function(){var D=arguments;if(C&&!this.__chain__){var w=this.value();return t.apply(je(w)?w:[],D)}return this[s](function(G){return t.apply(je(G)?G:[],D)})}}),dn(qe.prototype,function(e,t){var s=I[t];if(s){var C=s.name+"";nt.call(to,C)||(to[C]=[]),to[C].push({name:t,func:s})}}),to[Qo(o,O).name]=[{name:"wrapper",func:o}],qe.prototype.clone=yp,qe.prototype.reverse=Sp,qe.prototype.value=bp,I.prototype.at=Yd,I.prototype.chain=Zd,I.prototype.commit=Xd,I.prototype.next=Jd,I.prototype.plant=eu,I.prototype.reverse=tu,I.prototype.toJSON=I.prototype.valueOf=I.prototype.value=nu,I.prototype.first=I.prototype.head,uo&&(I.prototype[uo]=Qd),I},Mo=Xl();Ot._=Mo,g=function(){return Mo}.call(y,a,y,P),g!==o&&(P.exports=g)}).call(this)},1863:(P,y,a)=>{"use strict";const g=a(4613),o=Symbol("max"),n=Symbol("length"),l=Symbol("lengthCalculator"),d=Symbol("allowStale"),p=Symbol("maxAge"),r=Symbol("dispose"),c=Symbol("noDisposeOnSet"),m=Symbol("lruList"),i=Symbol("cache"),h=Symbol("updateAgeOnGet"),u=()=>1;class f{constructor(A){if(typeof A=="number"&&(A={max:A}),A||(A={}),A.max&&(typeof A.max!="number"||A.max<0))throw new TypeError("max must be a non-negative number");const R=this[o]=A.max||1/0,M=A.length||u;if(this[l]=typeof M!="function"?u:M,this[d]=A.stale||!1,A.maxAge&&typeof A.maxAge!="number")throw new TypeError("maxAge must be a number");this[p]=A.maxAge||0,this[r]=A.dispose,this[c]=A.noDisposeOnSet||!1,this[h]=A.updateAgeOnGet||!1,this.reset()}set max(A){if(typeof A!="number"||A<0)throw new TypeError("max must be a non-negative number");this[o]=A||1/0,b(this)}get max(){return this[o]}set allowStale(A){this[d]=!!A}get allowStale(){return this[d]}set maxAge(A){if(typeof A!="number")throw new TypeError("maxAge must be a non-negative number");this[p]=A,b(this)}get maxAge(){return this[p]}set lengthCalculator(A){typeof A!="function"&&(A=u),A!==this[l]&&(this[l]=A,this[n]=0,this[m].forEach(R=>{R.length=this[l](R.value,R.key),this[n]+=R.length})),b(this)}get lengthCalculator(){return this[l]}get length(){return this[n]}get itemCount(){return this[m].length}rforEach(A,R){R=R||this;for(let M=this[m].tail;M!==null;){const x=M.prev;N(this,A,M,R),M=x}}forEach(A,R){R=R||this;for(let M=this[m].head;M!==null;){const x=M.next;N(this,A,M,R),M=x}}keys(){return this[m].toArray().map(A=>A.key)}values(){return this[m].toArray().map(A=>A.value)}reset(){this[r]&&this[m]&&this[m].length&&this[m].forEach(A=>this[r](A.key,A.value)),this[i]=new Map,this[m]=new g,this[n]=0}dump(){return this[m].map(A=>v(this,A)?!1:{k:A.key,v:A.value,e:A.now+(A.maxAge||0)}).toArray().filter(A=>A)}dumpLru(){return this[m]}set(A,R,M){if(M=M||this[p],M&&typeof M!="number")throw new TypeError("maxAge must be a number");const x=M?Date.now():0,_=this[l](R,A);if(this[i].has(A)){if(_>this[o])return O(this,this[i].get(A)),!1;const k=this[i].get(A).value;return this[r]&&(this[c]||this[r](A,k.value)),k.now=x,k.maxAge=M,k.value=R,this[n]+=_-k.length,k.length=_,this.get(A),b(this),!0}const L=new E(A,R,_,x,M);return L.length>this[o]?(this[r]&&this[r](A,R),!1):(this[n]+=L.length,this[m].unshift(L),this[i].set(A,this[m].head),b(this),!0)}has(A){if(!this[i].has(A))return!1;const R=this[i].get(A).value;return!v(this,R)}get(A){return S(this,A,!0)}peek(A){return S(this,A,!1)}pop(){const A=this[m].tail;return A?(O(this,A),A.value):null}del(A){O(this,this[i].get(A))}load(A){this.reset();const R=Date.now();for(let M=A.length-1;M>=0;M--){const x=A[M],_=x.e||0;if(_===0)this.set(x.k,x.v);else{const L=_-R;L>0&&this.set(x.k,x.v,L)}}}prune(){this[i].forEach((A,R)=>S(this,R,!1))}}const S=(T,A,R)=>{const M=T[i].get(A);if(M){const x=M.value;if(v(T,x)){if(O(T,M),!T[d])return}else R&&(T[h]&&(M.value.now=Date.now()),T[m].unshiftNode(M));return x.value}},v=(T,A)=>{if(!A||!A.maxAge&&!T[p])return!1;const R=Date.now()-A.now;return A.maxAge?R>A.maxAge:T[p]&&R>T[p]},b=T=>{if(T[n]>T[o])for(let A=T[m].tail;T[n]>T[o]&&A!==null;){const R=A.prev;O(T,A),A=R}},O=(T,A)=>{if(A){const R=A.value;T[r]&&T[r](R.key,R.value),T[n]-=R.length,T[i].delete(R.key),T[m].removeNode(A)}};class E{constructor(A,R,M,x,_){this.key=A,this.value=R,this.length=M,this.now=x,this.maxAge=_||0}}const N=(T,A,R,M)=>{let x=R.value;v(T,x)&&(O(T,R),T[d]||(x=void 0)),x&&A.call(M,x.value,x.key,T)};P.exports=f},1155:()=>{(function(P){var y="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:a,environment:{pattern:RegExp("\\$"+y),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+y),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};P.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+y),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+y),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=P.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=g.variable[1].inside,l=0;l<o.length;l++)n[o[l]]=P.languages.bash[o[l]];P.languages.shell=P.languages.bash})(Prism)},6524:()=>{(function(P){function y(r){return RegExp("(^(?:"+r+"):[ 	]*(?![ 	]))[^]+","i")}P.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:P.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:y(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:P.languages.csp},{pattern:y(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:P.languages.hpkp},{pattern:y(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:P.languages.hsts},{pattern:y(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var a=P.languages,g={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css,"text/plain":a.plain},o={"application/json":!0,"application/xml":!0};function n(r){var c=r.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+c+"(?![+\\w.-])";return"(?:"+r+"|"+m+")"}var l;for(var d in g)if(g[d]){l=l||{};var p=o[d]?n(d):d;l[d.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+p+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:g[d]}}l&&P.languages.insertBefore("http","header",l)})(Prism)},2739:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},4495:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},501:(P,y,a)=>{var g=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var o=function(n){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,p={},r={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function E(N){return N instanceof c?new c(N.type,E(N.content),N.alias):Array.isArray(N)?N.map(E):N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(E){return Object.prototype.toString.call(E).slice(8,-1)},objId:function(E){return E.__id||Object.defineProperty(E,"__id",{value:++d}),E.__id},clone:function E(N,T){T=T||{};var A,R;switch(r.util.type(N)){case"Object":if(R=r.util.objId(N),T[R])return T[R];A={},T[R]=A;for(var M in N)N.hasOwnProperty(M)&&(A[M]=E(N[M],T));return A;case"Array":return R=r.util.objId(N),T[R]?T[R]:(A=[],T[R]=A,N.forEach(function(x,_){A[_]=E(x,T)}),A);default:return N}},getLanguage:function(E){for(;E;){var N=l.exec(E.className);if(N)return N[1].toLowerCase();E=E.parentElement}return"none"},setLanguage:function(E,N){E.className=E.className.replace(RegExp(l,"gi"),""),E.classList.add("language-"+N)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(A){var E=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack)||[])[1];if(E){var N=document.getElementsByTagName("script");for(var T in N)if(N[T].src==E)return N[T]}return null}},isActive:function(E,N,T){for(var A="no-"+N;E;){var R=E.classList;if(R.contains(N))return!0;if(R.contains(A))return!1;E=E.parentElement}return!!T}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(E,N){var T=r.util.clone(r.languages[E]);for(var A in N)T[A]=N[A];return T},insertBefore:function(E,N,T,A){A=A||r.languages;var R=A[E],M={};for(var x in R)if(R.hasOwnProperty(x)){if(x==N)for(var _ in T)T.hasOwnProperty(_)&&(M[_]=T[_]);T.hasOwnProperty(x)||(M[x]=R[x])}var L=A[E];return A[E]=M,r.languages.DFS(r.languages,function(U,k){k===L&&U!=E&&(this[U]=M)}),M},DFS:function E(N,T,A,R){R=R||{};var M=r.util.objId;for(var x in N)if(N.hasOwnProperty(x)){T.call(N,x,N[x],A||x);var _=N[x],L=r.util.type(_);L==="Object"&&!R[M(_)]?(R[M(_)]=!0,E(_,T,null,R)):L==="Array"&&!R[M(_)]&&(R[M(_)]=!0,E(_,T,x,R))}}},plugins:{},highlightAll:function(E,N){r.highlightAllUnder(document,E,N)},highlightAllUnder:function(E,N,T){var A={callback:T,container:E,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",A),A.elements=Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)),r.hooks.run("before-all-elements-highlight",A);for(var R=0,M;M=A.elements[R++];)r.highlightElement(M,N===!0,A.callback)},highlightElement:function(E,N,T){var A=r.util.getLanguage(E),R=r.languages[A];r.util.setLanguage(E,A);var M=E.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(M,A);var x=E.textContent,_={element:E,language:A,grammar:R,code:x};function L(k){_.highlightedCode=k,r.hooks.run("before-insert",_),_.element.innerHTML=_.highlightedCode,r.hooks.run("after-highlight",_),r.hooks.run("complete",_),T&&T.call(_.element)}if(r.hooks.run("before-sanity-check",_),M=_.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!_.code){r.hooks.run("complete",_),T&&T.call(_.element);return}if(r.hooks.run("before-highlight",_),!_.grammar){L(r.util.encode(_.code));return}if(N&&n.Worker){var U=new Worker(r.filename);U.onmessage=function(k){L(k.data)},U.postMessage(JSON.stringify({language:_.language,code:_.code,immediateClose:!0}))}else L(r.highlight(_.code,_.grammar,_.language))},highlight:function(E,N,T){var A={code:E,grammar:N,language:T};if(r.hooks.run("before-tokenize",A),!A.grammar)throw new Error('The language "'+A.language+'" has no grammar.');return A.tokens=r.tokenize(A.code,A.grammar),r.hooks.run("after-tokenize",A),c.stringify(r.util.encode(A.tokens),A.language)},tokenize:function(E,N){var T=N.rest;if(T){for(var A in T)N[A]=T[A];delete N.rest}var R=new h;return u(R,R.head,E),i(E,R,N,R.head,0),S(R)},hooks:{all:{},add:function(E,N){var T=r.hooks.all;T[E]=T[E]||[],T[E].push(N)},run:function(E,N){var T=r.hooks.all[E];if(!(!T||!T.length))for(var A=0,R;R=T[A++];)R(N)}},Token:c};n.Prism=r;function c(E,N,T,A){this.type=E,this.content=N,this.alias=T,this.length=(A||"").length|0}c.stringify=function E(N,T){if(typeof N=="string")return N;if(Array.isArray(N)){var A="";return N.forEach(function(L){A+=E(L,T)}),A}var R={type:N.type,content:E(N.content,T),tag:"span",classes:["token",N.type],attributes:{},language:T},M=N.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(R.classes,M):R.classes.push(M)),r.hooks.run("wrap",R);var x="";for(var _ in R.attributes)x+=" "+_+'="'+(R.attributes[_]||"").replace(/"/g,"&quot;")+'"';return"<"+R.tag+' class="'+R.classes.join(" ")+'"'+x+">"+R.content+"</"+R.tag+">"};function m(E,N,T,A){E.lastIndex=N;var R=E.exec(T);if(R&&A&&R[1]){var M=R[1].length;R.index+=M,R[0]=R[0].slice(M)}return R}function i(E,N,T,A,R,M){for(var x in T)if(!(!T.hasOwnProperty(x)||!T[x])){var _=T[x];_=Array.isArray(_)?_:[_];for(var L=0;L<_.length;++L){if(M&&M.cause==x+","+L)return;var U=_[L],k=U.inside,z=!!U.lookbehind,B=!!U.greedy,H=U.alias;if(B&&!U.pattern.global){var j=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,j+"g")}for(var q=U.pattern||U,V=A.next,ne=R;V!==N.tail&&!(M&&ne>=M.reach);ne+=V.value.length,V=V.next){var ae=V.value;if(N.length>E.length)return;if(!(ae instanceof c)){var de=1,te;if(B){if(te=m(q,ne,E,z),!te||te.index>=E.length)break;var it=te.index,ge=te.index+te[0].length,Ce=ne;for(Ce+=V.value.length;it>=Ce;)V=V.next,Ce+=V.value.length;if(Ce-=V.value.length,ne=Ce,V.value instanceof c)continue;for(var Fe=V;Fe!==N.tail&&(Ce<ge||typeof Fe.value=="string");Fe=Fe.next)de++,Ce+=Fe.value.length;de--,ae=E.slice(ne,Ce),te.index-=ne}else if(te=m(q,0,ae,z),!te)continue;var it=te.index,mt=te[0],ut=ae.slice(0,it),ht=ae.slice(it+mt.length),At=ne+ae.length;M&&At>M.reach&&(M.reach=At);var Re=V.prev;ut&&(Re=u(N,Re,ut),ne+=ut.length),f(N,Re,de);var Ct=new c(x,k?r.tokenize(mt,k):mt,H,mt);if(V=u(N,Re,Ct),ht&&u(N,V,ht),de>1){var Ue={cause:x+","+L,reach:At};i(E,N,T,V.prev,ne,Ue),M&&Ue.reach>M.reach&&(M.reach=Ue.reach)}}}}}}function h(){var E={value:null,prev:null,next:null},N={value:null,prev:E,next:null};E.next=N,this.head=E,this.tail=N,this.length=0}function u(E,N,T){var A=N.next,R={value:T,prev:N,next:A};return N.next=R,A.prev=R,E.length++,R}function f(E,N,T){for(var A=N.next,R=0;R<T&&A!==E.tail;R++)A=A.next;N.next=A,A.prev=N,E.length-=R}function S(E){for(var N=[],T=E.head.next;T!==E.tail;)N.push(T.value),T=T.next;return N}if(!n.document)return n.addEventListener&&(r.disableWorkerMessageHandler||n.addEventListener("message",function(E){var N=JSON.parse(E.data),T=N.language,A=N.code,R=N.immediateClose;n.postMessage(r.highlight(A,r.languages[T],T)),R&&n.close()},!1)),r;var v=r.util.currentScript();v&&(r.filename=v.src,v.hasAttribute("data-manual")&&(r.manual=!0));function b(){r.manual||r.highlightAll()}if(!r.manual){var O=document.readyState;O==="loading"||O==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return r}(g);P.exports&&(P.exports=o),typeof a.g!="undefined"&&(a.g.Prism=o),o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(l,d){var p={};p["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[d]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};r["language-"+d]={pattern:/[\s\S]+/,inside:o.languages[d]};var c={};c[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:r},o.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(n,l){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:o.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml,function(n){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var d=n.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(o),o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),o.languages.js=o.languages.javascript,function(){if(typeof o=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",l=function(v,b){return"\u2716 Error "+v+" while fetching file: "+b},d="\u2716 Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",c="loading",m="loaded",i="failed",h="pre[data-src]:not(["+r+'="'+m+'"]):not(['+r+'="'+c+'"])';function u(v,b,O){var E=new XMLHttpRequest;E.open("GET",v,!0),E.onreadystatechange=function(){E.readyState==4&&(E.status<400&&E.responseText?b(E.responseText):E.status>=400?O(l(E.status,E.statusText)):O(d))},E.send(null)}function f(v){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(b){var O=Number(b[1]),E=b[2],N=b[3];return E?N?[O,Number(N)]:[O,void 0]:[O,O]}}o.hooks.add("before-highlightall",function(v){v.selector+=", "+h}),o.hooks.add("before-sanity-check",function(v){var b=v.element;if(b.matches(h)){v.code="",b.setAttribute(r,c);var O=b.appendChild(document.createElement("CODE"));O.textContent=n;var E=b.getAttribute("data-src"),N=v.language;if(N==="none"){var T=(/\.(\w+)$/.exec(E)||[,"none"])[1];N=p[T]||T}o.util.setLanguage(O,N),o.util.setLanguage(b,N);var A=o.plugins.autoloader;A&&A.loadLanguages(N),u(E,function(R){b.setAttribute(r,m);var M=f(b.getAttribute("data-range"));if(M){var x=R.split(/\r\n?|\n/g),_=M[0],L=M[1]==null?x.length:M[1];_<0&&(_+=x.length),_=Math.max(0,Math.min(_-1,x.length)),L<0&&(L+=x.length),L=Math.max(0,Math.min(L,x.length)),R=x.slice(_,L).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(_+1))}O.textContent=R,o.highlightElement(O)},function(R){b.setAttribute(r,i),O.textContent=R})}}),o.plugins.fileHighlight={highlight:function(b){for(var O=(b||document).querySelectorAll(h),E=0,N;N=O[E++];)o.highlightElement(N)}};var S=!1;o.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),o.plugins.fileHighlight.highlight.apply(this,arguments)}}()},5011:(P,y,a)=>{const g=Symbol("SemVer ANY");class o{static get ANY(){return g}constructor(h,u){if(u=n(u),h instanceof o){if(h.loose===!!u.loose)return h;h=h.value}r("comparator",h,u),this.options=u,this.loose=!!u.loose,this.parse(h),this.semver===g?this.value="":this.value=this.operator+this.semver.version,r("comp",this)}parse(h){const u=this.options.loose?l[d.COMPARATORLOOSE]:l[d.COMPARATOR],f=h.match(u);if(!f)throw new TypeError(`Invalid comparator: ${h}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new c(f[2],this.options.loose):this.semver=g}toString(){return this.value}test(h){if(r("Comparator.test",h,this.options.loose),this.semver===g||h===g)return!0;if(typeof h=="string")try{h=new c(h,this.options)}catch(u){return!1}return p(h,this.operator,this.semver,this.options)}intersects(h,u){if(!(h instanceof o))throw new TypeError("a Comparator is required");if((!u||typeof u!="object")&&(u={loose:!!u,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new m(h.value,u).test(this.value);if(h.operator==="")return h.value===""?!0:new m(this.value,u).test(h.semver);const f=(this.operator===">="||this.operator===">")&&(h.operator===">="||h.operator===">"),S=(this.operator==="<="||this.operator==="<")&&(h.operator==="<="||h.operator==="<"),v=this.semver.version===h.semver.version,b=(this.operator===">="||this.operator==="<=")&&(h.operator===">="||h.operator==="<="),O=p(this.semver,"<",h.semver,u)&&(this.operator===">="||this.operator===">")&&(h.operator==="<="||h.operator==="<"),E=p(this.semver,">",h.semver,u)&&(this.operator==="<="||this.operator==="<")&&(h.operator===">="||h.operator===">");return f||S||v&&b||O||E}}P.exports=o;const n=a(7774),{re:l,t:d}=a(1636),p=a(2507),r=a(6208),c=a(9745),m=a(8165)},8165:(P,y,a)=>{class g{constructor(z,B){if(B=l(B),z instanceof g)return z.loose===!!B.loose&&z.includePrerelease===!!B.includePrerelease?z:new g(z.raw,B);if(z instanceof d)return this.raw=z.value,this.set=[[z]],this.format(),this;if(this.options=B,this.loose=!!B.loose,this.includePrerelease=!!B.includePrerelease,this.raw=z,this.set=z.split("||").map(H=>this.parseRange(H.trim())).filter(H=>H.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${z}`);if(this.set.length>1){const H=this.set[0];if(this.set=this.set.filter(j=>!f(j[0])),this.set.length===0)this.set=[H];else if(this.set.length>1){for(const j of this.set)if(j.length===1&&S(j[0])){this.set=[j];break}}}this.format()}format(){return this.range=this.set.map(z=>z.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(z){z=z.trim();const H=`parseRange:${Object.keys(this.options).join(",")}:${z}`,j=n.get(H);if(j)return j;const q=this.options.loose,V=q?c[m.HYPHENRANGELOOSE]:c[m.HYPHENRANGE];z=z.replace(V,L(this.options.includePrerelease)),p("hyphen replace",z),z=z.replace(c[m.COMPARATORTRIM],i),p("comparator trim",z),z=z.replace(c[m.TILDETRIM],h),z=z.replace(c[m.CARETTRIM],u),z=z.split(/\s+/).join(" ");let ne=z.split(" ").map(ge=>b(ge,this.options)).join(" ").split(/\s+/).map(ge=>_(ge,this.options));q&&(ne=ne.filter(ge=>(p("loose invalid filter",ge,this.options),!!ge.match(c[m.COMPARATORLOOSE])))),p("range list",ne);const ae=new Map,de=ne.map(ge=>new d(ge,this.options));for(const ge of de){if(f(ge))return[ge];ae.set(ge.value,ge)}ae.size>1&&ae.has("")&&ae.delete("");const te=[...ae.values()];return n.set(H,te),te}intersects(z,B){if(!(z instanceof g))throw new TypeError("a Range is required");return this.set.some(H=>v(H,B)&&z.set.some(j=>v(j,B)&&H.every(q=>j.every(V=>q.intersects(V,B)))))}test(z){if(!z)return!1;if(typeof z=="string")try{z=new r(z,this.options)}catch(B){return!1}for(let B=0;B<this.set.length;B++)if(U(this.set[B],z,this.options))return!0;return!1}}P.exports=g;const o=a(1863),n=new o({max:1e3}),l=a(7774),d=a(5011),p=a(6208),r=a(9745),{re:c,t:m,comparatorTrimReplace:i,tildeTrimReplace:h,caretTrimReplace:u}=a(1636),f=k=>k.value==="<0.0.0-0",S=k=>k.value==="",v=(k,z)=>{let B=!0;const H=k.slice();let j=H.pop();for(;B&&H.length;)B=H.every(q=>j.intersects(q,z)),j=H.pop();return B},b=(k,z)=>(p("comp",k,z),k=T(k,z),p("caret",k),k=E(k,z),p("tildes",k),k=R(k,z),p("xrange",k),k=x(k,z),p("stars",k),k),O=k=>!k||k.toLowerCase()==="x"||k==="*",E=(k,z)=>k.trim().split(/\s+/).map(B=>N(B,z)).join(" "),N=(k,z)=>{const B=z.loose?c[m.TILDELOOSE]:c[m.TILDE];return k.replace(B,(H,j,q,V,ne)=>{p("tilde",k,H,j,q,V,ne);let ae;return O(j)?ae="":O(q)?ae=`>=${j}.0.0 <${+j+1}.0.0-0`:O(V)?ae=`>=${j}.${q}.0 <${j}.${+q+1}.0-0`:ne?(p("replaceTilde pr",ne),ae=`>=${j}.${q}.${V}-${ne} <${j}.${+q+1}.0-0`):ae=`>=${j}.${q}.${V} <${j}.${+q+1}.0-0`,p("tilde return",ae),ae})},T=(k,z)=>k.trim().split(/\s+/).map(B=>A(B,z)).join(" "),A=(k,z)=>{p("caret",k,z);const B=z.loose?c[m.CARETLOOSE]:c[m.CARET],H=z.includePrerelease?"-0":"";return k.replace(B,(j,q,V,ne,ae)=>{p("caret",k,j,q,V,ne,ae);let de;return O(q)?de="":O(V)?de=`>=${q}.0.0${H} <${+q+1}.0.0-0`:O(ne)?q==="0"?de=`>=${q}.${V}.0${H} <${q}.${+V+1}.0-0`:de=`>=${q}.${V}.0${H} <${+q+1}.0.0-0`:ae?(p("replaceCaret pr",ae),q==="0"?V==="0"?de=`>=${q}.${V}.${ne}-${ae} <${q}.${V}.${+ne+1}-0`:de=`>=${q}.${V}.${ne}-${ae} <${q}.${+V+1}.0-0`:de=`>=${q}.${V}.${ne}-${ae} <${+q+1}.0.0-0`):(p("no pr"),q==="0"?V==="0"?de=`>=${q}.${V}.${ne}${H} <${q}.${V}.${+ne+1}-0`:de=`>=${q}.${V}.${ne}${H} <${q}.${+V+1}.0-0`:de=`>=${q}.${V}.${ne} <${+q+1}.0.0-0`),p("caret return",de),de})},R=(k,z)=>(p("replaceXRanges",k,z),k.split(/\s+/).map(B=>M(B,z)).join(" ")),M=(k,z)=>{k=k.trim();const B=z.loose?c[m.XRANGELOOSE]:c[m.XRANGE];return k.replace(B,(H,j,q,V,ne,ae)=>{p("xRange",k,H,j,q,V,ne,ae);const de=O(q),te=de||O(V),ge=te||O(ne),Ce=ge;return j==="="&&Ce&&(j=""),ae=z.includePrerelease?"-0":"",de?j===">"||j==="<"?H="<0.0.0-0":H="*":j&&Ce?(te&&(V=0),ne=0,j===">"?(j=">=",te?(q=+q+1,V=0,ne=0):(V=+V+1,ne=0)):j==="<="&&(j="<",te?q=+q+1:V=+V+1),j==="<"&&(ae="-0"),H=`${j+q}.${V}.${ne}${ae}`):te?H=`>=${q}.0.0${ae} <${+q+1}.0.0-0`:ge&&(H=`>=${q}.${V}.0${ae} <${q}.${+V+1}.0-0`),p("xRange return",H),H})},x=(k,z)=>(p("replaceStars",k,z),k.trim().replace(c[m.STAR],"")),_=(k,z)=>(p("replaceGTE0",k,z),k.trim().replace(c[z.includePrerelease?m.GTE0PRE:m.GTE0],"")),L=k=>(z,B,H,j,q,V,ne,ae,de,te,ge,Ce,Fe)=>(O(H)?B="":O(j)?B=`>=${H}.0.0${k?"-0":""}`:O(q)?B=`>=${H}.${j}.0${k?"-0":""}`:V?B=`>=${B}`:B=`>=${B}${k?"-0":""}`,O(de)?ae="":O(te)?ae=`<${+de+1}.0.0-0`:O(ge)?ae=`<${de}.${+te+1}.0-0`:Ce?ae=`<=${de}.${te}.${ge}-${Ce}`:k?ae=`<${de}.${te}.${+ge+1}-0`:ae=`<=${ae}`,`${B} ${ae}`.trim()),U=(k,z,B)=>{for(let H=0;H<k.length;H++)if(!k[H].test(z))return!1;if(z.prerelease.length&&!B.includePrerelease){for(let H=0;H<k.length;H++)if(p(k[H].semver),k[H].semver!==d.ANY&&k[H].semver.prerelease.length>0){const j=k[H].semver;if(j.major===z.major&&j.minor===z.minor&&j.patch===z.patch)return!0}return!1}return!0}},9745:(P,y,a)=>{const g=a(6208),{MAX_LENGTH:o,MAX_SAFE_INTEGER:n}=a(7730),{re:l,t:d}=a(1636),p=a(7774),{compareIdentifiers:r}=a(3311);class c{constructor(i,h){if(h=p(h),i instanceof c){if(i.loose===!!h.loose&&i.includePrerelease===!!h.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid Version: ${i}`);if(i.length>o)throw new TypeError(`version is longer than ${o} characters`);g("SemVer",i,h),this.options=h,this.loose=!!h.loose,this.includePrerelease=!!h.includePrerelease;const u=i.trim().match(h.loose?l[d.LOOSE]:l[d.FULL]);if(!u)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const S=+f;if(S>=0&&S<n)return S}return f}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(g("SemVer.compare",this.version,this.options,i),!(i instanceof c)){if(typeof i=="string"&&i===this.version)return 0;i=new c(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof c||(i=new c(i,this.options)),r(this.major,i.major)||r(this.minor,i.minor)||r(this.patch,i.patch)}comparePre(i){if(i instanceof c||(i=new c(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let h=0;do{const u=this.prerelease[h],f=i.prerelease[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return r(u,f)}while(++h)}compareBuild(i){i instanceof c||(i=new c(i,this.options));let h=0;do{const u=this.build[h],f=i.build[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return r(u,f)}while(++h)}inc(i,h){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",h);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",h);break;case"prepatch":this.prerelease.length=0,this.inc("patch",h),this.inc("pre",h);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",h),this.inc("pre",h);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let u=this.prerelease.length;for(;--u>=0;)typeof this.prerelease[u]=="number"&&(this.prerelease[u]++,u=-2);u===-1&&this.prerelease.push(0)}h&&(r(this.prerelease[0],h)===0?isNaN(this.prerelease[1])&&(this.prerelease=[h,0]):this.prerelease=[h,0]);break;default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}P.exports=c},915:(P,y,a)=>{const g=a(3173),o=(n,l)=>{const d=g(n.trim().replace(/^[=v]+/,""),l);return d?d.version:null};P.exports=o},2507:(P,y,a)=>{const g=a(9813),o=a(9475),n=a(3917),l=a(840),d=a(8923),p=a(1225),r=(c,m,i,h)=>{switch(m){case"===":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c===i;case"!==":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c!==i;case"":case"=":case"==":return g(c,i,h);case"!=":return o(c,i,h);case">":return n(c,i,h);case">=":return l(c,i,h);case"<":return d(c,i,h);case"<=":return p(c,i,h);default:throw new TypeError(`Invalid operator: ${m}`)}};P.exports=r},6752:(P,y,a)=>{const g=a(9745),o=a(3173),{re:n,t:l}=a(1636),d=(p,r)=>{if(p instanceof g)return p;if(typeof p=="number"&&(p=String(p)),typeof p!="string")return null;r=r||{};let c=null;if(!r.rtl)c=p.match(n[l.COERCE]);else{let m;for(;(m=n[l.COERCERTL].exec(p))&&(!c||c.index+c[0].length!==p.length);)(!c||m.index+m[0].length!==c.index+c[0].length)&&(c=m),n[l.COERCERTL].lastIndex=m.index+m[1].length+m[2].length;n[l.COERCERTL].lastIndex=-1}return c===null?null:o(`${c[2]}.${c[3]||"0"}.${c[4]||"0"}`,r)};P.exports=d},8303:(P,y,a)=>{const g=a(9745),o=(n,l,d)=>{const p=new g(n,d),r=new g(l,d);return p.compare(r)||p.compareBuild(r)};P.exports=o},1992:(P,y,a)=>{const g=a(1785),o=(n,l)=>g(n,l,!0);P.exports=o},1785:(P,y,a)=>{const g=a(9745),o=(n,l,d)=>new g(n,d).compare(new g(l,d));P.exports=o},7297:(P,y,a)=>{const g=a(3173),o=a(9813),n=(l,d)=>{if(o(l,d))return null;{const p=g(l),r=g(d),c=p.prerelease.length||r.prerelease.length,m=c?"pre":"",i=c?"prerelease":"";for(const h in p)if((h==="major"||h==="minor"||h==="patch")&&p[h]!==r[h])return m+h;return i}};P.exports=n},9813:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(n,l,d)===0;P.exports=o},3917:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(n,l,d)>0;P.exports=o},840:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(n,l,d)>=0;P.exports=o},6615:(P,y,a)=>{const g=a(9745),o=(n,l,d,p)=>{typeof d=="string"&&(p=d,d=void 0);try{return new g(n instanceof g?n.version:n,d).inc(l,p).version}catch(r){return null}};P.exports=o},8923:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(n,l,d)<0;P.exports=o},1225:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(n,l,d)<=0;P.exports=o},2671:(P,y,a)=>{const g=a(9745),o=(n,l)=>new g(n,l).major;P.exports=o},2265:(P,y,a)=>{const g=a(9745),o=(n,l)=>new g(n,l).minor;P.exports=o},9475:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(n,l,d)!==0;P.exports=o},3173:(P,y,a)=>{const{MAX_LENGTH:g}=a(7730),{re:o,t:n}=a(1636),l=a(9745),d=a(7774),p=(r,c)=>{if(c=d(c),r instanceof l)return r;if(typeof r!="string"||r.length>g||!(c.loose?o[n.LOOSE]:o[n.FULL]).test(r))return null;try{return new l(r,c)}catch(i){return null}};P.exports=p},469:(P,y,a)=>{const g=a(9745),o=(n,l)=>new g(n,l).patch;P.exports=o},5289:(P,y,a)=>{const g=a(3173),o=(n,l)=>{const d=g(n,l);return d&&d.prerelease.length?d.prerelease:null};P.exports=o},6259:(P,y,a)=>{const g=a(1785),o=(n,l,d)=>g(l,n,d);P.exports=o},9737:(P,y,a)=>{const g=a(8303),o=(n,l)=>n.sort((d,p)=>g(p,d,l));P.exports=o},1887:(P,y,a)=>{const g=a(8165),o=(n,l,d)=>{try{l=new g(l,d)}catch(p){return!1}return l.test(n)};P.exports=o},1435:(P,y,a)=>{const g=a(8303),o=(n,l)=>n.sort((d,p)=>g(d,p,l));P.exports=o},2659:(P,y,a)=>{const g=a(3173),o=(n,l)=>{const d=g(n,l);return d?d.version:null};P.exports=o},8408:(P,y,a)=>{const g=a(1636);P.exports={re:g.re,src:g.src,tokens:g.t,SEMVER_SPEC_VERSION:a(7730).SEMVER_SPEC_VERSION,SemVer:a(9745),compareIdentifiers:a(3311).compareIdentifiers,rcompareIdentifiers:a(3311).rcompareIdentifiers,parse:a(3173),valid:a(2659),clean:a(915),inc:a(6615),diff:a(7297),major:a(2671),minor:a(2265),patch:a(469),prerelease:a(5289),compare:a(1785),rcompare:a(6259),compareLoose:a(1992),compareBuild:a(8303),sort:a(1435),rsort:a(9737),gt:a(3917),lt:a(8923),eq:a(9813),neq:a(9475),gte:a(840),lte:a(1225),cmp:a(2507),coerce:a(6752),Comparator:a(5011),Range:a(8165),satisfies:a(1887),toComparators:a(4451),maxSatisfying:a(3204),minSatisfying:a(2421),minVersion:a(7562),validRange:a(4068),outside:a(2760),gtr:a(4531),ltr:a(4330),intersects:a(5714),simplifyRange:a(8275),subset:a(7109)}},7730:P=>{const y="2.0.0",g=Number.MAX_SAFE_INTEGER||9007199254740991,o=16;P.exports={SEMVER_SPEC_VERSION:y,MAX_LENGTH:256,MAX_SAFE_INTEGER:g,MAX_SAFE_COMPONENT_LENGTH:o}},6208:P=>{const y=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...a)=>console.error("SEMVER",...a):()=>{};P.exports=y},3311:P=>{const y=/^[0-9]+$/,a=(o,n)=>{const l=y.test(o),d=y.test(n);return l&&d&&(o=+o,n=+n),o===n?0:l&&!d?-1:d&&!l?1:o<n?-1:1},g=(o,n)=>a(n,o);P.exports={compareIdentifiers:a,rcompareIdentifiers:g}},7774:P=>{const y=["includePrerelease","loose","rtl"],a=g=>g?typeof g!="object"?{loose:!0}:y.filter(o=>g[o]).reduce((o,n)=>(o[n]=!0,o),{}):{};P.exports=a},1636:(P,y,a)=>{const{MAX_SAFE_COMPONENT_LENGTH:g}=a(7730),o=a(6208);y=P.exports={};const n=y.re=[],l=y.src=[],d=y.t={};let p=0;const r=(c,m,i)=>{const h=p++;o(c,h,m),d[c]=h,l[h]=m,n[h]=new RegExp(m,i?"g":void 0)};r("NUMERICIDENTIFIER","0|[1-9]\\d*"),r("NUMERICIDENTIFIERLOOSE","[0-9]+"),r("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),r("MAINVERSION",`(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})`),r("MAINVERSIONLOOSE",`(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})`),r("PRERELEASEIDENTIFIER",`(?:${l[d.NUMERICIDENTIFIER]}|${l[d.NONNUMERICIDENTIFIER]})`),r("PRERELEASEIDENTIFIERLOOSE",`(?:${l[d.NUMERICIDENTIFIERLOOSE]}|${l[d.NONNUMERICIDENTIFIER]})`),r("PRERELEASE",`(?:-(${l[d.PRERELEASEIDENTIFIER]}(?:\\.${l[d.PRERELEASEIDENTIFIER]})*))`),r("PRERELEASELOOSE",`(?:-?(${l[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[d.PRERELEASEIDENTIFIERLOOSE]})*))`),r("BUILDIDENTIFIER","[0-9A-Za-z-]+"),r("BUILD",`(?:\\+(${l[d.BUILDIDENTIFIER]}(?:\\.${l[d.BUILDIDENTIFIER]})*))`),r("FULLPLAIN",`v?${l[d.MAINVERSION]}${l[d.PRERELEASE]}?${l[d.BUILD]}?`),r("FULL",`^${l[d.FULLPLAIN]}$`),r("LOOSEPLAIN",`[v=\\s]*${l[d.MAINVERSIONLOOSE]}${l[d.PRERELEASELOOSE]}?${l[d.BUILD]}?`),r("LOOSE",`^${l[d.LOOSEPLAIN]}$`),r("GTLT","((?:<|>)?=?)"),r("XRANGEIDENTIFIERLOOSE",`${l[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),r("XRANGEIDENTIFIER",`${l[d.NUMERICIDENTIFIER]}|x|X|\\*`),r("XRANGEPLAIN",`[v=\\s]*(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:${l[d.PRERELEASE]})?${l[d.BUILD]}?)?)?`),r("XRANGEPLAINLOOSE",`[v=\\s]*(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:${l[d.PRERELEASELOOSE]})?${l[d.BUILD]}?)?)?`),r("XRANGE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAIN]}$`),r("XRANGELOOSE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAINLOOSE]}$`),r("COERCE",`(^|[^\\d])(\\d{1,${g}})(?:\\.(\\d{1,${g}}))?(?:\\.(\\d{1,${g}}))?(?:$|[^\\d])`),r("COERCERTL",l[d.COERCE],!0),r("LONETILDE","(?:~>?)"),r("TILDETRIM",`(\\s*)${l[d.LONETILDE]}\\s+`,!0),y.tildeTrimReplace="$1~",r("TILDE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAIN]}$`),r("TILDELOOSE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAINLOOSE]}$`),r("LONECARET","(?:\\^)"),r("CARETTRIM",`(\\s*)${l[d.LONECARET]}\\s+`,!0),y.caretTrimReplace="$1^",r("CARET",`^${l[d.LONECARET]}${l[d.XRANGEPLAIN]}$`),r("CARETLOOSE",`^${l[d.LONECARET]}${l[d.XRANGEPLAINLOOSE]}$`),r("COMPARATORLOOSE",`^${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]})$|^$`),r("COMPARATOR",`^${l[d.GTLT]}\\s*(${l[d.FULLPLAIN]})$|^$`),r("COMPARATORTRIM",`(\\s*)${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]}|${l[d.XRANGEPLAIN]})`,!0),y.comparatorTrimReplace="$1$2$3",r("HYPHENRANGE",`^\\s*(${l[d.XRANGEPLAIN]})\\s+-\\s+(${l[d.XRANGEPLAIN]})\\s*$`),r("HYPHENRANGELOOSE",`^\\s*(${l[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[d.XRANGEPLAINLOOSE]})\\s*$`),r("STAR","(<|>)?=?\\s*\\*"),r("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),r("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},4531:(P,y,a)=>{const g=a(2760),o=(n,l,d)=>g(n,l,">",d);P.exports=o},5714:(P,y,a)=>{const g=a(8165),o=(n,l,d)=>(n=new g(n,d),l=new g(l,d),n.intersects(l));P.exports=o},4330:(P,y,a)=>{const g=a(2760),o=(n,l,d)=>g(n,l,"<",d);P.exports=o},3204:(P,y,a)=>{const g=a(9745),o=a(8165),n=(l,d,p)=>{let r=null,c=null,m=null;try{m=new o(d,p)}catch(i){return null}return l.forEach(i=>{m.test(i)&&(!r||c.compare(i)===-1)&&(r=i,c=new g(r,p))}),r};P.exports=n},2421:(P,y,a)=>{const g=a(9745),o=a(8165),n=(l,d,p)=>{let r=null,c=null,m=null;try{m=new o(d,p)}catch(i){return null}return l.forEach(i=>{m.test(i)&&(!r||c.compare(i)===1)&&(r=i,c=new g(r,p))}),r};P.exports=n},7562:(P,y,a)=>{const g=a(9745),o=a(8165),n=a(3917),l=(d,p)=>{d=new o(d,p);let r=new g("0.0.0");if(d.test(r)||(r=new g("0.0.0-0"),d.test(r)))return r;r=null;for(let c=0;c<d.set.length;++c){const m=d.set[c];let i=null;m.forEach(h=>{const u=new g(h.semver.version);switch(h.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!i||n(u,i))&&(i=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${h.operator}`)}}),i&&(!r||n(r,i))&&(r=i)}return r&&d.test(r)?r:null};P.exports=l},2760:(P,y,a)=>{const g=a(9745),o=a(5011),{ANY:n}=o,l=a(8165),d=a(1887),p=a(3917),r=a(8923),c=a(1225),m=a(840),i=(h,u,f,S)=>{h=new g(h,S),u=new l(u,S);let v,b,O,E,N;switch(f){case">":v=p,b=c,O=r,E=">",N=">=";break;case"<":v=r,b=m,O=p,E="<",N="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(d(h,u,S))return!1;for(let T=0;T<u.set.length;++T){const A=u.set[T];let R=null,M=null;if(A.forEach(x=>{x.semver===n&&(x=new o(">=0.0.0")),R=R||x,M=M||x,v(x.semver,R.semver,S)?R=x:O(x.semver,M.semver,S)&&(M=x)}),R.operator===E||R.operator===N||(!M.operator||M.operator===E)&&b(h,M.semver))return!1;if(M.operator===N&&O(h,M.semver))return!1}return!0};P.exports=i},8275:(P,y,a)=>{const g=a(1887),o=a(1785);P.exports=(n,l,d)=>{const p=[];let r=null,c=null;const m=n.sort((f,S)=>o(f,S,d));for(const f of m)g(f,l,d)?(c=f,r||(r=f)):(c&&p.push([r,c]),c=null,r=null);r&&p.push([r,null]);const i=[];for(const[f,S]of p)f===S?i.push(f):!S&&f===m[0]?i.push("*"):S?f===m[0]?i.push(`<=${S}`):i.push(`${f} - ${S}`):i.push(`>=${f}`);const h=i.join(" || "),u=typeof l.raw=="string"?l.raw:String(l);return h.length<u.length?h:l}},7109:(P,y,a)=>{const g=a(8165),o=a(5011),{ANY:n}=o,l=a(1887),d=a(1785),p=(i,h,u={})=>{if(i===h)return!0;i=new g(i,u),h=new g(h,u);let f=!1;e:for(const S of i.set){for(const v of h.set){const b=r(S,v,u);if(f=f||b!==null,b)continue e}if(f)return!1}return!0},r=(i,h,u)=>{if(i===h)return!0;if(i.length===1&&i[0].semver===n){if(h.length===1&&h[0].semver===n)return!0;u.includePrerelease?i=[new o(">=0.0.0-0")]:i=[new o(">=0.0.0")]}if(h.length===1&&h[0].semver===n){if(u.includePrerelease)return!0;h=[new o(">=0.0.0")]}const f=new Set;let S,v;for(const M of i)M.operator===">"||M.operator===">="?S=c(S,M,u):M.operator==="<"||M.operator==="<="?v=m(v,M,u):f.add(M.semver);if(f.size>1)return null;let b;if(S&&v){if(b=d(S.semver,v.semver,u),b>0)return null;if(b===0&&(S.operator!==">="||v.operator!=="<="))return null}for(const M of f){if(S&&!l(M,String(S),u)||v&&!l(M,String(v),u))return null;for(const x of h)if(!l(M,String(x),u))return!1;return!0}let O,E,N,T,A=v&&!u.includePrerelease&&v.semver.prerelease.length?v.semver:!1,R=S&&!u.includePrerelease&&S.semver.prerelease.length?S.semver:!1;A&&A.prerelease.length===1&&v.operator==="<"&&A.prerelease[0]===0&&(A=!1);for(const M of h){if(T=T||M.operator===">"||M.operator===">=",N=N||M.operator==="<"||M.operator==="<=",S){if(R&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===R.major&&M.semver.minor===R.minor&&M.semver.patch===R.patch&&(R=!1),M.operator===">"||M.operator===">="){if(O=c(S,M,u),O===M&&O!==S)return!1}else if(S.operator===">="&&!l(S.semver,String(M),u))return!1}if(v){if(A&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===A.major&&M.semver.minor===A.minor&&M.semver.patch===A.patch&&(A=!1),M.operator==="<"||M.operator==="<="){if(E=m(v,M,u),E===M&&E!==v)return!1}else if(v.operator==="<="&&!l(v.semver,String(M),u))return!1}if(!M.operator&&(v||S)&&b!==0)return!1}return!(S&&N&&!v&&b!==0||v&&T&&!S&&b!==0||R||A)},c=(i,h,u)=>{if(!i)return h;const f=d(i.semver,h.semver,u);return f>0?i:f<0||h.operator===">"&&i.operator===">="?h:i},m=(i,h,u)=>{if(!i)return h;const f=d(i.semver,h.semver,u);return f<0?i:f>0||h.operator==="<"&&i.operator==="<="?h:i};P.exports=p},4451:(P,y,a)=>{const g=a(8165),o=(n,l)=>new g(n,l).set.map(d=>d.map(p=>p.value).join(" ").trim().split(" "));P.exports=o},4068:(P,y,a)=>{const g=a(8165),o=(n,l)=>{try{return new g(n,l).range||"*"}catch(d){return null}};P.exports=o},5338:P=>{"use strict";P.exports=function(y){y.prototype[Symbol.iterator]=function*(){for(let a=this.head;a;a=a.next)yield a.value}}},4613:(P,y,a)=>{"use strict";P.exports=g,g.Node=d,g.create=g;function g(p){var r=this;if(r instanceof g||(r=new g),r.tail=null,r.head=null,r.length=0,p&&typeof p.forEach=="function")p.forEach(function(i){r.push(i)});else if(arguments.length>0)for(var c=0,m=arguments.length;c<m;c++)r.push(arguments[c]);return r}g.prototype.removeNode=function(p){if(p.list!==this)throw new Error("removing node which does not belong to this list");var r=p.next,c=p.prev;return r&&(r.prev=c),c&&(c.next=r),p===this.head&&(this.head=r),p===this.tail&&(this.tail=c),p.list.length--,p.next=null,p.prev=null,p.list=null,r},g.prototype.unshiftNode=function(p){if(p!==this.head){p.list&&p.list.removeNode(p);var r=this.head;p.list=this,p.next=r,r&&(r.prev=p),this.head=p,this.tail||(this.tail=p),this.length++}},g.prototype.pushNode=function(p){if(p!==this.tail){p.list&&p.list.removeNode(p);var r=this.tail;p.list=this,p.prev=r,r&&(r.next=p),this.tail=p,this.head||(this.head=p),this.length++}},g.prototype.push=function(){for(var p=0,r=arguments.length;p<r;p++)n(this,arguments[p]);return this.length},g.prototype.unshift=function(){for(var p=0,r=arguments.length;p<r;p++)l(this,arguments[p]);return this.length},g.prototype.pop=function(){if(!!this.tail){var p=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,p}},g.prototype.shift=function(){if(!!this.head){var p=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,p}},g.prototype.forEach=function(p,r){r=r||this;for(var c=this.head,m=0;c!==null;m++)p.call(r,c.value,m,this),c=c.next},g.prototype.forEachReverse=function(p,r){r=r||this;for(var c=this.tail,m=this.length-1;c!==null;m--)p.call(r,c.value,m,this),c=c.prev},g.prototype.get=function(p){for(var r=0,c=this.head;c!==null&&r<p;r++)c=c.next;if(r===p&&c!==null)return c.value},g.prototype.getReverse=function(p){for(var r=0,c=this.tail;c!==null&&r<p;r++)c=c.prev;if(r===p&&c!==null)return c.value},g.prototype.map=function(p,r){r=r||this;for(var c=new g,m=this.head;m!==null;)c.push(p.call(r,m.value,this)),m=m.next;return c},g.prototype.mapReverse=function(p,r){r=r||this;for(var c=new g,m=this.tail;m!==null;)c.push(p.call(r,m.value,this)),m=m.prev;return c},g.prototype.reduce=function(p,r){var c,m=this.head;if(arguments.length>1)c=r;else if(this.head)m=this.head.next,c=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;m!==null;i++)c=p(c,m.value,i),m=m.next;return c},g.prototype.reduceReverse=function(p,r){var c,m=this.tail;if(arguments.length>1)c=r;else if(this.tail)m=this.tail.prev,c=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;m!==null;i--)c=p(c,m.value,i),m=m.prev;return c},g.prototype.toArray=function(){for(var p=new Array(this.length),r=0,c=this.head;c!==null;r++)p[r]=c.value,c=c.next;return p},g.prototype.toArrayReverse=function(){for(var p=new Array(this.length),r=0,c=this.tail;c!==null;r++)p[r]=c.value,c=c.prev;return p},g.prototype.slice=function(p,r){r=r||this.length,r<0&&(r+=this.length),p=p||0,p<0&&(p+=this.length);var c=new g;if(r<p||r<0)return c;p<0&&(p=0),r>this.length&&(r=this.length);for(var m=0,i=this.head;i!==null&&m<p;m++)i=i.next;for(;i!==null&&m<r;m++,i=i.next)c.push(i.value);return c},g.prototype.sliceReverse=function(p,r){r=r||this.length,r<0&&(r+=this.length),p=p||0,p<0&&(p+=this.length);var c=new g;if(r<p||r<0)return c;p<0&&(p=0),r>this.length&&(r=this.length);for(var m=this.length,i=this.tail;i!==null&&m>r;m--)i=i.prev;for(;i!==null&&m>p;m--,i=i.prev)c.push(i.value);return c},g.prototype.splice=function(p,r,...c){p>this.length&&(p=this.length-1),p<0&&(p=this.length+p);for(var m=0,i=this.head;i!==null&&m<p;m++)i=i.next;for(var h=[],m=0;i&&m<r;m++)h.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var m=0;m<c.length;m++)i=o(this,i,c[m]);return h},g.prototype.reverse=function(){for(var p=this.head,r=this.tail,c=p;c!==null;c=c.prev){var m=c.prev;c.prev=c.next,c.next=m}return this.head=r,this.tail=p,this};function o(p,r,c){var m=r===p.head?new d(c,null,r,p):new d(c,r,r.next,p);return m.next===null&&(p.tail=m),m.prev===null&&(p.head=m),p.length++,m}function n(p,r){p.tail=new d(r,p.tail,null,p),p.head||(p.head=p.tail),p.length++}function l(p,r){p.head=new d(r,null,p.head,p),p.tail||(p.tail=p.head),p.length++}function d(p,r,c,m){if(!(this instanceof d))return new d(p,r,c,m);this.list=m,this.value=p,r?(r.next=this,this.prev=r):this.prev=null,c?(c.prev=this,this.next=c):this.next=null}try{a(5338)(g)}catch(p){}}},Pr={};function ot(P){var y=Pr[P];if(y!==void 0)return y.exports;var a=Pr[P]={id:P,loaded:!1,exports:{}};return Zs[P].call(a.exports,a,a.exports,ot),a.loaded=!0,a.exports}ot.n=P=>{var y=P&&P.__esModule?()=>P.default:()=>P;return ot.d(y,{a:y}),y},ot.d=(P,y)=>{for(var a in y)ot.o(y,a)&&!ot.o(P,a)&&Object.defineProperty(P,a,{enumerable:!0,get:y[a]})},ot.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(P){if(typeof window=="object")return window}}(),ot.o=(P,y)=>Object.prototype.hasOwnProperty.call(P,y),ot.nmd=P=>(P.paths=[],P.children||(P.children=[]),P);var a0={};(()=>{var Bt;"use strict";var P=ot(5814),y=ot.n(P),a=ot(4619),g=ot(8408),o=ot.n(g),n=ot(3509),l=ot.n(n),d=ot(5629),p=ot(1662),r=ot(7513),c=ot(2623),m=ot(9365),i=ot(501),h=ot.n(i),u=ot(1155),f=ot(2739),S=ot(6524),v=ot(4495);class b{hydrate(le,Ne){const De=new URL(le,typeof window=="undefined"?"https://dummy.base":window.location.origin),ie={};De.pathname.split("/").forEach((ve,he)=>{if(ve.charAt(0)===":"){const be=ve.slice(1);typeof Ne[be]!="undefined"&&(De.pathname=De.pathname.replace(ve,encodeURIComponent(Ne[be])),ie[be]=Ne[be])}});for(const ve in Ne)(typeof ie[ve]=="undefined"||De.searchParams.has(ve))&&De.searchParams.set(ve,Ne[ve]);return De.toString()}}function O(){y()(".sample-request-send").off("click"),y()(".sample-request-send").on("click",function(ke){ke.preventDefault();const le=y()(this).parents("article"),Ne=le.data("group"),De=le.data("name"),ie=le.data("version");A(Ne,De,ie,y()(this).data("type"))}),y()(".sample-request-clear").off("click"),y()(".sample-request-clear").on("click",function(ke){ke.preventDefault();const le=y()(this).parents("article"),Ne=le.data("group"),De=le.data("name"),ie=le.data("version");R(Ne,De,ie)})}function E(ke){return ke.replace(/{(.+?)}/g,":$1")}function N(ke,le){const Ne=ke.find(".sample-request-url").val(),De=new b,ie=E(Ne);return De.hydrate(ie,le)}function T(ke){const le={};["header","query","body"].forEach(De=>{const ie={};try{ke.find(y()(`[data-family="${De}"]:visible`)).each((ve,he)=>{const be=he.dataset.name;let Ze=he.value;if(he.type==="checkbox")if(he.checked)Ze="on";else return!0;if(!Ze&&!he.dataset.optional&&he.type!=="checkbox")return y()(he).addClass("border-danger"),!0;ie[be]=Ze})}catch(ve){return}le[De]=ie});const Ne=ke.find(y()('[data-family="body-json"]'));return Ne.is(":visible")?(le.body=Ne.val(),le.header["Content-Type"]="application/json"):le.header["Content-Type"]="multipart/form-data",le}function A(ke,le,Ne,De){const ie=y()(`article[data-group="${ke}"][data-name="${le}"][data-version="${Ne}"]`),ve=T(ie),he={};if(he.url=N(ie,ve.query),he.headers=ve.header,he.headers["Content-Type"]==="application/json")he.data=ve.body;else if(he.headers["Content-Type"]==="multipart/form-data"){const Ke=new FormData;for(const[Je,Oe]of Object.entries(ve.body))Ke.append(Je,Oe);he.data=Ke,he.processData=!1,(De==="get"||De==="delete")&&delete he.headers["Content-Type"]}he.type=De,he.success=be,he.error=Ze,y().ajax(he),ie.find(".sample-request-response").fadeTo(200,1),ie.find(".sample-request-response-json").html("Loading...");function be(Ke,Je,Oe){let $e;try{$e=JSON.parse(Oe.responseText),$e=JSON.stringify($e,null,4)}catch(Qe){$e=Oe.responseText}ie.find(".sample-request-response-json").text($e),h().highlightAll()}function Ze(Ke,Je,Oe){let $e="Error "+Ke.status+": "+Oe,Qe;try{Qe=JSON.parse(Ke.responseText),Qe=JSON.stringify(Qe,null,4)}catch(Xe){Qe=Ke.responseText}Qe&&($e+=`
`+Qe),ie.find(".sample-request-response").is(":visible")&&ie.find(".sample-request-response").fadeTo(1,.1),ie.find(".sample-request-response").fadeTo(250,1),ie.find(".sample-request-response-json").text($e),h().highlightAll()}}function R(ke,le,Ne){const De=y()('article[data-group="'+ke+'"][data-name="'+le+'"][data-version="'+Ne+'"]');De.find(".sample-request-response-json").html(""),De.find(".sample-request-response").hide(),De.find(".sample-request-input").each((ve,he)=>{he.value=he.placeholder!==he.dataset.name?he.placeholder:""});const ie=De.find(".sample-request-url");ie.val(ie.prop("defaultValue"))}const de={ca:{"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:",Type:"Tipus",url:"url"},cs:{"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:",Type:"Typ",url:"url"},de:{"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:",Type:"Typ",url:"url"},es:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:",Type:"Tipo",url:"url"},en:{},fr:{"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :",Type:"Type",url:"url"},it:{"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:",Type:"Tipo",url:"url"},nl:{"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:",Type:"Type",url:"url"},pl:{"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:",Type:"Typ",url:"url"},pt:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:",Type:"Tipo",url:"url"},ro:{"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:",Type:"Tip",url:"url"},ru:{"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:",Type:"\u0422\u0438\u043F",url:"URL"},tr:{"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:",Type:"Tip",url:"url"},vi:{"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt"},zh:{"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",Description:"\u63CF\u8FF0",Field:"\u5B57\u6BB5",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570",Headers:"\u8BF7\u6C42\u5934","Permission:":"\u6743\u9650:",Response:"\u8FD4\u56DE",required:"\u5FC5\u9700\u7684",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:",Type:"\u7C7B\u578B",url:"\u5730\u5740"}},te=((Bt=window.navigator.language)!=null?Bt:"en-GB").toLowerCase().substr(0,2);let ge=de[te]?de[te]:de.en;function Ce(ke){const le=ge[ke];return le===void 0?ke:le}function Fe(ke){ge=de[ke]}const{defaultsDeep:it}=a,mt=(ke,le)=>{const Ne=(De,ie,ve,he)=>({[ie]:ve+1<he.length?De:le});return ke.reduceRight(Ne,{})},ut=ke=>{let le={};return ke.forEach(Ne=>{const De=mt(Ne[0].split("."),Ne[1]);le=it(le,De)}),ht(le)};function ht(ke){return JSON.stringify(ke,null,4)}function At(ke){const le=[];return ke.forEach(Ne=>{let De;switch(Ne.type.toLowerCase()){case"string":De=Ne.defaultValue||"";break;case"boolean":De=Boolean(Ne.defaultValue)||!1;break;case"number":De=parseInt(Ne.defaultValue||0,10);break;case"date":De=Ne.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}le.push([Ne.field,De])}),ut(le)}var Re=ot(6770);class Ct extends Re{constructor(le){super(),this.testMode=le}diffMain(le,Ne,De,ie){return super.diff_main(this._stripHtml(le),this._stripHtml(Ne),De,ie)}diffPrettyHtml(le){const Ne=[],De=/&/g,ie=/</g,ve=/>/g,he=/\n/g;for(let be=0;be<le.length;be++){const Ze=le[be][0],Je=le[be][1].replace(De,"&amp;").replace(ie,"&lt;").replace(ve,"&gt;").replace(he,"&para;<br>");switch(Ze){case Re.DIFF_INSERT:Ne[be]="<ins>"+Je+"</ins>";break;case Re.DIFF_DELETE:Ne[be]="<del>"+Je+"</del>";break;case Re.DIFF_EQUAL:Ne[be]="<span>"+Je+"</span>";break}}return Ne.join("")}diffCleanupSemantic(le){return this.diff_cleanupSemantic(le)}_stripHtml(le){if(this.testMode)return le;const Ne=document.createElement("div");return Ne.innerHTML=le,Ne.textContent||Ne.innerText||""}}function Ue(){l().registerHelper("markdown",function(ie){return ie&&(ie=ie.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(ve,he,be,Ze,Ke,Je,Oe){const $e=Ze||Je+"/"+Oe;return'<a href="#api-'+Je+"-"+Oe+'">'+$e+"</a>"}),ie)}),l().registerHelper("setInputType",function(ie){switch(ie){case"File":case"Email":case"Color":case"Number":case"Date":return ie[0].toLowerCase()+ie.substring(1);case"Boolean":return"checkbox";default:return"text"}});let ke;l().registerHelper("startTimer",function(ie){return ke=new Date,""}),l().registerHelper("stopTimer",function(ie){return console.log(new Date-ke),""}),l().registerHelper("__",function(ie){return Ce(ie)}),l().registerHelper("cl",function(ie){return console.log(ie),""}),l().registerHelper("underscoreToSpace",function(ie){return ie.replace(/(_+)/g," ")}),l().registerHelper("removeDblQuotes",function(ie){return ie.replace(/"/g,"")}),l().registerHelper("assign",function(ie){if(arguments.length>0){const ve=typeof arguments[1];let he=null;(ve==="string"||ve==="number"||ve==="boolean")&&(he=arguments[1]),l().registerHelper(ie,function(){return he})}return""}),l().registerHelper("nl2br",function(ie){return Ne(ie)}),l().registerHelper("ifCond",function(ie,ve,he,be){switch(ve){case"==":return ie==he?be.fn(this):be.inverse(this);case"===":return ie===he?be.fn(this):be.inverse(this);case"!=":return ie!=he?be.fn(this):be.inverse(this);case"!==":return ie!==he?be.fn(this):be.inverse(this);case"<":return ie<he?be.fn(this):be.inverse(this);case"<=":return ie<=he?be.fn(this):be.inverse(this);case">":return ie>he?be.fn(this):be.inverse(this);case">=":return ie>=he?be.fn(this):be.inverse(this);case"&&":return ie&&he?be.fn(this):be.inverse(this);case"||":return ie||he?be.fn(this):be.inverse(this);default:return be.inverse(this)}});const le={};l().registerHelper("subTemplate",function(ie,ve){le[ie]||(le[ie]=l().compile(document.getElementById("template-"+ie).innerHTML));const he=le[ie],be=y().extend({},this,ve.hash);return new(l()).SafeString(he(be))}),l().registerHelper("toLowerCase",function(ie){return ie&&typeof ie=="string"?ie.toLowerCase():""}),l().registerHelper("splitFill",function(ie,ve,he){const be=ie.split(ve);return new Array(be.length).join(he)+be[be.length-1]});function Ne(ie){return(""+ie).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,ve=>ve.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}l().registerHelper("each_compare_list_field",function(ie,ve,he){const be=he.hash.field,Ze=[];ie&&ie.forEach(function(Je){const Oe=Je;Oe.key=Je[be],Ze.push(Oe)});const Ke=[];return ve&&ve.forEach(function(Je){const Oe=Je;Oe.key=Je[be],Ke.push(Oe)}),De("key",Ze,Ke,he)}),l().registerHelper("each_compare_keys",function(ie,ve,he){const be=[];ie&&Object.keys(ie).forEach(function(Je){const Oe={};Oe.value=ie[Je],Oe.key=Je,be.push(Oe)});const Ze=[];return ve&&Object.keys(ve).forEach(function(Je){const Oe={};Oe.value=ve[Je],Oe.key=Je,Ze.push(Oe)}),De("key",be,Ze,he)}),l().registerHelper("body2json",function(ie,ve){return At(ie)}),l().registerHelper("each_compare_field",function(ie,ve,he){return De("field",ie,ve,he)}),l().registerHelper("each_compare_title",function(ie,ve,he){return De("title",ie,ve,he)}),l().registerHelper("reformat",function(ie,ve){if(ve==="json")try{return JSON.stringify(JSON.parse(ie.trim()),null,"    ")}catch(he){}return ie}),l().registerHelper("showDiff",function(ie,ve,he){let be="";if(ie===ve)be=ie;else{if(!ie)return ve;if(!ve)return ie;const Ze=new Ct,Ke=Ze.diffMain(ve,ie);Ze.diffCleanupSemantic(Ke),be=Ze.diffPrettyHtml(Ke),be=be.replace(/&para;/gm,"")}return he==="nl2br"&&(be=Ne(be)),be});function De(ie,ve,he,be){const Ze=[];let Ke=0;ve&&ve.forEach(function($e){let Qe=!1;if(he&&he.forEach(function(Xe){if($e[ie]===Xe[ie]){const zt={typeSame:!0,source:$e,compare:Xe,index:Ke};Ze.push(zt),Qe=!0,Ke++}}),!Qe){const Xe={typeIns:!0,source:$e,index:Ke};Ze.push(Xe),Ke++}}),he&&he.forEach(function($e){let Qe=!1;if(ve&&ve.forEach(function(Xe){Xe[ie]===$e[ie]&&(Qe=!0)}),!Qe){const Xe={typeDel:!0,compare:$e,index:Ke};Ze.push(Xe),Ke++}});let Je="";const Oe=Ze.length;for(const $e in Ze)parseInt($e,10)===Oe-1&&(Ze[$e]._last=!0),Je=Je+be.fn(Ze[$e]);return Je}}document.addEventListener("DOMContentLoaded",()=>{We(),O(),h().highlightAll()});function We(){var Z;let ke=[{type:"post",url:"/configurations/special/files/providers/loads",title:"Consulta configuraci\xF3n",name:"Consulta_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener la configuracion de un archivo especial por su pk y sk</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto</p>"}]},examples:[{title:"Request-Example:",content:` 
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

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"post",url:"/budget/downloads",title:"Descarga Prsupuesto por vendedor",name:"Descarga_Presupuesto_por_vendedor",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de presupuesto por vendedor para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
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


}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct/active/:eanCompany Consulta productos",title:"contratados activos",name:"Consulta_productos_contratados_activos",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la Empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct/available/:eanCompany Consulta productos",title:"contratados activos y disponibles",name:"Consulta_productos_contratados_activos_y_disponibles",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos y disponibles por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la Empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"put",url:"/dynamicreports",title:"Actualizar configuraci\xF3n",name:"Actualizar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite actualizar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationDare",description:"<p>fecha de creacion</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.modificationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
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
                   }`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"put",url:"/roles",title:"Actualizaci\xF3n de rol",name:"Actualizaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite actualizar los datos del rol y sus permisos</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1=Activo , 0 = Inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "id_role#676f4b02-3db7-4bd4-b78f-9047353aedd9",
    "sk": "root",
    "nameRole": "rol admin actualizado",
    "descriptionRole": " este rol se actualizo",
    "state": 1,
    "idMenuOption": "menu_option#uuid_2",
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

}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/products",title:"Consulta roles por producto",name:"Consulta_roles_por_producto",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de roles que pertenecen a un producto en especifico y el estado del rol sea activo</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opcion del menu tipo producto seleccionada</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idMenuOption": "uuid_3"
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
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles",title:"Creaci\xF3n de rol",name:"Creaci\xF3n_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite crear un nuevo rol en el sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1= activo 0 = inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "nameRole": "rol de prueba",
    "descriptionRole": " esta es un rol de prueba",
    "state": 1,
    "idMenuOption": "menu_option#uuid_1",
    "menuOptionName": "admin",
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
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/filter",title:"Filtro de roles",name:"Filtro_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1= activo, 0=inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
        "pk": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
        "sk": "root",
        "state": 1
}`,type:"json"},{title:"Request-Example:",content:`
{
    "state": 1
}`,type:"json"},{title:"Request-Example:",content:`
{
        "pk": "id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
        "sk": "root",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"}]},examples:[{title:"Success-Response:",content:`
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
            "modificationDate": null
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
            "modificationDate": "yyyy-mm-dd hh:mi:ss"
        }
    ],
    "responseMessage": "consulta role correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"RoleWebApi.java",groupTitle:"Roles"},{type:"get",url:"/roles",title:"Listado de roles",name:"Listado_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"}]},examples:[{title:"Success-Response:",content:`
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
            "modificationDate": null
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
            "modificationDate": "yyyy-mm-dd hh:mi:ss"
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
}`,type:"json"}]},filename:"RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/masters/uploads/budgetseller",title:"Carga archivo maestro presupuesto",name:"Carga_archivo_maestro_presupuesto",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo maestro de presupuesto por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 14 archivo maestro presupuesto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"BusinnessRuleWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"get",url:"/typefiles/displayweb",title:"Listado de tipos de archivos maestros",name:"Listado_de_tipos_de_archivos_maestros",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite obtener los  tipos de archivo maestro que se  mostrarar en la lista de seleccion maestro &quot;Listado de tipos de archivos maestros&quot;</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"post",url:"/users",title:"Creacion de usuario",name:"Creacion_de_usuario",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite crear un usuario en la plataforma</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"Parameter",type:"Number",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de opci\xF3n de men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idRole",description:"<p>Id del rol</p>"}]},examples:[{title:"Request-Example:",content:`
[
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
]`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"QlikWebApi.java",groupTitle:"qlik"}];const le={name:"Analitica",version:"0.1.0",description:"Documentacion para el proyecto de analitica",url:"http://prescriptiva-service/v1",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Mon Apr 03 2023 09:59:13 GMT-0500 (hora est\xE1ndar de Colombia)",url:"https://apidocjs.com",version:"0.51.1"}};Ue();const Ne=l().compile(y()("#template-header").html()),De=l().compile(y()("#template-footer").html()),ie=l().compile(y()("#template-article").html()),ve=l().compile(y()("#template-compare-article").html()),he=l().compile(y()("#template-generator").html()),be=l().compile(y()("#template-project").html()),Ze=l().compile(y()("#template-sections").html()),Ke=l().compile(y()("#template-sidenav").html()),Je={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};le.template=Object.assign(Je,(Z=le.template)!=null?Z:{}),le.template.forceLanguage&&Fe(le.template.forceLanguage);const Oe=(0,a.groupBy)(ke,Y=>Y.group),$e={};y().each(Oe,(Y,W)=>{$e[Y]=(0,a.groupBy)(W,X=>X.name)});const Qe=[];y().each($e,(Y,W)=>{let X=[];y().each(W,(ee,se)=>{const ue=se[0].title;ue&&X.push(ue.toLowerCase()+"#~#"+ee)}),X.sort(),le.order&&(X=F(X,le.order,"#~#")),X.forEach(ee=>{const ue=ee.split("#~#")[1];W[ue].forEach(me=>{Qe.push(me)})})}),ke=Qe;let Xe={};const zt={};let It={};It[le.version]=1,y().each(ke,(Y,W)=>{Xe[W.group]=1,zt[W.group]=W.groupTitle||W.group,It[W.version]=1}),Xe=Object.keys(Xe),Xe.sort(),le.order&&(Xe=$(zt,le.order)),It=Object.keys(It),It.sort(o().compare),It.reverse();const Nt=[];Xe.forEach(Y=>{Nt.push({group:Y,isHeader:!0,title:zt[Y]});let W="";ke.forEach(X=>{X.group===Y&&(W!==X.name?Nt.push({title:X.title,group:Y,name:X.name,type:X.type,version:X.version,url:X.url}):Nt.push({title:X.title,group:Y,hidden:!0,name:X.name,type:X.type,version:X.version,url:X.url}),W=X.name)})});function Tn(Y,W,X){let ee=!1;if(!W)return ee;const se=W.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return se&&se.forEach(function(ue){const me=ue.substring(2,3),Ee=ue.replace(/<.+?>/g,""),Te=ue.match(/id="api-([^-]+)(?:-(.+))?"/),Le=Te?Te[1]:null,Ve=Te?Te[2]:null;me==="1"&&Ee&&Le&&(Y.splice(X,0,{group:Le,isHeader:!0,title:Ee,isFixed:!0}),X++,ee=!0),me==="2"&&Ee&&Le&&Ve&&(Y.splice(X,0,{group:Le,name:Ve,isHeader:!1,title:Ee,isFixed:!1,version:"1.0"}),X++)}),ee}let rn;if(le.header&&(rn=Tn(Nt,le.header.content,0),rn||Nt.unshift({group:"_header",isHeader:!0,title:le.header.title==null?Ce("General"):le.header.title,isFixed:!0})),le.footer){const Y=Nt.length;rn=Tn(Nt,le.footer.content,Nt.length),!rn&&le.footer.title!=null&&Nt.splice(Y,0,{group:"_footer",isHeader:!0,title:le.footer.title,isFixed:!0})}const Wt=le.title?le.title:"apiDoc: "+le.name+" - "+le.version;y()(document).attr("title",Wt),y()("#loader").remove();const gn={nav:Nt};y()("#sidenav").append(Ke(gn)),y()("#generator").append(he(le)),(0,a.extend)(le,{versions:It}),y()("#project").append(be(le)),le.header&&y()("#header").append(Ne(le.header)),le.footer&&(y()("#footer").append(De(le.footer)),le.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Ft={};let mn="";Xe.forEach(function(Y){const W=[];let X="",ee={},se=Y,ue="";Ft[Y]={},ke.forEach(function(me){Y===me.group&&(X!==me.name?(ke.forEach(function(Ee){Y===Ee.group&&me.name===Ee.name&&(Object.prototype.hasOwnProperty.call(Ft[me.group],me.name)||(Ft[me.group][me.name]=[]),Ft[me.group][me.name].push(Ee.version))}),ee={article:me,versions:Ft[me.group][me.name]}):ee={article:me,hidden:!0,versions:Ft[me.group][me.name]},le.sampleUrl&&le.sampleUrl===!0&&(le.sampleUrl=window.location.origin),le.url&&ee.article.url.substr(0,4).toLowerCase()!=="http"&&(ee.article.url=le.url+ee.article.url),Nn(ee,me),me.groupTitle&&(se=me.groupTitle),me.groupDescription&&(ue=me.groupDescription),W.push({article:ie(ee),group:me.group,name:me.name,aloneDisplay:le.template.aloneDisplay}),X=me.name)}),ee={group:Y,title:se,description:ue,articles:W,aloneDisplay:le.template.aloneDisplay},mn+=Ze(ee)}),y()("#sections").append(mn),le.template.aloneDisplay||(document.body.dataset.spy="scroll",y()("body").scrollspy({target:"#scrollingNav"})),y()(".form-control").on("focus change",function(){y()(this).removeClass("border-danger")}),y()(".sidenav").find("a").on("click",function(Y){Y.preventDefault();const W=this.getAttribute("href");if(le.template.aloneDisplay){const X=document.querySelector(".sidenav > li.active");X&&X.classList.remove("active"),this.parentNode.classList.add("active")}else{const X=document.querySelector(W);X&&y()("html,body").animate({scrollTop:X.offsetTop},400)}window.location.hash=W});function vt(Y){let W=!1;return y().each(Y,X=>{W=W||(0,a.some)(Y[X],ee=>ee.type)}),W}function An(){y()('button[data-toggle="popover"]').popover().click(function(W){W.preventDefault()});const Y=y()("#version strong").html();if(y()("#sidenav li").removeClass("is-new"),le.template.withCompare&&y()("#sidenav li[data-version='"+Y+"']").each(function(){const W=y()(this).data("group"),X=y()(this).data("name"),ee=y()("#sidenav li[data-group='"+W+"'][data-name='"+X+"']").length,se=y()("#sidenav li[data-group='"+W+"'][data-name='"+X+"']").index(y()(this));(ee===1||se===ee-1)&&y()(this).addClass("is-new")}),y()(".nav-tabs-examples a").click(function(W){W.preventDefault(),y()(this).tab("show")}),y()(".nav-tabs-examples").find("a:first").tab("show"),y()(".sample-request-content-type-switch").change(function(){y()(this).val()==="body-form-data"?(y()("#sample-request-body-json-input-"+y()(this).data("id")).hide(),y()("#sample-request-body-form-input-"+y()(this).data("id")).show()):(y()("#sample-request-body-form-input-"+y()(this).data("id")).hide(),y()("#sample-request-body-json-input-"+y()(this).data("id")).show())}),le.template.aloneDisplay&&(y()(".show-group").click(function(){const W="."+y()(this).attr("data-group")+"-group",X="."+y()(this).attr("data-group")+"-article";y()(".show-api-group").addClass("hide"),y()(W).removeClass("hide"),y()(".show-api-article").addClass("hide"),y()(X).removeClass("hide")}),y()(".show-api").click(function(){const W=this.getAttribute("href").substring(1),X=document.getElementById("version").textContent.trim(),ee=`.${this.dataset.name}-article`,se=`[id="${W}-${X}"]`,ue=`.${this.dataset.group}-group`;y()(".show-api-group").addClass("hide"),y()(ue).removeClass("hide"),y()(".show-api-article").addClass("hide");let me=y()(ee);y()(se).length&&(me=y()(se).parent()),me.removeClass("hide"),W.match(/_(header|footer)/)&&document.getElementById(W).classList.remove("hide")})),le.template.aloneDisplay||y()("body").scrollspy("refresh"),le.template.aloneDisplay){const W=window.location.hash;if(W!=null&&W.length!==0){const X=document.getElementById("version").textContent.trim(),ee=document.querySelector(`li .${W.slice(1)}-init`),se=document.querySelector(`li[data-version="${X}"] .show-api.${W.slice(1)}-init`);let ue=ee;se&&(ue=se),ue.click()}}}function wn(Y){typeof Y=="undefined"?Y=y()("#version strong").html():y()("#version strong").html(Y),y()("article").addClass("hide"),y()("#sidenav li:not(.nav-fixed)").addClass("hide");const W={};document.querySelectorAll("article[data-version]").forEach(X=>{const ee=X.dataset.group,se=X.dataset.name,ue=X.dataset.version,me=ee+se;!W[me]&&o().lte(ue,Y)&&(W[me]=!0,document.querySelector(`article[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${ee}"]`).classList.remove("hide"))}),y()("article[data-version]").each(function(X){const ee=y()(this).data("group");y()("section#api-"+ee).removeClass("hide"),y()("section#api-"+ee+" article:visible").length===0?y()("section#api-"+ee).addClass("hide"):y()("section#api-"+ee).removeClass("hide")})}if(wn(),y()("#versions li.version a").on("click",function(Y){Y.preventDefault(),wn(y()(this).html())}),y()("#compareAllWithPredecessor").on("click",jn),y()("article .versions li.version a").on("click",cn),y().urlParam=function(Y){const W=new RegExp("[\\?&amp;]"+Y+"=([^&amp;#]*)").exec(window.location.href);return W&&W[1]?W[1]:null},y().urlParam("compare")&&y()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const Y=decodeURI(window.location.hash);y()(Y).length>0&&y()("html,body").animate({scrollTop:parseInt(y()(Y).offset().top)},0)}y()("#scrollingNav .sidenav-search input.search").focus(),y()('[data-action="filter-search"]').on("keyup",Y=>{const W=Y.currentTarget.value.toLowerCase();y()(".sidenav").find("a.nav-list-item").each((X,ee)=>{y()(ee).show(),ee.innerText.toLowerCase().includes(W)||y()(ee).hide()})}),y()("span.search-reset").on("click",function(){y()("#scrollingNav .sidenav-search input.search").val("").focus(),y()(".sidenav").find("a.nav-list-item").show()});function cn(Y){Y.preventDefault();const W=y()(this).parents("article"),X=y()(this).html(),ee=W.find(".version"),se=ee.find("strong").html();ee.find("strong").html(X);const ue=W.data("group"),me=W.data("name"),Ee=W.data("version"),Te=W.data("compare-version");if(Te!==X&&!(!Te&&Ee===X)){if(Te&&Ft[ue][me][0]===X||Ee===X)Kn(ue,me,Ee);else{let Le={},Ve={};y().each($e[ue][me],function(rt,Yt){Yt.version===Ee&&(Le=Yt),Yt.version===X&&(Ve=Yt)});const ye={article:Le,compare:Ve,versions:Ft[ue][me]};ye.article.id=ye.article.group+"-"+ye.article.name+"-"+ye.article.version,ye.article.id=ye.article.id.replace(/\./g,"_"),ye.compare.id=ye.compare.group+"-"+ye.compare.name+"-"+ye.compare.version,ye.compare.id=ye.compare.id.replace(/\./g,"_");let Ie=Le;Ie.parameter&&Ie.parameter.fields&&(ye._hasTypeInParameterFields=vt(Ie.parameter.fields)),Ie.error&&Ie.error.fields&&(ye._hasTypeInErrorFields=vt(Ie.error.fields)),Ie.success&&Ie.success.fields&&(ye._hasTypeInSuccessFields=vt(Ie.success.fields)),Ie.info&&Ie.info.fields&&(ye._hasTypeInInfoFields=vt(Ie.info.fields)),Ie=Ve,ye._hasTypeInParameterFields!==!0&&Ie.parameter&&Ie.parameter.fields&&(ye._hasTypeInParameterFields=vt(Ie.parameter.fields)),ye._hasTypeInErrorFields!==!0&&Ie.error&&Ie.error.fields&&(ye._hasTypeInErrorFields=vt(Ie.error.fields)),ye._hasTypeInSuccessFields!==!0&&Ie.success&&Ie.success.fields&&(ye._hasTypeInSuccessFields=vt(Ie.success.fields)),ye._hasTypeInInfoFields!==!0&&Ie.info&&Ie.info.fields&&(ye._hasTypeInInfoFields=vt(Ie.info.fields));const yt=ve(ye);W.after(yt),W.next().find(".versions li.version a").on("click",cn),y()("#sidenav li[data-group='"+ue+"'][data-name='"+me+"'][data-version='"+se+"']").addClass("has-modifications"),W.remove()}h().highlightAll()}}function jn(Y){Y.preventDefault(),y()("article:visible .versions").each(function(){const X=y()(this).parents("article").data("version");let ee=null;y()(this).find("li.version a").each(function(){y()(this).html()<X&&!ee&&(ee=y()(this))}),ee&&ee.trigger("click")})}function Nn(Y,W){Y.id=Y.article.group+"-"+Y.article.name+"-"+Y.article.version,Y.id=Y.id.replace(/\./g,"_"),W.header&&W.header.fields&&(Y._hasTypeInHeaderFields=vt(W.header.fields)),W.parameter&&W.parameter.fields&&(Y._hasTypeInParameterFields=vt(W.parameter.fields)),W.error&&W.error.fields&&(Y._hasTypeInErrorFields=vt(W.error.fields)),W.success&&W.success.fields&&(Y._hasTypeInSuccessFields=vt(W.success.fields)),W.info&&W.info.fields&&(Y._hasTypeInInfoFields=vt(W.info.fields)),Y.template=le.template}function lo(Y,W,X){let ee={};y().each($e[Y][W],function(ue,me){me.version===X&&(ee=me)});const se={article:ee,versions:Ft[Y][W]};return Nn(se,ee),ie(se)}function Kn(Y,W,X){const ee=y()("article[data-group='"+Y+"'][data-name='"+W+"']:visible"),se=lo(Y,W,X);ee.after(se),ee.next().find(".versions li.version a").on("click",cn),y()("#sidenav li[data-group='"+Y+"'][data-name='"+W+"'][data-version='"+X+"']").removeClass("has-modifications"),ee.remove()}function F(Y,W,X){const ee=[];return W.forEach(function(se){X?Y.forEach(function(ue){const me=ue.split(X);(me[0]===se||me[1]===se)&&ee.push(ue)}):Y.forEach(function(ue){ue===se&&ee.push(se)})}),Y.forEach(function(se){ee.indexOf(se)===-1&&ee.push(se)}),ee}function $(Y,W){const X=[];return W.forEach(ee=>{Object.keys(Y).forEach(se=>{Y[se].replace(/_/g," ")===ee&&X.push(se)})}),Object.keys(Y).forEach(ee=>{X.indexOf(ee)===-1&&X.push(ee)}),X}An()}})()})();
