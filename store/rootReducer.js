import { combineReducers } from "redux";
import slideReducer from "./slides/reducer";
import eventReducer from "@/store/events/reducer";
import newsReducer from "@/store/news/reducer";
import brandReducer from "@/store/brands/reducer";
import achievementReducer from "@/store/achievements/reducer";
import graduateReducer from "@/store/graduates/reducer";
import documentReducer from "@/store/documents/reducer";


const rootReducer = combineReducers({
  slide:slideReducer,
  event:eventReducer,
  news:newsReducer,
  brands:brandReducer,
  achievement:achievementReducer,
  graduate:graduateReducer,
  document:documentReducer
});

export default rootReducer;
