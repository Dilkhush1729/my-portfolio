import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
    loggedUser: any;
    constructor(private router:Router){
      const localuser = localStorage.getItem('loggedUser');
      if(localuser!=null){
        this.loggedUser=JSON.parse(localuser);
      }
    }
    onLogOut(){
      localStorage.removeItem('loggedUser');
       this.router.navigateByUrl('/loginsignup');
      //  sessionStorage.setItem('isUserExist','false');
    }
}
