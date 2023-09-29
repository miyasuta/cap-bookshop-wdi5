module.exports = {
  iClickOnCreateNewBook: async () => {
    await browser.asControl({
    	selector: {
            id: "books::BooksList--fe::table::Books::LineItem::StandardAction::Create",
            interaction: {
                    idSuffix: "BDI-content"
            }
    }}).press();
}
}