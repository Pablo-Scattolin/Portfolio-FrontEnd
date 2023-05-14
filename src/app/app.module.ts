import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HabilidadesComponent,
    FormsComponent,
    FooterComponent,
    PortfolioComponent,
    GraficoBarrasComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
