webpackJsonp([1],{0:function(t,e){},"0Gvo":function(t,e){},"7zck":function(t,e){},HsZ7:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a=r("3EgV"),s=r.n(a),i=r("DmT9"),o=r.n(i),c=r("hMcO"),l=r.n(c),d=(r("7zck"),{render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[t._l(t.links,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.url}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),"Profile"===e.title?r("v-list-tile-sub-title",{domProps:{textContent:t._s(t.user.email)}}):t._e()],1)],1)}),t._v(" "),t.isUserLoggedIn?r("v-list-tile",{on:{click:t.onLogout}},[r("v-list-tile-action",[r("v-icon",[t._v("exit_to_app")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s("Logout")}})],1)],1):t._e()],2)],1),t._v(" "),r("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[r("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("Note manager")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.links,function(e){return r("v-btn",{key:e.title,attrs:{flat:"",to:e.url}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title))],1)}),t._v(" "),t.isUserLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[r("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),r("v-content",[r("router-view")],1),t._v(" "),t.error?[r("v-snackbar",{attrs:{"multi-line":!0,timeout:5e3,color:"error",value:!0},on:{input:t.closeError}},[t._v("\n      "+t._s(t.error)+"\n      "),r("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e()],2)},staticRenderFns:[]});var u=r("VU/8")({data:function(){return{drawer:!1}},computed:{error:function(){return this.$store.getters.error},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},user:function(){return this.$store.getters.user},links:function(){return this.isUserLoggedIn?[{title:"Profile",icon:"account_box",url:"/user"},{title:"New note",icon:"note_add",url:"/new"},{title:"My notes",icon:"list",url:"/list"},{title:"Chat",icon:"chat",url:"/chat"}]:[{title:"Registration",icon:"face",url:"/registration"},{title:"Login",icon:"lock",url:"/login"}]}},methods:{closeError:function(){this.$store.dispatch("clearError")},onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}}},d,!1,function(t){r("s7k4")},"data-v-187575a8",null).exports,v=r("/ocq"),p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:150,color:"primary",indeterminate:""}})],1)],1)],1)],1):r("div",[t.notesWithPreview.length>0?r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-carousel",t._l(t.notesWithPreview,function(e){return r("v-carousel-item",{key:e.id,attrs:{src:e.imageSrc},on:{click:function(r){t.onClickCarausel(e.id)}}})}))],1)],1)],1):t._e(),t._v(" "),r("v-container",{attrs:{"grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.publicNotes,function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl3:""}},[r("v-card",[r("v-img",{attrs:{src:e.imageSrc||t.defaultImageSrc,height:"200px"}}),t._v(" "),r("v-card-text",{staticStyle:{"word-wrap":"break-word"}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),t._v(" "),r("div",[t._v(t._s(e.description))])])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""}},[t._v("Share")]),t._v(" "),r("v-btn",{staticClass:"primary",attrs:{raised:"",to:"/note/"+e.id}},[t._v("Open")])],1)],1)],1)}))],1)],1)},staticRenderFns:[]};var f=r("VU/8")({data:function(){return{}},computed:{notesWithPreview:function(){return this.$store.getters.notesWithPreview},publicNotes:function(){return this.$store.getters.publicNotes},defaultImageSrc:function(){return this.$store.getters.defaultImageSrc},loading:function(){return this.$store.getters.loading}},methods:{onClickCarausel:function(t){this.$router.push("/note/"+t)}}},p,!1,function(t){r("0Gvo")},"data-v-2222fb42",null).exports,m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"1500px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-btn",{staticClass:"primary",attrs:{slot:"activator"},slot:"activator"},[t._v("Edit")]),t._v(" "),r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",lg10:"","offset-lg1":""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Edit note")])]),t._v(" "),r("v-form",{ref:"form",staticClass:"pa-3 pt-4",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{name:"title",label:"Title",type:"text"},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),r("v-textarea",{attrs:{name:"description",label:"Description",type:"text","auto-grow":"",rows:"3"},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}}),t._v(" "),r("v-textarea",{attrs:{name:"text",label:"Note text",type:"text",rows:"10"},model:{value:t.editedText,callback:function(e){t.editedText=e},expression:"editedText"}}),t._v(" "),r("v-switch",{attrs:{label:"Note is private?",color:"primary"},model:{value:t.editedIsPrivate,callback:function(e){t.editedIsPrivate=e},expression:"editedIsPrivate"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.onCancel}},[t._v("Cancel")]),t._v(" "),r("v-btn",{staticClass:"white--text",attrs:{raised:"",color:"primary",disabled:!t.valid||t.loading,loading:t.loading},on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var h=r("VU/8")({data:function(){return{modal:!1,editedTitle:this.note.title,editedDescription:this.note.description,editedText:this.note.text,editedIsPrivate:this.note.isPrivate,valid:!1}},methods:{onCancel:function(){this.editedTitle=this.note.title,this.editedDescription=this.note.description,this.editedText=this.note.text,this.editedIsPrivate=this.note.isPrivate,this.modal=!1},onSave:function(){var t=this;this.$store.dispatch("updateNote",{title:this.editedTitle,description:this.editedDescription,text:this.editedText,isPrivate:this.editedIsPrivate,id:this.note.id}).then(function(){t.modal=!1}).catch(function(){})}},props:["note"],computed:{loading:function(){return this.$store.getters.loading}}},m,!1,function(t){r("YGxT")},"data-v-f6880270",null).exports,g=r("Zrlr"),x=r.n(g),k=r("wxAW"),_=r.n(k),w=r("Av7u"),y=r.n(w),b=function(){function t(){x()(this,t)}return _()(t,null,[{key:"encode",value:function(t,e){return y.a.AES.encrypt(t,e).toString()}},{key:"decode",value:function(t,e){return y.a.AES.decrypt(t,e).toString(y.a.enc.Utf8)}}]),t}(),E={props:["id"],data:function(){return{encode:!1,key:"",decodedText:""}},computed:{note:function(){var t=this.id;window.console.log(t);var e=this.$store.getters.noteById(t);return e||(this.$store.dispatch("setError","a note was not found or insufficient access rights"),{})},defaultImageSrc:function(){return this.$store.getters.defaultImageSrc},loading:function(){return this.$store.getters.loading},user:function(){return this.$store.getters.user},text:function(){return this.note.text.length>20&&-1===this.note.text.indexOf(" ")?"This text are encoded":this.decodedText.length>0?this.decodedText:this.note.text}},methods:{onDelete:function(){var t=this;this.$store.dispatch("deleteNote",{id:this.note.id}).then(function(){t.$router.push("/list")}).catch(function(){})},onEncode:function(){0===this.key.length?(this.encode=!this.encode,this.decodedText=""):this.decodedText=b.decode(this.note.text,this.key)}},components:{appEditNoteModal:h}},S={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.note?r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[t.loading?r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:150,color:"primary",indeterminate:""}})],1):r("v-card",[t.note.imageSrc?r("v-img",{attrs:{src:t.note.imageSrc,height:"300px"}}):t._e(),t._v(" "),r("v-card-text",{staticStyle:{"word-wrap":"break-word"}},[r("h1",{staticClass:"text--primary py-3"},[t._v(t._s(t.note.title))]),t._v(" "),r("v-divider"),t._v(" "),r("h2",[t._v(t._s(t.note.description))]),t._v(" "),r("v-divider"),t._v(" "),r("p",[t._v(t._s(t.text))])],1),t._v(" "),r("v-card-actions",{attrs:{"pa-5":""}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.onEncode}},[t._v(t._s(t.encode?"Encode !":"Encode ?"))]),t._v(" "),t.user&&t.note.authorId===t.user.id?r("v-btn",{staticClass:"warning",attrs:{flat:""},on:{click:t.onDelete}},[t._v("Delete")]):t._e(),t._v(" "),t.user&&t.note.authorId===t.user.id?r("app-edit-note-modal",{attrs:{note:t.note}}):t._e()],1),t._v(" "),r("v-layout",{attrs:{"justify-end":""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[t.encode?r("v-text-field",{staticClass:"pa-0 ma-0",attrs:{clearable:"",name:"key",label:"Key for encode note",type:"text"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}):t._e()],1)],1)],1)],1)],1):r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:200,width:20}})],1)],1)],1)},staticRenderFns:[]};var C=r("VU/8")(E,S,!1,function(t){r("wCi1")},"data-v-84730caa",null).exports,N={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-lg":""}},[r("v-layout",[r("v-flex",[r("h1",{staticClass:"text--secondary mb-3"},[t._v("My notes")])])],1),t._v(" "),0!==t.myNotes.length?r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.myNotes,function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md5:"",lg4:"",xl4:"","mb-3":""}},[r("v-card",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-img",{attrs:{src:e.imageSrc||t.defaultImageSrc,height:"150px"}})],1),t._v(" "),r("v-flex",{attrs:{xs8:""}},[r("v-card-text",{staticStyle:{"word-wrap":"break-word"}},[r("h2",[t._v(" "+t._s(e.title||"-"))]),t._v(" "),r("p",[t._v(t._s(e.description||"-"))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text",attrs:{color:"primary",to:"/note/"+e.id}},[t._v("Open")])],1)],1)],1)],1)],1)})):0===t.myNotes.length?r("v-layout",[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("h1",{staticClass:"text--primary"},[t._v("You have no notes")])])],1):r("v-layout",[t._v("\n    <"),r("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:200,width:20}})],1)],1)},staticRenderFns:[]};var I=r("VU/8")({data:function(){return{}},computed:{myNotes:function(){return this.$store.getters.myNotes},defaultImageSrc:function(){return this.$store.getters.defaultImageSrc}}},N,!1,function(t){r("HsZ7")},"data-v-0e63cfa4",null).exports,$={data:function(){return{title:"",description:"",text:"",isPrivate:!1,image:null,imageSrc:"",encode:!1,key:"",valid:!1}},computed:{loading:function(){return this.$store.getters.loading}},methods:{createNote:function(){var t=this;if(this.$refs.form.validate()){var e={title:this.title,description:this.description,text:this.text,isPrivate:this.isPrivate,image:this.image,key:this.key};this.$store.dispatch("createNote",e).then(function(){return t.$router.push("/")}).catch()}},triggerUpload:function(){this.$refs.fileInput.click()},onFileChange:function(t){var e=this,r=t.target.files[0],n=new FileReader;n.onload=function(){e.imageSrc=n.result},n.readAsDataURL(r),this.image=r}}},P={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":"",md8:"","offset-md2":"",lg6:"","offset-lg3":""}},[r("h1",{staticClass:"text--secondary pa-2"},[t._v("Create New Note")]),t._v(" "),r("v-form",{ref:"form",staticClass:"pa-2",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{name:"title",label:"Note title",type:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("v-textarea",{attrs:{name:"description",label:"Note description",type:"text"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),r("v-textarea",{attrs:{name:"text",label:"Note text",type:"text"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),r("v-btn",{staticClass:"white--text mb-3",attrs:{color:"primary"},on:{click:t.triggerUpload}},[t._v("Upload preview\n        "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1),t._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),t._v(" "),t.imageSrc?r("img",{attrs:{src:t.imageSrc,alt:"",height:"150"}}):t._e(),t._v(" "),r("v-switch",{staticClass:"pa-2",attrs:{label:"Add to private?",color:"primary"},model:{value:t.isPrivate,callback:function(e){t.isPrivate=e},expression:"isPrivate"}}),t._v(" "),r("v-switch",{staticClass:"pa-2",attrs:{label:"Encode this note?",color:"primary"},model:{value:t.encode,callback:function(e){t.encode=e},expression:"encode"}}),t._v(" "),t.encode?r("v-text-field",{staticClass:"pa-2",attrs:{name:"key",label:"Key for encode note",type:"text"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text",attrs:{color:"primary",disabled:!t.valid||t.loading,loading:t.loading},on:{click:t.createNote}},[t._v("Create Note")])],1)],1)],1)},staticRenderFns:[]};var L=r("VU/8")($,P,!1,function(t){r("hXgm")},"data-v-0aa93fcb",null).exports,T={data:function(){return{email:"",password:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}],valid:!0}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){return t.$router.push("/")}).catch(function(t){return window.console.error(t)})}}},created:function(){this.$route.query.loginError&&this.$store.dispatch("setError","Please log in to access this page")}},U={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:"",lg4:"",xl3:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("Login form")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:!t.valid||t.loading,loading:t.loading},on:{click:t.onSubmit}},[t._v("Login")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var R=r("VU/8")(T,U,!1,function(t){r("e7kl")},"data-v-0a03329e",null).exports,A={data:function(){var t=this;return{email:"",nickname:"",password:"",confirmPassword:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],image:null,imageSrc:"",nicknameRules:[function(t){return!!t||"Nickname is required"},function(t){return t&&t.length>=4||"Nickname must be equal or more than 4 characters"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}],confirmPasswordRules:[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Password should match"}],valid:!0,validNickname:!0,step:""}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onCompleteFirstStep:function(){var t=this;this.$refs.form.validate()&&this.$store.dispatch("checkOnAvailable",{field:"username",value:this.email}).then(function(){t.step=2}).catch(function(){})},onCompleteSecondStep:function(){var t=this;this.$refs.formNickname.validate()&&this.$store.dispatch("checkOnAvailable",{field:"nickname",value:this.nickname}).then(function(){t.step=3}).catch(function(){})},onSubmit:function(){var t=this,e={email:this.email,password:this.password,nickname:this.nickname,image:this.image};this.$store.dispatch("registerUser",e).then(function(){return t.$router.push("/")}).catch(function(){})},triggerUpload:function(){this.$refs.fileInput.click()},onFileChange:function(t){var e=this,r=t.target.files[0],n=new FileReader;n.onload=function(){e.imageSrc=n.result},n.readAsDataURL(r),this.image=r}}},F={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:"",lg5:"",xl4:""}},[r("v-stepper",{attrs:{"alt-labels":""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:t.step>1,step:"1"}},[t._v("Create account")]),t._v(" "),r("v-divider"),t._v(" "),r("v-stepper-step",{attrs:{complete:t.step>2,step:"2"}},[t._v("Enter your nickname")]),t._v(" "),r("v-divider"),t._v(" "),r("v-stepper-step",{attrs:{step:"3"}},[t._v("Download your avatar")])],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",[r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Confirm password",type:"password",rules:t.confirmPasswordRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onCompleteFirstStep}},[t._v("\n                  Continue\n                ")])],1)],1)],1),t._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",[r("v-card-text",[r("v-form",{ref:"formNickname",attrs:{"lazy-validation":""},model:{value:t.validNickname,callback:function(e){t.validNickname=e},expression:"validNickname"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"nickname",label:"Nickname",type:"text",rules:t.nicknameRules},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.validNickname||t.loading},on:{click:t.onCompleteSecondStep}},[t._v("\n                  Continue\n                ")])],1)],1)],1),t._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",[t.imageSrc?r("v-img",{attrs:{src:t.imageSrc}}):t._e(),t._v(" "),r("v-btn",{staticClass:"white--text mb-3",attrs:{color:"primary"},on:{click:t.triggerUpload}},[t._v("Upload preview\n                "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1),t._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.validNickname||t.loading},on:{click:t.onSubmit}},[t._v("\n                  Submit!\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var O=r("VU/8")(A,F,!1,function(t){r("aE3p")},"data-v-6b1e9ce0",null).exports,M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("h1",[this._v(this._s(this.user.nickname))]),this._v(" "),e("v-img",{attrs:{src:this.user.avatarSrc}})],1)],1)],1)},staticRenderFns:[]};var D=r("VU/8")({data:function(){return{}},computed:{user:function(){return this.$store.getters.user}}},M,!1,function(t){r("SIa2")},"data-v-4f3c3fef",null).exports,q={data:function(){return{isConnected:!1,message:"",messages:[],footerHeight:"60px",onInputKeyFlag:!1,key:""}},computed:{user:function(){return this.$store.getters.user}},sockets:{connect:function(){this.isConnected=!0},disconnect:function(){this.isConnected=!1},MESSAGE:function(t){var e=t;if(e.date=new Date(e.createAt),-1!==e.message.indexOf("U2FsdGVkX1")){if(!(this.key.length>0))return;e.message=b.decode(t.message,this.key)}e.message.length>0&&this.messages.push(e)}},methods:{pingServer:function(){this.$socket.emit("pingServer","PING!")},sendMessage:function(){if(this.message.length>0){this.key.length>0&&(this.message=b.encode(this.message,this.key));var t=new Date;this.$socket.emit("SEND_MESSAGE",{createAt:t.getTime(),user:this.user.nickname,message:this.message,avatarSrc:this.user.avatarSrc}),this.message=""}},inputKey:function(){this.onInputKeyFlag=!this.onInputKeyFlag,this.onInputKeyFlag?this.footerHeight="120px":this.footerHeight="60px"},isAMultyMsg:function(t){return!(t<1)&&this.messages[t].user===this.messages[t-1].user}},updated:function(){if(window.pageYOffset){var t=document.body.offsetHeight-document.documentElement.clientHeight;window.scrollTo(0,t)}}},V={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t._l(t.messages,function(e,n){return r("v-layout",{key:e.createAt,attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-card",{attrs:{flat:"",tile:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs1:""}},[t.isAMultyMsg(n)?t._e():r("v-avatar",{attrs:{size:"50px",color:"grey lighten-4"}},[r("v-img",{attrs:{src:e.avatarSrc,alt:"avatar"}})],1)],1),t._v(" "),r("v-flex",{attrs:{xs11:""}},[r("v-card-text",{staticClass:"pa-1 ma-0",staticStyle:{"word-wrap":"break-word"}},[t.isAMultyMsg(n)?t._e():r("span",{staticClass:"subheading primary--text font-weight-bold"},[t._v(t._s(e.user))]),t._v(" "),t.isAMultyMsg(n)?t._e():r("span",{staticClass:"secondary--text"},[t._v(t._s(e.date.getHours())+":"+t._s(e.date.getMinutes()))]),t._v(" "),r("p",{staticClass:"pa-0 ma-0"},[t._v(t._s(e.message))])])],1)],1)],1)],1)],1)}),t._v(" "),r("v-footer",{attrs:{app:"",height:t.footerHeight,color:"white"}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","pa-5":""}},[r("v-text-field",{attrs:{"append-outer-icon":"send","append-icon":"vpn_key",clearable:"",label:"Message",type:"text"},on:{"click:append-outer":t.sendMessage,"click:append":t.inputKey,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendMessage(e):null}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),t.onInputKeyFlag?r("v-text-field",{staticClass:"mr-4",attrs:{label:"Key",type:"text"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}):t._e()],1)],1)],1)],2)},staticRenderFns:[]};var z=r("VU/8")(q,V,!1,function(t){r("XY0v")},"data-v-5858fd06",null).exports,G=function(t,e,r){localStorage.getItem("user-token")?r():r("/login?loginError=true")};n.default.use(v.a);var H=new v.a({routes:[{path:"",name:"home",component:f},{path:"/note/:id",name:"note",component:C,props:!0},{path:"/list",name:"list",component:I,beforeEnter:G},{path:"/new",name:"newNote",component:L,beforeEnter:G},{path:"/login",name:"login",component:R},{path:"/registration",name:"registration",component:O},{path:"/user",name:"profile",component:D,beforeEnter:G},{path:"/chat",name:"chat",component:z,beforeEnter:G}],mode:"history"}),K=r("NYxO"),W=r("Xxa5"),j=r.n(W),Y=r("Dd8w"),X=r.n(Y),B=r("exGp"),Z=r.n(B),J=r("mtWM"),Q=r.n(J),tt=function t(e,r,n,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments[5],o=arguments[6];x()(this,t),this.title=e,this.description=r,this.text=n,this.authorId=a,this.isPrivate=s,this.id=i,this.imageSrc=o},et={state:{notes:[],defaultImageSrc:"https://st2.depositphotos.com/1496410/5390/v/950/depositphotos_53905395-stock-illustration-small-memo-with-pin.jpg"},mutations:{createNote:function(t,e){t.notes.push(e)},loadNotes:function(t,e){t.notes=e},updateNote:function(t,e){var r=t.notes.find(function(t){return t.id===e.id});r.title=e.title,r.description=e.description,r.text=e.text,r.isPrivate=e.isPrivate},deleteNote:function(t,e){var r=t.notes.find(function(t){return t.id===e.id}),n=t.notes.indexOf(r);t.notes.splice(n,1)}},actions:{createNote:function(t,e){var r=this,n=t.commit,a=t.getters,s=t.dispatch;return Z()(j.a.mark(function t(){var i,o,c,l,d;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n("clearError"),n("setLoading",!0),i=e.image,o=void 0,t.prev=4,!i){t.next=9;break}return t.next=8,s("loadImage",{image:i});case 8:o=t.sent;case 9:return c=new tt(e.title,e.description,e.text,a.user.id,e.isPrivate,e.id,o),e.key.length>0&&(c.text=b.encode(c.text,e.key)),window.console.log(c),t.next=14,Q.a.post("/api/note/new",c);case 14:l=t.sent,d=l.data,n("createNote",X()({},c,{id:d.note._id})),n("setLoading",!1),t.next=25;break;case 20:throw t.prev=20,t.t0=t.catch(4),n("setError",t.t0.message),n("setLoading",!1),t.t0;case 25:case"end":return t.stop()}},t,r,[[4,20]])}))()},updateNote:function(t,e){var r=this,n=t.commit;t.getters;return Z()(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),t.prev=2,t.next=5,Q.a.put("/api/note/"+e.id,X()({},e));case 5:n("updateNote",{title:e.title,description:e.description,id:e.id,isPrivate:e.isPrivate}),n("setLoading",!1),t.next=14;break;case 9:throw t.prev=9,t.t0=t.catch(2),n("setError",t.t0.message),n("setLoading",!1),t.t0;case 14:case"end":return t.stop()}},t,r,[[2,9]])}))()},fetchNotes:function(t){var e=this,r=t.commit;return Z()(j.a.mark(function t(){var n,a,s;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,Q.a.get("/api/note/list");case 5:n=t.sent,a=n.data,s=[],a.forEach(function(t){s.push(new tt(t.title,t.description,t.text,t.authorId,t.isPrivate,t._id,t.imageSrc))}),r("loadNotes",s),r("setLoading",!1),t.next=18;break;case 13:throw t.prev=13,t.t0=t.catch(2),r("setError",t.t0.message),r("setLoading",!1),t.t0;case 18:case"end":return t.stop()}},t,e,[[2,13]])}))()},deleteNote:function(t,e){var r=this,n=t.commit;t.getters;return Z()(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),t.prev=2,t.next=5,Q.a.delete("/api/note/"+e.id);case 5:n("deleteNote",{id:e.id}),n("setLoading",!1),t.next=14;break;case 9:throw t.prev=9,t.t0=t.catch(2),n("setError",t.t0.message),n("setLoading",!1),t.t0;case 14:case"end":return t.stop()}},t,r,[[2,9]])}))()},loadImage:function(t,e){var r=this,n=t.commit;return Z()(j.a.mark(function t(){var a,s,i,o,c;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),a=e.image,s=void 0,t.prev=4,(i=new FormData).append("file",a),t.next=9,Q.a.post("/api/note/image",i);case 9:return o=t.sent,c=o.data,window.console.log(c),s=Q.a.defaults.baseURL+"api/note/image/"+c.id,n("setLoading",!1),t.abrupt("return",s);case 17:throw t.prev=17,t.t0=t.catch(4),n("setError",t.t0.message),n("setLoading",!1),t.t0;case 22:case"end":return t.stop()}},t,r,[[4,17]])}))()}},getters:{defaultImageSrc:function(t){return t.defaultImageSrc},notes:function(t){return t.notes},publicNotes:function(t){return t.notes.filter(function(t){return!t.isPrivate})},myNotes:function(t,e){return t.notes.filter(function(t){return t.authorId===e.user.id})},notesWithPreview:function(t){return t.notes.filter(function(t){return!!t.imageSrc&&!t.isPrivate})},noteById:function(t){return function(e){return t.notes.find(function(t){return t.id===e})}}}},rt=r("//Fk"),nt=r.n(rt);Q.a.defaults.baseURL="http://localhost:3001/";var at=function(){function t(e){x()(this,t),window.console.log("CREATE USER"),window.console.log(e),this.token=e.token,this.refreshToken=e.refreshToken,this.id=e.id,this.email=e.username,this.nickname=e.nickname,this.avatarSrc=e.avatarSrc,localStorage.setItem("user-refreshToken",e.refreshToken),localStorage.setItem("user-token",e.token),this.configAxios()}return _()(t,[{key:"configAxios",value:function(){var t,e=this;Q.a.interceptors.request.use(function(t){if(!e.token)return t;var r=X()({headers:{}},t);return r.headers.authorization="Bearer "+e.token,window.console.log("INTERCEPTOR ON REQUEST"),r},function(t){nt.a.reject(t)}),Q.a.interceptors.response.use(function(t){return t},(t=Z()(j.a.mark(function t(r){var n,a,s,i;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.refreshToken&&401===r.response.status&&!r.config.retry){t.next=2;break}throw r;case 2:return(n=void 0)||(n=Q.a.post("/api/refresh",{refreshToken:e.refreshToken})),t.next=6,n;case 6:return a=t.sent,s=a.data,window.console.log("INTERCEPTORS ON RESPONSE"),s&&(e.token=s.token,e.refreshToken=s.refreshToken,localStorage.setItem("user-refreshToken",s.refreshToken),localStorage.setItem("user-token",s.token)),i=X()({},r.config,{retry:!0}),window.console.log(i),t.abrupt("return",Q()(i));case 13:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)}))}}]),t}(),st={state:{user:null},mutations:{setUser:function(t,e){t.user=e},updateUser:function(t,e){t.user.nickname=e.nickname,t.user.avatarSrc=e.avatarSrc,t.user.email=e.username,t.user.id=e.id}},actions:{registerUser:function(t,e){var r=this,n=t.commit,a=t.dispatch;return Z()(j.a.mark(function t(){var s,i,o,c;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n("clearError"),n("setLoading",!0),s=e.image,i=void 0,t.prev=4,!s){t.next=9;break}return t.next=8,a("loadImage",{image:s});case 8:i=t.sent;case 9:return t.next=11,Q.a.post("/api/signup",{username:e.email,password:e.password,nickname:e.nickname,avatarSrc:i});case 11:o=t.sent,c=o.data,n("setUser",new at(c)),n("setLoading",!1),t.next=22;break;case 17:throw t.prev=17,t.t0=t.catch(4),n("setLoading",!1),n("setError",t.t0.response.data.message),t.t0;case 22:case"end":return t.stop()}},t,r,[[4,17]])}))()},loginUser:function(t,e){var r=this,n=t.commit;return Z()(j.a.mark(function t(){var a,s;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),t.prev=2,t.next=5,Q.a.post("/api/login",{username:e.email,password:e.password});case 5:a=t.sent,s=a.data,n("setUser",new at(s)),n("setLoading",!1),t.next=16;break;case 11:throw t.prev=11,t.t0=t.catch(2),n("setLoading",!1),n("setError",t.t0.response.data.message),t.t0;case 16:case"end":return t.stop()}},t,r,[[2,11]])}))()},autoLoginUser:function(t,e){var r=this,n=t.commit;return Z()(j.a.mark(function t(){var a,s;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("setUser",new at(e)),n("clearError"),n("setLoading",!0),t.prev=3,window.console.log("AUTOLOGIN1"),t.next=7,Q.a.get("/api/user/");case 7:a=t.sent,s=a.data,window.console.log(s),window.console.log("AUTOLOGIN"),n("updateUser",s),n("setLoading",!1),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),n("setLoading",!1),n("setError",t.t0.response.data.message);case 19:case"end":return t.stop()}},t,r,[[3,15]])}))()},logoutUser:function(t){var e=this,r=t.commit,n=t.getters;return Z()(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.removeItem("user-token"),localStorage.removeItem("user-refreshToken"),t.prev=2,t.next=5,Q.a.post("/api/logout",{refreshToken:n.user.refreshToken});case 5:r("setUser",null),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(2),t.t0;case 11:case"end":return t.stop()}},t,e,[[2,8]])}))()},checkOnAvailable:function(t,e){var r=this,n=t.commit;return Z()(j.a.mark(function t(){var a,s;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),t.prev=2,t.next=5,Q.a.post("/api/check",{field:e.field,value:e.value});case 5:if(a=t.sent,s=a.data,window.console.log(s),s.isAvailable){t.next=10;break}throw new Error("This "+e.field+" are not available");case 10:return n("setLoading",!1),t.abrupt("return",s.isAvailable);case 14:throw t.prev=14,t.t0=t.catch(2),n("setLoading",!1),n("setError",t.t0.message),t.t0;case 19:case"end":return t.stop()}},t,r,[[2,14]])}))()}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return null!==t.user}}};n.default.use(K.a);var it=new K.a.Store({modules:{notes:et,user:st,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){(0,t.commit)("setLoading",e)},setError:function(t,e){(0,t.commit)("setError",e)},clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},chat:{state:{},mutations:{},actions:{},getters:{}}}}),ot=o()("http://localhost:3001/");n.default.use(l.a,ot,it),n.default.use(s.a,{theme:{primary:"#4c75a3",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}),n.default.config.productionTip=!1,new n.default({el:"#app",store:it,router:H,components:{App:u},template:"<App/>",created:function(){var t={};t.refreshToken=localStorage.getItem("user-refreshToken"),t.token=localStorage.getItem("user-token"),t.refreshToken&&this.$store.dispatch("autoLoginUser",t).then().catch(),this.$store.dispatch("fetchNotes")}})},SIa2:function(t,e){},XY0v:function(t,e){},YGxT:function(t,e){},aE3p:function(t,e){},e7kl:function(t,e){},hXgm:function(t,e){},s7k4:function(t,e){},wCi1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d56384d4895c295d8bc3.js.map