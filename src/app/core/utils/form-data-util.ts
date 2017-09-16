
export class FormDataUtil {
    public static covert(obj: Object): FormData {
        let formData = new FormData();

        Object.keys(obj).map(it => {
            // console.log('kv', it, typeof obj[it], typeof obj[it] !== 'object');
            if (typeof obj[it] !== 'object') {
                if (typeof obj[it] === 'boolean') {
                    formData.append(it, obj[it] ? '1' : '0');
                } else {
                    formData.append(it, obj[it] || '');
                }
            } else {
                if (obj[it] instanceof Date) {

                } else if (obj[it] && Object.keys(obj[it]).findIndex( itx => itx == 'id') > -1) {
                    formData.append(`${it}.id`, obj[it]['id']);
                }
            }
        });

        return formData;
    }

    public static toArrayFileds(name: string, values: any[], formData?: FormData): FormData {
        if (!formData) {
            formData = new FormData();
        }
        values.forEach(value => {
            formData.append(name, value);
        });
        return formData;
    }
}
