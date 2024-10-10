import { useEffect, useState } from "react"
import { AppContext } from "../../App"
import { StickVector } from "./subcomponents/stickvector/stickvector"
import { FloatTab } from "./subcomponents/floattab/floattab";

export const MainSection = () => {
    const { visibleSection, redirect } = AppContext();
    const [mountStick, setMountStick] = useState(false);
    
    useEffect(() => {
        if(visibleSection === 'section-1') setMountStick(false);
        else setTimeout(() => { setMountStick(true) }, 800);
    }, [visibleSection])

    return (
        <section className={`relative w-full h-full pointer-events-none ${ visibleSection === 'section-1' ? '-z-10' : 'z-20' }`}>
            {
                !redirect
                    ? (
                        <>
                            { /* below content belongs to section-2 */}
                            {
                                mountStick
                                    && (
                                        <StickVector
                                        className={`absolute left-1/2 -translate-x-1/2 transition-all duration-800 z-30 ${ visibleSection === 'section-3' ? '-top-4' : (visibleSection === 'section-4' ? '-top-40' : 'top-0') }`}
                                        opacity={ visibleSection === 'section-2' ? 1 : 0.5}
                                        />
                                    )
                            }
                            <span
                            className={`absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-[40%] grid text-center font-athelas whitespace-nowrap transition-all duration-800
                            ${ visibleSection === 'section-1' ? 'opacity-0' : 'opacity-100' } ${ visibleSection === 'section-3' ? '-translate-y-[98px] opacity-20 text-xl' : 'text-[26px]' }`}
                            >
                                <span>LOREM INTO IPSUM</span>
                                <span>A LOREM <span className="italic">in</span> THE IPSUM</span>
                            </span>
                            <img
                            className={`absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-0 object-cover trasition-all duration-800 z-40
                            ${ visibleSection === 'section-1' ? 'opacity-0' : 'opacity-100' } ${ visibleSection === 'section-4' ? 'w-full h-3/4' : (visibleSection === 'section-3' ? 'w-72 h-[356px]' : 'w-64 h-[307px]') }
                            ${ visibleSection === 'section-2' ? 'rounded-2xl' : (visibleSection === 'section-3' ? 'rounded-none bottom-[calc(50%-230px)]' : (visibleSection === 'section-4' ? 'w-full rounded-bl-[89px] rounded-tl-[30px] left-0 bottom-[25%]' : ''))}`}
                            src="stikkman/assets/image2.jpeg"
                            alt="image-2"
                            />
                            { /* below content belongs to section-4 */}
                            <img
                            src='stikkman/assets/bgpaper.png'
                            className={`absolute bottom-0 ${ visibleSection === 'section-4' ? 'opacity-100' : 'opacity-0' } transition-all duration-800`}
                            alt="background-image"
                            />
                            <div className={`absolute left-1/2 -translate-x-1/2 bottom-[calc(25%-88px)] w-10/12 flex divide-x-[1px] divide-[#174141]
                            ${ visibleSection === 'section-4' ? 'opacity-100' : 'opacity-0' }`}>
                                <span className="w-52 font-athelas font-bold text-sm text-[#212D2D]">A Lorem For The Ipsum</span>
                                <p className="font-jakarta text-sm text-[#1E1E1E] ps-3.5">A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.</p>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <div
                            className={`absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 w-10/12 space-y-3 ${ visibleSection === 'about-2' ? 'opacity-0' : 'opacity-100' } transition-all duration-800`}
                            >
                                <div className="flex flex-col items-center gap-2 font-athelas text-[22px]">
                                    <span className="text-xs">LOREM OF</span>
                                    <span className="">LOREM <span className="italic">of</span> IPSUM</span>
                                </div>
                                <div className="font-jakarta text-sm space-y-5 text-center">
                                    <p>A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum. A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.</p>
                                    <p>A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum. A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.</p>
                                </div>
                            </div>
                            <img
                            className={`absolute left-1/2 -translate-x-1/2 object-cover ${ visibleSection === 'about-2' ? 'bottom-[25%] w-full h-3/4 rounded-bl-[32px]' : '-bottom-3 w-64 h-[310px] rounded-2xl' } transition-all duration-800 z-30`}
                            src="stikkman/assets/image3.jpeg"
                            alt="image-3"
                            />
                            <FloatTab/>
                            <div className={`absolute left-0 bottom-[calc(25%-110px)] w-full ${ visibleSection === 'about-2' ? 'opacity-100' : 'opacity-0' } transition-all duration-800`}>
                                <div className="w-fit flex divide-x-[1px] font-jakarta text-sm">
                                    <span className="w-20 font-semibold px-4">Lorem in Ipsum</span>
                                    <span className="w-32 font-light px-4">Lorem lorem Ipsum Ipsum Lorem Lorem Ipsum Ipsum</span>
                                </div>
                            </div>
                        </>
                    )
            }
        </section>
    )
}