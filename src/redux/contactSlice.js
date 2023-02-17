import { createSlice } from '@reduxjs/toolkit';
export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    },
    reducers: {
        addContact: (state, action) => state.contacts.contacts.push(action.payload),
        deleteContact: (state, action) => state.contacts.contacts.filter(contact => contact.id !== action.payload),
        filterContacts: (state, action) =>
            state.contacts.contacts.filter(contact =>
                contact.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())),
    }
});


export const { addContact, deleteContact, filterContacts } = contactSlice.actions;
export default contactSlice.reducer;
console.log(filterContacts)