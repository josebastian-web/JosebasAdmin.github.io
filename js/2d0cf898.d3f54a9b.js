(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0cf898"],{"63af":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{},[t("div",{staticClass:"q-mb-md",class:e.breadcrumbsColor},[t("q-toolbar",[t("q-toolbar-title",[e._v("Basic Table")])],1),t("q-toolbar",[t("q-breadcrumbs",{staticStyle:{"font-size":"16px"}},[t("q-breadcrumbs-el",{attrs:{label:"Tables",icon:"eva-grid-outline"}}),t("q-breadcrumbs-el",{attrs:{label:"Basic Table"}})],1)],1)],1),t("div",{staticClass:"row q-pa-md q-col-gutter-md"},[t("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[t("q-card",{staticClass:"shadow-1"},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Basic Table")])]),t("q-card-section",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[t("q-table",{staticClass:"no-shadow",attrs:{title:"Treats",data:e.filterTable,columns:e.columns,selection:"multiple",selected:e.selected,"row-key":"name",bordered:""},on:{"update:selected":function(a){e.selected=a}},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filtro,callback:function(a){e.filtro=a},expression:"filtro"}})]},proxy:!0}])})],1)])])],1)],1)])])},i=[],o=(t("6762"),t("2fdb"),t("7f7f"),{data:function(){return{filtro:"",selected:[],columns:[{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:function(e){return e.name},format:function(e){return"".concat(e)},sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0,sort:function(e,a){return parseInt(e,10)-parseInt(a,10)}},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0,sort:function(e,a){return parseInt(e,10)-parseInt(a,10)}}],data:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}},computed:{breadcrumbsColor:{get:function(){return this.$store.state.theme.breadcrumbs_mini},set:function(e){this.$store.dispatch("theme/setColor",e)}},filterTable:function(){var e=this;return""===this.filtro?this.data:this.data.filter(function(a){var t=a.name;a.calories;return t.includes(e.filtro)})}}}),l=o,s=t("2877"),c=Object(s["a"])(l,r,i,!1,null,null,null);a["default"]=c.exports}}]);