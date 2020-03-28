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

const getBeyondCharacterStats = async ({ characterId }: GetCharacterStatsProps): Promise<DnDBeyondCharacter> => {
    const jsonUrl = `https://www.dndbeyond.com/character/${characterId}/json`;

    const response = await axios({ method: 'GET', url: jsonUrl, withCredentials: false });
    return response.data as DnDBeyondCharacter;
};

export default getBeyondCharacterStats;
