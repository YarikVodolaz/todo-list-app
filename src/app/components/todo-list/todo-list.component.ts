import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss']
})

export class TodoListComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  confirmationValidator = (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return null;
  };

   submitForm(): void {
  }

}