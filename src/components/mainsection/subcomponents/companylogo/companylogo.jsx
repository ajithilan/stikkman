import { Company } from "./subcomponents/company"
import { Logo } from "./subcomponents/logo"
import { Quote } from "./subcomponents/quote"
import { AppContext } from "../../../../App"

export const CompanyLogo = () => {
    const { visibleSection } = AppContext();

    return (
        <div className="absolute top-[34px] left-1/2 -translate-x-1/2 flex flex-col w-fit z-50">
            <div className="flex items-end gap-1">
                <Logo color={ visibleSection === 'section-1' ? "#553597" : "#F9F6EE" }/>
                <div className="space-y-0.5">
                    <Company color={ visibleSection === 'section-1' ? "#553597" : "#F9F6EE" }/>
                    <Quote color={visibleSection === 'section-1' ? "#676767" : "#CCCCCC" }/>
                </div>
            </div>
            <span
            className={`inline-flex w-full place-content-center text-[8.24px] font-jakarta font-medium text-[#212D2D]
            transition-all duration-800 ${ visibleSection === 'section-1' ? 'opacity-100' : 'opacity-0' }`}
            >
                LOREM, IPSUM
            </span>
        </div>
    )
}