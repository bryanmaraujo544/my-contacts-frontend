import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    border: 0;
    width: 100%;
    border-radius: 25px;
    background: #fff;
    height: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: 700;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) =>
        orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 0.2s linear;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;

    .contact-name {
      margin-bottom: 8px;
      display: flex;
      align-items: center;

      strong {
        font-size: 16px;
        margin-right: 8px;
        font-weight: 700;
      }

      small {
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.primary.lighter};
        padding: 4px;
        border-radius: 4px;
        font-size: 12px;
      }
    }

    & > span {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 24px;

  .details {
    span {
      font-weight: 700;
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 24px;
    word-break: break-word;
  }
`;
