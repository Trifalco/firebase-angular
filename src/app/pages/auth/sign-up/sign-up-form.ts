import { FormControl } from "@angular/forms";

export  interface SignUpForm {
    names:FormControl<string>;
    lasName:FormControl<string>;
    email:FormControl<string>;
    password:FormControl<string>;
}

