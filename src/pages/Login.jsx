import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { fetchLogin } from "../reducer/userSlice"
import { If } from "../components/IfElse"
import { 
  Container, 
  FormWrapper, 
  Form, 
  Logo, 
  Title, 
  Subtitle, 
  Input, 
  Button, 
  Footer, 
  A 
} from "./Login.styled"

export default function Login() {
  const userStatus = useSelector((state) => state.user.status)
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    dispatch(fetchLogin({ email, password }))
  }

  if (userStatus === 'succeeded') {
    return <Navigate to="/" />
  }

  return (
    <Container>
      <FormWrapper>
        <Logo />
        <Title>Bookmark @private</Title>
        <If test={userStatus === 'idle' || userStatus === 'loading'}>
          <If.Then>
            <Subtitle>서비스를 이용하고 싶은가요? 👋<br/>로그인을 해야 가능합니다. 😄</Subtitle>
          </If.Then>
          <If.Else>
            <Subtitle warning={true}>😭 오류가 발생했습니다.</Subtitle>
          </If.Else>
        </If>
        <Form onSubmit={onSubmit}>
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          { userStatus === 'loading' ? <Button type="submit" disabled>로그인 중...</Button> : <Button type="submit">로그인</Button>}
        </Form>
        <Footer>
          계정이 없나요? <A href="#">직접 생성하세요!</A>
        </Footer>
      </FormWrapper>
    </Container>
  )
}

