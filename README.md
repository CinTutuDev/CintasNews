# ![noticias2](https://user-images.githubusercontent.com/71487857/212994728-242e7ef4-a564-433b-b171-d77209666426.png) app-noticias
### Hosting URL:  https://cinta-s-news.web.app


### Proyecto realizado con ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular/![descarga](https://user-images.githubusercontent.com/71487857/212993697-6234ef26-0e4a-40ce-bc8a-a9bfa858a74b.png)Ionic

## 鉁擟omienzo el proyecto con los comandos:

```
   ionic start
   ? Framework: Angular
   ? Starter template: tabs

```

## 馃УURL/IMP/API

```
*API Noticias:
   https://newsapi.org/ 
```

## 馃幈Crear servicio para interactuar con back para petici贸n API

```
*Crear servicio sin archivo de prueba
   ionic g s services/apiNews --skip-tests

*Para hacer la petici贸n creo en app.module el modulo para peticiones
   import { HttpClientModule } from "@angular/common/http";

*En services 'apiNews' hago la importaci贸n
   import { HttpClientModule } from '@angular/common/http';
   constructor( private http: HttpClientModule )

```

## Generar modulos, componentes, servicios...

```
*Crear m贸dulo dentro de componentes
   ionic g m components

*Crear servicio sin archivo de prueba
   ionic g s services/apiNews --skip-tests

*Crear componente dentro de otro componente
   ionic g c components/articles
```

## 馃帗Generar interfaces

```
   Necesito extensi贸n (Paste JSON as Code) 贸 (https://app.quicktype.io/)
   Crear archivo interfaces  y dentro un index.ts
   En el mismo fichero presionamos Ctrl + Shift + v
   Ponemos nombre + intro
```

## 馃敡 Pluggins 鈫笍 In App Browser

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
1潞 Capacitor
  ionic capacitor add android
2潞 Para actualizar android
  ionic capacitor copy android
3a潞 Levantar en movil
  ionic capacitor run android
            贸
3b潞 ionic capacitor run android -l --external
```

## 馃攷 Herramientas de desarrollo

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

 *Instalaci贸n
 npm install @ionic/storage

 *Instalar biblioteca Angular
 npm install @ionic/storage-angular

 *Como es un m贸dulo va en los imports:
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

## 馃寪 PWA

```
URl
https://ionicframework.com/docs/angular/pwa
ng add @angular/pwa
ionic build --prod --service-worker
```

##  馃摳 Generador ico
```
URL(los tienes que tener para generar a 512px)
https://seochecker.it/web-app-manifest-generator
```
## 馃殌 Subir proyecto

```
URL
https://firebase.google.com/?hl=es-419

P谩gina donde explica como subir
https://www.youtube.com/watch?v=P4K59gr8sw0&ab_channel=Garajedeideas

1潞 Crear proyecto
2潞 Hosting y comenzar
3潞 npm install -g firebase-tools
4潞 firebase login
5潞 firebase init
6潞 Ir a configuracion proyecto en firebase y copiar el ID del proyecto
7潞 Abrir terminal :
firebase use --add 'id'
firebase deploy
8潞 Nos sale rl url a nuestra app馃帀
馃摙 NOTA鉂椻潡 si se hacen cambios en el proyecto lanzar:
ionic build --prod --service-worker
firebase deploy
```


**Free Software, Hell Yeah!馃**
