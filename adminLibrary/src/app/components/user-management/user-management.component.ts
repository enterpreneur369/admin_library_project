import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  constructor(private userService: UserService) { }
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = this.userService.getUsers();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.dataSource = this.userService.getUsers();
    } );
  }

}
