import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitGuess } from "./types/wordle/wordle/tx";
import { MsgSubmitWordle } from "./types/wordle/wordle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/wordle.wordle.MsgSubmitGuess", MsgSubmitGuess],
    ["/wordle.wordle.MsgSubmitWordle", MsgSubmitWordle],
    
];

export { msgTypes }