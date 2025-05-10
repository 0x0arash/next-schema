# Next Schema

## What

`next-schema` provides a simple utility to inject JSON-LD structured data into your Next.js applications using the schema-dts definitions. It is built with TypeScript and React, ensuring type-safety and efficient rendering.

## Why

- Simplify the integration of JSON-LD schema markup in Next.js projects.
- Provide a type-safe interface using schema-dts to generate structured data.

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

Import and use the `JsonLdSchema` component to embed JSON-LD data in your pages or components. The types for the schema property are inferred, so you don't need to import them manually.

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
      {/* ...existing code... */}
    </div>
  );
}
```

## Scripts

The following scripts are available in `package.json`:

- `dev`: Runs TypeScript in watch mode.
- `build`: Compiles the TypeScript files to JavaScript in the `dist` directory.

## Project Structure

```plaintext
c:\Users\ghorb\repos\next-schema\
├── packages\
│   └── next-schema\
│       ├── src\
│       │   └── schema.tsx
│       ├── dist\
│       ├── tsconfig.json
│       └── package.json
└── README.md
```

## Contributing

Contributions are welcome. Please fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
