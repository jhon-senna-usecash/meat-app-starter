import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
} from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() errorMessage: string;

  input: any;
  @ContentChild(NgModel) model: NgModel;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com uma direitva ngModel"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty);
  }

  hasError(): boolean {
    return (this.input.touched || this.input.dirty) && this.input.invalid;
  }
}
