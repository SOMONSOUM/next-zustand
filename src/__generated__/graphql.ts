/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AdminUser = {
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type AdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_profile?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUserList = {
  data?: Maybe<Array<Maybe<AdminUser>>>;
  pagination?: Maybe<Pagination>;
};

export type AssignRoleInput = {
  roleId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type CoExportsInput = {
  data?: InputMaybe<Array<InputMaybe<CoExportsInputDetail>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
};

export type CoExportsInputDetail = {
  destination_country?: InputMaybe<Scalars['String']['input']>;
  fob_value_usd?: InputMaybe<Scalars['Float']['input']>;
  form_type?: InputMaybe<Scalars['String']['input']>;
  hs_code?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ChangePasswordAdminUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  code?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<CountryName>;
  country_image?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CountryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  country_image?: InputMaybe<Scalars['String']['input']>;
  country_name_en?: InputMaybe<Scalars['String']['input']>;
  country_name_kh?: InputMaybe<Scalars['String']['input']>;
};

export type CountryList = {
  data?: Maybe<Array<Maybe<Country>>>;
  pagination?: Maybe<Pagination>;
};

export type CountryName = {
  en?: Maybe<Scalars['String']['output']>;
  kh?: Maybe<Scalars['String']['output']>;
};

export type CreateNewPasswordAdminUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
};

export type ExportTopFivePotentialProduct = {
  hs_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<ExportTopFivePotentialProductDetail>>>;
};

export type ExportTopFivePotentialProductDetail = {
  month?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type ExportTopFivePotentialProductList = {
  data?: Maybe<Array<Maybe<ExportTopFivePotentialProduct>>>;
};

export type Exports = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  websiteId?: Maybe<Scalars['Int']['output']>;
};

export type ExportsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
};

export type ExportsInputDetail = {
  custom_value_khr?: InputMaybe<Scalars['Float']['input']>;
  custom_value_usd?: InputMaybe<Scalars['Float']['input']>;
  destination_country?: InputMaybe<Scalars['String']['input']>;
  hs_code?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  net_weight_kgm?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  supplementary_unit?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ExportsList = {
  data?: Maybe<Array<Maybe<Exports>>>;
  pagination?: Maybe<Pagination>;
};

export type ExportsRecordInput = {
  data?: InputMaybe<Array<InputMaybe<ExportsInputDetail>>>;
  exports_id?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
};

export type GdceByCountryAndHsCodeReport = {
  balanceEachYear?: Maybe<Array<Maybe<GdceByCountryReportBalanceEachYear>>>;
  exportsList?: Maybe<Array<Maybe<GdceExports>>>;
  exports_total_qty?: Maybe<Scalars['Float']['output']>;
  importsList?: Maybe<Array<Maybe<GdceImports>>>;
  imports_total_qty?: Maybe<Scalars['Float']['output']>;
  volumeEachYear?: Maybe<Array<Maybe<GdceByCountryReportVolumeEachYear>>>;
};

export type GdceByCountryExportDetail = {
  total_products?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
};

export type GdceByCountryExportsList = {
  exports_list?: Maybe<Array<Maybe<GdceExports>>>;
  pagination?: Maybe<Pagination>;
};

export type GdceByCountryFormType = {
  fob_value_usd?: Maybe<Scalars['String']['output']>;
  form_type?: Maybe<Scalars['String']['output']>;
};

export type GdceByCountryFormTypeFilter = {
  country_code?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type GdceByCountryImportDetail = {
  total_products?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
};

export type GdceByCountryImportsList = {
  imports_list?: Maybe<Array<Maybe<GdceImports>>>;
  pagination?: Maybe<Pagination>;
};

export type GdceByCountryReport = {
  country_image?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  exportsEachYear?: Maybe<Array<Maybe<GdceByCountryReportValueEachYear>>>;
  importsEachYear?: Maybe<Array<Maybe<GdceByCountryReportValueEachYear>>>;
};

export type GdceByCountryReportBalanceEachYear = {
  balance?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type GdceByCountryReportFilters = {
  country?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type GdceByCountryReportValueEachYear = {
  month?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type GdceByCountryReportVolumeEachYear = {
  volume?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type GdceByCountrySubHscodeType = {
  hs_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GdceByProductImportExportEachYear = {
  month?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type GdceByProductReport = {
  exports_total_qty?: Maybe<Scalars['Float']['output']>;
  imports_total_qty?: Maybe<Scalars['Float']['output']>;
  topTenExportsCountry?: Maybe<Array<Maybe<TopTenExportsCountry>>>;
  topTenImportsCountry?: Maybe<Array<Maybe<TopTenImportsCountry>>>;
  total_balance?: Maybe<Scalars['Float']['output']>;
  total_volume?: Maybe<Scalars['Float']['output']>;
};

export type GdceByProductReportFilter = {
  from: Scalars['String']['input'];
  hs_code: Scalars['String']['input'];
  hs_code_type?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type GdceByProductSubHscode = {
  hs_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type GdceExports = {
  custom_value_usd?: Maybe<Scalars['Float']['output']>;
  description_eng?: Maybe<Scalars['String']['output']>;
  destination_country?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sub_items?: Maybe<Array<Maybe<GdceSubItemExports>>>;
};

export type GdceImports = {
  custom_value_usd?: Maybe<Scalars['Float']['output']>;
  description_eng?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sub_items?: Maybe<Array<Maybe<GdceSubItemImports>>>;
};

export type GdceOverviewExports = {
  custom_value_usd?: Maybe<Scalars['Float']['output']>;
  description_eng?: Maybe<Scalars['String']['output']>;
  destination_country?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sub_items?: Maybe<Array<Maybe<GdceOverviewSubItemExports>>>;
};

export type GdceOverviewExportsList = {
  exports_list?: Maybe<Array<Maybe<GdceOverviewExports>>>;
  pagination?: Maybe<Pagination>;
};

export type GdceOverviewImports = {
  custom_value_usd?: Maybe<Scalars['Float']['output']>;
  description_eng?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sub_items?: Maybe<Array<Maybe<GdceOverviewSubItemImports>>>;
};

export type GdceOverviewImportsList = {
  imports_list?: Maybe<Array<Maybe<GdceOverviewImports>>>;
  pagination?: Maybe<Pagination>;
};

export type GdceOverviewSubItemExports = {
  description_eng?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
};

export type GdceOverviewSubItemImports = {
  description_eng?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
};

export type GdceOverviewTopTenExportCountries = {
  country?: Maybe<Scalars['String']['output']>;
  country_image?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type GdceOverviewTopTenImportCountries = {
  country?: Maybe<Scalars['String']['output']>;
  country_image?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type GdceOverviewTotalExportType = {
  total_export?: Maybe<Scalars['String']['output']>;
  total_export_qty?: Maybe<Scalars['String']['output']>;
};

export type GdceOverviewTotalImportType = {
  total_import?: Maybe<Scalars['String']['output']>;
  total_import_qty?: Maybe<Scalars['String']['output']>;
};

export type GdceProduct = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GdceProductList = {
  data?: Maybe<Array<Maybe<GdceProduct>>>;
};

export type GdceStatisticByCountry = {
  country?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  current_month_value?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type GdceStatisticByCountryFilter = {
  country?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type GdceStatisticByProduct = {
  current_month_value?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type GdceStatisticByProductFilter = {
  country?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['Int']['input']>;
  hs_code?: InputMaybe<Scalars['String']['input']>;
  hs_code_type?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type GdceSubItemExports = {
  description_eng?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
};

export type GdceSubItemImports = {
  description_eng?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
};

export type ImportExportCategoryFilter = {
  country?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  month?: InputMaybe<Scalars['String']['input']>;
  second_month?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ImportExportCategoryType>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export enum ImportExportCategoryType {
  Export = 'EXPORT',
  Import = 'IMPORT'
}

export type ImportExportFilter = {
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  month?: InputMaybe<Scalars['String']['input']>;
  second_month?: InputMaybe<Scalars['String']['input']>;
  second_year?: InputMaybe<Scalars['String']['input']>;
  semester?: InputMaybe<Scalars['String']['input']>;
  timeframe?: InputMaybe<Scalars['String']['input']>;
  trimester?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ImportExportStatisticFilter = {
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  month?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  second_month?: InputMaybe<Scalars['String']['input']>;
  second_year?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ImportExportCategoryType>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ImportExportTopTenProduct = {
  exports?: Maybe<Array<Maybe<TopTenExports>>>;
  imports?: Maybe<Array<Maybe<TopTenImports>>>;
};

export type ImportExportTopTenProductByCountryFilter = {
  byCountry?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  selectedYear?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type Imports = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  websiteId?: Maybe<Scalars['Int']['output']>;
};

export type ImportsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
};

export type ImportsInputDetail = {
  custom_value_khr?: InputMaybe<Scalars['Float']['input']>;
  custom_value_usd?: InputMaybe<Scalars['Float']['input']>;
  hs_code?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  net_weight_kgm?: InputMaybe<Scalars['Float']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  supplementary_unit?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ImportsList = {
  data?: Maybe<Array<Maybe<Imports>>>;
  pagination?: Maybe<Pagination>;
};

export type ImportsRecordInput = {
  data?: InputMaybe<Array<InputMaybe<ImportsInputDetail>>>;
  imports_id?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
};

export type LoginAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  token?: Maybe<Scalars['String']['output']>;
};

export type ManageRolePermissionInput = {
  read?: InputMaybe<Scalars['Boolean']['input']>;
  remove?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  write?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  assignRoleToAdminUser?: Maybe<Ok>;
  changePasswordAdminUser?: Maybe<Ok>;
  createAdminUser?: Maybe<Ok>;
  createCOExports: Scalars['Int']['output'];
  createExports: Scalars['Int']['output'];
  createExportsRecord?: Maybe<Scalars['Boolean']['output']>;
  createImports: Scalars['Int']['output'];
  createImportsRecord?: Maybe<Scalars['Boolean']['output']>;
  createNewPasswordAdminUser?: Maybe<Ok>;
  createRole?: Maybe<Ok>;
  createTest?: Maybe<Scalars['String']['output']>;
  deleteCOExports?: Maybe<Scalars['Boolean']['output']>;
  deleteExports?: Maybe<Scalars['Boolean']['output']>;
  deleteImports?: Maybe<Scalars['Boolean']['output']>;
  loginAdminUser?: Maybe<LoginResponse>;
  manageRolePermission?: Maybe<Ok>;
  registerAdminUser?: Maybe<Ok>;
  resetPasswordAdminUser?: Maybe<Ok>;
  updateAdminUser?: Maybe<Ok>;
  updateCountry?: Maybe<Scalars['Boolean']['output']>;
  updateExports?: Maybe<Scalars['Boolean']['output']>;
  updateImports?: Maybe<Scalars['Boolean']['output']>;
  updateTest?: Maybe<Scalars['Boolean']['output']>;
  uploadDocument?: Maybe<Scalars['String']['output']>;
  uploadImage?: Maybe<Scalars['String']['output']>;
  verifyVerificationCodeAdminUser?: Maybe<Ok>;
};


export type MutationAssignRoleToAdminUserArgs = {
  input: AssignRoleInput;
};


export type MutationChangePasswordAdminUserArgs = {
  input?: InputMaybe<ChangePasswordAdminUserInput>;
};


export type MutationCreateAdminUserArgs = {
  input?: InputMaybe<AdminUserInput>;
};


export type MutationCreateCoExportsArgs = {
  input?: InputMaybe<CoExportsInput>;
};


export type MutationCreateExportsArgs = {
  input?: InputMaybe<ExportsInput>;
};


export type MutationCreateExportsRecordArgs = {
  input?: InputMaybe<ExportsRecordInput>;
};


export type MutationCreateImportsArgs = {
  input?: InputMaybe<ImportsInput>;
};


export type MutationCreateImportsRecordArgs = {
  input?: InputMaybe<ImportsRecordInput>;
};


export type MutationCreateNewPasswordAdminUserArgs = {
  input?: InputMaybe<CreateNewPasswordAdminUserInput>;
};


export type MutationCreateRoleArgs = {
  input: RoleInput;
};


export type MutationCreateTestArgs = {
  input?: InputMaybe<TestInput>;
};


export type MutationDeleteCoExportsArgs = {
  coExportId: Scalars['Int']['input'];
};


export type MutationDeleteExportsArgs = {
  exportId: Scalars['Int']['input'];
};


export type MutationDeleteImportsArgs = {
  importId: Scalars['Int']['input'];
};


export type MutationLoginAdminUserArgs = {
  input?: InputMaybe<LoginAdminUserInput>;
};


export type MutationManageRolePermissionArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ManageRolePermissionInput>;
};


export type MutationRegisterAdminUserArgs = {
  input?: InputMaybe<AdminUserInput>;
};


export type MutationResetPasswordAdminUserArgs = {
  input?: InputMaybe<ResetPasswordAdminUserInput>;
};


export type MutationUpdateAdminUserArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<AdminUserInput>;
};


export type MutationUpdateCountryArgs = {
  countryId: Scalars['Int']['input'];
  input?: InputMaybe<CountryInput>;
  websiteId: Scalars['Int']['input'];
};


export type MutationUpdateExportsArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ExportsInput>;
};


export type MutationUpdateImportsArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ImportsInput>;
};


export type MutationUpdateTestArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<TestInput>;
};


export type MutationUploadDocumentArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationVerifyVerificationCodeAdminUserArgs = {
  input?: InputMaybe<VerifyVerificationCodeInput>;
};

export type Ok = {
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type Pagination = {
  current?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  adminMe?: Maybe<AdminUser>;
  adminUserDetail?: Maybe<AdminUser>;
  adminUserList?: Maybe<AdminUserList>;
  countryDetail?: Maybe<Country>;
  countryList?: Maybe<CountryList>;
  exportTopFivePotentialProduct?: Maybe<ExportTopFivePotentialProductList>;
  exportsDetail?: Maybe<Exports>;
  exportsList?: Maybe<ExportsList>;
  gdceByCountryAndHSCodeReport?: Maybe<GdceByCountryAndHsCodeReport>;
  gdceByCountryExportDetail?: Maybe<GdceByCountryExportDetail>;
  gdceByCountryExportsList?: Maybe<GdceByCountryExportsList>;
  gdceByCountryFormType?: Maybe<Array<Maybe<GdceByCountryFormType>>>;
  gdceByCountryImportDetail?: Maybe<GdceByCountryImportDetail>;
  gdceByCountryImportsList?: Maybe<GdceByCountryImportsList>;
  gdceByCountryReport?: Maybe<GdceByCountryReport>;
  gdceByCountrySubHscode?: Maybe<Array<Maybe<GdceByCountrySubHscodeType>>>;
  gdceByProductExportEachYear?: Maybe<Array<Maybe<GdceByProductImportExportEachYear>>>;
  gdceByProductImportEachYear?: Maybe<Array<Maybe<GdceByProductImportExportEachYear>>>;
  gdceByProductReport?: Maybe<GdceByProductReport>;
  gdceByProductSubHscodeExportList?: Maybe<Array<Maybe<GdceByProductSubHscode>>>;
  gdceByProductSubHscodeImportList?: Maybe<Array<Maybe<GdceByProductSubHscode>>>;
  gdceHs2CodeProductList?: Maybe<GdceProductList>;
  gdceHs4CodeProductList?: Maybe<GdceProductList>;
  gdceHs8CodeProductList?: Maybe<GdceProductList>;
  gdceOverviewExportsList?: Maybe<GdceOverviewExportsList>;
  gdceOverviewImportsList?: Maybe<GdceOverviewImportsList>;
  gdceOverviewTopTenExportCountries?: Maybe<Array<Maybe<GdceOverviewTopTenExportCountries>>>;
  gdceOverviewTopTenImportCountries?: Maybe<Array<Maybe<GdceOverviewTopTenImportCountries>>>;
  gdceOverviewTotalExport?: Maybe<GdceOverviewTotalExportType>;
  gdceOverviewTotalImport?: Maybe<GdceOverviewTotalImportType>;
  gdceProductList?: Maybe<GdceProductList>;
  gdceStatisticByCountry?: Maybe<Array<Maybe<GdceStatisticByCountry>>>;
  gdceStatisticByProduct?: Maybe<Array<Maybe<GdceStatisticByProduct>>>;
  importExportCategoryReport?: Maybe<Scalars['JSON']['output']>;
  importExportReport?: Maybe<Scalars['JSON']['output']>;
  importExportStatisticCountryReport?: Maybe<Scalars['JSON']['output']>;
  importExportStatisticProductReport?: Maybe<Scalars['JSON']['output']>;
  importExportTopTenProduct?: Maybe<ImportExportTopTenProduct>;
  importExportTopTenProductByCountry?: Maybe<ImportExportTopTenProduct>;
  importsDetail?: Maybe<Imports>;
  importsList?: Maybe<ImportsList>;
  roleDetail?: Maybe<Role>;
  roleList?: Maybe<Array<Maybe<Role>>>;
  statCountriesList?: Maybe<StatCountriesList>;
  testDetail?: Maybe<Scalars['String']['output']>;
  testList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  topTenProductsForCountryExport?: Maybe<Array<Maybe<TopTenProductsForCountryExport>>>;
  topTenProductsForCountryImport?: Maybe<Array<Maybe<TopTenProductsForCountryImport>>>;
};


export type QueryAdminUserDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryCountryDetailArgs = {
  countryId: Scalars['Int']['input'];
  websiteId: Scalars['Int']['input'];
};


export type QueryCountryListArgs = {
  pagination?: InputMaybe<PaginationInput>;
  websiteId: Scalars['Int']['input'];
};


export type QueryExportsDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryExportsListArgs = {
  pagination: PaginationInput;
  websiteId: Scalars['Int']['input'];
};


export type QueryGdceByCountryAndHsCodeReportArgs = {
  filter?: InputMaybe<GdceByCountryReportFilters>;
  hs_code: Scalars['String']['input'];
};


export type QueryGdceByCountryExportDetailArgs = {
  filter?: InputMaybe<GdceByCountryReportFilters>;
};


export type QueryGdceByCountryExportsListArgs = {
  filter?: InputMaybe<GdceByCountryReportFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGdceByCountryFormTypeArgs = {
  filter?: InputMaybe<GdceByCountryFormTypeFilter>;
};


export type QueryGdceByCountryImportDetailArgs = {
  filter?: InputMaybe<GdceByCountryReportFilters>;
};


export type QueryGdceByCountryImportsListArgs = {
  filter?: InputMaybe<GdceByCountryReportFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGdceByCountryReportArgs = {
  filter?: InputMaybe<GdceByCountryReportFilters>;
};


export type QueryGdceByCountrySubHscodeArgs = {
  hs_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGdceByProductExportEachYearArgs = {
  filter?: InputMaybe<GdceByProductReportFilter>;
};


export type QueryGdceByProductImportEachYearArgs = {
  filter?: InputMaybe<GdceByProductReportFilter>;
};


export type QueryGdceByProductReportArgs = {
  filter?: InputMaybe<GdceByProductReportFilter>;
};


export type QueryGdceByProductSubHscodeExportListArgs = {
  filter?: InputMaybe<GdceByProductReportFilter>;
};


export type QueryGdceByProductSubHscodeImportListArgs = {
  filter?: InputMaybe<GdceByProductReportFilter>;
};


export type QueryGdceOverviewExportsListArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGdceOverviewImportsListArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGdceStatisticByCountryArgs = {
  filter?: InputMaybe<GdceStatisticByCountryFilter>;
};


export type QueryGdceStatisticByProductArgs = {
  filter?: InputMaybe<GdceStatisticByProductFilter>;
};


export type QueryImportExportCategoryReportArgs = {
  filter?: InputMaybe<ImportExportCategoryFilter>;
};


export type QueryImportExportReportArgs = {
  filter?: InputMaybe<ImportExportFilter>;
};


export type QueryImportExportStatisticCountryReportArgs = {
  filter?: InputMaybe<ImportExportStatisticFilter>;
};


export type QueryImportExportStatisticProductReportArgs = {
  filter?: InputMaybe<ImportExportStatisticFilter>;
};


export type QueryImportExportTopTenProductByCountryArgs = {
  filter?: InputMaybe<ImportExportTopTenProductByCountryFilter>;
};


export type QueryImportsDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryImportsListArgs = {
  pagination: PaginationInput;
  websiteId: Scalars['Int']['input'];
};


export type QueryRoleDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTestDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTopTenProductsForCountryExportArgs = {
  country_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopTenProductsForCountryImportArgs = {
  country_code?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPasswordAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  remove?: Maybe<Scalars['Boolean']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
  write?: Maybe<Scalars['Boolean']['output']>;
};

export type RoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StatCountriesList = {
  data?: Maybe<Array<Maybe<StatCountry>>>;
};

export type StatCountry = {
  code?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  country_name_kh?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type TestInput = {
  message?: InputMaybe<Scalars['String']['input']>;
};

export type TopTenExports = {
  description_kh?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type TopTenExportsCountry = {
  country_code?: Maybe<Scalars['String']['output']>;
  country_image?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type TopTenImports = {
  description_kh?: Maybe<Scalars['String']['output']>;
  hs_code?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type TopTenImportsCountry = {
  country_code?: Maybe<Scalars['String']['output']>;
  country_image?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type TopTenProductsForCountryExport = {
  hs_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export type TopTenProductsForCountryImport = {
  hs_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

export enum UserStatus {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type VerifyVerificationCodeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  verificationCode?: InputMaybe<Scalars['String']['input']>;
};

export type LoginAdminUserMutationVariables = Exact<{
  input?: InputMaybe<LoginAdminUserInput>;
}>;


export type LoginAdminUserMutation = { loginAdminUser?: { token?: string | null } | null };

export type AdminMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminMeQuery = { adminMe?: { id?: number | null, email?: string | null, first_name?: string | null, last_name?: string | null, user_profile?: string | null, role?: { id?: number | null, name?: string | null, read?: boolean | null, write?: boolean | null, update?: boolean | null, remove?: boolean | null } | null } | null };

export type GdceOverviewExportsListQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GdceOverviewExportsListQuery = { gdceOverviewExportsList?: { exports_list?: Array<{ destination_country?: string | null, custom_value_usd?: number | null, hs_code?: string | null, quantity?: number | null, description_eng?: string | null, sub_items?: Array<{ hs_code?: string | null, total_value?: number | null, description_eng?: string | null } | null> | null } | null> | null, pagination?: { total?: number | null, size?: number | null, current?: number | null } | null } | null };

export type GdceOverviewImportsListQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GdceOverviewImportsListQuery = { gdceOverviewImportsList?: { imports_list?: Array<{ origin_country?: string | null, custom_value_usd?: number | null, hs_code?: string | null, quantity?: number | null, description_eng?: string | null, sub_items?: Array<{ hs_code?: string | null, total_value?: number | null, description_eng?: string | null } | null> | null } | null> | null, pagination?: { total?: number | null, size?: number | null, current?: number | null } | null } | null };


export const LoginAdminUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginAdminUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdminUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginAdminUserMutation, LoginAdminUserMutationVariables>;
export const AdminMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_profile"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"write"}},{"kind":"Field","name":{"kind":"Name","value":"update"}},{"kind":"Field","name":{"kind":"Name","value":"remove"}}]}}]}}]}}]} as unknown as DocumentNode<AdminMeQuery, AdminMeQueryVariables>;
export const GdceOverviewExportsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GdceOverviewExportsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gdceOverviewExportsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exports_list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destination_country"}},{"kind":"Field","name":{"kind":"Name","value":"custom_value_usd"}},{"kind":"Field","name":{"kind":"Name","value":"hs_code"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"description_eng"}},{"kind":"Field","name":{"kind":"Name","value":"sub_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hs_code"}},{"kind":"Field","name":{"kind":"Name","value":"total_value"}},{"kind":"Field","name":{"kind":"Name","value":"description_eng"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<GdceOverviewExportsListQuery, GdceOverviewExportsListQueryVariables>;
export const GdceOverviewImportsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GdceOverviewImportsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gdceOverviewImportsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imports_list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"origin_country"}},{"kind":"Field","name":{"kind":"Name","value":"custom_value_usd"}},{"kind":"Field","name":{"kind":"Name","value":"hs_code"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"description_eng"}},{"kind":"Field","name":{"kind":"Name","value":"sub_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hs_code"}},{"kind":"Field","name":{"kind":"Name","value":"total_value"}},{"kind":"Field","name":{"kind":"Name","value":"description_eng"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<GdceOverviewImportsListQuery, GdceOverviewImportsListQueryVariables>;