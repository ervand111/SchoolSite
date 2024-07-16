import { combineReducers } from "redux";
import slideReducer from "./slides/reducer";
import eventReducer from "@/store/events/reducer";
import newsReducer from "@/store/news/reducer";
import brandReducer from "@/store/brands/reducer";
import achievementReducer from "@/store/achievements/reducer";
import graduateReducer from "@/store/graduates/reducer";
import documentReducer from "@/store/documents/reducer";
import {getPedagogic} from "@/store/pedagogic/actions";
import pedagogicReducer from "@/store/pedagogic/reducer";
import usersPedagogicReducer from "@/store/user/reducer";
import stuffReducer from "@/store/stuff/reducer";
import adviceReducer from "@/store/advices/reducer";
import contactReducer from "@/store/contact/reducer";
import studentReducer from "@/store/student/reducer";


const rootReducer = combineReducers({
  slide:slideReducer,
  event:eventReducer,
  news:newsReducer,
  brands:brandReducer,
  achievement:achievementReducer,
  graduate:graduateReducer,
  document:documentReducer,
  pedagogic:pedagogicReducer,
  userWithPedagogic:usersPedagogicReducer,
  stuff:stuffReducer,
  advice:adviceReducer,
  contact:contactReducer,
  student:studentReducer
});

export default rootReducer;
