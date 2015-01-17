使用说明

## 快速启动
```sh
$ git clone https://github.com/guanghetv/video-selector.git
$ cd video-selector
$ sudo npm -g install grunt-cli bower
$ npm install
$ bower install
$ grunt watch
```
## 开发目录

src文件夹，如果需要引第三方库的话，先在bower.json添加，然后在build.config.js文件最下方的vendor_files添加。当然直接写在index.html也可以

## 打开index.html
grunt watch之后，在 webstorm中找到build文件夹，找到index.html，右击选择 “open in browser -- > chrome”
因为 grunt watch可以检测变动实时编译，所以修改代码后，只需稍等片刻刷新index.html即可快速调试
