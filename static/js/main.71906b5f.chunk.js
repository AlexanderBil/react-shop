(this["webpackJsonpproject-react-showcase"]=this["webpackJsonpproject-react-showcase"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(7),s=c.n(i),r=(c(13),c(0));function l(){return Object(r.jsx)("nav",{className:"light-blue darken-4",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#!",className:"brand-logo",children:"React Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsxs)("li",{children:[" ",Object(r.jsx)("a",{href:"!#",children:"Link"})," "]})})]})})}function o(){return Object(r.jsx)("footer",{className:"page-footer  light-blue darken-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear(),"  Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Link"})]})})})}var j=c(8),d=c(1),u=c(4);function b(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}function h(e){var t=e.id,c=e.name,n=e.description,a=e.price,i=e.full_background,s=e.addToBasket;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:i,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{onClick:function(){return s({id:t,name:c,price:a})},className:"btn",children:"Buy"}),Object(r.jsxs)("span",{className:"right",style:{fontSize:"1.4rem"},children:[a," UAH"]})]})]})}function O(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket;return c.length?Object(r.jsx)("div",{className:"goods",children:c.map((function(e){return Object(r.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{addToBasket:n}),e.id)}))}):Object(r.jsx)("h3",{children:"Nothing here"})}function m(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow;return Object(r.jsxs)("div",{onClick:n,className:"cart light-blue darken-4 white-text",children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):null]})}function x(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,i=e.removeFromBasket,s=e.incQuantity,l=e.decQuantity;return Object(r.jsxs)("li",{className:"collection-item ",children:[c,"  x",a,"  = ",n*a," UAH"," ",Object(r.jsx)("i",{onClick:function(){return l(t)},className:"material-icons basket-quantity",children:"remove"})," ",Object(r.jsx)("i",{onClick:function(){return s(t)},className:"material-icons basket-quantity",children:"add"}),Object(r.jsx)("span",{onClick:function(){return i(t)},className:"secondary-content",children:Object(r.jsx)("i",{class:"material-icons basket-delete",children:"close"})})]})}function f(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,a=e.removeFromBasket,i=e.incQuantity,s=e.decQuantity,l=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(r.jsxs)("ul",{class:"collection basket-list",children:[Object(r.jsx)("li",{class:"collection-item active",children:"Basket"}),c.length?c.map((function(e){return Object(r.jsx)(x,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:a,incQuantity:i,decQuantity:s}),e.id)})):Object(r.jsx)("li",{class:"collection-item ",children:"\u0421art is empty "}),Object(r.jsxs)("li",{class:"collection-item active",children:["Total cost: ",l," UAH",Object(r.jsx)("button",{className:"secondary-content btn-small",children:"Arrange "})]}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:n,children:"close"})]})}function v(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),l=s[0],o=s[1],h=Object(n.useState)([]),x=Object(u.a)(h,2),v=x[0],p=x[1],k=Object(n.useState)(!1),y=Object(u.a)(k,2),g=y[0],N=y[1];Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"8cbc7999-d4121f1c-71360442-275b2c9c"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),o(!1)}))}),[]);var B=function(){N(!g)};return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(m,{quantity:v.length,handleBasketShow:B}),l?Object(r.jsx)(b,{}):Object(r.jsx)(O,{goods:c,addToBasket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});p([].concat(Object(j.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));p(n)}}}),g&&Object(r.jsx)(f,{order:v,handleBasketShow:B,removeFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));p(t)},incQuantity:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));p(t)},decQuantity:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>=0?c:0})}return t}));p(t)}})]})}var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(v,{}),Object(r.jsx)(o,{})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.71906b5f.chunk.js.map