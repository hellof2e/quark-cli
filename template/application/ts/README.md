# node2mysql

## 本地开发
```
npm run dev
```

## 须知
-[] 修改 Makefile 中的项目名称
-[] 修改 check.sh 中项目名称
-[] 申请数据 token、填入 src/config/db.ts

## 技术栈

### Mysql 数据库
- 1、申请 token，http://fat-auth-ops.hellobike.cn/#/token/db
- 2、根据数据库 token 接口请求 db 配置信息
- 3、使用 typeORM 链接数据库

### swagger 接口文档

项目启动后访问：
```
http://localhost:3000/swagger-html
```
### typeorm

TypeORM可以做到：

根据 `Models` 自动创建数据库 `Table`
可以透明的 `insert/update/delete` 数据库对象
映射数据库 `table` 到 `javascript` 对象，映射 `table column`到 `javascript` 对象属性
提供表的一对一，多对一，一对多，多对多关系处理

#### 使用 `EntityManager` 可以操作实体

```
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";

createConnection(/*...*/).then(async connection => {

    /*...*/
    let savedPhotos = await connection.entityManager.find(Photo);
    console.log("All photos from the db: ", savedPhotos);

}).catch(error => console.log(error));
```

#### 使用Repositories

现在重构下代码，使用Repository来代替EntityManage。每个实体都有自己的repository，可以对这个实体进行任何操作。
如果要对实体做很多操作，Repositories会比EntityManager更加方便。
```
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";

createConnection(/*...*/).then(async connection => {

    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    let photoRepository = connection.getRepository(Photo);

    await photoRepository.persist(photo);
    console.log("Photo has been saved");

    let savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos);

}).catch(error => console.log(error));
```

#### 从数据库中取photos

用Repository做一些取数据方面的操作:
```
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";

createConnection(/*...*/).then(async connection => {

    /*...*/
    let allPhotos = await photoRepository.find();
    console.log("All photos from the db: ", allPhotos);

    let firstPhoto = await photoRepository.findOneById(1);
    console.log("First photo from the db: ", firstPhoto);

    let meAndBearsPhoto = await photoRepository.findOne({ name: "Me and Bears" });
    console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

    let allViewedPhotos = await photoRepository.find({ views: 1 });
    console.log("All viewed photos: ", allViewedPhotos);

    let allPublishedPhotos = await photoRepository.find({ isPublished: true });
    console.log("All published photos: ", allPublishedPhotos);

    let [allPhotos, photosCount] = await photoRepository.findAndCount();
    console.log("All photos: ", allPublishedPhotos);
    console.log("Photos count: ", allPublishedPhotos);

}).catch(error => console.log(error));
```

#### 更新photo

从数据库中取出一个photo，修改并更新到数据库。
```
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";

createConnection(/*...*/).then(async connection => {

    /*...*/
    let photoToUpdate = await photoRepository.findOneById(1);
    photoToUpdate.name = "Me, my friends and polar bears";
    await photoRepository.persist(photoToUpdate);

}).catch(error => console.log(error));
```

#### 删除photo

```
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";

createConnection(/*...*/).then(async connection => {

    /*...*/
    let photoToRemove = await photoRepository.findOneById(1);
    await photoRepository.remove(photoToRemove);

}).catch(error => console.log(error));
```

#### (一对一关系)[https://cloud.tencent.com/developer/article/1012625]
#### (存一个有一对一关系的对象)[https://cloud.tencent.com/developer/article/1012625]
#### (双向关系)[https://cloud.tencent.com/developer/article/1012625]
#### (取出关系对象的数据)[https://cloud.tencent.com/developer/article/1012625]
#### (使用 cascade 选项来自动保存关系着的对象)[https://cloud.tencent.com/developer/article/1012625]
#### (多对一/一对多关系)[https://cloud.tencent.com/developer/article/1012625]
#### (多对多关系)[https://cloud.tencent.com/developer/article/1012625]
#### (使用QueryBuilder)[https://cloud.tencent.com/developer/article/1012625]

#### 实体（entity）是什么？

在TypeORM中，数据库 table 都是从实体中创建。

在TypeORM中实体是程序对数据库表的描述，我们可以通过实体在数据库中生成对应的数据表。
entity 被 controller 使用！

```
@Column({ comment: '性别', type: 'enum', enum: SexRole, default: SexRole.BOY })  // 枚举
  sex: SexRole

@Column("simple-array")  // 数组
names: string[];

@Column("simple-json")  // 对象
profile: { name: string; nickname: string };

@Column({unique:true})  // 唯一
@Generated("uuid") // 自动生成列
token: string;
```

### [class-validator](https://github.com/typestack/class-validator#usage) 

#### class-validator 怎么用？
Create your class and put some validation decorators on the properties you want to validate:
```
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

export class Post {
  @Length(10, 20)
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}

let post = new Post();
post.title = 'Hello'; // should not pass
post.text = 'this is a great post about hell world'; // should not pass
post.rating = 11; // should not pass
post.email = 'google.com'; // should not pass
post.site = 'googlecom'; // should not pass

validate(post).then(errors => {
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log('validation failed. errors: ', errors);
  } else {
    console.log('validation succeed');
  }
});

validateOrReject(post).catch(errors => {
  console.log('Promise rejected (validation failed). Errors: ', errors);
});
// or
async function validateOrRejectExample(input) {
  try {
    await validateOrReject(input);
  } catch (errors) {
    console.log('Caught promise rejection (validation failed). Errors: ', errors);
  }
}
```

#### validation errors

如果有错误，返回一个非空数组
```
[{
    target: /* post object */,
    property: "title",
    value: "Hello",
    constraints: {
        length: "$property must be longer than or equal to 10 characters"
    }
}, {
    target: /* post object */,
    property: "text",
    value: "this is a great post about hell world",
    constraints: {
        contains: "text must contain a hello string"
    }
},
// and other errors
]
```

## 项目分层（探索中）

一、entity 层
同类： model层 = entity层 = domain层
作用： 用于存放我们的实体类，与数据库中的属性值基本保持一致。

二、dao 层
同类： dao层 = mapper层
作用： 对数据库进行数据持久化操作，他的方法语句是直接针对数据库操作的

三、service 层
同类： 只有一个 service 层(业务层、biz)
作用： service层，给 controller 层的类提供接口进行调用。

四、controller 层
同类： controller层 = web 层
作用： 控制器，导入 service 层，因为 service 中的方法是我们使用到的，controller 通过接收前端传过来的参数进行业务操作，再将处理结果返回到前端。
