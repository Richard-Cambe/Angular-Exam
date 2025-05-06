import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

//import { authRoutes } from './routes/auth.routes'
//import { AuthGuard } from './guards/auth/auth.guard';

const appTitle = "Angular Exam"
export const routes: Routes = [
    {
        path: "",
        title: `Accueil - ${appTitle}`,
        pathMatch: "full",
        loadComponent: () => import("@/components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
      },
      {
        path: "auth",
        loadChildren:() => import("./routes/auth.routes")
        .then(m=>m.authRoutes)
      },


      {
        path:"**",
        redirectTo: "erreur/404"
      }

];
