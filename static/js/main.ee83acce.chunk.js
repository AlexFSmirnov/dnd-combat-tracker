(this["webpackJsonpdnd-combat-tracker"]=this["webpackJsonpdnd-combat-tracker"]||[]).push([[0],{110:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(10),i=t.n(c),o=(t(86),t(74)),u=t(136),l=t(22),d=t(60),f=t(16),s=t(61),h=t(44),b=t(62),m=t.n(b),v=t(63),p=t.n(v),g=t(17),x=[],j=Object(f.c)({characters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHARACTER_ADDED":return[].concat(Object(g.a)(n),[e.payload]);case"CHARACTER_UPDATED":var t=e.payload,r=t.id,a=t.character,c=n.find((function(n){return n.id===r}));if(c){var i=n.indexOf(c);return[].concat(Object(g.a)(n.slice(0,i)),[a],Object(g.a)(n.slice(i+1)))}return[].concat(Object(g.a)(n),[a]);case"CHARACTER_ALREADY_EXISTS":case"CHARACTER_FETCH_FAILED":default:return n}}}),E={key:"root",storage:m.a,stateReconciler:p.a},O=Object(f.d)(Object(h.a)(E,j),Object(f.a)(s.a)),w=Object(h.b)(O),y=t(2),C=t(3);function k(){var n=Object(y.a)(["\n    font-family: 'Yeon Sung';\n    font-size: 40px;\n    line-height: 40px;\n    color: orange;\n"]);return k=function(){return n},n}function H(){var n=Object(y.a)(["\n    width: 400px;\n    max-width: 80%;\n"]);return H=function(){return n},n}function S(){var n=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return S=function(){return n},n}function A(){var n=Object(y.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return A=function(){return n},n}var z=C.b.div(A()),L=C.b.div(S()),V=C.b.img(H()),B=C.b.div(k()),R=function(){return a.a.createElement(z,null,a.a.createElement(L,null,a.a.createElement(V,{src:"/fire.gif"}),a.a.createElement(B,null,"Loading")))},T=t(15),P=t(138),I=t(137),D=t(135),Z=t(133),N=t(134),M=t(4),U=t(128),_=t(131);function F(){var n=Object(y.a)(["\n    width: 100%;\n    flex-grow: 1;\n"]);return F=function(){return n},n}var Y=C.b.div(F()),W=function(n){var e=n.children,t=Object(M.a)(n,["children"]);return a.a.createElement(Y,null,a.a.createElement(U.a,Object.assign({position:"relative",color:"secondary"},t),a.a.createElement(_.a,null,e)))},X=t(139),G=t(7),J=Object(G.a)((function(n){return{tooltip:{fontSize:20,backgroundColor:n.palette.secondary.main},arrow:{color:n.palette.secondary.main}}}))((function(n){return a.a.createElement(X.a,Object.assign({arrow:!0},n))}));function q(){var n=Object(y.a)(["\n    width: ","px;\n    transform: rotate(180deg);\n"]);return q=function(){return n},n}function $(){var n=Object(y.a)(["\n    width: ","px;\n"]);return $=function(){return n},n}function K(){var n=Object(y.a)(["\n    height: ","px;\n    transform: rotate(180deg);\n"]);return K=function(){return n},n}function Q(){var n=Object(y.a)(["\n    height: ","px;\n"]);return Q=function(){return n},n}function nn(){var n=Object(y.a)(["\n    ","\n    transform: rotate(180deg);\n"]);return nn=function(){return n},n}function en(){var n=Object(y.a)(["\n    ","\n    transform: rotateY(180deg);\n    transform: rotateX(180deg);\n"]);return en=function(){return n},n}function tn(){var n=Object(y.a)(["\n    ","\n    transform: rotateY(180deg);\n"]);return tn=function(){return n},n}function rn(){var n=Object(y.a)(["\n    ","\n"]);return rn=function(){return n},n}function an(){var n=Object(y.a)(["\n    width: ","px;\n    height: ","px;\n"]);return an=function(){return n},n}function cn(){var n=Object(y.a)(["\n    width: ","px;\n    height: ","px;\n    ","\n    transition: background-color 0.3s;\n"]);return cn=function(){return n},n}function on(){var n=Object(y.a)(["\n    display: flex;\n"]);return on=function(){return n},n}function un(){var n=Object(y.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return un=function(){return n},n}function ln(){var n=Object(y.a)(["\n    display: flex;\n"]);return ln=function(){return n},n}function dn(){var n=Object(y.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n"]);return dn=function(){return n},n}var fn=C.b.div(dn()),sn=C.b.div(ln()),hn=C.b.div(un()),bn=C.b.div(on()),mn=C.b.div(cn(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.backgroundColor&&"background-color: ".concat(n.backgroundColor,";")})),vn=Object(C.a)(an(),(function(n){return n.width}),(function(n){return n.height})),pn=Object(C.a)(rn(),vn),gn=Object(C.a)(tn(),vn),xn=Object(C.a)(en(),vn),jn=Object(C.a)(nn(),vn),En=Object(C.a)(Q(),(function(n){return n.height})),On=Object(C.a)(K(),(function(n){return n.height})),wn=Object(C.a)($(),(function(n){return n.width})),yn=Object(C.a)(q(),(function(n){return n.width})),Cn=function(n){return function(e){var t=e.color,r=e.backgroundColor,c=e.width,i=e.height,o=e.className;return a.a.createElement("svg",{className:o,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(i)},r?a.a.createElement("path",{style:{fill:r,zIndex:-1,transition:"fill 0.3s"},transform:n,d:"M615.2,646.2c-1.7,5.7-12.9,11.7-14.5,11.7H22.5c-1.7,0-12.8-6-14.5-11.7L8.2,19.3V12S16.1,2.3,23.4,1.4H599.80005c7.3.8,15.1,10.6,15.1,10.6v7.3Z"}):null,a.a.createElement("path",{style:{fill:t,zIndex:2,boxShadow:"0 0 20px grey"},transform:n,d:"M611.9,0H11L0,11.5v637L11,660H612l11-11.5V11.5ZM3,12.8l9.2-9.6h5.9A25.8384,25.8384,0,0,0,7,12.9H6.9v.2A36.38553,36.38553,0,0,0,3,21.7ZM3,26.9A42.92655,42.92655,0,0,1,6.9,15.7V644.3a13.90069,13.90069,0,0,1-1.1-2.1,51.50646,51.50646,0,0,1-2.9-9L3,26.9Zm9.2,629.9L3,647.2v-8.9a40.90524,40.90524,0,0,0,3.9,8.6v.2H7a24.86426,24.86426,0,0,0,11.1,9.8H12.2Zm10.1,0A22.56646,22.56646,0,0,1,8.6,647V13A23.74954,23.74954,0,0,1,22.4,3.1H600.6a22.56647,22.56647,0,0,1,13.7,9.8v634a23.74956,23.74956,0,0,1-13.8,9.9Zm597.6-9.6-9.2,9.6h-5.9a24.86437,24.86437,0,0,0,11.1-9.8h.1v-.2a36.38635,36.38635,0,0,0,3.9-8.6l.00006,9Zm0-14.1a41.717,41.717,0,0,1-3.9,11.2V15.7a13.89825,13.89825,0,0,1,1.1,2.1,51.50837,51.50837,0,0,1,2.9,9l-.1,606.3Zm0-611.4a40.9054,40.9054,0,0,0-3.9-8.6v-.2h-.1a24.86433,24.86433,0,0,0-11.1-9.8h5.9l9.2,9.6-.00007,9Z"}))}},kn=Cn(),Hn=Cn("translate(0,-32)"),Sn=function(n){return function(e){var t=e.color,r=e.backgroundColor,c=e.width,i=e.height,o=e.className;return a.a.createElement("svg",{className:o,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(i)},r?a.a.createElement("polygon",{fill:r,style:{zIndex:-2},transform:n,points:"8 93 337 93 337 2 8 2 8 93"}):null,a.a.createElement("path",{fill:t,transform:n,d:"M344,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V81.91S2.53,86,0,86v2H6.14v7H8.82V3.31H335.18V91.69H8.82V95s1.06-1.54,3.91-1.54H331.27c2.84,0,3.9,1.52,3.91,1.54h2.68V88H344V86c-2.53,0-2.67-4.13-2.67-4.13V10.53S341.47,6.39,344,6.39ZM6.27,81.91H4.14V12.12H6.27Zm333.79.48h-2.12V12.61h2.12Z"}))}},An=Sn(),zn=Sn("translate(-32,0)"),Ln=Sn("translate(0,-32)"),Vn=function(n){return function(e){var t=e.color,r=e.backgroundColor,c=e.width,i=e.height,o=e.className;return a.a.createElement("svg",{className:o,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(i)},r?a.a.createElement("path",{style:{fill:r,zIndex:-1,transition:"fill 0.3s"},transform:n,d:"M275.08,719a32.47,32.47,0,0,0-1.23-4.29c-1.71-4.36-1.13-582.66-1.13-582.66s0-30.43-.58-49c-.36-11.85,1.72-26.54,3.28-35.6a4,4,0,0,1-1.49-1.64c-1.7-3.61-2.41-7.49-1-11.35a6.27,6.27,0,0,1,.93-1.69c-.7-3.15-.33-6.48-1.3-9.54a42.76,42.76,0,0,0-3.54-7,18.66,18.66,0,0,0-5-6.37c-2-1.48-4.08-2.5-5.8-4.27-1.74-.72-3.49-1.42-5.2-2.21l-.4-.21H29.41a5.1,5.1,0,0,1-3.58,1.27,5.83,5.83,0,0,1-2.25,1.44L23.19,6,23,6.05c-.42.25-.87.47-1.29.74a7.34,7.34,0,0,0-1.22.84c1-.91-.26.24-.45.41a5.85,5.85,0,0,1-2.83,1.33,52.05,52.05,0,0,0-3.9,4c-4.59,5.47-4.83,13.51-6.24,20.2,0,.14-.08.27-.11.4a11.08,11.08,0,0,1,.29,1.52c-.16-1.2.09.35.14.59q.14.63.3,1.26a21,21,0,0,0,.88,2.57c1.07,2.59-1.17,5.4-3.49,6.15a3.22,3.22,0,0,1-.7.14C5.94,55.14,8.24,70.62,7.86,83c-.58,18.57-.58,49-.58,49s.64,576.13-1,587.33a5.14,5.14,0,0,1,3.07,6,29.15,29.15,0,0,1-2.67,7,4.68,4.68,0,0,1,.85,2.91c-.27,14.38,12.13,22.59,23.77,28.18a5.7,5.7,0,0,1,.88.53h216.9a5.09,5.09,0,0,1,2.84-1.08,4.1,4.1,0,0,1,1.59-1.45c1-.5,2.07-.93,3.12-1.37l.64-.27-.55.24a6.87,6.87,0,0,0,1.29-.6c.22-.11.45-.18.68-.27,1-1,1.86-1.92,2.41-2.37,2.91-2.43,6.23-4.26,7.86-7.81a4.38,4.38,0,0,1,1.74-2c.81-4.9,2.13-9.72,2.58-14.7a5.32,5.32,0,0,1,.57-2c0-.19-.07-.36-.11-.51-.38-1.74-.87-3.44-1.28-5.17A4.8,4.8,0,0,1,275.08,719Z"}):null,a.a.createElement("path",{style:{fill:t,zIndex:2,boxShadow:"0 0 20px grey"},transform:n,d:"M275.28,654.52v-554c.77-12.76,2.64-38.62,5.52-48.14l.21-.69-.6-.38a21.36,21.36,0,0,1-3.68-3.14,62.8,62.8,0,0,1,2.34-9.56l.12-.34L276.7,10.17l-1.08-.34c-2.52-.8-9.71-4-9.71-8.12V0H15.09V1.71c0,4.13-7,7.26-9.71,8.12l-1.08.34L1.82,38.28l.12.34a64,64,0,0,1,2.34,9.54A21,21,0,0,1,.6,51.32L0,51.7l.21.69C3.09,61.89,5,87.7,5.72,100.48v554C5,667.23,3.09,703.1.21,712.61L0,713.3l.6.38a20.83,20.83,0,0,1,3.68,3.14,61.64,61.64,0,0,1-2.34,9.56l-.12.35,2.48,28.1,1.08.34c2.7.86,9.71,4,9.71,8.12V765H265.91v-1.71c0-4.13,7-7.26,9.71-8.12l1.08-.34,2.48-28.1-.12-.35a64,64,0,0,1-2.34-9.54,21,21,0,0,1,3.68-3.16l.6-.38-.21-.69c-2.88-9.5-4.74-45.31-5.51-58.09m-3.84,73.29s.45,1.07,1,2.61a29.79,29.79,0,0,1-1.33,12.42C268.18,751.6,261,758,250.25,761.58H30.68c-23-7.63-22.8-25.7-22.16-31.09.59-1.63,1.06-2.75,1.09-2.83a12.21,12.21,0,0,0-2.1-9.76c3.38-18.83,1.66-42.81,1.58-43.89V91.12c.09-1.19,1.81-25.21-1.57-44.05a12.41,12.41,0,0,0,2.05-9.88s-.45-1.07-1-2.61A29.8,29.8,0,0,1,9.87,22.16C12.82,13.4,20,7,30.76,3.42H250.32c23.05,7.63,22.8,25.7,22.16,31.09-.59,1.63-1.06,2.75-1.09,2.84a12.19,12.19,0,0,0,2.1,9.75c-3.38,18.83-1.66,42.81-1.58,43.89V673.88c-.09,1.19-1.81,25.21,1.57,44a12.41,12.41,0,0,0-2.05,9.88m7.41-675.3c-1.71,6.15-3,17.57-4,28.45a191.48,191.48,0,0,1,1.5-30.51,23.59,23.59,0,0,0,2.5,2.06m-5.72-14.58c.09-.21,1.13-2.72,2.12-5.82l.51,5.74A61.16,61.16,0,0,0,274,44.4a9.5,9.5,0,0,1-.89-6.47m.42-25.21,1.24,14.07c-.25,1.21-.59,2.48-1,3.69a30.1,30.1,0,0,0-1.55-8.72c-2-6-6.88-13.57-18.42-18.34h8.89c1.25,5.24,8,8.26,10.8,9.3M18.25,3.42h8.88C10.49,10.29,7.46,23.17,7.21,30.61c-.38-1.25-.74-2.56-1-3.82L7.45,12.72c2.79-1,9.55-4.06,10.8-9.3m-13,34.43.51-5.74c1,3.07,2,5.53,2.07,5.66A9.73,9.73,0,0,1,7,44.33a62.24,62.24,0,0,0-1.73-6.48m-.6,12.59A191.42,191.42,0,0,1,6.15,81c-1-10.87-2.29-22.29-4-28.44a21.9,21.9,0,0,0,2.49-2.07M2.15,712.49c1.71-6.15,3-17.57,4-28.44a191.41,191.41,0,0,1-1.5,30.5,23.59,23.59,0,0,0-2.5-2.06m5.72,14.58c-.09.21-1.13,2.72-2.12,5.82l-.51-5.74A60.54,60.54,0,0,0,7,720.6a9.5,9.5,0,0,1,.89,6.47m-.42,25.21L6.21,738.21c.25-1.21.59-2.47,1-3.69a30,30,0,0,0,1.55,8.72c2,6,6.88,13.57,18.42,18.34H18.25c-1.25-5.24-8-8.26-10.8-9.3m255.3,9.3h-8.88c16.64-6.86,19.67-19.75,19.92-27.19.38,1.26.74,2.56,1,3.82l-1.24,14.07c-2.79,1-9.55,4.06-10.8,9.3m13-34.43-.51,5.74c-1-3.08-2-5.53-2.07-5.66a9.73,9.73,0,0,1,.85-6.56,62.24,62.24,0,0,0,1.73,6.48m.6-12.59a191.37,191.37,0,0,1-1.51-30.51c1,10.88,2.29,22.29,4,28.44a21.9,21.9,0,0,0-2.49,2.07"}))}},Bn=Vn(),Rn=Vn("translate(0,-100)");function Tn(){var n=Object(y.a)(["",""]);return Tn=function(){return n},n}function Pn(){var n=Object(y.a)(["",""]);return Pn=function(){return n},n}function In(){var n=Object(y.a)(["",""]);return In=function(){return n},n}function Dn(){var n=Object(y.a)(["",""]);return Dn=function(){return n},n}function Zn(){var n=Object(y.a)(["",""]);return Zn=function(){return n},n}function Nn(){var n=Object(y.a)(["",""]);return Nn=function(){return n},n}function Mn(){var n=Object(y.a)(["",""]);return Mn=function(){return n},n}function Un(){var n=Object(y.a)(["",""]);return Un=function(){return n},n}var _n=function(n){var e=n.partSize,t=n.Corner,c=n.Top,i=n.Side,o=Object(C.b)(t)(Un(),pn),u=Object(C.b)(t)(Mn(),gn),l=Object(C.b)(t)(Nn(),xn),d=Object(C.b)(t)(Zn(),jn),f=Object(C.b)(c)(Dn(),En),s=Object(C.b)(c)(In(),On),h=Object(C.b)(i)(Pn(),wn),b=Object(C.b)(i)(Tn(),yn);return function(n){var t=n.color,c=void 0===t?"#b13735":t,i=n.backgroundColor,m=n.className,v=Object(r.useRef)(null),p=Object(r.useState)(e),g=Object(T.a)(p,2),x=g[0],j=g[1],E=Object(r.useState)(e),O=Object(T.a)(E,2),w=O[0],y=O[1];Object(r.useEffect)((function(){return window.addEventListener("resize",C),function(){return window.removeEventListener("resize",C)}}),[]),Object(r.useEffect)((function(){C()}),[v]);var C=function(){var n=v.current;n&&(j(n.clientWidth-2*e),y(n.clientHeight-2*e))},k={color:c,backgroundColor:i,width:e,height:e};return a.a.createElement(fn,{ref:v,className:m},v.current?a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,null,a.a.createElement(o,k),a.a.createElement(f,Object.assign({},k,{width:x})),a.a.createElement(u,k)),a.a.createElement(hn,null,a.a.createElement(h,Object.assign({},k,{height:w})),a.a.createElement(mn,Object.assign({},k,{height:w,width:x})),a.a.createElement(b,Object.assign({},k,{height:w}))),a.a.createElement(bn,null,a.a.createElement(l,k),a.a.createElement(s,Object.assign({},k,{width:x})),a.a.createElement(d,k))):null)}},Fn=_n({partSize:32,Corner:kn,Top:function(n){var e=n.color,t=n.backgroundColor,r=n.width,c=n.height,i=n.className;return a.a.createElement("div",{className:i,style:{backgroundColor:t,width:r,height:c,borderTop:"3px solid ".concat(e),boxSizing:"border-box",transition:"background-color 0.3s"}})},Side:Hn}),Yn=_n({partSize:32,Corner:An,Top:zn,Side:Ln}),Wn=_n({partSize:128,Corner:Bn,Top:function(n){var e=n.color,t=n.backgroundColor,r=n.width,c=n.height,i=n.className;return a.a.createElement("div",{className:i,style:{backgroundColor:t,width:r,height:c,borderTop:"3.5px solid ".concat(e),boxSizing:"border-box"}})},Side:Rn}),Xn=t(43),Gn=t.n(Xn),Jn=t(71),qn=t(72),$n=t.n(qn),Kn=function(){var n=Object(Jn.a)(Gn.a.mark((function n(e){var t,r,a;return Gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.characterId,r="https://www.dndbeyond.com/character/".concat(t,"/json"),n.next=4,$n()({method:"GET",url:r,withCredentials:!1});case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Qn=function(n,e){return function(t,r){var a=r().characters;a&&(a.find((function(e){return e.id===n}))?Kn({characterId:n.toString()}).then((function(n){var r=n.id,a=n.name,c=n.removedHitPoints,i=n.temporaryHitPoints,o=n.deathSaves,u=n.avatarUrl,l=n.themeColor,d=n.defaultBackdrop;t(ee(r,{id:r,name:a,maxHitPoints:e,removedHitPoints:c,temporaryHitPoints:i,deathSaves:o,avatarUrl:u,themeColor:l,defaultBackdrop:d}))}),(function(n){return t(te(n.message))})):t(function(n,e){return function(t,r){var a=n.split("/")[n.split("/").length-1],c=r().characters;c&&c.every((function(n){return n.id.toString()!==a}))?Kn({characterId:a}).then((function(n){var r=n.id,a=n.name,c=n.removedHitPoints,i=n.temporaryHitPoints,o=n.deathSaves,u=n.avatarUrl,l=n.themeColor,d=n.defaultBackdrop;t(ne({id:r,name:a,maxHitPoints:e,removedHitPoints:c,temporaryHitPoints:i,deathSaves:o,avatarUrl:u,themeColor:l,defaultBackdrop:d}))}),(function(n){return t(te(n.message))})):t(Qn(parseInt(a),e))}}(n.toString(),e)))}},ne=function(n){return{type:"CHARACTER_ADDED",payload:n}},ee=function(n,e){return{type:"CHARACTER_UPDATED",payload:{id:n,character:e}}},te=function(n){return{type:"CHARACTER_FETCH_FAILED",error:n}};function re(){var n=Object(y.a)(["\n    font-size: 32px;\n    line-height: 32px;\n    width: ","px;\n    text-align: center;\n"]);return re=function(){return n},n}function ae(){var n=Object(y.a)(["\n    height: 64px;\n    width: 200px;\n    margin-left: auto;\n    margin-right: 16px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n"]);return ae=function(){return n},n}function ce(){var n=Object(y.a)(["\n    height: 20px;\n    width: 100%;\n"]);return ce=function(){return n},n}function ie(){var n=Object(y.a)(["\n    font-family: 'Yeon Sung';\n    font-size: 24px;\n    line-height: 24px;\n"]);return ie=function(){return n},n}function oe(){var n=Object(y.a)(["\n    height: 64px;\n    margin-right: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n"]);return oe=function(){return n},n}function ue(){var n=Object(y.a)(["\n    border-radius: 16px;\n    height: 64px;\n    width: 64px;\n    margin: 0 8px;\n    border: 3px solid ",";\n    box-shadow: 0 0 10px grey;\n    box-sizing: border-box;\n    object-fit: cover;\n"]);return ue=function(){return n},n}function le(){var n=Object(y.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n"]);return le=function(){return n},n}function de(){var n=Object(y.a)(["\n    position: relative;\n    height: 100%;\n    border-radius: 20px;\n"]);return de=function(){return n},n}function fe(){var n=Object(y.a)(["\n    height: 80px;\n\n    &:not(:last-child) {\n        margin-bottom: 8px;\n    }\n"]);return fe=function(){return n},n}var se=C.b.div(fe()),he=C.b.div(de()),be=C.b.div(le()),me=C.b.img(ue(),(function(n){return n.color||"#b13735"})),ve=C.b.div(oe()),pe=C.b.div(ie()),ge=C.b.div(ce()),xe=C.b.div(ae()),je=C.b.div(re(),(function(n){return n.width})),Ee=Object(l.b)(null,{updateCharacterById:Qn})((function(n){var e=n.character,t=n.updateCharacterById,c=e.id,i=e.name,o=e.maxHitPoints,u=e.removedHitPoints,l=e.temporaryHitPoints,d=(e.deathSaves,e.avatarUrl),f=e.themeColor;e.defaultBackdrop;return Object(r.useEffect)((function(){return t(c,o)}),[c,o,t]),a.a.createElement(se,null,a.a.createElement(he,null,a.a.createElement(Fn,{color:f&&f.themeColor||void 0,backgroundColor:"white"}),a.a.createElement(be,null,a.a.createElement(me,{src:d||"/avatar-placeholder.png",color:f&&f.themeColor||void 0}),a.a.createElement(ve,null,a.a.createElement(pe,null,i),a.a.createElement(ge,null)),a.a.createElement(xe,null,a.a.createElement(je,{width:64},o-u),a.a.createElement(je,{width:16,style:{color:"grey"}},"/"),a.a.createElement(je,{width:64},o),a.a.createElement(je,{width:48,style:{color:"grey"}},"[",l,"]")))))}));function Oe(){var n=Object(y.a)(["\n    ","\n    bottom: 0;\n    background: linear-gradient(transparent, white);\n"]);return Oe=function(){return n},n}function we(){var n=Object(y.a)(["\n    ","\n    top: 0;\n    background: linear-gradient(white, transparent);\n"]);return we=function(){return n},n}function ye(){var n=Object(y.a)(["\n    position: absolute;\n    left: calc(2%);\n    width: 96%;\n    border-radius: 16px;\n    height: 20px;\n"]);return ye=function(){return n},n}function Ce(){var n=Object(y.a)(["\n    height: 448px;\n    padding: 16px;\n\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]);return Ce=function(){return n},n}function ke(){var n=Object(y.a)(["\n    position: relative;\n    width: 50%;\n    max-width: 600px;\n    height: 480px;\n"]);return ke=function(){return n},n}var He=C.b.div(ke()),Se=C.b.div(Ce()),Ae=Object(C.a)(ye()),ze=C.b.div(we(),Ae),Le=C.b.div(Oe(),Ae),Ve=Object(l.b)((function(n){return{characters:n.characters||[]}}))((function(n){var e=n.characters;return a.a.createElement(He,null,a.a.createElement(Se,null,e.map((function(n){return a.a.createElement(Ee,{key:n.id,character:n})}))),a.a.createElement(ze,null),a.a.createElement(Le,null),a.a.createElement(Wn,null))}));function Be(){var n=Object(y.a)(["\n    font-size: 40px;\n    line-height: 40px;\n    text-align: center;\n    user-select: none;\n"]);return Be=function(){return n},n}function Re(){var n=Object(y.a)(["\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return Re=function(){return n},n}function Te(){var n=Object(y.a)(["\n    position: relative;\n    width: 80px;\n    height: 80px;\n    margin-bottom: 8px;\n\n    &:not(:nth-child(3n + 1)) {\n        margin-right: 8px;\n    }\n"]);return Te=function(){return n},n}function Pe(){var n=Object(y.a)(["\n    font-size: 40px;\n    line-height: 40px;\n    user-select: none;\n    z-index: 10;\n"]);return Pe=function(){return n},n}function Ie(){var n=Object(y.a)(["\n    position: absolute;\n    width: 256px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return Ie=function(){return n},n}function De(){var n=Object(y.a)(["\n    width: 256px;\n    height: 80px;\n    margin-bottom: 16px;\n"]);return De=function(){return n},n}function Ze(){var n=Object(y.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 256px;\n    height: 460px;\n    padding: 16px;\n    padding-bottom: 0;\n\n    display: flex;\n    flex-wrap: wrap;\n"]);return Ze=function(){return n},n}function Ne(){var n=Object(y.a)(["\n    position: relative;\n    width: 288px;\n    height: 480px;\n"]);return Ne=function(){return n},n}var Me=C.b.div(Ne()),Ue=C.b.div(Ze()),_e=C.b.div(De()),Fe=C.b.div(Ie()),Ye=C.b.div(Pe()),We=C.b.div(Te()),Xe=C.b.div(Re()),Ge=C.b.div(Be()),Je=function(n){var e=n.children,t=n.paddingBottom,c=n.color,i=n.onClick,o=Object(r.useState)("white"),u=Object(T.a)(o,2),l=u[0],d=u[1];return a.a.createElement(We,{onClick:function(){i&&i(),d("#ccc"),setTimeout((function(){return d("white")}),100)}},a.a.createElement(Fn,{color:c||"#555",backgroundColor:l}),a.a.createElement(Xe,null,a.a.createElement(Ge,{style:{paddingBottom:t}},e)))},qe=function(){var n=Object(r.useState)(0),e=Object(T.a)(n,2),t=e[0],c=e[1],i=function(n){return function(){return c((function(e){return 10*e+n}))}},o=function(n){return function(){console.log("Submitted: ".concat(n*t)),c(0)}};return a.a.createElement(Me,null,a.a.createElement(Wn,{backgroundColor:"rgba(255, 255, 255, 0.8)"}),a.a.createElement(Ue,null,a.a.createElement(_e,{onClick:function(){return c(0)}},a.a.createElement(Fe,null,a.a.createElement(Ye,null,t||""),a.a.createElement(Yn,{color:"#555",backgroundColor:"white"}))),a.a.createElement(Je,{onClick:i(7)},"7"),a.a.createElement(Je,{onClick:i(8)},"8"),a.a.createElement(Je,{onClick:i(9)},"9"),a.a.createElement(Je,{onClick:i(4)},"4"),a.a.createElement(Je,{onClick:i(5)},"5"),a.a.createElement(Je,{onClick:i(6)},"6"),a.a.createElement(Je,{onClick:i(1)},"1"),a.a.createElement(Je,{onClick:i(2)},"2"),a.a.createElement(Je,{onClick:i(3)},"3"),a.a.createElement(Je,{onClick:o(-1),paddingBottom:"6px",color:"#b13735"},"-"),a.a.createElement(Je,{onClick:i(0)},"0"),a.a.createElement(Je,{onClick:o(1),paddingBottom:"8px",color:"#08a300"},"+")))},$e=t(73);function Ke(){var n=Object(y.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - 24px);\n    height: calc(100% - 16px);\n    margin: 8px 12px;\n    touch-action: none;\n"]);return Ke=function(){return n},n}function Qe(){var n=Object(y.a)(["\n    position: relative;\n    width: 920px;\n    height: 260px;\n    margin-top: 16px;\n"]);return Qe=function(){return n},n}var nt=C.b.div(Qe()),et=C.b.canvas(Ke()),tt=function(){var n=Object(r.useRef)(null),e=Object(r.useRef)(null),t=Object(r.useState)({}),c=Object(T.a)(t,2),i=c[0],o=c[1];Object(r.useEffect)((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}}),[]),Object(r.useEffect)((function(){u()}),[n]);var u=function(){var e=n.current;if(e){var t=e.getBoundingClientRect(),r=t.width,a=t.height;o({width:r,height:a})}},l=Object($e.a)({ref:n,onPointerMove:function(t){var r=n.current;if(r){var a=r.getContext("2d");if(a){var c=t.pressure,i=t.buttons,o=t.clientX,u=t.clientY,l=o-r.getBoundingClientRect().x,d=u-r.getBoundingClientRect().y,f=c||1;if(!c||!i)return void(e.current=null);e.current&&(a.beginPath(),a.moveTo(e.current.x,e.current.y),a.lineTo(l,d),a.lineWidth=2*f,a.stroke()),e.current={x:l,y:d}}}},onPointerUp:function(){return e.current=null}},i);return a.a.createElement(nt,null,a.a.createElement(et,l),a.a.createElement(Wn,null))};function rt(){var n=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n"]);return rt=function(){return n},n}function at(){var n=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    & > :not(:last-child) {\n        margin-right: 32px;\n    }\n"]);return at=function(){return n},n}function ct(){var n=Object(y.a)(["\n    width: 100%;\n    height: 100%;\n    max-width: 1200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return ct=function(){return n},n}function it(){var n=Object(y.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n"]);return it=function(){return n},n}function ot(){var n=Object(y.a)(['\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-image: url("','");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n']);return ot=function(){return n},n}var ut=C.b.div(ot(),(function(n){return n.backgroundImageSrc})),lt=C.b.div(it()),dt=C.b.div(ct()),ft=C.b.div(at()),st=C.b.div(rt()),ht=Object(l.b)((function(n){return{currentBackgroundUrl:n.characters&&n.characters[1]&&n.characters[1].defaultBackdrop.largeBackdropAvatarUrl}}))((function(n){var e=n.currentBackgroundUrl,t=Object(r.useState)(!1),c=Object(T.a)(t,2),i=c[0],o=c[1],u=function(){return o(!1)};return a.a.createElement(ut,{backgroundImageSrc:e},a.a.createElement(W,null,a.a.createElement(J,{title:"View and edit saved characters"},a.a.createElement(P.a,{color:"inherit",onClick:function(){return o(!0)}},a.a.createElement(Z.a,{fontSize:"large"})))),a.a.createElement(lt,null,a.a.createElement(dt,null,a.a.createElement(ft,null,a.a.createElement(Ve,null),a.a.createElement(qe,null)),a.a.createElement(st,null,a.a.createElement(tt,null)))),a.a.createElement(I.a,{fullScreen:!0,open:!!i,onClose:u},a.a.createElement(W,{color:"primary"},a.a.createElement(P.a,{color:"inherit",onClick:u},a.a.createElement(N.a,{fontSize:"large"})),a.a.createElement(D.a,{variant:"h5",style:{marginLeft:"8px"}},"Saved Characters"))))})),bt=Object(o.a)({palette:{primary:{main:"#b13735"},secondary:{main:"#555"}},typography:{fontFamily:"Cairo"}}),mt=function(){return a.a.createElement(u.a,{theme:bt},a.a.createElement(l.a,{store:O},a.a.createElement(d.PersistGate,{loading:a.a.createElement(R,null),persistor:w},a.a.createElement(ht,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.createRoot(document.getElementById("root")).render(a.a.createElement(mt,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},81:function(n,e,t){n.exports=t(110)},86:function(n,e,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.ee83acce.chunk.js.map