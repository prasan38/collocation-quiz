(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{33:function(t,e,n){},35:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(14),a=n.n(r),s=(n(33),n.p,n(34),n(35),n(42)),i=n(44),j=n(11),u=n(45),l=n(46),d=n(43),b=n(2);var h=function(t){var e=t.showModal,n=t.setShowModal,o=t.count,r=t.setCount,a=t.text,s=Object(c.useState)(5),i=Object(j.a)(s,2),u=i[0],h=i[1],O=function(){n(!1),r(o+1)};return Object(c.useEffect)((function(){function t(t){t>0&&h(t-1),0===t&&(n(!1),r(o+1))}return setTimeout((function(){t(u)}),1e3),function(){return clearTimeout(u)}}),[u]),Object(b.jsxs)(d.a,{show:e,onHide:O,backdrop:"static",keyboard:!1,children:[Object(b.jsx)(d.a.Header,{closeButton:!0,children:Object(b.jsx)(d.a.Title,{children:"Modal title"})}),Object(b.jsxs)(d.a.Body,{children:[a,Object(b.jsx)("p",{children:u})]}),Object(b.jsx)(d.a.Footer,{children:Object(b.jsx)(l.a,{variant:"secondary",onClick:O,children:"Next"})})]})};var O=function(t){var e=t.data,n=t.count,o=t.setCount,r=t.correctAnsCount,a=t.setCorrectAnsCount,s=Object(c.useState)(!1),i=Object(j.a)(s,2),d=i[0],O=i[1],x=Object(c.useState)(!1),f=Object(j.a)(x,2),p=f[0],C=f[1],g=Object(c.useState)(""),v=Object(j.a)(g,2),w=v[0],S=v[1],y=function(t,e,n){e===n?(S("Correct"),a(r+1)):S("Incorrect! The correct answer is "+n),C(!0),O(!0)};return Object(b.jsxs)(b.Fragment,{children:[d&&Object(b.jsx)(h,{showModal:p,setShowModal:C,count:n,setCount:o,text:w}),Object(b.jsx)(u.a,{children:Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.word}),Object(b.jsxs)(u.a.Text,{children:[Object(b.jsx)(l.a,{variant:"secondary",onClick:function(t){return y(0,e.options[0].optionVal,e.answer)},children:e.options[0].optionVal}),Object(b.jsx)(l.a,{variant:"secondary",onClick:function(t){return y(0,e.options[1].optionVal,e.answer)},children:e.options[1].optionVal}),Object(b.jsx)(l.a,{variant:"secondary",onClick:function(t){return y(0,e.options[2].optionVal,e.answer)},children:e.options[2].optionVal}),Object(b.jsx)(l.a,{variant:"secondary",onClick:function(t){return y(0,e.options[3].optionVal,e.answer)},children:e.options[3].optionVal})]})]})}),Object(b.jsx)("hr",{})]})};var x=function(){var t=Object(c.useState)(1),e=Object(j.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(0),a=Object(j.a)(r,2),s=a[0],i=a[1],u=Object(c.useState)([]),l=Object(j.a)(u,2),d=l[0],h=l[1];return Object(c.useEffect)((function(){fetch("http://localhost:8002/api/quiz",{headers:{accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){return h(t)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"score-info",children:Object(b.jsxs)("h2",{children:["Attempted ",n>d.length?d.length:n," / ",d.length," Questions: Score: ",s]})}),n<=d.length?Object(b.jsx)(O,{data:d[n-1],count:n,setCount:o,correctAnsCount:s,setCorrectAnsCount:i}):Object(b.jsx)("a",{href:"/",children:"Play Again"})]})};var f=function(){return Object(b.jsxs)(s.a,{fluid:!0,children:[Object(b.jsxs)(i.a,{bg:"light",expand:"lg",children:[Object(b.jsx)(i.a.Brand,{href:"/",children:"QUIZ"}),Object(b.jsx)(i.a.Toggle,{"aria-controls":"navbarScroll"})]}),Object(b.jsx)(x,{})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),r(t),a(t)}))};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.0b7af39f.chunk.js.map