import classNames from "classnames";

type StepperProps = {
  steps: Step[];
  current: number;
};

type Step = {
  label: string;
  concluded: boolean;
};

const Stepper = ({ steps, current }: StepperProps) => {
  return (
    <ol className="items-center w-full justify-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mb-6">
      {steps.map((step, index) => {
        const stepStatus = step.concluded
          ? "concluded"
          : index === current
          ? "current"
          : "pending";

        const liClass = classNames(
          "flex items-center space-x-2.5",
          `typo-${stepStatus}`
        );

        const numberClass = classNames(
          "flex items-center justify-center w-8 h-8 border rounded-full shrink-0",
          `status-${stepStatus}`
        );

        return (
          <li key={step.label} className={liClass}>
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
