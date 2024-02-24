import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
    standalone:true,
    imports:[MatButtonModule,MatToolbarModule],
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],
    
})

export default class homeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    logOut():void{

    }
}