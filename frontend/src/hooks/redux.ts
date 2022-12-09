import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

/**
 * Custom dispatch and selector hooks with type definitions
 * Use throughout your app instead of plain `useDispatch` and `useSelector`
 *
 * @example const dispatch = useAppDispatch();
 * @example const { activities } = useAppSelector((state) => state.recentActivity);
 */

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
