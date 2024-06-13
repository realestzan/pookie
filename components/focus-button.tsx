'use client'

import { useState } from "react"
import { AuroraButton } from "./ui/aurora-button"

export default function FocusButton () { 
    const [isFocus, setIsFocus] = useState(false)
    return ( 
        <AuroraButton>Focus mode</AuroraButton>
    )
}