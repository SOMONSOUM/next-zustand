import { DocumentNode } from "@apollo/client";
import { print } from "graphql/language/printer";

const endpoint = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "https://test-api-cl.moc.gov.kh/graphql";

export async function getDataFromGql(
  gqlData: DocumentNode,
  variables: any = undefined
) {
  const data = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(gqlData),
      variables,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return data;
}
