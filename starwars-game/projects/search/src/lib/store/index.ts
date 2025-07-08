import { State } from "core-libs";

 export interface SearchState extends State<string> {
 }

 export const initialState: SearchState = {
   item: ''
 }
