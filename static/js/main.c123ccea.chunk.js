(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{48:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(3),r=n.n(c),s=n(41),i=n.n(s),o=(n(48),n(6)),l=n(26),u=n(11),d=n(5),j=n.n(d),b=n(10),h=n(7),p=n(17),m=n.n(p),f={url:"https://us-central1-todo-list-react-33431.cloudfunctions.net/api"},O=n(24);O.a.initializeApp({apiKey:"AIzaSyDxmJzv3ccl0_ouKB9oVSzWIsn6uysYMLQ",databaseURL:"https://todo-list-react-33431.firebaseio.com",projectId:"todo-list-react-33431"});O.a.analytics;var x=O.a.auth,v=O.a.firestore;function g(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new TextEncoder("utf-8").encode(t),e.next=3,crypto.subtle.digest("SHA-1",n);case 3:return a=e.sent,e.abrupt("return",Array.from(new Uint8Array(a)).map((function(e){return e.toString(16).padStart(2,"0")})).join(""));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={authState:function(e){x().onAuthStateChanged(e)},signup:function(e){var t={password:e.password,email:e.email};return g(e.password).then((function(t){return e.password=t,g(e.confirm)})).then((function(t){return e.confirm=t,m()({url:"".concat(f.url,"/signup"),method:"POST",data:e})})).then((function(e){return N.login(t)}))},login:function(e){var t;return g(e.password).then((function(t){return x().signInWithEmailAndPassword(e.email,t)})).then((function(e){return localStorage.setItem("uid",JSON.stringify(e.user.uid)),t=e,x().currentUser.getIdToken()})).then((function(e){return localStorage.setItem("AuthToken",e),t}))}};var w=function(){var e=Object(c.useState)(!!localStorage.getItem("user")),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({email:"nico@kupfer.es",username:"nicojones",password:"abcdef",confirm:"abcdef",name:"Nico Jones"}),i=Object(o.a)(s,2),l=i[0],d=i[1];function p(){return(p=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N.signup(l).then((function(e){e.user?(d({}),r(!0)):(alert("error! please see console"),console.log(e))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(u.a,{to:"/app"}):Object(a.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},className:"flex-center-self",children:[Object(a.jsx)("input",{value:l.email||"",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{email:e.target.value}))},placeholder:"email",type:"email",required:!0}),Object(a.jsx)("input",{value:l.name||"",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{name:e.target.value}))},placeholder:"name",required:!0}),Object(a.jsx)("input",{value:l.username||"",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{username:e.target.value}))},placeholder:"username",required:!0}),Object(a.jsx)("input",{value:l.password||"",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{password:e.target.value}))},placeholder:"password",type:"password",required:!0}),Object(a.jsx)("input",{value:l.confirm||"",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{confirm:e.target.value}))},placeholder:"confirm",type:"password",required:!0}),Object(a.jsx)("button",{type:"submit",className:"btn",children:"sign up"})]})})};var S=function(){var e=Object(c.useState)({email:"nico@kupfer.es",password:"abcdef"}),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!!localStorage.getItem("user")),i=Object(o.a)(s,2),l=i[0],d=i[1];return Object(a.jsx)(a.Fragment,{children:l?Object(a.jsx)(u.a,{to:"/app"}):Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.login(n).then((function(e){e.user?(r({}),d(!0)):(alert("error! please see console"),console.log(e))}))},className:"flex-center-self",children:[Object(a.jsx)("input",{value:n.email||"",onChange:function(e){return r(Object(b.a)(Object(b.a)({},n),{},{email:e.target.value}))},placeholder:"email",type:"email"}),Object(a.jsx)("input",{value:n.password||"",onChange:function(e){return r(Object(b.a)(Object(b.a)({},n),{},{password:e.target.value}))},placeholder:"password",type:"password"}),Object(a.jsx)("button",{type:"submit",children:"log in"})]})})},y=function(e,t){console.error(e,t),["401","403"].indexOf(t.toString().split(" ").pop())>=0&&(localStorage.removeItem("user"),localStorage.removeItem("AuthToken"),window.location.replace("/login"))},C={db:v(),headers:function(){return{authorization:localStorage.getItem("AuthToken")}},updateTask:function(){var e=Object(h.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Updating task ",n.name),e.prev=1,e.next=4,m()({url:f.url+"/project/".concat(t,"/task/").concat(n.id),method:"PUT",data:n,headers:C.headers()}).then((function(e){console.info("result from PUT",e)}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),y("Error on save task: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),addTask:function(){var e=Object(h.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Adding task ",n.name),e.prev=1,e.next=4,m()({url:f.url+"/project/".concat(t,"/task"),method:"POST",data:n,headers:C.headers()}).then((function(e){console.info("result from POST",e)}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),y("Error on save task: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),deleteTask:function(){var e=Object(h.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Deleting task ",n.name,n.id),e.prev=1,e.next=4,m()({url:f.url+"/project/".concat(t,"/task/").concat(n.id),method:"DELETE",headers:C.headers()}).then((function(e){console.info("result from DELETE",e)}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),y("Error on delete task: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),getTasksForProject:function(e,t){try{return C.db.collection("/projects/".concat(e,"/tasks")).onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(Object(b.a)({id:e.id},e.data()))})),t(n)}))}catch(n){y("Error on fetching tasks: ",n)}}},P=C,T={db:v(),headers:function(){return{authorization:localStorage.getItem("AuthToken")}},getProject:function(e,t){try{return T.db.doc("/projects/".concat(e)).onSnapshot((function(e){var n=e.data();n.id=e.id,console.info('Changed to project "'.concat(n.name,'"')),t(n)}))}catch(n){y("Error on fetching Project: ",n)}},getListOfProjects:function(e){try{return T.db.collection("/projects").where("uids","array-contains",x().currentUser.uid).onSnapshot((function(t){var n=[];t.forEach((function(e){var t=e.data(),a=Object.values(t.tasks||""),c=a.filter((function(e){return e.checked})).length,r=a.length-c;n.push({id:e.id,name:t.name,shared:t.shared,openTasks:r,completedTasks:c})})),e(n),console.info("Lists loaded: ",n.length)}))}catch(t){y("Error on fetching tasks: ",t)}},saveListName:function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Updating project ",t),e.prev=1,e.next=4,m()({url:f.url+"/project/".concat(t.id),method:"PUT",data:t,headers:T.headers()}).then((function(e){console.info("result from Edit Project PUT",e)}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),y("Error on save project name: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),newProject:function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()({url:f.url+"/project",method:"POST",data:t,headers:T.headers()}).then((function(e){return console.info(e.data.message),e.data.project}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),y("Error on create project: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),deleteProject:function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()({url:f.url+"/project/".concat(t.id),method:"DELETE",headers:T.headers()}).then((function(e){console.info("result from project DELETE",e)}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),y("Error on delete project: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),addUserToProject:function(){var e=Object(h.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()({url:f.url+"/project/".concat(t.id,"/join"),method:"PATCH",headers:T.headers(),data:{userIds:n}}).then((function(e){console.info("result from joining Project",e)}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),y("Error on joining project: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()},L=T;n(77);var E=function(e){return{name:e.name||"",checked:e.checked||!1,id:e.id||null,timestamp:e.timestamp||new Date,subtasks:e.subtasks||[],description:e.description||""}},F={gotoApp:"Open app",loading:"Loading app...",noListName:"New Project "+(new Date).toISOString().slice(0,10),addPh:"Quick-add a task...",addSubtaskPh:"Add subtasks to this task",addSubtaskBtn:"Add a subtask",subtasks:"Subtasks",sharedProject:"This project is shared",subtaskStatus:"( Completed / Pending )",deleteTask:"Delete task and its subtasks? Can't be undone",allTasksCompleted:function(){var e=["\ud83d\ude01 All tasks completed!","Now that's what I call a clean list \ud83e\udd73","Wow, such empty \ud83d\udc4f","Finitto? Go for a cappuccino \u2615\ufe0f","All tasks done, time for a break \ud83c\udfd6","So productive. I'm impressed \ud83d\ude0e","Make a Todolist: Done \u2705","I am Finnish \ud83c\uddeb\ud83c\uddee with all tasks."];return e[Math.floor(Math.random()*e.length)]},completed:"Completed",completedNo:"No completed tasks",showCompleted:"Show completed tasks",hideCompleted:"Hide completed tasks",saveTask:"Save",discardTask:"Cancel changes",notes:"Notes",notesPh:"An optional description always helps",projects:"Projects",addProject:"Add a new project",addProjectPh:"Enter a name for a new project",deleteProject:"Delete this project and all the tasks? (cannot be undone)",login:{login:"Log in",signup:"Sign up",logout:"Log out"}},A=n(21);var D=function(e){var t=e.children,n=e.modalOpen,c=e.okButton,r=e.cancelButton,s=e.onAccept,i=e.onCancel;return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"z-depth-5 modal open",children:[Object(a.jsx)("div",{className:"modal-content",children:t}),Object(a.jsxs)("div",{className:"modal-footer",children:[c&&Object(a.jsx)("button",{onClick:s,className:"modal-close waves-effect waves-green btn-flat btn",dangerouslySetInnerHTML:{__html:c}}),r&&Object(a.jsx)("button",{onClick:i,className:"modal-close waves-effect waves-red btn-flat btn left",dangerouslySetInnerHTML:{__html:r}})]})]}),Object(a.jsx)("div",{className:"backdrop",onClick:i})]}):""})};var I=function(e){var t=e.trigger,n=e.task,r=e.modalOpen,s=e.setModalOpen,i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],b=Object(c.useState)(n.subtasks||[]),p=Object(o.a)(b,2),m=p[0],f=p[1],O=Object(c.useState)([]),x=Object(o.a)(O,2),v=x[0],g=x[1],k=Object(c.useState)(n.name||""),N=Object(o.a)(k,2),w=N[0],S=N[1],y=Object(c.useState)(n.description||""),C=Object(o.a)(y,2),T=C[0],L=C[1],I=Object(c.useContext)(H);function M(e,t){return U.apply(this,arguments)}function U(){return(U=Object(h.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,P.updateTask(I.id,t);case 3:e.next=6;break;case 5:P.addTask(I.id,E(t)).then((function(e){t.id=e.id}));case 6:s(!!n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return z.apply(this,arguments)}function z(){return(z=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.name=w,n.description=T,n.subtasks=[].concat(Object(A.a)(m),Object(A.a)(v)),e.next=6,M(n,!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:s(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){S(n.name||""),f(n.subtasks||[]),L(n.description||"")}),[n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:t.className,onClick:function(){return s(!0)},children:t.text}),Object(a.jsxs)(D,{modalOpen:r,onAccept:function(e){return q.apply(this,arguments)},onCancel:function(){return s(!1)},okButton:F.saveTask+' <i class="material-icons right">save</i>',cancelButton:F.discardTask+' <i class="material-icons right">cancel</i>',children:[Object(a.jsx)("h6",{className:"subtle mb-15 mt-5",children:I.name}),Object(a.jsxs)("form",{onSubmit:_,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Task Name"}),Object(a.jsx)("input",{value:w,required:!0,minLength:3,placeholder:"Enter a name for the task",onChange:function(e){return S(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:F.notes}),Object(a.jsx)("textarea",{value:T,className:"materialize-textarea",placeholder:F.notesPh,onChange:function(e){return L(e.target.value)}})]})]}),Object(a.jsxs)("ul",{className:"list-unstyled flex-column",children:[(m||[]).map((function(e){return Object(a.jsxs)("li",{title:e.timestamp,className:"block",children:[Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",checked:e.checked,id:e.id,className:"material-cb",onChange:function(){return(t=e).checked=!t.checked,void f(Object(A.a)(null===n||void 0===n?void 0:n.subtasks));var t}}),Object(a.jsx)("div",{})]}),Object(a.jsx)("span",{className:"left",children:e.name})]},e.id)})),v.map((function(e){return Object(a.jsxs)("li",{className:"block",children:[Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",className:"material-cb",disabled:!0}),Object(a.jsx)("div",{})]}),Object(a.jsx)("span",{className:"left subtle",children:e.name})]},e.id)})),Object(a.jsx)("li",{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g([].concat(Object(A.a)(v),[{id:Math.random(),timestamp:new Date,name:u,checked:!1}])),d(""),e.target[0].value=""},children:[Object(a.jsx)("label",{children:F.subtasks}),Object(a.jsx)("input",{onChange:function(e){return d(e.target.value)},placeholder:F.addSubtaskPh,className:"input-field",required:!0,minLength:3})]})},"new-subtask")]})]})]})};var M=function(e){var t=e.project,n=e.showCompleted,c=e.setShowCompleted,r=e.isLoading;return t.editListName?Object(a.jsx)("form",{onSubmit:t.saveListName,className:"name"===r?" loader-input":"",children:Object(a.jsx)("input",{className:"as-title m0 invisible h4",autoFocus:!0,value:t.projectName,onChange:function(e){return t.setProjectName(e.target.value)}})}):Object(a.jsxs)("div",{className:"flex-row",children:[Object(a.jsx)("h5",{className:"max-content m0",onClick:function(){return t.setEditListName(!0)},children:t.projectName}),n?Object(a.jsx)("button",{className:"material-icons ml-5 toggle-completed btn-invisible subtle",onClick:function(){return c(!1)},title:F.hideCompleted,children:"check_box"}):Object(a.jsx)("button",{className:"material-icons ml-5 toggle-completed btn-invisible subtle",onClick:function(){return c(!0)},title:F.showCompleted,children:"check_box_outline_blank"})]})};n(78);var U=function(e){var t=e.extraClass,n=e.task,r=e.saveSubtasks,s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),b=j[0],h=j[1];return Object(a.jsxs)("ul",{className:"list-unstyled flex-column "+t,children:[(n.subtasks||[]).map((function(e){return Object(a.jsxs)("li",{title:e.timestamp,className:"block",children:[Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",checked:e.checked,id:e.id,className:"material-cb",onChange:function(){return(t=e).checked=!t.checked,void r(n);var t}}),Object(a.jsx)("div",{})]}),Object(a.jsx)("span",{className:"left",children:e.name})]},e.id)})),Object(a.jsx)("li",{children:b?Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),e.target[0].value="",h(!1),n.subtasks=[].concat(Object(A.a)(n.subtasks||[]),[{id:Math.random(),timestamp:new Date,name:l,checked:!1}]),r(n)},children:Object(a.jsx)("input",{onChange:function(e){return u(e.target.value)},placeholder:F.addSubtaskPh,autoFocus:!0,className:"input-field invisible"})}):Object(a.jsxs)("button",{className:"btn-flat subtle",onClick:function(){return h(!0)},children:[Object(a.jsx)("i",{className:"material-icons left",children:"add"}),F.addSubtaskBtn]})},"new-subtask")]})};var _=function(e){var t=e.task,n=Object(c.useState)(t.subtasks||[]),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(!1),u=Object(o.a)(l,2),d=u[0],p=u[1],m=Object(c.useState)(!1),f=Object(o.a)(m,2),O=f[0],x=f[1],v=Object(c.useContext)(H),g=s.filter((function(e){return!!e.checked})).length;function k(){return(k=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.checked=!t.checked,t.checked&&((t.subtasks||[]).forEach((function(e){return e.checked=!0})),t.expanded=!1),e.next=4,P.updateTask(v.id,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(t.subtasks),e.next=3,P.updateTask(v.id,t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm(F.deleteTask)){e.next=3;break}return e.next=3,P.deleteTask(v.id,t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("li",{className:(t.checked?"done":"")+" parent-hover task",title:t.timestamp,children:[Object(a.jsxs)("div",{className:"task-content",children:[Object(a.jsx)("button",{className:"toggle-expand subtle btn-invisible material-icons tiny left "+(O&&" expanded"),onClick:function(){return function(e){return N.apply(this,arguments)}(!O)},children:"chevron_right"}),Object(a.jsxs)("label",{className:"left",children:[Object(a.jsx)("input",{type:"checkbox",className:"material-cb",checked:t.checked,onChange:function(){return function(e){return k.apply(this,arguments)}(t)}}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("button",{className:"btn-invisible task-name "+(t.checked,""),onClick:function(){return p(!0)},children:[t.name,Object(a.jsxs)("span",{className:"subtle child-hover ml-5",title:F.subtaskStatus,children:["(",g," / ",s.length-g,")"]})]}),Object(a.jsxs)("span",{className:"right",children:[Object(a.jsx)("button",{className:"child-hover btn-subtle ml-5 material-icons right",onClick:function(){return function(){return S.apply(this,arguments)}(t)},children:"delete"}),Object(a.jsx)(I,{trigger:{className:"child-hover btn-subtle ml-5 material-icons right",text:"edit"},task:Object(b.a)({},t),modalOpen:d,setModalOpen:p})]})]}),O&&Object(a.jsxs)(a.Fragment,{children:[t.description&&Object(a.jsx)("div",{className:"ml-50",children:Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{className:"subtle",children:[F.notes,":"]})," ",t.description]})}),Object(a.jsx)(U,{extraClass:"ml-50",saveSubtasks:function(e){return w.apply(this,arguments)},subtasks:s,task:t})]})]})};var z=function(e){var t=e.project,n=e.projectTasks,r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(!0),d=Object(o.a)(u,2),p=d[0],m=d[1],f=Object(c.useState)(!1),O=Object(o.a)(f,2),x=O[0],v=O[1],g=Object(c.useState)(t.name||F.noListName),k=Object(o.a)(g,2),N=k[0],w=k[1],S=Object(c.useState)(!1),y=Object(o.a)(S,2),C=y[0],T=y[1],A=n.filter((function(e){return!e.checked})),D=n.filter((function(e){return!!e.checked})),U=Object(c.useMemo)((function(){return F.allTasksCompleted()}),[A.length]),z="";function q(){return(q=Object(h.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),l("task"),e.next=4,P.addTask(t.id,E({name:z}));case 4:n.target[0].value="",l("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(h.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),l("name"),e.next=4,L.saveListName(Object(b.a)(Object(b.a)({},t),{},{name:N}));case 4:T(!1),l("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){w(t.name)}),[t.name]),function(e){var t=e.submit,n=e.taskNameChange,c=e.completed,r=e.open,s=e.showCompleted,i=e.setShowCompleted,o=e.modalOpen,l=e.setModalOpen,u=e.allCompleted,d=e.project,j=e.isLoading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,{project:d,showCompleted:s,setShowCompleted:i,isLoading:j}),Object(a.jsxs)("ul",{className:"list-unstyled",children:[r.length?r.map((function(e){return Object(a.jsx)(_,{task:e},e.id)})):c.length?Object(a.jsx)("li",{children:Object(a.jsx)("h5",{className:"subtle max-content",children:u})}):"",s&&c.map((function(e){return Object(a.jsx)(_,{task:e},e.id)})),Object(a.jsx)("li",{className:"task",children:Object(a.jsxs)("form",{onSubmit:t,className:"flex-row task-content form-inline"+("task"===j?" loader-input":""),children:[Object(a.jsx)("i",{className:"material-icons left v-hidden mr-11",children:"add"}),Object(a.jsx)("i",{className:"material-icons left subtle",children:"add"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:"input-group mb-2",children:Object(a.jsx)("input",{onChange:n,className:"invisible f-100",placeholder:F.addPh,required:!0,autoComplete:"off"})})})]})})]}),Object(a.jsx)(I,{trigger:{className:"btn-floating btn-large fixed-action-btn subtle-bg",text:Object(a.jsx)("i",{className:"material-icons",children:"add"})},task:{},modalOpen:o,setModalOpen:l})]})}({open:A,completed:D,submit:function(e){return q.apply(this,arguments)},taskNameChange:function(e){z=e.target.value},showCompleted:p,setShowCompleted:m,modalOpen:x,allCompleted:U,setModalOpen:v,isLoading:i,project:{projectName:N,saveListName:function(e){return B.apply(this,arguments)},editListName:C,setEditListName:T,setProjectName:w}})};var q=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h6",{children:"Select a project or create a new one."})})};n(79);var B=function(e){var t=e.project,n=e.onAction,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"btn-invisible child-hover ch-hidden left",onClick:function(){return l(!0)},children:Object(a.jsx)("i",{className:"tiny material-icons subtle",children:"more_horiz"})}),i&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{className:"pl-dropdown",onClick:function(){return l(!1)},children:[Object(a.jsx)("li",{className:"pl-dropdown-item",children:Object(a.jsxs)("button",{className:"btn-invisible left left-align w-100",onClick:function(){return n("delete",t)},children:[Object(a.jsx)("i",{className:"tiny material-icons subtle",children:"delete"})," Delete Project"]})}),Object(a.jsx)("li",{className:"pl-dropdown-item",children:Object(a.jsxs)("button",{className:"btn-invisible left left-align w-100",onClick:function(){return n("share",t)},children:[Object(a.jsx)("i",{className:"tiny material-icons subtle",children:"people_outline"})," Share Project"]})})]}),Object(a.jsx)("div",{className:"pl-backdrop",onClick:function(){return l(!1)}})]})]})};var K=function(e){var t=e.projectKey,n=e.setProjectKey,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)([]),d=Object(o.a)(u,2),b=d[0],p=d[1],m=Object(c.useState)(!1),f=Object(o.a)(m,2),O=(f[0],f[1]),x=Object(c.useState)(""),v=Object(o.a)(x,2),g=v[0],k=v[1];function N(e){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm(F.deleteProject)){e.next=4;break}return e.next=3,L.deleteProject(t);case 3:n("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="delete"===e.t0?3:"share"===e.t0?6:10;break;case 3:return e.next=5,N(n);case 5:return e.abrupt("break",11);case 6:return a=prompt("User Id to join?"),e.next=9,L.addUserToProject(n,[a]);case 9:case 10:return e.abrupt("break",11);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=L.getListOfProjects((function(e){n(function(e,t){return e&&t.filter((function(t){return t.id===e})).length?e:""}(t,e)),p(e)}));return function(){e()}}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{className:"center-align",children:F.projects}),Object(a.jsxs)("ul",{className:"projects-list flex-column",children:[b.map((function(e){return Object(a.jsxs)("li",{className:(t===e.id?"selected":"")+" mb-5 parent-hover flex-row",children:[Object(a.jsx)(B,{project:e,onAction:S}),Object(a.jsxs)("button",{className:"btn-invisible left left-align",onClick:function(){var a;(a=e).id!==t&&n(a.id)},children:[e.shared&&Object(a.jsx)("i",{className:"tiny material-icons subtle left mr-5",title:F.sharedProject,children:"people_outline"}),e.name]})]},e.id)})),Object(a.jsxs)("li",{className:"mb-5 parent-hover flex-row",children:[Object(a.jsx)("button",{className:"btn-invisible child-hover ch-hidden left",children:Object(a.jsx)("label",{htmlFor:"new-project-input",className:"pointer",children:Object(a.jsx)("i",{className:"tiny material-icons subtle",children:"add"})})}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),l(!0),L.newProject({name:g}).then((function(e){O(!1),k(""),l(!1),n(e.id)}))},className:"add-project flex-row"+(i?" loader-input":""),children:Object(a.jsx)("input",{className:"invisible subtle left-align",onChange:function(e){return k(e.target.value)},required:!0,minLength:"3",value:g,id:"new-project-input",placeholder:F.addProjectPh})})]},"new-project")]})]})},H=r.a.createContext({});var J=function(){var e=Object(c.useState)(window.location.hash.substring(1)),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),b=j[0],h=j[1];return Object(c.useEffect)((function(){if(window.location.hash=n||"",n){var e=L.getProject(n,(function(e){u(e)})),t=P.getTasksForProject(n,(function(e){h(e)}));return function(){e(),t()}}}),[n]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"row m0 w-100",children:[Object(a.jsx)("div",{className:"col s3 projects-list-box",children:Object(a.jsx)(K,{projectKey:n,setProjectKey:r})}),Object(a.jsx)("div",{className:"col s9 tasks-list-box flex-column",children:Object(a.jsx)(H.Provider,{value:{id:l.id,name:l.name},children:n?Object(a.jsx)(z,{project:l,projectTasks:b}):Object(a.jsx)(q,{})})})]})})};n(80);var W=function(){return Object(a.jsx)("span",{className:"app-loader",children:Object(a.jsx)("span",{className:"loader-img loader-lg"})})};var Y=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("footer",{className:"page-footer",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col l6 s12",children:[Object(a.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(a.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(a.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(a.jsx)("h5",{className:"white-text",children:"Links"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 1"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 2"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 3"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 4"})})]})]})]})}),Object(a.jsx)("div",{className:"footer-copyright",children:Object(a.jsxs)("div",{className:"container",children:["\xa9 2014 Copyright Text",Object(a.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})]})})};var Q=function(e){var t=e.loaded,n=Object(c.useContext)(G);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper container",children:[Object(a.jsx)("a",{href:"/app",className:"brand-logo",children:"Todo List"}),Object(a.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:n?t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/app",children:F.gotoApp})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",onClick:function(e){e.preventDefault(),x().signOut().then((function(){console.log("You've been signed out of the app")}))},className:"btn-invisible",children:F.login.logout})})]}):t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/login",children:F.login.login})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/signup",children:F.login.signup})})]})})]})}),Object(a.jsx)("div",{style:{height:"300px",display:"block"},children:Object(a.jsx)("h4",{className:"flex-center-self center-align",children:"Welcome to the best todo-app"})}),Object(a.jsx)(Y,{})]})},G=r.a.createContext({});var R=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),d=i[0],j=i[1];return N.authState((function(e){console.info("User state changed",e&&e.refreshToken),r(!0),j(e)})),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(G.Provider,{value:d,children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/",exact:!0,children:Object(a.jsx)(Q,{loaded:n})}),n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.b,{path:"/signup",children:Object(a.jsx)(w,{})}),Object(a.jsx)(u.b,{path:"/login",children:Object(a.jsx)(S,{})}),Object(a.jsx)(u.b,{path:"/app",children:Object(a.jsx)(J,{})})]}):Object(a.jsx)(W,{})]})})})})};i.a.render(Object(a.jsx)(R,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.c123ccea.chunk.js.map