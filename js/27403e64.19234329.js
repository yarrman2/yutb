(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["27403e64"],{3635:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-page-container",[n("q-btn",{attrs:{flat:""},on:{click:e.newName}},[e._v("Новая игра")]),n("br"),n("q-btn",{attrs:{flat:""},on:{click:function(t){e.$router.push("/ingame")}}},[e._v("Продолжить")])],1),n("q-modal",{attrs:{minimized:""},on:{hide:e.startGame},model:{value:e.opened,callback:function(t){e.opened=t},expression:"opened"}},[n("div",{staticStyle:{padding:"50px"}},[n("q-toolbar",{attrs:{color:"primary",inverted:""}},[n("q-toolbar-title",[n("q-input",{attrs:{placeholder:"Введите имя"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",label:"Close"}},[e._v("Ок")])],1)],1)])],1)},o=[];a._withStripped=!0;n("7f7f");var i={name:"PageLobby",data:function(){return{opened:!1,name:""}},mounted:function(){this.$store.commit("settings/stop")},methods:{newName:function(){this.opened=!0},startGame:function(){this.$store.commit("main/resetGame",this.name),this.$router.push("/ingame")}}},r=i,s=(n("375c"),n("2877")),c=Object(s["a"])(r,a,o,!1,null,null,null);c.options.__file="LobbyPage.vue";t["default"]=c.exports},"375c":function(e,t,n){"use strict";var a=n("cb2a"),o=n.n(a);o.a},cb2a:function(e,t,n){}}]);