import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modalidade',
  standalone: true,
  imports: [],
  templateUrl: './modalidade.component.html',
  styleUrl: './modalidade.component.css'
})
export class ModalidadeComponent {
  @Input({required: true}) imagem: string = '';
  @Input({required: true}) modalidade: string = '';
}
