import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
    {
        path: "", component: Layout, children:[
            {
                path: "", loadChildren: () => import("./features/user/user.routes").then(x => x.user_routes)
            },
            {
                path: "admin", loadChildren: () => import("./features/admin/admin.routes").then(x => x.admin_routes)
            }
        ]
    }
];
