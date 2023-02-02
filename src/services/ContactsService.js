import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContact({ name, email, phone, category_id }) {
    return this.httpClient.post('/contacts', {
      body: {
        name,
        email,
        phone,
        category_id,
      },
    });
  }

  updateContact(id, { name, email, phone, category_id }) {
    return this.httpClient.put(`/contacts/${id}`, {
      body: {
        name,
        email,
        phone,
        category_id,
      },
    });
  }
}

export default new ContactsService();
