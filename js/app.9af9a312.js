(function(t){function e(e){for(var i,a,s=e[0],u=e[1],l=e[2],h=0,d=[];h<s.length;h++)a=s[h],o[a]&&d.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/chrismas/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},2088:function(t,e,n){"use strict";var i=n("69d7"),o=n.n(i);o.a},"2b8e":function(t,e,n){},"496c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("home")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("canvas",{staticClass:"canvas"}),n("melody",{ref:"melody"}),n("gallery",{ref:"gallery"})],1)},s=[],u=n("53ca"),l=(n("28a5"),n("6c7b"),{init:function(){l.Drawing.init(".canvas"),l.ShapeBuilder.init(),document.body.classList.add("body--ready")}});l.Drawing=function(){var t,e,n,i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};return{init:function(n){t=document.querySelector(n),e=t.getContext("2d"),this.adjustCanvas(),window.addEventListener("resize",function(){l.Drawing.adjustCanvas()})},loop:function(t){n=n||t,this.clearFrame(),n(),i.call(window,this.loop.bind(this))},adjustCanvas:function(){t.width=window.innerWidth,t.height=window.innerHeight},clearFrame:function(){e.clearRect(0,0,t.width,t.height)},getArea:function(){return{w:t.width,h:t.height}},drawCircle:function(t,n){e.fillStyle=n.render(),e.beginPath(),e.arc(t.x,t.y,t.z,0,2*Math.PI,!0),e.closePath(),e.fill()}}}(),l.Point=function(t){this.x=t.x,this.y=t.y,this.z=t.z,this.a=t.a,this.h=t.h},l.Color=function(t,e,n,i){this.r=t,this.g=e,this.b=n,this.a=i},l.Color.prototype={render:function(){return"rgba("+this.r+","+this.g+","+this.b+","+this.a+")"}},l.UI=function(){var t,e,n=[],i="#";function o(t){return t&&t.split(" ")[1]}function r(t){return t=t&&t.split(" ")[0],t&&t[0]===i&&t.substring(1)}function a(n,i,o,r){clearInterval(t),e=r?o:1,n(e),(!o||!r&&e<o||r&&e>0)&&(t=setInterval(function(){e=r?e-1:e+1,n(e),(!r&&o&&e===o||r&&0===e)&&clearInterval(t)},i))}function s(t,e){var c,h;n="object"===Object(u["a"])(t)?t:n.concat(t.split("|")),a(function(){switch(h=n.shift(),c=r(h),t=o(h),c){case"countdown":t=parseInt(t,10)||10,t=t>0?t:10,a(function(t){0===t?0===n.length?l.Shape.switchShape(l.ShapeBuilder.letter("")):s(n):l.Shape.switchShape(l.ShapeBuilder.letter(t),!0)},e,t,!0);break;case"icon":l.ShapeBuilder.imageFile("static/"+t+".png",function(t){l.Shape.switchShape(t)});break;default:l.Shape.switchShape(l.ShapeBuilder.letter(h[0]===i?"What?":h))}},e,n.length)}return{simulate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;s(t,e)}}}(),l.Dot=function(t,e){this.p=new l.Point({x:t,y:e,z:5,a:1,h:0}),this.e=.07,this.s=!0,this.c=new l.Color(255,255,255,this.p.a),this.t=this.clone(),this.q=[]},l.Dot.prototype={clone:function(){return new l.Point({x:this.x,y:this.y,z:this.z,a:this.a,h:this.h})},_draw:function(){this.c.a=this.p.a,l.Drawing.drawCircle(this.p,this.c)},_moveTowards:function(t){var e=this.distanceTo(t,!0),n=e[0],i=e[1],o=e[2],r=this.e*o;if(-1===this.p.h)return this.p.x=t.x,this.p.y=t.y,!0;if(o>1)this.p.x-=n/o*r,this.p.y-=i/o*r;else{if(!(this.p.h>0))return!0;this.p.h--}return!1},_update:function(){var t,e;this._moveTowards(this.t)&&(t=this.q.shift(),t?(this.t.x=t.x||this.p.x,this.t.y=t.y||this.p.y,this.t.z=t.z||this.p.z,this.t.a=t.a||this.p.a,this.p.h=t.h||0):this.s?(this.p.x-=Math.sin(3.142*Math.random()),this.p.y-=Math.sin(3.142*Math.random())):this.move(new l.Point({x:this.p.x+50*Math.random()-25,y:this.p.y+50*Math.random()-25}))),e=this.p.a-this.t.a,this.p.a=Math.max(.1,this.p.a-.05*e),e=this.p.z-this.t.z,this.p.z=Math.max(1,this.p.z-.05*e)},distanceTo:function(t,e){var n=this.p.x-t.x,i=this.p.y-t.y,o=Math.sqrt(n*n+i*i);return e?[n,i,o]:o},move:function(t,e){(!e||e&&this.distanceTo(t)>1)&&this.q.push(t)},render:function(){this._update(),this._draw()}},l.ShapeBuilder=function(){var t=13,e=document.createElement("canvas"),n=e.getContext("2d"),i=500,o="Avenir, Helvetica Neue, Helvetica, Arial, sans-serif";function r(){e.width=Math.floor(window.innerWidth/t)*t,e.height=Math.floor(window.innerHeight/t)*t,n.fillStyle="red",n.textBaseline="middle",n.textAlign="center"}function a(){for(var i=n.getImageData(0,0,e.width,e.height).data,o=[],r=0,a=0,s=e.width,u=e.height,c=0,h=0,d=0;d<i.length;d+=4*t)i[d+3]>0&&(o.push(new l.Point({x:r,y:a})),c=r>c?r:c,h=a>h?a:h,s=r<s?r:s,u=a<u?a:u),r+=t,r>=e.width&&(r=0,a+=t,d+=4*t*e.width);return{dots:o,w:c+s,h:h+u}}function s(t){n.font="bold "+t+"px "+o}function u(t){return!isNaN(parseFloat(t))&&isFinite(t)}return{init:function(){r(),window.addEventListener("resize",r)},imageFile:function(t,i){var o=new Image,r=l.Drawing.getArea();o.onload=function(){n.clearRect(0,0,e.width,e.height),n.drawImage(this,0,0,.6*r.h,.6*r.h),i(a())},o.onerror=function(){i(l.ShapeBuilder.letter("What?"))},o.src=t},circle:function(i){var o=Math.max(0,i)/2;return n.clearRect(0,0,e.width,e.height),n.beginPath(),n.arc(o*t,o*t,o*t,0,2*Math.PI,!1),n.fill(),n.closePath(),a()},letter:function(t){var o=0;return s(i),o=Math.min(i,e.width/n.measureText(t).width*.8*i,e.height/i*(u(t)?1:.45)*i),s(o),n.clearRect(0,0,e.width,e.height),n.fillText(t,e.width/2,e.height/2),a()},rectangle:function(e,n){for(var i=[],o=t*e,r=t*n,a=0;a<r;a+=t)for(var s=0;s<o;s+=t)i.push(new l.Point({x:s,y:a}));return{dots:i,w:o,h:r}}}}(),l.Shape=function(){var t=[],e=0,n=0,i=0,o=0;function r(){var t=l.Drawing.getArea();i=t.w/2-e/2,o=t.h/2-n/2}return{shuffleIdle:function(){for(var e=l.Drawing.getArea(),n=0;n<t.length;n++)t[n].s||t[n].move({x:Math.random()*e.w,y:Math.random()*e.h})},switchShape:function(a,s){var u,c=l.Drawing.getArea(),h=0,d=0;if(e=a.w,n=a.h,r(),a.dots.length>t.length)for(u=a.dots.length-t.length,h=1;h<=u;h++)t.push(new l.Dot(c.w/2,c.h/2));h=0;while(a.dots.length>0)d=Math.floor(Math.random()*a.dots.length),t[h].e=s?.25:t[h].s?.14:.11,t[h].s?t[h].move(new l.Point({z:20*Math.random()+10,a:Math.random(),h:18})):t[h].move(new l.Point({z:5*Math.random()+5,h:s?18:30})),t[h].s=!0,t[h].move(new l.Point({x:a.dots[d].x+i,y:a.dots[d].y+o,a:1,z:5,h:0})),a.dots=a.dots.slice(0,d).concat(a.dots.slice(d+1)),h++;for(d=h;d<t.length;d++)t[d].s&&(t[d].move(new l.Point({z:20*Math.random()+10,a:Math.random(),h:20})),t[d].s=!1,t[d].e=.04,t[d].move(new l.Point({x:Math.random()*c.w,y:Math.random()*c.h,a:.3,z:4*Math.random(),h:0})))},render:function(){for(var e=0;e<t.length;e++)t[e].render()}}}();var c=l,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"melody"},[n("audio",{ref:"audio",attrs:{hidden:"true",loop:t.loop,src:t.music}}),n("img",{staticClass:"melody-player",class:{playing:t.playing},attrs:{src:t.melody},on:{click:function(e){return e.stopPropagation(),t.togglePlay(e)}}})])},d=[],f={data:function(){return{assets:{whys:"whys.mp3",melody:"melody.jpeg"},loaded:null,loop:!1,playing:!1}},computed:{music:function(){return"/static/".concat(this.assets.whys)},melody:function(){return"/static/".concat(this.assets.melody)}},mounted:function(){var t=this.$refs.audio;this.loaded=new Promise(function(e){t.addEventListener("canplaythrough",e,!1)})},methods:{play:function(){var t=this;this.loaded&&this.loaded.then(function(){var e=t.$refs.audio;e.play().then(function(){t.playing=!0}).catch(function(){})})},stop:function(){var t=this.$refs.audio;t.pause(),this.playing=!1},togglePlay:function(){this.playing?this.stop():this.play()}}},p=f,m=(n("c53b"),n("2877")),g=Object(m["a"])(p,h,d,!1,null,null,null);g.options.__file="Melody.vue";var v=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel"},t._l(t.assets,function(e,i){return n("div",{key:i,staticClass:"carousel-item",style:t.getItemStyle(e)})}),0)},y=[],x={data:function(){return{currIndex:0,assets:[{url:"1.jpg",duration:10},{url:"2.jpg",duration:10},{url:"9.jpg",duration:10},{url:"3.jpeg",duration:10},{url:"4.jpeg",duration:10},{url:"5.jpeg",duration:10},{url:"6.jpg",duration:10},{url:"7.jpg",duration:10},{url:"8.jpg",duration:10},{url:"10.jpg",duration:10},{url:"11.jpg",duration:10},{url:"12.jpg",duration:10},{url:"13.jpg",duration:10},{url:"14.jpeg",duration:10},{url:"15.jpeg",duration:10},{url:"1.jpg",duration:10}]}},methods:{start:function(){var t=this,e=this.assets[this.currIndex].duration;setTimeout(function(){t.next().then(function(){t.currIndex<t.assets.length-1&&t.start()})},1e3*e)},next:function(){var t=this,e=document.body.clientWidth,n=(this.currIndex+1)*e,i=5,o=this.$el.scrollLeft;return new Promise(function(e){var r=function r(){o<n?(o+=i,t.$el.scrollLeft=o,requestAnimationFrame(r)):(t.$el.scrollLeft=n,t.currIndex++,e())};r()})},getItemStyle:function(t){var e=t.url;return{backgroundImage:"url(/static/carousel/".concat(e,")")}}}},b=x,_=(n("2088"),Object(m["a"])(b,w,y,!1,null,null,null));_.options.__file="index.vue";var j=_.exports,M={name:"Home",components:{Melody:v,Gallery:j},data:function(){return{performed:!1}},mounted:function(){var t=this;this.init().then(function(){t.performAction("3"),setTimeout(function(){t.performAction("2")},1e3),setTimeout(function(){t.performAction("1"),t.$refs.melody.play()},2e3),setTimeout(function(){t.performAction("Merry|Christmas|马晓静|你要的|#icon star|I ❤ U",5e3)},3e3),setTimeout(function(){t.scrollToGallery().then(function(){t.$refs.gallery.start()})},2e4)})},methods:{init:function(){var t=this;return new Promise(function(e){c.init(),t.$dialog({message:"开启音乐?",onClose:function(){e()}})})},performAction:function(t){this.performed?c.UI.simulate(t):(c.UI.simulate(t),c.Drawing.loop(function(){c.Shape.render()}),this.performed=!0)},scrollToGallery:function(){var t=document.body,e=t.clientHeight,n=5,i=0;return new Promise(function(o){var r=function r(){i<=e?(i+=n,t.scrollTop=i,requestAnimationFrame(r)):o()};r()})}}},P=M,C=Object(m["a"])(P,a,s,!1,null,null,null);C.options.__file="Home.vue";var S=C.exports,I={components:{Home:S}},z=I,A=(n("034f"),Object(m["a"])(z,o,r,!1,null,null,null));A.options.__file="App.vue";var $=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"dialog"},[n("div",{staticClass:"dialog-title"},[t._v("提示")]),n("div",{staticClass:"dialog-message"},[t._v(t._s(t.message))]),n("div",{staticClass:"dialog-confirm",on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("确定")])]):t._e()},O=[],D={data:function(){return{visible:!1,message:"",onClose:null}},methods:{close:function(){this.visible=!1,"function"===typeof this.onClose&&this.onClose(this)}}},F=D,q=(n("8702"),Object(m["a"])(F,T,O,!1,null,null,null));q.options.__file="component.vue";var k,E=q.exports,B=i["a"].extend(E),H=[],R=1,L=function t(e){e=e||{},"string"===typeof e&&(e={message:e});var n=e.onClose,i="message_"+R++;return e.onClose=function(){t.close(i,n)},k=new B({data:e}),k.id=i,k.vm=k.$mount(),document.body.appendChild(k.vm.$el),k.vm.visible=!0,k.dom=k.vm.$el,H.push(k),k.vm};L.close=function(t,e){for(var n=0,i=H.length;n<i;n++)if(t===H[n].id){"function"===typeof e&&e(H[n]),H.splice(n,1);break}};var W=L;i["a"].prototype.$dialog=i["a"].$dialog=W,i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t($)}}).$mount("#app")},"64a9":function(t,e,n){},"69d7":function(t,e,n){},8702:function(t,e,n){"use strict";var i=n("2b8e"),o=n.n(i);o.a},c53b:function(t,e,n){"use strict";var i=n("496c"),o=n.n(i);o.a}});
//# sourceMappingURL=app.9af9a312.js.map