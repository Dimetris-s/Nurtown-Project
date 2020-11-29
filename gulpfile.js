const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp')

//! Пакеты
const fs = require('fs')

const del = require('del')
const sass = require('gulp-sass')
const sync = require('browser-sync').create()
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const include = require('gulp-file-include')
const uglify = require('gulp-uglify-es').default
const webp = require('gulp-webp')
const webphtml = require('gulp-webp-html')
const webpcss = require('gulp-webp-css')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')


//! Develop


//! HTML
function html() {
    return src('src/*.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(webphtml())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}
//! CSS
function scss() {
    return src('src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(webpcss())
        .pipe(csso())
        .pipe(concat('style.css'))
        .pipe(dest('src/css'))
}

function moveCSS() {
    return src('src/css/*.css')
        .pipe(dest('dist/css'))
}
//! JS
function JS() {
    return src('src/js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'))
}

//! Images

function image() {
    return src('src/img/**/*.{jpg, png,svg, gif, ico, webp}')
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest('dist/img'))
        .pipe(src('src/img/**/*.{jpg, png,svg, gif, ico, webp}'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest('dist/img'))
}
//! Fonts
function fonts() {
    src('src/fonts/*.ttf')
        .pipe(ttf2woff())
        .pipe(dest('dist/fonts'))
    return src('src/fonts/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('dist/fonts'))
}

let source_folder = "src";
let appFonts = "dist/fonts";

function fontsStyle(params) {

    let file_content = fs.readFileSync(source_folder + '/scss/parts/_fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/scss/parts/_fonts.scss', '', cb);
        return fs.readdir(appFonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + '/scss/parts/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}


//! Utility functions and vars
function cb() {}

function clear() {
    return del('dist')
}


//! Server
function serve() {
    sync.init({
        server: {
            baseDir: "dist",
            open: 'local'
        },
        notify: false
    })
}

//! Watcher!
function watchFiles() {
    watch('src/**/*.html', series(html)).on('change', sync.reload)
    watch('src/scss/**/*.scss', series(scss, moveCSS)).on('change', sync.reload)
    watch('src/js/**/*.js', series(JS)).on('change', sync.reload)
    watch('src/img/', series(image)).on('change', sync.reload)
}

//! exports
let build = series(clear, series(html, image, scss, moveCSS, fonts, JS), fontsStyle)


exports.watchFiles = watchFiles
exports.fontsStyle = fontsStyle
exports.fonts = fonts
exports.clear = clear
exports.image = image
exports.JS = JS
exports.scss = scss
exports.html = html
exports.moveCSS = moveCSS

// exports.default = series(clear, html, scss, moveCSS, JS, fonts, fontsStyle, image, serve)
exports.build = parallel(build)
exports.default = parallel(watchFiles, serve)