export class InterParam {
    id?: number;
    docId?: number;
    interId?: number;
    code?: string;
    name?: string;
    description?: string;
    // {code?: string, format?: string, type?: string};
    type?: 'sys_string' | 'sys_boolean' |  'sys_integer_int32' | 'sys_integer_int64' |
        'sys_number_float' | 'sys_number_double' | 'sys_number_decimal' | 'sys_file' | 'sys_ref' | 'cust_json' ;
    formate?: string;
    position?: 'body' | 'cookie' | 'formData' | 'header' | 'path' | 'query';
    required?: boolean;
    defValue?: string;
    custSchema?: string;
    extSchema?: string;
    refSchemaId?: number;
}
