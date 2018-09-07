// @flow
import * as React from 'react'
import styled from 'styled-components'

import { SmartLink } from 'atoms/StyledLink'
import {
  H1Md,
  H2Md,
  H3Md,
  H4Md,
  TextMd,
  UlMd,
  OlMd,
  ImgMd,
} from 'atoms/markdownAtoms'
import Ul from 'atoms/Ul'
import Li from 'atoms/Li'
import Code from 'atoms/Code'
import Pre from 'atoms/Pre'
import Tip from 'atoms/Tip'
import Caption from 'atoms/Caption'

import spacing from 'styles/spacing'

type BasicProps = {
  children: React.Node,
}
// Short use inline custom component, long use codeblock
const CodePreSplitter = ({ children }: BasicProps) => {
  if (children && children[0].length > 25) {
    return <Code fontSize={14}>{children}</Code>
  }
  return <Pre>{children}</Pre>
}

// Workaround as `CodePreSplitter` captures this case as well
const PrePassthrough = ({ children }: BasicProps) => <>{children}</>

const Spacer = styled.div`
  margin-top: ${spacing.large};
`

export const standardTransforms = {
  p: TextMd,
  pre: CodePreSplitter,
  code: CodePreSplitter,
  h1: H1Md,
  h2: H2Md,
  h3: H3Md,
  h4: H4Md,
  a: SmartLink,
  ul: UlMd,
  ol: OlMd,
  li: Li,
  img: ImgMd,
  tip: Tip,
  ['image-caption']: Caption,
  spacer: Spacer,
}