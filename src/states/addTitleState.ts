import { atom, selector } from "recoil";
import { Task } from "../types/Task";


export const addTitleState = atom<Array<Task>>({
    key:"addTitleState",
    default:[]
});

// atom に処理を加える場合には slector を使う
export const addTitleStateLength = selector<number>({
    key:"addTitleStateLength",
    // atom をとってくるための get 関数
    get:({get}) => {
        const addTitleNumber: Array<Task> = get(addTitleState)
        return addTitleNumber?.length || 0
    }
})