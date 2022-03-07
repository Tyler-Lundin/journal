import { configureStore } from '@reduxjs/toolkit'
import currentJournalSlice from './journal/currentJournalSlice'
import journalsListSlice from './journal/journalsListSlice'
import currentPageSlice from './page/currentPageSlice'
import pagesListSlice from './page/pagesListSlice'
import promptSlice from '../components/prompt/promptSlice'
import unsavedChangesSlice from './page/unsavedChangesSlice'
import userSlice from '../components/Login/userSlice'

export default configureStore({
    reducer: {
        journalsList: journalsListSlice,
        pagesList: pagesListSlice,
        currentJournal: currentJournalSlice,
        currentPage: currentPageSlice,
        prompt: promptSlice,
        unsavedChanges: unsavedChangesSlice,
        user: userSlice
    }
  })