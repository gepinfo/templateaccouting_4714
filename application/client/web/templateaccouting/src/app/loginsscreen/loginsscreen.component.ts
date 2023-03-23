import { Component, OnInit } from '@angular/core';
import { LoginsscreenService } from './loginsscreen.service';

@Component({
  selector: 'app-loginsscreen',
  templateUrl: './loginsscreen.component.html',
  styleUrls: ['./loginsscreen.component.scss'],
})

export class LoginsscreenComponent implements OnInit {
    public adds:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
        name: '',
    }

    constructor (
        private loginsscreenService: LoginsscreenService,
    ) { }

    ngOnInit() {
        this.adds.created_by = sessionStorage.getItem('email') || ''; 
    }
}