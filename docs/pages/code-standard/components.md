# Components

We can split components in to two category: `Smart components` and `Dumb components`.
Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI.

## Common characteristics of smart components include

- Manipulates Data: Smart components can fetch, capture changes and pass down application data.
- Call Redux, Lifecycle methods, APIs, Libraries, etc These components are called smart for a reason! They are responsible for calling libraries and functionality.
- Manage state: Smart components are responsible for managing state and knowing when to re-render a component.
- Rarely includes styling since dumb components focus on styling, it allows the smart component to focus on functionality without the clutter of styles too.

> 🤓 Smart components focus on how things work.

## Common characteristics of dumb components

- Focus on the UI almost all basic UI components should be considered dumb components. Examples include loaders, modals, buttons, inputs, etc.
- Accept props: Dumb components accept props, allowing them to be dynamic and reusable. For example, you might send the title of a button in props from the parent component to allow it to have a - unique name.
- Require no app dependencies other than UI packages, like Reactstrap. Dumb components do not require dependencies.
- Rarely include state: The only instance where a dumb component has state is for manipulating the UI itself, not application data. Some examples of where a dumb component might have state would be button groups, tabs, switches and other UI elements that do not impact the data, only the UI.

> 🦄 Dumb components focus on how things look.

[Categorizing Components Into Smart & Dumb Components, in React](https://www.digitalocean.com/community/tutorials/react-smart-dumb-components)
