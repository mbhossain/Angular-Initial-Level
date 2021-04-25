import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {RegistrationService} from './registration.service';
import {Toast, ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: 'resistration.component.html'
})
export class RegistrationComponent implements OnInit{
  user: User = new User();

  constructor(private registration: RegistrationService, private toast: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.registration.register(this.user).subscribe(
      res => {
        console.log(res);
        if (res.errors != null){
          this.toast.error('Registration Faild');
        } else {
          this.toast.success('Registration Successful');
          this.router.navigate(['/login']);
        }
      },
      error => this.toast.error('Registration Faild')
    );
  }
}
