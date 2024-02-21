import { Component } from '@angular/core';

import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { HeaderImageComponent } from '../../components/header-image/header-image.component';
import { HeaderInfoComponent } from '../../components/header-info/header-info.component';
import { ModalidadeComponent } from '../../components/modalidade/modalidade.component';
import { ContatosComponent } from '../../components/contatos/contatos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuBarComponent,
    HeaderInfoComponent,
    HeaderImageComponent,
    ModalidadeComponent,
    ContatosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
