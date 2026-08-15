# swinky-design-system

Shared, themeable React Native component library. Components read all
colors/spacing/type/shadows from a `Theme` object via React Context, so the
same component code can render as different visual themes.

## Structure

- `src/tokens/types.ts` — the `Theme` shape every theme must implement
- `src/tokens/themes/` — one file per theme:
  - `swinkels.ts` — base playful-cartoon theme (placeholder colors, see TODO below)
  - `midnightGold.ts` — dark/gold theme used by `recepten_app`
- `src/theme/ThemeProvider.tsx` — React Context that makes the active theme
  available anywhere in the tree via `useTheme()`
- `src/components/` — token-driven components: `Button`, `Card`, `Badge`,
  `IconButton`, `Input`, `Checkbox`

## Usage

Wrap the app once with the theme you want active:

```tsx
import { ThemeProvider, midnightGold } from 'swinky-design-system';

export default function App() {
  return (
    <ThemeProvider theme={midnightGold}>
      {/* rest of app */}
    </ThemeProvider>
  );
}
```

Then use components anywhere:

```tsx
import { Button, Card } from 'swinky-design-system';

<Card>
  <Button label="Save recipe" onPress={...} />
</Card>
```

## TODO

- `swinkels.ts` colors are placeholders — replace with the real hex values
  from the full Swinkels design-system guide once available.
- `danger` / `dangerSoft` in `midnightGold.ts` are placeholders pending the
  base system's real `--color-danger` value.
- Fonts (Lora, Nunito Sans, Fredoka, Nunito) are referenced by family name
  only — the consuming app must load them itself, e.g. via
  `@expo-google-fonts` + `expo-font`.
- Icons (Phosphor) aren't included here — add `phosphor-react-native` in the
  consuming app.
- No build step yet; consumed as raw TypeScript source. Fine for local
  linking, but will need a bundler step (e.g. `react-native-builder-bob`)
  before publishing to npm.
- Not yet wired up as a dependency of `recepten_app` — see that repo.
