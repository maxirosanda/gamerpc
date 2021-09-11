import { createStore, combineReducers } from "redux";
import ProductReducer from "./reducers/products.reducer";
import GamesReducer from "./reducers/games.reducer";
import ProgramsReducer from "./reducers/programs.reducer";
import ComponentsReducer from "./reducers/components.reducer";

const RootReducer = combineReducers({
    products: ProductReducer,
    games:GamesReducer,
    programs:ProgramsReducer,
    components:ComponentsReducer
})

export default createStore(RootReducer);

