<div align="center">
  <img src="./public/logo.png" style="width: 128px; height: 128px;">  
</div>
<br>
<br>

<h1>react-admin-template</h1>
<h3>react + antd + vite2/webpack5 的管理后台系统方案</h3>

![](https://img.shields.io/badge/version-1.0.0-orange)
![](https://img.shields.io/github/stars/Zenquan/react-admin-template)
![](https://img.shields.io/github/forks/Zenquan/react-admin-template)
![](https://img.shields.io/github/issues/Zenquan/react-admin-template)

## 预览
[预览地址](https://react-admin-template.vercel.app/#/login)

## 账号数据
- 管理员 admin admin
- 运营 zenquan zenquan

## 技术栈
react^17 + react-router-dom^4 + less + css modules + antd^4 + axios + mobx + echarts + react-i18next

## 开始
```bash
# git clone
git clone https://github.com/zenquan/react-admin-template.git
or
git clone -b <branch> https://github.com/zenquan/react-admin-template.git

# install
npm install

# start or dev
master or master-i18n -> npm run start
vite or vite-i18n -> npm run dev

# build
npm run build
```
## 功能、组件的封装
- [x] 系统首页
- [x] 表格
  - [x] 可编辑行表格
  - [x] 拖拽排序表格
- [x] 图表
  - [x] 折线图
  - [x] 饼图
- [x] 组件
  - [x] 富文本编辑器
  - [x] Markdown
  - [x] JSON编辑器
- [x] Excel
  - [x] 导出excel
- [x] 404页
- [x] 国际化

## 分支
- webpack5:【master分支】
- webpack5国际化: 【master-i18n分支】
- vite: 【vite分支】
- vite国际化: 【vite-i18n分支】

## TODO
- [ ] 适配移动端
- [ ] 使用cra脚手架代替自己搭建的webpack脚手架
- [ ] 优化登录，增加第三方登录
- [ ] 增加权限管理
- [ ] 优化vite搭建的脚手架
