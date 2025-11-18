import { Component, OnDestroy } from '@angular/core';
import { Service } from '../../server/service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-edit-modal',
  standalone: false,
  templateUrl: './edit-modal.html',
  styleUrls: ['./edit-modal.css']
})
export class EditModalComponent implements OnDestroy {
  isModalOpen = false;
  editData: any = {
    fieldKey: '',
    value: '',
    title: ''
  };

  private destroy$ = new Subject<void>();

  constructor(private service: Service) { }

  ngOnInit() {
    // الاستماع لفتح المودال من الـ Service
    this.service.edit$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.editData = {
          fieldKey: data.fieldKey,
          value: data.value,
          title: this.getTitle(data.fieldKey),
          element: data.element
        };
        this.openModal();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  saveChanges() {
    if (this.editData.fieldKey) {
      // حفظ البيانات في الـ Service
      this.service.updateValue(this.editData.fieldKey, this.editData.value);
      // تحديث العنصر في الـ DOM إذا كان موجود
      if (this.editData.element) {
        this.editData.element.textContent = this.editData.value;
      }
      console.log('تم الحفظ:', this.editData);
    }
    this.closeModal();
  }

  private getTitle(fieldKey: string): string {
    const titles: any = {
      'firstName': 'تعديل الاسم الأول',
      'lastName': 'تعديل اسم العائلة',
      'bio': 'تعديل السيرة الذاتية'
    };
    return titles[fieldKey] || 'تعديل النص';
  }

  // إغلاق عند الضغط على Escape
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }
   // منع إغلاق عند النقر داخل المحتوى
  onModalContentClick(event: MouseEvent) {
    event.stopPropagation();
  }
}