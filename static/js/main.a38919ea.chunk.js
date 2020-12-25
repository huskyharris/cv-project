(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{30:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r(1),n=r.n(o),i=r(15),c=r.n(i),s=r(6),d=r(7),l=r(9),u=r(8),m=r(16),p=r.n(m),h=r(17),j=r.n(h),f=(r(25),function(e){var t=e.title,r=e.type,o=e.id,n=e.update,i=e.val,c=e.err;return Object(a.jsxs)("div",{className:"half-box",children:[Object(a.jsx)("label",{htmlFor:o,children:t}),Object(a.jsx)("input",{className:"half-form form",type:r,id:o,value:i,onChange:n}),Object(a.jsx)("p",{className:"form-error",children:c})]})}),b=function(e){var t,r=e.title1,o=e.type1,n=e.id1,i=e.update1,c=e.val1,s=e.err1,d=e.title2,l=e.type2,u=e.id2,m=e.update2,p=e.val2,h=e.err2;return t="tel"===l?Object(a.jsxs)("div",{className:"half-box",children:[Object(a.jsx)("label",{htmlFor:u,children:d}),Object(a.jsx)(j.a,{country:"us",value:p,onChange:m}),Object(a.jsx)("p",{className:"form-error",children:h})]}):Object(a.jsx)(f,{title:d,type:l,id:u,update:m,val:p,err:h}),Object(a.jsxs)("div",{className:"box-container",children:[Object(a.jsx)(f,{title:r,type:o,id:n,update:i,val:c,err:s}),t]})},v=function(e){var t=e.title,r=e.type,o=e.id,n=e.update,i=e.val,c=e.err;return Object(a.jsxs)("div",{className:"single-box",children:[Object(a.jsx)("label",{htmlFor:o,children:t}),Object(a.jsx)("input",{className:"single-form form",type:r,id:o,value:i,onChange:n}),Object(a.jsx)("p",{className:"form-error",children:c})]})},E=function(e){var t=e.updateFirstName,r=e.updateLastName,o=e.updateEmail,n=e.updatePhone,i=e.updateAddress,c=e.updateCity,s=e.updateState,d=e.updateZip,l=e.firstName,u=e.lastName,m=e.email,p=e.phone,h=e.address,j=e.city,E=e.state,x=e.zip,S=e.submitData,y=e.firstNameError,O=e.lastNameError,M=e.emailError,Y=e.phoneError,g=e.addressError,N=e.cityError,F=e.stateError,w=e.zipError;return Object(a.jsxs)("form",{className:"edit-view",onSubmit:S,children:[Object(a.jsx)("h1",{className:"heading heading-text",children:"Contact Information"}),Object(a.jsx)(b,{title1:"First Name",type1:"text",id1:"firstName",update1:t,val1:l,err1:y,title2:"Last Name",type2:"text",id2:"lastName",update2:r,val2:u,err2:O}),Object(a.jsx)(b,{title1:"Email",type1:"email",id1:"email",update1:o,val1:m,err1:M,title2:"Phone",type2:"tel",id2:"phone",update2:n,val2:p,err2:Y}),Object(a.jsx)(v,{title:"Address",type:"text",id:"address",update:i,val:h,err:g}),Object(a.jsxs)("div",{className:"box-container",children:[Object(a.jsx)(f,{title:"City",type:"text",id:"city",update:c,val:j,err:N}),Object(a.jsx)(f,{title:"State",type:"text",id:"state",update:s,val:E,err:F}),Object(a.jsx)(f,{title:"Zip Code",type:"text",id:"zip",update:d,val:x,err:w})]}),Object(a.jsx)("div",{className:"btn-container-1",children:Object(a.jsx)("button",{className:"save-btn",type:"submit",children:"Save"})})]})},x=r(3),S=r(4),y=function(e){var t=e.firstName,r=e.lastName,o=e.email,n=e.phone,i=e.address,c=e.city,s=e.state,d=e.zip,l=e.toggleEdit,u="".concat(t," ").concat(r),m="".concat(i,", ").concat(c,", ").concat(s," ").concat(d);return Object(a.jsxs)("div",{className:"submitted-view",children:[Object(a.jsxs)("div",{className:"header edit-heading",children:[Object(a.jsx)("h1",{className:"heading-text",children:"Contact Information"}),Object(a.jsx)(x.a,{icon:S.a,className:"edit-icon",onClick:l})]}),Object(a.jsx)("p",{className:"submitted-line name",children:u}),Object(a.jsx)("p",{className:"submitted-line",children:o}),Object(a.jsx)("p",{className:"submitted-line",children:n}),Object(a.jsx)("p",{className:"submitted-line",children:m})]})},O=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).updateFirstName=function(t){e.setState({firstName:t.target.value})},e.updateLastName=function(t){e.setState({lastName:t.target.value})},e.updateEmail=function(t){e.setState({email:t.target.value})},e.updatePhone=function(t){e.setState({phone:t})},e.updateAddress=function(t){e.setState({address:t.target.value})},e.updateCity=function(t){e.setState({city:t.target.value})},e.updateState=function(t){e.setState({state:t.target.value})},e.updateZip=function(t){e.setState({zip:t.target.value})},e.submitForm=function(t){t.preventDefault(),e.validateForm()&&(e.resetErrors(),e.setState((function(e){return{edit:!e.edit}}),(function(){e.props.appEdit(e.state.edit)})))},e.openForm=function(){e.setState((function(e){return{edit:!e.edit}}),(function(){e.props.appEdit(e.state.edit)}))},e.resetErrors=function(){e.setState({firstNameError:"",lastNameError:"",emailError:"",phoneError:"",addressError:"",cityError:"",stateError:"",zipError:""}),document.querySelector("#firstName").classList.remove("invalid"),document.querySelector("#lastName").classList.remove("invalid"),document.querySelector("#email").classList.remove("invalid"),document.querySelector(".form-control").classList.remove("invalid"),document.querySelector("#address").classList.remove("invalid"),document.querySelector("#city").classList.remove("invalid"),document.querySelector("#state").classList.remove("invalid"),document.querySelector("#zip").classList.remove("invalid")},e.validateForm=function(){var t="",r="",a="",o="",n="",i="",c="",s="",d="This field is required";return""===e.state.firstName?(t=d,e.setState({firstNameError:t}),document.querySelector("#firstName").classList.add("invalid"),!1):""===e.state.lastName?(r=d,e.setState({lastNameError:r}),document.querySelector("#lastName").classList.add("invalid"),!1):""===e.state.email?(a=d,e.setState({emailError:a}),document.querySelector("#email").classList.add("invalid"),!1):""===e.state.phone?(o=d,e.setState({phoneError:o}),document.querySelector(".form-control").classList.add("invalid"),!1):""===e.state.address?(n=d,e.setState({addressError:n}),document.querySelector("#address").classList.add("invalid"),!1):""===e.state.city?(i=d,e.setState({cityError:i}),document.querySelector("#city").classList.add("invalid"),!1):""===e.state.state?(c=d,e.setState({stateError:c}),document.querySelector("#state").classList.add("invalid"),!1):""!==e.state.zip||(s=d,e.setState({zipError:s}),document.querySelector("#zip").classList.add("invalid"),!1)},e.state={firstName:"",lastName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",firstNameError:"",lastNameError:"",emailError:"",phoneError:"",addressError:"",cityError:"",stateError:"",zipError:"",edit:!0},e}return Object(d.a)(r,[{key:"render",value:function(){var e,t=this.state,r=t.firstName,o=t.lastName,n=t.email,i=t.phone,c=t.address,s=t.city,d=t.state,l=t.zip,u=t.firstNameError,m=t.lastNameError,p=t.emailError,h=t.phoneError,j=t.addressError,f=t.cityError,b=t.stateError,v=t.zipError;return e=this.state.edit?Object(a.jsx)(E,{updateFirstName:this.updateFirstName,updateLastName:this.updateLastName,updateEmail:this.updateEmail,updatePhone:this.updatePhone,updateAddress:this.updateAddress,updateCity:this.updateCity,updateState:this.updateState,updateZip:this.updateZip,firstName:r,lastName:o,email:n,phone:i,address:c,city:s,state:d,zip:l,submitData:this.submitForm,firstNameError:u,lastNameError:m,emailError:p,phoneError:h,addressError:j,cityError:f,stateError:b,zipError:v}):Object(a.jsx)(y,{firstName:r,lastName:o,email:n,phone:i,address:c,city:s,state:d,zip:l,toggleEdit:this.openForm}),Object(a.jsx)("div",{className:"contact-info-container",children:e})}}]),r}(o.Component),M=r(5),Y=r(11),g=r.n(Y),N=function(e){var t=e.text,r=e.fromMonth,o=e.updateFromMonth,n=e.fromYear,i=e.updateFromYear,c=e.toMonth,s=e.updateToMonth,d=e.toYear,l=e.updateToYear,u=e.fromMonthError,m=e.fromYearError;return Object(a.jsxs)("div",{className:"date-dbl-container",children:[Object(a.jsxs)("div",{className:"date-single-container",children:[Object(a.jsxs)("div",{className:"month-container",children:[Object(a.jsx)("label",{htmlFor:"from-month-dropdown",children:"From Month"}),Object(a.jsxs)("select",{id:"from-month-dropdown",value:r,onChange:o,children:[Object(a.jsx)("option",{name:"",value:"",disabled:!0,hidden:!0,children:"MM"}),Object(a.jsx)("option",{name:"January",value:"Jan",children:"January"}),Object(a.jsx)("option",{name:"February",value:"Feb",children:"February"}),Object(a.jsx)("option",{name:"March",value:"Mar",children:"March"}),Object(a.jsx)("option",{name:"April",value:"Apr",children:"April"}),Object(a.jsx)("option",{name:"May",value:"May",children:"May"}),Object(a.jsx)("option",{name:"June",value:"Jun",children:"June"}),Object(a.jsx)("option",{name:"July",value:"Jul",children:"July"}),Object(a.jsx)("option",{name:"August",value:"Aug",children:"August"}),Object(a.jsx)("option",{name:"September",value:"Sep",children:"September"}),Object(a.jsx)("option",{name:"October",value:"Oct",children:"October"}),Object(a.jsx)("option",{name:"November",value:"Nov",children:"November"}),Object(a.jsx)("option",{name:"December",value:"Dec",children:"December"})]}),Object(a.jsx)("p",{className:"form-error",children:u})]}),Object(a.jsxs)("div",{className:"year-container",children:[Object(a.jsx)("label",{htmlFor:"from-year",children:"Year(YYYY)"}),Object(a.jsx)("input",{type:"number",min:"1900",max:"2099",step:"1",placeholder:"YYYY",id:"from-year",value:n,onChange:i}),Object(a.jsx)("p",{className:"form-error",children:m})]})]}),Object(a.jsxs)("div",{className:"date-single-container",children:[Object(a.jsxs)("div",{className:"month-container",children:[Object(a.jsx)("label",{htmlFor:"to-month-dropdown",children:"To Month"}),Object(a.jsxs)("select",{id:"to-month-dropdown",value:c,onChange:s,children:[Object(a.jsx)("option",{name:"",value:"",disabled:!0,hidden:!0,children:"MM"}),Object(a.jsx)("option",{name:"January",value:"Jan",children:"January"}),Object(a.jsx)("option",{name:"February",value:"Feb",children:"February"}),Object(a.jsx)("option",{name:"March",value:"Mar",children:"March"}),Object(a.jsx)("option",{name:"April",value:"Apr",children:"April"}),Object(a.jsx)("option",{name:"May",value:"May",children:"May"}),Object(a.jsx)("option",{name:"June",value:"Jun",children:"June"}),Object(a.jsx)("option",{name:"July",value:"Jul",children:"July"}),Object(a.jsx)("option",{name:"August",value:"Aug",children:"August"}),Object(a.jsx)("option",{name:"September",value:"Sep",children:"September"}),Object(a.jsx)("option",{name:"October",value:"Oct",children:"October"}),Object(a.jsx)("option",{name:"November",value:"Nov",children:"November"}),Object(a.jsx)("option",{name:"December",value:"Dec",children:"December"})]})]}),Object(a.jsxs)("div",{className:"year-container",children:[Object(a.jsx)("label",{htmlFor:"to-year",children:"Year(YYYY)"}),Object(a.jsx)("input",{type:"number",min:"1900",max:"2099",step:"1",placeholder:"YYYY",id:"to-year",value:d,onChange:l})]}),Object(a.jsx)("p",{className:"notice-text",children:t})]})]})},F=function(e){var t=e.newStatus,r=e.cancel,o=e.id,n=e.deleteExp;return t?Object(a.jsxs)("div",{className:"btn-container",children:[Object(a.jsx)("button",{type:"submit",className:"save-btn",children:"Save"}),Object(a.jsx)("button",{type:"button",className:"cancel-btn",onClick:r,children:"Cancel"})]}):Object(a.jsxs)("div",{className:"edit-btn-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"submit",className:"save-btn",children:"Save"}),Object(a.jsx)("button",{type:"button",className:"cancel-btn",onClick:function(){return r(o)},children:"Cancel"})]}),Object(a.jsxs)("button",{type:"button",className:"trash-btn",onClick:function(){return n(o)},children:[Object(a.jsx)(x.a,{icon:S.c,className:"trash-icon"}),"Delete"]})]})},w=function(e){var t=e.updateTitle,r=e.title,o=e.updateCompany,n=e.company,i=e.updateLocation,c=e.location,s=e.fromMonth,d=e.updateFromMonth,l=e.fromYear,u=e.updateFromYear,m=e.toMonth,p=e.updateToMonth,h=e.toYear,j=e.updateToYear,f=e.description,E=e.updateDescription,x=e.edit,S=e.isNew,y=e.updateState,O=e.cancelForm,M=e.titleError,Y=e.companyError,g=e.locationError,w=e.fromMonthError,L=e.fromYearError;return S&&x?Object(a.jsxs)("form",{className:"edit-view",onSubmit:y,children:[Object(a.jsx)(v,{title:"Job Title",type:"text",id:"title",update:t,val:r,err:M}),Object(a.jsx)(b,{title1:"Company / Organization",type1:"text",id1:"company",update1:o,val1:n,err1:Y,title2:"Location",type2:"text",id2:"location",update2:i,val2:c,err2:g}),Object(a.jsx)(N,{text:"Leave blank if currently working here",fromMonth:s,updateFromMonth:d,fromYear:l,updateFromYear:u,toMonth:m,updateToMonth:p,toYear:h,updateToYear:j,fromMonthError:w,fromYearError:L}),Object(a.jsxs)("div",{className:"description-box",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"4",cols:"50",value:f,onChange:E})]}),Object(a.jsx)(F,{newStatus:S,cancel:O})]}):""},L=function(e){var t=e.exp,r=e.updateTitle,o=e.title,n=e.updateCompany,i=e.company,c=e.updateLocation,s=e.location,d=e.fromMonth,l=e.updateFromMonth,u=e.fromYear,m=e.updateFromYear,p=e.toMonth,h=e.updateToMonth,j=e.toYear,f=e.updateToYear,E=e.description,x=e.updateDescription,S=e.updateState,y=e.cancelForm,O=e.deleteExp,M=e.titleError,Y=e.companyError,g=e.locationError,w=e.fromMonthError,L=e.fromYearError;return Object(a.jsxs)("form",{className:"edit-view",onSubmit:function(e){return S(e,t.id)},children:[Object(a.jsx)(v,{title:"Job Title",type:"text",id:"title",update:r,val:o,err:M}),Object(a.jsx)(b,{title1:"Company / Organization",type1:"text",id1:"company",update1:n,val1:i,err1:Y,title2:"Location",type2:"text",id2:"location",update2:c,val2:s,err2:g}),Object(a.jsx)(N,{text:"Leave blank if currently working here",fromMonth:d,updateFromMonth:l,fromYear:u,updateFromYear:m,toMonth:p,updateToMonth:h,toYear:j,updateToYear:f,fromMonthError:w,fromYearError:L}),Object(a.jsxs)("div",{className:"description-box",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"4",cols:"50",value:E,onChange:x})]}),Object(a.jsx)(F,{newStatus:!1,cancel:y,id:t.id,deleteExp:O})]})},T=function(e){var t=e.experiences,r=e.toggleEditState,o=e.updateTitle,n=e.title,i=e.updateCompany,c=e.company,s=e.updateLocation,d=e.location,l=e.fromMonth,u=e.updateFromMonth,m=e.fromYear,p=e.updateFromYear,h=e.toMonth,j=e.updateToMonth,f=e.toYear,b=e.updateToYear,v=e.description,E=e.updateDescription,y=e.updateState,O=e.cancelForm,M=e.deleteExp,Y=e.titleError,g=e.companyError,N=e.locationError,F=e.fromMonthError,w=e.fromYearError,T=function(e){return""!==e.description?Object(a.jsx)("p",{className:"submitted-line",children:e.description}):""};return Object(a.jsx)("div",{children:t.map((function(e){var t,q,C="".concat(e.title,", ").concat(e.company),A="".concat(e.fromMonth," ").concat(e.fromYear," - ").concat((t=e.toMonth,q=e.toYear,""===t||""===q?"Present":"".concat(t," ").concat(q)));return e.editState?Object(a.jsx)(L,{exp:e,updateTitle:o,title:n,updateCompany:i,company:c,updateLocation:s,location:d,fromMonth:l,updateFromMonth:u,fromYear:m,updateFromYear:p,toMonth:h,updateToMonth:j,toYear:f,updateToYear:b,description:v,updateDescription:E,updateState:y,cancelForm:O,deleteExp:M,titleError:Y,companyError:g,locationError:N,fromMonthError:F,fromYearError:w},e.id):Object(a.jsxs)("div",{id:e.id,className:"exp-container",children:[Object(a.jsxs)("div",{className:"exp-header-container",children:[Object(a.jsx)("p",{className:"exp-title submitted-line",children:C}),Object(a.jsx)("div",{className:"icon-wrapper",children:Object(a.jsx)(x.a,{icon:S.a,className:"exp-pencil submitted-line",onClick:r})})]}),Object(a.jsx)("p",{className:"submitted-line",children:e.location}),Object(a.jsx)("p",{className:"submitted-line",children:A}),T(e)]},e.id)}))})},q=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).updateTitle=function(t){e.setState({title:t.target.value})},e.updateCompany=function(t){e.setState({company:t.target.value})},e.updateLocation=function(t){e.setState({location:t.target.value})},e.updateFromMonth=function(t){e.setState({fromMonth:t.target.value})},e.updateFromYear=function(t){e.setState({fromYear:t.target.value})},e.updateToMonth=function(t){e.setState({toMonth:t.target.value})},e.updateToYear=function(t){e.setState({toYear:t.target.value})},e.updateDescription=function(t){e.setState({description:t.target.value})},e.resetStateVals=function(){e.setState({title:"",company:"",location:"",fromMonth:"",fromYear:"",toMonth:"",toYear:"",description:"",edit:!1,newForm:!1},(function(){e.props.appEdit(e.state.edit)}))},e.toggleEditState=function(t){var r=t.target.closest(".icon-wrapper");if(r){var a=r.parentElement.parentElement.id,o=Object(M.a)(e.state.experiences),n=o.findIndex((function(e){return e.id===a})),i=o[n];i.editState=!0,e.setState((function(e){return{edit:!e.edit,experiences:o}}),(function(){e.props.appEdit(e.state.edit)})),e.updateStateVals(i),e.disableBtns()}},e.cancelEdit=function(t){var r=Object(M.a)(e.state.experiences),a=r.findIndex((function(e){return e.id===t}));r[a].editState=!1,e.resetStateVals(),e.setState({experiences:r}),e.enableBtns(),e.resetErrors()},e.deleteExp=function(t){e.resetStateVals(),e.setState({experiences:e.state.experiences.filter((function(e){return e.id!==t}))}),e.enableBtns(),e.resetErrors()},e.submitEditChanges=function(t,r){if(t.preventDefault(),e.validateForm()){var a=Object(M.a)(e.state.experiences),o=a.findIndex((function(e){return e.id===r})),n=a[o];n.title=e.state.title,n.company=e.state.company,n.location=e.state.location,n.fromMonth=e.state.fromMonth,n.fromYear=e.state.fromYear,n.toMonth=e.state.toMonth,n.toYear=e.state.toYear,n.description=e.state.description,n.editState=!1,e.resetStateVals(),e.setState({experiences:a}),e.enableBtns(),e.resetErrors()}},e.toggleNewForm=function(t){t.preventDefault(),e.setState((function(e){return{newForm:!e.newForm,edit:!e.edit}}),(function(){e.props.appEdit(e.state.edit)})),e.disableBtns()},e.disableBtns=function(){Array.from(document.querySelectorAll(".icon-wrapper")).forEach((function(e){return e.classList.add("disable-cursor")})),Array.from(document.querySelectorAll(".plus-icon")).forEach((function(e){return e.classList.add("disable")})),Array.from(document.querySelectorAll(".exp-pencil")).forEach((function(e){return e.classList.add("disable")}))},e.enableBtns=function(){Array.from(document.querySelectorAll(".icon-wrapper")).forEach((function(e){return e.classList.remove("disable-cursor")})),Array.from(document.querySelectorAll(".plus-icon")).forEach((function(e){return e.classList.remove("disable")})),Array.from(document.querySelectorAll(".exp-pencil")).forEach((function(e){return e.classList.remove("disable")}))},e.cancelNewform=function(){e.resetStateVals(),e.setState({newForm:!1}),e.enableBtns(),e.resetErrors()},e.addExp=function(t){if(t.preventDefault(),e.validateForm()){var r={id:g()(),title:e.state.title,company:e.state.company,location:e.state.location,fromMonth:e.state.fromMonth,fromYear:e.state.fromYear,toMonth:e.state.toMonth,toYear:e.state.toYear,description:e.state.description,editState:!1};e.cancelNewform();var a=Object(M.a)(e.state.experiences);a.unshift(r),e.setState({experiences:a})}},e.updateStateVals=function(t){e.setState({title:t.title,company:t.company,location:t.location,fromMonth:t.fromMonth,fromYear:t.fromYear,toMonth:t.toMonth,toYear:t.toYear,description:t.description})},e.validateForm=function(){var t="",r="",a="",o="",n="",i="This field is required";return""===e.state.title?(t=i,e.setState({titleError:t}),document.querySelector("#title").classList.add("invalid"),!1):""===e.state.company?(r=i,e.setState({companyError:r}),document.querySelector("#company").classList.add("invalid"),!1):""===e.state.location?(a=i,e.setState({locationError:a}),document.querySelector("#location").classList.add("invalid"),!1):""===e.state.fromMonth?(o="required",e.setState({fromMonthError:o}),document.querySelector("#from-month-dropdown").classList.add("invalid"),!1):""!==e.state.fromYear||(n="required",e.setState({fromYearError:n}),document.querySelector("#from-year").classList.add("invalid"),!1)},e.resetErrors=function(){e.setState({titleError:"",companyError:"",locationError:"",fromMonthError:"",fromYearError:""}),document.querySelector("#title").classList.remove("invalid"),document.querySelector("#company").classList.remove("invalid"),document.querySelector("#location").classList.remove("invalid"),document.querySelector("#from-month-dropdown").classList.remove("invalid"),document.querySelector("#from-year").classList.remove("invalid")},e.state={title:"",company:"",location:"",fromMonth:"",fromYear:"",toMonth:"",toYear:"",description:"",titleError:"",companyError:"",locationError:"",fromMonthError:"",fromYearError:"",edit:!1,newForm:!1,experiences:[]},e}return Object(d.a)(r,[{key:"render",value:function(){var e=this.state,t=e.title,r=e.company,o=e.location,n=e.fromMonth,i=e.fromYear,c=e.toMonth,s=e.toYear,d=e.description,l=e.titleError,u=e.companyError,m=e.locationError,p=e.fromMonthError,h=e.fromYearError,j=e.edit,f=e.newForm,b=e.experiences;return Object(a.jsxs)("div",{className:"work-exp-container",children:[Object(a.jsxs)("div",{className:"heading",id:"work-exp-header",children:[Object(a.jsx)("h1",{className:"heading-text",children:"Work Experience"}),Object(a.jsx)("div",{className:"icon-wrapper",children:Object(a.jsx)(x.a,{icon:S.b,className:"plus-icon",onClick:this.toggleNewForm})})]}),Object(a.jsx)(w,{updateTitle:this.updateTitle,title:t,updateCompany:this.updateCompany,company:r,updateLocation:this.updateLocation,location:o,fromMonth:n,updateFromMonth:this.updateFromMonth,fromYear:i,updateFromYear:this.updateFromYear,toMonth:c,updateToMonth:this.updateToMonth,toYear:s,updateToYear:this.updateToYear,description:d,updateDescription:this.updateDescription,edit:j,isNew:f,updateState:this.addExp,cancelForm:this.cancelNewform,titleError:l,companyError:u,locationError:m,fromMonthError:p,fromYearError:h}),Object(a.jsx)(T,{experiences:b,toggleEditState:this.toggleEditState,updateTitle:this.updateTitle,title:t,updateCompany:this.updateCompany,company:r,updateLocation:this.updateLocation,location:o,fromMonth:n,updateFromMonth:this.updateFromMonth,fromYear:i,updateFromYear:this.updateFromYear,toMonth:c,updateToMonth:this.updateToMonth,toYear:s,updateToYear:this.updateToYear,description:d,updateDescription:this.updateDescription,updateState:this.submitEditChanges,cancelForm:this.cancelEdit,deleteExp:this.deleteExp,titleError:l,companyError:u,locationError:m,fromMonthError:p,fromYearError:h})]})}}]),r}(o.Component),C=function(e){var t=e.updateSchool,r=e.school,o=e.updateDegree,n=e.degree,i=e.updateMajor,c=e.major,s=e.updateMinor,d=e.minor,l=e.updateFromMonth,u=e.fromMonth,m=e.updateFromYear,p=e.fromYear,h=e.updateToMonth,j=e.toMonth,f=e.updateToYear,E=e.toYear,x=e.edit,S=e.isNew,y=e.updateState,O=e.cancelForm,M=e.schoolError,Y=e.degreeError,g=e.majorError,w=e.fromMonthError,L=e.fromYearError;return S&&x?Object(a.jsxs)("form",{className:"edit-view",onSubmit:y,children:[Object(a.jsx)(v,{title:"School Name",type:"text",id:"school",update:t,val:r,err:M}),Object(a.jsx)(v,{title:"Level of Education / Degree",type:"text",id:"degree",update:o,val:n,err:Y}),Object(a.jsx)(b,{title1:"Major",type1:"text",id1:"major",update1:i,val1:c,err1:g,title2:"Minor",type2:"text",id2:"minor",update2:s,val2:d}),Object(a.jsx)(N,{text:"Or expected graduation date",fromMonth:u,updateFromMonth:l,fromYear:p,updateFromYear:m,toMonth:j,updateToMonth:h,toYear:E,updateToYear:f,fromMonthError:w,fromYearError:L}),Object(a.jsx)(F,{newStatus:S,cancel:O})]}):""},A=function(e){var t=e.edu,r=e.updateSchool,o=e.school,n=e.updateDegree,i=e.degree,c=e.updateMajor,s=e.major,d=e.updateMinor,l=e.minor,u=e.updateFromMonth,m=e.fromMonth,p=e.updateFromYear,h=e.fromYear,j=e.updateToMonth,f=e.toMonth,E=e.updateToYear,x=e.toYear,S=e.updateState,y=e.cancelForm,O=e.deleteEdu,M=e.schoolError,Y=e.degreeError,g=e.majorError,w=e.fromMonthError,L=e.fromYearError;return Object(a.jsxs)("form",{className:"edit-view",onSubmit:function(e){return S(e,t.id)},children:[Object(a.jsx)(v,{title:"School Name",type:"text",id:"school",update:r,val:o,err:M}),Object(a.jsx)(v,{title:"Level of Education / Degree",type:"text",id:"degree",update:n,val:i,err:Y}),Object(a.jsx)(b,{title1:"Major",type1:"text",id1:"major",update1:c,val1:s,err1:g,title2:"Minor",type2:"text",id2:"minor",update2:d,val2:l}),Object(a.jsx)(N,{text:"Or expected graduation date",fromMonth:m,updateFromMonth:u,fromYear:h,updateFromYear:p,toMonth:f,updateToMonth:j,toYear:x,updateToYear:E,fromMonthError:w,fromYearError:L}),Object(a.jsx)(F,{newStatus:!1,cancel:y,id:t.id,deleteExp:O})]})},D=function(e){var t=e.educations,r=e.toggleEditState,o=e.updateSchool,n=e.school,i=e.updateDegree,c=e.degree,s=e.updateMajor,d=e.major,l=e.updateMinor,u=e.minor,m=e.updateFromMonth,p=e.fromMonth,h=e.updateFromYear,j=e.fromYear,f=e.updateToMonth,b=e.toMonth,v=e.updateToYear,E=e.toYear,y=e.updateState,O=e.cancelForm,M=e.deleteEdu,Y=e.schoolError,g=e.degreeError,N=e.majorError,F=e.fromMonthError,w=e.fromYearError;return Object(a.jsx)("div",{children:t.map((function(e){var t,L,T,q="".concat(e.degree,", ").concat(e.major).concat(""!==(t=e.minor)?", Minor in ".concat(t):""),C="".concat(e.fromMonth," ").concat(e.fromYear," - ").concat((L=e.toMonth,T=e.toYear,""===L||""===T?"Current":"".concat(L," ").concat(T)));return e.editState?Object(a.jsx)(A,{edu:e,updateSchool:o,school:n,updateDegree:i,degree:c,updateMajor:s,major:d,updateMinor:l,minor:u,updateFromMonth:m,fromMonth:p,updateFromYear:h,fromYear:j,updateToMonth:f,toMonth:b,updateToYear:v,toYear:E,updateState:y,cancelForm:O,deleteEdu:M,schoolError:Y,degreeError:g,majorError:N,fromMonthError:F,fromYearError:w},e.id):Object(a.jsxs)("div",{id:e.id,className:"exp-container",children:[Object(a.jsxs)("div",{className:"exp-header-container",children:[Object(a.jsx)("p",{className:"exp-title submitted-line",children:e.school}),Object(a.jsx)("div",{className:"icon-wrapper",children:Object(a.jsx)(x.a,{icon:S.a,className:"exp-pencil submitted-line",onClick:r})})]}),Object(a.jsx)("p",{className:"submitted-line",children:q}),Object(a.jsx)("p",{className:"submitted-line",children:C})]},e.id)}))})},k=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).updateSchool=function(t){e.setState({school:t.target.value})},e.updateDegree=function(t){e.setState({degree:t.target.value})},e.updateMajor=function(t){e.setState({major:t.target.value})},e.updateMinor=function(t){e.setState({minor:t.target.value})},e.updateFromMonth=function(t){e.setState({fromMonth:t.target.value})},e.updateFromYear=function(t){e.setState({fromYear:t.target.value})},e.updateToMonth=function(t){e.setState({toMonth:t.target.value})},e.updateToYear=function(t){e.setState({toYear:t.target.value})},e.resetStateVals=function(){e.setState({school:"",degree:"",major:"",minor:"",fromMonth:"",fromYear:"",toMonth:"",toYear:"",edit:!1,newForm:!1},(function(){e.props.appEdit(e.state.edit)}))},e.toggleEditState=function(t){var r=t.target.closest(".icon-wrapper");if(r){var a=r.parentElement.parentElement.id,o=Object(M.a)(e.state.educations),n=o.findIndex((function(e){return e.id===a})),i=o[n];i.editState=!0,e.setState((function(e){return{edit:!e.edit,educations:o}}),(function(){e.props.appEdit(e.state.edit)})),e.updateStateVals(i),e.disableBtns()}},e.cancelEdit=function(t){var r=Object(M.a)(e.state.educations),a=r.findIndex((function(e){return e.id===t}));r[a].editState=!1,e.resetStateVals(),e.setState({educations:r}),e.enableBtns(),e.resetErrors()},e.deleteEdu=function(t){e.resetStateVals(),e.setState({educations:e.state.educations.filter((function(e){return e.id!==t}))}),e.enableBtns(),e.resetErrors()},e.submitEditChanges=function(t,r){if(t.preventDefault(),e.validateForm()){var a=Object(M.a)(e.state.educations),o=a.findIndex((function(e){return e.id===r})),n=a[o];n.school=e.state.school,n.degree=e.state.degree,n.major=e.state.major,n.minor=e.state.minor,n.fromMonth=e.state.fromMonth,n.fromYear=e.state.fromYear,n.toMonth=e.state.toMonth,n.toYear=e.state.toYear,n.editState=!1,e.resetStateVals(),e.setState({educations:a}),e.enableBtns(),e.resetErrors()}},e.toggleNewForm=function(){e.setState((function(e){return{newForm:!e.newForm,edit:!e.edit}}),(function(){e.props.appEdit(e.state.edit)})),e.disableBtns()},e.disableBtns=function(){Array.from(document.querySelectorAll(".icon-wrapper")).forEach((function(e){return e.classList.add("disable-cursor")})),Array.from(document.querySelectorAll(".plus-icon")).forEach((function(e){return e.classList.add("disable")})),Array.from(document.querySelectorAll(".exp-pencil")).forEach((function(e){return e.classList.add("disable")}))},e.enableBtns=function(){Array.from(document.querySelectorAll(".icon-wrapper")).forEach((function(e){return e.classList.remove("disable-cursor")})),Array.from(document.querySelectorAll(".plus-icon")).forEach((function(e){return e.classList.remove("disable")})),Array.from(document.querySelectorAll(".exp-pencil")).forEach((function(e){return e.classList.remove("disable")}))},e.cancelNewform=function(){e.resetStateVals(),e.setState({newForm:!1}),e.enableBtns(),e.resetErrors()},e.addEdu=function(t){if(t.preventDefault(),e.validateForm()){var r={id:g()(),school:e.state.school,degree:e.state.degree,major:e.state.major,minor:e.state.minor,fromMonth:e.state.fromMonth,fromYear:e.state.fromYear,toMonth:e.state.toMonth,toYear:e.state.toYear,editState:!1};e.cancelNewform();var a=Object(M.a)(e.state.educations);a.unshift(r),e.setState({educations:a})}},e.updateStateVals=function(t){e.setState({school:t.school,degree:t.degree,major:t.major,minor:t.minor,fromMonth:t.fromMonth,fromYear:t.fromYear,toMonth:t.toMonth,toYear:t.toYear})},e.validateForm=function(){var t="",r="",a="",o="",n="",i="This field is required";return""===e.state.school?(t=i,e.setState({schoolError:t}),document.querySelector("#school").classList.add("invalid"),!1):""===e.state.degree?(r=i,e.setState({degreeError:r}),document.querySelector("#degree").classList.add("invalid"),!1):""===e.state.major?(a=i,e.setState({majorError:a}),document.querySelector("#major").classList.add("invalid"),!1):""===e.state.fromMonth?(o="required",e.setState({fromMonthError:o}),document.querySelector("#from-month-dropdown").classList.add("invalid"),!1):""!==e.state.fromYear||(n="required",e.setState({fromYearError:n}),document.querySelector("#from-year").classList.add("invalid"),!1)},e.resetErrors=function(){e.setState({schoolError:"",degreeError:"",majorError:"",fromMonthError:"",fromYearError:""}),document.querySelector("#school").classList.remove("invalid"),document.querySelector("#degree").classList.remove("invalid"),document.querySelector("#major").classList.remove("invalid"),document.querySelector("#from-month-dropdown").classList.remove("invalid"),document.querySelector("#from-year").classList.remove("invalid")},e.state={school:"",degree:"",major:"",minor:"",fromMonth:"",fromYear:"",toMonth:"",toYear:"",schoolError:"",degreeError:"",majorError:"",fromMonthError:"",fromYearError:"",edit:!1,newForm:!1,educations:[]},e}return Object(d.a)(r,[{key:"render",value:function(){var e=this.state,t=e.school,r=e.degree,o=e.major,n=e.minor,i=e.fromMonth,c=e.fromYear,s=e.toMonth,d=e.toYear,l=e.schoolError,u=e.degreeError,m=e.majorError,p=e.fromMonthError,h=e.fromYearError,j=e.edit,f=e.newForm,b=e.educations;return Object(a.jsxs)("div",{className:"work-exp-container",children:[Object(a.jsxs)("div",{className:"heading",id:"work-exp-header",children:[Object(a.jsx)("h1",{className:"heading-text",children:"Education"}),Object(a.jsx)("div",{className:"icon-wrapper",children:Object(a.jsx)(x.a,{icon:S.b,className:"plus-icon",onClick:this.toggleNewForm})})]}),Object(a.jsx)(C,{updateSchool:this.updateSchool,school:t,updateDegree:this.updateDegree,degree:r,updateMajor:this.updateMajor,major:o,updateMinor:this.updateMinor,minor:n,updateFromMonth:this.updateFromMonth,fromMonth:i,updateFromYear:this.updateFromYear,fromYear:c,updateToMonth:this.updateToMonth,toMonth:s,updateToYear:this.updateToYear,toYear:d,edit:j,isNew:f,updateState:this.addEdu,cancelForm:this.cancelNewform,schoolError:l,degreeError:u,majorError:m,fromMonthError:p,fromYearError:h}),Object(a.jsx)(D,{educations:b,toggleEditState:this.toggleEditState,updateSchool:this.updateSchool,school:t,updateDegree:this.updateDegree,degree:r,updateMajor:this.updateMajor,major:o,updateMinor:this.updateMinor,minor:n,updateFromMonth:this.updateFromMonth,fromMonth:i,updateFromYear:this.updateFromYear,fromYear:c,updateToMonth:this.updateToMonth,toMonth:s,updateToYear:this.updateToYear,toYear:d,updateState:this.submitEditChanges,cancelForm:this.cancelEdit,deleteEdu:this.deleteEdu,schoolError:l,degreeError:u,majorError:m,fromMonthError:p,fromYearError:h})]})}}]),r}(o.Component),B=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).toggleBtnState=function(){e.state.contactEditState||e.state.workExpEditState||e.state.educationEditState?document.querySelector("#create-pdf-btn").style.opacity=.25:document.querySelector("#create-pdf-btn").style.opacity=1},e.setContactState=function(t){e.setState({contactEditState:t},(function(){return e.toggleBtnState()}))},e.setWorkExpEditState=function(t){e.setState({workExpEditState:t},(function(){return e.toggleBtnState()}))},e.setEducationEditState=function(t){e.setState({educationEditState:t},(function(){return e.toggleBtnState()}))},e.createPDF=function(){if(!e.state.contactEditState&&!e.state.workExpEditState&&!e.state.educationEditState){var t=document.querySelector(".edit-icon"),r=Array.from(document.querySelectorAll(".icon-wrapper"));t.style.display="none",r.forEach((function(e){e.style.display="none"}));var a=document.querySelector("#main-content");p()().from(a).save("resume.pdf"),t.style.display="inline-block",r.forEach((function(e){e.style.display="block"}))}},e.state={contactEditState:!0,workExpEditState:!1,educationEditState:!1},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{className:"main-title",children:"CV Builder"}),Object(a.jsxs)("div",{id:"main-content",children:[Object(a.jsx)(O,{appEdit:this.setContactState}),Object(a.jsx)(q,{appEdit:this.setWorkExpEditState}),Object(a.jsx)(k,{appEdit:this.setEducationEditState})]}),Object(a.jsx)("button",{id:"create-pdf-btn",type:"button",onClick:this.createPDF,children:"Create PDF"})]})}}]),r}(o.Component);r(30);c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a38919ea.chunk.js.map