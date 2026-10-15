"use strict";var g=function(i,s){return function(){try{return s||i((s={exports:{}}).exports,s),s.exports}catch(t){throw (s=0, t)}};};var l=g(function(x,d){
var c=require('@stdlib/error-tools-fmtprodmsg/dist');function p(){var i,s,t,m,v,o,n,u,e,f,r,a;for(m=arguments[0],i=arguments[1],s=arguments[2],v=m.length,o=arguments[3+v],t=o.length,u=s,a=0;a<v;a++){if(e=m[a],r=arguments[a+3],n=o[a%t],n==="clamp")r<0?r=0:r>=e&&(r=e-1);else if(n==="wrap")r<0?(r+=e,r<0&&(r%=e,r!==0&&(r+=e))):r>=e&&(r-=e,r>=e&&(r%=e));else if(n==="normalize"&&r<0&&(r+=e),r<0||r>=e)throw new RangeError(c('0jX5J',a,r));f=i[a],f<0&&s===0?u-=r*f:u+=r*f}return u}d.exports=p
});var b=l();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
