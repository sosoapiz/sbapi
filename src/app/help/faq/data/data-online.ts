export const ARTICLES_ONLINE = [
    {
        title: '如何在线编辑？',
        content: `在线编辑说明文档`
    },
    {
        title: '请求参数和响应参数支持的数据类型有哪些？',
        content: `目前支持的数据类型如下：
        
        string:字符串类型
        array:数组类型，子项只能是支持的数据类型中的一种，不能添加多个
        object:对象类型，只支持一级属性，不支持嵌套，嵌套可以通过在属性中引入ref类型的对象或自定义数据格式
        int:短整型
        long:长整型
        float:浮点型
        double:浮点型
        decimal:精确到比较高的浮点型
        ref:引用类型，即引用定义好的数据结构，共用数据结构`
    },
    {
        title: '请求参数中的"参数位置"如何区别使用？',
        content: `目前支持的类型如下：
        
        body：http请求body
        cookie：本地cookie
        formData：表单参数
        header：http请求header
        path：http请求url,如getInfo/{userId}
        query：http请求拼接，如getInfo?userId={userId}`
    },
    {
        title: '请求参数和请求响应如何定义复合数据结构？',
        content: `目前请求参数仅当"参数位置"为"body"时才可使用复合结构。
        
        假设需要定义如下复合数据结构的请求响应
        
        {
            "errorCode":"string",
            "data"：{
                "totalCount":"int",
                "list":[
                    {
                        "userId":"long",
                        "nickName":"string"
                    }
                ]
            }
        }
        目前有3种方式
        
        引用方式多层嵌套
        该方式类似于面向对象编程中的复合对象，通过嵌套对象来实现复杂结构。
        
        采用该方式，首先需要在项目管理中的"数据结构"定义一个名为"UserInfo"的类型为"object"的数据结构， 包含属性"userId"和"nickName"，类型分别为"long"和"string"
        
        然后在"数据结构"中定义一个名为"Data"的类型为"object"的数据结构，包含属性"totalCount"，类型为"int"， 以及属性"list",类型为"array"且内置属性为指向"UserInfo"的"ref"类型。
        
        最后，在接口"响应信息"中创建一个名为"default"的类型为"object"的数据结构，包含属性"errorCode"，类型为"string"， 以及属性"data",类型为指向"Data"的"ref"类型。
        
         
        非引用方式多层嵌套
        定义一个名为"UserInfo"的类型为"object"的数据结构，然后按对应的数据结构添加节点(右键菜单)即可。
        
         
        自定义格式
        该方法相对比较简单，只要在接口"响应信息"中创建一个名为"result"的类型为"自定义"的数据结构，并将上述复合结构当做属性值即可。
        综上，2种方法中，第1种相对复杂，特别是嵌套层次比较多。第2种完全由用户自定义，简单明了。
        
        故复合结构推荐使用自定义格式。`
    },
    
];
