# Smart components

For our app, 99% of the time, `smart` components will be screen components.

- We have to keep only one level of depth under the `screens` directory (to avoid deep nesting)
- Every directory under the `screen` directory is `Flow.`
- Some flow might have one or multiple screens (e.g., `Dashboard` is `flow` with one screen, `Profile` is `flow` with multiple screens)
- Every screen name must have a prefix of the `Flow` it belongs (e.g., Flow: `Profile`, Screens: `ProfileDisplay`, `ProfileCreate`, `ProfileUpdate`)
- Every screen must have the same file structure (Sometimes for particular screens, some files won't be needed. Let's say some screens won't have a need to has `styles`, but style file needs to exist and imported inside of screen even it will be empty, because a) we have to keep consistency and b) we might need styles in the future so, the file will exist in advance c) we can use generators and will make life easier
- If flow has multiple screens, it might have `share` directory to keep some shared functionality between screens (For example, types, but we have to have shared files)

```
//before `screens > profile`

Profile
 ┣ Create.tsx
 ┣ Display.tsx
 ┣ Update.tsx
 ┣ index.ts
 ┣ styles.ts
 ┣ types.ts
 ┗ utils.ts
```

```
//after

Profile
 ┣ ProfileCreate.style.ts
 ┣ ProfileCreate.test.ts
 ┣ ProfileCreate.tsx
 ┣ ProfileCreate.type.ts
 ┣ ProfileCreate.view.tsx
 ┣ ProfileDisplay.style.ts
 ┣ ProfileDisplay.test.ts
 ┣ ProfileDisplay.tsx
 ┣ ProfileDisplay.type.tsx
 ┣ ProfileDisplay.view.tsx
 ┣ ProfileUpdate.style.ts
 ┣ ProfileUpdate.test.ts
 ┣ ProfileUpdate.tsx
 ┣ ProfileUpdate.type.ts
 ┗ ProfileUpdate.view.tsx
```

Some important notes:

- We have to keep any Dumb components as shared as `components` library (same applies to `hooks` and `utilities`)
- Screen component will have almost the same structure as dumb components:

  - `ScreenName.jsx` - Logic implementation, API calls, State management
  - `ScreenName.view.jsx` - only UI representation
  - `ScreenName.style.js` - Style rules. Mainly spacing between components etc
  - `ScreenName.type.js` - type definitions that belong to the same screen
  - `ScreenName.test.js` - for screens end to end tests

  - As we said, we might have few screens under the directory which are part of the same feature. We don't need to group them by directory<br />
    _(Directories with single-screen will have the same structure as directories with multiple screens. Also, VSC will support. Don't forget to vote up this issue !!! [nesting files](https://github.com/microsoft/vscode/issues/6328) soon_<br />
  - If we'll have screens that have shared types, we can create an additional file as an exemption with flow name inside of a shared directory. (e.g. `Profile.type.ts`)
    _note: `share` directory is more exception then rule. It will be needed in very rear cases!_

  So, by the end of the day screen directory might look like this:

```
Profile
 ┣ share
 ┃ ┗ Profile.type.ts
 ┣ ProfileCreate.style.ts
 ┣ ProfileCreate.test.ts
 ┣ ProfileCreate.tsx
 ┣ ProfileCreate.type.ts
 ┣ ProfileCreate.view.tsx
 ┣ ProfileDisplay.style.ts
 ┣ ProfileDisplay.test.ts
 ┣ ProfileDisplay.tsx
 ┣ ProfileDisplay.type.tsx
 ┣ ProfileDisplay.view.tsx
 ┣ ProfileUpdate.style.ts
 ┣ ProfileUpdate.test.ts
 ┣ ProfileUpdate.tsx
 ┣ ProfileUpdate.type.ts
 ┗ ProfileUpdate.view.tsx
```
