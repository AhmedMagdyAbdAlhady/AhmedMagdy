import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Service } from '../server/service';

@Directive({
  selector: '[editable]',
  standalone: false
})
export class EditableDirective {
//   @Input('editable') fieldKey: string = '';
//   @Input() position: 'right' | 'left' | 'top' | 'inside' = 'right';
//   private textSpan: any;
//   private icon: any;

//   constructor(
//     private el: ElementRef,
//     private renderer: Renderer2,
//     private editService: Service
//   ) { }

//   ngOnInit() {
//     this.addEditIcon();
//     // this.wrapContent();

//   }
//   ngOnDestroy() {
//     if (this.icon) {
//       this.renderer.removeChild(this.el.nativeElement, this.icon);
//     }
//   }

//   private wrapContent() {
//     const originalText = this.el.nativeElement.textContent.trim();
// console.log(originalText);
//     this.el.nativeElement.textContent = '';

//     this.textSpan = this.renderer.createElement('span');
//     this.renderer.addClass(this.textSpan, 'editable-text');
//     this.renderer.setProperty(this.textSpan, 'textContent', originalText);

//     this.renderer.appendChild(this.el.nativeElement, this.textSpan);
//   }

//   private addEditIcon() {
//     const icon = this.renderer.createElement('i');
//     this.renderer.addClass(icon, 'fas');
//     this.renderer.addClass(icon, 'fa-edit');
//     this.renderer.addClass(icon, 'edit-icon');

//     // تنسيق الأيقونة حسب الموضع
//     this.applyIconPosition(icon);

//     this.renderer.setStyle(icon, 'cursor', 'pointer');
//     this.renderer.setStyle(icon, 'color', '#fdd835');
//     this.renderer.setStyle(icon, 'font-size', '16px');
//     this.renderer.setStyle(icon, 'opacity', '0.7');
//     this.renderer.setStyle(icon, 'transition', 'opacity 0.3s ease');

//     // إضافة hover effect
//     this.renderer.listen(icon, 'mouseenter', () => {
//       this.renderer.setStyle(icon, 'opacity', '1');
//     });

//     this.renderer.listen(icon, 'mouseleave', () => {
//       this.renderer.setStyle(icon, 'opacity', '0.7');
//     });

//     // إضافة الأيقونة إلى DOM
//     this.appendIconToDOM(icon);

//     // حدث النقر على الأيقونة
//     this.renderer.listen(icon, 'click', (event) => {
//       event.stopPropagation();
//       this.openEditModal();
//     });
//   }

//   private applyIconPosition(icon: any) {
//     this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');

//     switch (this.position) {
//       case 'left':
//         this.renderer.setStyle(icon, 'position', 'absolute');
//         this.renderer.setStyle(icon, 'left', '-20px');
//         this.renderer.setStyle(icon, 'top', '6%');
//         break;

//       case 'right':
//         this.renderer.setStyle(icon, 'position', 'absolute');
//         this.renderer.setStyle(icon, 'right', '-10px');
//         this.renderer.setStyle(icon, 'top', '6%');
//         break;

//       case 'top':
//         this.renderer.setStyle(icon, 'position', 'absolute');
//         this.renderer.setStyle(icon, 'top', '-20px');
//         this.renderer.setStyle(icon, 'left', '50%');
//         this.renderer.setStyle(icon, 'transform', 'translateX(-50%)');
//         break;

//       case 'inside':
//         this.renderer.setStyle(icon, 'margin-right', '8px');
//         this.renderer.setStyle(icon, 'vertical-align', 'middle');
//         break;
//     }
//   }

//   private appendIconToDOM(icon: any) {
//     if (this.position === 'inside') {
//       this.renderer.insertBefore(this.el.nativeElement, icon, this.el.nativeElement.firstChild);
//     } else {
//       this.renderer.appendChild(this.el.nativeElement, icon);
//     }
//   }

//   private openEditModal() {
//     const currentValue = this.editService.getValue(this.fieldKey);

//     this.editService.openModal({
//       fieldKey: this.fieldKey,
//       value: currentValue,
//       element: this.el.nativeElement
//     });
//   }
//   updateText(newValue: string) {
//     if (this.textSpan) {
//       this.renderer.setProperty(this.textSpan, 'textContent', [newValue]);
//     }
//   }

}