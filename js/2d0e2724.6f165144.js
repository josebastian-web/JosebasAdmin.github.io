(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e2724"],{"7f76":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{},[e("div",{staticClass:"q-mb-md",class:a.breadcrumbsColor},[e("q-toolbar",[e("q-toolbar-title",[a._v("Icon")])],1),e("q-toolbar",[e("q-breadcrumbs",{staticStyle:{"font-size":"16px"}},[e("q-breadcrumbs-el",{attrs:{label:"Chat",icon:"eva-message-square-outline"}}),e("q-breadcrumbs-el",{attrs:{label:"Area"}})],1)],1)],1),e("div",{staticClass:"row q-pa-md q-col-gutter-sm"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"},[e("q-card",{staticClass:"no-border-radius no-shadow"},[e("q-card-section",{staticClass:"no-padding"},[e("q-toolbar",{staticClass:"bg-primary text-white"},[e("q-toolbar-title",[a._v("Contacts")])],1),e("q-scroll-area",{staticStyle:{height:"560px"}},[e("q-list",{attrs:{bordered:""}},[a._l(a.contacts,function(t){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(e){return a.changeChat(t.nameChat)}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{color:"primary","text-color":"white"}},[a._v("\n                                        "+a._s(t.letter)+"\n                                    ")])],1),e("q-item-section",[e("q-item-label",[a._v(a._s(t.name))]),e("q-item-label",{attrs:{caption:"",lines:"1"}},[a._v(a._s(t.email))])],1),e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"chat_bubble",color:"amber-7"}})],1)],1)}),e("q-separator"),e("q-item-label",{attrs:{header:""}},[a._v("Offline")]),a._l(a.offline,function(t){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-mb-sm",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/img/"+t.avatar}})])],1),e("q-item-section",[e("q-item-label",[a._v(a._s(t.name))]),e("q-item-label",{attrs:{caption:"",lines:"1"}},[a._v(a._s(t.email))])],1),e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"chat_bubble",color:"grey"}})],1)],1)})],2)],1)],1)],1)],1),e("div",{staticClass:"col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"},[e("q-card",{staticClass:"no-border-radius no-shadow",attrs:{bordered:""}},[e("q-card-section",{staticClass:"q-pa-none q-py-xs"},[e("q-item",[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{color:"primary","text-color":"white"}},[a._v("\n                                R\n                            ")])],1),e("q-item-section",[e("q-item-label",[a._v("Nobre Completo")])],1)],1)],1),e("q-separator"),e("q-card-section",[e("q-scroll-area",{staticClass:"q-pa-md",staticStyle:{height:"442px","background-color":"#e0e0e0"}},a._l(a.showChat[a.chatChoise],function(a,t){return e("q-chat-message",{key:t,attrs:{name:a.name,avatar:a.avatar,text:a.text,stamp:a.stamp,size:a.sizeChat,sent:a.sent,"text-color":a.textColor,"bg-color":a.bgColor}})}),1)],1),e("q-separator"),e("q-card-actions",[e("q-input",{staticClass:"full-width",attrs:{outlined:"",filled:"",label:"Message"},scopedSlots:a._u([{key:"hint",fn:function(){return[a._v("\n                            Field hint\n                        ")]},proxy:!0},{key:"after",fn:function(){return[e("q-btn",{attrs:{stack:"",flat:"",color:"primary","icon-right":"send"}})]},proxy:!0}]),model:{value:a.message,callback:function(t){a.message=t},expression:"message"}})],1)],1)],1)])])},r=[],o={data:function(){return{message:"",chatChoise:"chatSebastian",showChat:{chatSebastian:[{name:"Me",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",text:["Hi, how are you?"],stamp:"4 minutes a go",sizeChat:"4",textColor:"black",bgColor:"amber-7",sent:!0},{name:"Sebastian",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"white",bgColor:"primary",sent:!1},{name:"Sebastian",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"white",bgColor:"primary",sent:!1},{name:"Me",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"black",bgColor:"amber-7",sent:!0},{name:"Me",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"black",bgColor:"amber-7",sent:!0},{name:"Sebastian",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"white",bgColor:"primary",sent:!1}],chatRuddy:[{name:"Me",avatar:"https://cdn.quasar.dev/img/avatar5.jpg",text:["Hi, how are you?"],stamp:"4 minutes a go",sizeChat:"4",textColor:"black",bgColor:"amber-7",sent:!0},{name:"Ruddy Alessandrini",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",text:["wtf is wrong with you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"white",bgColor:"primary",sent:!1},{name:"Ruddy Alessandrini",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"white",bgColor:"primary",sent:!1},{name:"Ruddy Alessandrini",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"white",bgColor:"primary",sent:!1},{name:"Me",avatar:"https://cdn.quasar.dev/img/avatar5.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"black",bgColor:"amber-7",sent:!0},{name:"Me",avatar:"https://cdn.quasar.dev/img/avatar5.jpg",text:["Good, thx and you?"],stamp:"1 minutes a go",sizeChat:"6",textColor:"black",bgColor:"amber-7",sent:!0}]},offline:[{id:5,name:"Brunhilde Panswick",email:"bpanswick4@csmonitor.com",avatar:"avatar2.jpg"},{id:6,name:"Winfield Stapforth",email:"wstapforth5@pcworld.com",avatar:"avatar6.jpg"},{id:7,name:"Winfield Stapforth",email:"wstapforth5@pcworld.com",avatar:"avatar6.jpg"},{id:8,name:"Winfield Stapforth",email:"wstapforth5@pcworld.com",avatar:"avatar6.jpg"}],contacts:[{id:1,name:"Sebastian",email:"rjedrzej0@discuz.net",letter:"S",nameChat:"chatSebastian"},{id:2,name:"Ruddy Alessandrini",email:"ruddy@marketwatch.com",letter:"M",nameChat:"chatRuddy"}]}},computed:{breadcrumbsColor:{get:function(){return this.$store.state.theme.breadcrumbs_mini},set:function(a){this.$store.dispatch("theme/setColor",a)}}},methods:{changeChat:function(a){this.chatChoise=a}}},i=o,n=e("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);t["default"]=l.exports}}]);