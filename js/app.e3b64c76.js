(function(){"use strict";var e={1055:function(e,t,l){var i=l(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("showRenzhe")],1)},r=[],a=function(){var e=this,t=e._self._c;return t("div",[t("el-row",[t("el-col",[t("el-button",{on:{click:function(t){return e.addRenZhe()}}},[e._v("添加忍者")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"忍者名称",width:"180"}}),t("el-table-column",{attrs:{prop:"fight",label:"忍者战力",width:"180"}}),t("el-table-column",{attrs:{prop:"level",label:"忍者级别",width:"180"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作"}}),t("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"text",size:"small",circle:"true"},on:{click:function(t){return e.deleteRenZhe(l.row.id)}}},[e._v("删除忍者")]),t("el-button",{attrs:{type:"text",size:"small",circle:"true"},on:{click:function(t){return e.modifyRenZhe(l.row.id)}}},[e._v("修改忍者")]),t("el-button",{attrs:{type:"text",size:"small",circle:"true"},on:{click:function(t){return e.studySkill(l.row.id)}}},[e._v("学习技能")]),t("el-button",{attrs:{type:"text",size:"small",circle:"true"},on:{click:function(t){return e.scanSkill(l.row.id)}}},[e._v("查看技能")])]}}])})],1),t("el-dialog",{attrs:{title:"技能学习",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{attrs:{model:e.form}},[t("el-form-item",{attrs:{label:"技能名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"技能等级","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.study()}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改忍者",visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[t("el-form",{attrs:{model:e.form}},[t("el-form-item",{attrs:{label:"忍者名","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form2.rname,callback:function(t){e.$set(e.form2,"rname",t)},expression:"form2.rname"}})],1),t("el-form-item",{attrs:{label:"忍者战力","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form2.rfight,callback:function(t){e.$set(e.form2,"rfight",t)},expression:"form2.rfight"}})],1),t("el-form-item",{attrs:{label:"忍者等级","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form2.rlevel,callback:function(t){e.$set(e.form2,"rlevel",t)},expression:"form2.rlevel"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.modify()}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"添加忍者",visible:e.dialogFormVisible3},on:{"update:visible":function(t){e.dialogFormVisible3=t}}},[t("el-form",{attrs:{model:e.form}},[t("el-form-item",{attrs:{label:"忍者名","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form3.rname,callback:function(t){e.$set(e.form3,"rname",t)},expression:"form3.rname"}})],1),t("el-form-item",{attrs:{label:"忍者战力","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form3.rfight,callback:function(t){e.$set(e.form3,"rfight",t)},expression:"form3.rfight"}})],1),t("el-form-item",{attrs:{label:"忍者等级","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form3.rlevel,callback:function(t){e.$set(e.form3,"rlevel",t)},expression:"form3.rlevel"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible3=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"技能信息",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[t("el-table",{attrs:{data:e.gridData}},[t("el-table-column",{attrs:{property:"name",label:"技能名",width:"150"}}),t("el-table-column",{attrs:{property:"level",label:"技能等级",width:"150"}})],1)],1)],1)},n=[],s={name:"showRenzhe",methods:{studySkill(e){this.dialogFormVisible=!0,this.form.id=e},study(){for(var e=this.tableData,t=0;t<e.length;t++)if(e[t].id==this.form.id)return e[t].skill.push({name:this.form.name,level:this.form.level}),this.dialogFormVisible=!1,void alert(e[t].name+"成功学习技能:"+this.form.name)},modifyRenZhe(e){this.dialogFormVisible2=!0,this.form2.id=e},modify(){for(var e=this.tableData,t=0;t<e.length;t++)if(e[t].id==this.form2.id)return e[t].name=this.form2.rname,e[t].fight=this.form2.rfight,e[t].level=this.form2.rlevel,void(this.dialogFormVisible2=!1)},addRenZhe(){this.dialogFormVisible3=!0},add(){this.tNum++;var e={id:"",name:"",fight:"",level:"",skill:""},t=this.form3;e.id=this.tNum,e.name=t.rname,e.fight=t.rfight,e.level=t.rlevel,e.skill=[],console.log("调用add"),this.tableData.push(e),this.dialogFormVisible3=!1},deleteRenZhe(e){for(var t=this.tableData,l=0;l<t.length;l++)t[l].id==e&&t.splice(l,1);alert("成功删除")},scanSkill(e){for(var t=this.tableData,l=0;l<t.length;l++)t[l].id==e&&(this.gridData=t[l].skill);this.dialogTableVisible=!0}},mounted(){},data(){return{tNum:5,tableData:[{id:0,name:"漩涡鸣人(幼年)",fight:20,level:"C",skill:[]},{id:1,name:"宇智波佐助(幼年)",fight:20,level:"C",skill:[]},{id:2,name:"小樱(幼年)",fight:20,level:"C",skill:[]},{id:3,name:"卡卡西(青年)",fight:100,level:"A",skill:[{name:"雷切",level:"S"},{name:"螺旋丸",level:"S"}]},{id:4,name:"宇智波佐助(博人传)",fight:20,level:"D",skill:[]}],tName:"",tLevel:"",tFight:"",tSkill:"",dialogFormVisible:!1,dialogFormVisible2:!1,dialogFormVisible3:!1,form:{id:"",name:"",level:"",delivery:!1,type:[]},form2:{id:"",rname:"",rfight:"",rlevel:""},form3:{id:"",rname:"",rfight:"",rlevel:""},gridData:[],dialogTableVisible:!1}}},f=s,m=l(1001),u=(0,m.Z)(f,a,n,!1,null,null,null),d=u.exports,c={name:"App",components:{showRenzhe:d}},b=c,h=(0,m.Z)(b,o,r,!1,null,null,null),v=h.exports,p=l(8499),g=l.n(p);i["default"].use(g()),i["default"].config.productionTip=!1,new i["default"]({render:e=>e(v)}).$mount("#app")}},t={};function l(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,l),r.exports}l.m=e,function(){var e=[];l.O=function(t,i,o,r){if(!i){var a=1/0;for(m=0;m<e.length;m++){i=e[m][0],o=e[m][1],r=e[m][2];for(var n=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](i[s])}))?i.splice(s--,1):(n=!1,r<a&&(a=r));if(n){e.splice(m--,1);var f=o();void 0!==f&&(t=f)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[i,o,r]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,r,a=i[0],n=i[1],s=i[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(o in n)l.o(n,o)&&(l.m[o]=n[o]);if(s)var m=s(l)}for(t&&t(i);f<a.length;f++)r=a[f],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},i=self["webpackChunktest3"]=self["webpackChunktest3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=l.O(void 0,[998],(function(){return l(1055)}));i=l.O(i)})();
//# sourceMappingURL=app.e3b64c76.js.map