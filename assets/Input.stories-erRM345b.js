import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BB-KQ4PV.js";import"./preload-helper-PPVm8Dsz.js";const j="_root_15uod_1",v="_label_15uod_5",T="_wrap_15uod_9",S="_field_15uod_12",N="_iconBtn_15uod_22",B="_iconBtn2_15uod_23",C="_error_15uod_42",a={root:j,label:v,wrap:T,field:S,iconBtn:N,iconBtn2:B,error:C},l=n.forwardRef(({label:r,type:s="text",clearable:t,value:o,onChange:u,errorText:m,id:x,...w},f)=>{const b=n.useId(),[i,g]=n.useState(!1),_=s==="password",h=_&&i?"text":s;return e.jsxs("div",{className:a.root,children:[r&&e.jsx("label",{htmlFor:x??b,className:a.label,children:r}),e.jsxs("div",{className:a.wrap,children:[e.jsx("input",{ref:f,id:x??b,className:a.field,type:h,value:o,onChange:u,...w}),_&&e.jsx("button",{type:"button",className:a.iconBtn,onClick:()=>g(y=>!y),"aria-label":i?"Hide password":"Show password",children:i?"🙈":"👁️"}),t&&typeof o=="string"&&o.length>0&&e.jsx("button",{type:"button",className:a.iconBtn2,onClick:()=>u?.({target:{value:""}}),"aria-label":"Clear",children:"✖"})]}),m&&e.jsx("div",{className:a.error,children:m})]})});l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password" | "number"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'},{name:"literal",value:'"number"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Input",component:l,parameters:{layout:"centered"}},I=()=>{const[r,s]=n.useState("");return e.jsx(l,{label:"Name",placeholder:"Type...",value:r,onChange:t=>s(t.target.value)})},P=r=>{const[s,t]=n.useState("Hello");return e.jsx(l,{...r,clearable:!0,value:s,onChange:o=>t(o.target.value)})},c={render:()=>e.jsx(I,{})},d={args:{label:"Password",type:"password",placeholder:"••••••••"},render:r=>e.jsx(l,{...r})},p={args:{label:"Search",type:"text",placeholder:"Type…"},render:r=>e.jsx(P,{...r})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <TextDemo />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••"
  },
  render: args => <Input {...args} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    type: "text",
    placeholder: "Type…"
  },
  render: args => <ClearableDemo {...args} />
}`,...p.parameters?.docs?.source}}};const k=["Text","Password","Clearable"];export{p as Clearable,d as Password,c as Text,k as __namedExportsOrder,V as default};
