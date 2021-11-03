import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appOpenDropdown]'
})
export class OpenDropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  constructor() { }
}
