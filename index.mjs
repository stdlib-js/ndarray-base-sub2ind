// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(){var e,t,o,n,s,l,i,f,m,a,d,p;for(e=arguments[1],t=arguments[2],o=(l=arguments[3+(s=(n=arguments[0]).length)]).length,f=t,p=0;p<s;p++){if(m=n[p],d=arguments[p+3],"clamp"===(i=l[p%o]))d<0?d=0:d>=m&&(d=m-1);else if("wrap"===i)d<0?(d+=m)<0&&0!==(d%=m)&&(d+=m):d>=m&&(d-=m)>=m&&(d%=m);else if("normalize"===i&&d<0&&(d+=m),d<0||d>=m)throw new RangeError(r("0jX5J",p,d));(a=e[p])<0&&0===t?f-=d*a:f+=d*a}return f}export{e as default};
//# sourceMappingURL=index.mjs.map
