# CSSLint
We can automatically point out problems with our `CSS` code with **[CSSLint](https://github.com/stubbornella/csslint)** which does *syntax* checking with a set of defined **[pluggable rules](https://github.com/stubbornella/csslint/wiki/Rules)**. **CssLint** tries to find problematic patterns, possible errors, compatibility problems across browsers or performance inefficiencies in your written codes.

**[Front-End-Workflow](https://github.com/themestent/front-end-workflow/blob/master/Gruntfile.js)** created a task called **`lint`** to automate this process using **[grunt-contrib-csslint](https://npmjs.org/package/grunt-contrib-csslint)** package. Rules are defined in **[.csslintrc](https://github.com/themestent/front-end-workflow/blob/master/.csslintrc)** file.

```
{
  "adjoining-classes": false,
  "box-sizing": false,
  "box-model": false,
  "compatible-vendor-prefixes": false,
  "floats": false,
  "font-sizes": false,
  "gradients": false,
  "important": false,
  "known-properties": false,
  "outline-none": false,
  "qualified-headings": false,
  "regex-selectors": false,
  "text-indent": false,
  "unique-headings": false,
  "universal-selector": false,
  "unqualified-attributes": false
}
```
***
***
*3 January 2014, 17:38*
<script type="text/javascript">
var script = document.createElement("script");
script.innerHTML = "var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-43486757-2']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();";
document.head.appendChild(script);
  </script>
