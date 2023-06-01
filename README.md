<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sub2ind

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert subscripts to a linear index.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
sub2ind = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sub2ind = require( 'path/to/vendor/umd/ndarray-base-sub2ind/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sub2ind;
})();
</script>
```

#### sub2ind( shape, strides, offset, ...subscripts, mode )

Converts subscripts to a linear index.

```javascript
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var offset = 0;
var mode = [ 'throw' ];

var idx = sub2ind( shape, strides, offset, 1, 0, mode );
// returns 2
```

The function supports the following `modes`:

-   `throw`: specifies that the function should throw an error when a subscript exceeds array dimensions.
-   `wrap`: specifies that the function should wrap around subscripts exceeding array dimensions using modulo arithmetic.
-   `clamp`: specifies that the function should set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.

```javascript
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var mode = [ 'wrap' ];
var idx = sub2ind( shape, strides, offset, -2, 0, mode );
// returns 0

mode = [ 'clamp' ];
idx = sub2ind( shape, strides, offset, 10, 10, mode );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided fewer `modes` than dimensions, the function recycles `modes` using modulo arithmetic.

    ```javascript
    var shape = [ 2, 2, 2 ];
    var strides = [ 4, 2, 1 ];
    var offset = 0;
    var mode = [ 'wrap', 'clamp' ];

    var idx = sub2ind( shape, strides, offset, -2, 10, -1, mode );
    // returns 3
    ```

-   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.

    ```text
    Dims: 2x2
    Buffer: [ 1, 2, 3, 4 ]

    View = [ a00, a01,
             a10, a11 ]

    Strides: 2,1
    Offset: 0

    View = [ 1, 2,
             3, 4 ]

    Strides: 2,-1
    Offset: 1

    View = [ 2, 1,
             4, 3 ]

    Strides: -2,1
    Offset: 2

    View = [ 3, 4,
             1, 2 ]

    Strides: -2,-1
    Offset: 3

    View = [ 4, 3,
             2, 1 ]
    ```

    ```javascript
    var shape = [ 2, 2 ];
    var strides = [ -2, 1 ];
    var offset = 2;
    var mode = [ 'throw' ];

    // From the perspective of a view...
    var idx = sub2ind( shape, strides, 0, 0, 0, mode );
    // returns 0

    idx = sub2ind( shape, strides, 0, 0, 1, mode );
    // returns 1

    idx = sub2ind( shape, strides, 0, 1, 0, mode );
    // returns 2

    idx = sub2ind( shape, strides, 0, 1, 1, mode );
    // returns 3

    // From the perspective of an underlying buffer...
    idx = sub2ind( shape, strides, offset, 0, 0, mode );
    // returns 2

    idx = sub2ind( shape, strides, offset, 0, 1, mode );
    // returns 3

    idx = sub2ind( shape, strides, offset, 1, 0, mode );
    // returns 0

    idx = sub2ind( shape, strides, offset, 1, 1, mode );
    // returns 1
    ```

    In short, from the perspective of a view, view data is always ordered.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var shape = [ 3, 3 ];
var strides = shape2strides( shape, 'row-major' );
var mode = [ 'throw' ];
var len = numel( shape );

var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
    arr.push( i );
}

var offset;
var idx;
var row;
var j;
var n;
var m;
for ( i = 0; i < 20; i++ ) {
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] = ( randu() < 0.5 ) ? -1 : 1;
    offset = strides2offset( shape, strides );

    console.log( '' );
    console.log( 'Dimensions: %s.', shape.join( 'x' ) );
    console.log( 'Strides: %s.', strides.join( ',' ) );
    console.log( 'View:' );
    for ( n = 0; n < shape[ 0 ]; n++ ) {
        row = '  ';
        for ( m = 0; m < shape[ 1 ]; m++ ) {
            idx = sub2ind( shape, strides, offset, n, m, mode );
            row += arr[ idx ];
            if ( m < shape[ 1 ]-1 ) {
                row += ', ';
            }
        }
        console.log( row );
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-sub2ind.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-sub2ind

[test-image]: https://github.com/stdlib-js/ndarray-base-sub2ind/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-sub2ind/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-sub2ind?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-sub2ind.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-sub2ind/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-sub2ind/main/LICENSE

</section>

<!-- /.links -->
