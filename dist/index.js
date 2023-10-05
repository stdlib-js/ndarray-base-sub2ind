"use strict";var g=function(i,s){return function(){return s||i((s={exports:{}}).exports,s),s.exports}};var l=g(function(x,d){
var c=require('@stdlib/error-tools-fmtprodmsg/dist');function p(){var i,s,o,u,f,m,v,t,e,n,r,a;for(u=arguments[0],i=arguments[1],s=arguments[2],f=u.length,m=arguments[3+f],o=m.length,t=s,a=0;a<f;a++){if(e=u[a],r=arguments[a+3],v=m[a%o],v==="clamp")r<0?r=0:r>=e&&(r=e-1);else if(v==="wrap")r<0?(r+=e,r<0&&(r%=e,r!==0&&(r+=e))):r>=e&&(r-=e,r>=e&&(r%=e));else if(r<0||r>=e)throw new RangeError(c('0jX5J',a,r));n=i[a],n<0&&s===0?t-=r*n:t+=r*n}return t}d.exports=p
});var b=l();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
