# node2sql cli

## 介绍
node2sql 是一款高性能、高扩展性、功能强大的 Node.js 服务端框架，可拓展为 Web 端框架。

## 特性
- node 直连数据库
- 基于 TypeScript 开发
- 面向切面编程（AOP）
- 包含脚本轮训
- 提供 ORM、验证器、资源层、服务层、中间层等抽象层能力

## 快速开始
### 安装工具

```bash
$ nrm use hellobike // 切到内网 npm 源
$ npm install -g @hb/node2sql
```

### 创建工程

```
$ node2sql create example
$ cd example
$ npm start
```

### 示例

```bash
➜  Desktop node2sql create example
? Which one to use for development? typescript
? Which package manager you want? npm

> nodemon@2.0.7 postinstall /Users/xushunfa459/Desktop/example/node_modules/nodemon
> node bin/postinstall || exit 0

npm WARN node2sql@1.7.0 No repository field.

added 627 packages from 847 contributors and audited 628 packages in 8.881s

38 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

                  _      ____            _
  _ __   ___   __| | ___|___ \ ___  __ _| |
 | '_ \ / _ \ / _` |/ _ \ __) / __|/ _` | |
 | | | | (_) | (_| |  __// __/\__ \ (_| | |
 |_| |_|\___/ \__,_|\___|_____|___/\__, |_|
                                      |_|
Please let me know if you have any questions or concerns @xushunfa.
Done! Enjoy it!
```

当看到以上信息，恭喜你，成功了。



### 还有问题
请钉钉联系 @赵存 or @徐顺发