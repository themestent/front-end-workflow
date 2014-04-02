# Bower Package Manager
In this file All the necessary project resources has been defined as dependencies. You can include your own resources for your own project. You can find many popular packages in **[Bower registry lists](http://sindresorhus.com/bower-components/)**.

*Name of the Package Manager* **[Front-End-Workflow](http://themestent.github.io/front-end-workflow/)**

```
{
   "name": "front-end-workflow",
   "version": "0.1.1",
	"homepage": "http://framework.themestent.com",
	"main":[ "css/app.css","css/themestent.css"],
```

Ignore wanted files and folders:

```
	"ignore": [
      ".jshintrc",
      "**/*.txt",
      ".sass-cache",
      "codekit-config.json"
    ],
```
List all the project dependencies

```
    "dependencies": {
	    "jquery": "*",
	    "bootstrap-sass": "*",
	    "requirejs": "*",
	    "typeplate": "*",
	    "bourbon":"*",
	    "html5shiv":"*",
	    "respond":"*",
	    "FlowTypeJS":"*",
	    "FitVids":"*",
      "colors":"*",
	    "echo":"https://github.com/toddmotto/echo.git",
      "neat":"https://github.com/thoughtbot/neat.git",
      "mixitup":"https://github.com/patrickkunka/mixitup.git"
	  },
```
Downloaded packages will be copied inside **app** directory *'byType'*. With `"exportsOverride"` we are controlling the files of each packages towards it's defined destination. `"exportsOverride"` is quite a relief for developers as it gives us the ability to control and download only required files or folders rather than pulling down whole components. Get more detailed idea about **[exportsOverride](https://github.com/yatskevich/grunt-bower-task#advanced-usage)**.

```
"exportsOverride": {
    "bootstrap-sass": {
      "js": "js/*.js",
      "scss": "lib/*.scss",
      "img": ["img/*.png","img/*.jpg"]
    },
    "bourbon": {
      "scss": "app/assets/stylesheets/"
    },
    "typeplate":{
      "scss":"scss/*.scss"
    },
    "colors":{
      "scss":"sass/*.scss"
    },
    "FlowTypeJS": {
      "js/plugins": "flowtype.js"
    },
    "FitVids": {
      "js/plugins": "jquery.fitvids.js"
    },
    "requirejs": {
      "js": "require.js"
    },
    "jquery":{
      "js":"*.js"
    },
    "html5shiv":{
      "js":"dist/html5shiv.js"
    },
    "respond":{
      "js":"respond.min.js"
    },
    "echo":{
      "js/plugins":"dist/echo.min.js"
    },
    "neat":{
      "scss":"app/assets/stylesheets/"
    },
    "mixitup":{
      "js/plugins":"build/jquery.mixitup.min.js "
    }
  }
 }
```
<script type="text/javascript">
var script = document.createElement("script");
script.innerHTML = "var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-43486757-2']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();";
document.head.appendChild(script);
  </script>
