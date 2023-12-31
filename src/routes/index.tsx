import { $, component$, useSignal } from "@builder.io/qwik";
import {type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from '../components/pokemons/pokemon-image';

export default component$(() => {

  const pokemonId = useSignal(1); // primitivos, booleans, strings,
  const showBackImage = useSignal(false); //
  const visibleImage = useSignal(true);

  const changePokemonId = $(( value:number ) => {
    if ((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
  })  

  const nav = useNavigate();

  const goToPokemon = $(async () => {
    await nav(`/pokemon/${ pokemonId.value }/`);
  })

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{pokemonId}</span>

      {/* <Link href={`/pokemon/${ pokemonId.value }/`}></Link> */}

      <div onClick$={ goToPokemon }>
        <PokemonImage
          id={pokemonId.value}
          backImage={showBackImage.value}
          isVisible={visibleImage.value}
        />
      </div>

      <div class="mt-2">
        <button
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </button>
        <button
          onClick$={() => (showBackImage.value = !showBackImage.value)}
          class="btn btn-primary mr-2"
        >
          Voltear
        </button>
        <button
          onClick$={() => (visibleImage.value = !visibleImage.value)}
          class="btn btn-primary mr-2"
        >
          Revelar
        </button>
        <button onClick$={() => changePokemonId(+1)} class="btn btn-primary">
          Siguiente
        </button>
      </div>
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
