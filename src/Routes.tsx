import {Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {CurrentMessagePage} from "./pages/CurrentMessagePage/CurrentMessagePage";

export const Routes = () => {
    return (
        <>
            <Route path="/" exact component={MainPage}/>
            <Route path="/:id" exact component={CurrentMessagePage}/>
        </>
    )
}