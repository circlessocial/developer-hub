# Conventions

## General conventions

- No articles in naming (`makeReview` instead of `makeAReview`)
- Singular over Plural for object or list (`color.red` instead `colors.red`)
- Prefixes over Deep Nesting (If possible use Prefix to group files visually inside of directory instead of deep nesting directories)
- No short forms (Let's try to avoid any short forms to make this simple)
- While describing methods use arrow function convention
- Components must have content agnostic naming (e.g. `CardList` instead of `GuideSteps`)
- Names should be descriptive and easy to understand

## File name conventions

- Files which includes `JSX` must have `.jsx` extension
- Directories always are `camelCase`
- Components, Screens and related files must be `PascalCase`
- Every file (including `utilities`, `constants`, `routs`, `assets` etc except files describe above) names always are `camelCase`
- Component/Class name and file name must be the same

## Recommendation

- If you are setting conditionally `null` or `undefined` most probably there are shorter way:

```javaScript
const newVariable = someValue ? SetThis : null
```

might be replaced

```javaScript
const newVariable = someValue && SetThis
```

Same applies for conditional `JSX` rendering

- Functional over class components
- Hooks over HOC
- KISS - keep it stupid simple
- Remove console.logs before commit
- Use `console.warn` if there is need to notify developer about missing property for example
