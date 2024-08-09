"use client"
import { Steps } from "@/components/Global/Steps"
import { Button } from "@/components/ui/button"
import { useTourStepStore } from "@/store/toursteps"
import { TourProvider } from "@reactour/tour"
import { ChevronRight, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import * as React from "react"
import { GiFinishLine } from "react-icons/gi"

const CustomCloseButton = ({ onClick }: any) => (
    <button onClick={onClick} className="w-full flex items-end justify-end -mb-4">
        <X className="h-5 w-auto text-gray-700" />
    </button>
);

const CustomNavigation = ({ next, skip, isLastStep }: any) => {
    const { step, setStep } = useTourStepStore()
    return (
        <div>
            <Button onClick={() => setStep(step + 1)} className="ml-auto flex justify-end mt-2">
                {isLastStep ? <GiFinishLine /> : <ChevronRight className="h-5 w-auto text-gray-200" />}
            </Button>
        </div>
    )
};

export function ToursProvider({ children }: any) {
    const { step, setStep } = useTourStepStore()
    const router = useRouter()
    const { theme } = useTheme()

    const handleStepChange = (newStep: any) => {
        switch (newStep) {
            case 0:
                router.push("/dashboard/home");
                break;
            case 1:
                router.push("/dashboard/organizational-structure");
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                router.push("/dashboard/employee");
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                router.push("/dashboard/attendence");
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                router.push("/dashboard/geofence");
                break;
            case 13:
                router.push("/dashboard/shifts");
                break;
            case 14:
                break;
            case 15:
                break;
            case 16:
                router.push("/dashboard/leaves");
                break;
            case 17:
                router.push("/dashboard/travel");
                break;
            case 18:
                router.push("/dashboard/regularization");
                break;
            case 19:
                router.push("/dashboard/announcements");
                break;
            case 20:
                break;
            case 21:
                break;
            case 22:
                router.push("/dashboard/recruiterx");
                break;
            case 23:
                break;
            case 24:
                break;
            case 25:
                router.push("/dashboard/settings");
                break;
            case 26:
                break;
            case 27:
                break;
            case 28:
                break;
            case 29:
                break;
            case 30:
                break;
            case 31:
                break;
            case 32:
                break;
            case 33:
                break;
            default:
                break;
        }
        setStep(newStep)
    }

    React.useEffect(() => {
        handleStepChange(step)
    }, [step])

    return (
        <TourProvider
            steps={Steps}
            currentStep={step}
            setCurrentStep={handleStepChange}
            styles={{
                popover: (base) => ({
                    ...base,
                    backgroundColor: `${theme === "dark" ? "black" : "white"}`,
                    padding: '16px',
                    paddingBottom: "18px",
                    marginLeft: "15px",
                    marginTop: "10px",
                    marginBottom: "40px",
                    borderRadius: '10px',
                    color: 'black',
                }),
                maskArea: (base) => ({
                    ...base,
                    stroke: `white`
                }),
                maskWrapper: (base) => ({
                    ...base,
                    backgroundColor: `white`
                }),
                badge: (base) => ({
                    ...base,
                    backgroundColor: 'black',
                    color: 'white',
                }),
                dot: (base) => ({
                    ...base,
                    display: "none"
                }),

            }}
        >
            {children}
        </TourProvider>
    )
}
// components={{
//     Close: CustomCloseButton,
//     Navigation: CustomNavigation
// }}