import { PropsBase } from "../../types/propsBase";

export function Title({ children, className }: PropsBase) {
    return (
        <h2 className={`text-2xl font-bold uppercase text-center ${className ?? ""}`}>
            {children}
        </h2>
    );
}
