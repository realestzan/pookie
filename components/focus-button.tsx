'use client'

import { useState } from "react"
import { Button } from "./ui/aurora-button"

export default function FocusButton () { 
    const [isFocus, setIsFocus] = useState(false)
    return ( 
        <Button>Focus mode</Button>
    )
}