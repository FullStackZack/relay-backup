(this.webpackJsonprelay=this.webpackJsonprelay||[]).push([[0],{323:function(e,t,a){e.exports=a.p+"static/media/relaylogo.21061732.png"},356:function(e,t,a){e.exports=a(664)},361:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},393:function(e,t,a){},394:function(e,t,a){},403:function(e,t){},405:function(e,t){},417:function(e,t){},419:function(e,t){},447:function(e,t){},449:function(e,t){},450:function(e,t){},455:function(e,t){},457:function(e,t){},476:function(e,t){},488:function(e,t){},491:function(e,t){},529:function(e,t){},531:function(e,t){},563:function(e,t){},663:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=663},664:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),c=(a(361),a(81)),i=a(82),s=a(88),u=a(87),m=a(110),d=a(26),p=a(144),f=a(23),h=a.n(f),E=function(e){e?h.a.defaults.headers.common.Authorization=e:delete h.a.defaults.headers.common.Authorization},g=function(e){return{type:"SET_CURRENT_USER",payload:e}},b=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e(g({}))}},v=a(60),y=a(36),O=a(320),w=a(37),j=a(383),C={isAuthenticated:!1,user:{},loading:!1},S={},N=Object(y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(w.a)(Object(w.a)({},e),{},{isAuthenticated:!j(t.payload),user:t.payload});case"USER_LOADING":return Object(w.a)(Object(w.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),k=[O.a],x=Object(y.e)(N,{},Object(y.d)(y.a.apply(void 0,k),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||y.d)),T=a(57),_=a(89),R=a.n(_),D=a(740),z=a(716),A=a(710),I=a(741),W=a(711),P=a(736),M=a(321),U=a.n(M),L=a(97),B=a(4),Y=a(709);function F(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(m.b,{color:"inherit",href:"/login"},"Relay")," ",(new Date).getFullYear(),".")}var G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors,t=this.props.classes;return r.a.createElement(Y.a,{component:"main",maxWidth:"xs"},r.a.createElement(A.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(D.a,{className:t.avatar},r.a.createElement(U.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(W.a,{container:!0,spacing:2},r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(I.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Name",name:"name",autoComplete:"name",onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:R()("",{invalid:e.name})})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(I.a,{variant:"outlined",required:!0,fullWidth:!0,name:"email",label:"Email",autoComplete:"email",onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:R()("",{invalid:e.email})})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(I.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",autoComplete:"current-password",onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:R()("",{invalid:e.password})})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(I.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",autoComplete:"current-password",onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:R()("",{invalid:e.password2})}))),r.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:this.onSubmit},"Sign Up"),r.a.createElement(W.a,{container:!0,justify:"flex-end"},r.a.createElement(W.a,{item:!0},r.a.createElement(m.b,{to:"/",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(P.a,{mt:5},r.a.createElement(F,null)))}}]),a}(n.Component),K=Object(y.d)(Object(v.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){h.a.post("/api/users/register",e).then((function(e){return t.push("/")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}}),Object(B.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})))(Object(d.g)(G)),V=a(717),H=a(207),q=a(322),X=a.n(q);function J(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(V.a,{color:"inherit",href:"/"},"Relay")," ",(new Date).getFullYear(),".")}var Q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors,t=this.props.classes;return r.a.createElement(W.a,{container:!0,component:"main",className:t.root},r.a.createElement(A.a,null),r.a.createElement(W.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),r.a.createElement(W.a,{item:!0,xs:12,sm:8,md:5,component:H.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(D.a,{className:t.avatar},r.a.createElement(X.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign In"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.onChange,value:this.state.email,error:e.email,type:"email",className:R()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",autoComplete:"current-password",onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:R()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:this.onSubmit},"Sign In"),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0},r.a.createElement(V.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(P.a,{mt:5},r.a.createElement(J,null))),r.a.createElement("br",null),r.a.createElement(V.a,{href:"/dashboard",style:{fontSize:30}},"Demo"))))}}]),a}(n.Component),Z=Object(y.d)(Object(v.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){h.a.post("/api/users/",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),E(a);var n=Object(p.a)(a);t(g(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}}),Object(B.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/1600x900/?run)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})))(Q),$=a(332),ee=a(718),te=a(719),ae=a(720),ne=(a(391),a(323)),re=a.n(ne),oe=Object($.a)({palette:{primary:{main:"#257DC8"}}});function le(){return r.a.createElement(ee.a,{theme:oe},r.a.createElement(te.a,{position:"sticky"},r.a.createElement(ae.a,null,r.a.createElement(L.a,{variant:"h6"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:re.a,alt:"logo",style:{width:180}}))))))}a(392);var ce=function(e){var t=e.children;return r.a.createElement("div",{className:"jumbotron",style:{background:"transparent"}},t)};function ie(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function se(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function ue(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var me=a(20),de=a(721),pe=a(726),fe=a(727),he=a(728),Ee=a(715),ge=a(669),be=a(724),ve=a(723),ye=a(325),Oe=a.n(ye),we=a(739),je=a(725),Ce=a(722),Se=a(324),Ne=a.n(Se),ke=a(205),xe=a.n(ke),Te=Object(de.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function _e(e){var t,a=e.title,n=e.date,o=e.interval,l=e.contactId,c=Te(),i=r.a.useState(!1),s=Object(me.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",{className:c.root},r.a.createElement(we.a,{expanded:"panel2"===u,onChange:(t="panel2",function(e,a){m(!!a&&t)})},r.a.createElement(Ce.a,{expandIcon:r.a.createElement(Ne.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},r.a.createElement(Ee.a,null,r.a.createElement(ge.a,null,r.a.createElement(ve.a,null,r.a.createElement(D.a,null,r.a.createElement(Oe.a,null))),r.a.createElement(be.a,{primary:a,secondary:xe()(n).format("MMM Do YYYY, h:mm:ss a")})))),r.a.createElement(je.a,null,r.a.createElement(L.a,null,"On ",xe()(n).format("MMM Do YYYY, h:mm:ss a")," you went for a insert time run and set ",l," as your emergency contact. You had messages sent to them every ",o,"."))))}var Re=function(){return h.a.get("/api/contacts/")},De=function(e){return h.a.get("/api/contacts/"+e)},ze=function(e){return h.a.delete("/api/contacts/"+e)},Ae=function(e){return h.a.post("/api/contacts/",e)},Ie=function(){return h.a.get("/api/activities/")},We=function(e){return h.a.post("/api/activities/",e)},Pe=Object(de.a)({root:{maxWidth:345,padding:20,textAlign:"center",marginTop:-60,marginRight:-50,borderRadius:20,boxShadow:"0 3px 5px 2px rgba(75, 73, 73, 0.4)"}});function Me(){var e=Pe(),t=Object(n.useState)(""),a=Object(me.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){Ie().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(pe.a,{className:e.root},r.a.createElement(fe.a,null,r.a.createElement(he.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h5",component:"span",style:{color:"#58585F",letterSpacing:1.5}},"Log & Manage Activities"),r.a.createElement("hr",null),r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"span"},o?r.a.createElement("div",null,o.map((function(e){return r.a.createElement(_e,{key:e._id,title:e.title,date:e.date,interval:e.interval,contactId:e.contactId})}))):r.a.createElement("h1",null,"No Workouts Logged")))))}var Ue=a(327),Le=a.n(Ue),Be=a(668),Ye=a(326),Fe=a.n(Ye);var Ge=function(e){return r.a.createElement(Be.a,Object.assign({},e,{"aria-label":"delete",color:"default",variant:"contained",size:"small"}),r.a.createElement(Fe.a,null))},Ke=Object(de.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function Ve(){var e=Object(n.useState)([]),t=Object(me.a)(e,2),a=t[0],o=t[1];function l(){Re().then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}Object(n.useEffect)((function(){l()}),[]);var c=Ke();return r.a.createElement("div",null,a.length?r.a.createElement(Ee.a,{className:c.root},a.map((function(e){return r.a.createElement(ge.a,{key:e._id},r.a.createElement(ve.a,null,r.a.createElement(D.a,null,r.a.createElement(Le.a,null))),r.a.createElement(be.a,{primary:e.firstName+" "+e.lastName,secondary:e.phoneNumber}),r.a.createElement(Ge,{onClick:function(){return t=e._id,void ze(t).then(console.log("deleted contact!")).then(window.location.reload()).then((function(e){return l()})).catch((function(e){return console.log(e)}));var t}}))}))):r.a.createElement("p",null))}var He=a(673),qe=a(670),Xe=a(336),Je=Object(de.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Qe(){var e=Je(),t=Object(n.useState)(!1),a=Object(me.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)([]),i=Object(me.a)(c,2),s=(i[0],i[1]),u=Object(n.useState)({}),m=Object(me.a)(u,2),d=m[0],p=m[1];function f(){Re().then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}function h(e){var t=e.target,a=t.name,n=t.value;p(Object(w.a)(Object(w.a)({},d),{},Object(T.a)({},a,n)))}Object(n.useEffect)((function(){f()}),[]);var E=function(){l(!1)};return r.a.createElement("div",null,r.a.createElement(z.a,{type:"button",color:"default",variant:"outlined",onClick:function(){l(!0)}},"Add Contact"),r.a.createElement(He.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:o,onClose:E,closeAfterTransition:!0,BackdropComponent:qe.a,BackdropProps:{timeout:500}},r.a.createElement(Xe.a,{in:o},r.a.createElement("div",{className:e.paper},r.a.createElement("h4",null,"Add Contact"),r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(I.a,{id:"standard-basic",label:"First Name",name:"firstName",onChange:h}),r.a.createElement("br",null),r.a.createElement(I.a,{id:"standard-basic",label:"Last Name",name:"lastName",onChange:h}),r.a.createElement("br",null),r.a.createElement(I.a,{id:"standard-basic",label:"Phone Number",name:"phoneNumber",onChange:h}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(z.a,{type:"button",color:"default",variant:"outlined",onClick:function(e){e.preventDefault(),d.firstName&&d.lastName&&d.phoneNumber&&Ae({firstName:d.firstName,lastName:d.lastName,phoneNumber:d.phoneNumber}).then(E).then(window.location.reload()).then((function(e){return f()})).catch((function(e){return console.log(e)}))},onClose:E}," Submit ")))))}var Ze=Object(de.a)({root:{maxWidth:345,height:"auto",padding:20,textAlign:"center",marginTop:-60,marginRight:-40,borderRadius:20,boxShadow:"0 3px 5px 2px rgba(75, 73, 73, 0.4)"}});function $e(){var e=Ze();return r.a.createElement(pe.a,{className:e.root},r.a.createElement(fe.a,null,r.a.createElement(he.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h5",component:"span",style:{color:"#58585F",letterSpacing:1.5}},"My Contacts"),r.a.createElement("hr",null),r.a.createElement(Ve,null))),r.a.createElement(Qe,null))}var et=a(729),tt=a(734),at=a(731),nt=a(732),rt=a(730),ot=a(744),lt=a(733),ct=a(714),it=a(737),st=a(738),ut=Object(de.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)},button:{marginTop:e.spacing(2)}}}));function mt(){var e=ut(),t=r.a.useState(""),a=Object(me.a)(t,2),o=a[0],l=a[1],c=r.a.useState(!1),i=Object(me.a)(c,2),s=i[0],u=i[1],m=r.a.useState({title:"",interval:"",selectedContact:null}),d=Object(me.a)(m,2),p=d[0],f=d[1];function h(e){var t=e.target,a=t.name,n=t.value;f(Object(w.a)(Object(w.a)({},p),{},Object(T.a)({},a,n))),console.log(p)}Object(n.useEffect)((function(){Re().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]);var E=function(){u(!1)},g={options:o,getOptionLabel:function(e){return e.firstName+" "+e.lastName}};return r.a.createElement("div",null,r.a.createElement(z.a,{variant:"contained",onClick:function(){u(!0)}},"Begin Your Workout"),r.a.createElement(et.a,{open:s,onClose:E,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(rt.a,{id:"alert-dialog-title"},"Please Enter your Relay Details"),r.a.createElement(at.a,null,r.a.createElement(nt.a,null,r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(I.a,{id:"standard-basic",name:"title",value:p.title,label:"Standard",onChange:h})),r.a.createElement(ct.a,{item:!0,xs:4,className:e.formControl},r.a.createElement(ot.a,{id:"demo-simple-select-label"},"Select Time Interval"),r.a.createElement(it.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:h,value:p.interval,name:"interval"},r.a.createElement(lt.a,{value:"00:05:00"},"00:05:00"),r.a.createElement(lt.a,{value:"00:10:00"},"00:10:00"),r.a.createElement(lt.a,{value:"00:15:00"},"00:15:00"),r.a.createElement(lt.a,{value:"00:20:00"},"00:20:00"),r.a.createElement(lt.a,{value:"00:30:00"},"00:30:00"),r.a.createElement(lt.a,{value:"01:00:00"},"01:00:00"))),r.a.createElement(st.a,Object.assign({},g,{id:"debug",name:"selectedContact",value:p.selectedContact,onChange:function(e,t){console.log(t),f(Object(w.a)(Object(w.a)({},p),{},{selectedContact:t}))},renderInput:function(e){return r.a.createElement(I.a,Object.assign({},e,{label:"Select Contact",margin:"normal"}))}}))),r.a.createElement(tt.a,null,r.a.createElement(z.a,{onClick:E,color:"primary"},"Close"),r.a.createElement(z.a,{disabled:!(p.title&&p.interval&&p.selectedContact),onClick:function(e){e.preventDefault(),p.title&&p.interval&&p.selectedContact&&(console.log("click"),We({title:p.title,interval:p.interval,selectedContact:p.selectedContact}).then((function(){return window.location.href="/workout"})).catch((function(e){return console.log(e)})))},color:"primary",autoFocus:!0},"Start")))))}a(393);var dt=Object(de.a)({root:{maxWidth:345,height:300,padding:20,textAlign:"center",marginTop:-60,marginRight:-40,borderRadius:20,boxShadow:"0 3px 5px 2px rgba(75, 73, 73, 0.4)"}});function pt(){var e=dt();return r.a.createElement(pe.a,{className:e.root},r.a.createElement(fe.a,null,r.a.createElement(he.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h5",component:"span",style:{color:"#58585F",letterSpacing:1.5}},"Start your Workout"),r.a.createElement("hr",null),r.a.createElement(mt,null))))}var ft=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(ie,null,r.a.createElement(se,null,r.a.createElement(ue,{size:"lg-4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",{style:{textAlign:"left",fontFamily:"Quicksand, sans-serif",fontWeight:500}},"Welcome to your dashboard, ",r.a.createElement("span",null,e.name.split(" ")[0]),"!"),r.a.createElement("p",{className:"text-muted",style:{textAlign:"left",fontFamily:"Quicksand, sans-serif",fontStyle:"italic"}},"Take a look around"),r.a.createElement("button",{style:{borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout")),r.a.createElement(ue,{size:"lg-7"}),r.a.createElement(ue,{size:"lg-1"})),r.a.createElement("hr",null),r.a.createElement(se,null,r.a.createElement(ue,{size:"lg-2"}),r.a.createElement(ue,{size:"lg-4"},r.a.createElement(ce,null,r.a.createElement("br",null),r.a.createElement(Me,null),r.a.createElement("br",null))),r.a.createElement(ue,{size:"lg-4"},r.a.createElement(ce,null,r.a.createElement("br",null),r.a.createElement($e,null),r.a.createElement("br",null))),r.a.createElement(ue,{size:"lg-2"})),r.a.createElement("hr",null),r.a.createElement(se,null,r.a.createElement(ue,{size:"lg-4"}),r.a.createElement(ue,{size:"lg-4"},r.a.createElement(ce,null,r.a.createElement("br",null),r.a.createElement(pt,null),r.a.createElement("br",null))),r.a.createElement(ue,{size:"lg-4"})),r.a.createElement("hr",null)))}}]),a}(n.Component),ht=Object(v.b)((function(e){return{auth:e.auth}}),{logoutUser:b})(ft);var Et=function(e){return r.a.createElement("div",null,0===e.status?r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:e.start},"Start"):"",1===e.status?r.a.createElement("div",null,r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-red",onClick:e.pause},"Pause"),r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:e.reset},"Reset")):"",2===e.status?r.a.createElement("div",null,r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:e.resume},"Resume"),r.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:e.reset},"Reset")):"")};var gt=function(e){return r.a.createElement("div",null,0===e.time.h?"":r.a.createElement("span",null,e.time.h>=10?e.time.h:"0"+e.time.h),"\xa0\xa0",r.a.createElement("span",null,e.time.m>=10?e.time.m:"0"+e.time.m),"\xa0:\xa0",r.a.createElement("span",null,e.time.s>=10?e.time.s:"0"+e.time.s),"\xa0:\xa0",r.a.createElement("span",null,e.time.ms>=10?e.time.ms:"0"+e.time.ms))},bt=a(329),vt=a.n(bt),yt=a(330),Ot=a.n(yt),wt=a(331),jt=a.n(wt),Ct=a(735),St=Object(de.a)((function(e){return{button:{margin:e.spacing(1)}}}));function Nt(e){var t=St();return r.a.createElement("div",null,r.a.createElement(Ct.a,{title:"Send Location",arrow:!0},r.a.createElement(Be.a,{color:"primary",size:"large",onClick:e.update},r.a.createElement(vt.a,null))),r.a.createElement(Ct.a,{title:"Call Contact",arrow:!0},r.a.createElement(Be.a,{color:"primary",size:"large",onClick:function(){console.log("calling contact")}},r.a.createElement(Ot.a,null))),r.a.createElement(Ct.a,{title:"Take Photo",arrow:!0},r.a.createElement(Be.a,{color:"primary",size:"large",onClick:function(){console.log("taking photo")}},r.a.createElement(jt.a,null))),r.a.createElement("hr",null),r.a.createElement(z.a,{variant:"outlined",color:"secondary",size:"large",className:t.button,onClick:e.stop},"End Workout"),r.a.createElement("br",null),r.a.createElement("br",null))}var kt=function(e){var t=e.longitude,a=e.latitude,o=Object(n.useState)(""),l=Object(me.a)(o,2),c=(l[0],l[1]);return Object(n.useEffect)((function(){!a&&t||function(e,t){fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(e,"&sensor=false&key=").concat("AIzaSyBbDsRn9kjkZyKD1FIaMfzKVz-4GPHuHro")).then((function(e){return e.json()})).then((function(e){return c({userAddress:e.results[0].formatted_address})})).catch((function(e){return console.log("waiting on coordinates")}))}(a,t)}),[a,t]),r.a.createElement("div",{className:"Geo"},r.a.createElement("h4",null,"RELAY LOCATION"),r.a.createElement("p",null,"Your Coordinates"),r.a.createElement("p",null,"Latitude: ",a," "),r.a.createElement("p",null,"Longitude: ",t," "),a&&t?r.a.createElement("img",{src:"https://maps.googleapis.com/maps/api/staticmap?center=".concat(a,",").concat(t,"&zoom=14&size=400x300&sensor=false&markers=color:red%7C").concat(a,",").concat(t,"&key=").concat("AIzaSyBbDsRn9kjkZyKD1FIaMfzKVz-4GPHuHro"),alt:"google-maps"}):null)},xt=(a(394),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_API,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_VONAGE_SECRET),Tt=new(a(395))({apiKey:"044d053d",apiSecret:xt}),_t="14696913589",Rt="8327731981";function Dt(){window.confirm("Your current location has been sent to your contact");Tt.message.sendSms(_t,Rt,"This is a message from Relay: this is *username* current location: *Location*",(function(e,t){e?console.log(e):"0"===t.messages[0].status?console.log("Message sent successfully."):console.log("Message failed with error: ".concat(t.messages[0]["error-text"]))}))}var zt=function(){Object(n.useEffect)((function(){u()}),[]);var e=Object(n.useState)([""]),t=Object(me.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([""]),c=Object(me.a)(l,2),i=c[0],s=c[1];function u(){console.log("started geolocate"),navigator.geolocation?navigator.geolocation.getCurrentPosition(m):console.log("Geolocation is not supported by this browser.")}function m(e){o(e.coords.latitude),s(e.coords.longitude),console.log(e.coords.latitude,e.coords.longitude)}var d=Object(n.useState)({ms:0,s:0,m:0,h:0}),p=Object(me.a)(d,2),f=p[0],h=p[1],E=Object(n.useState)(),g=Object(me.a)(E,2),b=g[0],v=g[1],y=Object(n.useState)(0),O=Object(me.a)(y,2),w=O[0],j=O[1],C=function(){setInterval(S,3e3)};function S(){u(),console.log("Test")}var N=function(){R(),j(1),v(setInterval(R,10)),Tt.message.sendSms(_t,Rt,"This message is from Relay!  It is to notify you that *User Name* has begun a workout. Their starting location is: *Location*",(function(e,t){e?console.log(e):"0"===t.messages[0].status?console.log("Message sent successfully."):console.log("Message failed with error: ".concat(t.messages[0]["error-text"]))})),C()},k=f.ms,x=f.s,T=f.m,_=f.h,R=function(){return 60===T&&(_++,T=0),60===x&&(T++,x=0),100===k&&(x++,k=0),k++,h({ms:k,s:x,m:T,h:_})};return r.a.createElement("div",{className:"main-section"},r.a.createElement("div",{className:"clock-holder"},r.a.createElement("div",{className:"stopwatch"},r.a.createElement(gt,{time:f}),r.a.createElement(Et,{status:w,resume:function(){return N()},reset:function(){clearInterval(b),j(0),h({ms:0,s:0,m:0,h:0}),function(){if(!0===window.confirm("Would you like to notify your contact that you have reset your workout?")){Tt.message.sendSms(_t,Rt,"This is to notify you that *User Name* has reset their workout timeclock.",(function(e,t){e?console.log(e):"0"===t.messages[0].status?console.log("Message sent successfully."):console.log("Message failed with error: ".concat(t.messages[0]["error-text"]))}))}}(),C()},pause:function(){clearInterval(b),j(2),function(){if(!0===window.confirm("Would you like to notify your contact that you have paused your workout?")){Tt.message.sendSms(_t,Rt,"This is to notify you that *User Name* has paused their workout. They are located here: *Location*",(function(e,t){e?console.log(e):"0"===t.messages[0].status?console.log("Message sent successfully."):console.log("Message failed with error: ".concat(t.messages[0]["error-text"]))}))}}(),clearInterval(C)},start:N})),r.a.createElement(Nt,{stop:function(){if(!0===window.confirm("Are you ready to end your workout?")){Tt.message.sendSms(_t,Rt,"This is to notify you that *User Name* has ended their workout. Their final location is *Location* .",(function(e,t){e?console.log(e):"0"===t.messages[0].status?console.log("Message sent successfully."):console.log("Message failed with error: ".concat(t.messages[0]["error-text"]))}))}},update:Dt})),r.a.createElement(kt,{latitude:a,longitude:i}))},At=Object(de.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function It(e){var t=e.interval,a=e.firstName,n=e.lastName,o=e.phoneNumber,l=e.title,c=At();return r.a.createElement(pe.a,{className:c.root},r.a.createElement(he.a,null,r.a.createElement(L.a,{className:c.title,color:"textSecondary",gutterBottom:!0},"Workout Details: ",l),r.a.createElement(L.a,{variant:"body2",component:"p"},"Emergency Contact: ",a," ",n,r.a.createElement("br",null),"Emergency Contact Phone Number: ",o,"Message Interval: ",t,r.a.createElement("br",null))))}var Wt=function(){var e=Object(n.useState)([""]),t=Object(me.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([""]),c=Object(me.a)(l,2),i=c[0],s=c[1],u=a[0],m=u.contacts;return Object(n.useEffect)((function(){Ie().then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){m&&De(m).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[m]),console.log(u),console.log(m),console.log(i),r.a.createElement("div",null,r.a.createElement(ie,null,r.a.createElement(se,null,r.a.createElement(ue,{size:"lg-3"}),r.a.createElement(ue,{size:"lg-6"},r.a.createElement(ce,null,r.a.createElement(It,{key:u._id,title:u.title,interval:u.interval,firstName:i.firstName,lastName:i.lastName,phoneNumber:i.phoneNumber}),r.a.createElement("hr",null),r.a.createElement(zt,null),r.a.createElement("hr",null),r.a.createElement(Et,null))),r.a.createElement(ue,{size:"lg-6"}))))},Pt=a(333),Mt=Object(v.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(Pt.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/"})}}))}));if(localStorage.jwtToken){var Ut=localStorage.jwtToken;E(Ut);var Lt=Object(p.a)(Ut);x.dispatch(g(Lt));var Bt=Date.now()/1e3;Lt.exp<Bt&&(x.dispatch(b()),window.location.href="./")}var Yt=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{store:x},r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.b,{exact:!0,path:"/register",component:K}),r.a.createElement(d.b,{exact:!0,path:"/",component:Z}),r.a.createElement(d.d,null,r.a.createElement(Mt,{exact:!0,path:"/dashboard",component:ht}),r.a.createElement(Mt,{exact:!0,path:"/workout",component:Wt})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Yt,null),document.getElementById("root")),console.log("production")}},[[356,1,2]]]);
//# sourceMappingURL=main.982191a1.chunk.js.map