const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es5', () =>
    gulp.src('dist/es-next/bundle.js')
        .pipe(babel({
    presets : ["@babel/preset-env"]
}))
    .pipe(gulp.dest('dist/es5'))
);