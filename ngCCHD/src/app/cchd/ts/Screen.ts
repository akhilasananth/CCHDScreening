import {CheckResultEnum, CheckSp02DifferenceEnum, CheckSpO2Enum} from './enums';
import {IScreenParams} from './interfaces';

export class Screen{

    private _screenParams: IScreenParams;

    screen(screenParams: IScreenParams){
        this._screenParams = screenParams;

        switch(this._screenParams.iteration){
            case 1:{
                this._screenParams.checkResultEnumOne = this.firstScreen();
                return this._screenParams.checkResultEnumOne;
            }
            case 2:{
                this._screenParams.checkResultEnumTwo = this.secondScreen();
                return this._screenParams.checkResultEnumTwo;
            }
            case 3: {
                this._screenParams.checkResultEnumThree = this.thirdScreen();
                return this._screenParams.checkResultEnumThree;
            }
            // This should never happen!
            default: {
                this._screenParams.checkResultEnumOne = CheckResultEnum.error;
                this._screenParams.checkResultEnumTwo = CheckResultEnum.error;
                this._screenParams.checkResultEnumThree = CheckResultEnum.error;
                return CheckResultEnum.error;
            }
        }
    }

    private firstScreen(): CheckResultEnum{

        // Get teh enums!
        let checkSp02Hand = this.checkSp02Value(this._screenParams.handResultOne);
        let checkSp02Foot = this.checkSp02Value(this._screenParams.footResultOne);

        let checkSp02Difference = this.checkSp02Difference(
                this._screenParams.handResultOne,
                this._screenParams.footResultOne);

        // Check for insta-fail.
        if(checkSp02Hand == CheckSpO2Enum.fail ||
                checkSp02Foot == CheckSpO2Enum.fail){
            return CheckResultEnum.refer;
        }

        // If not an insta-fail, check if a repeat needed.
        if(checkSp02Difference == CheckSp02DifferenceEnum.fail){
            return CheckResultEnum.repeat
        }

        // If arriving at this point, its a success if Sp02 >= 95%, otherwise its a repeat.
        if(checkSp02Hand == CheckSpO2Enum.pass ||
            checkSp02Foot == CheckSpO2Enum.pass){
            return CheckResultEnum.pass;
        }

        // If here result must (if working as intended) be repeat.
        return CheckResultEnum.repeat;
    }

    private secondScreen(){

        // Get teh enums!
        let checkSp02Hand = this.checkSp02Value(this._screenParams.handResultTwo);
        let checkSp02Foot = this.checkSp02Value(this._screenParams.footResultTwo);

        let checkSp02Difference = this.checkSp02Difference(
            this._screenParams.handResultTwo,
            this._screenParams.footResultTwo);

        // Check for insta-fail.
        if(checkSp02Hand == CheckSpO2Enum.fail ||
            checkSp02Foot == CheckSpO2Enum.fail){
            return CheckResultEnum.refer;
        }

        // If not an insta-fail, check if a repeat needed.
        if(checkSp02Difference == CheckSp02DifferenceEnum.fail){
            return CheckResultEnum.repeat
        }

        // If arriving at this point, its a success if Sp02 >= 95%, otherwise its a repeat.
        if(checkSp02Hand == CheckSpO2Enum.pass ||
            checkSp02Foot == CheckSpO2Enum.pass){
            return CheckResultEnum.pass;
        }

        // If here result must (if working as intended) be repeat.
        return CheckResultEnum.repeat;
    }

    private thirdScreen(){

        // Get teh enums!
        let checkSp02Hand = this.checkSp02Value(this._screenParams.handResultThree);
        let checkSp02Foot = this.checkSp02Value(this._screenParams.footResultThree);

        let checkSp02Difference = this.checkSp02Difference(
            this._screenParams.handResultThree,
            this._screenParams.footResultThree);

        // Check for insta-fail.
        if(checkSp02Hand == CheckSpO2Enum.fail ||
            checkSp02Foot == CheckSpO2Enum.fail){
            return CheckResultEnum.refer;
        }

        // On third iteration, this is now a fail.
        if(checkSp02Difference == CheckSp02DifferenceEnum.fail){
            return CheckResultEnum.refer
        }

        // If arriving at this point, its a success if Sp02 >= 95%, otherwise its a fail.
        if(checkSp02Hand == CheckSpO2Enum.pass ||
            checkSp02Foot == CheckSpO2Enum.pass){
            return CheckResultEnum.pass;
        }

        // On third iteration this now counts as a fail.
        return CheckResultEnum.refer;
    }

    private checkSp02Value(screenValue: number): CheckSpO2Enum{
        if (screenValue < 90){
            return CheckSpO2Enum.fail;
        }else if(screenValue >= 95){
            return CheckSpO2Enum.pass
        }else{
            return CheckSpO2Enum.inconclusive;
        }
    }

    private checkSp02Difference(firstValue: number, secondValue: number): CheckSp02DifferenceEnum{
        if (Math.abs(firstValue - secondValue) > 3){
            return CheckSp02DifferenceEnum.fail;
        }else{
            return CheckSp02DifferenceEnum.pass;
        }
    }
}

/*
 In reality.
 Truth is not reality.
 Logic is divine.
 */