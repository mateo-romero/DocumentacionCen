(()=>{var Zs={5802:()=>{+function(O){"use strict";var y=".dropdown-backdrop",r='[data-toggle="dropdown"]',g=function(p){O(p).on("click.bs.dropdown",this.toggle)};g.VERSION="3.4.1";function o(p){var a=p.attr("data-target");a||(a=p.attr("href"),a=a&&/#[A-Za-z]/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));var c=a!=="#"?O(document).find(a):null;return c&&c.length?c:p.parent()}function n(p){p&&p.which===3||(O(y).remove(),O(r).each(function(){var a=O(this),c=o(a),m={relatedTarget:this};!c.hasClass("open")||p&&p.type=="click"&&/input|textarea/i.test(p.target.tagName)&&O.contains(c[0],p.target)||(c.trigger(p=O.Event("hide.bs.dropdown",m)),!p.isDefaultPrevented()&&(a.attr("aria-expanded","false"),c.removeClass("open").trigger(O.Event("hidden.bs.dropdown",m))))}))}g.prototype.toggle=function(p){var a=O(this);if(!a.is(".disabled, :disabled")){var c=o(a),m=c.hasClass("open");if(n(),!m){"ontouchstart"in document.documentElement&&!c.closest(".navbar-nav").length&&O(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(O(this)).on("click",n);var i={relatedTarget:this};if(c.trigger(p=O.Event("show.bs.dropdown",i)),p.isDefaultPrevented())return;a.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(O.Event("shown.bs.dropdown",i))}return!1}},g.prototype.keydown=function(p){if(!(!/(38|40|27|32)/.test(p.which)||/input|textarea/i.test(p.target.tagName))){var a=O(this);if(p.preventDefault(),p.stopPropagation(),!a.is(".disabled, :disabled")){var c=o(a),m=c.hasClass("open");if(!m&&p.which!=27||m&&p.which==27)return p.which==27&&c.find(r).trigger("focus"),a.trigger("click");var i=" li:not(.disabled):visible a",h=c.find(".dropdown-menu"+i);if(!!h.length){var u=h.index(p.target);p.which==38&&u>0&&u--,p.which==40&&u<h.length-1&&u++,~u||(u=0),h.eq(u).trigger("focus")}}}};function l(p){return this.each(function(){var a=O(this),c=a.data("bs.dropdown");c||a.data("bs.dropdown",c=new g(this)),typeof p=="string"&&c[p].call(a)})}var d=O.fn.dropdown;O.fn.dropdown=l,O.fn.dropdown.Constructor=g,O.fn.dropdown.noConflict=function(){return O.fn.dropdown=d,this},O(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(p){p.stopPropagation()}).on("click.bs.dropdown.data-api",r,g.prototype.toggle).on("keydown.bs.dropdown.data-api",r,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery)},2213:()=>{+function(O){"use strict";var y=function(o,n){this.init("popover",o,n)};if(!O.fn.tooltip)throw new Error("Popover requires tooltip.js");y.VERSION="3.4.1",y.DEFAULTS=O.extend({},O.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),y.prototype=O.extend({},O.fn.tooltip.Constructor.prototype),y.prototype.constructor=y,y.prototype.getDefaults=function(){return y.DEFAULTS},y.prototype.setContent=function(){var o=this.tip(),n=this.getTitle(),l=this.getContent();if(this.options.html){var d=typeof l;this.options.sanitize&&(n=this.sanitizeHtml(n),d==="string"&&(l=this.sanitizeHtml(l))),o.find(".popover-title").html(n),o.find(".popover-content").children().detach().end()[d==="string"?"html":"append"](l)}else o.find(".popover-title").text(n),o.find(".popover-content").children().detach().end().text(l);o.removeClass("fade top bottom left right in"),o.find(".popover-title").html()||o.find(".popover-title").hide()},y.prototype.hasContent=function(){return this.getTitle()||this.getContent()},y.prototype.getContent=function(){var o=this.$element,n=this.options;return o.attr("data-content")||(typeof n.content=="function"?n.content.call(o[0]):n.content)},y.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function r(o){return this.each(function(){var n=O(this),l=n.data("bs.popover"),d=typeof o=="object"&&o;!l&&/destroy|hide/.test(o)||(l||n.data("bs.popover",l=new y(this,d)),typeof o=="string"&&l[o]())})}var g=O.fn.popover;O.fn.popover=r,O.fn.popover.Constructor=y,O.fn.popover.noConflict=function(){return O.fn.popover=g,this}}(jQuery)},3022:()=>{+function(O){"use strict";function y(o,n){this.$body=O(document.body),this.$scrollElement=O(o).is(document.body)?O(window):O(o),this.options=O.extend({},y.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",O.proxy(this.process,this)),this.refresh(),this.process()}y.VERSION="3.4.1",y.DEFAULTS={offset:10},y.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},y.prototype.refresh=function(){var o=this,n="offset",l=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),O.isWindow(this.$scrollElement[0])||(n="position",l=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var d=O(this),p=d.data("target")||d.attr("href"),a=/^#./.test(p)&&O(p);return a&&a.length&&a.is(":visible")&&[[a[n]().top+l,p]]||null}).sort(function(d,p){return d[0]-p[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},y.prototype.process=function(){var o=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),l=this.options.offset+n-this.$scrollElement.height(),d=this.offsets,p=this.targets,a=this.activeTarget,c;if(this.scrollHeight!=n&&this.refresh(),o>=l)return a!=(c=p[p.length-1])&&this.activate(c);if(a&&o<d[0])return this.activeTarget=null,this.clear();for(c=d.length;c--;)a!=p[c]&&o>=d[c]&&(d[c+1]===void 0||o<d[c+1])&&this.activate(p[c])},y.prototype.activate=function(o){this.activeTarget=o,this.clear();var n=this.selector+'[data-target="'+o+'"],'+this.selector+'[href="'+o+'"]',l=O(n).parents("li").addClass("active");l.parent(".dropdown-menu").length&&(l=l.closest("li.dropdown").addClass("active")),l.trigger("activate.bs.scrollspy")},y.prototype.clear=function(){O(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function r(o){return this.each(function(){var n=O(this),l=n.data("bs.scrollspy"),d=typeof o=="object"&&o;l||n.data("bs.scrollspy",l=new y(this,d)),typeof o=="string"&&l[o]()})}var g=O.fn.scrollspy;O.fn.scrollspy=r,O.fn.scrollspy.Constructor=y,O.fn.scrollspy.noConflict=function(){return O.fn.scrollspy=g,this},O(window).on("load.bs.scrollspy.data-api",function(){O('[data-spy="scroll"]').each(function(){var o=O(this);r.call(o,o.data())})})}(jQuery)},9007:()=>{+function(O){"use strict";var y=function(n){this.element=O(n)};y.VERSION="3.4.1",y.TRANSITION_DURATION=150,y.prototype.show=function(){var n=this.element,l=n.closest("ul:not(.dropdown-menu)"),d=n.data("target");if(d||(d=n.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var p=l.find(".active:last a"),a=O.Event("hide.bs.tab",{relatedTarget:n[0]}),c=O.Event("show.bs.tab",{relatedTarget:p[0]});if(p.trigger(a),n.trigger(c),!(c.isDefaultPrevented()||a.isDefaultPrevented())){var m=O(document).find(d);this.activate(n.closest("li"),l),this.activate(m,m.parent(),function(){p.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:p[0]})})}}},y.prototype.activate=function(n,l,d){var p=l.find("> .active"),a=d&&O.support.transition&&(p.length&&p.hasClass("fade")||!!l.find("> .fade").length);function c(){p.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),d&&d()}p.length&&a?p.one("bsTransitionEnd",c).emulateTransitionEnd(y.TRANSITION_DURATION):c(),p.removeClass("in")};function r(n){return this.each(function(){var l=O(this),d=l.data("bs.tab");d||l.data("bs.tab",d=new y(this)),typeof n=="string"&&d[n]()})}var g=O.fn.tab;O.fn.tab=r,O.fn.tab.Constructor=y,O.fn.tab.noConflict=function(){return O.fn.tab=g,this};var o=function(n){n.preventDefault(),r.call(O(this),"show")};O(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery)},6911:()=>{+function(O){"use strict";var y=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],g=/^aria-[\w-]*$/i,o={"*":["class","dir","id","lang","role",g],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function d(i,h){var u=i.nodeName.toLowerCase();if(O.inArray(u,h)!==-1)return O.inArray(u,r)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(l)):!0;for(var f=O(h).filter(function(b,T){return T instanceof RegExp}),S=0,v=f.length;S<v;S++)if(u.match(f[S]))return!0;return!1}function p(i,h,u){if(i.length===0)return i;if(u&&typeof u=="function")return u(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=i;for(var S=O.map(h,function(L,_){return _}),v=O(f.body).find("*"),b=0,T=v.length;b<T;b++){var C=v[b],N=C.nodeName.toLowerCase();if(O.inArray(N,S)===-1){C.parentNode.removeChild(C);continue}for(var P=O.map(C.attributes,function(L){return L}),A=[].concat(h["*"]||[],h[N]||[]),D=0,M=P.length;D<M;D++)d(P[D],A)||C.removeAttribute(P[D].nodeName)}return f.body.innerHTML}var a=function(i,h){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,h)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:o},a.prototype.init=function(i,h,u){if(this.enabled=!0,this.type=i,this.$element=O(h),this.options=this.getOptions(u),this.$viewport=this.options.viewport&&O(document).find(O.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),S=f.length;S--;){var v=f[S];if(v=="click")this.$element.on("click."+this.type,this.options.selector,O.proxy(this.toggle,this));else if(v!="manual"){var b=v=="hover"?"mouseenter":"focusin",T=v=="hover"?"mouseleave":"focusout";this.$element.on(b+"."+this.type,this.options.selector,O.proxy(this.enter,this)),this.$element.on(T+"."+this.type,this.options.selector,O.proxy(this.leave,this))}}this.options.selector?this._options=O.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},a.prototype.getDefaults=function(){return a.DEFAULTS},a.prototype.getOptions=function(i){var h=this.$element.data();for(var u in h)h.hasOwnProperty(u)&&O.inArray(u,y)!==-1&&delete h[u];return i=O.extend({},this.getDefaults(),h,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=p(i.template,i.whiteList,i.sanitizeFn)),i},a.prototype.getDelegateOptions=function(){var i={},h=this.getDefaults();return this._options&&O.each(this._options,function(u,f){h[u]!=f&&(i[u]=f)}),i},a.prototype.enter=function(i){var h=i instanceof this.constructor?i:O(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h)),i instanceof O.Event&&(h.inState[i.type=="focusin"?"focus":"hover"]=!0),h.tip().hasClass("in")||h.hoverState=="in"){h.hoverState="in";return}if(clearTimeout(h.timeout),h.hoverState="in",!h.options.delay||!h.options.delay.show)return h.show();h.timeout=setTimeout(function(){h.hoverState=="in"&&h.show()},h.options.delay.show)},a.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},a.prototype.leave=function(i){var h=i instanceof this.constructor?i:O(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h)),i instanceof O.Event&&(h.inState[i.type=="focusout"?"focus":"hover"]=!1),!h.isInStateTrue()){if(clearTimeout(h.timeout),h.hoverState="out",!h.options.delay||!h.options.delay.hide)return h.hide();h.timeout=setTimeout(function(){h.hoverState=="out"&&h.hide()},h.options.delay.hide)}},a.prototype.show=function(){var i=O.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var h=O.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!h)return;var u=this,f=this.tip(),S=this.getUID(this.type);this.setContent(),f.attr("id",S),this.$element.attr("aria-describedby",S),this.options.animation&&f.addClass("fade");var v=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,b=/\s?auto?\s?/i,T=b.test(v);T&&(v=v.replace(b,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(v).data("bs."+this.type,this),this.options.container?f.appendTo(O(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var C=this.getPosition(),N=f[0].offsetWidth,P=f[0].offsetHeight;if(T){var A=v,D=this.getPosition(this.$viewport);v=v=="bottom"&&C.bottom+P>D.bottom?"top":v=="top"&&C.top-P<D.top?"bottom":v=="right"&&C.right+N>D.width?"left":v=="left"&&C.left-N<D.left?"right":v,f.removeClass(A).addClass(v)}var M=this.getCalculatedOffset(v,C,N,P);this.applyPlacement(M,v);var L=function(){var _=u.hoverState;u.$element.trigger("shown.bs."+u.type),u.hoverState=null,_=="out"&&u.leave(u)};O.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",L).emulateTransitionEnd(a.TRANSITION_DURATION):L()}},a.prototype.applyPlacement=function(i,h){var u=this.tip(),f=u[0].offsetWidth,S=u[0].offsetHeight,v=parseInt(u.css("margin-top"),10),b=parseInt(u.css("margin-left"),10);isNaN(v)&&(v=0),isNaN(b)&&(b=0),i.top+=v,i.left+=b,O.offset.setOffset(u[0],O.extend({using:function(M){u.css({top:Math.round(M.top),left:Math.round(M.left)})}},i),0),u.addClass("in");var T=u[0].offsetWidth,C=u[0].offsetHeight;h=="top"&&C!=S&&(i.top=i.top+S-C);var N=this.getViewportAdjustedDelta(h,i,T,C);N.left?i.left+=N.left:i.top+=N.top;var P=/top|bottom/.test(h),A=P?N.left*2-f+T:N.top*2-S+C,D=P?"offsetWidth":"offsetHeight";u.offset(i),this.replaceArrow(A,u[0][D],P)},a.prototype.replaceArrow=function(i,h,u){this.arrow().css(u?"left":"top",50*(1-i/h)+"%").css(u?"top":"left","")},a.prototype.setContent=function(){var i=this.tip(),h=this.getTitle();this.options.html?(this.options.sanitize&&(h=p(h,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(h)):i.find(".tooltip-inner").text(h),i.removeClass("fade in top bottom left right")},a.prototype.hide=function(i){var h=this,u=O(this.$tip),f=O.Event("hide.bs."+this.type);function S(){h.hoverState!="in"&&u.detach(),h.$element&&h.$element.removeAttr("aria-describedby").trigger("hidden.bs."+h.type),i&&i()}if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),O.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",S).emulateTransitionEnd(a.TRANSITION_DURATION):S(),this.hoverState=null,this},a.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},a.prototype.hasContent=function(){return this.getTitle()},a.prototype.getPosition=function(i){i=i||this.$element;var h=i[0],u=h.tagName=="BODY",f=h.getBoundingClientRect();f.width==null&&(f=O.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var S=window.SVGElement&&h instanceof window.SVGElement,v=u?{top:0,left:0}:S?null:i.offset(),b={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},T=u?{width:O(window).width(),height:O(window).height()}:null;return O.extend({},f,b,T,v)},a.prototype.getCalculatedOffset=function(i,h,u,f){return i=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-u/2}:i=="top"?{top:h.top-f,left:h.left+h.width/2-u/2}:i=="left"?{top:h.top+h.height/2-f/2,left:h.left-u}:{top:h.top+h.height/2-f/2,left:h.left+h.width}},a.prototype.getViewportAdjustedDelta=function(i,h,u,f){var S={top:0,left:0};if(!this.$viewport)return S;var v=this.options.viewport&&this.options.viewport.padding||0,b=this.getPosition(this.$viewport);if(/right|left/.test(i)){var T=h.top-v-b.scroll,C=h.top+v-b.scroll+f;T<b.top?S.top=b.top-T:C>b.top+b.height&&(S.top=b.top+b.height-C)}else{var N=h.left-v,P=h.left+v+u;N<b.left?S.left=b.left-N:P>b.right&&(S.left=b.left+b.width-P)}return S},a.prototype.getTitle=function(){var i,h=this.$element,u=this.options;return i=h.attr("data-original-title")||(typeof u.title=="function"?u.title.call(h[0]):u.title),i},a.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},a.prototype.tip=function(){if(!this.$tip&&(this.$tip=O(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},a.prototype.enable=function(){this.enabled=!0},a.prototype.disable=function(){this.enabled=!1},a.prototype.toggleEnabled=function(){this.enabled=!this.enabled},a.prototype.toggle=function(i){var h=this;i&&(h=O(i.currentTarget).data("bs."+this.type),h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h))),i?(h.inState.click=!h.inState.click,h.isInStateTrue()?h.enter(h):h.leave(h)):h.tip().hasClass("in")?h.leave(h):h.enter(h)},a.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},a.prototype.sanitizeHtml=function(i){return p(i,this.options.whiteList,this.options.sanitizeFn)};function c(i){return this.each(function(){var h=O(this),u=h.data("bs.tooltip"),f=typeof i=="object"&&i;!u&&/destroy|hide/.test(i)||(u||h.data("bs.tooltip",u=new a(this,f)),typeof i=="string"&&u[i]())})}var m=O.fn.tooltip;O.fn.tooltip=c,O.fn.tooltip.Constructor=a,O.fn.tooltip.noConflict=function(){return O.fn.tooltip=m,this}}(jQuery)},781:O=>{var y=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},r=-1,g=1,o=0;y.Diff=function(n,l){return[n,l]},y.prototype.diff_main=function(n,l,d,p){typeof p=="undefined"&&(this.Diff_Timeout<=0?p=Number.MAX_VALUE:p=new Date().getTime()+this.Diff_Timeout*1e3);var a=p;if(n==null||l==null)throw new Error("Null input. (diff_main)");if(n==l)return n?[new y.Diff(o,n)]:[];typeof d=="undefined"&&(d=!0);var c=d,m=this.diff_commonPrefix(n,l),i=n.substring(0,m);n=n.substring(m),l=l.substring(m),m=this.diff_commonSuffix(n,l);var h=n.substring(n.length-m);n=n.substring(0,n.length-m),l=l.substring(0,l.length-m);var u=this.diff_compute_(n,l,c,a);return i&&u.unshift(new y.Diff(o,i)),h&&u.push(new y.Diff(o,h)),this.diff_cleanupMerge(u),u},y.prototype.diff_compute_=function(n,l,d,p){var a;if(!n)return[new y.Diff(g,l)];if(!l)return[new y.Diff(r,n)];var c=n.length>l.length?n:l,m=n.length>l.length?l:n,i=c.indexOf(m);if(i!=-1)return a=[new y.Diff(g,c.substring(0,i)),new y.Diff(o,m),new y.Diff(g,c.substring(i+m.length))],n.length>l.length&&(a[0][0]=a[2][0]=r),a;if(m.length==1)return[new y.Diff(r,n),new y.Diff(g,l)];var h=this.diff_halfMatch_(n,l);if(h){var u=h[0],f=h[1],S=h[2],v=h[3],b=h[4],T=this.diff_main(u,S,d,p),C=this.diff_main(f,v,d,p);return T.concat([new y.Diff(o,b)],C)}return d&&n.length>100&&l.length>100?this.diff_lineMode_(n,l,p):this.diff_bisect_(n,l,p)},y.prototype.diff_lineMode_=function(n,l,d){var p=this.diff_linesToChars_(n,l);n=p.chars1,l=p.chars2;var a=p.lineArray,c=this.diff_main(n,l,!1,d);this.diff_charsToLines_(c,a),this.diff_cleanupSemantic(c),c.push(new y.Diff(o,""));for(var m=0,i=0,h=0,u="",f="";m<c.length;){switch(c[m][0]){case g:h++,f+=c[m][1];break;case r:i++,u+=c[m][1];break;case o:if(i>=1&&h>=1){c.splice(m-i-h,i+h),m=m-i-h;for(var S=this.diff_main(u,f,!1,d),v=S.length-1;v>=0;v--)c.splice(m,0,S[v]);m=m+S.length}h=0,i=0,u="",f="";break}m++}return c.pop(),c},y.prototype.diff_bisect_=function(n,l,d){for(var p=n.length,a=l.length,c=Math.ceil((p+a)/2),m=c,i=2*c,h=new Array(i),u=new Array(i),f=0;f<i;f++)h[f]=-1,u[f]=-1;h[m+1]=0,u[m+1]=0;for(var S=p-a,v=S%2!=0,b=0,T=0,C=0,N=0,P=0;P<c&&!(new Date().getTime()>d);P++){for(var A=-P+b;A<=P-T;A+=2){var D=m+A,M;A==-P||A!=P&&h[D-1]<h[D+1]?M=h[D+1]:M=h[D-1]+1;for(var L=M-A;M<p&&L<a&&n.charAt(M)==l.charAt(L);)M++,L++;if(h[D]=M,M>p)T+=2;else if(L>a)b+=2;else if(v){var _=m+S-A;if(_>=0&&_<i&&u[_]!=-1){var x=p-u[_];if(M>=x)return this.diff_bisectSplit_(n,l,M,L,d)}}}for(var U=-P+C;U<=P-N;U+=2){var _=m+U,x;U==-P||U!=P&&u[_-1]<u[_+1]?x=u[_+1]:x=u[_-1]+1;for(var j=x-U;x<p&&j<a&&n.charAt(p-x-1)==l.charAt(a-j-1);)x++,j++;if(u[_]=x,x>p)N+=2;else if(j>a)C+=2;else if(!v){var D=m+S-U;if(D>=0&&D<i&&h[D]!=-1){var M=h[D],L=m+M-D;if(x=p-x,M>=x)return this.diff_bisectSplit_(n,l,M,L,d)}}}}return[new y.Diff(r,n),new y.Diff(g,l)]},y.prototype.diff_bisectSplit_=function(n,l,d,p,a){var c=n.substring(0,d),m=l.substring(0,p),i=n.substring(d),h=l.substring(p),u=this.diff_main(c,m,!1,a),f=this.diff_main(i,h,!1,a);return u.concat(f)},y.prototype.diff_linesToChars_=function(n,l){var d=[],p={};d[0]="";function a(h){for(var u="",f=0,S=-1,v=d.length;S<h.length-1;){S=h.indexOf(`
`,f),S==-1&&(S=h.length-1);var b=h.substring(f,S+1);(p.hasOwnProperty?p.hasOwnProperty(b):p[b]!==void 0)?u+=String.fromCharCode(p[b]):(v==c&&(b=h.substring(f),S=h.length),u+=String.fromCharCode(v),p[b]=v,d[v++]=b),f=S+1}return u}var c=4e4,m=a(n);c=65535;var i=a(l);return{chars1:m,chars2:i,lineArray:d}},y.prototype.diff_charsToLines_=function(n,l){for(var d=0;d<n.length;d++){for(var p=n[d][1],a=[],c=0;c<p.length;c++)a[c]=l[p.charCodeAt(c)];n[d][1]=a.join("")}},y.prototype.diff_commonPrefix=function(n,l){if(!n||!l||n.charAt(0)!=l.charAt(0))return 0;for(var d=0,p=Math.min(n.length,l.length),a=p,c=0;d<a;)n.substring(c,a)==l.substring(c,a)?(d=a,c=d):p=a,a=Math.floor((p-d)/2+d);return a},y.prototype.diff_commonSuffix=function(n,l){if(!n||!l||n.charAt(n.length-1)!=l.charAt(l.length-1))return 0;for(var d=0,p=Math.min(n.length,l.length),a=p,c=0;d<a;)n.substring(n.length-a,n.length-c)==l.substring(l.length-a,l.length-c)?(d=a,c=d):p=a,a=Math.floor((p-d)/2+d);return a},y.prototype.diff_commonOverlap_=function(n,l){var d=n.length,p=l.length;if(d==0||p==0)return 0;d>p?n=n.substring(d-p):d<p&&(l=l.substring(0,d));var a=Math.min(d,p);if(n==l)return a;for(var c=0,m=1;;){var i=n.substring(a-m),h=l.indexOf(i);if(h==-1)return c;m+=h,(h==0||n.substring(a-m)==l.substring(0,m))&&(c=m,m++)}},y.prototype.diff_halfMatch_=function(n,l){if(this.Diff_Timeout<=0)return null;var d=n.length>l.length?n:l,p=n.length>l.length?l:n;if(d.length<4||p.length*2<d.length)return null;var a=this;function c(T,C,N){for(var P=T.substring(N,N+Math.floor(T.length/4)),A=-1,D="",M,L,_,x;(A=C.indexOf(P,A+1))!=-1;){var U=a.diff_commonPrefix(T.substring(N),C.substring(A)),j=a.diff_commonSuffix(T.substring(0,N),C.substring(0,A));D.length<j+U&&(D=C.substring(A-j,A)+C.substring(A,A+U),M=T.substring(0,N-j),L=T.substring(N+U),_=C.substring(0,A-j),x=C.substring(A+U))}return D.length*2>=T.length?[M,L,_,x,D]:null}var m=c(d,p,Math.ceil(d.length/4)),i=c(d,p,Math.ceil(d.length/2)),h;if(!m&&!i)return null;i?m?h=m[4].length>i[4].length?m:i:h=i:h=m;var u,f,S,v;n.length>l.length?(u=h[0],f=h[1],S=h[2],v=h[3]):(S=h[0],v=h[1],u=h[2],f=h[3]);var b=h[4];return[u,f,S,v,b]},y.prototype.diff_cleanupSemantic=function(n){for(var l=!1,d=[],p=0,a=null,c=0,m=0,i=0,h=0,u=0;c<n.length;)n[c][0]==o?(d[p++]=c,m=h,i=u,h=0,u=0,a=n[c][1]):(n[c][0]==g?h+=n[c][1].length:u+=n[c][1].length,a&&a.length<=Math.max(m,i)&&a.length<=Math.max(h,u)&&(n.splice(d[p-1],0,new y.Diff(r,a)),n[d[p-1]+1][0]=g,p--,p--,c=p>0?d[p-1]:-1,m=0,i=0,h=0,u=0,a=null,l=!0)),c++;for(l&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),c=1;c<n.length;){if(n[c-1][0]==r&&n[c][0]==g){var f=n[c-1][1],S=n[c][1],v=this.diff_commonOverlap_(f,S),b=this.diff_commonOverlap_(S,f);v>=b?(v>=f.length/2||v>=S.length/2)&&(n.splice(c,0,new y.Diff(o,S.substring(0,v))),n[c-1][1]=f.substring(0,f.length-v),n[c+1][1]=S.substring(v),c++):(b>=f.length/2||b>=S.length/2)&&(n.splice(c,0,new y.Diff(o,f.substring(0,b))),n[c-1][0]=g,n[c-1][1]=S.substring(0,S.length-b),n[c+1][0]=r,n[c+1][1]=f.substring(b),c++),c++}c++}},y.prototype.diff_cleanupSemanticLossless=function(n){function l(b,T){if(!b||!T)return 6;var C=b.charAt(b.length-1),N=T.charAt(0),P=C.match(y.nonAlphaNumericRegex_),A=N.match(y.nonAlphaNumericRegex_),D=P&&C.match(y.whitespaceRegex_),M=A&&N.match(y.whitespaceRegex_),L=D&&C.match(y.linebreakRegex_),_=M&&N.match(y.linebreakRegex_),x=L&&b.match(y.blanklineEndRegex_),U=_&&T.match(y.blanklineStartRegex_);return x||U?5:L||_?4:P&&!D&&M?3:D||M?2:P||A?1:0}for(var d=1;d<n.length-1;){if(n[d-1][0]==o&&n[d+1][0]==o){var p=n[d-1][1],a=n[d][1],c=n[d+1][1],m=this.diff_commonSuffix(p,a);if(m){var i=a.substring(a.length-m);p=p.substring(0,p.length-m),a=i+a.substring(0,a.length-m),c=i+c}for(var h=p,u=a,f=c,S=l(p,a)+l(a,c);a.charAt(0)===c.charAt(0);){p+=a.charAt(0),a=a.substring(1)+c.charAt(0),c=c.substring(1);var v=l(p,a)+l(a,c);v>=S&&(S=v,h=p,u=a,f=c)}n[d-1][1]!=h&&(h?n[d-1][1]=h:(n.splice(d-1,1),d--),n[d][1]=u,f?n[d+1][1]=f:(n.splice(d+1,1),d--))}d++}},y.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,y.whitespaceRegex_=/\s/,y.linebreakRegex_=/[\r\n]/,y.blanklineEndRegex_=/\n\r?\n$/,y.blanklineStartRegex_=/^\r?\n\r?\n/,y.prototype.diff_cleanupEfficiency=function(n){for(var l=!1,d=[],p=0,a=null,c=0,m=!1,i=!1,h=!1,u=!1;c<n.length;)n[c][0]==o?(n[c][1].length<this.Diff_EditCost&&(h||u)?(d[p++]=c,m=h,i=u,a=n[c][1]):(p=0,a=null),h=u=!1):(n[c][0]==r?u=!0:h=!0,a&&(m&&i&&h&&u||a.length<this.Diff_EditCost/2&&m+i+h+u==3)&&(n.splice(d[p-1],0,new y.Diff(r,a)),n[d[p-1]+1][0]=g,p--,a=null,m&&i?(h=u=!0,p=0):(p--,c=p>0?d[p-1]:-1,h=u=!1),l=!0)),c++;l&&this.diff_cleanupMerge(n)},y.prototype.diff_cleanupMerge=function(n){n.push(new y.Diff(o,""));for(var l=0,d=0,p=0,a="",c="",m;l<n.length;)switch(n[l][0]){case g:p++,c+=n[l][1],l++;break;case r:d++,a+=n[l][1],l++;break;case o:d+p>1?(d!==0&&p!==0&&(m=this.diff_commonPrefix(c,a),m!==0&&(l-d-p>0&&n[l-d-p-1][0]==o?n[l-d-p-1][1]+=c.substring(0,m):(n.splice(0,0,new y.Diff(o,c.substring(0,m))),l++),c=c.substring(m),a=a.substring(m)),m=this.diff_commonSuffix(c,a),m!==0&&(n[l][1]=c.substring(c.length-m)+n[l][1],c=c.substring(0,c.length-m),a=a.substring(0,a.length-m))),l-=d+p,n.splice(l,d+p),a.length&&(n.splice(l,0,new y.Diff(r,a)),l++),c.length&&(n.splice(l,0,new y.Diff(g,c)),l++),l++):l!==0&&n[l-1][0]==o?(n[l-1][1]+=n[l][1],n.splice(l,1)):l++,p=0,d=0,a="",c="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(l=1;l<n.length-1;)n[l-1][0]==o&&n[l+1][0]==o&&(n[l][1].substring(n[l][1].length-n[l-1][1].length)==n[l-1][1]?(n[l][1]=n[l-1][1]+n[l][1].substring(0,n[l][1].length-n[l-1][1].length),n[l+1][1]=n[l-1][1]+n[l+1][1],n.splice(l-1,1),i=!0):n[l][1].substring(0,n[l+1][1].length)==n[l+1][1]&&(n[l-1][1]+=n[l+1][1],n[l][1]=n[l][1].substring(n[l+1][1].length)+n[l+1][1],n.splice(l+1,1),i=!0)),l++;i&&this.diff_cleanupMerge(n)},y.prototype.diff_xIndex=function(n,l){var d=0,p=0,a=0,c=0,m;for(m=0;m<n.length&&(n[m][0]!==g&&(d+=n[m][1].length),n[m][0]!==r&&(p+=n[m][1].length),!(d>l));m++)a=d,c=p;return n.length!=m&&n[m][0]===r?c:c+(l-a)},y.prototype.diff_prettyHtml=function(n){for(var l=[],d=/&/g,p=/</g,a=/>/g,c=/\n/g,m=0;m<n.length;m++){var i=n[m][0],h=n[m][1],u=h.replace(d,"&amp;").replace(p,"&lt;").replace(a,"&gt;").replace(c,"&para;<br>");switch(i){case g:l[m]='<ins style="background:#e6ffe6;">'+u+"</ins>";break;case r:l[m]='<del style="background:#ffe6e6;">'+u+"</del>";break;case o:l[m]="<span>"+u+"</span>";break}}return l.join("")},y.prototype.diff_text1=function(n){for(var l=[],d=0;d<n.length;d++)n[d][0]!==g&&(l[d]=n[d][1]);return l.join("")},y.prototype.diff_text2=function(n){for(var l=[],d=0;d<n.length;d++)n[d][0]!==r&&(l[d]=n[d][1]);return l.join("")},y.prototype.diff_levenshtein=function(n){for(var l=0,d=0,p=0,a=0;a<n.length;a++){var c=n[a][0],m=n[a][1];switch(c){case g:d+=m.length;break;case r:p+=m.length;break;case o:l+=Math.max(d,p),d=0,p=0;break}}return l+=Math.max(d,p),l},y.prototype.diff_toDelta=function(n){for(var l=[],d=0;d<n.length;d++)switch(n[d][0]){case g:l[d]="+"+encodeURI(n[d][1]);break;case r:l[d]="-"+n[d][1].length;break;case o:l[d]="="+n[d][1].length;break}return l.join("	").replace(/%20/g," ")},y.prototype.diff_fromDelta=function(n,l){for(var d=[],p=0,a=0,c=l.split(/\t/g),m=0;m<c.length;m++){var i=c[m].substring(1);switch(c[m].charAt(0)){case"+":try{d[p++]=new y.Diff(g,decodeURI(i))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var h=parseInt(i,10);if(isNaN(h)||h<0)throw new Error("Invalid number in diff_fromDelta: "+i);var u=n.substring(a,a+=h);c[m].charAt(0)=="="?d[p++]=new y.Diff(o,u):d[p++]=new y.Diff(r,u);break;default:if(c[m])throw new Error("Invalid diff operation in diff_fromDelta: "+c[m])}}if(a!=n.length)throw new Error("Delta length ("+a+") does not equal source text length ("+n.length+").");return d},y.prototype.match_main=function(n,l,d){if(n==null||l==null||d==null)throw new Error("Null input. (match_main)");return d=Math.max(0,Math.min(d,n.length)),n==l?0:n.length?n.substring(d,d+l.length)==l?d:this.match_bitap_(n,l,d):-1},y.prototype.match_bitap_=function(n,l,d){if(l.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var p=this.match_alphabet_(l),a=this;function c(M,L){var _=M/l.length,x=Math.abs(d-L);return a.Match_Distance?_+x/a.Match_Distance:x?1:_}var m=this.Match_Threshold,i=n.indexOf(l,d);i!=-1&&(m=Math.min(c(0,i),m),i=n.lastIndexOf(l,d+l.length),i!=-1&&(m=Math.min(c(0,i),m)));var h=1<<l.length-1;i=-1;for(var u,f,S=l.length+n.length,v,b=0;b<l.length;b++){for(u=0,f=S;u<f;)c(b,d+f)<=m?u=f:S=f,f=Math.floor((S-u)/2+u);S=f;var T=Math.max(1,d-f+1),C=Math.min(d+f,n.length)+l.length,N=Array(C+2);N[C+1]=(1<<b)-1;for(var P=C;P>=T;P--){var A=p[n.charAt(P-1)];if(b===0?N[P]=(N[P+1]<<1|1)&A:N[P]=(N[P+1]<<1|1)&A|((v[P+1]|v[P])<<1|1)|v[P+1],N[P]&h){var D=c(b,P-1);if(D<=m)if(m=D,i=P-1,i>d)T=Math.max(1,2*d-i);else break}}if(c(b+1,d)>m)break;v=N}return i},y.prototype.match_alphabet_=function(n){for(var l={},d=0;d<n.length;d++)l[n.charAt(d)]=0;for(var d=0;d<n.length;d++)l[n.charAt(d)]|=1<<n.length-d-1;return l},y.prototype.patch_addContext_=function(n,l){if(l.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var d=l.substring(n.start2,n.start2+n.length1),p=0;l.indexOf(d)!=l.lastIndexOf(d)&&d.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)p+=this.Patch_Margin,d=l.substring(n.start2-p,n.start2+n.length1+p);p+=this.Patch_Margin;var a=l.substring(n.start2-p,n.start2);a&&n.diffs.unshift(new y.Diff(o,a));var c=l.substring(n.start2+n.length1,n.start2+n.length1+p);c&&n.diffs.push(new y.Diff(o,c)),n.start1-=a.length,n.start2-=a.length,n.length1+=a.length+c.length,n.length2+=a.length+c.length}},y.prototype.patch_make=function(n,l,d){var p,a;if(typeof n=="string"&&typeof l=="string"&&typeof d=="undefined")p=n,a=this.diff_main(p,l,!0),a.length>2&&(this.diff_cleanupSemantic(a),this.diff_cleanupEfficiency(a));else if(n&&typeof n=="object"&&typeof l=="undefined"&&typeof d=="undefined")a=n,p=this.diff_text1(a);else if(typeof n=="string"&&l&&typeof l=="object"&&typeof d=="undefined")p=n,a=l;else if(typeof n=="string"&&typeof l=="string"&&d&&typeof d=="object")p=n,a=d;else throw new Error("Unknown call format to patch_make.");if(a.length===0)return[];for(var c=[],m=new y.patch_obj,i=0,h=0,u=0,f=p,S=p,v=0;v<a.length;v++){var b=a[v][0],T=a[v][1];switch(!i&&b!==o&&(m.start1=h,m.start2=u),b){case g:m.diffs[i++]=a[v],m.length2+=T.length,S=S.substring(0,u)+T+S.substring(u);break;case r:m.length1+=T.length,m.diffs[i++]=a[v],S=S.substring(0,u)+S.substring(u+T.length);break;case o:T.length<=2*this.Patch_Margin&&i&&a.length!=v+1?(m.diffs[i++]=a[v],m.length1+=T.length,m.length2+=T.length):T.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(m,f),c.push(m),m=new y.patch_obj,i=0,f=S,h=u);break}b!==g&&(h+=T.length),b!==r&&(u+=T.length)}return i&&(this.patch_addContext_(m,f),c.push(m)),c},y.prototype.patch_deepCopy=function(n){for(var l=[],d=0;d<n.length;d++){var p=n[d],a=new y.patch_obj;a.diffs=[];for(var c=0;c<p.diffs.length;c++)a.diffs[c]=new y.Diff(p.diffs[c][0],p.diffs[c][1]);a.start1=p.start1,a.start2=p.start2,a.length1=p.length1,a.length2=p.length2,l[d]=a}return l},y.prototype.patch_apply=function(n,l){if(n.length==0)return[l,[]];n=this.patch_deepCopy(n);var d=this.patch_addPadding(n);l=d+l+d,this.patch_splitMax(n);for(var p=0,a=[],c=0;c<n.length;c++){var m=n[c].start2+p,i=this.diff_text1(n[c].diffs),h,u=-1;if(i.length>this.Match_MaxBits?(h=this.match_main(l,i.substring(0,this.Match_MaxBits),m),h!=-1&&(u=this.match_main(l,i.substring(i.length-this.Match_MaxBits),m+i.length-this.Match_MaxBits),(u==-1||h>=u)&&(h=-1))):h=this.match_main(l,i,m),h==-1)a[c]=!1,p-=n[c].length2-n[c].length1;else{a[c]=!0,p=h-m;var f;if(u==-1?f=l.substring(h,h+i.length):f=l.substring(h,u+this.Match_MaxBits),i==f)l=l.substring(0,h)+this.diff_text2(n[c].diffs)+l.substring(h+i.length);else{var S=this.diff_main(i,f,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(S)/i.length>this.Patch_DeleteThreshold)a[c]=!1;else{this.diff_cleanupSemanticLossless(S);for(var v=0,b,T=0;T<n[c].diffs.length;T++){var C=n[c].diffs[T];C[0]!==o&&(b=this.diff_xIndex(S,v)),C[0]===g?l=l.substring(0,h+b)+C[1]+l.substring(h+b):C[0]===r&&(l=l.substring(0,h+b)+l.substring(h+this.diff_xIndex(S,v+C[1].length))),C[0]!==r&&(v+=C[1].length)}}}}}return l=l.substring(d.length,l.length-d.length),[l,a]},y.prototype.patch_addPadding=function(n){for(var l=this.Patch_Margin,d="",p=1;p<=l;p++)d+=String.fromCharCode(p);for(var p=0;p<n.length;p++)n[p].start1+=l,n[p].start2+=l;var a=n[0],c=a.diffs;if(c.length==0||c[0][0]!=o)c.unshift(new y.Diff(o,d)),a.start1-=l,a.start2-=l,a.length1+=l,a.length2+=l;else if(l>c[0][1].length){var m=l-c[0][1].length;c[0][1]=d.substring(c[0][1].length)+c[0][1],a.start1-=m,a.start2-=m,a.length1+=m,a.length2+=m}if(a=n[n.length-1],c=a.diffs,c.length==0||c[c.length-1][0]!=o)c.push(new y.Diff(o,d)),a.length1+=l,a.length2+=l;else if(l>c[c.length-1][1].length){var m=l-c[c.length-1][1].length;c[c.length-1][1]+=d.substring(0,m),a.length1+=m,a.length2+=m}return d},y.prototype.patch_splitMax=function(n){for(var l=this.Match_MaxBits,d=0;d<n.length;d++)if(!(n[d].length1<=l)){var p=n[d];n.splice(d--,1);for(var a=p.start1,c=p.start2,m="";p.diffs.length!==0;){var i=new y.patch_obj,h=!0;for(i.start1=a-m.length,i.start2=c-m.length,m!==""&&(i.length1=i.length2=m.length,i.diffs.push(new y.Diff(o,m)));p.diffs.length!==0&&i.length1<l-this.Patch_Margin;){var u=p.diffs[0][0],f=p.diffs[0][1];u===g?(i.length2+=f.length,c+=f.length,i.diffs.push(p.diffs.shift()),h=!1):u===r&&i.diffs.length==1&&i.diffs[0][0]==o&&f.length>2*l?(i.length1+=f.length,a+=f.length,h=!1,i.diffs.push(new y.Diff(u,f)),p.diffs.shift()):(f=f.substring(0,l-i.length1-this.Patch_Margin),i.length1+=f.length,a+=f.length,u===o?(i.length2+=f.length,c+=f.length):h=!1,i.diffs.push(new y.Diff(u,f)),f==p.diffs[0][1]?p.diffs.shift():p.diffs[0][1]=p.diffs[0][1].substring(f.length))}m=this.diff_text2(i.diffs),m=m.substring(m.length-this.Patch_Margin);var S=this.diff_text1(p.diffs).substring(0,this.Patch_Margin);S!==""&&(i.length1+=S.length,i.length2+=S.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===o?i.diffs[i.diffs.length-1][1]+=S:i.diffs.push(new y.Diff(o,S))),h||n.splice(++d,0,i)}}},y.prototype.patch_toText=function(n){for(var l=[],d=0;d<n.length;d++)l[d]=n[d];return l.join("")},y.prototype.patch_fromText=function(n){var l=[];if(!n)return l;for(var d=n.split(`
`),p=0,a=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;p<d.length;){var c=d[p].match(a);if(!c)throw new Error("Invalid patch string: "+d[p]);var m=new y.patch_obj;for(l.push(m),m.start1=parseInt(c[1],10),c[2]===""?(m.start1--,m.length1=1):c[2]=="0"?m.length1=0:(m.start1--,m.length1=parseInt(c[2],10)),m.start2=parseInt(c[3],10),c[4]===""?(m.start2--,m.length2=1):c[4]=="0"?m.length2=0:(m.start2--,m.length2=parseInt(c[4],10)),p++;p<d.length;){var i=d[p].charAt(0);try{var h=decodeURI(d[p].substring(1))}catch(u){throw new Error("Illegal escape in patch_fromText: "+h)}if(i=="-")m.diffs.push(new y.Diff(r,h));else if(i=="+")m.diffs.push(new y.Diff(g,h));else if(i==" ")m.diffs.push(new y.Diff(o,h));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+h)}p++}}return l},y.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},y.patch_obj.prototype.toString=function(){var n,l;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?l=this.start2+",0":this.length2==1?l=this.start2+1:l=this.start2+1+","+this.length2;for(var d=["@@ -"+n+" +"+l+` @@
`],p,a=0;a<this.diffs.length;a++){switch(this.diffs[a][0]){case g:p="+";break;case r:p="-";break;case o:p=" ";break}d[a+1]=p+encodeURI(this.diffs[a][1])+`
`}return d.join("").replace(/%20/g," ")},O.exports=y,O.exports.diff_match_patch=y,O.exports.DIFF_DELETE=r,O.exports.DIFF_INSERT=g,O.exports.DIFF_EQUAL=o},3670:function(O){/**!

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

*/(function(y,r){O.exports=r()})(this,function(){return function(y){function r(o){if(g[o])return g[o].exports;var n=g[o]={exports:{},id:o,loaded:!1};return y[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var g={};return r.m=y,r.c=g,r.p="",r(0)}([function(y,r,g){"use strict";function o(){var C=b();return C.compile=function(N,P){return m.compile(N,P,C)},C.precompile=function(N,P){return m.precompile(N,P,C)},C.AST=a.default,C.Compiler=m.Compiler,C.JavaScriptCompiler=h.default,C.Parser=c.parser,C.parse=c.parse,C.parseWithoutProcessing=c.parseWithoutProcessing,C}var n=g(1).default;r.__esModule=!0;var l=g(2),d=n(l),p=g(45),a=n(p),c=g(46),m=g(51),i=g(52),h=n(i),u=g(49),f=n(u),S=g(44),v=n(S),b=d.default.create,T=o();T.create=o,v.default(T),T.Visitor=f.default,T.default=T,r.default=T,y.exports=r.default},function(y,r){"use strict";r.default=function(g){return g&&g.__esModule?g:{default:g}},r.__esModule=!0},function(y,r,g){"use strict";function o(){var C=new p.HandlebarsEnvironment;return u.extend(C,p),C.SafeString=c.default,C.Exception=i.default,C.Utils=u,C.escapeExpression=u.escapeExpression,C.VM=S,C.template=function(N){return S.template(N,C)},C}var n=g(3).default,l=g(1).default;r.__esModule=!0;var d=g(4),p=n(d),a=g(37),c=l(a),m=g(6),i=l(m),h=g(5),u=n(h),f=g(38),S=n(f),v=g(44),b=l(v),T=o();T.create=o,b.default(T),T.default=T,r.default=T,y.exports=r.default},function(y,r){"use strict";r.default=function(g){if(g&&g.__esModule)return g;var o={};if(g!=null)for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(o[n]=g[n]);return o.default=g,o},r.__esModule=!0},function(y,r,g){"use strict";function o(C,N,P){this.helpers=C||{},this.partials=N||{},this.decorators=P||{},a.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}var n=g(1).default;r.__esModule=!0,r.HandlebarsEnvironment=o;var l=g(5),d=g(6),p=n(d),a=g(10),c=g(30),m=g(32),i=n(m),h=g(33),u="4.7.7";r.VERSION=u;var f=8;r.COMPILER_REVISION=f;var S=7;r.LAST_COMPATIBLE_COMPILER_REVISION=S;var v={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};r.REVISION_CHANGES=v;var b="[object Object]";o.prototype={constructor:o,logger:i.default,log:i.default.log,registerHelper:function(C,N){if(l.toString.call(C)===b){if(N)throw new p.default("Arg not supported with multiple helpers");l.extend(this.helpers,C)}else this.helpers[C]=N},unregisterHelper:function(C){delete this.helpers[C]},registerPartial:function(C,N){if(l.toString.call(C)===b)l.extend(this.partials,C);else{if(typeof N=="undefined")throw new p.default('Attempting to register a partial called "'+C+'" as undefined');this.partials[C]=N}},unregisterPartial:function(C){delete this.partials[C]},registerDecorator:function(C,N){if(l.toString.call(C)===b){if(N)throw new p.default("Arg not supported with multiple decorators");l.extend(this.decorators,C)}else this.decorators[C]=N},unregisterDecorator:function(C){delete this.decorators[C]},resetLoggedPropertyAccesses:function(){h.resetLoggedProperties()}};var T=i.default.log;r.log=T,r.createFrame=l.createFrame,r.logger=i.default},function(y,r){"use strict";function g(v){return m[v]}function o(v){for(var b=1;b<arguments.length;b++)for(var T in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],T)&&(v[T]=arguments[b][T]);return v}function n(v,b){for(var T=0,C=v.length;T<C;T++)if(v[T]===b)return T;return-1}function l(v){if(typeof v!="string"){if(v&&v.toHTML)return v.toHTML();if(v==null)return"";if(!v)return v+"";v=""+v}return h.test(v)?v.replace(i,g):v}function d(v){return!v&&v!==0||!(!S(v)||v.length!==0)}function p(v){var b=o({},v);return b._parent=v,b}function a(v,b){return v.path=b,v}function c(v,b){return(v?v+".":"")+b}r.__esModule=!0,r.extend=o,r.indexOf=n,r.escapeExpression=l,r.isEmpty=d,r.createFrame=p,r.blockParams=a,r.appendContextPath=c;var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,h=/[&<>"'`=]/,u=Object.prototype.toString;r.toString=u;var f=function(v){return typeof v=="function"};f(/x/)&&(r.isFunction=f=function(v){return typeof v=="function"&&u.call(v)==="[object Function]"}),r.isFunction=f;var S=Array.isArray||function(v){return!(!v||typeof v!="object")&&u.call(v)==="[object Array]"};r.isArray=S},function(y,r,g){"use strict";function o(d,p){var a=p&&p.loc,c=void 0,m=void 0,i=void 0,h=void 0;a&&(c=a.start.line,m=a.end.line,i=a.start.column,h=a.end.column,d+=" - "+c+":"+i);for(var u=Error.prototype.constructor.call(this,d),f=0;f<l.length;f++)this[l[f]]=u[l[f]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{a&&(this.lineNumber=c,this.endLineNumber=m,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:h,enumerable:!0})):(this.column=i,this.endColumn=h))}catch(S){}}var n=g(7).default;r.__esModule=!0;var l=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];o.prototype=new Error,r.default=o,y.exports=r.default},function(y,r,g){y.exports={default:g(8),__esModule:!0}},function(y,r,g){var o=g(9);y.exports=function(n,l,d){return o.setDesc(n,l,d)}},function(y,r){var g=Object;y.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}},function(y,r,g){"use strict";function o(N){p.default(N),c.default(N),i.default(N),u.default(N),S.default(N),b.default(N),C.default(N)}function n(N,P,A){N.helpers[P]&&(N.hooks[P]=N.helpers[P],A||delete N.helpers[P])}var l=g(1).default;r.__esModule=!0,r.registerDefaultHelpers=o,r.moveHelperToHooks=n;var d=g(11),p=l(d),a=g(12),c=l(a),m=g(25),i=l(m),h=g(26),u=l(h),f=g(27),S=l(f),v=g(28),b=l(v),T=g(29),C=l(T)},function(y,r,g){"use strict";r.__esModule=!0;var o=g(5);r.default=function(n){n.registerHelper("blockHelperMissing",function(l,d){var p=d.inverse,a=d.fn;if(l===!0)return a(this);if(l===!1||l==null)return p(this);if(o.isArray(l))return l.length>0?(d.ids&&(d.ids=[d.name]),n.helpers.each(l,d)):p(this);if(d.data&&d.ids){var c=o.createFrame(d.data);c.contextPath=o.appendContextPath(d.data.contextPath,d.name),d={data:c}}return a(l,d)})},y.exports=r.default},function(y,r,g){(function(o){"use strict";var n=g(13).default,l=g(1).default;r.__esModule=!0;var d=g(5),p=g(6),a=l(p);r.default=function(c){c.registerHelper("each",function(m,i){function h(D,M,L){b&&(b.key=D,b.index=M,b.first=M===0,b.last=!!L,T&&(b.contextPath=T+D)),v+=u(m[D],{data:b,blockParams:d.blockParams([m[D],D],[T+D,null])})}if(!i)throw new a.default("Must pass iterator to #each");var u=i.fn,f=i.inverse,S=0,v="",b=void 0,T=void 0;if(i.data&&i.ids&&(T=d.appendContextPath(i.data.contextPath,i.ids[0])+"."),d.isFunction(m)&&(m=m.call(this)),i.data&&(b=d.createFrame(i.data)),m&&typeof m=="object")if(d.isArray(m))for(var C=m.length;S<C;S++)S in m&&h(S,S,S===m.length-1);else if(o.Symbol&&m[o.Symbol.iterator]){for(var N=[],P=m[o.Symbol.iterator](),A=P.next();!A.done;A=P.next())N.push(A.value);m=N;for(var C=m.length;S<C;S++)h(S,S,S===m.length-1)}else(function(){var D=void 0;n(m).forEach(function(M){D!==void 0&&h(D,S-1),D=M,S++}),D!==void 0&&h(D,S-1,!0)})();return S===0&&(v=f(this)),v})},y.exports=r.default}).call(r,function(){return this}())},function(y,r,g){y.exports={default:g(14),__esModule:!0}},function(y,r,g){g(15),y.exports=g(21).Object.keys},function(y,r,g){var o=g(16);g(18)("keys",function(n){return function(l){return n(o(l))}})},function(y,r,g){var o=g(17);y.exports=function(n){return Object(o(n))}},function(y,r){y.exports=function(g){if(g==null)throw TypeError("Can't call method on  "+g);return g}},function(y,r,g){var o=g(19),n=g(21),l=g(24);y.exports=function(d,p){var a=(n.Object||{})[d]||Object[d],c={};c[d]=p(a),o(o.S+o.F*l(function(){a(1)}),"Object",c)}},function(y,r,g){var o=g(20),n=g(21),l=g(22),d="prototype",p=function(a,c,m){var i,h,u,f=a&p.F,S=a&p.G,v=a&p.S,b=a&p.P,T=a&p.B,C=a&p.W,N=S?n:n[c]||(n[c]={}),P=S?o:v?o[c]:(o[c]||{})[d];S&&(m=c);for(i in m)h=!f&&P&&i in P,h&&i in N||(u=h?P[i]:m[i],N[i]=S&&typeof P[i]!="function"?m[i]:T&&h?l(u,o):C&&P[i]==u?function(A){var D=function(M){return this instanceof A?new A(M):A(M)};return D[d]=A[d],D}(u):b&&typeof u=="function"?l(Function.call,u):u,b&&((N[d]||(N[d]={}))[i]=u))};p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,y.exports=p},function(y,r){var g=y.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=g)},function(y,r){var g=y.exports={version:"1.2.6"};typeof __e=="number"&&(__e=g)},function(y,r,g){var o=g(23);y.exports=function(n,l,d){if(o(n),l===void 0)return n;switch(d){case 1:return function(p){return n.call(l,p)};case 2:return function(p,a){return n.call(l,p,a)};case 3:return function(p,a,c){return n.call(l,p,a,c)}}return function(){return n.apply(l,arguments)}}},function(y,r){y.exports=function(g){if(typeof g!="function")throw TypeError(g+" is not a function!");return g}},function(y,r){y.exports=function(g){try{return!!g()}catch(o){return!0}}},function(y,r,g){"use strict";var o=g(1).default;r.__esModule=!0;var n=g(6),l=o(n);r.default=function(d){d.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new l.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},y.exports=r.default},function(y,r,g){"use strict";var o=g(1).default;r.__esModule=!0;var n=g(5),l=g(6),d=o(l);r.default=function(p){p.registerHelper("if",function(a,c){if(arguments.length!=2)throw new d.default("#if requires exactly one argument");return n.isFunction(a)&&(a=a.call(this)),!c.hash.includeZero&&!a||n.isEmpty(a)?c.inverse(this):c.fn(this)}),p.registerHelper("unless",function(a,c){if(arguments.length!=2)throw new d.default("#unless requires exactly one argument");return p.helpers.if.call(this,a,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},y.exports=r.default},function(y,r){"use strict";r.__esModule=!0,r.default=function(g){g.registerHelper("log",function(){for(var o=[void 0],n=arguments[arguments.length-1],l=0;l<arguments.length-1;l++)o.push(arguments[l]);var d=1;n.hash.level!=null?d=n.hash.level:n.data&&n.data.level!=null&&(d=n.data.level),o[0]=d,g.log.apply(g,o)})},y.exports=r.default},function(y,r){"use strict";r.__esModule=!0,r.default=function(g){g.registerHelper("lookup",function(o,n,l){return o&&l.lookupProperty(o,n)})},y.exports=r.default},function(y,r,g){"use strict";var o=g(1).default;r.__esModule=!0;var n=g(5),l=g(6),d=o(l);r.default=function(p){p.registerHelper("with",function(a,c){if(arguments.length!=2)throw new d.default("#with requires exactly one argument");n.isFunction(a)&&(a=a.call(this));var m=c.fn;if(n.isEmpty(a))return c.inverse(this);var i=c.data;return c.data&&c.ids&&(i=n.createFrame(c.data),i.contextPath=n.appendContextPath(c.data.contextPath,c.ids[0])),m(a,{data:i,blockParams:n.blockParams([a],[i&&i.contextPath])})})},y.exports=r.default},function(y,r,g){"use strict";function o(p){d.default(p)}var n=g(1).default;r.__esModule=!0,r.registerDefaultDecorators=o;var l=g(31),d=n(l)},function(y,r,g){"use strict";r.__esModule=!0;var o=g(5);r.default=function(n){n.registerDecorator("inline",function(l,d,p,a){var c=l;return d.partials||(d.partials={},c=function(m,i){var h=p.partials;p.partials=o.extend({},h,d.partials);var u=l(m,i);return p.partials=h,u}),d.partials[a.args[0]]=a.fn,c})},y.exports=r.default},function(y,r,g){"use strict";r.__esModule=!0;var o=g(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(l){if(typeof l=="string"){var d=o.indexOf(n.methodMap,l.toLowerCase());l=d>=0?d:parseInt(l,10)}return l},log:function(l){if(l=n.lookupLevel(l),typeof console!="undefined"&&n.lookupLevel(n.level)<=l){var d=n.methodMap[l];console[d]||(d="log");for(var p=arguments.length,a=Array(p>1?p-1:0),c=1;c<p;c++)a[c-1]=arguments[c];console[d].apply(console,a)}}};r.default=n,y.exports=r.default},function(y,r,g){"use strict";function o(S){var v=a(null);v.constructor=!1,v.__defineGetter__=!1,v.__defineSetter__=!1,v.__lookupGetter__=!1;var b=a(null);return b.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(b,S.allowedProtoProperties),defaultValue:S.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(v,S.allowedProtoMethods),defaultValue:S.allowProtoMethodsByDefault}}}function n(S,v,b){return l(typeof S=="function"?v.methods:v.properties,b)}function l(S,v){return S.whitelist[v]!==void 0?S.whitelist[v]===!0:S.defaultValue!==void 0?S.defaultValue:(d(v),!1)}function d(S){f[S]!==!0&&(f[S]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+S+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function p(){c(f).forEach(function(S){delete f[S]})}var a=g(34).default,c=g(13).default,m=g(3).default;r.__esModule=!0,r.createProtoAccessControl=o,r.resultIsAllowed=n,r.resetLoggedProperties=p;var i=g(36),h=g(32),u=m(h),f=a(null)},function(y,r,g){y.exports={default:g(35),__esModule:!0}},function(y,r,g){var o=g(9);y.exports=function(n,l){return o.create(n,l)}},function(y,r,g){"use strict";function o(){for(var d=arguments.length,p=Array(d),a=0;a<d;a++)p[a]=arguments[a];return l.extend.apply(void 0,[n(null)].concat(p))}var n=g(34).default;r.__esModule=!0,r.createNewLookupObject=o;var l=g(5)},function(y,r){"use strict";function g(o){this.string=o}r.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string},r.default=g,y.exports=r.default},function(y,r,g){"use strict";function o(L){var _=L&&L[0]||1,x=P.COMPILER_REVISION;if(!(_>=P.LAST_COMPATIBLE_COMPILER_REVISION&&_<=P.COMPILER_REVISION)){if(_<P.LAST_COMPATIBLE_COMPILER_REVISION){var U=P.REVISION_CHANGES[x],j=P.REVISION_CHANGES[_];throw new N.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+U+") or downgrade your runtime to an older version ("+j+").")}throw new N.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+L[1]+").")}}function n(L,_){function x(B,H,w){w.hash&&(H=T.extend({},H,w.hash),w.ids&&(w.ids[0]=!0)),B=_.VM.resolvePartial.call(this,B,H,w);var q=T.extend({},w,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),V=_.VM.invokePartial.call(this,B,H,q);if(V==null&&_.compile&&(w.partials[w.name]=_.compile(B,L.compilerOptions,_),V=w.partials[w.name](H,q)),V!=null){if(w.indent){for(var ne=V.split(`
`),ie=0,le=ne.length;ie<le&&(ne[ie]||ie+1!==le);ie++)ne[ie]=w.indent+ne[ie];V=ne.join(`
`)}return V}throw new N.default("The partial "+w.name+" could not be compiled when running in runtime-only mode")}function U(B){function H(ie){return""+L.main(W,ie,W.helpers,W.partials,q,ne,V)}var w=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],q=w.data;U._setup(w),!w.partial&&L.useData&&(q=c(B,q));var V=void 0,ne=L.useBlockParams?[]:void 0;return L.useDepths&&(V=w.depths?B!=w.depths[0]?[B].concat(w.depths):w.depths:[B]),(H=m(L.main,H,W,w.depths||[],q,ne))(B,w)}if(!_)throw new N.default("No environment passed to template");if(!L||!L.main)throw new N.default("Unknown template object: "+typeof L);L.main.decorator=L.main_d,_.VM.checkRevision(L.compiler);var j=L.compiler&&L.compiler[0]===7,W={strict:function(B,H,w){if(!(B&&H in B))throw new N.default('"'+H+'" not defined in '+B,{loc:w});return W.lookupProperty(B,H)},lookupProperty:function(B,H){var w=B[H];return w==null||Object.prototype.hasOwnProperty.call(B,H)||M.resultIsAllowed(w,W.protoAccessControl,H)?w:void 0},lookup:function(B,H){for(var w=B.length,q=0;q<w;q++){var V=B[q]&&W.lookupProperty(B[q],H);if(V!=null)return B[q][H]}},lambda:function(B,H){return typeof B=="function"?B.call(H):B},escapeExpression:T.escapeExpression,invokePartial:x,fn:function(B){var H=L[B];return H.decorator=L[B+"_d"],H},programs:[],program:function(B,H,w,q,V){var ne=this.programs[B],ie=this.fn(B);return H||V||q||w?ne=l(this,B,ie,H,w,q,V):ne||(ne=this.programs[B]=l(this,B,ie)),ne},data:function(B,H){for(;B&&H--;)B=B._parent;return B},mergeIfNeeded:function(B,H){var w=B||H;return B&&H&&B!==H&&(w=T.extend({},H,B)),w},nullContext:u({}),noop:_.VM.noop,compilerInfo:L.compiler};return U.isTop=!0,U._setup=function(B){if(B.partial)W.protoAccessControl=B.protoAccessControl,W.helpers=B.helpers,W.partials=B.partials,W.decorators=B.decorators,W.hooks=B.hooks;else{var H=T.extend({},_.helpers,B.helpers);i(H,W),W.helpers=H,L.usePartial&&(W.partials=W.mergeIfNeeded(B.partials,_.partials)),(L.usePartial||L.useDecorators)&&(W.decorators=T.extend({},_.decorators,B.decorators)),W.hooks={},W.protoAccessControl=M.createProtoAccessControl(B);var w=B.allowCallsToHelperMissing||j;A.moveHelperToHooks(W,"helperMissing",w),A.moveHelperToHooks(W,"blockHelperMissing",w)}},U._child=function(B,H,w,q){if(L.useBlockParams&&!w)throw new N.default("must pass block params");if(L.useDepths&&!q)throw new N.default("must pass parent depths");return l(W,B,L[B],H,0,w,q)},U}function l(L,_,x,U,j,W,B){function H(w){var q=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],V=B;return!B||w==B[0]||w===L.nullContext&&B[0]===null||(V=[w].concat(B)),x(L,w,L.helpers,L.partials,q.data||U,W&&[q.blockParams].concat(W),V)}return H=m(x,H,L,B,U,W),H.program=_,H.depth=B?B.length:0,H.blockParams=j||0,H}function d(L,_,x){return L?L.call||x.name||(x.name=L,L=x.partials[L]):L=x.name==="@partial-block"?x.data["partial-block"]:x.partials[x.name],L}function p(L,_,x){var U=x.data&&x.data["partial-block"];x.partial=!0,x.ids&&(x.data.contextPath=x.ids[0]||x.data.contextPath);var j=void 0;if(x.fn&&x.fn!==a&&function(){x.data=P.createFrame(x.data);var W=x.fn;j=x.data["partial-block"]=function(B){var H=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return H.data=P.createFrame(H.data),H.data["partial-block"]=U,W(B,H)},W.partials&&(x.partials=T.extend({},x.partials,W.partials))}(),L===void 0&&j&&(L=j),L===void 0)throw new N.default("The partial "+x.name+" could not be found");if(L instanceof Function)return L(_,x)}function a(){return""}function c(L,_){return _&&"root"in _||(_=_?P.createFrame(_):{},_.root=L),_}function m(L,_,x,U,j,W){if(L.decorator){var B={};_=L.decorator(_,B,x,U&&U[0],j,W,U),T.extend(_,B)}return _}function i(L,_){f(L).forEach(function(x){var U=L[x];L[x]=h(U,_)})}function h(L,_){var x=_.lookupProperty;return D.wrapHelper(L,function(U){return T.extend({lookupProperty:x},U)})}var u=g(39).default,f=g(13).default,S=g(3).default,v=g(1).default;r.__esModule=!0,r.checkRevision=o,r.template=n,r.wrapProgram=l,r.resolvePartial=d,r.invokePartial=p,r.noop=a;var b=g(5),T=S(b),C=g(6),N=v(C),P=g(4),A=g(10),D=g(43),M=g(33)},function(y,r,g){y.exports={default:g(40),__esModule:!0}},function(y,r,g){g(41),y.exports=g(21).Object.seal},function(y,r,g){var o=g(42);g(18)("seal",function(n){return function(l){return n&&o(l)?n(l):l}})},function(y,r){y.exports=function(g){return typeof g=="object"?g!==null:typeof g=="function"}},function(y,r){"use strict";function g(o,n){if(typeof o!="function")return o;var l=function(){var d=arguments[arguments.length-1];return arguments[arguments.length-1]=n(d),o.apply(this,arguments)};return l}r.__esModule=!0,r.wrapHelper=g},function(y,r){(function(g){"use strict";r.__esModule=!0,r.default=function(o){var n=typeof g!="undefined"?g:window,l=n.Handlebars;o.noConflict=function(){return n.Handlebars===o&&(n.Handlebars=l),o}},y.exports=r.default}).call(r,function(){return this}())},function(y,r){"use strict";r.__esModule=!0;var g={helpers:{helperExpression:function(o){return o.type==="SubExpression"||(o.type==="MustacheStatement"||o.type==="BlockStatement")&&!!(o.params&&o.params.length||o.hash)},scopedId:function(o){return/^\.|this\b/.test(o.original)},simpleId:function(o){return o.parts.length===1&&!g.helpers.scopedId(o)&&!o.depth}}};r.default=g,y.exports=r.default},function(y,r,g){"use strict";function o(S,v){if(S.type==="Program")return S;a.default.yy=f,f.locInfo=function(T){return new f.SourceLocation(v&&v.srcName,T)};var b=a.default.parse(S);return b}function n(S,v){var b=o(S,v),T=new m.default(v);return T.accept(b)}var l=g(1).default,d=g(3).default;r.__esModule=!0,r.parseWithoutProcessing=o,r.parse=n;var p=g(47),a=l(p),c=g(48),m=l(c),i=g(50),h=d(i),u=g(5);r.parser=a.default;var f={};u.extend(f,h)},function(y,r){"use strict";r.__esModule=!0;var g=function(){function o(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(d,p,a,c,m,i,h){var u=i.length-1;switch(m){case 1:return i[u-1];case 2:this.$=c.prepareProgram(i[u]);break;case 3:this.$=i[u];break;case 4:this.$=i[u];break;case 5:this.$=i[u];break;case 6:this.$=i[u];break;case 7:this.$=i[u];break;case 8:this.$=i[u];break;case 9:this.$={type:"CommentStatement",value:c.stripComment(i[u]),strip:c.stripFlags(i[u],i[u]),loc:c.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[u],value:i[u],loc:c.locInfo(this._$)};break;case 11:this.$=c.prepareRawBlock(i[u-2],i[u-1],i[u],this._$);break;case 12:this.$={path:i[u-3],params:i[u-2],hash:i[u-1]};break;case 13:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!1,this._$);break;case 14:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!0,this._$);break;case 15:this.$={open:i[u-5],path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 16:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 17:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 18:this.$={strip:c.stripFlags(i[u-1],i[u-1]),program:i[u]};break;case 19:var f=c.prepareBlock(i[u-2],i[u-1],i[u],i[u],!1,this._$),S=c.prepareProgram([f],i[u-1].loc);S.chained=!0,this.$={strip:i[u-2].strip,program:S,chain:!0};break;case 20:this.$=i[u];break;case 21:this.$={path:i[u-1],strip:c.stripFlags(i[u-2],i[u])};break;case 22:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 23:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[u-3],params:i[u-2],hash:i[u-1],indent:"",strip:c.stripFlags(i[u-4],i[u]),loc:c.locInfo(this._$)};break;case 25:this.$=c.preparePartialBlock(i[u-2],i[u-1],i[u],this._$);break;case 26:this.$={path:i[u-3],params:i[u-2],hash:i[u-1],strip:c.stripFlags(i[u-4],i[u])};break;case 27:this.$=i[u];break;case 28:this.$=i[u];break;case 29:this.$={type:"SubExpression",path:i[u-3],params:i[u-2],hash:i[u-1],loc:c.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[u],loc:c.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:c.id(i[u-2]),value:i[u],loc:c.locInfo(this._$)};break;case 32:this.$=c.id(i[u-1]);break;case 33:this.$=i[u];break;case 34:this.$=i[u];break;case 35:this.$={type:"StringLiteral",value:i[u],original:i[u],loc:c.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[u]),original:Number(i[u]),loc:c.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[u]==="true",original:i[u]==="true",loc:c.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:c.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:c.locInfo(this._$)};break;case 40:this.$=i[u];break;case 41:this.$=i[u];break;case 42:this.$=c.preparePath(!0,i[u],this._$);break;case 43:this.$=c.preparePath(!1,i[u],this._$);break;case 44:i[u-2].push({part:c.id(i[u]),original:i[u],separator:i[u-1]}),this.$=i[u-2];break;case 45:this.$=[{part:c.id(i[u]),original:i[u]}];break;case 46:this.$=[];break;case 47:i[u-1].push(i[u]);break;case 48:this.$=[];break;case 49:i[u-1].push(i[u]);break;case 50:this.$=[];break;case 51:i[u-1].push(i[u]);break;case 58:this.$=[];break;case 59:i[u-1].push(i[u]);break;case 64:this.$=[];break;case 65:i[u-1].push(i[u]);break;case 70:this.$=[];break;case 71:i[u-1].push(i[u]);break;case 78:this.$=[];break;case 79:i[u-1].push(i[u]);break;case 82:this.$=[];break;case 83:i[u-1].push(i[u]);break;case 86:this.$=[];break;case 87:i[u-1].push(i[u]);break;case 90:this.$=[];break;case 91:i[u-1].push(i[u]);break;case 94:this.$=[];break;case 95:i[u-1].push(i[u]);break;case 98:this.$=[i[u]];break;case 99:i[u-1].push(i[u]);break;case 100:this.$=[i[u]];break;case 101:i[u-1].push(i[u])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(d,p){throw new Error(d)},parse:function(d){function p(){var W;return W=a.lexer.lex()||1,typeof W!="number"&&(W=a.symbols_[W]||W),W}var a=this,c=[0],m=[null],i=[],h=this.table,u="",f=0,S=0,v=0;this.lexer.setInput(d),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;i.push(b);var T=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var C,N,P,A,D,M,L,_,x,U={};;){if(P=c[c.length-1],this.defaultActions[P]?A=this.defaultActions[P]:(C!==null&&typeof C!="undefined"||(C=p()),A=h[P]&&h[P][C]),typeof A=="undefined"||!A.length||!A[0]){var j="";if(!v){x=[];for(M in h[P])this.terminals_[M]&&M>2&&x.push("'"+this.terminals_[M]+"'");j=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+x.join(", ")+", got '"+(this.terminals_[C]||C)+"'":"Parse error on line "+(f+1)+": Unexpected "+(C==1?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(j,{text:this.lexer.match,token:this.terminals_[C]||C,line:this.lexer.yylineno,loc:b,expected:x})}}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+P+", token: "+C);switch(A[0]){case 1:c.push(C),m.push(this.lexer.yytext),i.push(this.lexer.yylloc),c.push(A[1]),C=null,N?(C=N,N=null):(S=this.lexer.yyleng,u=this.lexer.yytext,f=this.lexer.yylineno,b=this.lexer.yylloc,v>0&&v--);break;case 2:if(L=this.productions_[A[1]][1],U.$=m[m.length-L],U._$={first_line:i[i.length-(L||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(L||1)].first_column,last_column:i[i.length-1].last_column},T&&(U._$.range=[i[i.length-(L||1)].range[0],i[i.length-1].range[1]]),D=this.performAction.call(U,u,S,f,this.yy,A[1],m,i),typeof D!="undefined")return D;L&&(c=c.slice(0,-1*L*2),m=m.slice(0,-1*L),i=i.slice(0,-1*L)),c.push(this.productions_[A[1]][0]),m.push(U.$),i.push(U._$),_=h[c[c.length-2]][c[c.length-1]],c.push(_);break;case 3:return!0}}return!0}},l=function(){var d={EOF:1,parseError:function(p,a){if(!this.yy.parser)throw new Error(p);this.yy.parser.parseError(p,a)},setInput:function(p){return this._input=p,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var p=this._input[0];this.yytext+=p,this.yyleng++,this.offset++,this.match+=p,this.matched+=p;var a=p.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),p},unput:function(p){var a=p.length,c=p.split(/(?:\r\n?|\n)/g);this._input=p+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(p){this.unput(this.match.slice(p))},pastInput:function(){var p=this.matched.substr(0,this.matched.length-this.match.length);return(p.length>20?"...":"")+p.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var p=this.match;return p.length<20&&(p+=this._input.substr(0,20-p.length)),(p.substr(0,20)+(p.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var p=this.pastInput(),a=new Array(p.length+1).join("-");return p+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var p,a,c,m,i;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),u=0;u<h.length&&(c=this._input.match(this.rules[h[u]]),!c||a&&!(c[0].length>a[0].length)||(a=c,m=u,this.options.flex));u++);return a?(i=a[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],p=this.performAction.call(this,this.yy,this,h[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),p||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var p=this.next();return typeof p!="undefined"?p:this.lex()},begin:function(p){this.conditionStack.push(p)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(p){this.begin(p)}};return d.options={},d.performAction=function(p,a,c,m){function i(h,u){return a.yytext=a.yytext.substring(h,a.yyleng-u+h)}switch(c){case 0:if(a.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(a.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return a.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return a.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return a.yytext=a.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d}();return n.lexer=l,o.prototype=n,n.Parser=o,new o}();r.default=g,y.exports=r.default},function(y,r,g){"use strict";function o(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,h,u){h===void 0&&(h=i.length);var f=i[h-1],S=i[h-2];return f?f.type==="ContentStatement"?(S||!u?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:u}function l(i,h,u){h===void 0&&(h=-1);var f=i[h+1],S=i[h+2];return f?f.type==="ContentStatement"?(S||!u?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:u}function d(i,h,u){var f=i[h==null?0:h+1];if(f&&f.type==="ContentStatement"&&(u||!f.rightStripped)){var S=f.value;f.value=f.value.replace(u?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==S}}function p(i,h,u){var f=i[h==null?i.length-1:h-1];if(f&&f.type==="ContentStatement"&&(u||!f.leftStripped)){var S=f.value;return f.value=f.value.replace(u?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==S,f.leftStripped}}var a=g(1).default;r.__esModule=!0;var c=g(49),m=a(c);o.prototype=new m.default,o.prototype.Program=function(i){var h=!this.options.ignoreStandalone,u=!this.isRootSeen;this.isRootSeen=!0;for(var f=i.body,S=0,v=f.length;S<v;S++){var b=f[S],T=this.accept(b);if(T){var C=n(f,S,u),N=l(f,S,u),P=T.openStandalone&&C,A=T.closeStandalone&&N,D=T.inlineStandalone&&C&&N;T.close&&d(f,S,!0),T.open&&p(f,S,!0),h&&D&&(d(f,S),p(f,S)&&b.type==="PartialStatement"&&(b.indent=/([ \t]+$)/.exec(f[S-1].original)[1])),h&&P&&(d((b.program||b.inverse).body),p(f,S)),h&&A&&(d(f,S),p((b.inverse||b.program).body))}}return i},o.prototype.BlockStatement=o.prototype.DecoratorBlock=o.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var h=i.program||i.inverse,u=i.program&&i.inverse,f=u,S=u;if(u&&u.chained)for(f=u.body[0].program;S.chained;)S=S.body[S.body.length-1].program;var v={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:l(h.body),closeStandalone:n((f||h).body)};if(i.openStrip.close&&d(h.body,null,!0),u){var b=i.inverseStrip;b.open&&p(h.body,null,!0),b.close&&d(f.body,null,!0),i.closeStrip.open&&p(S.body,null,!0),!this.options.ignoreStandalone&&n(h.body)&&l(f.body)&&(p(h.body),d(f.body))}else i.closeStrip.open&&p(h.body,null,!0);return v},o.prototype.Decorator=o.prototype.MustacheStatement=function(i){return i.strip},o.prototype.PartialStatement=o.prototype.CommentStatement=function(i){var h=i.strip||{};return{inlineStandalone:!0,open:h.open,close:h.close}},r.default=o,y.exports=r.default},function(y,r,g){"use strict";function o(){this.parents=[]}function n(m){this.acceptRequired(m,"path"),this.acceptArray(m.params),this.acceptKey(m,"hash")}function l(m){n.call(this,m),this.acceptKey(m,"program"),this.acceptKey(m,"inverse")}function d(m){this.acceptRequired(m,"name"),this.acceptArray(m.params),this.acceptKey(m,"hash")}var p=g(1).default;r.__esModule=!0;var a=g(6),c=p(a);o.prototype={constructor:o,mutating:!1,acceptKey:function(m,i){var h=this.accept(m[i]);if(this.mutating){if(h&&!o.prototype[h.type])throw new c.default('Unexpected node type "'+h.type+'" found when accepting '+i+" on "+m.type);m[i]=h}},acceptRequired:function(m,i){if(this.acceptKey(m,i),!m[i])throw new c.default(m.type+" requires "+i)},acceptArray:function(m){for(var i=0,h=m.length;i<h;i++)this.acceptKey(m,i),m[i]||(m.splice(i,1),i--,h--)},accept:function(m){if(m){if(!this[m.type])throw new c.default("Unknown type: "+m.type,m);this.current&&this.parents.unshift(this.current),this.current=m;var i=this[m.type](m);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?m:void 0}},Program:function(m){this.acceptArray(m.body)},MustacheStatement:n,Decorator:n,BlockStatement:l,DecoratorBlock:l,PartialStatement:d,PartialBlockStatement:function(m){d.call(this,m),this.acceptKey(m,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(m){this.acceptArray(m.pairs)},HashPair:function(m){this.acceptRequired(m,"value")}},r.default=o,y.exports=r.default},function(y,r,g){"use strict";function o(b,T){if(T=T.path?T.path.original:T,b.path.original!==T){var C={loc:b.path.loc};throw new v.default(b.path.original+" doesn't match "+T,C)}}function n(b,T){this.source=b,this.start={line:T.first_line,column:T.first_column},this.end={line:T.last_line,column:T.last_column}}function l(b){return/^\[.*\]$/.test(b)?b.substring(1,b.length-1):b}function d(b,T){return{open:b.charAt(2)==="~",close:T.charAt(T.length-3)==="~"}}function p(b){return b.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function a(b,T,C){C=this.locInfo(C);for(var N=b?"@":"",P=[],A=0,D=0,M=T.length;D<M;D++){var L=T[D].part,_=T[D].original!==L;if(N+=(T[D].separator||"")+L,_||L!==".."&&L!=="."&&L!=="this")P.push(L);else{if(P.length>0)throw new v.default("Invalid path: "+N,{loc:C});L===".."&&A++}}return{type:"PathExpression",data:b,depth:A,parts:P,original:N,loc:C}}function c(b,T,C,N,P,A){var D=N.charAt(3)||N.charAt(2),M=D!=="{"&&D!=="&",L=/\*/.test(N);return{type:L?"Decorator":"MustacheStatement",path:b,params:T,hash:C,escaped:M,strip:P,loc:this.locInfo(A)}}function m(b,T,C,N){o(b,C),N=this.locInfo(N);var P={type:"Program",body:T,strip:{},loc:N};return{type:"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:P,openStrip:{},inverseStrip:{},closeStrip:{},loc:N}}function i(b,T,C,N,P,A){N&&N.path&&o(b,N);var D=/\*/.test(b.open);T.blockParams=b.blockParams;var M=void 0,L=void 0;if(C){if(D)throw new v.default("Unexpected inverse block on decorator",C);C.chain&&(C.program.body[0].closeStrip=N.strip),L=C.strip,M=C.program}return P&&(P=M,M=T,T=P),{type:D?"DecoratorBlock":"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:T,inverse:M,openStrip:b.strip,inverseStrip:L,closeStrip:N&&N.strip,loc:this.locInfo(A)}}function h(b,T){if(!T&&b.length){var C=b[0].loc,N=b[b.length-1].loc;C&&N&&(T={source:C.source,start:{line:C.start.line,column:C.start.column},end:{line:N.end.line,column:N.end.column}})}return{type:"Program",body:b,strip:{},loc:T}}function u(b,T,C,N){return o(b,C),{type:"PartialBlockStatement",name:b.path,params:b.params,hash:b.hash,program:T,openStrip:b.strip,closeStrip:C&&C.strip,loc:this.locInfo(N)}}var f=g(1).default;r.__esModule=!0,r.SourceLocation=n,r.id=l,r.stripFlags=d,r.stripComment=p,r.preparePath=a,r.prepareMustache=c,r.prepareRawBlock=m,r.prepareBlock=i,r.prepareProgram=h,r.preparePartialBlock=u;var S=g(6),v=f(S)},function(y,r,g){"use strict";function o(){}function n(v,b,T){if(v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+v);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var C=T.parse(v,b),N=new T.Compiler().compile(C,b);return new T.JavaScriptCompiler().compile(N,b)}function l(v,b,T){function C(){var A=T.parse(v,b),D=new T.Compiler().compile(A,b),M=new T.JavaScriptCompiler().compile(D,b,void 0,!0);return T.template(M)}function N(A,D){return P||(P=C()),P.call(this,A,D)}if(b===void 0&&(b={}),v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+v);b=h.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var P=void 0;return N._setup=function(A){return P||(P=C()),P._setup(A)},N._child=function(A,D,M,L){return P||(P=C()),P._child(A,D,M,L)},N}function d(v,b){if(v===b)return!0;if(h.isArray(v)&&h.isArray(b)&&v.length===b.length){for(var T=0;T<v.length;T++)if(!d(v[T],b[T]))return!1;return!0}}function p(v){if(!v.path.parts){var b=v.path;v.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var a=g(34).default,c=g(1).default;r.__esModule=!0,r.Compiler=o,r.precompile=n,r.compile=l;var m=g(6),i=c(m),h=g(5),u=g(45),f=c(u),S=[].slice;o.prototype={compiler:o,equals:function(v){var b=this.opcodes.length;if(v.opcodes.length!==b)return!1;for(var T=0;T<b;T++){var C=this.opcodes[T],N=v.opcodes[T];if(C.opcode!==N.opcode||!d(C.args,N.args))return!1}b=this.children.length;for(var T=0;T<b;T++)if(!this.children[T].equals(v.children[T]))return!1;return!0},guid:0,compile:function(v,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=h.extend(a(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},b.knownHelpers),this.accept(v)},compileProgram:function(v){var b=new this.compiler,T=b.compile(v,this.options),C=this.guid++;return this.usePartial=this.usePartial||T.usePartial,this.children[C]=T,this.useDepths=this.useDepths||T.useDepths,C},accept:function(v){if(!this[v.type])throw new i.default("Unknown type: "+v.type,v);this.sourceNode.unshift(v);var b=this[v.type](v);return this.sourceNode.shift(),b},Program:function(v){this.options.blockParams.unshift(v.blockParams);for(var b=v.body,T=b.length,C=0;C<T;C++)this.accept(b[C]);return this.options.blockParams.shift(),this.isSimple=T===1,this.blockParams=v.blockParams?v.blockParams.length:0,this},BlockStatement:function(v){p(v);var b=v.program,T=v.inverse;b=b&&this.compileProgram(b),T=T&&this.compileProgram(T);var C=this.classifySexpr(v);C==="helper"?this.helperSexpr(v,b,T):C==="simple"?(this.simpleSexpr(v),this.opcode("pushProgram",b),this.opcode("pushProgram",T),this.opcode("emptyHash"),this.opcode("blockValue",v.path.original)):(this.ambiguousSexpr(v,b,T),this.opcode("pushProgram",b),this.opcode("pushProgram",T),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(v){var b=v.program&&this.compileProgram(v.program),T=this.setupFullMustacheParams(v,b,void 0),C=v.path;this.useDecorators=!0,this.opcode("registerDecorator",T.length,C.original)},PartialStatement:function(v){this.usePartial=!0;var b=v.program;b&&(b=this.compileProgram(v.program));var T=v.params;if(T.length>1)throw new i.default("Unsupported number of partial arguments: "+T.length,v);T.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):T.push({type:"PathExpression",parts:[],depth:0}));var C=v.name.original,N=v.name.type==="SubExpression";N&&this.accept(v.name),this.setupFullMustacheParams(v,b,void 0,!0);var P=v.indent||"";this.options.preventIndent&&P&&(this.opcode("appendContent",P),P=""),this.opcode("invokePartial",N,C,P),this.opcode("append")},PartialBlockStatement:function(v){this.PartialStatement(v)},MustacheStatement:function(v){this.SubExpression(v),v.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(v){this.DecoratorBlock(v)},ContentStatement:function(v){v.value&&this.opcode("appendContent",v.value)},CommentStatement:function(){},SubExpression:function(v){p(v);var b=this.classifySexpr(v);b==="simple"?this.simpleSexpr(v):b==="helper"?this.helperSexpr(v):this.ambiguousSexpr(v)},ambiguousSexpr:function(v,b,T){var C=v.path,N=C.parts[0],P=b!=null||T!=null;this.opcode("getContext",C.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",T),C.strict=!0,this.accept(C),this.opcode("invokeAmbiguous",N,P)},simpleSexpr:function(v){var b=v.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(v,b,T){var C=this.setupFullMustacheParams(v,b,T),N=v.path,P=N.parts[0];if(this.options.knownHelpers[P])this.opcode("invokeKnownHelper",C.length,P);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+P,v);N.strict=!0,N.falsy=!0,this.accept(N),this.opcode("invokeHelper",C.length,N.original,f.default.helpers.simpleId(N))}},PathExpression:function(v){this.addDepth(v.depth),this.opcode("getContext",v.depth);var b=v.parts[0],T=f.default.helpers.scopedId(v),C=!v.depth&&!T&&this.blockParamIndex(b);C?this.opcode("lookupBlockParam",C,v.parts):b?v.data?(this.options.data=!0,this.opcode("lookupData",v.depth,v.parts,v.strict)):this.opcode("lookupOnContext",v.parts,v.falsy,v.strict,T):this.opcode("pushContext")},StringLiteral:function(v){this.opcode("pushString",v.value)},NumberLiteral:function(v){this.opcode("pushLiteral",v.value)},BooleanLiteral:function(v){this.opcode("pushLiteral",v.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(v){var b=v.pairs,T=0,C=b.length;for(this.opcode("pushHash");T<C;T++)this.pushParam(b[T].value);for(;T--;)this.opcode("assignToHash",b[T].key);this.opcode("popHash")},opcode:function(v){this.opcodes.push({opcode:v,args:S.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(v){v&&(this.useDepths=!0)},classifySexpr:function(v){var b=f.default.helpers.simpleId(v.path),T=b&&!!this.blockParamIndex(v.path.parts[0]),C=!T&&f.default.helpers.helperExpression(v),N=!T&&(C||b);if(N&&!C){var P=v.path.parts[0],A=this.options;A.knownHelpers[P]?C=!0:A.knownHelpersOnly&&(N=!1)}return C?"helper":N?"ambiguous":"simple"},pushParams:function(v){for(var b=0,T=v.length;b<T;b++)this.pushParam(v[b])},pushParam:function(v){var b=v.value!=null?v.value:v.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),v.depth&&this.addDepth(v.depth),this.opcode("getContext",v.depth||0),this.opcode("pushStringParam",b,v.type),v.type==="SubExpression"&&this.accept(v);else{if(this.trackIds){var T=void 0;if(!v.parts||f.default.helpers.scopedId(v)||v.depth||(T=this.blockParamIndex(v.parts[0])),T){var C=v.parts.slice(1).join(".");this.opcode("pushId","BlockParam",T,C)}else b=v.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",v.type,b)}this.accept(v)}},setupFullMustacheParams:function(v,b,T,C){var N=v.params;return this.pushParams(N),this.opcode("pushProgram",b),this.opcode("pushProgram",T),v.hash?this.accept(v.hash):this.opcode("emptyHash",C),N},blockParamIndex:function(v){for(var b=0,T=this.options.blockParams.length;b<T;b++){var C=this.options.blockParams[b],N=C&&h.indexOf(C,v);if(C&&N>=0)return[b,N]}}}},function(y,r,g){"use strict";function o(f){this.value=f}function n(){}function l(f,S,v,b){var T=S.popStack(),C=0,N=v.length;for(f&&N--;C<N;C++)T=S.nameLookup(T,v[C],b);return f?[S.aliasable("container.strict"),"(",T,", ",S.quotedString(v[C]),", ",JSON.stringify(S.source.currentLocation)," )"]:T}var d=g(13).default,p=g(1).default;r.__esModule=!0;var a=g(4),c=g(6),m=p(c),i=g(5),h=g(53),u=p(h);n.prototype={nameLookup:function(f,S){return this.internalNameLookup(f,S)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=a.COMPILER_REVISION,S=a.REVISION_CHANGES[f];return[f,S]},appendToBuffer:function(f,S,v){return i.isArray(f)||(f=[f]),f=this.source.wrap(f,S),this.environment.isSimple?["return ",f,";"]:v?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,S){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(S),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,S,v,b){this.environment=f,this.options=S,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!b,this.name=this.environment.name,this.isChild=!!v,this.context=v||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,S),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var T=f.opcodes,C=void 0,N=void 0,P=void 0,A=void 0;for(P=0,A=T.length;P<A;P++)C=T[P],this.source.currentLocation=C.loc,N=N||C.loc,this[C.opcode].apply(this,C.args);if(this.source.currentLocation=N,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new m.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),b?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var D=this.createFunctionContext(b);if(this.isChild)return D;var M={compiler:this.compilerInfo(),main:D};this.decorators&&(M.main_d=this.decorators,M.useDecorators=!0);var L=this.context,_=L.programs,x=L.decorators;for(P=0,A=_.length;P<A;P++)_[P]&&(M[P]=_[P],x[P]&&(M[P+"_d"]=x[P],M.useDecorators=!0));return this.environment.usePartial&&(M.usePartial=!0),this.options.data&&(M.useData=!0),this.useDepths&&(M.useDepths=!0),this.useBlockParams&&(M.useBlockParams=!0),this.options.compat&&(M.compat=!0),b?M.compilerOptions=this.options:(M.compiler=JSON.stringify(M.compiler),this.source.currentLocation={start:{line:1,column:0}},M=this.objectLiteral(M),S.srcName?(M=M.toStringWithSourceMap({file:S.destName}),M.map=M.map&&M.map.toString()):M=M.toString()),M},preamble:function(){this.lastContext=0,this.source=new u.default(this.options.srcName),this.decorators=new u.default(this.options.srcName)},createFunctionContext:function(f){var S=this,v="",b=this.stackVars.concat(this.registers.list);b.length>0&&(v+=", "+b.join(", "));var T=0;d(this.aliases).forEach(function(P){var A=S.aliases[P];A.children&&A.referenceCount>1&&(v+=", alias"+ ++T+"="+P,A.children[0]="alias"+T)}),this.lookupPropertyFunctionIsUsed&&(v+=", "+this.lookupPropertyFunctionVarDeclaration());var C=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&C.push("blockParams"),this.useDepths&&C.push("depths");var N=this.mergeSource(v);return f?(C.push(N),Function.apply(this,C)):this.source.wrap(["function(",C.join(","),`) {
  `,N,"}"])},mergeSource:function(f){var S=this.environment.isSimple,v=!this.forceBuffer,b=void 0,T=void 0,C=void 0,N=void 0;return this.source.each(function(P){P.appendToBuffer?(C?P.prepend("  + "):C=P,N=P):(C&&(T?C.prepend("buffer += "):b=!0,N.add(";"),C=N=void 0),T=!0,S||(v=!1))}),v?C?(C.prepend("return "),N.add(";")):T||this.source.push('return "";'):(f+=", buffer = "+(b?"":this.initializeBuffer()),C?(C.prepend("return buffer + "),N.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(b?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var S=this.aliasable("container.hooks.blockHelperMissing"),v=[this.contextName(0)];this.setupHelperArgs(f,0,v);var b=this.popStack();v.splice(1,0,b),this.push(this.source.functionCall(S,"call",v))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),S=[this.contextName(0)];this.setupHelperArgs("",0,S,!0),this.flushInline();var v=this.topStack();S.splice(1,0,v),this.pushSource(["if (!",this.lastHelper,") { ",v," = ",this.source.functionCall(f,"call",S),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(S){return[" != null ? ",S,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,S,v,b){var T=0;b||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[T++])),this.resolvePath("context",f,T,S,v)},lookupBlockParam:function(f,S){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",S,1)},lookupData:function(f,S,v){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",S,0,!0,v)},resolvePath:function(f,S,v,b,T){var C=this;if(this.options.strict||this.options.assumeObjects)return void this.push(l(this.options.strict&&T,this,S,f));for(var N=S.length;v<N;v++)this.replaceStack(function(P){var A=C.nameLookup(P,S[v],f);return b?[" && ",A]:[" != null ? ",A," : ",P]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,S){this.pushContext(),this.pushString(S),S!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,S){var v=this.nameLookup("decorators",S,"decorator"),b=this.setupHelperArgs(S,f);this.decorators.push(["fn = ",this.decorators.functionCall(v,"",["fn","props","container",b])," || fn;"])},invokeHelper:function(f,S,v){var b=this.popStack(),T=this.setupHelper(f,S),C=[];v&&C.push(T.name),C.push(b),this.options.strict||C.push(this.aliasable("container.hooks.helperMissing"));var N=["(",this.itemsSeparatedBy(C,"||"),")"],P=this.source.functionCall(N,"call",T.callParams);this.push(P)},itemsSeparatedBy:function(f,S){var v=[];v.push(f[0]);for(var b=1;b<f.length;b++)v.push(S,f[b]);return v},invokeKnownHelper:function(f,S){var v=this.setupHelper(f,S);this.push(this.source.functionCall(v.name,"call",v.callParams))},invokeAmbiguous:function(f,S){this.useRegister("helper");var v=this.popStack();this.emptyHash();var b=this.setupHelper(0,f,S),T=this.lastHelper=this.nameLookup("helpers",f,"helper"),C=["(","(helper = ",T," || ",v,")"];this.options.strict||(C[0]="(helper = ",C.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",C,b.paramsInit?["),(",b.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",b.callParams)," : helper))"])},invokePartial:function(f,S,v){var b=[],T=this.setupParams(S,1,b);f&&(S=this.popStack(),delete T.name),v&&(T.indent=JSON.stringify(v)),T.helpers="helpers",T.partials="partials",T.decorators="container.decorators",f?b.unshift(S):b.unshift(this.nameLookup("partials",S,"partial")),this.options.compat&&(T.depths="depths"),T=this.objectLiteral(T),b.push(T),this.push(this.source.functionCall("container.invokePartial","",b))},assignToHash:function(f){var S=this.popStack(),v=void 0,b=void 0,T=void 0;this.trackIds&&(T=this.popStack()),this.stringParams&&(b=this.popStack(),v=this.popStack());var C=this.hash;v&&(C.contexts[f]=v),b&&(C.types[f]=b),T&&(C.ids[f]=T),C.values[f]=S},pushId:function(f,S,v){f==="BlockParam"?this.pushStackLiteral("blockParams["+S[0]+"].path["+S[1]+"]"+(v?" + "+JSON.stringify("."+v):"")):f==="PathExpression"?this.pushString(S):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(f,S){for(var v=f.children,b=void 0,T=void 0,C=0,N=v.length;C<N;C++){b=v[C],T=new this.compiler;var P=this.matchExistingProgram(b);if(P==null){this.context.programs.push("");var A=this.context.programs.length;b.index=A,b.name="program"+A,this.context.programs[A]=T.compile(b,S,this.context,!this.precompile),this.context.decorators[A]=T.decorators,this.context.environments[A]=b,this.useDepths=this.useDepths||T.useDepths,this.useBlockParams=this.useBlockParams||T.useBlockParams,b.useDepths=this.useDepths,b.useBlockParams=this.useBlockParams}else b.index=P.index,b.name="program"+P.index,this.useDepths=this.useDepths||P.useDepths,this.useBlockParams=this.useBlockParams||P.useBlockParams}},matchExistingProgram:function(f){for(var S=0,v=this.context.environments.length;S<v;S++){var b=this.context.environments[S];if(b&&b.equals(f))return b}},programExpression:function(f){var S=this.environment.children[f],v=[S.index,"data",S.blockParams];return(this.useBlockParams||this.useDepths)&&v.push("blockParams"),this.useDepths&&v.push("depths"),"container.program("+v.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof o||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new o(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var S=["("],v=void 0,b=void 0,T=void 0;if(!this.isInline())throw new m.default("replaceStack on non-inline");var C=this.popStack(!0);if(C instanceof o)v=[C.value],S=["(",v],T=!0;else{b=!0;var N=this.incrStack();S=["((",this.push(N)," = ",C,")"],v=this.topStack()}var P=f.call(this,v);T||this.popStack(),b&&this.stackSlot--,this.push(S.concat(P,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var S=0,v=f.length;S<v;S++){var b=f[S];if(b instanceof o)this.compileStack.push(b);else{var T=this.incrStack();this.pushSource([T," = ",b,";"]),this.compileStack.push(T)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var S=this.isInline(),v=(S?this.inlineStack:this.compileStack).pop();if(!f&&v instanceof o)return v.value;if(!S){if(!this.stackSlot)throw new m.default("Invalid stack pop");this.stackSlot--}return v},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,S=f[f.length-1];return S instanceof o?S.value:S},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var S=this.aliases[f];return S?(S.referenceCount++,S):(S=this.aliases[f]=this.source.wrap(f),S.aliasable=!0,S.referenceCount=1,S)},setupHelper:function(f,S,v){var b=[],T=this.setupHelperArgs(S,f,b,v),C=this.nameLookup("helpers",S,"helper"),N=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:b,paramsInit:T,name:C,callParams:[N].concat(b)}},setupParams:function(f,S,v){var b={},T=[],C=[],N=[],P=!v,A=void 0;P&&(v=[]),b.name=this.quotedString(f),b.hash=this.popStack(),this.trackIds&&(b.hashIds=this.popStack()),this.stringParams&&(b.hashTypes=this.popStack(),b.hashContexts=this.popStack());var D=this.popStack(),M=this.popStack();(M||D)&&(b.fn=M||"container.noop",b.inverse=D||"container.noop");for(var L=S;L--;)A=this.popStack(),v[L]=A,this.trackIds&&(N[L]=this.popStack()),this.stringParams&&(C[L]=this.popStack(),T[L]=this.popStack());return P&&(b.args=this.source.generateArray(v)),this.trackIds&&(b.ids=this.source.generateArray(N)),this.stringParams&&(b.types=this.source.generateArray(C),b.contexts=this.source.generateArray(T)),this.options.data&&(b.data="data"),this.useBlockParams&&(b.blockParams="blockParams"),b},setupHelperArgs:function(f,S,v,b){var T=this.setupParams(f,S,v);return T.loc=JSON.stringify(this.source.currentLocation),T=this.objectLiteral(T),b?(this.useRegister("options"),v.push("options"),["options=",T]):v?(v.push(T),""):T}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),S=n.RESERVED_WORDS={},v=0,b=f.length;v<b;v++)S[f[v]]=!0}(),n.isValidJavaScriptVariableName=function(f){return!n.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},r.default=n,y.exports=r.default},function(y,r,g){"use strict";function o(a,c,m){if(d.isArray(a)){for(var i=[],h=0,u=a.length;h<u;h++)i.push(c.wrap(a[h],m));return i}return typeof a=="boolean"||typeof a=="number"?a+"":a}function n(a){this.srcFile=a,this.source=[]}var l=g(13).default;r.__esModule=!0;var d=g(5),p=void 0;try{}catch(a){}p||(p=function(a,c,m,i){this.src="",i&&this.add(i)},p.prototype={add:function(a){d.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){d.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,c){this.source.unshift(this.wrap(a,c))},push:function(a,c){this.source.push(this.wrap(a,c))},merge:function(){var a=this.empty();return this.each(function(c){a.add(["  ",c,`
`])}),a},each:function(a){for(var c=0,m=this.source.length;c<m;c++)a(this.source[c])},empty:function(){var a=this.currentLocation||{start:{}};return new p(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var c=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return a instanceof p?a:(a=o(a,this,c),new p(c.start.line,c.start.column,this.srcFile,a))},functionCall:function(a,c,m){return m=this.generateList(m),this.wrap([a,c?"."+c+"(":"(",m,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var c=this,m=[];l(a).forEach(function(h){var u=o(a[h],c);u!=="undefined"&&m.push([c.quotedString(h),":",u])});var i=this.generateList(m);return i.prepend("{"),i.add("}"),i},generateList:function(a){for(var c=this.empty(),m=0,i=a.length;m<i;m++)m&&c.add(","),c.add(o(a[m],this));return c},generateArray:function(a){var c=this.generateList(a);return c.prepend("["),c.add("]"),c}},r.default=n,y.exports=r.default}])})},6096:(O,y,r)=>{var g;/*!
* Sizzle CSS Selector Engine v2.3.6
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2021-02-16
*/(function(o){var n,l,d,p,a,c,m,i,h,u,f,S,v,b,T,C,N,P,A,D="sizzle"+1*new Date,M=o.document,L=0,_=0,x=$e(),U=$e(),j=$e(),W=$e(),B=function(F,$){return F===$&&(f=!0),0},H={}.hasOwnProperty,w=[],q=w.pop,V=w.push,ne=w.push,ie=w.slice,le=function(F,$){for(var Z=0,Y=F.length;Z<Y;Z++)if(F[Z]===$)return Z;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ge="[\\x20\\t\\r\\n\\f]",be="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ie="\\["+ge+"*("+be+")(?:"+ge+"*([*^$|!~]?=)"+ge+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+be+"))|)"+ge+"*\\]",it=":("+be+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ie+")*)|.*)\\)|)",mt=new RegExp(ge+"+","g"),ut=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g"),ht=new RegExp("^"+ge+"*,"+ge+"*"),At=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),Re=new RegExp(ge+"|>"),Et=new RegExp(it),Ue=new RegExp("^"+be+"$"),ze={ID:new RegExp("^#("+be+")"),CLASS:new RegExp("^\\.("+be+")"),TAG:new RegExp("^("+be+"|[*])"),ATTR:new RegExp("^"+Ie),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},Bt=/HTML$/i,je=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,Ne=/^[^{]+\{\s*\[native \w/,De=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ae=/[+~]/,ve=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),he=function(F,$){var Z="0x"+F.slice(1)-65536;return $||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},Ee=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ze=function(F,$){return $?F==="\0"?"\uFFFD":F.slice(0,-1)+"\\"+F.charCodeAt(F.length-1).toString(16)+" ":"\\"+F},Ke=function(){S()},Je=vt(function(F){return F.disabled===!0&&F.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ne.apply(w=ie.call(M.childNodes),M.childNodes),w[M.childNodes.length].nodeType}catch(F){ne={apply:w.length?function($,Z){V.apply($,ie.call(Z))}:function($,Z){for(var Y=$.length,z=0;$[Y++]=Z[z++];);$.length=Y-1}}}function Pe(F,$,Z,Y){var z,X,ee,se,ue,me,Ce,Te=$&&$.ownerDocument,xe=$?$.nodeType:9;if(Z=Z||[],typeof F!="string"||!F||xe!==1&&xe!==9&&xe!==11)return Z;if(!Y&&(S($),$=$||v,T)){if(xe!==11&&(ue=De.exec(F)))if(z=ue[1]){if(xe===9)if(ee=$.getElementById(z)){if(ee.id===z)return Z.push(ee),Z}else return Z;else if(Te&&(ee=Te.getElementById(z))&&A($,ee)&&ee.id===z)return Z.push(ee),Z}else{if(ue[2])return ne.apply(Z,$.getElementsByTagName(F)),Z;if((z=ue[3])&&l.getElementsByClassName&&$.getElementsByClassName)return ne.apply(Z,$.getElementsByClassName(z)),Z}if(l.qsa&&!W[F+" "]&&(!C||!C.test(F))&&(xe!==1||$.nodeName.toLowerCase()!=="object")){if(Ce=F,Te=$,xe===1&&(Re.test(F)||At.test(F))){for(Te=ae.test(F)&&gn($.parentNode)||$,(Te!==$||!l.scope)&&((se=$.getAttribute("id"))?se=se.replace(Ee,Ze):$.setAttribute("id",se=D)),me=c(F),X=me.length;X--;)me[X]=(se?"#"+se:":scope")+" "+mn(me[X]);Ce=me.join(",")}try{return ne.apply(Z,Te.querySelectorAll(Ce)),Z}catch(Ve){W(F,!0)}finally{se===D&&$.removeAttribute("id")}}}return i(F.replace(ut,"$1"),$,Z,Y)}function $e(){var F=[];function $(Z,Y){return F.push(Z+" ")>d.cacheLength&&delete $[F.shift()],$[Z+" "]=Y}return $}function Qe(F){return F[D]=!0,F}function Xe(F){var $=v.createElement("fieldset");try{return!!F($)}catch(Z){return!1}finally{$.parentNode&&$.parentNode.removeChild($),$=null}}function Wt(F,$){for(var Z=F.split("|"),Y=Z.length;Y--;)d.attrHandle[Z[Y]]=$}function It(F,$){var Z=$&&F,Y=Z&&F.nodeType===1&&$.nodeType===1&&F.sourceIndex-$.sourceIndex;if(Y)return Y;if(Z){for(;Z=Z.nextSibling;)if(Z===$)return-1}return F?1:-1}function Nt(F){return function($){var Z=$.nodeName.toLowerCase();return Z==="input"&&$.type===F}}function Tn(F){return function($){var Z=$.nodeName.toLowerCase();return(Z==="input"||Z==="button")&&$.type===F}}function an(F){return function($){return"form"in $?$.parentNode&&$.disabled===!1?"label"in $?"label"in $.parentNode?$.parentNode.disabled===F:$.disabled===F:$.isDisabled===F||$.isDisabled!==!F&&Je($)===F:$.disabled===F:"label"in $?$.disabled===F:!1}}function zt(F){return Qe(function($){return $=+$,Qe(function(Z,Y){for(var z,X=F([],Z.length,$),ee=X.length;ee--;)Z[z=X[ee]]&&(Z[z]=!(Y[z]=Z[z]))})})}function gn(F){return F&&typeof F.getElementsByTagName!="undefined"&&F}l=Pe.support={},a=Pe.isXML=function(F){var $=F&&F.namespaceURI,Z=F&&(F.ownerDocument||F).documentElement;return!Bt.test($||Z&&Z.nodeName||"HTML")},S=Pe.setDocument=function(F){var $,Z,Y=F?F.ownerDocument||F:M;return Y==v||Y.nodeType!==9||!Y.documentElement||(v=Y,b=v.documentElement,T=!a(v),M!=v&&(Z=v.defaultView)&&Z.top!==Z&&(Z.addEventListener?Z.addEventListener("unload",Ke,!1):Z.attachEvent&&Z.attachEvent("onunload",Ke)),l.scope=Xe(function(z){return b.appendChild(z).appendChild(v.createElement("div")),typeof z.querySelectorAll!="undefined"&&!z.querySelectorAll(":scope fieldset div").length}),l.attributes=Xe(function(z){return z.className="i",!z.getAttribute("className")}),l.getElementsByTagName=Xe(function(z){return z.appendChild(v.createComment("")),!z.getElementsByTagName("*").length}),l.getElementsByClassName=Ne.test(v.getElementsByClassName),l.getById=Xe(function(z){return b.appendChild(z).id=D,!v.getElementsByName||!v.getElementsByName(D).length}),l.getById?(d.filter.ID=function(z){var X=z.replace(ve,he);return function(ee){return ee.getAttribute("id")===X}},d.find.ID=function(z,X){if(typeof X.getElementById!="undefined"&&T){var ee=X.getElementById(z);return ee?[ee]:[]}}):(d.filter.ID=function(z){var X=z.replace(ve,he);return function(ee){var se=typeof ee.getAttributeNode!="undefined"&&ee.getAttributeNode("id");return se&&se.value===X}},d.find.ID=function(z,X){if(typeof X.getElementById!="undefined"&&T){var ee,se,ue,me=X.getElementById(z);if(me){if(ee=me.getAttributeNode("id"),ee&&ee.value===z)return[me];for(ue=X.getElementsByName(z),se=0;me=ue[se++];)if(ee=me.getAttributeNode("id"),ee&&ee.value===z)return[me]}return[]}}),d.find.TAG=l.getElementsByTagName?function(z,X){if(typeof X.getElementsByTagName!="undefined")return X.getElementsByTagName(z);if(l.qsa)return X.querySelectorAll(z)}:function(z,X){var ee,se=[],ue=0,me=X.getElementsByTagName(z);if(z==="*"){for(;ee=me[ue++];)ee.nodeType===1&&se.push(ee);return se}return me},d.find.CLASS=l.getElementsByClassName&&function(z,X){if(typeof X.getElementsByClassName!="undefined"&&T)return X.getElementsByClassName(z)},N=[],C=[],(l.qsa=Ne.test(v.querySelectorAll))&&(Xe(function(z){var X;b.appendChild(z).innerHTML="<a id='"+D+"'></a><select id='"+D+"-\r\\' msallowcapture=''><option selected=''></option></select>",z.querySelectorAll("[msallowcapture^='']").length&&C.push("[*^$]="+ge+`*(?:''|"")`),z.querySelectorAll("[selected]").length||C.push("\\["+ge+"*(?:value|"+te+")"),z.querySelectorAll("[id~="+D+"-]").length||C.push("~="),X=v.createElement("input"),X.setAttribute("name",""),z.appendChild(X),z.querySelectorAll("[name='']").length||C.push("\\["+ge+"*name"+ge+"*="+ge+`*(?:''|"")`),z.querySelectorAll(":checked").length||C.push(":checked"),z.querySelectorAll("a#"+D+"+*").length||C.push(".#.+[+~]"),z.querySelectorAll("\\\f"),C.push("[\\r\\n\\f]")}),Xe(function(z){z.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var X=v.createElement("input");X.setAttribute("type","hidden"),z.appendChild(X).setAttribute("name","D"),z.querySelectorAll("[name=d]").length&&C.push("name"+ge+"*[*^$|!~]?="),z.querySelectorAll(":enabled").length!==2&&C.push(":enabled",":disabled"),b.appendChild(z).disabled=!0,z.querySelectorAll(":disabled").length!==2&&C.push(":enabled",":disabled"),z.querySelectorAll("*,:x"),C.push(",.*:")})),(l.matchesSelector=Ne.test(P=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector||b.msMatchesSelector))&&Xe(function(z){l.disconnectedMatch=P.call(z,"*"),P.call(z,"[s!='']:x"),N.push("!=",it)}),C=C.length&&new RegExp(C.join("|")),N=N.length&&new RegExp(N.join("|")),$=Ne.test(b.compareDocumentPosition),A=$||Ne.test(b.contains)?function(z,X){var ee=z.nodeType===9?z.documentElement:z,se=X&&X.parentNode;return z===se||!!(se&&se.nodeType===1&&(ee.contains?ee.contains(se):z.compareDocumentPosition&&z.compareDocumentPosition(se)&16))}:function(z,X){if(X){for(;X=X.parentNode;)if(X===z)return!0}return!1},B=$?function(z,X){if(z===X)return f=!0,0;var ee=!z.compareDocumentPosition-!X.compareDocumentPosition;return ee||(ee=(z.ownerDocument||z)==(X.ownerDocument||X)?z.compareDocumentPosition(X):1,ee&1||!l.sortDetached&&X.compareDocumentPosition(z)===ee?z==v||z.ownerDocument==M&&A(M,z)?-1:X==v||X.ownerDocument==M&&A(M,X)?1:u?le(u,z)-le(u,X):0:ee&4?-1:1)}:function(z,X){if(z===X)return f=!0,0;var ee,se=0,ue=z.parentNode,me=X.parentNode,Ce=[z],Te=[X];if(!ue||!me)return z==v?-1:X==v?1:ue?-1:me?1:u?le(u,z)-le(u,X):0;if(ue===me)return It(z,X);for(ee=z;ee=ee.parentNode;)Ce.unshift(ee);for(ee=X;ee=ee.parentNode;)Te.unshift(ee);for(;Ce[se]===Te[se];)se++;return se?It(Ce[se],Te[se]):Ce[se]==M?-1:Te[se]==M?1:0}),v},Pe.matches=function(F,$){return Pe(F,null,null,$)},Pe.matchesSelector=function(F,$){if(S(F),l.matchesSelector&&T&&!W[$+" "]&&(!N||!N.test($))&&(!C||!C.test($)))try{var Z=P.call(F,$);if(Z||l.disconnectedMatch||F.document&&F.document.nodeType!==11)return Z}catch(Y){W($,!0)}return Pe($,v,null,[F]).length>0},Pe.contains=function(F,$){return(F.ownerDocument||F)!=v&&S(F),A(F,$)},Pe.attr=function(F,$){(F.ownerDocument||F)!=v&&S(F);var Z=d.attrHandle[$.toLowerCase()],Y=Z&&H.call(d.attrHandle,$.toLowerCase())?Z(F,$,!T):void 0;return Y!==void 0?Y:l.attributes||!T?F.getAttribute($):(Y=F.getAttributeNode($))&&Y.specified?Y.value:null},Pe.escape=function(F){return(F+"").replace(Ee,Ze)},Pe.error=function(F){throw new Error("Syntax error, unrecognized expression: "+F)},Pe.uniqueSort=function(F){var $,Z=[],Y=0,z=0;if(f=!l.detectDuplicates,u=!l.sortStable&&F.slice(0),F.sort(B),f){for(;$=F[z++];)$===F[z]&&(Y=Z.push(z));for(;Y--;)F.splice(Z[Y],1)}return u=null,F},p=Pe.getText=function(F){var $,Z="",Y=0,z=F.nodeType;if(z){if(z===1||z===9||z===11){if(typeof F.textContent=="string")return F.textContent;for(F=F.firstChild;F;F=F.nextSibling)Z+=p(F)}else if(z===3||z===4)return F.nodeValue}else for(;$=F[Y++];)Z+=p($);return Z},d=Pe.selectors={cacheLength:50,createPseudo:Qe,match:ze,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(F){return F[1]=F[1].replace(ve,he),F[3]=(F[3]||F[4]||F[5]||"").replace(ve,he),F[2]==="~="&&(F[3]=" "+F[3]+" "),F.slice(0,4)},CHILD:function(F){return F[1]=F[1].toLowerCase(),F[1].slice(0,3)==="nth"?(F[3]||Pe.error(F[0]),F[4]=+(F[4]?F[5]+(F[6]||1):2*(F[3]==="even"||F[3]==="odd")),F[5]=+(F[7]+F[8]||F[3]==="odd")):F[3]&&Pe.error(F[0]),F},PSEUDO:function(F){var $,Z=!F[6]&&F[2];return ze.CHILD.test(F[0])?null:(F[3]?F[2]=F[4]||F[5]||"":Z&&Et.test(Z)&&($=c(Z,!0))&&($=Z.indexOf(")",Z.length-$)-Z.length)&&(F[0]=F[0].slice(0,$),F[2]=Z.slice(0,$)),F.slice(0,3))}},filter:{TAG:function(F){var $=F.replace(ve,he).toLowerCase();return F==="*"?function(){return!0}:function(Z){return Z.nodeName&&Z.nodeName.toLowerCase()===$}},CLASS:function(F){var $=x[F+" "];return $||($=new RegExp("(^|"+ge+")"+F+"("+ge+"|$)"))&&x(F,function(Z){return $.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute!="undefined"&&Z.getAttribute("class")||"")})},ATTR:function(F,$,Z){return function(Y){var z=Pe.attr(Y,F);return z==null?$==="!=":$?(z+="",$==="="?z===Z:$==="!="?z!==Z:$==="^="?Z&&z.indexOf(Z)===0:$==="*="?Z&&z.indexOf(Z)>-1:$==="$="?Z&&z.slice(-Z.length)===Z:$==="~="?(" "+z.replace(mt," ")+" ").indexOf(Z)>-1:$==="|="?z===Z||z.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(F,$,Z,Y,z){var X=F.slice(0,3)!=="nth",ee=F.slice(-4)!=="last",se=$==="of-type";return Y===1&&z===0?function(ue){return!!ue.parentNode}:function(ue,me,Ce){var Te,xe,Ve,ye,Fe,yt,Dt=X!==ee?"nextSibling":"previousSibling",at=ue.parentNode,Yt=se&&ue.nodeName.toLowerCase(),Un=!Ce&&!se,Ct=!1;if(at){if(X){for(;Dt;){for(ye=ue;ye=ye[Dt];)if(se?ye.nodeName.toLowerCase()===Yt:ye.nodeType===1)return!1;yt=Dt=F==="only"&&!yt&&"nextSibling"}return!0}if(yt=[ee?at.firstChild:at.lastChild],ee&&Un){for(ye=at,Ve=ye[D]||(ye[D]={}),xe=Ve[ye.uniqueID]||(Ve[ye.uniqueID]={}),Te=xe[F]||[],Fe=Te[0]===L&&Te[1],Ct=Fe&&Te[2],ye=Fe&&at.childNodes[Fe];ye=++Fe&&ye&&ye[Dt]||(Ct=Fe=0)||yt.pop();)if(ye.nodeType===1&&++Ct&&ye===ue){xe[F]=[L,Fe,Ct];break}}else if(Un&&(ye=ue,Ve=ye[D]||(ye[D]={}),xe=Ve[ye.uniqueID]||(Ve[ye.uniqueID]={}),Te=xe[F]||[],Fe=Te[0]===L&&Te[1],Ct=Fe),Ct===!1)for(;(ye=++Fe&&ye&&ye[Dt]||(Ct=Fe=0)||yt.pop())&&!((se?ye.nodeName.toLowerCase()===Yt:ye.nodeType===1)&&++Ct&&(Un&&(Ve=ye[D]||(ye[D]={}),xe=Ve[ye.uniqueID]||(Ve[ye.uniqueID]={}),xe[F]=[L,Ct]),ye===ue)););return Ct-=z,Ct===Y||Ct%Y===0&&Ct/Y>=0}}},PSEUDO:function(F,$){var Z,Y=d.pseudos[F]||d.setFilters[F.toLowerCase()]||Pe.error("unsupported pseudo: "+F);return Y[D]?Y($):Y.length>1?(Z=[F,F,"",$],d.setFilters.hasOwnProperty(F.toLowerCase())?Qe(function(z,X){for(var ee,se=Y(z,$),ue=se.length;ue--;)ee=le(z,se[ue]),z[ee]=!(X[ee]=se[ue])}):function(z){return Y(z,0,Z)}):Y}},pseudos:{not:Qe(function(F){var $=[],Z=[],Y=m(F.replace(ut,"$1"));return Y[D]?Qe(function(z,X,ee,se){for(var ue,me=Y(z,null,se,[]),Ce=z.length;Ce--;)(ue=me[Ce])&&(z[Ce]=!(X[Ce]=ue))}):function(z,X,ee){return $[0]=z,Y($,null,ee,Z),$[0]=null,!Z.pop()}}),has:Qe(function(F){return function($){return Pe(F,$).length>0}}),contains:Qe(function(F){return F=F.replace(ve,he),function($){return($.textContent||p($)).indexOf(F)>-1}}),lang:Qe(function(F){return Ue.test(F||"")||Pe.error("unsupported lang: "+F),F=F.replace(ve,he).toLowerCase(),function($){var Z;do if(Z=T?$.lang:$.getAttribute("xml:lang")||$.getAttribute("lang"))return Z=Z.toLowerCase(),Z===F||Z.indexOf(F+"-")===0;while(($=$.parentNode)&&$.nodeType===1);return!1}}),target:function(F){var $=o.location&&o.location.hash;return $&&$.slice(1)===F.id},root:function(F){return F===b},focus:function(F){return F===v.activeElement&&(!v.hasFocus||v.hasFocus())&&!!(F.type||F.href||~F.tabIndex)},enabled:an(!1),disabled:an(!0),checked:function(F){var $=F.nodeName.toLowerCase();return $==="input"&&!!F.checked||$==="option"&&!!F.selected},selected:function(F){return F.parentNode&&F.parentNode.selectedIndex,F.selected===!0},empty:function(F){for(F=F.firstChild;F;F=F.nextSibling)if(F.nodeType<6)return!1;return!0},parent:function(F){return!d.pseudos.empty(F)},header:function(F){return pe.test(F.nodeName)},input:function(F){return je.test(F.nodeName)},button:function(F){var $=F.nodeName.toLowerCase();return $==="input"&&F.type==="button"||$==="button"},text:function(F){var $;return F.nodeName.toLowerCase()==="input"&&F.type==="text"&&(($=F.getAttribute("type"))==null||$.toLowerCase()==="text")},first:zt(function(){return[0]}),last:zt(function(F,$){return[$-1]}),eq:zt(function(F,$,Z){return[Z<0?Z+$:Z]}),even:zt(function(F,$){for(var Z=0;Z<$;Z+=2)F.push(Z);return F}),odd:zt(function(F,$){for(var Z=1;Z<$;Z+=2)F.push(Z);return F}),lt:zt(function(F,$,Z){for(var Y=Z<0?Z+$:Z>$?$:Z;--Y>=0;)F.push(Y);return F}),gt:zt(function(F,$,Z){for(var Y=Z<0?Z+$:Z;++Y<$;)F.push(Y);return F})}},d.pseudos.nth=d.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[n]=Nt(n);for(n in{submit:!0,reset:!0})d.pseudos[n]=Tn(n);function Ft(){}Ft.prototype=d.filters=d.pseudos,d.setFilters=new Ft,c=Pe.tokenize=function(F,$){var Z,Y,z,X,ee,se,ue,me=U[F+" "];if(me)return $?0:me.slice(0);for(ee=F,se=[],ue=d.preFilter;ee;){(!Z||(Y=ht.exec(ee)))&&(Y&&(ee=ee.slice(Y[0].length)||ee),se.push(z=[])),Z=!1,(Y=At.exec(ee))&&(Z=Y.shift(),z.push({value:Z,type:Y[0].replace(ut," ")}),ee=ee.slice(Z.length));for(X in d.filter)(Y=ze[X].exec(ee))&&(!ue[X]||(Y=ue[X](Y)))&&(Z=Y.shift(),z.push({value:Z,type:X,matches:Y}),ee=ee.slice(Z.length));if(!Z)break}return $?ee.length:ee?Pe.error(F):U(F,se).slice(0)};function mn(F){for(var $=0,Z=F.length,Y="";$<Z;$++)Y+=F[$].value;return Y}function vt(F,$,Z){var Y=$.dir,z=$.next,X=z||Y,ee=Z&&X==="parentNode",se=_++;return $.first?function(ue,me,Ce){for(;ue=ue[Y];)if(ue.nodeType===1||ee)return F(ue,me,Ce);return!1}:function(ue,me,Ce){var Te,xe,Ve,ye=[L,se];if(Ce){for(;ue=ue[Y];)if((ue.nodeType===1||ee)&&F(ue,me,Ce))return!0}else for(;ue=ue[Y];)if(ue.nodeType===1||ee)if(Ve=ue[D]||(ue[D]={}),xe=Ve[ue.uniqueID]||(Ve[ue.uniqueID]={}),z&&z===ue.nodeName.toLowerCase())ue=ue[Y]||ue;else{if((Te=xe[X])&&Te[0]===L&&Te[1]===se)return ye[2]=Te[2];if(xe[X]=ye,ye[2]=F(ue,me,Ce))return!0}return!1}}function An(F){return F.length>1?function($,Z,Y){for(var z=F.length;z--;)if(!F[z]($,Z,Y))return!1;return!0}:F[0]}function kn(F,$,Z){for(var Y=0,z=$.length;Y<z;Y++)Pe(F,$[Y],Z);return Z}function cn(F,$,Z,Y,z){for(var X,ee=[],se=0,ue=F.length,me=$!=null;se<ue;se++)(X=F[se])&&(!Z||Z(X,Y,z))&&(ee.push(X),me&&$.push(se));return ee}function wn(F,$,Z,Y,z,X){return Y&&!Y[D]&&(Y=wn(Y)),z&&!z[D]&&(z=wn(z,X)),Qe(function(ee,se,ue,me){var Ce,Te,xe,Ve=[],ye=[],Fe=se.length,yt=ee||kn($||"*",ue.nodeType?[ue]:ue,[]),Dt=F&&(ee||!$)?cn(yt,Ve,F,ue,me):yt,at=Z?z||(ee?F:Fe||Y)?[]:se:Dt;if(Z&&Z(Dt,at,ue,me),Y)for(Ce=cn(at,ye),Y(Ce,[],ue,me),Te=Ce.length;Te--;)(xe=Ce[Te])&&(at[ye[Te]]=!(Dt[ye[Te]]=xe));if(ee){if(z||F){if(z){for(Ce=[],Te=at.length;Te--;)(xe=at[Te])&&Ce.push(Dt[Te]=xe);z(null,at=[],Ce,me)}for(Te=at.length;Te--;)(xe=at[Te])&&(Ce=z?le(ee,xe):Ve[Te])>-1&&(ee[Ce]=!(se[Ce]=xe))}}else at=cn(at===se?at.splice(Fe,at.length):at),z?z(null,se,at,me):ne.apply(se,at)})}function Nn(F){for(var $,Z,Y,z=F.length,X=d.relative[F[0].type],ee=X||d.relative[" "],se=X?1:0,ue=vt(function(Te){return Te===$},ee,!0),me=vt(function(Te){return le($,Te)>-1},ee,!0),Ce=[function(Te,xe,Ve){var ye=!X&&(Ve||xe!==h)||(($=xe).nodeType?ue(Te,xe,Ve):me(Te,xe,Ve));return $=null,ye}];se<z;se++)if(Z=d.relative[F[se].type])Ce=[vt(An(Ce),Z)];else{if(Z=d.filter[F[se].type].apply(null,F[se].matches),Z[D]){for(Y=++se;Y<z&&!d.relative[F[Y].type];Y++);return wn(se>1&&An(Ce),se>1&&mn(F.slice(0,se-1).concat({value:F[se-2].type===" "?"*":""})).replace(ut,"$1"),Z,se<Y&&Nn(F.slice(se,Y)),Y<z&&Nn(F=F.slice(Y)),Y<z&&mn(F))}Ce.push(Z)}return An(Ce)}function lo(F,$){var Z=$.length>0,Y=F.length>0,z=function(X,ee,se,ue,me){var Ce,Te,xe,Ve=0,ye="0",Fe=X&&[],yt=[],Dt=h,at=X||Y&&d.find.TAG("*",me),Yt=L+=Dt==null?1:Math.random()||.1,Un=at.length;for(me&&(h=ee==v||ee||me);ye!==Un&&(Ce=at[ye])!=null;ye++){if(Y&&Ce){for(Te=0,!ee&&Ce.ownerDocument!=v&&(S(Ce),se=!T);xe=F[Te++];)if(xe(Ce,ee||v,se)){ue.push(Ce);break}me&&(L=Yt)}Z&&((Ce=!xe&&Ce)&&Ve--,X&&Fe.push(Ce))}if(Ve+=ye,Z&&ye!==Ve){for(Te=0;xe=$[Te++];)xe(Fe,yt,ee,se);if(X){if(Ve>0)for(;ye--;)Fe[ye]||yt[ye]||(yt[ye]=q.call(ue));yt=cn(yt)}ne.apply(ue,yt),me&&!X&&yt.length>0&&Ve+$.length>1&&Pe.uniqueSort(ue)}return me&&(L=Yt,h=Dt),Fe};return Z?Qe(z):z}m=Pe.compile=function(F,$){var Z,Y=[],z=[],X=j[F+" "];if(!X){for($||($=c(F)),Z=$.length;Z--;)X=Nn($[Z]),X[D]?Y.push(X):z.push(X);X=j(F,lo(z,Y)),X.selector=F}return X},i=Pe.select=function(F,$,Z,Y){var z,X,ee,se,ue,me=typeof F=="function"&&F,Ce=!Y&&c(F=me.selector||F);if(Z=Z||[],Ce.length===1){if(X=Ce[0]=Ce[0].slice(0),X.length>2&&(ee=X[0]).type==="ID"&&$.nodeType===9&&T&&d.relative[X[1].type]){if($=(d.find.ID(ee.matches[0].replace(ve,he),$)||[])[0],$)me&&($=$.parentNode);else return Z;F=F.slice(X.shift().value.length)}for(z=ze.needsContext.test(F)?0:X.length;z--&&(ee=X[z],!d.relative[se=ee.type]);)if((ue=d.find[se])&&(Y=ue(ee.matches[0].replace(ve,he),ae.test(X[0].type)&&gn($.parentNode)||$))){if(X.splice(z,1),F=Y.length&&mn(X),!F)return ne.apply(Z,Y),Z;break}}return(me||m(F,Ce))(Y,$,!T,Z,!$||ae.test(F)&&gn($.parentNode)||$),Z},l.sortStable=D.split("").sort(B).join("")===D,l.detectDuplicates=!!f,S(),l.sortDetached=Xe(function(F){return F.compareDocumentPosition(v.createElement("fieldset"))&1}),Xe(function(F){return F.innerHTML="<a href='#'></a>",F.firstChild.getAttribute("href")==="#"})||Wt("type|href|height|width",function(F,$,Z){if(!Z)return F.getAttribute($,$.toLowerCase()==="type"?1:2)}),(!l.attributes||!Xe(function(F){return F.innerHTML="<input/>",F.firstChild.setAttribute("value",""),F.firstChild.getAttribute("value")===""}))&&Wt("value",function(F,$,Z){if(!Z&&F.nodeName.toLowerCase()==="input")return F.defaultValue}),Xe(function(F){return F.getAttribute("disabled")==null})||Wt(te,function(F,$,Z){var Y;if(!Z)return F[$]===!0?$.toLowerCase():(Y=F.getAttributeNode($))&&Y.specified?Y.value:null});var Kn=o.Sizzle;Pe.noConflict=function(){return o.Sizzle===Pe&&(o.Sizzle=Kn),Pe},g=function(){return Pe}.call(y,r,y,O),g!==void 0&&(O.exports=g)})(window)},8442:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(4548),r(1873),r(3261),r(9543),r(6132),r(7972),r(1143),r(2387),r(3281),r(530)],o=function(n,l,d,p,a,c,m){"use strict";var i=/%20/g,h=/#.*$/,u=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,S=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,v=/^(?:GET|HEAD)$/,b=/^\/\//,T={},C={},N="*/".concat("*"),P=l.createElement("a");P.href=a.href;function A(x){return function(U,j){typeof U!="string"&&(j=U,U="*");var W,B=0,H=U.toLowerCase().match(p)||[];if(d(j))for(;W=H[B++];)W[0]==="+"?(W=W.slice(1)||"*",(x[W]=x[W]||[]).unshift(j)):(x[W]=x[W]||[]).push(j)}}function D(x,U,j,W){var B={},H=x===C;function w(q){var V;return B[q]=!0,n.each(x[q]||[],function(ne,ie){var le=ie(U,j,W);if(typeof le=="string"&&!H&&!B[le])return U.dataTypes.unshift(le),w(le),!1;if(H)return!(V=le)}),V}return w(U.dataTypes[0])||!B["*"]&&w("*")}function M(x,U){var j,W,B=n.ajaxSettings.flatOptions||{};for(j in U)U[j]!==void 0&&((B[j]?x:W||(W={}))[j]=U[j]);return W&&n.extend(!0,x,W),x}function L(x,U,j){for(var W,B,H,w,q=x.contents,V=x.dataTypes;V[0]==="*";)V.shift(),W===void 0&&(W=x.mimeType||U.getResponseHeader("Content-Type"));if(W){for(B in q)if(q[B]&&q[B].test(W)){V.unshift(B);break}}if(V[0]in j)H=V[0];else{for(B in j){if(!V[0]||x.converters[B+" "+V[0]]){H=B;break}w||(w=B)}H=H||w}if(H)return H!==V[0]&&V.unshift(H),j[H]}function _(x,U,j,W){var B,H,w,q,V,ne={},ie=x.dataTypes.slice();if(ie[1])for(w in x.converters)ne[w.toLowerCase()]=x.converters[w];for(H=ie.shift();H;)if(x.responseFields[H]&&(j[x.responseFields[H]]=U),!V&&W&&x.dataFilter&&(U=x.dataFilter(U,x.dataType)),V=H,H=ie.shift(),H){if(H==="*")H=V;else if(V!=="*"&&V!==H){if(w=ne[V+" "+H]||ne["* "+H],!w){for(B in ne)if(q=B.split(" "),q[1]===H&&(w=ne[V+" "+q[0]]||ne["* "+q[0]],w)){w===!0?w=ne[B]:ne[B]!==!0&&(H=q[0],ie.unshift(q[1]));break}}if(w!==!0)if(w&&x.throws)U=w(U);else try{U=w(U)}catch(le){return{state:"parsererror",error:w?le:"No conversion from "+V+" to "+H}}}}return{state:"success",data:U}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:a.href,type:"GET",isLocal:S.test(a.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":N,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(x,U){return U?M(M(x,n.ajaxSettings),U):M(n.ajaxSettings,x)},ajaxPrefilter:A(T),ajaxTransport:A(C),ajax:function(x,U){typeof x=="object"&&(U=x,x=void 0),U=U||{};var j,W,B,H,w,q,V,ne,ie,le,te=n.ajaxSetup({},U),ge=te.context||te,be=te.context&&(ge.nodeType||ge.jquery)?n(ge):n.event,Ie=n.Deferred(),it=n.Callbacks("once memory"),mt=te.statusCode||{},ut={},ht={},At="canceled",Re={readyState:0,getResponseHeader:function(Ue){var ze;if(V){if(!H)for(H={};ze=f.exec(B);)H[ze[1].toLowerCase()+" "]=(H[ze[1].toLowerCase()+" "]||[]).concat(ze[2]);ze=H[Ue.toLowerCase()+" "]}return ze==null?null:ze.join(", ")},getAllResponseHeaders:function(){return V?B:null},setRequestHeader:function(Ue,ze){return V==null&&(Ue=ht[Ue.toLowerCase()]=ht[Ue.toLowerCase()]||Ue,ut[Ue]=ze),this},overrideMimeType:function(Ue){return V==null&&(te.mimeType=Ue),this},statusCode:function(Ue){var ze;if(Ue)if(V)Re.always(Ue[Re.status]);else for(ze in Ue)mt[ze]=[mt[ze],Ue[ze]];return this},abort:function(Ue){var ze=Ue||At;return j&&j.abort(ze),Et(0,ze),this}};if(Ie.promise(Re),te.url=((x||te.url||a.href)+"").replace(b,a.protocol+"//"),te.type=U.method||U.type||te.method||te.type,te.dataTypes=(te.dataType||"*").toLowerCase().match(p)||[""],te.crossDomain==null){q=l.createElement("a");try{q.href=te.url,q.href=q.href,te.crossDomain=P.protocol+"//"+P.host!=q.protocol+"//"+q.host}catch(Ue){te.crossDomain=!0}}if(te.data&&te.processData&&typeof te.data!="string"&&(te.data=n.param(te.data,te.traditional)),D(T,te,U,Re),V)return Re;ne=n.event&&te.global,ne&&n.active++===0&&n.event.trigger("ajaxStart"),te.type=te.type.toUpperCase(),te.hasContent=!v.test(te.type),W=te.url.replace(h,""),te.hasContent?te.data&&te.processData&&(te.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(te.data=te.data.replace(i,"+")):(le=te.url.slice(W.length),te.data&&(te.processData||typeof te.data=="string")&&(W+=(m.test(W)?"&":"?")+te.data,delete te.data),te.cache===!1&&(W=W.replace(u,"$1"),le=(m.test(W)?"&":"?")+"_="+c.guid+++le),te.url=W+le),te.ifModified&&(n.lastModified[W]&&Re.setRequestHeader("If-Modified-Since",n.lastModified[W]),n.etag[W]&&Re.setRequestHeader("If-None-Match",n.etag[W])),(te.data&&te.hasContent&&te.contentType!==!1||U.contentType)&&Re.setRequestHeader("Content-Type",te.contentType),Re.setRequestHeader("Accept",te.dataTypes[0]&&te.accepts[te.dataTypes[0]]?te.accepts[te.dataTypes[0]]+(te.dataTypes[0]!=="*"?", "+N+"; q=0.01":""):te.accepts["*"]);for(ie in te.headers)Re.setRequestHeader(ie,te.headers[ie]);if(te.beforeSend&&(te.beforeSend.call(ge,Re,te)===!1||V))return Re.abort();if(At="abort",it.add(te.complete),Re.done(te.success),Re.fail(te.error),j=D(C,te,U,Re),!j)Et(-1,"No Transport");else{if(Re.readyState=1,ne&&be.trigger("ajaxSend",[Re,te]),V)return Re;te.async&&te.timeout>0&&(w=window.setTimeout(function(){Re.abort("timeout")},te.timeout));try{V=!1,j.send(ut,Et)}catch(Ue){if(V)throw Ue;Et(-1,Ue)}}function Et(Ue,ze,Bt,je){var pe,Ne,De,ae,ve,he=ze;V||(V=!0,w&&window.clearTimeout(w),j=void 0,B=je||"",Re.readyState=Ue>0?4:0,pe=Ue>=200&&Ue<300||Ue===304,Bt&&(ae=L(te,Re,Bt)),!pe&&n.inArray("script",te.dataTypes)>-1&&n.inArray("json",te.dataTypes)<0&&(te.converters["text script"]=function(){}),ae=_(te,ae,Re,pe),pe?(te.ifModified&&(ve=Re.getResponseHeader("Last-Modified"),ve&&(n.lastModified[W]=ve),ve=Re.getResponseHeader("etag"),ve&&(n.etag[W]=ve)),Ue===204||te.type==="HEAD"?he="nocontent":Ue===304?he="notmodified":(he=ae.state,Ne=ae.data,De=ae.error,pe=!De)):(De=he,(Ue||!he)&&(he="error",Ue<0&&(Ue=0))),Re.status=Ue,Re.statusText=(ze||he)+"",pe?Ie.resolveWith(ge,[Ne,he,Re]):Ie.rejectWith(ge,[Re,he,De]),Re.statusCode(mt),mt=void 0,ne&&be.trigger(pe?"ajaxSuccess":"ajaxError",[Re,te,pe?Ne:De]),it.fireWith(ge,[Re,he]),ne&&(be.trigger("ajaxComplete",[Re,te]),--n.active||n.event.trigger("ajaxStop")))}return Re},getJSON:function(x,U,j){return n.get(x,U,j,"json")},getScript:function(x,U){return n.get(x,void 0,U,"script")}}),n.each(["get","post"],function(x,U){n[U]=function(j,W,B,H){return d(W)&&(H=H||B,B=W,W=void 0),n.ajax(n.extend({url:j,type:U,dataType:H,data:W,success:B},n.isPlainObject(j)&&j))}}),n.ajaxPrefilter(function(x){var U;for(U in x.headers)U.toLowerCase()==="content-type"&&(x.contentType=x.headers[U]||"")}),n}.apply(y,g),o!==void 0&&(O.exports=o)},6793:(O,y,r)=>{var g,o;g=[r(2760),r(4548),r(9543),r(6132),r(8442)],o=function(n,l,d,p){"use strict";var a=[],c=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var m=a.pop()||n.expando+"_"+d.guid++;return this[m]=!0,m}}),n.ajaxPrefilter("json jsonp",function(m,i,h){var u,f,S,v=m.jsonp!==!1&&(c.test(m.url)?"url":typeof m.data=="string"&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&c.test(m.data)&&"data");if(v||m.dataTypes[0]==="jsonp")return u=m.jsonpCallback=l(m.jsonpCallback)?m.jsonpCallback():m.jsonpCallback,v?m[v]=m[v].replace(c,"$1"+u):m.jsonp!==!1&&(m.url+=(p.test(m.url)?"&":"?")+m.jsonp+"="+u),m.converters["script json"]=function(){return S||n.error(u+" was not called"),S[0]},m.dataTypes[0]="json",f=window[u],window[u]=function(){S=arguments},h.always(function(){f===void 0?n(window).removeProp(u):window[u]=f,m[u]&&(m.jsonpCallback=i.jsonpCallback,a.push(u)),S&&l(f)&&f(S[0]),S=f=void 0}),"script"})}.apply(y,g),o!==void 0&&(O.exports=o)},3412:(O,y,r)=>{var g,o;g=[r(2760),r(6588),r(4548),r(6490),r(8442),r(889),r(9803),r(5395)],o=function(n,l,d){"use strict";n.fn.load=function(p,a,c){var m,i,h,u=this,f=p.indexOf(" ");return f>-1&&(m=l(p.slice(f)),p=p.slice(0,f)),d(a)?(c=a,a=void 0):a&&typeof a=="object"&&(i="POST"),u.length>0&&n.ajax({url:p,type:i||"GET",dataType:"html",data:a}).done(function(S){h=arguments,u.html(m?n("<div>").append(n.parseHTML(S)).find(m):S)}).always(c&&function(S,v){u.each(function(){c.apply(this,h||[S.responseText,v,S])})}),this}}.apply(y,g),o!==void 0&&(O.exports=o)},7058:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(8442)],o=function(n,l){"use strict";n.ajaxPrefilter(function(d){d.crossDomain&&(d.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(d){return n.globalEval(d),d}}}),n.ajaxPrefilter("script",function(d){d.cache===void 0&&(d.cache=!1),d.crossDomain&&(d.type="GET")}),n.ajaxTransport("script",function(d){if(d.crossDomain||d.scriptAttrs){var p,a;return{send:function(c,m){p=n("<script>").attr(d.scriptAttrs||{}).prop({charset:d.scriptCharset,src:d.url}).on("load error",a=function(i){p.remove(),a=null,i&&m(i.type==="error"?404:200,i.type)}),l.head.appendChild(p[0])},abort:function(){a&&a()}}}})}.apply(y,g),o!==void 0&&(O.exports=o)},3261:(O,y,r)=>{var g;g=function(){"use strict";return window.location}.call(y,r,y,O),g!==void 0&&(O.exports=g)},9543:(O,y,r)=>{var g;g=function(){"use strict";return{guid:Date.now()}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},6132:(O,y,r)=>{var g;g=function(){"use strict";return/\?/}.call(y,r,y,O),g!==void 0&&(O.exports=g)},439:(O,y,r)=>{var g,o;g=[r(2760),r(240),r(8442)],o=function(n,l){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(a){}};var d={0:200,1223:204},p=n.ajaxSettings.xhr();l.cors=!!p&&"withCredentials"in p,l.ajax=p=!!p,n.ajaxTransport(function(a){var c,m;if(l.cors||p&&!a.crossDomain)return{send:function(i,h){var u,f=a.xhr();if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(u in a.xhrFields)f[u]=a.xhrFields[u];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),!a.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(u in i)f.setRequestHeader(u,i[u]);c=function(S){return function(){c&&(c=m=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,S==="abort"?f.abort():S==="error"?typeof f.status!="number"?h(0,"error"):h(f.status,f.statusText):h(d[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=c(),m=f.onerror=f.ontimeout=c("error"),f.onabort!==void 0?f.onabort=m:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){c&&m()})},c=c("abort");try{f.send(a.hasContent&&a.data||null)}catch(S){if(c)throw S}},abort:function(){c&&c()}}})}.apply(y,g),o!==void 0&&(O.exports=o)},904:(O,y,r)=>{var g,o;g=[r(2760),r(2849),r(7677),r(3740),r(8304)],o=function(n){"use strict";return n}.apply(y,g),o!==void 0&&(O.exports=o)},2849:(O,y,r)=>{var g,o;g=[r(2760),r(9743),r(4778),r(8996),r(1873),r(5395)],o=function(n,l,d,p,a){"use strict";var c,m=n.expr.attrHandle;n.fn.extend({attr:function(i,h){return l(this,n.attr,i,h,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,h,u){var f,S,v=i.nodeType;if(!(v===3||v===8||v===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,h,u);if((v!==1||!n.isXMLDoc(i))&&(S=n.attrHooks[h.toLowerCase()]||(n.expr.match.bool.test(h)?c:void 0)),u!==void 0){if(u===null){n.removeAttr(i,h);return}return S&&"set"in S&&(f=S.set(i,u,h))!==void 0?f:(i.setAttribute(h,u+""),u)}return S&&"get"in S&&(f=S.get(i,h))!==null?f:(f=n.find.attr(i,h),f==null?void 0:f)}},attrHooks:{type:{set:function(i,h){if(!p.radioValue&&h==="radio"&&d(i,"input")){var u=i.value;return i.setAttribute("type",h),u&&(i.value=u),h}}}},removeAttr:function(i,h){var u,f=0,S=h&&h.match(a);if(S&&i.nodeType===1)for(;u=S[f++];)i.removeAttribute(u)}}),c={set:function(i,h,u){return h===!1?n.removeAttr(i,u):i.setAttribute(u,u),u}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,h){var u=m[h]||n.find.attr;m[h]=function(f,S,v){var b,T,C=S.toLowerCase();return v||(T=m[C],m[C]=b,b=u(f,S,v)!=null?C:null,m[C]=T),b}})}.apply(y,g),o!==void 0&&(O.exports=o)},3740:(O,y,r)=>{var g,o;g=[r(2760),r(6588),r(4548),r(1873),r(602),r(7972)],o=function(n,l,d,p,a){"use strict";function c(i){return i.getAttribute&&i.getAttribute("class")||""}function m(i){return Array.isArray(i)?i:typeof i=="string"?i.match(p)||[]:[]}n.fn.extend({addClass:function(i){var h,u,f,S,v,b;return d(i)?this.each(function(T){n(this).addClass(i.call(this,T,c(this)))}):(h=m(i),h.length?this.each(function(){if(f=c(this),u=this.nodeType===1&&" "+l(f)+" ",u){for(v=0;v<h.length;v++)S=h[v],u.indexOf(" "+S+" ")<0&&(u+=S+" ");b=l(u),f!==b&&this.setAttribute("class",b)}}):this)},removeClass:function(i){var h,u,f,S,v,b;return d(i)?this.each(function(T){n(this).removeClass(i.call(this,T,c(this)))}):arguments.length?(h=m(i),h.length?this.each(function(){if(f=c(this),u=this.nodeType===1&&" "+l(f)+" ",u){for(v=0;v<h.length;v++)for(S=h[v];u.indexOf(" "+S+" ")>-1;)u=u.replace(" "+S+" "," ");b=l(u),f!==b&&this.setAttribute("class",b)}}):this):this.attr("class","")},toggleClass:function(i,h){var u,f,S,v,b=typeof i,T=b==="string"||Array.isArray(i);return d(i)?this.each(function(C){n(this).toggleClass(i.call(this,C,c(this),h),h)}):typeof h=="boolean"&&T?h?this.addClass(i):this.removeClass(i):(u=m(i),this.each(function(){if(T)for(v=n(this),S=0;S<u.length;S++)f=u[S],v.hasClass(f)?v.removeClass(f):v.addClass(f);else(i===void 0||b==="boolean")&&(f=c(this),f&&a.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||i===!1?"":a.get(this,"__className__")||""))}))},hasClass:function(i){var h,u,f=0;for(h=" "+i+" ";u=this[f++];)if(u.nodeType===1&&(" "+l(c(u))+" ").indexOf(h)>-1)return!0;return!1}})}.apply(y,g),o!==void 0&&(O.exports=o)},7677:(O,y,r)=>{var g,o;g=[r(2760),r(9743),r(8996),r(5395)],o=function(n,l,d){"use strict";var p=/^(?:input|select|textarea|button)$/i,a=/^(?:a|area)$/i;n.fn.extend({prop:function(c,m){return l(this,n.prop,c,m,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[n.propFix[c]||c]})}}),n.extend({prop:function(c,m,i){var h,u,f=c.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!n.isXMLDoc(c))&&(m=n.propFix[m]||m,u=n.propHooks[m]),i!==void 0?u&&"set"in u&&(h=u.set(c,i,m))!==void 0?h:c[m]=i:u&&"get"in u&&(h=u.get(c,m))!==null?h:c[m]},propHooks:{tabIndex:{get:function(c){var m=n.find.attr(c,"tabindex");return m?parseInt(m,10):p.test(c.nodeName)||a.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(n.propHooks.selected={get:function(c){var m=c.parentNode;return m&&m.parentNode&&m.parentNode.selectedIndex,null},set:function(c){var m=c.parentNode;m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(y,g),o!==void 0&&(O.exports=o)},8996:(O,y,r)=>{var g,o;g=[r(9775),r(240)],o=function(n,l){"use strict";return function(){var d=n.createElement("input"),p=n.createElement("select"),a=p.appendChild(n.createElement("option"));d.type="checkbox",l.checkOn=d.value!=="",l.optSelected=a.selected,d=n.createElement("input"),d.value="t",d.type="radio",l.radioValue=d.value==="t"}(),l}.apply(y,g),o!==void 0&&(O.exports=o)},8304:(O,y,r)=>{var g,o;g=[r(2760),r(6588),r(8996),r(4778),r(4548),r(7972)],o=function(n,l,d,p,a){"use strict";var c=/\r/g;n.fn.extend({val:function(m){var i,h,u,f=this[0];return arguments.length?(u=a(m),this.each(function(S){var v;this.nodeType===1&&(u?v=m.call(this,S,n(this).val()):v=m,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=n.map(v,function(b){return b==null?"":b+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,v,"value")===void 0)&&(this.value=v))})):f?(i=n.valHooks[f.type]||n.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(h=i.get(f,"value"))!==void 0?h:(h=f.value,typeof h=="string"?h.replace(c,""):h==null?"":h)):void 0}}),n.extend({valHooks:{option:{get:function(m){var i=n.find.attr(m,"value");return i!=null?i:l(n.text(m))}},select:{get:function(m){var i,h,u,f=m.options,S=m.selectedIndex,v=m.type==="select-one",b=v?null:[],T=v?S+1:f.length;for(S<0?u=T:u=v?S:0;u<T;u++)if(h=f[u],(h.selected||u===S)&&!h.disabled&&(!h.parentNode.disabled||!p(h.parentNode,"optgroup"))){if(i=n(h).val(),v)return i;b.push(i)}return b},set:function(m,i){for(var h,u,f=m.options,S=n.makeArray(i),v=f.length;v--;)u=f[v],(u.selected=n.inArray(n.valHooks.option.get(u),S)>-1)&&(h=!0);return h||(m.selectedIndex=-1),S}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(m,i){if(Array.isArray(i))return m.checked=n.inArray(n(m).val(),i)>-1}},d.checkOn||(n.valHooks[this].get=function(m){return m.getAttribute("value")===null?"on":m.value})})}.apply(y,g),o!==void 0&&(O.exports=o)},5432:(O,y,r)=>{var g,o;g=[r(2760),r(453),r(4548),r(1873)],o=function(n,l,d,p){"use strict";function a(c){var m={};return n.each(c.match(p)||[],function(i,h){m[h]=!0}),m}return n.Callbacks=function(c){c=typeof c=="string"?a(c):n.extend({},c);var m,i,h,u,f=[],S=[],v=-1,b=function(){for(u=u||c.once,h=m=!0;S.length;v=-1)for(i=S.shift();++v<f.length;)f[v].apply(i[0],i[1])===!1&&c.stopOnFalse&&(v=f.length,i=!1);c.memory||(i=!1),m=!1,u&&(i?f=[]:f="")},T={add:function(){return f&&(i&&!m&&(v=f.length-1,S.push(i)),function C(N){n.each(N,function(P,A){d(A)?(!c.unique||!T.has(A))&&f.push(A):A&&A.length&&l(A)!=="string"&&C(A)})}(arguments),i&&!m&&b()),this},remove:function(){return n.each(arguments,function(C,N){for(var P;(P=n.inArray(N,f,P))>-1;)f.splice(P,1),P<=v&&v--}),this},has:function(C){return C?n.inArray(C,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=S=[],f=i="",this},disabled:function(){return!f},lock:function(){return u=S=[],!i&&!m&&(f=i=""),this},locked:function(){return!!u},fireWith:function(C,N){return u||(N=N||[],N=[C,N.slice?N.slice():N],S.push(N),m||b()),this},fire:function(){return T.fireWith(this,arguments),this},fired:function(){return!!h}};return T},n}.apply(y,g),o!==void 0&&(O.exports=o)},2760:(O,y,r)=>{var g,o;g=[r(2386),r(9500),r(6101),r(2892),r(1391),r(3424),r(9872),r(4084),r(6805),r(9300),r(7878),r(240),r(4548),r(2035),r(5803),r(453)],o=function(n,l,d,p,a,c,m,i,h,u,f,S,v,b,T,C){"use strict";var N="3.6.1",P=function(D,M){return new P.fn.init(D,M)};P.fn=P.prototype={jquery:N,constructor:P,length:0,toArray:function(){return d.call(this)},get:function(D){return D==null?d.call(this):D<0?this[D+this.length]:this[D]},pushStack:function(D){var M=P.merge(this.constructor(),D);return M.prevObject=this,M},each:function(D){return P.each(this,D)},map:function(D){return this.pushStack(P.map(this,function(M,L){return D.call(M,L,M)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(P.grep(this,function(D,M){return(M+1)%2}))},odd:function(){return this.pushStack(P.grep(this,function(D,M){return M%2}))},eq:function(D){var M=this.length,L=+D+(D<0?M:0);return this.pushStack(L>=0&&L<M?[this[L]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},P.extend=P.fn.extend=function(){var D,M,L,_,x,U,j=arguments[0]||{},W=1,B=arguments.length,H=!1;for(typeof j=="boolean"&&(H=j,j=arguments[W]||{},W++),typeof j!="object"&&!v(j)&&(j={}),W===B&&(j=this,W--);W<B;W++)if((D=arguments[W])!=null)for(M in D)_=D[M],!(M==="__proto__"||j===_)&&(H&&_&&(P.isPlainObject(_)||(x=Array.isArray(_)))?(L=j[M],x&&!Array.isArray(L)?U=[]:!x&&!P.isPlainObject(L)?U={}:U=L,x=!1,j[M]=P.extend(H,U,_)):_!==void 0&&(j[M]=_));return j},P.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(D){throw new Error(D)},noop:function(){},isPlainObject:function(D){var M,L;return!D||i.call(D)!=="[object Object]"?!1:(M=l(D),M?(L=h.call(M,"constructor")&&M.constructor,typeof L=="function"&&u.call(L)===f):!0)},isEmptyObject:function(D){var M;for(M in D)return!1;return!0},globalEval:function(D,M,L){T(D,{nonce:M&&M.nonce},L)},each:function(D,M){var L,_=0;if(A(D))for(L=D.length;_<L&&M.call(D[_],_,D[_])!==!1;_++);else for(_ in D)if(M.call(D[_],_,D[_])===!1)break;return D},makeArray:function(D,M){var L=M||[];return D!=null&&(A(Object(D))?P.merge(L,typeof D=="string"?[D]:D):a.call(L,D)),L},inArray:function(D,M,L){return M==null?-1:c.call(M,D,L)},merge:function(D,M){for(var L=+M.length,_=0,x=D.length;_<L;_++)D[x++]=M[_];return D.length=x,D},grep:function(D,M,L){for(var _,x=[],U=0,j=D.length,W=!L;U<j;U++)_=!M(D[U],U),_!==W&&x.push(D[U]);return x},map:function(D,M,L){var _,x,U=0,j=[];if(A(D))for(_=D.length;U<_;U++)x=M(D[U],U,L),x!=null&&j.push(x);else for(U in D)x=M(D[U],U,L),x!=null&&j.push(x);return p(j)},guid:1,support:S}),typeof Symbol=="function"&&(P.fn[Symbol.iterator]=n[Symbol.iterator]),P.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(D,M){m["[object "+M+"]"]=M.toLowerCase()});function A(D){var M=!!D&&"length"in D&&D.length,L=C(D);return v(D)||b(D)?!1:L==="array"||M===0||typeof M=="number"&&M>0&&M-1 in D}return P}.apply(y,g),o!==void 0&&(O.exports=o)},5803:(O,y,r)=>{var g,o;g=[r(9775)],o=function(n){"use strict";var l={type:!0,src:!0,nonce:!0,noModule:!0};function d(p,a,c){c=c||n;var m,i,h=c.createElement("script");if(h.text=p,a)for(m in l)i=a[m]||a.getAttribute&&a.getAttribute(m),i&&h.setAttribute(m,i);c.head.appendChild(h).parentNode.removeChild(h)}return d}.apply(y,g),o!==void 0&&(O.exports=o)},9743:(O,y,r)=>{var g,o;g=[r(2760),r(453),r(4548)],o=function(n,l,d){"use strict";var p=function(a,c,m,i,h,u,f){var S=0,v=a.length,b=m==null;if(l(m)==="object"){h=!0;for(S in m)p(a,c,S,m[S],!0,u,f)}else if(i!==void 0&&(h=!0,d(i)||(f=!0),b&&(f?(c.call(a,i),c=null):(b=c,c=function(T,C,N){return b.call(n(T),N)})),c))for(;S<v;S++)c(a[S],m,f?i:i.call(a[S],S,c(a[S],m)));return h?a:b?c.call(a):v?c(a[0],m):u};return p}.apply(y,g),o!==void 0&&(O.exports=o)},8418:(O,y)=>{var r,g;r=[],g=function(){"use strict";var o=/^-ms-/,n=/-([a-z])/g;function l(p,a){return a.toUpperCase()}function d(p){return p.replace(o,"ms-").replace(n,l)}return d}.apply(y,r),g!==void 0&&(O.exports=g)},7972:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(4548),r(3754),r(6332)],o=function(n,l,d,p){"use strict";var a,c=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,m=n.fn.init=function(i,h,u){var f,S;if(!i)return this;if(u=u||a,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=c.exec(i),f&&(f[1]||!h))if(f[1]){if(h=h instanceof n?h[0]:h,n.merge(this,n.parseHTML(f[1],h&&h.nodeType?h.ownerDocument||h:l,!0)),p.test(f[1])&&n.isPlainObject(h))for(f in h)d(this[f])?this[f](h[f]):this.attr(f,h[f]);return this}else return S=l.getElementById(f[2]),S&&(this[0]=S,this.length=1),this;else return!h||h.jquery?(h||u).find(i):this.constructor(h).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(d(i))return u.ready!==void 0?u.ready(i):i(n)}return n.makeArray(i,this)};return m.prototype=n.fn,a=n(l),m}.apply(y,g),o!==void 0&&(O.exports=o)},1647:(O,y,r)=>{var g,o;g=[r(2760),r(5543),r(5395)],o=function(n,l){"use strict";var d=function(a){return n.contains(a.ownerDocument,a)},p={composed:!0};return l.getRootNode&&(d=function(a){return n.contains(a.ownerDocument,a)||a.getRootNode(p)===a.ownerDocument}),d}.apply(y,g),o!==void 0&&(O.exports=o)},4778:(O,y,r)=>{var g;g=function(){"use strict";function o(n,l){return n.nodeName&&n.nodeName.toLowerCase()===l.toLowerCase()}return o}.call(y,r,y,O),g!==void 0&&(O.exports=g)},6490:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(3754),r(2857),r(8168)],o=function(n,l,d,p,a){"use strict";return n.parseHTML=function(c,m,i){if(typeof c!="string")return[];typeof m=="boolean"&&(i=m,m=!1);var h,u,f;return m||(a.createHTMLDocument?(m=l.implementation.createHTMLDocument(""),h=m.createElement("base"),h.href=l.location.href,m.head.appendChild(h)):m=l),u=d.exec(c),f=!i&&[],u?[m.createElement(u[1])]:(u=p([c],m,f),f&&f.length&&n(f).remove(),n.merge([],u.childNodes))},n.parseHTML}.apply(y,g),o!==void 0&&(O.exports=o)},1143:(O,y,r)=>{var g,o;g=[r(2760)],o=function(n){"use strict";return n.parseXML=function(l){var d,p;if(!l||typeof l!="string")return null;try{d=new window.DOMParser().parseFromString(l,"text/xml")}catch(a){}return p=d&&d.getElementsByTagName("parsererror")[0],(!d||p)&&n.error("Invalid XML: "+(p?n.map(p.childNodes,function(a){return a.textContent}).join(`
`):l)),d},n.parseXML}.apply(y,g),o!==void 0&&(O.exports=o)},1437:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(866),r(3281)],o=function(n,l){"use strict";var d=n.Deferred();n.fn.ready=function(a){return d.then(a).catch(function(c){n.readyException(c)}),this},n.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(a!==!0&&--n.readyWait>0)&&d.resolveWith(l,[n]))}}),n.ready.then=d.then;function p(){l.removeEventListener("DOMContentLoaded",p),window.removeEventListener("load",p),n.ready()}l.readyState==="complete"||l.readyState!=="loading"&&!l.documentElement.doScroll?window.setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",p),window.addEventListener("load",p))}.apply(y,g),o!==void 0&&(O.exports=o)},866:(O,y,r)=>{var g,o;g=[r(2760)],o=function(n){"use strict";n.readyException=function(l){window.setTimeout(function(){throw l})}}.apply(y,g),o!==void 0&&(O.exports=o)},6588:(O,y,r)=>{var g,o;g=[r(1873)],o=function(n){"use strict";function l(d){var p=d.match(n)||[];return p.join(" ")}return l}.apply(y,g),o!==void 0&&(O.exports=o)},8168:(O,y,r)=>{var g,o;g=[r(9775),r(240)],o=function(n,l){"use strict";return l.createHTMLDocument=function(){var d=n.implementation.createHTMLDocument("").body;return d.innerHTML="<form></form><form></form>",d.childNodes.length===2}(),l}.apply(y,g),o!==void 0&&(O.exports=o)},453:(O,y,r)=>{var g,o;g=[r(9872),r(4084)],o=function(n,l){"use strict";function d(p){return p==null?p+"":typeof p=="object"||typeof p=="function"?n[l.call(p)]||"object":typeof p}return d}.apply(y,g),o!==void 0&&(O.exports=o)},3754:(O,y,r)=>{var g;g=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(y,r,y,O),g!==void 0&&(O.exports=g)},1852:(O,y,r)=>{var g,o;g=[r(2760),r(9743),r(8418),r(4778),r(9976),r(6410),r(6710),r(6015),r(4753),r(7138),r(188),r(9863),r(7971),r(6571),r(3731),r(7972),r(1437),r(5395)],o=function(n,l,d,p,a,c,m,i,h,u,f,S,v,b,T){"use strict";var C=/^(none|table(?!-c[ea]).+)/,N={position:"absolute",visibility:"hidden",display:"block"},P={letterSpacing:"0",fontWeight:"400"};function A(L,_,x){var U=a.exec(_);return U?Math.max(0,U[2]-(x||0))+(U[3]||"px"):_}function D(L,_,x,U,j,W){var B=_==="width"?1:0,H=0,w=0;if(x===(U?"border":"content"))return 0;for(;B<4;B+=2)x==="margin"&&(w+=n.css(L,x+i[B],!0,j)),U?(x==="content"&&(w-=n.css(L,"padding"+i[B],!0,j)),x!=="margin"&&(w-=n.css(L,"border"+i[B]+"Width",!0,j))):(w+=n.css(L,"padding"+i[B],!0,j),x!=="padding"?w+=n.css(L,"border"+i[B]+"Width",!0,j):H+=n.css(L,"border"+i[B]+"Width",!0,j));return!U&&W>=0&&(w+=Math.max(0,Math.ceil(L["offset"+_[0].toUpperCase()+_.slice(1)]-W-w-H-.5))||0),w}function M(L,_,x){var U=h(L),j=!b.boxSizingReliable()||x,W=j&&n.css(L,"boxSizing",!1,U)==="border-box",B=W,H=f(L,_,U),w="offset"+_[0].toUpperCase()+_.slice(1);if(c.test(H)){if(!x)return H;H="auto"}return(!b.boxSizingReliable()&&W||!b.reliableTrDimensions()&&p(L,"tr")||H==="auto"||!parseFloat(H)&&n.css(L,"display",!1,U)==="inline")&&L.getClientRects().length&&(W=n.css(L,"boxSizing",!1,U)==="border-box",B=w in L,B&&(H=L[w])),H=parseFloat(H)||0,H+D(L,_,x||(W?"border":"content"),B,U,H)+"px"}return n.extend({cssHooks:{opacity:{get:function(L,_){if(_){var x=f(L,"opacity");return x===""?"1":x}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(L,_,x,U){if(!(!L||L.nodeType===3||L.nodeType===8||!L.style)){var j,W,B,H=d(_),w=m.test(_),q=L.style;if(w||(_=T(H)),B=n.cssHooks[_]||n.cssHooks[H],x!==void 0){if(W=typeof x,W==="string"&&(j=a.exec(x))&&j[1]&&(x=S(L,_,j),W="number"),x==null||x!==x)return;W==="number"&&!w&&(x+=j&&j[3]||(n.cssNumber[H]?"":"px")),!b.clearCloneStyle&&x===""&&_.indexOf("background")===0&&(q[_]="inherit"),(!B||!("set"in B)||(x=B.set(L,x,U))!==void 0)&&(w?q.setProperty(_,x):q[_]=x)}else return B&&"get"in B&&(j=B.get(L,!1,U))!==void 0?j:q[_]}},css:function(L,_,x,U){var j,W,B,H=d(_),w=m.test(_);return w||(_=T(H)),B=n.cssHooks[_]||n.cssHooks[H],B&&"get"in B&&(j=B.get(L,!0,x)),j===void 0&&(j=f(L,_,U)),j==="normal"&&_ in P&&(j=P[_]),x===""||x?(W=parseFloat(j),x===!0||isFinite(W)?W||0:j):j}}),n.each(["height","width"],function(L,_){n.cssHooks[_]={get:function(x,U,j){if(U)return C.test(n.css(x,"display"))&&(!x.getClientRects().length||!x.getBoundingClientRect().width)?u(x,N,function(){return M(x,_,j)}):M(x,_,j)},set:function(x,U,j){var W,B=h(x),H=!b.scrollboxSize()&&B.position==="absolute",w=H||j,q=w&&n.css(x,"boxSizing",!1,B)==="border-box",V=j?D(x,_,j,q,B):0;return q&&H&&(V-=Math.ceil(x["offset"+_[0].toUpperCase()+_.slice(1)]-parseFloat(B[_])-D(x,_,"border",!1,B)-.5)),V&&(W=a.exec(U))&&(W[3]||"px")!=="px"&&(x.style[_]=U,U=n.css(x,_)),A(x,U,V)}}}),n.cssHooks.marginLeft=v(b.reliableMarginLeft,function(L,_){if(_)return(parseFloat(f(L,"marginLeft"))||L.getBoundingClientRect().left-u(L,{marginLeft:0},function(){return L.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(L,_){n.cssHooks[L+_]={expand:function(x){for(var U=0,j={},W=typeof x=="string"?x.split(" "):[x];U<4;U++)j[L+i[U]+_]=W[U]||W[U-2]||W[0];return j}},L!=="margin"&&(n.cssHooks[L+_].set=A)}),n.fn.extend({css:function(L,_){return l(this,function(x,U,j){var W,B,H={},w=0;if(Array.isArray(U)){for(W=h(x),B=U.length;w<B;w++)H[U[w]]=n.css(x,U[w],!1,W);return H}return j!==void 0?n.style(x,U,j):n.css(x,U)},L,_,arguments.length>1)}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},7971:(O,y,r)=>{var g;g=function(){"use strict";function o(n,l){return{get:function(){if(n()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}return o}.call(y,r,y,O),g!==void 0&&(O.exports=g)},9863:(O,y,r)=>{var g,o;g=[r(2760),r(9976)],o=function(n,l){"use strict";function d(p,a,c,m){var i,h,u=20,f=m?function(){return m.cur()}:function(){return n.css(p,a,"")},S=f(),v=c&&c[3]||(n.cssNumber[a]?"":"px"),b=p.nodeType&&(n.cssNumber[a]||v!=="px"&&+S)&&l.exec(n.css(p,a));if(b&&b[3]!==v){for(S=S/2,v=v||b[3],b=+S||1;u--;)n.style(p,a,b+v),(1-h)*(1-(h=f()/S||.5))<=0&&(u=0),b=b/h;b=b*2,n.style(p,a,b+v),c=c||[]}return c&&(b=+b||+S||0,i=c[1]?b+(c[1]+1)*c[2]:+c[2],m&&(m.unit=v,m.start=b,m.end=i)),i}return d}.apply(y,g),o!==void 0&&(O.exports=o)},188:(O,y,r)=>{var g,o;g=[r(2760),r(1647),r(4075),r(6410),r(4753),r(6710),r(362),r(6571)],o=function(n,l,d,p,a,c,m,i){"use strict";function h(u,f,S){var v,b,T,C,N=c.test(f),P=u.style;return S=S||a(u),S&&(C=S.getPropertyValue(f)||S[f],N&&(C=C.replace(m,"$1")),C===""&&!l(u)&&(C=n.style(u,f)),!i.pixelBoxStyles()&&p.test(C)&&d.test(f)&&(v=P.width,b=P.minWidth,T=P.maxWidth,P.minWidth=P.maxWidth=P.width=C,C=S.width,P.width=v,P.minWidth=b,P.maxWidth=T)),C!==void 0?C+"":C}return h}.apply(y,g),o!==void 0&&(O.exports=o)},3731:(O,y,r)=>{var g,o;g=[r(9775),r(2760)],o=function(n,l){"use strict";var d=["Webkit","Moz","ms"],p=n.createElement("div").style,a={};function c(i){for(var h=i[0].toUpperCase()+i.slice(1),u=d.length;u--;)if(i=d[u]+h,i in p)return i}function m(i){var h=l.cssProps[i]||a[i];return h||(i in p?i:a[i]=c(i)||i)}return m}.apply(y,g),o!==void 0&&(O.exports=o)},5117:(O,y,r)=>{var g,o;g=[r(2760),r(5395)],o=function(n){"use strict";n.expr.pseudos.hidden=function(l){return!n.expr.pseudos.visible(l)},n.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)}}.apply(y,g),o!==void 0&&(O.exports=o)},7499:(O,y,r)=>{var g,o;g=[r(2760),r(602),r(1601)],o=function(n,l,d){"use strict";var p={};function a(m){var i,h=m.ownerDocument,u=m.nodeName,f=p[u];return f||(i=h.body.appendChild(h.createElement(u)),f=n.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),p[u]=f,f)}function c(m,i){for(var h,u,f=[],S=0,v=m.length;S<v;S++)u=m[S],u.style&&(h=u.style.display,i?(h==="none"&&(f[S]=l.get(u,"display")||null,f[S]||(u.style.display="")),u.style.display===""&&d(u)&&(f[S]=a(u))):h!=="none"&&(f[S]="none",l.set(u,"display",h)));for(S=0;S<v;S++)f[S]!=null&&(m[S].style.display=f[S]);return m}return n.fn.extend({show:function(){return c(this,!0)},hide:function(){return c(this)},toggle:function(m){return typeof m=="boolean"?m?this.show():this.hide():this.each(function(){d(this)?n(this).show():n(this).hide()})}}),c}.apply(y,g),o!==void 0&&(O.exports=o)},6571:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(5543),r(240)],o=function(n,l,d,p){"use strict";return function(){function a(){if(!!b){v.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",d.appendChild(v).appendChild(b);var T=window.getComputedStyle(b);m=T.top!=="1%",S=c(T.marginLeft)===12,b.style.right="60%",u=c(T.right)===36,i=c(T.width)===36,b.style.position="absolute",h=c(b.offsetWidth/3)===12,d.removeChild(v),b=null}}function c(T){return Math.round(parseFloat(T))}var m,i,h,u,f,S,v=l.createElement("div"),b=l.createElement("div");!b.style||(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle=b.style.backgroundClip==="content-box",n.extend(p,{boxSizingReliable:function(){return a(),i},pixelBoxStyles:function(){return a(),u},pixelPosition:function(){return a(),m},reliableMarginLeft:function(){return a(),S},scrollboxSize:function(){return a(),h},reliableTrDimensions:function(){var T,C,N,P;return f==null&&(T=l.createElement("table"),C=l.createElement("tr"),N=l.createElement("div"),T.style.cssText="position:absolute;left:-11111px;border-collapse:separate",C.style.cssText="border:1px solid",C.style.height="1px",N.style.height="9px",N.style.display="block",d.appendChild(T).appendChild(C).appendChild(N),P=window.getComputedStyle(C),f=parseInt(P.height,10)+parseInt(P.borderTopWidth,10)+parseInt(P.borderBottomWidth,10)===C.offsetHeight,d.removeChild(T)),f}}))}(),p}.apply(y,g),o!==void 0&&(O.exports=o)},6015:(O,y,r)=>{var g;g=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(y,r,y,O),g!==void 0&&(O.exports=g)},4753:(O,y,r)=>{var g;g=function(){"use strict";return function(o){var n=o.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(o)}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},1601:(O,y,r)=>{var g,o;g=[r(2760),r(1647)],o=function(n,l){"use strict";return function(d,p){return d=p||d,d.style.display==="none"||d.style.display===""&&l(d)&&n.css(d,"display")==="none"}}.apply(y,g),o!==void 0&&(O.exports=o)},4075:(O,y,r)=>{var g,o;g=[r(6015)],o=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(y,g),o!==void 0&&(O.exports=o)},6710:(O,y,r)=>{var g;g=function(){"use strict";return/^--/}.call(y,r,y,O),g!==void 0&&(O.exports=g)},6410:(O,y,r)=>{var g,o;g=[r(529)],o=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(y,g),o!==void 0&&(O.exports=o)},7138:(O,y,r)=>{var g;g=function(){"use strict";return function(o,n,l){var d,p,a={};for(p in n)a[p]=o.style[p],o.style[p]=n[p];d=l.call(o);for(p in n)o.style[p]=a[p];return d}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},924:(O,y,r)=>{var g,o;g=[r(2760),r(9743),r(8418),r(602),r(5228)],o=function(n,l,d,p,a){"use strict";var c=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,m=/[A-Z]/g;function i(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:c.test(u)?JSON.parse(u):u}function h(u,f,S){var v;if(S===void 0&&u.nodeType===1)if(v="data-"+f.replace(m,"-$&").toLowerCase(),S=u.getAttribute(v),typeof S=="string"){try{S=i(S)}catch(b){}a.set(u,f,S)}else S=void 0;return S}return n.extend({hasData:function(u){return a.hasData(u)||p.hasData(u)},data:function(u,f,S){return a.access(u,f,S)},removeData:function(u,f){a.remove(u,f)},_data:function(u,f,S){return p.access(u,f,S)},_removeData:function(u,f){p.remove(u,f)}}),n.fn.extend({data:function(u,f){var S,v,b,T=this[0],C=T&&T.attributes;if(u===void 0){if(this.length&&(b=a.get(T),T.nodeType===1&&!p.get(T,"hasDataAttrs"))){for(S=C.length;S--;)C[S]&&(v=C[S].name,v.indexOf("data-")===0&&(v=d(v.slice(5)),h(T,v,b[v])));p.set(T,"hasDataAttrs",!0)}return b}return typeof u=="object"?this.each(function(){a.set(this,u)}):l(this,function(N){var P;if(T&&N===void 0)return P=a.get(T,u),P!==void 0||(P=h(T,u),P!==void 0)?P:void 0;this.each(function(){a.set(this,u,N)})},null,f,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){a.remove(this,u)})}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},464:(O,y,r)=>{var g,o;g=[r(2760),r(8418),r(1873),r(3406)],o=function(n,l,d,p){"use strict";function a(){this.expando=n.expando+a.uid++}return a.uid=1,a.prototype={cache:function(c){var m=c[this.expando];return m||(m={},p(c)&&(c.nodeType?c[this.expando]=m:Object.defineProperty(c,this.expando,{value:m,configurable:!0}))),m},set:function(c,m,i){var h,u=this.cache(c);if(typeof m=="string")u[l(m)]=i;else for(h in m)u[l(h)]=m[h];return u},get:function(c,m){return m===void 0?this.cache(c):c[this.expando]&&c[this.expando][l(m)]},access:function(c,m,i){return m===void 0||m&&typeof m=="string"&&i===void 0?this.get(c,m):(this.set(c,m,i),i!==void 0?i:m)},remove:function(c,m){var i,h=c[this.expando];if(h!==void 0){if(m!==void 0)for(Array.isArray(m)?m=m.map(l):(m=l(m),m=m in h?[m]:m.match(d)||[]),i=m.length;i--;)delete h[m[i]];(m===void 0||n.isEmptyObject(h))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var m=c[this.expando];return m!==void 0&&!n.isEmptyObject(m)}},a}.apply(y,g),o!==void 0&&(O.exports=o)},3406:(O,y,r)=>{var g;g=function(){"use strict";return function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},602:(O,y,r)=>{var g,o;g=[r(464)],o=function(n){"use strict";return new n}.apply(y,g),o!==void 0&&(O.exports=o)},5228:(O,y,r)=>{var g,o;g=[r(464)],o=function(n){"use strict";return new n}.apply(y,g),o!==void 0&&(O.exports=o)},3281:(O,y,r)=>{var g,o;g=[r(2760),r(4548),r(6101),r(5432)],o=function(n,l,d){"use strict";function p(m){return m}function a(m){throw m}function c(m,i,h,u){var f;try{m&&l(f=m.promise)?f.call(m).done(i).fail(h):m&&l(f=m.then)?f.call(m,i,h):i.apply(void 0,[m].slice(u))}catch(S){h.apply(void 0,[S])}}return n.extend({Deferred:function(m){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],h="pending",u={state:function(){return h},always:function(){return f.done(arguments).fail(arguments),this},catch:function(S){return u.then(null,S)},pipe:function(){var S=arguments;return n.Deferred(function(v){n.each(i,function(b,T){var C=l(S[T[4]])&&S[T[4]];f[T[1]](function(){var N=C&&C.apply(this,arguments);N&&l(N.promise)?N.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[T[0]+"With"](this,C?[N]:arguments)})}),S=null}).promise()},then:function(S,v,b){var T=0;function C(N,P,A,D){return function(){var M=this,L=arguments,_=function(){var U,j;if(!(N<T)){if(U=A.apply(M,L),U===P.promise())throw new TypeError("Thenable self-resolution");j=U&&(typeof U=="object"||typeof U=="function")&&U.then,l(j)?D?j.call(U,C(T,P,p,D),C(T,P,a,D)):(T++,j.call(U,C(T,P,p,D),C(T,P,a,D),C(T,P,p,P.notifyWith))):(A!==p&&(M=void 0,L=[U]),(D||P.resolveWith)(M,L))}},x=D?_:function(){try{_()}catch(U){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(U,x.stackTrace),N+1>=T&&(A!==a&&(M=void 0,L=[U]),P.rejectWith(M,L))}};N?x():(n.Deferred.getStackHook&&(x.stackTrace=n.Deferred.getStackHook()),window.setTimeout(x))}}return n.Deferred(function(N){i[0][3].add(C(0,N,l(b)?b:p,N.notifyWith)),i[1][3].add(C(0,N,l(S)?S:p)),i[2][3].add(C(0,N,l(v)?v:a))}).promise()},promise:function(S){return S!=null?n.extend(S,u):u}},f={};return n.each(i,function(S,v){var b=v[2],T=v[5];u[v[1]]=b.add,T&&b.add(function(){h=T},i[3-S][2].disable,i[3-S][3].disable,i[0][2].lock,i[0][3].lock),b.add(v[3].fire),f[v[0]]=function(){return f[v[0]+"With"](this===f?void 0:this,arguments),this},f[v[0]+"With"]=b.fireWith}),u.promise(f),m&&m.call(f,f),f},when:function(m){var i=arguments.length,h=i,u=Array(h),f=d.call(arguments),S=n.Deferred(),v=function(b){return function(T){u[b]=this,f[b]=arguments.length>1?d.call(arguments):T,--i||S.resolveWith(u,f)}};if(i<=1&&(c(m,S.done(v(h)).resolve,S.reject,!i),S.state()==="pending"||l(f[h]&&f[h].then)))return S.then();for(;h--;)c(f[h],v(h),S.reject);return S.promise()}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},3981:(O,y,r)=>{var g,o;g=[r(2760),r(3281)],o=function(n){"use strict";var l=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(d,p){window.console&&window.console.warn&&d&&l.test(d.name)&&window.console.warn("jQuery.Deferred exception: "+d.message,d.stack,p)}}.apply(y,g),o!==void 0&&(O.exports=o)},7448:(O,y,r)=>{var g,o;g=[r(2760),r(4778),r(8418),r(453),r(4548),r(2035),r(6101),r(4879),r(7374)],o=function(n,l,d,p,a,c,m){"use strict";var i=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;n.proxy=function(h,u){var f,S,v;if(typeof u=="string"&&(f=h[u],u=h,h=f),!!a(h))return S=m.call(arguments,2),v=function(){return h.apply(u||this,S.concat(m.call(arguments)))},v.guid=h.guid=h.guid||n.guid++,v},n.holdReady=function(h){h?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=l,n.isFunction=a,n.isWindow=c,n.camelCase=d,n.type=p,n.now=Date.now,n.isNumeric=function(h){var u=n.type(h);return(u==="number"||u==="string")&&!isNaN(h-parseFloat(h))},n.trim=function(h){return h==null?"":(h+"").replace(i,"$1")}}.apply(y,g),o!==void 0&&(O.exports=o)},4879:(O,y,r)=>{var g,o;g=[r(2760),r(8442),r(6053)],o=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,d){n.fn[d]=function(p){return this.on(d,p)}})}.apply(y,g),o!==void 0&&(O.exports=o)},7374:(O,y,r)=>{var g,o;g=[r(2760),r(6053),r(2387)],o=function(n){"use strict";n.fn.extend({bind:function(l,d,p){return this.on(l,null,d,p)},unbind:function(l,d){return this.off(l,null,d)},delegate:function(l,d,p,a){return this.on(d,l,p,a)},undelegate:function(l,d,p){return arguments.length===1?this.off(l,"**"):this.off(d,l||"**",p)},hover:function(l,d){return this.mouseenter(l).mouseleave(d||l)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,d){n.fn[d]=function(p,a){return arguments.length>0?this.on(d,null,p,a):this.trigger(d)}})}.apply(y,g),o!==void 0&&(O.exports=o)},8654:(O,y,r)=>{var g,o;g=[r(2760),r(9743),r(2035),r(1852)],o=function(n,l,d){"use strict";return n.each({Height:"height",Width:"width"},function(p,a){n.each({padding:"inner"+p,content:a,"":"outer"+p},function(c,m){n.fn[m]=function(i,h){var u=arguments.length&&(c||typeof i!="boolean"),f=c||(i===!0||h===!0?"margin":"border");return l(this,function(S,v,b){var T;return d(S)?m.indexOf("outer")===0?S["inner"+p]:S.document.documentElement["client"+p]:S.nodeType===9?(T=S.documentElement,Math.max(S.body["scroll"+p],T["scroll"+p],S.body["offset"+p],T["offset"+p],T["client"+p])):b===void 0?n.css(S,v,f):n.style(S,v,b,f)},a,u?i:void 0,u)}})}),n}.apply(y,g),o!==void 0&&(O.exports=o)},4386:(O,y,r)=>{var g,o;g=[r(2760),r(8418),r(9775),r(4548),r(9976),r(1873),r(6015),r(1601),r(9863),r(602),r(7499),r(7972),r(2903),r(3281),r(889),r(9803),r(1852),r(7851)],o=function(n,l,d,p,a,c,m,i,h,u,f){"use strict";var S,v,b=/^(?:toggle|show|hide)$/,T=/queueHooks$/;function C(){v&&(d.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,n.fx.interval),n.fx.tick())}function N(){return window.setTimeout(function(){S=void 0}),S=Date.now()}function P(_,x){var U,j=0,W={height:_};for(x=x?1:0;j<4;j+=2-x)U=m[j],W["margin"+U]=W["padding"+U]=_;return x&&(W.opacity=W.width=_),W}function A(_,x,U){for(var j,W=(L.tweeners[x]||[]).concat(L.tweeners["*"]),B=0,H=W.length;B<H;B++)if(j=W[B].call(U,x,_))return j}function D(_,x,U){var j,W,B,H,w,q,V,ne,ie="width"in x||"height"in x,le=this,te={},ge=_.style,be=_.nodeType&&i(_),Ie=u.get(_,"fxshow");U.queue||(H=n._queueHooks(_,"fx"),H.unqueued==null&&(H.unqueued=0,w=H.empty.fire,H.empty.fire=function(){H.unqueued||w()}),H.unqueued++,le.always(function(){le.always(function(){H.unqueued--,n.queue(_,"fx").length||H.empty.fire()})}));for(j in x)if(W=x[j],b.test(W)){if(delete x[j],B=B||W==="toggle",W===(be?"hide":"show"))if(W==="show"&&Ie&&Ie[j]!==void 0)be=!0;else continue;te[j]=Ie&&Ie[j]||n.style(_,j)}if(q=!n.isEmptyObject(x),!(!q&&n.isEmptyObject(te))){ie&&_.nodeType===1&&(U.overflow=[ge.overflow,ge.overflowX,ge.overflowY],V=Ie&&Ie.display,V==null&&(V=u.get(_,"display")),ne=n.css(_,"display"),ne==="none"&&(V?ne=V:(f([_],!0),V=_.style.display||V,ne=n.css(_,"display"),f([_]))),(ne==="inline"||ne==="inline-block"&&V!=null)&&n.css(_,"float")==="none"&&(q||(le.done(function(){ge.display=V}),V==null&&(ne=ge.display,V=ne==="none"?"":ne)),ge.display="inline-block")),U.overflow&&(ge.overflow="hidden",le.always(function(){ge.overflow=U.overflow[0],ge.overflowX=U.overflow[1],ge.overflowY=U.overflow[2]})),q=!1;for(j in te)q||(Ie?"hidden"in Ie&&(be=Ie.hidden):Ie=u.access(_,"fxshow",{display:V}),B&&(Ie.hidden=!be),be&&f([_],!0),le.done(function(){be||f([_]),u.remove(_,"fxshow");for(j in te)n.style(_,j,te[j])})),q=A(be?Ie[j]:0,j,le),j in Ie||(Ie[j]=q.start,be&&(q.end=q.start,q.start=0))}}function M(_,x){var U,j,W,B,H;for(U in _)if(j=l(U),W=x[j],B=_[U],Array.isArray(B)&&(W=B[1],B=_[U]=B[0]),U!==j&&(_[j]=B,delete _[U]),H=n.cssHooks[j],H&&"expand"in H){B=H.expand(B),delete _[j];for(U in B)U in _||(_[U]=B[U],x[U]=W)}else x[j]=W}function L(_,x,U){var j,W,B=0,H=L.prefilters.length,w=n.Deferred().always(function(){delete q.elem}),q=function(){if(W)return!1;for(var ie=S||N(),le=Math.max(0,V.startTime+V.duration-ie),te=le/V.duration||0,ge=1-te,be=0,Ie=V.tweens.length;be<Ie;be++)V.tweens[be].run(ge);return w.notifyWith(_,[V,ge,le]),ge<1&&Ie?le:(Ie||w.notifyWith(_,[V,1,0]),w.resolveWith(_,[V]),!1)},V=w.promise({elem:_,props:n.extend({},x),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},U),originalProperties:x,originalOptions:U,startTime:S||N(),duration:U.duration,tweens:[],createTween:function(ie,le){var te=n.Tween(_,V.opts,ie,le,V.opts.specialEasing[ie]||V.opts.easing);return V.tweens.push(te),te},stop:function(ie){var le=0,te=ie?V.tweens.length:0;if(W)return this;for(W=!0;le<te;le++)V.tweens[le].run(1);return ie?(w.notifyWith(_,[V,1,0]),w.resolveWith(_,[V,ie])):w.rejectWith(_,[V,ie]),this}}),ne=V.props;for(M(ne,V.opts.specialEasing);B<H;B++)if(j=L.prefilters[B].call(V,_,ne,V.opts),j)return p(j.stop)&&(n._queueHooks(V.elem,V.opts.queue).stop=j.stop.bind(j)),j;return n.map(ne,A,V),p(V.opts.start)&&V.opts.start.call(_,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),n.fx.timer(n.extend(q,{elem:_,anim:V,queue:V.opts.queue})),V}return n.Animation=n.extend(L,{tweeners:{"*":[function(_,x){var U=this.createTween(_,x);return h(U.elem,_,a.exec(x),U),U}]},tweener:function(_,x){p(_)?(x=_,_=["*"]):_=_.match(c);for(var U,j=0,W=_.length;j<W;j++)U=_[j],L.tweeners[U]=L.tweeners[U]||[],L.tweeners[U].unshift(x)},prefilters:[D],prefilter:function(_,x){x?L.prefilters.unshift(_):L.prefilters.push(_)}}),n.speed=function(_,x,U){var j=_&&typeof _=="object"?n.extend({},_):{complete:U||!U&&x||p(_)&&_,duration:_,easing:U&&x||x&&!p(x)&&x};return n.fx.off?j.duration=0:typeof j.duration!="number"&&(j.duration in n.fx.speeds?j.duration=n.fx.speeds[j.duration]:j.duration=n.fx.speeds._default),(j.queue==null||j.queue===!0)&&(j.queue="fx"),j.old=j.complete,j.complete=function(){p(j.old)&&j.old.call(this),j.queue&&n.dequeue(this,j.queue)},j},n.fn.extend({fadeTo:function(_,x,U,j){return this.filter(i).css("opacity",0).show().end().animate({opacity:x},_,U,j)},animate:function(_,x,U,j){var W=n.isEmptyObject(_),B=n.speed(x,U,j),H=function(){var w=L(this,n.extend({},_),B);(W||u.get(this,"finish"))&&w.stop(!0)};return H.finish=H,W||B.queue===!1?this.each(H):this.queue(B.queue,H)},stop:function(_,x,U){var j=function(W){var B=W.stop;delete W.stop,B(U)};return typeof _!="string"&&(U=x,x=_,_=void 0),x&&this.queue(_||"fx",[]),this.each(function(){var W=!0,B=_!=null&&_+"queueHooks",H=n.timers,w=u.get(this);if(B)w[B]&&w[B].stop&&j(w[B]);else for(B in w)w[B]&&w[B].stop&&T.test(B)&&j(w[B]);for(B=H.length;B--;)H[B].elem===this&&(_==null||H[B].queue===_)&&(H[B].anim.stop(U),W=!1,H.splice(B,1));(W||!U)&&n.dequeue(this,_)})},finish:function(_){return _!==!1&&(_=_||"fx"),this.each(function(){var x,U=u.get(this),j=U[_+"queue"],W=U[_+"queueHooks"],B=n.timers,H=j?j.length:0;for(U.finish=!0,n.queue(this,_,[]),W&&W.stop&&W.stop.call(this,!0),x=B.length;x--;)B[x].elem===this&&B[x].queue===_&&(B[x].anim.stop(!0),B.splice(x,1));for(x=0;x<H;x++)j[x]&&j[x].finish&&j[x].finish.call(this);delete U.finish})}}),n.each(["toggle","show","hide"],function(_,x){var U=n.fn[x];n.fn[x]=function(j,W,B){return j==null||typeof j=="boolean"?U.apply(this,arguments):this.animate(P(x,!0),j,W,B)}}),n.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(_,x){n.fn[_]=function(U,j,W){return this.animate(x,U,j,W)}}),n.timers=[],n.fx.tick=function(){var _,x=0,U=n.timers;for(S=Date.now();x<U.length;x++)_=U[x],!_()&&U[x]===_&&U.splice(x--,1);U.length||n.fx.stop(),S=void 0},n.fx.timer=function(_){n.timers.push(_),n.fx.start()},n.fx.interval=13,n.fx.start=function(){v||(v=!0,C())},n.fx.stop=function(){v=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(y,g),o!==void 0&&(O.exports=o)},7851:(O,y,r)=>{var g,o;g=[r(2760),r(3731),r(1852)],o=function(n,l){"use strict";function d(p,a,c,m,i){return new d.prototype.init(p,a,c,m,i)}n.Tween=d,d.prototype={constructor:d,init:function(p,a,c,m,i,h){this.elem=p,this.prop=c,this.easing=i||n.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=m,this.unit=h||(n.cssNumber[c]?"":"px")},cur:function(){var p=d.propHooks[this.prop];return p&&p.get?p.get(this):d.propHooks._default.get(this)},run:function(p){var a,c=d.propHooks[this.prop];return this.options.duration?this.pos=a=n.easing[this.easing](p,this.options.duration*p,0,1,this.options.duration):this.pos=a=p,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):d.propHooks._default.set(this),this}},d.prototype.init.prototype=d.prototype,d.propHooks={_default:{get:function(p){var a;return p.elem.nodeType!==1||p.elem[p.prop]!=null&&p.elem.style[p.prop]==null?p.elem[p.prop]:(a=n.css(p.elem,p.prop,""),!a||a==="auto"?0:a)},set:function(p){n.fx.step[p.prop]?n.fx.step[p.prop](p):p.elem.nodeType===1&&(n.cssHooks[p.prop]||p.elem.style[l(p.prop)]!=null)?n.style(p.elem,p.prop,p.now+p.unit):p.elem[p.prop]=p.now}}},d.propHooks.scrollTop=d.propHooks.scrollLeft={set:function(p){p.elem.nodeType&&p.elem.parentNode&&(p.elem[p.prop]=p.now)}},n.easing={linear:function(p){return p},swing:function(p){return .5-Math.cos(p*Math.PI)/2},_default:"swing"},n.fx=d.prototype.init,n.fx.step={}}.apply(y,g),o!==void 0&&(O.exports=o)},84:(O,y,r)=>{var g,o;g=[r(2760),r(5395),r(4386)],o=function(n){"use strict";n.expr.pseudos.animated=function(l){return n.grep(n.timers,function(d){return l===d.elem}).length}}.apply(y,g),o!==void 0&&(O.exports=o)},6053:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(5543),r(4548),r(1873),r(4860),r(6101),r(3406),r(602),r(4778),r(7972),r(5395)],o=function(n,l,d,p,a,c,m,i,h,u){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function S(){return!0}function v(){return!1}function b(P,A){return P===T()==(A==="focus")}function T(){try{return l.activeElement}catch(P){}}function C(P,A,D,M,L,_){var x,U;if(typeof A=="object"){typeof D!="string"&&(M=M||D,D=void 0);for(U in A)C(P,U,D,M,A[U],_);return P}if(M==null&&L==null?(L=D,M=D=void 0):L==null&&(typeof D=="string"?(L=M,M=void 0):(L=M,M=D,D=void 0)),L===!1)L=v;else if(!L)return P;return _===1&&(x=L,L=function(j){return n().off(j),x.apply(this,arguments)},L.guid=x.guid||(x.guid=n.guid++)),P.each(function(){n.event.add(this,A,L,M,D)})}n.event={global:{},add:function(P,A,D,M,L){var _,x,U,j,W,B,H,w,q,V,ne,ie=h.get(P);if(!!i(P))for(D.handler&&(_=D,D=_.handler,L=_.selector),L&&n.find.matchesSelector(d,L),D.guid||(D.guid=n.guid++),(j=ie.events)||(j=ie.events=Object.create(null)),(x=ie.handle)||(x=ie.handle=function(le){return typeof n!="undefined"&&n.event.triggered!==le.type?n.event.dispatch.apply(P,arguments):void 0}),A=(A||"").match(a)||[""],W=A.length;W--;)U=f.exec(A[W])||[],q=ne=U[1],V=(U[2]||"").split(".").sort(),q&&(H=n.event.special[q]||{},q=(L?H.delegateType:H.bindType)||q,H=n.event.special[q]||{},B=n.extend({type:q,origType:ne,data:M,handler:D,guid:D.guid,selector:L,needsContext:L&&n.expr.match.needsContext.test(L),namespace:V.join(".")},_),(w=j[q])||(w=j[q]=[],w.delegateCount=0,(!H.setup||H.setup.call(P,M,V,x)===!1)&&P.addEventListener&&P.addEventListener(q,x)),H.add&&(H.add.call(P,B),B.handler.guid||(B.handler.guid=D.guid)),L?w.splice(w.delegateCount++,0,B):w.push(B),n.event.global[q]=!0)},remove:function(P,A,D,M,L){var _,x,U,j,W,B,H,w,q,V,ne,ie=h.hasData(P)&&h.get(P);if(!(!ie||!(j=ie.events))){for(A=(A||"").match(a)||[""],W=A.length;W--;){if(U=f.exec(A[W])||[],q=ne=U[1],V=(U[2]||"").split(".").sort(),!q){for(q in j)n.event.remove(P,q+A[W],D,M,!0);continue}for(H=n.event.special[q]||{},q=(M?H.delegateType:H.bindType)||q,w=j[q]||[],U=U[2]&&new RegExp("(^|\\.)"+V.join("\\.(?:.*\\.|)")+"(\\.|$)"),x=_=w.length;_--;)B=w[_],(L||ne===B.origType)&&(!D||D.guid===B.guid)&&(!U||U.test(B.namespace))&&(!M||M===B.selector||M==="**"&&B.selector)&&(w.splice(_,1),B.selector&&w.delegateCount--,H.remove&&H.remove.call(P,B));x&&!w.length&&((!H.teardown||H.teardown.call(P,V,ie.handle)===!1)&&n.removeEvent(P,q,ie.handle),delete j[q])}n.isEmptyObject(j)&&h.remove(P,"handle events")}},dispatch:function(P){var A,D,M,L,_,x,U=new Array(arguments.length),j=n.event.fix(P),W=(h.get(this,"events")||Object.create(null))[j.type]||[],B=n.event.special[j.type]||{};for(U[0]=j,A=1;A<arguments.length;A++)U[A]=arguments[A];if(j.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,j)===!1)){for(x=n.event.handlers.call(this,j,W),A=0;(L=x[A++])&&!j.isPropagationStopped();)for(j.currentTarget=L.elem,D=0;(_=L.handlers[D++])&&!j.isImmediatePropagationStopped();)(!j.rnamespace||_.namespace===!1||j.rnamespace.test(_.namespace))&&(j.handleObj=_,j.data=_.data,M=((n.event.special[_.origType]||{}).handle||_.handler).apply(L.elem,U),M!==void 0&&(j.result=M)===!1&&(j.preventDefault(),j.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,j),j.result}},handlers:function(P,A){var D,M,L,_,x,U=[],j=A.delegateCount,W=P.target;if(j&&W.nodeType&&!(P.type==="click"&&P.button>=1)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&!(P.type==="click"&&W.disabled===!0)){for(_=[],x={},D=0;D<j;D++)M=A[D],L=M.selector+" ",x[L]===void 0&&(x[L]=M.needsContext?n(L,this).index(W)>-1:n.find(L,this,null,[W]).length),x[L]&&_.push(M);_.length&&U.push({elem:W,handlers:_})}}return W=this,j<A.length&&U.push({elem:W,handlers:A.slice(j)}),U},addProp:function(P,A){Object.defineProperty(n.Event.prototype,P,{enumerable:!0,configurable:!0,get:p(A)?function(){if(this.originalEvent)return A(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[P]},set:function(D){Object.defineProperty(this,P,{enumerable:!0,configurable:!0,writable:!0,value:D})}})},fix:function(P){return P[n.expando]?P:new n.Event(P)},special:{load:{noBubble:!0},click:{setup:function(P){var A=this||P;return c.test(A.type)&&A.click&&u(A,"input")&&N(A,"click",S),!1},trigger:function(P){var A=this||P;return c.test(A.type)&&A.click&&u(A,"input")&&N(A,"click"),!0},_default:function(P){var A=P.target;return c.test(A.type)&&A.click&&u(A,"input")&&h.get(A,"click")||u(A,"a")}},beforeunload:{postDispatch:function(P){P.result!==void 0&&P.originalEvent&&(P.originalEvent.returnValue=P.result)}}}};function N(P,A,D){if(!D){h.get(P,A)===void 0&&n.event.add(P,A,S);return}h.set(P,A,!1),n.event.add(P,A,{namespace:!1,handler:function(M){var L,_,x=h.get(this,A);if(M.isTrigger&1&&this[A]){if(x.length)(n.event.special[A]||{}).delegateType&&M.stopPropagation();else if(x=m.call(arguments),h.set(this,A,x),L=D(this,A),this[A](),_=h.get(this,A),x!==_||L?h.set(this,A,!1):_={},x!==_)return M.stopImmediatePropagation(),M.preventDefault(),_&&_.value}else x.length&&(h.set(this,A,{value:n.event.trigger(n.extend(x[0],n.Event.prototype),x.slice(1),this)}),M.stopImmediatePropagation())}})}return n.removeEvent=function(P,A,D){P.removeEventListener&&P.removeEventListener(A,D)},n.Event=function(P,A){if(!(this instanceof n.Event))return new n.Event(P,A);P&&P.type?(this.originalEvent=P,this.type=P.type,this.isDefaultPrevented=P.defaultPrevented||P.defaultPrevented===void 0&&P.returnValue===!1?S:v,this.target=P.target&&P.target.nodeType===3?P.target.parentNode:P.target,this.currentTarget=P.currentTarget,this.relatedTarget=P.relatedTarget):this.type=P,A&&n.extend(this,A),this.timeStamp=P&&P.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v,isSimulated:!1,preventDefault:function(){var P=this.originalEvent;this.isDefaultPrevented=S,P&&!this.isSimulated&&P.preventDefault()},stopPropagation:function(){var P=this.originalEvent;this.isPropagationStopped=S,P&&!this.isSimulated&&P.stopPropagation()},stopImmediatePropagation:function(){var P=this.originalEvent;this.isImmediatePropagationStopped=S,P&&!this.isSimulated&&P.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(P,A){n.event.special[P]={setup:function(){return N(this,P,b),!1},trigger:function(){return N(this,P),!0},_default:function(D){return h.get(D.target,P)},delegateType:A}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(P,A){n.event.special[P]={delegateType:A,bindType:A,handle:function(D){var M,L=this,_=D.relatedTarget,x=D.handleObj;return(!_||_!==L&&!n.contains(L,_))&&(D.type=x.origType,M=x.handler.apply(this,arguments),D.type=A),M}}}),n.fn.extend({on:function(P,A,D,M){return C(this,P,A,D,M)},one:function(P,A,D,M){return C(this,P,A,D,M,1)},off:function(P,A,D){var M,L;if(P&&P.preventDefault&&P.handleObj)return M=P.handleObj,n(P.delegateTarget).off(M.namespace?M.origType+"."+M.namespace:M.origType,M.selector,M.handler),this;if(typeof P=="object"){for(L in P)this.off(L,A,P[L]);return this}return(A===!1||typeof A=="function")&&(D=A,A=void 0),D===!1&&(D=v),this.each(function(){n.event.remove(this,P,D,A)})}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},2030:(O,y,r)=>{var g,o;g=[r(2760),r(602),r(7180),r(6053),r(2387)],o=function(n,l,d){"use strict";return d.focusin||n.each({focus:"focusin",blur:"focusout"},function(p,a){var c=function(m){n.event.simulate(a,m.target,n.event.fix(m))};n.event.special[a]={setup:function(){var m=this.ownerDocument||this.document||this,i=l.access(m,a);i||m.addEventListener(p,c,!0),l.access(m,a,(i||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,i=l.access(m,a)-1;i?l.access(m,a,i):(m.removeEventListener(p,c,!0),l.remove(m,a))}}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},7180:(O,y,r)=>{var g,o;g=[r(240)],o=function(n){"use strict";return n.focusin="onfocusin"in window,n}.apply(y,g),o!==void 0&&(O.exports=o)},2387:(O,y,r)=>{var g,o;g=[r(2760),r(9775),r(602),r(3406),r(6805),r(4548),r(2035),r(6053)],o=function(n,l,d,p,a,c,m){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,h=function(u){u.stopPropagation()};return n.extend(n.event,{trigger:function(u,f,S,v){var b,T,C,N,P,A,D,M,L=[S||l],_=a.call(u,"type")?u.type:u,x=a.call(u,"namespace")?u.namespace.split("."):[];if(T=M=C=S=S||l,!(S.nodeType===3||S.nodeType===8)&&!i.test(_+n.event.triggered)&&(_.indexOf(".")>-1&&(x=_.split("."),_=x.shift(),x.sort()),P=_.indexOf(":")<0&&"on"+_,u=u[n.expando]?u:new n.Event(_,typeof u=="object"&&u),u.isTrigger=v?2:3,u.namespace=x.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=S),f=f==null?[u]:n.makeArray(f,[u]),D=n.event.special[_]||{},!(!v&&D.trigger&&D.trigger.apply(S,f)===!1))){if(!v&&!D.noBubble&&!m(S)){for(N=D.delegateType||_,i.test(N+_)||(T=T.parentNode);T;T=T.parentNode)L.push(T),C=T;C===(S.ownerDocument||l)&&L.push(C.defaultView||C.parentWindow||window)}for(b=0;(T=L[b++])&&!u.isPropagationStopped();)M=T,u.type=b>1?N:D.bindType||_,A=(d.get(T,"events")||Object.create(null))[u.type]&&d.get(T,"handle"),A&&A.apply(T,f),A=P&&T[P],A&&A.apply&&p(T)&&(u.result=A.apply(T,f),u.result===!1&&u.preventDefault());return u.type=_,!v&&!u.isDefaultPrevented()&&(!D._default||D._default.apply(L.pop(),f)===!1)&&p(S)&&P&&c(S[_])&&!m(S)&&(C=S[P],C&&(S[P]=null),n.event.triggered=_,u.isPropagationStopped()&&M.addEventListener(_,h),S[_](),u.isPropagationStopped()&&M.removeEventListener(_,h),n.event.triggered=void 0,C&&(S[P]=C)),u.result}},simulate:function(u,f,S){var v=n.extend(new n.Event,S,{type:u,isSimulated:!0});n.event.trigger(v,null,f)}}),n.fn.extend({trigger:function(u,f){return this.each(function(){n.event.trigger(u,f,this)})},triggerHandler:function(u,f){var S=this[0];if(S)return n.event.trigger(u,f,S,!0)}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},2698:(O,y,r)=>{var g,o,g,o;g=[r(2760)],o=function(n){"use strict";g=[],o=function(){return n}.apply(y,g),o!==void 0&&(O.exports=o)}.apply(y,g),o!==void 0&&(O.exports=o)},7182:(O,y,r)=>{var g,o;g=[r(2760)],o=function(n){"use strict";var l=window.jQuery,d=window.$;n.noConflict=function(p){return window.$===n&&(window.$=d),p&&window.jQuery===n&&(window.jQuery=l),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(y,g),o!==void 0&&(O.exports=o)},7323:(O,y,r)=>{var g,o;g=[r(2760),r(5395),r(889),r(5432),r(3281),r(3981),r(1437),r(924),r(2903),r(438),r(904),r(6053),r(2030),r(9803),r(7893),r(3155),r(1852),r(5117),r(530),r(8442),r(439),r(7058),r(6793),r(3412),r(1143),r(6490),r(4386),r(84),r(9184),r(8654),r(7448),r(2698),r(7182)],o=function(n){"use strict";return n}.apply(y,g),o!==void 0&&(O.exports=o)},9803:(O,y,r)=>{var g,o;g=[r(2760),r(1647),r(2892),r(4548),r(1391),r(4860),r(9743),r(41),r(7044),r(5824),r(6815),r(5839),r(2857),r(186),r(602),r(5228),r(3406),r(5803),r(4778),r(7972),r(889),r(5395),r(6053)],o=function(n,l,d,p,a,c,m,i,h,u,f,S,v,b,T,C,N,P,A){"use strict";var D=/<script|<style|<link/i,M=/checked\s*(?:[^=]|=\s*.checked.)/i,L=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function _(w,q){return A(w,"table")&&A(q.nodeType!==11?q:q.firstChild,"tr")&&n(w).children("tbody")[0]||w}function x(w){return w.type=(w.getAttribute("type")!==null)+"/"+w.type,w}function U(w){return(w.type||"").slice(0,5)==="true/"?w.type=w.type.slice(5):w.removeAttribute("type"),w}function j(w,q){var V,ne,ie,le,te,ge,be;if(q.nodeType===1){if(T.hasData(w)&&(le=T.get(w),be=le.events,be)){T.remove(q,"handle events");for(ie in be)for(V=0,ne=be[ie].length;V<ne;V++)n.event.add(q,ie,be[ie][V])}C.hasData(w)&&(te=C.access(w),ge=n.extend({},te),C.set(q,ge))}}function W(w,q){var V=q.nodeName.toLowerCase();V==="input"&&c.test(w.type)?q.checked=w.checked:(V==="input"||V==="textarea")&&(q.defaultValue=w.defaultValue)}function B(w,q,V,ne){q=d(q);var ie,le,te,ge,be,Ie,it=0,mt=w.length,ut=mt-1,ht=q[0],At=p(ht);if(At||mt>1&&typeof ht=="string"&&!b.checkClone&&M.test(ht))return w.each(function(Re){var Et=w.eq(Re);At&&(q[0]=ht.call(this,Re,Et.html())),B(Et,q,V,ne)});if(mt&&(ie=v(q,w[0].ownerDocument,!1,w,ne),le=ie.firstChild,ie.childNodes.length===1&&(ie=le),le||ne)){for(te=n.map(f(ie,"script"),x),ge=te.length;it<mt;it++)be=ie,it!==ut&&(be=n.clone(be,!0,!0),ge&&n.merge(te,f(be,"script"))),V.call(w[it],be,it);if(ge)for(Ie=te[te.length-1].ownerDocument,n.map(te,U),it=0;it<ge;it++)be=te[it],h.test(be.type||"")&&!T.access(be,"globalEval")&&n.contains(Ie,be)&&(be.src&&(be.type||"").toLowerCase()!=="module"?n._evalUrl&&!be.noModule&&n._evalUrl(be.src,{nonce:be.nonce||be.getAttribute("nonce")},Ie):P(be.textContent.replace(L,""),be,Ie))}return w}function H(w,q,V){for(var ne,ie=q?n.filter(q,w):w,le=0;(ne=ie[le])!=null;le++)!V&&ne.nodeType===1&&n.cleanData(f(ne)),ne.parentNode&&(V&&l(ne)&&S(f(ne,"script")),ne.parentNode.removeChild(ne));return w}return n.extend({htmlPrefilter:function(w){return w},clone:function(w,q,V){var ne,ie,le,te,ge=w.cloneNode(!0),be=l(w);if(!b.noCloneChecked&&(w.nodeType===1||w.nodeType===11)&&!n.isXMLDoc(w))for(te=f(ge),le=f(w),ne=0,ie=le.length;ne<ie;ne++)W(le[ne],te[ne]);if(q)if(V)for(le=le||f(w),te=te||f(ge),ne=0,ie=le.length;ne<ie;ne++)j(le[ne],te[ne]);else j(w,ge);return te=f(ge,"script"),te.length>0&&S(te,!be&&f(w,"script")),ge},cleanData:function(w){for(var q,V,ne,ie=n.event.special,le=0;(V=w[le])!==void 0;le++)if(N(V)){if(q=V[T.expando]){if(q.events)for(ne in q.events)ie[ne]?n.event.remove(V,ne):n.removeEvent(V,ne,q.handle);V[T.expando]=void 0}V[C.expando]&&(V[C.expando]=void 0)}}}),n.fn.extend({detach:function(w){return H(this,w,!0)},remove:function(w){return H(this,w)},text:function(w){return m(this,function(q){return q===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=q)})},null,w,arguments.length)},append:function(){return B(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=_(this,w);q.appendChild(w)}})},prepend:function(){return B(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=_(this,w);q.insertBefore(w,q.firstChild)}})},before:function(){return B(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this)})},after:function(){return B(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this.nextSibling)})},empty:function(){for(var w,q=0;(w=this[q])!=null;q++)w.nodeType===1&&(n.cleanData(f(w,!1)),w.textContent="");return this},clone:function(w,q){return w=w==null?!1:w,q=q==null?w:q,this.map(function(){return n.clone(this,w,q)})},html:function(w){return m(this,function(q){var V=this[0]||{},ne=0,ie=this.length;if(q===void 0&&V.nodeType===1)return V.innerHTML;if(typeof q=="string"&&!D.test(q)&&!u[(i.exec(q)||["",""])[1].toLowerCase()]){q=n.htmlPrefilter(q);try{for(;ne<ie;ne++)V=this[ne]||{},V.nodeType===1&&(n.cleanData(f(V,!1)),V.innerHTML=q);V=0}catch(le){}}V&&this.empty().append(q)},null,w,arguments.length)},replaceWith:function(){var w=[];return B(this,arguments,function(q){var V=this.parentNode;n.inArray(this,w)<0&&(n.cleanData(f(this)),V&&V.replaceChild(q,this))},w)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(w,q){n.fn[w]=function(V){for(var ne,ie=[],le=n(V),te=le.length-1,ge=0;ge<=te;ge++)ne=ge===te?this:this.clone(!0),n(le[ge])[q](ne),a.apply(ie,ne.get());return this.pushStack(ie)}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},7893:(O,y,r)=>{var g,o;g=[r(8442)],o=function(n){"use strict";return n._evalUrl=function(l,d,p){return n.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(a){n.globalEval(a,d,p)}})},n._evalUrl}.apply(y,g),o!==void 0&&(O.exports=o)},2857:(O,y,r)=>{var g,o;g=[r(2760),r(453),r(1647),r(41),r(7044),r(5824),r(6815),r(5839)],o=function(n,l,d,p,a,c,m,i){"use strict";var h=/<|&#?\w+;/;function u(f,S,v,b,T){for(var C,N,P,A,D,M,L=S.createDocumentFragment(),_=[],x=0,U=f.length;x<U;x++)if(C=f[x],C||C===0)if(l(C)==="object")n.merge(_,C.nodeType?[C]:C);else if(!h.test(C))_.push(S.createTextNode(C));else{for(N=N||L.appendChild(S.createElement("div")),P=(p.exec(C)||["",""])[1].toLowerCase(),A=c[P]||c._default,N.innerHTML=A[1]+n.htmlPrefilter(C)+A[2],M=A[0];M--;)N=N.lastChild;n.merge(_,N.childNodes),N=L.firstChild,N.textContent=""}for(L.textContent="",x=0;C=_[x++];){if(b&&n.inArray(C,b)>-1){T&&T.push(C);continue}if(D=d(C),N=m(L.appendChild(C),"script"),D&&i(N),v)for(M=0;C=N[M++];)a.test(C.type||"")&&v.push(C)}return L}return u}.apply(y,g),o!==void 0&&(O.exports=o)},6815:(O,y,r)=>{var g,o;g=[r(2760),r(4778)],o=function(n,l){"use strict";function d(p,a){var c;return typeof p.getElementsByTagName!="undefined"?c=p.getElementsByTagName(a||"*"):typeof p.querySelectorAll!="undefined"?c=p.querySelectorAll(a||"*"):c=[],a===void 0||a&&l(p,a)?n.merge([p],c):c}return d}.apply(y,g),o!==void 0&&(O.exports=o)},5839:(O,y,r)=>{var g,o;g=[r(602)],o=function(n){"use strict";function l(d,p){for(var a=0,c=d.length;a<c;a++)n.set(d[a],"globalEval",!p||n.get(p[a],"globalEval"))}return l}.apply(y,g),o!==void 0&&(O.exports=o)},186:(O,y,r)=>{var g,o;g=[r(9775),r(240)],o=function(n,l){"use strict";return function(){var d=n.createDocumentFragment(),p=d.appendChild(n.createElement("div")),a=n.createElement("input");a.setAttribute("type","radio"),a.setAttribute("checked","checked"),a.setAttribute("name","t"),p.appendChild(a),l.checkClone=p.cloneNode(!0).cloneNode(!0).lastChild.checked,p.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!p.cloneNode(!0).lastChild.defaultValue,p.innerHTML="<option></option>",l.option=!!p.lastChild}(),l}.apply(y,g),o!==void 0&&(O.exports=o)},7044:(O,y,r)=>{var g;g=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(y,r,y,O),g!==void 0&&(O.exports=g)},41:(O,y,r)=>{var g;g=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(y,r,y,O),g!==void 0&&(O.exports=g)},5824:(O,y,r)=>{var g,o;g=[r(186)],o=function(n){"use strict";var l={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return l.tbody=l.tfoot=l.colgroup=l.caption=l.thead,l.th=l.td,n.option||(l.optgroup=l.option=[1,"<select multiple='multiple'>","</select>"]),l}.apply(y,g),o!==void 0&&(O.exports=o)},9184:(O,y,r)=>{var g,o;g=[r(2760),r(9743),r(5543),r(4548),r(6410),r(188),r(7971),r(6571),r(2035),r(7972),r(1852),r(5395)],o=function(n,l,d,p,a,c,m,i,h){"use strict";return n.offset={setOffset:function(u,f,S){var v,b,T,C,N,P,A,D=n.css(u,"position"),M=n(u),L={};D==="static"&&(u.style.position="relative"),N=M.offset(),T=n.css(u,"top"),P=n.css(u,"left"),A=(D==="absolute"||D==="fixed")&&(T+P).indexOf("auto")>-1,A?(v=M.position(),C=v.top,b=v.left):(C=parseFloat(T)||0,b=parseFloat(P)||0),p(f)&&(f=f.call(u,S,n.extend({},N))),f.top!=null&&(L.top=f.top-N.top+C),f.left!=null&&(L.left=f.left-N.left+b),"using"in f?f.using.call(u,L):M.css(L)}},n.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(b){n.offset.setOffset(this,u,b)});var f,S,v=this[0];if(!!v)return v.getClientRects().length?(f=v.getBoundingClientRect(),S=v.ownerDocument.defaultView,{top:f.top+S.pageYOffset,left:f.left+S.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var u,f,S,v=this[0],b={top:0,left:0};if(n.css(v,"position")==="fixed")f=v.getBoundingClientRect();else{for(f=this.offset(),S=v.ownerDocument,u=v.offsetParent||S.documentElement;u&&(u===S.body||u===S.documentElement)&&n.css(u,"position")==="static";)u=u.parentNode;u&&u!==v&&u.nodeType===1&&(b=n(u).offset(),b.top+=n.css(u,"borderTopWidth",!0),b.left+=n.css(u,"borderLeftWidth",!0))}return{top:f.top-b.top-n.css(v,"marginTop",!0),left:f.left-b.left-n.css(v,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&n.css(u,"position")==="static";)u=u.offsetParent;return u||d})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,f){var S=f==="pageYOffset";n.fn[u]=function(v){return l(this,function(b,T,C){var N;if(h(b)?N=b:b.nodeType===9&&(N=b.defaultView),C===void 0)return N?N[f]:b[T];N?N.scrollTo(S?N.pageXOffset:C,S?C:N.pageYOffset):b[T]=C},u,v,arguments.length)}}),n.each(["top","left"],function(u,f){n.cssHooks[f]=m(i.pixelPosition,function(S,v){if(v)return v=c(S,f),a.test(v)?n(S).position()[f]+"px":v})}),n}.apply(y,g),o!==void 0&&(O.exports=o)},2903:(O,y,r)=>{var g,o;g=[r(2760),r(602),r(3281),r(5432)],o=function(n,l){"use strict";return n.extend({queue:function(d,p,a){var c;if(d)return p=(p||"fx")+"queue",c=l.get(d,p),a&&(!c||Array.isArray(a)?c=l.access(d,p,n.makeArray(a)):c.push(a)),c||[]},dequeue:function(d,p){p=p||"fx";var a=n.queue(d,p),c=a.length,m=a.shift(),i=n._queueHooks(d,p),h=function(){n.dequeue(d,p)};m==="inprogress"&&(m=a.shift(),c--),m&&(p==="fx"&&a.unshift("inprogress"),delete i.stop,m.call(d,h,i)),!c&&i&&i.empty.fire()},_queueHooks:function(d,p){var a=p+"queueHooks";return l.get(d,a)||l.access(d,a,{empty:n.Callbacks("once memory").add(function(){l.remove(d,[p+"queue",a])})})}}),n.fn.extend({queue:function(d,p){var a=2;return typeof d!="string"&&(p=d,d="fx",a--),arguments.length<a?n.queue(this[0],d):p===void 0?this:this.each(function(){var c=n.queue(this,d,p);n._queueHooks(this,d),d==="fx"&&c[0]!=="inprogress"&&n.dequeue(this,d)})},dequeue:function(d){return this.each(function(){n.dequeue(this,d)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(d,p){var a,c=1,m=n.Deferred(),i=this,h=this.length,u=function(){--c||m.resolveWith(i,[i])};for(typeof d!="string"&&(p=d,d=void 0),d=d||"fx";h--;)a=l.get(i[h],d+"queueHooks"),a&&a.empty&&(c++,a.empty.add(u));return u(),m.promise(p)}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},438:(O,y,r)=>{var g,o;g=[r(2760),r(2903),r(4386)],o=function(n){"use strict";return n.fn.delay=function(l,d){return l=n.fx&&n.fx.speeds[l]||l,d=d||"fx",this.queue(d,function(p,a){var c=window.setTimeout(p,l);a.stop=function(){window.clearTimeout(c)}})},n.fn.delay}.apply(y,g),o!==void 0&&(O.exports=o)},8367:(O,y,r)=>{var g,o;g=[r(2760),r(6096)],o=function(n,l){"use strict";n.find=l,n.expr=l.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=l.uniqueSort,n.text=l.getText,n.isXMLDoc=l.isXML,n.contains=l.contains,n.escapeSelector=l.escape}.apply(y,g),o!==void 0&&(O.exports=o)},5395:(O,y,r)=>{var g,o;g=[r(8367)],o=function(){"use strict"}.apply(y,g),o!==void 0&&(O.exports=o)},530:(O,y,r)=>{var g,o;g=[r(2760),r(453),r(4860),r(4548),r(7972),r(889),r(7677)],o=function(n,l,d,p){"use strict";var a=/\[\]$/,c=/\r?\n/g,m=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function h(u,f,S,v){var b;if(Array.isArray(f))n.each(f,function(T,C){S||a.test(u)?v(u,C):h(u+"["+(typeof C=="object"&&C!=null?T:"")+"]",C,S,v)});else if(!S&&l(f)==="object")for(b in f)h(u+"["+b+"]",f[b],S,v);else v(u,f)}return n.param=function(u,f){var S,v=[],b=function(T,C){var N=p(C)?C():C;v[v.length]=encodeURIComponent(T)+"="+encodeURIComponent(N==null?"":N)};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!n.isPlainObject(u))n.each(u,function(){b(this.name,this.value)});else for(S in u)h(S,u[S],f,b);return v.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=n.prop(this,"elements");return u?n.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!m.test(u)&&(this.checked||!d.test(u))}).map(function(u,f){var S=n(this).val();return S==null?null:Array.isArray(S)?n.map(S,function(v){return{name:f.name,value:v.replace(c,`\r
`)}}):{name:f.name,value:S.replace(c,`\r
`)}}).get()}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},889:(O,y,r)=>{var g,o;g=[r(2760),r(9500),r(3424),r(653),r(493),r(4648),r(4778),r(7972),r(6332),r(5395)],o=function(n,l,d,p,a,c,m){"use strict";var i=/^(?:parents|prev(?:Until|All))/,h={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(f){var S=n(f,this),v=S.length;return this.filter(function(){for(var b=0;b<v;b++)if(n.contains(this,S[b]))return!0})},closest:function(f,S){var v,b=0,T=this.length,C=[],N=typeof f!="string"&&n(f);if(!c.test(f)){for(;b<T;b++)for(v=this[b];v&&v!==S;v=v.parentNode)if(v.nodeType<11&&(N?N.index(v)>-1:v.nodeType===1&&n.find.matchesSelector(v,f))){C.push(v);break}}return this.pushStack(C.length>1?n.uniqueSort(C):C)},index:function(f){return f?typeof f=="string"?d.call(n(f),this[0]):d.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,S){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(f,S))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function u(f,S){for(;(f=f[S])&&f.nodeType!==1;);return f}return n.each({parent:function(f){var S=f.parentNode;return S&&S.nodeType!==11?S:null},parents:function(f){return p(f,"parentNode")},parentsUntil:function(f,S,v){return p(f,"parentNode",v)},next:function(f){return u(f,"nextSibling")},prev:function(f){return u(f,"previousSibling")},nextAll:function(f){return p(f,"nextSibling")},prevAll:function(f){return p(f,"previousSibling")},nextUntil:function(f,S,v){return p(f,"nextSibling",v)},prevUntil:function(f,S,v){return p(f,"previousSibling",v)},siblings:function(f){return a((f.parentNode||{}).firstChild,f)},children:function(f){return a(f.firstChild)},contents:function(f){return f.contentDocument!=null&&l(f.contentDocument)?f.contentDocument:(m(f,"template")&&(f=f.content||f),n.merge([],f.childNodes))}},function(f,S){n.fn[f]=function(v,b){var T=n.map(this,S,v);return f.slice(-5)!=="Until"&&(b=v),b&&typeof b=="string"&&(T=n.filter(b,T)),this.length>1&&(h[f]||n.uniqueSort(T),i.test(f)&&T.reverse()),this.pushStack(T)}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},6332:(O,y,r)=>{var g,o;g=[r(2760),r(3424),r(4548),r(4648),r(5395)],o=function(n,l,d,p){"use strict";function a(c,m,i){return d(m)?n.grep(c,function(h,u){return!!m.call(h,u,h)!==i}):m.nodeType?n.grep(c,function(h){return h===m!==i}):typeof m!="string"?n.grep(c,function(h){return l.call(m,h)>-1!==i}):n.filter(m,c,i)}n.filter=function(c,m,i){var h=m[0];return i&&(c=":not("+c+")"),m.length===1&&h.nodeType===1?n.find.matchesSelector(h,c)?[h]:[]:n.find.matches(c,n.grep(m,function(u){return u.nodeType===1}))},n.fn.extend({find:function(c){var m,i,h=this.length,u=this;if(typeof c!="string")return this.pushStack(n(c).filter(function(){for(m=0;m<h;m++)if(n.contains(u[m],this))return!0}));for(i=this.pushStack([]),m=0;m<h;m++)n.find(c,u[m],i);return h>1?n.uniqueSort(i):i},filter:function(c){return this.pushStack(a(this,c||[],!1))},not:function(c){return this.pushStack(a(this,c||[],!0))},is:function(c){return!!a(this,typeof c=="string"&&p.test(c)?n(c):c||[],!1).length}})}.apply(y,g),o!==void 0&&(O.exports=o)},653:(O,y,r)=>{var g,o;g=[r(2760)],o=function(n){"use strict";return function(l,d,p){for(var a=[],c=p!==void 0;(l=l[d])&&l.nodeType!==9;)if(l.nodeType===1){if(c&&n(l).is(p))break;a.push(l)}return a}}.apply(y,g),o!==void 0&&(O.exports=o)},4648:(O,y,r)=>{var g,o;g=[r(2760),r(5395)],o=function(n){"use strict";return n.expr.match.needsContext}.apply(y,g),o!==void 0&&(O.exports=o)},493:(O,y,r)=>{var g;g=function(){"use strict";return function(o,n){for(var l=[];o;o=o.nextSibling)o.nodeType===1&&o!==n&&l.push(o);return l}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},7878:(O,y,r)=>{var g,o;g=[r(9300)],o=function(n){"use strict";return n.call(Object)}.apply(y,g),o!==void 0&&(O.exports=o)},2386:(O,y,r)=>{var g;g=function(){"use strict";return[]}.call(y,r,y,O),g!==void 0&&(O.exports=g)},9872:(O,y,r)=>{var g;g=function(){"use strict";return{}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},9775:(O,y,r)=>{var g;g=function(){"use strict";return window.document}.call(y,r,y,O),g!==void 0&&(O.exports=g)},5543:(O,y,r)=>{var g,o;g=[r(9775)],o=function(n){"use strict";return n.documentElement}.apply(y,g),o!==void 0&&(O.exports=o)},2892:(O,y,r)=>{var g,o;g=[r(2386)],o=function(n){"use strict";return n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)}}.apply(y,g),o!==void 0&&(O.exports=o)},9300:(O,y,r)=>{var g,o;g=[r(6805)],o=function(n){"use strict";return n.toString}.apply(y,g),o!==void 0&&(O.exports=o)},9500:(O,y,r)=>{var g;g=function(){"use strict";return Object.getPrototypeOf}.call(y,r,y,O),g!==void 0&&(O.exports=g)},6805:(O,y,r)=>{var g,o;g=[r(9872)],o=function(n){"use strict";return n.hasOwnProperty}.apply(y,g),o!==void 0&&(O.exports=o)},3424:(O,y,r)=>{var g,o;g=[r(2386)],o=function(n){"use strict";return n.indexOf}.apply(y,g),o!==void 0&&(O.exports=o)},4548:(O,y,r)=>{var g;g=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},2035:(O,y,r)=>{var g;g=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},529:(O,y,r)=>{var g;g=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(y,r,y,O),g!==void 0&&(O.exports=g)},1391:(O,y,r)=>{var g,o;g=[r(2386)],o=function(n){"use strict";return n.push}.apply(y,g),o!==void 0&&(O.exports=o)},4860:(O,y,r)=>{var g;g=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(y,r,y,O),g!==void 0&&(O.exports=g)},9976:(O,y,r)=>{var g,o;g=[r(529)],o=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(y,g),o!==void 0&&(O.exports=o)},1873:(O,y,r)=>{var g;g=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(y,r,y,O),g!==void 0&&(O.exports=g)},362:(O,y,r)=>{var g,o;g=[r(389)],o=function(n){"use strict";return new RegExp("^"+n+"+|((?:^|[^\\\\])(?:\\\\.)*)"+n+"+$","g")}.apply(y,g),o!==void 0&&(O.exports=o)},6101:(O,y,r)=>{var g,o;g=[r(2386)],o=function(n){"use strict";return n.slice}.apply(y,g),o!==void 0&&(O.exports=o)},240:(O,y,r)=>{var g;g=function(){"use strict";return{}}.call(y,r,y,O),g!==void 0&&(O.exports=g)},4084:(O,y,r)=>{var g,o;g=[r(9872)],o=function(n){"use strict";return n.toString}.apply(y,g),o!==void 0&&(O.exports=o)},389:(O,y,r)=>{var g;g=function(){"use strict";return"[\\x20\\t\\r\\n\\f]"}.call(y,r,y,O),g!==void 0&&(O.exports=g)},3155:(O,y,r)=>{var g,o;g=[r(2760),r(4548),r(7972),r(9803),r(889)],o=function(n,l){"use strict";return n.fn.extend({wrapAll:function(d){var p;return this[0]&&(l(d)&&(d=d.call(this[0])),p=n(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&p.insertBefore(this[0]),p.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(d){return l(d)?this.each(function(p){n(this).wrapInner(d.call(this,p))}):this.each(function(){var p=n(this),a=p.contents();a.length?a.wrapAll(d):p.append(d)})},wrap:function(d){var p=l(d);return this.each(function(a){n(this).wrapAll(p?d.call(this,a):d)})},unwrap:function(d){return this.parent(d).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(y,g),o!==void 0&&(O.exports=o)},8081:function(O,y,r){O=r.nmd(O);var g;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var o,n="4.17.21",l=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",p="Expected a function",a="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,i="__lodash_placeholder__",h=1,u=2,f=4,S=1,v=2,b=1,T=2,C=4,N=8,P=16,A=32,D=64,M=128,L=256,_=512,x=30,U="...",j=800,W=16,B=1,H=2,w=3,q=1/0,V=9007199254740991,ne=17976931348623157e292,ie=0/0,le=4294967295,te=le-1,ge=le>>>1,be=[["ary",M],["bind",b],["bindKey",T],["curry",N],["curryRight",P],["flip",_],["partial",A],["partialRight",D],["rearg",L]],Ie="[object Arguments]",it="[object Array]",mt="[object AsyncFunction]",ut="[object Boolean]",ht="[object Date]",At="[object DOMException]",Re="[object Error]",Et="[object Function]",Ue="[object GeneratorFunction]",ze="[object Map]",Bt="[object Number]",je="[object Null]",pe="[object Object]",Ne="[object Promise]",De="[object Proxy]",ae="[object RegExp]",ve="[object Set]",he="[object String]",Ee="[object Symbol]",Ze="[object Undefined]",Ke="[object WeakMap]",Je="[object WeakSet]",Pe="[object ArrayBuffer]",$e="[object DataView]",Qe="[object Float32Array]",Xe="[object Float64Array]",Wt="[object Int8Array]",It="[object Int16Array]",Nt="[object Int32Array]",Tn="[object Uint8Array]",an="[object Uint8ClampedArray]",zt="[object Uint16Array]",gn="[object Uint32Array]",Ft=/\b__p \+= '';/g,mn=/\b(__p \+=) '' \+/g,vt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,An=/&(?:amp|lt|gt|quot|#39);/g,kn=/[&<>"']/g,cn=RegExp(An.source),wn=RegExp(kn.source),Nn=/<%-([\s\S]+?)%>/g,lo=/<%([\s\S]+?)%>/g,Kn=/<%=([\s\S]+?)%>/g,F=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,z=RegExp(Y.source),X=/^\s+/,ee=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,me=/,? & /,Ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Te=/[()=,{}\[\]\/\s]/,xe=/\\(\\)?/g,Ve=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ye=/\w*$/,Fe=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,Dt=/^\[object .+?Constructor\]$/,at=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Un=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ct=/($^)/,Xs=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Js="\\u0300-\\u036f",Qs="\\ufe20-\\ufe2f",el="\\u20d0-\\u20ff",Pa=Js+Qs+el,Ta="\\u2700-\\u27bf",Aa="a-z\\xdf-\\xf6\\xf8-\\xff",tl="\\xac\\xb1\\xd7\\xf7",nl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ol="\\u2000-\\u206f",il=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Na="A-Z\\xc0-\\xd6\\xd8-\\xde",Da="\\ufe0e\\ufe0f",Ra=tl+nl+ol+il,gi="['\u2019]",al="["+Ao+"]",_a="["+Ra+"]",No="["+Pa+"]",Ma="\\d+",rl="["+Ta+"]",La="["+Aa+"]",xa="[^"+Ao+Ra+Ma+Ta+Aa+Na+"]",mi="\\ud83c[\\udffb-\\udfff]",sl="(?:"+No+"|"+mi+")",Ia="[^"+Ao+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",vi="[\\ud800-\\udbff][\\udc00-\\udfff]",Yn="["+Na+"]",Fa="\\u200d",ja="(?:"+La+"|"+xa+")",ll="(?:"+Yn+"|"+xa+")",ka="(?:"+gi+"(?:d|ll|m|re|s|t|ve))?",wa="(?:"+gi+"(?:D|LL|M|RE|S|T|VE))?",Ua=sl+"?",Ba="["+Da+"]?",pl="(?:"+Fa+"(?:"+[Ia,hi,vi].join("|")+")"+Ba+Ua+")*",cl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wa=Ba+Ua+pl,ul="(?:"+[rl,hi,vi].join("|")+")"+Wa,fl="(?:"+[Ia+No+"?",No,hi,vi,al].join("|")+")",gl=RegExp(gi,"g"),ml=RegExp(No,"g"),yi=RegExp(mi+"(?="+mi+")|"+fl+Wa,"g"),hl=RegExp([Yn+"?"+La+"+"+ka+"(?="+[_a,Yn,"$"].join("|")+")",ll+"+"+wa+"(?="+[_a,Yn+ja,"$"].join("|")+")",Yn+"?"+ja+"+"+ka,Yn+"+"+wa,dl,cl,Ma,ul].join("|"),"g"),vl=RegExp("["+Fa+Ao+Pa+Da+"]"),yl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bl=-1,lt={};lt[Qe]=lt[Xe]=lt[Wt]=lt[It]=lt[Nt]=lt[Tn]=lt[an]=lt[zt]=lt[gn]=!0,lt[Ie]=lt[it]=lt[Pe]=lt[ut]=lt[$e]=lt[ht]=lt[Re]=lt[Et]=lt[ze]=lt[Bt]=lt[pe]=lt[ae]=lt[ve]=lt[he]=lt[Ke]=!1;var st={};st[Ie]=st[it]=st[Pe]=st[$e]=st[ut]=st[ht]=st[Qe]=st[Xe]=st[Wt]=st[It]=st[Nt]=st[ze]=st[Bt]=st[pe]=st[ae]=st[ve]=st[he]=st[Ee]=st[Tn]=st[an]=st[zt]=st[gn]=!0,st[Re]=st[Et]=st[Ke]=!1;var El={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Cl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ol={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tl=parseFloat,Al=parseInt,za=typeof r.g=="object"&&r.g&&r.g.Object===Object&&r.g,Nl=typeof self=="object"&&self&&self.Object===Object&&self,Pt=za||Nl||Function("return this")(),Ga=y&&!y.nodeType&&y,po=Ga&&!0&&O&&!O.nodeType&&O,$a=po&&po.exports===Ga,Si=$a&&za.process,Zt=function(){try{var J=po&&po.require&&po.require("util").types;return J||Si&&Si.binding&&Si.binding("util")}catch(re){}}(),Ha=Zt&&Zt.isArrayBuffer,Va=Zt&&Zt.isDate,qa=Zt&&Zt.isMap,Ka=Zt&&Zt.isRegExp,Ya=Zt&&Zt.isSet,Za=Zt&&Zt.isTypedArray;function Gt(J,re,oe){switch(oe.length){case 0:return J.call(re);case 1:return J.call(re,oe[0]);case 2:return J.call(re,oe[0],oe[1]);case 3:return J.call(re,oe[0],oe[1],oe[2])}return J.apply(re,oe)}function Dl(J,re,oe,Oe){for(var ke=-1,et=J==null?0:J.length;++ke<et;){var St=J[ke];re(Oe,St,oe(St),J)}return Oe}function Xt(J,re){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe&&re(J[oe],oe,J)!==!1;);return J}function Rl(J,re){for(var oe=J==null?0:J.length;oe--&&re(J[oe],oe,J)!==!1;);return J}function Xa(J,re){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe;)if(!re(J[oe],oe,J))return!1;return!0}function Dn(J,re){for(var oe=-1,Oe=J==null?0:J.length,ke=0,et=[];++oe<Oe;){var St=J[oe];re(St,oe,J)&&(et[ke++]=St)}return et}function Do(J,re){var oe=J==null?0:J.length;return!!oe&&Zn(J,re,0)>-1}function bi(J,re,oe){for(var Oe=-1,ke=J==null?0:J.length;++Oe<ke;)if(oe(re,J[Oe]))return!0;return!1}function pt(J,re){for(var oe=-1,Oe=J==null?0:J.length,ke=Array(Oe);++oe<Oe;)ke[oe]=re(J[oe],oe,J);return ke}function Rn(J,re){for(var oe=-1,Oe=re.length,ke=J.length;++oe<Oe;)J[ke+oe]=re[oe];return J}function Ei(J,re,oe,Oe){var ke=-1,et=J==null?0:J.length;for(Oe&&et&&(oe=J[++ke]);++ke<et;)oe=re(oe,J[ke],ke,J);return oe}function _l(J,re,oe,Oe){var ke=J==null?0:J.length;for(Oe&&ke&&(oe=J[--ke]);ke--;)oe=re(oe,J[ke],ke,J);return oe}function Ci(J,re){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe;)if(re(J[oe],oe,J))return!0;return!1}var Ml=Oi("length");function Ll(J){return J.split("")}function xl(J){return J.match(Ce)||[]}function Ja(J,re,oe){var Oe;return oe(J,function(ke,et,St){if(re(ke,et,St))return Oe=et,!1}),Oe}function Ro(J,re,oe,Oe){for(var ke=J.length,et=oe+(Oe?1:-1);Oe?et--:++et<ke;)if(re(J[et],et,J))return et;return-1}function Zn(J,re,oe){return re===re?Hl(J,re,oe):Ro(J,Qa,oe)}function Il(J,re,oe,Oe){for(var ke=oe-1,et=J.length;++ke<et;)if(Oe(J[ke],re))return ke;return-1}function Qa(J){return J!==J}function er(J,re){var oe=J==null?0:J.length;return oe?Ti(J,re)/oe:ie}function Oi(J){return function(re){return re==null?o:re[J]}}function Pi(J){return function(re){return J==null?o:J[re]}}function tr(J,re,oe,Oe,ke){return ke(J,function(et,St,rt){oe=Oe?(Oe=!1,et):re(oe,et,St,rt)}),oe}function Fl(J,re){var oe=J.length;for(J.sort(re);oe--;)J[oe]=J[oe].value;return J}function Ti(J,re){for(var oe,Oe=-1,ke=J.length;++Oe<ke;){var et=re(J[Oe]);et!==o&&(oe=oe===o?et:oe+et)}return oe}function Ai(J,re){for(var oe=-1,Oe=Array(J);++oe<J;)Oe[oe]=re(oe);return Oe}function jl(J,re){return pt(re,function(oe){return[oe,J[oe]]})}function nr(J){return J&&J.slice(0,rr(J)+1).replace(X,"")}function $t(J){return function(re){return J(re)}}function Ni(J,re){return pt(re,function(oe){return J[oe]})}function co(J,re){return J.has(re)}function or(J,re){for(var oe=-1,Oe=J.length;++oe<Oe&&Zn(re,J[oe],0)>-1;);return oe}function ir(J,re){for(var oe=J.length;oe--&&Zn(re,J[oe],0)>-1;);return oe}function kl(J,re){for(var oe=J.length,Oe=0;oe--;)J[oe]===re&&++Oe;return Oe}var wl=Pi(El),Ul=Pi(Cl);function Bl(J){return"\\"+Pl[J]}function Wl(J,re){return J==null?o:J[re]}function Xn(J){return vl.test(J)}function zl(J){return yl.test(J)}function Gl(J){for(var re,oe=[];!(re=J.next()).done;)oe.push(re.value);return oe}function Di(J){var re=-1,oe=Array(J.size);return J.forEach(function(Oe,ke){oe[++re]=[ke,Oe]}),oe}function ar(J,re){return function(oe){return J(re(oe))}}function _n(J,re){for(var oe=-1,Oe=J.length,ke=0,et=[];++oe<Oe;){var St=J[oe];(St===re||St===i)&&(J[oe]=i,et[ke++]=oe)}return et}function _o(J){var re=-1,oe=Array(J.size);return J.forEach(function(Oe){oe[++re]=Oe}),oe}function $l(J){var re=-1,oe=Array(J.size);return J.forEach(function(Oe){oe[++re]=[Oe,Oe]}),oe}function Hl(J,re,oe){for(var Oe=oe-1,ke=J.length;++Oe<ke;)if(J[Oe]===re)return Oe;return-1}function Vl(J,re,oe){for(var Oe=oe+1;Oe--;)if(J[Oe]===re)return Oe;return Oe}function Jn(J){return Xn(J)?Kl(J):Ml(J)}function rn(J){return Xn(J)?Yl(J):Ll(J)}function rr(J){for(var re=J.length;re--&&ee.test(J.charAt(re)););return re}var ql=Pi(Ol);function Kl(J){for(var re=yi.lastIndex=0;yi.test(J);)++re;return re}function Yl(J){return J.match(yi)||[]}function Zl(J){return J.match(hl)||[]}var Xl=function J(re){re=re==null?Pt:Mo.defaults(Pt.Object(),re,Mo.pick(Pt,Sl));var oe=re.Array,Oe=re.Date,ke=re.Error,et=re.Function,St=re.Math,rt=re.Object,Ri=re.RegExp,Jl=re.String,Jt=re.TypeError,Lo=oe.prototype,Ql=et.prototype,Qn=rt.prototype,xo=re["__core-js_shared__"],Io=Ql.toString,nt=Qn.hasOwnProperty,ep=0,sr=function(){var e=/[^.]+$/.exec(xo&&xo.keys&&xo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fo=Qn.toString,tp=Io.call(rt),np=Pt._,op=Ri("^"+Io.call(nt).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jo=$a?re.Buffer:o,Mn=re.Symbol,ko=re.Uint8Array,lr=jo?jo.allocUnsafe:o,wo=ar(rt.getPrototypeOf,rt),pr=rt.create,cr=Qn.propertyIsEnumerable,Uo=Lo.splice,dr=Mn?Mn.isConcatSpreadable:o,uo=Mn?Mn.iterator:o,Bn=Mn?Mn.toStringTag:o,Bo=function(){try{var e=Hn(rt,"defineProperty");return e({},"",{}),e}catch(t){}}(),ip=re.clearTimeout!==Pt.clearTimeout&&re.clearTimeout,ap=Oe&&Oe.now!==Pt.Date.now&&Oe.now,rp=re.setTimeout!==Pt.setTimeout&&re.setTimeout,Wo=St.ceil,zo=St.floor,_i=rt.getOwnPropertySymbols,sp=jo?jo.isBuffer:o,ur=re.isFinite,lp=Lo.join,pp=ar(rt.keys,rt),bt=St.max,Rt=St.min,cp=Oe.now,dp=re.parseInt,fr=St.random,up=Lo.reverse,Mi=Hn(re,"DataView"),fo=Hn(re,"Map"),Li=Hn(re,"Promise"),eo=Hn(re,"Set"),go=Hn(re,"WeakMap"),mo=Hn(rt,"create"),Go=go&&new go,to={},fp=Vn(Mi),gp=Vn(fo),mp=Vn(Li),hp=Vn(eo),vp=Vn(go),$o=Mn?Mn.prototype:o,ho=$o?$o.valueOf:o,gr=$o?$o.toString:o;function I(e){if(dt(e)&&!we(e)&&!(e instanceof qe)){if(e instanceof Qt)return e;if(nt.call(e,"__wrapped__"))return ms(e)}return new Qt(e)}var no=function(){function e(){}return function(t){if(!ct(t))return{};if(pr)return pr(t);e.prototype=t;var s=new e;return e.prototype=o,s}}();function Ho(){}function Qt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}I.templateSettings={escape:Nn,evaluate:lo,interpolate:Kn,variable:"",imports:{_:I}},I.prototype=Ho.prototype,I.prototype.constructor=I,Qt.prototype=no(Ho.prototype),Qt.prototype.constructor=Qt;function qe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function yp(){var e=new qe(this.__wrapped__);return e.__actions__=jt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=jt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=jt(this.__views__),e}function Sp(){if(this.__filtered__){var e=new qe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function bp(){var e=this.__wrapped__.value(),t=this.__dir__,s=we(e),E=t<0,R=s?e.length:0,k=Lc(0,R,this.__views__),G=k.start,K=k.end,Q=K-G,ce=E?K:G-1,de=this.__iteratees__,fe=de.length,Se=0,Ae=Rt(Q,this.__takeCount__);if(!s||!E&&R==Q&&Ae==Q)return wr(e,this.__actions__);var Me=[];e:for(;Q--&&Se<Ae;){ce+=t;for(var We=-1,Le=e[ce];++We<fe;){var He=de[We],Ye=He.iteratee,qt=He.type,xt=Ye(Le);if(qt==H)Le=xt;else if(!xt){if(qt==B)continue e;break e}}Me[Se++]=Le}return Me}qe.prototype=no(Ho.prototype),qe.prototype.constructor=qe;function Wn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var E=e[t];this.set(E[0],E[1])}}function Ep(){this.__data__=mo?mo(null):{},this.size=0}function Cp(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Op(e){var t=this.__data__;if(mo){var s=t[e];return s===c?o:s}return nt.call(t,e)?t[e]:o}function Pp(e){var t=this.__data__;return mo?t[e]!==o:nt.call(t,e)}function Tp(e,t){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=mo&&t===o?c:t,this}Wn.prototype.clear=Ep,Wn.prototype.delete=Cp,Wn.prototype.get=Op,Wn.prototype.has=Pp,Wn.prototype.set=Tp;function hn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var E=e[t];this.set(E[0],E[1])}}function Ap(){this.__data__=[],this.size=0}function Np(e){var t=this.__data__,s=Vo(t,e);if(s<0)return!1;var E=t.length-1;return s==E?t.pop():Uo.call(t,s,1),--this.size,!0}function Dp(e){var t=this.__data__,s=Vo(t,e);return s<0?o:t[s][1]}function Rp(e){return Vo(this.__data__,e)>-1}function _p(e,t){var s=this.__data__,E=Vo(s,e);return E<0?(++this.size,s.push([e,t])):s[E][1]=t,this}hn.prototype.clear=Ap,hn.prototype.delete=Np,hn.prototype.get=Dp,hn.prototype.has=Rp,hn.prototype.set=_p;function vn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var E=e[t];this.set(E[0],E[1])}}function Mp(){this.size=0,this.__data__={hash:new Wn,map:new(fo||hn),string:new Wn}}function Lp(e){var t=ii(this,e).delete(e);return this.size-=t?1:0,t}function xp(e){return ii(this,e).get(e)}function Ip(e){return ii(this,e).has(e)}function Fp(e,t){var s=ii(this,e),E=s.size;return s.set(e,t),this.size+=s.size==E?0:1,this}vn.prototype.clear=Mp,vn.prototype.delete=Lp,vn.prototype.get=xp,vn.prototype.has=Ip,vn.prototype.set=Fp;function zn(e){var t=-1,s=e==null?0:e.length;for(this.__data__=new vn;++t<s;)this.add(e[t])}function jp(e){return this.__data__.set(e,c),this}function kp(e){return this.__data__.has(e)}zn.prototype.add=zn.prototype.push=jp,zn.prototype.has=kp;function sn(e){var t=this.__data__=new hn(e);this.size=t.size}function wp(){this.__data__=new hn,this.size=0}function Up(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}function Bp(e){return this.__data__.get(e)}function Wp(e){return this.__data__.has(e)}function zp(e,t){var s=this.__data__;if(s instanceof hn){var E=s.__data__;if(!fo||E.length<l-1)return E.push([e,t]),this.size=++s.size,this;s=this.__data__=new vn(E)}return s.set(e,t),this.size=s.size,this}sn.prototype.clear=wp,sn.prototype.delete=Up,sn.prototype.get=Bp,sn.prototype.has=Wp,sn.prototype.set=zp;function mr(e,t){var s=we(e),E=!s&&qn(e),R=!s&&!E&&jn(e),k=!s&&!E&&!R&&ro(e),G=s||E||R||k,K=G?Ai(e.length,Jl):[],Q=K.length;for(var ce in e)(t||nt.call(e,ce))&&!(G&&(ce=="length"||R&&(ce=="offset"||ce=="parent")||k&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||En(ce,Q)))&&K.push(ce);return K}function hr(e){var t=e.length;return t?e[Gi(0,t-1)]:o}function Gp(e,t){return ai(jt(e),Gn(t,0,e.length))}function $p(e){return ai(jt(e))}function xi(e,t,s){(s!==o&&!ln(e[t],s)||s===o&&!(t in e))&&yn(e,t,s)}function vo(e,t,s){var E=e[t];(!(nt.call(e,t)&&ln(E,s))||s===o&&!(t in e))&&yn(e,t,s)}function Vo(e,t){for(var s=e.length;s--;)if(ln(e[s][0],t))return s;return-1}function Hp(e,t,s,E){return Ln(e,function(R,k,G){t(E,R,s(R),G)}),E}function vr(e,t){return e&&un(t,Ot(t),e)}function Vp(e,t){return e&&un(t,wt(t),e)}function yn(e,t,s){t=="__proto__"&&Bo?Bo(e,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[t]=s}function Ii(e,t){for(var s=-1,E=t.length,R=oe(E),k=e==null;++s<E;)R[s]=k?o:ga(e,t[s]);return R}function Gn(e,t,s){return e===e&&(s!==o&&(e=e<=s?e:s),t!==o&&(e=e>=t?e:t)),e}function en(e,t,s,E,R,k){var G,K=t&h,Q=t&u,ce=t&f;if(s&&(G=R?s(e,E,R,k):s(e)),G!==o)return G;if(!ct(e))return e;var de=we(e);if(de){if(G=Ic(e),!K)return jt(e,G)}else{var fe=_t(e),Se=fe==Et||fe==Ue;if(jn(e))return Wr(e,K);if(fe==pe||fe==Ie||Se&&!R){if(G=Q||Se?{}:rs(e),!K)return Q?Oc(e,Vp(G,e)):Cc(e,vr(G,e))}else{if(!st[fe])return R?e:{};G=Fc(e,fe,K)}}k||(k=new sn);var Ae=k.get(e);if(Ae)return Ae;k.set(e,G),Fs(e)?e.forEach(function(Le){G.add(en(Le,t,s,Le,e,k))}):xs(e)&&e.forEach(function(Le,He){G.set(He,en(Le,t,s,He,e,k))});var Me=ce?Q?ea:Qi:Q?wt:Ot,We=de?o:Me(e);return Xt(We||e,function(Le,He){We&&(He=Le,Le=e[He]),vo(G,He,en(Le,t,s,He,e,k))}),G}function qp(e){var t=Ot(e);return function(s){return yr(s,e,t)}}function yr(e,t,s){var E=s.length;if(e==null)return!E;for(e=rt(e);E--;){var R=s[E],k=t[R],G=e[R];if(G===o&&!(R in e)||!k(G))return!1}return!0}function Sr(e,t,s){if(typeof e!="function")throw new Jt(p);return Po(function(){e.apply(o,s)},t)}function yo(e,t,s,E){var R=-1,k=Do,G=!0,K=e.length,Q=[],ce=t.length;if(!K)return Q;s&&(t=pt(t,$t(s))),E?(k=bi,G=!1):t.length>=l&&(k=co,G=!1,t=new zn(t));e:for(;++R<K;){var de=e[R],fe=s==null?de:s(de);if(de=E||de!==0?de:0,G&&fe===fe){for(var Se=ce;Se--;)if(t[Se]===fe)continue e;Q.push(de)}else k(t,fe,E)||Q.push(de)}return Q}var Ln=Vr(dn),br=Vr(ji,!0);function Kp(e,t){var s=!0;return Ln(e,function(E,R,k){return s=!!t(E,R,k),s}),s}function qo(e,t,s){for(var E=-1,R=e.length;++E<R;){var k=e[E],G=t(k);if(G!=null&&(K===o?G===G&&!Vt(G):s(G,K)))var K=G,Q=k}return Q}function Yp(e,t,s,E){var R=e.length;for(s=Be(s),s<0&&(s=-s>R?0:R+s),E=E===o||E>R?R:Be(E),E<0&&(E+=R),E=s>E?0:ks(E);s<E;)e[s++]=t;return e}function Er(e,t){var s=[];return Ln(e,function(E,R,k){t(E,R,k)&&s.push(E)}),s}function Tt(e,t,s,E,R){var k=-1,G=e.length;for(s||(s=kc),R||(R=[]);++k<G;){var K=e[k];t>0&&s(K)?t>1?Tt(K,t-1,s,E,R):Rn(R,K):E||(R[R.length]=K)}return R}var Fi=qr(),Cr=qr(!0);function dn(e,t){return e&&Fi(e,t,Ot)}function ji(e,t){return e&&Cr(e,t,Ot)}function Ko(e,t){return Dn(t,function(s){return Cn(e[s])})}function $n(e,t){t=In(t,e);for(var s=0,E=t.length;e!=null&&s<E;)e=e[fn(t[s++])];return s&&s==E?e:o}function Or(e,t,s){var E=t(e);return we(e)?E:Rn(E,s(e))}function Mt(e){return e==null?e===o?Ze:je:Bn&&Bn in rt(e)?Mc(e):$c(e)}function ki(e,t){return e>t}function Zp(e,t){return e!=null&&nt.call(e,t)}function Xp(e,t){return e!=null&&t in rt(e)}function Jp(e,t,s){return e>=Rt(t,s)&&e<bt(t,s)}function wi(e,t,s){for(var E=s?bi:Do,R=e[0].length,k=e.length,G=k,K=oe(k),Q=1/0,ce=[];G--;){var de=e[G];G&&t&&(de=pt(de,$t(t))),Q=Rt(de.length,Q),K[G]=!s&&(t||R>=120&&de.length>=120)?new zn(G&&de):o}de=e[0];var fe=-1,Se=K[0];e:for(;++fe<R&&ce.length<Q;){var Ae=de[fe],Me=t?t(Ae):Ae;if(Ae=s||Ae!==0?Ae:0,!(Se?co(Se,Me):E(ce,Me,s))){for(G=k;--G;){var We=K[G];if(!(We?co(We,Me):E(e[G],Me,s)))continue e}Se&&Se.push(Me),ce.push(Ae)}}return ce}function Qp(e,t,s,E){return dn(e,function(R,k,G){t(E,s(R),k,G)}),E}function So(e,t,s){t=In(t,e),e=cs(e,t);var E=e==null?e:e[fn(nn(t))];return E==null?o:Gt(E,e,s)}function Pr(e){return dt(e)&&Mt(e)==Ie}function ec(e){return dt(e)&&Mt(e)==Pe}function tc(e){return dt(e)&&Mt(e)==ht}function bo(e,t,s,E,R){return e===t?!0:e==null||t==null||!dt(e)&&!dt(t)?e!==e&&t!==t:nc(e,t,s,E,bo,R)}function nc(e,t,s,E,R,k){var G=we(e),K=we(t),Q=G?it:_t(e),ce=K?it:_t(t);Q=Q==Ie?pe:Q,ce=ce==Ie?pe:ce;var de=Q==pe,fe=ce==pe,Se=Q==ce;if(Se&&jn(e)){if(!jn(t))return!1;G=!0,de=!1}if(Se&&!de)return k||(k=new sn),G||ro(e)?os(e,t,s,E,R,k):Rc(e,t,Q,s,E,R,k);if(!(s&S)){var Ae=de&&nt.call(e,"__wrapped__"),Me=fe&&nt.call(t,"__wrapped__");if(Ae||Me){var We=Ae?e.value():e,Le=Me?t.value():t;return k||(k=new sn),R(We,Le,s,E,k)}}return Se?(k||(k=new sn),_c(e,t,s,E,R,k)):!1}function oc(e){return dt(e)&&_t(e)==ze}function Ui(e,t,s,E){var R=s.length,k=R,G=!E;if(e==null)return!k;for(e=rt(e);R--;){var K=s[R];if(G&&K[2]?K[1]!==e[K[0]]:!(K[0]in e))return!1}for(;++R<k;){K=s[R];var Q=K[0],ce=e[Q],de=K[1];if(G&&K[2]){if(ce===o&&!(Q in e))return!1}else{var fe=new sn;if(E)var Se=E(ce,de,Q,e,t,fe);if(!(Se===o?bo(de,ce,S|v,E,fe):Se))return!1}}return!0}function Tr(e){if(!ct(e)||Uc(e))return!1;var t=Cn(e)?op:Dt;return t.test(Vn(e))}function ic(e){return dt(e)&&Mt(e)==ae}function ac(e){return dt(e)&&_t(e)==ve}function rc(e){return dt(e)&&di(e.length)&&!!lt[Mt(e)]}function Ar(e){return typeof e=="function"?e:e==null?Ut:typeof e=="object"?we(e)?Rr(e[0],e[1]):Dr(e):Ks(e)}function Bi(e){if(!Oo(e))return pp(e);var t=[];for(var s in rt(e))nt.call(e,s)&&s!="constructor"&&t.push(s);return t}function sc(e){if(!ct(e))return Gc(e);var t=Oo(e),s=[];for(var E in e)E=="constructor"&&(t||!nt.call(e,E))||s.push(E);return s}function Wi(e,t){return e<t}function Nr(e,t){var s=-1,E=kt(e)?oe(e.length):[];return Ln(e,function(R,k,G){E[++s]=t(R,k,G)}),E}function Dr(e){var t=na(e);return t.length==1&&t[0][2]?ls(t[0][0],t[0][1]):function(s){return s===e||Ui(s,e,t)}}function Rr(e,t){return ia(e)&&ss(t)?ls(fn(e),t):function(s){var E=ga(s,e);return E===o&&E===t?ma(s,e):bo(t,E,S|v)}}function Yo(e,t,s,E,R){e!==t&&Fi(t,function(k,G){if(R||(R=new sn),ct(k))lc(e,t,G,s,Yo,E,R);else{var K=E?E(ra(e,G),k,G+"",e,t,R):o;K===o&&(K=k),xi(e,G,K)}},wt)}function lc(e,t,s,E,R,k,G){var K=ra(e,s),Q=ra(t,s),ce=G.get(Q);if(ce){xi(e,s,ce);return}var de=k?k(K,Q,s+"",e,t,G):o,fe=de===o;if(fe){var Se=we(Q),Ae=!Se&&jn(Q),Me=!Se&&!Ae&&ro(Q);de=Q,Se||Ae||Me?we(K)?de=K:ft(K)?de=jt(K):Ae?(fe=!1,de=Wr(Q,!0)):Me?(fe=!1,de=zr(Q,!0)):de=[]:To(Q)||qn(Q)?(de=K,qn(K)?de=ws(K):(!ct(K)||Cn(K))&&(de=rs(Q))):fe=!1}fe&&(G.set(Q,de),R(de,Q,E,k,G),G.delete(Q)),xi(e,s,de)}function _r(e,t){var s=e.length;if(!!s)return t+=t<0?s:0,En(t,s)?e[t]:o}function Mr(e,t,s){t.length?t=pt(t,function(k){return we(k)?function(G){return $n(G,k.length===1?k[0]:k)}:k}):t=[Ut];var E=-1;t=pt(t,$t(_e()));var R=Nr(e,function(k,G,K){var Q=pt(t,function(ce){return ce(k)});return{criteria:Q,index:++E,value:k}});return Fl(R,function(k,G){return Ec(k,G,s)})}function pc(e,t){return Lr(e,t,function(s,E){return ma(e,E)})}function Lr(e,t,s){for(var E=-1,R=t.length,k={};++E<R;){var G=t[E],K=$n(e,G);s(K,G)&&Eo(k,In(G,e),K)}return k}function cc(e){return function(t){return $n(t,e)}}function zi(e,t,s,E){var R=E?Il:Zn,k=-1,G=t.length,K=e;for(e===t&&(t=jt(t)),s&&(K=pt(e,$t(s)));++k<G;)for(var Q=0,ce=t[k],de=s?s(ce):ce;(Q=R(K,de,Q,E))>-1;)K!==e&&Uo.call(K,Q,1),Uo.call(e,Q,1);return e}function xr(e,t){for(var s=e?t.length:0,E=s-1;s--;){var R=t[s];if(s==E||R!==k){var k=R;En(R)?Uo.call(e,R,1):Vi(e,R)}}return e}function Gi(e,t){return e+zo(fr()*(t-e+1))}function dc(e,t,s,E){for(var R=-1,k=bt(Wo((t-e)/(s||1)),0),G=oe(k);k--;)G[E?k:++R]=e,e+=s;return G}function $i(e,t){var s="";if(!e||t<1||t>V)return s;do t%2&&(s+=e),t=zo(t/2),t&&(e+=e);while(t);return s}function Ge(e,t){return sa(ps(e,t,Ut),e+"")}function uc(e){return hr(so(e))}function fc(e,t){var s=so(e);return ai(s,Gn(t,0,s.length))}function Eo(e,t,s,E){if(!ct(e))return e;t=In(t,e);for(var R=-1,k=t.length,G=k-1,K=e;K!=null&&++R<k;){var Q=fn(t[R]),ce=s;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return e;if(R!=G){var de=K[Q];ce=E?E(de,Q,K):o,ce===o&&(ce=ct(de)?de:En(t[R+1])?[]:{})}vo(K,Q,ce),K=K[Q]}return e}var Ir=Go?function(e,t){return Go.set(e,t),e}:Ut,gc=Bo?function(e,t){return Bo(e,"toString",{configurable:!0,enumerable:!1,value:va(t),writable:!0})}:Ut;function mc(e){return ai(so(e))}function tn(e,t,s){var E=-1,R=e.length;t<0&&(t=-t>R?0:R+t),s=s>R?R:s,s<0&&(s+=R),R=t>s?0:s-t>>>0,t>>>=0;for(var k=oe(R);++E<R;)k[E]=e[E+t];return k}function hc(e,t){var s;return Ln(e,function(E,R,k){return s=t(E,R,k),!s}),!!s}function Zo(e,t,s){var E=0,R=e==null?E:e.length;if(typeof t=="number"&&t===t&&R<=ge){for(;E<R;){var k=E+R>>>1,G=e[k];G!==null&&!Vt(G)&&(s?G<=t:G<t)?E=k+1:R=k}return R}return Hi(e,t,Ut,s)}function Hi(e,t,s,E){var R=0,k=e==null?0:e.length;if(k===0)return 0;t=s(t);for(var G=t!==t,K=t===null,Q=Vt(t),ce=t===o;R<k;){var de=zo((R+k)/2),fe=s(e[de]),Se=fe!==o,Ae=fe===null,Me=fe===fe,We=Vt(fe);if(G)var Le=E||Me;else ce?Le=Me&&(E||Se):K?Le=Me&&Se&&(E||!Ae):Q?Le=Me&&Se&&!Ae&&(E||!We):Ae||We?Le=!1:Le=E?fe<=t:fe<t;Le?R=de+1:k=de}return Rt(k,te)}function Fr(e,t){for(var s=-1,E=e.length,R=0,k=[];++s<E;){var G=e[s],K=t?t(G):G;if(!s||!ln(K,Q)){var Q=K;k[R++]=G===0?0:G}}return k}function jr(e){return typeof e=="number"?e:Vt(e)?ie:+e}function Ht(e){if(typeof e=="string")return e;if(we(e))return pt(e,Ht)+"";if(Vt(e))return gr?gr.call(e):"";var t=e+"";return t=="0"&&1/e==-q?"-0":t}function xn(e,t,s){var E=-1,R=Do,k=e.length,G=!0,K=[],Q=K;if(s)G=!1,R=bi;else if(k>=l){var ce=t?null:Nc(e);if(ce)return _o(ce);G=!1,R=co,Q=new zn}else Q=t?[]:K;e:for(;++E<k;){var de=e[E],fe=t?t(de):de;if(de=s||de!==0?de:0,G&&fe===fe){for(var Se=Q.length;Se--;)if(Q[Se]===fe)continue e;t&&Q.push(fe),K.push(de)}else R(Q,fe,s)||(Q!==K&&Q.push(fe),K.push(de))}return K}function Vi(e,t){return t=In(t,e),e=cs(e,t),e==null||delete e[fn(nn(t))]}function kr(e,t,s,E){return Eo(e,t,s($n(e,t)),E)}function Xo(e,t,s,E){for(var R=e.length,k=E?R:-1;(E?k--:++k<R)&&t(e[k],k,e););return s?tn(e,E?0:k,E?k+1:R):tn(e,E?k+1:0,E?R:k)}function wr(e,t){var s=e;return s instanceof qe&&(s=s.value()),Ei(t,function(E,R){return R.func.apply(R.thisArg,Rn([E],R.args))},s)}function qi(e,t,s){var E=e.length;if(E<2)return E?xn(e[0]):[];for(var R=-1,k=oe(E);++R<E;)for(var G=e[R],K=-1;++K<E;)K!=R&&(k[R]=yo(k[R]||G,e[K],t,s));return xn(Tt(k,1),t,s)}function Ur(e,t,s){for(var E=-1,R=e.length,k=t.length,G={};++E<R;){var K=E<k?t[E]:o;s(G,e[E],K)}return G}function Ki(e){return ft(e)?e:[]}function Yi(e){return typeof e=="function"?e:Ut}function In(e,t){return we(e)?e:ia(e,t)?[e]:gs(tt(e))}var vc=Ge;function Fn(e,t,s){var E=e.length;return s=s===o?E:s,!t&&s>=E?e:tn(e,t,s)}var Br=ip||function(e){return Pt.clearTimeout(e)};function Wr(e,t){if(t)return e.slice();var s=e.length,E=lr?lr(s):new e.constructor(s);return e.copy(E),E}function Zi(e){var t=new e.constructor(e.byteLength);return new ko(t).set(new ko(e)),t}function yc(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function Sc(e){var t=new e.constructor(e.source,ye.exec(e));return t.lastIndex=e.lastIndex,t}function bc(e){return ho?rt(ho.call(e)):{}}function zr(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function Gr(e,t){if(e!==t){var s=e!==o,E=e===null,R=e===e,k=Vt(e),G=t!==o,K=t===null,Q=t===t,ce=Vt(t);if(!K&&!ce&&!k&&e>t||k&&G&&Q&&!K&&!ce||E&&G&&Q||!s&&Q||!R)return 1;if(!E&&!k&&!ce&&e<t||ce&&s&&R&&!E&&!k||K&&s&&R||!G&&R||!Q)return-1}return 0}function Ec(e,t,s){for(var E=-1,R=e.criteria,k=t.criteria,G=R.length,K=s.length;++E<G;){var Q=Gr(R[E],k[E]);if(Q){if(E>=K)return Q;var ce=s[E];return Q*(ce=="desc"?-1:1)}}return e.index-t.index}function $r(e,t,s,E){for(var R=-1,k=e.length,G=s.length,K=-1,Q=t.length,ce=bt(k-G,0),de=oe(Q+ce),fe=!E;++K<Q;)de[K]=t[K];for(;++R<G;)(fe||R<k)&&(de[s[R]]=e[R]);for(;ce--;)de[K++]=e[R++];return de}function Hr(e,t,s,E){for(var R=-1,k=e.length,G=-1,K=s.length,Q=-1,ce=t.length,de=bt(k-K,0),fe=oe(de+ce),Se=!E;++R<de;)fe[R]=e[R];for(var Ae=R;++Q<ce;)fe[Ae+Q]=t[Q];for(;++G<K;)(Se||R<k)&&(fe[Ae+s[G]]=e[R++]);return fe}function jt(e,t){var s=-1,E=e.length;for(t||(t=oe(E));++s<E;)t[s]=e[s];return t}function un(e,t,s,E){var R=!s;s||(s={});for(var k=-1,G=t.length;++k<G;){var K=t[k],Q=E?E(s[K],e[K],K,s,e):o;Q===o&&(Q=e[K]),R?yn(s,K,Q):vo(s,K,Q)}return s}function Cc(e,t){return un(e,oa(e),t)}function Oc(e,t){return un(e,is(e),t)}function Jo(e,t){return function(s,E){var R=we(s)?Dl:Hp,k=t?t():{};return R(s,e,_e(E,2),k)}}function oo(e){return Ge(function(t,s){var E=-1,R=s.length,k=R>1?s[R-1]:o,G=R>2?s[2]:o;for(k=e.length>3&&typeof k=="function"?(R--,k):o,G&&Lt(s[0],s[1],G)&&(k=R<3?o:k,R=1),t=rt(t);++E<R;){var K=s[E];K&&e(t,K,E,k)}return t})}function Vr(e,t){return function(s,E){if(s==null)return s;if(!kt(s))return e(s,E);for(var R=s.length,k=t?R:-1,G=rt(s);(t?k--:++k<R)&&E(G[k],k,G)!==!1;);return s}}function qr(e){return function(t,s,E){for(var R=-1,k=rt(t),G=E(t),K=G.length;K--;){var Q=G[e?K:++R];if(s(k[Q],Q,k)===!1)break}return t}}function Pc(e,t,s){var E=t&b,R=Co(e);function k(){var G=this&&this!==Pt&&this instanceof k?R:e;return G.apply(E?s:this,arguments)}return k}function Kr(e){return function(t){t=tt(t);var s=Xn(t)?rn(t):o,E=s?s[0]:t.charAt(0),R=s?Fn(s,1).join(""):t.slice(1);return E[e]()+R}}function io(e){return function(t){return Ei(Vs(Hs(t).replace(gl,"")),e,"")}}function Co(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=no(e.prototype),E=e.apply(s,t);return ct(E)?E:s}}function Tc(e,t,s){var E=Co(e);function R(){for(var k=arguments.length,G=oe(k),K=k,Q=ao(R);K--;)G[K]=arguments[K];var ce=k<3&&G[0]!==Q&&G[k-1]!==Q?[]:_n(G,Q);if(k-=ce.length,k<s)return Qr(e,t,Qo,R.placeholder,o,G,ce,o,o,s-k);var de=this&&this!==Pt&&this instanceof R?E:e;return Gt(de,this,G)}return R}function Yr(e){return function(t,s,E){var R=rt(t);if(!kt(t)){var k=_e(s,3);t=Ot(t),s=function(K){return k(R[K],K,R)}}var G=e(t,s,E);return G>-1?R[k?t[G]:G]:o}}function Zr(e){return bn(function(t){var s=t.length,E=s,R=Qt.prototype.thru;for(e&&t.reverse();E--;){var k=t[E];if(typeof k!="function")throw new Jt(p);if(R&&!G&&oi(k)=="wrapper")var G=new Qt([],!0)}for(E=G?E:s;++E<s;){k=t[E];var K=oi(k),Q=K=="wrapper"?ta(k):o;Q&&aa(Q[0])&&Q[1]==(M|N|A|L)&&!Q[4].length&&Q[9]==1?G=G[oi(Q[0])].apply(G,Q[3]):G=k.length==1&&aa(k)?G[K]():G.thru(k)}return function(){var ce=arguments,de=ce[0];if(G&&ce.length==1&&we(de))return G.plant(de).value();for(var fe=0,Se=s?t[fe].apply(this,ce):de;++fe<s;)Se=t[fe].call(this,Se);return Se}})}function Qo(e,t,s,E,R,k,G,K,Q,ce){var de=t&M,fe=t&b,Se=t&T,Ae=t&(N|P),Me=t&_,We=Se?o:Co(e);function Le(){for(var He=arguments.length,Ye=oe(He),qt=He;qt--;)Ye[qt]=arguments[qt];if(Ae)var xt=ao(Le),Kt=kl(Ye,xt);if(E&&(Ye=$r(Ye,E,R,Ae)),k&&(Ye=Hr(Ye,k,G,Ae)),He-=Kt,Ae&&He<ce){var gt=_n(Ye,xt);return Qr(e,t,Qo,Le.placeholder,s,Ye,gt,K,Q,ce-He)}var pn=fe?s:this,Pn=Se?pn[e]:e;return He=Ye.length,K?Ye=Hc(Ye,K):Me&&He>1&&Ye.reverse(),de&&Q<He&&(Ye.length=Q),this&&this!==Pt&&this instanceof Le&&(Pn=We||Co(Pn)),Pn.apply(pn,Ye)}return Le}function Xr(e,t){return function(s,E){return Qp(s,e,t(E),{})}}function ei(e,t){return function(s,E){var R;if(s===o&&E===o)return t;if(s!==o&&(R=s),E!==o){if(R===o)return E;typeof s=="string"||typeof E=="string"?(s=Ht(s),E=Ht(E)):(s=jr(s),E=jr(E)),R=e(s,E)}return R}}function Xi(e){return bn(function(t){return t=pt(t,$t(_e())),Ge(function(s){var E=this;return e(t,function(R){return Gt(R,E,s)})})})}function ti(e,t){t=t===o?" ":Ht(t);var s=t.length;if(s<2)return s?$i(t,e):t;var E=$i(t,Wo(e/Jn(t)));return Xn(t)?Fn(rn(E),0,e).join(""):E.slice(0,e)}function Ac(e,t,s,E){var R=t&b,k=Co(e);function G(){for(var K=-1,Q=arguments.length,ce=-1,de=E.length,fe=oe(de+Q),Se=this&&this!==Pt&&this instanceof G?k:e;++ce<de;)fe[ce]=E[ce];for(;Q--;)fe[ce++]=arguments[++K];return Gt(Se,R?s:this,fe)}return G}function Jr(e){return function(t,s,E){return E&&typeof E!="number"&&Lt(t,s,E)&&(s=E=o),t=On(t),s===o?(s=t,t=0):s=On(s),E=E===o?t<s?1:-1:On(E),dc(t,s,E,e)}}function ni(e){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=on(t),s=on(s)),e(t,s)}}function Qr(e,t,s,E,R,k,G,K,Q,ce){var de=t&N,fe=de?G:o,Se=de?o:G,Ae=de?k:o,Me=de?o:k;t|=de?A:D,t&=~(de?D:A),t&C||(t&=~(b|T));var We=[e,t,R,Ae,fe,Me,Se,K,Q,ce],Le=s.apply(o,We);return aa(e)&&ds(Le,We),Le.placeholder=E,us(Le,e,t)}function Ji(e){var t=St[e];return function(s,E){if(s=on(s),E=E==null?0:Rt(Be(E),292),E&&ur(s)){var R=(tt(s)+"e").split("e"),k=t(R[0]+"e"+(+R[1]+E));return R=(tt(k)+"e").split("e"),+(R[0]+"e"+(+R[1]-E))}return t(s)}}var Nc=eo&&1/_o(new eo([,-0]))[1]==q?function(e){return new eo(e)}:ba;function es(e){return function(t){var s=_t(t);return s==ze?Di(t):s==ve?$l(t):jl(t,e(t))}}function Sn(e,t,s,E,R,k,G,K){var Q=t&T;if(!Q&&typeof e!="function")throw new Jt(p);var ce=E?E.length:0;if(ce||(t&=~(A|D),E=R=o),G=G===o?G:bt(Be(G),0),K=K===o?K:Be(K),ce-=R?R.length:0,t&D){var de=E,fe=R;E=R=o}var Se=Q?o:ta(e),Ae=[e,t,s,E,R,de,fe,k,G,K];if(Se&&zc(Ae,Se),e=Ae[0],t=Ae[1],s=Ae[2],E=Ae[3],R=Ae[4],K=Ae[9]=Ae[9]===o?Q?0:e.length:bt(Ae[9]-ce,0),!K&&t&(N|P)&&(t&=~(N|P)),!t||t==b)var Me=Pc(e,t,s);else t==N||t==P?Me=Tc(e,t,K):(t==A||t==(b|A))&&!R.length?Me=Ac(e,t,s,E):Me=Qo.apply(o,Ae);var We=Se?Ir:ds;return us(We(Me,Ae),e,t)}function ts(e,t,s,E){return e===o||ln(e,Qn[s])&&!nt.call(E,s)?t:e}function ns(e,t,s,E,R,k){return ct(e)&&ct(t)&&(k.set(t,e),Yo(e,t,o,ns,k),k.delete(t)),e}function Dc(e){return To(e)?o:e}function os(e,t,s,E,R,k){var G=s&S,K=e.length,Q=t.length;if(K!=Q&&!(G&&Q>K))return!1;var ce=k.get(e),de=k.get(t);if(ce&&de)return ce==t&&de==e;var fe=-1,Se=!0,Ae=s&v?new zn:o;for(k.set(e,t),k.set(t,e);++fe<K;){var Me=e[fe],We=t[fe];if(E)var Le=G?E(We,Me,fe,t,e,k):E(Me,We,fe,e,t,k);if(Le!==o){if(Le)continue;Se=!1;break}if(Ae){if(!Ci(t,function(He,Ye){if(!co(Ae,Ye)&&(Me===He||R(Me,He,s,E,k)))return Ae.push(Ye)})){Se=!1;break}}else if(!(Me===We||R(Me,We,s,E,k))){Se=!1;break}}return k.delete(e),k.delete(t),Se}function Rc(e,t,s,E,R,k,G){switch(s){case $e:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Pe:return!(e.byteLength!=t.byteLength||!k(new ko(e),new ko(t)));case ut:case ht:case Bt:return ln(+e,+t);case Re:return e.name==t.name&&e.message==t.message;case ae:case he:return e==t+"";case ze:var K=Di;case ve:var Q=E&S;if(K||(K=_o),e.size!=t.size&&!Q)return!1;var ce=G.get(e);if(ce)return ce==t;E|=v,G.set(e,t);var de=os(K(e),K(t),E,R,k,G);return G.delete(e),de;case Ee:if(ho)return ho.call(e)==ho.call(t)}return!1}function _c(e,t,s,E,R,k){var G=s&S,K=Qi(e),Q=K.length,ce=Qi(t),de=ce.length;if(Q!=de&&!G)return!1;for(var fe=Q;fe--;){var Se=K[fe];if(!(G?Se in t:nt.call(t,Se)))return!1}var Ae=k.get(e),Me=k.get(t);if(Ae&&Me)return Ae==t&&Me==e;var We=!0;k.set(e,t),k.set(t,e);for(var Le=G;++fe<Q;){Se=K[fe];var He=e[Se],Ye=t[Se];if(E)var qt=G?E(Ye,He,Se,t,e,k):E(He,Ye,Se,e,t,k);if(!(qt===o?He===Ye||R(He,Ye,s,E,k):qt)){We=!1;break}Le||(Le=Se=="constructor")}if(We&&!Le){var xt=e.constructor,Kt=t.constructor;xt!=Kt&&"constructor"in e&&"constructor"in t&&!(typeof xt=="function"&&xt instanceof xt&&typeof Kt=="function"&&Kt instanceof Kt)&&(We=!1)}return k.delete(e),k.delete(t),We}function bn(e){return sa(ps(e,o,ys),e+"")}function Qi(e){return Or(e,Ot,oa)}function ea(e){return Or(e,wt,is)}var ta=Go?function(e){return Go.get(e)}:ba;function oi(e){for(var t=e.name+"",s=to[t],E=nt.call(to,t)?s.length:0;E--;){var R=s[E],k=R.func;if(k==null||k==e)return R.name}return t}function ao(e){var t=nt.call(I,"placeholder")?I:e;return t.placeholder}function _e(){var e=I.iteratee||ya;return e=e===ya?Ar:e,arguments.length?e(arguments[0],arguments[1]):e}function ii(e,t){var s=e.__data__;return wc(t)?s[typeof t=="string"?"string":"hash"]:s.map}function na(e){for(var t=Ot(e),s=t.length;s--;){var E=t[s],R=e[E];t[s]=[E,R,ss(R)]}return t}function Hn(e,t){var s=Wl(e,t);return Tr(s)?s:o}function Mc(e){var t=nt.call(e,Bn),s=e[Bn];try{e[Bn]=o;var E=!0}catch(k){}var R=Fo.call(e);return E&&(t?e[Bn]=s:delete e[Bn]),R}var oa=_i?function(e){return e==null?[]:(e=rt(e),Dn(_i(e),function(t){return cr.call(e,t)}))}:Ea,is=_i?function(e){for(var t=[];e;)Rn(t,oa(e)),e=wo(e);return t}:Ea,_t=Mt;(Mi&&_t(new Mi(new ArrayBuffer(1)))!=$e||fo&&_t(new fo)!=ze||Li&&_t(Li.resolve())!=Ne||eo&&_t(new eo)!=ve||go&&_t(new go)!=Ke)&&(_t=function(e){var t=Mt(e),s=t==pe?e.constructor:o,E=s?Vn(s):"";if(E)switch(E){case fp:return $e;case gp:return ze;case mp:return Ne;case hp:return ve;case vp:return Ke}return t});function Lc(e,t,s){for(var E=-1,R=s.length;++E<R;){var k=s[E],G=k.size;switch(k.type){case"drop":e+=G;break;case"dropRight":t-=G;break;case"take":t=Rt(t,e+G);break;case"takeRight":e=bt(e,t-G);break}}return{start:e,end:t}}function xc(e){var t=e.match(ue);return t?t[1].split(me):[]}function as(e,t,s){t=In(t,e);for(var E=-1,R=t.length,k=!1;++E<R;){var G=fn(t[E]);if(!(k=e!=null&&s(e,G)))break;e=e[G]}return k||++E!=R?k:(R=e==null?0:e.length,!!R&&di(R)&&En(G,R)&&(we(e)||qn(e)))}function Ic(e){var t=e.length,s=new e.constructor(t);return t&&typeof e[0]=="string"&&nt.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function rs(e){return typeof e.constructor=="function"&&!Oo(e)?no(wo(e)):{}}function Fc(e,t,s){var E=e.constructor;switch(t){case Pe:return Zi(e);case ut:case ht:return new E(+e);case $e:return yc(e,s);case Qe:case Xe:case Wt:case It:case Nt:case Tn:case an:case zt:case gn:return zr(e,s);case ze:return new E;case Bt:case he:return new E(e);case ae:return Sc(e);case ve:return new E;case Ee:return bc(e)}}function jc(e,t){var s=t.length;if(!s)return e;var E=s-1;return t[E]=(s>1?"& ":"")+t[E],t=t.join(s>2?", ":" "),e.replace(se,`{
/* [wrapped with `+t+`] */
`)}function kc(e){return we(e)||qn(e)||!!(dr&&e&&e[dr])}function En(e,t){var s=typeof e;return t=t==null?V:t,!!t&&(s=="number"||s!="symbol"&&Yt.test(e))&&e>-1&&e%1==0&&e<t}function Lt(e,t,s){if(!ct(s))return!1;var E=typeof t;return(E=="number"?kt(s)&&En(t,s.length):E=="string"&&t in s)?ln(s[t],e):!1}function ia(e,t){if(we(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||Vt(e)?!0:$.test(e)||!F.test(e)||t!=null&&e in rt(t)}function wc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function aa(e){var t=oi(e),s=I[t];if(typeof s!="function"||!(t in qe.prototype))return!1;if(e===s)return!0;var E=ta(s);return!!E&&e===E[0]}function Uc(e){return!!sr&&sr in e}var Bc=xo?Cn:Ca;function Oo(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||Qn;return e===s}function ss(e){return e===e&&!ct(e)}function ls(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==o||e in rt(s))}}function Wc(e){var t=pi(e,function(E){return s.size===m&&s.clear(),E}),s=t.cache;return t}function zc(e,t){var s=e[1],E=t[1],R=s|E,k=R<(b|T|M),G=E==M&&s==N||E==M&&s==L&&e[7].length<=t[8]||E==(M|L)&&t[7].length<=t[8]&&s==N;if(!(k||G))return e;E&b&&(e[2]=t[2],R|=s&b?0:C);var K=t[3];if(K){var Q=e[3];e[3]=Q?$r(Q,K,t[4]):K,e[4]=Q?_n(e[3],i):t[4]}return K=t[5],K&&(Q=e[5],e[5]=Q?Hr(Q,K,t[6]):K,e[6]=Q?_n(e[5],i):t[6]),K=t[7],K&&(e[7]=K),E&M&&(e[8]=e[8]==null?t[8]:Rt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=R,e}function Gc(e){var t=[];if(e!=null)for(var s in rt(e))t.push(s);return t}function $c(e){return Fo.call(e)}function ps(e,t,s){return t=bt(t===o?e.length-1:t,0),function(){for(var E=arguments,R=-1,k=bt(E.length-t,0),G=oe(k);++R<k;)G[R]=E[t+R];R=-1;for(var K=oe(t+1);++R<t;)K[R]=E[R];return K[t]=s(G),Gt(e,this,K)}}function cs(e,t){return t.length<2?e:$n(e,tn(t,0,-1))}function Hc(e,t){for(var s=e.length,E=Rt(t.length,s),R=jt(e);E--;){var k=t[E];e[E]=En(k,s)?R[k]:o}return e}function ra(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var ds=fs(Ir),Po=rp||function(e,t){return Pt.setTimeout(e,t)},sa=fs(gc);function us(e,t,s){var E=t+"";return sa(e,jc(E,Vc(xc(E),s)))}function fs(e){var t=0,s=0;return function(){var E=cp(),R=W-(E-s);if(s=E,R>0){if(++t>=j)return arguments[0]}else t=0;return e.apply(o,arguments)}}function ai(e,t){var s=-1,E=e.length,R=E-1;for(t=t===o?E:t;++s<t;){var k=Gi(s,R),G=e[k];e[k]=e[s],e[s]=G}return e.length=t,e}var gs=Wc(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Z,function(s,E,R,k){t.push(R?k.replace(xe,"$1"):E||s)}),t});function fn(e){if(typeof e=="string"||Vt(e))return e;var t=e+"";return t=="0"&&1/e==-q?"-0":t}function Vn(e){if(e!=null){try{return Io.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Vc(e,t){return Xt(be,function(s){var E="_."+s[0];t&s[1]&&!Do(e,E)&&e.push(E)}),e.sort()}function ms(e){if(e instanceof qe)return e.clone();var t=new Qt(e.__wrapped__,e.__chain__);return t.__actions__=jt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function qc(e,t,s){(s?Lt(e,t,s):t===o)?t=1:t=bt(Be(t),0);var E=e==null?0:e.length;if(!E||t<1)return[];for(var R=0,k=0,G=oe(Wo(E/t));R<E;)G[k++]=tn(e,R,R+=t);return G}function Kc(e){for(var t=-1,s=e==null?0:e.length,E=0,R=[];++t<s;){var k=e[t];k&&(R[E++]=k)}return R}function Yc(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),s=arguments[0],E=e;E--;)t[E-1]=arguments[E];return Rn(we(s)?jt(s):[s],Tt(t,1))}var Zc=Ge(function(e,t){return ft(e)?yo(e,Tt(t,1,ft,!0)):[]}),Xc=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?yo(e,Tt(t,1,ft,!0),_e(s,2)):[]}),Jc=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?yo(e,Tt(t,1,ft,!0),o,s):[]});function Qc(e,t,s){var E=e==null?0:e.length;return E?(t=s||t===o?1:Be(t),tn(e,t<0?0:t,E)):[]}function ed(e,t,s){var E=e==null?0:e.length;return E?(t=s||t===o?1:Be(t),t=E-t,tn(e,0,t<0?0:t)):[]}function td(e,t){return e&&e.length?Xo(e,_e(t,3),!0,!0):[]}function nd(e,t){return e&&e.length?Xo(e,_e(t,3),!0):[]}function od(e,t,s,E){var R=e==null?0:e.length;return R?(s&&typeof s!="number"&&Lt(e,t,s)&&(s=0,E=R),Yp(e,t,s,E)):[]}function hs(e,t,s){var E=e==null?0:e.length;if(!E)return-1;var R=s==null?0:Be(s);return R<0&&(R=bt(E+R,0)),Ro(e,_e(t,3),R)}function vs(e,t,s){var E=e==null?0:e.length;if(!E)return-1;var R=E-1;return s!==o&&(R=Be(s),R=s<0?bt(E+R,0):Rt(R,E-1)),Ro(e,_e(t,3),R,!0)}function ys(e){var t=e==null?0:e.length;return t?Tt(e,1):[]}function id(e){var t=e==null?0:e.length;return t?Tt(e,q):[]}function ad(e,t){var s=e==null?0:e.length;return s?(t=t===o?1:Be(t),Tt(e,t)):[]}function rd(e){for(var t=-1,s=e==null?0:e.length,E={};++t<s;){var R=e[t];E[R[0]]=R[1]}return E}function Ss(e){return e&&e.length?e[0]:o}function sd(e,t,s){var E=e==null?0:e.length;if(!E)return-1;var R=s==null?0:Be(s);return R<0&&(R=bt(E+R,0)),Zn(e,t,R)}function ld(e){var t=e==null?0:e.length;return t?tn(e,0,-1):[]}var pd=Ge(function(e){var t=pt(e,Ki);return t.length&&t[0]===e[0]?wi(t):[]}),cd=Ge(function(e){var t=nn(e),s=pt(e,Ki);return t===nn(s)?t=o:s.pop(),s.length&&s[0]===e[0]?wi(s,_e(t,2)):[]}),dd=Ge(function(e){var t=nn(e),s=pt(e,Ki);return t=typeof t=="function"?t:o,t&&s.pop(),s.length&&s[0]===e[0]?wi(s,o,t):[]});function ud(e,t){return e==null?"":lp.call(e,t)}function nn(e){var t=e==null?0:e.length;return t?e[t-1]:o}function fd(e,t,s){var E=e==null?0:e.length;if(!E)return-1;var R=E;return s!==o&&(R=Be(s),R=R<0?bt(E+R,0):Rt(R,E-1)),t===t?Vl(e,t,R):Ro(e,Qa,R,!0)}function gd(e,t){return e&&e.length?_r(e,Be(t)):o}var md=Ge(bs);function bs(e,t){return e&&e.length&&t&&t.length?zi(e,t):e}function hd(e,t,s){return e&&e.length&&t&&t.length?zi(e,t,_e(s,2)):e}function vd(e,t,s){return e&&e.length&&t&&t.length?zi(e,t,o,s):e}var yd=bn(function(e,t){var s=e==null?0:e.length,E=Ii(e,t);return xr(e,pt(t,function(R){return En(R,s)?+R:R}).sort(Gr)),E});function Sd(e,t){var s=[];if(!(e&&e.length))return s;var E=-1,R=[],k=e.length;for(t=_e(t,3);++E<k;){var G=e[E];t(G,E,e)&&(s.push(G),R.push(E))}return xr(e,R),s}function la(e){return e==null?e:up.call(e)}function bd(e,t,s){var E=e==null?0:e.length;return E?(s&&typeof s!="number"&&Lt(e,t,s)?(t=0,s=E):(t=t==null?0:Be(t),s=s===o?E:Be(s)),tn(e,t,s)):[]}function Ed(e,t){return Zo(e,t)}function Cd(e,t,s){return Hi(e,t,_e(s,2))}function Od(e,t){var s=e==null?0:e.length;if(s){var E=Zo(e,t);if(E<s&&ln(e[E],t))return E}return-1}function Pd(e,t){return Zo(e,t,!0)}function Td(e,t,s){return Hi(e,t,_e(s,2),!0)}function Ad(e,t){var s=e==null?0:e.length;if(s){var E=Zo(e,t,!0)-1;if(ln(e[E],t))return E}return-1}function Nd(e){return e&&e.length?Fr(e):[]}function Dd(e,t){return e&&e.length?Fr(e,_e(t,2)):[]}function Rd(e){var t=e==null?0:e.length;return t?tn(e,1,t):[]}function _d(e,t,s){return e&&e.length?(t=s||t===o?1:Be(t),tn(e,0,t<0?0:t)):[]}function Md(e,t,s){var E=e==null?0:e.length;return E?(t=s||t===o?1:Be(t),t=E-t,tn(e,t<0?0:t,E)):[]}function Ld(e,t){return e&&e.length?Xo(e,_e(t,3),!1,!0):[]}function xd(e,t){return e&&e.length?Xo(e,_e(t,3)):[]}var Id=Ge(function(e){return xn(Tt(e,1,ft,!0))}),Fd=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),xn(Tt(e,1,ft,!0),_e(t,2))}),jd=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,xn(Tt(e,1,ft,!0),o,t)});function kd(e){return e&&e.length?xn(e):[]}function wd(e,t){return e&&e.length?xn(e,_e(t,2)):[]}function Ud(e,t){return t=typeof t=="function"?t:o,e&&e.length?xn(e,o,t):[]}function pa(e){if(!(e&&e.length))return[];var t=0;return e=Dn(e,function(s){if(ft(s))return t=bt(s.length,t),!0}),Ai(t,function(s){return pt(e,Oi(s))})}function Es(e,t){if(!(e&&e.length))return[];var s=pa(e);return t==null?s:pt(s,function(E){return Gt(t,o,E)})}var Bd=Ge(function(e,t){return ft(e)?yo(e,t):[]}),Wd=Ge(function(e){return qi(Dn(e,ft))}),zd=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),qi(Dn(e,ft),_e(t,2))}),Gd=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,qi(Dn(e,ft),o,t)}),$d=Ge(pa);function Hd(e,t){return Ur(e||[],t||[],vo)}function Vd(e,t){return Ur(e||[],t||[],Eo)}var qd=Ge(function(e){var t=e.length,s=t>1?e[t-1]:o;return s=typeof s=="function"?(e.pop(),s):o,Es(e,s)});function Cs(e){var t=I(e);return t.__chain__=!0,t}function Kd(e,t){return t(e),e}function ri(e,t){return t(e)}var Yd=bn(function(e){var t=e.length,s=t?e[0]:0,E=this.__wrapped__,R=function(k){return Ii(k,e)};return t>1||this.__actions__.length||!(E instanceof qe)||!En(s)?this.thru(R):(E=E.slice(s,+s+(t?1:0)),E.__actions__.push({func:ri,args:[R],thisArg:o}),new Qt(E,this.__chain__).thru(function(k){return t&&!k.length&&k.push(o),k}))});function Zd(){return Cs(this)}function Xd(){return new Qt(this.value(),this.__chain__)}function Jd(){this.__values__===o&&(this.__values__=js(this.value()));var e=this.__index__>=this.__values__.length,t=e?o:this.__values__[this.__index__++];return{done:e,value:t}}function Qd(){return this}function eu(e){for(var t,s=this;s instanceof Ho;){var E=ms(s);E.__index__=0,E.__values__=o,t?R.__wrapped__=E:t=E;var R=E;s=s.__wrapped__}return R.__wrapped__=e,t}function tu(){var e=this.__wrapped__;if(e instanceof qe){var t=e;return this.__actions__.length&&(t=new qe(this)),t=t.reverse(),t.__actions__.push({func:ri,args:[la],thisArg:o}),new Qt(t,this.__chain__)}return this.thru(la)}function nu(){return wr(this.__wrapped__,this.__actions__)}var ou=Jo(function(e,t,s){nt.call(e,s)?++e[s]:yn(e,s,1)});function iu(e,t,s){var E=we(e)?Xa:Kp;return s&&Lt(e,t,s)&&(t=o),E(e,_e(t,3))}function au(e,t){var s=we(e)?Dn:Er;return s(e,_e(t,3))}var ru=Yr(hs),su=Yr(vs);function lu(e,t){return Tt(si(e,t),1)}function pu(e,t){return Tt(si(e,t),q)}function cu(e,t,s){return s=s===o?1:Be(s),Tt(si(e,t),s)}function Os(e,t){var s=we(e)?Xt:Ln;return s(e,_e(t,3))}function Ps(e,t){var s=we(e)?Rl:br;return s(e,_e(t,3))}var du=Jo(function(e,t,s){nt.call(e,s)?e[s].push(t):yn(e,s,[t])});function uu(e,t,s,E){e=kt(e)?e:so(e),s=s&&!E?Be(s):0;var R=e.length;return s<0&&(s=bt(R+s,0)),ui(e)?s<=R&&e.indexOf(t,s)>-1:!!R&&Zn(e,t,s)>-1}var fu=Ge(function(e,t,s){var E=-1,R=typeof t=="function",k=kt(e)?oe(e.length):[];return Ln(e,function(G){k[++E]=R?Gt(t,G,s):So(G,t,s)}),k}),gu=Jo(function(e,t,s){yn(e,s,t)});function si(e,t){var s=we(e)?pt:Nr;return s(e,_e(t,3))}function mu(e,t,s,E){return e==null?[]:(we(t)||(t=t==null?[]:[t]),s=E?o:s,we(s)||(s=s==null?[]:[s]),Mr(e,t,s))}var hu=Jo(function(e,t,s){e[s?0:1].push(t)},function(){return[[],[]]});function vu(e,t,s){var E=we(e)?Ei:tr,R=arguments.length<3;return E(e,_e(t,4),s,R,Ln)}function yu(e,t,s){var E=we(e)?_l:tr,R=arguments.length<3;return E(e,_e(t,4),s,R,br)}function Su(e,t){var s=we(e)?Dn:Er;return s(e,ci(_e(t,3)))}function bu(e){var t=we(e)?hr:uc;return t(e)}function Eu(e,t,s){(s?Lt(e,t,s):t===o)?t=1:t=Be(t);var E=we(e)?Gp:fc;return E(e,t)}function Cu(e){var t=we(e)?$p:mc;return t(e)}function Ou(e){if(e==null)return 0;if(kt(e))return ui(e)?Jn(e):e.length;var t=_t(e);return t==ze||t==ve?e.size:Bi(e).length}function Pu(e,t,s){var E=we(e)?Ci:hc;return s&&Lt(e,t,s)&&(t=o),E(e,_e(t,3))}var Tu=Ge(function(e,t){if(e==null)return[];var s=t.length;return s>1&&Lt(e,t[0],t[1])?t=[]:s>2&&Lt(t[0],t[1],t[2])&&(t=[t[0]]),Mr(e,Tt(t,1),[])}),li=ap||function(){return Pt.Date.now()};function Au(e,t){if(typeof t!="function")throw new Jt(p);return e=Be(e),function(){if(--e<1)return t.apply(this,arguments)}}function Ts(e,t,s){return t=s?o:t,t=e&&t==null?e.length:t,Sn(e,M,o,o,o,o,t)}function As(e,t){var s;if(typeof t!="function")throw new Jt(p);return e=Be(e),function(){return--e>0&&(s=t.apply(this,arguments)),e<=1&&(t=o),s}}var ca=Ge(function(e,t,s){var E=b;if(s.length){var R=_n(s,ao(ca));E|=A}return Sn(e,E,t,s,R)}),Ns=Ge(function(e,t,s){var E=b|T;if(s.length){var R=_n(s,ao(Ns));E|=A}return Sn(t,E,e,s,R)});function Ds(e,t,s){t=s?o:t;var E=Sn(e,N,o,o,o,o,o,t);return E.placeholder=Ds.placeholder,E}function Rs(e,t,s){t=s?o:t;var E=Sn(e,P,o,o,o,o,o,t);return E.placeholder=Rs.placeholder,E}function _s(e,t,s){var E,R,k,G,K,Q,ce=0,de=!1,fe=!1,Se=!0;if(typeof e!="function")throw new Jt(p);t=on(t)||0,ct(s)&&(de=!!s.leading,fe="maxWait"in s,k=fe?bt(on(s.maxWait)||0,t):k,Se="trailing"in s?!!s.trailing:Se);function Ae(gt){var pn=E,Pn=R;return E=R=o,ce=gt,G=e.apply(Pn,pn),G}function Me(gt){return ce=gt,K=Po(He,t),de?Ae(gt):G}function We(gt){var pn=gt-Q,Pn=gt-ce,Ys=t-pn;return fe?Rt(Ys,k-Pn):Ys}function Le(gt){var pn=gt-Q,Pn=gt-ce;return Q===o||pn>=t||pn<0||fe&&Pn>=k}function He(){var gt=li();if(Le(gt))return Ye(gt);K=Po(He,We(gt))}function Ye(gt){return K=o,Se&&E?Ae(gt):(E=R=o,G)}function qt(){K!==o&&Br(K),ce=0,E=Q=R=K=o}function xt(){return K===o?G:Ye(li())}function Kt(){var gt=li(),pn=Le(gt);if(E=arguments,R=this,Q=gt,pn){if(K===o)return Me(Q);if(fe)return Br(K),K=Po(He,t),Ae(Q)}return K===o&&(K=Po(He,t)),G}return Kt.cancel=qt,Kt.flush=xt,Kt}var Nu=Ge(function(e,t){return Sr(e,1,t)}),Du=Ge(function(e,t,s){return Sr(e,on(t)||0,s)});function Ru(e){return Sn(e,_)}function pi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Jt(p);var s=function(){var E=arguments,R=t?t.apply(this,E):E[0],k=s.cache;if(k.has(R))return k.get(R);var G=e.apply(this,E);return s.cache=k.set(R,G)||k,G};return s.cache=new(pi.Cache||vn),s}pi.Cache=vn;function ci(e){if(typeof e!="function")throw new Jt(p);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function _u(e){return As(2,e)}var Mu=vc(function(e,t){t=t.length==1&&we(t[0])?pt(t[0],$t(_e())):pt(Tt(t,1),$t(_e()));var s=t.length;return Ge(function(E){for(var R=-1,k=Rt(E.length,s);++R<k;)E[R]=t[R].call(this,E[R]);return Gt(e,this,E)})}),da=Ge(function(e,t){var s=_n(t,ao(da));return Sn(e,A,o,t,s)}),Ms=Ge(function(e,t){var s=_n(t,ao(Ms));return Sn(e,D,o,t,s)}),Lu=bn(function(e,t){return Sn(e,L,o,o,o,t)});function xu(e,t){if(typeof e!="function")throw new Jt(p);return t=t===o?t:Be(t),Ge(e,t)}function Iu(e,t){if(typeof e!="function")throw new Jt(p);return t=t==null?0:bt(Be(t),0),Ge(function(s){var E=s[t],R=Fn(s,0,t);return E&&Rn(R,E),Gt(e,this,R)})}function Fu(e,t,s){var E=!0,R=!0;if(typeof e!="function")throw new Jt(p);return ct(s)&&(E="leading"in s?!!s.leading:E,R="trailing"in s?!!s.trailing:R),_s(e,t,{leading:E,maxWait:t,trailing:R})}function ju(e){return Ts(e,1)}function ku(e,t){return da(Yi(t),e)}function wu(){if(!arguments.length)return[];var e=arguments[0];return we(e)?e:[e]}function Uu(e){return en(e,f)}function Bu(e,t){return t=typeof t=="function"?t:o,en(e,f,t)}function Wu(e){return en(e,h|f)}function zu(e,t){return t=typeof t=="function"?t:o,en(e,h|f,t)}function Gu(e,t){return t==null||yr(e,t,Ot(t))}function ln(e,t){return e===t||e!==e&&t!==t}var $u=ni(ki),Hu=ni(function(e,t){return e>=t}),qn=Pr(function(){return arguments}())?Pr:function(e){return dt(e)&&nt.call(e,"callee")&&!cr.call(e,"callee")},we=oe.isArray,Vu=Ha?$t(Ha):ec;function kt(e){return e!=null&&di(e.length)&&!Cn(e)}function ft(e){return dt(e)&&kt(e)}function qu(e){return e===!0||e===!1||dt(e)&&Mt(e)==ut}var jn=sp||Ca,Ku=Va?$t(Va):tc;function Yu(e){return dt(e)&&e.nodeType===1&&!To(e)}function Zu(e){if(e==null)return!0;if(kt(e)&&(we(e)||typeof e=="string"||typeof e.splice=="function"||jn(e)||ro(e)||qn(e)))return!e.length;var t=_t(e);if(t==ze||t==ve)return!e.size;if(Oo(e))return!Bi(e).length;for(var s in e)if(nt.call(e,s))return!1;return!0}function Xu(e,t){return bo(e,t)}function Ju(e,t,s){s=typeof s=="function"?s:o;var E=s?s(e,t):o;return E===o?bo(e,t,o,s):!!E}function ua(e){if(!dt(e))return!1;var t=Mt(e);return t==Re||t==At||typeof e.message=="string"&&typeof e.name=="string"&&!To(e)}function Qu(e){return typeof e=="number"&&ur(e)}function Cn(e){if(!ct(e))return!1;var t=Mt(e);return t==Et||t==Ue||t==mt||t==De}function Ls(e){return typeof e=="number"&&e==Be(e)}function di(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=V}function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function dt(e){return e!=null&&typeof e=="object"}var xs=qa?$t(qa):oc;function ef(e,t){return e===t||Ui(e,t,na(t))}function tf(e,t,s){return s=typeof s=="function"?s:o,Ui(e,t,na(t),s)}function nf(e){return Is(e)&&e!=+e}function of(e){if(Bc(e))throw new ke(d);return Tr(e)}function af(e){return e===null}function rf(e){return e==null}function Is(e){return typeof e=="number"||dt(e)&&Mt(e)==Bt}function To(e){if(!dt(e)||Mt(e)!=pe)return!1;var t=wo(e);if(t===null)return!0;var s=nt.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&Io.call(s)==tp}var fa=Ka?$t(Ka):ic;function sf(e){return Ls(e)&&e>=-V&&e<=V}var Fs=Ya?$t(Ya):ac;function ui(e){return typeof e=="string"||!we(e)&&dt(e)&&Mt(e)==he}function Vt(e){return typeof e=="symbol"||dt(e)&&Mt(e)==Ee}var ro=Za?$t(Za):rc;function lf(e){return e===o}function pf(e){return dt(e)&&_t(e)==Ke}function cf(e){return dt(e)&&Mt(e)==Je}var df=ni(Wi),uf=ni(function(e,t){return e<=t});function js(e){if(!e)return[];if(kt(e))return ui(e)?rn(e):jt(e);if(uo&&e[uo])return Gl(e[uo]());var t=_t(e),s=t==ze?Di:t==ve?_o:so;return s(e)}function On(e){if(!e)return e===0?e:0;if(e=on(e),e===q||e===-q){var t=e<0?-1:1;return t*ne}return e===e?e:0}function Be(e){var t=On(e),s=t%1;return t===t?s?t-s:t:0}function ks(e){return e?Gn(Be(e),0,le):0}function on(e){if(typeof e=="number")return e;if(Vt(e))return ie;if(ct(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ct(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=nr(e);var s=yt.test(e);return s||at.test(e)?Al(e.slice(2),s?2:8):Fe.test(e)?ie:+e}function ws(e){return un(e,wt(e))}function ff(e){return e?Gn(Be(e),-V,V):e===0?e:0}function tt(e){return e==null?"":Ht(e)}var gf=oo(function(e,t){if(Oo(t)||kt(t)){un(t,Ot(t),e);return}for(var s in t)nt.call(t,s)&&vo(e,s,t[s])}),Us=oo(function(e,t){un(t,wt(t),e)}),fi=oo(function(e,t,s,E){un(t,wt(t),e,E)}),mf=oo(function(e,t,s,E){un(t,Ot(t),e,E)}),hf=bn(Ii);function vf(e,t){var s=no(e);return t==null?s:vr(s,t)}var yf=Ge(function(e,t){e=rt(e);var s=-1,E=t.length,R=E>2?t[2]:o;for(R&&Lt(t[0],t[1],R)&&(E=1);++s<E;)for(var k=t[s],G=wt(k),K=-1,Q=G.length;++K<Q;){var ce=G[K],de=e[ce];(de===o||ln(de,Qn[ce])&&!nt.call(e,ce))&&(e[ce]=k[ce])}return e}),Sf=Ge(function(e){return e.push(o,ns),Gt(Bs,o,e)});function bf(e,t){return Ja(e,_e(t,3),dn)}function Ef(e,t){return Ja(e,_e(t,3),ji)}function Cf(e,t){return e==null?e:Fi(e,_e(t,3),wt)}function Of(e,t){return e==null?e:Cr(e,_e(t,3),wt)}function Pf(e,t){return e&&dn(e,_e(t,3))}function Tf(e,t){return e&&ji(e,_e(t,3))}function Af(e){return e==null?[]:Ko(e,Ot(e))}function Nf(e){return e==null?[]:Ko(e,wt(e))}function ga(e,t,s){var E=e==null?o:$n(e,t);return E===o?s:E}function Df(e,t){return e!=null&&as(e,t,Zp)}function ma(e,t){return e!=null&&as(e,t,Xp)}var Rf=Xr(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Fo.call(t)),e[t]=s},va(Ut)),_f=Xr(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Fo.call(t)),nt.call(e,t)?e[t].push(s):e[t]=[s]},_e),Mf=Ge(So);function Ot(e){return kt(e)?mr(e):Bi(e)}function wt(e){return kt(e)?mr(e,!0):sc(e)}function Lf(e,t){var s={};return t=_e(t,3),dn(e,function(E,R,k){yn(s,t(E,R,k),E)}),s}function xf(e,t){var s={};return t=_e(t,3),dn(e,function(E,R,k){yn(s,R,t(E,R,k))}),s}var If=oo(function(e,t,s){Yo(e,t,s)}),Bs=oo(function(e,t,s,E){Yo(e,t,s,E)}),Ff=bn(function(e,t){var s={};if(e==null)return s;var E=!1;t=pt(t,function(k){return k=In(k,e),E||(E=k.length>1),k}),un(e,ea(e),s),E&&(s=en(s,h|u|f,Dc));for(var R=t.length;R--;)Vi(s,t[R]);return s});function jf(e,t){return Ws(e,ci(_e(t)))}var kf=bn(function(e,t){return e==null?{}:pc(e,t)});function Ws(e,t){if(e==null)return{};var s=pt(ea(e),function(E){return[E]});return t=_e(t),Lr(e,s,function(E,R){return t(E,R[0])})}function wf(e,t,s){t=In(t,e);var E=-1,R=t.length;for(R||(R=1,e=o);++E<R;){var k=e==null?o:e[fn(t[E])];k===o&&(E=R,k=s),e=Cn(k)?k.call(e):k}return e}function Uf(e,t,s){return e==null?e:Eo(e,t,s)}function Bf(e,t,s,E){return E=typeof E=="function"?E:o,e==null?e:Eo(e,t,s,E)}var zs=es(Ot),Gs=es(wt);function Wf(e,t,s){var E=we(e),R=E||jn(e)||ro(e);if(t=_e(t,4),s==null){var k=e&&e.constructor;R?s=E?new k:[]:ct(e)?s=Cn(k)?no(wo(e)):{}:s={}}return(R?Xt:dn)(e,function(G,K,Q){return t(s,G,K,Q)}),s}function zf(e,t){return e==null?!0:Vi(e,t)}function Gf(e,t,s){return e==null?e:kr(e,t,Yi(s))}function $f(e,t,s,E){return E=typeof E=="function"?E:o,e==null?e:kr(e,t,Yi(s),E)}function so(e){return e==null?[]:Ni(e,Ot(e))}function Hf(e){return e==null?[]:Ni(e,wt(e))}function Vf(e,t,s){return s===o&&(s=t,t=o),s!==o&&(s=on(s),s=s===s?s:0),t!==o&&(t=on(t),t=t===t?t:0),Gn(on(e),t,s)}function qf(e,t,s){return t=On(t),s===o?(s=t,t=0):s=On(s),e=on(e),Jp(e,t,s)}function Kf(e,t,s){if(s&&typeof s!="boolean"&&Lt(e,t,s)&&(t=s=o),s===o&&(typeof t=="boolean"?(s=t,t=o):typeof e=="boolean"&&(s=e,e=o)),e===o&&t===o?(e=0,t=1):(e=On(e),t===o?(t=e,e=0):t=On(t)),e>t){var E=e;e=t,t=E}if(s||e%1||t%1){var R=fr();return Rt(e+R*(t-e+Tl("1e-"+((R+"").length-1))),t)}return Gi(e,t)}var Yf=io(function(e,t,s){return t=t.toLowerCase(),e+(s?$s(t):t)});function $s(e){return ha(tt(e).toLowerCase())}function Hs(e){return e=tt(e),e&&e.replace(Un,wl).replace(ml,"")}function Zf(e,t,s){e=tt(e),t=Ht(t);var E=e.length;s=s===o?E:Gn(Be(s),0,E);var R=s;return s-=t.length,s>=0&&e.slice(s,R)==t}function Xf(e){return e=tt(e),e&&wn.test(e)?e.replace(kn,Ul):e}function Jf(e){return e=tt(e),e&&z.test(e)?e.replace(Y,"\\$&"):e}var Qf=io(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()}),eg=io(function(e,t,s){return e+(s?" ":"")+t.toLowerCase()}),tg=Kr("toLowerCase");function ng(e,t,s){e=tt(e),t=Be(t);var E=t?Jn(e):0;if(!t||E>=t)return e;var R=(t-E)/2;return ti(zo(R),s)+e+ti(Wo(R),s)}function og(e,t,s){e=tt(e),t=Be(t);var E=t?Jn(e):0;return t&&E<t?e+ti(t-E,s):e}function ig(e,t,s){e=tt(e),t=Be(t);var E=t?Jn(e):0;return t&&E<t?ti(t-E,s)+e:e}function ag(e,t,s){return s||t==null?t=0:t&&(t=+t),dp(tt(e).replace(X,""),t||0)}function rg(e,t,s){return(s?Lt(e,t,s):t===o)?t=1:t=Be(t),$i(tt(e),t)}function sg(){var e=arguments,t=tt(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var lg=io(function(e,t,s){return e+(s?"_":"")+t.toLowerCase()});function pg(e,t,s){return s&&typeof s!="number"&&Lt(e,t,s)&&(t=s=o),s=s===o?le:s>>>0,s?(e=tt(e),e&&(typeof t=="string"||t!=null&&!fa(t))&&(t=Ht(t),!t&&Xn(e))?Fn(rn(e),0,s):e.split(t,s)):[]}var cg=io(function(e,t,s){return e+(s?" ":"")+ha(t)});function dg(e,t,s){return e=tt(e),s=s==null?0:Gn(Be(s),0,e.length),t=Ht(t),e.slice(s,s+t.length)==t}function ug(e,t,s){var E=I.templateSettings;s&&Lt(e,t,s)&&(t=o),e=tt(e),t=fi({},t,E,ts);var R=fi({},t.imports,E.imports,ts),k=Ot(R),G=Ni(R,k),K,Q,ce=0,de=t.interpolate||Ct,fe="__p += '",Se=Ri((t.escape||Ct).source+"|"+de.source+"|"+(de===Kn?Ve:Ct).source+"|"+(t.evaluate||Ct).source+"|$","g"),Ae="//# sourceURL="+(nt.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bl+"]")+`
`;e.replace(Se,function(Le,He,Ye,qt,xt,Kt){return Ye||(Ye=qt),fe+=e.slice(ce,Kt).replace(Xs,Bl),He&&(K=!0,fe+=`' +
__e(`+He+`) +
'`),xt&&(Q=!0,fe+=`';
`+xt+`;
__p += '`),Ye&&(fe+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),ce=Kt+Le.length,Le}),fe+=`';
`;var Me=nt.call(t,"variable")&&t.variable;if(!Me)fe=`with (obj) {
`+fe+`
}
`;else if(Te.test(Me))throw new ke(a);fe=(Q?fe.replace(Ft,""):fe).replace(mn,"$1").replace(vt,"$1;"),fe="function("+(Me||"obj")+`) {
`+(Me?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var We=qs(function(){return et(k,Ae+"return "+fe).apply(o,G)});if(We.source=fe,ua(We))throw We;return We}function fg(e){return tt(e).toLowerCase()}function gg(e){return tt(e).toUpperCase()}function mg(e,t,s){if(e=tt(e),e&&(s||t===o))return nr(e);if(!e||!(t=Ht(t)))return e;var E=rn(e),R=rn(t),k=or(E,R),G=ir(E,R)+1;return Fn(E,k,G).join("")}function hg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.slice(0,rr(e)+1);if(!e||!(t=Ht(t)))return e;var E=rn(e),R=ir(E,rn(t))+1;return Fn(E,0,R).join("")}function vg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.replace(X,"");if(!e||!(t=Ht(t)))return e;var E=rn(e),R=or(E,rn(t));return Fn(E,R).join("")}function yg(e,t){var s=x,E=U;if(ct(t)){var R="separator"in t?t.separator:R;s="length"in t?Be(t.length):s,E="omission"in t?Ht(t.omission):E}e=tt(e);var k=e.length;if(Xn(e)){var G=rn(e);k=G.length}if(s>=k)return e;var K=s-Jn(E);if(K<1)return E;var Q=G?Fn(G,0,K).join(""):e.slice(0,K);if(R===o)return Q+E;if(G&&(K+=Q.length-K),fa(R)){if(e.slice(K).search(R)){var ce,de=Q;for(R.global||(R=Ri(R.source,tt(ye.exec(R))+"g")),R.lastIndex=0;ce=R.exec(de);)var fe=ce.index;Q=Q.slice(0,fe===o?K:fe)}}else if(e.indexOf(Ht(R),K)!=K){var Se=Q.lastIndexOf(R);Se>-1&&(Q=Q.slice(0,Se))}return Q+E}function Sg(e){return e=tt(e),e&&cn.test(e)?e.replace(An,ql):e}var bg=io(function(e,t,s){return e+(s?" ":"")+t.toUpperCase()}),ha=Kr("toUpperCase");function Vs(e,t,s){return e=tt(e),t=s?o:t,t===o?zl(e)?Zl(e):xl(e):e.match(t)||[]}var qs=Ge(function(e,t){try{return Gt(e,o,t)}catch(s){return ua(s)?s:new ke(s)}}),Eg=bn(function(e,t){return Xt(t,function(s){s=fn(s),yn(e,s,ca(e[s],e))}),e});function Cg(e){var t=e==null?0:e.length,s=_e();return e=t?pt(e,function(E){if(typeof E[1]!="function")throw new Jt(p);return[s(E[0]),E[1]]}):[],Ge(function(E){for(var R=-1;++R<t;){var k=e[R];if(Gt(k[0],this,E))return Gt(k[1],this,E)}})}function Og(e){return qp(en(e,h))}function va(e){return function(){return e}}function Pg(e,t){return e==null||e!==e?t:e}var Tg=Zr(),Ag=Zr(!0);function Ut(e){return e}function ya(e){return Ar(typeof e=="function"?e:en(e,h))}function Ng(e){return Dr(en(e,h))}function Dg(e,t){return Rr(e,en(t,h))}var Rg=Ge(function(e,t){return function(s){return So(s,e,t)}}),_g=Ge(function(e,t){return function(s){return So(e,s,t)}});function Sa(e,t,s){var E=Ot(t),R=Ko(t,E);s==null&&!(ct(t)&&(R.length||!E.length))&&(s=t,t=e,e=this,R=Ko(t,Ot(t)));var k=!(ct(s)&&"chain"in s)||!!s.chain,G=Cn(e);return Xt(R,function(K){var Q=t[K];e[K]=Q,G&&(e.prototype[K]=function(){var ce=this.__chain__;if(k||ce){var de=e(this.__wrapped__),fe=de.__actions__=jt(this.__actions__);return fe.push({func:Q,args:arguments,thisArg:e}),de.__chain__=ce,de}return Q.apply(e,Rn([this.value()],arguments))})}),e}function Mg(){return Pt._===this&&(Pt._=np),this}function ba(){}function Lg(e){return e=Be(e),Ge(function(t){return _r(t,e)})}var xg=Xi(pt),Ig=Xi(Xa),Fg=Xi(Ci);function Ks(e){return ia(e)?Oi(fn(e)):cc(e)}function jg(e){return function(t){return e==null?o:$n(e,t)}}var kg=Jr(),wg=Jr(!0);function Ea(){return[]}function Ca(){return!1}function Ug(){return{}}function Bg(){return""}function Wg(){return!0}function zg(e,t){if(e=Be(e),e<1||e>V)return[];var s=le,E=Rt(e,le);t=_e(t),e-=le;for(var R=Ai(E,t);++s<e;)t(s);return R}function Gg(e){return we(e)?pt(e,fn):Vt(e)?[e]:jt(gs(tt(e)))}function $g(e){var t=++ep;return tt(e)+t}var Hg=ei(function(e,t){return e+t},0),Vg=Ji("ceil"),qg=ei(function(e,t){return e/t},1),Kg=Ji("floor");function Yg(e){return e&&e.length?qo(e,Ut,ki):o}function Zg(e,t){return e&&e.length?qo(e,_e(t,2),ki):o}function Xg(e){return er(e,Ut)}function Jg(e,t){return er(e,_e(t,2))}function Qg(e){return e&&e.length?qo(e,Ut,Wi):o}function e0(e,t){return e&&e.length?qo(e,_e(t,2),Wi):o}var t0=ei(function(e,t){return e*t},1),n0=Ji("round"),o0=ei(function(e,t){return e-t},0);function i0(e){return e&&e.length?Ti(e,Ut):0}function a0(e,t){return e&&e.length?Ti(e,_e(t,2)):0}return I.after=Au,I.ary=Ts,I.assign=gf,I.assignIn=Us,I.assignInWith=fi,I.assignWith=mf,I.at=hf,I.before=As,I.bind=ca,I.bindAll=Eg,I.bindKey=Ns,I.castArray=wu,I.chain=Cs,I.chunk=qc,I.compact=Kc,I.concat=Yc,I.cond=Cg,I.conforms=Og,I.constant=va,I.countBy=ou,I.create=vf,I.curry=Ds,I.curryRight=Rs,I.debounce=_s,I.defaults=yf,I.defaultsDeep=Sf,I.defer=Nu,I.delay=Du,I.difference=Zc,I.differenceBy=Xc,I.differenceWith=Jc,I.drop=Qc,I.dropRight=ed,I.dropRightWhile=td,I.dropWhile=nd,I.fill=od,I.filter=au,I.flatMap=lu,I.flatMapDeep=pu,I.flatMapDepth=cu,I.flatten=ys,I.flattenDeep=id,I.flattenDepth=ad,I.flip=Ru,I.flow=Tg,I.flowRight=Ag,I.fromPairs=rd,I.functions=Af,I.functionsIn=Nf,I.groupBy=du,I.initial=ld,I.intersection=pd,I.intersectionBy=cd,I.intersectionWith=dd,I.invert=Rf,I.invertBy=_f,I.invokeMap=fu,I.iteratee=ya,I.keyBy=gu,I.keys=Ot,I.keysIn=wt,I.map=si,I.mapKeys=Lf,I.mapValues=xf,I.matches=Ng,I.matchesProperty=Dg,I.memoize=pi,I.merge=If,I.mergeWith=Bs,I.method=Rg,I.methodOf=_g,I.mixin=Sa,I.negate=ci,I.nthArg=Lg,I.omit=Ff,I.omitBy=jf,I.once=_u,I.orderBy=mu,I.over=xg,I.overArgs=Mu,I.overEvery=Ig,I.overSome=Fg,I.partial=da,I.partialRight=Ms,I.partition=hu,I.pick=kf,I.pickBy=Ws,I.property=Ks,I.propertyOf=jg,I.pull=md,I.pullAll=bs,I.pullAllBy=hd,I.pullAllWith=vd,I.pullAt=yd,I.range=kg,I.rangeRight=wg,I.rearg=Lu,I.reject=Su,I.remove=Sd,I.rest=xu,I.reverse=la,I.sampleSize=Eu,I.set=Uf,I.setWith=Bf,I.shuffle=Cu,I.slice=bd,I.sortBy=Tu,I.sortedUniq=Nd,I.sortedUniqBy=Dd,I.split=pg,I.spread=Iu,I.tail=Rd,I.take=_d,I.takeRight=Md,I.takeRightWhile=Ld,I.takeWhile=xd,I.tap=Kd,I.throttle=Fu,I.thru=ri,I.toArray=js,I.toPairs=zs,I.toPairsIn=Gs,I.toPath=Gg,I.toPlainObject=ws,I.transform=Wf,I.unary=ju,I.union=Id,I.unionBy=Fd,I.unionWith=jd,I.uniq=kd,I.uniqBy=wd,I.uniqWith=Ud,I.unset=zf,I.unzip=pa,I.unzipWith=Es,I.update=Gf,I.updateWith=$f,I.values=so,I.valuesIn=Hf,I.without=Bd,I.words=Vs,I.wrap=ku,I.xor=Wd,I.xorBy=zd,I.xorWith=Gd,I.zip=$d,I.zipObject=Hd,I.zipObjectDeep=Vd,I.zipWith=qd,I.entries=zs,I.entriesIn=Gs,I.extend=Us,I.extendWith=fi,Sa(I,I),I.add=Hg,I.attempt=qs,I.camelCase=Yf,I.capitalize=$s,I.ceil=Vg,I.clamp=Vf,I.clone=Uu,I.cloneDeep=Wu,I.cloneDeepWith=zu,I.cloneWith=Bu,I.conformsTo=Gu,I.deburr=Hs,I.defaultTo=Pg,I.divide=qg,I.endsWith=Zf,I.eq=ln,I.escape=Xf,I.escapeRegExp=Jf,I.every=iu,I.find=ru,I.findIndex=hs,I.findKey=bf,I.findLast=su,I.findLastIndex=vs,I.findLastKey=Ef,I.floor=Kg,I.forEach=Os,I.forEachRight=Ps,I.forIn=Cf,I.forInRight=Of,I.forOwn=Pf,I.forOwnRight=Tf,I.get=ga,I.gt=$u,I.gte=Hu,I.has=Df,I.hasIn=ma,I.head=Ss,I.identity=Ut,I.includes=uu,I.indexOf=sd,I.inRange=qf,I.invoke=Mf,I.isArguments=qn,I.isArray=we,I.isArrayBuffer=Vu,I.isArrayLike=kt,I.isArrayLikeObject=ft,I.isBoolean=qu,I.isBuffer=jn,I.isDate=Ku,I.isElement=Yu,I.isEmpty=Zu,I.isEqual=Xu,I.isEqualWith=Ju,I.isError=ua,I.isFinite=Qu,I.isFunction=Cn,I.isInteger=Ls,I.isLength=di,I.isMap=xs,I.isMatch=ef,I.isMatchWith=tf,I.isNaN=nf,I.isNative=of,I.isNil=rf,I.isNull=af,I.isNumber=Is,I.isObject=ct,I.isObjectLike=dt,I.isPlainObject=To,I.isRegExp=fa,I.isSafeInteger=sf,I.isSet=Fs,I.isString=ui,I.isSymbol=Vt,I.isTypedArray=ro,I.isUndefined=lf,I.isWeakMap=pf,I.isWeakSet=cf,I.join=ud,I.kebabCase=Qf,I.last=nn,I.lastIndexOf=fd,I.lowerCase=eg,I.lowerFirst=tg,I.lt=df,I.lte=uf,I.max=Yg,I.maxBy=Zg,I.mean=Xg,I.meanBy=Jg,I.min=Qg,I.minBy=e0,I.stubArray=Ea,I.stubFalse=Ca,I.stubObject=Ug,I.stubString=Bg,I.stubTrue=Wg,I.multiply=t0,I.nth=gd,I.noConflict=Mg,I.noop=ba,I.now=li,I.pad=ng,I.padEnd=og,I.padStart=ig,I.parseInt=ag,I.random=Kf,I.reduce=vu,I.reduceRight=yu,I.repeat=rg,I.replace=sg,I.result=wf,I.round=n0,I.runInContext=J,I.sample=bu,I.size=Ou,I.snakeCase=lg,I.some=Pu,I.sortedIndex=Ed,I.sortedIndexBy=Cd,I.sortedIndexOf=Od,I.sortedLastIndex=Pd,I.sortedLastIndexBy=Td,I.sortedLastIndexOf=Ad,I.startCase=cg,I.startsWith=dg,I.subtract=o0,I.sum=i0,I.sumBy=a0,I.template=ug,I.times=zg,I.toFinite=On,I.toInteger=Be,I.toLength=ks,I.toLower=fg,I.toNumber=on,I.toSafeInteger=ff,I.toString=tt,I.toUpper=gg,I.trim=mg,I.trimEnd=hg,I.trimStart=vg,I.truncate=yg,I.unescape=Sg,I.uniqueId=$g,I.upperCase=bg,I.upperFirst=ha,I.each=Os,I.eachRight=Ps,I.first=Ss,Sa(I,function(){var e={};return dn(I,function(t,s){nt.call(I.prototype,s)||(e[s]=t)}),e}(),{chain:!1}),I.VERSION=n,Xt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){I[e].placeholder=I}),Xt(["drop","take"],function(e,t){qe.prototype[e]=function(s){s=s===o?1:bt(Be(s),0);var E=this.__filtered__&&!t?new qe(this):this.clone();return E.__filtered__?E.__takeCount__=Rt(s,E.__takeCount__):E.__views__.push({size:Rt(s,le),type:e+(E.__dir__<0?"Right":"")}),E},qe.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Xt(["filter","map","takeWhile"],function(e,t){var s=t+1,E=s==B||s==w;qe.prototype[e]=function(R){var k=this.clone();return k.__iteratees__.push({iteratee:_e(R,3),type:s}),k.__filtered__=k.__filtered__||E,k}}),Xt(["head","last"],function(e,t){var s="take"+(t?"Right":"");qe.prototype[e]=function(){return this[s](1).value()[0]}}),Xt(["initial","tail"],function(e,t){var s="drop"+(t?"":"Right");qe.prototype[e]=function(){return this.__filtered__?new qe(this):this[s](1)}}),qe.prototype.compact=function(){return this.filter(Ut)},qe.prototype.find=function(e){return this.filter(e).head()},qe.prototype.findLast=function(e){return this.reverse().find(e)},qe.prototype.invokeMap=Ge(function(e,t){return typeof e=="function"?new qe(this):this.map(function(s){return So(s,e,t)})}),qe.prototype.reject=function(e){return this.filter(ci(_e(e)))},qe.prototype.slice=function(e,t){e=Be(e);var s=this;return s.__filtered__&&(e>0||t<0)?new qe(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),t!==o&&(t=Be(t),s=t<0?s.dropRight(-t):s.take(t-e)),s)},qe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qe.prototype.toArray=function(){return this.take(le)},dn(qe.prototype,function(e,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),E=/^(?:head|last)$/.test(t),R=I[E?"take"+(t=="last"?"Right":""):t],k=E||/^find/.test(t);!R||(I.prototype[t]=function(){var G=this.__wrapped__,K=E?[1]:arguments,Q=G instanceof qe,ce=K[0],de=Q||we(G),fe=function(He){var Ye=R.apply(I,Rn([He],K));return E&&Se?Ye[0]:Ye};de&&s&&typeof ce=="function"&&ce.length!=1&&(Q=de=!1);var Se=this.__chain__,Ae=!!this.__actions__.length,Me=k&&!Se,We=Q&&!Ae;if(!k&&de){G=We?G:new qe(this);var Le=e.apply(G,K);return Le.__actions__.push({func:ri,args:[fe],thisArg:o}),new Qt(Le,Se)}return Me&&We?e.apply(this,K):(Le=this.thru(fe),Me?E?Le.value()[0]:Le.value():Le)})}),Xt(["pop","push","shift","sort","splice","unshift"],function(e){var t=Lo[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",E=/^(?:pop|shift)$/.test(e);I.prototype[e]=function(){var R=arguments;if(E&&!this.__chain__){var k=this.value();return t.apply(we(k)?k:[],R)}return this[s](function(G){return t.apply(we(G)?G:[],R)})}}),dn(qe.prototype,function(e,t){var s=I[t];if(s){var E=s.name+"";nt.call(to,E)||(to[E]=[]),to[E].push({name:t,func:s})}}),to[Qo(o,T).name]=[{name:"wrapper",func:o}],qe.prototype.clone=yp,qe.prototype.reverse=Sp,qe.prototype.value=bp,I.prototype.at=Yd,I.prototype.chain=Zd,I.prototype.commit=Xd,I.prototype.next=Jd,I.prototype.plant=eu,I.prototype.reverse=tu,I.prototype.toJSON=I.prototype.valueOf=I.prototype.value=nu,I.prototype.first=I.prototype.head,uo&&(I.prototype[uo]=Qd),I},Mo=Xl();Pt._=Mo,g=function(){return Mo}.call(y,r,y,O),g!==o&&(O.exports=g)}).call(this)},3438:(O,y,r)=>{"use strict";const g=r(8713),o=Symbol("max"),n=Symbol("length"),l=Symbol("lengthCalculator"),d=Symbol("allowStale"),p=Symbol("maxAge"),a=Symbol("dispose"),c=Symbol("noDisposeOnSet"),m=Symbol("lruList"),i=Symbol("cache"),h=Symbol("updateAgeOnGet"),u=()=>1;class f{constructor(A){if(typeof A=="number"&&(A={max:A}),A||(A={}),A.max&&(typeof A.max!="number"||A.max<0))throw new TypeError("max must be a non-negative number");const D=this[o]=A.max||1/0,M=A.length||u;if(this[l]=typeof M!="function"?u:M,this[d]=A.stale||!1,A.maxAge&&typeof A.maxAge!="number")throw new TypeError("maxAge must be a number");this[p]=A.maxAge||0,this[a]=A.dispose,this[c]=A.noDisposeOnSet||!1,this[h]=A.updateAgeOnGet||!1,this.reset()}set max(A){if(typeof A!="number"||A<0)throw new TypeError("max must be a non-negative number");this[o]=A||1/0,b(this)}get max(){return this[o]}set allowStale(A){this[d]=!!A}get allowStale(){return this[d]}set maxAge(A){if(typeof A!="number")throw new TypeError("maxAge must be a non-negative number");this[p]=A,b(this)}get maxAge(){return this[p]}set lengthCalculator(A){typeof A!="function"&&(A=u),A!==this[l]&&(this[l]=A,this[n]=0,this[m].forEach(D=>{D.length=this[l](D.value,D.key),this[n]+=D.length})),b(this)}get lengthCalculator(){return this[l]}get length(){return this[n]}get itemCount(){return this[m].length}rforEach(A,D){D=D||this;for(let M=this[m].tail;M!==null;){const L=M.prev;N(this,A,M,D),M=L}}forEach(A,D){D=D||this;for(let M=this[m].head;M!==null;){const L=M.next;N(this,A,M,D),M=L}}keys(){return this[m].toArray().map(A=>A.key)}values(){return this[m].toArray().map(A=>A.value)}reset(){this[a]&&this[m]&&this[m].length&&this[m].forEach(A=>this[a](A.key,A.value)),this[i]=new Map,this[m]=new g,this[n]=0}dump(){return this[m].map(A=>v(this,A)?!1:{k:A.key,v:A.value,e:A.now+(A.maxAge||0)}).toArray().filter(A=>A)}dumpLru(){return this[m]}set(A,D,M){if(M=M||this[p],M&&typeof M!="number")throw new TypeError("maxAge must be a number");const L=M?Date.now():0,_=this[l](D,A);if(this[i].has(A)){if(_>this[o])return T(this,this[i].get(A)),!1;const j=this[i].get(A).value;return this[a]&&(this[c]||this[a](A,j.value)),j.now=L,j.maxAge=M,j.value=D,this[n]+=_-j.length,j.length=_,this.get(A),b(this),!0}const x=new C(A,D,_,L,M);return x.length>this[o]?(this[a]&&this[a](A,D),!1):(this[n]+=x.length,this[m].unshift(x),this[i].set(A,this[m].head),b(this),!0)}has(A){if(!this[i].has(A))return!1;const D=this[i].get(A).value;return!v(this,D)}get(A){return S(this,A,!0)}peek(A){return S(this,A,!1)}pop(){const A=this[m].tail;return A?(T(this,A),A.value):null}del(A){T(this,this[i].get(A))}load(A){this.reset();const D=Date.now();for(let M=A.length-1;M>=0;M--){const L=A[M],_=L.e||0;if(_===0)this.set(L.k,L.v);else{const x=_-D;x>0&&this.set(L.k,L.v,x)}}}prune(){this[i].forEach((A,D)=>S(this,D,!1))}}const S=(P,A,D)=>{const M=P[i].get(A);if(M){const L=M.value;if(v(P,L)){if(T(P,M),!P[d])return}else D&&(P[h]&&(M.value.now=Date.now()),P[m].unshiftNode(M));return L.value}},v=(P,A)=>{if(!A||!A.maxAge&&!P[p])return!1;const D=Date.now()-A.now;return A.maxAge?D>A.maxAge:P[p]&&D>P[p]},b=P=>{if(P[n]>P[o])for(let A=P[m].tail;P[n]>P[o]&&A!==null;){const D=A.prev;T(P,A),A=D}},T=(P,A)=>{if(A){const D=A.value;P[a]&&P[a](D.key,D.value),P[n]-=D.length,P[i].delete(D.key),P[m].removeNode(A)}};class C{constructor(A,D,M,L,_){this.key=A,this.value=D,this.length=M,this.now=L,this.maxAge=_||0}}const N=(P,A,D,M)=>{let L=D.value;v(P,L)&&(T(P,D),P[d]||(L=void 0)),L&&A.call(M,L.value,L.key,P)};O.exports=f},1171:()=>{(function(O){var y="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:r,environment:{pattern:RegExp("\\$"+y),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+y),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};O.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+y),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+y),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=O.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=g.variable[1].inside,l=0;l<o.length;l++)n[o[l]]=O.languages.bash[o[l]];O.languages.sh=O.languages.bash,O.languages.shell=O.languages.bash})(Prism)},1417:()=>{(function(O){function y(a){return RegExp("(^(?:"+a+"):[ 	]*(?![ 	]))[^]+","i")}O.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:O.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:y(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:O.languages.csp},{pattern:y(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:O.languages.hpkp},{pattern:y(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:O.languages.hsts},{pattern:y(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r=O.languages,g={"application/javascript":r.javascript,"application/json":r.json||r.javascript,"application/xml":r.xml,"text/xml":r.xml,"text/html":r.html,"text/css":r.css,"text/plain":r.plain},o={"application/json":!0,"application/xml":!0};function n(a){var c=a.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+c+"(?![+\\w.-])";return"(?:"+a+"|"+m+")"}var l;for(var d in g)if(g[d]){l=l||{};var p=o[d]?n(d):d;l[d.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+p+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:g[d]}}l&&O.languages.insertBefore("http","header",l)})(Prism)},8595:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},6771:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},7826:(O,y,r)=>{var g=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var o=function(n){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,p={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function C(N){return N instanceof c?new c(N.type,C(N.content),N.alias):Array.isArray(N)?N.map(C):N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(C){return Object.prototype.toString.call(C).slice(8,-1)},objId:function(C){return C.__id||Object.defineProperty(C,"__id",{value:++d}),C.__id},clone:function C(N,P){P=P||{};var A,D;switch(a.util.type(N)){case"Object":if(D=a.util.objId(N),P[D])return P[D];A={},P[D]=A;for(var M in N)N.hasOwnProperty(M)&&(A[M]=C(N[M],P));return A;case"Array":return D=a.util.objId(N),P[D]?P[D]:(A=[],P[D]=A,N.forEach(function(L,_){A[_]=C(L,P)}),A);default:return N}},getLanguage:function(C){for(;C;){var N=l.exec(C.className);if(N)return N[1].toLowerCase();C=C.parentElement}return"none"},setLanguage:function(C,N){C.className=C.className.replace(RegExp(l,"gi"),""),C.classList.add("language-"+N)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(A){var C=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack)||[])[1];if(C){var N=document.getElementsByTagName("script");for(var P in N)if(N[P].src==C)return N[P]}return null}},isActive:function(C,N,P){for(var A="no-"+N;C;){var D=C.classList;if(D.contains(N))return!0;if(D.contains(A))return!1;C=C.parentElement}return!!P}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(C,N){var P=a.util.clone(a.languages[C]);for(var A in N)P[A]=N[A];return P},insertBefore:function(C,N,P,A){A=A||a.languages;var D=A[C],M={};for(var L in D)if(D.hasOwnProperty(L)){if(L==N)for(var _ in P)P.hasOwnProperty(_)&&(M[_]=P[_]);P.hasOwnProperty(L)||(M[L]=D[L])}var x=A[C];return A[C]=M,a.languages.DFS(a.languages,function(U,j){j===x&&U!=C&&(this[U]=M)}),M},DFS:function C(N,P,A,D){D=D||{};var M=a.util.objId;for(var L in N)if(N.hasOwnProperty(L)){P.call(N,L,N[L],A||L);var _=N[L],x=a.util.type(_);x==="Object"&&!D[M(_)]?(D[M(_)]=!0,C(_,P,null,D)):x==="Array"&&!D[M(_)]&&(D[M(_)]=!0,C(_,P,L,D))}}},plugins:{},highlightAll:function(C,N){a.highlightAllUnder(document,C,N)},highlightAllUnder:function(C,N,P){var A={callback:P,container:C,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",A),A.elements=Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)),a.hooks.run("before-all-elements-highlight",A);for(var D=0,M;M=A.elements[D++];)a.highlightElement(M,N===!0,A.callback)},highlightElement:function(C,N,P){var A=a.util.getLanguage(C),D=a.languages[A];a.util.setLanguage(C,A);var M=C.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(M,A);var L=C.textContent,_={element:C,language:A,grammar:D,code:L};function x(j){_.highlightedCode=j,a.hooks.run("before-insert",_),_.element.innerHTML=_.highlightedCode,a.hooks.run("after-highlight",_),a.hooks.run("complete",_),P&&P.call(_.element)}if(a.hooks.run("before-sanity-check",_),M=_.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!_.code){a.hooks.run("complete",_),P&&P.call(_.element);return}if(a.hooks.run("before-highlight",_),!_.grammar){x(a.util.encode(_.code));return}if(N&&n.Worker){var U=new Worker(a.filename);U.onmessage=function(j){x(j.data)},U.postMessage(JSON.stringify({language:_.language,code:_.code,immediateClose:!0}))}else x(a.highlight(_.code,_.grammar,_.language))},highlight:function(C,N,P){var A={code:C,grammar:N,language:P};if(a.hooks.run("before-tokenize",A),!A.grammar)throw new Error('The language "'+A.language+'" has no grammar.');return A.tokens=a.tokenize(A.code,A.grammar),a.hooks.run("after-tokenize",A),c.stringify(a.util.encode(A.tokens),A.language)},tokenize:function(C,N){var P=N.rest;if(P){for(var A in P)N[A]=P[A];delete N.rest}var D=new h;return u(D,D.head,C),i(C,D,N,D.head,0),S(D)},hooks:{all:{},add:function(C,N){var P=a.hooks.all;P[C]=P[C]||[],P[C].push(N)},run:function(C,N){var P=a.hooks.all[C];if(!(!P||!P.length))for(var A=0,D;D=P[A++];)D(N)}},Token:c};n.Prism=a;function c(C,N,P,A){this.type=C,this.content=N,this.alias=P,this.length=(A||"").length|0}c.stringify=function C(N,P){if(typeof N=="string")return N;if(Array.isArray(N)){var A="";return N.forEach(function(x){A+=C(x,P)}),A}var D={type:N.type,content:C(N.content,P),tag:"span",classes:["token",N.type],attributes:{},language:P},M=N.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(D.classes,M):D.classes.push(M)),a.hooks.run("wrap",D);var L="";for(var _ in D.attributes)L+=" "+_+'="'+(D.attributes[_]||"").replace(/"/g,"&quot;")+'"';return"<"+D.tag+' class="'+D.classes.join(" ")+'"'+L+">"+D.content+"</"+D.tag+">"};function m(C,N,P,A){C.lastIndex=N;var D=C.exec(P);if(D&&A&&D[1]){var M=D[1].length;D.index+=M,D[0]=D[0].slice(M)}return D}function i(C,N,P,A,D,M){for(var L in P)if(!(!P.hasOwnProperty(L)||!P[L])){var _=P[L];_=Array.isArray(_)?_:[_];for(var x=0;x<_.length;++x){if(M&&M.cause==L+","+x)return;var U=_[x],j=U.inside,W=!!U.lookbehind,B=!!U.greedy,H=U.alias;if(B&&!U.pattern.global){var w=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,w+"g")}for(var q=U.pattern||U,V=A.next,ne=D;V!==N.tail&&!(M&&ne>=M.reach);ne+=V.value.length,V=V.next){var ie=V.value;if(N.length>C.length)return;if(!(ie instanceof c)){var le=1,te;if(B){if(te=m(q,ne,C,W),!te||te.index>=C.length)break;var it=te.index,ge=te.index+te[0].length,be=ne;for(be+=V.value.length;it>=be;)V=V.next,be+=V.value.length;if(be-=V.value.length,ne=be,V.value instanceof c)continue;for(var Ie=V;Ie!==N.tail&&(be<ge||typeof Ie.value=="string");Ie=Ie.next)le++,be+=Ie.value.length;le--,ie=C.slice(ne,be),te.index-=ne}else if(te=m(q,0,ie,W),!te)continue;var it=te.index,mt=te[0],ut=ie.slice(0,it),ht=ie.slice(it+mt.length),At=ne+ie.length;M&&At>M.reach&&(M.reach=At);var Re=V.prev;ut&&(Re=u(N,Re,ut),ne+=ut.length),f(N,Re,le);var Et=new c(L,j?a.tokenize(mt,j):mt,H,mt);if(V=u(N,Re,Et),ht&&u(N,V,ht),le>1){var Ue={cause:L+","+x,reach:At};i(C,N,P,V.prev,ne,Ue),M&&Ue.reach>M.reach&&(M.reach=Ue.reach)}}}}}}function h(){var C={value:null,prev:null,next:null},N={value:null,prev:C,next:null};C.next=N,this.head=C,this.tail=N,this.length=0}function u(C,N,P){var A=N.next,D={value:P,prev:N,next:A};return N.next=D,A.prev=D,C.length++,D}function f(C,N,P){for(var A=N.next,D=0;D<P&&A!==C.tail;D++)A=A.next;N.next=A,A.prev=N,C.length-=D}function S(C){for(var N=[],P=C.head.next;P!==C.tail;)N.push(P.value),P=P.next;return N}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(C){var N=JSON.parse(C.data),P=N.language,A=N.code,D=N.immediateClose;n.postMessage(a.highlight(A,a.languages[P],P)),D&&n.close()},!1)),a;var v=a.util.currentScript();v&&(a.filename=v.src,v.hasAttribute("data-manual")&&(a.manual=!0));function b(){a.manual||a.highlightAll()}if(!a.manual){var T=document.readyState;T==="loading"||T==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return a}(g);O.exports&&(O.exports=o),typeof r.g!="undefined"&&(r.g.Prism=o),o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(l,d){var p={};p["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[d]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};a["language-"+d]={pattern:/[\s\S]+/,inside:o.languages[d]};var c={};c[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:a},o.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(n,l){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:o.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml,function(n){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var d=n.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(o),o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),o.languages.js=o.languages.javascript,function(){if(typeof o=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",l=function(v,b){return"\u2716 Error "+v+" while fetching file: "+b},d="\u2716 Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",m="loaded",i="failed",h="pre[data-src]:not(["+a+'="'+m+'"]):not(['+a+'="'+c+'"])';function u(v,b,T){var C=new XMLHttpRequest;C.open("GET",v,!0),C.onreadystatechange=function(){C.readyState==4&&(C.status<400&&C.responseText?b(C.responseText):C.status>=400?T(l(C.status,C.statusText)):T(d))},C.send(null)}function f(v){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(b){var T=Number(b[1]),C=b[2],N=b[3];return C?N?[T,Number(N)]:[T,void 0]:[T,T]}}o.hooks.add("before-highlightall",function(v){v.selector+=", "+h}),o.hooks.add("before-sanity-check",function(v){var b=v.element;if(b.matches(h)){v.code="",b.setAttribute(a,c);var T=b.appendChild(document.createElement("CODE"));T.textContent=n;var C=b.getAttribute("data-src"),N=v.language;if(N==="none"){var P=(/\.(\w+)$/.exec(C)||[,"none"])[1];N=p[P]||P}o.util.setLanguage(T,N),o.util.setLanguage(b,N);var A=o.plugins.autoloader;A&&A.loadLanguages(N),u(C,function(D){b.setAttribute(a,m);var M=f(b.getAttribute("data-range"));if(M){var L=D.split(/\r\n?|\n/g),_=M[0],x=M[1]==null?L.length:M[1];_<0&&(_+=L.length),_=Math.max(0,Math.min(_-1,L.length)),x<0&&(x+=L.length),x=Math.max(0,Math.min(x,L.length)),D=L.slice(_,x).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(_+1))}T.textContent=D,o.highlightElement(T)},function(D){b.setAttribute(a,i),T.textContent=D})}}),o.plugins.fileHighlight={highlight:function(b){for(var T=(b||document).querySelectorAll(h),C=0,N;N=T[C++];)o.highlightElement(N)}};var S=!1;o.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),o.plugins.fileHighlight.highlight.apply(this,arguments)}}()},3068:(O,y,r)=>{const g=Symbol("SemVer ANY");class o{static get ANY(){return g}constructor(h,u){if(u=n(u),h instanceof o){if(h.loose===!!u.loose)return h;h=h.value}a("comparator",h,u),this.options=u,this.loose=!!u.loose,this.parse(h),this.semver===g?this.value="":this.value=this.operator+this.semver.version,a("comp",this)}parse(h){const u=this.options.loose?l[d.COMPARATORLOOSE]:l[d.COMPARATOR],f=h.match(u);if(!f)throw new TypeError(`Invalid comparator: ${h}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new c(f[2],this.options.loose):this.semver=g}toString(){return this.value}test(h){if(a("Comparator.test",h,this.options.loose),this.semver===g||h===g)return!0;if(typeof h=="string")try{h=new c(h,this.options)}catch(u){return!1}return p(h,this.operator,this.semver,this.options)}intersects(h,u){if(!(h instanceof o))throw new TypeError("a Comparator is required");if((!u||typeof u!="object")&&(u={loose:!!u,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new m(h.value,u).test(this.value);if(h.operator==="")return h.value===""?!0:new m(this.value,u).test(h.semver);const f=(this.operator===">="||this.operator===">")&&(h.operator===">="||h.operator===">"),S=(this.operator==="<="||this.operator==="<")&&(h.operator==="<="||h.operator==="<"),v=this.semver.version===h.semver.version,b=(this.operator===">="||this.operator==="<=")&&(h.operator===">="||h.operator==="<="),T=p(this.semver,"<",h.semver,u)&&(this.operator===">="||this.operator===">")&&(h.operator==="<="||h.operator==="<"),C=p(this.semver,">",h.semver,u)&&(this.operator==="<="||this.operator==="<")&&(h.operator===">="||h.operator===">");return f||S||v&&b||T||C}}O.exports=o;const n=r(6836),{re:l,t:d}=r(3694),p=r(5058),a=r(102),c=r(982),m=r(1397)},1397:(O,y,r)=>{class g{constructor(W,B){if(B=l(B),W instanceof g)return W.loose===!!B.loose&&W.includePrerelease===!!B.includePrerelease?W:new g(W.raw,B);if(W instanceof d)return this.raw=W.value,this.set=[[W]],this.format(),this;if(this.options=B,this.loose=!!B.loose,this.includePrerelease=!!B.includePrerelease,this.raw=W,this.set=W.split("||").map(H=>this.parseRange(H.trim())).filter(H=>H.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${W}`);if(this.set.length>1){const H=this.set[0];if(this.set=this.set.filter(w=>!f(w[0])),this.set.length===0)this.set=[H];else if(this.set.length>1){for(const w of this.set)if(w.length===1&&S(w[0])){this.set=[w];break}}}this.format()}format(){return this.range=this.set.map(W=>W.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(W){W=W.trim();const H=`parseRange:${Object.keys(this.options).join(",")}:${W}`,w=n.get(H);if(w)return w;const q=this.options.loose,V=q?c[m.HYPHENRANGELOOSE]:c[m.HYPHENRANGE];W=W.replace(V,x(this.options.includePrerelease)),p("hyphen replace",W),W=W.replace(c[m.COMPARATORTRIM],i),p("comparator trim",W),W=W.replace(c[m.TILDETRIM],h),W=W.replace(c[m.CARETTRIM],u),W=W.split(/\s+/).join(" ");let ne=W.split(" ").map(ge=>b(ge,this.options)).join(" ").split(/\s+/).map(ge=>_(ge,this.options));q&&(ne=ne.filter(ge=>(p("loose invalid filter",ge,this.options),!!ge.match(c[m.COMPARATORLOOSE])))),p("range list",ne);const ie=new Map,le=ne.map(ge=>new d(ge,this.options));for(const ge of le){if(f(ge))return[ge];ie.set(ge.value,ge)}ie.size>1&&ie.has("")&&ie.delete("");const te=[...ie.values()];return n.set(H,te),te}intersects(W,B){if(!(W instanceof g))throw new TypeError("a Range is required");return this.set.some(H=>v(H,B)&&W.set.some(w=>v(w,B)&&H.every(q=>w.every(V=>q.intersects(V,B)))))}test(W){if(!W)return!1;if(typeof W=="string")try{W=new a(W,this.options)}catch(B){return!1}for(let B=0;B<this.set.length;B++)if(U(this.set[B],W,this.options))return!0;return!1}}O.exports=g;const o=r(3438),n=new o({max:1e3}),l=r(6836),d=r(3068),p=r(102),a=r(982),{re:c,t:m,comparatorTrimReplace:i,tildeTrimReplace:h,caretTrimReplace:u}=r(3694),f=j=>j.value==="<0.0.0-0",S=j=>j.value==="",v=(j,W)=>{let B=!0;const H=j.slice();let w=H.pop();for(;B&&H.length;)B=H.every(q=>w.intersects(q,W)),w=H.pop();return B},b=(j,W)=>(p("comp",j,W),j=P(j,W),p("caret",j),j=C(j,W),p("tildes",j),j=D(j,W),p("xrange",j),j=L(j,W),p("stars",j),j),T=j=>!j||j.toLowerCase()==="x"||j==="*",C=(j,W)=>j.trim().split(/\s+/).map(B=>N(B,W)).join(" "),N=(j,W)=>{const B=W.loose?c[m.TILDELOOSE]:c[m.TILDE];return j.replace(B,(H,w,q,V,ne)=>{p("tilde",j,H,w,q,V,ne);let ie;return T(w)?ie="":T(q)?ie=`>=${w}.0.0 <${+w+1}.0.0-0`:T(V)?ie=`>=${w}.${q}.0 <${w}.${+q+1}.0-0`:ne?(p("replaceTilde pr",ne),ie=`>=${w}.${q}.${V}-${ne} <${w}.${+q+1}.0-0`):ie=`>=${w}.${q}.${V} <${w}.${+q+1}.0-0`,p("tilde return",ie),ie})},P=(j,W)=>j.trim().split(/\s+/).map(B=>A(B,W)).join(" "),A=(j,W)=>{p("caret",j,W);const B=W.loose?c[m.CARETLOOSE]:c[m.CARET],H=W.includePrerelease?"-0":"";return j.replace(B,(w,q,V,ne,ie)=>{p("caret",j,w,q,V,ne,ie);let le;return T(q)?le="":T(V)?le=`>=${q}.0.0${H} <${+q+1}.0.0-0`:T(ne)?q==="0"?le=`>=${q}.${V}.0${H} <${q}.${+V+1}.0-0`:le=`>=${q}.${V}.0${H} <${+q+1}.0.0-0`:ie?(p("replaceCaret pr",ie),q==="0"?V==="0"?le=`>=${q}.${V}.${ne}-${ie} <${q}.${V}.${+ne+1}-0`:le=`>=${q}.${V}.${ne}-${ie} <${q}.${+V+1}.0-0`:le=`>=${q}.${V}.${ne}-${ie} <${+q+1}.0.0-0`):(p("no pr"),q==="0"?V==="0"?le=`>=${q}.${V}.${ne}${H} <${q}.${V}.${+ne+1}-0`:le=`>=${q}.${V}.${ne}${H} <${q}.${+V+1}.0-0`:le=`>=${q}.${V}.${ne} <${+q+1}.0.0-0`),p("caret return",le),le})},D=(j,W)=>(p("replaceXRanges",j,W),j.split(/\s+/).map(B=>M(B,W)).join(" ")),M=(j,W)=>{j=j.trim();const B=W.loose?c[m.XRANGELOOSE]:c[m.XRANGE];return j.replace(B,(H,w,q,V,ne,ie)=>{p("xRange",j,H,w,q,V,ne,ie);const le=T(q),te=le||T(V),ge=te||T(ne),be=ge;return w==="="&&be&&(w=""),ie=W.includePrerelease?"-0":"",le?w===">"||w==="<"?H="<0.0.0-0":H="*":w&&be?(te&&(V=0),ne=0,w===">"?(w=">=",te?(q=+q+1,V=0,ne=0):(V=+V+1,ne=0)):w==="<="&&(w="<",te?q=+q+1:V=+V+1),w==="<"&&(ie="-0"),H=`${w+q}.${V}.${ne}${ie}`):te?H=`>=${q}.0.0${ie} <${+q+1}.0.0-0`:ge&&(H=`>=${q}.${V}.0${ie} <${q}.${+V+1}.0-0`),p("xRange return",H),H})},L=(j,W)=>(p("replaceStars",j,W),j.trim().replace(c[m.STAR],"")),_=(j,W)=>(p("replaceGTE0",j,W),j.trim().replace(c[W.includePrerelease?m.GTE0PRE:m.GTE0],"")),x=j=>(W,B,H,w,q,V,ne,ie,le,te,ge,be,Ie)=>(T(H)?B="":T(w)?B=`>=${H}.0.0${j?"-0":""}`:T(q)?B=`>=${H}.${w}.0${j?"-0":""}`:V?B=`>=${B}`:B=`>=${B}${j?"-0":""}`,T(le)?ie="":T(te)?ie=`<${+le+1}.0.0-0`:T(ge)?ie=`<${le}.${+te+1}.0-0`:be?ie=`<=${le}.${te}.${ge}-${be}`:j?ie=`<${le}.${te}.${+ge+1}-0`:ie=`<=${ie}`,`${B} ${ie}`.trim()),U=(j,W,B)=>{for(let H=0;H<j.length;H++)if(!j[H].test(W))return!1;if(W.prerelease.length&&!B.includePrerelease){for(let H=0;H<j.length;H++)if(p(j[H].semver),j[H].semver!==d.ANY&&j[H].semver.prerelease.length>0){const w=j[H].semver;if(w.major===W.major&&w.minor===W.minor&&w.patch===W.patch)return!0}return!1}return!0}},982:(O,y,r)=>{const g=r(102),{MAX_LENGTH:o,MAX_SAFE_INTEGER:n}=r(6609),{re:l,t:d}=r(3694),p=r(6836),{compareIdentifiers:a}=r(5048);class c{constructor(i,h){if(h=p(h),i instanceof c){if(i.loose===!!h.loose&&i.includePrerelease===!!h.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid Version: ${i}`);if(i.length>o)throw new TypeError(`version is longer than ${o} characters`);g("SemVer",i,h),this.options=h,this.loose=!!h.loose,this.includePrerelease=!!h.includePrerelease;const u=i.trim().match(h.loose?l[d.LOOSE]:l[d.FULL]);if(!u)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const S=+f;if(S>=0&&S<n)return S}return f}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(g("SemVer.compare",this.version,this.options,i),!(i instanceof c)){if(typeof i=="string"&&i===this.version)return 0;i=new c(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof c||(i=new c(i,this.options)),a(this.major,i.major)||a(this.minor,i.minor)||a(this.patch,i.patch)}comparePre(i){if(i instanceof c||(i=new c(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let h=0;do{const u=this.prerelease[h],f=i.prerelease[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return a(u,f)}while(++h)}compareBuild(i){i instanceof c||(i=new c(i,this.options));let h=0;do{const u=this.build[h],f=i.build[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return a(u,f)}while(++h)}inc(i,h){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",h);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",h);break;case"prepatch":this.prerelease.length=0,this.inc("patch",h),this.inc("pre",h);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",h),this.inc("pre",h);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let u=this.prerelease.length;for(;--u>=0;)typeof this.prerelease[u]=="number"&&(this.prerelease[u]++,u=-2);u===-1&&this.prerelease.push(0)}h&&(a(this.prerelease[0],h)===0?isNaN(this.prerelease[1])&&(this.prerelease=[h,0]):this.prerelease=[h,0]);break;default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}O.exports=c},7092:(O,y,r)=>{const g=r(3864),o=(n,l)=>{const d=g(n.trim().replace(/^[=v]+/,""),l);return d?d.version:null};O.exports=o},5058:(O,y,r)=>{const g=r(5026),o=r(1969),n=r(3292),l=r(2852),d=r(1896),p=r(5310),a=(c,m,i,h)=>{switch(m){case"===":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c===i;case"!==":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c!==i;case"":case"=":case"==":return g(c,i,h);case"!=":return o(c,i,h);case">":return n(c,i,h);case">=":return l(c,i,h);case"<":return d(c,i,h);case"<=":return p(c,i,h);default:throw new TypeError(`Invalid operator: ${m}`)}};O.exports=a},4236:(O,y,r)=>{const g=r(982),o=r(3864),{re:n,t:l}=r(3694),d=(p,a)=>{if(p instanceof g)return p;if(typeof p=="number"&&(p=String(p)),typeof p!="string")return null;a=a||{};let c=null;if(!a.rtl)c=p.match(n[l.COERCE]);else{let m;for(;(m=n[l.COERCERTL].exec(p))&&(!c||c.index+c[0].length!==p.length);)(!c||m.index+m[0].length!==c.index+c[0].length)&&(c=m),n[l.COERCERTL].lastIndex=m.index+m[1].length+m[2].length;n[l.COERCERTL].lastIndex=-1}return c===null?null:o(`${c[2]}.${c[3]||"0"}.${c[4]||"0"}`,a)};O.exports=d},1930:(O,y,r)=>{const g=r(982),o=(n,l,d)=>{const p=new g(n,d),a=new g(l,d);return p.compare(a)||p.compareBuild(a)};O.exports=o},1518:(O,y,r)=>{const g=r(7921),o=(n,l)=>g(n,l,!0);O.exports=o},7921:(O,y,r)=>{const g=r(982),o=(n,l,d)=>new g(n,d).compare(new g(l,d));O.exports=o},8136:(O,y,r)=>{const g=r(3864),o=r(5026),n=(l,d)=>{if(o(l,d))return null;{const p=g(l),a=g(d),c=p.prerelease.length||a.prerelease.length,m=c?"pre":"",i=c?"prerelease":"";for(const h in p)if((h==="major"||h==="minor"||h==="patch")&&p[h]!==a[h])return m+h;return i}};O.exports=n},5026:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(n,l,d)===0;O.exports=o},3292:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(n,l,d)>0;O.exports=o},2852:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(n,l,d)>=0;O.exports=o},7564:(O,y,r)=>{const g=r(982),o=(n,l,d,p)=>{typeof d=="string"&&(p=d,d=void 0);try{return new g(n instanceof g?n.version:n,d).inc(l,p).version}catch(a){return null}};O.exports=o},1896:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(n,l,d)<0;O.exports=o},5310:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(n,l,d)<=0;O.exports=o},4664:(O,y,r)=>{const g=r(982),o=(n,l)=>new g(n,l).major;O.exports=o},641:(O,y,r)=>{const g=r(982),o=(n,l)=>new g(n,l).minor;O.exports=o},1969:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(n,l,d)!==0;O.exports=o},3864:(O,y,r)=>{const{MAX_LENGTH:g}=r(6609),{re:o,t:n}=r(3694),l=r(982),d=r(6836),p=(a,c)=>{if(c=d(c),a instanceof l)return a;if(typeof a!="string"||a.length>g||!(c.loose?o[n.LOOSE]:o[n.FULL]).test(a))return null;try{return new l(a,c)}catch(i){return null}};O.exports=p},1722:(O,y,r)=>{const g=r(982),o=(n,l)=>new g(n,l).patch;O.exports=o},9711:(O,y,r)=>{const g=r(3864),o=(n,l)=>{const d=g(n,l);return d&&d.prerelease.length?d.prerelease:null};O.exports=o},536:(O,y,r)=>{const g=r(7921),o=(n,l,d)=>g(l,n,d);O.exports=o},8605:(O,y,r)=>{const g=r(1930),o=(n,l)=>n.sort((d,p)=>g(p,d,l));O.exports=o},6359:(O,y,r)=>{const g=r(1397),o=(n,l,d)=>{try{l=new g(l,d)}catch(p){return!1}return l.test(n)};O.exports=o},6175:(O,y,r)=>{const g=r(1930),o=(n,l)=>n.sort((d,p)=>g(d,p,l));O.exports=o},1626:(O,y,r)=>{const g=r(3864),o=(n,l)=>{const d=g(n,l);return d?d.version:null};O.exports=o},8346:(O,y,r)=>{const g=r(3694),o=r(6609),n=r(982),l=r(5048),d=r(3864),p=r(1626),a=r(7092),c=r(7564),m=r(8136),i=r(4664),h=r(641),u=r(1722),f=r(9711),S=r(7921),v=r(536),b=r(1518),T=r(1930),C=r(6175),N=r(8605),P=r(3292),A=r(1896),D=r(5026),M=r(1969),L=r(2852),_=r(5310),x=r(5058),U=r(4236),j=r(3068),W=r(1397),B=r(6359),H=r(5544),w=r(7317),q=r(7876),V=r(2808),ne=r(2540),ie=r(5863),le=r(2336),te=r(8672),ge=r(8360),be=r(2669),Ie=r(341);O.exports={parse:d,valid:p,clean:a,inc:c,diff:m,major:i,minor:h,patch:u,prerelease:f,compare:S,rcompare:v,compareLoose:b,compareBuild:T,sort:C,rsort:N,gt:P,lt:A,eq:D,neq:M,gte:L,lte:_,cmp:x,coerce:U,Comparator:j,Range:W,satisfies:B,toComparators:H,maxSatisfying:w,minSatisfying:q,minVersion:V,validRange:ne,outside:ie,gtr:le,ltr:te,intersects:ge,simplifyRange:be,subset:Ie,SemVer:n,re:g.re,src:g.src,tokens:g.t,SEMVER_SPEC_VERSION:o.SEMVER_SPEC_VERSION,compareIdentifiers:l.compareIdentifiers,rcompareIdentifiers:l.rcompareIdentifiers}},6609:O=>{const y="2.0.0",g=Number.MAX_SAFE_INTEGER||9007199254740991,o=16;O.exports={SEMVER_SPEC_VERSION:y,MAX_LENGTH:256,MAX_SAFE_INTEGER:g,MAX_SAFE_COMPONENT_LENGTH:o}},102:O=>{const y=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{};O.exports=y},5048:O=>{const y=/^[0-9]+$/,r=(o,n)=>{const l=y.test(o),d=y.test(n);return l&&d&&(o=+o,n=+n),o===n?0:l&&!d?-1:d&&!l?1:o<n?-1:1},g=(o,n)=>r(n,o);O.exports={compareIdentifiers:r,rcompareIdentifiers:g}},6836:O=>{const y=["includePrerelease","loose","rtl"],r=g=>g?typeof g!="object"?{loose:!0}:y.filter(o=>g[o]).reduce((o,n)=>(o[n]=!0,o),{}):{};O.exports=r},3694:(O,y,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:g}=r(6609),o=r(102);y=O.exports={};const n=y.re=[],l=y.src=[],d=y.t={};let p=0;const a=(c,m,i)=>{const h=p++;o(c,h,m),d[c]=h,l[h]=m,n[h]=new RegExp(m,i?"g":void 0)};a("NUMERICIDENTIFIER","0|[1-9]\\d*"),a("NUMERICIDENTIFIERLOOSE","[0-9]+"),a("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),a("MAINVERSION",`(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})`),a("MAINVERSIONLOOSE",`(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})`),a("PRERELEASEIDENTIFIER",`(?:${l[d.NUMERICIDENTIFIER]}|${l[d.NONNUMERICIDENTIFIER]})`),a("PRERELEASEIDENTIFIERLOOSE",`(?:${l[d.NUMERICIDENTIFIERLOOSE]}|${l[d.NONNUMERICIDENTIFIER]})`),a("PRERELEASE",`(?:-(${l[d.PRERELEASEIDENTIFIER]}(?:\\.${l[d.PRERELEASEIDENTIFIER]})*))`),a("PRERELEASELOOSE",`(?:-?(${l[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[d.PRERELEASEIDENTIFIERLOOSE]})*))`),a("BUILDIDENTIFIER","[0-9A-Za-z-]+"),a("BUILD",`(?:\\+(${l[d.BUILDIDENTIFIER]}(?:\\.${l[d.BUILDIDENTIFIER]})*))`),a("FULLPLAIN",`v?${l[d.MAINVERSION]}${l[d.PRERELEASE]}?${l[d.BUILD]}?`),a("FULL",`^${l[d.FULLPLAIN]}$`),a("LOOSEPLAIN",`[v=\\s]*${l[d.MAINVERSIONLOOSE]}${l[d.PRERELEASELOOSE]}?${l[d.BUILD]}?`),a("LOOSE",`^${l[d.LOOSEPLAIN]}$`),a("GTLT","((?:<|>)?=?)"),a("XRANGEIDENTIFIERLOOSE",`${l[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),a("XRANGEIDENTIFIER",`${l[d.NUMERICIDENTIFIER]}|x|X|\\*`),a("XRANGEPLAIN",`[v=\\s]*(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:${l[d.PRERELEASE]})?${l[d.BUILD]}?)?)?`),a("XRANGEPLAINLOOSE",`[v=\\s]*(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:${l[d.PRERELEASELOOSE]})?${l[d.BUILD]}?)?)?`),a("XRANGE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAIN]}$`),a("XRANGELOOSE",`^${l[d.GTLT]}\\s*${l[d.XRANGEPLAINLOOSE]}$`),a("COERCE",`(^|[^\\d])(\\d{1,${g}})(?:\\.(\\d{1,${g}}))?(?:\\.(\\d{1,${g}}))?(?:$|[^\\d])`),a("COERCERTL",l[d.COERCE],!0),a("LONETILDE","(?:~>?)"),a("TILDETRIM",`(\\s*)${l[d.LONETILDE]}\\s+`,!0),y.tildeTrimReplace="$1~",a("TILDE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAIN]}$`),a("TILDELOOSE",`^${l[d.LONETILDE]}${l[d.XRANGEPLAINLOOSE]}$`),a("LONECARET","(?:\\^)"),a("CARETTRIM",`(\\s*)${l[d.LONECARET]}\\s+`,!0),y.caretTrimReplace="$1^",a("CARET",`^${l[d.LONECARET]}${l[d.XRANGEPLAIN]}$`),a("CARETLOOSE",`^${l[d.LONECARET]}${l[d.XRANGEPLAINLOOSE]}$`),a("COMPARATORLOOSE",`^${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]})$|^$`),a("COMPARATOR",`^${l[d.GTLT]}\\s*(${l[d.FULLPLAIN]})$|^$`),a("COMPARATORTRIM",`(\\s*)${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]}|${l[d.XRANGEPLAIN]})`,!0),y.comparatorTrimReplace="$1$2$3",a("HYPHENRANGE",`^\\s*(${l[d.XRANGEPLAIN]})\\s+-\\s+(${l[d.XRANGEPLAIN]})\\s*$`),a("HYPHENRANGELOOSE",`^\\s*(${l[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[d.XRANGEPLAINLOOSE]})\\s*$`),a("STAR","(<|>)?=?\\s*\\*"),a("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),a("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},2336:(O,y,r)=>{const g=r(5863),o=(n,l,d)=>g(n,l,">",d);O.exports=o},8360:(O,y,r)=>{const g=r(1397),o=(n,l,d)=>(n=new g(n,d),l=new g(l,d),n.intersects(l));O.exports=o},8672:(O,y,r)=>{const g=r(5863),o=(n,l,d)=>g(n,l,"<",d);O.exports=o},7317:(O,y,r)=>{const g=r(982),o=r(1397),n=(l,d,p)=>{let a=null,c=null,m=null;try{m=new o(d,p)}catch(i){return null}return l.forEach(i=>{m.test(i)&&(!a||c.compare(i)===-1)&&(a=i,c=new g(a,p))}),a};O.exports=n},7876:(O,y,r)=>{const g=r(982),o=r(1397),n=(l,d,p)=>{let a=null,c=null,m=null;try{m=new o(d,p)}catch(i){return null}return l.forEach(i=>{m.test(i)&&(!a||c.compare(i)===1)&&(a=i,c=new g(a,p))}),a};O.exports=n},2808:(O,y,r)=>{const g=r(982),o=r(1397),n=r(3292),l=(d,p)=>{d=new o(d,p);let a=new g("0.0.0");if(d.test(a)||(a=new g("0.0.0-0"),d.test(a)))return a;a=null;for(let c=0;c<d.set.length;++c){const m=d.set[c];let i=null;m.forEach(h=>{const u=new g(h.semver.version);switch(h.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!i||n(u,i))&&(i=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${h.operator}`)}}),i&&(!a||n(a,i))&&(a=i)}return a&&d.test(a)?a:null};O.exports=l},5863:(O,y,r)=>{const g=r(982),o=r(3068),{ANY:n}=o,l=r(1397),d=r(6359),p=r(3292),a=r(1896),c=r(5310),m=r(2852),i=(h,u,f,S)=>{h=new g(h,S),u=new l(u,S);let v,b,T,C,N;switch(f){case">":v=p,b=c,T=a,C=">",N=">=";break;case"<":v=a,b=m,T=p,C="<",N="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(d(h,u,S))return!1;for(let P=0;P<u.set.length;++P){const A=u.set[P];let D=null,M=null;if(A.forEach(L=>{L.semver===n&&(L=new o(">=0.0.0")),D=D||L,M=M||L,v(L.semver,D.semver,S)?D=L:T(L.semver,M.semver,S)&&(M=L)}),D.operator===C||D.operator===N||(!M.operator||M.operator===C)&&b(h,M.semver))return!1;if(M.operator===N&&T(h,M.semver))return!1}return!0};O.exports=i},2669:(O,y,r)=>{const g=r(6359),o=r(7921);O.exports=(n,l,d)=>{const p=[];let a=null,c=null;const m=n.sort((f,S)=>o(f,S,d));for(const f of m)g(f,l,d)?(c=f,a||(a=f)):(c&&p.push([a,c]),c=null,a=null);a&&p.push([a,null]);const i=[];for(const[f,S]of p)f===S?i.push(f):!S&&f===m[0]?i.push("*"):S?f===m[0]?i.push(`<=${S}`):i.push(`${f} - ${S}`):i.push(`>=${f}`);const h=i.join(" || "),u=typeof l.raw=="string"?l.raw:String(l);return h.length<u.length?h:l}},341:(O,y,r)=>{const g=r(1397),o=r(3068),{ANY:n}=o,l=r(6359),d=r(7921),p=(i,h,u={})=>{if(i===h)return!0;i=new g(i,u),h=new g(h,u);let f=!1;e:for(const S of i.set){for(const v of h.set){const b=a(S,v,u);if(f=f||b!==null,b)continue e}if(f)return!1}return!0},a=(i,h,u)=>{if(i===h)return!0;if(i.length===1&&i[0].semver===n){if(h.length===1&&h[0].semver===n)return!0;u.includePrerelease?i=[new o(">=0.0.0-0")]:i=[new o(">=0.0.0")]}if(h.length===1&&h[0].semver===n){if(u.includePrerelease)return!0;h=[new o(">=0.0.0")]}const f=new Set;let S,v;for(const M of i)M.operator===">"||M.operator===">="?S=c(S,M,u):M.operator==="<"||M.operator==="<="?v=m(v,M,u):f.add(M.semver);if(f.size>1)return null;let b;if(S&&v){if(b=d(S.semver,v.semver,u),b>0)return null;if(b===0&&(S.operator!==">="||v.operator!=="<="))return null}for(const M of f){if(S&&!l(M,String(S),u)||v&&!l(M,String(v),u))return null;for(const L of h)if(!l(M,String(L),u))return!1;return!0}let T,C,N,P,A=v&&!u.includePrerelease&&v.semver.prerelease.length?v.semver:!1,D=S&&!u.includePrerelease&&S.semver.prerelease.length?S.semver:!1;A&&A.prerelease.length===1&&v.operator==="<"&&A.prerelease[0]===0&&(A=!1);for(const M of h){if(P=P||M.operator===">"||M.operator===">=",N=N||M.operator==="<"||M.operator==="<=",S){if(D&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===D.major&&M.semver.minor===D.minor&&M.semver.patch===D.patch&&(D=!1),M.operator===">"||M.operator===">="){if(T=c(S,M,u),T===M&&T!==S)return!1}else if(S.operator===">="&&!l(S.semver,String(M),u))return!1}if(v){if(A&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===A.major&&M.semver.minor===A.minor&&M.semver.patch===A.patch&&(A=!1),M.operator==="<"||M.operator==="<="){if(C=m(v,M,u),C===M&&C!==v)return!1}else if(v.operator==="<="&&!l(v.semver,String(M),u))return!1}if(!M.operator&&(v||S)&&b!==0)return!1}return!(S&&N&&!v&&b!==0||v&&P&&!S&&b!==0||D||A)},c=(i,h,u)=>{if(!i)return h;const f=d(i.semver,h.semver,u);return f>0?i:f<0||h.operator===">"&&i.operator===">="?h:i},m=(i,h,u)=>{if(!i)return h;const f=d(i.semver,h.semver,u);return f<0?i:f>0||h.operator==="<"&&i.operator==="<="?h:i};O.exports=p},5544:(O,y,r)=>{const g=r(1397),o=(n,l)=>new g(n,l).set.map(d=>d.map(p=>p.value).join(" ").trim().split(" "));O.exports=o},2540:(O,y,r)=>{const g=r(1397),o=(n,l)=>{try{return new g(n,l).range||"*"}catch(d){return null}};O.exports=o},7607:O=>{"use strict";O.exports=function(y){y.prototype[Symbol.iterator]=function*(){for(let r=this.head;r;r=r.next)yield r.value}}},8713:(O,y,r)=>{"use strict";O.exports=g,g.Node=d,g.create=g;function g(p){var a=this;if(a instanceof g||(a=new g),a.tail=null,a.head=null,a.length=0,p&&typeof p.forEach=="function")p.forEach(function(i){a.push(i)});else if(arguments.length>0)for(var c=0,m=arguments.length;c<m;c++)a.push(arguments[c]);return a}g.prototype.removeNode=function(p){if(p.list!==this)throw new Error("removing node which does not belong to this list");var a=p.next,c=p.prev;return a&&(a.prev=c),c&&(c.next=a),p===this.head&&(this.head=a),p===this.tail&&(this.tail=c),p.list.length--,p.next=null,p.prev=null,p.list=null,a},g.prototype.unshiftNode=function(p){if(p!==this.head){p.list&&p.list.removeNode(p);var a=this.head;p.list=this,p.next=a,a&&(a.prev=p),this.head=p,this.tail||(this.tail=p),this.length++}},g.prototype.pushNode=function(p){if(p!==this.tail){p.list&&p.list.removeNode(p);var a=this.tail;p.list=this,p.prev=a,a&&(a.next=p),this.tail=p,this.head||(this.head=p),this.length++}},g.prototype.push=function(){for(var p=0,a=arguments.length;p<a;p++)n(this,arguments[p]);return this.length},g.prototype.unshift=function(){for(var p=0,a=arguments.length;p<a;p++)l(this,arguments[p]);return this.length},g.prototype.pop=function(){if(!!this.tail){var p=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,p}},g.prototype.shift=function(){if(!!this.head){var p=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,p}},g.prototype.forEach=function(p,a){a=a||this;for(var c=this.head,m=0;c!==null;m++)p.call(a,c.value,m,this),c=c.next},g.prototype.forEachReverse=function(p,a){a=a||this;for(var c=this.tail,m=this.length-1;c!==null;m--)p.call(a,c.value,m,this),c=c.prev},g.prototype.get=function(p){for(var a=0,c=this.head;c!==null&&a<p;a++)c=c.next;if(a===p&&c!==null)return c.value},g.prototype.getReverse=function(p){for(var a=0,c=this.tail;c!==null&&a<p;a++)c=c.prev;if(a===p&&c!==null)return c.value},g.prototype.map=function(p,a){a=a||this;for(var c=new g,m=this.head;m!==null;)c.push(p.call(a,m.value,this)),m=m.next;return c},g.prototype.mapReverse=function(p,a){a=a||this;for(var c=new g,m=this.tail;m!==null;)c.push(p.call(a,m.value,this)),m=m.prev;return c},g.prototype.reduce=function(p,a){var c,m=this.head;if(arguments.length>1)c=a;else if(this.head)m=this.head.next,c=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;m!==null;i++)c=p(c,m.value,i),m=m.next;return c},g.prototype.reduceReverse=function(p,a){var c,m=this.tail;if(arguments.length>1)c=a;else if(this.tail)m=this.tail.prev,c=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;m!==null;i--)c=p(c,m.value,i),m=m.prev;return c},g.prototype.toArray=function(){for(var p=new Array(this.length),a=0,c=this.head;c!==null;a++)p[a]=c.value,c=c.next;return p},g.prototype.toArrayReverse=function(){for(var p=new Array(this.length),a=0,c=this.tail;c!==null;a++)p[a]=c.value,c=c.prev;return p},g.prototype.slice=function(p,a){a=a||this.length,a<0&&(a+=this.length),p=p||0,p<0&&(p+=this.length);var c=new g;if(a<p||a<0)return c;p<0&&(p=0),a>this.length&&(a=this.length);for(var m=0,i=this.head;i!==null&&m<p;m++)i=i.next;for(;i!==null&&m<a;m++,i=i.next)c.push(i.value);return c},g.prototype.sliceReverse=function(p,a){a=a||this.length,a<0&&(a+=this.length),p=p||0,p<0&&(p+=this.length);var c=new g;if(a<p||a<0)return c;p<0&&(p=0),a>this.length&&(a=this.length);for(var m=this.length,i=this.tail;i!==null&&m>a;m--)i=i.prev;for(;i!==null&&m>p;m--,i=i.prev)c.push(i.value);return c},g.prototype.splice=function(p,a,...c){p>this.length&&(p=this.length-1),p<0&&(p=this.length+p);for(var m=0,i=this.head;i!==null&&m<p;m++)i=i.next;for(var h=[],m=0;i&&m<a;m++)h.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var m=0;m<c.length;m++)i=o(this,i,c[m]);return h},g.prototype.reverse=function(){for(var p=this.head,a=this.tail,c=p;c!==null;c=c.prev){var m=c.prev;c.prev=c.next,c.next=m}return this.head=a,this.tail=p,this};function o(p,a,c){var m=a===p.head?new d(c,null,a,p):new d(c,a,a.next,p);return m.next===null&&(p.tail=m),m.prev===null&&(p.head=m),p.length++,m}function n(p,a){p.tail=new d(a,p.tail,null,p),p.head||(p.head=p.tail),p.length++}function l(p,a){p.head=new d(a,null,p.head,p),p.tail||(p.tail=p.head),p.length++}function d(p,a,c,m){if(!(this instanceof d))return new d(p,a,c,m);this.list=m,this.value=p,a?(a.next=this,this.prev=a):this.prev=null,c?(c.prev=this,this.next=c):this.next=null}try{r(7607)(g)}catch(p){}}},Oa={};function ot(O){var y=Oa[O];if(y!==void 0)return y.exports;var r=Oa[O]={id:O,loaded:!1,exports:{}};return Zs[O].call(r.exports,r,r.exports,ot),r.loaded=!0,r.exports}ot.n=O=>{var y=O&&O.__esModule?()=>O.default:()=>O;return ot.d(y,{a:y}),y},ot.d=(O,y)=>{for(var r in y)ot.o(y,r)&&!ot.o(O,r)&&Object.defineProperty(O,r,{enumerable:!0,get:y[r]})},ot.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(O){if(typeof window=="object")return window}}(),ot.o=(O,y)=>Object.prototype.hasOwnProperty.call(O,y),ot.nmd=O=>(O.paths=[],O.children||(O.children=[]),O);var r0={};(()=>{var Bt;"use strict";var O=ot(7323),y=ot.n(O),r=ot(8081),g=ot(8346),o=ot.n(g),n=ot(3670),l=ot.n(n),d=ot(5802),p=ot(6911),a=ot(2213),c=ot(3022),m=ot(9007),i=ot(7826),h=ot.n(i),u=ot(1171),f=ot(8595),S=ot(1417),v=ot(6771);class b{hydrate(pe,Ne){const De=new URL(pe,typeof window=="undefined"?"https://dummy.base":window.location.origin),ae={};De.pathname.split("/").forEach((ve,he)=>{if(ve.charAt(0)===":"){const Ee=ve.slice(1);typeof Ne[Ee]!="undefined"&&(De.pathname=De.pathname.replace(ve,encodeURIComponent(Ne[Ee])),ae[Ee]=Ne[Ee])}});for(const ve in Ne)(typeof ae[ve]=="undefined"||De.searchParams.has(ve))&&De.searchParams.set(ve,Ne[ve]);return De.toString()}}function T(){y()(".sample-request-send").off("click"),y()(".sample-request-send").on("click",function(je){je.preventDefault();const pe=y()(this).parents("article"),Ne=pe.data("group"),De=pe.data("name"),ae=pe.data("version");A(Ne,De,ae,y()(this).data("type"))}),y()(".sample-request-clear").off("click"),y()(".sample-request-clear").on("click",function(je){je.preventDefault();const pe=y()(this).parents("article"),Ne=pe.data("group"),De=pe.data("name"),ae=pe.data("version");D(Ne,De,ae)})}function C(je){return je.replace(/{(.+?)}/g,":$1")}function N(je,pe){const Ne=je.find(".sample-request-url").val(),De=new b,ae=C(Ne);return De.hydrate(ae,pe)}function P(je){const pe={};["header","query","body"].forEach(De=>{const ae={};try{je.find(y()(`[data-family="${De}"]:visible`)).each((ve,he)=>{const Ee=he.dataset.name;let Ze=he.value;if(he.type==="checkbox")if(he.checked)Ze="on";else return!0;if(!Ze&&!he.dataset.optional&&he.type!=="checkbox")return y()(he).addClass("border-danger"),!0;ae[Ee]=Ze})}catch(ve){return}pe[De]=ae});const Ne=je.find(y()('[data-family="body-json"]'));return Ne.is(":visible")?(pe.body=Ne.val(),pe.header["Content-Type"]="application/json"):pe.header["Content-Type"]="multipart/form-data",pe}function A(je,pe,Ne,De){const ae=y()(`article[data-group="${je}"][data-name="${pe}"][data-version="${Ne}"]`),ve=P(ae),he={};if(he.url=N(ae,ve.query),he.headers=ve.header,he.headers["Content-Type"]==="application/json")he.data=ve.body;else if(he.headers["Content-Type"]==="multipart/form-data"){const Ke=new FormData;for(const[Je,Pe]of Object.entries(ve.body))Ke.append(Je,Pe);he.data=Ke,he.processData=!1,(De.toLowerCase()==="get"||De.toLowerCase()==="delete")&&delete he.headers["Content-Type"]}he.type=De,he.success=Ee,he.error=Ze,y().ajax(he),ae.find(".sample-request-response").fadeTo(200,1),ae.find(".sample-request-response-json").html("Loading...");function Ee(Ke,Je,Pe){let $e;try{$e=JSON.parse(Pe.responseText),$e=JSON.stringify($e,null,4)}catch(Qe){$e=Pe.responseText}ae.find(".sample-request-response-json").text($e),h().highlightAll()}function Ze(Ke,Je,Pe){let $e="Error "+Ke.status+": "+Pe,Qe;try{Qe=JSON.parse(Ke.responseText),Qe=JSON.stringify(Qe,null,4)}catch(Xe){Qe=Ke.responseText}Qe&&($e+=`
`+Qe),ae.find(".sample-request-response").is(":visible")&&ae.find(".sample-request-response").fadeTo(1,.1),ae.find(".sample-request-response").fadeTo(250,1),ae.find(".sample-request-response-json").text($e),h().highlightAll()}}function D(je,pe,Ne){const De=y()('article[data-group="'+je+'"][data-name="'+pe+'"][data-version="'+Ne+'"]');De.find(".sample-request-response-json").html(""),De.find(".sample-request-response").hide(),De.find(".sample-request-input").each((ve,he)=>{he.value=he.placeholder!==he.dataset.name?he.placeholder:""});const ae=De.find(".sample-request-url");ae.val(ae.prop("defaultValue"))}const M={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:",Type:"Tipus",url:"url"},L={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:",Type:"Typ",url:"url"},_={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:",Type:"Typ",url:"url"},x={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:",Type:"Tipo",url:"url"},U={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :",Type:"Type",url:"url"},j={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:",Type:"Tipo",url:"url"},W={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:",Type:"Type",url:"url"},B={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:",Type:"Typ",url:"url"},H={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:",Type:"Tipo",url:"url"},w={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:",Type:"Tip",url:"url"},q={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:",Type:"\u0422\u0438\u043F",url:"URL"},V={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:",Type:"Tip",url:"url"},ne={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt"},ie={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",Description:"\u63CF\u8FF0",Field:"\u5B57\u6BB5",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570",Headers:"\u8BF7\u6C42\u5934","Permission:":"\u6743\u9650:",Response:"\u8FD4\u56DE",required:"\u5FC5\u9700\u7684",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:",Type:"\u7C7B\u578B",url:"\u5730\u5740"},le={ca:M,cn:ie,cs:L,de:_,es:x,en:{},fr:U,it:j,nl:W,pl:B,pt:H,pt_br:H,ro:w,ru:q,tr:V,vi:ne,zh:ie,zh_cn:ie},te=((Bt=window.navigator.language)!=null?Bt:"en-GB").toLowerCase().substr(0,2);let ge=le[te]?le[te]:le.en;function be(je){const pe=ge[je];return pe===void 0?je:pe}function Ie(je){if(!Object.prototype.hasOwnProperty.call(le,je))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(le).join(",")}`);ge=le[je]}const{defaultsDeep:it}=r,mt=(je,pe)=>{const Ne=(De,ae,ve,he)=>({[ae]:ve+1<he.length?De:pe});return je.reduceRight(Ne,{})},ut=je=>{let pe={};return je.forEach(Ne=>{const De=mt(Ne[0].split("."),Ne[1]);pe=it(pe,De)}),ht(pe)};function ht(je){return JSON.stringify(je,null,4)}function At(je){const pe=[];return je.forEach(Ne=>{let De;switch(Ne.type.toLowerCase()){case"string":De=Ne.defaultValue||"";break;case"boolean":De=Boolean(Ne.defaultValue)||!1;break;case"number":De=parseInt(Ne.defaultValue||0,10);break;case"date":De=Ne.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}pe.push([Ne.field,De])}),ut(pe)}var Re=ot(781);class Et extends Re{constructor(pe){super(),this.testMode=pe}diffMain(pe,Ne,De,ae){return super.diff_main(this._stripHtml(pe),this._stripHtml(Ne),De,ae)}diffPrettyHtml(pe){const Ne=[],De=/&/g,ae=/</g,ve=/>/g,he=/\n/g;for(let Ee=0;Ee<pe.length;Ee++){const Ze=pe[Ee][0],Je=pe[Ee][1].replace(De,"&amp;").replace(ae,"&lt;").replace(ve,"&gt;").replace(he,"&para;<br>");switch(Ze){case Re.DIFF_INSERT:Ne[Ee]="<ins>"+Je+"</ins>";break;case Re.DIFF_DELETE:Ne[Ee]="<del>"+Je+"</del>";break;case Re.DIFF_EQUAL:Ne[Ee]="<span>"+Je+"</span>";break}}return Ne.join("")}diffCleanupSemantic(pe){return this.diff_cleanupSemantic(pe)}_stripHtml(pe){if(this.testMode)return pe;const Ne=document.createElement("div");return Ne.innerHTML=pe,Ne.textContent||Ne.innerText||""}}function Ue(){l().registerHelper("markdown",function(ae){return ae&&(ae=ae.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(ve,he,Ee,Ze,Ke,Je,Pe){const $e=Ze||Je+"/"+Pe;return'<a href="#api-'+Je+"-"+Pe+'">'+$e+"</a>"}),ae)}),l().registerHelper("setInputType",function(ae){switch(ae){case"File":case"Email":case"Color":case"Number":case"Date":return ae[0].toLowerCase()+ae.substring(1);case"Boolean":return"checkbox";default:return"text"}});let je;l().registerHelper("startTimer",function(ae){return je=new Date,""}),l().registerHelper("stopTimer",function(ae){return console.log(new Date-je),""}),l().registerHelper("__",function(ae){return be(ae)}),l().registerHelper("cl",function(ae){return console.log(ae),""}),l().registerHelper("underscoreToSpace",function(ae){return ae.replace(/(_+)/g," ")}),l().registerHelper("removeDblQuotes",function(ae){return ae.replace(/"/g,"")}),l().registerHelper("assign",function(ae){if(arguments.length>0){const ve=typeof arguments[1];let he=null;(ve==="string"||ve==="number"||ve==="boolean")&&(he=arguments[1]),l().registerHelper(ae,function(){return he})}return""}),l().registerHelper("nl2br",function(ae){return Ne(ae)}),l().registerHelper("ifCond",function(ae,ve,he,Ee){switch(ve){case"==":return ae==he?Ee.fn(this):Ee.inverse(this);case"===":return ae===he?Ee.fn(this):Ee.inverse(this);case"!=":return ae!=he?Ee.fn(this):Ee.inverse(this);case"!==":return ae!==he?Ee.fn(this):Ee.inverse(this);case"<":return ae<he?Ee.fn(this):Ee.inverse(this);case"<=":return ae<=he?Ee.fn(this):Ee.inverse(this);case">":return ae>he?Ee.fn(this):Ee.inverse(this);case">=":return ae>=he?Ee.fn(this):Ee.inverse(this);case"&&":return ae&&he?Ee.fn(this):Ee.inverse(this);case"||":return ae||he?Ee.fn(this):Ee.inverse(this);default:return Ee.inverse(this)}});const pe={};l().registerHelper("subTemplate",function(ae,ve){pe[ae]||(pe[ae]=l().compile(document.getElementById("template-"+ae).innerHTML));const he=pe[ae],Ee=y().extend({},this,ve.hash);return new(l()).SafeString(he(Ee))}),l().registerHelper("toLowerCase",function(ae){return ae&&typeof ae=="string"?ae.toLowerCase():""}),l().registerHelper("splitFill",function(ae,ve,he){const Ee=ae.split(ve);return new Array(Ee.length).join(he)+Ee[Ee.length-1]});function Ne(ae){return(""+ae).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,ve=>ve.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}l().registerHelper("each_compare_list_field",function(ae,ve,he){const Ee=he.hash.field,Ze=[];ae&&ae.forEach(function(Je){const Pe=Je;Pe.key=Je[Ee],Ze.push(Pe)});const Ke=[];return ve&&ve.forEach(function(Je){const Pe=Je;Pe.key=Je[Ee],Ke.push(Pe)}),De("key",Ze,Ke,he)}),l().registerHelper("each_compare_keys",function(ae,ve,he){const Ee=[];ae&&Object.keys(ae).forEach(function(Je){const Pe={};Pe.value=ae[Je],Pe.key=Je,Ee.push(Pe)});const Ze=[];return ve&&Object.keys(ve).forEach(function(Je){const Pe={};Pe.value=ve[Je],Pe.key=Je,Ze.push(Pe)}),De("key",Ee,Ze,he)}),l().registerHelper("body2json",function(ae,ve){return At(ae)}),l().registerHelper("each_compare_field",function(ae,ve,he){return De("field",ae,ve,he)}),l().registerHelper("each_compare_title",function(ae,ve,he){return De("title",ae,ve,he)}),l().registerHelper("reformat",function(ae,ve){if(ve==="json")try{return JSON.stringify(JSON.parse(ae.trim()),null,"    ")}catch(he){}return ae}),l().registerHelper("showDiff",function(ae,ve,he){let Ee="";if(ae===ve)Ee=ae;else{if(!ae)return ve;if(!ve)return ae;const Ze=new Et,Ke=Ze.diffMain(ve,ae);Ze.diffCleanupSemantic(Ke),Ee=Ze.diffPrettyHtml(Ke),Ee=Ee.replace(/&para;/gm,"")}return he==="nl2br"&&(Ee=Ne(Ee)),Ee});function De(ae,ve,he,Ee){const Ze=[];let Ke=0;ve&&ve.forEach(function($e){let Qe=!1;if(he&&he.forEach(function(Xe){if($e[ae]===Xe[ae]){const Wt={typeSame:!0,source:$e,compare:Xe,index:Ke};Ze.push(Wt),Qe=!0,Ke++}}),!Qe){const Xe={typeIns:!0,source:$e,index:Ke};Ze.push(Xe),Ke++}}),he&&he.forEach(function($e){let Qe=!1;if(ve&&ve.forEach(function(Xe){Xe[ae]===$e[ae]&&(Qe=!0)}),!Qe){const Xe={typeDel:!0,compare:$e,index:Ke};Ze.push(Xe),Ke++}});let Je="";const Pe=Ze.length;for(const $e in Ze)parseInt($e,10)===Pe-1&&(Ze[$e]._last=!0),Je=Je+Ee.fn(Ze[$e]);return Je}}document.addEventListener("DOMContentLoaded",()=>{ze(),T(),h().highlightAll()});function ze(){var Z;let je=[{type:"post",url:"/configurations/special/files/providers/loads",title:"Consulta configuraci\xF3n",name:"Consulta_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener la configuracion de un archivo especial por su pk y sk</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto</p>"}]},examples:[{title:"Request-Example:",content:` 
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/configurations/special/files",title:"Editar configuraci\xF3n",name:"Editar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite editar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido del usuario logueado que esta editando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario logueado que esta creando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"get",url:"/configurations/special/files/administrations/providers/:eanprovider",title:"Listado configuraciones por cliente",name:"Listado_configuraciones_por_cliente",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",description:"<p>Ean del fabricante a consultar listado de archivos</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!0,field:"configurationSpecialFileDTO.pk",description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!0,field:"configurationSpecialFileDTO.sk",description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.eanProvider",description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.country",description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.typeOfReport",description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.generationFrequency",description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.generationDay",description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"configurationSpecialFileDTO.typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"configurationSpecialFileDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files/providers",title:"Listado configuraciones por cliente filtradas",name:"Listado_configuraciones_por_cliente_filtradas",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente filtrando por el estado y fecha de creaci\xF3n del reporte</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado de los informes especiales a buscar IMPORTANTE = si no se selecciono data enviar el campo vacio</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n de los archivos especiales IMPORTATE = si no se ingreso data enviar el campo vacio y si se selecciono data enviar en formato AAAA-mm = 2023-03</p>"}]},examples:[{title:"Request-Example:",content:` 
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/companies",title:"Actualizaci\xF3n de compa\xF1ia",name:"Actualizaci\xF3n_de_compa\xF1ia",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite actualizar datos de una compa\xF1ia en el sistema despues de cumplir con las validaciones exigidas en el proceso, que no puede existir una compa\xF1ia con el mismo numero de identificacion y nombre en el mismo pais y tipo de compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia (F = fabricante C = Comerciante)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>Numero de identificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!0,field:"checkDigit",description:"<p>digito de verificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityCode",description:"<p>Codigo de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityName",description:"<p>Nombre de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"adress",description:"<p>Direccion de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"contactName",description:"<p>Nombre del contacto de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Correo electronico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado de la empresa (1 = ACTIVO 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",description:"<p>Nombre y apellido del usuario logueado que esta actualizando la empresa</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"post",url:"/companies/administrations",title:"Administracion de compa\xF1ias",name:"Administracion_de_compa\xF1ias",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las compa\xF1ias que tengan relaci\xF3n con los filtros de busqueda seleccionados</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>codigo del pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia a buscar IMPORTANTE si no se tiene data enviar el campo vacio ejemplo eanCompany = &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>numero de identificaci\xF3n de la compa\xF1ia IMPORTANTE si no se tiene data enviar el campo vacio ejemplo companyIdentificationNumber = &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>nombre de la compa\xF1ia a buscar IMPORTANTE si no se tiene data enviar el campo vacio ejemplo companyName = &quot;&quot;</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>estado de la compa\xF1ia IMPORTANTE si no se tiene data NO enviar el campo</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/traders/countries/{country}",title:"Companias comerciantes por pais",name:"Companias_comerciantes_por_pais",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia comerciantes registrada consultando por su pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/providers/:eancompany/countries/:country",title:"Companias fabricantes por pais",name:"Consulta_companias_fabricantes_por_pais",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia fabricante registrada consultando pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/providers/:eancompany/countries/:country",title:"Consulta compa\xF1ia fabricante",name:"Consulta_compa\xF1ia_fabricante",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia fabricante registrada consultando por su ean y pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",description:"<p>Ean de la compa\xF1ia que se quiere consultar</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"post",url:"/companies",title:"Creaci\xF3n de compa\xF1ia",name:"Creaci\xF3n_de_compa\xF1ia",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite crear una nueva compa\xF1ia en el sistema despues de cumplir con las validaciones exigidas en el proceso, que no puede existir una compa\xF1ia con el mismo ean, numero de identificacion y nombre en el mismo pais y tipo de compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia (F = fabricante C = Comerciante)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>Numero de identificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!0,field:"checkDigit",description:"<p>digito de verificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityCode",description:"<p>Codigo de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityName",description:"<p>Nombre de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"adress",description:"<p>Direccion de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"contactName",description:"<p>Nombre del contacto de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Correo electronico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado de la empresa (1 = ACTIVO 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario logueado que esta creando la empresa</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies",title:"Listado de compa\xF1ias",name:"Listado_de_compa\xF1ias",group:"Compaias",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las compa\xF1ias fabricante de la plataforma</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de compa\xF1ias</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"userLimit",description:"<p>limite de usuarios</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/cards/indicators/stock/companies/:eanProvider",title:"Indicadores BI inventarios",name:"Indicadores_BI_inventarios",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de inventarios para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/sales/companies/:eanProvider",title:"Indicadores BI ventas",name:"Indicadores_BI_ventas",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de ventas para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"post",url:"/budget/downloads",title:"Descarga Prsupuesto por vendedor",name:"Descarga_Presupuesto_por_vendedor",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de presupuesto por vendedor para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/BudgetWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/productsreferences/downloads",title:"Descarga Referenciales de Producto",name:"Descarga_Referenciales_de_Producto",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de referenciales de producto para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductReferencesWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/products/downloads",title:"Descarga Catalogo productos",name:"Descarga_Catalogo_productos",group:"Download_catalogo_productos",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de catalogo de productos para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo paiso de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Download_catalogo_productos"},{type:"post",url:"/salesforce",title:"Descarga fuerza venta",name:"Descarga_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de la fuerza de venta actual para el fabricante seg\xFAn los comercios que filtre</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTrader",description:"<p>Listado eans de los comercios seleccionados en la lista desplegable</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salesforce/traders",title:"Listado comerciantes",name:"Listado_comerciantes",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los comerciantes que tienen registrado venta o  inventarios con el fabricante logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais del fabricante que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salesforce/previews",title:"Previsualizar fuerza venta",name:"Previsualizar_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la consulta de datos para la vista previa de la fuerza de venta para un fabricante y comerciante en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se ecuentra como (eanCompany)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comercio seleccionado en la lista desplegable</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salepoints",title:"Descarga puntos de venta",name:"Descarga_puntos_de_venta",group:"Download_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de puntos de venta actual registrados en la plataforma</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece la empresa se que encuentra logueada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTraders",description:"<p>Listado eans de los comercios seleccionados en la lista desplegable IMPORTANTE si se seleccionaron todos los eans de la lista desplegable \xF3 la palabra todos el listado se debe enviar vac\xEDo</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Download_puntos_de_venta"},{type:"get",url:"/salepoints/traders",title:"Listado de comerciantes",name:"Listado_de_comerciantes",group:"Download_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las compa\xF1ias comerciantes registradas en la plataforma</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de compa\xF1ias</p>"},{group:"200",type:"Object",optional:!1,field:"company",description:"<p>compa\xF1ias registradas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre de usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Nombre del usuario que modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Download_puntos_de_venta"},{type:"get",url:"/masters/budget/guides",title:"Descarga gu\xEDa presupuesto por vendedor",name:"Descarga_gu\xEDa_presupuesto_por_vendedor",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de presupuesto por vendedor</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/productsreferences/guides",title:"Descarga gu\xEDa referenciales de producto",name:"Descarga_gu\xEDa_referenciales_de_producto",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de referenciales de producto</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/budget/templates",title:"Descarga plantilla presupuesto por vendedor",name:"Descarga_plantilla_presupuesto_por_vendedor",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de presupuesto por vendedor</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/productsreferences/templates",title:"Descarga plantilla referenciales de producto",name:"Descarga_plantilla_referenciales_de_producto",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de referenciales de producto</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"post",url:"/masters/downloads",title:"Descarga archivos",name:"Descarga_archivo",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo que fue cargado por la pagina web y los archivos que son generados por medio de la pagina</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathFileName",description:"<p>Path del archivo a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo a descargar</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"post",url:"/masters/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa el archivo cargado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path del log</p>"},{group:"Parameter",type:"String",optional:!1,field:"logFileName",description:"<p>Nombrte del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"get",url:"/masters/downloads/companies/:eancompany/typefiles/:idTypeFile",title:"Listado de archivos",name:"Listado_de_archivos",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los archivos generados para descargar : si desea archivo de fuerza de venta idTypeFile = 8, si desea archivo de catalogo de productos idTypeFile = 9, si desea archivo de puntos de venta idTypeFile = 11</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",description:"<p>ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idTypeFile",description:"<p>Id del tipo de archivo a consultar</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"get",url:"/status",title:"Listado de estados",name:"Listado_de_estados",group:"Estados",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los estados disponibles para los archivos cargados por la web</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de estados</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre del estado</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n dle registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/StateWebApi.java",groupTitle:"Estados"},{type:"post",url:"/filters/dynamicreports/channels",title:"Listado de canales",name:"Listado_de_canales",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los canales que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/level1/categories",title:"Listado de categorias",name:"Listado_de_categorias",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las categorias de nivel 1 de productos  que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels4/geographies",title:"Listado de ciudades",name:"Listado_de_ciudades",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las ciudades que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/colors",title:"Listado de colores",name:"Listado_de_colores",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de colores de productos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/traders",title:"Listado de comerciantes",name:"Listado_de_comerciantes",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de comerciantes que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels1/geographies",title:"Listado de departamentos-estado",name:"Listado_de_departamentos-estado",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los departamentos-estado que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/eans/pointsales",title:"Listado de eans punto de venta",name:"Listado_de_eans_punto_de_venta",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los eans de puntos de venta que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/formats",title:"Listado de formatos",name:"Listado_de_formatos",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de formatos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
 }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels1/salesforce",title:"Listado de jerarqu\xEDa nivel 1",name:"Listado_de_jerarqu\xEDa_nivel_1",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de jerarqu\xEDa nivel 1 que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/brands",title:"Listado de marcas",name:"Listado_de_marcas",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las marcas de productos que tienen registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/products",title:"Listado de productos",name:"Listado_de_productos",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los productos  que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/pointsales",title:"Listado de punto de venta",name:"Listado_de_punto_de_venta",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de puntos de venta que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/sizes",title:"Listado de tallas",name:"Listado_de_tallas",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de tallas de productos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/salesman",title:"Listado de vendedores",name:"Listado_de_vendedores",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de vendedores que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/masters/uploads/geographies",title:"Carga archivo geograf\xEDas",name:"Carga_archivo_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite la carga del archivo de geografias por medio de la p\xE1gina web</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 4 archivo de geografias</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies/downloads",title:"Descarga de geograf\xEDas",name:"Descarga_de_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite realizar la descarga de las geograf\xEDas registradas en el sistema para un pa\xEDs en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto geografia a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs de la empresa que se encuentra logueada (se utiliza para la zona horaria)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/downloads/guides",title:"Descarga gu\xEDa geograf\xEDas",name:"Descarga_gu\xEDa_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de geograf\xEDas</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/downloads/templates",title:"Descarga plantilla geograf\xEDas",name:"Descarga_plantilla_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de geograf\xEDas</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"delete",url:"/geographies/:country",title:"Eliminar geograf\xEDa",name:"Eliminar_geograf\xEDa",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite eliminar una geograf\xEDa de la plataforma Si no esta asociada a una empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs para eliminar la  geograf\xEDa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "La geograf\xEDa elimino correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/cities/countries/:country",title:"Listado de ciudades por pa\xEDs",name:"Listado_de_ciudades_por_pa\xEDs",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de ciudades que pertenecen a un pa\xEDs</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais a consultar las ciudades</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de ciudades</p>"},{group:"200",type:"String",optional:!0,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!0,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!0,field:"codIsoCountry",description:"<p>C\xF3digo ISO del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"countryName",description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"currency",description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"idLevel4",description:"<p>Codigo de la ciudad</p>"},{group:"200",type:"String",optional:!0,field:"level1",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"level4",description:"<p>Nombre  de la ciudad</p>"},{group:"200",type:"String",optional:!0,field:"totalLevels",description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies",title:"Listado de geograf\xEDas",name:"Listado_de_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las geograf\xEDas registradas en la plataforma</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"currency",description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel4",description:"<p>Cuarto  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level1",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level4",description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"totalLevels",description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies",title:"Listado de geograf\xEDas filtradas",name:"Listado_de_geograf\xEDas_filtradas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las geograf\xEDas registradas en la plataforma Que tengan coincidencia en el nombre del pa\xEDs o c\xF3digo ISO ingresado por el cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs a filtrar IMPORTANTE si el campo no contiene data enviar el campo vacio ejemplo &quot;countryName&quot;: &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs a filtrar IMPORTANTE si el campo no contiene data enviar el campo vacio ejemplo &quot;codIsoCountry&quot;: &quot;&quot;</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies/companies/validations",title:"Validaci\xF3n para eliminar geograf\xEDas",name:"Validaci\xF3n_para_eliminar_geograf\xEDas",group:"Geografas",version:"0.1.0",description:"<p>Este servicio permite Validar si la geograf\xEDa que se desea eliminar esta asociada a alguna empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pa\xEDs para eliminar la  geograf\xEDa</p>"},{group:"Parameter",type:"String",optional:!1,field:"countryName",description:"<p>Nombre del pa\xEDs para eliminar la  geograf\xEDa</p>"}]},examples:[{title:"Request-Example",content:`{

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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/dashboards/home/providers/:eanProvider/countries/:country",title:"Indicadores home graficas",name:"Indicadores_home_graficas",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener la infomacion para mostrar en la graficas de barra y tortas que se presentan en el home del fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateSales",description:"<p>Fecha de ultima actualizaci\xF3n para ventas</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateInventories",description:"<p>Fecha de ultima actualizaci\xF3n para Inventarios</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de datos para pintar en las graficas</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"chartType",description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!1,field:"chartDetail",description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Nombre del primer campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre del segundo campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Primer valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Segundo valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response: ",content:`
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
    
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"get",url:"/dashboards/home/transmissions/providers/:eanProvider/countries/:country",title:"Listado de transmisiones",name:"Listado_de_transmisiones",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las transmisiones de los comerciantes hacia el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de transmisiones para mostrar en la tabla</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la tabla</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)}</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Comercio que Transmite la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre ultia transmision</p>"},{group:"200",type:"String",optional:!1,field:"field3",description:"<p>Nombre cantidad transmitida</p>"},{group:"200",type:"String",optional:!1,field:"field4",description:"<p>Nombre valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"field5",description:"<p>Nombre tipo valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"field6",description:"<p>Nombre puntos de ventas transmtidos</p>"},{group:"200",type:"String",optional:!1,field:"field7",description:"<p>Nombre actualizaciones</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Ean del comercio</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Fecha ultima actualizaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"value3",description:"<p>Cantidad transmitida</p>"},{group:"200",type:"String",optional:!1,field:"value4",description:"<p>Valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"value5",description:"<p>tipo del valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"value6",description:"<p>Cantidad de puntos de venta tansmitidos</p>"},{group:"200",type:"String",optional:!1,field:"value7",description:"<p>Fechas de actualizaciones</p>"},{group:"200",type:"String",optional:!1,field:"currentDatetime",description:"<p>Fecha de ultima actualizaci\xF3n</p>"}]},examples:[{title:"Success-Response:  ",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"post",url:"/dashboards/home/details/salesforce",title:"Listado detalle indicadores fuerza de venta",name:"Listado_detalle_indicadores_fuerza_de_venta",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado detallado de los indicadores de fuerza de venta para el fabricante logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"},{group:"Parameter",type:"String",optional:!1,field:"field2",description:"<p>Tipo de indicador para el detalle, si desea visualizar detalle de fuerza de venta enviar field2 = 'PUNTO DE VENTA'</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"post",url:"/dashboards/home/details/products",title:"Listado detalle indicadores productos",name:"Listado_detalle_indicadores_productos",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado detallado de los productos con categorias por default</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"},{group:"Parameter",type:"String",optional:!1,field:"field2",description:"<p>Tipo de indicador para el detalle, para visualizar catalogo de productos enviar field2 = 'PRODUCTOS'</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"put",url:"/menus",title:"Actualizaci\xF3n de men\xFA",name:"Actualizaci\xF3n_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite actualizar opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Request-Example",content:`

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


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/:idMenu",title:"Consulta de men\xFA",name:"Consulta_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener la opcion del men\xFA por su id</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuOption",description:"<p>Id del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus",title:"Creacion de men\xFA",name:"Creacion_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Request-Example",content:`
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


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/typeOption",title:"Listado Opciones Tipo Menu",name:"Listado_Opciones_Tipo_Menu",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones de tipo para asignar a la creacion de menu</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"idOptionType",description:"<p>Id de la opci\xF3n de tipo</p>"},{group:"200",type:"String",optional:!1,field:"create_user",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"option_name",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus",title:"Listado de menus",name:"Listado_de_menus_Listado_de_menus",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/parent/:level",title:"Listado men\xFAs padre",name:"Listado_men\xFAs_padre",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los men\xFAs padre segun el nivel</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"Object",optional:!1,field:"menu",description:"<p>Menu de opciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/previews",title:"Previsualizaci\xF3n del men\xFA",name:"Previsualizaci\xF3n_del_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) para su previsualizaci\xF3n</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/levels",title:"listado de niveles",name:"listado_de_niveles",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los niveles de men\xFA que pueden ser asignados</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de niveles</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus/order",title:"listado orden de opciones",name:"listado_orden_de_opciones",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado del orden para el men\xFA de opciones</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuParent",description:"<p>(Opcional si el nivel es 1) Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",description:"<p>Nivel al que pertenece la opci\xF3n</p>"}]},examples:[{title:"Request-Example",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/typeProduct",title:"menu Tipo Producto",name:"menu_Tipo_Producto",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) que son tipo producto</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus/typeProduct/available",title:"menu Tipo Producto Disponible",name:"menu_Tipo_Producto_Disponible",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) que son tipo producto y no han sido contratados por la compa\xF1oa</p>",permission:[{name:`Usuario administrador
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/product/:idMenu",title:"Consulta menu por producto",name:"menu_por_producto",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener la opcion del men\xFA tipo producto y sus descendientes por su id</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuOption",description:"<p>Id del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"put",url:"/contractedProduct",title:"Actualizaci\xF3n producto contratado",name:"Actualizaci\xF3n_producto_contratado",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite Actulizaci\xF3n de un producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idOptionType",description:"<p>id del tipo de opcion de menu, si no tiene tipo de opcion de menu el valor es null</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
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


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct/active/:eanCompany Consulta productos",title:"contratados activos",name:"Consulta_productos_contratados_activos",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la Empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct/available/:eanCompany Consulta productos",title:"contratados activos y disponibles",name:"Consulta_productos_contratados_activos_y_disponibles",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos y disponibles por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la Empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct productos contratados por",title:"empresa",name:"Consulta_productos_contratados_por_empresa",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct productos contratados por",title:"empresa",name:"Consulta_productos_contratados_por_empresa",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct",title:"Creacion de registro producto contratado",name:"Creacion_de_registro_producto_contratado",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de registro producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"contractedUsers",description:"<p>numero de usuarios contratados</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",description:"<p>nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idOptionType",description:"<p>id del tipo de opcion de menu, si no tiene tipo de opcion de menu el valor es null</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
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


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/filter",title:"Filtro de Productos Contratados",name:"Filtro_de_Productos_Contratados",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id de la opcion de menu</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"put",url:"/dynamicreports",title:"Actualizar configuraci\xF3n",name:"Actualizar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite actualizar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationDare",description:"<p>fecha de creacion</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.modificationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/downloads",title:"Descarga archivos",name:"Descarga_archivo",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo que fue cargado por la pagina web y los archivos que son generados por medio de la pagina</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathFileName",description:"<p>Path del archivo a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"generatedFileName",description:"<p>Nombre del archivo a descargar</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/masters/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa el archivo cargado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path del log</p>"},{group:"Parameter",type:"String",optional:!1,field:"logFileName",description:"<p>Nombrte del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/roles/filter",title:"Filtro de Reportes Dinamicos",name:"Filtro_de_Reportes_Dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite filtrar los Reportes Dinamicos por un estado y Fecha Vencimiento</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con las configuraciones de la pivote</p>"}],Parameter:[{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del Reporte Dinamico (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto, el pk contiene el ean_provider</p>"},{group:"Parameter",type:"String",optional:!1,field:"expirationDate",description:"<p>fecha de Vencimiento en formato 2022-12</p>"}]},examples:[{title:"Request-Example:",content:`
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
                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"reportStatus",description:"<p>Estado del reporte (&quot;ACTIVO&quot;,&quot;INACTIVO&quot;)</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/provider",title:"Listado Reportes dinamicos",name:"Listado_de_Reportes_dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los Reportes dinamicos asociados al fabricante</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
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
                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"get",url:"/dynamicreports/companies/:eanprovider Validaci\xF3n reportes",title:"disponibles",name:"Validaci\xF3n_reportes_disponibles",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite verificar si la empresa cuenta con cupo disponible para la creaci\xF3n de mas reportes din\xE1micos peri\xF3dicos</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Esta validado para crear de reportes",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "El usuario ya cuenta con 50 reportes
activos. Si requiere crear
uno nuevo, desactive alguno de los que est\xE1n en uso.",
"responseCode": "1005"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/pivote",title:"reporte dinamico por id",name:"reporte_dinamico_por_id",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener un reporte dinamico por su id y ean provider</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
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
                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"put",url:"/roles",title:"Actualizaci\xF3n de rol",name:"Actualizaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite actualizar los datos del rol y sus permisos</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1=Activo , 0 = Inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/products",title:"Consulta roles por producto",name:"Consulta_roles_por_producto",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de roles que pertenecen a un producto en especifico y el estado del rol sea activo</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opcion del menu tipo producto seleccionada</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles",title:"Creaci\xF3n de rol",name:"Creaci\xF3n_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite crear un nuevo rol en el sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1= activo 0 = inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"delete",url:"/roles",title:"Eliminaci\xF3n de rol",name:"Eliminaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permire eliminar un rol del sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/filter",title:"Filtro de roles",name:"Filtro_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1= activo, 0=inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"get",url:"/roles",title:"Listado de roles",name:"Listado_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",description:"<p>Listado de opciones del menu asignadas al rol</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/requests/savereload",title:"Guardar Solicitud Aplicar Recarga",name:"CGuardar_Solicitud_Aplicar_Recarga",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite Guardar Solicitud Aplicar Recarga</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object[]",optional:!1,field:"loadAuditReloadArray",description:"<p>Listado de las opciones seleccionadas por el usuario para realizar la recarga</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.sk",description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"Parameter",type:"String",optional:!1,field:"loadAuditReloadArray.bgm",description:`<p>identificador asociado al</p> <pre><code>      documento de transmisi\xF3n de
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

                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/savedelete",title:"Guardar Solicitud Aplicar borrado",name:"CGuardar_Solicitud_Aplicar_borrado",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite Guardar Solicitud Aplicar borrado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y Apellido del usuario que crea la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>tipo de documento si es ventas o inventarios</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"provider",description:"<p>Listado de los providers seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider.eanCompany",description:"<p>id del provedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider.nameCompany",description:"<p>Nombre del Provedor</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"trader",description:"<p>Listado de los traders seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader.eanCompany",description:"<p>id del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader.nameCompany",description:"<p>Nombre del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"startDate",description:"<p>fecha inicial de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"endDate",description:"<p>fecha final de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDate",description:"<p>tipo de fecha selecionada si es de carga o reportada</p>"}]},examples:[{title:"Request-Example:",content:`
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

                  }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/cancellations",title:"Cancelar Solicitud recargas",name:"Cancelar_Solicitud_recargas",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite cancelar la solitud de recarga que se encuentre en estado pendiente, si el estado es diferente a este el sistema no cancelara la solitud</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de particion asignada al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"idRequest",description:"<p>Id de la solicitud de borrado o recarga</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>Tipo de documento (sales,stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestType",description:"<p>Tipo de solicitud (RECARGA)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",description:"<p>Ean del comerciante asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader",description:"<p>Nombre del comerciante asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre del proveedor asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"cancelUser",description:"<p>Nombre y apellido del usuario logueado que cancela la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa la recarga o borrado de informacion y presenta fallas</p>",permission:[{name:"Usuario Administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del archivo log</p>"},{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",description:"<p>ruta del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/loadaudit/filter",title:"Filtro opciones de recarga",name:"Guardar_Filtro_opciones_de_recarga",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite realizar el filtro para listar las opciones que se pueden elegir en una solicitud de recarga.</p>",parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>tipo de documento si es ventas o inventarios</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"provider",description:"<p>Listado de los providers seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>id del provedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",description:"<p>Nombre del Provedor</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"trader",description:"<p>Listado de los traders seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"startDate",description:"<p>fecha inicial de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"endDate",description:"<p>fecha final de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDate",description:"<p>tipo de fecha selecionada si es de carga o reportada</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/LoadAuditWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests",title:"Listado solicitudes borrado y recargas",name:"Listado_solicitudes_borrado_y_recargas",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las solictudes de borrado y recarga de informaci\xF3n segun los filtros aplicados</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais a consultar</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",description:"<p>Listado de eans de comerciantes seleccionados IMPORTANTE si se seleccionaron todos o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansProviders",description:"<p>Listado de eans de fabricantes seleccionados IMPORTANTE si se seleccionaron todos o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",description:"<p>Tipo de documento a consultar (sales, stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestType",description:"<p>Tipo de solicitud a consultar (RECARGA, BORRADO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestStartDate",description:"<p>Fecha inicio de la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestEndDate",description:"<p>Fecha final de la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre del usuario que creo la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/masters/uploads/budgetseller",title:"Carga archivo maestro presupuesto",name:"Carga_archivo_maestro_presupuesto",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo maestro de presupuesto por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 14 archivo maestro presupuesto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"get",url:"/typefiles/displayweb",title:"Listado de tipos de archivos maestros",name:"Listado_de_tipos_de_archivos_maestros",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite obtener los  tipos de archivo maestro que se  mostrarar en la lista de seleccion maestro &quot;Listado de tipos de archivos maestros&quot;</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/TypeFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"post",url:"/masters/uploads/productsreferences",title:"carga archivo maestro referenciales productos",name:"carga_archivo_maestro_referenciales_productos",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga del archivo referenciales de productos por medio de la p\xE1gina web</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object",optional:!1,field:"typeFile",description:"<p>Tipo de archivo que se va a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 13 archivo referencial de productos</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"post",url:"/masters/uploads/catalogs",title:"Carga de archivo catalogo",name:"Carga_de_archivo_catalogo",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite la carga de catalogo de productos por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 1 archivo de catalogo</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/downloads/guides",title:"Descarga gu\xEDa cat\xE1logo de productos",name:"Descarga_gu\xEDa_cat\xE1logo_de_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de cat\xE1logo de productos</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/downloads/templates",title:"Descarga plantilla catalogo productos",name:"Descarga_plantilla_catalogo_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla del catalogo de productos</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/companies/:eanCompany",title:"Previsualizar productos",name:"Previsualizar_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener la vista previa del catalogo de productos para un fabricante en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia que se encuentra logueada</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de productos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!0,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!0,field:"eanProduct",description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!0,field:"description",description:"<p>Descripcion del producto</p>"},{group:"200",type:"String",optional:!0,field:"plu",description:"<p>Codigo Interno del producto</p>"},{group:"200",type:"Number",optional:!0,field:"conversionUnit",description:"<p>Unidad conversi\xF3n del producto</p>"},{group:"200",type:"double",optional:!0,field:"unitValue",description:"<p>Valor unitario del producto</p>"},{group:"200",type:"double",optional:!0,field:"tax",description:"<p>Iva del producto</p>"},{group:"200",type:"double",optional:!0,field:"weight",description:"<p>Peso del producto</p>"},{group:"200",type:"String",optional:!0,field:"size",description:"<p>Talla del producto</p>"},{group:"200",type:"double",optional:!0,field:"volume",description:"<p>Volumen del producto</p>"},{group:"200",type:"String",optional:!0,field:"color",description:"<p>Color del producto</p>"},{group:"200",type:"String",optional:!0,field:"brand",description:"<p>Marca del producto</p>"},{group:"200",type:"Number",optional:!0,field:"state",description:"<p>Estado del producto (Activo \xF3 Inactivo) =&gt; 1 \xF3 0</p>"},{group:"200",type:"String",optional:!1,field:"levelZero",description:"<p>Nivel 0 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",description:"<p>Nivel 1 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTwo",description:"<p>Nivel 2 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelThree",description:"<p>Nivel 3 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",description:"<p>Nivel 4 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelFive",description:"<p>Nivel 5 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelSix",description:"<p>Nivel 6 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelSeven",description:"<p>Nivel 7 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelEight",description:"<p>Nivel 8 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelNine",description:"<p>Nivel 9 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTen",description:"<p>Nivel 10 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelEleven",description:"<p>Nivel 11 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTwelve",description:"<p>Nivel 12 del producto</p>"},{group:"200",type:"Number",optional:!1,field:"totalProducts",description:"<p>Total de productos que pertecen a la ultima categoria</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"post",url:"/masters/uploads",title:"Filtro de archivos",name:"Filtro_de_archivos",group:"Uploads_files",version:"0.1.0",description:"<p>Este servicio permite filtrar los archivos cargados por un estado y tipo de archivo. si se desea listar archivos de Catalogo de productos enviar idFileType = 1 , si se desea listar archivos de Fuerza de ventas enviar idFileType = 2 , si se desea listar archivos de Geografias enviar idFileType = 4 , si se desea listar archivos de puntos de venta enviar idFileType = 3<br> si se desea listar archivos de Productos Referenciales enviar idFileType = 13 si se desea listar archivos de Presupuesto por Vendedor enviar idFileType = 14</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Id del archivo a consultar</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Nombre del estado a consultar</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_files"},{type:"get",url:"/masters/uploads/companies/:eancompany/typefiles/:idTypeFile",title:"Listado de carga de archivos",name:"Listado_de_carga_de_archivos",group:"Uploads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los archivos cargados por la pagina web para una compa\xF1ia y un tipo de archivo. si se desea listar archivos de Catalogo de productos enviar idTypeFile = 1 , si se desea listar archivos de Fuerza de ventas envia idTypeFile = 2 , si se desea listar archivos de Geografias enviar idTypeFile = 4 , si se desea listar archivos de Puntos de venta enviar idTypeFile = 3 si se desea listar archivos de Productos Referenciales enviar idTypeFile = 13 si se desea listar archivos de Presupuesto por Vendedor enviar idTypeFile = 14</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idTypeFile",description:"<p>Id del tipo de archivo</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_files"},{type:"post",url:"/masters/uploads/salesforce",title:"Carga archivo fuerza venta",name:"Carga_archivo_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo fuerza venta por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 2 archivo de fuerza de venta</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"get",url:"/salesforce/downloads/guides",title:"Descarga gu\xEDa fuerza venta",name:"Descarga_gu\xEDa_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de fuerza de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"get",url:"/salesforce/downloads/templates",title:"Descarga plantilla fuerza venta",name:"Descarga_plantilla_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla de fuerza de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"post",url:"/masters/uploads/salepoints",title:"Carga puntos de ventas",name:"Carga_puntos_de_ventas",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo de puntos de ventas por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",description:"<p>Valor 3 archivo de puntos de venta</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"get",url:"/salepoints/downloads/guides",title:"Descarga gu\xEDa puntos de venta",name:"Descarga_gu\xEDa_puntos_de_venta",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de puntos de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"get",url:"/salepoints/downloads/templates",title:"Descarga plantilla puntos de venta",name:"Descarga_plantilla_puntos_de_venta",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla de puntos de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"post",url:"/users",title:"Creacion de usuario",name:"Creacion_de_usuario",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite crear un usuario en la plataforma</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"Parameter",type:"Number",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de opci\xF3n de men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idRole",description:"<p>Id del rol</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"put",url:"/users",title:"Edici\xF3n de usuario",name:"Edici\xF3n_de_usuarios",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite editar el usuario</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"previousEmail",description:"<p>Email previo del usuario</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"userCreateArray",description:"<p>Array de permisos del usuario actualizados</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users/filter",title:"Filtro de usuarios",name:"Filtro_de_usuarios",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite filtrar los usuarios por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Boolean",optional:!1,field:"state",description:"<p>Estado</p>"},{group:"Parameter",type:"Object",optional:!1,field:"role",description:"<p>Rol a consultar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"role.idRole",description:"<p>Id del rol</p>"},{group:"Parameter",type:"Object",optional:!1,field:"company",description:"<p>Compa\xF1ia a consultar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"company.idCompany",description:"<p>Id de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/mails/:email",title:"Usuario por email",name:"Usuario_por_email",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio regresa un usuario cuando se realiza el login</p>",permission:[{name:"Todos los usuarios"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email ingresado en el login</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`

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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/companies/:eanCompany",title:"Usuarios por compa\xF1ia",name:"Usuarios_por_compa\xF1ia",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite consultar los usuario que pertenecen a una compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id unico de la compa\xF1ia</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/qlik",title:"Generaci\xF3n JWT qlik",name:"Generaci\xF3n_JWT_qlik",group:"qlik",version:"0.1.0",description:"<p>Este servicio permite obtener el token JWT de seguridad de qlik para el ingreso a los informes estad\xEDsticos</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>Nombre del usuario del cliente en qlik</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario del cliente en qlik</p>"}]},examples:[{title:"{",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/QlikWebApi.java",groupTitle:"qlik"}];const pe={name:"Analitica",version:"0.1.0",description:"Documentacion para el proyecto de analitica",url:"http://prescriptiva-service/v1",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Wed Mar 29 2023 10:34:07 GMT-0500 (hora est\xE1ndar de Colombia)",url:"https://apidocjs.com",version:"0.53.1"}};Ue();const Ne=l().compile(y()("#template-header").html()),De=l().compile(y()("#template-footer").html()),ae=l().compile(y()("#template-article").html()),ve=l().compile(y()("#template-compare-article").html()),he=l().compile(y()("#template-generator").html()),Ee=l().compile(y()("#template-project").html()),Ze=l().compile(y()("#template-sections").html()),Ke=l().compile(y()("#template-sidenav").html()),Je={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};pe.template=Object.assign(Je,(Z=pe.template)!=null?Z:{}),pe.template.forceLanguage&&Ie(pe.template.forceLanguage);const Pe=(0,r.groupBy)(je,Y=>Y.group),$e={};y().each(Pe,(Y,z)=>{$e[Y]=(0,r.groupBy)(z,X=>X.name)});const Qe=[];y().each($e,(Y,z)=>{let X=[];y().each(z,(ee,se)=>{const ue=se[0].title;ue&&X.push(ue.toLowerCase()+"#~#"+ee)}),X.sort(),pe.order&&(X=F(X,pe.order,"#~#")),X.forEach(ee=>{const ue=ee.split("#~#")[1];z[ue].forEach(me=>{Qe.push(me)})})}),je=Qe;let Xe={};const Wt={};let It={};It[pe.version]=1,y().each(je,(Y,z)=>{Xe[z.group]=1,Wt[z.group]=z.groupTitle||z.group,It[z.version]=1}),Xe=Object.keys(Xe),Xe.sort(),pe.order&&(Xe=$(Wt,pe.order)),It=Object.keys(It),It.sort(o().compare),It.reverse();const Nt=[];Xe.forEach(Y=>{Nt.push({group:Y,isHeader:!0,title:Wt[Y]});let z="";je.forEach(X=>{X.group===Y&&(z!==X.name?Nt.push({title:X.title,group:Y,name:X.name,type:X.type,version:X.version,url:X.url}):Nt.push({title:X.title,group:Y,hidden:!0,name:X.name,type:X.type,version:X.version,url:X.url}),z=X.name)})});function Tn(Y,z,X){let ee=!1;if(!z)return ee;const se=z.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return se&&se.forEach(function(ue){const me=ue.substring(2,3),Ce=ue.replace(/<.+?>/g,""),Te=ue.match(/id="api-([^-]+)(?:-(.+))?"/),xe=Te?Te[1]:null,Ve=Te?Te[2]:null;me==="1"&&Ce&&xe&&(Y.splice(X,0,{group:xe,isHeader:!0,title:Ce,isFixed:!0}),X++,ee=!0),me==="2"&&Ce&&xe&&Ve&&(Y.splice(X,0,{group:xe,name:Ve,isHeader:!1,title:Ce,isFixed:!1,version:"1.0"}),X++)}),ee}let an;if(pe.header&&(an=Tn(Nt,pe.header.content,0),an||Nt.unshift({group:"_header",isHeader:!0,title:pe.header.title==null?be("General"):pe.header.title,isFixed:!0})),pe.footer){const Y=Nt.length;an=Tn(Nt,pe.footer.content,Nt.length),!an&&pe.footer.title!=null&&Nt.splice(Y,0,{group:"_footer",isHeader:!0,title:pe.footer.title,isFixed:!0})}const zt=pe.title?pe.title:"apiDoc: "+pe.name+" - "+pe.version;y()(document).attr("title",zt),y()("#loader").remove();const gn={nav:Nt};y()("#sidenav").append(Ke(gn)),y()("#generator").append(he(pe)),(0,r.extend)(pe,{versions:It}),y()("#project").append(Ee(pe)),pe.header&&y()("#header").append(Ne(pe.header)),pe.footer&&(y()("#footer").append(De(pe.footer)),pe.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Ft={};let mn="";Xe.forEach(function(Y){const z=[];let X="",ee={},se=Y,ue="";Ft[Y]={},je.forEach(function(me){Y===me.group&&(X!==me.name?(je.forEach(function(Ce){Y===Ce.group&&me.name===Ce.name&&(Object.prototype.hasOwnProperty.call(Ft[me.group],me.name)||(Ft[me.group][me.name]=[]),Ft[me.group][me.name].push(Ce.version))}),ee={article:me,versions:Ft[me.group][me.name]}):ee={article:me,hidden:!0,versions:Ft[me.group][me.name]},pe.sampleUrl&&pe.sampleUrl===!0&&(pe.sampleUrl=window.location.origin),pe.url&&ee.article.url.substr(0,4).toLowerCase()!=="http"&&(ee.article.url=pe.url+ee.article.url),Nn(ee,me),me.groupTitle&&(se=me.groupTitle),me.groupDescription&&(ue=me.groupDescription),z.push({article:ae(ee),group:me.group,name:me.name,aloneDisplay:pe.template.aloneDisplay}),X=me.name)}),ee={group:Y,title:se,description:ue,articles:z,aloneDisplay:pe.template.aloneDisplay},mn+=Ze(ee)}),y()("#sections").append(mn),pe.template.aloneDisplay||(document.body.dataset.spy="scroll",y()("body").scrollspy({target:"#scrollingNav"})),y()(".form-control").on("focus change",function(){y()(this).removeClass("border-danger")}),y()(".sidenav").find("a").on("click",function(Y){Y.preventDefault();const z=this.getAttribute("href");if(pe.template.aloneDisplay){const X=document.querySelector(".sidenav > li.active");X&&X.classList.remove("active"),this.parentNode.classList.add("active")}else{const X=document.querySelector(z);X&&y()("html,body").animate({scrollTop:X.offsetTop},400)}window.location.hash=z});function vt(Y){let z=!1;return y().each(Y,X=>{z=z||(0,r.some)(Y[X],ee=>ee.type)}),z}function An(){y()('button[data-toggle="popover"]').popover().click(function(z){z.preventDefault()});const Y=y()("#version strong").html();if(y()("#sidenav li").removeClass("is-new"),pe.template.withCompare&&y()("#sidenav li[data-version='"+Y+"']").each(function(){const z=y()(this).data("group"),X=y()(this).data("name"),ee=y()("#sidenav li[data-group='"+z+"'][data-name='"+X+"']").length,se=y()("#sidenav li[data-group='"+z+"'][data-name='"+X+"']").index(y()(this));(ee===1||se===ee-1)&&y()(this).addClass("is-new")}),y()(".nav-tabs-examples a").click(function(z){z.preventDefault(),y()(this).tab("show")}),y()(".nav-tabs-examples").find("a:first").tab("show"),y()(".sample-request-content-type-switch").change(function(){y()(this).val()==="body-form-data"?(y()("#sample-request-body-json-input-"+y()(this).data("id")).hide(),y()("#sample-request-body-form-input-"+y()(this).data("id")).show()):(y()("#sample-request-body-form-input-"+y()(this).data("id")).hide(),y()("#sample-request-body-json-input-"+y()(this).data("id")).show())}),pe.template.aloneDisplay&&(y()(".show-group").click(function(){const z="."+y()(this).attr("data-group")+"-group",X="."+y()(this).attr("data-group")+"-article";y()(".show-api-group").addClass("hide"),y()(z).removeClass("hide"),y()(".show-api-article").addClass("hide"),y()(X).removeClass("hide")}),y()(".show-api").click(function(){const z=this.getAttribute("href").substring(1),X=document.getElementById("version").textContent.trim(),ee=`.${this.dataset.name}-article`,se=`[id="${z}-${X}"]`,ue=`.${this.dataset.group}-group`;y()(".show-api-group").addClass("hide"),y()(ue).removeClass("hide"),y()(".show-api-article").addClass("hide");let me=y()(ee);y()(se).length&&(me=y()(se).parent()),me.removeClass("hide"),z.match(/_(header|footer)/)&&document.getElementById(z).classList.remove("hide")})),pe.template.aloneDisplay||y()("body").scrollspy("refresh"),pe.template.aloneDisplay){const z=decodeURI(window.location.hash);if(z!=null&&z.length!==0){const X=document.getElementById("version").textContent.trim(),ee=document.querySelector(`li .${z.slice(1)}-init`),se=document.querySelector(`li[data-version="${X}"] .show-api.${z.slice(1)}-init`);let ue=ee;se&&(ue=se),ue.click()}}}function kn(Y){typeof Y=="undefined"?Y=y()("#version strong").html():y()("#version strong").html(Y),y()("article").addClass("hide"),y()("#sidenav li:not(.nav-fixed)").addClass("hide");const z={};document.querySelectorAll("article[data-version]").forEach(X=>{const ee=X.dataset.group,se=X.dataset.name,ue=X.dataset.version,me=ee+se;!z[me]&&o().lte(ue,Y)&&(z[me]=!0,document.querySelector(`article[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${ee}"]`).classList.remove("hide"))}),y()("article[data-version]").each(function(X){const ee=y()(this).data("group");y()("section#api-"+ee).removeClass("hide"),y()("section#api-"+ee+" article:visible").length===0?y()("section#api-"+ee).addClass("hide"):y()("section#api-"+ee).removeClass("hide")})}if(kn(),y()("#versions li.version a").on("click",function(Y){Y.preventDefault(),kn(y()(this).html())}),y()("#compareAllWithPredecessor").on("click",wn),y()("article .versions li.version a").on("click",cn),y().urlParam=function(Y){const z=new RegExp("[\\?&amp;]"+Y+"=([^&amp;#]*)").exec(window.location.href);return z&&z[1]?z[1]:null},y().urlParam("compare")&&y()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const Y=decodeURI(window.location.hash);y()(Y).length>0&&y()("html,body").animate({scrollTop:parseInt(y()(Y).offset().top)},0)}y()("#scrollingNav .sidenav-search input.search").focus(),y()('[data-action="filter-search"]').on("keyup",Y=>{const z=Y.currentTarget.value.toLowerCase();y()(".sidenav").find("a.nav-list-item").each((X,ee)=>{y()(ee).show(),ee.innerText.toLowerCase().includes(z)||y()(ee).hide()})}),y()("span.search-reset").on("click",function(){y()("#scrollingNav .sidenav-search input.search").val("").focus(),y()(".sidenav").find("a.nav-list-item").show()});function cn(Y){Y.preventDefault();const z=y()(this).parents("article"),X=y()(this).html(),ee=z.find(".version"),se=ee.find("strong").html();ee.find("strong").html(X);const ue=z.data("group"),me=z.data("name"),Ce=z.data("version"),Te=z.data("compare-version");if(Te!==X&&!(!Te&&Ce===X)){if(Te&&Ft[ue][me][0]===X||Ce===X)Kn(ue,me,Ce);else{let xe={},Ve={};y().each($e[ue][me],function(at,Yt){Yt.version===Ce&&(xe=Yt),Yt.version===X&&(Ve=Yt)});const ye={article:xe,compare:Ve,versions:Ft[ue][me]};ye.article.id=ye.article.group+"-"+ye.article.name+"-"+ye.article.version,ye.article.id=ye.article.id.replace(/\./g,"_"),ye.compare.id=ye.compare.group+"-"+ye.compare.name+"-"+ye.compare.version,ye.compare.id=ye.compare.id.replace(/\./g,"_");let Fe=xe;Fe.parameter&&Fe.parameter.fields&&(ye._hasTypeInParameterFields=vt(Fe.parameter.fields)),Fe.error&&Fe.error.fields&&(ye._hasTypeInErrorFields=vt(Fe.error.fields)),Fe.success&&Fe.success.fields&&(ye._hasTypeInSuccessFields=vt(Fe.success.fields)),Fe.info&&Fe.info.fields&&(ye._hasTypeInInfoFields=vt(Fe.info.fields)),Fe=Ve,ye._hasTypeInParameterFields!==!0&&Fe.parameter&&Fe.parameter.fields&&(ye._hasTypeInParameterFields=vt(Fe.parameter.fields)),ye._hasTypeInErrorFields!==!0&&Fe.error&&Fe.error.fields&&(ye._hasTypeInErrorFields=vt(Fe.error.fields)),ye._hasTypeInSuccessFields!==!0&&Fe.success&&Fe.success.fields&&(ye._hasTypeInSuccessFields=vt(Fe.success.fields)),ye._hasTypeInInfoFields!==!0&&Fe.info&&Fe.info.fields&&(ye._hasTypeInInfoFields=vt(Fe.info.fields));const yt=ve(ye);z.after(yt),z.next().find(".versions li.version a").on("click",cn),y()("#sidenav li[data-group='"+ue+"'][data-name='"+me+"'][data-version='"+se+"']").addClass("has-modifications"),z.remove()}h().highlightAll()}}function wn(Y){Y.preventDefault(),y()("article:visible .versions").each(function(){const X=y()(this).parents("article").data("version");let ee=null;y()(this).find("li.version a").each(function(){y()(this).html()<X&&!ee&&(ee=y()(this))}),ee&&ee.trigger("click")})}function Nn(Y,z){Y.id=Y.article.group+"-"+Y.article.name+"-"+Y.article.version,Y.id=Y.id.replace(/\./g,"_"),z.header&&z.header.fields&&(Y._hasTypeInHeaderFields=vt(z.header.fields)),z.parameter&&z.parameter.fields&&(Y._hasTypeInParameterFields=vt(z.parameter.fields)),z.error&&z.error.fields&&(Y._hasTypeInErrorFields=vt(z.error.fields)),z.success&&z.success.fields&&(Y._hasTypeInSuccessFields=vt(z.success.fields)),z.info&&z.info.fields&&(Y._hasTypeInInfoFields=vt(z.info.fields)),Y.template=pe.template}function lo(Y,z,X){let ee={};y().each($e[Y][z],function(ue,me){me.version===X&&(ee=me)});const se={article:ee,versions:Ft[Y][z]};return Nn(se,ee),ae(se)}function Kn(Y,z,X){const ee=y()("article[data-group='"+Y+"'][data-name='"+z+"']:visible"),se=lo(Y,z,X);ee.after(se),ee.next().find(".versions li.version a").on("click",cn),y()("#sidenav li[data-group='"+Y+"'][data-name='"+z+"'][data-version='"+X+"']").removeClass("has-modifications"),ee.remove()}function F(Y,z,X){const ee=[];return z.forEach(function(se){X?Y.forEach(function(ue){const me=ue.split(X);(me[0]===se||me[1]===se)&&ee.push(ue)}):Y.forEach(function(ue){ue===se&&ee.push(se)})}),Y.forEach(function(se){ee.indexOf(se)===-1&&ee.push(se)}),ee}function $(Y,z){const X=[];return z.forEach(ee=>{Object.keys(Y).forEach(se=>{Y[se].replace(/_/g," ")===ee&&X.push(se)})}),Object.keys(Y).forEach(ee=>{X.indexOf(ee)===-1&&X.push(ee)}),X}An()}})()})();
