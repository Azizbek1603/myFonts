export type Files = {
    "100": string | null,
    "200": string | null,
    "300": string | null,
    "regular": string | null,
    "500": string | null,
    "600": string | null,
    "700": string | null,
    "800": string | null,
    "900": string | null,
    "100italic": string | null,
    "200italic": string | null,
    "300italic": string | null,
    "italic": string | null,
    "500italic": string | null,
    "600italic": string | null,
    "700italic": string | null,
    "800italic": string | null,
    "900italic": string | null,
}

export type Fonts = {
    "family": string,
    "variants": string[],
    "subsets": string[],
    "version": string,
    "lastModified": string,
    "files": Files,
    "category": string,
    "kind": string,
    "menu": string
}