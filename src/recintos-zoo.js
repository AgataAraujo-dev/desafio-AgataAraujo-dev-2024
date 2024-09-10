// Para seguir a boa prática de um código mais rápido para possíveis futuras mudanças, separei algumas informações em arquivos:
import { recintos } from './recinto-data.js';
import { animais } from './animais-data.js';

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const animalInfo = animais[animal.toUpperCase()];
    if (!(animal in animais)) {
      return { erro: "Animal inválido" };
    }
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }
  
    const recintosViaveis = [];

    for (const recintoNro in recintos) {
      // Considera o espaço ocupado por animais já existentes
      let espacoOcupado = 0;

      for (const animalExistente of [recintos.animais]) {
        espacoOcupado += animalExistente.tamanho * animalExistente.quantidade;
      }

      let espacoLivre = recintos[recintoNro].tamanho - espacoOcupado;

      // Adiciona espaço extra para mais de uma espécie
      if (recintos[recintoNro].animais.length > 1) {
        espacoLivre -= 1;
      }
      // Verifica se o animal é carnívoro e se há outros carnívoros no recinto
      if (animalInfo.carnivoro && recintos[recintoNro].animais.some((a) => a.especie !== animal)) {
        continue;
      }
      // Verifica se o recinto possui o bioma ideal
      if (Array.isArray(animalInfo.bioma)) {
        if (!animalInfo.bioma.some((b) => recintos[recintoNro].bioma.includes(b))) {
          continue;
        }
      } else {
        if (animalInfo.bioma !== recintos[recintoNro].bioma) {
          continue;
        }
      }
      // - Se há espaço suficiente para a quantidade de animais
      if (espacoLivre >= animalInfo.tamanho * quantidade) {
        recintosViaveis.push(`Recinto nro ${recintoNro} (espaço livre: ${ espacoLivre - animalInfo.tamanho * quantidade} total: ${recintos[recintoNro].tamanho})`);
      }
      // Verificações das regras passadas para cada animal:
        //  - Se o hipopótamo está num recinto com savana e rio
      if (animal === "HIPOPOTAMO" &&(!recintos[recintoNro].bioma.includes("savana") || !recintos[recintoNro].bioma.includes("rio"))) {
        return true;
      }
        // - Se macaco não está sozinho
      if (animal === "MACACO" && recintos[recintoNro].animais.length === 0) {
        return true;
      }
    }
  
    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return { recintosViaveis };
  }
}

export { RecintosZoo };
