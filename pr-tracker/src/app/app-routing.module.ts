import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PopupComponent } from './popup/popup.component';
import { TokenComponent } from './token/token.component';
import { HasToken, DoesNotHaveToken } from './auth.guard';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent, canActivate: [HasToken] },
  { path: 'event-page', component: EventPageComponent, canActivate: [HasToken] },
  { path: 'popup', component: PopupComponent, canActivate: [HasToken] },
  { path: 'token', component: TokenComponent, canActivate: [DoesNotHaveToken] },
  { path: '', redirectTo: 'token', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
