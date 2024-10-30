import { Component } from '@angular/core';
import { Entity } from '../../models/entity';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getdata.component.html',
  styleUrl: './getdata.component.scss'
})
export class GetDataComponent {

public entities: Entity[] | null = null;

constructor(private dataService: DataService) {
  this.dataService.getData().subscribe({
    next: (data) => {
      this.entities = data;
    },
    error: (err: HttpErrorResponse) => console.log(err) //this.toastrService.error(err.error, "Er is iets fout gegaan.")
  });
}

}
