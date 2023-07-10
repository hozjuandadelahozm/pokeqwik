import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  const pokemonId = useSignal(1); // primitivos, booleans, strings,


  return (
    <>
      
      <span class="text-2xl" >Buscador simple</span>

      <span class="text-9xl">{ pokemonId }</span>



    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Esta es mi primera aplicación en qwik",
    },
  ],
};
