# react-admin-template

> react + antd + vite2/webpack5 的管理后台系统方案

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
- vite国际化: 【vite-i18分支】

## TODO
- [ ] 抽离出Layout的Header、Footer组件
- [ ] 适配移动端
