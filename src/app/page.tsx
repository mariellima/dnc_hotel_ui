import Button from '@/components/Button/index';
import ImageField from '@/components/Form/ImageField';
import TextField from '@/components/Form/TextField';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      pagina principal
      <Button>clique em mim</Button>
      <Button appearance="secondary">clique em mim</Button>
      <Link href="/teste">ir para teste</Link>
      <TextField
        label="Nome Completo"
        id="full_name"
        name="full_name"
        error="Nome Incorreto"
      />
      <ImageField
        label="Selecionar Foto de Perfil"
        id="profile_picture"
        name="profile_picture"
        defaultValue="/default-profile.jpg"
      />
    </section>
  );
}
