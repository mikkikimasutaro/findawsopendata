import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OpenDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OpenData {
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly Documentation?: string | null;
  readonly Contact?: string | null;
  readonly ManagedBy?: string | null;
  readonly UpdateFrequency?: string | null;
  readonly Tags?: string | null;
  readonly License?: string | null;
  readonly Resources?: string | null;
  readonly DataAtWork?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OpenData, OpenDataMetaData>);
  static copyOf(source: OpenData, mutator: (draft: MutableModel<OpenData, OpenDataMetaData>) => MutableModel<OpenData, OpenDataMetaData> | void): OpenData;
}