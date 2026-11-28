import { PropsWithChildren } from "react";

type DialogProps = {
    id: string;
}

export default function Dialog({ id }: PropsWithChildren<DialogProps>) {
    return (
        <dialog id={id}>
            

        </dialog>
    );

}
