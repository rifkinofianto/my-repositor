import Navigation from "../Components/Nav";
import Section from "../Components/Section";
import Footer from "../Components/Footer";

const Home = () => {
    const image = "https://th.bing.com/th/id/OIP.buddBUxnAY-cP1VHN7Nr1gHaKe?pid=ImgDet&rs=1"
    const url1= "/jujutsukaisen"
    const url2 = "/kimetsunoyaiba"
    return (
        <>
            <Navigation />
            <Section
                type={"Movie"}
                episode={1}
                title="SUZUME NO TOJIMARI"
                released="11 November 2022"
                genre="Advanture, Fantasy"
                theme="Mythology"
                duration="2 hours 1 min"
                studio="CoMix Wave Films"
                p1="On her way to school one day, Suzume Iwato stumbles upon Souta Munakata, a young man searching for abandoned areas. The high school girl directs Souta to a nearby ruin, but out of pure curiosity, she herself decides to head to the same destination."
                p2="Once there, Suzume discovers an isolated door with a dreamlike universe lying beyond it—a place that she can see and feel, but not enter. A strange stone rests on the ground nearby, but it turns into a cat-like creature and scurries away when Suzume lifts it. Suddenly afraid, she heads back toward her school, not realizing that her act of leaving the door open will have consequences."
                p3="With the 'keystone' released, the evil within the other universe can now freely escape and wreak havoc throughout Japan. Intending to correct her dangerous mistake, Suzume joins Souta—whose true goal is to prevent evil from festering—in finding and locking all open doors before the country is destroyed."
                imageValue = {image}
            />
            <Footer 
            other1="JUJUTSU KAISEN"
            other2="KIMETSU NO YAIBA S1" 
            path1= {url1}
            path2={url2}
            />
        </>
    )
}

export default Home;