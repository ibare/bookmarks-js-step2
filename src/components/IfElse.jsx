import { Children, isValidElement } from 'react'

const Then = ({ children }) => <>{children}</>
const Else = ({ children }) => <>{children}</>

const If = ({ test, children }) => {
  let thenNode = null 
  let elseNode = null

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      if (child.type === Then) {
        thenNode = child
      } else if (child.type === Else) {
        elseNode = child
      }
    }
  })

  return test ? thenNode : elseNode
}

If.Then = Then
If.Else = Else

export { If }
