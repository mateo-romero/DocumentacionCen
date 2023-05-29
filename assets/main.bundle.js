(()=>{var Zs={7376:()=>{+function(C){"use strict";var h=".dropdown-backdrop",n='[data-toggle="dropdown"]',g=function(l){C(l).on("click.bs.dropdown",this.toggle)};g.VERSION="3.4.1";function a(l){var o=l.attr("data-target");o||(o=l.attr("href"),o=o&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var c=o!=="#"?C(document).find(o):null;return c&&c.length?c:l.parent()}function r(l){l&&l.which===3||(C(h).remove(),C(n).each(function(){var o=C(this),c=a(o),m={relatedTarget:this};c.hasClass("open")&&(l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&C.contains(c[0],l.target)||(c.trigger(l=C.Event("hide.bs.dropdown",m)),!l.isDefaultPrevented()&&(o.attr("aria-expanded","false"),c.removeClass("open").trigger(C.Event("hidden.bs.dropdown",m)))))}))}g.prototype.toggle=function(l){var o=C(this);if(!o.is(".disabled, :disabled")){var c=a(o),m=c.hasClass("open");if(r(),!m){"ontouchstart"in document.documentElement&&!c.closest(".navbar-nav").length&&C(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(C(this)).on("click",r);var i={relatedTarget:this};if(c.trigger(l=C.Event("show.bs.dropdown",i)),l.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(C.Event("shown.bs.dropdown",i))}return!1}},g.prototype.keydown=function(l){if(!(!/(38|40|27|32)/.test(l.which)||/input|textarea/i.test(l.target.tagName))){var o=C(this);if(l.preventDefault(),l.stopPropagation(),!o.is(".disabled, :disabled")){var c=a(o),m=c.hasClass("open");if(!m&&l.which!=27||m&&l.which==27)return l.which==27&&c.find(n).trigger("focus"),o.trigger("click");var i=" li:not(.disabled):visible a",y=c.find(".dropdown-menu"+i);if(y.length){var u=y.index(l.target);l.which==38&&u>0&&u--,l.which==40&&u<y.length-1&&u++,~u||(u=0),y.eq(u).trigger("focus")}}}};function s(l){return this.each(function(){var o=C(this),c=o.data("bs.dropdown");c||o.data("bs.dropdown",c=new g(this)),typeof l=="string"&&c[l].call(o)})}var d=C.fn.dropdown;C.fn.dropdown=s,C.fn.dropdown.Constructor=g,C.fn.dropdown.noConflict=function(){return C.fn.dropdown=d,this},C(document).on("click.bs.dropdown.data-api",r).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()}).on("click.bs.dropdown.data-api",n,g.prototype.toggle).on("keydown.bs.dropdown.data-api",n,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery)},394:()=>{+function(C){"use strict";var h=function(a,r){this.init("popover",a,r)};if(!C.fn.tooltip)throw new Error("Popover requires tooltip.js");h.VERSION="3.4.1",h.DEFAULTS=C.extend({},C.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=C.extend({},C.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.setContent=function(){var a=this.tip(),r=this.getTitle(),s=this.getContent();if(this.options.html){var d=typeof s;this.options.sanitize&&(r=this.sanitizeHtml(r),d==="string"&&(s=this.sanitizeHtml(s))),a.find(".popover-title").html(r),a.find(".popover-content").children().detach().end()[d==="string"?"html":"append"](s)}else a.find(".popover-title").text(r),a.find(".popover-content").children().detach().end().text(s);a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()},h.prototype.getContent=function(){var a=this.$element,r=this.options;return a.attr("data-content")||(typeof r.content=="function"?r.content.call(a[0]):r.content)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function n(a){return this.each(function(){var r=C(this),s=r.data("bs.popover"),d=typeof a=="object"&&a;!s&&/destroy|hide/.test(a)||(s||r.data("bs.popover",s=new h(this,d)),typeof a=="string"&&s[a]())})}var g=C.fn.popover;C.fn.popover=n,C.fn.popover.Constructor=h,C.fn.popover.noConflict=function(){return C.fn.popover=g,this}}(jQuery)},1444:()=>{+function(C){"use strict";function h(a,r){this.$body=C(document.body),this.$scrollElement=C(a).is(document.body)?C(window):C(a),this.options=C.extend({},h.DEFAULTS,r),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",C.proxy(this.process,this)),this.refresh(),this.process()}h.VERSION="3.4.1",h.DEFAULTS={offset:10},h.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},h.prototype.refresh=function(){var a=this,r="offset",s=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),C.isWindow(this.$scrollElement[0])||(r="position",s=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var d=C(this),l=d.data("target")||d.attr("href"),o=/^#./.test(l)&&C(l);return o&&o.length&&o.is(":visible")&&[[o[r]().top+s,l]]||null}).sort(function(d,l){return d[0]-l[0]}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])})},h.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,r=this.getScrollHeight(),s=this.options.offset+r-this.$scrollElement.height(),d=this.offsets,l=this.targets,o=this.activeTarget,c;if(this.scrollHeight!=r&&this.refresh(),a>=s)return o!=(c=l[l.length-1])&&this.activate(c);if(o&&a<d[0])return this.activeTarget=null,this.clear();for(c=d.length;c--;)o!=l[c]&&a>=d[c]&&(d[c+1]===void 0||a<d[c+1])&&this.activate(l[c])},h.prototype.activate=function(a){this.activeTarget=a,this.clear();var r=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',s=C(r).parents("li").addClass("active");s.parent(".dropdown-menu").length&&(s=s.closest("li.dropdown").addClass("active")),s.trigger("activate.bs.scrollspy")},h.prototype.clear=function(){C(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function n(a){return this.each(function(){var r=C(this),s=r.data("bs.scrollspy"),d=typeof a=="object"&&a;s||r.data("bs.scrollspy",s=new h(this,d)),typeof a=="string"&&s[a]()})}var g=C.fn.scrollspy;C.fn.scrollspy=n,C.fn.scrollspy.Constructor=h,C.fn.scrollspy.noConflict=function(){return C.fn.scrollspy=g,this},C(window).on("load.bs.scrollspy.data-api",function(){C('[data-spy="scroll"]').each(function(){var a=C(this);n.call(a,a.data())})})}(jQuery)},5940:()=>{+function(C){"use strict";var h=function(r){this.element=C(r)};h.VERSION="3.4.1",h.TRANSITION_DURATION=150,h.prototype.show=function(){var r=this.element,s=r.closest("ul:not(.dropdown-menu)"),d=r.data("target");if(d||(d=r.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!r.parent("li").hasClass("active")){var l=s.find(".active:last a"),o=C.Event("hide.bs.tab",{relatedTarget:r[0]}),c=C.Event("show.bs.tab",{relatedTarget:l[0]});if(l.trigger(o),r.trigger(c),!(c.isDefaultPrevented()||o.isDefaultPrevented())){var m=C(document).find(d);this.activate(r.closest("li"),s),this.activate(m,m.parent(),function(){l.trigger({type:"hidden.bs.tab",relatedTarget:r[0]}),r.trigger({type:"shown.bs.tab",relatedTarget:l[0]})})}}},h.prototype.activate=function(r,s,d){var l=s.find("> .active"),o=d&&C.support.transition&&(l.length&&l.hasClass("fade")||!!s.find("> .fade").length);function c(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),r.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(r[0].offsetWidth,r.addClass("in")):r.removeClass("fade"),r.parent(".dropdown-menu").length&&r.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),d&&d()}l.length&&o?l.one("bsTransitionEnd",c).emulateTransitionEnd(h.TRANSITION_DURATION):c(),l.removeClass("in")};function n(r){return this.each(function(){var s=C(this),d=s.data("bs.tab");d||s.data("bs.tab",d=new h(this)),typeof r=="string"&&d[r]()})}var g=C.fn.tab;C.fn.tab=n,C.fn.tab.Constructor=h,C.fn.tab.noConflict=function(){return C.fn.tab=g,this};var a=function(r){r.preventDefault(),n.call(C(this),"show")};C(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)}(jQuery)},3343:()=>{+function(C){"use strict";var h=["sanitize","whiteList","sanitizeFn"],n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],g=/^aria-[\w-]*$/i,a={"*":["class","dir","id","lang","role",g],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function d(i,y){var u=i.nodeName.toLowerCase();if(C.inArray(u,y)!==-1)return C.inArray(u,n)!==-1?Boolean(i.nodeValue.match(r)||i.nodeValue.match(s)):!0;for(var f=C(y).filter(function(S,E){return E instanceof RegExp}),A=0,v=f.length;A<v;A++)if(u.match(f[A]))return!0;return!1}function l(i,y,u){if(i.length===0)return i;if(u&&typeof u=="function")return u(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=i;for(var A=C.map(y,function(_,R){return R}),v=C(f.body).find("*"),S=0,E=v.length;S<E;S++){var b=v[S],T=b.nodeName.toLowerCase();if(C.inArray(T,A)===-1){b.parentNode.removeChild(b);continue}for(var D=C.map(b.attributes,function(_){return _}),P=[].concat(y["*"]||[],y[T]||[]),F=0,M=D.length;F<M;F++)d(D[F],P)||b.removeAttribute(D[F].nodeName)}return f.body.innerHTML}var o=function(i,y){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,y)};o.VERSION="3.4.1",o.TRANSITION_DURATION=150,o.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:a},o.prototype.init=function(i,y,u){if(this.enabled=!0,this.type=i,this.$element=C(y),this.options=this.getOptions(u),this.$viewport=this.options.viewport&&C(document).find(C.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),A=f.length;A--;){var v=f[A];if(v=="click")this.$element.on("click."+this.type,this.options.selector,C.proxy(this.toggle,this));else if(v!="manual"){var S=v=="hover"?"mouseenter":"focusin",E=v=="hover"?"mouseleave":"focusout";this.$element.on(S+"."+this.type,this.options.selector,C.proxy(this.enter,this)),this.$element.on(E+"."+this.type,this.options.selector,C.proxy(this.leave,this))}}this.options.selector?this._options=C.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.getOptions=function(i){var y=this.$element.data();for(var u in y)y.hasOwnProperty(u)&&C.inArray(u,h)!==-1&&delete y[u];return i=C.extend({},this.getDefaults(),y,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=l(i.template,i.whiteList,i.sanitizeFn)),i},o.prototype.getDelegateOptions=function(){var i={},y=this.getDefaults();return this._options&&C.each(this._options,function(u,f){y[u]!=f&&(i[u]=f)}),i},o.prototype.enter=function(i){var y=i instanceof this.constructor?i:C(i.currentTarget).data("bs."+this.type);if(y||(y=new this.constructor(i.currentTarget,this.getDelegateOptions()),C(i.currentTarget).data("bs."+this.type,y)),i instanceof C.Event&&(y.inState[i.type=="focusin"?"focus":"hover"]=!0),y.tip().hasClass("in")||y.hoverState=="in"){y.hoverState="in";return}if(clearTimeout(y.timeout),y.hoverState="in",!y.options.delay||!y.options.delay.show)return y.show();y.timeout=setTimeout(function(){y.hoverState=="in"&&y.show()},y.options.delay.show)},o.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},o.prototype.leave=function(i){var y=i instanceof this.constructor?i:C(i.currentTarget).data("bs."+this.type);if(y||(y=new this.constructor(i.currentTarget,this.getDelegateOptions()),C(i.currentTarget).data("bs."+this.type,y)),i instanceof C.Event&&(y.inState[i.type=="focusout"?"focus":"hover"]=!1),!y.isInStateTrue()){if(clearTimeout(y.timeout),y.hoverState="out",!y.options.delay||!y.options.delay.hide)return y.hide();y.timeout=setTimeout(function(){y.hoverState=="out"&&y.hide()},y.options.delay.hide)}},o.prototype.show=function(){var i=C.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var y=C.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!y)return;var u=this,f=this.tip(),A=this.getUID(this.type);this.setContent(),f.attr("id",A),this.$element.attr("aria-describedby",A),this.options.animation&&f.addClass("fade");var v=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,S=/\s?auto?\s?/i,E=S.test(v);E&&(v=v.replace(S,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(v).data("bs."+this.type,this),this.options.container?f.appendTo(C(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var b=this.getPosition(),T=f[0].offsetWidth,D=f[0].offsetHeight;if(E){var P=v,F=this.getPosition(this.$viewport);v=v=="bottom"&&b.bottom+D>F.bottom?"top":v=="top"&&b.top-D<F.top?"bottom":v=="right"&&b.right+T>F.width?"left":v=="left"&&b.left-T<F.left?"right":v,f.removeClass(P).addClass(v)}var M=this.getCalculatedOffset(v,b,T,D);this.applyPlacement(M,v);var _=function(){var R=u.hoverState;u.$element.trigger("shown.bs."+u.type),u.hoverState=null,R=="out"&&u.leave(u)};C.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",_).emulateTransitionEnd(o.TRANSITION_DURATION):_()}},o.prototype.applyPlacement=function(i,y){var u=this.tip(),f=u[0].offsetWidth,A=u[0].offsetHeight,v=parseInt(u.css("margin-top"),10),S=parseInt(u.css("margin-left"),10);isNaN(v)&&(v=0),isNaN(S)&&(S=0),i.top+=v,i.left+=S,C.offset.setOffset(u[0],C.extend({using:function(M){u.css({top:Math.round(M.top),left:Math.round(M.left)})}},i),0),u.addClass("in");var E=u[0].offsetWidth,b=u[0].offsetHeight;y=="top"&&b!=A&&(i.top=i.top+A-b);var T=this.getViewportAdjustedDelta(y,i,E,b);T.left?i.left+=T.left:i.top+=T.top;var D=/top|bottom/.test(y),P=D?T.left*2-f+E:T.top*2-A+b,F=D?"offsetWidth":"offsetHeight";u.offset(i),this.replaceArrow(P,u[0][F],D)},o.prototype.replaceArrow=function(i,y,u){this.arrow().css(u?"left":"top",50*(1-i/y)+"%").css(u?"top":"left","")},o.prototype.setContent=function(){var i=this.tip(),y=this.getTitle();this.options.html?(this.options.sanitize&&(y=l(y,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(y)):i.find(".tooltip-inner").text(y),i.removeClass("fade in top bottom left right")},o.prototype.hide=function(i){var y=this,u=C(this.$tip),f=C.Event("hide.bs."+this.type);function A(){y.hoverState!="in"&&u.detach(),y.$element&&y.$element.removeAttr("aria-describedby").trigger("hidden.bs."+y.type),i&&i()}if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),C.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",A).emulateTransitionEnd(o.TRANSITION_DURATION):A(),this.hoverState=null,this},o.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},o.prototype.hasContent=function(){return this.getTitle()},o.prototype.getPosition=function(i){i=i||this.$element;var y=i[0],u=y.tagName=="BODY",f=y.getBoundingClientRect();f.width==null&&(f=C.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var A=window.SVGElement&&y instanceof window.SVGElement,v=u?{top:0,left:0}:A?null:i.offset(),S={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},E=u?{width:C(window).width(),height:C(window).height()}:null;return C.extend({},f,S,E,v)},o.prototype.getCalculatedOffset=function(i,y,u,f){return i=="bottom"?{top:y.top+y.height,left:y.left+y.width/2-u/2}:i=="top"?{top:y.top-f,left:y.left+y.width/2-u/2}:i=="left"?{top:y.top+y.height/2-f/2,left:y.left-u}:{top:y.top+y.height/2-f/2,left:y.left+y.width}},o.prototype.getViewportAdjustedDelta=function(i,y,u,f){var A={top:0,left:0};if(!this.$viewport)return A;var v=this.options.viewport&&this.options.viewport.padding||0,S=this.getPosition(this.$viewport);if(/right|left/.test(i)){var E=y.top-v-S.scroll,b=y.top+v-S.scroll+f;E<S.top?A.top=S.top-E:b>S.top+S.height&&(A.top=S.top+S.height-b)}else{var T=y.left-v,D=y.left+v+u;T<S.left?A.left=S.left-T:D>S.right&&(A.left=S.left+S.width-D)}return A},o.prototype.getTitle=function(){var i,y=this.$element,u=this.options;return i=y.attr("data-original-title")||(typeof u.title=="function"?u.title.call(y[0]):u.title),i},o.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},o.prototype.tip=function(){if(!this.$tip&&(this.$tip=C(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},o.prototype.enable=function(){this.enabled=!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.toggleEnabled=function(){this.enabled=!this.enabled},o.prototype.toggle=function(i){var y=this;i&&(y=C(i.currentTarget).data("bs."+this.type),y||(y=new this.constructor(i.currentTarget,this.getDelegateOptions()),C(i.currentTarget).data("bs."+this.type,y))),i?(y.inState.click=!y.inState.click,y.isInStateTrue()?y.enter(y):y.leave(y)):y.tip().hasClass("in")?y.leave(y):y.enter(y)},o.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},o.prototype.sanitizeHtml=function(i){return l(i,this.options.whiteList,this.options.sanitizeFn)};function c(i){return this.each(function(){var y=C(this),u=y.data("bs.tooltip"),f=typeof i=="object"&&i;!u&&/destroy|hide/.test(i)||(u||y.data("bs.tooltip",u=new o(this,f)),typeof i=="string"&&u[i]())})}var m=C.fn.tooltip;C.fn.tooltip=c,C.fn.tooltip.Constructor=o,C.fn.tooltip.noConflict=function(){return C.fn.tooltip=m,this}}(jQuery)},8220:C=>{var h=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},n=-1,g=1,a=0;h.Diff=function(r,s){return[r,s]},h.prototype.diff_main=function(r,s,d,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var o=l;if(r==null||s==null)throw new Error("Null input. (diff_main)");if(r==s)return r?[new h.Diff(a,r)]:[];typeof d=="undefined"&&(d=!0);var c=d,m=this.diff_commonPrefix(r,s),i=r.substring(0,m);r=r.substring(m),s=s.substring(m),m=this.diff_commonSuffix(r,s);var y=r.substring(r.length-m);r=r.substring(0,r.length-m),s=s.substring(0,s.length-m);var u=this.diff_compute_(r,s,c,o);return i&&u.unshift(new h.Diff(a,i)),y&&u.push(new h.Diff(a,y)),this.diff_cleanupMerge(u),u},h.prototype.diff_compute_=function(r,s,d,l){var o;if(!r)return[new h.Diff(g,s)];if(!s)return[new h.Diff(n,r)];var c=r.length>s.length?r:s,m=r.length>s.length?s:r,i=c.indexOf(m);if(i!=-1)return o=[new h.Diff(g,c.substring(0,i)),new h.Diff(a,m),new h.Diff(g,c.substring(i+m.length))],r.length>s.length&&(o[0][0]=o[2][0]=n),o;if(m.length==1)return[new h.Diff(n,r),new h.Diff(g,s)];var y=this.diff_halfMatch_(r,s);if(y){var u=y[0],f=y[1],A=y[2],v=y[3],S=y[4],E=this.diff_main(u,A,d,l),b=this.diff_main(f,v,d,l);return E.concat([new h.Diff(a,S)],b)}return d&&r.length>100&&s.length>100?this.diff_lineMode_(r,s,l):this.diff_bisect_(r,s,l)},h.prototype.diff_lineMode_=function(r,s,d){var l=this.diff_linesToChars_(r,s);r=l.chars1,s=l.chars2;var o=l.lineArray,c=this.diff_main(r,s,!1,d);this.diff_charsToLines_(c,o),this.diff_cleanupSemantic(c),c.push(new h.Diff(a,""));for(var m=0,i=0,y=0,u="",f="";m<c.length;){switch(c[m][0]){case g:y++,f+=c[m][1];break;case n:i++,u+=c[m][1];break;case a:if(i>=1&&y>=1){c.splice(m-i-y,i+y),m=m-i-y;for(var A=this.diff_main(u,f,!1,d),v=A.length-1;v>=0;v--)c.splice(m,0,A[v]);m=m+A.length}y=0,i=0,u="",f="";break}m++}return c.pop(),c},h.prototype.diff_bisect_=function(r,s,d){for(var l=r.length,o=s.length,c=Math.ceil((l+o)/2),m=c,i=2*c,y=new Array(i),u=new Array(i),f=0;f<i;f++)y[f]=-1,u[f]=-1;y[m+1]=0,u[m+1]=0;for(var A=l-o,v=A%2!=0,S=0,E=0,b=0,T=0,D=0;D<c&&!(new Date().getTime()>d);D++){for(var P=-D+S;P<=D-E;P+=2){var F=m+P,M;P==-D||P!=D&&y[F-1]<y[F+1]?M=y[F+1]:M=y[F-1]+1;for(var _=M-P;M<l&&_<o&&r.charAt(M)==s.charAt(_);)M++,_++;if(y[F]=M,M>l)E+=2;else if(_>o)S+=2;else if(v){var R=m+A-P;if(R>=0&&R<i&&u[R]!=-1){var j=l-u[R];if(M>=j)return this.diff_bisectSplit_(r,s,M,_,d)}}}for(var k=-D+b;k<=D-T;k+=2){var R=m+k,j;k==-D||k!=D&&u[R-1]<u[R+1]?j=u[R+1]:j=u[R-1]+1;for(var z=j-k;j<l&&z<o&&r.charAt(l-j-1)==s.charAt(o-z-1);)j++,z++;if(u[R]=j,j>l)T+=2;else if(z>o)b+=2;else if(!v){var F=m+A-k;if(F>=0&&F<i&&y[F]!=-1){var M=y[F],_=m+M-F;if(j=l-j,M>=j)return this.diff_bisectSplit_(r,s,M,_,d)}}}}return[new h.Diff(n,r),new h.Diff(g,s)]},h.prototype.diff_bisectSplit_=function(r,s,d,l,o){var c=r.substring(0,d),m=s.substring(0,l),i=r.substring(d),y=s.substring(l),u=this.diff_main(c,m,!1,o),f=this.diff_main(i,y,!1,o);return u.concat(f)},h.prototype.diff_linesToChars_=function(r,s){var d=[],l={};d[0]="";function o(y){for(var u="",f=0,A=-1,v=d.length;A<y.length-1;){A=y.indexOf(`
`,f),A==-1&&(A=y.length-1);var S=y.substring(f,A+1);(l.hasOwnProperty?l.hasOwnProperty(S):l[S]!==void 0)?u+=String.fromCharCode(l[S]):(v==c&&(S=y.substring(f),A=y.length),u+=String.fromCharCode(v),l[S]=v,d[v++]=S),f=A+1}return u}var c=4e4,m=o(r);c=65535;var i=o(s);return{chars1:m,chars2:i,lineArray:d}},h.prototype.diff_charsToLines_=function(r,s){for(var d=0;d<r.length;d++){for(var l=r[d][1],o=[],c=0;c<l.length;c++)o[c]=s[l.charCodeAt(c)];r[d][1]=o.join("")}},h.prototype.diff_commonPrefix=function(r,s){if(!r||!s||r.charAt(0)!=s.charAt(0))return 0;for(var d=0,l=Math.min(r.length,s.length),o=l,c=0;d<o;)r.substring(c,o)==s.substring(c,o)?(d=o,c=d):l=o,o=Math.floor((l-d)/2+d);return o},h.prototype.diff_commonSuffix=function(r,s){if(!r||!s||r.charAt(r.length-1)!=s.charAt(s.length-1))return 0;for(var d=0,l=Math.min(r.length,s.length),o=l,c=0;d<o;)r.substring(r.length-o,r.length-c)==s.substring(s.length-o,s.length-c)?(d=o,c=d):l=o,o=Math.floor((l-d)/2+d);return o},h.prototype.diff_commonOverlap_=function(r,s){var d=r.length,l=s.length;if(d==0||l==0)return 0;d>l?r=r.substring(d-l):d<l&&(s=s.substring(0,d));var o=Math.min(d,l);if(r==s)return o;for(var c=0,m=1;;){var i=r.substring(o-m),y=s.indexOf(i);if(y==-1)return c;m+=y,(y==0||r.substring(o-m)==s.substring(0,m))&&(c=m,m++)}},h.prototype.diff_halfMatch_=function(r,s){if(this.Diff_Timeout<=0)return null;var d=r.length>s.length?r:s,l=r.length>s.length?s:r;if(d.length<4||l.length*2<d.length)return null;var o=this;function c(E,b,T){for(var D=E.substring(T,T+Math.floor(E.length/4)),P=-1,F="",M,_,R,j;(P=b.indexOf(D,P+1))!=-1;){var k=o.diff_commonPrefix(E.substring(T),b.substring(P)),z=o.diff_commonSuffix(E.substring(0,T),b.substring(0,P));F.length<z+k&&(F=b.substring(P-z,P)+b.substring(P,P+k),M=E.substring(0,T-z),_=E.substring(T+k),R=b.substring(0,P-z),j=b.substring(P+k))}return F.length*2>=E.length?[M,_,R,j,F]:null}var m=c(d,l,Math.ceil(d.length/4)),i=c(d,l,Math.ceil(d.length/2)),y;if(!m&&!i)return null;i?m?y=m[4].length>i[4].length?m:i:y=i:y=m;var u,f,A,v;r.length>s.length?(u=y[0],f=y[1],A=y[2],v=y[3]):(A=y[0],v=y[1],u=y[2],f=y[3]);var S=y[4];return[u,f,A,v,S]},h.prototype.diff_cleanupSemantic=function(r){for(var s=!1,d=[],l=0,o=null,c=0,m=0,i=0,y=0,u=0;c<r.length;)r[c][0]==a?(d[l++]=c,m=y,i=u,y=0,u=0,o=r[c][1]):(r[c][0]==g?y+=r[c][1].length:u+=r[c][1].length,o&&o.length<=Math.max(m,i)&&o.length<=Math.max(y,u)&&(r.splice(d[l-1],0,new h.Diff(n,o)),r[d[l-1]+1][0]=g,l--,l--,c=l>0?d[l-1]:-1,m=0,i=0,y=0,u=0,o=null,s=!0)),c++;for(s&&this.diff_cleanupMerge(r),this.diff_cleanupSemanticLossless(r),c=1;c<r.length;){if(r[c-1][0]==n&&r[c][0]==g){var f=r[c-1][1],A=r[c][1],v=this.diff_commonOverlap_(f,A),S=this.diff_commonOverlap_(A,f);v>=S?(v>=f.length/2||v>=A.length/2)&&(r.splice(c,0,new h.Diff(a,A.substring(0,v))),r[c-1][1]=f.substring(0,f.length-v),r[c+1][1]=A.substring(v),c++):(S>=f.length/2||S>=A.length/2)&&(r.splice(c,0,new h.Diff(a,f.substring(0,S))),r[c-1][0]=g,r[c-1][1]=A.substring(0,A.length-S),r[c+1][0]=n,r[c+1][1]=f.substring(S),c++),c++}c++}},h.prototype.diff_cleanupSemanticLossless=function(r){function s(S,E){if(!S||!E)return 6;var b=S.charAt(S.length-1),T=E.charAt(0),D=b.match(h.nonAlphaNumericRegex_),P=T.match(h.nonAlphaNumericRegex_),F=D&&b.match(h.whitespaceRegex_),M=P&&T.match(h.whitespaceRegex_),_=F&&b.match(h.linebreakRegex_),R=M&&T.match(h.linebreakRegex_),j=_&&S.match(h.blanklineEndRegex_),k=R&&E.match(h.blanklineStartRegex_);return j||k?5:_||R?4:D&&!F&&M?3:F||M?2:D||P?1:0}for(var d=1;d<r.length-1;){if(r[d-1][0]==a&&r[d+1][0]==a){var l=r[d-1][1],o=r[d][1],c=r[d+1][1],m=this.diff_commonSuffix(l,o);if(m){var i=o.substring(o.length-m);l=l.substring(0,l.length-m),o=i+o.substring(0,o.length-m),c=i+c}for(var y=l,u=o,f=c,A=s(l,o)+s(o,c);o.charAt(0)===c.charAt(0);){l+=o.charAt(0),o=o.substring(1)+c.charAt(0),c=c.substring(1);var v=s(l,o)+s(o,c);v>=A&&(A=v,y=l,u=o,f=c)}r[d-1][1]!=y&&(y?r[d-1][1]=y:(r.splice(d-1,1),d--),r[d][1]=u,f?r[d+1][1]=f:(r.splice(d+1,1),d--))}d++}},h.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,h.whitespaceRegex_=/\s/,h.linebreakRegex_=/[\r\n]/,h.blanklineEndRegex_=/\n\r?\n$/,h.blanklineStartRegex_=/^\r?\n\r?\n/,h.prototype.diff_cleanupEfficiency=function(r){for(var s=!1,d=[],l=0,o=null,c=0,m=!1,i=!1,y=!1,u=!1;c<r.length;)r[c][0]==a?(r[c][1].length<this.Diff_EditCost&&(y||u)?(d[l++]=c,m=y,i=u,o=r[c][1]):(l=0,o=null),y=u=!1):(r[c][0]==n?u=!0:y=!0,o&&(m&&i&&y&&u||o.length<this.Diff_EditCost/2&&m+i+y+u==3)&&(r.splice(d[l-1],0,new h.Diff(n,o)),r[d[l-1]+1][0]=g,l--,o=null,m&&i?(y=u=!0,l=0):(l--,c=l>0?d[l-1]:-1,y=u=!1),s=!0)),c++;s&&this.diff_cleanupMerge(r)},h.prototype.diff_cleanupMerge=function(r){r.push(new h.Diff(a,""));for(var s=0,d=0,l=0,o="",c="",m;s<r.length;)switch(r[s][0]){case g:l++,c+=r[s][1],s++;break;case n:d++,o+=r[s][1],s++;break;case a:d+l>1?(d!==0&&l!==0&&(m=this.diff_commonPrefix(c,o),m!==0&&(s-d-l>0&&r[s-d-l-1][0]==a?r[s-d-l-1][1]+=c.substring(0,m):(r.splice(0,0,new h.Diff(a,c.substring(0,m))),s++),c=c.substring(m),o=o.substring(m)),m=this.diff_commonSuffix(c,o),m!==0&&(r[s][1]=c.substring(c.length-m)+r[s][1],c=c.substring(0,c.length-m),o=o.substring(0,o.length-m))),s-=d+l,r.splice(s,d+l),o.length&&(r.splice(s,0,new h.Diff(n,o)),s++),c.length&&(r.splice(s,0,new h.Diff(g,c)),s++),s++):s!==0&&r[s-1][0]==a?(r[s-1][1]+=r[s][1],r.splice(s,1)):s++,l=0,d=0,o="",c="";break}r[r.length-1][1]===""&&r.pop();var i=!1;for(s=1;s<r.length-1;)r[s-1][0]==a&&r[s+1][0]==a&&(r[s][1].substring(r[s][1].length-r[s-1][1].length)==r[s-1][1]?(r[s][1]=r[s-1][1]+r[s][1].substring(0,r[s][1].length-r[s-1][1].length),r[s+1][1]=r[s-1][1]+r[s+1][1],r.splice(s-1,1),i=!0):r[s][1].substring(0,r[s+1][1].length)==r[s+1][1]&&(r[s-1][1]+=r[s+1][1],r[s][1]=r[s][1].substring(r[s+1][1].length)+r[s+1][1],r.splice(s+1,1),i=!0)),s++;i&&this.diff_cleanupMerge(r)},h.prototype.diff_xIndex=function(r,s){var d=0,l=0,o=0,c=0,m;for(m=0;m<r.length&&(r[m][0]!==g&&(d+=r[m][1].length),r[m][0]!==n&&(l+=r[m][1].length),!(d>s));m++)o=d,c=l;return r.length!=m&&r[m][0]===n?c:c+(s-o)},h.prototype.diff_prettyHtml=function(r){for(var s=[],d=/&/g,l=/</g,o=/>/g,c=/\n/g,m=0;m<r.length;m++){var i=r[m][0],y=r[m][1],u=y.replace(d,"&amp;").replace(l,"&lt;").replace(o,"&gt;").replace(c,"&para;<br>");switch(i){case g:s[m]='<ins style="background:#e6ffe6;">'+u+"</ins>";break;case n:s[m]='<del style="background:#ffe6e6;">'+u+"</del>";break;case a:s[m]="<span>"+u+"</span>";break}}return s.join("")},h.prototype.diff_text1=function(r){for(var s=[],d=0;d<r.length;d++)r[d][0]!==g&&(s[d]=r[d][1]);return s.join("")},h.prototype.diff_text2=function(r){for(var s=[],d=0;d<r.length;d++)r[d][0]!==n&&(s[d]=r[d][1]);return s.join("")},h.prototype.diff_levenshtein=function(r){for(var s=0,d=0,l=0,o=0;o<r.length;o++){var c=r[o][0],m=r[o][1];switch(c){case g:d+=m.length;break;case n:l+=m.length;break;case a:s+=Math.max(d,l),d=0,l=0;break}}return s+=Math.max(d,l),s},h.prototype.diff_toDelta=function(r){for(var s=[],d=0;d<r.length;d++)switch(r[d][0]){case g:s[d]="+"+encodeURI(r[d][1]);break;case n:s[d]="-"+r[d][1].length;break;case a:s[d]="="+r[d][1].length;break}return s.join("	").replace(/%20/g," ")},h.prototype.diff_fromDelta=function(r,s){for(var d=[],l=0,o=0,c=s.split(/\t/g),m=0;m<c.length;m++){var i=c[m].substring(1);switch(c[m].charAt(0)){case"+":try{d[l++]=new h.Diff(g,decodeURI(i))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var y=parseInt(i,10);if(isNaN(y)||y<0)throw new Error("Invalid number in diff_fromDelta: "+i);var u=r.substring(o,o+=y);c[m].charAt(0)=="="?d[l++]=new h.Diff(a,u):d[l++]=new h.Diff(n,u);break;default:if(c[m])throw new Error("Invalid diff operation in diff_fromDelta: "+c[m])}}if(o!=r.length)throw new Error("Delta length ("+o+") does not equal source text length ("+r.length+").");return d},h.prototype.match_main=function(r,s,d){if(r==null||s==null||d==null)throw new Error("Null input. (match_main)");return d=Math.max(0,Math.min(d,r.length)),r==s?0:r.length?r.substring(d,d+s.length)==s?d:this.match_bitap_(r,s,d):-1},h.prototype.match_bitap_=function(r,s,d){if(s.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(s),o=this;function c(M,_){var R=M/s.length,j=Math.abs(d-_);return o.Match_Distance?R+j/o.Match_Distance:j?1:R}var m=this.Match_Threshold,i=r.indexOf(s,d);i!=-1&&(m=Math.min(c(0,i),m),i=r.lastIndexOf(s,d+s.length),i!=-1&&(m=Math.min(c(0,i),m)));var y=1<<s.length-1;i=-1;for(var u,f,A=s.length+r.length,v,S=0;S<s.length;S++){for(u=0,f=A;u<f;)c(S,d+f)<=m?u=f:A=f,f=Math.floor((A-u)/2+u);A=f;var E=Math.max(1,d-f+1),b=Math.min(d+f,r.length)+s.length,T=Array(b+2);T[b+1]=(1<<S)-1;for(var D=b;D>=E;D--){var P=l[r.charAt(D-1)];if(S===0?T[D]=(T[D+1]<<1|1)&P:T[D]=(T[D+1]<<1|1)&P|((v[D+1]|v[D])<<1|1)|v[D+1],T[D]&y){var F=c(S,D-1);if(F<=m)if(m=F,i=D-1,i>d)E=Math.max(1,2*d-i);else break}}if(c(S+1,d)>m)break;v=T}return i},h.prototype.match_alphabet_=function(r){for(var s={},d=0;d<r.length;d++)s[r.charAt(d)]=0;for(var d=0;d<r.length;d++)s[r.charAt(d)]|=1<<r.length-d-1;return s},h.prototype.patch_addContext_=function(r,s){if(s.length!=0){if(r.start2===null)throw Error("patch not initialized");for(var d=s.substring(r.start2,r.start2+r.length1),l=0;s.indexOf(d)!=s.lastIndexOf(d)&&d.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,d=s.substring(r.start2-l,r.start2+r.length1+l);l+=this.Patch_Margin;var o=s.substring(r.start2-l,r.start2);o&&r.diffs.unshift(new h.Diff(a,o));var c=s.substring(r.start2+r.length1,r.start2+r.length1+l);c&&r.diffs.push(new h.Diff(a,c)),r.start1-=o.length,r.start2-=o.length,r.length1+=o.length+c.length,r.length2+=o.length+c.length}},h.prototype.patch_make=function(r,s,d){var l,o;if(typeof r=="string"&&typeof s=="string"&&typeof d=="undefined")l=r,o=this.diff_main(l,s,!0),o.length>2&&(this.diff_cleanupSemantic(o),this.diff_cleanupEfficiency(o));else if(r&&typeof r=="object"&&typeof s=="undefined"&&typeof d=="undefined")o=r,l=this.diff_text1(o);else if(typeof r=="string"&&s&&typeof s=="object"&&typeof d=="undefined")l=r,o=s;else if(typeof r=="string"&&typeof s=="string"&&d&&typeof d=="object")l=r,o=d;else throw new Error("Unknown call format to patch_make.");if(o.length===0)return[];for(var c=[],m=new h.patch_obj,i=0,y=0,u=0,f=l,A=l,v=0;v<o.length;v++){var S=o[v][0],E=o[v][1];switch(!i&&S!==a&&(m.start1=y,m.start2=u),S){case g:m.diffs[i++]=o[v],m.length2+=E.length,A=A.substring(0,u)+E+A.substring(u);break;case n:m.length1+=E.length,m.diffs[i++]=o[v],A=A.substring(0,u)+A.substring(u+E.length);break;case a:E.length<=2*this.Patch_Margin&&i&&o.length!=v+1?(m.diffs[i++]=o[v],m.length1+=E.length,m.length2+=E.length):E.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(m,f),c.push(m),m=new h.patch_obj,i=0,f=A,y=u);break}S!==g&&(y+=E.length),S!==n&&(u+=E.length)}return i&&(this.patch_addContext_(m,f),c.push(m)),c},h.prototype.patch_deepCopy=function(r){for(var s=[],d=0;d<r.length;d++){var l=r[d],o=new h.patch_obj;o.diffs=[];for(var c=0;c<l.diffs.length;c++)o.diffs[c]=new h.Diff(l.diffs[c][0],l.diffs[c][1]);o.start1=l.start1,o.start2=l.start2,o.length1=l.length1,o.length2=l.length2,s[d]=o}return s},h.prototype.patch_apply=function(r,s){if(r.length==0)return[s,[]];r=this.patch_deepCopy(r);var d=this.patch_addPadding(r);s=d+s+d,this.patch_splitMax(r);for(var l=0,o=[],c=0;c<r.length;c++){var m=r[c].start2+l,i=this.diff_text1(r[c].diffs),y,u=-1;if(i.length>this.Match_MaxBits?(y=this.match_main(s,i.substring(0,this.Match_MaxBits),m),y!=-1&&(u=this.match_main(s,i.substring(i.length-this.Match_MaxBits),m+i.length-this.Match_MaxBits),(u==-1||y>=u)&&(y=-1))):y=this.match_main(s,i,m),y==-1)o[c]=!1,l-=r[c].length2-r[c].length1;else{o[c]=!0,l=y-m;var f;if(u==-1?f=s.substring(y,y+i.length):f=s.substring(y,u+this.Match_MaxBits),i==f)s=s.substring(0,y)+this.diff_text2(r[c].diffs)+s.substring(y+i.length);else{var A=this.diff_main(i,f,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(A)/i.length>this.Patch_DeleteThreshold)o[c]=!1;else{this.diff_cleanupSemanticLossless(A);for(var v=0,S,E=0;E<r[c].diffs.length;E++){var b=r[c].diffs[E];b[0]!==a&&(S=this.diff_xIndex(A,v)),b[0]===g?s=s.substring(0,y+S)+b[1]+s.substring(y+S):b[0]===n&&(s=s.substring(0,y+S)+s.substring(y+this.diff_xIndex(A,v+b[1].length))),b[0]!==n&&(v+=b[1].length)}}}}}return s=s.substring(d.length,s.length-d.length),[s,o]},h.prototype.patch_addPadding=function(r){for(var s=this.Patch_Margin,d="",l=1;l<=s;l++)d+=String.fromCharCode(l);for(var l=0;l<r.length;l++)r[l].start1+=s,r[l].start2+=s;var o=r[0],c=o.diffs;if(c.length==0||c[0][0]!=a)c.unshift(new h.Diff(a,d)),o.start1-=s,o.start2-=s,o.length1+=s,o.length2+=s;else if(s>c[0][1].length){var m=s-c[0][1].length;c[0][1]=d.substring(c[0][1].length)+c[0][1],o.start1-=m,o.start2-=m,o.length1+=m,o.length2+=m}if(o=r[r.length-1],c=o.diffs,c.length==0||c[c.length-1][0]!=a)c.push(new h.Diff(a,d)),o.length1+=s,o.length2+=s;else if(s>c[c.length-1][1].length){var m=s-c[c.length-1][1].length;c[c.length-1][1]+=d.substring(0,m),o.length1+=m,o.length2+=m}return d},h.prototype.patch_splitMax=function(r){for(var s=this.Match_MaxBits,d=0;d<r.length;d++)if(!(r[d].length1<=s)){var l=r[d];r.splice(d--,1);for(var o=l.start1,c=l.start2,m="";l.diffs.length!==0;){var i=new h.patch_obj,y=!0;for(i.start1=o-m.length,i.start2=c-m.length,m!==""&&(i.length1=i.length2=m.length,i.diffs.push(new h.Diff(a,m)));l.diffs.length!==0&&i.length1<s-this.Patch_Margin;){var u=l.diffs[0][0],f=l.diffs[0][1];u===g?(i.length2+=f.length,c+=f.length,i.diffs.push(l.diffs.shift()),y=!1):u===n&&i.diffs.length==1&&i.diffs[0][0]==a&&f.length>2*s?(i.length1+=f.length,o+=f.length,y=!1,i.diffs.push(new h.Diff(u,f)),l.diffs.shift()):(f=f.substring(0,s-i.length1-this.Patch_Margin),i.length1+=f.length,o+=f.length,u===a?(i.length2+=f.length,c+=f.length):y=!1,i.diffs.push(new h.Diff(u,f)),f==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(f.length))}m=this.diff_text2(i.diffs),m=m.substring(m.length-this.Patch_Margin);var A=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);A!==""&&(i.length1+=A.length,i.length2+=A.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===a?i.diffs[i.diffs.length-1][1]+=A:i.diffs.push(new h.Diff(a,A))),y||r.splice(++d,0,i)}}},h.prototype.patch_toText=function(r){for(var s=[],d=0;d<r.length;d++)s[d]=r[d];return s.join("")},h.prototype.patch_fromText=function(r){var s=[];if(!r)return s;for(var d=r.split(`
`),l=0,o=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<d.length;){var c=d[l].match(o);if(!c)throw new Error("Invalid patch string: "+d[l]);var m=new h.patch_obj;for(s.push(m),m.start1=parseInt(c[1],10),c[2]===""?(m.start1--,m.length1=1):c[2]=="0"?m.length1=0:(m.start1--,m.length1=parseInt(c[2],10)),m.start2=parseInt(c[3],10),c[4]===""?(m.start2--,m.length2=1):c[4]=="0"?m.length2=0:(m.start2--,m.length2=parseInt(c[4],10)),l++;l<d.length;){var i=d[l].charAt(0);try{var y=decodeURI(d[l].substring(1))}catch(u){throw new Error("Illegal escape in patch_fromText: "+y)}if(i=="-")m.diffs.push(new h.Diff(n,y));else if(i=="+")m.diffs.push(new h.Diff(g,y));else if(i==" ")m.diffs.push(new h.Diff(a,y));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+y)}l++}}return s},h.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},h.patch_obj.prototype.toString=function(){var r,s;this.length1===0?r=this.start1+",0":this.length1==1?r=this.start1+1:r=this.start1+1+","+this.length1,this.length2===0?s=this.start2+",0":this.length2==1?s=this.start2+1:s=this.start2+1+","+this.length2;for(var d=["@@ -"+r+" +"+s+` @@
`],l,o=0;o<this.diffs.length;o++){switch(this.diffs[o][0]){case g:l="+";break;case n:l="-";break;case a:l=" ";break}d[o+1]=l+encodeURI(this.diffs[o][1])+`
`}return d.join("").replace(/%20/g," ")},C.exports=h,C.exports.diff_match_patch=h,C.exports.DIFF_DELETE=n,C.exports.DIFF_INSERT=g,C.exports.DIFF_EQUAL=a},2327:function(C){/**!

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

*/(function(h,n){C.exports=n()})(this,function(){return function(h){function n(a){if(g[a])return g[a].exports;var r=g[a]={exports:{},id:a,loaded:!1};return h[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var g={};return n.m=h,n.c=g,n.p="",n(0)}([function(h,n,g){"use strict";function a(){var b=S();return b.compile=function(T,D){return m.compile(T,D,b)},b.precompile=function(T,D){return m.precompile(T,D,b)},b.AST=o.default,b.Compiler=m.Compiler,b.JavaScriptCompiler=y.default,b.Parser=c.parser,b.parse=c.parse,b.parseWithoutProcessing=c.parseWithoutProcessing,b}var r=g(1).default;n.__esModule=!0;var s=g(2),d=r(s),l=g(45),o=r(l),c=g(46),m=g(51),i=g(52),y=r(i),u=g(49),f=r(u),A=g(44),v=r(A),S=d.default.create,E=a();E.create=a,v.default(E),E.Visitor=f.default,E.default=E,n.default=E,h.exports=n.default},function(h,n){"use strict";n.default=function(g){return g&&g.__esModule?g:{default:g}},n.__esModule=!0},function(h,n,g){"use strict";function a(){var b=new l.HandlebarsEnvironment;return u.extend(b,l),b.SafeString=c.default,b.Exception=i.default,b.Utils=u,b.escapeExpression=u.escapeExpression,b.VM=A,b.template=function(T){return A.template(T,b)},b}var r=g(3).default,s=g(1).default;n.__esModule=!0;var d=g(4),l=r(d),o=g(37),c=s(o),m=g(6),i=s(m),y=g(5),u=r(y),f=g(38),A=r(f),v=g(44),S=s(v),E=a();E.create=a,S.default(E),E.default=E,n.default=E,h.exports=n.default},function(h,n){"use strict";n.default=function(g){if(g&&g.__esModule)return g;var a={};if(g!=null)for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&(a[r]=g[r]);return a.default=g,a},n.__esModule=!0},function(h,n,g){"use strict";function a(b,T,D){this.helpers=b||{},this.partials=T||{},this.decorators=D||{},o.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}var r=g(1).default;n.__esModule=!0,n.HandlebarsEnvironment=a;var s=g(5),d=g(6),l=r(d),o=g(10),c=g(30),m=g(32),i=r(m),y=g(33),u="4.7.7";n.VERSION=u;var f=8;n.COMPILER_REVISION=f;var A=7;n.LAST_COMPATIBLE_COMPILER_REVISION=A;var v={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};n.REVISION_CHANGES=v;var S="[object Object]";a.prototype={constructor:a,logger:i.default,log:i.default.log,registerHelper:function(b,T){if(s.toString.call(b)===S){if(T)throw new l.default("Arg not supported with multiple helpers");s.extend(this.helpers,b)}else this.helpers[b]=T},unregisterHelper:function(b){delete this.helpers[b]},registerPartial:function(b,T){if(s.toString.call(b)===S)s.extend(this.partials,b);else{if(typeof T=="undefined")throw new l.default('Attempting to register a partial called "'+b+'" as undefined');this.partials[b]=T}},unregisterPartial:function(b){delete this.partials[b]},registerDecorator:function(b,T){if(s.toString.call(b)===S){if(T)throw new l.default("Arg not supported with multiple decorators");s.extend(this.decorators,b)}else this.decorators[b]=T},unregisterDecorator:function(b){delete this.decorators[b]},resetLoggedPropertyAccesses:function(){y.resetLoggedProperties()}};var E=i.default.log;n.log=E,n.createFrame=s.createFrame,n.logger=i.default},function(h,n){"use strict";function g(v){return m[v]}function a(v){for(var S=1;S<arguments.length;S++)for(var E in arguments[S])Object.prototype.hasOwnProperty.call(arguments[S],E)&&(v[E]=arguments[S][E]);return v}function r(v,S){for(var E=0,b=v.length;E<b;E++)if(v[E]===S)return E;return-1}function s(v){if(typeof v!="string"){if(v&&v.toHTML)return v.toHTML();if(v==null)return"";if(!v)return v+"";v=""+v}return y.test(v)?v.replace(i,g):v}function d(v){return!v&&v!==0||!(!A(v)||v.length!==0)}function l(v){var S=a({},v);return S._parent=v,S}function o(v,S){return v.path=S,v}function c(v,S){return(v?v+".":"")+S}n.__esModule=!0,n.extend=a,n.indexOf=r,n.escapeExpression=s,n.isEmpty=d,n.createFrame=l,n.blockParams=o,n.appendContextPath=c;var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,y=/[&<>"'`=]/,u=Object.prototype.toString;n.toString=u;var f=function(v){return typeof v=="function"};f(/x/)&&(n.isFunction=f=function(v){return typeof v=="function"&&u.call(v)==="[object Function]"}),n.isFunction=f;var A=Array.isArray||function(v){return!(!v||typeof v!="object")&&u.call(v)==="[object Array]"};n.isArray=A},function(h,n,g){"use strict";function a(d,l){var o=l&&l.loc,c=void 0,m=void 0,i=void 0,y=void 0;o&&(c=o.start.line,m=o.end.line,i=o.start.column,y=o.end.column,d+=" - "+c+":"+i);for(var u=Error.prototype.constructor.call(this,d),f=0;f<s.length;f++)this[s[f]]=u[s[f]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{o&&(this.lineNumber=c,this.endLineNumber=m,r?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:y,enumerable:!0})):(this.column=i,this.endColumn=y))}catch(A){}}var r=g(7).default;n.__esModule=!0;var s=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];a.prototype=new Error,n.default=a,h.exports=n.default},function(h,n,g){h.exports={default:g(8),__esModule:!0}},function(h,n,g){var a=g(9);h.exports=function(r,s,d){return a.setDesc(r,s,d)}},function(h,n){var g=Object;h.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}},function(h,n,g){"use strict";function a(T){l.default(T),c.default(T),i.default(T),u.default(T),A.default(T),S.default(T),b.default(T)}function r(T,D,P){T.helpers[D]&&(T.hooks[D]=T.helpers[D],P||delete T.helpers[D])}var s=g(1).default;n.__esModule=!0,n.registerDefaultHelpers=a,n.moveHelperToHooks=r;var d=g(11),l=s(d),o=g(12),c=s(o),m=g(25),i=s(m),y=g(26),u=s(y),f=g(27),A=s(f),v=g(28),S=s(v),E=g(29),b=s(E)},function(h,n,g){"use strict";n.__esModule=!0;var a=g(5);n.default=function(r){r.registerHelper("blockHelperMissing",function(s,d){var l=d.inverse,o=d.fn;if(s===!0)return o(this);if(s===!1||s==null)return l(this);if(a.isArray(s))return s.length>0?(d.ids&&(d.ids=[d.name]),r.helpers.each(s,d)):l(this);if(d.data&&d.ids){var c=a.createFrame(d.data);c.contextPath=a.appendContextPath(d.data.contextPath,d.name),d={data:c}}return o(s,d)})},h.exports=n.default},function(h,n,g){(function(a){"use strict";var r=g(13).default,s=g(1).default;n.__esModule=!0;var d=g(5),l=g(6),o=s(l);n.default=function(c){c.registerHelper("each",function(m,i){function y(F,M,_){S&&(S.key=F,S.index=M,S.first=M===0,S.last=!!_,E&&(S.contextPath=E+F)),v+=u(m[F],{data:S,blockParams:d.blockParams([m[F],F],[E+F,null])})}if(!i)throw new o.default("Must pass iterator to #each");var u=i.fn,f=i.inverse,A=0,v="",S=void 0,E=void 0;if(i.data&&i.ids&&(E=d.appendContextPath(i.data.contextPath,i.ids[0])+"."),d.isFunction(m)&&(m=m.call(this)),i.data&&(S=d.createFrame(i.data)),m&&typeof m=="object")if(d.isArray(m))for(var b=m.length;A<b;A++)A in m&&y(A,A,A===m.length-1);else if(a.Symbol&&m[a.Symbol.iterator]){for(var T=[],D=m[a.Symbol.iterator](),P=D.next();!P.done;P=D.next())T.push(P.value);m=T;for(var b=m.length;A<b;A++)y(A,A,A===m.length-1)}else(function(){var F=void 0;r(m).forEach(function(M){F!==void 0&&y(F,A-1),F=M,A++}),F!==void 0&&y(F,A-1,!0)})();return A===0&&(v=f(this)),v})},h.exports=n.default}).call(n,function(){return this}())},function(h,n,g){h.exports={default:g(14),__esModule:!0}},function(h,n,g){g(15),h.exports=g(21).Object.keys},function(h,n,g){var a=g(16);g(18)("keys",function(r){return function(s){return r(a(s))}})},function(h,n,g){var a=g(17);h.exports=function(r){return Object(a(r))}},function(h,n){h.exports=function(g){if(g==null)throw TypeError("Can't call method on  "+g);return g}},function(h,n,g){var a=g(19),r=g(21),s=g(24);h.exports=function(d,l){var o=(r.Object||{})[d]||Object[d],c={};c[d]=l(o),a(a.S+a.F*s(function(){o(1)}),"Object",c)}},function(h,n,g){var a=g(20),r=g(21),s=g(22),d="prototype",l=function(o,c,m){var i,y,u,f=o&l.F,A=o&l.G,v=o&l.S,S=o&l.P,E=o&l.B,b=o&l.W,T=A?r:r[c]||(r[c]={}),D=A?a:v?a[c]:(a[c]||{})[d];A&&(m=c);for(i in m)y=!f&&D&&i in D,y&&i in T||(u=y?D[i]:m[i],T[i]=A&&typeof D[i]!="function"?m[i]:E&&y?s(u,a):b&&D[i]==u?function(P){var F=function(M){return this instanceof P?new P(M):P(M)};return F[d]=P[d],F}(u):S&&typeof u=="function"?s(Function.call,u):u,S&&((T[d]||(T[d]={}))[i]=u))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,h.exports=l},function(h,n){var g=h.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=g)},function(h,n){var g=h.exports={version:"1.2.6"};typeof __e=="number"&&(__e=g)},function(h,n,g){var a=g(23);h.exports=function(r,s,d){if(a(r),s===void 0)return r;switch(d){case 1:return function(l){return r.call(s,l)};case 2:return function(l,o){return r.call(s,l,o)};case 3:return function(l,o,c){return r.call(s,l,o,c)}}return function(){return r.apply(s,arguments)}}},function(h,n){h.exports=function(g){if(typeof g!="function")throw TypeError(g+" is not a function!");return g}},function(h,n){h.exports=function(g){try{return!!g()}catch(a){return!0}}},function(h,n,g){"use strict";var a=g(1).default;n.__esModule=!0;var r=g(6),s=a(r);n.default=function(d){d.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new s.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},h.exports=n.default},function(h,n,g){"use strict";var a=g(1).default;n.__esModule=!0;var r=g(5),s=g(6),d=a(s);n.default=function(l){l.registerHelper("if",function(o,c){if(arguments.length!=2)throw new d.default("#if requires exactly one argument");return r.isFunction(o)&&(o=o.call(this)),!c.hash.includeZero&&!o||r.isEmpty(o)?c.inverse(this):c.fn(this)}),l.registerHelper("unless",function(o,c){if(arguments.length!=2)throw new d.default("#unless requires exactly one argument");return l.helpers.if.call(this,o,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},h.exports=n.default},function(h,n){"use strict";n.__esModule=!0,n.default=function(g){g.registerHelper("log",function(){for(var a=[void 0],r=arguments[arguments.length-1],s=0;s<arguments.length-1;s++)a.push(arguments[s]);var d=1;r.hash.level!=null?d=r.hash.level:r.data&&r.data.level!=null&&(d=r.data.level),a[0]=d,g.log.apply(g,a)})},h.exports=n.default},function(h,n){"use strict";n.__esModule=!0,n.default=function(g){g.registerHelper("lookup",function(a,r,s){return a&&s.lookupProperty(a,r)})},h.exports=n.default},function(h,n,g){"use strict";var a=g(1).default;n.__esModule=!0;var r=g(5),s=g(6),d=a(s);n.default=function(l){l.registerHelper("with",function(o,c){if(arguments.length!=2)throw new d.default("#with requires exactly one argument");r.isFunction(o)&&(o=o.call(this));var m=c.fn;if(r.isEmpty(o))return c.inverse(this);var i=c.data;return c.data&&c.ids&&(i=r.createFrame(c.data),i.contextPath=r.appendContextPath(c.data.contextPath,c.ids[0])),m(o,{data:i,blockParams:r.blockParams([o],[i&&i.contextPath])})})},h.exports=n.default},function(h,n,g){"use strict";function a(l){d.default(l)}var r=g(1).default;n.__esModule=!0,n.registerDefaultDecorators=a;var s=g(31),d=r(s)},function(h,n,g){"use strict";n.__esModule=!0;var a=g(5);n.default=function(r){r.registerDecorator("inline",function(s,d,l,o){var c=s;return d.partials||(d.partials={},c=function(m,i){var y=l.partials;l.partials=a.extend({},y,d.partials);var u=s(m,i);return l.partials=y,u}),d.partials[o.args[0]]=o.fn,c})},h.exports=n.default},function(h,n,g){"use strict";n.__esModule=!0;var a=g(5),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(s){if(typeof s=="string"){var d=a.indexOf(r.methodMap,s.toLowerCase());s=d>=0?d:parseInt(s,10)}return s},log:function(s){if(s=r.lookupLevel(s),typeof console!="undefined"&&r.lookupLevel(r.level)<=s){var d=r.methodMap[s];console[d]||(d="log");for(var l=arguments.length,o=Array(l>1?l-1:0),c=1;c<l;c++)o[c-1]=arguments[c];console[d].apply(console,o)}}};n.default=r,h.exports=n.default},function(h,n,g){"use strict";function a(A){var v=o(null);v.constructor=!1,v.__defineGetter__=!1,v.__defineSetter__=!1,v.__lookupGetter__=!1;var S=o(null);return S.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(S,A.allowedProtoProperties),defaultValue:A.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(v,A.allowedProtoMethods),defaultValue:A.allowProtoMethodsByDefault}}}function r(A,v,S){return s(typeof A=="function"?v.methods:v.properties,S)}function s(A,v){return A.whitelist[v]!==void 0?A.whitelist[v]===!0:A.defaultValue!==void 0?A.defaultValue:(d(v),!1)}function d(A){f[A]!==!0&&(f[A]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+A+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function l(){c(f).forEach(function(A){delete f[A]})}var o=g(34).default,c=g(13).default,m=g(3).default;n.__esModule=!0,n.createProtoAccessControl=a,n.resultIsAllowed=r,n.resetLoggedProperties=l;var i=g(36),y=g(32),u=m(y),f=o(null)},function(h,n,g){h.exports={default:g(35),__esModule:!0}},function(h,n,g){var a=g(9);h.exports=function(r,s){return a.create(r,s)}},function(h,n,g){"use strict";function a(){for(var d=arguments.length,l=Array(d),o=0;o<d;o++)l[o]=arguments[o];return s.extend.apply(void 0,[r(null)].concat(l))}var r=g(34).default;n.__esModule=!0,n.createNewLookupObject=a;var s=g(5)},function(h,n){"use strict";function g(a){this.string=a}n.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string},n.default=g,h.exports=n.default},function(h,n,g){"use strict";function a(_){var R=_&&_[0]||1,j=D.COMPILER_REVISION;if(!(R>=D.LAST_COMPATIBLE_COMPILER_REVISION&&R<=D.COMPILER_REVISION)){if(R<D.LAST_COMPATIBLE_COMPILER_REVISION){var k=D.REVISION_CHANGES[j],z=D.REVISION_CHANGES[R];throw new T.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+k+") or downgrade your runtime to an older version ("+z+").")}throw new T.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+_[1]+").")}}function r(_,R){function j(L,B,U){U.hash&&(B=E.extend({},B,U.hash),U.ids&&(U.ids[0]=!0)),L=R.VM.resolvePartial.call(this,L,B,U);var V=E.extend({},U,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),G=R.VM.invokePartial.call(this,L,B,V);if(G==null&&R.compile&&(U.partials[U.name]=R.compile(L,_.compilerOptions,R),G=U.partials[U.name](B,V)),G!=null){if(U.indent){for(var Q=G.split(`
`),se=0,ue=Q.length;se<ue&&(Q[se]||se+1!==ue);se++)Q[se]=U.indent+Q[se];G=Q.join(`
`)}return G}throw new T.default("The partial "+U.name+" could not be compiled when running in runtime-only mode")}function k(L){function B(se){return""+_.main(H,se,H.helpers,H.partials,V,Q,G)}var U=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],V=U.data;k._setup(U),!U.partial&&_.useData&&(V=c(L,V));var G=void 0,Q=_.useBlockParams?[]:void 0;return _.useDepths&&(G=U.depths?L!=U.depths[0]?[L].concat(U.depths):U.depths:[L]),(B=m(_.main,B,H,U.depths||[],V,Q))(L,U)}if(!R)throw new T.default("No environment passed to template");if(!_||!_.main)throw new T.default("Unknown template object: "+typeof _);_.main.decorator=_.main_d,R.VM.checkRevision(_.compiler);var z=_.compiler&&_.compiler[0]===7,H={strict:function(L,B,U){if(!(L&&B in L))throw new T.default('"'+B+'" not defined in '+L,{loc:U});return H.lookupProperty(L,B)},lookupProperty:function(L,B){var U=L[B];return U==null||Object.prototype.hasOwnProperty.call(L,B)||M.resultIsAllowed(U,H.protoAccessControl,B)?U:void 0},lookup:function(L,B){for(var U=L.length,V=0;V<U;V++){var G=L[V]&&H.lookupProperty(L[V],B);if(G!=null)return L[V][B]}},lambda:function(L,B){return typeof L=="function"?L.call(B):L},escapeExpression:E.escapeExpression,invokePartial:j,fn:function(L){var B=_[L];return B.decorator=_[L+"_d"],B},programs:[],program:function(L,B,U,V,G){var Q=this.programs[L],se=this.fn(L);return B||G||V||U?Q=s(this,L,se,B,U,V,G):Q||(Q=this.programs[L]=s(this,L,se)),Q},data:function(L,B){for(;L&&B--;)L=L._parent;return L},mergeIfNeeded:function(L,B){var U=L||B;return L&&B&&L!==B&&(U=E.extend({},B,L)),U},nullContext:u({}),noop:R.VM.noop,compilerInfo:_.compiler};return k.isTop=!0,k._setup=function(L){if(L.partial)H.protoAccessControl=L.protoAccessControl,H.helpers=L.helpers,H.partials=L.partials,H.decorators=L.decorators,H.hooks=L.hooks;else{var B=E.extend({},R.helpers,L.helpers);i(B,H),H.helpers=B,_.usePartial&&(H.partials=H.mergeIfNeeded(L.partials,R.partials)),(_.usePartial||_.useDecorators)&&(H.decorators=E.extend({},R.decorators,L.decorators)),H.hooks={},H.protoAccessControl=M.createProtoAccessControl(L);var U=L.allowCallsToHelperMissing||z;P.moveHelperToHooks(H,"helperMissing",U),P.moveHelperToHooks(H,"blockHelperMissing",U)}},k._child=function(L,B,U,V){if(_.useBlockParams&&!U)throw new T.default("must pass block params");if(_.useDepths&&!V)throw new T.default("must pass parent depths");return s(H,L,_[L],B,0,U,V)},k}function s(_,R,j,k,z,H,L){function B(U){var V=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],G=L;return!L||U==L[0]||U===_.nullContext&&L[0]===null||(G=[U].concat(L)),j(_,U,_.helpers,_.partials,V.data||k,H&&[V.blockParams].concat(H),G)}return B=m(j,B,_,L,k,H),B.program=R,B.depth=L?L.length:0,B.blockParams=z||0,B}function d(_,R,j){return _?_.call||j.name||(j.name=_,_=j.partials[_]):_=j.name==="@partial-block"?j.data["partial-block"]:j.partials[j.name],_}function l(_,R,j){var k=j.data&&j.data["partial-block"];j.partial=!0,j.ids&&(j.data.contextPath=j.ids[0]||j.data.contextPath);var z=void 0;if(j.fn&&j.fn!==o&&function(){j.data=D.createFrame(j.data);var H=j.fn;z=j.data["partial-block"]=function(L){var B=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return B.data=D.createFrame(B.data),B.data["partial-block"]=k,H(L,B)},H.partials&&(j.partials=E.extend({},j.partials,H.partials))}(),_===void 0&&z&&(_=z),_===void 0)throw new T.default("The partial "+j.name+" could not be found");if(_ instanceof Function)return _(R,j)}function o(){return""}function c(_,R){return R&&"root"in R||(R=R?D.createFrame(R):{},R.root=_),R}function m(_,R,j,k,z,H){if(_.decorator){var L={};R=_.decorator(R,L,j,k&&k[0],z,H,k),E.extend(R,L)}return R}function i(_,R){f(_).forEach(function(j){var k=_[j];_[j]=y(k,R)})}function y(_,R){var j=R.lookupProperty;return F.wrapHelper(_,function(k){return E.extend({lookupProperty:j},k)})}var u=g(39).default,f=g(13).default,A=g(3).default,v=g(1).default;n.__esModule=!0,n.checkRevision=a,n.template=r,n.wrapProgram=s,n.resolvePartial=d,n.invokePartial=l,n.noop=o;var S=g(5),E=A(S),b=g(6),T=v(b),D=g(4),P=g(10),F=g(43),M=g(33)},function(h,n,g){h.exports={default:g(40),__esModule:!0}},function(h,n,g){g(41),h.exports=g(21).Object.seal},function(h,n,g){var a=g(42);g(18)("seal",function(r){return function(s){return r&&a(s)?r(s):s}})},function(h,n){h.exports=function(g){return typeof g=="object"?g!==null:typeof g=="function"}},function(h,n){"use strict";function g(a,r){if(typeof a!="function")return a;var s=function(){var d=arguments[arguments.length-1];return arguments[arguments.length-1]=r(d),a.apply(this,arguments)};return s}n.__esModule=!0,n.wrapHelper=g},function(h,n){(function(g){"use strict";n.__esModule=!0,n.default=function(a){var r=typeof g!="undefined"?g:window,s=r.Handlebars;a.noConflict=function(){return r.Handlebars===a&&(r.Handlebars=s),a}},h.exports=n.default}).call(n,function(){return this}())},function(h,n){"use strict";n.__esModule=!0;var g={helpers:{helperExpression:function(a){return a.type==="SubExpression"||(a.type==="MustacheStatement"||a.type==="BlockStatement")&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return a.parts.length===1&&!g.helpers.scopedId(a)&&!a.depth}}};n.default=g,h.exports=n.default},function(h,n,g){"use strict";function a(A,v){if(A.type==="Program")return A;o.default.yy=f,f.locInfo=function(E){return new f.SourceLocation(v&&v.srcName,E)};var S=o.default.parse(A);return S}function r(A,v){var S=a(A,v),E=new m.default(v);return E.accept(S)}var s=g(1).default,d=g(3).default;n.__esModule=!0,n.parseWithoutProcessing=a,n.parse=r;var l=g(47),o=s(l),c=g(48),m=s(c),i=g(50),y=d(i),u=g(5);n.parser=o.default;var f={};u.extend(f,y)},function(h,n){"use strict";n.__esModule=!0;var g=function(){function a(){this.yy={}}var r={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(d,l,o,c,m,i,y){var u=i.length-1;switch(m){case 1:return i[u-1];case 2:this.$=c.prepareProgram(i[u]);break;case 3:this.$=i[u];break;case 4:this.$=i[u];break;case 5:this.$=i[u];break;case 6:this.$=i[u];break;case 7:this.$=i[u];break;case 8:this.$=i[u];break;case 9:this.$={type:"CommentStatement",value:c.stripComment(i[u]),strip:c.stripFlags(i[u],i[u]),loc:c.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[u],value:i[u],loc:c.locInfo(this._$)};break;case 11:this.$=c.prepareRawBlock(i[u-2],i[u-1],i[u],this._$);break;case 12:this.$={path:i[u-3],params:i[u-2],hash:i[u-1]};break;case 13:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!1,this._$);break;case 14:this.$=c.prepareBlock(i[u-3],i[u-2],i[u-1],i[u],!0,this._$);break;case 15:this.$={open:i[u-5],path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 16:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 17:this.$={path:i[u-4],params:i[u-3],hash:i[u-2],blockParams:i[u-1],strip:c.stripFlags(i[u-5],i[u])};break;case 18:this.$={strip:c.stripFlags(i[u-1],i[u-1]),program:i[u]};break;case 19:var f=c.prepareBlock(i[u-2],i[u-1],i[u],i[u],!1,this._$),A=c.prepareProgram([f],i[u-1].loc);A.chained=!0,this.$={strip:i[u-2].strip,program:A,chain:!0};break;case 20:this.$=i[u];break;case 21:this.$={path:i[u-1],strip:c.stripFlags(i[u-2],i[u])};break;case 22:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 23:this.$=c.prepareMustache(i[u-3],i[u-2],i[u-1],i[u-4],c.stripFlags(i[u-4],i[u]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[u-3],params:i[u-2],hash:i[u-1],indent:"",strip:c.stripFlags(i[u-4],i[u]),loc:c.locInfo(this._$)};break;case 25:this.$=c.preparePartialBlock(i[u-2],i[u-1],i[u],this._$);break;case 26:this.$={path:i[u-3],params:i[u-2],hash:i[u-1],strip:c.stripFlags(i[u-4],i[u])};break;case 27:this.$=i[u];break;case 28:this.$=i[u];break;case 29:this.$={type:"SubExpression",path:i[u-3],params:i[u-2],hash:i[u-1],loc:c.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[u],loc:c.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:c.id(i[u-2]),value:i[u],loc:c.locInfo(this._$)};break;case 32:this.$=c.id(i[u-1]);break;case 33:this.$=i[u];break;case 34:this.$=i[u];break;case 35:this.$={type:"StringLiteral",value:i[u],original:i[u],loc:c.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[u]),original:Number(i[u]),loc:c.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[u]==="true",original:i[u]==="true",loc:c.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:c.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:c.locInfo(this._$)};break;case 40:this.$=i[u];break;case 41:this.$=i[u];break;case 42:this.$=c.preparePath(!0,i[u],this._$);break;case 43:this.$=c.preparePath(!1,i[u],this._$);break;case 44:i[u-2].push({part:c.id(i[u]),original:i[u],separator:i[u-1]}),this.$=i[u-2];break;case 45:this.$=[{part:c.id(i[u]),original:i[u]}];break;case 46:this.$=[];break;case 47:i[u-1].push(i[u]);break;case 48:this.$=[];break;case 49:i[u-1].push(i[u]);break;case 50:this.$=[];break;case 51:i[u-1].push(i[u]);break;case 58:this.$=[];break;case 59:i[u-1].push(i[u]);break;case 64:this.$=[];break;case 65:i[u-1].push(i[u]);break;case 70:this.$=[];break;case 71:i[u-1].push(i[u]);break;case 78:this.$=[];break;case 79:i[u-1].push(i[u]);break;case 82:this.$=[];break;case 83:i[u-1].push(i[u]);break;case 86:this.$=[];break;case 87:i[u-1].push(i[u]);break;case 90:this.$=[];break;case 91:i[u-1].push(i[u]);break;case 94:this.$=[];break;case 95:i[u-1].push(i[u]);break;case 98:this.$=[i[u]];break;case 99:i[u-1].push(i[u]);break;case 100:this.$=[i[u]];break;case 101:i[u-1].push(i[u])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(d,l){throw new Error(d)},parse:function(d){function l(){var H;return H=o.lexer.lex()||1,typeof H!="number"&&(H=o.symbols_[H]||H),H}var o=this,c=[0],m=[null],i=[],y=this.table,u="",f=0,A=0,v=0;this.lexer.setInput(d),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var S=this.lexer.yylloc;i.push(S);var E=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var b,T,D,P,F,M,_,R,j,k={};;){if(D=c[c.length-1],this.defaultActions[D]?P=this.defaultActions[D]:(b!==null&&typeof b!="undefined"||(b=l()),P=y[D]&&y[D][b]),typeof P=="undefined"||!P.length||!P[0]){var z="";if(!v){j=[];for(M in y[D])this.terminals_[M]&&M>2&&j.push("'"+this.terminals_[M]+"'");z=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+j.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(f+1)+": Unexpected "+(b==1?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(z,{text:this.lexer.match,token:this.terminals_[b]||b,line:this.lexer.yylineno,loc:S,expected:j})}}if(P[0]instanceof Array&&P.length>1)throw new Error("Parse Error: multiple actions possible at state: "+D+", token: "+b);switch(P[0]){case 1:c.push(b),m.push(this.lexer.yytext),i.push(this.lexer.yylloc),c.push(P[1]),b=null,T?(b=T,T=null):(A=this.lexer.yyleng,u=this.lexer.yytext,f=this.lexer.yylineno,S=this.lexer.yylloc,v>0&&v--);break;case 2:if(_=this.productions_[P[1]][1],k.$=m[m.length-_],k._$={first_line:i[i.length-(_||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(_||1)].first_column,last_column:i[i.length-1].last_column},E&&(k._$.range=[i[i.length-(_||1)].range[0],i[i.length-1].range[1]]),F=this.performAction.call(k,u,A,f,this.yy,P[1],m,i),typeof F!="undefined")return F;_&&(c=c.slice(0,-1*_*2),m=m.slice(0,-1*_),i=i.slice(0,-1*_)),c.push(this.productions_[P[1]][0]),m.push(k.$),i.push(k._$),R=y[c[c.length-2]][c[c.length-1]],c.push(R);break;case 3:return!0}}return!0}},s=function(){var d={EOF:1,parseError:function(l,o){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,o)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var o=l.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var o=l.length,c=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o-1),this.offset-=o;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-o]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),o=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+o+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,o,c,m,i;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),u=0;u<y.length&&(c=this._input.match(this.rules[y[u]]),!c||o&&!(c[0].length>o[0].length)||(o=c,m=u,this.options.flex));u++);return o?(i=o[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],l=this.performAction.call(this,this.yy,this,y[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l!="undefined"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return d.options={},d.performAction=function(l,o,c,m){function i(y,u){return o.yytext=o.yytext.substring(y,o.yyleng-u+y)}switch(c){case 0:if(o.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):o.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),o.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(o.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return o.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return o.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return o.yytext=o.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d}();return r.lexer=s,a.prototype=r,r.Parser=a,new a}();n.default=g,h.exports=n.default},function(h,n,g){"use strict";function a(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function r(i,y,u){y===void 0&&(y=i.length);var f=i[y-1],A=i[y-2];return f?f.type==="ContentStatement"?(A||!u?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:u}function s(i,y,u){y===void 0&&(y=-1);var f=i[y+1],A=i[y+2];return f?f.type==="ContentStatement"?(A||!u?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:u}function d(i,y,u){var f=i[y==null?0:y+1];if(f&&f.type==="ContentStatement"&&(u||!f.rightStripped)){var A=f.value;f.value=f.value.replace(u?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==A}}function l(i,y,u){var f=i[y==null?i.length-1:y-1];if(f&&f.type==="ContentStatement"&&(u||!f.leftStripped)){var A=f.value;return f.value=f.value.replace(u?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==A,f.leftStripped}}var o=g(1).default;n.__esModule=!0;var c=g(49),m=o(c);a.prototype=new m.default,a.prototype.Program=function(i){var y=!this.options.ignoreStandalone,u=!this.isRootSeen;this.isRootSeen=!0;for(var f=i.body,A=0,v=f.length;A<v;A++){var S=f[A],E=this.accept(S);if(E){var b=r(f,A,u),T=s(f,A,u),D=E.openStandalone&&b,P=E.closeStandalone&&T,F=E.inlineStandalone&&b&&T;E.close&&d(f,A,!0),E.open&&l(f,A,!0),y&&F&&(d(f,A),l(f,A)&&S.type==="PartialStatement"&&(S.indent=/([ \t]+$)/.exec(f[A-1].original)[1])),y&&D&&(d((S.program||S.inverse).body),l(f,A)),y&&P&&(d(f,A),l((S.inverse||S.program).body))}}return i},a.prototype.BlockStatement=a.prototype.DecoratorBlock=a.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var y=i.program||i.inverse,u=i.program&&i.inverse,f=u,A=u;if(u&&u.chained)for(f=u.body[0].program;A.chained;)A=A.body[A.body.length-1].program;var v={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:s(y.body),closeStandalone:r((f||y).body)};if(i.openStrip.close&&d(y.body,null,!0),u){var S=i.inverseStrip;S.open&&l(y.body,null,!0),S.close&&d(f.body,null,!0),i.closeStrip.open&&l(A.body,null,!0),!this.options.ignoreStandalone&&r(y.body)&&s(f.body)&&(l(y.body),d(f.body))}else i.closeStrip.open&&l(y.body,null,!0);return v},a.prototype.Decorator=a.prototype.MustacheStatement=function(i){return i.strip},a.prototype.PartialStatement=a.prototype.CommentStatement=function(i){var y=i.strip||{};return{inlineStandalone:!0,open:y.open,close:y.close}},n.default=a,h.exports=n.default},function(h,n,g){"use strict";function a(){this.parents=[]}function r(m){this.acceptRequired(m,"path"),this.acceptArray(m.params),this.acceptKey(m,"hash")}function s(m){r.call(this,m),this.acceptKey(m,"program"),this.acceptKey(m,"inverse")}function d(m){this.acceptRequired(m,"name"),this.acceptArray(m.params),this.acceptKey(m,"hash")}var l=g(1).default;n.__esModule=!0;var o=g(6),c=l(o);a.prototype={constructor:a,mutating:!1,acceptKey:function(m,i){var y=this.accept(m[i]);if(this.mutating){if(y&&!a.prototype[y.type])throw new c.default('Unexpected node type "'+y.type+'" found when accepting '+i+" on "+m.type);m[i]=y}},acceptRequired:function(m,i){if(this.acceptKey(m,i),!m[i])throw new c.default(m.type+" requires "+i)},acceptArray:function(m){for(var i=0,y=m.length;i<y;i++)this.acceptKey(m,i),m[i]||(m.splice(i,1),i--,y--)},accept:function(m){if(m){if(!this[m.type])throw new c.default("Unknown type: "+m.type,m);this.current&&this.parents.unshift(this.current),this.current=m;var i=this[m.type](m);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?m:void 0}},Program:function(m){this.acceptArray(m.body)},MustacheStatement:r,Decorator:r,BlockStatement:s,DecoratorBlock:s,PartialStatement:d,PartialBlockStatement:function(m){d.call(this,m),this.acceptKey(m,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:r,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(m){this.acceptArray(m.pairs)},HashPair:function(m){this.acceptRequired(m,"value")}},n.default=a,h.exports=n.default},function(h,n,g){"use strict";function a(S,E){if(E=E.path?E.path.original:E,S.path.original!==E){var b={loc:S.path.loc};throw new v.default(S.path.original+" doesn't match "+E,b)}}function r(S,E){this.source=S,this.start={line:E.first_line,column:E.first_column},this.end={line:E.last_line,column:E.last_column}}function s(S){return/^\[.*\]$/.test(S)?S.substring(1,S.length-1):S}function d(S,E){return{open:S.charAt(2)==="~",close:E.charAt(E.length-3)==="~"}}function l(S){return S.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function o(S,E,b){b=this.locInfo(b);for(var T=S?"@":"",D=[],P=0,F=0,M=E.length;F<M;F++){var _=E[F].part,R=E[F].original!==_;if(T+=(E[F].separator||"")+_,R||_!==".."&&_!=="."&&_!=="this")D.push(_);else{if(D.length>0)throw new v.default("Invalid path: "+T,{loc:b});_===".."&&P++}}return{type:"PathExpression",data:S,depth:P,parts:D,original:T,loc:b}}function c(S,E,b,T,D,P){var F=T.charAt(3)||T.charAt(2),M=F!=="{"&&F!=="&",_=/\*/.test(T);return{type:_?"Decorator":"MustacheStatement",path:S,params:E,hash:b,escaped:M,strip:D,loc:this.locInfo(P)}}function m(S,E,b,T){a(S,b),T=this.locInfo(T);var D={type:"Program",body:E,strip:{},loc:T};return{type:"BlockStatement",path:S.path,params:S.params,hash:S.hash,program:D,openStrip:{},inverseStrip:{},closeStrip:{},loc:T}}function i(S,E,b,T,D,P){T&&T.path&&a(S,T);var F=/\*/.test(S.open);E.blockParams=S.blockParams;var M=void 0,_=void 0;if(b){if(F)throw new v.default("Unexpected inverse block on decorator",b);b.chain&&(b.program.body[0].closeStrip=T.strip),_=b.strip,M=b.program}return D&&(D=M,M=E,E=D),{type:F?"DecoratorBlock":"BlockStatement",path:S.path,params:S.params,hash:S.hash,program:E,inverse:M,openStrip:S.strip,inverseStrip:_,closeStrip:T&&T.strip,loc:this.locInfo(P)}}function y(S,E){if(!E&&S.length){var b=S[0].loc,T=S[S.length-1].loc;b&&T&&(E={source:b.source,start:{line:b.start.line,column:b.start.column},end:{line:T.end.line,column:T.end.column}})}return{type:"Program",body:S,strip:{},loc:E}}function u(S,E,b,T){return a(S,b),{type:"PartialBlockStatement",name:S.path,params:S.params,hash:S.hash,program:E,openStrip:S.strip,closeStrip:b&&b.strip,loc:this.locInfo(T)}}var f=g(1).default;n.__esModule=!0,n.SourceLocation=r,n.id=s,n.stripFlags=d,n.stripComment=l,n.preparePath=o,n.prepareMustache=c,n.prepareRawBlock=m,n.prepareBlock=i,n.prepareProgram=y,n.preparePartialBlock=u;var A=g(6),v=f(A)},function(h,n,g){"use strict";function a(){}function r(v,S,E){if(v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+v);S=S||{},"data"in S||(S.data=!0),S.compat&&(S.useDepths=!0);var b=E.parse(v,S),T=new E.Compiler().compile(b,S);return new E.JavaScriptCompiler().compile(T,S)}function s(v,S,E){function b(){var P=E.parse(v,S),F=new E.Compiler().compile(P,S),M=new E.JavaScriptCompiler().compile(F,S,void 0,!0);return E.template(M)}function T(P,F){return D||(D=b()),D.call(this,P,F)}if(S===void 0&&(S={}),v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+v);S=y.extend({},S),"data"in S||(S.data=!0),S.compat&&(S.useDepths=!0);var D=void 0;return T._setup=function(P){return D||(D=b()),D._setup(P)},T._child=function(P,F,M,_){return D||(D=b()),D._child(P,F,M,_)},T}function d(v,S){if(v===S)return!0;if(y.isArray(v)&&y.isArray(S)&&v.length===S.length){for(var E=0;E<v.length;E++)if(!d(v[E],S[E]))return!1;return!0}}function l(v){if(!v.path.parts){var S=v.path;v.path={type:"PathExpression",data:!1,depth:0,parts:[S.original+""],original:S.original+"",loc:S.loc}}}var o=g(34).default,c=g(1).default;n.__esModule=!0,n.Compiler=a,n.precompile=r,n.compile=s;var m=g(6),i=c(m),y=g(5),u=g(45),f=c(u),A=[].slice;a.prototype={compiler:a,equals:function(v){var S=this.opcodes.length;if(v.opcodes.length!==S)return!1;for(var E=0;E<S;E++){var b=this.opcodes[E],T=v.opcodes[E];if(b.opcode!==T.opcode||!d(b.args,T.args))return!1}S=this.children.length;for(var E=0;E<S;E++)if(!this.children[E].equals(v.children[E]))return!1;return!0},guid:0,compile:function(v,S){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=S,this.stringParams=S.stringParams,this.trackIds=S.trackIds,S.blockParams=S.blockParams||[],S.knownHelpers=y.extend(o(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},S.knownHelpers),this.accept(v)},compileProgram:function(v){var S=new this.compiler,E=S.compile(v,this.options),b=this.guid++;return this.usePartial=this.usePartial||E.usePartial,this.children[b]=E,this.useDepths=this.useDepths||E.useDepths,b},accept:function(v){if(!this[v.type])throw new i.default("Unknown type: "+v.type,v);this.sourceNode.unshift(v);var S=this[v.type](v);return this.sourceNode.shift(),S},Program:function(v){this.options.blockParams.unshift(v.blockParams);for(var S=v.body,E=S.length,b=0;b<E;b++)this.accept(S[b]);return this.options.blockParams.shift(),this.isSimple=E===1,this.blockParams=v.blockParams?v.blockParams.length:0,this},BlockStatement:function(v){l(v);var S=v.program,E=v.inverse;S=S&&this.compileProgram(S),E=E&&this.compileProgram(E);var b=this.classifySexpr(v);b==="helper"?this.helperSexpr(v,S,E):b==="simple"?(this.simpleSexpr(v),this.opcode("pushProgram",S),this.opcode("pushProgram",E),this.opcode("emptyHash"),this.opcode("blockValue",v.path.original)):(this.ambiguousSexpr(v,S,E),this.opcode("pushProgram",S),this.opcode("pushProgram",E),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(v){var S=v.program&&this.compileProgram(v.program),E=this.setupFullMustacheParams(v,S,void 0),b=v.path;this.useDecorators=!0,this.opcode("registerDecorator",E.length,b.original)},PartialStatement:function(v){this.usePartial=!0;var S=v.program;S&&(S=this.compileProgram(v.program));var E=v.params;if(E.length>1)throw new i.default("Unsupported number of partial arguments: "+E.length,v);E.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):E.push({type:"PathExpression",parts:[],depth:0}));var b=v.name.original,T=v.name.type==="SubExpression";T&&this.accept(v.name),this.setupFullMustacheParams(v,S,void 0,!0);var D=v.indent||"";this.options.preventIndent&&D&&(this.opcode("appendContent",D),D=""),this.opcode("invokePartial",T,b,D),this.opcode("append")},PartialBlockStatement:function(v){this.PartialStatement(v)},MustacheStatement:function(v){this.SubExpression(v),v.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(v){this.DecoratorBlock(v)},ContentStatement:function(v){v.value&&this.opcode("appendContent",v.value)},CommentStatement:function(){},SubExpression:function(v){l(v);var S=this.classifySexpr(v);S==="simple"?this.simpleSexpr(v):S==="helper"?this.helperSexpr(v):this.ambiguousSexpr(v)},ambiguousSexpr:function(v,S,E){var b=v.path,T=b.parts[0],D=S!=null||E!=null;this.opcode("getContext",b.depth),this.opcode("pushProgram",S),this.opcode("pushProgram",E),b.strict=!0,this.accept(b),this.opcode("invokeAmbiguous",T,D)},simpleSexpr:function(v){var S=v.path;S.strict=!0,this.accept(S),this.opcode("resolvePossibleLambda")},helperSexpr:function(v,S,E){var b=this.setupFullMustacheParams(v,S,E),T=v.path,D=T.parts[0];if(this.options.knownHelpers[D])this.opcode("invokeKnownHelper",b.length,D);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+D,v);T.strict=!0,T.falsy=!0,this.accept(T),this.opcode("invokeHelper",b.length,T.original,f.default.helpers.simpleId(T))}},PathExpression:function(v){this.addDepth(v.depth),this.opcode("getContext",v.depth);var S=v.parts[0],E=f.default.helpers.scopedId(v),b=!v.depth&&!E&&this.blockParamIndex(S);b?this.opcode("lookupBlockParam",b,v.parts):S?v.data?(this.options.data=!0,this.opcode("lookupData",v.depth,v.parts,v.strict)):this.opcode("lookupOnContext",v.parts,v.falsy,v.strict,E):this.opcode("pushContext")},StringLiteral:function(v){this.opcode("pushString",v.value)},NumberLiteral:function(v){this.opcode("pushLiteral",v.value)},BooleanLiteral:function(v){this.opcode("pushLiteral",v.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(v){var S=v.pairs,E=0,b=S.length;for(this.opcode("pushHash");E<b;E++)this.pushParam(S[E].value);for(;E--;)this.opcode("assignToHash",S[E].key);this.opcode("popHash")},opcode:function(v){this.opcodes.push({opcode:v,args:A.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(v){v&&(this.useDepths=!0)},classifySexpr:function(v){var S=f.default.helpers.simpleId(v.path),E=S&&!!this.blockParamIndex(v.path.parts[0]),b=!E&&f.default.helpers.helperExpression(v),T=!E&&(b||S);if(T&&!b){var D=v.path.parts[0],P=this.options;P.knownHelpers[D]?b=!0:P.knownHelpersOnly&&(T=!1)}return b?"helper":T?"ambiguous":"simple"},pushParams:function(v){for(var S=0,E=v.length;S<E;S++)this.pushParam(v[S])},pushParam:function(v){var S=v.value!=null?v.value:v.original||"";if(this.stringParams)S.replace&&(S=S.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),v.depth&&this.addDepth(v.depth),this.opcode("getContext",v.depth||0),this.opcode("pushStringParam",S,v.type),v.type==="SubExpression"&&this.accept(v);else{if(this.trackIds){var E=void 0;if(!v.parts||f.default.helpers.scopedId(v)||v.depth||(E=this.blockParamIndex(v.parts[0])),E){var b=v.parts.slice(1).join(".");this.opcode("pushId","BlockParam",E,b)}else S=v.original||S,S.replace&&(S=S.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",v.type,S)}this.accept(v)}},setupFullMustacheParams:function(v,S,E,b){var T=v.params;return this.pushParams(T),this.opcode("pushProgram",S),this.opcode("pushProgram",E),v.hash?this.accept(v.hash):this.opcode("emptyHash",b),T},blockParamIndex:function(v){for(var S=0,E=this.options.blockParams.length;S<E;S++){var b=this.options.blockParams[S],T=b&&y.indexOf(b,v);if(b&&T>=0)return[S,T]}}}},function(h,n,g){"use strict";function a(f){this.value=f}function r(){}function s(f,A,v,S){var E=A.popStack(),b=0,T=v.length;for(f&&T--;b<T;b++)E=A.nameLookup(E,v[b],S);return f?[A.aliasable("container.strict"),"(",E,", ",A.quotedString(v[b]),", ",JSON.stringify(A.source.currentLocation)," )"]:E}var d=g(13).default,l=g(1).default;n.__esModule=!0;var o=g(4),c=g(6),m=l(c),i=g(5),y=g(53),u=l(y);r.prototype={nameLookup:function(f,A){return this.internalNameLookup(f,A)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=o.COMPILER_REVISION,A=o.REVISION_CHANGES[f];return[f,A]},appendToBuffer:function(f,A,v){return i.isArray(f)||(f=[f]),f=this.source.wrap(f,A),this.environment.isSimple?["return ",f,";"]:v?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,A){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(A),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,A,v,S){this.environment=f,this.options=A,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!S,this.name=this.environment.name,this.isChild=!!v,this.context=v||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,A),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var E=f.opcodes,b=void 0,T=void 0,D=void 0,P=void 0;for(D=0,P=E.length;D<P;D++)b=E[D],this.source.currentLocation=b.loc,T=T||b.loc,this[b.opcode].apply(this,b.args);if(this.source.currentLocation=T,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new m.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),S?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var F=this.createFunctionContext(S);if(this.isChild)return F;var M={compiler:this.compilerInfo(),main:F};this.decorators&&(M.main_d=this.decorators,M.useDecorators=!0);var _=this.context,R=_.programs,j=_.decorators;for(D=0,P=R.length;D<P;D++)R[D]&&(M[D]=R[D],j[D]&&(M[D+"_d"]=j[D],M.useDecorators=!0));return this.environment.usePartial&&(M.usePartial=!0),this.options.data&&(M.useData=!0),this.useDepths&&(M.useDepths=!0),this.useBlockParams&&(M.useBlockParams=!0),this.options.compat&&(M.compat=!0),S?M.compilerOptions=this.options:(M.compiler=JSON.stringify(M.compiler),this.source.currentLocation={start:{line:1,column:0}},M=this.objectLiteral(M),A.srcName?(M=M.toStringWithSourceMap({file:A.destName}),M.map=M.map&&M.map.toString()):M=M.toString()),M},preamble:function(){this.lastContext=0,this.source=new u.default(this.options.srcName),this.decorators=new u.default(this.options.srcName)},createFunctionContext:function(f){var A=this,v="",S=this.stackVars.concat(this.registers.list);S.length>0&&(v+=", "+S.join(", "));var E=0;d(this.aliases).forEach(function(D){var P=A.aliases[D];P.children&&P.referenceCount>1&&(v+=", alias"+ ++E+"="+D,P.children[0]="alias"+E)}),this.lookupPropertyFunctionIsUsed&&(v+=", "+this.lookupPropertyFunctionVarDeclaration());var b=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&b.push("blockParams"),this.useDepths&&b.push("depths");var T=this.mergeSource(v);return f?(b.push(T),Function.apply(this,b)):this.source.wrap(["function(",b.join(","),`) {
  `,T,"}"])},mergeSource:function(f){var A=this.environment.isSimple,v=!this.forceBuffer,S=void 0,E=void 0,b=void 0,T=void 0;return this.source.each(function(D){D.appendToBuffer?(b?D.prepend("  + "):b=D,T=D):(b&&(E?b.prepend("buffer += "):S=!0,T.add(";"),b=T=void 0),E=!0,A||(v=!1))}),v?b?(b.prepend("return "),T.add(";")):E||this.source.push('return "";'):(f+=", buffer = "+(S?"":this.initializeBuffer()),b?(b.prepend("return buffer + "),T.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(S?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var A=this.aliasable("container.hooks.blockHelperMissing"),v=[this.contextName(0)];this.setupHelperArgs(f,0,v);var S=this.popStack();v.splice(1,0,S),this.push(this.source.functionCall(A,"call",v))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),A=[this.contextName(0)];this.setupHelperArgs("",0,A,!0),this.flushInline();var v=this.topStack();A.splice(1,0,v),this.pushSource(["if (!",this.lastHelper,") { ",v," = ",this.source.functionCall(f,"call",A),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(A){return[" != null ? ",A,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,A,v,S){var E=0;S||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[E++])),this.resolvePath("context",f,E,A,v)},lookupBlockParam:function(f,A){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",A,1)},lookupData:function(f,A,v){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",A,0,!0,v)},resolvePath:function(f,A,v,S,E){var b=this;if(this.options.strict||this.options.assumeObjects)return void this.push(s(this.options.strict&&E,this,A,f));for(var T=A.length;v<T;v++)this.replaceStack(function(D){var P=b.nameLookup(D,A[v],f);return S?[" && ",P]:[" != null ? ",P," : ",D]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,A){this.pushContext(),this.pushString(A),A!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,A){var v=this.nameLookup("decorators",A,"decorator"),S=this.setupHelperArgs(A,f);this.decorators.push(["fn = ",this.decorators.functionCall(v,"",["fn","props","container",S])," || fn;"])},invokeHelper:function(f,A,v){var S=this.popStack(),E=this.setupHelper(f,A),b=[];v&&b.push(E.name),b.push(S),this.options.strict||b.push(this.aliasable("container.hooks.helperMissing"));var T=["(",this.itemsSeparatedBy(b,"||"),")"],D=this.source.functionCall(T,"call",E.callParams);this.push(D)},itemsSeparatedBy:function(f,A){var v=[];v.push(f[0]);for(var S=1;S<f.length;S++)v.push(A,f[S]);return v},invokeKnownHelper:function(f,A){var v=this.setupHelper(f,A);this.push(this.source.functionCall(v.name,"call",v.callParams))},invokeAmbiguous:function(f,A){this.useRegister("helper");var v=this.popStack();this.emptyHash();var S=this.setupHelper(0,f,A),E=this.lastHelper=this.nameLookup("helpers",f,"helper"),b=["(","(helper = ",E," || ",v,")"];this.options.strict||(b[0]="(helper = ",b.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",b,S.paramsInit?["),(",S.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",S.callParams)," : helper))"])},invokePartial:function(f,A,v){var S=[],E=this.setupParams(A,1,S);f&&(A=this.popStack(),delete E.name),v&&(E.indent=JSON.stringify(v)),E.helpers="helpers",E.partials="partials",E.decorators="container.decorators",f?S.unshift(A):S.unshift(this.nameLookup("partials",A,"partial")),this.options.compat&&(E.depths="depths"),E=this.objectLiteral(E),S.push(E),this.push(this.source.functionCall("container.invokePartial","",S))},assignToHash:function(f){var A=this.popStack(),v=void 0,S=void 0,E=void 0;this.trackIds&&(E=this.popStack()),this.stringParams&&(S=this.popStack(),v=this.popStack());var b=this.hash;v&&(b.contexts[f]=v),S&&(b.types[f]=S),E&&(b.ids[f]=E),b.values[f]=A},pushId:function(f,A,v){f==="BlockParam"?this.pushStackLiteral("blockParams["+A[0]+"].path["+A[1]+"]"+(v?" + "+JSON.stringify("."+v):"")):f==="PathExpression"?this.pushString(A):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:r,compileChildren:function(f,A){for(var v=f.children,S=void 0,E=void 0,b=0,T=v.length;b<T;b++){S=v[b],E=new this.compiler;var D=this.matchExistingProgram(S);if(D==null){this.context.programs.push("");var P=this.context.programs.length;S.index=P,S.name="program"+P,this.context.programs[P]=E.compile(S,A,this.context,!this.precompile),this.context.decorators[P]=E.decorators,this.context.environments[P]=S,this.useDepths=this.useDepths||E.useDepths,this.useBlockParams=this.useBlockParams||E.useBlockParams,S.useDepths=this.useDepths,S.useBlockParams=this.useBlockParams}else S.index=D.index,S.name="program"+D.index,this.useDepths=this.useDepths||D.useDepths,this.useBlockParams=this.useBlockParams||D.useBlockParams}},matchExistingProgram:function(f){for(var A=0,v=this.context.environments.length;A<v;A++){var S=this.context.environments[A];if(S&&S.equals(f))return S}},programExpression:function(f){var A=this.environment.children[f],v=[A.index,"data",A.blockParams];return(this.useBlockParams||this.useDepths)&&v.push("blockParams"),this.useDepths&&v.push("depths"),"container.program("+v.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof a||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new a(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var A=["("],v=void 0,S=void 0,E=void 0;if(!this.isInline())throw new m.default("replaceStack on non-inline");var b=this.popStack(!0);if(b instanceof a)v=[b.value],A=["(",v],E=!0;else{S=!0;var T=this.incrStack();A=["((",this.push(T)," = ",b,")"],v=this.topStack()}var D=f.call(this,v);E||this.popStack(),S&&this.stackSlot--,this.push(A.concat(D,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var A=0,v=f.length;A<v;A++){var S=f[A];if(S instanceof a)this.compileStack.push(S);else{var E=this.incrStack();this.pushSource([E," = ",S,";"]),this.compileStack.push(E)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var A=this.isInline(),v=(A?this.inlineStack:this.compileStack).pop();if(!f&&v instanceof a)return v.value;if(!A){if(!this.stackSlot)throw new m.default("Invalid stack pop");this.stackSlot--}return v},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,A=f[f.length-1];return A instanceof a?A.value:A},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var A=this.aliases[f];return A?(A.referenceCount++,A):(A=this.aliases[f]=this.source.wrap(f),A.aliasable=!0,A.referenceCount=1,A)},setupHelper:function(f,A,v){var S=[],E=this.setupHelperArgs(A,f,S,v),b=this.nameLookup("helpers",A,"helper"),T=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:S,paramsInit:E,name:b,callParams:[T].concat(S)}},setupParams:function(f,A,v){var S={},E=[],b=[],T=[],D=!v,P=void 0;D&&(v=[]),S.name=this.quotedString(f),S.hash=this.popStack(),this.trackIds&&(S.hashIds=this.popStack()),this.stringParams&&(S.hashTypes=this.popStack(),S.hashContexts=this.popStack());var F=this.popStack(),M=this.popStack();(M||F)&&(S.fn=M||"container.noop",S.inverse=F||"container.noop");for(var _=A;_--;)P=this.popStack(),v[_]=P,this.trackIds&&(T[_]=this.popStack()),this.stringParams&&(b[_]=this.popStack(),E[_]=this.popStack());return D&&(S.args=this.source.generateArray(v)),this.trackIds&&(S.ids=this.source.generateArray(T)),this.stringParams&&(S.types=this.source.generateArray(b),S.contexts=this.source.generateArray(E)),this.options.data&&(S.data="data"),this.useBlockParams&&(S.blockParams="blockParams"),S},setupHelperArgs:function(f,A,v,S){var E=this.setupParams(f,A,v);return E.loc=JSON.stringify(this.source.currentLocation),E=this.objectLiteral(E),S?(this.useRegister("options"),v.push("options"),["options=",E]):v?(v.push(E),""):E}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),A=r.RESERVED_WORDS={},v=0,S=f.length;v<S;v++)A[f[v]]=!0}(),r.isValidJavaScriptVariableName=function(f){return!r.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},n.default=r,h.exports=n.default},function(h,n,g){"use strict";function a(o,c,m){if(d.isArray(o)){for(var i=[],y=0,u=o.length;y<u;y++)i.push(c.wrap(o[y],m));return i}return typeof o=="boolean"||typeof o=="number"?o+"":o}function r(o){this.srcFile=o,this.source=[]}var s=g(13).default;n.__esModule=!0;var d=g(5),l=void 0;try{}catch(o){}l||(l=function(o,c,m,i){this.src="",i&&this.add(i)},l.prototype={add:function(o){d.isArray(o)&&(o=o.join("")),this.src+=o},prepend:function(o){d.isArray(o)&&(o=o.join("")),this.src=o+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),r.prototype={isEmpty:function(){return!this.source.length},prepend:function(o,c){this.source.unshift(this.wrap(o,c))},push:function(o,c){this.source.push(this.wrap(o,c))},merge:function(){var o=this.empty();return this.each(function(c){o.add(["  ",c,`
`])}),o},each:function(o){for(var c=0,m=this.source.length;c<m;c++)o(this.source[c])},empty:function(){var o=this.currentLocation||{start:{}};return new l(o.start.line,o.start.column,this.srcFile)},wrap:function(o){var c=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return o instanceof l?o:(o=a(o,this,c),new l(c.start.line,c.start.column,this.srcFile,o))},functionCall:function(o,c,m){return m=this.generateList(m),this.wrap([o,c?"."+c+"(":"(",m,")"])},quotedString:function(o){return'"'+(o+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(o){var c=this,m=[];s(o).forEach(function(y){var u=a(o[y],c);u!=="undefined"&&m.push([c.quotedString(y),":",u])});var i=this.generateList(m);return i.prepend("{"),i.add("}"),i},generateList:function(o){for(var c=this.empty(),m=0,i=o.length;m<i;m++)m&&c.add(","),c.add(a(o[m],this));return c},generateArray:function(o){var c=this.generateList(o);return c.prepend("["),c.add("]"),c}},n.default=r,h.exports=n.default}])})},1745:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(5240),n(8774),n(8309),n(8742),n(2424),n(7536),n(1805),n(6527),n(763),n(9786)],a=function(r,s,d,l,o,c,m){"use strict";var i=/%20/g,y=/#.*$/,u=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,A=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,v=/^(?:GET|HEAD)$/,S=/^\/\//,E={},b={},T="*/".concat("*"),D=s.createElement("a");D.href=o.href;function P(j){return function(k,z){typeof k!="string"&&(z=k,k="*");var H,L=0,B=k.toLowerCase().match(l)||[];if(d(z))for(;H=B[L++];)H[0]==="+"?(H=H.slice(1)||"*",(j[H]=j[H]||[]).unshift(z)):(j[H]=j[H]||[]).push(z)}}function F(j,k,z,H){var L={},B=j===b;function U(V){var G;return L[V]=!0,r.each(j[V]||[],function(Q,se){var ue=se(k,z,H);if(typeof ue=="string"&&!B&&!L[ue])return k.dataTypes.unshift(ue),U(ue),!1;if(B)return!(G=ue)}),G}return U(k.dataTypes[0])||!L["*"]&&U("*")}function M(j,k){var z,H,L=r.ajaxSettings.flatOptions||{};for(z in k)k[z]!==void 0&&((L[z]?j:H||(H={}))[z]=k[z]);return H&&r.extend(!0,j,H),j}function _(j,k,z){for(var H,L,B,U,V=j.contents,G=j.dataTypes;G[0]==="*";)G.shift(),H===void 0&&(H=j.mimeType||k.getResponseHeader("Content-Type"));if(H){for(L in V)if(V[L]&&V[L].test(H)){G.unshift(L);break}}if(G[0]in z)B=G[0];else{for(L in z){if(!G[0]||j.converters[L+" "+G[0]]){B=L;break}U||(U=L)}B=B||U}if(B)return B!==G[0]&&G.unshift(B),z[B]}function R(j,k,z,H){var L,B,U,V,G,Q={},se=j.dataTypes.slice();if(se[1])for(U in j.converters)Q[U.toLowerCase()]=j.converters[U];for(B=se.shift();B;)if(j.responseFields[B]&&(z[j.responseFields[B]]=k),!G&&H&&j.dataFilter&&(k=j.dataFilter(k,j.dataType)),G=B,B=se.shift(),B){if(B==="*")B=G;else if(G!=="*"&&G!==B){if(U=Q[G+" "+B]||Q["* "+B],!U){for(L in Q)if(V=L.split(" "),V[1]===B&&(U=Q[G+" "+V[0]]||Q["* "+V[0]],U)){U===!0?U=Q[L]:Q[L]!==!0&&(B=V[0],se.unshift(V[1]));break}}if(U!==!0)if(U&&j.throws)k=U(k);else try{k=U(k)}catch(ue){return{state:"parsererror",error:U?ue:"No conversion from "+G+" to "+B}}}}return{state:"success",data:k}}return r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:o.href,type:"GET",isLocal:A.test(o.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":T,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(j,k){return k?M(M(j,r.ajaxSettings),k):M(r.ajaxSettings,j)},ajaxPrefilter:P(E),ajaxTransport:P(b),ajax:function(j,k){typeof j=="object"&&(k=j,j=void 0),k=k||{};var z,H,L,B,U,V,G,Q,se,ue,Z=r.ajaxSetup({},k),ve=Z.context||Z,Ae=Z.context&&(ve.nodeType||ve.jquery)?r(ve):r.event,Ce=r.Deferred(),Qe=r.Callbacks("once memory"),yt=Z.statusCode||{},Ct={},Tt={},Lt="canceled",Fe={readyState:0,getResponseHeader:function(we){var Ye;if(G){if(!B)for(B={};Ye=f.exec(L);)B[Ye[1].toLowerCase()+" "]=(B[Ye[1].toLowerCase()+" "]||[]).concat(Ye[2]);Ye=B[we.toLowerCase()+" "]}return Ye==null?null:Ye.join(", ")},getAllResponseHeaders:function(){return G?L:null},setRequestHeader:function(we,Ye){return G==null&&(we=Tt[we.toLowerCase()]=Tt[we.toLowerCase()]||we,Ct[we]=Ye),this},overrideMimeType:function(we){return G==null&&(Z.mimeType=we),this},statusCode:function(we){var Ye;if(we)if(G)Fe.always(we[Fe.status]);else for(Ye in we)yt[Ye]=[yt[Ye],we[Ye]];return this},abort:function(we){var Ye=we||Lt;return z&&z.abort(Ye),bt(0,Ye),this}};if(Ce.promise(Fe),Z.url=((j||Z.url||o.href)+"").replace(S,o.protocol+"//"),Z.type=k.method||k.type||Z.method||Z.type,Z.dataTypes=(Z.dataType||"*").toLowerCase().match(l)||[""],Z.crossDomain==null){V=s.createElement("a");try{V.href=Z.url,V.href=V.href,Z.crossDomain=D.protocol+"//"+D.host!=V.protocol+"//"+V.host}catch(we){Z.crossDomain=!0}}if(Z.data&&Z.processData&&typeof Z.data!="string"&&(Z.data=r.param(Z.data,Z.traditional)),F(E,Z,k,Fe),G)return Fe;Q=r.event&&Z.global,Q&&r.active++===0&&r.event.trigger("ajaxStart"),Z.type=Z.type.toUpperCase(),Z.hasContent=!v.test(Z.type),H=Z.url.replace(y,""),Z.hasContent?Z.data&&Z.processData&&(Z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Z.data=Z.data.replace(i,"+")):(ue=Z.url.slice(H.length),Z.data&&(Z.processData||typeof Z.data=="string")&&(H+=(m.test(H)?"&":"?")+Z.data,delete Z.data),Z.cache===!1&&(H=H.replace(u,"$1"),ue=(m.test(H)?"&":"?")+"_="+c.guid+++ue),Z.url=H+ue),Z.ifModified&&(r.lastModified[H]&&Fe.setRequestHeader("If-Modified-Since",r.lastModified[H]),r.etag[H]&&Fe.setRequestHeader("If-None-Match",r.etag[H])),(Z.data&&Z.hasContent&&Z.contentType!==!1||k.contentType)&&Fe.setRequestHeader("Content-Type",Z.contentType),Fe.setRequestHeader("Accept",Z.dataTypes[0]&&Z.accepts[Z.dataTypes[0]]?Z.accepts[Z.dataTypes[0]]+(Z.dataTypes[0]!=="*"?", "+T+"; q=0.01":""):Z.accepts["*"]);for(se in Z.headers)Fe.setRequestHeader(se,Z.headers[se]);if(Z.beforeSend&&(Z.beforeSend.call(ve,Fe,Z)===!1||G))return Fe.abort();if(Lt="abort",Qe.add(Z.complete),Fe.done(Z.success),Fe.fail(Z.error),z=F(b,Z,k,Fe),!z)bt(-1,"No Transport");else{if(Fe.readyState=1,Q&&Ae.trigger("ajaxSend",[Fe,Z]),G)return Fe;Z.async&&Z.timeout>0&&(U=window.setTimeout(function(){Fe.abort("timeout")},Z.timeout));try{G=!1,z.send(Ct,bt)}catch(we){if(G)throw we;bt(-1,we)}}function bt(we,Ye,Zt,mr){var rt,Me,de,Pe,Te,X=Ye;G||(G=!0,U&&window.clearTimeout(U),z=void 0,L=mr||"",Fe.readyState=we>0?4:0,rt=we>=200&&we<300||we===304,Zt&&(Pe=_(Z,Fe,Zt)),!rt&&r.inArray("script",Z.dataTypes)>-1&&r.inArray("json",Z.dataTypes)<0&&(Z.converters["text script"]=function(){}),Pe=R(Z,Pe,Fe,rt),rt?(Z.ifModified&&(Te=Fe.getResponseHeader("Last-Modified"),Te&&(r.lastModified[H]=Te),Te=Fe.getResponseHeader("etag"),Te&&(r.etag[H]=Te)),we===204||Z.type==="HEAD"?X="nocontent":we===304?X="notmodified":(X=Pe.state,Me=Pe.data,de=Pe.error,rt=!de)):(de=X,(we||!X)&&(X="error",we<0&&(we=0))),Fe.status=we,Fe.statusText=(Ye||X)+"",rt?Ce.resolveWith(ve,[Me,X,Fe]):Ce.rejectWith(ve,[Fe,X,de]),Fe.statusCode(yt),yt=void 0,Q&&Ae.trigger(rt?"ajaxSuccess":"ajaxError",[Fe,Z,rt?Me:de]),Qe.fireWith(ve,[Fe,X]),Q&&(Ae.trigger("ajaxComplete",[Fe,Z]),--r.active||r.event.trigger("ajaxStop")))}return Fe},getJSON:function(j,k,z){return r.get(j,k,z,"json")},getScript:function(j,k){return r.get(j,void 0,k,"script")}}),r.each(["get","post"],function(j,k){r[k]=function(z,H,L,B){return d(H)&&(B=B||L,L=H,H=void 0),r.ajax(r.extend({url:z,type:k,dataType:B,data:H,success:L},r.isPlainObject(z)&&z))}}),r.ajaxPrefilter(function(j){var k;for(k in j.headers)k.toLowerCase()==="content-type"&&(j.contentType=j.headers[k]||"")}),r}.apply(h,g),a!==void 0&&(C.exports=a)},5086:(C,h,n)=>{var g,a;g=[n(4752),n(5240),n(8742),n(2424),n(1745)],a=function(r,s,d,l){"use strict";var o=[],c=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var m=o.pop()||r.expando+"_"+d.guid++;return this[m]=!0,m}}),r.ajaxPrefilter("json jsonp",function(m,i,y){var u,f,A,v=m.jsonp!==!1&&(c.test(m.url)?"url":typeof m.data=="string"&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&c.test(m.data)&&"data");if(v||m.dataTypes[0]==="jsonp")return u=m.jsonpCallback=s(m.jsonpCallback)?m.jsonpCallback():m.jsonpCallback,v?m[v]=m[v].replace(c,"$1"+u):m.jsonp!==!1&&(m.url+=(l.test(m.url)?"&":"?")+m.jsonp+"="+u),m.converters["script json"]=function(){return A||r.error(u+" was not called"),A[0]},m.dataTypes[0]="json",f=window[u],window[u]=function(){A=arguments},y.always(function(){f===void 0?r(window).removeProp(u):window[u]=f,m[u]&&(m.jsonpCallback=i.jsonpCallback,o.push(u)),A&&s(f)&&f(A[0]),A=f=void 0}),"script"})}.apply(h,g),a!==void 0&&(C.exports=a)},5266:(C,h,n)=>{var g,a;g=[n(4752),n(7883),n(5240),n(6299),n(1745),n(2161),n(4225),n(6753)],a=function(r,s,d){"use strict";r.fn.load=function(l,o,c){var m,i,y,u=this,f=l.indexOf(" ");return f>-1&&(m=s(l.slice(f)),l=l.slice(0,f)),d(o)?(c=o,o=void 0):o&&typeof o=="object"&&(i="POST"),u.length>0&&r.ajax({url:l,type:i||"GET",dataType:"html",data:o}).done(function(A){y=arguments,u.html(m?r("<div>").append(r.parseHTML(A)).find(m):A)}).always(c&&function(A,v){u.each(function(){c.apply(this,y||[A.responseText,v,A])})}),this}}.apply(h,g),a!==void 0&&(C.exports=a)},2048:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(1745)],a=function(r,s){"use strict";r.ajaxPrefilter(function(d){d.crossDomain&&(d.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(d){return r.globalEval(d),d}}}),r.ajaxPrefilter("script",function(d){d.cache===void 0&&(d.cache=!1),d.crossDomain&&(d.type="GET")}),r.ajaxTransport("script",function(d){if(d.crossDomain||d.scriptAttrs){var l,o;return{send:function(c,m){l=r("<script>").attr(d.scriptAttrs||{}).prop({charset:d.scriptCharset,src:d.url}).on("load error",o=function(i){l.remove(),o=null,i&&m(i.type==="error"?404:200,i.type)}),s.head.appendChild(l[0])},abort:function(){o&&o()}}}})}.apply(h,g),a!==void 0&&(C.exports=a)},8309:(C,h,n)=>{var g;g=function(){"use strict";return window.location}.call(h,n,h,C),g!==void 0&&(C.exports=g)},8742:(C,h,n)=>{var g;g=function(){"use strict";return{guid:Date.now()}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},2424:(C,h,n)=>{var g;g=function(){"use strict";return/\?/}.call(h,n,h,C),g!==void 0&&(C.exports=g)},7145:(C,h,n)=>{var g,a;g=[n(4752),n(8643),n(1745)],a=function(r,s){"use strict";r.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(o){}};var d={0:200,1223:204},l=r.ajaxSettings.xhr();s.cors=!!l&&"withCredentials"in l,s.ajax=l=!!l,r.ajaxTransport(function(o){var c,m;if(s.cors||l&&!o.crossDomain)return{send:function(i,y){var u,f=o.xhr();if(f.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(u in o.xhrFields)f[u]=o.xhrFields[u];o.mimeType&&f.overrideMimeType&&f.overrideMimeType(o.mimeType),!o.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(u in i)f.setRequestHeader(u,i[u]);c=function(A){return function(){c&&(c=m=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,A==="abort"?f.abort():A==="error"?typeof f.status!="number"?y(0,"error"):y(f.status,f.statusText):y(d[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=c(),m=f.onerror=f.ontimeout=c("error"),f.onabort!==void 0?f.onabort=m:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){c&&m()})},c=c("abort");try{f.send(o.hasContent&&o.data||null)}catch(A){if(c)throw A}},abort:function(){c&&c()}}})}.apply(h,g),a!==void 0&&(C.exports=a)},2209:(C,h,n)=>{var g,a;g=[n(4752),n(9393),n(7763),n(5504),n(8662)],a=function(r){"use strict";return r}.apply(h,g),a!==void 0&&(C.exports=a)},9393:(C,h,n)=>{var g,a;g=[n(4752),n(626),n(390),n(9383),n(8774),n(6753)],a=function(r,s,d,l,o){"use strict";var c,m=r.expr.attrHandle;r.fn.extend({attr:function(i,y){return s(this,r.attr,i,y,arguments.length>1)},removeAttr:function(i){return this.each(function(){r.removeAttr(this,i)})}}),r.extend({attr:function(i,y,u){var f,A,v=i.nodeType;if(!(v===3||v===8||v===2)){if(typeof i.getAttribute=="undefined")return r.prop(i,y,u);if((v!==1||!r.isXMLDoc(i))&&(A=r.attrHooks[y.toLowerCase()]||(r.expr.match.bool.test(y)?c:void 0)),u!==void 0){if(u===null){r.removeAttr(i,y);return}return A&&"set"in A&&(f=A.set(i,u,y))!==void 0?f:(i.setAttribute(y,u+""),u)}return A&&"get"in A&&(f=A.get(i,y))!==null?f:(f=r.find.attr(i,y),f==null?void 0:f)}},attrHooks:{type:{set:function(i,y){if(!l.radioValue&&y==="radio"&&d(i,"input")){var u=i.value;return i.setAttribute("type",y),u&&(i.value=u),y}}}},removeAttr:function(i,y){var u,f=0,A=y&&y.match(o);if(A&&i.nodeType===1)for(;u=A[f++];)i.removeAttribute(u)}}),c={set:function(i,y,u){return y===!1?r.removeAttr(i,u):i.setAttribute(u,u),u}},r.each(r.expr.match.bool.source.match(/\w+/g),function(i,y){var u=m[y]||r.find.attr;m[y]=function(f,A,v){var S,E,b=A.toLowerCase();return v||(E=m[b],m[b]=S,S=u(f,A,v)!=null?b:null,m[b]=E),S}})}.apply(h,g),a!==void 0&&(C.exports=a)},5504:(C,h,n)=>{var g,a;g=[n(4752),n(7883),n(5240),n(8774),n(8940),n(7536)],a=function(r,s,d,l,o){"use strict";function c(i){return i.getAttribute&&i.getAttribute("class")||""}function m(i){return Array.isArray(i)?i:typeof i=="string"?i.match(l)||[]:[]}r.fn.extend({addClass:function(i){var y,u,f,A,v,S;return d(i)?this.each(function(E){r(this).addClass(i.call(this,E,c(this)))}):(y=m(i),y.length?this.each(function(){if(f=c(this),u=this.nodeType===1&&" "+s(f)+" ",u){for(v=0;v<y.length;v++)A=y[v],u.indexOf(" "+A+" ")<0&&(u+=A+" ");S=s(u),f!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(i){var y,u,f,A,v,S;return d(i)?this.each(function(E){r(this).removeClass(i.call(this,E,c(this)))}):arguments.length?(y=m(i),y.length?this.each(function(){if(f=c(this),u=this.nodeType===1&&" "+s(f)+" ",u){for(v=0;v<y.length;v++)for(A=y[v];u.indexOf(" "+A+" ")>-1;)u=u.replace(" "+A+" "," ");S=s(u),f!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(i,y){var u,f,A,v,S=typeof i,E=S==="string"||Array.isArray(i);return d(i)?this.each(function(b){r(this).toggleClass(i.call(this,b,c(this),y),y)}):typeof y=="boolean"&&E?y?this.addClass(i):this.removeClass(i):(u=m(i),this.each(function(){if(E)for(v=r(this),A=0;A<u.length;A++)f=u[A],v.hasClass(f)?v.removeClass(f):v.addClass(f);else(i===void 0||S==="boolean")&&(f=c(this),f&&o.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||i===!1?"":o.get(this,"__className__")||""))}))},hasClass:function(i){var y,u,f=0;for(y=" "+i+" ";u=this[f++];)if(u.nodeType===1&&(" "+s(c(u))+" ").indexOf(y)>-1)return!0;return!1}})}.apply(h,g),a!==void 0&&(C.exports=a)},7763:(C,h,n)=>{var g,a;g=[n(4752),n(626),n(9383),n(6753)],a=function(r,s,d){"use strict";var l=/^(?:input|select|textarea|button)$/i,o=/^(?:a|area)$/i;r.fn.extend({prop:function(c,m){return s(this,r.prop,c,m,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[r.propFix[c]||c]})}}),r.extend({prop:function(c,m,i){var y,u,f=c.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!r.isXMLDoc(c))&&(m=r.propFix[m]||m,u=r.propHooks[m]),i!==void 0?u&&"set"in u&&(y=u.set(c,i,m))!==void 0?y:c[m]=i:u&&"get"in u&&(y=u.get(c,m))!==null?y:c[m]},propHooks:{tabIndex:{get:function(c){var m=r.find.attr(c,"tabindex");return m?parseInt(m,10):l.test(c.nodeName)||o.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(r.propHooks.selected={get:function(c){var m=c.parentNode;return m&&m.parentNode&&m.parentNode.selectedIndex,null},set:function(c){var m=c.parentNode;m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this})}.apply(h,g),a!==void 0&&(C.exports=a)},9383:(C,h,n)=>{var g,a;g=[n(458),n(8643)],a=function(r,s){"use strict";return function(){var d=r.createElement("input"),l=r.createElement("select"),o=l.appendChild(r.createElement("option"));d.type="checkbox",s.checkOn=d.value!=="",s.optSelected=o.selected,d=r.createElement("input"),d.value="t",d.type="radio",s.radioValue=d.value==="t"}(),s}.apply(h,g),a!==void 0&&(C.exports=a)},8662:(C,h,n)=>{var g,a;g=[n(4752),n(7883),n(9383),n(390),n(5240),n(7536)],a=function(r,s,d,l,o){"use strict";var c=/\r/g;r.fn.extend({val:function(m){var i,y,u,f=this[0];return arguments.length?(u=o(m),this.each(function(A){var v;this.nodeType===1&&(u?v=m.call(this,A,r(this).val()):v=m,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=r.map(v,function(S){return S==null?"":S+""})),i=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,v,"value")===void 0)&&(this.value=v))})):f?(i=r.valHooks[f.type]||r.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(y=i.get(f,"value"))!==void 0?y:(y=f.value,typeof y=="string"?y.replace(c,""):y==null?"":y)):void 0}}),r.extend({valHooks:{option:{get:function(m){var i=r.find.attr(m,"value");return i!=null?i:s(r.text(m))}},select:{get:function(m){var i,y,u,f=m.options,A=m.selectedIndex,v=m.type==="select-one",S=v?null:[],E=v?A+1:f.length;for(A<0?u=E:u=v?A:0;u<E;u++)if(y=f[u],(y.selected||u===A)&&!y.disabled&&(!y.parentNode.disabled||!l(y.parentNode,"optgroup"))){if(i=r(y).val(),v)return i;S.push(i)}return S},set:function(m,i){for(var y,u,f=m.options,A=r.makeArray(i),v=f.length;v--;)u=f[v],(u.selected=r.inArray(r.valHooks.option.get(u),A)>-1)&&(y=!0);return y||(m.selectedIndex=-1),A}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(m,i){if(Array.isArray(i))return m.checked=r.inArray(r(m).val(),i)>-1}},d.checkOn||(r.valHooks[this].get=function(m){return m.getAttribute("value")===null?"on":m.value})})}.apply(h,g),a!==void 0&&(C.exports=a)},4632:(C,h,n)=>{var g,a;g=[n(4752),n(1185),n(5240),n(8774)],a=function(r,s,d,l){"use strict";function o(c){var m={};return r.each(c.match(l)||[],function(i,y){m[y]=!0}),m}return r.Callbacks=function(c){c=typeof c=="string"?o(c):r.extend({},c);var m,i,y,u,f=[],A=[],v=-1,S=function(){for(u=u||c.once,y=m=!0;A.length;v=-1)for(i=A.shift();++v<f.length;)f[v].apply(i[0],i[1])===!1&&c.stopOnFalse&&(v=f.length,i=!1);c.memory||(i=!1),m=!1,u&&(i?f=[]:f="")},E={add:function(){return f&&(i&&!m&&(v=f.length-1,A.push(i)),function b(T){r.each(T,function(D,P){d(P)?(!c.unique||!E.has(P))&&f.push(P):P&&P.length&&s(P)!=="string"&&b(P)})}(arguments),i&&!m&&S()),this},remove:function(){return r.each(arguments,function(b,T){for(var D;(D=r.inArray(T,f,D))>-1;)f.splice(D,1),D<=v&&v--}),this},has:function(b){return b?r.inArray(b,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=A=[],f=i="",this},disabled:function(){return!f},lock:function(){return u=A=[],!i&&!m&&(f=i=""),this},locked:function(){return!!u},fireWith:function(b,T){return u||(T=T||[],T=[b,T.slice?T.slice():T],A.push(T),m||S()),this},fire:function(){return E.fireWith(this,arguments),this},fired:function(){return!!y}};return E},r}.apply(h,g),a!==void 0&&(C.exports=a)},4752:(C,h,n)=>{var g,a;g=[n(3577),n(8126),n(3843),n(3294),n(7950),n(5373),n(5359),n(2592),n(7166),n(8885),n(1741),n(8643),n(5240),n(7110),n(7893),n(1185)],a=function(r,s,d,l,o,c,m,i,y,u,f,A,v,S,E,b){"use strict";var T="3.7.0",D=/HTML$/i,P=function(M,_){return new P.fn.init(M,_)};P.fn=P.prototype={jquery:T,constructor:P,length:0,toArray:function(){return d.call(this)},get:function(M){return M==null?d.call(this):M<0?this[M+this.length]:this[M]},pushStack:function(M){var _=P.merge(this.constructor(),M);return _.prevObject=this,_},each:function(M){return P.each(this,M)},map:function(M){return this.pushStack(P.map(this,function(_,R){return M.call(_,R,_)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(P.grep(this,function(M,_){return(_+1)%2}))},odd:function(){return this.pushStack(P.grep(this,function(M,_){return _%2}))},eq:function(M){var _=this.length,R=+M+(M<0?_:0);return this.pushStack(R>=0&&R<_?[this[R]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:r.sort,splice:r.splice},P.extend=P.fn.extend=function(){var M,_,R,j,k,z,H=arguments[0]||{},L=1,B=arguments.length,U=!1;for(typeof H=="boolean"&&(U=H,H=arguments[L]||{},L++),typeof H!="object"&&!v(H)&&(H={}),L===B&&(H=this,L--);L<B;L++)if((M=arguments[L])!=null)for(_ in M)j=M[_],!(_==="__proto__"||H===j)&&(U&&j&&(P.isPlainObject(j)||(k=Array.isArray(j)))?(R=H[_],k&&!Array.isArray(R)?z=[]:!k&&!P.isPlainObject(R)?z={}:z=R,k=!1,H[_]=P.extend(U,z,j)):j!==void 0&&(H[_]=j));return H},P.extend({expando:"jQuery"+(T+Math.random()).replace(/\D/g,""),isReady:!0,error:function(M){throw new Error(M)},noop:function(){},isPlainObject:function(M){var _,R;return!M||i.call(M)!=="[object Object]"?!1:(_=s(M),_?(R=y.call(_,"constructor")&&_.constructor,typeof R=="function"&&u.call(R)===f):!0)},isEmptyObject:function(M){var _;for(_ in M)return!1;return!0},globalEval:function(M,_,R){E(M,{nonce:_&&_.nonce},R)},each:function(M,_){var R,j=0;if(F(M))for(R=M.length;j<R&&_.call(M[j],j,M[j])!==!1;j++);else for(j in M)if(_.call(M[j],j,M[j])===!1)break;return M},text:function(M){var _,R="",j=0,k=M.nodeType;if(k){if(k===1||k===9||k===11)return M.textContent;if(k===3||k===4)return M.nodeValue}else for(;_=M[j++];)R+=P.text(_);return R},makeArray:function(M,_){var R=_||[];return M!=null&&(F(Object(M))?P.merge(R,typeof M=="string"?[M]:M):o.call(R,M)),R},inArray:function(M,_,R){return _==null?-1:c.call(_,M,R)},isXMLDoc:function(M){var _=M&&M.namespaceURI,R=M&&(M.ownerDocument||M).documentElement;return!D.test(_||R&&R.nodeName||"HTML")},merge:function(M,_){for(var R=+_.length,j=0,k=M.length;j<R;j++)M[k++]=_[j];return M.length=k,M},grep:function(M,_,R){for(var j,k=[],z=0,H=M.length,L=!R;z<H;z++)j=!_(M[z],z),j!==L&&k.push(M[z]);return k},map:function(M,_,R){var j,k,z=0,H=[];if(F(M))for(j=M.length;z<j;z++)k=_(M[z],z,R),k!=null&&H.push(k);else for(z in M)k=_(M[z],z,R),k!=null&&H.push(k);return l(H)},guid:1,support:A}),typeof Symbol=="function"&&(P.fn[Symbol.iterator]=r[Symbol.iterator]),P.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(M,_){m["[object "+_+"]"]=_.toLowerCase()});function F(M){var _=!!M&&"length"in M&&M.length,R=b(M);return v(M)||S(M)?!1:R==="array"||_===0||typeof _=="number"&&_>0&&_-1 in M}return P}.apply(h,g),a!==void 0&&(C.exports=a)},7893:(C,h,n)=>{var g,a;g=[n(458)],a=function(r){"use strict";var s={type:!0,src:!0,nonce:!0,noModule:!0};function d(l,o,c){c=c||r;var m,i,y=c.createElement("script");if(y.text=l,o)for(m in s)i=o[m]||o.getAttribute&&o.getAttribute(m),i&&y.setAttribute(m,i);c.head.appendChild(y).parentNode.removeChild(y)}return d}.apply(h,g),a!==void 0&&(C.exports=a)},626:(C,h,n)=>{var g,a;g=[n(4752),n(1185),n(5240)],a=function(r,s,d){"use strict";var l=function(o,c,m,i,y,u,f){var A=0,v=o.length,S=m==null;if(s(m)==="object"){y=!0;for(A in m)l(o,c,A,m[A],!0,u,f)}else if(i!==void 0&&(y=!0,d(i)||(f=!0),S&&(f?(c.call(o,i),c=null):(S=c,c=function(E,b,T){return S.call(r(E),T)})),c))for(;A<v;A++)c(o[A],m,f?i:i.call(o[A],A,c(o[A],m)));return y?o:S?c.call(o):v?c(o[0],m):u};return l}.apply(h,g),a!==void 0&&(C.exports=a)},2219:(C,h)=>{var n,g;n=[],g=function(){"use strict";var a=/^-ms-/,r=/-([a-z])/g;function s(l,o){return o.toUpperCase()}function d(l){return l.replace(a,"ms-").replace(r,s)}return d}.apply(h,n),g!==void 0&&(C.exports=g)},7536:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(5240),n(1801),n(4207)],a=function(r,s,d,l){"use strict";var o,c=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,m=r.fn.init=function(i,y,u){var f,A;if(!i)return this;if(u=u||o,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=c.exec(i),f&&(f[1]||!y))if(f[1]){if(y=y instanceof r?y[0]:y,r.merge(this,r.parseHTML(f[1],y&&y.nodeType?y.ownerDocument||y:s,!0)),l.test(f[1])&&r.isPlainObject(y))for(f in y)d(this[f])?this[f](y[f]):this.attr(f,y[f]);return this}else return A=s.getElementById(f[2]),A&&(this[0]=A,this.length=1),this;else return!y||y.jquery?(y||u).find(i):this.constructor(y).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(d(i))return u.ready!==void 0?u.ready(i):i(r)}return r.makeArray(i,this)};return m.prototype=r.fn,o=r(s),m}.apply(h,g),a!==void 0&&(C.exports=a)},7386:(C,h,n)=>{var g,a;g=[n(4752),n(3916),n(1388)],a=function(r,s){"use strict";var d=function(o){return r.contains(o.ownerDocument,o)},l={composed:!0};return s.getRootNode&&(d=function(o){return r.contains(o.ownerDocument,o)||o.getRootNode(l)===o.ownerDocument}),d}.apply(h,g),a!==void 0&&(C.exports=a)},390:(C,h,n)=>{var g;g=function(){"use strict";function a(r,s){return r.nodeName&&r.nodeName.toLowerCase()===s.toLowerCase()}return a}.call(h,n,h,C),g!==void 0&&(C.exports=g)},6299:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(1801),n(6841),n(7398)],a=function(r,s,d,l,o){"use strict";return r.parseHTML=function(c,m,i){if(typeof c!="string")return[];typeof m=="boolean"&&(i=m,m=!1);var y,u,f;return m||(o.createHTMLDocument?(m=s.implementation.createHTMLDocument(""),y=m.createElement("base"),y.href=s.location.href,m.head.appendChild(y)):m=s),u=d.exec(c),f=!i&&[],u?[m.createElement(u[1])]:(u=l([c],m,f),f&&f.length&&r(f).remove(),r.merge([],u.childNodes))},r.parseHTML}.apply(h,g),a!==void 0&&(C.exports=a)},1805:(C,h,n)=>{var g,a;g=[n(4752)],a=function(r){"use strict";return r.parseXML=function(s){var d,l;if(!s||typeof s!="string")return null;try{d=new window.DOMParser().parseFromString(s,"text/xml")}catch(o){}return l=d&&d.getElementsByTagName("parsererror")[0],(!d||l)&&r.error("Invalid XML: "+(l?r.map(l.childNodes,function(o){return o.textContent}).join(`
`):s)),d},r.parseXML}.apply(h,g),a!==void 0&&(C.exports=a)},7357:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(6850),n(763)],a=function(r,s){"use strict";var d=r.Deferred();r.fn.ready=function(o){return d.then(o).catch(function(c){r.readyException(c)}),this},r.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--r.readyWait:r.isReady)||(r.isReady=!0,!(o!==!0&&--r.readyWait>0)&&d.resolveWith(s,[r]))}}),r.ready.then=d.then;function l(){s.removeEventListener("DOMContentLoaded",l),window.removeEventListener("load",l),r.ready()}s.readyState==="complete"||s.readyState!=="loading"&&!s.documentElement.doScroll?window.setTimeout(r.ready):(s.addEventListener("DOMContentLoaded",l),window.addEventListener("load",l))}.apply(h,g),a!==void 0&&(C.exports=a)},6850:(C,h,n)=>{var g,a;g=[n(4752)],a=function(r){"use strict";r.readyException=function(s){window.setTimeout(function(){throw s})}}.apply(h,g),a!==void 0&&(C.exports=a)},7883:(C,h,n)=>{var g,a;g=[n(8774)],a=function(r){"use strict";function s(d){var l=d.match(r)||[];return l.join(" ")}return s}.apply(h,g),a!==void 0&&(C.exports=a)},7398:(C,h,n)=>{var g,a;g=[n(458),n(8643)],a=function(r,s){"use strict";return s.createHTMLDocument=function(){var d=r.implementation.createHTMLDocument("").body;return d.innerHTML="<form></form><form></form>",d.childNodes.length===2}(),s}.apply(h,g),a!==void 0&&(C.exports=a)},1185:(C,h,n)=>{var g,a;g=[n(5359),n(2592)],a=function(r,s){"use strict";function d(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?r[s.call(l)]||"object":typeof l}return d}.apply(h,g),a!==void 0&&(C.exports=a)},1801:(C,h,n)=>{var g;g=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(h,n,h,C),g!==void 0&&(C.exports=g)},7595:(C,h,n)=>{var g,a;g=[n(4752),n(626),n(2219),n(390),n(2785),n(9967),n(2653),n(6519),n(5901),n(7117),n(3098),n(4949),n(2354),n(6811),n(5462),n(7536),n(7357),n(6753)],a=function(r,s,d,l,o,c,m,i,y,u,f,A,v,S,E){"use strict";var b=/^(none|table(?!-c[ea]).+)/,T={position:"absolute",visibility:"hidden",display:"block"},D={letterSpacing:"0",fontWeight:"400"};function P(_,R,j){var k=o.exec(R);return k?Math.max(0,k[2]-(j||0))+(k[3]||"px"):R}function F(_,R,j,k,z,H){var L=R==="width"?1:0,B=0,U=0,V=0;if(j===(k?"border":"content"))return 0;for(;L<4;L+=2)j==="margin"&&(V+=r.css(_,j+i[L],!0,z)),k?(j==="content"&&(U-=r.css(_,"padding"+i[L],!0,z)),j!=="margin"&&(U-=r.css(_,"border"+i[L]+"Width",!0,z))):(U+=r.css(_,"padding"+i[L],!0,z),j!=="padding"?U+=r.css(_,"border"+i[L]+"Width",!0,z):B+=r.css(_,"border"+i[L]+"Width",!0,z));return!k&&H>=0&&(U+=Math.max(0,Math.ceil(_["offset"+R[0].toUpperCase()+R.slice(1)]-H-U-B-.5))||0),U+V}function M(_,R,j){var k=y(_),z=!S.boxSizingReliable()||j,H=z&&r.css(_,"boxSizing",!1,k)==="border-box",L=H,B=f(_,R,k),U="offset"+R[0].toUpperCase()+R.slice(1);if(c.test(B)){if(!j)return B;B="auto"}return(!S.boxSizingReliable()&&H||!S.reliableTrDimensions()&&l(_,"tr")||B==="auto"||!parseFloat(B)&&r.css(_,"display",!1,k)==="inline")&&_.getClientRects().length&&(H=r.css(_,"boxSizing",!1,k)==="border-box",L=U in _,L&&(B=_[U])),B=parseFloat(B)||0,B+F(_,R,j||(H?"border":"content"),L,k,B)+"px"}return r.extend({cssHooks:{opacity:{get:function(_,R){if(R){var j=f(_,"opacity");return j===""?"1":j}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(_,R,j,k){if(!(!_||_.nodeType===3||_.nodeType===8||!_.style)){var z,H,L,B=d(R),U=m.test(R),V=_.style;if(U||(R=E(B)),L=r.cssHooks[R]||r.cssHooks[B],j!==void 0){if(H=typeof j,H==="string"&&(z=o.exec(j))&&z[1]&&(j=A(_,R,z),H="number"),j==null||j!==j)return;H==="number"&&!U&&(j+=z&&z[3]||(r.cssNumber[B]?"":"px")),!S.clearCloneStyle&&j===""&&R.indexOf("background")===0&&(V[R]="inherit"),(!L||!("set"in L)||(j=L.set(_,j,k))!==void 0)&&(U?V.setProperty(R,j):V[R]=j)}else return L&&"get"in L&&(z=L.get(_,!1,k))!==void 0?z:V[R]}},css:function(_,R,j,k){var z,H,L,B=d(R),U=m.test(R);return U||(R=E(B)),L=r.cssHooks[R]||r.cssHooks[B],L&&"get"in L&&(z=L.get(_,!0,j)),z===void 0&&(z=f(_,R,k)),z==="normal"&&R in D&&(z=D[R]),j===""||j?(H=parseFloat(z),j===!0||isFinite(H)?H||0:z):z}}),r.each(["height","width"],function(_,R){r.cssHooks[R]={get:function(j,k,z){if(k)return b.test(r.css(j,"display"))&&(!j.getClientRects().length||!j.getBoundingClientRect().width)?u(j,T,function(){return M(j,R,z)}):M(j,R,z)},set:function(j,k,z){var H,L=y(j),B=!S.scrollboxSize()&&L.position==="absolute",U=B||z,V=U&&r.css(j,"boxSizing",!1,L)==="border-box",G=z?F(j,R,z,V,L):0;return V&&B&&(G-=Math.ceil(j["offset"+R[0].toUpperCase()+R.slice(1)]-parseFloat(L[R])-F(j,R,"border",!1,L)-.5)),G&&(H=o.exec(k))&&(H[3]||"px")!=="px"&&(j.style[R]=k,k=r.css(j,R)),P(j,k,G)}}}),r.cssHooks.marginLeft=v(S.reliableMarginLeft,function(_,R){if(R)return(parseFloat(f(_,"marginLeft"))||_.getBoundingClientRect().left-u(_,{marginLeft:0},function(){return _.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(_,R){r.cssHooks[_+R]={expand:function(j){for(var k=0,z={},H=typeof j=="string"?j.split(" "):[j];k<4;k++)z[_+i[k]+R]=H[k]||H[k-2]||H[0];return z}},_!=="margin"&&(r.cssHooks[_+R].set=P)}),r.fn.extend({css:function(_,R){return s(this,function(j,k,z){var H,L,B={},U=0;if(Array.isArray(k)){for(H=y(j),L=k.length;U<L;U++)B[k[U]]=r.css(j,k[U],!1,H);return B}return z!==void 0?r.style(j,k,z):r.css(j,k)},_,R,arguments.length>1)}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},2354:(C,h,n)=>{var g;g=function(){"use strict";function a(r,s){return{get:function(){if(r()){delete this.get;return}return(this.get=s).apply(this,arguments)}}}return a}.call(h,n,h,C),g!==void 0&&(C.exports=g)},4949:(C,h,n)=>{var g,a;g=[n(4752),n(2785)],a=function(r,s){"use strict";function d(l,o,c,m){var i,y,u=20,f=m?function(){return m.cur()}:function(){return r.css(l,o,"")},A=f(),v=c&&c[3]||(r.cssNumber[o]?"":"px"),S=l.nodeType&&(r.cssNumber[o]||v!=="px"&&+A)&&s.exec(r.css(l,o));if(S&&S[3]!==v){for(A=A/2,v=v||S[3],S=+A||1;u--;)r.style(l,o,S+v),(1-y)*(1-(y=f()/A||.5))<=0&&(u=0),S=S/y;S=S*2,r.style(l,o,S+v),c=c||[]}return c&&(S=+S||+A||0,i=c[1]?S+(c[1]+1)*c[2]:+c[2],m&&(m.unit=v,m.start=S,m.end=i)),i}return d}.apply(h,g),a!==void 0&&(C.exports=a)},3098:(C,h,n)=>{var g,a;g=[n(4752),n(7386),n(3994),n(9967),n(5901),n(2653),n(6221),n(6811)],a=function(r,s,d,l,o,c,m,i){"use strict";function y(u,f,A){var v,S,E,b,T=c.test(f),D=u.style;return A=A||o(u),A&&(b=A.getPropertyValue(f)||A[f],T&&b&&(b=b.replace(m,"$1")||void 0),b===""&&!s(u)&&(b=r.style(u,f)),!i.pixelBoxStyles()&&l.test(b)&&d.test(f)&&(v=D.width,S=D.minWidth,E=D.maxWidth,D.minWidth=D.maxWidth=D.width=b,b=A.width,D.width=v,D.minWidth=S,D.maxWidth=E)),b!==void 0?b+"":b}return y}.apply(h,g),a!==void 0&&(C.exports=a)},5462:(C,h,n)=>{var g,a;g=[n(458),n(4752)],a=function(r,s){"use strict";var d=["Webkit","Moz","ms"],l=r.createElement("div").style,o={};function c(i){for(var y=i[0].toUpperCase()+i.slice(1),u=d.length;u--;)if(i=d[u]+y,i in l)return i}function m(i){var y=s.cssProps[i]||o[i];return y||(i in l?i:o[i]=c(i)||i)}return m}.apply(h,g),a!==void 0&&(C.exports=a)},7967:(C,h,n)=>{var g,a;g=[n(4752),n(6753)],a=function(r){"use strict";r.expr.pseudos.hidden=function(s){return!r.expr.pseudos.visible(s)},r.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)}}.apply(h,g),a!==void 0&&(C.exports=a)},1397:(C,h,n)=>{var g,a;g=[n(4752),n(8940),n(8694)],a=function(r,s,d){"use strict";var l={};function o(m){var i,y=m.ownerDocument,u=m.nodeName,f=l[u];return f||(i=y.body.appendChild(y.createElement(u)),f=r.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),l[u]=f,f)}function c(m,i){for(var y,u,f=[],A=0,v=m.length;A<v;A++)u=m[A],u.style&&(y=u.style.display,i?(y==="none"&&(f[A]=s.get(u,"display")||null,f[A]||(u.style.display="")),u.style.display===""&&d(u)&&(f[A]=o(u))):y!=="none"&&(f[A]="none",s.set(u,"display",y)));for(A=0;A<v;A++)f[A]!=null&&(m[A].style.display=f[A]);return m}return r.fn.extend({show:function(){return c(this,!0)},hide:function(){return c(this)},toggle:function(m){return typeof m=="boolean"?m?this.show():this.hide():this.each(function(){d(this)?r(this).show():r(this).hide()})}}),c}.apply(h,g),a!==void 0&&(C.exports=a)},6811:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(3916),n(8643)],a=function(r,s,d,l){"use strict";return function(){function o(){if(S){v.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",S.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",d.appendChild(v).appendChild(S);var E=window.getComputedStyle(S);m=E.top!=="1%",A=c(E.marginLeft)===12,S.style.right="60%",u=c(E.right)===36,i=c(E.width)===36,S.style.position="absolute",y=c(S.offsetWidth/3)===12,d.removeChild(v),S=null}}function c(E){return Math.round(parseFloat(E))}var m,i,y,u,f,A,v=s.createElement("div"),S=s.createElement("div");S.style&&(S.style.backgroundClip="content-box",S.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle=S.style.backgroundClip==="content-box",r.extend(l,{boxSizingReliable:function(){return o(),i},pixelBoxStyles:function(){return o(),u},pixelPosition:function(){return o(),m},reliableMarginLeft:function(){return o(),A},scrollboxSize:function(){return o(),y},reliableTrDimensions:function(){var E,b,T,D;return f==null&&(E=s.createElement("table"),b=s.createElement("tr"),T=s.createElement("div"),E.style.cssText="position:absolute;left:-11111px;border-collapse:separate",b.style.cssText="border:1px solid",b.style.height="1px",T.style.height="9px",T.style.display="block",d.appendChild(E).appendChild(b).appendChild(T),D=window.getComputedStyle(b),f=parseInt(D.height,10)+parseInt(D.borderTopWidth,10)+parseInt(D.borderBottomWidth,10)===b.offsetHeight,d.removeChild(E)),f}}))}(),l}.apply(h,g),a!==void 0&&(C.exports=a)},6519:(C,h,n)=>{var g;g=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(h,n,h,C),g!==void 0&&(C.exports=g)},5901:(C,h,n)=>{var g;g=function(){"use strict";return function(a){var r=a.ownerDocument.defaultView;return(!r||!r.opener)&&(r=window),r.getComputedStyle(a)}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},8694:(C,h,n)=>{var g,a;g=[n(4752),n(7386)],a=function(r,s){"use strict";return function(d,l){return d=l||d,d.style.display==="none"||d.style.display===""&&s(d)&&r.css(d,"display")==="none"}}.apply(h,g),a!==void 0&&(C.exports=a)},3994:(C,h,n)=>{var g,a;g=[n(6519)],a=function(r){"use strict";return new RegExp(r.join("|"),"i")}.apply(h,g),a!==void 0&&(C.exports=a)},2653:(C,h,n)=>{var g;g=function(){"use strict";return/^--/}.call(h,n,h,C),g!==void 0&&(C.exports=g)},9967:(C,h,n)=>{var g,a;g=[n(1873)],a=function(r){"use strict";return new RegExp("^("+r+")(?!px)[a-z%]+$","i")}.apply(h,g),a!==void 0&&(C.exports=a)},7117:(C,h,n)=>{var g;g=function(){"use strict";return function(a,r,s){var d,l,o={};for(l in r)o[l]=a.style[l],a.style[l]=r[l];d=s.call(a);for(l in r)a.style[l]=o[l];return d}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},2979:(C,h,n)=>{var g,a;g=[n(4752),n(626),n(2219),n(8940),n(4529)],a=function(r,s,d,l,o){"use strict";var c=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,m=/[A-Z]/g;function i(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:c.test(u)?JSON.parse(u):u}function y(u,f,A){var v;if(A===void 0&&u.nodeType===1)if(v="data-"+f.replace(m,"-$&").toLowerCase(),A=u.getAttribute(v),typeof A=="string"){try{A=i(A)}catch(S){}o.set(u,f,A)}else A=void 0;return A}return r.extend({hasData:function(u){return o.hasData(u)||l.hasData(u)},data:function(u,f,A){return o.access(u,f,A)},removeData:function(u,f){o.remove(u,f)},_data:function(u,f,A){return l.access(u,f,A)},_removeData:function(u,f){l.remove(u,f)}}),r.fn.extend({data:function(u,f){var A,v,S,E=this[0],b=E&&E.attributes;if(u===void 0){if(this.length&&(S=o.get(E),E.nodeType===1&&!l.get(E,"hasDataAttrs"))){for(A=b.length;A--;)b[A]&&(v=b[A].name,v.indexOf("data-")===0&&(v=d(v.slice(5)),y(E,v,S[v])));l.set(E,"hasDataAttrs",!0)}return S}return typeof u=="object"?this.each(function(){o.set(this,u)}):s(this,function(T){var D;if(E&&T===void 0)return D=o.get(E,u),D!==void 0||(D=y(E,u),D!==void 0)?D:void 0;this.each(function(){o.set(this,u,T)})},null,f,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){o.remove(this,u)})}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},6332:(C,h,n)=>{var g,a;g=[n(4752),n(2219),n(8774),n(4938)],a=function(r,s,d,l){"use strict";function o(){this.expando=r.expando+o.uid++}return o.uid=1,o.prototype={cache:function(c){var m=c[this.expando];return m||(m={},l(c)&&(c.nodeType?c[this.expando]=m:Object.defineProperty(c,this.expando,{value:m,configurable:!0}))),m},set:function(c,m,i){var y,u=this.cache(c);if(typeof m=="string")u[s(m)]=i;else for(y in m)u[s(y)]=m[y];return u},get:function(c,m){return m===void 0?this.cache(c):c[this.expando]&&c[this.expando][s(m)]},access:function(c,m,i){return m===void 0||m&&typeof m=="string"&&i===void 0?this.get(c,m):(this.set(c,m,i),i!==void 0?i:m)},remove:function(c,m){var i,y=c[this.expando];if(y!==void 0){if(m!==void 0)for(Array.isArray(m)?m=m.map(s):(m=s(m),m=m in y?[m]:m.match(d)||[]),i=m.length;i--;)delete y[m[i]];(m===void 0||r.isEmptyObject(y))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var m=c[this.expando];return m!==void 0&&!r.isEmptyObject(m)}},o}.apply(h,g),a!==void 0&&(C.exports=a)},4938:(C,h,n)=>{var g;g=function(){"use strict";return function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},8940:(C,h,n)=>{var g,a;g=[n(6332)],a=function(r){"use strict";return new r}.apply(h,g),a!==void 0&&(C.exports=a)},4529:(C,h,n)=>{var g,a;g=[n(6332)],a=function(r){"use strict";return new r}.apply(h,g),a!==void 0&&(C.exports=a)},763:(C,h,n)=>{var g,a;g=[n(4752),n(5240),n(3843),n(4632)],a=function(r,s,d){"use strict";function l(m){return m}function o(m){throw m}function c(m,i,y,u){var f;try{m&&s(f=m.promise)?f.call(m).done(i).fail(y):m&&s(f=m.then)?f.call(m,i,y):i.apply(void 0,[m].slice(u))}catch(A){y.apply(void 0,[A])}}return r.extend({Deferred:function(m){var i=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],y="pending",u={state:function(){return y},always:function(){return f.done(arguments).fail(arguments),this},catch:function(A){return u.then(null,A)},pipe:function(){var A=arguments;return r.Deferred(function(v){r.each(i,function(S,E){var b=s(A[E[4]])&&A[E[4]];f[E[1]](function(){var T=b&&b.apply(this,arguments);T&&s(T.promise)?T.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[E[0]+"With"](this,b?[T]:arguments)})}),A=null}).promise()},then:function(A,v,S){var E=0;function b(T,D,P,F){return function(){var M=this,_=arguments,R=function(){var k,z;if(!(T<E)){if(k=P.apply(M,_),k===D.promise())throw new TypeError("Thenable self-resolution");z=k&&(typeof k=="object"||typeof k=="function")&&k.then,s(z)?F?z.call(k,b(E,D,l,F),b(E,D,o,F)):(E++,z.call(k,b(E,D,l,F),b(E,D,o,F),b(E,D,l,D.notifyWith))):(P!==l&&(M=void 0,_=[k]),(F||D.resolveWith)(M,_))}},j=F?R:function(){try{R()}catch(k){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(k,j.error),T+1>=E&&(P!==o&&(M=void 0,_=[k]),D.rejectWith(M,_))}};T?j():(r.Deferred.getErrorHook?j.error=r.Deferred.getErrorHook():r.Deferred.getStackHook&&(j.error=r.Deferred.getStackHook()),window.setTimeout(j))}}return r.Deferred(function(T){i[0][3].add(b(0,T,s(S)?S:l,T.notifyWith)),i[1][3].add(b(0,T,s(A)?A:l)),i[2][3].add(b(0,T,s(v)?v:o))}).promise()},promise:function(A){return A!=null?r.extend(A,u):u}},f={};return r.each(i,function(A,v){var S=v[2],E=v[5];u[v[1]]=S.add,E&&S.add(function(){y=E},i[3-A][2].disable,i[3-A][3].disable,i[0][2].lock,i[0][3].lock),S.add(v[3].fire),f[v[0]]=function(){return f[v[0]+"With"](this===f?void 0:this,arguments),this},f[v[0]+"With"]=S.fireWith}),u.promise(f),m&&m.call(f,f),f},when:function(m){var i=arguments.length,y=i,u=Array(y),f=d.call(arguments),A=r.Deferred(),v=function(S){return function(E){u[S]=this,f[S]=arguments.length>1?d.call(arguments):E,--i||A.resolveWith(u,f)}};if(i<=1&&(c(m,A.done(v(y)).resolve,A.reject,!i),A.state()==="pending"||s(f[y]&&f[y].then)))return A.then();for(;y--;)c(f[y],v(y),A.reject);return A.promise()}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},8101:(C,h,n)=>{var g,a;g=[n(4752),n(763)],a=function(r){"use strict";var s=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(d,l){window.console&&window.console.warn&&d&&s.test(d.name)&&window.console.warn("jQuery.Deferred exception: "+d.message,d.stack,l)}}.apply(h,g),a!==void 0&&(C.exports=a)},4995:(C,h,n)=>{var g,a;g=[n(4752),n(390),n(2219),n(1185),n(5240),n(7110),n(3843),n(8615),n(2663)],a=function(r,s,d,l,o,c,m){"use strict";var i=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;r.proxy=function(y,u){var f,A,v;if(typeof u=="string"&&(f=y[u],u=y,y=f),!!o(y))return A=m.call(arguments,2),v=function(){return y.apply(u||this,A.concat(m.call(arguments)))},v.guid=y.guid=y.guid||r.guid++,v},r.holdReady=function(y){y?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=s,r.isFunction=o,r.isWindow=c,r.camelCase=d,r.type=l,r.now=Date.now,r.isNumeric=function(y){var u=r.type(y);return(u==="number"||u==="string")&&!isNaN(y-parseFloat(y))},r.trim=function(y){return y==null?"":(y+"").replace(i,"$1")}}.apply(h,g),a!==void 0&&(C.exports=a)},8615:(C,h,n)=>{var g,a;g=[n(4752),n(1745),n(6007)],a=function(r){"use strict";r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,d){r.fn[d]=function(l){return this.on(d,l)}})}.apply(h,g),a!==void 0&&(C.exports=a)},2663:(C,h,n)=>{var g,a;g=[n(4752),n(6007),n(6527)],a=function(r){"use strict";r.fn.extend({bind:function(s,d,l){return this.on(s,null,d,l)},unbind:function(s,d){return this.off(s,null,d)},delegate:function(s,d,l,o){return this.on(d,s,l,o)},undelegate:function(s,d,l){return arguments.length===1?this.off(s,"**"):this.off(d,s||"**",l)},hover:function(s,d){return this.mouseenter(s).mouseleave(d||s)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,d){r.fn[d]=function(l,o){return arguments.length>0?this.on(d,null,l,o):this.trigger(d)}})}.apply(h,g),a!==void 0&&(C.exports=a)},8923:(C,h,n)=>{var g,a;g=[n(4752),n(626),n(7110),n(7595)],a=function(r,s,d){"use strict";return r.each({Height:"height",Width:"width"},function(l,o){r.each({padding:"inner"+l,content:o,"":"outer"+l},function(c,m){r.fn[m]=function(i,y){var u=arguments.length&&(c||typeof i!="boolean"),f=c||(i===!0||y===!0?"margin":"border");return s(this,function(A,v,S){var E;return d(A)?m.indexOf("outer")===0?A["inner"+l]:A.document.documentElement["client"+l]:A.nodeType===9?(E=A.documentElement,Math.max(A.body["scroll"+l],E["scroll"+l],A.body["offset"+l],E["offset"+l],E["client"+l])):S===void 0?r.css(A,v,f):r.style(A,v,S,f)},o,u?i:void 0,u)}})}),r}.apply(h,g),a!==void 0&&(C.exports=a)},1698:(C,h,n)=>{var g,a;g=[n(4752),n(2219),n(458),n(5240),n(2785),n(8774),n(6519),n(8694),n(4949),n(8940),n(1397),n(7536),n(4170),n(763),n(2161),n(4225),n(7595),n(2725)],a=function(r,s,d,l,o,c,m,i,y,u,f){"use strict";var A,v,S=/^(?:toggle|show|hide)$/,E=/queueHooks$/;function b(){v&&(d.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,r.fx.interval),r.fx.tick())}function T(){return window.setTimeout(function(){A=void 0}),A=Date.now()}function D(R,j){var k,z=0,H={height:R};for(j=j?1:0;z<4;z+=2-j)k=m[z],H["margin"+k]=H["padding"+k]=R;return j&&(H.opacity=H.width=R),H}function P(R,j,k){for(var z,H=(_.tweeners[j]||[]).concat(_.tweeners["*"]),L=0,B=H.length;L<B;L++)if(z=H[L].call(k,j,R))return z}function F(R,j,k){var z,H,L,B,U,V,G,Q,se="width"in j||"height"in j,ue=this,Z={},ve=R.style,Ae=R.nodeType&&i(R),Ce=u.get(R,"fxshow");k.queue||(B=r._queueHooks(R,"fx"),B.unqueued==null&&(B.unqueued=0,U=B.empty.fire,B.empty.fire=function(){B.unqueued||U()}),B.unqueued++,ue.always(function(){ue.always(function(){B.unqueued--,r.queue(R,"fx").length||B.empty.fire()})}));for(z in j)if(H=j[z],S.test(H)){if(delete j[z],L=L||H==="toggle",H===(Ae?"hide":"show"))if(H==="show"&&Ce&&Ce[z]!==void 0)Ae=!0;else continue;Z[z]=Ce&&Ce[z]||r.style(R,z)}if(V=!r.isEmptyObject(j),!(!V&&r.isEmptyObject(Z))){se&&R.nodeType===1&&(k.overflow=[ve.overflow,ve.overflowX,ve.overflowY],G=Ce&&Ce.display,G==null&&(G=u.get(R,"display")),Q=r.css(R,"display"),Q==="none"&&(G?Q=G:(f([R],!0),G=R.style.display||G,Q=r.css(R,"display"),f([R]))),(Q==="inline"||Q==="inline-block"&&G!=null)&&r.css(R,"float")==="none"&&(V||(ue.done(function(){ve.display=G}),G==null&&(Q=ve.display,G=Q==="none"?"":Q)),ve.display="inline-block")),k.overflow&&(ve.overflow="hidden",ue.always(function(){ve.overflow=k.overflow[0],ve.overflowX=k.overflow[1],ve.overflowY=k.overflow[2]})),V=!1;for(z in Z)V||(Ce?"hidden"in Ce&&(Ae=Ce.hidden):Ce=u.access(R,"fxshow",{display:G}),L&&(Ce.hidden=!Ae),Ae&&f([R],!0),ue.done(function(){Ae||f([R]),u.remove(R,"fxshow");for(z in Z)r.style(R,z,Z[z])})),V=P(Ae?Ce[z]:0,z,ue),z in Ce||(Ce[z]=V.start,Ae&&(V.end=V.start,V.start=0))}}function M(R,j){var k,z,H,L,B;for(k in R)if(z=s(k),H=j[z],L=R[k],Array.isArray(L)&&(H=L[1],L=R[k]=L[0]),k!==z&&(R[z]=L,delete R[k]),B=r.cssHooks[z],B&&"expand"in B){L=B.expand(L),delete R[z];for(k in L)k in R||(R[k]=L[k],j[k]=H)}else j[z]=H}function _(R,j,k){var z,H,L=0,B=_.prefilters.length,U=r.Deferred().always(function(){delete V.elem}),V=function(){if(H)return!1;for(var se=A||T(),ue=Math.max(0,G.startTime+G.duration-se),Z=ue/G.duration||0,ve=1-Z,Ae=0,Ce=G.tweens.length;Ae<Ce;Ae++)G.tweens[Ae].run(ve);return U.notifyWith(R,[G,ve,ue]),ve<1&&Ce?ue:(Ce||U.notifyWith(R,[G,1,0]),U.resolveWith(R,[G]),!1)},G=U.promise({elem:R,props:r.extend({},j),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},k),originalProperties:j,originalOptions:k,startTime:A||T(),duration:k.duration,tweens:[],createTween:function(se,ue){var Z=r.Tween(R,G.opts,se,ue,G.opts.specialEasing[se]||G.opts.easing);return G.tweens.push(Z),Z},stop:function(se){var ue=0,Z=se?G.tweens.length:0;if(H)return this;for(H=!0;ue<Z;ue++)G.tweens[ue].run(1);return se?(U.notifyWith(R,[G,1,0]),U.resolveWith(R,[G,se])):U.rejectWith(R,[G,se]),this}}),Q=G.props;for(M(Q,G.opts.specialEasing);L<B;L++)if(z=_.prefilters[L].call(G,R,Q,G.opts),z)return l(z.stop)&&(r._queueHooks(G.elem,G.opts.queue).stop=z.stop.bind(z)),z;return r.map(Q,P,G),l(G.opts.start)&&G.opts.start.call(R,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),r.fx.timer(r.extend(V,{elem:R,anim:G,queue:G.opts.queue})),G}return r.Animation=r.extend(_,{tweeners:{"*":[function(R,j){var k=this.createTween(R,j);return y(k.elem,R,o.exec(j),k),k}]},tweener:function(R,j){l(R)?(j=R,R=["*"]):R=R.match(c);for(var k,z=0,H=R.length;z<H;z++)k=R[z],_.tweeners[k]=_.tweeners[k]||[],_.tweeners[k].unshift(j)},prefilters:[F],prefilter:function(R,j){j?_.prefilters.unshift(R):_.prefilters.push(R)}}),r.speed=function(R,j,k){var z=R&&typeof R=="object"?r.extend({},R):{complete:k||!k&&j||l(R)&&R,duration:R,easing:k&&j||j&&!l(j)&&j};return r.fx.off?z.duration=0:typeof z.duration!="number"&&(z.duration in r.fx.speeds?z.duration=r.fx.speeds[z.duration]:z.duration=r.fx.speeds._default),(z.queue==null||z.queue===!0)&&(z.queue="fx"),z.old=z.complete,z.complete=function(){l(z.old)&&z.old.call(this),z.queue&&r.dequeue(this,z.queue)},z},r.fn.extend({fadeTo:function(R,j,k,z){return this.filter(i).css("opacity",0).show().end().animate({opacity:j},R,k,z)},animate:function(R,j,k,z){var H=r.isEmptyObject(R),L=r.speed(j,k,z),B=function(){var U=_(this,r.extend({},R),L);(H||u.get(this,"finish"))&&U.stop(!0)};return B.finish=B,H||L.queue===!1?this.each(B):this.queue(L.queue,B)},stop:function(R,j,k){var z=function(H){var L=H.stop;delete H.stop,L(k)};return typeof R!="string"&&(k=j,j=R,R=void 0),j&&this.queue(R||"fx",[]),this.each(function(){var H=!0,L=R!=null&&R+"queueHooks",B=r.timers,U=u.get(this);if(L)U[L]&&U[L].stop&&z(U[L]);else for(L in U)U[L]&&U[L].stop&&E.test(L)&&z(U[L]);for(L=B.length;L--;)B[L].elem===this&&(R==null||B[L].queue===R)&&(B[L].anim.stop(k),H=!1,B.splice(L,1));(H||!k)&&r.dequeue(this,R)})},finish:function(R){return R!==!1&&(R=R||"fx"),this.each(function(){var j,k=u.get(this),z=k[R+"queue"],H=k[R+"queueHooks"],L=r.timers,B=z?z.length:0;for(k.finish=!0,r.queue(this,R,[]),H&&H.stop&&H.stop.call(this,!0),j=L.length;j--;)L[j].elem===this&&L[j].queue===R&&(L[j].anim.stop(!0),L.splice(j,1));for(j=0;j<B;j++)z[j]&&z[j].finish&&z[j].finish.call(this);delete k.finish})}}),r.each(["toggle","show","hide"],function(R,j){var k=r.fn[j];r.fn[j]=function(z,H,L){return z==null||typeof z=="boolean"?k.apply(this,arguments):this.animate(D(j,!0),z,H,L)}}),r.each({slideDown:D("show"),slideUp:D("hide"),slideToggle:D("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(R,j){r.fn[R]=function(k,z,H){return this.animate(j,k,z,H)}}),r.timers=[],r.fx.tick=function(){var R,j=0,k=r.timers;for(A=Date.now();j<k.length;j++)R=k[j],!R()&&k[j]===R&&k.splice(j--,1);k.length||r.fx.stop(),A=void 0},r.fx.timer=function(R){r.timers.push(R),r.fx.start()},r.fx.interval=13,r.fx.start=function(){v||(v=!0,b())},r.fx.stop=function(){v=null},r.fx.speeds={slow:600,fast:200,_default:400},r}.apply(h,g),a!==void 0&&(C.exports=a)},2725:(C,h,n)=>{var g,a;g=[n(4752),n(5462),n(7595)],a=function(r,s){"use strict";function d(l,o,c,m,i){return new d.prototype.init(l,o,c,m,i)}r.Tween=d,d.prototype={constructor:d,init:function(l,o,c,m,i,y){this.elem=l,this.prop=c,this.easing=i||r.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=m,this.unit=y||(r.cssNumber[c]?"":"px")},cur:function(){var l=d.propHooks[this.prop];return l&&l.get?l.get(this):d.propHooks._default.get(this)},run:function(l){var o,c=d.propHooks[this.prop];return this.options.duration?this.pos=o=r.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=o=l,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):d.propHooks._default.set(this),this}},d.prototype.init.prototype=d.prototype,d.propHooks={_default:{get:function(l){var o;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(o=r.css(l.elem,l.prop,""),!o||o==="auto"?0:o)},set:function(l){r.fx.step[l.prop]?r.fx.step[l.prop](l):l.elem.nodeType===1&&(r.cssHooks[l.prop]||l.elem.style[s(l.prop)]!=null)?r.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},d.propHooks.scrollTop=d.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},r.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},r.fx=d.prototype.init,r.fx.step={}}.apply(h,g),a!==void 0&&(C.exports=a)},6349:(C,h,n)=>{var g,a;g=[n(4752),n(6753),n(1698)],a=function(r){"use strict";r.expr.pseudos.animated=function(s){return r.grep(r.timers,function(d){return s===d.elem}).length}}.apply(h,g),a!==void 0&&(C.exports=a)},6007:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(3916),n(5240),n(8774),n(9175),n(3843),n(4938),n(8940),n(390),n(7536),n(6753)],a=function(r,s,d,l,o,c,m,i,y,u){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function A(){return!0}function v(){return!1}function S(b,T,D,P,F,M){var _,R;if(typeof T=="object"){typeof D!="string"&&(P=P||D,D=void 0);for(R in T)S(b,R,D,P,T[R],M);return b}if(P==null&&F==null?(F=D,P=D=void 0):F==null&&(typeof D=="string"?(F=P,P=void 0):(F=P,P=D,D=void 0)),F===!1)F=v;else if(!F)return b;return M===1&&(_=F,F=function(j){return r().off(j),_.apply(this,arguments)},F.guid=_.guid||(_.guid=r.guid++)),b.each(function(){r.event.add(this,T,F,P,D)})}r.event={global:{},add:function(b,T,D,P,F){var M,_,R,j,k,z,H,L,B,U,V,G=y.get(b);if(i(b))for(D.handler&&(M=D,D=M.handler,F=M.selector),F&&r.find.matchesSelector(d,F),D.guid||(D.guid=r.guid++),(j=G.events)||(j=G.events=Object.create(null)),(_=G.handle)||(_=G.handle=function(Q){return typeof r!="undefined"&&r.event.triggered!==Q.type?r.event.dispatch.apply(b,arguments):void 0}),T=(T||"").match(o)||[""],k=T.length;k--;)R=f.exec(T[k])||[],B=V=R[1],U=(R[2]||"").split(".").sort(),B&&(H=r.event.special[B]||{},B=(F?H.delegateType:H.bindType)||B,H=r.event.special[B]||{},z=r.extend({type:B,origType:V,data:P,handler:D,guid:D.guid,selector:F,needsContext:F&&r.expr.match.needsContext.test(F),namespace:U.join(".")},M),(L=j[B])||(L=j[B]=[],L.delegateCount=0,(!H.setup||H.setup.call(b,P,U,_)===!1)&&b.addEventListener&&b.addEventListener(B,_)),H.add&&(H.add.call(b,z),z.handler.guid||(z.handler.guid=D.guid)),F?L.splice(L.delegateCount++,0,z):L.push(z),r.event.global[B]=!0)},remove:function(b,T,D,P,F){var M,_,R,j,k,z,H,L,B,U,V,G=y.hasData(b)&&y.get(b);if(!(!G||!(j=G.events))){for(T=(T||"").match(o)||[""],k=T.length;k--;){if(R=f.exec(T[k])||[],B=V=R[1],U=(R[2]||"").split(".").sort(),!B){for(B in j)r.event.remove(b,B+T[k],D,P,!0);continue}for(H=r.event.special[B]||{},B=(P?H.delegateType:H.bindType)||B,L=j[B]||[],R=R[2]&&new RegExp("(^|\\.)"+U.join("\\.(?:.*\\.|)")+"(\\.|$)"),_=M=L.length;M--;)z=L[M],(F||V===z.origType)&&(!D||D.guid===z.guid)&&(!R||R.test(z.namespace))&&(!P||P===z.selector||P==="**"&&z.selector)&&(L.splice(M,1),z.selector&&L.delegateCount--,H.remove&&H.remove.call(b,z));_&&!L.length&&((!H.teardown||H.teardown.call(b,U,G.handle)===!1)&&r.removeEvent(b,B,G.handle),delete j[B])}r.isEmptyObject(j)&&y.remove(b,"handle events")}},dispatch:function(b){var T,D,P,F,M,_,R=new Array(arguments.length),j=r.event.fix(b),k=(y.get(this,"events")||Object.create(null))[j.type]||[],z=r.event.special[j.type]||{};for(R[0]=j,T=1;T<arguments.length;T++)R[T]=arguments[T];if(j.delegateTarget=this,!(z.preDispatch&&z.preDispatch.call(this,j)===!1)){for(_=r.event.handlers.call(this,j,k),T=0;(F=_[T++])&&!j.isPropagationStopped();)for(j.currentTarget=F.elem,D=0;(M=F.handlers[D++])&&!j.isImmediatePropagationStopped();)(!j.rnamespace||M.namespace===!1||j.rnamespace.test(M.namespace))&&(j.handleObj=M,j.data=M.data,P=((r.event.special[M.origType]||{}).handle||M.handler).apply(F.elem,R),P!==void 0&&(j.result=P)===!1&&(j.preventDefault(),j.stopPropagation()));return z.postDispatch&&z.postDispatch.call(this,j),j.result}},handlers:function(b,T){var D,P,F,M,_,R=[],j=T.delegateCount,k=b.target;if(j&&k.nodeType&&!(b.type==="click"&&b.button>=1)){for(;k!==this;k=k.parentNode||this)if(k.nodeType===1&&!(b.type==="click"&&k.disabled===!0)){for(M=[],_={},D=0;D<j;D++)P=T[D],F=P.selector+" ",_[F]===void 0&&(_[F]=P.needsContext?r(F,this).index(k)>-1:r.find(F,this,null,[k]).length),_[F]&&M.push(P);M.length&&R.push({elem:k,handlers:M})}}return k=this,j<T.length&&R.push({elem:k,handlers:T.slice(j)}),R},addProp:function(b,T){Object.defineProperty(r.Event.prototype,b,{enumerable:!0,configurable:!0,get:l(T)?function(){if(this.originalEvent)return T(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[b]},set:function(D){Object.defineProperty(this,b,{enumerable:!0,configurable:!0,writable:!0,value:D})}})},fix:function(b){return b[r.expando]?b:new r.Event(b)},special:{load:{noBubble:!0},click:{setup:function(b){var T=this||b;return c.test(T.type)&&T.click&&u(T,"input")&&E(T,"click",!0),!1},trigger:function(b){var T=this||b;return c.test(T.type)&&T.click&&u(T,"input")&&E(T,"click"),!0},_default:function(b){var T=b.target;return c.test(T.type)&&T.click&&u(T,"input")&&y.get(T,"click")||u(T,"a")}},beforeunload:{postDispatch:function(b){b.result!==void 0&&b.originalEvent&&(b.originalEvent.returnValue=b.result)}}}};function E(b,T,D){if(!D){y.get(b,T)===void 0&&r.event.add(b,T,A);return}y.set(b,T,!1),r.event.add(b,T,{namespace:!1,handler:function(P){var F,M=y.get(this,T);if(P.isTrigger&1&&this[T]){if(M)(r.event.special[T]||{}).delegateType&&P.stopPropagation();else if(M=m.call(arguments),y.set(this,T,M),this[T](),F=y.get(this,T),y.set(this,T,!1),M!==F)return P.stopImmediatePropagation(),P.preventDefault(),F}else M&&(y.set(this,T,r.event.trigger(M[0],M.slice(1),this)),P.stopPropagation(),P.isImmediatePropagationStopped=A)}})}return r.removeEvent=function(b,T,D){b.removeEventListener&&b.removeEventListener(T,D)},r.Event=function(b,T){if(!(this instanceof r.Event))return new r.Event(b,T);b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||b.defaultPrevented===void 0&&b.returnValue===!1?A:v,this.target=b.target&&b.target.nodeType===3?b.target.parentNode:b.target,this.currentTarget=b.currentTarget,this.relatedTarget=b.relatedTarget):this.type=b,T&&r.extend(this,T),this.timeStamp=b&&b.timeStamp||Date.now(),this[r.expando]=!0},r.Event.prototype={constructor:r.Event,isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v,isSimulated:!1,preventDefault:function(){var b=this.originalEvent;this.isDefaultPrevented=A,b&&!this.isSimulated&&b.preventDefault()},stopPropagation:function(){var b=this.originalEvent;this.isPropagationStopped=A,b&&!this.isSimulated&&b.stopPropagation()},stopImmediatePropagation:function(){var b=this.originalEvent;this.isImmediatePropagationStopped=A,b&&!this.isSimulated&&b.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},r.event.addProp),r.each({focus:"focusin",blur:"focusout"},function(b,T){function D(P){if(s.documentMode){var F=y.get(this,"handle"),M=r.event.fix(P);M.type=P.type==="focusin"?"focus":"blur",M.isSimulated=!0,F(P),M.target===M.currentTarget&&F(M)}else r.event.simulate(T,P.target,r.event.fix(P))}r.event.special[b]={setup:function(){var P;if(E(this,b,!0),s.documentMode)P=y.get(this,T),P||this.addEventListener(T,D),y.set(this,T,(P||0)+1);else return!1},trigger:function(){return E(this,b),!0},teardown:function(){var P;if(s.documentMode)P=y.get(this,T)-1,P?y.set(this,T,P):(this.removeEventListener(T,D),y.remove(this,T));else return!1},_default:function(P){return y.get(P.target,b)},delegateType:T},r.event.special[T]={setup:function(){var P=this.ownerDocument||this.document||this,F=s.documentMode?this:P,M=y.get(F,T);M||(s.documentMode?this.addEventListener(T,D):P.addEventListener(b,D,!0)),y.set(F,T,(M||0)+1)},teardown:function(){var P=this.ownerDocument||this.document||this,F=s.documentMode?this:P,M=y.get(F,T)-1;M?y.set(F,T,M):(s.documentMode?this.removeEventListener(T,D):P.removeEventListener(b,D,!0),y.remove(F,T))}}}),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(b,T){r.event.special[b]={delegateType:T,bindType:T,handle:function(D){var P,F=this,M=D.relatedTarget,_=D.handleObj;return(!M||M!==F&&!r.contains(F,M))&&(D.type=_.origType,P=_.handler.apply(this,arguments),D.type=T),P}}}),r.fn.extend({on:function(b,T,D,P){return S(this,b,T,D,P)},one:function(b,T,D,P){return S(this,b,T,D,P,1)},off:function(b,T,D){var P,F;if(b&&b.preventDefault&&b.handleObj)return P=b.handleObj,r(b.delegateTarget).off(P.namespace?P.origType+"."+P.namespace:P.origType,P.selector,P.handler),this;if(typeof b=="object"){for(F in b)this.off(F,T,b[F]);return this}return(T===!1||typeof T=="function")&&(D=T,T=void 0),D===!1&&(D=v),this.each(function(){r.event.remove(this,b,D,T)})}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},6527:(C,h,n)=>{var g,a;g=[n(4752),n(458),n(8940),n(4938),n(7166),n(5240),n(7110),n(6007)],a=function(r,s,d,l,o,c,m){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,y=function(u){u.stopPropagation()};return r.extend(r.event,{trigger:function(u,f,A,v){var S,E,b,T,D,P,F,M,_=[A||s],R=o.call(u,"type")?u.type:u,j=o.call(u,"namespace")?u.namespace.split("."):[];if(E=M=b=A=A||s,!(A.nodeType===3||A.nodeType===8)&&!i.test(R+r.event.triggered)&&(R.indexOf(".")>-1&&(j=R.split("."),R=j.shift(),j.sort()),D=R.indexOf(":")<0&&"on"+R,u=u[r.expando]?u:new r.Event(R,typeof u=="object"&&u),u.isTrigger=v?2:3,u.namespace=j.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=A),f=f==null?[u]:r.makeArray(f,[u]),F=r.event.special[R]||{},!(!v&&F.trigger&&F.trigger.apply(A,f)===!1))){if(!v&&!F.noBubble&&!m(A)){for(T=F.delegateType||R,i.test(T+R)||(E=E.parentNode);E;E=E.parentNode)_.push(E),b=E;b===(A.ownerDocument||s)&&_.push(b.defaultView||b.parentWindow||window)}for(S=0;(E=_[S++])&&!u.isPropagationStopped();)M=E,u.type=S>1?T:F.bindType||R,P=(d.get(E,"events")||Object.create(null))[u.type]&&d.get(E,"handle"),P&&P.apply(E,f),P=D&&E[D],P&&P.apply&&l(E)&&(u.result=P.apply(E,f),u.result===!1&&u.preventDefault());return u.type=R,!v&&!u.isDefaultPrevented()&&(!F._default||F._default.apply(_.pop(),f)===!1)&&l(A)&&D&&c(A[R])&&!m(A)&&(b=A[D],b&&(A[D]=null),r.event.triggered=R,u.isPropagationStopped()&&M.addEventListener(R,y),A[R](),u.isPropagationStopped()&&M.removeEventListener(R,y),r.event.triggered=void 0,b&&(A[D]=b)),u.result}},simulate:function(u,f,A){var v=r.extend(new r.Event,A,{type:u,isSimulated:!0});r.event.trigger(v,null,f)}}),r.fn.extend({trigger:function(u,f){return this.each(function(){r.event.trigger(u,f,this)})},triggerHandler:function(u,f){var A=this[0];if(A)return r.event.trigger(u,f,A,!0)}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},1102:(C,h,n)=>{var g,a,g,a;g=[n(4752)],a=function(r){"use strict";g=[],a=function(){return r}.apply(h,g),a!==void 0&&(C.exports=a)}.apply(h,g),a!==void 0&&(C.exports=a)},7703:(C,h,n)=>{var g,a;g=[n(4752)],a=function(r){"use strict";var s=window.jQuery,d=window.$;r.noConflict=function(l){return window.$===r&&(window.$=d),l&&window.jQuery===r&&(window.jQuery=s),r},typeof noGlobal=="undefined"&&(window.jQuery=window.$=r)}.apply(h,g),a!==void 0&&(C.exports=a)},6618:(C,h,n)=>{var g,a;g=[n(4752),n(6753),n(2161),n(4632),n(763),n(8101),n(7357),n(2979),n(4170),n(8114),n(2209),n(6007),n(4225),n(7444),n(3678),n(7595),n(7967),n(9786),n(1745),n(7145),n(2048),n(5086),n(5266),n(1805),n(6299),n(1698),n(6349),n(5311),n(8923),n(4995),n(1102),n(7703)],a=function(r){"use strict";return r}.apply(h,g),a!==void 0&&(C.exports=a)},4225:(C,h,n)=>{var g,a;g=[n(4752),n(7386),n(3294),n(5240),n(7950),n(9175),n(626),n(8964),n(1114),n(6045),n(6183),n(3559),n(6841),n(3881),n(8940),n(4529),n(4938),n(7893),n(390),n(7536),n(2161),n(6753),n(6007)],a=function(r,s,d,l,o,c,m,i,y,u,f,A,v,S,E,b,T,D,P){"use strict";var F=/<script|<style|<link/i,M=/checked\s*(?:[^=]|=\s*.checked.)/i,_=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function R(U,V){return P(U,"table")&&P(V.nodeType!==11?V:V.firstChild,"tr")&&r(U).children("tbody")[0]||U}function j(U){return U.type=(U.getAttribute("type")!==null)+"/"+U.type,U}function k(U){return(U.type||"").slice(0,5)==="true/"?U.type=U.type.slice(5):U.removeAttribute("type"),U}function z(U,V){var G,Q,se,ue,Z,ve,Ae;if(V.nodeType===1){if(E.hasData(U)&&(ue=E.get(U),Ae=ue.events,Ae)){E.remove(V,"handle events");for(se in Ae)for(G=0,Q=Ae[se].length;G<Q;G++)r.event.add(V,se,Ae[se][G])}b.hasData(U)&&(Z=b.access(U),ve=r.extend({},Z),b.set(V,ve))}}function H(U,V){var G=V.nodeName.toLowerCase();G==="input"&&c.test(U.type)?V.checked=U.checked:(G==="input"||G==="textarea")&&(V.defaultValue=U.defaultValue)}function L(U,V,G,Q){V=d(V);var se,ue,Z,ve,Ae,Ce,Qe=0,yt=U.length,Ct=yt-1,Tt=V[0],Lt=l(Tt);if(Lt||yt>1&&typeof Tt=="string"&&!S.checkClone&&M.test(Tt))return U.each(function(Fe){var bt=U.eq(Fe);Lt&&(V[0]=Tt.call(this,Fe,bt.html())),L(bt,V,G,Q)});if(yt&&(se=v(V,U[0].ownerDocument,!1,U,Q),ue=se.firstChild,se.childNodes.length===1&&(se=ue),ue||Q)){for(Z=r.map(f(se,"script"),j),ve=Z.length;Qe<yt;Qe++)Ae=se,Qe!==Ct&&(Ae=r.clone(Ae,!0,!0),ve&&r.merge(Z,f(Ae,"script"))),G.call(U[Qe],Ae,Qe);if(ve)for(Ce=Z[Z.length-1].ownerDocument,r.map(Z,k),Qe=0;Qe<ve;Qe++)Ae=Z[Qe],y.test(Ae.type||"")&&!E.access(Ae,"globalEval")&&r.contains(Ce,Ae)&&(Ae.src&&(Ae.type||"").toLowerCase()!=="module"?r._evalUrl&&!Ae.noModule&&r._evalUrl(Ae.src,{nonce:Ae.nonce||Ae.getAttribute("nonce")},Ce):D(Ae.textContent.replace(_,""),Ae,Ce))}return U}function B(U,V,G){for(var Q,se=V?r.filter(V,U):U,ue=0;(Q=se[ue])!=null;ue++)!G&&Q.nodeType===1&&r.cleanData(f(Q)),Q.parentNode&&(G&&s(Q)&&A(f(Q,"script")),Q.parentNode.removeChild(Q));return U}return r.extend({htmlPrefilter:function(U){return U},clone:function(U,V,G){var Q,se,ue,Z,ve=U.cloneNode(!0),Ae=s(U);if(!S.noCloneChecked&&(U.nodeType===1||U.nodeType===11)&&!r.isXMLDoc(U))for(Z=f(ve),ue=f(U),Q=0,se=ue.length;Q<se;Q++)H(ue[Q],Z[Q]);if(V)if(G)for(ue=ue||f(U),Z=Z||f(ve),Q=0,se=ue.length;Q<se;Q++)z(ue[Q],Z[Q]);else z(U,ve);return Z=f(ve,"script"),Z.length>0&&A(Z,!Ae&&f(U,"script")),ve},cleanData:function(U){for(var V,G,Q,se=r.event.special,ue=0;(G=U[ue])!==void 0;ue++)if(T(G)){if(V=G[E.expando]){if(V.events)for(Q in V.events)se[Q]?r.event.remove(G,Q):r.removeEvent(G,Q,V.handle);G[E.expando]=void 0}G[b.expando]&&(G[b.expando]=void 0)}}}),r.fn.extend({detach:function(U){return B(this,U,!0)},remove:function(U){return B(this,U)},text:function(U){return m(this,function(V){return V===void 0?r.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=V)})},null,U,arguments.length)},append:function(){return L(this,arguments,function(U){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var V=R(this,U);V.appendChild(U)}})},prepend:function(){return L(this,arguments,function(U){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var V=R(this,U);V.insertBefore(U,V.firstChild)}})},before:function(){return L(this,arguments,function(U){this.parentNode&&this.parentNode.insertBefore(U,this)})},after:function(){return L(this,arguments,function(U){this.parentNode&&this.parentNode.insertBefore(U,this.nextSibling)})},empty:function(){for(var U,V=0;(U=this[V])!=null;V++)U.nodeType===1&&(r.cleanData(f(U,!1)),U.textContent="");return this},clone:function(U,V){return U=U==null?!1:U,V=V==null?U:V,this.map(function(){return r.clone(this,U,V)})},html:function(U){return m(this,function(V){var G=this[0]||{},Q=0,se=this.length;if(V===void 0&&G.nodeType===1)return G.innerHTML;if(typeof V=="string"&&!F.test(V)&&!u[(i.exec(V)||["",""])[1].toLowerCase()]){V=r.htmlPrefilter(V);try{for(;Q<se;Q++)G=this[Q]||{},G.nodeType===1&&(r.cleanData(f(G,!1)),G.innerHTML=V);G=0}catch(ue){}}G&&this.empty().append(V)},null,U,arguments.length)},replaceWith:function(){var U=[];return L(this,arguments,function(V){var G=this.parentNode;r.inArray(this,U)<0&&(r.cleanData(f(this)),G&&G.replaceChild(V,this))},U)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(U,V){r.fn[U]=function(G){for(var Q,se=[],ue=r(G),Z=ue.length-1,ve=0;ve<=Z;ve++)Q=ve===Z?this:this.clone(!0),r(ue[ve])[V](Q),o.apply(se,Q.get());return this.pushStack(se)}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},7444:(C,h,n)=>{var g,a;g=[n(1745)],a=function(r){"use strict";return r._evalUrl=function(s,d,l){return r.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){r.globalEval(o,d,l)}})},r._evalUrl}.apply(h,g),a!==void 0&&(C.exports=a)},6841:(C,h,n)=>{var g,a;g=[n(4752),n(1185),n(7386),n(8964),n(1114),n(6045),n(6183),n(3559)],a=function(r,s,d,l,o,c,m,i){"use strict";var y=/<|&#?\w+;/;function u(f,A,v,S,E){for(var b,T,D,P,F,M,_=A.createDocumentFragment(),R=[],j=0,k=f.length;j<k;j++)if(b=f[j],b||b===0)if(s(b)==="object")r.merge(R,b.nodeType?[b]:b);else if(!y.test(b))R.push(A.createTextNode(b));else{for(T=T||_.appendChild(A.createElement("div")),D=(l.exec(b)||["",""])[1].toLowerCase(),P=c[D]||c._default,T.innerHTML=P[1]+r.htmlPrefilter(b)+P[2],M=P[0];M--;)T=T.lastChild;r.merge(R,T.childNodes),T=_.firstChild,T.textContent=""}for(_.textContent="",j=0;b=R[j++];){if(S&&r.inArray(b,S)>-1){E&&E.push(b);continue}if(F=d(b),T=m(_.appendChild(b),"script"),F&&i(T),v)for(M=0;b=T[M++];)o.test(b.type||"")&&v.push(b)}return _}return u}.apply(h,g),a!==void 0&&(C.exports=a)},6183:(C,h,n)=>{var g,a;g=[n(4752),n(390)],a=function(r,s){"use strict";function d(l,o){var c;return typeof l.getElementsByTagName!="undefined"?c=l.getElementsByTagName(o||"*"):typeof l.querySelectorAll!="undefined"?c=l.querySelectorAll(o||"*"):c=[],o===void 0||o&&s(l,o)?r.merge([l],c):c}return d}.apply(h,g),a!==void 0&&(C.exports=a)},3559:(C,h,n)=>{var g,a;g=[n(8940)],a=function(r){"use strict";function s(d,l){for(var o=0,c=d.length;o<c;o++)r.set(d[o],"globalEval",!l||r.get(l[o],"globalEval"))}return s}.apply(h,g),a!==void 0&&(C.exports=a)},3881:(C,h,n)=>{var g,a;g=[n(458),n(8643)],a=function(r,s){"use strict";return function(){var d=r.createDocumentFragment(),l=d.appendChild(r.createElement("div")),o=r.createElement("input");o.setAttribute("type","radio"),o.setAttribute("checked","checked"),o.setAttribute("name","t"),l.appendChild(o),s.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",s.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",s.option=!!l.lastChild}(),s}.apply(h,g),a!==void 0&&(C.exports=a)},1114:(C,h,n)=>{var g;g=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(h,n,h,C),g!==void 0&&(C.exports=g)},8964:(C,h,n)=>{var g;g=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(h,n,h,C),g!==void 0&&(C.exports=g)},6045:(C,h,n)=>{var g,a;g=[n(3881)],a=function(r){"use strict";var s={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return s.tbody=s.tfoot=s.colgroup=s.caption=s.thead,s.th=s.td,r.option||(s.optgroup=s.option=[1,"<select multiple='multiple'>","</select>"]),s}.apply(h,g),a!==void 0&&(C.exports=a)},5311:(C,h,n)=>{var g,a;g=[n(4752),n(626),n(3916),n(5240),n(9967),n(3098),n(2354),n(6811),n(7110),n(7536),n(7595),n(6753)],a=function(r,s,d,l,o,c,m,i,y){"use strict";return r.offset={setOffset:function(u,f,A){var v,S,E,b,T,D,P,F=r.css(u,"position"),M=r(u),_={};F==="static"&&(u.style.position="relative"),T=M.offset(),E=r.css(u,"top"),D=r.css(u,"left"),P=(F==="absolute"||F==="fixed")&&(E+D).indexOf("auto")>-1,P?(v=M.position(),b=v.top,S=v.left):(b=parseFloat(E)||0,S=parseFloat(D)||0),l(f)&&(f=f.call(u,A,r.extend({},T))),f.top!=null&&(_.top=f.top-T.top+b),f.left!=null&&(_.left=f.left-T.left+S),"using"in f?f.using.call(u,_):M.css(_)}},r.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(S){r.offset.setOffset(this,u,S)});var f,A,v=this[0];if(v)return v.getClientRects().length?(f=v.getBoundingClientRect(),A=v.ownerDocument.defaultView,{top:f.top+A.pageYOffset,left:f.left+A.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var u,f,A,v=this[0],S={top:0,left:0};if(r.css(v,"position")==="fixed")f=v.getBoundingClientRect();else{for(f=this.offset(),A=v.ownerDocument,u=v.offsetParent||A.documentElement;u&&(u===A.body||u===A.documentElement)&&r.css(u,"position")==="static";)u=u.parentNode;u&&u!==v&&u.nodeType===1&&(S=r(u).offset(),S.top+=r.css(u,"borderTopWidth",!0),S.left+=r.css(u,"borderLeftWidth",!0))}return{top:f.top-S.top-r.css(v,"marginTop",!0),left:f.left-S.left-r.css(v,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&r.css(u,"position")==="static";)u=u.offsetParent;return u||d})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,f){var A=f==="pageYOffset";r.fn[u]=function(v){return s(this,function(S,E,b){var T;if(y(S)?T=S:S.nodeType===9&&(T=S.defaultView),b===void 0)return T?T[f]:S[E];T?T.scrollTo(A?T.pageXOffset:b,A?b:T.pageYOffset):S[E]=b},u,v,arguments.length)}}),r.each(["top","left"],function(u,f){r.cssHooks[f]=m(i.pixelPosition,function(A,v){if(v)return v=c(A,f),o.test(v)?r(A).position()[f]+"px":v})}),r}.apply(h,g),a!==void 0&&(C.exports=a)},4170:(C,h,n)=>{var g,a;g=[n(4752),n(8940),n(763),n(4632)],a=function(r,s){"use strict";return r.extend({queue:function(d,l,o){var c;if(d)return l=(l||"fx")+"queue",c=s.get(d,l),o&&(!c||Array.isArray(o)?c=s.access(d,l,r.makeArray(o)):c.push(o)),c||[]},dequeue:function(d,l){l=l||"fx";var o=r.queue(d,l),c=o.length,m=o.shift(),i=r._queueHooks(d,l),y=function(){r.dequeue(d,l)};m==="inprogress"&&(m=o.shift(),c--),m&&(l==="fx"&&o.unshift("inprogress"),delete i.stop,m.call(d,y,i)),!c&&i&&i.empty.fire()},_queueHooks:function(d,l){var o=l+"queueHooks";return s.get(d,o)||s.access(d,o,{empty:r.Callbacks("once memory").add(function(){s.remove(d,[l+"queue",o])})})}}),r.fn.extend({queue:function(d,l){var o=2;return typeof d!="string"&&(l=d,d="fx",o--),arguments.length<o?r.queue(this[0],d):l===void 0?this:this.each(function(){var c=r.queue(this,d,l);r._queueHooks(this,d),d==="fx"&&c[0]!=="inprogress"&&r.dequeue(this,d)})},dequeue:function(d){return this.each(function(){r.dequeue(this,d)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(d,l){var o,c=1,m=r.Deferred(),i=this,y=this.length,u=function(){--c||m.resolveWith(i,[i])};for(typeof d!="string"&&(l=d,d=void 0),d=d||"fx";y--;)o=s.get(i[y],d+"queueHooks"),o&&o.empty&&(c++,o.empty.add(u));return u(),m.promise(l)}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},8114:(C,h,n)=>{var g,a;g=[n(4752),n(4170),n(1698)],a=function(r){"use strict";return r.fn.delay=function(s,d){return s=r.fx&&r.fx.speeds[s]||s,d=d||"fx",this.queue(d,function(l,o){var c=window.setTimeout(l,s);o.stop=function(){window.clearTimeout(c)}})},r.fn.delay}.apply(h,g),a!==void 0&&(C.exports=a)},6753:(C,h,n)=>{var g,a;g=[n(4752),n(390),n(3577),n(458),n(5373),n(7166),n(2919),n(7950),n(3843),n(8519),n(2879),n(6302),n(6221),n(8643),n(1388),n(7529)],a=function(r,s,d,l,o,c,m,i,y,u,f,A,v,S){"use strict";var E=l,b=i;(function(){var T,D,P,F,M,_=b,R,j,k,z,H,L=r.expando,B=0,U=0,V=ye(),G=ye(),Q=ye(),se=ye(),ue=function(w,q){return w===q&&(M=!0),0},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ve="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ae="\\["+A+"*("+ve+")(?:"+A+"*([*^$|!~]?=)"+A+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ve+"))|)"+A+"*\\]",Ce=":("+ve+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ae+")*)|.*)\\)|)",Qe=new RegExp(A+"+","g"),yt=new RegExp("^"+A+"*,"+A+"*"),Ct=new RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),Tt=new RegExp(A+"|>"),Lt=new RegExp(Ce),Fe=new RegExp("^"+ve+"$"),bt={ID:new RegExp("^#("+ve+")"),CLASS:new RegExp("^\\.("+ve+")"),TAG:new RegExp("^("+ve+"|[*])"),ATTR:new RegExp("^"+Ae),PSEUDO:new RegExp("^"+Ce),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},we=/^(?:input|select|textarea|button)$/i,Ye=/^h\d$/i,Zt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mr=/[+~]/,rt=new RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),Me=function(w,q){var J="0x"+w.slice(1)-65536;return q||(J<0?String.fromCharCode(J+65536):String.fromCharCode(J>>10|55296,J&1023|56320))},de=function(){ot()},Pe=Et(function(w){return w.disabled===!0&&s(w,"fieldset")},{dir:"parentNode",next:"legend"});function Te(){try{return R.activeElement}catch(w){}}try{_.apply(d=y.call(E.childNodes),E.childNodes),d[E.childNodes.length].nodeType}catch(w){_={apply:function(q,J){b.apply(q,y.call(J))},call:function(q){b.apply(q,y.call(arguments,1))}}}function X(w,q,J,ee){var ie,he,be,De,Se,ze,ae,re=q&&q.ownerDocument,le=q?q.nodeType:9;if(J=J||[],typeof w!="string"||!w||le!==1&&le!==9&&le!==11)return J;if(!ee&&(ot(q),q=q||R,k)){if(le!==11&&(Se=Zt.exec(w)))if(ie=Se[1]){if(le===9)if(be=q.getElementById(ie)){if(be.id===ie)return _.call(J,be),J}else return J;else if(re&&(be=re.getElementById(ie))&&X.contains(q,be)&&be.id===ie)return _.call(J,be),J}else{if(Se[2])return _.apply(J,q.getElementsByTagName(w)),J;if((ie=Se[3])&&q.getElementsByClassName)return _.apply(J,q.getElementsByClassName(ie)),J}if(!se[w+" "]&&(!z||!z.test(w))){if(ae=w,re=q,le===1&&(Tt.test(w)||Ct.test(w))){for(re=mr.test(w)&&Je(q.parentNode)||q,(re!=q||!S.scope)&&((De=q.getAttribute("id"))?De=r.escapeSelector(De):q.setAttribute("id",De=L)),ze=Bt(w),he=ze.length;he--;)ze[he]=(De?"#"+De:":scope")+" "+jt(ze[he]);ae=ze.join(",")}try{return _.apply(J,re.querySelectorAll(ae)),J}catch(oe){se(w,!0)}finally{De===L&&q.removeAttribute("id")}}}return kr(w.replace(v,"$1"),q,J,ee)}function ye(){var w=[];function q(J,ee){return w.push(J+" ")>D.cacheLength&&delete q[w.shift()],q[J+" "]=ee}return q}function fe(w){return w[L]=!0,w}function me(w){var q=R.createElement("fieldset");try{return!!w(q)}catch(J){return!1}finally{q.parentNode&&q.parentNode.removeChild(q),q=null}}function je(w){return function(q){return s(q,"input")&&q.type===w}}function Be(w){return function(q){return(s(q,"input")||s(q,"button"))&&q.type===w}}function Ue(w){return function(q){return"form"in q?q.parentNode&&q.disabled===!1?"label"in q?"label"in q.parentNode?q.parentNode.disabled===w:q.disabled===w:q.isDisabled===w||q.isDisabled!==!w&&Pe(q)===w:q.disabled===w:"label"in q?q.disabled===w:!1}}function $e(w){return fe(function(q){return q=+q,fe(function(J,ee){for(var ie,he=w([],J.length,q),be=he.length;be--;)J[ie=he[be]]&&(J[ie]=!(ee[ie]=J[ie]))})})}function Je(w){return w&&typeof w.getElementsByTagName!="undefined"&&w}function ot(w){var q,J=w?w.ownerDocument||w:E;return J==R||J.nodeType!==9||!J.documentElement||(R=J,j=R.documentElement,k=!r.isXMLDoc(R),H=j.matches||j.webkitMatchesSelector||j.msMatchesSelector,E!=R&&(q=R.defaultView)&&q.top!==q&&q.addEventListener("unload",de),S.getById=me(function(ee){return j.appendChild(ee).id=r.expando,!R.getElementsByName||!R.getElementsByName(r.expando).length}),S.disconnectedMatch=me(function(ee){return H.call(ee,"*")}),S.scope=me(function(){return R.querySelectorAll(":scope")}),S.cssHas=me(function(){try{return R.querySelector(":has(*,:jqfake)"),!1}catch(ee){return!0}}),S.getById?(D.filter.ID=function(ee){var ie=ee.replace(rt,Me);return function(he){return he.getAttribute("id")===ie}},D.find.ID=function(ee,ie){if(typeof ie.getElementById!="undefined"&&k){var he=ie.getElementById(ee);return he?[he]:[]}}):(D.filter.ID=function(ee){var ie=ee.replace(rt,Me);return function(he){var be=typeof he.getAttributeNode!="undefined"&&he.getAttributeNode("id");return be&&be.value===ie}},D.find.ID=function(ee,ie){if(typeof ie.getElementById!="undefined"&&k){var he,be,De,Se=ie.getElementById(ee);if(Se){if(he=Se.getAttributeNode("id"),he&&he.value===ee)return[Se];for(De=ie.getElementsByName(ee),be=0;Se=De[be++];)if(he=Se.getAttributeNode("id"),he&&he.value===ee)return[Se]}return[]}}),D.find.TAG=function(ee,ie){return typeof ie.getElementsByTagName!="undefined"?ie.getElementsByTagName(ee):ie.querySelectorAll(ee)},D.find.CLASS=function(ee,ie){if(typeof ie.getElementsByClassName!="undefined"&&k)return ie.getElementsByClassName(ee)},z=[],me(function(ee){var ie;j.appendChild(ee).innerHTML="<a id='"+L+"' href='' disabled='disabled'></a><select id='"+L+"-\r\\' disabled='disabled'><option selected=''></option></select>",ee.querySelectorAll("[selected]").length||z.push("\\["+A+"*(?:value|"+Z+")"),ee.querySelectorAll("[id~="+L+"-]").length||z.push("~="),ee.querySelectorAll("a#"+L+"+*").length||z.push(".#.+[+~]"),ee.querySelectorAll(":checked").length||z.push(":checked"),ie=R.createElement("input"),ie.setAttribute("type","hidden"),ee.appendChild(ie).setAttribute("name","D"),j.appendChild(ee).disabled=!0,ee.querySelectorAll(":disabled").length!==2&&z.push(":enabled",":disabled"),ie=R.createElement("input"),ie.setAttribute("name",""),ee.appendChild(ie),ee.querySelectorAll("[name='']").length||z.push("\\["+A+"*name"+A+"*="+A+`*(?:''|"")`)}),S.cssHas||z.push(":has"),z=z.length&&new RegExp(z.join("|")),ue=function(ee,ie){if(ee===ie)return M=!0,0;var he=!ee.compareDocumentPosition-!ie.compareDocumentPosition;return he||(he=(ee.ownerDocument||ee)==(ie.ownerDocument||ie)?ee.compareDocumentPosition(ie):1,he&1||!S.sortDetached&&ie.compareDocumentPosition(ee)===he?ee===R||ee.ownerDocument==E&&X.contains(E,ee)?-1:ie===R||ie.ownerDocument==E&&X.contains(E,ie)?1:F?o.call(F,ee)-o.call(F,ie):0:he&4?-1:1)}),R}X.matches=function(w,q){return X(w,null,null,q)},X.matchesSelector=function(w,q){if(ot(w),k&&!se[q+" "]&&(!z||!z.test(q)))try{var J=H.call(w,q);if(J||S.disconnectedMatch||w.document&&w.document.nodeType!==11)return J}catch(ee){se(q,!0)}return X(q,R,null,[w]).length>0},X.contains=function(w,q){return(w.ownerDocument||w)!=R&&ot(w),r.contains(w,q)},X.attr=function(w,q){(w.ownerDocument||w)!=R&&ot(w);var J=D.attrHandle[q.toLowerCase()],ee=J&&c.call(D.attrHandle,q.toLowerCase())?J(w,q,!k):void 0;return ee!==void 0?ee:w.getAttribute(q)},X.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},r.uniqueSort=function(w){var q,J=[],ee=0,ie=0;if(M=!S.sortStable,F=!S.sortStable&&y.call(w,0),u.call(w,ue),M){for(;q=w[ie++];)q===w[ie]&&(ee=J.push(ie));for(;ee--;)f.call(w,J[ee],1)}return F=null,w},r.fn.uniqueSort=function(){return this.pushStack(r.uniqueSort(y.apply(this)))},D=r.expr={cacheLength:50,createPseudo:fe,match:bt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(rt,Me),w[3]=(w[3]||w[4]||w[5]||"").replace(rt,Me),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||X.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&X.error(w[0]),w},PSEUDO:function(w){var q,J=!w[6]&&w[2];return bt.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":J&&Lt.test(J)&&(q=Bt(J,!0))&&(q=J.indexOf(")",J.length-q)-J.length)&&(w[0]=w[0].slice(0,q),w[2]=J.slice(0,q)),w.slice(0,3))}},filter:{TAG:function(w){var q=w.replace(rt,Me).toLowerCase();return w==="*"?function(){return!0}:function(J){return s(J,q)}},CLASS:function(w){var q=V[w+" "];return q||(q=new RegExp("(^|"+A+")"+w+"("+A+"|$)"))&&V(w,function(J){return q.test(typeof J.className=="string"&&J.className||typeof J.getAttribute!="undefined"&&J.getAttribute("class")||"")})},ATTR:function(w,q,J){return function(ee){var ie=X.attr(ee,w);return ie==null?q==="!=":q?(ie+="",q==="="?ie===J:q==="!="?ie!==J:q==="^="?J&&ie.indexOf(J)===0:q==="*="?J&&ie.indexOf(J)>-1:q==="$="?J&&ie.slice(-J.length)===J:q==="~="?(" "+ie.replace(Qe," ")+" ").indexOf(J)>-1:q==="|="?ie===J||ie.slice(0,J.length+1)===J+"-":!1):!0}},CHILD:function(w,q,J,ee,ie){var he=w.slice(0,3)!=="nth",be=w.slice(-4)!=="last",De=q==="of-type";return ee===1&&ie===0?function(Se){return!!Se.parentNode}:function(Se,ze,ae){var re,le,oe,Ee,Le,Ne=he!==be?"nextSibling":"previousSibling",st=Se.parentNode,vt=De&&Se.nodeName.toLowerCase(),Nt=!ae&&!De,ft=!1;if(st){if(he){for(;Ne;){for(oe=Se;oe=oe[Ne];)if(De?s(oe,vt):oe.nodeType===1)return!1;Le=Ne=w==="only"&&!Le&&"nextSibling"}return!0}if(Le=[be?st.firstChild:st.lastChild],be&&Nt){for(le=st[L]||(st[L]={}),re=le[w]||[],Ee=re[0]===B&&re[1],ft=Ee&&re[2],oe=Ee&&st.childNodes[Ee];oe=++Ee&&oe&&oe[Ne]||(ft=Ee=0)||Le.pop();)if(oe.nodeType===1&&++ft&&oe===Se){le[w]=[B,Ee,ft];break}}else if(Nt&&(le=Se[L]||(Se[L]={}),re=le[w]||[],Ee=re[0]===B&&re[1],ft=Ee),ft===!1)for(;(oe=++Ee&&oe&&oe[Ne]||(ft=Ee=0)||Le.pop())&&!((De?s(oe,vt):oe.nodeType===1)&&++ft&&(Nt&&(le=oe[L]||(oe[L]={}),le[w]=[B,ft]),oe===Se)););return ft-=ie,ft===ee||ft%ee===0&&ft/ee>=0}}},PSEUDO:function(w,q){var J,ee=D.pseudos[w]||D.setFilters[w.toLowerCase()]||X.error("unsupported pseudo: "+w);return ee[L]?ee(q):ee.length>1?(J=[w,w,"",q],D.setFilters.hasOwnProperty(w.toLowerCase())?fe(function(ie,he){for(var be,De=ee(ie,q),Se=De.length;Se--;)be=o.call(ie,De[Se]),ie[be]=!(he[be]=De[Se])}):function(ie){return ee(ie,0,J)}):ee}},pseudos:{not:fe(function(w){var q=[],J=[],ee=ht(w.replace(v,"$1"));return ee[L]?fe(function(ie,he,be,De){for(var Se,ze=ee(ie,null,De,[]),ae=ie.length;ae--;)(Se=ze[ae])&&(ie[ae]=!(he[ae]=Se))}):function(ie,he,be){return q[0]=ie,ee(q,null,be,J),q[0]=null,!J.pop()}}),has:fe(function(w){return function(q){return X(w,q).length>0}}),contains:fe(function(w){return w=w.replace(rt,Me),function(q){return(q.textContent||r.text(q)).indexOf(w)>-1}}),lang:fe(function(w){return Fe.test(w||"")||X.error("unsupported lang: "+w),w=w.replace(rt,Me).toLowerCase(),function(q){var J;do if(J=k?q.lang:q.getAttribute("xml:lang")||q.getAttribute("lang"))return J=J.toLowerCase(),J===w||J.indexOf(w+"-")===0;while((q=q.parentNode)&&q.nodeType===1);return!1}}),target:function(w){var q=window.location&&window.location.hash;return q&&q.slice(1)===w.id},root:function(w){return w===j},focus:function(w){return w===Te()&&R.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:Ue(!1),disabled:Ue(!0),checked:function(w){return s(w,"input")&&!!w.checked||s(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!D.pseudos.empty(w)},header:function(w){return Ye.test(w.nodeName)},input:function(w){return we.test(w.nodeName)},button:function(w){return s(w,"input")&&w.type==="button"||s(w,"button")},text:function(w){var q;return s(w,"input")&&w.type==="text"&&((q=w.getAttribute("type"))==null||q.toLowerCase()==="text")},first:$e(function(){return[0]}),last:$e(function(w,q){return[q-1]}),eq:$e(function(w,q,J){return[J<0?J+q:J]}),even:$e(function(w,q){for(var J=0;J<q;J+=2)w.push(J);return w}),odd:$e(function(w,q){for(var J=1;J<q;J+=2)w.push(J);return w}),lt:$e(function(w,q,J){var ee;for(J<0?ee=J+q:J>q?ee=q:ee=J;--ee>=0;)w.push(ee);return w}),gt:$e(function(w,q,J){for(var ee=J<0?J+q:J;++ee<q;)w.push(ee);return w})}},D.pseudos.nth=D.pseudos.eq;for(T in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})D.pseudos[T]=je(T);for(T in{submit:!0,reset:!0})D.pseudos[T]=Be(T);function ut(){}ut.prototype=D.filters=D.pseudos,D.setFilters=new ut;function Bt(w,q){var J,ee,ie,he,be,De,Se,ze=G[w+" "];if(ze)return q?0:ze.slice(0);for(be=w,De=[],Se=D.preFilter;be;){(!J||(ee=yt.exec(be)))&&(ee&&(be=be.slice(ee[0].length)||be),De.push(ie=[])),J=!1,(ee=Ct.exec(be))&&(J=ee.shift(),ie.push({value:J,type:ee[0].replace(v," ")}),be=be.slice(J.length));for(he in D.filter)(ee=bt[he].exec(be))&&(!Se[he]||(ee=Se[he](ee)))&&(J=ee.shift(),ie.push({value:J,type:he,matches:ee}),be=be.slice(J.length));if(!J)break}return q?be.length:be?X.error(w):G(w,De).slice(0)}function jt(w){for(var q=0,J=w.length,ee="";q<J;q++)ee+=w[q].value;return ee}function Et(w,q,J){var ee=q.dir,ie=q.next,he=ie||ee,be=J&&he==="parentNode",De=U++;return q.first?function(Se,ze,ae){for(;Se=Se[ee];)if(Se.nodeType===1||be)return w(Se,ze,ae);return!1}:function(Se,ze,ae){var re,le,oe=[B,De];if(ae){for(;Se=Se[ee];)if((Se.nodeType===1||be)&&w(Se,ze,ae))return!0}else for(;Se=Se[ee];)if(Se.nodeType===1||be)if(le=Se[L]||(Se[L]={}),ie&&s(Se,ie))Se=Se[ee]||Se;else{if((re=le[he])&&re[0]===B&&re[1]===De)return oe[2]=re[2];if(le[he]=oe,oe[2]=w(Se,ze,ae))return!0}return!1}}function cr(w){return w.length>1?function(q,J,ee){for(var ie=w.length;ie--;)if(!w[ie](q,J,ee))return!1;return!0}:w[0]}function dr(w,q,J){for(var ee=0,ie=q.length;ee<ie;ee++)X(w,q[ee],J);return J}function Er(w,q,J,ee,ie){for(var he,be=[],De=0,Se=w.length,ze=q!=null;De<Se;De++)(he=w[De])&&(!J||J(he,ee,ie))&&(be.push(he),ze&&q.push(De));return be}function Lr(w,q,J,ee,ie,he){return ee&&!ee[L]&&(ee=Lr(ee)),ie&&!ie[L]&&(ie=Lr(ie,he)),fe(function(be,De,Se,ze){var ae,re,le,oe,Ee=[],Le=[],Ne=De.length,st=be||dr(q||"*",Se.nodeType?[Se]:Se,[]),vt=w&&(be||!q)?Er(st,Ee,w,Se,ze):st;if(J?(oe=ie||(be?w:Ne||ee)?[]:De,J(vt,oe,Se,ze)):oe=vt,ee)for(ae=Er(oe,Le),ee(ae,[],Se,ze),re=ae.length;re--;)(le=ae[re])&&(oe[Le[re]]=!(vt[Le[re]]=le));if(be){if(ie||w){if(ie){for(ae=[],re=oe.length;re--;)(le=oe[re])&&ae.push(vt[re]=le);ie(null,oe=[],ae,ze)}for(re=oe.length;re--;)(le=oe[re])&&(ae=ie?o.call(be,le):Ee[re])>-1&&(be[ae]=!(De[ae]=le))}}else oe=Er(oe===De?oe.splice(Ne,oe.length):oe),ie?ie(null,De,oe,ze):_.apply(De,oe)})}function It(w){for(var q,J,ee,ie=w.length,he=D.relative[w[0].type],be=he||D.relative[" "],De=he?1:0,Se=Et(function(re){return re===q},be,!0),ze=Et(function(re){return o.call(q,re)>-1},be,!0),ae=[function(re,le,oe){var Ee=!he&&(oe||le!=P)||((q=le).nodeType?Se(re,le,oe):ze(re,le,oe));return q=null,Ee}];De<ie;De++)if(J=D.relative[w[De].type])ae=[Et(cr(ae),J)];else{if(J=D.filter[w[De].type].apply(null,w[De].matches),J[L]){for(ee=++De;ee<ie&&!D.relative[w[ee].type];ee++);return Lr(De>1&&cr(ae),De>1&&jt(w.slice(0,De-1).concat({value:w[De-2].type===" "?"*":""})).replace(v,"$1"),J,De<ee&&It(w.slice(De,ee)),ee<ie&&It(w=w.slice(ee)),ee<ie&&jt(w))}ae.push(J)}return cr(ae)}function Ir(w,q){var J=q.length>0,ee=w.length>0,ie=function(he,be,De,Se,ze){var ae,re,le,oe=0,Ee="0",Le=he&&[],Ne=[],st=P,vt=he||ee&&D.find.TAG("*",ze),Nt=B+=st==null?1:Math.random()||.1,ft=vt.length;for(ze&&(P=be==R||be||ze);Ee!==ft&&(ae=vt[Ee])!=null;Ee++){if(ee&&ae){for(re=0,!be&&ae.ownerDocument!=R&&(ot(ae),De=!k);le=w[re++];)if(le(ae,be||R,De)){_.call(Se,ae);break}ze&&(B=Nt)}J&&((ae=!le&&ae)&&oe--,he&&Le.push(ae))}if(oe+=Ee,J&&Ee!==oe){for(re=0;le=q[re++];)le(Le,Ne,be,De);if(he){if(oe>0)for(;Ee--;)Le[Ee]||Ne[Ee]||(Ne[Ee]=m.call(Se));Ne=Er(Ne)}_.apply(Se,Ne),ze&&!he&&Ne.length>0&&oe+q.length>1&&r.uniqueSort(Se)}return ze&&(B=Nt,P=st),Le};return J?fe(ie):ie}function ht(w,q){var J,ee=[],ie=[],he=Q[w+" "];if(!he){for(q||(q=Bt(w)),J=q.length;J--;)he=It(q[J]),he[L]?ee.push(he):ie.push(he);he=Q(w,Ir(ie,ee)),he.selector=w}return he}function kr(w,q,J,ee){var ie,he,be,De,Se,ze=typeof w=="function"&&w,ae=!ee&&Bt(w=ze.selector||w);if(J=J||[],ae.length===1){if(he=ae[0]=ae[0].slice(0),he.length>2&&(be=he[0]).type==="ID"&&q.nodeType===9&&k&&D.relative[he[1].type]){if(q=(D.find.ID(be.matches[0].replace(rt,Me),q)||[])[0],q)ze&&(q=q.parentNode);else return J;w=w.slice(he.shift().value.length)}for(ie=bt.needsContext.test(w)?0:he.length;ie--&&(be=he[ie],!D.relative[De=be.type]);)if((Se=D.find[De])&&(ee=Se(be.matches[0].replace(rt,Me),mr.test(he[0].type)&&Je(q.parentNode)||q))){if(he.splice(ie,1),w=ee.length&&jt(he),!w)return _.apply(J,ee),J;break}}return(ze||ht(w,ae))(ee,q,!k,J,!q||mr.test(w)&&Je(q.parentNode)||q),J}S.sortStable=L.split("").sort(ue).join("")===L,ot(),S.sortDetached=me(function(w){return w.compareDocumentPosition(R.createElement("fieldset"))&1}),r.find=X,r.expr[":"]=r.expr.pseudos,r.unique=r.uniqueSort,X.compile=ht,X.select=kr,X.setDocument=ot,X.escape=r.escapeSelector,X.getText=r.text,X.isXML=r.isXMLDoc,X.selectors=r.expr,X.support=r.support,X.uniqueSort=r.uniqueSort})()}.apply(h,g),a!==void 0&&(C.exports=a)},1388:(C,h,n)=>{var g,a;g=[n(4752)],a=function(r){"use strict";r.contains=function(s,d){var l=d&&d.parentNode;return s===l||!!(l&&l.nodeType===1&&(s.contains?s.contains(l):s.compareDocumentPosition&&s.compareDocumentPosition(l)&16))}}.apply(h,g),a!==void 0&&(C.exports=a)},7529:(C,h,n)=>{var g,a;g=[n(4752)],a=function(r){"use strict";var s=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function d(l,o){return o?l==="\0"?"\uFFFD":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}r.escapeSelector=function(l){return(l+"").replace(s,d)}}.apply(h,g),a!==void 0&&(C.exports=a)},9786:(C,h,n)=>{var g,a;g=[n(4752),n(1185),n(9175),n(5240),n(7536),n(2161),n(7763)],a=function(r,s,d,l){"use strict";var o=/\[\]$/,c=/\r?\n/g,m=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function y(u,f,A,v){var S;if(Array.isArray(f))r.each(f,function(E,b){A||o.test(u)?v(u,b):y(u+"["+(typeof b=="object"&&b!=null?E:"")+"]",b,A,v)});else if(!A&&s(f)==="object")for(S in f)y(u+"["+S+"]",f[S],A,v);else v(u,f)}return r.param=function(u,f){var A,v=[],S=function(E,b){var T=l(b)?b():b;v[v.length]=encodeURIComponent(E)+"="+encodeURIComponent(T==null?"":T)};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!r.isPlainObject(u))r.each(u,function(){S(this.name,this.value)});else for(A in u)y(A,u[A],f,S);return v.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=r.prop(this,"elements");return u?r.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!r(this).is(":disabled")&&i.test(this.nodeName)&&!m.test(u)&&(this.checked||!d.test(u))}).map(function(u,f){var A=r(this).val();return A==null?null:Array.isArray(A)?r.map(A,function(v){return{name:f.name,value:v.replace(c,`\r
`)}}):{name:f.name,value:A.replace(c,`\r
`)}}).get()}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},2161:(C,h,n)=>{var g,a;g=[n(4752),n(8126),n(5373),n(7132),n(3627),n(1505),n(390),n(7536),n(4207),n(6753)],a=function(r,s,d,l,o,c,m){"use strict";var i=/^(?:parents|prev(?:Until|All))/,y={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(f){var A=r(f,this),v=A.length;return this.filter(function(){for(var S=0;S<v;S++)if(r.contains(this,A[S]))return!0})},closest:function(f,A){var v,S=0,E=this.length,b=[],T=typeof f!="string"&&r(f);if(!c.test(f)){for(;S<E;S++)for(v=this[S];v&&v!==A;v=v.parentNode)if(v.nodeType<11&&(T?T.index(v)>-1:v.nodeType===1&&r.find.matchesSelector(v,f))){b.push(v);break}}return this.pushStack(b.length>1?r.uniqueSort(b):b)},index:function(f){return f?typeof f=="string"?d.call(r(f),this[0]):d.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,A){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(f,A))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function u(f,A){for(;(f=f[A])&&f.nodeType!==1;);return f}return r.each({parent:function(f){var A=f.parentNode;return A&&A.nodeType!==11?A:null},parents:function(f){return l(f,"parentNode")},parentsUntil:function(f,A,v){return l(f,"parentNode",v)},next:function(f){return u(f,"nextSibling")},prev:function(f){return u(f,"previousSibling")},nextAll:function(f){return l(f,"nextSibling")},prevAll:function(f){return l(f,"previousSibling")},nextUntil:function(f,A,v){return l(f,"nextSibling",v)},prevUntil:function(f,A,v){return l(f,"previousSibling",v)},siblings:function(f){return o((f.parentNode||{}).firstChild,f)},children:function(f){return o(f.firstChild)},contents:function(f){return f.contentDocument!=null&&s(f.contentDocument)?f.contentDocument:(m(f,"template")&&(f=f.content||f),r.merge([],f.childNodes))}},function(f,A){r.fn[f]=function(v,S){var E=r.map(this,A,v);return f.slice(-5)!=="Until"&&(S=v),S&&typeof S=="string"&&(E=r.filter(S,E)),this.length>1&&(y[f]||r.uniqueSort(E),i.test(f)&&E.reverse()),this.pushStack(E)}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},4207:(C,h,n)=>{var g,a;g=[n(4752),n(5373),n(5240),n(1505),n(6753)],a=function(r,s,d,l){"use strict";function o(c,m,i){return d(m)?r.grep(c,function(y,u){return!!m.call(y,u,y)!==i}):m.nodeType?r.grep(c,function(y){return y===m!==i}):typeof m!="string"?r.grep(c,function(y){return s.call(m,y)>-1!==i}):r.filter(m,c,i)}r.filter=function(c,m,i){var y=m[0];return i&&(c=":not("+c+")"),m.length===1&&y.nodeType===1?r.find.matchesSelector(y,c)?[y]:[]:r.find.matches(c,r.grep(m,function(u){return u.nodeType===1}))},r.fn.extend({find:function(c){var m,i,y=this.length,u=this;if(typeof c!="string")return this.pushStack(r(c).filter(function(){for(m=0;m<y;m++)if(r.contains(u[m],this))return!0}));for(i=this.pushStack([]),m=0;m<y;m++)r.find(c,u[m],i);return y>1?r.uniqueSort(i):i},filter:function(c){return this.pushStack(o(this,c||[],!1))},not:function(c){return this.pushStack(o(this,c||[],!0))},is:function(c){return!!o(this,typeof c=="string"&&l.test(c)?r(c):c||[],!1).length}})}.apply(h,g),a!==void 0&&(C.exports=a)},7132:(C,h,n)=>{var g,a;g=[n(4752)],a=function(r){"use strict";return function(s,d,l){for(var o=[],c=l!==void 0;(s=s[d])&&s.nodeType!==9;)if(s.nodeType===1){if(c&&r(s).is(l))break;o.push(s)}return o}}.apply(h,g),a!==void 0&&(C.exports=a)},1505:(C,h,n)=>{var g,a;g=[n(4752),n(6753)],a=function(r){"use strict";return r.expr.match.needsContext}.apply(h,g),a!==void 0&&(C.exports=a)},3627:(C,h,n)=>{var g;g=function(){"use strict";return function(a,r){for(var s=[];a;a=a.nextSibling)a.nodeType===1&&a!==r&&s.push(a);return s}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},1741:(C,h,n)=>{var g,a;g=[n(8885)],a=function(r){"use strict";return r.call(Object)}.apply(h,g),a!==void 0&&(C.exports=a)},3577:(C,h,n)=>{var g;g=function(){"use strict";return[]}.call(h,n,h,C),g!==void 0&&(C.exports=g)},5359:(C,h,n)=>{var g;g=function(){"use strict";return{}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},458:(C,h,n)=>{var g;g=function(){"use strict";return window.document}.call(h,n,h,C),g!==void 0&&(C.exports=g)},3916:(C,h,n)=>{var g,a;g=[n(458)],a=function(r){"use strict";return r.documentElement}.apply(h,g),a!==void 0&&(C.exports=a)},3294:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)}}.apply(h,g),a!==void 0&&(C.exports=a)},8885:(C,h,n)=>{var g,a;g=[n(7166)],a=function(r){"use strict";return r.toString}.apply(h,g),a!==void 0&&(C.exports=a)},8126:(C,h,n)=>{var g;g=function(){"use strict";return Object.getPrototypeOf}.call(h,n,h,C),g!==void 0&&(C.exports=g)},7166:(C,h,n)=>{var g,a;g=[n(5359)],a=function(r){"use strict";return r.hasOwnProperty}.apply(h,g),a!==void 0&&(C.exports=a)},5373:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.indexOf}.apply(h,g),a!==void 0&&(C.exports=a)},5240:(C,h,n)=>{var g;g=function(){"use strict";return function(r){return typeof r=="function"&&typeof r.nodeType!="number"&&typeof r.item!="function"}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},7110:(C,h,n)=>{var g;g=function(){"use strict";return function(r){return r!=null&&r===r.window}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},1873:(C,h,n)=>{var g;g=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(h,n,h,C),g!==void 0&&(C.exports=g)},2919:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.pop}.apply(h,g),a!==void 0&&(C.exports=a)},7950:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.push}.apply(h,g),a!==void 0&&(C.exports=a)},9175:(C,h,n)=>{var g;g=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(h,n,h,C),g!==void 0&&(C.exports=g)},2785:(C,h,n)=>{var g,a;g=[n(1873)],a=function(r){"use strict";return new RegExp("^(?:([+-])=|)("+r+")([a-z%]*)$","i")}.apply(h,g),a!==void 0&&(C.exports=a)},8774:(C,h,n)=>{var g;g=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(h,n,h,C),g!==void 0&&(C.exports=g)},6221:(C,h,n)=>{var g,a;g=[n(6302)],a=function(r){"use strict";return new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g")}.apply(h,g),a!==void 0&&(C.exports=a)},3843:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.slice}.apply(h,g),a!==void 0&&(C.exports=a)},8519:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.sort}.apply(h,g),a!==void 0&&(C.exports=a)},2879:(C,h,n)=>{var g,a;g=[n(3577)],a=function(r){"use strict";return r.splice}.apply(h,g),a!==void 0&&(C.exports=a)},8643:(C,h,n)=>{var g;g=function(){"use strict";return{}}.call(h,n,h,C),g!==void 0&&(C.exports=g)},2592:(C,h,n)=>{var g,a;g=[n(5359)],a=function(r){"use strict";return r.toString}.apply(h,g),a!==void 0&&(C.exports=a)},6302:(C,h,n)=>{var g;g=function(){"use strict";return"[\\x20\\t\\r\\n\\f]"}.call(h,n,h,C),g!==void 0&&(C.exports=g)},3678:(C,h,n)=>{var g,a;g=[n(4752),n(5240),n(7536),n(4225),n(2161)],a=function(r,s){"use strict";return r.fn.extend({wrapAll:function(d){var l;return this[0]&&(s(d)&&(d=d.call(this[0])),l=r(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var o=this;o.firstElementChild;)o=o.firstElementChild;return o}).append(this)),this},wrapInner:function(d){return s(d)?this.each(function(l){r(this).wrapInner(d.call(this,l))}):this.each(function(){var l=r(this),o=l.contents();o.length?o.wrapAll(d):l.append(d)})},wrap:function(d){var l=s(d);return this.each(function(o){r(this).wrapAll(l?d.call(this,o):d)})},unwrap:function(d){return this.parent(d).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r}.apply(h,g),a!==void 0&&(C.exports=a)},4862:function(C,h,n){C=n.nmd(C);var g;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var a,r="4.17.21",s=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",o="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,i="__lodash_placeholder__",y=1,u=2,f=4,A=1,v=2,S=1,E=2,b=4,T=8,D=16,P=32,F=64,M=128,_=256,R=512,j=30,k="...",z=800,H=16,L=1,B=2,U=3,V=1/0,G=9007199254740991,Q=17976931348623157e292,se=0/0,ue=4294967295,Z=ue-1,ve=ue>>>1,Ae=[["ary",M],["bind",S],["bindKey",E],["curry",T],["curryRight",D],["flip",R],["partial",P],["partialRight",F],["rearg",_]],Ce="[object Arguments]",Qe="[object Array]",yt="[object AsyncFunction]",Ct="[object Boolean]",Tt="[object Date]",Lt="[object DOMException]",Fe="[object Error]",bt="[object Function]",we="[object GeneratorFunction]",Ye="[object Map]",Zt="[object Number]",mr="[object Null]",rt="[object Object]",Me="[object Promise]",de="[object Proxy]",Pe="[object RegExp]",Te="[object Set]",X="[object String]",ye="[object Symbol]",fe="[object Undefined]",me="[object WeakMap]",je="[object WeakSet]",Be="[object ArrayBuffer]",Ue="[object DataView]",$e="[object Float32Array]",Je="[object Float64Array]",ot="[object Int8Array]",ut="[object Int16Array]",Bt="[object Int32Array]",jt="[object Uint8Array]",Et="[object Uint8ClampedArray]",cr="[object Uint16Array]",dr="[object Uint32Array]",Er=/\b__p \+= '';/g,Lr=/\b(__p \+=) '' \+/g,It=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ir=/&(?:amp|lt|gt|quot|#39);/g,ht=/[&<>"']/g,kr=RegExp(Ir.source),w=RegExp(ht.source),q=/<%-([\s\S]+?)%>/g,J=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,he=/^\w*$/,be=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,De=/[\\^$.*+?()[\]{}|]/g,Se=RegExp(De.source),ze=/^\s+/,ae=/\s/,re=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,le=/\{\n\/\* \[wrapped with (.+)\] \*/,oe=/,? & /,Ee=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Le=/[()=,{}\[\]\/\s]/,Ne=/\\(\\)?/g,st=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,vt=/\w*$/,Nt=/^[-+]0x[0-9a-f]+$/i,ft=/^0b[01]+$/i,it=/^\[object .+?Constructor\]$/,et=/^0o[0-7]+$/i,di=/^(?:0|[1-9]\d*)$/,Cn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,oa=/($^)/,qr=/['\n\r\u2028\u2029\\]/g,Ca="\\ud800-\\udfff",Js="\\u0300-\\u036f",Qs="\\ufe20-\\ufe2f",el="\\u20d0-\\u20ff",Tn=Js+Qs+el,En="\\u2700-\\u27bf",Rn="a-z\\xdf-\\xf6\\xf8-\\xff",tl="\\xac\\xb1\\xd7\\xf7",rl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",al="\\u2000-\\u206f",il=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dn="A-Z\\xc0-\\xd6\\xd8-\\xde",Pn="\\ufe0e\\ufe0f",Nn=tl+rl+al+il,ui="['\u2019]",nl="["+Ca+"]",_n="["+Nn+"]",Ta="["+Tn+"]",Mn="\\d+",ol="["+En+"]",jn="["+Rn+"]",xn="[^"+Ca+Nn+Mn+En+Rn+Dn+"]",fi="\\ud83c[\\udffb-\\udfff]",sl="(?:"+Ta+"|"+fi+")",Fn="[^"+Ca+"]",gi="(?:\\ud83c[\\udde6-\\uddff]){2}",mi="[\\ud800-\\udbff][\\udc00-\\udfff]",Vr="["+Dn+"]",Ln="\\u200d",In="(?:"+jn+"|"+xn+")",ll="(?:"+Vr+"|"+xn+")",kn="(?:"+ui+"(?:d|ll|m|re|s|t|ve))?",wn="(?:"+ui+"(?:D|LL|M|RE|S|T|VE))?",Un=sl+"?",Bn="["+Pn+"]?",pl="(?:"+Ln+"(?:"+[Fn,gi,mi].join("|")+")"+Bn+Un+")*",cl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",zn=Bn+Un+pl,ul="(?:"+[ol,gi,mi].join("|")+")"+zn,fl="(?:"+[Fn+Ta+"?",Ta,gi,mi,nl].join("|")+")",gl=RegExp(ui,"g"),ml=RegExp(Ta,"g"),yi=RegExp(fi+"(?="+fi+")|"+fl+zn,"g"),yl=RegExp([Vr+"?"+jn+"+"+kn+"(?="+[_n,Vr,"$"].join("|")+")",ll+"+"+wn+"(?="+[_n,Vr+In,"$"].join("|")+")",Vr+"?"+In+"+"+kn,Vr+"+"+wn,dl,cl,Mn,ul].join("|"),"g"),hl=RegExp("["+Ln+Ca+Tn+Pn+"]"),vl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Al=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bl=-1,dt={};dt[$e]=dt[Je]=dt[ot]=dt[ut]=dt[Bt]=dt[jt]=dt[Et]=dt[cr]=dt[dr]=!0,dt[Ce]=dt[Qe]=dt[Be]=dt[Ct]=dt[Ue]=dt[Tt]=dt[Fe]=dt[bt]=dt[Ye]=dt[Zt]=dt[rt]=dt[Pe]=dt[Te]=dt[X]=dt[me]=!1;var ct={};ct[Ce]=ct[Qe]=ct[Be]=ct[Ue]=ct[Ct]=ct[Tt]=ct[$e]=ct[Je]=ct[ot]=ct[ut]=ct[Bt]=ct[Ye]=ct[Zt]=ct[rt]=ct[Pe]=ct[Te]=ct[X]=ct[ye]=ct[jt]=ct[Et]=ct[cr]=ct[dr]=!0,ct[Fe]=ct[bt]=ct[me]=!1;var Sl={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ol={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Tl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},El=parseFloat,Rl=parseInt,Wn=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g,Dl=typeof self=="object"&&self&&self.Object===Object&&self,_t=Wn||Dl||Function("return this")(),Gn=h&&!h.nodeType&&h,sa=Gn&&!0&&C&&!C.nodeType&&C,$n=sa&&sa.exports===Gn,hi=$n&&Wn.process,Jt=function(){try{var K=sa&&sa.require&&sa.require("util").types;return K||hi&&hi.binding&&hi.binding("util")}catch(ne){}}(),Hn=Jt&&Jt.isArrayBuffer,qn=Jt&&Jt.isDate,Vn=Jt&&Jt.isMap,Kn=Jt&&Jt.isRegExp,Yn=Jt&&Jt.isSet,Xn=Jt&&Jt.isTypedArray;function Ht(K,ne,te){switch(te.length){case 0:return K.call(ne);case 1:return K.call(ne,te[0]);case 2:return K.call(ne,te[0],te[1]);case 3:return K.call(ne,te[0],te[1],te[2])}return K.apply(ne,te)}function Pl(K,ne,te,Re){for(var We=-1,at=K==null?0:K.length;++We<at;){var Rt=K[We];ne(Re,Rt,te(Rt),K)}return Re}function Qt(K,ne){for(var te=-1,Re=K==null?0:K.length;++te<Re&&ne(K[te],te,K)!==!1;);return K}function Nl(K,ne){for(var te=K==null?0:K.length;te--&&ne(K[te],te,K)!==!1;);return K}function Zn(K,ne){for(var te=-1,Re=K==null?0:K.length;++te<Re;)if(!ne(K[te],te,K))return!1;return!0}function Rr(K,ne){for(var te=-1,Re=K==null?0:K.length,We=0,at=[];++te<Re;){var Rt=K[te];ne(Rt,te,K)&&(at[We++]=Rt)}return at}function Ea(K,ne){var te=K==null?0:K.length;return!!te&&Kr(K,ne,0)>-1}function vi(K,ne,te){for(var Re=-1,We=K==null?0:K.length;++Re<We;)if(te(ne,K[Re]))return!0;return!1}function gt(K,ne){for(var te=-1,Re=K==null?0:K.length,We=Array(Re);++te<Re;)We[te]=ne(K[te],te,K);return We}function Dr(K,ne){for(var te=-1,Re=ne.length,We=K.length;++te<Re;)K[We+te]=ne[te];return K}function Ai(K,ne,te,Re){var We=-1,at=K==null?0:K.length;for(Re&&at&&(te=K[++We]);++We<at;)te=ne(te,K[We],We,K);return te}function _l(K,ne,te,Re){var We=K==null?0:K.length;for(Re&&We&&(te=K[--We]);We--;)te=ne(te,K[We],We,K);return te}function bi(K,ne){for(var te=-1,Re=K==null?0:K.length;++te<Re;)if(ne(K[te],te,K))return!0;return!1}var Ml=Si("length");function jl(K){return K.split("")}function xl(K){return K.match(Ee)||[]}function Jn(K,ne,te){var Re;return te(K,function(We,at,Rt){if(ne(We,at,Rt))return Re=at,!1}),Re}function Ra(K,ne,te,Re){for(var We=K.length,at=te+(Re?1:-1);Re?at--:++at<We;)if(ne(K[at],at,K))return at;return-1}function Kr(K,ne,te){return ne===ne?Hl(K,ne,te):Ra(K,Qn,te)}function Fl(K,ne,te,Re){for(var We=te-1,at=K.length;++We<at;)if(Re(K[We],ne))return We;return-1}function Qn(K){return K!==K}function eo(K,ne){var te=K==null?0:K.length;return te?Ci(K,ne)/te:se}function Si(K){return function(ne){return ne==null?a:ne[K]}}function Oi(K){return function(ne){return K==null?a:K[ne]}}function to(K,ne,te,Re,We){return We(K,function(at,Rt,pt){te=Re?(Re=!1,at):ne(te,at,Rt,pt)}),te}function Ll(K,ne){var te=K.length;for(K.sort(ne);te--;)K[te]=K[te].value;return K}function Ci(K,ne){for(var te,Re=-1,We=K.length;++Re<We;){var at=ne(K[Re]);at!==a&&(te=te===a?at:te+at)}return te}function Ti(K,ne){for(var te=-1,Re=Array(K);++te<K;)Re[te]=ne(te);return Re}function Il(K,ne){return gt(ne,function(te){return[te,K[te]]})}function ro(K){return K&&K.slice(0,oo(K)+1).replace(ze,"")}function qt(K){return function(ne){return K(ne)}}function Ei(K,ne){return gt(ne,function(te){return K[te]})}function la(K,ne){return K.has(ne)}function ao(K,ne){for(var te=-1,Re=K.length;++te<Re&&Kr(ne,K[te],0)>-1;);return te}function io(K,ne){for(var te=K.length;te--&&Kr(ne,K[te],0)>-1;);return te}function kl(K,ne){for(var te=K.length,Re=0;te--;)K[te]===ne&&++Re;return Re}var wl=Oi(Sl),Ul=Oi(Ol);function Bl(K){return"\\"+Tl[K]}function zl(K,ne){return K==null?a:K[ne]}function Yr(K){return hl.test(K)}function Wl(K){return vl.test(K)}function Gl(K){for(var ne,te=[];!(ne=K.next()).done;)te.push(ne.value);return te}function Ri(K){var ne=-1,te=Array(K.size);return K.forEach(function(Re,We){te[++ne]=[We,Re]}),te}function no(K,ne){return function(te){return K(ne(te))}}function Pr(K,ne){for(var te=-1,Re=K.length,We=0,at=[];++te<Re;){var Rt=K[te];(Rt===ne||Rt===i)&&(K[te]=i,at[We++]=te)}return at}function Da(K){var ne=-1,te=Array(K.size);return K.forEach(function(Re){te[++ne]=Re}),te}function $l(K){var ne=-1,te=Array(K.size);return K.forEach(function(Re){te[++ne]=[Re,Re]}),te}function Hl(K,ne,te){for(var Re=te-1,We=K.length;++Re<We;)if(K[Re]===ne)return Re;return-1}function ql(K,ne,te){for(var Re=te+1;Re--;)if(K[Re]===ne)return Re;return Re}function Xr(K){return Yr(K)?Kl(K):Ml(K)}function or(K){return Yr(K)?Yl(K):jl(K)}function oo(K){for(var ne=K.length;ne--&&ae.test(K.charAt(ne)););return ne}var Vl=Oi(Cl);function Kl(K){for(var ne=yi.lastIndex=0;yi.test(K);)++ne;return ne}function Yl(K){return K.match(yi)||[]}function Xl(K){return K.match(yl)||[]}var Zl=function K(ne){ne=ne==null?_t:Pa.defaults(_t.Object(),ne,Pa.pick(_t,Al));var te=ne.Array,Re=ne.Date,We=ne.Error,at=ne.Function,Rt=ne.Math,pt=ne.Object,Di=ne.RegExp,Jl=ne.String,er=ne.TypeError,Na=te.prototype,Ql=at.prototype,Zr=pt.prototype,_a=ne["__core-js_shared__"],Ma=Ql.toString,lt=Zr.hasOwnProperty,ep=0,so=function(){var e=/[^.]+$/.exec(_a&&_a.keys&&_a.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ja=Zr.toString,tp=Ma.call(pt),rp=_t._,ap=Di("^"+Ma.call(lt).replace(De,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xa=$n?ne.Buffer:a,Nr=ne.Symbol,Fa=ne.Uint8Array,lo=xa?xa.allocUnsafe:a,La=no(pt.getPrototypeOf,pt),po=pt.create,co=Zr.propertyIsEnumerable,Ia=Na.splice,uo=Nr?Nr.isConcatSpreadable:a,pa=Nr?Nr.iterator:a,wr=Nr?Nr.toStringTag:a,ka=function(){try{var e=Gr(pt,"defineProperty");return e({},"",{}),e}catch(t){}}(),ip=ne.clearTimeout!==_t.clearTimeout&&ne.clearTimeout,np=Re&&Re.now!==_t.Date.now&&Re.now,op=ne.setTimeout!==_t.setTimeout&&ne.setTimeout,wa=Rt.ceil,Ua=Rt.floor,Pi=pt.getOwnPropertySymbols,sp=xa?xa.isBuffer:a,fo=ne.isFinite,lp=Na.join,pp=no(pt.keys,pt),Dt=Rt.max,xt=Rt.min,cp=Re.now,dp=ne.parseInt,go=Rt.random,up=Na.reverse,Ni=Gr(ne,"DataView"),ca=Gr(ne,"Map"),_i=Gr(ne,"Promise"),Jr=Gr(ne,"Set"),da=Gr(ne,"WeakMap"),ua=Gr(pt,"create"),Ba=da&&new da,Qr={},fp=$r(Ni),gp=$r(ca),mp=$r(_i),yp=$r(Jr),hp=$r(da),za=Nr?Nr.prototype:a,fa=za?za.valueOf:a,mo=za?za.toString:a;function x(e){if(At(e)&&!Ge(e)&&!(e instanceof Xe)){if(e instanceof tr)return e;if(lt.call(e,"__wrapped__"))return ys(e)}return new tr(e)}var ea=function(){function e(){}return function(t){if(!mt(t))return{};if(po)return po(t);e.prototype=t;var p=new e;return e.prototype=a,p}}();function Wa(){}function tr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=a}x.templateSettings={escape:q,evaluate:J,interpolate:ee,variable:"",imports:{_:x}},x.prototype=Wa.prototype,x.prototype.constructor=x,tr.prototype=ea(Wa.prototype),tr.prototype.constructor=tr;function Xe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ue,this.__views__=[]}function vp(){var e=new Xe(this.__wrapped__);return e.__actions__=zt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=zt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=zt(this.__views__),e}function Ap(){if(this.__filtered__){var e=new Xe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function bp(){var e=this.__wrapped__.value(),t=this.__dir__,p=Ge(e),O=t<0,N=p?e.length:0,I=jc(0,N,this.__views__),W=I.start,$=I.end,Y=$-W,pe=O?$:W-1,ce=this.__iteratees__,ge=ce.length,Oe=0,_e=xt(Y,this.__takeCount__);if(!p||!O&&N==Y&&_e==Y)return Uo(e,this.__actions__);var Ie=[];e:for(;Y--&&Oe<_e;){pe+=t;for(var qe=-1,ke=e[pe];++qe<ge;){var Ke=ce[qe],Ze=Ke.iteratee,Yt=Ke.type,Ut=Ze(ke);if(Yt==B)ke=Ut;else if(!Ut){if(Yt==L)continue e;break e}}Ie[Oe++]=ke}return Ie}Xe.prototype=ea(Wa.prototype),Xe.prototype.constructor=Xe;function Ur(e){var t=-1,p=e==null?0:e.length;for(this.clear();++t<p;){var O=e[t];this.set(O[0],O[1])}}function Sp(){this.__data__=ua?ua(null):{},this.size=0}function Op(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Cp(e){var t=this.__data__;if(ua){var p=t[e];return p===c?a:p}return lt.call(t,e)?t[e]:a}function Tp(e){var t=this.__data__;return ua?t[e]!==a:lt.call(t,e)}function Ep(e,t){var p=this.__data__;return this.size+=this.has(e)?0:1,p[e]=ua&&t===a?c:t,this}Ur.prototype.clear=Sp,Ur.prototype.delete=Op,Ur.prototype.get=Cp,Ur.prototype.has=Tp,Ur.prototype.set=Ep;function yr(e){var t=-1,p=e==null?0:e.length;for(this.clear();++t<p;){var O=e[t];this.set(O[0],O[1])}}function Rp(){this.__data__=[],this.size=0}function Dp(e){var t=this.__data__,p=Ga(t,e);if(p<0)return!1;var O=t.length-1;return p==O?t.pop():Ia.call(t,p,1),--this.size,!0}function Pp(e){var t=this.__data__,p=Ga(t,e);return p<0?a:t[p][1]}function Np(e){return Ga(this.__data__,e)>-1}function _p(e,t){var p=this.__data__,O=Ga(p,e);return O<0?(++this.size,p.push([e,t])):p[O][1]=t,this}yr.prototype.clear=Rp,yr.prototype.delete=Dp,yr.prototype.get=Pp,yr.prototype.has=Np,yr.prototype.set=_p;function hr(e){var t=-1,p=e==null?0:e.length;for(this.clear();++t<p;){var O=e[t];this.set(O[0],O[1])}}function Mp(){this.size=0,this.__data__={hash:new Ur,map:new(ca||yr),string:new Ur}}function jp(e){var t=ti(this,e).delete(e);return this.size-=t?1:0,t}function xp(e){return ti(this,e).get(e)}function Fp(e){return ti(this,e).has(e)}function Lp(e,t){var p=ti(this,e),O=p.size;return p.set(e,t),this.size+=p.size==O?0:1,this}hr.prototype.clear=Mp,hr.prototype.delete=jp,hr.prototype.get=xp,hr.prototype.has=Fp,hr.prototype.set=Lp;function Br(e){var t=-1,p=e==null?0:e.length;for(this.__data__=new hr;++t<p;)this.add(e[t])}function Ip(e){return this.__data__.set(e,c),this}function kp(e){return this.__data__.has(e)}Br.prototype.add=Br.prototype.push=Ip,Br.prototype.has=kp;function sr(e){var t=this.__data__=new yr(e);this.size=t.size}function wp(){this.__data__=new yr,this.size=0}function Up(e){var t=this.__data__,p=t.delete(e);return this.size=t.size,p}function Bp(e){return this.__data__.get(e)}function zp(e){return this.__data__.has(e)}function Wp(e,t){var p=this.__data__;if(p instanceof yr){var O=p.__data__;if(!ca||O.length<s-1)return O.push([e,t]),this.size=++p.size,this;p=this.__data__=new hr(O)}return p.set(e,t),this.size=p.size,this}sr.prototype.clear=wp,sr.prototype.delete=Up,sr.prototype.get=Bp,sr.prototype.has=zp,sr.prototype.set=Wp;function yo(e,t){var p=Ge(e),O=!p&&Hr(e),N=!p&&!O&&Fr(e),I=!p&&!O&&!N&&ia(e),W=p||O||N||I,$=W?Ti(e.length,Jl):[],Y=$.length;for(var pe in e)(t||lt.call(e,pe))&&!(W&&(pe=="length"||N&&(pe=="offset"||pe=="parent")||I&&(pe=="buffer"||pe=="byteLength"||pe=="byteOffset")||Sr(pe,Y)))&&$.push(pe);return $}function ho(e){var t=e.length;return t?e[zi(0,t-1)]:a}function Gp(e,t){return ri(zt(e),zr(t,0,e.length))}function $p(e){return ri(zt(e))}function Mi(e,t,p){(p!==a&&!lr(e[t],p)||p===a&&!(t in e))&&vr(e,t,p)}function ga(e,t,p){var O=e[t];(!(lt.call(e,t)&&lr(O,p))||p===a&&!(t in e))&&vr(e,t,p)}function Ga(e,t){for(var p=e.length;p--;)if(lr(e[p][0],t))return p;return-1}function Hp(e,t,p,O){return _r(e,function(N,I,W){t(O,N,p(N),W)}),O}function vo(e,t){return e&&fr(t,Pt(t),e)}function qp(e,t){return e&&fr(t,Gt(t),e)}function vr(e,t,p){t=="__proto__"&&ka?ka(e,t,{configurable:!0,enumerable:!0,value:p,writable:!0}):e[t]=p}function ji(e,t){for(var p=-1,O=t.length,N=te(O),I=e==null;++p<O;)N[p]=I?a:fn(e,t[p]);return N}function zr(e,t,p){return e===e&&(p!==a&&(e=e<=p?e:p),t!==a&&(e=e>=t?e:t)),e}function rr(e,t,p,O,N,I){var W,$=t&y,Y=t&u,pe=t&f;if(p&&(W=N?p(e,O,N,I):p(e)),W!==a)return W;if(!mt(e))return e;var ce=Ge(e);if(ce){if(W=Fc(e),!$)return zt(e,W)}else{var ge=Ft(e),Oe=ge==bt||ge==we;if(Fr(e))return Wo(e,$);if(ge==rt||ge==Ce||Oe&&!N){if(W=Y||Oe?{}:ss(e),!$)return Y?Cc(e,qp(W,e)):Oc(e,vo(W,e))}else{if(!ct[ge])return N?e:{};W=Lc(e,ge,$)}}I||(I=new sr);var _e=I.get(e);if(_e)return _e;I.set(e,W),Is(e)?e.forEach(function(ke){W.add(rr(ke,t,p,ke,e,I))}):Fs(e)&&e.forEach(function(ke,Ke){W.set(Ke,rr(ke,t,p,Ke,e,I))});var Ie=pe?Y?Ji:Zi:Y?Gt:Pt,qe=ce?a:Ie(e);return Qt(qe||e,function(ke,Ke){qe&&(Ke=ke,ke=e[Ke]),ga(W,Ke,rr(ke,t,p,Ke,e,I))}),W}function Vp(e){var t=Pt(e);return function(p){return Ao(p,e,t)}}function Ao(e,t,p){var O=p.length;if(e==null)return!O;for(e=pt(e);O--;){var N=p[O],I=t[N],W=e[N];if(W===a&&!(N in e)||!I(W))return!1}return!0}function bo(e,t,p){if(typeof e!="function")throw new er(l);return Sa(function(){e.apply(a,p)},t)}function ma(e,t,p,O){var N=-1,I=Ea,W=!0,$=e.length,Y=[],pe=t.length;if(!$)return Y;p&&(t=gt(t,qt(p))),O?(I=vi,W=!1):t.length>=s&&(I=la,W=!1,t=new Br(t));e:for(;++N<$;){var ce=e[N],ge=p==null?ce:p(ce);if(ce=O||ce!==0?ce:0,W&&ge===ge){for(var Oe=pe;Oe--;)if(t[Oe]===ge)continue e;Y.push(ce)}else I(t,ge,O)||Y.push(ce)}return Y}var _r=Vo(ur),So=Vo(Fi,!0);function Kp(e,t){var p=!0;return _r(e,function(O,N,I){return p=!!t(O,N,I),p}),p}function $a(e,t,p){for(var O=-1,N=e.length;++O<N;){var I=e[O],W=t(I);if(W!=null&&($===a?W===W&&!Kt(W):p(W,$)))var $=W,Y=I}return Y}function Yp(e,t,p,O){var N=e.length;for(p=He(p),p<0&&(p=-p>N?0:N+p),O=O===a||O>N?N:He(O),O<0&&(O+=N),O=p>O?0:ws(O);p<O;)e[p++]=t;return e}function Oo(e,t){var p=[];return _r(e,function(O,N,I){t(O,N,I)&&p.push(O)}),p}function Mt(e,t,p,O,N){var I=-1,W=e.length;for(p||(p=kc),N||(N=[]);++I<W;){var $=e[I];t>0&&p($)?t>1?Mt($,t-1,p,O,N):Dr(N,$):O||(N[N.length]=$)}return N}var xi=Ko(),Co=Ko(!0);function ur(e,t){return e&&xi(e,t,Pt)}function Fi(e,t){return e&&Co(e,t,Pt)}function Ha(e,t){return Rr(t,function(p){return Or(e[p])})}function Wr(e,t){t=jr(t,e);for(var p=0,O=t.length;e!=null&&p<O;)e=e[gr(t[p++])];return p&&p==O?e:a}function To(e,t,p){var O=t(e);return Ge(e)?O:Dr(O,p(e))}function kt(e){return e==null?e===a?fe:mr:wr&&wr in pt(e)?Mc(e):$c(e)}function Li(e,t){return e>t}function Xp(e,t){return e!=null&&lt.call(e,t)}function Zp(e,t){return e!=null&&t in pt(e)}function Jp(e,t,p){return e>=xt(t,p)&&e<Dt(t,p)}function Ii(e,t,p){for(var O=p?vi:Ea,N=e[0].length,I=e.length,W=I,$=te(I),Y=1/0,pe=[];W--;){var ce=e[W];W&&t&&(ce=gt(ce,qt(t))),Y=xt(ce.length,Y),$[W]=!p&&(t||N>=120&&ce.length>=120)?new Br(W&&ce):a}ce=e[0];var ge=-1,Oe=$[0];e:for(;++ge<N&&pe.length<Y;){var _e=ce[ge],Ie=t?t(_e):_e;if(_e=p||_e!==0?_e:0,!(Oe?la(Oe,Ie):O(pe,Ie,p))){for(W=I;--W;){var qe=$[W];if(!(qe?la(qe,Ie):O(e[W],Ie,p)))continue e}Oe&&Oe.push(Ie),pe.push(_e)}}return pe}function Qp(e,t,p,O){return ur(e,function(N,I,W){t(O,p(N),I,W)}),O}function ya(e,t,p){t=jr(t,e),e=ds(e,t);var O=e==null?e:e[gr(ir(t))];return O==null?a:Ht(O,e,p)}function Eo(e){return At(e)&&kt(e)==Ce}function ec(e){return At(e)&&kt(e)==Be}function tc(e){return At(e)&&kt(e)==Tt}function ha(e,t,p,O,N){return e===t?!0:e==null||t==null||!At(e)&&!At(t)?e!==e&&t!==t:rc(e,t,p,O,ha,N)}function rc(e,t,p,O,N,I){var W=Ge(e),$=Ge(t),Y=W?Qe:Ft(e),pe=$?Qe:Ft(t);Y=Y==Ce?rt:Y,pe=pe==Ce?rt:pe;var ce=Y==rt,ge=pe==rt,Oe=Y==pe;if(Oe&&Fr(e)){if(!Fr(t))return!1;W=!0,ce=!1}if(Oe&&!ce)return I||(I=new sr),W||ia(e)?is(e,t,p,O,N,I):Nc(e,t,Y,p,O,N,I);if(!(p&A)){var _e=ce&&lt.call(e,"__wrapped__"),Ie=ge&&lt.call(t,"__wrapped__");if(_e||Ie){var qe=_e?e.value():e,ke=Ie?t.value():t;return I||(I=new sr),N(qe,ke,p,O,I)}}return Oe?(I||(I=new sr),_c(e,t,p,O,N,I)):!1}function ac(e){return At(e)&&Ft(e)==Ye}function ki(e,t,p,O){var N=p.length,I=N,W=!O;if(e==null)return!I;for(e=pt(e);N--;){var $=p[N];if(W&&$[2]?$[1]!==e[$[0]]:!($[0]in e))return!1}for(;++N<I;){$=p[N];var Y=$[0],pe=e[Y],ce=$[1];if(W&&$[2]){if(pe===a&&!(Y in e))return!1}else{var ge=new sr;if(O)var Oe=O(pe,ce,Y,e,t,ge);if(!(Oe===a?ha(ce,pe,A|v,O,ge):Oe))return!1}}return!0}function Ro(e){if(!mt(e)||Uc(e))return!1;var t=Or(e)?ap:it;return t.test($r(e))}function ic(e){return At(e)&&kt(e)==Pe}function nc(e){return At(e)&&Ft(e)==Te}function oc(e){return At(e)&&li(e.length)&&!!dt[kt(e)]}function Do(e){return typeof e=="function"?e:e==null?$t:typeof e=="object"?Ge(e)?_o(e[0],e[1]):No(e):Ys(e)}function wi(e){if(!ba(e))return pp(e);var t=[];for(var p in pt(e))lt.call(e,p)&&p!="constructor"&&t.push(p);return t}function sc(e){if(!mt(e))return Gc(e);var t=ba(e),p=[];for(var O in e)O=="constructor"&&(t||!lt.call(e,O))||p.push(O);return p}function Ui(e,t){return e<t}function Po(e,t){var p=-1,O=Wt(e)?te(e.length):[];return _r(e,function(N,I,W){O[++p]=t(N,I,W)}),O}function No(e){var t=en(e);return t.length==1&&t[0][2]?ps(t[0][0],t[0][1]):function(p){return p===e||ki(p,e,t)}}function _o(e,t){return rn(e)&&ls(t)?ps(gr(e),t):function(p){var O=fn(p,e);return O===a&&O===t?gn(p,e):ha(t,O,A|v)}}function qa(e,t,p,O,N){e!==t&&xi(t,function(I,W){if(N||(N=new sr),mt(I))lc(e,t,W,p,qa,O,N);else{var $=O?O(nn(e,W),I,W+"",e,t,N):a;$===a&&($=I),Mi(e,W,$)}},Gt)}function lc(e,t,p,O,N,I,W){var $=nn(e,p),Y=nn(t,p),pe=W.get(Y);if(pe){Mi(e,p,pe);return}var ce=I?I($,Y,p+"",e,t,W):a,ge=ce===a;if(ge){var Oe=Ge(Y),_e=!Oe&&Fr(Y),Ie=!Oe&&!_e&&ia(Y);ce=Y,Oe||_e||Ie?Ge($)?ce=$:St($)?ce=zt($):_e?(ge=!1,ce=Wo(Y,!0)):Ie?(ge=!1,ce=Go(Y,!0)):ce=[]:Oa(Y)||Hr(Y)?(ce=$,Hr($)?ce=Us($):(!mt($)||Or($))&&(ce=ss(Y))):ge=!1}ge&&(W.set(Y,ce),N(ce,Y,O,I,W),W.delete(Y)),Mi(e,p,ce)}function Mo(e,t){var p=e.length;if(p)return t+=t<0?p:0,Sr(t,p)?e[t]:a}function jo(e,t,p){t.length?t=gt(t,function(I){return Ge(I)?function(W){return Wr(W,I.length===1?I[0]:I)}:I}):t=[$t];var O=-1;t=gt(t,qt(xe()));var N=Po(e,function(I,W,$){var Y=gt(t,function(pe){return pe(I)});return{criteria:Y,index:++O,value:I}});return Ll(N,function(I,W){return Sc(I,W,p)})}function pc(e,t){return xo(e,t,function(p,O){return gn(e,O)})}function xo(e,t,p){for(var O=-1,N=t.length,I={};++O<N;){var W=t[O],$=Wr(e,W);p($,W)&&va(I,jr(W,e),$)}return I}function cc(e){return function(t){return Wr(t,e)}}function Bi(e,t,p,O){var N=O?Fl:Kr,I=-1,W=t.length,$=e;for(e===t&&(t=zt(t)),p&&($=gt(e,qt(p)));++I<W;)for(var Y=0,pe=t[I],ce=p?p(pe):pe;(Y=N($,ce,Y,O))>-1;)$!==e&&Ia.call($,Y,1),Ia.call(e,Y,1);return e}function Fo(e,t){for(var p=e?t.length:0,O=p-1;p--;){var N=t[p];if(p==O||N!==I){var I=N;Sr(N)?Ia.call(e,N,1):$i(e,N)}}return e}function zi(e,t){return e+Ua(go()*(t-e+1))}function dc(e,t,p,O){for(var N=-1,I=Dt(wa((t-e)/(p||1)),0),W=te(I);I--;)W[O?I:++N]=e,e+=p;return W}function Wi(e,t){var p="";if(!e||t<1||t>G)return p;do t%2&&(p+=e),t=Ua(t/2),t&&(e+=e);while(t);return p}function Ve(e,t){return on(cs(e,t,$t),e+"")}function uc(e){return ho(na(e))}function fc(e,t){var p=na(e);return ri(p,zr(t,0,p.length))}function va(e,t,p,O){if(!mt(e))return e;t=jr(t,e);for(var N=-1,I=t.length,W=I-1,$=e;$!=null&&++N<I;){var Y=gr(t[N]),pe=p;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return e;if(N!=W){var ce=$[Y];pe=O?O(ce,Y,$):a,pe===a&&(pe=mt(ce)?ce:Sr(t[N+1])?[]:{})}ga($,Y,pe),$=$[Y]}return e}var Lo=Ba?function(e,t){return Ba.set(e,t),e}:$t,gc=ka?function(e,t){return ka(e,"toString",{configurable:!0,enumerable:!1,value:yn(t),writable:!0})}:$t;function mc(e){return ri(na(e))}function ar(e,t,p){var O=-1,N=e.length;t<0&&(t=-t>N?0:N+t),p=p>N?N:p,p<0&&(p+=N),N=t>p?0:p-t>>>0,t>>>=0;for(var I=te(N);++O<N;)I[O]=e[O+t];return I}function yc(e,t){var p;return _r(e,function(O,N,I){return p=t(O,N,I),!p}),!!p}function Va(e,t,p){var O=0,N=e==null?O:e.length;if(typeof t=="number"&&t===t&&N<=ve){for(;O<N;){var I=O+N>>>1,W=e[I];W!==null&&!Kt(W)&&(p?W<=t:W<t)?O=I+1:N=I}return N}return Gi(e,t,$t,p)}function Gi(e,t,p,O){var N=0,I=e==null?0:e.length;if(I===0)return 0;t=p(t);for(var W=t!==t,$=t===null,Y=Kt(t),pe=t===a;N<I;){var ce=Ua((N+I)/2),ge=p(e[ce]),Oe=ge!==a,_e=ge===null,Ie=ge===ge,qe=Kt(ge);if(W)var ke=O||Ie;else pe?ke=Ie&&(O||Oe):$?ke=Ie&&Oe&&(O||!_e):Y?ke=Ie&&Oe&&!_e&&(O||!qe):_e||qe?ke=!1:ke=O?ge<=t:ge<t;ke?N=ce+1:I=ce}return xt(I,Z)}function Io(e,t){for(var p=-1,O=e.length,N=0,I=[];++p<O;){var W=e[p],$=t?t(W):W;if(!p||!lr($,Y)){var Y=$;I[N++]=W===0?0:W}}return I}function ko(e){return typeof e=="number"?e:Kt(e)?se:+e}function Vt(e){if(typeof e=="string")return e;if(Ge(e))return gt(e,Vt)+"";if(Kt(e))return mo?mo.call(e):"";var t=e+"";return t=="0"&&1/e==-V?"-0":t}function Mr(e,t,p){var O=-1,N=Ea,I=e.length,W=!0,$=[],Y=$;if(p)W=!1,N=vi;else if(I>=s){var pe=t?null:Dc(e);if(pe)return Da(pe);W=!1,N=la,Y=new Br}else Y=t?[]:$;e:for(;++O<I;){var ce=e[O],ge=t?t(ce):ce;if(ce=p||ce!==0?ce:0,W&&ge===ge){for(var Oe=Y.length;Oe--;)if(Y[Oe]===ge)continue e;t&&Y.push(ge),$.push(ce)}else N(Y,ge,p)||(Y!==$&&Y.push(ge),$.push(ce))}return $}function $i(e,t){return t=jr(t,e),e=ds(e,t),e==null||delete e[gr(ir(t))]}function wo(e,t,p,O){return va(e,t,p(Wr(e,t)),O)}function Ka(e,t,p,O){for(var N=e.length,I=O?N:-1;(O?I--:++I<N)&&t(e[I],I,e););return p?ar(e,O?0:I,O?I+1:N):ar(e,O?I+1:0,O?N:I)}function Uo(e,t){var p=e;return p instanceof Xe&&(p=p.value()),Ai(t,function(O,N){return N.func.apply(N.thisArg,Dr([O],N.args))},p)}function Hi(e,t,p){var O=e.length;if(O<2)return O?Mr(e[0]):[];for(var N=-1,I=te(O);++N<O;)for(var W=e[N],$=-1;++$<O;)$!=N&&(I[N]=ma(I[N]||W,e[$],t,p));return Mr(Mt(I,1),t,p)}function Bo(e,t,p){for(var O=-1,N=e.length,I=t.length,W={};++O<N;){var $=O<I?t[O]:a;p(W,e[O],$)}return W}function qi(e){return St(e)?e:[]}function Vi(e){return typeof e=="function"?e:$t}function jr(e,t){return Ge(e)?e:rn(e,t)?[e]:ms(nt(e))}var hc=Ve;function xr(e,t,p){var O=e.length;return p=p===a?O:p,!t&&p>=O?e:ar(e,t,p)}var zo=ip||function(e){return _t.clearTimeout(e)};function Wo(e,t){if(t)return e.slice();var p=e.length,O=lo?lo(p):new e.constructor(p);return e.copy(O),O}function Ki(e){var t=new e.constructor(e.byteLength);return new Fa(t).set(new Fa(e)),t}function vc(e,t){var p=t?Ki(e.buffer):e.buffer;return new e.constructor(p,e.byteOffset,e.byteLength)}function Ac(e){var t=new e.constructor(e.source,vt.exec(e));return t.lastIndex=e.lastIndex,t}function bc(e){return fa?pt(fa.call(e)):{}}function Go(e,t){var p=t?Ki(e.buffer):e.buffer;return new e.constructor(p,e.byteOffset,e.length)}function $o(e,t){if(e!==t){var p=e!==a,O=e===null,N=e===e,I=Kt(e),W=t!==a,$=t===null,Y=t===t,pe=Kt(t);if(!$&&!pe&&!I&&e>t||I&&W&&Y&&!$&&!pe||O&&W&&Y||!p&&Y||!N)return 1;if(!O&&!I&&!pe&&e<t||pe&&p&&N&&!O&&!I||$&&p&&N||!W&&N||!Y)return-1}return 0}function Sc(e,t,p){for(var O=-1,N=e.criteria,I=t.criteria,W=N.length,$=p.length;++O<W;){var Y=$o(N[O],I[O]);if(Y){if(O>=$)return Y;var pe=p[O];return Y*(pe=="desc"?-1:1)}}return e.index-t.index}function Ho(e,t,p,O){for(var N=-1,I=e.length,W=p.length,$=-1,Y=t.length,pe=Dt(I-W,0),ce=te(Y+pe),ge=!O;++$<Y;)ce[$]=t[$];for(;++N<W;)(ge||N<I)&&(ce[p[N]]=e[N]);for(;pe--;)ce[$++]=e[N++];return ce}function qo(e,t,p,O){for(var N=-1,I=e.length,W=-1,$=p.length,Y=-1,pe=t.length,ce=Dt(I-$,0),ge=te(ce+pe),Oe=!O;++N<ce;)ge[N]=e[N];for(var _e=N;++Y<pe;)ge[_e+Y]=t[Y];for(;++W<$;)(Oe||N<I)&&(ge[_e+p[W]]=e[N++]);return ge}function zt(e,t){var p=-1,O=e.length;for(t||(t=te(O));++p<O;)t[p]=e[p];return t}function fr(e,t,p,O){var N=!p;p||(p={});for(var I=-1,W=t.length;++I<W;){var $=t[I],Y=O?O(p[$],e[$],$,p,e):a;Y===a&&(Y=e[$]),N?vr(p,$,Y):ga(p,$,Y)}return p}function Oc(e,t){return fr(e,tn(e),t)}function Cc(e,t){return fr(e,ns(e),t)}function Ya(e,t){return function(p,O){var N=Ge(p)?Pl:Hp,I=t?t():{};return N(p,e,xe(O,2),I)}}function ta(e){return Ve(function(t,p){var O=-1,N=p.length,I=N>1?p[N-1]:a,W=N>2?p[2]:a;for(I=e.length>3&&typeof I=="function"?(N--,I):a,W&&wt(p[0],p[1],W)&&(I=N<3?a:I,N=1),t=pt(t);++O<N;){var $=p[O];$&&e(t,$,O,I)}return t})}function Vo(e,t){return function(p,O){if(p==null)return p;if(!Wt(p))return e(p,O);for(var N=p.length,I=t?N:-1,W=pt(p);(t?I--:++I<N)&&O(W[I],I,W)!==!1;);return p}}function Ko(e){return function(t,p,O){for(var N=-1,I=pt(t),W=O(t),$=W.length;$--;){var Y=W[e?$:++N];if(p(I[Y],Y,I)===!1)break}return t}}function Tc(e,t,p){var O=t&S,N=Aa(e);function I(){var W=this&&this!==_t&&this instanceof I?N:e;return W.apply(O?p:this,arguments)}return I}function Yo(e){return function(t){t=nt(t);var p=Yr(t)?or(t):a,O=p?p[0]:t.charAt(0),N=p?xr(p,1).join(""):t.slice(1);return O[e]()+N}}function ra(e){return function(t){return Ai(Vs(qs(t).replace(gl,"")),e,"")}}function Aa(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var p=ea(e.prototype),O=e.apply(p,t);return mt(O)?O:p}}function Ec(e,t,p){var O=Aa(e);function N(){for(var I=arguments.length,W=te(I),$=I,Y=aa(N);$--;)W[$]=arguments[$];var pe=I<3&&W[0]!==Y&&W[I-1]!==Y?[]:Pr(W,Y);if(I-=pe.length,I<p)return es(e,t,Xa,N.placeholder,a,W,pe,a,a,p-I);var ce=this&&this!==_t&&this instanceof N?O:e;return Ht(ce,this,W)}return N}function Xo(e){return function(t,p,O){var N=pt(t);if(!Wt(t)){var I=xe(p,3);t=Pt(t),p=function($){return I(N[$],$,N)}}var W=e(t,p,O);return W>-1?N[I?t[W]:W]:a}}function Zo(e){return br(function(t){var p=t.length,O=p,N=tr.prototype.thru;for(e&&t.reverse();O--;){var I=t[O];if(typeof I!="function")throw new er(l);if(N&&!W&&ei(I)=="wrapper")var W=new tr([],!0)}for(O=W?O:p;++O<p;){I=t[O];var $=ei(I),Y=$=="wrapper"?Qi(I):a;Y&&an(Y[0])&&Y[1]==(M|T|P|_)&&!Y[4].length&&Y[9]==1?W=W[ei(Y[0])].apply(W,Y[3]):W=I.length==1&&an(I)?W[$]():W.thru(I)}return function(){var pe=arguments,ce=pe[0];if(W&&pe.length==1&&Ge(ce))return W.plant(ce).value();for(var ge=0,Oe=p?t[ge].apply(this,pe):ce;++ge<p;)Oe=t[ge].call(this,Oe);return Oe}})}function Xa(e,t,p,O,N,I,W,$,Y,pe){var ce=t&M,ge=t&S,Oe=t&E,_e=t&(T|D),Ie=t&R,qe=Oe?a:Aa(e);function ke(){for(var Ke=arguments.length,Ze=te(Ke),Yt=Ke;Yt--;)Ze[Yt]=arguments[Yt];if(_e)var Ut=aa(ke),Xt=kl(Ze,Ut);if(O&&(Ze=Ho(Ze,O,N,_e)),I&&(Ze=qo(Ze,I,W,_e)),Ke-=Xt,_e&&Ke<pe){var Ot=Pr(Ze,Ut);return es(e,t,Xa,ke.placeholder,p,Ze,Ot,$,Y,pe-Ke)}var pr=ge?p:this,Tr=Oe?pr[e]:e;return Ke=Ze.length,$?Ze=Hc(Ze,$):Ie&&Ke>1&&Ze.reverse(),ce&&Y<Ke&&(Ze.length=Y),this&&this!==_t&&this instanceof ke&&(Tr=qe||Aa(Tr)),Tr.apply(pr,Ze)}return ke}function Jo(e,t){return function(p,O){return Qp(p,e,t(O),{})}}function Za(e,t){return function(p,O){var N;if(p===a&&O===a)return t;if(p!==a&&(N=p),O!==a){if(N===a)return O;typeof p=="string"||typeof O=="string"?(p=Vt(p),O=Vt(O)):(p=ko(p),O=ko(O)),N=e(p,O)}return N}}function Yi(e){return br(function(t){return t=gt(t,qt(xe())),Ve(function(p){var O=this;return e(t,function(N){return Ht(N,O,p)})})})}function Ja(e,t){t=t===a?" ":Vt(t);var p=t.length;if(p<2)return p?Wi(t,e):t;var O=Wi(t,wa(e/Xr(t)));return Yr(t)?xr(or(O),0,e).join(""):O.slice(0,e)}function Rc(e,t,p,O){var N=t&S,I=Aa(e);function W(){for(var $=-1,Y=arguments.length,pe=-1,ce=O.length,ge=te(ce+Y),Oe=this&&this!==_t&&this instanceof W?I:e;++pe<ce;)ge[pe]=O[pe];for(;Y--;)ge[pe++]=arguments[++$];return Ht(Oe,N?p:this,ge)}return W}function Qo(e){return function(t,p,O){return O&&typeof O!="number"&&wt(t,p,O)&&(p=O=a),t=Cr(t),p===a?(p=t,t=0):p=Cr(p),O=O===a?t<p?1:-1:Cr(O),dc(t,p,O,e)}}function Qa(e){return function(t,p){return typeof t=="string"&&typeof p=="string"||(t=nr(t),p=nr(p)),e(t,p)}}function es(e,t,p,O,N,I,W,$,Y,pe){var ce=t&T,ge=ce?W:a,Oe=ce?a:W,_e=ce?I:a,Ie=ce?a:I;t|=ce?P:F,t&=~(ce?F:P),t&b||(t&=~(S|E));var qe=[e,t,N,_e,ge,Ie,Oe,$,Y,pe],ke=p.apply(a,qe);return an(e)&&us(ke,qe),ke.placeholder=O,fs(ke,e,t)}function Xi(e){var t=Rt[e];return function(p,O){if(p=nr(p),O=O==null?0:xt(He(O),292),O&&fo(p)){var N=(nt(p)+"e").split("e"),I=t(N[0]+"e"+(+N[1]+O));return N=(nt(I)+"e").split("e"),+(N[0]+"e"+(+N[1]-O))}return t(p)}}var Dc=Jr&&1/Da(new Jr([,-0]))[1]==V?function(e){return new Jr(e)}:An;function ts(e){return function(t){var p=Ft(t);return p==Ye?Ri(t):p==Te?$l(t):Il(t,e(t))}}function Ar(e,t,p,O,N,I,W,$){var Y=t&E;if(!Y&&typeof e!="function")throw new er(l);var pe=O?O.length:0;if(pe||(t&=~(P|F),O=N=a),W=W===a?W:Dt(He(W),0),$=$===a?$:He($),pe-=N?N.length:0,t&F){var ce=O,ge=N;O=N=a}var Oe=Y?a:Qi(e),_e=[e,t,p,O,N,ce,ge,I,W,$];if(Oe&&Wc(_e,Oe),e=_e[0],t=_e[1],p=_e[2],O=_e[3],N=_e[4],$=_e[9]=_e[9]===a?Y?0:e.length:Dt(_e[9]-pe,0),!$&&t&(T|D)&&(t&=~(T|D)),!t||t==S)var Ie=Tc(e,t,p);else t==T||t==D?Ie=Ec(e,t,$):(t==P||t==(S|P))&&!N.length?Ie=Rc(e,t,p,O):Ie=Xa.apply(a,_e);var qe=Oe?Lo:us;return fs(qe(Ie,_e),e,t)}function rs(e,t,p,O){return e===a||lr(e,Zr[p])&&!lt.call(O,p)?t:e}function as(e,t,p,O,N,I){return mt(e)&&mt(t)&&(I.set(t,e),qa(e,t,a,as,I),I.delete(t)),e}function Pc(e){return Oa(e)?a:e}function is(e,t,p,O,N,I){var W=p&A,$=e.length,Y=t.length;if($!=Y&&!(W&&Y>$))return!1;var pe=I.get(e),ce=I.get(t);if(pe&&ce)return pe==t&&ce==e;var ge=-1,Oe=!0,_e=p&v?new Br:a;for(I.set(e,t),I.set(t,e);++ge<$;){var Ie=e[ge],qe=t[ge];if(O)var ke=W?O(qe,Ie,ge,t,e,I):O(Ie,qe,ge,e,t,I);if(ke!==a){if(ke)continue;Oe=!1;break}if(_e){if(!bi(t,function(Ke,Ze){if(!la(_e,Ze)&&(Ie===Ke||N(Ie,Ke,p,O,I)))return _e.push(Ze)})){Oe=!1;break}}else if(!(Ie===qe||N(Ie,qe,p,O,I))){Oe=!1;break}}return I.delete(e),I.delete(t),Oe}function Nc(e,t,p,O,N,I,W){switch(p){case Ue:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Be:return!(e.byteLength!=t.byteLength||!I(new Fa(e),new Fa(t)));case Ct:case Tt:case Zt:return lr(+e,+t);case Fe:return e.name==t.name&&e.message==t.message;case Pe:case X:return e==t+"";case Ye:var $=Ri;case Te:var Y=O&A;if($||($=Da),e.size!=t.size&&!Y)return!1;var pe=W.get(e);if(pe)return pe==t;O|=v,W.set(e,t);var ce=is($(e),$(t),O,N,I,W);return W.delete(e),ce;case ye:if(fa)return fa.call(e)==fa.call(t)}return!1}function _c(e,t,p,O,N,I){var W=p&A,$=Zi(e),Y=$.length,pe=Zi(t),ce=pe.length;if(Y!=ce&&!W)return!1;for(var ge=Y;ge--;){var Oe=$[ge];if(!(W?Oe in t:lt.call(t,Oe)))return!1}var _e=I.get(e),Ie=I.get(t);if(_e&&Ie)return _e==t&&Ie==e;var qe=!0;I.set(e,t),I.set(t,e);for(var ke=W;++ge<Y;){Oe=$[ge];var Ke=e[Oe],Ze=t[Oe];if(O)var Yt=W?O(Ze,Ke,Oe,t,e,I):O(Ke,Ze,Oe,e,t,I);if(!(Yt===a?Ke===Ze||N(Ke,Ze,p,O,I):Yt)){qe=!1;break}ke||(ke=Oe=="constructor")}if(qe&&!ke){var Ut=e.constructor,Xt=t.constructor;Ut!=Xt&&"constructor"in e&&"constructor"in t&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof Xt=="function"&&Xt instanceof Xt)&&(qe=!1)}return I.delete(e),I.delete(t),qe}function br(e){return on(cs(e,a,As),e+"")}function Zi(e){return To(e,Pt,tn)}function Ji(e){return To(e,Gt,ns)}var Qi=Ba?function(e){return Ba.get(e)}:An;function ei(e){for(var t=e.name+"",p=Qr[t],O=lt.call(Qr,t)?p.length:0;O--;){var N=p[O],I=N.func;if(I==null||I==e)return N.name}return t}function aa(e){var t=lt.call(x,"placeholder")?x:e;return t.placeholder}function xe(){var e=x.iteratee||hn;return e=e===hn?Do:e,arguments.length?e(arguments[0],arguments[1]):e}function ti(e,t){var p=e.__data__;return wc(t)?p[typeof t=="string"?"string":"hash"]:p.map}function en(e){for(var t=Pt(e),p=t.length;p--;){var O=t[p],N=e[O];t[p]=[O,N,ls(N)]}return t}function Gr(e,t){var p=zl(e,t);return Ro(p)?p:a}function Mc(e){var t=lt.call(e,wr),p=e[wr];try{e[wr]=a;var O=!0}catch(I){}var N=ja.call(e);return O&&(t?e[wr]=p:delete e[wr]),N}var tn=Pi?function(e){return e==null?[]:(e=pt(e),Rr(Pi(e),function(t){return co.call(e,t)}))}:bn,ns=Pi?function(e){for(var t=[];e;)Dr(t,tn(e)),e=La(e);return t}:bn,Ft=kt;(Ni&&Ft(new Ni(new ArrayBuffer(1)))!=Ue||ca&&Ft(new ca)!=Ye||_i&&Ft(_i.resolve())!=Me||Jr&&Ft(new Jr)!=Te||da&&Ft(new da)!=me)&&(Ft=function(e){var t=kt(e),p=t==rt?e.constructor:a,O=p?$r(p):"";if(O)switch(O){case fp:return Ue;case gp:return Ye;case mp:return Me;case yp:return Te;case hp:return me}return t});function jc(e,t,p){for(var O=-1,N=p.length;++O<N;){var I=p[O],W=I.size;switch(I.type){case"drop":e+=W;break;case"dropRight":t-=W;break;case"take":t=xt(t,e+W);break;case"takeRight":e=Dt(e,t-W);break}}return{start:e,end:t}}function xc(e){var t=e.match(le);return t?t[1].split(oe):[]}function os(e,t,p){t=jr(t,e);for(var O=-1,N=t.length,I=!1;++O<N;){var W=gr(t[O]);if(!(I=e!=null&&p(e,W)))break;e=e[W]}return I||++O!=N?I:(N=e==null?0:e.length,!!N&&li(N)&&Sr(W,N)&&(Ge(e)||Hr(e)))}function Fc(e){var t=e.length,p=new e.constructor(t);return t&&typeof e[0]=="string"&&lt.call(e,"index")&&(p.index=e.index,p.input=e.input),p}function ss(e){return typeof e.constructor=="function"&&!ba(e)?ea(La(e)):{}}function Lc(e,t,p){var O=e.constructor;switch(t){case Be:return Ki(e);case Ct:case Tt:return new O(+e);case Ue:return vc(e,p);case $e:case Je:case ot:case ut:case Bt:case jt:case Et:case cr:case dr:return Go(e,p);case Ye:return new O;case Zt:case X:return new O(e);case Pe:return Ac(e);case Te:return new O;case ye:return bc(e)}}function Ic(e,t){var p=t.length;if(!p)return e;var O=p-1;return t[O]=(p>1?"& ":"")+t[O],t=t.join(p>2?", ":" "),e.replace(re,`{
/* [wrapped with `+t+`] */
`)}function kc(e){return Ge(e)||Hr(e)||!!(uo&&e&&e[uo])}function Sr(e,t){var p=typeof e;return t=t==null?G:t,!!t&&(p=="number"||p!="symbol"&&di.test(e))&&e>-1&&e%1==0&&e<t}function wt(e,t,p){if(!mt(p))return!1;var O=typeof t;return(O=="number"?Wt(p)&&Sr(t,p.length):O=="string"&&t in p)?lr(p[t],e):!1}function rn(e,t){if(Ge(e))return!1;var p=typeof e;return p=="number"||p=="symbol"||p=="boolean"||e==null||Kt(e)?!0:he.test(e)||!ie.test(e)||t!=null&&e in pt(t)}function wc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function an(e){var t=ei(e),p=x[t];if(typeof p!="function"||!(t in Xe.prototype))return!1;if(e===p)return!0;var O=Qi(p);return!!O&&e===O[0]}function Uc(e){return!!so&&so in e}var Bc=_a?Or:Sn;function ba(e){var t=e&&e.constructor,p=typeof t=="function"&&t.prototype||Zr;return e===p}function ls(e){return e===e&&!mt(e)}function ps(e,t){return function(p){return p==null?!1:p[e]===t&&(t!==a||e in pt(p))}}function zc(e){var t=oi(e,function(O){return p.size===m&&p.clear(),O}),p=t.cache;return t}function Wc(e,t){var p=e[1],O=t[1],N=p|O,I=N<(S|E|M),W=O==M&&p==T||O==M&&p==_&&e[7].length<=t[8]||O==(M|_)&&t[7].length<=t[8]&&p==T;if(!(I||W))return e;O&S&&(e[2]=t[2],N|=p&S?0:b);var $=t[3];if($){var Y=e[3];e[3]=Y?Ho(Y,$,t[4]):$,e[4]=Y?Pr(e[3],i):t[4]}return $=t[5],$&&(Y=e[5],e[5]=Y?qo(Y,$,t[6]):$,e[6]=Y?Pr(e[5],i):t[6]),$=t[7],$&&(e[7]=$),O&M&&(e[8]=e[8]==null?t[8]:xt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=N,e}function Gc(e){var t=[];if(e!=null)for(var p in pt(e))t.push(p);return t}function $c(e){return ja.call(e)}function cs(e,t,p){return t=Dt(t===a?e.length-1:t,0),function(){for(var O=arguments,N=-1,I=Dt(O.length-t,0),W=te(I);++N<I;)W[N]=O[t+N];N=-1;for(var $=te(t+1);++N<t;)$[N]=O[N];return $[t]=p(W),Ht(e,this,$)}}function ds(e,t){return t.length<2?e:Wr(e,ar(t,0,-1))}function Hc(e,t){for(var p=e.length,O=xt(t.length,p),N=zt(e);O--;){var I=t[O];e[O]=Sr(I,p)?N[I]:a}return e}function nn(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var us=gs(Lo),Sa=op||function(e,t){return _t.setTimeout(e,t)},on=gs(gc);function fs(e,t,p){var O=t+"";return on(e,Ic(O,qc(xc(O),p)))}function gs(e){var t=0,p=0;return function(){var O=cp(),N=H-(O-p);if(p=O,N>0){if(++t>=z)return arguments[0]}else t=0;return e.apply(a,arguments)}}function ri(e,t){var p=-1,O=e.length,N=O-1;for(t=t===a?O:t;++p<t;){var I=zi(p,N),W=e[I];e[I]=e[p],e[p]=W}return e.length=t,e}var ms=zc(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(be,function(p,O,N,I){t.push(N?I.replace(Ne,"$1"):O||p)}),t});function gr(e){if(typeof e=="string"||Kt(e))return e;var t=e+"";return t=="0"&&1/e==-V?"-0":t}function $r(e){if(e!=null){try{return Ma.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function qc(e,t){return Qt(Ae,function(p){var O="_."+p[0];t&p[1]&&!Ea(e,O)&&e.push(O)}),e.sort()}function ys(e){if(e instanceof Xe)return e.clone();var t=new tr(e.__wrapped__,e.__chain__);return t.__actions__=zt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Vc(e,t,p){(p?wt(e,t,p):t===a)?t=1:t=Dt(He(t),0);var O=e==null?0:e.length;if(!O||t<1)return[];for(var N=0,I=0,W=te(wa(O/t));N<O;)W[I++]=ar(e,N,N+=t);return W}function Kc(e){for(var t=-1,p=e==null?0:e.length,O=0,N=[];++t<p;){var I=e[t];I&&(N[O++]=I)}return N}function Yc(){var e=arguments.length;if(!e)return[];for(var t=te(e-1),p=arguments[0],O=e;O--;)t[O-1]=arguments[O];return Dr(Ge(p)?zt(p):[p],Mt(t,1))}var Xc=Ve(function(e,t){return St(e)?ma(e,Mt(t,1,St,!0)):[]}),Zc=Ve(function(e,t){var p=ir(t);return St(p)&&(p=a),St(e)?ma(e,Mt(t,1,St,!0),xe(p,2)):[]}),Jc=Ve(function(e,t){var p=ir(t);return St(p)&&(p=a),St(e)?ma(e,Mt(t,1,St,!0),a,p):[]});function Qc(e,t,p){var O=e==null?0:e.length;return O?(t=p||t===a?1:He(t),ar(e,t<0?0:t,O)):[]}function ed(e,t,p){var O=e==null?0:e.length;return O?(t=p||t===a?1:He(t),t=O-t,ar(e,0,t<0?0:t)):[]}function td(e,t){return e&&e.length?Ka(e,xe(t,3),!0,!0):[]}function rd(e,t){return e&&e.length?Ka(e,xe(t,3),!0):[]}function ad(e,t,p,O){var N=e==null?0:e.length;return N?(p&&typeof p!="number"&&wt(e,t,p)&&(p=0,O=N),Yp(e,t,p,O)):[]}function hs(e,t,p){var O=e==null?0:e.length;if(!O)return-1;var N=p==null?0:He(p);return N<0&&(N=Dt(O+N,0)),Ra(e,xe(t,3),N)}function vs(e,t,p){var O=e==null?0:e.length;if(!O)return-1;var N=O-1;return p!==a&&(N=He(p),N=p<0?Dt(O+N,0):xt(N,O-1)),Ra(e,xe(t,3),N,!0)}function As(e){var t=e==null?0:e.length;return t?Mt(e,1):[]}function id(e){var t=e==null?0:e.length;return t?Mt(e,V):[]}function nd(e,t){var p=e==null?0:e.length;return p?(t=t===a?1:He(t),Mt(e,t)):[]}function od(e){for(var t=-1,p=e==null?0:e.length,O={};++t<p;){var N=e[t];O[N[0]]=N[1]}return O}function bs(e){return e&&e.length?e[0]:a}function sd(e,t,p){var O=e==null?0:e.length;if(!O)return-1;var N=p==null?0:He(p);return N<0&&(N=Dt(O+N,0)),Kr(e,t,N)}function ld(e){var t=e==null?0:e.length;return t?ar(e,0,-1):[]}var pd=Ve(function(e){var t=gt(e,qi);return t.length&&t[0]===e[0]?Ii(t):[]}),cd=Ve(function(e){var t=ir(e),p=gt(e,qi);return t===ir(p)?t=a:p.pop(),p.length&&p[0]===e[0]?Ii(p,xe(t,2)):[]}),dd=Ve(function(e){var t=ir(e),p=gt(e,qi);return t=typeof t=="function"?t:a,t&&p.pop(),p.length&&p[0]===e[0]?Ii(p,a,t):[]});function ud(e,t){return e==null?"":lp.call(e,t)}function ir(e){var t=e==null?0:e.length;return t?e[t-1]:a}function fd(e,t,p){var O=e==null?0:e.length;if(!O)return-1;var N=O;return p!==a&&(N=He(p),N=N<0?Dt(O+N,0):xt(N,O-1)),t===t?ql(e,t,N):Ra(e,Qn,N,!0)}function gd(e,t){return e&&e.length?Mo(e,He(t)):a}var md=Ve(Ss);function Ss(e,t){return e&&e.length&&t&&t.length?Bi(e,t):e}function yd(e,t,p){return e&&e.length&&t&&t.length?Bi(e,t,xe(p,2)):e}function hd(e,t,p){return e&&e.length&&t&&t.length?Bi(e,t,a,p):e}var vd=br(function(e,t){var p=e==null?0:e.length,O=ji(e,t);return Fo(e,gt(t,function(N){return Sr(N,p)?+N:N}).sort($o)),O});function Ad(e,t){var p=[];if(!(e&&e.length))return p;var O=-1,N=[],I=e.length;for(t=xe(t,3);++O<I;){var W=e[O];t(W,O,e)&&(p.push(W),N.push(O))}return Fo(e,N),p}function sn(e){return e==null?e:up.call(e)}function bd(e,t,p){var O=e==null?0:e.length;return O?(p&&typeof p!="number"&&wt(e,t,p)?(t=0,p=O):(t=t==null?0:He(t),p=p===a?O:He(p)),ar(e,t,p)):[]}function Sd(e,t){return Va(e,t)}function Od(e,t,p){return Gi(e,t,xe(p,2))}function Cd(e,t){var p=e==null?0:e.length;if(p){var O=Va(e,t);if(O<p&&lr(e[O],t))return O}return-1}function Td(e,t){return Va(e,t,!0)}function Ed(e,t,p){return Gi(e,t,xe(p,2),!0)}function Rd(e,t){var p=e==null?0:e.length;if(p){var O=Va(e,t,!0)-1;if(lr(e[O],t))return O}return-1}function Dd(e){return e&&e.length?Io(e):[]}function Pd(e,t){return e&&e.length?Io(e,xe(t,2)):[]}function Nd(e){var t=e==null?0:e.length;return t?ar(e,1,t):[]}function _d(e,t,p){return e&&e.length?(t=p||t===a?1:He(t),ar(e,0,t<0?0:t)):[]}function Md(e,t,p){var O=e==null?0:e.length;return O?(t=p||t===a?1:He(t),t=O-t,ar(e,t<0?0:t,O)):[]}function jd(e,t){return e&&e.length?Ka(e,xe(t,3),!1,!0):[]}function xd(e,t){return e&&e.length?Ka(e,xe(t,3)):[]}var Fd=Ve(function(e){return Mr(Mt(e,1,St,!0))}),Ld=Ve(function(e){var t=ir(e);return St(t)&&(t=a),Mr(Mt(e,1,St,!0),xe(t,2))}),Id=Ve(function(e){var t=ir(e);return t=typeof t=="function"?t:a,Mr(Mt(e,1,St,!0),a,t)});function kd(e){return e&&e.length?Mr(e):[]}function wd(e,t){return e&&e.length?Mr(e,xe(t,2)):[]}function Ud(e,t){return t=typeof t=="function"?t:a,e&&e.length?Mr(e,a,t):[]}function ln(e){if(!(e&&e.length))return[];var t=0;return e=Rr(e,function(p){if(St(p))return t=Dt(p.length,t),!0}),Ti(t,function(p){return gt(e,Si(p))})}function Os(e,t){if(!(e&&e.length))return[];var p=ln(e);return t==null?p:gt(p,function(O){return Ht(t,a,O)})}var Bd=Ve(function(e,t){return St(e)?ma(e,t):[]}),zd=Ve(function(e){return Hi(Rr(e,St))}),Wd=Ve(function(e){var t=ir(e);return St(t)&&(t=a),Hi(Rr(e,St),xe(t,2))}),Gd=Ve(function(e){var t=ir(e);return t=typeof t=="function"?t:a,Hi(Rr(e,St),a,t)}),$d=Ve(ln);function Hd(e,t){return Bo(e||[],t||[],ga)}function qd(e,t){return Bo(e||[],t||[],va)}var Vd=Ve(function(e){var t=e.length,p=t>1?e[t-1]:a;return p=typeof p=="function"?(e.pop(),p):a,Os(e,p)});function Cs(e){var t=x(e);return t.__chain__=!0,t}function Kd(e,t){return t(e),e}function ai(e,t){return t(e)}var Yd=br(function(e){var t=e.length,p=t?e[0]:0,O=this.__wrapped__,N=function(I){return ji(I,e)};return t>1||this.__actions__.length||!(O instanceof Xe)||!Sr(p)?this.thru(N):(O=O.slice(p,+p+(t?1:0)),O.__actions__.push({func:ai,args:[N],thisArg:a}),new tr(O,this.__chain__).thru(function(I){return t&&!I.length&&I.push(a),I}))});function Xd(){return Cs(this)}function Zd(){return new tr(this.value(),this.__chain__)}function Jd(){this.__values__===a&&(this.__values__=ks(this.value()));var e=this.__index__>=this.__values__.length,t=e?a:this.__values__[this.__index__++];return{done:e,value:t}}function Qd(){return this}function eu(e){for(var t,p=this;p instanceof Wa;){var O=ys(p);O.__index__=0,O.__values__=a,t?N.__wrapped__=O:t=O;var N=O;p=p.__wrapped__}return N.__wrapped__=e,t}function tu(){var e=this.__wrapped__;if(e instanceof Xe){var t=e;return this.__actions__.length&&(t=new Xe(this)),t=t.reverse(),t.__actions__.push({func:ai,args:[sn],thisArg:a}),new tr(t,this.__chain__)}return this.thru(sn)}function ru(){return Uo(this.__wrapped__,this.__actions__)}var au=Ya(function(e,t,p){lt.call(e,p)?++e[p]:vr(e,p,1)});function iu(e,t,p){var O=Ge(e)?Zn:Kp;return p&&wt(e,t,p)&&(t=a),O(e,xe(t,3))}function nu(e,t){var p=Ge(e)?Rr:Oo;return p(e,xe(t,3))}var ou=Xo(hs),su=Xo(vs);function lu(e,t){return Mt(ii(e,t),1)}function pu(e,t){return Mt(ii(e,t),V)}function cu(e,t,p){return p=p===a?1:He(p),Mt(ii(e,t),p)}function Ts(e,t){var p=Ge(e)?Qt:_r;return p(e,xe(t,3))}function Es(e,t){var p=Ge(e)?Nl:So;return p(e,xe(t,3))}var du=Ya(function(e,t,p){lt.call(e,p)?e[p].push(t):vr(e,p,[t])});function uu(e,t,p,O){e=Wt(e)?e:na(e),p=p&&!O?He(p):0;var N=e.length;return p<0&&(p=Dt(N+p,0)),pi(e)?p<=N&&e.indexOf(t,p)>-1:!!N&&Kr(e,t,p)>-1}var fu=Ve(function(e,t,p){var O=-1,N=typeof t=="function",I=Wt(e)?te(e.length):[];return _r(e,function(W){I[++O]=N?Ht(t,W,p):ya(W,t,p)}),I}),gu=Ya(function(e,t,p){vr(e,p,t)});function ii(e,t){var p=Ge(e)?gt:Po;return p(e,xe(t,3))}function mu(e,t,p,O){return e==null?[]:(Ge(t)||(t=t==null?[]:[t]),p=O?a:p,Ge(p)||(p=p==null?[]:[p]),jo(e,t,p))}var yu=Ya(function(e,t,p){e[p?0:1].push(t)},function(){return[[],[]]});function hu(e,t,p){var O=Ge(e)?Ai:to,N=arguments.length<3;return O(e,xe(t,4),p,N,_r)}function vu(e,t,p){var O=Ge(e)?_l:to,N=arguments.length<3;return O(e,xe(t,4),p,N,So)}function Au(e,t){var p=Ge(e)?Rr:Oo;return p(e,si(xe(t,3)))}function bu(e){var t=Ge(e)?ho:uc;return t(e)}function Su(e,t,p){(p?wt(e,t,p):t===a)?t=1:t=He(t);var O=Ge(e)?Gp:fc;return O(e,t)}function Ou(e){var t=Ge(e)?$p:mc;return t(e)}function Cu(e){if(e==null)return 0;if(Wt(e))return pi(e)?Xr(e):e.length;var t=Ft(e);return t==Ye||t==Te?e.size:wi(e).length}function Tu(e,t,p){var O=Ge(e)?bi:yc;return p&&wt(e,t,p)&&(t=a),O(e,xe(t,3))}var Eu=Ve(function(e,t){if(e==null)return[];var p=t.length;return p>1&&wt(e,t[0],t[1])?t=[]:p>2&&wt(t[0],t[1],t[2])&&(t=[t[0]]),jo(e,Mt(t,1),[])}),ni=np||function(){return _t.Date.now()};function Ru(e,t){if(typeof t!="function")throw new er(l);return e=He(e),function(){if(--e<1)return t.apply(this,arguments)}}function Rs(e,t,p){return t=p?a:t,t=e&&t==null?e.length:t,Ar(e,M,a,a,a,a,t)}function Ds(e,t){var p;if(typeof t!="function")throw new er(l);return e=He(e),function(){return--e>0&&(p=t.apply(this,arguments)),e<=1&&(t=a),p}}var pn=Ve(function(e,t,p){var O=S;if(p.length){var N=Pr(p,aa(pn));O|=P}return Ar(e,O,t,p,N)}),Ps=Ve(function(e,t,p){var O=S|E;if(p.length){var N=Pr(p,aa(Ps));O|=P}return Ar(t,O,e,p,N)});function Ns(e,t,p){t=p?a:t;var O=Ar(e,T,a,a,a,a,a,t);return O.placeholder=Ns.placeholder,O}function _s(e,t,p){t=p?a:t;var O=Ar(e,D,a,a,a,a,a,t);return O.placeholder=_s.placeholder,O}function Ms(e,t,p){var O,N,I,W,$,Y,pe=0,ce=!1,ge=!1,Oe=!0;if(typeof e!="function")throw new er(l);t=nr(t)||0,mt(p)&&(ce=!!p.leading,ge="maxWait"in p,I=ge?Dt(nr(p.maxWait)||0,t):I,Oe="trailing"in p?!!p.trailing:Oe);function _e(Ot){var pr=O,Tr=N;return O=N=a,pe=Ot,W=e.apply(Tr,pr),W}function Ie(Ot){return pe=Ot,$=Sa(Ke,t),ce?_e(Ot):W}function qe(Ot){var pr=Ot-Y,Tr=Ot-pe,Xs=t-pr;return ge?xt(Xs,I-Tr):Xs}function ke(Ot){var pr=Ot-Y,Tr=Ot-pe;return Y===a||pr>=t||pr<0||ge&&Tr>=I}function Ke(){var Ot=ni();if(ke(Ot))return Ze(Ot);$=Sa(Ke,qe(Ot))}function Ze(Ot){return $=a,Oe&&O?_e(Ot):(O=N=a,W)}function Yt(){$!==a&&zo($),pe=0,O=Y=N=$=a}function Ut(){return $===a?W:Ze(ni())}function Xt(){var Ot=ni(),pr=ke(Ot);if(O=arguments,N=this,Y=Ot,pr){if($===a)return Ie(Y);if(ge)return zo($),$=Sa(Ke,t),_e(Y)}return $===a&&($=Sa(Ke,t)),W}return Xt.cancel=Yt,Xt.flush=Ut,Xt}var Du=Ve(function(e,t){return bo(e,1,t)}),Pu=Ve(function(e,t,p){return bo(e,nr(t)||0,p)});function Nu(e){return Ar(e,R)}function oi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new er(l);var p=function(){var O=arguments,N=t?t.apply(this,O):O[0],I=p.cache;if(I.has(N))return I.get(N);var W=e.apply(this,O);return p.cache=I.set(N,W)||I,W};return p.cache=new(oi.Cache||hr),p}oi.Cache=hr;function si(e){if(typeof e!="function")throw new er(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function _u(e){return Ds(2,e)}var Mu=hc(function(e,t){t=t.length==1&&Ge(t[0])?gt(t[0],qt(xe())):gt(Mt(t,1),qt(xe()));var p=t.length;return Ve(function(O){for(var N=-1,I=xt(O.length,p);++N<I;)O[N]=t[N].call(this,O[N]);return Ht(e,this,O)})}),cn=Ve(function(e,t){var p=Pr(t,aa(cn));return Ar(e,P,a,t,p)}),js=Ve(function(e,t){var p=Pr(t,aa(js));return Ar(e,F,a,t,p)}),ju=br(function(e,t){return Ar(e,_,a,a,a,t)});function xu(e,t){if(typeof e!="function")throw new er(l);return t=t===a?t:He(t),Ve(e,t)}function Fu(e,t){if(typeof e!="function")throw new er(l);return t=t==null?0:Dt(He(t),0),Ve(function(p){var O=p[t],N=xr(p,0,t);return O&&Dr(N,O),Ht(e,this,N)})}function Lu(e,t,p){var O=!0,N=!0;if(typeof e!="function")throw new er(l);return mt(p)&&(O="leading"in p?!!p.leading:O,N="trailing"in p?!!p.trailing:N),Ms(e,t,{leading:O,maxWait:t,trailing:N})}function Iu(e){return Rs(e,1)}function ku(e,t){return cn(Vi(t),e)}function wu(){if(!arguments.length)return[];var e=arguments[0];return Ge(e)?e:[e]}function Uu(e){return rr(e,f)}function Bu(e,t){return t=typeof t=="function"?t:a,rr(e,f,t)}function zu(e){return rr(e,y|f)}function Wu(e,t){return t=typeof t=="function"?t:a,rr(e,y|f,t)}function Gu(e,t){return t==null||Ao(e,t,Pt(t))}function lr(e,t){return e===t||e!==e&&t!==t}var $u=Qa(Li),Hu=Qa(function(e,t){return e>=t}),Hr=Eo(function(){return arguments}())?Eo:function(e){return At(e)&&lt.call(e,"callee")&&!co.call(e,"callee")},Ge=te.isArray,qu=Hn?qt(Hn):ec;function Wt(e){return e!=null&&li(e.length)&&!Or(e)}function St(e){return At(e)&&Wt(e)}function Vu(e){return e===!0||e===!1||At(e)&&kt(e)==Ct}var Fr=sp||Sn,Ku=qn?qt(qn):tc;function Yu(e){return At(e)&&e.nodeType===1&&!Oa(e)}function Xu(e){if(e==null)return!0;if(Wt(e)&&(Ge(e)||typeof e=="string"||typeof e.splice=="function"||Fr(e)||ia(e)||Hr(e)))return!e.length;var t=Ft(e);if(t==Ye||t==Te)return!e.size;if(ba(e))return!wi(e).length;for(var p in e)if(lt.call(e,p))return!1;return!0}function Zu(e,t){return ha(e,t)}function Ju(e,t,p){p=typeof p=="function"?p:a;var O=p?p(e,t):a;return O===a?ha(e,t,a,p):!!O}function dn(e){if(!At(e))return!1;var t=kt(e);return t==Fe||t==Lt||typeof e.message=="string"&&typeof e.name=="string"&&!Oa(e)}function Qu(e){return typeof e=="number"&&fo(e)}function Or(e){if(!mt(e))return!1;var t=kt(e);return t==bt||t==we||t==yt||t==de}function xs(e){return typeof e=="number"&&e==He(e)}function li(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=G}function mt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function At(e){return e!=null&&typeof e=="object"}var Fs=Vn?qt(Vn):ac;function ef(e,t){return e===t||ki(e,t,en(t))}function tf(e,t,p){return p=typeof p=="function"?p:a,ki(e,t,en(t),p)}function rf(e){return Ls(e)&&e!=+e}function af(e){if(Bc(e))throw new We(d);return Ro(e)}function nf(e){return e===null}function of(e){return e==null}function Ls(e){return typeof e=="number"||At(e)&&kt(e)==Zt}function Oa(e){if(!At(e)||kt(e)!=rt)return!1;var t=La(e);if(t===null)return!0;var p=lt.call(t,"constructor")&&t.constructor;return typeof p=="function"&&p instanceof p&&Ma.call(p)==tp}var un=Kn?qt(Kn):ic;function sf(e){return xs(e)&&e>=-G&&e<=G}var Is=Yn?qt(Yn):nc;function pi(e){return typeof e=="string"||!Ge(e)&&At(e)&&kt(e)==X}function Kt(e){return typeof e=="symbol"||At(e)&&kt(e)==ye}var ia=Xn?qt(Xn):oc;function lf(e){return e===a}function pf(e){return At(e)&&Ft(e)==me}function cf(e){return At(e)&&kt(e)==je}var df=Qa(Ui),uf=Qa(function(e,t){return e<=t});function ks(e){if(!e)return[];if(Wt(e))return pi(e)?or(e):zt(e);if(pa&&e[pa])return Gl(e[pa]());var t=Ft(e),p=t==Ye?Ri:t==Te?Da:na;return p(e)}function Cr(e){if(!e)return e===0?e:0;if(e=nr(e),e===V||e===-V){var t=e<0?-1:1;return t*Q}return e===e?e:0}function He(e){var t=Cr(e),p=t%1;return t===t?p?t-p:t:0}function ws(e){return e?zr(He(e),0,ue):0}function nr(e){if(typeof e=="number")return e;if(Kt(e))return se;if(mt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=mt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ro(e);var p=ft.test(e);return p||et.test(e)?Rl(e.slice(2),p?2:8):Nt.test(e)?se:+e}function Us(e){return fr(e,Gt(e))}function ff(e){return e?zr(He(e),-G,G):e===0?e:0}function nt(e){return e==null?"":Vt(e)}var gf=ta(function(e,t){if(ba(t)||Wt(t)){fr(t,Pt(t),e);return}for(var p in t)lt.call(t,p)&&ga(e,p,t[p])}),Bs=ta(function(e,t){fr(t,Gt(t),e)}),ci=ta(function(e,t,p,O){fr(t,Gt(t),e,O)}),mf=ta(function(e,t,p,O){fr(t,Pt(t),e,O)}),yf=br(ji);function hf(e,t){var p=ea(e);return t==null?p:vo(p,t)}var vf=Ve(function(e,t){e=pt(e);var p=-1,O=t.length,N=O>2?t[2]:a;for(N&&wt(t[0],t[1],N)&&(O=1);++p<O;)for(var I=t[p],W=Gt(I),$=-1,Y=W.length;++$<Y;){var pe=W[$],ce=e[pe];(ce===a||lr(ce,Zr[pe])&&!lt.call(e,pe))&&(e[pe]=I[pe])}return e}),Af=Ve(function(e){return e.push(a,as),Ht(zs,a,e)});function bf(e,t){return Jn(e,xe(t,3),ur)}function Sf(e,t){return Jn(e,xe(t,3),Fi)}function Of(e,t){return e==null?e:xi(e,xe(t,3),Gt)}function Cf(e,t){return e==null?e:Co(e,xe(t,3),Gt)}function Tf(e,t){return e&&ur(e,xe(t,3))}function Ef(e,t){return e&&Fi(e,xe(t,3))}function Rf(e){return e==null?[]:Ha(e,Pt(e))}function Df(e){return e==null?[]:Ha(e,Gt(e))}function fn(e,t,p){var O=e==null?a:Wr(e,t);return O===a?p:O}function Pf(e,t){return e!=null&&os(e,t,Xp)}function gn(e,t){return e!=null&&os(e,t,Zp)}var Nf=Jo(function(e,t,p){t!=null&&typeof t.toString!="function"&&(t=ja.call(t)),e[t]=p},yn($t)),_f=Jo(function(e,t,p){t!=null&&typeof t.toString!="function"&&(t=ja.call(t)),lt.call(e,t)?e[t].push(p):e[t]=[p]},xe),Mf=Ve(ya);function Pt(e){return Wt(e)?yo(e):wi(e)}function Gt(e){return Wt(e)?yo(e,!0):sc(e)}function jf(e,t){var p={};return t=xe(t,3),ur(e,function(O,N,I){vr(p,t(O,N,I),O)}),p}function xf(e,t){var p={};return t=xe(t,3),ur(e,function(O,N,I){vr(p,N,t(O,N,I))}),p}var Ff=ta(function(e,t,p){qa(e,t,p)}),zs=ta(function(e,t,p,O){qa(e,t,p,O)}),Lf=br(function(e,t){var p={};if(e==null)return p;var O=!1;t=gt(t,function(I){return I=jr(I,e),O||(O=I.length>1),I}),fr(e,Ji(e),p),O&&(p=rr(p,y|u|f,Pc));for(var N=t.length;N--;)$i(p,t[N]);return p});function If(e,t){return Ws(e,si(xe(t)))}var kf=br(function(e,t){return e==null?{}:pc(e,t)});function Ws(e,t){if(e==null)return{};var p=gt(Ji(e),function(O){return[O]});return t=xe(t),xo(e,p,function(O,N){return t(O,N[0])})}function wf(e,t,p){t=jr(t,e);var O=-1,N=t.length;for(N||(N=1,e=a);++O<N;){var I=e==null?a:e[gr(t[O])];I===a&&(O=N,I=p),e=Or(I)?I.call(e):I}return e}function Uf(e,t,p){return e==null?e:va(e,t,p)}function Bf(e,t,p,O){return O=typeof O=="function"?O:a,e==null?e:va(e,t,p,O)}var Gs=ts(Pt),$s=ts(Gt);function zf(e,t,p){var O=Ge(e),N=O||Fr(e)||ia(e);if(t=xe(t,4),p==null){var I=e&&e.constructor;N?p=O?new I:[]:mt(e)?p=Or(I)?ea(La(e)):{}:p={}}return(N?Qt:ur)(e,function(W,$,Y){return t(p,W,$,Y)}),p}function Wf(e,t){return e==null?!0:$i(e,t)}function Gf(e,t,p){return e==null?e:wo(e,t,Vi(p))}function $f(e,t,p,O){return O=typeof O=="function"?O:a,e==null?e:wo(e,t,Vi(p),O)}function na(e){return e==null?[]:Ei(e,Pt(e))}function Hf(e){return e==null?[]:Ei(e,Gt(e))}function qf(e,t,p){return p===a&&(p=t,t=a),p!==a&&(p=nr(p),p=p===p?p:0),t!==a&&(t=nr(t),t=t===t?t:0),zr(nr(e),t,p)}function Vf(e,t,p){return t=Cr(t),p===a?(p=t,t=0):p=Cr(p),e=nr(e),Jp(e,t,p)}function Kf(e,t,p){if(p&&typeof p!="boolean"&&wt(e,t,p)&&(t=p=a),p===a&&(typeof t=="boolean"?(p=t,t=a):typeof e=="boolean"&&(p=e,e=a)),e===a&&t===a?(e=0,t=1):(e=Cr(e),t===a?(t=e,e=0):t=Cr(t)),e>t){var O=e;e=t,t=O}if(p||e%1||t%1){var N=go();return xt(e+N*(t-e+El("1e-"+((N+"").length-1))),t)}return zi(e,t)}var Yf=ra(function(e,t,p){return t=t.toLowerCase(),e+(p?Hs(t):t)});function Hs(e){return mn(nt(e).toLowerCase())}function qs(e){return e=nt(e),e&&e.replace(Cn,wl).replace(ml,"")}function Xf(e,t,p){e=nt(e),t=Vt(t);var O=e.length;p=p===a?O:zr(He(p),0,O);var N=p;return p-=t.length,p>=0&&e.slice(p,N)==t}function Zf(e){return e=nt(e),e&&w.test(e)?e.replace(ht,Ul):e}function Jf(e){return e=nt(e),e&&Se.test(e)?e.replace(De,"\\$&"):e}var Qf=ra(function(e,t,p){return e+(p?"-":"")+t.toLowerCase()}),eg=ra(function(e,t,p){return e+(p?" ":"")+t.toLowerCase()}),tg=Yo("toLowerCase");function rg(e,t,p){e=nt(e),t=He(t);var O=t?Xr(e):0;if(!t||O>=t)return e;var N=(t-O)/2;return Ja(Ua(N),p)+e+Ja(wa(N),p)}function ag(e,t,p){e=nt(e),t=He(t);var O=t?Xr(e):0;return t&&O<t?e+Ja(t-O,p):e}function ig(e,t,p){e=nt(e),t=He(t);var O=t?Xr(e):0;return t&&O<t?Ja(t-O,p)+e:e}function ng(e,t,p){return p||t==null?t=0:t&&(t=+t),dp(nt(e).replace(ze,""),t||0)}function og(e,t,p){return(p?wt(e,t,p):t===a)?t=1:t=He(t),Wi(nt(e),t)}function sg(){var e=arguments,t=nt(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var lg=ra(function(e,t,p){return e+(p?"_":"")+t.toLowerCase()});function pg(e,t,p){return p&&typeof p!="number"&&wt(e,t,p)&&(t=p=a),p=p===a?ue:p>>>0,p?(e=nt(e),e&&(typeof t=="string"||t!=null&&!un(t))&&(t=Vt(t),!t&&Yr(e))?xr(or(e),0,p):e.split(t,p)):[]}var cg=ra(function(e,t,p){return e+(p?" ":"")+mn(t)});function dg(e,t,p){return e=nt(e),p=p==null?0:zr(He(p),0,e.length),t=Vt(t),e.slice(p,p+t.length)==t}function ug(e,t,p){var O=x.templateSettings;p&&wt(e,t,p)&&(t=a),e=nt(e),t=ci({},t,O,rs);var N=ci({},t.imports,O.imports,rs),I=Pt(N),W=Ei(N,I),$,Y,pe=0,ce=t.interpolate||oa,ge="__p += '",Oe=Di((t.escape||oa).source+"|"+ce.source+"|"+(ce===ee?st:oa).source+"|"+(t.evaluate||oa).source+"|$","g"),_e="//# sourceURL="+(lt.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bl+"]")+`
`;e.replace(Oe,function(ke,Ke,Ze,Yt,Ut,Xt){return Ze||(Ze=Yt),ge+=e.slice(pe,Xt).replace(qr,Bl),Ke&&($=!0,ge+=`' +
__e(`+Ke+`) +
'`),Ut&&(Y=!0,ge+=`';
`+Ut+`;
__p += '`),Ze&&(ge+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),pe=Xt+ke.length,ke}),ge+=`';
`;var Ie=lt.call(t,"variable")&&t.variable;if(!Ie)ge=`with (obj) {
`+ge+`
}
`;else if(Le.test(Ie))throw new We(o);ge=(Y?ge.replace(Er,""):ge).replace(Lr,"$1").replace(It,"$1;"),ge="function("+(Ie||"obj")+`) {
`+(Ie?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var qe=Ks(function(){return at(I,_e+"return "+ge).apply(a,W)});if(qe.source=ge,dn(qe))throw qe;return qe}function fg(e){return nt(e).toLowerCase()}function gg(e){return nt(e).toUpperCase()}function mg(e,t,p){if(e=nt(e),e&&(p||t===a))return ro(e);if(!e||!(t=Vt(t)))return e;var O=or(e),N=or(t),I=ao(O,N),W=io(O,N)+1;return xr(O,I,W).join("")}function yg(e,t,p){if(e=nt(e),e&&(p||t===a))return e.slice(0,oo(e)+1);if(!e||!(t=Vt(t)))return e;var O=or(e),N=io(O,or(t))+1;return xr(O,0,N).join("")}function hg(e,t,p){if(e=nt(e),e&&(p||t===a))return e.replace(ze,"");if(!e||!(t=Vt(t)))return e;var O=or(e),N=ao(O,or(t));return xr(O,N).join("")}function vg(e,t){var p=j,O=k;if(mt(t)){var N="separator"in t?t.separator:N;p="length"in t?He(t.length):p,O="omission"in t?Vt(t.omission):O}e=nt(e);var I=e.length;if(Yr(e)){var W=or(e);I=W.length}if(p>=I)return e;var $=p-Xr(O);if($<1)return O;var Y=W?xr(W,0,$).join(""):e.slice(0,$);if(N===a)return Y+O;if(W&&($+=Y.length-$),un(N)){if(e.slice($).search(N)){var pe,ce=Y;for(N.global||(N=Di(N.source,nt(vt.exec(N))+"g")),N.lastIndex=0;pe=N.exec(ce);)var ge=pe.index;Y=Y.slice(0,ge===a?$:ge)}}else if(e.indexOf(Vt(N),$)!=$){var Oe=Y.lastIndexOf(N);Oe>-1&&(Y=Y.slice(0,Oe))}return Y+O}function Ag(e){return e=nt(e),e&&kr.test(e)?e.replace(Ir,Vl):e}var bg=ra(function(e,t,p){return e+(p?" ":"")+t.toUpperCase()}),mn=Yo("toUpperCase");function Vs(e,t,p){return e=nt(e),t=p?a:t,t===a?Wl(e)?Xl(e):xl(e):e.match(t)||[]}var Ks=Ve(function(e,t){try{return Ht(e,a,t)}catch(p){return dn(p)?p:new We(p)}}),Sg=br(function(e,t){return Qt(t,function(p){p=gr(p),vr(e,p,pn(e[p],e))}),e});function Og(e){var t=e==null?0:e.length,p=xe();return e=t?gt(e,function(O){if(typeof O[1]!="function")throw new er(l);return[p(O[0]),O[1]]}):[],Ve(function(O){for(var N=-1;++N<t;){var I=e[N];if(Ht(I[0],this,O))return Ht(I[1],this,O)}})}function Cg(e){return Vp(rr(e,y))}function yn(e){return function(){return e}}function Tg(e,t){return e==null||e!==e?t:e}var Eg=Zo(),Rg=Zo(!0);function $t(e){return e}function hn(e){return Do(typeof e=="function"?e:rr(e,y))}function Dg(e){return No(rr(e,y))}function Pg(e,t){return _o(e,rr(t,y))}var Ng=Ve(function(e,t){return function(p){return ya(p,e,t)}}),_g=Ve(function(e,t){return function(p){return ya(e,p,t)}});function vn(e,t,p){var O=Pt(t),N=Ha(t,O);p==null&&!(mt(t)&&(N.length||!O.length))&&(p=t,t=e,e=this,N=Ha(t,Pt(t)));var I=!(mt(p)&&"chain"in p)||!!p.chain,W=Or(e);return Qt(N,function($){var Y=t[$];e[$]=Y,W&&(e.prototype[$]=function(){var pe=this.__chain__;if(I||pe){var ce=e(this.__wrapped__),ge=ce.__actions__=zt(this.__actions__);return ge.push({func:Y,args:arguments,thisArg:e}),ce.__chain__=pe,ce}return Y.apply(e,Dr([this.value()],arguments))})}),e}function Mg(){return _t._===this&&(_t._=rp),this}function An(){}function jg(e){return e=He(e),Ve(function(t){return Mo(t,e)})}var xg=Yi(gt),Fg=Yi(Zn),Lg=Yi(bi);function Ys(e){return rn(e)?Si(gr(e)):cc(e)}function Ig(e){return function(t){return e==null?a:Wr(e,t)}}var kg=Qo(),wg=Qo(!0);function bn(){return[]}function Sn(){return!1}function Ug(){return{}}function Bg(){return""}function zg(){return!0}function Wg(e,t){if(e=He(e),e<1||e>G)return[];var p=ue,O=xt(e,ue);t=xe(t),e-=ue;for(var N=Ti(O,t);++p<e;)t(p);return N}function Gg(e){return Ge(e)?gt(e,gr):Kt(e)?[e]:zt(ms(nt(e)))}function $g(e){var t=++ep;return nt(e)+t}var Hg=Za(function(e,t){return e+t},0),qg=Xi("ceil"),Vg=Za(function(e,t){return e/t},1),Kg=Xi("floor");function Yg(e){return e&&e.length?$a(e,$t,Li):a}function Xg(e,t){return e&&e.length?$a(e,xe(t,2),Li):a}function Zg(e){return eo(e,$t)}function Jg(e,t){return eo(e,xe(t,2))}function Qg(e){return e&&e.length?$a(e,$t,Ui):a}function em(e,t){return e&&e.length?$a(e,xe(t,2),Ui):a}var tm=Za(function(e,t){return e*t},1),rm=Xi("round"),am=Za(function(e,t){return e-t},0);function im(e){return e&&e.length?Ci(e,$t):0}function nm(e,t){return e&&e.length?Ci(e,xe(t,2)):0}return x.after=Ru,x.ary=Rs,x.assign=gf,x.assignIn=Bs,x.assignInWith=ci,x.assignWith=mf,x.at=yf,x.before=Ds,x.bind=pn,x.bindAll=Sg,x.bindKey=Ps,x.castArray=wu,x.chain=Cs,x.chunk=Vc,x.compact=Kc,x.concat=Yc,x.cond=Og,x.conforms=Cg,x.constant=yn,x.countBy=au,x.create=hf,x.curry=Ns,x.curryRight=_s,x.debounce=Ms,x.defaults=vf,x.defaultsDeep=Af,x.defer=Du,x.delay=Pu,x.difference=Xc,x.differenceBy=Zc,x.differenceWith=Jc,x.drop=Qc,x.dropRight=ed,x.dropRightWhile=td,x.dropWhile=rd,x.fill=ad,x.filter=nu,x.flatMap=lu,x.flatMapDeep=pu,x.flatMapDepth=cu,x.flatten=As,x.flattenDeep=id,x.flattenDepth=nd,x.flip=Nu,x.flow=Eg,x.flowRight=Rg,x.fromPairs=od,x.functions=Rf,x.functionsIn=Df,x.groupBy=du,x.initial=ld,x.intersection=pd,x.intersectionBy=cd,x.intersectionWith=dd,x.invert=Nf,x.invertBy=_f,x.invokeMap=fu,x.iteratee=hn,x.keyBy=gu,x.keys=Pt,x.keysIn=Gt,x.map=ii,x.mapKeys=jf,x.mapValues=xf,x.matches=Dg,x.matchesProperty=Pg,x.memoize=oi,x.merge=Ff,x.mergeWith=zs,x.method=Ng,x.methodOf=_g,x.mixin=vn,x.negate=si,x.nthArg=jg,x.omit=Lf,x.omitBy=If,x.once=_u,x.orderBy=mu,x.over=xg,x.overArgs=Mu,x.overEvery=Fg,x.overSome=Lg,x.partial=cn,x.partialRight=js,x.partition=yu,x.pick=kf,x.pickBy=Ws,x.property=Ys,x.propertyOf=Ig,x.pull=md,x.pullAll=Ss,x.pullAllBy=yd,x.pullAllWith=hd,x.pullAt=vd,x.range=kg,x.rangeRight=wg,x.rearg=ju,x.reject=Au,x.remove=Ad,x.rest=xu,x.reverse=sn,x.sampleSize=Su,x.set=Uf,x.setWith=Bf,x.shuffle=Ou,x.slice=bd,x.sortBy=Eu,x.sortedUniq=Dd,x.sortedUniqBy=Pd,x.split=pg,x.spread=Fu,x.tail=Nd,x.take=_d,x.takeRight=Md,x.takeRightWhile=jd,x.takeWhile=xd,x.tap=Kd,x.throttle=Lu,x.thru=ai,x.toArray=ks,x.toPairs=Gs,x.toPairsIn=$s,x.toPath=Gg,x.toPlainObject=Us,x.transform=zf,x.unary=Iu,x.union=Fd,x.unionBy=Ld,x.unionWith=Id,x.uniq=kd,x.uniqBy=wd,x.uniqWith=Ud,x.unset=Wf,x.unzip=ln,x.unzipWith=Os,x.update=Gf,x.updateWith=$f,x.values=na,x.valuesIn=Hf,x.without=Bd,x.words=Vs,x.wrap=ku,x.xor=zd,x.xorBy=Wd,x.xorWith=Gd,x.zip=$d,x.zipObject=Hd,x.zipObjectDeep=qd,x.zipWith=Vd,x.entries=Gs,x.entriesIn=$s,x.extend=Bs,x.extendWith=ci,vn(x,x),x.add=Hg,x.attempt=Ks,x.camelCase=Yf,x.capitalize=Hs,x.ceil=qg,x.clamp=qf,x.clone=Uu,x.cloneDeep=zu,x.cloneDeepWith=Wu,x.cloneWith=Bu,x.conformsTo=Gu,x.deburr=qs,x.defaultTo=Tg,x.divide=Vg,x.endsWith=Xf,x.eq=lr,x.escape=Zf,x.escapeRegExp=Jf,x.every=iu,x.find=ou,x.findIndex=hs,x.findKey=bf,x.findLast=su,x.findLastIndex=vs,x.findLastKey=Sf,x.floor=Kg,x.forEach=Ts,x.forEachRight=Es,x.forIn=Of,x.forInRight=Cf,x.forOwn=Tf,x.forOwnRight=Ef,x.get=fn,x.gt=$u,x.gte=Hu,x.has=Pf,x.hasIn=gn,x.head=bs,x.identity=$t,x.includes=uu,x.indexOf=sd,x.inRange=Vf,x.invoke=Mf,x.isArguments=Hr,x.isArray=Ge,x.isArrayBuffer=qu,x.isArrayLike=Wt,x.isArrayLikeObject=St,x.isBoolean=Vu,x.isBuffer=Fr,x.isDate=Ku,x.isElement=Yu,x.isEmpty=Xu,x.isEqual=Zu,x.isEqualWith=Ju,x.isError=dn,x.isFinite=Qu,x.isFunction=Or,x.isInteger=xs,x.isLength=li,x.isMap=Fs,x.isMatch=ef,x.isMatchWith=tf,x.isNaN=rf,x.isNative=af,x.isNil=of,x.isNull=nf,x.isNumber=Ls,x.isObject=mt,x.isObjectLike=At,x.isPlainObject=Oa,x.isRegExp=un,x.isSafeInteger=sf,x.isSet=Is,x.isString=pi,x.isSymbol=Kt,x.isTypedArray=ia,x.isUndefined=lf,x.isWeakMap=pf,x.isWeakSet=cf,x.join=ud,x.kebabCase=Qf,x.last=ir,x.lastIndexOf=fd,x.lowerCase=eg,x.lowerFirst=tg,x.lt=df,x.lte=uf,x.max=Yg,x.maxBy=Xg,x.mean=Zg,x.meanBy=Jg,x.min=Qg,x.minBy=em,x.stubArray=bn,x.stubFalse=Sn,x.stubObject=Ug,x.stubString=Bg,x.stubTrue=zg,x.multiply=tm,x.nth=gd,x.noConflict=Mg,x.noop=An,x.now=ni,x.pad=rg,x.padEnd=ag,x.padStart=ig,x.parseInt=ng,x.random=Kf,x.reduce=hu,x.reduceRight=vu,x.repeat=og,x.replace=sg,x.result=wf,x.round=rm,x.runInContext=K,x.sample=bu,x.size=Cu,x.snakeCase=lg,x.some=Tu,x.sortedIndex=Sd,x.sortedIndexBy=Od,x.sortedIndexOf=Cd,x.sortedLastIndex=Td,x.sortedLastIndexBy=Ed,x.sortedLastIndexOf=Rd,x.startCase=cg,x.startsWith=dg,x.subtract=am,x.sum=im,x.sumBy=nm,x.template=ug,x.times=Wg,x.toFinite=Cr,x.toInteger=He,x.toLength=ws,x.toLower=fg,x.toNumber=nr,x.toSafeInteger=ff,x.toString=nt,x.toUpper=gg,x.trim=mg,x.trimEnd=yg,x.trimStart=hg,x.truncate=vg,x.unescape=Ag,x.uniqueId=$g,x.upperCase=bg,x.upperFirst=mn,x.each=Ts,x.eachRight=Es,x.first=bs,vn(x,function(){var e={};return ur(x,function(t,p){lt.call(x.prototype,p)||(e[p]=t)}),e}(),{chain:!1}),x.VERSION=r,Qt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){x[e].placeholder=x}),Qt(["drop","take"],function(e,t){Xe.prototype[e]=function(p){p=p===a?1:Dt(He(p),0);var O=this.__filtered__&&!t?new Xe(this):this.clone();return O.__filtered__?O.__takeCount__=xt(p,O.__takeCount__):O.__views__.push({size:xt(p,ue),type:e+(O.__dir__<0?"Right":"")}),O},Xe.prototype[e+"Right"]=function(p){return this.reverse()[e](p).reverse()}}),Qt(["filter","map","takeWhile"],function(e,t){var p=t+1,O=p==L||p==U;Xe.prototype[e]=function(N){var I=this.clone();return I.__iteratees__.push({iteratee:xe(N,3),type:p}),I.__filtered__=I.__filtered__||O,I}}),Qt(["head","last"],function(e,t){var p="take"+(t?"Right":"");Xe.prototype[e]=function(){return this[p](1).value()[0]}}),Qt(["initial","tail"],function(e,t){var p="drop"+(t?"":"Right");Xe.prototype[e]=function(){return this.__filtered__?new Xe(this):this[p](1)}}),Xe.prototype.compact=function(){return this.filter($t)},Xe.prototype.find=function(e){return this.filter(e).head()},Xe.prototype.findLast=function(e){return this.reverse().find(e)},Xe.prototype.invokeMap=Ve(function(e,t){return typeof e=="function"?new Xe(this):this.map(function(p){return ya(p,e,t)})}),Xe.prototype.reject=function(e){return this.filter(si(xe(e)))},Xe.prototype.slice=function(e,t){e=He(e);var p=this;return p.__filtered__&&(e>0||t<0)?new Xe(p):(e<0?p=p.takeRight(-e):e&&(p=p.drop(e)),t!==a&&(t=He(t),p=t<0?p.dropRight(-t):p.take(t-e)),p)},Xe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Xe.prototype.toArray=function(){return this.take(ue)},ur(Xe.prototype,function(e,t){var p=/^(?:filter|find|map|reject)|While$/.test(t),O=/^(?:head|last)$/.test(t),N=x[O?"take"+(t=="last"?"Right":""):t],I=O||/^find/.test(t);N&&(x.prototype[t]=function(){var W=this.__wrapped__,$=O?[1]:arguments,Y=W instanceof Xe,pe=$[0],ce=Y||Ge(W),ge=function(Ke){var Ze=N.apply(x,Dr([Ke],$));return O&&Oe?Ze[0]:Ze};ce&&p&&typeof pe=="function"&&pe.length!=1&&(Y=ce=!1);var Oe=this.__chain__,_e=!!this.__actions__.length,Ie=I&&!Oe,qe=Y&&!_e;if(!I&&ce){W=qe?W:new Xe(this);var ke=e.apply(W,$);return ke.__actions__.push({func:ai,args:[ge],thisArg:a}),new tr(ke,Oe)}return Ie&&qe?e.apply(this,$):(ke=this.thru(ge),Ie?O?ke.value()[0]:ke.value():ke)})}),Qt(["pop","push","shift","sort","splice","unshift"],function(e){var t=Na[e],p=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",O=/^(?:pop|shift)$/.test(e);x.prototype[e]=function(){var N=arguments;if(O&&!this.__chain__){var I=this.value();return t.apply(Ge(I)?I:[],N)}return this[p](function(W){return t.apply(Ge(W)?W:[],N)})}}),ur(Xe.prototype,function(e,t){var p=x[t];if(p){var O=p.name+"";lt.call(Qr,O)||(Qr[O]=[]),Qr[O].push({name:t,func:p})}}),Qr[Xa(a,E).name]=[{name:"wrapper",func:a}],Xe.prototype.clone=vp,Xe.prototype.reverse=Ap,Xe.prototype.value=bp,x.prototype.at=Yd,x.prototype.chain=Xd,x.prototype.commit=Zd,x.prototype.next=Jd,x.prototype.plant=eu,x.prototype.reverse=tu,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=ru,x.prototype.first=x.prototype.head,pa&&(x.prototype[pa]=Qd),x},Pa=Zl();_t._=Pa,g=function(){return Pa}.call(h,n,h,C),g!==a&&(C.exports=g)}).call(this)},4028:(C,h,n)=>{"use strict";const g=n(6214),a=Symbol("max"),r=Symbol("length"),s=Symbol("lengthCalculator"),d=Symbol("allowStale"),l=Symbol("maxAge"),o=Symbol("dispose"),c=Symbol("noDisposeOnSet"),m=Symbol("lruList"),i=Symbol("cache"),y=Symbol("updateAgeOnGet"),u=()=>1;class f{constructor(P){if(typeof P=="number"&&(P={max:P}),P||(P={}),P.max&&(typeof P.max!="number"||P.max<0))throw new TypeError("max must be a non-negative number");const F=this[a]=P.max||1/0,M=P.length||u;if(this[s]=typeof M!="function"?u:M,this[d]=P.stale||!1,P.maxAge&&typeof P.maxAge!="number")throw new TypeError("maxAge must be a number");this[l]=P.maxAge||0,this[o]=P.dispose,this[c]=P.noDisposeOnSet||!1,this[y]=P.updateAgeOnGet||!1,this.reset()}set max(P){if(typeof P!="number"||P<0)throw new TypeError("max must be a non-negative number");this[a]=P||1/0,S(this)}get max(){return this[a]}set allowStale(P){this[d]=!!P}get allowStale(){return this[d]}set maxAge(P){if(typeof P!="number")throw new TypeError("maxAge must be a non-negative number");this[l]=P,S(this)}get maxAge(){return this[l]}set lengthCalculator(P){typeof P!="function"&&(P=u),P!==this[s]&&(this[s]=P,this[r]=0,this[m].forEach(F=>{F.length=this[s](F.value,F.key),this[r]+=F.length})),S(this)}get lengthCalculator(){return this[s]}get length(){return this[r]}get itemCount(){return this[m].length}rforEach(P,F){F=F||this;for(let M=this[m].tail;M!==null;){const _=M.prev;T(this,P,M,F),M=_}}forEach(P,F){F=F||this;for(let M=this[m].head;M!==null;){const _=M.next;T(this,P,M,F),M=_}}keys(){return this[m].toArray().map(P=>P.key)}values(){return this[m].toArray().map(P=>P.value)}reset(){this[o]&&this[m]&&this[m].length&&this[m].forEach(P=>this[o](P.key,P.value)),this[i]=new Map,this[m]=new g,this[r]=0}dump(){return this[m].map(P=>v(this,P)?!1:{k:P.key,v:P.value,e:P.now+(P.maxAge||0)}).toArray().filter(P=>P)}dumpLru(){return this[m]}set(P,F,M){if(M=M||this[l],M&&typeof M!="number")throw new TypeError("maxAge must be a number");const _=M?Date.now():0,R=this[s](F,P);if(this[i].has(P)){if(R>this[a])return E(this,this[i].get(P)),!1;const z=this[i].get(P).value;return this[o]&&(this[c]||this[o](P,z.value)),z.now=_,z.maxAge=M,z.value=F,this[r]+=R-z.length,z.length=R,this.get(P),S(this),!0}const j=new b(P,F,R,_,M);return j.length>this[a]?(this[o]&&this[o](P,F),!1):(this[r]+=j.length,this[m].unshift(j),this[i].set(P,this[m].head),S(this),!0)}has(P){if(!this[i].has(P))return!1;const F=this[i].get(P).value;return!v(this,F)}get(P){return A(this,P,!0)}peek(P){return A(this,P,!1)}pop(){const P=this[m].tail;return P?(E(this,P),P.value):null}del(P){E(this,this[i].get(P))}load(P){this.reset();const F=Date.now();for(let M=P.length-1;M>=0;M--){const _=P[M],R=_.e||0;if(R===0)this.set(_.k,_.v);else{const j=R-F;j>0&&this.set(_.k,_.v,j)}}}prune(){this[i].forEach((P,F)=>A(this,F,!1))}}const A=(D,P,F)=>{const M=D[i].get(P);if(M){const _=M.value;if(v(D,_)){if(E(D,M),!D[d])return}else F&&(D[y]&&(M.value.now=Date.now()),D[m].unshiftNode(M));return _.value}},v=(D,P)=>{if(!P||!P.maxAge&&!D[l])return!1;const F=Date.now()-P.now;return P.maxAge?F>P.maxAge:D[l]&&F>D[l]},S=D=>{if(D[r]>D[a])for(let P=D[m].tail;D[r]>D[a]&&P!==null;){const F=P.prev;E(D,P),P=F}},E=(D,P)=>{if(P){const F=P.value;D[o]&&D[o](F.key,F.value),D[r]-=F.length,D[i].delete(F.key),D[m].removeNode(P)}};class b{constructor(P,F,M,_,R){this.key=P,this.value=F,this.length=M,this.now=_,this.maxAge=R||0}}const T=(D,P,F,M)=>{let _=F.value;v(D,_)&&(E(D,F),D[d]||(_=void 0)),_&&P.call(M,_.value,_.key,D)};C.exports=f},7446:()=>{(function(C){var h="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:n,environment:{pattern:RegExp("\\$"+h),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+h),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};C.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+h),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+h),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=C.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=g.variable[1].inside,s=0;s<a.length;s++)r[a[s]]=C.languages.bash[a[s]];C.languages.sh=C.languages.bash,C.languages.shell=C.languages.bash})(Prism)},7037:()=>{(function(C){C.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var h={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(h).forEach(function(n){var g=h[n],a=[];/^\w+$/.test(n)||a.push(/\w+/.exec(n)[0]),n==="diff"&&a.push("bold"),C.languages.diff[n]={pattern:RegExp("^(?:["+g+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(n)[0]}}}}),Object.defineProperty(C.languages.diff,"PREFIXES",{value:h})})(Prism)},293:()=>{(function(C){function h(o){return RegExp("(^(?:"+o+"):[ 	]*(?![ 	]))[^]+","i")}C.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:C.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:h(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:C.languages.csp},{pattern:h(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:C.languages.hpkp},{pattern:h(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:C.languages.hsts},{pattern:h(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var n=C.languages,g={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},a={"application/json":!0,"application/xml":!0};function r(o){var c=o.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+c+"(?![+\\w.-])";return"(?:"+o+"|"+m+")"}var s;for(var d in g)if(g[d]){s=s||{};var l=a[d]?r(d):d;s[d.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:g[d]}}s&&C.languages.insertBefore("http","header",s)})(Prism)},714:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},8070:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},5170:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function C(r,s){r.addEventListener("click",function(){n(s)})}function h(r){var s=document.createElement("textarea");s.value=r.getText(),s.style.top="0",s.style.left="0",s.style.position="fixed",document.body.appendChild(s),s.focus(),s.select();try{var d=document.execCommand("copy");setTimeout(function(){d?r.success():r.error()},1)}catch(l){setTimeout(function(){r.error(l)},1)}document.body.removeChild(s)}function n(r){navigator.clipboard?navigator.clipboard.writeText(r.getText()).then(r.success,function(){h(r)}):h(r)}function g(r){window.getSelection().selectAllChildren(r)}function a(r){var s={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},d="data-prismjs-";for(var l in s){for(var o=d+l,c=r;c&&!c.hasAttribute(o);)c=c.parentElement;c&&(s[l]=c.getAttribute(o))}return s}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(r){var s=r.element,d=a(s),l=document.createElement("button");l.className="copy-to-clipboard-button",l.setAttribute("type","button");var o=document.createElement("span");return l.appendChild(o),m("copy"),C(l,{getText:function(){return s.textContent},success:function(){m("copy-success"),c()},error:function(){m("copy-error"),setTimeout(function(){g(s)},1),c()}}),l;function c(){setTimeout(function(){m("copy")},d["copy-timeout"])}function m(i){o.textContent=d[i],l.setAttribute("data-copy-state",i)}})})()},1932:()=>{(function(){if(typeof Prism!="undefined"){var C=/^diff-([\w-]+)/i,h=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,n=RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g,function(){return h.source}),"gi"),g=!1;Prism.hooks.add("before-sanity-check",function(a){var r=a.language;C.test(r)&&!a.grammar&&(a.grammar=Prism.languages[r]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(a){!g&&!Prism.languages.diff&&!Prism.plugins.autoloader&&(g=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var r=a.language;C.test(r)&&!Prism.languages[r]&&(Prism.languages[r]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(a){var r,s;if(a.language!=="diff"){var d=C.exec(a.language);if(!d)return;r=d[1],s=Prism.languages[r]}var l=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(l&&a.type in l){var o=a.content.replace(h,""),c=o.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),m=c.replace(/(^|[\r\n])./g,"$1"),i;s?i=Prism.highlight(m,s,r):i=Prism.util.encode(m);var y=new Prism.Token("prefix",l[a.type],[/\w+/.exec(a.type)[0]]),u=Prism.Token.stringify(y,a.language),f=[],A;for(n.lastIndex=0;A=n.exec(i);)f.push(u+A[0]);/(?:^|[\r\n]).$/.test(c)&&f.push(u),a.content=f.join(""),s&&a.classes.push("language-"+r)}})}})()},3129:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var C=[],h={},n=function(){};Prism.plugins.toolbar={};var g=Prism.plugins.toolbar.registerButton=function(s,d){var l;if(typeof d=="function"?l=d:l=function(o){var c;return typeof d.onClick=="function"?(c=document.createElement("button"),c.type="button",c.addEventListener("click",function(){d.onClick.call(this,o)})):typeof d.url=="string"?(c=document.createElement("a"),c.href=d.url):c=document.createElement("span"),d.className&&c.classList.add(d.className),c.textContent=d.text,c},s in h){console.warn('There is a button with the key "'+s+'" registered already.');return}C.push(h[s]=l)};function a(s){for(;s;){var d=s.getAttribute("data-toolbar-order");if(d!=null)return d=d.trim(),d.length?d.split(/\s*,\s*/g):[];s=s.parentElement}}var r=Prism.plugins.toolbar.hook=function(s){var d=s.element.parentNode;if(!(!d||!/pre/i.test(d.nodeName))&&!d.parentNode.classList.contains("code-toolbar")){var l=document.createElement("div");l.classList.add("code-toolbar"),d.parentNode.insertBefore(l,d),l.appendChild(d);var o=document.createElement("div");o.classList.add("toolbar");var c=C,m=a(s.element);m&&(c=m.map(function(i){return h[i]||n})),c.forEach(function(i){var y=i(s);if(y){var u=document.createElement("div");u.classList.add("toolbar-item"),u.appendChild(y),o.appendChild(u)}}),l.appendChild(o)}};g("label",function(s){var d=s.element.parentNode;if(!(!d||!/pre/i.test(d.nodeName))&&d.hasAttribute("data-label")){var l,o,c=d.getAttribute("data-label");try{o=document.querySelector("template#"+c)}catch(m){}return o?l=o.content:(d.hasAttribute("data-url")?(l=document.createElement("a"),l.href=d.getAttribute("data-url")):l=document.createElement("span"),l.textContent=c),l}}),Prism.hooks.add("complete",r)})()},3066:(C,h,n)=>{var g=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,l={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function b(T){return T instanceof c?new c(T.type,b(T.content),T.alias):Array.isArray(T)?T.map(b):T.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++d}),b.__id},clone:function b(T,D){D=D||{};var P,F;switch(o.util.type(T)){case"Object":if(F=o.util.objId(T),D[F])return D[F];P={},D[F]=P;for(var M in T)T.hasOwnProperty(M)&&(P[M]=b(T[M],D));return P;case"Array":return F=o.util.objId(T),D[F]?D[F]:(P=[],D[F]=P,T.forEach(function(_,R){P[R]=b(_,D)}),P);default:return T}},getLanguage:function(b){for(;b;){var T=s.exec(b.className);if(T)return T[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,T){b.className=b.className.replace(RegExp(s,"gi"),""),b.classList.add("language-"+T)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(P){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(b){var T=document.getElementsByTagName("script");for(var D in T)if(T[D].src==b)return T[D]}return null}},isActive:function(b,T,D){for(var P="no-"+T;b;){var F=b.classList;if(F.contains(T))return!0;if(F.contains(P))return!1;b=b.parentElement}return!!D}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(b,T){var D=o.util.clone(o.languages[b]);for(var P in T)D[P]=T[P];return D},insertBefore:function(b,T,D,P){P=P||o.languages;var F=P[b],M={};for(var _ in F)if(F.hasOwnProperty(_)){if(_==T)for(var R in D)D.hasOwnProperty(R)&&(M[R]=D[R]);D.hasOwnProperty(_)||(M[_]=F[_])}var j=P[b];return P[b]=M,o.languages.DFS(o.languages,function(k,z){z===j&&k!=b&&(this[k]=M)}),M},DFS:function b(T,D,P,F){F=F||{};var M=o.util.objId;for(var _ in T)if(T.hasOwnProperty(_)){D.call(T,_,T[_],P||_);var R=T[_],j=o.util.type(R);j==="Object"&&!F[M(R)]?(F[M(R)]=!0,b(R,D,null,F)):j==="Array"&&!F[M(R)]&&(F[M(R)]=!0,b(R,D,_,F))}}},plugins:{},highlightAll:function(b,T){o.highlightAllUnder(document,b,T)},highlightAllUnder:function(b,T,D){var P={callback:D,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",P),P.elements=Array.prototype.slice.apply(P.container.querySelectorAll(P.selector)),o.hooks.run("before-all-elements-highlight",P);for(var F=0,M;M=P.elements[F++];)o.highlightElement(M,T===!0,P.callback)},highlightElement:function(b,T,D){var P=o.util.getLanguage(b),F=o.languages[P];o.util.setLanguage(b,P);var M=b.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(M,P);var _=b.textContent,R={element:b,language:P,grammar:F,code:_};function j(z){R.highlightedCode=z,o.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,o.hooks.run("after-highlight",R),o.hooks.run("complete",R),D&&D.call(R.element)}if(o.hooks.run("before-sanity-check",R),M=R.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!R.code){o.hooks.run("complete",R),D&&D.call(R.element);return}if(o.hooks.run("before-highlight",R),!R.grammar){j(o.util.encode(R.code));return}if(T&&r.Worker){var k=new Worker(o.filename);k.onmessage=function(z){j(z.data)},k.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else j(o.highlight(R.code,R.grammar,R.language))},highlight:function(b,T,D){var P={code:b,grammar:T,language:D};if(o.hooks.run("before-tokenize",P),!P.grammar)throw new Error('The language "'+P.language+'" has no grammar.');return P.tokens=o.tokenize(P.code,P.grammar),o.hooks.run("after-tokenize",P),c.stringify(o.util.encode(P.tokens),P.language)},tokenize:function(b,T){var D=T.rest;if(D){for(var P in D)T[P]=D[P];delete T.rest}var F=new y;return u(F,F.head,b),i(b,F,T,F.head,0),A(F)},hooks:{all:{},add:function(b,T){var D=o.hooks.all;D[b]=D[b]||[],D[b].push(T)},run:function(b,T){var D=o.hooks.all[b];if(!(!D||!D.length))for(var P=0,F;F=D[P++];)F(T)}},Token:c};r.Prism=o;function c(b,T,D,P){this.type=b,this.content=T,this.alias=D,this.length=(P||"").length|0}c.stringify=function b(T,D){if(typeof T=="string")return T;if(Array.isArray(T)){var P="";return T.forEach(function(j){P+=b(j,D)}),P}var F={type:T.type,content:b(T.content,D),tag:"span",classes:["token",T.type],attributes:{},language:D},M=T.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(F.classes,M):F.classes.push(M)),o.hooks.run("wrap",F);var _="";for(var R in F.attributes)_+=" "+R+'="'+(F.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+_+">"+F.content+"</"+F.tag+">"};function m(b,T,D,P){b.lastIndex=T;var F=b.exec(D);if(F&&P&&F[1]){var M=F[1].length;F.index+=M,F[0]=F[0].slice(M)}return F}function i(b,T,D,P,F,M){for(var _ in D)if(!(!D.hasOwnProperty(_)||!D[_])){var R=D[_];R=Array.isArray(R)?R:[R];for(var j=0;j<R.length;++j){if(M&&M.cause==_+","+j)return;var k=R[j],z=k.inside,H=!!k.lookbehind,L=!!k.greedy,B=k.alias;if(L&&!k.pattern.global){var U=k.pattern.toString().match(/[imsuy]*$/)[0];k.pattern=RegExp(k.pattern.source,U+"g")}for(var V=k.pattern||k,G=P.next,Q=F;G!==T.tail&&!(M&&Q>=M.reach);Q+=G.value.length,G=G.next){var se=G.value;if(T.length>b.length)return;if(!(se instanceof c)){var ue=1,Z;if(L){if(Z=m(V,Q,b,H),!Z||Z.index>=b.length)break;var Qe=Z.index,ve=Z.index+Z[0].length,Ae=Q;for(Ae+=G.value.length;Qe>=Ae;)G=G.next,Ae+=G.value.length;if(Ae-=G.value.length,Q=Ae,G.value instanceof c)continue;for(var Ce=G;Ce!==T.tail&&(Ae<ve||typeof Ce.value=="string");Ce=Ce.next)ue++,Ae+=Ce.value.length;ue--,se=b.slice(Q,Ae),Z.index-=Q}else if(Z=m(V,0,se,H),!Z)continue;var Qe=Z.index,yt=Z[0],Ct=se.slice(0,Qe),Tt=se.slice(Qe+yt.length),Lt=Q+se.length;M&&Lt>M.reach&&(M.reach=Lt);var Fe=G.prev;Ct&&(Fe=u(T,Fe,Ct),Q+=Ct.length),f(T,Fe,ue);var bt=new c(_,z?o.tokenize(yt,z):yt,B,yt);if(G=u(T,Fe,bt),Tt&&u(T,G,Tt),ue>1){var we={cause:_+","+j,reach:Lt};i(b,T,D,G.prev,Q,we),M&&we.reach>M.reach&&(M.reach=we.reach)}}}}}}function y(){var b={value:null,prev:null,next:null},T={value:null,prev:b,next:null};b.next=T,this.head=b,this.tail=T,this.length=0}function u(b,T,D){var P=T.next,F={value:D,prev:T,next:P};return T.next=F,P.prev=F,b.length++,F}function f(b,T,D){for(var P=T.next,F=0;F<D&&P!==b.tail;F++)P=P.next;T.next=P,P.prev=T,b.length-=F}function A(b){for(var T=[],D=b.head.next;D!==b.tail;)T.push(D.value),D=D.next;return T}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(b){var T=JSON.parse(b.data),D=T.language,P=T.code,F=T.immediateClose;r.postMessage(o.highlight(P,o.languages[D],D)),F&&r.close()},!1)),o;var v=o.util.currentScript();v&&(o.filename=v.src,v.hasAttribute("data-manual")&&(o.manual=!0));function S(){o.manual||o.highlightAll()}if(!o.manual){var E=document.readyState;E==="loading"||E==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return o}(g);C.exports&&(C.exports=a),typeof n.g!="undefined"&&(n.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,d){var l={};l["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[d]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+d]={pattern:/[\s\S]+/,inside:a.languages[d]};var c={};c[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:o},a.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(r,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var d=r.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading\u2026",s=function(v,S){return"\u2716 Error "+v+" while fetching file: "+S},d="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",c="loading",m="loaded",i="failed",y="pre[data-src]:not(["+o+'="'+m+'"]):not(['+o+'="'+c+'"])';function u(v,S,E){var b=new XMLHttpRequest;b.open("GET",v,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?S(b.responseText):b.status>=400?E(s(b.status,b.statusText)):E(d))},b.send(null)}function f(v){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(S){var E=Number(S[1]),b=S[2],T=S[3];return b?T?[E,Number(T)]:[E,void 0]:[E,E]}}a.hooks.add("before-highlightall",function(v){v.selector+=", "+y}),a.hooks.add("before-sanity-check",function(v){var S=v.element;if(S.matches(y)){v.code="",S.setAttribute(o,c);var E=S.appendChild(document.createElement("CODE"));E.textContent=r;var b=S.getAttribute("data-src"),T=v.language;if(T==="none"){var D=(/\.(\w+)$/.exec(b)||[,"none"])[1];T=l[D]||D}a.util.setLanguage(E,T),a.util.setLanguage(S,T);var P=a.plugins.autoloader;P&&P.loadLanguages(T),u(b,function(F){S.setAttribute(o,m);var M=f(S.getAttribute("data-range"));if(M){var _=F.split(/\r\n?|\n/g),R=M[0],j=M[1]==null?_.length:M[1];R<0&&(R+=_.length),R=Math.max(0,Math.min(R-1,_.length)),j<0&&(j+=_.length),j=Math.max(0,Math.min(j,_.length)),F=_.slice(R,j).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(R+1))}E.textContent=F,a.highlightElement(E)},function(F){S.setAttribute(o,i),E.textContent=F})}}),a.plugins.fileHighlight={highlight:function(S){for(var E=(S||document).querySelectorAll(y),b=0,T;T=E[b++];)a.highlightElement(T)}};var A=!1;a.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()},4717:(C,h,n)=>{const g=Symbol("SemVer ANY");class a{static get ANY(){return g}constructor(y,u){if(u=r(u),y instanceof a){if(y.loose===!!u.loose)return y;y=y.value}o("comparator",y,u),this.options=u,this.loose=!!u.loose,this.parse(y),this.semver===g?this.value="":this.value=this.operator+this.semver.version,o("comp",this)}parse(y){const u=this.options.loose?s[d.COMPARATORLOOSE]:s[d.COMPARATOR],f=y.match(u);if(!f)throw new TypeError(`Invalid comparator: ${y}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new c(f[2],this.options.loose):this.semver=g}toString(){return this.value}test(y){if(o("Comparator.test",y,this.options.loose),this.semver===g||y===g)return!0;if(typeof y=="string")try{y=new c(y,this.options)}catch(u){return!1}return l(y,this.operator,this.semver,this.options)}intersects(y,u){if(!(y instanceof a))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new m(y.value,u).test(this.value):y.operator===""?y.value===""?!0:new m(this.value,u).test(y.semver):(u=r(u),u.includePrerelease&&(this.value==="<0.0.0-0"||y.value==="<0.0.0-0")||!u.includePrerelease&&(this.value.startsWith("<0.0.0")||y.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&y.operator.startsWith(">")||this.operator.startsWith("<")&&y.operator.startsWith("<")||this.semver.version===y.semver.version&&this.operator.includes("=")&&y.operator.includes("=")||l(this.semver,"<",y.semver,u)&&this.operator.startsWith(">")&&y.operator.startsWith("<")||l(this.semver,">",y.semver,u)&&this.operator.startsWith("<")&&y.operator.startsWith(">")))}}C.exports=a;const r=n(2230),{re:s,t:d}=n(351),l=n(2239),o=n(3571),c=n(9406),m=n(3989)},3989:(C,h,n)=>{class g{constructor(B,U){if(U=s(U),B instanceof g)return B.loose===!!U.loose&&B.includePrerelease===!!U.includePrerelease?B:new g(B.raw,U);if(B instanceof d)return this.raw=B.value,this.set=[[B]],this.format(),this;if(this.options=U,this.loose=!!U.loose,this.includePrerelease=!!U.includePrerelease,this.raw=B,this.set=B.split("||").map(V=>this.parseRange(V.trim())).filter(V=>V.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${B}`);if(this.set.length>1){const V=this.set[0];if(this.set=this.set.filter(G=>!v(G[0])),this.set.length===0)this.set=[V];else if(this.set.length>1){for(const G of this.set)if(G.length===1&&S(G[0])){this.set=[G];break}}}this.format()}format(){return this.range=this.set.map(B=>B.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(B){B=B.trim();const V=((this.options.includePrerelease&&f)|(this.options.loose&&A))+":"+B,G=r.get(V);if(G)return G;const Q=this.options.loose,se=Q?c[m.HYPHENRANGELOOSE]:c[m.HYPHENRANGE];B=B.replace(se,z(this.options.includePrerelease)),l("hyphen replace",B),B=B.replace(c[m.COMPARATORTRIM],i),l("comparator trim",B),B=B.replace(c[m.TILDETRIM],y),B=B.replace(c[m.CARETTRIM],u),B=B.split(/\s+/).join(" ");let ue=B.split(" ").map(Ce=>b(Ce,this.options)).join(" ").split(/\s+/).map(Ce=>k(Ce,this.options));Q&&(ue=ue.filter(Ce=>(l("loose invalid filter",Ce,this.options),!!Ce.match(c[m.COMPARATORLOOSE])))),l("range list",ue);const Z=new Map,ve=ue.map(Ce=>new d(Ce,this.options));for(const Ce of ve){if(v(Ce))return[Ce];Z.set(Ce.value,Ce)}Z.size>1&&Z.has("")&&Z.delete("");const Ae=[...Z.values()];return r.set(V,Ae),Ae}intersects(B,U){if(!(B instanceof g))throw new TypeError("a Range is required");return this.set.some(V=>E(V,U)&&B.set.some(G=>E(G,U)&&V.every(Q=>G.every(se=>Q.intersects(se,U)))))}test(B){if(!B)return!1;if(typeof B=="string")try{B=new o(B,this.options)}catch(U){return!1}for(let U=0;U<this.set.length;U++)if(H(this.set[U],B,this.options))return!0;return!1}}C.exports=g;const a=n(4028),r=new a({max:1e3}),s=n(2230),d=n(4717),l=n(3571),o=n(9406),{re:c,t:m,comparatorTrimReplace:i,tildeTrimReplace:y,caretTrimReplace:u}=n(351),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:A}=n(2470),v=L=>L.value==="<0.0.0-0",S=L=>L.value==="",E=(L,B)=>{let U=!0;const V=L.slice();let G=V.pop();for(;U&&V.length;)U=V.every(Q=>G.intersects(Q,B)),G=V.pop();return U},b=(L,B)=>(l("comp",L,B),L=F(L,B),l("caret",L),L=D(L,B),l("tildes",L),L=_(L,B),l("xrange",L),L=j(L,B),l("stars",L),L),T=L=>!L||L.toLowerCase()==="x"||L==="*",D=(L,B)=>L.trim().split(/\s+/).map(U=>P(U,B)).join(" "),P=(L,B)=>{const U=B.loose?c[m.TILDELOOSE]:c[m.TILDE];return L.replace(U,(V,G,Q,se,ue)=>{l("tilde",L,V,G,Q,se,ue);let Z;return T(G)?Z="":T(Q)?Z=`>=${G}.0.0 <${+G+1}.0.0-0`:T(se)?Z=`>=${G}.${Q}.0 <${G}.${+Q+1}.0-0`:ue?(l("replaceTilde pr",ue),Z=`>=${G}.${Q}.${se}-${ue} <${G}.${+Q+1}.0-0`):Z=`>=${G}.${Q}.${se} <${G}.${+Q+1}.0-0`,l("tilde return",Z),Z})},F=(L,B)=>L.trim().split(/\s+/).map(U=>M(U,B)).join(" "),M=(L,B)=>{l("caret",L,B);const U=B.loose?c[m.CARETLOOSE]:c[m.CARET],V=B.includePrerelease?"-0":"";return L.replace(U,(G,Q,se,ue,Z)=>{l("caret",L,G,Q,se,ue,Z);let ve;return T(Q)?ve="":T(se)?ve=`>=${Q}.0.0${V} <${+Q+1}.0.0-0`:T(ue)?Q==="0"?ve=`>=${Q}.${se}.0${V} <${Q}.${+se+1}.0-0`:ve=`>=${Q}.${se}.0${V} <${+Q+1}.0.0-0`:Z?(l("replaceCaret pr",Z),Q==="0"?se==="0"?ve=`>=${Q}.${se}.${ue}-${Z} <${Q}.${se}.${+ue+1}-0`:ve=`>=${Q}.${se}.${ue}-${Z} <${Q}.${+se+1}.0-0`:ve=`>=${Q}.${se}.${ue}-${Z} <${+Q+1}.0.0-0`):(l("no pr"),Q==="0"?se==="0"?ve=`>=${Q}.${se}.${ue}${V} <${Q}.${se}.${+ue+1}-0`:ve=`>=${Q}.${se}.${ue}${V} <${Q}.${+se+1}.0-0`:ve=`>=${Q}.${se}.${ue} <${+Q+1}.0.0-0`),l("caret return",ve),ve})},_=(L,B)=>(l("replaceXRanges",L,B),L.split(/\s+/).map(U=>R(U,B)).join(" ")),R=(L,B)=>{L=L.trim();const U=B.loose?c[m.XRANGELOOSE]:c[m.XRANGE];return L.replace(U,(V,G,Q,se,ue,Z)=>{l("xRange",L,V,G,Q,se,ue,Z);const ve=T(Q),Ae=ve||T(se),Ce=Ae||T(ue),Qe=Ce;return G==="="&&Qe&&(G=""),Z=B.includePrerelease?"-0":"",ve?G===">"||G==="<"?V="<0.0.0-0":V="*":G&&Qe?(Ae&&(se=0),ue=0,G===">"?(G=">=",Ae?(Q=+Q+1,se=0,ue=0):(se=+se+1,ue=0)):G==="<="&&(G="<",Ae?Q=+Q+1:se=+se+1),G==="<"&&(Z="-0"),V=`${G+Q}.${se}.${ue}${Z}`):Ae?V=`>=${Q}.0.0${Z} <${+Q+1}.0.0-0`:Ce&&(V=`>=${Q}.${se}.0${Z} <${Q}.${+se+1}.0-0`),l("xRange return",V),V})},j=(L,B)=>(l("replaceStars",L,B),L.trim().replace(c[m.STAR],"")),k=(L,B)=>(l("replaceGTE0",L,B),L.trim().replace(c[B.includePrerelease?m.GTE0PRE:m.GTE0],"")),z=L=>(B,U,V,G,Q,se,ue,Z,ve,Ae,Ce,Qe,yt)=>(T(V)?U="":T(G)?U=`>=${V}.0.0${L?"-0":""}`:T(Q)?U=`>=${V}.${G}.0${L?"-0":""}`:se?U=`>=${U}`:U=`>=${U}${L?"-0":""}`,T(ve)?Z="":T(Ae)?Z=`<${+ve+1}.0.0-0`:T(Ce)?Z=`<${ve}.${+Ae+1}.0-0`:Qe?Z=`<=${ve}.${Ae}.${Ce}-${Qe}`:L?Z=`<${ve}.${Ae}.${+Ce+1}-0`:Z=`<=${Z}`,`${U} ${Z}`.trim()),H=(L,B,U)=>{for(let V=0;V<L.length;V++)if(!L[V].test(B))return!1;if(B.prerelease.length&&!U.includePrerelease){for(let V=0;V<L.length;V++)if(l(L[V].semver),L[V].semver!==d.ANY&&L[V].semver.prerelease.length>0){const G=L[V].semver;if(G.major===B.major&&G.minor===B.minor&&G.patch===B.patch)return!0}return!1}return!0}},9406:(C,h,n)=>{const g=n(3571),{MAX_LENGTH:a,MAX_SAFE_INTEGER:r}=n(2470),{re:s,t:d}=n(351),l=n(2230),{compareIdentifiers:o}=n(1899);class c{constructor(i,y){if(y=l(y),i instanceof c){if(i.loose===!!y.loose&&i.includePrerelease===!!y.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof i}".`);if(i.length>a)throw new TypeError(`version is longer than ${a} characters`);g("SemVer",i,y),this.options=y,this.loose=!!y.loose,this.includePrerelease=!!y.includePrerelease;const u=i.trim().match(y.loose?s[d.LOOSE]:s[d.FULL]);if(!u)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>r||this.major<0)throw new TypeError("Invalid major version");if(this.minor>r||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>r||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const A=+f;if(A>=0&&A<r)return A}return f}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(g("SemVer.compare",this.version,this.options,i),!(i instanceof c)){if(typeof i=="string"&&i===this.version)return 0;i=new c(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof c||(i=new c(i,this.options)),o(this.major,i.major)||o(this.minor,i.minor)||o(this.patch,i.patch)}comparePre(i){if(i instanceof c||(i=new c(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let y=0;do{const u=this.prerelease[y],f=i.prerelease[y];if(g("prerelease compare",y,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return o(u,f)}while(++y)}compareBuild(i){i instanceof c||(i=new c(i,this.options));let y=0;do{const u=this.build[y],f=i.build[y];if(g("prerelease compare",y,u,f),u===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(u===void 0)return-1;if(u===f)continue;return o(u,f)}while(++y)}inc(i,y,u){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",y,u);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",y,u);break;case"prepatch":this.prerelease.length=0,this.inc("patch",y,u),this.inc("pre",y,u);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",y,u),this.inc("pre",y,u);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const f=Number(u)?1:0;if(!y&&u===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[f];else{let A=this.prerelease.length;for(;--A>=0;)typeof this.prerelease[A]=="number"&&(this.prerelease[A]++,A=-2);if(A===-1){if(y===this.prerelease.join(".")&&u===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(f)}}if(y){let A=[y,f];u===!1&&(A=[y]),o(this.prerelease[0],y)===0?isNaN(this.prerelease[1])&&(this.prerelease=A):this.prerelease=A}break}default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}C.exports=c},3203:(C,h,n)=>{const g=n(7075),a=(r,s)=>{const d=g(r.trim().replace(/^[=v]+/,""),s);return d?d.version:null};C.exports=a},2239:(C,h,n)=>{const g=n(4121),a=n(6702),r=n(8716),s=n(8638),d=n(4859),l=n(641),o=(c,m,i,y)=>{switch(m){case"===":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c===i;case"!==":return typeof c=="object"&&(c=c.version),typeof i=="object"&&(i=i.version),c!==i;case"":case"=":case"==":return g(c,i,y);case"!=":return a(c,i,y);case">":return r(c,i,y);case">=":return s(c,i,y);case"<":return d(c,i,y);case"<=":return l(c,i,y);default:throw new TypeError(`Invalid operator: ${m}`)}};C.exports=o},7220:(C,h,n)=>{const g=n(9406),a=n(7075),{re:r,t:s}=n(351),d=(l,o)=>{if(l instanceof g)return l;if(typeof l=="number"&&(l=String(l)),typeof l!="string")return null;o=o||{};let c=null;if(!o.rtl)c=l.match(r[s.COERCE]);else{let m;for(;(m=r[s.COERCERTL].exec(l))&&(!c||c.index+c[0].length!==l.length);)(!c||m.index+m[0].length!==c.index+c[0].length)&&(c=m),r[s.COERCERTL].lastIndex=m.index+m[1].length+m[2].length;r[s.COERCERTL].lastIndex=-1}return c===null?null:a(`${c[2]}.${c[3]||"0"}.${c[4]||"0"}`,o)};C.exports=d},3587:(C,h,n)=>{const g=n(9406),a=(r,s,d)=>{const l=new g(r,d),o=new g(s,d);return l.compare(o)||l.compareBuild(o)};C.exports=a},4551:(C,h,n)=>{const g=n(7585),a=(r,s)=>g(r,s,!0);C.exports=a},7585:(C,h,n)=>{const g=n(9406),a=(r,s,d)=>new g(r,d).compare(new g(s,d));C.exports=a},8765:(C,h,n)=>{const g=n(7075),a=(r,s)=>{const d=g(r,null,!0),l=g(s,null,!0),o=d.compare(l);if(o===0)return null;const c=o>0,m=c?d:l,i=c?l:d,y=!!m.prerelease.length,u=y?"pre":"";return d.major!==l.major?u+"major":d.minor!==l.minor?u+"minor":d.patch!==l.patch?u+"patch":y?"prerelease":i.patch?"patch":i.minor?"minor":"major"};C.exports=a},4121:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(r,s,d)===0;C.exports=a},8716:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(r,s,d)>0;C.exports=a},8638:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(r,s,d)>=0;C.exports=a},5738:(C,h,n)=>{const g=n(9406),a=(r,s,d,l,o)=>{typeof d=="string"&&(o=l,l=d,d=void 0);try{return new g(r instanceof g?r.version:r,d).inc(s,l,o).version}catch(c){return null}};C.exports=a},4859:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(r,s,d)<0;C.exports=a},641:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(r,s,d)<=0;C.exports=a},7492:(C,h,n)=>{const g=n(9406),a=(r,s)=>new g(r,s).major;C.exports=a},328:(C,h,n)=>{const g=n(9406),a=(r,s)=>new g(r,s).minor;C.exports=a},6702:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(r,s,d)!==0;C.exports=a},7075:(C,h,n)=>{const g=n(9406),a=(r,s,d=!1)=>{if(r instanceof g)return r;try{return new g(r,s)}catch(l){if(!d)return null;throw l}};C.exports=a},3024:(C,h,n)=>{const g=n(9406),a=(r,s)=>new g(r,s).patch;C.exports=a},2139:(C,h,n)=>{const g=n(7075),a=(r,s)=>{const d=g(r,s);return d&&d.prerelease.length?d.prerelease:null};C.exports=a},306:(C,h,n)=>{const g=n(7585),a=(r,s,d)=>g(s,r,d);C.exports=a},5360:(C,h,n)=>{const g=n(3587),a=(r,s)=>r.sort((d,l)=>g(l,d,s));C.exports=a},4140:(C,h,n)=>{const g=n(3989),a=(r,s,d)=>{try{s=new g(s,d)}catch(l){return!1}return s.test(r)};C.exports=a},1736:(C,h,n)=>{const g=n(3587),a=(r,s)=>r.sort((d,l)=>g(d,l,s));C.exports=a},9021:(C,h,n)=>{const g=n(7075),a=(r,s)=>{const d=g(r,s);return d?d.version:null};C.exports=a},2252:(C,h,n)=>{const g=n(351),a=n(2470),r=n(9406),s=n(1899),d=n(7075),l=n(9021),o=n(3203),c=n(5738),m=n(8765),i=n(7492),y=n(328),u=n(3024),f=n(2139),A=n(7585),v=n(306),S=n(4551),E=n(3587),b=n(1736),T=n(5360),D=n(8716),P=n(4859),F=n(4121),M=n(6702),_=n(8638),R=n(641),j=n(2239),k=n(7220),z=n(4717),H=n(3989),L=n(4140),B=n(8815),U=n(5843),V=n(736),G=n(7508),Q=n(4168),se=n(4996),ue=n(7118),Z=n(4290),ve=n(9460),Ae=n(3194),Ce=n(3712);C.exports={parse:d,valid:l,clean:o,inc:c,diff:m,major:i,minor:y,patch:u,prerelease:f,compare:A,rcompare:v,compareLoose:S,compareBuild:E,sort:b,rsort:T,gt:D,lt:P,eq:F,neq:M,gte:_,lte:R,cmp:j,coerce:k,Comparator:z,Range:H,satisfies:L,toComparators:B,maxSatisfying:U,minSatisfying:V,minVersion:G,validRange:Q,outside:se,gtr:ue,ltr:Z,intersects:ve,simplifyRange:Ae,subset:Ce,SemVer:r,re:g.re,src:g.src,tokens:g.t,SEMVER_SPEC_VERSION:a.SEMVER_SPEC_VERSION,RELEASE_TYPES:a.RELEASE_TYPES,compareIdentifiers:s.compareIdentifiers,rcompareIdentifiers:s.rcompareIdentifiers}},2470:C=>{const h="2.0.0",g=Number.MAX_SAFE_INTEGER||9007199254740991,a=16,r=["major","premajor","minor","preminor","patch","prepatch","prerelease"];C.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:a,MAX_SAFE_INTEGER:g,RELEASE_TYPES:r,SEMVER_SPEC_VERSION:h,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},3571:C=>{const h=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...n)=>console.error("SEMVER",...n):()=>{};C.exports=h},1899:C=>{const h=/^[0-9]+$/,n=(a,r)=>{const s=h.test(a),d=h.test(r);return s&&d&&(a=+a,r=+r),a===r?0:s&&!d?-1:d&&!s?1:a<r?-1:1},g=(a,r)=>n(r,a);C.exports={compareIdentifiers:n,rcompareIdentifiers:g}},2230:C=>{const h=Object.freeze({loose:!0}),n=Object.freeze({}),g=a=>a?typeof a!="object"?h:a:n;C.exports=g},351:(C,h,n)=>{const{MAX_SAFE_COMPONENT_LENGTH:g}=n(2470),a=n(3571);h=C.exports={};const r=h.re=[],s=h.src=[],d=h.t={};let l=0;const o=(c,m,i)=>{const y=l++;a(c,y,m),d[c]=y,s[y]=m,r[y]=new RegExp(m,i?"g":void 0)};o("NUMERICIDENTIFIER","0|[1-9]\\d*"),o("NUMERICIDENTIFIERLOOSE","[0-9]+"),o("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),o("MAINVERSION",`(${s[d.NUMERICIDENTIFIER]})\\.(${s[d.NUMERICIDENTIFIER]})\\.(${s[d.NUMERICIDENTIFIER]})`),o("MAINVERSIONLOOSE",`(${s[d.NUMERICIDENTIFIERLOOSE]})\\.(${s[d.NUMERICIDENTIFIERLOOSE]})\\.(${s[d.NUMERICIDENTIFIERLOOSE]})`),o("PRERELEASEIDENTIFIER",`(?:${s[d.NUMERICIDENTIFIER]}|${s[d.NONNUMERICIDENTIFIER]})`),o("PRERELEASEIDENTIFIERLOOSE",`(?:${s[d.NUMERICIDENTIFIERLOOSE]}|${s[d.NONNUMERICIDENTIFIER]})`),o("PRERELEASE",`(?:-(${s[d.PRERELEASEIDENTIFIER]}(?:\\.${s[d.PRERELEASEIDENTIFIER]})*))`),o("PRERELEASELOOSE",`(?:-?(${s[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[d.PRERELEASEIDENTIFIERLOOSE]})*))`),o("BUILDIDENTIFIER","[0-9A-Za-z-]+"),o("BUILD",`(?:\\+(${s[d.BUILDIDENTIFIER]}(?:\\.${s[d.BUILDIDENTIFIER]})*))`),o("FULLPLAIN",`v?${s[d.MAINVERSION]}${s[d.PRERELEASE]}?${s[d.BUILD]}?`),o("FULL",`^${s[d.FULLPLAIN]}$`),o("LOOSEPLAIN",`[v=\\s]*${s[d.MAINVERSIONLOOSE]}${s[d.PRERELEASELOOSE]}?${s[d.BUILD]}?`),o("LOOSE",`^${s[d.LOOSEPLAIN]}$`),o("GTLT","((?:<|>)?=?)"),o("XRANGEIDENTIFIERLOOSE",`${s[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),o("XRANGEIDENTIFIER",`${s[d.NUMERICIDENTIFIER]}|x|X|\\*`),o("XRANGEPLAIN",`[v=\\s]*(${s[d.XRANGEIDENTIFIER]})(?:\\.(${s[d.XRANGEIDENTIFIER]})(?:\\.(${s[d.XRANGEIDENTIFIER]})(?:${s[d.PRERELEASE]})?${s[d.BUILD]}?)?)?`),o("XRANGEPLAINLOOSE",`[v=\\s]*(${s[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[d.XRANGEIDENTIFIERLOOSE]})(?:${s[d.PRERELEASELOOSE]})?${s[d.BUILD]}?)?)?`),o("XRANGE",`^${s[d.GTLT]}\\s*${s[d.XRANGEPLAIN]}$`),o("XRANGELOOSE",`^${s[d.GTLT]}\\s*${s[d.XRANGEPLAINLOOSE]}$`),o("COERCE",`(^|[^\\d])(\\d{1,${g}})(?:\\.(\\d{1,${g}}))?(?:\\.(\\d{1,${g}}))?(?:$|[^\\d])`),o("COERCERTL",s[d.COERCE],!0),o("LONETILDE","(?:~>?)"),o("TILDETRIM",`(\\s*)${s[d.LONETILDE]}\\s+`,!0),h.tildeTrimReplace="$1~",o("TILDE",`^${s[d.LONETILDE]}${s[d.XRANGEPLAIN]}$`),o("TILDELOOSE",`^${s[d.LONETILDE]}${s[d.XRANGEPLAINLOOSE]}$`),o("LONECARET","(?:\\^)"),o("CARETTRIM",`(\\s*)${s[d.LONECARET]}\\s+`,!0),h.caretTrimReplace="$1^",o("CARET",`^${s[d.LONECARET]}${s[d.XRANGEPLAIN]}$`),o("CARETLOOSE",`^${s[d.LONECARET]}${s[d.XRANGEPLAINLOOSE]}$`),o("COMPARATORLOOSE",`^${s[d.GTLT]}\\s*(${s[d.LOOSEPLAIN]})$|^$`),o("COMPARATOR",`^${s[d.GTLT]}\\s*(${s[d.FULLPLAIN]})$|^$`),o("COMPARATORTRIM",`(\\s*)${s[d.GTLT]}\\s*(${s[d.LOOSEPLAIN]}|${s[d.XRANGEPLAIN]})`,!0),h.comparatorTrimReplace="$1$2$3",o("HYPHENRANGE",`^\\s*(${s[d.XRANGEPLAIN]})\\s+-\\s+(${s[d.XRANGEPLAIN]})\\s*$`),o("HYPHENRANGELOOSE",`^\\s*(${s[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[d.XRANGEPLAINLOOSE]})\\s*$`),o("STAR","(<|>)?=?\\s*\\*"),o("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),o("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},7118:(C,h,n)=>{const g=n(4996),a=(r,s,d)=>g(r,s,">",d);C.exports=a},9460:(C,h,n)=>{const g=n(3989),a=(r,s,d)=>(r=new g(r,d),s=new g(s,d),r.intersects(s,d));C.exports=a},4290:(C,h,n)=>{const g=n(4996),a=(r,s,d)=>g(r,s,"<",d);C.exports=a},5843:(C,h,n)=>{const g=n(9406),a=n(3989),r=(s,d,l)=>{let o=null,c=null,m=null;try{m=new a(d,l)}catch(i){return null}return s.forEach(i=>{m.test(i)&&(!o||c.compare(i)===-1)&&(o=i,c=new g(o,l))}),o};C.exports=r},736:(C,h,n)=>{const g=n(9406),a=n(3989),r=(s,d,l)=>{let o=null,c=null,m=null;try{m=new a(d,l)}catch(i){return null}return s.forEach(i=>{m.test(i)&&(!o||c.compare(i)===1)&&(o=i,c=new g(o,l))}),o};C.exports=r},7508:(C,h,n)=>{const g=n(9406),a=n(3989),r=n(8716),s=(d,l)=>{d=new a(d,l);let o=new g("0.0.0");if(d.test(o)||(o=new g("0.0.0-0"),d.test(o)))return o;o=null;for(let c=0;c<d.set.length;++c){const m=d.set[c];let i=null;m.forEach(y=>{const u=new g(y.semver.version);switch(y.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!i||r(u,i))&&(i=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${y.operator}`)}}),i&&(!o||r(o,i))&&(o=i)}return o&&d.test(o)?o:null};C.exports=s},4996:(C,h,n)=>{const g=n(9406),a=n(4717),{ANY:r}=a,s=n(3989),d=n(4140),l=n(8716),o=n(4859),c=n(641),m=n(8638),i=(y,u,f,A)=>{y=new g(y,A),u=new s(u,A);let v,S,E,b,T;switch(f){case">":v=l,S=c,E=o,b=">",T=">=";break;case"<":v=o,S=m,E=l,b="<",T="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(d(y,u,A))return!1;for(let D=0;D<u.set.length;++D){const P=u.set[D];let F=null,M=null;if(P.forEach(_=>{_.semver===r&&(_=new a(">=0.0.0")),F=F||_,M=M||_,v(_.semver,F.semver,A)?F=_:E(_.semver,M.semver,A)&&(M=_)}),F.operator===b||F.operator===T||(!M.operator||M.operator===b)&&S(y,M.semver))return!1;if(M.operator===T&&E(y,M.semver))return!1}return!0};C.exports=i},3194:(C,h,n)=>{const g=n(4140),a=n(7585);C.exports=(r,s,d)=>{const l=[];let o=null,c=null;const m=r.sort((f,A)=>a(f,A,d));for(const f of m)g(f,s,d)?(c=f,o||(o=f)):(c&&l.push([o,c]),c=null,o=null);o&&l.push([o,null]);const i=[];for(const[f,A]of l)f===A?i.push(f):!A&&f===m[0]?i.push("*"):A?f===m[0]?i.push(`<=${A}`):i.push(`${f} - ${A}`):i.push(`>=${f}`);const y=i.join(" || "),u=typeof s.raw=="string"?s.raw:String(s);return y.length<u.length?y:s}},3712:(C,h,n)=>{const g=n(3989),a=n(4717),{ANY:r}=a,s=n(4140),d=n(7585),l=(u,f,A={})=>{if(u===f)return!0;u=new g(u,A),f=new g(f,A);let v=!1;e:for(const S of u.set){for(const E of f.set){const b=m(S,E,A);if(v=v||b!==null,b)continue e}if(v)return!1}return!0},o=[new a(">=0.0.0-0")],c=[new a(">=0.0.0")],m=(u,f,A)=>{if(u===f)return!0;if(u.length===1&&u[0].semver===r){if(f.length===1&&f[0].semver===r)return!0;A.includePrerelease?u=o:u=c}if(f.length===1&&f[0].semver===r){if(A.includePrerelease)return!0;f=c}const v=new Set;let S,E;for(const R of u)R.operator===">"||R.operator===">="?S=i(S,R,A):R.operator==="<"||R.operator==="<="?E=y(E,R,A):v.add(R.semver);if(v.size>1)return null;let b;if(S&&E){if(b=d(S.semver,E.semver,A),b>0)return null;if(b===0&&(S.operator!==">="||E.operator!=="<="))return null}for(const R of v){if(S&&!s(R,String(S),A)||E&&!s(R,String(E),A))return null;for(const j of f)if(!s(R,String(j),A))return!1;return!0}let T,D,P,F,M=E&&!A.includePrerelease&&E.semver.prerelease.length?E.semver:!1,_=S&&!A.includePrerelease&&S.semver.prerelease.length?S.semver:!1;M&&M.prerelease.length===1&&E.operator==="<"&&M.prerelease[0]===0&&(M=!1);for(const R of f){if(F=F||R.operator===">"||R.operator===">=",P=P||R.operator==="<"||R.operator==="<=",S){if(_&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===_.major&&R.semver.minor===_.minor&&R.semver.patch===_.patch&&(_=!1),R.operator===">"||R.operator===">="){if(T=i(S,R,A),T===R&&T!==S)return!1}else if(S.operator===">="&&!s(S.semver,String(R),A))return!1}if(E){if(M&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===M.major&&R.semver.minor===M.minor&&R.semver.patch===M.patch&&(M=!1),R.operator==="<"||R.operator==="<="){if(D=y(E,R,A),D===R&&D!==E)return!1}else if(E.operator==="<="&&!s(E.semver,String(R),A))return!1}if(!R.operator&&(E||S)&&b!==0)return!1}return!(S&&P&&!E&&b!==0||E&&F&&!S&&b!==0||_||M)},i=(u,f,A)=>{if(!u)return f;const v=d(u.semver,f.semver,A);return v>0?u:v<0||f.operator===">"&&u.operator===">="?f:u},y=(u,f,A)=>{if(!u)return f;const v=d(u.semver,f.semver,A);return v<0?u:v>0||f.operator==="<"&&u.operator==="<="?f:u};C.exports=l},8815:(C,h,n)=>{const g=n(3989),a=(r,s)=>new g(r,s).set.map(d=>d.map(l=>l.value).join(" ").trim().split(" "));C.exports=a},4168:(C,h,n)=>{const g=n(3989),a=(r,s)=>{try{return new g(r,s).range||"*"}catch(d){return null}};C.exports=a},2412:C=>{"use strict";C.exports=function(h){h.prototype[Symbol.iterator]=function*(){for(let n=this.head;n;n=n.next)yield n.value}}},6214:(C,h,n)=>{"use strict";C.exports=g,g.Node=d,g.create=g;function g(l){var o=this;if(o instanceof g||(o=new g),o.tail=null,o.head=null,o.length=0,l&&typeof l.forEach=="function")l.forEach(function(i){o.push(i)});else if(arguments.length>0)for(var c=0,m=arguments.length;c<m;c++)o.push(arguments[c]);return o}g.prototype.removeNode=function(l){if(l.list!==this)throw new Error("removing node which does not belong to this list");var o=l.next,c=l.prev;return o&&(o.prev=c),c&&(c.next=o),l===this.head&&(this.head=o),l===this.tail&&(this.tail=c),l.list.length--,l.next=null,l.prev=null,l.list=null,o},g.prototype.unshiftNode=function(l){if(l!==this.head){l.list&&l.list.removeNode(l);var o=this.head;l.list=this,l.next=o,o&&(o.prev=l),this.head=l,this.tail||(this.tail=l),this.length++}},g.prototype.pushNode=function(l){if(l!==this.tail){l.list&&l.list.removeNode(l);var o=this.tail;l.list=this,l.prev=o,o&&(o.next=l),this.tail=l,this.head||(this.head=l),this.length++}},g.prototype.push=function(){for(var l=0,o=arguments.length;l<o;l++)r(this,arguments[l]);return this.length},g.prototype.unshift=function(){for(var l=0,o=arguments.length;l<o;l++)s(this,arguments[l]);return this.length},g.prototype.pop=function(){if(this.tail){var l=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,l}},g.prototype.shift=function(){if(this.head){var l=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,l}},g.prototype.forEach=function(l,o){o=o||this;for(var c=this.head,m=0;c!==null;m++)l.call(o,c.value,m,this),c=c.next},g.prototype.forEachReverse=function(l,o){o=o||this;for(var c=this.tail,m=this.length-1;c!==null;m--)l.call(o,c.value,m,this),c=c.prev},g.prototype.get=function(l){for(var o=0,c=this.head;c!==null&&o<l;o++)c=c.next;if(o===l&&c!==null)return c.value},g.prototype.getReverse=function(l){for(var o=0,c=this.tail;c!==null&&o<l;o++)c=c.prev;if(o===l&&c!==null)return c.value},g.prototype.map=function(l,o){o=o||this;for(var c=new g,m=this.head;m!==null;)c.push(l.call(o,m.value,this)),m=m.next;return c},g.prototype.mapReverse=function(l,o){o=o||this;for(var c=new g,m=this.tail;m!==null;)c.push(l.call(o,m.value,this)),m=m.prev;return c},g.prototype.reduce=function(l,o){var c,m=this.head;if(arguments.length>1)c=o;else if(this.head)m=this.head.next,c=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;m!==null;i++)c=l(c,m.value,i),m=m.next;return c},g.prototype.reduceReverse=function(l,o){var c,m=this.tail;if(arguments.length>1)c=o;else if(this.tail)m=this.tail.prev,c=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;m!==null;i--)c=l(c,m.value,i),m=m.prev;return c},g.prototype.toArray=function(){for(var l=new Array(this.length),o=0,c=this.head;c!==null;o++)l[o]=c.value,c=c.next;return l},g.prototype.toArrayReverse=function(){for(var l=new Array(this.length),o=0,c=this.tail;c!==null;o++)l[o]=c.value,c=c.prev;return l},g.prototype.slice=function(l,o){o=o||this.length,o<0&&(o+=this.length),l=l||0,l<0&&(l+=this.length);var c=new g;if(o<l||o<0)return c;l<0&&(l=0),o>this.length&&(o=this.length);for(var m=0,i=this.head;i!==null&&m<l;m++)i=i.next;for(;i!==null&&m<o;m++,i=i.next)c.push(i.value);return c},g.prototype.sliceReverse=function(l,o){o=o||this.length,o<0&&(o+=this.length),l=l||0,l<0&&(l+=this.length);var c=new g;if(o<l||o<0)return c;l<0&&(l=0),o>this.length&&(o=this.length);for(var m=this.length,i=this.tail;i!==null&&m>o;m--)i=i.prev;for(;i!==null&&m>l;m--,i=i.prev)c.push(i.value);return c},g.prototype.splice=function(l,o,...c){l>this.length&&(l=this.length-1),l<0&&(l=this.length+l);for(var m=0,i=this.head;i!==null&&m<l;m++)i=i.next;for(var y=[],m=0;i&&m<o;m++)y.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var m=0;m<c.length;m++)i=a(this,i,c[m]);return y},g.prototype.reverse=function(){for(var l=this.head,o=this.tail,c=l;c!==null;c=c.prev){var m=c.prev;c.prev=c.next,c.next=m}return this.head=o,this.tail=l,this};function a(l,o,c){var m=o===l.head?new d(c,null,o,l):new d(c,o,o.next,l);return m.next===null&&(l.tail=m),m.prev===null&&(l.head=m),l.length++,m}function r(l,o){l.tail=new d(o,l.tail,null,l),l.head||(l.head=l.tail),l.length++}function s(l,o){l.head=new d(o,null,l.head,l),l.tail||(l.tail=l.head),l.length++}function d(l,o,c,m){if(!(this instanceof d))return new d(l,o,c,m);this.list=m,this.value=l,o?(o.next=this,this.prev=o):this.prev=null,c?(c.prev=this,this.next=c):this.next=null}try{n(2412)(g)}catch(l){}}},On={};function tt(C){var h=On[C];if(h!==void 0)return h.exports;var n=On[C]={id:C,loaded:!1,exports:{}};return Zs[C].call(n.exports,n,n.exports,tt),n.loaded=!0,n.exports}tt.n=C=>{var h=C&&C.__esModule?()=>C.default:()=>C;return tt.d(h,{a:h}),h},tt.d=(C,h)=>{for(var n in h)tt.o(h,n)&&!tt.o(C,n)&&Object.defineProperty(C,n,{enumerable:!0,get:h[n]})},tt.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(C){if(typeof window=="object")return window}}(),tt.o=(C,h)=>Object.prototype.hasOwnProperty.call(C,h),tt.nmd=C=>(C.paths=[],C.children||(C.children=[]),C);var om={};(()=>{var rt;"use strict";var C=tt(6618),h=tt.n(C),n=tt(4862),g=tt(2252),a=tt.n(g),r=tt(2327),s=tt.n(r),d=tt(7376),l=tt(3343),o=tt(394),c=tt(1444),m=tt(5940),i=tt(3066),y=tt.n(i),u=tt(7446),f=tt(7037),A=tt(714),v=tt(293),S=tt(8070),E=tt(3129),b=tt(5170),T=tt(1932);class D{hydrate(de,Pe){const Te=new URL(de,typeof window=="undefined"?"https://dummy.base":window.location.origin),X={};Te.pathname.split("/").forEach((ye,fe)=>{if(ye.charAt(0)===":"){const me=ye.slice(1);typeof Pe[me]!="undefined"&&(Te.pathname=Te.pathname.replace(ye,encodeURIComponent(Pe[me])),X[me]=Pe[me])}});for(const ye in Pe)(typeof X[ye]=="undefined"||Te.searchParams.has(ye))&&Te.searchParams.set(ye,Pe[ye]);return Te.toString()}}function P(){h()(".sample-request-send").off("click"),h()(".sample-request-send").on("click",function(Me){Me.preventDefault();const de=h()(this).parents("article"),Pe=de.data("group"),Te=de.data("name"),X=de.data("version");R(Pe,Te,X,h()(this).data("type"))}),h()(".sample-request-clear").off("click"),h()(".sample-request-clear").on("click",function(Me){Me.preventDefault();const de=h()(this).parents("article"),Pe=de.data("group"),Te=de.data("name"),X=de.data("version");j(Pe,Te,X)})}function F(Me){return Me.replace(/{(.+?)}/g,":$1")}function M(Me,de){const Pe=Me.find(".sample-request-url").val(),Te=new D,X=F(Pe);return Te.hydrate(X,de)}function _(Me){const de={};["header","query","body"].forEach(Te=>{const X={};try{Me.find(h()(`[data-family="${Te}"]:visible`)).each((ye,fe)=>{const me=fe.dataset.name;let je=fe.value;if(fe.type==="checkbox")if(fe.checked)je="on";else return!0;if(!je&&!fe.dataset.optional&&fe.type!=="checkbox")return h()(fe).addClass("border-danger"),!0;X[me]=je})}catch(ye){return}de[Te]=X});const Pe=Me.find(h()('[data-family="body-json"]'));return Pe.is(":visible")?(de.body=Pe.val(),de.header["Content-Type"]="application/json"):de.header["Content-Type"]="multipart/form-data",de}function R(Me,de,Pe,Te){const X=h()(`article[data-group="${Me}"][data-name="${de}"][data-version="${Pe}"]`),ye=_(X),fe={};if(fe.url=M(X,ye.query),fe.headers=ye.header,fe.headers["Content-Type"]==="application/json")fe.data=ye.body;else if(fe.headers["Content-Type"]==="multipart/form-data"){const Be=new FormData;for(const[Ue,$e]of Object.entries(ye.body))Be.append(Ue,$e);fe.data=Be,fe.processData=!1,delete fe.headers["Content-Type"],fe.contentType=!1}fe.type=Te,fe.success=me,fe.error=je,h().ajax(fe),X.find(".sample-request-response").fadeTo(200,1),X.find(".sample-request-response-json").html("Loading...");function me(Be,Ue,$e){let Je;try{Je=JSON.parse($e.responseText),Je=JSON.stringify(Je,null,4)}catch(ot){Je=$e.responseText}X.find(".sample-request-response-json").text(Je),y().highlightAll()}function je(Be,Ue,$e){let Je="Error "+Be.status+": "+$e,ot;try{ot=JSON.parse(Be.responseText),ot=JSON.stringify(ot,null,4)}catch(ut){ot=Be.responseText}ot&&(Je+=`
`+ot),X.find(".sample-request-response").is(":visible")&&X.find(".sample-request-response").fadeTo(1,.1),X.find(".sample-request-response").fadeTo(250,1),X.find(".sample-request-response-json").text(Je),y().highlightAll()}}function j(Me,de,Pe){const Te=h()('article[data-group="'+Me+'"][data-name="'+de+'"][data-version="'+Pe+'"]');Te.find(".sample-request-response-json").html(""),Te.find(".sample-request-response").hide(),Te.find(".sample-request-input").each((ye,fe)=>{fe.value=fe.placeholder!==fe.dataset.name?fe.placeholder:""});const X=Te.find(".sample-request-url");X.val(X.prop("defaultValue"))}const k={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:","Toggle navigation":"Canvia la navegaci\xF3",Type:"Tipus",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Premeu Ctrl+C per copiar","copied!":"Copiat!"},z={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:","Toggle navigation":"P\u0159epnout navigaci",Type:"Typ",url:"url",Copy:"Kop\xEDrovat","Press Ctrl+C to copy":"Stisknut\xEDm kombinace kl\xE1ves Ctrl+C zkop\xEDrujte","copied!":"Zkop\xEDrovan\xFD!"},H={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:","Toggle navigation":"Navigation ein-/ausblenden",Type:"Typ",url:"url",Copy:"Kopieren","Press Ctrl+C to copy":"Dr\xFCcken Sie Ctrl+C zum kopieren","Copied!":"Kopiert!"},L={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:","Toggle navigation":"Alternar navegaci\xF3n",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Presione Ctrl+C para copiar","copied!":"\xA1Copiado!"},B={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :","Toggle navigation":"Basculer la navigation",Type:"Type",url:"url",Copy:"Copier","Press Ctrl+C to copy":"Appuyez sur Ctrl+C pour copier","copied!":"Copi\xE9!"},U={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:","Toggle navigation":"Attiva/disattiva la navigazione",Type:"Tipo",url:"url",Copy:"Copiare","Press Ctrl+C to copy":"Premere CTRL+C per copiare","copied!":"Copiato!"},V={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:","Toggle navigation":"Navigatie in-/uitschakelen",Type:"Type",url:"url",Copy:"Kopi\xEBren","Press Ctrl+C to copy":"Druk op Ctrl+C om te kopi\xEBren","copied!":"Gekopieerd!"},G={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:","Toggle navigation":"Prze\u0142\u0105cz nawigacj\u0119",Type:"Typ",url:"url",Copy:"Kopiowa\u0107","Press Ctrl+C to copy":"Naci\u015Bnij Ctrl+C, aby skopiowa\u0107","copied!":"Kopiowane!"},Q={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:","Toggle navigation":"Alternar navega\xE7\xE3o",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Pressione Ctrl+C para copiar","copied!":"Copiado!"},se={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:","Toggle navigation":"Comutarea navig\u0103rii",Type:"Tip",url:"url",Copy:"Copie","Press Ctrl+C to copy":"Ap\u0103sa\u021Bi Ctrl+C pentru a copia","copied!":"Copiat!"},ue={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:","Toggle navigation":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",Type:"\u0422\u0438\u043F",url:"URL",Copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","Press Ctrl+C to copy":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+C, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","copied!":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"},Z={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:","Toggle navigation":"Navigasyonu de\u011Fi\u015Ftir",Type:"Tip",url:"url",Copy:"Kopya etmek","Press Ctrl+C to copy":"Kopyalamak i\xE7in Ctrl+C tu\u015Flar\u0131na bas\u0131n","copied!":"Kopya -lanan!"},ve={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:","Toggle navigation":"Chuy\u1EC3n \u0111\u1ED5i \u0111i\u1EC1u h\u01B0\u1EDBng",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt",Copy:"B\u1EA3n sao","Press Ctrl+C to copy":"Nh\u1EA5n Ctrl+C \u0111\u1EC3 sao ch\xE9p","copied!":"Sao ch\xE9p!"},Ae={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",DEPRECATED:"\u5F03\u7528",Description:"\u63CF\u8FF0","Error 4xx":"\u8BF7\u6C42\u5931\u8D25\uFF084xx\uFF09",Field:"\u5B57\u6BB5","Filter...":"\u7B5B\u9009\u2026",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Header:"\u8BF7\u6C42\u5934",Headers:"\u8BF7\u6C42\u5934",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.","No value":"\u7A7A\u503C",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570","Permission:":"\u6743\u9650:","Query Parameter(s)":"\u67E5\u8BE2\u53C2\u6570","Query Parameters":"\u67E5\u8BE2\u53C2\u6570","Request Body":"\u8BF7\u6C42\u6570\u636E",required:"\u5FC5\u9700",Reset:"\u91CD\u7F6E",Response:"\u8FD4\u56DE",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:","Success 200":"\u8BF7\u6C42\u6210\u529F\uFF08200\uFF09","Toggle navigation":"\u5207\u63DB\u5C0E\u822A",Type:"\u7C7B\u578B",url:"\u5730\u5740",Copy:"\u590D\u5236\u6587\u672C","Press Ctrl+C to copy":"\u6309Ctrl+C\u590D\u5236","copied!":"\u6587\u672C\u5DF2\u590D\u5236!"},Ce={ca:k,cn:Ae,cs:z,de:H,es:L,en:{},fr:B,it:U,nl:V,pl:G,pt:Q,pt_br:Q,ro:se,ru:ue,tr:Z,vi:ve,zh:Ae,zh_cn:Ae},Qe=((rt=window.navigator.language)!=null?rt:"en-GB").toLowerCase().substr(0,2);let yt=Ce[Qe]?Ce[Qe]:Ce.en;function Ct(Me){const de=yt[Me];return de===void 0?Me:de}function Tt(Me){if(!Object.prototype.hasOwnProperty.call(Ce,Me))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(Ce).join(",")}`);yt=Ce[Me]}const Lt=Me=>{let de={};const Pe=(ye,fe)=>fe.split(".").reduce((me,je)=>{if(me){if(me[je])return me[je];if(Array.isArray(me)&&me[0]&&me[0][je])return me[0][je]}return null},ye),Te=(ye,fe,me)=>{ye?Array.isArray(ye)?ye.length?ye[0][fe]=me:ye.push({[fe]:me}):ye[fe]=me:de[fe]=me};Me.forEach(ye=>{const{parentNode:fe,field:me,type:je}=ye[0],Be=fe?Pe(de,fe.path):void 0,Ue=Be?me.substring(fe.path.length+1):me,$e=je.indexOf("[]")!==-1;je.indexOf("Object")!==-1?Te(Be,Ue,$e?[]:{}):Te(Be,Ue,$e?[]:ye[1])});const X=Object.keys(de);return X.length===1&&Me[0][0].optional&&(de=de[X[0]]),Fe(de)};function Fe(Me){return JSON.stringify(Me,null,4)}function bt(Me){const de=[];return Me.forEach(Pe=>{let Te;switch(Pe.type.toLowerCase()){case"string":Te=Pe.defaultValue||"";break;case"boolean":Te=Boolean(Pe.defaultValue)||!1;break;case"number":Te=parseInt(Pe.defaultValue||0,10);break;case"date":Te=Pe.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}de.push([Pe,Te])}),Lt(de)}var we=tt(8220);class Ye extends we{constructor(de){super(),this.testMode=de}diffMain(de,Pe,Te,X){return super.diff_main(this._stripHtml(de),this._stripHtml(Pe),Te,X)}diffLineMode(de,Pe){const Te=this.diff_linesToChars_(de,Pe),X=Te.chars1,ye=Te.chars2,fe=Te.lineArray,me=super.diff_main(X,ye,!1);return this.diff_charsToLines_(me,fe),me}diffPrettyHtml(de){const Pe=[],Te=/&/g,X=/</g,ye=/>/g,fe=/\n/g;for(let me=0;me<de.length;me++){const je=de[me][0],Ue=de[me][1].replace(Te,"&amp;").replace(X,"&lt;").replace(ye,"&gt;").replace(fe,"&para;<br>");switch(je){case we.DIFF_INSERT:Pe[me]="<ins>"+Ue+"</ins>";break;case we.DIFF_DELETE:Pe[me]="<del>"+Ue+"</del>";break;case we.DIFF_EQUAL:Pe[me]="<span>"+Ue+"</span>";break}}return Pe.join("")}diffPrettyCode(de){const Pe=[],Te=/\n/g;for(let X=0;X<de.length;X++){const ye=de[X][0],fe=de[X][1],me=fe.match(Te)?"":`
`;switch(ye){case we.DIFF_INSERT:Pe[X]=fe.replace(/^(.)/gm,"+ $1")+me;break;case we.DIFF_DELETE:Pe[X]=fe.replace(/^(.)/gm,"- $1")+me;break;case we.DIFF_EQUAL:Pe[X]=fe.replace(/^(.)/gm,"  $1");break}}return Pe.join("")}diffCleanupSemantic(de){return this.diff_cleanupSemantic(de)}_stripHtml(de){if(this.testMode)return de;const Pe=document.createElement("div");return Pe.innerHTML=de,Pe.textContent||Pe.innerText||""}}function Zt(){s().registerHelper("markdown",function(X){return X&&(X=X.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(ye,fe,me,je,Be,Ue,$e){const Je=je||Ue+"/"+$e;return'<a href="#api-'+Ue+"-"+$e+'">'+Je+"</a>"}),X)}),s().registerHelper("setInputType",function(X){switch(X){case"File":case"Email":case"Color":case"Number":case"Date":return X[0].toLowerCase()+X.substring(1);case"Boolean":return"checkbox";default:return"text"}});let Me;s().registerHelper("startTimer",function(X){return Me=new Date,""}),s().registerHelper("stopTimer",function(X){return console.log(new Date-Me),""}),s().registerHelper("__",function(X){return Ct(X)}),s().registerHelper("cl",function(X){return console.log(X),""}),s().registerHelper("underscoreToSpace",function(X){return X.replace(/(_+)/g," ")}),s().registerHelper("removeDblQuotes",function(X){return X.replace(/"/g,"")}),s().registerHelper("assign",function(X){if(arguments.length>0){const ye=typeof arguments[1];let fe=null;(ye==="string"||ye==="number"||ye==="boolean")&&(fe=arguments[1]),s().registerHelper(X,function(){return fe})}return""}),s().registerHelper("nl2br",function(X){return Pe(X)}),s().registerHelper("ifNotObject",function(X,ye){return X&&X.indexOf("Object")!==0?ye.fn(this):ye.inverse(this)}),s().registerHelper("ifCond",function(X,ye,fe,me){switch(ye){case"==":return X==fe?me.fn(this):me.inverse(this);case"===":return X===fe?me.fn(this):me.inverse(this);case"!=":return X!=fe?me.fn(this):me.inverse(this);case"!==":return X!==fe?me.fn(this):me.inverse(this);case"<":return X<fe?me.fn(this):me.inverse(this);case"<=":return X<=fe?me.fn(this):me.inverse(this);case">":return X>fe?me.fn(this):me.inverse(this);case">=":return X>=fe?me.fn(this):me.inverse(this);case"&&":return X&&fe?me.fn(this):me.inverse(this);case"||":return X||fe?me.fn(this):me.inverse(this);default:return me.inverse(this)}});const de={};s().registerHelper("subTemplate",function(X,ye){de[X]||(de[X]=s().compile(document.getElementById("template-"+X).innerHTML));const fe=de[X],me=h().extend({},this,ye.hash);return new(s()).SafeString(fe(me))}),s().registerHelper("toLowerCase",function(X){return X&&typeof X=="string"?X.toLowerCase():""}),s().registerHelper("dot2bracket",function(X){const{parentNode:ye,field:fe,isArray:me}=X;let je="";if(ye){let Be=X;do{const Ue=Be.parentNode;Ue.isArray&&(je=`[]${je}`),Ue.parentNode?je=`[${Ue.field.substring(Ue.parentNode.path.length+1)}]${je}`:je=Ue.field+je,Be=Be.parentNode}while(Be.parentNode);je+=`[${fe.substring(ye.path.length+1)}]`}else je=fe,me&&(je+="[]");return je}),s().registerHelper("nestObject",function(X){const{parentNode:ye,field:fe}=X;return ye?"&nbsp;&nbsp;".repeat(ye.path.split(".").length)+fe.substring(ye.path.length+1):fe});function Pe(X){return(""+X).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,ye=>ye.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}s().registerHelper("each_compare_list_field",function(X,ye,fe){const me=fe.hash.field,je=[];X&&X.forEach(function(Ue){const $e=Ue;$e.key=Ue[me],je.push($e)});const Be=[];return ye&&ye.forEach(function(Ue){const $e=Ue;$e.key=Ue[me],Be.push($e)}),Te("key",je,Be,fe)}),s().registerHelper("each_compare_keys",function(X,ye,fe){const me=[];X&&Object.keys(X).forEach(function(Ue){const $e={};$e.value=X[Ue],$e.key=Ue,me.push($e)});const je=[];return ye&&Object.keys(ye).forEach(function(Ue){const $e={};$e.value=ye[Ue],$e.key=Ue,je.push($e)}),Te("key",me,je,fe)}),s().registerHelper("body2json",function(X,ye){return bt(X)}),s().registerHelper("each_compare_field",function(X,ye,fe){return Te("field",X,ye,fe)}),s().registerHelper("each_compare_title",function(X,ye,fe){return Te("title",X,ye,fe)}),s().registerHelper("reformat",function(X,ye){if(ye==="json")try{return JSON.stringify(JSON.parse(X.trim()),null,"    ")}catch(fe){}return X}),s().registerHelper("showDiff",function(X,ye,fe){let me="";if(X===ye)me=X;else{if(!X)return ye;if(!ye)return X;const je=new Ye;if(fe==="code"){const Be=je.diffLineMode(ye,X);me=je.diffPrettyCode(Be)}else{const Be=je.diffMain(ye,X);je.diffCleanupSemantic(Be),me=je.diffPrettyHtml(Be),me=me.replace(/&para;/gm,""),fe==="nl2br"&&(me=Pe(me))}}return me});function Te(X,ye,fe,me){const je=[];let Be=0;ye&&ye.forEach(function(Je){let ot=!1;if(fe&&fe.forEach(function(ut){if(Je[X]===ut[X]){const Bt={typeSame:!0,source:Je,compare:ut,index:Be};je.push(Bt),ot=!0,Be++}}),!ot){const ut={typeIns:!0,source:Je,index:Be};je.push(ut),Be++}}),fe&&fe.forEach(function(Je){let ot=!1;if(ye&&ye.forEach(function(ut){ut[X]===Je[X]&&(ot=!0)}),!ot){const ut={typeDel:!0,compare:Je,index:Be};je.push(ut),Be++}});let Ue="";const $e=je.length;for(const Je in je)parseInt(Je,10)===$e-1&&(je[Je]._last=!0),Ue=Ue+me.fn(je[Je]);return Ue}}document.addEventListener("DOMContentLoaded",()=>{mr(),P(),y().highlightAll()});function mr(){var ze;let Me=[{type:"post",url:"/configurations/special/files/providers/loads",title:"Consulta configuraci\xF3n",name:"Consulta_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener la configuracion de un archivo especial por su pk y sk</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenacion del objecto</p>"}]},examples:[{title:"Request-Example:",content:` 
{
    "pk": "ean_provider#1234568",
    "sk": "special_file#3ba8eb24-dc76-431e-8c61-310ca20e2a31"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con la configuraci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"typeOfReport",isArray:!1,description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,field:"generationFrequency",isArray:!1,description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",isArray:!1,description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,field:"checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkStandardUnit",isArray:!1,description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado de la configuraci\xF3n</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/configurations/special/files",title:"Editar configuraci\xF3n",name:"Editar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite editar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",isArray:!1,description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",isArray:!1,description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",isArray:!1,description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",isArray:!1,description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que esta editando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n seleccionada por el cliente para la generacion de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante que se le generara el archivo especial</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",isArray:!1,description:"<p>Tipo de reporte(sales o stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",isArray:!1,description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",isArray:!1,description:"<p>cantidad de periodos a generar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",isArray:!1,description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que esta creando la configuracion del archivo especial</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"get",url:"/configurations/special/files/administrations/providers/:eanprovider",title:"Listado configuraciones por cliente",name:"Listado_configuraciones_por_cliente",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",isArray:!1,description:"<p>Ean del fabricante a consultar listado de archivos</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",isArray:!1,description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",isArray:!1,description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",isArray:!0,description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!0,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.pk",isArray:!1,description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!0,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.sk",isArray:!1,description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.eanProvider",isArray:!1,description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.country",isArray:!1,description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.typeOfReport",isArray:!1,description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.generationFrequency",isArray:!1,description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.generationDay",isArray:!1,description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkStandardUnit",isArray:!1,description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",isArray:!1,description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"post",url:"/configurations/special/files/providers",title:"Listado configuraciones por cliente filtradas",name:"Listado_configuraciones_por_cliente_filtradas",group:"Archivos_especiales_cliente",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas configuraciones de archivos especiales por cliente filtrando por el estado y fecha de creaci\xF3n del reporte</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante a consultar listado de archivos</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado de los informes especiales a buscar IMPORTANTE = si no se selecciono data enviar el campo vacio</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creaci\xF3n de los archivos especiales IMPORTATE = si no se ingreso data enviar el campo vacio y si se selecciono data enviar en formato AAAA-mm = 2023-03</p>"}]},examples:[{title:"Request-Example:",content:` 
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de configuraciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"generationFrecuency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"generationDay",isArray:!1,description:"<p>Dia de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,field:"typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Ruta del ultimo archivo generado</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Ruta del ultimo log generado</p>"},{group:"200",type:"String",optional:!1,field:"historicalExecutions",isArray:!1,description:"<p>listado historico de generaciones del informe</p>"},{group:"200",type:"Object[]",optional:!1,field:"configurationSpecialFileDTO",isArray:!0,description:"<p>datos de la configuracion del informe</p>"},{group:"200",type:"String",optional:!0,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.pk",isArray:!1,description:"<p>clave de particion del objecto</p>"},{group:"200",type:"String",optional:!0,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.sk",isArray:!1,description:"<p>Clave de ordenacion del objecto</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.eanProvider",isArray:!1,description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.country",isArray:!1,description:"<p>pais del proveedor</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.typeOfReport",isArray:!1,description:"<p>tipo de informe</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.generationFrequency",isArray:!1,description:"<p>frecuencia de generacion</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.generationDay",isArray:!1,description:"<p>Dia de generacion</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupacion de datos</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkStandardUnit",isArray:!1,description:"<p>checkStandardUnit CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"configurationSpecialFileDTO",field:"configurationSpecialFileDTO",type:"Object[]",isArray:!0},field:"configurationSpecialFileDTO.checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",isArray:!1,description:"<p>Nombre del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Nombre de usuario que mpdifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationSpecialFileWebApi.java",groupTitle:"Archivos_especiales_cliente"},{type:"put",url:"/companies",title:"Actualizaci\xF3n de compa\xF1ia",name:"Actualizaci\xF3n_de_compa\xF1ia",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite actualizar datos de una compa\xF1ia en el sistema despues de cumplir con las validaciones exigidas en el proceso, que no puede existir una compa\xF1ia con el mismo numero de identificacion y nombre en el mismo pais y tipo de compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo de compa\xF1ia (F = fabricante C = Comerciante)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",isArray:!1,description:"<p>Numero de identificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!0,field:"checkDigit",isArray:!1,description:"<p>digito de verificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais al que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityCode",isArray:!1,description:"<p>Codigo de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityName",isArray:!1,description:"<p>Nombre de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"adress",isArray:!1,description:"<p>Direccion de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"contactName",isArray:!1,description:"<p>Nombre del contacto de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Correo electronico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado de la empresa (1 = ACTIVO 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que esta actualizando la empresa</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente."
                       " Intenta nuevamente en unos segundos o comun\xEDcate con soporte "
                       "https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"post",url:"/companies/administrations",title:"Administracion de compa\xF1ias",name:"Administracion_de_compa\xF1ias",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las compa\xF1ias que tengan relaci\xF3n con los filtros de busqueda seleccionados</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>codigo del pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo de compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia a buscar IMPORTANTE si no se tiene data enviar el campo vacio ejemplo eanCompany = &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",isArray:!1,description:"<p>numero de identificaci\xF3n de la compa\xF1ia IMPORTANTE si no se tiene data enviar el campo vacio ejemplo companyIdentificationNumber = &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>nombre de la compa\xF1ia a buscar IMPORTANTE si no se tiene data enviar el campo vacio ejemplo companyName = &quot;&quot;</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>estado de la compa\xF1ia IMPORTANTE si no se tiene data NO enviar el campo</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de las empresas</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>tipo de compa\xF1ia (F= Fabricante, C = Comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"companyIdentificationNumber",isArray:!1,description:"<p>Numero de identificacion de la empresa</p>"},{group:"200",type:"Number",optional:!1,field:"checkDigit",isArray:!1,description:"<p>Digito de verificacion de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"cityCode",isArray:!1,description:"<p>Codigo de la ciudad de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"cityName",isArray:!1,description:"<p>Nombre de la ciudad de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"adress",isArray:!1,description:"<p>Direccion de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"contactName",isArray:!1,description:"<p>Nombre de contacto de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>Numero de telefono</p>"},{group:"200",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Correo electronico</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado de la compa\xF1ia (1 = ACTIVO, 0 = INACTIVO)</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>usuario de Creaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de actualizacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario que actualizo el registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1004",

   "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente."
                       "Intenta nuevamente en unos segundos o comun\xEDcate"
                       "con soporte https://soporte.cen.biz/."

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/traders/countries/{country}",title:"Companias comerciantes por pais",name:"Companias_comerciantes_por_pais",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia comerciantes registrada consultando por su pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "No existe informaci\xF3n que coincida con
los filtros de b\xFAsqueda.",
"responseCode": "1004"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/providers/:eancompany/countries/:country",title:"Companias fabricantes por pais",name:"Consulta_companias_fabricantes_por_pais",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia fabricante registrada consultando pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies/providers/:eancompany/countries/:country",title:"Consulta compa\xF1ia fabricante",name:"Consulta_compa\xF1ia_fabricante",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite obtenerlos datos de la compa\xF1ia fabricante registrada consultando por su ean y pais al que pertenece</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",isArray:!1,description:"<p>Ean de la compa\xF1ia que se quiere consultar</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece la empresa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de la empresa</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"post",url:"/companies",title:"Creaci\xF3n de compa\xF1ia",name:"Creaci\xF3n_de_compa\xF1ia",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite crear una nueva compa\xF1ia en el sistema despues de cumplir con las validaciones exigidas en el proceso, que no puede existir una compa\xF1ia con el mismo ean, numero de identificacion y nombre en el mismo pais y tipo de compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo de compa\xF1ia (F = fabricante C = Comerciante)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyIdentificationNumber",isArray:!1,description:"<p>Numero de identificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!0,field:"checkDigit",isArray:!1,description:"<p>digito de verificaci\xF3n de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais al que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityCode",isArray:!1,description:"<p>Codigo de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"cityName",isArray:!1,description:"<p>Nombre de la ciudad a la que pertenece la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"adress",isArray:!1,description:"<p>Direccion de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"contactName",isArray:!1,description:"<p>Nombre del contacto de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Correo electronico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado de la empresa (1 = ACTIVO 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que esta creando la empresa</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 satisfactoriamente."
                       " Intenta nuevamente en unos segundos o comun\xEDcate con soporte "
                       "https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/companies",title:"Listado de compa\xF1ias",name:"Listado_de_compa\xF1ias",group:"Compa\xF1ias",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las compa\xF1ias fabricante de la plataforma</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de compa\xF1ias</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario actualizaci\xF3n de registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo compa\xF1ia (fabricante,comerciante)</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"userLimit",isArray:!1,description:"<p>limite de usuarios</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/CompanyWebApi.java",groupTitle:"Compa\xF1ias"},{type:"get",url:"/cards/indicators/stock/companies/:eanProvider",title:"Indicadores BI inventarios",name:"Indicadores_BI_inventarios",group:"Configuraci\xF3n_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de inventarios para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",isArray:!1,description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",isArray:!1,description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",isArray:!1,description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",isArray:!1,description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

  "responseMessage": "error en la consulta",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"get",url:"/cards/indicators/sales/companies/:eanProvider",title:"Indicadores BI ventas",name:"Indicadores_BI_ventas",group:"Configuraci\xF3n_tarjetas_indicadores_BI",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de acceso a los indicadores de ventas para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia que se encuentra logueada se puede buscar con el nombre de eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de los indicadores</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del proveedor al que pertenece el indicador</p>"},{group:"200",type:"String",optional:!1,field:"indicatorType",isArray:!1,description:"<p>Tipo de indicador</p>"},{group:"200",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>Nombre o titulo para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre o titulo para el indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Icono para el indicador</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n correspondiente al indicador</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>Descripci\xF3n correspondiente al indicador en ingles</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url correspondiente al indicador a visualizar</p>"},{group:"200",type:"Integer",optional:!1,field:"indicatorOrder",isArray:!1,description:"<p>Orden en el que se pintara la tarjeta con los datos del indicador</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario que creo el indicador</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"modificationUser",isArray:!1,description:"<p>Usuario que modifico el inicador</p>"},{group:"200",type:"String",optional:!0,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificaci\xF3n</p>"},{group:"200",type:"String",optional:!0,field:"country",isArray:!1,description:"<p>Codigo del pais</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

  "responseMessage": "error en la consulta",
  
  "responseCode": "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationIndicatorCardWebApi.java",groupTitle:"Configuraci\xF3n_tarjetas_indicadores_BI"},{type:"put",url:"/contact",title:"Actualizaci\xF3n contactos",name:"Actualizaci\xF3n_contacto",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite Actulizaci\xF3n de un producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastname",isArray:!1,description:"<p>apellido</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>correo electronico</p>"},{group:"Parameter",type:"String",optional:!1,field:"position",isArray:!1,description:"<p>cargo</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>telefono</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
 {
"name": "mateo",
   "lastName": "romero",
   "email": "mateoromeroweb2@gmail.com",
   "phone": "7283893",
   "position": "vendedor",
   "eanCompany": "342532532"
 ]
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating contact"

"responseCode" : "1001"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContactsWebApi.java",groupTitle:"Contactos"},{type:"post",url:"/contact",title:"Creacion de registro contactos",name:"Creacion_de_registro_contactos",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de registro producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastname",isArray:!1,description:"<p>apellido</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>correo electronico</p>"},{group:"Parameter",type:"String",optional:!1,field:"position",isArray:!1,description:"<p>cargo</p>"},{group:"Parameter",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>telefono</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
 {
"name": "mateo",
   "lastName": "romero",
   "email": "mateoromeroweb2@gmail.com",
   "phone": "7283893",
   "position": "vendedor",
   "eanCompany": "342532532"
 ]
 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de productos contatados se
cre\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "No se puede agregar el registro, "
+ " ya existe una opci\xF3n de productos contatados para el
pa\xEDs, empresa y producto seleccionado"

"responseCode" : "1001"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContactsWebApi.java",groupTitle:"Contactos"},{type:"post",url:"/contact/filter",title:"Filtro de Contactos",name:"Filtro_de_Contactos",group:"Contactos",version:"0.1.0",description:"<p>Este servicio permite filtrar los contactos por nombre y apellido</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>nombre</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>apellido</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>nombre</p>"},{group:"200",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>apellido</p>"},{group:"200",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>correo electronico</p>"},{group:"200",type:"String",optional:!1,field:"position",isArray:!1,description:"<p>cargo</p>"},{group:"200",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>telefono</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contactos",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContactsWebApi.java",groupTitle:"Contactos"},{type:"post",url:"/budget/downloads",title:"Descarga Prsupuesto por vendedor",name:"Descarga_Presupuesto_por_vendedor",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de presupuesto por vendedor para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",isArray:!1,description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",isArray:!1,description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
{

"eanProvider": "7702010000010",
"userName": "Francisco diaz",
"emailUser": "correo@prueba",
"idUser": "khjgliugkfu",
"country":"CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/BudgetWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/productsreferences/downloads",title:"Descarga Referenciales de Producto",name:"Descarga_Referenciales_de_Producto",group:"Download_Master_Files",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de referenciales de producto para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idCompany",isArray:!1,description:"<p>Id de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",isArray:!1,description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Id del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"}]},examples:[{title:"Request-Example:",content:`
{

"eanProvider": "7702010000010",
"userName": "Francisco diaz",
"emailUser": "correo@prueba",
"idUser": "khjgliugkfu",
"country":"CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductReferencesWebApi.java",groupTitle:"Download_Master_Files"},{type:"post",url:"/products/downloads",title:"Descarga Catalogo productos",name:"Descarga_Catalogo_productos",group:"Download_catalogo_productos",version:"0.1.0",description:"<p>Este servicio permite la generaci\xF3n del archivo de catalogo de productos para el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo paiso de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",isArray:!1,description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country": "CO",
    "eanProvider": "7702010000010",
    "userName": "Francisco diaz",
    "emailUser": "correo@prueba",
    "idUser": "fradia"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Download_catalogo_productos"},{type:"post",url:"/salesforce",title:"Descarga fuerza venta",name:"Descarga_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de la fuerza de venta actual para el fabricante seg\xFAn los comercios que filtre</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais de la compa\xF1ia que se encuentra logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",isArray:!1,description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTrader",isArray:!0,description:"<p>Listado eans de los comercios seleccionados en la lista desplegable</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salesforce/traders",title:"Listado comerciantes",name:"Listado_comerciantes",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los comerciantes que tienen registrado venta o  inventarios con el fabricante logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia que se encuentra logueada se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais del fabricante que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider":"7702010000010",
    "country" : "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos de los comeciantes</p>"},{group:"200",type:"Object",optional:!1,field:"data",isArray:!1,description:"<p>Objecto que contiene los datos de los comerciantes</p>"},{group:"200",type:"Number",optional:!1,field:"idCompany",isArray:!1,description:"<p>Id del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>Nombre del Comerciante</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del Comerciante</p>"},{group:"200",type:"Boolean",optional:!1,field:"Estado",isArray:!1,description:"<p>del Comerciante</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",isArray:!1,description:"<p>usuaro que creo el registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>usuaro que actualizo el registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean del comerciante</p>"},{group:"200",type:"Number",optional:!1,field:"userLimit",isArray:!1,description:"<p>limite de usuarios activos</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salesforce/previews",title:"Previsualizar fuerza venta",name:"Previsualizar_fuerza_venta",group:"Download_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la consulta de datos para la vista previa de la fuerza de venta para un fabricante y comerciante en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia que se encuentra logueada se ecuentra como (eanCompany)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>Ean del comercio seleccionado en la lista desplegable</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "eanProvider": "7702010000010", 

    "eanTrader": "7702010000009"  

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de datos de la fuerza de venta</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia que esta logueada</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>Ean del Comerciante seleccionado en la lista deplegable</p>"},{group:"200",type:"String",optional:!1,field:"trader",isArray:!1,description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,field:"eanPointSale",isArray:!1,description:"<p>Ean del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"levelZero",isArray:!1,description:"<p>Nivel de la Jerarqu\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",isArray:!1,description:"<p>1.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelTwo",isArray:!1,description:"<p>2.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelThree",isArray:!1,description:"<p>3.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",isArray:!1,description:"<p>4.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelFive",isArray:!1,description:"<p>5.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelSix",isArray:!1,description:"<p>6.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelSeven",isArray:!1,description:"<p>7.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelEight",isArray:!1,description:"<p>8.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelNine",isArray:!1,description:"<p>9.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"levelTen",isArray:!1,description:"<p>10.\xBA Nivel de la Jerarqu\xEDa.</p>"},{group:"200",type:"String",optional:!1,field:"salesMan",isArray:!1,description:"<p>Nombre del vendedor</p>"},{group:"200",type:"String",optional:!1,field:"salesManCode",isArray:!1,description:"<p>Codigo del vendedor</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Download_fuerza_venta"},{type:"post",url:"/salepoints",title:"Descarga puntos de venta",name:"Descarga_puntos_de_venta",group:"Download_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite la generacion del archivo de puntos de venta actual registrados en la plataforma</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>ean de la compa\xF1ia loguea se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"userName",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailUser",isArray:!1,description:"<p>Correo del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece la empresa se que encuentra logueada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanTraders",isArray:!0,description:"<p>Listado eans de los comercios seleccionados en la lista desplegable IMPORTANTE si se seleccionaron todos los eans de la lista desplegable \xF3 la palabra todos el listado se debe enviar vac\xEDo</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Download_puntos_de_venta"},{type:"get",url:"/salepoints/traders",title:"Listado de comerciantes",name:"Listado_de_comerciantes",group:"Download_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las compa\xF1ias comerciantes registradas en la plataforma</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de compa\xF1ias</p>"},{group:"200",type:"Object",optional:!1,field:"company",isArray:!1,description:"<p>compa\xF1ias registradas</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre de usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre del usuario que modifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"typeCompany",isArray:!1,description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Download_puntos_de_venta"},{type:"get",url:"/masters/budget/guides",title:"Descarga gu\xEDa presupuesto por vendedor",name:"Descarga_gu\xEDa_presupuesto_por_vendedor",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de presupuesto por vendedor</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/productsreferences/guides",title:"Descarga gu\xEDa referenciales de producto",name:"Descarga_gu\xEDa_referenciales_de_producto",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de referenciales de producto</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/budget/templates",title:"Descarga plantilla presupuesto por vendedor",name:"Descarga_plantilla_presupuesto_por_vendedor",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de presupuesto por vendedor</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"get",url:"/masters/productsreferences/templates",title:"Descarga plantilla referenciales de producto",name:"Descarga_plantilla_referenciales_de_producto",group:"Downloads_Instructives",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de referenciales de producto</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_Instructives"},{type:"post",url:"/masters/downloads",title:"Descarga archivos",name:"Descarga_archivo",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo que fue cargado por la pagina web y los archivos que son generados por medio de la pagina</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Path del archivo a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo a descargar</p>"}]},examples:[{title:"Request-Example:",content:`
{

    "pathFileName":"prescriptiva-aws/athena",
    "fileName":"Nombre-del-archivo-cargado.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"post",url:"/masters/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa el archivo cargado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Path del log</p>"},{group:"Parameter",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombrte del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
{

 "pathLogFileName":"prescriptiva-logs-etl/products",
 "logFileName":"Catalogo_20220805112600_1111_log.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"get",url:"/masters/downloads/companies/:eancompany/typefiles/:idTypeFile",title:"Listado de archivos",name:"Listado_de_archivos",group:"Downloads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los archivos generados para descargar : si desea archivo de fuerza de venta idTypeFile = 8, si desea archivo de catalogo de productos idTypeFile = 9, si desea archivo de puntos de venta idTypeFile = 11</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",isArray:!1,description:"<p>ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idTypeFile",isArray:!1,description:"<p>Id del tipo de archivo a consultar</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",isArray:!1,description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",isArray:!1,description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",isArray:!1,description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",isArray:!1,description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",isArray:!1,description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Downloads_files"},{type:"get",url:"/status",title:"Listado de estados",name:"Listado_de_estados",group:"Estados",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los estados disponibles para los archivos cargados por la web</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de estados</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>Nombre del estado</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creaci\xF3n dle registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/StateWebApi.java",groupTitle:"Estados"},{type:"post",url:"/filters/dynamicreports/channels",title:"Listado de canales",name:"Listado_de_canales",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los canales que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de los canales</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "CANAL POR DEFECTO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/level1/categories",title:"Listado de categorias",name:"Listado_de_categorias",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las categorias de nivel 1 de productos  que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de las categorias de nivel 1 de productos</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "PORTAFOLIO - CONSOLIDADO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels4/geographies",title:"Listado de ciudades",name:"Listado_de_ciudades",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las ciudades que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de departamentos - estados</p>"},{group:"200",type:"String",optional:!1,field:"idLevelOne",isArray:!1,description:"<p>C\xF3digo nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",isArray:!1,description:"<p>Nombre nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"idLevelFour",isArray:!1,description:"<p>C\xF3digo nivel 4 de ciudades</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",isArray:!1,description:"<p>Nombre nivel 4 de ciudades</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/colors",title:"Listado de colores",name:"Listado_de_colores",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de colores de productos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de colores</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "ROSA"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/traders",title:"Listado de comerciantes",name:"Listado_de_comerciantes",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de comerciantes que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de comerciantes</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>Ean del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"trader",isArray:!1,description:"<p>Nombre del comerciante</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels1/geographies",title:"Listado de departamentos-estado",name:"Listado_de_departamentos-estado",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los departamentos-estado que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de departamentos - estados</p>"},{group:"200",type:"String",optional:!1,field:"idLevelOne",isArray:!1,description:"<p>C\xF3digo nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",isArray:!1,description:"<p>Nombre nivel 1 de departamento - estado</p>"},{group:"200",type:"String",optional:!1,field:"idLevelFour",isArray:!1,description:"<p>C\xF3digo nivel 4 de ciudades</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",isArray:!1,description:"<p>Nombre nivel 4 de ciudades</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/eans/pointsales",title:"Listado de eans punto de venta",name:"Listado_de_eans_punto_de_venta",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los eans de puntos de venta que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de eans de punto de venta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "7701008000438"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/formats",title:"Listado de formatos",name:"Listado_de_formatos",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de formatos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de formatos</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/levels1/salesforce",title:"Listado de jerarqu\xEDa nivel 1",name:"Listado_de_jerarqu\xEDa_nivel_1",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de jerarqu\xEDa nivel 1 que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de jerarqu\xEDa nivel 1</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "FUERZA DE VENTAS - CONSOLIDADO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/brands",title:"Listado de marcas",name:"Listado_de_marcas",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las marcas de productos que tienen registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de marcas</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "AXION HD",
        "FAB",
        "FAB HDD",
        "VEL ROSITA"
   ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/products",title:"Listado de productos",name:"Listado_de_productos",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los productos  que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos-estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de productos</p>"},{group:"200",type:"String",optional:!1,field:"eanProduct",isArray:!1,description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!1,field:"productName",isArray:!1,description:"<p>Nombre del producto</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/pointsales",title:"Listado de punto de venta",name:"Listado_de_punto_de_venta",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de puntos de venta que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de puntos de venta</p>"},{group:"200",type:"String",optional:!1,field:"eanPointSale",isArray:!1,description:"<p>Ean del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/sizes",title:"Listado de tallas",name:"Listado_de_tallas",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de tallas de productos que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSalesManCode",isArray:!0,description:"<p>Listado de vendedores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de tallas</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": [
        "TALLA POR DEFECTO"
    ],
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/filters/dynamicreports/salesman",title:"Listado de vendedores",name:"Listado_de_vendedores",group:"Filtros_reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de vendedores que tengan registrada ventas con el fabricante logueado y los filtros seleccionados</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del fabricante logueado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstPointSales",isArray:!0,description:"<p>Listado de eans de punto de venta cuando se selecciona por el filtro de punto de venta IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFormats",isArray:!0,description:"<p>Listado de formatos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelOne",isArray:!0,description:"<p>Listado de departamentos/estados IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstGeographiesLevelFour",isArray:!0,description:"<p>Listado de ciudades IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstChannels",isArray:!0,description:"<p>Listado de canales IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProducts",isArray:!0,description:"<p>Listado de Eans de productos IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneCategories",isArray:!0,description:"<p>Listado de categorias nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstBrands",isArray:!0,description:"<p>Listado de marcas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstColors",isArray:!0,description:"<p>Listado de colores IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstSizes",isArray:!0,description:"<p>Listado de tallas IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevelOneSalesForce",isArray:!0,description:"<p>Listado de jerarqu\xEDa nivel 1 IMPORTANTE si se seleccionaron todos los elementos de la lista o la palabra todos enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de vendeores</p>"},{group:"200",type:"String",optional:!1,field:"salesManCode",isArray:!1,description:"<p>C\xF3digo del vendedor</p>"},{group:"200",type:"String",optional:!1,field:"salesMan",isArray:!1,description:"<p>Nombre del vendedor</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/FilterDynamicReportWebApi.java",groupTitle:"Filtros_reporte_dinamico"},{type:"post",url:"/masters/uploads/geographies",title:"Carga archivo geograf\xEDas",name:"Carga_archivo_geograf\xEDas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite la carga del archivo de geografias por medio de la p\xE1gina web</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Valor 4 archivo de geografias</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",isArray:!1,description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 4,
    "eanProvider": "7702010000010",
    "fileName": "archivo de geografias.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies/downloads",title:"Descarga de geograf\xEDas",name:"Descarga_de_geograf\xEDas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite realizar la descarga de las geograf\xEDas registradas en el sistema para un pa\xEDs en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partici\xF3n del objecto geografia a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pa\xEDs de la empresa que se encuentra logueada (se utiliza para la zona horaria)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"}]},examples:[{title:"Request-Example",content:`
{
  "pk": "country#CO",
  "country": "CO",
  "idUser" : "FraDia"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con los datos del archivo de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre para el archivo a descargar</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "objectData": {
        "fileName": "Geograf\xEDas_20220830_52.csv",
        "fileContent": "Q29kIElTTyBQYWlzO05vbWJ"
    },
    "responseMessage": "consulta correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/downloads/guides",title:"Descarga gu\xEDa geograf\xEDas",name:"Descarga_gu\xEDa_geograf\xEDas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de geograf\xEDas</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/downloads/templates",title:"Descarga plantilla geograf\xEDas",name:"Descarga_plantilla_geograf\xEDas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla para diligenciar plantilla de geograf\xEDas</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"delete",url:"/geographies/:country",title:"Eliminar geograf\xEDa",name:"Eliminar_geograf\xEDa",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite eliminar una geograf\xEDa de la plataforma Si no esta asociada a una empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pa\xEDs para eliminar la  geograf\xEDa</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "La geograf\xEDa elimino correctamente",
    "responseCode": "0"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies/cities/countries/:country",title:"Listado de ciudades por pa\xEDs",name:"Listado_de_ciudades_por_pa\xEDs",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de ciudades que pertenecen a un pa\xEDs</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais a consultar las ciudades</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de ciudades</p>"},{group:"200",type:"String",optional:!0,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!0,field:"sk",isArray:!1,description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!0,field:"codIsoCountry",isArray:!1,description:"<p>C\xF3digo ISO del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"country",isArray:!1,description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"countryName",isArray:!1,description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"currency",isArray:!1,description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",isArray:!1,description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",isArray:!1,description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",isArray:!1,description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"idLevel4",isArray:!1,description:"<p>Codigo de la ciudad</p>"},{group:"200",type:"String",optional:!0,field:"level1",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"level4",isArray:!1,description:"<p>Nombre  de la ciudad</p>"},{group:"200",type:"String",optional:!0,field:"totalLevels",isArray:!1,description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/geographies",title:"Listado de geograf\xEDas",name:"Listado_de_geograf\xEDas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las geograf\xEDas registradas en la plataforma</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"countryName",isArray:!1,description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"currency",isArray:!1,description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",isArray:!1,description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",isArray:!1,description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",isArray:!1,description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel4",isArray:!1,description:"<p>Cuarto  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level1",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level4",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"totalLevels",isArray:!1,description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies",title:"Listado de geograf\xEDas filtradas",name:"Listado_de_geograf\xEDas_filtradas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las geograf\xEDas registradas en la plataforma Que tengan coincidencia en el nombre del pa\xEDs o c\xF3digo ISO ingresado por el cliente</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"countryName",isArray:!1,description:"<p>Nombre del pa\xEDs a filtrar IMPORTANTE si el campo no contiene data enviar el campo vacio ejemplo &quot;countryName&quot;: &quot;&quot;</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pa\xEDs a filtrar IMPORTANTE si el campo no contiene data enviar el campo vacio ejemplo &quot;codIsoCountry&quot;: &quot;&quot;</p>"}]},examples:[{title:"Request-Example",content:`
{
      "countryName":"",
      "country": "COL"
  }`,type:"json"},{title:"Request-Example",content:`
{
      "countryName":"COLOMBIA",
      "country": ""
 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de geograf\xEDas</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo codigo del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"countryName",isArray:!1,description:"<p>Nombre del pa\xEDs</p>"},{group:"200",type:"String",optional:!1,field:"currency",isArray:!1,description:"<p>Moneda del pa\xEDs</p>"},{group:"200",type:"String",optional:!0,field:"idLevel1",isArray:!1,description:"<p>Primer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel2",isArray:!1,description:"<p>Segundo nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel3",isArray:!1,description:"<p>Tercer nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"idLevel4",isArray:!1,description:"<p>Cuarto  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level1",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level2",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level3",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!0,field:"level4",isArray:!1,description:"<p>Nombre  nivel de jerarqu\xEDa para una geograf\xEDa</p>"},{group:"200",type:"String",optional:!1,field:"totalLevels",isArray:!1,description:"<p>Total de niveles de jerarqu\xEDa que tiene el pa\xEDs</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"post",url:"/geographies/companies/validations",title:"Validaci\xF3n para eliminar geograf\xEDas",name:"Validaci\xF3n_para_eliminar_geograf\xEDas",group:"Geograf\xEDas",version:"0.1.0",description:"<p>Este servicio permite Validar si la geograf\xEDa que se desea eliminar esta asociada a alguna empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pa\xEDs para eliminar la  geograf\xEDa</p>"},{group:"Parameter",type:"String",optional:!1,field:"countryName",isArray:!1,description:"<p>Nombre del pa\xEDs para eliminar la  geograf\xEDa</p>"}]},examples:[{title:"Request-Example",content:`{

   "country": "CO",
   "countryName" : "COLOMBIA"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "\xBFEst\xE1 seguro que desea eliminar la geograf\xEDa del pa\xEDs COLOMBIA ?",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "No se puede eliminar la geograf\xEDa. La geograf\xEDa del pa\xEDs COLOMBIA 
                      que desea eliminar est\xE1 asociada al menos a una Empresa",
  "responseCode": "1005"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/GeographyWebApi.java",groupTitle:"Geograf\xEDas"},{type:"get",url:"/dashboards/home/providers/:eanProvider/countries/:country",title:"Indicadores home graficas",name:"Indicadores_home_graficas",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener la infomacion para mostrar en la graficas de barra y tortas que se presentan en el home del fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateSales",isArray:!1,description:"<p>Fecha de ultima actualizaci\xF3n para ventas</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdateInventories",isArray:!1,description:"<p>Fecha de ultima actualizaci\xF3n para Inventarios</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con el listado de datos para pintar en las graficas</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",isArray:!1,description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",isArray:!1,description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!1,field:"chartType",isArray:!1,description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!1,field:"chartDetail",isArray:!1,description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",isArray:!1,description:"<p>Nombre del primer campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"field2",isArray:!1,description:"<p>Nombre del segundo campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value1",isArray:!1,description:"<p>Primer valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"value2",isArray:!1,description:"<p>Segundo valor para el campo a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",isArray:!1,description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response: ",content:`
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
    
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"get",url:"/dashboards/home/transmissions/providers/:eanProvider/countries/:country",title:"Listado de transmisiones",name:"Listado_de_transmisiones",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las transmisiones de los comerciantes hacia el fabricante que se encuentra logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con el listado de transmisiones para mostrar en la tabla</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",isArray:!1,description:"<p>Id del indicador a mostrar en la tabla</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",isArray:!1,description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)}</p>"},{group:"200",type:"String",optional:!1,field:"field1",isArray:!1,description:"<p>Comercio que Transmite la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field2",isArray:!1,description:"<p>Nombre ultia transmision</p>"},{group:"200",type:"String",optional:!1,field:"field3",isArray:!1,description:"<p>Nombre cantidad transmitida</p>"},{group:"200",type:"String",optional:!1,field:"field4",isArray:!1,description:"<p>Nombre valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"field5",isArray:!1,description:"<p>Nombre tipo valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"field6",isArray:!1,description:"<p>Nombre puntos de ventas transmtidos</p>"},{group:"200",type:"String",optional:!1,field:"field7",isArray:!1,description:"<p>Nombre actualizaciones</p>"},{group:"200",type:"String",optional:!1,field:"value1",isArray:!1,description:"<p>Ean del comercio</p>"},{group:"200",type:"String",optional:!1,field:"value2",isArray:!1,description:"<p>Fecha ultima actualizaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"value3",isArray:!1,description:"<p>Cantidad transmitida</p>"},{group:"200",type:"String",optional:!1,field:"value4",isArray:!1,description:"<p>Valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"value5",isArray:!1,description:"<p>tipo del valor transmitido</p>"},{group:"200",type:"String",optional:!1,field:"value6",isArray:!1,description:"<p>Cantidad de puntos de venta tansmitidos</p>"},{group:"200",type:"String",optional:!1,field:"value7",isArray:!1,description:"<p>Fechas de actualizaciones</p>"},{group:"200",type:"String",optional:!1,field:"currentDatetime",isArray:!1,description:"<p>Fecha de ultima actualizaci\xF3n</p>"}]}},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"post",url:"/dashboards/home/details/salesforce",title:"Listado detalle indicadores fuerza de venta",name:"Listado_detalle_indicadores_fuerza_de_venta",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado detallado de los indicadores de fuerza de venta para el fabricante logueado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"},{group:"Parameter",type:"String",optional:!1,field:"field2",isArray:!1,description:"<p>Tipo de indicador para el detalle, si desea visualizar detalle de fuerza de venta enviar field2 = 'PUNTO DE VENTA'</p>"}]},examples:[{title:"Request-Example",content:`
{

  "eanProvider": "7702010000010",
  "country": "CO",
  "field2": "PUNTO DE VENTA"

 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con el listado de indicadores detallado</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",isArray:!1,description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",isArray:!1,description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!0,field:"chartType",isArray:!1,description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!0,field:"chartDetail",isArray:!1,description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",isArray:!1,description:"<p>Nombre Ean punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"field2",isArray:!1,description:"<p>Nombre Punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"value1",isArray:!1,description:"<p>Ean del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"value2",isArray:!1,description:"<p>Nombre del punto de venta</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",isArray:!1,description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"post",url:"/dashboards/home/details/products",title:"Listado detalle indicadores productos",name:"Listado_detalle_indicadores_productos",group:"Home",version:"0.1.0",description:"<p>Este servicio permite obtener el listado detallado de los productos con categorias por default</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante que se encuentra logueado este valor se encuentra con el nombre de eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais al que pertenece el fabricante que esta logueado este valor se encuentra con el nombre de country</p>"},{group:"Parameter",type:"String",optional:!1,field:"field2",isArray:!1,description:"<p>Tipo de indicador para el detalle, para visualizar catalogo de productos enviar field2 = 'PRODUCTOS'</p>"}]},examples:[{title:"Request-Example",content:`
{

 "eanProvider": "7702010000010",
 "country": "CO",
 "field2": "PRODUCTO"

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con el listado de indicadores detallado</p>"},{group:"200",type:"Number",optional:!1,field:"idIndicator",isArray:!1,description:"<p>Id del indicador a mostrar en la grafica</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais al que pertenece el fabricante</p>"},{group:"200",type:"String",optional:!1,field:"documentType",isArray:!1,description:"<p>Tipo de informacion a mostrar (Ventas o Inventarios)</p>"},{group:"200",type:"String",optional:!0,field:"chartType",isArray:!1,description:"<p>Tipo de grafico a mostrar</p>"},{group:"200",type:"String",optional:!0,field:"chartDetail",isArray:!1,description:"<p>Detalle o forma del grafico para mostrar la informaci\xF3n</p>"},{group:"200",type:"String",optional:!1,field:"field1",isArray:!1,description:"<p>Nombre Ean del producto</p>"},{group:"200",type:"String",optional:!1,field:"field2",isArray:!1,description:"<p>Nombre del producto</p>"},{group:"200",type:"String",optional:!1,field:"value1",isArray:!1,description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!1,field:"value2",isArray:!1,description:"<p>Nombre del producto</p>"},{group:"200",type:"String",optional:!1,field:"lastUpdates",isArray:!1,description:"<p>Fecha ultima actualizaci\xF3n del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DashboardHomeWebApi.java",groupTitle:"Home"},{type:"put",url:"/menus",title:"Actualizaci\xF3n de men\xFA",name:"Actualizaci\xF3n_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite actualizar opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Request-Example",content:`

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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating men\xFA",

"responseCode" : "1002"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/:idMenu",title:"Consulta de men\xFA",name:"Consulta_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener la opcion del men\xFA por su id</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching men\xFA",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus",title:"Creacion de men\xFA",name:"Creacion_de_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"Parameter",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de men\xFA se cre\xF3
exitosamente",

"responseCode" : "0"

}`,type:"json"},{title:"Success-Response:",content:`
{

"responseMessage": "el nombre del men\xFA ya existe para este
nivel y men\xFA padre",

"responseCode" : "1001"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "el nombre del men\xFA ya existe para este
nivel y men\xFA padre",

"responseCode" : "1001"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/typeOption",title:"Listado Opciones Tipo Menu",name:"Listado_Opciones_Tipo_Menu",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones de tipo para asignar a la creacion de menu</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"idOptionType",isArray:!1,description:"<p>Id de la opci\xF3n de tipo</p>"},{group:"200",type:"String",optional:!1,field:"create_user",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"option_name",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus",title:"Listado de menus",name:"Listado_de_menus_Listado_de_menus",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/parent/:level",title:"Listado men\xFAs padre",name:"Listado_men\xFAs_padre",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los men\xFAs padre segun el nivel</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"Object",optional:!1,field:"menu",isArray:!1,description:"<p>Menu de opciones</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching men\xFA",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/previews",title:"Previsualizaci\xF3n del men\xFA",name:"Previsualizaci\xF3n_del_men\xFA",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) para su previsualizaci\xF3n</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/levels",title:"listado de niveles",name:"listado_de_niveles",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los niveles de men\xFA que pueden ser asignados</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de niveles</p>"}]},examples:[{title:"Success-Response:",content:`
{
"objectData": [
1,
2,
3
],
"responseMessage": "consulta men\xFA correctamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error listando men\xFA",

"responseCode": "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"post",url:"/menus/order",title:"listado orden de opciones",name:"listado_orden_de_opciones",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado del orden para el men\xFA de opciones</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuParent",isArray:!1,description:"<p>(Opcional si el nivel es 1) Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"Parameter",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel al que pertenece la opci\xF3n</p>"}]},examples:[{title:"Request-Example",content:`
{

"parent": "0efcb2c6-92a1-4019-a7d6-366e55e20c33",

"level": 2
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objetos</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstOrdenCreate",isArray:!0,description:"<p>listado de niveles para Create</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstOrdenUpdate",isArray:!0,description:"<p>listado de niveles para Update</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error listando men\xFA",

"responseCode": "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/typeProduct",title:"menu Tipo Producto",name:"menu_Tipo_Producto",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las opciones del men\xFA con estado 1(Activo) que son tipo producto</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
               *`}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"Number",optional:!1,field:"isOptionType",isArray:!1,description:"<p>indica el numero de referencia de la opcion de menu si no tiene su valor es null</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"get",url:"/menus/product/:idMenu",title:"Consulta menu por producto",name:"menu_por_producto",group:"Menus",version:"0.1.0",description:"<p>Este servicio permite obtener la opcion del men\xFA tipo producto y sus descendientes por su id</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del men\xFA</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de men\xFAs</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"Number",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching men\xFA",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MenuWebApi.java",groupTitle:"Menus"},{type:"put",url:"/contractedProduct",title:"Actualizaci\xF3n producto contratado",name:"Actualizaci\xF3n_producto_contratado",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite Actulizaci\xF3n de un producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idOptionType",isArray:!1,description:"<p>id del tipo de opcion de menu, si no tiene tipo de opcion de menu el valor es null</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de productos contatados se
modific\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating contracted product"

"responseCode" : "1001"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/active  productos",title:"contratados activos",name:"Consulta_productos_contratados_activos",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",isArray:!1,description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",isArray:!1,description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/available/ Consulta productos",title:"contratados activos y disponibles",name:"Consulta_productos_contratados_activos_y_disponibles",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados activos y disponibles por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",isArray:!1,description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",isArray:!1,description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct productos contratados por",title:"empresa",name:"Consulta_productos_contratados_por_empresa",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados por empresa</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",isArray:!1,description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",isArray:!1,description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct",title:"Creacion de registro producto contratado",name:"Creacion_de_registro_producto_contratado",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite creaci\xF3n de registro producto contratado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idOptionType",isArray:!1,description:"<p>id del tipo de opcion de menu, si no tiene tipo de opcion de menu el valor es null</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"}]},examples:[{title:"Request-Example",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La opci\xF3n de productos contatados se
cre\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "No se puede agregar el registro, "
+ " ya existe una opci\xF3n de productos contatados para el
pa\xEDs, empresa y producto seleccionado"

"responseCode" : "1001"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"post",url:"/contractedProduct/filter",title:"Filtro de Productos Contratados",name:"Filtro_de_Productos_Contratados",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opcion de menu</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345"
}`,type:"json"},{title:"Request-Example:",content:`{
"country": "CO",
"eanCompany": "12345",
"idMenuOption": "20d88cac-8db0-49d7-84a0-13811e6af3a8"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",isArray:!1,description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",isArray:!1,description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"get",url:"/contractedProduct",title:"Productos Contratados por Compa\xF1ia",name:"Productos_Contratados_por_Compa\xF1ia",group:"Productos_Contratados",version:"0.1.0",description:"<p>Este servicio permite obtener los productos contratados por Compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "12345",
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object",optional:!1,field:"objectData",isArray:!1,description:"<p>Objeto con datos del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"200",type:"Number",optional:!1,field:"activeUsers",isArray:!1,description:"<p>numero de usuarios activos</p>"},{group:"200",type:"Number",optional:!1,field:"availableUsers",isArray:!1,description:"<p>numero de usuarios disponible</p>"},{group:"200",type:"Number",optional:!1,field:"contractedUsers",isArray:!1,description:"<p>numero de usuarios contratados</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>ean de la Empresa</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>nombre de la opci\xF3n de menu</p>"},{group:"200",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>nombre de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "error searching contracted product",

"responseCode" : "1004"

}`,type:"json"},{title:"Error-Response:",content:`
{
"responseMessage": "no se han encontrado productos
contratados para la busqueda",

"responseCode" : "1004"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ContractedProductsWebApi.java",groupTitle:"Productos_Contratados"},{type:"put",url:"/contractedProduct",title:"Actualizaci\xF3n Regla de Negocio",name:"Actualizaci\xF3n_Regla_de_Negocio",group:"Reglas_de_Negocio",version:"0.1.0",description:"<p>Este servicio permite Actualizaci\xF3n de una Regla de Negocio</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>ean de la campo\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idBusinessRule",isArray:!1,description:"<p>id de la regla de negocio</p>"},{group:"Parameter",type:"String",optional:!1,field:"businnessRuleName",isArray:!1,description:"<p>nombre de la regla de negocio</p>"}]},examples:[{title:"Request-Example",content:`
{
"eanTrader":"9003690230001",
"idBusinessRule":"2",
"businnessRuleName":"recarga",
"modification_user";"admin"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

"responseMessage": "La regla de negocio se
modific\xF3 exitosamente",

"responseCode" : "0"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error updating bussines rule "

"responseCode" : "1001"


}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"post",url:"/businnessRule/filter",title:"Filtro Reglas de Negocio",name:"Filtro_Reglas_de_negocio",group:"Reglas_de_Negocio",version:"0.1.0",description:"<p>Este servicio le permite realizar el filtro para listar las Reglas de negocio de un comerciante</p>",parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"eanTraders",isArray:!0,description:"<p>Listado de los comerciantes seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"rules",isArray:!0,description:"<p>Listado de reglas de negocio</p>"}]},examples:[{title:"Request-Example:",content:`

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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de solicitudes</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>id del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"traderName",isArray:!1,description:"<p>nombre del comerciante</p>"},{group:"200",type:"Number",optional:!1,field:"idBusinessRule",isArray:!1,description:"<p>id regla de negocio</p>"},{group:"200",type:"String",optional:!1,field:"businnessRuleName",isArray:!1,description:"<p>nombre de la regla de negocio</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>estado de la regla de negocio</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>fecha de modificacion</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>usuario de modificacion</p>"}]},examples:[{title:"Success-Response:",content:`
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
"responseCode": "0"`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"get",url:"/businnessRule",title:"Listado de Reglas de negocio",name:"Listado_de_Reglas_de_negocio",group:"Reglas_de_Negocio",version:"0.1.0",description:"<p>Este servicio permite obtener las reflas de negocio registradas en el sistema</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

"responseMessage": "error listando bussines rule",

"responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/BusinnessRuleWebApi.java",groupTitle:"Reglas_de_Negocio"},{type:"put",url:"/dynamicreports",title:"Actualizar configuraci\xF3n",name:"Actualizar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite actualizar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"dynamicReportDTO",isArray:!0,description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.country",isArray:!1,description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfReport",isArray:!1,description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationDay",isArray:!1,description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.reportStatus",isArray:!1,description:"<p>Estado del reporte (ACTIVO, INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.emails",isArray:!1,description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.comparePreviousPeriod",isArray:!1,description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.crossSalesOrInventories",isArray:!1,description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.eanTrader",isArray:!1,description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.trader",isArray:!1,description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterEansPointsales",isArray:!0,description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",isArray:!0,description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",isArray:!1,description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterFormats",isArray:!0,description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",isArray:!0,description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",isArray:!1,description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",isArray:!1,description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel4Geographies",isArray:!0,description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",isArray:!1,description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",isArray:!1,description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterChannels",isArray:!0,description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Categories",isArray:!0,description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",isArray:!0,description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.eanProduct",isArray:!1,description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.productName",isArray:!1,description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstLevel1Jeraquies",isArray:!0,description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",isArray:!0,description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterSalesMan",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan.salesManCode",isArray:!1,description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterSalesMan",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan.salesMan",isArray:!1,description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterBrands",isArray:!0,description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterColors",isArray:!0,description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSizes",isArray:!0,description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkStandardUnit",isArray:!1,description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.idUser",isArray:!1,description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.creationDare",isArray:!1,description:"<p>fecha de creacion</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.modificationUser",isArray:!1,description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
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
             }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/downloads",title:"Descarga archivos",name:"Descarga_archivo",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo que fue cargado por la pagina web y los archivos que son generados por medio de la pagina</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Path del archivo a descargar</p>"},{group:"Parameter",type:"String",optional:!1,field:"generatedFileName",isArray:!1,description:"<p>Nombre del archivo a descargar</p>"}]},examples:[{title:"Request-Example:",content:`
{

"pathFileName":"analitica-dev-prescriptiva-pivot-bucket/ean_provider=7702010000010",
"generatedFileName":"Pvt_Per_Anual_new_report_20230104_120427.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/masters/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa el archivo cargado</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Path del log</p>"},{group:"Parameter",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombrte del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
{

"pathLogFileName":"prescriptiva-logs-etl/products",
"logFileName":"Catalogo_20220805112600_1111_log.csv"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/roles/filter",title:"Filtro de Reportes Dinamicos",name:"Filtro_de_Reportes_Dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite filtrar los Reportes Dinamicos por un estado y Fecha Vencimiento</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con las configuraciones de la pivote</p>"}],Parameter:[{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del Reporte Dinamico (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto, el pk contiene el ean_provider</p>"},{group:"Parameter",type:"String",optional:!1,field:"expirationDate",isArray:!1,description:"<p>fecha de Vencimiento en formato 2022-12</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",isArray:!0,description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.country",isArray:!1,description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfReport",isArray:!1,description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationDay",isArray:!1,description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.reportStatus",isArray:!1,description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.emails",isArray:!1,description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.comparePreviousPeriod",isArray:!1,description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.crossSalesOrInventories",isArray:!1,description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.eanTrader",isArray:!1,description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.trader",isArray:!1,description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterEansPointsales",isArray:!0,description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",isArray:!0,description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",isArray:!1,description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterFormats",isArray:!0,description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",isArray:!0,description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",isArray:!1,description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",isArray:!1,description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel4Geographies",isArray:!0,description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",isArray:!1,description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",isArray:!1,description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterChannels",isArray:!0,description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",isArray:!0,description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.eanProduct",isArray:!1,description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.productName",isArray:!1,description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstLevel1Jeraquies",isArray:!0,description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",isArray:!0,description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterSalesMan",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan.salesMan",isArray:!1,description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterBrands",isArray:!0,description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterColors",isArray:!0,description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSizes",isArray:!0,description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkStandardUnit",isArray:!1,description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.idUser",isArray:!1,description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
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
                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports",title:"Guardar configuraci\xF3n",name:"Guardar_configuraci\xF3n",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite guardar la configuraci\xF3n del reporte din\xE1mico realizada por el cliente para su generaci\xF3n</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais del febricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfReport",isArray:!1,description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"String",optional:!1,field:"generationDay",isArray:!1,description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"Parameter",type:"String",optional:!1,field:"reportStatus",isArray:!1,description:"<p>Estado del reporte (&quot;ACTIVO&quot;,&quot;INACTIVO&quot;)</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"emails",isArray:!1,description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"Parameter",type:"Number",optional:!1,field:"comparePreviousPeriod",isArray:!1,description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"crossSalesOrInventories",isArray:!1,description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterTraders",field:"lstFilterTraders",type:"Object[]",isArray:!0},field:"lstFilterTraders.eanTrader",isArray:!1,description:"<p>Ean del comerciante seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterTraders",field:"lstFilterTraders",type:"Object[]",isArray:!0},field:"lstFilterTraders.trader",isArray:!1,description:"<p>Nombre del comerciante seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterEansPointsales",isArray:!0,description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterPointSales",isArray:!0,description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterPointSales",field:"lstFilterPointSales",type:"Object[]",isArray:!0},field:"lstFilterPointSales.eanPointSale",isArray:!1,description:"<p>Ean del punto de venta seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterPointSales",field:"lstFilterPointSales",type:"Object[]",isArray:!0},field:"lstFilterPointSales.pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterFormats",isArray:!0,description:"<p>Listado de los formatos seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Geographies",isArray:!0,description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterLevel1Geographies",field:"lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"lstFilterLevel1Geographies.idLevelOne",isArray:!1,description:"<p>Id del departamento-estado seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterLevel1Geographies",field:"lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"lstFilterLevel1Geographies.levelOne",isArray:!1,description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel4Geographies",isArray:!0,description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterLevel1Geographies",field:"lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"lstFilterLevel1Geographies.idLevelFour",isArray:!1,description:"<p>Id de la ciudad seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterLevel1Geographies",field:"lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"lstFilterLevel1Geographies.levelFour",isArray:!1,description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterChannels",isArray:!0,description:"<p>Listado de los canales seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterLevel1Categories",isArray:!0,description:"<p>Listado de las categorias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterProducts",isArray:!0,description:"<p>Listado de los productos seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterProducts",field:"lstFilterProducts",type:"Object[]",isArray:!0},field:"lstFilterProducts.eanProduct",isArray:!1,description:"<p>Ean del producto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterProducts",field:"lstFilterProducts",type:"Object[]",isArray:!0},field:"lstFilterProducts.productName",isArray:!1,description:"<p>Nombre del producto seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstLevel1Jeraquies",isArray:!0,description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSalesMan",isArray:!0,description:"<p>Listado de los vendedores seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterSalesMan",field:"lstFilterSalesMan",type:"Object[]",isArray:!0},field:"lstFilterSalesMan.salesManCode",isArray:!1,description:"<p>C\xF3digo del vendedor seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"lstFilterSalesMan",field:"lstFilterSalesMan",type:"Object[]",isArray:!0},field:"lstFilterSalesMan.salesMan",isArray:!1,description:"<p>Nombre del vendedor seleccionado</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterBrands",isArray:!0,description:"<p>Listado de las marcas seleccionadas</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterColors",isArray:!0,description:"<p>Listado de los colores seleccionados</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstFilterSizes",isArray:!0,description:"<p>Listado de las tallas seleccionadas</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkSize",isArray:!1,description:"<p>CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkStandardUnit",isArray:!1,description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"Number",optional:!1,field:"checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/provider",title:"Listado Reportes dinamicos",name:"Listado_de_Reportes_dinamicos",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los Reportes dinamicos asociados al fabricante</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",isArray:!0,description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.country",isArray:!1,description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfReport",isArray:!1,description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationDay",isArray:!1,description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.reportStatus",isArray:!1,description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.emails",isArray:!1,description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.comparePreviousPeriod",isArray:!1,description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.crossSalesOrInventories",isArray:!1,description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.eanTrader",isArray:!1,description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.trader",isArray:!1,description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterEansPointsales",isArray:!0,description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",isArray:!0,description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",isArray:!1,description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterFormats",isArray:!0,description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",isArray:!0,description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",isArray:!1,description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",isArray:!1,description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel4Geographies",isArray:!0,description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",isArray:!1,description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",isArray:!1,description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterChannels",isArray:!0,description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",isArray:!0,description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.eanProduct",isArray:!1,description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.productName",isArray:!1,description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstLevel1Jeraquies",isArray:!0,description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",isArray:!0,description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterSalesMan",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan.salesMan",isArray:!1,description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterBrands",isArray:!0,description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterColors",isArray:!0,description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSizes",isArray:!0,description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkStandardUnit",isArray:!1,description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.idUser",isArray:!1,description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
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
                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"get",url:"/dynamicreports/companies/:eanprovider Validaci\xF3n reportes",title:"disponibles",name:"Validaci\xF3n_reportes_disponibles",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite verificar si la empresa cuenta con cupo disponible para la creaci\xF3n de mas reportes din\xE1micos peri\xF3dicos</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanprovider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Esta validado para crear de reportes",
"responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
"responseMessage": "El usuario ya cuenta con 50 reportes
activos. Si requiere crear
uno nuevo, desactive alguno de los que est\xE1n en uso.",
"responseCode": "1005"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"post",url:"/dynamicreports/pivote",title:"reporte dinamico por id",name:"reporte_dinamico_por_id",group:"Reporte_dinamico",version:"0.1.0",description:"<p>Este servicio permite obtener un reporte dinamico por su id y ean provider</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
"pk": "ean_provider#7702010000010",
"sk": "pivot#7417f50f-1348-4e22-b21f-182dd1e640f8"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"Object[]",optional:!1,field:"dynamicReportDTO",isArray:!0,description:"<p>Contiene la configuraci\xF3n del reporte dinamico</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.eanProvider",isArray:!1,description:"<p>Ean del fabricante logueado se encuentra como eanCompany</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.country",isArray:!1,description:"<p>Pais del febricante logueado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfReport",isArray:!1,description:"<p>Tipo de reporte (ventas \xF3 inventarios)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationFrequency",isArray:!1,description:"<p>Frecuencia de generaci\xF3n (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.generationDay",isArray:!1,description:"<p>D\xEDa de generaci\xF3n del reporte</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.reportStatus",isArray:!1,description:"<p>Estado del reporte (ACTIVO, INACTIVO,INACTIVO VENCIDO,ACTIVO PROXIMO A VENCER)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.typeOfDataGrouping",isArray:!1,description:"<p>Tipo de agrupaci\xF3n de datos (Diario, Semanal, Mensual, Anual)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.amountOfPeriodsToGenerate",isArray:!1,description:"<p>Cantidad de periodos a generar</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.emails",isArray:!1,description:"<p>Cuentas de correo electr\xF3nico</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.comparePreviousPeriod",isArray:!1,description:"<p>Compare con el periodo anterior (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.crossSalesOrInventories",isArray:!1,description:"<p>Cruce con ventas o inventarios (1 = si se selecciono 0 = si no se selecciono)</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",isArray:!0,description:"<p>Listado de comerciantes seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.eanTrader",isArray:!1,description:"<p>Ean del comerciante seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterTraders",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterTraders.trader",isArray:!1,description:"<p>Nombre del comerciante seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterEansPointsales",isArray:!0,description:"<p>Listado de eans de puntos de venta seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",isArray:!0,description:"<p>Listado de puntos de venta seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.eanPointSale",isArray:!1,description:"<p>Ean del punto de venta seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterPointSales",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterPointSales.pointSaleName",isArray:!1,description:"<p>Nombre del punto de venta seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterFormats",isArray:!0,description:"<p>Listado de los formatos seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",isArray:!0,description:"<p>Listado de los departamentos-estados seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelOne",isArray:!1,description:"<p>Id del departamento-estado seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelOne",isArray:!1,description:"<p>Nombre del departamento-estado seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel4Geographies",isArray:!0,description:"<p>Listado de las ciudades seleccionadas</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.idLevelFour",isArray:!1,description:"<p>Id de la ciudad seleccionada</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterLevel1Geographies",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterLevel1Geographies.levelFour",isArray:!1,description:"<p>Nombre de la ciudad seleccionada</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterChannels",isArray:!0,description:"<p>Listado de los canales seleccionados</p> <p>@@apiSuccess (200){Object[]} dynamicReportDTO.lstFilterLevel1Categories Listado de las categorias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",isArray:!0,description:"<p>Listado de los productos seleccionados</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.eanProduct",isArray:!1,description:"<p>Ean del producto seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterProducts",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterProducts.productName",isArray:!1,description:"<p>Nombre del producto seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstLevel1Jeraquies",isArray:!0,description:"<p>Listado de las jerarquias nivel 1 seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",isArray:!0,description:"<p>Listado de los vendedores seleccionados</p> <p>@@apiSuccess (200){String} dynamicReportDTO.lstFilterSalesMan.salesManCode C\xF3digo del vendedor seleccionado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO.lstFilterSalesMan",parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSalesMan.salesMan",isArray:!1,description:"<p>Nombre del vendedor seleccionado</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterBrands",isArray:!0,description:"<p>Listado de las marcas seleccionadas</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterColors",isArray:!0,description:"<p>Listado de los colores seleccionados</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.lstFilterSizes",isArray:!0,description:"<p>Listado de las tallas seleccionadas</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkTrader",isArray:!1,description:"<p>CheckBox comerciante (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkPointSale",isArray:!1,description:"<p>CheckBox punto de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkChanel",isArray:!1,description:"<p>CheckBox canales (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkFormat",isArray:!1,description:"<p>CheckBox formatos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkDepartamentState",isArray:!1,description:"<p>CheckBox deparatemeto-estado (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCity",isArray:!1,description:"<p>CheckBox ciudad (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesForceHierarchy",isArray:!1,description:"<p>CheckBox jeraruia de fuerza de venta (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkSalesMan",isArray:!1,description:"<p>CheckBox vendedor (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkCategoriesProduct",isArray:!1,description:"<p>CheckBox arbol de categoria de productos (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkProduct",isArray:!1,description:"<p>CheckBox producto (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkBrand",isArray:!1,description:"<p>CheckBox marca (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkColor",isArray:!1,description:"<p>CheckBox color (1= si se selecciono 0= si no se selecciono)</p> <p>@@apiSuccess (200){Number} dynamicReportDTO.checkSize CheckBox talla (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,field:"cdynamicReportDTO.heckDispatchUnit",isArray:!1,description:"<p>CheckBox unidad de despacho (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkStandardUnit",isArray:!1,description:"<p>CheckBox unidad estandar (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkWeight",isArray:!1,description:"<p>CheckBox peso (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.checkVolume",isArray:!1,description:"<p>CheckBox volumen (1= si se selecciono 0= si no se selecciono)</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.idUser",isArray:!1,description:"<p>Id del usuario que se encuentra logueado se concatenan las tres primeras letras del nombre y apellido del usuario logueado</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"dynamicReportDTO",field:"dynamicReportDTO",type:"Object[]",isArray:!0},field:"dynamicReportDTO.creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario que se encuentra logueado</p>"}]},examples:[{title:"Success-Response:",content:`
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
                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/DynamicReportWebApi.java",groupTitle:"Reporte_dinamico"},{type:"put",url:"/roles",title:"Actualizaci\xF3n de rol",name:"Actualizaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite actualizar los datos del rol y sus permisos</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1=Activo , 0 = Inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Tipo de rol(cliente o carvajal) = (SI NO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
  "responseMessage": "Cambios guardados exitosamente",

  "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
   "responseCode" : "1005",

   "responseMessage": "El Rol existe en el sistema. Por favor ingrese un nombre diferente de Rol"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1002",

   "responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir el error "
                      "por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/products",title:"Consulta roles por producto",name:"Consulta_roles_por_producto",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos roles que pertenecen a un producto en especifico o solo roles tip\xF3 cliente y el estado del rol sea activo</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opcion del menu tipo producto seleccionada</p>"},{group:"Parameter",type:"Boolean",optional:!1,field:"isClient",isArray:!1,description:"<p>campo que indica si el listado de roles es para un usuario administrador carvajal o un usuario cliente</p>"}]},examples:[{title:"Request-Example:",content:`
{
  "idMenuOption": "e7c2b9d8-9c8e-4db0-bbb8-874e793e5114",
  "isClient": false
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>Listado de opciones del menu asignadas al rol</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles",title:"Creaci\xF3n de rol",name:"Creaci\xF3n_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite crear un nuevo rol en el sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre para el rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n para el rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1= activo 0 = inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>id del producto asigando al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto asignado al rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Tipo de rol(cliente o carvajal) = (SI NO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>listado de Clave de partici\xF3n =&gt;(pk) de las opciones del menu asigndas al rol</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
   "responseMessage": "Cambios guardados exitosamente",

   "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
   "responseCode" : "1005",

   "responseMessage": "El Rol existe en el sistema. Por favor ingrese un nombre diferente de Rol"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1001",

   "responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir el error "
                      "por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"delete",url:"/roles",title:"Eliminaci\xF3n de rol",name:"Eliminaci\xF3n_de_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permire eliminar un rol del sistema</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de Ordenaci\xF3n del objecto</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk": "menu_option#uuid_1",
    "sk": "role#uuid_1"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{

   "responseMessage": "Cambios guardados exitosamente",

   "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{

  "responseMessage": "El Rol Administrador que desea eliminar tiene usuarios asignados. "
  "Por favor reasignar estos usuarios a un Rol diferente desde Administrar usuarios, antes de continuar "
  " con la eliminaci\xF3n.",

  "responseCode": "1003"

}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseCode" : "1003",

   "responseMessage": "error removing role"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/filter",title:"Filtro de roles",name:"Filtro_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite filtrar los roles por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1= activo, 0=inactivo)</p>"},{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto IMPORTANTE cuando se quiere filtrar por el rol se debe enviar el pk y el sk correspondiente al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opcion del menu que se selecciono</p>"},{group:"Parameter",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Tipo de cliente del rol (SI,NO,Todos) IMPORTANTE  si se selecciona todos enviar el valor de campo vacio ejemplo ( clientType = &quot;&quot; )</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",isArray:!1,description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/providers/administrations",title:"Filtro roles lado del cliente",name:"Filtro_roles_lado_del_cliente",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles que sean marcados como tipo cliente que tengan relacion con los filtros aplicados de productos contratados y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partion del objecto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenacion del objecto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del producto contratado selecionado</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",isArray:!1,description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
   "responseCode" : "1004",

   "responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir el error "
                      "por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"get",url:"/roles",title:"Listado de roles",name:"Listado_de_roles",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles</p>",permission:[{name:"Usuario administrador"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",isArray:!1,description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/products/providers",title:"Roles tipo cliente por productos",name:"Roles_tipo_cliente_por_productos",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todos los roles que sean marcados como tipo cliente con estado activo que tengan relacion con los productos contrados de la empresa</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"}]},examples:[{title:"Request-Example:",content:`
{
"country": "CO",
"eanCompany": "CASSANDRA"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de roles</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"descriptionRole",isArray:!1,description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del rol (1 = activo, 0 = inactivo)</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre del producto al que pertenece el rol</p>"},{group:"200",type:"String",optional:!1,field:"clientType",isArray:!1,description:"<p>Typo cliente del rol</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y apellido del usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Nombre y apellido de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de ctualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,field:"lstMenuOptions",isArray:!0,description:"<p>Listado de opciones del menu asignadas al rol</p>"},{group:"200",type:"Boolean",optional:!1,field:"containsUsers",isArray:!1,description:"<p>Campo que indica si un rol tipo cliente tiene usuarios asignados</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"post",url:"/roles/menus",title:"Visualizar men\xFA por rol",name:"Visualizar_men\xFA_por_rol",group:"Roles",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las opciones de men\xFA que fueron asignadas al rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partion del objecto seleccionado</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenacion del objecto seleccionado</p>"}]},examples:[{title:"Request-Example:",content:`
{ 
"pk":"id_role#f01b6c52-213d-4c2a-ab87-4b7effe35566",
"sk":"root"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de opciones de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"Parent",isArray:!1,description:"<p>Id padre al que pertenece la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"parentMenuOptionName",isArray:!1,description:"<p>Nombre de men\xFA padre</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"productType",isArray:!1,description:"<p>seleccion 1 si es tipo producto, 0 si no es tipo producto</p>"},{group:"200",type:"String",optional:!1,field:"description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"Number",optional:!1,field:"level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,field:"createDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario creaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,field:"descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RoleWebApi.java",groupTitle:"Roles"},{type:"put",url:"/configurations/routes/special/files",title:"Editar Configuraci\xF3n",name:"Editar_Configuraci\xF3n",group:"Rutas_archivos_especiales",version:"0.1.0",description:"<p>Este servicio permite editar la configuracion de las rutas para el envio de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de particion del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais al que pertenecera la empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",isArray:!1,description:"<p>Nombre de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Ruta para la entrega de los archivos especiales</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que esta editando el registro</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "pk":"country#CO",
    "sk":"ean_provider#12",
    "country":"CO",
    "eanProvider":"12",
    "provider": "prueba creacion56",
    "url":"RUTA DE ENVIO",
    "state": "ACTIVO",
    "modificationUser": "Francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "Cambios guardados correctamente",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "No encontramos informaci\xF3n que coincida con la b\xFAsqueda. 
                        Realiza un nuevo filtro",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 
                        satisfactoriamente. Intenta nuevamente en unos segundos 
                        o comun\xEDcate con soporte https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationRouteSpecialFileWebApi.java",groupTitle:"Rutas_archivos_especiales"},{type:"post",url:"/configurations/routes/special/files",title:"Guardar Configuraci\xF3n",name:"Guardar_Configuraci\xF3n",group:"Rutas_archivos_especiales",version:"0.1.0",description:"<p>Este servicio permite Guardar la configuracion de las rutas para el envio de archivos especiales</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais al que pertenecera la empresa</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",isArray:!1,description:"<p>Nombre de la empresa seleccionada</p>"},{group:"Parameter",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Ruta para la entrega de los archivos especiales</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"Parameter",type:"String",optional:!1,field:"creationUser",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que esta creando el registro</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country":"CO",
    "eanProvider":"12",
    "provider": "prueba creacion56",
    "url":"RUTA DE ENVIO",
    "state": "ACTIVO",
    "creationUser": "Francisco Diaz"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
    "responseMessage": "La ruta se ha creado correctamente para la entrega de los archivos especiales",
    "responseCode": "0"
}`,type:"json"},{title:"Success-Response:",content:`
{
    "responseMessage": "La empresa prueba creacion56 ya tiene configurada una 
                      ruta para la entrega de los archivos especiales. Modifica 
                      los datos e intenta de nuevo",
    "responseCode": "1005"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
    "responseMessage": "El sistema no responde o el proceso no se termin\xF3 
                        satisfactoriamente. Intenta nuevamente en unos segundos 
                        o comun\xEDcate con soporte https://soporte.cen.biz/.",
    "responseCode": "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationRouteSpecialFileWebApi.java",groupTitle:"Rutas_archivos_especiales"},{type:"post",url:"/configurations/routes/special/files/administrations",title:"listado rutas archivos especiales",name:"listado_rutas_archivos_especiales",group:"Rutas_archivos_especiales",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de las rutas para el envio de los archivos especiales para los clientes</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstProviders",isArray:!0,description:"<p>listado con el ean del proveedor seleccionado IMPORTANTE = si no se selecciono data o si se seleeciono todos los registros enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEanProviders",isArray:!0,description:"<p>Listado de eans de proveedores seleccionados IMPORTANTE = si no se selecciono data o si se seleeciono todos los registros enviar la lista vacia</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "country":"CO",
    "lstProviders":[],
    "lstEanProviders":[]
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de rutas configuradas</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"provider",isArray:!1,description:"<p>Nombre del fabricante</p>"},{group:"200",type:"String",optional:!1,field:"url",isArray:!1,description:"<p>Ruta para el envio de los reportes</p>"},{group:"200",type:"String",optional:!1,field:"creationUser",isArray:!1,description:"<p>Usuario que creo el registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>fecha de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationUser",isArray:!1,description:"<p>Usuario que medifico el registro</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso de persistir 
                   el error por favor comunicarse con Soporte https://soporte.cen.biz/",
"responseCode": "1004"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ConfigurationRouteSpecialFileWebApi.java",groupTitle:"Rutas_archivos_especiales"},{type:"post",url:"/requests/savereload",title:"Guardar Solicitud Aplicar Recarga",name:"CGuardar_Solicitud_Aplicar_Recarga",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite Guardar Solicitud Aplicar Recarga</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object[]",optional:!1,field:"loadAuditReloadArray",isArray:!0,description:"<p>Listado de las opciones seleccionadas por el usuario para realizar la recarga</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.pk",isArray:!1,description:"<p>Clave de partici\xF3n del objeto</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objeto</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.bgm",isArray:!1,description:`<p>identificador asociado al</p> <pre><code>      documento de transmisi\xF3n de
      carga
</code></pre>`},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.country",isArray:!1,description:"<p>pais</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.eanProvider",isArray:!1,description:"<p>id del proveedor</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.eanTrader",isArray:!1,description:"<p>id del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.fileName",isArray:!1,description:"<p>nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.loadDate",isArray:!1,description:"<p>fecha de carga</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.loadDay",isArray:!1,description:"<p>dia de carga</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.loadHour",isArray:!1,description:"<p>hora de carga</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.loadMonth",isArray:!1,description:"<p>mes de carga</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.loadYear",isArray:!1,description:"<p>a\xF1o de carga</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.pathFile",isArray:!1,description:"<p>ubicaci\xF3n del archivo</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.provider",isArray:!1,description:"<p>nombre del provedor</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.snrf",isArray:!1,description:"<p>codigo referencia</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.state",isArray:!1,description:"<p>estado que trae la consulta</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.trader",isArray:!1,description:"<p>nombre del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"loadAuditReloadArray",field:"loadAuditReloadArray",type:"Object[]",isArray:!0},field:"loadAuditReloadArray.typeDocument",isArray:!1,description:"<p>si en sales o stok</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>usuario que crea la solicitud</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
                   {

                   "responseCode" : "0",

                   "responseMessage": "Los documentos seleccionados est\xE1n en proceso de recarga.
Consulta el estado de la recarga unificada en la funcionalidad Ver Solicitudes"

                   }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/savedelete",title:"Guardar Solicitud Aplicar borrado",name:"CGuardar_Solicitud_Aplicar_borrado",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite Guardar Solicitud Aplicar borrado</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre y Apellido del usuario que crea la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",isArray:!1,description:"<p>tipo de documento si es ventas o inventarios</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"provider",isArray:!0,description:"<p>Listado de los providers seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"provider",field:"provider",type:"Object[]",isArray:!0},field:"provider.eanCompany",isArray:!1,description:"<p>id del provedor</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"provider",field:"provider",type:"Object[]",isArray:!0},field:"provider.nameCompany",isArray:!1,description:"<p>Nombre del Provedor</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"trader",isArray:!0,description:"<p>Listado de los traders seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"trader",field:"trader",type:"Object[]",isArray:!0},field:"trader.eanCompany",isArray:!1,description:"<p>id del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,parentNode:{path:"trader",field:"trader",type:"Object[]",isArray:!0},field:"trader.nameCompany",isArray:!1,description:"<p>Nombre del comerciante</p>"},{group:"Parameter",type:"String",optional:!1,field:"startDate",isArray:!1,description:"<p>fecha inicial de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"endDate",isArray:!1,description:"<p>fecha final de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDate",isArray:!1,description:"<p>tipo de fecha selecionada si es de carga o reportada</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
                  {

                  "responseCode" : "0",

                  "responseMessage": "Los registros est\xE1n en proceso de borrado.
Consulta el estado de la solicitud en la funcionalidad Ver Solicitudes"

                  }`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/cancellations",title:"Cancelar Solicitud recargas",name:"Cancelar_Solicitud_recargas",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite cancelar la solitud de recarga que se encuentre en estado pendiente, si el estado es diferente a este el sistema no cancelara la solitud</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de particion asignada al objecto</p>"},{group:"Parameter",type:"String",optional:!1,field:"idRequest",isArray:!1,description:"<p>Id de la solicitud de borrado o recarga</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",isArray:!1,description:"<p>Tipo de documento (sales,stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestType",isArray:!1,description:"<p>Tipo de solicitud (RECARGA)</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del proveedor asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>Ean del comerciante asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"trader",isArray:!1,description:"<p>Nombre del comerciante asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"provider",isArray:!1,description:"<p>Nombre del proveedor asignado a la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"cancelUser",isArray:!1,description:"<p>Nombre y apellido del usuario logueado que cancela la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests/downloads/logs",title:"Descarga logs",name:"Descarga_logs",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo log generado cuando se procesa la recarga o borrado de informacion y presenta fallas</p>",permission:[{name:"Usuario Administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre del archivo log</p>"},{group:"Parameter",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>ruta del archivo log</p>"}]},examples:[{title:"Request-Example:",content:`
{
"logFileName": "cargaParcialFuerzaVentas_log.csv",
"pathLogFileName":
"analitica-dev-prescriptiva-logs-etl-bucket/sales_force"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/loadaudit/filter",title:"Filtro opciones de recarga",name:"Guardar_Filtro_opciones_de_recarga",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio le permite realizar el filtro para listar las opciones que se pueden elegir en una solicitud de recarga.</p>",parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"typeDocument",isArray:!1,description:"<p>tipo de documento si es ventas o inventarios</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Pais</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"provider",isArray:!0,description:"<p>Listado de los providers seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>id del provedor</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameCompany",isArray:!1,description:"<p>Nombre del Provedor</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"trader",isArray:!0,description:"<p>Listado de los traders seleccionados</p>"},{group:"Parameter",type:"String",optional:!1,field:"startDate",isArray:!1,description:"<p>fecha inicial de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"endDate",isArray:!1,description:"<p>fecha final de reporte o de carga</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDate",isArray:!1,description:"<p>tipo de fecha selecionada si es de carga o reportada</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de solicitudes</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"bgm",isArray:!1,description:"<p>identificador asociado al documento de transmisi\xF3n de carga</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>pais</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>id del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>id del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"loadDate",isArray:!1,description:"<p>fecha de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadDay",isArray:!1,description:"<p>dia de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadHour",isArray:!1,description:"<p>hora de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadMonth",isArray:!1,description:"<p>mes de carga</p>"},{group:"200",type:"String",optional:!1,field:"loadYear",isArray:!1,description:"<p>a\xF1o de carga</p>"},{group:"200",type:"String",optional:!1,field:"pathFile",isArray:!1,description:"<p>ubicaci\xF3n del archivo</p>"},{group:"200",type:"String",optional:!1,field:"provider",isArray:!1,description:"<p>nombre del provedor</p>"},{group:"200",type:"String",optional:!1,field:"snrf",isArray:!1,description:"<p>codigo referencia</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>estado que trae la consulta</p>"},{group:"200",type:"String",optional:!1,field:"trader",isArray:!1,description:"<p>nombre del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"typeDocument",isArray:!1,description:"<p>si en sales o stok</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/LoadAuditWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/requests",title:"Listado solicitudes borrado y recargas",name:"Listado_solicitudes_borrado_y_recargas",group:"Solicitudes",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de todas las solictudes de borrado y recarga de informaci\xF3n segun los filtros aplicados</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais a consultar</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansTraders",isArray:!0,description:"<p>Listado de eans de comerciantes seleccionados IMPORTANTE si se seleccionaron todos o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"lstEansProviders",isArray:!0,description:"<p>Listado de eans de fabricantes seleccionados IMPORTANTE si se seleccionaron todos o la palabra todos enviar la lista vacia</p>"},{group:"Parameter",type:"String",optional:!1,field:"typeDocument",isArray:!1,description:"<p>Tipo de documento a consultar (sales, stock)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestType",isArray:!1,description:"<p>Tipo de solicitud a consultar (RECARGA, BORRADO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestStartDate",isArray:!1,description:"<p>Fecha inicio de la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"requestEndDate",isArray:!1,description:"<p>Fecha final de la solicitud</p>"},{group:"Parameter",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>Nombre del usuario que creo la solicitud</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de solicitudes</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!1,field:"idRequest",isArray:!1,description:"<p>id de la Solicitud</p>"},{group:"200",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>C\xF3digo del pais</p>"},{group:"200",type:"String",optional:!1,field:"typeDocument",isArray:!1,description:"<p>Tipo de documento</p>"},{group:"200",type:"String",optional:!1,field:"requestType",isArray:!1,description:"<p>Tipo de solicitud</p>"},{group:"200",type:"String",optional:!0,field:"fileName",isArray:!1,description:"<p>Nombre del archivo edi a recargar</p>"},{group:"200",type:"String",optional:!0,field:"pathFile",isArray:!1,description:"<p>Ruta del archivo edi</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"provider",isArray:!1,description:"<p>Nombre del proveedor</p>"},{group:"200",type:"String",optional:!1,field:"eanTrader",isArray:!1,description:"<p>Ean del comerciante</p>"},{group:"200",type:"String",optional:!1,field:"trader",isArray:!1,description:"<p>Nombre del comerciante</p>"},{group:"200",type:"String",optional:!0,field:"loadDate",isArray:!1,description:"<p>Fecha de carga del archivo edi</p>"},{group:"200",type:"String",optional:!0,field:"startDate",isArray:!1,description:"<p>Fecha inical de carga ventas o inventarios</p>"},{group:"200",type:"String",optional:!0,field:"endDate",isArray:!1,description:"<p>Fecha final de carga ventas o inventarios</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre del archivo log</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Ruta del archivo log</p>"},{group:"200",type:"String",optional:!1,field:"requestDate",isArray:!1,description:"<p>Fecha de la solicitud</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>usuario que creo la solicitud</p>"},{group:"200",type:"String",optional:!1,field:"cancelUser",isArray:!1,description:"<p>usuario que cancelo la solicitud</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>fecha de Modificacion de la solicitud</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/RequestWebApi.java",groupTitle:"Solicitudes"},{type:"post",url:"/masters/uploads/budgetseller",title:"Carga archivo maestro presupuesto",name:"Carga_archivo_maestro_presupuesto",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo maestro de presupuesto por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Valor 14 archivo maestro presupuesto</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",isArray:!1,description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 14,
    "eanProvider": "7702010000010",
    "fileName": "archivo.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"get",url:"/typefiles/displayweb",title:"Listado de tipos de archivos maestros",name:"Listado_de_tipos_de_archivos_maestros",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite obtener los  tipos de archivo maestro que se  mostrarar en la lista de seleccion maestro &quot;Listado de tipos de archivos maestros&quot;</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": ""error listando typeFile"",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/TypeFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"post",url:"/masters/uploads/productsreferences",title:"carga archivo maestro referenciales productos",name:"carga_archivo_maestro_referenciales_productos",group:"Uploads_archivo_maestros",version:"0.1.0",description:"<p>Este servicio permite la carga del archivo referenciales de productos por medio de la p\xE1gina web</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Object",optional:!1,field:"typeFile",isArray:!1,description:"<p>Tipo de archivo que se va a cargar</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Valor 13 archivo referencial de productos</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",isArray:!1,description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 13,
    "eanProvider": "7702010000010",
    "fileName": "archivo.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_archivo_maestros"},{type:"post",url:"/masters/uploads/catalogs",title:"Carga de archivo catalogo",name:"Carga_de_archivo_catalogo",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite la carga de catalogo de productos por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Valor 1 archivo de catalogo</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",isArray:!1,description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 1,
    "eanProvider": "7702010000010",
    "fileName": "catalogo de productos2.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/downloads/guides",title:"Descarga gu\xEDa cat\xE1logo de productos",name:"Descarga_gu\xEDa_cat\xE1logo_de_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de cat\xE1logo de productos</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/downloads/templates",title:"Descarga plantilla catalogo productos",name:"Descarga_plantilla_catalogo_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla del catalogo de productos</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"get",url:"/products/companies/:eanCompany",title:"Previsualizar productos",name:"Previsualizar_productos",group:"Uploads_catalogo",version:"0.1.0",description:"<p>Este servicio permite obtener la vista previa del catalogo de productos para un fabricante en especifico</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia que se encuentra logueada</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de productos</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenac\xEDon del objecto</p>"},{group:"200",type:"String",optional:!0,field:"eanProvider",isArray:!1,description:"<p>Ean del fabricante</p>"},{group:"200",type:"String",optional:!0,field:"eanProduct",isArray:!1,description:"<p>Ean del producto</p>"},{group:"200",type:"String",optional:!0,field:"description",isArray:!1,description:"<p>Descripcion del producto</p>"},{group:"200",type:"String",optional:!0,field:"plu",isArray:!1,description:"<p>Codigo Interno del producto</p>"},{group:"200",type:"Number",optional:!0,field:"conversionUnit",isArray:!1,description:"<p>Unidad conversi\xF3n del producto</p>"},{group:"200",type:"double",optional:!0,field:"unitValue",isArray:!1,description:"<p>Valor unitario del producto</p>"},{group:"200",type:"double",optional:!0,field:"tax",isArray:!1,description:"<p>Iva del producto</p>"},{group:"200",type:"double",optional:!0,field:"weight",isArray:!1,description:"<p>Peso del producto</p>"},{group:"200",type:"String",optional:!0,field:"size",isArray:!1,description:"<p>Talla del producto</p>"},{group:"200",type:"double",optional:!0,field:"volume",isArray:!1,description:"<p>Volumen del producto</p>"},{group:"200",type:"String",optional:!0,field:"color",isArray:!1,description:"<p>Color del producto</p>"},{group:"200",type:"String",optional:!0,field:"brand",isArray:!1,description:"<p>Marca del producto</p>"},{group:"200",type:"Number",optional:!0,field:"state",isArray:!1,description:"<p>Estado del producto (Activo \xF3 Inactivo) =&gt; 1 \xF3 0</p>"},{group:"200",type:"String",optional:!1,field:"levelZero",isArray:!1,description:"<p>Nivel 0 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelOne",isArray:!1,description:"<p>Nivel 1 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTwo",isArray:!1,description:"<p>Nivel 2 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelThree",isArray:!1,description:"<p>Nivel 3 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelFour",isArray:!1,description:"<p>Nivel 4 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelFive",isArray:!1,description:"<p>Nivel 5 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelSix",isArray:!1,description:"<p>Nivel 6 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelSeven",isArray:!1,description:"<p>Nivel 7 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelEight",isArray:!1,description:"<p>Nivel 8 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelNine",isArray:!1,description:"<p>Nivel 9 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTen",isArray:!1,description:"<p>Nivel 10 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelEleven",isArray:!1,description:"<p>Nivel 11 del producto</p>"},{group:"200",type:"String",optional:!1,field:"levelTwelve",isArray:!1,description:"<p>Nivel 12 del producto</p>"},{group:"200",type:"Number",optional:!1,field:"totalProducts",isArray:!1,description:"<p>Total de productos que pertecen a la ultima categoria</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/ProductWebApi.java",groupTitle:"Uploads_catalogo"},{type:"post",url:"/masters/uploads",title:"Filtro de archivos",name:"Filtro_de_archivos",group:"Uploads_files",version:"0.1.0",description:"<p>Este servicio permite filtrar los archivos cargados por un estado y tipo de archivo. si se desea listar archivos de Catalogo de productos enviar idFileType = 1 , si se desea listar archivos de Fuerza de ventas enviar idFileType = 2 , si se desea listar archivos de Geografias enviar idFileType = 4 , si se desea listar archivos de puntos de venta enviar idFileType = 3<br> si se desea listar archivos de Productos Referenciales enviar idFileType = 13 si se desea listar archivos de Presupuesto por Vendedor enviar idFileType = 14</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Id del archivo a consultar</p>"},{group:"Parameter",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Nombre del estado a consultar</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",isArray:!1,description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",isArray:!1,description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",isArray:!1,description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",isArray:!1,description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",isArray:!1,description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_files"},{type:"get",url:"/masters/uploads/companies/:eancompany/typefiles/:idTypeFile",title:"Listado de carga de archivos",name:"Listado_de_carga_de_archivos",group:"Uploads_files",version:"0.1.0",description:"<p>Este servicio permite obtener el listado de los archivos cargados por la pagina web para una compa\xF1ia y un tipo de archivo. si se desea listar archivos de Catalogo de productos enviar idTypeFile = 1 , si se desea listar archivos de Fuerza de ventas envia idTypeFile = 2 , si se desea listar archivos de Geografias enviar idTypeFile = 4 , si se desea listar archivos de Puntos de venta enviar idTypeFile = 3 si se desea listar archivos de Productos Referenciales enviar idTypeFile = 13 si se desea listar archivos de Presupuesto por Vendedor enviar idTypeFile = 14</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"eancompany",isArray:!1,description:"<p>ean de la compa\xF1ia</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idTypeFile",isArray:!1,description:"<p>Id del tipo de archivo</p>"}]}},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de archivos</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de Ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>ean de la compa\xF1ia que cargo el archivo</p>"},{group:"200",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Tipo de archivo cargado</p>"},{group:"200",type:"String",optional:!1,field:"pathFileName",isArray:!1,description:"<p>Path de ubicacion del archivo</p>"},{group:"200",type:"String",optional:!1,field:"uploadDate",isArray:!1,description:"<p>Fecha de carga el archivo</p>"},{group:"200",type:"String",optional:!1,field:"starDate",isArray:!1,description:"<p>Fecha en que se inicio a procesar el archivo</p>"},{group:"200",type:"String",optional:!1,field:"endDate",isArray:!1,description:"<p>Fecha final de precesamiento del archivo</p>"},{group:"200",type:"String",optional:!1,field:"state",isArray:!1,description:"<p>Estado del archivo</p>"},{group:"200",type:"String",optional:!1,field:"awsUploadLog",isArray:!1,description:"<p>Log de error en la carga a s3</p>"},{group:"200",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre del usuario que cargo el archivo</p>"},{group:"200",type:"String",optional:!1,field:"pathLogFileName",isArray:!1,description:"<p>Path de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"logFileName",isArray:!1,description:"<p>Nombre de log del archivo</p>"},{group:"200",type:"String",optional:!1,field:"type",isArray:!1,description:"<p>Typo de archivo puede ser UPLOAD O DOWNLOAD</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_files"},{type:"post",url:"/masters/uploads/salesforce",title:"Carga archivo fuerza venta",name:"Carga_archivo_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo fuerza venta por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Valor 2 archivo de fuerza de venta</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",isArray:!1,description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 2,
    "eanProvider": "7702010000010",
    "fileName": "Fuerza ve venta.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"get",url:"/salesforce/downloads/guides",title:"Descarga gu\xEDa fuerza venta",name:"Descarga_gu\xEDa_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de fuerza de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"get",url:"/salesforce/downloads/templates",title:"Descarga plantilla fuerza venta",name:"Descarga_plantilla_fuerza_venta",group:"Uploads_fuerza_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla de fuerza de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/SalesForceWebApi.java",groupTitle:"Uploads_fuerza_venta"},{type:"post",url:"/masters/uploads/salepoints",title:"Carga puntos de ventas",name:"Carga_puntos_de_ventas",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite la carga de Carga del archivo de puntos de ventas por medio de la p\xE1gina web al bucket S3 de aws</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"idFileType",isArray:!1,description:"<p>Valor 3 archivo de puntos de venta</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanProvider",isArray:!1,description:"<p>Ean de la compa\xF1ia logueada</p>"},{group:"Parameter",type:"String",optional:!1,field:"country",isArray:!1,description:"<p>Codigo del pais del fabricante logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"Parameter",type:"String",optional:!1,field:"idUser",isArray:!1,description:"<p>Tres primera letras del nombre y apellido del usuario logueado ejemplo(fradia)</p>"},{group:"Parameter",type:"String",optional:!1,field:"emailLoad",isArray:!1,description:"<p>Correo de usuario que esta logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"userLoad",isArray:!1,description:"<p>Nombre y apellido del usuario logueado</p>"},{group:"Parameter",type:"String",optional:!1,field:"fileUpload",isArray:!1,description:"<p>Archivo a cargar codificado en base64</p>"}]},examples:[{title:"Request-Example:",content:`
{
    "idFileType": 3,
    "eanProvider": "7702010000010",
    "fileName": "puntos de venta.csv",
    "idUser": "fradia",
    "emailLoad": "correo@prueba",
    "userLoad": "francisco diaz",
    "fileUpload": "VGV4dG8gZGUgcHJ1ZWJhLg==",
    "country": "CO"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
 }`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{

   "responseMessage": "error registrando el archivo",
   
   "responseCode" : "1001"
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/MasterFileWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"get",url:"/salepoints/downloads/guides",title:"Descarga gu\xEDa puntos de venta",name:"Descarga_gu\xEDa_puntos_de_venta",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo gu\xEDa para diligenciar plantilla de puntos de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"get",url:"/salepoints/downloads/templates",title:"Descarga plantilla puntos de venta",name:"Descarga_plantilla_puntos_de_venta",group:"Uploads_puntos_de_venta",version:"0.1.0",description:"<p>Este servicio permite obtener el archivo plantilla de puntos de venta</p>",permission:[{name:"Usuario autorizado"}],success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileName",isArray:!1,description:"<p>Nombre del archivo</p>"},{group:"200",type:"String",optional:!1,field:"fileContent",isArray:!1,description:"<p>Contenido del archivo codificado en base64</p>"}]},examples:[{title:"Success-Response:",content:`
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

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/PointSaleWebApi.java",groupTitle:"Uploads_puntos_de_venta"},{type:"post",url:"/users/companies",title:"Administraci\xF3n usuario lado cliente",name:"Administraci\xF3n_usuario_lado_cliente",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite Obtener el listado de los usuarios filtrados por el productos contratod o por el rol o por estado del usuario</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>Estado del usduario (1= ACTIVO, 0 = INACTIVO)</p>"},{group:"Parameter",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de la opci\xF3n dle menu del producto contratado</p>"},{group:"Parameter",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>(OBLIBATORIO) Ean de la compa\xF1ia logueada</p>"}]},examples:[{title:"Request-Example:",content:`
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

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con el listado de usuarios</p>"},{group:"200",type:"String",optional:!1,field:"pk",isArray:!1,description:"<p>Clave de partici\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"sk",isArray:!1,description:"<p>Clave de ordenaci\xF3n del objecto</p>"},{group:"200",type:"String",optional:!1,field:"pkGsi",isArray:!1,description:"<p>Indice Global del Objecto</p>"},{group:"200",type:"String",optional:!1,field:"skLsi",isArray:!1,description:"<p>Ondice Local del objecto</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",isArray:!1,description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Correo dle usuario</p>"},{group:"200",type:"String",optional:!1,field:"phone",isArray:!1,description:"<p>telefono del usuario</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id Opcion de menu tipo producto contratado</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre Opcion de menu tipo producto contratado</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nomvbre del rol asignado</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol asignado</p>"},{group:"200",type:"Number",optional:!1,field:"state",isArray:!1,description:"<p>estado del usuario</p>"},{group:"200",type:"String",optional:!1,field:"createUser",isArray:!1,description:"<p>usuario de creacion del registro</p>"},{group:"200",type:"String",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creacion de registro</p>"},{group:"200",type:"String",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificai\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario que modifico el registro</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1004",

"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso
de persistir el error "
"por favor comunicarse con Soporte https://soporte.cen.biz/"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users",title:"Creacion de usuario",name:"Creacion_de_usuario",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite crear un usuario en la plataforma</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Id de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"Parameter",type:"String",optional:!1,field:"firstName",isArray:!1,description:"<p>Nombre del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>Apellido del usuario</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Email del usuario</p>"},{group:"Parameter",type:"Number",optional:!1,field:"phone",isArray:!1,description:"<p>Numero de telefono</p>"},{group:"Parameter",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Id de opci\xF3n de men\xFA</p>"},{group:"Parameter",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n de menu</p>"},{group:"Parameter",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"Parameter",type:"Number",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"}]},examples:[{title:"Request-Example:",content:`
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
"country": "CO"}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1001",

"responseMessage": "error creating user"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"put",url:"/users",title:"Edici\xF3n de usuario",name:"Edici\xF3n_de_usuarios",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite editar el usuario</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"previousEmail",isArray:!1,description:"<p>Email previo del usuario</p>"},{group:"Parameter",type:"Object[]",optional:!1,field:"userCreateArray",isArray:!0,description:"<p>Array de permisos del usuario actualizados</p>"}]},examples:[{title:"Request-Example:",content:`
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"respondeCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
{
"responseMessage": "Cambios guardados exitosamente",
"responseCode": "0"
}`,type:"json"}]},error:{fields:{500:[{group:"500",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"500",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Error-Response:",content:`
{
"responseCode" : "1002",

"responseMessage": "Por favor int\xE9ntelo m\xE1s tarde. En caso
de persistir el error por favor comunicarse con Soporte
https://soporte.cen.biz/"

}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/users/filter",title:"Filtro de usuarios",name:"Filtro_de_usuarios",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio permite filtrar los usuarios por un estado y rol</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Boolean",optional:!1,field:"state",isArray:!1,description:"<p>Estado</p>"},{group:"Parameter",type:"Object",optional:!1,field:"role",isArray:!1,description:"<p>Rol a consultar</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"Parameter",type:"Object",optional:!1,field:"company",isArray:!1,description:"<p>Compa\xF1ia a consultar</p>"},{group:"Parameter",type:"Number",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.idCompany",isArray:!1,description:"<p>Id de la compa\xF1ia</p>"}]},examples:[{title:"Request-Example:",content:`
{

"company": {
"idCompany": 2
},
"role": {
"idRole": 1
},

"active": true

}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objecto de datos</p>"},{group:"200",type:"Object",optional:!1,field:"User",isArray:!1,description:"<p>Usuarios registrados</p>"},{group:"200",type:"Number",optional:!1,field:"idUser",isArray:!1,description:"<p>Id del usuario</p>"},{group:"200",type:"Object",optional:!1,field:"company",isArray:!1,description:"<p>Compa\xF1ia que pertenece el usuario</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.idCompany",isArray:!1,description:"<p>Id de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.nameCompany",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.country",isArray:!1,description:"<p>Pais de la compa\xF1ia</p>"},{group:"200",type:"boolean",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.active",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.typeCompany",isArray:!1,description:"<p>Tipo de compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.eanCompany",isArray:!1,description:"<p>Ean de la compa\xF1ia</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"company",field:"company",type:"Object",isArray:!1},field:"company.userLimit",isArray:!1,description:"<p>limite de usuarios activos</p>"},{group:"200",type:"Object",optional:!1,field:"role",isArray:!1,description:"<p>Rol asignado al usuario</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.descriptionRole",isArray:!1,description:"<p>Descripci\xF3n del rol</p>"},{group:"200",type:"boolean",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.active",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Object[]",optional:!1,parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",isArray:!0,description:"<p>Lista de opciones del men\xFA</p>"},{group:"200",type:"Object",optional:!1,parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",isArray:!1,description:"<p>Menu de opciones para el rol</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.idMenuRole",isArray:!1,description:"<p>Id del registro</p>"},{group:"200",type:"Object",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",isArray:!1,description:"<p>Opci\xF3n asignada del men\xFA</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.idMenu",isArray:!1,description:"<p>Id de la opci\xF3n del menu</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.idMenuParent",isArray:!1,description:"<p>Id padre de la opci\xF3n</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.name",isArray:!1,description:"<p>Nombre de la opci\xF3n del menu</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.description",isArray:!1,description:"<p>Descripci\xF3n de la opci\xF3n del menu</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.icon",isArray:!1,description:"<p>Ruta del icon</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.url",isArray:!1,description:"<p>Url a cargar</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.level",isArray:!1,description:"<p>Nivel en que se mostrara la opcion</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.active",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.orderMenu",isArray:!1,description:"<p>Orden en el que se pintara el menu</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.nameEnglish",isArray:!1,description:"<p>Nombre del men\xFA en ingles</p>"},{group:"200",type:"String",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole.menu",parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.menu.descriptionEnglish",isArray:!1,description:"<p>descripcion del men\xFA en ingles</p>"},{group:"200",type:"boolean",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.active",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,parentNode:{path:"role.lstMenuRole.menuRole",parentNode:{path:"role.lstMenuRole",parentNode:{path:"role",field:"role",type:"Object",isArray:!1},field:"role.lstMenuRole",type:"Object[]",isArray:!0},field:"role.lstMenuRole.menuRole",type:"Object",isArray:!1},field:"role.lstMenuRole.menuRole.userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"String",optional:!1,field:"firstName",isArray:!1,description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Email del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"active",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"phone",isArray:!1,description:"<p>Telefono del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`

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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/mails/:email",title:"Usuario por email",name:"Usuario_por_email",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio regresa un usuario cuando se realiza el login</p>",permission:[{name:"Todos los usuarios"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Email ingresado en el login</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",isArray:!1,description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",isArray:!1,description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`

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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"get",url:"/users/companies/:eanCompany",title:"Usuarios por compa\xF1ia",name:"Usuarios_por_compa\xF1ia",group:"Usuarios",version:"0.1.0",description:"<p>Este servicio le permite consultar los usuario que pertenecen a una compa\xF1ia</p>",permission:[{name:"Usuario administrador"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"Number",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Id unico de la compa\xF1ia</p>"}]}},success:{fields:{200:[{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objecto de datos</p>"},{group:"200",type:"String",optional:!1,field:"eanCompany",isArray:!1,description:"<p>Compa\xF1ia a la que pertenece el usuario</p>"},{group:"200",type:"String",optional:!1,field:"companyName",isArray:!1,description:"<p>Nombre de la compa\xF1ia</p>"},{group:"200",type:"String",optional:!1,field:"firstName",isArray:!1,description:"<p>Nombre del usuario</p>"},{group:"200",type:"String",optional:!1,field:"lastName",isArray:!1,description:"<p>Apellido del usuario</p>"},{group:"200",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Email del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"phone",isArray:!1,description:"<p>Telefono del usuario</p>"},{group:"200",type:"boolean",optional:!1,field:"state",isArray:!1,description:"<p>Estado del registro</p>"},{group:"200",type:"String",optional:!1,field:"idMenuOption",isArray:!1,description:"<p>Opci\xF3n de menu asignada al usuario</p>"},{group:"200",type:"String",optional:!1,field:"menuOptionName",isArray:!1,description:"<p>Nombre de la opci\xF3n de men\xFA</p>"},{group:"200",type:"String",optional:!1,field:"nameRole",isArray:!1,description:"<p>Nombre del rol</p>"},{group:"200",type:"String",optional:!1,field:"idRole",isArray:!1,description:"<p>Id del rol</p>"},{group:"200",type:"Number",optional:!1,field:"createUser",isArray:!1,description:"<p>Usuario de creaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"creationDate",isArray:!1,description:"<p>Fecha de creaci\xF3n del usuario</p>"},{group:"200",type:"Number",optional:!1,field:"userModification",isArray:!1,description:"<p>Usuario de actualizaci\xF3n del registro</p>"},{group:"200",type:"Number",optional:!1,field:"modificationDate",isArray:!1,description:"<p>Fecha de modificaci\xF3n del usuario</p>"},{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>Codigo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/UserWebApi.java",groupTitle:"Usuarios"},{type:"post",url:"/qlik",title:"Generaci\xF3n JWT qlik",name:"Generaci\xF3n_JWT_qlik",group:"qlik",version:"0.1.0",description:"<p>Este servicio permite obtener el token JWT de seguridad de qlik para el ingreso a los informes estad\xEDsticos</p>",permission:[{name:"Usuario autorizado"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"String",optional:!1,field:"name",isArray:!1,description:"<p>Nombre del usuario del cliente en qlik</p>"},{group:"Parameter",type:"String",optional:!1,field:"email",isArray:!1,description:"<p>Email del usuario del cliente en qlik</p>"}]},examples:[{title:"{",content:`
{
"name": "Ivan Hernandez",
"email": "ivan.hernandez.coral@gmail.com"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"String",optional:!1,field:"responseCode",isArray:!1,description:"<p>C\xF3digo de respuesta</p>"},{group:"200",type:"String",optional:!1,field:"responseMessage",isArray:!1,description:"<p>Mensaje de respuesta</p>"},{group:"200",type:"Object[]",optional:!1,field:"objectData",isArray:!0,description:"<p>Objeto con los datos del ticket</p>"}]},examples:[{title:"Success-Response:",content:`
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
}`,type:"json"}]},filename:"main/java/co/com/carvajal/platform/modules/orders/api/QlikWebApi.java",groupTitle:"qlik"}];const de={name:"Analitica",version:"0.1.0",description:"Documentacion para el proyecto de analitica",url:"http://prescriptiva-service/v1",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Sun May 28 2023 21:57:27 GMT-0500 (GMT-05:00)",url:"https://apidocjs.com",version:"1.0.2"}};Zt();const Pe=s().compile(h()("#template-header").html()),Te=s().compile(h()("#template-footer").html()),X=s().compile(h()("#template-article").html()),ye=s().compile(h()("#template-compare-article").html()),fe=s().compile(h()("#template-generator").html()),me=s().compile(h()("#template-project").html()),je=s().compile(h()("#template-sections").html()),Be=s().compile(h()("#template-sidenav").html()),Ue={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};de.template=Object.assign(Ue,(ze=de.template)!=null?ze:{}),de.template.forceLanguage&&Tt(de.template.forceLanguage);const $e=(0,n.groupBy)(Me,ae=>ae.group),Je={};h().each($e,(ae,re)=>{Je[ae]=(0,n.groupBy)(re,le=>le.name)});const ot=[];h().each(Je,(ae,re)=>{let le=[];h().each(re,(oe,Ee)=>{const Le=Ee[0].title;Le&&le.push(Le.toLowerCase()+"#~#"+oe)}),le.sort(),de.order&&(le=De(le,de.order,"#~#")),le.forEach(oe=>{const Le=oe.split("#~#")[1];re[Le].forEach(Ne=>{ot.push(Ne)})})}),Me=ot;let ut={};const Bt={};let jt={};jt[de.version]=1,h().each(Me,(ae,re)=>{ut[re.group]=1,Bt[re.group]=re.groupTitle||re.group,jt[re.version]=1}),ut=Object.keys(ut),ut.sort(),de.order&&(ut=Se(Bt,de.order)),jt=Object.keys(jt),jt.sort(a().compare),jt.reverse();const Et=[];ut.forEach(ae=>{Et.push({group:ae,isHeader:!0,title:Bt[ae]});let re="";Me.forEach(le=>{le.group===ae&&(re!==le.name?Et.push({title:le.title,group:ae,name:le.name,type:le.type,version:le.version,url:le.url}):Et.push({title:le.title,group:ae,hidden:!0,name:le.name,type:le.type,version:le.version,url:le.url}),re=le.name)})});function cr(ae,re,le){let oe=!1;if(!re)return oe;const Ee=re.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return Ee&&Ee.forEach(function(Le){const Ne=Le.substring(2,3),st=Le.replace(/<.+?>/g,""),vt=Le.match(/id="api-([^-]+)(?:-(.+))?"/),Nt=vt?vt[1]:null,ft=vt?vt[2]:null;Ne==="1"&&st&&Nt&&(ae.splice(le,0,{group:Nt,isHeader:!0,title:st,isFixed:!0}),le++,oe=!0),Ne==="2"&&st&&Nt&&ft&&(ae.splice(le,0,{group:Nt,name:ft,isHeader:!1,title:st,isFixed:!1,version:"1.0"}),le++)}),oe}let dr;if(de.header&&(dr=cr(Et,de.header.content,0),dr||Et.unshift({group:"_header",isHeader:!0,title:de.header.title==null?Ct("General"):de.header.title,isFixed:!0})),de.footer){const ae=Et.length;dr=cr(Et,de.footer.content,Et.length),!dr&&de.footer.title!=null&&Et.splice(ae,0,{group:"_footer",isHeader:!0,title:de.footer.title,isFixed:!0})}const Er=de.title?de.title:"apiDoc: "+de.name+" - "+de.version;h()(document).attr("title",Er),h()("#loader").remove();const Lr={nav:Et};h()("#sidenav").append(Be(Lr)),h()("#generator").append(fe(de)),(0,n.extend)(de,{versions:jt}),h()("#project").append(me(de)),de.header&&h()("#header").append(Pe(de.header)),de.footer&&(h()("#footer").append(Te(de.footer)),de.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const It={};let Ir="";ut.forEach(function(ae){const re=[];let le="",oe={},Ee=ae,Le="";It[ae]={},Me.forEach(function(Ne){ae===Ne.group&&(le!==Ne.name?(Me.forEach(function(st){ae===st.group&&Ne.name===st.name&&(Object.prototype.hasOwnProperty.call(It[Ne.group],Ne.name)||(It[Ne.group][Ne.name]=[]),It[Ne.group][Ne.name].push(st.version))}),oe={article:Ne,versions:It[Ne.group][Ne.name]}):oe={article:Ne,hidden:!0,versions:It[Ne.group][Ne.name]},de.sampleUrl&&de.sampleUrl===!0&&(de.sampleUrl=window.location.origin),de.url&&oe.article.url.substr(0,4).toLowerCase()!=="http"&&(oe.article.url=de.url+oe.article.url),ie(oe,Ne),Ne.groupTitle&&(Ee=Ne.groupTitle),Ne.groupDescription&&(Le=Ne.groupDescription),re.push({article:X(oe),group:Ne.group,name:Ne.name,aloneDisplay:de.template.aloneDisplay}),le=Ne.name)}),oe={group:ae,title:Ee,description:Le,articles:re,aloneDisplay:de.template.aloneDisplay},Ir+=je(oe)}),h()("#sections").append(Ir),de.template.aloneDisplay||(document.body.dataset.spy="scroll",h()("body").scrollspy({target:"#scrollingNav"})),h()(".form-control").on("focus change",function(){h()(this).removeClass("border-danger")}),h()(".sidenav").find("a").on("click",function(ae){ae.preventDefault();const re=this.getAttribute("href");if(de.template.aloneDisplay){const le=document.querySelector(".sidenav > li.active");le&&le.classList.remove("active"),this.parentNode.classList.add("active")}else{const le=document.querySelector(re);le&&h()("html,body").animate({scrollTop:le.offsetTop},400)}window.location.hash=re});function ht(ae){let re=!1;return h().each(ae,le=>{re=re||(0,n.some)(ae[le],oe=>oe.type)}),re}function kr(){h()('button[data-toggle="popover"]').popover().click(function(re){re.preventDefault()});const ae=h()("#version strong").html();if(h()("#sidenav li").removeClass("is-new"),de.template.withCompare&&h()("#sidenav li[data-version='"+ae+"']").each(function(){const re=h()(this).data("group"),le=h()(this).data("name"),oe=h()("#sidenav li[data-group='"+re+"'][data-name='"+le+"']").length,Ee=h()("#sidenav li[data-group='"+re+"'][data-name='"+le+"']").index(h()(this));(oe===1||Ee===oe-1)&&h()(this).addClass("is-new")}),h()(".nav-tabs-examples a").click(function(re){re.preventDefault(),h()(this).tab("show")}),h()(".nav-tabs-examples").find("a:first").tab("show"),h()(".sample-request-content-type-switch").change(function(){h()(this).val()==="body-form-data"?(h()("#sample-request-body-json-input-"+h()(this).data("id")).hide(),h()("#sample-request-body-form-input-"+h()(this).data("id")).show()):(h()("#sample-request-body-form-input-"+h()(this).data("id")).hide(),h()("#sample-request-body-json-input-"+h()(this).data("id")).show())}),de.template.aloneDisplay&&(h()(".show-group").click(function(){const re="."+h()(this).attr("data-group")+"-group",le="."+h()(this).attr("data-group")+"-article";h()(".show-api-group").addClass("hide"),h()(re).removeClass("hide"),h()(".show-api-article").addClass("hide"),h()(le).removeClass("hide")}),h()(".show-api").click(function(){const re=this.getAttribute("href").substring(1),le=document.getElementById("version").textContent.trim(),oe=`.${this.dataset.name}-article`,Ee=`[id="${re}-${le}"]`,Le=`.${this.dataset.group}-group`;h()(".show-api-group").addClass("hide"),h()(Le).removeClass("hide"),h()(".show-api-article").addClass("hide");let Ne=h()(oe);h()(Ee).length&&(Ne=h()(Ee).parent()),Ne.removeClass("hide"),re.match(/_(header|footer)/)&&document.getElementById(re).classList.remove("hide")})),de.template.aloneDisplay||h()("body").scrollspy("refresh"),de.template.aloneDisplay){const re=decodeURI(window.location.hash);if(re!=null&&re.length!==0){const le=document.getElementById("version").textContent.trim(),oe=document.querySelector(`li .${re.slice(1)}-init`),Ee=document.querySelector(`li[data-version="${le}"] .show-api.${re.slice(1)}-init`);let Le=oe;Ee&&(Le=Ee),Le.click()}}}function w(ae){typeof ae=="undefined"?ae=h()("#version strong").html():h()("#version strong").html(ae),h()("article").addClass("hide"),h()("#sidenav li:not(.nav-fixed)").addClass("hide");const re={};document.querySelectorAll("article[data-version]").forEach(le=>{const oe=le.dataset.group,Ee=le.dataset.name,Le=le.dataset.version,Ne=oe+Ee;!re[Ne]&&a().lte(Le,ae)&&(re[Ne]=!0,document.querySelector(`article[data-group="${oe}"][data-name="${Ee}"][data-version="${Le}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${oe}"][data-name="${Ee}"][data-version="${Le}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${oe}"]`).classList.remove("hide"))}),h()("article[data-version]").each(function(le){const oe=h()(this).data("group");h()("section#api-"+oe).removeClass("hide"),h()("section#api-"+oe+" article:visible").length===0?h()("section#api-"+oe).addClass("hide"):h()("section#api-"+oe).removeClass("hide")})}if(w(),h()("#versions li.version a").on("click",function(ae){ae.preventDefault(),w(h()(this).html())}),h()("#compareAllWithPredecessor").on("click",ee),h()("article .versions li.version a").on("click",J),h().urlParam=function(ae){const re=new RegExp("[\\?&amp;]"+ae+"=([^&amp;#]*)").exec(window.location.href);return re&&re[1]?re[1]:null},h().urlParam("compare")&&h()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const ae=decodeURI(window.location.hash);h()(ae).length>0&&h()("html,body").animate({scrollTop:parseInt(h()(ae).offset().top)},0)}document.querySelector('[data-toggle="offcanvas"]').addEventListener("click",function(){const ae=document.querySelector(".row-offcanvas");ae&&ae.classList.toggle("active")}),h()("#scrollingNav .sidenav-search input.search").focus(),h()('[data-action="filter-search"]').on("keyup",q(ae=>{const re=ae.currentTarget.value.toLowerCase();h()(".sidenav a.nav-list-item").filter((le,oe)=>h()(oe).toggle(h()(oe).text().toLowerCase().indexOf(re)>-1))},200)),h()("span.search-reset").on("click",function(){h()("#scrollingNav .sidenav-search input.search").val("").focus(),h()(".sidenav").find("a.nav-list-item").show()});function q(ae,re){let le=null;return(...oe)=>{clearTimeout(le),le=setTimeout(ae.bind(this,...oe),re||0)}}function J(ae){ae.preventDefault();const re=h()(this).parents("article"),le=h()(this).html(),oe=re.find(".version"),Ee=oe.find("strong").html();oe.find("strong").html(le);const Le=re.data("group"),Ne=re.data("name"),st=re.data("version"),vt=re.data("compare-version");if(vt!==le&&!(!vt&&st===le)){if(vt&&It[Le][Ne][0]===le||st===le)be(Le,Ne,st);else{let Nt={},ft={};h().each(Je[Le][Ne],function(oa,qr){qr.version===st&&(Nt=qr),qr.version===le&&(ft=qr)});const it={article:Nt,compare:ft,versions:It[Le][Ne]};it.article.id=it.article.group+"-"+it.article.name+"-"+it.article.version,it.article.id=it.article.id.replace(/\./g,"_"),it.compare.id=it.compare.group+"-"+it.compare.name+"-"+it.compare.version,it.compare.id=it.compare.id.replace(/\./g,"_");let et=Nt;et.header&&et.header.fields&&(it._hasTypeInHeaderFields=ht(et.header.fields)),et.parameter&&et.parameter.fields&&(it._hasTypeInParameterFields=ht(et.parameter.fields)),et.error&&et.error.fields&&(it._hasTypeInErrorFields=ht(et.error.fields)),et.success&&et.success.fields&&(it._hasTypeInSuccessFields=ht(et.success.fields)),et.info&&et.info.fields&&(it._hasTypeInInfoFields=ht(et.info.fields)),et=ft,it._hasTypeInHeaderFields!==!0&&et.header&&et.header.fields&&(it._hasTypeInHeaderFields=ht(et.header.fields)),it._hasTypeInParameterFields!==!0&&et.parameter&&et.parameter.fields&&(it._hasTypeInParameterFields=ht(et.parameter.fields)),it._hasTypeInErrorFields!==!0&&et.error&&et.error.fields&&(it._hasTypeInErrorFields=ht(et.error.fields)),it._hasTypeInSuccessFields!==!0&&et.success&&et.success.fields&&(it._hasTypeInSuccessFields=ht(et.success.fields)),it._hasTypeInInfoFields!==!0&&et.info&&et.info.fields&&(it._hasTypeInInfoFields=ht(et.info.fields));const di=ye(it);re.after(di),re.next().find(".versions li.version a").on("click",J),h()("#sidenav li[data-group='"+Le+"'][data-name='"+Ne+"'][data-version='"+Ee+"']").addClass("has-modifications"),re.remove()}kr(),y().highlightAll()}}function ee(ae){ae.preventDefault(),h()("article:visible .versions").each(function(){const le=h()(this).parents("article").data("version");let oe=null;h()(this).find("li.version a").each(function(){h()(this).html()<le&&!oe&&(oe=h()(this))}),oe&&oe.trigger("click")})}function ie(ae,re){ae.id=ae.article.group+"-"+ae.article.name+"-"+ae.article.version,ae.id=ae.id.replace(/\./g,"_"),re.header&&re.header.fields&&(ae._hasTypeInHeaderFields=ht(re.header.fields)),re.parameter&&re.parameter.fields&&(ae._hasTypeInParameterFields=ht(re.parameter.fields)),re.error&&re.error.fields&&(ae._hasTypeInErrorFields=ht(re.error.fields)),re.success&&re.success.fields&&(ae._hasTypeInSuccessFields=ht(re.success.fields)),re.info&&re.info.fields&&(ae._hasTypeInInfoFields=ht(re.info.fields)),ae.template=de.template}function he(ae,re,le){let oe={};h().each(Je[ae][re],function(Le,Ne){Ne.version===le&&(oe=Ne)});const Ee={article:oe,versions:It[ae][re]};return ie(Ee,oe),X(Ee)}function be(ae,re,le){const oe=h()("article[data-group='"+ae+"'][data-name='"+re+"']:visible"),Ee=he(ae,re,le);oe.after(Ee),oe.next().find(".versions li.version a").on("click",J),h()("#sidenav li[data-group='"+ae+"'][data-name='"+re+"'][data-version='"+le+"']").removeClass("has-modifications"),oe.remove()}function De(ae,re,le){const oe=[];return re.forEach(function(Ee){le?ae.forEach(function(Le){const Ne=Le.split(le);(Ne[0]===Ee||Ne[1]===Ee)&&oe.push(Le)}):ae.forEach(function(Le){Le===Ee&&oe.push(Ee)})}),ae.forEach(function(Ee){oe.indexOf(Ee)===-1&&oe.push(Ee)}),oe}function Se(ae,re){const le=[];return re.forEach(oe=>{Object.keys(ae).forEach(Ee=>{ae[Ee].replace(/_/g," ")===oe&&le.push(Ee)})}),Object.keys(ae).forEach(oe=>{le.indexOf(oe)===-1&&le.push(oe)}),le}kr()}})()})();
