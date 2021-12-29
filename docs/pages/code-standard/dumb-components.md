# Dumb components

- Dumb components mainly will live under our `common components` but we might have some per application
- Each component must have own directory
- Directory will have the same name as component with camelCase
- Every component will have the following structure:
  - `ComponentName.jsx` - main files have no outside dependencies (no API calls, state free, any data from outside)
  - `ComponentName.style.js` - Style rules
  - `ComponentComponent.type.js` - `TypeScript` any type definition needed for this component (including view, main component etc)
- We have to try to export small functionality as utility functions or as hooks

# Naming of dumb component elements

As we said, dumb components only care how UI looks. So, when we are creating dumb components, even if in the given moment it's for a particular screen, we have to keep naming content agnostic.
Let's say we have component which shows list of sent, confirmed and rejected invites:

intuitively we might easily end up with such naming:

```js
export default function index() {
  return (
    <View style={styles.labelsContainer}>
      <Text style={styles.sent}></Text>
      <Text style={styles.rejected}></Text>
      <Text style={styles.balance}></Text>
    </View>
  );
}
```

Looks logical. Isn't it? But, some other developer might have almost the same component to implement:

If you take a look, it looks the same. Just the icon is different and balance field is hidden. So, what would be the right approached to name component elements?

What do you have to do, forget about the UI element's meaning inside of the screen and just focus on what visual role they have for the component itself. Here is the correct implementation of this component which fits other visual variations as well:

```js
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@components';
import {calendarIcon} from '@images'

export default function index({
  containerStyled,

  topTitleContainerStyle,
  topTitleTextStyle,
  topTitle,

  titleContainerStyle,
  titleTextStyle,
  title,

  subTitleContainerStyle,
  subTitleTextStyle,
  bottomTitle,

  icon = calendarIcon,
  iconStyle,
}) {
  return (
    <View style={styles.container}>
      <View>
        {!!topTitle && (
          <View style={[style.topTitleContainer, topTitleContainerStyle]}>
            <Text style={[style.topTitleText, topTitleTextStyle]}>{topTitle}</Text>
          </View>
        )}

        {!!title && (
          <View style={[style.titleContainer, titleContainerStyle]}>
            <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
          </View>
        )}

        {!!subTitle && (
          <View style={[style.subTitleContainer, subTitleContainerStyle]}>
            <Text style={[style.subTitleText, subTitleTextStyle]}>{subTitle}</Text>
          </View>
        )}
      </View>
      {<Icon src={icon} style={iconStyle} />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {...},

    topTitleContainer: {...},
    topTitleText: {...},

    titleContainer: {...},
    titleText: {...},

    subTitleContainer: {...},
    subTitleText: {...}
})
```

**_Few important notes_**

- `Text` elements have an extra `View` Wrapper with style property. You might not need them now, but it gives more controls over the component. (for example, you might need to set background color with rounded corners for text, and make them look like as label)

- before logical AND `&&` operation Double negation `!!title` is used to check if property has value or not. `!!` ensures that value will be transformed to boolean. If we keep `title` directly, we might get empty value from API response, empty string won't be converted to `true` and react native will crash with error: `Invariant Violation: Text strings must be rendered within a <Text> component.`. You can use the same trick for `!!array.length`

- Our conditional rendering check includes `View`. If value will be empty, view won't be rendered as well. Less elements are better for virtual DOM

- Properties for style have `containerStyle` ending. While normal styles have different suffixes, because class name identifies it as styles anyway: `styles.container`

- To avoid name conflicts between container and text styles, and to keep consistency throughout the app, it's good to have this convention:
  container styles will have `...ContainerStyle` suffix and text styles `...textStyle`

- There is no need for conditional rendering if property has default value. (`Icon` component has no check, because it has default value)
