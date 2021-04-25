import {Component, OnInit} from '@angular/core';
import {UserUpdateService} from './user-update.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: 'user-update.component.html'
})
export class UserUpdateComponent implements OnInit{

  firstName: string;
  lastName: string;

  constructor(private userUpdateService: UserUpdateService, private toast: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
  }

  update(): void {
    this.userUpdateService.userupdate(this.firstName, this.lastName).subscribe(
      res => {
        console.log(res);
        if (res.errors != null){
          this.toast.error('User-Update Faild');
        } else {
          this.toast.success('User-Update Successful');
          //this.router.navigate(['/login']);
        }
      },
      error => this.toast.error('User-Update Faild')
    );
  }
}
