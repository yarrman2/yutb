(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3b0971f6"],{"2e81":function(t,n,e){"use strict";var a=e("fec2"),i=e.n(a);i.a},"2ff9":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex content-start"},[e("q-list",{staticClass:"full-width",attrs:{highlight:""}},[e("q-list-header",[t._v("Основной канал: ")]),t.channel?e("q-item",[e("q-item-main",{attrs:{label:t.channel.title}})],1):t._e(),e("q-list-header",[t._v("Дополнительный канал: ")]),t.channelSecond?e("q-item",[e("q-item-main",{attrs:{label:t.channelSecond.title}})],1):t._e(),e("q-item-separator"),e("q-list-header",[t._v("Каналы ")]),t._l(t.channels,function(n){return n.second?t._e():e("q-item",{key:n.id},[e("q-item-main",[e("q-item-tile",[t._v("\n            "+t._s(n.state)+"\n          ")]),e("q-item-tile",{staticClass:"full-width"},[e("q-btn",{staticClass:"full-width column content-start",attrs:{flat:""},on:{click:function(e){t.startChannel(n.id)}}},[t._v(" "+t._s(t.channelItem(n))+" ")])],1)],1)],1)}),e("q-item-separator"),e("q-list-header",[t._v("Дополнительные каналы ")]),t._l(t.channels,function(n){return n.second?e("q-item",{key:n.id},[e("q-item-main",[e("q-item-tile",[t._v("\n            "+t._s(n.state)+"\n          ")]),e("q-item-tile",{staticClass:"full-width"},[e("q-btn",{staticClass:"full-width column content-start",attrs:{flat:""},on:{click:function(e){t.startSecondChannel(n.id)}}},[t._v(" "+t._s(t.channelItem(n))+" ")])],1)],1)],1):t._e()})],2)],1)},i=[];a._withStripped=!0;var l=e("3156"),c=e.n(l),s=e("2f62"),o=(e("b9f5"),e("3164"),Object(s["a"])("main")),r=o.mapState,u=(o.mapMutations,o.mapActions),h={name:"PageProfile",computed:c()({},r({channelSecond:function(t){return t.channelSecond},lang:function(t){return t.lang}}),{channel:function(){return this.$store.state.main.channel},channels:function(){var t=this.$store.getters["main/collect"]("channels");return console.log(t),t}}),mounted:function(){this.channels},methods:c()({},u(["startChannel","startSecondChannel"]),{channelItem:function(t){return"".concat(t.id,". ").concat(t.title)},click:function(){console.log(1)}})},f=h,m=(e("2e81"),e("2877")),d=Object(m["a"])(f,a,i,!1,null,null,null);d.options.__file="Profile.vue";n["default"]=d.exports},fec2:function(t,n,e){}}]);