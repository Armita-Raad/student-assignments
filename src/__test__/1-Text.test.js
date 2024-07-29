/* eslint-disable no-undef */
import { render,screen } from "@testing-library/react";
import Text from "../components/1-Text/Text";

describe('text function',()=>{
    it('should render "welcome to APS"',()=>{
        render(<Text/>)
        expect(screen.getByText('Welcome To APS')).toBeInTheDocument()

    })

    it('should accept the headingText prop and render the heading with the provided text', () => {
        const headingText = 'this is a test'
        render(<Text headingText={headingText}/>)
        expect(screen.getByText(headingText)).toBeInTheDocument()
    });
})
