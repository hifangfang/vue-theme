## 私库地址

```
node 私仓地址: http://192.168.11.146:8073/#browse/browse:npm-internal  
```

## 打包   

```
npm run build
```

## 登录（首次须登录）

```
npm login --registry=http://192.168.11.146:8073/repository/npm-internal/  
```
账号/密码/邮箱（自己的，随便写也行）  uploader/uploader@123  xxxxx@qq.com

## 发布     

先 package.json 里修改版本号

```  
npm publish --registry=http://192.168.11.146:8073/repository/npm-internal/
```
