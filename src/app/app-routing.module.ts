import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'details',
    children: [
      {
        path: ':id',
        children: [
          {
          path:'',
          loadChildren: () => import('./coffee-details/coffee-details.module').then(m => m.CoffeeDetailsPageModule)
          },
          {
            path: 'nutritional-info',
            loadChildren: () => import('./nutritional-info/nutritional-info.module').then(m => m.NutritionalInfoPageModule)
          }
        ]
      },
     
    ]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
