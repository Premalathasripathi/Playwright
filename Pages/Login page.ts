import {Page, Locator} from '@playwright/test'

export class Loginpage       
{
 readonly Page:  Page;
 readonly username: Locator;
 readonly password: Locator;
 readonly LoginButton: Locator;

  constructor(page: Page)
  {
    this.username=
    this.password=
    this.LoginButton=
  
  }
}
