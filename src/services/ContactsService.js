import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact({ name, email, phone, category_id }) {
    console.log('service', { name, email, phone, category_id });
    return this.httpClient.post('/contacts', {
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
