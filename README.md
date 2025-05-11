# Next Schema

A type-safe React component for injecting JSON-LD structured data in Next.js apps using [schema-dts](https://github.com/google/schema-dts).

## What

`next-schema` is a lightweight React component built with TypeScript that allows you to inject JSON-LD structured data into your Next.js applications. It leverages the [`schema-dts`](https://github.com/google/schema-dts) library to provide type-safe schema definitions, ensuring your structured data is valid and easy to maintain.

## Features

- Type-safe JSON-LD schemas powered by [`schema-dts`](https://github.com/google/schema-dts)
- Simple React component interface
- Seamless integration with Next.js
- Lightweight and zero runtime dependencies (only Typescript types)

## Why

- Simplify the integration of JSON-LD schema markup in Next.js projects.
- Provide a type-safe interface using [`schema-dts`](https://github.com/google/schema-dts) to generate structured data.

## Where

Install the package via your preferred package manager:

```bash
pnpm add next-schema
# or
npm install next-schema
# or
yarn add next-schema
```

## How

Import and use the `JsonLdSchema` component to embed JSON-LD data in your pages or components. The `schema` prop is fully typed using [`schema-dts`](https://github.com/google/schema-dts), so you get autocomplete and type safety without extra imports.

```tsx
import { JsonLdSchema } from "next-schema";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Example Site</h1>
      <JsonLdSchema
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Example Site",
          url: "https://www.example.com",
        }}
      />
    </div>
  );
}
```

## Usage with Next.js

The `JsonLdSchema` component works seamlessly with Next.js, supporting both client-side and server-side rendering. Simply include it in your page components or `_app.tsx` to inject structured data.

## Scripts

The following scripts are available in `package.json`:

- `dev`: Runs TypeScript in watch mode.
- `build`: Compiles the TypeScript files to JavaScript in the `dist` directory.

## Project Structure

```plaintext
├── packages/
│   └── next-schema/
│       ├── src/
│       │   └── schema.tsx
│       ├── dist/
│       ├── tsconfig.json
│       └── package.json
└── README.md
```

## Contributing

Contributions are welcome. Please fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
