import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />} >
            <Component {...props} />
        </React.Suspense>
    };

}