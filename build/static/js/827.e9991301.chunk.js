"use strict";(self.webpackChunkida_web=self.webpackChunkida_web||[]).push([[827],{4878:function(e,n,t){t.d(n,{Z:function(){return c}});t(2791);var s=t(1523),a=t(6799),i=t(184),c=function(e){var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{theme:!0}),(0,i.jsx)("div",{className:"Admin",children:(0,i.jsxs)("div",{className:"Admin-header",children:[(0,i.jsx)(s.OL,{to:"/admin/userList",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"\uc9c0\uc6d0\uc790 \ud604\ud669"})}),(0,i.jsx)(s.OL,{to:"/admin/schoolCity",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"\ucd9c\uc2e0\uad50\ubcc4 \ud604\ud669"})}),(0,i.jsx)(s.OL,{to:"/admin/userRate",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"\uc785\ud559\uc9c0\uc6d0\uc790\uacbd\uc7c1\ub960"})}),(0,i.jsx)(s.OL,{to:"/admin/receiptStatus",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"\uc2e0\uc785\uc0dd \uc785\ud559 \uc804\ud615 \uc6d0\ubd80"})}),(0,i.jsx)(s.OL,{to:"/admin/detailScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsxs)("span",{style:{textAlign:"center",display:"flex"},children:["2\ucc28 \uc804\ud615 \uc810\uc218 \uad00\ub9ac ",(0,i.jsx)("br",{}),"(\uc9c1\ubb34\uc801\uc131, \ud559\uc5c5 \ubc0f \uc9c4\ub85c\uc5ed\ub7c9, \ucef4\ud4e8\ud305)"]})}),(0,i.jsx)(s.OL,{exact:!0,to:"/admin/secondScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"2\ucc28 \uc804\ud615 \uc810\uc218 \uad00\ub9ac"})}),(0,i.jsx)(s.OL,{to:"/admin/userListPassed",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"1\ucc28/\ucd5c\uc885 \ud569\uaca9 \uc5ec\ubd80"})}),(0,i.jsx)(s.OL,{to:"/admin/userResultPage",className:"Admin-header-link",activeClassName:"Admin-header-link-active",children:(0,i.jsx)("span",{children:"\uacb0\uacfc \ubcc0\uacbd"})})]})}),n]})}},3827:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var s=t(2791),a=t(7166),i=t(3032),c=t(3430),r=t(1992),l=t(6186),d=function(e){return e.INTERVIEW="INTERVIEW",e.COOPERATION="COOPERATION",e}(d||{}),o=d,h=t(184),u=function(e){var n=e.team,t=e.setTeam,s=e.teamCount,a=e.interView,i=e.selectInterView,c=e.scoreDate,r=e.tryDownExcel,l=e.uploadFile,d=e.tryGetNumberTeam,u=e.tyrUploadTeam,x=e.attend,m=e.selectAttend;return(0,h.jsxs)("div",{className:"InterViewScore",children:[(0,h.jsx)("span",{className:"InterViewScore-title",children:"2\ucc28\uc804\ud615 (\ucc3d\uc758 \ud611\uc5c5, \uad6c\uc220 \uba74\uc811) \uc810\uc218"}),(0,h.jsxs)("div",{className:"InterViewScore-checkBox",children:[(0,h.jsxs)("select",{className:"InterViewScore-checkBox-s-op",onChange:function(e){i(e.target.value)},children:[(0,h.jsx)("option",{value:"0",className:"InterViewScore-checkBox-s-op",children:"\ucc3d\uc758 \ud611\uc5c5"}),(0,h.jsx)("option",{value:"1",className:"InterViewScore-checkBox-s-op",children:"\uad6c\uc220\uba74\uc811"})]}),(0,h.jsxs)("select",{className:"InterViewScore-checkBox-s-op",onChange:function(e){t(e.target.value)},value:n,children:[(0,h.jsx)("option",{className:"InterViewScore-checkBox-s-op",value:"0",children:"\uc804\uccb4"}),s&&s.map((function(e,n){return(0,h.jsxs)("option",{value:e,children:[e,"\ud300"]},n)}))]}),(0,h.jsxs)("div",{className:"InterViewScore-checkBox-label",children:[(0,h.jsx)("span",{children:"\ud300 \ubc88\ud638 \uc11c\uc2dd \ub2e4\uc6b4\ub85c\ub4dc"}),(0,h.jsx)("button",{onClick:function(){return d()},className:"buttons",children:"\ub2e4\uc6b4\ub85c\ub4dc"})]}),(0,h.jsxs)("div",{className:"InterViewScore-checkBox-label",children:[(0,h.jsx)("span",{children:"\ud300 \ubc88\ud638 \uc11c\uc2dd \uc5c5\ub85c\ub4dc"}),(0,h.jsx)("label",{htmlFor:"input-file2",className:"buttons",children:"\uc5c5\ub85c\ub4dc"}),(0,h.jsx)("input",{type:"file",id:"input-file2",className:"input-file",onChange:function(e){return u(e)}})]}),(0,h.jsxs)("div",{className:"InterViewScore-checkBox-label",children:[(0,h.jsx)("span",{children:"\ucd9c\ub825\uc6a9 & \uc11c\uc2dd"}),(0,h.jsx)("button",{onClick:function(){return r()},className:"buttons",children:"\ub2e4\uc6b4\ub85c\ub4dc"})]}),(0,h.jsxs)("div",{className:"InterViewScore-checkBox-label",children:[(0,h.jsx)("span",{children:a===o.INTERVIEW?"\uad6c\uc220 \uba74\uc811 \uc810\uc218":"\ucc3d\uc758 \ud611\uc5c5 \uc810\uc218"}),(0,h.jsx)("label",{htmlFor:"input-file1",className:"buttons",children:"\uc5c5\ub85c\ub4dc"}),(0,h.jsx)("input",{type:"file",id:"input-file1",className:"input-file",onChange:function(e){return l(e)}})]})]}),(0,h.jsx)("div",{className:"InterViewScore-table",children:(0,h.jsxs)("table",{className:"InterViewScore-table-list",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{className:"InterViewScore-table-list-title",children:[(0,h.jsx)("th",{children:"\uc21c\ubc88"}),(0,h.jsx)("th",{children:"\uc218\ud5d8\ubc88\ud638"}),(0,h.jsx)("th",{children:"\uc774\ub984"}),(0,h.jsx)("th",{children:"\ucc38\uc11d\uc5ec\ubd80"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c1"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c2"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c3"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c4"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c5"}),a===o.INTERVIEW&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c6"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c7"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c8"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c9"}),(0,h.jsx)("th",{children:"\ud3c9\uac00\uc694\uc18c10"})]}),(0,h.jsxs)("th",{children:[" ",a===o.INTERVIEW?"\ucd1d\uc810":"\uc804\ud615\ubcc4 \ucc3d\uc758 \ud611\uc5c5 \uc810\uc218"]})]})}),(0,h.jsx)("tbody",{children:null===c||void 0===c?void 0:c.data.map((function(e,n){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:n+1}),(0,h.jsx)("td",{children:e.examCode}),(0,h.jsx)("td",{children:e.userName}),(0,h.jsx)("td",{children:(0,h.jsxs)("select",{value:x,onChange:function(e){return m(e)},children:[(0,h.jsx)("option",{children:"\ucc38\uc11d"}),(0,h.jsx)("option",{children:"\ubbf8\ucc38\uc11d"})]})}),(0,h.jsx)("td",{children:e.evaluationFactor1}),(0,h.jsx)("td",{children:e.evaluationFactor2}),(0,h.jsx)("td",{children:e.evaluationFactor3}),(0,h.jsx)("td",{children:e.evaluationFactor4}),(0,h.jsx)("td",{children:e.evaluationFactor5}),a===o.INTERVIEW&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{children:e.evaluationFactor6}),(0,h.jsx)("td",{children:e.evaluationFactor7}),(0,h.jsx)("td",{children:e.evaluationFactor8}),(0,h.jsx)("td",{children:e.evaluationFactor9}),(0,h.jsx)("td",{children:e.evaluationFactor10})]}),(0,h.jsx)("td",{children:e.totalScore})]},n)}))})]})})]})},x=t(2664),m=t(3666),j=t(6419),v=t(9271),f=t(9835),p=(0,l.Pi)((function(e){(0,r.Z)(e);var n=(0,x.Z)().store.ScoreStore,t=n.getInterviewScore,l=n.getTeam,d=m.Z.uploadInterview,p=m.Z.GetInterviewScoreExcel,N=m.Z.getTeamNumber,k=m.Z.uploadTeamNumber,I=(0,s.useState)(),w=(0,c.Z)(I,2),b=w[0],A=w[1],C=(0,s.useState)(o.COOPERATION),S=(0,c.Z)(C,2),g=S[0],V=S[1],E=(0,s.useState)("0"),Z=(0,c.Z)(E,2),O=Z[0],T=Z[1],F=(0,s.useState)(),y=(0,c.Z)(F,2),R=y[0],B=y[1],L=(0,s.useState)("\ucc38\uc11d"),P=(0,c.Z)(L,2),W=P[0],D=P[1],$=(0,v.k6)(),G=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(g,"0"===O?void 0:O).catch((function(e){var n;(0,f.$d)(e,$),404===(null===(n=e.response)||void 0===n?void 0:n.status)&&T("0")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T("0"),e.next=3,l(g).then((function(e){A(e.data)})).catch((function(e){(0,f.$d)(e,$)}));case 3:case"end":return e.stop()}}),e)}))),[g]),_=(0,s.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(g,"0"===O?void 0:O).then((function(e){B(e)})).catch((function(e){(0,f.$d)(e,$)}));case 2:case"end":return e.stop()}}),e)}))),[g,O,b,R]),q=(0,s.useCallback)((function(e){V("0"===e?o.COOPERATION:o.INTERVIEW)}),[g]),z=(0,s.useCallback)((function(e){if(e.target.files&&e.target.files.length){var n=e.target.files[0];k(n).then((function(){j.Am.success("\ud30c\uc77c \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),_(),U()})).catch((function(e){var n,t;400===(null===(n=e.response)||void 0===n?void 0:n.status)?j.Am.warning("\ud30c\uc77c\uc744 \uc798\ubabb\uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4"):500===(null===(t=e.response)||void 0===t?void 0:t.status)&&j.Am.error("\uc11c\ubc84 \uc624\ub958\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}}),[_]),H=(0,s.useCallback)((function(e){if(e.target.files&&e.target.files.length){var n=e.target.files[0];d(n).then((function(){j.Am.success("\ud30c\uc77c \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),_()})).catch((function(e){var n,t;400===(null===(n=e.response)||void 0===n?void 0:n.status)?j.Am.warning("\ud30c\uc77c\uc744 \uc798\ubabb\uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4"):500===(null===(t=e.response)||void 0===t?void 0:t.status)&&j.Am.error("\uc11c\ubc84 \uc624\ub958\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}}),[_]);return(0,s.useEffect)((function(){U()}),[g]),(0,s.useEffect)((function(){_()}),[g,O,b]),(0,h.jsx)(u,{team:O,setTeam:T,teamCount:b,interView:g,selectInterView:q,scoreDate:R,tryDownExcel:G,uploadFile:H,tryGetNumberTeam:function(){N(g).catch((function(e){(0,f.$d)(e,$)}))},tyrUploadTeam:z,attend:W,selectAttend:function(e){D(e.target.value)}})})),N=t(4878),k=function(){return(0,h.jsx)(N.Z,{children:(0,h.jsx)(p,{})})}}}]);
//# sourceMappingURL=827.e9991301.chunk.js.map