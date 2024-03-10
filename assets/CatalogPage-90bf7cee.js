import{j as s,r as l,u as b,a as Fe,b as H,o as bn,c as Sn,d as xn,e as Qe,g as Tn,f as jn,h as Rt,i as kt,k as En,l as Nt,L as wn,m as Dt}from"./index-8e6316c2.js";const An=e=>e.autosStore.autos,jr=e=>e.autosStore.favorites,$n=e=>e.autosStore.autosBrands,_n=e=>e.autosStore.page,Cn=e=>e.autosStore.isLoading,Fn=e=>e.autosStore.error,In=e=>e.autosStore.searchResult,On=e=>e.modal.isOpenModal,Mn=e=>e.modal.modalData,Pn=()=>s.jsx("div",{children:"NotFound"}),Ln=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})),Rn=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("path",{fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})),Er=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:200,height:200,style:{width:"100%",height:"100%",backgroundSize:"initial",backgroundRepeat:"initial",backgroundPositionY:"initial",backgroundPositionX:"initial",backgroundOrigin:"initial",backgroundColor:"initial",backgroundClip:"initial",backgroundAttachment:"initial",animationPlayState:"paused"},viewBox:"0 0 100 100",...e},l.createElement("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"rotate(0deg) scale(.8,.8)",animationPlayState:"paused"}},l.createElement("path",{fill:"#333",d:"M75 62.5h5.4c1.8 0 3.2 1.5 3.2 3.2v18.5c0 1.8-1.5 3.2-3.2 3.2H75c-1.8 0-3.2-1.5-3.2-3.2V65.8c0-1.8 1.4-3.3 3.2-3.3zM24.6 62.5h-5.4c-1.8 0-3.2 1.5-3.2 3.2v18.5c0 1.8 1.5 3.2 3.2 3.2h5.4c1.8 0 3.2-1.5 3.2-3.2V65.8c.1-1.8-1.4-3.3-3.2-3.3z",style:{fill:"#133341",animationPlayState:"paused"}}),l.createElement("path",{fill:"#333",d:"M86.8 75H13.2c-1.8 0-3.2-1.4-3.2-3.2V47.3c0-4.3 3.5-7.8 7.8-7.8h64.5c4.3 0 7.8 3.5 7.8 7.8v24.4c-.1 1.8-1.5 3.3-3.3 3.3zM72.8 12.6H27.2c-5.4 0-9.7 4.4-9.7 9.7v17.2h65V22.4c0-5.4-4.4-9.8-9.7-9.8z",style:{fill:"#133341",animationPlayState:"paused"}}),l.createElement("path",{fill:"#fff",d:"M69.2 17.4H30.8c-4.5 0-8.1 3.6-8.1 8.1v14.1h54.6V25.5c0-4.5-3.6-8.1-8.1-8.1z",style:{fill:"#008fd4",animationPlayState:"paused"}}),l.createElement("circle",{cx:19.3,cy:48.7,r:5.6,fill:"#fff",style:{fill:"#008fd4",animationPlayState:"paused"}}),l.createElement("circle",{cx:80.1,cy:48.7,r:5.6,fill:"#fff",style:{fill:"#008fd4",animationPlayState:"paused"}}),l.createElement("path",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:2.51,d:"M29.6 52.6h40.8M29.6 59.7h40.8M29.6 66.7h40.8",style:{stroke:"#008fd4",animationPlayState:"paused"}}))),kn=b.button`
   border: 0;
   padding: 0;
   display: block;
   background-color: transparent;
   transition: transform var(--transition);
   display: flex;
   justify-content: center;
   align-items: center;
    &:hover, 
    &:focus {
      transform: scale(1.2);
    }
`,Bt=({text:e,onClick:t})=>s.jsx(kn,{type:"button",onClick:t,children:e}),Nn=b.li`
    width: calc((100% - (3 * 29px)) / 4);
`,Dn=b.div`
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
    background: 
    linear-gradient(180deg, rgba(18, 20, 23, 0.5) 0%, rgba(18, 20, 23, 0.5) 100%),
    #f3f3f2;
    margin-bottom: 14px;

    .autoImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,Vt=b.div`
    position: absolute;
    top: 16px;
    right: 15px; 
    z-index: 1;
`,Bn=b.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`,Vn=b.h2`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
`,Un=b.span`
    color: #3470ff;
`,zn=b.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
`,pe=b.ul`
    display: flex;
    gap: 6px;
    margin-bottom: 4px;
`,L=b.li`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);

    &:last-child {
        border-right: none;
        padding-right: 0;
    }
`,Hn=b(pe)`
  margin-bottom: 28px;
`,Gn=b.button`
    border-radius: 12px;
    width: 100%;
    padding: 12px 0;
    background: #3470ff;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px; 
    color: var(--background-color);
    display: flex;
    justify-content: center;
    align-content: center;
    border: 0;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
    background-color: #0b44cd;
  }
`,Wn=({auto:e})=>{const{img:t,make:r,model:n,year:o,rentalPrice:i,address:c,rentalCompany:p,type:y,id:m,functionalities:F,fuelConsumption:A,engineSize:f,description:E,accessories:O,rentalConditions:I,mileage:$}=e,j=Fe(),Q=H(jr).some(X=>X.id===m),ee=c?c.split(", "):"",W=ee[1],S=ee[2],g=p.includes("Premium")?"Premium":"",k=y.charAt(0).toUpperCase()+y.slice(1).toLowerCase(),z=20,q=F[0],We=q.length>z?q.substring(0,z)+"...":q,N=X=>{j(Sn(X))},te=X=>{j(xn(X))};return s.jsxs(Nn,{children:[s.jsxs(Dn,{children:[t?s.jsx("img",{src:t,alt:`${r} ${n}`,className:"autoImg"}):s.jsx(Er,{}),Q?s.jsx(Vt,{children:s.jsx(Bt,{text:s.jsx(Rn,{}),onClick:()=>{te(m)}})}):s.jsx(Vt,{children:s.jsx(Bt,{text:s.jsx(Ln,{}),onClick:()=>{N(e)}})})]}),s.jsxs(Bn,{children:[s.jsxs(Vn,{children:[r," ",s.jsx(Un,{children:n}),","," ",o]}),s.jsx(zn,{children:i})]}),s.jsxs(pe,{children:[s.jsx(L,{children:W}),s.jsx(L,{children:S}),s.jsx(L,{children:p}),g&&s.jsx(L,{children:g})]}),s.jsxs(Hn,{children:[s.jsx(L,{children:k}),s.jsx(L,{children:n}),s.jsx(L,{children:m}),s.jsx(L,{children:We})]}),s.jsx(Gn,{onClick:()=>j(bn({img:t,make:r,model:n,city:W,country:S,id:m,year:o,formattedType:k,fuelConsumption:A,engineSize:f,description:E,accessories:O,functionalities:F,rentalConditions:I,mileage:$,rentalPrice:i})),children:"Learn more"})]})},Kn=b.ul`
  padding: 50px 0 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
`,Yn=({autos:e=[],searchResult:t=[]})=>{const r=H(jr),n=t.length>0?t:e;let o=n;if(r.length>0){const i=r.map(c=>c.id);o=[...n].sort((c,p)=>{const y=i.includes(c.id),m=i.includes(p.id);return y&&!m?-1:!y&&m?1:0})}return s.jsx(Kn,{className:"autosList",children:o.map(i=>s.jsx(Wn,{auto:i},i.id))})},qn=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e},l.createElement("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})),Xn=b.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(18, 20, 23, 0.5);;
  &:hover {
    cursor: pointer;
  }

  .popUp {
    position: relative;
    border-radius: 24px;
    padding: 40px;
    background-color: var(--background-color);
    max-width: 541px;
    width: 100%;
    min-height: 752px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    border: 0;
    background-color: transparent;
  }
`,Zn=b.div`
    overflow: hidden;
    object-fit: cover;
    border-radius: 14px;
    width: 461px;
    height: 248px;
    background: #f3f3f2;
    margin-bottom: 14px;

    .autoPopImg{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`,Jn=b.div`
    margin-bottom: 8px;
`,Qn=b.h2`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px; 
    color: var(--second-color);
`,eo=b.span`
    color: #3470ff;
`,to=b.p`
  margin: 10px 0 24px;
  font-weight: 400;
  font-size: 14px; 
  line-height: 20px;
  color: var(--second-color);
`,wr=b.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--second-color);
  margin-bottom: 8px;
`,ro=b(wr)`
  margin-top: 24px;
`,no=b.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--second-family);
  margin-bottom: 24px;
`,Ut=b.li`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #363535;
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
`,oo=b.span`
  font-weight: 400;
`,ao=b.span`
  font-weight: 600;
  color: #3470ff;
`,io=b.a`
  border-radius: 12px;
  padding: 12px 50px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--background-color);
`,so=()=>{const e=Fe(),t=H(Mn),{img:r,make:n,model:o,city:i,country:c,id:p,year:y,formattedType:m,fuelConsumption:F,engineSize:A,description:f,accessories:E,functionalities:O,rentalConditions:I,mileage:$,rentalPrice:j}=t,R=I.split(`
`),Q=Number($).toLocaleString("en-US",{useGrouping:!0}),W=[...R,`Mileage: ${Q}`,`Rental Price: ${j}`].map((g,k)=>{const z=g.indexOf(":");if(z!==-1){const q=g.substring(0,z+1),me=g.substring(z+1);return s.jsxs(Ut,{children:[s.jsx(oo,{children:q}),s.jsx(ao,{children:me})]},k)}else return s.jsx(Ut,{children:g},k)});l.useEffect(()=>{const g=k=>{k.code==="Escape"&&e(Qe())};return window.addEventListener("keydown",g),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",g),document.body.style.overflow="auto"}},[e]);const S=g=>{g.target===g.currentTarget&&e(Qe())};return s.jsx(Xn,{onClick:S,children:s.jsxs("div",{className:"popUp",children:[s.jsx("button",{className:"closeBtn",onClick:()=>e(Qe()),children:s.jsx(qn,{})}),s.jsxs(Zn,{children:[r&&r.length>0?s.jsx("img",{className:"autoPopImg",src:r,alt:`${n} ${o}`}):s.jsx(Er,{}),"        "]}),s.jsx(Jn,{children:s.jsxs(Qn,{children:[n," ",s.jsx(eo,{children:o}),","," ",y]})}),s.jsxs(pe,{children:[s.jsx(L,{children:i}),s.jsx(L,{children:c}),s.jsxs(L,{children:["Id: ",p]}),s.jsxs(L,{children:["Year: ",y]}),s.jsxs(L,{children:["Type: ",m]})]}),s.jsxs(pe,{children:[s.jsxs(L,{children:["Fuel Consumption: ",F]}),s.jsxs(L,{children:["Engine Size: ",A]})]}),s.jsx(to,{children:f}),s.jsx(wr,{children:"Accessories and functionalities:"}),s.jsx(pe,{children:E.map((g,k)=>s.jsx(L,{children:g},k))}),s.jsx(pe,{children:O.map((g,k)=>s.jsx(L,{children:g},k))}),s.jsx(ro,{children:"Rental Conditions:"}),s.jsx(no,{children:W}),s.jsx(io,{href:"tel:+380730000000",type:"button",target:"_blank",rel:"noreferrer noopener",children:"Rental car"})]})})};var co=function(t){return lo(t)&&!uo(t)};function lo(e){return!!e&&typeof e=="object"}function uo(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ho(e)}var fo=typeof Symbol=="function"&&Symbol.for,po=fo?Symbol.for("react.element"):60103;function ho(e){return e.$$typeof===po}function go(e){return Array.isArray(e)?[]:{}}function Ce(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Se(go(e),e,t):e}function yo(e,t,r){return e.concat(t).map(function(n){return Ce(n,r)})}function mo(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(o){n[o]=Ce(e[o],r)}),Object.keys(t).forEach(function(o){!r.isMergeableObject(t[o])||!e[o]?n[o]=Ce(t[o],r):n[o]=Se(e[o],t[o],r)}),n}function Se(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||yo,r.isMergeableObject=r.isMergeableObject||co;var n=Array.isArray(t),o=Array.isArray(e),i=n===o;return i?n?r.arrayMerge(e,t,r):mo(e,t,r):Ce(t,r)}Se.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return Se(n,o,r)},{})};var it=Se,vo=typeof global=="object"&&global&&global.Object===Object&&global;const Ar=vo;var bo=typeof self=="object"&&self&&self.Object===Object&&self,So=Ar||bo||Function("return this")();const G=So;var xo=G.Symbol;const Z=xo;var $r=Object.prototype,To=$r.hasOwnProperty,jo=$r.toString,ve=Z?Z.toStringTag:void 0;function Eo(e){var t=To.call(e,ve),r=e[ve];try{e[ve]=void 0;var n=!0}catch{}var o=jo.call(e);return n&&(t?e[ve]=r:delete e[ve]),o}var wo=Object.prototype,Ao=wo.toString;function $o(e){return Ao.call(e)}var _o="[object Null]",Co="[object Undefined]",zt=Z?Z.toStringTag:void 0;function se(e){return e==null?e===void 0?Co:_o:zt&&zt in Object(e)?Eo(e):$o(e)}function _r(e,t){return function(r){return e(t(r))}}var Fo=_r(Object.getPrototypeOf,Object);const pt=Fo;function ce(e){return e!=null&&typeof e=="object"}var Io="[object Object]",Oo=Function.prototype,Mo=Object.prototype,Cr=Oo.toString,Po=Mo.hasOwnProperty,Lo=Cr.call(Object);function Ht(e){if(!ce(e)||se(e)!=Io)return!1;var t=pt(e);if(t===null)return!0;var r=Po.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Cr.call(r)==Lo}var Gt=Array.isArray,Wt=Object.keys,Ro=Object.prototype.hasOwnProperty,ko=typeof Element<"u";function st(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Gt(e),n=Gt(t),o,i,c;if(r&&n){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!st(e[o],t[o]))return!1;return!0}if(r!=n)return!1;var p=e instanceof Date,y=t instanceof Date;if(p!=y)return!1;if(p&&y)return e.getTime()==t.getTime();var m=e instanceof RegExp,F=t instanceof RegExp;if(m!=F)return!1;if(m&&F)return e.toString()==t.toString();var A=Wt(e);if(i=A.length,i!==Wt(t).length)return!1;for(o=i;o--!==0;)if(!Ro.call(t,A[o]))return!1;if(ko&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(c=A[o],!(c==="_owner"&&e.$$typeof)&&!st(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var No=function(t,r){try{return st(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const ne=Tn(No);var Do=!0;function Bo(e,t){if(!Do){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function Vo(){this.__data__=[],this.size=0}function Fr(e,t){return e===t||e!==e&&t!==t}function Ie(e,t){for(var r=e.length;r--;)if(Fr(e[r][0],t))return r;return-1}var Uo=Array.prototype,zo=Uo.splice;function Ho(e){var t=this.__data__,r=Ie(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():zo.call(t,r,1),--this.size,!0}function Go(e){var t=this.__data__,r=Ie(t,e);return r<0?void 0:t[r][1]}function Wo(e){return Ie(this.__data__,e)>-1}function Ko(e,t){var r=this.__data__,n=Ie(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Y.prototype.clear=Vo;Y.prototype.delete=Ho;Y.prototype.get=Go;Y.prototype.has=Wo;Y.prototype.set=Ko;function Yo(){this.__data__=new Y,this.size=0}function qo(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Xo(e){return this.__data__.get(e)}function Zo(e){return this.__data__.has(e)}function je(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Jo="[object AsyncFunction]",Qo="[object Function]",ea="[object GeneratorFunction]",ta="[object Proxy]";function Ir(e){if(!je(e))return!1;var t=se(e);return t==Qo||t==ea||t==Jo||t==ta}var ra=G["__core-js_shared__"];const et=ra;var Kt=function(){var e=/[^.]+$/.exec(et&&et.keys&&et.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function na(e){return!!Kt&&Kt in e}var oa=Function.prototype,aa=oa.toString;function le(e){if(e!=null){try{return aa.call(e)}catch{}try{return e+""}catch{}}return""}var ia=/[\\^$.*+?()[\]{}|]/g,sa=/^\[object .+?Constructor\]$/,ca=Function.prototype,la=Object.prototype,ua=ca.toString,fa=la.hasOwnProperty,da=RegExp("^"+ua.call(fa).replace(ia,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pa(e){if(!je(e)||na(e))return!1;var t=Ir(e)?da:sa;return t.test(le(e))}function ha(e,t){return e==null?void 0:e[t]}function ue(e,t){var r=ha(e,t);return pa(r)?r:void 0}var ga=ue(G,"Map");const xe=ga;var ya=ue(Object,"create");const Te=ya;function ma(){this.__data__=Te?Te(null):{},this.size=0}function va(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ba="__lodash_hash_undefined__",Sa=Object.prototype,xa=Sa.hasOwnProperty;function Ta(e){var t=this.__data__;if(Te){var r=t[e];return r===ba?void 0:r}return xa.call(t,e)?t[e]:void 0}var ja=Object.prototype,Ea=ja.hasOwnProperty;function wa(e){var t=this.__data__;return Te?t[e]!==void 0:Ea.call(t,e)}var Aa="__lodash_hash_undefined__";function $a(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Te&&t===void 0?Aa:t,this}function ie(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ie.prototype.clear=ma;ie.prototype.delete=va;ie.prototype.get=Ta;ie.prototype.has=wa;ie.prototype.set=$a;function _a(){this.size=0,this.__data__={hash:new ie,map:new(xe||Y),string:new ie}}function Ca(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Oe(e,t){var r=e.__data__;return Ca(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Fa(e){var t=Oe(this,e).delete(e);return this.size-=t?1:0,t}function Ia(e){return Oe(this,e).get(e)}function Oa(e){return Oe(this,e).has(e)}function Ma(e,t){var r=Oe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function J(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}J.prototype.clear=_a;J.prototype.delete=Fa;J.prototype.get=Ia;J.prototype.has=Oa;J.prototype.set=Ma;var Pa=200;function La(e,t){var r=this.__data__;if(r instanceof Y){var n=r.__data__;if(!xe||n.length<Pa-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new J(n)}return r.set(e,t),this.size=r.size,this}function ye(e){var t=this.__data__=new Y(e);this.size=t.size}ye.prototype.clear=Yo;ye.prototype.delete=qo;ye.prototype.get=Xo;ye.prototype.has=Zo;ye.prototype.set=La;function Ra(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var ka=function(){try{var e=ue(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Yt=ka;function Or(e,t,r){t=="__proto__"&&Yt?Yt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Na=Object.prototype,Da=Na.hasOwnProperty;function Mr(e,t,r){var n=e[t];(!(Da.call(e,t)&&Fr(n,r))||r===void 0&&!(t in e))&&Or(e,t,r)}function Me(e,t,r,n){var o=!r;r||(r={});for(var i=-1,c=t.length;++i<c;){var p=t[i],y=n?n(r[p],e[p],p,r,e):void 0;y===void 0&&(y=e[p]),o?Or(r,p,y):Mr(r,p,y)}return r}function Ba(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Va="[object Arguments]";function qt(e){return ce(e)&&se(e)==Va}var Pr=Object.prototype,Ua=Pr.hasOwnProperty,za=Pr.propertyIsEnumerable,Ha=qt(function(){return arguments}())?qt:function(e){return ce(e)&&Ua.call(e,"callee")&&!za.call(e,"callee")};const Ga=Ha;var Wa=Array.isArray;const Ee=Wa;function Ka(){return!1}var Lr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Xt=Lr&&typeof module=="object"&&module&&!module.nodeType&&module,Ya=Xt&&Xt.exports===Lr,Zt=Ya?G.Buffer:void 0,qa=Zt?Zt.isBuffer:void 0,Xa=qa||Ka;const Rr=Xa;var Za=9007199254740991,Ja=/^(?:0|[1-9]\d*)$/;function Qa(e,t){var r=typeof e;return t=t??Za,!!t&&(r=="number"||r!="symbol"&&Ja.test(e))&&e>-1&&e%1==0&&e<t}var ei=9007199254740991;function kr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ei}var ti="[object Arguments]",ri="[object Array]",ni="[object Boolean]",oi="[object Date]",ai="[object Error]",ii="[object Function]",si="[object Map]",ci="[object Number]",li="[object Object]",ui="[object RegExp]",fi="[object Set]",di="[object String]",pi="[object WeakMap]",hi="[object ArrayBuffer]",gi="[object DataView]",yi="[object Float32Array]",mi="[object Float64Array]",vi="[object Int8Array]",bi="[object Int16Array]",Si="[object Int32Array]",xi="[object Uint8Array]",Ti="[object Uint8ClampedArray]",ji="[object Uint16Array]",Ei="[object Uint32Array]",_={};_[yi]=_[mi]=_[vi]=_[bi]=_[Si]=_[xi]=_[Ti]=_[ji]=_[Ei]=!0;_[ti]=_[ri]=_[hi]=_[ni]=_[gi]=_[oi]=_[ai]=_[ii]=_[si]=_[ci]=_[li]=_[ui]=_[fi]=_[di]=_[pi]=!1;function wi(e){return ce(e)&&kr(e.length)&&!!_[se(e)]}function ht(e){return function(t){return e(t)}}var Nr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,be=Nr&&typeof module=="object"&&module&&!module.nodeType&&module,Ai=be&&be.exports===Nr,tt=Ai&&Ar.process,$i=function(){try{var e=be&&be.require&&be.require("util").types;return e||tt&&tt.binding&&tt.binding("util")}catch{}}();const ge=$i;var Jt=ge&&ge.isTypedArray,_i=Jt?ht(Jt):wi;const Ci=_i;var Fi=Object.prototype,Ii=Fi.hasOwnProperty;function Dr(e,t){var r=Ee(e),n=!r&&Ga(e),o=!r&&!n&&Rr(e),i=!r&&!n&&!o&&Ci(e),c=r||n||o||i,p=c?Ba(e.length,String):[],y=p.length;for(var m in e)(t||Ii.call(e,m))&&!(c&&(m=="length"||o&&(m=="offset"||m=="parent")||i&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Qa(m,y)))&&p.push(m);return p}var Oi=Object.prototype;function gt(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Oi;return e===r}var Mi=_r(Object.keys,Object);const Pi=Mi;var Li=Object.prototype,Ri=Li.hasOwnProperty;function ki(e){if(!gt(e))return Pi(e);var t=[];for(var r in Object(e))Ri.call(e,r)&&r!="constructor"&&t.push(r);return t}function Br(e){return e!=null&&kr(e.length)&&!Ir(e)}function yt(e){return Br(e)?Dr(e):ki(e)}function Ni(e,t){return e&&Me(t,yt(t),e)}function Di(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Bi=Object.prototype,Vi=Bi.hasOwnProperty;function Ui(e){if(!je(e))return Di(e);var t=gt(e),r=[];for(var n in e)n=="constructor"&&(t||!Vi.call(e,n))||r.push(n);return r}function mt(e){return Br(e)?Dr(e,!0):Ui(e)}function zi(e,t){return e&&Me(t,mt(t),e)}var Vr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Qt=Vr&&typeof module=="object"&&module&&!module.nodeType&&module,Hi=Qt&&Qt.exports===Vr,er=Hi?G.Buffer:void 0,tr=er?er.allocUnsafe:void 0;function Gi(e,t){if(t)return e.slice();var r=e.length,n=tr?tr(r):new e.constructor(r);return e.copy(n),n}function Ur(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Wi(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var c=e[r];t(c,r,e)&&(i[o++]=c)}return i}function zr(){return[]}var Ki=Object.prototype,Yi=Ki.propertyIsEnumerable,rr=Object.getOwnPropertySymbols,qi=rr?function(e){return e==null?[]:(e=Object(e),Wi(rr(e),function(t){return Yi.call(e,t)}))}:zr;const vt=qi;function Xi(e,t){return Me(e,vt(e),t)}function Hr(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var Zi=Object.getOwnPropertySymbols,Ji=Zi?function(e){for(var t=[];e;)Hr(t,vt(e)),e=pt(e);return t}:zr;const Gr=Ji;function Qi(e,t){return Me(e,Gr(e),t)}function Wr(e,t,r){var n=t(e);return Ee(e)?n:Hr(n,r(e))}function es(e){return Wr(e,yt,vt)}function ts(e){return Wr(e,mt,Gr)}var rs=ue(G,"DataView");const ct=rs;var ns=ue(G,"Promise");const lt=ns;var os=ue(G,"Set");const ut=os;var as=ue(G,"WeakMap");const ft=as;var nr="[object Map]",is="[object Object]",or="[object Promise]",ar="[object Set]",ir="[object WeakMap]",sr="[object DataView]",ss=le(ct),cs=le(xe),ls=le(lt),us=le(ut),fs=le(ft),oe=se;(ct&&oe(new ct(new ArrayBuffer(1)))!=sr||xe&&oe(new xe)!=nr||lt&&oe(lt.resolve())!=or||ut&&oe(new ut)!=ar||ft&&oe(new ft)!=ir)&&(oe=function(e){var t=se(e),r=t==is?e.constructor:void 0,n=r?le(r):"";if(n)switch(n){case ss:return sr;case cs:return nr;case ls:return or;case us:return ar;case fs:return ir}return t});const bt=oe;var ds=Object.prototype,ps=ds.hasOwnProperty;function hs(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&ps.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var gs=G.Uint8Array;const cr=gs;function St(e){var t=new e.constructor(e.byteLength);return new cr(t).set(new cr(e)),t}function ys(e,t){var r=t?St(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ms=/\w*$/;function vs(e){var t=new e.constructor(e.source,ms.exec(e));return t.lastIndex=e.lastIndex,t}var lr=Z?Z.prototype:void 0,ur=lr?lr.valueOf:void 0;function bs(e){return ur?Object(ur.call(e)):{}}function Ss(e,t){var r=t?St(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var xs="[object Boolean]",Ts="[object Date]",js="[object Map]",Es="[object Number]",ws="[object RegExp]",As="[object Set]",$s="[object String]",_s="[object Symbol]",Cs="[object ArrayBuffer]",Fs="[object DataView]",Is="[object Float32Array]",Os="[object Float64Array]",Ms="[object Int8Array]",Ps="[object Int16Array]",Ls="[object Int32Array]",Rs="[object Uint8Array]",ks="[object Uint8ClampedArray]",Ns="[object Uint16Array]",Ds="[object Uint32Array]";function Bs(e,t,r){var n=e.constructor;switch(t){case Cs:return St(e);case xs:case Ts:return new n(+e);case Fs:return ys(e,r);case Is:case Os:case Ms:case Ps:case Ls:case Rs:case ks:case Ns:case Ds:return Ss(e,r);case js:return new n;case Es:case $s:return new n(e);case ws:return vs(e);case As:return new n;case _s:return bs(e)}}var fr=Object.create,Vs=function(){function e(){}return function(t){if(!je(t))return{};if(fr)return fr(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Us=Vs;function zs(e){return typeof e.constructor=="function"&&!gt(e)?Us(pt(e)):{}}var Hs="[object Map]";function Gs(e){return ce(e)&&bt(e)==Hs}var dr=ge&&ge.isMap,Ws=dr?ht(dr):Gs;const Ks=Ws;var Ys="[object Set]";function qs(e){return ce(e)&&bt(e)==Ys}var pr=ge&&ge.isSet,Xs=pr?ht(pr):qs;const Zs=Xs;var Js=1,Qs=2,ec=4,Kr="[object Arguments]",tc="[object Array]",rc="[object Boolean]",nc="[object Date]",oc="[object Error]",Yr="[object Function]",ac="[object GeneratorFunction]",ic="[object Map]",sc="[object Number]",qr="[object Object]",cc="[object RegExp]",lc="[object Set]",uc="[object String]",fc="[object Symbol]",dc="[object WeakMap]",pc="[object ArrayBuffer]",hc="[object DataView]",gc="[object Float32Array]",yc="[object Float64Array]",mc="[object Int8Array]",vc="[object Int16Array]",bc="[object Int32Array]",Sc="[object Uint8Array]",xc="[object Uint8ClampedArray]",Tc="[object Uint16Array]",jc="[object Uint32Array]",w={};w[Kr]=w[tc]=w[pc]=w[hc]=w[rc]=w[nc]=w[gc]=w[yc]=w[mc]=w[vc]=w[bc]=w[ic]=w[sc]=w[qr]=w[cc]=w[lc]=w[uc]=w[fc]=w[Sc]=w[xc]=w[Tc]=w[jc]=!0;w[oc]=w[Yr]=w[dc]=!1;function _e(e,t,r,n,o,i){var c,p=t&Js,y=t&Qs,m=t&ec;if(r&&(c=o?r(e,n,o,i):r(e)),c!==void 0)return c;if(!je(e))return e;var F=Ee(e);if(F){if(c=hs(e),!p)return Ur(e,c)}else{var A=bt(e),f=A==Yr||A==ac;if(Rr(e))return Gi(e,p);if(A==qr||A==Kr||f&&!o){if(c=y||f?{}:zs(e),!p)return y?Qi(e,zi(c,e)):Xi(e,Ni(c,e))}else{if(!w[A])return o?e:{};c=Bs(e,A,p)}}i||(i=new ye);var E=i.get(e);if(E)return E;i.set(e,c),Zs(e)?e.forEach(function($){c.add(_e($,t,r,$,e,i))}):Ks(e)&&e.forEach(function($,j){c.set(j,_e($,t,r,j,e,i))});var O=m?y?ts:es:y?mt:yt,I=F?void 0:O(e);return Ra(I||e,function($,j){I&&(j=$,$=e[j]),Mr(c,j,_e($,t,r,j,e,i))}),c}var Ec=4;function hr(e){return _e(e,Ec)}function Xr(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var wc="[object Symbol]";function xt(e){return typeof e=="symbol"||ce(e)&&se(e)==wc}var Ac="Expected a function";function Tt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Ac);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var c=e.apply(this,n);return r.cache=i.set(o,c)||i,c};return r.cache=new(Tt.Cache||J),r}Tt.Cache=J;var $c=500;function _c(e){var t=Tt(e,function(n){return r.size===$c&&r.clear(),n}),r=t.cache;return t}var Cc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fc=/\\(\\)?/g,Ic=_c(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Cc,function(r,n,o,i){t.push(o?i.replace(Fc,"$1"):n||r)}),t});const Oc=Ic;var Mc=1/0;function Pc(e){if(typeof e=="string"||xt(e))return e;var t=e+"";return t=="0"&&1/e==-Mc?"-0":t}var Lc=1/0,gr=Z?Z.prototype:void 0,yr=gr?gr.toString:void 0;function Zr(e){if(typeof e=="string")return e;if(Ee(e))return Xr(e,Zr)+"";if(xt(e))return yr?yr.call(e):"";var t=e+"";return t=="0"&&1/e==-Lc?"-0":t}function Rc(e){return e==null?"":Zr(e)}function Jr(e){return Ee(e)?Xr(e,Pc):xt(e)?[e]:Ur(Oc(Rc(e)))}var Qr={exports:{}},T={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,jt=P?Symbol.for("react.element"):60103,Et=P?Symbol.for("react.portal"):60106,Pe=P?Symbol.for("react.fragment"):60107,Le=P?Symbol.for("react.strict_mode"):60108,Re=P?Symbol.for("react.profiler"):60114,ke=P?Symbol.for("react.provider"):60109,Ne=P?Symbol.for("react.context"):60110,wt=P?Symbol.for("react.async_mode"):60111,De=P?Symbol.for("react.concurrent_mode"):60111,Be=P?Symbol.for("react.forward_ref"):60112,Ve=P?Symbol.for("react.suspense"):60113,kc=P?Symbol.for("react.suspense_list"):60120,Ue=P?Symbol.for("react.memo"):60115,ze=P?Symbol.for("react.lazy"):60116,Nc=P?Symbol.for("react.block"):60121,Dc=P?Symbol.for("react.fundamental"):60117,Bc=P?Symbol.for("react.responder"):60118,Vc=P?Symbol.for("react.scope"):60119;function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jt:switch(e=e.type,e){case wt:case De:case Pe:case Re:case Le:case Ve:return e;default:switch(e=e&&e.$$typeof,e){case Ne:case Be:case ze:case Ue:case ke:return e;default:return t}}case Et:return t}}}function en(e){return V(e)===De}T.AsyncMode=wt;T.ConcurrentMode=De;T.ContextConsumer=Ne;T.ContextProvider=ke;T.Element=jt;T.ForwardRef=Be;T.Fragment=Pe;T.Lazy=ze;T.Memo=Ue;T.Portal=Et;T.Profiler=Re;T.StrictMode=Le;T.Suspense=Ve;T.isAsyncMode=function(e){return en(e)||V(e)===wt};T.isConcurrentMode=en;T.isContextConsumer=function(e){return V(e)===Ne};T.isContextProvider=function(e){return V(e)===ke};T.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jt};T.isForwardRef=function(e){return V(e)===Be};T.isFragment=function(e){return V(e)===Pe};T.isLazy=function(e){return V(e)===ze};T.isMemo=function(e){return V(e)===Ue};T.isPortal=function(e){return V(e)===Et};T.isProfiler=function(e){return V(e)===Re};T.isStrictMode=function(e){return V(e)===Le};T.isSuspense=function(e){return V(e)===Ve};T.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pe||e===De||e===Re||e===Le||e===Ve||e===kc||typeof e=="object"&&e!==null&&(e.$$typeof===ze||e.$$typeof===Ue||e.$$typeof===ke||e.$$typeof===Ne||e.$$typeof===Be||e.$$typeof===Dc||e.$$typeof===Bc||e.$$typeof===Vc||e.$$typeof===Nc)};T.typeOf=V;Qr.exports=T;var Uc=Qr.exports,tn=Uc,zc={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rn={};rn[tn.ForwardRef]=zc;rn[tn.Memo]=Hc;function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function he(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var He=l.createContext(void 0);He.displayName="FormikContext";var Gc=He.Provider;He.Consumer;function nn(){var e=l.useContext(He);return e||Bo(!1),e}var B=function(t){return typeof t=="function"},Ge=function(t){return t!==null&&typeof t=="object"},Wc=function(t){return String(Math.floor(Number(t)))===t},rt=function(t){return Object.prototype.toString.call(t)==="[object String]"},Kc=function(t){return l.Children.count(t)===0},nt=function(t){return Ge(t)&&B(t.then)};function D(e,t,r,n){n===void 0&&(n=0);for(var o=Jr(t);e&&n<o.length;)e=e[o[n++]];return n!==o.length&&!e||e===void 0?r:e}function ae(e,t,r){for(var n=hr(e),o=n,i=0,c=Jr(t);i<c.length-1;i++){var p=c[i],y=D(e,c.slice(0,i+1));if(y&&(Ge(y)||Array.isArray(y)))o=o[p]=hr(y);else{var m=c[i+1];o=o[p]=Wc(m)&&Number(m)>=0?[]:{}}}return(i===0?e:o)[c[i]]===r?e:(r===void 0?delete o[c[i]]:o[c[i]]=r,i===0&&r===void 0&&delete n[c[i]],n)}function on(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var o=0,i=Object.keys(e);o<i.length;o++){var c=i[o],p=e[c];Ge(p)?r.get(p)||(r.set(p,!0),n[c]=Array.isArray(p)?[]:{},on(p,t,r,n[c])):n[c]=t}return n}function Yc(e,t){switch(t.type){case"SET_VALUES":return C({},e,{values:t.payload});case"SET_TOUCHED":return C({},e,{touched:t.payload});case"SET_ERRORS":return ne(e.errors,t.payload)?e:C({},e,{errors:t.payload});case"SET_STATUS":return C({},e,{status:t.payload});case"SET_ISSUBMITTING":return C({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return C({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return C({},e,{values:ae(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return C({},e,{touched:ae(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return C({},e,{errors:ae(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return C({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return C({},e,{touched:on(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return C({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return C({},e,{isSubmitting:!1});default:return e}}var re={},Ae={};function qc(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,o=n===void 0?!0:n,i=e.validateOnMount,c=i===void 0?!1:i,p=e.isInitialValid,y=e.enableReinitialize,m=y===void 0?!1:y,F=e.onSubmit,A=he(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=C({validateOnChange:r,validateOnBlur:o,validateOnMount:c,onSubmit:F},A),E=l.useRef(f.initialValues),O=l.useRef(f.initialErrors||re),I=l.useRef(f.initialTouched||Ae),$=l.useRef(f.initialStatus),j=l.useRef(!1),R=l.useRef({});l.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var Q=l.useState(0),ee=Q[1],W=l.useRef({values:f.initialValues,errors:f.initialErrors||re,touched:f.initialTouched||Ae,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),S=W.current,g=l.useCallback(function(a){var u=W.current;W.current=Yc(u,a),u!==W.current&&ee(function(d){return d+1})},[]),k=l.useCallback(function(a,u){return new Promise(function(d,h){var v=f.validate(a,u);v==null?d(re):nt(v)?v.then(function(x){d(x||re)},function(x){h(x)}):d(v)})},[f.validate]),z=l.useCallback(function(a,u){var d=f.validationSchema,h=B(d)?d(u):d,v=u&&h.validateAt?h.validateAt(u,a):Jc(a,h);return new Promise(function(x,M){v.then(function(){x(re)},function(K){K.name==="ValidationError"?x(Zc(K)):M(K)})})},[f.validationSchema]),q=l.useCallback(function(a,u){return new Promise(function(d){return d(R.current[a].validate(u))})},[]),me=l.useCallback(function(a){var u=Object.keys(R.current).filter(function(h){return B(R.current[h].validate)}),d=u.length>0?u.map(function(h){return q(h,D(a,h))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(d).then(function(h){return h.reduce(function(v,x,M){return x==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||x&&(v=ae(v,u[M],x)),v},{})})},[q]),We=l.useCallback(function(a){return Promise.all([me(a),f.validationSchema?z(a):{},f.validate?k(a):{}]).then(function(u){var d=u[0],h=u[1],v=u[2],x=it.all([d,h,v],{arrayMerge:Qc});return x})},[f.validate,f.validationSchema,me,k,z]),N=U(function(a){return a===void 0&&(a=S.values),g({type:"SET_ISVALIDATING",payload:!0}),We(a).then(function(u){return j.current&&(g({type:"SET_ISVALIDATING",payload:!1}),g({type:"SET_ERRORS",payload:u})),u})});l.useEffect(function(){c&&j.current===!0&&ne(E.current,f.initialValues)&&N(E.current)},[c,N]);var te=l.useCallback(function(a){var u=a&&a.values?a.values:E.current,d=a&&a.errors?a.errors:O.current?O.current:f.initialErrors||{},h=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},v=a&&a.status?a.status:$.current?$.current:f.initialStatus;E.current=u,O.current=d,I.current=h,$.current=v;var x=function(){g({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:d,touched:h,status:v,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var M=f.onReset(S.values,Pt);nt(M)?M.then(x):x()}else x()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);l.useEffect(function(){j.current===!0&&!ne(E.current,f.initialValues)&&m&&(E.current=f.initialValues,te(),c&&N(E.current))},[m,f.initialValues,te,c,N]),l.useEffect(function(){m&&j.current===!0&&!ne(O.current,f.initialErrors)&&(O.current=f.initialErrors||re,g({type:"SET_ERRORS",payload:f.initialErrors||re}))},[m,f.initialErrors]),l.useEffect(function(){m&&j.current===!0&&!ne(I.current,f.initialTouched)&&(I.current=f.initialTouched||Ae,g({type:"SET_TOUCHED",payload:f.initialTouched||Ae}))},[m,f.initialTouched]),l.useEffect(function(){m&&j.current===!0&&!ne($.current,f.initialStatus)&&($.current=f.initialStatus,g({type:"SET_STATUS",payload:f.initialStatus}))},[m,f.initialStatus,f.initialTouched]);var X=U(function(a){if(R.current[a]&&B(R.current[a].validate)){var u=D(S.values,a),d=R.current[a].validate(u);return nt(d)?(g({type:"SET_ISVALIDATING",payload:!0}),d.then(function(h){return h}).then(function(h){g({type:"SET_FIELD_ERROR",payload:{field:a,value:h}}),g({type:"SET_ISVALIDATING",payload:!1})})):(g({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),Promise.resolve(d))}else if(f.validationSchema)return g({type:"SET_ISVALIDATING",payload:!0}),z(S.values,a).then(function(h){return h}).then(function(h){g({type:"SET_FIELD_ERROR",payload:{field:a,value:D(h,a)}}),g({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),sn=l.useCallback(function(a,u){var d=u.validate;R.current[a]={validate:d}},[]),cn=l.useCallback(function(a){delete R.current[a]},[]),At=U(function(a,u){g({type:"SET_TOUCHED",payload:a});var d=u===void 0?o:u;return d?N(S.values):Promise.resolve()}),$t=l.useCallback(function(a){g({type:"SET_ERRORS",payload:a})},[]),_t=U(function(a,u){var d=B(a)?a(S.values):a;g({type:"SET_VALUES",payload:d});var h=u===void 0?r:u;return h?N(d):Promise.resolve()}),we=l.useCallback(function(a,u){g({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),fe=U(function(a,u,d){g({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var h=d===void 0?r:d;return h?N(ae(S.values,a,u)):Promise.resolve()}),Ct=l.useCallback(function(a,u){var d=u,h=a,v;if(!rt(a)){a.persist&&a.persist();var x=a.target?a.target:a.currentTarget,M=x.type,K=x.name,Ze=x.id,Je=x.value,mn=x.checked,ul=x.outerHTML,Lt=x.options,vn=x.multiple;d=u||K||Ze,h=/number|range/.test(M)?(v=parseFloat(Je),isNaN(v)?"":v):/checkbox/.test(M)?tl(D(S.values,d),mn,Je):Lt&&vn?el(Lt):Je}d&&fe(d,h)},[fe,S.values]),Ke=U(function(a){if(rt(a))return function(u){return Ct(u,a)};Ct(a)}),de=U(function(a,u,d){u===void 0&&(u=!0),g({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var h=d===void 0?o:d;return h?N(S.values):Promise.resolve()}),Ft=l.useCallback(function(a,u){a.persist&&a.persist();var d=a.target,h=d.name,v=d.id,x=d.outerHTML,M=u||h||v;de(M,!0)},[de]),Ye=U(function(a){if(rt(a))return function(u){return Ft(u,a)};Ft(a)}),It=l.useCallback(function(a){B(a)?g({type:"SET_FORMIK_STATE",payload:a}):g({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),Ot=l.useCallback(function(a){g({type:"SET_STATUS",payload:a})},[]),Mt=l.useCallback(function(a){g({type:"SET_ISSUBMITTING",payload:a})},[]),qe=U(function(){return g({type:"SUBMIT_ATTEMPT"}),N().then(function(a){var u=a instanceof Error,d=!u&&Object.keys(a).length===0;if(d){var h;try{if(h=un(),h===void 0)return}catch(v){throw v}return Promise.resolve(h).then(function(v){return j.current&&g({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(j.current)throw g({type:"SUBMIT_FAILURE"}),v})}else if(j.current&&(g({type:"SUBMIT_FAILURE"}),u))throw a})}),ln=U(function(a){a&&a.preventDefault&&B(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&B(a.stopPropagation)&&a.stopPropagation(),qe().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),Pt={resetForm:te,validateForm:N,validateField:X,setErrors:$t,setFieldError:we,setFieldTouched:de,setFieldValue:fe,setStatus:Ot,setSubmitting:Mt,setTouched:At,setValues:_t,setFormikState:It,submitForm:qe},un=U(function(){return F(S.values,Pt)}),fn=U(function(a){a&&a.preventDefault&&B(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&B(a.stopPropagation)&&a.stopPropagation(),te()}),dn=l.useCallback(function(a){return{value:D(S.values,a),error:D(S.errors,a),touched:!!D(S.touched,a),initialValue:D(E.current,a),initialTouched:!!D(I.current,a),initialError:D(O.current,a)}},[S.errors,S.touched,S.values]),pn=l.useCallback(function(a){return{setValue:function(d,h){return fe(a,d,h)},setTouched:function(d,h){return de(a,d,h)},setError:function(d){return we(a,d)}}},[fe,de,we]),hn=l.useCallback(function(a){var u=Ge(a),d=u?a.name:a,h=D(S.values,d),v={name:d,value:h,onChange:Ke,onBlur:Ye};if(u){var x=a.type,M=a.value,K=a.as,Ze=a.multiple;x==="checkbox"?M===void 0?v.checked=!!h:(v.checked=!!(Array.isArray(h)&&~h.indexOf(M)),v.value=M):x==="radio"?(v.checked=h===M,v.value=M):K==="select"&&Ze&&(v.value=v.value||[],v.multiple=!0)}return v},[Ye,Ke,S.values]),Xe=l.useMemo(function(){return!ne(E.current,S.values)},[E.current,S.values]),gn=l.useMemo(function(){return typeof p<"u"?Xe?S.errors&&Object.keys(S.errors).length===0:p!==!1&&B(p)?p(f):p:S.errors&&Object.keys(S.errors).length===0},[p,Xe,S.errors,f]),yn=C({},S,{initialValues:E.current,initialErrors:O.current,initialTouched:I.current,initialStatus:$.current,handleBlur:Ye,handleChange:Ke,handleReset:fn,handleSubmit:ln,resetForm:te,setErrors:$t,setFormikState:It,setFieldTouched:de,setFieldValue:fe,setFieldError:we,setStatus:Ot,setSubmitting:Mt,setTouched:At,setValues:_t,submitForm:qe,validateForm:N,validateField:X,isValid:gn,dirty:Xe,unregisterField:cn,registerField:sn,getFieldProps:hn,getFieldMeta:dn,getFieldHelpers:pn,validateOnBlur:o,validateOnChange:r,validateOnMount:c});return yn}function Xc(e){var t=qc(e),r=e.component,n=e.children,o=e.render,i=e.innerRef;return l.useImperativeHandle(i,function(){return t}),l.createElement(Gc,{value:t},r?l.createElement(r,t):o?o(t):n?B(n)?n(t):Kc(n)?null:l.Children.only(n):null)}function Zc(e){var t={};if(e.inner){if(e.inner.length===0)return ae(t,e.path,e.message);for(var o=e.inner,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var i;if(r){if(n>=o.length)break;i=o[n++]}else{if(n=o.next(),n.done)break;i=n.value}var c=i;D(t,c.path)||(t=ae(t,c.path,c.message))}}return t}function Jc(e,t,r,n){r===void 0&&(r=!1);var o=dt(e);return t[r?"validateSync":"validate"](o,{abortEarly:!1,context:n||o})}function dt(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(o){return Array.isArray(o)===!0||Ht(o)?dt(o):o!==""?o:void 0}):Ht(e[n])?t[n]=dt(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Qc(e,t,r){var n=e.slice();return t.forEach(function(i,c){if(typeof n[c]>"u"){var p=r.clone!==!1,y=p&&r.isMergeableObject(i);n[c]=y?it(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[c]=it(e[c],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function el(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function tl(e,t,r){if(typeof e=="boolean")return!!t;var n=[],o=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),o=i>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!o?n.concat(r):o?n.slice(0,i).concat(n.slice(i+1)):n}var rl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function U(e){var t=l.useRef(e);return rl(function(){t.current=e}),l.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current.apply(void 0,n)},[])}function $e(e){var t=e.validate,r=e.name,n=e.render,o=e.children,i=e.as,c=e.component,p=e.className,y=he(e,["validate","name","render","children","as","component","className"]),m=nn(),F=he(m,["validate","validationSchema"]),A=F.registerField,f=F.unregisterField;l.useEffect(function(){return A(r,{validate:t}),function(){f(r)}},[A,f,r,t]);var E=F.getFieldProps(C({name:r},y)),O=F.getFieldMeta(r),I={field:E,form:F};if(n)return n(C({},I,{meta:O}));if(B(o))return o(C({},I,{meta:O}));if(c){if(typeof c=="string"){var $=y.innerRef,j=he(y,["innerRef"]);return l.createElement(c,C({ref:$},E,j,{className:p}),o)}return l.createElement(c,C({field:E,form:F},y,{className:p}),o)}var R=i||"input";if(typeof R=="string"){var Q=y.innerRef,ee=he(y,["innerRef"]);return l.createElement(R,C({ref:Q},E,ee,{className:p}),o)}return l.createElement(R,C({},E,y,{className:p}),o)}var an=l.forwardRef(function(e,t){var r=e.action,n=he(e,["action"]),o=r??"#",i=nn(),c=i.handleReset,p=i.handleSubmit;return l.createElement("form",C({onSubmit:p,ref:t,onReset:c,action:o},n))});an.displayName="Form";const nl="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let mr=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=nl[r[e]&63];return t};const ol=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...e},l.createElement("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m5 7.5 5 5 5-5"})),al=b(an)`
    display: flex;
    gap: 18px;
    align-items: end;
`,ot=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,vr=b.div`
    position: relative;
`,at=b.label`
    font-weight: 500;
    font-size: 14px; 
    line-height: 18px; 
`,br=b.select`
    cursor: pointer;
    appearance: none;
    border: 0;
    margin: 0;
    padding: 14px 73px 14px 18px;
    background-color: #F7F7FB;
    color: var(--second-color);
    border-radius: 14px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;

    .option {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: rgba(18, 20, 23, 0.2);
  }
`,Sr=b(ol)`
  position: absolute;
  top: 50%;
  right: 18px; 
  transform: translateY(-50%);
  pointer-events: none;
`,il=b.div`
    display: flex;
`,xr=b.div`
    position: relative;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input {
    border: 0;
    background-color: #f7f7fb;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px; 
    color: var(--second-color);
    padding: 14px 24px;
    width: 160px;
  }

  &:first-child .input:first-of-type {
        padding-left: 70px;
        border-right: 1px solid rgba(138, 138, 137, 0.2);
        border-radius: 14px 0 0 14px;
    }

  &:last-child .input:first-of-type {
        padding-left: 49px;
        border-radius: 0 14px 14px 0;
    }

  .span{
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 24px;
  }
`,sl=b.button`
    border: 0;
    border-radius: 12px;
    background-color: #3470ff;
    height: 48px;
    width: 136px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: var(--background-color);
`,cl=({setSearchParams:e})=>{const t=Fe(),r=H($n);l.useEffect(()=>{r.length===0&&t(jn())},[t,r]);const n=o=>{e(o)};return s.jsx(Xc,{initialValues:{make:"",rentalPrice:"",min:"",max:""},onSubmit:n,children:()=>s.jsxs(al,{children:[s.jsxs(ot,{children:[s.jsx(at,{htmlFor:"selectBrands",children:"Car brand"}),s.jsxs(vr,{children:[s.jsxs($e,{as:br,id:"selectBrands",name:"make",children:[s.jsx("option",{className:"option",value:"",children:"Enter the text"},mr()),r.map((o,i)=>s.jsx("option",{className:"option",value:o,children:o},i))]}),s.jsx(Sr,{})]})]}),s.jsxs(ot,{children:[s.jsx(at,{htmlFor:"selectPrice",children:"Price/ 1 hour"}),s.jsxs(vr,{children:[s.jsxs($e,{as:br,id:"selectPrice",name:"rentalPrice",children:[s.jsx("option",{className:"option",value:"",children:"To   $"},mr()),[30,40,50,60,70,80,90,100].map(o=>s.jsx("option",{className:"option",value:o,children:o},o))]}),s.jsx(Sr,{})]})]}),s.jsxs(ot,{children:[s.jsx(at,{htmlFor:"mileageFrom",children:"Сar mileage / km"}),s.jsxs(il,{children:[s.jsxs(xr,{children:[s.jsx($e,{className:"input",type:"number",id:"mileageFrom",name:"min",min:"1",max:"99999"}),s.jsx("span",{className:"span",children:"From"})]}),s.jsxs(xr,{children:[s.jsx($e,{className:"input",type:"number",name:"max",min:"1",max:"99999"}),s.jsx("span",{className:"span",children:"To"})]})]})]}),s.jsx(sl,{type:"submit",children:"Search"})]})})},ll=b.main`
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Tr=b.button`
    border: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #3470ff;
    background-color: transparent;
    transition: color var(--transition);

    &:hover,
    &:focus {
    color: #0b44cd;
  }
`,dl=()=>{const e=Fe(),t=H(On),r=H(An),n=H(In),o=H(Cn),i=H(Fn),c=H(_n),[p,y]=l.useState(null);l.useEffect(()=>{r.length===0&&e(Rt(c))},[e,r.length,c]),l.useEffect(()=>{if(kt(),p!==null){const{make:I,rentalPrice:$}=p;e(kt()),e(En()),e(Nt({make:I,rentalPrice:$,page:1}))}},[e,p]);const m=()=>{e(Dt()),e(Rt(c+1))},F=()=>{const{make:I,rentalPrice:$}=p;e(Dt()),e(Nt({make:I,rentalPrice:$,page:c+1}))},A=n.length,f=!o&&(r.length>0&&A===0||A>0),E=!i&&!o&&r.length>11&&A===0,O=!i&&!o&&A>11;return s.jsxs(ll,{children:[o&&s.jsx(wn,{}),s.jsx(cl,{setSearchParams:y}),i===404?s.jsx(Pn,{}):f&&s.jsx(Yn,{autos:A>0?n:r}),E&&s.jsx(Tr,{onClick:m,children:"Load more..."}),O&&s.jsx(Tr,{onClick:F,children:"Load more..."}),t&&s.jsx(so,{})]})};export{dl as default};
