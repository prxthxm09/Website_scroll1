import{i as e,n as t,t as n}from"./jsx-runtime-BM4UMy7V.js";var r=e(t(),1),i={value:`instrument-serif`,label:`Instrument Serif`,stack:`"Instrument Serif", Georgia, serif`,google:`Instrument+Serif`},a={value:`newsreader`,label:`Newsreader`,stack:`"Newsreader", Georgia, serif`,google:`Newsreader:wght@200..700`},o={value:`geist`,label:`Geist`,stack:`"Geist", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif`,google:`Geist:wght@100..900`},s=e=>Math.min(1,Math.max(0,e));function c(e,t){if(typeof e!=`string`)return t;let n=e.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i);if(!n)return t;let r=n[1].toLowerCase();return`#${r.length===3?r.replace(/./g,e=>e+e):r}`}function l(e){let[t,n,r]=[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16)/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{h:0,s:0,l:o};let c=s/(1-Math.abs(2*o-1));return{h:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,s:c,l:o}}function u({h:e,s:t,l:n}){let r=(1-Math.abs(2*n-1))*t,i=r*(1-Math.abs(e/60%2-1)),a=n-r/2,[o,c,l]=e<60?[r,i,0]:e<120?[i,r,0]:e<180?[0,r,i]:e<240?[0,i,r]:e<300?[i,0,r]:[r,0,i];return[o+a,c+a,l+a].map(e=>Math.round(s(e)*255))}function d(e){return`#${u(e).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function f(e,t){let n=l(e),r=l(t);return{hue:r.h-n.h,saturation:n.s>.01?Math.min(3,r.s/n.s):1,lightness:n.l>.01?Math.min(3,r.l/n.l):1}}function p(e,t){return t.find(t=>t.value===e)??t[0]}function m(e,t,n){return t.includes(e)?e:n}function h(e,[t,n,r]){return Number.isFinite(e)?Math.min(r,Math.max(t,e)):n}function g(e){let t=[...new Set(e.map(e=>e.google).filter(e=>!!e))];if(t.length)return`https://fonts.googleapis.com/css2?${t.map(e=>`family=${e}`).join(`&`)}&display=swap`}function _(e){let{headingFont:t,bodyFont:n,headingWeight:r,bodyWeight:i,primaryColor:a,headingSize:o,bodySize:s,headingLetterSpacing:c,...l}=e;return[{headingFont:t,bodyFont:n,headingWeight:r,bodyWeight:i,primaryColor:a,headingSize:o,bodySize:s,headingLetterSpacing:c},l]}function v(e,t){let{headingFont:n,bodyFont:i,headingWeight:a,bodyWeight:o,primaryColor:u,headingSize:_,bodySize:v,headingLetterSpacing:y}=t;return(0,r.useMemo)(()=>{let t=p(n,e.headingFonts),r=p(i,e.bodyFonts),b=c(u,e.primaryColor),x=b===e.primaryColor,S=f(e.primaryColor,b),C=e=>{if(x)return e;let t=l(c(e,e));return d({h:(t.h+S.hue+360)%360,s:s(t.s*S.saturation),l:s(t.l*S.lightness)})},w={heading:t.stack,body:r.stack,headingWeight:m(a,e.headingWeights,e.headingWeight),bodyWeight:m(o,e.bodyWeights,e.bodyWeight),primary:b,headingSize:h(_,e.headingSize),bodySize:h(v,e.bodySize),headingLetterSpacing:h(y,e.headingLetterSpacing),retone:C,retoneRgba:e=>{if(x)return e;let t=e.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i);if(!t)return e;let n=`#${[t[1],t[2],t[3]].map(e=>Math.round(Number(e)).toString(16).padStart(2,`0`)).join(``)}`,[r,i,a]=[1,3,5].map(e=>Number.parseInt(C(n).slice(e,e+2),16));return t[4]===void 0?`rgb(${r}, ${i}, ${a})`:`rgba(${r}, ${i}, ${a}, ${t[4]})`},filter:(t=e.primaryColor)=>{if(x)return`none`;let n=f(t,C(t));return[`hue-rotate(${n.hue.toFixed(2)}deg)`,`saturate(${Math.max(0,n.saturation).toFixed(3)})`,`brightness(${Math.min(2,Math.max(.2,n.lightness)).toFixed(3)})`].join(` `)}};return{css:e.css(w),fontHref:g([t,r]),inlineStyles:e.inlineStyles?.(w)}},[e,n,i,a,o,u,_,v,y])}var y=`threeui-page-typography`,b=`threeui-page-typography-fonts`,x=`threeui-page-customization`;`${x}${b}${b}${y}${y}`;function S(e,t){e?.contentWindow?.postMessage({type:x,css:t?.css??``,fontHref:t?.fontHref},`*`)}function C(e,t){let n=e?.contentDocument;if(!n?.head)return;let r=n.getElementById(b);if(t?.fontHref){let e=r??n.createElement(`link`);e.id=b,e.rel=`stylesheet`,e.getAttribute(`href`)!==t.fontHref&&(e.href=t.fontHref),r||n.head.append(e)}else r?.remove();if(!t?.css){n.getElementById(y)?.remove();return}let i=n.getElementById(y)??n.createElement(`style`);i.id=y,i.textContent!==t.css&&(i.textContent=t.css),n.head.append(i);for(let e of t.inlineStyles??[])for(let t of n.querySelectorAll(e.selector))for(let[n,r]of Object.entries(e.styles))t.style.setProperty(n,r)}var w=n(),T=`allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts`,E=`allow-downloads allow-forms allow-modals allow-popups allow-scripts`,D=`threeui-background-presentation`;function O(e,t,n){let r=e?.contentDocument;if(!r)return;if(r.getElementById(D)?.remove(),r.querySelectorAll(`[data-threeui-background-layer]`).forEach(e=>{e.removeAttribute(`data-threeui-background-layer`),e.removeAttribute(`data-threeui-background-fill`)}),!t){r.documentElement.removeAttribute(`data-threeui-presentation`);return}let i=r.querySelector(t);if(!i)return;i.setAttribute(`data-threeui-background-layer`,``),i.setAttribute(`data-threeui-background-fill`,``),n&&r.querySelectorAll(n).forEach(e=>{e.setAttribute(`data-threeui-background-layer`,``)}),r.documentElement.setAttribute(`data-threeui-presentation`,`background`);let a=r.createElement(`style`);a.id=D,a.textContent=`
    html[data-threeui-presentation="background"],
    html[data-threeui-presentation="background"] body {
      width: 100% !important;
      height: 100% !important;
      min-height: 100% !important;
      overflow: hidden !important;
    }
    html[data-threeui-presentation="background"] body * {
      visibility: hidden !important;
      pointer-events: none !important;
    }
    html[data-threeui-presentation="background"] [data-threeui-background-layer],
    html[data-threeui-presentation="background"] [data-threeui-background-layer] * {
      visibility: visible !important;
    }
    html[data-threeui-presentation="background"] [data-threeui-background-fill] {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      max-width: none !important;
      max-height: none !important;
      margin: 0 !important;
      transform: none !important;
    }
  `,r.head.appendChild(a),e.contentWindow?.requestAnimationFrame(()=>{e.contentWindow?.dispatchEvent(new Event(`resize`))})}function k({applyScene:e,backgroundCanvasSelector:t,backgroundVisualSelector:n,className:i=``,customization:a,sourceUrl:o,srcDoc:s,style:c,title:l}){let[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null);return(0,r.useEffect)(()=>{C(f.current,a),S(f.current,a),O(f.current,t,n),f.current&&e?.(f.current)},[e,t,n,a]),(0,w.jsx)(`div`,{className:`threeui-background landing-page-frame${i?` ${i}`:``}`,"data-state":u?`ready`:`loading`,style:{position:`relative`,overflow:`hidden`,background:`#080808`,pointerEvents:`auto`,...c},children:(0,w.jsx)(`iframe`,{ref:f,title:l,...s?{srcDoc:s}:{src:o},sandbox:s?E:T,loading:`eager`,onLoad:r=>{C(r.currentTarget,a),S(r.currentTarget,a),O(r.currentTarget,t,n),e?.(r.currentTarget),d(!0)},style:{position:`absolute`,inset:0,display:`block`,width:`100%`,height:`100%`,border:0,background:`#080808`,opacity:t&&!u?0:1,pointerEvents:t&&!u?`none`:`auto`}})})}var A=e=>Number(e.toFixed(3)),j=e=>`${A(e)}px`,M={value:`onest`,label:`Onest`,stack:`'Onest', system-ui, -apple-system, 'Helvetica Neue', sans-serif`},N={headingFonts:[M,i,a,o],bodyFonts:[M,o,a,i],headingWeights:[`400`,`500`,`600`,`700`],headingWeight:`400`,bodyWeights:[`300`,`400`,`500`,`600`],bodyWeight:`300`,primaryColor:`#e0231c`,headingSize:[30,46,72],bodySize:[13,17,24],headingLetterSpacing:[-.06,-.012,.12],css:e=>`
:root {
  --vermilion: ${e.primary};
  --ember: ${e.retone(`#ff5a3c`)};
}
body { font-family: ${e.body}; }
body, .body, .body-lg, .num { font-weight: ${e.bodyWeight}; }
h1:not(.jp), h2:not(.jp), h3:not(.jp), .display:not(.jp) {
  font-family: ${e.heading};
  font-weight: ${e.headingWeight};
}
.display { letter-spacing: ${e.headingLetterSpacing}em; }
.h-hero { font-size: clamp(26px, 3.05vw, ${j(e.headingSize)}); }
.h-sec { font-size: clamp(30px, 4vw, ${j(e.headingSize*60/46)}); }
.body-lg { font-size: clamp(14px, 1.02vw, ${j(e.bodySize)}); }
.body { font-size: ${j(Math.max(11,e.bodySize-3))}; }
`};function P(e){let[t,n]=_(e),r=v(N,t);return(0,w.jsx)(k,{...n,customization:r,title:`Kage — Where stillness reveals the unseen`,sourceUrl:new URL(`landing-pages/kage.html`,document.baseURI).href})}export{P as KageLandingPage};