(this.webpackJsonpida_web=this.webpackJsonpida_web||[]).push([[10],{166:function(e,t,a){},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),l=a.n(n),c=a(15),r=(a(166),a(59)),o=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{theme:!0}),l.a.createElement("div",{className:"Admin"},l.a.createElement("div",{className:"Admin-header"},l.a.createElement(c.c,{to:"/admin/userList",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc9c0\uc6d0\uc790 \ud604\ud669")),l.a.createElement(c.c,{to:"/admin/schoolCity",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\ucd9c\uc2e0\uad50\ubcc4 \ud604\ud669")),l.a.createElement(c.c,{to:"/admin/userRate",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc785\ud559\uc9c0\uc6d0\uc790\uacbd\uc7c1\ub960")),l.a.createElement(c.c,{to:"/admin/receiptStatus",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc2e0\uc785\uc0dd \uc785\ud559 \uc804\ud615 \uc6d0\ubd80")),l.a.createElement(c.c,{to:"/admin/detailScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",{style:{textAlign:"center",display:"flex"}},"2\ucc28 \uc804\ud615 \uc810\uc218 \uad00\ub9ac ",l.a.createElement("br",null),"(sw \uc5ed\ub7c9, \uc9c1\ubb34\ub2a5\ub825, \ucf54\ub529\ud14c\uc2a4\ud2b8)")),l.a.createElement(c.c,{to:"/admin/interviewScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",{style:{textAlign:"center",display:"flex"}},"2\ucc28 \uc804\ud615 \uba74\uc811 \uc810\uc218",l.a.createElement("br",null),"(\ucc3d\uc758\ud611\uc5c5, \uad6c\uc220\uba74\uc811)")),l.a.createElement(c.c,{exact:!0,to:"/admin/secondScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"2\ucc28 \uc804\ud615 \uc810\uc218 \uad00\ub9ac")),l.a.createElement(c.c,{to:"/admin/userListPassed",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"1\ucc28/\ucd5c\uc885 \ud569\uaca9 \uc5ec\ubd80")),l.a.createElement(c.c,{to:"/admin/userResultPage",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uacb0\uacfc \ubcc0\uacbd")))),t)}},172:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a(20),o=a(12),m=(a(172),a(13)),d=function(e){var t=e.tryDownExcel,a=e.rateStatus,n=e.reportStatus,c=a.find((function(e){return e.applyDetailType===m.a.COMMON})),r=a.find((function(e){return e.applyDetailType===m.a.MEISTER})),o=a.find((function(e){return e.applyDetailType===m.a.CITY_FIRST})),d=a.find((function(e){return e.applyDetailType===m.a.ONE_PARENT})),u=a.find((function(e){return e.applyDetailType===m.a.FOREIGN_EDUCATION}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"rates"},l.a.createElement("span",{className:"rates-title"},"\uc785\ud559\uc9c0\uc6d0\uc790 \uacbd\uc7c1\ub960"),l.a.createElement("button",{onClick:function(){return t()},className:"rates-btn"},"\uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc")),l.a.createElement("div",{className:"rate"},l.a.createElement("table",{className:"rate-list"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"rate-list-title"},l.a.createElement("th",{rowSpan:2},"\uc9c0\uc5ed"),l.a.createElement("th",{rowSpan:2},"\uad6c\ubd84"),l.a.createElement("th",{colSpan:5},"\uacf5\ud1b5\uacfc\uc815")),l.a.createElement("tr",{className:"rate-list-title-sub"},l.a.createElement("th",null,"\uc815\uc6d0"),l.a.createElement("th",null,"\ub0a8"),l.a.createElement("th",null,"\uc5ec"),l.a.createElement("th",null,"\uc18c\uacc4"),l.a.createElement("th",null,"\uacbd\uc7c1\ub960"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:2},"\uc77c\ubc18\uc804\ud615"),l.a.createElement("td",null,"\ub300\uad6c\uc9c0\uc5ed"),l.a.createElement("td",{rowSpan:2},c&&"".concat(c.totalPeople," / ").concat(c.personnel)),l.a.createElement("td",null,c&&c.daeguMen),l.a.createElement("td",null,c&&c.daeguWomen),l.a.createElement("td",null,c&&c.daeguMen+c.daeguWomen),l.a.createElement("td",{rowSpan:2},"".concat(c&&c.rate," : 1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0c0\uc9c0\uc5ed"),l.a.createElement("td",null,c&&c.otherMen),l.a.createElement("td",null,c&&c.otherWomen),l.a.createElement("td",null,c&&c.otherMen+c.otherWomen)),l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:2},"\ud2b9\ubcc4\uc804\ud615(\uc0ac\ud68c\ud1b5\ud569)"),l.a.createElement("td",null,"\ub300\uad6c\uc9c0\uc5ed"),l.a.createElement("td",{rowSpan:2},d&&"".concat(d.totalPeople," / ").concat(d.personnel)),l.a.createElement("td",null,d&&"".concat(d.daeguMen)),l.a.createElement("td",null,d&&"".concat(d.daeguWomen)),l.a.createElement("td",null,d&&"".concat(d.daeguMen+d.daeguWomen)),l.a.createElement("td",{rowSpan:2},d&&"".concat(d.rate," : 1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0c0\uc9c0\uc5ed"),l.a.createElement("td",null,d&&"".concat(d.otherMen)),l.a.createElement("td",null,d&&"".concat(d.otherWomen)),l.a.createElement("td",null,d&&"".concat(d.otherMen+d.otherWomen))),l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:2},"\ud2b9\ubcc4\uc804\ud615(\ub9c8\uc774\uc2a4\ud130\uc778\uc7ac)"),l.a.createElement("td",null,"\ub300\uad6c\uc9c0\uc5ed"),l.a.createElement("td",{rowSpan:2},r&&"".concat(r.totalPeople," / ").concat(r.personnel)),l.a.createElement("td",null,r&&"".concat(r.daeguMen)),l.a.createElement("td",null,r&&"".concat(r.daeguWomen)),l.a.createElement("td",null,r&&"".concat(r.daeguMen+r.daeguWomen)),l.a.createElement("td",{rowSpan:2},r&&"".concat(r.rate," : 1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0c0\uc9c0\uc5ed"),l.a.createElement("td",null,r&&"".concat(r.otherMen)),l.a.createElement("td",null,r&&"".concat(r.otherWomen)),l.a.createElement("td",null,r&&"".concat(r.otherMen+r.otherWomen))),l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:2},"\ud2b9\ubcc4\uc804\ud615(\uc9c0\uc5ed\uc6b0\uc120)"),l.a.createElement("td",null,"\ub300\uad6c\uc9c0\uc5ed"),l.a.createElement("td",{rowSpan:2},o&&"".concat(o.totalPeople," / ").concat(o.personnel)),l.a.createElement("td",null,o&&"".concat(o.daeguMen)),l.a.createElement("td",null,o&&"".concat(o.daeguWomen)),l.a.createElement("td",null,o&&"".concat(o.daeguMen+o.daeguWomen)),l.a.createElement("td",{rowSpan:2},o&&"".concat(o.rate," : 1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0c0\uc9c0\uc5ed"),l.a.createElement("td",null,o&&"".concat(o.otherMen)),l.a.createElement("td",null,o&&"".concat(o.otherWomen)),l.a.createElement("td",null,o&&"".concat(o.otherMen+o.otherWomen))),l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:2},"\ud2b9\ub840\uc785\ud559"),l.a.createElement("td",null,"\ub300\uad6c\uc9c0\uc5ed"),l.a.createElement("td",{rowSpan:2},u&&"".concat(u.totalPeople," / ").concat(u.personnel)),l.a.createElement("td",null,u&&"".concat(u.daeguMen)),l.a.createElement("td",null,u&&"".concat(u.daeguWomen)),l.a.createElement("td",null,u&&"".concat(u.daeguMen+u.daeguWomen)),l.a.createElement("td",{rowSpan:2},u&&"".concat(u.rate," : 1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0c0\uc9c0\uc5ed"),l.a.createElement("td",null,u&&"".concat(u.otherMen)),l.a.createElement("td",null,u&&"".concat(u.otherWomen)),l.a.createElement("td",null,u&&"".concat(u.otherMen+u.otherWomen))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},"\uc804\uccb4"),l.a.createElement("td",null,"".concat((c?c.totalPeople:0)+(o?o.totalPeople:0)+(r?r.totalPeople:0)+(d?d.totalPeople:0)+(u?u.totalPeople:0)," / ").concat((c?c.personnel:0)+(o?o.personnel:0)+(r?r.personnel:0)+(d?d.personnel:0)+(u?u.personnel:0))),l.a.createElement("td",null,"".concat((c?c.daeguMen:0)+(o?o.daeguMen:0)+(r?r.daeguMen:0)+(d?d.daeguMen:0)+(u?u.daeguMen:0)+(c?c.otherMen:0)+(o?o.otherMen:0)+(r?r.otherMen:0)+(d?d.otherMen:0)+(u?u.otherMen:0))),l.a.createElement("td",null,"".concat((c?c.daeguWomen:0)+(o?o.daeguWomen:0)+(r?r.daeguWomen:0)+(d?d.daeguWomen:0)+(u?u.daeguWomen:0)+(c?c.otherWomen:0)+(o?o.otherWomen:0)+(r?r.otherWomen:0)+(d?d.otherWomen:0)+(u?u.otherWomen:0))),l.a.createElement("td",null,"".concat((c?c.totalPeople:0)+(o?o.totalPeople:0)+(r?r.totalPeople:0)+(d?d.totalPeople:0)+(u?u.totalPeople:0))),l.a.createElement("td",null,"".concat(Math.round(((c?c.totalPeople:0)+(o?o.totalPeople:0)+(r?r.totalPeople:0)+(d?d.totalPeople:0)+(u?u.totalPeople:0))/((c?c.personnel:0)+(o?o.personnel:0)+(r?r.personnel:0)+(d?d.personnel:0)+(u?u.personnel:0))*100)/100," : 1")))))),l.a.createElement("div",{className:"explanation"},l.a.createElement("div",{className:"explanation-first"},"\uc9c0\uc6d0\ud604\ud669 \uc778\uc6d0\uc740 \uc6d0\uc11c \uc81c\ucd9c\uc744 \uc644\ub8cc\ud55c \uc778\uc6d0\uc758 \ud1b5\uacc4\uc785\ub2c8\ub2e4."),l.a.createElement("div",{className:"explanation-second"},"\uad50\uc721\uccad \ubcf4\uace0 \uc815\ubcf4 (\ud574\ub2f9 \ub0b4\uc5ed\uc744 \uad50\uc721\uccad \ubcf4\uace0 \uc591\uc2dd\uc5d0 \uc54c\ub9de\uac8c \ub123\uc73c\uc2dc\uba74 \ub429\ub2c8\ub2e4.)")),l.a.createElement("div",{className:"rate"},l.a.createElement("table",{className:"rate-list"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"rate-list-title"},l.a.createElement("th",{rowSpan:3},"\uc804\ud615\uad6c\ubd84"),l.a.createElement("th",{colSpan:4},"\uc6b0\ub9ac\uc2dc \uc18c\uc7ac \uc911\ud559\uad50"),l.a.createElement("th",{colSpan:2},"\ud0c0\uc2dc\ub3c4"),l.a.createElement("th",{colSpan:2},"\uac80\uc815\uace0\uc2dc"),l.a.createElement("th",{colSpan:3},"\ud569\uacc4")),l.a.createElement("tr",{className:"rate-list-title-sub"},l.a.createElement("th",{colSpan:2},"\uc878\uc5c5\uc608\uc815\uc790"),l.a.createElement("th",{colSpan:2},"\uc878\uc5c5\uc790"),l.a.createElement("th",{rowSpan:2},"\ub0a8"),l.a.createElement("th",{rowSpan:2},"\uc5ec"),l.a.createElement("th",{rowSpan:2},"\ub0a8"),l.a.createElement("th",{rowSpan:2},"\uc5ec"),l.a.createElement("th",{rowSpan:2},"\ub0a8"),l.a.createElement("th",{rowSpan:2},"\uc5ec"),l.a.createElement("th",{rowSpan:2},"\uacc4")),l.a.createElement("tr",{className:"rate-list-title-subSec"},l.a.createElement("td",null,"\ub0a8"),l.a.createElement("td",null,"\uc5ec"),l.a.createElement("td",null,"\ub0a8"),l.a.createElement("td",null,"\uc5ec"))),l.a.createElement("tbody",null,n.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.applyDetail),l.a.createElement("td",null,e.daeguUngraduatedMen),l.a.createElement("td",null,e.daeguUngraduatedWomen),l.a.createElement("td",null,e.daeguGraduatedMen),l.a.createElement("td",null,e.daeguGraduatedWomen),l.a.createElement("td",null,e.otherMen),l.a.createElement("td",null,e.otherWomen),l.a.createElement("td",null,e.gedMen),l.a.createElement("td",null,e.gedWomen),l.a.createElement("td",null,e.daeguGraduatedMen+e.daeguUngraduatedMen+e.gedMen+e.otherMen),l.a.createElement("td",null,e.daeguGraduatedWomen+e.daeguUngraduatedWomen+e.gedWomen+e.otherWomen),l.a.createElement("td",null,e.daeguGraduatedMen+e.daeguUngraduatedMen+e.gedMen+e.otherMen+e.daeguGraduatedWomen+e.daeguUngraduatedWomen+e.gedWomen+e.otherWomen))})))))))},u=a(21),E=a(16),s=a(14),i=a(52),p=a(8),h=Object(o.c)((function(e){Object(r.a)(e);var t=Object(s.a)().store,a=Object(u.f)(),o=Object(n.useState)([]),m=Object(c.a)(o,2),h=m[0],g=m[1],S=Object(n.useState)([]),M=Object(c.a)(S,2),W=M[0],N=M[1],f=t.AdminStore,v=f.getReportInfo,w=f.getUserRate,b=i.a.GetUserRate,A=Object(n.useCallback)((function(){w(!0).then((function(e){g(e.data)})).catch((function(e){Object(E.a)(e,a)}))}),[]),k=Object(n.useCallback)((function(){v().then((function(e){N(e.data)})).catch((function(e){Object(E.a)(e,a)}))}),[]);return Object(n.useEffect)((function(){A(),k()}),[]),l.a.createElement(d,{tryDownExcel:function(){b().catch((function(e){p.b.error("\uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},rateStatus:h,reportStatus:W})})),g=a(167);t.default=function(){return l.a.createElement(g.a,null,l.a.createElement(h,null))}}}]);
//# sourceMappingURL=10.f9ac5ca9.chunk.js.map