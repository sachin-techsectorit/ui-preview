import{a as re}from"./chunk-N67BXWAG.js";import{H as ie,I as oe,N as ne,P as ae,V as le,c as P,e as z,f as C,g as G,h as q,i as Y,l as U,m as H,n as J,o as X,p as Q,q as Z,w as ee,z as te}from"./chunk-2X4G3FHU.js";import"./chunk-S35HUXPS.js";import"./chunk-N7L6AAUG.js";import{i as K,k as F}from"./chunk-ZRYO6DGE.js";import{$ as f,$a as R,$b as k,Ab as o,Bb as d,Cb as N,Db as T,Fb as L,Hb as g,Ib as s,Lc as W,Na as l,Q as y,Qc as O,Sa as D,Sb as j,Tb as a,Ub as c,Xb as V,Yb as B,Zb as $,_a as h,aa as b,eb as p,lc as u,qb as r,tb as M,ub as _,zb as i}from"./chunk-EIHY44QV.js";import"./chunk-DAQOROHW.js";var w=class e{visible=!1;items=[{label:"Admin",style:{color:"#64748B"}},{label:"Roundtables",style:{color:"#0D0D0D",fontWeight:"700"}}];value1;status=[{status:"Active"},{status:"In Active"},{status:"All"}];tableHeading=[{field:"name",header:"Name",type:"text"},{field:"client",header:"Client(s) With Access",type:"text"},{field:"director",header:"Director(s)",type:"text"},{field:"associate",header:"Associate(s)",type:"select",options:["In Stock","Low Stock","Out of Stock"]},{field:"status",header:"Status",type:"text"}];tableData=[{id:2,name:"Speaker Series: BioCatch \u2013 Spot the...",client:"1",director:"Ed Falco, Russ Kotlicky, Warren Murphy",associate:"Low Stock",status:"Active"},{id:3,name:"hhhhhhhhhhhhhhhh",client:"2",director:"Ed Falco, Russ Kotlicky",associate:"Low Stock",status:"Active"},{id:4,name:"ooooooooooooooooooo",client:"3",director:"Ed Falco, Russ Kotlicky",associate:"Low Stock",status:"Active"},{id:5,name:"iiiiiii",client:"4",director:"Charles Klimpel, Diana Middleton",associate:"Low Stock",status:"Active"},{id:6,name:"Learning and Development Session",client:"5",director:"Ed Falco, Russ Kotlicky",associate:"Low Stock",status:"Active"},{id:7,name:"Learning and Development Session",client:"6",director:"Diana Middleton",associate:"Low Stock",status:"Active"},{id:8,name:"jhgjkgjkh",client:"7",director:"Charles Klimpel, Diana Middleton",associate:"Low Stock",status:"Active"},{id:9,name:"Speaker Series: BioCatch \u2013 Spot the...",client:"8",director:"Jaime Paz",associate:"Low Stock",status:"Active"},{id:1,name:"Speaker Series: BioCatch \u2013 Spot the...",client:"9",director:"Ed Falco, Russ Kotlicky, Warren Murphy",associate:"In Stock",status:"Active"}];constructor(){}ngOnInit(){}handleEditPage(n){console.log("Route to edit page",n)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-roundtables"]],standalone:!1,decls:2,vars:0,template:function(t,m){t&1&&(i(0,"p"),a(1,"Roundtables"),o())},encapsulation:2})};var pe=()=>({width:"26vw"}),se=()=>({"1199px":"75vw","575px":"60vw"});function ce(e,n){if(e&1&&(N(0),i(1,"a",46)(2,"span",47),a(3),o()(),T()),e&2){let t=s().$implicit;l(),r("routerLink",t.route),l(2),c(t.label)}}function ue(e,n){if(e&1&&(i(0,"span",47),a(1),o()),e&2){let t=s().$implicit;l(),c(t.label)}}function fe(e,n){if(e&1&&p(0,ce,4,2,"ng-container",45)(1,ue,2,1,"ng-template",null,2,u),e&2){let t=n.$implicit,m=j(2);r("ngIf",t.route)("ngIfElse",m)}}function be(e,n){if(e&1&&(i(0,"div",48),d(1,"img",49),i(2,"div"),a(3),o()()),e&2){let t=n.$implicit;l(),_("flag flag-"+t.code.toLowerCase()),l(2),c(t.name)}}function _e(e,n){e&1&&d(0,"i",50)}function ve(e,n){if(e&1&&(i(0,"div",48),d(1,"img",49),i(2,"div"),a(3),o()()),e&2){let t=s().$implicit;l(),_("flag flag-"+t.code.toLowerCase()),l(2),c(t.name)}}function ge(e,n){if(e&1&&p(0,ve,4,3,"div",51),e&2){let t=n.$implicit;r("ngIf",t)}}function Ce(e,n){e&1&&d(0,"i",50)}function xe(e,n){if(e&1&&(i(0,"div",48),d(1,"img",49),i(2,"div"),a(3),o()()),e&2){let t=s().$implicit;l(),_("flag flag-"+t.code.toLowerCase()),l(2),c(t.name)}}function Se(e,n){if(e&1&&p(0,xe,4,3,"div",51),e&2){let t=n.$implicit;r("ngIf",t)}}function ye(e,n){e&1&&d(0,"i",50)}function he(e,n){if(e&1&&(i(0,"div",48),d(1,"img",49),i(2,"div"),a(3),o()()),e&2){let t=s().$implicit;l(),_("flag flag-"+t.code.toLowerCase()),l(2),c(t.name)}}function Re(e,n){if(e&1&&p(0,he,4,3,"div",51),e&2){let t=n.$implicit;r("ngIf",t)}}function we(e,n){e&1&&d(0,"i",50)}function Ae(e,n){if(e&1&&(i(0,"div",48),d(1,"img",49),i(2,"div"),a(3),o()()),e&2){let t=s().$implicit;l(),_("flag flag-"+t.code.toLowerCase()),l(2),c(t.name)}}function Ee(e,n){if(e&1&&p(0,Ae,4,3,"div",51),e&2){let t=n.$implicit;r("ngIf",t)}}function De(e,n){e&1&&d(0,"i",50)}function ke(e,n){if(e&1&&(i(0,"p-button",52)(1,"p"),a(2,"Save"),o()()),e&2){let t=s();r("disabled",t.addRoundtableForm.invalid)}}function Fe(e,n){if(e&1&&(i(0,"p-button",53)(1,"p",54),a(2,"Update"),o()()),e&2){let t=s();r("disabled",t.addRoundtableForm.invalid)}}var x=class e{constructor(n,t){this.fb=n;this.formService=t}addRoundtableForm=Y;submitFormData="";isEditMode=!1;showConfirmDialog=!1;items=[{label:"Admin",style:{color:"#64748B"}},{label:"Roundtables",route:"/vizor/admin/roundtables"},{label:"Add New Roundtable",style:{color:"#0D0D0D",fontWeight:"700"}}];clients=[{name:"Client A"},{name:"Client B"}];directors=[{name:"Director X"},{name:"Director Y"}];associates=[{name:"Associate 1"},{name:"Associate 2"}];ngOnInit(){this.addRoundtableForm=this.fb.group({projectName:["",C.required],projectAbbreviation:["",C.required],client:[null,C.required],director:[null,C.required],primaryDirector:[null],associate:[null],primaryAssociate:[null],projectDescription:[""],isActive:[!1]})}submitRoundtableForm(){this.addRoundtableForm.valid?(this.submitFormData=this.formService.saveData(this.addRoundtableForm.value),console.log("Form Data Submitted:",this.addRoundtableForm.value)):console.log("Error Occurred While Submitting Form: Form is invalid")}cancelFormSubmittion(){this.showConfirmDialog=!0}closeConfirmModal(){this.showConfirmDialog=!1}removeFormVal(){this.showConfirmDialog=!1,this.addRoundtableForm.reset()}static \u0275fac=function(t){return new(t||e)(D(X),D(re))};static \u0275cmp=h({type:e,selectors:[["app-add-roundtable"]],standalone:!1,decls:88,vars:20,consts:[["item",""],["dropdownicon",""],["elseBlock",""],[1,"d-flex","align-items-center","justify-content-between","pb-4"],[1,"max-w-100",3,"model"],[3,"routerLink","raised"],[1,"fw-normal","p-0","m-0"],[3,"ngSubmit","formGroup"],[1,"row","p-0"],[1,"col-12","col-md-6","col-lg-6","col-xl-4","col-xxl-4","padding__bottom"],["variant","on",1,"w-100","md:w-56"],["formControlName","projectName","pInputText","","id","over_label","placeholder","","autocomplete","off",1,"w-100"],["for","projectName"],["formControlName","projectAbbreviation","pInputText","","id","over_label","placeholder","","autocomplete","off",1,"w-100"],["for","projectAbbreviation"],["optionLabel","name","formControlName","client",1,"w-100","md:w-56",3,"options"],["for","client"],["optionLabel","name","formControlName","director",1,"w-100","md:w-56",3,"options"],["for","director"],["optionLabel","name","formControlName","primaryDirector","placeholder","",1,"w-100","md:w-56",3,"options"],["for","primaryDirector"],["optionLabel","name","formControlName","associate","placeholder","",1,"w-100","md:w-56",3,"options"],["for","associate"],["optionLabel","name","formControlName","primaryAssociate","placeholder","",1,"w-100","md:w-56",3,"options"],["for","primaryAssociate"],[1,"col-12","col-md-12","col-lg-12","col-xl-8","col-xxl-8","padding__bottom"],["cols","60","pTextarea","","id","over_label","formControlName","projectDescription","placeholder","Roundtable Description","autocomplete","off",1,"w-100","p-3","border","border-secondary-subtle","rounded"],[1,"col-12","padding__bottom"],["value","Active","formControlName","isActive","inputId","isActive",1,"pe-3"],["for","isActive",1,"ml-2"],[1,"bottom-buttons","d-flex","justify-content-center","align-items-center","gap-5"],["variant","outlined","severity","secondary",3,"onClick"],[1,"cancle__btn"],["class","save__btn","severity","primary","type","submit",3,"disabled",4,"ngIf"],["severity","primary","type","submit",3,"disabled",4,"ngIf"],["closable","false",3,"visibleChange","visible","modal","breakpoints","draggable","resizable"],[1,"text-center","px-5"],["src","/icons/nav-icons/confirm.svg","alt",""],[1,"pt-4"],[1,"pt-3","font__wieght__normal"],[1,"btn-div","d-flex","justify-content-center","pt-5"],["variant","outlined","severity","secondary",1,"pe-3",3,"onClick"],[1,"px-3","text-black"],[3,"onClick"],[1,"px-3"],[4,"ngIf","ngIfElse"],[1,"p-breadcrumb-item-link",3,"routerLink"],[1,""],[1,"flex","items-center","gap-2"],["alt","Loading","src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"pi","pi-sort-down-fill"],["class","flex items-center gap-2",4,"ngIf"],["severity","primary","type","submit",1,"save__btn",3,"disabled"],["severity","primary","type","submit",3,"disabled"],[1,"update__btn"]],template:function(t,m){if(t&1){let v=L();i(0,"section",3)(1,"p-breadcrumb",4),p(2,fe,3,2,"ng-template",null,0,u),o(),i(4,"p-button",5)(5,"p",6),a(6,"Add New Roundtable"),o()()(),i(7,"section")(8,"form",7),g("ngSubmit",function(){return f(v),b(m.submitRoundtableForm())}),i(9,"div",8)(10,"div",9)(11,"p-floatlabel",10),d(12,"input",11),i(13,"label",12),a(14,"Roundtable Name*"),o()()(),i(15,"div",9)(16,"p-floatlabel",10),d(17,"input",13),i(18,"label",14),a(19,"Roundtable Abbreviation*"),o()()(),i(20,"div",9)(21,"p-floatlabel",10)(22,"p-select",15),p(23,be,4,3,"ng-template")(24,_e,1,0,"ng-template",null,1,u),o(),i(26,"label",16),a(27,"Roundtable Name*"),o()()(),i(28,"div",9)(29,"p-floatlabel",10)(30,"p-select",17),p(31,ge,1,1,"ng-template")(32,Ce,1,0,"ng-template",null,1,u),o(),i(34,"label",18),a(35,"Select Director(s)*"),o()()(),i(36,"div",9)(37,"p-floatlabel",10)(38,"p-select",19),p(39,Se,1,1,"ng-template")(40,ye,1,0,"ng-template",null,1,u),o(),i(42,"label",20),a(43,"Primary Director*"),o()()(),d(44,"div",9),i(45,"div",9)(46,"p-floatlabel",10)(47,"p-select",21),p(48,Re,1,1,"ng-template")(49,we,1,0,"ng-template",null,1,u),o(),i(51,"label",22),a(52,"Select Associate(s)"),o()()(),i(53,"div",9)(54,"p-floatlabel",10)(55,"p-select",23),p(56,Ee,1,1,"ng-template")(57,De,1,0,"ng-template",null,1,u),o(),i(59,"label",24),a(60,"Primary Associate"),o()()(),i(61,"div",25)(62,"textarea",26),a(63,"                    "),o()(),i(64,"div",27),d(65,"p-checkbox",28),i(66,"label",29),a(67,"Active"),o()(),i(68,"div",30)(69,"p-button",31),g("onClick",function(){return f(v),b(m.cancelFormSubmittion())}),i(70,"p",32),a(71,"Cancel"),o()(),p(72,ke,3,1,"p-button",33)(73,Fe,3,1,"p-button",34),o()()()(),i(74,"p-dialog",35),$("visibleChange",function(E){return f(v),B(m.showConfirmDialog,E)||(m.showConfirmDialog=E),b(E)}),i(75,"div",36),d(76,"img",37),i(77,"h5",38),a(78,"Unsaved Changes"),o(),i(79,"p",39),a(80,"You have unsaved changes, do you want to leave without saving?"),o(),i(81,"div",40)(82,"p-button",41),g("onClick",function(){return f(v),b(m.closeConfirmModal())}),i(83,"p",42),a(84,"No"),o()(),i(85,"p-button",43),g("onClick",function(){return f(v),b(m.removeFormVal())}),i(86,"p",44),a(87,"Yes"),o()()()()()}t&2&&(l(),r("model",m.items),l(3),r("routerLink","/vizor/admin/roundtables/add-roundtable")("raised",!0),l(4),r("formGroup",m.addRoundtableForm),l(14),r("options",m.clients),l(8),r("options",m.directors),l(8),r("options",m.directors),l(9),r("options",m.associates),l(8),r("options",m.associates),l(17),r("ngIf",!m.isEditMode),l(),r("ngIf",m.isEditMode),l(),M(k(18,pe)),V("visible",m.showConfirmDialog),r("modal",!0)("breakpoints",k(19,se))("draggable",!1)("resizable",!1))},dependencies:[W,K,P,ie,Z,U,z,G,q,oe,te,ne,ee,ae,H,J],encapsulation:2})};var Ie=[{path:"",component:w},{path:"add-roundtable",component:x},{path:"modify-roundtable/:id",component:x}],A=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=R({type:e});static \u0275inj=y({imports:[F.forChild(Ie),F]})};var me=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=R({type:e});static \u0275inj=y({imports:[O,A,le,Q]})};export{me as RoundtablesModule};
