import Button from '@/components/Button/index';
import TextField from '@/components/Form/TextField';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      pagina principal
      <Button>clique em mim</Button>
      <Button appearance="secondary">clique em mim</Button>
      <TextField
        label="Nome Completo"
        id="full_name"
        name="full_name"
        error="Nome Incorreto"
      />
      <Link href="/teste">ir para teste</Link>
    </section>
  );
}
