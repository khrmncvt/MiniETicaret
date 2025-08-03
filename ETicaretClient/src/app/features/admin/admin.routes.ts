import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Orders } from './orders/orders';
import { Products } from './products/products';
import { Layout } from './layout/layout';

export const admin_routes: Routes = [
    {
        path: "", component: Layout, children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: Dashboard },
            { path: "customers", component: Customers },
            { path: "orders", component: Orders },
            { path: "products", component: Products }
        ]
    }
];
