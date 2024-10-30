export interface MenuDashboardLinks {
    admin: AdminDashboardLinks[],
    user: UserDashboardLinks[],
}

export interface AdminDashboardLinks {
    name: string;
    link: string;
    icon: string;
    color: string;
}

export interface UserDashboardLinks {
    name: string;
    link: string;
    icon: string;
    color: string;
}

