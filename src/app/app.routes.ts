import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthGuard } from './guards/auth/auth.guards';

//import { authRoutes } from './routes/auth.routes'

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
        path:"apis",
        title:`Liste des apis - ${appTitle}`,
        canActivate:[AuthGuard],
        loadComponent: () => import("@/components/api-list/api-list.component").then(m => m.ApiListComponent)
      },
      {
        path:"rickmorty",
        title: `Rick & Morty - ${appTitle}`,
        canActivate:[AuthGuard],
        loadComponent:() => import("@/components/rick-list/rick-list.component").then(m => m.RickListComponent)
      },
      {
        path:"rickmorty/:id",
        title:`Rick - ${appTitle}`,
        canActivate:[AuthGuard],
        loadComponent: () => import("@/components/rick/rick.component").then(m => m.RickComponent),
        children: [
          {
            path: "id",
            title: `Détails - ${appTitle}`,
            loadComponent: () => import("@/components/rick-details/rick-details.component").then(m => m.RickDetailsComponent)
          }
        ]
      },
      {
        path:"nasa",
        title:`oseb - ${appTitle}`,
        canActivate:[AuthGuard],
        loadComponent: () => import("@/components/nasa/nasa.component").then(m => m.NasaComponent)
      },
      {
        path:"apis/api/:id",
        title:`Api - ${appTitle}`,
        canActivate:[AuthGuard],
        loadComponent: () => import("@/components/api/api.component").then(m => m.ApiComponent)
      },
    
      {
        path:"**",
        redirectTo: "erreur/404"
      }

];
