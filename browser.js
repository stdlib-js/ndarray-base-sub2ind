// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(){var e,n=arguments,t=n[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<n.length;e++)i+="&arg[]="+encodeURIComponent(n[e]);return i}return function(){var n,t,i,o,r,f,s,u,d,l,a,p;for(n=arguments[1],t=arguments[2],i=(f=arguments[3+(r=(o=arguments[0]).length)]).length,u=t,p=0;p<r;p++){if(d=o[p],a=arguments[p+3],"clamp"===(s=f[p%i]))a<0?a=0:a>=d&&(a=d-1);else if("wrap"===s)a<0?(a+=d)<0&&0!=(a%=d)&&(a+=d):a>=d&&(a-=d)>=d&&(a%=d);else if(a<0||a>=d)throw new RangeError(e("invalid argument. Subscripts must not exceed array dimensions. Subscript: `%u`. Value: `%d`.",p,a));(l=n[p])<0&&0===t?u-=a*l:u+=a*l}return u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).sub2ind=n();
//# sourceMappingURL=browser.js.map
