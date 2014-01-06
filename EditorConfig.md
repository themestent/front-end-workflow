# EditorConfig
Including [**EditorConfig**](http://editorconfig.org) file to maintain a consistent coding styles between different editors and IDEs. Contribution is growing in great numbers and we already have [**plugin for popular IDEs and editors**](http://editorconfig.org/#download). 

If you never heard of EditorConfig before, please read this article [**Maintain Consistent Coding Styles Between Different Editors and IDEs**](http://www.topbug.net/blog/2012/03/14/use-editorconfig-to-maintain-consistent-coding-styles-between-different-editors-and-ides/) written by [**Hong-Xu**](http://www.topbug.net/) one of the co-creator of EditorConfig.

Here are the settings used in Front-End Workflow project **`.editorconfig`** file:

```
# editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.py]
indent_style = space
indent_size = 4
```

---
6 January 2014 15:57

<script type="text/javascript">
var script = document.createElement("script");
script.innerHTML = "var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-43486757-2']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();";
document.head.appendChild(script);
  </script>
