
## Info

This is a simple browser auto-reloading app by gulp-watching and browsersync, which can watch files in your project folders and reload borwser when any file changed.

## Usage

Set the folder and file type you want to watch in `gulpfile.js`:

```javascript
gulp.watch('.//app/**/*.{css,js,erb,scss,vue}', ['browser-reload'])
```

You can use local server to start your app or through proxy:

```javascript
// local server
  server: {
    baseDir: './'
  }

// proxy: 'http://localhost:3000/'
```

Run start to watching files: 

```
npm install
npm run start
```

## Vendor

- [BrowserSync](https://browsersync.io/docs/gulp)
- [Gulp](https://gulpjs.com/)