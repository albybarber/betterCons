var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
debug = require('gulp-debug');

var svgConfig = {
    mode: {
        symbol: true
    },
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        namespaceIDs: false,
        namespaceClassnames: false
    }
};

gulp.task('svg', function(){
  return gulp.src('SVGs/*.svg')
    .pipe(debug({title: 'icon:'}))
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('built'));
});

gulp.task('default', ['svg']);