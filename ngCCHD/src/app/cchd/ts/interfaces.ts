import {CheckResultEnum} from "./enums";

export interface IScreenParams{
    iteration: number;
    handResultOne: number;
    footResultOne: number;
    handResultTwo?: number;
    footResultTwo?: number;
    handResultThree?: number;
    footResultThree?: number;
    checkResultEnumOne?: CheckResultEnum;
    checkResultEnumTwo?: CheckResultEnum;
    checkResultEnumThree?: CheckResultEnum;

}

