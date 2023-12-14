import {Link} from "react-router-dom";
import ic_accessibility from '../public/imgs/icons/classic/ic_accessibility.svg'
import ic_accessibility_special from '../public/imgs/icons/special/ic_accessibility.svg'

const root = document.querySelector(":root")
const style = getComputedStyle(root)

const classic_color_text = style.getPropertyValue('--color-text')
const classic_color_secondary = style.getPropertyValue('--color-secondary')
const classic_color_accent = style.getPropertyValue('--color-accent')
const classic_color_background = style.getPropertyValue('--color-background')
const classic_main_font_size = style.getPropertyValue('--main-font-size')

function Navigation(props) {

    const setSpecialTheme = () => {
        root.style.setProperty('--color-text', 'black')
        root.style.setProperty('--color-secondary', 'black')
        root.style.setProperty('--color-accent', 'black')
        root.style.setProperty('--color-background', 'bisque')
        root.style.setProperty('--main-font-size', '32px')
    }

    const setClassicTheme = () => {
        root.style.setProperty('--color-text', classic_color_text)
        root.style.setProperty('--color-secondary', classic_color_secondary)
        root.style.setProperty('--color-accent', classic_color_accent)
        root.style.setProperty('--color-background', classic_color_background)
        root.style.setProperty('--main-font-size', classic_main_font_size)
    }

    const changeTheme = () => {
        if (!props.specialState)
            setSpecialTheme()
        else
            setClassicTheme()
        props.setSpecialState(!props.specialState)
        console.log(props.specialState)
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/rules">Rules</Link>
            <Link to="">News</Link>
            <Link to="">Contacts</Link>
            <img onClick={changeTheme} src={!props.specialState? ic_accessibility: ic_accessibility_special} alt="Специальные возможности"/>
        </nav>
    )
}

export default Navigation