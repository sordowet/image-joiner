(this["webpackJsonpphoto-editor"]=this["webpackJsonpphoto-editor"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),o=n(6),l=n.n(o),r=(n(12),n(3)),s=n(2),a=(n(13),n(7)),j=n(5),u=n(0),h=["zoomIn","zoomOut","resetTransform"];function d(e){var t=e.image,n=e.height,c=e.width,o=(e.move,Object(i.useState)(0)),l=Object(s.a)(o,2),r=l[0],d=l[1];function b(e){e.preventDefault(),console.log(e.target.value),d(Number(e.target.value))}return Object(i.useEffect)((function(){console.log("--REREnDER--")}),[r]),Object(u.jsx)("div",{style:{width:c,height:"fit-content",border:t?"none":"solid 1px",display:"flex",flexDirection:"column",marginBottom:20,marginTop:20,overflow:"hidden"},children:Object(u.jsx)(j.b,{children:function(e){var i=e.zoomIn,o=e.zoomOut,l=e.resetTransform;Object(a.a)(e,h);return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(u.jsx)(j.a,{children:Object(u.jsx)("img",{src:t,style:{height:n,width:c,objectFit:"scale-down",marginLeft:r}})}),Object(u.jsxs)("div",{className:"tools",children:[Object(u.jsx)("button",{onClick:function(){return i()},children:"+"}),Object(u.jsx)("button",{onClick:function(){return o()},children:"-"}),Object(u.jsx)("button",{onClick:function(){return l()},children:"x"})]}),Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(u.jsx)("input",{type:"range",min:"-100",max:"100",value:r,class:"slider",id:"myRange",onChange:b}),Object(u.jsx)("button",{onClick:function(){return d(0)},children:"x"})]})]})}})})}var b=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(""),l=Object(s.a)(o,2),a=l[0],j=l[1],h=Object(i.useState)({height:480,width:270}),b=Object(s.a)(h,2),g=b[0],O=b[1],x=Object(i.useState)(20),m=Object(s.a)(x,2),p=m[0];return m[1],Object(u.jsxs)("div",{style:f.page,children:[Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(u.jsx)("input",{placeholder:"height",value:g.height,onChange:function(e){var t=Number(e.target.value);isNaN(t)||O(Object(r.a)(Object(r.a)({},g),{},{height:t}))}}),Object(u.jsx)("input",{placeholder:"width",value:g.width,onChange:function(e){var t=Number(e.target.value);isNaN(t)||O(Object(r.a)(Object(r.a)({},g),{},{width:t}))}})]}),Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(u.jsx)("div",{children:Object(u.jsx)(d,{image:n,width:g.width,height:g.height,move:p})}),Object(u.jsx)(d,{image:a,width:g.width,height:g.height,move:-100})]}),Object(u.jsxs)("form",{style:f.form,children:[Object(u.jsxs)("label",{className:"custom-file-upload",children:[Object(u.jsx)("input",{type:"file",onChange:function(e){e.preventDefault(),c(URL.createObjectURL(e.target.files[0])),console.log({e:e.target.files[0]})},style:f.rightInput}),"Left Image"]}),Object(u.jsxs)("label",{className:"custom-file-upload",children:[Object(u.jsx)("input",{type:"file",onChange:function(e){e.preventDefault(),j(URL.createObjectURL(e.target.files[0])),console.log({e:e.target.files[0]})},style:f.leftInput}),"Right Image"]})]})]})},f={page:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},form:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"},rightInput:{}},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),i(e),c(e),o(e),l(e)}))};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.ebd66a06.chunk.js.map