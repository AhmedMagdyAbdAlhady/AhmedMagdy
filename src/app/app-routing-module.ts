import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';

const routes: Routes = [

  { path: '', component: Home, pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // { path: '**', component: NotFoundComponent } // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
