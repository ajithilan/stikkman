import { useEffect, useState } from "react"
import { AppContext } from "../App";
import { StickVector } from "./mainsection/subcomponents/stickvector/stickvector";

export const Section1 = () => {
    const { visibleSection } = AppContext();
    const [unmountStick, setUnmountStick] = useState(visibleSection !== 'section1');

    useEffect(() => {
        if(visibleSection === 'section-2' ) setTimeout(() => { setUnmountStick(true) }, 800);
        else if(visibleSection === 'section-1') setUnmountStick(false);
    }, [visibleSection])

    const WeatherIcon = () => {
        return (
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75 9.5C2.575 9.5 2.42708 9.43958 2.30625 9.31875C2.18542 9.19792 2.125 9.05 2.125 8.875C2.125 8.7 2.18542 8.55208 2.30625 8.43125C2.42708 8.31042 2.575 8.25 2.75 8.25C2.925 8.25 3.07292 8.31042 3.19375 8.43125C3.31458 8.55208 3.375 8.7 3.375 8.875C3.375 9.05 3.31458 9.19792 3.19375 9.31875C3.07292 9.43958 2.925 9.5 2.75 9.5ZM4.25 11C4.075 11 3.92708 10.9396 3.80625 10.8188C3.68542 10.6979 3.625 10.55 3.625 10.375C3.625 10.2 3.68542 10.0521 3.80625 9.93125C3.92708 9.81042 4.075 9.75 4.25 9.75C4.425 9.75 4.57292 9.81042 4.69375 9.93125C4.81458 10.0521 4.875 10.2 4.875 10.375C4.875 10.55 4.81458 10.6979 4.69375 10.8188C4.57292 10.9396 4.425 11 4.25 11ZM5.75 9.5C5.575 9.5 5.42708 9.43958 5.30625 9.31875C5.18542 9.19792 5.125 9.05 5.125 8.875C5.125 8.7 5.18542 8.55208 5.30625 8.43125C5.42708 8.31042 5.575 8.25 5.75 8.25C5.925 8.25 6.07292 8.31042 6.19375 8.43125C6.31458 8.55208 6.375 8.7 6.375 8.875C6.375 9.05 6.31458 9.19792 6.19375 9.31875C6.07292 9.43958 5.925 9.5 5.75 9.5ZM8.75 9.5C8.575 9.5 8.42708 9.43958 8.30625 9.31875C8.18542 9.19792 8.125 9.05 8.125 8.875C8.125 8.7 8.18542 8.55208 8.30625 8.43125C8.42708 8.31042 8.575 8.25 8.75 8.25C8.925 8.25 9.07292 8.31042 9.19375 8.43125C9.31458 8.55208 9.375 8.7 9.375 8.875C9.375 9.05 9.31458 9.19792 9.19375 9.31875C9.07292 9.43958 8.925 9.5 8.75 9.5ZM7.25 11C7.075 11 6.92708 10.9396 6.80625 10.8188C6.68542 10.6979 6.625 10.55 6.625 10.375C6.625 10.2 6.68542 10.0521 6.80625 9.93125C6.92708 9.81042 7.075 9.75 7.25 9.75C7.425 9.75 7.57292 9.81042 7.69375 9.93125C7.81458 10.0521 7.875 10.2 7.875 10.375C7.875 10.55 7.81458 10.6979 7.69375 10.8188C7.57292 10.9396 7.425 11 7.25 11ZM3.25 7.5C2.49167 7.5 1.84375 7.23125 1.30625 6.69375C0.76875 6.15625 0.5 5.50833 0.5 4.75C0.5 4.05833 0.729167 3.45417 1.1875 2.9375C1.64583 2.42083 2.2125 2.11667 2.8875 2.025C3.15417 1.55 3.51875 1.17708 3.98125 0.90625C4.44375 0.635417 4.95 0.5 5.5 0.5C6.25 0.5 6.90208 0.739583 7.45625 1.21875C8.01042 1.69792 8.34583 2.29583 8.4625 3.0125C9.0375 3.0625 9.52083 3.3 9.9125 3.725C10.3042 4.15 10.5 4.65833 10.5 5.25C10.5 5.875 10.2812 6.40625 9.84375 6.84375C9.40625 7.28125 8.875 7.5 8.25 7.5H3.25ZM3.25 6.5H8.25C8.6 6.5 8.89583 6.37917 9.1375 6.1375C9.37917 5.89583 9.5 5.6 9.5 5.25C9.5 4.9 9.37917 4.60417 9.1375 4.3625C8.89583 4.12083 8.6 4 8.25 4H7.5V3.5C7.5 2.95 7.30417 2.47917 6.9125 2.0875C6.52083 1.69583 6.05 1.5 5.5 1.5C5.1 1.5 4.73542 1.60833 4.40625 1.825C4.07708 2.04167 3.82917 2.33333 3.6625 2.7L3.5375 3H3.225C2.75 3.01667 2.34375 3.19375 2.00625 3.53125C1.66875 3.86875 1.5 4.275 1.5 4.75C1.5 5.23333 1.67083 5.64583 2.0125 5.9875C2.35417 6.32917 2.76667 6.5 3.25 6.5Z" fill="#F3F3F3"/>
            </svg>
        )
    }
    
    return (
        <section className="section-1 observe relative w-full h-full snap-end snap-always">
            <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src="assets/video/bgvideo.mp4" type="video/mp4"/>
            </video>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-video-gradient"></div>
            <div
            className={`fixed z-20 top-0 left-0 w-full h-full pointer-events-none transition-all duration-800 ${ visibleSection === 'section-1' ? 'opacity-100' : 'opacity-0' }`}
            >
                <span
                className="absolute left-1/2 -translate-x-1/2 top-[47%] -translate-y-[47%] flex flex-col text-[26px] whitespace-nowrap"
                >
                    <span className="font-athelas">A LOREM IPSUM</span>
                    <span className="font-athelas ps-14"><span className="italic">in</span> LOREM IPSUM</span>
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-44 flex flex-col items-center gap-3 text-[#F3F3F3]">
                    <img src="assets/profile.png" alt="profile-image"/>
                    <span className="flex flex-col items-center text-xs">
                        <span className="font-jakarta">lorem by</span>
                        <span className="font-jakarta font-bold">Lorem & Ipsum lorem</span>
                    </span>
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-16 flex items-center gap-1 font-jakarta text-[10px] font-medium">
                    <span>27</span>
                    <WeatherIcon/>
                    <span>lorem</span>
                </span>
            </div>
            {
                !unmountStick
                    && (
                        <StickVector
                        className={`absolute left-1/2 -translate-x-1/2 bottom-[calc(0%-150px)] z-50 ${ visibleSection === 'section-1' ? 'translate-y-0' : 'translate-y-[40px]' }`}
                        opacity={ visibleSection === 'section-1' ? 0.5 : 1 }
                        />
                    )
            }
        </section>
    )
}