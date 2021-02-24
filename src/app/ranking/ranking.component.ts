import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface OptionResult {
  option: string;
  investment: number;
  return: number;
  profit: number;
}

const Results: OptionResult[] = [
  {option: 'A', investment: 100000, return: 130000, profit: 30000},
  {option: 'B', investment: 100000, return: 145000, profit: 45000},
  {option: 'E', investment: 200000, return: 240000, profit: 40000},
];

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  displayedColumns: string[] = ['option', 'investment', 'return', 'profit'];
  dataSource = Results;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(private _formBuilder: FormBuilder, private httpService: HttpClient) { }

  arrOptions: string[] | any;

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.httpService.get('./../../assets/options.json').subscribe(
      data => {
        this.arrOptions = data as string [];
      }
    )
  }

}
