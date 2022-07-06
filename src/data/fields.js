import { useFormInput } from "./utils";

export const useSignupFields = () => {

    return [
        {
            id: "username",
            label: "Username",
            required: true,
            input: {

                props: {

                    type: "text",
                    placeholder: "Enter Username"
                },
                state: useFormInput("")
            }
        },
        {
            id: "telephone",
            label: "Telephone",
            required: true,
            input: {

                props: {

                    type: "number",
                    placeholder: "Enter Telephone"
                },
                state: useFormInput("")
            }
        },
        {
            id: "createpassword",
            label: "Create Password",
            required: true,
            input: {

                props: {

                    type: "password",
                    placeholder: "Enter Password"
                },
                state: useFormInput("")
            }
        },
        {
            id: "confirmpassword",
            label: "Confirm Password",
            required: true,
            input: {

                props: {

                    type: "password",
                    placeholder: "Confirm Password"
                },
                state: useFormInput("")
            }
        },
        {
            id: "invitecode",
            label: "Invitation Code",
            required: false,
            input: {

                props: {

                    type: "text",
                    placeholder: "Enter Invitation Code"
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useLoginFields = () => {

    return [

        {
            id: "telephone",
            label: "Telephone",
            required: true,
            input: {

                props: {
                    type: "number",
                    placeholder: "Enter Telephone"
                },
                state: useFormInput("")
            }
        },
        {
            id: "password",
            label: "Password",
            required: true,
            input: {

                props: {
                    type: "password",
                    placeholder: "Enter Password"
                },
                state: useFormInput("")
            }
        }
    ];
}