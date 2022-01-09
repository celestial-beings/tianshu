declare interface IState {
  [propName: string]: unknown;
}

declare interface IStates {
  [propName: string]: IState;
}

declare interface _IGetters {
  [propName: string]: unknown;
}

declare interface IGetterContext {
  readonly state: IState;
  readonly getters: _IGetters;
}

declare interface IGetterOtherContexts {
  [propName: string]: IGetterContext;
}

declare interface IGetters {
  [propName: string]: (context: IGetterContext, otherContexts: IGetterOtherContexts) => unknown;
}

declare interface ICommit {
  [propName: string]: (value: unknown, otherContexts?: boolean) => void;
}

declare interface IDispatch {
  [propName: string]: (value: unknown, otherContexts?: boolean) => void;
}

declare interface IStore {
  state: IState;
  getters: _IGetters;
  commit: ICommit;
  dispatch: IDispatch;
}

declare type ReadonlyStore = Readonly<IStore>

declare interface IStores {
  [propName: string]: IStore
}

declare interface _IStores {
  [propName: string]: ReadonlyStore
}

declare interface IMutationContext {
  state: IState;
  readonly getters: _IGetters;
  commit: ICommit;
}

declare interface IMutationOtherContexts {
  [propName: string]: Readonly<IMutationContext>
}

declare interface IMutations {
  [propName: string]: (context: IMutationContext, value: unknown, otherContexts?: IMutationOtherContexts | undefined) => void;
}

declare type IActionContext = ReadonlyStore;

declare type IActionOtherContext = _IStores

declare interface IActions {
  [propName: string]: (context: IActionContext, value?: unknown, otherContexts?: IActionOtherContext | undefined) => Promise<unknown>;
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
