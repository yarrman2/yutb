(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["047317ed"],{3107:function(t,i,n){"use strict";var e=n("a3f8"),s=n.n(e);s.a},"610b":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("q-page",{staticClass:"flex justify-center"},[n("q-list",{attrs:{highlight:""}},[n("q-list-header",[t._v("Студия: ")]),t.studio?n("q-item",[n("q-item-main",{attrs:{label:t.studio.id+". "+t.studio.title}})],1):t._e(),n("q-list-header",[t._v("Варианты студий: ")]),t._l(t.studios,function(i){return n("q-item",{key:i.id},[n("q-item-main",{staticClass:"full-width column content-start"},[n("q-item-tile",{staticClass:"full-width column content-start"},[n("q-btn",{staticClass:"full-width column content-start",attrs:{flat:""},on:{click:function(n){t.chooseStudio(i.id)}}},[t._v(" \n             "+t._s(i.id)+". "+t._s(i.title)+"  "+t._s(i.price)+" \n            ")])],1)],1)],1)})],2)],1)},s=[];e._withStripped=!0;var o=n("3156"),u=n.n(o),a=n("2f62"),l=(n("e760"),n("b9f5"),Object(a["a"])("main")),c=l.mapState,r=(l.mapMutations,l.mapActions),d={name:"PageStudio",computed:u()({},c({studio:function(t){return t.studio},studios:function(t){return t.studios},money:function(t){return t.money}})),methods:u()({},r(["chooseStudio"]))},f=d,m=(n("3107"),n("2877")),p=Object(m["a"])(f,e,s,!1,null,null,null);p.options.__file="Studio.vue";i["default"]=p.exports},a3f8:function(t,i,n){}}]);