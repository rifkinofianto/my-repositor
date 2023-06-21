import Footer from "../Components/Footer"
import Navigation from "../Components/Nav"
import Section from "../Components/Section"

const Jujutsu = () => {
    const image = "https://stripkever.be/wp-content/uploads/2020/02/Manga_Jujutsu_Kaisen1.jpg"
    const url1 = "/"
    const url2 = "/kimetsunoyaiba"
    return(
        <>
        <Navigation/>
        <Section
         type="Series" 
         episode={24} 
         title="JUJUTSU KAISEN"
         released = "Fall 2020"
         genre = "Acton, Fantasy"
         theme = "School"
         duration = "23 min per eps"
         studio = "MAPPA"
         p1 = "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item."
         p2 = 'Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."'
         p3 = 'Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.'
         imageValue={image}
         />
        <Footer
         other1="SUZUME NO TOJIMARI"
         other2= "KIMETSU NO YAIBA S1"
         path1={url1}
         path2={url2}
         />
        </>
    )
}

export default Jujutsu