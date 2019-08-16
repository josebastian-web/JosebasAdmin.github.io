(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["24206044"],{4452:function(t,e,r){!function(e,a){t.exports=a(r("ea7f"))}("undefined"!=typeof self&&self,function(t){return function(t){function e(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,a){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",Object(o.a)(e.highcharts||i.a))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,r.d(e,"Chart",function(){return s});var o=r(2),n=r(0),i=r.n(n),s=Object(o.a)(i.a)},function(t,e,r){"use strict";function a(t){return i(t)||n(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var s=r(3),l=function(t){return{template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object(s.a)(t,this.deepCopyOnUpdate)].concat(a(this.updateArgs)))},deep:!0}},mounted:function(){var e=this.highcharts||t;this.options&&e[this.constructorType]?this.chart=e[this.constructorType](this.$refs.chart,Object(s.a)(this.options,!0),this.callback?this.callback:null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')},beforeDestroy:function(){this.chart&&this.chart.destroy()}}};e.a=l},function(t,e,r){"use strict";function a(t,e,r){function o(o,i){!n.a.isObject(o,!r)||n.a.isClass(o)||n.a.isDOMElement(o)?t[i]=e[i]:t[i]=a(t[i]||n.a.isArray(o)?[]:{},o,r)}return n.a.isArray(e)?e.forEach(o):n.a.objectEach(e,o),t}r.d(e,"a",function(){return i});var o=r(0),n=r.n(o),i=function(t,e){return a({},t,e)}}])})},a438:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"q-mb-md",class:t.breadcrumbsColor},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"assignment_ind"}}),r("q-toolbar-title",[t._v("Graphics")])],1),r("q-toolbar",[r("q-breadcrumbs",{staticStyle:{"font-size":"16px"}},[r("q-breadcrumbs-el",{attrs:{label:"Graphics",icon:"eva-bar-chart-outline"}}),r("q-breadcrumbs-el",{attrs:{label:"Pie"}})],1)],1)],1),r("div",{staticClass:"row q-pa-md q-col-gutter-md"},[r("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"},[r("q-card",{staticClass:"shadow-1"},[r("q-card-section",[r("highcharts",{staticStyle:{width:"95%","min-height":"100%"},attrs:{options:this.optionsPieChart}})],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"},[r("q-card",{staticClass:"shadow-1"},[r("q-card-section",[r("highcharts",{staticStyle:{width:"95%","min-height":"100%"},attrs:{options:this.optionPieLegendChart}})],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"},[r("q-card",{staticClass:"shadow-1"},[r("q-card-section",[r("highcharts",{staticStyle:{width:"95%","min-height":"100%"},attrs:{options:this.optionPieSemiCircleChart}})],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"},[r("q-card",{staticClass:"shadow-1"},[r("q-card-section",[r("highcharts",{staticStyle:{width:"95%","min-height":"100%"},attrs:{options:this.optionPieDrilldownChart}})],1)],1)],1)])])},o=[],n=r("4452"),i={components:{highcharts:n["Chart"]},data:function(){return{optionsPieChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Browser market shares in January, 2018"},subtitle:{text:"Source: something.com"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Sogou Explorer",y:1.64},{name:"Opera",y:1.6},{name:"QQ",y:1.2},{name:"Other",y:2.61}]}]},optionPieLegendChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Browser market shares in January, 2018"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:7.05}]}]},optionPieSemiCircleChart:{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:"Browser<br>shares<br>2017",align:"center",verticalAlign:"middle",y:40},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","75%"],size:"110%"}},series:[{type:"pie",name:"Browser share",innerSize:"50%",data:[["Chrome",58.9],["Firefox",13.29],["Internet Explorer",13],["Edge",3.78],["Safari",3.42],{name:"Other",y:7.61,dataLabels:{enabled:!1}}]}]},optionPieDrilldownChart:{chart:{type:"pie"},title:{text:"Browser market shares. January, 2018"},subtitle:{text:"Click the slices to view versions."},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.name}: {point.y:.1f}%"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'},series:[{name:"Browsers",colorByPoint:!0,data:[{name:"Chrome",y:62.74,drilldown:"Chrome"},{name:"Firefox",y:10.57,drilldown:"Firefox"},{name:"Internet Explorer",y:7.23,drilldown:"Internet Explorer"},{name:"Safari",y:5.58,drilldown:"Safari"},{name:"Edge",y:4.02,drilldown:"Edge"},{name:"Opera",y:1.92,drilldown:"Opera"},{name:"Other",y:7.62,drilldown:null}]}],drilldown:{series:[{name:"Chrome",id:"Chrome",data:[["v65.0",.1],["v64.0",1.3],["v63.0",53.02],["v62.0",1.4],["v61.0",.88],["v60.0",.56],["v59.0",.45],["v58.0",.49],["v57.0",.32],["v56.0",.29],["v55.0",.79],["v54.0",.18],["v51.0",.13],["v49.0",2.16],["v48.0",.13],["v47.0",.11],["v43.0",.17],["v29.0",.26]]},{name:"Firefox",id:"Firefox",data:[["v58.0",1.02],["v57.0",7.36],["v56.0",.35],["v55.0",.11],["v54.0",.1],["v52.0",.95],["v51.0",.15],["v50.0",.1],["v48.0",.31],["v47.0",.12]]},{name:"Internet Explorer",id:"Internet Explorer",data:[["v11.0",6.2],["v10.0",.29],["v9.0",.27],["v8.0",.47]]},{name:"Safari",id:"Safari",data:[["v11.0",3.39],["v10.1",.96],["v10.0",.36],["v9.1",.54],["v9.0",.13],["v5.1",.2]]},{name:"Edge",id:"Edge",data:[["v16",2.6],["v15",.92],["v14",.4],["v13",.1]]},{name:"Opera",id:"Opera",data:[["v50.0",.96],["v49.0",.82],["v12.1",.14]]}]}}}},computed:{breadcrumbsColor:{get:function(){return this.$store.state.theme.breadcrumbs_mini},set:function(t){this.$store.dispatch("theme/setColor",t)}}}},s=i,l=r("2877"),c=Object(l["a"])(s,a,o,!1,null,null,null);e["default"]=c.exports}}]);