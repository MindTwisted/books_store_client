(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["db70"],{db70:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"viewBook"},[i("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[i("ul",[i("li",[i("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1),i("li",[i("router-link",{attrs:{to:"/dashboard/books"}},[t._v("Books")])],1),i("li",{staticClass:"is-active"},[i("a",{attrs:{href:"#","aria-current":"page"}},[t._v("\n                    "+t._s(t.book.title)+"\n                ")])])])]),i("div",{staticClass:"columns"},[t.book.image_url?i("div",{staticClass:"column is-two-fifths"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-9by16 has-text-centered"},[i("img",{attrs:{src:t.rootUrl+"/"+t.book.image_url+"?id="+t.uniqueID,alt:t.book.title}})])])]):t._e(),i("div",{staticClass:"column is-three-fifths"},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v(t._s(t.book.title))]),t.book.authors.length>0?i("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.book.authors.map(function(t){return t.name}).join(", ")))]):t._e()])]),i("div",{staticClass:"tags"},t._l(t.book.genres,function(s){return i("span",{key:s.id,staticClass:"tag is-primary"},[t._v(t._s(s.name))])})),i("div",{staticClass:"content"},[t._v("\n                    "+t._s(t.book.description)+"\n                    "),i("p",{staticClass:"subtitle index__price"},[t.book.discount>0?[i("del",{staticClass:"has-text-grey-light is-size-6"},[t._v(t._s(t.book.price))]),i("strong",{staticClass:"is-size-4 has-text-weight-light"},[t._v("\n                                "+t._s(t._f("price")(t.priceWithDiscount(t.book.price,t.book.discount)))+"\n                            ")])]:i("strong",{staticClass:"is-size-4 has-text-weight-light"},[t._v("\n                            "+t._s(t._f("price")(t.book.price))+"\n                        ")])],2)])])])])])},e=[],o=i("c93e"),r=i("2f62"),n=i("4f8d"),c={name:"ViewBook",data:function(){return{rootUrl:n["a"]}},computed:Object(o["a"])({},r["a"].mapState(["uniqueID"]),r["a"].mapGetters(["getBookById"]),{book:function(){return this.getBookById(this.$route.params.id)}}),methods:{priceWithDiscount:function(t,s){return(t-t*(s/100)).toFixed(2)}}},l=c,u=i("2877"),d=Object(u["a"])(l,a,e,!1,null,null,null);d.options.__file="View.vue";s["default"]=d.exports}}]);
//# sourceMappingURL=db70.e487cfac.js.map