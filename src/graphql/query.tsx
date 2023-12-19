import { gql } from "urql";

export const GET_ME_QUERY = gql`
  query AdminMe {
    adminMe {
      id
      email
      first_name
      last_name
      user_profile
      role {
        id
        name
        read
        write
        update
        remove
      }
    }
  }
`;

export const QUERY_GDCE_OVERVIEW_EXPORTS_LIST = gql`
  query GdceOverviewExportsList($pagination: PaginationInput) {
    gdceOverviewExportsList(pagination: $pagination) {
      exports_list {
        destination_country
        custom_value_usd
        hs_code
        quantity
        description_eng
        sub_items {
          hs_code
          total_value
          description_eng
        }
      }
      pagination {
        total
        size
        current
      }
    }
  }
`;

export const QUERY_GDCE_OVERVIEW_IMPORTS_LIST = gql`
  query GdceOverviewImportsList($pagination: PaginationInput) {
    gdceOverviewImportsList(pagination: $pagination) {
      imports_list {
        origin_country
        custom_value_usd
        hs_code
        quantity
        description_eng
        sub_items {
          hs_code
          total_value
          description_eng
        }
      }
      pagination {
        total
        size
        current
      }
    }
  }
`;
