import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {PageNotFoundComponent} from "./error-handling/page-not-found/page-not-found.component";
import {NotAuthorizedComponent} from "./error-handling/not-authorized/not-authorized.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";

const appRoutes:Routes = [
  //{path: '', redirectTo:"servers", pathMatch:"full"},
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},

  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'not-authorized', component: NotAuthorizedComponent},

  /*Below entry must be the last entry of the routes*/
  //TODO custom module > sample 1 is not working because page not found gets invoked before custom routing module.
  // We need a solution.
  //Solution Found: CustomModuleModule must be imported before AppRoutingModule in app.module.ts
  {path: '**', redirectTo: 'page-not-found'},

];

@NgModule({


  //Import other modules into this module.
  imports: [
    //Basic setting
    //RouterModule.forRoot(appRoutes),

    //Below we are using HashLocationStrategy(it is a LocationStrategy)
    //e.g. if you call location.go('/foo'), the browser's URL will become example.com#/foo
    //The parts after # will be ignored by webserver and part after the # is parsed by angular.
    //RouterModule.forRoot(appRoutes, {useHash: true}),

    //Preloads all lazily loaded modules. Default strategy is do not preload.
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
