"use strict";var g=function(i,s){return function(){return s||i((s={exports:{}}).exports,s),s.exports}};var l=g(function(x,d){
var c=require('@stdlib/error-tools-fmtprodmsg/dist');function p(){var i,s,o,f,m,v,t,n,e,u,r,a;for(f=arguments[0],i=arguments[1],s=arguments[2],m=f.length,v=arguments[3+m],o=v.length,n=s,a=0;a<m;a++){if(e=f[a],r=arguments[a+3],t=v[a%o],t==="clamp")r<0?r=0:r>=e&&(r=e-1);else if(t==="wrap")r<0?(r+=e,r<0&&(r%=e,r!==0&&(r+=e))):r>=e&&(r-=e,r>=e&&(r%=e));else if(t==="normalize"&&r<0&&(r+=e),r<0||r>=e)throw new RangeError(c('0jX5J',a,r));u=i[a],u<0&&s===0?n-=r*u:n+=r*u}return n}d.exports=p
});var b=l();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
