/* describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
}); */

// cypress/e2e/page.cy.ts

describe("Page", () => {
  beforeEach(() => {
    // 기본 경로로 이동
    cy.visit("/");
  });

  it('should display the text "Get started by editing"', () => {
    // 페이지에서 "Get started by editing" 텍스트가 존재하는지 검증
    cy.contains("Get started by editing").should("exist");
  });

  it('should have the correct "Docs" link with the correct href attribute', () => {
    // 'docs-link' data-testid를 가진 anchor 태그를 선택
    cy.contains("Docs") // 'a' 태그를 포함하여 'Docs' 텍스트를 찾음
      .should("exist") // 해당 anchor 태그가 존재하는지 검증
      .and(
        "have.attr",
        "href",
        "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      ); // href 속성 값 검증
  });
});
