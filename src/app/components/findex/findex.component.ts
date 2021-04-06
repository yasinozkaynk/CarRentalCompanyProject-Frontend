import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Findex } from 'src/app/models/findex';
import { AuthService } from 'src/app/serviices/auth.service';
import { FindexService } from 'src/app/serviices/findex.service';

@Component({
  selector: 'app-findex',
  templateUrl: './findex.component.html',
  styleUrls: ['./findex.component.css'],
})
export class FindexComponent implements OnInit {
  findex: Findex[] = [];
  constructor(
    private authService: AuthService,
    private findexService: FindexService,
  ) {}

  ngOnInit(): void {
    this.findexByUserId(this.authService.userId)
  }
  findexByUserId(userId: number) {
    this.findexService.getFindexScoreByUserId(userId).subscribe((response) => {
      this.findex = response.data;
    });
  }
}
