/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var pkg = require( './../package.json' ).name;
var sub2ind = require( './../lib' );


// MAIN //

bench( pkg+':mode=[throw]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'throw' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[throw],offset=0', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	for ( i = 0; i < shape.length; i++ ) {
		strides[ i ] *= -1;
	}
	offset = 0;
	mode = [ 'throw' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*10.0 );
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'wrap' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*100.0 ) - 50.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap],offset=0', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	for ( i = 0; i < shape.length; i++ ) {
		strides[ i ] *= -1;
	}
	offset = 0;
	mode = [ 'wrap' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*100.0 ) - 50.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[clamp]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'clamp' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[clamp],offset=0', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	for ( i = 0; i < shape.length; i++ ) {
		strides[ i ] *= -1;
	}
	offset = 0;
	mode = [ 'clamp' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[normalize]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'normalize' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 10.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[normalize],offset=0', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	for ( i = 0; i < shape.length; i++ ) {
		strides[ i ] *= -1;
	}
	offset = 0;
	mode = [ 'normalize' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 10.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap,clamp]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'wrap', 'clamp' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[wrap,clamp,clamp]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'wrap', 'clamp', 'clamp' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[clamp,wrap]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'clamp', 'wrap' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=[clamp,wrap,wrap]', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var out;
	var s0;
	var s1;
	var s2;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	offset = strides2offset( shape, strides );
	mode = [ 'clamp', 'wrap', 'wrap' ];

	s0 = discreteUniform( 0, shape[ 0 ]-1 );
	s1 = discreteUniform( 0, shape[ 1 ]-1 );
	s2 = discreteUniform( 0, shape[ 2 ]-1 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s2 = floor( randu()*20.0 ) - 5.0;
		out = sub2ind( shape, strides, offset, s0, s1, s2, mode );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
