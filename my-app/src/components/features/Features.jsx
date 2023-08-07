import Chat from "../../img/icon-chat.png"

function Features () {
    return(
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <article className="features__item">
                <img src={Chat} alt="Chat icon" className="features__item__icon"></img>
                <h3 className="features__item__title">
                    You are our #1 priority
                </h3>
                <p>
                    Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. 
                </p>
            </article>
        </section>
    )
}

export default Features