## 微信小程序--头条新闻
#### 项目说明
微信小程序: 实现一个头条新闻

数据来源: 所有数据来源于[聚合数据](https://www.juhe.cn/)
#### 项目效果
![img](https://github.com/KuangPF/wxAPP_toutiaoNews/blob/master/img/demo1.png)
![img](https://github.com/KuangPF/wxAPP_toutiaoNews/blob/master/img/demo2.png)
![img](https://github.com/KuangPF/wxAPP_toutiaoNews/blob/master/img/demo3.png)
![img](https://github.com/KuangPF/wxAPP_toutiaoNews/blob/master/img/demo4.png)
#### 项目提示
由于后台返回数据的限制，新闻详情页只返回了一个链接，故不能有效的展示好详情页的新闻。小程序在2017年推出了`webview`的新功能，本以为可以将链接里面的内容直接展示出来，但是有个问题就是如果需要使用`webview`，那么需要在链接的根域名下放置域名校验文件，由于没有权限操作，因此`webview`这个功能暂没实现...

该项目暂没有线上版本，如需要可自己`git clone`然后提交微信进行审核，从而发布线上版本