const gulp = require('gulp');
const babel = require('gulp-babel');

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