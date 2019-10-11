const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const del = require('del');
const path = require('path')
gulp.task('es5', () =>
    gulp.src('./dist/es-next/*.js')
        .pipe(babel({
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "ie": "11"
                        }
                    }
                ]
            ]
        }))
        .pipe(gulp.dest('dist/es5'))
);

gulp.task('clean:es5', () =>
    del(['dist/es5'])
);

gulp.task('esnext', () =>
    gulp.src('./src/index.ts')
        .pipe(webpack({
            config: require('./webpack.config.js')
        }))
        .pipe(gulp.dest('dist/es-next'))
);

gulp.task('clean:esnext', () =>
    del(['dist/es-next'])
);

gulp.task('copy:webcomponents', () =>
    gulp.src([
        './node_modules/@webcomponents/webcomponentsjs/**',
    ]).pipe(gulp.dest('dist/modules/@webcomponents/webcomponentsjs'))
);

gulp.task('copy:babel-runtime', () =>
    gulp.src([
        './node_modules/@babel/polyfill/dist/polyfill.js',
    ]).pipe(gulp.dest('dist/modules/@babel/polyfill/dist'))
);

gulp.task('copy', gulp.parallel('copy:webcomponents', 'copy:babel-runtime'));
gulp.task('clean', gulp.series('clean:esnext', 'clean:es5'));
gulp.task('default', gulp.parallel('copy', gulp.series(['esnext', 'es5'])));
