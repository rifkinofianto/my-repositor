import "../App.css"

const Section = ({type, episode, title, released, genre, theme, duration, studio, p1, p2, p3, imageValue}) => {
    return (
        <>
            <div className="container">
                <section>
                    <div className="content">
                        <div className="title">
                            <h2>{title}</h2>
                            <img src={imageValue} alt="" />
                        </div>
                        <div className="description">
                            <p>Type : {type}</p>
                            <p>Episode : {episode}</p>
                            <p>Anime : {title}</p>
                            <p>Released of Date : {released}</p>
                            <p>Status : Finished Airing</p>
                            <p>Genre : {genre}</p>
                            <p>Theme : {theme}</p>
                            <p>Duration : {duration}</p>
                            <p>Studios : {studio}</p>
                        </div>
                    </div>
                    <div className="conten-2">
                        <div className="synopsis">
                            <p className="synopsis-title">Synopsis</p>
                            <p className="synopsis-des">
                                {p1}
                                <br /> <br />
                                {p2}
                                <br /> <br />
                                {p3}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Section;