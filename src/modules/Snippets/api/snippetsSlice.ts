import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Comment, Snippet } from './snippets.interface';
import type { MarkType } from '@/types/snippets.types';

interface SnippetsState {
  snippets: Snippet[];
  mySnippets: Snippet[];
  snippet: Snippet | null;
  languages: string[];
}

const initialState: SnippetsState = {
  snippets: [],
  snippet: null,
  mySnippets: [],
  languages: [],
};

const snippetsSlice = createSlice({
  name: 'snippets',
  initialState,
  reducers: {
    setSnippets: (state, action: PayloadAction<Snippet[]>) => {
      state.snippets = action.payload;
    },
    setMySnippets: (state, action: PayloadAction<Snippet[]>) => {
      state.mySnippets = action.payload;
    },
    removeSnippet: (state, action: PayloadAction<{ snippetId: string }>) => {
      const { snippetId } = action.payload;

      state.snippets = state.snippets.filter((snippet) => snippet.id !== snippetId);
      state.mySnippets = state.mySnippets.filter((snippet) => snippet.id !== snippetId);

      if (state.snippet?.id === snippetId) {
        state.snippet = null;
      }
    },
    updateMarkLocal: (
      state,
      action: PayloadAction<{ snippetId: string; mark: MarkType; userId: string }>,
    ) => {
      const { snippetId, mark, userId } = action.payload;

      const updateMarks = (snippet?: Snippet | null) => {
        if (!snippet) return;
        const existingMarkIndex = snippet.marks.findIndex((m) => m.user.id === userId);

        if (mark === 'none') {
          if (existingMarkIndex !== -1) {
            snippet.marks.splice(existingMarkIndex, 1);
          }
          return;
        }

        if (existingMarkIndex === -1) {
          snippet.marks.push({
            id: '',
            type: mark,
            user: { id: userId, username: '', role: 'user' },
          });
        } else {
          snippet.marks[existingMarkIndex].type = mark;
        }
      };

      const snippetInList = state.snippets.find((s) => s.id === snippetId);
      const snippetInMine = state.mySnippets.find((s) => s.id === snippetId);
      updateMarks(snippetInList);
      updateMarks(snippetInMine);

      if (state.snippet?.id === snippetId) {
        updateMarks(state.snippet);
      }
    },

    setSnippet: (state, action: PayloadAction<Snippet>) => {
      state.snippet = action.payload;
    },
    updateSnippetComment: (
      state,
      action: PayloadAction<{ snippetId: string; comment: Comment }>,
    ) => {
      const { snippetId, comment } = action.payload;

      if (state.snippet?.id === snippetId) {
        state.snippet.comments.push(comment);
      }

      const snippets = state.snippets.find((s) => s.id === snippetId);
      const mySnippets = state.mySnippets.find((s) => s.id === snippetId);
      snippets?.comments.push(comment);
      mySnippets?.comments.push(comment);
    },
    setLanguages: (state, action: PayloadAction<string[]>) => {
      state.languages = action.payload;
    },
  },
});

export const snippetsReducer = snippetsSlice.reducer;
export const snippetsAction = snippetsSlice.actions;
