(this["webpackJsonpflowmap.gl-example"]=this["webpackJsonpflowmap.gl-example"]||[]).push([[0],{153:function(t,n,e){t.exports=e(166)},160:function(t,n){},165:function(t,n,e){},166:function(t,n,e){"use strict";e.r(n);var o=e(4),a=e.n(o),r=e(128),i=e.n(r),c=e(2),l=e(3),s=e(10),u=e(11),p=e(13),f=e(137),d=e(177),g=e(136),m=e(135),h=e.n(m),w=(e(165),Object({NODE_ENV:"production",PUBLIC_URL:"/flowmap.gl-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MapboxAccessToken),b=function(){var t=h.a.viewport([-109.06,36.99,-102.04,41],[window.innerWidth,window.innerHeight],void 0,void 0,512),n=Object(p.a)(t.center,2);return{longitude:n[0],latitude:n[1],zoom:t.zoom,bearing:0,pitch:0}},O={flows:{scheme:["#d1eeea","#a8dbd9","#85c4c9","#68abb8","#4f90a6","#3b738f","#2a5674"]},locationAreas:{outline:"rgba(92,112,128,0.5)",normal:"rgba(187,187,187,0.5)",selected:"rgba(217,130,43,0.5)"}},v=function(t){Object(s.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={locations:null,flows:null},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat("/flowmap.gl-example","/data/COLocations.geojson")).then((function(t){return t.json()})).then((function(n){return t.setState({locations:n})})),fetch("".concat("/flowmap.gl-example","/data/COFlows.json")).then((function(t){return t.json()})).then((function(n){return t.setState({flows:n})}))}},{key:"render",value:function(){var t=this.state,n=t.locations,e=t.flows,o=[];return n&&e&&o.push(new g.a({colors:O,locations:n,flows:e,getLocationId:function(t){return t.properties.GEOID},getLocationCentroid:function(t){return t.properties.Centroid},getFlowOriginId:function(t){return t.origin},getFlowDestId:function(t){return t.dest},getFlowMagnitude:function(t){return t.count}})),a.a.createElement(d.a,{initialViewState:b(),controller:!0,layers:o},a.a.createElement(f.a,{mapboxApiAccessToken:w}))}}]),e}(o.Component);i.a.render(a.a.createElement(v,null),document.getElementById("root")),document.write('<a href="https://jh-gis.github.io/flowmap.gl-example/">\n    <img \n      style="position: absolute; top: 0; right: 0; border: 0;" \n      src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" \n      alt="Fork me on GitHub">\n   </a>\n ')},91:function(t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.824b38b4.chunk.js.map