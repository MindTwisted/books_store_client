(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c66d"],{c66d:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"profile"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[s("ul",[s("li",[s("router-link",{attrs:{to:"/"}},[e._v("Main")])],1),e._m(0)])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Name")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],class:{input:!0,"is-danger":e.$v.name.$error},attrs:{type:"text",placeholder:"Name"},domProps:{value:e.$v.name.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.name,"$model",a.target.value.trim())},blur:function(a){e.$forceUpdate()}}})]),s("ul",{staticClass:"help is-danger"},[e.$v.name.$dirty&&!e.$v.name.required?s("li",[e._v("\n                    Field is required.\n                ")]):e._e(),e.$v.name.minLength?e._e():s("li",[e._v("\n                    Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" letters.\n                ")])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Email")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],class:{input:!0,"is-danger":e.$v.email.$error},attrs:{type:"text",placeholder:"Email"},domProps:{value:e.$v.email.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.email,"$model",a.target.value.trim())},blur:function(a){e.$forceUpdate()}}})]),s("ul",{staticClass:"help is-danger"},[e.$v.email.$dirty&&!e.$v.email.required?s("li",[e._v("\n                    Field is required.\n                ")]):e._e(),e.$v.email.email?e._e():s("li",[e._v("\n                    This field must be a valid email address.\n                ")])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("New password")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.password.$model,expression:"$v.password.$model",modifiers:{trim:!0}}],class:{input:!0,"is-danger":e.$v.password.$error},attrs:{type:"password",placeholder:"New password"},domProps:{value:e.$v.password.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.password,"$model",a.target.value.trim())},blur:function(a){e.$forceUpdate()}}})]),s("ul",{staticClass:"help is-danger"},[e.$v.password.$dirty&&!e.$v.password.required?s("li",[e._v("\n                    Field is required.\n                ")]):e._e(),e.$v.password.minLength?e._e():s("li",[e._v("\n                    Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" letters.\n                ")])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Repeat new password")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.repeatPassword.$model,expression:"$v.repeatPassword.$model",modifiers:{trim:!0}}],class:{input:!0,"is-danger":e.$v.repeatPassword.$error},attrs:{type:"password",placeholder:"Repeat new password"},domProps:{value:e.$v.repeatPassword.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.repeatPassword,"$model",a.target.value.trim())},blur:function(a){e.$forceUpdate()}}})]),s("ul",{staticClass:"help is-danger"},[e.$v.password.$dirty&&!e.$v.password.required?s("li",[e._v("\n                    Field is required.\n                ")]):e._e(),e.$v.repeatPassword.sameAsPassword?e._e():s("li",[e._v("\n                    Passwords must be identical.\n                ")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[e.isLoading?s("button",{staticClass:"button is-success is-loading",attrs:{disabled:""}},[e._v("\n                    Update\n                ")]):s("button",{staticClass:"button is-success",on:{click:e.handleUpdateUser}},[e._v("Update")])])])])])},i=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("li",{staticClass:"is-active"},[s("a",{attrs:{href:"#","aria-current":"page"}},[e._v("\n                        Profile\n                    ")])])}],r=s("c93e"),l=(s("7f7f"),s("b5ae")),n=s("2f62"),d={name:"Profile",data:function(){return{name:"",email:"",password:"",repeatPassword:"",isLoading:!1}},validations:{name:{required:l["required"],minLength:Object(l["minLength"])(6)},email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},repeatPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")}},mounted:function(){this.name=this.auth.name,this.email=this.auth.email},computed:Object(r["a"])({},n["a"].mapState(["auth"])),methods:Object(r["a"])({},n["a"].mapActions(["updateCurrentUser"]),{handleUpdateUser:function(){var e=this;if(this.$v.$touch(),this.$v.$invalid)return!1;this.isLoading=!0,this.updateCurrentUser({name:this.name,email:this.email,password:this.password}).then(function(){e.password="",e.repeatPassword="",e.$v.$reset()}).catch(function(){return!1}).finally(function(){e.isLoading=!1})}})},o=d,m=s("2877"),u=Object(m["a"])(o,t,i,!1,null,null,null);u.options.__file="Profile.vue";a["default"]=u.exports}}]);
//# sourceMappingURL=c66d.2905c7a7.js.map