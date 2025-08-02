import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Orders } from './orders/orders';
import { Products } from './products/products';

export const admin_routes: Routes = [
    {
        path: "", children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: Dashboard },
            { path: "customers", component: Customers },
            { path: "orders", component: Orders },
            { path: "products", component: Products }
        ]
    }
];
