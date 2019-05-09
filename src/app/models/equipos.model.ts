export interface Equipo {
    nombre: string;
    pais: string;
    bombo: number;
    campeonatos: number;
}

export const EQUIPOS: Array<Equipo> = [
    {
        nombre: 'Ajax',
        pais: 'Holanda',
        bombo: 3,
        campeonatos: 4,
    },
    {
        nombre: 'F.C Barcelona',
        pais: 'España',
        bombo: 1,
        campeonatos: 5,
    },
    {
        nombre: 'Tottenhan',
        pais: 'Inglaterra',
        bombo: 2,
        campeonatos: 0,
    },
    {
        nombre: 'Man. United',
        pais: 'Inglaterra',
        bombo: 1,
        campeonatos: 3,
    },
    {
        nombre: 'Liverpool F.C',
        pais: 'Inglaterra',
        bombo: 2,
        campeonatos: 5,
    },
    {
        nombre: 'F.C Porto',
        pais: 'Portugal',
        bombo: 2,
        campeonatos: 2,
    },
    {
        nombre: 'Juventus F.C',
        pais: 'Italia',
        bombo: 1,
        campeonatos: 2,
    },
    {
        nombre: 'Man. City',
        pais: 'Inglaterra',
        bombo: 1,
        campeonatos: 0,
    },
];

