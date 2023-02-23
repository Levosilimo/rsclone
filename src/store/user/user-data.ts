import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from "../../constants";
import {checkAuthAction, getUserDataAction, loginAction, registrationAction, setUserDataAction} from "../api-action";
import {language, theme} from "../../types/user-data";
import i18n from "../../i18n";
import {dropToken, getLevel, getToken, saveLevel} from "../../services/local-storage";
import {parseJwt} from "../../utils";

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  username?: string;
  email?: string;
  records?: Record<string, Array<number>>;
  currentLevel: number;
  isLoadingError: boolean,
  language?: language;
  volume: number;
  theme: theme;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  isLoadingError: false,
  volume: 50,
  theme: "green",
  currentLevel: getLevel(),
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    logOutAction: (state) => {
      dropToken();
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setTheme: (state, action: PayloadAction<theme>) => {
      state.theme = action.payload;
    },
    setLevelAction: (state, action: PayloadAction<number>) => {
      saveLevel(action.payload);
      state.currentLevel = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.username = parseJwt(getToken()).username;
        state.isDataLoading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.isDataLoading = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.isDataLoading = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(registrationAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(registrationAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.username = action.payload.username;
        state.records = action.payload.records;
        state.email = action.payload.email;
      })
      .addCase(registrationAction.rejected, (state) => {
        state.isLoadingError = true;
        state.isDataLoading = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.username = action.payload.username;
        state.records = action.payload.records;
        state.email = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoadingError = true;
        state.isDataLoading = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(getUserDataAction.fulfilled, (state, action) => {
        state.records = action.payload.records;
        state.language = action.payload.language;
        i18n.changeLanguage(action.payload.language);
      })
      .addCase(setUserDataAction.pending, (state, action) => {
        state.records = action.meta.arg.records;
        state.language = action.meta.arg.language;
        i18n.changeLanguage(action.meta.arg.language);
      })
      .addCase(setUserDataAction.fulfilled, (state, action) => {
        state.records = action.payload.records;
        state.language = action.payload.language;
        i18n.changeLanguage(action.payload.language);
      })
  }
})

export const { logOutAction, setVolume, setTheme, setLevelAction } = userProcess.actions;

