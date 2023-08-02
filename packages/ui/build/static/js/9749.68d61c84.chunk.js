/*! For license information please see 9749.68d61c84.chunk.js.LICENSE.txt */
(self.webpackChunkflowise_ui=self.webpackChunkflowise_ui||[]).push([[9749],{39494:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(96234),a=n(31461),i=n(7896),o=n(30969),s=n(81856),l=n(26540),u=n(17363),c=n(45971),d=n(81133),g=n(24099),p=n(86209),f=n(43611),h=n(62746),m=n(2975);function v(e){return(0,m.Z)("MuiFormControl",e)}(0,h.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var y=n(37574),b=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],k=(0,c.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return(0,i.Z)({},t.root,t["margin".concat((0,g.Z)(n.margin))],n.fullWidth&&t.fullWidth)}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})})),_=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiFormControl"}),c=n.children,h=n.className,m=n.color,_=void 0===m?"primary":m,w=n.component,x=void 0===w?"div":w,F=n.disabled,S=void 0!==F&&F,P=n.error,A=void 0!==P&&P,C=n.focused,E=n.fullWidth,$=void 0!==E&&E,O=n.hiddenLabel,j=void 0!==O&&O,L=n.margin,z=void 0===L?"none":L,D=n.required,K=void 0!==D&&D,Z=n.size,T=void 0===Z?"medium":Z,W=n.variant,I=void 0===W?"outlined":W,M=(0,a.Z)(n,b),N=(0,i.Z)({},n,{color:_,component:x,disabled:S,error:A,fullWidth:$,hiddenLabel:j,margin:z,required:K,size:T,variant:I}),B=function(e){var t=e.classes,n=e.margin,r=e.fullWidth,a={root:["root","none"!==n&&"margin".concat((0,g.Z)(n)),r&&"fullWidth"]};return(0,l.Z)(a,v,t)}(N),q=o.useState((function(){var e=!1;return c&&o.Children.forEach(c,(function(t){if((0,p.Z)(t,["Input","Select"])){var n=(0,p.Z)(t,["Select"])?t.props.input:t;n&&(0,d.B7)(n.props)&&(e=!0)}})),e})),R=(0,r.Z)(q,2),H=R[0],U=R[1],V=o.useState((function(){var e=!1;return c&&o.Children.forEach(c,(function(t){(0,p.Z)(t,["Input","Select"])&&((0,d.vd)(t.props,!0)||(0,d.vd)(t.props.inputProps,!0))&&(e=!0)})),e})),G=(0,r.Z)(V,2),J=G[0],Y=G[1],X=o.useState(!1),Q=(0,r.Z)(X,2),ee=Q[0],te=Q[1];S&&ee&&te(!1);var ne,re=void 0===C||S?ee:C,ae=o.useMemo((function(){return{adornedStart:H,setAdornedStart:U,color:_,disabled:S,error:A,filled:J,focused:re,fullWidth:$,hiddenLabel:j,size:T,onBlur:function(){te(!1)},onEmpty:function(){Y(!1)},onFilled:function(){Y(!0)},onFocus:function(){te(!0)},registerEffect:ne,required:K,variant:I}}),[H,_,S,A,J,re,$,j,ne,K,T,I]);return(0,y.jsx)(f.Z.Provider,{value:ae,children:(0,y.jsx)(k,(0,i.Z)({as:x,ownerState:N,className:(0,s.Z)(B.root,h),ref:t},M,{children:c}))})}))},49015:function(){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},73835:function(e,t,n){var r=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var u=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],u=a.util.type(l);"Object"!==u||i[o(l)]?"Array"!==u||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,n,r){var i=a.util.getLanguage(t),o=a.languages[i];a.util.setLanguage(t,i);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&a.util.setLanguage(s,i);var l={element:t,language:i,grammar:o,code:t.textContent};function u(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),r&&r.call(l.element)}if(a.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return a.hooks.run("complete",l),void(r&&r.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(a.highlight(l.code,l.grammar,l.language));else u(a.util.encode(l.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new l;return u(a,a.head,e),s(e,a,t,a.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(a)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:i};function i(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function o(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function s(e,t,n,r,l,d){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var p=n[g];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(d&&d.cause==g+","+f)return;var h=p[f],m=h.inside,v=!!h.lookbehind,y=!!h.greedy,b=h.alias;if(y&&!h.pattern.global){var k=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,k+"g")}for(var _=h.pattern||h,w=r.next,x=l;w!==t.tail&&!(d&&x>=d.reach);x+=w.value.length,w=w.next){var F=w.value;if(t.length>e.length)return;if(!(F instanceof i)){var S,P=1;if(y){if(!(S=o(_,x,e,v))||S.index>=e.length)break;var A=S.index,C=S.index+S[0].length,E=x;for(E+=w.value.length;A>=E;)E+=(w=w.next).value.length;if(x=E-=w.value.length,w.value instanceof i)continue;for(var $=w;$!==t.tail&&(E<C||"string"===typeof $.value);$=$.next)P++,E+=$.value.length;P--,F=e.slice(x,E),S.index-=x}else if(!(S=o(_,0,F,v)))continue;A=S.index;var O=S[0],j=F.slice(0,A),L=F.slice(A+O.length),z=x+F.length;d&&z>d.reach&&(d.reach=z);var D=w.prev;if(j&&(D=u(t,D,j),x+=j.length),c(t,D,P),w=u(t,D,new i(g,m?a.tokenize(O,m):O,b,O)),L&&u(t,w,L),P>1){var K={cause:g+","+f,reach:z};s(e,t,n,w.prev,x,K),d&&K.reach>d.reach&&(d.reach=K.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function c(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=a,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var d=a.util.currentScript();function g(){a.manual||a.highlightAll()}if(d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),"undefined"!==typeof n.g&&(n.g.Prism=r)},61889:function(){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript},58457:function(){Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},44057:function(){Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var a={};a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},45304:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(30969)),c="undefined"!==typeof window&&"navigator"in window&&/Win/i.test(navigator.platform),d="undefined"!==typeof window&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),g="npm__react-simple-code-editor__textarea",p="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(g,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(g," {\n    color: transparent !important;\n  }\n\n  .").concat(g,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,r=e.selectionStart,a=e.selectionEnd;t._recordChange({value:n,selectionStart:r,selectionEnd:a})}},t._getLines=function(e,t){return e.substring(0,t).split("\n")},t._recordChange=function(e,n){var r,i,o;void 0===n&&(n=!1);var s=t._history,l=s.stack,u=s.offset;if(l.length&&u>-1){t._history.stack=l.slice(0,u+1);var c=t._history.stack.length;if(c>100){var d=c-100;t._history.stack=l.slice(d,c),t._history.offset=Math.max(t._history.offset-d,0)}}var g=Date.now();if(n){var p=t._history.stack[t._history.offset];if(p&&g-p.timestamp<3e3){var f=/[^a-z0-9]([a-z0-9]+)$/i,h=null===(r=t._getLines(p.value,p.selectionStart).pop())||void 0===r?void 0:r.match(f),m=null===(i=t._getLines(e.value,e.selectionStart).pop())||void 0===i?void 0:i.match(f);if((null===h||void 0===h?void 0:h[1])&&(null===(o=null===m||void 0===m?void 0:m[1])||void 0===o?void 0:o.startsWith(h[1])))return void(t._history.stack[t._history.offset]=a(a({},e),{timestamp:g}))}}t._history.stack.push(a(a({},e),{timestamp:g})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,r=t._history.stack[t._history.offset];r&&n&&(t._history.stack[t._history.offset]=a(a({},r),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,r=e.offset,a=n[r-1];a&&(t._updateInput(a),t._history.offset=Math.max(r-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,r=e.offset,a=n[r+1];a&&(t._updateInput(a),t._history.offset=Math.min(r+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,r=n.tabSize,a=n.insertSpaces,i=n.ignoreTabKey,o=n.onKeyDown;if(!o||(o(e),!e.defaultPrevented)){27===e.keyCode&&e.currentTarget.blur();var s=e.currentTarget,l=s.value,u=s.selectionStart,g=s.selectionEnd,p=(a?" ":"\t").repeat(r);if(9===e.keyCode&&!i&&t.state.capture)if(e.preventDefault(),e.shiftKey){var f=(y=t._getLines(l,u)).length-1,h=t._getLines(l,g).length-1,m=l.split("\n").map((function(e,t){return t>=f&&t<=h&&e.startsWith(p)?e.substring(p.length):e})).join("\n");if(l!==m){var v=y[f];t._applyEdits({value:m,selectionStart:(null===v||void 0===v?void 0:v.startsWith(p))?u-p.length:u,selectionEnd:g-(l.length-m.length)})}}else if(u!==g){var y,b=(y=t._getLines(l,u)).length-1,k=t._getLines(l,g).length-1;v=y[b];t._applyEdits({value:l.split("\n").map((function(e,t){return t>=b&&t<=k?p+e:e})).join("\n"),selectionStart:v&&/\S/.test(v)?u+p.length:u,selectionEnd:g+p.length*(k-b+1)})}else{var _=u+p.length;t._applyEdits({value:l.substring(0,u)+p+l.substring(g),selectionStart:_,selectionEnd:_})}else if(8===e.keyCode){var w=u!==g;if(l.substring(0,u).endsWith(p)&&!w){e.preventDefault();_=u-p.length;t._applyEdits({value:l.substring(0,u-p.length)+l.substring(g),selectionStart:_,selectionEnd:_})}}else if(13===e.keyCode){if(u===g){var x=t._getLines(l,u).pop(),F=null===x||void 0===x?void 0:x.match(/^\s+/);if(null===F||void 0===F?void 0:F[0]){e.preventDefault();var S="\n"+F[0];_=u+S.length;t._applyEdits({value:l.substring(0,u)+S+l.substring(g),selectionStart:_,selectionEnd:_})}}}else if(57===e.keyCode||219===e.keyCode||222===e.keyCode||192===e.keyCode){var P=void 0;57===e.keyCode&&e.shiftKey?P=["(",")"]:219===e.keyCode?P=e.shiftKey?["{","}"]:["[","]"]:222===e.keyCode?P=e.shiftKey?['"','"']:["'","'"]:192!==e.keyCode||e.shiftKey||(P=["`","`"]),u!==g&&P&&(e.preventDefault(),t._applyEdits({value:l.substring(0,u)+P[0]+l.substring(u,g)+P[1]+l.substring(g),selectionStart:u,selectionEnd:g+2}))}else!(d?e.metaKey&&90===e.keyCode:e.ctrlKey&&90===e.keyCode)||e.shiftKey||e.altKey?(d?e.metaKey&&90===e.keyCode&&e.shiftKey:c?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&90===e.keyCode&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):77!==e.keyCode||!e.ctrlKey||d&&!e.shiftKey||(e.preventDefault(),t.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),t._undoEdit())}},t._handleChange=function(e){var n=e.currentTarget,r=n.value,a=n.selectionStart,i=n.selectionEnd;t._recordChange({value:r,selectionStart:a,selectionEnd:i},!0),t.props.onValueChange(r)},t._history={stack:[],offset:-1},t._input=null,t}return r(t,e),t.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(t.prototype,"session",{get:function(){return{history:this._history}},set:function(e){this._history=e.history},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.style,i=t.padding,o=t.highlight,s=t.textareaId,c=t.textareaClassName,d=t.autoFocus,f=t.disabled,m=t.form,v=t.maxLength,y=t.minLength,b=t.name,k=t.placeholder,_=t.readOnly,w=t.required,x=t.onClick,F=t.onFocus,S=t.onBlur,P=t.onKeyUp,A=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),C=l(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),E={paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i},$=o(n);return u.createElement("div",a({},C,{style:a(a({},h.container),r)}),u.createElement("textarea",{ref:function(t){return e._input=t},style:a(a(a({},h.editor),h.textarea),E),className:g+(c?" ".concat(c):""),id:s,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:x,onKeyUp:P,onFocus:F,onBlur:S,disabled:f,form:m,maxLength:v,minLength:y,name:b,placeholder:k,readOnly:_,required:w,autoFocus:d,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),u.createElement("pre",a({className:A,"aria-hidden":"true",style:a(a(a({},h.editor),h.highlight),E)},"string"===typeof $?{dangerouslySetInnerHTML:{__html:$+"<br />"}}:{children:$})),u.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:p}}))},t.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t}(u.Component);t.default=f;var h={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}}}]);
//# sourceMappingURL=9749.68d61c84.chunk.js.map