export interface members {
    key?: string;
    createDate: Date;
    emailAddress: string;
    endDate: Date;
    receiveEmails: boolean;
    memberships: memberships[];
}

export interface memberships {
    key?: string;
    endDate: Date;
    isActive: boolean;
    joinDate: Date;
    membershipType: string;
    poolName: string;
}