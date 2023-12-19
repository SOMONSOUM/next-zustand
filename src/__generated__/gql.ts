/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LoginAdminUser($input: LoginAdminUserInput) {\n    loginAdminUser(input: $input) {\n      token\n    }\n  }\n": types.LoginAdminUserDocument,
    "\n  query AdminMe {\n    adminMe {\n      id\n      email\n      first_name\n      last_name\n      user_profile\n      role {\n        id\n        name\n        read\n        write\n        update\n        remove\n      }\n    }\n  }\n": types.AdminMeDocument,
    "\n  query GdceOverviewExportsList($pagination: PaginationInput) {\n    gdceOverviewExportsList(pagination: $pagination) {\n      exports_list {\n        destination_country\n        custom_value_usd\n        hs_code\n        quantity\n        description_eng\n        sub_items {\n          hs_code\n          total_value\n          description_eng\n        }\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n": types.GdceOverviewExportsListDocument,
    "\n  query GdceOverviewImportsList($pagination: PaginationInput) {\n    gdceOverviewImportsList(pagination: $pagination) {\n      imports_list {\n        origin_country\n        custom_value_usd\n        hs_code\n        quantity\n        description_eng\n        sub_items {\n          hs_code\n          total_value\n          description_eng\n        }\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n": types.GdceOverviewImportsListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginAdminUser($input: LoginAdminUserInput) {\n    loginAdminUser(input: $input) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation LoginAdminUser($input: LoginAdminUserInput) {\n    loginAdminUser(input: $input) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AdminMe {\n    adminMe {\n      id\n      email\n      first_name\n      last_name\n      user_profile\n      role {\n        id\n        name\n        read\n        write\n        update\n        remove\n      }\n    }\n  }\n"): (typeof documents)["\n  query AdminMe {\n    adminMe {\n      id\n      email\n      first_name\n      last_name\n      user_profile\n      role {\n        id\n        name\n        read\n        write\n        update\n        remove\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GdceOverviewExportsList($pagination: PaginationInput) {\n    gdceOverviewExportsList(pagination: $pagination) {\n      exports_list {\n        destination_country\n        custom_value_usd\n        hs_code\n        quantity\n        description_eng\n        sub_items {\n          hs_code\n          total_value\n          description_eng\n        }\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n"): (typeof documents)["\n  query GdceOverviewExportsList($pagination: PaginationInput) {\n    gdceOverviewExportsList(pagination: $pagination) {\n      exports_list {\n        destination_country\n        custom_value_usd\n        hs_code\n        quantity\n        description_eng\n        sub_items {\n          hs_code\n          total_value\n          description_eng\n        }\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GdceOverviewImportsList($pagination: PaginationInput) {\n    gdceOverviewImportsList(pagination: $pagination) {\n      imports_list {\n        origin_country\n        custom_value_usd\n        hs_code\n        quantity\n        description_eng\n        sub_items {\n          hs_code\n          total_value\n          description_eng\n        }\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n"): (typeof documents)["\n  query GdceOverviewImportsList($pagination: PaginationInput) {\n    gdceOverviewImportsList(pagination: $pagination) {\n      imports_list {\n        origin_country\n        custom_value_usd\n        hs_code\n        quantity\n        description_eng\n        sub_items {\n          hs_code\n          total_value\n          description_eng\n        }\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;