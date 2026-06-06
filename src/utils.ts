import { words } from "./words"

function getRandomIndex(arr:string[]):number {
    return Math.floor(Math.random() * arr.length)
}

export function getRandomWord():string {
    return words[getRandomIndex(words)]
}

export function getLifelineLostText(wrongGuessCount: number, totalLifelines: number): string {
    const remaining: number = totalLifelines - wrongGuessCount
    const messages: string[] = [
        `Lifeline lost! ${remaining} remaining.`,
        `Another lifeline gone — ${remaining} left.`,
        `Careful! Only ${remaining} lifelines left.`,
        `You're slipping — ${remaining} lifelines to go.`,
        `Halfway there — ${remaining} lifelines remaining.`,
        `Danger zone! Just ${remaining} lifelines left.`,
        `Critical — only ${remaining} lifelines left!`,
        `One lifeline left — make it count!`,
    ]

    return messages[wrongGuessCount - 1] ?? `Lifeline lost! ${remaining} remaining.`
}