import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';

export const user_routes: Routes = [
    {
        path: "",  component: Layout, children: [
            { path: "", component: Home },
            { path: "cart", loadComponent: () => import("./cart/cart").then(x => x.Cart) },
            { path: "products", loadComponent: () => import("./products/products").then(x => x.Products) }
        ]
    }
]