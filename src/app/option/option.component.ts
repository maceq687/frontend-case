import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() checkable: boolean = true
  @Input() name: string = "Option X"
  @Input() bank: string = "Bank ABC"
  @Input() logo: string = "toys"
  @Input() reward: number = 66
  @Input() risk: number = 33
  @Input() minInvest: number = 1000
  @Input() maxInvest: number = 100000

  constructor() { }

  ngOnInit(): void {
  }

}
