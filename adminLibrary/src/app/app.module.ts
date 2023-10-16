import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryAdminComponent } from './components/library-admin/library-admin.component';
import { LoanManagementComponent } from './components/loan-management/loan-management.component';
import { BookManagementComponent } from './components/book-management/book-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LibraryAdminComponent,
    LoanManagementComponent,
    BookManagementComponent,
    UserManagementComponent,
    LoanDetailsComponent,
    UserDetailsComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
