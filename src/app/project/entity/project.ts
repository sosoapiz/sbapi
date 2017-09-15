export class Project {
    // id?: number;
    // name?: string;
    // shortName?: string;
    // status?: 'ON' | 'OFF';
    // description?: string;

    // document?: {id: number};

    // ----
    projId?: number;
    docId?: number;
    name?: string;
    code?: string;
    description?: string;
    status?: string; // 开启 | 关闭
    role?: string;
    createrNickName?: string;
    memCount?: number;
    createDate?: Date;

    // ----
    get id() {
        return this.projId;
    }

    set id(id) {
        this.projId = id;
    }

    get shortName() {
        return this.code;
    }

    set shortName(code) {
        this.code = code;
    }

    get document() {
        return {id: this.docId};
    }

}
