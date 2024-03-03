import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../service/Axios/axiosService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-AuthContent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './AuthContent.component.html',
  styleUrls: ['./AuthContent.component.css']
})
export class AuthContentComponent implements OnInit {
  data: string[] = [];

  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}).then(
        (response) => {
          this.data = response.data;
        }).catch(
          (error) => {
            if (error.response.status === 401) {
              this.axiosService.setAuthToken(null);
            } else {
              this.data = error.response.code;
            }

          }
        );
  }

}