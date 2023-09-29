const ManageBooksPage = require("../pageobjects/manageBooks.page");
const NewBookPage = require("../pageobjects/newBook.page");

describe("Manage bookshop", () => {
    const bookTitle = "How to Cook Pancakes";
    it("create a new book", async () => {
        await ManageBooksPage.iClickOnCreateNewBook();
        await NewBookPage.iEnterTitle(bookTitle);
        await NewBookPage.iSelectGenre();
        await NewBookPage.iSelectAuthor();
        await NewBookPage.iPressCreate();
        await NewBookPage.iSeeEditButton()
    });

    it("should check book is added", async () => {
        await NewBookPage.iNavigateBack();
        await ManageBooksPage.theBookListContains(bookTitle);
    });
});