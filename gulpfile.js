const gulp = require("gulp");
const babel = require("gulp-babel");
const git = require("gulp-git");

gulp.task("watch", function () {
    gulp.watch('src/main.js', ['babel', 'add', 'commit']);
});

gulp.task("babel", function () {
    return gulp.src("src/main.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

// Run git add
// src is the file(s) to add (or ./*)
gulp.task('add', function(){
    return gulp.src('.')
        .pipe(git.add());
});

// Run git commit with options
gulp.task('commit', function(){
    let timeStamp = new Date().getTime();
    
    return gulp.src('./git-test/*')
        .pipe(git.commit('screeps' + timeStamp, {args: '-a'}));
});

gulp.task("default", ["watch"]);