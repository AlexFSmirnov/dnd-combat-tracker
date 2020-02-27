import axios from 'axios';

export interface GetCharacterStatsProps {
    characterUrl: string;
}

const getCharacterStats = async ({ characterUrl }: GetCharacterStatsProps) => {
    const result = await axios.get(characterUrl);

    console.log(result);

    return result;
};

export default getCharacterStats;
