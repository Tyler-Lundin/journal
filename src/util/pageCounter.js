
async function pageCounter (pages, setTotalPages, setPageIndex, setCurrentPage) {
    const pagetotal = pages[0].length
    const currentPageTitle = pages[0][pagetotal - 1]
    const currentPageContent = pages[1][pagetotal - 1]
    setCurrentPage([currentPageTitle,currentPageContent])
    setTotalPages(pagetotal)
    setPageIndex(pagetotal)
    
    // {pageIndex} / {totalPages}
    // < (decrement index) | (increment index) >
    // handlePageCounter(newPageIndex) => pageCounter(newPageIndex, pages, .....)
    // updatePageIndex / update totalPages
}

export default pageCounter