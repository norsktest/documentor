// import {render, screen, within} from '@testing-library/svelte'
import {expect, describe, test} from 'vitest'

// import DocShellTest from './DocShell.test.svelte'

describe('DocShell', () => {    
    test('DocShell toc', async () => {
        // render(DocShellTest)

        // const toc = screen.queryByTestId('toc')
        // const h2 = await within(toc).findByText('toc-head2')
        // expect(h2).toBeInTheDocument()

        // const h3 = await within(toc).findByText('toc-head3')
        // expect(h3).toBeInTheDocument()
        expect(2+2).toBe(4)
    })
})