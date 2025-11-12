import { render } from "@testing-library/react"
import { Header } from "../Components/Layout/Header"


// `it` is similar to `test`
it("Should Load the header Component with a login button", ()=>{
    render(<Header/>)
    
})