import{j as t,bE as e,D as r}from"./index-DpaulSit.js";const a=s=>{console.log("Page: ",s)},i=()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:a}),t.jsx("br",{}),t.jsx(e,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:a,disabled:!0})]}),o=s=>`Total ${s} items`,l=()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{size:"small",total:50}),t.jsx(e,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),t.jsx(e,{size:"small",total:50,showTotal:o}),t.jsx(e,{size:"small",total:50,disabled:!0,showTotal:o,showSizeChanger:!0,showQuickJumper:!0})]});function u(){return t.jsx(r,{ColProps:{md:16,xl:12},title:"Pagination",items:{Jump:i,Mini:l}})}export{u as default};
