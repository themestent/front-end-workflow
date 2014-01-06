[![Build Status](https://travis-ci.org/themestent/front-end-workflow.png?branch=master)](https://travis-ci.org/themestent/front-end-workflow) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![GitHub version](https://badge.fury.io/gh/themestent%2Ffront-end-workflow.png)](http://badge.fury.io/gh/themestent%2Ffront-end-workflow) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/themestent/front-end-workflow/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Total views](https://sourcegraph.com/api/repos/github.com/themestent/front-end-workflow/counters/views.png)](https://sourcegraph.com/github.com/themestent/front-end-workflow) [![status](https://sourcegraph.com/api/repos/github.com/themestent/front-end-workflow/badges/status.png)](https://sourcegraph.com/github.com/themestent/front-end-workflow) [![Dependency Status](https://gemnasium.com/themestent/front-end-workflow.png)](https://gemnasium.com/themestent/front-end-workflow)

# Front-End Workflow
**Front-End Workflow** is a boilerplate for front-end developers that automates front-end development workflows. Front-End Workflow is not a framework, nor it does any automated coding for you. It rather helps you to take care of all the repeating tasks every front-end developers faces while developing their projects. Thus it gives you the freedom to concentrate more on better coding keeping other hassles a side!

## Built for rapid development.
Front-End developers deal with so many different tasks to deliver a perfect UI front usable for it's users and obviously the browsers. On any new project we face a common problem - [**setting up a good development platform**](https://speakerdeck.com/addyosmani/automating-front-end-workflow).

To achieve that most of us download same types of resources every time, do the redundant copy & pasting don't know how many times! We also do the browser testing, performance optimization, we need to compress images, check our css with CssLint, concatenate different JavaScript files and the list just goes on!

## Features
**Front-End Workflow** package comes up with features that helps you to be more productive yet efficient! Below you will find the dependencies included in this package.

### Resources
Resources used in this project gives Front-End developers a common platform to kickstart with new projects. **Please note**: you can include your required resources for your project at anytime.

1. [**Bower Package Controller**](http://bower.io/ "Bower Package Manager for the Web") downloads necessary **JavaScript plugins**, **HTML framework**, **Css** files, **Fonts**, **Images** or other components right into your project according to their file type within sorted directories. It downloads:
	* **[Bootstrap 3 with Sass](https://github.com/twbs/bootstrap-sass "Bootstrap-Sass")**
	* Latest stable version of **jQuery**
	* **[Require.js](http://requirejs.org/ "Modular Script Loader")**: A JavaScript modle loader with nested dependencies. Rather than loading all the scripts used in website, it only calls scripts that required only for a specific page. **Reducing HTTP calls** which leads to **better performances**.
	* **[Typeplate](http://typeplate.com/ "Typographic starter kit")**:A Typographic starter kit
	* **[Bourbon](http://bourbon.io/ "A simple and lightweight mixin library for Sass.")**: A simple and lightweight mixin library for Sass.
	* **[html5shiv](https://github.com/aFarkas/html5shiv "The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explore")**: The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explore
	* **[Respond.js](https://github.com/scottjehl/Respond "Polyfill for media queries")**: A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)
	* **[FlowTypeJs](http://simplefocus.com/flowtype/ "font-size and line-height based on element width")**: Web typography at its finest: font-size and line-height based on element width.
	* **[FitVids](http://fitvidsjs.com/ "jQuery plugin for fluid width video embeds.")**: A lightweight, easy-to-use jQuery plugin for fluid width video embeds.
	* **[Echo](https://github.com/toddmotto/echo "Lazy-loading images with data-* attributes")**: Echo is a standalone JavaScript lazy-loading image tool. Echo is fast, less than 1KB and uses HTML5 data-* attributes.

	You can add your dependency packages required for your project in `bower.json`file. To control downloaded resources copied into it's right directory according their	 file type `"exportsOverride": {}` has been used. Get some more ideas about different options at **[grunt-bower-task](https://github.com/yatskevich/grunt-bower-task)**.

2. [**Grunt - JavaScript Task Runner**](http://gruntjs.com/) is used to configure all the repeating tasks like magnification, concatenation, linking, compress, live reload, combine, merge and list goes on. But for this package I have used few most common tasks runner. I will increase the list progressively. Lets Have a look at lists defined in [**package.json**](package.json.html) file.

	You may like to do some searching to get your task CLI for your project too! Find it on [**Grunt.js Plugin list**](http://gruntjs.com/plugins)

3. [**Generate Documentation**](https://github.com/jdcataldo/grunt-groc): Generate a project documentation automatically and publish it into your [**GitHub Pages**](http://pages.github.com) using [**Groc**](http://nevir.github.com/groc/). In our workflow we are loading a simple task plugin [**grunt-groc**](https://github.com/jdcataldo/grunt-groc).
4. **And More**: **Front-End Workflow** is still getting it's shape for a complete version. There are more features which will be added over time and the list may grow bigger. For a simple setup and to make this project easily adoptable for other developers few other common features are included. Like:
	* CssComb
	* Cssmin
	* Uglify
	* CssLint
	* **ImageMin** (Minify Images using [**grunt-contrib-imagemin**](https://npmjs.org/package/grunt-contrib-imagemin))
	* LiveReload and Watch for changes

## How to use?
 

## More on Front-End Workflow
You can get detailed analytical data on built status, usage rate, dependency levels and much more on **[Sourcegraph](https://sourcegraph.com/github.com/themestent/front-end-workflow)**

---

Last Edited on: 6 January 2014.

---

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Front-End Workflow</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://about.me/evanshajed" property="cc:attributionName" rel="cc:attributionURL">Shajed Evan</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://themestent.github.io/front-end-workflow/" rel="dct:source">http://themestent.github.io/front-end-workflow/</a>.
***
<script type="text/javascript">
var script = document.createElement("script");
script.innerHTML = "var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-43486757-2']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();";
document.head.appendChild(script);
  </script>




