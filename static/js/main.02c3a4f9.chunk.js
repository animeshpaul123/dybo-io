(this["webpackJsonpdybo-test"]=this["webpackJsonpdybo-test"]||[]).push([[0],{136:function(e,t,r){"use strict";r.r(t);var s=r(2),c=r(41),n=r.n(c),a=(r(47),r(5)),i=r(3),l=(r(48),r(7)),j=r(10),o=(r(49),r(0));function b(e){var t=e.picture,r=e.first_name,s=e.last_name,c=e.phone,n=e.email;return Object(o.jsxs)("div",{className:"extra-wrapper",children:[Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"img-wrapper",children:Object(o.jsx)("img",{src:t,alt:t})}),Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:r})," ",Object(o.jsx)("span",{children:s})]}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{children:c})]})]}),Object(o.jsx)("div",{className:"circle-1"}),Object(o.jsx)("div",{className:"circle-2"}),Object(o.jsx)("div",{className:"circle-3"})]})}var d=r(15),u=r.n(d),O=r(23),m=r(17),p=r(24),h=r.n(p),x=(r(52),{firstName:"",lastName:"",email:"",phone:"",linkedInProfile:""}),f={firstName:!1,lastName:!1,email:!1,phoneNumber:!1,linkedInProfile:!1,basic:!1};function N(e){var t=Object(s.useState)(x),r=Object(l.a)(t,2),c=r[0],n=r[1],i=Object(s.useState)(f),j=Object(l.a)(i,2),b=j[0],d=j[1],p=Object(s.useState)(!1),N=Object(l.a)(p,2),v=N[0],g=N[1],S=e.color,k=function(e){n(Object(a.a)(Object(a.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(O.a)(u.a.mark((function t(r){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),console.log(c),!T(c)){t.next=4;break}return t.abrupt("return");case 4:return(s=Object(a.a)({},c)).first_name=c.firstName,s.last_name=c.lastName,g(!0),t.next=10,y(s);case 10:n=t.sent,e.liftUserInfo(n),g(!1);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://13.235.55.43/test/api/create_user",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.firstName,r=e.lastName,s=e.email,c=e.phone,n=e.linkedInProfile,a={},i=!1;return t.length&&r.length&&s.length&&c.length&&n.length||(a.basic="All fields are required.",i=!0),h.a.isEmail(s)||(a.email="Please enter a valid email",i=!0),Number.isFinite(Number(c))&&10===c.length||(a.phoneNumber="Please enter a valid phone number",i=!0),h.a.isURL(n)||(a.linkedInProfile="Please enter a linked profile url",i=!0),d(a),console.log("----\x3e ",a),i};return Object(o.jsx)("div",{className:"form-container",children:Object(o.jsxs)("form",{autoComplete:!1,onSubmit:w,children:[Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"#firstName",children:"First Name"}),Object(o.jsx)("input",{type:"text",name:"firstName",id:"firstName",onChange:k}),b.firstName&&Object(o.jsx)("p",{className:"error",children:b.firstName})]}),Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"#lastName",children:"Last Name"}),Object(o.jsx)("input",{type:"text",name:"lastName",id:"lastName",onChange:k}),b.lastName&&Object(o.jsx)("p",{className:"error",children:b.lastName})]}),Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"#email",children:"Email"}),Object(o.jsx)("input",{type:"text",name:"email",id:"email",onChange:k}),b.email&&Object(o.jsx)("p",{className:"error",children:b.email})]}),Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"#phoneNumber",children:"Phone"}),Object(o.jsx)("input",{type:"text",name:"phone",id:"phoneNumber",onChange:k}),b.phoneNumber&&Object(o.jsx)("p",{className:"error",children:b.phoneNumber})]}),Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"#linkedInProfile",children:"LinkedIn Profile"}),Object(o.jsx)("input",{type:"text",name:"linkedInProfile",id:"linkedInProfile",onChange:k}),b.linkedInProfile&&Object(o.jsx)("p",{className:"error",children:b.linkedInProfile})]}),b.basic&&Object(o.jsx)("p",{className:"error",children:b.basic}),Object(o.jsx)("div",{className:"input-wrapper button-wrapper",children:Object(o.jsx)("button",{type:"submit",onClick:w,style:{color:S,borderColor:S},children:v?"Submitting...":"Register"})})]})})}function v(e){var t=e.desert,r=Object(s.useState)(null),c=Object(l.a)(r,2),n=c[0],i=c[1],d=Object(s.useState)(!1),u=Object(l.a)(d,2),O=u[0],m=u[1];return Object(o.jsxs)("div",{className:"page-wrapper",style:{backgroundColor:t},children:[Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(j.b,{to:"/forest/register",children:"Forest"})," ",Object(o.jsx)(j.b,{to:"/ocean/register",children:"Ocean"})]}),O&&Object(o.jsxs)("div",{className:"alert-wrapper",children:[Object(o.jsx)("div",{className:"alert",children:n&&n.STATUS?"Success, User ".concat(n.STATUS):"Success, User registration successful"}),Object(o.jsx)("div",{className:"close",onClick:function(){return m(!1)},children:"x"})]}),n&&Object.keys(n).length?Object(o.jsx)(b,Object(a.a)({},n.data)):Object(o.jsx)(N,{liftUserInfo:function(e){i(e),m(!0),setTimeout((function(){m(!1)}),3e3)},color:t})]})}function g(e){var t=e.forest,r=Object(s.useState)(null),c=Object(l.a)(r,2),n=c[0],i=c[1],d=Object(s.useState)(!1),u=Object(l.a)(d,2),O=u[0],m=u[1];return Object(o.jsxs)("div",{className:"page-wrapper",style:{backgroundColor:t},children:[Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(j.b,{to:"/desert/register",children:"Desert"})," ",Object(o.jsx)(j.b,{to:"/ocean/register",children:"Ocean"})]}),O&&Object(o.jsxs)("div",{className:"alert-wrapper",children:[Object(o.jsx)("div",{className:"alert",children:n&&n.STATUS?"Success, User ".concat(n.STATUS):"Success, User registration successful"}),Object(o.jsx)("div",{className:"close",onClick:function(){return m(!1)},children:"x"})]}),n&&Object.keys(n).length?Object(o.jsx)(b,Object(a.a)({},n.data)):Object(o.jsx)(N,{liftUserInfo:function(e){i(e),m(!0),setTimeout((function(){m(!1)}),3e3)},color:t})]})}function S(e){var t=e.ocean,r=Object(s.useState)(null),c=Object(l.a)(r,2),n=c[0],i=c[1],d=Object(s.useState)(!1),u=Object(l.a)(d,2),O=u[0],m=u[1];return Object(o.jsxs)("div",{className:"page-wrapper",style:{backgroundColor:t},children:[Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(j.b,{to:"/desert/register",children:"Desert"})," ",Object(o.jsx)(j.b,{to:"/forest/register",children:"Forest"})]}),O&&Object(o.jsxs)("div",{className:"alert-wrapper",children:[Object(o.jsx)("div",{className:"alert",children:n&&n.STATUS?"Success, User ".concat(n.STATUS):"Success, User registration successful"}),Object(o.jsx)("div",{className:"close",onClick:function(){return m(!1)},children:"x"})]}),n&&Object.keys(n).length?Object(o.jsx)(b,Object(a.a)({},n.data)):Object(o.jsx)(N,{liftUserInfo:function(e){i(e),m(!0),setTimeout((function(){m(!1)}),3e3)},color:t})]})}var k={forest:"#00FF00",ocean:"#005493",desert:"#EDC9AF"};var w=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i.b,{path:"/forest/register",render:function(){return Object(o.jsx)(g,Object(a.a)({},k))}}),Object(o.jsx)(i.b,{path:"/ocean/register",render:function(){return Object(o.jsx)(S,Object(a.a)({},k))}}),Object(o.jsx)(i.b,{path:"/desert/register",render:function(){return Object(o.jsx)(v,Object(a.a)({},k))}}),Object(o.jsx)(i.a,{from:"/",to:"/forest/register"})]})};n.a.render(Object(o.jsx)(j.a,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},52:function(e,t,r){}},[[136,1,2]]]);
//# sourceMappingURL=main.02c3a4f9.chunk.js.map