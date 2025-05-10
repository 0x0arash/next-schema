import type { WithContext, Thing } from "schema-dts";

type JsonSchemaLd<T extends Thing> = WithContext<T>;

export const JsonLdSchema = <T extends Thing>({
  schema,
}: {
  schema: JsonSchemaLd<T>;
}) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};
