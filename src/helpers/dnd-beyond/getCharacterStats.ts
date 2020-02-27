import axios from 'axios';
import { DnDBeyondCharacter } from './types';

export interface GetCharacterStatsProps {
    characterId: string;
}

export interface CharacterStats {
    currentHp: number;
    maxHp: number;
    tempHp: number;
    armorClass: number;
    passivePerception: number;
}

const getCharacterStats = async ({ characterId }: GetCharacterStatsProps): Promise<DnDBeyondCharacter | null> => {
    const jsonUrl = `https://www.dndbeyond.com/character/${characterId}/json`;

    try {
        const response = await axios({ method: 'GET', url: jsonUrl, withCredentials: false });
        return response.data as DnDBeyondCharacter;
    } catch {
        return null;
    }
};

export default getCharacterStats;
