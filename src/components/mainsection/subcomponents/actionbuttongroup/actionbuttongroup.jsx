import { useEffect, useState } from "react"
import { CalendarIcon } from "./subcomponents/calendar"
import { CallIcon } from "./subcomponents/call"
import { AppContext } from "../../../../App"


export const ActionBtnGrp = () => {
    const { visibleSection, redirect } = AppContext();
    const [hideSpan, setHideSpan] = useState(false);

    useEffect(() => {
        if(visibleSection === 'section-4' || redirect){
            setHideSpan(true);
        }else{
            setHideSpan(false);
        }
    }, [visibleSection, redirect]);

    return (
        <div
        className={`absolute flex divide-x-[1px] rounded-full border-[1px] border-white/10 py-2 backdrop-blur-[60px] transition-all duration-1000 z-50
        ${ redirect ? 'bg-[#D2C1AF80] divide-[#212D2D]' : ((visibleSection === 'section-4') ? 'bg-[#025D4C26] divide-[#9E9E9E]' : 'bg-white/20 divide-[#9E9E9E]') }
        ${ visibleSection === 'section-1' ? 'bottom-24' : ((visibleSection === 'section-4' || redirect) ? 'bottom-5' : 'bottom-10') }
        ${ (visibleSection === 'section-4' || redirect) ? 'w-20 h-10 left-[90%] -translate-x-[90%]' : 'w-[214px] h-12 left-1/2 -translate-x-1/2' }`}
        >
            <button className="w-full flex justify-center items-center gap-2">
                <CalendarIcon color={(visibleSection === 'section-4' || redirect) ? "#212D2D" : "#BEB3A1"}/>
                { !hideSpan && <span className="text-sm font-jakarta transition-all duration-800">LOREM</span> }
            </button>
            <button className="w-full flex justify-center items-center gap-2">
                <CallIcon color={(visibleSection === 'section-4' || redirect) ? "#212D2D" : "#BEB3A1"}/>
                { !hideSpan && <span className="text-sm font-jakarta transition-all duration-800">IPSUM</span> }
            </button>
        </div>
    )
}