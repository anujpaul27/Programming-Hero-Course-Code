import '../index.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Animation = () => {

    useGSAP(() => {
        gsap.to('.box', {
            x: 300,
            rotate: 360,
            duration: 2,
            delay: 1,
        })
        gsap.from('.box', {
            y: 200,
            rotate: 360,
            duration: 2,
            delay: 1,
        })
    })

    return (
        <div>
            <div className="box"></div>
        </div>
    );
};

export default Animation;