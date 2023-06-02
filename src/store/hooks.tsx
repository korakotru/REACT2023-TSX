import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
// @ts-ignore
import type { RootState, AppDispatch } from "./index.js";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
