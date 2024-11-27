
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            createDefaultUser: async () => { 
                await fetch('https://playground.4geeks.com/contact/agendas/frqmx/',
                    {method: "POST", headers: {'Content-Type': 'application/json'}}
                );
                
                
                getActions().getContacts()
            },
            getContacts: async () => {
                const store = getStore()
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/frqmx/contacts');
                    if (!response.ok) throw new Error("Error fetching contacts");
                    const data = await response.json();
                    setStore({...store, contacts: data.contacts});
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },
            addContact: async (contact) => {
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/frqmx/contacts', {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...contact, agenda_slug: "frqmx" })
                    });
                    if (!response.ok) throw new Error("Error adding contact");
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },/**Hay un error */
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/frqmx/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (!response.ok) throw new Error("Error deleting contact");
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/frqmx/contacts/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!response.ok) throw new Error("Error updating contact");
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            }
        }
    };
};

export default getState;
