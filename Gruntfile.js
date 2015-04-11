// # Grunt Tasks
module.exports = function (grunt) {
  // This file first matches the dependencies of all required **grunt-cli** from **package.json** file.
  'use strict';
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  // Setting up variables for publication static path and skin path
  var CODEBASE_STATIC_PATH = "webapp/";
  var CODEBASE_SKIN_PATH = CODEBASE_STATIC_PATH;

  var gulp = require('gulp'),
    styleguide = require('sc5-styleguide');

  // ## Initialing Grunt Configuration
  // `grunt.initConfig()` Initializes all the tasks
  grunt.initConfig({
    // ### Defining tasks names with options.
    // Reading all the required task packages from *package.json*
    pkg: grunt.file.readJSON('package.json'),
    // #### Bower: Install required Dev Dependencies
    // **Bower** task installs resources defined in `bower.json` file inside **app** directory. It first creates a Bower's default components directory and start downloading the resources.

    // On Complete it copies downloaded resources to defined sub-directories inside **app** folder according to resource type.

    // When all the resources copied to it's destination Bower's default components directory will be removed. For more options browse [**Grunt-Bower-Task**](https://github.com/yatskevich/grunt-bower-task).
    bower: {
        install: {
          options: {
            targetDir: './app',
            layout: 'byType',
            install: true,
            verbose: false,
            cleanTargetDir: false,
            cleanBowerDir: true,
            bowerOptions: {
            }
          }
        }
      },
    // #### Css Condense task.
    // `cssc` task is used to compress css files. Get more details on options can be found on [**Grunt-Cssc**](https://github.com/mediapart/grunt-cssc)
    cssc: {
      build: {
        options: {
            sortSelectors: true,
            lineBreaks: true,
            sortDeclarations:true,
            consolidateViaDeclarations:true,
            consolidateViaSelectors:true,
            consolidateMediaQueries:true,
            sort:true,
            safe:true
        },
        files: {
            'app/css/app.css': 'app/css/app.css'
        }
      }
    },
    // #### Compass
    // `compass` task following rules defined into **config.rb**. Look for more options [**Grunt-Contrib-compass**](https://github.com/gruntjs/grunt-contrib-compass)
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },
    // #### CssLint
    // **csslint** task checks css syntax against a set of rules for better efficiency and make sure your css works as expected. **.csslintrc** file holds some of the options out of many which will be applied to the sources you will define. Get more detailed idea about [**grunt-contrib-csslint**](https://github.com/gruntjs/grunt-contrib-csslint)
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          'app/css/**/*.css',
        ]
      }
    },


    // #### Concatenate Multiple Files
    // `concat` task is concatenating multiple sources into a single file. Read more about it on [**grunt-contrib-concat**](https://github.com/gruntjs/grunt-contrib-concat)
    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      // Concat everything in `plugin` directory
      plugins: {
        src: [
          'app/js/plugins/**/*.js',
        ],
        dest: 'app/js/plugins.js'
      },

      // Concat everything in `plugin` directory
      custom:{
        src:[
          'app/js/custom/**/*.js',
        ],
        dest: 'app/js/app.js'
      }
    },

    // #### uglifiy
    // All the js files minified seperately and put them in 'min' directory with .min.js extension.
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'app/js/min/plugins.min.js': ['<%= concat.plugins.dest %>'],
          'app/js/min/app.min.js': ['<%= concat.custom.dest %>']
        }
      }
    },
    // #### Clean Task
    // Before generating any new files, remove any previously-created files. Task name `clean`
    clean: {
      options:{force:true},
      tests: {
        src:["app/dev/css/**/*.css","app/dev/js/**/*.js","app/dev/img/**/*.{png,jpg,gif}"]
      },
      css:{
        src:["app/dev/css/"]
      },
      js:{
        src:["app/dev/js/"]
      },
      img:{
        src:["app/dev/img/"]
      },
      fonts:{
        src:["app/dev/fonts/"]
      },


      proBootstrapCss:{
        src:CODEBASE_STATIC_PATH + ["css/"]
      },

      proOWLCarouselCss:{
        src:CODEBASE_STATIC_PATH + ["css/vendors/OWLCarousel2/"]
      },


      proThemeCss:{
        src:CODEBASE_SKIN_PATH + ["css/"]
      },

      proThemeIco:{
        src:CODEBASE_SKIN_PATH + ["img//ico/"]
      },

      proThemeImg:{
        src:CODEBASE_SKIN_PATH + ["img/"]
      },

      proAllJS:{
        src: CODEBASE_STATIC_PATH + ["js/"]
      },

      proBootstrapFonts:{
        src: CODEBASE_STATIC_PATH + ["fonts/bootstrap/"]
      },

      proCustomFonts:{
        src: CODEBASE_SKIN_PATH + ["fonts/custom/"]
      },

      proCleanAll:{
        src: CODEBASE_STATIC_PATH + ["/"]
      }
    },
    // #### Minify Images
    // `imageMin` task is using [**grunt-contrib-imagemin**](https://github.com/gruntjs/grunt-contrib-imagemin) to minify project images.
    imagemin: {
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'app/img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'app/img/'                  // Destination path prefix
        }]
      }
    },

    // #### `csscomb` task will  beautify and sort your css rules in specific order. A configuration file can be created from `www.csscomb.com/config`
    csscomb: {
      dist: {
        options: {
          config: '.csscomb.json'
        },
        files: [{
          expand: true,
          cwd: 'app/css/',
          src: ['**/*.css', '!*.min.css'],
          dest: 'app/css/',
          ext: '.css'
        }]
      },
      test: {
        options: {
          config: '.csscomb.json'
        },
        files: [{
          expand: true,
          cwd: 'app/css/',
          src: ['**/*.css', '!*.min.css'],
          dest: 'app/css/combine/',
          ext: '.comb.css'
        }]
      }
    },

    // #### `csssrink` please visit **http://cssshrink.com** for usage example.
    cssshrink: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'app/css/shrinked': ['app/css/*.css']
        }
      }
    },

    // #### `csscss` Task is used for redundancy analyzer ref: **https://github.com/peterkeating/grunt-csscss**
    csscss: {
      options: {
        colorize: false,
        verbose: true,
        outputJson: false,
        minMatch: 2,
        compass: true,
        ignoreProperties: 'padding',
        ignoreSelectors: '.rule-a'
      },
      dist: {
        src: ['app/css/app.css', 'app/scss/*.scss'],
        'css-duplicates.json':['app/css/app.css']
      }
    },

    // #### Minify Css
    // `cssmin` task is using [**grunt-contrib-cssmin**](https://github.com/gruntjs/grunt-contrib-cssmin) to minify css files.
    cssmin: {

      // `devCssMin` task will minify **css** files from `css` folder and copy them into `app/dev/css` folder
      devCssMin: {
          expand: true,
          cwd: 'app/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'app/dev/css/',
          ext: '.min.css'
        },
      // `proCssMin` task will minify **css** files from `css` folder
      proCssMin: {
        expand: true,
        cwd: 'app/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'app/css/',
        ext: '.min.css'
      }
    },
    // Copy Production CSS Files
    copy: {
      main: {
        files: [
        {
          expand:true,
          cwd:'app/',
          src:['**/*.js','**/*.css','**/*.{jpg,png,gif,jpeg}','**/*.svg','**/*.{eot,ttf,woff}'],
          dest:'app/dev/',
          extDot:'first'
        }
        ]
      },
      css: {
        files: [
          {
            expand:true,
            cwd:'app/css/',
            src:['**'],
            dest:'app/dev/css/',
            extDot:'first'
          }
        ]
      },
      js: {
        files: [
          {
            expand:true,
            cwd:'app/js/',
            src:['**'],
            dest:'app/dev/js/',
            extDot:'first'
          }
        ]
      },
      img: {
        files: [
          {
            expand:true,
            cwd:'app/img/',
            src:['**/*.{png,jpg,gif,jpeg,ico,svg}'],
            dest:'app/dev/img/',
            extDot:'first'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand:true,
            cwd:'app/fonts/',
            src:['**/*.{eot,ttf,woff,svg,svgz,woff2}'],
            dest:'app/dev/fonts/',
            extDot:'first'
          }
        ]
      },


      // copy Bootstrap css files into the publication static css folder
      copyBootstrapCss:{
        files:[
          {
            src:['app/css/bootstrap.css'], dest:CODEBASE_STATIC_PATH+'css/bootstrap.css',
            extDot:'first'
          },
          {
            src:['app/css/bootstrap.min.css'], dest:CODEBASE_STATIC_PATH+'css/bootstrap.min.css',
            extDot:'first'
          }
        ]
      },



      // copy `OWLCarousel2` css files into the publication static css folder
      copyOWLCss:{
        files:[
          {
            src:['app/css/vendors/OwlCarousel2/'], dest:CODEBASE_STATIC_PATH+'css/vendors/OwlCarousel2/',
            extDot:'first'
          }
        ]
      },

      // copy `OWLCarousel2` js files into publication `js` files
      copyOWLCarouselJS:{
        files:[
          {
            expand:true,
            cwd:'app/js/vendors/OWLCarousel2',
            src:['**/*.js'], dest:CODEBASE_STATIC_PATH+'js/vendors/OWLCarousel2',
            extDot:'first'
          }
        ]
      },
      // copy `app.min.js` js files into publication `js` files
      copyAppJSMin:{
        files:[
          {
            expand:true,
            cwd:'app/js/min/',
            src:['**'], dest:CODEBASE_STATIC_PATH+'js/min/',
            extDot:'first'
          }
        ]
      },
      // copy `app.min.js` js files into publication `js` files
      copyAppJS:{
        files:[
          {
            expand:true,
            cwd:'app/js/',
            src:['**'],
            dest:CODEBASE_SKIN_PATH + 'js/',
            extDot:'first'
          }
        ]
      },
      copyAllJS:{
        files:[
          {
            expand:true,
            cwd:'app/dev/js/',
            src:['**'],
            dest:CODEBASE_SKIN_PATH + 'js/',
            extDot:'first'
          }
        ]
      },
      // copy `Bootstrap` js files into publication `js` files
      copyBootstrapJS:{
        files:[
          {
            expand:true,
            cwd:'app/js/vendors/bootstrap',
            src:['**'],
            dest:CODEBASE_SKIN_PATH + 'js/vendors/bootstrap',
            extDot:'first'

          }
        ]
      },
      // copy App css files into the publication static theme css folder and convert the name into theme
      copyTheme:{
        files:[
          {
            src:['app/css/app.css'], dest:CODEBASE_SKIN_PATH + 'css/app.css',
            extDot:'first'
          },
          {
            src:['app/css/app.min.css'], dest:CODEBASE_SKIN_PATH + 'css/app.min.css',
            extDot:'first'
          }
        ]
      },

      // copy custom fonts files into the publication static theme `fonts/custom` folder
      copyCustomFonts:{
        files:[
          {
            expand:true,
            cwd:'app/fonts/custom/',
            src:['**'],
            dest:CODEBASE_SKIN_PATH + 'fonts/custom/',
            extDot:'first'
          }
        ]
      },
      // copy `.jpg .png .svg .ico` files into the publication theme `img` folder
      copyImg:{
        files:[
          {
            expand:true,
            cwd:'app/img/',
            src:['**'], dest:CODEBASE_SKIN_PATH + 'img/',
            extDot:'first'
          }
        ]
      },

      // copy bootstrap fonts files into the static `fonts` folder
      copyBootstrapFonts:{
        files:[
          {
            expand:true,
            cwd:'app/fonts/bootstrap/bootstra-sass/',
            src:['**'],
            dest:CODEBASE_STATIC_PATH + 'fonts/vendor/bootstrap/',
            extDot:'first'

          }
        ]
      },
    //  copy all the HTML from `dev` folder
      copyHTML:{
        files:[
          {
            expand:true,
            cwd:'app/dev/',
            src:['**/*.html'],
            dest:CODEBASE_STATIC_PATH,
            extDot:'first'
          }
        ]
      }
    },

    // #### sc5-styleguide generator
    gulp: {
      'styleguide-generate': function() {
        var outputPath = 'output';
        return gulp.src([''])
          .pipe(styleguide.generate({
            title: 'My Styleguide',
            server: true,
            rootPath: outputPath
          }))
          .pipe(gulp.dest(outputPath));
      },
      'styleguide-applystyles': function() {
        gulp.src('main.scss')
          .pipe(styleguide.applyStyles())
          .pipe(gulp.dest('output'));
      }
    },

    // #### Groc for documentation
    // `groc` task is using [**grunt-groc**](https://github.com/jdcataldo/grunt-groc.git) to generate a usable documentation site right from your codes. It is a real time saver!
    groc: {
      default: ["README.md","bower.json.md","EditorConfig.md","Gruntfile.js","package.json.md","config.rb","CssLint.md","app/scss/app.scss"],
      options: {
        "out": "doc/",
        "index":"README.md",
        "index-page-title":"Front-End Workflow",
        "github": false,
        "repository-url": "https://github.com/themestent/front-end-workflow"
        }
    },
    // #### Jekyll - Site generator
    // `jekyll` task is using [**grunt-jekyll**](https://github.com/dannygarcia/grunt-jekyll) package to generate static site from Jekyll templates. Get some more information on [**Jekyll**](http://jekyllrb.com/).
    jekyll:{
      options:{
        src:'app/templates',
        dest:'app/dev',
        config:'app/_config.yml'
      },
      // Jekyll build on development environment
      dev:{
        dest:'app/dev',
        //include:['.htaccess'],
        keep_files:['app/dev/css/']
      },
      // Jekyll build for production environment
      webApp:{
        dest:'webapp',
        keep_files:['webapp/css/','webapp/js','weebapp/img','webapp/fonts']
      }
    },
    // #### Grunt Watch File
    watch: {
      // **Watch Sass** file changes. On any file change it will run `compass` task.
      sass: {
        files: ['app/scss/**/*.scss'],
        tasks: ['compass:dev','csscomb:dist','cssmin:devCssMin','clean:css','copy:css'],
        options:{
          livereload: true
        }
      },
      // **Watch .js** to see if our JavaScript files change, or new packages are installed and then `concat` them into `plugins.js` & `app.js`. Then we will minify these two files and keep them in `.min.js` extension.
      js: {
        files: ['app/js/app.js', 'app/js/plugins.js','app/js/**/*.js'],
        tasks:['newer:concat:plugins','newer:concat:custom','newer:uglify:dist','clean:js','copy:js']
      },
      // **Watch app/img/src** changes for responsive image converter
      img:{
      files:['app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'],
      tasks:['newer:imagemin','clean:img','copy:img']
      },
      // **Watch Jekyll Templates** for changes and build `dev` files
      jekyll:{
        files:['app/templates/**/*.html'],
        tasks:['jekyll','copy:css','copy:img','copy:js','copy:fonts']
      },
      // **Reload** the browser on any change
      livereload: {
        options: {
          livereload: true
        },
        files: ['*.html','app/dev/*.html','app/js/*.js','app/dev/**/*.html','app/dev/css/**/*.css']
      }
    },
    // **Concurrent Output** to improve the build time.
    concurrent: {
      target: {
          tasks: ['newer:compass:dev','newer:cssc','newer:concat:plugins','newer:concat:custom','uglify:dist','jekyll:dev'],
          options: {
              logConcurrentOutput: true
          }
      },
      conBuildPro: {
        tasks: ['compass:dev','concat:plugins','concat:custom','uglify:dist','csscomb:dist','cssmin:proCssMin','cssmin:devCssMin','clean:proBootstrapCss','clean:proOWLCarouselCss','clean:proThemeCss','clean:proCleanAll','copy:copyBootstrapCss','copy:copyOWLCss','imagemin:dynamic','copy:copyImg','copy:copyCustomFonts','copy:copyBootstrapFonts','copy:copyTheme','copy:copyAppJS','clean:js','clean:proAllJS','copy:copyAllJS','copy:copyHTML'],
        options: {
          logConcurrentOutput: true
        }
      },

      conBuildDev: {
        tasks: ['compass:dev','cssc','csscomb:dist','concat:plugins','concat:custom','uglify:dist','cssmin:devCssMin','imagemin','clean:img','clean:css','clean:img','copy:css','copy:js','copy:img','copy:fonts'],
        options: {
          logConcurrentOutput: true
        }
      }

    }
  });
  // ### Register Tasks
  // `grunt download` command to download all the required development resources
  grunt.registerTask('download',['bower:install']);

  // `grunt cssLint` command will run CssLint
  grunt.registerTask('cssLint',['csslint']);

  // `grunt cssSort` command will sort css files within the `app/css` directory with `csscomb` task
  grunt.registerTask('cssSort',['csscomb:dist']);
  // `grunt cssSort` command will sort css files within the `app/css/combine` directory with `csscomb` task
  grunt.registerTask('cssSortTest',['csscomb:test']);

  // `grunt cssDuplicates` command will run `csscss` task to find redundant css rules withing `app.css` file and will save the output inside **output.json** file
  grunt.registerTask('cssDuplicates',['csscss']);

  // `grunt devCss` command first check if any new **css** files to sort and will minify those to `app/dev/css` directory.
  grunt.registerTask('cssDev',['compass:dev','newer:cssc','csscomb:dist','cssmin:proCssMin','cssmin:devCssMin','clean:css','copy:css']);

  // `grunt proCss` command will create production ready css
  grunt.registerTask('cssPro',['compass:dev','newer:cssc','csscomb:dist','cssmin:proCssMin','cssmin:devCssMin','clean:proBootstrapCss','clean:proOWLCarouselCss','clean:proWFHelperClasses','clean:proThemeCss','copy:copyBootstrapCss','copy:copyWFHelperClasses','copy:copyOWLCss','imagemin:dynamic','copy:copyImg','copy:copyCustomFonts','copy:copyBootstrapFonts','copy:copyTheme']);

  // `grunt jsPro` command will Concat js files from `plugins` and `custom` folders. Then it will minify then and put them into `min` folder. Finally they will be copied into publication folder
  grunt.registerTask('jsPro',['concat:plugins','concat:custom','uglify:dist','clean:js','clean:proAllJS','copy:copyOWLCarouselJS','copy:copyAppJS','copy:copyBootstrapJS']);

  // `grunt jsDev` command will Concat js files from `plugins` and `custom` folders. Then it will minify then and put them into `min` folder
  grunt.registerTask('jsDev',['concat:plugins','concat:custom','uglify:dist','clean:js','copy:js']);


  // `grunt imgDev` optimize all the images inside img folder
  grunt.registerTask('imgDev','Optimize images',['newer:imagemin:dynamic','newer:copy:img']);

  // `grunt imgPro` optimize all the images inside img folder and copy them into publication theme img folder
  grunt.registerTask('imgPro','Optimize images for development',['imagemin:dynamic','copy:copyImg']);

  // `grunt fontsPro` copies all the fonts from `app/fonts` to publication fonts folder
  grunt.registerTask('fontsPro','copying fonts',['copy:copyCustomFonts','copy:copyBootstrapFonts']);

  // `grunt fontsDev` copies all the fonts from `app/dev/fonts` to dev fonts folder
  grunt.registerTask('fontsDev','copying fonts',['copy:fonts']);

  // `grunt doc` command will generate documentation site in **doc** directory.
  grunt.registerTask('doc','Generating documentation...',['groc']);

  // `grunt styleGuide` command to generate Style Guide of the CSS design elements
  grunt.registerTask('styleGuide', ['gulp:styleguide-generate', 'gulp:styleguide-applystyles']);

  // `grunt buildDev` command will build css, img, fonts, html from related tasks and keep them inside associated folders. It is Developer ready
  grunt.registerTask('buildDev','Building components for Dev',['concurrent:conBuildDev']);

  // `grunt buildPro` command will build css, img, fonts, html from related tasks and keep them inside associated folders. It is Developer ready
  grunt.registerTask('buildPro','Building components for Production',['compass:dev','concat:plugins','concat:custom','uglify:dist','csscomb:dist','cssmin:proCssMin','cssmin:devCssMin','clean:proBootstrapCss','clean:proOWLCarouselCss','clean:proThemeCss','clean:proCleanAll','copy:copyBootstrapCss','copy:copyOWLCss','imagemin:dynamic','copy:copyImg','copy:copyCustomFonts','copy:copyBootstrapFonts','copy:copyTheme','clean:proAllJS','copy:copyAppJS','copy:copyAllJS','copy:copyHTML','jekyll:webApp']);


  // `grunt` command will start initial build and start watching the project for changes and react
  grunt.registerTask('default','Start watching all the changes in sass, image, fonts, Jekyll html files',['concurrent:target','copy:js','copy:img','copy:css','copy:fonts','watch']);
}
