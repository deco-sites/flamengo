import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex  sm:flex-row items-center gap-6 sm:gap-20">
      <div class="flex gap-2 max-w-[400px]">

        <Text variant="caption" tone="default-inverse">
          Na Loja Oficial do Flamengo, você encontra produtos exclusivos para
          torcer, comemorar e representar todo o orgulho e paixão Rubro-Negra.
        </Text>
      </div>
      <div>
        <Text class="flex gap-2" tone="default-inverse">
          VRT FLA COMERCIO DE ROUPAS LTDA - EPP, CNPJ: 27.723.232/0001­24 – IE:
          87.359.484 Av. das Américas, 12300, Barra da Tijuca – Rio de Janeiro /
          RJ – CEP: 22790-702. Atendimento ao Cliente: sac@lojaflamengo.com.br /
          21 3559-0982 Atendimento de segunda à sexta-feira (9h às 17h). Horario
          de almoço: 12h às 13:30h
        </Text>
      </div>
    </div>
  );
}

export default Newsletter;
