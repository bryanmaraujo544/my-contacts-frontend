import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

import Loader from '../../components/Loader';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const { id } = useParams();
  const history = useHistory();

  const contactFormRef = useRef(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        setContactName(contactData.name);
        contactFormRef.current.setFields({
          name: contactData.name,
          phone: contactData.phone,
          categoryId: contactData.category_id,
          email: contactData.email,
        });
        setIsLoading(false);
      } catch {
        history.push('/');
        toast({ type: 'danger', text: 'Contato não encontrado' });
      }
    }

    loadContact();
  }, [id, history]);

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category_id,
      };

      const { name } = await ContactsService.updateContact(id, contact);

      setContactName(name);
      toast({
        type: 'success',
        text: 'Contato atualizado.',
      });
    } catch (err) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao atualizar o contato.',
      });
    }
    console.log(formData);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </>
  );
}
