import { create } from "zustand";

type TourState = {
  step: any;
  setStep: (num: number) => any;
};

export const useTourStepStore = create<TourState>((set) => ({
  step: 0,
  setStep: (num) => set({ step: num }),
}));
// const [step, setStep] = useState(0);
