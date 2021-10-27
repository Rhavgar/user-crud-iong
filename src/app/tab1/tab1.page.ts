import { Component } from '@angular/core';

@Component
({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page
{
  constructor() {}

  userList: User[] = [];
  phUser: User =
  {
    name: null,
    cpf: null,
    phone: null,
    edit: false
  };

  resetPhUser()
  {
    this.phUser =
    {
      name: null,
      cpf: null,
      phone: null,
      edit: false
    }
  }

  addUser()
  {
    this.userList.push(this.phUser);
    this.resetPhUser();
  }

  removeUser(idx: number)
  {
    this.userList.splice(idx, 1);
  }

}

interface User
{
  name: string;
  cpf: string;
  phone: number;
  edit: boolean;
}