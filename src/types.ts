export type Pokemon = {
  apiEvolutions: Evolution[];
  apiGeneration: number;
  apiPreEvolution: Evolution;
  apiResistances: Resistance[];
  apiResistancesWithAbilities: ResistanceWithAbility[];
  apiTypes: Type[];
  id: number;
  image: string;
  name: string;
  pokedexId: number;
  resistanceModifyingAbilitiesForApi: ResistanceModifyingAbilitiesForApi[];
  slug: string;
  sprite: string;
  stats: Stat[];
};

export type Resistance = {
  name: string;
  image: string;
};

export type ResistanceWithAbility = {
  name: string;
  damage_multiplier: number;
  damage_relation: string;
};

export type ResistanceModifyingAbilitiesForApi = {
  name: string;
  slug: string;
};

export type Evolution = {
  pokedexId: number;
  name: string;
};

export type Type = {
  name: string;
  image: string;
};

export type Stat = {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};
