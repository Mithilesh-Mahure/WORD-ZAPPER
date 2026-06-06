import type {JSX} from "react"


export default function Header(): JSX.Element {
    return (
        <header>
            <h1>WORD-ZAPPER</h1>
            <p>Guess the hidden word within 8 attempts before
                all your lifelines are gone!</p>
        </header>
    )
}
