var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(t,l,r)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r;import{c as o,a as s,R as m,W as i,q as u,C as g,u as d,G as p,b as E,P as h}from"./vendor.6d892043.js";const x=s({reducer:{counter:o({name:"counter",initialState:{value:0},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}}}).reducer,theme:o({name:"themeSlice",initialState:{main_background:"#3b3b3b",tetris_background:"#ffa500",Stage_background:"#262626",arrow_fill:"#000"},reducers:{}}).reducer}}),v=({variant:e})=>m.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 306 306"},m.createElement("g",null,m.createElement("g",null,m.createElement("polygon",{points:{left:"247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153",right:"58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306"}[e]}))),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null)),y=()=>m.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 512 512"},m.createElement("g",null,m.createElement("path",{d:"M256,512l256-256H352V0.001L160,0v256H0L256,512z"})),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null)),w=()=>m.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 32 32"},m.createElement("path",{d:"M8 4.8l-0.534 6.933 6.933-0.534-2.633-2.633c1.254-0.708 2.725-1.1 4.233-1.1 4.692 0 8.533 3.841 8.533 8.533v0.734l1.8 1.834c0.213-0.854 0.334-1.713 0.334-2.566 0-5.866-4.8-10.666-10.666-10.666-2.133 0-4.113 0.621-5.766 1.7l-2.234-2.234zM5.667 13.433c-0.213 0.854-0.334 1.713-0.334 2.566 0 5.866 4.8 10.666 10.666 10.666 2.125 0 4.083-0.666 5.733-1.733l2.266 2.266 0.534-6.933-6.933 0.534 2.633 2.633c-1.25 0.708-2.725 1.1-4.233 1.1-4.692 0-8.533-3.841-8.533-8.533v-0.734l-1.799-1.832z"})),f=i`
0%{transform: rotate(-180deg);}
100%{transform: rotate(-360deg);}
`,b=i`
0%{transform: rotate(0deg);}
100%{transform: rotate(-180deg);}
`,S=u.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:nth-child(1n) {
    fill: ${({theme:e})=>e.arrow_fill};
  }
`,C=u.div`
  width: 45px;
  height: 45px;
  animation: 1s
    ${({rotate:e})=>"anim1"===e?f:"anim2"===e&&b};
`,k=({callback:e})=>{const{ControlButtonsSC:t,CB_Rotate_SC:l}={CB_Rotate_SC:C,ControlButtonsSC:S},{rotate:r,handleRotate:n,handleArrowLeft:a,handleArrowRight:c}=(({callback:e})=>{const[t,l]=g.exports.useState("anim1");return{rotate:t,handleRotate:()=>{l("anim1"===t?"anim2":"anim1"),e({keyCode:38})},handleArrowLeft:()=>e({keyCode:37}),handleArrowRight:()=>e({keyCode:39})}})({callback:e});return m.createElement(t,null,m.createElement(l,{rotate:r,onClick:n},m.createElement(w,null)),m.createElement("div",null,m.createElement(y,null)),m.createElement("div",{onClick:a},m.createElement(v,{variant:"left"})),m.createElement("div",{onClick:c},m.createElement(v,{variant:"right"})))},O=u.div`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${e=>e.gameOver?"red":"#999"};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`,_=({gameOver:e,text:t})=>m.createElement(O,{gameOver:e},t),$=()=>m.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 507.451 507.45"},m.createElement("g",null,m.createElement("g",{id:"settings"},m.createElement("path",{d:"M440.813,280.5c0-7.65,2.55-15.3,2.55-25.5s0-17.85-2.55-25.5l53.55-43.35c5.1-5.1,5.1-10.2,2.55-15.3l-51-89.25\r\n       c-2.55-2.55-7.649-5.1-15.3-2.55l-63.75,25.5c-12.75-10.2-28.05-17.85-43.35-25.5l-10.2-66.3C315.863,5.1,308.212,0,303.113,0\r\n       h-102c-5.101,0-12.75,5.1-12.75,10.2l-10.2,68.85c-15.3,5.1-28.05,15.3-43.35,25.5l-61.2-25.5c-7.65-2.55-12.75,0-17.851,5.1\r\n       l-51,89.25c-2.55,2.55,0,10.2,5.1,15.3l53.55,40.8c0,7.65-2.55,15.3-2.55,25.5s0,17.85,2.55,25.5l-53.55,43.35\r\n       c-5.1,5.101-5.1,10.2-2.55,15.301l51,89.25c2.55,2.55,7.649,5.1,15.3,2.55l63.75-25.5c12.75,10.2,28.05,17.85,43.35,25.5\r\n       l10.2,66.3c0,5.1,5.1,10.2,12.75,10.2h102c5.101,0,12.75-5.101,12.75-10.2l10.2-66.3c15.3-7.65,30.6-15.3,43.35-25.5l63.75,25.5\r\n       c5.101,2.55,12.75,0,15.301-5.101l51-89.25c2.55-5.1,2.55-12.75-2.551-15.3L440.813,280.5z M252.113,344.25\r\n       c-48.45,0-89.25-40.8-89.25-89.25s40.8-89.25,89.25-89.25s89.25,40.8,89.25,89.25S300.563,344.25,252.113,344.25z"}))),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null)),M=()=>m.createElement("div",null,m.createElement($,null)),z=u.div`
  width: auto;
  background: rgba(${e=>e.color}, 0.8);
  border: ${e=>0===e.type?"0px solid":"4px solid"};
  border-bottom-color: rgba(${e=>e.color}, 0.1);
  border-right-color: rgba(${e=>e.color}, 1);
  border-top-color: rgba(${e=>e.color}, 1);
  border-left-color: rgba(${e=>e.color}, 0.3);
`,L=[40,100,300,1200],R={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}};var A=m.memo((({type:e})=>m.createElement(z,{type:e,color:R[e].color})));const I=()=>m.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"70px",height:"70px",viewBox:"0 0 52.821 52.821"},m.createElement("g",null,m.createElement("path",{d:"M51.82,19.074c-1.488-5.344-4.965-10.164-9.608-13.189C37.292,2.68,30.86,1.717,25.106,1.588\r\n\t\tC17.071,1.404,6.893,4.49,2.94,12.152c-0.329,0.637,0.64,1.184,0.969,0.547c2.801-5.43,9.491-8.566,15.263-9.594\r\n\t\tc6.209-1.104,12.998-0.236,18.873,1.955c6.134,2.287,10.393,7.537,12.486,13.611c2.33,6.758,1.04,13.488-2.679,19.424\r\n\t\tc-7.678,12.252-26.522,16.229-37.982,6.943c-5.25-4.254-8.674-9.945-8.74-16.752c-0.039-4.012,0.743-8.492,2.746-12.012\r\n\t\tc0.621-1.09,1.455-2.024,2.396-2.867c0.014-0.219,0.03-0.436,0.045-0.652c-0.109-0.139-0.202-0.289-0.25-0.475\r\n\t\tc-0.005-0.021-0.004-0.037-0.009-0.059c-0.572,0.481-1.126,0.986-1.65,1.529c-2.291,2.371-3.194,5.66-3.832,8.801\r\n\t\tc-1.268,6.24-0.515,12.074,3.063,17.346c3.063,4.514,7.787,8.715,13.131,10.182c6.42,1.762,13.123,1.613,19.198-1.108\r\n\t\tc2.749-1.23,5.729-2.438,8.039-4.424c2.833-2.438,4.961-5.881,6.679-9.156C53.305,30.399,53.303,24.397,51.82,19.074z"}),m.createElement("path",{d:"M17.736,31.85c0.103,1.15,0.121,3.08,1.325,3.598c0.051,0.066,0.105,0.127,0.167,0.174\r\n\t\tc1.198,0.902,2.868-0.504,3.876-1.109c2.797-1.674,12.586-8.037,14.039-10.277c0.151-0.234,0.098-0.455-0.046-0.609\r\n\t\tc-0.01-0.16-0.081-0.318-0.258-0.428c-1.622-0.992-8.87-4.297-10.89-5.045c-1.044-0.389-5.593-2.34-6.212-2.355\r\n\t\tc-2.373-1.525-2.021,5.525-2.033,6.152C17.639,25.235,17.444,28.574,17.736,31.85z M20.96,25.033\r\n\t\tc-0.088,0.039-0.162,0.102-0.217,0.182c-0.004-0.299-0.009-0.596-0.011-0.891c0.096,0.055,0.197,0.104,0.298,0.154\r\n\t\tC21.009,24.66,20.984,24.846,20.96,25.033z M21.167,29.695c0.063-0.248,0.151-0.498,0.257-0.748\r\n\t\tc1.583-0.371,3.088-1.146,4.634-1.645c0.754-0.207,1.509-0.414,2.259-0.633C25.981,27.764,23.595,28.74,21.167,29.695z\r\n\t\t M24.587,25.762c-0.18,0.082-0.362,0.162-0.539,0.25c-0.158-0.098-0.319-0.174-0.483-0.244\r\n\t\tC23.905,25.758,24.246,25.754,24.587,25.762z M24.108,24.285c0.023-0.014,0.048-0.025,0.074-0.037\r\n\t\tc0.642,0.137,1.284,0.231,1.944,0.24c0.459,0.055,0.918,0.113,1.378,0.166c-0.044,0.016-0.088,0.029-0.133,0.045\r\n\t\tC26.401,24.598,25.23,24.488,24.108,24.285z M28.874,23.106c-0.761-0.27-1.523-0.549-2.291-0.854\r\n\t\tc-1.265-0.502-2.525-0.859-3.846-1.17c-0.413-0.096-0.753-0.26-1.052-0.465C24.175,21.008,26.571,21.971,28.874,23.106z\r\n\t\t M22.896,22.258c-0.75-0.072-1.509-0.107-2.278-0.105c-0.026-0.297-0.056-0.592-0.085-0.889\r\n\t\tC21.281,21.785,22.06,22.047,22.896,22.258z"})),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null)),P=u.button`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);

  z-index: 10;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  color: white;
  border: none;
  cursor: pointer;
`,T=({callback:e})=>m.createElement(P,{onClick:e},m.createElement(I,null)),B=u.div`
  width: 373px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${12}, 30px);
  grid-template-rows: repeat(${20}, 30px);
  grid-gap: 1px;
  border: 1px solid #222;
  background: ${({theme:e})=>e.Stage_background};
`,j=u.div`
  display: ${({gameOver:e})=>!e&&"none"};
  position: absolute;
  width: 373px;
  height: 620px;
  background: rgba(0, 0, 0, 0.5);
`,J=({stage:e,startGame:t,gameOver:l})=>{const{StageSC:r,Stage_Shadow_SC:n}={StageSC:B,Stage_Shadow_SC:j};return m.createElement(r,null,l&&m.createElement(T,{callback:t}),m.createElement(n,{gameOver:l}),e.map((e=>e.map(((e,t)=>m.createElement(A,{key:t,type:e[0]}))))))},Z=d,G=u.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  background-color: ${({theme:e})=>e.main_background};
`,W=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    justify-content: space-between;
    width: 374px;
  }
`,H=u.div`
  border-radius: 15px;
  padding: 15px;
  padding-bottom: 5px;
  background-color: ${({theme:e})=>e.tetris_background};
`,N=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),U=()=>{const e=["I","J","L","O","S","T","Z"],t=e[Math.floor(Math.random()*e.length)];return R[t]},D=(e,t,{x:l,y:r})=>{for(let n=0;n<e.tetromino.length;n+=1)for(let a=0;a<e.tetromino[n].length;a+=1)if(!(0===e.tetromino[n][a]||t[n+e.pos.y+r]&&t[n+e.pos.y+r][a+e.pos.x+l]&&"clear"===t[n+e.pos.y+r][a+e.pos.x+l][1]))return!0;return!1};const K=()=>{const[e,o]=m.useState({}),s=m.useCallback((()=>o({pos:{x:4,y:0},tetromino:U().shape,collided:!1})),[]);return{player:e,updatePlayerPos:({x:e,y:s,collided:m})=>{o((o=>{return i=((e,t)=>{for(var l in t||(t={}))n.call(t,l)&&c(e,l,t[l]);if(r)for(var l of r(t))a.call(t,l)&&c(e,l,t[l]);return e})({},o),u={pos:{x:o.pos.x+=e,y:o.pos.y+=s},collided:m},t(i,l(u));var i,u}))},resetPlayer:s,playerRotate:t=>{const l=JSON.parse(JSON.stringify(e));var r;l.tetromino=(r=l.tetromino).map(((e,t)=>r.map((e=>e[t])))).map((e=>e.reverse()));const n=l.pos.x;let a=1;for(;D(l,t,{x:0,y:0});)if(l.pos.x+=a,a=-(a+(a>0?1:-1)),a>l.tetromino[0].length)return void(l.pos.x=n);o(l)}}},q=(e,t)=>{var l,r;const[n,a]=m.useState(N()),[c,o]=m.useState(0);return m.useEffect((()=>{if(!e.pos)return;o(0);const l=l=>{const r=l.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((t,l)=>{t.forEach(((t,n)=>{0!==t&&(r[l+e.pos.y][n+e.pos.x]=[t,""+(e.collided?"merged":"clear")])}))})),e.collided?(t(),(e=>e.reduce(((t,l)=>-1===l.findIndex((e=>0===e[0]))?(o((e=>e+1)),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(l),t)),[]))(r)):r};a((e=>l(e)))}),[e.collided,null==(l=e.pos)?void 0:l.x,null==(r=e.pos)?void 0:r.y,e.tetromino]),{stage:n,setStage:a,rowsCleared:c}},V=()=>{const[e,t]=m.useState(null),[l,r]=m.useState(!0),n=m.useRef(null),{player:a,updatePlayerPos:c,resetPlayer:o,playerRotate:s}=K(),{stage:i,setStage:u,rowsCleared:d}=q(a,o),{score:p,setScore:E,rows:h,setRows:x,level:v,setLevel:y}=(e=>{const[t,l]=m.useState(0),[r,n]=m.useState(0),[a,c]=m.useState(1);return m.useEffect((()=>{e>0&&(l((t=>t+L[e-1]*a)),n((t=>t+e)))}),[e]),{score:t,setScore:l,rows:r,setRows:n,level:a,setLevel:c}})(d),w=e=>{D(a,i,{x:e,y:0})||c({x:e,y:0,collided:!1})};return function(e,t){const l=g.exports.useRef(null);g.exports.useEffect((()=>{l.current=e}),[e]),g.exports.useEffect((()=>{if(null!==t){const e=setInterval((function(){l.current&&l.current()}),t);return()=>{clearInterval(e)}}}),[t])}((()=>{h>2*v&&(y((e=>e+1)),t(1e3/v+200)),D(a,i,{x:0,y:1})?(a.pos.y<1&&(r(!0),t(null)),c({x:0,y:0,collided:!0})):c({x:0,y:1,collided:!1})}),e),{handleMove:({keyCode:e})=>{l||(37===e?w(-1):39===e?w(1):40===e?t(30):38===e&&s(i))},keyUp:({keyCode:e})=>{l||40===e&&t(1e3/v+200)},score:p,rows:h,level:v,stage:i,gameArea:n,gameOver:l,handleStartGame:()=>{n.current&&n.current.focus(),u(N()),t(1e3),o(),E(0),y(1),x(0),r(!1)}}};var F=m.memo((()=>{const e=Z((e=>e.theme)),{TetrisSC:t,TetrisWrapSC:l,Tetris_Workspace_SC:r}={TetrisSC:W,TetrisWrapSC:G,Tetris_Workspace_SC:H},{handleMove:n,keyUp:a,score:c,rows:o,level:s,stage:i,gameArea:u,gameOver:g,handleStartGame:d}=V();return m.createElement(p,{theme:e},m.createElement(l,{role:"button",tabIndex:0,onKeyDown:n,onKeyUp:a,ref:u},m.createElement(M,null),m.createElement(t,null,m.createElement(r,null,m.createElement("div",{className:"display"},m.createElement(_,{text:`Score: ${c}`}),m.createElement(_,{text:`Rows: ${o}`}),m.createElement(_,{text:`Level: ${s}`})),m.createElement(J,{stage:i,startGame:d,gameOver:g}),m.createElement(k,{callback:n})))))}));E.render(m.createElement(h,{store:x},m.createElement(F,null)),document.getElementById("root"));
