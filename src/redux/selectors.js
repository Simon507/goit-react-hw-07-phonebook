//але оскільки проект маленький - можна було б прописати у
// аргументах юзселекторів у Контактлисті

export const selectContactList = state => state.contactList.contactList;

export const selectFindTarget = state => state.filters.findTarget;
