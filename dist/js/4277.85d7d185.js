(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4277"],{4277:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"add"},[e("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1),e("li",[e("router-link",{attrs:{to:"/dashboard/authors"}},[t._v("Authors")])],1),t._m(0)])]),e("div",{staticClass:"add__form"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Name")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],class:{input:!0,"is-danger":t.$v.name.$error},attrs:{type:"text",placeholder:"Name"},domProps:{value:t.$v.name.$model},on:{input:function(a){a.target.composing||t.$set(t.$v.name,"$model",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})]),e("ul",{staticClass:"help is-danger"},[t.$v.name.$dirty&&!t.$v.name.required?e("li",[t._v("\n                    Field is required.\n                ")]):t._e()])]),e("div",{staticClass:"field"},[t.isLoading?e("button",{staticClass:"button is-success is-loading",attrs:{disabled:""}},[t._v("\n                Add\n            ")]):e("button",{staticClass:"button is-success",on:{click:t.handleAddAuthor}},[t._v("\n                Add\n            ")])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[t._v("\n                    Add author\n                ")])])}],n=(e("7f7f"),e("c93e")),r=e("2f62"),d=e("b5ae"),l={name:"Add",data:function(){return{name:"",isLoading:!1}},validations:{name:{required:d["required"]}},methods:Object(n["a"])({},r["a"].mapActions(["addAuthor"]),{handleAddAuthor:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)return!1;this.isLoading=!0,this.addAuthor(this.name).finally(function(){t.isLoading=!1})}})},o=l,u=e("2877"),c=Object(u["a"])(o,s,i,!1,null,null,null);c.options.__file="Add.vue";a["default"]=c.exports}}]);
//# sourceMappingURL=4277.85d7d185.js.map