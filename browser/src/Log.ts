/**
 * Log.ts
 *
 * Utilities for logging in Oni
 */

import * as UI from "./UI/index"

export function debug(message: string): void {
    console.log(message) // tslint:disable-line no-console
}

export function info(message: string): void {
    UI.Actions.makeLog({
        type: "info",
        message,
        details: null,
    })

    console.log(message) // tslint:disable-line no-console
}

export function warn(message: string): void {
    UI.Actions.makeLog({
        type: "warning",
        message,
        details: null,
    })

    console.warn(message) // tslint:disable-line no-console
}

export function error(message: string, errorDetails?: any): void {
    UI.Actions.makeLog({
        type: "error",
        message,
        details: errorDetails || null,
    })

    console.error(message, errorDetails) // tslint:disable-line no-console
}
