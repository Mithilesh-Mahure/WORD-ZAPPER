import clsx from "clsx"
import { getLifelineLostText } from "../utils"
import type {JSX} from "react"

type GameStatusProps = {
    isGameWon: boolean,
    isGameLost: boolean,
    isGameOver: boolean,
    isLastGuessIncorrect: boolean,
    wrongGuessCount: number,
    totalLifelines: number
}

export default function GameStatus({
                                       isGameWon,
                                       isGameLost,
                                       isGameOver,
                                       isLastGuessIncorrect,
                                       wrongGuessCount,
                                       totalLifelines
                                    }: GameStatusProps): JSX.Element | null {
    const gameStatusClass : string = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            { !isGameOver && isLastGuessIncorrect && (
                <p className="farewell-message">
                    {getLifelineLostText(wrongGuessCount, totalLifelines)}
                </p>
            )
            }

            {isGameWon && (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )}

            {isGameLost && (
                <>
                    <h2>Game over!</h2>
                    <p>All lifelines lost — better luck next time! 😭</p>
                </>
            )}

            {/* If none of the above conditions met, render nothing inside but keep the section */}
        </section>
    )
}