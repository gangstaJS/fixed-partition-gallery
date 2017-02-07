webpackJsonp([0,2],[,,function(t,e,n){"use strict";var i=n(1),r=n.n(i),o=n(18),s=n.n(o),a=n(17),u=n.n(a),c=n(12),h=n.n(c),p=n(13),f=n.n(p);r.a.use(u.a),r.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Hello",component:h.a},{path:"/photos",name:"Photos",component:f.a}]})},function(t,e,n){n(9);var i=n(0)(n(4),n(15),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",created:function(){this.tick()},methods:{tick:function(){var t=this;setInterval(function(){t.counter++},500)}},data:function(){return{msg:"welcome to Your Vue.js App",counter:0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r=n.n(i);e.default={created:function(){},computed:{clientWidth:function(){return this.widthContainer}},data:function(){return{photos:[],positions:[],heightContainer:0,widthContainer:0,currentPreview:null,currentPreviewSrc:"javascript:;",currentActiveIndex:null}},mounted:function(){var t=this;this.widthContainer=this.$el.clientWidth,this.fetchPhotos(),window.addEventListener("resize",function(){t.widthContainer=t.$el.clientWidth;var e=r()(t.photos,{containerWidth:t.widthContainer||5,idealElementHeight:120,spacing:2});t.positions=e.positions,t.heightContainer=e.height})},methods:{fetchPhotos:function(){var t=this;this.$http.get("/static/photos.json").then(function(e){var n=e.data.upload_list.filter(function(t){return"jpeg"==t.magick});n=n.map(function(t){return t.active=!1,t});var i=r()(n,{containerWidth:t.widthContainer,idealElementHeight:130,spacing:2});t.photos=n,t.positions=i.positions,t.heightContainer=i.height,t.widthContainer=i.width})},computeRow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(t-t%100)/100},openPreview:function(t,e){return this.currentActiveIndex===e?(this.currentPreview=null,this.currentActiveIndex=null,void(this.photos[this.currentActiveIndex].active=!1)):(this.currentPreview="lastItem-"+t,null!==this.currentActiveIndex&&(this.photos[this.currentActiveIndex].active=!1),this.currentActiveIndex=e,this.photos[this.currentActiveIndex].active=!0,void(this.currentPreviewSrc="http://fex.net/show/858909646169/"+this.photos[this.currentActiveIndex].upload_id+"?400h"))}}}},function(t,e){t.exports=function(t,e){var i,r,o,s,a,u,c=[],h=e.spacing||0,p=e.containerWidth,f=e.idealElementHeight||p/3;if(!p)throw new Error("Invalid container width");var l,d=[],v=[];for(i=0,s=t.length;i<s;i++)l=t[i].width/t[i].height,d.push(l),v.push(Math.round(100*l));var w=0;for(i=0,s=d.length;i<s;i++)w+=d[i]*f;var g=Math.round(w/p);if(g<1){var m,_=0;u=t.length;var x=0;if("center"===e.align){for(var P=(u-1)*h,i=0;i<u;i++)P+=Math.roun(f*d[i])-h*(u-1)/u;x=Math.floor((p-P)/2)}for(var i=0;i<u;i++)m=Math.round(f*d[i])-h*(u-1)/u,c.push({y:0,x:x+_,width:m,height:f}),_+=m,i!==s-1&&(_+=h);I=f}else{var _,C=n(v,g),y=0,I=0;for(i=0,s=C.length;i<s;i++){var A=y,M=0;for(r=0,o=C[i].length;r<o;r++)M+=d[A+r],y++;for(_=0,a=Math.round(p/M),u=C[i].length,r=0;r<u;r++)m=(p-(u-1)*h)/M*d[A+r],c.push({y:I,x:_,width:m,height:a}),_+=m,r!==u-1&&(_+=h);I+=a,i!==s-1&&(I+=h)}}return{width:p,height:I,positions:c}};var n=function(t,e){var n,i,r,o,s,a,u,c,h,p,f,l,d,v,w;if(s=t.length,e<=0)return[];if(e>s)return t.map(function(t){return[t]});for(u=function(){var t,n;for(n=[],h=t=0;0<=s?t<s:t>s;h=0<=s?++t:--t)n.push(function(){var t,n;for(n=[],c=t=0;0<=e?t<e:t>e;c=0<=e?++t:--t)n.push(0);return n}());return n}(),a=function(){var t,n,i;for(i=[],h=t=0,n=s-1;0<=n?t<n:t>n;h=0<=n?++t:--t)i.push(function(){var t,n,i;for(i=[],c=t=0,n=e-1;0<=n?t<n:t>n;c=0<=n?++t:--t)i.push(0);return i}());return i}(),i=p=0;0<=s?p<s:p>s;i=0<=s?++p:--p)u[i][0]=t[i]+(i?u[i-1][0]:0);for(r=f=0;0<=e?f<e:f>e;r=0<=e?++f:--f)u[0][r]=t[0];for(i=l=1;1<=s?l<s:l>s;i=1<=s?++l:--l)for(r=d=1;1<=e?d<e:d>e;r=1<=e?++d:--d){for(o=[],c=v=0;0<=i?v<i:v>i;c=0<=i?++v:--v)o.push([Math.max(u[c][r-1],u[i][0]-u[c][0]),c]);var g,m=!1;for(v=0,w=o.length;v<w;v++)(0===v||o[v][0]<g)&&(g=o[v][0],m=v);o=o[m],u[i][r]=o[0],a[i-1][r-1]=o[1]}for(s-=1,e-=2,n=[];e>=0&&(n=[function(){var n,r,o,u;for(u=[],i=n=r=a[s-1][e]+1,o=s+1;r<=o?n<o:n>o;i=r<=o?++n:--n)u.push(t[i]);return u}()].concat(n),s=a[s-1][e],e-=1,0!==s););return[function(){var e,n,r;for(r=[],i=e=0,n=s+1;0<=n?e<n:e>n;i=0<=n?++e:--e)r.push(t[i]);return r}()].concat(n)}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(10),n(11);var i=n(0)(n(5),n(16),"data-v-2bddb5de",null);t.exports=i.exports},function(t,e,n){n(8);var i=n(0)(n(6),n(14),"data-v-22db78b2",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{height:t.heightContainer+"px"}},[t._l(t.photos,function(e,i){return t._t("default",[n("img",{class:{active:e.active},style:{width:t.positions[i].width+"px",height:t.positions[i].height+"px"},attrs:{src:"http://fex.net/show/858909646169/"+e.upload_id+"?400h",alt:e.name,row:t.computeRow(t.positions[i].y)},on:{click:function(e){t.openPreview(t.computeRow(t.positions[i].y),i)}}}),t._v(" "),i+1!=t.photos.length&&t.computeRow(t.positions[i+1].y)>t.computeRow(t.positions[i].y)||t.photos.length-1==i?t._t("default",[n("transition",{attrs:{name:"preview-trans"}},[t.currentPreview=="lastItem-"+t.computeRow(t.positions[i].y)?n("div",{staticClass:"preview"},[n("img",{attrs:{src:t.currentPreviewSrc}})]):t._e()])]):t._e()])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h1",[t._v(t._s(t.counter))])])},staticRenderFns:[]}},,,,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n.n(i),o=n(3),s=n.n(o),a=n(2);new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})}],[22]);