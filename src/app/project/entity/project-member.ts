export class ProjectMember {
    userId?: number;
    email?: string;
    nickName?: string;
    role?: 'admin' | 'viewer' | 'guest';
    createDate?: Date;
}
