(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["75e2a5dd"],{"13a9":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex column content-center"},[e("q-btn",{staticClass:"full-width",attrs:{flat:""},on:{click:function(n){t.giveMoney(-t.$store.state.main.money)}}},[t._v("Set 0")]),e("br"),e("q-btn",{staticClass:"full-width",attrs:{flat:""},on:{click:function(n){t.giveMoney(50)}}},[t._v("Get 50")]),e("br"),e("q-btn",{staticClass:"full-width",attrs:{flat:""},on:{click:function(n){t.giveMoney(100)}}},[t._v("Get 100")]),e("br"),e("q-btn",{staticClass:"full-width",attrs:{flat:""},on:{click:function(n){t.giveMoney(1e3)}}},[t._v("Get 1000")]),e("br"),e("q-btn",{staticClass:"full-width",attrs:{flat:""},on:{click:function(n){t.giveMoney(1e4)}}},[t._v("Get 10000")]),e("br")],1)},c=[];i._withStripped=!0;var a={name:"PageGiveMoney",methods:{giveMoney:function(t){this.$store.commit("main/giveMoney",t)}},mounted:function(){console.log(this.$store)}},o=a,s=(e("ac8c"),e("2877")),l=Object(s["a"])(o,i,c,!1,null,null,null);l.options.__file="GiveMoney.vue";n["default"]=l.exports},ac8c:function(t,n,e){"use strict";var i=e("c05a"),c=e.n(i);c.a},c05a:function(t,n,e){}}]);