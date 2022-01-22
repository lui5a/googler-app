import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppModule } from './app.module';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{

    constructor(

    ) { }

    canActivate(){
        const user =  localStorage.getItem('user');
        if(!user){
            return false
        }else{
            return true
        }

    }
}
