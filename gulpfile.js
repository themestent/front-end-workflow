var gulp = require('gulp'),
  sass = require('gulp-sass'),
  neat = require('node-neat'),
  styleguide = require('./node_modules/sc5-styleguide/lib/styleguide'),
  source = 'app/scss/**/*.scss',
  outputPath = 'demo-output';

gulp.task('styleguide:generate', function() {
  return gulp.src(source)
    .pipe(styleguide.generate({
      title: 'SC5 Styleguide',
      server: true,
      rootPath: outputPath,
      //overviewPath: 'README.md',
      styleVariables: 'app/scss/app/helpers/_variables.scss'
    }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('app/scss/app.scss')
    .pipe(sass({
      compass:true,
      sourcemap:true,
      errLogToConsole: true,
      includePaths: neat.includePaths
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:static', 'styleguide:generate', 'styleguide:applystyles']);

gulp.task('styleguide:static', function() {
  gulp.src(['./node_modules/sc5-styleguide/lib/demo/**'])
    .pipe(gulp.dest(outputPath + '/demo'));
});

gulp.task('watch', ['styleguide'], function() {
  // Start watching changes and update styleguide whenever changes are detected
  gulp.watch(source, ['styleguide']);
});
