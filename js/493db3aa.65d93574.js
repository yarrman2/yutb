(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["493db3aa"],{"37c2":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("q-page",{staticClass:"flex content-start"},[t("q-card",[t("q-card-title",[n._v("\n        Рекламное агенство\n      ")]),t("q-card-main",[n.agency?t("span",[n._v(n._s(n.agency.title))]):n._e()]),t("q-card-title",[n._v("\n        Кампания\n      ")]),t("q-card-main",[n.ad?t("div",[n._v("\n          "+n._s(n.ad.title)+" "),t("br"),n._v("\n          Стаж (дней): "+n._s(n.ad.exp)+"\n          Штраф: "+n._s(n.ad.penalty)+"\n        ")]):n._e()])],1),t("q-tabs",{attrs:{animated:"",swipeable:"",inverted:"",color:"secondary",align:"justify"}},[n._l(n.channels,function(e){return t("q-tab",{key:e.id,attrs:{slot:"title",name:e.key,default:n.channel&&e.id===n.channel.id,disabled:!n.channel||e.id!==n.channel.id},slot:"title"},[n._v(n._s(e.title.substr(0,8)))])}),n._l(n.channels,function(e){return t("q-tab-pane",{key:e.id,attrs:{name:e.key}},[t("p",[n._v("\n          "+n._s(e.title)+"\n        ")]),t("ul",n._l(n.channelFilter(e.id),function(e){return t("li",{key:e.id,on:{click:function(t){n.chooseAd(e.id)}}},[n._v("\n            "+n._s(e.title)+" - "+n._s(e.revenue)+"\n            "),t("ul",[t("li",[n._v("Тема: "),n.themes[e.themeId]?t("span",[n._v(" "+n._s(n.themes[e.themeId].title)+" ")]):n._e(),n.theme&&n.theme.id>=e.themeId?t("span",[n._v("V")]):n._e()]),t("li",[n._v("Студия: "),n.studios[e.studioId]?t("span",[n._v(" "+n._s(n.studios[e.studioId].title)+" ")]):n._e(),n.studio&&n.studio.id>=e.studioId||!n.studio&&1==e.studioId?t("span",[n._v("V")]):n._e()]),t("li",[n._v("Реквизит: "),n.props[e.propId]?t("span",[n._v(" "+n._s(n.props[e.propId].title)+" ")]):n._e(),n.prop&&n.prop.id>=e.propId||!n.prop&&1==e.propId?t("span",[n._v("V")]):n._e()]),t("li",[n._v("Камера: "),n.cameras[e.cameraId]?t("span",[n._v(" "+n._s(n.cameras[e.cameraId].title)+" ")]):n._e(),n.camera&&n.camera.id>=e.cameraId||!n.camera&&1==e.cameraId?t("span",[n._v("V")]):n._e()]),t("li",[n._v("Курсы: \n                  "),n.courses[e.courseId]?t("span",[n._v(" "+n._s(n.courses[e.courseId].title)+" ")]):n._e(),(n.course&&n.course.id>=e.courseId||!n.course&&e.courseId,t("span",[n._v("V")]))])])])}))])})],2)],1)},r=[];a._withStripped=!0;t("ac6a"),t("cadf"),t("8615");var c=t("3156"),s=t.n(c),i=t("2f62"),u=(t("b9f5"),t("3164"),Object(i["a"])("main")),o=u.mapState,d=(u.mapMutations,u.mapActions),l={name:"PageAd",data:function(){return{}},methods:s()({},d(["chooseAd"]),{channelFilter:function(n){return Object.values(this.ads).filter(function(e){return e.channelId==n})}}),computed:s()({},o({channel:function(n){return n.channel},channelSecond:function(n){return n.channelSecond},channels:function(n){return n.channels},agency:function(n){return n.agency},ad:function(n){return n.ad},ads:function(n){return n.ads},theme:function(n){return n.theme},themes:function(n){return n.themes},studio:function(n){return n.studio},studios:function(n){return n.studios},prop:function(n){return n.prop},props:function(n){return n.props},camera:function(n){return n.camera},cameras:function(n){return n.cameras},course:function(n){return n.course},courses:function(n){return n.courses}})),mounted:function(){}},p=l,_=(t("5c07"),t("2877")),f=Object(_["a"])(p,a,r,!1,null,null,null);f.options.__file="Ad.vue";e["default"]=f.exports},"504c":function(n,e,t){var a=t("0d58"),r=t("6821"),c=t("52a7").f;n.exports=function(n){return function(e){var t,s=r(e),i=a(s),u=i.length,o=0,d=[];while(u>o)c.call(s,t=i[o++])&&d.push(n?[t,s[t]]:s[t]);return d}}},"5c07":function(n,e,t){"use strict";var a=t("bfde"),r=t.n(a);r.a},8615:function(n,e,t){var a=t("5ca1"),r=t("504c")(!1);a(a.S,"Object",{values:function(n){return r(n)}})},bfde:function(n,e,t){}}]);