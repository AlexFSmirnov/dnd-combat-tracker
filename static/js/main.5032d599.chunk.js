(this["webpackJsonpdnd-combat-tracker"]=this["webpackJsonpdnd-combat-tracker"]||[]).push([[0],{102:function(n,e,t){},126:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(10),i=t.n(c),o=(t(102),t(82)),l=t(167),u=t(19),d=t(69),f=t(21),s=t(70),m=t(50),h=t(71),b=t.n(h),v=t(72),p=t.n(v),g=t(38),E=t(14),x=[],j=function(n,e){var t=e.payload,r=t.id,a=t.character,c=n.find((function(n){return n.id===r}));if(c){var i=n.indexOf(c);return[].concat(Object(E.a)(n.slice(0,i)),[a],Object(E.a)(n.slice(i+1)))}return[].concat(Object(E.a)(n),[a])},O=function(n,e){var t=e.payload,r=t.id,a=t.maxHp,c=n.find((function(n){return n.id===r}));if(c){var i=n.indexOf(c);return[].concat(Object(E.a)(n.slice(0,i)),[Object(g.a)({},c,{maxHitPoints:a})],Object(E.a)(n.slice(i+1)))}return Object(E.a)(n)},w=function(n,e){var t=e.payload.id,r=n.find((function(n){return n.id===t}));if(r){var a=n.indexOf(r);return[].concat(Object(E.a)(n.slice(0,a)),Object(E.a)(n.slice(a+1)))}return Object(E.a)(n)},y=Object(f.c)({characters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHARACTER_ADDED":return[].concat(Object(E.a)(n),[e.payload]);case"CHARACTER_UPDATED":return j(n,e);case"CHARACTER_MAX_HP_UPDATED":return O(n,e);case"CHARACTER_DELETED":return w(n,e);case"CHARACTER_ALREADY_EXISTS":case"CHARACTER_FETCH_FAILED":default:return n}}}),C={key:"root",storage:b.a,stateReconciler:p.a},k=Object(f.d)(Object(m.a)(C,y),Object(f.a)(s.a)),H=Object(m.b)(k),A=t(4),S=t(5);function R(){var n=Object(A.a)(["\n    font-family: 'Yeon Sung';\n    font-size: 40px;\n    line-height: 40px;\n    color: orange;\n"]);return R=function(){return n},n}function T(){var n=Object(A.a)(["\n    width: 400px;\n    max-width: 80%;\n"]);return T=function(){return n},n}function P(){var n=Object(A.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return P=function(){return n},n}function L(){var n=Object(A.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return L=function(){return n},n}var z=S.b.div(L()),D=S.b.div(P()),V=S.b.img(T()),B=S.b.div(R()),I=function(){return a.a.createElement(z,null,a.a.createElement(D,null,a.a.createElement(V,{src:"/fire.gif"}),a.a.createElement(B,null,"Loading")))},M=t(13),_=t(158),U=t(170),Z=t(85),N=t(165),Y=t(166),F=t(2),W=t(149),X=t(153);function G(){var n=Object(A.a)(["\n    width: 100%;\n    flex-grow: 1;\n"]);return G=function(){return n},n}var J=S.b.div(G()),q=function(n){var e=n.children,t=Object(F.a)(n,["children"]);return a.a.createElement(J,null,a.a.createElement(W.a,Object.assign({position:"relative",color:"secondary"},t),a.a.createElement(X.a,null,e)))},$=t(171),K=t(6),Q=Object(K.a)((function(n){return{tooltip:{fontSize:16,backgroundColor:n.palette.secondary.main},arrow:{color:n.palette.secondary.main}}}))((function(n){return a.a.createElement($.a,Object.assign({arrow:!0},n))}));function nn(){var n=Object(A.a)(["\n    width: ","px;\n    transform: rotate(180deg);\n"]);return nn=function(){return n},n}function en(){var n=Object(A.a)(["\n    width: ","px;\n"]);return en=function(){return n},n}function tn(){var n=Object(A.a)(["\n    height: ","px;\n    transform: rotate(180deg);\n"]);return tn=function(){return n},n}function rn(){var n=Object(A.a)(["\n    height: ","px;\n"]);return rn=function(){return n},n}function an(){var n=Object(A.a)(["\n    ","\n    transform: rotate(180deg);\n"]);return an=function(){return n},n}function cn(){var n=Object(A.a)(["\n    ","\n    transform: rotateY(180deg);\n    transform: rotateX(180deg);\n"]);return cn=function(){return n},n}function on(){var n=Object(A.a)(["\n    ","\n    transform: rotateY(180deg);\n"]);return on=function(){return n},n}function ln(){var n=Object(A.a)(["\n    ","\n"]);return ln=function(){return n},n}function un(){var n=Object(A.a)(["\n    width: ","px;\n    height: ","px;\n"]);return un=function(){return n},n}function dn(){var n=Object(A.a)(["\n    width: ","px;\n    height: ","px;\n    ","\n    transition: background-color 0.3s;\n"]);return dn=function(){return n},n}function fn(){var n=Object(A.a)(["\n    display: flex;\n"]);return fn=function(){return n},n}function sn(){var n=Object(A.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return sn=function(){return n},n}function mn(){var n=Object(A.a)(["\n    display: flex;\n"]);return mn=function(){return n},n}function hn(){var n=Object(A.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n"]);return hn=function(){return n},n}var bn=S.b.div(hn()),vn=S.b.div(mn()),pn=S.b.div(sn()),gn=S.b.div(fn()),En=S.b.div(dn(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.backgroundColor&&"background-color: ".concat(n.backgroundColor,";")})),xn=Object(S.a)(un(),(function(n){return n.width}),(function(n){return n.height})),jn=Object(S.a)(ln(),xn),On=Object(S.a)(on(),xn),wn=Object(S.a)(cn(),xn),yn=Object(S.a)(an(),xn),Cn=Object(S.a)(rn(),(function(n){return n.height})),kn=Object(S.a)(tn(),(function(n){return n.height})),Hn=Object(S.a)(en(),(function(n){return n.width})),An=Object(S.a)(nn(),(function(n){return n.width})),Sn=function(n){return function(e){var t=e.color,r=e.backgroundColor,c=e.width,i=e.height,o=e.className;return a.a.createElement("svg",{className:o,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(i)},r?a.a.createElement("path",{style:{fill:r,zIndex:-1,transition:"fill 0.3s"},transform:n,d:"M615.2,646.2c-1.7,5.7-12.9,11.7-14.5,11.7H22.5c-1.7,0-12.8-6-14.5-11.7L8.2,19.3V12S16.1,2.3,23.4,1.4H599.80005c7.3.8,15.1,10.6,15.1,10.6v7.3Z"}):null,a.a.createElement("path",{style:{fill:t,zIndex:2,boxShadow:"0 0 20px grey"},transform:n,d:"M611.9,0H11L0,11.5v637L11,660H612l11-11.5V11.5ZM3,12.8l9.2-9.6h5.9A25.8384,25.8384,0,0,0,7,12.9H6.9v.2A36.38553,36.38553,0,0,0,3,21.7ZM3,26.9A42.92655,42.92655,0,0,1,6.9,15.7V644.3a13.90069,13.90069,0,0,1-1.1-2.1,51.50646,51.50646,0,0,1-2.9-9L3,26.9Zm9.2,629.9L3,647.2v-8.9a40.90524,40.90524,0,0,0,3.9,8.6v.2H7a24.86426,24.86426,0,0,0,11.1,9.8H12.2Zm10.1,0A22.56646,22.56646,0,0,1,8.6,647V13A23.74954,23.74954,0,0,1,22.4,3.1H600.6a22.56647,22.56647,0,0,1,13.7,9.8v634a23.74956,23.74956,0,0,1-13.8,9.9Zm597.6-9.6-9.2,9.6h-5.9a24.86437,24.86437,0,0,0,11.1-9.8h.1v-.2a36.38635,36.38635,0,0,0,3.9-8.6l.00006,9Zm0-14.1a41.717,41.717,0,0,1-3.9,11.2V15.7a13.89825,13.89825,0,0,1,1.1,2.1,51.50837,51.50837,0,0,1,2.9,9l-.1,606.3Zm0-611.4a40.9054,40.9054,0,0,0-3.9-8.6v-.2h-.1a24.86433,24.86433,0,0,0-11.1-9.8h5.9l9.2,9.6-.00007,9Z"}))}},Rn=Sn(),Tn=Sn("translate(0,-32)"),Pn=function(n){return function(e){var t=e.color,r=e.backgroundColor,c=e.width,i=e.height,o=e.className;return a.a.createElement("svg",{className:o,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(i)},r?a.a.createElement("polygon",{fill:r,style:{zIndex:-2},transform:n,points:"8 93 337 93 337 2 8 2 8 93"}):null,a.a.createElement("path",{fill:t,transform:n,d:"M344,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V81.91S2.53,86,0,86v2H6.14v7H8.82V3.31H335.18V91.69H8.82V95s1.06-1.54,3.91-1.54H331.27c2.84,0,3.9,1.52,3.91,1.54h2.68V88H344V86c-2.53,0-2.67-4.13-2.67-4.13V10.53S341.47,6.39,344,6.39ZM6.27,81.91H4.14V12.12H6.27Zm333.79.48h-2.12V12.61h2.12Z"}))}},Ln=Pn(),zn=Pn("translate(-32,0)"),Dn=Pn("translate(0,-32)"),Vn=function(n){return function(e){var t=e.color,r=e.backgroundColor,c=e.width,i=e.height,o=e.className;return a.a.createElement("svg",{className:o,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(i)},r?a.a.createElement("path",{style:{fill:r,zIndex:-1,transition:"fill 0.3s"},transform:n,d:"M275.08,719a32.47,32.47,0,0,0-1.23-4.29c-1.71-4.36-1.13-582.66-1.13-582.66s0-30.43-.58-49c-.36-11.85,1.72-26.54,3.28-35.6a4,4,0,0,1-1.49-1.64c-1.7-3.61-2.41-7.49-1-11.35a6.27,6.27,0,0,1,.93-1.69c-.7-3.15-.33-6.48-1.3-9.54a42.76,42.76,0,0,0-3.54-7,18.66,18.66,0,0,0-5-6.37c-2-1.48-4.08-2.5-5.8-4.27-1.74-.72-3.49-1.42-5.2-2.21l-.4-.21H29.41a5.1,5.1,0,0,1-3.58,1.27,5.83,5.83,0,0,1-2.25,1.44L23.19,6,23,6.05c-.42.25-.87.47-1.29.74a7.34,7.34,0,0,0-1.22.84c1-.91-.26.24-.45.41a5.85,5.85,0,0,1-2.83,1.33,52.05,52.05,0,0,0-3.9,4c-4.59,5.47-4.83,13.51-6.24,20.2,0,.14-.08.27-.11.4a11.08,11.08,0,0,1,.29,1.52c-.16-1.2.09.35.14.59q.14.63.3,1.26a21,21,0,0,0,.88,2.57c1.07,2.59-1.17,5.4-3.49,6.15a3.22,3.22,0,0,1-.7.14C5.94,55.14,8.24,70.62,7.86,83c-.58,18.57-.58,49-.58,49s.64,576.13-1,587.33a5.14,5.14,0,0,1,3.07,6,29.15,29.15,0,0,1-2.67,7,4.68,4.68,0,0,1,.85,2.91c-.27,14.38,12.13,22.59,23.77,28.18a5.7,5.7,0,0,1,.88.53h216.9a5.09,5.09,0,0,1,2.84-1.08,4.1,4.1,0,0,1,1.59-1.45c1-.5,2.07-.93,3.12-1.37l.64-.27-.55.24a6.87,6.87,0,0,0,1.29-.6c.22-.11.45-.18.68-.27,1-1,1.86-1.92,2.41-2.37,2.91-2.43,6.23-4.26,7.86-7.81a4.38,4.38,0,0,1,1.74-2c.81-4.9,2.13-9.72,2.58-14.7a5.32,5.32,0,0,1,.57-2c0-.19-.07-.36-.11-.51-.38-1.74-.87-3.44-1.28-5.17A4.8,4.8,0,0,1,275.08,719Z"}):null,a.a.createElement("path",{style:{fill:t,zIndex:2,boxShadow:"0 0 20px grey"},transform:n,d:"M275.28,654.52v-554c.77-12.76,2.64-38.62,5.52-48.14l.21-.69-.6-.38a21.36,21.36,0,0,1-3.68-3.14,62.8,62.8,0,0,1,2.34-9.56l.12-.34L276.7,10.17l-1.08-.34c-2.52-.8-9.71-4-9.71-8.12V0H15.09V1.71c0,4.13-7,7.26-9.71,8.12l-1.08.34L1.82,38.28l.12.34a64,64,0,0,1,2.34,9.54A21,21,0,0,1,.6,51.32L0,51.7l.21.69C3.09,61.89,5,87.7,5.72,100.48v554C5,667.23,3.09,703.1.21,712.61L0,713.3l.6.38a20.83,20.83,0,0,1,3.68,3.14,61.64,61.64,0,0,1-2.34,9.56l-.12.35,2.48,28.1,1.08.34c2.7.86,9.71,4,9.71,8.12V765H265.91v-1.71c0-4.13,7-7.26,9.71-8.12l1.08-.34,2.48-28.1-.12-.35a64,64,0,0,1-2.34-9.54,21,21,0,0,1,3.68-3.16l.6-.38-.21-.69c-2.88-9.5-4.74-45.31-5.51-58.09m-3.84,73.29s.45,1.07,1,2.61a29.79,29.79,0,0,1-1.33,12.42C268.18,751.6,261,758,250.25,761.58H30.68c-23-7.63-22.8-25.7-22.16-31.09.59-1.63,1.06-2.75,1.09-2.83a12.21,12.21,0,0,0-2.1-9.76c3.38-18.83,1.66-42.81,1.58-43.89V91.12c.09-1.19,1.81-25.21-1.57-44.05a12.41,12.41,0,0,0,2.05-9.88s-.45-1.07-1-2.61A29.8,29.8,0,0,1,9.87,22.16C12.82,13.4,20,7,30.76,3.42H250.32c23.05,7.63,22.8,25.7,22.16,31.09-.59,1.63-1.06,2.75-1.09,2.84a12.19,12.19,0,0,0,2.1,9.75c-3.38,18.83-1.66,42.81-1.58,43.89V673.88c-.09,1.19-1.81,25.21,1.57,44a12.41,12.41,0,0,0-2.05,9.88m7.41-675.3c-1.71,6.15-3,17.57-4,28.45a191.48,191.48,0,0,1,1.5-30.51,23.59,23.59,0,0,0,2.5,2.06m-5.72-14.58c.09-.21,1.13-2.72,2.12-5.82l.51,5.74A61.16,61.16,0,0,0,274,44.4a9.5,9.5,0,0,1-.89-6.47m.42-25.21,1.24,14.07c-.25,1.21-.59,2.48-1,3.69a30.1,30.1,0,0,0-1.55-8.72c-2-6-6.88-13.57-18.42-18.34h8.89c1.25,5.24,8,8.26,10.8,9.3M18.25,3.42h8.88C10.49,10.29,7.46,23.17,7.21,30.61c-.38-1.25-.74-2.56-1-3.82L7.45,12.72c2.79-1,9.55-4.06,10.8-9.3m-13,34.43.51-5.74c1,3.07,2,5.53,2.07,5.66A9.73,9.73,0,0,1,7,44.33a62.24,62.24,0,0,0-1.73-6.48m-.6,12.59A191.42,191.42,0,0,1,6.15,81c-1-10.87-2.29-22.29-4-28.44a21.9,21.9,0,0,0,2.49-2.07M2.15,712.49c1.71-6.15,3-17.57,4-28.44a191.41,191.41,0,0,1-1.5,30.5,23.59,23.59,0,0,0-2.5-2.06m5.72,14.58c-.09.21-1.13,2.72-2.12,5.82l-.51-5.74A60.54,60.54,0,0,0,7,720.6a9.5,9.5,0,0,1,.89,6.47m-.42,25.21L6.21,738.21c.25-1.21.59-2.47,1-3.69a30,30,0,0,0,1.55,8.72c2,6,6.88,13.57,18.42,18.34H18.25c-1.25-5.24-8-8.26-10.8-9.3m255.3,9.3h-8.88c16.64-6.86,19.67-19.75,19.92-27.19.38,1.26.74,2.56,1,3.82l-1.24,14.07c-2.79,1-9.55,4.06-10.8,9.3m13-34.43-.51,5.74c-1-3.08-2-5.53-2.07-5.66a9.73,9.73,0,0,1,.85-6.56,62.24,62.24,0,0,0,1.73,6.48m.6-12.59a191.37,191.37,0,0,1-1.51-30.51c1,10.88,2.29,22.29,4,28.44a21.9,21.9,0,0,0-2.49,2.07"}))}},Bn=Vn(),In=Vn("translate(0,-100)");function Mn(){var n=Object(A.a)(["",""]);return Mn=function(){return n},n}function _n(){var n=Object(A.a)(["",""]);return _n=function(){return n},n}function Un(){var n=Object(A.a)(["",""]);return Un=function(){return n},n}function Zn(){var n=Object(A.a)(["",""]);return Zn=function(){return n},n}function Nn(){var n=Object(A.a)(["",""]);return Nn=function(){return n},n}function Yn(){var n=Object(A.a)(["",""]);return Yn=function(){return n},n}function Fn(){var n=Object(A.a)(["",""]);return Fn=function(){return n},n}function Wn(){var n=Object(A.a)(["",""]);return Wn=function(){return n},n}var Xn=function(n){var e=n.partSize,t=n.Corner,c=n.Top,i=n.Side,o=Object(S.b)(t)(Wn(),jn),l=Object(S.b)(t)(Fn(),On),u=Object(S.b)(t)(Yn(),wn),d=Object(S.b)(t)(Nn(),yn),f=Object(S.b)(c)(Zn(),Cn),s=Object(S.b)(c)(Un(),kn),m=Object(S.b)(i)(_n(),Hn),h=Object(S.b)(i)(Mn(),An);return function(n){var t=n.color,c=void 0===t?"#b13735":t,i=n.backgroundColor,b=n.className,v=Object(r.useRef)(null),p=Object(r.useState)(e),g=Object(M.a)(p,2),E=g[0],x=g[1],j=Object(r.useState)(e),O=Object(M.a)(j,2),w=O[0],y=O[1];Object(r.useEffect)((function(){return window.addEventListener("resize",C),function(){return window.removeEventListener("resize",C)}}),[]),Object(r.useEffect)((function(){C()}),[v]);var C=function(){var n=v.current;n&&(x(n.clientWidth-2*e),y(n.clientHeight-2*e))},k={color:c,backgroundColor:i,width:e,height:e};return a.a.createElement(bn,{ref:v,className:b},v.current?a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null,a.a.createElement(o,k),a.a.createElement(f,Object.assign({},k,{width:E})),a.a.createElement(l,k)),a.a.createElement(pn,null,a.a.createElement(m,Object.assign({},k,{height:w})),a.a.createElement(En,Object.assign({},k,{height:w,width:E})),a.a.createElement(h,Object.assign({},k,{height:w}))),a.a.createElement(gn,null,a.a.createElement(u,k),a.a.createElement(s,Object.assign({},k,{width:E})),a.a.createElement(d,k))):null)}},Gn=Xn({partSize:32,Corner:Rn,Top:function(n){var e=n.color,t=n.backgroundColor,r=n.width,c=n.height,i=n.className;return a.a.createElement("div",{className:i,style:{backgroundColor:t,width:r,height:c,borderTop:"3px solid ".concat(e),boxSizing:"border-box",transition:"background-color 0.3s"}})},Side:Tn}),Jn=Xn({partSize:32,Corner:Ln,Top:zn,Side:Dn}),qn=Xn({partSize:128,Corner:Bn,Top:function(n){var e=n.color,t=n.backgroundColor,r=n.width,c=n.height,i=n.className;return a.a.createElement("div",{className:i,style:{backgroundColor:t,width:r,height:c,borderTop:"3.5px solid ".concat(e),boxSizing:"border-box"}})},Side:In}),$n=t(49),Kn=t.n($n),Qn=t(80),ne=t(81),ee=t.n(ne),te=function(){var n=Object(Qn.a)(Kn.a.mark((function n(e){var t,r,a;return Kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.characterId,r="https://www.dndbeyond.com/character/".concat(t,"/json"),n.next=4,ee()({method:"GET",url:r,withCredentials:!1});case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),re=function(n,e){return function(t,r){var a=n.split("/")[n.split("/").length-1],c=r().characters;c&&c.every((function(n){return n.id.toString()!==a}))?te({characterId:a}).then((function(n){var r=n.id,a=n.name,c=n.removedHitPoints,i=n.temporaryHitPoints,o=n.deathSaves,l=n.avatarUrl,u=n.themeColor,d=n.defaultBackdrop;t(ce({id:r,name:a,maxHitPoints:e,removedHitPoints:c,temporaryHitPoints:i,deathSaves:o,avatarUrl:l,themeColor:u,defaultBackdrop:d}))}),(function(n){return t(oe(n.message))})):t(ae(parseInt(a),e))}},ae=function(n,e){return function(t,r){var a=r().characters;a&&(a.find((function(e){return e.id===n}))?te({characterId:n.toString()}).then((function(n){var r=n.id,a=n.name,c=n.removedHitPoints,i=n.temporaryHitPoints,o=n.deathSaves,l=n.avatarUrl,u=n.themeColor,d=n.defaultBackdrop;t(ie(r,{id:r,name:a,maxHitPoints:e,removedHitPoints:c,temporaryHitPoints:i,deathSaves:o,avatarUrl:l,themeColor:u,defaultBackdrop:d}))}),(function(n){return t(oe(n.message))})):t(re(n.toString(),e)))}},ce=function(n){return{type:"CHARACTER_ADDED",payload:n}},ie=function(n,e){return{type:"CHARACTER_UPDATED",payload:{id:n,character:e}}},oe=function(n){return{type:"CHARACTER_FETCH_FAILED",error:n}},le=t(172);function ue(){var n=Object(A.a)(["\n    font-size: 32px;\n    line-height: 32px;\n    width: ","px;\n    text-align: center;\n"]);return ue=function(){return n},n}function de(){var n=Object(A.a)(["\n    height: 64px;\n    width: 200px;\n    margin-left: auto;\n    margin-right: 16px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n"]);return de=function(){return n},n}function fe(){var n=Object(A.a)(["\n    height: 20px;\n    width: 100%;\n"]);return fe=function(){return n},n}function se(){var n=Object(A.a)(["\n    font-family: 'Yeon Sung';\n    font-size: 24px;\n    line-height: 24px;\n"]);return se=function(){return n},n}function me(){var n=Object(A.a)(["\n    height: 64px;\n    margin-right: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n"]);return me=function(){return n},n}function he(){var n=Object(A.a)(["\n    && {\n        height: 60px;\n        width: 60px;\n    }\n    margin: 0 8px;\n"]);return he=function(){return n},n}function be(){var n=Object(A.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n"]);return be=function(){return n},n}function ve(){var n=Object(A.a)(["\n    position: relative;\n    height: 100%;\n    border-radius: 20px;\n"]);return ve=function(){return n},n}function pe(){var n=Object(A.a)(["\n    height: 80px;\n\n    &:not(:last-child) {\n        margin-bottom: 8px;\n    }\n"]);return pe=function(){return n},n}var ge=S.b.div(pe()),Ee=S.b.div(ve()),xe=S.b.div(be()),je=Object(S.b)(le.a)(he()),Oe=S.b.div(me()),we=S.b.div(se()),ye=S.b.div(fe()),Ce=S.b.div(de()),ke=S.b.div(ue(),(function(n){return n.width})),He=Object(u.b)(null,{updateCharacterById:ae})((function(n){var e=n.character,t=n.updateCharacterById,c=e.id,i=e.name,o=e.maxHitPoints,l=e.removedHitPoints,u=e.temporaryHitPoints,d=(e.deathSaves,e.avatarUrl),f=e.themeColor;e.defaultBackdrop;return Object(r.useEffect)((function(){return t(c,o)}),[c,o,t]),a.a.createElement(ge,null,a.a.createElement(Ee,null,a.a.createElement(Gn,{color:f&&f.themeColor||void 0,backgroundColor:"white"}),a.a.createElement(xe,null,a.a.createElement(je,{src:d,variant:"rounded"}),a.a.createElement(Oe,null,a.a.createElement(we,null,i),a.a.createElement(ye,null)),a.a.createElement(Ce,null,a.a.createElement(ke,{width:64},o-l),a.a.createElement(ke,{width:16,style:{color:"grey"}},"/"),a.a.createElement(ke,{width:64},o),a.a.createElement(ke,{width:48,style:{color:"grey"}},"[",u,"]")))))}));function Ae(){var n=Object(A.a)(["\n    ","\n    bottom: 0;\n    background: linear-gradient(transparent, white);\n"]);return Ae=function(){return n},n}function Se(){var n=Object(A.a)(["\n    ","\n    top: 0;\n    background: linear-gradient(white, transparent);\n"]);return Se=function(){return n},n}function Re(){var n=Object(A.a)(["\n    position: absolute;\n    left: calc(2%);\n    width: 96%;\n    border-radius: 16px;\n    height: 20px;\n"]);return Re=function(){return n},n}function Te(){var n=Object(A.a)(["\n    height: 448px;\n    padding: 16px;\n\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]);return Te=function(){return n},n}function Pe(){var n=Object(A.a)(["\n    position: relative;\n    width: 50%;\n    max-width: 600px;\n    height: 480px;\n"]);return Pe=function(){return n},n}var Le=S.b.div(Pe()),ze=S.b.div(Te()),De=Object(S.a)(Re()),Ve=S.b.div(Se(),De),Be=S.b.div(Ae(),De),Ie=Object(u.b)((function(n){return{characters:n.characters||[]}}))((function(n){var e=n.characters;return a.a.createElement(Le,null,a.a.createElement(ze,null,e.map((function(n){return a.a.createElement(He,{key:n.id,character:n})}))),a.a.createElement(Ve,null),a.a.createElement(Be,null),a.a.createElement(qn,null))}));function Me(){var n=Object(A.a)(["\n    font-size: 40px;\n    line-height: 40px;\n    text-align: center;\n    user-select: none;\n"]);return Me=function(){return n},n}function _e(){var n=Object(A.a)(["\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return _e=function(){return n},n}function Ue(){var n=Object(A.a)(["\n    position: relative;\n    width: 80px;\n    height: 80px;\n    margin-bottom: 8px;\n\n    &:not(:nth-child(3n + 1)) {\n        margin-right: 8px;\n    }\n"]);return Ue=function(){return n},n}function Ze(){var n=Object(A.a)(["\n    font-size: 40px;\n    line-height: 40px;\n    user-select: none;\n    z-index: 10;\n"]);return Ze=function(){return n},n}function Ne(){var n=Object(A.a)(["\n    position: absolute;\n    width: 256px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return Ne=function(){return n},n}function Ye(){var n=Object(A.a)(["\n    width: 256px;\n    height: 80px;\n    margin-bottom: 16px;\n"]);return Ye=function(){return n},n}function Fe(){var n=Object(A.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 256px;\n    height: 460px;\n    padding: 16px;\n    padding-bottom: 0;\n\n    display: flex;\n    flex-wrap: wrap;\n"]);return Fe=function(){return n},n}function We(){var n=Object(A.a)(["\n    position: relative;\n    width: 288px;\n    height: 480px;\n"]);return We=function(){return n},n}var Xe=S.b.div(We()),Ge=S.b.div(Fe()),Je=S.b.div(Ye()),qe=S.b.div(Ne()),$e=S.b.div(Ze()),Ke=S.b.div(Ue()),Qe=S.b.div(_e()),nt=S.b.div(Me()),et=t(156),tt=t(157),rt=function(n){var e=n.children,t=n.padding,c=n.color,i=n.onClick,o=Object(r.useState)("white"),l=Object(M.a)(o,2),u=l[0],d=l[1];return a.a.createElement(Ke,{onClick:function(){i&&i(),d("#ccc"),setTimeout((function(){return d("white")}),100)}},a.a.createElement(Gn,{color:c||"#555",backgroundColor:u}),a.a.createElement(Qe,null,a.a.createElement(nt,{style:{padding:t}},e)))},at=function(){var n=Object(r.useState)(0),e=Object(M.a)(n,2),t=e[0],c=e[1],i=function(n){return function(){return c((function(e){return 10*e+n}))}},o=function(n){return function(){console.log("Submitted: ".concat(n*t)),c(0)}};return a.a.createElement(Xe,null,a.a.createElement(qn,{backgroundColor:"rgba(255, 255, 255, 0.8)"}),a.a.createElement(Ge,null,a.a.createElement(Je,{onClick:function(){return c(0)}},a.a.createElement(qe,null,a.a.createElement($e,null,t||""),a.a.createElement(Jn,{color:"#555",backgroundColor:"white"}))),a.a.createElement(rt,{onClick:i(7)},"7"),a.a.createElement(rt,{onClick:i(8)},"8"),a.a.createElement(rt,{onClick:i(9)},"9"),a.a.createElement(rt,{onClick:i(4)},"4"),a.a.createElement(rt,{onClick:i(5)},"5"),a.a.createElement(rt,{onClick:i(6)},"6"),a.a.createElement(rt,{onClick:i(1)},"1"),a.a.createElement(rt,{onClick:i(2)},"2"),a.a.createElement(rt,{onClick:i(3)},"3"),a.a.createElement(rt,{onClick:o(-1),padding:"8px 0 0 0",color:"#b13735"},a.a.createElement(et.a,{fontSize:"large"})),a.a.createElement(rt,{onClick:i(0)},"0"),a.a.createElement(rt,{onClick:o(1),padding:"8px 0 0 0",color:"#08a300"},a.a.createElement(tt.a,{fontSize:"large"}))))};function ct(){var n=Object(A.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - 24px);\n    height: calc(100% - 16px);\n    margin: 8px 12px;\n    touch-action: none;\n"]);return ct=function(){return n},n}function it(){var n=Object(A.a)(["\n    position: relative;\n    width: 920px;\n    height: 260px;\n    margin-top: 16px;\n"]);return it=function(){return n},n}var ot=S.b.div(it()),lt=S.b.canvas(ct()),ut=function(){var n=Object(r.useRef)(null),e=Object(r.useRef)(null),t=Object(r.useState)({}),c=Object(M.a)(t,2),i=c[0],o=c[1];Object(r.useEffect)((function(){return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}),[]),Object(r.useEffect)((function(){l()}),[n]);var l=function(){var e=n.current;if(e){var t=e.getBoundingClientRect(),r=t.width,a=t.height;o({width:r,height:a})}},u=Object(g.a)({ref:n,onPointerMove:function(t){var r=n.current;if(r){var a=r.getContext("2d");if(a){var c=t.pressure,i=t.buttons,o=t.clientX,l=t.clientY,u=o-r.getBoundingClientRect().x,d=l-r.getBoundingClientRect().y,f=c||1;if(!c||!i)return void(e.current=null);e.current&&(a.beginPath(),a.moveTo(e.current.x,e.current.y),a.lineTo(u,d),a.lineWidth=2*f,a.stroke()),e.current={x:u,y:d}}}},onPointerUp:function(){return e.current=null}},i);return a.a.createElement(ot,null,a.a.createElement(lt,u),a.a.createElement(qn,null))};function dt(){var n=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n"]);return dt=function(){return n},n}function ft(){var n=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    & > :not(:last-child) {\n        margin-right: 32px;\n    }\n"]);return ft=function(){return n},n}function st(){var n=Object(A.a)(["\n    width: 100%;\n    height: 100%;\n    max-width: 1200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return st=function(){return n},n}function mt(){var n=Object(A.a)(["\n    position: absolute;\n    top: 64px;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 64px);\n    display: flex;\n    justify-content: center;\n"]);return mt=function(){return n},n}function ht(){var n=Object(A.a)(['\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-image: url("','");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n']);return ht=function(){return n},n}var bt=S.b.div(ht(),(function(n){return n.backgroundImageSrc})),vt=S.b.div(mt()),pt=S.b.div(st()),gt=S.b.div(ft()),Et=S.b.div(dt()),xt=t(164),jt=t(160),Ot=t(161),wt=t(162),yt=t(168),Ct=t(163),kt=t(127),Ht=t(159);function At(){var n=Object(A.a)(["\n    flex-grow: 1;\n"]);return At=function(){return n},n}function St(){var n=Object(A.a)(["\n"]);return St=function(){return n},n}function Rt(){var n=Object(A.a)(["\n    && {\n        padding: 0 12px;\n    }\n\n    & > :not(:last-child) {\n        margin-right: 16px;\n    }\n"]);return Rt=function(){return n},n}var Tt=Object(S.b)(X.a)(Rt()),Pt=(S.b.div(St()),S.b.div(At())),Lt=Object(u.b)(null,{updateCharacterMaxHp:function(n,e){return{type:"CHARACTER_MAX_HP_UPDATED",payload:{id:n,maxHp:e}}},deleteCharacter:function(n){return{type:"CHARACTER_DELETED",payload:{id:n}}}})((function(n){var e=n.character,t=n.updateCharacterMaxHp,c=n.deleteCharacter,i=Object(r.useState)(e.maxHitPoints.toString()),o=Object(M.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(!1),f=Object(M.a)(d,2),s=f[0],m=f[1],h=function(){return m(!1)},b=e.name,v=e.avatarUrl;return a.a.createElement(kt.a,{elevation:3,style:{width:"100%"}},a.a.createElement(Tt,null,a.a.createElement(le.a,{variant:"rounded",src:v}),a.a.createElement(Z.a,{variant:"h6"},b),a.a.createElement(Pt,null),a.a.createElement(yt.a,{label:"Max HP",type:"number",value:l,onChange:function(n){var r=e.id,a=n.target.value;u(a),t(r,parseInt(a)||0)},style:{width:"64px"}}),a.a.createElement(_.a,{onClick:function(){return m(!0)}},a.a.createElement(Ht.a,null))),a.a.createElement(U.a,{open:s,onClose:h},a.a.createElement(jt.a,null,"Are you sure you want to delete ",b,"?"),a.a.createElement(Ot.a,null,a.a.createElement(wt.a,null,"This will remove them from your list of saved characters. You will only be able to undo this by adding this character again.")),a.a.createElement(Ct.a,null,a.a.createElement(xt.a,{onClick:h,color:"secondary"},"Cancel"),a.a.createElement(xt.a,{onClick:function(){var n=e.id;c(n),h()},color:"primary",variant:"contained"},"Delete"))))}));function zt(){var n=Object(A.a)(["\n    width: 40%;\n    max-width: 600px;\n    margin: 16px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    & > :not(:last-child) {\n        margin-bottom: 8px;\n    }\n"]);return zt=function(){return n},n}var Dt=S.b.div(zt()),Vt=Object(u.b)((function(n){return{characters:n&&n.characters||[]}}),{addCharacterByUrl:re})((function(n){var e=n.characters,t=n.addCharacterByUrl,c=Object(r.useState)(!1),i=Object(M.a)(c,2),o=i[0],l=i[1],u=Object(r.useState)(""),d=Object(M.a)(u,2),f=d[0],s=d[1],m=Object(r.useState)(""),h=Object(M.a)(m,2),b=h[0],v=h[1],p=function(){return l(!1)};return a.a.createElement(Dt,null,e.map((function(n){return a.a.createElement(Lt,{key:n.id,character:n})})),a.a.createElement(xt.a,{variant:"outlined",color:"primary",onClick:function(){return l(!0)}},"Add character"),a.a.createElement(U.a,{open:o,onClose:p},a.a.createElement(jt.a,null,"Import new character from D&D Beyond"),a.a.createElement(Ot.a,null,a.a.createElement(wt.a,null,'Paste a link to the character you want to add in the input field below. Make sure the character privacy is set to "Public", otherwise it will not be imported.',a.a.createElement("br",null)," ",a.a.createElement("br",null),"Optionally, specify character's maximum hit points. You will be able to change them later."),a.a.createElement(yt.a,{autoFocus:!0,fullWidth:!0,margin:"dense",label:"Character URL",value:f,onChange:function(n){return s(n.target.value)}}),a.a.createElement(yt.a,{fullWidth:!0,margin:"dense",label:"Max Hit Points",value:b,onChange:function(n){return v(n.target.value)}})),a.a.createElement(Ct.a,null,a.a.createElement(xt.a,{onClick:p,color:"secondary"},"Cancel"),a.a.createElement(xt.a,{onClick:function(){p(),s(""),t(f,parseInt(b)||0)},color:"primary",variant:"contained",disabled:!f},"Import"))))}));function Bt(){var n=Object(A.a)(["\n    width: 100%;\n    height: 100%;\n"]);return Bt=function(){return n},n}var It=S.b.div(Bt()),Mt=function(){return a.a.createElement(It,null,a.a.createElement(Vt,null))},_t=Object(u.b)((function(n){return{currentBackgroundUrl:n.characters&&n.characters[1]&&n.characters[1].defaultBackdrop.largeBackdropAvatarUrl}}))((function(n){var e=n.currentBackgroundUrl,t=Object(r.useState)(!0),c=Object(M.a)(t,2),i=c[0],o=c[1],l=function(){return o(!1)};return a.a.createElement(bt,{backgroundImageSrc:e},a.a.createElement(q,null,a.a.createElement(Q,{title:"View and edit saved characters"},a.a.createElement(_.a,{color:"inherit",onClick:function(){return o(!0)}},a.a.createElement(N.a,null)))),a.a.createElement(vt,null,a.a.createElement(pt,null,a.a.createElement(gt,null,a.a.createElement(Ie,null),a.a.createElement(at,null)),a.a.createElement(Et,null,a.a.createElement(ut,null)))),a.a.createElement(U.a,{fullScreen:!0,open:!!i,onClose:l},a.a.createElement(q,{color:"primary"},a.a.createElement(_.a,{color:"inherit",onClick:l},a.a.createElement(Y.a,null)),a.a.createElement(Z.a,{variant:"h6",style:{marginLeft:"8px"}},"Saved Characters")),a.a.createElement(Mt,null)))})),Ut=Object(o.a)({palette:{primary:{main:"#b13735"},secondary:{main:"#555"}},typography:{fontFamily:"Cairo"}}),Zt=function(){return a.a.createElement(l.a,{theme:Ut},a.a.createElement(u.a,{store:k},a.a.createElement(d.PersistGate,{loading:a.a.createElement(I,null),persistor:H},a.a.createElement(_t,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},97:function(n,e,t){n.exports=t(126)}},[[97,1,2]]]);
//# sourceMappingURL=main.5032d599.chunk.js.map