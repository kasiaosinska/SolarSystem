import React from 'react';

class PlanetInfo extends React.Component {

    mercury = () => {
        return (
            <div className="col-md-3">
                <div>MERCURY</div>
                <p>Mercury's eccentric orbit takes the small planet as close as 47 million km (29 million miles) and as far as 70 million km (43 million miles) from the sun. If one could stand on the scorching surface of Mercury when it is at its closest point to the sun, the sun would appear more than three times as large as it does when viewed from Earth.
                    <a href="https://solarsystem.nasa.gov/planets/mercury">Download from NASA.</a>
                </p>
            </div>
        )
    };

    venus = () => {
        return (
            <div className="col-md-3">
                <div>VENUS</div>
                <p>Venus is the second planet from the sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Venus is named for the ancient Roman goddess of love and beauty, the counterpart to the Greek goddess Aphrodite.
                    <a href="https://solarsystem.nasa.gov/planets/venus">Download from NASA.</a>
                </p>
            </div>
        )
    };

    earth = () => {
        return (
            <div className="col-md-3">
                <div>EARTH</div>
                <p>Earth is the third planet from the sun and the fifth largest in the solar system. Just slightly larger than nearby Venus, Earth is the biggest of the terrestrial planets. Our home planet is the only planet in our solar system known to harbor living things. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is an English/German word, which simply means the ground.
                    <a href="https://solarsystem.nasa.gov/planets/earth">Download from NASA.</a>
                </p>
            </div>
        )
    };

    mars = () => {
        return (
            <div className="col-md-3">
                <div>MARS</div>
                <p>Mars is a cold desert world. It is half the diameter of Earth and has the same amount of dry land. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons and weather, but its atmosphere is too thin for liquid water to exist for long on the surface. There are signs of ancient floods on Mars, but evidence for water now exists mainly in icy soil and thin clouds.
                    <a href="https://solarsystem.nasa.gov/planets/mars">Download from NASA.</a>
                </p>
            </div>
        )
    };

    jupiter = () => {
        return (
            <div className="col-md-3">
                <div>JUPITER</div>
                <p>Jupiter is the fifth planet from our sun and the largest planet in the solar system. Jupiter's stripes and swirls are cold, windy clouds of ammonia and water. The atmosphere is mostly hydrogen and helium, and its iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.
                    <a href="https://solarsystem.nasa.gov/planets/jupiter">Download from NASA.</a>
                </p>
            </div>
        )
    };

    saturn = () => {
        return (
            <div className="col-md-3">
                <div>SATURN</div>
                <p>The second largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball of mostly hydrogen and helium.
                    <a href="https://solarsystem.nasa.gov/planets/saturn">Download from NASA.</a>
                </p>
            </div>
        )
    };

    uranus = () => {
        return (
            <div className="col-md-3">
                <div>URANUS</div>
                <p>The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the sun like a rolling ball.
                    <a href="https://solarsystem.nasa.gov/planets/uranus">Download from NASA.</a>
                </p>
            </div>
        )
    };

    neptune = () => {
        return (
            <div className="col-md-3">
                <div>NEPTUNE</div>
                <p>Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system. More than 30 times as far from the sun as Earth, the planet takes almost 165 Earth years to orbit our sun. In 2011 Neptune completed its first orbit since its discovery in 1846. "We see (Neptune) as Columbus saw America from the coast of Spain.
                    <a href="https://solarsystem.nasa.gov/planets/neptune">Download from NASA.</a>
                </p>
            </div>
        )
    };

    pluto = () => {
        return (
            <div className="col-md-6">
                <div>PLUTO</div>
                <p>Discovered in 1930, Pluto was long considered our solar system's ninth planet. But after the discovery of similar intriguing worlds deeper in the distant Kuiper Belt, icy Pluto was reclassified as a dwarf planet. Findings by NASA's New Horizons in 2015 revealed for the first time how that Pluto is a complex and mysterious world. Information about Pluto and its largest moon, Charon, provide insight into the collision believed to have formed the dwarf planet and moons we see today.
                    <a href="https://solarsystem.nasa.gov/planets/pluto">Download from NASA.</a>
                </p>
            </div>
        )
    };

    sun = () => {
        return (
            <div className="col-md-6">
                <div>SUN</div>
                <p>The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel. The temperature at the sun's core is about 27 million degrees Fahrenheit.
                    <a href="https://www.nasa.gov/sun">Download from NASA.</a>
                </p>
            </div>
        )
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {this.mercury()}
                        {this.venus()}
                        {this.earth()}
                        {this.mars()}
                    </div>
                    <div className="col-xs-12">
                        {this.jupiter()}
                        {this.saturn()}
                        {this.uranus()}
                        {this.neptune()}
                    </div>
                    <div className="col-xs-12">
                        {this.pluto()}
                        {this.sun()}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlanetInfo;