(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"3TJi":function(t,e,i){"use strict";i.r(e);var s=i("XQN2"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e.default=a.a},"3zkB":function(t,e,i){"use strict";i.r(e);var s=i("5SHk"),a=i("3TJi");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("ZWKv");var l=i("KHd+"),c=Object(l.a)(a.default,s.a,s.b,!1,null,"27349700",null);e.default=c.exports},"5SHk":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"bk-printcontent"}},[e("bk-button",{staticClass:"bk-print-button",attrs:{theme:"primary",title:t.$t("m.common['打印本页']"),disabled:t.isCanPrint},on:{click:t.doPrint}},[t._v("\n    "+t._s(t.$t('m.common["打印本页"]'))+"\n  ")]),t._v(" "),e("div",{staticClass:"bk-printcontent_"},[e("div",{staticClass:"bk-print-header"},[e("h1",{staticClass:"bk-title"},[t._v("ITSM-"+t._s(t.name)+"- "+t._s(t.sn))]),t._v(" "),e("div",{staticClass:"bk-header-line"},[e("ul",[e("li",{staticStyle:{width:"40%"}},[t._v(t._s(t.$t('m.common["打印日期"]'))+"："+t._s(t.printDate))]),t._v(" "),e("li",{staticStyle:{width:"40%"}},[t._v(t._s(t.$t('m.common["打印人"]'))+"："+t._s(t.username))]),t._v(" "),e("li",{staticStyle:{width:"20%"}},[t._v(t._s(t.$t('m.common["状态"]'))+"："+t._s(t.state))])])])]),t._v(" "),e("div",{staticClass:"bk-print-content"},[e("div",{staticClass:"bk-print-message"},[e("h2",[t._v(t._s(t.$t('m.common["一、工单信息"]')))]),t._v(" "),t.jdList.length?e("ul",{staticClass:"bk-message-ul"},[e("li",[t._v(t._s(t.$t('m.common["提单时间"]'))+"："+t._s(t.createAt))]),t._v(" "),e("li",{staticStyle:{width:"20%"}},[t._v(t._s(t.$t('m.common["提单人"]'))+": "+t._s(t.operator))]),t._v(" "),e("li",{staticStyle:{width:"45%"}},[t._v(t._s(t.$t('m.common["服务目录"]'))+": "+t._s(t.cataLog))])]):t._e()]),t._v(" "),e("div",{staticClass:"bk-content-inner"},[t.ticketList.length%2!=1&&0!==t.ticketList.length?e("table",{staticClass:"bk-table-zone",staticStyle:{"table-layout":"fixed"}},t._l(t.ticketList.length/2,(function(i){return e("tr",{key:i},[e("td",[e("span",{staticClass:"bk-table-head"},[t._v("\n                "+t._s(t.ticketList[2*(i-1)].name)+" "+t._s("--"===t.ticketList[2*(i-1)].name?"":":")+"\n              ")])]),t._v(" "),e("td",[-1!==t.ticketTypeList1.indexOf(t.ticketList[2*(i-1)].type)&&t.ticketList[2*(i-1)].display_value?e("div",[e("span",[t._v(t._s(t.$t('m.common["见表格"]'))+" : < "+t._s(t.ticketList[2*(i-1)].name)+" >\n                ")])]):-1!==t.ticketTypeList2.indexOf(t.ticketList[2*(i-1)].type)&&t.ticketList[2*(i-1)].display_value?e("div",{staticClass:"bk-dict_"},t._l(t.ticketList[2*(i-1)].choice,(function(s,a){return e("div",{key:a},[-1!==t.ticketList[2*(i-1)].display_value.indexOf(s.key)?e("div",[e("span",{staticClass:"bk-pot"},[t._v("·")]),t._v(" "),e("span",{staticClass:"bk-pot-after"},[t._v(" "+t._s(s.name)+" ")])]):t._e()])})),0):-1!==t.ticketTypeList4.indexOf(t.ticketList[2*(i-1)].type)&&t.ticketList[2*(i-1)].display_value?e("div",[e("div",{staticClass:"bk-RICHTEXT",domProps:{innerHTML:t._s(t.ticketList[2*(i-1)].display_value)}})]):"TEXT"===t.ticketList[2*(i-1)].type&&t.ticketList[2*(i-1)].display_value?e("div",[t._v("\n                "+t._s(t.ticketList[2*(i-1)].display_value)+"\n              ")]):"CUSTOM-FORM"===t.ticketList[2*(i-1)].type&&t.ticketList[2*(i-1)].display_value?e("div",[t._v("\n                见：< "+t._s(t.ticketList[2*(i-1)].name)+" >\n              ")]):e("div",[t._v("\n                "+t._s(t.ticketList[2*(i-1)].display_value)+"\n              ")])]),t._v(" "),e("td",[e("span",{staticClass:"bk-table-head"},[t._v("\n                "+t._s(t.ticketList[2*(i-1)+1].name)+" "+t._s("--"===t.ticketList[2*(i-1)+1].name?"":":")+"\n              ")])]),t._v(" "),e("td",[-1!==t.ticketTypeList1.indexOf(t.ticketList[2*(i-1)+1].type)&&t.ticketList[2*(i-1)+1].display_value?e("div",[e("div",[t._v(t._s(t.$t('m.common["见表格"]'))+" : < "+t._s(t.ticketList[2*(i-1)+1].name)+"\n                  >\n                ")])]):-1!==t.ticketTypeList2.indexOf(t.ticketList[2*(i-1)+1].type)&&t.ticketList[2*(i-1)+1].display_value?e("div",{staticClass:"bk-dict_"},t._l(t.ticketList[2*(i-1)+1].choice,(function(s,a){return e("div",{key:a},[-1!==t.ticketList[2*(i-1)+1].display_value.indexOf(s.key)?e("div",[e("span",{staticClass:"bk-pot"},[t._v("·")]),t._v(" "),e("span",{staticClass:"bk-pot-after"},[t._v(t._s(s.name))])]):t._e()])})),0):-1!==t.ticketTypeList4.indexOf(t.ticketList[2*(i-1)+1].type)&&t.ticketList[2*(i-1)+1].display_value?e("div",[e("div",{staticClass:"bk-RICHTEXT",domProps:{innerHTML:t._s(t.ticketList[2*(i-1)+1].display_value)}})]):"TEXT"===t.ticketList[2*(i-1)+1].type&&t.ticketList[2*(i-1)+1].display_value?e("div",[e("div",[t._v(t._s(t.ticketList[2*(i-1)+1].display_value))])]):e("div",[t._v("\n                "+t._s(t.ticketList[2*(i-1)+1].display_value)+"\n              ")])])])})),0):t._e(),t._v(" "),t._l(t.ticketList,(function(i,s){return-1!==t.ticketTypeList1.indexOf(i.type)&&i.display_value?e("div",{key:s,staticClass:"bk-break"},[e("h4",[t._v(t._s(t.$t('m.common["表格"]'))+"："+t._s(i.name))]),t._v(" "),"TABLE"===i.type?[e("table",{staticClass:"bk-table-zone",staticStyle:{"table-layout":"fixed"}},[e("tr",t._l(i.choice,(function(i,s){return e("th",{key:s},[t._v(t._s(i.name))])})),0),t._v(" "),t._l(i.display_value,(function(s,a){return e("tr",{key:a},t._l(i.choice,(function(i,a){return e("td",{key:a},[t._v(t._s(s[i.key]))])})),0)}))],2)]:"CUSTOMTABLE"===i.type?[e("table",{staticClass:"bk-table-zone",staticStyle:{"table-layout":"fixed"}},[e("tr",t._l(i.meta.columns,(function(i,s){return e("th",{key:s},[t._v("\n                  "+t._s(i.name)+"\n                ")])})),0),t._v(" "),t._l(i.value,(function(s,a){return e("tr",{key:a},t._l(i.meta.columns,(function(i,a){return e("td",{key:a},[t._l(Object.keys(s),(function(e){return e===i.key?[t._v("\n                    "+t._s(t.getCustomTableDisplayValue(i,s)||"--")+"\n                  ")]:t._e()}))],2)})),0)}))],2)]:t._e()],2):t._e()})),t._v(" "),t._l(t.ticketList.filter(t=>"CUSTOM-FORM"===t.type),(function(i,s){return e("div",{key:s},[e("h4",[t._v(t._s(i.name))]),t._v(" "),t._l(t.getCustomFormDisplayValue(i),(function(i,s){return e("div",{key:s},["text"===i.type?e("pre",{staticStyle:{"line-height":"32px"}},[t._v(" "+t._s(i.name)+"："+t._s(i.value)+" ")]):"table"===i.type?[e("h5",{staticStyle:{margin:"10px 0"}},[t._v(t._s(i.name))]),t._v(" "),e("table",[e("tr",t._l(i.columns,(function(i,s){return e("th",{key:s},[t._v("\n                    "+t._s(i.name)+"\n                  ")])})),0),t._v(" "),t._l(i.value,(function(s,a){return e("tr",{key:a},t._l(i.columns,(function(i,a){return e("td",{key:a},[t._v("\n                    "+t._s(s[i.key])+"\n                  ")])})),0)}))],2)]:e("p",[t._v(t._s(i.name)+"："+t._s(i.value))])],2)}))],2)}))],2),t._v(" "),e("div",{staticClass:"bk-print-message"},[e("h2",[t._v(t._s(t.$t('m.common["二、工作流"]')))])]),t._v(" "),t._l(t.jdList,(function(i,s){return e("div",{key:s,staticClass:"bk-print-message"},[e("h3",[t._v(t._s(s+1)+"."+t._s(i.name))]),t._v(" "),e("ul",{staticClass:"bk-message-ul"},[i.operate_at&&"RUNNING"!==i.status?e("li",[t._v("\n            "+t._s("END"===i.type?t.$t('m.common["结束"]'):t.$t('m.common["处理时间："]'))+t._s(i.operate_at)+"\n          ")]):t._e(),t._v(" "),i.operator&&"RUNNING"!==i.status?e("li",[t._v("\n            "+t._s(t.$t('m.common["处理人："]'))+t._s(i.operator)+"\n          ")]):t._e(),t._v(" "),i.operator&&"RUNNING"!==i.status?e("li",[t._v("\n            "+t._s(t.$t('m.common["处理操作："]'))+t._s(i.action||"--")+"\n          ")]):t._e()]),t._v(" "),i.fields&&i.fields.length?[i.length%2!=1?e("table",{staticClass:"bk-table-zone",staticStyle:{"table-layout":"fixed"}},t._l(i.fields?i.fields.length/2:[],(function(s){return e("tr",{key:s},[e("td",[e("span",{staticClass:"bk-table-head"},[t._v("\n                  "+t._s(i.fields[2*(s-1)].name)+" "+t._s("--"===i.fields[2*(s-1)].name?"":":")+"\n                ")])]),t._v(" "),e("td",[-1!==t.ticketTypeList1.indexOf(i.fields[2*(s-1)].type)&&i.fields[2*(s-1)].display_value?e("div",[e("div",[t._v("\n                    "+t._s(t.$t('m.common["见表格"]'))+" : < "+t._s(i.fields[2*(s-1)].name)+" >\n                  ")])]):-1!==t.ticketTypeList2.indexOf(i.fields[2*(s-1)].type)&&i.fields[2*(s-1)].display_value?e("div",{staticClass:"bk-dict_"},t._l(i.fields[2*(s-1)].choice,(function(a,n){return e("div",{key:n},[-1!==i.fields[2*(s-1)].display_value.indexOf(a.key)?e("div",[e("span",{staticClass:"bk-pot"},[t._v("·")]),t._v(" "),e("span",{staticClass:"bk-pot-after"},[t._v(t._s(a.name))])]):t._e()])})),0):-1!==t.ticketTypeList4.indexOf(i.fields[2*(s-1)].type)&&i.fields[2*(s-1)].display_value?e("div",[e("div",{staticClass:"bk-RICHTEXT",domProps:{innerHTML:t._s(i.fields[2*(s-1)].display_value)}})]):"TEXT"===i.fields[2*(s-1)].type&&i.fields[2*(s-1)].display_value?e("div",[e("div",[t._v(t._s(i.fields[2*(s-1)].display_value))])]):e("div",[t._v("\n                  "+t._s(i.fields[2*(s-1)].display_value)+"\n                ")])]),t._v(" "),e("td",[e("span",{staticClass:"bk-table-head"},[t._v("\n                  "+t._s(i.fields[2*(s-1)+1].name)+" "+t._s("--"===i.fields[2*(s-1)+1].name?"":":")+"\n                ")])]),t._v(" "),e("td",[-1!==t.ticketTypeList1.indexOf(i.fields[2*(s-1)+1].type)&&i.fields[2*(s-1)+1].display_value?e("div",[e("div",[t._v(t._s(t.$t('m.common["见表格"]'))+" : <\n                    "+t._s(i.fields[2*(s-1)+1].name)+" >\n                  ")])]):-1!==t.ticketTypeList2.indexOf(i.fields[2*(s-1)+1].type)&&i.fields[2*(s-1)+1].display_value?e("div",{staticClass:"bk-dict_"},t._l(i.fields[2*(s-1)+1].choice,(function(a,n){return e("div",{key:n},[-1!==i.fields[2*(s-1)+1].display_value.indexOf(a.key)?e("div",[e("span",{staticClass:"bk-pot"},[t._v("·")]),t._v(" "),e("span",{staticClass:"bk-pot-after"},[t._v(t._s(a.name))])]):t._e()])})),0):-1!==t.ticketTypeList4.indexOf(i.fields[2*(s-1)+1].type)&&i.fields[2*(s-1)+1].display_value?e("div",[e("div",{staticClass:"bk-RICHTEXT",domProps:{innerHTML:t._s(i.fields[2*(s-1)+1].display_value)}})]):"TEXT"===i.fields[2*(s-1)+1].type&&i.fields[2*(s-1)+1].display_value?e("div",[e("div",[t._v(t._s(i.fields[2*(s-1)+1].display_value))])]):e("div",[t._v("\n                  "+t._s(i.fields[2*(s-1)+1].display_value)+"\n                ")])])])})),0):t._e(),t._v(" "),i.table_data&&i.table_data.length?t._l(i.table_data,(function(i,s){return e("div",{key:s},[e("h4",[t._v(t._s(t.$t('m.common["表格"]'))+"："+t._s(i.name))]),t._v(" "),"TABLE"===i.type?[e("table",{staticClass:"bk-table-zone",staticStyle:{"table-layout":"fixed"}},[e("tr",t._l(i.choice,(function(i,s){return e("th",{key:s},[t._v(t._s(i.name)+"\n                    ")])})),0),t._v(" "),t._l(i.display_value,(function(s,a){return e("tr",{key:a},t._l(i.choice,(function(i,a){return e("td",{key:a},[t._v("\n                      "+t._s(s[i.key])+"\n                    ")])})),0)}))],2)]:t._e(),t._v(" "),"CUSTOMTABLE"===i.type?[e("table",{staticClass:"bk-table-zone",staticStyle:{"table-layout":"fixed"}},[e("tr",t._l(i.meta.columns,(function(i,s){return e("th",{key:s},[t._v("\n                      "+t._s(i.name)+"\n                    ")])})),0),t._v(" "),t._l(i.value,(function(s,a){return e("tr",{key:a},t._l(i.meta.columns,(function(i,a){return e("td",{key:a},[t._l(Object.keys(s),(function(e){return e===i.key?[t._v("\n                        "+t._s(t.getCustomTableDisplayValue(i,s)||"--")+"\n                      ")]:t._e()}))],2)})),0)}))],2)]:t._e()],2)})):t._e()]:t._e(),t._v(" "),i.operator&&"RUNNING"!==i.status?[t._v("\n          "+t._s(t.$t('m.common["处理信息："]'))+t._s(i.message||"--")+"\n        ")]:t._e()],2)}))],2)])],1)},a=[];s._withStripped=!0},V7oC:function(t,e,i){"use strict";e.__esModule=!0;var s,a=i("SEkw"),n=(s=a)&&s.__esModule?s:{default:s};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,n.default)(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}()},XQN2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=i("GQeE"),n=(s=a)&&s.__esModule?s:{default:s},l=i("CeR/"),c=i("nShD");e.default={name:"commonview",data:function(){return{printDate:"",username:"",state:"",id:"",name:"",sn:"",cataLog:"",ticketList:[],jdList:[],ticketTypeList1:["TABLE","CUSTOMTABLE"],ticketTypeList2:[],ticketTypeList4:["RICHTEXT"],createAt:"",operator:"",isCanPrint:!0,isTableLoading:!1}},mounted:function(){this.id=this.$route.query.ticket_id,this.username=window.username,this.getPrintInfo()},methods:{doPrint:function(){var t=document.querySelector(".bk-printcontent_");return document.body.innerHTML=t.innerHTML,document.body.style.padding="0 15% 0 5%",window.print(),window.location.reload(),!1},getPrintInfo:function(){var t=this;this.isTableLoading=!0;var e={id:this.id};this.$route.query.token&&(e.token=this.$route.query.token),this.$store.dispatch("print/getOnePrint",e).then((function(e){"OK"===e.code&&(t.printDate=e.data.print_date,t.sn=e.data.sn,t.state=e.data.status,t.cataLog=e.data.cata_log,t.name=e.data.service,t.createAt=e.data.state[0].create_at,t.operator=e.data.state[0].operator,t.ticketList=e.data.state[0].fields||[],t.ticketList.length%2==1&&t.ticketList.push({type:"STRING",name:"--",value:"--",display_value:"--"}),t.jdList=e.data.state.slice(1,e.data.state.length),t.jdList=t.jdList.map((function(e){return t.$set(e,"table_data",[]),e.fields||(e.fields=[]),e.fields.map((function(i){-1!==t.ticketTypeList1.indexOf(i.type)&&e.table_data.push(i)})),e.fields.length%2==1&&e.fields.push({type:"STRING",name:"--",value:"--"}),e})))})).catch((function(e){(0,l.errorHandler)(e,t)})).finally((function(){t.isCanPrint=!1,t.isTableLoading=!1}))},getCustomTableDisplayValue:function(t,e){return(0,c.getCustomTableDisplayValue)(t,e)},getCustomFormDisplayValue:function(t){function e(t){return Array.isArray(t)?t.reduce((function(t,e){return e.label&&(t+=e.label+":"),t+=e.value||"--",t+="\n"}),""):t}var i=t.display_value,s=i.form_data,a=i.schemes,l=[];return s.forEach((function(t){var i=a[t.scheme],s=i.type;if("text"===s){var c=Array.isArray(t.value)?e(t.value):t.value;l.push({type:"text",name:t.label,value:c||"--"})}if("table"===s){var _=i.attrs.column;l.push({type:"table",name:t.label,columns:_,value:t.value.map((function(t){var i={};return(0,n.default)(t).forEach((function(s){i[s]=t[s].label?t[s].label+"："+e(t[s].value):e(t[s].value)})),i}))})}})),l}}}},ZWKv:function(t,e,i){"use strict";i("cwHA")},cwHA:function(t,e,i){},iCc5:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},nShD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Field=e.getCustomTableDisplayValue=void 0;var s=c(i("GQeE")),a=c(i("iCc5")),n=c(i("V7oC")),l=i("ygAv");function c(t){return t&&t.__esModule?t:{default:t}}e.getCustomTableDisplayValue=function(t,e){var i=(0,l.deepClone)(e[t.key]);return!t||"multiselect"!==t.display&&"select"!==t.display?i:("string"==typeof i?[i]:i).map((function(e){var i=t.choice.find((function(t){return t.key===e||t.name===e}));return i?i.name:""})).join(",")},e.Field=function(){function t(e,i){(0,a.default)(this,t),this.prevId="",this.name="",this.type=e,this.regex="",this.regex_config={rule:{expressions:[],type:"and"}},this.customRegex="",this.source_type="",this.source_uri="",this.default_value="",this.layout="",this.validate="",this.desc="",this.is_tips="",this.tips="",this.show_type="",this.show_conditions={},this.setDefaultValue(i)}return(0,n.default)(t,[{key:"setDefaultValue",value:function(t){var e=this;(0,s.default)(t).forEach((function(i){e[i]=t[i]}))}}]),t}()}}]);