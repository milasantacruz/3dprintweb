import React, {useState,useEffect,useRef} from 'react';
import "./portada.scss"
import gsap from "gsap"

const Portada = () => {
	var svg = useRef()
    var actors = useRef([]);
    var tl = useRef();
    var tl2 = useRef()
    useEffect(()=>{
         tl.current = gsap.timeline({delay:1});
         tl.current.fromTo(actors.current[0],{y:-50}, {y:"-300%", duration:1.5,  ease:"elastic.out(1, 0.3)"})
                   .fromTo(actors.current[1],{y:-50}, {y:"-320%", duration:1.5,  ease:"elastic.out(1, 0.3)"},"-=1.2")
                   .fromTo(actors.current[1],{y:-50}, { rotation:90, transformOrigin:"50% 50%"},"-=0.5")
                   .fromTo(actors.current[2],{y:-50}, { y:"-350%", duration:1.5,  ease:"elastic.out(1, 0.3)"},"-=1.2")
                   .fromTo(actors.current[3],{y:-50}, { y:"-390%", duration:1.5,  ease:"elastic.out(1, 0.3)"},"-=1.2")
                   .fromTo(actors.current[3],{y:-50}, { rotation:-108, duration:1.5,  ease:"elastic.out(1, 0.3)"},"-=1.2")
                   .fromTo(actors.current[4],{y:-50}, { y:"-350%", duration:1.5,  ease:"elastic.out(1, 0.3)"},"-=1.2")
                   .to(actors.current[5], {opacity:1, duration:1.5,  ease:"elastic.out(1, 0.3)"},"-=1.2")
                   .to(actors.current[6], {opacity:1},"-=2")
                

    },[])

    var [offset,setOffset] = useState(true)

    function handleNavigation(e){
        if(window.pageYOffset === 0){
            setOffset(true)
            console.log(offset)

        }
        if(window.pageYOffset === 1){
            setOffset(false)
            console.log(offset)
        }
   
    }

    useEffect(()=>{
        console.log("ofset")
            tl2.current = gsap.timeline({})
            tl2.current.to(actors.current[6], {opacity:0})
            .to(actors.current[0], {transformOrigin: "10px -80px 0px", transform:"scale(0.1)", y:"-400%", duration:1, ease:"bounce.out"})
            .to(actors.current[1], {x:"-305px", y:"-640px",  transform:"scale(0.1)", duration:1.5, ease:"bounce.out"},"-=1.2")
            .to(actors.current[2], {transformOrigin: "-30px -80px 0px",transform:"scale(0.1)", x:"-40%", duration:1, ease:"bounce.out"},"-=1.2")
            .to(actors.current[3], {transformOrigin: "79px -10px 0px",transform:"scale(0.1)", x:"-40%", duration:1, ease:"bounce.out"},"-=1.2")
            .to(actors.current[4], {transformOrigin: "-70px -80px 0px",transform:"scale(0.1)", x:"-40%", duration:1, ease:"bounce.out"},"-=1.2")
            .to(actors.current[5], {letterSpacing:"13px", fontSize:"1em", ease:"elastic.out(1, 0.3)"},"-=1.2")
            .to(actors.current[5], {attr:{ fontSize:"1em" , transform:"matrix(1 0 0 1 9 50)", duration:0.2, ease:"bounce.in"}},"-=1.2")
            .to(svg.current, {attr:{ viewBox:"0 0 1920 52", duration:0.2, ease:"bounce.in"}})
            

    },[])

    useEffect(()=>{
        console.log("ofset")
        tl2.current.reversed(offset);
    },[offset])


    useEffect(() => {
        if(window){
        console.log(window.pageYOffset)
        document.documentElement.scrollTop = 0;
          window.addEventListener("scroll", (e) => handleNavigation(e));
        }
           
      
         return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            if(window){
           window.removeEventListener("scroll", (e) => handleNavigation(e));
            }
         };
      },[]);


    return (
        <div className="portada-wrapper">
            <svg ref={elem =>{svg.current = elem}} x="0px" y="0px" viewBox="0 0 1920 1080" >


            <g id="layer-f" ref={elem => {actors.current[0] = elem}} >
                <path className="pru" d="M75.94,1081.4H7.69V811.39h200.48v55.45H75.94v61.85h123.7v55.45H75.94V1081.4z"/>
            </g>
            <g className="pru" id="layer-r" ref={elem => {actors.current[1] = elem}} >
                <path d="M449.46,705.1v49.77h-196.9c5.27-59.16-25.77-167.19,65.63-164.86c29.3-0.38,57.02,15.62,63.15,44.17l0.93,0.31
                    c14.9-20.42,45.4-38.04,66.88-51.95h0.31v57.86c-6.86,4.97-54.08,35.72-59.1,40.59c-5.9,5.71-3.49,15.45-4.04,24.11H449.46z
                    M292.99,669.01v36.08h52.88c-1.16-12.91,3.87-49.23-6.22-57.7c-7.06-8.09-33.37-8.09-40.44,0
                    C295.07,651.44,292.99,658.64,292.99,669.01z"/>
            </g>
            <g className="pru" id="layer-e" ref={elem => {actors.current[2] = elem}} >
                <path d="M854.08,1081.4V843.77h176.44v48.8H914.14v45.05h100.98v48.8H914.14v46.18h116.38v48.8H854.08z"/>
            </g>
            <g className="pru" id="layer-a" ref={elem => {actors.current[3] = elem}} >
                <path d="M1217.64,1081.4l-0.81-0.26l14.78-45.99c11.1,0.3,23.8,0.42,35.95,0.51l18.77-58.43c-11.47-7.67-21.3-14.51-29.52-20.53
                    l14.78-45.99c0.52-0.26,152.97,110.38,153.41,110.48l-19.12,59.51L1217.64,1081.4z M1384.77,1040.5
                    c-20.31-11.23-46.51-28.51-67.85-42.39l-12.43,38.68c25.49,0.79,56.87,2.1,79.93,4.79L1384.77,1040.5z"/>
            </g>
            <g className="pru" id="layer-k" ref={elem => {actors.current[4] = elem}} >
                <path d="M1764.75,1080.76h-60.07V843.13h60.07v99.48c7.66,0.46,14.56-12.37,19.15-18.02c31.03-51.95,46.75-87.19,115.62-81.46v1.13
                    c-9.92,15.73-45.84,74.64-55.56,89.16c-7.43,10.43-16.13,24.28-26.28,28.72v1.13c9.73,4.69,18.69,16.78,26.47,26.47
                    c10.24,12.79,53.72,75.51,64.01,89.91v1.13c-70.71,4.76-81.57-16.86-116-72.08v0.38c-6.11-7.91-15.92-26.65-27.4-26.65V1080.76z"/>
            </g>

            
            <text ref={elem => {actors.current[5] = elem}} transform="matrix(1 0 0 1 1700 280)" class="studiotext">STUDIO</text>

            </svg>
            <p ref={elem => {actors.current[6] = elem}} className="scrolltext">scroll</p>
        </div>
    );
}

export default Portada;
