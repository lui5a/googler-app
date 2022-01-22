import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-path',
  templateUrl: './choose-path.component.html',
  styleUrls: ['./choose-path.component.scss']
})
export class ChoosePathComponent {

  constructor(private router: Router) { }

  goToPath(path:string){
   path === 'login' ? this.router.navigateByUrl('/login') : this.router.navigateByUrl('/register')
  }

}
