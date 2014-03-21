// # Grunt Tasks
module.exports = function(grunt) {
  // This file first matches the dependencies of all required **grunt-cli** from **package.json** file.
  "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
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
              forceLatest:true
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
            'app/css/themestent.css': 'app/css/app.css'
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
      src: ['app/css/themestent.css', 'app/css/app.css']
    },

    // #### Concatenate Multiple Files
    // `concat` task is concatenating multiple sources into a single file. Read more about it on [**grunt-contrib-concat**](https://github.com/gruntjs/grunt-contrib-concat)
    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
        stripBanners: false
      },
      bootstrap: {
        src: [
          'app/js/bootstrap-sass/transition.js',
          'app/js/bootstrap-sass/alert.js',
          'app/js/bootstrap-sass/button.js',
          'app/js/bootstrap-sass/carousel.js',
          'app/js/bootstrap-sass/collapse.js',
          'app/js/bootstrap-sass/dropdown.js',
          'app/js/bootstrap-sass/modal.js',
          'app/js/bootstrap-sass/tooltip.js',
          'app/js/bootstrap-sass/popover.js',
          'app/js/bootstrap-sass/scrollspy.js',
          'app/js/bootstrap-sass/tab.js',
          'app/js/bootstrap-sass/affix.js'
        ],
        dest: 'app/js/bootstrap.js'
      },
      plugins: {
        src: [
          'app/js/plugins/echo/echo.min.js',
          'app/js/plugins/FitVids/jquery.fitvids.js',
          'app/js/plugins/FlowTypeJS/flowtype.js'
        ],
        dest: 'app/js/plugins.js'
      },
    },
    // #### Clean Task
    // Before generating any new files, remove any previously-created files. Task name `clean`
    clean: {
      tests: {
        src:["css/csscomb/*.css","css/production-css/*.css"]
      }
    },
    // #### Minify Images
    // `imagemin` task is using [**grunt-contrib-imagemin**](https://github.com/gruntjs/grunt-contrib-imagemin) to minify project images.
    imagemin: {
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'img/'                  // Destination path prefix
        }]
      }
    },
    // #### Minify Css
    // `cssmin` task is using [**grunt-contrib-cssmin**](https://github.com/gruntjs/grunt-contrib-cssmin) to minify css files.
    cssmin: {
      minify: {
          expand: true,
          cwd: 'app/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'app/css/css-min',
          ext: '.css'
        }
    },
    // Copy Production CSS Files
    copy: {
      main: {
        files: [
        {expand: true, cwd: 'css/minify/', src: ['**'], dest: 'css/production-css/'}
        ]
      }
    },
    // #### Groc for documentation
    // `groc` task is using [**grunt-groc**](https://github.com/jdcataldo/grunt-groc.git) to generate a usable documentation site right from your codes. It is a real time saver!
    groc: {
      default: ["README.md","bower.json.md","EditorConfig.md","Gruntfile.js","package.json.md","config.rb","CssLint.md","app/js/bootstrap-sass/themestent.js","app/scss/themestent.scss"],
      options: {
        "out": "doc/",
        "index":"README.md",
        "index-page-title":"Front-End Workflow - automated process",
        "github": true,
        "repository-url": "https://github.com/themestent/front-end-workflow"
        }
    },
    // #### Grunt Watch File
    watch: {
      // **Watch Sass** file changes. On any file change it will run `compass` task.
      sass: {
        files: ['app/scss/**/*.scss'],
        tasks: ['compass:dev']
      },
      // **Watch .js** to see if our JavaScript files change, or new packages are installed and then `concat`
      js: {
        files: ['app/js/app.js', 'app/js/','app/js/bootstrap-sass/*','app/js/plugins/**/*.js'],
        tasks:['concat:bootstrap','concat:plugins']
      },
      // **Reload** the browser on any change
      livereload: {
        files: ['*.html','app/*.html','app/css/*.css','app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}', 'app/js/bootstrap-sass/{themestent.js, app.js}'],
        options: {
          livereload: true
        }
      }
    },
    // **Concurrent Output** to improve the build time.
    concurrent: {
      target: {
          tasks: ['newer:concat:bootstrap','newer:compass:dev','newer:cssc','watch'],
          options: {
              logConcurrentOutput: true
          }
      }
    },
  });
  // ### Register Tasks
  // `grunt download` command to download all the required development resources
  grunt.registerTask('download',['bower:install']);
  // `grunt lint` command will run CssLint
  grunt.registerTask('lint',['csslint']);
  // `grunt doc` command will generate documentation site in **doc** directory.
  grunt.registerTask('doc','Generating documentation...',['groc']);
  // `grunt` command will start initial build and start watching the project for changes and react
  grunt.registerTask('default','Concatenating Bootstrap .js files, starting Compass compiler and watching the project for new changes...',['concurrent:target']);
}
