import Login from "../Login"
import { screen, render, fireEvent } from "@testing-library/react"
import { LoginContext } from "../../LoginContext"

const setemail = jest.fn();
const setuserName = jest.fn();
const setshowProfile = jest.fn();

describe("Checks for UserName Field",()=>{
    test("should display the input field to enter the UserName",()=>{
        render(<Login/>)  
        const userNameFieldElement = screen.getByPlaceholderText("UserName");
        expect(userNameFieldElement).toBeVisible();
    })

    test("should be able to type into the UserName Field",()=>{
        render(
        <LoginContext.Provider value={{setemail,setuserName,setshowProfile}}>
            <Login setemail={setemail} setuserName={setuserName}/>
        </LoginContext.Provider>)
        const userNameFieldElement = screen.getByPlaceholderText("UserName");
        fireEvent.click(userNameFieldElement)
        fireEvent.change(userNameFieldElement,{target: {value:"Vignesh"}})
        expect(userNameFieldElement.value).toBe("Vignesh")
    })
})

describe("Checks for Email Field",()=>{
    test("should display the input field to enter the Email Address",()=>{
        render(<LoginContext.Provider value={{setemail,setuserName,setshowProfile}}>
            <Login/>
        </LoginContext.Provider>)
        const emailFieldElement = screen.getByPlaceholderText("Mail");
        expect(emailFieldElement).toBeVisible();
    })
})

