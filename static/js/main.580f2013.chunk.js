(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(4),s=n.n(c),r=n(20),i=n.n(r),l=(n(26),n(7)),o=n(8),u=n.n(o),d=n(9),j=(n(28),n(15)),b=(n(29),n(13));var h=function(e){var t=e.children,n=e.modalOpen,c=e.okButton,s=e.cancelButton,r=e.onAccept,i=e.onCancel;return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"z-depth-5 modal open",children:[Object(a.jsx)("div",{className:"modal-content",children:t}),Object(a.jsxs)("div",{className:"modal-footer",children:[c&&Object(a.jsx)("button",{onClick:r,className:"modal-close waves-effect waves-green btn-flat btn",dangerouslySetInnerHTML:{__html:c}}),s&&Object(a.jsx)("button",{onClick:i,className:"modal-close waves-effect waves-red btn-flat btn left",dangerouslySetInnerHTML:{__html:s}})]})]}),Object(a.jsx)("div",{className:"backdrop",onClick:i})]}):""})};var p=function(e){return{name:e.name||"",checked:e.checked||!1,key:e.key||null,timestamp:e.timestamp||new Date,subtasks:e.subtasks||[],description:e.description||""}},m="Loading app...",f="<no name>",O="Quick-add a task...",k="Add a subtask to this task",x="Add a subtask",v="Subtasks",g=function(){var e=["\ud83d\ude01 All tasks completed!","Now that's what I call a clean list \ud83e\udd73","Wow, such empty \ud83d\udc4f","Finitto? Go for a cappucino \u2615\ufe0f","All tasks done, time for a break \ud83c\udfd6","So productive. I'm impressed \ud83d\ude0e"];return e[Math.floor(Math.random()*e.length)]},N="No completed tasks",y="Show completed tasks",w="Hide completed tasks",S="Save",C="Cancel changes",L="Notes",T="An optional description always helps",E="Projects",D="+ Add a new project",F="Enter a name for a new project",M=n(18);M.a.initializeApp({apiKey:"AIzaSyDxmJzv3ccl0_ouKB9oVSzWIsn6uysYMLQ",authDomain:"todo-list-react-33431.firebaseapp.com",databaseURL:"https://todo-list-react-33431.firebaseio.com",projectId:"todo-list-react-33431",storageBucket:"todo-list-react-33431.appspot.com",messagingSenderId:"153291173882",appId:"1:153291173882:web:4eb5673b9a70ce5828fe43",measurementId:"G-BCMCPMQHDB"});var I=M.a.database(),A="nicoemailcom",B={db:I,path:"",updateTask:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating task ",t.name),e.prev=1,e.next=4,I.ref("".concat(B.path,"/tasks/").concat(t.key)).update(t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.error("Error on update: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),addTask:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Added task ",t.name),e.prev=1,e.next=4,I.ref("".concat(B.path,"/tasks")).push(t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.error("Error on save: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),deleteTask:function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Deleting task ",t.name),!(n.findIndex((function(e){return e.key===t.key}))>=0)){e.next=5;break}return e.next=5,I.ref("".concat(B.path,"/tasks/").concat(t.key)).remove((function(){console.log('"'.concat(t.name,'" was removed!'))}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getTasks:function(e,t){B.path="lists/".concat(A,"/").concat(e);try{return I.ref(B.path).on("value",(function(e){var n=e.child("name").val(),a={key:e.key,name:n,tasks:[]};e.child("tasks").forEach((function(e){a.tasks.push(Object(j.a)({key:e.key,subtasks:[]},e.val()))})),t(a),console.log("List with tasks loaded: ",a.tasks.length)}))}catch(n){console.error("Error on fetching tasks: ",n)}},getLists:function(e){try{return I.ref("lists/".concat(A)).on("value",(function(t){var n=[];t.forEach((function(e){var t=e.val(),a=Object.values(t.tasks||""),c=a.filter((function(e){return e.checked})).length,s=a.length-c;n.push({key:e.key,name:t.name,openTasks:s,completedTasks:c})})),e(n),console.log("Lists loaded: ",n.length)}))}catch(t){console.error("Error on fetching tasks: ",t)}},saveListName:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating list name ",t),e.prev=1,e.next=4,I.ref("".concat(B.path)).update({name:t});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.error("Error on save name: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),newProject:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.ref("lists/".concat(A)).push({name:t});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("Error on create project: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},_=B;var z=function(e){var t=e.trigger,n=e.task,s=e.modalOpen,r=e.setModalOpen,i=Object(c.useState)(""),o=Object(l.a)(i,2),j=o[0],m=o[1],f=Object(c.useState)(n.subtasks||[]),O=Object(l.a)(f,2),x=O[0],g=O[1],N=Object(c.useState)(n.name||""),y=Object(l.a)(N,2),w=y[0],E=y[1],D=Object(c.useState)(n.description||""),F=Object(l.a)(D,2),M=F[0],I=F[1];function A(e,t){return B.apply(this,arguments)}function B(){return(B=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.key){e.next=5;break}return e.next=3,_.updateTask(t);case 3:e.next=6;break;case 5:_.addTask(p(t)).then((function(e){t.key=e.key}));case 6:r(!!n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.name=w,n.description=M,n.subtasks=x,e.next=6,A(n,!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:r(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){E(n.name||""),g(n.subtasks||[]),I(n.description||"")}),[n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:t.className,onClick:function(){return r(!0)},children:t.text}),Object(a.jsxs)(h,{modalOpen:s,onAccept:function(e){return P.apply(this,arguments)},onCancel:function(){return r(!1)},okButton:S+' <i class="material-icons right">save</i>',cancelButton:C+' <i class="material-icons right">cancel</i>',children:[Object(a.jsxs)("form",{onSubmit:z,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Task Name"}),Object(a.jsx)("input",{value:w,placeholder:"Enter a name for the task",onChange:function(e){return E(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:L}),Object(a.jsx)("textarea",{value:M,className:"materialize-textarea",placeholder:T,onChange:function(e){return I(e.target.value)}})]})]}),Object(a.jsxs)("ul",{className:"list-unstyled flex-column",children:[x.map((function(e){return Object(a.jsxs)("li",{title:e.timestamp,className:"block",children:[Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",checked:e.checked,id:e.key,onChange:function(){return(t=e).checked=!t.checked,void g(Object(b.a)(null===n||void 0===n?void 0:n.subtasks));var t}}),Object(a.jsx)("span",{children:" "})]}),Object(a.jsx)("span",{className:"left",children:e.name})]},e.key)})),Object(a.jsx)("li",{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g([].concat(Object(b.a)(x),[{key:Math.random(),timestamp:new Date,name:j,checked:!1}])),e.target[0].value=""},children:[Object(a.jsx)("label",{children:v}),Object(a.jsx)("input",{onChange:function(e){return m(e.target.value)},placeholder:k,className:"input-field"})]})},"new-subtask")]})]})]})};var K=function(e){var t=e.extraClass,n=e.task,s=e.setSubtasks,r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),h=j[0],p=j[1];return Object(a.jsxs)("ul",{className:"list-unstyled flex-column "+t,children:[(n.subtasks||[]).map((function(e){return Object(a.jsxs)("li",{title:e.timestamp,className:"block",children:[Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",checked:e.checked,id:e.key,onChange:function(){return(t=e).checked=!t.checked,_.updateTask(n),void s(n.subtasks);var t}}),Object(a.jsx)("span",{children:" "})]}),Object(a.jsx)("span",{className:"left",children:e.name})]},e.key)})),Object(a.jsx)("li",{children:h?Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),e.target[0].value="",p(!1),n.subtasks=[].concat(Object(b.a)(n.subtasks||[]),[{key:Math.random(),timestamp:new Date,name:o,checked:!1}]),_.updateTask(n)},children:Object(a.jsx)("input",{onChange:function(e){return u(e.target.value)},placeholder:k,autoFocus:!0,className:"input-field invisible"})}):Object(a.jsxs)("button",{className:"btn-flat subtle",onClick:function(){return p(!0)},children:[Object(a.jsx)("i",{className:"material-icons left",children:"add_circle_outline"}),x]})},"new-subtask")]})};var P=function(e){var t=e.task,n=e.onDelete,s=Object(c.useState)(t.subtasks||[]),r=Object(l.a)(s,2),i=r[0],o=r[1],b=Object(c.useState)(!!i.find((function(e){return!1===e.checked}))),h=Object(l.a)(b,2),p=h[0],m=h[1],f=Object(c.useState)(p),O=Object(l.a)(f,2),k=O[0],x=O[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),N=g[0],y=g[1];function w(){return(w=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.checked=!t.checked,e.next=3,_.updateTask(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){m(!!t.subtasks.find((function(e){return!1===e.checked})))}),[t.subtasks]),Object(a.jsxs)("li",{className:(t.checked?"done":"")+" parent-hover task",title:t.timestamp,children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",disabled:p,checked:t.checked,onChange:function(){return function(e){return w.apply(this,arguments)}(t)}}),Object(a.jsx)("span",{children:" "})]}),Object(a.jsx)("a",{href:"#!",className:"task-name "+(t.checked,""),onClick:function(){return y(!0)},children:t.name}),Object(a.jsxs)("span",{className:"right",children:[Object(a.jsx)("button",{className:"child-hover btn-subtle ml-5 material-icons right",onClick:function(){return n(t)},children:"delete"}),Object(a.jsx)("button",{className:"child-hover toggle-expand btn-subtle ml-5 material-icons right",onClick:function(){return x(!k)},children:"add"}),Object(a.jsx)(z,{trigger:{className:"child-hover btn-subtle ml-5 material-icons right",text:"edit"},task:Object(j.a)({},t),modalOpen:N,setModalOpen:y})]})]}),k&&Object(a.jsxs)(a.Fragment,{children:[t.description&&Object(a.jsx)("div",{className:"ml-50",children:Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{className:"subtle",children:[L,":"]})," ",t.description]})}),Object(a.jsx)(K,{extraClass:"ml-50",setSubtasks:o,subtasks:i,task:t})]})]})};var H=function(e){var t=e.list;return t.editListName?Object(a.jsx)("form",{onSubmit:t.saveListName,children:Object(a.jsx)("input",{className:"as-title h2 invisible",autoFocus:!0,onBlur:t.saveListName,value:t.listName||f,onChange:function(e){return t.setListName(e.target.value)}})}):Object(a.jsx)("h2",{className:"center-align",onClick:function(){return t.setEditListName(!0)},children:t.listName||f})};var J=function(e){var t=e.list,n=Object(c.useState)(!0),s=Object(l.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),b=j[0],h=j[1],m=Object(c.useState)(t.name),f=Object(l.a)(m,2),k=f[0],x=f[1],v=Object(c.useState)(!1),S=Object(l.a)(v,2),C=S[0],L=S[1],T=t.tasks.filter((function(e){return!e.checked})),E=t.tasks.filter((function(e){return!!e.checked})),D=Object(c.useMemo)((function(){return g()}),[T.length]),F="";function M(){return(M=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_.addTask(p({name:F}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_.saveListName(k);case 3:L(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(e){var t=e.submit,n=e.changed,c=e.deleteTask,s=e.completed,r=e.open,i=e.showCompleted,l=e.setShowCompleted,o=e.modalOpen,u=e.setModalOpen,d=e.allCompleted,j=e.list;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(H,{list:j}),r.length?Object(a.jsx)("ul",{className:"list-unstyled",children:r.map((function(e,t){return Object(a.jsx)(P,{task:e,onDelete:c},t)}))}):Object(a.jsx)("h4",{className:"left subtle center-align",children:d}),Object(a.jsx)("form",{className:"form-inline",onSubmit:t,children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:"input-group mb-2",children:Object(a.jsx)("input",{onChange:n,className:"invisible",placeholder:O,required:!0,autoComplete:"off",autoFocus:!0})})})}),s.length?i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("button",{className:"btn-flat",onClick:function(){return l(!1)},children:w}),Object(a.jsx)("ul",{className:"list-unstyled completed",children:s.map((function(e,t){return Object(a.jsx)(P,{task:e,onDelete:c},t)}))})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("button",{className:"btn-flat",onClick:function(){return l(!0)},children:y})]}):Object(a.jsx)("h5",{className:"left subtle center-align",children:N}),Object(a.jsx)(z,{trigger:{className:"btn-floating btn-large green fixed-action-btn",text:Object(a.jsx)("i",{className:"material-icons",children:"add"})},task:{},modalOpen:o,setModalOpen:u})]})}({open:T,completed:E,deleteTask:function(e){return _.deleteTask(e,t.tasks)},submit:function(e){return M.apply(this,arguments)},changed:function(e){F=e.target.value},showCompleted:r,setShowCompleted:i,modalOpen:b,allCompleted:D,setModalOpen:h,list:{listName:k,saveListName:function(e){return I.apply(this,arguments)},editListName:C,setEditListName:L,setListName:x}})};n(34);var Q=function(){return Object(a.jsx)("span",{className:"app-loader",children:Object(a.jsx)("span",{children:m})})};n(35);var U=function(e){var t=e.listKey,n=e.setListKey,s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(c.useState)(!1),d=Object(l.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),m=p[0],f=p[1];return Object(c.useEffect)((function(){_.getLists((function(e){o(e)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:E}),Object(a.jsxs)("ul",{className:"projects-list",children:[i.map((function(e){return Object(a.jsx)("li",{className:t===e.key?"selected":"",children:Object(a.jsxs)("button",{className:"btn-subtle",onClick:function(){return n(e.key)},children:[e.name," (",e.openTasks," ",Object(a.jsxs)("span",{className:"subtle",children:["/ ",e.completedTasks]}),")"]})},e.key)})),Object(a.jsx)("li",{children:j?Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),_.newProject(m).then((function(e){b(!1),f(""),console.log(n(e.key))}))},children:Object(a.jsx)("input",{className:"invisible subtle",onChange:function(e){return f(e.target.value)},value:m,autoFocus:!0,placeholder:F})}):Object(a.jsx)("button",{className:"btn-subtle subtle",onClick:function(){return b(!0)},children:D})})]})]})};var G=function(){var e=Object(c.useState)(window.location.hash.substring(1)||"0"),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),u=o[0],d=o[1],j=Object(c.useState)(!0),b=Object(l.a)(j,2),h=b[0],p=b[1],m=s.a.createContext(u.key);return Object(c.useEffect)((function(){return window.location.hash=n,_.getTasks(n,(function(e){d(e),p(!1)})),function(){_.db.ref(_.path).off("value")}}),[n]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container flex-column",id:"todo",children:h?Object(a.jsx)(Q,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"row",style:{width:"100%",margin:0},children:[Object(a.jsx)("div",{className:"col s3",children:Object(a.jsx)(U,{listKey:n,setListKey:r})}),Object(a.jsx)("div",{className:"col s9",children:Object(a.jsx)(m.Provider,{value:u.key,children:Object(a.jsx)(J,{list:u})})})]})})})})};i.a.render(Object(a.jsx)(G,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.580f2013.chunk.js.map