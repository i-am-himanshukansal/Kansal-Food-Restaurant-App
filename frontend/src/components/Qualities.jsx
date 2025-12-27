import React from "react";
import { GiEvilWings } from "react-icons/gi";
import data from "../../restApi.json";
const Qualities = () => {
    return (
    <section className="qualities" id="qualities">
        <div className="container">
            {
                data?.data?.[0]?.ourQualities?.map((element) => (
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <p className="title">{element.title}</p>
                        <p className="description">{element.description}</p>
                    </div>
                ))
            }
        </div>
    </section>)
};
export default Qualities;   