// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(){var e,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(e=1;e<n.length;e++)t+="&arg[]="+encodeURIComponent(n[e]);return t}return function(){var n,t,o,r,i,f,l,d,s,u,a,p;for(n=arguments[1],t=arguments[2],o=(f=arguments[3+(i=(r=arguments[0]).length)]).length,d=t,p=0;p<i;p++){if(s=r[p],a=arguments[p+3],"clamp"===(l=f[p%o]))a<0?a=0:a>=s&&(a=s-1);else if("wrap"===l)a<0?(a+=s)<0&&0!=(a%=s)&&(a+=s):a>=s&&(a-=s)>=s&&(a%=s);else if("normalize"===l&&a<0&&(a+=s),a<0||a>=s)throw new RangeError(e("0jX5J",p,a));(u=n[p])<0&&0===t?d-=a*u:d+=a*u}return d}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).sub2ind=n();
//# sourceMappingURL=index.js.map
