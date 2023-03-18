import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex  sm:flex-row items-center gap-6 sm:gap-20">
      <div class="flex gap-2 max-w-[400px]">
        <Text variant="heading-2" tone="default-inverse">
          Cadastre-se
        </Text>
        <Text variant="caption" tone="default-inverse">
        Na Loja Oficial do Flamengo, você encontra produtos exclusivos para torcer, comemorar e representar todo o orgulho e paixão Rubro-Negra.
        </Text>
      </div>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="py-2 px-3 flex-grow bg-footer rounded text-default-inverse border-1 border-default"
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 bg-interactive-inverse rounded"
          type="bgutton" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
