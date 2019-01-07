import gql from 'graphql-tag';

export const READ_CODE = gql`{
  readCode {
    body
  }
}`;
