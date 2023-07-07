(()=>{var Zs={5629:()=>{+function(O){"use strict";var v=".dropdown-backdrop",r='[data-toggle="dropdown"]',g=function(l){O(l).on("click.bs.dropdown",this.toggle)};g.VERSION="3.4.1";function o(l){var a=l.attr("data-target");a||(a=l.attr("href"),a=a&&/#[A-Za-z]/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));var d=a!=="#"?O(document).find(a):null;return d&&d.length?d:l.parent()}function n(l){l&&l.which===3||(O(v).remove(),O(r).each(function(){var a=O(this),d=o(a),m={relatedTarget:this};!d.hasClass("open")||l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&O.contains(d[0],l.target)||(d.trigger(l=O.Event("hide.bs.dropdown",m)),!l.isDefaultPrevented()&&(a.attr("aria-expanded","false"),d.removeClass("open").trigger(O.Event("hidden.bs.dropdown",m))))}))}g.prototype.toggle=function(l){var a=O(this);if(!a.is(".disabled, :disabled")){var d=o(a),m=d.hasClass("open");if(n(),!m){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&O(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(O(this)).on("click",n);var i={relatedTarget:this};if(d.trigger(l=O.Event("show.bs.dropdown",i)),l.isDefaultPrevented())return;a.trigger("focus").attr("aria-expanded","true"),d.toggleClass("open").trigger(O.Event("shown.bs.dropdown",i))}return!1}},g.prototype.keydown=function(l){if(!(!/(38|40|27|32)/.test(l.which)||/input|textarea/i.test(l.target.tagName))){var a=O(this);if(l.preventDefault(),l.stopPropagation(),!a.is(".disabled, :disabled")){var d=o(a),m=d.hasClass("open");if(!m&&l.which!=27||m&&l.which==27)return l.which==27&&d.find(r).trigger("focus"),a.trigger("click");var i=" li:not(.disabled):visible a",h=d.find(".dropdown-menu"+i);if(!!h.length){var u=h.index(l.target);l.which==38&&u>0&&u--,l.which==40&&u<h.length-1&&u++,~u||(u=0),h.eq(u).trigger("focus")}}}};function p(l){return this.each(function(){var a=O(this),d=a.data("bs.dropdown");d||a.data("bs.dropdown",d=new g(this)),typeof l=="string"&&d[l].call(a)})}var c=O.fn.dropdown;O.fn.dropdown=p,O.fn.dropdown.Constructor=g,O.fn.dropdown.noConflict=function(){return O.fn.dropdown=c,this},O(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()}).on("click.bs.dropdown.data-api",r,g.prototype.toggle).on("keydown.bs.dropdown.data-api",r,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery)},7513:()=>{+function(O){"use strict";var v=function(o,n){this.init("popover",o,n)};if(!O.fn.tooltip)throw new Error("Popover requires tooltip.js");v.VERSION="3.4.1",v.DEFAULTS=O.extend({},O.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),v.prototype=O.extend({},O.fn.tooltip.Constructor.prototype),v.prototype.constructor=v,v.prototype.getDefaults=function(){return v.DEFAULTS},v.prototype.setContent=function(){var o=this.tip(),n=this.getTitle(),p=this.getContent();if(this.options.html){var c=typeof p;this.options.sanitize&&(n=this.sanitizeHtml(n),c==="string"&&(p=this.sanitizeHtml(p))),o.find(".popover-title").html(n),o.find(".popover-content").children().detach().end()[c==="string"?"html":"append"](p)}else o.find(".popover-title").text(n),o.find(".popover-content").children().detach().end().text(p);o.removeClass("fade top bottom left right in"),o.find(".popover-title").html()||o.find(".popover-title").hide()},v.prototype.hasContent=function(){return this.getTitle()||this.getContent()},v.prototype.getContent=function(){var o=this.$element,n=this.options;return o.attr("data-content")||(typeof n.content=="function"?n.content.call(o[0]):n.content)},v.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function r(o){return this.each(function(){var n=O(this),p=n.data("bs.popover"),c=typeof o=="object"&&o;!p&&/destroy|hide/.test(o)||(p||n.data("bs.popover",p=new v(this,c)),typeof o=="string"&&p[o]())})}var g=O.fn.popover;O.fn.popover=r,O.fn.popover.Constructor=v,O.fn.popover.noConflict=function(){return O.fn.popover=g,this}}(jQuery)},2623:()=>{+function(O){"use strict";function v(o,n){this.$body=O(document.body),this.$scrollElement=O(o).is(document.body)?O(window):O(o),this.options=O.extend({},v.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",O.proxy(this.process,this)),this.refresh(),this.process()}v.VERSION="3.4.1",v.DEFAULTS={offset:10},v.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},v.prototype.refresh=function(){var o=this,n="offset",p=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),O.isWindow(this.$scrollElement[0])||(n="position",p=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=O(this),l=c.data("target")||c.attr("href"),a=/^#./.test(l)&&O(l);return a&&a.length&&a.is(":visible")&&[[a[n]().top+p,l]]||null}).sort(function(c,l){return c[0]-l[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},v.prototype.process=function(){var o=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),p=this.options.offset+n-this.$scrollElement.height(),c=this.offsets,l=this.targets,a=this.activeTarget,d;if(this.scrollHeight!=n&&this.refresh(),o>=p)return a!=(d=l[l.length-1])&&this.activate(d);if(a&&o<c[0])return this.activeTarget=null,this.clear();for(d=c.length;d--;)a!=l[d]&&o>=c[d]&&(c[d+1]===void 0||o<c[d+1])&&this.activate(l[d])},v.prototype.activate=function(o){this.activeTarget=o,this.clear();var n=this.selector+'[data-target="'+o+'"],'+this.selector+'[href="'+o+'"]',p=O(n).parents("li").addClass("active");p.parent(".dropdown-menu").length&&(p=p.closest("li.dropdown").addClass("active")),p.trigger("activate.bs.scrollspy")},v.prototype.clear=function(){O(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function r(o){return this.each(function(){var n=O(this),p=n.data("bs.scrollspy"),c=typeof o=="object"&&o;p||n.data("bs.scrollspy",p=new v(this,c)),typeof o=="string"&&p[o]()})}var g=O.fn.scrollspy;O.fn.scrollspy=r,O.fn.scrollspy.Constructor=v,O.fn.scrollspy.noConflict=function(){return O.fn.scrollspy=g,this},O(window).on("load.bs.scrollspy.data-api",function(){O('[data-spy="scroll"]').each(function(){var o=O(this);r.call(o,o.data())})})}(jQuery)},9365:()=>{+function(O){"use strict";var v=function(n){this.element=O(n)};v.VERSION="3.4.1",v.TRANSITION_DURATION=150,v.prototype.show=function(){var n=this.element,p=n.closest("ul:not(.dropdown-menu)"),c=n.data("target");if(c||(c=n.attr("href"),c=c&&c.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var l=p.find(".active:last a"),a=O.Event("hide.bs.tab",{relatedTarget:n[0]}),d=O.Event("show.bs.tab",{relatedTarget:l[0]});if(l.trigger(a),n.trigger(d),!(d.isDefaultPrevented()||a.isDefaultPrevented())){var m=O(document).find(c);this.activate(n.closest("li"),p),this.activate(m,m.parent(),function(){l.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:l[0]})})}}},v.prototype.activate=function(n,p,c){var l=p.find("> .active"),a=c&&O.support.transition&&(l.length&&l.hasClass("fade")||!!p.find("> .fade").length);function d(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),c&&c()}l.length&&a?l.one("bsTransitionEnd",d).emulateTransitionEnd(v.TRANSITION_DURATION):d(),l.removeClass("in")};function r(n){return this.each(function(){var p=O(this),c=p.data("bs.tab");c||p.data("bs.tab",c=new v(this)),typeof n=="string"&&c[n]()})}var g=O.fn.tab;O.fn.tab=r,O.fn.tab.Constructor=v,O.fn.tab.noConflict=function(){return O.fn.tab=g,this};var o=function(n){n.preventDefault(),r.call(O(this),"show")};O(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery)},1662:()=>{+function(O){"use strict";var v=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],g=/^aria-[\w-]*$/i,o={"*":["class","dir","id","lang","role",g],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,p=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function c(i,h){var u=i.nodeName.toLowerCase();if(O.inArray(u,h)!==-1)return O.inArray(u,r)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(p)):!0;for(var f=O(h).filter(function(b,P){return P instanceof RegExp}),S=0,y=f.length;S<y;S++)if(u.match(f[S]))return!0;return!1}function l(i,h,u){if(i.length===0)return i;if(u&&typeof u=="function")return u(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=i;for(var S=O.map(h,function(x,_){return _}),y=O(f.body).find("*"),b=0,P=y.length;b<P;b++){var E=y[b],N=E.nodeName.toLowerCase();if(O.inArray(N,S)===-1){E.parentNode.removeChild(E);continue}for(var T=O.map(E.attributes,function(x){return x}),A=[].concat(h["*"]||[],h[N]||[]),D=0,M=T.length;D<M;D++)c(T[D],A)||E.removeAttribute(T[D].nodeName)}return f.body.innerHTML}var a=function(i,h){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,h)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:o},a.prototype.init=function(i,h,u){if(this.enabled=!0,this.type=i,this.$element=O(h),this.options=this.getOptions(u),this.$viewport=this.options.viewport&&O(document).find(O.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),S=f.length;S--;){var y=f[S];if(y=="click")this.$element.on("click."+this.type,this.options.selector,O.proxy(this.toggle,this));else if(y!="manual"){var b=y=="hover"?"mouseenter":"focusin",P=y=="hover"?"mouseleave":"focusout";this.$element.on(b+"."+this.type,this.options.selector,O.proxy(this.enter,this)),this.$element.on(P+"."+this.type,this.options.selector,O.proxy(this.leave,this))}}this.options.selector?this._options=O.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},a.prototype.getDefaults=function(){return a.DEFAULTS},a.prototype.getOptions=function(i){var h=this.$element.data();for(var u in h)h.hasOwnProperty(u)&&O.inArray(u,v)!==-1&&delete h[u];return i=O.extend({},this.getDefaults(),h,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=l(i.template,i.whiteList,i.sanitizeFn)),i},a.prototype.getDelegateOptions=function(){var i={},h=this.getDefaults();return this._options&&O.each(this._options,function(u,f){h[u]!=f&&(i[u]=f)}),i},a.prototype.enter=function(i){var h=i instanceof this.constructor?i:O(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h)),i instanceof O.Event&&(h.inState[i.type=="focusin"?"focus":"hover"]=!0),h.tip().hasClass("in")||h.hoverState=="in"){h.hoverState="in";return}if(clearTimeout(h.timeout),h.hoverState="in",!h.options.delay||!h.options.delay.show)return h.show();h.timeout=setTimeout(function(){h.hoverState=="in"&&h.show()},h.options.delay.show)},a.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},a.prototype.leave=function(i){var h=i instanceof this.constructor?i:O(i.currentTarget).data("bs."+this.type);if(h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h)),i instanceof O.Event&&(h.inState[i.type=="focusout"?"focus":"hover"]=!1),!h.isInStateTrue()){if(clearTimeout(h.timeout),h.hoverState="out",!h.options.delay||!h.options.delay.hide)return h.hide();h.timeout=setTimeout(function(){h.hoverState=="out"&&h.hide()},h.options.delay.hide)}},a.prototype.show=function(){var i=O.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var h=O.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!h)return;var u=this,f=this.tip(),S=this.getUID(this.type);this.setContent(),f.attr("id",S),this.$element.attr("aria-describedby",S),this.options.animation&&f.addClass("fade");var y=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,b=/\s?auto?\s?/i,P=b.test(y);P&&(y=y.replace(b,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?f.appendTo(O(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var E=this.getPosition(),N=f[0].offsetWidth,T=f[0].offsetHeight;if(P){var A=y,D=this.getPosition(this.$viewport);y=y=="bottom"&&E.bottom+T>D.bottom?"top":y=="top"&&E.top-T<D.top?"bottom":y=="right"&&E.right+N>D.width?"left":y=="left"&&E.left-N<D.left?"right":y,f.removeClass(A).addClass(y)}var M=this.getCalculatedOffset(y,E,N,T);this.applyPlacement(M,y);var x=function(){var _=u.hoverState;u.$element.trigger("shown.bs."+u.type),u.hoverState=null,_=="out"&&u.leave(u)};O.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",x).emulateTransitionEnd(a.TRANSITION_DURATION):x()}},a.prototype.applyPlacement=function(i,h){var u=this.tip(),f=u[0].offsetWidth,S=u[0].offsetHeight,y=parseInt(u.css("margin-top"),10),b=parseInt(u.css("margin-left"),10);isNaN(y)&&(y=0),isNaN(b)&&(b=0),i.top+=y,i.left+=b,O.offset.setOffset(u[0],O.extend({using:function(M){u.css({top:Math.round(M.top),left:Math.round(M.left)})}},i),0),u.addClass("in");var P=u[0].offsetWidth,E=u[0].offsetHeight;h=="top"&&E!=S&&(i.top=i.top+S-E);var N=this.getViewportAdjustedDelta(h,i,P,E);N.left?i.left+=N.left:i.top+=N.top;var T=/top|bottom/.test(h),A=T?N.left*2-f+P:N.top*2-S+E,D=T?"offsetWidth":"offsetHeight";u.offset(i),this.replaceArrow(A,u[0][D],T)},a.prototype.replaceArrow=function(i,h,u){this.arrow().css(u?"left":"top",50*(1-i/h)+"%").css(u?"top":"left","")},a.prototype.setContent=function(){var i=this.tip(),h=this.getTitle();this.options.html?(this.options.sanitize&&(h=l(h,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(h)):i.find(".tooltip-inner").text(h),i.removeClass("fade in top bottom left right")},a.prototype.hide=function(i){var h=this,u=O(this.$tip),f=O.Event("hide.bs."+this.type);function S(){h.hoverState!="in"&&u.detach(),h.$element&&h.$element.removeAttr("aria-describedby").trigger("hidden.bs."+h.type),i&&i()}if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),O.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",S).emulateTransitionEnd(a.TRANSITION_DURATION):S(),this.hoverState=null,this},a.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},a.prototype.hasContent=function(){return this.getTitle()},a.prototype.getPosition=function(i){i=i||this.$element;var h=i[0],u=h.tagName=="BODY",f=h.getBoundingClientRect();f.width==null&&(f=O.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var S=window.SVGElement&&h instanceof window.SVGElement,y=u?{top:0,left:0}:S?null:i.offset(),b={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},P=u?{width:O(window).width(),height:O(window).height()}:null;return O.extend({},f,b,P,y)},a.prototype.getCalculatedOffset=function(i,h,u,f){return i=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-u/2}:i=="top"?{top:h.top-f,left:h.left+h.width/2-u/2}:i=="left"?{top:h.top+h.height/2-f/2,left:h.left-u}:{top:h.top+h.height/2-f/2,left:h.left+h.width}},a.prototype.getViewportAdjustedDelta=function(i,h,u,f){var S={top:0,left:0};if(!this.$viewport)return S;var y=this.options.viewport&&this.options.viewport.padding||0,b=this.getPosition(this.$viewport);if(/right|left/.test(i)){var P=h.top-y-b.scroll,E=h.top+y-b.scroll+f;P<b.top?S.top=b.top-P:E>b.top+b.height&&(S.top=b.top+b.height-E)}else{var N=h.left-y,T=h.left+y+u;N<b.left?S.left=b.left-N:T>b.right&&(S.left=b.left+b.width-T)}return S},a.prototype.getTitle=function(){var i,h=this.$element,u=this.options;return i=h.attr("data-original-title")||(typeof u.title=="function"?u.title.call(h[0]):u.title),i},a.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},a.prototype.tip=function(){if(!this.$tip&&(this.$tip=O(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},a.prototype.enable=function(){this.enabled=!0},a.prototype.disable=function(){this.enabled=!1},a.prototype.toggleEnabled=function(){this.enabled=!this.enabled},a.prototype.toggle=function(i){var h=this;i&&(h=O(i.currentTarget).data("bs."+this.type),h||(h=new this.constructor(i.currentTarget,this.getDelegateOptions()),O(i.currentTarget).data("bs."+this.type,h))),i?(h.inState.click=!h.inState.click,h.isInStateTrue()?h.enter(h):h.leave(h)):h.tip().hasClass("in")?h.leave(h):h.enter(h)},a.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},a.prototype.sanitizeHtml=function(i){return l(i,this.options.whiteList,this.options.sanitizeFn)};function d(i){return this.each(function(){var h=O(this),u=h.data("bs.tooltip"),f=typeof i=="object"&&i;!u&&/destroy|hide/.test(i)||(u||h.data("bs.tooltip",u=new a(this,f)),typeof i=="string"&&u[i]())})}var m=O.fn.tooltip;O.fn.tooltip=d,O.fn.tooltip.Constructor=a,O.fn.tooltip.noConflict=function(){return O.fn.tooltip=m,this}}(jQuery)},6770:O=>{var v=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},r=-1,g=1,o=0;v.Diff=function(n,p){return[n,p]},v.prototype.diff_main=function(n,p,c,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var a=l;if(n==null||p==null)throw new Error("Null input. (diff_main)");if(n==p)return n?[new v.Diff(o,n)]:[];typeof c=="undefined"&&(c=!0);var d=c,m=this.diff_commonPrefix(n,p),i=n.substring(0,m);n=n.substring(m),p=p.substring(m),m=this.diff_commonSuffix(n,p);var h=n.substring(n.length-m);n=n.substring(0,n.length-m),p=p.substring(0,p.length-m);var u=this.diff_compute_(n,p,d,a);return i&&u.unshift(new v.Diff(o,i)),h&&u.push(new v.Diff(o,h)),this.diff_cleanupMerge(u),u},v.prototype.diff_compute_=function(n,p,c,l){var a;if(!n)return[new v.Diff(g,p)];if(!p)return[new v.Diff(r,n)];var d=n.length>p.length?n:p,m=n.length>p.length?p:n,i=d.indexOf(m);if(i!=-1)return a=[new v.Diff(g,d.substring(0,i)),new v.Diff(o,m),new v.Diff(g,d.substring(i+m.length))],n.length>p.length&&(a[0][0]=a[2][0]=r),a;if(m.length==1)return[new v.Diff(r,n),new v.Diff(g,p)];var h=this.diff_halfMatch_(n,p);if(h){var u=h[0],f=h[1],S=h[2],y=h[3],b=h[4],P=this.diff_main(u,S,c,l),E=this.diff_main(f,y,c,l);return P.concat([new v.Diff(o,b)],E)}return c&&n.length>100&&p.length>100?this.diff_lineMode_(n,p,l):this.diff_bisect_(n,p,l)},v.prototype.diff_lineMode_=function(n,p,c){var l=this.diff_linesToChars_(n,p);n=l.chars1,p=l.chars2;var a=l.lineArray,d=this.diff_main(n,p,!1,c);this.diff_charsToLines_(d,a),this.diff_cleanupSemantic(d),d.push(new v.Diff(o,""));for(var m=0,i=0,h=0,u="",f="";m<d.length;){switch(d[m][0]){case g:h++,f+=d[m][1];break;case r:i++,u+=d[m][1];break;case o:if(i>=1&&h>=1){d.splice(m-i-h,i+h),m=m-i-h;for(var S=this.diff_main(u,f,!1,c),y=S.length-1;y>=0;y--)d.splice(m,0,S[y]);m=m+S.length}h=0,i=0,u="",f="";break}m++}return d.pop(),d},v.prototype.diff_bisect_=function(n,p,c){for(var l=n.length,a=p.length,d=Math.ceil((l+a)/2),m=d,i=2*d,h=new Array(i),u=new Array(i),f=0;f<i;f++)h[f]=-1,u[f]=-1;h[m+1]=0,u[m+1]=0;for(var S=l-a,y=S%2!=0,b=0,P=0,E=0,N=0,T=0;T<d&&!(new Date().getTime()>c);T++){for(var A=-T+b;A<=T-P;A+=2){var D=m+A,M;A==-T||A!=T&&h[D-1]<h[D+1]?M=h[D+1]:M=h[D-1]+1;for(var x=M-A;M<l&&x<a&&n.charAt(M)==p.charAt(x);)M++,x++;if(h[D]=M,M>l)P+=2;else if(x>a)b+=2;else if(y){var _=m+S-A;if(_>=0&&_<i&&u[_]!=-1){var I=l-u[_];if(M>=I)return this.diff_bisectSplit_(n,p,M,x,c)}}}for(var U=-T+E;U<=T-N;U+=2){var _=m+U,I;U==-T||U!=T&&u[_-1]<u[_+1]?I=u[_+1]:I=u[_-1]+1;for(var F=I-U;I<l&&F<a&&n.charAt(l-I-1)==p.charAt(a-F-1);)I++,F++;if(u[_]=I,I>l)N+=2;else if(F>a)E+=2;else if(!y){var D=m+S-U;if(D>=0&&D<i&&h[D]!=-1){var M=h[D],x=m+M-D;if(I=l-I,M>=I)return this.diff_bisectSplit_(n,p,M,x,c)}}}}return[new v.Diff(r,n),new v.Diff(g,p)]},v.prototype.diff_bisectSplit_=function(n,p,c,l,a){var d=n.substring(0,c),m=p.substring(0,l),i=n.substring(c),h=p.substring(l),u=this.diff_main(d,m,!1,a),f=this.diff_main(i,h,!1,a);return u.concat(f)},v.prototype.diff_linesToChars_=function(n,p){var c=[],l={};c[0]="";function a(h){for(var u="",f=0,S=-1,y=c.length;S<h.length-1;){S=h.indexOf(`
`,f),S==-1&&(S=h.length-1);var b=h.substring(f,S+1);(l.hasOwnProperty?l.hasOwnProperty(b):l[b]!==void 0)?u+=String.fromCharCode(l[b]):(y==d&&(b=h.substring(f),S=h.length),u+=String.fromCharCode(y),l[b]=y,c[y++]=b),f=S+1}return u}var d=4e4,m=a(n);d=65535;var i=a(p);return{chars1:m,chars2:i,lineArray:c}},v.prototype.diff_charsToLines_=function(n,p){for(var c=0;c<n.length;c++){for(var l=n[c][1],a=[],d=0;d<l.length;d++)a[d]=p[l.charCodeAt(d)];n[c][1]=a.join("")}},v.prototype.diff_commonPrefix=function(n,p){if(!n||!p||n.charAt(0)!=p.charAt(0))return 0;for(var c=0,l=Math.min(n.length,p.length),a=l,d=0;c<a;)n.substring(d,a)==p.substring(d,a)?(c=a,d=c):l=a,a=Math.floor((l-c)/2+c);return a},v.prototype.diff_commonSuffix=function(n,p){if(!n||!p||n.charAt(n.length-1)!=p.charAt(p.length-1))return 0;for(var c=0,l=Math.min(n.length,p.length),a=l,d=0;c<a;)n.substring(n.length-a,n.length-d)==p.substring(p.length-a,p.length-d)?(c=a,d=c):l=a,a=Math.floor((l-c)/2+c);return a},v.prototype.diff_commonOverlap_=function(n,p){var c=n.length,l=p.length;if(c==0||l==0)return 0;c>l?n=n.substring(c-l):c<l&&(p=p.substring(0,c));var a=Math.min(c,l);if(n==p)return a;for(var d=0,m=1;;){var i=n.substring(a-m),h=p.indexOf(i);if(h==-1)return d;m+=h,(h==0||n.substring(a-m)==p.substring(0,m))&&(d=m,m++)}},v.prototype.diff_halfMatch_=function(n,p){if(this.Diff_Timeout<=0)return null;var c=n.length>p.length?n:p,l=n.length>p.length?p:n;if(c.length<4||l.length*2<c.length)return null;var a=this;function d(P,E,N){for(var T=P.substring(N,N+Math.floor(P.length/4)),A=-1,D="",M,x,_,I;(A=E.indexOf(T,A+1))!=-1;){var U=a.diff_commonPrefix(P.substring(N),E.substring(A)),F=a.diff_commonSuffix(P.substring(0,N),E.substring(0,A));D.length<F+U&&(D=E.substring(A-F,A)+E.substring(A,A+U),M=P.substring(0,N-F),x=P.substring(N+U),_=E.substring(0,A-F),I=E.substring(A+U))}return D.length*2>=P.length?[M,x,_,I,D]:null}var m=d(c,l,Math.ceil(c.length/4)),i=d(c,l,Math.ceil(c.length/2)),h;if(!m&&!i)return null;i?m?h=m[4].length>i[4].length?m:i:h=i:h=m;var u,f,S,y;n.length>p.length?(u=h[0],f=h[1],S=h[2],y=h[3]):(S=h[0],y=h[1],u=h[2],f=h[3]);var b=h[4];return[u,f,S,y,b]},v.prototype.diff_cleanupSemantic=function(n){for(var p=!1,c=[],l=0,a=null,d=0,m=0,i=0,h=0,u=0;d<n.length;)n[d][0]==o?(c[l++]=d,m=h,i=u,h=0,u=0,a=n[d][1]):(n[d][0]==g?h+=n[d][1].length:u+=n[d][1].length,a&&a.length<=Math.max(m,i)&&a.length<=Math.max(h,u)&&(n.splice(c[l-1],0,new v.Diff(r,a)),n[c[l-1]+1][0]=g,l--,l--,d=l>0?c[l-1]:-1,m=0,i=0,h=0,u=0,a=null,p=!0)),d++;for(p&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),d=1;d<n.length;){if(n[d-1][0]==r&&n[d][0]==g){var f=n[d-1][1],S=n[d][1],y=this.diff_commonOverlap_(f,S),b=this.diff_commonOverlap_(S,f);y>=b?(y>=f.length/2||y>=S.length/2)&&(n.splice(d,0,new v.Diff(o,S.substring(0,y))),n[d-1][1]=f.substring(0,f.length-y),n[d+1][1]=S.substring(y),d++):(b>=f.length/2||b>=S.length/2)&&(n.splice(d,0,new v.Diff(o,f.substring(0,b))),n[d-1][0]=g,n[d-1][1]=S.substring(0,S.length-b),n[d+1][0]=r,n[d+1][1]=f.substring(b),d++),d++}d++}},v.prototype.diff_cleanupSemanticLossless=function(n){function p(b,P){if(!b||!P)return 6;var E=b.charAt(b.length-1),N=P.charAt(0),T=E.match(v.nonAlphaNumericRegex_),A=N.match(v.nonAlphaNumericRegex_),D=T&&E.match(v.whitespaceRegex_),M=A&&N.match(v.whitespaceRegex_),x=D&&E.match(v.linebreakRegex_),_=M&&N.match(v.linebreakRegex_),I=x&&b.match(v.blanklineEndRegex_),U=_&&P.match(v.blanklineStartRegex_);return I||U?5:x||_?4:T&&!D&&M?3:D||M?2:T||A?1:0}for(var c=1;c<n.length-1;){if(n[c-1][0]==o&&n[c+1][0]==o){var l=n[c-1][1],a=n[c][1],d=n[c+1][1],m=this.diff_commonSuffix(l,a);if(m){var i=a.substring(a.length-m);l=l.substring(0,l.length-m),a=i+a.substring(0,a.length-m),d=i+d}for(var h=l,u=a,f=d,S=p(l,a)+p(a,d);a.charAt(0)===d.charAt(0);){l+=a.charAt(0),a=a.substring(1)+d.charAt(0),d=d.substring(1);var y=p(l,a)+p(a,d);y>=S&&(S=y,h=l,u=a,f=d)}n[c-1][1]!=h&&(h?n[c-1][1]=h:(n.splice(c-1,1),c--),n[c][1]=u,f?n[c+1][1]=f:(n.splice(c+1,1),c--))}c++}},v.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,v.whitespaceRegex_=/\s/,v.linebreakRegex_=/[\r\n]/,v.blanklineEndRegex_=/\n\r?\n$/,v.blanklineStartRegex_=/^\r?\n\r?\n/,v.prototype.diff_cleanupEfficiency=function(n){for(var p=!1,c=[],l=0,a=null,d=0,m=!1,i=!1,h=!1,u=!1;d<n.length;)n[d][0]==o?(n[d][1].length<this.Diff_EditCost&&(h||u)?(c[l++]=d,m=h,i=u,a=n[d][1]):(l=0,a=null),h=u=!1):(n[d][0]==r?u=!0:h=!0,a&&(m&&i&&h&&u||a.length<this.Diff_EditCost/2&&m+i+h+u==3)&&(n.splice(c[l-1],0,new v.Diff(r,a)),n[c[l-1]+1][0]=g,l--,a=null,m&&i?(h=u=!0,l=0):(l--,d=l>0?c[l-1]:-1,h=u=!1),p=!0)),d++;p&&this.diff_cleanupMerge(n)},v.prototype.diff_cleanupMerge=function(n){n.push(new v.Diff(o,""));for(var p=0,c=0,l=0,a="",d="",m;p<n.length;)switch(n[p][0]){case g:l++,d+=n[p][1],p++;break;case r:c++,a+=n[p][1],p++;break;case o:c+l>1?(c!==0&&l!==0&&(m=this.diff_commonPrefix(d,a),m!==0&&(p-c-l>0&&n[p-c-l-1][0]==o?n[p-c-l-1][1]+=d.substring(0,m):(n.splice(0,0,new v.Diff(o,d.substring(0,m))),p++),d=d.substring(m),a=a.substring(m)),m=this.diff_commonSuffix(d,a),m!==0&&(n[p][1]=d.substring(d.length-m)+n[p][1],d=d.substring(0,d.length-m),a=a.substring(0,a.length-m))),p-=c+l,n.splice(p,c+l),a.length&&(n.splice(p,0,new v.Diff(r,a)),p++),d.length&&(n.splice(p,0,new v.Diff(g,d)),p++),p++):p!==0&&n[p-1][0]==o?(n[p-1][1]+=n[p][1],n.splice(p,1)):p++,l=0,c=0,a="",d="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(p=1;p<n.length-1;)n[p-1][0]==o&&n[p+1][0]==o&&(n[p][1].substring(n[p][1].length-n[p-1][1].length)==n[p-1][1]?(n[p][1]=n[p-1][1]+n[p][1].substring(0,n[p][1].length-n[p-1][1].length),n[p+1][1]=n[p-1][1]+n[p+1][1],n.splice(p-1,1),i=!0):n[p][1].substring(0,n[p+1][1].length)==n[p+1][1]&&(n[p-1][1]+=n[p+1][1],n[p][1]=n[p][1].substring(n[p+1][1].length)+n[p+1][1],n.splice(p+1,1),i=!0)),p++;i&&this.diff_cleanupMerge(n)},v.prototype.diff_xIndex=function(n,p){var c=0,l=0,a=0,d=0,m;for(m=0;m<n.length&&(n[m][0]!==g&&(c+=n[m][1].length),n[m][0]!==r&&(l+=n[m][1].length),!(c>p));m++)a=c,d=l;return n.length!=m&&n[m][0]===r?d:d+(p-a)},v.prototype.diff_prettyHtml=function(n){for(var p=[],c=/&/g,l=/</g,a=/>/g,d=/\n/g,m=0;m<n.length;m++){var i=n[m][0],h=n[m][1],u=h.replace(c,"&amp;").replace(l,"&lt;").replace(a,"&gt;").replace(d,"&para;<br>");switch(i){case g:p[m]='<ins style="background:#e6ffe6;">'+u+"</ins>";break;case r:p[m]='<del style="background:#ffe6e6;">'+u+"</del>";break;case o:p[m]="<span>"+u+"</span>";break}}return p.join("")},v.prototype.diff_text1=function(n){for(var p=[],c=0;c<n.length;c++)n[c][0]!==g&&(p[c]=n[c][1]);return p.join("")},v.prototype.diff_text2=function(n){for(var p=[],c=0;c<n.length;c++)n[c][0]!==r&&(p[c]=n[c][1]);return p.join("")},v.prototype.diff_levenshtein=function(n){for(var p=0,c=0,l=0,a=0;a<n.length;a++){var d=n[a][0],m=n[a][1];switch(d){case g:c+=m.length;break;case r:l+=m.length;break;case o:p+=Math.max(c,l),c=0,l=0;break}}return p+=Math.max(c,l),p},v.prototype.diff_toDelta=function(n){for(var p=[],c=0;c<n.length;c++)switch(n[c][0]){case g:p[c]="+"+encodeURI(n[c][1]);break;case r:p[c]="-"+n[c][1].length;break;case o:p[c]="="+n[c][1].length;break}return p.join("	").replace(/%20/g," ")},v.prototype.diff_fromDelta=function(n,p){for(var c=[],l=0,a=0,d=p.split(/\t/g),m=0;m<d.length;m++){var i=d[m].substring(1);switch(d[m].charAt(0)){case"+":try{c[l++]=new v.Diff(g,decodeURI(i))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var h=parseInt(i,10);if(isNaN(h)||h<0)throw new Error("Invalid number in diff_fromDelta: "+i);var u=n.substring(a,a+=h);d[m].charAt(0)=="="?c[l++]=new v.Diff(o,u):c[l++]=new v.Diff(r,u);break;default:if(d[m])throw new Error("Invalid diff operation in diff_fromDelta: "+d[m])}}if(a!=n.length)throw new Error("Delta length ("+a+") does not equal source text length ("+n.length+").");return c},v.prototype.match_main=function(n,p,c){if(n==null||p==null||c==null)throw new Error("Null input. (match_main)");return c=Math.max(0,Math.min(c,n.length)),n==p?0:n.length?n.substring(c,c+p.length)==p?c:this.match_bitap_(n,p,c):-1},v.prototype.match_bitap_=function(n,p,c){if(p.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(p),a=this;function d(M,x){var _=M/p.length,I=Math.abs(c-x);return a.Match_Distance?_+I/a.Match_Distance:I?1:_}var m=this.Match_Threshold,i=n.indexOf(p,c);i!=-1&&(m=Math.min(d(0,i),m),i=n.lastIndexOf(p,c+p.length),i!=-1&&(m=Math.min(d(0,i),m)));var h=1<<p.length-1;i=-1;for(var u,f,S=p.length+n.length,y,b=0;b<p.length;b++){for(u=0,f=S;u<f;)d(b,c+f)<=m?u=f:S=f,f=Math.floor((S-u)/2+u);S=f;var P=Math.max(1,c-f+1),E=Math.min(c+f,n.length)+p.length,N=Array(E+2);N[E+1]=(1<<b)-1;for(var T=E;T>=P;T--){var A=l[n.charAt(T-1)];if(b===0?N[T]=(N[T+1]<<1|1)&A:N[T]=(N[T+1]<<1|1)&A|((y[T+1]|y[T])<<1|1)|y[T+1],N[T]&h){var D=d(b,T-1);if(D<=m)if(m=D,i=T-1,i>c)P=Math.max(1,2*c-i);else break}}if(d(b+1,c)>m)break;y=N}return i},v.prototype.match_alphabet_=function(n){for(var p={},c=0;c<n.length;c++)p[n.charAt(c)]=0;for(var c=0;c<n.length;c++)p[n.charAt(c)]|=1<<n.length-c-1;return p},v.prototype.patch_addContext_=function(n,p){if(p.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var c=p.substring(n.start2,n.start2+n.length1),l=0;p.indexOf(c)!=p.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,c=p.substring(n.start2-l,n.start2+n.length1+l);l+=this.Patch_Margin;var a=p.substring(n.start2-l,n.start2);a&&n.diffs.unshift(new v.Diff(o,a));var d=p.substring(n.start2+n.length1,n.start2+n.length1+l);d&&n.diffs.push(new v.Diff(o,d)),n.start1-=a.length,n.start2-=a.length,n.length1+=a.length+d.length,n.length2+=a.length+d.length}},v.prototype.patch_make=function(n,p,c){var l,a;if(typeof n=="string"&&typeof p=="string"&&typeof c=="undefined")l=n,a=this.diff_main(l,p,!0),a.length>2&&(this.diff_cleanupSemantic(a),this.diff_cleanupEfficiency(a));else if(n&&typeof n=="object"&&typeof p=="undefined"&&typeof c=="undefined")a=n,l=this.diff_text1(a);else if(typeof n=="string"&&p&&typeof p=="object"&&typeof c=="undefined")l=n,a=p;else if(typeof n=="string"&&typeof p=="string"&&c&&typeof c=="object")l=n,a=c;else throw new Error("Unknown call format to patch_make.");if(a.length===0)return[];for(var d=[],m=new v.patch_obj,i=0,h=0,u=0,f=l,S=l,y=0;y<a.length;y++){var b=a[y][0],P=a[y][1];switch(!i&&b!==o&&(m.start1=h,m.start2=u),b){case g:m.diffs[i++]=a[y],m.length2+=P.length,S=S.substring(0,u)+P+S.substring(u);break;case r:m.length1+=P.length,m.diffs[i++]=a[y],S=S.substring(0,u)+S.substring(u+P.length);break;case o:P.length<=2*this.Patch_Margin&&i&&a.length!=y+1?(m.diffs[i++]=a[y],m.length1+=P.length,m.length2+=P.length):P.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(m,f),d.push(m),m=new v.patch_obj,i=0,f=S,h=u);break}b!==g&&(h+=P.length),b!==r&&(u+=P.length)}return i&&(this.patch_addContext_(m,f),d.push(m)),d},v.prototype.patch_deepCopy=function(n){for(var p=[],c=0;c<n.length;c++){var l=n[c],a=new v.patch_obj;a.diffs=[];for(var d=0;d<l.diffs.length;d++)a.diffs[d]=new v.Diff(l.diffs[d][0],l.diffs[d][1]);a.start1=l.start1,a.start2=l.start2,a.length1=l.length1,a.length2=l.length2,p[c]=a}return p},v.prototype.patch_apply=function(n,p){if(n.length==0)return[p,[]];n=this.patch_deepCopy(n);var c=this.patch_addPadding(n);p=c+p+c,this.patch_splitMax(n);for(var l=0,a=[],d=0;d<n.length;d++){var m=n[d].start2+l,i=this.diff_text1(n[d].diffs),h,u=-1;if(i.length>this.Match_MaxBits?(h=this.match_main(p,i.substring(0,this.Match_MaxBits),m),h!=-1&&(u=this.match_main(p,i.substring(i.length-this.Match_MaxBits),m+i.length-this.Match_MaxBits),(u==-1||h>=u)&&(h=-1))):h=this.match_main(p,i,m),h==-1)a[d]=!1,l-=n[d].length2-n[d].length1;else{a[d]=!0,l=h-m;var f;if(u==-1?f=p.substring(h,h+i.length):f=p.substring(h,u+this.Match_MaxBits),i==f)p=p.substring(0,h)+this.diff_text2(n[d].diffs)+p.substring(h+i.length);else{var S=this.diff_main(i,f,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(S)/i.length>this.Patch_DeleteThreshold)a[d]=!1;else{this.diff_cleanupSemanticLossless(S);for(var y=0,b,P=0;P<n[d].diffs.length;P++){var E=n[d].diffs[P];E[0]!==o&&(b=this.diff_xIndex(S,y)),E[0]===g?p=p.substring(0,h+b)+E[1]+p.substring(h+b):E[0]===r&&(p=p.substring(0,h+b)+p.substring(h+this.diff_xIndex(S,y+E[1].length))),E[0]!==r&&(y+=E[1].length)}}}}}return p=p.substring(c.length,p.length-c.length),[p,a]},v.prototype.patch_addPadding=function(n){for(var p=this.Patch_Margin,c="",l=1;l<=p;l++)c+=String.fromCharCode(l);for(var l=0;l<n.length;l++)n[l].start1+=p,n[l].start2+=p;var a=n[0],d=a.diffs;if(d.length==0||d[0][0]!=o)d.unshift(new v.Diff(o,c)),a.start1-=p,a.start2-=p,a.length1+=p,a.length2+=p;else if(p>d[0][1].length){var m=p-d[0][1].length;d[0][1]=c.substring(d[0][1].length)+d[0][1],a.start1-=m,a.start2-=m,a.length1+=m,a.length2+=m}if(a=n[n.length-1],d=a.diffs,d.length==0||d[d.length-1][0]!=o)d.push(new v.Diff(o,c)),a.length1+=p,a.length2+=p;else if(p>d[d.length-1][1].length){var m=p-d[d.length-1][1].length;d[d.length-1][1]+=c.substring(0,m),a.length1+=m,a.length2+=m}return c},v.prototype.patch_splitMax=function(n){for(var p=this.Match_MaxBits,c=0;c<n.length;c++)if(!(n[c].length1<=p)){var l=n[c];n.splice(c--,1);for(var a=l.start1,d=l.start2,m="";l.diffs.length!==0;){var i=new v.patch_obj,h=!0;for(i.start1=a-m.length,i.start2=d-m.length,m!==""&&(i.length1=i.length2=m.length,i.diffs.push(new v.Diff(o,m)));l.diffs.length!==0&&i.length1<p-this.Patch_Margin;){var u=l.diffs[0][0],f=l.diffs[0][1];u===g?(i.length2+=f.length,d+=f.length,i.diffs.push(l.diffs.shift()),h=!1):u===r&&i.diffs.length==1&&i.diffs[0][0]==o&&f.length>2*p?(i.length1+=f.length,a+=f.length,h=!1,i.diffs.push(new v.Diff(u,f)),l.diffs.shift()):(f=f.substring(0,p-i.length1-this.Patch_Margin),i.length1+=f.length,a+=f.length,u===o?(i.length2+=f.length,d+=f.length):h=!1,i.diffs.push(new v.Diff(u,f)),f==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(f.length))}m=this.diff_text2(i.diffs),m=m.substring(m.length-this.Patch_Margin);var S=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);S!==""&&(i.length1+=S.length,i.length2+=S.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===o?i.diffs[i.diffs.length-1][1]+=S:i.diffs.push(new v.Diff(o,S))),h||n.splice(++c,0,i)}}},v.prototype.patch_toText=function(n){for(var p=[],c=0;c<n.length;c++)p[c]=n[c];return p.join("")},v.prototype.patch_fromText=function(n){var p=[];if(!n)return p;for(var c=n.split(`
`),l=0,a=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<c.length;){var d=c[l].match(a);if(!d)throw new Error("Invalid patch string: "+c[l]);var m=new v.patch_obj;for(p.push(m),m.start1=parseInt(d[1],10),d[2]===""?(m.start1--,m.length1=1):d[2]=="0"?m.length1=0:(m.start1--,m.length1=parseInt(d[2],10)),m.start2=parseInt(d[3],10),d[4]===""?(m.start2--,m.length2=1):d[4]=="0"?m.length2=0:(m.start2--,m.length2=parseInt(d[4],10)),l++;l<c.length;){var i=c[l].charAt(0);try{var h=decodeURI(c[l].substring(1))}catch(u){throw new Error("Illegal escape in patch_fromText: "+h)}if(i=="-")m.diffs.push(new v.Diff(r,h));else if(i=="+")m.diffs.push(new v.Diff(g,h));else if(i==" ")m.diffs.push(new v.Diff(o,h));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+h)}l++}}return p},v.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},v.patch_obj.prototype.toString=function(){var n,p;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?p=this.start2+",0":this.length2==1?p=this.start2+1:p=this.start2+1+","+this.length2;for(var c=["@@ -"+n+" +"+p+` @@
`],l,a=0;a<this.diffs.length;a++){switch(this.diffs[a][0]){case g:l="+";break;case r:l="-";break;case o:l=" ";break}c[a+1]=l+encodeURI(this.diffs[a][1])+`
`}return c.join("").replace(/%20/g," ")},O.exports=v,O.exports.diff_match_patch=v,O.exports.DIFF_DELETE=r,O.exports.DIFF_INSERT=g,O.exports.DIFF_EQUAL=o},3509:function(O){/**!

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

*/(function(v,r){O.exports=r()})(this,function(){return function(v){function r(o){if(g[o])return g[o].exports;var n=g[o]={exports:{},id:o,loaded:!1};return v[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var g={};return r.m=v,r.c=g,r.p="",r(0)}([function(v,r,g){"use strict";function o(){var E=b();return E.compile=function(N,T){return m.compile(N,T,E)},E.precompile=function(N,T){return m.precompile(N,T,E)},E.AST=a.default,E.Compiler=m.Compiler,E.JavaScriptCompiler=h.default,E.Parser=d.parser,E.parse=d.parse,E.parseWithoutProcessing=d.parseWithoutProcessing,E}var n=g(1).default;r.__esModule=!0;var p=g(2),c=n(p),l=g(45),a=n(l),d=g(46),m=g(51),i=g(52),h=n(i),u=g(49),f=n(u),S=g(44),y=n(S),b=c.default.create,P=o();P.create=o,y.default(P),P.Visitor=f.default,P.default=P,r.default=P,v.exports=r.default},function(v,r){"use strict";r.default=function(g){return g&&g.__esModule?g:{default:g}},r.__esModule=!0},function(v,r,g){"use strict";function o(){var E=new l.HandlebarsEnvironment;return u.extend(E,l),E.SafeString=d.default,E.Exception=i.default,E.Utils=u,E.escapeExpression=u.escapeExpression,E.VM=S,E.template=function(N){return S.template(N,E)},E}var n=g(3).default,p=g(1).default;r.__esModule=!0;var c=g(4),l=n(c),a=g(37),d=p(a),m=g(6),i=p(m),h=g(5),u=n(h),f=g(38),S=n(f),y=g(44),b=p(y),P=o();P.create=o,b.default(P),P.default=P,r.default=P,v.exports=r.default},function(v,r){"use strict";r.default=function(g){if(g&&g.__esModule)return g;var o={};if(g!=null)for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(o[n]=g[n]);return o.default=g,o},r.__esModule=!0},function(v,r,g){"use strict";function o(E,N,T){this.helpers=E||{},this.partials=N||{},this.decorators=T||{},a.registerDefaultHelpers(this),d.registerDefaultDecorators(this)}var n=g(1).default;r.__esModule=!0,r.HandlebarsEnvironment=o;var p=g(5),c=g(6),l=n(c),a=g(10),d=g(30),m=g(32),i=n(m),h=g(33),u="4.7.7";r.VERSION=u;var f=8;r.COMPILER_REVISION=f;var S=7;r.LAST_COMPATIBLE_COMPILER_REVISION=S;var y={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};r.REVISION_CHANGES=y;var b="[object Object]";o.prototype={constructor:o,logger:i.default,log:i.default.log,registerHelper:function(E,N){if(p.toString.call(E)===b){if(N)throw new l.default("Arg not supported with multiple helpers");p.extend(this.helpers,E)}else this.helpers[E]=N},unregisterHelper:function(E){delete this.helpers[E]},registerPartial:function(E,N){if(p.toString.call(E)===b)p.extend(this.partials,E);else{if(typeof N=="undefined")throw new l.default('Attempting to register a partial called "'+E+'" as undefined');this.partials[E]=N}},unregisterPartial:function(E){delete this.partials[E]},registerDecorator:function(E,N){if(p.toString.call(E)===b){if(N)throw new l.default("Arg not supported with multiple decorators");p.extend(this.decorators,E)}else this.decorators[E]=N},unregisterDecorator:function(E){delete this.decorators[E]},resetLoggedPropertyAccesses:function(){h.resetLoggedProperties()}};var P=i.default.log;r.log=P,r.createFrame=p.createFrame,r.logger=i.default},function(v,r){"use strict";function g(y){return m[y]}function o(y){for(var b=1;b<arguments.length;b++)for(var P in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],P)&&(y[P]=arguments[b][P]);return y}function n(y,b){for(var P=0,E=y.length;P<E;P++)if(y[P]===b)return P;return-1}function p(y){if(typeof y!="string"){if(y&&y.toHTML)return y.toHTML();if(y==null)return"";if(!y)return y+"";y=""+y}return h.test(y)?y.replace(i,g):y}function c(y){return!y&&y!==0||!(!S(y)||y.length!==0)}function l(y){var b=o({},y);return b._parent=y,b}function a(y,b){return y.path=b,y}function d(y,b){return(y?y+".":"")+b}r.__esModule=!0,r.extend=o,r.indexOf=n,r.escapeExpression=p,r.isEmpty=c,r.createFrame=l,r.blockParams=a,r.appendContextPath=d;var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,h=/[&<>"'`=]/,u=Object.prototype.toString;r.toString=u;var f=function(y){return typeof y=="function"};f(/x/)&&(r.isFunction=f=function(y){return typeof y=="function"&&u.call(y)==="[object Function]"}),r.isFunction=f;var S=Array.isArray||function(y){return!(!y||typeof y!="object")&&u.call(y)==="[object Array]"};r.isArray=S},function(v,r,g){"use strict";function o(c,l){var a=l&&l.loc,d=void 0,m=void 0,i=void 0,h=void 0;a&&(d=a.start.line,m=a.end.line,i=a.start.column,h=a.end.column,c+=" - "+d+":"+i);for(var u=Error.prototype.constructor.call(this,c),f=0;f<p.length;f++)this[p[f]]=u[p[f]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{a&&(this.lineNumber=d,this.endLineNumber=m,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:h,enumerable:!0})):(this.column=i,this.endColumn=h))}catch(S){}}var n=g(7).default;r.__esModule=!0;var p=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];o.prototype=new Error,r.default=o,v.exports=r.default},function(v,r,g){v.exports={default:g(8),__esModule:!0}},function(v,r,g){var o=g(9);v.exports=function(n,p,c){return o.setDesc(n,p,c)}},function(v,r){var g=Object;v.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}},function(v,r,g){"use strict";function o(N){l.default(N),d.default(N),i.default(N),u.default(N),S.default(N),b.default(N),E.default(N)}function n(N,T,A){N.helpers[T]&&(N.hooks[T]=N.helpers[T],A||delete N.helpers[T])}var p=g(1).default;r.__esModule=!0,r.registerDefaultHelpers=o,r.moveHelperToHooks=n;var c=g(11),l=p(c),a=g(12),d=p(a),m=g(25),i=p(m),h=g(26),u=p(h),f=g(27),S=p(f),y=g(28),b=p(y),P=g(29),E=p(P)},function(v,r,g){"use strict";r.__esModule=!0;var o=g(5);r.default=function(n){n.registerHelper("blockHelperMissing",function(p,c){var l=c.inverse,a=c.fn;if(p===!0)return a(this);if(p===!1||p==null)return l(this);if(o.isArray(p))return p.length>0?(c.ids&&(c.ids=[c.name]),n.helpers.each(p,c)):l(this);if(c.data&&c.ids){var d=o.createFrame(c.data);d.contextPath=o.appendContextPath(c.data.contextPath,c.name),c={data:d}}return a(p,c)})},v.exports=r.default},function(v,r,g){(function(o){"use strict";var n=g(13).default,p=g(1).default;r.__esModule=!0;var c=g(5),l=g(6),a=p(l);r.default=function(d){d.registerHelper("each",function(m,i){function h(D,M,x){b&&(b.key=D,b.index=M,b.first=M===0,b.last=!!x,P&&(b.contextPath=P+D)),y+=u(m[D],{data:b,blockParams:c.blockParams([m[D],D],[P+D,null])})}if(!i)throw new a.default("Must pass iterator to #each");var u=i.fn,f=i.inverse,S=0,y="",b=void 0,P=void 0;if(i.data&&i.ids&&(P=c.appendContextPath(i.data.contextPath,i.ids[0])+"."),c.isFunction(m)&&(m=m.call(this)),i.data&&(b=c.createFrame(i.data)),m&&typeof m=="object")if(c.isArray(m))for(var E=m.length;S<E;S++)S in m&&h(S,S,S===m.length-1);else if(o.Symbol&&m[o.Symbol.iterator]){for(var N=[],T=m[o.Symbol.iterator](),A=T.next();!A.done;A=T.next())N.push(A.value);m=N;for(var E=m.length;S<E;S++)h(S,S,S===m.length-1)}else(function(){var D=void 0;n(m).forEach(function(M){D!==void 0&&h(D,S-1),D=M,S++}),D!==void 0&&h(D,S-1,!0)})();return S===0&&(y=f(this)),y})},v.exports=r.default}).call(r,function(){return this}())},function(v,r,g){v.exports={default:g(14),__esModule:!0}},function(v,r,g){g(15),v.exports=g(21).Object.keys},function(v,r,g){var o=g(16);g(18)("keys",function(n){return function(p){return n(o(p))}})},function(v,r,g){var o=g(17);v.exports=function(n){return Object(o(n))}},function(v,r){v.exports=function(g){if(g==null)throw TypeError("Can't call method on  "+g);return g}},function(v,r,g){var o=g(19),n=g(21),p=g(24);v.exports=function(c,l){var a=(n.Object||{})[c]||Object[c],d={};d[c]=l(a),o(o.S+o.F*p(function(){a(1)}),"Object",d)}},function(v,r,g){var o=g(20),n=g(21),p=g(22),c="prototype",l=function(a,d,m){var i,h,u,f=a&l.F,S=a&l.G,y=a&l.S,b=a&l.P,P=a&l.B,E=a&l.W,N=S?n:n[d]||(n[d]={}),T=S?o:y?o[d]:(o[d]||{})[c];S&&(m=d);for(i in m)h=!f&&T&&i in T,h&&i in N||(u=h?T[i]:m[i],N[i]=S&&typeof T[i]!="function"?m[i]:P&&h?p(u,o):E&&T[i]==u?function(A){var D=function(M){return this instanceof A?new A(M):A(M)};return D[c]=A[c],D}(u):b&&typeof u=="function"?p(Function.call,u):u,b&&((N[c]||(N[c]={}))[i]=u))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,v.exports=l},function(v,r){var g=v.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=g)},function(v,r){var g=v.exports={version:"1.2.6"};typeof __e=="number"&&(__e=g)},function(v,r,g){var o=g(23);v.exports=function(n,p,c){if(o(n),p===void 0)return n;switch(c){case 1:return function(l){return n.call(p,l)};case 2:return function(l,a){return n.call(p,l,a)};case 3:return function(l,a,d){return n.call(p,l,a,d)}}return function(){return n.apply(p,arguments)}}},function(v,r){v.exports=function(g){if(typeof g!="function")throw TypeError(g+" is not a function!");return g}},function(v,r){v.exports=function(g){try{return!!g()}catch(o){return!0}}},function(v,r,g){"use strict";var o=g(1).default;r.__esModule=!0;var n=g(6),p=o(n);r.default=function(c){c.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new p.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},v.exports=r.default},function(v,r,g){"use strict";var o=g(1).default;r.__esModule=!0;var n=g(5),p=g(6),c=o(p);r.default=function(l){l.registerHelper("if",function(a,d){if(arguments.length!=2)throw new c.default("#if requires exactly one argument");return n.isFunction(a)&&(a=a.call(this)),!d.hash.includeZero&&!a||n.isEmpty(a)?d.inverse(this):d.fn(this)}),l.registerHelper("unless",function(a,d){if(arguments.length!=2)throw new c.default("#unless requires exactly one argument");return l.helpers.if.call(this,a,{fn:d.inverse,inverse:d.fn,hash:d.hash})})},v.exports=r.default},function(v,r){"use strict";r.__esModule=!0,r.default=function(g){g.registerHelper("log",function(){for(var o=[void 0],n=arguments[arguments.length-1],p=0;p<arguments.length-1;p++)o.push(arguments[p]);var c=1;n.hash.level!=null?c=n.hash.level:n.data&&n.data.level!=null&&(c=n.data.level),o[0]=c,g.log.apply(g,o)})},v.exports=r.default},function(v,r){"use strict";r.__esModule=!0,r.default=function(g){g.registerHelper("lookup",function(o,n,p){return o&&p.lookupProperty(o,n)})},v.exports=r.default},function(v,r,g){"use strict";var o=g(1).default;r.__esModule=!0;var n=g(5),p=g(6),c=o(p);r.default=function(l){l.registerHelper("with",function(a,d){if(arguments.length!=2)throw new c.default("#with requires exactly one argument");n.isFunction(a)&&(a=a.call(this));var m=d.fn;if(n.isEmpty(a))return d.inverse(this);var i=d.data;return d.data&&d.ids&&(i=n.createFrame(d.data),i.contextPath=n.appendContextPath(d.data.contextPath,d.ids[0])),m(a,{data:i,blockParams:n.blockParams([a],[i&&i.contextPath])})})},v.exports=r.default},function(v,r,g){"use strict";function o(l){c.default(l)}var n=g(1).default;r.__esModule=!0,r.registerDefaultDecorators=o;var p=g(31),c=n(p)},function(v,r,g){"use strict";r.__esModule=!0;var o=g(5);r.default=function(n){n.registerDecorator("inline",function(p,c,l,a){var d=p;return c.partials||(c.partials={},d=function(m,i){var h=l.partials;l.partials=o.extend({},h,c.partials);var u=p(m,i);return l.partials=h,u}),c.partials[a.args[0]]=a.fn,d})},v.exports=r.default},function(v,r,g){"use strict";r.__esModule=!0;var o=g(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(p){if(typeof p=="string"){var c=o.indexOf(n.methodMap,p.toLowerCase());p=c>=0?c:parseInt(p,10)}return p},log:function(p){if(p=n.lookupLevel(p),typeof console!="undefined"&&n.lookupLevel(n.level)<=p){var c=n.methodMap[p];console[c]||(c="log");for(var l=arguments.length,a=Array(l>1?l-1:0),d=1;d<l;d++)a[d-1]=arguments[d];console[c].apply(console,a)}}};r.default=n,v.exports=r.default},function(v,r,g){"use strict";function o(S){var y=a(null);y.constructor=!1,y.__defineGetter__=!1,y.__defineSetter__=!1,y.__lookupGetter__=!1;var b=a(null);return b.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(b,S.allowedProtoProperties),defaultValue:S.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(y,S.allowedProtoMethods),defaultValue:S.allowProtoMethodsByDefault}}}function n(S,y,b){return p(typeof S=="function"?y.methods:y.properties,b)}function p(S,y){return S.whitelist[y]!==void 0?S.whitelist[y]===!0:S.defaultValue!==void 0?S.defaultValue:(c(y),!1)}function c(S){f[S]!==!0&&(f[S]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+S+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function l(){d(f).forEach(function(S){delete f[S]})}var a=g(34).default,d=g(13).default,m=g(3).default;r.__esModule=!0,r.createProtoAccessControl=o,r.resultIsAllowed=n,r.resetLoggedProperties=l;var i=g(36),h=g(32),u=m(h),f=a(null)},function(v,r,g){v.exports={default:g(35),__esModule:!0}},function(v,r,g){var o=g(9);v.exports=function(n,p){return o.create(n,p)}},function(v,r,g){"use strict";function o(){for(var c=arguments.length,l=Array(c),a=0;a<c;a++)l[a]=arguments[a];return p.extend.apply(void 0,[n(null)].concat(l))}var n=g(34).default;r.__esModule=!0,r.createNewLookupObject=o;var p=g(5)},function(v,r){"use strict";function g(o){this.string=o}r.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string},r.default=g,v.exports=r.default},function(v,r,g){"use strict";function o(x){var _=x&&x[0]||1,I=T.COMPILER_REVISION;if(!(_>=T.LAST_COMPATIBLE_COMPILER_REVISION&&_<=T.COMPILER_REVISION)){if(_<T.LAST_COMPATIBLE_COMPILER_REVISION){var U=T.REVISION_CHANGES[I],F=T.REVISION_CHANGES[_];throw new N.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+U+") or downgrade your runtime to an older version ("+F+").")}throw new N.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+x[1]+").")}}function n(x,_){function I(B,$,w){w.hash&&($=P.extend({},$,w.hash),w.ids&&(w.ids[0]=!0)),B=_.VM.resolvePartial.call(this,B,$,w);var H=P.extend({},w,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),V=_.VM.invokePartial.call(this,B,$,H);if(V==null&&_.compile&&(w.partials[w.name]=_.compile(B,x.compilerOptions,_),V=w.partials[w.name]($,H)),V!=null){if(w.indent){for(var ne=V.split(`
`),re=0,ce=ne.length;re<ce&&(ne[re]||re+1!==ce);re++)ne[re]=w.indent+ne[re];V=ne.join(`
`)}return V}throw new N.default("The partial "+w.name+" could not be compiled when running in runtime-only mode")}function U(B){function $(re){return""+x.main(z,re,z.helpers,z.partials,H,ne,V)}var w=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],H=w.data;U._setup(w),!w.partial&&x.useData&&(H=d(B,H));var V=void 0,ne=x.useBlockParams?[]:void 0;return x.useDepths&&(V=w.depths?B!=w.depths[0]?[B].concat(w.depths):w.depths:[B]),($=m(x.main,$,z,w.depths||[],H,ne))(B,w)}if(!_)throw new N.default("No environment passed to template");if(!x||!x.main)throw new N.default("Unknown template object: "+typeof x);x.main.decorator=x.main_d,_.VM.checkRevision(x.compiler);var F=x.compiler&&x.compiler[0]===7,z={strict:function(B,$,w){if(!(B&&$ in B))throw new N.default('"'+$+'" not defined in '+B,{loc:w});return z.lookupProperty(B,$)},lookupProperty:function(B,$){var w=B[$];return w==null||Object.prototype.hasOwnProperty.call(B,$)||M.resultIsAllowed(w,z.protoAccessControl,$)?w:void 0},lookup:function(B,$){for(var w=B.length,H=0;H<w;H++){var V=B[H]&&z.lookupProperty(B[H],$);if(V!=null)return B[H][$]}},lambda:function(B,$){return typeof B=="function"?B.call($):B},escapeExpression:P.escapeExpression,invokePartial:I,fn:function(B){var $=x[B];return $.decorator=x[B+"_d"],$},programs:[],program:function(B,$,w,H,V){var ne=this.programs[B],re=this.fn(B);return $||V||H||w?ne=p(this,B,re,$,w,H,V):ne||(ne=this.programs[B]=p(this,B,re)),ne},data:function(B,$){for(;B&&$--;)B=B._parent;return B},mergeIfNeeded:function(B,$){var w=B||$;return B&&$&&B!==$&&(w=P.extend({},$,B)),w},nullContext:u({}),noop:_.VM.noop,compilerInfo:x.compiler};return U.isTop=!0,U._setup=function(B){if(B.partial)z.protoAccessControl=B.protoAccessControl,z.helpers=B.helpers,z.partials=B.partials,z.decorators=B.decorators,z.hooks=B.hooks;else{var $=P.extend({},_.helpers,B.helpers);i($,z),z.helpers=$,x.usePartial&&(z.partials=z.mergeIfNeeded(B.partials,_.partials)),(x.usePartial||x.useDecorators)&&(z.decorators=P.extend({},_.decorators,B.decorators)),z.hooks={},z.protoAccessControl=M.createProtoAccessControl(B);var w=B.allowCallsToHelperMissing||F;A.moveHelperToHooks(z,"helperMissing",w),A.moveHelperToHooks(z,"blockHelperMissing",w)}},U._child=function(B,$,w,H){if(x.useBlockParams&&!w)throw new N.default("must pass block params");if(x.useDepths&&!H)throw new N.default("must pass parent depths");return p(z,B,x[B],$,0,w,H)},U}function p(x,_,I,U,F,z,B){function $(w){var H=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],V=B;return!B||w==B[0]||w===x.nullContext&&B[0]===null||(V=[w].concat(B)),I(x,w,x.helpers,x.partials,H.data||U,z&&[H.blockParams].concat(z),V)}return $=m(I,$,x,B,U,z),$.program=_,$.depth=B?B.length:0,$.blockParams=F||0,$}function c(x,_,I){return x?x.call||I.name||(I.name=x,x=I.partials[x]):x=I.name==="@partial-block"?I.data["partial-block"]:I.partials[I.name],x}function l(x,_,I){var U=I.data&&I.data["partial-block"];I.partial=!0,I.ids&&(I.data.contextPath=I.ids[0]||I.data.contextPath);var F=void 0;if(I.fn&&I.fn!==a&&function(){I.data=T.createFrame(I.data);var z=I.fn;F=I.data["partial-block"]=function(B){var $=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return $.data=T.createFrame($.data),$.data["partial-block"]=U,z(B,$)},z.partials&&(I.partials=P.extend({},I.partials,z.partials))}(),x===void 0&&F&&(x=F),x===void 0)throw new N.default("The partial "+I.name+" could not be found");if(x instanceof Function)return x(_,I)}function a(){return""}function d(x,_){return _&&"root"in _||(_=_?T.createFrame(_):{},_.root=x),_}function m(x,_,I,U,F,z){if(x.decorator){var B={};_=x.decorator(_,B,I,U&&U[0],F,z,U),P.extend(_,B)}return _}function i(x,_){f(x).forEach(function(I){var U=x[I];x[I]=h(U,_)})}function h(x,_){var I=_.lookupProperty;return D.wrapHelper(x,function(U){return P.extend({lookupProperty:I},U)})}var u=g(39).default,f=g(13).default,S=g(3).default,y=g(1).default;r.__esModule=!0,r.checkRevision=o,r.template=n,r.wrapProgram=p,r.resolvePartial=c,r.invokePartial=l,r.noop=a;var b=g(5),P=S(b),E=g(6),N=y(E),T=g(4),A=g(10),D=g(43),M=g(33)},function(v,r,g){v.exports={default:g(40),__esModule:!0}},function(v,r,g){g(41),v.exports=g(21).Object.seal},function(v,r,g){var o=g(42);g(18)("seal",function(n){return function(p){return n&&o(p)?n(p):p}})},function(v,r){v.exports=function(g){return typeof g=="object"?g!==null:typeof g=="function"}},function(v,r){"use strict";function g(o,n){if(typeof o!="function")return o;var p=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=n(c),o.apply(this,arguments)};return p}r.__esModule=!0,r.wrapHelper=g},function(v,r){(function(g){"use strict";r.__esModule=!0,r.default=function(o){var n=typeof g!="undefined"?g:window,p=n.Handlebars;o.noConflict=function(){return n.Handlebars===o&&(n.Handlebars=p),o}},v.exports=r.default}).call(r,function(){return this}())},function(v,r){"use strict";r.__esModule=!0;var g={helpers:{helperExpression:function(o){return o.type==="SubExpression"||(o.type==="MustacheStatement"||o.type==="BlockStatement")&&!!(o.params&&o.params.length||o.hash)},scopedId:function(o){return/^\.|this\b/.test(o.original)},simpleId:function(o){return o.parts.length===1&&!g.helpers.scopedId(o)&&!o.depth}}};r.default=g,v.exports=r.default},function(v,r,g){"use strict";function o(S,y){if(S.type==="Program")return S;a.default.yy=f,f.locInfo=function(P){return new f.SourceLocation(y&&y.srcName,P)};var b=a.default.parse(S);return b}function n(S,y){var b=o(S,y),P=new m.default(y);return P.accept(b)}var p=g(1).default,c=g(3).default;r.__esModule=!0,r.parseWithoutProcessing=o,r.parse=n;var l=g(47),a=p(l),d=g(48),m=p(d),i=g(50),h=c(i),u=g(5);r.parser=a.default;var f={};u.extend(f,h)},function(v,r){"use strict";r.__esModule=!0;var g=function(){function o(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(c,l,a,d,m,i,h){var u=i.length-1;switch(m){case 1:return i[u-1];case 2:this.$=d.prepareProgram(i[u]);break;case 3:this.$=i[u];break;case 4:this.$=i[u];break;case 5:this.$=i[u];break;case 6:this.$=i[u];break;case 7:this.$=i[u];break;case 8:this.$=i[u];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(i[u]),strip:d.stripFlags(i[u],i[u]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[u],value:i[u],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(i[u-2],i[u-1],i[u],this._$);break;case 12:this.$={path:i[u-3],params:i[u-2],hash:i[u-1]};break;case 13:this.$=d.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!1,this._$);break;case 14:this.$=d.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!0,this._$);break;case 15:this.$={open:i[u-5],path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:d.stripFlags(i[u-5],i[u])};break;case 16:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:d.stripFlags(i[u-5],i[u])};break;case 17:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:d.stripFlags(i[u-5],i[u])};break;case 18:this.$={strip:d.stripFlags(i[u-1],i[u-1]),program:i[u]};break;case 19:var f=d.prepareBlock(i[u-2],i[u-1],i[u],i[u],!1,this._$),S=d.prepareProgram([f],i[u-1].loc);S.chained=!0,this.$={strip:i[u-2].strip,program:S,chain:!0};break;case 20:this.$=i[u];break;case 21:this.$={path:i[u-1],strip:d.stripFlags(i[u-2],i[u])};break;case 22:this.$=d.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],d.stripFlags(i[u-4],i[u]),this._$);break;case 23:this.$=d.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],d.stripFlags(i[u-4],i[u]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[u-3],params:i[u-2],hash:i[u-1],indent:"",strip:d.stripFlags(i[u-4],i[u]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(i[u-2],i[u-1],i[u],this._$);break;case 26:this.$={path:i[u-3],params:i[u-2],hash:i[u-1],strip:d.stripFlags(i[u-4],i[u])};break;case 27:this.$=i[u];break;case 28:this.$=i[u];break;case 29:this.$={type:"SubExpression",path:i[u-3],params:i[u-2],hash:i[u-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[u],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(i[u-2]),value:i[u],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(i[u-1]);break;case 33:this.$=i[u];break;case 34:this.$=i[u];break;case 35:this.$={type:"StringLiteral",value:i[u],original:i[u],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[u]),original:Number(i[u]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[u]==="true",original:i[u]==="true",loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=i[u];break;case 41:this.$=i[u];break;case 42:this.$=d.preparePath(!0,i[u],this._$);break;case 43:this.$=d.preparePath(!1,i[u],this._$);break;case 44:i[u-2].push({part:d.id(i[u]),original:i[u],separator:i[u-1]}),this.$=i[u-2];break;case 45:this.$=[{part:d.id(i[u]),original:i[u]}];break;case 46:this.$=[];break;case 47:i[u-1].push(i[u]);break;case 48:this.$=[];break;case 49:i[u-1].push(i[u]);break;case 50:this.$=[];break;case 51:i[u-1].push(i[u]);break;case 58:this.$=[];break;case 59:i[u-1].push(i[u]);break;case 64:this.$=[];break;case 65:i[u-1].push(i[u]);break;case 70:this.$=[];break;case 71:i[u-1].push(i[u]);break;case 78:this.$=[];break;case 79:i[u-1].push(i[u]);break;case 82:this.$=[];break;case 83:i[u-1].push(i[u]);break;case 86:this.$=[];break;case 87:i[u-1].push(i[u]);break;case 90:this.$=[];break;case 91:i[u-1].push(i[u]);break;case 94:this.$=[];break;case 95:i[u-1].push(i[u]);break;case 98:this.$=[i[u]];break;case 99:i[u-1].push(i[u]);break;case 100:this.$=[i[u]];break;case 101:i[u-1].push(i[u])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(c,l){throw new Error(c)},parse:function(c){function l(){var z;return z=a.lexer.lex()||1,typeof z!="number"&&(z=a.symbols_[z]||z),z}var a=this,d=[0],m=[null],i=[],h=this.table,u="",f=0,S=0,y=0;this.lexer.setInput(c),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var b=this.lexer.yylloc;i.push(b);var P=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var E,N,T,A,D,M,x,_,I,U={};;){if(T=d[d.length-1],this.defaultActions[T]?A=this.defaultActions[T]:(E!==null&&typeof E!="undefined"||(E=l()),A=h[T]&&h[T][E]),typeof A=="undefined"||!A.length||!A[0]){var F="";if(!y){I=[];for(M in h[T])this.terminals_[M]&&M>2&&I.push("'"+this.terminals_[M]+"'");F=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+I.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(f+1)+": Unexpected "+(E==1?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(F,{text:this.lexer.match,token:this.terminals_[E]||E,line:this.lexer.yylineno,loc:b,expected:I})}}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+T+", token: "+E);switch(A[0]){case 1:d.push(E),m.push(this.lexer.yytext),i.push(this.lexer.yylloc),d.push(A[1]),E=null,N?(E=N,N=null):(S=this.lexer.yyleng,u=this.lexer.yytext,f=this.lexer.yylineno,b=this.lexer.yylloc,y>0&&y--);break;case 2:if(x=this.productions_[A[1]][1],U.$=m[m.length-x],U._$={first_line:i[i.length-(x||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(x||1)].first_column,last_column:i[i.length-1].last_column},P&&(U._$.range=[i[i.length-(x||1)].range[0],i[i.length-1].range[1]]),D=this.performAction.call(U,u,S,f,this.yy,A[1],m,i),typeof D!="undefined")return D;x&&(d=d.slice(0,-1*x*2),m=m.slice(0,-1*x),i=i.slice(0,-1*x)),d.push(this.productions_[A[1]][0]),m.push(U.$),i.push(U._$),_=h[d[d.length-2]][d[d.length-1]],d.push(_);break;case 3:return!0}}return!0}},p=function(){var c={EOF:1,parseError:function(l,a){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,a)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var a=l.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var a=l.length,d=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===m.length?this.yylloc.first_column:0)+m[m.length-d.length].length-d[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),a=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,a,d,m,i;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),u=0;u<h.length&&(d=this._input.match(this.rules[h[u]]),!d||a&&!(d[0].length>a[0].length)||(a=d,m=u,this.options.flex));u++);return a?(i=a[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],l=this.performAction.call(this,this.yy,this,h[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l!="undefined"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return c.options={},c.performAction=function(l,a,d,m){function i(h,u){return a.yytext=a.yytext.substring(h,a.yyleng-u+h)}switch(d){case 0:if(a.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(a.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return a.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return a.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return a.yytext=a.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},c.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],c.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},c}();return n.lexer=p,o.prototype=n,n.Parser=o,new o}();r.default=g,v.exports=r.default},function(v,r,g){"use strict";function o(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,h,u){h===void 0&&(h=i.length);var f=i[h-1],S=i[h-2];return f?f.type==="ContentStatement"?(S||!u?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:u}function p(i,h,u){h===void 0&&(h=-1);var f=i[h+1],S=i[h+2];return f?f.type==="ContentStatement"?(S||!u?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:u}function c(i,h,u){var f=i[h==null?0:h+1];if(f&&f.type==="ContentStatement"&&(u||!f.rightStripped)){var S=f.value;f.value=f.value.replace(u?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==S}}function l(i,h,u){var f=i[h==null?i.length-1:h-1];if(f&&f.type==="ContentStatement"&&(u||!f.leftStripped)){var S=f.value;return f.value=f.value.replace(u?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==S,f.leftStripped}}var a=g(1).default;r.__esModule=!0;var d=g(49),m=a(d);o.prototype=new m.default,o.prototype.Program=function(i){var h=!this.options.ignoreStandalone,u=!this.isRootSeen;this.isRootSeen=!0;for(var f=i.body,S=0,y=f.length;S<y;S++){var b=f[S],P=this.accept(b);if(P){var E=n(f,S,u),N=p(f,S,u),T=P.openStandalone&&E,A=P.closeStandalone&&N,D=P.inlineStandalone&&E&&N;P.close&&c(f,S,!0),P.open&&l(f,S,!0),h&&D&&(c(f,S),l(f,S)&&b.type==="PartialStatement"&&(b.indent=/([ \t]+$)/.exec(f[S-1].original)[1])),h&&T&&(c((b.program||b.inverse).body),l(f,S)),h&&A&&(c(f,S),l((b.inverse||b.program).body))}}return i},o.prototype.BlockStatement=o.prototype.DecoratorBlock=o.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var h=i.program||i.inverse,u=i.program&&i.inverse,f=u,S=u;if(u&&u.chained)for(f=u.body[0].program;S.chained;)S=S.body[S.body.length-1].program;var y={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:p(h.body),closeStandalone:n((f||h).body)};if(i.openStrip.close&&c(h.body,null,!0),u){var b=i.inverseStrip;b.open&&l(h.body,null,!0),b.close&&c(f.body,null,!0),i.closeStrip.open&&l(S.body,null,!0),!this.options.ignoreStandalone&&n(h.body)&&p(f.body)&&(l(h.body),c(f.body))}else i.closeStrip.open&&l(h.body,null,!0);return y},o.prototype.Decorator=o.prototype.MustacheStatement=function(i){return i.strip},o.prototype.PartialStatement=o.prototype.CommentStatement=function(i){var h=i.strip||{};return{inlineStandalone:!0,open:h.open,close:h.close}},r.default=o,v.exports=r.default},function(v,r,g){"use strict";function o(){this.parents=[]}function n(m){this.acceptRequired(m,"path"),this.acceptArray(m.params),this.acceptKey(m,"hash")}function p(m){n.call(this,m),this.acceptKey(m,"program"),this.acceptKey(m,"inverse")}function c(m){this.acceptRequired(m,"name"),this.acceptArray(m.params),this.acceptKey(m,"hash")}var l=g(1).default;r.__esModule=!0;var a=g(6),d=l(a);o.prototype={constructor:o,mutating:!1,acceptKey:function(m,i){var h=this.accept(m[i]);if(this.mutating){if(h&&!o.prototype[h.type])throw new d.default('Unexpected node type "'+h.type+'" found when accepting '+i+" on "+m.type);m[i]=h}},acceptRequired:function(m,i){if(this.acceptKey(m,i),!m[i])throw new d.default(m.type+" requires "+i)},acceptArray:function(m){for(var i=0,h=m.length;i<h;i++)this.acceptKey(m,i),m[i]||(m.splice(i,1),i--,h--)},accept:function(m){if(m){if(!this[m.type])throw new d.default("Unknown type: "+m.type,m);this.current&&this.parents.unshift(this.current),this.current=m;var i=this[m.type](m);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?m:void 0}},Program:function(m){this.acceptArray(m.body)},MustacheStatement:n,Decorator:n,BlockStatement:p,DecoratorBlock:p,PartialStatement:c,PartialBlockStatement:function(m){c.call(this,m),this.acceptKey(m,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(m){this.acceptArray(m.pairs)},HashPair:function(m){this.acceptRequired(m,"value")}},r.default=o,v.exports=r.default},function(v,r,g){"use strict";function o(b,P){if(P=P.path?P.path.original:P,b.path.original!==P){var E={loc:b.path.loc};throw new y.default(b.path.original+" doesn't match "+P,E)}}function n(b,P){this.source=b,this.start={line:P.first_line,column:P.first_column},this.end={line:P.last_line,column:P.last_column}}function p(b){return/^\[.*\]$/.test(b)?b.substring(1,b.length-1):b}function c(b,P){return{open:b.charAt(2)==="~",close:P.charAt(P.length-3)==="~"}}function l(b){return b.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function a(b,P,E){E=this.locInfo(E);for(var N=b?"@":"",T=[],A=0,D=0,M=P.length;D<M;D++){var x=P[D].part,_=P[D].original!==x;if(N+=(P[D].separator||"")+x,_||x!==".."&&x!=="."&&x!=="this")T.push(x);else{if(T.length>0)throw new y.default("Invalid path: "+N,{loc:E});x===".."&&A++}}return{type:"PathExpression",data:b,depth:A,parts:T,original:N,loc:E}}function d(b,P,E,N,T,A){var D=N.charAt(3)||N.charAt(2),M=D!=="{"&&D!=="&",x=/\*/.test(N);return{type:x?"Decorator":"MustacheStatement",path:b,params:P,hash:E,escaped:M,strip:T,loc:this.locInfo(A)}}function m(b,P,E,N){o(b,E),N=this.locInfo(N);var T={type:"Program",body:P,strip:{},loc:N};return{type:"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:T,openStrip:{},inverseStrip:{},closeStrip:{},loc:N}}function i(b,P,E,N,T,A){N&&N.path&&o(b,N);var D=/\*/.test(b.open);P.blockParams=b.blockParams;var M=void 0,x=void 0;if(E){if(D)throw new y.default("Unexpected inverse block on decorator",E);E.chain&&(E.program.body[0].closeStrip=N.strip),x=E.strip,M=E.program}return T&&(T=M,M=P,P=T),{type:D?"DecoratorBlock":"BlockStatement",path:b.path,params:b.params,hash:b.hash,program:P,inverse:M,openStrip:b.strip,inverseStrip:x,closeStrip:N&&N.strip,loc:this.locInfo(A)}}function h(b,P){if(!P&&b.length){var E=b[0].loc,N=b[b.length-1].loc;E&&N&&(P={source:E.source,start:{line:E.start.line,column:E.start.column},end:{line:N.end.line,column:N.end.column}})}return{type:"Program",body:b,strip:{},loc:P}}function u(b,P,E,N){return o(b,E),{type:"PartialBlockStatement",name:b.path,params:b.params,hash:b.hash,program:P,openStrip:b.strip,closeStrip:E&&E.strip,loc:this.locInfo(N)}}var f=g(1).default;r.__esModule=!0,r.SourceLocation=n,r.id=p,r.stripFlags=c,r.stripComment=l,r.preparePath=a,r.prepareMustache=d,r.prepareRawBlock=m,r.prepareBlock=i,r.prepareProgram=h,r.preparePartialBlock=u;var S=g(6),y=f(S)},function(v,r,g){"use strict";function o(){}function n(y,b,P){if(y==null||typeof y!="string"&&y.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+y);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var E=P.parse(y,b),N=new P.Compiler().compile(E,b);return new P.JavaScriptCompiler().compile(N,b)}function p(y,b,P){function E(){var A=P.parse(y,b),D=new P.Compiler().compile(A,b),M=new P.JavaScriptCompiler().compile(D,b,void 0,!0);return P.template(M)}function N(A,D){return T||(T=E()),T.call(this,A,D)}if(b===void 0&&(b={}),y==null||typeof y!="string"&&y.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+y);b=h.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var T=void 0;return N._setup=function(A){return T||(T=E()),T._setup(A)},N._child=function(A,D,M,x){return T||(T=E()),T._child(A,D,M,x)},N}function c(y,b){if(y===b)return!0;if(h.isArray(y)&&h.isArray(b)&&y.length===b.length){for(var P=0;P<y.length;P++)if(!c(y[P],b[P]))return!1;return!0}}function l(y){if(!y.path.parts){var b=y.path;y.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var a=g(34).default,d=g(1).default;r.__esModule=!0,r.Compiler=o,r.precompile=n,r.compile=p;var m=g(6),i=d(m),h=g(5),u=g(45),f=d(u),S=[].slice;o.prototype={compiler:o,equals:function(y){var b=this.opcodes.length;if(y.opcodes.length!==b)return!1;for(var P=0;P<b;P++){var E=this.opcodes[P],N=y.opcodes[P];if(E.opcode!==N.opcode||!c(E.args,N.args))return!1}b=this.children.length;for(var P=0;P<b;P++)if(!this.children[P].equals(y.children[P]))return!1;return!0},guid:0,compile:function(y,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=h.extend(a(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},b.knownHelpers),this.accept(y)},compileProgram:function(y){var b=new this.compiler,P=b.compile(y,this.options),E=this.guid++;return this.usePartial=this.usePartial||P.usePartial,this.children[E]=P,this.useDepths=this.useDepths||P.useDepths,E},accept:function(y){if(!this[y.type])throw new i.default("Unknown type: "+y.type,y);this.sourceNode.unshift(y);var b=this[y.type](y);return this.sourceNode.shift(),b},Program:function(y){this.options.blockParams.unshift(y.blockParams);for(var b=y.body,P=b.length,E=0;E<P;E++)this.accept(b[E]);return this.options.blockParams.shift(),this.isSimple=P===1,this.blockParams=y.blockParams?y.blockParams.length:0,this},BlockStatement:function(y){l(y);var b=y.program,P=y.inverse;b=b&&this.compileProgram(b),P=P&&this.compileProgram(P);var E=this.classifySexpr(y);E==="helper"?this.helperSexpr(y,b,P):E==="simple"?(this.simpleSexpr(y),this.opcode("pushProgram",b),this.opcode("pushProgram",P),this.opcode("emptyHash"),this.opcode("blockValue",y.path.original)):(this.ambiguousSexpr(y,b,P),this.opcode("pushProgram",b),this.opcode("pushProgram",P),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(y){var b=y.program&&this.compileProgram(y.program),P=this.setupFullMustacheParams(y,b,void 0),E=y.path;this.useDecorators=!0,this.opcode("registerDecorator",P.length,E.original)},PartialStatement:function(y){this.usePartial=!0;var b=y.program;b&&(b=this.compileProgram(y.program));var P=y.params;if(P.length>1)throw new i.default("Unsupported number of partial arguments: "+P.length,y);P.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):P.push({type:"PathExpression",parts:[],depth:0}));var E=y.name.original,N=y.name.type==="SubExpression";N&&this.accept(y.name),this.setupFullMustacheParams(y,b,void 0,!0);var T=y.indent||"";this.options.preventIndent&&T&&(this.opcode("appendContent",T),T=""),this.opcode("invokePartial",N,E,T),this.opcode("append")},PartialBlockStatement:function(y){this.PartialStatement(y)},MustacheStatement:function(y){this.SubExpression(y),y.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(y){this.DecoratorBlock(y)},ContentStatement:function(y){y.value&&this.opcode("appendContent",y.value)},CommentStatement:function(){},SubExpression:function(y){l(y);var b=this.classifySexpr(y);b==="simple"?this.simpleSexpr(y):b==="helper"?this.helperSexpr(y):this.ambiguousSexpr(y)},ambiguousSexpr:function(y,b,P){var E=y.path,N=E.parts[0],T=b!=null||P!=null;this.opcode("getContext",E.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",P),E.strict=!0,this.accept(E),this.opcode("invokeAmbiguous",N,T)},simpleSexpr:function(y){var b=y.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(y,b,P){var E=this.setupFullMustacheParams(y,b,P),N=y.path,T=N.parts[0];if(this.options.knownHelpers[T])this.opcode("invokeKnownHelper",E.length,T);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+T,y);N.strict=!0,N.falsy=!0,this.accept(N),this.opcode("invokeHelper",E.length,N.original,f.default.helpers.simpleId(N))}},PathExpression:function(y){this.addDepth(y.depth),this.opcode("getContext",y.depth);var b=y.parts[0],P=f.default.helpers.scopedId(y),E=!y.depth&&!P&&this.blockParamIndex(b);E?this.opcode("lookupBlockParam",E,y.parts):b?y.data?(this.options.data=!0,this.opcode("lookupData",y.depth,y.parts,y.strict)):this.opcode("lookupOnContext",y.parts,y.falsy,y.strict,P):this.opcode("pushContext")},StringLiteral:function(y){this.opcode("pushString",y.value)},NumberLiteral:function(y){this.opcode("pushLiteral",y.value)},BooleanLiteral:function(y){this.opcode("pushLiteral",y.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(y){var b=y.pairs,P=0,E=b.length;for(this.opcode("pushHash");P<E;P++)this.pushParam(b[P].value);for(;P--;)this.opcode("assignToHash",b[P].key);this.opcode("popHash")},opcode:function(y){this.opcodes.push({opcode:y,args:S.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(y){y&&(this.useDepths=!0)},classifySexpr:function(y){var b=f.default.helpers.simpleId(y.path),P=b&&!!this.blockParamIndex(y.path.parts[0]),E=!P&&f.default.helpers.helperExpression(y),N=!P&&(E||b);if(N&&!E){var T=y.path.parts[0],A=this.options;A.knownHelpers[T]?E=!0:A.knownHelpersOnly&&(N=!1)}return E?"helper":N?"ambiguous":"simple"},pushParams:function(y){for(var b=0,P=y.length;b<P;b++)this.pushParam(y[b])},pushParam:function(y){var b=y.value!=null?y.value:y.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),y.depth&&this.addDepth(y.depth),this.opcode("getContext",y.depth||0),this.opcode("pushStringParam",b,y.type),y.type==="SubExpression"&&this.accept(y);else{if(this.trackIds){var P=void 0;if(!y.parts||f.default.helpers.scopedId(y)||y.depth||(P=this.blockParamIndex(y.parts[0])),P){var E=y.parts.slice(1).join(".");this.opcode("pushId","BlockParam",P,E)}else b=y.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",y.type,b)}this.accept(y)}},setupFullMustacheParams:function(y,b,P,E){var N=y.params;return this.pushParams(N),this.opcode("pushProgram",b),this.opcode("pushProgram",P),y.hash?this.accept(y.hash):this.opcode("emptyHash",E),N},blockParamIndex:function(y){for(var b=0,P=this.options.blockParams.length;b<P;b++){var E=this.options.blockParams[b],N=E&&h.indexOf(E,y);if(E&&N>=0)return[b,N]}}}},function(v,r,g){"use strict";function o(f){this.value=f}function n(){}function p(f,S,y,b){var P=S.popStack(),E=0,N=y.length;for(f&&N--;E<N;E++)P=S.nameLookup(P,y[E],b);return f?[S.aliasable("container.strict"),"(",P,", ",S.quotedString(y[E]),", ",JSON.stringify(S.source.currentLocation)," )"]:P}var c=g(13).default,l=g(1).default;r.__esModule=!0;var a=g(4),d=g(6),m=l(d),i=g(5),h=g(53),u=l(h);n.prototype={nameLookup:function(f,S){return this.internalNameLookup(f,S)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=a.COMPILER_REVISION,S=a.REVISION_CHANGES[f];return[f,S]},appendToBuffer:function(f,S,y){return i.isArray(f)||(f=[f]),f=this.source.wrap(f,S),this.environment.isSimple?["return ",f,";"]:y?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,S){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(S),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,S,y,b){this.environment=f,this.options=S,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!b,this.name=this.environment.name,this.isChild=!!y,this.context=y||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,S),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var P=f.opcodes,E=void 0,N=void 0,T=void 0,A=void 0;for(T=0,A=P.length;T<A;T++)E=P[T],this.source.currentLocation=E.loc,N=N||E.loc,this[E.opcode].apply(this,E.args);if(this.source.currentLocation=N,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new m.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),b?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var D=this.createFunctionContext(b);if(this.isChild)return D;var M={compiler:this.compilerInfo(),main:D};this.decorators&&(M.main_d=this.decorators,M.useDecorators=!0);var x=this.context,_=x.programs,I=x.decorators;for(T=0,A=_.length;T<A;T++)_[T]&&(M[T]=_[T],I[T]&&(M[T+"_d"]=I[T],M.useDecorators=!0));return this.environment.usePartial&&(M.usePartial=!0),this.options.data&&(M.useData=!0),this.useDepths&&(M.useDepths=!0),this.useBlockParams&&(M.useBlockParams=!0),this.options.compat&&(M.compat=!0),b?M.compilerOptions=this.options:(M.compiler=JSON.stringify(M.compiler),this.source.currentLocation={start:{line:1,column:0}},M=this.objectLiteral(M),S.srcName?(M=M.toStringWithSourceMap({file:S.destName}),M.map=M.map&&M.map.toString()):M=M.toString()),M},preamble:function(){this.lastContext=0,this.source=new u.default(this.options.srcName),this.decorators=new u.default(this.options.srcName)},createFunctionContext:function(f){var S=this,y="",b=this.stackVars.concat(this.registers.list);b.length>0&&(y+=", "+b.join(", "));var P=0;c(this.aliases).forEach(function(T){var A=S.aliases[T];A.children&&A.referenceCount>1&&(y+=", alias"+ ++P+"="+T,A.children[0]="alias"+P)}),this.lookupPropertyFunctionIsUsed&&(y+=", "+this.lookupPropertyFunctionVarDeclaration());var E=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&E.push("blockParams"),this.useDepths&&E.push("depths");var N=this.mergeSource(y);return f?(E.push(N),Function.apply(this,E)):this.source.wrap(["function(",E.join(","),`) {
  `,N,"}"])},mergeSource:function(f){var S=this.environment.isSimple,y=!this.forceBuffer,b=void 0,P=void 0,E=void 0,N=void 0;return this.source.each(function(T){T.appendToBuffer?(E?T.prepend("  + "):E=T,N=T):(E&&(P?E.prepend("buffer += "):b=!0,N.add(";"),E=N=void 0),P=!0,S||(y=!1))}),y?E?(E.prepend("return "),N.add(";")):P||this.source.push('return "";'):(f+=", buffer = "+(b?"":this.initializeBuffer()),E?(E.prepend("return buffer + "),N.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(b?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var S=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs(f,0,y);var b=this.popStack();y.splice(1,0,b),this.push(this.source.functionCall(S,"call",y))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),S=[this.contextName(0)];this.setupHelperArgs("",0,S,!0),this.flushInline();var y=this.topStack();S.splice(1,0,y),this.pushSource(["if (!",this.lastHelper,") { ",y," = ",this.source.functionCall(f,"call",S),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(S){return[" != null ? ",S,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,S,y,b){var P=0;b||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[P++])),this.resolvePath("context",f,P,S,y)},lookupBlockParam:function(f,S){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",S,1)},lookupData:function(f,S,y){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",S,0,!0,y)},resolvePath:function(f,S,y,b,P){var E=this;if(this.options.strict||this.options.assumeObjects)return void this.push(p(this.options.strict&&P,this,S,f));for(var N=S.length;y<N;y++)this.replaceStack(function(T){var A=E.nameLookup(T,S[y],f);return b?[" && ",A]:[" != null ? ",A," : ",T]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,S){this.pushContext(),this.pushString(S),S!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,S){var y=this.nameLookup("decorators",S,"decorator"),b=this.setupHelperArgs(S,f);this.decorators.push(["fn = ",this.decorators.functionCall(y,"",["fn","props","container",b])," || fn;"])},invokeHelper:function(f,S,y){var b=this.popStack(),P=this.setupHelper(f,S),E=[];y&&E.push(P.name),E.push(b),this.options.strict||E.push(this.aliasable("container.hooks.helperMissing"));var N=["(",this.itemsSeparatedBy(E,"||"),")"],T=this.source.functionCall(N,"call",P.callParams);this.push(T)},itemsSeparatedBy:function(f,S){var y=[];y.push(f[0]);for(var b=1;b<f.length;b++)y.push(S,f[b]);return y},invokeKnownHelper:function(f,S){var y=this.setupHelper(f,S);this.push(this.source.functionCall(y.name,"call",y.callParams))},invokeAmbiguous:function(f,S){this.useRegister("helper");var y=this.popStack();this.emptyHash();var b=this.setupHelper(0,f,S),P=this.lastHelper=this.nameLookup("helpers",f,"helper"),E=["(","(helper = ",P," || ",y,")"];this.options.strict||(E[0]="(helper = ",E.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",E,b.paramsInit?["),(",b.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",b.callParams)," : helper))"])},invokePartial:function(f,S,y){var b=[],P=this.setupParams(S,1,b);f&&(S=this.popStack(),delete P.name),y&&(P.indent=JSON.stringify(y)),P.helpers="helpers",P.partials="partials",P.decorators="container.decorators",f?b.unshift(S):b.unshift(this.nameLookup("partials",S,"partial")),this.options.compat&&(P.depths="depths"),P=this.objectLiteral(P),b.push(P),this.push(this.source.functionCall("container.invokePartial","",b))},assignToHash:function(f){var S=this.popStack(),y=void 0,b=void 0,P=void 0;this.trackIds&&(P=this.popStack()),this.stringParams&&(b=this.popStack(),y=this.popStack());var E=this.hash;y&&(E.contexts[f]=y),b&&(E.types[f]=b),P&&(E.ids[f]=P),E.values[f]=S},pushId:function(f,S,y){f==="BlockParam"?this.pushStackLiteral("blockParams["+S[0]+"].path["+S[1]+"]"+(y?" + "+JSON.stringify("."+y):"")):f==="PathExpression"?this.pushString(S):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(f,S){for(var y=f.children,b=void 0,P=void 0,E=0,N=y.length;E<N;E++){b=y[E],P=new this.compiler;var T=this.matchExistingProgram(b);if(T==null){this.context.programs.push("");var A=this.context.programs.length;b.index=A,b.name="program"+A,this.context.programs[A]=P.compile(b,S,this.context,!this.precompile),this.context.decorators[A]=P.decorators,this.context.environments[A]=b,this.useDepths=this.useDepths||P.useDepths,this.useBlockParams=this.useBlockParams||P.useBlockParams,b.useDepths=this.useDepths,b.useBlockParams=this.useBlockParams}else b.index=T.index,b.name="program"+T.index,this.useDepths=this.useDepths||T.useDepths,this.useBlockParams=this.useBlockParams||T.useBlockParams}},matchExistingProgram:function(f){for(var S=0,y=this.context.environments.length;S<y;S++){var b=this.context.environments[S];if(b&&b.equals(f))return b}},programExpression:function(f){var S=this.environment.children[f],y=[S.index,"data",S.blockParams];return(this.useBlockParams||this.useDepths)&&y.push("blockParams"),this.useDepths&&y.push("depths"),"container.program("+y.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof o||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new o(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var S=["("],y=void 0,b=void 0,P=void 0;if(!this.isInline())throw new m.default("replaceStack on non-inline");var E=this.popStack(!0);if(E instanceof o)y=[E.value],S=["(",y],P=!0;else{b=!0;var N=this.incrStack();S=["((",this.push(N)," = ",E,")"],y=this.topStack()}var T=f.call(this,y);P||this.popStack(),b&&this.stackSlot--,this.push(S.concat(T,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var S=0,y=f.length;S<y;S++){var b=f[S];if(b instanceof o)this.compileStack.push(b);else{var P=this.incrStack();this.pushSource([P," = ",b,";"]),this.compileStack.push(P)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var S=this.isInline(),y=(S?this.inlineStack:this.compileStack).pop();if(!f&&y instanceof o)return y.value;if(!S){if(!this.stackSlot)throw new m.default("Invalid stack pop");this.stackSlot--}return y},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,S=f[f.length-1];return S instanceof o?S.value:S},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var S=this.aliases[f];return S?(S.referenceCount++,S):(S=this.aliases[f]=this.source.wrap(f),S.aliasable=!0,S.referenceCount=1,S)},setupHelper:function(f,S,y){var b=[],P=this.setupHelperArgs(S,f,b,y),E=this.nameLookup("helpers",S,"helper"),N=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:b,paramsInit:P,name:E,callParams:[N].concat(b)}},setupParams:function(f,S,y){var b={},P=[],E=[],N=[],T=!y,A=void 0;T&&(y=[]),b.name=this.quotedString(f),b.hash=this.popStack(),this.trackIds&&(b.hashIds=this.popStack()),this.stringParams&&(b.hashTypes=this.popStack(),b.hashContexts=this.popStack());var D=this.popStack(),M=this.popStack();(M||D)&&(b.fn=M||"container.noop",b.inverse=D||"container.noop");for(var x=S;x--;)A=this.popStack(),y[x]=A,this.trackIds&&(N[x]=this.popStack()),this.stringParams&&(E[x]=this.popStack(),P[x]=this.popStack());return T&&(b.args=this.source.generateArray(y)),this.trackIds&&(b.ids=this.source.generateArray(N)),this.stringParams&&(b.types=this.source.generateArray(E),b.contexts=this.source.generateArray(P)),this.options.data&&(b.data="data"),this.useBlockParams&&(b.blockParams="blockParams"),b},setupHelperArgs:function(f,S,y,b){var P=this.setupParams(f,S,y);return P.loc=JSON.stringify(this.source.currentLocation),P=this.objectLiteral(P),b?(this.useRegister("options"),y.push("options"),["options=",P]):y?(y.push(P),""):P}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),S=n.RESERVED_WORDS={},y=0,b=f.length;y<b;y++)S[f[y]]=!0}(),n.isValidJavaScriptVariableName=function(f){return!n.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},r.default=n,v.exports=r.default},function(v,r,g){"use strict";function o(a,d,m){if(c.isArray(a)){for(var i=[],h=0,u=a.length;h<u;h++)i.push(d.wrap(a[h],m));return i}return typeof a=="boolean"||typeof a=="number"?a+"":a}function n(a){this.srcFile=a,this.source=[]}var p=g(13).default;r.__esModule=!0;var c=g(5),l=void 0;try{}catch(a){}l||(l=function(a,d,m,i){this.src="",i&&this.add(i)},l.prototype={add:function(a){c.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){c.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,d){this.source.unshift(this.wrap(a,d))},push:function(a,d){this.source.push(this.wrap(a,d))},merge:function(){var a=this.empty();return this.each(function(d){a.add(["  ",d,`
`])}),a},each:function(a){for(var d=0,m=this.source.length;d<m;d++)a(this.source[d])},empty:function(){var a=this.currentLocation||{start:{}};return new l(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var d=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return a instanceof l?a:(a=o(a,this,d),new l(d.start.line,d.start.column,this.srcFile,a))},functionCall:function(a,d,m){return m=this.generateList(m),this.wrap([a,d?"."+d+"(":"(",m,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var d=this,m=[];p(a).forEach(function(h){var u=o(a[h],d);u!=="undefined"&&m.push([d.quotedString(h),":",u])});var i=this.generateList(m);return i.prepend("{"),i.add("}"),i},generateList:function(a){for(var d=this.empty(),m=0,i=a.length;m<i;m++)m&&d.add(","),d.add(o(a[m],this));return d},generateArray:function(a){var d=this.generateList(a);return d.prepend("["),d.add("]"),d}},r.default=n,v.exports=r.default}])})},4779:(O,v,r)=>{var g;/*!
* Sizzle CSS Selector Engine v2.3.6
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2021-02-16
*/(function(o){var n,p,c,l,a,d,m,i,h,u,f,S,y,b,P,E,N,T,A,D="sizzle"+1*new Date,M=o.document,x=0,_=0,I=qe(),U=qe(),F=qe(),z=qe(),B=function(j,q){return j===q&&(f=!0),0},$={}.hasOwnProperty,w=[],H=w.pop,V=w.push,ne=w.push,re=w.slice,ce=function(j,q){for(var Z=0,Y=j.length;Z<Y;Z++)if(j[Z]===q)return Z;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ge="[\\x20\\t\\r\\n\\f]",Ce="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",je="\\["+ge+"*("+Ce+")(?:"+ge+"*([*^$|!~]?=)"+ge+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ce+"))|)"+ge+"*\\]",it=":("+Ce+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+je+")*)|.*)\\)|)",mt=new RegExp(ge+"+","g"),ut=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g"),ht=new RegExp("^"+ge+"*,"+ge+"*"),At=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),De=new RegExp(ge+"|>"),Ct=new RegExp(it),Ue=new RegExp("^"+Ce+"$"),We={ID:new RegExp("^#("+Ce+")"),CLASS:new RegExp("^\\.("+Ce+")"),TAG:new RegExp("^("+Ce+"|[*])"),ATTR:new RegExp("^"+je),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},Bt=/HTML$/i,Fe=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,Ne=/^[^{]+\{\s*\[native \w/,Re=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ie=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),he=function(j,q){var Z="0x"+j.slice(1)-65536;return q||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ze=function(j,q){return q?j==="\0"?"\uFFFD":j.slice(0,-1)+"\\"+j.charCodeAt(j.length-1).toString(16)+" ":"\\"+j},Ke=function(){S()},Je=yt(function(j){return j.disabled===!0&&j.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{ne.apply(w=re.call(M.childNodes),M.childNodes),w[M.childNodes.length].nodeType}catch(j){ne={apply:w.length?function(q,Z){V.apply(q,re.call(Z))}:function(q,Z){for(var Y=q.length,W=0;q[Y++]=Z[W++];);q.length=Y-1}}}function Pe(j,q,Z,Y){var W,X,ee,se,ue,me,Ee,Te=q&&q.ownerDocument,Ie=q?q.nodeType:9;if(Z=Z||[],typeof j!="string"||!j||Ie!==1&&Ie!==9&&Ie!==11)return Z;if(!Y&&(S(q),q=q||y,P)){if(Ie!==11&&(ue=Re.exec(j)))if(W=ue[1]){if(Ie===9)if(ee=q.getElementById(W)){if(ee.id===W)return Z.push(ee),Z}else return Z;else if(Te&&(ee=Te.getElementById(W))&&A(q,ee)&&ee.id===W)return Z.push(ee),Z}else{if(ue[2])return ne.apply(Z,q.getElementsByTagName(j)),Z;if((W=ue[3])&&p.getElementsByClassName&&q.getElementsByClassName)return ne.apply(Z,q.getElementsByClassName(W)),Z}if(p.qsa&&!z[j+" "]&&(!E||!E.test(j))&&(Ie!==1||q.nodeName.toLowerCase()!=="object")){if(Ee=j,Te=q,Ie===1&&(De.test(j)||At.test(j))){for(Te=ie.test(j)&&gn(q.parentNode)||q,(Te!==q||!p.scope)&&((se=q.getAttribute("id"))?se=se.replace(be,Ze):q.setAttribute("id",se=D)),me=d(j),X=me.length;X--;)me[X]=(se?"#"+se:":scope")+" "+mn(me[X]);Ee=me.join(",")}try{return ne.apply(Z,Te.querySelectorAll(Ee)),Z}catch(Ve){z(j,!0)}finally{se===D&&q.removeAttribute("id")}}}return i(j.replace(ut,"$1"),q,Z,Y)}function qe(){var j=[];function q(Z,Y){return j.push(Z+" ")>c.cacheLength&&delete q[j.shift()],q[Z+" "]=Y}return q}function Qe(j){return j[D]=!0,j}function Xe(j){var q=y.createElement("fieldset");try{return!!j(q)}catch(Z){return!1}finally{q.parentNode&&q.parentNode.removeChild(q),q=null}}function zt(j,q){for(var Z=j.split("|"),Y=Z.length;Y--;)c.attrHandle[Z[Y]]=q}function Lt(j,q){var Z=q&&j,Y=Z&&j.nodeType===1&&q.nodeType===1&&j.sourceIndex-q.sourceIndex;if(Y)return Y;if(Z){for(;Z=Z.nextSibling;)if(Z===q)return-1}return j?1:-1}function Nt(j){return function(q){var Z=q.nodeName.toLowerCase();return Z==="input"&&q.type===j}}function Tn(j){return function(q){var Z=q.nodeName.toLowerCase();return(Z==="input"||Z==="button")&&q.type===j}}function an(j){return function(q){return"form"in q?q.parentNode&&q.disabled===!1?"label"in q?"label"in q.parentNode?q.parentNode.disabled===j:q.disabled===j:q.isDisabled===j||q.isDisabled!==!j&&Je(q)===j:q.disabled===j:"label"in q?q.disabled===j:!1}}function Wt(j){return Qe(function(q){return q=+q,Qe(function(Z,Y){for(var W,X=j([],Z.length,q),ee=X.length;ee--;)Z[W=X[ee]]&&(Z[W]=!(Y[W]=Z[W]))})})}function gn(j){return j&&typeof j.getElementsByTagName!="undefined"&&j}p=Pe.support={},a=Pe.isXML=function(j){var q=j&&j.namespaceURI,Z=j&&(j.ownerDocument||j).documentElement;return!Bt.test(q||Z&&Z.nodeName||"HTML")},S=Pe.setDocument=function(j){var q,Z,Y=j?j.ownerDocument||j:M;return Y==y||Y.nodeType!==9||!Y.documentElement||(y=Y,b=y.documentElement,P=!a(y),M!=y&&(Z=y.defaultView)&&Z.top!==Z&&(Z.addEventListener?Z.addEventListener("unload",Ke,!1):Z.attachEvent&&Z.attachEvent("onunload",Ke)),p.scope=Xe(function(W){return b.appendChild(W).appendChild(y.createElement("div")),typeof W.querySelectorAll!="undefined"&&!W.querySelectorAll(":scope fieldset div").length}),p.attributes=Xe(function(W){return W.className="i",!W.getAttribute("className")}),p.getElementsByTagName=Xe(function(W){return W.appendChild(y.createComment("")),!W.getElementsByTagName("*").length}),p.getElementsByClassName=Ne.test(y.getElementsByClassName),p.getById=Xe(function(W){return b.appendChild(W).id=D,!y.getElementsByName||!y.getElementsByName(D).length}),p.getById?(c.filter.ID=function(W){var X=W.replace(ye,he);return function(ee){return ee.getAttribute("id")===X}},c.find.ID=function(W,X){if(typeof X.getElementById!="undefined"&&P){var ee=X.getElementById(W);return ee?[ee]:[]}}):(c.filter.ID=function(W){var X=W.replace(ye,he);return function(ee){var se=typeof ee.getAttributeNode!="undefined"&&ee.getAttributeNode("id");return se&&se.value===X}},c.find.ID=function(W,X){if(typeof X.getElementById!="undefined"&&P){var ee,se,ue,me=X.getElementById(W);if(me){if(ee=me.getAttributeNode("id"),ee&&ee.value===W)return[me];for(ue=X.getElementsByName(W),se=0;me=ue[se++];)if(ee=me.getAttributeNode("id"),ee&&ee.value===W)return[me]}return[]}}),c.find.TAG=p.getElementsByTagName?function(W,X){if(typeof X.getElementsByTagName!="undefined")return X.getElementsByTagName(W);if(p.qsa)return X.querySelectorAll(W)}:function(W,X){var ee,se=[],ue=0,me=X.getElementsByTagName(W);if(W==="*"){for(;ee=me[ue++];)ee.nodeType===1&&se.push(ee);return se}return me},c.find.CLASS=p.getElementsByClassName&&function(W,X){if(typeof X.getElementsByClassName!="undefined"&&P)return X.getElementsByClassName(W)},N=[],E=[],(p.qsa=Ne.test(y.querySelectorAll))&&(Xe(function(W){var X;b.appendChild(W).innerHTML="<a id='"+D+"'></a><select id='"+D+"-\r\\' msallowcapture=''><option selected=''></option></select>",W.querySelectorAll("[msallowcapture^='']").length&&E.push("[*^$]="+ge+`*(?:''|"")`),W.querySelectorAll("[selected]").length||E.push("\\["+ge+"*(?:value|"+te+")"),W.querySelectorAll("[id~="+D+"-]").length||E.push("~="),X=y.createElement("input"),X.setAttribute("name",""),W.appendChild(X),W.querySelectorAll("[name='']").length||E.push("\\["+ge+"*name"+ge+"*="+ge+`*(?:''|"")`),W.querySelectorAll(":checked").length||E.push(":checked"),W.querySelectorAll("a#"+D+"+*").length||E.push(".#.+[+~]"),W.querySelectorAll("\\\f"),E.push("[\\r\\n\\f]")}),Xe(function(W){W.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var X=y.createElement("input");X.setAttribute("type","hidden"),W.appendChild(X).setAttribute("name","D"),W.querySelectorAll("[name=d]").length&&E.push("name"+ge+"*[*^$|!~]?="),W.querySelectorAll(":enabled").length!==2&&E.push(":enabled",":disabled"),b.appendChild(W).disabled=!0,W.querySelectorAll(":disabled").length!==2&&E.push(":enabled",":disabled"),W.querySelectorAll("*,:x"),E.push(",.*:")})),(p.matchesSelector=Ne.test(T=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector||b.msMatchesSelector))&&Xe(function(W){p.disconnectedMatch=T.call(W,"*"),T.call(W,"[s!='']:x"),N.push("!=",it)}),E=E.length&&new RegExp(E.join("|")),N=N.length&&new RegExp(N.join("|")),q=Ne.test(b.compareDocumentPosition),A=q||Ne.test(b.contains)?function(W,X){var ee=W.nodeType===9?W.documentElement:W,se=X&&X.parentNode;return W===se||!!(se&&se.nodeType===1&&(ee.contains?ee.contains(se):W.compareDocumentPosition&&W.compareDocumentPosition(se)&16))}:function(W,X){if(X){for(;X=X.parentNode;)if(X===W)return!0}return!1},B=q?function(W,X){if(W===X)return f=!0,0;var ee=!W.compareDocumentPosition-!X.compareDocumentPosition;return ee||(ee=(W.ownerDocument||W)==(X.ownerDocument||X)?W.compareDocumentPosition(X):1,ee&1||!p.sortDetached&&X.compareDocumentPosition(W)===ee?W==y||W.ownerDocument==M&&A(M,W)?-1:X==y||X.ownerDocument==M&&A(M,X)?1:u?ce(u,W)-ce(u,X):0:ee&4?-1:1)}:function(W,X){if(W===X)return f=!0,0;var ee,se=0,ue=W.parentNode,me=X.parentNode,Ee=[W],Te=[X];if(!ue||!me)return W==y?-1:X==y?1:ue?-1:me?1:u?ce(u,W)-ce(u,X):0;if(ue===me)return Lt(W,X);for(ee=W;ee=ee.parentNode;)Ee.unshift(ee);for(ee=X;ee=ee.parentNode;)Te.unshift(ee);for(;Ee[se]===Te[se];)se++;return se?Lt(Ee[se],Te[se]):Ee[se]==M?-1:Te[se]==M?1:0}),y},Pe.matches=function(j,q){return Pe(j,null,null,q)},Pe.matchesSelector=function(j,q){if(S(j),p.matchesSelector&&P&&!z[q+" "]&&(!N||!N.test(q))&&(!E||!E.test(q)))try{var Z=T.call(j,q);if(Z||p.disconnectedMatch||j.document&&j.document.nodeType!==11)return Z}catch(Y){z(q,!0)}return Pe(q,y,null,[j]).length>0},Pe.contains=function(j,q){return(j.ownerDocument||j)!=y&&S(j),A(j,q)},Pe.attr=function(j,q){(j.ownerDocument||j)!=y&&S(j);var Z=c.attrHandle[q.toLowerCase()],Y=Z&&$.call(c.attrHandle,q.toLowerCase())?Z(j,q,!P):void 0;return Y!==void 0?Y:p.attributes||!P?j.getAttribute(q):(Y=j.getAttributeNode(q))&&Y.specified?Y.value:null},Pe.escape=function(j){return(j+"").replace(be,Ze)},Pe.error=function(j){throw new Error("Syntax error, unrecognized expression: "+j)},Pe.uniqueSort=function(j){var q,Z=[],Y=0,W=0;if(f=!p.detectDuplicates,u=!p.sortStable&&j.slice(0),j.sort(B),f){for(;q=j[W++];)q===j[W]&&(Y=Z.push(W));for(;Y--;)j.splice(Z[Y],1)}return u=null,j},l=Pe.getText=function(j){var q,Z="",Y=0,W=j.nodeType;if(W){if(W===1||W===9||W===11){if(typeof j.textContent=="string")return j.textContent;for(j=j.firstChild;j;j=j.nextSibling)Z+=l(j)}else if(W===3||W===4)return j.nodeValue}else for(;q=j[Y++];)Z+=l(q);return Z},c=Pe.selectors={cacheLength:50,createPseudo:Qe,match:We,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(j){return j[1]=j[1].replace(ye,he),j[3]=(j[3]||j[4]||j[5]||"").replace(ye,he),j[2]==="~="&&(j[3]=" "+j[3]+" "),j.slice(0,4)},CHILD:function(j){return j[1]=j[1].toLowerCase(),j[1].slice(0,3)==="nth"?(j[3]||Pe.error(j[0]),j[4]=+(j[4]?j[5]+(j[6]||1):2*(j[3]==="even"||j[3]==="odd")),j[5]=+(j[7]+j[8]||j[3]==="odd")):j[3]&&Pe.error(j[0]),j},PSEUDO:function(j){var q,Z=!j[6]&&j[2];return We.CHILD.test(j[0])?null:(j[3]?j[2]=j[4]||j[5]||"":Z&&Ct.test(Z)&&(q=d(Z,!0))&&(q=Z.indexOf(")",Z.length-q)-Z.length)&&(j[0]=j[0].slice(0,q),j[2]=Z.slice(0,q)),j.slice(0,3))}},filter:{TAG:function(j){var q=j.replace(ye,he).toLowerCase();return j==="*"?function(){return!0}:function(Z){return Z.nodeName&&Z.nodeName.toLowerCase()===q}},CLASS:function(j){var q=I[j+" "];return q||(q=new RegExp("(^|"+ge+")"+j+"("+ge+"|$)"))&&I(j,function(Z){return q.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute!="undefined"&&Z.getAttribute("class")||"")})},ATTR:function(j,q,Z){return function(Y){var W=Pe.attr(Y,j);return W==null?q==="!=":q?(W+="",q==="="?W===Z:q==="!="?W!==Z:q==="^="?Z&&W.indexOf(Z)===0:q==="*="?Z&&W.indexOf(Z)>-1:q==="$="?Z&&W.slice(-Z.length)===Z:q==="~="?(" "+W.replace(mt," ")+" ").indexOf(Z)>-1:q==="|="?W===Z||W.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(j,q,Z,Y,W){var X=j.slice(0,3)!=="nth",ee=j.slice(-4)!=="last",se=q==="of-type";return Y===1&&W===0?function(ue){return!!ue.parentNode}:function(ue,me,Ee){var Te,Ie,Ve,ve,Le,vt,Rt=X!==ee?"nextSibling":"previousSibling",at=ue.parentNode,Yt=se&&ue.nodeName.toLowerCase(),Un=!Ee&&!se,Et=!1;if(at){if(X){for(;Rt;){for(ve=ue;ve=ve[Rt];)if(se?ve.nodeName.toLowerCase()===Yt:ve.nodeType===1)return!1;vt=Rt=j==="only"&&!vt&&"nextSibling"}return!0}if(vt=[ee?at.firstChild:at.lastChild],ee&&Un){for(ve=at,Ve=ve[D]||(ve[D]={}),Ie=Ve[ve.uniqueID]||(Ve[ve.uniqueID]={}),Te=Ie[j]||[],Le=Te[0]===x&&Te[1],Et=Le&&Te[2],ve=Le&&at.childNodes[Le];ve=++Le&&ve&&ve[Rt]||(Et=Le=0)||vt.pop();)if(ve.nodeType===1&&++Et&&ve===ue){Ie[j]=[x,Le,Et];break}}else if(Un&&(ve=ue,Ve=ve[D]||(ve[D]={}),Ie=Ve[ve.uniqueID]||(Ve[ve.uniqueID]={}),Te=Ie[j]||[],Le=Te[0]===x&&Te[1],Et=Le),Et===!1)for(;(ve=++Le&&ve&&ve[Rt]||(Et=Le=0)||vt.pop())&&!((se?ve.nodeName.toLowerCase()===Yt:ve.nodeType===1)&&++Et&&(Un&&(Ve=ve[D]||(ve[D]={}),Ie=Ve[ve.uniqueID]||(Ve[ve.uniqueID]={}),Ie[j]=[x,Et]),ve===ue)););return Et-=W,Et===Y||Et%Y===0&&Et/Y>=0}}},PSEUDO:function(j,q){var Z,Y=c.pseudos[j]||c.setFilters[j.toLowerCase()]||Pe.error("unsupported pseudo: "+j);return Y[D]?Y(q):Y.length>1?(Z=[j,j,"",q],c.setFilters.hasOwnProperty(j.toLowerCase())?Qe(function(W,X){for(var ee,se=Y(W,q),ue=se.length;ue--;)ee=ce(W,se[ue]),W[ee]=!(X[ee]=se[ue])}):function(W){return Y(W,0,Z)}):Y}},pseudos:{not:Qe(function(j){var q=[],Z=[],Y=m(j.replace(ut,"$1"));return Y[D]?Qe(function(W,X,ee,se){for(var ue,me=Y(W,null,se,[]),Ee=W.length;Ee--;)(ue=me[Ee])&&(W[Ee]=!(X[Ee]=ue))}):function(W,X,ee){return q[0]=W,Y(q,null,ee,Z),q[0]=null,!Z.pop()}}),has:Qe(function(j){return function(q){return Pe(j,q).length>0}}),contains:Qe(function(j){return j=j.replace(ye,he),function(q){return(q.textContent||l(q)).indexOf(j)>-1}}),lang:Qe(function(j){return Ue.test(j||"")||Pe.error("unsupported lang: "+j),j=j.replace(ye,he).toLowerCase(),function(q){var Z;do if(Z=P?q.lang:q.getAttribute("xml:lang")||q.getAttribute("lang"))return Z=Z.toLowerCase(),Z===j||Z.indexOf(j+"-")===0;while((q=q.parentNode)&&q.nodeType===1);return!1}}),target:function(j){var q=o.location&&o.location.hash;return q&&q.slice(1)===j.id},root:function(j){return j===b},focus:function(j){return j===y.activeElement&&(!y.hasFocus||y.hasFocus())&&!!(j.type||j.href||~j.tabIndex)},enabled:an(!1),disabled:an(!0),checked:function(j){var q=j.nodeName.toLowerCase();return q==="input"&&!!j.checked||q==="option"&&!!j.selected},selected:function(j){return j.parentNode&&j.parentNode.selectedIndex,j.selected===!0},empty:function(j){for(j=j.firstChild;j;j=j.nextSibling)if(j.nodeType<6)return!1;return!0},parent:function(j){return!c.pseudos.empty(j)},header:function(j){return pe.test(j.nodeName)},input:function(j){return Fe.test(j.nodeName)},button:function(j){var q=j.nodeName.toLowerCase();return q==="input"&&j.type==="button"||q==="button"},text:function(j){var q;return j.nodeName.toLowerCase()==="input"&&j.type==="text"&&((q=j.getAttribute("type"))==null||q.toLowerCase()==="text")},first:Wt(function(){return[0]}),last:Wt(function(j,q){return[q-1]}),eq:Wt(function(j,q,Z){return[Z<0?Z+q:Z]}),even:Wt(function(j,q){for(var Z=0;Z<q;Z+=2)j.push(Z);return j}),odd:Wt(function(j,q){for(var Z=1;Z<q;Z+=2)j.push(Z);return j}),lt:Wt(function(j,q,Z){for(var Y=Z<0?Z+q:Z>q?q:Z;--Y>=0;)j.push(Y);return j}),gt:Wt(function(j,q,Z){for(var Y=Z<0?Z+q:Z;++Y<q;)j.push(Y);return j})}},c.pseudos.nth=c.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[n]=Nt(n);for(n in{submit:!0,reset:!0})c.pseudos[n]=Tn(n);function jt(){}jt.prototype=c.filters=c.pseudos,c.setFilters=new jt,d=Pe.tokenize=function(j,q){var Z,Y,W,X,ee,se,ue,me=U[j+" "];if(me)return q?0:me.slice(0);for(ee=j,se=[],ue=c.preFilter;ee;){(!Z||(Y=ht.exec(ee)))&&(Y&&(ee=ee.slice(Y[0].length)||ee),se.push(W=[])),Z=!1,(Y=At.exec(ee))&&(Z=Y.shift(),W.push({value:Z,type:Y[0].replace(ut," ")}),ee=ee.slice(Z.length));for(X in c.filter)(Y=We[X].exec(ee))&&(!ue[X]||(Y=ue[X](Y)))&&(Z=Y.shift(),W.push({value:Z,type:X,matches:Y}),ee=ee.slice(Z.length));if(!Z)break}return q?ee.length:ee?Pe.error(j):U(j,se).slice(0)};function mn(j){for(var q=0,Z=j.length,Y="";q<Z;q++)Y+=j[q].value;return Y}function yt(j,q,Z){var Y=q.dir,W=q.next,X=W||Y,ee=Z&&X==="parentNode",se=_++;return q.first?function(ue,me,Ee){for(;ue=ue[Y];)if(ue.nodeType===1||ee)return j(ue,me,Ee);return!1}:function(ue,me,Ee){var Te,Ie,Ve,ve=[x,se];if(Ee){for(;ue=ue[Y];)if((ue.nodeType===1||ee)&&j(ue,me,Ee))return!0}else for(;ue=ue[Y];)if(ue.nodeType===1||ee)if(Ve=ue[D]||(ue[D]={}),Ie=Ve[ue.uniqueID]||(Ve[ue.uniqueID]={}),W&&W===ue.nodeName.toLowerCase())ue=ue[Y]||ue;else{if((Te=Ie[X])&&Te[0]===x&&Te[1]===se)return ve[2]=Te[2];if(Ie[X]=ve,ve[2]=j(ue,me,Ee))return!0}return!1}}function An(j){return j.length>1?function(q,Z,Y){for(var W=j.length;W--;)if(!j[W](q,Z,Y))return!1;return!0}:j[0]}function kn(j,q,Z){for(var Y=0,W=q.length;Y<W;Y++)Pe(j,q[Y],Z);return Z}function dn(j,q,Z,Y,W){for(var X,ee=[],se=0,ue=j.length,me=q!=null;se<ue;se++)(X=j[se])&&(!Z||Z(X,Y,W))&&(ee.push(X),me&&q.push(se));return ee}function wn(j,q,Z,Y,W,X){return Y&&!Y[D]&&(Y=wn(Y)),W&&!W[D]&&(W=wn(W,X)),Qe(function(ee,se,ue,me){var Ee,Te,Ie,Ve=[],ve=[],Le=se.length,vt=ee||kn(q||"*",ue.nodeType?[ue]:ue,[]),Rt=j&&(ee||!q)?dn(vt,Ve,j,ue,me):vt,at=Z?W||(ee?j:Le||Y)?[]:se:Rt;if(Z&&Z(Rt,at,ue,me),Y)for(Ee=dn(at,ve),Y(Ee,[],ue,me),Te=Ee.length;Te--;)(Ie=Ee[Te])&&(at[ve[Te]]=!(Rt[ve[Te]]=Ie));if(ee){if(W||j){if(W){for(Ee=[],Te=at.length;Te--;)(Ie=at[Te])&&Ee.push(Rt[Te]=Ie);W(null,at=[],Ee,me)}for(Te=at.length;Te--;)(Ie=at[Te])&&(Ee=W?ce(ee,Ie):Ve[Te])>-1&&(ee[Ee]=!(se[Ee]=Ie))}}else at=dn(at===se?at.splice(Le,at.length):at),W?W(null,se,at,me):ne.apply(se,at)})}function Nn(j){for(var q,Z,Y,W=j.length,X=c.relative[j[0].type],ee=X||c.relative[" "],se=X?1:0,ue=yt(function(Te){return Te===q},ee,!0),me=yt(function(Te){return ce(q,Te)>-1},ee,!0),Ee=[function(Te,Ie,Ve){var ve=!X&&(Ve||Ie!==h)||((q=Ie).nodeType?ue(Te,Ie,Ve):me(Te,Ie,Ve));return q=null,ve}];se<W;se++)if(Z=c.relative[j[se].type])Ee=[yt(An(Ee),Z)];else{if(Z=c.filter[j[se].type].apply(null,j[se].matches),Z[D]){for(Y=++se;Y<W&&!c.relative[j[Y].type];Y++);return wn(se>1&&An(Ee),se>1&&mn(j.slice(0,se-1).concat({value:j[se-2].type===" "?"*":""})).replace(ut,"$1"),Z,se<Y&&Nn(j.slice(se,Y)),Y<W&&Nn(j=j.slice(Y)),Y<W&&mn(j))}Ee.push(Z)}return An(Ee)}function po(j,q){var Z=q.length>0,Y=j.length>0,W=function(X,ee,se,ue,me){var Ee,Te,Ie,Ve=0,ve="0",Le=X&&[],vt=[],Rt=h,at=X||Y&&c.find.TAG("*",me),Yt=x+=Rt==null?1:Math.random()||.1,Un=at.length;for(me&&(h=ee==y||ee||me);ve!==Un&&(Ee=at[ve])!=null;ve++){if(Y&&Ee){for(Te=0,!ee&&Ee.ownerDocument!=y&&(S(Ee),se=!P);Ie=j[Te++];)if(Ie(Ee,ee||y,se)){ue.push(Ee);break}me&&(x=Yt)}Z&&((Ee=!Ie&&Ee)&&Ve--,X&&Le.push(Ee))}if(Ve+=ve,Z&&ve!==Ve){for(Te=0;Ie=q[Te++];)Ie(Le,vt,ee,se);if(X){if(Ve>0)for(;ve--;)Le[ve]||vt[ve]||(vt[ve]=H.call(ue));vt=dn(vt)}ne.apply(ue,vt),me&&!X&&vt.length>0&&Ve+q.length>1&&Pe.uniqueSort(ue)}return me&&(x=Yt,h=Rt),Le};return Z?Qe(W):W}m=Pe.compile=function(j,q){var Z,Y=[],W=[],X=F[j+" "];if(!X){for(q||(q=d(j)),Z=q.length;Z--;)X=Nn(q[Z]),X[D]?Y.push(X):W.push(X);X=F(j,po(W,Y)),X.selector=j}return X},i=Pe.select=function(j,q,Z,Y){var W,X,ee,se,ue,me=typeof j=="function"&&j,Ee=!Y&&d(j=me.selector||j);if(Z=Z||[],Ee.length===1){if(X=Ee[0]=Ee[0].slice(0),X.length>2&&(ee=X[0]).type==="ID"&&q.nodeType===9&&P&&c.relative[X[1].type]){if(q=(c.find.ID(ee.matches[0].replace(ye,he),q)||[])[0],q)me&&(q=q.parentNode);else return Z;j=j.slice(X.shift().value.length)}for(W=We.needsContext.test(j)?0:X.length;W--&&(ee=X[W],!c.relative[se=ee.type]);)if((ue=c.find[se])&&(Y=ue(ee.matches[0].replace(ye,he),ie.test(X[0].type)&&gn(q.parentNode)||q))){if(X.splice(W,1),j=Y.length&&mn(X),!j)return ne.apply(Z,Y),Z;break}}return(me||m(j,Ee))(Y,q,!P,Z,!q||ie.test(j)&&gn(q.parentNode)||q),Z},p.sortStable=D.split("").sort(B).join("")===D,p.detectDuplicates=!!f,S(),p.sortDetached=Xe(function(j){return j.compareDocumentPosition(y.createElement("fieldset"))&1}),Xe(function(j){return j.innerHTML="<a href='#'></a>",j.firstChild.getAttribute("href")==="#"})||zt("type|href|height|width",function(j,q,Z){if(!Z)return j.getAttribute(q,q.toLowerCase()==="type"?1:2)}),(!p.attributes||!Xe(function(j){return j.innerHTML="<input/>",j.firstChild.setAttribute("value",""),j.firstChild.getAttribute("value")===""}))&&zt("value",function(j,q,Z){if(!Z&&j.nodeName.toLowerCase()==="input")return j.defaultValue}),Xe(function(j){return j.getAttribute("disabled")==null})||zt(te,function(j,q,Z){var Y;if(!Z)return j[q]===!0?q.toLowerCase():(Y=j.getAttributeNode(q))&&Y.specified?Y.value:null});var Kn=o.Sizzle;Pe.noConflict=function(){return o.Sizzle===Pe&&(o.Sizzle=Kn),Pe},g=function(){return Pe}.call(v,r,v,O),g!==void 0&&(O.exports=g)})(window)},1450:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(9003),r(1143),r(2047),r(655),r(5401),r(6365),r(6073),r(2075),r(184),r(4492)],o=function(n,p,c,l,a,d,m){"use strict";var i=/%20/g,h=/#.*$/,u=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,S=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,y=/^(?:GET|HEAD)$/,b=/^\/\//,P={},E={},N="*/".concat("*"),T=p.createElement("a");T.href=a.href;function A(I){return function(U,F){typeof U!="string"&&(F=U,U="*");var z,B=0,$=U.toLowerCase().match(l)||[];if(c(F))for(;z=$[B++];)z[0]==="+"?(z=z.slice(1)||"*",(I[z]=I[z]||[]).unshift(F)):(I[z]=I[z]||[]).push(F)}}function D(I,U,F,z){var B={},$=I===E;function w(H){var V;return B[H]=!0,n.each(I[H]||[],function(ne,re){var ce=re(U,F,z);if(typeof ce=="string"&&!$&&!B[ce])return U.dataTypes.unshift(ce),w(ce),!1;if($)return!(V=ce)}),V}return w(U.dataTypes[0])||!B["*"]&&w("*")}function M(I,U){var F,z,B=n.ajaxSettings.flatOptions||{};for(F in U)U[F]!==void 0&&((B[F]?I:z||(z={}))[F]=U[F]);return z&&n.extend(!0,I,z),I}function x(I,U,F){for(var z,B,$,w,H=I.contents,V=I.dataTypes;V[0]==="*";)V.shift(),z===void 0&&(z=I.mimeType||U.getResponseHeader("Content-Type"));if(z){for(B in H)if(H[B]&&H[B].test(z)){V.unshift(B);break}}if(V[0]in F)$=V[0];else{for(B in F){if(!V[0]||I.converters[B+" "+V[0]]){$=B;break}w||(w=B)}$=$||w}if($)return $!==V[0]&&V.unshift($),F[$]}function _(I,U,F,z){var B,$,w,H,V,ne={},re=I.dataTypes.slice();if(re[1])for(w in I.converters)ne[w.toLowerCase()]=I.converters[w];for($=re.shift();$;)if(I.responseFields[$]&&(F[I.responseFields[$]]=U),!V&&z&&I.dataFilter&&(U=I.dataFilter(U,I.dataType)),V=$,$=re.shift(),$){if($==="*")$=V;else if(V!=="*"&&V!==$){if(w=ne[V+" "+$]||ne["* "+$],!w){for(B in ne)if(H=B.split(" "),H[1]===$&&(w=ne[V+" "+H[0]]||ne["* "+H[0]],w)){w===!0?w=ne[B]:ne[B]!==!0&&($=H[0],re.unshift(H[1]));break}}if(w!==!0)if(w&&I.throws)U=w(U);else try{U=w(U)}catch(ce){return{state:"parsererror",error:w?ce:"No conversion from "+V+" to "+$}}}}return{state:"success",data:U}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:a.href,type:"GET",isLocal:S.test(a.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":N,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(I,U){return U?M(M(I,n.ajaxSettings),U):M(n.ajaxSettings,I)},ajaxPrefilter:A(P),ajaxTransport:A(E),ajax:function(I,U){typeof I=="object"&&(U=I,I=void 0),U=U||{};var F,z,B,$,w,H,V,ne,re,ce,te=n.ajaxSetup({},U),ge=te.context||te,Ce=te.context&&(ge.nodeType||ge.jquery)?n(ge):n.event,je=n.Deferred(),it=n.Callbacks("once memory"),mt=te.statusCode||{},ut={},ht={},At="canceled",De={readyState:0,getResponseHeader:function(Ue){var We;if(V){if(!$)for($={};We=f.exec(B);)$[We[1].toLowerCase()+" "]=($[We[1].toLowerCase()+" "]||[]).concat(We[2]);We=$[Ue.toLowerCase()+" "]}return We==null?null:We.join(", ")},getAllResponseHeaders:function(){return V?B:null},setRequestHeader:function(Ue,We){return V==null&&(Ue=ht[Ue.toLowerCase()]=ht[Ue.toLowerCase()]||Ue,ut[Ue]=We),this},overrideMimeType:function(Ue){return V==null&&(te.mimeType=Ue),this},statusCode:function(Ue){var We;if(Ue)if(V)De.always(Ue[De.status]);else for(We in Ue)mt[We]=[mt[We],Ue[We]];return this},abort:function(Ue){var We=Ue||At;return F&&F.abort(We),Ct(0,We),this}};if(je.promise(De),te.url=((I||te.url||a.href)+"").replace(b,a.protocol+"//"),te.type=U.method||U.type||te.method||te.type,te.dataTypes=(te.dataType||"*").toLowerCase().match(l)||[""],te.crossDomain==null){H=p.createElement("a");try{H.href=te.url,H.href=H.href,te.crossDomain=T.protocol+"//"+T.host!=H.protocol+"//"+H.host}catch(Ue){te.crossDomain=!0}}if(te.data&&te.processData&&typeof te.data!="string"&&(te.data=n.param(te.data,te.traditional)),D(P,te,U,De),V)return De;ne=n.event&&te.global,ne&&n.active++===0&&n.event.trigger("ajaxStart"),te.type=te.type.toUpperCase(),te.hasContent=!y.test(te.type),z=te.url.replace(h,""),te.hasContent?te.data&&te.processData&&(te.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(te.data=te.data.replace(i,"+")):(ce=te.url.slice(z.length),te.data&&(te.processData||typeof te.data=="string")&&(z+=(m.test(z)?"&":"?")+te.data,delete te.data),te.cache===!1&&(z=z.replace(u,"$1"),ce=(m.test(z)?"&":"?")+"_="+d.guid+++ce),te.url=z+ce),te.ifModified&&(n.lastModified[z]&&De.setRequestHeader("If-Modified-Since",n.lastModified[z]),n.etag[z]&&De.setRequestHeader("If-None-Match",n.etag[z])),(te.data&&te.hasContent&&te.contentType!==!1||U.contentType)&&De.setRequestHeader("Content-Type",te.contentType),De.setRequestHeader("Accept",te.dataTypes[0]&&te.accepts[te.dataTypes[0]]?te.accepts[te.dataTypes[0]]+(te.dataTypes[0]!=="*"?", "+N+"; q=0.01":""):te.accepts["*"]);for(re in te.headers)De.setRequestHeader(re,te.headers[re]);if(te.beforeSend&&(te.beforeSend.call(ge,De,te)===!1||V))return De.abort();if(At="abort",it.add(te.complete),De.done(te.success),De.fail(te.error),F=D(E,te,U,De),!F)Ct(-1,"No Transport");else{if(De.readyState=1,ne&&Ce.trigger("ajaxSend",[De,te]),V)return De;te.async&&te.timeout>0&&(w=window.setTimeout(function(){De.abort("timeout")},te.timeout));try{V=!1,F.send(ut,Ct)}catch(Ue){if(V)throw Ue;Ct(-1,Ue)}}function Ct(Ue,We,Bt,Fe){var pe,Ne,Re,ie,ye,he=We;V||(V=!0,w&&window.clearTimeout(w),F=void 0,B=Fe||"",De.readyState=Ue>0?4:0,pe=Ue>=200&&Ue<300||Ue===304,Bt&&(ie=x(te,De,Bt)),!pe&&n.inArray("script",te.dataTypes)>-1&&n.inArray("json",te.dataTypes)<0&&(te.converters["text script"]=function(){}),ie=_(te,ie,De,pe),pe?(te.ifModified&&(ye=De.getResponseHeader("Last-Modified"),ye&&(n.lastModified[z]=ye),ye=De.getResponseHeader("etag"),ye&&(n.etag[z]=ye)),Ue===204||te.type==="HEAD"?he="nocontent":Ue===304?he="notmodified":(he=ie.state,Ne=ie.data,Re=ie.error,pe=!Re)):(Re=he,(Ue||!he)&&(he="error",Ue<0&&(Ue=0))),De.status=Ue,De.statusText=(We||he)+"",pe?je.resolveWith(ge,[Ne,he,De]):je.rejectWith(ge,[De,he,Re]),De.statusCode(mt),mt=void 0,ne&&Ce.trigger(pe?"ajaxSuccess":"ajaxError",[De,te,pe?Ne:Re]),it.fireWith(ge,[De,he]),ne&&(Ce.trigger("ajaxComplete",[De,te]),--n.active||n.event.trigger("ajaxStop")))}return De},getJSON:function(I,U,F){return n.get(I,U,F,"json")},getScript:function(I,U){return n.get(I,void 0,U,"script")}}),n.each(["get","post"],function(I,U){n[U]=function(F,z,B,$){return c(z)&&($=$||B,B=z,z=void 0),n.ajax(n.extend({url:F,type:U,dataType:$,data:z,success:B},n.isPlainObject(F)&&F))}}),n.ajaxPrefilter(function(I){var U;for(U in I.headers)U.toLowerCase()==="content-type"&&(I.contentType=I.headers[U]||"")}),n}.apply(v,g),o!==void 0&&(O.exports=o)},3632:(O,v,r)=>{var g,o;g=[r(2884),r(9003),r(655),r(5401),r(1450)],o=function(n,p,c,l){"use strict";var a=[],d=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var m=a.pop()||n.expando+"_"+c.guid++;return this[m]=!0,m}}),n.ajaxPrefilter("json jsonp",function(m,i,h){var u,f,S,y=m.jsonp!==!1&&(d.test(m.url)?"url":typeof m.data=="string"&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&d.test(m.data)&&"data");if(y||m.dataTypes[0]==="jsonp")return u=m.jsonpCallback=p(m.jsonpCallback)?m.jsonpCallback():m.jsonpCallback,y?m[y]=m[y].replace(d,"$1"+u):m.jsonp!==!1&&(m.url+=(l.test(m.url)?"&":"?")+m.jsonp+"="+u),m.converters["script json"]=function(){return S||n.error(u+" was not called"),S[0]},m.dataTypes[0]="json",f=window[u],window[u]=function(){S=arguments},h.always(function(){f===void 0?n(window).removeProp(u):window[u]=f,m[u]&&(m.jsonpCallback=i.jsonpCallback,a.push(u)),S&&p(f)&&f(S[0]),S=f=void 0}),"script"})}.apply(v,g),o!==void 0&&(O.exports=o)},4182:(O,v,r)=>{var g,o;g=[r(2884),r(3342),r(9003),r(5461),r(1450),r(7392),r(5599),r(6)],o=function(n,p,c){"use strict";n.fn.load=function(l,a,d){var m,i,h,u=this,f=l.indexOf(" ");return f>-1&&(m=p(l.slice(f)),l=l.slice(0,f)),c(a)?(d=a,a=void 0):a&&typeof a=="object"&&(i="POST"),u.length>0&&n.ajax({url:l,type:i||"GET",dataType:"html",data:a}).done(function(S){h=arguments,u.html(m?n("<div>").append(n.parseHTML(S)).find(m):S)}).always(d&&function(S,y){u.each(function(){d.apply(this,h||[S.responseText,y,S])})}),this}}.apply(v,g),o!==void 0&&(O.exports=o)},719:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(1450)],o=function(n,p){"use strict";n.ajaxPrefilter(function(c){c.crossDomain&&(c.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){return n.globalEval(c),c}}}),n.ajaxPrefilter("script",function(c){c.cache===void 0&&(c.cache=!1),c.crossDomain&&(c.type="GET")}),n.ajaxTransport("script",function(c){if(c.crossDomain||c.scriptAttrs){var l,a;return{send:function(d,m){l=n("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",a=function(i){l.remove(),a=null,i&&m(i.type==="error"?404:200,i.type)}),p.head.appendChild(l[0])},abort:function(){a&&a()}}}})}.apply(v,g),o!==void 0&&(O.exports=o)},2047:(O,v,r)=>{var g;g=function(){"use strict";return window.location}.call(v,r,v,O),g!==void 0&&(O.exports=g)},655:(O,v,r)=>{var g;g=function(){"use strict";return{guid:Date.now()}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},5401:(O,v,r)=>{var g;g=function(){"use strict";return/\?/}.call(v,r,v,O),g!==void 0&&(O.exports=g)},2371:(O,v,r)=>{var g,o;g=[r(2884),r(9343),r(1450)],o=function(n,p){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(a){}};var c={0:200,1223:204},l=n.ajaxSettings.xhr();p.cors=!!l&&"withCredentials"in l,p.ajax=l=!!l,n.ajaxTransport(function(a){var d,m;if(p.cors||l&&!a.crossDomain)return{send:function(i,h){var u,f=a.xhr();if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(u in a.xhrFields)f[u]=a.xhrFields[u];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),!a.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(u in i)f.setRequestHeader(u,i[u]);d=function(S){return function(){d&&(d=m=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,S==="abort"?f.abort():S==="error"?typeof f.status!="number"?h(0,"error"):h(f.status,f.statusText):h(c[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=d(),m=f.onerror=f.ontimeout=d("error"),f.onabort!==void 0?f.onabort=m:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){d&&m()})},d=d("abort");try{f.send(a.hasContent&&a.data||null)}catch(S){if(d)throw S}},abort:function(){d&&d()}}})}.apply(v,g),o!==void 0&&(O.exports=o)},4437:(O,v,r)=>{var g,o;g=[r(2884),r(8066),r(6034),r(8345),r(3383)],o=function(n){"use strict";return n}.apply(v,g),o!==void 0&&(O.exports=o)},8066:(O,v,r)=>{var g,o;g=[r(2884),r(8097),r(7031),r(3556),r(1143),r(6)],o=function(n,p,c,l,a){"use strict";var d,m=n.expr.attrHandle;n.fn.extend({attr:function(i,h){return p(this,n.attr,i,h,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,h,u){var f,S,y=i.nodeType;if(!(y===3||y===8||y===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,h,u);if((y!==1||!n.isXMLDoc(i))&&(S=n.attrHooks[h.toLowerCase()]||(n.expr.match.bool.test(h)?d:void 0)),u!==void 0){if(u===null){n.removeAttr(i,h);return}return S&&"set"in S&&(f=S.set(i,u,h))!==void 0?f:(i.setAttribute(h,u+""),u)}return S&&"get"in S&&(f=S.get(i,h))!==null?f:(f=n.find.attr(i,h),f==null?void 0:f)}},attrHooks:{type:{set:function(i,h){if(!l.radioValue&&h==="radio"&&c(i,"input")){var u=i.value;return i.setAttribute("type",h),u&&(i.value=u),h}}}},removeAttr:function(i,h){var u,f=0,S=h&&h.match(a);if(S&&i.nodeType===1)for(;u=S[f++];)i.removeAttribute(u)}}),d={set:function(i,h,u){return h===!1?n.removeAttr(i,u):i.setAttribute(u,u),u}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,h){var u=m[h]||n.find.attr;m[h]=function(f,S,y){var b,P,E=S.toLowerCase();return y||(P=m[E],m[E]=b,b=u(f,S,y)!=null?E:null,m[E]=P),b}})}.apply(v,g),o!==void 0&&(O.exports=o)},8345:(O,v,r)=>{var g,o;g=[r(2884),r(3342),r(9003),r(1143),r(698),r(6365)],o=function(n,p,c,l,a){"use strict";function d(i){return i.getAttribute&&i.getAttribute("class")||""}function m(i){return Array.isArray(i)?i:typeof i=="string"?i.match(l)||[]:[]}n.fn.extend({addClass:function(i){var h,u,f,S,y,b,P,E=0;if(c(i))return this.each(function(N){n(this).addClass(i.call(this,N,d(this)))});if(h=m(i),h.length){for(;u=this[E++];)if(S=d(u),f=u.nodeType===1&&" "+p(S)+" ",f){for(b=0;y=h[b++];)f.indexOf(" "+y+" ")<0&&(f+=y+" ");P=p(f),S!==P&&u.setAttribute("class",P)}}return this},removeClass:function(i){var h,u,f,S,y,b,P,E=0;if(c(i))return this.each(function(N){n(this).removeClass(i.call(this,N,d(this)))});if(!arguments.length)return this.attr("class","");if(h=m(i),h.length){for(;u=this[E++];)if(S=d(u),f=u.nodeType===1&&" "+p(S)+" ",f){for(b=0;y=h[b++];)for(;f.indexOf(" "+y+" ")>-1;)f=f.replace(" "+y+" "," ");P=p(f),S!==P&&u.setAttribute("class",P)}}return this},toggleClass:function(i,h){var u=typeof i,f=u==="string"||Array.isArray(i);return typeof h=="boolean"&&f?h?this.addClass(i):this.removeClass(i):c(i)?this.each(function(S){n(this).toggleClass(i.call(this,S,d(this),h),h)}):this.each(function(){var S,y,b,P;if(f)for(y=0,b=n(this),P=m(i);S=P[y++];)b.hasClass(S)?b.removeClass(S):b.addClass(S);else(i===void 0||u==="boolean")&&(S=d(this),S&&a.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||i===!1?"":a.get(this,"__className__")||""))})},hasClass:function(i){var h,u,f=0;for(h=" "+i+" ";u=this[f++];)if(u.nodeType===1&&(" "+p(d(u))+" ").indexOf(h)>-1)return!0;return!1}})}.apply(v,g),o!==void 0&&(O.exports=o)},6034:(O,v,r)=>{var g,o;g=[r(2884),r(8097),r(3556),r(6)],o=function(n,p,c){"use strict";var l=/^(?:input|select|textarea|button)$/i,a=/^(?:a|area)$/i;n.fn.extend({prop:function(d,m){return p(this,n.prop,d,m,arguments.length>1)},removeProp:function(d){return this.each(function(){delete this[n.propFix[d]||d]})}}),n.extend({prop:function(d,m,i){var h,u,f=d.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!n.isXMLDoc(d))&&(m=n.propFix[m]||m,u=n.propHooks[m]),i!==void 0?u&&"set"in u&&(h=u.set(d,i,m))!==void 0?h:d[m]=i:u&&"get"in u&&(h=u.get(d,m))!==null?h:d[m]},propHooks:{tabIndex:{get:function(d){var m=n.find.attr(d,"tabindex");return m?parseInt(m,10):l.test(d.nodeName)||a.test(d.nodeName)&&d.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),c.optSelected||(n.propHooks.selected={get:function(d){var m=d.parentNode;return m&&m.parentNode&&m.parentNode.selectedIndex,null},set:function(d){var m=d.parentNode;m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(v,g),o!==void 0&&(O.exports=o)},3556:(O,v,r)=>{var g,o;g=[r(7749),r(9343)],o=function(n,p){"use strict";return function(){var c=n.createElement("input"),l=n.createElement("select"),a=l.appendChild(n.createElement("option"));c.type="checkbox",p.checkOn=c.value!=="",p.optSelected=a.selected,c=n.createElement("input"),c.value="t",c.type="radio",p.radioValue=c.value==="t"}(),p}.apply(v,g),o!==void 0&&(O.exports=o)},3383:(O,v,r)=>{var g,o;g=[r(2884),r(3342),r(3556),r(7031),r(9003),r(6365)],o=function(n,p,c,l,a){"use strict";var d=/\r/g;n.fn.extend({val:function(m){var i,h,u,f=this[0];return arguments.length?(u=a(m),this.each(function(S){var y;this.nodeType===1&&(u?y=m.call(this,S,n(this).val()):y=m,y==null?y="":typeof y=="number"?y+="":Array.isArray(y)&&(y=n.map(y,function(b){return b==null?"":b+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,y,"value")===void 0)&&(this.value=y))})):f?(i=n.valHooks[f.type]||n.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(h=i.get(f,"value"))!==void 0?h:(h=f.value,typeof h=="string"?h.replace(d,""):h==null?"":h)):void 0}}),n.extend({valHooks:{option:{get:function(m){var i=n.find.attr(m,"value");return i!=null?i:p(n.text(m))}},select:{get:function(m){var i,h,u,f=m.options,S=m.selectedIndex,y=m.type==="select-one",b=y?null:[],P=y?S+1:f.length;for(S<0?u=P:u=y?S:0;u<P;u++)if(h=f[u],(h.selected||u===S)&&!h.disabled&&(!h.parentNode.disabled||!l(h.parentNode,"optgroup"))){if(i=n(h).val(),y)return i;b.push(i)}return b},set:function(m,i){for(var h,u,f=m.options,S=n.makeArray(i),y=f.length;y--;)u=f[y],(u.selected=n.inArray(n.valHooks.option.get(u),S)>-1)&&(h=!0);return h||(m.selectedIndex=-1),S}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(m,i){if(Array.isArray(i))return m.checked=n.inArray(n(m).val(),i)>-1}},c.checkOn||(n.valHooks[this].get=function(m){return m.getAttribute("value")===null?"on":m.value})})}.apply(v,g),o!==void 0&&(O.exports=o)},7617:(O,v,r)=>{var g,o;g=[r(2884),r(1401),r(9003),r(1143)],o=function(n,p,c,l){"use strict";function a(d){var m={};return n.each(d.match(l)||[],function(i,h){m[h]=!0}),m}return n.Callbacks=function(d){d=typeof d=="string"?a(d):n.extend({},d);var m,i,h,u,f=[],S=[],y=-1,b=function(){for(u=u||d.once,h=m=!0;S.length;y=-1)for(i=S.shift();++y<f.length;)f[y].apply(i[0],i[1])===!1&&d.stopOnFalse&&(y=f.length,i=!1);d.memory||(i=!1),m=!1,u&&(i?f=[]:f="")},P={add:function(){return f&&(i&&!m&&(y=f.length-1,S.push(i)),function E(N){n.each(N,function(T,A){c(A)?(!d.unique||!P.has(A))&&f.push(A):A&&A.length&&p(A)!=="string"&&E(A)})}(arguments),i&&!m&&b()),this},remove:function(){return n.each(arguments,function(E,N){for(var T;(T=n.inArray(N,f,T))>-1;)f.splice(T,1),T<=y&&y--}),this},has:function(E){return E?n.inArray(E,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=S=[],f=i="",this},disabled:function(){return!f},lock:function(){return u=S=[],!i&&!m&&(f=i=""),this},locked:function(){return!!u},fireWith:function(E,N){return u||(N=N||[],N=[E,N.slice?N.slice():N],S.push(N),m||b()),this},fire:function(){return P.fireWith(this,arguments),this},fired:function(){return!!h}};return P},n}.apply(v,g),o!==void 0&&(O.exports=o)},2884:(O,v,r)=>{var g,o;g=[r(2305),r(2690),r(7502),r(1429),r(5896),r(706),r(8978),r(9412),r(939),r(7913),r(789),r(9343),r(9003),r(9011),r(4835),r(1401)],o=function(n,p,c,l,a,d,m,i,h,u,f,S,y,b,P,E){"use strict";var N="3.6.0",T=function(D,M){return new T.fn.init(D,M)};T.fn=T.prototype={jquery:N,constructor:T,length:0,toArray:function(){return c.call(this)},get:function(D){return D==null?c.call(this):D<0?this[D+this.length]:this[D]},pushStack:function(D){var M=T.merge(this.constructor(),D);return M.prevObject=this,M},each:function(D){return T.each(this,D)},map:function(D){return this.pushStack(T.map(this,function(M,x){return D.call(M,x,M)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(D,M){return(M+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(D,M){return M%2}))},eq:function(D){var M=this.length,x=+D+(D<0?M:0);return this.pushStack(x>=0&&x<M?[this[x]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var D,M,x,_,I,U,F=arguments[0]||{},z=1,B=arguments.length,$=!1;for(typeof F=="boolean"&&($=F,F=arguments[z]||{},z++),typeof F!="object"&&!y(F)&&(F={}),z===B&&(F=this,z--);z<B;z++)if((D=arguments[z])!=null)for(M in D)_=D[M],!(M==="__proto__"||F===_)&&($&&_&&(T.isPlainObject(_)||(I=Array.isArray(_)))?(x=F[M],I&&!Array.isArray(x)?U=[]:!I&&!T.isPlainObject(x)?U={}:U=x,I=!1,F[M]=T.extend($,U,_)):_!==void 0&&(F[M]=_));return F},T.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(D){throw new Error(D)},noop:function(){},isPlainObject:function(D){var M,x;return!D||i.call(D)!=="[object Object]"?!1:(M=p(D),M?(x=h.call(M,"constructor")&&M.constructor,typeof x=="function"&&u.call(x)===f):!0)},isEmptyObject:function(D){var M;for(M in D)return!1;return!0},globalEval:function(D,M,x){P(D,{nonce:M&&M.nonce},x)},each:function(D,M){var x,_=0;if(A(D))for(x=D.length;_<x&&M.call(D[_],_,D[_])!==!1;_++);else for(_ in D)if(M.call(D[_],_,D[_])===!1)break;return D},makeArray:function(D,M){var x=M||[];return D!=null&&(A(Object(D))?T.merge(x,typeof D=="string"?[D]:D):a.call(x,D)),x},inArray:function(D,M,x){return M==null?-1:d.call(M,D,x)},merge:function(D,M){for(var x=+M.length,_=0,I=D.length;_<x;_++)D[I++]=M[_];return D.length=I,D},grep:function(D,M,x){for(var _,I=[],U=0,F=D.length,z=!x;U<F;U++)_=!M(D[U],U),_!==z&&I.push(D[U]);return I},map:function(D,M,x){var _,I,U=0,F=[];if(A(D))for(_=D.length;U<_;U++)I=M(D[U],U,x),I!=null&&F.push(I);else for(U in D)I=M(D[U],U,x),I!=null&&F.push(I);return l(F)},guid:1,support:S}),typeof Symbol=="function"&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(D,M){m["[object "+M+"]"]=M.toLowerCase()});function A(D){var M=!!D&&"length"in D&&D.length,x=E(D);return y(D)||b(D)?!1:x==="array"||M===0||typeof M=="number"&&M>0&&M-1 in D}return T}.apply(v,g),o!==void 0&&(O.exports=o)},4835:(O,v,r)=>{var g,o;g=[r(7749)],o=function(n){"use strict";var p={type:!0,src:!0,nonce:!0,noModule:!0};function c(l,a,d){d=d||n;var m,i,h=d.createElement("script");if(h.text=l,a)for(m in p)i=a[m]||a.getAttribute&&a.getAttribute(m),i&&h.setAttribute(m,i);d.head.appendChild(h).parentNode.removeChild(h)}return c}.apply(v,g),o!==void 0&&(O.exports=o)},8097:(O,v,r)=>{var g,o;g=[r(2884),r(1401),r(9003)],o=function(n,p,c){"use strict";var l=function(a,d,m,i,h,u,f){var S=0,y=a.length,b=m==null;if(p(m)==="object"){h=!0;for(S in m)l(a,d,S,m[S],!0,u,f)}else if(i!==void 0&&(h=!0,c(i)||(f=!0),b&&(f?(d.call(a,i),d=null):(b=d,d=function(P,E,N){return b.call(n(P),N)})),d))for(;S<y;S++)d(a[S],m,f?i:i.call(a[S],S,d(a[S],m)));return h?a:b?d.call(a):y?d(a[0],m):u};return l}.apply(v,g),o!==void 0&&(O.exports=o)},7232:(O,v)=>{var r,g;r=[],g=function(){"use strict";var o=/^-ms-/,n=/-([a-z])/g;function p(l,a){return a.toUpperCase()}function c(l){return l.replace(o,"ms-").replace(n,p)}return c}.apply(v,r),g!==void 0&&(O.exports=g)},6365:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(9003),r(3309),r(6036)],o=function(n,p,c,l){"use strict";var a,d=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,m=n.fn.init=function(i,h,u){var f,S;if(!i)return this;if(u=u||a,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=d.exec(i),f&&(f[1]||!h))if(f[1]){if(h=h instanceof n?h[0]:h,n.merge(this,n.parseHTML(f[1],h&&h.nodeType?h.ownerDocument||h:p,!0)),l.test(f[1])&&n.isPlainObject(h))for(f in h)c(this[f])?this[f](h[f]):this.attr(f,h[f]);return this}else return S=p.getElementById(f[2]),S&&(this[0]=S,this.length=1),this;else return!h||h.jquery?(h||u).find(i):this.constructor(h).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(c(i))return u.ready!==void 0?u.ready(i):i(n)}return n.makeArray(i,this)};return m.prototype=n.fn,a=n(p),m}.apply(v,g),o!==void 0&&(O.exports=o)},1518:(O,v,r)=>{var g,o;g=[r(2884),r(893),r(6)],o=function(n,p){"use strict";var c=function(a){return n.contains(a.ownerDocument,a)},l={composed:!0};return p.getRootNode&&(c=function(a){return n.contains(a.ownerDocument,a)||a.getRootNode(l)===a.ownerDocument}),c}.apply(v,g),o!==void 0&&(O.exports=o)},7031:(O,v,r)=>{var g;g=function(){"use strict";function o(n,p){return n.nodeName&&n.nodeName.toLowerCase()===p.toLowerCase()}return o}.call(v,r,v,O),g!==void 0&&(O.exports=g)},5461:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(3309),r(6753),r(200)],o=function(n,p,c,l,a){"use strict";return n.parseHTML=function(d,m,i){if(typeof d!="string")return[];typeof m=="boolean"&&(i=m,m=!1);var h,u,f;return m||(a.createHTMLDocument?(m=p.implementation.createHTMLDocument(""),h=m.createElement("base"),h.href=p.location.href,m.head.appendChild(h)):m=p),u=c.exec(d),f=!i&&[],u?[m.createElement(u[1])]:(u=l([d],m,f),f&&f.length&&n(f).remove(),n.merge([],u.childNodes))},n.parseHTML}.apply(v,g),o!==void 0&&(O.exports=o)},6073:(O,v,r)=>{var g,o;g=[r(2884)],o=function(n){"use strict";return n.parseXML=function(p){var c,l;if(!p||typeof p!="string")return null;try{c=new window.DOMParser().parseFromString(p,"text/xml")}catch(a){}return l=c&&c.getElementsByTagName("parsererror")[0],(!c||l)&&n.error("Invalid XML: "+(l?n.map(l.childNodes,function(a){return a.textContent}).join(`
`):p)),c},n.parseXML}.apply(v,g),o!==void 0&&(O.exports=o)},7644:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(2003),r(184)],o=function(n,p){"use strict";var c=n.Deferred();n.fn.ready=function(a){return c.then(a).catch(function(d){n.readyException(d)}),this},n.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(a!==!0&&--n.readyWait>0)&&c.resolveWith(p,[n]))}}),n.ready.then=c.then;function l(){p.removeEventListener("DOMContentLoaded",l),window.removeEventListener("load",l),n.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?window.setTimeout(n.ready):(p.addEventListener("DOMContentLoaded",l),window.addEventListener("load",l))}.apply(v,g),o!==void 0&&(O.exports=o)},2003:(O,v,r)=>{var g,o;g=[r(2884)],o=function(n){"use strict";n.readyException=function(p){window.setTimeout(function(){throw p})}}.apply(v,g),o!==void 0&&(O.exports=o)},3342:(O,v,r)=>{var g,o;g=[r(1143)],o=function(n){"use strict";function p(c){var l=c.match(n)||[];return l.join(" ")}return p}.apply(v,g),o!==void 0&&(O.exports=o)},200:(O,v,r)=>{var g,o;g=[r(7749),r(9343)],o=function(n,p){"use strict";return p.createHTMLDocument=function(){var c=n.implementation.createHTMLDocument("").body;return c.innerHTML="<form></form><form></form>",c.childNodes.length===2}(),p}.apply(v,g),o!==void 0&&(O.exports=o)},1401:(O,v,r)=>{var g,o;g=[r(8978),r(9412)],o=function(n,p){"use strict";function c(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?n[p.call(l)]||"object":typeof l}return c}.apply(v,g),o!==void 0&&(O.exports=o)},3309:(O,v,r)=>{var g;g=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(v,r,v,O),g!==void 0&&(O.exports=g)},7154:(O,v,r)=>{var g,o;g=[r(2884),r(8097),r(7232),r(7031),r(1286),r(3045),r(29),r(1089),r(6439),r(4015),r(320),r(1353),r(1567),r(2137),r(6365),r(7644),r(6)],o=function(n,p,c,l,a,d,m,i,h,u,f,S,y,b){"use strict";var P=/^(none|table(?!-c[ea]).+)/,E=/^--/,N={position:"absolute",visibility:"hidden",display:"block"},T={letterSpacing:"0",fontWeight:"400"};function A(x,_,I){var U=a.exec(_);return U?Math.max(0,U[2]-(I||0))+(U[3]||"px"):_}function D(x,_,I,U,F,z){var B=_==="width"?1:0,$=0,w=0;if(I===(U?"border":"content"))return 0;for(;B<4;B+=2)I==="margin"&&(w+=n.css(x,I+m[B],!0,F)),U?(I==="content"&&(w-=n.css(x,"padding"+m[B],!0,F)),I!=="margin"&&(w-=n.css(x,"border"+m[B]+"Width",!0,F))):(w+=n.css(x,"padding"+m[B],!0,F),I!=="padding"?w+=n.css(x,"border"+m[B]+"Width",!0,F):$+=n.css(x,"border"+m[B]+"Width",!0,F));return!U&&z>=0&&(w+=Math.max(0,Math.ceil(x["offset"+_[0].toUpperCase()+_.slice(1)]-z-w-$-.5))||0),w}function M(x,_,I){var U=i(x),F=!y.boxSizingReliable()||I,z=F&&n.css(x,"boxSizing",!1,U)==="border-box",B=z,$=u(x,_,U),w="offset"+_[0].toUpperCase()+_.slice(1);if(d.test($)){if(!I)return $;$="auto"}return(!y.boxSizingReliable()&&z||!y.reliableTrDimensions()&&l(x,"tr")||$==="auto"||!parseFloat($)&&n.css(x,"display",!1,U)==="inline")&&x.getClientRects().length&&(z=n.css(x,"boxSizing",!1,U)==="border-box",B=w in x,B&&($=x[w])),$=parseFloat($)||0,$+D(x,_,I||(z?"border":"content"),B,U,$)+"px"}return n.extend({cssHooks:{opacity:{get:function(x,_){if(_){var I=u(x,"opacity");return I===""?"1":I}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(x,_,I,U){if(!(!x||x.nodeType===3||x.nodeType===8||!x.style)){var F,z,B,$=c(_),w=E.test(_),H=x.style;if(w||(_=b($)),B=n.cssHooks[_]||n.cssHooks[$],I!==void 0){if(z=typeof I,z==="string"&&(F=a.exec(I))&&F[1]&&(I=f(x,_,F),z="number"),I==null||I!==I)return;z==="number"&&!w&&(I+=F&&F[3]||(n.cssNumber[$]?"":"px")),!y.clearCloneStyle&&I===""&&_.indexOf("background")===0&&(H[_]="inherit"),(!B||!("set"in B)||(I=B.set(x,I,U))!==void 0)&&(w?H.setProperty(_,I):H[_]=I)}else return B&&"get"in B&&(F=B.get(x,!1,U))!==void 0?F:H[_]}},css:function(x,_,I,U){var F,z,B,$=c(_),w=E.test(_);return w||(_=b($)),B=n.cssHooks[_]||n.cssHooks[$],B&&"get"in B&&(F=B.get(x,!0,I)),F===void 0&&(F=u(x,_,U)),F==="normal"&&_ in T&&(F=T[_]),I===""||I?(z=parseFloat(F),I===!0||isFinite(z)?z||0:F):F}}),n.each(["height","width"],function(x,_){n.cssHooks[_]={get:function(I,U,F){if(U)return P.test(n.css(I,"display"))&&(!I.getClientRects().length||!I.getBoundingClientRect().width)?h(I,N,function(){return M(I,_,F)}):M(I,_,F)},set:function(I,U,F){var z,B=i(I),$=!y.scrollboxSize()&&B.position==="absolute",w=$||F,H=w&&n.css(I,"boxSizing",!1,B)==="border-box",V=F?D(I,_,F,H,B):0;return H&&$&&(V-=Math.ceil(I["offset"+_[0].toUpperCase()+_.slice(1)]-parseFloat(B[_])-D(I,_,"border",!1,B)-.5)),V&&(z=a.exec(U))&&(z[3]||"px")!=="px"&&(I.style[_]=U,U=n.css(I,_)),A(I,U,V)}}}),n.cssHooks.marginLeft=S(y.reliableMarginLeft,function(x,_){if(_)return(parseFloat(u(x,"marginLeft"))||x.getBoundingClientRect().left-h(x,{marginLeft:0},function(){return x.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(x,_){n.cssHooks[x+_]={expand:function(I){for(var U=0,F={},z=typeof I=="string"?I.split(" "):[I];U<4;U++)F[x+m[U]+_]=z[U]||z[U-2]||z[0];return F}},x!=="margin"&&(n.cssHooks[x+_].set=A)}),n.fn.extend({css:function(x,_){return p(this,function(I,U,F){var z,B,$={},w=0;if(Array.isArray(U)){for(z=i(I),B=U.length;w<B;w++)$[U[w]]=n.css(I,U[w],!1,z);return $}return F!==void 0?n.style(I,U,F):n.css(I,U)},x,_,arguments.length>1)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},1353:(O,v,r)=>{var g;g=function(){"use strict";function o(n,p){return{get:function(){if(n()){delete this.get;return}return(this.get=p).apply(this,arguments)}}}return o}.call(v,r,v,O),g!==void 0&&(O.exports=g)},320:(O,v,r)=>{var g,o;g=[r(2884),r(1286)],o=function(n,p){"use strict";function c(l,a,d,m){var i,h,u=20,f=m?function(){return m.cur()}:function(){return n.css(l,a,"")},S=f(),y=d&&d[3]||(n.cssNumber[a]?"":"px"),b=l.nodeType&&(n.cssNumber[a]||y!=="px"&&+S)&&p.exec(n.css(l,a));if(b&&b[3]!==y){for(S=S/2,y=y||b[3],b=+S||1;u--;)n.style(l,a,b+y),(1-h)*(1-(h=f()/S||.5))<=0&&(u=0),b=b/h;b=b*2,n.style(l,a,b+y),d=d||[]}return d&&(b=+b||+S||0,i=d[1]?b+(d[1]+1)*d[2]:+d[2],m&&(m.unit=y,m.start=b,m.end=i)),i}return c}.apply(v,g),o!==void 0&&(O.exports=o)},4015:(O,v,r)=>{var g,o;g=[r(2884),r(1518),r(5511),r(3045),r(1089),r(1567)],o=function(n,p,c,l,a,d){"use strict";function m(i,h,u){var f,S,y,b,P=i.style;return u=u||a(i),u&&(b=u.getPropertyValue(h)||u[h],b===""&&!p(i)&&(b=n.style(i,h)),!d.pixelBoxStyles()&&l.test(b)&&c.test(h)&&(f=P.width,S=P.minWidth,y=P.maxWidth,P.minWidth=P.maxWidth=P.width=b,b=u.width,P.width=f,P.minWidth=S,P.maxWidth=y)),b!==void 0?b+"":b}return m}.apply(v,g),o!==void 0&&(O.exports=o)},2137:(O,v,r)=>{var g,o;g=[r(7749),r(2884)],o=function(n,p){"use strict";var c=["Webkit","Moz","ms"],l=n.createElement("div").style,a={};function d(i){for(var h=i[0].toUpperCase()+i.slice(1),u=c.length;u--;)if(i=c[u]+h,i in l)return i}function m(i){var h=p.cssProps[i]||a[i];return h||(i in l?i:a[i]=d(i)||i)}return m}.apply(v,g),o!==void 0&&(O.exports=o)},8326:(O,v,r)=>{var g,o;g=[r(2884),r(6)],o=function(n){"use strict";n.expr.pseudos.hidden=function(p){return!n.expr.pseudos.visible(p)},n.expr.pseudos.visible=function(p){return!!(p.offsetWidth||p.offsetHeight||p.getClientRects().length)}}.apply(v,g),o!==void 0&&(O.exports=o)},470:(O,v,r)=>{var g,o;g=[r(2884),r(698),r(3120)],o=function(n,p,c){"use strict";var l={};function a(m){var i,h=m.ownerDocument,u=m.nodeName,f=l[u];return f||(i=h.body.appendChild(h.createElement(u)),f=n.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),l[u]=f,f)}function d(m,i){for(var h,u,f=[],S=0,y=m.length;S<y;S++)u=m[S],u.style&&(h=u.style.display,i?(h==="none"&&(f[S]=p.get(u,"display")||null,f[S]||(u.style.display="")),u.style.display===""&&c(u)&&(f[S]=a(u))):h!=="none"&&(f[S]="none",p.set(u,"display",h)));for(S=0;S<y;S++)f[S]!=null&&(m[S].style.display=f[S]);return m}return n.fn.extend({show:function(){return d(this,!0)},hide:function(){return d(this)},toggle:function(m){return typeof m=="boolean"?m?this.show():this.hide():this.each(function(){c(this)?n(this).show():n(this).hide()})}}),d}.apply(v,g),o!==void 0&&(O.exports=o)},1567:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(893),r(9343)],o=function(n,p,c,l){"use strict";return function(){function a(){if(!!b){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",c.appendChild(y).appendChild(b);var P=window.getComputedStyle(b);m=P.top!=="1%",S=d(P.marginLeft)===12,b.style.right="60%",u=d(P.right)===36,i=d(P.width)===36,b.style.position="absolute",h=d(b.offsetWidth/3)===12,c.removeChild(y),b=null}}function d(P){return Math.round(parseFloat(P))}var m,i,h,u,f,S,y=p.createElement("div"),b=p.createElement("div");!b.style||(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle=b.style.backgroundClip==="content-box",n.extend(l,{boxSizingReliable:function(){return a(),i},pixelBoxStyles:function(){return a(),u},pixelPosition:function(){return a(),m},reliableMarginLeft:function(){return a(),S},scrollboxSize:function(){return a(),h},reliableTrDimensions:function(){var P,E,N,T;return f==null&&(P=p.createElement("table"),E=p.createElement("tr"),N=p.createElement("div"),P.style.cssText="position:absolute;left:-11111px;border-collapse:separate",E.style.cssText="border:1px solid",E.style.height="1px",N.style.height="9px",N.style.display="block",c.appendChild(P).appendChild(E).appendChild(N),T=window.getComputedStyle(E),f=parseInt(T.height,10)+parseInt(T.borderTopWidth,10)+parseInt(T.borderBottomWidth,10)===E.offsetHeight,c.removeChild(P)),f}}))}(),l}.apply(v,g),o!==void 0&&(O.exports=o)},29:(O,v,r)=>{var g;g=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(v,r,v,O),g!==void 0&&(O.exports=g)},1089:(O,v,r)=>{var g;g=function(){"use strict";return function(o){var n=o.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(o)}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},3120:(O,v,r)=>{var g,o;g=[r(2884),r(1518)],o=function(n,p){"use strict";return function(c,l){return c=l||c,c.style.display==="none"||c.style.display===""&&p(c)&&n.css(c,"display")==="none"}}.apply(v,g),o!==void 0&&(O.exports=o)},5511:(O,v,r)=>{var g,o;g=[r(29)],o=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(v,g),o!==void 0&&(O.exports=o)},3045:(O,v,r)=>{var g,o;g=[r(5399)],o=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(v,g),o!==void 0&&(O.exports=o)},6439:(O,v,r)=>{var g;g=function(){"use strict";return function(o,n,p){var c,l,a={};for(l in n)a[l]=o.style[l],o.style[l]=n[l];c=p.call(o);for(l in n)o.style[l]=a[l];return c}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},8416:(O,v,r)=>{var g,o;g=[r(2884),r(8097),r(7232),r(698),r(640)],o=function(n,p,c,l,a){"use strict";var d=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,m=/[A-Z]/g;function i(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:d.test(u)?JSON.parse(u):u}function h(u,f,S){var y;if(S===void 0&&u.nodeType===1)if(y="data-"+f.replace(m,"-$&").toLowerCase(),S=u.getAttribute(y),typeof S=="string"){try{S=i(S)}catch(b){}a.set(u,f,S)}else S=void 0;return S}return n.extend({hasData:function(u){return a.hasData(u)||l.hasData(u)},data:function(u,f,S){return a.access(u,f,S)},removeData:function(u,f){a.remove(u,f)},_data:function(u,f,S){return l.access(u,f,S)},_removeData:function(u,f){l.remove(u,f)}}),n.fn.extend({data:function(u,f){var S,y,b,P=this[0],E=P&&P.attributes;if(u===void 0){if(this.length&&(b=a.get(P),P.nodeType===1&&!l.get(P,"hasDataAttrs"))){for(S=E.length;S--;)E[S]&&(y=E[S].name,y.indexOf("data-")===0&&(y=c(y.slice(5)),h(P,y,b[y])));l.set(P,"hasDataAttrs",!0)}return b}return typeof u=="object"?this.each(function(){a.set(this,u)}):p(this,function(N){var T;if(P&&N===void 0)return T=a.get(P,u),T!==void 0||(T=h(P,u),T!==void 0)?T:void 0;this.each(function(){a.set(this,u,N)})},null,f,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){a.remove(this,u)})}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},1523:(O,v,r)=>{var g,o;g=[r(2884),r(7232),r(1143),r(7098)],o=function(n,p,c,l){"use strict";function a(){this.expando=n.expando+a.uid++}return a.uid=1,a.prototype={cache:function(d){var m=d[this.expando];return m||(m={},l(d)&&(d.nodeType?d[this.expando]=m:Object.defineProperty(d,this.expando,{value:m,configurable:!0}))),m},set:function(d,m,i){var h,u=this.cache(d);if(typeof m=="string")u[p(m)]=i;else for(h in m)u[p(h)]=m[h];return u},get:function(d,m){return m===void 0?this.cache(d):d[this.expando]&&d[this.expando][p(m)]},access:function(d,m,i){return m===void 0||m&&typeof m=="string"&&i===void 0?this.get(d,m):(this.set(d,m,i),i!==void 0?i:m)},remove:function(d,m){var i,h=d[this.expando];if(h!==void 0){if(m!==void 0)for(Array.isArray(m)?m=m.map(p):(m=p(m),m=m in h?[m]:m.match(c)||[]),i=m.length;i--;)delete h[m[i]];(m===void 0||n.isEmptyObject(h))&&(d.nodeType?d[this.expando]=void 0:delete d[this.expando])}},hasData:function(d){var m=d[this.expando];return m!==void 0&&!n.isEmptyObject(m)}},a}.apply(v,g),o!==void 0&&(O.exports=o)},7098:(O,v,r)=>{var g;g=function(){"use strict";return function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},698:(O,v,r)=>{var g,o;g=[r(1523)],o=function(n){"use strict";return new n}.apply(v,g),o!==void 0&&(O.exports=o)},640:(O,v,r)=>{var g,o;g=[r(1523)],o=function(n){"use strict";return new n}.apply(v,g),o!==void 0&&(O.exports=o)},184:(O,v,r)=>{var g,o;g=[r(2884),r(9003),r(7502),r(7617)],o=function(n,p,c){"use strict";function l(m){return m}function a(m){throw m}function d(m,i,h,u){var f;try{m&&p(f=m.promise)?f.call(m).done(i).fail(h):m&&p(f=m.then)?f.call(m,i,h):i.apply(void 0,[m].slice(u))}catch(S){h.apply(void 0,[S])}}return n.extend({Deferred:function(m){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],h="pending",u={state:function(){return h},always:function(){return f.done(arguments).fail(arguments),this},catch:function(S){return u.then(null,S)},pipe:function(){var S=arguments;return n.Deferred(function(y){n.each(i,function(b,P){var E=p(S[P[4]])&&S[P[4]];f[P[1]](function(){var N=E&&E.apply(this,arguments);N&&p(N.promise)?N.promise().progress(y.notify).done(y.resolve).fail(y.reject):y[P[0]+"With"](this,E?[N]:arguments)})}),S=null}).promise()},then:function(S,y,b){var P=0;function E(N,T,A,D){return function(){var M=this,x=arguments,_=function(){var U,F;if(!(N<P)){if(U=A.apply(M,x),U===T.promise())throw new TypeError("Thenable self-resolution");F=U&&(typeof U=="object"||typeof U=="function")&&U.then,p(F)?D?F.call(U,E(P,T,l,D),E(P,T,a,D)):(P++,F.call(U,E(P,T,l,D),E(P,T,a,D),E(P,T,l,T.notifyWith))):(A!==l&&(M=void 0,x=[U]),(D||T.resolveWith)(M,x))}},I=D?_:function(){try{_()}catch(U){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(U,I.stackTrace),N+1>=P&&(A!==a&&(M=void 0,x=[U]),T.rejectWith(M,x))}};N?I():(n.Deferred.getStackHook&&(I.stackTrace=n.Deferred.getStackHook()),window.setTimeout(I))}}return n.Deferred(function(N){i[0][3].add(E(0,N,p(b)?b:l,N.notifyWith)),i[1][3].add(E(0,N,p(S)?S:l)),i[2][3].add(E(0,N,p(y)?y:a))}).promise()},promise:function(S){return S!=null?n.extend(S,u):u}},f={};return n.each(i,function(S,y){var b=y[2],P=y[5];u[y[1]]=b.add,P&&b.add(function(){h=P},i[3-S][2].disable,i[3-S][3].disable,i[0][2].lock,i[0][3].lock),b.add(y[3].fire),f[y[0]]=function(){return f[y[0]+"With"](this===f?void 0:this,arguments),this},f[y[0]+"With"]=b.fireWith}),u.promise(f),m&&m.call(f,f),f},when:function(m){var i=arguments.length,h=i,u=Array(h),f=c.call(arguments),S=n.Deferred(),y=function(b){return function(P){u[b]=this,f[b]=arguments.length>1?c.call(arguments):P,--i||S.resolveWith(u,f)}};if(i<=1&&(d(m,S.done(y(h)).resolve,S.reject,!i),S.state()==="pending"||p(f[h]&&f[h].then)))return S.then();for(;h--;)d(f[h],y(h),S.reject);return S.promise()}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},3615:(O,v,r)=>{var g,o;g=[r(2884),r(184)],o=function(n){"use strict";var p=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(c,l){window.console&&window.console.warn&&c&&p.test(c.name)&&window.console.warn("jQuery.Deferred exception: "+c.message,c.stack,l)}}.apply(v,g),o!==void 0&&(O.exports=o)},1900:(O,v,r)=>{var g,o;g=[r(2884),r(7031),r(7232),r(1401),r(9003),r(9011),r(7502),r(336),r(4333)],o=function(n,p,c,l,a,d,m){"use strict";var i=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;n.proxy=function(h,u){var f,S,y;if(typeof u=="string"&&(f=h[u],u=h,h=f),!!a(h))return S=m.call(arguments,2),y=function(){return h.apply(u||this,S.concat(m.call(arguments)))},y.guid=h.guid=h.guid||n.guid++,y},n.holdReady=function(h){h?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=p,n.isFunction=a,n.isWindow=d,n.camelCase=c,n.type=l,n.now=Date.now,n.isNumeric=function(h){var u=n.type(h);return(u==="number"||u==="string")&&!isNaN(h-parseFloat(h))},n.trim=function(h){return h==null?"":(h+"").replace(i,"")}}.apply(v,g),o!==void 0&&(O.exports=o)},336:(O,v,r)=>{var g,o;g=[r(2884),r(1450),r(5957)],o=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(p,c){n.fn[c]=function(l){return this.on(c,l)}})}.apply(v,g),o!==void 0&&(O.exports=o)},4333:(O,v,r)=>{var g,o;g=[r(2884),r(5957),r(2075)],o=function(n){"use strict";n.fn.extend({bind:function(p,c,l){return this.on(p,null,c,l)},unbind:function(p,c){return this.off(p,null,c)},delegate:function(p,c,l,a){return this.on(c,p,l,a)},undelegate:function(p,c,l){return arguments.length===1?this.off(p,"**"):this.off(c,p||"**",l)},hover:function(p,c){return this.mouseenter(p).mouseleave(c||p)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(p,c){n.fn[c]=function(l,a){return arguments.length>0?this.on(c,null,l,a):this.trigger(c)}})}.apply(v,g),o!==void 0&&(O.exports=o)},3514:(O,v,r)=>{var g,o;g=[r(2884),r(8097),r(9011),r(7154)],o=function(n,p,c){"use strict";return n.each({Height:"height",Width:"width"},function(l,a){n.each({padding:"inner"+l,content:a,"":"outer"+l},function(d,m){n.fn[m]=function(i,h){var u=arguments.length&&(d||typeof i!="boolean"),f=d||(i===!0||h===!0?"margin":"border");return p(this,function(S,y,b){var P;return c(S)?m.indexOf("outer")===0?S["inner"+l]:S.document.documentElement["client"+l]:S.nodeType===9?(P=S.documentElement,Math.max(S.body["scroll"+l],P["scroll"+l],S.body["offset"+l],P["offset"+l],P["client"+l])):b===void 0?n.css(S,y,f):n.style(S,y,b,f)},a,u?i:void 0,u)}})}),n}.apply(v,g),o!==void 0&&(O.exports=o)},8331:(O,v,r)=>{var g,o;g=[r(2884),r(7232),r(7749),r(9003),r(1286),r(1143),r(29),r(3120),r(320),r(698),r(470),r(6365),r(8174),r(184),r(7392),r(5599),r(7154),r(4881)],o=function(n,p,c,l,a,d,m,i,h,u,f){"use strict";var S,y,b=/^(?:toggle|show|hide)$/,P=/queueHooks$/;function E(){y&&(c.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,n.fx.interval),n.fx.tick())}function N(){return window.setTimeout(function(){S=void 0}),S=Date.now()}function T(_,I){var U,F=0,z={height:_};for(I=I?1:0;F<4;F+=2-I)U=m[F],z["margin"+U]=z["padding"+U]=_;return I&&(z.opacity=z.width=_),z}function A(_,I,U){for(var F,z=(x.tweeners[I]||[]).concat(x.tweeners["*"]),B=0,$=z.length;B<$;B++)if(F=z[B].call(U,I,_))return F}function D(_,I,U){var F,z,B,$,w,H,V,ne,re="width"in I||"height"in I,ce=this,te={},ge=_.style,Ce=_.nodeType&&i(_),je=u.get(_,"fxshow");U.queue||($=n._queueHooks(_,"fx"),$.unqueued==null&&($.unqueued=0,w=$.empty.fire,$.empty.fire=function(){$.unqueued||w()}),$.unqueued++,ce.always(function(){ce.always(function(){$.unqueued--,n.queue(_,"fx").length||$.empty.fire()})}));for(F in I)if(z=I[F],b.test(z)){if(delete I[F],B=B||z==="toggle",z===(Ce?"hide":"show"))if(z==="show"&&je&&je[F]!==void 0)Ce=!0;else continue;te[F]=je&&je[F]||n.style(_,F)}if(H=!n.isEmptyObject(I),!(!H&&n.isEmptyObject(te))){re&&_.nodeType===1&&(U.overflow=[ge.overflow,ge.overflowX,ge.overflowY],V=je&&je.display,V==null&&(V=u.get(_,"display")),ne=n.css(_,"display"),ne==="none"&&(V?ne=V:(f([_],!0),V=_.style.display||V,ne=n.css(_,"display"),f([_]))),(ne==="inline"||ne==="inline-block"&&V!=null)&&n.css(_,"float")==="none"&&(H||(ce.done(function(){ge.display=V}),V==null&&(ne=ge.display,V=ne==="none"?"":ne)),ge.display="inline-block")),U.overflow&&(ge.overflow="hidden",ce.always(function(){ge.overflow=U.overflow[0],ge.overflowX=U.overflow[1],ge.overflowY=U.overflow[2]})),H=!1;for(F in te)H||(je?"hidden"in je&&(Ce=je.hidden):je=u.access(_,"fxshow",{display:V}),B&&(je.hidden=!Ce),Ce&&f([_],!0),ce.done(function(){Ce||f([_]),u.remove(_,"fxshow");for(F in te)n.style(_,F,te[F])})),H=A(Ce?je[F]:0,F,ce),F in je||(je[F]=H.start,Ce&&(H.end=H.start,H.start=0))}}function M(_,I){var U,F,z,B,$;for(U in _)if(F=p(U),z=I[F],B=_[U],Array.isArray(B)&&(z=B[1],B=_[U]=B[0]),U!==F&&(_[F]=B,delete _[U]),$=n.cssHooks[F],$&&"expand"in $){B=$.expand(B),delete _[F];for(U in B)U in _||(_[U]=B[U],I[U]=z)}else I[F]=z}function x(_,I,U){var F,z,B=0,$=x.prefilters.length,w=n.Deferred().always(function(){delete H.elem}),H=function(){if(z)return!1;for(var re=S||N(),ce=Math.max(0,V.startTime+V.duration-re),te=ce/V.duration||0,ge=1-te,Ce=0,je=V.tweens.length;Ce<je;Ce++)V.tweens[Ce].run(ge);return w.notifyWith(_,[V,ge,ce]),ge<1&&je?ce:(je||w.notifyWith(_,[V,1,0]),w.resolveWith(_,[V]),!1)},V=w.promise({elem:_,props:n.extend({},I),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},U),originalProperties:I,originalOptions:U,startTime:S||N(),duration:U.duration,tweens:[],createTween:function(re,ce){var te=n.Tween(_,V.opts,re,ce,V.opts.specialEasing[re]||V.opts.easing);return V.tweens.push(te),te},stop:function(re){var ce=0,te=re?V.tweens.length:0;if(z)return this;for(z=!0;ce<te;ce++)V.tweens[ce].run(1);return re?(w.notifyWith(_,[V,1,0]),w.resolveWith(_,[V,re])):w.rejectWith(_,[V,re]),this}}),ne=V.props;for(M(ne,V.opts.specialEasing);B<$;B++)if(F=x.prefilters[B].call(V,_,ne,V.opts),F)return l(F.stop)&&(n._queueHooks(V.elem,V.opts.queue).stop=F.stop.bind(F)),F;return n.map(ne,A,V),l(V.opts.start)&&V.opts.start.call(_,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),n.fx.timer(n.extend(H,{elem:_,anim:V,queue:V.opts.queue})),V}return n.Animation=n.extend(x,{tweeners:{"*":[function(_,I){var U=this.createTween(_,I);return h(U.elem,_,a.exec(I),U),U}]},tweener:function(_,I){l(_)?(I=_,_=["*"]):_=_.match(d);for(var U,F=0,z=_.length;F<z;F++)U=_[F],x.tweeners[U]=x.tweeners[U]||[],x.tweeners[U].unshift(I)},prefilters:[D],prefilter:function(_,I){I?x.prefilters.unshift(_):x.prefilters.push(_)}}),n.speed=function(_,I,U){var F=_&&typeof _=="object"?n.extend({},_):{complete:U||!U&&I||l(_)&&_,duration:_,easing:U&&I||I&&!l(I)&&I};return n.fx.off?F.duration=0:typeof F.duration!="number"&&(F.duration in n.fx.speeds?F.duration=n.fx.speeds[F.duration]:F.duration=n.fx.speeds._default),(F.queue==null||F.queue===!0)&&(F.queue="fx"),F.old=F.complete,F.complete=function(){l(F.old)&&F.old.call(this),F.queue&&n.dequeue(this,F.queue)},F},n.fn.extend({fadeTo:function(_,I,U,F){return this.filter(i).css("opacity",0).show().end().animate({opacity:I},_,U,F)},animate:function(_,I,U,F){var z=n.isEmptyObject(_),B=n.speed(I,U,F),$=function(){var w=x(this,n.extend({},_),B);(z||u.get(this,"finish"))&&w.stop(!0)};return $.finish=$,z||B.queue===!1?this.each($):this.queue(B.queue,$)},stop:function(_,I,U){var F=function(z){var B=z.stop;delete z.stop,B(U)};return typeof _!="string"&&(U=I,I=_,_=void 0),I&&this.queue(_||"fx",[]),this.each(function(){var z=!0,B=_!=null&&_+"queueHooks",$=n.timers,w=u.get(this);if(B)w[B]&&w[B].stop&&F(w[B]);else for(B in w)w[B]&&w[B].stop&&P.test(B)&&F(w[B]);for(B=$.length;B--;)$[B].elem===this&&(_==null||$[B].queue===_)&&($[B].anim.stop(U),z=!1,$.splice(B,1));(z||!U)&&n.dequeue(this,_)})},finish:function(_){return _!==!1&&(_=_||"fx"),this.each(function(){var I,U=u.get(this),F=U[_+"queue"],z=U[_+"queueHooks"],B=n.timers,$=F?F.length:0;for(U.finish=!0,n.queue(this,_,[]),z&&z.stop&&z.stop.call(this,!0),I=B.length;I--;)B[I].elem===this&&B[I].queue===_&&(B[I].anim.stop(!0),B.splice(I,1));for(I=0;I<$;I++)F[I]&&F[I].finish&&F[I].finish.call(this);delete U.finish})}}),n.each(["toggle","show","hide"],function(_,I){var U=n.fn[I];n.fn[I]=function(F,z,B){return F==null||typeof F=="boolean"?U.apply(this,arguments):this.animate(T(I,!0),F,z,B)}}),n.each({slideDown:T("show"),slideUp:T("hide"),slideToggle:T("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(_,I){n.fn[_]=function(U,F,z){return this.animate(I,U,F,z)}}),n.timers=[],n.fx.tick=function(){var _,I=0,U=n.timers;for(S=Date.now();I<U.length;I++)_=U[I],!_()&&U[I]===_&&U.splice(I--,1);U.length||n.fx.stop(),S=void 0},n.fx.timer=function(_){n.timers.push(_),n.fx.start()},n.fx.interval=13,n.fx.start=function(){y||(y=!0,E())},n.fx.stop=function(){y=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(v,g),o!==void 0&&(O.exports=o)},4881:(O,v,r)=>{var g,o;g=[r(2884),r(2137),r(7154)],o=function(n,p){"use strict";function c(l,a,d,m,i){return new c.prototype.init(l,a,d,m,i)}n.Tween=c,c.prototype={constructor:c,init:function(l,a,d,m,i,h){this.elem=l,this.prop=d,this.easing=i||n.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=m,this.unit=h||(n.cssNumber[d]?"":"px")},cur:function(){var l=c.propHooks[this.prop];return l&&l.get?l.get(this):c.propHooks._default.get(this)},run:function(l){var a,d=c.propHooks[this.prop];return this.options.duration?this.pos=a=n.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=a=l,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):c.propHooks._default.set(this),this}},c.prototype.init.prototype=c.prototype,c.propHooks={_default:{get:function(l){var a;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(a=n.css(l.elem,l.prop,""),!a||a==="auto"?0:a)},set:function(l){n.fx.step[l.prop]?n.fx.step[l.prop](l):l.elem.nodeType===1&&(n.cssHooks[l.prop]||l.elem.style[p(l.prop)]!=null)?n.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},c.propHooks.scrollTop=c.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},n.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},n.fx=c.prototype.init,n.fx.step={}}.apply(v,g),o!==void 0&&(O.exports=o)},7791:(O,v,r)=>{var g,o;g=[r(2884),r(6),r(8331)],o=function(n){"use strict";n.expr.pseudos.animated=function(p){return n.grep(n.timers,function(c){return p===c.elem}).length}}.apply(v,g),o!==void 0&&(O.exports=o)},5957:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(893),r(9003),r(1143),r(8451),r(7502),r(7098),r(698),r(7031),r(6365),r(6)],o=function(n,p,c,l,a,d,m,i,h,u){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function S(){return!0}function y(){return!1}function b(T,A){return T===P()==(A==="focus")}function P(){try{return p.activeElement}catch(T){}}function E(T,A,D,M,x,_){var I,U;if(typeof A=="object"){typeof D!="string"&&(M=M||D,D=void 0);for(U in A)E(T,U,D,M,A[U],_);return T}if(M==null&&x==null?(x=D,M=D=void 0):x==null&&(typeof D=="string"?(x=M,M=void 0):(x=M,M=D,D=void 0)),x===!1)x=y;else if(!x)return T;return _===1&&(I=x,x=function(F){return n().off(F),I.apply(this,arguments)},x.guid=I.guid||(I.guid=n.guid++)),T.each(function(){n.event.add(this,A,x,M,D)})}n.event={global:{},add:function(T,A,D,M,x){var _,I,U,F,z,B,$,w,H,V,ne,re=h.get(T);if(!!i(T))for(D.handler&&(_=D,D=_.handler,x=_.selector),x&&n.find.matchesSelector(c,x),D.guid||(D.guid=n.guid++),(F=re.events)||(F=re.events=Object.create(null)),(I=re.handle)||(I=re.handle=function(ce){return typeof n!="undefined"&&n.event.triggered!==ce.type?n.event.dispatch.apply(T,arguments):void 0}),A=(A||"").match(a)||[""],z=A.length;z--;)U=f.exec(A[z])||[],H=ne=U[1],V=(U[2]||"").split(".").sort(),H&&($=n.event.special[H]||{},H=(x?$.delegateType:$.bindType)||H,$=n.event.special[H]||{},B=n.extend({type:H,origType:ne,data:M,handler:D,guid:D.guid,selector:x,needsContext:x&&n.expr.match.needsContext.test(x),namespace:V.join(".")},_),(w=F[H])||(w=F[H]=[],w.delegateCount=0,(!$.setup||$.setup.call(T,M,V,I)===!1)&&T.addEventListener&&T.addEventListener(H,I)),$.add&&($.add.call(T,B),B.handler.guid||(B.handler.guid=D.guid)),x?w.splice(w.delegateCount++,0,B):w.push(B),n.event.global[H]=!0)},remove:function(T,A,D,M,x){var _,I,U,F,z,B,$,w,H,V,ne,re=h.hasData(T)&&h.get(T);if(!(!re||!(F=re.events))){for(A=(A||"").match(a)||[""],z=A.length;z--;){if(U=f.exec(A[z])||[],H=ne=U[1],V=(U[2]||"").split(".").sort(),!H){for(H in F)n.event.remove(T,H+A[z],D,M,!0);continue}for($=n.event.special[H]||{},H=(M?$.delegateType:$.bindType)||H,w=F[H]||[],U=U[2]&&new RegExp("(^|\\.)"+V.join("\\.(?:.*\\.|)")+"(\\.|$)"),I=_=w.length;_--;)B=w[_],(x||ne===B.origType)&&(!D||D.guid===B.guid)&&(!U||U.test(B.namespace))&&(!M||M===B.selector||M==="**"&&B.selector)&&(w.splice(_,1),B.selector&&w.delegateCount--,$.remove&&$.remove.call(T,B));I&&!w.length&&((!$.teardown||$.teardown.call(T,V,re.handle)===!1)&&n.removeEvent(T,H,re.handle),delete F[H])}n.isEmptyObject(F)&&h.remove(T,"handle events")}},dispatch:function(T){var A,D,M,x,_,I,U=new Array(arguments.length),F=n.event.fix(T),z=(h.get(this,"events")||Object.create(null))[F.type]||[],B=n.event.special[F.type]||{};for(U[0]=F,A=1;A<arguments.length;A++)U[A]=arguments[A];if(F.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,F)===!1)){for(I=n.event.handlers.call(this,F,z),A=0;(x=I[A++])&&!F.isPropagationStopped();)for(F.currentTarget=x.elem,D=0;(_=x.handlers[D++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||_.namespace===!1||F.rnamespace.test(_.namespace))&&(F.handleObj=_,F.data=_.data,M=((n.event.special[_.origType]||{}).handle||_.handler).apply(x.elem,U),M!==void 0&&(F.result=M)===!1&&(F.preventDefault(),F.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,F),F.result}},handlers:function(T,A){var D,M,x,_,I,U=[],F=A.delegateCount,z=T.target;if(F&&z.nodeType&&!(T.type==="click"&&T.button>=1)){for(;z!==this;z=z.parentNode||this)if(z.nodeType===1&&!(T.type==="click"&&z.disabled===!0)){for(_=[],I={},D=0;D<F;D++)M=A[D],x=M.selector+" ",I[x]===void 0&&(I[x]=M.needsContext?n(x,this).index(z)>-1:n.find(x,this,null,[z]).length),I[x]&&_.push(M);_.length&&U.push({elem:z,handlers:_})}}return z=this,F<A.length&&U.push({elem:z,handlers:A.slice(F)}),U},addProp:function(T,A){Object.defineProperty(n.Event.prototype,T,{enumerable:!0,configurable:!0,get:l(A)?function(){if(this.originalEvent)return A(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[T]},set:function(D){Object.defineProperty(this,T,{enumerable:!0,configurable:!0,writable:!0,value:D})}})},fix:function(T){return T[n.expando]?T:new n.Event(T)},special:{load:{noBubble:!0},click:{setup:function(T){var A=this||T;return d.test(A.type)&&A.click&&u(A,"input")&&N(A,"click",S),!1},trigger:function(T){var A=this||T;return d.test(A.type)&&A.click&&u(A,"input")&&N(A,"click"),!0},_default:function(T){var A=T.target;return d.test(A.type)&&A.click&&u(A,"input")&&h.get(A,"click")||u(A,"a")}},beforeunload:{postDispatch:function(T){T.result!==void 0&&T.originalEvent&&(T.originalEvent.returnValue=T.result)}}}};function N(T,A,D){if(!D){h.get(T,A)===void 0&&n.event.add(T,A,S);return}h.set(T,A,!1),n.event.add(T,A,{namespace:!1,handler:function(M){var x,_,I=h.get(this,A);if(M.isTrigger&1&&this[A]){if(I.length)(n.event.special[A]||{}).delegateType&&M.stopPropagation();else if(I=m.call(arguments),h.set(this,A,I),x=D(this,A),this[A](),_=h.get(this,A),I!==_||x?h.set(this,A,!1):_={},I!==_)return M.stopImmediatePropagation(),M.preventDefault(),_&&_.value}else I.length&&(h.set(this,A,{value:n.event.trigger(n.extend(I[0],n.Event.prototype),I.slice(1),this)}),M.stopImmediatePropagation())}})}return n.removeEvent=function(T,A,D){T.removeEventListener&&T.removeEventListener(A,D)},n.Event=function(T,A){if(!(this instanceof n.Event))return new n.Event(T,A);T&&T.type?(this.originalEvent=T,this.type=T.type,this.isDefaultPrevented=T.defaultPrevented||T.defaultPrevented===void 0&&T.returnValue===!1?S:y,this.target=T.target&&T.target.nodeType===3?T.target.parentNode:T.target,this.currentTarget=T.currentTarget,this.relatedTarget=T.relatedTarget):this.type=T,A&&n.extend(this,A),this.timeStamp=T&&T.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y,isSimulated:!1,preventDefault:function(){var T=this.originalEvent;this.isDefaultPrevented=S,T&&!this.isSimulated&&T.preventDefault()},stopPropagation:function(){var T=this.originalEvent;this.isPropagationStopped=S,T&&!this.isSimulated&&T.stopPropagation()},stopImmediatePropagation:function(){var T=this.originalEvent;this.isImmediatePropagationStopped=S,T&&!this.isSimulated&&T.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(T,A){n.event.special[T]={setup:function(){return N(this,T,b),!1},trigger:function(){return N(this,T),!0},_default:function(){return!0},delegateType:A}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(T,A){n.event.special[T]={delegateType:A,bindType:A,handle:function(D){var M,x=this,_=D.relatedTarget,I=D.handleObj;return(!_||_!==x&&!n.contains(x,_))&&(D.type=I.origType,M=I.handler.apply(this,arguments),D.type=A),M}}}),n.fn.extend({on:function(T,A,D,M){return E(this,T,A,D,M)},one:function(T,A,D,M){return E(this,T,A,D,M,1)},off:function(T,A,D){var M,x;if(T&&T.preventDefault&&T.handleObj)return M=T.handleObj,n(T.delegateTarget).off(M.namespace?M.origType+"."+M.namespace:M.origType,M.selector,M.handler),this;if(typeof T=="object"){for(x in T)this.off(x,A,T[x]);return this}return(A===!1||typeof A=="function")&&(D=A,A=void 0),D===!1&&(D=y),this.each(function(){n.event.remove(this,T,D,A)})}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},3277:(O,v,r)=>{var g,o;g=[r(2884),r(698),r(9224),r(5957),r(2075)],o=function(n,p,c){"use strict";return c.focusin||n.each({focus:"focusin",blur:"focusout"},function(l,a){var d=function(m){n.event.simulate(a,m.target,n.event.fix(m))};n.event.special[a]={setup:function(){var m=this.ownerDocument||this.document||this,i=p.access(m,a);i||m.addEventListener(l,d,!0),p.access(m,a,(i||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,i=p.access(m,a)-1;i?p.access(m,a,i):(m.removeEventListener(l,d,!0),p.remove(m,a))}}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},9224:(O,v,r)=>{var g,o;g=[r(9343)],o=function(n){"use strict";return n.focusin="onfocusin"in window,n}.apply(v,g),o!==void 0&&(O.exports=o)},2075:(O,v,r)=>{var g,o;g=[r(2884),r(7749),r(698),r(7098),r(939),r(9003),r(9011),r(5957)],o=function(n,p,c,l,a,d,m){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,h=function(u){u.stopPropagation()};return n.extend(n.event,{trigger:function(u,f,S,y){var b,P,E,N,T,A,D,M,x=[S||p],_=a.call(u,"type")?u.type:u,I=a.call(u,"namespace")?u.namespace.split("."):[];if(P=M=E=S=S||p,!(S.nodeType===3||S.nodeType===8)&&!i.test(_+n.event.triggered)&&(_.indexOf(".")>-1&&(I=_.split("."),_=I.shift(),I.sort()),T=_.indexOf(":")<0&&"on"+_,u=u[n.expando]?u:new n.Event(_,typeof u=="object"&&u),u.isTrigger=y?2:3,u.namespace=I.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+I.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=S),f=f==null?[u]:n.makeArray(f,[u]),D=n.event.special[_]||{},!(!y&&D.trigger&&D.trigger.apply(S,f)===!1))){if(!y&&!D.noBubble&&!m(S)){for(N=D.delegateType||_,i.test(N+_)||(P=P.parentNode);P;P=P.parentNode)x.push(P),E=P;E===(S.ownerDocument||p)&&x.push(E.defaultView||E.parentWindow||window)}for(b=0;(P=x[b++])&&!u.isPropagationStopped();)M=P,u.type=b>1?N:D.bindType||_,A=(c.get(P,"events")||Object.create(null))[u.type]&&c.get(P,"handle"),A&&A.apply(P,f),A=T&&P[T],A&&A.apply&&l(P)&&(u.result=A.apply(P,f),u.result===!1&&u.preventDefault());return u.type=_,!y&&!u.isDefaultPrevented()&&(!D._default||D._default.apply(x.pop(),f)===!1)&&l(S)&&T&&d(S[_])&&!m(S)&&(E=S[T],E&&(S[T]=null),n.event.triggered=_,u.isPropagationStopped()&&M.addEventListener(_,h),S[_](),u.isPropagationStopped()&&M.removeEventListener(_,h),n.event.triggered=void 0,E&&(S[T]=E)),u.result}},simulate:function(u,f,S){var y=n.extend(new n.Event,S,{type:u,isSimulated:!0});n.event.trigger(y,null,f)}}),n.fn.extend({trigger:function(u,f){return this.each(function(){n.event.trigger(u,f,this)})},triggerHandler:function(u,f){var S=this[0];if(S)return n.event.trigger(u,f,S,!0)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},6909:(O,v,r)=>{var g,o,g,o;g=[r(2884)],o=function(n){"use strict";g=[],o=function(){return n}.apply(v,g),o!==void 0&&(O.exports=o)}.apply(v,g),o!==void 0&&(O.exports=o)},2851:(O,v,r)=>{var g,o;g=[r(2884)],o=function(n){"use strict";var p=window.jQuery,c=window.$;n.noConflict=function(l){return window.$===n&&(window.$=c),l&&window.jQuery===n&&(window.jQuery=p),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(v,g),o!==void 0&&(O.exports=o)},5814:(O,v,r)=>{var g,o;g=[r(2884),r(6),r(7392),r(7617),r(184),r(3615),r(7644),r(8416),r(8174),r(2706),r(4437),r(5957),r(3277),r(5599),r(6399),r(7647),r(7154),r(8326),r(4492),r(1450),r(2371),r(719),r(3632),r(4182),r(6073),r(5461),r(8331),r(7791),r(6828),r(3514),r(1900),r(6909),r(2851)],o=function(n){"use strict";return n}.apply(v,g),o!==void 0&&(O.exports=o)},5599:(O,v,r)=>{var g,o;g=[r(2884),r(1518),r(1429),r(9003),r(5896),r(8451),r(8097),r(9109),r(2619),r(6747),r(5385),r(273),r(6753),r(5464),r(698),r(640),r(7098),r(4835),r(7031),r(6365),r(7392),r(6),r(5957)],o=function(n,p,c,l,a,d,m,i,h,u,f,S,y,b,P,E,N,T,A){"use strict";var D=/<script|<style|<link/i,M=/checked\s*(?:[^=]|=\s*.checked.)/i,x=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function _(w,H){return A(w,"table")&&A(H.nodeType!==11?H:H.firstChild,"tr")&&n(w).children("tbody")[0]||w}function I(w){return w.type=(w.getAttribute("type")!==null)+"/"+w.type,w}function U(w){return(w.type||"").slice(0,5)==="true/"?w.type=w.type.slice(5):w.removeAttribute("type"),w}function F(w,H){var V,ne,re,ce,te,ge,Ce;if(H.nodeType===1){if(P.hasData(w)&&(ce=P.get(w),Ce=ce.events,Ce)){P.remove(H,"handle events");for(re in Ce)for(V=0,ne=Ce[re].length;V<ne;V++)n.event.add(H,re,Ce[re][V])}E.hasData(w)&&(te=E.access(w),ge=n.extend({},te),E.set(H,ge))}}function z(w,H){var V=H.nodeName.toLowerCase();V==="input"&&d.test(w.type)?H.checked=w.checked:(V==="input"||V==="textarea")&&(H.defaultValue=w.defaultValue)}function B(w,H,V,ne){H=c(H);var re,ce,te,ge,Ce,je,it=0,mt=w.length,ut=mt-1,ht=H[0],At=l(ht);if(At||mt>1&&typeof ht=="string"&&!b.checkClone&&M.test(ht))return w.each(function(De){var Ct=w.eq(De);At&&(H[0]=ht.call(this,De,Ct.html())),B(Ct,H,V,ne)});if(mt&&(re=y(H,w[0].ownerDocument,!1,w,ne),ce=re.firstChild,re.childNodes.length===1&&(re=ce),ce||ne)){for(te=n.map(f(re,"script"),I),ge=te.length;it<mt;it++)Ce=re,it!==ut&&(Ce=n.clone(Ce,!0,!0),ge&&n.merge(te,f(Ce,"script"))),V.call(w[it],Ce,it);if(ge)for(je=te[te.length-1].ownerDocument,n.map(te,U),it=0;it<ge;it++)Ce=te[it],h.test(Ce.type||"")&&!P.access(Ce,"globalEval")&&n.contains(je,Ce)&&(Ce.src&&(Ce.type||"").toLowerCase()!=="module"?n._evalUrl&&!Ce.noModule&&n._evalUrl(Ce.src,{nonce:Ce.nonce||Ce.getAttribute("nonce")},je):T(Ce.textContent.replace(x,""),Ce,je))}return w}function $(w,H,V){for(var ne,re=H?n.filter(H,w):w,ce=0;(ne=re[ce])!=null;ce++)!V&&ne.nodeType===1&&n.cleanData(f(ne)),ne.parentNode&&(V&&p(ne)&&S(f(ne,"script")),ne.parentNode.removeChild(ne));return w}return n.extend({htmlPrefilter:function(w){return w},clone:function(w,H,V){var ne,re,ce,te,ge=w.cloneNode(!0),Ce=p(w);if(!b.noCloneChecked&&(w.nodeType===1||w.nodeType===11)&&!n.isXMLDoc(w))for(te=f(ge),ce=f(w),ne=0,re=ce.length;ne<re;ne++)z(ce[ne],te[ne]);if(H)if(V)for(ce=ce||f(w),te=te||f(ge),ne=0,re=ce.length;ne<re;ne++)F(ce[ne],te[ne]);else F(w,ge);return te=f(ge,"script"),te.length>0&&S(te,!Ce&&f(w,"script")),ge},cleanData:function(w){for(var H,V,ne,re=n.event.special,ce=0;(V=w[ce])!==void 0;ce++)if(N(V)){if(H=V[P.expando]){if(H.events)for(ne in H.events)re[ne]?n.event.remove(V,ne):n.removeEvent(V,ne,H.handle);V[P.expando]=void 0}V[E.expando]&&(V[E.expando]=void 0)}}}),n.fn.extend({detach:function(w){return $(this,w,!0)},remove:function(w){return $(this,w)},text:function(w){return m(this,function(H){return H===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=H)})},null,w,arguments.length)},append:function(){return B(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var H=_(this,w);H.appendChild(w)}})},prepend:function(){return B(this,arguments,function(w){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var H=_(this,w);H.insertBefore(w,H.firstChild)}})},before:function(){return B(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this)})},after:function(){return B(this,arguments,function(w){this.parentNode&&this.parentNode.insertBefore(w,this.nextSibling)})},empty:function(){for(var w,H=0;(w=this[H])!=null;H++)w.nodeType===1&&(n.cleanData(f(w,!1)),w.textContent="");return this},clone:function(w,H){return w=w==null?!1:w,H=H==null?w:H,this.map(function(){return n.clone(this,w,H)})},html:function(w){return m(this,function(H){var V=this[0]||{},ne=0,re=this.length;if(H===void 0&&V.nodeType===1)return V.innerHTML;if(typeof H=="string"&&!D.test(H)&&!u[(i.exec(H)||["",""])[1].toLowerCase()]){H=n.htmlPrefilter(H);try{for(;ne<re;ne++)V=this[ne]||{},V.nodeType===1&&(n.cleanData(f(V,!1)),V.innerHTML=H);V=0}catch(ce){}}V&&this.empty().append(H)},null,w,arguments.length)},replaceWith:function(){var w=[];return B(this,arguments,function(H){var V=this.parentNode;n.inArray(this,w)<0&&(n.cleanData(f(this)),V&&V.replaceChild(H,this))},w)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(w,H){n.fn[w]=function(V){for(var ne,re=[],ce=n(V),te=ce.length-1,ge=0;ge<=te;ge++)ne=ge===te?this:this.clone(!0),n(ce[ge])[H](ne),a.apply(re,ne.get());return this.pushStack(re)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},6399:(O,v,r)=>{var g,o;g=[r(1450)],o=function(n){"use strict";return n._evalUrl=function(p,c,l){return n.ajax({url:p,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(a){n.globalEval(a,c,l)}})},n._evalUrl}.apply(v,g),o!==void 0&&(O.exports=o)},6753:(O,v,r)=>{var g,o;g=[r(2884),r(1401),r(1518),r(9109),r(2619),r(6747),r(5385),r(273)],o=function(n,p,c,l,a,d,m,i){"use strict";var h=/<|&#?\w+;/;function u(f,S,y,b,P){for(var E,N,T,A,D,M,x=S.createDocumentFragment(),_=[],I=0,U=f.length;I<U;I++)if(E=f[I],E||E===0)if(p(E)==="object")n.merge(_,E.nodeType?[E]:E);else if(!h.test(E))_.push(S.createTextNode(E));else{for(N=N||x.appendChild(S.createElement("div")),T=(l.exec(E)||["",""])[1].toLowerCase(),A=d[T]||d._default,N.innerHTML=A[1]+n.htmlPrefilter(E)+A[2],M=A[0];M--;)N=N.lastChild;n.merge(_,N.childNodes),N=x.firstChild,N.textContent=""}for(x.textContent="",I=0;E=_[I++];){if(b&&n.inArray(E,b)>-1){P&&P.push(E);continue}if(D=c(E),N=m(x.appendChild(E),"script"),D&&i(N),y)for(M=0;E=N[M++];)a.test(E.type||"")&&y.push(E)}return x}return u}.apply(v,g),o!==void 0&&(O.exports=o)},5385:(O,v,r)=>{var g,o;g=[r(2884),r(7031)],o=function(n,p){"use strict";function c(l,a){var d;return typeof l.getElementsByTagName!="undefined"?d=l.getElementsByTagName(a||"*"):typeof l.querySelectorAll!="undefined"?d=l.querySelectorAll(a||"*"):d=[],a===void 0||a&&p(l,a)?n.merge([l],d):d}return c}.apply(v,g),o!==void 0&&(O.exports=o)},273:(O,v,r)=>{var g,o;g=[r(698)],o=function(n){"use strict";function p(c,l){for(var a=0,d=c.length;a<d;a++)n.set(c[a],"globalEval",!l||n.get(l[a],"globalEval"))}return p}.apply(v,g),o!==void 0&&(O.exports=o)},5464:(O,v,r)=>{var g,o;g=[r(7749),r(9343)],o=function(n,p){"use strict";return function(){var c=n.createDocumentFragment(),l=c.appendChild(n.createElement("div")),a=n.createElement("input");a.setAttribute("type","radio"),a.setAttribute("checked","checked"),a.setAttribute("name","t"),l.appendChild(a),p.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",p.option=!!l.lastChild}(),p}.apply(v,g),o!==void 0&&(O.exports=o)},2619:(O,v,r)=>{var g;g=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(v,r,v,O),g!==void 0&&(O.exports=g)},9109:(O,v,r)=>{var g;g=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(v,r,v,O),g!==void 0&&(O.exports=g)},6747:(O,v,r)=>{var g,o;g=[r(5464)],o=function(n){"use strict";var p={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return p.tbody=p.tfoot=p.colgroup=p.caption=p.thead,p.th=p.td,n.option||(p.optgroup=p.option=[1,"<select multiple='multiple'>","</select>"]),p}.apply(v,g),o!==void 0&&(O.exports=o)},6828:(O,v,r)=>{var g,o;g=[r(2884),r(8097),r(893),r(9003),r(3045),r(4015),r(1353),r(1567),r(9011),r(6365),r(7154),r(6)],o=function(n,p,c,l,a,d,m,i,h){"use strict";return n.offset={setOffset:function(u,f,S){var y,b,P,E,N,T,A,D=n.css(u,"position"),M=n(u),x={};D==="static"&&(u.style.position="relative"),N=M.offset(),P=n.css(u,"top"),T=n.css(u,"left"),A=(D==="absolute"||D==="fixed")&&(P+T).indexOf("auto")>-1,A?(y=M.position(),E=y.top,b=y.left):(E=parseFloat(P)||0,b=parseFloat(T)||0),l(f)&&(f=f.call(u,S,n.extend({},N))),f.top!=null&&(x.top=f.top-N.top+E),f.left!=null&&(x.left=f.left-N.left+b),"using"in f?f.using.call(u,x):M.css(x)}},n.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(b){n.offset.setOffset(this,u,b)});var f,S,y=this[0];if(!!y)return y.getClientRects().length?(f=y.getBoundingClientRect(),S=y.ownerDocument.defaultView,{top:f.top+S.pageYOffset,left:f.left+S.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var u,f,S,y=this[0],b={top:0,left:0};if(n.css(y,"position")==="fixed")f=y.getBoundingClientRect();else{for(f=this.offset(),S=y.ownerDocument,u=y.offsetParent||S.documentElement;u&&(u===S.body||u===S.documentElement)&&n.css(u,"position")==="static";)u=u.parentNode;u&&u!==y&&u.nodeType===1&&(b=n(u).offset(),b.top+=n.css(u,"borderTopWidth",!0),b.left+=n.css(u,"borderLeftWidth",!0))}return{top:f.top-b.top-n.css(y,"marginTop",!0),left:f.left-b.left-n.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&n.css(u,"position")==="static";)u=u.offsetParent;return u||c})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,f){var S=f==="pageYOffset";n.fn[u]=function(y){return p(this,function(b,P,E){var N;if(h(b)?N=b:b.nodeType===9&&(N=b.defaultView),E===void 0)return N?N[f]:b[P];N?N.scrollTo(S?N.pageXOffset:E,S?E:N.pageYOffset):b[P]=E},u,y,arguments.length)}}),n.each(["top","left"],function(u,f){n.cssHooks[f]=m(i.pixelPosition,function(S,y){if(y)return y=d(S,f),a.test(y)?n(S).position()[f]+"px":y})}),n}.apply(v,g),o!==void 0&&(O.exports=o)},8174:(O,v,r)=>{var g,o;g=[r(2884),r(698),r(184),r(7617)],o=function(n,p){"use strict";return n.extend({queue:function(c,l,a){var d;if(c)return l=(l||"fx")+"queue",d=p.get(c,l),a&&(!d||Array.isArray(a)?d=p.access(c,l,n.makeArray(a)):d.push(a)),d||[]},dequeue:function(c,l){l=l||"fx";var a=n.queue(c,l),d=a.length,m=a.shift(),i=n._queueHooks(c,l),h=function(){n.dequeue(c,l)};m==="inprogress"&&(m=a.shift(),d--),m&&(l==="fx"&&a.unshift("inprogress"),delete i.stop,m.call(c,h,i)),!d&&i&&i.empty.fire()},_queueHooks:function(c,l){var a=l+"queueHooks";return p.get(c,a)||p.access(c,a,{empty:n.Callbacks("once memory").add(function(){p.remove(c,[l+"queue",a])})})}}),n.fn.extend({queue:function(c,l){var a=2;return typeof c!="string"&&(l=c,c="fx",a--),arguments.length<a?n.queue(this[0],c):l===void 0?this:this.each(function(){var d=n.queue(this,c,l);n._queueHooks(this,c),c==="fx"&&d[0]!=="inprogress"&&n.dequeue(this,c)})},dequeue:function(c){return this.each(function(){n.dequeue(this,c)})},clearQueue:function(c){return this.queue(c||"fx",[])},promise:function(c,l){var a,d=1,m=n.Deferred(),i=this,h=this.length,u=function(){--d||m.resolveWith(i,[i])};for(typeof c!="string"&&(l=c,c=void 0),c=c||"fx";h--;)a=p.get(i[h],c+"queueHooks"),a&&a.empty&&(d++,a.empty.add(u));return u(),m.promise(l)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},2706:(O,v,r)=>{var g,o;g=[r(2884),r(8174),r(8331)],o=function(n){"use strict";return n.fn.delay=function(p,c){return p=n.fx&&n.fx.speeds[p]||p,c=c||"fx",this.queue(c,function(l,a){var d=window.setTimeout(l,p);a.stop=function(){window.clearTimeout(d)}})},n.fn.delay}.apply(v,g),o!==void 0&&(O.exports=o)},1854:(O,v,r)=>{var g,o;g=[r(2884),r(4779)],o=function(n,p){"use strict";n.find=p,n.expr=p.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=p.uniqueSort,n.text=p.getText,n.isXMLDoc=p.isXML,n.contains=p.contains,n.escapeSelector=p.escape}.apply(v,g),o!==void 0&&(O.exports=o)},6:(O,v,r)=>{var g,o;g=[r(1854)],o=function(){"use strict"}.apply(v,g),o!==void 0&&(O.exports=o)},4492:(O,v,r)=>{var g,o;g=[r(2884),r(1401),r(8451),r(9003),r(6365),r(7392),r(6034)],o=function(n,p,c,l){"use strict";var a=/\[\]$/,d=/\r?\n/g,m=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function h(u,f,S,y){var b;if(Array.isArray(f))n.each(f,function(P,E){S||a.test(u)?y(u,E):h(u+"["+(typeof E=="object"&&E!=null?P:"")+"]",E,S,y)});else if(!S&&p(f)==="object")for(b in f)h(u+"["+b+"]",f[b],S,y);else y(u,f)}return n.param=function(u,f){var S,y=[],b=function(P,E){var N=l(E)?E():E;y[y.length]=encodeURIComponent(P)+"="+encodeURIComponent(N==null?"":N)};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!n.isPlainObject(u))n.each(u,function(){b(this.name,this.value)});else for(S in u)h(S,u[S],f,b);return y.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=n.prop(this,"elements");return u?n.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!m.test(u)&&(this.checked||!c.test(u))}).map(function(u,f){var S=n(this).val();return S==null?null:Array.isArray(S)?n.map(S,function(y){return{name:f.name,value:y.replace(d,`\r
`)}}):{name:f.name,value:S.replace(d,`\r
`)}}).get()}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},7392:(O,v,r)=>{var g,o;g=[r(2884),r(2690),r(706),r(8515),r(2908),r(6903),r(7031),r(6365),r(6036),r(6)],o=function(n,p,c,l,a,d,m){"use strict";var i=/^(?:parents|prev(?:Until|All))/,h={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(f){var S=n(f,this),y=S.length;return this.filter(function(){for(var b=0;b<y;b++)if(n.contains(this,S[b]))return!0})},closest:function(f,S){var y,b=0,P=this.length,E=[],N=typeof f!="string"&&n(f);if(!d.test(f)){for(;b<P;b++)for(y=this[b];y&&y!==S;y=y.parentNode)if(y.nodeType<11&&(N?N.index(y)>-1:y.nodeType===1&&n.find.matchesSelector(y,f))){E.push(y);break}}return this.pushStack(E.length>1?n.uniqueSort(E):E)},index:function(f){return f?typeof f=="string"?c.call(n(f),this[0]):c.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,S){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(f,S))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function u(f,S){for(;(f=f[S])&&f.nodeType!==1;);return f}return n.each({parent:function(f){var S=f.parentNode;return S&&S.nodeType!==11?S:null},parents:function(f){return l(f,"parentNode")},parentsUntil:function(f,S,y){return l(f,"parentNode",y)},next:function(f){return u(f,"nextSibling")},prev:function(f){return u(f,"previousSibling")},nextAll:function(f){return l(f,"nextSibling")},prevAll:function(f){return l(f,"previousSibling")},nextUntil:function(f,S,y){return l(f,"nextSibling",y)},prevUntil:function(f,S,y){return l(f,"previousSibling",y)},siblings:function(f){return a((f.parentNode||{}).firstChild,f)},children:function(f){return a(f.firstChild)},contents:function(f){return f.contentDocument!=null&&p(f.contentDocument)?f.contentDocument:(m(f,"template")&&(f=f.content||f),n.merge([],f.childNodes))}},function(f,S){n.fn[f]=function(y,b){var P=n.map(this,S,y);return f.slice(-5)!=="Until"&&(b=y),b&&typeof b=="string"&&(P=n.filter(b,P)),this.length>1&&(h[f]||n.uniqueSort(P),i.test(f)&&P.reverse()),this.pushStack(P)}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},6036:(O,v,r)=>{var g,o;g=[r(2884),r(706),r(9003),r(6903),r(6)],o=function(n,p,c,l){"use strict";function a(d,m,i){return c(m)?n.grep(d,function(h,u){return!!m.call(h,u,h)!==i}):m.nodeType?n.grep(d,function(h){return h===m!==i}):typeof m!="string"?n.grep(d,function(h){return p.call(m,h)>-1!==i}):n.filter(m,d,i)}n.filter=function(d,m,i){var h=m[0];return i&&(d=":not("+d+")"),m.length===1&&h.nodeType===1?n.find.matchesSelector(h,d)?[h]:[]:n.find.matches(d,n.grep(m,function(u){return u.nodeType===1}))},n.fn.extend({find:function(d){var m,i,h=this.length,u=this;if(typeof d!="string")return this.pushStack(n(d).filter(function(){for(m=0;m<h;m++)if(n.contains(u[m],this))return!0}));for(i=this.pushStack([]),m=0;m<h;m++)n.find(d,u[m],i);return h>1?n.uniqueSort(i):i},filter:function(d){return this.pushStack(a(this,d||[],!1))},not:function(d){return this.pushStack(a(this,d||[],!0))},is:function(d){return!!a(this,typeof d=="string"&&l.test(d)?n(d):d||[],!1).length}})}.apply(v,g),o!==void 0&&(O.exports=o)},8515:(O,v,r)=>{var g,o;g=[r(2884)],o=function(n){"use strict";return function(p,c,l){for(var a=[],d=l!==void 0;(p=p[c])&&p.nodeType!==9;)if(p.nodeType===1){if(d&&n(p).is(l))break;a.push(p)}return a}}.apply(v,g),o!==void 0&&(O.exports=o)},6903:(O,v,r)=>{var g,o;g=[r(2884),r(6)],o=function(n){"use strict";return n.expr.match.needsContext}.apply(v,g),o!==void 0&&(O.exports=o)},2908:(O,v,r)=>{var g;g=function(){"use strict";return function(o,n){for(var p=[];o;o=o.nextSibling)o.nodeType===1&&o!==n&&p.push(o);return p}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},789:(O,v,r)=>{var g,o;g=[r(7913)],o=function(n){"use strict";return n.call(Object)}.apply(v,g),o!==void 0&&(O.exports=o)},2305:(O,v,r)=>{var g;g=function(){"use strict";return[]}.call(v,r,v,O),g!==void 0&&(O.exports=g)},8978:(O,v,r)=>{var g;g=function(){"use strict";return{}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},7749:(O,v,r)=>{var g;g=function(){"use strict";return window.document}.call(v,r,v,O),g!==void 0&&(O.exports=g)},893:(O,v,r)=>{var g,o;g=[r(7749)],o=function(n){"use strict";return n.documentElement}.apply(v,g),o!==void 0&&(O.exports=o)},1429:(O,v,r)=>{var g,o;g=[r(2305)],o=function(n){"use strict";return n.flat?function(p){return n.flat.call(p)}:function(p){return n.concat.apply([],p)}}.apply(v,g),o!==void 0&&(O.exports=o)},7913:(O,v,r)=>{var g,o;g=[r(939)],o=function(n){"use strict";return n.toString}.apply(v,g),o!==void 0&&(O.exports=o)},2690:(O,v,r)=>{var g;g=function(){"use strict";return Object.getPrototypeOf}.call(v,r,v,O),g!==void 0&&(O.exports=g)},939:(O,v,r)=>{var g,o;g=[r(8978)],o=function(n){"use strict";return n.hasOwnProperty}.apply(v,g),o!==void 0&&(O.exports=o)},706:(O,v,r)=>{var g,o;g=[r(2305)],o=function(n){"use strict";return n.indexOf}.apply(v,g),o!==void 0&&(O.exports=o)},9003:(O,v,r)=>{var g;g=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},9011:(O,v,r)=>{var g;g=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},5399:(O,v,r)=>{var g;g=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(v,r,v,O),g!==void 0&&(O.exports=g)},5896:(O,v,r)=>{var g,o;g=[r(2305)],o=function(n){"use strict";return n.push}.apply(v,g),o!==void 0&&(O.exports=o)},8451:(O,v,r)=>{var g;g=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(v,r,v,O),g!==void 0&&(O.exports=g)},1286:(O,v,r)=>{var g,o;g=[r(5399)],o=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(v,g),o!==void 0&&(O.exports=o)},1143:(O,v,r)=>{var g;g=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(v,r,v,O),g!==void 0&&(O.exports=g)},7502:(O,v,r)=>{var g,o;g=[r(2305)],o=function(n){"use strict";return n.slice}.apply(v,g),o!==void 0&&(O.exports=o)},9343:(O,v,r)=>{var g;g=function(){"use strict";return{}}.call(v,r,v,O),g!==void 0&&(O.exports=g)},9412:(O,v,r)=>{var g,o;g=[r(8978)],o=function(n){"use strict";return n.toString}.apply(v,g),o!==void 0&&(O.exports=o)},7647:(O,v,r)=>{var g,o;g=[r(2884),r(9003),r(6365),r(5599),r(7392)],o=function(n,p){"use strict";return n.fn.extend({wrapAll:function(c){var l;return this[0]&&(p(c)&&(c=c.call(this[0])),l=n(c,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(c){return p(c)?this.each(function(l){n(this).wrapInner(c.call(this,l))}):this.each(function(){var l=n(this),a=l.contents();a.length?a.wrapAll(c):l.append(c)})},wrap:function(c){var l=p(c);return this.each(function(a){n(this).wrapAll(l?c.call(this,a):c)})},unwrap:function(c){return this.parent(c).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(v,g),o!==void 0&&(O.exports=o)},4619:function(O,v,r){O=r.nmd(O);var g;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var o,n="4.17.21",p=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",a="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",m=500,i="__lodash_placeholder__",h=1,u=2,f=4,S=1,y=2,b=1,P=2,E=4,N=8,T=16,A=32,D=64,M=128,x=256,_=512,I=30,U="...",F=800,z=16,B=1,$=2,w=3,H=1/0,V=9007199254740991,ne=17976931348623157e292,re=0/0,ce=4294967295,te=ce-1,ge=ce>>>1,Ce=[["ary",M],["bind",b],["bindKey",P],["curry",N],["curryRight",T],["flip",_],["partial",A],["partialRight",D],["rearg",x]],je="[object Arguments]",it="[object Array]",mt="[object AsyncFunction]",ut="[object Boolean]",ht="[object Date]",At="[object DOMException]",De="[object Error]",Ct="[object Function]",Ue="[object GeneratorFunction]",We="[object Map]",Bt="[object Number]",Fe="[object Null]",pe="[object Object]",Ne="[object Promise]",Re="[object Proxy]",ie="[object RegExp]",ye="[object Set]",he="[object String]",be="[object Symbol]",Ze="[object Undefined]",Ke="[object WeakMap]",Je="[object WeakSet]",Pe="[object ArrayBuffer]",qe="[object DataView]",Qe="[object Float32Array]",Xe="[object Float64Array]",zt="[object Int8Array]",Lt="[object Int16Array]",Nt="[object Int32Array]",Tn="[object Uint8Array]",an="[object Uint8ClampedArray]",Wt="[object Uint16Array]",gn="[object Uint32Array]",jt=/\b__p \+= '';/g,mn=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,An=/&(?:amp|lt|gt|quot|#39);/g,kn=/[&<>"']/g,dn=RegExp(An.source),wn=RegExp(kn.source),Nn=/<%-([\s\S]+?)%>/g,po=/<%([\s\S]+?)%>/g,Kn=/<%=([\s\S]+?)%>/g,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,W=RegExp(Y.source),X=/^\s+/,ee=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,me=/,? & /,Ee=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Te=/[()=,{}\[\]\/\s]/,Ie=/\\(\\)?/g,Ve=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ve=/\w*$/,Le=/^[-+]0x[0-9a-f]+$/i,vt=/^0b[01]+$/i,Rt=/^\[object .+?Constructor\]$/,at=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Un=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Et=/($^)/,Xs=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Js="\\u0300-\\u036f",Qs="\\ufe20-\\ufe2f",ep="\\u20d0-\\u20ff",Pa=Js+Qs+ep,Ta="\\u2700-\\u27bf",Aa="a-z\\xdf-\\xf6\\xf8-\\xff",tp="\\xac\\xb1\\xd7\\xf7",np="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",op="\\u2000-\\u206f",ip=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Na="A-Z\\xc0-\\xd6\\xd8-\\xde",Ra="\\ufe0e\\ufe0f",Da=tp+np+op+ip,gi="['\u2019]",ap="["+Ao+"]",_a="["+Da+"]",No="["+Pa+"]",Ma="\\d+",rp="["+Ta+"]",xa="["+Aa+"]",Ia="[^"+Ao+Da+Ma+Ta+Aa+Na+"]",mi="\\ud83c[\\udffb-\\udfff]",sp="(?:"+No+"|"+mi+")",La="[^"+Ao+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",yi="[\\ud800-\\udbff][\\udc00-\\udfff]",Yn="["+Na+"]",ja="\\u200d",Fa="(?:"+xa+"|"+Ia+")",pp="(?:"+Yn+"|"+Ia+")",ka="(?:"+gi+"(?:d|ll|m|re|s|t|ve))?",wa="(?:"+gi+"(?:D|LL|M|RE|S|T|VE))?",Ua=sp+"?",Ba="["+Ra+"]?",lp="(?:"+ja+"(?:"+[La,hi,yi].join("|")+")"+Ba+Ua+")*",dp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",za=Ba+Ua+lp,up="(?:"+[rp,hi,yi].join("|")+")"+za,fp="(?:"+[La+No+"?",No,hi,yi,ap].join("|")+")",gp=RegExp(gi,"g"),mp=RegExp(No,"g"),vi=RegExp(mi+"(?="+mi+")|"+fp+za,"g"),hp=RegExp([Yn+"?"+xa+"+"+ka+"(?="+[_a,Yn,"$"].join("|")+")",pp+"+"+wa+"(?="+[_a,Yn+Fa,"$"].join("|")+")",Yn+"?"+Fa+"+"+ka,Yn+"+"+wa,cp,dp,Ma,up].join("|"),"g"),yp=RegExp("["+ja+Ao+Pa+Ra+"]"),vp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bp=-1,pt={};pt[Qe]=pt[Xe]=pt[zt]=pt[Lt]=pt[Nt]=pt[Tn]=pt[an]=pt[Wt]=pt[gn]=!0,pt[je]=pt[it]=pt[Pe]=pt[ut]=pt[qe]=pt[ht]=pt[De]=pt[Ct]=pt[We]=pt[Bt]=pt[pe]=pt[ie]=pt[ye]=pt[he]=pt[Ke]=!1;var st={};st[je]=st[it]=st[Pe]=st[qe]=st[ut]=st[ht]=st[Qe]=st[Xe]=st[zt]=st[Lt]=st[Nt]=st[We]=st[Bt]=st[pe]=st[ie]=st[ye]=st[he]=st[be]=st[Tn]=st[an]=st[Wt]=st[gn]=!0,st[De]=st[Ct]=st[Ke]=!1;var Cp={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ep={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Op={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tp=parseFloat,Ap=parseInt,Wa=typeof r.g=="object"&&r.g&&r.g.Object===Object&&r.g,Np=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Wa||Np||Function("return this")(),Ga=v&&!v.nodeType&&v,lo=Ga&&!0&&O&&!O.nodeType&&O,qa=lo&&lo.exports===Ga,Si=qa&&Wa.process,Zt=function(){try{var J=lo&&lo.require&&lo.require("util").types;return J||Si&&Si.binding&&Si.binding("util")}catch(ae){}}(),$a=Zt&&Zt.isArrayBuffer,Va=Zt&&Zt.isDate,Ha=Zt&&Zt.isMap,Ka=Zt&&Zt.isRegExp,Ya=Zt&&Zt.isSet,Za=Zt&&Zt.isTypedArray;function Gt(J,ae,oe){switch(oe.length){case 0:return J.call(ae);case 1:return J.call(ae,oe[0]);case 2:return J.call(ae,oe[0],oe[1]);case 3:return J.call(ae,oe[0],oe[1],oe[2])}return J.apply(ae,oe)}function Rp(J,ae,oe,Oe){for(var ke=-1,et=J==null?0:J.length;++ke<et;){var St=J[ke];ae(Oe,St,oe(St),J)}return Oe}function Xt(J,ae){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe&&ae(J[oe],oe,J)!==!1;);return J}function Dp(J,ae){for(var oe=J==null?0:J.length;oe--&&ae(J[oe],oe,J)!==!1;);return J}function Xa(J,ae){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe;)if(!ae(J[oe],oe,J))return!1;return!0}function Rn(J,ae){for(var oe=-1,Oe=J==null?0:J.length,ke=0,et=[];++oe<Oe;){var St=J[oe];ae(St,oe,J)&&(et[ke++]=St)}return et}function Ro(J,ae){var oe=J==null?0:J.length;return!!oe&&Zn(J,ae,0)>-1}function bi(J,ae,oe){for(var Oe=-1,ke=J==null?0:J.length;++Oe<ke;)if(oe(ae,J[Oe]))return!0;return!1}function lt(J,ae){for(var oe=-1,Oe=J==null?0:J.length,ke=Array(Oe);++oe<Oe;)ke[oe]=ae(J[oe],oe,J);return ke}function Dn(J,ae){for(var oe=-1,Oe=ae.length,ke=J.length;++oe<Oe;)J[ke+oe]=ae[oe];return J}function Ci(J,ae,oe,Oe){var ke=-1,et=J==null?0:J.length;for(Oe&&et&&(oe=J[++ke]);++ke<et;)oe=ae(oe,J[ke],ke,J);return oe}function _p(J,ae,oe,Oe){var ke=J==null?0:J.length;for(Oe&&ke&&(oe=J[--ke]);ke--;)oe=ae(oe,J[ke],ke,J);return oe}function Ei(J,ae){for(var oe=-1,Oe=J==null?0:J.length;++oe<Oe;)if(ae(J[oe],oe,J))return!0;return!1}var Mp=Oi("length");function xp(J){return J.split("")}function Ip(J){return J.match(Ee)||[]}function Ja(J,ae,oe){var Oe;return oe(J,function(ke,et,St){if(ae(ke,et,St))return Oe=et,!1}),Oe}function Do(J,ae,oe,Oe){for(var ke=J.length,et=oe+(Oe?1:-1);Oe?et--:++et<ke;)if(ae(J[et],et,J))return et;return-1}function Zn(J,ae,oe){return ae===ae?$p(J,ae,oe):Do(J,Qa,oe)}function Lp(J,ae,oe,Oe){for(var ke=oe-1,et=J.length;++ke<et;)if(Oe(J[ke],ae))return ke;return-1}function Qa(J){return J!==J}function er(J,ae){var oe=J==null?0:J.length;return oe?Ti(J,ae)/oe:re}function Oi(J){return function(ae){return ae==null?o:ae[J]}}function Pi(J){return function(ae){return J==null?o:J[ae]}}function tr(J,ae,oe,Oe,ke){return ke(J,function(et,St,rt){oe=Oe?(Oe=!1,et):ae(oe,et,St,rt)}),oe}function jp(J,ae){var oe=J.length;for(J.sort(ae);oe--;)J[oe]=J[oe].value;return J}function Ti(J,ae){for(var oe,Oe=-1,ke=J.length;++Oe<ke;){var et=ae(J[Oe]);et!==o&&(oe=oe===o?et:oe+et)}return oe}function Ai(J,ae){for(var oe=-1,Oe=Array(J);++oe<J;)Oe[oe]=ae(oe);return Oe}function Fp(J,ae){return lt(ae,function(oe){return[oe,J[oe]]})}function nr(J){return J&&J.slice(0,rr(J)+1).replace(X,"")}function qt(J){return function(ae){return J(ae)}}function Ni(J,ae){return lt(ae,function(oe){return J[oe]})}function co(J,ae){return J.has(ae)}function or(J,ae){for(var oe=-1,Oe=J.length;++oe<Oe&&Zn(ae,J[oe],0)>-1;);return oe}function ir(J,ae){for(var oe=J.length;oe--&&Zn(ae,J[oe],0)>-1;);return oe}function kp(J,ae){for(var oe=J.length,Oe=0;oe--;)J[oe]===ae&&++Oe;return Oe}var wp=Pi(Cp),Up=Pi(Ep);function Bp(J){return"\\"+Pp[J]}function zp(J,ae){return J==null?o:J[ae]}function Xn(J){return yp.test(J)}function Wp(J){return vp.test(J)}function Gp(J){for(var ae,oe=[];!(ae=J.next()).done;)oe.push(ae.value);return oe}function Ri(J){var ae=-1,oe=Array(J.size);return J.forEach(function(Oe,ke){oe[++ae]=[ke,Oe]}),oe}function ar(J,ae){return function(oe){return J(ae(oe))}}function _n(J,ae){for(var oe=-1,Oe=J.length,ke=0,et=[];++oe<Oe;){var St=J[oe];(St===ae||St===i)&&(J[oe]=i,et[ke++]=oe)}return et}function _o(J){var ae=-1,oe=Array(J.size);return J.forEach(function(Oe){oe[++ae]=Oe}),oe}function qp(J){var ae=-1,oe=Array(J.size);return J.forEach(function(Oe){oe[++ae]=[Oe,Oe]}),oe}function $p(J,ae,oe){for(var Oe=oe-1,ke=J.length;++Oe<ke;)if(J[Oe]===ae)return Oe;return-1}function Vp(J,ae,oe){for(var Oe=oe+1;Oe--;)if(J[Oe]===ae)return Oe;return Oe}function Jn(J){return Xn(J)?Kp(J):Mp(J)}function rn(J){return Xn(J)?Yp(J):xp(J)}function rr(J){for(var ae=J.length;ae--&&ee.test(J.charAt(ae)););return ae}var Hp=Pi(Op);function Kp(J){for(var ae=vi.lastIndex=0;vi.test(J);)++ae;return ae}function Yp(J){return J.match(vi)||[]}function Zp(J){return J.match(hp)||[]}var Xp=function J(ae){ae=ae==null?Pt:Mo.defaults(Pt.Object(),ae,Mo.pick(Pt,Sp));var oe=ae.Array,Oe=ae.Date,ke=ae.Error,et=ae.Function,St=ae.Math,rt=ae.Object,Di=ae.RegExp,Jp=ae.String,Jt=ae.TypeError,xo=oe.prototype,Qp=et.prototype,Qn=rt.prototype,Io=ae["__core-js_shared__"],Lo=Qp.toString,nt=Qn.hasOwnProperty,el=0,sr=function(){var e=/[^.]+$/.exec(Io&&Io.keys&&Io.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),jo=Qn.toString,tl=Lo.call(rt),nl=Pt._,ol=Di("^"+Lo.call(nt).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fo=qa?ae.Buffer:o,Mn=ae.Symbol,ko=ae.Uint8Array,pr=Fo?Fo.allocUnsafe:o,wo=ar(rt.getPrototypeOf,rt),lr=rt.create,dr=Qn.propertyIsEnumerable,Uo=xo.splice,cr=Mn?Mn.isConcatSpreadable:o,uo=Mn?Mn.iterator:o,Bn=Mn?Mn.toStringTag:o,Bo=function(){try{var e=$n(rt,"defineProperty");return e({},"",{}),e}catch(t){}}(),il=ae.clearTimeout!==Pt.clearTimeout&&ae.clearTimeout,al=Oe&&Oe.now!==Pt.Date.now&&Oe.now,rl=ae.setTimeout!==Pt.setTimeout&&ae.setTimeout,zo=St.ceil,Wo=St.floor,_i=rt.getOwnPropertySymbols,sl=Fo?Fo.isBuffer:o,ur=ae.isFinite,pl=xo.join,ll=ar(rt.keys,rt),bt=St.max,Dt=St.min,dl=Oe.now,cl=ae.parseInt,fr=St.random,ul=xo.reverse,Mi=$n(ae,"DataView"),fo=$n(ae,"Map"),xi=$n(ae,"Promise"),eo=$n(ae,"Set"),go=$n(ae,"WeakMap"),mo=$n(rt,"create"),Go=go&&new go,to={},fl=Vn(Mi),gl=Vn(fo),ml=Vn(xi),hl=Vn(eo),yl=Vn(go),qo=Mn?Mn.prototype:o,ho=qo?qo.valueOf:o,gr=qo?qo.toString:o;function L(e){if(ct(e)&&!we(e)&&!(e instanceof He)){if(e instanceof Qt)return e;if(nt.call(e,"__wrapped__"))return ms(e)}return new Qt(e)}var no=function(){function e(){}return function(t){if(!dt(t))return{};if(lr)return lr(t);e.prototype=t;var s=new e;return e.prototype=o,s}}();function $o(){}function Qt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}L.templateSettings={escape:Nn,evaluate:po,interpolate:Kn,variable:"",imports:{_:L}},L.prototype=$o.prototype,L.prototype.constructor=L,Qt.prototype=no($o.prototype),Qt.prototype.constructor=Qt;function He(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function vl(){var e=new He(this.__wrapped__);return e.__actions__=Ft(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ft(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ft(this.__views__),e}function Sl(){if(this.__filtered__){var e=new He(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function bl(){var e=this.__wrapped__.value(),t=this.__dir__,s=we(e),C=t<0,R=s?e.length:0,k=xd(0,R,this.__views__),G=k.start,K=k.end,Q=K-G,le=C?K:G-1,de=this.__iteratees__,fe=de.length,Se=0,Ae=Dt(Q,this.__takeCount__);if(!s||!C&&R==Q&&Ae==Q)return wr(e,this.__actions__);var Me=[];e:for(;Q--&&Se<Ae;){le+=t;for(var ze=-1,xe=e[le];++ze<fe;){var $e=de[ze],Ye=$e.iteratee,Ht=$e.type,It=Ye(xe);if(Ht==$)xe=It;else if(!It){if(Ht==B)continue e;break e}}Me[Se++]=xe}return Me}He.prototype=no($o.prototype),He.prototype.constructor=He;function zn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Cl(){this.__data__=mo?mo(null):{},this.size=0}function El(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Ol(e){var t=this.__data__;if(mo){var s=t[e];return s===d?o:s}return nt.call(t,e)?t[e]:o}function Pl(e){var t=this.__data__;return mo?t[e]!==o:nt.call(t,e)}function Tl(e,t){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=mo&&t===o?d:t,this}zn.prototype.clear=Cl,zn.prototype.delete=El,zn.prototype.get=Ol,zn.prototype.has=Pl,zn.prototype.set=Tl;function hn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Al(){this.__data__=[],this.size=0}function Nl(e){var t=this.__data__,s=Vo(t,e);if(s<0)return!1;var C=t.length-1;return s==C?t.pop():Uo.call(t,s,1),--this.size,!0}function Rl(e){var t=this.__data__,s=Vo(t,e);return s<0?o:t[s][1]}function Dl(e){return Vo(this.__data__,e)>-1}function _l(e,t){var s=this.__data__,C=Vo(s,e);return C<0?(++this.size,s.push([e,t])):s[C][1]=t,this}hn.prototype.clear=Al,hn.prototype.delete=Nl,hn.prototype.get=Rl,hn.prototype.has=Dl,hn.prototype.set=_l;function yn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var C=e[t];this.set(C[0],C[1])}}function Ml(){this.size=0,this.__data__={hash:new zn,map:new(fo||hn),string:new zn}}function xl(e){var t=ii(this,e).delete(e);return this.size-=t?1:0,t}function Il(e){return ii(this,e).get(e)}function Ll(e){return ii(this,e).has(e)}function jl(e,t){var s=ii(this,e),C=s.size;return s.set(e,t),this.size+=s.size==C?0:1,this}yn.prototype.clear=Ml,yn.prototype.delete=xl,yn.prototype.get=Il,yn.prototype.has=Ll,yn.prototype.set=jl;function Wn(e){var t=-1,s=e==null?0:e.length;for(this.__data__=new yn;++t<s;)this.add(e[t])}function Fl(e){return this.__data__.set(e,d),this}function kl(e){return this.__data__.has(e)}Wn.prototype.add=Wn.prototype.push=Fl,Wn.prototype.has=kl;function sn(e){var t=this.__data__=new hn(e);this.size=t.size}function wl(){this.__data__=new hn,this.size=0}function Ul(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}function Bl(e){return this.__data__.get(e)}function zl(e){return this.__data__.has(e)}function Wl(e,t){var s=this.__data__;if(s instanceof hn){var C=s.__data__;if(!fo||C.length<p-1)return C.push([e,t]),this.size=++s.size,this;s=this.__data__=new yn(C)}return s.set(e,t),this.size=s.size,this}sn.prototype.clear=wl,sn.prototype.delete=Ul,sn.prototype.get=Bl,sn.prototype.has=zl,sn.prototype.set=Wl;function mr(e,t){var s=we(e),C=!s&&Hn(e),R=!s&&!C&&Fn(e),k=!s&&!C&&!R&&ro(e),G=s||C||R||k,K=G?Ai(e.length,Jp):[],Q=K.length;for(var le in e)(t||nt.call(e,le))&&!(G&&(le=="length"||R&&(le=="offset"||le=="parent")||k&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||Cn(le,Q)))&&K.push(le);return K}function hr(e){var t=e.length;return t?e[Gi(0,t-1)]:o}function Gl(e,t){return ai(Ft(e),Gn(t,0,e.length))}function ql(e){return ai(Ft(e))}function Ii(e,t,s){(s!==o&&!pn(e[t],s)||s===o&&!(t in e))&&vn(e,t,s)}function yo(e,t,s){var C=e[t];(!(nt.call(e,t)&&pn(C,s))||s===o&&!(t in e))&&vn(e,t,s)}function Vo(e,t){for(var s=e.length;s--;)if(pn(e[s][0],t))return s;return-1}function $l(e,t,s,C){return xn(e,function(R,k,G){t(C,R,s(R),G)}),C}function yr(e,t){return e&&un(t,Ot(t),e)}function Vl(e,t){return e&&un(t,wt(t),e)}function vn(e,t,s){t=="__proto__"&&Bo?Bo(e,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[t]=s}function Li(e,t){for(var s=-1,C=t.length,R=oe(C),k=e==null;++s<C;)R[s]=k?o:ga(e,t[s]);return R}function Gn(e,t,s){return e===e&&(s!==o&&(e=e<=s?e:s),t!==o&&(e=e>=t?e:t)),e}function en(e,t,s,C,R,k){var G,K=t&h,Q=t&u,le=t&f;if(s&&(G=R?s(e,C,R,k):s(e)),G!==o)return G;if(!dt(e))return e;var de=we(e);if(de){if(G=Ld(e),!K)return Ft(e,G)}else{var fe=_t(e),Se=fe==Ct||fe==Ue;if(Fn(e))return zr(e,K);if(fe==pe||fe==je||Se&&!R){if(G=Q||Se?{}:rs(e),!K)return Q?Od(e,Vl(G,e)):Ed(e,yr(G,e))}else{if(!st[fe])return R?e:{};G=jd(e,fe,K)}}k||(k=new sn);var Ae=k.get(e);if(Ae)return Ae;k.set(e,G),js(e)?e.forEach(function(xe){G.add(en(xe,t,s,xe,e,k))}):Is(e)&&e.forEach(function(xe,$e){G.set($e,en(xe,t,s,$e,e,k))});var Me=le?Q?ea:Qi:Q?wt:Ot,ze=de?o:Me(e);return Xt(ze||e,function(xe,$e){ze&&($e=xe,xe=e[$e]),yo(G,$e,en(xe,t,s,$e,e,k))}),G}function Hl(e){var t=Ot(e);return function(s){return vr(s,e,t)}}function vr(e,t,s){var C=s.length;if(e==null)return!C;for(e=rt(e);C--;){var R=s[C],k=t[R],G=e[R];if(G===o&&!(R in e)||!k(G))return!1}return!0}function Sr(e,t,s){if(typeof e!="function")throw new Jt(l);return Po(function(){e.apply(o,s)},t)}function vo(e,t,s,C){var R=-1,k=Ro,G=!0,K=e.length,Q=[],le=t.length;if(!K)return Q;s&&(t=lt(t,qt(s))),C?(k=bi,G=!1):t.length>=p&&(k=co,G=!1,t=new Wn(t));e:for(;++R<K;){var de=e[R],fe=s==null?de:s(de);if(de=C||de!==0?de:0,G&&fe===fe){for(var Se=le;Se--;)if(t[Se]===fe)continue e;Q.push(de)}else k(t,fe,C)||Q.push(de)}return Q}var xn=Vr(cn),br=Vr(Fi,!0);function Kl(e,t){var s=!0;return xn(e,function(C,R,k){return s=!!t(C,R,k),s}),s}function Ho(e,t,s){for(var C=-1,R=e.length;++C<R;){var k=e[C],G=t(k);if(G!=null&&(K===o?G===G&&!Vt(G):s(G,K)))var K=G,Q=k}return Q}function Yl(e,t,s,C){var R=e.length;for(s=Be(s),s<0&&(s=-s>R?0:R+s),C=C===o||C>R?R:Be(C),C<0&&(C+=R),C=s>C?0:ks(C);s<C;)e[s++]=t;return e}function Cr(e,t){var s=[];return xn(e,function(C,R,k){t(C,R,k)&&s.push(C)}),s}function Tt(e,t,s,C,R){var k=-1,G=e.length;for(s||(s=kd),R||(R=[]);++k<G;){var K=e[k];t>0&&s(K)?t>1?Tt(K,t-1,s,C,R):Dn(R,K):C||(R[R.length]=K)}return R}var ji=Hr(),Er=Hr(!0);function cn(e,t){return e&&ji(e,t,Ot)}function Fi(e,t){return e&&Er(e,t,Ot)}function Ko(e,t){return Rn(t,function(s){return En(e[s])})}function qn(e,t){t=Ln(t,e);for(var s=0,C=t.length;e!=null&&s<C;)e=e[fn(t[s++])];return s&&s==C?e:o}function Or(e,t,s){var C=t(e);return we(e)?C:Dn(C,s(e))}function Mt(e){return e==null?e===o?Ze:Fe:Bn&&Bn in rt(e)?Md(e):qd(e)}function ki(e,t){return e>t}function Zl(e,t){return e!=null&&nt.call(e,t)}function Xl(e,t){return e!=null&&t in rt(e)}function Jl(e,t,s){return e>=Dt(t,s)&&e<bt(t,s)}function wi(e,t,s){for(var C=s?bi:Ro,R=e[0].length,k=e.length,G=k,K=oe(k),Q=1/0,le=[];G--;){var de=e[G];G&&t&&(de=lt(de,qt(t))),Q=Dt(de.length,Q),K[G]=!s&&(t||R>=120&&de.length>=120)?new Wn(G&&de):o}de=e[0];var fe=-1,Se=K[0];e:for(;++fe<R&&le.length<Q;){var Ae=de[fe],Me=t?t(Ae):Ae;if(Ae=s||Ae!==0?Ae:0,!(Se?co(Se,Me):C(le,Me,s))){for(G=k;--G;){var ze=K[G];if(!(ze?co(ze,Me):C(e[G],Me,s)))continue e}Se&&Se.push(Me),le.push(Ae)}}return le}function Ql(e,t,s,C){return cn(e,function(R,k,G){t(C,s(R),k,G)}),C}function So(e,t,s){t=Ln(t,e),e=ds(e,t);var C=e==null?e:e[fn(nn(t))];return C==null?o:Gt(C,e,s)}function Pr(e){return ct(e)&&Mt(e)==je}function ed(e){return ct(e)&&Mt(e)==Pe}function td(e){return ct(e)&&Mt(e)==ht}function bo(e,t,s,C,R){return e===t?!0:e==null||t==null||!ct(e)&&!ct(t)?e!==e&&t!==t:nd(e,t,s,C,bo,R)}function nd(e,t,s,C,R,k){var G=we(e),K=we(t),Q=G?it:_t(e),le=K?it:_t(t);Q=Q==je?pe:Q,le=le==je?pe:le;var de=Q==pe,fe=le==pe,Se=Q==le;if(Se&&Fn(e)){if(!Fn(t))return!1;G=!0,de=!1}if(Se&&!de)return k||(k=new sn),G||ro(e)?os(e,t,s,C,R,k):Dd(e,t,Q,s,C,R,k);if(!(s&S)){var Ae=de&&nt.call(e,"__wrapped__"),Me=fe&&nt.call(t,"__wrapped__");if(Ae||Me){var ze=Ae?e.value():e,xe=Me?t.value():t;return k||(k=new sn),R(ze,xe,s,C,k)}}return Se?(k||(k=new sn),_d(e,t,s,C,R,k)):!1}function od(e){return ct(e)&&_t(e)==We}function Ui(e,t,s,C){var R=s.length,k=R,G=!C;if(e==null)return!k;for(e=rt(e);R--;){var K=s[R];if(G&&K[2]?K[1]!==e[K[0]]:!(K[0]in e))return!1}for(;++R<k;){K=s[R];var Q=K[0],le=e[Q],de=K[1];if(G&&K[2]){if(le===o&&!(Q in e))return!1}else{var fe=new sn;if(C)var Se=C(le,de,Q,e,t,fe);if(!(Se===o?bo(de,le,S|y,C,fe):Se))return!1}}return!0}function Tr(e){if(!dt(e)||Ud(e))return!1;var t=En(e)?ol:Rt;return t.test(Vn(e))}function id(e){return ct(e)&&Mt(e)==ie}function ad(e){return ct(e)&&_t(e)==ye}function rd(e){return ct(e)&&ci(e.length)&&!!pt[Mt(e)]}function Ar(e){return typeof e=="function"?e:e==null?Ut:typeof e=="object"?we(e)?Dr(e[0],e[1]):Rr(e):Ks(e)}function Bi(e){if(!Oo(e))return ll(e);var t=[];for(var s in rt(e))nt.call(e,s)&&s!="constructor"&&t.push(s);return t}function sd(e){if(!dt(e))return Gd(e);var t=Oo(e),s=[];for(var C in e)C=="constructor"&&(t||!nt.call(e,C))||s.push(C);return s}function zi(e,t){return e<t}function Nr(e,t){var s=-1,C=kt(e)?oe(e.length):[];return xn(e,function(R,k,G){C[++s]=t(R,k,G)}),C}function Rr(e){var t=na(e);return t.length==1&&t[0][2]?ps(t[0][0],t[0][1]):function(s){return s===e||Ui(s,e,t)}}function Dr(e,t){return ia(e)&&ss(t)?ps(fn(e),t):function(s){var C=ga(s,e);return C===o&&C===t?ma(s,e):bo(t,C,S|y)}}function Yo(e,t,s,C,R){e!==t&&ji(t,function(k,G){if(R||(R=new sn),dt(k))pd(e,t,G,s,Yo,C,R);else{var K=C?C(ra(e,G),k,G+"",e,t,R):o;K===o&&(K=k),Ii(e,G,K)}},wt)}function pd(e,t,s,C,R,k,G){var K=ra(e,s),Q=ra(t,s),le=G.get(Q);if(le){Ii(e,s,le);return}var de=k?k(K,Q,s+"",e,t,G):o,fe=de===o;if(fe){var Se=we(Q),Ae=!Se&&Fn(Q),Me=!Se&&!Ae&&ro(Q);de=Q,Se||Ae||Me?we(K)?de=K:ft(K)?de=Ft(K):Ae?(fe=!1,de=zr(Q,!0)):Me?(fe=!1,de=Wr(Q,!0)):de=[]:To(Q)||Hn(Q)?(de=K,Hn(K)?de=ws(K):(!dt(K)||En(K))&&(de=rs(Q))):fe=!1}fe&&(G.set(Q,de),R(de,Q,C,k,G),G.delete(Q)),Ii(e,s,de)}function _r(e,t){var s=e.length;if(!!s)return t+=t<0?s:0,Cn(t,s)?e[t]:o}function Mr(e,t,s){t.length?t=lt(t,function(k){return we(k)?function(G){return qn(G,k.length===1?k[0]:k)}:k}):t=[Ut];var C=-1;t=lt(t,qt(_e()));var R=Nr(e,function(k,G,K){var Q=lt(t,function(le){return le(k)});return{criteria:Q,index:++C,value:k}});return jp(R,function(k,G){return Cd(k,G,s)})}function ld(e,t){return xr(e,t,function(s,C){return ma(e,C)})}function xr(e,t,s){for(var C=-1,R=t.length,k={};++C<R;){var G=t[C],K=qn(e,G);s(K,G)&&Co(k,Ln(G,e),K)}return k}function dd(e){return function(t){return qn(t,e)}}function Wi(e,t,s,C){var R=C?Lp:Zn,k=-1,G=t.length,K=e;for(e===t&&(t=Ft(t)),s&&(K=lt(e,qt(s)));++k<G;)for(var Q=0,le=t[k],de=s?s(le):le;(Q=R(K,de,Q,C))>-1;)K!==e&&Uo.call(K,Q,1),Uo.call(e,Q,1);return e}function Ir(e,t){for(var s=e?t.length:0,C=s-1;s--;){var R=t[s];if(s==C||R!==k){var k=R;Cn(R)?Uo.call(e,R,1):Vi(e,R)}}return e}function Gi(e,t){return e+Wo(fr()*(t-e+1))}function cd(e,t,s,C){for(var R=-1,k=bt(zo((t-e)/(s||1)),0),G=oe(k);k--;)G[C?k:++R]=e,e+=s;return G}function qi(e,t){var s="";if(!e||t<1||t>V)return s;do t%2&&(s+=e),t=Wo(t/2),t&&(e+=e);while(t);return s}function Ge(e,t){return sa(ls(e,t,Ut),e+"")}function ud(e){return hr(so(e))}function fd(e,t){var s=so(e);return ai(s,Gn(t,0,s.length))}function Co(e,t,s,C){if(!dt(e))return e;t=Ln(t,e);for(var R=-1,k=t.length,G=k-1,K=e;K!=null&&++R<k;){var Q=fn(t[R]),le=s;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return e;if(R!=G){var de=K[Q];le=C?C(de,Q,K):o,le===o&&(le=dt(de)?de:Cn(t[R+1])?[]:{})}yo(K,Q,le),K=K[Q]}return e}var Lr=Go?function(e,t){return Go.set(e,t),e}:Ut,gd=Bo?function(e,t){return Bo(e,"toString",{configurable:!0,enumerable:!1,value:ya(t),writable:!0})}:Ut;function md(e){return ai(so(e))}function tn(e,t,s){var C=-1,R=e.length;t<0&&(t=-t>R?0:R+t),s=s>R?R:s,s<0&&(s+=R),R=t>s?0:s-t>>>0,t>>>=0;for(var k=oe(R);++C<R;)k[C]=e[C+t];return k}function hd(e,t){var s;return xn(e,function(C,R,k){return s=t(C,R,k),!s}),!!s}function Zo(e,t,s){var C=0,R=e==null?C:e.length;if(typeof t=="number"&&t===t&&R<=ge){for(;C<R;){var k=C+R>>>1,G=e[k];G!==null&&!Vt(G)&&(s?G<=t:G<t)?C=k+1:R=k}return R}return $i(e,t,Ut,s)}function $i(e,t,s,C){var R=0,k=e==null?0:e.length;if(k===0)return 0;t=s(t);for(var G=t!==t,K=t===null,Q=Vt(t),le=t===o;R<k;){var de=Wo((R+k)/2),fe=s(e[de]),Se=fe!==o,Ae=fe===null,Me=fe===fe,ze=Vt(fe);if(G)var xe=C||Me;else le?xe=Me&&(C||Se):K?xe=Me&&Se&&(C||!Ae):Q?xe=Me&&Se&&!Ae&&(C||!ze):Ae||ze?xe=!1:xe=C?fe<=t:fe<t;xe?R=de+1:k=de}return Dt(k,te)}function jr(e,t){for(var s=-1,C=e.length,R=0,k=[];++s<C;){var G=e[s],K=t?t(G):G;if(!s||!pn(K,Q)){var Q=K;k[R++]=G===0?0:G}}return k}function Fr(e){return typeof e=="number"?e:Vt(e)?re:+e}function $t(e){if(typeof e=="string")return e;if(we(e))return lt(e,$t)+"";if(Vt(e))return gr?gr.call(e):"";var t=e+"";return t=="0"&&1/e==-H?"-0":t}function In(e,t,s){var C=-1,R=Ro,k=e.length,G=!0,K=[],Q=K;if(s)G=!1,R=bi;else if(k>=p){var le=t?null:Nd(e);if(le)return _o(le);G=!1,R=co,Q=new Wn}else Q=t?[]:K;e:for(;++C<k;){var de=e[C],fe=t?t(de):de;if(de=s||de!==0?de:0,G&&fe===fe){for(var Se=Q.length;Se--;)if(Q[Se]===fe)continue e;t&&Q.push(fe),K.push(de)}else R(Q,fe,s)||(Q!==K&&Q.push(fe),K.push(de))}return K}function Vi(e,t){return t=Ln(t,e),e=ds(e,t),e==null||delete e[fn(nn(t))]}function kr(e,t,s,C){return Co(e,t,s(qn(e,t)),C)}function Xo(e,t,s,C){for(var R=e.length,k=C?R:-1;(C?k--:++k<R)&&t(e[k],k,e););return s?tn(e,C?0:k,C?k+1:R):tn(e,C?k+1:0,C?R:k)}function wr(e,t){var s=e;return s instanceof He&&(s=s.value()),Ci(t,function(C,R){return R.func.apply(R.thisArg,Dn([C],R.args))},s)}function Hi(e,t,s){var C=e.length;if(C<2)return C?In(e[0]):[];for(var R=-1,k=oe(C);++R<C;)for(var G=e[R],K=-1;++K<C;)K!=R&&(k[R]=vo(k[R]||G,e[K],t,s));return In(Tt(k,1),t,s)}function Ur(e,t,s){for(var C=-1,R=e.length,k=t.length,G={};++C<R;){var K=C<k?t[C]:o;s(G,e[C],K)}return G}function Ki(e){return ft(e)?e:[]}function Yi(e){return typeof e=="function"?e:Ut}function Ln(e,t){return we(e)?e:ia(e,t)?[e]:gs(tt(e))}var yd=Ge;function jn(e,t,s){var C=e.length;return s=s===o?C:s,!t&&s>=C?e:tn(e,t,s)}var Br=il||function(e){return Pt.clearTimeout(e)};function zr(e,t){if(t)return e.slice();var s=e.length,C=pr?pr(s):new e.constructor(s);return e.copy(C),C}function Zi(e){var t=new e.constructor(e.byteLength);return new ko(t).set(new ko(e)),t}function vd(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function Sd(e){var t=new e.constructor(e.source,ve.exec(e));return t.lastIndex=e.lastIndex,t}function bd(e){return ho?rt(ho.call(e)):{}}function Wr(e,t){var s=t?Zi(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function Gr(e,t){if(e!==t){var s=e!==o,C=e===null,R=e===e,k=Vt(e),G=t!==o,K=t===null,Q=t===t,le=Vt(t);if(!K&&!le&&!k&&e>t||k&&G&&Q&&!K&&!le||C&&G&&Q||!s&&Q||!R)return 1;if(!C&&!k&&!le&&e<t||le&&s&&R&&!C&&!k||K&&s&&R||!G&&R||!Q)return-1}return 0}function Cd(e,t,s){for(var C=-1,R=e.criteria,k=t.criteria,G=R.length,K=s.length;++C<G;){var Q=Gr(R[C],k[C]);if(Q){if(C>=K)return Q;var le=s[C];return Q*(le=="desc"?-1:1)}}return e.index-t.index}function qr(e,t,s,C){for(var R=-1,k=e.length,G=s.length,K=-1,Q=t.length,le=bt(k-G,0),de=oe(Q+le),fe=!C;++K<Q;)de[K]=t[K];for(;++R<G;)(fe||R<k)&&(de[s[R]]=e[R]);for(;le--;)de[K++]=e[R++];return de}function $r(e,t,s,C){for(var R=-1,k=e.length,G=-1,K=s.length,Q=-1,le=t.length,de=bt(k-K,0),fe=oe(de+le),Se=!C;++R<de;)fe[R]=e[R];for(var Ae=R;++Q<le;)fe[Ae+Q]=t[Q];for(;++G<K;)(Se||R<k)&&(fe[Ae+s[G]]=e[R++]);return fe}function Ft(e,t){var s=-1,C=e.length;for(t||(t=oe(C));++s<C;)t[s]=e[s];return t}function un(e,t,s,C){var R=!s;s||(s={});for(var k=-1,G=t.length;++k<G;){var K=t[k],Q=C?C(s[K],e[K],K,s,e):o;Q===o&&(Q=e[K]),R?vn(s,K,Q):yo(s,K,Q)}return s}function Ed(e,t){return un(e,oa(e),t)}function Od(e,t){return un(e,is(e),t)}function Jo(e,t){return function(s,C){var R=we(s)?Rp:$l,k=t?t():{};return R(s,e,_e(C,2),k)}}function oo(e){return Ge(function(t,s){var C=-1,R=s.length,k=R>1?s[R-1]:o,G=R>2?s[2]:o;for(k=e.length>3&&typeof k=="function"?(R--,k):o,G&&xt(s[0],s[1],G)&&(k=R<3?o:k,R=1),t=rt(t);++C<R;){var K=s[C];K&&e(t,K,C,k)}return t})}function Vr(e,t){return function(s,C){if(s==null)return s;if(!kt(s))return e(s,C);for(var R=s.length,k=t?R:-1,G=rt(s);(t?k--:++k<R)&&C(G[k],k,G)!==!1;);return s}}function Hr(e){return function(t,s,C){for(var R=-1,k=rt(t),G=C(t),K=G.length;K--;){var Q=G[e?K:++R];if(s(k[Q],Q,k)===!1)break}return t}}function Pd(e,t,s){var C=t&b,R=Eo(e);function k(){var G=this&&this!==Pt&&this instanceof k?R:e;return G.apply(C?s:this,arguments)}return k}function Kr(e){return function(t){t=tt(t);var s=Xn(t)?rn(t):o,C=s?s[0]:t.charAt(0),R=s?jn(s,1).join(""):t.slice(1);return C[e]()+R}}function io(e){return function(t){return Ci(Vs($s(t).replace(gp,"")),e,"")}}function Eo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=no(e.prototype),C=e.apply(s,t);return dt(C)?C:s}}function Td(e,t,s){var C=Eo(e);function R(){for(var k=arguments.length,G=oe(k),K=k,Q=ao(R);K--;)G[K]=arguments[K];var le=k<3&&G[0]!==Q&&G[k-1]!==Q?[]:_n(G,Q);if(k-=le.length,k<s)return Qr(e,t,Qo,R.placeholder,o,G,le,o,o,s-k);var de=this&&this!==Pt&&this instanceof R?C:e;return Gt(de,this,G)}return R}function Yr(e){return function(t,s,C){var R=rt(t);if(!kt(t)){var k=_e(s,3);t=Ot(t),s=function(K){return k(R[K],K,R)}}var G=e(t,s,C);return G>-1?R[k?t[G]:G]:o}}function Zr(e){return bn(function(t){var s=t.length,C=s,R=Qt.prototype.thru;for(e&&t.reverse();C--;){var k=t[C];if(typeof k!="function")throw new Jt(l);if(R&&!G&&oi(k)=="wrapper")var G=new Qt([],!0)}for(C=G?C:s;++C<s;){k=t[C];var K=oi(k),Q=K=="wrapper"?ta(k):o;Q&&aa(Q[0])&&Q[1]==(M|N|A|x)&&!Q[4].length&&Q[9]==1?G=G[oi(Q[0])].apply(G,Q[3]):G=k.length==1&&aa(k)?G[K]():G.thru(k)}return function(){var le=arguments,de=le[0];if(G&&le.length==1&&we(de))return G.plant(de).value();for(var fe=0,Se=s?t[fe].apply(this,le):de;++fe<s;)Se=t[fe].call(this,Se);return Se}})}function Qo(e,t,s,C,R,k,G,K,Q,le){var de=t&M,fe=t&b,Se=t&P,Ae=t&(N|T),Me=t&_,ze=Se?o:Eo(e);function xe(){for(var $e=arguments.length,Ye=oe($e),Ht=$e;Ht--;)Ye[Ht]=arguments[Ht];if(Ae)var It=ao(xe),Kt=kp(Ye,It);if(C&&(Ye=qr(Ye,C,R,Ae)),k&&(Ye=$r(Ye,k,G,Ae)),$e-=Kt,Ae&&$e<le){var gt=_n(Ye,It);return Qr(e,t,Qo,xe.placeholder,s,Ye,gt,K,Q,le-$e)}var ln=fe?s:this,Pn=Se?ln[e]:e;return $e=Ye.length,K?Ye=$d(Ye,K):Me&&$e>1&&Ye.reverse(),de&&Q<$e&&(Ye.length=Q),this&&this!==Pt&&this instanceof xe&&(Pn=ze||Eo(Pn)),Pn.apply(ln,Ye)}return xe}function Xr(e,t){return function(s,C){return Ql(s,e,t(C),{})}}function ei(e,t){return function(s,C){var R;if(s===o&&C===o)return t;if(s!==o&&(R=s),C!==o){if(R===o)return C;typeof s=="string"||typeof C=="string"?(s=$t(s),C=$t(C)):(s=Fr(s),C=Fr(C)),R=e(s,C)}return R}}function Xi(e){return bn(function(t){return t=lt(t,qt(_e())),Ge(function(s){var C=this;return e(t,function(R){return Gt(R,C,s)})})})}function ti(e,t){t=t===o?" ":$t(t);var s=t.length;if(s<2)return s?qi(t,e):t;var C=qi(t,zo(e/Jn(t)));return Xn(t)?jn(rn(C),0,e).join(""):C.slice(0,e)}function Ad(e,t,s,C){var R=t&b,k=Eo(e);function G(){for(var K=-1,Q=arguments.length,le=-1,de=C.length,fe=oe(de+Q),Se=this&&this!==Pt&&this instanceof G?k:e;++le<de;)fe[le]=C[le];for(;Q--;)fe[le++]=arguments[++K];return Gt(Se,R?s:this,fe)}return G}function Jr(e){return function(t,s,C){return C&&typeof C!="number"&&xt(t,s,C)&&(s=C=o),t=On(t),s===o?(s=t,t=0):s=On(s),C=C===o?t<s?1:-1:On(C),cd(t,s,C,e)}}function ni(e){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=on(t),s=on(s)),e(t,s)}}function Qr(e,t,s,C,R,k,G,K,Q,le){var de=t&N,fe=de?G:o,Se=de?o:G,Ae=de?k:o,Me=de?o:k;t|=de?A:D,t&=~(de?D:A),t&E||(t&=~(b|P));var ze=[e,t,R,Ae,fe,Me,Se,K,Q,le],xe=s.apply(o,ze);return aa(e)&&cs(xe,ze),xe.placeholder=C,us(xe,e,t)}function Ji(e){var t=St[e];return function(s,C){if(s=on(s),C=C==null?0:Dt(Be(C),292),C&&ur(s)){var R=(tt(s)+"e").split("e"),k=t(R[0]+"e"+(+R[1]+C));return R=(tt(k)+"e").split("e"),+(R[0]+"e"+(+R[1]-C))}return t(s)}}var Nd=eo&&1/_o(new eo([,-0]))[1]==H?function(e){return new eo(e)}:ba;function es(e){return function(t){var s=_t(t);return s==We?Ri(t):s==ye?qp(t):Fp(t,e(t))}}function Sn(e,t,s,C,R,k,G,K){var Q=t&P;if(!Q&&typeof e!="function")throw new Jt(l);var le=C?C.length:0;if(le||(t&=~(A|D),C=R=o),G=G===o?G:bt(Be(G),0),K=K===o?K:Be(K),le-=R?R.length:0,t&D){var de=C,fe=R;C=R=o}var Se=Q?o:ta(e),Ae=[e,t,s,C,R,de,fe,k,G,K];if(Se&&Wd(Ae,Se),e=Ae[0],t=Ae[1],s=Ae[2],C=Ae[3],R=Ae[4],K=Ae[9]=Ae[9]===o?Q?0:e.length:bt(Ae[9]-le,0),!K&&t&(N|T)&&(t&=~(N|T)),!t||t==b)var Me=Pd(e,t,s);else t==N||t==T?Me=Td(e,t,K):(t==A||t==(b|A))&&!R.length?Me=Ad(e,t,s,C):Me=Qo.apply(o,Ae);var ze=Se?Lr:cs;return us(ze(Me,Ae),e,t)}function ts(e,t,s,C){return e===o||pn(e,Qn[s])&&!nt.call(C,s)?t:e}function ns(e,t,s,C,R,k){return dt(e)&&dt(t)&&(k.set(t,e),Yo(e,t,o,ns,k),k.delete(t)),e}function Rd(e){return To(e)?o:e}function os(e,t,s,C,R,k){var G=s&S,K=e.length,Q=t.length;if(K!=Q&&!(G&&Q>K))return!1;var le=k.get(e),de=k.get(t);if(le&&de)return le==t&&de==e;var fe=-1,Se=!0,Ae=s&y?new Wn:o;for(k.set(e,t),k.set(t,e);++fe<K;){var Me=e[fe],ze=t[fe];if(C)var xe=G?C(ze,Me,fe,t,e,k):C(Me,ze,fe,e,t,k);if(xe!==o){if(xe)continue;Se=!1;break}if(Ae){if(!Ei(t,function($e,Ye){if(!co(Ae,Ye)&&(Me===$e||R(Me,$e,s,C,k)))return Ae.push(Ye)})){Se=!1;break}}else if(!(Me===ze||R(Me,ze,s,C,k))){Se=!1;break}}return k.delete(e),k.delete(t),Se}function Dd(e,t,s,C,R,k,G){switch(s){case qe:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Pe:return!(e.byteLength!=t.byteLength||!k(new ko(e),new ko(t)));case ut:case ht:case Bt:return pn(+e,+t);case De:return e.name==t.name&&e.message==t.message;case ie:case he:return e==t+"";case We:var K=Ri;case ye:var Q=C&S;if(K||(K=_o),e.size!=t.size&&!Q)return!1;var le=G.get(e);if(le)return le==t;C|=y,G.set(e,t);var de=os(K(e),K(t),C,R,k,G);return G.delete(e),de;case be:if(ho)return ho.call(e)==ho.call(t)}return!1}function _d(e,t,s,C,R,k){var G=s&S,K=Qi(e),Q=K.length,le=Qi(t),de=le.length;if(Q!=de&&!G)return!1;for(var fe=Q;fe--;){var Se=K[fe];if(!(G?Se in t:nt.call(t,Se)))return!1}var Ae=k.get(e),Me=k.get(t);if(Ae&&Me)return Ae==t&&Me==e;var ze=!0;k.set(e,t),k.set(t,e);for(var xe=G;++fe<Q;){Se=K[fe];var $e=e[Se],Ye=t[Se];if(C)var Ht=G?C(Ye,$e,Se,t,e,k):C($e,Ye,Se,e,t,k);if(!(Ht===o?$e===Ye||R($e,Ye,s,C,k):Ht)){ze=!1;break}xe||(xe=Se=="constructor")}if(ze&&!xe){var It=e.constructor,Kt=t.constructor;It!=Kt&&"constructor"in e&&"constructor"in t&&!(typeof It=="function"&&It instanceof It&&typeof Kt=="function"&&Kt instanceof Kt)&&(ze=!1)}return k.delete(e),k.delete(t),ze}function bn(e){return sa(ls(e,o,vs),e+"")}function Qi(e){return Or(e,Ot,oa)}function ea(e){return Or(e,wt,is)}var ta=Go?function(e){return Go.get(e)}:ba;function oi(e){for(var t=e.name+"",s=to[t],C=nt.call(to,t)?s.length:0;C--;){var R=s[C],k=R.func;if(k==null||k==e)return R.name}return t}function ao(e){var t=nt.call(L,"placeholder")?L:e;return t.placeholder}function _e(){var e=L.iteratee||va;return e=e===va?Ar:e,arguments.length?e(arguments[0],arguments[1]):e}function ii(e,t){var s=e.__data__;return wd(t)?s[typeof t=="string"?"string":"hash"]:s.map}function na(e){for(var t=Ot(e),s=t.length;s--;){var C=t[s],R=e[C];t[s]=[C,R,ss(R)]}return t}function $n(e,t){var s=zp(e,t);return Tr(s)?s:o}function Md(e){var t=nt.call(e,Bn),s=e[Bn];try{e[Bn]=o;var C=!0}catch(k){}var R=jo.call(e);return C&&(t?e[Bn]=s:delete e[Bn]),R}var oa=_i?function(e){return e==null?[]:(e=rt(e),Rn(_i(e),function(t){return dr.call(e,t)}))}:Ca,is=_i?function(e){for(var t=[];e;)Dn(t,oa(e)),e=wo(e);return t}:Ca,_t=Mt;(Mi&&_t(new Mi(new ArrayBuffer(1)))!=qe||fo&&_t(new fo)!=We||xi&&_t(xi.resolve())!=Ne||eo&&_t(new eo)!=ye||go&&_t(new go)!=Ke)&&(_t=function(e){var t=Mt(e),s=t==pe?e.constructor:o,C=s?Vn(s):"";if(C)switch(C){case fl:return qe;case gl:return We;case ml:return Ne;case hl:return ye;case yl:return Ke}return t});function xd(e,t,s){for(var C=-1,R=s.length;++C<R;){var k=s[C],G=k.size;switch(k.type){case"drop":e+=G;break;case"dropRight":t-=G;break;case"take":t=Dt(t,e+G);break;case"takeRight":e=bt(e,t-G);break}}return{start:e,end:t}}function Id(e){var t=e.match(ue);return t?t[1].split(me):[]}function as(e,t,s){t=Ln(t,e);for(var C=-1,R=t.length,k=!1;++C<R;){var G=fn(t[C]);if(!(k=e!=null&&s(e,G)))break;e=e[G]}return k||++C!=R?k:(R=e==null?0:e.length,!!R&&ci(R)&&Cn(G,R)&&(we(e)||Hn(e)))}function Ld(e){var t=e.length,s=new e.constructor(t);return t&&typeof e[0]=="string"&&nt.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function rs(e){return typeof e.constructor=="function"&&!Oo(e)?no(wo(e)):{}}function jd(e,t,s){var C=e.constructor;switch(t){case Pe:return Zi(e);case ut:case ht:return new C(+e);case qe:return vd(e,s);case Qe:case Xe:case zt:case Lt:case Nt:case Tn:case an:case Wt:case gn:return Wr(e,s);case We:return new C;case Bt:case he:return new C(e);case ie:return Sd(e);case ye:return new C;case be:return bd(e)}}function Fd(e,t){var s=t.length;if(!s)return e;var C=s-1;return t[C]=(s>1?"& ":"")+t[C],t=t.join(s>2?", ":" "),e.replace(se,`{
/* [wrapped with `+t+`] */
`)}function kd(e){return we(e)||Hn(e)||!!(cr&&e&&e[cr])}function Cn(e,t){var s=typeof e;return t=t==null?V:t,!!t&&(s=="number"||s!="symbol"&&Yt.test(e))&&e>-1&&e%1==0&&e<t}function xt(e,t,s){if(!dt(s))return!1;var C=typeof t;return(C=="number"?kt(s)&&Cn(t,s.length):C=="string"&&t in s)?pn(s[t],e):!1}function ia(e,t){if(we(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||Vt(e)?!0:q.test(e)||!j.test(e)||t!=null&&e in rt(t)}function wd(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function aa(e){var t=oi(e),s=L[t];if(typeof s!="function"||!(t in He.prototype))return!1;if(e===s)return!0;var C=ta(s);return!!C&&e===C[0]}function Ud(e){return!!sr&&sr in e}var Bd=Io?En:Ea;function Oo(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||Qn;return e===s}function ss(e){return e===e&&!dt(e)}function ps(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==o||e in rt(s))}}function zd(e){var t=li(e,function(C){return s.size===m&&s.clear(),C}),s=t.cache;return t}function Wd(e,t){var s=e[1],C=t[1],R=s|C,k=R<(b|P|M),G=C==M&&s==N||C==M&&s==x&&e[7].length<=t[8]||C==(M|x)&&t[7].length<=t[8]&&s==N;if(!(k||G))return e;C&b&&(e[2]=t[2],R|=s&b?0:E);var K=t[3];if(K){var Q=e[3];e[3]=Q?qr(Q,K,t[4]):K,e[4]=Q?_n(e[3],i):t[4]}return K=t[5],K&&(Q=e[5],e[5]=Q?$r(Q,K,t[6]):K,e[6]=Q?_n(e[5],i):t[6]),K=t[7],K&&(e[7]=K),C&M&&(e[8]=e[8]==null?t[8]:Dt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=R,e}function Gd(e){var t=[];if(e!=null)for(var s in rt(e))t.push(s);return t}function qd(e){return jo.call(e)}function ls(e,t,s){return t=bt(t===o?e.length-1:t,0),function(){for(var C=arguments,R=-1,k=bt(C.length-t,0),G=oe(k);++R<k;)G[R]=C[t+R];R=-1;for(var K=oe(t+1);++R<t;)K[R]=C[R];return K[t]=s(G),Gt(e,this,K)}}function ds(e,t){return t.length<2?e:qn(e,tn(t,0,-1))}function $d(e,t){for(var s=e.length,C=Dt(t.length,s),R=Ft(e);C--;){var k=t[C];e[C]=Cn(k,s)?R[k]:o}return e}function ra(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var cs=fs(Lr),Po=rl||function(e,t){return Pt.setTimeout(e,t)},sa=fs(gd);function us(e,t,s){var C=t+"";return sa(e,Fd(C,Vd(Id(C),s)))}function fs(e){var t=0,s=0;return function(){var C=dl(),R=z-(C-s);if(s=C,R>0){if(++t>=F)return arguments[0]}else t=0;return e.apply(o,arguments)}}function ai(e,t){var s=-1,C=e.length,R=C-1;for(t=t===o?C:t;++s<t;){var k=Gi(s,R),G=e[k];e[k]=e[s],e[s]=G}return e.length=t,e}var gs=zd(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Z,function(s,C,R,k){t.push(R?k.replace(Ie,"$1"):C||s)}),t});function fn(e){if(typeof e=="string"||Vt(e))return e;var t=e+"";return t=="0"&&1/e==-H?"-0":t}function Vn(e){if(e!=null){try{return Lo.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Vd(e,t){return Xt(Ce,function(s){var C="_."+s[0];t&s[1]&&!Ro(e,C)&&e.push(C)}),e.sort()}function ms(e){if(e instanceof He)return e.clone();var t=new Qt(e.__wrapped__,e.__chain__);return t.__actions__=Ft(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Hd(e,t,s){(s?xt(e,t,s):t===o)?t=1:t=bt(Be(t),0);var C=e==null?0:e.length;if(!C||t<1)return[];for(var R=0,k=0,G=oe(zo(C/t));R<C;)G[k++]=tn(e,R,R+=t);return G}function Kd(e){for(var t=-1,s=e==null?0:e.length,C=0,R=[];++t<s;){var k=e[t];k&&(R[C++]=k)}return R}function Yd(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),s=arguments[0],C=e;C--;)t[C-1]=arguments[C];return Dn(we(s)?Ft(s):[s],Tt(t,1))}var Zd=Ge(function(e,t){return ft(e)?vo(e,Tt(t,1,ft,!0)):[]}),Xd=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?vo(e,Tt(t,1,ft,!0),_e(s,2)):[]}),Jd=Ge(function(e,t){var s=nn(t);return ft(s)&&(s=o),ft(e)?vo(e,Tt(t,1,ft,!0),o,s):[]});function Qd(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),tn(e,t<0?0:t,C)):[]}function ec(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),t=C-t,tn(e,0,t<0?0:t)):[]}function tc(e,t){return e&&e.length?Xo(e,_e(t,3),!0,!0):[]}function nc(e,t){return e&&e.length?Xo(e,_e(t,3),!0):[]}function oc(e,t,s,C){var R=e==null?0:e.length;return R?(s&&typeof s!="number"&&xt(e,t,s)&&(s=0,C=R),Yl(e,t,s,C)):[]}function hs(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var R=s==null?0:Be(s);return R<0&&(R=bt(C+R,0)),Do(e,_e(t,3),R)}function ys(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var R=C-1;return s!==o&&(R=Be(s),R=s<0?bt(C+R,0):Dt(R,C-1)),Do(e,_e(t,3),R,!0)}function vs(e){var t=e==null?0:e.length;return t?Tt(e,1):[]}function ic(e){var t=e==null?0:e.length;return t?Tt(e,H):[]}function ac(e,t){var s=e==null?0:e.length;return s?(t=t===o?1:Be(t),Tt(e,t)):[]}function rc(e){for(var t=-1,s=e==null?0:e.length,C={};++t<s;){var R=e[t];C[R[0]]=R[1]}return C}function Ss(e){return e&&e.length?e[0]:o}function sc(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var R=s==null?0:Be(s);return R<0&&(R=bt(C+R,0)),Zn(e,t,R)}function pc(e){var t=e==null?0:e.length;return t?tn(e,0,-1):[]}var lc=Ge(function(e){var t=lt(e,Ki);return t.length&&t[0]===e[0]?wi(t):[]}),dc=Ge(function(e){var t=nn(e),s=lt(e,Ki);return t===nn(s)?t=o:s.pop(),s.length&&s[0]===e[0]?wi(s,_e(t,2)):[]}),cc=Ge(function(e){var t=nn(e),s=lt(e,Ki);return t=typeof t=="function"?t:o,t&&s.pop(),s.length&&s[0]===e[0]?wi(s,o,t):[]});function uc(e,t){return e==null?"":pl.call(e,t)}function nn(e){var t=e==null?0:e.length;return t?e[t-1]:o}function fc(e,t,s){var C=e==null?0:e.length;if(!C)return-1;var R=C;return s!==o&&(R=Be(s),R=R<0?bt(C+R,0):Dt(R,C-1)),t===t?Vp(e,t,R):Do(e,Qa,R,!0)}function gc(e,t){return e&&e.length?_r(e,Be(t)):o}var mc=Ge(bs);function bs(e,t){return e&&e.length&&t&&t.length?Wi(e,t):e}function hc(e,t,s){return e&&e.length&&t&&t.length?Wi(e,t,_e(s,2)):e}function yc(e,t,s){return e&&e.length&&t&&t.length?Wi(e,t,o,s):e}var vc=bn(function(e,t){var s=e==null?0:e.length,C=Li(e,t);return Ir(e,lt(t,function(R){return Cn(R,s)?+R:R}).sort(Gr)),C});function Sc(e,t){var s=[];if(!(e&&e.length))return s;var C=-1,R=[],k=e.length;for(t=_e(t,3);++C<k;){var G=e[C];t(G,C,e)&&(s.push(G),R.push(C))}return Ir(e,R),s}function pa(e){return e==null?e:ul.call(e)}function bc(e,t,s){var C=e==null?0:e.length;return C?(s&&typeof s!="number"&&xt(e,t,s)?(t=0,s=C):(t=t==null?0:Be(t),s=s===o?C:Be(s)),tn(e,t,s)):[]}function Cc(e,t){return Zo(e,t)}function Ec(e,t,s){return $i(e,t,_e(s,2))}function Oc(e,t){var s=e==null?0:e.length;if(s){var C=Zo(e,t);if(C<s&&pn(e[C],t))return C}return-1}function Pc(e,t){return Zo(e,t,!0)}function Tc(e,t,s){return $i(e,t,_e(s,2),!0)}function Ac(e,t){var s=e==null?0:e.length;if(s){var C=Zo(e,t,!0)-1;if(pn(e[C],t))return C}return-1}function Nc(e){return e&&e.length?jr(e):[]}function Rc(e,t){return e&&e.length?jr(e,_e(t,2)):[]}function Dc(e){var t=e==null?0:e.length;return t?tn(e,1,t):[]}function _c(e,t,s){return e&&e.length?(t=s||t===o?1:Be(t),tn(e,0,t<0?0:t)):[]}function Mc(e,t,s){var C=e==null?0:e.length;return C?(t=s||t===o?1:Be(t),t=C-t,tn(e,t<0?0:t,C)):[]}function xc(e,t){return e&&e.length?Xo(e,_e(t,3),!1,!0):[]}function Ic(e,t){return e&&e.length?Xo(e,_e(t,3)):[]}var Lc=Ge(function(e){return In(Tt(e,1,ft,!0))}),jc=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),In(Tt(e,1,ft,!0),_e(t,2))}),Fc=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,In(Tt(e,1,ft,!0),o,t)});function kc(e){return e&&e.length?In(e):[]}function wc(e,t){return e&&e.length?In(e,_e(t,2)):[]}function Uc(e,t){return t=typeof t=="function"?t:o,e&&e.length?In(e,o,t):[]}function la(e){if(!(e&&e.length))return[];var t=0;return e=Rn(e,function(s){if(ft(s))return t=bt(s.length,t),!0}),Ai(t,function(s){return lt(e,Oi(s))})}function Cs(e,t){if(!(e&&e.length))return[];var s=la(e);return t==null?s:lt(s,function(C){return Gt(t,o,C)})}var Bc=Ge(function(e,t){return ft(e)?vo(e,t):[]}),zc=Ge(function(e){return Hi(Rn(e,ft))}),Wc=Ge(function(e){var t=nn(e);return ft(t)&&(t=o),Hi(Rn(e,ft),_e(t,2))}),Gc=Ge(function(e){var t=nn(e);return t=typeof t=="function"?t:o,Hi(Rn(e,ft),o,t)}),qc=Ge(la);function $c(e,t){return Ur(e||[],t||[],yo)}function Vc(e,t){return Ur(e||[],t||[],Co)}var Hc=Ge(function(e){var t=e.length,s=t>1?e[t-1]:o;return s=typeof s=="function"?(e.pop(),s):o,Cs(e,s)});function Es(e){var t=L(e);return t.__chain__=!0,t}function Kc(e,t){return t(e),e}function ri(e,t){return t(e)}var Yc=bn(function(e){var t=e.length,s=t?e[0]:0,C=this.__wrapped__,R=function(k){return Li(k,e)};return t>1||this.__actions__.length||!(C instanceof He)||!Cn(s)?this.thru(R):(C=C.slice(s,+s+(t?1:0)),C.__actions__.push({func:ri,args:[R],thisArg:o}),new Qt(C,this.__chain__).thru(function(k){return t&&!k.length&&k.push(o),k}))});function Zc(){return Es(this)}function Xc(){return new Qt(this.value(),this.__chain__)}function Jc(){this.__values__===o&&(this.__values__=Fs(this.value()));var e=this.__index__>=this.__values__.length,t=e?o:this.__values__[this.__index__++];return{done:e,value:t}}function Qc(){return this}function eu(e){for(var t,s=this;s instanceof $o;){var C=ms(s);C.__index__=0,C.__values__=o,t?R.__wrapped__=C:t=C;var R=C;s=s.__wrapped__}return R.__wrapped__=e,t}function tu(){var e=this.__wrapped__;if(e instanceof He){var t=e;return this.__actions__.length&&(t=new He(this)),t=t.reverse(),t.__actions__.push({func:ri,args:[pa],thisArg:o}),new Qt(t,this.__chain__)}return this.thru(pa)}function nu(){return wr(this.__wrapped__,this.__actions__)}var ou=Jo(function(e,t,s){nt.call(e,s)?++e[s]:vn(e,s,1)});function iu(e,t,s){var C=we(e)?Xa:Kl;return s&&xt(e,t,s)&&(t=o),C(e,_e(t,3))}function au(e,t){var s=we(e)?Rn:Cr;return s(e,_e(t,3))}var ru=Yr(hs),su=Yr(ys);function pu(e,t){return Tt(si(e,t),1)}function lu(e,t){return Tt(si(e,t),H)}function du(e,t,s){return s=s===o?1:Be(s),Tt(si(e,t),s)}function Os(e,t){var s=we(e)?Xt:xn;return s(e,_e(t,3))}function Ps(e,t){var s=we(e)?Dp:br;return s(e,_e(t,3))}var cu=Jo(function(e,t,s){nt.call(e,s)?e[s].push(t):vn(e,s,[t])});function uu(e,t,s,C){e=kt(e)?e:so(e),s=s&&!C?Be(s):0;var R=e.length;return s<0&&(s=bt(R+s,0)),ui(e)?s<=R&&e.indexOf(t,s)>-1:!!R&&Zn(e,t,s)>-1}var fu=Ge(function(e,t,s){var C=-1,R=typeof t=="function",k=kt(e)?oe(e.length):[];return xn(e,function(G){k[++C]=R?Gt(t,G,s):So(G,t,s)}),k}),gu=Jo(function(e,t,s){vn(e,s,t)});function si(e,t){var s=we(e)?lt:Nr;return s(e,_e(t,3))}function mu(e,t,s,C){return e==null?[]:(we(t)||(t=t==null?[]:[t]),s=C?o:s,we(s)||(s=s==null?[]:[s]),Mr(e,t,s))}var hu=Jo(function(e,t,s){e[s?0:1].push(t)},function(){return[[],[]]});function yu(e,t,s){var C=we(e)?Ci:tr,R=arguments.length<3;return C(e,_e(t,4),s,R,xn)}function vu(e,t,s){var C=we(e)?_p:tr,R=arguments.length<3;return C(e,_e(t,4),s,R,br)}function Su(e,t){var s=we(e)?Rn:Cr;return s(e,di(_e(t,3)))}function bu(e){var t=we(e)?hr:ud;return t(e)}function Cu(e,t,s){(s?xt(e,t,s):t===o)?t=1:t=Be(t);var C=we(e)?Gl:fd;return C(e,t)}function Eu(e){var t=we(e)?ql:md;return t(e)}function Ou(e){if(e==null)return 0;if(kt(e))return ui(e)?Jn(e):e.length;var t=_t(e);return t==We||t==ye?e.size:Bi(e).length}function Pu(e,t,s){var C=we(e)?Ei:hd;return s&&xt(e,t,s)&&(t=o),C(e,_e(t,3))}var Tu=Ge(function(e,t){if(e==null)return[];var s=t.length;return s>1&&xt(e,t[0],t[1])?t=[]:s>2&&xt(t[0],t[1],t[2])&&(t=[t[0]]),Mr(e,Tt(t,1),[])}),pi=al||function(){return Pt.Date.now()};function Au(e,t){if(typeof t!="function")throw new Jt(l);return e=Be(e),function(){if(--e<1)return t.apply(this,arguments)}}function Ts(e,t,s){return t=s?o:t,t=e&&t==null?e.length:t,Sn(e,M,o,o,o,o,t)}function As(e,t){var s;if(typeof t!="function")throw new Jt(l);return e=Be(e),function(){return--e>0&&(s=t.apply(this,arguments)),e<=1&&(t=o),s}}var da=Ge(function(e,t,s){var C=b;if(s.length){var R=_n(s,ao(da));C|=A}return Sn(e,C,t,s,R)}),Ns=Ge(function(e,t,s){var C=b|P;if(s.length){var R=_n(s,ao(Ns));C|=A}return Sn(t,C,e,s,R)});function Rs(e,t,s){t=s?o:t;var C=Sn(e,N,o,o,o,o,o,t);return C.placeholder=Rs.placeholder,C}function Ds(e,t,s){t=s?o:t;var C=Sn(e,T,o,o,o,o,o,t);return C.placeholder=Ds.placeholder,C}function _s(e,t,s){var C,R,k,G,K,Q,le=0,de=!1,fe=!1,Se=!0;if(typeof e!="function")throw new Jt(l);t=on(t)||0,dt(s)&&(de=!!s.leading,fe="maxWait"in s,k=fe?bt(on(s.maxWait)||0,t):k,Se="trailing"in s?!!s.trailing:Se);function Ae(gt){var ln=C,Pn=R;return C=R=o,le=gt,G=e.apply(Pn,ln),G}function Me(gt){return le=gt,K=Po($e,t),de?Ae(gt):G}function ze(gt){var ln=gt-Q,Pn=gt-le,Ys=t-ln;return fe?Dt(Ys,k-Pn):Ys}function xe(gt){var ln=gt-Q,Pn=gt-le;return Q===o||ln>=t||ln<0||fe&&Pn>=k}function $e(){var gt=pi();if(xe(gt))return Ye(gt);K=Po($e,ze(gt))}function Ye(gt){return K=o,Se&&C?Ae(gt):(C=R=o,G)}function Ht(){K!==o&&Br(K),le=0,C=Q=R=K=o}function It(){return K===o?G:Ye(pi())}function Kt(){var gt=pi(),ln=xe(gt);if(C=arguments,R=this,Q=gt,ln){if(K===o)return Me(Q);if(fe)return Br(K),K=Po($e,t),Ae(Q)}return K===o&&(K=Po($e,t)),G}return Kt.cancel=Ht,Kt.flush=It,Kt}var Nu=Ge(function(e,t){return Sr(e,1,t)}),Ru=Ge(function(e,t,s){return Sr(e,on(t)||0,s)});function Du(e){return Sn(e,_)}function li(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Jt(l);var s=function(){var C=arguments,R=t?t.apply(this,C):C[0],k=s.cache;if(k.has(R))return k.get(R);var G=e.apply(this,C);return s.cache=k.set(R,G)||k,G};return s.cache=new(li.Cache||yn),s}li.Cache=yn;function di(e){if(typeof e!="function")throw new Jt(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function _u(e){return As(2,e)}var Mu=yd(function(e,t){t=t.length==1&&we(t[0])?lt(t[0],qt(_e())):lt(Tt(t,1),qt(_e()));var s=t.length;return Ge(function(C){for(var R=-1,k=Dt(C.length,s);++R<k;)C[R]=t[R].call(this,C[R]);return Gt(e,this,C)})}),ca=Ge(function(e,t){var s=_n(t,ao(ca));return Sn(e,A,o,t,s)}),Ms=Ge(function(e,t){var s=_n(t,ao(Ms));return Sn(e,D,o,t,s)}),xu=bn(function(e,t){return Sn(e,x,o,o,o,t)});function Iu(e,t){if(typeof e!="function")throw new Jt(l);return t=t===o?t:Be(t),Ge(e,t)}function Lu(e,t){if(typeof e!="function")throw new Jt(l);return t=t==null?0:bt(Be(t),0),Ge(function(s){var C=s[t],R=jn(s,0,t);return C&&Dn(R,C),Gt(e,this,R)})}function ju(e,t,s){var C=!0,R=!0;if(typeof e!="function")throw new Jt(l);return dt(s)&&(C="leading"in s?!!s.leading:C,R="trailing"in s?!!s.trailing:R),_s(e,t,{leading:C,maxWait:t,trailing:R})}function Fu(e){return Ts(e,1)}function ku(e,t){return ca(Yi(t),e)}function wu(){if(!arguments.length)return[];var e=arguments[0];return we(e)?e:[e]}function Uu(e){return en(e,f)}function Bu(e,t){return t=typeof t=="function"?t:o,en(e,f,t)}function zu(e){return en(e,h|f)}function Wu(e,t){return t=typeof t=="function"?t:o,en(e,h|f,t)}function Gu(e,t){return t==null||vr(e,t,Ot(t))}function pn(e,t){return e===t||e!==e&&t!==t}var qu=ni(ki),$u=ni(function(e,t){return e>=t}),Hn=Pr(function(){return arguments}())?Pr:function(e){return ct(e)&&nt.call(e,"callee")&&!dr.call(e,"callee")},we=oe.isArray,Vu=$a?qt($a):ed;function kt(e){return e!=null&&ci(e.length)&&!En(e)}function ft(e){return ct(e)&&kt(e)}function Hu(e){return e===!0||e===!1||ct(e)&&Mt(e)==ut}var Fn=sl||Ea,Ku=Va?qt(Va):td;function Yu(e){return ct(e)&&e.nodeType===1&&!To(e)}function Zu(e){if(e==null)return!0;if(kt(e)&&(we(e)||typeof e=="string"||typeof e.splice=="function"||Fn(e)||ro(e)||Hn(e)))return!e.length;var t=_t(e);if(t==We||t==ye)return!e.size;if(Oo(e))return!Bi(e).length;for(var s in e)if(nt.call(e,s))return!1;return!0}function Xu(e,t){return bo(e,t)}function Ju(e,t,s){s=typeof s=="function"?s:o;var C=s?s(e,t):o;return C===o?bo(e,t,o,s):!!C}function ua(e){if(!ct(e))return!1;var t=Mt(e);return t==De||t==At||typeof e.message=="string"&&typeof e.name=="string"&&!To(e)}function Qu(e){return typeof e=="number"&&ur(e)}function En(e){if(!dt(e))return!1;var t=Mt(e);return t==Ct||t==Ue||t==mt||t==Re}function xs(e){return typeof e=="number"&&e==Be(e)}function ci(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=V}function dt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function ct(e){return e!=null&&typeof e=="object"}var Is=Ha?qt(Ha):od;function ef(e,t){return e===t||Ui(e,t,na(t))}function tf(e,t,s){return s=typeof s=="function"?s:o,Ui(e,t,na(t),s)}function nf(e){return Ls(e)&&e!=+e}function of(e){if(Bd(e))throw new ke(c);return Tr(e)}function af(e){return e===null}function rf(e){return e==null}function Ls(e){return typeof e=="number"||ct(e)&&Mt(e)==Bt}function To(e){if(!ct(e)||Mt(e)!=pe)return!1;var t=wo(e);if(t===null)return!0;var s=nt.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&Lo.call(s)==tl}var fa=Ka?qt(Ka):id;function sf(e){return xs(e)&&e>=-V&&e<=V}var js=Ya?qt(Ya):ad;function ui(e){return typeof e=="string"||!we(e)&&ct(e)&&Mt(e)==he}function Vt(e){return typeof e=="symbol"||ct(e)&&Mt(e)==be}var ro=Za?qt(Za):rd;function pf(e){return e===o}function lf(e){return ct(e)&&_t(e)==Ke}function df(e){return ct(e)&&Mt(e)==Je}var cf=ni(zi),uf=ni(function(e,t){return e<=t});function Fs(e){if(!e)return[];if(kt(e))return ui(e)?rn(e):Ft(e);if(uo&&e[uo])return Gp(e[uo]());var t=_t(e),s=t==We?Ri:t==ye?_o:so;return s(e)}function On(e){if(!e)return e===0?e:0;if(e=on(e),e===H||e===-H){var t=e<0?-1:1;return t*ne}return e===e?e:0}function Be(e){var t=On(e),s=t%1;return t===t?s?t-s:t:0}function ks(e){return e?Gn(Be(e),0,ce):0}function on(e){if(typeof e=="number")return e;if(Vt(e))return re;if(dt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=dt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=nr(e);var s=vt.test(e);return s||at.test(e)?Ap(e.slice(2),s?2:8):Le.test(e)?re:+e}function ws(e){return un(e,wt(e))}function ff(e){return e?Gn(Be(e),-V,V):e===0?e:0}function tt(e){return e==null?"":$t(e)}var gf=oo(function(e,t){if(Oo(t)||kt(t)){un(t,Ot(t),e);return}for(var s in t)nt.call(t,s)&&yo(e,s,t[s])}),Us=oo(function(e,t){un(t,wt(t),e)}),fi=oo(function(e,t,s,C){un(t,wt(t),e,C)}),mf=oo(function(e,t,s,C){un(t,Ot(t),e,C)}),hf=bn(Li);function yf(e,t){var s=no(e);return t==null?s:yr(s,t)}var vf=Ge(function(e,t){e=rt(e);var s=-1,C=t.length,R=C>2?t[2]:o;for(R&&xt(t[0],t[1],R)&&(C=1);++s<C;)for(var k=t[s],G=wt(k),K=-1,Q=G.length;++K<Q;){var le=G[K],de=e[le];(de===o||pn(de,Qn[le])&&!nt.call(e,le))&&(e[le]=k[le])}return e}),Sf=Ge(function(e){return e.push(o,ns),Gt(Bs,o,e)});function bf(e,t){return Ja(e,_e(t,3),cn)}function Cf(e,t){return Ja(e,_e(t,3),Fi)}function Ef(e,t){return e==null?e:ji(e,_e(t,3),wt)}function Of(e,t){return e==null?e:Er(e,_e(t,3),wt)}function Pf(e,t){return e&&cn(e,_e(t,3))}function Tf(e,t){return e&&Fi(e,_e(t,3))}function Af(e){return e==null?[]:Ko(e,Ot(e))}function Nf(e){return e==null?[]:Ko(e,wt(e))}function ga(e,t,s){var C=e==null?o:qn(e,t);return C===o?s:C}function Rf(e,t){return e!=null&&as(e,t,Zl)}function ma(e,t){return e!=null&&as(e,t,Xl)}var Df=Xr(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=jo.call(t)),e[t]=s},ya(Ut)),_f=Xr(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=jo.call(t)),nt.call(e,t)?e[t].push(s):e[t]=[s]},_e),Mf=Ge(So);function Ot(e){return kt(e)?mr(e):Bi(e)}function wt(e){return kt(e)?mr(e,!0):sd(e)}function xf(e,t){var s={};return t=_e(t,3),cn(e,function(C,R,k){vn(s,t(C,R,k),C)}),s}function If(e,t){var s={};return t=_e(t,3),cn(e,function(C,R,k){vn(s,R,t(C,R,k))}),s}var Lf=oo(function(e,t,s){Yo(e,t,s)}),Bs=oo(function(e,t,s,C){Yo(e,t,s,C)}),jf=bn(function(e,t){var s={};if(e==null)return s;var C=!1;t=lt(t,function(k){return k=Ln(k,e),C||(C=k.length>1),k}),un(e,ea(e),s),C&&(s=en(s,h|u|f,Rd));for(var R=t.length;R--;)Vi(s,t[R]);return s});function Ff(e,t){return zs(e,di(_e(t)))}var kf=bn(function(e,t){return e==null?{}:ld(e,t)});function zs(e,t){if(e==null)return{};var s=lt(ea(e),function(C){return[C]});return t=_e(t),xr(e,s,function(C,R){return t(C,R[0])})}function wf(e,t,s){t=Ln(t,e);var C=-1,R=t.length;for(R||(R=1,e=o);++C<R;){var k=e==null?o:e[fn(t[C])];k===o&&(C=R,k=s),e=En(k)?k.call(e):k}return e}function Uf(e,t,s){return e==null?e:Co(e,t,s)}function Bf(e,t,s,C){return C=typeof C=="function"?C:o,e==null?e:Co(e,t,s,C)}var Ws=es(Ot),Gs=es(wt);function zf(e,t,s){var C=we(e),R=C||Fn(e)||ro(e);if(t=_e(t,4),s==null){var k=e&&e.constructor;R?s=C?new k:[]:dt(e)?s=En(k)?no(wo(e)):{}:s={}}return(R?Xt:cn)(e,function(G,K,Q){return t(s,G,K,Q)}),s}function Wf(e,t){return e==null?!0:Vi(e,t)}function Gf(e,t,s){return e==null?e:kr(e,t,Yi(s))}function qf(e,t,s,C){return C=typeof C=="function"?C:o,e==null?e:kr(e,t,Yi(s),C)}function so(e){return e==null?[]:Ni(e,Ot(e))}function $f(e){return e==null?[]:Ni(e,wt(e))}function Vf(e,t,s){return s===o&&(s=t,t=o),s!==o&&(s=on(s),s=s===s?s:0),t!==o&&(t=on(t),t=t===t?t:0),Gn(on(e),t,s)}function Hf(e,t,s){return t=On(t),s===o?(s=t,t=0):s=On(s),e=on(e),Jl(e,t,s)}function Kf(e,t,s){if(s&&typeof s!="boolean"&&xt(e,t,s)&&(t=s=o),s===o&&(typeof t=="boolean"?(s=t,t=o):typeof e=="boolean"&&(s=e,e=o)),e===o&&t===o?(e=0,t=1):(e=On(e),t===o?(t=e,e=0):t=On(t)),e>t){var C=e;e=t,t=C}if(s||e%1||t%1){var R=fr();return Dt(e+R*(t-e+Tp("1e-"+((R+"").length-1))),t)}return Gi(e,t)}var Yf=io(function(e,t,s){return t=t.toLowerCase(),e+(s?qs(t):t)});function qs(e){return ha(tt(e).toLowerCase())}function $s(e){return e=tt(e),e&&e.replace(Un,wp).replace(mp,"")}function Zf(e,t,s){e=tt(e),t=$t(t);var C=e.length;s=s===o?C:Gn(Be(s),0,C);var R=s;return s-=t.length,s>=0&&e.slice(s,R)==t}function Xf(e){return e=tt(e),e&&wn.test(e)?e.replace(kn,Up):e}function Jf(e){return e=tt(e),e&&W.test(e)?e.replace(Y,"\\$&"):e}var Qf=io(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()}),eg=io(function(e,t,s){return e+(s?" ":"")+t.toLowerCase()}),tg=Kr("toLowerCase");function ng(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;if(!t||C>=t)return e;var R=(t-C)/2;return ti(Wo(R),s)+e+ti(zo(R),s)}function og(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;return t&&C<t?e+ti(t-C,s):e}function ig(e,t,s){e=tt(e),t=Be(t);var C=t?Jn(e):0;return t&&C<t?ti(t-C,s)+e:e}function ag(e,t,s){return s||t==null?t=0:t&&(t=+t),cl(tt(e).replace(X,""),t||0)}function rg(e,t,s){return(s?xt(e,t,s):t===o)?t=1:t=Be(t),qi(tt(e),t)}function sg(){var e=arguments,t=tt(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var pg=io(function(e,t,s){return e+(s?"_":"")+t.toLowerCase()});function lg(e,t,s){return s&&typeof s!="number"&&xt(e,t,s)&&(t=s=o),s=s===o?ce:s>>>0,s?(e=tt(e),e&&(typeof t=="string"||t!=null&&!fa(t))&&(t=$t(t),!t&&Xn(e))?jn(rn(e),0,s):e.split(t,s)):[]}var dg=io(function(e,t,s){return e+(s?" ":"")+ha(t)});function cg(e,t,s){return e=tt(e),s=s==null?0:Gn(Be(s),0,e.length),t=$t(t),e.slice(s,s+t.length)==t}function ug(e,t,s){var C=L.templateSettings;s&&xt(e,t,s)&&(t=o),e=tt(e),t=fi({},t,C,ts);var R=fi({},t.imports,C.imports,ts),k=Ot(R),G=Ni(R,k),K,Q,le=0,de=t.interpolate||Et,fe="__p += '",Se=Di((t.escape||Et).source+"|"+de.source+"|"+(de===Kn?Ve:Et).source+"|"+(t.evaluate||Et).source+"|$","g"),Ae="//# sourceURL="+(nt.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bp+"]")+`
`;e.replace(Se,function(xe,$e,Ye,Ht,It,Kt){return Ye||(Ye=Ht),fe+=e.slice(le,Kt).replace(Xs,Bp),$e&&(K=!0,fe+=`' +
__e(`+$e+`) +
'`),It&&(Q=!0,fe+=`';
`+It+`;
__p += '`),Ye&&(fe+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),le=Kt+xe.length,xe}),fe+=`';
`;var Me=nt.call(t,"variable")&&t.variable;if(!Me)fe=`with (obj) {
`+fe+`
}
`;else if(Te.test(Me))throw new ke(a);fe=(Q?fe.replace(jt,""):fe).replace(mn,"$1").replace(yt,"$1;"),fe="function("+(Me||"obj")+`) {
`+(Me?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ze=Hs(function(){return et(k,Ae+"return "+fe).apply(o,G)});if(ze.source=fe,ua(ze))throw ze;return ze}function fg(e){return tt(e).toLowerCase()}function gg(e){return tt(e).toUpperCase()}function mg(e,t,s){if(e=tt(e),e&&(s||t===o))return nr(e);if(!e||!(t=$t(t)))return e;var C=rn(e),R=rn(t),k=or(C,R),G=ir(C,R)+1;return jn(C,k,G).join("")}function hg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.slice(0,rr(e)+1);if(!e||!(t=$t(t)))return e;var C=rn(e),R=ir(C,rn(t))+1;return jn(C,0,R).join("")}function yg(e,t,s){if(e=tt(e),e&&(s||t===o))return e.replace(X,"");if(!e||!(t=$t(t)))return e;var C=rn(e),R=or(C,rn(t));return jn(C,R).join("")}function vg(e,t){var s=I,C=U;if(dt(t)){var R="separator"in t?t.separator:R;s="length"in t?Be(t.length):s,C="omission"in t?$t(t.omission):C}e=tt(e);var k=e.length;if(Xn(e)){var G=rn(e);k=G.length}if(s>=k)return e;var K=s-Jn(C);if(K<1)return C;var Q=G?jn(G,0,K).join(""):e.slice(0,K);if(R===o)return Q+C;if(G&&(K+=Q.length-K),fa(R)){if(e.slice(K).search(R)){var le,de=Q;for(R.global||(R=Di(R.source,tt(ve.exec(R))+"g")),R.lastIndex=0;le=R.exec(de);)var fe=le.index;Q=Q.slice(0,fe===o?K:fe)}}else if(e.indexOf($t(R),K)!=K){var Se=Q.lastIndexOf(R);Se>-1&&(Q=Q.slice(0,Se))}return Q+C}function Sg(e){return e=tt(e),e&&dn.test(e)?e.replace(An,Hp):e}var bg=io(function(e,t,s){return e+(s?" ":"")+t.toUpperCase()}),ha=Kr("toUpperCase");function Vs(e,t,s){return e=tt(e),t=s?o:t,t===o?Wp(e)?Zp(e):Ip(e):e.match(t)||[]}var Hs=Ge(function(e,t){try{return Gt(e,o,t)}catch(s){return ua(s)?s:new ke(s)}}),Cg=bn(function(e,t){return Xt(t,function(s){s=fn(s),vn(e,s,da(e[s],e))}),e});function Eg(e){var t=e==null?0:e.length,s=_e();return e=t?lt(e,function(C){if(typeof C[1]!="function")throw new Jt(l);return[s(C[0]),C[1]]}):[],Ge(function(C){for(var R=-1;++R<t;){var k=e[R];if(Gt(k[0],this,C))return Gt(k[1],this,C)}})}function Og(e){return Hl(en(e,h))}function ya(e){return function(){return e}}function Pg(e,t){return e==null||e!==e?t:e}var Tg=Zr(),Ag=Zr(!0);function Ut(e){return e}function va(e){return Ar(typeof e=="function"?e:en(e,h))}function Ng(e){return Rr(en(e,h))}function Rg(e,t){return Dr(e,en(t,h))}var Dg=Ge(function(e,t){return function(s){return So(s,e,t)}}),_g=Ge(function(e,t){return function(s){return So(e,s,t)}});function Sa(e,t,s){var C=Ot(t),R=Ko(t,C);s==null&&!(dt(t)&&(R.length||!C.length))&&(s=t,t=e,e=this,R=Ko(t,Ot(t)));var k=!(dt(s)&&"chain"in s)||!!s.chain,G=En(e);return Xt(R,function(K){var Q=t[K];e[K]=Q,G&&(e.prototype[K]=function(){var le=this.__chain__;if(k||le){var de=e(this.__wrapped__),fe=de.__actions__=Ft(this.__actions__);return fe.push({func:Q,args:arguments,thisArg:e}),de.__chain__=le,de}return Q.apply(e,Dn([this.value()],arguments))})}),e}function Mg(){return Pt._===this&&(Pt._=nl),this}function ba(){}function xg(e){return e=Be(e),Ge(function(t){return _r(t,e)})}var Ig=Xi(lt),Lg=Xi(Xa),jg=Xi(Ei);function Ks(e){return ia(e)?Oi(fn(e)):dd(e)}function Fg(e){return function(t){return e==null?o:qn(e,t)}}var kg=Jr(),wg=Jr(!0);function Ca(){return[]}function Ea(){return!1}function Ug(){return{}}function Bg(){return""}function zg(){return!0}function Wg(e,t){if(e=Be(e),e<1||e>V)return[];var s=ce,C=Dt(e,ce);t=_e(t),e-=ce;for(var R=Ai(C,t);++s<e;)t(s);return R}function Gg(e){return we(e)?lt(e,fn):Vt(e)?[e]:Ft(gs(tt(e)))}function qg(e){var t=++el;return tt(e)+t}var $g=ei(function(e,t){return e+t},0),Vg=Ji("ceil"),Hg=ei(function(e,t){return e/t},1),Kg=Ji("floor");function Yg(e){return e&&e.length?Ho(e,Ut,ki):o}function Zg(e,t){return e&&e.length?Ho(e,_e(t,2),ki):o}function Xg(e){return er(e,Ut)}function Jg(e,t){return er(e,_e(t,2))}function Qg(e){return e&&e.length?Ho(e,Ut,zi):o}function e0(e,t){return e&&e.length?Ho(e,_e(t,2),zi):o}var t0=ei(function(e,t){return e*t},1),n0=Ji("round"),o0=ei(function(e,t){return e-t},0);function i0(e){return e&&e.length?Ti(e,Ut):0}function a0(e,t){return e&&e.length?Ti(e,_e(t,2)):0}return L.after=Au,L.ary=Ts,L.assign=gf,L.assignIn=Us,L.assignInWith=fi,L.assignWith=mf,L.at=hf,L.before=As,L.bind=da,L.bindAll=Cg,L.bindKey=Ns,L.castArray=wu,L.chain=Es,L.chunk=Hd,L.compact=Kd,L.concat=Yd,L.cond=Eg,L.conforms=Og,L.constant=ya,L.countBy=ou,L.create=yf,L.curry=Rs,L.curryRight=Ds,L.debounce=_s,L.defaults=vf,L.defaultsDeep=Sf,L.defer=Nu,L.delay=Ru,L.difference=Zd,L.differenceBy=Xd,L.differenceWith=Jd,L.drop=Qd,L.dropRight=ec,L.dropRightWhile=tc,L.dropWhile=nc,L.fill=oc,L.filter=au,L.flatMap=pu,L.flatMapDeep=lu,L.flatMapDepth=du,L.flatten=vs,L.flattenDeep=ic,L.flattenDepth=ac,L.flip=Du,L.flow=Tg,L.flowRight=Ag,L.fromPairs=rc,L.functions=Af,L.functionsIn=Nf,L.groupBy=cu,L.initial=pc,L.intersection=lc,L.intersectionBy=dc,L.intersectionWith=cc,L.invert=Df,L.invertBy=_f,L.invokeMap=fu,L.iteratee=va,L.keyBy=gu,L.keys=Ot,L.keysIn=wt,L.map=si,L.mapKeys=xf,L.mapValues=If,L.matches=Ng,L.matchesProperty=Rg,L.memoize=li,L.merge=Lf,L.mergeWith=Bs,L.method=Dg,L.methodOf=_g,L.mixin=Sa,L.negate=di,L.nthArg=xg,L.omit=jf,L.omitBy=Ff,L.once=_u,L.orderBy=mu,L.over=Ig,L.overArgs=Mu,L.overEvery=Lg,L.overSome=jg,L.partial=ca,L.partialRight=Ms,L.partition=hu,L.pick=kf,L.pickBy=zs,L.property=Ks,L.propertyOf=Fg,L.pull=mc,L.pullAll=bs,L.pullAllBy=hc,L.pullAllWith=yc,L.pullAt=vc,L.range=kg,L.rangeRight=wg,L.rearg=xu,L.reject=Su,L.remove=Sc,L.rest=Iu,L.reverse=pa,L.sampleSize=Cu,L.set=Uf,L.setWith=Bf,L.shuffle=Eu,L.slice=bc,L.sortBy=Tu,L.sortedUniq=Nc,L.sortedUniqBy=Rc,L.split=lg,L.spread=Lu,L.tail=Dc,L.take=_c,L.takeRight=Mc,L.takeRightWhile=xc,L.takeWhile=Ic,L.tap=Kc,L.throttle=ju,L.thru=ri,L.toArray=Fs,L.toPairs=Ws,L.toPairsIn=Gs,L.toPath=Gg,L.toPlainObject=ws,L.transform=zf,L.unary=Fu,L.union=Lc,L.unionBy=jc,L.unionWith=Fc,L.uniq=kc,L.uniqBy=wc,L.uniqWith=Uc,L.unset=Wf,L.unzip=la,L.unzipWith=Cs,L.update=Gf,L.updateWith=qf,L.values=so,L.valuesIn=$f,L.without=Bc,L.words=Vs,L.wrap=ku,L.xor=zc,L.xorBy=Wc,L.xorWith=Gc,L.zip=qc,L.zipObject=$c,L.zipObjectDeep=Vc,L.zipWith=Hc,L.entries=Ws,L.entriesIn=Gs,L.extend=Us,L.extendWith=fi,Sa(L,L),L.add=$g,L.attempt=Hs,L.camelCase=Yf,L.capitalize=qs,L.ceil=Vg,L.clamp=Vf,L.clone=Uu,L.cloneDeep=zu,L.cloneDeepWith=Wu,L.cloneWith=Bu,L.conformsTo=Gu,L.deburr=$s,L.defaultTo=Pg,L.divide=Hg,L.endsWith=Zf,L.eq=pn,L.escape=Xf,L.escapeRegExp=Jf,L.every=iu,L.find=ru,L.findIndex=hs,L.findKey=bf,L.findLast=su,L.findLastIndex=ys,L.findLastKey=Cf,L.floor=Kg,L.forEach=Os,L.forEachRight=Ps,L.forIn=Ef,L.forInRight=Of,L.forOwn=Pf,L.forOwnRight=Tf,L.get=ga,L.gt=qu,L.gte=$u,L.has=Rf,L.hasIn=ma,L.head=Ss,L.identity=Ut,L.includes=uu,L.indexOf=sc,L.inRange=Hf,L.invoke=Mf,L.isArguments=Hn,L.isArray=we,L.isArrayBuffer=Vu,L.isArrayLike=kt,L.isArrayLikeObject=ft,L.isBoolean=Hu,L.isBuffer=Fn,L.isDate=Ku,L.isElement=Yu,L.isEmpty=Zu,L.isEqual=Xu,L.isEqualWith=Ju,L.isError=ua,L.isFinite=Qu,L.isFunction=En,L.isInteger=xs,L.isLength=ci,L.isMap=Is,L.isMatch=ef,L.isMatchWith=tf,L.isNaN=nf,L.isNative=of,L.isNil=rf,L.isNull=af,L.isNumber=Ls,L.isObject=dt,L.isObjectLike=ct,L.isPlainObject=To,L.isRegExp=fa,L.isSafeInteger=sf,L.isSet=js,L.isString=ui,L.isSymbol=Vt,L.isTypedArray=ro,L.isUndefined=pf,L.isWeakMap=lf,L.isWeakSet=df,L.join=uc,L.kebabCase=Qf,L.last=nn,L.lastIndexOf=fc,L.lowerCase=eg,L.lowerFirst=tg,L.lt=cf,L.lte=uf,L.max=Yg,L.maxBy=Zg,L.mean=Xg,L.meanBy=Jg,L.min=Qg,L.minBy=e0,L.stubArray=Ca,L.stubFalse=Ea,L.stubObject=Ug,L.stubString=Bg,L.stubTrue=zg,L.multiply=t0,L.nth=gc,L.noConflict=Mg,L.noop=ba,L.now=pi,L.pad=ng,L.padEnd=og,L.padStart=ig,L.parseInt=ag,L.random=Kf,L.reduce=yu,L.reduceRight=vu,L.repeat=rg,L.replace=sg,L.result=wf,L.round=n0,L.runInContext=J,L.sample=bu,L.size=Ou,L.snakeCase=pg,L.some=Pu,L.sortedIndex=Cc,L.sortedIndexBy=Ec,L.sortedIndexOf=Oc,L.sortedLastIndex=Pc,L.sortedLastIndexBy=Tc,L.sortedLastIndexOf=Ac,L.startCase=dg,L.startsWith=cg,L.subtract=o0,L.sum=i0,L.sumBy=a0,L.template=ug,L.times=Wg,L.toFinite=On,L.toInteger=Be,L.toLength=ks,L.toLower=fg,L.toNumber=on,L.toSafeInteger=ff,L.toString=tt,L.toUpper=gg,L.trim=mg,L.trimEnd=hg,L.trimStart=yg,L.truncate=vg,L.unescape=Sg,L.uniqueId=qg,L.upperCase=bg,L.upperFirst=ha,L.each=Os,L.eachRight=Ps,L.first=Ss,Sa(L,function(){var e={};return cn(L,function(t,s){nt.call(L.prototype,s)||(e[s]=t)}),e}(),{chain:!1}),L.VERSION=n,Xt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){L[e].placeholder=L}),Xt(["drop","take"],function(e,t){He.prototype[e]=function(s){s=s===o?1:bt(Be(s),0);var C=this.__filtered__&&!t?new He(this):this.clone();return C.__filtered__?C.__takeCount__=Dt(s,C.__takeCount__):C.__views__.push({size:Dt(s,ce),type:e+(C.__dir__<0?"Right":"")}),C},He.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Xt(["filter","map","takeWhile"],function(e,t){var s=t+1,C=s==B||s==w;He.prototype[e]=function(R){var k=this.clone();return k.__iteratees__.push({iteratee:_e(R,3),type:s}),k.__filtered__=k.__filtered__||C,k}}),Xt(["head","last"],function(e,t){var s="take"+(t?"Right":"");He.prototype[e]=function(){return this[s](1).value()[0]}}),Xt(["initial","tail"],function(e,t){var s="drop"+(t?"":"Right");He.prototype[e]=function(){return this.__filtered__?new He(this):this[s](1)}}),He.prototype.compact=function(){return this.filter(Ut)},He.prototype.find=function(e){return this.filter(e).head()},He.prototype.findLast=function(e){return this.reverse().find(e)},He.prototype.invokeMap=Ge(function(e,t){return typeof e=="function"?new He(this):this.map(function(s){return So(s,e,t)})}),He.prototype.reject=function(e){return this.filter(di(_e(e)))},He.prototype.slice=function(e,t){e=Be(e);var s=this;return s.__filtered__&&(e>0||t<0)?new He(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),t!==o&&(t=Be(t),s=t<0?s.dropRight(-t):s.take(t-e)),s)},He.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},He.prototype.toArray=function(){return this.take(ce)},cn(He.prototype,function(e,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),C=/^(?:head|last)$/.test(t),R=L[C?"take"+(t=="last"?"Right":""):t],k=C||/^find/.test(t);!R||(L.prototype[t]=function(){var G=this.__wrapped__,K=C?[1]:arguments,Q=G instanceof He,le=K[0],de=Q||we(G),fe=function($e){var Ye=R.apply(L,Dn([$e],K));return C&&Se?Ye[0]:Ye};de&&s&&typeof le=="function"&&le.length!=1&&(Q=de=!1);var Se=this.__chain__,Ae=!!this.__actions__.length,Me=k&&!Se,ze=Q&&!Ae;if(!k&&de){G=ze?G:new He(this);var xe=e.apply(G,K);return xe.__actions__.push({func:ri,args:[fe],thisArg:o}),new Qt(xe,Se)}return Me&&ze?e.apply(this,K):(xe=this.thru(fe),Me?C?xe.value()[0]:xe.value():xe)})}),Xt(["pop","push","shift","sort","splice","unshift"],function(e){var t=xo[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",C=/^(?:pop|shift)$/.test(e);L.prototype[e]=function(){var R=arguments;if(C&&!this.__chain__){var k=this.value();return t.apply(we(k)?k:[],R)}return this[s](function(G){return t.apply(we(G)?G:[],R)})}}),cn(He.prototype,function(e,t){var s=L[t];if(s){var C=s.name+"";nt.call(to,C)||(to[C]=[]),to[C].push({name:t,func:s})}}),to[Qo(o,P).name]=[{name:"wrapper",func:o}],He.prototype.clone=vl,He.prototype.reverse=Sl,He.prototype.value=bl,L.prototype.at=Yc,L.prototype.chain=Zc,L.prototype.commit=Xc,L.prototype.next=Jc,L.prototype.plant=eu,L.prototype.reverse=tu,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=nu,L.prototype.first=L.prototype.head,uo&&(L.prototype[uo]=Qc),L},Mo=Xp();Pt._=Mo,g=function(){return Mo}.call(v,r,v,O),g!==o&&(O.exports=g)}).call(this)},1863:(O,v,r)=>{"use strict";const g=r(4613),o=Symbol("max"),n=Symbol("length"),p=Symbol("lengthCalculator"),c=Symbol("allowStale"),l=Symbol("maxAge"),a=Symbol("dispose"),d=Symbol("noDisposeOnSet"),m=Symbol("lruList"),i=Symbol("cache"),h=Symbol("updateAgeOnGet"),u=()=>1;class f{constructor(A){if(typeof A=="number"&&(A={max:A}),A||(A={}),A.max&&(typeof A.max!="number"||A.max<0))throw new TypeError("max must be a non-negative number");const D=this[o]=A.max||1/0,M=A.length||u;if(this[p]=typeof M!="function"?u:M,this[c]=A.stale||!1,A.maxAge&&typeof A.maxAge!="number")throw new TypeError("maxAge must be a number");this[l]=A.maxAge||0,this[a]=A.dispose,this[d]=A.noDisposeOnSet||!1,this[h]=A.updateAgeOnGet||!1,this.reset()}set max(A){if(typeof A!="number"||A<0)throw new TypeError("max must be a non-negative number");this[o]=A||1/0,b(this)}get max(){return this[o]}set allowStale(A){this[c]=!!A}get allowStale(){return this[c]}set maxAge(A){if(typeof A!="number")throw new TypeError("maxAge must be a non-negative number");this[l]=A,b(this)}get maxAge(){return this[l]}set lengthCalculator(A){typeof A!="function"&&(A=u),A!==this[p]&&(this[p]=A,this[n]=0,this[m].forEach(D=>{D.length=this[p](D.value,D.key),this[n]+=D.length})),b(this)}get lengthCalculator(){return this[p]}get length(){return this[n]}get itemCount(){return this[m].length}rforEach(A,D){D=D||this;for(let M=this[m].tail;M!==null;){const x=M.prev;N(this,A,M,D),M=x}}forEach(A,D){D=D||this;for(let M=this[m].head;M!==null;){const x=M.next;N(this,A,M,D),M=x}}keys(){return this[m].toArray().map(A=>A.key)}values(){return this[m].toArray().map(A=>A.value)}reset(){this[a]&&this[m]&&this[m].length&&this[m].forEach(A=>this[a](A.key,A.value)),this[i]=new Map,this[m]=new g,this[n]=0}dump(){return this[m].map(A=>y(this,A)?!1:{k:A.key,v:A.value,e:A.now+(A.maxAge||0)}).toArray().filter(A=>A)}dumpLru(){return this[m]}set(A,D,M){if(M=M||this[l],M&&typeof M!="number")throw new TypeError("maxAge must be a number");const x=M?Date.now():0,_=this[p](D,A);if(this[i].has(A)){if(_>this[o])return P(this,this[i].get(A)),!1;const F=this[i].get(A).value;return this[a]&&(this[d]||this[a](A,F.value)),F.now=x,F.maxAge=M,F.value=D,this[n]+=_-F.length,F.length=_,this.get(A),b(this),!0}const I=new E(A,D,_,x,M);return I.length>this[o]?(this[a]&&this[a](A,D),!1):(this[n]+=I.length,this[m].unshift(I),this[i].set(A,this[m].head),b(this),!0)}has(A){if(!this[i].has(A))return!1;const D=this[i].get(A).value;return!y(this,D)}get(A){return S(this,A,!0)}peek(A){return S(this,A,!1)}pop(){const A=this[m].tail;return A?(P(this,A),A.value):null}del(A){P(this,this[i].get(A))}load(A){this.reset();const D=Date.now();for(let M=A.length-1;M>=0;M--){const x=A[M],_=x.e||0;if(_===0)this.set(x.k,x.v);else{const I=_-D;I>0&&this.set(x.k,x.v,I)}}}prune(){this[i].forEach((A,D)=>S(this,D,!1))}}const S=(T,A,D)=>{const M=T[i].get(A);if(M){const x=M.value;if(y(T,x)){if(P(T,M),!T[c])return}else D&&(T[h]&&(M.value.now=Date.now()),T[m].unshiftNode(M));return x.value}},y=(T,A)=>{if(!A||!A.maxAge&&!T[l])return!1;const D=Date.now()-A.now;return A.maxAge?D>A.maxAge:T[l]&&D>T[l]},b=T=>{if(T[n]>T[o])for(let A=T[m].tail;T[n]>T[o]&&A!==null;){const D=A.prev;P(T,A),A=D}},P=(T,A)=>{if(A){const D=A.value;T[a]&&T[a](D.key,D.value),T[n]-=D.length,T[i].delete(D.key),T[m].removeNode(A)}};class E{constructor(A,D,M,x,_){this.key=A,this.value=D,this.length=M,this.now=x,this.maxAge=_||0}}const N=(T,A,D,M)=>{let x=D.value;y(T,x)&&(P(T,D),T[c]||(x=void 0)),x&&A.call(M,x.value,x.key,T)};O.exports=f},1155:()=>{(function(O){var v="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:r,environment:{pattern:RegExp("\\$"+v),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+v),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};O.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+v),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+v),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=O.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=g.variable[1].inside,p=0;p<o.length;p++)n[o[p]]=O.languages.bash[o[p]];O.languages.shell=O.languages.bash})(Prism)},6524:()=>{(function(O){function v(a){return RegExp("(^(?:"+a+"):[ 	]*(?![ 	]))[^]+","i")}O.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:O.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:v(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:O.languages.csp},{pattern:v(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:O.languages.hpkp},{pattern:v(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:O.languages.hsts},{pattern:v(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r=O.languages,g={"application/javascript":r.javascript,"application/json":r.json||r.javascript,"application/xml":r.xml,"text/xml":r.xml,"text/html":r.html,"text/css":r.css,"text/plain":r.plain},o={"application/json":!0,"application/xml":!0};function n(a){var d=a.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+d+"(?![+\\w.-])";return"(?:"+a+"|"+m+")"}var p;for(var c in g)if(g[c]){p=p||{};var l=o[c]?n(c):c;p[c.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:g[c]}}p&&O.languages.insertBefore("http","header",p)})(Prism)},2739:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},4495:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},501:(O,v,r)=>{var g=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var o=function(n){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,l={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function E(N){return N instanceof d?new d(N.type,E(N.content),N.alias):Array.isArray(N)?N.map(E):N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(E){return Object.prototype.toString.call(E).slice(8,-1)},objId:function(E){return E.__id||Object.defineProperty(E,"__id",{value:++c}),E.__id},clone:function E(N,T){T=T||{};var A,D;switch(a.util.type(N)){case"Object":if(D=a.util.objId(N),T[D])return T[D];A={},T[D]=A;for(var M in N)N.hasOwnProperty(M)&&(A[M]=E(N[M],T));return A;case"Array":return D=a.util.objId(N),T[D]?T[D]:(A=[],T[D]=A,N.forEach(function(x,_){A[_]=E(x,T)}),A);default:return N}},getLanguage:function(E){for(;E;){var N=p.exec(E.className);if(N)return N[1].toLowerCase();E=E.parentElement}return"none"},setLanguage:function(E,N){E.className=E.className.replace(RegExp(p,"gi"),""),E.classList.add("language-"+N)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(A){var E=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack)||[])[1];if(E){var N=document.getElementsByTagName("script");for(var T in N)if(N[T].src==E)return N[T]}return null}},isActive:function(E,N,T){for(var A="no-"+N;E;){var D=E.classList;if(D.contains(N))return!0;if(D.contains(A))return!1;E=E.parentElement}return!!T}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(E,N){var T=a.util.clone(a.languages[E]);for(var A in N)T[A]=N[A];return T},insertBefore:function(E,N,T,A){A=A||a.languages;var D=A[E],M={};for(var x in D)if(D.hasOwnProperty(x)){if(x==N)for(var _ in T)T.hasOwnProperty(_)&&(M[_]=T[_]);T.hasOwnProperty(x)||(M[x]=D[x])}var I=A[E];return A[E]=M,a.languages.DFS(a.languages,function(U,F){F===I&&U!=E&&(this[U]=M)}),M},DFS:function E(N,T,A,D){D=D||{};var M=a.util.objId;for(var x in N)if(N.hasOwnProperty(x)){T.call(N,x,N[x],A||x);var _=N[x],I=a.util.type(_);I==="Object"&&!D[M(_)]?(D[M(_)]=!0,E(_,T,null,D)):I==="Array"&&!D[M(_)]&&(D[M(_)]=!0,E(_,T,x,D))}}},plugins:{},highlightAll:function(E,N){a.highlightAllUnder(document,E,N)},highlightAllUnder:function(E,N,T){var A={callback:T,container:E,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",A),A.elements=Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)),a.hooks.run("before-all-elements-highlight",A);for(var D=0,M;M=A.elements[D++];)a.highlightElement(M,N===!0,A.callback)},highlightElement:function(E,N,T){var A=a.util.getLanguage(E),D=a.languages[A];a.util.setLanguage(E,A);var M=E.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(M,A);var x=E.textContent,_={element:E,language:A,grammar:D,code:x};function I(F){_.highlightedCode=F,a.hooks.run("before-insert",_),_.element.innerHTML=_.highlightedCode,a.hooks.run("after-highlight",_),a.hooks.run("complete",_),T&&T.call(_.element)}if(a.hooks.run("before-sanity-check",_),M=_.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!_.code){a.hooks.run("complete",_),T&&T.call(_.element);return}if(a.hooks.run("before-highlight",_),!_.grammar){I(a.util.encode(_.code));return}if(N&&n.Worker){var U=new Worker(a.filename);U.onmessage=function(F){I(F.data)},U.postMessage(JSON.stringify({language:_.language,code:_.code,immediateClose:!0}))}else I(a.highlight(_.code,_.grammar,_.language))},highlight:function(E,N,T){var A={code:E,grammar:N,language:T};if(a.hooks.run("before-tokenize",A),!A.grammar)throw new Error('The language "'+A.language+'" has no grammar.');return A.tokens=a.tokenize(A.code,A.grammar),a.hooks.run("after-tokenize",A),d.stringify(a.util.encode(A.tokens),A.language)},tokenize:function(E,N){var T=N.rest;if(T){for(var A in T)N[A]=T[A];delete N.rest}var D=new h;return u(D,D.head,E),i(E,D,N,D.head,0),S(D)},hooks:{all:{},add:function(E,N){var T=a.hooks.all;T[E]=T[E]||[],T[E].push(N)},run:function(E,N){var T=a.hooks.all[E];if(!(!T||!T.length))for(var A=0,D;D=T[A++];)D(N)}},Token:d};n.Prism=a;function d(E,N,T,A){this.type=E,this.content=N,this.alias=T,this.length=(A||"").length|0}d.stringify=function E(N,T){if(typeof N=="string")return N;if(Array.isArray(N)){var A="";return N.forEach(function(I){A+=E(I,T)}),A}var D={type:N.type,content:E(N.content,T),tag:"span",classes:["token",N.type],attributes:{},language:T},M=N.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(D.classes,M):D.classes.push(M)),a.hooks.run("wrap",D);var x="";for(var _ in D.attributes)x+=" "+_+'="'+(D.attributes[_]||"").replace(/"/g,"&quot;")+'"';return"<"+D.tag+' class="'+D.classes.join(" ")+'"'+x+">"+D.content+"</"+D.tag+">"};function m(E,N,T,A){E.lastIndex=N;var D=E.exec(T);if(D&&A&&D[1]){var M=D[1].length;D.index+=M,D[0]=D[0].slice(M)}return D}function i(E,N,T,A,D,M){for(var x in T)if(!(!T.hasOwnProperty(x)||!T[x])){var _=T[x];_=Array.isArray(_)?_:[_];for(var I=0;I<_.length;++I){if(M&&M.cause==x+","+I)return;var U=_[I],F=U.inside,z=!!U.lookbehind,B=!!U.greedy,$=U.alias;if(B&&!U.pattern.global){var w=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,w+"g")}for(var H=U.pattern||U,V=A.next,ne=D;V!==N.tail&&!(M&&ne>=M.reach);ne+=V.value.length,V=V.next){var re=V.value;if(N.length>E.length)return;if(!(re instanceof d)){var ce=1,te;if(B){if(te=m(H,ne,E,z),!te||te.index>=E.length)break;var it=te.index,ge=te.index+te[0].length,Ce=ne;for(Ce+=V.value.length;it>=Ce;)V=V.next,Ce+=V.value.length;if(Ce-=V.value.length,ne=Ce,V.value instanceof d)continue;for(var je=V;je!==N.tail&&(Ce<ge||typeof je.value=="string");je=je.next)ce++,Ce+=je.value.length;ce--,re=E.slice(ne,Ce),te.index-=ne}else if(te=m(H,0,re,z),!te)continue;var it=te.index,mt=te[0],ut=re.slice(0,it),ht=re.slice(it+mt.length),At=ne+re.length;M&&At>M.reach&&(M.reach=At);var De=V.prev;ut&&(De=u(N,De,ut),ne+=ut.length),f(N,De,ce);var Ct=new d(x,F?a.tokenize(mt,F):mt,$,mt);if(V=u(N,De,Ct),ht&&u(N,V,ht),ce>1){var Ue={cause:x+","+I,reach:At};i(E,N,T,V.prev,ne,Ue),M&&Ue.reach>M.reach&&(M.reach=Ue.reach)}}}}}}function h(){var E={value:null,prev:null,next:null},N={value:null,prev:E,next:null};E.next=N,this.head=E,this.tail=N,this.length=0}function u(E,N,T){var A=N.next,D={value:T,prev:N,next:A};return N.next=D,A.prev=D,E.length++,D}function f(E,N,T){for(var A=N.next,D=0;D<T&&A!==E.tail;D++)A=A.next;N.next=A,A.prev=N,E.length-=D}function S(E){for(var N=[],T=E.head.next;T!==E.tail;)N.push(T.value),T=T.next;return N}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(E){var N=JSON.parse(E.data),T=N.language,A=N.code,D=N.immediateClose;n.postMessage(a.highlight(A,a.languages[T],T)),D&&n.close()},!1)),a;var y=a.util.currentScript();y&&(a.filename=y.src,y.hasAttribute("data-manual")&&(a.manual=!0));function b(){a.manual||a.highlightAll()}if(!a.manual){var P=document.readyState;P==="loading"||P==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return a}(g);O.exports&&(O.exports=o),typeof r.g!="undefined"&&(r.g.Prism=o),o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(p,c){var l={};l["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[c]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+c]={pattern:/[\s\S]+/,inside:o.languages[c]};var d={};d[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:a},o.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(n,p){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:o.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml,function(n){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var c=n.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(o),o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),o.languages.js=o.languages.javascript,function(){if(typeof o=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",p=function(y,b){return"\u2716 Error "+y+" while fetching file: "+b},c="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",d="loading",m="loaded",i="failed",h="pre[data-src]:not(["+a+'="'+m+'"]):not(['+a+'="'+d+'"])';function u(y,b,P){var E=new XMLHttpRequest;E.open("GET",y,!0),E.onreadystatechange=function(){E.readyState==4&&(E.status<400&&E.responseText?b(E.responseText):E.status>=400?P(p(E.status,E.statusText)):P(c))},E.send(null)}function f(y){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(b){var P=Number(b[1]),E=b[2],N=b[3];return E?N?[P,Number(N)]:[P,void 0]:[P,P]}}o.hooks.add("before-highlightall",function(y){y.selector+=", "+h}),o.hooks.add("before-sanity-check",function(y){var b=y.element;if(b.matches(h)){y.code="",b.setAttribute(a,d);var P=b.appendChild(document.createElement("CODE"));P.textContent=n;var E=b.getAttribute("data-src"),N=y.language;if(N==="none"){var T=(/\.(\w+)$/.exec(E)||[,"none"])[1];N=l[T]||T}o.util.setLanguage(P,N),o.util.setLanguage(b,N);var A=o.plugins.autoloader;A&&A.loadLanguages(N),u(E,function(D){b.setAttribute(a,m);var M=f(b.getAttribute("data-range"));if(M){var x=D.split(/\r\n?|\n/g),_=M[0],I=M[1]==null?x.length:M[1];_<0&&(_+=x.length),_=Math.max(0,Math.min(_-1,x.length)),I<0&&(I+=x.length),I=Math.max(0,Math.min(I,x.length)),D=x.slice(_,I).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(_+1))}P.textContent=D,o.highlightElement(P)},function(D){b.setAttribute(a,i),P.textContent=D})}}),o.plugins.fileHighlight={highlight:function(b){for(var P=(b||document).querySelectorAll(h),E=0,N;N=P[E++];)o.highlightElement(N)}};var S=!1;o.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),o.plugins.fileHighlight.highlight.apply(this,arguments)}}()},5011:(O,v,r)=>{const g=Symbol("SemVer ANY");class o{static get ANY(){return g}constructor(h,u){if(u=n(u),h instanceof o){if(h.loose===!!u.loose)return h;h=h.value}a("comparator",h,u),this.options=u,this.loose=!!u.loose,this.parse(h),this.semver===g?this.value="":this.value=this.operator+this.semver.version,a("comp",this)}parse(h){const u=this.options.loose?p[c.COMPARATORLOOSE]:p[c.COMPARATOR],f=h.match(u);if(!f)throw new TypeError(`Invalid comparator: ${h}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new d(f[2],this.options.loose):this.semver=g}toString(){return this.value}test(h){if(a("Comparator.test",h,this.options.loose),this.semver===g||h===g)return!0;if(typeof h=="string")try{h=new d(h,this.options)}catch(u){return!1}return l(h,this.operator,this.semver,this.options)}intersects(h,u){if(!(h instanceof o))throw new TypeError("a Comparator is required");if((!u||typeof u!="object")&&(u={loose:!!u,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new m(h.value,u).test(this.value);if(h.operator==="")return h.value===""?!0:new m(this.value,u).test(h.semver);const f=(this.operator===">="||this.operator===">")&&(h.operator===">="||h.operator===">"),S=(this.operator==="<="||this.operator==="<")&&(h.operator==="<="||h.operator==="<"),y=this.semver.version===h.semver.version,b=(this.operator===">="||this.operator==="<=")&&(h.operator===">="||h.operator==="<="),P=l(this.semver,"<",h.semver,u)&&(this.operator===">="||this.operator===">")&&(h.operator==="<="||h.operator==="<"),E=l(this.semver,">",h.semver,u)&&(this.operator==="<="||this.operator==="<")&&(h.operator===">="||h.operator===">");return f||S||y&&b||P||E}}O.exports=o;const n=r(7774),{re:p,t:c}=r(1636),l=r(2507),a=r(6208),d=r(9745),m=r(8165)},8165:(O,v,r)=>{class g{constructor(z,B){if(B=p(B),z instanceof g)return z.loose===!!B.loose&&z.includePrerelease===!!B.includePrerelease?z:new g(z.raw,B);if(z instanceof c)return this.raw=z.value,this.set=[[z]],this.format(),this;if(this.options=B,this.loose=!!B.loose,this.includePrerelease=!!B.includePrerelease,this.raw=z,this.set=z.split("||").map($=>this.parseRange($.trim())).filter($=>$.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${z}`);if(this.set.length>1){const $=this.set[0];if(this.set=this.set.filter(w=>!f(w[0])),this.set.length===0)this.set=[$];else if(this.set.length>1){for(const w of this.set)if(w.length===1&&S(w[0])){this.set=[w];break}}}this.format()}format(){return this.range=this.set.map(z=>z.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(z){z=z.trim();const $=`parseRange:${Object.keys(this.options).join(",")}:${z}`,w=n.get($);if(w)return w;const H=this.options.loose,V=H?d[m.HYPHENRANGELOOSE]:d[m.HYPHENRANGE];z=z.replace(V,I(this.options.includePrerelease)),l("hyphen replace",z),z=z.replace(d[m.COMPARATORTRIM],i),l("comparator trim",z),z=z.replace(d[m.TILDETRIM],h),z=z.replace(d[m.CARETTRIM],u),z=z.split(/\s+/).join(" ");let ne=z.split(" ").map(ge=>b(ge,this.options)).join(" ").split(/\s+/).map(ge=>_(ge,this.options));H&&(ne=ne.filter(ge=>(l("loose invalid filter",ge,this.options),!!ge.match(d[m.COMPARATORLOOSE])))),l("range list",ne);const re=new Map,ce=ne.map(ge=>new c(ge,this.options));for(const ge of ce){if(f(ge))return[ge];re.set(ge.value,ge)}re.size>1&&re.has("")&&re.delete("");const te=[...re.values()];return n.set($,te),te}intersects(z,B){if(!(z instanceof g))throw new TypeError("a Range is required");return this.set.some($=>y($,B)&&z.set.some(w=>y(w,B)&&$.every(H=>w.every(V=>H.intersects(V,B)))))}test(z){if(!z)return!1;if(typeof z=="string")try{z=new a(z,this.options)}catch(B){return!1}for(let B=0;B<this.set.length;B++)if(U(this.set[B],z,this.options))return!0;return!1}}O.exports=g;const o=r(1863),n=new o({max:1e3}),p=r(7774),c=r(5011),l=r(6208),a=r(9745),{re:d,t:m,comparatorTrimReplace:i,tildeTrimReplace:h,caretTrimReplace:u}=r(1636),f=F=>F.value==="<0.0.0-0",S=F=>F.value==="",y=(F,z)=>{let B=!0;const $=F.slice();let w=$.pop();for(;B&&$.length;)B=$.every(H=>w.intersects(H,z)),w=$.pop();return B},b=(F,z)=>(l("comp",F,z),F=T(F,z),l("caret",F),F=E(F,z),l("tildes",F),F=D(F,z),l("xrange",F),F=x(F,z),l("stars",F),F),P=F=>!F||F.toLowerCase()==="x"||F==="*",E=(F,z)=>F.trim().split(/\s+/).map(B=>N(B,z)).join(" "),N=(F,z)=>{const B=z.loose?d[m.TILDELOOSE]:d[m.TILDE];return F.replace(B,($,w,H,V,ne)=>{l("tilde",F,$,w,H,V,ne);let re;return P(w)?re="":P(H)?re=`>=${w}.0.0 <${+w+1}.0.0-0`:P(V)?re=`>=${w}.${H}.0 <${w}.${+H+1}.0-0`:ne?(l("replaceTilde pr",ne),re=`>=${w}.${H}.${V}-${ne} <${w}.${+H+1}.0-0`):re=`>=${w}.${H}.${V} <${w}.${+H+1}.0-0`,l("tilde return",re),re})},T=(F,z)=>F.trim().split(/\s+/).map(B=>A(B,z)).join(" "),A=(F,z)=>{l("caret",F,z);const B=z.loose?d[m.CARETLOOSE]:d[m.CARET],$=z.includePrerelease?"-0":"";return F.replace(B,(w,H,V,ne,re)=>{l("caret",F,w,H,V,ne,re);let ce;return P(H)?ce="":P(V)?ce=`>=${H}.0.0${$} <${+H+1}.0.0-0`:P(ne)?H==="0"?ce=`>=${H}.${V}.0${$} <${H}.${+V+1}.0-0`:ce=`>=${H}.${V}.0${$} <${+H+1}.0.0-0`:re?(l("replaceCaret pr",re),H==="0"?V==="0"?ce=`>=${H}.${V}.${ne}-${re} <${H}.${V}.${+ne+1}-0`:ce=`>=${H}.${V}.${ne}-${re} <${H}.${+V+1}.0-0`:ce=`>=${H}.${V}.${ne}-${re} <${+H+1}.0.0-0`):(l("no pr"),H==="0"?V==="0"?ce=`>=${H}.${V}.${ne}${$} <${H}.${V}.${+ne+1}-0`:ce=`>=${H}.${V}.${ne}${$} <${H}.${+V+1}.0-0`:ce=`>=${H}.${V}.${ne} <${+H+1}.0.0-0`),l("caret return",ce),ce})},D=(F,z)=>(l("replaceXRanges",F,z),F.split(/\s+/).map(B=>M(B,z)).join(" ")),M=(F,z)=>{F=F.trim();const B=z.loose?d[m.XRANGELOOSE]:d[m.XRANGE];return F.replace(B,($,w,H,V,ne,re)=>{l("xRange",F,$,w,H,V,ne,re);const ce=P(H),te=ce||P(V),ge=te||P(ne),Ce=ge;return w==="="&&Ce&&(w=""),re=z.includePrerelease?"-0":"",ce?w===">"||w==="<"?$="<0.0.0-0":$="*":w&&Ce?(te&&(V=0),ne=0,w===">"?(w=">=",te?(H=+H+1,V=0,ne=0):(V=+V+1,ne=0)):w==="<="&&(w="<",te?H=+H+1:V=+V+1),w==="<"&&(re="-0"),$=`${w+H}.${V}.${ne}${re}`):te?$=`>=${H}.0.0${re} <${+H+1}.0.0-0`:ge&&($=`>=${H}.${V}.0${re} <${H}.${+V+1}.0-0`),l("xRange return",$),$})},x=(F,z)=>(l("replaceStars",F,z),F.trim().replace(d[m.STAR],"")),_=(F,z)=>(l("replaceGTE0",F,z),F.trim().replace(d[z.includePrerelease?m.GTE0PRE:m.GTE0],"")),I=F=>(z,B,$,w,H,V,ne,re,ce,te,ge,Ce,je)=>(P($)?B="":P(w)?B=`>=${$}.0.0${F?"-0":""}`:P(H)?B=`>=${$}.${w}.0${F?"-0":""}`:V?B=`>=${B}`:B=`>=${B}${F?"-0":""}`,P(ce)?re="":P(te)?re=`<${+ce+1}.0.0-0`:P(ge)?re=`<${ce}.${+te+1}.0-0`:Ce?re=`<=${ce}.${te}.${ge}-${Ce}`:F?re=`<${ce}.${te}.${+ge+1}-0`:re=`<=${re}`,`${B} ${re}`.trim()),U=(F,z,B)=>{for(let $=0;$<F.length;$++)if(!F[$].test(z))return!1;if(z.prerelease.length&&!B.includePrerelease){for(let $=0;$<F.length;$++)if(l(F[$].semver),F[$].semver!==c.ANY&&F[$].semver.prerelease.length>0){const w=F[$].semver;if(w.major===z.major&&w.minor===z.minor&&w.patch===z.patch)return!0}return!1}return!0}},9745:(O,v,r)=>{const g=r(6208),{MAX_LENGTH:o,MAX_SAFE_INTEGER:n}=r(7730),{re:p,t:c}=r(1636),l=r(7774),{compareIdentifiers:a}=r(3311);class d{constructor(i,h){if(h=l(h),i instanceof d){if(i.loose===!!h.loose&&i.includePrerelease===!!h.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid Version: ${i}`);if(i.length>o)throw new TypeError(`version is longer than ${o} characters`);g("SemVer",i,h),this.options=h,this.loose=!!h.loose,this.includePrerelease=!!h.includePrerelease;const u=i.trim().match(h.loose?p[c.LOOSE]:p[c.FULL]);if(!u)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const S=+f;if(S>=0&&S<n)return S}return f}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(g("SemVer.compare",this.version,this.options,i),!(i instanceof d)){if(typeof i=="string"&&i===this.version)return 0;i=new d(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof d||(i=new d(i,this.options)),a(this.major,i.major)||a(this.minor,i.minor)||a(this.patch,i.patch)}comparePre(i){if(i instanceof d||(i=new d(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let h=0;do{const u=this.prerelease[h],f=i.prerelease[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return a(u,f)}while(++h)}compareBuild(i){i instanceof d||(i=new d(i,this.options));let h=0;do{const u=this.build[h],f=i.build[h];if(g("prerelease compare",h,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return a(u,f)}while(++h)}inc(i,h){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",h);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",h);break;case"prepatch":this.prerelease.length=0,this.inc("patch",h),this.inc("pre",h);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",h),this.inc("pre",h);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let u=this.prerelease.length;for(;--u>=0;)typeof this.prerelease[u]=="number"&&(this.prerelease[u]++,u=-2);u===-1&&this.prerelease.push(0)}h&&(a(this.prerelease[0],h)===0?isNaN(this.prerelease[1])&&(this.prerelease=[h,0]):this.prerelease=[h,0]);break;default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}O.exports=d},915:(O,v,r)=>{const g=r(3173),o=(n,p)=>{const c=g(n.trim().replace(/^[=v]+/,""),p);return c?c.version:null};O.exports=o},2507:(O,v,r)=>{const g=r(9813),o=r(9475),n=r(3917),p=r(840),c=r(8923),l=r(1225),a=(d,m,i,h)=>{switch(m){case"===":return typeof d=="object"&&(d=d.version),typeof i=="object"&&(i=i.version),d===i;case"!==":return typeof d=="object"&&(d=d.version),typeof i=="object"&&(i=i.version),d!==i;case"":case"=":case"==":return g(d,i,h);case"!=":return o(d,i,h);case">":return n(d,i,h);case">=":return p(d,i,h);case"<":return c(d,i,h);case"<=":return l(d,i,h);default:throw new TypeError(`Invalid operator: ${m}`)}};O.exports=a},6752:(O,v,r)=>{const g=r(9745),o=r(3173),{re:n,t:p}=r(1636),c=(l,a)=>{if(l instanceof g)return l;if(typeof l=="number"&&(l=String(l)),typeof l!="string")return null;a=a||{};let d=null;if(!a.rtl)d=l.match(n[p.COERCE]);else{let m;for(;(m=n[p.COERCERTL].exec(l))&&(!d||d.index+d[0].length!==l.length);)(!d||m.index+m[0].length!==d.index+d[0].length)&&(d=m),n[p.COERCERTL].lastIndex=m.index+m[1].length+m[2].length;n[p.COERCERTL].lastIndex=-1}return d===null?null:o(`${d[2]}.${d[3]||"0"}.${d[4]||"0"}`,a)};O.exports=c},8303:(O,v,r)=>{const g=r(9745),o=(n,p,c)=>{const l=new g(n,c),a=new g(p,c);return l.compare(a)||l.compareBuild(a)};O.exports=o},1992:(O,v,r)=>{const g=r(1785),o=(n,p)=>g(n,p,!0);O.exports=o},1785:(O,v,r)=>{const g=r(9745),o=(n,p,c)=>new g(n,c).compare(new g(p,c));O.exports=o},7297:(O,v,r)=>{const g=r(3173),o=r(9813),n=(p,c)=>{if(o(p,c))return null;{const l=g(p),a=g(c),d=l.prerelease.length||a.prerelease.length,m=d?"pre":"",i=d?"prerelease":"";for(const h in l)if((h==="major"||h==="minor"||h==="patch")&&l[h]!==a[h])return m+h;return i}};O.exports=n},9813:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(n,p,c)===0;O.exports=o},3917:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(n,p,c)>0;O.exports=o},840:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(n,p,c)>=0;O.exports=o},6615:(O,v,r)=>{const g=r(9745),o=(n,p,c,l)=>{typeof c=="string"&&(l=c,c=void 0);try{return new g(n instanceof g?n.version:n,c).inc(p,l).version}catch(a){return null}};O.exports=o},8923:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(n,p,c)<0;O.exports=o},1225:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(n,p,c)<=0;O.exports=o},2671:(O,v,r)=>{const g=r(9745),o=(n,p)=>new g(n,p).major;O.exports=o},2265:(O,v,r)=>{const g=r(9745),o=(n,p)=>new g(n,p).minor;O.exports=o},9475:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(n,p,c)!==0;O.exports=o},3173:(O,v,r)=>{const{MAX_LENGTH:g}=r(7730),{re:o,t:n}=r(1636),p=r(9745),c=r(7774),l=(a,d)=>{if(d=c(d),a instanceof p)return a;if(typeof a!="string"||a.length>g||!(d.loose?o[n.LOOSE]:o[n.FULL]).test(a))return null;try{return new p(a,d)}catch(i){return null}};O.exports=l},469:(O,v,r)=>{const g=r(9745),o=(n,p)=>new g(n,p).patch;O.exports=o},5289:(O,v,r)=>{const g=r(3173),o=(n,p)=>{const c=g(n,p);return c&&c.prerelease.length?c.prerelease:null};O.exports=o},6259:(O,v,r)=>{const g=r(1785),o=(n,p,c)=>g(p,n,c);O.exports=o},9737:(O,v,r)=>{const g=r(8303),o=(n,p)=>n.sort((c,l)=>g(l,c,p));O.exports=o},1887:(O,v,r)=>{const g=r(8165),o=(n,p,c)=>{try{p=new g(p,c)}catch(l){return!1}return p.test(n)};O.exports=o},1435:(O,v,r)=>{const g=r(8303),o=(n,p)=>n.sort((c,l)=>g(c,l,p));O.exports=o},2659:(O,v,r)=>{const g=r(3173),o=(n,p)=>{const c=g(n,p);return c?c.version:null};O.exports=o},8408:(O,v,r)=>{const g=r(1636);O.exports={re:g.re,src:g.src,tokens:g.t,SEMVER_SPEC_VERSION:r(7730).SEMVER_SPEC_VERSION,SemVer:r(9745),compareIdentifiers:r(3311).compareIdentifiers,rcompareIdentifiers:r(3311).rcompareIdentifiers,parse:r(3173),valid:r(2659),clean:r(915),inc:r(6615),diff:r(7297),major:r(2671),minor:r(2265),patch:r(469),prerelease:r(5289),compare:r(1785),rcompare:r(6259),compareLoose:r(1992),compareBuild:r(8303),sort:r(1435),rsort:r(9737),gt:r(3917),lt:r(8923),eq:r(9813),neq:r(9475),gte:r(840),lte:r(1225),cmp:r(2507),coerce:r(6752),Comparator:r(5011),Range:r(8165),satisfies:r(1887),toComparators:r(4451),maxSatisfying:r(3204),minSatisfying:r(2421),minVersion:r(7562),validRange:r(4068),outside:r(2760),gtr:r(4531),ltr:r(4330),intersects:r(5714),simplifyRange:r(8275),subset:r(7109)}},7730:O=>{const v="2.0.0",g=Number.MAX_SAFE_INTEGER||9007199254740991,o=16;O.exports={SEMVER_SPEC_VERSION:v,MAX_LENGTH:256,MAX_SAFE_INTEGER:g,MAX_SAFE_COMPONENT_LENGTH:o}},6208:O=>{const v=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{};O.exports=v},3311:O=>{const v=/^[0-9]+$/,r=(o,n)=>{const p=v.test(o),c=v.test(n);return p&&c&&(o=+o,n=+n),o===n?0:p&&!c?-1:c&&!p?1:o<n?-1:1},g=(o,n)=>r(n,o);O.exports={compareIdentifiers:r,rcompareIdentifiers:g}},7774:O=>{const v=["includePrerelease","loose","rtl"],r=g=>g?typeof g!="object"?{loose:!0}:v.filter(o=>g[o]).reduce((o,n)=>(o[n]=!0,o),{}):{};O.exports=r},1636:(O,v,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:g}=r(7730),o=r(6208);v=O.exports={};const n=v.re=[],p=v.src=[],c=v.t={};let l=0;const a=(d,m,i)=>{const h=l++;o(d,h,m),c[d]=h,p[h]=m,n[h]=new RegExp(m,i?"g":void 0)};a("NUMERICIDENTIFIER","0|[1-9]\\d*"),a("NUMERICIDENTIFIERLOOSE","[0-9]+"),a("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),a("MAINVERSION",`(${p[c.NUMERICIDENTIFIER]})\\.(${p[c.NUMERICIDENTIFIER]})\\.(${p[c.NUMERICIDENTIFIER]})`),a("MAINVERSIONLOOSE",`(${p[c.NUMERICIDENTIFIERLOOSE]})\\.(${p[c.NUMERICIDENTIFIERLOOSE]})\\.(${p[c.NUMERICIDENTIFIERLOOSE]})`),a("PRERELEASEIDENTIFIER",`(?:${p[c.NUMERICIDENTIFIER]}|${p[c.NONNUMERICIDENTIFIER]})`),a("PRERELEASEIDENTIFIERLOOSE",`(?:${p[c.NUMERICIDENTIFIERLOOSE]}|${p[c.NONNUMERICIDENTIFIER]})`),a("PRERELEASE",`(?:-(${p[c.PRERELEASEIDENTIFIER]}(?:\\.${p[c.PRERELEASEIDENTIFIER]})*))`),a("PRERELEASELOOSE",`(?:-?(${p[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${p[c.PRERELEASEIDENTIFIERLOOSE]})*))`),a("BUILDIDENTIFIER","[0-9A-Za-z-]+"),a("BUILD",`(?:\\+(${p[c.BUILDIDENTIFIER]}(?:\\.${p[c.BUILDIDENTIFIER]})*))`),a("FULLPLAIN",`v?${p[c.MAINVERSION]}${p[c.PRERELEASE]}?${p[c.BUILD]}?`),a("FULL",`^${p[c.FULLPLAIN]}$`),a("LOOSEPLAIN",`[v=\\s]*${p[c.MAINVERSIONLOOSE]}${p[c.PRERELEASELOOSE]}?${p[c.BUILD]}?`),a("LOOSE",`^${p[c.LOOSEPLAIN]}$`),a("GTLT","((?:<|>)?=?)"),a("XRANGEIDENTIFIERLOOSE",`${p[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),a("XRANGEIDENTIFIER",`${p[c.NUMERICIDENTIFIER]}|x|X|\\*`),a("XRANGEPLAIN",`[v=\\s]*(${p[c.XRANGEIDENTIFIER]})(?:\\.(${p[c.XRANGEIDENTIFIER]})(?:\\.(${p[c.XRANGEIDENTIFIER]})(?:${p[c.PRERELEASE]})?${p[c.BUILD]}?)?)?`),a("XRANGEPLAINLOOSE",`[v=\\s]*(${p[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[c.XRANGEIDENTIFIERLOOSE]})(?:${p[c.PRERELEASELOOSE]})?${p[c.BUILD]}?)?)?`),a("XRANGE",`^${p[c.GTLT]}\\s*${p[c.XRANGEPLAIN]}$`),a("XRANGELOOSE",`^${p[c.GTLT]}\\s*${p[c.XRANGEPLAINLOOSE]}$`),a("COERCE",`(^|[^\\d])(\\d{1,${g}})(?:\\.(\\d{1,${g}}))?(?:\\.(\\d{1,${g}}))?(?:$|[^\\d])`),a("COERCERTL",p[c.COERCE],!0),a("LONETILDE","(?:~>?)"),a("TILDETRIM",`(\\s*)${p[c.LONETILDE]}\\s+`,!0),v.tildeTrimReplace="$1~",a("TILDE",`^${p[c.LONETILDE]}${p[c.XRANGEPLAIN]}$`),a("TILDELOOSE",`^${p[c.LONETILDE]}${p[c.XRANGEPLAINLOOSE]}$`),a("LONECARET","(?:\\^)"),a("CARETTRIM",`(\\s*)${p[c.LONECARET]}\\s+`,!0),v.caretTrimReplace="$1^",a("CARET",`^${p[c.LONECARET]}${p[c.XRANGEPLAIN]}$`),a("CARETLOOSE",`^${p[c.LONECARET]}${p[c.XRANGEPLAINLOOSE]}$`),a("COMPARATORLOOSE",`^${p[c.GTLT]}\\s*(${p[c.LOOSEPLAIN]})$|^$`),a("COMPARATOR",`^${p[c.GTLT]}\\s*(${p[c.FULLPLAIN]})$|^$`),a("COMPARATORTRIM",`(\\s*)${p[c.GTLT]}\\s*(${p[c.LOOSEPLAIN]}|${p[c.XRANGEPLAIN]})`,!0),v.comparatorTrimReplace="$1$2$3",a("HYPHENRANGE",`^\\s*(${p[c.XRANGEPLAIN]})\\s+-\\s+(${p[c.XRANGEPLAIN]})\\s*$`),a("HYPHENRANGELOOSE",`^\\s*(${p[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${p[c.XRANGEPLAINLOOSE]})\\s*$`),a("STAR","(<|>)?=?\\s*\\*"),a("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),a("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},4531:(O,v,r)=>{const g=r(2760),o=(n,p,c)=>g(n,p,">",c);O.exports=o},5714:(O,v,r)=>{const g=r(8165),o=(n,p,c)=>(n=new g(n,c),p=new g(p,c),n.intersects(p));O.exports=o},4330:(O,v,r)=>{const g=r(2760),o=(n,p,c)=>g(n,p,"<",c);O.exports=o},3204:(O,v,r)=>{const g=r(9745),o=r(8165),n=(p,c,l)=>{let a=null,d=null,m=null;try{m=new o(c,l)}catch(i){return null}return p.forEach(i=>{m.test(i)&&(!a||d.compare(i)===-1)&&(a=i,d=new g(a,l))}),a};O.exports=n},2421:(O,v,r)=>{const g=r(9745),o=r(8165),n=(p,c,l)=>{let a=null,d=null,m=null;try{m=new o(c,l)}catch(i){return null}return p.forEach(i=>{m.test(i)&&(!a||d.compare(i)===1)&&(a=i,d=new g(a,l))}),a};O.exports=n},7562:(O,v,r)=>{const g=r(9745),o=r(8165),n=r(3917),p=(c,l)=>{c=new o(c,l);let a=new g("0.0.0");if(c.test(a)||(a=new g("0.0.0-0"),c.test(a)))return a;a=null;for(let d=0;d<c.set.length;++d){const m=c.set[d];let i=null;m.forEach(h=>{const u=new g(h.semver.version);switch(h.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!i||n(u,i))&&(i=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${h.operator}`)}}),i&&(!a||n(a,i))&&(a=i)}return a&&c.test(a)?a:null};O.exports=p},2760:(O,v,r)=>{const g=r(9745),o=r(5011),{ANY:n}=o,p=r(8165),c=r(1887),l=r(3917),a=r(8923),d=r(1225),m=r(840),i=(h,u,f,S)=>{h=new g(h,S),u=new p(u,S);let y,b,P,E,N;switch(f){case">":y=l,b=d,P=a,E=">",N=">=";break;case"<":y=a,b=m,P=l,E="<",N="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(c(h,u,S))return!1;for(let T=0;T<u.set.length;++T){const A=u.set[T];let D=null,M=null;if(A.forEach(x=>{x.semver===n&&(x=new o(">=0.0.0")),D=D||x,M=M||x,y(x.semver,D.semver,S)?D=x:P(x.semver,M.semver,S)&&(M=x)}),D.operator===E||D.operator===N||(!M.operator||M.operator===E)&&b(h,M.semver))return!1;if(M.operator===N&&P(h,M.semver))return!1}return!0};O.exports=i},8275:(O,v,r)=>{const g=r(1887),o=r(1785);O.exports=(n,p,c)=>{const l=[];let a=null,d=null;const m=n.sort((f,S)=>o(f,S,c));for(const f of m)g(f,p,c)?(d=f,a||(a=f)):(d&&l.push([a,d]),d=null,a=null);a&&l.push([a,null]);const i=[];for(const[f,S]of l)f===S?i.push(f):!S&&f===m[0]?i.push("*"):S?f===m[0]?i.push(`<=${S}`):i.push(`${f} - ${S}`):i.push(`>=${f}`);const h=i.join(" || "),u=typeof p.raw=="string"?p.raw:String(p);return h.length<u.length?h:p}},7109:(O,v,r)=>{const g=r(8165),o=r(5011),{ANY:n}=o,p=r(1887),c=r(1785),l=(i,h,u={})=>{if(i===h)return!0;i=new g(i,u),h=new g(h,u);let f=!1;e:for(const S of i.set){for(const y of h.set){const b=a(S,y,u);if(f=f||b!==null,b)continue e}if(f)return!1}return!0},a=(i,h,u)=>{if(i===h)return!0;if(i.length===1&&i[0].semver===n){if(h.length===1&&h[0].semver===n)return!0;u.includePrerelease?i=[new o(">=0.0.0-0")]:i=[new o(">=0.0.0")]}if(h.length===1&&h[0].semver===n){if(u.includePrerelease)return!0;h=[new o(">=0.0.0")]}const f=new Set;let S,y;for(const M of i)M.operator===">"||M.operator===">="?S=d(S,M,u):M.operator==="<"||M.operator==="<="?y=m(y,M,u):f.add(M.semver);if(f.size>1)return null;let b;if(S&&y){if(b=c(S.semver,y.semver,u),b>0)return null;if(b===0&&(S.operator!==">="||y.operator!=="<="))return null}for(const M of f){if(S&&!p(M,String(S),u)||y&&!p(M,String(y),u))return null;for(const x of h)if(!p(M,String(x),u))return!1;return!0}let P,E,N,T,A=y&&!u.includePrerelease&&y.semver.prerelease.length?y.semver:!1,D=S&&!u.includePrerelease&&S.semver.prerelease.length?S.semver:!1;A&&A.prerelease.length===1&&y.operator==="<"&&A.prerelease[0]===0&&(A=!1);for(const M of h){if(T=T||M.operator===">"||M.operator===">=",N=N||M.operator==="<"||M.operator==="<=",S){if(D&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===D.major&&M.semver.minor===D.minor&&M.semver.patch===D.patch&&(D=!1),M.operator===">"||M.operator===">="){if(P=d(S,M,u),P===M&&P!==S)return!1}else if(S.operator===">="&&!p(S.semver,String(M),u))return!1}if(y){if(A&&M.semver.prerelease&&M.semver.prerelease.length&&M.semver.major===A.major&&M.semver.minor===A.minor&&M.semver.patch===A.patch&&(A=!1),M.operator==="<"||M.operator==="<="){if(E=m(y,M,u),E===M&&E!==y)return!1}else if(y.operator==="<="&&!p(y.semver,String(M),u))return!1}if(!M.operator&&(y||S)&&b!==0)return!1}return!(S&&N&&!y&&b!==0||y&&T&&!S&&b!==0||D||A)},d=(i,h,u)=>{if(!i)return h;const f=c(i.semver,h.semver,u);return f>0?i:f<0||h.operator===">"&&i.operator===">="?h:i},m=(i,h,u)=>{if(!i)return h;const f=c(i.semver,h.semver,u);return f<0?i:f>0||h.operator==="<"&&i.operator==="<="?h:i};O.exports=l},4451:(O,v,r)=>{const g=r(8165),o=(n,p)=>new g(n,p).set.map(c=>c.map(l=>l.value).join(" ").trim().split(" "));O.exports=o},4068:(O,v,r)=>{const g=r(8165),o=(n,p)=>{try{return new g(n,p).range||"*"}catch(c){return null}};O.exports=o},5338:O=>{"use strict";O.exports=function(v){v.prototype[Symbol.iterator]=function*(){for(let r=this.head;r;r=r.next)yield r.value}}},4613:(O,v,r)=>{"use strict";O.exports=g,g.Node=c,g.create=g;function g(l){var a=this;if(a instanceof g||(a=new g),a.tail=null,a.head=null,a.length=0,l&&typeof l.forEach=="function")l.forEach(function(i){a.push(i)});else if(arguments.length>0)for(var d=0,m=arguments.length;d<m;d++)a.push(arguments[d]);return a}g.prototype.removeNode=function(l){if(l.list!==this)throw new Error("removing node which does not belong to this list");var a=l.next,d=l.prev;return a&&(a.prev=d),d&&(d.next=a),l===this.head&&(this.head=a),l===this.tail&&(this.tail=d),l.list.length--,l.next=null,l.prev=null,l.list=null,a},g.prototype.unshiftNode=function(l){if(l!==this.head){l.list&&l.list.removeNode(l);var a=this.head;l.list=this,l.next=a,a&&(a.prev=l),this.head=l,this.tail||(this.tail=l),this.length++}},g.prototype.pushNode=function(l){if(l!==this.tail){l.list&&l.list.removeNode(l);var a=this.tail;l.list=this,l.prev=a,a&&(a.next=l),this.tail=l,this.head||(this.head=l),this.length++}},g.prototype.push=function(){for(var l=0,a=arguments.length;l<a;l++)n(this,arguments[l]);return this.length},g.prototype.unshift=function(){for(var l=0,a=arguments.length;l<a;l++)p(this,arguments[l]);return this.length},g.prototype.pop=function(){if(!!this.tail){var l=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,l}},g.prototype.shift=function(){if(!!this.head){var l=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,l}},g.prototype.forEach=function(l,a){a=a||this;for(var d=this.head,m=0;d!==null;m++)l.call(a,d.value,m,this),d=d.next},g.prototype.forEachReverse=function(l,a){a=a||this;for(var d=this.tail,m=this.length-1;d!==null;m--)l.call(a,d.value,m,this),d=d.prev},g.prototype.get=function(l){for(var a=0,d=this.head;d!==null&&a<l;a++)d=d.next;if(a===l&&d!==null)return d.value},g.prototype.getReverse=function(l){for(var a=0,d=this.tail;d!==null&&a<l;a++)d=d.prev;if(a===l&&d!==null)return d.value},g.prototype.map=function(l,a){a=a||this;for(var d=new g,m=this.head;m!==null;)d.push(l.call(a,m.value,this)),m=m.next;return d},g.prototype.mapReverse=function(l,a){a=a||this;for(var d=new g,m=this.tail;m!==null;)d.push(l.call(a,m.value,this)),m=m.prev;return d},g.prototype.reduce=function(l,a){var d,m=this.head;if(arguments.length>1)d=a;else if(this.head)m=this.head.next,d=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;m!==null;i++)d=l(d,m.value,i),m=m.next;return d},g.prototype.reduceReverse=function(l,a){var d,m=this.tail;if(arguments.length>1)d=a;else if(this.tail)m=this.tail.prev,d=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;m!==null;i--)d=l(d,m.value,i),m=m.prev;return d},g.prototype.toArray=function(){for(var l=new Array(this.length),a=0,d=this.head;d!==null;a++)l[a]=d.value,d=d.next;return l},g.prototype.toArrayReverse=function(){for(var l=new Array(this.length),a=0,d=this.tail;d!==null;a++)l[a]=d.value,d=d.prev;return l},g.prototype.slice=function(l,a){a=a||this.length,a<0&&(a+=this.length),l=l||0,l<0&&(l+=this.length);var d=new g;if(a<l||a<0)return d;l<0&&(l=0),a>this.length&&(a=this.length);for(var m=0,i=this.head;i!==null&&m<l;m++)i=i.next;for(;i!==null&&m<a;m++,i=i.next)d.push(i.value);return d},g.prototype.sliceReverse=function(l,a){a=a||this.length,a<0&&(a+=this.length),l=l||0,l<0&&(l+=this.length);var d=new g;if(a<l||a<0)return d;l<0&&(l=0),a>this.length&&(a=this.length);for(var m=this.length,i=this.tail;i!==null&&m>a;m--)i=i.prev;for(;i!==null&&m>l;m--,i=i.prev)d.push(i.value);return d},g.prototype.splice=function(l,a,...d){l>this.length&&(l=this.length-1),l<0&&(l=this.length+l);for(var m=0,i=this.head;i!==null&&m<l;m++)i=i.next;for(var h=[],m=0;i&&m<a;m++)h.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var m=0;m<d.length;m++)i=o(this,i,d[m]);return h},g.prototype.reverse=function(){for(var l=this.head,a=this.tail,d=l;d!==null;d=d.prev){var m=d.prev;d.prev=d.next,d.next=m}return this.head=a,this.tail=l,this};function o(l,a,d){var m=a===l.head?new c(d,null,a,l):new c(d,a,a.next,l);return m.next===null&&(l.tail=m),m.prev===null&&(l.head=m),l.length++,m}function n(l,a){l.tail=new c(a,l.tail,null,l),l.head||(l.head=l.tail),l.length++}function p(l,a){l.head=new c(a,null,l.head,l),l.tail||(l.tail=l.head),l.length++}function c(l,a,d,m){if(!(this instanceof c))return new c(l,a,d,m);this.list=m,this.value=l,a?(a.next=this,this.prev=a):this.prev=null,d?(d.prev=this,this.next=d):this.next=null}try{r(5338)(g)}catch(l){}}},Oa={};function ot(O){var v=Oa[O];if(v!==void 0)return v.exports;var r=Oa[O]={id:O,loaded:!1,exports:{}};return Zs[O].call(r.exports,r,r.exports,ot),r.loaded=!0,r.exports}ot.n=O=>{var v=O&&O.__esModule?()=>O.default:()=>O;return ot.d(v,{a:v}),v},ot.d=(O,v)=>{for(var r in v)ot.o(v,r)&&!ot.o(O,r)&&Object.defineProperty(O,r,{enumerable:!0,get:v[r]})},ot.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(O){if(typeof window=="object")return window}}(),ot.o=(O,v)=>Object.prototype.hasOwnProperty.call(O,v),ot.nmd=O=>(O.paths=[],O.children||(O.children=[]),O);var r0={};(()=>{var Bt;"use strict";var O=ot(5814),v=ot.n(O),r=ot(4619),g=ot(8408),o=ot.n(g),n=ot(3509),p=ot.n(n),c=ot(5629),l=ot(1662),a=ot(7513),d=ot(2623),m=ot(9365),i=ot(501),h=ot.n(i),u=ot(1155),f=ot(2739),S=ot(6524),y=ot(4495);class b{hydrate(pe,Ne){const Re=new URL(pe,typeof window=="undefined"?"https://dummy.base":window.location.origin),ie={};Re.pathname.split("/").forEach((ye,he)=>{if(ye.charAt(0)===":"){const be=ye.slice(1);typeof Ne[be]!="undefined"&&(Re.pathname=Re.pathname.replace(ye,encodeURIComponent(Ne[be])),ie[be]=Ne[be])}});for(const ye in Ne)(typeof ie[ye]=="undefined"||Re.searchParams.has(ye))&&Re.searchParams.set(ye,Ne[ye]);return Re.toString()}}function P(){v()(".sample-request-send").off("click"),v()(".sample-request-send").on("click",function(Fe){Fe.preventDefault();const pe=v()(this).parents("article"),Ne=pe.data("group"),Re=pe.data("name"),ie=pe.data("version");A(Ne,Re,ie,v()(this).data("type"))}),v()(".sample-request-clear").off("click"),v()(".sample-request-clear").on("click",function(Fe){Fe.preventDefault();const pe=v()(this).parents("article"),Ne=pe.data("group"),Re=pe.data("name"),ie=pe.data("version");D(Ne,Re,ie)})}function E(Fe){return Fe.replace(/{(.+?)}/g,":$1")}function N(Fe,pe){const Ne=Fe.find(".sample-request-url").val(),Re=new b,ie=E(Ne);return Re.hydrate(ie,pe)}function T(Fe){const pe={};["header","query","body"].forEach(Re=>{const ie={};try{Fe.find(v()(`[data-family="${Re}"]:visible`)).each((ye,he)=>{const be=he.dataset.name;let Ze=he.value;if(he.type==="checkbox")if(he.checked)Ze="on";else return!0;if(!Ze&&!he.dataset.optional&&he.type!=="checkbox")return v()(he).addClass("border-danger"),!0;ie[be]=Ze})}catch(ye){return}pe[Re]=ie});const Ne=Fe.find(v()('[data-family="body-json"]'));return Ne.is(":visible")?(pe.body=Ne.val(),pe.header["Content-Type"]="application/json"):pe.header["Content-Type"]="multipart/form-data",pe}function A(Fe,pe,Ne,Re){const ie=v()(`article[data-group="${Fe}"][data-name="${pe}"][data-version="${Ne}"]`),ye=T(ie),he={};if(he.url=N(ie,ye.query),he.headers=ye.header,he.headers["Content-Type"]==="application/json")he.data=ye.body;else if(he.headers["Content-Type"]==="multipart/form-data"){const Ke=new FormData;for(const[Je,Pe]of Object.entries(ye.body))Ke.append(Je,Pe);he.data=Ke,he.processData=!1,(Re==="get"||Re==="delete")&&delete he.headers["Content-Type"]}he.type=Re,he.success=be,he.error=Ze,v().ajax(he),ie.find(".sample-request-response").fadeTo(200,1),ie.find(".sample-request-response-json").html("Loading...");function be(Ke,Je,Pe){let qe;try{qe=JSON.parse(Pe.responseText),qe=JSON.stringify(qe,null,4)}catch(Qe){qe=Pe.responseText}ie.find(".sample-request-response-json").text(qe),h().highlightAll()}function Ze(Ke,Je,Pe){let qe="Error "+Ke.status+": "+Pe,Qe;try{Qe=JSON.parse(Ke.responseText),Qe=JSON.stringify(Qe,null,4)}catch(Xe){Qe=Ke.responseText}Qe&&(qe+=`
`+Qe),ie.find(".sample-request-response").is(":visible")&&ie.find(".sample-request-response").fadeTo(1,.1),ie.find(".sample-request-response").fadeTo(250,1),ie.find(".sample-request-response-json").text(qe),h().highlightAll()}}function D(Fe,pe,Ne){const Re=v()('article[data-group="'+Fe+'"][data-name="'+pe+'"][data-version="'+Ne+'"]');Re.find(".sample-request-response-json").html(""),Re.find(".sample-request-response").hide(),Re.find(".sample-request-input").each((ye,he)=>{he.value=he.placeholder!==he.dataset.name?he.placeholder:""});const ie=Re.find(".sample-request-url");ie.val(ie.prop("defaultValue"))}const ce={ca:{"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:",Type:"Tipus",url:"url"},cs:{"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:",Type:"Typ",url:"url"},de:{"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:",Type:"Typ",url:"url"},es:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:",Type:"Tipo",url:"url"},en:{},fr:{"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :",Type:"Type",url:"url"},it:{"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:",Type:"Tipo",url:"url"},nl:{"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:",Type:"Type",url:"url"},pl:{"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:",Type:"Typ",url:"url"},pt:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:",Type:"Tipo",url:"url"},ro:{"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:",Type:"Tip",url:"url"},ru:{"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:",Type:"\u0422\u0438\u043F",url:"URL"},tr:{"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:",Type:"Tip",url:"url"},vi:{"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt"},zh:{"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",Description:"\u63CF\u8FF0",Field:"\u5B57\u6BB5",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570",Headers:"\u8BF7\u6C42\u5934","Permission:":"\u6743\u9650:",Response:"\u8FD4\u56DE",required:"\u5FC5\u9700\u7684",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:",Type:"\u7C7B\u578B",url:"\u5730\u5740"}},te=((Bt=window.navigator.language)!=null?Bt:"en-GB").toLowerCase().substr(0,2);let ge=ce[te]?ce[te]:ce.en;function Ce(Fe){const pe=ge[Fe];return pe===void 0?Fe:pe}function je(Fe){ge=ce[Fe]}const{defaultsDeep:it}=r,mt=(Fe,pe)=>{const Ne=(Re,ie,ye,he)=>({[ie]:ye+1<he.length?Re:pe});return Fe.reduceRight(Ne,{})},ut=Fe=>{let pe={};return Fe.forEach(Ne=>{const Re=mt(Ne[0].split("."),Ne[1]);pe=it(pe,Re)}),ht(pe)};function ht(Fe){return JSON.stringify(Fe,null,4)}function At(Fe){const pe=[];return Fe.forEach(Ne=>{let Re;switch(Ne.type.toLowerCase()){case"string":Re=Ne.defaultValue||"";break;case"boolean":Re=Boolean(Ne.defaultValue)||!1;break;case"number":Re=parseInt(Ne.defaultValue||0,10);break;case"date":Re=Ne.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}pe.push([Ne.field,Re])}),ut(pe)}var De=ot(6770);class Ct extends De{constructor(pe){super(),this.testMode=pe}diffMain(pe,Ne,Re,ie){return super.diff_main(this._stripHtml(pe),this._stripHtml(Ne),Re,ie)}diffPrettyHtml(pe){const Ne=[],Re=/&/g,ie=/</g,ye=/>/g,he=/\n/g;for(let be=0;be<pe.length;be++){const Ze=pe[be][0],Je=pe[be][1].replace(Re,"&amp;").replace(ie,"&lt;").replace(ye,"&gt;").replace(he,"&para;<br>");switch(Ze){case De.DIFF_INSERT:Ne[be]="<ins>"+Je+"</ins>";break;case De.DIFF_DELETE:Ne[be]="<del>"+Je+"</del>";break;case De.DIFF_EQUAL:Ne[be]="<span>"+Je+"</span>";break}}return Ne.join("")}diffCleanupSemantic(pe){return this.diff_cleanupSemantic(pe)}_stripHtml(pe){if(this.testMode)return pe;const Ne=document.createElement("div");return Ne.innerHTML=pe,Ne.textContent||Ne.innerText||""}}function Ue(){p().registerHelper("markdown",function(ie){return ie&&(ie=ie.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(ye,he,be,Ze,Ke,Je,Pe){const qe=Ze||Je+"/"+Pe;return'<a href="#api-'+Je+"-"+Pe+'">'+qe+"</a>"}),ie)}),p().registerHelper("setInputType",function(ie){switch(ie){case"File":case"Email":case"Color":case"Number":case"Date":return ie[0].toLowerCase()+ie.substring(1);case"Boolean":return"checkbox";default:return"text"}});let Fe;p().registerHelper("startTimer",function(ie){return Fe=new Date,""}),p().registerHelper("stopTimer",function(ie){return console.log(new Date-Fe),""}),p().registerHelper("__",function(ie){return Ce(ie)}),p().registerHelper("cl",function(ie){return console.log(ie),""}),p().registerHelper("underscoreToSpace",function(ie){return ie.replace(/(_+)/g," ")}),p().registerHelper("removeDblQuotes",function(ie){return ie.replace(/"/g,"")}),p().registerHelper("assign",function(ie){if(arguments.length>0){const ye=typeof arguments[1];let he=null;(ye==="string"||ye==="number"||ye==="boolean")&&(he=arguments[1]),p().registerHelper(ie,function(){return he})}return""}),p().registerHelper("nl2br",function(ie){return Ne(ie)}),p().registerHelper("ifCond",function(ie,ye,he,be){switch(ye){case"==":return ie==he?be.fn(this):be.inverse(this);case"===":return ie===he?be.fn(this):be.inverse(this);case"!=":return ie!=he?be.fn(this):be.inverse(this);case"!==":return ie!==he?be.fn(this):be.inverse(this);case"<":return ie<he?be.fn(this):be.inverse(this);case"<=":return ie<=he?be.fn(this):be.inverse(this);case">":return ie>he?be.fn(this):be.inverse(this);case">=":return ie>=he?be.fn(this):be.inverse(this);case"&&":return ie&&he?be.fn(this):be.inverse(this);case"||":return ie||he?be.fn(this):be.inverse(this);default:return be.inverse(this)}});const pe={};p().registerHelper("subTemplate",function(ie,ye){pe[ie]||(pe[ie]=p().compile(document.getElementById("template-"+ie).innerHTML));const he=pe[ie],be=v().extend({},this,ye.hash);return new(p()).SafeString(he(be))}),p().registerHelper("toLowerCase",function(ie){return ie&&typeof ie=="string"?ie.toLowerCase():""}),p().registerHelper("splitFill",function(ie,ye,he){const be=ie.split(ye);return new Array(be.length).join(he)+be[be.length-1]});function Ne(ie){return(""+ie).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,ye=>ye.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}p().registerHelper("each_compare_list_field",function(ie,ye,he){const be=he.hash.field,Ze=[];ie&&ie.forEach(function(Je){const Pe=Je;Pe.key=Je[be],Ze.push(Pe)});const Ke=[];return ye&&ye.forEach(function(Je){const Pe=Je;Pe.key=Je[be],Ke.push(Pe)}),Re("key",Ze,Ke,he)}),p().registerHelper("each_compare_keys",function(ie,ye,he){const be=[];ie&&Object.keys(ie).forEach(function(Je){const Pe={};Pe.value=ie[Je],Pe.key=Je,be.push(Pe)});const Ze=[];return ye&&Object.keys(ye).forEach(function(Je){const Pe={};Pe.value=ye[Je],Pe.key=Je,Ze.push(Pe)}),Re("key",be,Ze,he)}),p().registerHelper("body2json",function(ie,ye){return At(ie)}),p().registerHelper("each_compare_field",function(ie,ye,he){return Re("field",ie,ye,he)}),p().registerHelper("each_compare_title",function(ie,ye,he){return Re("title",ie,ye,he)}),p().registerHelper("reformat",function(ie,ye){if(ye==="json")try{return JSON.stringify(JSON.parse(ie.trim()),null,"    ")}catch(he){}return ie}),p().registerHelper("showDiff",function(ie,ye,he){let be="";if(ie===ye)be=ie;else{if(!ie)return ye;if(!ye)return ie;const Ze=new Ct,Ke=Ze.diffMain(ye,ie);Ze.diffCleanupSemantic(Ke),be=Ze.diffPrettyHtml(Ke),be=be.replace(/&para;/gm,"")}return he==="nl2br"&&(be=Ne(be)),be});function Re(ie,ye,he,be){const Ze=[];let Ke=0;ye&&ye.forEach(function(qe){let Qe=!1;if(he&&he.forEach(function(Xe){if(qe[ie]===Xe[ie]){const zt={typeSame:!0,source:qe,compare:Xe,index:Ke};Ze.push(zt),Qe=!0,Ke++}}),!Qe){const Xe={typeIns:!0,source:qe,index:Ke};Ze.push(Xe),Ke++}}),he&&he.forEach(function(qe){let Qe=!1;if(ye&&ye.forEach(function(Xe){Xe[ie]===qe[ie]&&(Qe=!0)}),!Qe){const Xe={typeDel:!0,compare:qe,index:Ke};Ze.push(Xe),Ke++}});let Je="";const Pe=Ze.length;for(const qe in Ze)parseInt(qe,10)===Pe-1&&(Ze[qe]._last=!0),Je=Je+be.fn(Ze[qe]);return Je}}document.addEventListener("DOMContentLoaded",()=>{We(),P(),h().highlightAll()});function We(){var Z;let Fe=[{type:"post",url:"/configurations/special/files/providers/loads",title:"Consulta configuraci\xF3n",name:"Consulta_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener la configuracion de un archivo especial por su pk y sk</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto</p>"}]},examples:[{title:"Request-Example:",content:` 
{
    "pk": "ean_provider#1234568",
    "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con la configuraci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"provider",description:"<p>Nombre del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"typeOfReport",description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,field:"generationFrequency",description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,field:"checkCompany",description:"<p>CheckBox empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado de la configuraci\xF3n</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {
        "pk": "ean_provider#1234568",
        "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31",
        "eanProvider": "1234568",
        "provider": "nombre del provedor",
        "country": "CO",
        "typeOfReport": "sales",
        "generationFrequency": "Mensual",
        "generationDay": "12",
        "typeOfDataGrouping": "Diario",
        "amountOfPeriodsToGenerate": 1,
        "checkCompany": 0,
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
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/configurations/special/files",title:"Editar configuraci\xF3n",name:"Editar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite editar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre del fabricante logueado que se le generara el archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCompany",description:"<p>CheckBox Empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido del usuario logueado que esta editando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "ean_provider#1234568",
    "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31",
    "eanProvider": "1234568",
    "provider": "nombre del provedor",
    "country": "CO",
    "typeOfReport": "sales",
    "generationFrequency": "Mensual",
    "generationDay": "12",
    "typeOfDataGrouping": "Diario",
    "amountOfPeriodsToGenerate": 1,
    "checkCompany": 0,
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
"responseMessage": " La empresa nombre empresa 1  ya cuenta con el n\xFAmero m\xE1ximo 
                     de archivos especiales activos 4. Si requieres crear uno nuevo, 
                     inactiva alguno de los que est\xE1 en uso",
"responseCode": "1009"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre del fabricante logueado esta configurando el archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCompany",description:"<p>CheckBox empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario logueado que esta creando la configuracion del archivo especial</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>listado de compa\xF1ias a replicar la configurac\xF3n</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>Pais de la compa\xF1ia seleccionada</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider": "1234568",
    "provider": "nombre del provedor",
    "country": "CO",
    "typeOfReport": "sales",
    "generationFrequency": "Mensual",
    "generationDay": "12",
    "typeOfDataGrouping": "Diario",
    "amountOfPeriodsToGenerate": 1,
    "checkCompany": 0,
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
    "creationUser": "francisco Diaz",
    "lstCompanies": [
    {
        "eanCompany": "7702010000010",
        "nameCompany": "Nombre empresa 1",
        "country": "CO"
    },
    {
        "eanCompany": "ean2",
        "nameCompany": "Nombre empresa 2",
        "country": "CO"
    }
]
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
"responseMessage": "Nombre empresa 1 A\xFAn no se ha configurado una ruta para la entrega del Archivo especial.
                    En caso de persistir este evento por favor comunicarse 
                    con Soporte https://soporte.cen.biz/",
"responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": " La empresa nombre empresa 1  ya cuenta con el n\xFAmero m\xE1ximo 
                     de archivos especiales activos 4. Si requieres crear uno nuevo, 
                     inactiva alguno de los que est\xE1 en uso",
"responseCode": "1009"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files/administrations/providers",title:"Listado configuraciones por cliente",name:"Listado_configuraciones_por_cliente",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",description:"<p>Ean del fabricante logueado a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais del fabricate logueado a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Correo del usuario logueado a consultar listado de archivos</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "77",
    "email": "francisco@hotmail.com"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"company",description:"<p>Nombre del fabricante concatenado con el pais</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#1234568",
            "sk": "special_file#4c78b632-0bb0-432c-99aa-3b3f25f408f8",
            "eanProvider": "1234568",
            "company": "CO-nombre del provedor",
            "generationFrecuency": "Mensual",
            "generationDay": "12",
            "typeOfDataGrouping": "Diario",
            "fileName": null,
            "pathFileName": null,
            "logFileName": null,
            "pathLogFileName": null,
            "historicalExecutions": null,
            "configurationSpecialFileDTO": null,
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
}`,type:"json"}]},filename:"ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files/providers",title:"Listado configuraciones por cliente filtradas",name:"Listado_configuraciones_por_cliente_filtradas",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente filtrando por el estado y fecha de creaci\xF3n del reporte</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado de los informes especiales a buscar IMPORTANTE = si no se selecciono data enviar el campo vacio</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n de los archivos especiales IMPORTATE = si no se ingreso data enviar el campo vacio y si se selecciono data enviar en formato AAAA-mm = 2023-03</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Correo del usuario logueado a consultar listado de archivos</p>"}]},examples:[{title:"Request-Example:",content:` 
{
    "eanProvider":"77",    
    "country": "CO",
    "creationDate" : "2023-07",
    "state": "ACTIVO",
    "email": "francisco@hotmail.com"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider":"77",    
    "country": "CO",
    "creationDate" : "",
    "state": "ACTIVO",
    "email": "francisco@hotmail.com"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "eanProvider":"77",    
    "country": "CO",
    "creationDate" : "2023-07",
    "state": "",
    "email": "francisco@hotmail.com"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"company",description:"<p>Nombre del fabricante concatenado el pais</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_provider#1234568",
            "sk": "special_file#4c78b632-0bb0-432c-99aa-3b3f25f408f8",
            "eanProvider": "1234568",
            "company": "CO-empresa",
            "generationFrecuency": "Mensual",
            "generationDay": "12",
            "typeOfDataGrouping": "Diario",
            "fileName": null,
            "pathFileName": null,
            "logFileName": null,
            "pathLogFileName": null,
            "historicalExecutions": null,
            "configurationSpecialFileDTO": null,
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
}`,type:"json"}]},filename:"CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"put",url:"/cards",title:"Actualizaci\xF3n Indicador",name:"Actualizaci\xF3n_Indicador",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite Actulizaci\xF3n de un indicador</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>pk llave primaria</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>sk llave secundaria</p>"},{group:"Parameter",type:"String",optional:!1,field:"indicatorType",description:"<p>indicatorType tipo de indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>Nombre para el acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre en ingles para el acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n en ingles acceso del indicador</p>"},{group:"Parameter",type:"Number",optional:!1,field:"indicatorOrder",description:"<p>Orden del acceso al indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>estado de acceso del indicador (ACTIVO \xF3 INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",description:"<p>Icono seleccionado para el acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y appelido del usuario que esta creando el registro ejemplo (Francisco Diaz)</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del usuario logueado que esta creando el registro</p>"}]},examples:[{title:"Request-Example",content:`
{

"pk": "type_indicator#devolution",
"sk":"id_identificator#087293e4-e3c7-45ad-8084-3225f63411bc",
"indicatorType": "devolution",
"name": "SI",
"nameEnglish": "Yes",
"icon": "locationOn.svg",
"description": "Decir Si",
"descriptionEnglish": "Say Yes",
"indicatorOrder": "5",
"modificationUser": "Mateo",
"country": "CO",
"state": "1"

}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`
}
"responseMessage": "Indicador Actualizado ",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating indicator"

"responseCode" : "1001"


}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"post",url:"/cards/typeIndicator/state",title:"Filtrar tarjetas de indicadores",name:"Filtrar_tarjetas_de_indicadores",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Servicio que se encarga de obtener el listado de tarjetas de indicadores que est\xE9n asociados al o tipos de tipo de indicador y estado seleccionados.</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object[]",optional:!1,field:"lstTypeIndicator",description:"<p>Listado de tipos de indicadores seleccionados IMPORTANTE si no se selecciono nada enviar la lista vac\xEDa ejemplo lstTypeIndicator = []</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>Estado de la tarjeta de indicador</p>"}]},examples:[{title:"Request-Example:",content:`
{
"lstTypeIndicator": ["sales", "stock"],
"state": ""
}`,type:"json"},{title:"Request-Example:",content:`
{
"lstTypeIndicator": ["sales", "stock"],
"state": "ACTIVO"
}`,type:"json"},{title:"Request-Example:",content:`
{
"lstTypeIndicator": ["sales"],
"state": "INACTIVO"
}`,type:"json"},{title:"Request-Example:",content:`
{
"lstTypeIndicator": [],
"state": "ACTIVO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre del indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n del indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorOrder",description:"<p>Orden del indicador</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del indicador</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>\xCDcono del indicador</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "type_indicator#sales",
"sk":
"id_identificator#511d2ed6-dbbc-4785-9a22-5eca819eae74",
"eanProvider": null,
"indicatorType": "sales",
"name": "prueba creacion 9",
"nameEnglish": "ingles nombre",
"icon": "inoco",
"description": "sin descripcion",
"descriptionEnglish": "descropcion en ingles",
"url": null,
"indicatorOrder": 1,
"createUser": "Francisco diaz",
"createDate": "2023-06-02 16:05:47",
"modificationUser": null,
"modificationDate": null,
"state": "ACTIVO",
"country": null,
"lstTypeIndicator": null
},
{
"pk": "type_indicator#stock",
"sk":
"id_identificator#26d3243f-7db6-4097-a99f-221af1dd1b2a",
"eanProvider": null,
"indicatorType": "stock",
"name": "creacion",
"nameEnglish": "ingles nombre",
"icon": "inoco",
"description": "sin descripcion",
"descriptionEnglish": "descripcion en ingles",
"url": null,
"indicatorOrder": 2,
"createUser": "Francisco diaz",
"createDate": "2023-06-05 11:49:53",
"modificationUser": null,
"modificationDate": null,
"state": "ACTIVO",
"country": null,
"lstTypeIndicator": null
},
{
"pk": "type_indicator#sales",
"sk":
"id_identificator#26d3243f-7db6-4097-a99f-221af1dd1b2a",
"eanProvider": null,
"indicatorType": "sales",
"name": "creacion",
"nameEnglish": "ingles nombre",
"icon": "inoco",
"description": "sin descripcion",
"descriptionEnglish": "descripcion en ingles",
"url": null,
"indicatorOrder": 2,
"createUser": "kathe",
"createDate": "2023-06-05 11:49:53",
"modificationUser": null,
"modificationDate": null,
"state": "INACTIVO",
"country": null,
"lstTypeIndicator": null
},
{
"pk": "type_indicator#stock",
"sk":
"id_identificator#26d3243f-7db6-4097-a99f-221af1dd1b2b",
"eanProvider": null,
"indicatorType": "stock",
"name": "creacion",
"nameEnglish": "ingles nombre",
"icon": "inoco",
"description": "sin descripcion",
"descriptionEnglish": "descripcion en ingles",
"url": null,
"indicatorOrder": 8,
"createUser": "kathe",
"createDate": "2023-06-05 11:49:53",
"modificationUser": null,
"modificationDate": null,
"state": "INACTIVO",
"country": null,
"lstTypeIndicator": null
}
],
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "No encontramos informaci\xF3n que
coincida con la b\xFAsqueda.
Realiza un nuevo filtro",
"responseCode": "1005"
}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"post",url:"/cards",title:"Guardar acceso indicadores",name:"Guardar_acceso_indicadores",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite guardar un nuevo acceso para los diferentes indicadores de cada cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>Nombre para el acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre en ingles para el acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n en ingles acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador a crear el acceso seleccionado en la lista desplegable</p>"},{group:"Parameter",type:"Number",optional:!1,field:"indicatorOrder",description:"<p>Orden del acceso al indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",description:"<p>estado de acceso del indicador (ACTIVO \xF3 INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",description:"<p>Icono seleccionado para el acceso del indicador</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",description:"<p>Nombre y appelido del usuario que esta creando el registro ejemplo (Francisco Diaz)</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del usuario logueado que esta creando el registro</p>"}]},examples:[{title:"Request-Example:",content:`
{
"name": "creacion",
"nameEnglish": "ingles nombre",
"description": "sin descripcion",
"descriptionEnglish": "descripcion en ingles",
"indicatorType": "sales",
"indicatorOrder": 3,
"state": "ACTIVO",
"icon": "inoco",
"createUser": "Francisco diaz",
"country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "El acceso del Indicador se cre\xF3
exitosamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "Ya existe un indicador asociado al
tipo de
indicador sales. Valide si el acceso al indicador ya
se encuentra creado o modifique los datos",
"responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "El sistema no responde o el proceso no
se termin\xF3 satisfactoriamente. Intenta nuevamente
en unos segundos o comun\xEDcate
con soporte https://soporte.cen.biz/.",
"responseCode": "1001"
}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/returns/companies/:eanProvider Indicadores BI",title:"devoluciones",name:"Indicadores_BI_devoluciones",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de devoluciones para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "7702010000010",
"sk": "return#20221011112932",
"eanProvider": "7702010000010",
"indicatorType": "Ventas",
"name": "An\xE1lisis de ventas",
"nameEnglish": "Sales analysis",
"icon": "TrendingUpOutlined.svg",
"description": "Tenga visibilidad del comportamiento de
las ventas ",
"descriptionEnglish": "Have visibility into the sales",
"url":
"https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
"indicatorOrder": 1,
"createUser": "Francisco Diaz",
"createDate": "2022-10-11 11:33:45",
"modificationUser": null,
"modificationDate": null,
"country": null
},
{
"pk": "7702010000010",
"sk": "return#20221011112933",
"eanProvider": "7702010000010",
"indicatorType": "Ventas",
"name": "An\xE1lisis por geograf\xEDa",
"nameEnglish": "Geographic analysis",
"icon": "icono",
"description": "Conozca cu\xE1les son las zonas geogr\xE1ficas",
"descriptionEnglish": "Know which are the geographical",
"url":
"https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
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

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/stock/companies/:eanProvider Indicadores BI",title:"inventarios",name:"Indicadores_BI_inventarios",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de inventarios para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
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
"description": "Tenga visibilidad del comportamiento de
los
inventarios de su negocio en cada comercio aplicando
diferentes filtros de consulta",
"descriptionEnglish": "Have visibility into the
performance
of your business's inventories in each store by applying
different query filters",
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
"description": "Conozca cu\xE1ntos d\xEDas de inventario tiene
disponible
para planificar el suministro y evitar los agotados",
"descriptionEnglish": "Have visibility into the
performance of
your business's inventories in each store by applying
different query filters",
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

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/budget/companies/:eanProvider Indicadores BI",title:"presupuesto",name:"Indicadores_BI_presupuesto",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de presupuesto para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "7702010000010",
"sk": "budget#20221011112932",
"eanProvider": "7702010000010",
"indicatorType": "Ventas",
"name": "An\xE1lisis de ventas",
"nameEnglish": "Sales analysis",
"icon": "TrendingUpOutlined.svg",
"description": "Tenga visibilidad del comportamiento de
las ventas ",
"descriptionEnglish": "Have visibility into the sales",
"url":
"https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
"indicatorOrder": 1,
"createUser": "Francisco Diaz",
"createDate": "2022-10-11 11:33:45",
"modificationUser": null,
"modificationDate": null,
"country": null
},
{
"pk": "7702010000010",
"sk": "budget#20221011112933",
"eanProvider": "7702010000010",
"indicatorType": "Ventas",
"name": "An\xE1lisis por geograf\xEDa",
"nameEnglish": "Geographic analysis",
"icon": "icono",
"description": "Conozca cu\xE1les son las zonas geogr\xE1ficas",
"descriptionEnglish": "Know which are the geographical",
"url":
"https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
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

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/sales/companies/:eanProvider Indicadores BI",title:"ventas",name:"Indicadores_BI_ventas",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de ventas para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
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
"description": "Tenga visibilidad del comportamiento de
las ventas ",
"descriptionEnglish": "Have visibility into the sales",
"url":
"https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
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
"url":
"https://cassandraqa.cen.biz/sense/app/41032655-ce98-432a-97bc-86739b57b05f/",
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

}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/order/indicators/:indicator Listado orden acceso a",title:"indicadores",name:"Listado_orden_acceso_a_indicadores",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado del orden que se tiene para el metodo de crear o editar un acceso a indicadores</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"indicator",description:"<p>Tipo d eindicador a consultar el orden dispobible para crear o editar</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de orden para crear y editar</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": {
"lstOrderCreate": [
1,
2,
3,
4,
5,
6,
7,
8,
9,
10
],
"lstOrderUpdate": [
1,
2,
3,
4,
5,
6,
7,
8,
9
]
},
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/typeindicators",title:"Tipo de indicadores",name:"Tipo_de_Indicadores",group:"Configuracin_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los tipos de indicadores disponibles en base de datos.</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
{
"pk": "root#indicator_type",
"sk": "type_indicator#devolution",
"eanProvider": null,
"indicatorType": "devolution",
"name": null,
"nameEnglish": null,
"icon": null,
"description": null,
"descriptionEnglish": null,
"url": null,
"indicatorOrder": null,
"createUser": null,
"createDate": null,
"modificationUser": null,
"modificationDate": null,
"state": "Inactivo",
"country": null
},
{
"pk": "root#indicator_type",
"sk": "type_indicator#sales",
"eanProvider": null,
"indicatorType": "sales",
"name": null,
"nameEnglish": null,
"icon": null,
"description": null,
"descriptionEnglish": null,
"url": null,
"indicatorOrder": null,
"createUser": null,
"createDate": null,
"modificationUser": null,
"modificationDate": null,
"state": "activo",
"country": null
},
{
"pk": "root#indicator_type",
"sk": "type_indicator#stock",
"eanProvider": null,
"indicatorType": "stock",
"name": null,
"nameEnglish": null,
"icon": null,
"description": null,
"descriptionEnglish": null,
"url": null,
"indicatorOrder": null,
"createUser": null,
"createDate": null,
"modificationUser": null,
"modificationDate": null,
"state": "activo",
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

"responseMessage": "La opci\xF3n de contacto se
cre\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "No se puede agregar el registro, "
+ " ya existe una opci\xF3n de contacto para el
pa\xEDs, empresa "

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
"state": "ACTIVO"
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

}`,type:"json"}]},filename:"ContactsWebApi.java",groupTitle:"Contactos"},{type:"put",url:"/contact/inactivate",title:"Inactivar contactos",name:"Inactivar_contacto",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite Inactivar un contacto</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"name",description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastname",description:"<p>apellido</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>correo electronico</p>"},{group:"Parameter",type:"String",optional:!1,field:"position",description:"<p>cargo</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",description:"<p>telefono</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
{
"name": "mateo",
"lastName": "romero",
"email": "mateoromeroweb2@gmail.com",
"phone": "7283893",
"position": "vendedor",
"eanCompany": "342532532"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating contact"

"responseCode" : "1001"


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
}`,type:"json"}]},filename:"ProductReferencesWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/products/downloads",title:"Descarga Catalogo productos",name:"Descarga_Catalogo_productos",group:"Download_catalogo_productos",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de catalogo de productos para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo paiso de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre de la compa\xF1ia loguea</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>listado de compa\xF1ias seleccionadas IMPORTANTE si la empresa no es de un grupo empresarial enviar la lista vacia ejemplo lstCompanies = []</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>Pais de la compa\xF1ia seleccionada</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "7702010000010",
     "provider": "nombre del proveedor",
    "userName": "Francisco diaz",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "lstCompanies": [
        {
            "eanCompany": "770201000001",
            "nameCompany": "colgate",
            "country": "CO"
        },
        {
            "eanCompany": "7703220010011",
            "nameCompany": "Nombre empresa 2",
            "country": "CO"
        }
    ]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "7702010000010",
     "provider": "nombre del proveedor",
    "userName": "Francisco diaz",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "lstCompanies": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Se ha iniciado el proceso de descarga Cat\xE1logo de productos,"
    "en un momento podr\xE1 consultar el estado del archivo en el listado de resultados.",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente no hay registros en el Cat\xE1logo de productos "
    " para descargar para la empresa empresa 1.Por favor dirigirse a la 
    opci\xF3n Carga de Cat\xE1logo para el cargue de esta informaci\xF3n",

    "responseCode": "1005"
}`,type:"json"},{title:"Success-Response:",content:`{
    "responseMessage": "En este momento no se puede descargar  su Cat\xE1logo de productos. 
    El usuario correo@prueba esta descargando el Cat\xE1logo, tan pronto finalice
     este proceso se habilitar\xE1 su descarga.",
    "responseCode": "1006"
}`,type:"json"}]},filename:"ProductWebApi.java",groupTitle:"Download_catalogo_productos"},{type:"post",url:"/salesforce",title:"Descarga fuerza venta",name:"Descarga_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de la fuerza de venta actual para el fabricante seg\xFAn los comercios que filtre</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre de la compa\xF1ia loguea</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTrader",description:"<p>Listado eans de los comercios seleccionados en la lista desplegable</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>listado de compa\xF1ias seleccionadas IMPORTANTE si la empresa no es de un grupo empresarial enviar la lista vacia ejemplo lstCompanies = []</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>Pais de la compa\xF1ia seleccionada</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider":"7702010000010",
    "provider": "empresa",
    "userName": "francisco",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "lstEanTrader": [
        "7702010000010",
        "7702010000009"
    ],
    "lstCompanies": [
        {
            "eanCompany": "770201000001",
            "nameCompany": "colgate",
            "country": "CO"
        },
        {
            "eanCompany": "7703220010011",
            "nameCompany": "Nombre empresa 2",
            "country": "CO"
        }
      ]
    }
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider":"7702010000010",
    "provider": "empresa",
    "userName": "francisco",
    "emailUser": "correo@prueba",
    "idUser": "fradia",
    "lstEanTrader": [
        "7702010000010",
        "7702010000009"
    ],
    "lstCompanies": []
    }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Se ha iniciado el proceso de descarga, en un"
     "momento podr\xE1 consultar el estado del archivo en el listado de resultados",

    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente no hay registros para descarga 
     "en Fuerza de venta para la empresa fabricante 1, Por favor dirigirse a la 
     opci\xF3n Carga Fuerza de venta 
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
}`,type:"json"}]},filename:"GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/business/groups/administrations",title:"Administracion grupos empresariales",name:"Administracion_grupos_empresariales",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las empresas que tienen relacion con los filtros aplicados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"lstContries",description:"<p>listado de paises seleccionados</p>"},{group:"200",type:"Object[]",optional:!0,field:"lstEansProviders",description:"<p>listado de eans seleccionados de la lista desplegable de eans si no se selecciono data enviar la lista vacia</p>"},{group:"200",type:"Object[]",optional:!0,field:"lstProviders",description:"<p>Listado de los eans de las compa\xF1ias seleccionadas en la lista desplegable de empresas si no se selecciono data enviar la lista vacia</p>"},{group:"200",type:"Object[]",optional:!0,field:"lstIdsGroups",description:"<p>listado de los id_group seleccionados de la lista desplegable de grupos empresariales si no se selecciono data enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX"
    ],
    "lstEansProviders": [
        "ean_1"
    ],
    "lstProviders": [
        "ean_2"
    ],
    "lstIdsGroups": []
}`,type:"json"},{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX"
    ],
    "lstEansProviders": [],
    "lstProviders": [],
    "lstIdsGroups": []
}`,type:"json"},{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX"
    ],
    "lstEansProviders": [],
    "lstProviders": [],
    "lstIdsGroups": [   
      "id_grupo_1"
     ]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX"
    ],
    "lstEansProviders": [
        "ean_1"
    ],
    "lstProviders": [],
    "lstIdsGroups": []
}`,type:"json"},{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX"
    ],
    "lstEansProviders": [],
    "lstProviders": [
        "ean_2"
    ],
    "lstIdsGroups": []
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de empresas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"idGroup",description:"<p>Id del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"businessGroupName",description:"<p>Nombre del grupo empresarial</p>"},{group:"200",type:"String",optional:!0,field:"eanMainCompany",description:"<p>ean de la empresa principal del grupo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"provider",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha que se modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>usuario que modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "country#CO",
            "sk": "ean_provider#123",
            "country": "CO",
            "idGroup": "20230615",
            "businessGroupName": "grupo carvajal",
            "eanMainCompany": null,
            "eanProvider": "123",
            "provider": "empresa 2",
            "creationUser": "Francisco diaz",
            "creationDate": "2023-06-14",
            "modificationDate": "2023-06-15",
            "modificationUser": "Francisco Diaz",
            "state": "ACTIVO",
            "lstContries": null,
            "lstEansProviders": null,
            "lstProviders": null,
            "lstIdsGroups": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda.
                        Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"post",url:"/business/groups/companies",title:"Compa\xF1ias disponibles para permisos",name:"Compa\xF1ias_disponibles_para_permisos",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de empresa que estan con estado activo y que cuentan con los usuarios disponibles para ser agregada como permiso del usuario que se esta creando si la empresa que esta creando el usuario NO pertenece a una grupo empresarial \xF3 esta en estado inactivo en el grupo se regresara un mensaje que indica que la empresa no pertenece a ningun grupo empresarial</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la empresa que esta logueada si es por pantalla de cliente \xF3 codigo del pais de la empresa seleccionada si es por pantalla de admin carvajal</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia logueada si es por pantalla de cliente \xF3 codigo del pais de la empresa seleccionada si es por pantalla de admin carvajal</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de la opcion de menu del producto contratado seleccionado para agregar el permiso del usuario</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country":"CO",
    "eanCompany":"123",
    "idMenuOption":"48fbc0ee-4461-453d-ab86-72ac3a5d9540"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de compa\xF1ias disponibles para ser agregada como permiso</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"renameCompany",description:"<p>Concatenacion del nomnre de la compa\xF1ia con el pais para diferenciar visualmente entre paises</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "eanCompany": "7702010000010",
            "nameCompany": "Colgate Palmolive",
            "country": "CO",
            "renameCompany": "CO-Colgate Palmolive"
        },
        {
            "eanCompany": "7702117000012",
            "nameCompany": "Comestibles Italo S.A.",
            "country": "CO",
            "renameCompany": "CO-Comestibles Italo S.A."
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "La compa\xF1ia no pertenece a grupos empresariales",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"post",url:"/business/groups/companies/countries/available",title:"Compa\xF1ias disponibles por pais",name:"Compa\xF1ias_disponibles_por_pais",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las empresas que tienen relacion con el pais seleccionado con estado activo que aun no se hubiese seleccionado previamente y que aun no este registrada en grupos empresariales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"String",optional:!1,field:"Codigo",description:"<p>del pais seleccionado</p>"},{group:"200",type:"Object[]",optional:!0,field:"lstEansProviders",description:"<p>listado de los eans de empresas seleccionadas anteriormente a el registro actual</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "lstEansProviders":[
        "123",
        "CASSANDRA"
    ]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "lstEansProviders":[]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de empresas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"companyIdentificationNumber",description:"<p>Numero de indentificacion de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"checkDigit",description:"<p>Digito de verificacion</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"cityCode",description:"<p>Codigo de la ciudad</p>"},{group:"200",type:"String",optional:!1,field:"cityName",description:"<p>Nombre de la ciudad</p>"},{group:"200",type:"String",optional:!1,field:"adress",description:"<p>Direccion de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"contactName",description:"<p>Contacto de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"phone",description:"<p>telefono de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Correo de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>Usuario de creacion</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificacion</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>usuario de modificacion</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "company_type#F",
            "sk": "country#CO#ean_company#CASSANDRA",
            "typeCompany": "F",
            "eanCompany": "CASSANDRA",
            "companyIdentificationNumber": null,
            "checkDigit": null,
            "companyName": "CASSANDRA SOPORTE",
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
    "objectData": [],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"post",url:"/business/groups/idgroup",title:"Consultar grupo empresarial",name:"Consultar_grupo_empresarial",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite obtener todos los datos registrados de un grupo empresarial buscado por su id</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"String",optional:!1,field:"idGroup",description:"<p>Id de grupo que se desea consultar</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idGroup":"822b5f9c-021a-4f19-8f2a-abcd47d36938"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de empresas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"idGroup",description:"<p>Id del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"businessGroupName",description:"<p>Nombre del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"eanMainCompany",description:"<p>Ean de la empresa principal del grupo</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha cuando se creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha que se modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido del usuario que modifico el registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstCompanyBusinessGroupDTO",description:"<p>Listado empresas del grupo</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.state",description:"<p>Estado de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.containsUserActives",description:"<p>Campo que indica si la empresa contiene usuarios activos si el valor es true significa que la empresas contiene usuarios activos en el sistema</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {
        "pk": "country#CO",
        "sk": "id_group#822b5f9c-021a-4f19-8f2a-abcd47d36938",
        "country": "CO",
        "idGroup": "822b5f9c-021a-4f19-8f2a-abcd47d36938",
        "businessGroupName": "GRUPO de prueba1",
        "eanMainCompany": "1",       
        "creationUser": "Francisco diaz",
        "creationDate": "2023-06-22 12:28:53",
        "modificationDate": null,
        "modificationUser": null,      
        "lstCompanyBusinessGroupDTO": [
            {
                "eanCompany": "1",
                "nameCompany": "company principal",
                "country": "CO",
                "renameCompany": null,
                "state": "ACTIVO",
                "containsUserActives": false
            }
        ]
    },
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

    "responseMessage": "El sistema no responde o el proceso no se 
     termin\xF3 satisfactoriamente. Intenta nuevamente en unos segundos 
     o comun\xEDcate con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"post",url:"/business/groups",title:"Crear grupo empresarial",name:"Crear_grupo_empresarial",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite registrar un nuevo grupo empresarial en el sistema</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"String",optional:!1,field:"country",description:"<p>Codigo del pa\xEDs al que pertenece el grupo</p>"},{group:"200",type:"String",optional:!1,field:"businessGroupName",description:"<p>Nombre del grupo empresarial</p>"},{group:"200",type:"String",optional:!0,field:"eanMainCompany",description:"<p>Ean de la empresa principal del grupo</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario logueado que esta creando el registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstCompanyBusinessGroupDTO",description:"<p>Listado de empresas asociadas al grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.eanCompany",description:"<p>Ean de la empresa seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.nameCompany",description:"<p>Nombre de la empresa seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.country",description:"<p>Pais de la empresa seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.state",description:"<p>Estado del registro (ACTIVO \xF3 INACTIVO)</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "businessGroupName": "GRUPO de prueba",
    "eanMainCompany": "1",
    "creationUser": "Francisco diaz",
    "lstCompanyBusinessGroupDTO": [
        {
            "eanCompany": "1",
            "nameCompany": "company principal",
            "country": "CO",
            "state": "ACTIVO"
        },
        {
            "eanCompany": "3",
            "nameCompany": "company 3",
            "country": "MX",
            "state": "ACTIVO"
        },
        {
            "eanCompany": "4",
            "nameCompany": "company 4",
            "country": "PE",
            "state": "ACTIVO"
        }
    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "El Grupo Empresarial se ha creado correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente para el pa\xEDs CO ya hay un 
     grupo configurado con el mismo nombre. Modifica el pa\xEDs del 
     grupo empresarial o el nombre e intenta de nuevo ",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

    "responseMessage": "El sistema no responde o el proceso no se 
     termin\xF3 satisfactoriamente. Intenta nuevamente en unos segundos 
     o comun\xEDcate con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"put",url:"/business/groups",title:"Editar grupo empresarial",name:"Editar_grupo_empresarial",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite actualizar los datos ya registrados de un grupo empresarial</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partic\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenac\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idGroup",description:"<p>Id del grupo a actualizar</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Codigo del pa\xEDs al que pertenece el grupo</p>"},{group:"200",type:"String",optional:!1,field:"businessGroupName",description:"<p>Nombre del grupo empresarial</p>"},{group:"200",type:"String",optional:!0,field:"eanMainCompany",description:"<p>Ean de la empresa principal del grupo</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>Nombre y apellido del usuario logueado que esta editando el registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstCompanyBusinessGroupDTO",description:"<p>Listado de empresas asociadas al grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.eanCompany",description:"<p>Ean de la empresa seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.nameCompany",description:"<p>Nombre de la empresa seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.country",description:"<p>Pais de la empresa seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanyBusinessGroupDTO.state",description:"<p>Estado del registro (ACTIVO \xF3 INACTIVO)</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "country#CO",
    "sk": "id_group#bc3eacbd-4971-4b74-ad32-9043b8b2b5c6",
    "idGroup": "bc3eacbd-4971-4b74-ad32-9043b8b2b5c6",
    "country": "CO",
    "businessGroupName": "Grupo empresarial actualizado",
    "eanMainCompany": "ean1",
    "modificationUser": "Francisco diaz",
    "lstCompanyBusinessGroupDTO": [
        {
            "eanCompany": "ean1",
            "nameCompany": "company 1",
            "country": "CO",
            "state": "INACTIVO"
        },
        {
            "eanCompany": "ean2",
            "nameCompany": "company 2",
            "country": "MX",
            "state": "ACTIVO"
        },
        {
            "eanCompany": "ean3",
            "nameCompany": "company 3",
            "country": "PE",
            "state": "ACTIVO"
        },
        {
            "eanCompany": "ean4",
            "nameCompany": "company 4",
            "country": "CO",
            "state": "ACTIVO"
        }
    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Cambios guardados correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "Actualmente para el pa\xEDs CO ya hay un 
     grupo configurado con el mismo nombre. Modifica el pa\xEDs del 
     grupo empresarial o el nombre e intenta de nuevo ",
    "responseCode": "1002"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

    "responseMessage": "El sistema no responde o el proceso no se 
     termin\xF3 satisfactoriamente. Intenta nuevamente en unos segundos 
     o comun\xEDcate con soporte https://soporte.cen.biz/.",
     "responseCode": "1002"`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"post",url:"/business/groups/companies/countries",title:"Empresas de grupos por pa\xEDs",name:"Empresas_de_grupos_por_pa\xEDs",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las empresas que estan asignadas a grupos empresariales segun los paises seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"lstContries",description:"<p>listado de paises seleccionados</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX"
    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de empresas</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"idGroup",description:"<p>Id del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"businessGroupName",description:"<p>Nombre del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"provider",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha que se modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>usuario que modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
    {
        "pk": "country#CO",
        "sk": "ean_provider#2",
        "country": "CO",
        "idGroup": "ee645436-bd13-42ba-89ac-fec9109ff3c0",
        "businessGroupName": "GRUPO de prueba",
        "eanProvider": "2",
        "provider": "company 2",
        "creationUser": "Francisco diaz",
        "creationDate": "2023-06-22 10:55:53",
        "modificationDate": null,
        "modificationUser": null,
        "state": "ACTIVO"
    }
],
"responseMessage": "consulta correctamente",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda.
                        Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"post",url:"/business/groups/countries",title:"Grupos empresariales por pais",name:"Grupos_empresariales_por_pais",group:"Grupo_empresarial",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los grupos empresariales registrados en el sistema segun los codigos de paises seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"lstContries",description:"<p>listado de paises seleccionados</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO"

    ]
}`,type:"json"},{title:"Request-Example:",content:`
{
    "lstContries": [
        "CO",
        "MX",
        "PE"

    ]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de grupos empresariales</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>C\xF3digo del pais del grupo</p>"},{group:"200",type:"String",optional:!1,field:"idGroup",description:"<p>Id del grupo empresarial</p>"},{group:"200",type:"String",optional:!1,field:"businessGroupName",description:"<p>Nombre del grupo empresarial</p>"},{group:"200",type:"String",optional:!0,field:"eanMainCompany",description:"<p>ean de la empresa principal del grupo</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha que se modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",description:"<p>usuario que modifico el registro</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [       
        {
            "pk": "country#CO",
            "sk": "id_group#ee645436-bd13-42ba-89ac-fec9109ff3c0",
            "country": "CO",
            "idGroup": "ee645436-bd13-42ba-89ac-fec9109ff3c0",
            "businessGroupName": "GRUPO de prueba",
            "eanMainCompany": "1",  
            "creationUser": "Francisco diaz",
            "creationDate": "2023-06-22 10:55:53",
            "modificationDate": null,
            "modificationUser": null
        }
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda.
                        Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente.
                        Intenta nuevamente en unos segundos o comun\xEDcate
                        con soporte https://soporte.cen.biz/.",
    "responseCode": "1004"
}`,type:"json"}]},filename:"BusinessGroupWebApi.java",groupTitle:"Grupo_empresarial"},{type:"get",url:"/dashboards/home/providers/:eanProvider/countries/:country",title:"Indicadores home graficas",name:"Indicadores_home_graficas",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener la infomacion para mostrar en la graficas de barra y tortas que se presentan en el home del fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateSales",description:"<p>Fecha de ultima actualizaci\xF3n para ventas</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateInventories",description:"<p>Fecha de ultima actualizaci\xF3n para Inventarios</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",description:"<p>Objeto con el listado de datos para pintar en las graficas</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"chartType",description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!1,field:"chartDetail",description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",description:"<p>Nombre del primer campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"field2",description:"<p>Nombre del segundo campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value1",description:"<p>Primer valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value2",description:"<p>Segundo valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response: ",content:`
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
}`,type:"json"}]},filename:"BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"put",url:"/dynamicreports",title:"Actualizar configuraci\xF3n",name:"Actualizar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite actualizar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.provider",description:"<p>Nombre del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCompany",description:"<p>CheckBox empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.creationDare",description:"<p>fecha de creacion</p>"},{group:"Parameter",type:"String",optional:!1,field:"dynamicReportDTO.modificationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
             {
             "pk": "ean_provider#7702010000050",
             "sk": "pivot#780ace51-5485-4fff-bde8-641796393acd",
             "dynamicReportDTO": {
             "eanProvider": "7702010000050",
             "provider": "empresa de grupo",
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
             "checkCompany": 1,
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

}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/filter",title:"Filtro de Reportes Dinamicos",name:"Filtro_de_Reportes_Dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite filtrar los Reportes Dinamicos por un estado y Fecha Vencimiento</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emails",description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"reportStatus",description:"<p>Estado del Reporte Dinamico (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"Parameter",type:"String",optional:!1,field:"expirationDate",description:"<p>fecha de Vencimiento en formato 2022-12</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "ean2",
    "reportStatus": "ACTIVO",
    "emails": "francisco@hotmail.com"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "ean2",
    "expirationDate":"2024-07",
    "emails": "francisco@hotmail.com"
}`,type:"json"},{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "ean2",
    "reportStatus": "ACTIVO",
    "expirationDate":"2024-07",
    "emails": "francisco@hotmail.com"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"company",description:"<p>Pais y nombre de la compa\xF1ia</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.provider",description:"<p>Nombre del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCompany",description:"<p>CheckBox Empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
                   {
                   "objectData": [
                   {
                   "pk": "ean_provider#7702010000010",
                   "sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8",
                   "company": "MX-company2",
                   "dynamicReportDTO": {
                   "eanProvider": "7702010000010",
                   "provider": "company2",
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
                   "checkCompany": 1,
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
                   }`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",description:"<p>Nombre del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"reportStatus",description:"<p>Estado del reporte (&quot;ACTIVO&quot;,&quot;INACTIVO&quot;)</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterChannels",description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Categories",description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterSalesMan.salesManCode",description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCompany",description:"<p>CheckBox empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>listado Objectos de compa\xF1ias seleccionadas IMPORTANTE: si la empresa del usuario que esta logueado NO pertenece a un grupo empresarial enviar la lista vacia ejemplo lstCompanies: []</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>pais de la compa\xF1ia seleccionada</p>"}]},examples:[{title:"Request-Example:",content:`
 {
 "eanProvider": "7702010000010",
 "provider": "Colgate palmolive",
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
 "checkCompany": 1,
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
 "creationUser": "francisco diaz",
 "lstCompanies": [
    {
        "eanCompany": "ean1",
        "nameCompany": "Nombre empresa 1",
        "country": "CO"
    },
    {
        "eanCompany": "ean2",
        "nameCompany": "Nombre empresa 2",
        "country": "CO"
    }
]

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
}`,type:"json"}]},filename:"DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/provider",title:"Listado Reportes dinamicos",name:"Listado_de_Reportes_dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los Reportes dinamicos asociados al fabricante</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean del fabricante que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Pais del fabricante que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emails",description:"<p>Correo de usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "ean1",
    "emails": "francisco@hotmail.com"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"company",description:"<p>Pais y nombre de la empresa configurada para el reporte</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.provider",description:"<p>Nombre del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCompany",description:"<p>CheckBox empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
                   {
                   "objectData": [
                   {
                   "pk": "ean_provider#7702010000010",
                   "sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8",
                   "company": "MX-company2",
                   "dynamicReportDTO": {
                   "eanProvider": "7702010000010",
                   "provider": "company2",
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
                   "checkCompany": 1,
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"company",description:"<p>Pais y nombre de la compa\xF1ias</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.eanProvider",description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.provider",description:"<p>Nombre del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.country",description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfReport",description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationFrequency",description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.generationDay",description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.reportStatus",description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.typeOfDataGrouping",description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.amountOfPeriodsToGenerate",description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.fileName",description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.emails",description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.comparePreviousPeriod",description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.crossSalesOrInventories",description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterTraders",description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.eanTrader",description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterTraders.trader",description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterEansPointsales",description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterPointSales",description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterFormats",description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies",description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterLevel4Geographies",description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterChannels",description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterProducts",description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.eanProduct",description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterProducts.productName",description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstLevel1Jeraquies",description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan",description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.lstFilterSalesMan.salesMan",description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterBrands",description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterColors",description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO.lstFilterSizes",description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCompany",description:"<p>CheckBox empresa (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkTrader",description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkPointSale",description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkChanel",description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkFormat",description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkDepartamentState",description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCity",description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesForceHierarchy",description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkSalesMan",description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkCategoriesProduct",description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkProduct",description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkBrand",description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkColor",description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkStandardUnit",description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkWeight",description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"dynamicReportDTO.checkVolume",description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.idUser",description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,field:"dynamicReportDTO.creationUser",description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
                   {
                   "objectData": [
                   {
                   "pk": "ean_provider#7702010000010",
                   "sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8",
                   "company": "MX-company2",
                   "dynamicReportDTO": {
                   "eanProvider": "7702010000010",
                   "provider": "company2",
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
                   "checkCompany": 1,
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

"responseMessage": "Los documentos seleccionados est\xE1n en
proceso de recarga.
Consulta el estado de la recarga unificada en la
funcionalidad Ver Solicitudes"

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

"responseMessage": "Los registros est\xE1n en proceso de
borrado.
Consulta el estado de la solicitud en la funcionalidad Ver
Solicitudes"

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

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de usuarios</p>"},{group:"200",type:"String",optional:!1,field:"pk",description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"pkGsi",description:"<p>Indice Global del Objecto</p>"},{group:"200",type:"String",optional:!1,field:"skLsi",description:"<p>Ondice Local del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Correo dle usuario</p>"},{group:"200",type:"String",optional:!1,field:"phone",description:"<p>telefono del usuario</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id Opcion de menu tipo producto contratado</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre Opcion de menu tipo producto contratado</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nomvbre del rol asignado</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol asignado</p>"},{group:"200",type:"Number",optional:!1,field:"state",description:"<p>estado del usuario</p>"},{group:"200",type:"String",optional:!1,field:"createUser",description:"<p>usuario de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",description:"<p>Fecha de creacion de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",description:"<p>Fecha de modificai\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",description:"<p>Usuario que modifico el registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>Listado de compa\xF1ias seleccionada para permisos del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.renameCompany",description:"<p>renombramiento de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
    "lstCompanies": [
    {
        "eanCompany": "21",
        "nameCompany": "compa",
        "country": "CO",
        "renameCompany": "CO-compa"
    }
],
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

}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users",title:"Creacion de usuario",name:"Creacion_de_usuario",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite crear un usuario en la plataforma</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"Parameter",type:"Number",optional:!1,field:"phone",description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",description:"<p>Id de opci\xF3n de men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>Listado de compa\xF1ias seleccionada para permisos del usuario IMPORTANTE si la empresa que esta creando el usuario no pertenece a ningun grupo empresarial, enviar el lstCompanies vacio ejemplo lstCompanies = []</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"lstCompanies.renameCompany",description:"<p>renombramiento de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
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
 "state": 1,
"lstCompanies": [
    {
        "eanCompany": "21",
        "nameCompany": "compa",
        "country": "CO",
        "renameCompany": "CO-compa"
    }
]
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
 "state": 1,
"lstCompanies": [
    {
        "eanCompany": "21",
        "nameCompany": "compa",
        "country": "CO",
        "renameCompany": "CO-compa"
    }
]
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
 "state": 1,
  "lstCompanies": [
    {
        "eanCompany": "21",
        "nameCompany": "compa",
        "country": "CO",
        "renameCompany": "CO-compa"
    }
]
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
 "state": 0,
 "lstCompanies": [
    {
        "eanCompany": "21",
        "nameCompany": "compa",
        "country": "CO",
        "renameCompany": "CO-compa"
    }
]
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

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"Object",optional:!1,field:"User",description:"<p>Usuarios registrados</p>"},{group:"200",type:"Number",optional:!1,field:"idUser",description:"<p>Id del usuario</p>"},{group:"200",type:"Object",optional:!1,field:"company",description:"<p>Compa\xF1ia que pertenece el usuario</p>"},{group:"200",type:"Number",optional:!1,field:"company.idCompany",description:"<p>Id de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"company.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"company.country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"boolean",optional:!1,field:"company.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"company.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"company.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"company.typeCompany",description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"company.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"company.userLimit",description:"<p>limite de usuarios activos</p>"},{group:"200",type:"Object",optional:!1,field:"role",description:"<p>Rol asignado al usuario</p>"},{group:"200",type:"Number",optional:!1,field:"role.idRole",description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"role.nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"role.descriptionRole",description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"boolean",optional:!1,field:"role.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"role.lstMenuRole",description:"<p>Lista de opciones del men\xFA</p>"},{group:"200",type:"Object",optional:!1,field:"role.lstMenuRole.menuRole",description:"<p>Menu de opciones para el rol</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.idMenuRole",description:"<p>Id del registro</p>"},{group:"200",type:"Object",optional:!1,field:"role.lstMenuRole.menuRole.menu",description:"<p>Opci\xF3n asignada del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.idMenu",description:"<p>Id de la opci\xF3n del menu</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.idMenuParent",description:"<p>Id padre de la opci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.name",description:"<p>Nombre de la opci\xF3n del menu</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.description",description:"<p>Descripci\xF3n de la opci\xF3n del menu</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.icon",description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.url",description:"<p>Url a cargar</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.level",description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.menu.orderMenu",description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.nameEnglish",description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"role.lstMenuRole.menuRole.menu.descriptionEnglish",description:"<p>descripcion del men\xFA en ingles</p>"},{group:"200",type:"boolean",optional:!1,field:"role.lstMenuRole.menuRole.active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"role.lstMenuRole.menuRole.userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"active",description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>Listado de compa\xF1ias seleccionada para permisos del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.renameCompany",description:"<p>renombramiento de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "pk": "ean_company#7702010000010",
            "sk": "id_menu_option#48fbc0ee-4461-453d-ab86-72ac3a5d9540#user#evjaimes11@gmail.com",
            "pkGsi": "evjaimes11@gmail.com",
            "skLsi": "user#evjaimes11@gmail.com",
            "eanCompany": "7702010000010",
            "companyName": "Colgate Palmolive",
            "firstName": "Elina",
            "lastName": "Jaimes",
            "email": "evjaimes11@gmail.com",
            "phone": null,
            "idMenuOption": "48fbc0ee-4461-453d-ab86-72ac3a5d9540",
            "menuOptionName": "Ventas e Inventarios",
            "nameRole": "Admin Cliente",
            "idRole": "d09ccca0-be5f-404b-a897-2118bd908ea0",
            "state": 1,
            "createUser": "Elina Jaimes",
            "creationDate": "20230511161744",
            "modificationDate": "20230511161744",
            "userModification": "Elina Jaimes",
            "lstCompanies": [
                {
                    "eanCompany": "7702010000010",
                    "nameCompany": "Colgate Palmolive",
                    "country": null,
                    "renameCompany": "Colgate Palmolive",
                    "state": null,
                    "containsUserActives": null
                }
            ],
            "previousState": null,
            "lstCurrentCompanies": null
        }
    ],
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
}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/companies/:eanCompany",title:"Usuarios por compa\xF1ia",name:"Usuarios_por_compa\xF1ia",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite consultar los usuario que pertenecen a una compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",description:"<p>Id unico de la compa\xF1ia</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",description:"<p>Id del rol</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstCompanies",description:"<p>Listado de compa\xF1ias seleccionada para permisos del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.country",description:"<p>pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"lstCompanies.renameCompany",description:"<p>renombramiento de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
"userModification": null,
"lstCompanies": [
       {
           "eanCompany": "21",
           "nameCompany": "compa",
           "country": "CO",
           "renameCompany": "CO-compa"
       }
   ]
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
"userModification": null,
"lstCompanies": [
       {
           "eanCompany": "21",
           "nameCompany": "compa",
           "country": "CO",
           "renameCompany": "CO-compa"
       }
   ]
}
],
"responseMessage": "consulta company correctamente",
"responseCode": "0"
}`,type:"json"}]},filename:"UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users/companies/permissions",title:"listado empresas con permisos",name:"listado_empresas_con_permisos",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite Obtener el listado de las empresas con las que el usuario cuenta permisos para ver informacion dependiendo del tipo de opcion del menu y cuando la empresas a la que el usuario esta creado pertenece a un grupo empresarial, IMPORTANTE si se desan listar las empresas con las que un usuario cuenta con permisos para visualizar:<br> ventas e inventarios enviar typeOption = 1,\\</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",description:"<p>Codigo del pais de la empresa a la que pertenece el usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",description:"<p>Ean de la empresa a la que pertenece el usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",description:"<p>Email del usuario logueado</p>"},{group:"Parameter",type:"Number",optional:!1,field:"typeOption",description:"<p>Tipo de opcion de la que se desea listar las empresas</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country":"CO",
    "eanProvider":"12",
    "email":"usuarigrupo@gmail.com",
    "typeOption":1
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",description:"<p>Objeto con el listado de empresas que tiene permisos el usuario</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"renameCompany",description:"<p>Nombre concatenado de la compa\xF1ia y pais</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        {
            "eanCompany": "21",
            "nameCompany": "compa\xF1ia 1",
            "country": "CO",
            "renameCompany": "CO-compa\xF1ia 1"
        }
    ],
    "responseMessage": "Consulta usuario correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "objectData": [],
    "responseMessage": "Consulta usuario correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "La compa\xF1ia no pertenece a grupos empresariales",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1004",

"responseMessage": "El sistema no responde o el proceso no se termin\xF3
  satisfactoriamente. Intenta nuevamente en unos segundos 
  o comun\xEDcate con soporte https://soporte.cen.biz/."

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
}`,type:"json"}]},filename:"QlikWebApi.java",groupTitle:"qlik"}];const pe={name:"Analitica",version:"0.1.0",description:"Documentacion para el proyecto de analitica",url:"http://prescriptiva-service/v1",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Fri Jul 07 2023 08:42:15 GMT-0500 (hora est\xE1ndar de Colombia)",url:"https://apidocjs.com",version:"0.51.1"}};Ue();const Ne=p().compile(v()("#template-header").html()),Re=p().compile(v()("#template-footer").html()),ie=p().compile(v()("#template-article").html()),ye=p().compile(v()("#template-compare-article").html()),he=p().compile(v()("#template-generator").html()),be=p().compile(v()("#template-project").html()),Ze=p().compile(v()("#template-sections").html()),Ke=p().compile(v()("#template-sidenav").html()),Je={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};pe.template=Object.assign(Je,(Z=pe.template)!=null?Z:{}),pe.template.forceLanguage&&je(pe.template.forceLanguage);const Pe=(0,r.groupBy)(Fe,Y=>Y.group),qe={};v().each(Pe,(Y,W)=>{qe[Y]=(0,r.groupBy)(W,X=>X.name)});const Qe=[];v().each(qe,(Y,W)=>{let X=[];v().each(W,(ee,se)=>{const ue=se[0].title;ue&&X.push(ue.toLowerCase()+"#~#"+ee)}),X.sort(),pe.order&&(X=j(X,pe.order,"#~#")),X.forEach(ee=>{const ue=ee.split("#~#")[1];W[ue].forEach(me=>{Qe.push(me)})})}),Fe=Qe;let Xe={};const zt={};let Lt={};Lt[pe.version]=1,v().each(Fe,(Y,W)=>{Xe[W.group]=1,zt[W.group]=W.groupTitle||W.group,Lt[W.version]=1}),Xe=Object.keys(Xe),Xe.sort(),pe.order&&(Xe=q(zt,pe.order)),Lt=Object.keys(Lt),Lt.sort(o().compare),Lt.reverse();const Nt=[];Xe.forEach(Y=>{Nt.push({group:Y,isHeader:!0,title:zt[Y]});let W="";Fe.forEach(X=>{X.group===Y&&(W!==X.name?Nt.push({title:X.title,group:Y,name:X.name,type:X.type,version:X.version,url:X.url}):Nt.push({title:X.title,group:Y,hidden:!0,name:X.name,type:X.type,version:X.version,url:X.url}),W=X.name)})});function Tn(Y,W,X){let ee=!1;if(!W)return ee;const se=W.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return se&&se.forEach(function(ue){const me=ue.substring(2,3),Ee=ue.replace(/<.+?>/g,""),Te=ue.match(/id="api-([^-]+)(?:-(.+))?"/),Ie=Te?Te[1]:null,Ve=Te?Te[2]:null;me==="1"&&Ee&&Ie&&(Y.splice(X,0,{group:Ie,isHeader:!0,title:Ee,isFixed:!0}),X++,ee=!0),me==="2"&&Ee&&Ie&&Ve&&(Y.splice(X,0,{group:Ie,name:Ve,isHeader:!1,title:Ee,isFixed:!1,version:"1.0"}),X++)}),ee}let an;if(pe.header&&(an=Tn(Nt,pe.header.content,0),an||Nt.unshift({group:"_header",isHeader:!0,title:pe.header.title==null?Ce("General"):pe.header.title,isFixed:!0})),pe.footer){const Y=Nt.length;an=Tn(Nt,pe.footer.content,Nt.length),!an&&pe.footer.title!=null&&Nt.splice(Y,0,{group:"_footer",isHeader:!0,title:pe.footer.title,isFixed:!0})}const Wt=pe.title?pe.title:"apiDoc: "+pe.name+" - "+pe.version;v()(document).attr("title",Wt),v()("#loader").remove();const gn={nav:Nt};v()("#sidenav").append(Ke(gn)),v()("#generator").append(he(pe)),(0,r.extend)(pe,{versions:Lt}),v()("#project").append(be(pe)),pe.header&&v()("#header").append(Ne(pe.header)),pe.footer&&(v()("#footer").append(Re(pe.footer)),pe.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const jt={};let mn="";Xe.forEach(function(Y){const W=[];let X="",ee={},se=Y,ue="";jt[Y]={},Fe.forEach(function(me){Y===me.group&&(X!==me.name?(Fe.forEach(function(Ee){Y===Ee.group&&me.name===Ee.name&&(Object.prototype.hasOwnProperty.call(jt[me.group],me.name)||(jt[me.group][me.name]=[]),jt[me.group][me.name].push(Ee.version))}),ee={article:me,versions:jt[me.group][me.name]}):ee={article:me,hidden:!0,versions:jt[me.group][me.name]},pe.sampleUrl&&pe.sampleUrl===!0&&(pe.sampleUrl=window.location.origin),pe.url&&ee.article.url.substr(0,4).toLowerCase()!=="http"&&(ee.article.url=pe.url+ee.article.url),Nn(ee,me),me.groupTitle&&(se=me.groupTitle),me.groupDescription&&(ue=me.groupDescription),W.push({article:ie(ee),group:me.group,name:me.name,aloneDisplay:pe.template.aloneDisplay}),X=me.name)}),ee={group:Y,title:se,description:ue,articles:W,aloneDisplay:pe.template.aloneDisplay},mn+=Ze(ee)}),v()("#sections").append(mn),pe.template.aloneDisplay||(document.body.dataset.spy="scroll",v()("body").scrollspy({target:"#scrollingNav"})),v()(".form-control").on("focus change",function(){v()(this).removeClass("border-danger")}),v()(".sidenav").find("a").on("click",function(Y){Y.preventDefault();const W=this.getAttribute("href");if(pe.template.aloneDisplay){const X=document.querySelector(".sidenav > li.active");X&&X.classList.remove("active"),this.parentNode.classList.add("active")}else{const X=document.querySelector(W);X&&v()("html,body").animate({scrollTop:X.offsetTop},400)}window.location.hash=W});function yt(Y){let W=!1;return v().each(Y,X=>{W=W||(0,r.some)(Y[X],ee=>ee.type)}),W}function An(){v()('button[data-toggle="popover"]').popover().click(function(W){W.preventDefault()});const Y=v()("#version strong").html();if(v()("#sidenav li").removeClass("is-new"),pe.template.withCompare&&v()("#sidenav li[data-version='"+Y+"']").each(function(){const W=v()(this).data("group"),X=v()(this).data("name"),ee=v()("#sidenav li[data-group='"+W+"'][data-name='"+X+"']").length,se=v()("#sidenav li[data-group='"+W+"'][data-name='"+X+"']").index(v()(this));(ee===1||se===ee-1)&&v()(this).addClass("is-new")}),v()(".nav-tabs-examples a").click(function(W){W.preventDefault(),v()(this).tab("show")}),v()(".nav-tabs-examples").find("a:first").tab("show"),v()(".sample-request-content-type-switch").change(function(){v()(this).val()==="body-form-data"?(v()("#sample-request-body-json-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-form-input-"+v()(this).data("id")).show()):(v()("#sample-request-body-form-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-json-input-"+v()(this).data("id")).show())}),pe.template.aloneDisplay&&(v()(".show-group").click(function(){const W="."+v()(this).attr("data-group")+"-group",X="."+v()(this).attr("data-group")+"-article";v()(".show-api-group").addClass("hide"),v()(W).removeClass("hide"),v()(".show-api-article").addClass("hide"),v()(X).removeClass("hide")}),v()(".show-api").click(function(){const W=this.getAttribute("href").substring(1),X=document.getElementById("version").textContent.trim(),ee=`.${this.dataset.name}-article`,se=`[id="${W}-${X}"]`,ue=`.${this.dataset.group}-group`;v()(".show-api-group").addClass("hide"),v()(ue).removeClass("hide"),v()(".show-api-article").addClass("hide");let me=v()(ee);v()(se).length&&(me=v()(se).parent()),me.removeClass("hide"),W.match(/_(header|footer)/)&&document.getElementById(W).classList.remove("hide")})),pe.template.aloneDisplay||v()("body").scrollspy("refresh"),pe.template.aloneDisplay){const W=window.location.hash;if(W!=null&&W.length!==0){const X=document.getElementById("version").textContent.trim(),ee=document.querySelector(`li .${W.slice(1)}-init`),se=document.querySelector(`li[data-version="${X}"] .show-api.${W.slice(1)}-init`);let ue=ee;se&&(ue=se),ue.click()}}}function kn(Y){typeof Y=="undefined"?Y=v()("#version strong").html():v()("#version strong").html(Y),v()("article").addClass("hide"),v()("#sidenav li:not(.nav-fixed)").addClass("hide");const W={};document.querySelectorAll("article[data-version]").forEach(X=>{const ee=X.dataset.group,se=X.dataset.name,ue=X.dataset.version,me=ee+se;!W[me]&&o().lte(ue,Y)&&(W[me]=!0,document.querySelector(`article[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${ee}"][data-name="${se}"][data-version="${ue}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${ee}"]`).classList.remove("hide"))}),v()("article[data-version]").each(function(X){const ee=v()(this).data("group");v()("section#api-"+ee).removeClass("hide"),v()("section#api-"+ee+" article:visible").length===0?v()("section#api-"+ee).addClass("hide"):v()("section#api-"+ee).removeClass("hide")})}if(kn(),v()("#versions li.version a").on("click",function(Y){Y.preventDefault(),kn(v()(this).html())}),v()("#compareAllWithPredecessor").on("click",wn),v()("article .versions li.version a").on("click",dn),v().urlParam=function(Y){const W=new RegExp("[\\?&amp;]"+Y+"=([^&amp;#]*)").exec(window.location.href);return W&&W[1]?W[1]:null},v().urlParam("compare")&&v()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const Y=decodeURI(window.location.hash);v()(Y).length>0&&v()("html,body").animate({scrollTop:parseInt(v()(Y).offset().top)},0)}v()("#scrollingNav .sidenav-search input.search").focus(),v()('[data-action="filter-search"]').on("keyup",Y=>{const W=Y.currentTarget.value.toLowerCase();v()(".sidenav").find("a.nav-list-item").each((X,ee)=>{v()(ee).show(),ee.innerText.toLowerCase().includes(W)||v()(ee).hide()})}),v()("span.search-reset").on("click",function(){v()("#scrollingNav .sidenav-search input.search").val("").focus(),v()(".sidenav").find("a.nav-list-item").show()});function dn(Y){Y.preventDefault();const W=v()(this).parents("article"),X=v()(this).html(),ee=W.find(".version"),se=ee.find("strong").html();ee.find("strong").html(X);const ue=W.data("group"),me=W.data("name"),Ee=W.data("version"),Te=W.data("compare-version");if(Te!==X&&!(!Te&&Ee===X)){if(Te&&jt[ue][me][0]===X||Ee===X)Kn(ue,me,Ee);else{let Ie={},Ve={};v().each(qe[ue][me],function(at,Yt){Yt.version===Ee&&(Ie=Yt),Yt.version===X&&(Ve=Yt)});const ve={article:Ie,compare:Ve,versions:jt[ue][me]};ve.article.id=ve.article.group+"-"+ve.article.name+"-"+ve.article.version,ve.article.id=ve.article.id.replace(/\./g,"_"),ve.compare.id=ve.compare.group+"-"+ve.compare.name+"-"+ve.compare.version,ve.compare.id=ve.compare.id.replace(/\./g,"_");let Le=Ie;Le.parameter&&Le.parameter.fields&&(ve._hasTypeInParameterFields=yt(Le.parameter.fields)),Le.error&&Le.error.fields&&(ve._hasTypeInErrorFields=yt(Le.error.fields)),Le.success&&Le.success.fields&&(ve._hasTypeInSuccessFields=yt(Le.success.fields)),Le.info&&Le.info.fields&&(ve._hasTypeInInfoFields=yt(Le.info.fields)),Le=Ve,ve._hasTypeInParameterFields!==!0&&Le.parameter&&Le.parameter.fields&&(ve._hasTypeInParameterFields=yt(Le.parameter.fields)),ve._hasTypeInErrorFields!==!0&&Le.error&&Le.error.fields&&(ve._hasTypeInErrorFields=yt(Le.error.fields)),ve._hasTypeInSuccessFields!==!0&&Le.success&&Le.success.fields&&(ve._hasTypeInSuccessFields=yt(Le.success.fields)),ve._hasTypeInInfoFields!==!0&&Le.info&&Le.info.fields&&(ve._hasTypeInInfoFields=yt(Le.info.fields));const vt=ye(ve);W.after(vt),W.next().find(".versions li.version a").on("click",dn),v()("#sidenav li[data-group='"+ue+"'][data-name='"+me+"'][data-version='"+se+"']").addClass("has-modifications"),W.remove()}h().highlightAll()}}function wn(Y){Y.preventDefault(),v()("article:visible .versions").each(function(){const X=v()(this).parents("article").data("version");let ee=null;v()(this).find("li.version a").each(function(){v()(this).html()<X&&!ee&&(ee=v()(this))}),ee&&ee.trigger("click")})}function Nn(Y,W){Y.id=Y.article.group+"-"+Y.article.name+"-"+Y.article.version,Y.id=Y.id.replace(/\./g,"_"),W.header&&W.header.fields&&(Y._hasTypeInHeaderFields=yt(W.header.fields)),W.parameter&&W.parameter.fields&&(Y._hasTypeInParameterFields=yt(W.parameter.fields)),W.error&&W.error.fields&&(Y._hasTypeInErrorFields=yt(W.error.fields)),W.success&&W.success.fields&&(Y._hasTypeInSuccessFields=yt(W.success.fields)),W.info&&W.info.fields&&(Y._hasTypeInInfoFields=yt(W.info.fields)),Y.template=pe.template}function po(Y,W,X){let ee={};v().each(qe[Y][W],function(ue,me){me.version===X&&(ee=me)});const se={article:ee,versions:jt[Y][W]};return Nn(se,ee),ie(se)}function Kn(Y,W,X){const ee=v()("article[data-group='"+Y+"'][data-name='"+W+"']:visible"),se=po(Y,W,X);ee.after(se),ee.next().find(".versions li.version a").on("click",dn),v()("#sidenav li[data-group='"+Y+"'][data-name='"+W+"'][data-version='"+X+"']").removeClass("has-modifications"),ee.remove()}function j(Y,W,X){const ee=[];return W.forEach(function(se){X?Y.forEach(function(ue){const me=ue.split(X);(me[0]===se||me[1]===se)&&ee.push(ue)}):Y.forEach(function(ue){ue===se&&ee.push(se)})}),Y.forEach(function(se){ee.indexOf(se)===-1&&ee.push(se)}),ee}function q(Y,W){const X=[];return W.forEach(ee=>{Object.keys(Y).forEach(se=>{Y[se].replace(/_/g," ")===ee&&X.push(se)})}),Object.keys(Y).forEach(ee=>{X.indexOf(ee)===-1&&X.push(ee)}),X}An()}})()})();
