(this["webpackJsonppoint-of-sale"]=this["webpackJsonppoint-of-sale"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/ayam goreng paha.54e67b33.jpg"},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/sate ayam.a18df23c.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/sate kambing.e2db8c89.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/soto ayam.380b6742.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/sop kambing.958f93fa.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/lele goreng.97c5c11b.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bebek rica rica.9db37949.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/ayam bakar.59d95ac4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/nasi goreng.793ad05c.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/es teh manis.497e0f97.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/es stroberry.cee3f56e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/es jeruk.a48b98c2.jpg"},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(7),r=c.n(i),s=(c(19),c(4)),d=(c(20),c(21),c(0)),u=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h2",{children:"WARUNG POJOK SURAMADU"})})},o=(c(23),c(3)),j=function(e){return{type:"ADD_TO_CART",payload:e}},m=function(e){var t=e.item,c=Object(o.b)();return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"productCard",onClick:function(){return e=t.id,void c(j(e));var e},children:[Object(d.jsx)("img",{src:t.image.default,alt:""}),Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsxs)("p",{className:"name",children:[" ",Object(d.jsx)("b",{children:t.name})]}),Object(d.jsx)("p",{className:"price",children:t.price})]})]})})},l=(c(28),function(e){var t=e.item,c=Object(o.b)();return Object(d.jsx)("div",{children:"minuman"===t.category?Object(d.jsxs)("div",{className:"listMinuman",onClick:function(){return e=t.id,void c(j(e));var e},children:[Object(d.jsx)("img",{src:t.image.default,alt:""}),Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsxs)("p",{className:"name",children:[" ",Object(d.jsx)("b",{children:t.name})]}),Object(d.jsx)("p",{className:"price",children:t.price})]})]}):"0"})}),b=(c(29),c(30),function(e){var t=e.primary,c=e.action,a=e.text;return t?Object(d.jsx)("button",{className:"primary",onClick:c,children:a}):Object(d.jsx)("button",{className:"warning",onClick:c,children:a})}),p=function(){var e=Object(o.c)((function(e){return e.product.carts})),t=Object(o.b)(),c=e.reduce((function(e,t){return e+t.price}),0),n=Object(a.useState)(""),i=Object(s.a)(n,2),r=i[0],u=i[1],j=Object(a.useState)(""),m=Object(s.a)(j,2),l=m[0],p=m[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsxs)("div",{className:"total",children:[Object(d.jsx)("h4",{children:"Total"}),Object(d.jsxs)("p",{children:["Rp ",c]})]}),Object(d.jsxs)("div",{className:"pay",children:[Object(d.jsx)("p",{children:"Jumlah bayar"}),Object(d.jsx)("input",{type:"number",value:l,onChange:function(e){p(e.target.value)}})]}),Object(d.jsxs)("div",{className:"change",children:[Object(d.jsx)("p",{children:"Kembalian"}),Object(d.jsxs)("p",{children:["Rp ",r]})]}),Object(d.jsxs)("div",{className:"btnBox",children:[Object(d.jsx)(b,{text:"Reset",action:function(){t({type:"RESET"}),p(""),u("")}}),Object(d.jsx)(b,{text:"Selesai",primary:!0,action:function(e){if(l>r)return u(c-l)}})]})]})})},O=(c(31),c(32),function(e){var t=e.inc,c=e.dec;return t?Object(d.jsx)("div",{className:"inc",onClick:t,children:"+"}):Object(d.jsx)("div",{className:"dec",onClick:c,children:"-"})}),f=function(e){var t=e.item,c=Object(a.useState)(1),n=Object(s.a)(c,2),i=n[0],r=n[1],u=Object(o.b)();return Object(d.jsxs)("div",{className:"cardItem",children:[Object(d.jsxs)("div",{className:"itemName",children:[" ",t.name]}),Object(d.jsxs)("div",{className:"counterContainer",children:[Object(d.jsx)(O,{inc:function(){return e=t.id,r(i+1),void u(function(e){return{type:"INCREMENT",payload:e}}(e));var e}}),Object(d.jsx)("div",{className:"counterTotal",children:i}),Object(d.jsx)(O,{dec:function(){return e=t.id,void(i>1?(r(i-1),u(function(e){return{type:"DECREMENT",payload:e}}(e))):1===i&&u(function(e){return{type:"REMOVE",payload:e}}(e)));var e}})]}),Object(d.jsx)("div",{className:"price",children:t.price})]})},g=(c(33),function(){for(var e=Object(o.c)((function(e){return e.product.products})),t=Object(o.c)((function(e){return e.product.carts})),c=Object(a.useState)("makanan"),n=Object(s.a)(c,2),i=n[0],r=n[1],j=[],b=0;b<e.length;b++)"minuman"===e[b].category&&j.push(e[b]);var O=[];for(b=0;b<e.length;b++)"makanan"===e[b].category&&O.push(e[b]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"menuComponent",children:[Object(d.jsx)("p",{className:"kategory",children:"CATEGORY"}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{className:"makanan",onClick:function(){r("makanan")},children:"Makanan"}),Object(d.jsx)("p",{className:"minuman",onClick:function(){r("minuman")},children:"Minuman"})]}),Object(d.jsx)("div",{className:"productComponent",children:"makanan"===i?O.map((function(e){return Object(d.jsx)(m,{item:e},e.id)})):j.map((function(e){return Object(d.jsx)(l,{item:e},e.id)}))}),Object(d.jsxs)("div",{className:"cardComponent",children:[t?"".concat(t.length," item in cart"):"0 item in cart",t.map((function(e){return Object(d.jsx)(f,{item:e},e.id)})),Object(d.jsx)(p,{})]})]})]})}),h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))},x=c(5),v=c(13),y=c(14),N=c(2),k={products:[{id:1,name:"Sate Ayam",image:c(34),category:"makanan",price:22e3},{id:2,name:"Sate Kambing",image:c(35),category:"makanan",price:3e4},{id:3,name:"Ayam Goreng Dada",image:c(12),category:"makanan",price:2e4},{id:4,name:"Soto Ayam",image:c(36),category:"makanan",price:13e3},{id:5,name:"Sop Kambing",image:c(37),category:"makanan",price:22e3},{id:6,name:"Lele Goreng",image:c(38),category:"makanan",price:13e3},{id:7,name:"Ayam Goreng Paha",image:c(12),category:"makanan",price:2e4},{id:8,name:"Bebek Rica-rica",image:c(39),category:"makanan",price:25e3},{id:9,name:"Ayam Bakar",image:c(40),category:"makanan",price:2e4},{id:10,name:"Nasi Goreng",image:c(41),category:"makanan",price:15e3},{id:12,name:"Es Teh Manis",image:c(42),category:"minuman",price:4e3},{id:13,name:"Es stroberry",image:c(43),category:"minuman",price:5e3},{id:14,name:"Es Jeruk",image:c(44),category:"minuman",price:5e3}],carts:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){default:return e;case"ADD_TO_CART":var n=e.carts.find((function(e){return e.id===a})),i=e.products.find((function(e){return e.id===a}));return n?e:Object(N.a)(Object(N.a)({},e),{},{carts:[].concat(Object(y.a)(e.carts),[i])});case"INCREMENT":var r=e.products.find((function(e){return e.id===a})).price,s=e.carts.map((function(e){return e.id===a?Object(N.a)(Object(N.a)({},e),{},{price:e.price+r}):e}));return Object(N.a)(Object(N.a)({},e),{},{carts:s});case"DECREMENT":var d=e.products.find((function(e){return e.id===a})).price,u=e.carts.map((function(e){return e.id===a?Object(N.a)(Object(N.a)({},e),{},{price:e.price-d}):e}));return Object(N.a)(Object(N.a)({},e),{},{carts:u});case"REMOVE":return Object(N.a)(Object(N.a)({},e),{},{carts:e.carts.filter((function(e){return e.id!==a}))});case"RESET":return Object(N.a)(Object(N.a)({},e),{},{carts:[]})}},E=Object(x.combineReducers)({product:C}),R=Object(x.createStore)(E,Object(v.composeWithDevTools)());r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(o.a,{store:R,children:Object(d.jsx)(g,{})})}),document.getElementById("root")),h()}],[[45,1,2]]]);
//# sourceMappingURL=main.1f8fa58d.chunk.js.map