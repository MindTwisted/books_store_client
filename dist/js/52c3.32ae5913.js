(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["52c3"],{"52c3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit"},[a("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")])],1),a("li",[a("router-link",{attrs:{to:"/dashboard/genres"}},[e._v("Genres")])],1),a("li",{staticClass:"is-active"},[a("a",{attrs:{href:"#","aria-current":"page"}},[e._v("\n                    Edit genre #"+e._s(e.genre.id)+"\n                ")])])])]),a("div",{staticClass:"add__form"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],class:{input:!0,"is-danger":e.$v.name.$error},attrs:{type:"text",placeholder:"Name"},domProps:{value:e.$v.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.name,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),a("ul",{staticClass:"help is-danger"},[e.$v.name.$dirty&&!e.$v.name.required?a("li",[e._v("\n                    Field is required.\n                ")]):e._e()])]),a("div",{staticClass:"field"},[e.isLoading?a("button",{staticClass:"button is-success is-loading",attrs:{disabled:""}},[e._v("\n                Update\n            ")]):a("button",{staticClass:"button is-success",on:{click:e.handleUpdateGenre}},[e._v("\n                Update\n            ")])])])])},s=[],n=a("c93e"),r=(a("7f7f"),a("2f62")),d=a("b5ae"),l={name:"Add",data:function(){return{name:"",isLoading:!1}},validations:{name:{required:d["required"]}},mounted:function(){this.name=this.genre.name},computed:Object(n["a"])({},r["a"].mapGetters(["getGenreById"]),{genre:function(){return this.getGenreById(this.$route.params.id)}}),methods:Object(n["a"])({},r["a"].mapActions(["updateGenre"]),{handleUpdateGenre:function(){var e=this;return this.$v.$touch(),!this.$v.$invalid&&(this.name==this.genre.name?this.$router.push("/dashboard/genres"):(this.isLoading=!0,void this.updateGenre({id:this.genre.id,name:this.name}).finally(function(){e.isLoading=!1})))}})},o=l,u=a("2877"),c=Object(u["a"])(o,i,s,!1,null,null,null);c.options.__file="Edit.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=52c3.32ae5913.js.map