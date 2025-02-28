import{j as n,r as Z,C as G,s as J,L as K}from"./index-BiakHJUN.js";const Q=({title:t,description:o,bgImage:y})=>n.jsx(n.Fragment,{children:n.jsxs("div",{className:"group relative w-full max-w-sm bg-cover bg-center rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500",style:{backgroundImage:`url(${y})`},children:[n.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500"}),n.jsxs("div",{className:"relative p-6",children:[n.jsx("h3",{className:"text-xl font-bold text-white transition-colors duration-500 group-hover:text-[#982f3f]",children:t}),n.jsx("p",{className:"text-gray-300 text-sm mt-3 group-hover:text-gray-100",children:o}),n.jsx("button",{className:"mt-6 py-2 px-6 bg-[#982f3f] text-white font-bold rounded-full transition-transform duration-500 group-hover:translate-y-1 group-hover:bg-white group-hover:text-gray-800",children:"Learn More"})]})]})});var I={};function U(t){if(!t||typeof window>"u")return;const o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=t,document.head.appendChild(o),t}Object.defineProperty(I,"__esModule",{value:!0});var e=Z;function V(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=V(e);U(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Y=e.forwardRef(function({style:o={},className:y="",autoFill:u=!1,play:d=!0,pauseOnHover:b=!1,pauseOnClick:w=!1,direction:r="left",speed:h=50,delay:M=0,loop:j=0,gradient:L=!1,gradientColor:S="white",gradientWidth:v=200,onFinish:z,onCycleComplete:W,onMount:C,children:g},O){const[N,B]=e.useState(0),[p,P]=e.useState(0),[x,k]=e.useState(1),[E,X]=e.useState(!1),D=e.useRef(null),s=O||D,f=e.useRef(null),m=e.useCallback(()=>{if(f.current&&s.current){const a=s.current.getBoundingClientRect(),R=f.current.getBoundingClientRect();let l=a.width,c=R.width;(r==="up"||r==="down")&&(l=a.height,c=R.height),k(u&&l&&c&&c<l?Math.ceil(l/c):1),B(l),P(c)}},[u,s,r]);e.useEffect(()=>{if(E&&(m(),f.current&&s.current)){const a=new ResizeObserver(()=>m());return a.observe(s.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[m,s,E]),e.useEffect(()=>{m()},[m,g]),e.useEffect(()=>{X(!0)},[]),e.useEffect(()=>{typeof C=="function"&&C()},[]);const _=e.useMemo(()=>u?p*x/h:p<N?N/h:p/h,[u,N,p,x,h]),H=e.useMemo(()=>Object.assign(Object.assign({},o),{"--pause-on-hover":!d||b?"paused":"running","--pause-on-click":!d||b&&!w||w?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[o,d,b,w,r]),T=e.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof v=="number"?`${v}px`:v}),[S,v]),A=e.useMemo(()=>({"--play":d?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${_}s`,"--delay":`${M}s`,"--iteration-count":j?`${j}`:"infinite","--min-width":u?"auto":"100%"}),[d,r,_,M,j,u]),q=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),$=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((R,l)=>i.default.createElement(e.Fragment,{key:l},e.Children.map(g,c=>i.default.createElement("div",{style:q,className:"rfm-child"},c)))),[q,g]);return E?i.default.createElement("div",{ref:s,style:H,className:"rfm-marquee-container "+y},L&&i.default.createElement("div",{style:T,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:W,onAnimationEnd:z},i.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(g,a=>i.default.createElement("div",{style:q,className:"rfm-child"},a))),$(x-1)),i.default.createElement("div",{className:"rfm-marquee",style:A},$(x))):null});var F=I.default=Y;const te=()=>n.jsxs("div",{className:"max-w-5xl mx-auto my-24 pt-20",children:[n.jsx(G,{title:"Our Services",heading:"Advanced And Highly Reliable Performance",description:"Our success is our success and together we help our society to become a better place to live and work.",textColor:"text-black",borderColor:"border-black"}),n.jsx(F,{className:"pt-20",gradient:!1,speed:50,children:n.jsx("div",{className:"flex gap-5",children:J.map((t,o)=>n.jsx(Q,{title:t.title,description:t.description,bgImage:t.bgImage},o))})}),n.jsx("div",{className:"flex justify-center my-20",children:n.jsx(K,{to:"/service",className:"py-2 px-7 bg-[#982f3f] hover:bg-black hover:text-white text-white rounded-3xl",children:"See All Services"})})]});export{te as default};
