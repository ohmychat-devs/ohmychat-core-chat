import { observable } from "@legendapp/state"

const store$ = observable({});
const messages$ = observable(() => store$?.messages);
const groups$ = observable(() => store$?.groups);
const typing$ = observable(() => store$?.typing);
const header$ = observable(() => store$?.headers);

export default store$;