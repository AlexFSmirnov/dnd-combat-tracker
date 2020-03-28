import { BeyondCharactersState } from './reducers/beyondCharacters';
import { CustomCharactersState } from './reducers/customCharacters';
import { UIState } from './reducers/ui';
import { EncounterState } from './reducers/encounter';

export interface State {
    beyondCharacters?: BeyondCharactersState;
    customCharacters?: CustomCharactersState;
    ui?: UIState;
    encounter?: EncounterState;
}

export interface CustomCharacter {
    name: string;
    maxHitPoints: number;
    avatarUrl?: string;
}

export interface BeyondCharacter {
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
