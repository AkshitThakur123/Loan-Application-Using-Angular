import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';

const routes : Routes = [{ path: 'Bank', component: AppComponent}];

@NgModule({
  declarations: [
    AppComponent,
    BankComponent

  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  RouterModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [BankComponent]
})
export class AppModule { }
