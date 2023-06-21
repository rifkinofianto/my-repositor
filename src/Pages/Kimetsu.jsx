import Footer from "../Components/Footer"
import Navigation from "../Components/Nav"
import Section from "../Components/Section"

const Kimetsu = () => {
    const image = "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
    const url1 = "/"
    const url2 = "/jujutsukaisen"
    return (
        <>
            <Navigation />
            <Section
                type="Series"
                episode={24}
                title="KIMETSU NO YAIBA SEASON 1"
                released="Spring 2019"
                genre="Action, Fantasy"
                duration="23 min per eps"
                studio="ufotable"
                p1="Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal."
                p2="On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon."
                p3="Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity."
                imageValue={image}
            />
            <Footer 
            other1="SUZUME NO TOJIMARI"
            other2="JUJUTSU KAISEN"
            path1={url1} 
            path2= {url2}
            />
        </>
    )
}

export default Kimetsu