import { clsx } from "clsx"
import type { JSX } from "react"
import type { Language } from "../languages"


type LanguageChipsProps = {
    languages: Language[],
    wrongGuessCount: number,
    isGameLost: boolean
}


export default function LanguageChips({ languages, wrongGuessCount, isGameLost }: LanguageChipsProps): JSX.Element {
    const languageElements: JSX.Element[] = languages.map((lang: Language, index: number) => {
        const isLastLanguage: boolean = index === languages.length - 1
        const isLanguageLost: boolean =
            index < wrongGuessCount || (isGameLost && isLastLanguage)
        const className: string = clsx("lifeline", isLanguageLost && "lost")

        return (
            <span
                className={className}
                key={lang.name}
                aria-label={lang.name}
                role="img"
            />
        )
    })

    return (
        <section className="lifelines" aria-label="Remaining lifelines">
            {languageElements}
        </section>
    )
}