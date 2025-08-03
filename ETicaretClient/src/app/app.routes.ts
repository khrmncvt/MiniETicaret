import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", loadChildren: () => import("./features/user/user.routes").then(x => x.user_routes)
    },
    {
        path: "admin", loadChildren: () => import("./features/admin/admin.routes").then(x => x.admin_routes)
    }
];
