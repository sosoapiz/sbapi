export const ARTICLES_OFFLINE = [
    {
        title: '如何进行线下部署？',
        content: `线下部署说明文档`
    },
    {
        title: '如何处理SwaggerUI界面国际化？',
        content: `目前SwaggerUI国际化仅支持英文和中文，部署后编辑{SwaggerUI_HOME}/index.html，设置SwaggerUi的locale即可。
        
        window.swaggerUi = new SwaggerUi(
            {
                url : url,
                validatorUrl : null,
                dom_id : "swagger-ui-container",
                supportedSubmitMethods : [ 'get', 'post', 'put', 'delete','patch' ],
                //字符集设置
                //en:英文
                //zh_CN:中文(简体)
                locale : "en",
                onComplete : function(swaggerApi, swaggerUi) {
                    if (typeof initOAuth == "function") {
                        initOAuth({
                            clientId : "your-client-id",
                            clientSecret : "your-client-secret",
                            realm : "your-realms",
                            appName : "your-app-name",
                            scopeSeparator : ","
                        });
                    }
            
                    if (window.SwaggerTranslator) {
                        window.SwaggerTranslator.translate();
                    }
            
                    $('pre code').each(function(i, e) {
                        hljs.highlightBlock(e)
                    });
            
                    addApiKeyAuthorization();
                },
                onFailure : function(data) {
                    log("Unable to Load SwaggerUI");
                },
                docExpansion : "none",
                apisSorter : "alpha",
                showRequestHeaders : false
            });
        `
    },


];
