import { CharactersState } from './reducers/characters';
import { NPCState } from './reducers/npcs';

export interface State {
    characters?: CharactersState;
    npcs?: NPCState;
}

export interface Character {
    id: number;
    name: string;

    maxHitPoints: number;
    removedHitPoints: number;
    temporaryHitPoints: number;
    deathSaves: DeathSaves;

    avatarUrl: string;
    themeColor: ThemeColor | null;
    defaultBackdrop: DefaultBackdrop;
}

export interface DeathSaves {
    failCount: number | null;
    successCount: number | null;
    isStabilized?: boolean;
}

export interface ThemeColor {
    themeColor: string;
    backgroundColor: string;
}

export interface DefaultBackdrop {
    backdropAvatarUrl: string;
    smallBackdropAvatarUrl: string;
    largeBackdropAvatarUrl: string;
    thumbnailBackdropAvatarUrl: string;
}

export interface NPC {
    name: string;
    maxHitPoints: number;
    avatarUrl?: string;
}