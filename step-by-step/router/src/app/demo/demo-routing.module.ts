import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../shared/layout.component';
import { LayoutComponent as DemoLayoutComponent } from './layout/layout.component';
import { SizerComponent } from './sizer/sizer.component';

const matcher = (s: any, g: any, r: any) => {
    debugger;
    return null;
};

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: DemoLayoutComponent,
                children: [
                    {
                        path: 'sizer',
                        pathMatch:'full',
                        component: SizerComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DemoRoutingModule { }