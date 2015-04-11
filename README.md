[![Front-End Workflow](http://themestent.cdnconnect.com/front-end-workflow.png)](http://themestent.github.io/front-end-workflow/)
---
[![Build Status](https://travis-ci.org/themestent/front-end-workflow.png?branch=master)](https://travis-ci.org/themestent/front-end-workflow) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![GitHub version](https://badge.fury.io/gh/themestent%2Ffront-end-workflow.png)](http://badge.fury.io/gh/themestent%2Ffront-end-workflow) [![Dependency Status](https://gemnasium.com/themestent/front-end-workflow.png)](https://gemnasium.com/themestent/front-end-workflow)
---
# Front-End Workflow
**Front-End Workflow** is a boilerplate for front-end developers that automates front-end development workflows. Front-End Workflow is not a framework, nor it does any automated coding for you. It rather helps you to take care of all the repeating tasks every front-end developers faces while developing their projects. Thus it gives you the freedom to concentrate more on better coding keeping other hassles a side!

<strong>Below are the content list breakdown:</strong>


- [**What is it?**](#details)
- [**Features**](#features)
- [**How to?**](#howto)



## [Built for rapid development](id:details).
Front-End developers deal with so many different tasks to deliver a perfect UI front usable for it's users and obviously the browsers. On any new project we face a common problem - [**setting up a good development platform**](https://speakerdeck.com/addyosmani/automating-front-end-workflow).

To achieve that most of us download same types of resources every time, do the redundant copy & pasting don't know how many times! We also do the browser testing, performance optimization, we need to compress images, check our css with CssLint, concatenate different JavaScript files and the list just goes on!

## [Features](id:features).
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
	* **[FitText](http://simplefocus.com/flowtype/ "A jQuery plugin for inflating web type")**: A jQuery plugin for inflating web type.
	* **[FitVids](http://fitvidsjs.com/ "jQuery plugin for fluid width video embeds.")**: A lightweight, easy-to-use jQuery plugin for fluid width video embeds.
	* **[Echo](https://github.com/toddmotto/echo "Lazy-loading images with data-* attributes")**: Echo is a standalone JavaScript lazy-loading image tool. Echo is fast, less than 1KB and uses HTML5 data-* attributes.
	* **[Neat](http://neat.bourbon.io "A lightweight semantic grid framework for Sass and Bourbon.")**: Neat is a semantic grid framework built on top of Sass and Bourbon. It is simple enough to get you up and running in minutes, and powerful enough to handle any responsive layout you can dream of.
	* **[OwlCarousel2](https://github.com/OwlFonk/OwlCarousel2 "Touch enabled jQuery plugin that lets you createbeautiful responsive carousel slider.")**: Touch enabled jQuery plugin that lets you create a beautiful *responsive carousel slider*.
     * **Add finding  ....

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
	* LiveReload and Watch for changes and reload browser automatically.

## [How to use](id:howto)?
Make sure you have [**Node.js**](http://nodejs.org/download/) installed.

Open your terminal and clone [**Front-End-Workflow**](https://github.com/themestent/front-end-workflow.git) repository.

`git clone https://github.com/themestent/front-end-workflow.git`

You can also use GUI tools for [**Mac**](https://mac.github.com) or [**Windows**](https://windows.github.com). You will need to use terminal anyway! Better get used to it!!

When you are done with the cloning get into the directory:
`cd front-end-workflow`
Now type `ls` just to have an overview on what you will be working with?

You will see two directories called `app` and `doc`. We will work on this directory for our front-end development process. `doc` has been automatically generated which you will be doing so very soon! But First let's try the following line on our terminal:
`npm install`

This command will start downloading all the depended libraries and packages defined into `package.json` file into a newly created *`node_modules`* directory. Downloaded packages are only available and works for the current project only.

When `npm install` finished downloading all it's packages you can run following line `npm ls` to see all the available packages downloaded inside `node_modules`. That tree view looks amazing right? It holds all types of dependencies we have mentioned on `package.json` file. Each of those packages has it's own role and certain tasks to process.

### Download Front-End Resources

Ok now we have all required node modules installed locally for this project and we are ready to download some resources, files that we actually will require for Front-End Development project. In this workflow I will be using [**Twitter Bootstrap scss**](http://getbootstrap.com/css/#sass) files, [**Bourbon**](http://bourbon.io "Sass Mixins Library") - Sass Mixins Library, Some *JavaScript plugins* like ***FitText***, ***FitVids***, ***Echo*** etc. I want those to download and place those automatically into right directory according file type.

We can do this by typing following line on terminal:

`grunt download`

If you don't get any unwanted alien like error you will see line like these:
<pre><code>Running "bower:install" (bower) task
>> Installed bower packages
>> Copied packages to /Users/evanshajed/Working Projects/front-end-workflow/app
>> Cleaned bower dir /Users/evanshajed/Working Projects/front-end-workflow/components

Done, without errors.
</code></pre>

Get inside `app` directory and you will see all the files are downloaded and placed to their right destination according to their file type. Then finally you will need to start grunt task to watch and build whenever any changes occurs in files or directories mentioned in **Gruntfile.js**. To start this task type this line:

`grunt`

You will then see several process starts running and waiting for changes. Start your usual development process inside `app` directory. Just to get used to this workflow start with **`index.html`** file. Include some image inside **`img`** or make some changes inside **`scss`** files. **Grunt** will generate, concatenate `.js` files, build `scss` to `css` files and reload the browser for you.

---

Last Edited on: 10 April 2014.

---

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Front-End Workflow</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://about.me/evanshajed" property="cc:attributionName" rel="cc:attributionURL">Shajed Evan</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://themestent.github.io/front-end-workflow/" rel="dct:source">http://themestent.github.io/front-end-workflow/</a>.
***
<script type="text/javascript">
var script = document.createElement("script");
script.innerHTML = "var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-43486757-2']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();";
document.head.appendChild(script);
  </script>




