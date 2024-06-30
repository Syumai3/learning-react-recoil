import {atom} from "recoil"

// インプットに打ち込んだ文字列を inputTitleState に保存している
// どこでも呼び出せる
export const inputTitleState = atom<string>({
    key:"inputTitleState",
    default:"",
}
);