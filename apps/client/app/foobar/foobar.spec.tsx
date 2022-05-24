import { render } from '@testing-library/react'

import Foobar from './foobar'

describe('Foobar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Foobar />)
    expect(baseElement).toBeTruthy()
  })
})
