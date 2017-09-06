const gulp = require("gulp");
const babel = require("gulp-babel");
const git = require("gulp-git");
const uuid = require("uuid");

gulp.task("watch", function () {
    gulp.watch('src/main.js', ['babel', 'add', 'commit', 'push']);
});

gulp.task("babel", function () {
    return gulp.src("src/main.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

// Run git add
// src is the file(s) to add (or ./*)
gulp.task('add', ['babel'], function(){
    return gulp.src('.')
        .pipe(git.add());
});

// Run git commit with options
gulp.task('commit', function(){
    return gulp.src('./git-test/*')
        .pipe(git.commit(uuid.v4(), {args: '-a'}));
});

// Run git commit with options
gulp.task('push', function(){
    return git.push();
});

gulp.task("default", ["watch"]);