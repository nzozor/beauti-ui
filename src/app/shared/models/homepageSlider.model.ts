export interface HomePageSlider {
    images:           Image[];
    _id:              string;
    name?:            string;
    content?:         string;
    createdAt:        Date;
    updatedAt:        Date;
    __v:              number;
    slug:             string;
    title:            string;
    treatment?:       string;
    treatmentParent?: string;
    parent?:          HomePageSlider;
    id:               string;
}

export interface Image {
    _id:             string;
    name:            string;
    alternativeText: string;
    caption:         string;
    hash:            string;
    ext:             EXT;
    mime:            MIME;
    size:            number;
    width:           number;
    height:          number;
    url:             string;
    formats:         Formats;
    provider:        Provider;
    related:         HomePageSlider[];
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    id:              string;
}

export enum EXT {
    JPEG = ".jpeg",
}

export interface Formats {
    thumbnail: Large;
    large:     Large;
    medium:    Large;
    small:     Large;
}

export interface Large {
    hash:   LargeHash;
    ext:    EXT;
    mime:   MIME;
    width:  number;
    height: number;
    size:   number;
    path:   null;
    url:    string;
}

export enum LargeHash {
    LargeTreatmentSkinbeautyclinic704E97B81C = "large_treatment_skinbeautyclinic_704e97b81c",
    MediumTreatmentSkinbeautyclinic704E97B81C = "medium_treatment_skinbeautyclinic_704e97b81c",
    SmallTreatmentSkinbeautyclinic704E97B81C = "small_treatment_skinbeautyclinic_704e97b81c",
    ThumbnailTreatmentSkinbeautyclinic704E97B81C = "thumbnail_treatment_skinbeautyclinic_704e97b81c",
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export enum Provider {
    Local = "local",
}
