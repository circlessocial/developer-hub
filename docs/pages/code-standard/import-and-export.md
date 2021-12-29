# Imports and exports

- We have to use named export instead of `export default`<br />
  default exports allow developers to import modules with different names and we'll lose consistency.

```js
//bad
export default () => {};
```

```js
//good
export formatAmount =  () => {}
```

- Root directories with aliases (e.g. `components`, `screens`, `utilities`, `assets` etc), must have`index.ts` to export modules
  this will help to avoid name duplication of exported elements and keep imports cleaner

```
//example of file structure
hooks
 ┣ index.ts
 ┣ types.ts
 ┣ useForm.ts
 ┣ useImageLibrary.ts
 ┣ useLazyQuery.ts
 ┣ useLogout.ts
 ┣ useMe.ts
 ┣ useMutation.ts
 ┣ useQuery.ts
 ┗ useToken.ts
```

```js
// index.js
export * from "./types";
export * from "./useForm";
export * from "./useImageLibrary";
export * from "./useLazyQuery";
export * from "./useLogout";
export * from "./useMe";
export * from "./useMutation";
export * from "./useQuery";
export * from "./useToken";
```

- We have to avoid imports with `* as` syntax (`import * as actions from ./actions`) (it imports every action, when we need only single one)
- If we are going to use third party library, better to import implicitly method which we need - this will optimize `js` bundle size

```js
//bad
import _ from "lodash";
```

```js
//good
import {get} `lodash`
```

**Aliases**

- For root directories we have to use aliases. e.g:

```js
// bad
import AgentEducationScreen, {
  AgentEducationStep,
} from "../../../screens/Agent/AgentEducation/AgentEducationScreen";

//good
import { AgentEducationScreen, AgentEducationStep } from "@screens";
```
