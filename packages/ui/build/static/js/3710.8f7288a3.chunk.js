"use strict";(self.webpackChunkflowise_ui=self.webpackChunkflowise_ui||[]).push([[3710],{42016:function(e,t,n){var r=n(23917);t.Z={getAllAPIKeys:function(){return r.Z.get("/apikey")},createNewAPI:function(e){return r.Z.post("/apikey",e)},updateAPI:function(e,t){return r.Z.put("/apikey/".concat(e),t)},deleteAPI:function(e){return r.Z.delete("/apikey/".concat(e))}}},60990:function(e,t,n){var r=n(32723),i=n(34795),o=n(96234),a=n(30969);t.Z=function(e){var t=(0,a.useState)(null),n=(0,o.Z)(t,2),c=n[0],s=n[1],l=(0,a.useState)(null),u=(0,o.Z)(l,2),d=u[0],f=u[1],p=(0,a.useState)(!1),h=(0,o.Z)(p,2),x=h[0],Z=h[1],y=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n,i=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!0),t.prev=1,t.next=4,e.apply(void 0,i);case 4:n=t.sent,s(n.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f(t.t0||"Unexpected Error!");case 11:return t.prev=11,Z(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return{data:c,error:d,loading:x,request:y}}},60806:function(e,t,n){var r,i=n(96234),o=n(30969),a=n(30864),c=n(2383);t.Z=function(){var e=(0,o.useContext)(a.Z),t=(0,i.Z)(e,2),n=t[0],s=t[1],l=function(){s({type:c.bA})};return{confirm:function(e){return s({type:c.gN,payload:e}),new Promise((function(e){r=e}))},onConfirm:function(){l(),r(!0)},onCancel:function(){l(),r(!1)},confirmState:n}}},52312:function(e,t,n){n.d(t,{S:function(){return o}});var r=n(45971),i=n(26018),o=(0,r.ZP)(i.Z)((function(e){var t=e.theme,n=e.color,r=void 0===n?"primary":n;return{color:"white",backgroundColor:t.palette[r].main,"&:hover":{backgroundColor:t.palette[r].main,backgroundImage:"linear-gradient(rgb(0 0 0/10%) 0 0)"}}}))},48349:function(e,t,n){var r=n(15749),i=n(48886),o=n(38357),a=n(87130),c=n(91862),s=n(26018),l=n(60806),u=n(52312),d=n(37574);t.Z=function(){var e=(0,l.Z)(),t=e.onConfirm,n=e.onCancel,f=e.confirmState,p=document.getElementById("portal"),h=f.show?(0,d.jsxs)(i.Z,{fullWidth:!0,maxWidth:"xs",open:f.show,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,d.jsx)(o.Z,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:f.title}),(0,d.jsx)(a.Z,{children:(0,d.jsx)("span",{children:f.description})}),(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(s.Z,{onClick:n,children:f.cancelButtonName}),(0,d.jsx)(u.S,{variant:"contained",onClick:t,children:f.confirmButtonName})]})]}):null;return(0,r.createPortal)(h,p)}},33926:function(e,t,n){var r=n(33028),i=n(68079),o=n(30969),a=n(69405),c=n(89189),s=n(2383),l=[];t.Z=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.notifier})).notifications,n=(0,c.Ds)(),u=n.enqueueSnackbar,d=n.closeSnackbar;o.useEffect((function(){t.forEach((function(t){var n,o=t.key,a=t.message,c=t.options,f=void 0===c?{}:c,p=t.dismissed;void 0!==p&&p?d(o):l.includes(o)||(u(a,(0,r.Z)((0,r.Z)({key:o},f),{},{onClose:function(e,t,n){f.onClose&&f.onClose(e,t,n)},onExited:function(t,n){var r;e((0,s.PN)(n)),r=n,l=(0,i.Z)(l.filter((function(e){return r!==e})))}})),n=o,l=[].concat((0,i.Z)(l),[n]))}))}),[t,d,u,e])}},3710:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(32723),i=n(34795),o=n(68079),a=n(96234),c=n(30969),s=n(69405),l=n(2383),u=n(26018),d=n(25139),f=n(38361),p=n(82309),h=n(56349),x=n(7836),Z=n(10741),y=n(92472),m=n(21170),v=n(85481),j=n(91243),k=n(35531),g=n(47915),C=n(94702),w=n(55705),b=n(52312),I=n(15749),A=n(48886),P=n(38357),N=n(87130),K=n(33656),S=n(91862),D=n(49009),T=n(42016),E=n(33926),B=n(37574),M=function(e){var t=e.show,n=e.dialogProps,o=e.onCancel,p=e.onConfirm,h=document.getElementById("portal"),x=(0,C.Z)(),Z=(0,s.I0)();(0,E.Z)();var y=function(){return Z(l.yv.apply(void 0,arguments))},m=function(){return Z(l.sy.apply(void 0,arguments))},v=(0,c.useState)(""),w=(0,a.Z)(v,2),M=w[0],z=w[1],L=(0,c.useState)(null),W=(0,a.Z)(L,2),F=W[0],O=W[1],q=Boolean(F);(0,c.useEffect)((function(){"EDIT"===n.type&&n.key?z(n.key.keyName):"ADD"===n.type&&z("")}),[n]);var U=function(){O(null)},_=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Z.createNewAPI({keyName:M});case 3:e.sent.data&&(y({message:"New API key added",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:function(e){return(0,B.jsx)(u.Z,{style:{color:"white"},onClick:function(){return m(e)},children:(0,B.jsx)(D.kLi,{})})}}}),p()),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),y({message:"Failed to add new API key: ".concat(t),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,B.jsx)(u.Z,{style:{color:"white"},onClick:function(){return m(e)},children:(0,B.jsx)(D.kLi,{})})}}}),o();case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Z.updateAPI(n.key.id,{keyName:M});case 3:e.sent.data&&(y({message:"API Key saved",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:function(e){return(0,B.jsx)(u.Z,{style:{color:"white"},onClick:function(){return m(e)},children:(0,B.jsx)(D.kLi,{})})}}}),p()),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),y({message:"Failed to save API key: ".concat(t),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,B.jsx)(u.Z,{style:{color:"white"},onClick:function(){return m(e)},children:(0,B.jsx)(D.kLi,{})})}}}),o();case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=t?(0,B.jsxs)(A.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,B.jsx)(P.Z,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:n.title}),(0,B.jsxs)(N.Z,{children:["EDIT"===n.type&&(0,B.jsxs)(f.Z,{sx:{p:2},children:[(0,B.jsx)(g.Z,{variant:"overline",children:"API Key"}),(0,B.jsxs)(d.Z,{direction:"row",sx:{mb:1},children:[(0,B.jsx)(g.Z,{sx:{p:1,borderRadius:10,backgroundColor:x.palette.primary.light,width:"max-content",height:"max-content"},variant:"h5",children:n.key.apiKey}),(0,B.jsx)(j.Z,{title:"Copy API Key",color:"success",onClick:function(e){navigator.clipboard.writeText(n.key.apiKey),O(e.currentTarget),setTimeout((function(){U()}),1500)},children:(0,B.jsx)(D.vUr,{})}),(0,B.jsx)(k.ZP,{open:q,anchorEl:F,onClose:U,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,B.jsx)(g.Z,{variant:"h6",sx:{pl:1,pr:1,color:"white",background:x.palette.success.dark},children:"Copied!"})})]})]}),(0,B.jsxs)(f.Z,{sx:{p:2},children:[(0,B.jsx)(d.Z,{sx:{position:"relative"},direction:"row",children:(0,B.jsx)(g.Z,{variant:"overline",children:"Key Name"})}),(0,B.jsx)(K.Z,{id:"keyName",type:"string",fullWidth:!0,placeholder:"My New Key",value:M,name:"keyName",onChange:function(e){return z(e.target.value)}})]})]}),(0,B.jsx)(S.Z,{children:(0,B.jsx)(b.S,{variant:"contained",onClick:function(){return"ADD"===n.type?_():G()},children:n.confirmButtonName})})]}):null;return(0,I.createPortal)(J,h)},z=n(48349),L=n(60990),W=n(60806);var F=n.p+"static/media/api_empty.6032fc7f3d6f6a5082bec0505aaf8ecb.svg",O=function(){var e=(0,C.Z)(),t=(0,s.v9)((function(e){return e.customization})),n=(0,s.I0)();(0,E.Z)();var I=function(){return n(l.yv.apply(void 0,arguments))},A=function(){return n(l.sy.apply(void 0,arguments))},P=(0,c.useState)(!1),N=(0,a.Z)(P,2),K=N[0],S=N[1],O=(0,c.useState)({}),q=(0,a.Z)(O,2),U=q[0],_=q[1],G=(0,c.useState)([]),J=(0,a.Z)(G,2),R=J[0],V=J[1],Y=(0,c.useState)(null),H=(0,a.Z)(Y,2),Q=H[0],X=H[1],$=(0,c.useState)([]),ee=(0,a.Z)($,2),te=ee[0],ne=ee[1],re=Boolean(Q),ie=(0,W.Z)().confirm,oe=(0,L.Z)(T.Z.getAllAPIKeys),ae=function(){X(null)},ce=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:"Delete",description:"Delete key ".concat(t.keyName,"?"),confirmButtonName:"Delete",cancelButtonName:"Cancel"},e.next=3,ie(n);case 3:if(!e.sent){e.next=17;break}return e.prev=5,e.next=8,T.Z.deleteAPI(t.id);case 8:e.sent.data&&(I({message:"API key deleted",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:function(e){return(0,B.jsx)(u.Z,{style:{color:"white"},onClick:function(){return A(e)},children:(0,B.jsx)(D.kLi,{})})}}}),se()),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),i=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),I({message:"Failed to delete API key: ".concat(i),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,B.jsx)(u.Z,{style:{color:"white"},onClick:function(){return A(e)},children:(0,B.jsx)(D.kLi,{})})}}}),onCancel();case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){S(!1),oe.request()};return(0,c.useEffect)((function(){oe.request()}),[]),(0,c.useEffect)((function(){oe.data&&V(oe.data)}),[oe.data]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(w.Z,{sx:{background:t.isDarkMode?e.palette.common.black:""},children:[(0,B.jsxs)(d.Z,{flexDirection:"row",children:[(0,B.jsx)("h1",{children:"API Keys\xa0"}),(0,B.jsx)(f.Z,{sx:{flexGrow:1}}),(0,B.jsx)(b.S,{variant:"contained",sx:{color:"white",mr:1,height:37},onClick:function(){_({title:"Add New API Key",type:"ADD",cancelButtonName:"Cancel",confirmButtonName:"Add"}),S(!0)},startIcon:(0,B.jsx)(D.SC9,{}),children:"Create Key"})]}),R.length<=0&&(0,B.jsxs)(d.Z,{sx:{alignItems:"center",justifyContent:"center"},flexDirection:"column",children:[(0,B.jsx)(f.Z,{sx:{p:2,height:"auto"},children:(0,B.jsx)("img",{style:{objectFit:"cover",height:"30vh",width:"auto"},src:F,alt:"APIEmptySVG"})}),(0,B.jsx)("div",{children:"No API Keys Yet"})]}),R.length>0&&(0,B.jsx)(p.Z,{component:h.Z,children:(0,B.jsxs)(x.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,B.jsx)(Z.Z,{children:(0,B.jsxs)(y.Z,{children:[(0,B.jsx)(m.Z,{children:"Key Name"}),(0,B.jsx)(m.Z,{children:"API Key"}),(0,B.jsx)(m.Z,{children:"Created"}),(0,B.jsx)(m.Z,{children:" "}),(0,B.jsx)(m.Z,{children:" "})]})}),(0,B.jsx)(v.Z,{children:R.map((function(t,n){return(0,B.jsxs)(y.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,B.jsx)(m.Z,{component:"th",scope:"row",children:t.keyName}),(0,B.jsxs)(m.Z,{children:[te.includes(t.apiKey)?t.apiKey:"".concat(t.apiKey.substring(0,2)).concat("\u2022".repeat(18)).concat(t.apiKey.substring(t.apiKey.length-5)),(0,B.jsx)(j.Z,{title:"Copy",color:"success",onClick:function(e){navigator.clipboard.writeText(t.apiKey),X(e.currentTarget),setTimeout((function(){ae()}),1500)},children:(0,B.jsx)(D.vUr,{})}),(0,B.jsx)(j.Z,{title:"Show",color:"inherit",onClick:function(){return function(e){if(te.indexOf(e)>-1){var t=te.filter((function(t){return t!==e}));ne(t)}else ne((function(t){return[].concat((0,o.Z)(t),[e])}))}(t.apiKey)},children:te.includes(t.apiKey)?(0,B.jsx)(D.Jib,{}):(0,B.jsx)(D.tCy,{})}),(0,B.jsx)(k.ZP,{open:re,anchorEl:Q,onClose:ae,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:(0,B.jsx)(g.Z,{variant:"h6",sx:{pl:1,pr:1,color:"white",background:e.palette.success.dark},children:"Copied!"})})]}),(0,B.jsx)(m.Z,{children:t.createdAt}),(0,B.jsx)(m.Z,{children:(0,B.jsx)(j.Z,{title:"Edit",color:"primary",onClick:function(){return function(e){_({title:"Edit API Key",type:"EDIT",cancelButtonName:"Cancel",confirmButtonName:"Save",key:e}),S(!0)}(t)},children:(0,B.jsx)(D.yl5,{})})}),(0,B.jsx)(m.Z,{children:(0,B.jsx)(j.Z,{title:"Delete",color:"error",onClick:function(){return ce(t)},children:(0,B.jsx)(D.IT9,{})})})]},n)}))})]})})]}),(0,B.jsx)(M,{show:K,dialogProps:U,onCancel:function(){return S(!1)},onConfirm:se}),(0,B.jsx)(z.Z,{})]})}}}]);
//# sourceMappingURL=3710.8f7288a3.chunk.js.map