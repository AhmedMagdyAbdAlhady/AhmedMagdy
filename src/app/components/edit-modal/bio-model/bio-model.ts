import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bio-model',
  standalone: false,
  templateUrl: './bio-model.html',
  styleUrl: './bio-model.css',
})
export class BioModel {
  @Input() bio: string[] = [];
  @Output() bioChange = new EventEmitter<string[]>();

  // متتبع للقيم الحالية
  currentValues: string[] = [];

  ngOnInit() {
    this.currentValues = [...this.bio];
  }

  ngOnChanges() {
    this.currentValues = [...this.bio];
  }

  onInputChange(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    this.currentValues[index] = target.value;
    this.bioChange.emit([...this.currentValues]);
  }

  addField() {
    this.currentValues.push('');
    this.bioChange.emit([...this.currentValues]);
  }

  removeField(index: number) {
    if (this.currentValues.length > 1) {
      this.currentValues.splice(index, 1);
      this.bioChange.emit([...this.currentValues]);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}