import{r as s,u as o,j as e,a as $,b as I,o as Z,k as G,l as K,m as F}from"./index-4587a325.js";const Le=t=>t.autosStore.autos,R=t=>t.autosStore.favorites,Ce=t=>t.autosStore.autosBrands,Pe=t=>t.autosStore.page,Ae=t=>t.autosStore.isLoading,ze=t=>t.autosStore.error,Ee=t=>t.autosStore.searchResult,Me=t=>t.modal.isOpenModal,X=t=>t.modal.modalData,T=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:200,height:200,style:{width:"100%",height:"100%",backgroundSize:"initial",backgroundRepeat:"initial",backgroundPositionY:"initial",backgroundPositionX:"initial",backgroundOrigin:"initial",backgroundColor:"initial",backgroundClip:"initial",backgroundAttachment:"initial",animationPlayState:"paused"},viewBox:"0 0 100 100",...t},s.createElement("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"rotate(0deg) scale(.8,.8)",animationPlayState:"paused"}},s.createElement("path",{fill:"#333",d:"M75 62.5h5.4c1.8 0 3.2 1.5 3.2 3.2v18.5c0 1.8-1.5 3.2-3.2 3.2H75c-1.8 0-3.2-1.5-3.2-3.2V65.8c0-1.8 1.4-3.3 3.2-3.3zM24.6 62.5h-5.4c-1.8 0-3.2 1.5-3.2 3.2v18.5c0 1.8 1.5 3.2 3.2 3.2h5.4c1.8 0 3.2-1.5 3.2-3.2V65.8c.1-1.8-1.4-3.3-3.2-3.3z",style:{fill:"#133341",animationPlayState:"paused"}}),s.createElement("path",{fill:"#333",d:"M86.8 75H13.2c-1.8 0-3.2-1.4-3.2-3.2V47.3c0-4.3 3.5-7.8 7.8-7.8h64.5c4.3 0 7.8 3.5 7.8 7.8v24.4c-.1 1.8-1.5 3.3-3.3 3.3zM72.8 12.6H27.2c-5.4 0-9.7 4.4-9.7 9.7v17.2h65V22.4c0-5.4-4.4-9.8-9.7-9.8z",style:{fill:"#133341",animationPlayState:"paused"}}),s.createElement("path",{fill:"#fff",d:"M69.2 17.4H30.8c-4.5 0-8.1 3.6-8.1 8.1v14.1h54.6V25.5c0-4.5-3.6-8.1-8.1-8.1z",style:{fill:"#008fd4",animationPlayState:"paused"}}),s.createElement("circle",{cx:19.3,cy:48.7,r:5.6,fill:"#fff",style:{fill:"#008fd4",animationPlayState:"paused"}}),s.createElement("circle",{cx:80.1,cy:48.7,r:5.6,fill:"#fff",style:{fill:"#008fd4",animationPlayState:"paused"}}),s.createElement("path",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:2.51,d:"M29.6 52.6h40.8M29.6 59.7h40.8M29.6 66.7h40.8",style:{stroke:"#008fd4",animationPlayState:"paused"}}))),_=o.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,q=o.p`
    font-weight: 500;
    font-size: 25px;
    line-height: 1.5;
    color: var(--second-color);
`,J=o(T)`
    font-weight: 500;
    font-size: 25px;
    line-height: 1.5;
    color: var(--second-color);
    max-width: 250px;
`,Fe=()=>e.jsxs(_,{children:[e.jsx(q,{children:"There are no autos"}),e.jsx(J,{})]}),Q=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})),ee=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("path",{fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})),te=o.button`
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
`,W=({text:t,onClick:a})=>e.jsx(te,{type:"button",onClick:a,children:t}),oe=o.li`
    width: calc((100% - (3 * 29px)) / 4);
    min-width: 273px;
`,ne=o.div`
    position: relative;
    overflow: hidden;
    border-radius: 14px;
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
`,D=o.div`
    position: absolute;
    top: 16px;
    right: 15px; 
    z-index: 1;
`,ie=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`,se=o.h2`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
`,re=o.span`
    color: #3470ff;
`,ae=o.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
`,m=o.ul`
    display: flex;
    gap: 6px;
    margin-bottom: 4px;
`,i=o.li`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);

    &:last-child {
        border-right: none;
        padding-right: 0;
    }
`,le=o(m)`
  margin-bottom: 28px;
`,ce=o.button`
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
`,de=({auto:t})=>{const{img:a,make:l,model:c,year:h,rentalPrice:d,address:x,rentalCompany:f,type:g,id:p,functionalities:b,fuelConsumption:k,engineSize:L,description:C,accessories:P,rentalConditions:A,mileage:z}=t,y=$(),E=I(R).some(v=>v.id===p),M=x?x.split(", "):"",w=M[1],S=M[2],n=f.includes("Premium")?"Premium":"",r=g.charAt(0).toUpperCase()+g.slice(1).toLowerCase(),u=20,j=b[0],V=j.length>u?j.substring(0,u)+"...":j,H=v=>{y(G(v))},Y=v=>{y(K(v))};return e.jsxs(oe,{children:[e.jsxs(ne,{children:[a?e.jsx("img",{src:a,alt:`${l} ${c}`,className:"autoImg"}):e.jsx(T,{}),E?e.jsx(D,{children:e.jsx(W,{text:e.jsx(ee,{}),onClick:()=>{Y(p)}})}):e.jsx(D,{children:e.jsx(W,{text:e.jsx(Q,{}),onClick:()=>{H(t)}})})]}),e.jsxs(ie,{children:[e.jsxs(se,{children:[l," ",e.jsx(re,{children:c}),","," ",h]}),e.jsx(ae,{children:d})]}),e.jsxs(m,{children:[e.jsx(i,{children:w}),e.jsx(i,{children:S}),e.jsx(i,{children:f}),n&&e.jsx(i,{children:n})]}),e.jsxs(le,{children:[e.jsx(i,{children:r}),e.jsx(i,{children:c}),e.jsx(i,{children:p}),e.jsx(i,{children:V})]}),e.jsx(ce,{onClick:()=>y(Z({img:a,make:l,model:c,city:w,country:S,id:p,year:h,formattedType:r,fuelConsumption:k,engineSize:L,description:C,accessories:P,functionalities:b,rentalConditions:A,mileage:z,rentalPrice:d})),children:"Learn more"})]})},pe=o.ul`
  padding: 50px 0 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
`,Ie=({autos:t=[],searchResult:a=[]})=>{const l=I(R),c=a.length>0?a:t;let h=c;if(l.length>0){const d=l.map(x=>x.id);h=[...c].sort((x,f)=>{const g=d.includes(x.id),p=d.includes(f.id);return g&&!p?-1:!g&&p?1:0})}return e.jsx(pe,{className:"autosList",children:h.map(d=>e.jsx(de,{auto:d},d.id))})},he=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...t},s.createElement("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})),xe=o.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(18, 20, 23, 0.5);
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
    overflow-y: scroll;
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
`,ge=o.div`
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
`,fe=o.div`
    margin-bottom: 8px;
`,ue=o.h2`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px; 
    color: var(--second-color);
`,me=o.span`
    color: #3470ff;
`,ye=o.p`
  margin: 10px 0 24px;
  font-weight: 400;
  font-size: 14px; 
  line-height: 20px;
  color: var(--second-color);
`,U=o.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--second-color);
  margin-bottom: 8px;
`,je=o(U)`
  margin-top: 24px;
`,ve=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--second-family);
  margin-bottom: 24px;
`,O=o.li`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #363535;
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
`,be=o.span`
  font-weight: 400;
`,we=o.span`
  font-weight: 600;
  color: #3470ff;
`,Se=o.a`
  border-radius: 12px;
  padding: 12px 50px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--background-color);
`,Te=()=>{const t=$(),a=I(X),{img:l,make:c,model:h,city:d,country:x,id:f,year:g,formattedType:p,fuelConsumption:b,engineSize:k,description:L,accessories:C,functionalities:P,rentalConditions:A,mileage:z,rentalPrice:y}=a,N=A.split(`
`),E=Number(z).toLocaleString("en-US",{useGrouping:!0}),w=[...N,`Mileage: ${E}`,`Rental Price: ${y}`].map((n,r)=>{const u=n.indexOf(":");if(u!==-1){const j=n.substring(0,u+1),B=n.substring(u+1);return e.jsxs(O,{children:[e.jsx(be,{children:j}),e.jsx(we,{children:B})]},r)}else return e.jsx(O,{children:n},r)});s.useEffect(()=>{const n=r=>{r.code==="Escape"&&t(F())};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[t]);const S=n=>{n.target===n.currentTarget&&t(F())};return e.jsx(xe,{onClick:S,children:e.jsxs("div",{className:"popUp",children:[e.jsx("button",{className:"closeBtn",onClick:()=>t(F()),children:e.jsx(he,{})}),e.jsxs(ge,{children:[l&&l.length>0?e.jsx("img",{className:"autoPopImg",src:l,alt:`${c} ${h}`}):e.jsx(T,{}),"        "]}),e.jsx(fe,{children:e.jsxs(ue,{children:[c," ",e.jsx(me,{children:h}),","," ",g]})}),e.jsxs(m,{children:[e.jsx(i,{children:d}),e.jsx(i,{children:x}),e.jsxs(i,{children:["Id: ",f]}),e.jsxs(i,{children:["Year: ",g]}),e.jsxs(i,{children:["Type: ",p]})]}),e.jsxs(m,{children:[e.jsxs(i,{children:["Fuel Consumption: ",b]}),e.jsxs(i,{children:["Engine Size: ",k]})]}),e.jsx(ye,{children:L}),e.jsx(U,{children:"Accessories and functionalities:"}),e.jsx(m,{children:C.map((n,r)=>e.jsx(i,{children:n},r))}),e.jsx(m,{children:P.map((n,r)=>e.jsx(i,{children:n},r))}),e.jsx(je,{children:"Rental Conditions:"}),e.jsx(ve,{children:w}),e.jsx(Se,{href:"tel:+380730000000",type:"button",target:"_blank",rel:"noreferrer noopener",children:"Rental car"})]})})};export{Ie as A,Fe as N,Te as P,Me as a,Le as b,Ee as c,Ae as d,ze as e,Pe as f,R as g,Ce as s};
