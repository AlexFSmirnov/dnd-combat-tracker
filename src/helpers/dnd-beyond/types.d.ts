export interface DnDBeyondCharacter {
    id: number;
    name: string;

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
