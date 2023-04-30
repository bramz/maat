import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
/*
  options: FormGroup
  hideRequiredControl = new FormControl(false)
  floatLabelControl = new FormControl('auto')

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    })
  }
*/
  constructor () {}
  ngOnInit(): void {
  }
}
