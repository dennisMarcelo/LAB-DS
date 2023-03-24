/* eslint-disable jsx-a11y/label-has-associated-control */
import { Envelope, Lock } from 'phosphor-react';
import React from 'react';
import { Button } from './Components/Button';
import { Checkbox } from './Components/Checkbox';
import { Heading } from './Components/Heading';
import { Text } from './Components/Text';
import { TextInput } from './Components/TextInput';
import Logo from './Icons/Logo';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center ">

        <Logo />

        <Heading size="lg" className="mt-4">Ignite Lab</Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar
        </Text>
      </header>

      <form className="flex flex-col items-stretch mt-10 w-full max-w-[400px] gap-6">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Digite seu email" type="email" id="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="************" type="password" id="password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="##" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text size="sm" asChild>
          <a href="##" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  );
}
