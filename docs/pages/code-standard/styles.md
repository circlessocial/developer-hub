# Styles

- No inline styles
- Style name also will be used to describe `JSX` element, so It's ok to keep empty object in `.style.ts` file ( e.g. `titleText {}` )
- Do not split styles to re-use part of it and later to set multiple styles inside `JSX`. Better do duplicate style rules
- No multiple styles allowed except `components`. If there is need to have dynamic value in to style, you have to merge it before setting style inside component. e.g:

```MyComponent.style.ts
...
container: {
    margin: 10
}
...
```

```MyComponent.ts
...
const dynamicContainerStyle = {
    ...styles.container,
    backgroundColor: '#ff0000
}
```

- Dynamic styles must have `dynamic` as prefix and `Style` as suffix
- Styles which are coming as props must have `.Style` suffix (e.g. `containerStyle`)
- Avoid to use hard coded values (mainly `spacings` and `colors` will be imported from `@components` library )
