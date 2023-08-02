"use strict";(self.webpackChunkflowise_ui=self.webpackChunkflowise_ui||[]).push([[668],{74404:function(e,t,n){var o=n(23917);t.Z={getAllTools:function(){return o.Z.get("/tools")},getSpecificTool:function(e){return o.Z.get("/tools/".concat(e))},createNewTool:function(e){return o.Z.post("/tools",e)},updateTool:function(e,t){return o.Z.put("/tools/".concat(e),t)},deleteTool:function(e){return o.Z.delete("/tools/".concat(e))}}},60990:function(e,t,n){var o=n(32723),r=n(34795),a=n(96234),i=n(30969);t.Z=function(e){var t=(0,i.useState)(null),n=(0,a.Z)(t,2),s=n[0],c=n[1],l=(0,i.useState)(null),u=(0,a.Z)(l,2),d=u[0],p=u[1],f=(0,i.useState)(!1),h=(0,a.Z)(f,2),x=h[0],m=h[1],v=function(){var t=(0,r.Z)((0,o.Z)().mark((function t(){var n,r=arguments;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,e.apply(void 0,r);case 4:n=t.sent,c(n.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),p(t.t0||"Unexpected Error!");case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return{data:s,error:d,loading:x,request:v}}},60806:function(e,t,n){var o,r=n(96234),a=n(30969),i=n(30864),s=n(2383);t.Z=function(){var e=(0,a.useContext)(i.Z),t=(0,r.Z)(e,2),n=t[0],c=t[1],l=function(){c({type:s.bA})};return{confirm:function(e){return c({type:s.gN,payload:e}),new Promise((function(e){o=e}))},onConfirm:function(){l(),o(!0)},onCancel:function(){l(),o(!1)},confirmState:n}}},52312:function(e,t,n){n.d(t,{S:function(){return a}});var o=n(45971),r=n(26018),a=(0,o.ZP)(r.Z)((function(e){var t=e.theme,n=e.color,o=void 0===n?"primary":n;return{color:"white",backgroundColor:t.palette[o].main,"&:hover":{backgroundColor:t.palette[o].main,backgroundImage:"linear-gradient(rgb(0 0 0/10%) 0 0)"}}}))},48349:function(e,t,n){var o=n(15749),r=n(48886),a=n(38357),i=n(87130),s=n(91862),c=n(26018),l=n(60806),u=n(52312),d=n(37574);t.Z=function(){var e=(0,l.Z)(),t=e.onConfirm,n=e.onCancel,p=e.confirmState,f=document.getElementById("portal"),h=p.show?(0,d.jsxs)(r.Z,{fullWidth:!0,maxWidth:"xs",open:p.show,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,d.jsx)(a.Z,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:p.title}),(0,d.jsx)(i.Z,{children:(0,d.jsx)("span",{children:p.description})}),(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(c.Z,{onClick:n,children:p.cancelButtonName}),(0,d.jsx)(u.S,{variant:"contained",onClick:t,children:p.confirmButtonName})]})]}):null;return(0,o.createPortal)(h,f)}},84956:function(e,t,n){n.d(t,{x:function(){return l}});var o=n(33028),r=n(45304),a=n.n(r),i=n(73835),s=(n(49015),n(61889),n(58457),n(44057),n(94702)),c=n(37574),l=function(e){var t=e.value,n=e.placeholder,r=e.disabled,l=void 0!==r&&r,u=e.type,d=e.style,p=e.onValueChange,f=e.onMouseUp,h=e.onBlur,x=(0,s.Z)();return(0,c.jsx)(a(),{disabled:l,value:t,placeholder:n,highlight:function(e){return(0,i.highlight)(e,"json"===u?i.languages.json:i.languages.js)},padding:10,onValueChange:p,onMouseUp:f,onBlur:h,tabSize:4,style:(0,o.Z)((0,o.Z)({},d),{},{background:x.palette.codeEditor.main}),textareaClassName:"editor__textarea"})}},94677:function(e,t,n){n.d(t,{d:function(){return l}});var o=n(33028),r=n(45304),a=n.n(r),i=n(73835),s=(n(49015),n(61889),n(58457),n(44057),n(94702)),c=n(37574),l=function(e){var t=e.value,n=e.placeholder,r=e.disabled,l=void 0!==r&&r,u=e.type,d=e.style,p=e.onValueChange,f=e.onMouseUp,h=e.onBlur,x=(0,s.Z)();return(0,c.jsx)(a(),{disabled:l,value:t,placeholder:n,highlight:function(e){return(0,i.highlight)(e,"json"===u?i.languages.json:i.languages.js)},padding:10,onValueChange:p,onMouseUp:f,onBlur:h,tabSize:4,style:(0,o.Z)((0,o.Z)({},d),{},{background:x.palette.card.main}),textareaClassName:"editor__textarea"})}},97251:function(e,t,n){n.d(t,{H:function(){return u}});var o=n(33028),r=n(46705),a=n(6779),i=n(91243),s=n(12011),c=n(69405),l=n(37574),u=function(e){var t=e.title,n=e.style,u=(0,c.v9)((function(e){return e.customization}));return(0,l.jsx)(a.Z,{title:(0,s.ZP)(t),placement:"right",children:(0,l.jsx)(i.Z,{sx:{height:15,width:15},children:(0,l.jsx)(r.Z,{style:(0,o.Z)((0,o.Z)({},n),{},{background:"transparent",color:u.isDarkMode?"white":"inherit",height:15,width:15})})})})}},33926:function(e,t,n){var o=n(33028),r=n(68079),a=n(30969),i=n(69405),s=n(89189),c=n(2383),l=[];t.Z=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.notifier})).notifications,n=(0,s.Ds)(),u=n.enqueueSnackbar,d=n.closeSnackbar;a.useEffect((function(){t.forEach((function(t){var n,a=t.key,i=t.message,s=t.options,p=void 0===s?{}:s,f=t.dismissed;void 0!==f&&f?d(a):l.includes(a)||(u(i,(0,o.Z)((0,o.Z)({key:a},p),{},{onClose:function(e,t,n){p.onClose&&p.onClose(e,t,n)},onExited:function(t,n){var o;e((0,c.PN)(n)),o=n,l=(0,r.Z)(l.filter((function(e){return o!==e})))}})),n=a,l=[].concat((0,r.Z)(l),[n]))}))}),[t,d,u,e])}},668:function(e,t,n){n.d(t,{Z:function(){return O}});var o=n(32723),r=n(34795),a=n(33028),i=n(68079),s=n(96234),c=n(15749),l=n(30969),u=n(69405),d=n(2383),p=n(50576),f=n(26018),h=n(48886),x=n(38357),m=n(87130),v=n(38361),Z=n(25139),g=n(47915),y=n(33656),j=n(91862),w=n(52312),T=n(97833),b=n(49009),k=n(37574),C=function(e){var t=e.columns,n=e.rows,o=e.style,r=e.disabled,i=void 0!==r&&r,s=e.onRowUpdate,c=e.addNewRow;return(0,k.jsxs)(k.Fragment,{children:[!i&&(0,k.jsx)(f.Z,{variant:"outlined",onClick:c,startIcon:(0,k.jsx)(b.SC9,{}),children:"Add Item"}),n&&t&&(0,k.jsx)("div",{style:(0,a.Z)({marginTop:10,height:300,width:"100%"},o),children:(0,k.jsx)(T._,{processRowUpdate:function(e){return s(e),e},isCellEditable:function(){return!i},onProcessRowUpdateError:function(e){return console.error(e)},rows:n,columns:t})})]})},S=n(97251),E=n(44850),D=n(10814),M=n(48349),N=n(84956),P=n(94677),I=n(94702),L=n(74404),A=n(60806),R=n(60990),B=n(33926),U=n(86115),O=function(e){var t=e.show,n=e.dialogProps,T=e.onUseTemplate,O=e.onCancel,F=e.onConfirm,_=document.getElementById("portal"),z=(0,I.Z)(),W=(0,u.v9)((function(e){return e.customization})),q=(0,u.I0)();(0,B.Z)();var H=(0,A.Z)().confirm,V=function(){return q(d.yv.apply(void 0,arguments))},J=function(){return q(d.sy.apply(void 0,arguments))},G=(0,R.Z)(L.Z.getSpecificTool),Y=(0,l.useState)(""),$=(0,s.Z)(Y,2),K=$[0],Q=$[1],X=(0,l.useState)(""),ee=(0,s.Z)(X,2),te=ee[0],ne=ee[1],oe=(0,l.useState)(""),re=(0,s.Z)(oe,2),ae=re[0],ie=re[1],se=(0,l.useState)(""),ce=(0,s.Z)(se,2),le=ce[0],ue=ce[1],de=(0,l.useState)([]),pe=(0,s.Z)(de,2),fe=pe[0],he=pe[1],xe=(0,l.useState)(""),me=(0,s.Z)(xe,2),ve=me[0],Ze=me[1],ge=(0,l.useCallback)((function(e){return function(){setTimeout((function(){he((function(t){return t.filter((function(t){return t.id!==e}))}))}))}}),[]),ye=(0,l.useMemo)((function(){return[{field:"property",headerName:"Property",editable:!0,flex:1},{field:"type",headerName:"Type",type:"singleSelect",valueOptions:["string","number","boolean","date"],editable:!0,width:120},{field:"description",headerName:"Description",editable:!0,flex:1},{field:"required",headerName:"Required",type:"boolean",editable:!0,width:80},{field:"actions",type:"actions",width:80,getActions:function(e){return[(0,k.jsx)(E.u,{icon:(0,k.jsx)(D.Z,{}),label:"Delete",onClick:ge(e.id)},"Delete")]}}]}),[ge]),je=function(e){try{return JSON.parse(e).map((function(e,t){return(0,a.Z)((0,a.Z)({},e),{},{id:t})}))}catch(t){return[]}};(0,l.useEffect)((function(){G.data&&(Q(G.data.id),ne(G.data.name),ie(G.data.description),he(je(G.data.schema)),G.data.func?Ze(G.data.func):Ze(""))}),[G.data]),(0,l.useEffect)((function(){"EDIT"===n.type&&n.data?(Q(n.data.id),ne(n.data.name),ie(n.data.description),ue(n.data.iconSrc),he(je(n.data.schema)),n.data.func?Ze(n.data.func):Ze("")):"EDIT"===n.type&&n.toolId?G.request(n.toolId):"IMPORT"===n.type&&n.data||"TEMPLATE"===n.type&&n.data?(ne(n.data.name),ie(n.data.description),ue(n.data.iconSrc),he(je(n.data.schema)),n.data.func?Ze(n.data.func):Ze("")):"ADD"===n.type&&(Q(""),ne(""),ie(""),ue(""),he([]),Ze(""))}),[n]);var we=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n,r,a,i,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.Z.getSpecificTool(K);case 3:(t=e.sent).data&&(delete(n=t.data).id,delete n.createdDate,delete n.updatedDate,r=JSON.stringify(n),a="data:application/json;charset=utf-8,"+encodeURIComponent(r),i="".concat(te,"-CustomTool.json"),(s=document.createElement("a")).setAttribute("href",a),s.setAttribute("download",i),s.click()),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),c=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),V({message:"Failed to export Tool: ".concat(c),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),O();case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={name:te,description:ae,color:(0,U.xl)(),schema:JSON.stringify(fe),func:ve,iconSrc:le},e.next=4,L.Z.createNewTool(t);case 4:(n=e.sent).data&&(V({message:"New Tool added",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),F(n.data.id)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),r=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),V({message:"Failed to add new Tool: ".concat(r),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),O();case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.Z.updateTool(K,{name:te,description:ae,schema:JSON.stringify(fe),func:ve,iconSrc:le});case 3:(t=e.sent).data&&(V({message:"Tool saved",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),F(t.data.id)),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),n=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),V({message:"Failed to save Tool: ".concat(n),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),O();case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:"Delete Tool",description:"Delete tool ".concat(te,"?"),confirmButtonName:"Delete",cancelButtonName:"Cancel"},e.next=3,H(t);case 3:if(!e.sent){e.next=17;break}return e.prev=5,e.next=8,L.Z.deleteTool(K);case 8:e.sent.data&&(V({message:"Tool deleted",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),F()),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),n=e.t0.response.data||"".concat(e.t0.response.status,": ").concat(e.t0.response.statusText),V({message:"Failed to delete Tool: ".concat(n),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:function(e){return(0,k.jsx)(f.Z,{style:{color:"white"},onClick:function(){return J(e)},children:(0,k.jsx)(b.kLi,{})})}}}),O();case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}(),Ce=t?(0,k.jsxs)(h.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,k.jsx)(x.Z,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[n.title,(0,k.jsx)("div",{style:{flex:1}}),"EDIT"===n.type&&(0,k.jsx)(f.Z,{variant:"outlined",onClick:function(){return we()},startIcon:(0,k.jsx)(b.D57,{}),children:"Export"})]})}),(0,k.jsxs)(m.Z,{children:[(0,k.jsxs)(v.Z,{sx:{p:2},children:[(0,k.jsx)(Z.Z,{sx:{position:"relative"},direction:"row",children:(0,k.jsxs)(g.Z,{variant:"overline",children:["Tool Name",(0,k.jsx)("span",{style:{color:"red"},children:"\xa0*"}),(0,k.jsx)(S.H,{style:{marginLeft:10},title:"Tool name must be small capital letter with underscore. Ex: my_tool"})]})}),(0,k.jsx)(y.Z,{id:"toolName",type:"string",fullWidth:!0,disabled:"TEMPLATE"===n.type,placeholder:"My New Tool",value:te,name:"toolName",onChange:function(e){return ne(e.target.value)}})]}),(0,k.jsxs)(v.Z,{sx:{p:2},children:[(0,k.jsx)(Z.Z,{sx:{position:"relative"},direction:"row",children:(0,k.jsxs)(g.Z,{variant:"overline",children:["Tool description",(0,k.jsx)("span",{style:{color:"red"},children:"\xa0*"}),(0,k.jsx)(S.H,{style:{marginLeft:10},title:"Description of what the tool does. This is for ChatGPT to determine when to use this tool."})]})}),(0,k.jsx)(y.Z,{id:"toolDesc",type:"string",fullWidth:!0,disabled:"TEMPLATE"===n.type,placeholder:"Description of what the tool does. This is for ChatGPT to determine when to use this tool.",multiline:!0,rows:3,value:ae,name:"toolDesc",onChange:function(e){return ie(e.target.value)}})]}),(0,k.jsxs)(v.Z,{sx:{p:2},children:[(0,k.jsx)(Z.Z,{sx:{position:"relative"},direction:"row",children:(0,k.jsx)(g.Z,{variant:"overline",children:"Tool Icon Src"})}),(0,k.jsx)(y.Z,{id:"toolIcon",type:"string",fullWidth:!0,disabled:"TEMPLATE"===n.type,placeholder:"https://raw.githubusercontent.com/gilbarbara/logos/main/logos/airtable.svg",value:le,name:"toolIcon",onChange:function(e){return ue(e.target.value)}})]}),(0,k.jsxs)(v.Z,{sx:{p:2},children:[(0,k.jsx)(Z.Z,{sx:{position:"relative"},direction:"row",children:(0,k.jsxs)(g.Z,{variant:"overline",children:["Output Schema",(0,k.jsx)(S.H,{style:{marginLeft:10},title:"What should be the output response in JSON format?"})]})}),(0,k.jsx)(C,{columns:ye,rows:fe,disabled:"TEMPLATE"===n.type,addNewRow:function(){setTimeout((function(){he((function(e){var t=(0,i.Z)((0,p.cloneDeep)(e)),n=t.length?t[t.length-1].id+1:1;return t.push({id:n,property:"",description:"",type:"",required:!1}),t}))}))},onRowUpdate:function(e){setTimeout((function(){he((function(t){var n=(0,i.Z)((0,p.cloneDeep)(t)),o=n.findIndex((function(t){return t.id===e.id}));return o>=0&&(n[o]=(0,a.Z)({},e)),n}))}))}})]}),(0,k.jsxs)(v.Z,{sx:{p:2},children:[(0,k.jsx)(Z.Z,{sx:{position:"relative"},direction:"row",children:(0,k.jsxs)(g.Z,{variant:"overline",children:["Javascript Function",(0,k.jsx)(S.H,{style:{marginLeft:10},title:"Function to execute when tool is being used. You can use properties specified in Output Schema as variables. For example, if the property is <code>userid</code>, you can use as <code>$userid</code>. Return value must be a string."})]})}),"TEMPLATE"!==n.type&&(0,k.jsx)(f.Z,{style:{marginBottom:10},variant:"outlined",onClick:function(){return Ze("/*\n* You can use any libraries imported in Flowise\n* You can use properties specified in Output Schema as variables. Ex: Property = userid, Variable = $userid\n* Must return a string value at the end of function\n*/\n\nconst fetch = require('node-fetch');\nconst url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true';\nconst options = {\n    method: 'GET',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n};\ntry {\n    const response = await fetch(url, options);\n    const text = await response.text();\n    return text;\n} catch (error) {\n    console.error(error);\n    return '';\n}")},children:"See Example"}),W.isDarkMode?(0,k.jsx)(N.x,{value:ve,disabled:"TEMPLATE"===n.type,onValueChange:function(e){return Ze(e)},style:{fontSize:"0.875rem",minHeight:"calc(100vh - 220px)",width:"100%",borderRadius:5}}):(0,k.jsx)(P.d,{value:ve,disabled:"TEMPLATE"===n.type,onValueChange:function(e){return Ze(e)},style:{fontSize:"0.875rem",minHeight:"calc(100vh - 220px)",width:"100%",border:"1px solid ".concat(z.palette.grey[300]),borderRadius:5}})]})]}),(0,k.jsxs)(j.Z,{children:["EDIT"===n.type&&(0,k.jsx)(w.S,{color:"error",variant:"contained",onClick:function(){return ke()},children:"Delete"}),"TEMPLATE"===n.type&&(0,k.jsx)(w.S,{color:"secondary",variant:"contained",onClick:function(){T(n.data)},children:"Use Template"}),"TEMPLATE"!==n.type&&(0,k.jsx)(w.S,{disabled:!(te&&ae),variant:"contained",onClick:function(){return"ADD"===n.type||"IMPORT"===n.type?Te():be()},children:n.confirmButtonName})]}),(0,k.jsx)(M.Z,{})]}):null;return(0,c.createPortal)(Ce,_)}}}]);
//# sourceMappingURL=668.86b46c60.chunk.js.map