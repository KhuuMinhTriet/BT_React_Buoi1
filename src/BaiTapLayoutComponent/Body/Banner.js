import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <header className="py-5">
            <div className="container px-lg-5">
                <div className="bg-secondary-subtle py-4 px-2 py-lg-5">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-3">A Warm Welcome!</h1>
                        <p className="fs-4 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio necessitatibus maxime repellat repudiandae, voluptatem quam et officiis, aliquid voluptas est consectetur tempora illo numquam mollitia aliquam. Est officiis aperiam natus nobis error beatae optio nostrum. Consequatur nobis sint possimus voluptates.</p>
                        <button className="btn btn-primary btn-lg">Call to action!</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner