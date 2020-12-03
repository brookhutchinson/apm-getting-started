// modules
import { NgModule }               from '@angular/core';
import { PreloadAllModules }      from '@angular/router';
import { RouterModule }           from '@angular/router';
import { Routes }                 from '@angular/router';

// components
import { WelcomeComponent }       from './modules/home/components/welcome/welcome.component';

// define routes
const routes: Routes = [
  // welcome route
  { path: 'welcome', component: WelcomeComponent },
  // products route
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(mod => mod.ProductModule) },
  // default route
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // wildcard route
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}