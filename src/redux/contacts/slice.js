import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import {fetchContacts, addContact, deleteContact, patchContact} from './operations'
import { selectNameFilter } from "../filters/slice"

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  }
}


const slice = createSlice({
    name: 'contacts',
    initialState,
        extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.items.push(action.payload)
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload)
            })
            .addCase(patchContact.fulfilled, (state, action) => {
                const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
                state.items[itemIndex] = !state.items[itemIndex].completed
            })

            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending, patchContact.pending), (state) => {
                state.contacts.loading = true
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled, patchContact.fulfilled), (state) => {
                state.contacts.loading = false
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected, patchContact.rejected), (state, action) => {
                state.contacts.loading = false
                state.contacts.error = action.payload
            })
    }
})


export const selectContacts = state => state.contact.contacts.items
export const selectLoading = state => state.contact.contacts.loading
export const selectError = state => state.contact.contacts.error

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, str) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(str.toLowerCase().trim()) || contact.number.includes(str))
})


export const contactsReducer = slice.reducer

