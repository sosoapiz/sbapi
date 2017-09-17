export const ARTICLES_TEST = [
    {
        title: '为何执行测试后返回"no response from server"？',
        content: `
        如果执行测试后的效果页和js调试窗口的错误信息如如下2个截图所示，则表示服务端未处理ajax跨域请求。
        
        请求响应：
        
        
         
        
        js调试控制台：



        `
    },
    {
        title: '什么是ajax跨域请求？',
        content: `
        概念：只要协议、域名、端口有任何一个不同，都被当作是不同的域。
        
        ajax跨域请求相关知识点可参考文章： 详解js跨域问题    跨域资源共享(CORS)安全性浅析
        
        事例如下

        `
    },
    {
        title: '接口测试时如何处理ajax跨域请求？',
        content: `
        ajax跨域请求相关知识点可参考文章： 详解js跨域问题    跨域资源共享(CORS)安全性浅析
        
        跨域处理目前有如下几种方式：
        
        1、服务端设置允许跨域
        以java为例，跨域请求服务端可以通过添加过滤器设置HttpServletResponse中的header来处理，部分源码如下:
        
        @Override
        public void doFilter(ServletRequest request, ServletResponse response,
                FilterChain chain) throws IOException, ServletException {
            HttpServletResponse resp = (HttpServletResponse)response;
            //"*"存在风险，建议指定可信任的域名来接收响应信息，如"http://www.sosoapi.com"
            resp.addHeader("Access-Control-Allow-Origin", "*");
            //如果存在自定义的header参数，需要在此处添加，逗号分隔
            resp.addHeader("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, "
                    + "If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, "
                    + "Content-Type, X-E4M-With");
            resp.addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");  
            resp.addHeader("Access-Control-Allow-Credentials", "true");
            
            chain.doFilter(request, response);
        }
        2、线下部署
        参考线下部署章节。
        
        3、部署代理服务器
        由交流群群友提供，在ajax请求和后台服务器直接添加代理服务器，在代理服务器设置跨域需要的头信息，流程大概为:ajax->proxy->服务器。
        
        4、浏览器屏蔽跨域安全检查
        以chrome为例，可参考http://www.tuicool.com/articles/AjuqA3。 如果添加"--disable-web-security --user-data-dir"无效的话，重启下浏览器并确保所有chrome后台进程已被关闭，重启后再次访问就可以了
        
        5、浏览器添加伪造Access-Control-Allow-Origin的插件(建议)
        由交流群群友提供，以chrome为例，下载Access-Control-Allow-Origin插件。
        `
    },
    {
        title: '什么是mock服务？',
        content: `
        背景：
        
        在实际项目开发协同过程中，特别是前后端由不同开发人员开发时，前端接口联调必须要等后端接口开发完成后才可以。这种方式使得前端极大的依赖 于后端，使得原本可以并行的工作被阻塞了，特别是流程性质的功能。mock服务就是一种可以提供给前端联调测试并返回约定结构而不依赖于服务端的服务。在服务端未开发完，可以先 使用mock功能，等后端开发完后只需切换请求基地址即可调用到真实的后端服务。
        
        示例说明：
        
        真实的后端接口：http://www.sosoapi.com/user/add.htm
        mock接口：http://www.sosoapi.com/mock/user/add.htm 
        那么在实际调用过程中就可以将接口设置为由基路径+请求路径组成，如"{baseUrl}/user/add.htm"， 调用真实接口时，设置baseUrl为"http://www.sosoapi.com",调用mock服务时，设置baseUrl为"http://www.sosoapi.com/mock"。在后端接口 未开发完成时使用mock服务，开发好后再切换回去即可。
        `
    },
    {
        title: '如何使用mock服务？',
        content: `
        接口响应配置相关的mock信息：
        
        静态数据:目前支持json格式数据，每次mock返回填写的固定数据
        mock规则:调用返回的mock数据为根据规则动态生成，规则同mockjs规则。
        配置mock基地址，进入项目详情点击"mock设置"即可看到该项目的mock地址和启用开关。其中
        
        mock基地址：该地址会优先使用动态数据，如果动态数据没有使用静态数据。可通过参数mockType指定，"rule":动态数据，"data":静态数据
        mock静态基地址：该地址只会使用静态数据，需要配置静态数据。
        mock动态基地址：该地址只会使用动态数据，需要配置mockjs规则。
        sosoapi-demo mock示例，假设mock基地址为：http://www.sosoapi.com/pass/mock/1
        
        新增用户接口:/user/simple/add.htm，则可按真实接口调用方式来调用，如
        
        http://www.sosoapi.com/pass/mock/1/user/simple/add.htm
        http://www.sosoapi.com/pass/mock/1/user/simple/add.htm?name=123
        
        查询用户接口:/user/simple/{userId}/info.htm，则可按真实接口调用方式来调用，如
        
        http://www.sosoapi.com/pass/mock/1/user/simple/123/info.htm
        http://www.sosoapi.com/pass/mock/1/user/simple/123/info.htm?name=123
        注意事项
        默认mock返回的数据为接口响应中名称为"200"或"default"或设置为默认的响应所对应的mock数据，如果有多个，则按取最近的一个
        如果需要返回指定的响应mock数据可通过添加参数"mockRespCode"为指定的响应名称即可
        默认mock是根据请求url和请求方式去匹配对应的接口，如果出现无法匹配情况，可通过添加参数"mockInterId"指定具体接口
        mock基地址,该地址会优先使用动态数据，如果动态数据没有使用静态数据。可通过参数mockType指定，"rule":动态数据，"data":静态数据
        mock请求url可按实际需要的参数进行传递，建议将请求基路径设置为变量，方便后续环境切换
        在线版本的mock已添加跨域处理，无论web前端或app前端可直接调用。
        `
    },

];
