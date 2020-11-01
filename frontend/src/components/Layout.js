import styled from 'styled-components'

const LayoutStyled = styled.div`
  min-height: 100vh;
`

function Layout ({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
