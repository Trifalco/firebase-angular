import { ApplicationConfig } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { firebaseProviders } from "./firebase.config";
import { routes } from "./app-routing.module";


export const appConfig: ApplicationConfig={
    providers:[provideRouter(routes),firebaseProviders],
}
