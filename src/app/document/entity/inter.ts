export class Inter {
    id?: number;
    interId?: number;
    moduleName?: string;
    moduleId?: number;
    name?: string;
    path?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE';
    scheme?: 'HTTP' | 'HTTPS' | 'WS' | 'WSS';
    summary?: string;
    description?: string;
    consume?: string;
    produce?: string;
    deprecated?: boolean;
    sortWeight?: number;
}
