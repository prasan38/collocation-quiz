(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{33:function(t,o,e){},35:function(t,o,e){},40:function(t,o,e){"use strict";e.r(o);var n=e(0),i=e.n(n),a=e(13),c=e.n(a),r=(e(33),e.p,e(34),e(35),e(42)),s=e(44),l=e(15),p=e(45),j=e(46),d=e(43),u=e(2);var b=function(t){var o=t.showModal,e=t.setShowModal,n=t.count,i=t.setCount,a=t.text,c=function(){e(!1),i(n+1)};return Object(u.jsxs)(d.a,{show:o,onHide:c,backdrop:"static",keyboard:!1,children:[Object(u.jsx)(d.a.Header,{closeButton:!0,children:Object(u.jsx)(d.a.Title,{children:"Your Result"})}),Object(u.jsx)(d.a.Body,{children:a}),Object(u.jsx)(d.a.Footer,{children:Object(u.jsx)(j.a,{variant:"secondary",onClick:c,children:"Next"})})]})};var h=function(t){var o=t.data,e=t.count,i=t.setCount,a=t.correctAnsCount,c=t.setCorrectAnsCount,r=Object(n.useState)(!1),s=Object(l.a)(r,2),d=s[0],h=s[1],V=Object(n.useState)(!1),O=Object(l.a)(V,2),x=O[0],w=O[1],v=Object(n.useState)(""),m=Object(l.a)(v,2),g=m[0],f=m[1],C=function(t,o,e){o===e?(f("Correct"),c(a+1)):f("Incorrect! The correct answer is "+e),w(!0),h(!0)};return Object(u.jsxs)(u.Fragment,{children:[d&&Object(u.jsx)(b,{showModal:x,setShowModal:w,count:e,setCount:i,text:g}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(p.a.Body,{children:[Object(u.jsx)(p.a.Title,{children:o.word}),Object(u.jsxs)(p.a.Text,{children:[Object(u.jsx)(j.a,{variant:"secondary",onClick:function(t){return C(0,o.options[0].optionVal,o.answer)},children:o.options[0].optionVal}),Object(u.jsx)(j.a,{variant:"secondary",onClick:function(t){return C(0,o.options[1].optionVal,o.answer)},children:o.options[1].optionVal}),Object(u.jsx)(j.a,{variant:"secondary",onClick:function(t){return C(0,o.options[2].optionVal,o.answer)},children:o.options[2].optionVal}),Object(u.jsx)(j.a,{variant:"secondary",onClick:function(t){return C(0,o.options[3].optionVal,o.answer)},children:o.options[3].optionVal})]})]})}),Object(u.jsx)("hr",{})]})},V=[{word:"accurate",answer:"measurement",options:[{optionVal:"behaviour"},{optionVal:"participation"},{optionVal:"measurement"},{optionVal:"objective"}]},{word:"accept",answer:"concept",options:[{optionVal:"concept"},{optionVal:"career"},{optionVal:"participation"},{optionVal:"responsibility"}]},{word:"basic",answer:"element",options:[{optionVal:"achievement"},{optionVal:"goal"},{optionVal:"measurement"},{optionVal:"element"}]},{word:"achieve",answer:"objective",options:[{optionVal:"achievement"},{optionVal:"behaviour"},{optionVal:"career"},{optionVal:"objective"}]},{word:"active",answer:"participation",options:[{optionVal:"element"},{optionVal:"participation"},{optionVal:"responsibility"},{optionVal:"concept"}]},{word:"academic",answer:"institution",options:[{optionVal:"objective"},{optionVal:"description"},{optionVal:"component"},{optionVal:"institution"}]},{word:"acquire",answer:"knowledge",options:[{optionVal:"responsibility"},{optionVal:"knowledge"},{optionVal:"information"},{optionVal:"goal"}]},{word:"accept",answer:"responsibility",options:[{optionVal:"career"},{optionVal:"description"},{optionVal:"responsibility"},{optionVal:"information"}]},{word:"acceptable",answer:"behaviour",options:[{optionVal:"goal"},{optionVal:"measurement"},{optionVal:"behaviour"},{optionVal:"achievement"}]}];var O=function(){var t=Object(n.useState)(1),o=Object(l.a)(t,2),e=o[0],i=o[1],a=Object(n.useState)(0),c=Object(l.a)(a,2),r=c[0],s=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"score-info",children:Object(u.jsxs)("h2",{children:["Attempted ",e>V.length?V.length:e," / ",V.length," Questions: Score: ",r]})}),e<=V.length?Object(u.jsx)(h,{data:V[e-1],count:e,setCount:i,correctAnsCount:r,setCorrectAnsCount:s}):Object(u.jsx)("a",{href:"/",children:"Play Again"})]})};var x=function(){return Object(u.jsxs)(r.a,{fluid:!0,children:[Object(u.jsxs)(s.a,{bg:"light",expand:"lg",children:[Object(u.jsx)(s.a.Brand,{href:"/",children:"QUIZ"}),Object(u.jsx)(s.a.Toggle,{"aria-controls":"navbarScroll"})]}),Object(u.jsx)(O,{})]})},w=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,47)).then((function(o){var e=o.getCLS,n=o.getFID,i=o.getFCP,a=o.getLCP,c=o.getTTFB;e(t),n(t),i(t),a(t),c(t)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.27bd9be6.chunk.js.map