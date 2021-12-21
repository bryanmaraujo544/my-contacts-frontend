import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function NewContent() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input placeholder="Nome" />
      <Select>
        <option value="123">Intagram</option>
        <option value="123">Intagram</option>
        <option value="123">Intagram</option>
        <option value="123">Intagram</option>
        <option value="123">Intagram</option>
      </Select>
    </>
  );
}
