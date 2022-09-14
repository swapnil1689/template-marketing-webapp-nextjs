/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InfoBlockFragment
// ====================================================

export interface InfoBlockFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_block1Image {
  __typename: "Asset";
  sys: InfoBlockFragment_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragment_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface InfoBlockFragment_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_block2Image {
  __typename: "Asset";
  sys: InfoBlockFragment_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragment_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface InfoBlockFragment_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_block3Image {
  __typename: "Asset";
  sys: InfoBlockFragment_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragment_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface InfoBlockFragment_ntVariantsCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block1Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block1Image {
  __typename: "Asset";
  sys: InfoBlockFragment_ntVariantsCollection_items_block1Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block1Body {
  __typename: "ComponentInfoBlockBlock1Body";
  json: any;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block2Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block2Image {
  __typename: "Asset";
  sys: InfoBlockFragment_ntVariantsCollection_items_block2Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block2Body {
  __typename: "ComponentInfoBlockBlock2Body";
  json: any;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block3Image_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block3Image {
  __typename: "Asset";
  sys: InfoBlockFragment_ntVariantsCollection_items_block3Image_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface InfoBlockFragment_ntVariantsCollection_items_block3Body {
  __typename: "ComponentInfoBlockBlock3Body";
  json: any;
}

export interface InfoBlockFragment_ntVariantsCollection_items_ntAudience_sys {
  __typename: "Sys";
  id: string;
}

export interface InfoBlockFragment_ntVariantsCollection_items_ntAudience {
  __typename: "NtAudience";
  sys: InfoBlockFragment_ntVariantsCollection_items_ntAudience_sys;
  name: string | null;
  id: string | null;
}

export interface InfoBlockFragment_ntVariantsCollection_items {
  __typename: "ComponentInfoBlock";
  sys: InfoBlockFragment_ntVariantsCollection_items_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: InfoBlockFragment_ntVariantsCollection_items_block1Image | null;
  block1Body: InfoBlockFragment_ntVariantsCollection_items_block1Body | null;
  block2Image: InfoBlockFragment_ntVariantsCollection_items_block2Image | null;
  block2Body: InfoBlockFragment_ntVariantsCollection_items_block2Body | null;
  block3Image: InfoBlockFragment_ntVariantsCollection_items_block3Image | null;
  block3Body: InfoBlockFragment_ntVariantsCollection_items_block3Body | null;
  colorPalette: string | null;
  ntAudience: InfoBlockFragment_ntVariantsCollection_items_ntAudience | null;
}

export interface InfoBlockFragment_ntVariantsCollection {
  __typename: "ComponentInfoBlockNt_variantsCollection";
  items: (InfoBlockFragment_ntVariantsCollection_items | null)[];
}

export interface InfoBlockFragment {
  __typename: "ComponentInfoBlock";
  sys: InfoBlockFragment_sys;
  internalName: string | null;
  headline: string | null;
  subline: string | null;
  block1Image: InfoBlockFragment_block1Image | null;
  block1Body: InfoBlockFragment_block1Body | null;
  block2Image: InfoBlockFragment_block2Image | null;
  block2Body: InfoBlockFragment_block2Body | null;
  block3Image: InfoBlockFragment_block3Image | null;
  block3Body: InfoBlockFragment_block3Body | null;
  colorPalette: string | null;
  ntVariantsCollection: InfoBlockFragment_ntVariantsCollection | null;
}
