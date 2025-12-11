import { Component, OnDestroy } from '@angular/core';
import { Service } from '../../server/service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-modal',
  standalone:false,
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

  bioData: any = [];

  private destroy$ = new Subject<void>();

  constructor(private service: Service, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.edit$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const value = this.service.getValue(data.fieldKey);

        this.editData = {
          fieldKey: data.fieldKey,
          value,
          title: this.getTitle(data.fieldKey),
        };

        if (data.fieldKey === 'bio') {
          this.bioData = [...(this.service.userInfo.bio || [])];
        }
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
    console.log(this.editData.value);
    if (this.editData.fieldKey === 'bio') {
      this.service.updateValue('bio', this.bioData);
    } 
    
    else if (this.editData.fieldKey === 'image1') {
      console.log('Updating image1'+ this.editData.value);
      this.service.updateValue(this.editData.fieldKey, this.editData.value);
    } 
    else if (typeof this.editData.value === 'string') {
      this.service.updateValue(this.editData.fieldKey, this.editData.value);
    }

    this.toastr.success(`Saved ${this.editData.title}`);
    this.closeModal();
  }

  getTitle(key: string) {
    const titles: any = {
      firstName: 'First Name',
      lastName: 'Last Name',
      bio: 'Career'
    };
    return titles[key] || 'Edit';
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  onModalContentClick(event: MouseEvent) {
  event.stopPropagation();
}
  onBioDataChange(newBioData: string[]) {
    if (JSON.stringify(this.bioData) !== JSON.stringify(newBioData)) {
    this.bioData = [...newBioData];
  }
  }

}
