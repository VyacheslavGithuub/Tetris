var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,a=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l;import{c as o,a as s,q as i,R as m,u,C as p,G as d,b as g,P as E}from"./vendor.43a5f677.js";const h=s({reducer:{counter:o({name:"counter",initialState:{value:0},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},incrementByAmount:(e,t)=>{e.value+=t.payload}}}).reducer,theme:o({name:"themeSlice",initialState:{main_background:"#3b3b3b",tetris_background:"#ffa500",Stage_background:"#262626"},reducers:{}}).reducer}}),x=i.div`
  height: 40px;
`,v=()=>{const{ControlButtonsSC:e}={ControlButtonsSC:x};return m.createElement(e,null,"1")},y=i.div`
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
`,b=({gameOver:e,text:t})=>m.createElement(y,{gameOver:e},t),f=()=>m.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 512 512"},m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M499.029,184.32h-51.14c-1.638-5.461-3.428-9.059-5.363-13.319l36.024-36.195c5.329-5.33,5.332-14.056,0.005-19.389\r\n\t\t\tL396.586,33.31c-2.561-2.564-6.036-4.025-9.661-4.025c-3.624,0-7.098,1.431-9.66,3.995l-36.177,35.874\r\n\t\t\tc-4.29-1.969-7.946-3.798-13.408-5.467V12.971C327.68,5.431,322.25,0,314.709,0H198.656c-7.541,0-14.336,5.431-14.336,12.971\r\n\t\t\tV63.17c-4.096,1.694-8.77,3.555-13.222,5.576l-35.363-35.489c-5.33-5.325-13.883-5.323-19.214,0.003l-82.066,82.065\r\n\t\t\tc-5.333,5.33-5.314,13.974,0.016,19.309l35.317,35.671c-2.06,4.488-3.947,8.555-5.676,14.017H14.336\r\n\t\t\tC6.795,184.32,0,189.751,0,197.291v116.053c0,7.539,6.795,14.336,14.336,14.336h49.776c1.726,4.096,3.622,8.835,5.677,13.317\r\n\t\t\tL34.45,376.166c-2.561,2.561-4,5.95-3.999,9.574c0.001,3.624,1.442,7.053,4.005,9.613l82.153,82.039\r\n\t\t\tc5.33,5.325,13.967,5.315,19.296-0.011l35.186-35.486c4.452,2.019,9.131,3.876,13.227,5.572v50.198\r\n\t\t\tc0,7.539,6.795,14.336,14.336,14.336h116.053c7.541,0,12.971-6.797,12.971-14.336v-50.717c5.461-1.67,9.122-3.514,13.413-5.485\r\n\t\t\tl36.001,36.195c2.56,2.564,6.205,4.305,9.829,4.305c0.001,0,0.001,0,0.003,0c3.622,0,7.096-1.739,9.657-4.301l82.016-82.189\r\n\t\t\tc2.56-2.561,3.998-6.119,3.996-9.742c-0.001-3.622-1.44-7.137-4.002-9.697l-36.058-35.714c1.931-4.253,3.718-8.544,5.355-12.64\r\n\t\t\th51.141c7.541,0,12.971-6.797,12.971-14.336V197.291C512,189.751,506.57,184.32,499.029,184.32z M484.693,300.373h-46.525\r\n\t\t\tc-5.945,0-11.207,3.506-13.01,9.172c-2.986,9.384-6.78,18.396-11.278,27.124c-2.721,5.278-1.716,11.627,2.485,15.826\r\n\t\t\tl33.266,33.202l-62.703,62.717l-33.067-33.12c-4.213-4.219-10.68-5.22-15.968-2.467c-8.765,4.567-18.317,8.415-27.715,11.446\r\n\t\t\tc-5.64,1.819-9.804,7.066-9.804,12.992v47.429h-88.747v-46.987c0-5.964-3.529-11.238-9.22-13.025\r\n\t\t\tc-9.572-3.008-18.773-6.857-27.684-11.446c-5.274-2.713-11.613-1.714-15.812,2.479l-32.696,32.696l-62.819-62.768l32.582-32.57\r\n\t\t\tc4.213-4.213,5.213-10.671,2.463-15.958c-4.65-8.936-8.552-17.987-11.603-27.57c-1.804-5.665-7.063-9.172-13.008-9.172H27.307\r\n\t\t\tv-88.747h46.525c5.945,0,11.207-4.187,13.01-9.854c3.053-9.591,6.959-19.157,11.612-28.097c2.75-5.282,1.757-11.825-2.453-16.039\r\n\t\t\tl-32.543-32.607l62.804-62.79l32.741,32.687c4.197,4.192,10.621,5.19,15.895,2.475c8.921-4.59,17.949-8.443,27.509-11.446\r\n\t\t\tc5.689-1.787,9.22-7.064,9.22-13.028V27.307h88.747V73.37c0,5.927,4.164,11.177,9.806,12.995\r\n\t\t\tc9.398,3.03,18.776,6.88,27.536,11.444c5.291,2.757,11.839,1.761,16.055-2.46l33.113-33.112l62.688,62.738l-33.227,33.239\r\n\t\t\tc-4.198,4.2-5.196,10.63-2.475,15.909c4.5,8.733,8.3,18.261,11.287,27.648c1.802,5.665,7.068,9.855,13.013,9.855h46.524V300.373z"}))),m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M256,114.005c-77.92,0-141.312,63.392-141.312,141.312S178.08,396.629,256,396.629s141.312-63.392,141.312-141.312\r\n\t\t\tS333.92,114.005,256,114.005z M256,369.323c-62.863,0-114.005-51.143-114.005-114.005S193.137,141.312,256,141.312\r\n\t\t\ts114.005,51.143,114.005,114.005S318.863,369.323,256,369.323z"}))),m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M256,178.859c-42.159,0-76.459,34.299-76.459,76.459c0,42.16,34.3,76.459,76.459,76.459s76.459-34.299,76.459-76.459\r\n\t\t\tC332.459,213.157,298.159,178.859,256,178.859z M256,304.469c-27.103,0-49.152-22.049-49.152-49.152s22.049-49.152,49.152-49.152\r\n\t\t\ts49.152,22.049,49.152,49.152S283.103,304.469,256,304.469z"}))),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null)),S=()=>m.createElement("div",null,m.createElement(f,null)),w=i.div`
  width: auto;
  background: rgba(${e=>e.color}, 0.8);
  border: ${e=>0===e.type?"0px solid":"4px solid"};
  border-bottom-color: rgba(${e=>e.color}, 0.1);
  border-right-color: rgba(${e=>e.color}, 1);
  border-top-color: rgba(${e=>e.color}, 1);
  border-left-color: rgba(${e=>e.color}, 0.3);
`,C=[40,100,300,1200],O={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}};var k=m.memo((({type:e})=>m.createElement(w,{type:e,color:O[e].color})));const z=()=>m.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"70px",height:"70px",viewBox:"0 0 52.821 52.821"},m.createElement("g",null,m.createElement("path",{d:"M51.82,19.074c-1.488-5.344-4.965-10.164-9.608-13.189C37.292,2.68,30.86,1.717,25.106,1.588\r\n\t\tC17.071,1.404,6.893,4.49,2.94,12.152c-0.329,0.637,0.64,1.184,0.969,0.547c2.801-5.43,9.491-8.566,15.263-9.594\r\n\t\tc6.209-1.104,12.998-0.236,18.873,1.955c6.134,2.287,10.393,7.537,12.486,13.611c2.33,6.758,1.04,13.488-2.679,19.424\r\n\t\tc-7.678,12.252-26.522,16.229-37.982,6.943c-5.25-4.254-8.674-9.945-8.74-16.752c-0.039-4.012,0.743-8.492,2.746-12.012\r\n\t\tc0.621-1.09,1.455-2.024,2.396-2.867c0.014-0.219,0.03-0.436,0.045-0.652c-0.109-0.139-0.202-0.289-0.25-0.475\r\n\t\tc-0.005-0.021-0.004-0.037-0.009-0.059c-0.572,0.481-1.126,0.986-1.65,1.529c-2.291,2.371-3.194,5.66-3.832,8.801\r\n\t\tc-1.268,6.24-0.515,12.074,3.063,17.346c3.063,4.514,7.787,8.715,13.131,10.182c6.42,1.762,13.123,1.613,19.198-1.108\r\n\t\tc2.749-1.23,5.729-2.438,8.039-4.424c2.833-2.438,4.961-5.881,6.679-9.156C53.305,30.399,53.303,24.397,51.82,19.074z"}),m.createElement("path",{d:"M17.736,31.85c0.103,1.15,0.121,3.08,1.325,3.598c0.051,0.066,0.105,0.127,0.167,0.174\r\n\t\tc1.198,0.902,2.868-0.504,3.876-1.109c2.797-1.674,12.586-8.037,14.039-10.277c0.151-0.234,0.098-0.455-0.046-0.609\r\n\t\tc-0.01-0.16-0.081-0.318-0.258-0.428c-1.622-0.992-8.87-4.297-10.89-5.045c-1.044-0.389-5.593-2.34-6.212-2.355\r\n\t\tc-2.373-1.525-2.021,5.525-2.033,6.152C17.639,25.235,17.444,28.574,17.736,31.85z M20.96,25.033\r\n\t\tc-0.088,0.039-0.162,0.102-0.217,0.182c-0.004-0.299-0.009-0.596-0.011-0.891c0.096,0.055,0.197,0.104,0.298,0.154\r\n\t\tC21.009,24.66,20.984,24.846,20.96,25.033z M21.167,29.695c0.063-0.248,0.151-0.498,0.257-0.748\r\n\t\tc1.583-0.371,3.088-1.146,4.634-1.645c0.754-0.207,1.509-0.414,2.259-0.633C25.981,27.764,23.595,28.74,21.167,29.695z\r\n\t\t M24.587,25.762c-0.18,0.082-0.362,0.162-0.539,0.25c-0.158-0.098-0.319-0.174-0.483-0.244\r\n\t\tC23.905,25.758,24.246,25.754,24.587,25.762z M24.108,24.285c0.023-0.014,0.048-0.025,0.074-0.037\r\n\t\tc0.642,0.137,1.284,0.231,1.944,0.24c0.459,0.055,0.918,0.113,1.378,0.166c-0.044,0.016-0.088,0.029-0.133,0.045\r\n\t\tC26.401,24.598,25.23,24.488,24.108,24.285z M28.874,23.106c-0.761-0.27-1.523-0.549-2.291-0.854\r\n\t\tc-1.265-0.502-2.525-0.859-3.846-1.17c-0.413-0.096-0.753-0.26-1.052-0.465C24.175,21.008,26.571,21.971,28.874,23.106z\r\n\t\t M22.896,22.258c-0.75-0.072-1.509-0.107-2.278-0.105c-0.026-0.297-0.056-0.592-0.085-0.889\r\n\t\tC21.281,21.785,22.06,22.047,22.896,22.258z"})),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null),m.createElement("g",null)),M=i.button`
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
`,$=({callback:e})=>m.createElement(M,{onClick:e},m.createElement(z,null)),_=i.div`
  width: 373px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${12}, 30px);
  grid-template-rows: repeat(${20}, 30px);
  grid-gap: 1px;
  border: 1px solid #222;
  background: ${({theme:e})=>e.Stage_background};
`,I=i.div`
  display: ${({gameOver:e})=>!e&&"none"};
  position: absolute;
  width: 373px;
  height: 620px;
  background: rgba(0, 0, 0, 0.5);
`,L=({stage:e,startGame:t,gameOver:r})=>{const{StageSC:l,Stage_Shadow_SC:n}={StageSC:_,Stage_Shadow_SC:I};return m.createElement(l,null,r&&m.createElement($,{callback:t}),m.createElement(n,{gameOver:r}),e.map((e=>e.map(((e,t)=>m.createElement(k,{key:t,type:e[0]}))))))},P=u,T=i.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  background-color: ${({theme:e})=>e.main_background};
`,j=i.div`
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
`,A=i.div`
  border-radius: 15px;
  padding: 15px;
  padding-bottom: 5px;
  background-color: ${({theme:e})=>e.tetris_background};
`,J=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),R=()=>{const e=["I","J","L","O","S","T","Z"],t=e[Math.floor(Math.random()*e.length)];return O[t]},B=(e,t,{x:r,y:l})=>{for(let n=0;n<e.tetromino.length;n+=1)for(let c=0;c<e.tetromino[n].length;c+=1)if(!(0===e.tetromino[n][c]||t[n+e.pos.y+l]&&t[n+e.pos.y+l][c+e.pos.x+r]&&"clear"===t[n+e.pos.y+l][c+e.pos.x+r][1]))return!0;return!1};const G=()=>{const[e,o]=m.useState({}),s=m.useCallback((()=>o({pos:{x:4,y:0},tetromino:R().shape,collided:!1})),[]);return{player:e,updatePlayerPos:({x:e,y:s,collided:i})=>{o((o=>{return m=((e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&a(e,r,t[r]);return e})({},o),u={pos:{x:o.pos.x+=e,y:o.pos.y+=s},collided:i},t(m,r(u));var m,u}))},resetPlayer:s,playerRotate:t=>{const r=JSON.parse(JSON.stringify(e));var l;r.tetromino=(l=r.tetromino).map(((e,t)=>l.map((e=>e[t])))).map((e=>e.reverse()));const n=r.pos.x;let c=1;for(;B(r,t,{x:0,y:0});)if(r.pos.x+=c,c=-(c+(c>0?1:-1)),c>r.tetromino[0].length)return void(r.pos.x=n);o(r)}}},V=(e,t)=>{var r,l;const[n,c]=m.useState(J()),[a,o]=m.useState(0);return m.useEffect((()=>{if(!e.pos)return;o(0);const r=r=>{const l=r.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((t,r)=>{t.forEach(((t,n)=>{0!==t&&(l[r+e.pos.y][n+e.pos.x]=[t,""+(e.collided?"merged":"clear")])}))})),e.collided?(t(),(e=>e.reduce(((t,r)=>-1===r.findIndex((e=>0===e[0]))?(o((e=>e+1)),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(r),t)),[]))(l)):l};c((e=>r(e)))}),[e.collided,null==(r=e.pos)?void 0:r.x,null==(l=e.pos)?void 0:l.y,e.tetromino]),{stage:n,setStage:c,rowsCleared:a}},Z=()=>{const[e,t]=m.useState(null),[r,l]=m.useState(!0),n=m.useRef(null),{player:c,updatePlayerPos:a,resetPlayer:o,playerRotate:s}=G(),{stage:i,setStage:u,rowsCleared:d}=V(c,o),{score:g,setScore:E,rows:h,setRows:x,level:v,setLevel:y}=(e=>{const[t,r]=m.useState(0),[l,n]=m.useState(0),[c,a]=m.useState(1);return m.useEffect((()=>{e>0&&(r((t=>t+C[e-1]*c)),n((t=>t+e)))}),[e]),{score:t,setScore:r,rows:l,setRows:n,level:c,setLevel:a}})(d),b=e=>{B(c,i,{x:e,y:0})||a({x:e,y:0,collided:!1})};return function(e,t){const r=p.exports.useRef(null);p.exports.useEffect((()=>{r.current=e}),[e]),p.exports.useEffect((()=>{if(null!==t){const e=setInterval((function(){r.current&&r.current()}),t);return()=>{clearInterval(e)}}}),[t])}((()=>{h>10*v&&(y((e=>e+1)),t(1e3/v+200)),B(c,i,{x:0,y:1})?(c.pos.y<1&&(console.log("Game over!"),l(!0),t(null)),a({x:0,y:0,collided:!0})):a({x:0,y:1,collided:!1})}),e),{move:({keyCode:e,repeat:l})=>{if(!r)if(37===e)b(-1);else if(39===e)b(1);else if(40===e){if(l)return;t(30)}else 38===e&&s(i)},keyUp:({keyCode:e})=>{r||40===e&&t(1e3/v+200)},score:g,rows:h,level:v,stage:i,gameArea:n,gameOver:r,handleStartGame:()=>{n.current&&n.current.focus(),u(J()),t(1e3),o(),E(0),y(1),x(0),l(!1)}}};var H=m.memo((()=>{const e=P((e=>e.theme)),{TetrisSC:t,TetrisWrapSC:r,Tetris_Workspace_SC:l}={TetrisSC:j,TetrisWrapSC:T,Tetris_Workspace_SC:A},{move:n,keyUp:c,score:a,rows:o,level:s,stage:i,gameArea:u,gameOver:p,handleStartGame:g}=Z();return m.createElement(d,{theme:e},m.createElement(r,{role:"button",tabIndex:0,onKeyDown:n,onKeyUp:c,ref:u},m.createElement(S,null),m.createElement(t,null,m.createElement(l,null,m.createElement("div",{className:"display"},m.createElement(b,{text:`Score: ${a}`}),m.createElement(b,{text:`Rows: ${o}`}),m.createElement(b,{text:`Level: ${s}`})),m.createElement(L,{stage:i,startGame:g,gameOver:p}),m.createElement(v,null)))))}));g.render(m.createElement(E,{store:h},m.createElement(H,null)),document.getElementById("root"));
