(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ee0cd24e"],{"7e29":function(t,e,a){},"9df2":function(t,e,a){"use strict";var n=a("7e29"),i=a.n(n);i.a},b817:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex justify-center"},[a("q-list",{attrs:{highlight:""}},[a("q-list-header",[t._v("Камеры:")]),t.camera?a("q-item",[a("q-item-main",{attrs:{label:t.camera.id+". "+t.camera.title}})],1):t._e(),a("q-list-header",[t._v("Камеры")]),t._l(t.cameras,function(e){return a("q-item",{key:e.id},[a("q-item-main",{staticClass:"full-width column content-start"},[a("q-item-tile",{staticClass:"full-width column content-start"},[a("q-btn",{staticClass:"full-width column content-start",attrs:{flat:""},on:{click:function(a){t.chooseCamera(e.id)}}},[t._v(t._s(e.id)+". "+t._s(e.title)+" "+t._s(e.price))])],1)],1)],1)})],2)],1)},i=[];n._withStripped=!0;var s=a("3156"),c=a.n(s),r=a("2f62"),l=(a("e760"),a("b9f5"),Object(r["a"])("main")),o=l.mapState,m=(l.mapMutations,l.mapActions),u={name:"PageStudio",computed:c()({},o({camera:function(t){return t.camera},money:function(t){return t.money}}),{cameras:function(){return this.$store.getters["main/collect"]("cameras")}}),methods:c()({},m(["chooseCamera"]))},f=u,d=(a("9df2"),a("2877")),h=Object(d["a"])(f,n,i,!1,null,null,null);h.options.__file="Camera.vue";e["default"]=h.exports}}]);