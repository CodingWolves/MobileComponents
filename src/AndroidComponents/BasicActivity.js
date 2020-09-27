import React from "react"

import { FloatingButton } from "./FloatingButton"
import { ActionBar } from './ActionBar'

export const BasicActivity = (props) => (
    <div>
        <ActionBar>{props.children}</ActionBar>
        <FloatingButton />
    </div>
)