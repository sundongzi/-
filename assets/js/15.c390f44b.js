(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,s,a){"use strict";a.r(s);var i=a(45),r=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"创建ssh免密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh免密"}},[t._v("#")]),t._v(" 创建ssh免密")]),t._v(" "),a("h5",{attrs:{id:"_1-生成指定名称的密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成指定名称的密钥"}},[t._v("#")]),t._v(" 1.生成指定名称的密钥")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keygen\n")])])]),a("p",[t._v("首先 "),a("code",[t._v("ssh-keygen")]),t._v(" 会确认密钥的存储位置（默认是 "),a("code",[t._v(".ssh/id_rsa")]),t._v("），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可（直接回车）。")]),t._v(" "),a("p",[a("strong",[t._v("需要注意的是这里必须输入指定的名称，不能使用默认名称，否则会相互覆盖（这是配置多个key的重点），如：id_rsa_idss")])]),t._v(" "),a("h5",{attrs:{id:"_2-生成配置config文件-进入到电脑的-ssh-比如我的是-c-users-david-ssh-然后使用vi-config进行编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成配置config文件-进入到电脑的-ssh-比如我的是-c-users-david-ssh-然后使用vi-config进行编辑"}},[t._v("#")]),t._v(" 2.生成配置config文件   进入到电脑的.ssh  比如我的是 c/Users/David/.ssh    然后使用vi config进行编辑")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("子段")]),t._v(" "),a("th",[t._v("名称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Host")]),t._v(" "),a("td",[t._v("远程主机地址（github.com）")])]),t._v(" "),a("tr",[a("td",[t._v("IdentityFile")]),t._v(" "),a("td",[t._v("私钥的文件路径以及文件名称  可以通过pwd查看完整路径   然后后面加上文件名称")])]),t._v(" "),a("tr",[a("td",[t._v("User")]),t._v(" "),a("td",[t._v("用户名")])]),t._v(" "),a("tr",[a("td",[t._v("Port")]),t._v(" "),a("td",[t._v("远程主机上连接的端口号")])]),t._v(" "),a("tr",[a("td",[t._v("HostName")]),t._v(" "),a("td",[t._v("要登录的真实主机名称")])])])]),t._v(" "),a("p",[t._v("==PS：以上配置需要注意顺序问题==")]),t._v(" "),a("h5",{attrs:{id:"_3-复制生成的公钥到服务器上面-进入到-ssh里面-然后通过ls查看一下存在文件-然后通过cat进入到-pub的文件拷贝出来放到远程服务器上面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-复制生成的公钥到服务器上面-进入到-ssh里面-然后通过ls查看一下存在文件-然后通过cat进入到-pub的文件拷贝出来放到远程服务器上面"}},[t._v("#")]),t._v(" 3.复制生成的公钥到服务器上面，进入到.ssh里面，然后通过ls查看一下存在文件，然后通过cat进入到.pub的文件拷贝出来放到远程服务器上面")]),t._v(" "),a("h5",{attrs:{id:"_4-然后进入到本地需要关联的文件夹-git-push-git-github-com-sundongzi-daily-summary-git-注意是以git开头的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-然后进入到本地需要关联的文件夹-git-push-git-github-com-sundongzi-daily-summary-git-注意是以git开头的地址"}},[t._v("#")]),t._v(" 4.然后进入到本地需要关联的文件夹 git push git@github.com:sundongzi/daily-summary.git   ==注意是以git开头的地址==")]),t._v(" "),a("h5",{attrs:{id:"详细链接-https-blog-csdn-net-ligang2585116-article-details-79964976"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细链接-https-blog-csdn-net-ligang2585116-article-details-79964976"}},[t._v("#")]),t._v(" 详细链接：https://blog.csdn.net/ligang2585116/article/details/79964976")])])}),[],!1,null,null,null);s.default=r.exports}}]);