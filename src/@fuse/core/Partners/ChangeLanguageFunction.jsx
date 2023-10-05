import { changeLanguage } from "i18next"
function ChangeLanguageFunction(params) {
    const languages = [
        {
            id: Math.random(),
            slug: 'am',
            title: 'hayeren'
        },
        {
            id: Math.random(),
            slug: 'ru',
            title: 'ruseren'
        },
        {
            id: Math.random(),
            slug: 'en',
            title: 'angleren'
        },
        {
            id: Math.random(),
            slug: 'fr',
            title: 'franceren'
        }
    ]

    return (
        <ul>
            {languages.map((language) => {
                return (
                    <li key={language.id} onClick={() => {
                        localStorage.setItem('lng', language.slug)
                        changeLanguage(language.slug)
                    }}>
                        {language.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default ChangeLanguageFunction