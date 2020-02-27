import axios from 'axios';

export interface GetCharacterStatsProps {
    characterUrl: string;
}

export interface CharacterStats {
    currentHp: number;
    maxHp: number;
    tempHp: number;
    armorClass: number;
    passivePerception: number;
}

const getCharacterStats = async ({ characterUrl }: GetCharacterStatsProps) => {
    const response = await axios({ method: 'GET', url: characterUrl });
    const html = response.data;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    console.log(doc);

    return html;
};

export default getCharacterStats;
