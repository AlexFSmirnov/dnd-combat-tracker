(this["webpackJsonpdnd-combat-tracker"]=this["webpackJsonpdnd-combat-tracker"]||[]).push([[0],{100:function(e,n,t){e.exports=t(134)},105:function(e,n,t){},134:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),l=t.n(c),i=(t(105),t(89)),o=t(179),u=t(16),s=t(76),m=t(25),d=t(77),f=t(55),p=t(78),h=t.n(p),E=t(79),b=t.n(E),v=t(17),g=t(11),y=t(54),O=t.n(y),C=t(81),j=t(82),x=t.n(j),k=function(){var e=Object(C.a)(O.a.mark((function e(n){var t,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.characterId,a="https://www.dndbeyond.com/character/".concat(t,"/json"),e.next=4,x()({method:"GET",url:a,withCredentials:!1});case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=t(159),w=function(e){if(e.response)switch(e.response.status){case 404:return r.a.createElement(r.a.Fragment,null,'Invalid character URL, page not found. Make sure that the ID is correct and that character privacy is set to "Public".',r.a.createElement("br",null),r.a.createElement("br",null),"Error message: ",e.message);case 403:return r.a.createElement(r.a.Fragment,null,"D&D Beyond blocked a request because it thinks I'm a robot. Opening ",r.a.createElement(D.a,{href:"https://www.dndbeyond.com/"},"dndbeyond.com")," in Incognito mode and passing the captcha there usually helps.",r.a.createElement("br",null),r.a.createElement("br",null),"Error message: ",e.message);default:return r.a.createElement(r.a.Fragment,null,"Request was unsuccessful. Most likely your browser is blocking Cross-Origin requests (CORS). Make sure you have a CORS-allowing extension installed or disable D&D Beyond integration in settings.",r.a.createElement("br",null),r.a.createElement("br",null),"Error message: ",e.message)}return r.a.createElement(r.a.Fragment,null,"Request was unsuccessful. Most likely your browser is blocking Cross-Origin requests (CORS). Make sure you have a CORS-allowing extension installed or disable D&D Beyond integration in settings.",r.a.createElement("br",null),r.a.createElement("br",null),"Error message: ",e.message)},P=function(e){return{type:"ERROR_DIALOG_OPENED",payload:e}},A=function(e,n){return function(t,a){var r=e.split("/")[e.split("/").length-1],c=a().characters;c&&c.every((function(e){return e.id.toString()!==r}))?k({characterId:r}).then((function(e){var a=e.id,r=e.name,c=e.removedHitPoints,l=e.temporaryHitPoints,i=e.deathSaves,o=e.avatarUrl,u=e.themeColor,s=e.defaultBackdrop;t(N({id:a,name:r,maxHitPoints:n,removedHitPoints:c,temporaryHitPoints:l,deathSaves:i,avatarUrl:o,themeColor:u,defaultBackdrop:s}))}),(function(e){return t(P(w(e)))})):t(R(parseInt(r),n))}},R=function(e,n){return function(t,a){var r=a().characters;r&&(r.find((function(n){return n.id===e}))?k({characterId:e.toString()}).then((function(e){var a=e.id,r=e.name,c=e.removedHitPoints,l=e.temporaryHitPoints,i=e.deathSaves,o=e.avatarUrl,u=e.themeColor,s=e.defaultBackdrop;t(I(a,{id:a,name:r,maxHitPoints:n,removedHitPoints:c,temporaryHitPoints:l,deathSaves:i,avatarUrl:o,themeColor:u,defaultBackdrop:s}))}),(function(e){return t(P(w(e)))})):t(A(e.toString(),n)))}},N=function(e){return{type:"CHARACTER_ADDED",payload:e}},I=function(e,n){return{type:"CHARACTER_UPDATED",payload:{id:e,character:n}}},_=[],S=function(e,n){var t=n.payload,a=t.id,r=t.character,c=e.find((function(e){return e.id===a}));if(c){var l=e.indexOf(c);return[].concat(Object(g.a)(e.slice(0,l)),[r],Object(g.a)(e.slice(l+1)))}return[].concat(Object(g.a)(e),[r])},H=function(e,n){var t=n.payload,a=t.id,r=t.maxHp,c=e.find((function(e){return e.id===a}));if(c){var l=e.indexOf(c);return[].concat(Object(g.a)(e.slice(0,l)),[Object(v.a)({},c,{maxHitPoints:r})],Object(g.a)(e.slice(l+1)))}return Object(g.a)(e)},T=function(e,n){var t=n.payload.id,a=e.find((function(e){return e.id===t}));if(a){var r=e.indexOf(a);return[].concat(Object(g.a)(e.slice(0,r)),Object(g.a)(e.slice(r+1)))}return Object(g.a)(e)},U=function(e){return{type:"NPC_ADDED",payload:e}},M=function(e){return{type:"NPC_UPDATED",payload:e}},F=[],L=function(e,n){var t=n.payload,a=e.indexOf(t);return-1!==a?[].concat(Object(g.a)(e.slice(0,a)),Object(g.a)(e.slice(a+1))):Object(g.a)(e)},B=function(e,n){var t=n.payload,a=t.originalNPC,r=t.updatedNPC,c=e.indexOf(a);return-1!==c?[].concat(Object(g.a)(e.slice(0,c)),[r],Object(g.a)(e.slice(c+1))):Object(g.a)(e)},W={errorDialog:{isOpen:!1}},G=t(10),z=t(29),q={characters:{},npcs:{},initiativeById:{},currentId:0},V=function(e,n){var t=e.characters,a=n.payload.name,r=Object.keys(t).filter((function(e){return t[parseInt(e)]&&t[parseInt(e)].name.includes(a)})).length;return 0===r?Object(v.a)({},e,{characters:Object(v.a)({},e.characters,Object(G.a)({},e.currentId,n.payload)),currentId:e.currentId+1}):Object(v.a)({},e,{characters:Object(v.a)({},e.characters,Object(G.a)({},e.currentId,Object(v.a)({},n.payload,{name:"".concat(a," #").concat(r+1)}))),currentId:e.currentId+1})},Y=function(e,n){var t=e.npcs,a=n.payload.name,r=Object.keys(t).filter((function(e){return t[parseInt(e)]&&t[parseInt(e)].name.includes(a)})).length;return 0===r?Object(v.a)({},e,{npcs:Object(v.a)({},e.npcs,Object(G.a)({},e.currentId,n.payload)),currentId:e.currentId+1}):Object(v.a)({},e,{npcs:Object(v.a)({},e.npcs,Object(G.a)({},e.currentId,Object(v.a)({},n.payload,{name:"".concat(a," #").concat(r+1)}))),currentId:e.currentId+1})},X=function(e,n){var t=e.npcs,a=n.payload.name,r=Object(z.filter)((function(e){return t[parseInt(e)].name.startsWith(a)}),Object(z.keys)(t));if(0===r.length)return e;var c=Object(z.reduce)((function(e,n){var r=parseInt(n),c=t[r];if(c.name===a)return e.number<1?{key:r,number:1}:e;var l=c.name.slice(a.length).split("#"),i=parseInt(l[l.length-1]);return i>e.number?{key:r,number:i}:e}),{key:0,number:-1},r);return Object(v.a)({},e,{npcs:Object(z.omit)(c.key,t)})},J=Object(m.c)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHARACTER_ADDED":return[].concat(Object(g.a)(e),[n.payload]);case"CHARACTER_UPDATED":return S(e,n);case"CHARACTER_MAX_HP_UPDATED":return H(e,n);case"CHARACTER_DELETED":return T(e,n);case"CHARACTER_ALREADY_EXISTS":case"CHARACTER_FETCH_FAILED":default:return e}},npcs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"NPC_ADDED":return[].concat(Object(g.a)(e),[n.payload]);case"NPC_DELETED":return L(e,n);case"NPC_UPDATED":return B(e,n);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ERROR_DIALOG_OPENED":return e.errorDialog.isOpen?e:Object(v.a)({},e,{errorDialog:{isOpen:!0,message:n.payload}});case"ERROR_DIALOG_CLOSED":return Object(v.a)({},e,{errorDialog:{isOpen:!1,message:e.errorDialog.message}});default:return e}},encounter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ENC_CHARACTER_ADDED":return V(e,n);case"ENC_NPC_ADDED":return Y(e,n);case"ENC_CHARACTER_REMOVED":return q;case"ENC_NPC_REMOVED":return X(e,n);default:return e}}}),K={key:"root",storage:h.a,stateReconciler:b.a,blacklist:["ui"]},$=Object(m.d)(Object(f.a)(K,J),Object(m.a)(d.a)),Q=Object(f.b)($),Z=t(8),ee=t(9);function ne(){var e=Object(Z.a)(["\n    font-family: 'Yeon Sung';\n    font-size: 40px;\n    line-height: 40px;\n    color: orange;\n"]);return ne=function(){return e},e}function te(){var e=Object(Z.a)(["\n    width: 400px;\n    max-width: 80%;\n"]);return te=function(){return e},e}function ae(){var e=Object(Z.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return ae=function(){return e},e}function re(){var e=Object(Z.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return re=function(){return e},e}var ce=ee.a.div(re()),le=ee.a.div(ae()),ie=ee.a.img(te()),oe=ee.a.div(ne()),ue=function(){return r.a.createElement(ce,null,r.a.createElement(le,null,r.a.createElement(ie,{src:"".concat("/dnd-combat-tracker","/fire.gif")}),r.a.createElement(oe,null,"Loading")))},se=t(12),me=t(167),de=t(183),fe=t(56),pe=t(169),he=t(170),Ee=t(172),be=t(173),ve=t(171),ge=t(177),ye=t(178),Oe=t(2),Ce=t(162),je=t(163);function xe(){var e=Object(Z.a)(["\n    width: 100%;\n    flex-grow: 1;\n"]);return xe=function(){return e},e}var ke=ee.a.div(xe()),De=function(e){var n=e.children,t=Object(Oe.a)(e,["children"]);return r.a.createElement(ke,null,r.a.createElement(Ce.a,Object.assign({position:"relative",color:"secondary",style:{minHeight:"56px"}},t),r.a.createElement(je.a,{style:{minHeight:"56px"}},n)))},we=t(184),Pe=t(4),Ae=Object(Pe.a)((function(e){return{tooltip:{fontSize:16,backgroundColor:e.palette.secondary.main},arrow:{color:e.palette.secondary.main}}}))((function(e){return r.a.createElement(we.a,Object.assign({arrow:!0},e))}));function Re(){var e=Object(Z.a)(["\n    display: flex;\n    justify-content: center;\n"]);return Re=function(){return e},e}function Ne(){var e=Object(Z.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    & > :not(:last-child) {\n        margin-right: 32px;\n    }\n"]);return Ne=function(){return e},e}function Ie(){var e=Object(Z.a)(["\n    width: 100%;\n    height: 100%;\n    max-width: 1200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return Ie=function(){return e},e}function _e(){var e=Object(Z.a)(["\n    position: absolute;\n    top: 64px;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 64px);\n    display: flex;\n    justify-content: center;\n"]);return _e=function(){return e},e}function Se(){var e=Object(Z.a)(['\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background-image: url("','");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n']);return Se=function(){return e},e}var He=ee.a.div(Se(),(function(e){return e.backgroundImageSrc})),Te=ee.a.div(_e()),Ue=(ee.a.div(Ie()),ee.a.div(Ne()),ee.a.div(Re()),t(166)),Me=t(26);function Fe(){var e=Object(Z.a)(["\n    border: 1px solid ",";\n    border-radius: 50%;\n    opacity: 0.5;\n    margin-bottom: 10px;\n\n    ","\n"]);return Fe=function(){return e},e}function Le(){var e=Object(Z.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    ","\n\n    & > :not(:last-child) {\n        margin-bottom: 8px;\n    }\n"]);return Le=function(){return e},e}function Be(){var e=Object(Z.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    ","\n"]);return Be=function(){return e},e}function We(){var e=Object(Z.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    ","\n"]);return We=function(){return e},e}var Ge=ee.a.div(We(),(function(e){return e.small?"\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n    ":"\n        justify-content: center;\n        align-items: flex-start;\n    "})),ze=ee.a.div(Be(),(function(e){return e.small&&"flex-direction: column;"})),qe=ee.a.div(Le(),(function(e){return e.small?"\n        width: 100%;\n        padding: 16px;\n        box-sizing: border-box;\n    ":"\n        width: 40%;\n        max-width: 600px;\n        margin: 16px;\n    "})),Ve=ee.a.div(Fe(),(function(e){return e.color}),(function(e){return e.small?"\n        height: 0;\n        margin: 16px;\n    ":"\n        width: 0;\n        margin-top: 56px;\n    "})),Ye=function(e){var n=e.children,t=Object(Me.a)(),a=Object(Ue.a)(t.breakpoints.down("sm"));return r.a.createElement(Ge,{small:a},r.a.createElement(ze,{small:a},r.a.createElement(qe,{small:a},r.a.cloneElement(n[0],{small:a})),n.slice(1).map((function(e,n){return r.a.createElement(r.a.Fragment,{key:e.key||n},r.a.createElement(Ve,{color:t.palette.secondary.main,small:a}),r.a.createElement(qe,{small:a},r.a.cloneElement(e,{small:a})))}))))},Xe=t(180),Je=t(136),Ke=t(185),$e=t(168);function Qe(){var e=Object(Z.a)(["\n    flex-grow: 1;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(Z.a)(["\n    && {\n        padding: 0 12px;\n        min-height: 56px;\n        height: 56px;\n    }\n\n    & > :not(:last-child) {\n        margin-right: 16px;\n    }\n"]);return Ze=function(){return e},e}var en=Object(ee.a)(je.a)(Ze()),nn=ee.a.div(Qe()),tn=Object(u.b)(null,{updateCharacterMaxHp:function(e,n){return{type:"CHARACTER_MAX_HP_UPDATED",payload:{id:e,maxHp:n}}},deleteCharacter:function(e){return{type:"CHARACTER_DELETED",payload:{id:e}}}})((function(e){var n=e.character,t=e.updateCharacterMaxHp,c=e.deleteCharacter,l=Object(a.useState)(n.maxHitPoints.toString()),i=Object(se.a)(l,2),o=i[0],u=i[1],s=Object(a.useState)(!1),m=Object(se.a)(s,2),d=m[0],f=m[1],p=function(){return f(!1)},h=n.name,E=n.avatarUrl;return r.a.createElement(Je.a,{elevation:3,style:{width:"100%",height:"56px"}},r.a.createElement(en,null,r.a.createElement(Ke.a,{variant:"rounded",src:E}),r.a.createElement(fe.a,{variant:"h6"},h),r.a.createElement(nn,null),r.a.createElement(Xe.a,{label:"Max HP",type:"number",value:o,onChange:function(e){var a=n.id,r=e.target.value;u(r),t(a,parseInt(r)||0)},style:{width:"64px"}}),r.a.createElement(me.a,{onClick:function(){return f(!0)}},r.a.createElement($e.a,null))),r.a.createElement(de.a,{open:d,onClose:p},r.a.createElement(pe.a,null,"Are you sure you want to delete ",h,"?"),r.a.createElement(he.a,null,r.a.createElement(ve.a,null,"This will remove them from your list of saved characters. You will only be able to undo this by adding this character again.")),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{onClick:p,color:"secondary"},"Cancel"),r.a.createElement(be.a,{onClick:function(){var e=n.id;c(e),p()},color:"primary",variant:"contained"},"Delete"))))})),an=Object(u.b)((function(e){return{characters:e&&e.characters||[]}}),{addCharacterByUrl:A})((function(e){e.small;var n=e.characters,t=e.addCharacterByUrl,c=Object(a.useState)(!1),l=Object(se.a)(c,2),i=l[0],o=l[1],u=Object(a.useState)(""),s=Object(se.a)(u,2),m=s[0],d=s[1],f=Object(a.useState)(""),p=Object(se.a)(f,2),h=p[0],E=p[1],b=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{variant:"h5"},"Characters"),n.length>0?n.map((function(e){return r.a.createElement(tn,{key:e.id,character:e})})):r.a.createElement(fe.a,{variant:"body1"},"Currently you don't have any saved characters."),r.a.createElement(be.a,{variant:"outlined",color:"primary",onClick:function(){return o(!0)}},"Add character"),r.a.createElement(de.a,{open:i,onClose:b},r.a.createElement(pe.a,null,"Import new character from D&D Beyond"),r.a.createElement(he.a,null,r.a.createElement(ve.a,null,'Paste a link to the character you want to add in the input field below. Make sure the character privacy is set to "Public", otherwise it will not be imported.',r.a.createElement("br",null)," ",r.a.createElement("br",null),"Optionally, specify character's maximum hit points. You will be able to change them later."),r.a.createElement(Xe.a,{autoFocus:!0,fullWidth:!0,margin:"dense",label:"Character URL",value:m,onChange:function(e){return d(e.target.value)}}),r.a.createElement(Xe.a,{fullWidth:!0,type:"number",margin:"dense",label:"Max Hit Points",value:h,onChange:function(e){return E(e.target.value)}})),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{onClick:b,color:"secondary"},"Cancel"),r.a.createElement(be.a,{onClick:function(){b(),t(m,parseInt(h)||0),d(""),E("")},color:"primary",variant:"contained",disabled:!m},"Import"))))})),rn=t(174);function cn(){var e=Object(Z.a)(["\n    flex-grow: 1;\n"]);return cn=function(){return e},e}function ln(){var e=Object(Z.a)(["\n    && {\n        padding: 0 12px;\n        min-height: 56px;\n        height: 56px;\n    }\n\n    & > :first-child {\n        margin-right: 16px;\n    }\n"]);return ln=function(){return e},e}var on=Object(ee.a)(je.a)(ln()),un=ee.a.div(cn()),sn=Object(u.b)(null,{updateNPCSafe:function(e){return function(n,t){var a=t().npcs;a&&a.find((function(n){return n.name===e.updatedNPC.name}))?n(P(r.a.createElement(r.a.Fragment,null,"NPC with this name already exists."))):n(M(e))}},deleteNPC:function(e){return{type:"NPC_DELETED",payload:e}}})((function(e){var n=e.npc,t=e.updateNPCSafe,c=e.deleteNPC,l=n.name,i=n.avatarUrl,o=n.maxHitPoints,u=Object(a.useState)(!1),s=Object(se.a)(u,2),m=s[0],d=s[1],f=Object(a.useState)(!1),p=Object(se.a)(f,2),h=p[0],E=p[1],b=Object(a.useState)(l),v=Object(se.a)(b,2),g=v[0],y=v[1],O=Object(a.useState)(o.toString()),C=Object(se.a)(O,2),j=C[0],x=C[1],k=Object(a.useState)(i||""),D=Object(se.a)(k,2),w=D[0],P=D[1],A=function(){return d(!1)},R=function(){return E(!1)};return r.a.createElement(Je.a,{elevation:3,style:{width:"100%",height:"56px"}},r.a.createElement(on,null,r.a.createElement(Ke.a,{variant:"rounded",src:i}),r.a.createElement(fe.a,{variant:"h6"},l),r.a.createElement(un,null),r.a.createElement(me.a,{onClick:function(){return d(!0)}},r.a.createElement(rn.a,null)),r.a.createElement(me.a,{onClick:function(){return E(!0)}},r.a.createElement($e.a,null))),r.a.createElement(de.a,{open:m,onClose:A},r.a.createElement(pe.a,null,"Edit ",l),r.a.createElement(he.a,null,r.a.createElement(ve.a,null,"Change name, max hit points or avatar url of your NPC."),r.a.createElement(Xe.a,{fullWidth:!0,margin:"dense",label:"NPC Name",value:g,onChange:function(e){return y(e.target.value)}}),r.a.createElement(Xe.a,{fullWidth:!0,type:"number",margin:"dense",label:"Max Hit Points",value:j,onChange:function(e){return x(e.target.value)}}),r.a.createElement(Xe.a,{fullWidth:!0,margin:"dense",label:"Avatar URL",value:w,onChange:function(e){return P(e.target.value)}})),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{onClick:A,color:"secondary"},"Cancel"),r.a.createElement(be.a,{onClick:function(){var e=parseInt(j)||0;t({originalNPC:n,updatedNPC:{name:g,avatarUrl:w,maxHitPoints:e}}),A()},color:"primary",variant:"contained"},"Save"))),r.a.createElement(de.a,{open:h,onClose:R},r.a.createElement(pe.a,null,"Are you sure you want to delete ",l,"?"),r.a.createElement(he.a,null,r.a.createElement(ve.a,null,"This will remove them from your list of saved NPCs. You will only be able to undo this by creating this NPC again.")),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{onClick:R,color:"secondary"},"Cancel"),r.a.createElement(be.a,{onClick:function(){R(),c(n)},color:"primary",variant:"contained"},"Delete"))))})),mn=Object(u.b)((function(e){return{npcs:e&&e.npcs||[]}}),{addNPCSafe:function(e){return function(n,t){var a=t().npcs;a&&a.find((function(n){return n.name===e.name}))?n(P(r.a.createElement(r.a.Fragment,null,"NPC with this name already exists."))):n(U(e))}}})((function(e){e.small;var n=e.npcs,t=e.addNPCSafe,c=Object(a.useState)(!1),l=Object(se.a)(c,2),i=l[0],o=l[1],u=Object(a.useState)(""),s=Object(se.a)(u,2),m=s[0],d=s[1],f=Object(a.useState)(""),p=Object(se.a)(f,2),h=p[0],E=p[1],b=Object(a.useState)(""),v=Object(se.a)(b,2),g=v[0],y=v[1],O=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{variant:"h5"},"NPCs"),n.length>0?n.map((function(e){return r.a.createElement(sn,{key:e.name,npc:e})})):r.a.createElement(fe.a,{variant:"body1"},"Currently you don't have any saved NPCs."),r.a.createElement(be.a,{variant:"outlined",color:"primary",onClick:function(){return o(!0)}},"Add NPC"),r.a.createElement(de.a,{open:i,onClose:O},r.a.createElement(pe.a,null,"Create new NPC"),r.a.createElement(he.a,null,r.a.createElement(ve.a,null,"Choose a name for your NPC and specify maximum hit points. Optionally, specify an avatar url or pick one of the default avatars.",r.a.createElement("br",null)," ",r.a.createElement("br",null),"It is not possible to have several NPCs with the same name."),r.a.createElement(Xe.a,{autoFocus:!0,fullWidth:!0,margin:"dense",label:"NPC Name",value:m,onChange:function(e){return d(e.target.value)}}),r.a.createElement(Xe.a,{fullWidth:!0,type:"number",margin:"dense",label:"Max Hit Points",value:h,onChange:function(e){return E(e.target.value)}}),r.a.createElement(Xe.a,{fullWidth:!0,margin:"dense",label:"Avatar URL",value:g,onChange:function(e){return y(e.target.value)}})),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{onClick:O,color:"secondary"},"Cancel"),r.a.createElement(be.a,{onClick:function(){var e=parseInt(h)||0;t({name:m,maxHitPoints:e,avatarUrl:g}),O(),d(""),E(""),y("")},color:"primary",variant:"contained",disabled:!m||!h},"Create"))))})),dn=t(182);function fn(){var e=Object(Z.a)(["\n    && {\n        padding: 0 6px;\n        min-height: 56px;\n        height: 56px;\n    }\n"]);return fn=function(){return e},e}var pn=Object(ee.a)(je.a)(fn()),hn=Object(u.b)((function(e){return{encounter:e&&e.encounter||null}}),{addCharacterToEncounter:function(e){return{type:"ENC_CHARACTER_ADDED",payload:e}},removeCharacterFromEncounter:function(e){return{type:"ENC_CHARACTER_REMOVED",payload:e}}})((function(e){var n=e.character,t=e.encounter,c=e.addCharacterToEncounter,l=e.removeCharacterFromEncounter,i=Object(a.useMemo)((function(){return!!t&&Object.keys(t.characters).some((function(e){return t.characters[parseInt(e)].name===n.name}))}),[n,t]);return console.log(t),r.a.createElement(Je.a,{elevation:3,style:{width:"100%",height:"56px"}},r.a.createElement(pn,null,r.a.createElement(dn.a,{disabled:!t,checked:i,color:"primary",onClick:function(){i?l(n):c(n)}}),r.a.createElement(fe.a,{variant:"h6"},n.name),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement(Xe.a,{disabled:!i,label:i?"Initiative":"",type:"number",style:{width:"64px"}})))})),En=Object(u.b)((function(e){return{characters:e&&e.characters||[]}}))((function(e){var n=e.characters;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{variant:"h5"},"Characters"),n.map((function(e){return r.a.createElement(hn,{key:e.id,character:e})})))})),bn=t(175),vn=t(176);function gn(){var e=Object(Z.a)(["\n    width: 18px;\n    height: 18px;\n    margin: 12px;\n    border-radius: 2px;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    color: white;\n    background-color: white;\n\n    transition: background-color 300ms, border-color 300ms;\n\n    ","\n"]);return gn=function(){return e},e}function yn(){var e=Object(Z.a)(["\n    && {\n        padding: 0 6px;\n        min-height: 56px;\n        height: 56px;\n    }\n"]);return yn=function(){return e},e}var On=Object(ee.a)(je.a)(yn()),Cn=ee.a.div(gn(),(function(e){return e.children?"\n        background-color: ".concat(e.palette.primary.main,";\n        border: 2px solid rgba(0, 0, 0, ").concat(e.palette.primary.main,");\n    "):"\n        border: 2px solid rgba(0, 0, 0, 0.54);\n    "})),jn=Object(u.b)((function(e){return{encounter:e&&e.encounter||null}}),{addNPCToEncounter:function(e){return{type:"ENC_NPC_ADDED",payload:e}},removeNPCFromEncounter:function(e){return{type:"ENC_NPC_REMOVED",payload:e}}})((function(e){var n=e.npc,t=e.encounter,c=e.addNPCToEncounter,l=e.removeNPCFromEncounter,i=Object(Me.a)(),o=Object(a.useMemo)((function(){if(!t)return null;var e=Object(z.reduce)((function(e,t){return e+(t.name.startsWith(n.name)?1:0)}),0,t.npcs);return 0===e?null:e}),[n,t]);return r.a.createElement(Je.a,{elevation:3,style:{width:"100%",height:"56px"}},r.a.createElement(On,null,r.a.createElement(Cn,{palette:i.palette},o),r.a.createElement(fe.a,{variant:"h6"},n.name),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement(Xe.a,{disabled:!o,label:o?"Initiative":"",type:"number",style:{width:"64px"}}),r.a.createElement(me.a,{size:"small",onClick:function(){return l(n)}},r.a.createElement(bn.a,null)),r.a.createElement(me.a,{size:"small",onClick:function(){return c(n)}},r.a.createElement(vn.a,null))))})),xn=Object(u.b)((function(e){return{npcs:e&&e.npcs||[]}}))((function(e){var n=e.npcs;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{variant:"h5"},"NPCs"),n.map((function(e){return r.a.createElement(jn,{key:e.name,npc:e})})))})),kn=Object(u.b)((function(e){return{currentBackgroundUrl:e.characters&&e.characters[1]&&e.characters[1].defaultBackdrop.largeBackdropAvatarUrl,isErrorDialogOpen:e.ui&&e.ui.errorDialog.isOpen||!1,errorMessage:e.ui&&e.ui.errorDialog.message}}),{closeErrorDialog:function(){return{type:"ERROR_DIALOG_CLOSED"}}})((function(e){var n=e.currentBackgroundUrl,t=e.isErrorDialogOpen,c=e.errorMessage,l=e.closeErrorDialog,i=Object(a.useState)(!1),o=Object(se.a)(i,2),u=o[0],s=o[1],m=function(){return s(!1)};return r.a.createElement(He,{backgroundImageSrc:n},r.a.createElement(De,null,r.a.createElement(Ae,{title:"View and edit saved characters"},r.a.createElement(me.a,{color:"inherit",onClick:function(){return s(!0)}},r.a.createElement(ge.a,null)))),r.a.createElement(Te,null),r.a.createElement(de.a,{fullScreen:!0,open:!!u,onClose:m},r.a.createElement(De,{color:"primary"},r.a.createElement(me.a,{color:"inherit",onClick:m},r.a.createElement(ye.a,null)),r.a.createElement(fe.a,{variant:"h6",style:{marginLeft:"8px"}},"Saved Characters")),r.a.createElement(Ye,null,r.a.createElement(an,null),r.a.createElement(mn,null))),r.a.createElement(de.a,{maxWidth:"lg",fullWidth:!0,open:!0},r.a.createElement(pe.a,null,"New Encounter"),r.a.createElement(he.a,null,r.a.createElement(Ye,null,r.a.createElement(En,null),r.a.createElement(xn,null))),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{color:"secondary",onClick:function(){}},"Cancel"),r.a.createElement(be.a,{variant:"contained",color:"primary",onClick:function(){}},"Create"))),r.a.createElement(de.a,{open:t,onClose:l},r.a.createElement(pe.a,null,"Error"),r.a.createElement(he.a,null,c?r.a.createElement(ve.a,null,c):null),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{variant:"contained",color:"primary",onClick:l},"OK"))))})),Dn=Object(i.a)({palette:{primary:{main:"#b13735"},secondary:{main:"#555"}},typography:{fontFamily:"Cairo"},breakpoints:{values:{xs:0,sm:500,md:960,lg:1280,xl:1920}}}),wn=function(){return r.a.createElement(o.a,{theme:Dn},r.a.createElement(u.a,{store:$},r.a.createElement(s.PersistGate,{loading:r.a.createElement(ue,null),persistor:Q},r.a.createElement(kn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(wn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.37bd372c.chunk.js.map