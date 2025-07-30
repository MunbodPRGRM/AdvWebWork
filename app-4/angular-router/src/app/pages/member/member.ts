import { Component } from '@angular/core';
import { Header } from "../main/header/header";
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Appdata, MemberInfo } from '../../service/appdata';

@Component({
  selector: 'app-member',
  imports: [
    Header, 
    RouterOutlet, 
    RouterModule, 
    RouterLink, 
  ],
  templateUrl: './member.html',
  styleUrl: './member.scss'
})
export class Member {
  appData = new Appdata();
  constructor(private router: Router) {}

  changePage1() {
    this.router.navigateByUrl('/member/list');
  }

  changePage2() {
    this.router.navigateByUrl('/member/profile');
  }

  sendParams() {
    this.router.navigate(['/member/test'], {
      queryParams: { name: 'Aj.Potchara' },
    });
  }

  addMember(){
    let member = new MemberInfo();
    member.id = Math.random();
    member.fullname = 'Test Fullname';
    member.image = 'Test Image';
    this.appData.members.push(member);
    console.log(this.appData.members);
  }

  addMemberSession() {
    let members = [];
    if(sessionStorage.getItem('members')){
        members = JSON.parse(sessionStorage.getItem('members')!);
    }
    let member = new MemberInfo();
    member.id = Math.random();
    member.fullname = 'Test Fullname';
    member.image = 'Test Image';
    members.push(member);
    sessionStorage.setItem('members', JSON.stringify(members));

    console.log(sessionStorage.getItem('members'));
  }

  addMemberLocalStorage() {
    let members = [];
    if (localStorage.getItem('members')) {
      members = JSON.parse(localStorage.getItem('members')!);
    }
    let member = new MemberInfo();
    member.id = Math.random();
    member.fullname = 'Test Fullname';
    member.image = 'Test Image';
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));

    console.log(localStorage.getItem('members'));
  }
}
