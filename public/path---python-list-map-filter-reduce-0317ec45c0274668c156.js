webpackJsonp([0xadbf8f7afdcbf800],{"./node_modules/json-loader/index.js!./.cache/json/python-list-map-filter-reduce.json":function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Map,Reduce &#x26; Filter</h1>\n<p>Most engineers work with lists to process list of orders/users etc. Analyzing lists can get complex and cluttered quickly if using multiple for-loops and nested loops. Hence these above methods can streamline usage of list operations.</p>\n<h2>Map</h2>\n<p>If your task is to apply a specific method to each element of a list, map will come in handy. Say, you have a list of degree values and you’d like to convert all these values into list of values in Fahrenheit units. </p>\n<h4>Example Usage</h4>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>inputs = [10,32,5,40,25]\n\ndef degreesToFahren(deg):\n    fahrenheit = (9.0/5)*deg +32\n    return fahrenheit\n\n# The most common way of doing this    \nresult=[]\nfor i in inputs:\n\tiTofahren = degreesToFahren(i)\n\tresult.append(iTofahren)\nprint(result)   # [50.0, 89.6, 41.0, 104.0, 77.0]</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code># Using Map\nresult = list(map(degreesToFahren,inputs))\nprint(result) # [50.0, 89.6, 41.0, 104.0, 77.0]\t\n </code></pre>\n      </div>\n<p> As you might have noticed, using map is simply a one liner operation. Generally,  if you have data = <code>[a1,a2,...,an]</code> and a function <code>f()</code>, then <code>map(f,data):</code>returns an iterator over <code>f(a1),f(a2)...f(an).</code> use <code>list()</code> to convert the iterator object into a python list.\n</p>\n<h2>Filter</h2>\n<p>Filter function removes data in a list that you need/don’t need , hence the name.  Say, you want to filter a list based on values that you don’t need, eg values above 2.</p>\n<h4>Example Usage</h4>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>data = [1.2,2.5,5.8,0.4,4.7,9.9]\nresult = list(filter(lambda x:x > 2,data))  \nprint(result) </code></pre>\n      </div>\n<h4>Output</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>[2.5, 5.8, 4.7, 9.9]</code></pre>\n      </div>\n<p> This is also a simple 1 liner similar to the map() function above. Refer to tutorial on lambda functions if you find this term unfamiliar.</p>\n<h2>Reduce</h2>\n<p> From creator of Python, Guido van Rossum\n<code>"Use functools.reduce if you really need it; however, 99% of the time an explicit for loop is more readable"</code></p>\n<p>What it generally does is apply a function <code>f()</code> to elements of data in a list and use that result for the next value in the list.\nVisually,</p>\n<p>Data = [a<sub>1</sub>,a<sub>2</sub>,…,a<sub>n</sub>]\nfunction = f(x,y)</p>\n<p>reduce(f,data):\nStep 1: val<sub>1</sub> = f(a<sub>1</sub>,a<sub>2</sub>)\nStep 2: val<sub>2</sub> = f(val<sub>1</sub>,a<sub>3</sub>)\nStep 3: val<sub>3</sub> = f(val<sub>2</sub> ,a<sub>4</sub>)\n…\nStep n-1: val<sub>n-1</sub> = f(val<sub>n-2</sub>,a<sub>n</sub>)</p>\n<p>For example, you want to multiply all numbers in a list.  </p>\n<h4>Example Usage</h4>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>from functools import reduce\n\ninput = [1,2,3,4,5,6]\nmultiplier = lambda x,y:x*y\nanswer = reduce(multiplier,input) \nprint(answer)</code></pre>\n      </div>\n<h4>Output</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>720</code></pre>\n      </div>\n<p> However, the above could be computed using a simple for loop and usage of these methods are subject to preference. </p>\n<h4>More Information:</h4>\n<p>The official documentation for the above methods can be found  at <a href="http://book.pythontips.com/en/latest/map_filter.html">http://book.pythontips.com/en/latest/map_filter.html</a></p>',fields:{slug:"/python/list-map-filter-reduce/"},frontmatter:{title:"Map, Reduce, Filter"}}},pathContext:{slug:"/python/list-map-filter-reduce/"}}}});
//# sourceMappingURL=path---python-list-map-filter-reduce-0317ec45c0274668c156.js.map