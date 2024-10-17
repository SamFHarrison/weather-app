This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Welcome

My wireframe designs can be found [here](https://www.figma.com/design/yvqEr8D9NDUkNZAboKocYO/My-Brain-In-The-Form-Of-A-Figma-File?node-id=633-1066).

## Improvements I'd like to make

- Extract duplicate types e.g. Error, isLoading etc.
- Refactor `<ComboBox />` to be more generic and re-usable.
- Decide and implement an appropriate stale time on `getWeather` cache.
- Create a error listener that dynamically displays error notications.
- Refactor how `searchedLocations` is reset `onSelect`.
- Design system
  - Create root css variables for spacing.
  - Create utility classes for typography.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
