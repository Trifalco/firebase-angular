import { EnvironmentProviders, importProvidersFrom } from "@angular/core";
import { provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { initializeApp } from "firebase/app";
import { environment } from "./environment/environment";

const firebaseProviders : EnvironmentProviders = importProvidersFrom([
    provideFirebaseApp(()=>initializeApp(environment)),
    provideAuth(()=>getAuth()), //si quiero agregar otro servicio de firebase lo podremos agregar aqui mismo ej(deploy,firestore etc etc)

])

export {firebaseProviders}