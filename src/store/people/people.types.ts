export type People = {
  id: number;
  nome: string;
  cpf: string;
  endereco: {
    id: number
    bairro: string;
    cep: string;
    estado: string;
    logradouro: string;
    numero: number;
    pais: string;
    cidade: string;
  };
  foto: {
    id: number;
    name: string;
    type: string;
  } | null
}

export type Photos = {
  byteArray: string,
  description: string,
  filename: string,
  inputStream: any,
  open: boolean,
  readable: boolean,
  uri: string,
  url: string
}


export interface PeopleContextSchema {
  people: People[];
  fetchPeople: (params?: any) => Promise<void>;
}
