import { PropsBase } from "../../types/propsBase";

function ButtonPrimary({ children }: PropsBase) {
    return (
        <button
            type="button"
            className="rounded px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-opacity-10 bg-neutral-950 hover:text-neutral-100 "
            data-twe-ripple-init
            data-twe-ripple-color="light"
        >
            {children}
        </button>
    );
}

export default ButtonPrimary;
