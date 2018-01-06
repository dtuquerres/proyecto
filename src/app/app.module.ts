import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { CategoriasPage } from '../pages/categorias/categorias'
import { RegistrarsePage } from '../pages/registrarse/registrarse'
import { CarritoPage } from '../pages/carrito/carrito'

import { CamisetasPage } from '../pages/camisetas/camisetas'
import { ZapatosPage } from '../pages/zapatos/zapatos'
import { PantalonPage } from '../pages/pantalon/pantalon'
import { CorbataPage } from '../pages/corbata/corbata'
import { DeportivoPage } from '../pages/deportivo/deportivo'
import { AbrigoPage } from '../pages/abrigo/abrigo'

import { AnilloPage } from '../pages/anillo/anillo'
import { RelojPage } from '../pages/reloj/reloj'
import { PulseraPage } from '../pages/pulsera/pulsera'
import { CollarPage } from '../pages/collar/collar'
import { AretePage } from '../pages/arete/arete'
import { CoronaPage } from '../pages/corona/corona'

import { MesaPage } from '../pages/mesa/mesa'
import { SillaçPage } from '../pages/sillaç/sillaç'
import { CortinaPage } from '../pages/cortina/cortina'
import { CamaPage } from '../pages/cama/cama'
import { HerramientaPage } from '../pages/herramienta/herramienta'
import { CubiertoPage } from '../pages/cubierto/cubierto'

import { PerroPage } from '../pages/perro/perro'
import { GatoPage } from '../pages/gato/gato'
import { ConejoPage } from '../pages/conejo/conejo'
import { HamsterPage } from '../pages/hamster/hamster'
import { PezPage } from '../pages/pez/pez'
import { AnimalPage } from '../pages/animal/animal'

import { CelularPage } from '../pages/celular/celular'
import { AudifonoPage } from '../pages/audifono/audifono'
import { LaptopPage } from '../pages/laptop/laptop'
import { ImpresoraPage } from '../pages/impresora/impresora'
import { MicroPage } from '../pages/micro/micro'
import { TecnologiaPage } from '../pages/tecnologia/tecnologia'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';

import { SQLite } from '@ionic-native/sqlite';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriasPage,
    RegistrarsePage,
    CarritoPage,
    CamisetasPage,
    ZapatosPage,
    PantalonPage,
    CorbataPage,
    DeportivoPage,
    AbrigoPage,
    AnilloPage,
    RelojPage,
    PulseraPage,
    CollarPage,
    AretePage,
    CoronaPage,
    MesaPage,
    SillaçPage,
    CortinaPage,
    CamaPage,
    HerramientaPage,
    CubiertoPage,
    PerroPage,
    GatoPage,
    ConejoPage,
    HamsterPage,
    PezPage,
    AnimalPage,
    CelularPage,
    AudifonoPage,
    LaptopPage,
    ImpresoraPage,
    MicroPage,
    TecnologiaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriasPage,
    RegistrarsePage,
    CarritoPage,
    CamisetasPage,
    ZapatosPage,
    PantalonPage,
    CorbataPage,
    DeportivoPage,
    AbrigoPage,
    AnilloPage,
    RelojPage,
    PulseraPage,
    CollarPage,
    AretePage,
    CoronaPage,
    MesaPage,
    SillaçPage,
    CortinaPage,
    CamaPage,
    HerramientaPage,
    CubiertoPage,
    PerroPage,
    GatoPage,
    ConejoPage,
    HamsterPage,
    PezPage,
    AnimalPage,
    CelularPage,
    AudifonoPage,
    LaptopPage,
    ImpresoraPage,
    MicroPage,
    TecnologiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}


