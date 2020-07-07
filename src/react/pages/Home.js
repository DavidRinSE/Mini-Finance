import React from "react"
import {HomeTopbar, Data} from "../components"
import {withWidth} from "@material-ui/core"

const Home = (props) => {
    return(
        <div>
            {(props.width !== "lg" && props.width !== "xl") && <HomeTopbar/>}
            <Data />
        </div>
    )
}
export default withWidth()(Home)