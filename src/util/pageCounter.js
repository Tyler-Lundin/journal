
function pageCounter (pages, setPageIndex, setCurrentPage) {
    console.log(pages)
    const totalPages = pages[0].length
    const currentPageTitle = pages[0][totalPages - 1]
    const currentPageContent = pages[1][totalPages - 1]
    setPageIndex(totalPages)
    setCurrentPage([currentPageTitle,currentPageContent])
    console.log(totalPages)
}

export default pageCounter