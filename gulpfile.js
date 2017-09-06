const gulp = require("gulp");
const babel = require("gulp-babel");
const git = require("gulp-git");
const uuid = require("uuid");
const runSequence = require('run-sequence');

gulp.task("watch", function () {
    gulp.watch('src/main.js', function() {
        runSequence('babel', 'add', 'commit', 'push')
    });
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

// Run git push
// branch is the current branch & remote branch to push to
gulp.task('push', function(){
    git.push('origin', function (err) {
        if (err) throw err;
    });
});

gulp.task("default", ["watch"]);