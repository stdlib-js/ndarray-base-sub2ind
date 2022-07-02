// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function r(){var r,t,s,n,i,o,a,l,d,m,u,f;for(r=arguments[1],t=arguments[2],s=(o=arguments[3+(i=(n=arguments[0]).length)]).length,l=t,f=0;f<i;f++){if(d=n[f],u=arguments[f+3],"clamp"===(a=o[f%s]))u<0?u=0:u>=d&&(u=d-1);else if("wrap"===a)u<0?(u+=d)<0&&0!==(u%=d)&&(u+=d):u>=d&&(u-=d)>=d&&(u%=d);else if(u<0||u>=d)throw new RangeError(e("invalid argument. Subscripts must not exceed array dimensions. Subscript: `%u`. Value: `%d`.",f,u));(m=r[f])<0&&0===t?l-=u*m:l+=u*m}return l}export{r as default};
//# sourceMappingURL=index.mjs.map
