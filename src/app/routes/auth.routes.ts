import { LoginComponent } from "@/components/auth/login/login.component"
import { Routes } from "@angular/router"

export const authRoutes: Routes = [
    {
        path:"login", // Chemin relatif (sera enfant a la route "/auth", donc "/auth/login")
        loadComponent: () => import("@/components/auth/login/login.component").then(m => LoginComponent)
    }
    //Dans ce fichier de routes, on ajouterais les routes specifiques au login : register, forgot-password, etc..
]