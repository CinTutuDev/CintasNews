# ![noticias2](https://user-images.githubusercontent.com/71487857/212994728-242e7ef4-a564-433b-b171-d77209666426.png) app-noticias

### Proyecto realizado con ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular/![descarga](https://user-images.githubusercontent.com/71487857/212993697-6234ef26-0e4a-40ce-bc8a-a9bfa858a74b.png)Ionic

## ✔Comienzo el proyecto con los comandos:

```
   ionic start
   ? Framework: Angular
   ? Starter template: tabs

```

## 🧵URL/IMP/API

```
*API Noticias:
   https://newsapi.org/
```

## 🎱Crear servicio para interactuar con back para petición API

```
*Crear servicio sin archivo de prueba
   ionic g s services/apiNews --skip-tests

*Para hacer la petición creo en app.module el modulo para peticiones
   import { HttpClientModule } from "@angular/common/http";

*En services 'apiNews' hago la importación
   import { HttpClientModule } from '@angular/common/http';
   constructor( private http: HttpClientModule )

```

## Generar modulos, componentes, servicios...

```
*Crear módulo dentro de componentes
   ionic g m components

*Crear servicio sin archivo de prueba
   ionic g s services/apiNews --skip-tests

*Crear componente dentro de otro componente
   ionic g c components/articles
```

## 🎓Generar interfaces

```
   Necesito extensión (Paste JSON as Code) ó (https://app.quicktype.io/)
   Crear archivo interfaces  y dentro un index.ts
   En el mismo fichero presionamos Ctrl + Shift + v
   Ponemos nombre + intro
```

## 🔧 Pluggins ↪️ In App Browser

```
https://ionicframework.com/docs/v5/native/in-app-browser

$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install @awesome-cordova-plugins/in-app-browser

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
 providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
  ],

```

## ![androide36](https://user-images.githubusercontent.com/71487857/199188171-195d30ba-e4b6-4f3f-bea1-bbf09369c70a.jpg) LEVANTAR APP EN ANDROID

```
1º Capacitor
  ionic capacitor add android
2º Para actualizar android
  ionic capacitor copy android
3aº Levantar en movil
  ionic capacitor run android
            ó
3bº ionic capacitor run android -l --external
```

## 🔎 Herramientas de desarrollo

```
More tools --> remote deivces
*Si no lo encuentro escribo esto :
chrome://inspect/#devices
*En Port forwarding... poner el puerto (localhost:8100) y darle a done
```

## ![descarga](https://user-images.githubusercontent.com/71487857/214578135-16d1a768-8961-4099-82ce-43045983b5f6.png)@ionic/storage

```
 URL
 https://github.com/ionic-team/ionic-storage

 *Instalación
 npm install @ionic/storage

 *Instalar biblioteca Angular
 npm install @ionic/storage-angular

 *Como es un módulo va en los imports:
 import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    IonicStorageModule.forRoot()
  ]
})
export class AppModule { }

*Creo un servicio:
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
 {...}
}

*Inyectamos el servicio
src\app\components\article\article.component.ts
import { StorageService } from '../../services/storage.service';
{...}
```

## PWA

```
URl
https://ionicframework.com/docs/angular/pwa

 ng add @angular/pwa
 ionic build --prod --service-worker
```
## Generador ico

```
URL(los tienes que tener para generar a 512px)
https://seochecker.it/web-app-manifest-generator
```

**Free Software, Hell Yeah!🤘**
