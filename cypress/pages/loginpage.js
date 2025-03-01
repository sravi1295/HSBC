let elm_username = 'input#user-name'
let elm_passwrod = 'input[name="password"]'
let elm_loginbtn = 'input#login-button'
let elm_errmsg = 'h3[data-test="error"]'
export function loginFunction(uname, password){

    cy.get(elm_username).type(uname)
    cy.get(elm_passwrod).type(password)
    cy.get(elm_loginbtn).click()

}

export function validateErrorMsg(message){

    cy.get(elm_errmsg).contains(message)
}