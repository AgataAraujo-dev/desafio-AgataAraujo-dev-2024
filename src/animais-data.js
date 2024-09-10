export const animais = {
    LEAO: { tamanho: 3, bioma: "savana", especie: "LEAO", carnivoro: true },
      LEOPARDO: { tamanho: 2, bioma: "savana", especie: "LEOPARDO", carnivoro: true },
      CROCODILO: { tamanho: 3, bioma: "rio", especie: "CROCODILO", carnivoro: true },
      MACACO: { tamanho: 1, bioma: ["savana", "floresta"], especie: "MACACO", carnivoro: false },
      GAZELA: { tamanho: 2, bioma: "savana", especie: "GAZELA", carnivoro: false },
      HIPOPOTAMO: { tamanho: 4, bioma: ["savana", "rio"], especie: "HIPOPOTAMO", carnivoro: false },
    };

//1	savana	10	3 macacos
//2	floresta	5	vazio
//3	savana e rio	7	1 gazela
//4	rio	8	vazio
//5	savana	9	1 leão