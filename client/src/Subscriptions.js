import gql from 'graphql-tag';

export const TYPING_CODE_SUBSCRIPTION = gql`
  subscription {
    typingCode {
      body
    }
  }`;