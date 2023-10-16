import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAdminComponent } from './components/library-admin/library-admin.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { BookManagementComponent } from './components/book-management/book-management.component';
import { LoanManagementComponent } from './components/loan-management/loan-management.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:"", component:LibraryAdminComponent},
  {path:"administrar-libros", component:BookManagementComponent},
  {path:"administrar-usuarios", component:UserManagementComponent},
  {path:"administrar-prestamos", component:LoanManagementComponent},
  {path:"detalle-libro", component:BookDetailsComponent},
  {path:"detalle-libro/:id", component:BookDetailsComponent},
  {path:"detalle-usuario", component:UserDetailsComponent},
  {path:"detalle-usuario/:id", component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
