(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d306722"],{"0bfd":function(t,e,a){},"9fb6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subPage"},[a("div",{staticClass:"pageTitle"},[t._v("出库统计")]),a("div",[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}}),a("el-button",{staticClass:"btn_search",attrs:{type:"success",round:""},on:{click:t.search}},[t._v("搜索")])],1),a("div",{staticClass:"contents"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"xzcode",label:"箱号",width:"100"}}),a("el-table-column",{attrs:{prop:"dep",label:"科室",width:"180"}}),a("el-table-column",{attrs:{prop:"rksj",label:"入库时间",width:"180"}}),a("el-table-column",{attrs:{prop:"rkperson",label:"入库人",width:"100"}}),a("el-table-column",{attrs:{prop:"cksj",label:"出库时间",width:"180"}}),a("el-table-column",{attrs:{prop:"ckperson",label:"出库人",width:"100"}}),a("el-table-column",{attrs:{prop:"ckdjr",label:"出库接收人",width:"180"}}),a("el-table-column",{attrs:{prop:"ckdjcl",label:"出库接收车辆"}})],1)],1)])},l=[],n=a("69d9"),r={data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},dates:"",tableData:[]}},methods:{search:function(){var t=this,e={type:"cktj",startdate:t.dates[0],enddate:t.dates[1]},a=n["commonConfig"].baseURL+"of_yf_cx";n["Downloader"].loadXMLAsync(a+"?as_json="+JSON.stringify(e),(function(e){var a=e.response,s=n["_Widget"].xml.jsonToxml(a),l=n["_Widget"].xml.xmlToJson(s),r=JSON.parse(l.string["#text"]);1==r.result?t.tableData=r.data:t.$message({type:"error",message:"未查询到相关数据!"})}),(function(){t.$message({type:"error",message:"网络链接失败!"})}))}},created:function(){}},o=r,i=(a("b888"),a("2877")),c=Object(i["a"])(o,s,l,!1,null,"ed09daa4",null);e["default"]=c.exports},b888:function(t,e,a){"use strict";var s=a("0bfd"),l=a.n(s);l.a}}]);
//# sourceMappingURL=chunk-2d306722.a195f4fa.js.map