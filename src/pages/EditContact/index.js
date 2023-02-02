import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

import Loader from '../../components/Loader';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const history = useHistory();

  const contactFormRef = useRef(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);
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

  function handleSubmit(formData) {
    console.log(formData);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar contato" />
      <ContactForm
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </>
  );
}
