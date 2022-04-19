import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchComponent } from './Components/search/search.component';
import { HomeComponent } from './Components/home/home.component';
import { UseraccountComponent } from './Components/useraccount/useraccount.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },

  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "user/:id",
    component: UseraccountComponent,
  },
  { path: '', redirectTo: "/home", pathMatch: "full" },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
