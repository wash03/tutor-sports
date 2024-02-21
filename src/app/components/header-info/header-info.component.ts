import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-info',
  standalone: true,
  imports: [],
  templateUrl: './header-info.component.html',
  styleUrl: './header-info.component.css'
})
export class HeaderInfoComponent {
  @Input({required: true}) titulo: string = ''; 
  @Input({required: true}) subtitulo: string = '';
  @Input({required: true}) descricao: string = '';
}
