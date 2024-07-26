import styled from "styled-components"
import BookmarkLogo from '../assets/bookmark-logo.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
`

export const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`

export const Logo = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 20px;
  background: url(${BookmarkLogo}) no-repeat center center;
  background-size: contain;
`

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`

export const Subtitle = styled.p`
  color: ${({ warning = false }) => warning ? '#ff4d4f' : '#888'};
  margin-bottom: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #6c63ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #5848c2;
  }
`

export const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #888;
`

export const A = styled.a`
  color: #6c63ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
