(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["024708e8"],{"60b4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex content-start"},[n("q-tabs",{staticClass:"full-width",attrs:{animated:"",swipeable:"",inverted:"",color:"secondary",align:"justify"}},[n("q-tab",{key:"1",attrs:{slot:"title",name:"MainChannel"},slot:"title"},[t._v("Основной канал")]),n("q-tab",{key:"2",attrs:{slot:"title",name:"SecondChannel",disabled:t.channelSecond},slot:"title"},[t._v("Дополнительный канал")]),n("q-tab-pane",{key:"1",staticClass:"full-width",attrs:{name:"MainChannel"}},[n("q-list",{attrs:{highlight:""}},[n("q-list-header",[t._v("Тема ролика:")]),t.theme?n("q-item",[n("q-item-main",{attrs:{label:t.theme.id+". "+t.theme.title}})],1):t._e(),n("q-list-header",[t._v("Темы:")]),t._l(t.firstThemes(),function(e){return n("q-item",{key:e.id},[n("q-item-main",{staticClass:"full-width column content-start"},[n("q-item-tile",{staticClass:"full-width column content-start"},[n("q-btn",{staticClass:"full-width column content-start",attrs:{flat:""},on:{click:function(n){t.chooseTheme(e.id)}}},[t._v(t._s(e.id)+". "+t._s(e.title)+" "+t._s(e.price))])],1)],1)],1)})],2)],1),n("q-tab-pane",{key:"2",staticClass:"full-width",attrs:{name:"SecondChannel"}},[n("q-list",{attrs:{highlight:""}},[n("q-list-header",[t._v("Вторая Тема ролика:")]),t.themeSecond?n("q-item",[n("q-item-main",{attrs:{label:t.themeSecond.id+". "+t.themeSecond.title}})],1):t._e(),t.themeSecond?n("q-list-header",[t._v("Темы:")]):t._e(),t._l(t.secondThemes(),function(e){return n("q-item",{key:e.id},[n("q-item-main",{staticClass:"full-width column content-start"},[n("q-item-tile",{staticClass:"full-width column content-start"},[n("q-btn",{staticClass:"full-width column content-start",attrs:{flat:""},on:{click:function(n){t.chooseSecondTheme(e.id)}}},[t._v(t._s(e.id)+". "+t._s(e.title)+" "+t._s(e.price))])],1)],1)],1)})],2)],1)],1)],1)},s=[];i._withStripped=!0;var a=n("3156"),l=n.n(a),c=n("2f62"),o=(n("e760"),n("b9f5"),Object(c["a"])("main")),r=o.mapState,h=(o.mapMutations,o.mapActions),m={name:"PageTheme",computed:l()({},r({theme:function(t){return t.theme},themeSecond:function(t){return t.themeSecond},money:function(t){return t.money},channelSecond:function(t){return t.channelSecond}}),{themes:function(){return this.$store.getters["main/collect"]("themes")},currentCourse:function(){}}),methods:l()({},h(["chooseTheme","chooseSecondTheme"]),{firstThemes:function(){var t=this.$store.state.main.ads,e={};for(var n in t)if(!t[n].second){var i=t[n].themeId;e[i]=e[i]||this.themes[i]}return e},secondThemes:function(){var t=this.$store.state.main.ads,e={};for(var n in t)if(t[n].second){var i=t[n].themeId;e[i]=e[i]||this.themes[i]}return e}})},u=m,d=(n("9c21"),n("2877")),f=Object(d["a"])(u,i,s,!1,null,null,null);f.options.__file="Theme.vue";e["default"]=f.exports},"9c21":function(t,e,n){"use strict";var i=n("e8f7"),s=n.n(i);s.a},e8f7:function(t,e,n){}}]);