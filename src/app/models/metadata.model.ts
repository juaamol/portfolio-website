interface Metadata {
  name: string;
  property: string;
  content: string;
}

export interface MetadataRes {
  foundMetas: {
    [url: string]: Array<Metadata>;
  };
}
