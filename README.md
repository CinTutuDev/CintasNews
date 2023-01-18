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

## 🎓Generar interfaces 

```
   Necesito extensión (Paste JSON as Code) ó (https://app.quicktype.io/)
   Crear archivo interfaces  y dentro un index.ts
   En el mismo fichero presionamos Ctrl + Shift + v
   Ponemos nombre + intro
```
