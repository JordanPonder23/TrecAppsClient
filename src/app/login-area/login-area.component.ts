import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.scss']
})
export class LoginAreaComponent implements OnInit {

  form_toggled = false; 
  iteration = false; 
 
  constructor() { }

  ngOnInit() {
  }
  expand(){
    let reg_area = document.getElementById("register-form-area") as HTMLDivElement;
    reg_area.className = "w3-animate-top";    
  }
  
  @HostListener('mouseleave') async onMouseLeave() {
    let hide_register = document.getElementById("register-form-area") as HTMLDivElement;
    //==
    if(( hide_register.className.toString() == "sit-reg-form") ||  (hide_register.className.toString() == "w3-animate-top")  ) {
      if( this.form_toggled  == true || this.iteration == true) {
          //no action
      } else {
      this.iteration = true; 
      //-
      hide_register.className = "slideUp";
      await this.delay(1000);
      hide_register.className = "hidden";
      await this.delay(325);
      hide_register.className = "slide-origin"
      //-
      this.iteration = false; 
      }
    }
  }
   delay(millis) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, millis);
    });
  }
  toggleForm(){
    let reg_but = document.getElementById("reg-but") as HTMLButtonElement; 
    (this.form_toggled) ? reg_but.style.boxShadow = "none" : reg_but.style.boxShadow = "2px 2px rgba(27, 72, 131, 0.473)"; 
    (this.form_toggled) ? reg_but.style.borderBottomRightRadius = "20px" : reg_but.style.borderRadius = "none"; 
    (this.form_toggled) ? this.form_toggled = false : this.form_toggled = true; 
    let reg_area = document.getElementById("register-form-area") as HTMLDivElement;
    reg_area.className = "sit-reg-form";
  }

}
