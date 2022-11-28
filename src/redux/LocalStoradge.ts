import {AppStateType} from "./Redux-store";

export const loadState = () => {
  try {
      const serializedState = localStorage.getItem('shopItem');
      if(serializedState === null) {
          return undefined
      }
      return JSON.parse(serializedState)
  } catch (err) {
      return undefined
  }
};

export const  saveSate = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('shopItem', serializedState)
    } catch {
        // ignore write errors
    }
};