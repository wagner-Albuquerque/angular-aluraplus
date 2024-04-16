import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
        //components
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecundarioComponent } from './components/secundario/secundario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DispositivosComponent, FooterComponent,
    PrincipalComponent, SecundarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aluraplus';
}
