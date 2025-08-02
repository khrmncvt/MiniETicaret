import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Home } from './features/user/home/home';

export const routes: Routes = [
    {
        path: "", component: Layout, children: [
            {
                path: "", component: Home
            },
            {
                path: "cart", loadComponent: () => import("./features/user/cart/cart").then(x => x.Cart)
            },
            {
                path: "products", loadComponent: () => import("./features/user/products/products").then(x => x.Products)
            },
            {
                path: "admin", loadChildren: () => import("./features/admin/admin.routes").then(x => x.admin_routes)
            }
        ]
    }
];
