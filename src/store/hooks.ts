import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

/*
To be clear: you DO NOT need to recreate these hooks for each store slice. You only
need to create them once, so maybe naming them useAppDispatch and useAppSelector would 
be fine.
*/

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
