/**
 * Options
 */
export type PumlOption = {
    emit?: EmitOption
}

export type EmitOption = {
    containerSelector: string
}

/**
 * UML Data Models
 */
export type UML = {
    text: string
}
