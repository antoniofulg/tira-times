import classNames from "classnames";

type StepperProps = {
  steps: Step[];
  current: number;
  goToStep: (index: number) => void;
};

export type Step = {
  label: string;
  concluded: boolean;
};

const Stepper = ({ steps, current, goToStep }: StepperProps) => {
  return (
    <ol className="items-center justify-center w-full mb-6 space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
      {steps.map((step, index) => {
        const clickable = current > index;

        const stepStatus = step.concluded
          ? "concluded border-blue-600"
          : index === current
          ? "current"
          : "pending";

        const liClass = classNames(
          "flex items-center space-x-2.5",
          `typo-${stepStatus}`,
          clickable ? "cursor-pointer" : "cursor-not-allowed"
        );

        const numberClass = classNames(
          "flex items-center justify-center w-8 h-8 border rounded-full shrink-0",
          `status-${stepStatus}`
        );

        return (
          <li
            key={step.label}
            className={liClass}
            onClick={() => (clickable ? goToStep(index) : null)}
          >
            <span className={numberClass}>{index + 1}</span>
            <span>
              <h3 className="font-medium leading-tight">{step.label}</h3>
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
