// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function e(){var e,t,o,s,n,l,f,i,m,a,d,p;for(e=arguments[1],t=arguments[2],o=(l=arguments[3+(n=(s=arguments[0]).length)]).length,i=t,p=0;p<n;p++){if(m=s[p],d=arguments[p+3],"clamp"===(f=l[p%o]))d<0?d=0:d>=m&&(d=m-1);else if("wrap"===f)d<0?(d+=m)<0&&0!==(d%=m)&&(d+=m):d>=m&&(d-=m)>=m&&(d%=m);else if(d<0||d>=m)throw new RangeError(r("0jX5J,L4",p,d));(a=e[p])<0&&0===t?i-=d*a:i+=d*a}return i}export{e as default};
//# sourceMappingURL=index.mjs.map
