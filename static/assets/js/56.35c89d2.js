(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"+qbI":function(t,e,a){},CdzN:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.tabLoading||t.countLoading},expression:"{ isLoading: tabLoading || countLoading }"}],staticClass:"my-ticket-page"},[e("nav-title",{attrs:{"title-name":t.$t("m.navigation['我的工单']")}},[t.countLoading?t._e():e("bk-tab",{attrs:{slot:"tab",active:t.activePanel,type:"unborder-card"},on:{"update:active":function(e){t.activePanel=e},"tab-change":t.handleTabChange},slot:"tab"},t._l(t.panels,(function(a,i){return e("bk-tab-panel",t._b({key:i},"bk-tab-panel",a,!1),[e("template",{slot:"label"},[e("span",{staticClass:"panel-name"},[t._v(t._s(a.label))]),t._v(" "),t.tabCount[a.name]||0===t.tabCount[a.name]?e("span",{staticClass:"panel-count"},[t._v("\n            "+t._s(t.tabCount[a.name])+"\n          ")]):t._e(),t._v(" "),t.tabCount[a.name]?e("span",{staticClass:"red-dot"}):t._e()])],2)})),1)],1),t._v(" "),e("div",{staticClass:"table-wrap"},[e("advanced-search",{ref:"advancedSearch",staticClass:"advanced-search",attrs:{forms:t.searchForms},on:{search:t.handleSearch,clear:t.handleClearSearch,formChange:t.handleSearchFormChange}},[e("div",{staticClass:"slot-content"},[e("bk-button",{staticClass:"export",attrs:{title:t.$t("m.tickets['导出']")},on:{click:t.openExportList}},[t._v("\n          "+t._s(t.$t('m.tickets["导出"]')))]),t._v(" "),"approval"===t.activePanel?e("bk-button",{staticClass:"mr10 plus-cus",attrs:{theme:"default",title:t.$t("m.managePage['批量审批']"),disabled:!t.selectedList.length},on:{click:t.onBatchApprovalClick}},[t._v("\n          "+t._s(t.$t("m.managePage['批量审批']"))+"\n        ")]):t._e()],1)]),t._v(" "),t.tabLoading?t._e():e("bk-table",{ref:"ticketList",staticClass:"ticket-table",attrs:{data:t.ticketList,pagination:t.pagination,size:t.setting.size,"row-style":t.getRowStyle},on:{"sort-change":t.onSortChange,"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange,"select-all":t.handleSelectAll}},["approval"===t.activePanel?e("bk-table-column",{attrs:{type:"selection",width:"60",selectable:t.canSelected},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.waiting_approve?e("bk-checkbox",{on:{change:function(e){return t.changeSelection(a.row)}},model:{value:a.row.checkStatus,callback:function(e){t.$set(a.row,"checkStatus",e)},expression:"props.row.checkStatus"}}):t._e()]}}],null,!1,108780665)}):t._e(),t._v(" "),e("bk-table-column",{attrs:{prop:"remind_btn",width:"30"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("bk-popover",{attrs:{content:a.hasAttention?t.$t("m.manageCommon['取消关注']"):t.$t("m.manageCommon['关注单据']"),interactive:!1,placement:"top"}},[e("div",{staticClass:"attention-icon"},[e("i",{staticClass:"bk-itsm-icon icon-rate",on:{click:function(e){return t.onChangeAttention(a)}}}),t._v(" "),e("i",{staticClass:"bk-itsm-icon icon-favorite",class:{"is-attention":a.hasAttention},on:{click:function(e){return t.onChangeAttention(a)}}})])])]}}],null,!1,3633785118)}),t._v(" "),t._l(t.setting.selectedFields,(function(a){return e("bk-table-column",{key:a.id,attrs:{label:a.label,width:a.width,"min-width":a.minWidth,sortable:a.sortable,prop:a.prop},scopedSlots:t._u([{key:"default",fn:function(i){return["id"===a.id?e("column-sn",{attrs:{row:i.row,from:t.fromRouter}}):"current_steps"===a.id?e("column-current-step",{attrs:{row:i.row}}):"status"===a.id?e("span",{staticClass:"bk-status-color-info",style:t.getstatusColor(i.row),attrs:{title:i.row.current_status_display}},[t._v("\n            "+t._s(t.isChineseLanguage?i.row.current_status_display:i.row.current_status||"--")+"\n          ")]):"priority"===a.id?e("span",{staticClass:"bk-priority-button",style:t.getPriorityColor(i.row)},[t._v("\n            "+t._s(i.row.priority_name||"--")+"\n          ")]):"operate"===a.id?["approval"===t.activePanel?[e("bk-link",{staticClass:"table-link mr10",attrs:{theme:"primary"},on:{click:function(e){return t.onOpenApprovalDialog(i.row.id,!0)}}},[t._v("\n                "+t._s(t.$t("m.managePage['通过']"))+"\n              ")]),t._v(" "),e("bk-link",{staticClass:"table-link",attrs:{theme:"primary"},on:{click:function(e){return t.onOpenApprovalDialog(i.row.id,!1)}}},[t._v("\n                "+t._s(t.$t("m.manageCommon['拒绝']"))+"\n              ")])]:i.row.can_comment?e("bk-link",{staticClass:"table-link mr10",attrs:{theme:"primary"},on:{click:function(e){return t.onOpenEvaluationTicketModal(i.row)}}},[t._v("\n              "+t._s(t.$t('m.manageCommon["满意度评价"]'))+"\n            ")]):e("router-link",{staticClass:"table-link mr10",attrs:{target:"_blank",to:{name:"TicketDetail",query:{id:i.row.id,from:t.fromRouter}}}},[t._v("\n              "+t._s(i.row.can_operate?t.$t("m.manageCommon['处理']"):t.$t('m.manageCommon["查看"]'))+"\n            ")]),t._v(" "),"created"===t.activePanel&&"REVOKED"===i.row.current_status?e("bk-link",{staticClass:"table-link",attrs:{theme:"primary"},on:{click:function(e){return t.reCreateTicket(i.row)}}},[t._v("\n              "+t._s(t.$t('m.manageCommon["复制提单"]'))+"\n            ")]):t._e()]:e("span",{attrs:{title:i.row[a.id]}},[t._v(t._s(i.row[a.id]||"--"))])]}}],null,!0)})})),t._v(" "),e("bk-table-column",{attrs:{type:"setting"}},[e("bk-table-setting-content",{attrs:{size:t.setting.size,fields:t.setting.fields,selected:t.setting.selectedFields},on:{"setting-change":t.handleSettingChange}})],1)],2)],1),t._v(" "),e("approval-dialog",{attrs:{"is-show":t.isApprovalDialogShow,"approval-info":t.approvalInfo},on:{"update:isShow":function(e){t.isApprovalDialogShow=e},"update:is-show":function(e){t.isApprovalDialogShow=e},cancel:t.onApprovalDialogHidden}}),t._v(" "),e("evaluation-ticket-modal",{ref:"evaluationModal",attrs:{"ticket-info":t.evaluationTicketInfo},on:{submitSuccess:t.getTicketList}}),t._v(" "),e("export-ticket-dialog",{attrs:{"is-show":t.isExportDialogShow,pagination:t.pagination,"view-type":"my_"+t.activePanel,"search-params":t.lastSearchParams},on:{close:function(e){t.isExportDialogShow=!1}}})],1)},n=[];i._withStripped=!0},UEIz:function(t,e,a){"use strict";a.r(e);var i=a("kPsP"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e.default=n.a},WdRv:function(t,e,a){"use strict";a("+qbI")},eAkF:function(t,e,a){"use strict";a.r(e);var i=a("CdzN"),n=a("UEIz");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("WdRv");var s=a("KHd+"),r=Object(s.a)(n.default,i.a,i.b,!1,null,"fe3bfff6",null);e.default=r.exports},kPsP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=g(a("QbLZ")),n=g(a("gDS+")),o=g(a("EstQ")),s=a("CeR/"),r=a("ygAv"),c=g(a("+qVm")),l=g(a("vW/k")),u=g(a("0ygw")),d=g(a("XsVg")),h=g(a("0tMM")),p=g(a("+byz")),m=g(a("3jdt")),f=g(a("xgcw"));function g(t){return t&&t.__esModule?t:{default:t}}var v=[{name:"todo",label:o.default.t("m.tickets['我的待办']")},{name:"approval",label:o.default.t("m.tickets['待我审批']")},{name:"created",label:o.default.t("m.tickets['我的申请']")},{name:"attention",label:o.default.t("m.tickets['我的关注']")},{name:"history",label:o.default.t("m.tickets['我的历史']")}],k=[{id:"id",label:o.default.t("m.manageCommon['单号']"),width:"200",disabled:!0},{id:"title",label:o.default.t("m.manageCommon['标题']"),minWidth:"180"},{id:"service_name",label:o.default.t("m.home['服务']"),minWidth:"140",prop:"service_name"},{id:"service_type_name",label:o.default.t("m.manageCommon['类型']"),minWidth:"80"},{id:"priority",label:o.default.t("m.slaContent['优先级']"),minWidth:"120",sortable:"custom",prop:"priority_name"},{id:"current_steps",label:o.default.t("m.newCommon['当前步骤']"),minWidth:"80",prop:"current_steps"},{id:"current_processors",label:o.default.t("m.manageCommon['当前处理人']"),width:"130",prop:"current_processors"},{id:"status",label:o.default.t("m.manageCommon['状态']"),minWidth:"120",sortable:"custom",prop:"status"},{id:"create_at",label:o.default.t("m.manageCommon['提单时间']"),minWidth:"140",sortable:"custom",prop:"create_at"},{id:"creator",label:o.default.t("m.manageCommon['提单人']"),minWidth:"140",prop:"creator"},{id:"operate",label:o.default.t("m.manageCommon['操作']"),minWidth:"80"}],_=[{name:o.default.t("m.tickets['单号/标题']"),desc:o.default.t("m.tickets['单号/标题']"),type:"input",key:"keyword",display:!0,value:"",list:[],placeholder:o.default.t('m.tickets["请选择单号/标题"]')},{name:o.default.t('m.tickets["服务目录"]'),type:"cascade",key:"catalog_id",multiSelect:!0,display:!0,value:[],list:[],placeholder:o.default.t('m.tickets["请选择服务目录"]')},{name:o.default.t('m.tickets["服务"]'),type:"select",key:"service_id__in",multiSelect:!0,display:!0,value:[],list:[],placeholder:o.default.t('m.tickets["请选择服务"]')},{name:o.default.t('m.tickets["提单人"]'),type:"member",key:"creator__in",multiSelect:!0,display:!0,value:[],list:[],placeholder:o.default.t('m.tickets["请选择提单人"]')},{name:o.default.t('m.tickets["处理人"]'),type:"member",key:"current_processor",multiSelect:!0,display:!0,value:[],list:[],placeholder:o.default.t('m.tickets["请选择处理人"]')},{name:o.default.t('m.tickets["状态"]'),type:"select",key:"current_status__in",multiSelect:!0,display:!0,value:[],list:[],placeholder:o.default.t('m.tickets["请选择状态"]')},{name:o.default.t('m.tickets["提单时间"]'),key:"date_update",type:"datetime",display:!0,value:[],list:[],placeholder:o.default.t('m.tickets["请选择提单时间"]')},{name:o.default.t('m.tickets["业务"]'),key:"bk_biz_id",type:"select",display:!0,value:"",list:[],placeholder:o.default.t('m.tickets["请选择业务"]')}];e.default={name:"MyTicket",components:{ColumnSn:u.default,ColumnCurrentStep:l.default,NavTitle:c.default,ApprovalDialog:d.default,AdvancedSearch:p.default,EvaluationTicketModal:m.default,ExportTicketDialog:h.default},mixins:[f.default],data:function(){return{panels:v,searchForms:[],isExportDialogShow:!1,isApprovalDialogShow:!1,approvalInfo:{showAllOption:!1,result:!0,approvalList:[]},colorHexList:[],ticketList:[],activePanel:"todo",tabLoading:!1,tabCount:{todo:0,approval:0},countLoading:!1,pagination:{current:1,count:10,limit:10},setting:{fields:[],selectedFields:[],size:"medium"},lastSearchParams:{},orderKey:"-create_at",selectedList:[],evaluationTicketInfo:{}}},computed:{openFunction:function(){return this.$store.state.openFunction},currTabSettingCache:function(){return this.$store.state.ticket.settingCache[this.activePanel]},fromRouter:function(){return this.$route.name+"_"+this.$route.params.type}},watch:{$route:function(){this.pagination={current:1,count:10,limit:10},this.lastSearchParams={},this.orderKey="-create_at",this.$refs.advancedSearch&&(this.$refs.advancedSearch.showMore=!1),this.initData()}},created:function(){this.initData()},methods:{initData:function(){var t=this,e=["id","title","service_name","current_steps","current_processors","create_at","creator","operate"];if(this.currTabSettingCache){var a=this.currTabSettingCache,i=a.fields,n=a.size;e=i,this.setting.size=n}var o=k.filter((function(e){return!("created"===t.activePanel&&"creator"===e.id||!t.openFunction.SLA_SWITCH&&"priority"===e.id)}));this.setting.fields=o.slice(0),this.setting.selectedFields=o.slice(0).filter((function(t){return e.includes(t.id)})),this.activePanel=this.$route.params.type,this.getTicketList(),this.getTicketsCount(),this.searchForms=(0,r.deepClone)(_),this.getTicketStatusTypes(),this.getTypeStatus(),this.getBusinessList(),this.getServiceTree()},getTicketList:function(){var t=this,e=this.$route.params.type,a="{}"===(0,n.default)(this.lastSearchParams)?{service_id__in:this.$route.query.service_id}:this.lastSearchParams;return this.tabLoading=!0,this.$store.dispatch("change/getList",(0,i.default)({page_size:this.pagination.limit,page:this.pagination.current,is_draft:0,view_type:"my_"+e,ordering:this.orderKey},a)).then((function(a){a.result&&(t.ticketList=a.data.items.map((function(e){var a=(e.followers||[]).some((function(t){return t===window.username}));return t.$set(e,"hasAttention",a),t.$set(e,"checkStatus",!1),e})),["todo","approval"].includes(e)&&t.$set(t.tabCount,e,a.data.count),t.pagination.count=a.data.count,t.reloadCount(),t.__asyncReplaceTicketListAttr(t.ticketList))})).catch((function(e){(0,s.errorHandler)(e,t)})).finally((function(){t.tabLoading=!1}))},getTicketsCount:function(){var t=this;this.countLoading=!0,this.$store.dispatch("ticket/getTicketsCount").then((function(e){var a=e.data;a.my_approval&&(t.tabCount.approval=a.my_approval),a.my_todo&&(t.tabCount.todo=a.my_todo)})).catch((function(e){(0,s.errorHandler)(e,t)}))},getTicketStatusTypes:function(){var t=this;this.$store.dispatch("ticketStatus/getOverallTicketStatuses",{source_uri:"ticket_status"}).then((function(e){t.searchForms.find((function(t){return"current_status__in"===t.key})).list=e.data})).catch((function(e){(0,s.errorHandler)(e,t)}))},getTypeStatus:function(){var t=this;this.$store.dispatch("ticketStatus/getTypeStatus",{type:"",params:{}}).then((function(e){t.colorHexList=e.data})).catch((function(e){(0,s.errorHandler)(e,t)}))},getBusinessList:function(){var t=this;this.$store.dispatch("eventType/getAppList").then((function(e){t.searchForms.find((function(t){return"bk_biz_id"===t.key})).list=e.data})).catch((function(e){(0,s.errorHandler)(e,t)}))},getServiceTree:function(){var t=this;this.$store.dispatch("serviceCatalog/getTreeData",{show_deleted:!0}).then((function(e){t.searchForms.find((function(t){return"catalog_id"===t.key})).list=e.data[0]?e.data[0].children:[]})).catch((function(e){(0,s.errorHandler)(e,t)}))},getstatusColor:function(t){var e=this.colorHexList.filter((function(e){return e.service_type===t.service_type&&e.key===t.current_status}));return e.length?{color:e[0].color_hex,border:"1px solid "+e[0].color_hex}:{color:"#3c96ff",border:"1px solid #3c96ff"}},getServiceData:function(t){var e=this,a={catalog_id:t,is_valid:1};this.$store.dispatch("catalogService/getServices",a).then((function(t){var a=e.searchForms.find((function(t){return"service_id__in"===t.key}));a.list=[],t.data.forEach((function(t){a.list.push({key:t.id,name:t.name})}))})).catch((function(t){(0,s.errorHandler)(t,e)}))},getPriorityColor:function(t){var e=1;return t.meta.priority&&(e=t.meta.priority.key>3?3:Number(t.meta.priority.key)),"--"===t.priority_name?{background:"none",color:"#424950"}:{backgroundColor:["#A4AAB3","#FFB848","#FF5656"][e-1]}},reloadCount:function(){var t=this;this.countLoading=!0,setTimeout((function(){t.countLoading=!1}))},reCreateTicket:function(t){var e=this.$router.resolve({name:"CreateTicket",query:{from:this.fromRouter,service_id:t.service_id,rc_ticket_id:t.id}}).href;window.open(e,"_blank")},handleTabChange:function(t){this.$router.push({name:"MyTicket",params:{type:t}})},onSortChange:function(t){var e={priority_name:"priority_order",status:"current_status_order",create_at:"create_at"}[t.prop];"descending"===t.order&&(e="-"+e),this.orderKey=e,this.getTicketList()},handlePageChange:function(t){this.pagination.current=t,this.getTicketList()},handlePageLimitChange:function(t){this.pagination.current=1,this.pagination.limit=t,this.getTicketList()},handleSettingChange:function(t){var e=t.fields,a=t.size;this.setting.size=a,this.setting.selectedFields=e;var i=e.map((function(t){return t.id}));this.$store.commit("ticket/setSettingCache",{type:this.activePanel,value:{fields:i,size:a}})},onOpenApprovalDialog:function(t,e){this.isApprovalDialogShow=!0,this.approvalInfo={result:e,approvalList:[{ticket_id:t}]}},onApprovalDialogHidden:function(t){this.isApprovalDialogShow=!1,this.approvalInfo={result:!0,showAllOption:!1,approvalList:[]},t&&this.initData()},onBatchApprovalClick:function(){this.isApprovalDialogShow=!0,this.approvalInfo={result:!0,showAllOption:!0,approvalList:this.selectedList.map((function(t){return{ticket_id:t.id}}))}},handleSearch:function(t){this.lastSearchParams=t,this.getTicketList()},handleClearSearch:function(){this.searchForms.forEach((function(t){"service_id__in"===t.key&&(t.display=!1)}))},handleSearchFormChange:function(t,e){if("catalog_id"===t){var a=this.searchForms.find((function(t){return"service_id__in"===t.key}));if(a.display=e.length,e.length){var i=e[e.length-1].id;a.value=[],this.getServiceData(i)}}},openExportList:function(){this.isExportDialogShow=!0},onChangeAttention:function(t){var e=this,a=t.id,i={attention:!t.hasAttention},n="";this.$store.dispatch("deployOrder/setAttention",{params:i,id:a}).then((function(){t.hasAttention?(t.hasAttention=!1,n=e.$t("m.manageCommon['取消关注成功']")):(t.hasAttention=!0,n=e.$t("m.manageCommon['添加关注成功']")),e.$bkMessage({message:n,theme:"success",ellipsisLine:0})})).catch((function(t){(0,s.errorHandler)(t,e)}))},clearSelectedList:function(){this.selectedList=[]},handleSelectAll:function(t){this.ticketList.forEach((function(e){e.checkStatus=!!t.length})),this.selectedList=t},handleSelect:function(t){this.selectedList=t},changeSelection:function(t){this.$refs.ticketList.toggleRowSelection(t,t.checkStatus),t.checkStatus?this.selectedList.some((function(e){return e.id===t.id}))||this.selectedList.push(t):this.selectedList=this.selectedList.filter((function(e){return e.id!==t.id}))},canSelected:function(t){return t.waiting_approve},onOpenEvaluationTicketModal:function(t){this.$refs.evaluationModal.show(),this.evaluationTicketInfo=t},getRowStyle:function(t){return"background-color: "+t.row.sla_color}}}}}]);