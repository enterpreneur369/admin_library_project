import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  isCreating: boolean = true;
  userToUpdate: User = {
    id: 0,
    name: ''
  };

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    if (userId) {
      this.isCreating = false;

      this.userService.getUserById(userId).subscribe((user) => {
        this.userToUpdate = user;
      });
    }
  }

  onSubmit(formValue: User) {
    if (this.isCreating) {
      this.userService.addUser(formValue).subscribe(() => {
        this.router.navigate(['/administrar-usuarios']);
      });
    } else {
      this.userService.updateUser(formValue).subscribe(() => {
        this.router.navigate(['/administrar-usuarios']);
      });
    }
  }
}
