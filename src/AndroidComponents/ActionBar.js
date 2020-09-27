import React from "react"
import { KebabMenu } from "./KebabMenu"

export const ActionBar = (props) => (
    <div>
        <div className="header">
            <span className="header_title">
                {props.children}
            </span>

            <KebabMenu />
        </div>
    </div>
)