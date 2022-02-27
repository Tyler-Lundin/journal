
async function pageCounter (pages, setTotalPages, setPageIndex, setCurrentPage, selectedPage) {
    
    const pagetotal = pages[0].length
    const openedIndex = pagetotal - selectedPage
    const currentPageTitle = pages[0][openedIndex]
    const currentPageContent = pages[1][openedIndex]
    setCurrentPage([currentPageTitle,currentPageContent])
    setTotalPages(pagetotal)
    setPageIndex(pagetotal)
    
    // {pageIndex} / {totalPages}
    // < (decrement index) | (increment index) >
    // handlePageCounter(newPageIndex) => pageCounter(newPageIndex, pages, .....)
    // updatePageIndex / update totalPages
}

export default pageCounter