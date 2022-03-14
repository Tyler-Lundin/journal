import { configureStore } from '@reduxjs/toolkit'
import currentJournalSlice from './journal/currentJournalSlice'
import journalsListSlice from './journal/journalsListSlice'
import currentPageSlice from './page/currentPageSlice'
import pagesListSlice from './page/pagesListSlice'
import promptSlice from './prompt/promptSlice'
import unsavedChangesSlice from './page/unsavedChangesSlice'
import darkModeSlice from './settings/darkModeSlice'
import fontSizeSlice from './settings/fontSizeSlice'

export default configureStore({
    reducer: {
        journalsList: journalsListSlice,
        pagesList: pagesListSlice,
        currentJournal: currentJournalSlice,
        currentPage: currentPageSlice,
        prompt: promptSlice,
        unsavedChanges: unsavedChangesSlice,
        darkMode: darkModeSlice,
        fontSize: fontSizeSlice
    }
  })