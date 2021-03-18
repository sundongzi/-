(self.webpackChunkdaily_summary=self.webpackChunkdaily_summary||[]).push([[1014],{5261:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-7347e28c",path:"/%E5%8D%9A%E5%AE%A2%E5%AD%A6%E4%B9%A0/%E5%8E%9F%E5%9E%8B%E5%88%B0%E5%8E%9F%E5%9E%8B%E9%93%BE.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"博客学习/原型到原型链.md",git:{updatedTime:1615448503e3,contributors:[{name:"sundong",email:"sundong@idss-cn.com",commits:1}]}}},238:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 构造函数</span>\n<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 实例化对象person</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="prototype"><a class="header-anchor" href="#prototype">#</a> prototype</h4><p>每个<code>函数</code>都有一个<code>prototype</code>属性</p><h4 id="proto"><a class="header-anchor" href="#proto">#</a> <code>__proto__</code></h4><p>每一个<code>javascript对象(除了null)</code>都具有一个<code>__propto__</code>属性,这个属性指向该对象的原型.绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.<strong>proto</strong> 时，可以理解成返回了 <code>Object.getPrototypeOf(obj)</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 构造函数</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span> <span class="token comment">// 实例对象</span>\nperson<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype  <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="constructor"><a class="header-anchor" href="#constructor">#</a> Constructor</h4><p>每一个<code>原型</code>都有一个<code>constructor</code>属性指向关联的构造函数.对于引用类型来说，这个值是可以修改的，对于基本类型来说是只读的.<code>null</code>和<code>undefined</code>没有<code>constructor</code>属性.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nPerson <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor  <span class="token comment">// true</span>\nperson<span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor  <span class="token comment">// true  // 当不能直接读取是，则从原型链上获取</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="实例与原型"><a class="header-anchor" href="#实例与原型">#</a> 实例与原型</h4><p>当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果查不到，就去找原型的原型，一直到顶层为止.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nperson<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;sun&#39;</span>\nperson<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;dong&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment">// dong</span>\n<span class="token keyword">delete</span> person<span class="token punctuation">.</span>name\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// sun</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="原型的原型"><a class="header-anchor" href="#原型的原型">#</a> 原型的原型</h4><p>原型对象就是通过Object构造函数生成的,实例的<code>__proto__</code>指向构造函数的<code>prototype</code></p><h4 id="原型链"><a class="header-anchor" href="#原型链">#</a> 原型链</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span>  <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>![image-20200511152028931](/Users/sundong/Library/Application Support/typora-user-images/image-20200511152028931.png)</p>',17),p={render:function(n,s){return e}}}}]);