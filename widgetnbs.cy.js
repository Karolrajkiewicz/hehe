/// <reference types="Cypress" />


const SELECTORS = {
email: "#email",
password: "#password",

};

describe("Widget with hours", () => {
  beforeEach(() => {
    cy.visit("https://newbookingsystem.redvike.rocks/widget/111");
  });

  it("User can go through the booking process and the parameters match the choices", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Housekeeping", { timeout: 30000 });
    cy.contains("Housekeeping").click();
    cy.contains("Laptop repair").click();
    cy.contains("Next").click();
    cy.contains("OS setup").click();
    cy.get("#mui-6").click();
    cy.get("#mui-9").click();
    cy.contains("10").click();
    cy.contains("9:00 AM").click();
    cy.contains("Next").click();
    cy.get('input').type("xD");
    cy.contains("View Summary").click();
    //then
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .css-n8slbw > :nth-child(2)', "9:00 AM").should("be.visible")
    cy.contains('.css-n8slbw > :nth-child(4)', "Laptop repair").should("be.visible");
    cy.contains('.MuiAccordionDetails-root > :nth-child(3) > .css-bcn0e3', "OS setup").should("be.visible");
    cy.contains('.css-13z0f4l', "$ 85.00").should("be.visible");
  });

;

it("User can request one time booking", () => {
  //given
  const correctUsername = "client6@client6.com"
  const correctPassword = "qwe";
  //when
  cy.get(SELECTORS.email).type(correctUsername);
  cy.get(SELECTORS.password).type(correctPassword);
  cy.contains("Sign In").click();
  cy.contains("Housekeeping", { timeout: 30000 });
  cy.contains("Housekeeping").click();
  cy.contains("Laptop repair").click();
  cy.contains("Next").click();
  cy.contains("OS setup").click();
  cy.get("#mui-6").click();
  cy.get("#mui-9").click();
  cy.contains("10").click();
  cy.contains("9:00 AM").click();
  cy.contains("Next").click();
  cy.get('input').type("xD");
  cy.contains("View Summary").click();
  cy.contains("Finalize Booking Request", { timeout: 30000 });
  cy.contains("Finalize Booking Request").click();
  cy.get('#mui-15').click();
  cy.get('.css-1y6l0mf > :nth-child(5)').click();
  cy.wait(500);
  cy.get('#mui-15').click();
// then
cy.contains("Booking request has been sent").should("be.visible")


});

it("User can request recurring booking - week", () => {
  //given
  const correctUsername = "client6@client6.com"
  const correctPassword = "qwe";
  //when
  cy.get(SELECTORS.email).type(correctUsername);
  cy.get(SELECTORS.password).type(correctPassword);
  cy.contains("Sign In").click();
  cy.contains("Housekeeping", { timeout: 30000 });
  cy.contains("Housekeeping").click();
  cy.contains("Laptop repair").click();
  cy.contains("Recurring").click();
  cy.contains("Next").click();
  cy.contains("OS setup").click();
  cy.get("#mui-6").click();
  cy.get("#mui-9").click();
  cy.contains("10").click();
  cy.contains("9:00 AM").click();
  cy.contains("Next").click();
  cy.get('input').type("xD");
  cy.contains("View Summary").click();
  cy.contains("Finalize Booking Request", { timeout: 30000 });
  cy.get('.css-1y6l0mf > :nth-child(4)').click();
  cy.contains("$ 85.00 / week").should("be.visible");
  cy.wait(500);
  cy.get('#mui-15').click();
// then
cy.contains("Booking request has been sent").should("be.visible")


});

it("User can request recurring booking - week", () => {
  //given
  const correctUsername = "client6@client6.com"
  const correctPassword = "qwe";
  //when
  cy.get(SELECTORS.email).type(correctUsername);
  cy.get(SELECTORS.password).type(correctPassword);
  cy.contains("Sign In").click();
  cy.contains("Tech support", { timeout: 30000 });
  cy.contains("Tech support").click();
  cy.contains("Laptop repair").click();
  cy.contains("Recurring").click();
  cy.contains("Next").click();
  cy.contains("OS setup").click();
  cy.get("#mui-6").click();
  cy.get("#mui-9").click();
  cy.contains("10").click();
  cy.contains("9:00 AM").click();
  cy.contains("Next").click();
  cy.get('input').type("xD");
  cy.contains("View Summary").click();
  cy.contains("Finalize Booking Request", { timeout: 30000 });
  cy.get('.css-1y6l0mf > :nth-child(4)').click();
  cy.contains("$ 85.00 / week").should("be.visible");
  cy.wait(500);
  cy.get('#mui-15').click();
// then
cy.contains("Booking request has been sent").should("be.visible")


});

it("User can request recurring booking -2 weeks", () => {
  //given
  const correctUsername = "client6@client6.com"
  const correctPassword = "qwe";
  //when
  cy.get(SELECTORS.email).type(correctUsername);
  cy.get(SELECTORS.password).type(correctPassword);
  cy.contains("Sign In").click();
  cy.contains("Tech support", { timeout: 30000 });
  cy.contains("Tech support").click();
  cy.contains("Laptop repair").click();
  cy.contains("Recurring").click();
  cy.contains("Every 2 weeks").click();
  cy.contains("Next").click();
  cy.contains("OS setup").click();
  cy.get("#mui-6").click();
  cy.get("#mui-9").click();
  cy.contains("10").click();
  cy.contains("9:00 AM").click();
  cy.contains("Next").click();
  cy.get('input').type("xD");
  cy.contains("View Summary").click();
  cy.contains("Finalize Booking Request", { timeout: 30000 });
  cy.get('.css-1y6l0mf > :nth-child(4)').click();
  cy.contains("$ 85.00 / every 2 weeks").should("be.visible");
  cy.wait(500);
  cy.get('#mui-15').click();
// then
cy.contains("Booking request has been sent").should("be.visible")


});
;

it("User can request recurring booking -3 weeks", () => {
  //given
  const correctUsername = "client6@client6.com"
  const correctPassword = "qwe";
  //when
  cy.get(SELECTORS.email).type(correctUsername);
  cy.get(SELECTORS.password).type(correctPassword);
  cy.contains("Sign In").click();
  cy.contains("Tech support", { timeout: 30000 });
  cy.contains("Tech support").click();
  cy.contains("Laptop repair").click();
  cy.contains("Recurring").click();
  cy.contains("Every 3 weeks").click();
  cy.contains("Next").click();
  cy.contains("OS setup").click();
  cy.get("#mui-6").click();
  cy.get("#mui-9").click();
  cy.contains("10").click();
  cy.contains("9:00 AM").click();
  cy.contains("Next").click();
  cy.get('input').type("xD");
  cy.contains("View Summary").click();
  cy.contains("Finalize Booking Request", { timeout: 30000 });
  cy.get('.css-1y6l0mf > :nth-child(4)').click();
  cy.contains("$ 85.00 / every 3 weeks").should("be.visible");
  cy.wait(500);
  cy.get('#mui-15').click();
// then
cy.contains("Booking request has been sent").should("be.visible")

it("User can request recurring booking -4 weeks", () => {
  //given
  const correctUsername = "client6@client6.com"
  const correctPassword = "qwe";
  //when
  cy.get(SELECTORS.email).type(correctUsername);
  cy.get(SELECTORS.password).type(correctPassword);
  cy.contains("Sign In").click();
  cy.contains("Tech support", { timeout: 30000 });
  cy.contains("Tech support").click();
  cy.contains("Laptop repair").click();
  cy.contains("Recurring").click();
  cy.contains("Every 2 weeks").click();
  cy.contains("Next").click();
  cy.contains("OS setup").click();
  cy.get("#mui-6").click();
  cy.get("#mui-9").click();
  cy.contains("10").click();
  cy.contains("9:00 AM").click();
  cy.contains("Next").click();
  cy.get('input').type("xD");
  cy.contains("View Summary").click();
  cy.contains("Finalize Booking Request", { timeout: 30000 });
  cy.get('.css-1y6l0mf > :nth-child(4)').click();
  cy.contains("$ 85.00 / every 4 weeks").should("be.visible");
  cy.wait(500);
  cy.get('#mui-15').click();
// then
cy.contains("Booking request has been sent").should("be.visible")


});
;


});
;

})

describe("Widget with hours", () => {
  beforeEach(() => {
    cy.visit("https://newbookingsystem.redvike.rocks/widget/129");
  });
  it("User can request early morning booking", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Dimitri test", { timeout: 30000 });
    cy.contains("Dimitri test").click();
    cy.contains("o9").click();
    cy.contains("Recurring").click();
    cy.contains("Next").click();
    cy.get('#mui-7').click();
    cy.contains("10").click();
    cy.contains("Early Morning").click();
    cy.contains("Next").click();
    cy.contains("Finalize Booking Request", { timeout: 30000 });
    cy.get('.css-1y6l0mf > :nth-child(4)').click();
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root', "Early Morning").should("be.visible");
    cy.contains("$ 5").should("be.visible");
    cy.wait(500);
    cy.get('#mui-11').click();
  // then
  cy.contains("Booking request has been sent").should("be.visible")
  
  
  });

  it("User can request morning booking", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Dimitri test", { timeout: 30000 });
    cy.contains("Dimitri test").click();
    cy.contains("o9").click();
    cy.contains("Recurring").click();
    cy.contains("Every 2 weeks")
    cy.contains("Next").click();
    cy.get('#mui-7').click();
    cy.contains("10").click();
    cy.contains("Morning").click();
    cy.contains("Next").click();
    cy.contains("Finalize Booking Request", { timeout: 30000 });
    cy.get('.css-1y6l0mf > :nth-child(4)').click();
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root', "Morning").should("be.visible");
    cy.contains("$ 5").should("be.visible");
    cy.wait(500);
    cy.get('#mui-11').click();
  // then
  cy.contains("Booking request has been sent").should("be.visible")
  
  
  });
  it("User can request midday booking", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Dimitri test", { timeout: 30000 });
    cy.contains("Dimitri test").click();
    cy.contains("o9").click();
    cy.contains("Recurring").click();
    cy.contains("Every 3 weeks")
    cy.contains("Next").click();
    cy.get('#mui-7').click();
    cy.contains("10").click();
    cy.contains("Midday").click();
    cy.contains("Next").click();
    cy.contains("Finalize Booking Request", { timeout: 30000 });
    cy.get('.css-1y6l0mf > :nth-child(4)').click();
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root', "Midday").should("be.visible");
    cy.contains("$ 5").should("be.visible");
    cy.wait(500);
    cy.get('#mui-11').click();
  // then
  cy.contains("Booking request has been sent").should("be.visible")
  
  
  })

  it("User can request afternoon booking", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Dimitri test", { timeout: 30000 });
    cy.contains("Dimitri test").click();
    cy.contains("o9").click();
    cy.contains("Recurring").click();
    cy.contains("Every 4 weeks")
    cy.contains("Next").click();
    cy.get('#mui-7').click();
    cy.contains("10").click();
    cy.contains("Afternoon").click();
    cy.contains("Next").click();
    cy.contains("Finalize Booking Request", { timeout: 30000 });
    cy.get('.css-1y6l0mf > :nth-child(4)').click();
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root', "Afternoon").should("be.visible");
    cy.contains("$ 5").should("be.visible");
    cy.wait(500);
    cy.get('#mui-11').click();
  // then
  cy.contains("Booking request has been sent").should("be.visible")
  
  
  })

  it("User can request afternoon booking", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Dimitri test", { timeout: 30000 });
    cy.contains("Dimitri test").click();
    cy.contains("o9").click();
    cy.contains("Recurring").click();
    cy.contains("Every 4 weeks")
    cy.contains("Next").click();
    cy.get('#mui-7').click();
    cy.contains("10").click();
    cy.contains("Evening").click();
    cy.contains("Next").click();
    cy.contains("Finalize Booking Request", { timeout: 30000 });
    cy.get('.css-1y6l0mf > :nth-child(4)').click();
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root', "Evening").should("be.visible");
    cy.contains("$ 5").should("be.visible");
    cy.wait(500);
    cy.get('#mui-11').click();
  // then
  cy.contains("Booking request has been sent").should("be.visible")
  
  
  })

  it("Anytime discount is added and the booking can proceed", () => {
    //given
    const correctUsername = "client6@client6.com"
    const correctPassword = "qwe";
    //when
    cy.get(SELECTORS.email).type(correctUsername);
    cy.get(SELECTORS.password).type(correctPassword);
    cy.contains("Sign In").click();
    cy.contains("Dimitri test", { timeout: 30000 });
    cy.contains("Dimitri test").click();
    cy.contains("o9").click();
    cy.contains("Recurring").click();
    cy.contains("Every 4 weeks")
    cy.contains("Next").click();
    cy.get('#mui-7').click();
    cy.contains("10").click();
    cy.contains("Anytime").click();
    cy.contains("Next").click();
    cy.contains("Finalize Booking Request", { timeout: 30000 });
    cy.get('.css-1y6l0mf > :nth-child(4)').click();
    cy.contains('.css-13y6qs8 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root', "Anytime").should("be.visible");
    cy.contains("$ 4.5").should("be.visible");
    cy.wait(500);
    cy.get('#mui-11').click();
  // then
  cy.contains("Booking request has been sent").should("be.visible")
  
  
  })
});