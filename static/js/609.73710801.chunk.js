"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{4609:(e,a,s)=>{s.r(a),s.d(a,{default:()=>E});var r=s(605),n=s(9603),i=s(4720),t=s(1758),l=s(2791),d=s(8691);const o={name:"",email:"",message:""};function m(e){let a={};return e.name||(a.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email address is required",e.message||(a.message="Message is required"),a}var c=s(5224),h=s(1191);const p=(0,h.ZP)("p")`
  margin-top: 1.5rem;
`,x=(0,h.ZP)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.ZP)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=s(184);const j=(0,i.Z)()((e=>{let{title:a,content:s,t:r}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:r(a)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:r(s)})})]})})),y=(0,h.ZP)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.ZP)("input")`
  font-size: 0.875rem;
`,b=(0,h.ZP)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,Z=(0,h.ZP)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,f=(0,h.ZP)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,i.Z)()((e=>{let{name:a,placeholder:s,onChange:r,t:n}=e;return(0,g.jsxs)(y,{children:[(0,g.jsx)(f,{htmlFor:a,children:n(a)}),(0,g.jsx)(v,{placeholder:n(s),name:a,id:a,onChange:r})]})})),P=(0,i.Z)()((e=>{let{name:a,placeholder:s,onChange:r,t:n}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(f,{htmlFor:a,children:n(a)}),(0,g.jsx)(Z,{placeholder:n(s),id:a,name:a,onChange:r})]})})),C=(0,h.ZP)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,h.ZP)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,S=(0,h.ZP)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,z=(0,h.ZP)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,E=(0,i.Z)()((e=>{let{title:a,content:s,id:i,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:y}=(e=>{const[a,s]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:a,value:r}=e.target;s((e=>({...e,values:{...e.values,[a]:r},errors:{...e.errors,[a]:""}})))},handleSubmit:async r=>{r.preventDefault();const n={...a.values,access_key:"4d2508ac-91a8-4aa1-8419-b622addad733"},i=e(n);s((e=>({...e,errors:i})));try{Object.values(i).every((e=>""===e))&&((await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?(s((()=>({values:{...o},errors:{...o}}))),d.Z.success({message:"Success",description:"Your message has been sent successfully!"})):d.Z.error({message:"Error",description:"There was an error sending your message, please try again later."}))}catch(t){d.Z.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:a.values,errors:a.errors}})(m),v=e=>{let{type:a}=e;const s=x[a];return(0,g.jsx)(S,{children:s})};return(0,g.jsx)(C,{id:i,children:(0,g.jsxs)(r.Z,{justify:"space-between",align:"middle",children:[(0,g.jsx)(n.Z,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(t.Mi,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(j,{title:a,content:s})})}),(0,g.jsx)(n.Z,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(t.Mi,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(k,{autoComplete:"off",onSubmit:y,children:[(0,g.jsx)("input",{type:"hidden",name:"access_key",value:"4d2508ac-91a8-4aa1-8419-b622addad733"}),(0,g.jsxs)(n.Z,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(v,{type:"name"})]}),(0,g.jsxs)(n.Z,{span:24,children:[(0,g.jsx)(w,{type:"email",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(v,{type:"email"})]}),(0,g.jsxs)(n.Z,{span:24,children:[(0,g.jsx)(P,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(v,{type:"message"})]}),(0,g.jsx)(z,{children:(0,g.jsx)(c.z,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.73710801.chunk.js.map