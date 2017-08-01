const gulp = require('gulp')
const browserSync = require('browser-sync').create()

// Static Server + watching scss/html files
gulp.task('serve', function () {
  browserSync.init({

    // local server
    // server: {
    //   baseDir: './'
    // }

    // proxy
    proxy: 'http://localhost:3000/'
  })
  gulp.watch('./../shopping-mall/app/**/*.{css,js,erb,scss,vue}', ['browser-reload'])
})

gulp.task('browser-reload', function (done) {
  browserSync.reload()
  done()
})

gulp.task('default', ['serve'])
