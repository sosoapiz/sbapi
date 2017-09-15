export class UserInfo {
    userId?: number;
    email?: string;
    nickName?: string;
    token?: string;
    valid?: boolean;
    locked?: boolean;
    role?: string;
    newMsgCount?: number;
    projMap?: Map<string, string>;
    docMap?: Map<string, string>;
}
