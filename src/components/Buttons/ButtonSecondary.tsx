import { PropsBase } from "../../types/propsBase";

function ButtonSecondary({ children }: PropsBase) {
    return (
        <button
            type="button"
            className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-twe-ripple-init
            data-twe-ripple-color="light"
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
