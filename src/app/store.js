import { configureStore } from '@reduxjs/toolkit'
import currentJournalSlice from '../components/journal/currentJournalSlice'
import journalsListSlice from '../components/journal/journalsListSlice'
import currentPageSlice from '../components/pageEditor/currentPageSlice'
import pagesListSlice from '../components/pageEditor/pagesListSlice'
import isNavOpenSlice from '../components/nav/isNavOpenSlice'
import promptSlice from '../components/prompt/promptSlice'
import unsavedChangesSlice from '../components/pageEditor/unsavedChangesSlice'
import userSlice from '../components/Login/userSlice'

export default configureStore({
    reducer: {
        journalsList: journalsListSlice,
        pagesList: pagesListSlice,
        currentJournal: currentJournalSlice,
        currentPage: currentPageSlice,
        isNavOpen: isNavOpenSlice,
        prompt: promptSlice,
        unsavedChanges: unsavedChangesSlice,
        user: userSlice
    }
  })