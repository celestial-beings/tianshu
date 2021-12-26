declare interface IState {
  [propName: string]: unknown;
}

declare interface IStates {
  [propName: string]: IState;
}

declare interface IGetters {
  [propName: string]: () => unknown;
}

declare interface IMutations {
  [propName: string]: (state: IState, value?: unknown) => void;
}

declare interface ICommit {
  [propName: string]: (value: unknown) => void;
}

declare interface IDispatch {
  [propName: string]: (value: unknown) => void;
}

declare interface IActions {
  [propName: string]: (commit: ICommit, value: unknown) => Promise<unknown>;
}

declare interface IModule {
  name?: string;
  state?: IState;
  getters?: IGetters;
  mutations?: IMutations;
  actions?: IActions;
}

declare interface IModules {
  [propName: string]: IModule
}

declare interface IStoreOptions extends IModule {
  modules?: IModules;
}

declare interface IStore {
  state: IState;
  commit: ICommit;
  dispatch: IDispatch;
}

declare interface IStores {
  [propName: string]: IStore
}
