import { Component, EventEmitter, Output, output } from '@angular/core';
import { Service } from './../../../server/service';

@Component({
  selector: 'app-image-model',
  standalone: false,
  templateUrl: './image-model.html',
  styleUrl: './image-model.css',
})
export class ImageModel {
constructor(public Service: Service) {}

  
}
