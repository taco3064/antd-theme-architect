import{r as s,I as L,_ as O,F as R,s as q,n as V,c as N,k as z,ag as H,f as X,m as A,L as $,K,az as F,$ as _,C as B,Q,X as G,W as J,am as U}from"./index-DpaulSit.js";var Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"},Z=function(n,c){return s.createElement(L,O({},n,{ref:c,icon:Y}))},ue=s.forwardRef(Z),ee=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],D=s.forwardRef(function(e,n){var c,i=e.prefixCls,l=i===void 0?"rc-switch":i,r=e.className,o=e.checked,t=e.defaultChecked,a=e.disabled,d=e.loadingIcon,h=e.checkedChildren,g=e.unCheckedChildren,I=e.onClick,C=e.onChange,b=e.onKeyDown,y=R(e,ee),M=q(!1,{value:o,defaultValue:t}),k=V(M,2),p=k[0],S=k[1];function w(u,v){var f=p;return a||(f=u,S(f),C==null||C(f,v)),f}function x(u){u.which===H.LEFT?w(!1,u):u.which===H.RIGHT&&w(!0,u),b==null||b(u)}function m(u){var v=w(!p,u);I==null||I(v,u)}var E=N(l,r,(c={},z(c,"".concat(l,"-checked"),p),z(c,"".concat(l,"-disabled"),a),c));return s.createElement("button",O({},y,{type:"button",role:"switch","aria-checked":p,disabled:a,className:E,ref:n,onKeyDown:x,onClick:m}),d,s.createElement("span",{className:"".concat(l,"-inner")},s.createElement("span",{className:"".concat(l,"-inner-checked")},h),s.createElement("span",{className:"".concat(l,"-inner-unchecked")},g)))});D.displayName="Switch";const ne=e=>{const{componentCls:n,trackHeightSM:c,trackPadding:i,trackMinWidthSM:l,innerMinMarginSM:r,innerMaxMarginSM:o,handleSizeSM:t,calc:a}=e,d=`${n}-inner`,h=$(a(t).add(a(i).mul(2)).equal()),g=$(a(o).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:l,height:c,lineHeight:$(c),[`${n}-inner`]:{paddingInlineStart:o,paddingInlineEnd:r,[`${d}-checked, ${d}-unchecked`]:{minHeight:c},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${h} - ${g})`,marginInlineEnd:`calc(100% - ${h} + ${g})`},[`${d}-unchecked`]:{marginTop:a(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:t,height:t},[`${n}-loading-icon`]:{top:a(a(t).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:r,paddingInlineEnd:o,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${h} + ${g})`,marginInlineEnd:`calc(-100% + ${h} - ${g})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${$(a(t).add(i).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:a(e.marginXXS).div(2).equal(),marginInlineEnd:a(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:a(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:a(e.marginXXS).div(2).equal()}}}}}}},ae=e=>{const{componentCls:n,handleSize:c,calc:i}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:i(i(c).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},ie=e=>{const{componentCls:n,trackPadding:c,handleBg:i,handleShadow:l,handleSize:r,calc:o}=e,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:c,insetInlineStart:c,width:r,height:r,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:o(r).div(2).equal(),boxShadow:l,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${$(o(r).add(c).equal())})`},[`&:not(${n}-disabled):active`]:{[`${t}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},te=e=>{const{componentCls:n,trackHeight:c,trackPadding:i,innerMinMargin:l,innerMaxMargin:r,handleSize:o,calc:t}=e,a=`${n}-inner`,d=$(t(o).add(t(i).mul(2)).equal()),h=$(t(r).mul(2).equal());return{[n]:{[a]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:r,paddingInlineEnd:l,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${a}-checked, ${a}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:c},[`${a}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${h})`,marginInlineEnd:`calc(100% - ${d} + ${h})`},[`${a}-unchecked`]:{marginTop:t(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${a}`]:{paddingInlineStart:l,paddingInlineEnd:r,[`${a}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${a}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${h})`,marginInlineEnd:`calc(-100% + ${d} - ${h})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${a}`]:{[`${a}-unchecked`]:{marginInlineStart:t(i).mul(2).equal(),marginInlineEnd:t(i).mul(-1).mul(2).equal()}},[`&${n}-checked ${a}`]:{[`${a}-checked`]:{marginInlineStart:t(i).mul(-1).mul(2).equal(),marginInlineEnd:t(i).mul(2).equal()}}}}}},ce=e=>{const{componentCls:n,trackHeight:c,trackMinWidth:i}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},K(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i,height:c,lineHeight:$(c),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),F(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},le=e=>{const{fontSize:n,lineHeight:c,controlHeight:i,colorWhite:l}=e,r=n*c,o=i/2,t=2,a=r-t*2,d=o-t*2;return{trackHeight:r,trackHeightSM:o,trackMinWidth:a*2+t*4,trackMinWidthSM:d*2+t*2,trackPadding:t,handleBg:l,handleSize:a,handleSizeSM:d,handleShadow:`0 2px 4px 0 ${new _("#00230b").setA(.2).toRgbString()}`,innerMinMargin:a/2,innerMaxMargin:a+t+t*2,innerMinMarginSM:d/2,innerMaxMarginSM:d+t+t*2}},de=X("Switch",e=>{const n=A(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ce(n),te(n),ie(n),ae(n),ne(n)]},le);var re=function(e,n){var c={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(c[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)n.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(c[i[l]]=e[i[l]]);return c};const oe=s.forwardRef((e,n)=>{const{prefixCls:c,size:i,disabled:l,loading:r,className:o,rootClassName:t,style:a,checked:d,value:h,defaultChecked:g,defaultValue:I,onChange:C}=e,b=re(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[y,M]=q(!1,{value:d??h,defaultValue:g??I}),{getPrefixCls:k,direction:p,switch:S}=s.useContext(B),w=s.useContext(Q),x=(l??w)||r,m=k("switch",c),E=s.createElement("div",{className:`${m}-handle`},r&&s.createElement(U,{className:`${m}-loading-icon`})),[u,v,f]=de(m),P=G(i),T=N(S==null?void 0:S.className,{[`${m}-small`]:P==="small",[`${m}-loading`]:r,[`${m}-rtl`]:p==="rtl"},o,t,v,f),j=Object.assign(Object.assign({},S==null?void 0:S.style),a),W=function(){M(arguments.length<=0?void 0:arguments[0]),C==null||C.apply(void 0,arguments)};return u(s.createElement(J,{component:"Switch"},s.createElement(D,Object.assign({},b,{checked:y,onChange:W,prefixCls:m,className:T,style:j,disabled:x,ref:n,loadingIcon:E}))))}),se=oe;se.__ANT_SWITCH=!0;export{ue as R,se as S};
