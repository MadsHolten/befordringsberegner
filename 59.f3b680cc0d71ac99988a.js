(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",function(){return A});var i=n("ofXK"),o=n("TEn/"),r=n("3Pt+"),s=n("tyNb");function a(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{l(i.next(e))}catch(t){r(t)}}function a(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}l((i=i.apply(e,t||[])).next())})}var l=n("fXoL");let c=(()=>{class e{processFiles(e,t){return a(this,void 0,void 0,function*(){let n=[];e.forEach(e=>{n.push(this.readJSON(e))});const i=yield Promise.all(n);let o={},r=0;return i.forEach((n,i)=>{const s=e[i].name.split("_")[1].split(".json")[0],a=this.extractVisitDates(n,t);o[s]=a,r+=a.length}),o.TOTAL=r,o})}readJSON(e){return new Promise((t,n)=>{const i=new FileReader;i.readAsText(e,"UTF-8"),i.onload=()=>{t(JSON.parse(i.result.toString()))},i.onerror=e=>{n(e)}})}extractVisitDates(e,t){const n=e.timelineObjects.filter(e=>e.placeVisit).filter(e=>e.placeVisit.location).filter(e=>e.placeVisit.location.name).filter(e=>e.placeVisit.location.name.toLowerCase().includes("niras")).map(e=>{let t=new Date(parseInt(e.placeVisit.duration.startTimestampMs));return t=t.toDateString(),t});return[...new Set(n)]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("jhN1");function b(e,t){if(1&e){const e=l.Nb();l.Mb(0,"ngx-dropzone-remove-badge",1),l.Ub("click",function(t){return l.cc(e),l.Xb()._remove(t)}),l.Lb()}}const h=[[["ngx-dropzone-label"]]],p=["ngx-dropzone-label"],u=["fileInput"];function f(e,t){1&e&&l.Yb(0,2,["*ngIf","!_hasPreviews"])}const g=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],m=["ngx-dropzone-preview","*","ngx-dropzone-label"];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=l.Eb({type:e,selectors:[["ngx-dropzone-label"]]}),e})();function x(e){return null!=e&&"false"!=`${e}`}var M=function(e){return e[e.BACKSPACE=8]="BACKSPACE",e[e.DELETE=46]="DELETE",e}({});let _=(()=>{class e{constructor(e){this.sanitizer=e,this._removable=!1,this.removed=new l.o,this.tabIndex=0}set file(e){this._file=e}get file(){return this._file}get removable(){return this._removable}set removable(e){this._removable=x(e)}keyEvent(e){switch(e.keyCode){case M.BACKSPACE:case M.DELETE:this.remove()}}get hostStyle(){return this.sanitizer.bypassSecurityTrustStyle("\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t")}_remove(e){e.stopPropagation(),this.remove()}remove(){this._removable&&this.removed.next(this.file)}readFile(){return a(this,void 0,void 0,function*(){return new Promise((e,t)=>{const n=new FileReader;if(n.onload=t=>{e(t.target.result)},n.onerror=e=>{console.error(`FileReader failed on file ${this.file.name}.`),t(e)},!this.file)return t("No file to read. Please provide a file using the [file] Input property.");n.readAsDataURL(this.file)})})}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(d.b))},e.\u0275cmp=l.Db({type:e,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,t){1&e&&l.Ub("keyup",function(e){return t.keyEvent(e)}),2&e&&(l.Pb("tabindex",t.tabIndex),l.fc(t.hostStyle))},inputs:{file:"file",removable:"removable"},outputs:{removed:"removed"},ngContentSelectors:p,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(l.Zb(h),l.Yb(0),l.gc(1,b,1,0,"ngx-dropzone-remove-badge",0)),2&e&&(l.zb(1),l.ac("ngIf",t.removable))},directives:function(){return[i.i,z]},styles:["[_nghost-%COMP%]{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),e})(),L=(()=>{class e{parseFileList(e,t,n,i){const o=[],r=[];for(let s=0;s<e.length;s++){const a=e.item(s);this.isAccepted(a,t)?n&&a.size>n?this.rejectFile(r,a,"size"):!i&&o.length>=1?this.rejectFile(r,a,"no_multiple"):o.push(a):this.rejectFile(r,a,"type")}return{addedFiles:o,rejectedFiles:r}}isAccepted(e,t){if("*"===t)return!0;const n=t.split(",").map(e=>e.toLowerCase().trim()),i=e.type.toLowerCase(),o=e.name.toLowerCase();return!!n.find(e=>e.endsWith("/*")?i.split("/")[0]===e.split("/")[0]:e.startsWith(".")?o.endsWith(e):e==i)}rejectFile(e,t,n){const i=t;i.reason=n,e.push(i)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac}),e})(),w=(()=>{class e{constructor(e){this.service=e,this.change=new l.o,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._isHovered=!1}get _hasPreviews(){return!!this._previewChildren.length}get disabled(){return this._disabled}set disabled(e){this._disabled=x(e),this._isHovered&&(this._isHovered=!1)}get multiple(){return this._multiple}set multiple(e){this._multiple=x(e)}get maxFileSize(){return this._maxFileSize}set maxFileSize(e){this._maxFileSize=function(e){return isNaN(parseFloat(e))||isNaN(Number(e))?null:Number(e)}(e)}get expandable(){return this._expandable}set expandable(e){this._expandable=x(e)}get disableClick(){return this._disableClick}set disableClick(e){this._disableClick=x(e)}_onClick(){this.disableClick||this.showFileSelector()}_onDragOver(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}_onDragLeave(){this._isHovered=!1}_onDrop(e){this.disabled||(this.preventDefault(e),this._isHovered=!1,this.handleFileDrop(e.dataTransfer.files))}showFileSelector(){this.disabled||this._fileInput.nativeElement.click()}_onFilesSelected(e){this.handleFileDrop(e.target.files),this._fileInput.nativeElement.value="",this.preventDefault(e)}handleFileDrop(e){const t=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:t.addedFiles,rejectedFiles:t.rejectedFiles,source:this})}preventDefault(e){e.preventDefault(),e.stopPropagation()}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(L,2))},e.\u0275cmp=l.Db({type:e,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,t,n){if(1&e&&l.Cb(n,_,1),2&e){let e;l.bc(e=l.Vb())&&(t._previewChildren=e)}},viewQuery:function(e,t){if(1&e&&l.lc(u,3),2&e){let e;l.bc(e=l.Vb())&&(t._fileInput=e.first)}},hostVars:8,hostBindings:function(e,t){1&e&&l.Ub("click",function(){return t._onClick()})("dragover",function(e){return t._onDragOver(e)})("dragleave",function(){return t._onDragLeave()})("drop",function(e){return t._onDrop(e)}),2&e&&l.Bb("ngx-dz-hovered",t._isHovered)("ngx-dz-disabled",t.disabled)("expandable",t.expandable)("unclickable",t.disableClick)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",id:"id",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedBy:["aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[l.yb([L])],ngContentSelectors:m,decls:5,vars:8,consts:[["type","file",3,"id","multiple","accept","disabled","change"],["fileInput",""],[4,"ngIf"]],template:function(e,t){1&e&&(l.Zb(g),l.Mb(0,"input",0,1),l.Ub("change",function(e){return t._onFilesSelected(e)}),l.Lb(),l.gc(2,f,1,0,"ng-content",2),l.Yb(3),l.Yb(4,1)),2&e&&(l.ac("id",t.id)("multiple",t.multiple)("accept",t.accept)("disabled",t.disabled),l.Ab("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedBy),l.zb(2),l.ac("ngIf",!t._hasPreviews))},directives:[i.i],styles:["[_nghost-%COMP%]{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{cursor:no-drop;opacity:.5;pointer-events:none}.expandable[_nghost-%COMP%]{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]}),e})(),z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Db({type:e,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,t){1&e&&(l.Wb(),l.Mb(0,"svg"),l.Kb(1,"line",0),l.Kb(2,"line",1),l.Lb())},styles:["[_nghost-%COMP%]{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke:#fff;stroke-width:2px}"]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({imports:[[i.b]]}),e})();function C(e,t){if(1&e){const e=l.Nb();l.Mb(0,"ngx-dropzone-preview",12),l.Ub("removed",function(){l.cc(e);const n=t.$implicit;return l.Xb().onRemove(n)}),l.Mb(1,"ngx-dropzone-label"),l.hc(2),l.Lb(),l.Lb()}if(2&e){const e=t.$implicit;l.ac("removable",!0),l.zb(2),l.jc("",e.name,")")}}function F(e,t){if(1&e){const e=l.Nb();l.Mb(0,"ngx-dropzone-preview",12),l.Ub("removed",function(){l.cc(e);const n=t.$implicit;return l.Xb().onRemove(n)}),l.Mb(1,"ngx-dropzone-label",13),l.hc(2),l.Mb(3,"span",14),l.hc(4,"Afvist"),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=t.$implicit;l.ac("removable",!0),l.zb(2),l.jc(" ",e.name,") ")}}function k(e,t){if(1&e&&(l.Mb(0,"p"),l.hc(1),l.Lb()),2&e){const e=l.Xb();l.zb(1),l.ic(e.fileEvaluation)}}function O(e,t){if(1&e){const e=l.Nb();l.Mb(0,"ion-button",15),l.Ub("click",function(){return l.cc(e),l.Xb().processFiles()}),l.hc(1,"GO!"),l.Lb()}}function P(e,t){if(1&e&&(l.Mb(0,"li"),l.hc(1),l.Lb()),2&e){const e=t.$implicit;l.zb(1),l.ic(e)}}function S(e,t){if(1&e&&(l.Mb(0,"ul"),l.gc(1,P,2,1,"li",18),l.Lb()),2&e){const e=l.Xb().$implicit,t=l.Xb(2);l.zb(1),l.ac("ngForOf",t.result[e])}}function D(e,t){if(1&e){const e=l.Nb();l.Mb(0,"li",17),l.Ub("click",function(){l.cc(e);const n=t.$implicit;return l.Xb(2).setShowDetails(n)}),l.hc(1),l.gc(2,S,2,1,"ul",10),l.Lb()}if(2&e){const e=t.$implicit,n=l.Xb(2);l.zb(1),l.kc(" ",e,": ",n.result[e].length," "),l.zb(1),l.ac("ngIf",n.showDetails==e)}}function E(e,t){if(1&e&&(l.Mb(0,"ion-card"),l.Mb(1,"ion-card-header"),l.Mb(2,"ion-card-subtitle"),l.hc(3,"RESULTAT"),l.Lb(),l.Mb(4,"ion-card-title"),l.hc(5,"Step 4"),l.Lb(),l.Lb(),l.Mb(6,"ion-card-content"),l.Mb(7,"p"),l.hc(8),l.Mb(9,"b"),l.hc(10),l.Lb(),l.Lb(),l.Mb(11,"ul"),l.gc(12,D,3,3,"li",16),l.Lb(),l.Lb(),l.Lb()),2&e){const e=l.Xb();l.zb(8),l.jc("Totalt antal bes\xf8g for ",e.year,": "),l.zb(2),l.ic(e.result.TOTAL),l.zb(2),l.ac("ngForOf",e.months)}}const j=[{path:"",component:(()=>{class e{constructor(e){this._s=e,this.searchString="niras",this.files=[],this.rejectedFiles=[],this.acceptedTypes=["json"],this.months=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]}onSelect(e){return a(this,void 0,void 0,function*(){const t=e.addedFiles.map(e=>this.addMetadata(e)).filter(e=>this.filterByType(e));this.files=this.files.concat(t),this.evaluateFiles(this.files)})}processFiles(){return a(this,void 0,void 0,function*(){try{this.result=yield this._s.processFiles(this.files,this.searchString)}catch(e){console.log(e),this.fileEvaluation="Noget gik galt ved l\xe6sing af filerne"}})}setShowDetails(e){this.showDetails=this.showDetails!=e?e:void 0}getShowDetails(e){return this.showDetails==e}onRemove(e){this.files=this.files.filter(t=>t.name!=e.name),this.rejectedFiles=this.rejectedFiles.filter(t=>t.name!=e.name)}evaluateFiles(e){if(e.length>12)return this.fileEvaluation="Det er kun muligt at evaluere \xe9t \xe5r og du har uploadet over 12 filer",!1;let t=[];e.forEach(e=>{this.year=e.name.split("_")[0];const n=e.name.split("_")[1].split(".json")[0];return-1==this.months.indexOf(n)?(this.fileEvaluation="Ukendt filnavn. Filer b\xf8r v\xe6re navngivet \xc5R_M\xc5NED.json (fx 2020_APRIL.json)",!1):-1!=t.indexOf(n)?(this.fileEvaluation="Fandt mere end \xe9n fil for m\xe5neden "+n,!1):void t.push(n)})}addMetadata(e){return e.fileExtension=e.name.match(/\.[0-9a-z]+$/i)[0].split(".")[1].toLowerCase(),e.fileSize=this.humanFileSize(e.size),e}filterByType(e){if(this.acceptedTypes.length){const t=-1!=this.acceptedTypes.indexOf(e.fileExtension);return t||this.rejectedFiles.push(e),t}return!0}humanFileSize(e){let t=0==e?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(c))},e.\u0275cmp=l.Db({type:e,selectors:[["app-home"]],features:[l.yb([c])],decls:51,vars:9,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["href","https://takeout.google.com/"],["src","/assets/takeout.png",1,"img"],["placeholder","Enter Input",3,"ngModel","ngModelChange"],[3,"multiple","change"],[3,"removable","removed",4,"ngFor","ngForOf"],[4,"ngIf"],["color","primary",3,"click",4,"ngIf"],[3,"removable","removed"],[1,"rejected"],[2,"font-size","12px"],["color","primary",3,"click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.hc(3," Befordringsberegner "),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content",1),l.Mb(5,"ion-header",2),l.Mb(6,"ion-toolbar"),l.Mb(7,"ion-title",3),l.hc(8,"Blank"),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"div",4),l.Mb(10,"p"),l.hc(11,"Dette er et simpelt v\xe6rkt\xf8j til at analysere din placeringshistorik fra Google Maps og bruge den til at bestemme hvor mange gange du i l\xf8bet af et \xe5r har v\xe6ret p\xe5 din arbejdsplads."),l.Kb(12,"br"),l.hc(13," Databehandlingen sker 100 % i din browser og vil dermed ikke blive videregivet til tredjepart."),l.Lb(),l.Mb(14,"ion-card"),l.Mb(15,"ion-card-header"),l.Mb(16,"ion-card-subtitle"),l.hc(17,"Download historik"),l.Lb(),l.Mb(18,"ion-card-title"),l.hc(19,"Step 1"),l.Lb(),l.Lb(),l.Mb(20,"ion-card-content"),l.Mb(21,"p"),l.hc(22,"Download din placeringshistorik fra "),l.Mb(23,"a",5),l.hc(24,"Google Takeout"),l.Lb(),l.Lb(),l.Kb(25,"img",6),l.Lb(),l.Lb(),l.Mb(26,"ion-card"),l.Mb(27,"ion-card-header"),l.Mb(28,"ion-card-subtitle"),l.hc(29,"Angiv navn p\xe5 arbejdsplads"),l.Lb(),l.Mb(30,"ion-card-title"),l.hc(31,"Step 2"),l.Lb(),l.Lb(),l.Mb(32,"ion-card-content"),l.Mb(33,"ion-input",7),l.Ub("ngModelChange",function(e){return t.searchString=e}),l.Lb(),l.Lb(),l.Lb(),l.Mb(34,"ion-card"),l.Mb(35,"ion-card-header"),l.Mb(36,"ion-card-subtitle"),l.hc(37,"Upload filer"),l.Lb(),l.Mb(38,"ion-card-title"),l.hc(39,"Step 3"),l.Lb(),l.Lb(),l.Mb(40,"ion-card-content"),l.Mb(41,"ngx-dropzone",8),l.Ub("change",function(e){return t.onSelect(e)}),l.Mb(42,"ngx-dropzone-label"),l.hc(43,"Drop filer her"),l.Lb(),l.gc(44,C,3,2,"ngx-dropzone-preview",9),l.gc(45,F,5,2,"ngx-dropzone-preview",9),l.Lb(),l.gc(46,k,2,1,"p",10),l.gc(47,O,2,0,"ion-button",11),l.Lb(),l.Lb(),l.gc(48,E,13,3,"ion-card",10),l.Mb(49,"p"),l.hc(50,"Udviklet med k\xe6rlighed af Mads Holten Rasmussen"),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.ac("translucent",!0),l.zb(4),l.ac("fullscreen",!0),l.zb(29),l.ac("ngModel",t.searchString),l.zb(8),l.ac("multiple",!0),l.zb(3),l.ac("ngForOf",t.files),l.zb(1),l.ac("ngForOf",t.rejectedFiles),l.zb(1),l.ac("ngIf",t.fileEvaluation),l.zb(1),l.ac("ngIf",t.files.length&&!t.fileEvaluation),l.zb(1),l.ac("ngIf",t.result))},directives:[o.i,o.m,o.l,o.h,o.c,o.e,o.f,o.g,o.d,o.j,o.p,r.d,r.e,w,v,i.h,i.i,_,o.b],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;padding-bottom:25px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.img[_ngcontent-%COMP%]{max-width:500px}li[_ngcontent-%COMP%]{list-style:none}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({imports:[[s.i.forChild(j)],s.i]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({imports:[[i.b,r.a,o.n,T,y]]}),e})()}}]);