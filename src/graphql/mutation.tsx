import { gql } from "urql";

export const LOGIN_MUTATION = gql`
  mutation LoginAdminUser($input: LoginAdminUserInput) {
    loginAdminUser(input: $input) {
      token
    }
  }
`;
