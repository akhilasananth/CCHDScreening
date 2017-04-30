import { Component, OnInit, Input } from '@angular/core';

import {CchdAlgorithmService} from './cchd-algorithm.service';
import {CchdDataService} from './cchd-data.service';

import {isNumber} from "util";
import {isNumeric} from "rxjs/util/isNumeric";

import {IScreenParams} from './ts/interfaces';

import {Screen} from './ts/Screen';

@Component({
  selector: 'app-cchd',
  templateUrl: './cchd.component.html',
  styleUrls: ['./cchd.component.css']
})
export class CchdComponent implements OnInit {

    private _screen: Screen = new Screen;

    private _screenParams: IScreenParams;

    firstHand: number;
    firstFoot: number;
    secondHand: number;
    secondFoot: number;
    thirdHand: number;
    thirdFoot: number;

    hasSecondCheck: boolean = false; // Second check is required.
    hasThirdCheck: boolean = false; // Third check is required.


  constructor(
      private _CchdAlgorithmService: CchdAlgorithmService,
      private _CchdDataService: CchdDataService
  ) { }

  ngOnInit() {

  }

  // Validate number is between 11 and 100
  private validateOnChanges(toValidate): boolean{
      if(isNumeric(toValidate)){
          toValidate = Number(toValidate);
          if(toValidate >= 11 && toValidate <= 100) {
              return true;
          }

      }
      return false;
  }

  onChangeHandOne($event){
      if (this.validateOnChanges($event.text)){
          this.firstHand = $event.text;
      }
  }
  onChangeFootOne($event){
      if (this.validateOnChanges($event.text)){
          this.firstFoot = $event.text;
      }
  }
  onChangeHandTwo($event){
      if (this.validateOnChanges($event.text)){
          this.secondHand = $event.text;
      }

  }
  onChangeFootTwo($event){
      if (this.validateOnChanges($event.text)){
          this.secondFoot = $event.text;
      }

  }
  onChangeHandThree($event){
      if (this.validateOnChanges($event.text)){
          this.thirdHand = $event.text;
      }

  }
  onChangeFootThree($event){
      if (this.validateOnChanges($event.text)){
          this.thirdFoot = $event.text;
      }
  }
  // Todo refactor this...
  testIteration(iteration: number){
      if(iteration == 1){
          if (this.firstHand != null && this.firstFoot !=null){
              if(this.validateOnChanges(this.firstHand) && this.validateOnChanges(this.firstFoot)){
                  // Todo ...
              }
          }
      }
  }




}
