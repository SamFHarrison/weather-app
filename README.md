This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Welcome

My UI deesigns can be found [here](https://www.figma.com/design/yvqEr8D9NDUkNZAboKocYO/My-Brain-In-The-Form-Of-A-Figma-File?node-id=633-1066) on Figma.

## To-Do list

I've quickly prioritised these actions into:

- **Major**: Complete first!
- **Minor**: Needed, but can be on backburner.
- **Nice To Have**: Not needed for production (Feature ideas, DX improvements etc.).

### Major

- [ ] Test all components
- [ ] Refactor how `searchedLocations` is reset `onSelect` and `onBlur`.
- [ ] Fix the visual bug on the scroll bar in `<Combobox />`.
- [ ] Focus outline on search bar.
- [ ] Clicking on search icon should focus on search input.

### Minor

- [ ] Extract duplicate types e.g. Error, isLoading etc.
- [ ] Decide and implement an appropriate stale time on `getWeather` cache.
- [ ] Extract `<Callout />` component with an `error` variant.
- [ ] Create utility classes for typography.
- [ ] Create root CSS variables for spacing.
- [ ] Extract `<DefinitionList />` component.
- [ ] Use `Promise.all()` in `getWeather` so artificial promise delay is 800ms minimum rather than delay + the real call.

### Nice To Have

- [ ] Put location parameter in URL so user has browser history of searches.
- [ ] Refactor `<ComboBox />` to be more generic and re-usable.
- [ ] Create an error listener that dynamically displays error notications.
- [ ] Create `.glass-container` utility class.
- [ ] Could implement a library like `clsx` in the `<Toggle />` component.
- [ ] Create `<Icon />` component.
- [ ] Dynamic favicon.
- [ ] Change Cel/Fahr choice to Metric/Imperial and change all scales (eg. mph/kph etc.).
- [ ] Weather icons are slightly pixalated.
- [ ] Replace `dayjs` with `date-fns`.

## Running the app

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For the [Weather API](https://www.weatherapi.com/) to work in your local development environment, sign up to the platform to get an API key. Create a `.env.local` file at the top most level of the workspace and add the following variables:

```
NEXT_PUBLIC_WEATHER_BASE_API_URL=https://api.weatherapi.com/v1

NEXT_PUBLIC_WEATHER_API_KEY=<YOUR_API_KEY_HERE>
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
